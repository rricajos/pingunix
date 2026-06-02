---
title: "361.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "361.3"
---

# Flashcards: 361.3 - Clusters De Failover

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando crea un recurso IP virtual en Pacemaker usando pcs?

</div>
<div class="flashcard-back">

**R:** b) `pcs resource create VIP ocf:heartbeat:IPaddr2 ip=10.0.0.100 cidr_netmask=24`. La sintaxis correcta es `pcs resource create NOMBRE clase:proveedor:agente parámetros`. El agente `IPaddr2` del proveedor `heartbeat` requiere los parámetros `ip` y `cidr_netmask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué tipo de recurso Pacemaker se ejecuta en múltiples nodos y permite que una instancia sea promovida a Master?

</div>
<div class="flashcard-back">

**R:** d) promotable. Un recurso `promotable` (anteriormente master/slave o multi-state) es un tipo especial de clone donde una instancia puede ser promovida al rol Master (Promoted) mientras las demás permanecen como Slave (Unpromoted). Es usado típicamente para DRBD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando se debe ejecutar después de `pcs resource move` para eliminar la restricción temporal creada?

</div>
<div class="flashcard-back">

**R:** b) `pcs resource clear`. `pcs resource move` crea una restricción temporal de ubicación con score `-INFINITY` para evitar que el recurso vuelva al nodo original. `pcs resource clear` elimina esta restricción temporal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es el formato correcto para especificar un agente OCF del proveedor heartbeat?

</div>
<div class="flashcard-back">

**R:** c) `ocf:heartbeat:IPaddr2`. El formato es `clase:proveedor:agente`. OCF es la clase, heartbeat es el proveedor, e IPaddr2 es el nombre del agente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-005">
<div class="flashcard-front">

**P:** En la configuración de Corosync, ¿qué sección define los nodos del cluster con sus direcciones?

</div>
<div class="flashcard-back">

**R:** c) `nodelist`. La sección `nodelist` define los nodos del cluster, incluyendo sus direcciones de red (`ring0_addr`, `ring1_addr`) y sus IDs únicos (`nodeid`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué restricción en Pacemaker asegura que dos recursos se ejecuten en el mismo nodo?

</div>
<div class="flashcard-back">

**R:** b) `colocation`. La restricción `colocation` (colocación) con score `INFINITY` asegura que dos recursos se ejecuten en el mismo nodo. Con score `-INFINITY` se asegura que estén en nodos diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué dispositivo STONITH es apropiado para servidores físicos con interfaces IPMI/BMC?

</div>
<div class="flashcard-back">

**R:** b) `fence_ipmilan`. `fence_ipmilan` es el agente de fencing para servidores con interfaces IPMI (Intelligent Platform Management Interface) / BMC accesibles por red LAN. `fence_xvm` es para VMs libvirt, `sbd` para disco compartido, y `fence_apc` para PDUs APC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando exporta la CIB (Cluster Information Base) completa en formato XML?

</div>
<div class="flashcard-back">

**R:** b) `cibadmin --query`. `cibadmin --query` exporta la CIB completa en XML. Se puede redirigir a un archivo con `cibadmin --query > backup.xml` y restaurar con `cibadmin --replace --xml-file backup.xml`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-009">
<div class="flashcard-front">

**P:** En un grupo de recursos Pacemaker, ¿en qué orden se detienen los recursos?

</div>
<div class="flashcard-back">

**R:** b) En orden inverso al de inicio. Los recursos de un grupo se inician en el orden definido (primero a último) y se detienen en orden inverso (último a primero). Por ejemplo, si el grupo tiene VIP -> FS -> Apache, se inicia VIP primero y se detiene Apache primero.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Corosync debe establecerse a `1` en un cluster de exactamente 2 nodos?

</div>
<div class="flashcard-back">

**R:** b) `two_node: 1`. El parámetro `two_node: 1` en la sección `quorum` de corosync.conf permite que un cluster de 2 nodos funcione correctamente a pesar de no poder alcanzar quorum natural cuando un nodo falla. Se recomienda combinarlo con `wait_for_all: 1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de pcs autentica los nodos del cluster antes de configurarlo?

</div>
<div class="flashcard-back">

**R:** b) `pcs host auth nodo1 nodo2 -u hacluster -p password`. `pcs host auth` autentica los nodos del cluster usando el usuario `hacluster` (usuario por defecto de Pacemaker). Este paso es necesario antes de ejecutar `pcs cluster setup` para que los nodos puedan comunicarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de recurso Pacemaker ejecuta una instancia del recurso en todos los nodos del cluster simultáneamente?

</div>
<div class="flashcard-back">

**R:** c) clone. Un recurso `clone` se ejecuta en múltiples nodos simultáneamente. Se configura con parámetros como `clone-max` (máximo de instancias) y `clone-node-max` (máximo por nodo). Es útil para recursos como DLM o sistemas de archivos cluster.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué propiedad de Pacemaker define cuántos fallos de un recurso se toleran antes de migrarlo a otro nodo?

</div>
<div class="flashcard-back">

**R:** b) `migration-threshold`. `migration-threshold` define el número de fallos que Pacemaker tolera antes de mover un recurso a otro nodo. Por ejemplo, con `migration-threshold=3`, el recurso se migra después de 3 fallos. `failure-timeout` define la ventana de tiempo para el conteo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué dispositivo STONITH se utiliza cuando no se dispone de IPMI ni de gestión de hipervisor, pero se tiene acceso a un disco compartido?

</div>
<div class="flashcard-back">

**R:** c) `sbd` (STONITH Block Device). SBD utiliza un disco compartido (SAN, iSCSI) como mecanismo de fencing. Los nodos escriben mensajes de fencing en el disco y un watchdog local garantiza que el nodo afectado se reinicie. Es una alternativa cuando no hay IPMI ni gestión de hipervisor disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué transporte de comunicación es el predeterminado en Corosync moderno?

</div>
<div class="flashcard-back">

**R:** c) knet. `knet` (Kronosnet) es el transporte predeterminado en versiones modernas de Corosync (3.x). Soporta múltiples enlaces, cifrado integrado y compresión. Los transportes `udp` (multicast) y `udpu` (unicast) son alternativas más antiguas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando de pcs permite mover temporalmente un recurso a un nodo específico?

</div>
<div class="flashcard-back">

**R:** b) `pcs resource move VIP nodo2`. `pcs resource move` crea una restricción de location temporal con score `-INFINITY` para evitar el nodo actual, forzando al recurso a moverse. Es fundamental ejecutar `pcs resource clear VIP` después para eliminar la restricción temporal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-017">
<div class="flashcard-front">

**P:** ¿Qué sección de corosync.conf define los parámetros de cifrado de las comunicaciones del cluster?

</div>
<div class="flashcard-back">

**R:** c) `totem`. La sección `totem` contiene los parámetros de comunicación del cluster, incluyendo `crypto_cipher` (algoritmo de cifrado, ej: `aes256`) y `crypto_hash` (algoritmo de hash, ej: `sha256`), así como el tipo de transporte.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué ocurre con los recursos de un grupo Pacemaker si uno de ellos falla?

</div>
<div class="flashcard-back">

**R:** b) Todo el grupo se migra como unidad a otro nodo. Un grupo de recursos en Pacemaker se comporta como una unidad. Si un recurso del grupo falla y no puede recuperarse en el nodo actual, todos los recursos del grupo se detienen (en orden inverso) y se inician en otro nodo (en orden directo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué herramienta de línea de comandos es una alternativa a pcs para administrar clusters Pacemaker?

</div>
<div class="flashcard-back">

**R:** b) `crm`. La shell `crm` (también conocida como crmsh) es una alternativa a `pcs` para la administración de clusters Pacemaker. Proporciona una interfaz interactiva con comandos como `crm status`, `crm configure show` y `crm resource`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué restricción de Pacemaker define que un recurso VIP debe iniciarse ANTES que el recurso WebServer?

</div>
<div class="flashcard-back">

**R:** c) `pcs constraint order VIP then WebServer`. La restricción `order` define el orden de inicio de recursos. `VIP then WebServer` significa que VIP se inicia primero. Las restricciones de orden también afectan al apagado (en orden inverso). Se puede usar `kind=Optional` para orden no obligatorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando configura un cluster Pacemaker llamado "mi_cluster" con los nodos nodo1, nodo2 y nodo3?

</div>
<div class="flashcard-back">

**R:** pcs cluster setup mi_cluster nodo1 nodo2 nodo3. El comando `pcs cluster setup` genera la configuración de Corosync y prepara el cluster. Requiere que los nodos estén previamente autenticados con `pcs host auth`. El nombre del cluster y los nodos se pasan como argumentos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando inicia el cluster Pacemaker/Corosync en todos los nodos simultáneamente?

</div>
<div class="flashcard-back">

**R:** pcs cluster start --all. El comando `pcs cluster start --all` inicia los servicios de Corosync y Pacemaker en todos los nodos del cluster. Sin `--all`, solo inicia el cluster en el nodo local. `pcs cluster enable --all` habilita el inicio automático en el arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando limpia los errores de un recurso llamado "WebServer" en Pacemaker?

</div>
<div class="flashcard-back">

**R:** pcs resource cleanup WebServer. `pcs resource cleanup` resetea el contador de fallos de un recurso, permitiendo que Pacemaker vuelva a intentar ejecutarlo en el nodo actual. Es útil después de resolver la causa de un fallo cuando el recurso no se recupera automáticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando exporta la CIB completa del cluster a un archivo XML llamado "backup.xml"?

</div>
<div class="flashcard-back">

**R:** cibadmin --query > backup.xml. `cibadmin --query` (o `-Q`) exporta la CIB completa en formato XML a stdout. Redirigiendo a un archivo se crea un respaldo de la configuración que puede restaurarse con `cibadmin --replace --xml-file backup.xml`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando crea un recurso STONITH de tipo `fence_ipmilan` llamado "ipmi_nodo1" con la dirección IP 10.0.0.201?

</div>
<div class="flashcard-back">

**R:** pcs stonith create ipmi_nodo1 fence_ipmilan ipaddr=10.0.0.201. El comando `pcs stonith create` crea un dispositivo de fencing. Se especifica el nombre, el tipo de agente (`fence_ipmilan`) y los parámetros necesarios como `ipaddr`, `login`, `passwd`, `lanplus` y `pcmk_host_list`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Los parámetros clave de `totem` son `transport`, `crypto_cipher` y `crypto_hash`...

</div>
<div class="flashcard-back">

**R:** Los parámetros clave de `totem` son `transport`, `crypto_cipher` y `crypto_hash`. En clusters de 2 nodos, `two_node: 1` debe estar habilitado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los cuatro tipos: primitive, group, clone y promotable (antes master/slav...

</div>
<div class="flashcard-back">

**R:** Conoce los cuatro tipos: primitive, group, clone y promotable (antes master/slave). Un promotable es un clone especial donde una instancia puede ser "promovida".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Las tres restricciones son location, colocation y order. `INFINITY` significa ob...

</div>
<div class="flashcard-back">

**R:** Las tres restricciones son location, colocation y order. `INFINITY` significa obligatorio, valores menores son preferencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Los dispositivos STONITH más comunes son `fence_ipmilan` (servidores físicos con...

</div>
<div class="flashcard-back">

**R:** Los dispositivos STONITH más comunes son `fence_ipmilan` (servidores físicos con IPMI), `fence_xvm` (VMs libvirt) y `sbd` (disco compartido). STONITH debe estar siempre habilitado en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `pcs resource move` crea una restricción temporal de location. Siempre ejecuta `...

</div>
<div class="flashcard-back">

**R:** `pcs resource move` crea una restricción temporal de location. Siempre ejecuta `pcs resource clear` después para eliminarla, o el recurso nunca volverá al nodo original.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `ocf:heartbeat:Filesystem`?

</div>
<div class="flashcard-back">

**R:** Montaje de sistema de archivos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `ocf:pacemaker:controld`?

</div>
<div class="flashcard-back">

**R:** DLM (Distributed Lock Manager)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Un **cluster de failover** garantiza la continuidad del servicio trasladando automáticamente los recursos de un nodo fallido a otro nodo funcional. Pacemaker/Corosync es la solución estándar en Linux.

</div>
</div>

---

