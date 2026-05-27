---
title: "204.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "204.1"
---

# Flashcards: 204.1 - Configuracion De Raid

> 24 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-001">
<div class="flashcard-front">

**P:** Cual es el numero minimo de discos necesarios para crear un array RAID 5?

</div>
<div class="flashcard-back">

**R:** b) 3. RAID 5 requiere un minimo de 3 discos porque necesita distribuir los datos y la paridad entre al menos tres dispositivos. Con dos discos no seria posible implementar el esquema de paridad distribuida que caracteriza a RAID 5.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-002">
<div class="flashcard-front">

**P:** Que comando se utiliza para crear un array RAID 1 con dos discos y un disco spare?

</div>
<div class="flashcard-back">

**R:** b) `mdadm --create /dev/md0 --level=1 --raid-devices=2 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1`. Se usa `--create` para crear nuevos arrays, `--raid-devices=2` indica que el mirror tiene 2 discos activos, y `--spare-devices=1` designa un disco como repuesto. Se proporcionan los tres dispositivos (2 activos + 1 spare).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-003">
<div class="flashcard-front">

**P:** En la salida de `/proc/mdstat`, que indica la notacion `[U_]`?

</div>
<div class="flashcard-back">

**R:** b) El array esta en estado degradado con un disco fallido. En `/proc/mdstat`, cada caracter entre corchetes representa un disco del array. `U` (Up) significa que el disco esta activo y funcionando. `_` (guion bajo) significa que el disco esta ausente o fallido. Por tanto, `[U_]` indica un array RAID 1 con un disco activo y uno fallido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-004">
<div class="flashcard-front">

**P:** Que archivo de configuracion debe actualizarse para que los arrays RAID se ensamblen automaticamente durante el arranque?

</div>
<div class="flashcard-back">

**R:** b) `/etc/mdadm.conf`. El archivo `/etc/mdadm.conf` (o `/etc/mdadm/mdadm.conf` en Debian) contiene las definiciones de los arrays RAID. Se genera con `mdadm --detail --scan` y es leido durante el arranque para reensamblar los arrays automaticamente. Nota: `/etc/fstab` se usa para el montaje, pero el ensamblado del array depende de `mdadm.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-005">
<div class="flashcard-front">

**P:** Dispones de 4 discos de 1 TB cada uno en RAID 6. Cual es la capacidad util del array?

</div>
<div class="flashcard-back">

**R:** b) 2 TB. RAID 6 utiliza doble paridad, por lo que la capacidad util es (N-2) discos. Con 4 discos de 1 TB: (4-2) x 1 TB = 2 TB. Los 2 TB restantes se usan para almacenar los dos bloques de paridad independientes, lo que permite tolerar la perdida simultanea de hasta 2 discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-006">
<div class="flashcard-front">

**P:** Cual es el procedimiento correcto para reemplazar un disco fallido en un array RAID?

</div>
<div class="flashcard-back">

**R:** b) Marcar el disco como fallido con `--fail`, retirarlo con `--remove`, agregar el nuevo con `--add`. El procedimiento correcto sin detener el array es: primero marcar el disco como fallido (`mdadm --fail /dev/md0 /dev/sdX`), luego retirarlo del array (`mdadm --remove /dev/md0 /dev/sdX`), reemplazar fisicamente el disco, particionar el nuevo disco, y finalmente agregarlo al array (`mdadm --add /dev/md0 /dev/sdY`). La reconstruccion comienza automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-007">
<div class="flashcard-front">

**P:** Que comando permite expandir un array RAID 5 de 3 a 4 discos?

</div>
<div class="flashcard-back">

**R:** b) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`. La opcion `--grow` de mdadm permite modificar un array existente. Se usa junto con `--raid-devices=4` para indicar el nuevo numero de discos activos y `--add` para agregar el nuevo disco. Despues de completar el crecimiento, es necesario redimensionar el sistema de archivos con `resize2fs` o `xfs_growfs`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-008">
<div class="flashcard-front">

**P:** Que nivel RAID ofrece la mejor combinacion de rendimiento y redundancia, pero requiere un minimo de 4 discos?

</div>
<div class="flashcard-back">

**R:** c) RAID 10. RAID 10 (1+0) combina mirroring (RAID 1) con striping (RAID 0), ofreciendo tanto alto rendimiento de lectura/escritura como redundancia. Requiere un minimo de 4 discos (2 pares de espejos). Aunque RAID 6 tambien requiere 4 discos, su rendimiento de escritura es inferior debido al calculo de doble paridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-009">
<div class="flashcard-front">

**P:** Un administrador ejecuta `mdadm --detail /dev/md0` y observa que un disco aparece como "spare rebuilding". Que significa esto?

</div>
<div class="flashcard-back">

**R:** b) El disco spare se ha activado y esta reconstruyendo los datos del disco fallido. Cuando un disco del array falla y hay un spare disponible, mdadm activa automaticamente el disco spare e inicia la reconstruccion (rebuild). Durante este proceso, el disco aparece como "spare rebuilding" en la salida de `--detail`. El progreso se puede monitorizar con `cat /proc/mdstat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-010">
<div class="flashcard-front">

**P:** Que comando elimina completamente los metadatos RAID del superbloque de un dispositivo para poder reutilizarlo?

</div>
<div class="flashcard-back">

**R:** b) `mdadm --zero-superblock /dev/sdb1`. El comando `mdadm --zero-superblock` borra los metadatos RAID almacenados en el superbloque del dispositivo. Esto es necesario cuando se quiere reutilizar un disco que pertenecioa a un array RAID, ya que sin limpiar el superbloque, mdadm podria intentar reensamblarlo en un array antiguo. Es una practica recomendada antes de reutilizar discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: Es importante saber que el software RAID en Linux se gestiona con `mdadm` y que ...

</div>
<div class="flashcard-back">

**R:** Es importante saber que el software RAID en Linux se gestiona con `mdadm` y que los dispositivos RAID aparecen como `/dev/mdX` (por ejemplo, `/dev/md0`, `/dev/md1`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: Memoriza el numero minimo de discos, la capacidad util y la tolerancia a fallos ...

</div>
<div class="flashcard-back">

**R:** Memoriza el numero minimo de discos, la capacidad util y la tolerancia a fallos de cada nivel. Son preguntas frecuentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: `/proc/mdstat` es la forma rapida de comprobar el estado del RAID. Los caractere...

</div>
<div class="flashcard-back">

**R:** `/proc/mdstat` es la forma rapida de comprobar el estado del RAID. Los caracteres `[UU]` indican discos activos (U=Up) y `[U_]` indica un disco fallido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Despues de crear o modificar un array, siempre hay que actualizar `/etc/mdadm.co...

</div>
<div class="flashcard-back">

**R:** Despues de crear o modificar un array, siempre hay que actualizar `/etc/mdadm.conf` con `mdadm --detail --scan` y luego actualizar el initramfs con `update-initramfs -u` (Debian) o `dracut -f` (RHEL).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-015">
<div class="flashcard-front">

**P:** Que hace el comando `--level=N`?

</div>
<div class="flashcard-back">

**R:** Nivel de RAID (0, 1, 5, 6, 10)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `--raid-devices=N`?

</div>
<div class="flashcard-back">

**R:** Numero de discos activos en el array

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `--spare-devices=N`?

</div>
<div class="flashcard-back">

**R:** Numero de discos de reserva (spare)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `--chunk=N`?

</div>
<div class="flashcard-back">

**R:** Tamano de bloque en KB (por defecto 512K)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `--bitmap=internal`?

</div>
<div class="flashcard-back">

**R:** Habilitar bitmap para resincronizacion rapida

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-020">
<div class="flashcard-front">

**P:** Que es/son Introduccion a RAID?

</div>
<div class="flashcard-back">

**R:** RAID (Redundant Array of Independent Disks) es una tecnologia que combina multiples discos fisicos en una unica unidad logica para mejorar el rendimiento, la redundancia o ambos. En el contexto de LPIC

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-021">
<div class="flashcard-front">

**P:** Que es/son Tabla resumen de niveles RAID?

</div>
<div class="flashcard-back">

**R:** | Nivel | Discos min. | Capacidad util | Tolerancia a fallos | Rendimiento lectura | Rendimiento escritura |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-022">
<div class="flashcard-front">

**P:** Que es/son Archivo de configuracion /etc/mdadm.conf?

</div>
<div class="flashcard-back">

**R:** Este archivo es fundamental para que los arrays se ensamblen automaticamente en el arranque:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-023">
<div class="flashcard-front">

**P:** Que es/son Consideraciones para el arranque?

</div>
<div class="flashcard-back">

**R:** - Para arrancar desde RAID, se recomienda RAID 1 para `/boot`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-024">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - Usar siempre discos spare para reconstruccion automatica

</div>
</div>

---

