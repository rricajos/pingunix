---
tipo: ejercicios
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

# Ejercicios - 332.1 Hardening del Host

### Pregunta 1
¿Que valor de `kernel.randomize_va_space` activa ASLR completo (incluyendo heap, stack, mmap y VDSO)?

a) 0
b) 1
c) 2
d) 3

<details><summary>Respuesta</summary>

**c)** 2

El valor 2 activa ASLR completo. El valor 0 lo desactiva completamente, y el valor 1 activa una version parcial que no incluye el heap.
</details>

### Pregunta 2
¿Que comando impide completamente que un servicio sea iniciado, incluso manualmente?

a) `systemctl disable servicio`
b) `systemctl stop servicio`
c) `systemctl mask servicio`
d) `systemctl kill servicio`

<details><summary>Respuesta</summary>

**c)** `systemctl mask servicio`

`systemctl mask` crea un enlace simbolico del archivo de unidad a `/dev/null`, impidiendo que el servicio se inicie de cualquier forma. `disable` solo lo quita del arranque automatico.
</details>

### Pregunta 3
En la configuracion de `pam_pwquality`, ¿que significa `dcredit = -1`?

a) Se resta 1 punto si la contraseña contiene digitos
b) Se requiere al menos 1 digito en la contraseña
c) Se permite maximo 1 digito en la contraseña
d) Los digitos no cuentan para la longitud minima

<details><summary>Respuesta</summary>

**b)** Se requiere al menos 1 digito en la contraseña

En pam_pwquality, valores negativos en `dcredit`, `ucredit`, `lcredit` y `ocredit` indican el numero minimo requerido de ese tipo de caracter. Un valor de -1 significa que se requiere al menos 1.
</details>

### Pregunta 4
¿Que parametro sysctl restringe el acceso a la informacion de dmesg solo al usuario root?

a) `kernel.kptr_restrict = 1`
b) `kernel.dmesg_restrict = 1`
c) `kernel.syslog_restrict = 1`
d) `kernel.log_restrict = 1`

<details><summary>Respuesta</summary>

**b)** `kernel.dmesg_restrict = 1`

Cuando `kernel.dmesg_restrict` esta establecido a 1, solo los procesos con la capacidad `CAP_SYSLOG` (normalmente root) pueden leer el buffer de mensajes del kernel con `dmesg`.
</details>

### Pregunta 5
¿Que comando genera un hash de contraseña para proteger el bootloader GRUB?

a) `grub2-setpassword`
b) `grub2-mkpasswd-pbkdf2`
c) `grub-password --generate`
d) `openssl passwd -grub`

<details><summary>Respuesta</summary>

**b)** `grub2-mkpasswd-pbkdf2`

Este comando genera un hash PBKDF2 que se incluye en la configuracion de GRUB (`/etc/grub.d/40_custom`) junto con la directiva `password_pbkdf2`.
</details>

### Pregunta 6
¿Que archivo de configuracion establece los limites globales de envejecimiento de contraseñas para nuevos usuarios?

a) `/etc/pam.d/system-auth`
b) `/etc/security/pwquality.conf`
c) `/etc/login.defs`
d) `/etc/shadow`

<details><summary>Respuesta</summary>

**c)** `/etc/login.defs`

`/etc/login.defs` contiene las configuraciones por defecto como `PASS_MAX_DAYS`, `PASS_MIN_DAYS`, `PASS_WARN_AGE` que se aplican a los nuevos usuarios. Para usuarios existentes se usa `chage`.
</details>

### Pregunta 7
¿Que comando de `faillock` desbloquea una cuenta que fue bloqueada por intentos fallidos?

a) `faillock --user usuario --unlock`
b) `faillock --user usuario --reset`
c) `pam_tally2 --user usuario --reset`
d) `faillock --clear usuario`

<details><summary>Respuesta</summary>

**b)** `faillock --user usuario --reset`

`faillock --reset` limpia los registros de intentos fallidos del usuario, desbloqueando la cuenta. `pam_tally2` es la herramienta antigua, reemplazada por `faillock`.
</details>

### Pregunta 8
¿Que opcion en `/etc/security/limits.conf` deshabilita completamente los core dumps?

a) `* hard nocore 1`
b) `* hard core 0`
c) `* soft core disabled`
d) `* hard coredump 0`

<details><summary>Respuesta</summary>

**b)** `* hard core 0`

Establecer el limite hard de `core` a 0 para todos los usuarios (`*`) impide la generacion de core dumps. Complementariamente, `fs.suid_dumpable = 0` en sysctl previene core dumps de procesos SUID.
</details>

### Pregunta 9
¿Que herramienta permite controlar que dispositivos USB pueden conectarse a un sistema Linux?

a) ufw
b) USBGuard
c) firewalld
d) SELinux

<details><summary>Respuesta</summary>

**b)** USBGuard

USBGuard es un framework que permite crear politicas de control de acceso para dispositivos USB, permitiendo o bloqueando dispositivos segun criterios como ID de fabricante, tipo de interfaz, etc.
</details>

### Pregunta 10
Segun las guias CIS Benchmark, ¿cual de las siguientes es una recomendacion para particionamiento seguro?

a) Usar una sola particion para todo el sistema
b) Montar /tmp con las opciones noexec, nosuid y nodev
c) Cifrar solo la particion /boot
d) Usar el sistema de archivos FAT32 para todas las particiones

<details><summary>Respuesta</summary>

**b)** Montar /tmp con las opciones noexec, nosuid y nodev

CIS Benchmark recomienda particiones separadas para /tmp, /var, /var/log, /var/tmp y /home, con opciones restrictivas como `noexec` (no ejecutar binarios), `nosuid` (ignorar bits SUID) y `nodev` (no interpretar dispositivos).
</details>

### Pregunta 11

Que valor del parametro kernel.yama.ptrace_scope permite que solo el proceso padre pueda usar ptrace sobre sus hijos directos?

a) 0
b) 1
c) 2
d) 3

<details><summary>Respuesta</summary>

**b) Correcta**

El valor 1 restringe ptrace para que solo los procesos padre puedan trazar a sus hijos directos, o bien los procesos con CAP_SYS_PTRACE. El valor 0 no restringe, el 2 solo permite a root y el 3 deshabilita ptrace completamente.

</details>

### Pregunta 12

Que comando verifica la configuracion de envejecimiento de contrasena del usuario maria?

a) passwd -l maria
b) chage -l maria
c) usermod --show-age maria
d) getent shadow maria

<details><summary>Respuesta</summary>

**b) Correcta**

chage -l usuario muestra fecha del ultimo cambio, expiracion, dias minimos y maximos entre cambios y aviso previo.

</details>

### Pregunta 13

Que opcion de pam_pwquality impide que la contrasena contenga el nombre del usuario?

a) nousername
b) reject_username
c) no_user_in_pass
d) deny_username

<details><summary>Respuesta</summary>

**b) Correcta**

La opcion reject_username comprueba que la contrasena no contenga el nombre del usuario ni su reverso, evitando contrasenas predecibles.

</details>

### Pregunta 14

Cual parametro sysctl oculta los punteros del kernel incluso a root?

a) kernel.kptr_restrict = 1
b) kernel.kptr_restrict = 2
c) kernel.dmesg_restrict = 2
d) kernel.perf_event_paranoid = 1

<details><summary>Respuesta</summary>

**b) Correcta**

Con kernel.kptr_restrict = 2 los punteros en /proc/kallsyms se muestran como ceros incluso para root. El valor 1 solo oculta a no privilegiados.

</details>

### Pregunta 15

Que herramienta evalua el sistema contra perfiles XCCDF estandarizados como CIS Benchmarks?

a) lynis audit system
b) oscap xccdf eval
c) tiger
d) rkhunter --check

<details><summary>Respuesta</summary>

**b) Correcta**

oscap xccdf eval forma parte de OpenSCAP y permite evaluar el sistema contra CIS Benchmarks y STIG usando archivos XCCDF estandarizados.

</details>

### Pregunta 16

En faillock.conf, que directiva hace que root tambien sea bloqueada tras superar intentos fallidos?

a) root_unlock_time = 60
b) even_deny_root
c) deny_root = yes
d) root_deny = true

<details><summary>Respuesta</summary>

**b) Correcta**

La directiva even_deny_root en /etc/security/faillock.conf aplica el bloqueo tambien a root. Sin ella, root nunca se bloquea.

</details>

### Pregunta 17

Que archivo se modifica para definir set superusers y password_pbkdf2 en GRUB?

a) /boot/grub2/grub.cfg
b) /etc/grub.d/40_custom
c) /etc/default/grub
d) /boot/grub2/device.map

<details><summary>Respuesta</summary>

**b) Correcta**

/etc/grub.d/40_custom es el archivo de personalizacion de GRUB. grub.cfg se genera con grub2-mkconfig y no debe editarse directamente.

</details>

### Pregunta 18

Que parametro de pam_unix.so impide reutilizar las ultimas 12 contrasenas?

a) history=12
b) remember=12
c) norepeat=12
d) min_history=12

<details><summary>Respuesta</summary>

**b) Correcta**

El parametro remember=12 almacena las ultimas 12 contrasenas en /etc/security/opasswd e impide su reutilizacion.

</details>

### Pregunta 19

Cual es el proposito de fs.protected_symlinks = 1 en sysctl?

a) Impide crear symlinks en directorios del sistema
b) Previene seguir symlinks en dirs con sticky bit si el propietario no coincide
c) Cifra los enlaces simbolicos automaticamente
d) Elimina symlinks rotos al arranque

<details><summary>Respuesta</summary>

**b) Correcta**

fs.protected_symlinks = 1 previene ataques de symlink en directorios sticky como /tmp: el proceso solo puede seguir el symlink si el propietario coincide.

</details>

### Pregunta 20

Que comando muestra todos los archivos de unidad enmascarados en el sistema?

a) systemctl list-units --state=masked
b) systemctl list-unit-files --state=masked
c) systemctl show --masked
d) systemctl status masked

<details><summary>Respuesta</summary>

**b) Correcta**

systemctl list-unit-files --state=masked muestra unidades con enlace a /dev/null que no pueden iniciarse de ninguna forma.

</details>

### Pregunta 21

Que comando aplica los parametros de /etc/sysctl.d/99-hardening.conf de forma permanente?

<input type="text" class="fill-blank" data-answer="sysctl -p /etc/sysctl.d/99-hardening.conf" data-alt="sysctl --system" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sysctl -p /etc/sysctl.d/99-hardening.conf**

La opcion -p carga y aplica parametros del archivo. Para todos los archivos en /etc/sysctl.d/ se usa sysctl --system.

</details>

### Pregunta 22

Que comando genera el hash PBKDF2 de una contrasena para proteger GRUB?

<input type="text" class="fill-blank" data-answer="grub2-mkpasswd-pbkdf2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grub2-mkpasswd-pbkdf2**

Solicita la contrasena interactivamente y genera un hash PBKDF2-SHA512 para la directiva password_pbkdf2 en /etc/grub.d/40_custom.

</details>

### Pregunta 23

Que comando fuerza al usuario ana a cambiar su contrasena en el proximo login?

<input type="text" class="fill-blank" data-answer="chage -d 0 ana" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chage -d 0 ana**

La opcion -d 0 establece la fecha del ultimo cambio al epoch, haciendo la contrasena expirada y obligando el cambio en el proximo inicio de sesion.

</details>

### Pregunta 24

Que linea en /etc/security/limits.conf deshabilita core dumps para todos con limite hard?

<input type="text" class="fill-blank" data-answer="* hard core 0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

*** hard core 0**

Establece el limite hard del recurso core a 0 para todos los usuarios. Se complementa con fs.suid_dumpable = 0 para cubrir procesos SUID.

</details>

### Pregunta 25

Que comando de USBGuard genera una politica inicial basada en dispositivos USB conectados?

<input type="text" class="fill-blank" data-answer="usbguard generate-policy" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**usbguard generate-policy**

Analiza los dispositivos USB conectados y genera reglas allow para cada uno, que se redirigen a /etc/usbguard/rules.conf como politica base.

</details>
