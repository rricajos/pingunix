---
title: "364.3 - Ejercicios: LVM Avanzado"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.3"
peso: 2
tags:
  - lpic-3
  - tema-364
  - ejercicios
  - lvm
  - thin-provisioning
  - vdo
---

# 364.3 - Ejercicios: LVM Avanzado

### Pregunta 1
¿Que permite el thin provisioning de LVM?

a) Comprimir datos automaticamente
b) Crear LVs cuyo tamaño virtual excede el almacenamiento fisico real
c) Replicar datos entre multiples PVs
d) Cifrar volumenes logicos

<details><summary>Respuesta</summary>

**b) Crear LVs cuyo tamaño virtual excede el almacenamiento fisico real**

El thin provisioning permite overprovisioning: crear volumenes logicos cuyo tamaño total supera el espacio fisico disponible. El espacio real se asigna dinamicamente solo cuando se escriben datos.
</details>

### Pregunta 2
¿Que comando crea un thin pool de 100 GB llamado "mi_pool" en el VG "mi_vg"?

a) `lvcreate -L 100G -n mi_pool mi_vg`
b) `lvcreate --type thin-pool -L 100G -n mi_pool mi_vg`
c) `lvcreate --thin -L 100G -n mi_pool mi_vg`
d) `lvcreate --pool -L 100G -n mi_pool mi_vg`

<details><summary>Respuesta</summary>

**b) `lvcreate --type thin-pool -L 100G -n mi_pool mi_vg`**

`--type thin-pool` crea un pool de thin provisioning. Despues se pueden crear thin LVs dentro del pool con `lvcreate --type thin -V tamaño --thinpool mi_pool`.
</details>

### Pregunta 3
¿Que herramienta de VDO proporciona estadisticas de deduplicacion y compresion?

a) `vdo status`
b) `vdostats`
c) `vdo info`
d) `lvs --vdo`

<details><summary>Respuesta</summary>

**b) `vdostats`**

`vdostats --human-readable` muestra las estadisticas de uso, incluyendo el espacio fisico, logico, ahorro por deduplicacion y compresion.
</details>

### Pregunta 4
¿Que comando migra los datos de un PV a otro sin tiempo de inactividad?

a) `pvresize`
b) `pvchange`
c) `pvmove`
d) `pvcopy`

<details><summary>Respuesta</summary>

**c) `pvmove`**

`pvmove /dev/origen /dev/destino` migra todos los LVs del PV de origen al destino de forma online, sin necesidad de desmontar los volumenes logicos.
</details>

### Pregunta 5
¿Que politica de cache LVM es la predeterminada y recomendada?

a) `mq`
b) `smq`
c) `lru`
d) `fifo`

<details><summary>Respuesta</summary>

**b) `smq`**

SMQ (Stochastic Multi Queue) es la politica de cache predeterminada y recomendada para dm-cache/lvmcache. Es mas eficiente y usa menos memoria que la politica `mq` anterior.
</details>

### Pregunta 6
¿Donde almacena LVM automaticamente las copias de seguridad de metadatos?

a) `/var/lib/lvm/`
b) `/etc/lvm/backup/` y `/etc/lvm/archive/`
c) `/boot/lvm/`
d) `/proc/lvm/metadata/`

<details><summary>Respuesta</summary>

**b) `/etc/lvm/backup/` y `/etc/lvm/archive/`**

`/etc/lvm/backup/` contiene el backup mas reciente de cada VG. `/etc/lvm/archive/` contiene el historial de todos los cambios. Se pueden restaurar con `vgcfgrestore`.
</details>

### Pregunta 7
¿Que tipo de RAID LVM crea un espejo de datos?

a) `raid0`
b) `raid1`
c) `raid5`
d) `striped`

<details><summary>Respuesta</summary>

**b) `raid1`**

`lvcreate --type raid1 -m 1` crea un LV con espejo (mirror). El parametro `-m 1` indica una copia adicional (total 2 copias de los datos).
</details>

### Pregunta 8
¿Que hace el comando `lvconvert --uncache mi_vg/datos`?

a) Elimina el LV de datos
b) Elimina el cache SSD sin perder los datos del LV
c) Convierte el cache a modo writethrough
d) Limpia el cache de datos sucios

<details><summary>Respuesta</summary>

**b) Elimina el cache SSD sin perder los datos del LV**

`--uncache` primero vuelca los datos sucios (dirty) del cache al disco principal, y luego elimina el cache pool. El LV de datos sigue funcionando sin cache.
</details>

### Pregunta 9
¿Que sistema de archivos se recomienda sobre VDO?

a) ext4
b) btrfs
c) XFS
d) GFS2

<details><summary>Respuesta</summary>

**c) XFS**

XFS es el sistema de archivos recomendado sobre VDO por Red Hat. Se debe usar `mkfs.xfs -K` (sin descartar bloques) para que VDO pueda gestionar correctamente la deduplicacion.
</details>

### Pregunta 10
¿Que modo de activacion LVM permite que solo un nodo del cluster acceda al LV?

a) `lvchange -a y`
b) `lvchange -a ey`
c) `lvchange -a sy`
d) `lvchange -a ly`

<details><summary>Respuesta</summary>

**b) `lvchange -a ey`**

El modo exclusivo (`-a ey`) asegura que solo un nodo del cluster puede activar y acceder al LV. Es el modo adecuado para LVs que no usan un sistema de archivos cluster. `-a sy` (compartido) permite acceso desde multiples nodos.
</details>

### Pregunta 11

¿Que parametro en `lvm.conf` controla el porcentaje de uso del thin pool a partir del cual se activa la extension automatica?

a) `thin_pool_autoextend_percent`
b) `thin_pool_autoextend_threshold`
c) `thin_pool_max_usage`
d) `thin_pool_alert_level`

<details><summary>Respuesta</summary>

**b) `thin_pool_autoextend_threshold`**

`thin_pool_autoextend_threshold` en `lvm.conf` define el porcentaje de uso del pool que dispara la extension automatica. Por ejemplo, un valor de 70 significa que cuando el pool alcanza el 70% de uso, se extiende automaticamente segun `thin_pool_autoextend_percent`.
</details>

### Pregunta 12

¿Que ventaja principal tienen los snapshots thin sobre los snapshots LVM tradicionales?

a) Son mas rapidos de crear
b) No reservan espacio previamente y solo ocupan espacio por bloques modificados
c) Permiten mas de un nivel de snapshot
d) Son compatibles con mas sistemas de archivos

<details><summary>Respuesta</summary>

**b) No reservan espacio previamente y solo ocupan espacio por bloques modificados**

Los snapshots thin son extremadamente eficientes porque no requieren reservar espacio por adelantado. El espacio se asigna dinamicamente del thin pool solo cuando los bloques originales se modifican, siguiendo el principio de copy-on-write.
</details>

### Pregunta 13

¿Que tipo de LVM RAID equivale a RAID 10 (espejo + stripe)?

a) `raid1`
b) `raid5`
c) `raid6`
d) `raid10`

<details><summary>Respuesta</summary>

**d) `raid10`**

`lvcreate --type raid10` crea un LV con RAID 10, que combina espejo (mirroring) con segmentacion (striping). Proporciona tanto redundancia como rendimiento mejorado, siendo ideal para cargas de trabajo con alta demanda de E/S.
</details>

### Pregunta 14

¿Que comando convierte un LV normal existente en un LV con espejo RAID 1?

a) `lvcreate --type raid1 -m 1 mi_vg/lv_datos`
b) `lvconvert --type raid1 -m 1 mi_vg/lv_datos`
c) `lvchange --raid1 -m 1 mi_vg/lv_datos`
d) `lvextend --mirror 1 mi_vg/lv_datos`

<details><summary>Respuesta</summary>

**b) `lvconvert --type raid1 -m 1 mi_vg/lv_datos`**

`lvconvert --type raid1 -m 1` convierte un LV existente en un LV espejado con una copia adicional (total 2 copias). La sincronizacion se realiza en segundo plano mientras el LV sigue disponible.
</details>

### Pregunta 15

¿Que proporciona VDO (Virtual Data Optimizer) ademas de la deduplicacion?

a) Cifrado de datos
b) Compresion en linea
c) Replicacion entre nodos
d) Snapshots automaticos

<details><summary>Respuesta</summary>

**b) Compresion en linea**

VDO proporciona tanto deduplicacion como compresion en linea. La deduplicacion elimina bloques duplicados y la compresion reduce el tamaño de los bloques unicos. Ambas se pueden habilitar o deshabilitar independientemente.
</details>

### Pregunta 16

¿Que comando restaura los metadatos de LVM de un VG a partir del backup mas reciente?

a) `vgrestore mi_vg`
b) `vgcfgrestore mi_vg`
c) `lvmrestore mi_vg`
d) `pvrestore mi_vg`

<details><summary>Respuesta</summary>

**b) `vgcfgrestore mi_vg`**

`vgcfgrestore` restaura la configuracion de metadatos de un VG desde los archivos de backup almacenados en `/etc/lvm/backup/`. Para restaurar una version especifica del archivo, se usa la opcion `-f` con la ruta del archivo.
</details>

### Pregunta 17

¿Que modo de activacion LVM se usa con la opcion `-a sy` y para que sirve?

a) Modo sincronizado, para sincronizar LVs entre nodos
b) Modo compartido, para que multiples nodos accedan al LV
c) Modo sistema, para activar durante el arranque
d) Modo seguro, para verificar la integridad antes de activar

<details><summary>Respuesta</summary>

**b) Modo compartido, para que multiples nodos accedan al LV**

El modo compartido (`-a sy`) permite que multiples nodos del cluster activen y accedan al LV simultaneamente. Requiere clvmd o lvmlockd y se usa con sistemas de archivos cluster como GFS2 u OCFS2.
</details>

### Pregunta 18

¿Que opcion de `mkfs.xfs` se recomienda al crear un sistema de archivos sobre un dispositivo VDO?

a) `-f`
b) `-K`
c) `-n`
d) `-d`

<details><summary>Respuesta</summary>

**b) `-K`**

La opcion `-K` de `mkfs.xfs` indica que no se deben enviar operaciones de descarte (discard/trim) durante el formateo. Esto es importante para VDO porque las operaciones de descarte interferiran con la gestion de bloques de VDO.
</details>

### Pregunta 19

¿Que comando de VDO muestra las estadisticas de ahorro por deduplicacion y compresion en formato legible?

a) `vdo status --verbose`
b) `vdostats --human-readable`
c) `vdo info --stats`
d) `vdoinfo --human-readable`

<details><summary>Respuesta</summary>

**b) `vdostats --human-readable`**

`vdostats --human-readable` muestra las estadisticas de uso incluyendo el espacio fisico utilizado, el espacio logico reportado, el porcentaje de uso y el porcentaje de ahorro por deduplicacion y compresion.
</details>

### Pregunta 20

¿Que sucede cuando un thin pool LVM alcanza el 100% de uso sin extension automatica configurada?

a) Los LVs thin se redimensionan automaticamente
b) Las escrituras en los thin LVs fallan y pueden producirse errores de E/S
c) El pool se extiende automaticamente al siguiente disco
d) Los datos mas antiguos se eliminan para hacer espacio

<details><summary>Respuesta</summary>

**b) Las escrituras en los thin LVs fallan y pueden producirse errores de E/S**

Cuando un thin pool se llena al 100%, no hay espacio para asignar nuevos bloques y las escrituras fallan con errores de E/S. Es critico monitorizar el uso del pool y configurar alertas o extension automatica para evitar esta situacion.
</details>

### Pregunta 21

Escribe el comando para crear un thin LV de 200 GB llamado "lv_web" dentro del thin pool "mi_pool" en el VG "mi_vg".

<input type="text" class="fill-blank" data-answer="lvcreate --type thin -V 200G --thinpool mi_pool -n lv_web mi_vg" data-alt="lvcreate -V 200G --thinpool mi_pool -n lv_web mi_vg" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lvcreate --type thin -V 200G --thinpool mi_pool -n lv_web mi_vg**

`lvcreate --type thin` crea un volumen logico thin provisioned dentro de un pool existente. `-V` especifica el tamaño virtual (puede exceder el tamaño del pool) y `--thinpool` indica el pool al que pertenece.
</details>

### Pregunta 22

Escribe el comando para migrar todos los datos del PV /dev/sdb al PV /dev/sdc en linea usando LVM.

<input type="text" class="fill-blank" data-answer="pvmove /dev/sdb /dev/sdc" data-alt="pvmove /dev/sdb /dev/sdc" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pvmove /dev/sdb /dev/sdc**

`pvmove` migra todos los extents (y por tanto todos los LVs) del PV origen al PV destino sin tiempo de inactividad. Es esencial para reemplazar discos sin interrumpir el servicio. Los LVs permanecen accesibles durante la migracion.
</details>

### Pregunta 23

Escribe el comando para crear un dispositivo VDO llamado "vdo1" en /dev/sdb con un tamaño logico de 1 TB.

<input type="text" class="fill-blank" data-answer="vdo create --name=vdo1 --device=/dev/sdb --vdoLogicalSize=1T" data-alt="vdo create --name vdo1 --device /dev/sdb --vdoLogicalSize 1T" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vdo create --name=vdo1 --device=/dev/sdb --vdoLogicalSize=1T**

`vdo create` crea un nuevo dispositivo VDO con deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor que el tamaño fisico del dispositivo (thin provisioning). El dispositivo resultante aparece en `/dev/mapper/vdo1`.
</details>

### Pregunta 24

Escribe el comando para forzar la resincronizacion de un LV RAID 1 llamado "lv_raid1" en el VG "mi_vg".

<input type="text" class="fill-blank" data-answer="lvchange --resync mi_vg/lv_raid1" data-alt="lvchange --resync mi_vg/lv_raid1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lvchange --resync mi_vg/lv_raid1**

`lvchange --resync` fuerza una resincronizacion completa entre las copias de un LV RAID. Es util despues de recuperarse de un fallo para asegurar que todas las copias de los datos estan perfectamente sincronizadas.
</details>

### Pregunta 25

Escribe el comando para eliminar el cache SSD de un LV llamado "datos" en el VG "mi_vg" sin perder datos.

<input type="text" class="fill-blank" data-answer="lvconvert --uncache mi_vg/datos" data-alt="lvconvert --uncache mi_vg/datos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lvconvert --uncache mi_vg/datos**

`lvconvert --uncache` vuelca primero todos los bloques sucios del cache SSD al almacenamiento principal y luego elimina el cache pool. El LV de datos continua funcionando normalmente sin la capa de cache.
</details>
