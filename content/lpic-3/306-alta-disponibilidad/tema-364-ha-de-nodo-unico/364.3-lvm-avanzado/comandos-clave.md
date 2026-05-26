---
title: "364.3 - Comandos Clave: LVM Avanzado"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.3"
peso: 2
tags:
  - lpic-3
  - tema-364
  - comandos
  - lvm
  - thin-provisioning
  - vdo
---

# 364.3 - Comandos Clave: LVM Avanzado

## Thin Provisioning

| Comando | Descripcion |
|---------|------------|
| `lvcreate --type thin-pool -L tamaño -n pool VG` | Crear thin pool |
| `lvcreate --type thin -V tamaño_virtual --thinpool pool -n lv VG` | Crear thin LV |
| `lvcreate -s --name snap VG/thin_lv` | Snapshot thin |
| `lvs -a -o +data_percent,metadata_percent` | Ver uso del pool |

## LVM Cache

| Comando | Descripcion |
|---------|------------|
| `lvcreate --type cache-pool -L tamaño -n pool VG /dev/ssd` | Crear cache pool |
| `lvconvert --type cache --cachepool VG/pool VG/datos` | Activar cache |
| `lvconvert --cachemode writeback VG/datos` | Modo writeback |
| `lvconvert --cachemode writethrough VG/datos` | Modo writethrough |
| `lvconvert --uncache VG/datos` | Eliminar cache |
| `lvchange --cachepolicy smq VG/datos` | Cambiar politica |
| `lvs -o +cache_read_hits,cache_write_hits` | Estadisticas cache |

## LVM RAID

| Comando | Descripcion |
|---------|------------|
| `lvcreate --type raid1 -m 1 -L tamaño -n lv VG` | RAID 1 |
| `lvcreate --type raid5 -i N -L tamaño -n lv VG` | RAID 5 |
| `lvcreate --type raid6 -i N -L tamaño -n lv VG` | RAID 6 |
| `lvconvert --type raid1 -m 1 VG/lv` | Convertir a RAID 1 |
| `lvconvert --type raid5 VG/lv` | Convertir a RAID 5 |
| `lvs -a -o +lv_health_status` | Estado de salud |

## VDO (Virtual Data Optimizer)

| Comando | Descripcion |
|---------|------------|
| `vdo create --name=vdo1 --device=/dev/X --vdoLogicalSize=1T` | Crear VDO |
| `vdostats --human-readable` | Estadisticas |
| `vdostats --verbose /dev/mapper/vdo1` | Stats detalladas |
| `vdo status --name=vdo1` | Estado |
| `vdo enableCompression --name=vdo1` | Activar compresion |
| `vdo disableCompression --name=vdo1` | Desactivar compresion |
| `vdo enableDeduplication --name=vdo1` | Activar deduplicacion |
| `vdo disableDeduplication --name=vdo1` | Desactivar deduplicacion |
| `vdo growLogical --name=vdo1 --vdoLogicalSize=2T` | Expandir logico |
| `vdo growPhysical --name=vdo1` | Expandir fisico |

## Metadata y Backups

| Comando / Ruta | Descripcion |
|----------------|------------|
| `/etc/lvm/backup/` | Backups actuales por VG |
| `/etc/lvm/archive/` | Historial de cambios |
| `vgcfgrestore VG` | Restaurar ultimo backup |
| `vgcfgrestore -f archivo VG` | Restaurar version especifica |
| `vgcfgbackup VG` | Crear backup manual |

## pvmove - Migracion Online

| Comando | Descripcion |
|---------|------------|
| `pvmove /dev/origen /dev/destino` | Migrar todos los LVs |
| `pvmove -n VG/lv /dev/origen /dev/destino` | Migrar LV especifico |
| `pvmove --abort` | Cancelar migracion |

## Modos de Activacion

| Comando | Descripcion |
|---------|------------|
| `lvchange -a y VG/lv` | Activar |
| `lvchange -a n VG/lv` | Desactivar |
| `lvchange -a ey VG/lv` | Activar exclusivo |
| `lvchange -a sy VG/lv` | Activar compartido |
| `lvchange -a ly VG/lv` | Activar local |

## Configuracion LVM

| Archivo / Parametro | Descripcion |
|---------------------|------------|
| `/etc/lvm/lvm.conf` | Configuracion principal |
| `thin_pool_autoextend_threshold` | Umbral de auto-extension (%) |
| `thin_pool_autoextend_percent` | Porcentaje de extension |
| `auto_activation_volume_list` | LVs que se activan automaticamente |
