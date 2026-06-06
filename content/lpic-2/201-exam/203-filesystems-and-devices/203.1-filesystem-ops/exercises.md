---
title: "203.1 - Operacion del sistema de archivos"
tags: [lpic-2, examen-201, tema-203, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "203"
subtema: "203.1"
---

# 203.1 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

En el archivo `/etc/fstab`, ¿que valor debe tener el campo "pass" (sexto campo) para la particion raiz (`/`)?

a) 0
b) 1
c) 2
d) 3

<details>
<summary>Respuesta</summary>

**b) 1**

El campo "pass" determina el orden en que `fsck` verifica los sistemas de archivos durante el arranque. El valor `1` esta reservado exclusivamente para la particion raiz, que se verifica primero. El valor `2` se usa para el resto de particiones (verificadas despues de la raiz). El valor `0` desactiva la verificacion para esa particion.
</details>

---

### Pregunta 2

¿Cual de las siguientes opciones de montaje en `/etc/fstab` indica a systemd que el dispositivo requiere conexion de red para estar disponible?

a) `noauto`
b) `nofail`
c) `_netdev`
d) `x-systemd.requires=network.target`

<details>
<summary>Respuesta</summary>

**c) `_netdev`**

La opcion `_netdev` indica que el dispositivo requiere que la red este disponible antes de intentar el montaje. Es esencial para montajes NFS, CIFS u otros sistemas de archivos remotos. Sin esta opcion, el sistema podria intentar montar el recurso antes de que la red este configurada, causando errores o retrasos en el arranque. La opcion d) tambien funcionaria como alternativa con sintaxis de systemd.
</details>

---

### Pregunta 3

Un administrador quiere que el contenido de `/var/www` sea accesible tambien desde `/home/webdev/sitio`. ¿Que tipo de montaje debe utilizar?

a) `mount -o loop /var/www /home/webdev/sitio`
b) `mount --bind /var/www /home/webdev/sitio`
c) `mount -t symlink /var/www /home/webdev/sitio`
d) `ln -s /var/www /home/webdev/sitio`

<details>
<summary>Respuesta</summary>

**b) `mount --bind /var/www /home/webdev/sitio`**

Un montaje bind permite montar un directorio en otra ubicacion del arbol de directorios, haciendo que el mismo contenido sea accesible desde ambas rutas. A diferencia de un enlace simbolico (opcion d), un bind mount funciona a nivel del sistema de archivos virtual y es mas robusto en ciertos escenarios (como chroot). La opcion loop es para montar archivos de imagen como dispositivos.
</details>

---

### Pregunta 4

En la configuracion de autofs, ¿que archivo define los puntos de montaje y referencia los archivos de mapa correspondientes?

a) `/etc/autofs.conf`
b) `/etc/auto.misc`
c) `/etc/auto.master`
d) `/etc/fstab`

<details>
<summary>Respuesta</summary>

**c) `/etc/auto.master`**

El archivo `/etc/auto.master` es el archivo maestro de autofs. Define los puntos de montaje base y referencia los archivos de mapa que contienen las definiciones individuales de cada montaje. Por ejemplo, una linea como `/mnt/nfs /etc/auto.nfs --timeout=60` indica que los montajes bajo `/mnt/nfs` estan definidos en el archivo `/etc/auto.nfs` con un timeout de 60 segundos.
</details>

---

### Pregunta 5

¿Que herramienta es la mas adecuada para obtener el UUID de una particion que se necesita para configurar en `/etc/fstab`?

a) `fdisk -l`
b) `lsblk`
c) `blkid`
d) `df -h`

<details>
<summary>Respuesta</summary>

**c) `blkid`**

`blkid` es la herramienta principal para obtener los atributos de dispositivos de bloque, incluyendo UUID, etiqueta (LABEL) y tipo de sistema de archivos. Aunque `lsblk -f` tambien puede mostrar UUIDs, `blkid` es la herramienta especificamente diseñada para este proposito. `fdisk -l` muestra la tabla de particiones pero no UUIDs, y `df -h` muestra el uso del espacio en disco.
</details>

---

### Pregunta 6

Un administrador crea una unidad de automontaje en systemd para `/mnt/datos`. ¿Cual debe ser el nombre correcto del archivo de la unidad `.automount`?

a) `datos.automount`
b) `mnt-datos.automount`
c) `mnt_datos.automount`
d) `/mnt/datos.automount`

<details>
<summary>Respuesta</summary>

**b) `mnt-datos.automount`**

En systemd, el nombre de las unidades `.mount` y `.automount` debe corresponder a la ruta del punto de montaje, reemplazando las barras (`/`) por guiones (`-`) y eliminando la barra inicial. Asi, `/mnt/datos` se convierte en `mnt-datos`. La unidad `.automount` siempre requiere una unidad `.mount` correspondiente con el mismo nombre base.
</details>

---

### Pregunta 7

¿Que opcion de montaje en `/etc/fstab` permite que cualquier usuario pueda montar el sistema de archivos, pero solo el usuario que lo monto pueda desmontarlo?

a) `users`
b) `user`
c) `nouser`
d) `owner`

<details>
<summary>Respuesta</summary>

**b) `user`**

La opcion `user` permite que cualquier usuario monte el sistema de archivos, pero solo el usuario que realizo el montaje (o root) puede desmontarlo. Ademas, implica automaticamente `noexec`, `nosuid` y `nodev`. La opcion `users` permite que cualquier usuario pueda montar Y desmontar el sistema de archivos, sin importar quien lo monto. `nouser` (por defecto) solo permite a root montar.
</details>

---

### Pregunta 8

Un sistema de archivos NFS montado remotamente se ha vuelto inaccesible. El comando `umount /mnt/nfs` no responde. ¿Que opcion de umount es la mas segura para resolver la situacion?

a) `umount -f /mnt/nfs`
b) `umount -l /mnt/nfs`
c) `umount -r /mnt/nfs`
d) `umount -a`

<details>
<summary>Respuesta</summary>

**b) `umount -l /mnt/nfs`**

La opcion `-l` (lazy unmount) desvincula inmediatamente el sistema de archivos del arbol de directorios y limpia todas las referencias cuando deja de estar en uso. Es la opcion mas segura para montajes remotos inaccesibles porque no bloquea. La opcion `-f` (force) tambien puede funcionar con NFS, pero es mas agresiva. La opcion `-r` remonta en solo lectura si falla el desmontaje.
</details>

---

### Pregunta 9

En un archivo de mapa de autofs, ¿que significan los caracteres `*` y `&` en la siguiente linea?

```
*    -fstype=nfs,rw    servidor:/home/&
```

a) `*` es un nombre literal y `&` es un comodin
b) `*` coincide con cualquier clave y `&` se sustituye por la clave coincidente
c) `*` indica todos los servidores y `&` indica todos los directorios
d) `*` y `&` son caracteres de escape

<details>
<summary>Respuesta</summary>

**b) `*` coincide con cualquier clave y `&` se sustituye por la clave coincidente**

En los archivos de mapa de autofs, `*` es un comodin que coincide con cualquier nombre de subdirectorio solicitado, y `&` se reemplaza con el nombre que coincidio. En este ejemplo, si un usuario accede a `/home/juan`, autofs montaria `servidor:/home/juan`. Si accede a `/home/maria`, montaria `servidor:/home/maria`. Es una forma elegante de mapear directorios home de forma dinamica.
</details>

---

### Pregunta 10

¿Que comando muestra los sistemas de archivos montados actualmente en formato de arbol jerarquico?

a) `mount`
b) `df -h`
c) `findmnt`
d) `cat /etc/mtab`

<details>
<summary>Respuesta</summary>

**c) `findmnt`**

`findmnt` es la herramienta moderna para visualizar los sistemas de archivos montados. Por defecto, muestra la informacion en formato de arbol jerarquico, lo que permite ver facilmente la relacion entre puntos de montaje. Admite filtros por tipo de sistema de archivos (`-t`), por dispositivo (`-S`) y por punto de montaje. El comando `mount` sin argumentos tambien muestra montajes pero en formato lista plana, menos legible.
</details>

---

### Pregunta 11

Un administrador necesita montar una imagen ISO ubicada en `/opt/imagen.iso` en el directorio `/mnt/iso`. ¿Que comando es correcto?

a) `mount -t iso9660 /opt/imagen.iso /mnt/iso`
b) `mount -o loop /opt/imagen.iso /mnt/iso`
c) `mount --bind /opt/imagen.iso /mnt/iso`
d) `mount -o image /opt/imagen.iso /mnt/iso`

<details>
<summary>Respuesta</summary>

**b) `mount -o loop /opt/imagen.iso /mnt/iso`**

Para montar un archivo de imagen ISO como si fuera un dispositivo, se utiliza la opcion `-o loop` que crea un dispositivo loop asociado al archivo. La opcion a) no funcionaria directamente porque `/opt/imagen.iso` es un archivo, no un dispositivo de bloque, y necesita el mecanismo loop. La opcion `--bind` es para montar directorios en otra ubicacion, no para imagenes.
</details>

---

### Pregunta 12

¿Que opcion de montaje es equivalente a `rw,suid,dev,exec,auto,nouser,async`?

a) `standard`
b) `defaults`
c) `normal`
d) `basic`

<details>
<summary>Respuesta</summary>

**b) `defaults`**

La opcion `defaults` en `/etc/fstab` es una abreviatura que equivale a `rw,suid,dev,exec,auto,nouser,async`. Es la opcion mas utilizada por defecto. Se pueden agregar opciones adicionales separadas por comas, como `defaults,noatime`, que mantiene todas las opciones por defecto pero desactiva la actualizacion del tiempo de acceso.
</details>

---

### Pregunta 13

Un administrador quiere cambiar las opciones de montaje de la particion raiz a solo lectura sin desmontarla. ¿Que comando debe usar?

a) `mount -o ro /`
b) `mount -o remount,ro /`
c) `umount / && mount -o ro /`
d) `mount --readonly /`

<details>
<summary>Respuesta</summary>

**b) `mount -o remount,ro /`**

La opcion `remount` permite cambiar las opciones de un sistema de archivos ya montado sin necesidad de desmontarlo y volverlo a montar. Esto es especialmente util para la particion raiz (`/`) que no puede desmontarse mientras el sistema esta en ejecucion. La combinacion `remount,ro` cambia el modo a solo lectura de forma inmediata.
</details>

---

### Pregunta 14

¿Que opcion de montaje en `/etc/fstab` evita que el sistema reporte un error si el dispositivo no existe durante el arranque?

a) `noauto`
b) `optional`
c) `nofail`
d) `ignore`

<details>
<summary>Respuesta</summary>

**c) `nofail`**

La opcion `nofail` indica al sistema que no debe reportar un error ni detener el arranque si el dispositivo especificado no existe o no puede montarse. Es util para dispositivos que pueden no estar siempre presentes, como unidades USB o recursos de red opcionales. La opcion `noauto` evita que se monte con `mount -a` pero no previene errores.
</details>

---

### Pregunta 15

En un archivo de mapa de autofs (`/etc/auto.nfs`), ¿cual es el formato correcto para definir un montaje NFS de solo lectura?

a) `datos  -ro,fstype=nfs  servidor:/exports/datos`
b) `datos  -fstype=nfs,ro  servidor:/exports/datos`
c) `datos  servidor:/exports/datos  -fstype=nfs,ro`
d) `-fstype=nfs,ro  datos  servidor:/exports/datos`

<details>
<summary>Respuesta</summary>

**b) `datos  -fstype=nfs,ro  servidor:/exports/datos`**

En los archivos de mapa de autofs, cada linea sigue el formato: `<clave> <opciones> <ubicacion>`. La clave es el nombre del subdirectorio, las opciones van precedidas de un guion (`-`) e incluyen el tipo de sistema de archivos y opciones de montaje separadas por comas, y la ubicacion especifica el origen del montaje. El formato correcto coloca las opciones entre la clave y la ubicacion.
</details>

---

### Pregunta 16

¿Que opcion de fstab especifica de systemd permite establecer un tiempo de espera de 120 segundos antes de desmontar automaticamente un sistema de archivos inactivo?

a) `x-systemd.timeout=120`
b) `x-systemd.idle-timeout=120`
c) `x-systemd.automount-timeout=120`
d) `x-systemd.unmount-after=120`

<details>
<summary>Respuesta</summary>

**b) `x-systemd.idle-timeout=120`**

La opcion `x-systemd.idle-timeout=` en `/etc/fstab` define el tiempo de inactividad en segundos antes de que systemd desmonte automaticamente el sistema de archivos. Se usa en combinacion con `x-systemd.automount` para implementar automontaje con desmontaje automatico por inactividad, similar al comportamiento de autofs. El valor se especifica en segundos.
</details>

---

### Pregunta 17

¿Que directorio del sistema contiene enlaces simbolicos a dispositivos de bloque organizados por la etiqueta del sistema de archivos?

a) `/dev/disk/by-id/`
b) `/dev/disk/by-uuid/`
c) `/dev/disk/by-label/`
d) `/dev/disk/by-path/`

<details>
<summary>Respuesta</summary>

**c) `/dev/disk/by-label/`**

El directorio `/dev/disk/by-label/` contiene enlaces simbolicos que apuntan a los dispositivos de bloque usando la etiqueta (LABEL) del sistema de archivos como nombre. Estos enlaces son creados automaticamente por las reglas udev. Los otros directorios organizan los dispositivos por ID de hardware (`by-id`), UUID del sistema de archivos (`by-uuid`) y ruta del bus (`by-path`).
</details>

---

### Pregunta 18

Un administrador desea desmontar todos los sistemas de archivos NFS montados en el sistema. ¿Que comando es correcto?

a) `umount -a`
b) `umount -a -t nfs`
c) `umount --all --nfs`
d) `umount -t nfs`

<details>
<summary>Respuesta</summary>

**b) `umount -a -t nfs`**

El comando `umount -a -t nfs` desmonta todos los sistemas de archivos del tipo NFS. La opcion `-a` indica que se operen todos los montajes, y `-t nfs` filtra por tipo de sistema de archivos. Sin el filtro `-t`, `umount -a` intentaria desmontar todos los sistemas de archivos, lo cual no es deseable. La opcion d) no es valida sin especificar un punto de montaje o `-a`.
</details>

---

### Pregunta 19

¿Que comando de `lsblk` muestra informacion de los sistemas de archivos incluyendo UUID, tipo y punto de montaje?

a) `lsblk -a`
b) `lsblk -d`
c) `lsblk -f`
d) `lsblk -p`

<details>
<summary>Respuesta</summary>

**c) `lsblk -f`**

La opcion `-f` (filesystem) de `lsblk` muestra informacion relacionada con los sistemas de archivos de cada dispositivo de bloque, incluyendo el tipo de sistema de archivos (FSTYPE), la etiqueta (LABEL), el UUID y el punto de montaje (MOUNTPOINT). La opcion `-d` solo muestra discos sin particiones, `-a` incluye dispositivos vacios, y `-p` muestra las rutas completas de los dispositivos.
</details>

---

### Pregunta 20

En una unidad `.mount` de systemd, ¿en que seccion se define el punto de montaje con la directiva `Where=`?

a) `[Unit]`
b) `[Mount]`
c) `[Install]`
d) `[Service]`

<details>
<summary>Respuesta</summary>

**b) `[Mount]`**

En las unidades `.mount` de systemd, la seccion `[Mount]` contiene las directivas especificas del montaje: `What=` (dispositivo o recurso), `Where=` (punto de montaje), `Type=` (tipo de sistema de archivos) y `Options=` (opciones de montaje). La seccion `[Unit]` contiene metadatos y dependencias, y `[Install]` define cuando se habilita la unidad.
</details>

---

### Pregunta 21

¿Que comando se utiliza para montar todos los sistemas de archivos definidos en `/etc/fstab` que no esten montados actualmente?

<input type="text" class="fill-blank" data-answer="mount -a" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mount -a**

El comando `mount -a` lee el archivo `/etc/fstab` y monta todos los sistemas de archivos que tengan la opcion `auto` (incluida en `defaults`) y que no esten montados actualmente. Es util despues de editar `/etc/fstab` para verificar que las nuevas entradas son correctas. Los sistemas con la opcion `noauto` no se montan.
</details>

---

### Pregunta 22

¿Que comando permite obtener el UUID de la particion `/dev/sda1`?

<input type="text" class="fill-blank" data-answer="blkid /dev/sda1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**blkid /dev/sda1**

El comando `blkid /dev/sda1` muestra los atributos del dispositivo de bloque especificado, incluyendo el UUID, la etiqueta (LABEL), el tipo de sistema de archivos (TYPE) y otros metadatos. El UUID es la forma recomendada de identificar dispositivos en `/etc/fstab` porque es unico y persistente incluso si cambia la asignacion de nombres de dispositivo.
</details>

---

### Pregunta 23

¿Que comando realiza un desmontaje perezoso (lazy) del sistema de archivos montado en `/mnt/datos`?

<input type="text" class="fill-blank" data-answer="umount -l /mnt/datos" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**umount -l /mnt/datos**

El comando `umount -l` (lazy unmount) desvincula inmediatamente el sistema de archivos del arbol de directorios y limpia todas las referencias cuando deja de estar ocupado. Es especialmente util cuando un sistema de archivos esta en uso y no puede desmontarse de forma convencional, como ocurre frecuentemente con montajes NFS que se han vuelto inaccesibles.
</details>

---

### Pregunta 24

¿Que comando se utiliza para montar un directorio existente `/var/www` en una segunda ubicacion `/home/user/web` mediante un montaje bind?

<input type="text" class="fill-blank" data-answer="mount --bind /var/www /home/user/web" data-alt="mount -o bind /var/www /home/user/web" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mount --bind /var/www /home/user/web**

El montaje bind permite hacer accesible el contenido de un directorio desde una segunda ubicacion. Se puede usar `mount --bind` o su equivalente `mount -o bind`. A diferencia de un enlace simbolico, el bind mount funciona a nivel del VFS del kernel, lo que lo hace mas robusto en ciertos escenarios como entornos chroot. En `/etc/fstab`, se registra con tipo `none` y opcion `bind`.
</details>

---

### Pregunta 25

¿Que comando busca todos los sistemas de archivos montados y los muestra filtrando solo los de tipo ext4?

<input type="text" class="fill-blank" data-answer="findmnt -t ext4" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**findmnt -t ext4**

El comando `findmnt -t ext4` filtra y muestra unicamente los sistemas de archivos montados de tipo ext4. `findmnt` es la herramienta moderna que reemplaza el uso de `mount` sin argumentos para consultar montajes. Admite filtros por tipo (`-t`), por dispositivo origen (`-S`), por punto de montaje, y puede mostrar columnas personalizadas con `-o`.
</details>
