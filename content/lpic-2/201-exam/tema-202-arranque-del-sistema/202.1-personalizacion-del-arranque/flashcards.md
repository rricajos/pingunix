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

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Un administrador quiere desactivar el script `30_os-prober` de GRUB para que no detecte otros sistemas operativos al regenerar `grub.cfg`. ¿Cual es la forma correcta de hacerlo?

</div>
<div class="flashcard-back">

**R:** b) Retirar el permiso de ejecucion con `chmod -x /etc/grub.d/30_os-prober`. Los scripts en `/etc/grub.d/` solo se ejecutan si tienen permisos de ejecucion. Retirar el permiso con `chmod -x` es la forma correcta de desactivar un script sin eliminarlo, permitiendo reactivarlo facilmente. Tambien se puede agregar `GRUB_DISABLE_OS_PROBER=true` en `/etc/default/grub`. Editar `grub.cfg` directamente nunca es correcto ya que se regenera automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que parametro del kernel se pasa desde GRUB para limitar la memoria RAM disponible para el sistema a 512 MB?

</div>
<div class="flashcard-back">

**R:** b) `mem=512M`. El parametro `mem=512M` del kernel limita la cantidad de memoria RAM que el sistema utilizara a 512 MB, independientemente de cuanta memoria fisica este instalada. Es util para pruebas de rendimiento con memoria limitada o para diagnosticar problemas relacionados con la memoria. Se agrega a la linea `linux` en GRUB temporal o permanentemente en `GRUB_CMDLINE_LINUX`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que comando de systemd permite cambiar al modo multiusuario sin interfaz grafica de forma inmediata?

</div>
<div class="flashcard-back">

**R:** b) `systemctl isolate multi-user.target`. El subcomando `isolate` de `systemctl` cambia al target especificado de forma inmediata, deteniendo todas las unidades que no son dependencias del target objetivo. Es equivalente a cambiar de runlevel en SysV init. `start` solo iniciaria el target sin detener otros servicios, `switch` no existe, y `enable` solo configura el inicio automatico sin cambiar el estado actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-014">
<div class="flashcard-front">

**P:** En un sistema con SysV init, ¿que significa un enlace simbolico llamado `S85apache2` en el directorio `/etc/rc3.d/`?

</div>
<div class="flashcard-back">

**R:** b) El script apache2 se iniciara con prioridad 85 al entrar en el runlevel 3. En SysV init, los enlaces simbolicos en los directorios `rcN.d` siguen la convencion `S##nombre` para scripts de inicio (Start) y `K##nombre` para scripts de parada (Kill). El numero `85` indica el orden de ejecucion (mayor numero = se inicia mas tarde). Asi, `S85apache2` significa que apache2 se inicia en el runlevel 3 con prioridad 85.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que valor debe tener `GRUB_TIMEOUT_STYLE` en `/etc/default/grub` para que el menu de GRUB se muestre con una cuenta regresiva sin ocultar el menu?

</div>
<div class="flashcard-back">

**R:** c) `countdown`. El valor `countdown` muestra una cuenta regresiva en la pantalla pero sin mostrar el menu completo; al presionar cualquier tecla se muestra el menu. El valor `menu` muestra el menu completo durante el tiempo de espera. El valor `hidden` oculta completamente el menu y la cuenta regresiva. El valor `visible` no es una opcion valida de GRUB_TIMEOUT_STYLE.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-016">
<div class="flashcard-front">

**P:** Un administrador necesita arrancar el sistema en modo rescate pasando un parametro al kernel desde GRUB. ¿Que parametro debe agregar a la linea `linux`?

</div>
<div class="flashcard-back">

**R:** c) `systemd.unit=rescue.target`. En sistemas con systemd, el parametro `systemd.unit=rescue.target` indica al proceso init que arranque directamente en el target de rescate. Este modo monta los sistemas de archivos y carga servicios basicos, pero no inicia la red ni servicios multiusuario. Las opciones `single`, `1` o `S` tambien funcionan por compatibilidad, pero `systemd.unit=rescue.target` es la forma especifica de systemd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que archivo virtual contiene los parametros exactos con los que se arranco el kernel actualmente en ejecucion?

</div>
<div class="flashcard-back">

**R:** b) `/proc/cmdline`. El archivo virtual `/proc/cmdline` contiene la linea completa de parametros que se pasaron al kernel durante el arranque. Incluye parametros como `root=`, `ro`, `quiet`, `splash`, `systemd.unit=` y cualquier otro que se haya especificado en la configuracion de GRUB o editado manualmente durante el arranque. Es la fuente definitiva para verificar la configuracion de arranque activa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que opcion de `Storage` en `/etc/systemd/journald.conf` descarta completamente todos los mensajes del journal sin almacenarlos?

</div>
<div class="flashcard-back">

**R:** c) `none`. La opcion `Storage=none` en `journald.conf` descarta todos los mensajes del journal sin almacenarlos ni en disco ni en memoria. Las otras opciones validas son: `volatile` (solo en memoria en `/run/log/journal/`), `persistent` (en disco en `/var/log/journal/`) y `auto` (en disco si el directorio existe, en memoria si no). `disabled` no es una opcion valida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-019">
<div class="flashcard-front">

**P:** Un administrador quiere agregar una entrada personalizada al menu de GRUB. ¿En que archivo debe definirla?

</div>
<div class="flashcard-back">

**R:** c) `/etc/grub.d/40_custom`. El archivo `/etc/grub.d/40_custom` esta disenado especificamente para que los administradores agreguen entradas personalizadas al menu de GRUB. Las entradas se definen usando bloques `menuentry`. Despues de editar este archivo, se debe ejecutar `grub-mkconfig -o /boot/grub/grub.cfg` para regenerar la configuracion. Nunca se debe editar `grub.cfg` directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que parametro del kernel permite desactivar la configuracion automatica del modo grafico, util cuando hay problemas con los drivers de video?

</div>
<div class="flashcard-back">

**R:** b) `nomodeset`. El parametro `nomodeset` impide que el kernel configure el modo grafico (KMS - Kernel Mode Setting) durante el arranque, forzando al sistema a usar un modo de video basico. Es extremadamente util cuando hay problemas con los drivers de video que impiden el arranque normal o causan una pantalla negra. Se puede agregar temporalmente editando la entrada de GRUB o permanentemente en `GRUB_CMDLINE_LINUX`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando establece `multi-user.target` como el objetivo de arranque por defecto en systemd?

</div>
<div class="flashcard-back">

**R:** systemctl set-default multi-user.target. El comando `systemctl set-default multi-user.target` configura el target de arranque por defecto del sistema. Esto crea un enlace simbolico desde `/etc/systemd/system/default.target` al target especificado. A partir del siguiente reinicio, el sistema arrancara en modo multiusuario sin interfaz grafica. Para verificar el target actual se usa `systemctl get-default`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando regenera el archivo `grub.cfg` a partir de la configuracion de `/etc/default/grub` y los scripts de `/etc/grub.d/`?

</div>
<div class="flashcard-back">

**R:** grub-mkconfig -o /boot/grub/grub.cfg. El comando `grub-mkconfig` genera la configuracion de GRUB ejecutando los scripts de `/etc/grub.d/` en orden numerico y utilizando las variables de `/etc/default/grub`. La opcion `-o` especifica el archivo de salida. En Debian/Ubuntu existe el wrapper `update-grub` que es equivalente. En RHEL/CentOS se usa `grub2-mkconfig -o /boot/grub2/grub.cfg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando muestra los mensajes del arranque anterior del sistema filtrados por prioridad de error?

</div>
<div class="flashcard-back">

**R:** journalctl -b -1 -p err. El comando `journalctl -b -1 -p err` muestra los mensajes del arranque anterior (`-b -1`) filtrados por prioridad de error o superior (`-p err`). La opcion `-b 0` seria el arranque actual y `-b -1` el anterior. Para que funcione, el journal debe tener almacenamiento persistente configurado (directorio `/var/log/journal/` existente o `Storage=persistent`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando instala los archivos de GRUB en el MBR del disco `/dev/sda`?

</div>
<div class="flashcard-back">

**R:** grub-install /dev/sda. El comando `grub-install /dev/sda` instala los archivos del cargador de arranque GRUB en el sector de arranque maestro (MBR) del disco `/dev/sda`. Esto incluye el codigo de arranque en los primeros 446 bytes del MBR y los archivos adicionales en `/boot/grub/`. Despues de instalar GRUB, se debe regenerar `grub.cfg` con `grub-mkconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando muestra el target de arranque por defecto configurado actualmente en systemd?

</div>
<div class="flashcard-back">

**R:** systemctl get-default. El comando `systemctl get-default` muestra el target de arranque por defecto del sistema, que es el enlace simbolico `/etc/systemd/system/default.target`. Los valores tipicos son `graphical.target` (con interfaz grafica) o `multi-user.target` (sin interfaz grafica). Para cambiar el target por defecto se usa `systemctl set-default`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-026">
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

<div class="flashcard" data-id="202.1-fc-027">
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

<div class="flashcard" data-id="202.1-fc-028">
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

<div class="flashcard" data-id="202.1-fc-029">
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

<div class="flashcard" data-id="202.1-fc-030">
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

<div class="flashcard" data-id="202.1-fc-031">
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

<div class="flashcard" data-id="202.1-fc-032">
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

<div class="flashcard" data-id="202.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `GRUB_DISABLE_RECOVERY`?

</div>
<div class="flashcard-back">

**R:** Ocultar entradas de recuperacion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `00_header`?

</div>
<div class="flashcard-back">

**R:** Configuracion general (timeout, defecto, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-035">
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

<div class="flashcard" data-id="202.1-fc-036">
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

<div class="flashcard" data-id="202.1-fc-037">
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

<div class="flashcard" data-id="202.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Resumen de archivos clave?

</div>
<div class="flashcard-back">

**R:** | Archivo/Directorio | Funcion |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.1">
</div>

<div class="flashcard" data-id="202.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

