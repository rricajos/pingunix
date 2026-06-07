---
title: "104.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "104.1"
---

# Flashcards: 104.1 - Particiones Y Sistemas De Archivos

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-001">
<div class="flashcard-front">

**P:** Un disco con tabla de particiones MBR ya tiene 3 particiones primarias. Un administrador necesita crear 3 particiones adicionales. Cual de las siguientes estrategias es correcta?

</div>
<div class="flashcard-back">

**R:** c) Crear la 4ta particion como extendida y dentro de ella crear 3 particiones logicas. MBR permite un maximo de 4 particiones primarias. Para superar este limite, se crea la 4ta particion como extendida (contenedor), y dentro de ella se crean particiones logicas. Las particiones logicas siempre se numeran a partir de 5 (por ejemplo, `sda5`, `sda6`, `sda7`), independientemente del numero de particiones primarias existentes. No es necesario eliminar particiones primarias ni convertir a GPT para resolver esta situacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-002">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos crea un sistema de archivos ext4 en `/dev/sdb1`?

</div>
<div class="flashcard-back">

**R:** b) `mkfs -t ext4 /dev/sdb1`. El comando `mkfs` (make filesystem) con la opcion `-t ext4` crea un sistema de archivos ext4 en la particion indicada. Esto es equivalente a ejecutar `mkfs.ext4 /dev/sdb1`. La opcion `format` no es un comando Linux estandar. `fsck.ext4` se usa para verificar y reparar sistemas de archivos, no para crearlos. `mount` monta un sistema de archivos ya existente en un punto de montaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-003">
<div class="flashcard-front">

**P:** Cual es una diferencia fundamental entre `fdisk` y `parted` respecto a la aplicacion de cambios?

</div>
<div class="flashcard-back">

**R:** b) `parted` aplica los cambios inmediatamente, mientras que `fdisk` espera al comando `w` para escribirlos. Esta es una diferencia critica para el examen LPIC-1. En `fdisk` (y `gdisk`), los cambios se almacenan en memoria y no se escriben en disco hasta que se ejecuta el comando `w` (write). Se puede salir sin guardar con `q`. En cambio, `parted` aplica cada operacion de forma inmediata al ejecutarla, sin posibilidad de deshacer. Esto hace que `parted` sea potencialmente mas peligroso si se cometen errores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-004">
<div class="flashcard-front">

**P:** Un administrador necesita preparar un archivo swap de 2 GB. Cual de las siguientes secuencias de comandos es correcta?

</div>
<div class="flashcard-back">

**R:** c) `dd if=/dev/zero of=/swapfile bs=1M count=2048 && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile`. La secuencia correcta es: primero crear el archivo con `dd`, luego establecer permisos seguros `600` (solo root puede leer y escribir), despues formatear como swap con `mkswap`, y finalmente activar con `swapon`. La opcion `a` intenta formatear antes de crear el archivo. La opcion `b` usa permisos `666` que son inseguros para un archivo swap. La opcion `d` establece los permisos despues de activar el swap, lo cual no sigue las buenas practicas de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-005">
<div class="flashcard-front">

**P:** Cual es el codigo hexadecimal de tipo de particion MBR para Linux swap?

</div>
<div class="flashcard-back">

**R:** c) `82`. El codigo hexadecimal `82` identifica una particion Linux swap en la tabla MBR. Los otros codigos importantes son: `83` para particiones Linux normales (ext2/ext3/ext4, etc.), `8e` para Linux LVM, y `fd` para Linux RAID autodetect. Estos codigos se establecen con el comando `t` dentro de `fdisk`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-006">
<div class="flashcard-front">

**P:** Cuantas particiones soporta GPT por defecto y cual es su limite de tamano de disco?

</div>
<div class="flashcard-back">

**R:** c) 128 particiones, 9.4 ZB. GPT (GUID Partition Table) soporta por defecto hasta 128 particiones (ampliable) y puede gestionar discos de hasta 9.4 zettabytes. A diferencia de MBR, GPT no distingue entre particiones primarias, extendidas y logicas: todas las particiones son iguales. Ademas, incluye CRC32 para deteccion de errores y mantiene una copia de respaldo de la tabla al final del disco. MBR esta limitado a 4 particiones primarias y discos de hasta 2 TB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-007">
<div class="flashcard-front">

**P:** Que sistema de archivos es el predeterminado en RHEL/CentOS 7+ y tiene como limitacion que NO se puede reducir de tamano?

</div>
<div class="flashcard-back">

**R:** c) XFS. XFS es el sistema de archivos predeterminado en Red Hat Enterprise Linux (RHEL) y CentOS desde la version 7. Ofrece alto rendimiento especialmente con archivos grandes y tiene un excelente sistema de journaling. Sin embargo, una limitacion importante es que XFS solo se puede ampliar, nunca reducir. ext4 es el default en muchas otras distribuciones como Debian y Ubuntu. Btrfs soporta snapshots y RAID integrado pero no es el default de RHEL. ext3 es una version anterior con menos funcionalidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-008">
<div class="flashcard-front">

**P:** Un disco NVMe es el segundo controlador del sistema. Como se llamaria el dispositivo y su tercera particion en `/dev/`?

</div>
<div class="flashcard-back">

**R:** b) `/dev/nvme1n1` y `/dev/nvme1n1p3`. La nomenclatura NVMe sigue el formato `nvme[controlador]n[namespace]p[particion]`. El segundo controlador es `nvme1` (la numeracion empieza en 0), el primer namespace es `n1`, y la tercera particion es `p3`. La nomenclatura `sd*` es para discos SATA/SCSI/USB, no para NVMe. `nvme2n1` seria el tercer controlador, no el segundo. La opcion `d` no incluye el namespace, que es parte obligatoria de la nomenclatura NVMe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-009">
<div class="flashcard-front">

**P:** Cual de las siguientes opciones de `mke2fs` realiza una simulacion (dry-run) mostrando lo que haria sin crear realmente el sistema de archivos?

</div>
<div class="flashcard-back">

**R:** b) `mke2fs -n /dev/sda1`. La opcion `-n` de `mke2fs` realiza un dry-run: muestra toda la informacion sobre el sistema de archivos que se crearia (tamano de bloques, numero de inodos, ubicaciones de superbloques de respaldo, etc.) sin escribir nada en el disco. Es util para planificar y verificar parametros antes de crear el sistema de archivos real. La opcion `-c` verifica bloques defectuosos. La opcion `-L` asigna una etiqueta al volumen. La opcion `-m` establece el porcentaje de bloques reservados para root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-010">
<div class="flashcard-front">

**P:** Que sistema de archivos se recomienda para la particion EFI System Partition (ESP) y es compatible con Windows, macOS y Linux?

</div>
<div class="flashcard-back">

**R:** c) VFAT (FAT32). La particion EFI System Partition (ESP) requiere el sistema de archivos VFAT (FAT32) segun la especificacion UEFI. VFAT es compatible con Windows, macOS y Linux, lo que lo convierte en el estandar para la ESP y tambien para medios extraibles que necesitan ser leidos en multiples plataformas. Se crea con `mkfs.vfat -F 32 /dev/sdXN`. Su principal limitacion es que el tamano maximo de un archivo individual es de 4 GB. ext4 y Btrfs son sistemas Linux que no son reconocidos nativamente por Windows. NTFS es propiamente de Windows y no se usa para la ESP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-011">
<div class="flashcard-front">

**P:** En un disco MBR con 2 particiones primarias y 1 extendida, cual seria el nombre del dispositivo de la primera particion logica?

</div>
<div class="flashcard-back">

**R:** c) `/dev/sda5`. En MBR, las particiones logicas siempre se numeran a partir de 5, independientemente del numero de particiones primarias existentes. Los numeros 1-4 estan reservados para particiones primarias y extendidas. En este caso, `sda1` y `sda2` son primarias, `sda3` es la extendida, y las particiones logicas dentro de la extendida empiezan en `sda5`. Incluso si solo hay 2 primarias y 1 extendida (numeradas 1, 2 y 3), la primera logica siempre es `sda5`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-012">
<div class="flashcard-front">

**P:** Cual de los siguientes sistemas de archivos soporta snapshots y RAID integrado de forma nativa?

</div>
<div class="flashcard-back">

**R:** c) Btrfs. Btrfs (B-tree File System) es un sistema de archivos moderno que soporta funciones avanzadas como snapshots, compresion, RAID integrado, subvolumenes y la capacidad de abarcar multiples dispositivos. ext4 es robusto y ampliamente utilizado pero no tiene estas funciones integradas. XFS tiene excelente rendimiento y journaling pero tampoco ofrece snapshots o RAID nativos. VFAT es un sistema de archivos simple sin journaling ni funciones avanzadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-013">
<div class="flashcard-front">

**P:** Que comando de `fdisk` se utiliza para cambiar el tipo de una particion existente?

</div>
<div class="flashcard-back">

**R:** c) `t`. El comando `t` dentro de `fdisk` permite cambiar el tipo (type) de una particion. Despues de presionar `t`, se selecciona la particion y se introduce el codigo hexadecimal del tipo deseado (por ejemplo, `82` para swap, `83` para Linux, `8e` para LVM). El comando `n` crea una nueva particion. El comando `d` elimina una particion. El comando `a` cambia el flag de arranque (bootable).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-014">
<div class="flashcard-front">

**P:** Cual es el tamano maximo de disco que soporta MBR?

</div>
<div class="flashcard-back">

**R:** b) 2 TB. MBR (Master Boot Record) tiene un limite de direccionamiento de 2 TB para el tamano total del disco. Esto se debe a que MBR usa direcciones de 32 bits con sectores de 512 bytes. Para discos mas grandes de 2 TB, se debe usar GPT (GUID Partition Table) que soporta discos de hasta 9.4 ZB (zettabytes). El limite de 2 TB es una razon importante por la cual muchos sistemas modernos han migrado de MBR a GPT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-015">
<div class="flashcard-front">

**P:** Que opcion de `mke2fs` permite establecer la etiqueta (label) de un sistema de archivos ext4 durante su creacion?

</div>
<div class="flashcard-back">

**R:** b) `-L`. La opcion `-L` de `mke2fs` asigna una etiqueta (label) al sistema de archivos durante su creacion. Por ejemplo: `mke2fs -t ext4 -L "datos" /dev/sda1`. La etiqueta se puede usar posteriormente para montar el sistema de archivos con `LABEL=datos` en `/etc/fstab`. La opcion `-t` especifica el tipo de sistema de archivos. La opcion `-b` establece el tamano de bloque. La opcion `-m` define el porcentaje de bloques reservados para root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-016">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre ext3 es correcta?

</div>
<div class="flashcard-back">

**R:** b) ext3 es basicamente ext2 con journaling anadido, y es compatible hacia atras con ext2. ext3 es una evolucion de ext2 que anade journaling para mejorar la recuperacion tras fallos del sistema. La compatibilidad hacia atras permite montar una particion ext3 como ext2 (sin journaling). Se puede convertir ext2 a ext3 sin destruir datos usando `tune2fs -j /dev/sdXN`. El journaling registra las operaciones pendientes en un diario, lo que permite una recuperacion rapida sin necesidad de un `fsck` completo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-017">
<div class="flashcard-front">

**P:** Que comando se usa para verificar el swap activo en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `swapon --show`. `swapon --show` muestra informacion detallada sobre las areas de swap activas, incluyendo el dispositivo, tipo, tamano y uso. Otros comandos que tambien muestran informacion del swap son `cat /proc/swaps` y `free -h` (que muestra un resumen del uso de memoria y swap). `df -h` muestra el espacio en sistemas de archivos montados pero no incluye el swap. `mkswap` formatea particiones como swap pero no las lista. `mount | grep swap` podria no mostrar nada ya que el swap no se monta en un punto de montaje convencional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-018">
<div class="flashcard-front">

**P:** Que diferencia clave tiene `parted` respecto a `fdisk` y `gdisk` en cuanto a la aplicacion de cambios?

</div>
<div class="flashcard-back">

**R:** b) `parted` aplica los cambios inmediatamente sin necesidad de un comando de escritura. Esta es una diferencia critica: `parted` aplica cada operacion de forma inmediata al disco, sin esperar un comando de escritura. En cambio, `fdisk` y `gdisk` almacenan los cambios en memoria y solo los escriben al disco cuando se ejecuta el comando `w`. Esto hace que `parted` sea mas peligroso ante errores porque no se pueden deshacer las operaciones. Con `fdisk`/`gdisk`, se puede salir sin guardar usando `q` si se comete un error.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-019">
<div class="flashcard-front">

**P:** Que comando activa un area de swap ya formateada en la particion `/dev/sda2`?

</div>
<div class="flashcard-back">

**R:** c) `swapon /dev/sda2`. `swapon` es el comando que activa un area de swap previamente formateada con `mkswap`. La secuencia completa para configurar swap es: (1) crear la particion con `fdisk` y tipo 82, (2) formatear con `mkswap /dev/sda2`, (3) activar con `swapon /dev/sda2`. Para desactivar se usa `swapoff /dev/sda2`. `mount` no se usa para swap ya que no se monta en un punto de montaje. `mkswap` solo formatea, no activa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-020">
<div class="flashcard-front">

**P:** Que sistema de archivos NO tiene journaling?

</div>
<div class="flashcard-back">

**R:** c) ext2. ext2 es el unico de las opciones que no tiene journaling. El journaling fue introducido en ext3 como mejora sobre ext2. ext4, XFS y Btrfs tambien incluyen journaling. La ausencia de journaling en ext2 significa que despues de un apagado inesperado, se necesita un `fsck` completo para verificar la integridad del sistema de archivos, lo cual puede ser muy lento en particiones grandes. Por esta razon, ext2 se recomienda solo para particiones pequenas como `/boot`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un sistema de archivos ext4 en la particion `/dev/sdb1`. <input type="text" class="fill-blank" data-answer="mkfs.ext4 /dev/sdb1" data-alt="mkfs -t ext4 /dev/sdb1,mke2fs -t ext4 /dev/sdb1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mkfs.ext4 /dev/sdb1. Existen varias formas equivalentes de crear un sistema de archivos ext4: `mkfs.ext4 /dev/sdb1`, `mkfs -t ext4 /dev/sdb1` y `mke2fs -t ext4 /dev/sdb1`. Todas ejecutan la misma operacion de formatear la particion con el sistema de archivos ext4. Este comando destruye todos los datos existentes en la particion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para formatear la particion `/dev/sda3` como area de swap. <input type="text" class="fill-blank" data-answer="mkswap /dev/sda3" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mkswap /dev/sda3. `mkswap` prepara una particion o archivo para ser usado como espacio de swap (intercambio). Despues de formatearlo, se activa con `swapon /dev/sda3`. Para que sea permanente, se debe agregar una entrada en `/etc/fstab`. Antes de ejecutar `mkswap`, la particion debe tener el tipo 82 (Linux swap) configurado con `fdisk`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para listar todas las particiones de todos los discos del sistema usando `fdisk`. <input type="text" class="fill-blank" data-answer="fdisk -l" data-alt="sudo fdisk -l" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** fdisk -l. La opcion `-l` de `fdisk` lista las tablas de particiones de todos los discos detectados en el sistema. Muestra informacion como el tamano del disco, tipo de tabla de particiones (MBR/GPT), y detalles de cada particion (inicio, fin, tamano, tipo). Para listar solo las particiones de un disco especifico se usa `fdisk -l /dev/sda`. Este comando generalmente requiere privilegios de root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando `parted` para crear una nueva tabla de particiones GPT en el disco `/dev/sda`. <input type="text" class="fill-blank" data-answer="parted /dev/sda mklabel gpt" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** parted /dev/sda mklabel gpt. El comando `parted /dev/sda mklabel gpt` crea una nueva tabla de particiones GPT en el disco especificado. Para crear una tabla MBR se usaria `parted /dev/sda mklabel msdos`. Este comando destruye toda la informacion de particiones existente en el disco. Recuerda que `parted` aplica los cambios inmediatamente, sin necesidad de un comando de escritura adicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para desactivar todo el swap del sistema. <input type="text" class="fill-blank" data-answer="swapoff -a" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** swapoff -a. La opcion `-a` de `swapoff` desactiva todas las areas de swap activas en el sistema. Para desactivar un area de swap especifica se usa `swapoff /dev/sdXN` o `swapoff /swapfile`. Este comando mueve todos los datos del swap de vuelta a la RAM, por lo que es importante asegurarse de tener suficiente memoria RAM disponible antes de desactivar el swap.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `mke2fs` es equivalente a `mkfs.ext2/ext3/ext4`. La opcion `-n` (dry-run) es imp...

</div>
<div class="flashcard-back">

**R:** `mke2fs` es equivalente a `mkfs.ext2/ext3/ext4`. La opcion `-n` (dry-run) es importante para verificar parametros antes de crear el FS. La opcion `-b` para el tamano de bloque y `-L` para la etiqueta son las mas preguntadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `/dev/sda1`?

</div>
<div class="flashcard-back">

**R:** Primera particion del primer disco

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `/dev/sda2`?

</div>
<div class="flashcard-back">

**R:** Segunda particion del primer disco

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `/dev/nvme0n1p1`?

</div>
<div class="flashcard-back">

**R:** Primera particion del primer disco NVMe

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `/dev/vda`?

</div>
<div class="flashcard-back">

**R:** Primer disco virtual (KVM/virtio)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `l`?

</div>
<div class="flashcard-back">

**R:** Listar tipos de particion conocidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-032">
<div class="flashcard-front">

**P:** Un servidor Linux detecta un nuevo disco SATA. El administrador ejecuta `ls /dev/sd*` y ve `/dev/sda`, `/dev/sda1`, `/dev/sda2` y `/dev/sdb`. Que representa `/dev/sdb` y por que no tiene particiones numeradas?

</div>
<div class="flashcard-back">

**R:** `/dev/sdb` representa el segundo disco completo (dispositivo de bloque) sin particiones creadas todavia. En Linux, los discos SATA/SCSI/USB se nombran secuencialmente como `/dev/sda`, `/dev/sdb`, `/dev/sdc`, etc. El disco completo no lleva numero, mientras que sus particiones se numeran: `sdb1`, `sdb2`, etc. Si `/dev/sdb` aparece sin particiones numeradas, significa que el disco esta sin particionar o tiene una tabla de particiones vacia. Para crear particiones, el administrador usaria `fdisk /dev/sdb` (para MBR) o `gdisk /dev/sdb` (para GPT). Los dispositivos de bloque permiten acceso aleatorio a los datos, a diferencia de los dispositivos de caracter que se leen secuencialmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-033">
<div class="flashcard-front">

**P:** Un servidor con 4 GB de RAM necesita swap. El administrador tiene una particion `/dev/sdc1` disponible. Escribe los 3 comandos necesarios para: (1) formatear la particion como swap, (2) activarla, y (3) verificar que esta activa. <input type="text" class="fill-blank" data-answer="mkswap /dev/sdc1 && swapon /dev/sdc1 && swapon --show" data-alt="mkswap /dev/sdc1; swapon /dev/sdc1; swapon --show,mkswap /dev/sdc1; swapon /dev/sdc1; cat /proc/swaps" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `mkswap /dev/sdc1 && swapon /dev/sdc1 && swapon --show`. La secuencia es: (1) `mkswap` formatea la particion con la estructura swap (equivale a "formatear"), (2) `swapon` activa el area de swap para uso inmediato, (3) `swapon --show` o `cat /proc/swaps` muestra las areas de swap activas con su tamano y uso. Para que el swap sea persistente tras reiniciar, se debe agregar una linea en `/etc/fstab` con formato: `/dev/sdc1 none swap sw 0 0`. La particion deberia tener el tipo `82` (Linux swap) configurado previamente con `fdisk`. El swap tambien puede crearse sobre un archivo en lugar de una particion dedicada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-034">
<div class="flashcard-front">

**P:** Un administrador debe elegir entre MBR y GPT para un disco de 4 TB que necesita 6 particiones. Cual debe usar y por que? Menciona al menos 3 limitaciones de MBR que GPT supera.

</div>
<div class="flashcard-back">

**R:** Debe usar **GPT** obligatoriamente. MBR no puede gestionar discos mayores de 2 TB, por lo que el disco de 4 TB quedaria parcialmente inutilizable. Tres limitaciones de MBR que GPT supera: (1) **Tamano de disco:** MBR soporta hasta 2 TB (direccionamiento de 32 bits con sectores de 512 bytes); GPT soporta hasta 9.4 ZB. (2) **Numero de particiones:** MBR permite maximo 4 primarias (necesita extendida + logicas para mas); GPT permite 128 particiones directamente sin distincion de tipos. (3) **Integridad de datos:** MBR guarda la tabla de particiones en un unico sector sin respaldo; GPT incluye verificacion CRC32 y mantiene una copia de seguridad de la tabla al final del disco. Ademas, GPT requiere firmware UEFI, mientras que MBR funciona con BIOS tradicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.1">
</div>

<div class="flashcard" data-id="104.1-fc-035">
<div class="flashcard-front">

**P:** Un candidato LPIC-1 responde lo siguiente en el examen: "Para crear swap: primero `swapon`, luego `mkswap`. Las particiones logicas empiezan en `sda4`. `parted` permite deshacer cambios con `q`." Identifica todos los errores en estas afirmaciones.

</div>
<div class="flashcard-back">

**R:** Hay 3 errores criticos, que son trampas clasicas del examen LPIC-1: (1) **Orden swap invertido:** El orden correcto es primero `mkswap` (formatear) y luego `swapon` (activar). Ejecutar `swapon` antes de `mkswap` fallara porque la particion no tiene la firma swap. (2) **Numeracion de logicas:** Las particiones logicas siempre empiezan en `sda5`, nunca en `sda4`. Los numeros 1-4 estan reservados para particiones primarias y extendidas en MBR, incluso si no se usan todos. (3) **`parted` no permite deshacer:** A diferencia de `fdisk` y `gdisk` (que almacenan cambios en memoria y permiten salir sin guardar con `q`), `parted` aplica cada operacion inmediatamente al disco. No existe comando de deshacer en `parted`. Otras trampas frecuentes: confundir los codigos de tipo (`82` swap vs `83` Linux vs `8e` LVM), y olvidar que XFS no se puede reducir de tamano.

</div>
</div>

---

