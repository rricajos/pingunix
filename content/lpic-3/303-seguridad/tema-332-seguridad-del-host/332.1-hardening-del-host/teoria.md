---
tipo: teoria
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "332 - Seguridad del Host"
tema: "332.1 - Hardening del host"
subtema: "332.1"
peso: 5
tags:
  - lpic-3
  - tema-332
  - hardening
  - sysctl
  - pam
  - seguridad-kernel
---

# 332.1 Hardening del Host

## Introduccion

El hardening (endurecimiento) del host es el proceso de reducir la superficie de ataque de un sistema Linux mediante la eliminacion de servicios innecesarios, la configuracion segura del kernel, la proteccion del arranque, el fortalecimiento de politicas de contraseñas y la implementacion de controles de acceso. Es una de las capas fundamentales en defensa en profundidad.

> **Para el examen:** Este subtema tiene peso 5. Cubre un amplio rango de temas desde BIOS/UEFI hasta PAM y sysctl. Conoce los parametros de kernel mas importantes y las configuraciones de PAM.

---

## Seguridad BIOS/UEFI

### Medidas de proteccion

- **Contraseña de BIOS/UEFI**: Impide cambios en la configuracion de arranque
- **Orden de arranque**: Configurar solo disco duro como dispositivo de arranque
- **Secure Boot**: Verifica firmas de los cargadores de arranque y kernel
- **TPM (Trusted Platform Module)**: Almacena claves de cifrado y mediciones de integridad

---

## Proteccion del Bootloader (GRUB)

```bash
# Generar hash de contraseña para GRUB
grub2-mkpasswd-pbkdf2
# Introduce la contraseña y guarda el hash generado

# Configurar en /etc/grub.d/40_custom
set superusers="admin"
password_pbkdf2 admin grub.pbkdf2.sha512.10000.HASH...

# Regenerar configuración de GRUB
grub2-mkconfig -o /boot/grub2/grub.cfg    # RHEL
update-grub                                  # Debian
```

Protecciones adicionales:

```bash
# Permisos del archivo de configuración
chmod 600 /boot/grub2/grub.cfg

# Proteger archivos de kernel
chmod 600 /boot/vmlinuz-*
chmod 600 /boot/initramfs-*
```

---

## Parametros de Seguridad del Kernel (sysctl)

### Configuracion con sysctl

```bash
# Ver todos los parametros
sysctl -a

# Ver parametro específico
sysctl kernel.kptr_restrict

# Establecer parametro temporalmente
sysctl -w kernel.kptr_restrict=2

# Aplicar configuracion desde archivo
sysctl -p /etc/sysctl.d/99-hardening.conf
```

### Parametros de Hardening del Kernel

```bash
# /etc/sysctl.d/99-hardening.conf

# Ocultar punteros del kernel en /proc/kallsyms
kernel.kptr_restrict = 2

# Restringir acceso a dmesg
kernel.dmesg_restrict = 1

# Habilitar ASLR (Address Space Layout Randomization)
kernel.randomize_va_space = 2

# Restringir acceso a perf_event
kernel.perf_event_paranoid = 3

# Deshabilitar SysRq (o limitar funciones)
kernel.sysrq = 0

# Restringir ptrace (depuracion de procesos)
kernel.yama.ptrace_scope = 2

# Proteger enlaces simbolicos y hardlinks
fs.protected_symlinks = 1
fs.protected_hardlinks = 1

# Proteger FIFOs y archivos regulares
fs.protected_fifos = 2
fs.protected_regular = 2

# Habilitar proteccion de desbordamiento de pila (exec-shield)
kernel.exec-shield = 1
```

| Parametro | Valor Seguro | Descripcion |
|-----------|-------------|-------------|
| `kernel.kptr_restrict` | 2 | Oculta punteros del kernel a todos |
| `kernel.dmesg_restrict` | 1 | Solo root puede leer dmesg |
| `kernel.randomize_va_space` | 2 | ASLR completo |
| `kernel.yama.ptrace_scope` | 2 | Solo root puede usar ptrace |
| `kernel.sysrq` | 0 | Deshabilita Magic SysRq |
| `fs.protected_symlinks` | 1 | Protege contra ataques de symlinks |

> **Para el examen:** `kernel.randomize_va_space=2` activa ASLR completo (incluye heap, stack, mmap, VDSO). El valor 0 lo desactiva, 1 es parcial.

---

## Minimizacion de Servicios

```bash
# Listar servicios activos
systemctl list-units --type=service --state=running

# Deshabilitar servicio innecesario
systemctl disable --now servicio.service

# Enmascarar servicio (impide que se inicie de cualquier forma)
systemctl mask servicio.service

# Desenmascarar
systemctl unmask servicio.service

# Listar puertos en escucha
ss -tlnp
netstat -tlnp
```

Servicios que normalmente deben deshabilitarse en servidores:

- `cups` (impresion)
- `avahi-daemon` (mDNS/Zeroconf)
- `bluetooth`
- `nfs-server` (si no se usa)
- `rpcbind` (si no se usa NFS)

---

## Eliminacion de Paquetes Innecesarios

```bash
# RHEL/CentOS: listar paquetes instalados
rpm -qa | sort

# Debian/Ubuntu: listar paquetes
dpkg -l

# Eliminar paquetes innecesarios
yum remove paquete      # RHEL
apt purge paquete       # Debian

# Listar paquetes de un grupo (RHEL)
yum group list
yum group remove "Development Tools"
```

---

## PAM (Pluggable Authentication Modules)

### Politicas de Contraseñas con pam_pwquality

```bash
# /etc/security/pwquality.conf
minlen = 14          # Longitud minima
dcredit = -1         # Al menos 1 digito
ucredit = -1         # Al menos 1 mayuscula
lcredit = -1         # Al menos 1 minuscula
ocredit = -1         # Al menos 1 caracter especial
maxrepeat = 3        # Maximo 3 caracteres repetidos consecutivos
maxclassrepeat = 4   # Maximo 4 del mismo tipo consecutivos
difok = 8            # Al menos 8 caracteres diferentes de la anterior
reject_username      # No permitir nombre de usuario en contraseña
enforce_for_root     # Aplicar tambien a root
```

```bash
# /etc/pam.d/system-auth o /etc/pam.d/common-password
password    requisite     pam_pwquality.so retry=3
password    sufficient    pam_unix.so sha512 shadow remember=12
```

### Alternativa: pam_cracklib

```bash
# Configuracion similar a pwquality
password    requisite     pam_cracklib.so retry=3 minlen=14 \
            dcredit=-1 ucredit=-1 lcredit=-1 ocredit=-1
```

> **Para el examen:** `pam_pwquality` es el reemplazo moderno de `pam_cracklib`. Los valores negativos en `dcredit`, `ucredit`, etc. indican el minimo requerido. La opcion `remember=12` en `pam_unix.so` impide reutilizar las ultimas 12 contraseñas.

### Bloqueo de Cuentas con pam_faillock

```bash
# /etc/pam.d/system-auth
auth        required      pam_faillock.so preauth silent audit \
                          deny=5 fail_interval=900 unlock_time=600
auth        sufficient    pam_unix.so
auth        [default=die] pam_faillock.so authfail audit \
                          deny=5 fail_interval=900 unlock_time=600

# /etc/security/faillock.conf (configuracion centralizada)
deny = 5              # Bloquear tras 5 intentos fallidos
fail_interval = 900   # Ventana de 15 minutos
unlock_time = 600     # Desbloquear tras 10 minutos (0 = manual)
even_deny_root        # Tambien bloquear root
```

```bash
# Ver intentos fallidos
faillock --user nombre_usuario

# Desbloquear usuario
faillock --user nombre_usuario --reset
```

---

## USB Guard

USBGuard controla que dispositivos USB pueden conectarse al sistema.

```bash
# Instalar
yum install usbguard

# Generar politica inicial con dispositivos actuales
usbguard generate-policy > /etc/usbguard/rules.conf

# Listar dispositivos USB
usbguard list-devices

# Permitir dispositivo
usbguard allow-device ID

# Bloquear dispositivo
usbguard block-device ID

# Rechazar dispositivo
usbguard reject-device ID
```

Ejemplo de regla:

```bash
# /etc/usbguard/rules.conf
allow id 1d6b:0002 serial "" name "xHCI Host Controller" via-port "usb1"
reject id *:* with-interface { 08:*:* }  # Rechazar almacenamiento USB
```

---

## Envejecimiento de Contraseñas

```bash
# Configuracion global en /etc/login.defs
PASS_MAX_DAYS   90     # Maxima vigencia
PASS_MIN_DAYS   7      # Minimo entre cambios
PASS_WARN_AGE   14     # Aviso antes de expiracion
PASS_MIN_LEN    14     # Longitud minima

# Configuracion por usuario con chage
chage -M 90 -m 7 -W 14 usuario

# Ver configuracion de un usuario
chage -l usuario

# Forzar cambio de contraseña en siguiente login
chage -d 0 usuario

# Bloquear cuenta
passwd -l usuario
usermod -L usuario

# Desbloquear cuenta
passwd -u usuario
usermod -U usuario

# Establecer expiracion de cuenta
usermod -e 2025-12-31 usuario
```

---

## Marcos de Auditoria y CIS Benchmarks

### CIS Benchmarks

Los CIS (Center for Internet Security) Benchmarks son guias de configuracion segura reconocidas internacionalmente. Cubren:

- Configuracion de particiones (/tmp, /var, /home separados con noexec, nosuid)
- Servicios minimos
- Configuracion de red
- Auditoria y logging
- Control de acceso
- Mantenimiento del sistema

### Herramientas de Auditoria

```bash
# Lynis - auditoria de seguridad
lynis audit system

# OpenSCAP - evaluacion contra perfiles de seguridad
oscap xccdf eval --profile cis /usr/share/xml/scap/ssg/content/ssg-rhel8-ds.xml
```

> **Para el examen:** Conoce que existen los CIS Benchmarks como referencia de hardening y que herramientas como Lynis y OpenSCAP permiten evaluar el cumplimiento automaticamente.

---

## Configuraciones Adicionales de Hardening

```bash
# Deshabilitar core dumps
# /etc/security/limits.conf
* hard core 0

# /etc/sysctl.d/99-hardening.conf
fs.suid_dumpable = 0

# Configurar banner de advertencia
# /etc/issue y /etc/issue.net
echo "Acceso autorizado unicamente. Toda actividad es monitoreada." > /etc/issue

# Restringir cron a usuarios autorizados
echo "root" > /etc/cron.allow
rm -f /etc/cron.deny

# Restringir acceso a at
echo "root" > /etc/at.allow
rm -f /etc/at.deny

# Configurar timeout de sesion
# /etc/profile.d/timeout.sh
TMOUT=900
readonly TMOUT
export TMOUT
```
