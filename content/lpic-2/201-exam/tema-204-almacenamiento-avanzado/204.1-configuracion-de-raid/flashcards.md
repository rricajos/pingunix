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

> 40 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Un administrador tiene 5 discos de 2 TB configurados en RAID 5. ¿Cual es la capacidad util total del array?

</div>
<div class="flashcard-back">

**R:** c) 8 TB. En RAID 5, la capacidad util es (N-1) discos, donde N es el numero total de discos activos. Con 5 discos de 2 TB: (5-1) x 2 TB = 8 TB. Un disco equivalente de capacidad se dedica a almacenar la paridad distribuida entre todos los discos, lo que permite tolerar la perdida de un disco sin perder datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que comando genera automaticamente la configuracion de `/etc/mdadm.conf` a partir de los arrays activos?

</div>
<div class="flashcard-back">

**R:** b) `mdadm --detail --scan >> /etc/mdadm.conf`. El comando `mdadm --detail --scan` genera las lineas de configuracion `ARRAY` con los UUIDs de todos los arrays RAID activos en el sistema. Al redirigir la salida a `/etc/mdadm.conf`, se asegura que los arrays se reensamblen automaticamente durante el arranque. Despues de modificar este archivo, se debe actualizar el initramfs con `update-initramfs -u` o `dracut -f`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que nivel de RAID ofrece cero redundancia pero maximo rendimiento de lectura y escritura?

</div>
<div class="flashcard-back">

**R:** c) RAID 0. RAID 0 (striping) distribuye los datos entre todos los discos del array sin ninguna informacion de redundancia o paridad. Esto proporciona el maximo rendimiento tanto en lectura como en escritura, ya que las operaciones se paralelean entre discos. Sin embargo, si cualquier disco del array falla, se pierden TODOS los datos, lo que lo hace inadecuado para datos criticos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-014">
<div class="flashcard-front">

**P:** Despues de crear un array RAID en un sistema Debian, ¿que comando se debe ejecutar para actualizar el initramfs e incluir la configuracion RAID?

</div>
<div class="flashcard-back">

**R:** b) `update-initramfs -u`. En sistemas Debian/Ubuntu, `update-initramfs -u` regenera la imagen initramfs incluyendo los modulos RAID y la configuracion de `/etc/mdadm.conf`. Esto es esencial para que los arrays se ensamblen correctamente durante el arranque temprano del sistema. En RHEL/CentOS se usa `dracut -f` para el mismo proposito. `mkinitcpio` es especifico de Arch Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que tipo de particion debe usarse para discos que formaran parte de un array RAID software con mdadm en tablas de particion MBR?

</div>
<div class="flashcard-back">

**R:** c) Tipo `fd` (Linux RAID autodetect). Las particiones destinadas a RAID software deben tener el tipo `fd` (Linux RAID autodetect) en tablas MBR, o `da` en tablas GPT. Este tipo permite que el kernel detecte automaticamente las particiones RAID durante el arranque y las ensamble sin necesidad de configuracion adicional. Aunque mdadm puede funcionar con particiones tipo `83`, el uso de `fd` es la practica recomendada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-016">
<div class="flashcard-front">

**P:** Un administrador quiere verificar la integridad de los datos en un array RAID software. ¿Que archivo del sistema se utiliza para iniciar una verificacion (scrub)?

</div>
<div class="flashcard-back">

**R:** b) `/sys/block/md0/md/sync_action`. Para iniciar una verificacion de integridad (scrub) en un array RAID, se escribe `check` en el archivo `/sys/block/md0/md/sync_action` mediante `echo check > /sys/block/md0/md/sync_action`. El resultado se puede leer en `/sys/block/md0/md/mismatch_cnt`, que muestra el numero de sectores con discrepancias. Esta operacion se suele programar en un cron semanal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que directiva en `/etc/mdadm.conf` especifica la direccion de correo para alertas de fallo de RAID?

</div>
<div class="flashcard-back">

**R:** c) `MAILADDR`. La directiva `MAILADDR` en `/etc/mdadm.conf` define la direccion de correo electronico a la que se envian las alertas cuando se detectan eventos como fallos de disco o degradacion del array. Por ejemplo: `MAILADDR root@localhost` o `MAILADDR admin@ejemplo.com`. El demonio `mdadm --monitor` debe estar activo para que las notificaciones funcionen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-018">
<div class="flashcard-front">

**P:** Un administrador observa en `/proc/mdstat` que un array RAID 1 muestra `[2/1] [U_]`. ¿Que significa esto?

</div>
<div class="flashcard-back">

**R:** b) El array requiere 2 discos pero solo 1 esta activo; un disco ha fallado. La notacion `[2/1]` indica que el array fue configurado con 2 discos pero solo 1 esta activo. `[U_]` confirma el estado: `U` indica un disco activo (Up) y `_` indica un disco ausente o fallido. El array esta en estado degradado y funciona con redundancia reducida. Se debe reemplazar el disco fallido lo antes posible para restaurar la redundancia completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que nivel RAID soporta la perdida simultanea de hasta 2 discos?

</div>
<div class="flashcard-back">

**R:** d) RAID 6. RAID 6 utiliza doble paridad distribuida, lo que le permite tolerar la perdida simultanea de hasta 2 discos sin perdida de datos. Requiere un minimo de 4 discos y la capacidad util es (N-2). RAID 5 solo tolera 1 fallo. RAID 1 puede tolerar N-1 fallos (en un mirror de 2 discos, tolera 1 fallo). RAID 0 no tolera ningun fallo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que consideracion es importante al configurar `/boot` en un array RAID para poder arrancar el sistema?

</div>
<div class="flashcard-back">

**R:** b) `/boot` debe estar en RAID 1 y GRUB debe instalarse en todos los discos del array. Para arrancar desde RAID software, se recomienda usar RAID 1 para `/boot` porque el gestor de arranque (GRUB) puede leer directamente de cualquier disco del espejo. Ademas, GRUB debe instalarse en el MBR de cada disco del array con `grub-install /dev/sdX` para que el sistema pueda arrancar aunque un disco falle. RAID 5 o RAID 0 no son adecuados para `/boot` en la mayoria de configuraciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para ver el estado actual de todos los arrays RAID del sistema leyendo el archivo virtual del kernel?

</div>
<div class="flashcard-back">

**R:** cat /proc/mdstat. El archivo `/proc/mdstat` muestra en tiempo real el estado de todos los arrays RAID software del sistema, incluyendo el nivel RAID, los discos miembros, el estado de cada disco (`[UU]` para activos, `[U_]` para degradados) y el progreso de operaciones como reconstruccion o verificacion. Es la forma mas rapida de comprobar el estado RAID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para marcar el disco `/dev/sdb1` como fallido en el array `/dev/md0`?

</div>
<div class="flashcard-back">

**R:** mdadm --fail /dev/md0 /dev/sdb1. El comando `mdadm --fail` (o `-f`) marca un disco como fallido en un array RAID. Este es el primer paso en el procedimiento de reemplazo de un disco: primero se marca como fallido, luego se retira con `mdadm --remove`, se reemplaza fisicamente, y finalmente se agrega el nuevo disco con `mdadm --add`. La reconstruccion comienza automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para ver informacion detallada del array RAID `/dev/md0`, incluyendo estado de los discos y UUID?

</div>
<div class="flashcard-back">

**R:** mdadm --detail /dev/md0. El comando `mdadm --detail` muestra informacion completa sobre un array RAID, incluyendo el nivel, tamano, UUID, numero de dispositivos, estado de cada disco miembro (active, spare, faulty), progreso de reconstruccion y opciones de configuracion. Es mas detallado que `/proc/mdstat` y es esencial para diagnosticar problemas en arrays RAID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando detiene el array RAID `/dev/md0` para poder desmontar los discos o realizar mantenimiento?

</div>
<div class="flashcard-back">

**R:** mdadm --stop /dev/md0. El comando `mdadm --stop` desactiva un array RAID, liberando los discos miembros. El sistema de archivos debe estar desmontado antes de detener el array. Para volver a activarlo, se usa `mdadm --assemble /dev/md0` seguido de los dispositivos miembros, o `mdadm --assemble --scan` para reensamblar todos los arrays basandose en `/etc/mdadm.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando agrega el disco `/dev/sde1` como spare al array RAID `/dev/md0`?

</div>
<div class="flashcard-back">

**R:** mdadm --add /dev/md0 /dev/sde1. El comando `mdadm --add` agrega un disco a un array existente. Si el array ya tiene todos sus discos activos, el nuevo disco se configura automaticamente como spare (repuesto). Los discos spare permanecen inactivos hasta que un disco activo falla, momento en que se activa automaticamente la reconstruccion del array usando el spare.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-026">
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

<div class="flashcard" data-id="204.1-fc-027">
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

<div class="flashcard" data-id="204.1-fc-028">
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

<div class="flashcard" data-id="204.1-fc-029">
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

<div class="flashcard" data-id="204.1-fc-030">
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

<div class="flashcard" data-id="204.1-fc-031">
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

<div class="flashcard" data-id="204.1-fc-032">
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

<div class="flashcard" data-id="204.1-fc-033">
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

<div class="flashcard" data-id="204.1-fc-034">
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

<div class="flashcard" data-id="204.1-fc-035">
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

<div class="flashcard" data-id="204.1-fc-036">
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

<div class="flashcard" data-id="204.1-fc-037">
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

<div class="flashcard" data-id="204.1-fc-038">
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

<div class="flashcard" data-id="204.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - Usar siempre discos spare para reconstruccion automatica

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.1">
</div>

<div class="flashcard" data-id="204.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

