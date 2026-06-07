---
title: "104.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "104.3"
---

# Flashcards: 104.3 - Montaje Y Desmontaje

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-001">
<div class="flashcard-front">

**P:** Cual es la linea correcta de `/etc/fstab` para montar una particion ext4 identificada por UUID en `/home`, con opciones por defecto, sin backup con dump, y que se verifique con fsck despues de la particion raiz?

</div>
<div class="flashcard-back">

**R:** b) `UUID=a1b2c3d4 /home ext4 defaults 0 2`. Los 6 campos de `/etc/fstab` son: dispositivo, punto de montaje, tipo, opciones, dump y pass. El campo dump con valor `0` indica que no se hace backup con dump. El campo pass con valor `2` indica que se verifica con fsck despues de la particion raiz (que debe tener pass=1). La opcion `a` tiene dump=1 y pass=1 (solo la raiz deberia tener pass=1). La opcion `c` usa nombre de dispositivo en vez de UUID (no recomendado) y no verifica con fsck (pass=0). La opcion `d` tiene dump=1 y pass=0.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-002">
<div class="flashcard-front">

**P:** Que opciones estan implicitas cuando se usa `defaults` en `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** b) `rw,suid,dev,exec,auto,nouser,async`. La opcion `defaults` en `/etc/fstab` equivale a la combinacion de: `rw` (lectura-escritura), `suid` (respetar bits SUID/SGID), `dev` (interpretar dispositivos especiales), `exec` (permitir ejecucion de binarios), `auto` (montar con `mount -a`), `nouser` (solo root puede montar) y `async` (escrituras asincronas). Es importante recordar que `defaults` NO incluye `sync` ni opciones restrictivas como `nosuid` o `noexec`. Cuando se usa `user`, automaticamente se aplican `noexec`, `nosuid` y `nodev` por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-003">
<div class="flashcard-front">

**P:** Como se monta una imagen ISO llamada `/home/user/ubuntu.iso` en `/mnt/iso` como solo lectura?

</div>
<div class="flashcard-back">

**R:** b) `mount -o loop,ro /home/user/ubuntu.iso /mnt/iso`. La opcion `loop` crea un dispositivo de bucle (`/dev/loopN`) que permite tratar un archivo como si fuera un dispositivo de bloque, lo cual es necesario para montar imagenes ISO. La opcion `ro` asegura que se monte como solo lectura. Opcionalmente se puede especificar el tipo con `-t iso9660`. La opcion `a` no incluye `loop` ni `ro`. La opcion `c` usa una sintaxis incorrecta (`--readonly` no es una opcion valida de mount; se usa `ro` como opcion de montaje). La opcion `d` simplemente copiaria el archivo, no lo montaria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-004">
<div class="flashcard-front">

**P:** Un sistema de archivos esta montado en `/datos` y necesitas cambiarlo a solo lectura sin desmontarlo. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** c) `mount -o remount,ro /datos`. La opcion `remount` permite cambiar las opciones de un sistema de archivos ya montado sin necesidad de desmontarlo primero. Esto es especialmente util para la particion raiz (`/`), que no se puede desmontar facilmente mientras el sistema esta en ejecucion. La opcion `a` intentaria montar de nuevo sin remontar y fallaria porque ya esta montado. La opcion `b` desmonta y vuelve a montar, lo cual no cumple el requisito de no desmontar. La opcion `d` solo cambia permisos del directorio, no las opciones de montaje del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-005">
<div class="flashcard-front">

**P:** Cual es el significado del valor `2` en el sexto campo (pass) de `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** c) El sistema de archivos se verifica con fsck despues de las particiones con pass=1. El campo pass de `/etc/fstab` controla el orden de verificacion con fsck al arrancar: `0` significa no verificar, `1` significa verificar primero (reservado exclusivamente para la particion raiz `/`), y `2` significa verificar despues de las particiones con pass=1. Las particiones con pass=2 pueden verificarse en paralelo para mayor eficiencia. El swap y los sistemas de archivos virtuales deben tener pass=0. Solo la particion raiz debe tener pass=1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-006">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra el UUID de `/dev/sdb1`?

</div>
<div class="flashcard-back">

**R:** b) `blkid /dev/sdb1`. El comando `blkid` muestra el UUID, tipo de sistema de archivos y etiqueta de los dispositivos de bloque. Su salida tipica es: `/dev/sdb1: UUID="xxxx" TYPE="ext4" LABEL="datos"`. Otras formas de obtener el UUID incluyen `lsblk -f`, `ls -la /dev/disk/by-uuid/` y `tune2fs -l /dev/sdb1 | grep UUID` (solo para ext). `fdisk -l` muestra informacion de particiones pero no el UUID del sistema de archivos. `mount` muestra o realiza montajes. `df -h` muestra espacio en disco, no UUID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-007">
<div class="flashcard-front">

**P:** Un administrador intenta desmontar `/mnt/datos` pero recibe el error "target is busy". Cual de los siguientes comandos muestra que procesos estan usando ese punto de montaje?

</div>
<div class="flashcard-back">

**R:** b) `lsof /mnt/datos`. El comando `lsof` (list open files) muestra todos los archivos abiertos en un punto de montaje especifico, incluyendo los procesos responsables. Otra alternativa es `fuser -mv /mnt/datos`. Una vez identificados los procesos, se pueden cerrar normalmente o matar con `fuser -km /mnt/datos`. Si no se pueden terminar los procesos, se puede usar `umount -l` (lazy unmount) que desconecta inmediatamente y limpia cuando ya no se use. La opcion `a` podria no encontrar procesos que tienen archivos abiertos sin que aparezca la ruta en sus argumentos. `top` y `df` no sirven para este proposito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-008">
<div class="flashcard-front">

**P:** Si una unidad systemd `.mount` se llama `mnt-backup-diario.mount`, cual es el punto de montaje correspondiente?

</div>
<div class="flashcard-back">

**R:** c) `/mnt/backup/diario`. En systemd, el nombre de una unidad `.mount` se construye reemplazando las barras `/` de la ruta del punto de montaje por guiones `-`, y omitiendo la barra inicial. Por lo tanto, `mnt-backup-diario.mount` corresponde al punto de montaje `/mnt/backup/diario`. Inversamente, para el punto de montaje `/srv/web/static`, la unidad se llamaria `srv-web-static.mount`. Las unidades `.mount` de systemd permiten gestionar montajes con `systemctl start`, `systemctl stop` y `systemctl enable`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-009">
<div class="flashcard-front">

**P:** Cual es la fuente mas fiable de informacion sobre los sistemas de archivos actualmente montados en un sistema Linux?

</div>
<div class="flashcard-back">

**R:** c) `/proc/mounts`. `/proc/mounts` es un archivo virtual del kernel que muestra los sistemas de archivos actualmente montados en tiempo real, lo que lo convierte en la fuente mas fiable. `/etc/fstab` es la configuracion de montaje deseada pero no refleja necesariamente el estado actual (un administrador podria haber montado o desmontado algo manualmente). `/etc/mtab` en distribuciones modernas suele ser un enlace simbolico a `/proc/self/mounts`, asi que en la practica contiene la misma informacion. `blkid` muestra informacion sobre dispositivos de bloque y sus UUIDs, no sobre montajes actuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-010">
<div class="flashcard-front">

**P:** Que opcion de `/etc/fstab` permite que un usuario normal monte un sistema de archivos, pero automaticamente restringe la ejecucion de binarios, SUID y dispositivos especiales?

</div>
<div class="flashcard-back">

**R:** c) `user`. La opcion `user` en `/etc/fstab` permite que usuarios normales (no root) monten el sistema de archivos. Por seguridad, automaticamente implica `noexec` (no permitir ejecucion de binarios), `nosuid` (ignorar bits SUID/SGID) y `nodev` (no interpretar dispositivos especiales). Esto evita que un usuario pueda escalar privilegios montando medios con ejecutables SUID. La opcion `defaults` no permite a usuarios normales montar (incluye `nouser`). `noauto` solo evita que se monte con `mount -a`. La opcion `users` es similar a `user`, pero permite que cualquier usuario pueda desmontar el FS, no solo el que lo monto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-011">
<div class="flashcard-front">

**P:** Que hace el comando `mount -a`?

</div>
<div class="flashcard-back">

**R:** b) Monta todos los sistemas de archivos listados en `/etc/fstab` que no tengan la opcion `noauto`. El comando `mount -a` lee el archivo `/etc/fstab` e intenta montar todos los sistemas de archivos que no tengan la opcion `noauto` en su campo de opciones. Los que ya estan montados se ignoran. Es util despues de modificar `/etc/fstab` para montar las nuevas entradas sin reiniciar. Los sistemas de archivos con `noauto` estan excluidos porque esa opcion indica que se deben montar manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre las opciones `user` y `users` en `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** b) `user` permite montar al usuario que lo monto y solo ese usuario puede desmontarlo; `users` permite que cualquier usuario monte y desmonte. Con la opcion `user`, un usuario normal puede montar el sistema de archivos, pero solo el mismo usuario (o root) puede desmontarlo. Con la opcion `users`, cualquier usuario puede montar el sistema de archivos y tambien cualquier usuario puede desmontarlo, no solo el que lo monto. Ambas opciones implican automaticamente `noexec`, `nosuid` y `nodev` por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-013">
<div class="flashcard-front">

**P:** Un administrador necesita que una particion de datos no bloquee el arranque del sistema si el disco falla. Que opcion debe agregar en `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** b) `nofail`. La opcion `nofail` en `/etc/fstab` indica que el sistema no debe reportar un error ni detenerse si el dispositivo no existe o no esta disponible durante el arranque. Esto es especialmente util para discos externos, particiones de datos no criticas o almacenamiento en red que podria no estar disponible al iniciar. Sin `nofail`, un dispositivo ausente podria hacer que el sistema entre en modo de emergencia. `noauto` impide que se monte con `mount -a` pero no evita errores de arranque por si sola.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-014">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra los sistemas de archivos montados en formato de arbol junto con el tipo de FS y el UUID?

</div>
<div class="flashcard-back">

**R:** c) `lsblk -f`. `lsblk -f` muestra los dispositivos de bloque en formato de arbol incluyendo el tipo de sistema de archivos, la etiqueta, el UUID y el punto de montaje. Es una herramienta muy visual y completa. `mount` muestra los montajes pero no en formato de arbol y sin UUIDs. `df -hT` muestra espacio en disco con tipo de FS pero sin UUID. `findmnt` muestra montajes en formato de arbol pero no incluye UUID por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-015">
<div class="flashcard-front">

**P:** Que hace la opcion `noatime` cuando se usa como opcion de montaje?

</div>
<div class="flashcard-back">

**R:** b) No actualiza el timestamp de acceso (atime) de los archivos al leerlos. La opcion `noatime` evita que el sistema actualice el timestamp de acceso (atime) cada vez que se lee un archivo. Esto mejora el rendimiento significativamente, especialmente en discos con muchas operaciones de lectura, ya que elimina una escritura innecesaria por cada lectura. La opcion `relatime` (predeterminada en muchas distribuciones) es un compromiso: solo actualiza atime si es mas antiguo que mtime o ctime.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-016">
<div class="flashcard-front">

**P:** Si un directorio ya tiene archivos y se monta un sistema de archivos sobre el, que ocurre con los archivos originales del directorio?

</div>
<div class="flashcard-back">

**R:** b) Los archivos quedan ocultos mientras el sistema de archivos este montado y reaparecen al desmontarlo. Cuando se monta un sistema de archivos sobre un directorio que ya contiene archivos, los archivos originales quedan ocultos (no eliminados). El punto de montaje ahora muestra el contenido del sistema de archivos montado. Al desmontar con `umount`, los archivos originales vuelven a ser visibles. Esto no causa perdida de datos pero se recomienda usar directorios vacios como puntos de montaje para evitar confusion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-017">
<div class="flashcard-front">

**P:** Que comando se usa para hacer un "lazy unmount" que desconecta inmediatamente el sistema de archivos pero lo limpia cuando ya no este en uso?

</div>
<div class="flashcard-back">

**R:** b) `umount -l /mnt/datos`. La opcion `-l` (lazy unmount) desconecta el sistema de archivos del arbol de directorios inmediatamente, haciendo que no sea accesible para nuevas operaciones. Sin embargo, la limpieza real se realiza cuando todos los procesos que lo estan usando terminan o cierran sus archivos. La opcion `-f` fuerza el desmontaje (util para NFS). El lazy unmount es util cuando el sistema de archivos esta "busy" y no se puede desmontar normalmente, pero se debe usar con precaucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-018">
<div class="flashcard-front">

**P:** Cual es el archivo de configuracion principal de `autofs` que define los puntos de montaje base?

</div>
<div class="flashcard-back">

**R:** b) `/etc/auto.master`. `/etc/auto.master` es el archivo de configuracion principal de `autofs` que define los puntos de montaje base y sus mapas asociados. Cada linea especifica un directorio base, un archivo de mapa con las definiciones de los submontajes y opciones opcionales. Por ejemplo: `/mnt/auto /etc/auto.datos --timeout=60`. Los mapas individuales (como `/etc/auto.datos`) definen los subdirectorios especificos que se montaran automaticamente al acceder a ellos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-019">
<div class="flashcard-front">

**P:** En una unidad systemd `.mount`, que seccion contiene los parametros `What`, `Where` y `Type`?

</div>
<div class="flashcard-back">

**R:** b) `[Mount]`. La seccion `[Mount]` de una unidad `.mount` de systemd contiene los parametros principales del montaje: `What` (que dispositivo montar), `Where` (donde montarlo, el punto de montaje), `Type` (tipo de sistema de archivos) y `Options` (opciones de montaje). La seccion `[Unit]` contiene la descripcion y dependencias. La seccion `[Install]` define cuando se habilita la unidad. `[Service]` no se usa en unidades `.mount`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-020">
<div class="flashcard-front">

**P:** Que opcion de montaje es necesaria para montar una imagen ISO como si fuera un dispositivo de bloque?

</div>
<div class="flashcard-back">

**R:** b) `loop`. La opcion `loop` crea un dispositivo de bucle (`/dev/loopN`) que permite tratar un archivo regular (como una imagen ISO) como si fuera un dispositivo de bloque. Sin esta opcion, `mount` no puede montar archivos directamente. El comando completo seria: `mount -o loop imagen.iso /mnt/iso`. Opcionalmente se puede especificar el tipo con `-t iso9660`. La opcion `ro` es para solo lectura y `bind` es para vincular directorios, no para montar archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para montar la particion `/dev/sdb1` en el directorio `/mnt/datos`. <input type="text" class="fill-blank" data-answer="mount /dev/sdb1 /mnt/datos" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mount /dev/sdb1 /mnt/datos. El comando `mount` con el dispositivo y el punto de montaje monta la particion. Linux detecta automaticamente el tipo de sistema de archivos en la mayoria de casos. Si se necesita especificar el tipo, se usa `mount -t ext4 /dev/sdb1 /mnt/datos`. El directorio `/mnt/datos` debe existir previamente. Solo root puede ejecutar este comando a menos que la entrada en `/etc/fstab` tenga la opcion `user` o `users`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para desmontar el sistema de archivos montado en `/mnt/usb`. <input type="text" class="fill-blank" data-answer="umount /mnt/usb" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** umount /mnt/usb. El comando es `umount` (sin la primera 'n', no "unmount") seguido del punto de montaje o del dispositivo. Si recibe el error "target is busy", se puede usar `lsof /mnt/usb` o `fuser -mv /mnt/usb` para identificar los procesos que estan usando el sistema de archivos. Como alternativa se puede usar `umount -l` (lazy) para un desmontaje diferido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para remontar la particion raiz como solo lectura sin desmontarla. <input type="text" class="fill-blank" data-answer="mount -o remount,ro /" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mount -o remount,ro /. La opcion `remount` permite cambiar las opciones de un sistema de archivos ya montado sin necesidad de desmontarlo. Esto es especialmente util para la particion raiz (`/`), que no se puede desmontar mientras el sistema esta en ejecucion. Remontar como solo lectura (`ro`) es un paso necesario antes de ejecutar `fsck` en la particion raiz. Para volver a lectura-escritura se usa `mount -o remount,rw /`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ver el UUID de todos los dispositivos de bloque del sistema. <input type="text" class="fill-blank" data-answer="blkid" data-alt="sudo blkid,lsblk -f" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** blkid. El comando `blkid` muestra el UUID, tipo de sistema de archivos y etiqueta de todos los dispositivos de bloque del sistema. Su salida tipica es: `/dev/sda1: UUID="xxxx" TYPE="ext4" LABEL="root"`. Los UUIDs son importantes para `/etc/fstab` ya que son identificadores unicos que no cambian al agregar o quitar discos, a diferencia de los nombres como `/dev/sda1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para montar una imagen ISO llamada `ubuntu.iso` en el directorio `/mnt/iso` como solo lectura. <input type="text" class="fill-blank" data-answer="mount -o loop,ro ubuntu.iso /mnt/iso" data-alt="mount -o loop,ro ./ubuntu.iso /mnt/iso" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mount -o loop,ro ubuntu.iso /mnt/iso. La opcion `loop` permite montar un archivo como si fuera un dispositivo de bloque, creando un dispositivo loop virtual. La opcion `ro` monta en modo solo lectura, lo cual es apropiado para imagenes ISO que normalmente no se modifican. El directorio `/mnt/iso` debe existir previamente. Opcionalmente se puede especificar el tipo con `-t iso9660`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `/proc/mounts` es la fuente autoritativa de montajes actuales. `/etc/fstab` es l...

</div>
<div class="flashcard-back">

**R:** `/proc/mounts` es la fuente autoritativa de montajes actuales. `/etc/fstab` es la configuracion deseada pero no necesariamente refleja el estado real. En distribuciones modernas, `/etc/mtab` es generalmente un enlace simbolico a `/proc/self/mounts`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `rw`?

</div>
<div class="flashcard-back">

**R:** Lectura-escritura (predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `noexec`?

</div>
<div class="flashcard-back">

**R:** No permitir ejecucion de binarios

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `exec`?

</div>
<div class="flashcard-back">

**R:** Permitir ejecucion (predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `suid`?

</div>
<div class="flashcard-back">

**R:** Respetar SUID/SGID (predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `nodev`?

</div>
<div class="flashcard-back">

**R:** No interpretar dispositivos especiales

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-032">
<div class="flashcard-front">

**P:** Un administrador junior conecta un nuevo disco `/dev/sdc1` al servidor pero al ejecutar `ls /dev/sdc1` ve el dispositivo y aun asi no puede acceder a sus archivos. Que paso fundamental le falta y por que Linux requiere este paso?

</div>
<div class="flashcard-back">

**R:** Le falta **montar** el sistema de archivos en un directorio del arbol de directorios. En Linux, un dispositivo de bloque existe en `/dev/` pero su contenido no es accesible hasta que se asocia a un **punto de montaje** (un directorio existente) mediante el comando `mount`. Por ejemplo: `mount /dev/sdc1 /mnt/datos`. Esto se debe a que Linux utiliza un **arbol de directorios unico** (VFS - Virtual File System) donde todos los sistemas de archivos se integran, a diferencia de Windows que usa letras de unidad. El directorio usado como punto de montaje debe existir previamente y se recomienda que este vacio, ya que cualquier contenido previo quedara oculto mientras el FS este montado. Para montaje permanente se debe agregar una entrada en `/etc/fstab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-033">
<div class="flashcard-front">

**P:** Un administrador quiere que la particion `/dev/sdb1` se monte automaticamente en `/srv/webapp` solo cuando el servicio `httpd` lo necesite, en lugar de montarla siempre al arrancar. Que tipo de unidad de systemd debe crear y cual seria su nombre correcto?

</div>
<div class="flashcard-back">

**R:** Debe crear una unidad `.automount` llamada `srv-webapp.automount` junto con su correspondiente unidad `srv-webapp.mount`. Las unidades `.automount` de systemd montan el sistema de archivos bajo demanda cuando un proceso intenta acceder al punto de montaje. La unidad `.mount` contiene la seccion `[Mount]` con los parametros `What=/dev/sdb1`, `Where=/srv/webapp`, `Type=ext4` y `Options=defaults`. El nombre de la unidad se deriva del punto de montaje reemplazando las barras `/` por guiones `-` y omitiendo la barra inicial. Systemd traduce automaticamente las entradas de `/etc/fstab` a unidades `.mount` internas, pero las unidades `.automount` deben crearse manualmente en `/etc/systemd/system/`. Se gestionan con `systemctl enable/start srv-webapp.automount`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-034">
<div class="flashcard-front">

**P:** Despues de agregar una nueva entrada en `/etc/fstab`, un administrador ejecuta `mount -a` pero la particion no se monta. La entrada es: `UUID=abc123 /datos ext4 noauto,defaults 0 2`. Cual es la causa del problema y como deberia corregirlo?

</div>
<div class="flashcard-back">

**R:** La causa es la opcion `noauto`. El comando `mount -a` monta todos los sistemas de archivos listados en `/etc/fstab` **excepto** los que tienen la opcion `noauto`. Esta opcion indica que el sistema de archivos no debe montarse automaticamente ni con `mount -a` ni durante el arranque, sino solo manualmente. Para solucionarlo, debe eliminar `noauto` de las opciones, dejando: `UUID=abc123 /datos ext4 defaults 0 2`. Alternativamente, si quiere mantener `noauto` para que no se monte al arrancar, puede montarlo manualmente con `mount /datos` (mount leera el resto de parametros de fstab). Es importante recordar que `defaults` equivale a `rw,suid,dev,exec,auto,nouser,async` y ya incluye `auto`, por lo que `noauto,defaults` es contradictorio: `noauto` sobreescribe el `auto` implicito en `defaults`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.3">
</div>

<div class="flashcard" data-id="104.3-fc-035">
<div class="flashcard-front">

**P:** En el examen LPIC-1 aparece esta pregunta: "Cual es el comando para desmontar `/mnt/usb`?" y las opciones incluyen `unmount /mnt/usb` y `umount /mnt/usb`. Cual es correcta, y que otras trampas clasicas sobre montaje/desmontaje suele usar LPI?

</div>
<div class="flashcard-back">

**R:** La correcta es `umount /mnt/usb` (sin la primera 'n'). El comando es `umount`, NO `unmount`. Esta es una de las trampas mas clasicas de LPI. Otras trampas frecuentes en 104.3: **1)** Confundir `user` con `users`: con `user` solo el usuario que monto puede desmontar; con `users` cualquier usuario puede desmontar. **2)** Creer que `/etc/fstab` refleja el estado actual de montajes: la fuente autoritativa es `/proc/mounts`, no fstab. **3)** Confundir `noauto` con `nofail`: `noauto` impide el montaje automatico con `mount -a`; `nofail` evita que el arranque falle si el dispositivo no existe. **4)** Olvidar que `user` implica automaticamente `noexec,nosuid,nodev` por seguridad. **5)** Confundir los valores del campo pass: solo la raiz `/` debe tener pass=1; el resto usa 2 (verificar despues) o 0 (no verificar). **6)** Creer que `-o remount` desmonta y vuelve a montar: en realidad cambia las opciones sin desmontar.

</div>
</div>

---

