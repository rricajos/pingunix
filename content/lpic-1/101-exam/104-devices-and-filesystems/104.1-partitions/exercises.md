---
title: "104.1 Crear particiones y sistemas de archivos - Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-104
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "104"
subtema: "104.1"
---

# 104.1 Crear particiones y sistemas de archivos - Ejercicios

### Pregunta 1

Un disco con tabla de particiones MBR ya tiene 3 particiones primarias. Un administrador necesita crear 3 particiones adicionales. Cual de las siguientes estrategias es correcta?

a) Crear 3 particiones primarias mas, ya que MBR soporta hasta 8
b) Eliminar una particion primaria y crear 4 logicas en su lugar
c) Crear la 4ta particion como extendida y dentro de ella crear 3 particiones logicas
d) Convertir el disco a GPT, ya que MBR no permite mas de 3 particiones

<details>
<summary>Respuesta</summary>

**c) Crear la 4ta particion como extendida y dentro de ella crear 3 particiones logicas**

MBR permite un maximo de 4 particiones primarias. Para superar este limite, se crea la 4ta particion como extendida (contenedor), y dentro de ella se crean particiones logicas. Las particiones logicas siempre se numeran a partir de 5 (por ejemplo, `sda5`, `sda6`, `sda7`), independientemente del numero de particiones primarias existentes. No es necesario eliminar particiones primarias ni convertir a GPT para resolver esta situacion.

</details>

---

### Pregunta 2

Cual de los siguientes comandos crea un sistema de archivos ext4 en `/dev/sdb1`?

a) `format -t ext4 /dev/sdb1`
b) `mkfs -t ext4 /dev/sdb1`
c) `fsck.ext4 /dev/sdb1`
d) `mount -t ext4 /dev/sdb1 /mnt`

<details>
<summary>Respuesta</summary>

**b) `mkfs -t ext4 /dev/sdb1`**

El comando `mkfs` (make filesystem) con la opcion `-t ext4` crea un sistema de archivos ext4 en la particion indicada. Esto es equivalente a ejecutar `mkfs.ext4 /dev/sdb1`. La opcion `format` no es un comando Linux estandar. `fsck.ext4` se usa para verificar y reparar sistemas de archivos, no para crearlos. `mount` monta un sistema de archivos ya existente en un punto de montaje.

</details>

---

### Pregunta 3

Cual es una diferencia fundamental entre `fdisk` y `parted` respecto a la aplicacion de cambios?

a) `fdisk` aplica los cambios inmediatamente, mientras que `parted` espera al comando `w`
b) `parted` aplica los cambios inmediatamente, mientras que `fdisk` espera al comando `w` para escribirlos
c) Ambos aplican los cambios inmediatamente al ejecutar cada comando
d) Ambos almacenan los cambios en memoria hasta que se ejecuta `w`

<details>
<summary>Respuesta</summary>

**b) `parted` aplica los cambios inmediatamente, mientras que `fdisk` espera al comando `w` para escribirlos**

Esta es una diferencia critica para el examen LPIC-1. En `fdisk` (y `gdisk`), los cambios se almacenan en memoria y no se escriben en disco hasta que se ejecuta el comando `w` (write). Se puede salir sin guardar con `q`. En cambio, `parted` aplica cada operacion de forma inmediata al ejecutarla, sin posibilidad de deshacer. Esto hace que `parted` sea potencialmente mas peligroso si se cometen errores.

</details>

---

### Pregunta 4

Un administrador necesita preparar un archivo swap de 2 GB. Cual de las siguientes secuencias de comandos es correcta?

a) `mkswap /swapfile && swapon /swapfile && dd if=/dev/zero of=/swapfile bs=1M count=2048`
b) `dd if=/dev/zero of=/swapfile bs=1M count=2048 && chmod 666 /swapfile && mkswap /swapfile && swapon /swapfile`
c) `dd if=/dev/zero of=/swapfile bs=1M count=2048 && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile`
d) `fallocate -l 2G /swapfile && mkswap /swapfile && swapon /swapfile && chmod 600 /swapfile`

<details>
<summary>Respuesta</summary>

**c) `dd if=/dev/zero of=/swapfile bs=1M count=2048 && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile`**

La secuencia correcta es: primero crear el archivo con `dd`, luego establecer permisos seguros `600` (solo root puede leer y escribir), despues formatear como swap con `mkswap`, y finalmente activar con `swapon`. La opcion `a` intenta formatear antes de crear el archivo. La opcion `b` usa permisos `666` que son inseguros para un archivo swap. La opcion `d` establece los permisos despues de activar el swap, lo cual no sigue las buenas practicas de seguridad.

</details>

---

### Pregunta 5

Cual es el codigo hexadecimal de tipo de particion MBR para Linux swap?

a) `83`
b) `8e`
c) `82`
d) `fd`

<details>
<summary>Respuesta</summary>

**c) `82`**

El codigo hexadecimal `82` identifica una particion Linux swap en la tabla MBR. Los otros codigos importantes son: `83` para particiones Linux normales (ext2/ext3/ext4, etc.), `8e` para Linux LVM, y `fd` para Linux RAID autodetect. Estos codigos se establecen con el comando `t` dentro de `fdisk`.

</details>

---

### Pregunta 6

Cuantas particiones soporta GPT por defecto y cual es su limite de tamano de disco?

a) 4 particiones, 2 TB
b) 64 particiones, 8 ZB
c) 128 particiones, 9.4 ZB
d) 256 particiones, 1 EB

<details>
<summary>Respuesta</summary>

**c) 128 particiones, 9.4 ZB**

GPT (GUID Partition Table) soporta por defecto hasta 128 particiones (ampliable) y puede gestionar discos de hasta 9.4 zettabytes. A diferencia de MBR, GPT no distingue entre particiones primarias, extendidas y logicas: todas las particiones son iguales. Ademas, incluye CRC32 para deteccion de errores y mantiene una copia de respaldo de la tabla al final del disco. MBR esta limitado a 4 particiones primarias y discos de hasta 2 TB.

</details>

---

### Pregunta 7

Que sistema de archivos es el predeterminado en RHEL/CentOS 7+ y tiene como limitacion que NO se puede reducir de tamano?

a) ext4
b) Btrfs
c) XFS
d) ext3

<details>
<summary>Respuesta</summary>

**c) XFS**

XFS es el sistema de archivos predeterminado en Red Hat Enterprise Linux (RHEL) y CentOS desde la version 7. Ofrece alto rendimiento especialmente con archivos grandes y tiene un excelente sistema de journaling. Sin embargo, una limitacion importante es que XFS solo se puede ampliar, nunca reducir. ext4 es el default en muchas otras distribuciones como Debian y Ubuntu. Btrfs soporta snapshots y RAID integrado pero no es el default de RHEL. ext3 es una version anterior con menos funcionalidades.

</details>

---

### Pregunta 8

Un disco NVMe es el segundo controlador del sistema. Como se llamaria el dispositivo y su tercera particion en `/dev/`?

a) `/dev/sdb` y `/dev/sdb3`
b) `/dev/nvme1n1` y `/dev/nvme1n1p3`
c) `/dev/nvme2n1` y `/dev/nvme2n1p3`
d) `/dev/nvme1` y `/dev/nvme1p3`

<details>
<summary>Respuesta</summary>

**b) `/dev/nvme1n1` y `/dev/nvme1n1p3`**

La nomenclatura NVMe sigue el formato `nvme[controlador]n[namespace]p[particion]`. El segundo controlador es `nvme1` (la numeracion empieza en 0), el primer namespace es `n1`, y la tercera particion es `p3`. La nomenclatura `sd*` es para discos SATA/SCSI/USB, no para NVMe. `nvme2n1` seria el tercer controlador, no el segundo. La opcion `d` no incluye el namespace, que es parte obligatoria de la nomenclatura NVMe.

</details>

---

### Pregunta 9

Cual de las siguientes opciones de `mke2fs` realiza una simulacion (dry-run) mostrando lo que haria sin crear realmente el sistema de archivos?

a) `mke2fs -c /dev/sda1`
b) `mke2fs -n /dev/sda1`
c) `mke2fs -L "test" /dev/sda1`
d) `mke2fs -m 5 /dev/sda1`

<details>
<summary>Respuesta</summary>

**b) `mke2fs -n /dev/sda1`**

La opcion `-n` de `mke2fs` realiza un dry-run: muestra toda la informacion sobre el sistema de archivos que se crearia (tamano de bloques, numero de inodos, ubicaciones de superbloques de respaldo, etc.) sin escribir nada en el disco. Es util para planificar y verificar parametros antes de crear el sistema de archivos real. La opcion `-c` verifica bloques defectuosos. La opcion `-L` asigna una etiqueta al volumen. La opcion `-m` establece el porcentaje de bloques reservados para root.

</details>

---

### Pregunta 10

Que sistema de archivos se recomienda para la particion EFI System Partition (ESP) y es compatible con Windows, macOS y Linux?

a) ext4
b) NTFS
c) VFAT (FAT32)
d) Btrfs

<details>
<summary>Respuesta</summary>

**c) VFAT (FAT32)**

La particion EFI System Partition (ESP) requiere el sistema de archivos VFAT (FAT32) segun la especificacion UEFI. VFAT es compatible con Windows, macOS y Linux, lo que lo convierte en el estandar para la ESP y tambien para medios extraibles que necesitan ser leidos en multiples plataformas. Se crea con `mkfs.vfat -F 32 /dev/sdXN`. Su principal limitacion es que el tamano maximo de un archivo individual es de 4 GB. ext4 y Btrfs son sistemas Linux que no son reconocidos nativamente por Windows. NTFS es propiamente de Windows y no se usa para la ESP.

</details>

---

### Pregunta 11

En un disco MBR con 2 particiones primarias y 1 extendida, cual seria el nombre del dispositivo de la primera particion logica?

a) `/dev/sda3`
b) `/dev/sda4`
c) `/dev/sda5`
d) `/dev/sda6`

<details><summary>Respuesta</summary>

**c) `/dev/sda5`**

En MBR, las particiones logicas siempre se numeran a partir de 5, independientemente del numero de particiones primarias existentes. Los numeros 1-4 estan reservados para particiones primarias y extendidas. En este caso, `sda1` y `sda2` son primarias, `sda3` es la extendida, y las particiones logicas dentro de la extendida empiezan en `sda5`. Incluso si solo hay 2 primarias y 1 extendida (numeradas 1, 2 y 3), la primera logica siempre es `sda5`.

</details>

---

### Pregunta 12

Cual de los siguientes sistemas de archivos soporta snapshots y RAID integrado de forma nativa?

a) ext4
b) XFS
c) Btrfs
d) VFAT

<details><summary>Respuesta</summary>

**c) Btrfs**

Btrfs (B-tree File System) es un sistema de archivos moderno que soporta funciones avanzadas como snapshots, compresion, RAID integrado, subvolumenes y la capacidad de abarcar multiples dispositivos. ext4 es robusto y ampliamente utilizado pero no tiene estas funciones integradas. XFS tiene excelente rendimiento y journaling pero tampoco ofrece snapshots o RAID nativos. VFAT es un sistema de archivos simple sin journaling ni funciones avanzadas.

</details>

---

### Pregunta 13

Que comando de `fdisk` se utiliza para cambiar el tipo de una particion existente?

a) `n`
b) `d`
c) `t`
d) `a`

<details><summary>Respuesta</summary>

**c) `t`**

El comando `t` dentro de `fdisk` permite cambiar el tipo (type) de una particion. Despues de presionar `t`, se selecciona la particion y se introduce el codigo hexadecimal del tipo deseado (por ejemplo, `82` para swap, `83` para Linux, `8e` para LVM). El comando `n` crea una nueva particion. El comando `d` elimina una particion. El comando `a` cambia el flag de arranque (bootable).

</details>

---

### Pregunta 14

Cual es el tamano maximo de disco que soporta MBR?

a) 1 TB
b) 2 TB
c) 4 TB
d) 9.4 ZB

<details><summary>Respuesta</summary>

**b) 2 TB**

MBR (Master Boot Record) tiene un limite de direccionamiento de 2 TB para el tamano total del disco. Esto se debe a que MBR usa direcciones de 32 bits con sectores de 512 bytes. Para discos mas grandes de 2 TB, se debe usar GPT (GUID Partition Table) que soporta discos de hasta 9.4 ZB (zettabytes). El limite de 2 TB es una razon importante por la cual muchos sistemas modernos han migrado de MBR a GPT.

</details>

---

### Pregunta 15

Que opcion de `mke2fs` permite establecer la etiqueta (label) de un sistema de archivos ext4 durante su creacion?

a) `-t`
b) `-L`
c) `-b`
d) `-m`

<details><summary>Respuesta</summary>

**b) `-L`**

La opcion `-L` de `mke2fs` asigna una etiqueta (label) al sistema de archivos durante su creacion. Por ejemplo: `mke2fs -t ext4 -L "datos" /dev/sda1`. La etiqueta se puede usar posteriormente para montar el sistema de archivos con `LABEL=datos` en `/etc/fstab`. La opcion `-t` especifica el tipo de sistema de archivos. La opcion `-b` establece el tamano de bloque. La opcion `-m` define el porcentaje de bloques reservados para root.

</details>

---

### Pregunta 16

Cual de las siguientes afirmaciones sobre ext3 es correcta?

a) ext3 es incompatible con ext2 y requiere una conversion completa
b) ext3 es basicamente ext2 con journaling anadido, y es compatible hacia atras con ext2
c) ext3 no soporta journaling pero tiene mejor rendimiento que ext2
d) ext3 soporta archivos de hasta 16 TB como ext4

<details><summary>Respuesta</summary>

**b) ext3 es basicamente ext2 con journaling anadido, y es compatible hacia atras con ext2**

ext3 es una evolucion de ext2 que anade journaling para mejorar la recuperacion tras fallos del sistema. La compatibilidad hacia atras permite montar una particion ext3 como ext2 (sin journaling). Se puede convertir ext2 a ext3 sin destruir datos usando `tune2fs -j /dev/sdXN`. El journaling registra las operaciones pendientes en un diario, lo que permite una recuperacion rapida sin necesidad de un `fsck` completo.

</details>

---

### Pregunta 17

Que comando se usa para verificar el swap activo en el sistema?

a) `df -h`
b) `swapon --show`
c) `mkswap -l`
d) `mount | grep swap`

<details><summary>Respuesta</summary>

**b) `swapon --show`**

`swapon --show` muestra informacion detallada sobre las areas de swap activas, incluyendo el dispositivo, tipo, tamano y uso. Otros comandos que tambien muestran informacion del swap son `cat /proc/swaps` y `free -h` (que muestra un resumen del uso de memoria y swap). `df -h` muestra el espacio en sistemas de archivos montados pero no incluye el swap. `mkswap` formatea particiones como swap pero no las lista. `mount | grep swap` podria no mostrar nada ya que el swap no se monta en un punto de montaje convencional.

</details>

---

### Pregunta 18

Que diferencia clave tiene `parted` respecto a `fdisk` y `gdisk` en cuanto a la aplicacion de cambios?

a) `parted` requiere ejecutar `w` para aplicar los cambios, igual que `fdisk`
b) `parted` aplica los cambios inmediatamente sin necesidad de un comando de escritura
c) `parted` siempre hace una copia de seguridad antes de aplicar cambios
d) `parted` solo funciona en modo de solo lectura

<details><summary>Respuesta</summary>

**b) `parted` aplica los cambios inmediatamente sin necesidad de un comando de escritura**

Esta es una diferencia critica: `parted` aplica cada operacion de forma inmediata al disco, sin esperar un comando de escritura. En cambio, `fdisk` y `gdisk` almacenan los cambios en memoria y solo los escriben al disco cuando se ejecuta el comando `w`. Esto hace que `parted` sea mas peligroso ante errores porque no se pueden deshacer las operaciones. Con `fdisk`/`gdisk`, se puede salir sin guardar usando `q` si se comete un error.

</details>

---

### Pregunta 19

Que comando activa un area de swap ya formateada en la particion `/dev/sda2`?

a) `mkswap /dev/sda2`
b) `mount -t swap /dev/sda2`
c) `swapon /dev/sda2`
d) `swapctl enable /dev/sda2`

<details><summary>Respuesta</summary>

**c) `swapon /dev/sda2`**

`swapon` es el comando que activa un area de swap previamente formateada con `mkswap`. La secuencia completa para configurar swap es: (1) crear la particion con `fdisk` y tipo 82, (2) formatear con `mkswap /dev/sda2`, (3) activar con `swapon /dev/sda2`. Para desactivar se usa `swapoff /dev/sda2`. `mount` no se usa para swap ya que no se monta en un punto de montaje. `mkswap` solo formatea, no activa.

</details>

---

### Pregunta 20

Que sistema de archivos NO tiene journaling?

a) ext3
b) ext4
c) ext2
d) XFS

<details><summary>Respuesta</summary>

**c) ext2**

ext2 es el unico de las opciones que no tiene journaling. El journaling fue introducido en ext3 como mejora sobre ext2. ext4, XFS y Btrfs tambien incluyen journaling. La ausencia de journaling en ext2 significa que despues de un apagado inesperado, se necesita un `fsck` completo para verificar la integridad del sistema de archivos, lo cual puede ser muy lento en particiones grandes. Por esta razon, ext2 se recomienda solo para particiones pequenas como `/boot`.

</details>

---

### Pregunta 21

Escribe el comando para crear un sistema de archivos ext4 en la particion `/dev/sdb1`.

<input type="text" class="fill-blank" data-answer="mkfs.ext4 /dev/sdb1" data-alt="mkfs -t ext4 /dev/sdb1,mke2fs -t ext4 /dev/sdb1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkfs.ext4 /dev/sdb1**

Existen varias formas equivalentes de crear un sistema de archivos ext4: `mkfs.ext4 /dev/sdb1`, `mkfs -t ext4 /dev/sdb1` y `mke2fs -t ext4 /dev/sdb1`. Todas ejecutan la misma operacion de formatear la particion con el sistema de archivos ext4. Este comando destruye todos los datos existentes en la particion.

</details>

---

### Pregunta 22

Escribe el comando para formatear la particion `/dev/sda3` como area de swap.

<input type="text" class="fill-blank" data-answer="mkswap /dev/sda3" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkswap /dev/sda3**

`mkswap` prepara una particion o archivo para ser usado como espacio de swap (intercambio). Despues de formatearlo, se activa con `swapon /dev/sda3`. Para que sea permanente, se debe agregar una entrada en `/etc/fstab`. Antes de ejecutar `mkswap`, la particion debe tener el tipo 82 (Linux swap) configurado con `fdisk`.

</details>

---

### Pregunta 23

Escribe el comando para listar todas las particiones de todos los discos del sistema usando `fdisk`.

<input type="text" class="fill-blank" data-answer="fdisk -l" data-alt="sudo fdisk -l" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**fdisk -l**

La opcion `-l` de `fdisk` lista las tablas de particiones de todos los discos detectados en el sistema. Muestra informacion como el tamano del disco, tipo de tabla de particiones (MBR/GPT), y detalles de cada particion (inicio, fin, tamano, tipo). Para listar solo las particiones de un disco especifico se usa `fdisk -l /dev/sda`. Este comando generalmente requiere privilegios de root.

</details>

---

### Pregunta 24

Escribe el comando `parted` para crear una nueva tabla de particiones GPT en el disco `/dev/sda`.

<input type="text" class="fill-blank" data-answer="parted /dev/sda mklabel gpt" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**parted /dev/sda mklabel gpt**

El comando `parted /dev/sda mklabel gpt` crea una nueva tabla de particiones GPT en el disco especificado. Para crear una tabla MBR se usaria `parted /dev/sda mklabel msdos`. Este comando destruye toda la informacion de particiones existente en el disco. Recuerda que `parted` aplica los cambios inmediatamente, sin necesidad de un comando de escritura adicional.

</details>

---

### Pregunta 25

Escribe el comando para desactivar todo el swap del sistema.

<input type="text" class="fill-blank" data-answer="swapoff -a" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**swapoff -a**

La opcion `-a` de `swapoff` desactiva todas las areas de swap activas en el sistema. Para desactivar un area de swap especifica se usa `swapoff /dev/sdXN` o `swapoff /swapfile`. Este comando mueve todos los datos del swap de vuelta a la RAM, por lo que es importante asegurarse de tener suficiente memoria RAM disponible antes de desactivar el swap.

</details>
