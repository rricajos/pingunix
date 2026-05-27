---
title: "202.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "202.1"
---

# Flashcards: 202.1 - Personalizacion Del Arranque

> 23 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-001">
<div class="flashcard-front">

**P:** Un administrador ha modificado el archivo `/etc/default/grub` para cambiar el tiempo de espera del menu. ¿Que comando debe ejecutar para que los cambios surtan efecto?

</div>
<div class="flashcard-back">

**R:** b) `grub-mkconfig -o /boot/grub/grub.cfg`. Despues de modificar `/etc/default/grub`, es necesario regenerar el archivo `grub.cfg` ejecutando `grub-mkconfig` con la opcion `-o` para especificar el archivo de salida. El comando `grub-install` se usa para instalar los archivos de GRUB en el disco, no para actualizar la configuracion. No existe `grub-update` como comando estandar (en Debian existe `update-grub` como wrapper).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cual de los siguientes parametros del kernel permite arrancar directamente en una shell sin pasar por el proceso init?

</div>
<div class="flashcard-back">

**R:** b) `init=/bin/bash`. El parametro `init=/bin/bash` reemplaza completamente el proceso init por una shell bash, proporcionando acceso directo al sistema sin ningun servicio activo. `single` y `rescue` arrancan en modo usuario unico pero a traves del proceso init normal. `systemd.unit=emergency.target` tambien pasa por systemd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que directorio contiene los scripts que generan las secciones del archivo `grub.cfg`?

</div>
<div class="flashcard-back">

**R:** c) `/etc/grub.d/`. El directorio `/etc/grub.d/` contiene los scripts ejecutables (como `00_header`, `10_linux`, `30_os-prober`, `40_custom`) que son procesados por `grub-mkconfig` para generar el archivo `grub.cfg`. Cada script genera una seccion especifica de la configuracion final.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-004">
<div class="flashcard-front">

**P:** Un administrador necesita ver los mensajes de error del arranque anterior del sistema. ¿Que comando es el mas adecuado?

</div>
<div class="flashcard-back">

**R:** b) `journalctl -b -1 -p err`. La opcion `-b -1` selecciona el arranque anterior (el actual seria `-b 0` o simplemente `-b`), y `-p err` filtra por prioridad de error. `dmesg` solo muestra los mensajes del kernel del arranque actual. `journalctl -b -p err` mostraria los errores del arranque actual, no del anterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre `rescue.target` y `emergency.target` en systemd?

</div>
<div class="flashcard-back">

**R:** b) `rescue.target` monta sistemas de archivos y ejecuta servicios basicos; `emergency.target` solo monta raiz en solo lectura. `rescue.target` (equivalente al runlevel 1) monta todos los sistemas de archivos de `/etc/fstab` e inicia algunos servicios basicos. `emergency.target` es mucho mas minimalista: solo monta el sistema de archivos raiz en modo solo lectura y no inicia practicamente ningun servicio, proporcionando el entorno minimo posible para reparaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que variable en `/etc/default/grub` permite agregar parametros del kernel que se aplican a TODAS las entradas de menu, incluyendo las de recuperacion?

</div>
<div class="flashcard-back">

**R:** b) `GRUB_CMDLINE_LINUX`. `GRUB_CMDLINE_LINUX` agrega parametros a todas las entradas de Linux, incluyendo las de recuperacion. `GRUB_CMDLINE_LINUX_DEFAULT` solo agrega parametros a la entrada por defecto (no a las de recuperacion). Las opciones `GRUB_CMDLINE` y `GRUB_KERNEL_PARAMS` no existen como variables estandar de GRUB 2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-007">
<div class="flashcard-front">

**P:** En un sistema con SysV init, ¿que archivo determina el nivel de ejecucion por defecto?

</div>
<div class="flashcard-back">

**R:** c) `/etc/inittab`. El archivo `/etc/inittab` contiene la linea `id:N:initdefault:` donde N es el numero del runlevel por defecto. Este archivo es el punto central de configuracion del sistema SysV init. En sistemas con systemd, este archivo ya no se utiliza y se reemplaza por el concepto de default target.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-008">
<div class="flashcard-front">

**P:** Un administrador quiere que GRUB recuerde la ultima entrada seleccionada y la use como defecto en el siguiente arranque. ¿Que configuracion debe establecer en `/etc/default/grub`?

</div>
<div class="flashcard-back">

**R:** b) `GRUB_DEFAULT=saved` y `GRUB_SAVEDEFAULT=true`. Para que GRUB recuerde la ultima entrada seleccionada, se necesitan dos configuraciones: `GRUB_DEFAULT=saved` indica que se use la entrada guardada, y `GRUB_SAVEDEFAULT=true` hace que GRUB guarde la seleccion del usuario. Tambien se puede usar `grub-set-default` o `grub-reboot` para establecer la entrada de forma manual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando muestra el contenido actual de los parametros con los que se arranco el kernel en ejecucion?

</div>
<div class="flashcard-back">

**R:** b) `cat /proc/cmdline`. El archivo virtual `/proc/cmdline` contiene los parametros exactos con los que se arranco el kernel actual. Es la fuente definitiva para verificar que parametros estan activos. `dmesg | head` podria mostrar informacion del kernel pero no de forma estructurada. `grub-editenv list` muestra variables del entorno de GRUB guardadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-010">
<div class="flashcard-front">

**P:** Para que el journal de systemd mantenga logs persistentes entre reinicios, ¿que condicion debe cumplirse?

</div>
<div class="flashcard-back">

**R:** c) Que exista el directorio `/var/log/journal/` o configurar `Storage=persistent` en `journald.conf`. Por defecto, el valor de `Storage` es `auto`, lo que significa que si existe `/var/log/journal/`, los logs se guardan de forma persistente. Si no existe, se almacenan en `/run/log/journal/` (volatil). Alternativamente, establecer `Storage=persistent` en `/etc/systemd/journald.conf` crea automaticamente el directorio y fuerza el almacenamiento persistente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `grub.cfg` se genera automaticamente. Cualquier modificacion direct...

</div>
<div class="flashcard-back">

**R:** Recuerda que `grub.cfg` se genera automaticamente. Cualquier modificacion directa se perdera al ejecutar `grub-mkconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: Los scripts deben tener permisos de ejecucion para ser procesados por `grub-mkco...

</div>
<div class="flashcard-back">

**R:** Los scripts deben tener permisos de ejecucion para ser procesados por `grub-mkconfig`. Si necesitas desactivar un script, puedes retirarle el permiso de ejecucion con `chmod -x`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: `rescue.target` monta los sistemas de archivos y tiene servicios basicos activos...

</div>
<div class="flashcard-back">

**R:** `rescue.target` monta los sistemas de archivos y tiene servicios basicos activos, mientras que `emergency.target` solo monta el sistema de archivos raiz en modo solo lectura. Esta es una diferencia critica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Para que `journalctl --list-boots` funcione, el journal debe ser persistente. Es...

</div>
<div class="flashcard-back">

**R:** Para que `journalctl --list-boots` funcione, el journal debe ser persistente. Esto requiere que exista el directorio `/var/log/journal/` o que `Storage=persistent` este configurado en `/etc/systemd/journald.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: Los cambios realizados editando la entrada de GRUB en tiempo de arranque son **t...

</div>
<div class="flashcard-back">

**R:** Los cambios realizados editando la entrada de GRUB en tiempo de arranque son **temporales** y solo afectan al arranque actual. Para cambios permanentes, editar `/etc/default/grub` y ejecutar `grub-mkconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `GRUB_DEFAULT`?

</div>
<div class="flashcard-back">

**R:** Entrada de arranque por defecto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `GRUB_TIMEOUT`?

</div>
<div class="flashcard-back">

**R:** Tiempo de espera en segundos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `GRUB_CMDLINE_LINUX`?

</div>
<div class="flashcard-back">

**R:** Parametros kernel (todas las entradas)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-019">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** La personalizacion del proceso de arranque es una habilidad fundamental para cualquier administrador de sistemas Linux. Este subtema cubre la configuracion de GRUB 2 como cargador de arranque principal

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-020">
<div class="flashcard-front">

**P:** Que es/son Niveles de ejecucion SysV init?

</div>
<div class="flashcard-back">

**R:** Aunque la mayoria de distribuciones modernas usan systemd, es importante conocer el sistema SysV init:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-021">
<div class="flashcard-front">

**P:** Que es/son Parametros del kernel en el arranque?

</div>
<div class="flashcard-back">

**R:** Los parametros del kernel se pueden pasar desde GRUB editando la linea `linux` en el menu de arranque (tecla `e`) o permanentemente en `/etc/default/grub`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-022">
<div class="flashcard-front">

**P:** Que es/son Persistencia del journal de systemd?

</div>
<div class="flashcard-back">

**R:** Para configurar la persistencia de los logs de arranque:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-023">
<div class="flashcard-front">

**P:** Que es/son Resumen de archivos clave?

</div>
<div class="flashcard-back">

**R:** | Archivo/Directorio | Funcion |

</div>
</div>

---

