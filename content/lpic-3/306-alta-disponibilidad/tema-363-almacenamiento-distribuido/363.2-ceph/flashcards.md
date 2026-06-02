---
title: "363.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "363.2"
---

# Flashcards: 363.2 - Ceph

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-001">
<div class="flashcard-front">

**P:** ¿Que componente de Ceph almacena los datos y gestiona la replicacion?

</div>
<div class="flashcard-back">

**R:** b) OSD (Object Storage Daemon). Los OSDs almacenan los datos como objetos, gestionan la replicacion, la recuperacion y el rebalanceo. Hay un OSD por cada disco del cluster.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-002">
<div class="flashcard-front">

**P:** ¿Que algoritmo usa Ceph para determinar la ubicacion de los datos sin necesidad de una tabla centralizada?

</div>
<div class="flashcard-back">

**R:** b) CRUSH. CRUSH (Controlled Replication Under Scalable Hashing) calcula la ubicacion de los datos de forma determinista usando un mapa jerarquico del cluster. Esto elimina la necesidad de una tabla de localizacion centralizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-003">
<div class="flashcard-front">

**P:** ¿Cuantos monitores (MON) se recomienda como minimo en un cluster Ceph de produccion?

</div>
<div class="flashcard-back">

**R:** c) 3. Se necesitan al menos 3 monitores para mantener quorum (algoritmo Paxos). Un numero impar (3 o 5) es recomendado para evitar empates en la votacion de quorum.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando muestra el arbol jerarquico de todos los OSDs del cluster Ceph?

</div>
<div class="flashcard-back">

**R:** b) `ceph osd tree`. `ceph osd tree` muestra la jerarquia CRUSH completa incluyendo roots, racks, hosts y OSDs con su estado (up/down) y peso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que componente de Ceph es necesario unicamente para CephFS y no para RBD o RGW?

</div>
<div class="flashcard-back">

**R:** c) MDS (Metadata Server). El MDS gestiona los metadatos del sistema de archivos (directorios, permisos, etc.) y solo es necesario para CephFS. RBD y RGW no requieren MDS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que tipo de almacenamiento proporciona RBD (RADOS Block Device)?

</div>
<div class="flashcard-back">

**R:** c) Almacenamiento de bloques (como un disco virtual). RBD proporciona dispositivos de bloque sobre RADOS. Se mapea como `/dev/rbdN` y puede usarse como cualquier disco (crear FS, montar). Es ideal para volumenes de VMs y contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que estado de un Placement Group (PG) indica funcionamiento normal y completo?

</div>
<div class="flashcard-back">

**R:** b) `active+clean`. `active+clean` indica que el PG esta activo (sirviendo peticiones) y limpio (todas las replicas estan sincronizadas). `degraded` indica replicas faltantes y `recovering` indica recuperacion en curso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que protocolo de almacenamiento de objetos es compatible con RGW (RADOS Gateway)?

</div>
<div class="flashcard-back">

**R:** c) Amazon S3 y OpenStack Swift. RGW proporciona una interfaz REST compatible con las APIs de Amazon S3 y OpenStack Swift, permitiendo que aplicaciones existentes que usan estos protocolos se conecten a Ceph.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que herramienta es la oficial para desplegar clusters Ceph modernos (desde version Octopus)?

</div>
<div class="flashcard-back">

**R:** c) cephadm. `cephadm` es la herramienta oficial de despliegue desde Ceph Octopus. Usa contenedores para los daemons y SSH para gestionar los nodos. Reemplazo a `ceph-deploy` que esta obsoleto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-010">
<div class="flashcard-front">

**P:** En `/etc/ceph/ceph.conf`, ¿que parametro define la red usada para el trafico de replicacion entre OSDs?

</div>
<div class="flashcard-back">

**R:** b) `cluster_network`. `cluster_network` define la red dedicada al trafico interno de replicacion, recovery y heartbeat entre OSDs. `public_network` es la red para trafico de clientes. Separar estas redes mejora el rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que comando de Ceph permite crear una imagen RBD de 10 GB llamada "disco1" en el pool "mi_pool"?

</div>
<div class="flashcard-back">

**R:** b) `rbd create disco1 --size 10G --pool mi_pool`. El comando `rbd create` crea una nueva imagen de bloque en un pool de Ceph. Se especifica el nombre de la imagen, su tamaño con `--size` y el pool destino con `--pool`. Despues se puede mapear con `rbd map`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que formula se usa para calcular el numero recomendado de Placement Groups (PGs) para un pool?

</div>
<div class="flashcard-back">

**R:** b) (OSDs * 100) / replicas, redondeado a potencia de 2. La formula recomendada es (numero_de_OSDs * 100) / numero_de_replicas, redondeado a la potencia de 2 mas cercana. Por ejemplo, con 10 OSDs y 3 replicas: (10 * 100) / 3 ≈ 333, redondeado a 256 PGs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que estado de un PG indica que esta funcionando pero no tiene todas las replicas disponibles?

</div>
<div class="flashcard-back">

**R:** b) `active+degraded`. El estado `active+degraded` significa que el PG esta sirviendo peticiones (active) pero no tiene el numero completo de replicas (degraded). Esto ocurre cuando un OSD falla y Ceph aun no ha terminado de replicar los datos en otro OSD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que protocolo de autenticacion usa Ceph por defecto para asegurar la comunicacion entre componentes?

</div>
<div class="flashcard-back">

**R:** c) cephx. Cephx es el protocolo de autenticacion nativo de Ceph, similar conceptualmente a Kerberos. Se configura en `ceph.conf` con las directivas `auth_cluster_required`, `auth_service_required` y `auth_client_required`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando bootstrap inicia un nuevo cluster Ceph con cephadm especificando la IP del primer monitor?

</div>
<div class="flashcard-back">

**R:** b) `cephadm bootstrap --mon-ip 192.168.1.10`. `cephadm bootstrap` inicializa un nuevo cluster Ceph en el primer nodo. Crea el primer monitor, el primer manager y configura los contenedores necesarios. La opcion `--mon-ip` especifica la IP del primer monitor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando elimina un pool en Ceph, requiriendo doble confirmacion del nombre?

</div>
<div class="flashcard-back">

**R:** b) `ceph osd pool delete mi_pool mi_pool --yes-i-really-really-mean-it`. Ceph requiere escribir el nombre del pool dos veces y la confirmacion `--yes-i-really-really-mean-it` para evitar eliminaciones accidentales. Esta medida de seguridad protege contra la perdida inadvertida de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que comando de Ceph añade un nuevo host al cluster mediante el orquestador?

</div>
<div class="flashcard-back">

**R:** b) `ceph orch host add nodo2 192.168.1.11`. `ceph orch host add` utiliza el orquestador de Ceph para añadir un nuevo host al cluster. El orquestador (cephadm) se encarga de desplegar los daemons necesarios en el nuevo nodo via SSH.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que dos pools son necesarios para crear un sistema de archivos CephFS?

</div>
<div class="flashcard-back">

**R:** b) Un pool de datos y un pool de metadatos. CephFS requiere dos pools: uno para almacenar los datos de los archivos y otro para los metadatos (estructura de directorios, permisos, etc.). Se crean con `ceph osd pool create` y se asocian con `ceph fs new`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando mapea una imagen RBD como dispositivo de bloque local?

</div>
<div class="flashcard-back">

**R:** b) `rbd map mi_pool/mi_disco`. `rbd map` mapea una imagen RBD como un dispositivo de bloque local (por ejemplo `/dev/rbd0`). Una vez mapeado, se puede crear un sistema de archivos y montar el dispositivo como cualquier disco normal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que comando permite crear un snapshot de una imagen RBD llamada "mi_disco" en el pool "mi_pool" con el nombre "snap1"?

</div>
<div class="flashcard-back">

**R:** b) `rbd snap create mi_pool/mi_disco@snap1`. `rbd snap create` crea un snapshot de una imagen RBD. La sintaxis usa `@` para separar el nombre de la imagen del nombre del snapshot. Los snapshots son copy-on-write y ocupan espacio solo por los bloques que cambian.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado general del cluster Ceph en su forma corta. <input type="text" class="fill-blank" data-answer="ceph -s" data-alt="ceph status" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ceph -s. `ceph -s` (o `ceph status`) muestra un resumen del estado del cluster incluyendo la salud, el estado de los monitores, OSDs, pools, PGs y el uso de almacenamiento. Es el primer comando para diagnosticar problemas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para crear un pool replicado llamado "mi_pool" con 128 placement groups en Ceph. <input type="text" class="fill-blank" data-answer="ceph osd pool create mi_pool 128 128 replicated" data-alt="ceph osd pool create mi_pool 128" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ceph osd pool create mi_pool 128 128 replicated. `ceph osd pool create` crea un nuevo pool especificando el nombre, el numero de PGs, el numero de PGs para placement y el tipo (replicated o erasure). El tipo `replicated` es el predeterminado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para marcar el OSD numero 2 como fuera de servicio en Ceph. <input type="text" class="fill-blank" data-answer="ceph osd out osd.2" data-alt="ceph osd out 2" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ceph osd out osd.2. `ceph osd out` marca un OSD como fuera del cluster, lo que provoca que CRUSH redistribuya los datos de ese OSD a otros. Se usa antes de retirar un disco del cluster. Para reintegrarlo se usa `ceph osd in osd.2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para crear un sistema de archivos CephFS llamado "mi_cephfs" usando el pool de metadatos "cephfs_metadata" y el pool de datos "cephfs_data". <input type="text" class="fill-blank" data-answer="ceph fs new mi_cephfs cephfs_metadata cephfs_data" data-alt="ceph fs new mi_cephfs cephfs_metadata cephfs_data" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ceph fs new mi_cephfs cephfs_metadata cephfs_data. `ceph fs new` crea un sistema de archivos CephFS asociando un pool de metadatos y un pool de datos. El pool de metadatos se especifica primero, seguido del pool de datos. Requiere al menos un MDS activo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para crear un usuario RGW con uid "miusuario" y nombre visible "Mi Usuario" en Ceph. <input type="text" class="fill-blank" data-answer="radosgw-admin user create --uid=miusuario --display-name=\"Mi Usuario\"" data-alt="radosgw-admin user create --uid miusuario --display-name \"Mi Usuario\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** radosgw-admin user create --uid=miusuario --display-name="Mi Usuario". `radosgw-admin user create` crea un usuario para el RADOS Gateway. El comando genera automaticamente las claves de acceso (access key y secret key) necesarias para autenticarse con las APIs S3 o Swift.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: MON requiere numero impar (3 o 5) para quorum. OSD hay uno por disco. MDS solo e...

</div>
<div class="flashcard-back">

**R:** MON requiere numero impar (3 o 5) para quorum. OSD hay uno por disco. MDS solo es necesario para CephFS. MGR proporciona el dashboard y metricas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El estado ideal de un PG es `active+clean`. Si ves `degraded` significa que no h...

</div>
<div class="flashcard-back">

**R:** El estado ideal de un PG es `active+clean`. Si ves `degraded` significa que no hay suficientes replicas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: RBD es ideal para volumenes de maquinas virtuales y contenedores. Soporta thin p...

</div>
<div class="flashcard-back">

**R:** RBD es ideal para volumenes de maquinas virtuales y contenedores. Soporta thin provisioning, snapshots y clones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `active+degraded`?

</div>
<div class="flashcard-back">

**R:** Funcionando pero faltan replicas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `peering`?

</div>
<div class="flashcard-back">

**R:** Estableciendo acuerdo entre OSDs

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `stale`?

</div>
<div class="flashcard-back">

**R:** PG sin actualizaciones recientes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introduccion a Ceph?

</div>
<div class="flashcard-back">

**R:** **Ceph** es una plataforma de almacenamiento distribuido que proporciona almacenamiento de objetos, bloques y archivos en un unico sistema unificado. Es altamente escalable y no tiene punto unico de fa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son Algoritmo CRUSH?

</div>
<div class="flashcard-back">

**R:** **CRUSH** (Controlled Replication Under Scalable Hashing) es el algoritmo que Ceph usa para determinar donde almacenar los datos. No necesita tabla de asignacion centralizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Placement Groups (PGs)?

</div>
<div class="flashcard-back">

**R:** Los **Placement Groups** son agrupaciones logicas de objetos que simplifican la gestion de replicacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son RBD - RADOS Block Device?

</div>
<div class="flashcard-back">

**R:** **RBD** proporciona almacenamiento de bloques sobre Ceph, similar a un disco virtual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son CephFS - Ceph File System?

</div>
<div class="flashcard-back">

**R:** **CephFS** es un sistema de archivos distribuido compatible con POSIX que se ejecuta sobre RADOS. Requiere al menos un **MDS** (Metadata Server).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son RGW - RADOS Gateway?

</div>
<div class="flashcard-back">

**R:** **RGW** proporciona una interfaz REST compatible con **Amazon S3** y **OpenStack Swift**.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son Despliegue con cephadm?

</div>
<div class="flashcard-back">

**R:** **cephadm** es la herramienta oficial para desplegar y gestionar clusters Ceph modernos (desde Octopus).

</div>
</div>

---

