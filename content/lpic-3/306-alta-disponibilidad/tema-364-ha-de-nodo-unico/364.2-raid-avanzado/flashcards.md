---
title: "364.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.2"
---

# Flashcards: 364.2 - Raid Avanzado

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-001">
<div class="flashcard-front">

**P:** ¿Que comando de mdadm permite cambiar el nivel de RAID de un array existente sin desmontarlo?

</div>
<div class="flashcard-back">

**R:** b) `mdadm --grow /dev/md0 --level=5`. `mdadm --grow` permite hacer reshape del array en linea, incluyendo cambio de nivel RAID, numero de discos y tamaño de chunk. El proceso se realiza sin interrumpir el servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-002">
<div class="flashcard-front">

**P:** ¿Que funcion tiene el bitmap (write-intent bitmap) en un array RAID?

</div>
<div class="flashcard-back">

**R:** b) Registrar bloques pendientes de sincronizacion para acelerar la reconstruccion. El bitmap registra que bloques han sido modificados pero no sincronizados. Despues de un fallo breve y reconexion, solo los bloques marcados necesitan resincronizarse, en lugar de todo el array.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que archivo del sistema muestra el estado de todos los arrays RAID por software?

</div>
<div class="flashcard-back">

**R:** b) `/proc/mdstat`. `/proc/mdstat` muestra el estado en tiempo real de todos los arrays md, incluyendo el nivel, discos, estado de sincronizacion y progreso de reconstruccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que herramienta se usa para gestionar controladores RAID HP Smart Array?

</div>
<div class="flashcard-back">

**R:** c) `ssacli`. `ssacli` (Smart Storage Administrator CLI) es la herramienta para controladores HP Smart Array. Es el sucesor de `hpacucli`. `storcli` es para controladores MegaRAID (LSI/Broadcom).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que modo de bcache escribe primero en el SSD y luego en el HDD de forma asincrona?

</div>
<div class="flashcard-back">

**R:** b) `writeback`. En modo `writeback`, las escrituras se confirman cuando llegan al SSD cache, y se escriben en el HDD despues de forma asincrona. Es mas rapido pero menos seguro que `writethrough`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que comando verifica la integridad de un array RAID por software?

</div>
<div class="flashcard-back">

**R:** b) `echo check > /sys/block/md0/md/sync_action`. Escribir `check` en `sync_action` inicia una verificacion de integridad del array. Los bloques discrepantes se reportan en `mismatch_cnt`. Para reparar se usa `echo repair`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando de lvmcache convierte un LV existente para usar cache SSD?

</div>
<div class="flashcard-back">

**R:** a) `lvconvert --type cache --cachepool VG/cache_pool VG/datos`. `lvconvert --type cache` convierte un LV existente para usar un cache pool SSD previamente creado con `lvcreate --type cache-pool`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que parametro controla la velocidad maxima de reconstruccion RAID?

</div>
<div class="flashcard-back">

**R:** b) `/proc/sys/dev/raid/speed_limit_max`. `speed_limit_max` (y `speed_limit_min`) controlan la velocidad de reconstruccion en KB/s. Aumentar estos valores acelera la reconstruccion pero puede impactar el rendimiento del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que funcion tiene un disco journal en RAID 5/6?

</div>
<div class="flashcard-back">

**R:** b) Registrar escrituras parciales para evitar el write hole. El disco journal registra las escrituras antes de aplicarlas al array, eliminando el "write hole" de RAID 5/6 (riesgo de inconsistencia si el sistema falla durante una escritura parcial).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que valor en `/proc/mdstat` indica que todos los discos de un array RAID estan funcionando correctamente?

</div>
<div class="flashcard-back">

**R:** b) `[UUU]`. `U` significa "Up" (disco activo). `[UUU]` indica que los 3 discos estan funcionando. Un `_` indica un disco fallido, por ejemplo `[_UU]` indica que el primer disco ha fallado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que comando de mdadm añade un bitmap interno a un array RAID existente?

</div>
<div class="flashcard-back">

**R:** b) `mdadm --grow /dev/md0 --bitmap=internal`. `mdadm --grow --bitmap=internal` añade un write-intent bitmap interno a un array existente sin necesidad de desmontarlo. El bitmap puede ser `internal` (dentro del array) o una ruta a un archivo externo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que herramienta se usa para gestionar controladores RAID MegaRAID de LSI/Broadcom en Linux?

</div>
<div class="flashcard-back">

**R:** c) `storcli`. `storcli` es la herramienta de linea de comandos para controladores RAID MegaRAID de LSI/Broadcom. Es el sucesor de `MegaCli`. `ssacli` es para controladores HP Smart Array y `arcconf` es para controladores Adaptec.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que modo de bcache solo utiliza el SSD como cache de lectura, escribiendo directamente en el HDD?

</div>
<div class="flashcard-back">

**R:** c) `writearound`. En modo `writearound`, las escrituras van directamente al HDD (backing device) sin pasar por el SSD. Solo las lecturas se almacenan en el cache SSD. Es util cuando las escrituras no se benefician del cache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que valor se debe escribir en `sync_action` para reparar bloques discrepantes encontrados durante una verificacion RAID?

</div>
<div class="flashcard-back">

**R:** b) `repair`. `echo repair > /sys/block/md0/md/sync_action` inicia una reparacion que corrige los bloques discrepantes encontrados previamente con `check`. La reparacion usa los datos de paridad o del espejo para restaurar los bloques incorrectos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que parametro de mdadm permite añadir un disco journal SSD a un array RAID 5 existente?

</div>
<div class="flashcard-back">

**R:** b) `--write-journal`. `mdadm --grow /dev/md0 --write-journal /dev/nvme0n1p1` añade un disco journal a un array RAID 5/6 existente. El journal registra las escrituras parciales para eliminar el riesgo de write hole.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que parametro del kernel controla la velocidad minima de reconstruccion RAID en KB/s?

</div>
<div class="flashcard-back">

**R:** b) `/proc/sys/dev/raid/speed_limit_min`. `/proc/sys/dev/raid/speed_limit_min` establece la velocidad minima garantizada de reconstruccion en KB/s. Este valor asegura que la reconstruccion avance incluso bajo carga de E/S. Se complementa con `speed_limit_max`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que tamaño de chunk se recomienda para un array RAID que almacenara archivos grandes como video y bases de datos?

</div>
<div class="flashcard-back">

**R:** c) 256K - 1M. Para archivos grandes (video, bases de datos), se recomiendan chunks de 256K a 1M para maximizar el rendimiento de E/S secuencial. Los archivos pequeños (correo) se benefician de chunks de 64K a 128K.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que comando de lvmcache elimina el cache SSD de un LV sin perder los datos almacenados?

</div>
<div class="flashcard-back">

**R:** b) `lvconvert --uncache mi_vg/datos`. `lvconvert --uncache` primero vuelca todos los datos sucios (dirty) del cache SSD al dispositivo principal (HDD) y despues elimina el cache pool. El LV de datos sigue funcionando normalmente sin cache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que columna en `/proc/mdstat` indica un disco en estado "fallido" dentro de un array RAID?

</div>
<div class="flashcard-back">

**R:** b) `_` (guion bajo) en el patron de estado. En `/proc/mdstat`, el patron entre corchetes muestra el estado de cada disco: `U` (Up) indica disco funcional y `_` (guion bajo) indica disco fallido. Por ejemplo, `[U_U]` significa que el segundo disco ha fallado en un array de 3 discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-020">
<div class="flashcard-front">

**P:** Al convertir un RAID 5 a RAID 6 con mdadm, ¿que sucede con el servicio durante el reshape?

</div>
<div class="flashcard-back">

**R:** c) El reshape se realiza en linea sin interrumpir el servicio. El reshape de mdadm se ejecuta en segundo plano sin interrumpir el acceso al array. El proceso puede llevar horas dependiendo del tamaño del array, y su progreso se puede monitorizar con `cat /proc/mdstat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un dispositivo de cache bcache a partir de una particion SSD /dev/nvme0n1p1. <input type="text" class="fill-blank" data-answer="make-bcache -C /dev/nvme0n1p1" data-alt="make-bcache -C /dev/nvme0n1p1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** make-bcache -C /dev/nvme0n1p1. `make-bcache -C` (Cache) formatea la particion SSD como dispositivo de cache para bcache. El dispositivo backend (HDD) se prepara con `make-bcache -B /dev/sdX`. Ambos se conectan mediante el registro en sysfs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para aumentar el tamaño del stripe_cache_size a 8192 en el array /dev/md0. <input type="text" class="fill-blank" data-answer="echo 8192 > /sys/block/md0/md/stripe_cache_size" data-alt="echo 8192 >/sys/block/md0/md/stripe_cache_size" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** echo 8192 > /sys/block/md0/md/stripe_cache_size. El stripe_cache_size controla la cantidad de memoria usada para cachear operaciones de stripe en RAID 5/6. Aumentar este valor mejora el rendimiento pero consume mas memoria RAM. El valor se mide en paginas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para expandir el array RAID /dev/md0 de 3 a 4 dispositivos usando mdadm. <input type="text" class="fill-blank" data-answer="mdadm --grow /dev/md0 --raid-devices=4" data-alt="mdadm --grow /dev/md0 --raid-devices 4" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mdadm --grow /dev/md0 --raid-devices=4. `mdadm --grow --raid-devices=4` expande el array para usar 4 dispositivos. Previamente se debe haber añadido un disco adicional con `mdadm --add`. El reshape redistribuye los datos entre todos los discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para activar la monitorizacion de arrays RAID con mdadm en modo daemon, enviando alertas por email a admin@empresa.com. <input type="text" class="fill-blank" data-answer="mdadm --monitor --scan --mail=admin@empresa.com --daemonize" data-alt="mdadm --monitor --scan --daemonize --mail=admin@empresa.com" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mdadm --monitor --scan --mail=admin@empresa.com --daemonize. `mdadm --monitor` vigila los arrays RAID y envia notificaciones por email cuando detecta eventos como fallos de disco, degradacion del array o finalizacion de reconstruccion. `--scan` monitoriza todos los arrays configurados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para configurar el modo writeback en un dispositivo bcache0. <input type="text" class="fill-blank" data-answer="echo writeback > /sys/block/bcache0/bcache/cache_mode" data-alt="echo writeback >/sys/block/bcache0/bcache/cache_mode" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** echo writeback > /sys/block/bcache0/bcache/cache_mode. El modo `writeback` en bcache confirma las escrituras al llegar al SSD cache, mejorando significativamente el rendimiento de escritura. Los datos se escriben en el HDD de forma asincrona. Es mas rapido que `writethrough` pero con mayor riesgo de perdida de datos si el SSD falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El reshape permite cambiar el nivel de RAID y el numero de discos sin desmontar ...

</div>
<div class="flashcard-back">

**R:** El reshape permite cambiar el nivel de RAID y el numero de discos sin desmontar el array. El proceso puede llevar horas y no debe interrumpirse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `mismatch_cnt` muestra el numero de bloques que no coinciden entre discos. Un va...

</div>
<div class="flashcard-back">

**R:** `mismatch_cnt` muestra el numero de bloques que no coinciden entre discos. Un valor distinto de 0 indica posibles problemas (excepto en RAID 1 con cache de escritura).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `storcli` (MegaRAID/LSI) y `ssacli` (HP Smart Array) son las herramientas princi...

</div>
<div class="flashcard-back">

**R:** `storcli` (MegaRAID/LSI) y `ssacli` (HP Smart Array) son las herramientas principales de RAID hardware. `hpacucli` es el nombre anterior de `ssacli`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `lvmcache` (dm-cache) se integra con LVM y es mas facil de gestionar que bcache....

</div>
<div class="flashcard-back">

**R:** `lvmcache` (dm-cache) se integra con LVM y es mas facil de gestionar que bcache. Los modos `writethrough` y `writeback` son los mas importantes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `writethrough`?

</div>
<div class="flashcard-back">

**R:** Escritura en HDD y SSD simultaneamente (seguro)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `writeback`?

</div>
<div class="flashcard-back">

**R:** Escritura en SSD primero, luego en HDD (rapido)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `writearound`?

</div>
<div class="flashcard-back">

**R:** Solo cache de lectura, escritura directa a HDD

</div>
</div>

---

