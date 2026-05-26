---
title: "362.3 - Sistemas de Archivos Cluster"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.3"
peso: 3
tags:
  - lpic-3
  - tema-362
  - gfs2
  - ocfs2
  - dlm
  - sistemas-de-archivos
  - cluster
objetivos:
  - Comprender GFS2 y OCFS2
  - Configurar y usar el DLM (Distributed Lock Manager)
  - Crear y gestionar sistemas de archivos cluster
  - Entender los requisitos de fencing
  - Comparar GFS2 vs OCFS2
---

# 362.3 - Sistemas de Archivos Cluster

## Introduccion

Los **sistemas de archivos cluster** permiten que multiples nodos accedan simultaneamente al mismo sistema de archivos en almacenamiento compartido, coordinando el acceso mediante un **gestor de bloqueos distribuido (DLM)**.

### ¿Por que se necesitan?

Los sistemas de archivos tradicionales (ext4, XFS) asumen un unico escritor. Si dos nodos montan el mismo dispositivo con ext4, se produce corrupcion de datos. Los FS cluster resuelven esto con bloqueos distribuidos.

```
  Sin FS cluster:                   Con FS cluster (GFS2/OCFS2):
  Nodo1 → ext4 → disco ← ext4 ← Nodo2   Nodo1 → GFS2 → disco ← GFS2 ← Nodo2
  ¡CORRUPCION!                            DLM coordina acceso
```

## DLM - Distributed Lock Manager

El **DLM** es el componente que coordina los bloqueos entre nodos del cluster. Es necesario para GFS2 y OCFS2.

```bash
# En Pacemaker, el DLM se configura como recurso clone
pcs resource create dlm ocf:pacemaker:controld \
    op monitor interval=30s on-fail=fence clone

# DLM debe estar activo en TODOS los nodos antes de montar el FS
```

### Requisitos del DLM

1. **Cluster de comunicacion** (Corosync) funcionando
2. **Fencing** (STONITH) configurado y habilitado
3. DLM como recurso **clone** en Pacemaker

> **Para el examen:** El DLM es **obligatorio** para GFS2 y OCFS2. Debe configurarse como recurso clone (ejecutandose en todos los nodos). Sin DLM, el FS cluster no puede montarse.

## GFS2 - Global File System 2

**GFS2** es un sistema de archivos cluster desarrollado por Red Hat, integrado en el kernel Linux.

### Creacion de GFS2

```bash
# Crear GFS2 (requiere cluster activo)
mkfs.gfs2 -p lock_dlm -t cluster_name:fs_name -j N /dev/dispositivo

# Opciones principales:
# -p lock_dlm    : Protocolo de bloqueo (DLM)
# -t nombre      : cluster_name:lock_table_name
# -j N           : Numero de journals (uno por nodo que montara)
# -J tamaño      : Tamaño de cada journal (MB)

# Ejemplo:
mkfs.gfs2 -p lock_dlm -t mi_cluster:gfs2_datos -j 3 /dev/drbd0
```

### Gestion de GFS2

```bash
# Montar
mount -t gfs2 /dev/drbd0 /mnt/datos

# Montar con opciones
mount -t gfs2 -o noatime,nodiratime /dev/drbd0 /mnt/datos

# Añadir journals (para nuevos nodos)
gfs2_jadd -j 1 /mnt/datos

# Expandir sistema de archivos (online)
gfs2_grow /mnt/datos

# Verificar (offline)
fsck.gfs2 -y /dev/drbd0

# Ver informacion
gfs2_tool df /mnt/datos
tunegfs2 -l /dev/drbd0
```

### GFS2 en Pacemaker

```bash
# 1. DLM como clone
pcs resource create dlm ocf:pacemaker:controld \
    op monitor interval=30s on-fail=fence clone

# 2. Filesystem GFS2 como clone
pcs resource create gfs2_fs ocf:heartbeat:Filesystem \
    device=/dev/drbd0 directory=/mnt/datos fstype=gfs2 clone

# 3. Orden: DLM antes que GFS2
pcs constraint order dlm-clone then gfs2_fs-clone

# 4. Colocacion: GFS2 donde esta DLM
pcs constraint colocation add gfs2_fs-clone with dlm-clone
```

> **Para el examen:** El numero de journals (`-j`) debe ser al menos igual al numero de nodos que montaran el FS. Cada nodo necesita su propio journal.

## OCFS2 - Oracle Cluster File System 2

**OCFS2** es un sistema de archivos cluster desarrollado por Oracle, tambien integrado en el kernel Linux.

### Framework o2cb

OCFS2 puede usar su propio framework de cluster (**o2cb**) o integrarse con Pacemaker/DLM.

```bash
# Configurar o2cb
/etc/init.d/o2cb configure

# Archivo de configuracion del cluster o2cb
# /etc/ocfs2/cluster.conf
cluster:
    name = mi_cluster
    heartbeat_mode = local
    node_count = 2

node:
    name = nodo1
    cluster = mi_cluster
    number = 0
    ip_address = 192.168.1.10
    ip_port = 7777

node:
    name = nodo2
    cluster = mi_cluster
    number = 1
    ip_address = 192.168.1.11
    ip_port = 7777
```

### Creacion de OCFS2

```bash
# Crear OCFS2
mkfs.ocfs2 -L etiqueta --cluster-stack=pcmk --cluster-name=mi_cluster \
    -N nodos /dev/dispositivo

# Opciones principales:
# -L etiqueta          : Etiqueta del FS
# --cluster-stack      : pcmk (Pacemaker) o o2cb
# --cluster-name       : Nombre del cluster
# -N nodos            : Numero maximo de nodos
# -T tipo             : mail, datafiles, vmstore

# Con o2cb:
mkfs.ocfs2 --cluster-stack=o2cb --cluster-name=mi_cluster \
    -N 4 /dev/sdb1

# Con Pacemaker:
mkfs.ocfs2 --cluster-stack=pcmk --cluster-name=mi_cluster \
    -N 4 /dev/sdb1
```

### Gestion de OCFS2

```bash
# Montar
mount -t ocfs2 /dev/sdb1 /mnt/datos

# Verificar (offline)
fsck.ocfs2 -y /dev/sdb1

# Expandir online
tunefs.ocfs2 -S /dev/sdb1

# Ver informacion
tunefs.ocfs2 -Q /dev/sdb1
mounted.ocfs2 -d     # Ver montajes OCFS2 activos

# Cambiar numero maximo de nodos
tunefs.ocfs2 -N 8 /dev/sdb1
```

### OCFS2 en Pacemaker

```bash
# 1. DLM como clone
pcs resource create dlm ocf:pacemaker:controld \
    op monitor interval=30s on-fail=fence clone

# 2. Filesystem OCFS2 como clone
pcs resource create ocfs2_fs ocf:heartbeat:Filesystem \
    device=/dev/sdb1 directory=/mnt/datos fstype=ocfs2 \
    options="noatime" clone

# 3. Restricciones
pcs constraint order dlm-clone then ocfs2_fs-clone
pcs constraint colocation add ocfs2_fs-clone with dlm-clone
```

## Requisitos de Fencing

Los sistemas de archivos cluster **requieren fencing** configurado para funcionar correctamente:

- Si un nodo deja de responder, los demas no saben si sigue escribiendo
- El fencing garantiza que el nodo muerto no pueda corromper los datos
- Sin fencing, un nodo "zombie" podria escribir datos sin coordinacion DLM

```bash
# STONITH es obligatorio
pcs property set stonith-enabled=true

# Verificar que el fencing funciona
pcs stonith fence nodo_test
```

> **Para el examen:** **Nunca** deshabilites STONITH cuando uses GFS2 u OCFS2 en produccion. El fencing es un requisito obligatorio para la integridad de datos.

## Comparativa GFS2 vs OCFS2

| Caracteristica | GFS2 | OCFS2 |
|---------------|------|-------|
| Desarrollador | Red Hat | Oracle |
| Kernel integration | Si | Si |
| DLM | Pacemaker DLM | o2cb o Pacemaker DLM |
| Max nodos | 16 (recomendado) | 255 |
| Journals | Uno por nodo (interno) | Uno por nodo (interno) |
| Expand online | Si (`gfs2_grow`) | Si (`tunefs.ocfs2 -S`) |
| Shrink | No | No |
| POSIX compliance | Si | Si |
| Distribucion recomendada | RHEL/CentOS | Oracle Linux, SUSE |
| Herramienta de formato | `mkfs.gfs2` | `mkfs.ocfs2` |

## Escenarios: Single-Writer vs Multi-Writer

### Single-Writer (un escritor, multiples lectores)

- Un nodo escribe, los demas solo leen
- Se puede usar con sistemas de archivos normales (ext4, XFS) en modo activo/pasivo
- No requiere FS cluster si solo un nodo accede a la vez

### Multi-Writer (multiples escritores)

- Multiples nodos leen y escriben simultaneamente
- **Requiere** sistema de archivos cluster (GFS2, OCFS2)
- **Requiere** DLM y fencing
- Usado en: clusters activo/activo, almacenamiento compartido de VMs

> **Para el examen:** Si el examen pregunta cuando usar GFS2/OCFS2, la respuesta es: cuando multiples nodos necesitan acceso de escritura simultaneo al mismo dispositivo de bloque.
