---
title: "203.3 - Opciones de sistemas de archivos"
tags: [lpic-2, examen-201, tema-203, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "203"
subtema: "203.3"
---

# 203.3 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un administrador necesita crear una instantanea de solo lectura del subvolumen `/mnt/btrfs/datos`. ¿Que comando es correcto?

a) `btrfs snapshot -r /mnt/btrfs/datos /mnt/btrfs/snap`
b) `btrfs subvolume snapshot -r /mnt/btrfs/datos /mnt/btrfs/snap`
c) `btrfs subvolume clone /mnt/btrfs/datos /mnt/btrfs/snap`
d) `cp --snapshot /mnt/btrfs/datos /mnt/btrfs/snap`

<details>
<summary>Respuesta</summary>

**b) `btrfs subvolume snapshot -r /mnt/btrfs/datos /mnt/btrfs/snap`**

El comando correcto para crear una instantanea en Btrfs es `btrfs subvolume snapshot`. La opcion `-r` hace que la instantanea sea de solo lectura, lo cual es necesario si se planea usar `btrfs send` para transferirla. Sin `-r`, la instantanea seria de lectura/escritura. Las instantaneas en Btrfs son casi instantaneas gracias al mecanismo copy-on-write.
</details>

---

### Pregunta 2

¿Cual es la principal diferencia entre LUKS/dm-crypt y eCryptfs en cuanto al nivel de cifrado?

a) LUKS cifra archivos individuales; eCryptfs cifra particiones completas
b) LUKS cifra a nivel de bloque (particion); eCryptfs cifra a nivel de archivo
c) Ambos cifran a nivel de bloque, pero usan diferentes algoritmos
d) LUKS solo cifra metadatos; eCryptfs cifra datos y metadatos

<details>
<summary>Respuesta</summary>

**b) LUKS cifra a nivel de bloque (particion); eCryptfs cifra a nivel de archivo**

LUKS/dm-crypt opera a nivel de bloque, cifrando toda la particion de forma transparente. El sistema de archivos se crea sobre el dispositivo descifrado en `/dev/mapper/`. eCryptfs, en cambio, opera a nivel de archivo dentro del kernel, cifrando cada archivo individualmente sobre un sistema de archivos existente. Esta diferencia tiene implicaciones practicas: LUKS ofrece mayor seguridad (cifra metadatos completos) pero eCryptfs permite backups incrementales mas faciles.
</details>

---

### Pregunta 3

En ZFS, ¿que comando se usa para crear un pool de almacenamiento con redundancia equivalente a RAID5 usando tres discos?

a) `zpool create mipool raid5 /dev/sdb /dev/sdc /dev/sdd`
b) `zpool create mipool raidz /dev/sdb /dev/sdc /dev/sdd`
c) `zfs create mipool raidz /dev/sdb /dev/sdc /dev/sdd`
d) `zpool create mipool mirror /dev/sdb /dev/sdc /dev/sdd`

<details>
<summary>Respuesta</summary>

**b) `zpool create mipool raidz /dev/sdb /dev/sdc /dev/sdd`**

En ZFS, `raidz` (o `raidz1`) es el equivalente a RAID5, proporcionando tolerancia a la falla de un disco mediante paridad distribuida. Se usa `zpool create` (no `zfs create`, que es para datasets). La opcion `mirror` crearia un espejo (RAID1), y `raidz2` seria el equivalente a RAID6 (tolerancia a dos fallos).
</details>

---

### Pregunta 4

¿Que algoritmo de compresion de Btrfs ofrece el mejor equilibrio entre velocidad y ratio de compresion?

a) `lzo`
b) `gzip`
c) `zstd`
d) `zlib`

<details>
<summary>Respuesta</summary>

**c) `zstd`**

Zstandard (`zstd`) es el algoritmo de compresion recomendado para Btrfs en la mayoria de los casos, ya que ofrece el mejor equilibrio entre velocidad de compresion/descompresion y ratio de compresion. `lzo` es el mas rapido pero con menor ratio de compresion. `zlib` ofrece buen ratio pero es significativamente mas lento. `gzip` no es un algoritmo soportado directamente por Btrfs (es un formato de archivo, no un algoritmo de compresion de FS).
</details>

---

### Pregunta 5

Un administrador quiere montar un tmpfs de 4GB en `/tmp`. ¿Cual es la linea correcta para `/etc/fstab`?

a) `ram0  /tmp  ramfs  defaults,size=4G  0  0`
b) `tmpfs  /tmp  tmpfs  defaults,size=4G  0  0`
c) `/dev/tmpfs  /tmp  tmpfs  defaults,size=4G  0  0`
d) `none  /tmp  tmpfs  defaults,maxsize=4G  0  0`

<details>
<summary>Respuesta</summary>

**b) `tmpfs  /tmp  tmpfs  defaults,size=4G  0  0`**

La sintaxis correcta usa `tmpfs` como dispositivo (primer campo), `/tmp` como punto de montaje, `tmpfs` como tipo de sistema de archivos, y `size=4G` para establecer el tamano maximo. El parametro `size=` define el limite maximo, no una asignacion fija; tmpfs solo consume la memoria que realmente se usa. `ramfs` no tiene limite de tamano y no usa swap, lo que lo hace peligroso. La opcion `maxsize` no es un parametro valido.
</details>

---

### Pregunta 6

¿Que archivo de configuracion define los volumenes LUKS que deben abrirse automaticamente durante el arranque del sistema?

a) `/etc/fstab`
b) `/etc/luks.conf`
c) `/etc/crypttab`
d) `/etc/dm-crypt.conf`

<details>
<summary>Respuesta</summary>

**c) `/etc/crypttab`**

El archivo `/etc/crypttab` define los volumenes cifrados LUKS que se desbloquean durante el arranque, antes de que se monten los sistemas de archivos de `/etc/fstab`. Cada linea contiene el nombre del mapeo, el dispositivo, el archivo de clave (o `none` para solicitar contraseña interactivamente) y opciones. Los sistemas de archivos dentro de los volumenes descifrados se montan luego a traves de fstab usando `/dev/mapper/<nombre>`.
</details>

---

### Pregunta 7

Un administrador quiere montar un subvolumen Btrfs llamado "home" de la particion `/dev/sda2` en `/home`. ¿Cual es la linea correcta para `/etc/fstab`?

a) `UUID=xxxx  /home  btrfs  defaults  0  0`
b) `UUID=xxxx  /home  btrfs  defaults,subvol=home  0  0`
c) `UUID=xxxx  /home  btrfs  defaults,subvolume=home  0  0`
d) `UUID=xxxx  /home  btrfs  defaults,volume=home  0  0`

<details>
<summary>Respuesta</summary>

**b) `UUID=xxxx  /home  btrfs  defaults,subvol=home  0  0`**

Para montar un subvolumen especifico de Btrfs, se usa la opcion `subvol=nombre` (o alternativamente `subvolid=ID`). Sin esta opcion, se montaria el subvolumen por defecto (normalmente el subvolumen raiz, ID 5). La opcion `subvolume=` no es valida; el parametro correcto es `subvol=`.
</details>

---

### Pregunta 8

¿Cual de las siguientes afirmaciones sobre tmpfs es correcta?

a) tmpfs asigna un bloque fijo de RAM al crearse, independientemente del uso real
b) tmpfs solo usa RAM, nunca utiliza el espacio swap
c) tmpfs crece dinamicamente y puede usar swap si la RAM se llena
d) tmpfs persiste sus datos entre reinicios del sistema

<details>
<summary>Respuesta</summary>

**c) tmpfs crece dinamicamente y puede usar swap si la RAM se llena**

tmpfs es un sistema de archivos que almacena datos en memoria virtual, lo que incluye tanto RAM como swap. No asigna un bloque fijo; solo consume la memoria que realmente necesita y la libera cuando los archivos se eliminan. Si la RAM disponible se agota, los datos de tmpfs pueden moverse al swap. El parametro `size=` define un limite maximo, no una preasignacion. Los datos se pierden al reiniciar. `ramfs`, a diferencia de tmpfs, no usa swap y no tiene limite de tamano.
</details>

---

### Pregunta 9

¿Que comando de ZFS se utiliza para verificar la integridad de todos los datos en un pool, similar a `btrfs scrub` en Btrfs?

a) `zfs check mipool`
b) `zpool verify mipool`
c) `zpool scrub mipool`
d) `zfs scrub mipool`

<details>
<summary>Respuesta</summary>

**c) `zpool scrub mipool`**

`zpool scrub` lee todos los datos y metadatos del pool, verifica los checksums y repara automaticamente los datos corruptos si hay redundancia disponible (mirror o raidz). Es equivalente a `btrfs scrub start` en Btrfs. El scrub se ejecuta a nivel de pool (con `zpool`), no a nivel de dataset (con `zfs`), ya que la verificacion abarca todo el almacenamiento fisico del pool.
</details>

---

### Pregunta 10

Un administrador necesita abrir un volumen LUKS existente en `/dev/sda3` con el nombre "datos_seguros" para poder montar el sistema de archivos que contiene. ¿Que comando debe usar?

a) `cryptsetup create datos_seguros /dev/sda3`
b) `cryptsetup luksOpen /dev/sda3 datos_seguros`
c) `cryptsetup mount /dev/sda3 datos_seguros`
d) `cryptsetup luksMount /dev/sda3 /mnt/datos_seguros`

<details>
<summary>Respuesta</summary>

**b) `cryptsetup luksOpen /dev/sda3 datos_seguros`**

`cryptsetup luksOpen` (o su equivalente moderno `cryptsetup open --type luks`) desbloquea un volumen LUKS y crea un dispositivo descifrado en `/dev/mapper/datos_seguros`. Despues de abrir el volumen, se puede montar con `mount /dev/mapper/datos_seguros /mnt/punto`. La opcion `create` es para dm-crypt plano (sin LUKS). No existen los subcomandos `mount` ni `luksMount` en cryptsetup.
</details>

---

### Pregunta 11

Un administrador necesita verificar la integridad de los datos en un sistema de archivos Btrfs montado en `/mnt/btrfs`. ¿Que comando debe usar?

a) `btrfs fsck /mnt/btrfs`
b) `btrfs check /mnt/btrfs`
c) `btrfs scrub start /mnt/btrfs`
d) `btrfs verify /mnt/btrfs`

<details>
<summary>Respuesta</summary>

**c) `btrfs scrub start /mnt/btrfs`**

`btrfs scrub start` verifica la integridad de todos los datos y metadatos leyendo y comprobando los checksums mientras el sistema de archivos esta montado. Es similar a `zpool scrub` en ZFS. `btrfs check` se ejecuta sobre un sistema de archivos desmontado. Se puede consultar el progreso con `btrfs scrub status /mnt/btrfs`.
</details>

---

### Pregunta 12

¿Cuantos slots de clave soporta LUKS para un volumen cifrado?

a) 2
b) 4
c) 8
d) 16

<details>
<summary>Respuesta</summary>

**c) 8**

LUKS soporta hasta 8 slots de clave (numerados del 0 al 7), lo que permite tener hasta 8 contraseñas o archivos de clave diferentes para desbloquear el mismo volumen. Se pueden gestionar con `cryptsetup luksAddKey` (agregar), `cryptsetup luksRemoveKey` (eliminar) y `cryptsetup luksKillSlot` (eliminar por numero de slot). `cryptsetup luksDump` muestra el estado de cada slot.
</details>

---

### Pregunta 13

¿Que comando de Btrfs permite reducir el tamano del sistema de archivos en 5 GB?

a) `btrfs filesystem shrink -5G /mnt/btrfs`
b) `btrfs filesystem resize -5G /mnt/btrfs`
c) `resize2fs -5G /mnt/btrfs`
d) `btrfs resize shrink 5G /mnt/btrfs`

<details>
<summary>Respuesta</summary>

**b) `btrfs filesystem resize -5G /mnt/btrfs`**

A diferencia de XFS, Btrfs soporta tanto la expansion como la reduccion del sistema de archivos. El comando `btrfs filesystem resize` acepta valores con prefijo `+` para expandir y `-` para reducir. Tambien se puede usar `max` para expandir al tamano maximo disponible. Esta flexibilidad es una de las ventajas de Btrfs sobre XFS, que solo permite la expansion.
</details>

---

### Pregunta 14

¿Que sistema de archivos utiliza el concepto de "pools de almacenamiento" (zpools) como capa de gestion de volumenes integrada?

a) Btrfs
b) ext4
c) ZFS
d) XFS

<details>
<summary>Respuesta</summary>

**c) ZFS**

ZFS es unico en que combina la gestion de volumenes y el sistema de archivos en una sola capa. Los zpools son pools de almacenamiento que agrupan discos fisicos y sobre los cuales se crean datasets (sistemas de archivos). Esto elimina la necesidad de un gestor de volumenes separado como LVM. Btrfs tiene funcionalidad similar pero no usa el concepto de "zpool".
</details>

---

### Pregunta 15

Un administrador necesita enviar una instantanea Btrfs de solo lectura a otro sistema de archivos Btrfs para realizar un backup. ¿Que combinacion de comandos es correcta?

a) `btrfs clone /mnt/snap /mnt/backup`
b) `btrfs send /mnt/snap | btrfs receive /mnt/backup/`
c) `btrfs copy /mnt/snap /mnt/backup`
d) `btrfs snapshot send /mnt/snap /mnt/backup`

<details>
<summary>Respuesta</summary>

**b) `btrfs send /mnt/snap | btrfs receive /mnt/backup/`**

La funcionalidad `btrfs send` y `btrfs receive` permite transferir instantaneas entre sistemas de archivos Btrfs, incluyendo a traves de la red usando SSH. La instantanea de origen debe ser de solo lectura (creada con `-r`). Tambien soporta envios incrementales con `-p` para enviar solo las diferencias respecto a una instantanea anterior, optimizando los backups.
</details>

---

### Pregunta 16

¿Que propiedad de ZFS se utiliza para establecer una cuota de 50 GB en un dataset?

a) `zfs set limit=50G mipiscina/datos`
b) `zfs set quota=50G mipiscina/datos`
c) `zfs set maxsize=50G mipiscina/datos`
d) `zfs set space=50G mipiscina/datos`

<details>
<summary>Respuesta</summary>

**b) `zfs set quota=50G mipiscina/datos`**

La propiedad `quota` de ZFS establece el tamano maximo que puede ocupar un dataset y sus descendientes. Se configura con `zfs set quota=50G`. ZFS tambien ofrece `reservation` para garantizar un espacio minimo disponible. A diferencia de las cuotas de disco tradicionales (por usuario/grupo), la cuota de ZFS se aplica al dataset completo como unidad logica.
</details>

---

### Pregunta 17

¿Que opcion de montaje de Btrfs activa la compresion transparente con el algoritmo zstd?

a) `mount -o compress=gzip /dev/sdb1 /mnt`
b) `mount -o compress=zstd /dev/sdb1 /mnt`
c) `mount -o zstd-compress /dev/sdb1 /mnt`
d) `mount -o compression=zstd /dev/sdb1 /mnt`

<details>
<summary>Respuesta</summary>

**b) `mount -o compress=zstd /dev/sdb1 /mnt`**

La opcion `compress=zstd` habilita la compresion transparente con el algoritmo Zstandard en un sistema de archivos Btrfs. zstd ofrece el mejor equilibrio entre velocidad y ratio de compresion. Tambien se puede especificar un nivel con `compress=zstd:3`. La opcion `compress-force=zstd` fuerza la compresion incluso para datos que Btrfs considera no comprimibles.
</details>

---

### Pregunta 18

¿Que nivel de RAID-Z en ZFS es equivalente a RAID 6, tolerando la perdida de dos discos?

a) raidz
b) raidz2
c) raidz3
d) mirror

<details>
<summary>Respuesta</summary>

**b) raidz2**

En ZFS, `raidz2` es el equivalente a RAID 6 y utiliza doble paridad distribuida, permitiendo que el pool sobreviva a la perdida simultanea de hasta 2 discos. `raidz` (o `raidz1`) equivale a RAID 5 (tolerancia de 1 disco), y `raidz3` ofrece triple paridad (tolerancia de 3 discos). `mirror` es el equivalente a RAID 1 (espejo).
</details>

---

### Pregunta 19

En el archivo `/etc/crypttab`, ¿que valor en el campo de clave indica que se debe solicitar la contraseña interactivamente al usuario durante el arranque?

a) `ask`
b) `password`
c) `none`
d) `interactive`

<details>
<summary>Respuesta</summary>

**c) `none`**

En `/etc/crypttab`, el valor `none` en el campo de clave indica que no se proporciona un archivo de clave y que la contraseña debe solicitarse interactivamente al usuario durante el proceso de arranque. Si se especifica una ruta a un archivo (como `/etc/keys/keyfile`), el volumen se desbloquea automaticamente con ese archivo, sin interaccion del usuario.
</details>

---

### Pregunta 20

¿Que caracteristica distingue a EncFS de LUKS/dm-crypt y eCryptfs en cuanto a su implementacion?

a) EncFS cifra a nivel de bloque como LUKS
b) EncFS funciona en espacio de usuario mediante FUSE
c) EncFS requiere una particion dedicada
d) EncFS es un modulo nativo del kernel Linux

<details>
<summary>Respuesta</summary>

**b) EncFS funciona en espacio de usuario mediante FUSE**

EncFS opera completamente en espacio de usuario a traves de FUSE (Filesystem in Userspace), a diferencia de LUKS/dm-crypt que funciona a nivel de bloque en el kernel, y eCryptfs que funciona a nivel de archivo tambien en el kernel. Al usar FUSE, EncFS no requiere privilegios de root para su uso y es mas facil de configurar, pero tiene menor rendimiento que las alternativas basadas en kernel.
</details>

---

### Pregunta 21

¿Que comando se utiliza para crear un subvolumen llamado "datos" en un sistema de archivos Btrfs montado en `/mnt/btrfs`?

<input type="text" class="fill-blank" data-answer="btrfs subvolume create /mnt/btrfs/datos" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**btrfs subvolume create /mnt/btrfs/datos**

El comando `btrfs subvolume create` crea un nuevo subvolumen dentro de un sistema de archivos Btrfs. Los subvolumenes son divisiones logicas que comparten el espacio del sistema de archivos y pueden montarse independientemente, tener instantaneas propias y gestionarse de forma individual. Se montan con la opcion `subvol=nombre` en `/etc/fstab`.
</details>

---

### Pregunta 22

¿Que comando se utiliza para crear un volumen LUKS cifrado en la particion `/dev/sdb1`?

<input type="text" class="fill-blank" data-answer="cryptsetup luksFormat /dev/sdb1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**cryptsetup luksFormat /dev/sdb1**

El comando `cryptsetup luksFormat` inicializa una particion como volumen cifrado LUKS, creando la cabecera LUKS y configurando la primera clave de cifrado. El comando pedira confirmacion (escribir YES en mayusculas) y una contraseña. Esta operacion destruye todos los datos existentes en la particion. Despues se debe abrir con `cryptsetup luksOpen` para poder crear un sistema de archivos.
</details>

---

### Pregunta 23

¿Que comando cierra (bloquea) un volumen LUKS abierto con el nombre "datos_cifrados"?

<input type="text" class="fill-blank" data-answer="cryptsetup luksClose datos_cifrados" data-alt="cryptsetup close datos_cifrados" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**cryptsetup luksClose datos_cifrados**

El comando `cryptsetup luksClose` (o su forma moderna `cryptsetup close`) cierra un volumen LUKS previamente abierto, eliminando el dispositivo de `/dev/mapper/`. El sistema de archivos debe estar desmontado antes de cerrar el volumen. Es una buena practica cerrar los volumenes cifrados cuando no estan en uso para proteger los datos.
</details>

---

### Pregunta 24

¿Que comando crea un pool ZFS con espejo (mirror) usando los discos `/dev/sdb` y `/dev/sdc`?

<input type="text" class="fill-blank" data-answer="zpool create mipiscina mirror /dev/sdb /dev/sdc" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**zpool create mipiscina mirror /dev/sdb /dev/sdc**

El comando `zpool create` con la opcion `mirror` crea un pool con redundancia de tipo espejo (equivalente a RAID 1), donde los datos se duplican en ambos discos. Si un disco falla, el pool continua operando con el disco restante. Se puede verificar el estado del pool con `zpool status` y la integridad de los datos con `zpool scrub`.
</details>

---

### Pregunta 25

¿Que comando desmonta un directorio cifrado con EncFS que esta montado mediante FUSE en `/ruta/punto_montaje`?

<input type="text" class="fill-blank" data-answer="fusermount -u /ruta/punto_montaje" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**fusermount -u /ruta/punto_montaje**

El comando `fusermount -u` se utiliza para desmontar sistemas de archivos FUSE, incluyendo los montajes de EncFS. A diferencia de `umount`, `fusermount` esta diseñado especificamente para sistemas de archivos en espacio de usuario y puede ser ejecutado por usuarios normales sin privilegios de root. La opcion `-u` indica la operacion de desmontaje.
</details>
