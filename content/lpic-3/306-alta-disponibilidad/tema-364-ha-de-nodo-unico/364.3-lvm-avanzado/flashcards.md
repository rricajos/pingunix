---
title: "364.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.3"
---

# Flashcards: 364.3 - Lvm Avanzado

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-001">
<div class="flashcard-front">

**P:** ¿Que permite el thin provisioning de LVM?

</div>
<div class="flashcard-back">

**R:** b) Crear LVs cuyo tamaño virtual excede el almacenamiento fisico real. El thin provisioning permite overprovisioning: crear volumenes logicos cuyo tamaño total supera el espacio fisico disponible. El espacio real se asigna dinamicamente solo cuando se escriben datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando crea un thin pool de 100 GB llamado "mi_pool" en el VG "mi_vg"?

</div>
<div class="flashcard-back">

**R:** b) `lvcreate --type thin-pool -L 100G -n mi_pool mi_vg`. `--type thin-pool` crea un pool de thin provisioning. Despues se pueden crear thin LVs dentro del pool con `lvcreate --type thin -V tamaño --thinpool mi_pool`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que herramienta de VDO proporciona estadisticas de deduplicacion y compresion?

</div>
<div class="flashcard-back">

**R:** b) `vdostats`. `vdostats --human-readable` muestra las estadisticas de uso, incluyendo el espacio fisico, logico, ahorro por deduplicacion y compresion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando migra los datos de un PV a otro sin tiempo de inactividad?

</div>
<div class="flashcard-back">

**R:** c) `pvmove`. `pvmove /dev/origen /dev/destino` migra todos los LVs del PV de origen al destino de forma online, sin necesidad de desmontar los volumenes logicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que politica de cache LVM es la predeterminada y recomendada?

</div>
<div class="flashcard-back">

**R:** b) `smq`. SMQ (Stochastic Multi Queue) es la politica de cache predeterminada y recomendada para dm-cache/lvmcache. Es mas eficiente y usa menos memoria que la politica `mq` anterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-006">
<div class="flashcard-front">

**P:** ¿Donde almacena LVM automaticamente las copias de seguridad de metadatos?

</div>
<div class="flashcard-back">

**R:** b) `/etc/lvm/backup/` y `/etc/lvm/archive/`. `/etc/lvm/backup/` contiene el backup mas reciente de cada VG. `/etc/lvm/archive/` contiene el historial de todos los cambios. Se pueden restaurar con `vgcfgrestore`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-007">
<div class="flashcard-front">

**P:** ¿Que tipo de RAID LVM crea un espejo de datos?

</div>
<div class="flashcard-back">

**R:** b) `raid1`. `lvcreate --type raid1 -m 1` crea un LV con espejo (mirror). El parametro `-m 1` indica una copia adicional (total 2 copias de los datos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-008">
<div class="flashcard-front">

**P:** ¿Que hace el comando `lvconvert --uncache mi_vg/datos`?

</div>
<div class="flashcard-back">

**R:** b) Elimina el cache SSD sin perder los datos del LV. `--uncache` primero vuelca los datos sucios (dirty) del cache al disco principal, y luego elimina el cache pool. El LV de datos sigue funcionando sin cache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que sistema de archivos se recomienda sobre VDO?

</div>
<div class="flashcard-back">

**R:** c) XFS. XFS es el sistema de archivos recomendado sobre VDO por Red Hat. Se debe usar `mkfs.xfs -K` (sin descartar bloques) para que VDO pueda gestionar correctamente la deduplicacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-010">
<div class="flashcard-front">

**P:** ¿Que modo de activacion LVM permite que solo un nodo del cluster acceda al LV?

</div>
<div class="flashcard-back">

**R:** b) `lvchange -a ey`. El modo exclusivo (`-a ey`) asegura que solo un nodo del cluster puede activar y acceder al LV. Es el modo adecuado para LVs que no usan un sistema de archivos cluster. `-a sy` (compartido) permite acceso desde multiples nodos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-011">
<div class="flashcard-front">

**P:** ¿Que parametro en `lvm.conf` controla el porcentaje de uso del thin pool a partir del cual se activa la extension automatica?

</div>
<div class="flashcard-back">

**R:** b) `thin_pool_autoextend_threshold`. `thin_pool_autoextend_threshold` en `lvm.conf` define el porcentaje de uso del pool que dispara la extension automatica. Por ejemplo, un valor de 70 significa que cuando el pool alcanza el 70% de uso, se extiende automaticamente segun `thin_pool_autoextend_percent`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-012">
<div class="flashcard-front">

**P:** ¿Que ventaja principal tienen los snapshots thin sobre los snapshots LVM tradicionales?

</div>
<div class="flashcard-back">

**R:** b) No reservan espacio previamente y solo ocupan espacio por bloques modificados. Los snapshots thin son extremadamente eficientes porque no requieren reservar espacio por adelantado. El espacio se asigna dinamicamente del thin pool solo cuando los bloques originales se modifican, siguiendo el principio de copy-on-write.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-013">
<div class="flashcard-front">

**P:** ¿Que tipo de LVM RAID equivale a RAID 10 (espejo + stripe)?

</div>
<div class="flashcard-back">

**R:** d) `raid10`. `lvcreate --type raid10` crea un LV con RAID 10, que combina espejo (mirroring) con segmentacion (striping). Proporciona tanto redundancia como rendimiento mejorado, siendo ideal para cargas de trabajo con alta demanda de E/S.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-014">
<div class="flashcard-front">

**P:** ¿Que comando convierte un LV normal existente en un LV con espejo RAID 1?

</div>
<div class="flashcard-back">

**R:** b) `lvconvert --type raid1 -m 1 mi_vg/lv_datos`. `lvconvert --type raid1 -m 1` convierte un LV existente en un LV espejado con una copia adicional (total 2 copias). La sincronizacion se realiza en segundo plano mientras el LV sigue disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que proporciona VDO (Virtual Data Optimizer) ademas de la deduplicacion?

</div>
<div class="flashcard-back">

**R:** b) Compresion en linea. VDO proporciona tanto deduplicacion como compresion en linea. La deduplicacion elimina bloques duplicados y la compresion reduce el tamaño de los bloques unicos. Ambas se pueden habilitar o deshabilitar independientemente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando restaura los metadatos de LVM de un VG a partir del backup mas reciente?

</div>
<div class="flashcard-back">

**R:** b) `vgcfgrestore mi_vg`. `vgcfgrestore` restaura la configuracion de metadatos de un VG desde los archivos de backup almacenados en `/etc/lvm/backup/`. Para restaurar una version especifica del archivo, se usa la opcion `-f` con la ruta del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que modo de activacion LVM se usa con la opcion `-a sy` y para que sirve?

</div>
<div class="flashcard-back">

**R:** b) Modo compartido, para que multiples nodos accedan al LV. El modo compartido (`-a sy`) permite que multiples nodos del cluster activen y accedan al LV simultaneamente. Requiere clvmd o lvmlockd y se usa con sistemas de archivos cluster como GFS2 u OCFS2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que opcion de `mkfs.xfs` se recomienda al crear un sistema de archivos sobre un dispositivo VDO?

</div>
<div class="flashcard-back">

**R:** b) `-K`. La opcion `-K` de `mkfs.xfs` indica que no se deben enviar operaciones de descarte (discard/trim) durante el formateo. Esto es importante para VDO porque las operaciones de descarte interferiran con la gestion de bloques de VDO.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando de VDO muestra las estadisticas de ahorro por deduplicacion y compresion en formato legible?

</div>
<div class="flashcard-back">

**R:** b) `vdostats --human-readable`. `vdostats --human-readable` muestra las estadisticas de uso incluyendo el espacio fisico utilizado, el espacio logico reportado, el porcentaje de uso y el porcentaje de ahorro por deduplicacion y compresion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que sucede cuando un thin pool LVM alcanza el 100% de uso sin extension automatica configurada?

</div>
<div class="flashcard-back">

**R:** b) Las escrituras en los thin LVs fallan y pueden producirse errores de E/S. Cuando un thin pool se llena al 100%, no hay espacio para asignar nuevos bloques y las escrituras fallan con errores de E/S. Es critico monitorizar el uso del pool y configurar alertas o extension automatica para evitar esta situacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un thin LV de 200 GB llamado "lv_web" dentro del thin pool "mi_pool" en el VG "mi_vg". <input type="text" class="fill-blank" data-answer="lvcreate --type thin -V 200G --thinpool mi_pool -n lv_web mi_vg" data-alt="lvcreate -V 200G --thinpool mi_pool -n lv_web mi_vg" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lvcreate --type thin -V 200G --thinpool mi_pool -n lv_web mi_vg. `lvcreate --type thin` crea un volumen logico thin provisioned dentro de un pool existente. `-V` especifica el tamaño virtual (puede exceder el tamaño del pool) y `--thinpool` indica el pool al que pertenece.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para migrar todos los datos del PV /dev/sdb al PV /dev/sdc en linea usando LVM. <input type="text" class="fill-blank" data-answer="pvmove /dev/sdb /dev/sdc" data-alt="pvmove /dev/sdb /dev/sdc" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** pvmove /dev/sdb /dev/sdc. `pvmove` migra todos los extents (y por tanto todos los LVs) del PV origen al PV destino sin tiempo de inactividad. Es esencial para reemplazar discos sin interrumpir el servicio. Los LVs permanecen accesibles durante la migracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para crear un dispositivo VDO llamado "vdo1" en /dev/sdb con un tamaño logico de 1 TB. <input type="text" class="fill-blank" data-answer="vdo create --name=vdo1 --device=/dev/sdb --vdoLogicalSize=1T" data-alt="vdo create --name vdo1 --device /dev/sdb --vdoLogicalSize 1T" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** vdo create --name=vdo1 --device=/dev/sdb --vdoLogicalSize=1T. `vdo create` crea un nuevo dispositivo VDO con deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor que el tamaño fisico del dispositivo (thin provisioning). El dispositivo resultante aparece en `/dev/mapper/vdo1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para forzar la resincronizacion de un LV RAID 1 llamado "lv_raid1" en el VG "mi_vg". <input type="text" class="fill-blank" data-answer="lvchange --resync mi_vg/lv_raid1" data-alt="lvchange --resync mi_vg/lv_raid1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lvchange --resync mi_vg/lv_raid1. `lvchange --resync` fuerza una resincronizacion completa entre las copias de un LV RAID. Es util despues de recuperarse de un fallo para asegurar que todas las copias de los datos estan perfectamente sincronizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar el cache SSD de un LV llamado "datos" en el VG "mi_vg" sin perder datos. <input type="text" class="fill-blank" data-answer="lvconvert --uncache mi_vg/datos" data-alt="lvconvert --uncache mi_vg/datos" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lvconvert --uncache mi_vg/datos. `lvconvert --uncache` vuelca primero todos los bloques sucios del cache SSD al almacenamiento principal y luego elimina el cache pool. El LV de datos continua funcionando normalmente sin la capa de cache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El thin provisioning permite **overprovisioning** (asignar mas espacio virtual q...

</div>
<div class="flashcard-back">

**R:** El thin provisioning permite **overprovisioning** (asignar mas espacio virtual que real). Es fundamental monitorizar el uso real del pool para evitar quedarse sin espacio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La politica `smq` es la predeterminada y recomendada. `writethrough` es mas segu...

</div>
<div class="flashcard-back">

**R:** La politica `smq` es la predeterminada y recomendada. `writethrough` es mas seguro (escritura en HDD y SSD), `writeback` es mas rapido (escritura primero en SSD).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: VDO proporciona deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor ...

</div>
<div class="flashcard-back">

**R:** VDO proporciona deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor que el tamaño fisico (thin provisioning). XFS es el FS recomendado sobre VDO.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `pvmove` es esencial para reemplazar discos sin tiempo de inactividad. Los datos...

</div>
<div class="flashcard-back">

**R:** `pvmove` es esencial para reemplazar discos sin tiempo de inactividad. Los datos se mueven en linea mientras el LV sigue disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `smq`?

</div>
<div class="flashcard-back">

**R:** Stochastic Multi Queue (predeterminada, eficiente)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `cleaner`?

</div>
<div class="flashcard-back">

**R:** Solo limpia dirty blocks (para eliminar cache)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `-a sy`?

</div>
<div class="flashcard-back">

**R:** Multiples nodos (requiere clvmd/lvmlockd)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son LVM Thin Provisioning?

</div>
<div class="flashcard-back">

**R:** El **thin provisioning** permite crear volumenes logicos que aparentan tener mas espacio del que realmente tienen asignado. El espacio se asigna dinamicamente cuando se escriben datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son LVM Cache (dm-cache)?

</div>
<div class="flashcard-back">

**R:** LVM cache usa un SSD como cache para acelerar un LV almacenado en HDD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son LVM RAID?

</div>
<div class="flashcard-back">

**R:** LVM puede crear volumenes con niveles RAID integrados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son VDO (Virtual Data Optimizer)?

</div>
<div class="flashcard-back">

**R:** **VDO** proporciona deduplicacion y compresion en linea para reducir el espacio de almacenamiento utilizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Metadata Backups?

</div>
<div class="flashcard-back">

**R:** LVM guarda automaticamente copias de seguridad de los metadatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son pvmove - Migracion Online?

</div>
<div class="flashcard-back">

**R:** **pvmove** permite migrar datos entre PVs sin desmontar el LV.

</div>
</div>

---

