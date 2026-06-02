---
title: "364.3 - LVM Avanzado"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.3"
peso: 2
tags:
  - lpic-3
  - tema-364
  - lvm
  - thin-provisioning
  - lvm-cache
  - lvm-raid
  - vdo
  - pvmove
objetivos:
  - Configurar thin provisioning con LVM
  - Implementar LVM cache con dm-cache
  - Crear LVM RAID
  - Usar VDO para deduplicacion y compresion
  - Gestionar migracion online con pvmove
---

# 364.3 - LVM Avanzado

## LVM Thin Provisioning

El **thin provisioning** permite crear volumenes logicos que aparentan tener mas espacio del que realmente tienen asignado. El espacio se asigna dinamicamente cuando se escriben datos.

### Conceptos

```
  ┌──────────────────────────────────┐
  │  Thin LV 1: 50 GB (virtual)     │ ← Usa 10 GB reales
  │  Thin LV 2: 100 GB (virtual)    │ ← Usa 20 GB reales
  │  Thin LV 3: 200 GB (virtual)    │ ← Usa 5 GB reales
  ├──────────────────────────────────┤
  │  Thin Pool: 100 GB (real)       │ ← Solo 35 GB usados
  └──────────────────────────────────┘
  Total virtual: 350 GB
  Total real:    100 GB (overprovisioned)
```

### Creacion de Thin Pool y Thin LVs

```bash
# Crear Volume Group
vgcreate mi_vg /dev/sdb /dev/sdc

# Crear thin pool
lvcreate --type thin-pool -L 100G -n mi_pool mi_vg

# Crear thin LVs (pueden exceder el tamaño del pool)
lvcreate --type thin -V 50G --thinpool mi_pool -n lv_web mi_vg
lvcreate --type thin -V 100G --thinpool mi_pool -n lv_db mi_vg
lvcreate --type thin -V 200G --thinpool mi_pool -n lv_backup mi_vg

# Formatear y montar normalmente
mkfs.ext4 /dev/mi_vg/lv_web
mount /dev/mi_vg/lv_web /mnt/web
```

### Monitorizacion del Thin Pool

```bash
# Ver uso del pool
lvs -a -o +lv_size,pool_lv,data_percent,metadata_percent mi_vg

# Estado detallado
lvs -a mi_vg
# Output ejemplo:
#   LV       VG    Attr       LSize   Pool    Data%  Meta%
#   lv_web   mi_vg V-wi-a-t-- 50.00g  mi_pool 20.50
#   lv_db    mi_vg V-wi-a-t-- 100.00g mi_pool 15.30
#   mi_pool  mi_vg twi-a-t--- 100.00g         35.00  12.50

# Configurar alertas de uso
lvchange --monitor y mi_vg/mi_pool

# Umbral de alerta (porcentaje)
lvm.conf: thin_pool_autoextend_threshold = 70
lvm.conf: thin_pool_autoextend_percent = 20
```

### Snapshots con Thin Provisioning

```bash
# Crear snapshot thin (instantaneo, sin reservar espacio)
lvcreate -s --name snap_web mi_vg/lv_web

# Los snapshots thin son muy eficientes
# Solo ocupan espacio por los bloques que cambian
```

> **Para el examen:** El thin provisioning permite **overprovisioning** (asignar mas espacio virtual que real). Es fundamental monitorizar el uso real del pool para evitar quedarse sin espacio.

## LVM Cache (dm-cache)

LVM cache usa un SSD como cache para acelerar un LV almacenado en HDD.

```bash
# Preparar PVs
pvcreate /dev/sdb    # HDD
pvcreate /dev/nvme0n1p1  # SSD

# Crear VG con ambos
vgcreate mi_vg /dev/sdb /dev/nvme0n1p1

# Crear LV de datos en HDD
lvcreate -L 500G -n datos mi_vg /dev/sdb

# Metodo 1: Cache pool (dos pasos)
lvcreate --type cache-pool -L 50G -n cache_pool mi_vg /dev/nvme0n1p1
lvconvert --type cache --cachepool mi_vg/cache_pool mi_vg/datos

# Metodo 2: Directo (un paso)
lvcreate --type cache -L 50G --cachedevice /dev/nvme0n1p1 mi_vg/datos

# Ver estado del cache
lvs -o +cache_total_blocks,cache_used_blocks,cache_dirty_blocks,cache_read_hits,cache_write_hits

# Cambiar modo
lvconvert --cachemode writeback mi_vg/datos
lvconvert --cachemode writethrough mi_vg/datos

# Eliminar cache sin perder datos
lvconvert --uncache mi_vg/datos
```

### Politicas de Cache

| Politica | Descripcion |
|----------|------------|
| `smq` | Stochastic Multi Queue (predeterminada, eficiente) |
| `mq` | Multi Queue (legacy) |
| `cleaner` | Solo limpia dirty blocks (para eliminar cache) |

```bash
# Ver politica actual
lvs -o +cache_policy mi_vg/datos

# Cambiar politica
lvchange --cachepolicy smq mi_vg/datos
```

> **Para el examen:** La politica `smq` es la predeterminada y recomendada. `writethrough` es mas seguro (escritura en HDD y SSD), `writeback` es mas rapido (escritura primero en SSD).

## LVM RAID

LVM puede crear volumenes con niveles RAID integrados.

```bash
# Crear LV RAID 1 (espejo)
lvcreate --type raid1 -m 1 -L 50G -n lv_raid1 mi_vg

# Crear LV RAID 5
lvcreate --type raid5 -i 3 -L 100G -n lv_raid5 mi_vg

# Crear LV RAID 6
lvcreate --type raid6 -i 3 -L 100G -n lv_raid6 mi_vg

# Convertir LV existente a RAID 1
lvconvert --type raid1 -m 1 mi_vg/lv_datos

# Convertir LV a RAID 5
lvconvert --type raid5 mi_vg/lv_datos

# Ver estado del RAID
lvs -a -o +devices,lv_health_status mi_vg

# Sincronizar despues de fallo
lvchange --resync mi_vg/lv_raid1
```

| Tipo LVM RAID | Equivalente RAID | Descripcion |
|--------------|-----------------|------------|
| `raid1` | RAID 1 | Espejo |
| `raid4` | RAID 4 | Paridad dedicada |
| `raid5` | RAID 5 | Paridad distribuida |
| `raid6` | RAID 6 | Doble paridad |
| `raid10` | RAID 10 | Espejo + stripe |

## VDO (Virtual Data Optimizer)

**VDO** proporciona deduplicacion y compresion en linea para reducir el espacio de almacenamiento utilizado.

### Arquitectura

```
  ┌──────────────────┐
  │  Sistema archivos │
  │  (ext4/XFS)       │
  ├──────────────────┤
  │  VDO              │  ← Deduplicacion + Compresion
  │  /dev/mapper/vdo1 │
  ├──────────────────┤
  │  LVM o disco      │
  │  /dev/sdb         │
  └──────────────────┘
```

### Configuracion de VDO

```bash
# Crear dispositivo VDO
vdo create --name=vdo1 --device=/dev/sdb --vdoLogicalSize=1T

# Con LVM (lvcreate con VDO)
lvcreate --type vdo --name vdo_lv --size 500G --virtualsize 1T mi_vg/pool

# Formatear (XFS recomendado)
mkfs.xfs -K /dev/mapper/vdo1   # -K: no descartar bloques
mount /dev/mapper/vdo1 /mnt/vdo

# Ver estadisticas
vdostats --human-readable
vdostats --verbose /dev/mapper/vdo1

# Salida ejemplo:
# Device              1K-blocks  Used      Available  Use%  Savings%
# /dev/mapper/vdo1    500G       200G      300G       40%   55%
```

### Gestion de VDO

```bash
# Ver estado
vdo status --name=vdo1

# Activar/desactivar compresion
vdo enableCompression --name=vdo1
vdo disableCompression --name=vdo1

# Activar/desactivar deduplicacion
vdo enableDeduplication --name=vdo1
vdo disableDeduplication --name=vdo1

# Expandir
vdo growLogical --name=vdo1 --vdoLogicalSize=2T
vdo growPhysical --name=vdo1
```

> **Para el examen:** VDO proporciona deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor que el tamaño fisico (thin provisioning). XFS es el FS recomendado sobre VDO.

## Metadata Backups

LVM guarda automaticamente copias de seguridad de los metadatos.

```bash
# Directorio de backups
ls /etc/lvm/backup/     # Backup actual por VG
ls /etc/lvm/archive/    # Historial de cambios

# Restaurar metadata
vgcfgrestore mi_vg                    # Restaurar ultimo backup
vgcfgrestore -f /etc/lvm/archive/mi_vg_00001.vg mi_vg  # Version especifica

# Exportar metadata
vgcfgbackup mi_vg

# Ver metadata
vgcfgbackup -f /tmp/mi_vg.backup mi_vg
cat /tmp/mi_vg.backup
```

## pvmove - Migracion Online

**pvmove** permite migrar datos entre PVs sin desmontar el LV.

```bash
# Migrar todos los LVs de un PV a otro
pvmove /dev/sdb /dev/sdc

# Migrar un LV especifico
pvmove -n mi_vg/lv_datos /dev/sdb /dev/sdc

# Ver progreso
pvmove -v /dev/sdb /dev/sdc

# Cancelar migracion (seguro)
pvmove --abort
```

> **Para el examen:** `pvmove` es esencial para reemplazar discos sin tiempo de inactividad. Los datos se mueven en linea mientras el LV sigue disponible.

## Modos de Activacion

```bash
# Activar LV
lvchange -a y mi_vg/lv_datos        # Activar
lvchange -a n mi_vg/lv_datos        # Desactivar

# Modos de activacion
lvchange -a ey mi_vg/lv_datos       # Exclusivo (un solo nodo)
lvchange -a sy mi_vg/lv_datos       # Compartido (cluster)
lvchange -a ly mi_vg/lv_datos       # Local

# Configurar activacion automatica
# /etc/lvm/lvm.conf
auto_activation_volume_list = [ "mi_vg" ]
```

| Modo | Flag | Uso |
|------|------|-----|
| Exclusivo | `-a ey` | Un solo nodo accede (normal) |
| Compartido | `-a sy` | Multiples nodos (requiere clvmd/lvmlockd) |
| Local | `-a ly` | Solo el nodo local |

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **Thin provisioning permite overprovisioning** — los thin LVs pueden sumar mas espacio virtual que el pool real. Si el pool se llena al 100%, todos los thin LVs se congelan y las escrituras fallan. Monitorizar `data_percent` del thin pool es critico; el examen pregunta que ocurre cuando el pool se queda sin espacio
- **lvconvert --uncache no pierde datos** — `--uncache` elimina el cache SSD de un LV, pero primero sincroniza los dirty blocks al HDD. Los datos del LV se conservan intactos. Sin embargo, si el SSD falla con datos dirty en modo writeback, esos datos se pierden
- **pvmove: migracion online sin downtime** — `pvmove /dev/sdb /dev/sdc` migra todos los extents de un PV a otro mientras el LV sigue accesible. Es la forma correcta de reemplazar un disco sin tiempo de inactividad. El examen puede preguntar como migrar datos de un disco viejo a uno nuevo sin desmontar
- **Thin snapshots vs snapshots clasicos** — los snapshots clasicos de LVM reservan espacio para los cambios; los thin snapshots no reservan espacio previo y son instantaneos. Ademas, los thin snapshots pueden ser snapshots de snapshots (cadenas). El examen puede preguntar la diferencia en uso de espacio
- **VDO: vdoLogicalSize puede ser mayor que el fisico** — VDO combina thin provisioning con deduplicacion y compresion. El tamaño logico puede ser 10x el fisico si la deduplicacion es alta. Pero si los datos no se deduplican bien, el espacio fisico se agota. XFS es el FS recomendado sobre VDO (con `-K` para no descartar bloques)
- **LVM RAID vs mdadm RAID** — LVM RAID usa device-mapper internamente (dm-raid) y se gestiona con `lvcreate --type raid5`. mdadm usa md directamente. LVM RAID integra RAID con volumenes logicos; mdadm es mas flexible para arrays independientes. El examen puede preguntar las ventajas de cada uno
- **Politica smq vs mq en dm-cache** — `smq` (Stochastic Multi Queue) es la politica predeterminada y mas eficiente en memoria; `mq` (Multi Queue) es legacy y consume mas RAM. Si el examen pregunta la politica de cache recomendada, la respuesta es `smq`
- **Activacion exclusiva (-a ey) vs compartida (-a sy)** — `-a ey` activa un LV en un solo nodo (modo normal); `-a sy` permite multiples nodos (requiere clvmd o lvmlockd). Activar un LV con ext4 en modo compartido en multiples nodos sin FS cluster causa corrupcion
- **vgcfgrestore restaura metadatos, no datos** — `vgcfgrestore` restaura la configuracion de LVM (estructura de PVs, VGs, LVs) pero no los datos de los LVs. Si un disco falla fisicamente, restaurar metadatos no recupera los datos. El examen puede confundir backup de metadatos con backup de datos
- **thin_pool_autoextend: prevencion de desastre** — en `lvm.conf`, `thin_pool_autoextend_threshold=70` y `thin_pool_autoextend_percent=20` hacen que el pool se expanda automaticamente al 70% de uso. Sin autoextend, el pool se llena y las escrituras fallan catastricamente
