---
title: "363.2 - Ceph"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "363 - Almacenamiento Distribuido"
subtema: "363.2"
peso: 5
tags:
  - lpic-3
  - tema-363
  - ceph
  - rados
  - rbd
  - cephfs
  - rgw
  - crush
objetivos:
  - Comprender la arquitectura de Ceph (RADOS, MON, OSD, MDS, MGR)
  - Entender el algoritmo CRUSH y placement groups
  - Gestionar pools y OSDs
  - Conocer RBD, CephFS y RGW
  - Desplegar Ceph con cephadm
---

# 363.2 - Ceph

## Introduccion a Ceph

**Ceph** es una plataforma de almacenamiento distribuido que proporciona almacenamiento de objetos, bloques y archivos en un unico sistema unificado. Es altamente escalable y no tiene punto unico de fallo.

## Arquitectura de Ceph

### RADOS (Reliable Autonomic Distributed Object Store)

**RADOS** es la capa base de Ceph. Todos los datos se almacenan como objetos en RADOS. Las capas superiores (RBD, CephFS, RGW) son interfaces sobre RADOS.

```
  ┌───────────┐  ┌───────────┐  ┌───────────┐
  │    RBD    │  │  CephFS   │  │    RGW    │
  │  (Block)  │  │  (File)   │  │ (Object)  │
  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘
        │               │               │
  ┌─────┴───────────────┴───────────────┴─────┐
  │              librados                      │
  ├────────────────────────────────────────────┤
  │                 RADOS                      │
  │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐     │
  │  │ OSD │  │ OSD │  │ OSD │  │ OSD │     │
  │  └─────┘  └─────┘  └─────┘  └─────┘     │
  │  ┌─────┐  ┌─────┐  ┌─────┐              │
  │  │ MON │  │ MON │  │ MON │              │
  │  └─────┘  └─────┘  └─────┘              │
  └────────────────────────────────────────────┘
```

### Componentes (Daemons)

| Componente | Funcion |
|-----------|---------|
| **MON** (Monitor) | Mantiene mapas del cluster (OSD map, MON map, CRUSH map, PG map). Requiere quorum (minimo 3) |
| **OSD** (Object Storage Daemon) | Almacena datos, gestiona replicacion y recuperacion. Uno por disco |
| **MDS** (Metadata Server) | Gestiona metadatos para CephFS. No necesario para RBD/RGW |
| **MGR** (Manager) | Monitoriza metricas, dashboard web, modulos adicionales |
| **RGW** (RADOS Gateway) | Gateway para acceso compatible con S3 y Swift |

> **Para el examen:** MON requiere numero impar (3 o 5) para quorum. OSD hay uno por disco. MDS solo es necesario para CephFS. MGR proporciona el dashboard y metricas.

## Algoritmo CRUSH

**CRUSH** (Controlled Replication Under Scalable Hashing) es el algoritmo que Ceph usa para determinar donde almacenar los datos. No necesita tabla de asignacion centralizada.

### Funcionamiento

```
  Objeto → hash → Placement Group (PG) → CRUSH → OSDs
```

1. El objeto se mapea a un **Placement Group** (PG) mediante hash
2. CRUSH mapea el PG a un conjunto de OSDs segun las reglas CRUSH
3. Las reglas CRUSH definen la topologia y politica de colocacion

### CRUSH Map

```
# Ver CRUSH map
ceph osd crush dump

# Estructura jerarquica tipica
root default
  rack rack1
    host host1
      osd.0
      osd.1
    host host2
      osd.2
      osd.3
  rack rack2
    host host3
      osd.4
      osd.5
```

### CRUSH Rules

```bash
# Listar reglas CRUSH
ceph osd crush rule ls

# Ver detalle de una regla
ceph osd crush rule dump replicated_rule

# Crear regla personalizada
ceph osd crush rule create-replicated mi_regla default rack
# replica entre racks diferentes
```

## Placement Groups (PGs)

Los **Placement Groups** son agrupaciones logicas de objetos que simplifican la gestion de replicacion.

```bash
# Ver PGs
ceph pg ls
ceph pg stat

# Calcular PGs recomendados para un pool
# Formula: (OSDs * 100) / replicas, redondeado a potencia de 2

# Ver estado de un PG
ceph pg 1.2a query
```

| Estado PG | Significado |
|----------|------------|
| `active+clean` | Normal, todo bien |
| `active+degraded` | Funcionando pero faltan replicas |
| `active+recovering` | Recuperando datos |
| `peering` | Estableciendo acuerdo entre OSDs |
| `stale` | PG sin actualizaciones recientes |
| `inactive` | PG no disponible |

> **Para el examen:** El estado ideal de un PG es `active+clean`. Si ves `degraded` significa que no hay suficientes replicas.

## Gestion del Cluster

### Estado del Cluster

```bash
# Estado general
ceph status
ceph -s         # Forma corta

# Salud del cluster
ceph health
ceph health detail

# Estado en tiempo real
ceph -w
```

### Gestion de OSDs

```bash
# Ver arbol de OSDs
ceph osd tree

# Ver estado de los OSDs
ceph osd stat
ceph osd status

# Marcar OSD fuera de servicio
ceph osd out osd.2

# Marcar OSD en servicio
ceph osd in osd.2

# Detener un OSD
ceph osd down osd.2

# Eliminar un OSD
ceph osd crush remove osd.2
ceph auth del osd.2
ceph osd rm osd.2
```

### Gestion de Pools

```bash
# Crear pool replicado
ceph osd pool create mi_pool 128 128 replicated

# Crear pool erasure coded
ceph osd pool create ec_pool 128 128 erasure

# Listar pools
ceph osd pool ls
ceph osd pool ls detail

# Ver estadisticas de un pool
ceph osd pool stats mi_pool

# Configurar replicas
ceph osd pool set mi_pool size 3       # Replicas totales
ceph osd pool set mi_pool min_size 2   # Minimo para operar

# Eliminar pool (requiere doble confirmacion)
ceph osd pool delete mi_pool mi_pool --yes-i-really-really-mean-it

# Asignar regla CRUSH a un pool
ceph osd pool set mi_pool crush_rule mi_regla

# Aplicacion del pool
ceph osd pool application enable mi_pool rbd
ceph osd pool application enable mi_pool cephfs
ceph osd pool application enable mi_pool rgw
```

## RBD - RADOS Block Device

**RBD** proporciona almacenamiento de bloques sobre Ceph, similar a un disco virtual.

```bash
# Crear imagen RBD
rbd create mi_disco --size 10G --pool mi_pool

# Listar imagenes
rbd ls mi_pool

# Ver informacion
rbd info mi_pool/mi_disco

# Mapear imagen a dispositivo de bloque
rbd map mi_pool/mi_disco
# Crea /dev/rbd0

# Crear FS y montar
mkfs.ext4 /dev/rbd0
mount /dev/rbd0 /mnt/rbd

# Desmapear
umount /mnt/rbd
rbd unmap /dev/rbd0

# Snapshots
rbd snap create mi_pool/mi_disco@snap1
rbd snap ls mi_pool/mi_disco
rbd snap rollback mi_pool/mi_disco@snap1
rbd snap rm mi_pool/mi_disco@snap1

# Redimensionar
rbd resize mi_pool/mi_disco --size 20G
```

> **Para el examen:** RBD es ideal para volumenes de maquinas virtuales y contenedores. Soporta thin provisioning, snapshots y clones.

## CephFS - Ceph File System

**CephFS** es un sistema de archivos distribuido compatible con POSIX que se ejecuta sobre RADOS. Requiere al menos un **MDS** (Metadata Server).

```bash
# Crear pools para CephFS
ceph osd pool create cephfs_data 128
ceph osd pool create cephfs_metadata 64

# Crear filesystem
ceph fs new mi_cephfs cephfs_metadata cephfs_data

# Ver estado del FS
ceph fs ls
ceph fs status mi_cephfs

# Montar con kernel driver
mount -t ceph mon1:6789:/ /mnt/cephfs -o name=admin,secret=CLAVE

# Montar con FUSE
ceph-fuse /mnt/cephfs

# En /etc/fstab (kernel mount)
mon1,mon2,mon3:/  /mnt/cephfs  ceph  name=admin,secretfile=/etc/ceph/secret,_netdev  0  0
```

## RGW - RADOS Gateway

**RGW** proporciona una interfaz REST compatible con **Amazon S3** y **OpenStack Swift**.

```bash
# Crear usuario RGW
radosgw-admin user create --uid=miusuario --display-name="Mi Usuario"

# Listar usuarios
radosgw-admin user list

# Ver informacion del usuario
radosgw-admin user info --uid=miusuario

# Crear bucket (via S3 CLI)
aws s3 mb s3://mi-bucket --endpoint-url http://ceph-rgw:7480

# Subir objeto
aws s3 cp archivo.txt s3://mi-bucket/ --endpoint-url http://ceph-rgw:7480
```

## Despliegue con cephadm

**cephadm** es la herramienta oficial para desplegar y gestionar clusters Ceph modernos (desde Octopus).

```bash
# Bootstrap del cluster (primer nodo)
cephadm bootstrap --mon-ip 192.168.1.10

# Añadir hosts
ceph orch host add nodo2 192.168.1.11
ceph orch host add nodo3 192.168.1.12

# Desplegar OSDs en todos los discos disponibles
ceph orch apply osd --all-available-devices

# Desplegar servicios
ceph orch apply mon 3           # 3 monitores
ceph orch apply mgr 2           # 2 managers
ceph orch apply mds mi_cephfs   # MDS para CephFS
ceph orch apply rgw mi_rgw      # RGW

# Ver servicios
ceph orch ls
ceph orch ps
```

## Archivo de Configuracion

```ini
# /etc/ceph/ceph.conf
[global]
fsid = a1b2c3d4-e5f6-7890-abcd-ef1234567890
mon_initial_members = mon1, mon2, mon3
mon_host = 192.168.1.10, 192.168.1.11, 192.168.1.12
auth_cluster_required = cephx
auth_service_required = cephx
auth_client_required = cephx
public_network = 192.168.1.0/24
cluster_network = 10.0.0.0/24

[osd]
osd_journal_size = 5120
osd_pool_default_size = 3
osd_pool_default_min_size = 2

[mds]
mds_cache_memory_limit = 4294967296
```

> **Para el examen:** `cephadm` ha reemplazado a `ceph-deploy` como herramienta oficial de despliegue. `public_network` es para clientes, `cluster_network` es para trafico de replicacion entre OSDs.
