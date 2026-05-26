---
title: "364.2 - Comandos Clave: RAID Avanzado"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.2"
peso: 2
tags:
  - lpic-3
  - tema-364
  - comandos
  - raid
  - mdadm
---

# 364.2 - Comandos Clave: RAID Avanzado

## mdadm - Operaciones Avanzadas

| Comando | Descripcion |
|---------|------------|
| `mdadm --grow /dev/md0 --raid-devices=N` | Expandir array a N discos |
| `mdadm --grow /dev/md0 --level=5` | Cambiar nivel RAID |
| `mdadm --grow /dev/md0 --bitmap=internal` | Añadir bitmap |
| `mdadm --grow /dev/md0 --bitmap=none` | Eliminar bitmap |
| `mdadm --grow /dev/md0 --write-journal /dev/X` | Añadir journal |
| `mdadm --detail /dev/md0` | Detalle del array |
| `mdadm --monitor --scan --daemonize` | Monitorizar arrays |
| `mdadm --monitor --scan --mail=admin@x.com` | Monitor con email |

## Monitorizacion

| Comando / Ruta | Descripcion |
|----------------|------------|
| `cat /proc/mdstat` | Estado de todos los arrays |
| `/sys/block/md0/md/sync_action` | Accion de sync actual |
| `/sys/block/md0/md/mismatch_cnt` | Bloques discrepantes |
| `/sys/block/md0/md/stripe_cache_size` | Cache de stripe |
| `echo check > /sys/block/md0/md/sync_action` | Verificar integridad |
| `echo repair > /sys/block/md0/md/sync_action` | Reparar discrepancias |

## Velocidad de Reconstruccion

| Ruta | Descripcion |
|------|------------|
| `/proc/sys/dev/raid/speed_limit_min` | Velocidad minima (KB/s) |
| `/proc/sys/dev/raid/speed_limit_max` | Velocidad maxima (KB/s) |

## RAID Hardware

| Herramienta | Fabricante | Comandos |
|------------|-----------|----------|
| `storcli` | LSI/Broadcom (MegaRAID) | `/c0 show`, `/c0/v0 show` |
| `ssacli` | HP (Smart Array) | `ctrl all show config`, `ctrl slot=0 ld all show` |
| `hpacucli` | HP (nombre antiguo) | Misma sintaxis que ssacli |

## bcache

| Comando / Ruta | Descripcion |
|----------------|------------|
| `make-bcache -C /dev/ssd` | Crear cache device |
| `make-bcache -B /dev/hdd` | Crear backing device |
| `/sys/block/bcache0/bcache/cache_mode` | Modo de cache |
| `writethrough` | Escritura en ambos (seguro) |
| `writeback` | Escritura primero en SSD (rapido) |
| `writearound` | Solo cache de lectura |

## dm-cache / lvmcache

| Comando | Descripcion |
|---------|------------|
| `lvcreate --type cache-pool -L tamaño -n pool VG /dev/ssd` | Crear cache pool |
| `lvconvert --type cache --cachepool VG/pool VG/datos` | Activar cache |
| `lvconvert --cachemode writethrough VG/datos` | Modo writethrough |
| `lvconvert --cachemode writeback VG/datos` | Modo writeback |
| `lvconvert --uncache VG/datos` | Eliminar cache |
| `lvs -a -o +cache_policy,cache_mode` | Ver estado cache |

## Bitmap / Write-Intent

| Tipo | Descripcion |
|------|------------|
| `--bitmap=internal` | Bitmap almacenado en el array |
| `--bitmap=/ruta/archivo` | Bitmap en archivo externo |
| `--bitmap=none` | Sin bitmap |
