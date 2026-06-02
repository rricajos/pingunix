---
title: "363.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "363.1"
---

# Flashcards: 363.1 - Glusterfs

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que comando añade un nuevo servidor al Trusted Storage Pool de GlusterFS?

</div>
<div class="flashcard-back">

**R:** b) `gluster peer probe server2`. `gluster peer probe` añade un servidor al pool de confianza (Trusted Storage Pool). Debe ejecutarse desde un nodo ya existente del pool.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que tipo de volumen GlusterFS usa erasure coding para proporcionar redundancia con menor coste de almacenamiento?

</div>
<div class="flashcard-back">

**R:** c) Dispersed. Los volumenes dispersed (dispersos) usan erasure coding, similar a RAID 5/6. Proporcionan redundancia con menos overhead de almacenamiento que la replicacion completa. Se crean con `disperse N redundancy M`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-003">
<div class="flashcard-front">

**P:** ¿Cuantos bricks se necesitan para crear un volumen distributed-replicated con replica 3 y 2 sets de distribucion?

</div>
<div class="flashcard-back">

**R:** d) 6. Un volumen distributed-replicated con replica 3 y 2 sets de distribucion necesita 3 x 2 = 6 bricks. El numero total de bricks debe ser multiplo del factor de replica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-004">
<div class="flashcard-front">

**P:** ¿Que accion se debe realizar despues de añadir bricks a un volumen existente para distribuir los datos existentes?

</div>
<div class="flashcard-back">

**R:** b) `gluster volume rebalance start`. El rebalanceo redistribuye los datos existentes entre todos los bricks, incluyendo los nuevos. Sin rebalanceo, solo los archivos nuevos se colocarian en los bricks nuevos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que tipo de montaje nativo usa GlusterFS para acceder a los volumenes desde los clientes?

</div>
<div class="flashcard-back">

**R:** c) FUSE. GlusterFS usa FUSE (Filesystem in Userspace) como metodo de montaje nativo. El comando es `mount -t glusterfs server:/volumen /punto_montaje`. Tambien puede exportarse via NFS-Ganesha o SMB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que tipo de replicacion usa la geo-replicacion de GlusterFS?

</div>
<div class="flashcard-back">

**R:** b) Asincrona. La geo-replicacion es asincrona, diseñada para replicar datos entre clusters GlusterFS distantes geograficamente. La replicacion normal (replica dentro de un volumen) es sincrona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que hace el comando `gluster volume heal mi_vol info`?

</div>
<div class="flashcard-back">

**R:** b) Muestra archivos pendientes de reparacion. `gluster volume heal VOL info` lista los archivos que necesitan ser reparados (healing). Para iniciar la reparacion se usa `gluster volume heal VOL` sin la opcion `info`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que componente de GlusterFS es una unidad basica de almacenamiento que consiste en un directorio en un servidor?

</div>
<div class="flashcard-back">

**R:** c) Brick. Un brick es la unidad basica de almacenamiento en GlusterFS. Es un directorio exportado desde un servidor miembro del pool. Se especifica como `servidor:/ruta/directorio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que algoritmo usa GlusterFS para localizar archivos sin necesidad de un servidor de metadatos centralizado?

</div>
<div class="flashcard-back">

**R:** b) DHT (Distributed Hash Table). GlusterFS usa el translator DHT (Distributed Hash Table) para determinar en que brick se almacena cada archivo, basandose en un hash del nombre del archivo. Esto elimina la necesidad de un servidor de metadatos centralizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que puerto TCP usa el daemon glusterd para la gestion del cluster?

</div>
<div class="flashcard-back">

**R:** b) 24007. El daemon `glusterd` escucha en el puerto TCP 24007 para la gestion del cluster. Los bricks usan puertos a partir de 49152. NFS-Ganesha usa el puerto 2049.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que translator de GlusterFS se encarga de la replicacion automatica de archivos entre bricks?

</div>
<div class="flashcard-back">

**R:** b) AFR (Automatic File Replication). El translator AFR gestiona la replicacion de archivos en volumenes replicados y distributed-replicated. Mantiene copias identicas de cada archivo en multiples bricks y se encarga del self-healing cuando se detectan inconsistencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que opcion de montaje FUSE permite especificar servidores de respaldo para la conexion del volumen GlusterFS?

</div>
<div class="flashcard-back">

**R:** b) `backup-volfile-servers`. La opcion `backup-volfile-servers=server2:server3` en el montaje FUSE permite que el cliente se conecte a servidores alternativos si el servidor principal no esta disponible. Esto proporciona redundancia en la conexion del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que ocurre con los datos existentes cuando se añaden nuevos bricks a un volumen GlusterFS sin ejecutar rebalanceo?

</div>
<div class="flashcard-back">

**R:** b) Solo los archivos nuevos se colocan en los nuevos bricks. Sin ejecutar `gluster volume rebalance`, los archivos existentes permanecen en sus bricks originales y solo los archivos nuevos aprovechan los bricks añadidos. El rebalanceo redistribuye los datos existentes entre todos los bricks.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que tipo de volumen GlusterFS esta marcado como obsoleto (deprecado) en versiones recientes?

</div>
<div class="flashcard-back">

**R:** c) Striped. Los volumenes striped (segmentados), que dividian archivos en segmentos entre bricks similar a RAID 0, estan deprecados en versiones recientes de GlusterFS. Se recomienda usar volumenes dispersed con erasure coding como alternativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que sucede con la capacidad total en un volumen dispersed de 3 bricks con redundancia 1, donde cada brick tiene 100 GB?

</div>
<div class="flashcard-back">

**R:** b) 200 GB. En un volumen dispersed, la capacidad util es (N - redundancia) * tamaño_brick. Con 3 bricks y redundancia 1: (3 - 1) * 100 GB = 200 GB. El espacio de un brick se usa para datos de paridad (erasure coding).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que servidor NFS se recomienda para exportar volumenes GlusterFS?

</div>
<div class="flashcard-back">

**R:** b) NFS-Ganesha. NFS-Ganesha es el servidor NFS recomendado para exportar volumenes GlusterFS. Se ejecuta en espacio de usuario y se integra nativamente con GlusterFS a traves de libgfapi. Se habilita con `gluster volume set mi_vol ganesha.enable on`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-017">
<div class="flashcard-front">

**P:** ¿A partir de que puerto TCP asigna GlusterFS los puertos para cada brick individual?

</div>
<div class="flashcard-back">

**R:** c) 49152. GlusterFS asigna puertos a partir de 49152 para cada brick individual. Cada brick en un servidor usa un puerto diferente secuencialmente. El puerto 24007 se usa para el daemon de gestion `glusterd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que comando detiene una sesion de geo-replicacion entre un volumen local "vol1" y un volumen remoto "vol_remoto" en el host "remote_host"?

</div>
<div class="flashcard-back">

**R:** b) `gluster volume geo-replication vol1 root@remote_host::vol_remoto stop`. El subcomando `stop` detiene una sesion de geo-replicacion activa. Los subcomandos disponibles para geo-replicacion incluyen `create`, `start`, `stop`, `status`, `pause`, `resume` y `delete`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que opcion de `gluster volume set` activa el daemon de auto-reparacion (self-heal) en un volumen?

</div>
<div class="flashcard-back">

**R:** b) `cluster.self-heal-daemon on`. `gluster volume set mi_vol cluster.self-heal-daemon on` activa el daemon de self-heal que detecta y repara automaticamente archivos inconsistentes entre replicas. Es fundamental en volumenes replicados para mantener la integridad de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que identificador unico asigna GlusterFS a cada archivo almacenado en el sistema?

</div>
<div class="flashcard-back">

**R:** b) GFID. GFID (GlusterFS File Identifier) es un identificador unico universal asignado a cada archivo y directorio en GlusterFS. Es equivalente al inode en sistemas de archivos locales y se usa internamente para localizar y gestionar archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un volumen GlusterFS replicado con factor de replica 3 llamado "vol_repl" usando bricks en server1, server2 y server3 en la ruta /data/brick1. <input type="text" class="fill-blank" data-answer="gluster volume create vol_repl replica 3 server1:/data/brick1 server2:/data/brick1 server3:/data/brick1" data-alt="gluster volume create vol_repl replica 3 server1:/data/brick1 server2:/data/brick1 server3:/data/brick1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gluster volume create vol_repl replica 3 server1:/data/brick1 server2:/data/brick1 server3:/data/brick1. El comando `gluster volume create` con `replica 3` crea un volumen replicado donde cada archivo se almacena en 3 bricks. El numero de bricks debe coincidir con el factor de replica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para iniciar el rebalanceo de datos en un volumen GlusterFS llamado "mi_vol". <input type="text" class="fill-blank" data-answer="gluster volume rebalance mi_vol start" data-alt="gluster volume rebalance mi_vol start" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gluster volume rebalance mi_vol start. El rebalanceo redistribuye los datos existentes entre todos los bricks del volumen, incluyendo los nuevos bricks añadidos. Es obligatorio ejecutarlo despues de añadir o eliminar bricks para una distribucion equilibrada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para montar un volumen GlusterFS llamado "mi_vol" desde el servidor "server1" en el punto de montaje /mnt/gluster usando FUSE. <input type="text" class="fill-blank" data-answer="mount -t glusterfs server1:/mi_vol /mnt/gluster" data-alt="mount -t glusterfs server1:mi_vol /mnt/gluster" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mount -t glusterfs server1:/mi_vol /mnt/gluster. El montaje nativo de GlusterFS usa FUSE con el tipo de sistema de archivos `glusterfs`. Se especifica el servidor y el nombre del volumen, no la ruta del brick. El cliente contacta al servidor para obtener la topologia completa del volumen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar el servidor "server3" del Trusted Storage Pool de GlusterFS. <input type="text" class="fill-blank" data-answer="gluster peer detach server3" data-alt="gluster peer detach server3" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gluster peer detach server3. `gluster peer detach` elimina un servidor del pool de confianza. Antes de ejecutar este comando, se deben eliminar todos los bricks del servidor de cualquier volumen existente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para iniciar la reparacion completa (full crawl) de un volumen GlusterFS llamado "mi_vol". <input type="text" class="fill-blank" data-answer="gluster volume heal mi_vol full" data-alt="gluster volume heal mi_vol full" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gluster volume heal mi_vol full. `gluster volume heal mi_vol full` inicia una reparacion completa que examina todos los archivos del volumen buscando inconsistencias, en lugar de solo los archivos marcados como pendientes. Es mas lento pero mas exhaustivo que `heal` sin la opcion `full`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: GlusterFS no tiene servidor de metadatos centralizado. Usa un algoritmo de hash ...

</div>
<div class="flashcard-back">

**R:** GlusterFS no tiene servidor de metadatos centralizado. Usa un algoritmo de hash elastico (DHT - Distributed Hash Table) para localizar archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce todos los tipos de volumen. `distributed-replicated` es el mas comun. El ...

</div>
<div class="flashcard-back">

**R:** Conoce todos los tipos de volumen. `distributed-replicated` es el mas comun. El numero de bricks debe ser multiplo del factor de replica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Despues de añadir bricks, SIEMPRE ejecutar `rebalance` para distribuir los datos...

</div>
<div class="flashcard-back">

**R:** Despues de añadir bricks, SIEMPRE ejecutar `rebalance` para distribuir los datos existentes a los nuevos bricks. Sin rebalanceo, solo los archivos nuevos iran a los bricks nuevos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: La geo-replicacion es asincrona (a diferencia de la replicacion normal que es si...

</div>
<div class="flashcard-back">

**R:** La geo-replicacion es asincrona (a diferencia de la replicacion normal que es sincrona). Se usa para DR (Disaster Recovery) entre sitios remotos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introduccion a GlusterFS?

</div>
<div class="flashcard-back">

**R:** **GlusterFS** es un sistema de archivos distribuido de codigo abierto capaz de escalar a varios petabytes. Agrega almacenamiento de multiples servidores en un espacio de nombres unificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Geo-Replicacion?

</div>
<div class="flashcard-back">

**R:** La **geo-replicacion** permite replicar volumenes entre clusters GlusterFS distantes geograficamente (asincronamente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Healing (Auto-Reparacion)?

</div>
<div class="flashcard-back">

**R:** Cuando un brick se recupera de un fallo, GlusterFS repara automaticamente los datos desincronizados:

</div>
</div>

---

