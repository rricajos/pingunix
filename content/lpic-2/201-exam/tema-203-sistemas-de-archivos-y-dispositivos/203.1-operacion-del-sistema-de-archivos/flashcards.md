---
title: "203.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "203.1"
---

# Flashcards: 203.1 - Operacion Del Sistema De Archivos

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-001">
<div class="flashcard-front">

**P:** En el archivo `/etc/fstab`, ¿que valor debe tener el campo "pass" (sexto campo) para la particion raiz (`/`)?

</div>
<div class="flashcard-back">

**R:** b) 1. El campo "pass" determina el orden en que `fsck` verifica los sistemas de archivos durante el arranque. El valor `1` esta reservado exclusivamente para la particion raiz, que se verifica primero. El valor `2` se usa para el resto de particiones (verificadas despues de la raiz). El valor `0` desactiva la verificacion para esa particion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes opciones de montaje en `/etc/fstab` indica a systemd que el dispositivo requiere conexion de red para estar disponible?

</div>
<div class="flashcard-back">

**R:** c) `_netdev`. La opcion `_netdev` indica que el dispositivo requiere que la red este disponible antes de intentar el montaje. Es esencial para montajes NFS, CIFS u otros sistemas de archivos remotos. Sin esta opcion, el sistema podria intentar montar el recurso antes de que la red este configurada, causando errores o retrasos en el arranque. La opcion d) tambien funcionaria como alternativa con sintaxis de systemd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-003">
<div class="flashcard-front">

**P:** Un administrador quiere que el contenido de `/var/www` sea accesible tambien desde `/home/webdev/sitio`. ¿Que tipo de montaje debe utilizar?

</div>
<div class="flashcard-back">

**R:** b) `mount --bind /var/www /home/webdev/sitio`. Un montaje bind permite montar un directorio en otra ubicacion del arbol de directorios, haciendo que el mismo contenido sea accesible desde ambas rutas. A diferencia de un enlace simbolico (opcion d), un bind mount funciona a nivel del sistema de archivos virtual y es mas robusto en ciertos escenarios (como chroot). La opcion loop es para montar archivos de imagen como dispositivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-004">
<div class="flashcard-front">

**P:** En la configuracion de autofs, ¿que archivo define los puntos de montaje y referencia los archivos de mapa correspondientes?

</div>
<div class="flashcard-back">

**R:** c) `/etc/auto.master`. El archivo `/etc/auto.master` es el archivo maestro de autofs. Define los puntos de montaje base y referencia los archivos de mapa que contienen las definiciones individuales de cada montaje. Por ejemplo, una linea como `/mnt/nfs /etc/auto.nfs --timeout=60` indica que los montajes bajo `/mnt/nfs` estan definidos en el archivo `/etc/auto.nfs` con un timeout de 60 segundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que herramienta es la mas adecuada para obtener el UUID de una particion que se necesita para configurar en `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** c) `blkid`. `blkid` es la herramienta principal para obtener los atributos de dispositivos de bloque, incluyendo UUID, etiqueta (LABEL) y tipo de sistema de archivos. Aunque `lsblk -f` tambien puede mostrar UUIDs, `blkid` es la herramienta especificamente diseñada para este proposito. `fdisk -l` muestra la tabla de particiones pero no UUIDs, y `df -h` muestra el uso del espacio en disco.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-006">
<div class="flashcard-front">

**P:** Un administrador crea una unidad de automontaje en systemd para `/mnt/datos`. ¿Cual debe ser el nombre correcto del archivo de la unidad `.automount`?

</div>
<div class="flashcard-back">

**R:** b) `mnt-datos.automount`. En systemd, el nombre de las unidades `.mount` y `.automount` debe corresponder a la ruta del punto de montaje, reemplazando las barras (`/`) por guiones (`-`) y eliminando la barra inicial. Asi, `/mnt/datos` se convierte en `mnt-datos`. La unidad `.automount` siempre requiere una unidad `.mount` correspondiente con el mismo nombre base.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que opcion de montaje en `/etc/fstab` permite que cualquier usuario pueda montar el sistema de archivos, pero solo el usuario que lo monto pueda desmontarlo?

</div>
<div class="flashcard-back">

**R:** b) `user`. La opcion `user` permite que cualquier usuario monte el sistema de archivos, pero solo el usuario que realizo el montaje (o root) puede desmontarlo. Ademas, implica automaticamente `noexec`, `nosuid` y `nodev`. La opcion `users` permite que cualquier usuario pueda montar Y desmontar el sistema de archivos, sin importar quien lo monto. `nouser` (por defecto) solo permite a root montar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-008">
<div class="flashcard-front">

**P:** Un sistema de archivos NFS montado remotamente se ha vuelto inaccesible. El comando `umount /mnt/nfs` no responde. ¿Que opcion de umount es la mas segura para resolver la situacion?

</div>
<div class="flashcard-back">

**R:** b) `umount -l /mnt/nfs`. La opcion `-l` (lazy unmount) desvincula inmediatamente el sistema de archivos del arbol de directorios y limpia todas las referencias cuando deja de estar en uso. Es la opcion mas segura para montajes remotos inaccesibles porque no bloquea. La opcion `-f` (force) tambien puede funcionar con NFS, pero es mas agresiva. La opcion `-r` remonta en solo lectura si falla el desmontaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-009">
<div class="flashcard-front">

**P:** En un archivo de mapa de autofs, ¿que significan los caracteres `*` y `&` en la siguiente linea?

</div>
<div class="flashcard-back">

**R:** b) `*` coincide con cualquier clave y `&` se sustituye por la clave coincidente. En los archivos de mapa de autofs, `*` es un comodin que coincide con cualquier nombre de subdirectorio solicitado, y `&` se reemplaza con el nombre que coincidio. En este ejemplo, si un usuario accede a `/home/juan`, autofs montaria `servidor:/home/juan`. Si accede a `/home/maria`, montaria `servidor:/home/maria`. Es una forma elegante de mapear directorios home de forma dinamica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que comando muestra los sistemas de archivos montados actualmente en formato de arbol jerarquico?

</div>
<div class="flashcard-back">

**R:** c) `findmnt`. `findmnt` es la herramienta moderna para visualizar los sistemas de archivos montados. Por defecto, muestra la informacion en formato de arbol jerarquico, lo que permite ver facilmente la relacion entre puntos de montaje. Admite filtros por tipo de sistema de archivos (`-t`), por dispositivo (`-S`) y por punto de montaje. El comando `mount` sin argumentos tambien muestra montajes pero en formato lista plana, menos legible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-011">
<div class="flashcard-front">

**P:** Un administrador necesita montar una imagen ISO ubicada en `/opt/imagen.iso` en el directorio `/mnt/iso`. ¿Que comando es correcto?

</div>
<div class="flashcard-back">

**R:** b) `mount -o loop /opt/imagen.iso /mnt/iso`. Para montar un archivo de imagen ISO como si fuera un dispositivo, se utiliza la opcion `-o loop` que crea un dispositivo loop asociado al archivo. La opcion a) no funcionaria directamente porque `/opt/imagen.iso` es un archivo, no un dispositivo de bloque, y necesita el mecanismo loop. La opcion `--bind` es para montar directorios en otra ubicacion, no para imagenes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que opcion de montaje es equivalente a `rw,suid,dev,exec,auto,nouser,async`?

</div>
<div class="flashcard-back">

**R:** b) `defaults`. La opcion `defaults` en `/etc/fstab` es una abreviatura que equivale a `rw,suid,dev,exec,auto,nouser,async`. Es la opcion mas utilizada por defecto. Se pueden agregar opciones adicionales separadas por comas, como `defaults,noatime`, que mantiene todas las opciones por defecto pero desactiva la actualizacion del tiempo de acceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-013">
<div class="flashcard-front">

**P:** Un administrador quiere cambiar las opciones de montaje de la particion raiz a solo lectura sin desmontarla. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `mount -o remount,ro /`. La opcion `remount` permite cambiar las opciones de un sistema de archivos ya montado sin necesidad de desmontarlo y volverlo a montar. Esto es especialmente util para la particion raiz (`/`) que no puede desmontarse mientras el sistema esta en ejecucion. La combinacion `remount,ro` cambia el modo a solo lectura de forma inmediata.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que opcion de montaje en `/etc/fstab` evita que el sistema reporte un error si el dispositivo no existe durante el arranque?

</div>
<div class="flashcard-back">

**R:** c) `nofail`. La opcion `nofail` indica al sistema que no debe reportar un error ni detener el arranque si el dispositivo especificado no existe o no puede montarse. Es util para dispositivos que pueden no estar siempre presentes, como unidades USB o recursos de red opcionales. La opcion `noauto` evita que se monte con `mount -a` pero no previene errores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-015">
<div class="flashcard-front">

**P:** En un archivo de mapa de autofs (`/etc/auto.nfs`), ¿cual es el formato correcto para definir un montaje NFS de solo lectura?

</div>
<div class="flashcard-back">

**R:** b) `datos  -fstype=nfs,ro  servidor:/exports/datos`. En los archivos de mapa de autofs, cada linea sigue el formato: `<clave> <opciones> <ubicacion>`. La clave es el nombre del subdirectorio, las opciones van precedidas de un guion (`-`) e incluyen el tipo de sistema de archivos y opciones de montaje separadas por comas, y la ubicacion especifica el origen del montaje. El formato correcto coloca las opciones entre la clave y la ubicacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que opcion de fstab especifica de systemd permite establecer un tiempo de espera de 120 segundos antes de desmontar automaticamente un sistema de archivos inactivo?

</div>
<div class="flashcard-back">

**R:** b) `x-systemd.idle-timeout=120`. La opcion `x-systemd.idle-timeout=` en `/etc/fstab` define el tiempo de inactividad en segundos antes de que systemd desmonte automaticamente el sistema de archivos. Se usa en combinacion con `x-systemd.automount` para implementar automontaje con desmontaje automatico por inactividad, similar al comportamiento de autofs. El valor se especifica en segundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que directorio del sistema contiene enlaces simbolicos a dispositivos de bloque organizados por la etiqueta del sistema de archivos?

</div>
<div class="flashcard-back">

**R:** c) `/dev/disk/by-label/`. El directorio `/dev/disk/by-label/` contiene enlaces simbolicos que apuntan a los dispositivos de bloque usando la etiqueta (LABEL) del sistema de archivos como nombre. Estos enlaces son creados automaticamente por las reglas udev. Los otros directorios organizan los dispositivos por ID de hardware (`by-id`), UUID del sistema de archivos (`by-uuid`) y ruta del bus (`by-path`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-018">
<div class="flashcard-front">

**P:** Un administrador desea desmontar todos los sistemas de archivos NFS montados en el sistema. ¿Que comando es correcto?

</div>
<div class="flashcard-back">

**R:** b) `umount -a -t nfs`. El comando `umount -a -t nfs` desmonta todos los sistemas de archivos del tipo NFS. La opcion `-a` indica que se operen todos los montajes, y `-t nfs` filtra por tipo de sistema de archivos. Sin el filtro `-t`, `umount -a` intentaria desmontar todos los sistemas de archivos, lo cual no es deseable. La opcion d) no es valida sin especificar un punto de montaje o `-a`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando de `lsblk` muestra informacion de los sistemas de archivos incluyendo UUID, tipo y punto de montaje?

</div>
<div class="flashcard-back">

**R:** c) `lsblk -f`. La opcion `-f` (filesystem) de `lsblk` muestra informacion relacionada con los sistemas de archivos de cada dispositivo de bloque, incluyendo el tipo de sistema de archivos (FSTYPE), la etiqueta (LABEL), el UUID y el punto de montaje (MOUNTPOINT). La opcion `-d` solo muestra discos sin particiones, `-a` incluye dispositivos vacios, y `-p` muestra las rutas completas de los dispositivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-020">
<div class="flashcard-front">

**P:** En una unidad `.mount` de systemd, ¿en que seccion se define el punto de montaje con la directiva `Where=`?

</div>
<div class="flashcard-back">

**R:** b) `[Mount]`. En las unidades `.mount` de systemd, la seccion `[Mount]` contiene las directivas especificas del montaje: `What=` (dispositivo o recurso), `Where=` (punto de montaje), `Type=` (tipo de sistema de archivos) y `Options=` (opciones de montaje). La seccion `[Unit]` contiene metadatos y dependencias, y `[Install]` define cuando se habilita la unidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para montar todos los sistemas de archivos definidos en `/etc/fstab` que no esten montados actualmente?

</div>
<div class="flashcard-back">

**R:** mount -a. El comando `mount -a` lee el archivo `/etc/fstab` y monta todos los sistemas de archivos que tengan la opcion `auto` (incluida en `defaults`) y que no esten montados actualmente. Es util despues de editar `/etc/fstab` para verificar que las nuevas entradas son correctas. Los sistemas con la opcion `noauto` no se montan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando permite obtener el UUID de la particion `/dev/sda1`?

</div>
<div class="flashcard-back">

**R:** blkid /dev/sda1. El comando `blkid /dev/sda1` muestra los atributos del dispositivo de bloque especificado, incluyendo el UUID, la etiqueta (LABEL), el tipo de sistema de archivos (TYPE) y otros metadatos. El UUID es la forma recomendada de identificar dispositivos en `/etc/fstab` porque es unico y persistente incluso si cambia la asignacion de nombres de dispositivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando realiza un desmontaje perezoso (lazy) del sistema de archivos montado en `/mnt/datos`?

</div>
<div class="flashcard-back">

**R:** umount -l /mnt/datos. El comando `umount -l` (lazy unmount) desvincula inmediatamente el sistema de archivos del arbol de directorios y limpia todas las referencias cuando deja de estar ocupado. Es especialmente util cuando un sistema de archivos esta en uso y no puede desmontarse de forma convencional, como ocurre frecuentemente con montajes NFS que se han vuelto inaccesibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para montar un directorio existente `/var/www` en una segunda ubicacion `/home/user/web` mediante un montaje bind?

</div>
<div class="flashcard-back">

**R:** mount --bind /var/www /home/user/web. El montaje bind permite hacer accesible el contenido de un directorio desde una segunda ubicacion. Se puede usar `mount --bind` o su equivalente `mount -o bind`. A diferencia de un enlace simbolico, el bind mount funciona a nivel del VFS del kernel, lo que lo hace mas robusto en ciertos escenarios como entornos chroot. En `/etc/fstab`, se registra con tipo `none` y opcion `bind`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando busca todos los sistemas de archivos montados y los muestra filtrando solo los de tipo ext4?

</div>
<div class="flashcard-back">

**R:** findmnt -t ext4. El comando `findmnt -t ext4` filtra y muestra unicamente los sistemas de archivos montados de tipo ext4. `findmnt` es la herramienta moderna que reemplaza el uso de `mount` sin argumentos para consultar montajes. Admite filtros por tipo (`-t`), por dispositivo origen (`-S`), por punto de montaje, y puede mostrar columnas personalizadas con `-o`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El campo **pass** es critico: `0` significa que no se ejecuta fsck, `1` se reser...

</div>
<div class="flashcard-back">

**R:** El campo **pass** es critico: `0` significa que no se ejecuta fsck, `1` se reserva para la particion raiz (se verifica primero), y `2` para el resto de particiones (se verifican despues de la raiz, en paralelo si es posible).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Usar UUID es la forma recomendada porque es unica por sistema de archivos y no c...

</div>
<div class="flashcard-back">

**R:** Usar UUID es la forma recomendada porque es unica por sistema de archivos y no cambia si se reordena el hardware. Los nombres de dispositivo como `/dev/sda1` pueden cambiar si se agregan o remueven discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `umount -l` (lazy) es util cuando un sistema de archivos esta ocupado. Desvincul...

</div>
<div class="flashcard-back">

**R:** `umount -l` (lazy) es util cuando un sistema de archivos esta ocupado. Desvincula inmediatamente el punto de montaje pero retrasa la limpieza real hasta que no haya procesos usandolo. `umount -f` fuerza el desmontaje pero puede causar perdida de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: En autofs, el archivo maestro (`/etc/auto.master`) define los puntos de montaje ...

</div>
<div class="flashcard-back">

**R:** En autofs, el archivo maestro (`/etc/auto.master`) define los puntos de montaje y referencia los archivos de mapa. Los archivos de mapa definen las claves individuales (subdirectorios) con sus opciones y ubicaciones de origen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: En systemd, una unidad `.automount` siempre necesita una unidad `.mount` corresp...

</div>
<div class="flashcard-back">

**R:** En systemd, una unidad `.automount` siempre necesita una unidad `.mount` correspondiente. El nombre debe coincidir y corresponder al punto de montaje (ejemplo: `/mnt/datos` se traduce a `mnt-datos.mount` y `mnt-datos.automount`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `blkid` es la herramienta principal para obtener UUIDs y etiquetas de particione...

</div>
<div class="flashcard-back">

**R:** `blkid` es la herramienta principal para obtener UUIDs y etiquetas de particiones. `findmnt` es la forma moderna de ver montajes (reemplaza a `mount` sin argumentos). `lsblk` proporciona una vista jerarquica de discos y particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `defaults`?

</div>
<div class="flashcard-back">

**R:** Equivale a rw,suid,dev,exec,auto,nouser,async

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `user`?

</div>
<div class="flashcard-back">

**R:** Cualquier usuario puede montar (implica noexec,nosuid,nodev)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `users`?

</div>
<div class="flashcard-back">

**R:** Cualquier usuario puede montar y desmontar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `noatime`?

</div>
<div class="flashcard-back">

**R:** No actualizar tiempo de acceso (mejora rendimiento)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `relatime`?

</div>
<div class="flashcard-back">

**R:** Actualizar atime solo si es anterior a mtime

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.1">
</div>

<div class="flashcard" data-id="203.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

