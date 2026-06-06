---
title: "363.2 - Ejercicios: Ceph"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "363 - Almacenamiento Distribuido"
subtema: "363.2"
peso: 5
tags:
  - lpic-3
  - tema-363
  - ejercicios
  - ceph
---

# 363.2 - Ejercicios: Ceph

### Pregunta 1
¿Que componente de Ceph almacena los datos y gestiona la replicacion?

a) MON (Monitor)
b) OSD (Object Storage Daemon)
c) MDS (Metadata Server)
d) MGR (Manager)

<details><summary>Respuesta</summary>

**b) OSD (Object Storage Daemon)**

Los OSDs almacenan los datos como objetos, gestionan la replicacion, la recuperacion y el rebalanceo. Hay un OSD por cada disco del cluster.
</details>

### Pregunta 2
¿Que algoritmo usa Ceph para determinar la ubicacion de los datos sin necesidad de una tabla centralizada?

a) DHT
b) CRUSH
c) Consistent Hashing
d) Round Robin

<details><summary>Respuesta</summary>

**b) CRUSH**

CRUSH (Controlled Replication Under Scalable Hashing) calcula la ubicacion de los datos de forma determinista usando un mapa jerarquico del cluster. Esto elimina la necesidad de una tabla de localizacion centralizada.
</details>

### Pregunta 3
¿Cuantos monitores (MON) se recomienda como minimo en un cluster Ceph de produccion?

a) 1
b) 2
c) 3
d) 5

<details><summary>Respuesta</summary>

**c) 3**

Se necesitan al menos 3 monitores para mantener quorum (algoritmo Paxos). Un numero impar (3 o 5) es recomendado para evitar empates en la votacion de quorum.
</details>

### Pregunta 4
¿Que comando muestra el arbol jerarquico de todos los OSDs del cluster Ceph?

a) `ceph osd ls`
b) `ceph osd tree`
c) `ceph osd stat`
d) `ceph osd dump`

<details><summary>Respuesta</summary>

**b) `ceph osd tree`**

`ceph osd tree` muestra la jerarquia CRUSH completa incluyendo roots, racks, hosts y OSDs con su estado (up/down) y peso.
</details>

### Pregunta 5
¿Que componente de Ceph es necesario unicamente para CephFS y no para RBD o RGW?

a) MON
b) OSD
c) MDS
d) MGR

<details><summary>Respuesta</summary>

**c) MDS (Metadata Server)**

El MDS gestiona los metadatos del sistema de archivos (directorios, permisos, etc.) y solo es necesario para CephFS. RBD y RGW no requieren MDS.
</details>

### Pregunta 6
¿Que tipo de almacenamiento proporciona RBD (RADOS Block Device)?

a) Almacenamiento de objetos compatible con S3
b) Sistema de archivos distribuido POSIX
c) Almacenamiento de bloques (como un disco virtual)
d) Almacenamiento NAS por NFS

<details><summary>Respuesta</summary>

**c) Almacenamiento de bloques (como un disco virtual)**

RBD proporciona dispositivos de bloque sobre RADOS. Se mapea como `/dev/rbdN` y puede usarse como cualquier disco (crear FS, montar). Es ideal para volumenes de VMs y contenedores.
</details>

### Pregunta 7
¿Que estado de un Placement Group (PG) indica funcionamiento normal y completo?

a) `active+degraded`
b) `active+clean`
c) `peering`
d) `active+recovering`

<details><summary>Respuesta</summary>

**b) `active+clean`**

`active+clean` indica que el PG esta activo (sirviendo peticiones) y limpio (todas las replicas estan sincronizadas). `degraded` indica replicas faltantes y `recovering` indica recuperacion en curso.
</details>

### Pregunta 8
¿Que protocolo de almacenamiento de objetos es compatible con RGW (RADOS Gateway)?

a) NFS y SMB
b) iSCSI y Fibre Channel
c) Amazon S3 y OpenStack Swift
d) FTP y WebDAV

<details><summary>Respuesta</summary>

**c) Amazon S3 y OpenStack Swift**

RGW proporciona una interfaz REST compatible con las APIs de Amazon S3 y OpenStack Swift, permitiendo que aplicaciones existentes que usan estos protocolos se conecten a Ceph.
</details>

### Pregunta 9
¿Que herramienta es la oficial para desplegar clusters Ceph modernos (desde version Octopus)?

a) ceph-deploy
b) ceph-ansible
c) cephadm
d) ceph-installer

<details><summary>Respuesta</summary>

**c) cephadm**

`cephadm` es la herramienta oficial de despliegue desde Ceph Octopus. Usa contenedores para los daemons y SSH para gestionar los nodos. Reemplazo a `ceph-deploy` que esta obsoleto.
</details>

### Pregunta 10
En `/etc/ceph/ceph.conf`, ¿que parametro define la red usada para el trafico de replicacion entre OSDs?

a) `public_network`
b) `cluster_network`
c) `osd_network`
d) `replication_network`

<details><summary>Respuesta</summary>

**b) `cluster_network`**

`cluster_network` define la red dedicada al trafico interno de replicacion, recovery y heartbeat entre OSDs. `public_network` es la red para trafico de clientes. Separar estas redes mejora el rendimiento.
</details>

### Pregunta 11

¿Que comando de Ceph permite crear una imagen RBD de 10 GB llamada "disco1" en el pool "mi_pool"?

a) `ceph rbd create disco1 --size 10G --pool mi_pool`
b) `rbd create disco1 --size 10G --pool mi_pool`
c) `rados create disco1 --size 10G mi_pool`
d) `ceph osd create rbd disco1 10G mi_pool`

<details><summary>Respuesta</summary>

**b) `rbd create disco1 --size 10G --pool mi_pool`**

El comando `rbd create` crea una nueva imagen de bloque en un pool de Ceph. Se especifica el nombre de la imagen, su tamaño con `--size` y el pool destino con `--pool`. Despues se puede mapear con `rbd map`.
</details>

### Pregunta 12

¿Que formula se usa para calcular el numero recomendado de Placement Groups (PGs) para un pool?

a) (OSDs * 50) / replicas
b) (OSDs * 100) / replicas, redondeado a potencia de 2
c) OSDs * replicas * 10
d) (OSDs / replicas) * 256

<details><summary>Respuesta</summary>

**b) (OSDs * 100) / replicas, redondeado a potencia de 2**

La formula recomendada es (numero_de_OSDs * 100) / numero_de_replicas, redondeado a la potencia de 2 mas cercana. Por ejemplo, con 10 OSDs y 3 replicas: (10 * 100) / 3 ≈ 333, redondeado a 256 PGs.
</details>

### Pregunta 13

¿Que estado de un PG indica que esta funcionando pero no tiene todas las replicas disponibles?

a) `active+clean`
b) `active+degraded`
c) `peering`
d) `stale`

<details><summary>Respuesta</summary>

**b) `active+degraded`**

El estado `active+degraded` significa que el PG esta sirviendo peticiones (active) pero no tiene el numero completo de replicas (degraded). Esto ocurre cuando un OSD falla y Ceph aun no ha terminado de replicar los datos en otro OSD.
</details>

### Pregunta 14

¿Que protocolo de autenticacion usa Ceph por defecto para asegurar la comunicacion entre componentes?

a) Kerberos
b) TLS/SSL
c) cephx
d) LDAP

<details><summary>Respuesta</summary>

**c) cephx**

Cephx es el protocolo de autenticacion nativo de Ceph, similar conceptualmente a Kerberos. Se configura en `ceph.conf` con las directivas `auth_cluster_required`, `auth_service_required` y `auth_client_required`.
</details>

### Pregunta 15

¿Que comando bootstrap inicia un nuevo cluster Ceph con cephadm especificando la IP del primer monitor?

a) `cephadm init --mon-ip 192.168.1.10`
b) `cephadm bootstrap --mon-ip 192.168.1.10`
c) `ceph-deploy new 192.168.1.10`
d) `cephadm create-cluster --ip 192.168.1.10`

<details><summary>Respuesta</summary>

**b) `cephadm bootstrap --mon-ip 192.168.1.10`**

`cephadm bootstrap` inicializa un nuevo cluster Ceph en el primer nodo. Crea el primer monitor, el primer manager y configura los contenedores necesarios. La opcion `--mon-ip` especifica la IP del primer monitor.
</details>

### Pregunta 16

¿Que comando elimina un pool en Ceph, requiriendo doble confirmacion del nombre?

a) `ceph osd pool remove mi_pool`
b) `ceph osd pool delete mi_pool mi_pool --yes-i-really-really-mean-it`
c) `ceph osd pool destroy mi_pool --force`
d) `rados pool delete mi_pool --confirm`

<details><summary>Respuesta</summary>

**b) `ceph osd pool delete mi_pool mi_pool --yes-i-really-really-mean-it`**

Ceph requiere escribir el nombre del pool dos veces y la confirmacion `--yes-i-really-really-mean-it` para evitar eliminaciones accidentales. Esta medida de seguridad protege contra la perdida inadvertida de datos.
</details>

### Pregunta 17

¿Que comando de Ceph añade un nuevo host al cluster mediante el orquestador?

a) `ceph host add nodo2 192.168.1.11`
b) `ceph orch host add nodo2 192.168.1.11`
c) `cephadm add-host nodo2 192.168.1.11`
d) `ceph node add nodo2 --ip 192.168.1.11`

<details><summary>Respuesta</summary>

**b) `ceph orch host add nodo2 192.168.1.11`**

`ceph orch host add` utiliza el orquestador de Ceph para añadir un nuevo host al cluster. El orquestador (cephadm) se encarga de desplegar los daemons necesarios en el nuevo nodo via SSH.
</details>

### Pregunta 18

¿Que dos pools son necesarios para crear un sistema de archivos CephFS?

a) Un pool de datos y un pool de objetos
b) Un pool de datos y un pool de metadatos
c) Un pool primario y un pool secundario
d) Un pool de bloques y un pool de cache

<details><summary>Respuesta</summary>

**b) Un pool de datos y un pool de metadatos**

CephFS requiere dos pools: uno para almacenar los datos de los archivos y otro para los metadatos (estructura de directorios, permisos, etc.). Se crean con `ceph osd pool create` y se asocian con `ceph fs new`.
</details>

### Pregunta 19

¿Que comando mapea una imagen RBD como dispositivo de bloque local?

a) `rbd attach mi_pool/mi_disco`
b) `rbd map mi_pool/mi_disco`
c) `rbd mount mi_pool/mi_disco`
d) `rbd connect mi_pool/mi_disco`

<details><summary>Respuesta</summary>

**b) `rbd map mi_pool/mi_disco`**

`rbd map` mapea una imagen RBD como un dispositivo de bloque local (por ejemplo `/dev/rbd0`). Una vez mapeado, se puede crear un sistema de archivos y montar el dispositivo como cualquier disco normal.
</details>

### Pregunta 20

¿Que comando permite crear un snapshot de una imagen RBD llamada "mi_disco" en el pool "mi_pool" con el nombre "snap1"?

a) `rbd snapshot create mi_pool/mi_disco@snap1`
b) `rbd snap create mi_pool/mi_disco@snap1`
c) `ceph rbd snap mi_pool/mi_disco --name snap1`
d) `rados snap create mi_pool/mi_disco snap1`

<details><summary>Respuesta</summary>

**b) `rbd snap create mi_pool/mi_disco@snap1`**

`rbd snap create` crea un snapshot de una imagen RBD. La sintaxis usa `@` para separar el nombre de la imagen del nombre del snapshot. Los snapshots son copy-on-write y ocupan espacio solo por los bloques que cambian.
</details>

### Pregunta 21

Escribe el comando para ver el estado general del cluster Ceph en su forma corta.

<input type="text" class="fill-blank" data-answer="ceph -s" data-alt="ceph status" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ceph -s**

`ceph -s` (o `ceph status`) muestra un resumen del estado del cluster incluyendo la salud, el estado de los monitores, OSDs, pools, PGs y el uso de almacenamiento. Es el primer comando para diagnosticar problemas.
</details>

### Pregunta 22

Escribe el comando para crear un pool replicado llamado "mi_pool" con 128 placement groups en Ceph.

<input type="text" class="fill-blank" data-answer="ceph osd pool create mi_pool 128 128 replicated" data-alt="ceph osd pool create mi_pool 128" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ceph osd pool create mi_pool 128 128 replicated**

`ceph osd pool create` crea un nuevo pool especificando el nombre, el numero de PGs, el numero de PGs para placement y el tipo (replicated o erasure). El tipo `replicated` es el predeterminado.
</details>

### Pregunta 23

Escribe el comando para marcar el OSD numero 2 como fuera de servicio en Ceph.

<input type="text" class="fill-blank" data-answer="ceph osd out osd.2" data-alt="ceph osd out 2" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ceph osd out osd.2**

`ceph osd out` marca un OSD como fuera del cluster, lo que provoca que CRUSH redistribuya los datos de ese OSD a otros. Se usa antes de retirar un disco del cluster. Para reintegrarlo se usa `ceph osd in osd.2`.
</details>

### Pregunta 24

Escribe el comando para crear un sistema de archivos CephFS llamado "mi_cephfs" usando el pool de metadatos "cephfs_metadata" y el pool de datos "cephfs_data".

<input type="text" class="fill-blank" data-answer="ceph fs new mi_cephfs cephfs_metadata cephfs_data" data-alt="ceph fs new mi_cephfs cephfs_metadata cephfs_data" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ceph fs new mi_cephfs cephfs_metadata cephfs_data**

`ceph fs new` crea un sistema de archivos CephFS asociando un pool de metadatos y un pool de datos. El pool de metadatos se especifica primero, seguido del pool de datos. Requiere al menos un MDS activo.
</details>

### Pregunta 25

Escribe el comando para crear un usuario RGW con uid "miusuario" y nombre visible "Mi Usuario" en Ceph.

<input type="text" class="fill-blank" data-answer="radosgw-admin user create --uid=miusuario --display-name=\"Mi Usuario\"" data-alt="radosgw-admin user create --uid miusuario --display-name \"Mi Usuario\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**radosgw-admin user create --uid=miusuario --display-name="Mi Usuario"**

`radosgw-admin user create` crea un usuario para el RADOS Gateway. El comando genera automaticamente las claves de acceso (access key y secret key) necesarias para autenticarse con las APIs S3 o Swift.
</details>
