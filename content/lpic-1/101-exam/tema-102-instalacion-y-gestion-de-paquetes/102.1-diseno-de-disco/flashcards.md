---
title: "102.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "102.1"
---

# Flashcards: 102.1 - Diseno De Disco

> 26 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-001">
<div class="flashcard-front">

**P:** Un disco con tabla de particiones MBR tiene actualmente 3 particiones primarias y necesitas crear 4 particiones mas. Cual es la solucion correcta?

</div>
<div class="flashcard-back">

**R:** c) Crear la 4a particion como extendida y dentro de ella crear las 4 particiones logicas necesarias. MBR permite un maximo de 4 particiones primarias. La solucion es usar la 4a entrada como particion extendida, que actua como contenedor para multiples particiones logicas. Las particiones logicas se numeran a partir de 5 (sda5, sda6, etc.). No es posible convertir una particion primaria existente a logica sin eliminarla, y MBR no soporta mas de 4 entradas primarias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-002">
<div class="flashcard-front">

**P:** Cual es el tamano maximo de disco soportado por una tabla de particiones MBR?

</div>
<div class="flashcard-back">

**R:** b) 2 TB. MBR utiliza direcciones de 32 bits para los sectores del disco, lo que resulta en un maximo de 2^32 sectores x 512 bytes = 2 TB. Para discos mayores de 2 TB se debe usar GPT (GUID Partition Table), que soporta hasta 8 ZB teoricos. GPT ademas ofrece ventajas como redundancia de la tabla de particiones y verificacion CRC32.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-003">
<div class="flashcard-front">

**P:** En un servidor web con alto trafico que genera muchos logs, cual de los siguientes directorios es MAS importante separar en una particion independiente para proteger la estabilidad del sistema?

</div>
<div class="flashcard-back">

**R:** c) `/var`. El directorio `/var` contiene los logs del servidor web (Apache/Nginx), cache y datos variables que crecen de forma impredecible. Si los logs crecen sin control y `/var` comparte particion con `/`, la particion raiz podria llenarse completamente, provocando la caida del sistema. Separar `/var` en su propia particion evita que los logs excesivos afecten al resto del sistema operativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-004">
<div class="flashcard-front">

**P:** Que sistema de archivos debe tener obligatoriamente la EFI System Partition (ESP)?

</div>
<div class="flashcard-back">

**R:** c) FAT32. La especificacion UEFI requiere que la ESP (EFI System Partition) este formateada en FAT32. Esta particion se monta tipicamente en `/boot/efi`, tiene un tamano recomendado de 100-550 MB, y se identifica por el tipo de particion `EF00` en GPT. Contiene los cargadores de arranque (.efi) de los sistemas operativos instalados, cada uno en un subdirectorio propio como `/boot/efi/EFI/ubuntu/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-005">
<div class="flashcard-front">

**P:** En LVM, cual es el orden correcto de los componentes desde el nivel fisico hasta el nivel logico?

</div>
<div class="flashcard-back">

**R:** c) PV -> VG -> LV. El flujo de LVM es: primero se crean los Physical Volumes (PV) con `pvcreate` sobre las particiones o discos fisicos. Luego se agrupan en un Volume Group (VG) con `vgcreate`, formando un pool de almacenamiento. Finalmente, se crean Logical Volumes (LV) con `lvcreate` dentro del VG, que actuan como particiones virtuales sobre las cuales se crean los sistemas de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-006">
<div class="flashcard-front">

**P:** Un sistema con 4 GB de RAM necesita soporte para hibernacion. Cual es el tamano minimo recomendado para la particion de swap?

</div>
<div class="flashcard-back">

**R:** b) 4 GB (igual a la RAM). La hibernacion vuelca todo el contenido de la memoria RAM al espacio de swap, por lo que el swap debe ser al menos igual al tamano de la RAM. Con 4 GB de RAM, se necesitan al menos 4 GB de swap (idealmente un poco mas, como 5-6 GB). Sin espacio de swap suficiente, la hibernacion fallaria porque no hay donde almacenar el estado completo de la memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-007">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `parted` y `fdisk`/`gdisk` al realizar cambios en las particiones?

</div>
<div class="flashcard-back">

**R:** b) `parted` aplica los cambios inmediatamente, mientras que `fdisk` y `gdisk` esperan hasta que se ejecute el comando `w`. Esta es una diferencia critica entre las herramientas de particionado. En `fdisk` y `gdisk`, los cambios no se escriben en el disco hasta que el usuario pulsa `w` (write), lo que permite deshacer errores con `q` (quit). En `parted`, cada comando se ejecuta inmediatamente sobre el disco, lo que lo hace mas peligroso si se comete un error, ya que no se pueden deshacer los cambios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-008">
<div class="flashcard-front">

**P:** Cual es la linea correcta en `/etc/fstab` para montar la particion con UUID `a1b2-c3d4` en `/home` con sistema de archivos ext4, opciones por defecto con `nosuid`, y verificacion con fsck despues de la raiz?

</div>
<div class="flashcard-back">

**R:** b) `UUID=a1b2-c3d4  /home  ext4  defaults,nosuid  0  2`. El sexto campo (pass) controla el orden de verificacion con `fsck`: 0 significa no verificar, 1 es para la particion raiz `/` (se verifica primero), y 2 es para el resto de particiones (se verifican despues de la raiz). Usar UUID es mas fiable que nombres de dispositivo como `/dev/sdX` porque los nombres pueden cambiar al anadir o quitar discos. La opcion `nosuid` impide la ejecucion de programas con bits SUID en esa particion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-009">
<div class="flashcard-front">

**P:** Cuantas particiones permite GPT por defecto?

</div>
<div class="flashcard-back">

**R:** d) 128 particiones. GPT (GUID Partition Table) permite 128 particiones por defecto, un numero ampliable. A diferencia de MBR, GPT no necesita el concepto de particiones extendidas o logicas: todas las particiones son iguales. Ademas, GPT ofrece redundancia almacenando una copia de la tabla de particiones al final del disco, utiliza CRC32 para detectar errores y asigna un GUID unico a cada particion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-010">
<div class="flashcard-front">

**P:** Que comandos se utilizan para crear y activar una particion de swap en `/dev/sda3`?

</div>
<div class="flashcard-back">

**R:** b) `mkswap /dev/sda3` y luego `swapon /dev/sda3`. El comando `mkswap` formatea la particion como espacio de intercambio (swap) y `swapon` la activa para que el sistema comience a usarla. Para verificar que esta activa se pueden usar `swapon --show` o `free -h`. Para desactivarla se usa `swapoff /dev/sda3`. Para que sea permanente, se debe anadir una entrada en `/etc/fstab` con el formato: `UUID=<uuid>  none  swap  sw  0  0`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-011">
<div class="flashcard-front">

**P:** En un esquema MBR, a partir de que numero se enumeran las particiones logicas?

</div>
<div class="flashcard-back">

**R:** d) 5. En MBR, las particiones primarias y la extendida se numeran del 1 al 4 (sda1, sda2, sda3, sda4). Las particiones logicas, que se crean dentro de la particion extendida, siempre comienzan a partir del numero 5 (sda5, sda6, etc.), independientemente de cuantas particiones primarias existan realmente. Esto se aplica incluso si solo hay una particion primaria y una extendida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-012">
<div class="flashcard-front">

**P:** Que ventaja ofrece GPT sobre MBR respecto a la integridad de la tabla de particiones?

</div>
<div class="flashcard-back">

**R:** b) GPT almacena una copia de respaldo de la tabla de particiones al final del disco y utiliza CRC32 para verificacion. GPT ofrece redundancia almacenando una copia de seguridad de la tabla de particiones al final del disco. Ademas, utiliza checksums CRC32 para detectar errores en la tabla de particiones. Si la tabla principal se corrompe, el sistema puede usar la copia de respaldo. MBR no tiene esta redundancia: si el MBR se corrompe, se pierde toda la informacion de particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-013">
<div class="flashcard-front">

**P:** Por que es recomendable separar /home en su propia particion?

</div>
<div class="flashcard-back">

**R:** b) Porque permite reinstalar el sistema operativo sin perder los datos personales de los usuarios. Al separar `/home` en su propia particion, los datos personales de los usuarios (documentos, configuraciones, etc.) estan aislados del sistema operativo. Esto permite reinstalar o actualizar el SO formateando solo la particion raiz sin afectar a `/home`. Ademas, se pueden aplicar opciones de montaje como `nosuid` y `nodev` para mayor seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-014">
<div class="flashcard-front">

**P:** En el archivo /etc/fstab, que valor del campo pass (sexto campo) se debe asignar a la particion raiz /?

</div>
<div class="flashcard-back">

**R:** b) 1. El campo pass (sexto campo) de `/etc/fstab` controla el orden de verificacion del sistema de archivos con `fsck`. El valor 1 se reserva exclusivamente para la particion raiz `/`, que se verifica primero. El valor 2 se asigna al resto de particiones que deben verificarse despues de la raiz. El valor 0 indica que la particion no se debe verificar con fsck (usado para swap, particiones de solo lectura, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-015">
<div class="flashcard-front">

**P:** Que herramienta de particionado esta disenada especificamente para trabajar con tablas de particiones GPT?

</div>
<div class="flashcard-back">

**R:** c) gdisk. `gdisk` es la herramienta equivalente a `fdisk` pero disenada especificamente para tablas de particiones GPT. Tiene una interfaz similar a fdisk con los mismos comandos interactivos. `fdisk` es la herramienta clasica para MBR (aunque versiones modernas tambien soportan GPT). `parted` soporta tanto MBR como GPT. `cfdisk` es una version con interfaz ncurses de fdisk.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-016">
<div class="flashcard-front">

**P:** Que comando LVM se utiliza para ampliar el tamano de un volumen logico existente?

</div>
<div class="flashcard-back">

**R:** b) lvextend. `lvextend` se utiliza para aumentar el tamano de un volumen logico (LV) existente. Por ejemplo: `lvextend -L +10G /dev/vg_datos/lv_home` anade 10 GB al volumen. `vgextend` se usa para anadir un nuevo PV a un grupo de volumenes, no para ampliar un LV. `lvcreate` crea un nuevo LV. Despues de extender un LV, se debe redimensionar el sistema de archivos (por ejemplo con `resize2fs` para ext4).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-017">
<div class="flashcard-front">

**P:** Que opcion de montaje en /etc/fstab impide la ejecucion de archivos binarios en una particion?

</div>
<div class="flashcard-back">

**R:** c) noexec. La opcion `noexec` impide la ejecucion de cualquier archivo binario en la particion montada, lo cual es una medida de seguridad recomendada para particiones como `/tmp`. `nosuid` impide que los bits SUID/SGID tengan efecto. `nodev` impide la creacion de archivos de dispositivo. `ro` monta la particion como solo lectura. Estas opciones se suelen combinar para mayor seguridad: `noexec,nosuid,nodev`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-018">
<div class="flashcard-front">

**P:** Que contiene el MBR protector que GPT mantiene en el sector 0 del disco?

</div>
<div class="flashcard-back">

**R:** c) Una tabla de particiones MBR falsa que cubre todo el disco, para evitar que herramientas antiguas sobrescriban los datos GPT. El MBR protector (protective MBR) es una tabla de particiones MBR que GPT coloca en el sector 0 del disco. Contiene una unica entrada de particion que abarca todo el disco con un tipo especial (0xEE). Su proposito es proteger los datos GPT contra herramientas y sistemas operativos antiguos que no reconocen GPT, evitando que interpreten el disco como vacio y sobrescriban la tabla de particiones GPT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-019">
<div class="flashcard-front">

**P:** Cual es la regla clasica para dimensionar el swap en un sistema con 1 GB de RAM?

</div>
<div class="flashcard-back">

**R:** c) swap = 2 GB (doble de la RAM). Segun las reglas clasicas de dimensionamiento de swap: cuando la RAM es menor de 2 GB, se recomienda que el swap sea el doble de la RAM (2x). Con RAM entre 2-8 GB, el swap debe ser igual a la RAM. Con mas de 8 GB de RAM, el swap puede ser la mitad de la RAM o un minimo de 4 GB. Si se necesita soporte para hibernacion, el swap debe ser al menos igual al tamano de la RAM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-020">
<div class="flashcard-front">

**P:** Que tipo de particion tiene la ESP (EFI System Partition) en una tabla GPT, y en que punto se monta tipicamente?

</div>
<div class="flashcard-back">

**R:** b) Tipo EF00, montada en /boot/efi. La ESP (EFI System Partition) se identifica con el tipo de particion `EF00` en GPT y se monta tipicamente en `/boot/efi`. Debe estar formateada obligatoriamente en FAT32 (vfat) con un tamano recomendado de 100-550 MB. Contiene los archivos del cargador de arranque UEFI (.efi), organizados en subdirectorios por sistema operativo como `/boot/efi/EFI/ubuntu/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-021">
<div class="flashcard-front">

**P:** Que comando se utiliza para formatear una particion como espacio de intercambio (swap)?

</div>
<div class="flashcard-back">

**R:** mkswap. `mkswap` formatea una particion o archivo como espacio de intercambio. Se usa seguido del dispositivo o archivo: `mkswap /dev/sda3` o `mkswap /swapfile`. Despues de formatear, se activa con `swapon` y se puede verificar con `swapon --show` o `free -h`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-022">
<div class="flashcard-front">

**P:** Que comando se utiliza para activar una particion de swap?

</div>
<div class="flashcard-back">

**R:** swapon. `swapon` activa un dispositivo o archivo de swap para que el sistema comience a usarlo. Se usa seguido del dispositivo: `swapon /dev/sda3`. Con `swapon --show` se pueden ver las areas de swap activas. Para desactivar se usa `swapoff`. Para que sea persistente, se debe configurar en `/etc/fstab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-023">
<div class="flashcard-front">

**P:** Que comando LVM se usa para crear un volumen fisico (PV) sobre una particion?

</div>
<div class="flashcard-back">

**R:** pvcreate. `pvcreate` prepara una particion o disco para su uso con LVM, creando un Physical Volume (PV). Por ejemplo: `pvcreate /dev/sdb1`. Despues de crear los PVs, se agrupan en un Volume Group con `vgcreate` y se crean Logical Volumes con `lvcreate`. Para ver informacion sobre PVs existentes se usa `pvdisplay` o `pvs`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-024">
<div class="flashcard-front">

**P:** Que herramienta interactiva de particionado aplica los cambios inmediatamente al disco, sin esperar a un comando de escritura?

</div>
<div class="flashcard-back">

**R:** parted. `parted` aplica los cambios inmediatamente al ejecutar cada comando, a diferencia de `fdisk` y `gdisk` que mantienen los cambios en un buffer hasta que se ejecuta el comando `w` (write). Esto hace que `parted` sea mas peligroso ante errores, ya que no se puede cancelar con `q`. Soporta tanto MBR como GPT y permite redimensionar particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-025">
<div class="flashcard-front">

**P:** Que comando lista los dispositivos de bloque del sistema en formato de arbol?

</div>
<div class="flashcard-back">

**R:** lsblk. `lsblk` lista los dispositivos de bloque (discos, particiones, LVM) en formato de arbol mostrando las relaciones entre discos y sus particiones. Con la opcion `-f` muestra el sistema de archivos de cada particion. Con `-o NAME,SIZE,TYPE,MOUNTPOINT` se pueden seleccionar columnas especificas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.1">
</div>

<div class="flashcard" data-id="102.1-fc-026">
<div class="flashcard-front">

**P:** Que es/son 8. /etc/fstab?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/fstab` define como se montan las particiones automaticamente al arrancar el sistema.

</div>
</div>

---

