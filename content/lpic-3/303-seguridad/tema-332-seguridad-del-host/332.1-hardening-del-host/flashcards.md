---
title: "332.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "332.1"
---

# Flashcards: 332.1 - Hardening Del Host

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que valor de `kernel.randomize_va_space` activa ASLR completo (incluyendo heap, stack, mmap y VDSO)?

</div>
<div class="flashcard-back">

**R:** c). 2  El valor 2 activa ASLR completo. El valor 0 lo desactiva completamente, y el valor 1 activa una version parcial que no incluye el heap.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando impide completamente que un servicio sea iniciado, incluso manualmente?

</div>
<div class="flashcard-back">

**R:** c). `systemctl mask servicio`  `systemctl mask` crea un enlace simbolico del archivo de unidad a `/dev/null`, impidiendo que el servicio se inicie de cualquier forma. `disable` solo lo quita del arranque automatico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-003">
<div class="flashcard-front">

**P:** En la configuracion de `pam_pwquality`, ¿que significa `dcredit = -1`?

</div>
<div class="flashcard-back">

**R:** b). Se requiere al menos 1 digito en la contraseña  En pam_pwquality, valores negativos en `dcredit`, `ucredit`, `lcredit` y `ocredit` indican el numero minimo requerido de ese tipo de caracter. Un valor de -1 significa que se requiere al menos 1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-004">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl restringe el acceso a la informacion de dmesg solo al usuario root?

</div>
<div class="flashcard-back">

**R:** b). `kernel.dmesg_restrict = 1`  Cuando `kernel.dmesg_restrict` esta establecido a 1, solo los procesos con la capacidad `CAP_SYSLOG` (normalmente root) pueden leer el buffer de mensajes del kernel con `dmesg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando genera un hash de contraseña para proteger el bootloader GRUB?

</div>
<div class="flashcard-back">

**R:** b). `grub2-mkpasswd-pbkdf2`  Este comando genera un hash PBKDF2 que se incluye en la configuracion de GRUB (`/etc/grub.d/40_custom`) junto con la directiva `password_pbkdf2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que archivo de configuracion establece los limites globales de envejecimiento de contraseñas para nuevos usuarios?

</div>
<div class="flashcard-back">

**R:** c). `/etc/login.defs`  `/etc/login.defs` contiene las configuraciones por defecto como `PASS_MAX_DAYS`, `PASS_MIN_DAYS`, `PASS_WARN_AGE` que se aplican a los nuevos usuarios. Para usuarios existentes se usa `chage`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando de `faillock` desbloquea una cuenta que fue bloqueada por intentos fallidos?

</div>
<div class="flashcard-back">

**R:** b). `faillock --user usuario --reset`  `faillock --reset` limpia los registros de intentos fallidos del usuario, desbloqueando la cuenta. `pam_tally2` es la herramienta antigua, reemplazada por `faillock`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que opcion en `/etc/security/limits.conf` deshabilita completamente los core dumps?

</div>
<div class="flashcard-back">

**R:** b). `* hard core 0`  Establecer el limite hard de `core` a 0 para todos los usuarios (`*`) impide la generacion de core dumps. Complementariamente, `fs.suid_dumpable = 0` en sysctl previene core dumps de procesos SUID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que herramienta permite controlar que dispositivos USB pueden conectarse a un sistema Linux?

</div>
<div class="flashcard-back">

**R:** b). USBGuard  USBGuard es un framework que permite crear politicas de control de acceso para dispositivos USB, permitiendo o bloqueando dispositivos segun criterios como ID de fabricante, tipo de interfaz, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-010">
<div class="flashcard-front">

**P:** Segun las guias CIS Benchmark, ¿cual de las siguientes es una recomendacion para particionamiento seguro?

</div>
<div class="flashcard-back">

**R:** b). Montar /tmp con las opciones noexec, nosuid y nodev  CIS Benchmark recomienda particiones separadas para /tmp, /var, /var/log, /var/tmp y /home, con opciones restrictivas como `noexec` (no ejecutar binarios), `nosuid` (ignorar bits SUID) y `nodev` (no interpretar dispositivos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-011">
<div class="flashcard-front">

**P:** Que valor del parametro kernel.yama.ptrace_scope permite que solo el proceso padre pueda usar ptrace sobre sus hijos directos?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El valor 1 restringe ptrace para que solo los procesos padre puedan trazar a sus hijos directos, o bien los procesos con CAP_SYS_PTRACE. El valor 0 no restringe, el 2 solo permite a root y el 3 deshabilita ptrace completamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-012">
<div class="flashcard-front">

**P:** Que comando verifica la configuracion de envejecimiento de contrasena del usuario maria?

</div>
<div class="flashcard-back">

**R:** b) Correcta. chage -l usuario muestra fecha del ultimo cambio, expiracion, dias minimos y maximos entre cambios y aviso previo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-013">
<div class="flashcard-front">

**P:** Que opcion de pam_pwquality impide que la contrasena contenga el nombre del usuario?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opcion reject_username comprueba que la contrasena no contenga el nombre del usuario ni su reverso, evitando contrasenas predecibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-014">
<div class="flashcard-front">

**P:** Cual parametro sysctl oculta los punteros del kernel incluso a root?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Con kernel.kptr_restrict = 2 los punteros en /proc/kallsyms se muestran como ceros incluso para root. El valor 1 solo oculta a no privilegiados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-015">
<div class="flashcard-front">

**P:** Que herramienta evalua el sistema contra perfiles XCCDF estandarizados como CIS Benchmarks?

</div>
<div class="flashcard-back">

**R:** b) Correcta. oscap xccdf eval forma parte de OpenSCAP y permite evaluar el sistema contra CIS Benchmarks y STIG usando archivos XCCDF estandarizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-016">
<div class="flashcard-front">

**P:** En faillock.conf, que directiva hace que root tambien sea bloqueada tras superar intentos fallidos?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La directiva even_deny_root en /etc/security/faillock.conf aplica el bloqueo tambien a root. Sin ella, root nunca se bloquea.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-017">
<div class="flashcard-front">

**P:** Que archivo se modifica para definir set superusers y password_pbkdf2 en GRUB?

</div>
<div class="flashcard-back">

**R:** b) Correcta. /etc/grub.d/40_custom es el archivo de personalizacion de GRUB. grub.cfg se genera con grub2-mkconfig y no debe editarse directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-018">
<div class="flashcard-front">

**P:** Que parametro de pam_unix.so impide reutilizar las ultimas 12 contrasenas?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El parametro remember=12 almacena las ultimas 12 contrasenas en /etc/security/opasswd e impide su reutilizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-019">
<div class="flashcard-front">

**P:** Cual es el proposito de fs.protected_symlinks = 1 en sysctl?

</div>
<div class="flashcard-back">

**R:** b) Correcta. fs.protected_symlinks = 1 previene ataques de symlink en directorios sticky como /tmp: el proceso solo puede seguir el symlink si el propietario coincide.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-020">
<div class="flashcard-front">

**P:** Que comando muestra todos los archivos de unidad enmascarados en el sistema?

</div>
<div class="flashcard-back">

**R:** b) Correcta. systemctl list-unit-files --state=masked muestra unidades con enlace a /dev/null que no pueden iniciarse de ninguna forma.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-021">
<div class="flashcard-front">

**P:** Que comando aplica los parametros de /etc/sysctl.d/99-hardening.conf de forma permanente?

</div>
<div class="flashcard-back">

**R:** sysctl -p /etc/sysctl.d/99-hardening.conf. La opcion -p carga y aplica parametros del archivo. Para todos los archivos en /etc/sysctl.d/ se usa sysctl --system.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-022">
<div class="flashcard-front">

**P:** Que comando genera el hash PBKDF2 de una contrasena para proteger GRUB?

</div>
<div class="flashcard-back">

**R:** grub2-mkpasswd-pbkdf2. Solicita la contrasena interactivamente y genera un hash PBKDF2-SHA512 para la directiva password_pbkdf2 en /etc/grub.d/40_custom.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-023">
<div class="flashcard-front">

**P:** Que comando fuerza al usuario ana a cambiar su contrasena en el proximo login?

</div>
<div class="flashcard-back">

**R:** chage -d 0 ana. La opcion -d 0 establece la fecha del ultimo cambio al epoch, haciendo la contrasena expirada y obligando el cambio en el proximo inicio de sesion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-024">
<div class="flashcard-front">

**P:** Que linea en /etc/security/limits.conf deshabilita core dumps para todos con limite hard?

</div>
<div class="flashcard-back">

**R:** * hard core 0. Establece el limite hard del recurso core a 0 para todos los usuarios. Se complementa con fs.suid_dumpable = 0 para cubrir procesos SUID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-025">
<div class="flashcard-front">

**P:** Que comando de USBGuard genera una politica inicial basada en dispositivos USB conectados?

</div>
<div class="flashcard-back">

**R:** usbguard generate-policy. Analiza los dispositivos USB conectados y genera reglas allow para cada uno, que se redirigen a /etc/usbguard/rules.conf como politica base.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5. Cubre un amplio rango de temas desde BIOS/UEFI hasta ...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5. Cubre un amplio rango de temas desde BIOS/UEFI hasta PAM y sysctl. Conoce los parametros de kernel mas importantes y las configuraciones de PAM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `kernel.randomize_va_space=2` activa ASLR completo (incluye heap, stack, mmap, V...

</div>
<div class="flashcard-back">

**R:** `kernel.randomize_va_space=2` activa ASLR completo (incluye heap, stack, mmap, VDSO). El valor 0 lo desactiva, 1 es parcial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `pam_pwquality` es el reemplazo moderno de `pam_cracklib`. Los valores negativos...

</div>
<div class="flashcard-back">

**R:** `pam_pwquality` es el reemplazo moderno de `pam_cracklib`. Los valores negativos en `dcredit`, `ucredit`, etc. indican el minimo requerido. La opcion `remember=12` en `pam_unix.so` impide reutilizar las ultimas 12 contraseñas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce que existen los CIS Benchmarks como referencia de hardening y que herrami...

</div>
<div class="flashcard-back">

**R:** Conoce que existen los CIS Benchmarks como referencia de hardening y que herramientas como Lynis y OpenSCAP permiten evaluar el cumplimiento automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son USB Guard?

</div>
<div class="flashcard-back">

**R:** USBGuard controla que dispositivos USB pueden conectarse al sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

