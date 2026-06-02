---
title: "364.2 - Ejercicios: RAID Avanzado"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.2"
peso: 2
tags:
  - lpic-3
  - tema-364
  - ejercicios
  - raid
  - mdadm
---

# 364.2 - Ejercicios: RAID Avanzado

### Pregunta 1
¿Que comando de mdadm permite cambiar el nivel de RAID de un array existente sin desmontarlo?

a) `mdadm --change /dev/md0 --level=5`
b) `mdadm --grow /dev/md0 --level=5`
c) `mdadm --reshape /dev/md0 --level=5`
d) `mdadm --convert /dev/md0 --level=5`

<details><summary>Respuesta</summary>

**b) `mdadm --grow /dev/md0 --level=5`**

`mdadm --grow` permite hacer reshape del array en linea, incluyendo cambio de nivel RAID, numero de discos y tamaño de chunk. El proceso se realiza sin interrumpir el servicio.
</details>

### Pregunta 2
¿Que funcion tiene el bitmap (write-intent bitmap) en un array RAID?

a) Mejorar el rendimiento de lectura
b) Registrar bloques pendientes de sincronizacion para acelerar la reconstruccion
c) Comprimir los datos del array
d) Cifrar los datos del array

<details><summary>Respuesta</summary>

**b) Registrar bloques pendientes de sincronizacion para acelerar la reconstruccion**

El bitmap registra que bloques han sido modificados pero no sincronizados. Despues de un fallo breve y reconexion, solo los bloques marcados necesitan resincronizarse, en lugar de todo el array.
</details>

### Pregunta 3
¿Que archivo del sistema muestra el estado de todos los arrays RAID por software?

a) `/sys/block/md0/status`
b) `/proc/mdstat`
c) `/etc/mdadm/status`
d) `/var/log/mdadm`

<details><summary>Respuesta</summary>

**b) `/proc/mdstat`**

`/proc/mdstat` muestra el estado en tiempo real de todos los arrays md, incluyendo el nivel, discos, estado de sincronizacion y progreso de reconstruccion.
</details>

### Pregunta 4
¿Que herramienta se usa para gestionar controladores RAID HP Smart Array?

a) `storcli`
b) `megacli`
c) `ssacli`
d) `arcconf`

<details><summary>Respuesta</summary>

**c) `ssacli`**

`ssacli` (Smart Storage Administrator CLI) es la herramienta para controladores HP Smart Array. Es el sucesor de `hpacucli`. `storcli` es para controladores MegaRAID (LSI/Broadcom).
</details>

### Pregunta 5
¿Que modo de bcache escribe primero en el SSD y luego en el HDD de forma asincrona?

a) `writethrough`
b) `writeback`
c) `writearound`
d) `writebehind`

<details><summary>Respuesta</summary>

**b) `writeback`**

En modo `writeback`, las escrituras se confirman cuando llegan al SSD cache, y se escriben en el HDD despues de forma asincrona. Es mas rapido pero menos seguro que `writethrough`.
</details>

### Pregunta 6
¿Que comando verifica la integridad de un array RAID por software?

a) `mdadm --check /dev/md0`
b) `echo check > /sys/block/md0/md/sync_action`
c) `mdadm --verify /dev/md0`
d) `fsck /dev/md0`

<details><summary>Respuesta</summary>

**b) `echo check > /sys/block/md0/md/sync_action`**

Escribir `check` en `sync_action` inicia una verificacion de integridad del array. Los bloques discrepantes se reportan en `mismatch_cnt`. Para reparar se usa `echo repair`.
</details>

### Pregunta 7
¿Que comando de lvmcache convierte un LV existente para usar cache SSD?

a) `lvconvert --type cache --cachepool VG/cache_pool VG/datos`
b) `lvcreate --cache --pool VG/cache_pool VG/datos`
c) `lvextend --cache VG/datos /dev/ssd`
d) `lvchange --cache-enable VG/datos`

<details><summary>Respuesta</summary>

**a) `lvconvert --type cache --cachepool VG/cache_pool VG/datos`**

`lvconvert --type cache` convierte un LV existente para usar un cache pool SSD previamente creado con `lvcreate --type cache-pool`.
</details>

### Pregunta 8
¿Que parametro controla la velocidad maxima de reconstruccion RAID?

a) `/sys/block/md0/md/rebuild_speed`
b) `/proc/sys/dev/raid/speed_limit_max`
c) `/etc/mdadm/speed_max`
d) `/sys/block/md0/md/sync_speed_max`

<details><summary>Respuesta</summary>

**b) `/proc/sys/dev/raid/speed_limit_max`**

`speed_limit_max` (y `speed_limit_min`) controlan la velocidad de reconstruccion en KB/s. Aumentar estos valores acelera la reconstruccion pero puede impactar el rendimiento del sistema.
</details>

### Pregunta 9
¿Que funcion tiene un disco journal en RAID 5/6?

a) Almacenar los metadatos del array
b) Registrar escrituras parciales para evitar el write hole
c) Servir como hot spare automatico
d) Almacenar la tabla de paridad

<details><summary>Respuesta</summary>

**b) Registrar escrituras parciales para evitar el write hole**

El disco journal registra las escrituras antes de aplicarlas al array, eliminando el "write hole" de RAID 5/6 (riesgo de inconsistencia si el sistema falla durante una escritura parcial).
</details>

### Pregunta 10
¿Que valor en `/proc/mdstat` indica que todos los discos de un array RAID estan funcionando correctamente?

a) `[AAAA]`
b) `[UUU]`
c) `[OK]`
d) `[+++]`

<details><summary>Respuesta</summary>

**b) `[UUU]`**

`U` significa "Up" (disco activo). `[UUU]` indica que los 3 discos estan funcionando. Un `_` indica un disco fallido, por ejemplo `[_UU]` indica que el primer disco ha fallado.
</details>

### Pregunta 11

¿Que comando de mdadm añade un bitmap interno a un array RAID existente?

a) `mdadm --create /dev/md0 --bitmap=internal`
b) `mdadm --grow /dev/md0 --bitmap=internal`
c) `mdadm --manage /dev/md0 --add-bitmap=internal`
d) `mdadm --assemble /dev/md0 --bitmap=internal`

<details><summary>Respuesta</summary>

**b) `mdadm --grow /dev/md0 --bitmap=internal`**

`mdadm --grow --bitmap=internal` añade un write-intent bitmap interno a un array existente sin necesidad de desmontarlo. El bitmap puede ser `internal` (dentro del array) o una ruta a un archivo externo.
</details>

### Pregunta 12

¿Que herramienta se usa para gestionar controladores RAID MegaRAID de LSI/Broadcom en Linux?

a) `ssacli`
b) `arcconf`
c) `storcli`
d) `hpacucli`

<details><summary>Respuesta</summary>

**c) `storcli`**

`storcli` es la herramienta de linea de comandos para controladores RAID MegaRAID de LSI/Broadcom. Es el sucesor de `MegaCli`. `ssacli` es para controladores HP Smart Array y `arcconf` es para controladores Adaptec.
</details>

### Pregunta 13

¿Que modo de bcache solo utiliza el SSD como cache de lectura, escribiendo directamente en el HDD?

a) `writethrough`
b) `writeback`
c) `writearound`
d) `readonly`

<details><summary>Respuesta</summary>

**c) `writearound`**

En modo `writearound`, las escrituras van directamente al HDD (backing device) sin pasar por el SSD. Solo las lecturas se almacenan en el cache SSD. Es util cuando las escrituras no se benefician del cache.
</details>

### Pregunta 14

¿Que valor se debe escribir en `sync_action` para reparar bloques discrepantes encontrados durante una verificacion RAID?

a) `fix`
b) `repair`
c) `rebuild`
d) `resync`

<details><summary>Respuesta</summary>

**b) `repair`**

`echo repair > /sys/block/md0/md/sync_action` inicia una reparacion que corrige los bloques discrepantes encontrados previamente con `check`. La reparacion usa los datos de paridad o del espejo para restaurar los bloques incorrectos.
</details>

### Pregunta 15

¿Que parametro de mdadm permite añadir un disco journal SSD a un array RAID 5 existente?

a) `--add-journal`
b) `--write-journal`
c) `--journal`
d) `--ssd-cache`

<details><summary>Respuesta</summary>

**b) `--write-journal`**

`mdadm --grow /dev/md0 --write-journal /dev/nvme0n1p1` añade un disco journal a un array RAID 5/6 existente. El journal registra las escrituras parciales para eliminar el riesgo de write hole.
</details>

### Pregunta 16

¿Que parametro del kernel controla la velocidad minima de reconstruccion RAID en KB/s?

a) `/sys/block/md0/md/rebuild_min`
b) `/proc/sys/dev/raid/speed_limit_min`
c) `/etc/mdadm/speed_min`
d) `/proc/sys/kernel/raid_speed_min`

<details><summary>Respuesta</summary>

**b) `/proc/sys/dev/raid/speed_limit_min`**

`/proc/sys/dev/raid/speed_limit_min` establece la velocidad minima garantizada de reconstruccion en KB/s. Este valor asegura que la reconstruccion avance incluso bajo carga de E/S. Se complementa con `speed_limit_max`.
</details>

### Pregunta 17

¿Que tamaño de chunk se recomienda para un array RAID que almacenara archivos grandes como video y bases de datos?

a) 32K - 64K
b) 64K - 128K
c) 256K - 1M
d) 4K - 16K

<details><summary>Respuesta</summary>

**c) 256K - 1M**

Para archivos grandes (video, bases de datos), se recomiendan chunks de 256K a 1M para maximizar el rendimiento de E/S secuencial. Los archivos pequeños (correo) se benefician de chunks de 64K a 128K.
</details>

### Pregunta 18

¿Que comando de lvmcache elimina el cache SSD de un LV sin perder los datos almacenados?

a) `lvremove --cache mi_vg/datos`
b) `lvconvert --uncache mi_vg/datos`
c) `lvchange --cache-remove mi_vg/datos`
d) `lvcreate --remove-cache mi_vg/datos`

<details><summary>Respuesta</summary>

**b) `lvconvert --uncache mi_vg/datos`**

`lvconvert --uncache` primero vuelca todos los datos sucios (dirty) del cache SSD al dispositivo principal (HDD) y despues elimina el cache pool. El LV de datos sigue funcionando normalmente sin cache.
</details>

### Pregunta 19

¿Que columna en `/proc/mdstat` indica un disco en estado "fallido" dentro de un array RAID?

a) `[F]` junto al dispositivo
b) `_` (guion bajo) en el patron de estado
c) `(D)` junto al dispositivo
d) `[X]` en el patron de estado

<details><summary>Respuesta</summary>

**b) `_` (guion bajo) en el patron de estado**

En `/proc/mdstat`, el patron entre corchetes muestra el estado de cada disco: `U` (Up) indica disco funcional y `_` (guion bajo) indica disco fallido. Por ejemplo, `[U_U]` significa que el segundo disco ha fallado en un array de 3 discos.
</details>

### Pregunta 20

Al convertir un RAID 5 a RAID 6 con mdadm, ¿que sucede con el servicio durante el reshape?

a) El array se desmonta automaticamente
b) El servicio se interrumpe hasta completar la conversion
c) El reshape se realiza en linea sin interrumpir el servicio
d) Se requiere reiniciar el sistema

<details><summary>Respuesta</summary>

**c) El reshape se realiza en linea sin interrumpir el servicio**

El reshape de mdadm se ejecuta en segundo plano sin interrumpir el acceso al array. El proceso puede llevar horas dependiendo del tamaño del array, y su progreso se puede monitorizar con `cat /proc/mdstat`.
</details>

### Pregunta 21

Escribe el comando para crear un dispositivo de cache bcache a partir de una particion SSD /dev/nvme0n1p1.

<input type="text" class="fill-blank" data-answer="make-bcache -C /dev/nvme0n1p1" data-alt="make-bcache -C /dev/nvme0n1p1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**make-bcache -C /dev/nvme0n1p1**

`make-bcache -C` (Cache) formatea la particion SSD como dispositivo de cache para bcache. El dispositivo backend (HDD) se prepara con `make-bcache -B /dev/sdX`. Ambos se conectan mediante el registro en sysfs.
</details>

### Pregunta 22

Escribe el comando para aumentar el tamaño del stripe_cache_size a 8192 en el array /dev/md0.

<input type="text" class="fill-blank" data-answer="echo 8192 > /sys/block/md0/md/stripe_cache_size" data-alt="echo 8192 >/sys/block/md0/md/stripe_cache_size" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**echo 8192 > /sys/block/md0/md/stripe_cache_size**

El stripe_cache_size controla la cantidad de memoria usada para cachear operaciones de stripe en RAID 5/6. Aumentar este valor mejora el rendimiento pero consume mas memoria RAM. El valor se mide en paginas.
</details>

### Pregunta 23

Escribe el comando para expandir el array RAID /dev/md0 de 3 a 4 dispositivos usando mdadm.

<input type="text" class="fill-blank" data-answer="mdadm --grow /dev/md0 --raid-devices=4" data-alt="mdadm --grow /dev/md0 --raid-devices 4" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mdadm --grow /dev/md0 --raid-devices=4**

`mdadm --grow --raid-devices=4` expande el array para usar 4 dispositivos. Previamente se debe haber añadido un disco adicional con `mdadm --add`. El reshape redistribuye los datos entre todos los discos.
</details>

### Pregunta 24

Escribe el comando para activar la monitorizacion de arrays RAID con mdadm en modo daemon, enviando alertas por email a admin@empresa.com.

<input type="text" class="fill-blank" data-answer="mdadm --monitor --scan --mail=admin@empresa.com --daemonize" data-alt="mdadm --monitor --scan --daemonize --mail=admin@empresa.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mdadm --monitor --scan --mail=admin@empresa.com --daemonize**

`mdadm --monitor` vigila los arrays RAID y envia notificaciones por email cuando detecta eventos como fallos de disco, degradacion del array o finalizacion de reconstruccion. `--scan` monitoriza todos los arrays configurados.
</details>

### Pregunta 25

Escribe el comando para configurar el modo writeback en un dispositivo bcache0.

<input type="text" class="fill-blank" data-answer="echo writeback > /sys/block/bcache0/bcache/cache_mode" data-alt="echo writeback >/sys/block/bcache0/bcache/cache_mode" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**echo writeback > /sys/block/bcache0/bcache/cache_mode**

El modo `writeback` en bcache confirma las escrituras al llegar al SSD cache, mejorando significativamente el rendimiento de escritura. Los datos se escriben en el HDD de forma asincrona. Es mas rapido que `writethrough` pero con mayor riesgo de perdida de datos si el SSD falla.
</details>
