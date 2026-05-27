---
title: "Simulacro Examen 306"
tags:
  - lpic-3
  - examen-306
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "306"
---

# Simulacro - Examen 306

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="306" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="361.1" data-correct="b">

### Pregunta 1 (Subtema 361.1)

¿Que componente de un cluster de alta disponibilidad Pacemaker es responsable de gestionar la mensajeria y la membresia del cluster?

- [ ] a) Pacemaker (CRM)
- [ ] b) Corosync
- [ ] c) STONITH
- [ ] d) Resource Agent

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Corosync**

Corosync es la capa de comunicacion y membresia del cluster que proporciona: mensajeria fiable entre nodos, deteccion de fallos de nodos, quorum (votacion) y sincronizacion de estado. Pacemaker (Cluster Resource Manager) se ejecuta sobre Corosync y es responsable de las decisiones sobre donde ejecutar los recursos, la gestion de fallos y las restricciones. STONITH (Shoot The Other Node In The Head) es el mecanismo de fencing. Los Resource Agents son scripts que gestionan servicios individuales.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="361.1" data-correct="c">

### Pregunta 2 (Subtema 361.1)

¿Que herramienta de linea de comandos se utiliza para gestionar un cluster Pacemaker/Corosync?

- [ ] a) `corosync-admin`
- [ ] b) `pacemakercli`
- [ ] c) `crm` o `pcs`
- [ ] d) `ha-manager`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `crm` o `pcs`**

Existen dos herramientas principales para gestionar clusters Pacemaker: `crm` (crmsh, desarrollada por SUSE) y `pcs` (Pacemaker/Corosync Shell, desarrollada por Red Hat). Ambas permiten configurar recursos, restricciones, propiedades del cluster, nodos y fencing. `pcs` ademas puede configurar Corosync y proporciona una interfaz web (`pcsd`). La eleccion entre ambas depende de la distribucion: SUSE usa `crm`, RHEL/CentOS usa `pcs`.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="361.1" data-correct="a">

### Pregunta 3 (Subtema 361.1)

¿Que es el quorum en un cluster de alta disponibilidad y por que es importante?

- [ ] a) Es el numero minimo de nodos que deben estar operativos para que el cluster tome decisiones, evitando split-brain
- [ ] b) Es el recurso principal que se ejecuta en el nodo activo
- [ ] c) Es el protocolo de comunicacion entre nodos del cluster
- [ ] d) Es la IP virtual asignada al servicio de alta disponibilidad

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Es el numero minimo de nodos que deben estar operativos para que el cluster tome decisiones, evitando split-brain**

El quorum garantiza que solo una particion del cluster pueda operar cuando hay un fallo de comunicacion (split-brain). Tipicamente se requiere la mayoria de votos (N/2 + 1). Si un grupo de nodos pierde el quorum, deja de gestionar recursos para evitar que dos grupos independientes ejecuten los mismos servicios simultaneamente, lo que podria causar corrupcion de datos. En clusters de 2 nodos se necesitan medidas especiales como `two_node: 1` en Corosync.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="361.1" data-correct="d">

### Pregunta 4 (Subtema 361.1)

¿Que mecanismo de fencing utiliza Pacemaker para garantizar que un nodo fallido no pueda causar corrupcion de datos?

- [ ] a) Kill signal
- [ ] b) Network isolation
- [ ] c) Power management
- [ ] d) STONITH (Shoot The Other Node In The Head)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) STONITH (Shoot The Other Node In The Head)**

STONITH es el mecanismo de fencing que asegura que un nodo problematico sea apagado o aislado de forma fiable antes de que los recursos se muevan a otro nodo. Utiliza dispositivos como controladores IPMI/iLO/iDRAC, PDUs (Power Distribution Units) inteligentes, agentes de fencing de hipervisores o SBD (Split-Brain Detector). Sin STONITH, un nodo aparentemente fallido podria seguir escribiendo datos, causando corrupcion. Se configura como recurso de tipo `stonith` en Pacemaker.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="361.2" data-correct="b">

### Pregunta 5 (Subtema 361.2)

¿Que software de balanceo de carga opera en capa 4 (transporte) del modelo OSI en Linux?

- [ ] a) Nginx
- [ ] b) LVS (Linux Virtual Server) / IPVS
- [ ] c) Apache mod_proxy
- [ ] d) Traefik

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) LVS (Linux Virtual Server) / IPVS**

LVS/IPVS (IP Virtual Server) opera en el kernel de Linux a nivel de capa 4 (TCP/UDP), proporcionando balanceo de carga de alto rendimiento. Soporta tres modos de forwarding: NAT (el balanceador reescribe las direcciones), DR (Direct Routing, los servidores responden directamente al cliente) y TUN (IP Tunneling). Se gestiona con `ipvsadm`. Nginx y HAProxy pueden operar en capa 4 y 7, pero no son soluciones exclusivas de capa 4. `keepalived` se utiliza frecuentemente con IPVS para deteccion de fallos.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="361.2" data-correct="c">

### Pregunta 6 (Subtema 361.2)

¿Que algoritmo de balanceo de carga distribuye las conexiones al servidor real con menos conexiones activas?

- [ ] a) Round Robin (rr)
- [ ] b) Weighted Round Robin (wrr)
- [ ] c) Least Connections (lc)
- [ ] d) Source Hashing (sh)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Least Connections (lc)**

El algoritmo Least Connections envía cada nueva conexion al servidor real que tiene el menor numero de conexiones activas en ese momento. Es mas inteligente que Round Robin cuando las peticiones tienen duraciones variables, ya que adapta la distribucion a la carga real de cada servidor. Existe tambien Weighted Least Connections (wlc) que considera pesos asignados a cada servidor. `ipvsadm -a -t VIP:puerto -r servidor -m -w peso` configura un servidor real con su peso.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="361.2" data-correct="a">

### Pregunta 7 (Subtema 361.2)

¿Que herramienta gestiona tanto el balanceo de carga IPVS como la alta disponibilidad mediante VRRP?

- [ ] a) `keepalived`
- [ ] b) `ipvsadm`
- [ ] c) `haproxy`
- [ ] d) `ldirectord`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `keepalived`**

`keepalived` combina dos funcionalidades: gestion de LVS/IPVS (configuracion de servidores virtuales y reales, health checks) y alta disponibilidad mediante el protocolo VRRP (Virtual Router Redundancy Protocol) para failover de la IP virtual entre multiples balanceadores. Se configura en `/etc/keepalived/keepalived.conf` con secciones `vrrp_instance` (para HA de la VIP) y `virtual_server` (para LVS). `ipvsadm` es solo la herramienta de administracion de IPVS sin HA.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="361.3" data-correct="b">

### Pregunta 8 (Subtema 361.3)

¿Que comando de `pcs` configura un recurso de IP virtual (VIP) en un cluster Pacemaker?

- [ ] a) `pcs resource add VIP ocf:heartbeat:IPaddr2 ip=192.168.1.100`
- [ ] b) `pcs resource create VIP ocf:heartbeat:IPaddr2 ip=192.168.1.100 cidr_netmask=24`
- [ ] c) `pcs cluster create VIP ip=192.168.1.100`
- [ ] d) `pcs vip add 192.168.1.100/24`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `pcs resource create VIP ocf:heartbeat:IPaddr2 ip=192.168.1.100 cidr_netmask=24`**

`pcs resource create` define un nuevo recurso en el cluster. `VIP` es el nombre del recurso, `ocf:heartbeat:IPaddr2` es el Resource Agent (Open Cluster Framework, proveedor heartbeat, agente IPaddr2). Los parametros `ip` y `cidr_netmask` configuran la direccion IP virtual y su mascara de red. IPaddr2 gestiona la asignacion de la IP a la interfaz de red y los ARP gratuitous para actualizar las caches de la red. El recurso migra automaticamente al nodo activo.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="361.3" data-correct="c">

### Pregunta 9 (Subtema 361.3)

¿Que tipo de restriccion de Pacemaker define que dos recursos deben ejecutarse en el mismo nodo?

- [ ] a) `order`
- [ ] b) `location`
- [ ] c) `colocation`
- [ ] d) `group`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `colocation`**

Las restricciones de colocacion (`colocation`) especifican que recursos deben ejecutarse (o no) en el mismo nodo. Por ejemplo, `pcs constraint colocation add Servicio with VIP INFINITY` asegura que el servicio siempre se ejecute en el mismo nodo que la VIP. Las restricciones de orden (`order`) definen la secuencia de inicio/parada. Las restricciones de ubicacion (`location`) prefieren o evitan nodos especificos. Un `group` es una forma simplificada de colocation + order para recursos relacionados.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="362.1" data-correct="a">

### Pregunta 10 (Subtema 362.1)

¿Que es DRBD y que funcion cumple en un cluster de alta disponibilidad?

- [ ] a) Es un sistema de replicacion de dispositivos de bloque en red que actua como un RAID 1 a traves de la red
- [ ] b) Es un sistema de archivos distribuido similar a NFS
- [ ] c) Es un protocolo de comunicacion para clusters
- [ ] d) Es un software de backup incremental

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Es un sistema de replicacion de dispositivos de bloque en red que actua como un RAID 1 a traves de la red**

DRBD (Distributed Replicated Block Device) replica datos a nivel de bloque entre dos o mas servidores a traves de la red, funcionando como un espejo de disco (RAID 1) entre nodos. Se implementa como un modulo del kernel y un espacio de usuario (`drbdadm`, `drbdsetup`). Es fundamental en clusters HA donde no hay almacenamiento compartido (SAN), ya que permite que el nodo secundario tenga una copia exacta de los datos para asumir el servicio en caso de fallo del primario.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="362.1" data-correct="d">

### Pregunta 11 (Subtema 362.1)

¿Que archivo de configuracion principal utiliza DRBD?

- [ ] a) `/etc/drbd/config`
- [ ] b) `/etc/drbd.cfg`
- [ ] c) `/var/lib/drbd/drbd.conf`
- [ ] d) `/etc/drbd.conf` (con archivos adicionales en `/etc/drbd.d/`)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `/etc/drbd.conf` (con archivos adicionales en `/etc/drbd.d/`)**

La configuracion de DRBD se define en `/etc/drbd.conf`, que tipicamente incluye archivos de `/etc/drbd.d/` mediante la directiva `include`. Los archivos principales son `global_common.conf` (parametros globales como protocolo de sincronizacion, handlers) y archivos `.res` para cada recurso DRBD. Cada recurso define los nodos, dispositivos de bloque, metadatos, y opciones de red y disco. Se aplica la configuracion con `drbdadm adjust recurso`.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="362.1" data-correct="b">

### Pregunta 12 (Subtema 362.1)

¿Que protocolo de replicacion de DRBD proporciona la mayor seguridad de datos al confirmar la escritura solo cuando los datos se han escrito en el disco del nodo remoto?

- [ ] a) Protocolo A (asincrono)
- [ ] b) Protocolo C (sincrono)
- [ ] c) Protocolo B (semi-sincrono)
- [ ] d) Protocolo D (diferido)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Protocolo C (sincrono)**

DRBD ofrece tres protocolos de replicacion: Protocolo A (asincrono) - la escritura se confirma cuando llega al buffer TCP local, ofreciendo el mejor rendimiento pero mayor riesgo de perdida de datos. Protocolo B (semi-sincrono) - se confirma cuando los datos llegan a la memoria del nodo remoto. Protocolo C (sincrono) - se confirma solo cuando los datos se han escrito en el disco del nodo remoto, garantizando cero perdida de datos pero con mayor latencia. El protocolo C es el recomendado para HA.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="362.1" data-correct="a">

### Pregunta 13 (Subtema 362.1)

¿Que comando promueve un nodo DRBD a rol primario, permitiendo operaciones de lectura y escritura?

- [ ] a) `drbdadm primary recurso`
- [ ] b) `drbdadm promote recurso`
- [ ] c) `drbdsetup role primary recurso`
- [ ] d) `drbd-admin set-primary recurso`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `drbdadm primary recurso`**

`drbdadm primary recurso` promueve el nodo local al rol primario para el recurso DRBD especificado, permitiendo montaje y operaciones de lectura/escritura. El otro nodo debe estar en rol secundario (solo lectura). En DRBD 9 con modo dual-primary (requiere un sistema de archivos con soporte cluster como GFS2 u OCFS2), ambos nodos pueden ser primarios simultaneamente. `drbdadm secondary recurso` cambia el rol a secundario. `drbdadm status` muestra el estado actual.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="362.2" data-correct="c">

### Pregunta 14 (Subtema 362.2)

¿Que sistema de archivos cluster permite el acceso de lectura y escritura simultaneo desde multiples nodos?

- [ ] a) ext4
- [ ] b) XFS
- [ ] c) GFS2 (Global File System 2)
- [ ] d) Btrfs

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) GFS2 (Global File System 2)**

GFS2 es un sistema de archivos cluster desarrollado por Red Hat que permite acceso de lectura/escritura simultaneo desde multiples nodos de un cluster. Utiliza DLM (Distributed Lock Manager) para coordinar el acceso concurrente a los datos, evitando corrupcion. Requiere almacenamiento compartido (SAN, DRBD dual-primary) y un cluster Pacemaker/Corosync funcional. Se crea con `mkfs.gfs2` especificando el nombre del cluster y el numero de journals (uno por nodo).

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="362.2" data-correct="b">

### Pregunta 15 (Subtema 362.2)

¿Que componente proporciona el bloqueo distribuido necesario para que los sistemas de archivos cluster (GFS2, OCFS2) funcionen correctamente?

- [ ] a) Corosync
- [ ] b) DLM (Distributed Lock Manager)
- [ ] c) Pacemaker
- [ ] d) STONITH

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) DLM (Distributed Lock Manager)**

El DLM es el subsistema del kernel que proporciona bloqueo distribuido, permitiendo que multiples nodos coordinen el acceso a recursos compartidos sin corrupcion. GFS2 y OCFS2 utilizan DLM para gestionar locks sobre bloques de datos, inodos y metadatos. DLM se comunica entre nodos a traves de Corosync y requiere que el servicio `dlm_controld` (o `dlm.service` en systemd) este activo. Sin DLM, el acceso simultaneo a un sistema de archivos compartido resultaria en corrupcion.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="363.1" data-correct="d">

### Pregunta 16 (Subtema 363.1)

¿Que sistema de almacenamiento distribuido desarrollado por Red Hat utiliza bloques (bricks) agrupados en volumenes para proporcionar almacenamiento escalable?

- [ ] a) Ceph
- [ ] b) DRBD
- [ ] c) MooseFS
- [ ] d) GlusterFS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) GlusterFS**

GlusterFS es un sistema de almacenamiento distribuido que agrupa bricks (directorios en servidores individuales) en volumenes logicos. Los tipos de volumen incluyen: Distribute (distribuye archivos entre bricks), Replicate (replica datos para redundancia), Stripe (divide archivos en fragmentos) y combinaciones como Distributed-Replicate. Se gestiona con `gluster` CLI y los clientes montan los volumenes mediante FUSE (`mount -t glusterfs`) o NFS. No requiere servidor de metadatos centralizado.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="363.1" data-correct="a">

### Pregunta 17 (Subtema 363.1)

¿Que comando crea un volumen GlusterFS replicado entre dos servidores?

- [ ] a) `gluster volume create vol1 replica 2 server1:/data/brick1 server2:/data/brick1`
- [ ] b) `gluster create volume vol1 --replica=2 server1:/data server2:/data`
- [ ] c) `glusterd volume new vol1 type=replicate server1 server2`
- [ ] d) `gluster vol add vol1 replica server1:/data server2:/data`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `gluster volume create vol1 replica 2 server1:/data/brick1 server2:/data/brick1`**

`gluster volume create` crea un nuevo volumen especificando el nombre (`vol1`), el tipo (`replica 2` para replicacion con 2 copias) y los bricks (pares servidor:directorio). Para un volumen distributed-replicate se especificarian mas bricks en multiplos del factor de replica. Despues de crear el volumen, se inicia con `gluster volume start vol1`. Los clientes montan con `mount -t glusterfs server1:/vol1 /mnt/gluster`.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="363.1" data-correct="b">

### Pregunta 18 (Subtema 363.1)

¿Que comando muestra el estado detallado de un volumen GlusterFS, incluyendo los bricks y su estado?

- [ ] a) `gluster volume list`
- [ ] b) `gluster volume info vol1` o `gluster volume status vol1`
- [ ] c) `gluster status vol1`
- [ ] d) `glusterd --status vol1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `gluster volume info vol1` o `gluster volume status vol1`**

`gluster volume info` muestra la configuracion del volumen: nombre, tipo, estado, bricks, opciones de transporte y opciones configuradas. `gluster volume status` muestra el estado operativo de cada brick y proceso asociado, incluyendo PIDs, puertos, uso de memoria y estado online/offline. `gluster volume list` solo lista los nombres de los volumenes sin detalle. `gluster peer status` muestra el estado de los nodos del pool de almacenamiento.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="363.2" data-correct="c">

### Pregunta 19 (Subtema 363.2)

¿Que tipo de almacenamiento proporciona Ceph como almacenamiento de bloques, similar a un disco duro virtual?

- [ ] a) CephFS
- [ ] b) RADOSGW
- [ ] c) RBD (RADOS Block Device)
- [ ] d) RADOS directamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) RBD (RADOS Block Device)**

Ceph ofrece tres interfaces de acceso: RBD (RADOS Block Device) proporciona dispositivos de bloque virtuales que se pueden montar como discos (similar a iSCSI), ampliamente usado en KVM/libvirt y Kubernetes. CephFS es un sistema de archivos POSIX distribuido. RADOSGW (RADOS Gateway) proporciona una interfaz de almacenamiento de objetos compatible con S3 y Swift. Todos se construyen sobre RADOS (Reliable Autonomic Distributed Object Store), la capa base de almacenamiento de objetos.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="363.2" data-correct="a">

### Pregunta 20 (Subtema 363.2)

¿Que componente de Ceph almacena los datos en los discos fisicos del cluster?

- [ ] a) OSD (Object Storage Daemon)
- [ ] b) MON (Monitor)
- [ ] c) MDS (Metadata Server)
- [ ] d) MGR (Manager)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) OSD (Object Storage Daemon)**

Los OSDs son los demonios que gestionan el almacenamiento fisico de datos en Ceph. Cada OSD gestiona tipicamente un disco duro o SSD y es responsable de almacenar objetos, replicar datos, recuperar datos en caso de fallo y reportar el estado al monitor. Los MON mantienen el mapa del cluster (CRUSH map, OSD map). Los MDS gestionan los metadatos exclusivamente para CephFS. Los MGR proporcionan modulos de monitorizacion y gestion adicionales (dashboard, Prometheus, etc.).

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="363.2" data-correct="d">

### Pregunta 21 (Subtema 363.2)

¿Que algoritmo utiliza Ceph para distribuir datos entre los OSDs sin necesidad de una tabla de ubicacion centralizada?

- [ ] a) Consistent Hashing
- [ ] b) Round Robin
- [ ] c) DHT (Distributed Hash Table)
- [ ] d) CRUSH (Controlled Replication Under Scalable Hashing)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) CRUSH (Controlled Replication Under Scalable Hashing)**

El algoritmo CRUSH calcula deterministicamente la ubicacion de cada objeto en el cluster sin necesidad de una tabla de busqueda centralizada. Utiliza un mapa jerarquico (CRUSH map) que describe la topologia del cluster (racks, hosts, OSDs) y reglas que definen la politica de replicacion (por ejemplo, "replicas en diferentes racks"). Esto permite a cualquier cliente o OSD calcular independientemente donde se almacenan los datos, proporcionando escalabilidad masiva.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="364.1" data-correct="b">

### Pregunta 22 (Subtema 364.1)

¿Que nivel de RAID ofrece mirroring (espejo) entre dos discos con redundancia pero sin striping?

- [ ] a) RAID 0
- [ ] b) RAID 1
- [ ] c) RAID 5
- [ ] d) RAID 6

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) RAID 1**

RAID 1 crea una copia exacta (espejo) de los datos en dos o mas discos. Proporciona redundancia total (puede perder N-1 discos de N) y mejora el rendimiento de lectura (puede leer de cualquier disco), pero la capacidad efectiva es la de un solo disco. No utiliza striping (distribucion de datos entre discos para rendimiento). RAID 0 ofrece striping sin redundancia. RAID 5 combina striping con paridad distribuida. RAID 6 usa doble paridad.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="364.1" data-correct="c">

### Pregunta 23 (Subtema 364.1)

¿Que nivel de RAID combina RAID 1 (mirroring) y RAID 0 (striping), proporcionando alto rendimiento y redundancia?

- [ ] a) RAID 5
- [ ] b) RAID 6
- [ ] c) RAID 10 (1+0)
- [ ] d) RAID 50

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) RAID 10 (1+0)**

RAID 10 (o RAID 1+0) combina el mirroring de RAID 1 con el striping de RAID 0. Primero se crean pares de discos en espejo (RAID 1) y luego se aplica striping sobre esos pares (RAID 0). Requiere un minimo de 4 discos. Ofrece excelente rendimiento de lectura y escritura con redundancia, siendo la opcion preferida para bases de datos y cargas de trabajo intensivas en E/S. Puede perder hasta un disco de cada par sin perder datos.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="364.1" data-correct="a">

### Pregunta 24 (Subtema 364.1)

¿Que comando crea un array RAID 10 con 4 discos usando mdadm?

- [ ] a) `mdadm --create /dev/md0 --level=10 --raid-devices=4 /dev/sd[b-e]1`
- [ ] b) `mdadm --build /dev/md0 --level=10 --devices=4 /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1`
- [ ] c) `mdadm --create /dev/md0 --level=1+0 --disks=4 /dev/sd[b-e]`
- [ ] d) `mdadm --assemble /dev/md0 --level=10 /dev/sd[b-e]1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `mdadm --create /dev/md0 --level=10 --raid-devices=4 /dev/sd[b-e]1`**

`mdadm --create` crea un nuevo array RAID. `--level=10` especifica RAID 10, `--raid-devices=4` el numero de discos y los ultimos argumentos son los dispositivos. mdadm tiene un soporte nativo para RAID 10 con diferentes layouts: `--layout=n2` (near copies, por defecto), `--layout=f2` (far copies) y `--layout=o2` (offset copies). `--assemble` se usa para reensamblar un array existente, no para crearlo.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="364.2" data-correct="b">

### Pregunta 25 (Subtema 364.2)

¿Que funcionalidad avanzada de LVM permite crear una copia instantanea de un volumen logico para backups?

- [ ] a) `lvextend`
- [ ] b) `lvcreate --snapshot` (LVM snapshot)
- [ ] c) `lvmirror`
- [ ] d) `lvrename`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `lvcreate --snapshot` (LVM snapshot)**

Los snapshots de LVM crean una copia punto-en-el-tiempo de un volumen logico usando Copy-on-Write (CoW). Solo almacenan los bloques que cambian despues de la creacion del snapshot, por lo que son rapidos de crear y eficientes en espacio. Se crean con `lvcreate --snapshot --name snap_home --size 5G /dev/vg/home`. Son ideales para backups consistentes: crear snapshot, montar el snapshot, respaldar, eliminar snapshot con `lvremove`. Deben dimensionarse para contener los cambios durante su vida util.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="364.2" data-correct="c">

### Pregunta 26 (Subtema 364.2)

¿Que tipo de volumen logico de LVM proporciona thin provisioning, donde el espacio se asigna bajo demanda?

- [ ] a) Linear volume
- [ ] b) Striped volume
- [ ] c) Thin pool y thin volumes
- [ ] d) Mirror volume

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Thin pool y thin volumes**

LVM thin provisioning permite crear volumenes logicos que comparten un pool de almacenamiento comun y solo consumen espacio cuando se escriben datos realmente. Se crea primero un thin pool (`lvcreate --type thin-pool --name pool0 --size 100G vg0`) y luego thin volumes dentro del pool (`lvcreate --type thin --name tv0 --virtualsize 50G --thinpool pool0 vg0`). La suma de los tamanos virtuales de los thin volumes puede exceder el tamano del pool (overprovisioning). Es esencial monitorizar el uso del pool para evitar agotamiento.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="364.3" data-correct="d">

### Pregunta 27 (Subtema 364.3)

¿Que tecnologia de Linux permite combinar multiples interfaces de red fisicas en una sola interfaz logica para redundancia y/o mayor ancho de banda?

- [ ] a) VLAN tagging
- [ ] b) Network namespaces
- [ ] c) IP aliasing
- [ ] d) Network bonding (teaming)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Network bonding (teaming)**

El bonding (o teaming en Red Hat) combina multiples interfaces de red fisicas en una interfaz logica, proporcionando redundancia (failover) y/o agregacion de ancho de banda. Se configura a traves del modulo del kernel `bonding` y soporta multiples modos: mode 0 (balance-rr), mode 1 (active-backup), mode 2 (balance-xor), mode 3 (broadcast), mode 4 (802.3ad/LACP), mode 5 (balance-tlb) y mode 6 (balance-alb). La configuracion se define en archivos de red o con NetworkManager.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="364.3" data-correct="a">

### Pregunta 28 (Subtema 364.3)

¿Que modo de bonding requiere soporte 802.3ad (LACP) en el switch de red para funcionar?

- [ ] a) mode 4 (802.3ad)
- [ ] b) mode 1 (active-backup)
- [ ] c) mode 6 (balance-alb)
- [ ] d) mode 5 (balance-tlb)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) mode 4 (802.3ad)**

El modo 4 (802.3ad) implementa el estandar IEEE 802.3ad de agregacion de enlaces, utilizando el protocolo LACP (Link Aggregation Control Protocol) para negociar automaticamente la agregacion con el switch. Es el unico modo que requiere configuracion especifica en el switch. Los modos 1, 5 y 6 no requieren configuracion del switch: mode 1 solo usa una interfaz activa, mode 5 (TLB) balancea la transmision adaptivamente, y mode 6 (ALB) balancea tanto transmision como recepcion sin soporte del switch.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="361.1" data-correct="b">

### Pregunta 29 (Subtema 361.1)

¿Que comando de `pcs` muestra el estado completo del cluster, incluyendo nodos, recursos y fallos?

- [ ] a) `pcs cluster info`
- [ ] b) `pcs status`
- [ ] c) `pcs show all`
- [ ] d) `pcs cluster status` (exclusivamente)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `pcs status`**

`pcs status` muestra una vision completa del estado del cluster: nodos online/offline, recursos activos y su ubicacion, fallos recientes, quorum y propiedades del cluster. Es el comando mas utilizado para diagnostico. `pcs cluster status` solo muestra el estado del servicio Corosync/Pacemaker en cada nodo. Otros comandos utiles son `pcs resource show` (listar recursos), `pcs constraint show` (restricciones) y `pcs resource failcount show` (contadores de fallos).

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="361.2" data-correct="c">

### Pregunta 30 (Subtema 361.2)

¿Que software de balanceo de carga puede operar tanto en capa 4 (TCP) como en capa 7 (HTTP) y es ampliamente utilizado con Pacemaker para HA?

- [ ] a) LVS/IPVS
- [ ] b) Nginx exclusivamente
- [ ] c) HAProxy
- [ ] d) Apache mod_proxy

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) HAProxy**

HAProxy (High Availability Proxy) es un balanceador de carga y proxy reverso que opera en modo TCP (capa 4) y HTTP (capa 7). Soporta algoritmos de balanceo (roundrobin, leastconn, source), health checks, SSL/TLS termination, sticky sessions, HTTP/2 y estadisticas detalladas. Se integra con Pacemaker como recurso gestionado del cluster. La configuracion se define en `/etc/haproxy/haproxy.cfg` con secciones `frontend` (puntos de entrada), `backend` (grupos de servidores) y `listen` (combinacion de ambos).

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="361.3" data-correct="d">

### Pregunta 31 (Subtema 361.3)

¿Que comando de `pcs` configura una restriccion de orden para que el recurso VIP se inicie antes que el servicio Apache?

- [ ] a) `pcs resource order VIP before Apache`
- [ ] b) `pcs constraint sequence VIP then Apache`
- [ ] c) `pcs resource depends Apache on VIP`
- [ ] d) `pcs constraint order VIP then Apache`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `pcs constraint order VIP then Apache`**

`pcs constraint order` define el orden de inicio y parada de los recursos. `VIP then Apache` significa que VIP debe iniciarse primero y Apache despues. Al detenerse, el orden se invierte: Apache se detiene primero, luego VIP. Las opciones adicionales incluyen `kind=Mandatory|Optional|Serialize` y `symmetrical=true|false`. Tambien se pueden agrupar recursos en un `resource group` que automaticamente implica colocation y orden secuencial.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="362.1" data-correct="a">

### Pregunta 32 (Subtema 362.1)

¿Que comando inicia la sincronizacion inicial de un recurso DRBD?

- [ ] a) `drbdadm -- --overwrite-data-of-peer primary recurso` (en el nodo que tiene los datos correctos)
- [ ] b) `drbdadm sync recurso`
- [ ] c) `drbdadm start-sync recurso`
- [ ] d) `drbdsetup replicate recurso`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `drbdadm -- --overwrite-data-of-peer primary recurso` (en el nodo que tiene los datos correctos)**

Cuando se configura DRBD por primera vez y ambos nodos estan en estado Secondary/Unknown (Split Brain o datos inconsistentes), se debe elegir cual nodo tiene los datos correctos y forzar la sincronizacion desde el. Ejecutando `drbdadm -- --overwrite-data-of-peer primary recurso` en el nodo fuente, se inicia la sincronizacion completa al nodo secundario, sobrescribiendo sus datos. El progreso se monitoriza con `drbdadm status` o `cat /proc/drbd`.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="362.1" data-correct="c">

### Pregunta 33 (Subtema 362.1)

¿Que archivo del sistema proporciona informacion en tiempo real sobre el estado de los recursos DRBD?

- [ ] a) `/var/log/drbd`
- [ ] b) `/sys/kernel/drbd/status`
- [ ] c) `/proc/drbd`
- [ ] d) `/etc/drbd.d/status`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/proc/drbd`**

El archivo `/proc/drbd` muestra el estado en tiempo real de todos los recursos DRBD, incluyendo: version de DRBD, rol (Primary/Secondary), estado de conexion (Connected, Connecting, StandAlone), estado del disco (UpToDate, Inconsistent, Diskless), porcentaje de sincronizacion y velocidad. En DRBD 9, tambien se puede usar `drbdadm status` que proporciona un formato mas legible con informacion detallada de cada recurso y conexion.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="362.2" data-correct="b">

### Pregunta 34 (Subtema 362.2)

¿Que sistema de archivos cluster, desarrollado por Oracle, es una alternativa a GFS2 para acceso compartido desde multiples nodos?

- [ ] a) ext4
- [ ] b) OCFS2 (Oracle Cluster File System 2)
- [ ] c) JFS
- [ ] d) ReiserFS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) OCFS2 (Oracle Cluster File System 2)**

OCFS2 es un sistema de archivos cluster de codigo abierto desarrollado por Oracle que permite acceso de lectura/escritura simultaneo desde multiples nodos. Al igual que GFS2, utiliza DLM para coordinacion de bloqueos. Se crea con `mkfs.ocfs2` y se configura con `/etc/ocfs2/cluster.conf`. Es soportado en el kernel Linux mainline. OCFS2 es mas comun en entornos Oracle (como Oracle RAC), mientras que GFS2 es mas comun en entornos Red Hat.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="363.1" data-correct="a">

### Pregunta 35 (Subtema 363.1)

¿Que tipo de volumen GlusterFS distribuye archivos entre bricks sin replicacion?

- [ ] a) Distribute
- [ ] b) Replicate
- [ ] c) Disperse
- [ ] d) Stripe

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Distribute**

Un volumen Distribute de GlusterFS distribuye archivos entre los bricks disponibles usando un hash del nombre del archivo. Cada archivo completo reside en un unico brick, sin replicacion ni fragmentacion. Proporciona escalabilidad de capacidad (la capacidad total es la suma de todos los bricks) pero no ofrece redundancia: si un brick falla, se pierden los archivos almacenados en el. Es el tipo mas simple y se usa cuando la redundancia se gestiona a otro nivel (RAID hardware, por ejemplo).

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="363.1" data-correct="d">

### Pregunta 36 (Subtema 363.1)

¿Que comando agrega un brick adicional a un volumen GlusterFS existente para aumentar la capacidad?

- [ ] a) `gluster volume extend vol1 server3:/data/brick1`
- [ ] b) `gluster brick add vol1 server3:/data/brick1`
- [ ] c) `gluster volume resize vol1 add-brick server3:/data/brick1`
- [ ] d) `gluster volume add-brick vol1 server3:/data/brick1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `gluster volume add-brick vol1 server3:/data/brick1`**

`gluster volume add-brick` agrega uno o mas bricks a un volumen existente. Para volumenes replicados, se deben agregar bricks en multiplos del factor de replica. Despues de agregar bricks a un volumen distribute, se recomienda ejecutar `gluster volume rebalance vol1 start` para redistribuir los datos existentes entre todos los bricks (incluyendo los nuevos). `gluster volume remove-brick` elimina bricks, migrando primero los datos.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="363.2" data-correct="c">

### Pregunta 37 (Subtema 363.2)

¿Que comando de Ceph crea un nuevo dispositivo de bloque RBD de 100 GB?

- [ ] a) `ceph rbd create disco1 --size 100G`
- [ ] b) `rados create disco1 --pool rbd --size 100G`
- [ ] c) `rbd create disco1 --size 102400 --pool rbd`
- [ ] d) `ceph osd create rbd/disco1 100G`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rbd create disco1 --size 102400 --pool rbd`**

El comando `rbd create` crea una nueva imagen RBD (RADOS Block Device). `--size` se especifica en MB (102400 MB = 100 GB), o con sufijo en versiones recientes (`--size 100G`). `--pool` indica el pool de almacenamiento. Opciones adicionales incluyen `--image-feature` (features como layering, exclusive-lock) y `--image-format 2` (formato moderno). El dispositivo se mapea localmente con `rbd map disco1 --pool rbd`, creando `/dev/rbdN` que se puede formatear y montar.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="363.2" data-correct="a">

### Pregunta 38 (Subtema 363.2)

¿Que numero minimo de monitores (MON) se recomienda para un cluster Ceph en produccion?

- [ ] a) 3
- [ ] b) 1
- [ ] c) 5
- [ ] d) 2

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) 3**

Se recomienda un numero impar de monitores (3, 5 o 7) para mantener el quorum mediante el algoritmo Paxos. Con 3 monitores, el cluster puede tolerar la perdida de 1 monitor y seguir operando. Con 5, tolera la perdida de 2. Un unico monitor es un punto unico de fallo y 2 monitores no pueden establecer quorum si uno falla (necesitan mayoria). Los monitores mantienen el mapa del cluster (cluster map) que incluye el OSD map, MON map, PG map y CRUSH map.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="364.1" data-correct="b">

### Pregunta 39 (Subtema 364.1)

¿Que nivel de RAID utiliza doble paridad distribuida, permitiendo la perdida simultanea de dos discos?

- [ ] a) RAID 5
- [ ] b) RAID 6
- [ ] c) RAID 10
- [ ] d) RAID 50

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) RAID 6**

RAID 6 utiliza doble paridad distribuida entre todos los discos del array, lo que permite la perdida simultanea de hasta dos discos sin perdida de datos. Requiere un minimo de 4 discos. La capacidad efectiva es N-2 discos (donde N es el numero total). RAID 6 es preferible a RAID 5 para discos de gran capacidad donde la probabilidad de un segundo fallo durante la reconstruccion es significativa. La reconstruccion es mas lenta que RAID 5 debido al calculo de doble paridad.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="364.2" data-correct="d">

### Pregunta 40 (Subtema 364.2)

¿Que comando de LVM crea un mirror (espejo) de un volumen logico existente?

- [ ] a) `lvmirror /dev/vg/lv`
- [ ] b) `lvcreate --mirror /dev/vg/lv`
- [ ] c) `lvextend --mirrors 1 /dev/vg/lv`
- [ ] d) `lvconvert --mirrors 1 /dev/vg/lv`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `lvconvert --mirrors 1 /dev/vg/lv`**

`lvconvert --mirrors 1` convierte un volumen logico lineal existente en un volumen con espejo, creando una copia adicional de los datos. El numero indica cuantas copias adicionales (1 mirror = 2 copias totales). Tambien se puede crear directamente un LV con mirror: `lvcreate --mirrors 1 --name lv_mirror --size 10G vg`. LVM usa `dm-raid` o el antiguo modulo mirror del device-mapper. `lvconvert --type raid1` es la sintaxis moderna preferida.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="361.1" data-correct="c">

### Pregunta 41 (Subtema 361.1)

¿Que propiedad de Pacemaker controla si el cluster requiere STONITH (fencing) para operar?

- [ ] a) `cluster-recheck-interval`
- [ ] b) `no-quorum-policy`
- [ ] c) `stonith-enabled`
- [ ] d) `fence-required`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `stonith-enabled`**

La propiedad `stonith-enabled` (por defecto `true`) controla si Pacemaker requiere dispositivos STONITH configurados. Si esta en `true` y no hay dispositivos STONITH configurados, Pacemaker se negara a iniciar recursos. Para entornos de prueba se puede desactivar con `pcs property set stonith-enabled=false`, pero esto NO se recomienda en produccion ya que un nodo no-responsive podria causar corrupcion de datos al acceder simultaneamente al almacenamiento.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="361.2" data-correct="a">

### Pregunta 42 (Subtema 361.2)

¿Que modo de forwarding de LVS permite que los servidores reales respondan directamente al cliente sin pasar por el balanceador?

- [ ] a) DR (Direct Routing)
- [ ] b) NAT
- [ ] c) TUN (IP Tunneling)
- [ ] d) Full Proxy

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) DR (Direct Routing)**

En modo DR, el balanceador solo modifica la direccion MAC de destino del paquete para enviarlo al servidor real seleccionado. El servidor real responde directamente al cliente usando la IP virtual como IP de origen (configurada en un interfaz loopback con ARP suprimido). Esto elimina el cuello de botella del balanceador para el trafico de respuesta, que tipicamente es mucho mayor que el de solicitud. Es el modo mas eficiente de LVS pero requiere que los servidores reales esten en el mismo segmento de red.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="361.3" data-correct="b">

### Pregunta 43 (Subtema 361.3)

¿Que tipo de recurso de Pacemaker agrupa varios recursos para que se ejecuten juntos, en orden, en el mismo nodo?

- [ ] a) Clone
- [ ] b) Group
- [ ] c) Master/Slave (promotable)
- [ ] d) Bundle

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Group**

Un resource group en Pacemaker agrupa multiples recursos que deben ejecutarse en el mismo nodo y en un orden especifico. Los recursos de un grupo se inician en el orden definido y se detienen en orden inverso. Si un recurso del grupo falla, todos los recursos posteriores en el grupo tambien se detienen. Se crea con `pcs resource group add MiGrupo VIP Apache MySQL`. Un Clone ejecuta una copia del recurso en cada nodo. Un recurso promotable (antes Master/Slave) puede tener diferentes roles.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="362.1" data-correct="d">

### Pregunta 44 (Subtema 362.1)

¿Que ocurre cuando se produce un split-brain en DRBD y como se resuelve?

- [ ] a) DRBD resuelve automaticamente el conflicto eligiendo al nodo con mas datos
- [ ] b) Ambos nodos se detienen automaticamente para proteger los datos
- [ ] c) DRBD descarta los datos del nodo secundario automaticamente
- [ ] d) Ambos nodos se consideran primarios independientes; se requiere intervencion manual o handlers configurados para resolver el conflicto

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Ambos nodos se consideran primarios independientes; se requiere intervencion manual o handlers configurados para resolver el conflicto**

Un split-brain en DRBD ocurre cuando ambos nodos operan como primarios sin comunicacion entre si, causando divergencia de datos. Al reconectarse, DRBD detecta la situacion y se desconecta. La resolucion requiere decidir que nodo tiene los datos correctos y descartar los del otro con `drbdadm -- --discard-my-data connect recurso` en el nodo perdedor. Se pueden configurar handlers automaticos en `drbd.conf` con `after-sb-0pri`, `after-sb-1pri` y `after-sb-2pri` para diferentes escenarios.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="362.2" data-correct="a">

### Pregunta 45 (Subtema 362.2)

¿Que comando crea un sistema de archivos GFS2 en un dispositivo compartido?

- [ ] a) `mkfs.gfs2 -p lock_dlm -t cluster_name:fs_name -j 2 /dev/mapper/shared`
- [ ] b) `mkfs -t gfs2 /dev/mapper/shared`
- [ ] c) `gfs2_mkfs --cluster=nombre --journals=2 /dev/mapper/shared`
- [ ] d) `mkfs.gfs2 --lock=dlm /dev/mapper/shared`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `mkfs.gfs2 -p lock_dlm -t cluster_name:fs_name -j 2 /dev/mapper/shared`**

`mkfs.gfs2` requiere parametros especificos del cluster: `-p lock_dlm` (protocolo de bloqueo DLM), `-t cluster_name:fs_name` (nombre del cluster Corosync y nombre del filesystem) y `-j N` (numero de journals, uno por cada nodo que montara el filesystem). El nombre del cluster debe coincidir exactamente con el nombre configurado en Corosync. Cada journal consume espacio en disco (tipicamente 128 MB). Se pueden agregar journals adicionales con `gfs2_jadd`.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="363.1" data-correct="c">

### Pregunta 46 (Subtema 363.1)

¿Que tipo de volumen GlusterFS proporciona redundancia mediante codificacion de borrado (erasure coding)?

- [ ] a) Distribute
- [ ] b) Replicate
- [ ] c) Disperse
- [ ] d) Stripe

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Disperse**

Los volumenes Disperse de GlusterFS utilizan erasure coding (similar a RAID 5/6) para proporcionar redundancia con mejor eficiencia de espacio que la replicacion completa. Se crean con `gluster volume create vol1 disperse N redundancy M bricks...`, donde N es el numero total de bricks y M el numero de bricks de redundancia. Por ejemplo, con `disperse 6 redundancy 2`, los datos se distribuyen entre 6 bricks y toleran la perdida de 2 (capacidad efectiva 4/6 = 67%). Es mas eficiente en espacio que replicacion pero con mayor carga de CPU.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="363.2" data-correct="b">

### Pregunta 47 (Subtema 363.2)

¿Que comando verifica el estado de salud general de un cluster Ceph?

- [ ] a) `ceph cluster status`
- [ ] b) `ceph status` (o `ceph -s`)
- [ ] c) `ceph health check`
- [ ] d) `ceph osd status`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ceph status` (o `ceph -s`)**

`ceph status` muestra un resumen completo del estado del cluster: estado de salud (HEALTH_OK, HEALTH_WARN, HEALTH_ERR), servicios activos (mons, osds, mgrs, mds), estado de los pools y placement groups (PGs), y estadisticas de uso de almacenamiento. `ceph health` muestra solo el estado de salud. `ceph osd tree` muestra la jerarquia de OSDs. `ceph osd status` muestra el estado de cada OSD individual. `ceph df` muestra el uso de espacio por pool.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="363.2" data-correct="d">

### Pregunta 48 (Subtema 363.2)

¿Que es un Placement Group (PG) en Ceph?

- [ ] a) Un grupo de monitores que gestionan una porcion del cluster
- [ ] b) Un grupo de OSDs fisicos en el mismo rack
- [ ] c) Una politica de colocacion de datos definida por el administrador
- [ ] d) Una agrupacion logica de objetos que se mapean como conjunto a un grupo de OSDs

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Una agrupacion logica de objetos que se mapean como conjunto a un grupo de OSDs**

Los Placement Groups (PGs) son una abstraccion intermedia entre los objetos individuales y los OSDs. Cada objeto se asigna a un PG mediante hash, y luego CRUSH mapea cada PG a un conjunto de OSDs (segun el factor de replicacion). Los PGs permiten gestionar eficientemente millones de objetos sin mantener un mapeo individual de cada uno. El numero de PGs por pool afecta al rendimiento y la distribucion. Se configura con `ceph osd pool set pool_name pg_num N`.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="364.1" data-correct="c">

### Pregunta 49 (Subtema 364.1)

¿Que opcion de mdadm configura un disco spare (repuesto) que se activa automaticamente cuando un disco del array falla?

- [ ] a) `--hot-spare /dev/sdf1`
- [ ] b) `--reserve /dev/sdf1`
- [ ] c) `--spare-devices=1 /dev/sdf1`
- [ ] d) `--backup /dev/sdf1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `--spare-devices=1 /dev/sdf1`**

Al crear un array RAID con `mdadm --create`, la opcion `--spare-devices=N` especifica dispositivos de repuesto que se mantienen inactivos hasta que un disco del array falla. Cuando mdadm detecta un fallo, automaticamente reemplaza el disco fallido con el spare y comienza la reconstruccion. Tambien se puede agregar un spare a un array existente con `mdadm --add /dev/md0 /dev/sdf1` (si el array ya tiene el numero correcto de raid-devices, el nuevo disco se anade como spare).

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="364.2" data-correct="a">

### Pregunta 50 (Subtema 364.2)

¿Que comando permite mover los datos de un volumen logico de un volumen fisico a otro sin interrupcion?

- [ ] a) `pvmove /dev/sdb1 /dev/sdc1`
- [ ] b) `lvmove /dev/vg/lv /dev/sdc1`
- [ ] c) `vgmigrate /dev/sdb1 /dev/sdc1`
- [ ] d) `lvm relocate /dev/sdb1 /dev/sdc1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `pvmove /dev/sdb1 /dev/sdc1`**

`pvmove` migra los datos de un volumen fisico (PV) a otro dentro del mismo grupo de volumenes, sin interrupcion de los volumenes logicos que los utilizan. Es especialmente util para reemplazar discos: primero se agrega el nuevo disco al VG con `pvcreate` y `vgextend`, luego se migran los datos con `pvmove`, y finalmente se retira el disco antiguo con `vgreduce` y `pvremove`. La migracion se puede limitar a un LV especifico con `-n nombre_lv`.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="364.3" data-correct="b">

### Pregunta 51 (Subtema 364.3)

¿Que archivo de configuracion se utiliza para definir las opciones del modulo bonding del kernel?

- [ ] a) `/etc/bonding.conf`
- [ ] b) `/etc/modprobe.d/bonding.conf` (o configuracion en los archivos de red)
- [ ] c) `/etc/network/bond0.conf`
- [ ] d) `/sys/class/net/bond0/config`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/modprobe.d/bonding.conf` (o configuracion en los archivos de red)**

Las opciones del modulo bonding se pueden configurar en `/etc/modprobe.d/bonding.conf` con la directiva `options bonding mode=1 miimon=100`. Sin embargo, en sistemas modernos es mas comun configurar el bonding a traves de los archivos de red: ifcfg en RHEL/CentOS, netplan en Ubuntu, o NetworkManager con `nmcli`. Los parametros clave incluyen `mode` (tipo de bonding), `miimon` (intervalo de monitoreo en ms), `primary` (interfaz preferida) y `lacp_rate` (para modo 802.3ad).

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="361.1" data-correct="d">

### Pregunta 52 (Subtema 361.1)

¿Que archivo de configuracion principal utiliza Corosync para definir los parametros del cluster?

- [ ] a) `/etc/cluster/cluster.conf`
- [ ] b) `/etc/pacemaker/corosync.conf`
- [ ] c) `/var/lib/corosync/config`
- [ ] d) `/etc/corosync/corosync.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `/etc/corosync/corosync.conf`**

`/etc/corosync/corosync.conf` define la configuracion del cluster Corosync, incluyendo: la seccion `totem` (protocolo de comunicacion, cifrado, interfaces de red), `nodelist` (lista de nodos con sus IDs y direcciones), `quorum` (configuracion de quorum, votacion) y `logging` (configuracion de logs). Se puede generar automaticamente con `pcs cluster setup` o editarse manualmente. El archivo debe ser identico en todos los nodos del cluster.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="361.3" data-correct="a">

### Pregunta 53 (Subtema 361.3)

¿Que tipo de recurso de Pacemaker ejecuta una instancia del recurso en cada nodo del cluster?

- [ ] a) Clone
- [ ] b) Group
- [ ] c) Primitive
- [ ] d) Bundle

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Clone**

Un recurso clone en Pacemaker ejecuta una copia identica del recurso en multiples nodos (tipicamente en todos). Es util para servicios que deben estar activos en todos los nodos, como el agente DLM, el agente de fencing SBD, servicios de monitorizacion o clusterIP para balanceo. Se crea con `pcs resource clone NombreRecurso`. Un recurso promotable (antes Master/Slave) es un tipo especial de clone donde una instancia es promovida a Master y las demas son Slave (util para DRBD, bases de datos con replicacion).

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="362.1" data-correct="c">

### Pregunta 54 (Subtema 362.1)

¿Que comando muestra el estado detallado de todos los recursos DRBD en formato legible?

- [ ] a) `drbd-overview`
- [ ] b) `drbdadm dump`
- [ ] c) `drbdadm status`
- [ ] d) `drbdsetup show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `drbdadm status`**

`drbdadm status` (disponible en DRBD 9+) muestra el estado de todos los recursos DRBD en un formato jerarquico legible, incluyendo: nombre del recurso, rol (Primary/Secondary), estado del disco (UpToDate/Inconsistent), estado de la conexion (Connected/Connecting), estado de la replicacion (Established/SyncSource/SyncTarget) y porcentaje de sincronizacion. En versiones anteriores, `cat /proc/drbd` y `drbd-overview` (del paquete drbd-utils) proporcionan informacion similar.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="363.1" data-correct="b">

### Pregunta 55 (Subtema 363.1)

¿Que comando inicia el rebalanceo de datos en un volumen GlusterFS despues de agregar nuevos bricks?

- [ ] a) `gluster volume redistribute vol1`
- [ ] b) `gluster volume rebalance vol1 start`
- [ ] c) `gluster volume balance vol1`
- [ ] d) `gluster volume migrate vol1 start`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `gluster volume rebalance vol1 start`**

`gluster volume rebalance start` redistribuye los datos existentes entre todos los bricks del volumen, incluyendo los nuevos. Esto es necesario despues de agregar bricks a un volumen distribute, ya que los archivos existentes no se mueven automaticamente. El progreso se monitoriza con `gluster volume rebalance vol1 status`. El rebalanceo puede ser un proceso largo dependiendo de la cantidad de datos. Se puede detener con `gluster volume rebalance vol1 stop`.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="363.2" data-correct="d">

### Pregunta 56 (Subtema 363.2)

¿Que comando de Ceph crea un nuevo pool de almacenamiento con factor de replicacion 3?

- [ ] a) `ceph pool create mipool replicas=3`
- [ ] b) `rados mkpool mipool --replication=3`
- [ ] c) `ceph create pool mipool 3`
- [ ] d) `ceph osd pool create mipool 128` seguido de `ceph osd pool set mipool size 3`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `ceph osd pool create mipool 128` seguido de `ceph osd pool set mipool size 3`**

`ceph osd pool create` crea un nuevo pool especificando el nombre y el numero de PGs (128 en este caso). El factor de replicacion se establece con `ceph osd pool set mipool size 3` (3 copias de cada objeto). El numero minimo de copias para aceptar escrituras se configura con `min_size` (tipicamente 2). Los pools tambien soportan erasure coding como alternativa a la replicacion con `ceph osd pool create mipool 128 erasure perfil`.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="364.1" data-correct="c">

### Pregunta 57 (Subtema 364.1)

¿Que comando de mdadm muestra informacion detallada sobre un array RAID existente?

- [ ] a) `mdadm --info /dev/md0`
- [ ] b) `mdadm --show /dev/md0`
- [ ] c) `mdadm --detail /dev/md0`
- [ ] d) `mdadm --status /dev/md0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mdadm --detail /dev/md0`**

`mdadm --detail` muestra informacion completa sobre un array RAID: version de metadatos, nivel RAID, tamano total, numero de dispositivos, UUID, estado de cada disco (active sync, spare, faulty), estado de reconstruccion y otros datos. Para un resumen rapido de todos los arrays, se puede usar `cat /proc/mdstat`. `mdadm --examine /dev/sdX` muestra los metadatos RAID almacenados en un disco individual (superbloque).

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="364.2" data-correct="a">

### Pregunta 58 (Subtema 364.2)

¿Que funcionalidad de LVM permite restaurar un volumen logico a un estado anterior usando un snapshot?

- [ ] a) `lvconvert --merge /dev/vg/snap_home`
- [ ] b) `lvrevert /dev/vg/snap_home`
- [ ] c) `lvrestore --snapshot /dev/vg/snap_home`
- [ ] d) `lvm rollback /dev/vg/snap_home`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `lvconvert --merge /dev/vg/snap_home`**

`lvconvert --merge` fusiona un snapshot con su volumen logico de origen, restaurando este ultimo al estado que tenia cuando se creo el snapshot. El volumen de origen debe desmontarse (o la fusion se completara en el siguiente montaje/activacion). Una vez completado el merge, el snapshot deja de existir. Esta funcionalidad es util para rollback despues de actualizaciones fallidas o cambios de configuracion problematicos.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="364.3" data-correct="b">

### Pregunta 59 (Subtema 364.3)

¿Que parametro del modulo bonding configura el intervalo de monitorizacion del enlace MII en milisegundos?

- [ ] a) `monitor_interval`
- [ ] b) `miimon`
- [ ] c) `link_check`
- [ ] d) `health_interval`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `miimon`**

El parametro `miimon` define el intervalo en milisegundos con el que el driver de bonding verifica el estado del enlace MII de cada interfaz esclava. Un valor tipico es 100 (cada 100 ms). Si el enlace de una interfaz se detecta como caido, el trafico se redirige a las interfaces activas restantes. Un valor de 0 desactiva el monitoreo MII. Alternativamente se puede usar `arp_interval` junto con `arp_ip_target` para monitorear la conectividad mediante paquetes ARP.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="361.1" data-correct="c">

### Pregunta 60 (Subtema 361.1)

¿Que politica de quorum de Pacemaker determina que ocurre con los recursos cuando el cluster pierde el quorum?

- [ ] a) `quorum-action`
- [ ] b) `cluster-quorum-policy`
- [ ] c) `no-quorum-policy`
- [ ] d) `quorum-behavior`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `no-quorum-policy`**

La propiedad `no-quorum-policy` define el comportamiento del cluster cuando se pierde el quorum. Los valores posibles son: `stop` (detener todos los recursos, por defecto), `ignore` (continuar operando sin quorum, peligroso en produccion), `freeze` (mantener los recursos actuales pero no iniciar nuevos ni migrar), y `suicide` (hacer fencing del nodo propio). Se configura con `pcs property set no-quorum-policy=stop`. En clusters de 2 nodos, se suele usar `two_node: 1` en Corosync que permite operar sin quorum usando mecanismos alternativos.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
