---
title: "203.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "203.3"
---

# Flashcards: 203.3 - Opciones De Sistemas De Archivos

> 22 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita crear una instantanea de solo lectura del subvolumen `/mnt/btrfs/datos`. ¿Que comando es correcto?

</div>
<div class="flashcard-back">

**R:** b) `btrfs subvolume snapshot -r /mnt/btrfs/datos /mnt/btrfs/snap`. El comando correcto para crear una instantanea en Btrfs es `btrfs subvolume snapshot`. La opcion `-r` hace que la instantanea sea de solo lectura, lo cual es necesario si se planea usar `btrfs send` para transferirla. Sin `-r`, la instantanea seria de lectura/escritura. Las instantaneas en Btrfs son casi instantaneas gracias al mecanismo copy-on-write.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-002">
<div class="flashcard-front">

**P:** ¿Cual es la principal diferencia entre LUKS/dm-crypt y eCryptfs en cuanto al nivel de cifrado?

</div>
<div class="flashcard-back">

**R:** b) LUKS cifra a nivel de bloque (particion); eCryptfs cifra a nivel de archivo. LUKS/dm-crypt opera a nivel de bloque, cifrando toda la particion de forma transparente. El sistema de archivos se crea sobre el dispositivo descifrado en `/dev/mapper/`. eCryptfs, en cambio, opera a nivel de archivo dentro del kernel, cifrando cada archivo individualmente sobre un sistema de archivos existente. Esta diferencia tiene implicaciones practicas: LUKS ofrece mayor seguridad (cifra metadatos completos) pero eCryptfs permite backups incrementales mas faciles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-003">
<div class="flashcard-front">

**P:** En ZFS, ¿que comando se usa para crear un pool de almacenamiento con redundancia equivalente a RAID5 usando tres discos?

</div>
<div class="flashcard-back">

**R:** b) `zpool create mipool raidz /dev/sdb /dev/sdc /dev/sdd`. En ZFS, `raidz` (o `raidz1`) es el equivalente a RAID5, proporcionando tolerancia a la falla de un disco mediante paridad distribuida. Se usa `zpool create` (no `zfs create`, que es para datasets). La opcion `mirror` crearia un espejo (RAID1), y `raidz2` seria el equivalente a RAID6 (tolerancia a dos fallos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-004">
<div class="flashcard-front">

**P:** ¿Que algoritmo de compresion de Btrfs ofrece el mejor equilibrio entre velocidad y ratio de compresion?

</div>
<div class="flashcard-back">

**R:** c) `zstd`. Zstandard (`zstd`) es el algoritmo de compresion recomendado para Btrfs en la mayoria de los casos, ya que ofrece el mejor equilibrio entre velocidad de compresion/descompresion y ratio de compresion. `lzo` es el mas rapido pero con menor ratio de compresion. `zlib` ofrece buen ratio pero es significativamente mas lento. `gzip` no es un algoritmo soportado directamente por Btrfs (es un formato de archivo, no un algoritmo de compresion de FS).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-005">
<div class="flashcard-front">

**P:** Un administrador quiere montar un tmpfs de 4GB en `/tmp`. ¿Cual es la linea correcta para `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** b) `tmpfs  /tmp  tmpfs  defaults,size=4G  0  0`. La sintaxis correcta usa `tmpfs` como dispositivo (primer campo), `/tmp` como punto de montaje, `tmpfs` como tipo de sistema de archivos, y `size=4G` para establecer el tamano maximo. El parametro `size=` define el limite maximo, no una asignacion fija; tmpfs solo consume la memoria que realmente se usa. `ramfs` no tiene limite de tamano y no usa swap, lo que lo hace peligroso. La opcion `maxsize` no es un parametro valido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-006">
<div class="flashcard-front">

**P:** ¿Que archivo de configuracion define los volumenes LUKS que deben abrirse automaticamente durante el arranque del sistema?

</div>
<div class="flashcard-back">

**R:** c) `/etc/crypttab`. El archivo `/etc/crypttab` define los volumenes cifrados LUKS que se desbloquean durante el arranque, antes de que se monten los sistemas de archivos de `/etc/fstab`. Cada linea contiene el nombre del mapeo, el dispositivo, el archivo de clave (o `none` para solicitar contraseña interactivamente) y opciones. Los sistemas de archivos dentro de los volumenes descifrados se montan luego a traves de fstab usando `/dev/mapper/<nombre>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-007">
<div class="flashcard-front">

**P:** Un administrador quiere montar un subvolumen Btrfs llamado "home" de la particion `/dev/sda2` en `/home`. ¿Cual es la linea correcta para `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** b) `UUID=xxxx  /home  btrfs  defaults,subvol=home  0  0`. Para montar un subvolumen especifico de Btrfs, se usa la opcion `subvol=nombre` (o alternativamente `subvolid=ID`). Sin esta opcion, se montaria el subvolumen por defecto (normalmente el subvolumen raiz, ID 5). La opcion `subvolume=` no es valida; el parametro correcto es `subvol=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-008">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre tmpfs es correcta?

</div>
<div class="flashcard-back">

**R:** c) tmpfs crece dinamicamente y puede usar swap si la RAM se llena. tmpfs es un sistema de archivos que almacena datos en memoria virtual, lo que incluye tanto RAM como swap. No asigna un bloque fijo; solo consume la memoria que realmente necesita y la libera cuando los archivos se eliminan. Si la RAM disponible se agota, los datos de tmpfs pueden moverse al swap. El parametro `size=` define un limite maximo, no una preasignacion. Los datos se pierden al reiniciar. `ramfs`, a diferencia de tmpfs, no usa swap y no tiene limite de tamano.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando de ZFS se utiliza para verificar la integridad de todos los datos en un pool, similar a `btrfs scrub` en Btrfs?

</div>
<div class="flashcard-back">

**R:** c) `zpool scrub mipool`. `zpool scrub` lee todos los datos y metadatos del pool, verifica los checksums y repara automaticamente los datos corruptos si hay redundancia disponible (mirror o raidz). Es equivalente a `btrfs scrub start` en Btrfs. El scrub se ejecuta a nivel de pool (con `zpool`), no a nivel de dataset (con `zfs`), ya que la verificacion abarca todo el almacenamiento fisico del pool.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita abrir un volumen LUKS existente en `/dev/sda3` con el nombre "datos_seguros" para poder montar el sistema de archivos que contiene. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `cryptsetup luksOpen /dev/sda3 datos_seguros`. `cryptsetup luksOpen` (o su equivalente moderno `cryptsetup open --type luks`) desbloquea un volumen LUKS y crea un dispositivo descifrado en `/dev/mapper/datos_seguros`. Despues de abrir el volumen, se puede montar con `mount /dev/mapper/datos_seguros /mnt/punto`. La opcion `create` es para dm-crypt plano (sin LUKS). No existen los subcomandos `mount` ni `luksMount` en cryptsetup.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: Los subvolumenes de Btrfs son similares a particiones logicas pero mas flexibles...

</div>
<div class="flashcard-back">

**R:** Los subvolumenes de Btrfs son similares a particiones logicas pero mas flexibles. No tienen un tamano fijo y comparten el espacio del sistema de archivos. Se pueden montar de forma independiente usando `subvol=` o `subvolid=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: ZFS combina la gestion de volumenes y el sistema de archivos en una sola capa. L...

</div>
<div class="flashcard-back">

**R:** ZFS combina la gestion de volumenes y el sistema de archivos en una sola capa. Los zpools son los pools de almacenamiento (equivalentes a grupos de volumenes) y los datasets son los sistemas de archivos individuales. Las instantaneas usan la sintaxis `dataset@nombre`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: tmpfs no tiene un tamano fijo asignado; crece y se reduce dinamicamente segun el...

</div>
<div class="flashcard-back">

**R:** tmpfs no tiene un tamano fijo asignado; crece y se reduce dinamicamente segun el uso. El parametro `size=` define el tamano **maximo**, no una asignacion fija de RAM. Por defecto, si no se especifica tamano, usa la mitad de la RAM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: LUKS cifra una particion completa a nivel de bloque. El archivo `/etc/crypttab` ...

</div>
<div class="flashcard-back">

**R:** LUKS cifra una particion completa a nivel de bloque. El archivo `/etc/crypttab` define los volumenes cifrados que se abren al arrancar. `none` como clave significa que se pedira la contraseña interactivamente. Se pueden usar archivos de clave para montaje automatico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: LUKS/dm-crypt cifra a nivel de bloque (particion completa), eCryptfs cifra a niv...

</div>
<div class="flashcard-back">

**R:** LUKS/dm-crypt cifra a nivel de bloque (particion completa), eCryptfs cifra a nivel de archivo dentro del kernel, y EncFS cifra a nivel de archivo en espacio de usuario (FUSE). LUKS es mas seguro pero menos flexible para backups; eCryptfs/EncFS permiten backups incrementales de archivos individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `lzo`?

</div>
<div class="flashcard-back">

**R:** Muy rapida

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `zlib`?

</div>
<div class="flashcard-back">

**R:** Lenta

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `zstd`?

</div>
<div class="flashcard-back">

**R:** Rapida

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `size=2G`?

</div>
<div class="flashcard-back">

**R:** Tamano maximo (puede usar sufijos K, M, G)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `nr_inodes=1000000`?

</div>
<div class="flashcard-back">

**R:** Numero maximo de inodos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-021">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Los sistemas de archivos modernos de Linux ofrecen funcionalidades avanzadas que van mucho mas alla del simple almacenamiento de archivos. Este subtema cubre las caracteristicas avanzadas de Btrfs y ZF

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-022">
<div class="flashcard-front">

**P:** Que es/son Comparativa ext4 vs XFS?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | ext4 | XFS |

</div>
</div>

---

