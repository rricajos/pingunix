---
title: "362.3 - Comandos Clave: Sistemas de Archivos Cluster"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.3"
peso: 3
tags:
  - lpic-3
  - tema-362
  - comandos
  - gfs2
  - ocfs2
  - dlm
---

# 362.3 - Comandos Clave: Sistemas de Archivos Cluster

## GFS2

| Comando | Descripcion |
|---------|------------|
| `mkfs.gfs2 -p lock_dlm -t cluster:nombre -j N /dev/X` | Crear GFS2 |
| `mount -t gfs2 /dev/X /mnt/punto` | Montar GFS2 |
| `gfs2_jadd -j 1 /mnt/punto` | Añadir journal (para nuevo nodo) |
| `gfs2_grow /mnt/punto` | Expandir FS online |
| `fsck.gfs2 -y /dev/X` | Verificar FS (offline) |
| `tunegfs2 -l /dev/X` | Ver informacion del FS |
| `gfs2_tool df /mnt/punto` | Uso de espacio |

## Parametros de mkfs.gfs2

| Parametro | Descripcion |
|-----------|------------|
| `-p lock_dlm` | Protocolo de bloqueo (DLM) |
| `-t cluster:nombre` | Nombre cluster:tabla_bloqueo |
| `-j N` | Numero de journals (>=nodos) |
| `-J tamaño` | Tamaño de journal (MB) |
| `-b tamaño` | Tamaño de bloque |

## OCFS2

| Comando | Descripcion |
|---------|------------|
| `mkfs.ocfs2 --cluster-stack=pcmk -N nodos /dev/X` | Crear OCFS2 (Pacemaker) |
| `mkfs.ocfs2 --cluster-stack=o2cb -N nodos /dev/X` | Crear OCFS2 (o2cb) |
| `mount -t ocfs2 /dev/X /mnt/punto` | Montar OCFS2 |
| `tunefs.ocfs2 -S /dev/X` | Expandir FS online |
| `tunefs.ocfs2 -N 8 /dev/X` | Cambiar max nodos |
| `tunefs.ocfs2 -Q /dev/X` | Ver informacion |
| `fsck.ocfs2 -y /dev/X` | Verificar FS (offline) |
| `mounted.ocfs2 -d` | Ver montajes OCFS2 activos |

## Parametros de mkfs.ocfs2

| Parametro | Descripcion |
|-----------|------------|
| `--cluster-stack=pcmk` | Usar Pacemaker/DLM |
| `--cluster-stack=o2cb` | Usar framework o2cb |
| `--cluster-name=nombre` | Nombre del cluster |
| `-N nodos` | Numero maximo de nodos |
| `-L etiqueta` | Etiqueta del FS |
| `-T tipo` | Tipo de uso (mail, datafiles, vmstore) |

## o2cb (Framework de Cluster OCFS2)

| Comando / Archivo | Descripcion |
|-------------------|------------|
| `/etc/init.d/o2cb configure` | Configurar o2cb |
| `/etc/ocfs2/cluster.conf` | Configuracion del cluster o2cb |
| `o2cb list-clusters` | Listar clusters |
| `o2cb list-nodes cluster` | Listar nodos |

## DLM en Pacemaker

| Comando | Descripcion |
|---------|------------|
| `pcs resource create dlm ocf:pacemaker:controld clone` | Crear DLM clone |
| `pcs constraint order dlm-clone then fs-clone` | DLM antes que FS |
| `pcs constraint colocation add fs-clone with dlm-clone` | FS junto con DLM |

## Comparativa Rapida

| Aspecto | GFS2 | OCFS2 |
|---------|------|-------|
| Formato | `mkfs.gfs2` | `mkfs.ocfs2` |
| Expand | `gfs2_grow` | `tunefs.ocfs2 -S` |
| Add journal | `gfs2_jadd` | Definido en creacion |
| Check | `fsck.gfs2` | `fsck.ocfs2` |
| Cluster stack | DLM | o2cb o DLM |
| Distribucion | RHEL | Oracle/SUSE |
