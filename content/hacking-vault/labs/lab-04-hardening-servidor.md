---
title: "Lab 04 - Hardening de un Servidor Linux"
tags:
  - hacking
  - laboratorio
  - hardening
tipo: laboratorio
certificacion: hacking-vault
---

# Lab 04 - Hardening de un Servidor Linux

**Dificultad:** Avanzada | **Duracion estimada:** 4-6 horas | **Herramientas:** UFW, fail2ban, auditd, Lynis

## Objetivo

Securizar un servidor Ubuntu/Debian recien instalado desde cero, aplicando las mejores practicas de hardening basadas en CIS Benchmarks. Al finalizar, ejecutaras Lynis para auditar el resultado y verificar que el servidor cumple un nivel de seguridad aceptable.

> **Advertencia:** Realiza este laboratorio en una maquina virtual de prueba. Algunos cambios de configuracion pueden dejarte sin acceso al servidor si se aplican incorrectamente. Ten siempre una via de acceso alternativa (consola de VirtualBox/VMware) disponible.

---

## Preparacion del Entorno

### Levantar un servidor Ubuntu con Vagrant

1. Crea el entorno de laboratorio:

```bash
mkdir -p ~/labs/lab04-hardening && cd ~/labs/lab04-hardening

cat > Vagrantfile << 'EOF'
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"
  config.vm.hostname = "hardening-lab"
  config.vm.network "private_network", ip: "192.168.56.20"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
    vb.cpus = 1
  end
end
EOF

vagrant up && vagrant ssh
```

### Alternativa con Docker (practica parcial)

```bash
docker run -it --name hardening-lab ubuntu:22.04 /bin/bash
apt-get update && apt-get install -y sudo openssh-server vim
```

---

## Paso 1: Configuracion Inicial del Sistema

2. Actualiza todo el sistema:

```bash
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get autoremove -y
```

3. Configura actualizaciones automaticas de seguridad:

```bash
sudo apt-get install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

4. Crea un usuario administrador y deshabilita el acceso directo de root:

```bash
sudo adduser sysadmin
sudo usermod -aG sudo sysadmin

# Verificar que puedes hacer sudo con el nuevo usuario
su - sysadmin
sudo whoami   # Debe devolver: root
```

5. Deshabilita login de root:

```bash
sudo passwd -l root
```

---

## Paso 2: Hardening de SSH

6. Edita la configuracion de SSH:

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo vim /etc/ssh/sshd_config
```

7. Aplica las siguientes configuraciones de seguridad:

```bash
# Cambiar puerto por defecto
Port 2222

# Deshabilitar login de root
PermitRootLogin no

# Solo autenticacion por clave publica
PasswordAuthentication no
PubkeyAuthentication yes

# Limitar intentos y sesiones
MaxAuthTries 3
MaxSessions 2
LoginGraceTime 30

# Deshabilitar funciones innecesarias
X11Forwarding no
AllowTcpForwarding no
PermitEmptyPasswords no

# Limitar usuarios que pueden conectarse
AllowUsers sysadmin

# Protocolo y cifrados fuertes
Protocol 2
Ciphers aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com
KexAlgorithms curve25519-sha256@libssh.org,diffie-hellman-group16-sha512

# Timeout de inactividad
ClientAliveInterval 300
ClientAliveCountMax 2
```

8. Genera y configura claves SSH antes de reiniciar:

```bash
# Desde tu maquina local, genera las claves
ssh-keygen -t ed25519 -C "sysadmin@hardening-lab"

# Copia la clave publica al servidor
ssh-copy-id -p 22 sysadmin@192.168.56.20
```

9. Verifica la configuracion y reinicia SSH:

```bash
sudo sshd -t
sudo systemctl restart sshd
```

10. Instala y configura fail2ban para proteger SSH:

```bash
sudo apt-get install -y fail2ban

sudo cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3
banaction = iptables-multiport

[sshd]
enabled = true
port = 2222
logpath = /var/log/auth.log
maxretry = 3
bantime = 7200
EOF

sudo systemctl enable fail2ban
sudo systemctl restart fail2ban
sudo fail2ban-client status sshd
```

---

## Paso 3: Configuracion del Firewall

11. Configura UFW (Uncomplicated Firewall):

```bash
sudo apt-get install -y ufw

# Politica por defecto: denegar todo entrante, permitir saliente
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Permitir SSH en puerto personalizado
sudo ufw allow 2222/tcp comment 'SSH'

# Permitir HTTP y HTTPS (si es servidor web)
sudo ufw allow 80/tcp comment 'HTTP'
sudo ufw allow 443/tcp comment 'HTTPS'

# Activar el firewall
sudo ufw enable
sudo ufw status verbose
```

12. Reglas adicionales con limites de conexion:

```bash
# Limitar conexiones SSH (max 6 conexiones en 30 segundos)
sudo ufw limit 2222/tcp

# Permitir acceso solo desde una IP especifica (gestion)
sudo ufw allow from 192.168.56.1 to any port 2222 proto tcp comment 'SSH admin'
```

13. Verificar las reglas iptables generadas:

```bash
sudo iptables -L -n -v
```

---

## Paso 4: Minimizacion de Servicios

14. Audita los servicios activos y puertos en escucha:

```bash
sudo ss -tulnp
sudo systemctl list-units --type=service --state=running
```

15. Deshabilita servicios innecesarios:

```bash
# Ejemplos comunes de servicios a deshabilitar
sudo systemctl disable --now cups.service      # Impresion
sudo systemctl disable --now avahi-daemon      # mDNS/Bonjour
sudo systemctl disable --now bluetooth.service # Bluetooth
sudo systemctl disable --now rpcbind.service   # NFS/RPC

# Verificar que se deshabilitaron
sudo systemctl is-enabled cups.service
```

16. Elimina paquetes innecesarios:

```bash
sudo apt-get purge -y telnet rsh-client rsh-redone-client
sudo apt-get autoremove -y
```

---

## Paso 5: Proteccion del Sistema de Archivos

17. Verifica y configura opciones de montaje seguras. Edita `/etc/fstab`:

```bash
# Ejemplo de lineas a añadir o modificar en /etc/fstab
# Montar /tmp con opciones restrictivas
tmpfs   /tmp    tmpfs   defaults,noexec,nosuid,nodev    0 0

# Si /var/tmp es particion separada
# /dev/sdaX   /var/tmp   ext4   defaults,noexec,nosuid,nodev   0 0
```

18. Aplica los cambios y verifica:

```bash
sudo mount -o remount /tmp
mount | grep tmp
# Debe mostrar: noexec,nosuid,nodev
```

19. Configura permisos de archivos criticos:

```bash
# Permisos estrictos en archivos de configuracion
sudo chmod 600 /etc/shadow
sudo chmod 644 /etc/passwd
sudo chmod 600 /etc/gshadow
sudo chmod 644 /etc/group
sudo chmod 700 /root
sudo chmod 600 /etc/ssh/sshd_config

# Buscar archivos sin propietario
sudo find / -nouser -o -nogroup 2>/dev/null

# Buscar archivos con permisos SUID/SGID no necesarios
sudo find / -perm -4000 -type f 2>/dev/null
sudo find / -perm -2000 -type f 2>/dev/null
```

---

## Paso 6: Hardening del Kernel con sysctl

20. Configura parametros de seguridad del kernel:

```bash
sudo cat > /etc/sysctl.d/99-hardening.conf << 'EOF'
# Proteccion contra IP spoofing
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1

# Deshabilitar redireccion de paquetes (si no es router)
net.ipv4.ip_forward = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0

# No aceptar paquetes ICMP redirect
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0

# No aceptar paquetes source-routed
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0

# Proteccion SYN flood
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 2

# Registrar paquetes sospechosos
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.default.log_martians = 1

# Ignorar broadcast ICMP (proteccion smurf)
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1

# ASLR (Address Space Layout Randomization)
kernel.randomize_va_space = 2

# Restriccion de dmesg
kernel.dmesg_restrict = 1

# Restriccion de ptrace (anti-debugging)
kernel.yama.ptrace_scope = 2

# Deshabilitar carga de modulos del kernel (activar solo cuando el sistema es estable)
# kernel.modules_disabled = 1
EOF
```

21. Aplica y verifica los parametros:

```bash
sudo sysctl -p /etc/sysctl.d/99-hardening.conf
sudo sysctl net.ipv4.conf.all.rp_filter   # Debe devolver 1
sudo sysctl kernel.randomize_va_space      # Debe devolver 2
```

---

## Paso 7: Auditoria del Sistema con auditd

22. Instala y configura auditd:

```bash
sudo apt-get install -y auditd audispd-plugins
sudo systemctl enable auditd
```

23. Configura reglas de auditoria:

```bash
sudo cat > /etc/audit/rules.d/hardening.rules << 'EOF'
# Monitorizar cambios en archivos criticos de autenticacion
-w /etc/passwd -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/gshadow -p wa -k identity
-w /etc/sudoers -p wa -k sudoers
-w /etc/sudoers.d/ -p wa -k sudoers

# Monitorizar cambios en configuracion de SSH
-w /etc/ssh/sshd_config -p wa -k sshd_config

# Monitorizar ejecucion de comandos privilegiados
-a always,exit -F path=/usr/bin/sudo -F perm=x -k priv_cmd
-a always,exit -F path=/usr/bin/su -F perm=x -k priv_cmd
-a always,exit -F path=/usr/bin/passwd -F perm=x -k priv_cmd

# Monitorizar cambios en cron
-w /etc/crontab -p wa -k cron
-w /etc/cron.d/ -p wa -k cron
-w /var/spool/cron/ -p wa -k cron

# Monitorizar conexiones de red
-a always,exit -F arch=b64 -S connect -k network_connect

# Monitorizar carga de modulos del kernel
-w /sbin/insmod -p x -k kernel_modules
-w /sbin/modprobe -p x -k kernel_modules

# Hacer las reglas inmutables (requiere reboot para cambiar)
-e 2
EOF
```

24. Carga las reglas y verifica:

```bash
sudo augenrules --load
sudo auditctl -l
```

25. Prueba que las reglas funcionan:

```bash
# Modifica un archivo monitorizado
sudo touch /etc/sudoers.d/test && sudo rm /etc/sudoers.d/test

# Busca el evento en los logs
sudo ausearch -k sudoers -ts recent
```

---

## Paso 8: Monitorizacion de Logs

26. Configura logrotate para manejar los logs:

```bash
# Verificar configuracion de logrotate
cat /etc/logrotate.d/rsyslog
```

27. Configura alertas basicas con un script de monitorizacion:

```bash
sudo cat > /usr/local/bin/log-monitor.sh << 'SCRIPT_EOF'
#!/bin/bash
# Monitor basico de eventos de seguridad
LOG="/var/log/auth.log"
ALERT_FILE="/var/log/security-alerts.log"

# Detectar intentos de login fallidos
FAILED=$(grep "Failed password" "$LOG" | tail -20)
if [ -n "$FAILED" ]; then
    echo "[$(date)] ALERTA: Intentos de login fallidos detectados" >> "$ALERT_FILE"
    echo "$FAILED" >> "$ALERT_FILE"
fi

# Detectar nuevos usuarios creados
NEWUSER=$(grep "new user" "$LOG" | tail -5)
if [ -n "$NEWUSER" ]; then
    echo "[$(date)] ALERTA: Nuevos usuarios creados" >> "$ALERT_FILE"
    echo "$NEWUSER" >> "$ALERT_FILE"
fi

# Detectar cambios de sudo
SUDO_EVENTS=$(grep "sudo:" "$LOG" | tail -10)
if [ -n "$SUDO_EVENTS" ]; then
    echo "[$(date)] INFO: Eventos sudo recientes" >> "$ALERT_FILE"
    echo "$SUDO_EVENTS" >> "$ALERT_FILE"
fi
SCRIPT_EOF

sudo chmod 700 /usr/local/bin/log-monitor.sh

# Ejecutar cada 15 minutos via cron
echo "*/15 * * * * root /usr/local/bin/log-monitor.sh" | sudo tee -a /etc/crontab
```

---

## Paso 9: Auditoria con Lynis

28. Instala y ejecuta Lynis:

```bash
sudo apt-get install -y lynis

# Ejecutar auditoria completa del sistema
sudo lynis audit system | tee ~/lynis-report.txt
```

29. Revisa las secciones clave del informe:

```bash
# Ver resultados resumidos
sudo cat /var/log/lynis-report.dat | grep "suggestion"
sudo cat /var/log/lynis-report.dat | grep "warning"

# Ver el indice de hardening
grep "hardening_index" /var/log/lynis-report.dat
```

30. El objetivo es alcanzar un indice de hardening superior a 70. Si estas por debajo, revisa las sugerencias y aplica las correcciones que Lynis recomienda.

---

## Paso 10: Lista de Verificacion Final

31. Repasa esta checklist para confirmar que todo esta aplicado:

| # | Control | Comando de verificacion | Estado |
|---|---------|------------------------|--------|
| 1 | Sistema actualizado | `apt list --upgradable` | |
| 2 | Root deshabilitado | `sudo passwd -S root` (debe mostrar L) | |
| 3 | SSH en puerto no estandar | `ss -tlnp \| grep sshd` | |
| 4 | SSH solo con claves | `grep PasswordAuthentication /etc/ssh/sshd_config` | |
| 5 | fail2ban activo | `sudo fail2ban-client status sshd` | |
| 6 | Firewall activo | `sudo ufw status` | |
| 7 | Servicios minimos | `sudo ss -tulnp` | |
| 8 | /tmp con noexec | `mount \| grep /tmp` | |
| 9 | sysctl aplicado | `sysctl net.ipv4.tcp_syncookies` | |
| 10 | auditd activo | `sudo auditctl -l` | |
| 11 | Lynis > 70 | `grep hardening_index /var/log/lynis-report.dat` | |

---

## Limpieza

32. Si usaste Vagrant:

```bash
cd ~/labs/lab04-hardening
vagrant destroy -f
```

33. Si usaste Docker:

```bash
docker stop hardening-lab && docker rm hardening-lab
```

---

## Preguntas de Evaluacion

1. Por que es importante cambiar el puerto SSH por defecto? Es suficiente como medida de seguridad?
2. Que parametro de sysctl protege contra ataques SYN flood y como funciona?
3. Que diferencia hay entre UFW deny y UFW reject?
4. Para que sirve la regla `-e 2` al final de las reglas de auditd?
5. Que indice de hardening obtuviste con Lynis? Que sugerencias prioritarias te dio?

---

## Recursos Adicionales

- [CIS Ubuntu Linux Benchmark](https://www.cisecurity.org/benchmark/ubuntu_linux)
- [NIST SP 800-123 - Guide to General Server Security](https://csrc.nist.gov/publications/detail/sp/800-123/final)
- [Mozilla SSH Guidelines](https://infosec.mozilla.org/guidelines/openssh)
- [Linux Audit Documentation](https://linux-audit.com/)
