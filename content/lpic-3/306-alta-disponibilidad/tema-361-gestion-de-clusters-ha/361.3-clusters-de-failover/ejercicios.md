---
title: "361.3 - Ejercicios: Clusters de Failover"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.3"
peso: 6
tags:
  - lpic-3
  - tema-361
  - ejercicios
  - failover
  - pacemaker
---

# 361.3 - Ejercicios: Clusters de Failover

### Pregunta 1
¿Qué comando crea un recurso IP virtual en Pacemaker usando pcs?

a) `pcs resource add VIP ocf:heartbeat:IPaddr2 ip=10.0.0.100`
b) `pcs resource create VIP ocf:heartbeat:IPaddr2 ip=10.0.0.100 cidr_netmask=24`
c) `pcs cluster resource VIP ip=10.0.0.100`
d) `pcs create resource VIP IPaddr2 ip=10.0.0.100`

<details><summary>Respuesta</summary>

**b) `pcs resource create VIP ocf:heartbeat:IPaddr2 ip=10.0.0.100 cidr_netmask=24`**

La sintaxis correcta es `pcs resource create NOMBRE clase:proveedor:agente parámetros`. El agente `IPaddr2` del proveedor `heartbeat` requiere los parámetros `ip` y `cidr_netmask`.
</details>

### Pregunta 2
¿Qué tipo de recurso Pacemaker se ejecuta en múltiples nodos y permite que una instancia sea promovida a Master?

a) primitive
b) group
c) clone
d) promotable

<details><summary>Respuesta</summary>

**d) promotable**

Un recurso `promotable` (anteriormente master/slave o multi-state) es un tipo especial de clone donde una instancia puede ser promovida al rol Master (Promoted) mientras las demás permanecen como Slave (Unpromoted). Es usado típicamente para DRBD.
</details>

### Pregunta 3
¿Qué comando se debe ejecutar después de `pcs resource move` para eliminar la restricción temporal creada?

a) `pcs resource delete`
b) `pcs resource clear`
c) `pcs resource reset`
d) `pcs constraint delete`

<details><summary>Respuesta</summary>

**b) `pcs resource clear`**

`pcs resource move` crea una restricción temporal de ubicación con score `-INFINITY` para evitar que el recurso vuelva al nodo original. `pcs resource clear` elimina esta restricción temporal.
</details>

### Pregunta 4
¿Cuál es el formato correcto para especificar un agente OCF del proveedor heartbeat?

a) `heartbeat:ocf:IPaddr2`
b) `ocf:IPaddr2:heartbeat`
c) `ocf:heartbeat:IPaddr2`
d) `IPaddr2:ocf:heartbeat`

<details><summary>Respuesta</summary>

**c) `ocf:heartbeat:IPaddr2`**

El formato es `clase:proveedor:agente`. OCF es la clase, heartbeat es el proveedor, e IPaddr2 es el nombre del agente.
</details>

### Pregunta 5
En la configuración de Corosync, ¿qué sección define los nodos del cluster con sus direcciones?

a) `totem`
b) `quorum`
c) `nodelist`
d) `logging`

<details><summary>Respuesta</summary>

**c) `nodelist`**

La sección `nodelist` define los nodos del cluster, incluyendo sus direcciones de red (`ring0_addr`, `ring1_addr`) y sus IDs únicos (`nodeid`).
</details>

### Pregunta 6
¿Qué restricción en Pacemaker asegura que dos recursos se ejecuten en el mismo nodo?

a) `location`
b) `colocation`
c) `order`
d) `group`

<details><summary>Respuesta</summary>

**b) `colocation`**

La restricción `colocation` (colocación) con score `INFINITY` asegura que dos recursos se ejecuten en el mismo nodo. Con score `-INFINITY` se asegura que estén en nodos diferentes.
</details>

### Pregunta 7
¿Qué dispositivo STONITH es apropiado para servidores físicos con interfaces IPMI/BMC?

a) `fence_xvm`
b) `fence_ipmilan`
c) `sbd`
d) `fence_apc`

<details><summary>Respuesta</summary>

**b) `fence_ipmilan`**

`fence_ipmilan` es el agente de fencing para servidores con interfaces IPMI (Intelligent Platform Management Interface) / BMC accesibles por red LAN. `fence_xvm` es para VMs libvirt, `sbd` para disco compartido, y `fence_apc` para PDUs APC.
</details>

### Pregunta 8
¿Qué comando exporta la CIB (Cluster Information Base) completa en formato XML?

a) `pcs cluster export`
b) `cibadmin --query`
c) `crm_resource --show-xml`
d) `pcs config backup`

<details><summary>Respuesta</summary>

**b) `cibadmin --query`**

`cibadmin --query` exporta la CIB completa en XML. Se puede redirigir a un archivo con `cibadmin --query > backup.xml` y restaurar con `cibadmin --replace --xml-file backup.xml`.
</details>

### Pregunta 9
En un grupo de recursos Pacemaker, ¿en qué orden se detienen los recursos?

a) En el mismo orden en que se inician
b) En orden inverso al de inicio
c) Todos simultáneamente
d) En orden alfabético

<details><summary>Respuesta</summary>

**b) En orden inverso al de inicio**

Los recursos de un grupo se inician en el orden definido (primero a último) y se detienen en orden inverso (último a primero). Por ejemplo, si el grupo tiene VIP -> FS -> Apache, se inicia VIP primero y se detiene Apache primero.
</details>

### Pregunta 10
¿Qué parámetro de Corosync debe establecerse a `1` en un cluster de exactamente 2 nodos?

a) `expected_votes: 1`
b) `two_node: 1`
c) `quorum_votes: 1`
d) `min_nodes: 1`

<details><summary>Respuesta</summary>

**b) `two_node: 1`**

El parámetro `two_node: 1` en la sección `quorum` de corosync.conf permite que un cluster de 2 nodos funcione correctamente a pesar de no poder alcanzar quorum natural cuando un nodo falla. Se recomienda combinarlo con `wait_for_all: 1`.
</details>

### Pregunta 11

¿Qué comando de pcs autentica los nodos del cluster antes de configurarlo?

a) `pcs cluster auth nodo1 nodo2`
b) `pcs host auth nodo1 nodo2 -u hacluster -p password`
c) `pcs node login nodo1 nodo2`
d) `pcs auth --nodes nodo1,nodo2`

<details><summary>Respuesta</summary>

**b) `pcs host auth nodo1 nodo2 -u hacluster -p password`**

`pcs host auth` autentica los nodos del cluster usando el usuario `hacluster` (usuario por defecto de Pacemaker). Este paso es necesario antes de ejecutar `pcs cluster setup` para que los nodos puedan comunicarse.
</details>

### Pregunta 12

¿Qué tipo de recurso Pacemaker ejecuta una instancia del recurso en todos los nodos del cluster simultáneamente?

a) primitive
b) group
c) clone
d) promotable

<details><summary>Respuesta</summary>

**c) clone**

Un recurso `clone` se ejecuta en múltiples nodos simultáneamente. Se configura con parámetros como `clone-max` (máximo de instancias) y `clone-node-max` (máximo por nodo). Es útil para recursos como DLM o sistemas de archivos cluster.
</details>

### Pregunta 13

¿Qué propiedad de Pacemaker define cuántos fallos de un recurso se toleran antes de migrarlo a otro nodo?

a) `default-resource-stickiness`
b) `migration-threshold`
c) `failure-timeout`
d) `no-quorum-policy`

<details><summary>Respuesta</summary>

**b) `migration-threshold`**

`migration-threshold` define el número de fallos que Pacemaker tolera antes de mover un recurso a otro nodo. Por ejemplo, con `migration-threshold=3`, el recurso se migra después de 3 fallos. `failure-timeout` define la ventana de tiempo para el conteo.
</details>

### Pregunta 14

¿Qué dispositivo STONITH se utiliza cuando no se dispone de IPMI ni de gestión de hipervisor, pero se tiene acceso a un disco compartido?

a) `fence_ipmilan`
b) `fence_xvm`
c) `sbd` (STONITH Block Device)
d) `fence_apc`

<details><summary>Respuesta</summary>

**c) `sbd` (STONITH Block Device)**

SBD utiliza un disco compartido (SAN, iSCSI) como mecanismo de fencing. Los nodos escriben mensajes de fencing en el disco y un watchdog local garantiza que el nodo afectado se reinicie. Es una alternativa cuando no hay IPMI ni gestión de hipervisor disponible.
</details>

### Pregunta 15

¿Qué transporte de comunicación es el predeterminado en Corosync moderno?

a) udp
b) udpu
c) knet
d) multicast

<details><summary>Respuesta</summary>

**c) knet**

`knet` (Kronosnet) es el transporte predeterminado en versiones modernas de Corosync (3.x). Soporta múltiples enlaces, cifrado integrado y compresión. Los transportes `udp` (multicast) y `udpu` (unicast) son alternativas más antiguas.
</details>

### Pregunta 16

¿Qué comando de pcs permite mover temporalmente un recurso a un nodo específico?

a) `pcs resource migrate VIP nodo2`
b) `pcs resource move VIP nodo2`
c) `pcs resource relocate VIP nodo2`
d) `pcs resource transfer VIP nodo2`

<details><summary>Respuesta</summary>

**b) `pcs resource move VIP nodo2`**

`pcs resource move` crea una restricción de location temporal con score `-INFINITY` para evitar el nodo actual, forzando al recurso a moverse. Es fundamental ejecutar `pcs resource clear VIP` después para eliminar la restricción temporal.
</details>

### Pregunta 17

¿Qué sección de corosync.conf define los parámetros de cifrado de las comunicaciones del cluster?

a) `quorum`
b) `nodelist`
c) `totem`
d) `logging`

<details><summary>Respuesta</summary>

**c) `totem`**

La sección `totem` contiene los parámetros de comunicación del cluster, incluyendo `crypto_cipher` (algoritmo de cifrado, ej: `aes256`) y `crypto_hash` (algoritmo de hash, ej: `sha256`), así como el tipo de transporte.
</details>

### Pregunta 18

¿Qué ocurre con los recursos de un grupo Pacemaker si uno de ellos falla?

a) Solo se reinicia el recurso fallido
b) Todo el grupo se migra como unidad a otro nodo
c) Se eliminan todos los recursos del grupo
d) Los demás recursos continúan sin cambios

<details><summary>Respuesta</summary>

**b) Todo el grupo se migra como unidad a otro nodo**

Un grupo de recursos en Pacemaker se comporta como una unidad. Si un recurso del grupo falla y no puede recuperarse en el nodo actual, todos los recursos del grupo se detienen (en orden inverso) y se inician en otro nodo (en orden directo).
</details>

### Pregunta 19

¿Qué herramienta de línea de comandos es una alternativa a pcs para administrar clusters Pacemaker?

a) `corosync-admin`
b) `crm`
c) `pcmk`
d) `cluster-admin`

<details><summary>Respuesta</summary>

**b) `crm`**

La shell `crm` (también conocida como crmsh) es una alternativa a `pcs` para la administración de clusters Pacemaker. Proporciona una interfaz interactiva con comandos como `crm status`, `crm configure show` y `crm resource`.
</details>

### Pregunta 20

¿Qué restricción de Pacemaker define que un recurso VIP debe iniciarse ANTES que el recurso WebServer?

a) `pcs constraint colocation add VIP with WebServer`
b) `pcs constraint location VIP prefers nodo1`
c) `pcs constraint order VIP then WebServer`
d) `pcs constraint require VIP before WebServer`

<details><summary>Respuesta</summary>

**c) `pcs constraint order VIP then WebServer`**

La restricción `order` define el orden de inicio de recursos. `VIP then WebServer` significa que VIP se inicia primero. Las restricciones de orden también afectan al apagado (en orden inverso). Se puede usar `kind=Optional` para orden no obligatorio.
</details>

### Pregunta 21

¿Qué comando configura un cluster Pacemaker llamado "mi_cluster" con los nodos nodo1, nodo2 y nodo3?

<input type="text" class="fill-blank" data-answer="pcs cluster setup mi_cluster nodo1 nodo2 nodo3" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs cluster setup mi_cluster nodo1 nodo2 nodo3**

El comando `pcs cluster setup` genera la configuración de Corosync y prepara el cluster. Requiere que los nodos estén previamente autenticados con `pcs host auth`. El nombre del cluster y los nodos se pasan como argumentos.
</details>

### Pregunta 22

¿Qué comando inicia el cluster Pacemaker/Corosync en todos los nodos simultáneamente?

<input type="text" class="fill-blank" data-answer="pcs cluster start --all" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs cluster start --all**

El comando `pcs cluster start --all` inicia los servicios de Corosync y Pacemaker en todos los nodos del cluster. Sin `--all`, solo inicia el cluster en el nodo local. `pcs cluster enable --all` habilita el inicio automático en el arranque.
</details>

### Pregunta 23

¿Qué comando limpia los errores de un recurso llamado "WebServer" en Pacemaker?

<input type="text" class="fill-blank" data-answer="pcs resource cleanup WebServer" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs resource cleanup WebServer**

`pcs resource cleanup` resetea el contador de fallos de un recurso, permitiendo que Pacemaker vuelva a intentar ejecutarlo en el nodo actual. Es útil después de resolver la causa de un fallo cuando el recurso no se recupera automáticamente.
</details>

### Pregunta 24

¿Qué comando exporta la CIB completa del cluster a un archivo XML llamado "backup.xml"?

<input type="text" class="fill-blank" data-answer="cibadmin --query > backup.xml" data-alt="cibadmin -Q > backup.xml" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cibadmin --query > backup.xml**

`cibadmin --query` (o `-Q`) exporta la CIB completa en formato XML a stdout. Redirigiendo a un archivo se crea un respaldo de la configuración que puede restaurarse con `cibadmin --replace --xml-file backup.xml`.
</details>

### Pregunta 25

¿Qué comando crea un recurso STONITH de tipo `fence_ipmilan` llamado "ipmi_nodo1" con la dirección IP 10.0.0.201?

<input type="text" class="fill-blank" data-answer="pcs stonith create ipmi_nodo1 fence_ipmilan ipaddr=10.0.0.201" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs stonith create ipmi_nodo1 fence_ipmilan ipaddr=10.0.0.201**

El comando `pcs stonith create` crea un dispositivo de fencing. Se especifica el nombre, el tipo de agente (`fence_ipmilan`) y los parámetros necesarios como `ipaddr`, `login`, `passwd`, `lanplus` y `pcmk_host_list`.
</details>
