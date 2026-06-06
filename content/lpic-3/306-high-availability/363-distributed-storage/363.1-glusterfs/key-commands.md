---
title: "363.1 - Comandos Clave: GlusterFS"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "363 - Almacenamiento Distribuido"
subtema: "363.1"
peso: 5
tags:
  - lpic-3
  - tema-363
  - comandos
  - glusterfs
---

# 363.1 - Comandos Clave: GlusterFS

## Gestion de Peers

| Comando | Descripcion |
|---------|------------|
| `gluster peer probe servidor` | Añadir servidor al pool |
| `gluster peer detach servidor` | Eliminar servidor del pool |
| `gluster peer status` | Ver estado de peers |
| `gluster pool list` | Listar todos los peers |

## Gestion de Volumenes

| Comando | Descripcion |
|---------|------------|
| `gluster volume create VOL bricks...` | Crear volumen distribuido |
| `gluster volume create VOL replica N bricks...` | Crear volumen replicado |
| `gluster volume create VOL disperse N redundancy M bricks...` | Crear volumen disperso |
| `gluster volume start VOL` | Iniciar volumen |
| `gluster volume stop VOL` | Detener volumen |
| `gluster volume delete VOL` | Eliminar volumen |
| `gluster volume info [VOL\|all]` | Informacion del volumen |
| `gluster volume status [VOL]` | Estado del volumen |
| `gluster volume status VOL detail` | Estado detallado |
| `gluster volume status VOL clients` | Clientes conectados |

## Bricks y Rebalanceo

| Comando | Descripcion |
|---------|------------|
| `gluster volume add-brick VOL bricks...` | Añadir bricks |
| `gluster volume remove-brick VOL bricks... start` | Iniciar eliminacion de bricks |
| `gluster volume remove-brick VOL bricks... status` | Estado de eliminacion |
| `gluster volume remove-brick VOL bricks... commit` | Confirmar eliminacion |
| `gluster volume rebalance VOL start` | Iniciar rebalanceo |
| `gluster volume rebalance VOL status` | Estado del rebalanceo |
| `gluster volume rebalance VOL stop` | Detener rebalanceo |

## Opciones de Volumen

| Comando | Descripcion |
|---------|------------|
| `gluster volume set VOL opcion valor` | Establecer opcion |
| `gluster volume get VOL all` | Ver todas las opciones |
| `gluster volume reset VOL opcion` | Restablecer opcion |

## Healing

| Comando | Descripcion |
|---------|------------|
| `gluster volume heal VOL` | Iniciar healing |
| `gluster volume heal VOL info` | Archivos pendientes de heal |
| `gluster volume heal VOL full` | Healing completo |
| `gluster volume heal VOL statistics` | Estadisticas de healing |

## Geo-Replicacion

| Comando | Descripcion |
|---------|------------|
| `gluster volume geo-replication VOL user@host::VOL_REM create push-pem` | Crear sesion |
| `gluster volume geo-replication VOL user@host::VOL_REM start` | Iniciar |
| `gluster volume geo-replication VOL user@host::VOL_REM status` | Estado |
| `gluster volume geo-replication VOL user@host::VOL_REM stop` | Detener |
| `gluster volume geo-replication VOL user@host::VOL_REM delete` | Eliminar |

## Montaje

| Comando | Descripcion |
|---------|------------|
| `mount -t glusterfs server:/VOL /mnt/punto` | Montar via FUSE |
| `mount -t nfs -o vers=4 server:/VOL /mnt/punto` | Montar via NFS-Ganesha |

## Tipos de Volumen - Referencia Rapida

| Tipo | Comando de creacion | Descripcion |
|------|--------------------|------------|
| Distributed | `create VOL brick1 brick2` | Archivos distribuidos sin replica |
| Replicated | `create VOL replica N brick1 brick2` | Cada archivo en N bricks |
| Dispersed | `create VOL disperse N redundancy M bricks` | Erasure coding |
| Distributed-Replicated | `create VOL replica N brick1..brickN*M` | Distribuido + replicado |

## Puertos

| Puerto | Servicio |
|--------|---------|
| 24007 | glusterd |
| 49152+ | Bricks |
| 2049 | NFS-Ganesha |
