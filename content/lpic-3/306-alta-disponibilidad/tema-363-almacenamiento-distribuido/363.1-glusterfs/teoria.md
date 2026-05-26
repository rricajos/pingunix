---
title: "363.1 - GlusterFS"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "363 - Almacenamiento Distribuido"
subtema: "363.1"
peso: 5
tags:
  - lpic-3
  - tema-363
  - glusterfs
  - almacenamiento-distribuido
  - volumenes
  - replicacion
objetivos:
  - Comprender la arquitectura de GlusterFS
  - Conocer los tipos de volumenes
  - Administrar peers, volumenes y bricks
  - Configurar montajes FUSE y NFS-Ganesha
  - Gestionar geo-replicacion y healing
---

# 363.1 - GlusterFS

## Introduccion a GlusterFS

**GlusterFS** es un sistema de archivos distribuido de codigo abierto capaz de escalar a varios petabytes. Agrega almacenamiento de multiples servidores en un espacio de nombres unificado.

### Caracteristicas Principales

- Almacenamiento distribuido sin punto unico de fallo
- Escalabilidad horizontal (añadir mas nodos)
- Acceso via FUSE, NFS (Ganesha), SMB
- No requiere servidor de metadatos centralizado
- Basado en translators apilables

## Arquitectura de GlusterFS

### Componentes

```
  ┌──────────────────────────────────────────┐
  │              Clientes                     │
  │  (FUSE mount, NFS-Ganesha, libgfapi)     │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────┴───────────────────────────┐
  │           Translators                     │
  │  (DHT, AFR, EC, io-cache, write-behind)  │
  └──────────────┬───────────────────────────┘
                 │
  ┌──────────────┴───────────────────────────┐
  │        Servidores GlusterFS              │
  │  ┌────────┐  ┌────────┐  ┌────────┐     │
  │  │ Brick1 │  │ Brick2 │  │ Brick3 │     │
  │  │/data/b1│  │/data/b2│  │/data/b3│     │
  │  └────────┘  └────────┘  └────────┘     │
  └──────────────────────────────────────────┘
```

### Conceptos Clave

| Concepto | Descripcion |
|----------|------------|
| **Brick** | Directorio en un servidor que sirve como unidad de almacenamiento |
| **Volume** | Coleccion logica de bricks |
| **Peer** | Servidor miembro del Trusted Storage Pool |
| **Translator** | Modulo que transforma las peticiones de E/S |
| **Trusted Storage Pool** | Conjunto de servidores GlusterFS confiables |
| **GFID** | GlusterFS File Identifier (identificador unico de archivo) |

> **Para el examen:** GlusterFS no tiene servidor de metadatos centralizado. Usa un algoritmo de hash elastico (DHT - Distributed Hash Table) para localizar archivos.

## Tipos de Volumenes

### Distributed (Distribuido)

Los archivos se distribuyen entre bricks sin replicacion.

```
  Archivo A → Brick1
  Archivo B → Brick2
  Archivo C → Brick3
```

```bash
gluster volume create vol_dist \
    server1:/data/brick1 \
    server2:/data/brick2 \
    server3:/data/brick3
```

- **Ventaja:** Capacidad total = suma de todos los bricks
- **Riesgo:** Si un brick falla, se pierden los archivos de ese brick

### Replicated (Replicado)

Cada archivo se copia en multiples bricks.

```
  Archivo A → Brick1 + Brick2 (copia)
  Archivo B → Brick1 + Brick2 (copia)
```

```bash
gluster volume create vol_repl replica 2 \
    server1:/data/brick1 \
    server2:/data/brick2
```

- **Ventaja:** Redundancia completa
- **Capacidad:** Total / numero_de_replicas

### Striped (Segmentado) - OBSOLETO

Los archivos se dividen en segmentos entre bricks (similar a RAID 0). **Deprecado** en versiones recientes.

### Dispersed (Disperso)

Usa erasure coding (similar a RAID 5/6) para distribuir datos con redundancia.

```bash
gluster volume create vol_disp disperse 3 redundancy 1 \
    server1:/data/brick1 \
    server2:/data/brick2 \
    server3:/data/brick3
```

- **Ventaja:** Buen balance entre capacidad y redundancia
- **Capacidad:** (N - redundancia) * tamaño_brick

### Distributed-Replicated (Distribuido-Replicado)

Combina distribucion con replicacion. Los archivos se distribuyen y cada fragmento se replica.

```bash
gluster volume create vol_dist_repl replica 2 \
    server1:/data/brick1 \
    server2:/data/brick2 \
    server3:/data/brick3 \
    server4:/data/brick4
```

```
  Archivo A → Brick1 + Brick2 (replica)
  Archivo B → Brick3 + Brick4 (replica)
```

- **Numero de bricks:** Debe ser multiplo del factor de replica
- Es el tipo mas usado en produccion

> **Para el examen:** Conoce todos los tipos de volumen. `distributed-replicated` es el mas comun. El numero de bricks debe ser multiplo del factor de replica.

## Administracion de GlusterFS

### Gestion del Pool de Confianza (Peers)

```bash
# Añadir un peer al pool
gluster peer probe server2
gluster peer probe server3

# Ver estado de los peers
gluster peer status

# Eliminar un peer
gluster peer detach server3

# Listar peers
gluster pool list
```

### Gestion de Volumenes

```bash
# Crear volumen
gluster volume create mi_vol replica 2 \
    server1:/data/brick1 server2:/data/brick2

# Iniciar volumen
gluster volume start mi_vol

# Detener volumen
gluster volume stop mi_vol

# Eliminar volumen (debe estar detenido)
gluster volume delete mi_vol

# Ver informacion del volumen
gluster volume info mi_vol
gluster volume info all

# Ver estado del volumen
gluster volume status mi_vol
gluster volume status mi_vol detail
gluster volume status mi_vol clients
```

### Añadir y Eliminar Bricks

```bash
# Añadir bricks (para expandir)
gluster volume add-brick mi_vol \
    server3:/data/brick3 server4:/data/brick4

# Eliminar bricks (requiere rebalanceo previo)
gluster volume remove-brick mi_vol \
    server3:/data/brick3 server4:/data/brick4 start

# Ver progreso de la eliminacion
gluster volume remove-brick mi_vol \
    server3:/data/brick3 server4:/data/brick4 status

# Confirmar eliminacion
gluster volume remove-brick mi_vol \
    server3:/data/brick3 server4:/data/brick4 commit
```

### Rebalanceo

Cuando se añaden o eliminan bricks, los datos deben rebalancearse:

```bash
# Iniciar rebalanceo
gluster volume rebalance mi_vol start

# Ver estado del rebalanceo
gluster volume rebalance mi_vol status

# Detener rebalanceo
gluster volume rebalance mi_vol stop
```

> **Para el examen:** Despues de añadir bricks, SIEMPRE ejecutar `rebalance` para distribuir los datos existentes a los nuevos bricks. Sin rebalanceo, solo los archivos nuevos iran a los bricks nuevos.

## Montaje del Volumen

### FUSE Mount (Nativo)

```bash
# Montar con FUSE
mount -t glusterfs server1:/mi_vol /mnt/gluster

# En /etc/fstab
server1:/mi_vol  /mnt/gluster  glusterfs  defaults,_netdev  0  0

# Con opciones
mount -t glusterfs -o backup-volfile-servers=server2:server3 \
    server1:/mi_vol /mnt/gluster
```

### NFS-Ganesha

NFS-Ganesha es el servidor NFS recomendado para exportar volumenes GlusterFS:

```bash
# Habilitar NFS-Ganesha en el volumen
gluster nfs-ganesha enable

# Exportar volumen via NFS
gluster volume set mi_vol ganesha.enable on

# Montar via NFS en el cliente
mount -t nfs -o vers=4 server1:/mi_vol /mnt/nfs_gluster
```

## Opciones de Volumen

```bash
# Configurar opciones
gluster volume set mi_vol performance.cache-size 256MB
gluster volume set mi_vol performance.write-behind-window-size 1MB
gluster volume set mi_vol network.ping-timeout 10
gluster volume set mi_vol cluster.self-heal-daemon on

# Ver opciones configuradas
gluster volume get mi_vol all

# Restablecer una opcion al valor predeterminado
gluster volume reset mi_vol performance.cache-size
```

## Geo-Replicacion

La **geo-replicacion** permite replicar volumenes entre clusters GlusterFS distantes geograficamente (asincronamente).

```bash
# Crear sesion de geo-replicacion
gluster volume geo-replication mi_vol \
    remote_user@remote_host::vol_remoto create push-pem

# Iniciar
gluster volume geo-replication mi_vol \
    remote_user@remote_host::vol_remoto start

# Ver estado
gluster volume geo-replication mi_vol \
    remote_user@remote_host::vol_remoto status

# Detener
gluster volume geo-replication mi_vol \
    remote_user@remote_host::vol_remoto stop

# Eliminar
gluster volume geo-replication mi_vol \
    remote_user@remote_host::vol_remoto delete
```

> **Para el examen:** La geo-replicacion es asincrona (a diferencia de la replicacion normal que es sincrona). Se usa para DR (Disaster Recovery) entre sitios remotos.

## Healing (Auto-Reparacion)

Cuando un brick se recupera de un fallo, GlusterFS repara automaticamente los datos desincronizados:

```bash
# Ver archivos que necesitan healing
gluster volume heal mi_vol info

# Iniciar healing manual
gluster volume heal mi_vol

# Ver estadisticas de healing
gluster volume heal mi_vol statistics

# Healing completo (full crawl)
gluster volume heal mi_vol full

# Activar self-heal daemon
gluster volume set mi_vol cluster.self-heal-daemon on
```

## Translators Importantes

| Translator | Funcion |
|-----------|---------|
| **DHT** (Distributed Hash Table) | Distribuye archivos entre bricks |
| **AFR** (Automatic File Replication) | Replica archivos entre bricks |
| **EC** (Erasure Coding) | Dispersed volumes (erasure coding) |
| **io-cache** | Cache de lectura |
| **write-behind** | Escritura diferida |
| **read-ahead** | Lectura anticipada |

## Puertos y Servicios

| Puerto | Servicio |
|--------|---------|
| 24007 | glusterd (daemon de gestion) |
| 24008 | Gestion interna |
| 49152+ | Bricks (un puerto por brick) |
| 2049 | NFS-Ganesha |
