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

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Un administrador necesita verificar la integridad de los datos en un sistema de archivos Btrfs montado en `/mnt/btrfs`. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** c) `btrfs scrub start /mnt/btrfs`. `btrfs scrub start` verifica la integridad de todos los datos y metadatos leyendo y comprobando los checksums mientras el sistema de archivos esta montado. Es similar a `zpool scrub` en ZFS. `btrfs check` se ejecuta sobre un sistema de archivos desmontado. Se puede consultar el progreso con `btrfs scrub status /mnt/btrfs`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-012">
<div class="flashcard-front">

**P:** ¿Cuantos slots de clave soporta LUKS para un volumen cifrado?

</div>
<div class="flashcard-back">

**R:** c) 8. LUKS soporta hasta 8 slots de clave (numerados del 0 al 7), lo que permite tener hasta 8 contraseñas o archivos de clave diferentes para desbloquear el mismo volumen. Se pueden gestionar con `cryptsetup luksAddKey` (agregar), `cryptsetup luksRemoveKey` (eliminar) y `cryptsetup luksKillSlot` (eliminar por numero de slot). `cryptsetup luksDump` muestra el estado de cada slot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-013">
<div class="flashcard-front">

**P:** ¿Que comando de Btrfs permite reducir el tamano del sistema de archivos en 5 GB?

</div>
<div class="flashcard-back">

**R:** b) `btrfs filesystem resize -5G /mnt/btrfs`. A diferencia de XFS, Btrfs soporta tanto la expansion como la reduccion del sistema de archivos. El comando `btrfs filesystem resize` acepta valores con prefijo `+` para expandir y `-` para reducir. Tambien se puede usar `max` para expandir al tamano maximo disponible. Esta flexibilidad es una de las ventajas de Btrfs sobre XFS, que solo permite la expansion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-014">
<div class="flashcard-front">

**P:** ¿Que sistema de archivos utiliza el concepto de "pools de almacenamiento" (zpools) como capa de gestion de volumenes integrada?

</div>
<div class="flashcard-back">

**R:** c) ZFS. ZFS es unico en que combina la gestion de volumenes y el sistema de archivos en una sola capa. Los zpools son pools de almacenamiento que agrupan discos fisicos y sobre los cuales se crean datasets (sistemas de archivos). Esto elimina la necesidad de un gestor de volumenes separado como LVM. Btrfs tiene funcionalidad similar pero no usa el concepto de "zpool".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-015">
<div class="flashcard-front">

**P:** Un administrador necesita enviar una instantanea Btrfs de solo lectura a otro sistema de archivos Btrfs para realizar un backup. ¿Que combinacion de comandos es correcta?

</div>
<div class="flashcard-back">

**R:** b) `btrfs send /mnt/snap | btrfs receive /mnt/backup/`. La funcionalidad `btrfs send` y `btrfs receive` permite transferir instantaneas entre sistemas de archivos Btrfs, incluyendo a traves de la red usando SSH. La instantanea de origen debe ser de solo lectura (creada con `-r`). Tambien soporta envios incrementales con `-p` para enviar solo las diferencias respecto a una instantanea anterior, optimizando los backups.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que propiedad de ZFS se utiliza para establecer una cuota de 50 GB en un dataset?

</div>
<div class="flashcard-back">

**R:** b) `zfs set quota=50G mipiscina/datos`. La propiedad `quota` de ZFS establece el tamano maximo que puede ocupar un dataset y sus descendientes. Se configura con `zfs set quota=50G`. ZFS tambien ofrece `reservation` para garantizar un espacio minimo disponible. A diferencia de las cuotas de disco tradicionales (por usuario/grupo), la cuota de ZFS se aplica al dataset completo como unidad logica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que opcion de montaje de Btrfs activa la compresion transparente con el algoritmo zstd?

</div>
<div class="flashcard-back">

**R:** b) `mount -o compress=zstd /dev/sdb1 /mnt`. La opcion `compress=zstd` habilita la compresion transparente con el algoritmo Zstandard en un sistema de archivos Btrfs. zstd ofrece el mejor equilibrio entre velocidad y ratio de compresion. Tambien se puede especificar un nivel con `compress=zstd:3`. La opcion `compress-force=zstd` fuerza la compresion incluso para datos que Btrfs considera no comprimibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que nivel de RAID-Z en ZFS es equivalente a RAID 6, tolerando la perdida de dos discos?

</div>
<div class="flashcard-back">

**R:** b) raidz2. En ZFS, `raidz2` es el equivalente a RAID 6 y utiliza doble paridad distribuida, permitiendo que el pool sobreviva a la perdida simultanea de hasta 2 discos. `raidz` (o `raidz1`) equivale a RAID 5 (tolerancia de 1 disco), y `raidz3` ofrece triple paridad (tolerancia de 3 discos). `mirror` es el equivalente a RAID 1 (espejo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-019">
<div class="flashcard-front">

**P:** En el archivo `/etc/crypttab`, ¿que valor en el campo de clave indica que se debe solicitar la contraseña interactivamente al usuario durante el arranque?

</div>
<div class="flashcard-back">

**R:** c) `none`. En `/etc/crypttab`, el valor `none` en el campo de clave indica que no se proporciona un archivo de clave y que la contraseña debe solicitarse interactivamente al usuario durante el proceso de arranque. Si se especifica una ruta a un archivo (como `/etc/keys/keyfile`), el volumen se desbloquea automaticamente con ese archivo, sin interaccion del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que caracteristica distingue a EncFS de LUKS/dm-crypt y eCryptfs en cuanto a su implementacion?

</div>
<div class="flashcard-back">

**R:** b) EncFS funciona en espacio de usuario mediante FUSE. EncFS opera completamente en espacio de usuario a traves de FUSE (Filesystem in Userspace), a diferencia de LUKS/dm-crypt que funciona a nivel de bloque en el kernel, y eCryptfs que funciona a nivel de archivo tambien en el kernel. Al usar FUSE, EncFS no requiere privilegios de root para su uso y es mas facil de configurar, pero tiene menor rendimiento que las alternativas basadas en kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para crear un subvolumen llamado "datos" en un sistema de archivos Btrfs montado en `/mnt/btrfs`?

</div>
<div class="flashcard-back">

**R:** btrfs subvolume create /mnt/btrfs/datos. El comando `btrfs subvolume create` crea un nuevo subvolumen dentro de un sistema de archivos Btrfs. Los subvolumenes son divisiones logicas que comparten el espacio del sistema de archivos y pueden montarse independientemente, tener instantaneas propias y gestionarse de forma individual. Se montan con la opcion `subvol=nombre` en `/etc/fstab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para crear un volumen LUKS cifrado en la particion `/dev/sdb1`?

</div>
<div class="flashcard-back">

**R:** cryptsetup luksFormat /dev/sdb1. El comando `cryptsetup luksFormat` inicializa una particion como volumen cifrado LUKS, creando la cabecera LUKS y configurando la primera clave de cifrado. El comando pedira confirmacion (escribir YES en mayusculas) y una contraseña. Esta operacion destruye todos los datos existentes en la particion. Despues se debe abrir con `cryptsetup luksOpen` para poder crear un sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando cierra (bloquea) un volumen LUKS abierto con el nombre "datos_cifrados"?

</div>
<div class="flashcard-back">

**R:** cryptsetup luksClose datos_cifrados. El comando `cryptsetup luksClose` (o su forma moderna `cryptsetup close`) cierra un volumen LUKS previamente abierto, eliminando el dispositivo de `/dev/mapper/`. El sistema de archivos debe estar desmontado antes de cerrar el volumen. Es una buena practica cerrar los volumenes cifrados cuando no estan en uso para proteger los datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando crea un pool ZFS con espejo (mirror) usando los discos `/dev/sdb` y `/dev/sdc`?

</div>
<div class="flashcard-back">

**R:** zpool create mipiscina mirror /dev/sdb /dev/sdc. El comando `zpool create` con la opcion `mirror` crea un pool con redundancia de tipo espejo (equivalente a RAID 1), donde los datos se duplican en ambos discos. Si un disco falla, el pool continua operando con el disco restante. Se puede verificar el estado del pool con `zpool status` y la integridad de los datos con `zpool scrub`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando desmonta un directorio cifrado con EncFS que esta montado mediante FUSE en `/ruta/punto_montaje`?

</div>
<div class="flashcard-back">

**R:** fusermount -u /ruta/punto_montaje. El comando `fusermount -u` se utiliza para desmontar sistemas de archivos FUSE, incluyendo los montajes de EncFS. A diferencia de `umount`, `fusermount` esta diseñado especificamente para sistemas de archivos en espacio de usuario y puede ser ejecutado por usuarios normales sin privilegios de root. La opcion `-u` indica la operacion de desmontaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-026">
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

<div class="flashcard" data-id="203.3-fc-027">
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

<div class="flashcard" data-id="203.3-fc-028">
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

<div class="flashcard" data-id="203.3-fc-029">
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

<div class="flashcard" data-id="203.3-fc-030">
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

<div class="flashcard" data-id="203.3-fc-031">
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

<div class="flashcard" data-id="203.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/crypttab`?

</div>
<div class="flashcard-back">

**R:** Definicion de volumenes cifrados LUKS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `/dev/mapper/`?

</div>
<div class="flashcard-back">

**R:** Dispositivos descifrados por dm-crypt

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `zfs`?

</div>
<div class="flashcard-back">

**R:** Gestion de datasets y snapshots ZFS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `cryptsetup`?

</div>
<div class="flashcard-back">

**R:** Herramienta de gestion de LUKS/dm-crypt

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.3">
</div>

<div class="flashcard" data-id="203.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Comparativa ext4 vs XFS?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | ext4 | XFS |

</div>
</div>

---

