---
title: "363.1 - Ejercicios: GlusterFS"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "363 - Almacenamiento Distribuido"
subtema: "363.1"
peso: 5
tags:
  - lpic-3
  - tema-363
  - ejercicios
  - glusterfs
---

# 363.1 - Ejercicios: GlusterFS

### Pregunta 1
¿Que comando añade un nuevo servidor al Trusted Storage Pool de GlusterFS?

a) `gluster pool add server2`
b) `gluster peer probe server2`
c) `gluster node add server2`
d) `gluster cluster join server2`

<details><summary>Respuesta</summary>

**b) `gluster peer probe server2`**

`gluster peer probe` añade un servidor al pool de confianza (Trusted Storage Pool). Debe ejecutarse desde un nodo ya existente del pool.
</details>

### Pregunta 2
¿Que tipo de volumen GlusterFS usa erasure coding para proporcionar redundancia con menor coste de almacenamiento?

a) Distributed
b) Replicated
c) Dispersed
d) Striped

<details><summary>Respuesta</summary>

**c) Dispersed**

Los volumenes dispersed (dispersos) usan erasure coding, similar a RAID 5/6. Proporcionan redundancia con menos overhead de almacenamiento que la replicacion completa. Se crean con `disperse N redundancy M`.
</details>

### Pregunta 3
¿Cuantos bricks se necesitan para crear un volumen distributed-replicated con replica 3 y 2 sets de distribucion?

a) 3
b) 4
c) 5
d) 6

<details><summary>Respuesta</summary>

**d) 6**

Un volumen distributed-replicated con replica 3 y 2 sets de distribucion necesita 3 x 2 = 6 bricks. El numero total de bricks debe ser multiplo del factor de replica.
</details>

### Pregunta 4
¿Que accion se debe realizar despues de añadir bricks a un volumen existente para distribuir los datos existentes?

a) `gluster volume heal`
b) `gluster volume rebalance start`
c) `gluster volume restart`
d) `gluster volume sync`

<details><summary>Respuesta</summary>

**b) `gluster volume rebalance start`**

El rebalanceo redistribuye los datos existentes entre todos los bricks, incluyendo los nuevos. Sin rebalanceo, solo los archivos nuevos se colocarian en los bricks nuevos.
</details>

### Pregunta 5
¿Que tipo de montaje nativo usa GlusterFS para acceder a los volumenes desde los clientes?

a) NFS
b) CIFS
c) FUSE
d) iSCSI

<details><summary>Respuesta</summary>

**c) FUSE**

GlusterFS usa FUSE (Filesystem in Userspace) como metodo de montaje nativo. El comando es `mount -t glusterfs server:/volumen /punto_montaje`. Tambien puede exportarse via NFS-Ganesha o SMB.
</details>

### Pregunta 6
¿Que tipo de replicacion usa la geo-replicacion de GlusterFS?

a) Sincrona
b) Asincrona
c) Semi-sincrona
d) Sincrona con cache

<details><summary>Respuesta</summary>

**b) Asincrona**

La geo-replicacion es asincrona, diseñada para replicar datos entre clusters GlusterFS distantes geograficamente. La replicacion normal (replica dentro de un volumen) es sincrona.
</details>

### Pregunta 7
¿Que hace el comando `gluster volume heal mi_vol info`?

a) Repara archivos dañados
b) Muestra archivos pendientes de reparacion
c) Activa el daemon de self-heal
d) Muestra el historial de reparaciones

<details><summary>Respuesta</summary>

**b) Muestra archivos pendientes de reparacion**

`gluster volume heal VOL info` lista los archivos que necesitan ser reparados (healing). Para iniciar la reparacion se usa `gluster volume heal VOL` sin la opcion `info`.
</details>

### Pregunta 8
¿Que componente de GlusterFS es una unidad basica de almacenamiento que consiste en un directorio en un servidor?

a) Volume
b) Translator
c) Brick
d) Peer

<details><summary>Respuesta</summary>

**c) Brick**

Un brick es la unidad basica de almacenamiento en GlusterFS. Es un directorio exportado desde un servidor miembro del pool. Se especifica como `servidor:/ruta/directorio`.
</details>

### Pregunta 9
¿Que algoritmo usa GlusterFS para localizar archivos sin necesidad de un servidor de metadatos centralizado?

a) CRUSH
b) DHT (Distributed Hash Table)
c) Consistent Hashing
d) B-tree indexing

<details><summary>Respuesta</summary>

**b) DHT (Distributed Hash Table)**

GlusterFS usa el translator DHT (Distributed Hash Table) para determinar en que brick se almacena cada archivo, basandose en un hash del nombre del archivo. Esto elimina la necesidad de un servidor de metadatos centralizado.
</details>

### Pregunta 10
¿Que puerto TCP usa el daemon glusterd para la gestion del cluster?

a) 2049
b) 24007
c) 49152
d) 111

<details><summary>Respuesta</summary>

**b) 24007**

El daemon `glusterd` escucha en el puerto TCP 24007 para la gestion del cluster. Los bricks usan puertos a partir de 49152. NFS-Ganesha usa el puerto 2049.
</details>

### Pregunta 11

¿Que translator de GlusterFS se encarga de la replicacion automatica de archivos entre bricks?

a) DHT (Distributed Hash Table)
b) AFR (Automatic File Replication)
c) EC (Erasure Coding)
d) io-cache

<details><summary>Respuesta</summary>

**b) AFR (Automatic File Replication)**

El translator AFR gestiona la replicacion de archivos en volumenes replicados y distributed-replicated. Mantiene copias identicas de cada archivo en multiples bricks y se encarga del self-healing cuando se detectan inconsistencias.
</details>

### Pregunta 12

¿Que opcion de montaje FUSE permite especificar servidores de respaldo para la conexion del volumen GlusterFS?

a) `failover-servers`
b) `backup-volfile-servers`
c) `secondary-servers`
d) `redundant-servers`

<details><summary>Respuesta</summary>

**b) `backup-volfile-servers`**

La opcion `backup-volfile-servers=server2:server3` en el montaje FUSE permite que el cliente se conecte a servidores alternativos si el servidor principal no esta disponible. Esto proporciona redundancia en la conexion del cliente.
</details>

### Pregunta 13

¿Que ocurre con los datos existentes cuando se añaden nuevos bricks a un volumen GlusterFS sin ejecutar rebalanceo?

a) Los datos se redistribuyen automaticamente
b) Solo los archivos nuevos se colocan en los nuevos bricks
c) Los datos existentes se copian a los nuevos bricks
d) El volumen queda en estado degradado

<details><summary>Respuesta</summary>

**b) Solo los archivos nuevos se colocan en los nuevos bricks**

Sin ejecutar `gluster volume rebalance`, los archivos existentes permanecen en sus bricks originales y solo los archivos nuevos aprovechan los bricks añadidos. El rebalanceo redistribuye los datos existentes entre todos los bricks.
</details>

### Pregunta 14

¿Que tipo de volumen GlusterFS esta marcado como obsoleto (deprecado) en versiones recientes?

a) Distributed
b) Replicated
c) Striped
d) Dispersed

<details><summary>Respuesta</summary>

**c) Striped**

Los volumenes striped (segmentados), que dividian archivos en segmentos entre bricks similar a RAID 0, estan deprecados en versiones recientes de GlusterFS. Se recomienda usar volumenes dispersed con erasure coding como alternativa.
</details>

### Pregunta 15

¿Que sucede con la capacidad total en un volumen dispersed de 3 bricks con redundancia 1, donde cada brick tiene 100 GB?

a) 300 GB
b) 200 GB
c) 150 GB
d) 100 GB

<details><summary>Respuesta</summary>

**b) 200 GB**

En un volumen dispersed, la capacidad util es (N - redundancia) * tamaño_brick. Con 3 bricks y redundancia 1: (3 - 1) * 100 GB = 200 GB. El espacio de un brick se usa para datos de paridad (erasure coding).
</details>

### Pregunta 16

¿Que servidor NFS se recomienda para exportar volumenes GlusterFS?

a) nfs-kernel-server
b) NFS-Ganesha
c) unfsd
d) nfsd

<details><summary>Respuesta</summary>

**b) NFS-Ganesha**

NFS-Ganesha es el servidor NFS recomendado para exportar volumenes GlusterFS. Se ejecuta en espacio de usuario y se integra nativamente con GlusterFS a traves de libgfapi. Se habilita con `gluster volume set mi_vol ganesha.enable on`.
</details>

### Pregunta 17

¿A partir de que puerto TCP asigna GlusterFS los puertos para cada brick individual?

a) 24007
b) 24008
c) 49152
d) 2049

<details><summary>Respuesta</summary>

**c) 49152**

GlusterFS asigna puertos a partir de 49152 para cada brick individual. Cada brick en un servidor usa un puerto diferente secuencialmente. El puerto 24007 se usa para el daemon de gestion `glusterd`.
</details>

### Pregunta 18

¿Que comando detiene una sesion de geo-replicacion entre un volumen local "vol1" y un volumen remoto "vol_remoto" en el host "remote_host"?

a) `gluster volume geo-replication vol1 root@remote_host::vol_remoto pause`
b) `gluster volume geo-replication vol1 root@remote_host::vol_remoto stop`
c) `gluster volume geo-replication vol1 root@remote_host::vol_remoto disable`
d) `gluster volume geo-replication vol1 root@remote_host::vol_remoto halt`

<details><summary>Respuesta</summary>

**b) `gluster volume geo-replication vol1 root@remote_host::vol_remoto stop`**

El subcomando `stop` detiene una sesion de geo-replicacion activa. Los subcomandos disponibles para geo-replicacion incluyen `create`, `start`, `stop`, `status`, `pause`, `resume` y `delete`.
</details>

### Pregunta 19

¿Que opcion de `gluster volume set` activa el daemon de auto-reparacion (self-heal) en un volumen?

a) `cluster.heal-daemon on`
b) `cluster.self-heal-daemon on`
c) `features.auto-heal on`
d) `cluster.repair-daemon on`

<details><summary>Respuesta</summary>

**b) `cluster.self-heal-daemon on`**

`gluster volume set mi_vol cluster.self-heal-daemon on` activa el daemon de self-heal que detecta y repara automaticamente archivos inconsistentes entre replicas. Es fundamental en volumenes replicados para mantener la integridad de datos.
</details>

### Pregunta 20

¿Que identificador unico asigna GlusterFS a cada archivo almacenado en el sistema?

a) UUID
b) GFID
c) inode
d) FID

<details><summary>Respuesta</summary>

**b) GFID**

GFID (GlusterFS File Identifier) es un identificador unico universal asignado a cada archivo y directorio en GlusterFS. Es equivalente al inode en sistemas de archivos locales y se usa internamente para localizar y gestionar archivos.
</details>

### Pregunta 21

Escribe el comando para crear un volumen GlusterFS replicado con factor de replica 3 llamado "vol_repl" usando bricks en server1, server2 y server3 en la ruta /data/brick1.

<input type="text" class="fill-blank" data-answer="gluster volume create vol_repl replica 3 server1:/data/brick1 server2:/data/brick1 server3:/data/brick1" data-alt="gluster volume create vol_repl replica 3 server1:/data/brick1 server2:/data/brick1 server3:/data/brick1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gluster volume create vol_repl replica 3 server1:/data/brick1 server2:/data/brick1 server3:/data/brick1**

El comando `gluster volume create` con `replica 3` crea un volumen replicado donde cada archivo se almacena en 3 bricks. El numero de bricks debe coincidir con el factor de replica.
</details>

### Pregunta 22

Escribe el comando para iniciar el rebalanceo de datos en un volumen GlusterFS llamado "mi_vol".

<input type="text" class="fill-blank" data-answer="gluster volume rebalance mi_vol start" data-alt="gluster volume rebalance mi_vol start" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gluster volume rebalance mi_vol start**

El rebalanceo redistribuye los datos existentes entre todos los bricks del volumen, incluyendo los nuevos bricks añadidos. Es obligatorio ejecutarlo despues de añadir o eliminar bricks para una distribucion equilibrada.
</details>

### Pregunta 23

Escribe el comando para montar un volumen GlusterFS llamado "mi_vol" desde el servidor "server1" en el punto de montaje /mnt/gluster usando FUSE.

<input type="text" class="fill-blank" data-answer="mount -t glusterfs server1:/mi_vol /mnt/gluster" data-alt="mount -t glusterfs server1:mi_vol /mnt/gluster" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -t glusterfs server1:/mi_vol /mnt/gluster**

El montaje nativo de GlusterFS usa FUSE con el tipo de sistema de archivos `glusterfs`. Se especifica el servidor y el nombre del volumen, no la ruta del brick. El cliente contacta al servidor para obtener la topologia completa del volumen.
</details>

### Pregunta 24

Escribe el comando para eliminar el servidor "server3" del Trusted Storage Pool de GlusterFS.

<input type="text" class="fill-blank" data-answer="gluster peer detach server3" data-alt="gluster peer detach server3" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gluster peer detach server3**

`gluster peer detach` elimina un servidor del pool de confianza. Antes de ejecutar este comando, se deben eliminar todos los bricks del servidor de cualquier volumen existente.
</details>

### Pregunta 25

Escribe el comando para iniciar la reparacion completa (full crawl) de un volumen GlusterFS llamado "mi_vol".

<input type="text" class="fill-blank" data-answer="gluster volume heal mi_vol full" data-alt="gluster volume heal mi_vol full" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gluster volume heal mi_vol full**

`gluster volume heal mi_vol full` inicia una reparacion completa que examina todos los archivos del volumen buscando inconsistencias, en lugar de solo los archivos marcados como pendientes. Es mas lento pero mas exhaustivo que `heal` sin la opcion `full`.
</details>
