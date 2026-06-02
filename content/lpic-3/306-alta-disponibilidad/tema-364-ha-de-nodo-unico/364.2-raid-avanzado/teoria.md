---
title: "364.2 - RAID Avanzado"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.2"
peso: 2
tags:
  - lpic-3
  - tema-364
  - raid
  - mdadm
  - bcache
  - dm-cache
  - ssd-caching
objetivos:
  - Gestionar arrays RAID avanzados con mdadm
  - Monitorizar RAID por software
  - Conocer herramientas de RAID hardware
  - Configurar SSD caching (bcache, dm-cache/lvmcache)
  - Optimizar rendimiento RAID
---

# 364.2 - RAID Avanzado

## mdadm Avanzado

### Crecimiento de Arrays (Growing)

Añadir discos a un array existente o cambiar su tamaño:

```bash
# Añadir disco a RAID 5 existente
mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde

# Expandir RAID despues de añadir disco
mdadm --grow /dev/md0 --raid-devices=4

# Ver progreso del reshape
cat /proc/mdstat
mdadm --detail /dev/md0
```

### Cambio de Nivel de RAID (Reshape)

```bash
# Convertir RAID 1 a RAID 5 (necesita añadir discos)
mdadm --grow /dev/md0 --level=5 --raid-devices=3 --add /dev/sdd

# Convertir RAID 5 a RAID 6
mdadm --grow /dev/md0 --level=6 --raid-devices=4

# El reshape se realiza en linea sin interrumpir el servicio
# Monitorizar progreso:
watch cat /proc/mdstat
```

> **Para el examen:** El reshape permite cambiar el nivel de RAID y el numero de discos sin desmontar el array. El proceso puede llevar horas y no debe interrumpirse.

### Bitmap (Write-Intent Bitmap)

El **bitmap** registra que bloques estan pendientes de sincronizacion, acelerando la reconstruccion despues de un fallo breve:

```bash
# Crear array con bitmap interno
mdadm --create /dev/md0 --level=5 --raid-devices=3 \
    --bitmap=internal /dev/sd[bcd]

# Añadir bitmap a array existente
mdadm --grow /dev/md0 --bitmap=internal

# Bitmap externo (en archivo)
mdadm --grow /dev/md0 --bitmap=/ruta/bitmap_md0

# Eliminar bitmap
mdadm --grow /dev/md0 --bitmap=none

# Ver estado del bitmap
mdadm --detail /dev/md0 | grep -i bitmap
```

### Journal Disk

Un **disco de journal** mejora el rendimiento de RAID 5/6 al registrar las escrituras parciales:

```bash
# Crear RAID 5 con journal en SSD
mdadm --create /dev/md0 --level=5 --raid-devices=3 \
    /dev/sd[bcd] --write-journal /dev/nvme0n1p1

# Añadir journal a array existente
mdadm --grow /dev/md0 --write-journal /dev/nvme0n1p1
```

## Monitorizacion de RAID

### /proc/mdstat

```bash
# Ver estado de todos los arrays
cat /proc/mdstat

# Salida tipica:
# md0 : active raid5 sdd[3] sdc[2] sdb[1] sda[0]
#       3145728 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]
#       [====>................]  recovery = 23.4% (245760/1048576) finish=2.3min

# [UUU] = todos los discos funcionando
# [_UU] = primer disco fallido
```

### mdadm --monitor

```bash
# Monitorizar eventos RAID
mdadm --monitor --scan --daemonize

# Con notificacion por email
mdadm --monitor --scan --mail=admin@empresa.com --daemonize

# Configuracion en mdadm.conf
# /etc/mdadm/mdadm.conf o /etc/mdadm.conf
MAILADDR admin@empresa.com
PROGRAM /usr/local/bin/raid-alert.sh
```

### Verificacion Periodica

```bash
# Iniciar verificacion manual
echo check > /sys/block/md0/md/sync_action

# Ver estado de verificacion
cat /sys/block/md0/md/sync_action
cat /sys/block/md0/md/mismatch_cnt   # Bloques discrepantes

# Reparar discrepancias
echo repair > /sys/block/md0/md/sync_action

# Configurar verificacion periodica (cron)
# Muchas distribuciones incluyen /etc/cron.d/mdadm-checkarray
```

> **Para el examen:** `mismatch_cnt` muestra el numero de bloques que no coinciden entre discos. Un valor distinto de 0 indica posibles problemas (excepto en RAID 1 con cache de escritura).

## RAID Hardware

### MegaRAID (LSI/Broadcom)

```bash
# Herramienta: storcli (o MegaCli legacy)
storcli /c0 show                # Info del controlador
storcli /c0/eall/sall show      # Listar discos
storcli /c0/v0 show             # Info del volumen virtual

# Crear RAID 5
storcli /c0 add vd type=r5 drives=252:0-2

# Ver estado del array
storcli /c0/v0 show all
```

### HP Smart Array (hpacucli/ssacli)

```bash
# ssacli (sucesor de hpacucli)
ssacli ctrl all show config       # Mostrar configuracion
ssacli ctrl slot=0 show           # Info del controlador
ssacli ctrl slot=0 ld all show    # Listar arrays logicos
ssacli ctrl slot=0 pd all show    # Listar discos fisicos

# Crear RAID 5
ssacli ctrl slot=0 create type=ld drives=1I:1:1,1I:1:2,1I:1:3 raid=5

# Ver estado
ssacli ctrl slot=0 ld 1 show status
```

> **Para el examen:** `storcli` (MegaRAID/LSI) y `ssacli` (HP Smart Array) son las herramientas principales de RAID hardware. `hpacucli` es el nombre anterior de `ssacli`.

## SSD Caching

### bcache

**bcache** usa un SSD como cache para un disco HDD, acelerando lecturas y escrituras.

```bash
# Crear dispositivo de cache (SSD)
make-bcache -C /dev/nvme0n1p1

# Crear dispositivo backend (HDD)
make-bcache -B /dev/sdb

# Registrar el backing device
echo /dev/nvme0n1p1 > /sys/block/bcache0/bcache/attach

# Modos de cache
echo writeback > /sys/block/bcache0/bcache/cache_mode    # Mas rapido
echo writethrough > /sys/block/bcache0/bcache/cache_mode  # Mas seguro
echo writearound > /sys/block/bcache0/bcache/cache_mode   # Solo lecturas

# Usar el dispositivo
mkfs.ext4 /dev/bcache0
mount /dev/bcache0 /mnt/datos
```

| Modo | Descripcion |
|------|------------|
| `writethrough` | Escritura en HDD y SSD simultaneamente (seguro) |
| `writeback` | Escritura en SSD primero, luego en HDD (rapido) |
| `writearound` | Solo cache de lectura, escritura directa a HDD |

### dm-cache / lvmcache

**dm-cache** (device-mapper cache) permite usar LVM para gestionar cache SSD:

```bash
# Preparar volumenes
pvcreate /dev/sdb        # HDD
pvcreate /dev/nvme0n1p1  # SSD
vgcreate mi_vg /dev/sdb /dev/nvme0n1p1

# Crear LV de datos en HDD
lvcreate -L 100G -n datos mi_vg /dev/sdb

# Crear cache pool en SSD
lvcreate --type cache-pool -L 20G -n cache_pool mi_vg /dev/nvme0n1p1

# Convertir LV de datos a LV con cache
lvconvert --type cache --cachepool mi_vg/cache_pool mi_vg/datos

# Ver estado del cache
lvs -a -o +cache_policy,cache_settings,cache_mode
dmsetup status mi_vg-datos

# Modos de cache
lvconvert --cachemode writethrough mi_vg/datos
lvconvert --cachemode writeback mi_vg/datos

# Eliminar cache (sin perder datos)
lvconvert --uncache mi_vg/datos
```

> **Para el examen:** `lvmcache` (dm-cache) se integra con LVM y es mas facil de gestionar que bcache. Los modos `writethrough` y `writeback` son los mas importantes.

## Optimizacion de Rendimiento RAID

### stripe_cache_size

```bash
# Ver tamaño actual del cache de stripe (RAID 5/6)
cat /sys/block/md0/md/stripe_cache_size

# Aumentar (mejora rendimiento pero usa mas RAM)
echo 8192 > /sys/block/md0/md/stripe_cache_size
```

### Tamaño de Chunk

```bash
# Crear con chunk optimizado
mdadm --create /dev/md0 --level=5 --raid-devices=3 \
    --chunk=256K /dev/sd[bcd]

# Ver chunk actual
mdadm --detail /dev/md0 | grep "Chunk Size"
```

| Uso | Chunk recomendado |
|-----|-------------------|
| Archivos grandes (video, BD) | 256K - 1M |
| Archivos pequeños (correo) | 64K - 128K |
| Uso general | 128K - 256K |

### Velocidad de Reconstruccion

```bash
# Ver limites actuales
cat /proc/sys/dev/raid/speed_limit_min    # Minimo (KB/s)
cat /proc/sys/dev/raid/speed_limit_max    # Maximo (KB/s)

# Aumentar velocidad de reconstruccion
echo 200000 > /proc/sys/dev/raid/speed_limit_min
echo 500000 > /proc/sys/dev/raid/speed_limit_max
```

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **mdadm --create vs --assemble** — `--create` destruye datos existentes y crea un RAID nuevo desde cero; `--assemble` reactiva un RAID existente sin destruir datos. Confundirlos puede causar perdida total de datos. Si el examen pregunta como reactivar un RAID despues de un reinicio, la respuesta es `--assemble`
- **mdadm --grow permite reshape online** — se puede cambiar el nivel RAID (ej: RAID1 a RAID5), añadir discos y cambiar el chunk size sin desmontar el array. El reshape se hace en caliente pero puede tardar horas. Interrumpir un reshape puede corromper el array
- **bitmap interno vs externo** — el bitmap interno se almacena en el propio array (mas simple, sobrevive a reinicios); el externo se almacena en un archivo separado (no sobrevive a reinicios sin configuracion). El bitmap acelera la resincronizacion parcial tras fallos breves, no la reconstruccion completa
- **[UUU] vs [_UU] en /proc/mdstat** — `U` significa disco activo (Up), `_` significa disco fallido o ausente. En RAID 5 con 3 discos, `[UUU]` es normal, `[_UU]` indica un disco fallido y el array esta degradado. El examen muestra salidas de mdstat y pregunta el estado
- **mismatch_cnt en verificacion RAID** — un `mismatch_cnt` distinto de 0 despues de `echo check > /sys/block/md0/md/sync_action` indica bloques inconsistentes. En RAID 1 con write-behind cache, valores pequeños pueden ser falsos positivos. En RAID 5/6, cualquier mismatch es preocupante
- **bcache writethrough vs writeback** — `writethrough` escribe simultaneamente en SSD y HDD (seguro, sin riesgo de perdida); `writeback` escribe primero en SSD y luego en HDD (rapido, pero si el SSD falla se pierden las escrituras pendientes). El examen pregunta el modo mas seguro: writethrough
- **lvmcache (dm-cache) vs bcache: integracion LVM** — lvmcache se integra con LVM y se gestiona con `lvconvert`; bcache se configura a nivel de dispositivo de bloque con `make-bcache`. Si ya usas LVM, lvmcache es mas facil de gestionar. `lvconvert --uncache` elimina el cache sin perder datos
- **storcli vs ssacli** — `storcli` es para controladoras MegaRAID (LSI/Broadcom); `ssacli` (antes hpacucli) es para HP Smart Array. Usar la herramienta incorrecta para el hardware no funciona. El examen puede preguntar cual herramienta usar segun la marca del controlador
- **speed_limit_min y speed_limit_max** — controlan la velocidad de reconstruccion de RAID por software. Subir `speed_limit_min` acelera la reconstruccion pero impacta el rendimiento de I/O del sistema. El examen puede preguntar como acelerar una reconstruccion: aumentar estos valores
- **Journal disk en RAID 5/6 previene write hole** — el write hole ocurre cuando un fallo de energia durante una escritura en RAID 5/6 deja la paridad inconsistente. Un SSD de journal registra las escrituras pendientes y permite recuperarlas. Sin journal ni bitmap, el RAID puede quedar silenciosamente corrupto
