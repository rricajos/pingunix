---
title: "104.3 Controlar el montaje y desmontaje - Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-104
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "104"
subtema: "104.3"
---

# 104.3 Controlar el montaje y desmontaje - Ejercicios

### Pregunta 1

Cual es la linea correcta de `/etc/fstab` para montar una particion ext4 identificada por UUID en `/home`, con opciones por defecto, sin backup con dump, y que se verifique con fsck despues de la particion raiz?

a) `UUID=a1b2c3d4 /home ext4 defaults 1 1`
b) `UUID=a1b2c3d4 /home ext4 defaults 0 2`
c) `/dev/sda2 /home ext4 defaults 0 0`
d) `UUID=a1b2c3d4 /home ext4 defaults 1 0`

<details>
<summary>Respuesta</summary>

**b) `UUID=a1b2c3d4 /home ext4 defaults 0 2`**

Los 6 campos de `/etc/fstab` son: dispositivo, punto de montaje, tipo, opciones, dump y pass. El campo dump con valor `0` indica que no se hace backup con dump. El campo pass con valor `2` indica que se verifica con fsck despues de la particion raiz (que debe tener pass=1). La opcion `a` tiene dump=1 y pass=1 (solo la raiz deberia tener pass=1). La opcion `c` usa nombre de dispositivo en vez de UUID (no recomendado) y no verifica con fsck (pass=0). La opcion `d` tiene dump=1 y pass=0.

</details>

---

### Pregunta 2

Que opciones estan implicitas cuando se usa `defaults` en `/etc/fstab`?

a) `ro,nosuid,nodev,noexec,auto,nouser,sync`
b) `rw,suid,dev,exec,auto,nouser,async`
c) `rw,suid,dev,exec,noauto,user,async`
d) `rw,nosuid,dev,exec,auto,nouser,sync`

<details>
<summary>Respuesta</summary>

**b) `rw,suid,dev,exec,auto,nouser,async`**

La opcion `defaults` en `/etc/fstab` equivale a la combinacion de: `rw` (lectura-escritura), `suid` (respetar bits SUID/SGID), `dev` (interpretar dispositivos especiales), `exec` (permitir ejecucion de binarios), `auto` (montar con `mount -a`), `nouser` (solo root puede montar) y `async` (escrituras asincronas). Es importante recordar que `defaults` NO incluye `sync` ni opciones restrictivas como `nosuid` o `noexec`. Cuando se usa `user`, automaticamente se aplican `noexec`, `nosuid` y `nodev` por seguridad.

</details>

---

### Pregunta 3

Como se monta una imagen ISO llamada `/home/user/ubuntu.iso` en `/mnt/iso` como solo lectura?

a) `mount /home/user/ubuntu.iso /mnt/iso`
b) `mount -o loop,ro /home/user/ubuntu.iso /mnt/iso`
c) `mount -t iso9660 /home/user/ubuntu.iso /mnt/iso --readonly`
d) `cp /home/user/ubuntu.iso /mnt/iso`

<details>
<summary>Respuesta</summary>

**b) `mount -o loop,ro /home/user/ubuntu.iso /mnt/iso`**

La opcion `loop` crea un dispositivo de bucle (`/dev/loopN`) que permite tratar un archivo como si fuera un dispositivo de bloque, lo cual es necesario para montar imagenes ISO. La opcion `ro` asegura que se monte como solo lectura. Opcionalmente se puede especificar el tipo con `-t iso9660`. La opcion `a` no incluye `loop` ni `ro`. La opcion `c` usa una sintaxis incorrecta (`--readonly` no es una opcion valida de mount; se usa `ro` como opcion de montaje). La opcion `d` simplemente copiaria el archivo, no lo montaria.

</details>

---

### Pregunta 4

Un sistema de archivos esta montado en `/datos` y necesitas cambiarlo a solo lectura sin desmontarlo. Cual es el comando correcto?

a) `mount -o ro /datos`
b) `umount /datos && mount -o ro /datos`
c) `mount -o remount,ro /datos`
d) `chmod -w /datos`

<details>
<summary>Respuesta</summary>

**c) `mount -o remount,ro /datos`**

La opcion `remount` permite cambiar las opciones de un sistema de archivos ya montado sin necesidad de desmontarlo primero. Esto es especialmente util para la particion raiz (`/`), que no se puede desmontar facilmente mientras el sistema esta en ejecucion. La opcion `a` intentaria montar de nuevo sin remontar y fallaria porque ya esta montado. La opcion `b` desmonta y vuelve a montar, lo cual no cumple el requisito de no desmontar. La opcion `d` solo cambia permisos del directorio, no las opciones de montaje del sistema de archivos.

</details>

---

### Pregunta 5

Cual es el significado del valor `2` en el sexto campo (pass) de `/etc/fstab`?

a) El sistema de archivos se verifica con fsck en segundo lugar, antes de la particion raiz
b) El sistema de archivos no se verifica nunca con fsck al arrancar
c) El sistema de archivos se verifica con fsck despues de las particiones con pass=1
d) El sistema de archivos se verifica dos veces con fsck al arrancar

<details>
<summary>Respuesta</summary>

**c) El sistema de archivos se verifica con fsck despues de las particiones con pass=1**

El campo pass de `/etc/fstab` controla el orden de verificacion con fsck al arrancar: `0` significa no verificar, `1` significa verificar primero (reservado exclusivamente para la particion raiz `/`), y `2` significa verificar despues de las particiones con pass=1. Las particiones con pass=2 pueden verificarse en paralelo para mayor eficiencia. El swap y los sistemas de archivos virtuales deben tener pass=0. Solo la particion raiz debe tener pass=1.

</details>

---

### Pregunta 6

Cual de los siguientes comandos muestra el UUID de `/dev/sdb1`?

a) `fdisk -l /dev/sdb1`
b) `blkid /dev/sdb1`
c) `mount /dev/sdb1`
d) `df -h /dev/sdb1`

<details>
<summary>Respuesta</summary>

**b) `blkid /dev/sdb1`**

El comando `blkid` muestra el UUID, tipo de sistema de archivos y etiqueta de los dispositivos de bloque. Su salida tipica es: `/dev/sdb1: UUID="xxxx" TYPE="ext4" LABEL="datos"`. Otras formas de obtener el UUID incluyen `lsblk -f`, `ls -la /dev/disk/by-uuid/` y `tune2fs -l /dev/sdb1 | grep UUID` (solo para ext). `fdisk -l` muestra informacion de particiones pero no el UUID del sistema de archivos. `mount` muestra o realiza montajes. `df -h` muestra espacio en disco, no UUID.

</details>

---

### Pregunta 7

Un administrador intenta desmontar `/mnt/datos` pero recibe el error "target is busy". Cual de los siguientes comandos muestra que procesos estan usando ese punto de montaje?

a) `ps aux | grep /mnt/datos`
b) `lsof /mnt/datos`
c) `top -p /mnt/datos`
d) `df -h /mnt/datos`

<details>
<summary>Respuesta</summary>

**b) `lsof /mnt/datos`**

El comando `lsof` (list open files) muestra todos los archivos abiertos en un punto de montaje especifico, incluyendo los procesos responsables. Otra alternativa es `fuser -mv /mnt/datos`. Una vez identificados los procesos, se pueden cerrar normalmente o matar con `fuser -km /mnt/datos`. Si no se pueden terminar los procesos, se puede usar `umount -l` (lazy unmount) que desconecta inmediatamente y limpia cuando ya no se use. La opcion `a` podria no encontrar procesos que tienen archivos abiertos sin que aparezca la ruta en sus argumentos. `top` y `df` no sirven para este proposito.

</details>

---

### Pregunta 8

Si una unidad systemd `.mount` se llama `mnt-backup-diario.mount`, cual es el punto de montaje correspondiente?

a) `/mnt-backup-diario`
b) `/mnt/backup-diario`
c) `/mnt/backup/diario`
d) `/mount/backup/diario`

<details>
<summary>Respuesta</summary>

**c) `/mnt/backup/diario`**

En systemd, el nombre de una unidad `.mount` se construye reemplazando las barras `/` de la ruta del punto de montaje por guiones `-`, y omitiendo la barra inicial. Por lo tanto, `mnt-backup-diario.mount` corresponde al punto de montaje `/mnt/backup/diario`. Inversamente, para el punto de montaje `/srv/web/static`, la unidad se llamaria `srv-web-static.mount`. Las unidades `.mount` de systemd permiten gestionar montajes con `systemctl start`, `systemctl stop` y `systemctl enable`.

</details>

---

### Pregunta 9

Cual es la fuente mas fiable de informacion sobre los sistemas de archivos actualmente montados en un sistema Linux?

a) `/etc/fstab`
b) `/etc/mtab`
c) `/proc/mounts`
d) La salida del comando `blkid`

<details>
<summary>Respuesta</summary>

**c) `/proc/mounts`**

`/proc/mounts` es un archivo virtual del kernel que muestra los sistemas de archivos actualmente montados en tiempo real, lo que lo convierte en la fuente mas fiable. `/etc/fstab` es la configuracion de montaje deseada pero no refleja necesariamente el estado actual (un administrador podria haber montado o desmontado algo manualmente). `/etc/mtab` en distribuciones modernas suele ser un enlace simbolico a `/proc/self/mounts`, asi que en la practica contiene la misma informacion. `blkid` muestra informacion sobre dispositivos de bloque y sus UUIDs, no sobre montajes actuales.

</details>

---

### Pregunta 10

Que opcion de `/etc/fstab` permite que un usuario normal monte un sistema de archivos, pero automaticamente restringe la ejecucion de binarios, SUID y dispositivos especiales?

a) `defaults`
b) `noauto`
c) `user`
d) `users`

<details>
<summary>Respuesta</summary>

**c) `user`**

La opcion `user` en `/etc/fstab` permite que usuarios normales (no root) monten el sistema de archivos. Por seguridad, automaticamente implica `noexec` (no permitir ejecucion de binarios), `nosuid` (ignorar bits SUID/SGID) y `nodev` (no interpretar dispositivos especiales). Esto evita que un usuario pueda escalar privilegios montando medios con ejecutables SUID. La opcion `defaults` no permite a usuarios normales montar (incluye `nouser`). `noauto` solo evita que se monte con `mount -a`. La opcion `users` es similar a `user`, pero permite que cualquier usuario pueda desmontar el FS, no solo el que lo monto.

</details>

---

### Pregunta 11

Que hace el comando `mount -a`?

a) Monta todos los dispositivos de bloque detectados automaticamente
b) Monta todos los sistemas de archivos listados en `/etc/fstab` que no tengan la opcion `noauto`
c) Monta todos los dispositivos USB conectados al sistema
d) Muestra todos los sistemas de archivos actualmente montados

<details><summary>Respuesta</summary>

**b) Monta todos los sistemas de archivos listados en `/etc/fstab` que no tengan la opcion `noauto`**

El comando `mount -a` lee el archivo `/etc/fstab` e intenta montar todos los sistemas de archivos que no tengan la opcion `noauto` en su campo de opciones. Los que ya estan montados se ignoran. Es util despues de modificar `/etc/fstab` para montar las nuevas entradas sin reiniciar. Los sistemas de archivos con `noauto` estan excluidos porque esa opcion indica que se deben montar manualmente.

</details>

---

### Pregunta 12

Cual es la diferencia entre las opciones `user` y `users` en `/etc/fstab`?

a) `user` permite que cualquier usuario monte y desmonte; `users` solo permite montar
b) `user` permite montar al usuario que lo monto y solo ese usuario puede desmontarlo; `users` permite que cualquier usuario monte y desmonte
c) No hay diferencia, son sinonimos
d) `user` es para un usuario especifico y `users` es para un grupo de usuarios

<details><summary>Respuesta</summary>

**b) `user` permite montar al usuario que lo monto y solo ese usuario puede desmontarlo; `users` permite que cualquier usuario monte y desmonte**

Con la opcion `user`, un usuario normal puede montar el sistema de archivos, pero solo el mismo usuario (o root) puede desmontarlo. Con la opcion `users`, cualquier usuario puede montar el sistema de archivos y tambien cualquier usuario puede desmontarlo, no solo el que lo monto. Ambas opciones implican automaticamente `noexec`, `nosuid` y `nodev` por seguridad.

</details>

---

### Pregunta 13

Un administrador necesita que una particion de datos no bloquee el arranque del sistema si el disco falla. Que opcion debe agregar en `/etc/fstab`?

a) `noauto`
b) `nofail`
c) `ro`
d) `defaults`

<details><summary>Respuesta</summary>

**b) `nofail`**

La opcion `nofail` en `/etc/fstab` indica que el sistema no debe reportar un error ni detenerse si el dispositivo no existe o no esta disponible durante el arranque. Esto es especialmente util para discos externos, particiones de datos no criticas o almacenamiento en red que podria no estar disponible al iniciar. Sin `nofail`, un dispositivo ausente podria hacer que el sistema entre en modo de emergencia. `noauto` impide que se monte con `mount -a` pero no evita errores de arranque por si sola.

</details>

---

### Pregunta 14

Cual de los siguientes comandos muestra los sistemas de archivos montados en formato de arbol junto con el tipo de FS y el UUID?

a) `mount`
b) `df -hT`
c) `lsblk -f`
d) `findmnt`

<details><summary>Respuesta</summary>

**c) `lsblk -f`**

`lsblk -f` muestra los dispositivos de bloque en formato de arbol incluyendo el tipo de sistema de archivos, la etiqueta, el UUID y el punto de montaje. Es una herramienta muy visual y completa. `mount` muestra los montajes pero no en formato de arbol y sin UUIDs. `df -hT` muestra espacio en disco con tipo de FS pero sin UUID. `findmnt` muestra montajes en formato de arbol pero no incluye UUID por defecto.

</details>

---

### Pregunta 15

Que hace la opcion `noatime` cuando se usa como opcion de montaje?

a) No permite el acceso al sistema de archivos en ningun momento
b) No actualiza el timestamp de acceso (atime) de los archivos al leerlos
c) No permite montar el sistema de archivos de forma automatica
d) Monta el sistema de archivos sin soporte de timestamps

<details><summary>Respuesta</summary>

**b) No actualiza el timestamp de acceso (atime) de los archivos al leerlos**

La opcion `noatime` evita que el sistema actualice el timestamp de acceso (atime) cada vez que se lee un archivo. Esto mejora el rendimiento significativamente, especialmente en discos con muchas operaciones de lectura, ya que elimina una escritura innecesaria por cada lectura. La opcion `relatime` (predeterminada en muchas distribuciones) es un compromiso: solo actualiza atime si es mas antiguo que mtime o ctime.

</details>

---

### Pregunta 16

Si un directorio ya tiene archivos y se monta un sistema de archivos sobre el, que ocurre con los archivos originales del directorio?

a) Los archivos se eliminan permanentemente
b) Los archivos quedan ocultos mientras el sistema de archivos este montado y reaparecen al desmontarlo
c) Se produce un error y el montaje falla
d) Los archivos se mueven automaticamente al nuevo sistema de archivos

<details><summary>Respuesta</summary>

**b) Los archivos quedan ocultos mientras el sistema de archivos este montado y reaparecen al desmontarlo**

Cuando se monta un sistema de archivos sobre un directorio que ya contiene archivos, los archivos originales quedan ocultos (no eliminados). El punto de montaje ahora muestra el contenido del sistema de archivos montado. Al desmontar con `umount`, los archivos originales vuelven a ser visibles. Esto no causa perdida de datos pero se recomienda usar directorios vacios como puntos de montaje para evitar confusion.

</details>

---

### Pregunta 17

Que comando se usa para hacer un "lazy unmount" que desconecta inmediatamente el sistema de archivos pero lo limpia cuando ya no este en uso?

a) `umount -f /mnt/datos`
b) `umount -l /mnt/datos`
c) `umount -r /mnt/datos`
d) `umount -d /mnt/datos`

<details><summary>Respuesta</summary>

**b) `umount -l /mnt/datos`**

La opcion `-l` (lazy unmount) desconecta el sistema de archivos del arbol de directorios inmediatamente, haciendo que no sea accesible para nuevas operaciones. Sin embargo, la limpieza real se realiza cuando todos los procesos que lo estan usando terminan o cierran sus archivos. La opcion `-f` fuerza el desmontaje (util para NFS). El lazy unmount es util cuando el sistema de archivos esta "busy" y no se puede desmontar normalmente, pero se debe usar con precaucion.

</details>

---

### Pregunta 18

Cual es el archivo de configuracion principal de `autofs` que define los puntos de montaje base?

a) `/etc/fstab`
b) `/etc/auto.master`
c) `/etc/autofs.conf`
d) `/etc/mount.auto`

<details><summary>Respuesta</summary>

**b) `/etc/auto.master`**

`/etc/auto.master` es el archivo de configuracion principal de `autofs` que define los puntos de montaje base y sus mapas asociados. Cada linea especifica un directorio base, un archivo de mapa con las definiciones de los submontajes y opciones opcionales. Por ejemplo: `/mnt/auto /etc/auto.datos --timeout=60`. Los mapas individuales (como `/etc/auto.datos`) definen los subdirectorios especificos que se montaran automaticamente al acceder a ellos.

</details>

---

### Pregunta 19

En una unidad systemd `.mount`, que seccion contiene los parametros `What`, `Where` y `Type`?

a) `[Unit]`
b) `[Mount]`
c) `[Install]`
d) `[Service]`

<details><summary>Respuesta</summary>

**b) `[Mount]`**

La seccion `[Mount]` de una unidad `.mount` de systemd contiene los parametros principales del montaje: `What` (que dispositivo montar), `Where` (donde montarlo, el punto de montaje), `Type` (tipo de sistema de archivos) y `Options` (opciones de montaje). La seccion `[Unit]` contiene la descripcion y dependencias. La seccion `[Install]` define cuando se habilita la unidad. `[Service]` no se usa en unidades `.mount`.

</details>

---

### Pregunta 20

Que opcion de montaje es necesaria para montar una imagen ISO como si fuera un dispositivo de bloque?

a) `ro`
b) `loop`
c) `iso9660`
d) `bind`

<details><summary>Respuesta</summary>

**b) `loop`**

La opcion `loop` crea un dispositivo de bucle (`/dev/loopN`) que permite tratar un archivo regular (como una imagen ISO) como si fuera un dispositivo de bloque. Sin esta opcion, `mount` no puede montar archivos directamente. El comando completo seria: `mount -o loop imagen.iso /mnt/iso`. Opcionalmente se puede especificar el tipo con `-t iso9660`. La opcion `ro` es para solo lectura y `bind` es para vincular directorios, no para montar archivos.

</details>

---

### Pregunta 21

Escribe el comando para montar la particion `/dev/sdb1` en el directorio `/mnt/datos`.

<input type="text" class="fill-blank" data-answer="mount /dev/sdb1 /mnt/datos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount /dev/sdb1 /mnt/datos**

El comando `mount` con el dispositivo y el punto de montaje monta la particion. Linux detecta automaticamente el tipo de sistema de archivos en la mayoria de casos. Si se necesita especificar el tipo, se usa `mount -t ext4 /dev/sdb1 /mnt/datos`. El directorio `/mnt/datos` debe existir previamente. Solo root puede ejecutar este comando a menos que la entrada en `/etc/fstab` tenga la opcion `user` o `users`.

</details>

---

### Pregunta 22

Escribe el comando para desmontar el sistema de archivos montado en `/mnt/usb`.

<input type="text" class="fill-blank" data-answer="umount /mnt/usb" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**umount /mnt/usb**

El comando es `umount` (sin la primera 'n', no "unmount") seguido del punto de montaje o del dispositivo. Si recibe el error "target is busy", se puede usar `lsof /mnt/usb` o `fuser -mv /mnt/usb` para identificar los procesos que estan usando el sistema de archivos. Como alternativa se puede usar `umount -l` (lazy) para un desmontaje diferido.

</details>

---

### Pregunta 23

Escribe el comando para remontar la particion raiz como solo lectura sin desmontarla.

<input type="text" class="fill-blank" data-answer="mount -o remount,ro /" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -o remount,ro /**

La opcion `remount` permite cambiar las opciones de un sistema de archivos ya montado sin necesidad de desmontarlo. Esto es especialmente util para la particion raiz (`/`), que no se puede desmontar mientras el sistema esta en ejecucion. Remontar como solo lectura (`ro`) es un paso necesario antes de ejecutar `fsck` en la particion raiz. Para volver a lectura-escritura se usa `mount -o remount,rw /`.

</details>

---

### Pregunta 24

Escribe el comando para ver el UUID de todos los dispositivos de bloque del sistema.

<input type="text" class="fill-blank" data-answer="blkid" data-alt="sudo blkid,lsblk -f" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**blkid**

El comando `blkid` muestra el UUID, tipo de sistema de archivos y etiqueta de todos los dispositivos de bloque del sistema. Su salida tipica es: `/dev/sda1: UUID="xxxx" TYPE="ext4" LABEL="root"`. Los UUIDs son importantes para `/etc/fstab` ya que son identificadores unicos que no cambian al agregar o quitar discos, a diferencia de los nombres como `/dev/sda1`.

</details>

---

### Pregunta 25

Escribe el comando para montar una imagen ISO llamada `ubuntu.iso` en el directorio `/mnt/iso` como solo lectura.

<input type="text" class="fill-blank" data-answer="mount -o loop,ro ubuntu.iso /mnt/iso" data-alt="mount -o loop,ro ./ubuntu.iso /mnt/iso" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -o loop,ro ubuntu.iso /mnt/iso**

La opcion `loop` permite montar un archivo como si fuera un dispositivo de bloque, creando un dispositivo loop virtual. La opcion `ro` monta en modo solo lectura, lo cual es apropiado para imagenes ISO que normalmente no se modifican. El directorio `/mnt/iso` debe existir previamente. Opcionalmente se puede especificar el tipo con `-t iso9660`.

</details>
