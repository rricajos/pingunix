---
title: "Flashcards - Hardening de Sistemas Linux"
tags:
  - hacking
  - defensivo
  - hardening
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "hardening"
---

# Flashcards: Hardening de Sistemas Linux

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-001">
<div class="flashcard-front">

**P:** Que son los CIS Benchmarks y cuales son sus niveles de perfil?

</div>
<div class="flashcard-back">

**R:** Los CIS (Center for Internet Security) Benchmarks son guias de configuracion reconocidas por la industria para asegurar sistemas. Niveles: **Level 1** (configuraciones basicas, minimo impacto operacional), **Level 2** (configuraciones avanzadas, mayor seguridad, impacto medio-alto), **STIG** (requisitos del DoD, maxima restriccion, alto impacto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-002">
<div class="flashcard-front">

**P:** Que configuraciones de SSH son imprescindibles para un hardening basico en `/etc/ssh/sshd_config`?

</div>
<div class="flashcard-back">

**R:** `PermitRootLogin no` (prohibir login root), `PasswordAuthentication no` (solo claves publicas), `PubkeyAuthentication yes`, `MaxAuthTries 3`, `X11Forwarding no`, `AllowUsers deploy admin` (restringir usuarios). Complementar con algoritmos fuertes: `KexAlgorithms curve25519-sha256`, `Ciphers chacha20-poly1305@openssh.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-003">
<div class="flashcard-front">

**P:** Que es Fail2ban y como se configura para proteger SSH?

</div>
<div class="flashcard-back">

**R:** Fail2ban monitorea logs y bloquea IPs tras intentos fallidos de autenticacion. Configuracion en `/etc/fail2ban/jail.local`: `[sshd]` con `enabled = true`, `maxretry = 3` (intentos), `bantime = 3600` (1 hora de bloqueo), `findtime = 600` (ventana de 10 minutos). Verificar con `fail2ban-client status sshd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-004">
<div class="flashcard-front">

**P:** Que parametro de sysctl activa ASLR completo y que valor debe tener?

</div>
<div class="flashcard-back">

**R:** `kernel.randomize_va_space = 2`. El valor 2 activa ASLR completo, aleatorizando la posicion de stack, heap, mmap y la base del ejecutable en memoria. Esto dificulta significativamente los exploits de corrupcion de memoria. Se configura en `/etc/sysctl.d/99-hardening.conf` y se aplica con `sysctl --system`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-005">
<div class="flashcard-front">

**P:** Que opciones de montaje restrictivas se recomiendan para /tmp en /etc/fstab y que hace cada una?

</div>
<div class="flashcard-back">

**R:** `tmpfs /tmp tmpfs defaults,noexec,nosuid,nodev,size=2G 0 0`. **noexec**: impide ejecucion de binarios (evita que atacantes ejecuten exploits desde /tmp). **nosuid**: ignora bits SUID/SGID (evita escalada de privilegios). **nodev**: no permite dispositivos de bloque/caracter. Aplicar tambien a `/var/tmp`, `/home` y `/var/log`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-006">
<div class="flashcard-front">

**P:** Que parametros de sysctl protegen contra ataques de red como SYN flood y ICMP redirect?

</div>
<div class="flashcard-back">

**R:** Proteccion SYN flood: `net.ipv4.tcp_syncookies = 1`. ICMP: `net.ipv4.conf.all.accept_redirects = 0`, `net.ipv4.conf.all.send_redirects = 0`, `net.ipv4.icmp_echo_ignore_broadcasts = 1` (proteccion Smurf). IP forwarding: `net.ipv4.ip_forward = 0` (deshabilitar si no es router). Reverse path filtering: `net.ipv4.conf.all.rp_filter = 1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-007">
<div class="flashcard-front">

**P:** Por que se recomienda eliminar compiladores (gcc, g++, make) en servidores de produccion?

</div>
<div class="flashcard-back">

**R:** Eliminar compiladores dificulta que un atacante compile exploits directamente en el sistema comprometido. Sin `gcc` o `make`, el atacante necesita compilar en otra maquina y transferir el binario, lo que agrega complejidad al ataque. Se eliminan con `apt purge gcc g++ make build-essential`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-008">
<div class="flashcard-front">

**P:** Que directivas de systemd se usan para hacer sandboxing de un servicio?

</div>
<div class="flashcard-back">

**R:** `ProtectSystem=strict` (filesystem solo lectura), `ProtectHome=yes`, `NoNewPrivileges=yes`, `PrivateTmp=yes`, `PrivateDevices=yes`, `ProtectKernelTunables=yes`, `ProtectKernelModules=yes`, `CapabilityBoundingSet=CAP_NET_BIND_SERVICE` (restringir capacidades), `SystemCallFilter=@system-service` (filtrar syscalls). Verificar con `systemd-analyze security servicio.service`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-009">
<div class="flashcard-front">

**P:** Que politica de contrasenas se configura en /etc/login.defs y que valores se recomiendan?

</div>
<div class="flashcard-back">

**R:** `PASS_MAX_DAYS 90` (expiracion cada 90 dias), `PASS_MIN_DAYS 7` (minimo 7 dias entre cambios), `PASS_MIN_LEN 14` (longitud minima 14 caracteres), `PASS_WARN_AGE 14` (aviso 14 dias antes). Para complejidad, usar PAM: `pam_pwquality.so` con `minlen=14 dcredit=-1 ucredit=-1 ocredit=-1 lcredit=-1` (exigir digitos, mayusculas, caracteres especiales y minusculas).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-010">
<div class="flashcard-front">

**P:** Como configurarias el bloqueo automatico de cuentas tras intentos fallidos de login usando PAM?

</div>
<div class="flashcard-back">

**R:** En `/etc/pam.d/common-auth` agregar: `auth required pam_faillock.so preauth deny=5 unlock_time=900` y `auth required pam_faillock.so authfail deny=5 unlock_time=900`. Esto bloquea la cuenta tras 5 intentos fallidos durante 900 segundos (15 minutos). Para cuentas de servicio, asignar shell nologin: `usermod -s /usr/sbin/nologin www-data`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-011">
<div class="flashcard-front">

**P:** Que es auditd y como configurarias reglas para monitorear cambios en archivos criticos?

</div>
<div class="flashcard-back">

**R:** auditd es el sistema de auditoria del kernel Linux. En `/etc/audit/rules.d/hardening.rules`: `-w /etc/passwd -p wa -k identity` (monitorear escritura/atributos), `-w /etc/shadow -p wa -k identity`, `-w /etc/sudoers -p wa -k sudoers`, `-w /etc/ssh/sshd_config -p wa -k sshd_config`. `-e 2` al final hace las reglas inmutables. Consultar con `ausearch -k identity`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-012">
<div class="flashcard-front">

**P:** Que es Lynis y que puntuacion objetivo deberia alcanzar un servidor despues del hardening?

</div>
<div class="flashcard-back">

**R:** Lynis es una herramienta de auditoria automatizada de seguridad que asigna un Hardening Index de 0 a 100. Se ejecuta con `lynis audit system`. Un sistema recien instalado suele puntuar entre 55-65. Despues del hardening, el objetivo es superar **80**. Revisar resultados: `grep suggestion /var/log/lynis-report.dat` y `grep warning /var/log/lynis-report.dat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-013">
<div class="flashcard-front">

**P:** Como se configuran actualizaciones automaticas de seguridad en Debian/Ubuntu?

</div>
<div class="flashcard-back">

**R:** Instalar: `apt install unattended-upgrades` y configurar: `dpkg-reconfigure unattended-upgrades`. En `/etc/apt/apt.conf.d/50unattended-upgrades` configurar `Allowed-Origins` para solo paquetes de seguridad, `Remove-Unused-Dependencies "true"` y `Mail "admin@ejemplo.com"`. Verificar paquetes pendientes: `apt list --upgradable`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-014">
<div class="flashcard-front">

**P:** Como verificarias que solo root tiene UID 0 en el sistema?

</div>
<div class="flashcard-back">

**R:** `awk -F: '$3 == 0 {print $1}' /etc/passwd`. Solo deberia aparecer `root`. Si hay otros usuarios con UID 0, tienen privilegios de superusuario, lo que representa un riesgo de seguridad grave. Complementar con: `passwd -l cuenta_innecesaria` para bloquear cuentas sin uso y restringir `su` al grupo wheel con `pam_wheel.so`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-015">
<div class="flashcard-front">

**P:** Que configuraciones de sudo se recomiendan para hardening en /etc/sudoers?

</div>
<div class="flashcard-back">

**R:** `Defaults env_reset` (limpiar variables de entorno), `Defaults logfile="/var/log/sudo.log"` (registro), `Defaults log_input, log_output` (registrar E/S), `Defaults passwd_timeout=1`, `Defaults timestamp_timeout=5` (reautenticar cada 5 min), `Defaults use_pty`. Asignar permisos granulares: `usuario ALL=(ALL) /usr/bin/systemctl restart nginx` en lugar de `ALL`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-016">
<div class="flashcard-front">

**P:** Que es LUKS y como crearias una particion cifrada?

</div>
<div class="flashcard-back">

**R:** LUKS (Linux Unified Key Setup) es el estandar de cifrado de disco en Linux. Crear: `cryptsetup luksFormat --type luks2 --cipher aes-xts-plain64 --key-size 512 --hash sha512 /dev/sdb1`. Abrir: `cryptsetup luksOpen /dev/sdb1 datos_cifrados`. Formatear: `mkfs.ext4 /dev/mapper/datos_cifrados`. Montar: `mount /dev/mapper/datos_cifrados /mnt/datos`. Siempre respaldar la cabecera con `luksHeaderBackup`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-017">
<div class="flashcard-front">

**P:** Que parametro de sysctl restringe el acceso a ptrace y por que es importante para seguridad?

</div>
<div class="flashcard-back">

**R:** `kernel.yama.ptrace_scope = 2`. ptrace permite a un proceso inspeccionar y modificar la memoria de otro proceso. Con valor 2, solo root puede usar ptrace. Esto previene que un atacante con acceso no privilegiado pueda inyectar codigo en otros procesos o leer su memoria (ej: extraer credenciales de un proceso en ejecucion).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="hardening">
</div>

<div class="flashcard" data-id="hard-fc-018">
<div class="flashcard-front">

**P:** Que comando usarias para verificar la puntuacion de seguridad de un servicio systemd?

</div>
<div class="flashcard-back">

**R:** `systemd-analyze security mi-servicio.service`. Muestra una puntuacion de 0.0 (inseguro) a 10.0 (seguro) con un desglose detallado de las directivas de sandboxing aplicadas y las que faltan. El objetivo es mantener servicios criticos por encima de **6.0**. Permite identificar rapidamente que directivas de hardening faltan en cada servicio.

</div>
</div>

---
