---
title: "203.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "203.2"
---

# Flashcards: 203.2 - Mantenimiento Del Sistema De Archivos

> 24 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita reducir el porcentaje de bloques reservados para root en una particion ext4 de 2TB usada como almacenamiento de datos, donde el 5% por defecto desperdicia 100GB. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `tune2fs -m 1 /dev/sdb1`. `tune2fs -m` cambia el porcentaje de bloques reservados para el superusuario en un sistema de archivos ext2/3/4 existente. Con `-m 1` se reduce al 1%, liberando espacio significativo en discos grandes. `resize2fs` es para cambiar el tamano del FS, `e2fsck` para verificar, y `mkfs.ext4` destruiria todos los datos al crear un nuevo FS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cual es la herramienta correcta para reparar un sistema de archivos XFS dañado?

</div>
<div class="flashcard-back">

**R:** c) `xfs_repair /dev/sda3`. `xfs_repair` es la unica herramienta real para reparar sistemas de archivos XFS. Aunque `fsck.xfs` existe en el sistema, es un placeholder que no realiza ninguna operacion real de reparacion. `e2fsck` es exclusiva para ext2/3/4. `xfs_check` es una herramienta antigua de verificacion que ha sido reemplazada por `xfs_repair -n`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-003">
<div class="flashcard-front">

**P:** Un administrador quiere expandir un sistema de archivos XFS que esta en `/dev/sda3` montado en `/datos`. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** c) `xfs_growfs /datos`. `xfs_growfs` opera sobre el **punto de montaje**, no sobre el dispositivo. Ademas, el sistema de archivos XFS debe estar **montado** para poder expandirse. Esto contrasta con `resize2fs` que opera sobre el dispositivo. La opcion b) es incorrecta porque `xfs_growfs` espera un punto de montaje. `xfs_resize` no existe como comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando muestra informacion detallada del superbloque de un sistema de archivos ext4, incluyendo el numero de bloques, inodos y la ultima fecha de verificacion?

</div>
<div class="flashcard-back">

**R:** b) `dumpe2fs -h /dev/sda1`. `dumpe2fs -h` muestra la informacion del superbloque sin listar los descriptores de grupo, incluyendo UUID, etiqueta, conteo de bloques e inodos, tamano de bloque, estado del FS, conteo de montajes, fechas de verificacion y caracteristicas habilitadas. `tune2fs -l` tambien muestra informacion similar. `e2fsck -n` verifica sin reparar pero no esta diseñado para mostrar informacion del superbloque. `xfs_info` es para XFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que se debe hacer ANTES de reducir el tamano de un sistema de archivos ext4 con `resize2fs`?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar `e2fsck -f` sobre el sistema de archivos desmontado. Antes de reducir un sistema de archivos ext4, es obligatorio que este desmontado y que se ejecute una verificacion forzada con `e2fsck -f`. Si se intenta reducir sin pasar fsck, `resize2fs` mostrara un error indicando que primero debe ejecutarse e2fsck. Esto garantiza la integridad de los datos antes de la operacion potencialmente destructiva de reduccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-006">
<div class="flashcard-front">

**P:** Un administrador quiere verificar el estado de salud de un disco duro de forma rapida usando SMART. ¿Que comando es el mas adecuado?

</div>
<div class="flashcard-back">

**R:** b) `smartctl -H /dev/sda`. `smartctl -H` (Health) muestra de forma rapida el estado de salud general del disco, reportando "PASSED" o "FAILED". Es la forma mas directa de verificar si el disco esta en buen estado. La opcion `-a` muestra toda la informacion disponible (mas verbosa), `-t short` ejecuta un test que tarda varios minutos, y `-A` muestra los atributos sin el veredicto de salud resumido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-007">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre XFS es correcta?

</div>
<div class="flashcard-back">

**R:** b) XFS solo puede expandirse, nunca reducirse. Esta es una limitacion fundamental de XFS: solo soporta el crecimiento del sistema de archivos mediante `xfs_growfs`, pero no permite la reduccion. Si se necesita reducir una particion XFS, la unica opcion es respaldar los datos, crear un sistema de archivos nuevo mas pequeño y restaurar. Ademas, `xfs_growfs` requiere que el sistema de archivos este montado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando agrega un journal a un sistema de archivos ext2, convirtiendolo efectivamente en ext3?

</div>
<div class="flashcard-back">

**R:** b) `tune2fs -j /dev/sda1`. `tune2fs -j` agrega un journal a un sistema de archivos ext2 existente, convirtiendolo en ext3 sin destruir los datos. Esta es una forma no destructiva de actualizar el sistema de archivos. La opcion a) `mkfs.ext3` crearia un nuevo sistema de archivos desde cero, destruyendo todos los datos existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-009">
<div class="flashcard-front">

**P:** Un administrador configura `smartd` para monitorizar discos. ¿En que archivo se define la configuracion del demonio?

</div>
<div class="flashcard-back">

**R:** b) `/etc/smartd.conf`. El archivo `/etc/smartd.conf` contiene la configuracion del demonio `smartd`. En este archivo se especifican los discos a monitorizar, las direcciones de correo para alertas y la programacion de tests automaticos. La directiva `DEVICESCAN` puede usarse para monitorizar automaticamente todos los discos detectados. Tras modificar el archivo, se debe reiniciar el servicio con `systemctl restart smartd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita crear un sistema de archivos FAT32 en una memoria USB (`/dev/sdb1`) con la etiqueta "BACKUP". ¿Que comando es correcto?

</div>
<div class="flashcard-back">

**R:** a) `mkfs.fat -F 32 -n BACKUP /dev/sdb1`. `mkfs.fat` (o su alias `mkfs.vfat`) con la opcion `-F 32` crea un sistema de archivos FAT32. La opcion `-n` establece la etiqueta del volumen. Tambien se podria usar `mkfs.vfat -F 32 -n BACKUP /dev/sdb1`. La opcion `-F 16` crearia FAT16 en lugar de FAT32. La opcion b) crearia ext4, que no es compatible con la mayoria de dispositivos y sistemas operativos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: Los comandos `mkfs.ext4`, `mkfs.xfs`, `mkfs.btrfs` y `mkfs.vfat` son las formas ...

</div>
<div class="flashcard-back">

**R:** Los comandos `mkfs.ext4`, `mkfs.xfs`, `mkfs.btrfs` y `mkfs.vfat` son las formas directas de crear cada tipo de sistema de archivos. Tambien se puede usar `mkfs -t ext4 /dev/sdb1` como forma generica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: `tune2fs -m` cambia el porcentaje de bloques reservados (importante para partici...

</div>
<div class="flashcard-back">

**R:** `tune2fs -m` cambia el porcentaje de bloques reservados (importante para particiones de datos donde el 5% por defecto puede desperdiciar mucho espacio). `tune2fs -c` y `tune2fs -i` controlan cuando se fuerza una verificacion automatica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: `xfs_repair` se usa en lugar de `fsck.xfs` para sistemas XFS. El comando `fsck.x...

</div>
<div class="flashcard-back">

**R:** `xfs_repair` se usa en lugar de `fsck.xfs` para sistemas XFS. El comando `fsck.xfs` existe pero no hace nada real; es un placeholder. Ademas, `xfs_repair -L` fuerza la limpieza del log y puede causar perdida de datos, solo se usa como ultimo recurso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: `resize2fs` puede expandir un sistema ext4 **en linea** (montado), pero para red...

</div>
<div class="flashcard-back">

**R:** `resize2fs` puede expandir un sistema ext4 **en linea** (montado), pero para reducir, el sistema debe estar **desmontado** y se recomienda ejecutar `e2fsck -f` antes de la reduccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: XFS **solo puede expandirse**, nunca reducirse. Ademas, `xfs_growfs` opera sobre...

</div>
<div class="flashcard-back">

**R:** XFS **solo puede expandirse**, nunca reducirse. Ademas, `xfs_growfs` opera sobre el punto de montaje (no sobre el dispositivo) y el sistema de archivos debe estar montado. Esto contrasta con `resize2fs` que opera sobre el dispositivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-016">
<div class="flashcard-front">

**P:** Tip de examen: `smartctl -H /dev/sda` es la forma rapida de verificar la salud del disco. Si mu...

</div>
<div class="flashcard-back">

**R:** `smartctl -H /dev/sda` es la forma rapida de verificar la salud del disco. Si muestra "PASSED", el disco no reporta problemas criticos. Los atributos mas criticos son Reallocated Sector Count (ID 5) y Current Pending Sector (ID 197).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `mkfs.ext4`?

</div>
<div class="flashcard-back">

**R:** `mkfs.xfs`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `xfs_repair`?

</div>
<div class="flashcard-back">

**R:** `btrfs check`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `dumpe2fs`?

</div>
<div class="flashcard-back">

**R:** `xfs_info`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `tune2fs`?

</div>
<div class="flashcard-back">

**R:** `xfs_admin`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-021">
<div class="flashcard-front">

**P:** Que hace el comando `resize2fs`?

</div>
<div class="flashcard-back">

**R:** `xfs_growfs`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-022">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El mantenimiento adecuado de los sistemas de archivos es crucial para garantizar la integridad, el rendimiento y la fiabilidad del almacenamiento en sistemas Linux. Este subtema cubre la creacion de si

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-023">
<div class="flashcard-front">

**P:** Que es/son tune2fs - Ajuste de parametros ext2/3/4?

</div>
<div class="flashcard-back">

**R:** `tune2fs` es la herramienta principal para modificar parametros de sistemas de archivos de la familia ext. Funciona con ext2, ext3 y ext4.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="203.2">
</div>

<div class="flashcard" data-id="203.2-fc-024">
<div class="flashcard-front">

**P:** Que es/son Resumen de herramientas por sistema de archivos?

</div>
<div class="flashcard-back">

**R:** | Operacion | ext2/3/4 | XFS | Btrfs |

</div>
</div>

---

