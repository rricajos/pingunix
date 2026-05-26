---
tipo: comandos
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
---

# Comandos Clave - 332.1 Hardening del Host

## Bootloader y BIOS

| Comando | Descripcion |
|---------|-------------|
| `grub2-mkpasswd-pbkdf2` | Generar hash de contraseña para GRUB |
| `grub2-mkconfig -o /boot/grub2/grub.cfg` | Regenerar configuracion de GRUB (RHEL) |
| `update-grub` | Regenerar configuracion de GRUB (Debian) |
| `chmod 600 /boot/grub2/grub.cfg` | Proteger archivo de configuracion de GRUB |

## sysctl - Parametros de Kernel

| Comando | Descripcion |
|---------|-------------|
| `sysctl -a` | Listar todos los parametros del kernel |
| `sysctl kernel.kptr_restrict` | Ver valor de un parametro |
| `sysctl -w kernel.kptr_restrict=2` | Establecer parametro temporalmente |
| `sysctl -p /etc/sysctl.d/99-hardening.conf` | Aplicar configuracion desde archivo |

## Parametros sysctl de Seguridad

| Parametro | Valor | Efecto |
|-----------|-------|--------|
| `kernel.kptr_restrict` | 2 | Oculta punteros del kernel |
| `kernel.dmesg_restrict` | 1 | Restringe dmesg a root |
| `kernel.randomize_va_space` | 2 | ASLR completo |
| `kernel.yama.ptrace_scope` | 2 | Solo root puede usar ptrace |
| `kernel.sysrq` | 0 | Deshabilita Magic SysRq |
| `fs.protected_symlinks` | 1 | Protege contra symlinks maliciosos |
| `fs.protected_hardlinks` | 1 | Protege contra hardlinks maliciosos |
| `fs.suid_dumpable` | 0 | Deshabilita core dumps de SUID |

## Gestion de Servicios

| Comando | Descripcion |
|---------|-------------|
| `systemctl list-units --type=service --state=running` | Listar servicios activos |
| `systemctl disable --now servicio` | Deshabilitar y detener servicio |
| `systemctl mask servicio` | Enmascarar servicio (impide inicio) |
| `systemctl unmask servicio` | Desenmascarar servicio |
| `ss -tlnp` | Listar puertos en escucha |

## PAM - Politicas de Contraseñas

| Archivo / Comando | Descripcion |
|-------------------|-------------|
| `/etc/security/pwquality.conf` | Configuracion de calidad de contraseñas |
| `/etc/security/faillock.conf` | Configuracion de bloqueo de cuentas |
| `/etc/pam.d/system-auth` | Configuracion PAM de autenticacion (RHEL) |
| `/etc/pam.d/common-password` | Configuracion PAM de contraseñas (Debian) |
| `faillock --user usuario` | Ver intentos fallidos |
| `faillock --user usuario --reset` | Desbloquear usuario |

## Gestion de Contraseñas y Cuentas

| Comando | Descripcion |
|---------|-------------|
| `chage -l usuario` | Ver politica de envejecimiento de contraseña |
| `chage -M 90 -m 7 -W 14 usuario` | Configurar envejecimiento |
| `chage -d 0 usuario` | Forzar cambio de contraseña |
| `passwd -l usuario` | Bloquear cuenta |
| `passwd -u usuario` | Desbloquear cuenta |
| `usermod -e 2025-12-31 usuario` | Establecer fecha de expiracion |

## USBGuard

| Comando | Descripcion |
|---------|-------------|
| `usbguard generate-policy > /etc/usbguard/rules.conf` | Generar politica inicial |
| `usbguard list-devices` | Listar dispositivos USB |
| `usbguard allow-device ID` | Permitir dispositivo |
| `usbguard block-device ID` | Bloquear dispositivo |
| `usbguard reject-device ID` | Rechazar dispositivo |

## Archivos Importantes

| Archivo | Descripcion |
|---------|-------------|
| `/etc/login.defs` | Configuracion global de contraseñas |
| `/etc/security/limits.conf` | Limites de recursos por usuario |
| `/etc/issue` / `/etc/issue.net` | Banners de advertencia |
| `/etc/cron.allow` / `/etc/cron.deny` | Control de acceso a cron |
| `/etc/at.allow` / `/etc/at.deny` | Control de acceso a at |
| `/etc/sysctl.d/*.conf` | Parametros del kernel persistentes |
