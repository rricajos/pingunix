---
title: "363.2 - Comandos Clave: Ceph"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "363 - Almacenamiento Distribuido"
subtema: "363.2"
peso: 5
tags:
  - lpic-3
  - tema-363
  - comandos
  - ceph
---

# 363.2 - Comandos Clave: Ceph

## Estado del Cluster

| Comando | Descripcion |
|---------|------------|
| `ceph status` / `ceph -s` | Estado general del cluster |
| `ceph health` | Salud del cluster |
| `ceph health detail` | Salud con detalles |
| `ceph -w` | Monitor en tiempo real |
| `ceph df` | Uso de almacenamiento |

## Gestion de OSDs

| Comando | Descripcion |
|---------|------------|
| `ceph osd tree` | Arbol jerarquico de OSDs |
| `ceph osd stat` | Estadisticas de OSDs |
| `ceph osd status` | Estado de cada OSD |
| `ceph osd in osd.N` | Marcar OSD en servicio |
| `ceph osd out osd.N` | Marcar OSD fuera de servicio |
| `ceph osd down osd.N` | Marcar OSD como caido |
| `ceph osd rm osd.N` | Eliminar OSD |
| `ceph osd crush remove osd.N` | Eliminar OSD del CRUSH map |

## Gestion de Pools

| Comando | Descripcion |
|---------|------------|
| `ceph osd pool create POOL PGs` | Crear pool replicado |
| `ceph osd pool create POOL PGs PGs erasure` | Crear pool erasure |
| `ceph osd pool ls [detail]` | Listar pools |
| `ceph osd pool stats POOL` | Estadisticas del pool |
| `ceph osd pool set POOL size N` | Configurar replicas |
| `ceph osd pool set POOL min_size N` | Minimo de replicas |
| `ceph osd pool set POOL crush_rule REGLA` | Asignar regla CRUSH |
| `ceph osd pool application enable POOL TIPO` | Habilitar aplicacion |
| `ceph osd pool delete POOL POOL --yes-i-really-really-mean-it` | Eliminar pool |

## CRUSH

| Comando | Descripcion |
|---------|------------|
| `ceph osd crush dump` | Volcar CRUSH map completo |
| `ceph osd crush rule ls` | Listar reglas CRUSH |
| `ceph osd crush rule dump REGLA` | Detalle de regla |
| `ceph osd crush rule create-replicated REGLA root tipo` | Crear regla |

## RBD (Block Device)

| Comando | Descripcion |
|---------|------------|
| `rbd create IMAGEN --size TAMAÑO --pool POOL` | Crear imagen |
| `rbd ls POOL` | Listar imagenes |
| `rbd info POOL/IMAGEN` | Informacion de imagen |
| `rbd map POOL/IMAGEN` | Mapear a /dev/rbdN |
| `rbd unmap /dev/rbdN` | Desmapear |
| `rbd resize POOL/IMAGEN --size TAMAÑO` | Redimensionar |
| `rbd snap create POOL/IMAGEN@SNAP` | Crear snapshot |
| `rbd snap ls POOL/IMAGEN` | Listar snapshots |
| `rbd snap rollback POOL/IMAGEN@SNAP` | Revertir a snapshot |
| `rbd snap rm POOL/IMAGEN@SNAP` | Eliminar snapshot |

## CephFS

| Comando | Descripcion |
|---------|------------|
| `ceph fs new NOMBRE pool_meta pool_data` | Crear filesystem |
| `ceph fs ls` | Listar filesystems |
| `ceph fs status NOMBRE` | Estado del FS |
| `mount -t ceph mon:6789:/ /mnt -o name=admin` | Montar (kernel) |
| `ceph-fuse /mnt/cephfs` | Montar (FUSE) |

## RGW (RADOS Gateway)

| Comando | Descripcion |
|---------|------------|
| `radosgw-admin user create --uid=UID --display-name=NOMBRE` | Crear usuario |
| `radosgw-admin user list` | Listar usuarios |
| `radosgw-admin user info --uid=UID` | Info de usuario |
| `radosgw-admin bucket list` | Listar buckets |

## cephadm (Despliegue)

| Comando | Descripcion |
|---------|------------|
| `cephadm bootstrap --mon-ip IP` | Bootstrap del cluster |
| `ceph orch host add NODO IP` | Añadir host |
| `ceph orch apply osd --all-available-devices` | Desplegar OSDs |
| `ceph orch apply mon N` | Desplegar N monitores |
| `ceph orch apply mgr N` | Desplegar N managers |
| `ceph orch apply mds FSNAME` | Desplegar MDS |
| `ceph orch ls` | Listar servicios |
| `ceph orch ps` | Listar procesos |

## Archivos de Configuracion

| Archivo | Descripcion |
|---------|------------|
| `/etc/ceph/ceph.conf` | Configuracion principal |
| `/etc/ceph/ceph.client.admin.keyring` | Keyring del admin |
| `/var/lib/ceph/` | Datos de los daemons |
