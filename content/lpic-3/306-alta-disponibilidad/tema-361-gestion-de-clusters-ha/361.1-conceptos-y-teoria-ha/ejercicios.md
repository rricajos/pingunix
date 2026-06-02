---
title: "361.1 - Ejercicios: Conceptos y Teoría HA"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.1"
peso: 5
tags:
  - lpic-3
  - tema-361
  - ejercicios
  - alta-disponibilidad
---

# 361.1 - Ejercicios: Conceptos y Teoría HA

### Pregunta 1
¿Cuánto tiempo de inactividad máximo al año permite una disponibilidad de 99.99%?

a) 8.76 horas
b) 52.6 minutos
c) 5.26 minutos
d) 31.5 segundos

<details><summary>Respuesta</summary>

**b) 52.6 minutos**

99.99% (cuatro nueves) permite aproximadamente 52.6 minutos de inactividad al año. 99.9% = 8.76 horas, 99.999% = 5.26 minutos y 99.9999% = 31.5 segundos.
</details>

### Pregunta 2
¿Qué componente de la arquitectura Pacemaker/Corosync se encarga de la comunicación entre nodos y la gestión de membresía?

a) Pacemaker
b) CIB
c) Corosync
d) LRMd

<details><summary>Respuesta</summary>

**c) Corosync**

Corosync es la capa de mensajería que gestiona la comunicación entre nodos, la membresía del cluster y el quorum. Pacemaker se encarga de la gestión de recursos.
</details>

### Pregunta 3
En un cluster de 5 nodos, ¿cuántos nodos deben estar activos para mantener el quorum?

a) 2
b) 3
c) 4
d) 5

<details><summary>Respuesta</summary>

**b) 3**

El quorum requiere (N+1)/2 nodos para N impar. Con 5 nodos: (5+1)/2 = 3. Esto permite tolerar el fallo de hasta 2 nodos.
</details>

### Pregunta 4
¿Qué es STONITH?

a) Un protocolo de comunicación entre nodos del cluster
b) Un mecanismo para apagar o reiniciar físicamente un nodo defectuoso
c) Un algoritmo de balanceo de carga
d) Un tipo de sistema de archivos cluster

<details><summary>Respuesta</summary>

**b) Un mecanismo para apagar o reiniciar físicamente un nodo defectuoso**

STONITH (Shoot The Other Node In The Head) es un mecanismo de fencing que garantiza que un nodo problemático sea eliminado físicamente del cluster para evitar corrupción de datos.
</details>

### Pregunta 5
¿Cuál es la principal consecuencia de un split-brain en un cluster?

a) Mejora del rendimiento
b) Corrupción de datos en almacenamiento compartido
c) Aumento de la disponibilidad
d) Reducción del consumo de recursos

<details><summary>Respuesta</summary>

**b) Corrupción de datos en almacenamiento compartido**

El split-brain ocurre cuando los nodos pierden comunicación y ambos creen ser el primario. Si ambos escriben simultáneamente en almacenamiento compartido, se produce corrupción de datos.
</details>

### Pregunta 6
¿Qué almacena el CIB (Cluster Information Base)?

a) Los logs del cluster
b) La configuración completa del cluster en formato XML
c) Las estadísticas de rendimiento
d) Las credenciales de los nodos

<details><summary>Respuesta</summary>

**b) La configuración completa del cluster en formato XML**

El CIB es una base de datos XML que contiene la configuración del cluster, incluyendo nodos, recursos, restricciones y propiedades. Se replica automáticamente entre todos los nodos.
</details>

### Pregunta 7
¿Qué valor de `no-quorum-policy` detiene todos los recursos cuando se pierde el quorum?

a) `freeze`
b) `ignore`
c) `stop`
d) `suicide`

<details><summary>Respuesta</summary>

**c) `stop`**

`stop` es el valor predeterminado y detiene todos los recursos. `freeze` mantiene los activos pero no inicia nuevos. `ignore` ignora la pérdida de quorum. `suicide` apaga el nodo.
</details>

### Pregunta 8
¿Cuál es la clase de agente de recurso más completa y recomendada en Pacemaker?

a) LSB
b) systemd
c) OCF
d) service

<details><summary>Respuesta</summary>

**c) OCF**

Los agentes OCF (Open Cluster Framework) son los más completos, soportando operaciones como start, stop, monitor, promote, demote y migrate. Se encuentran en `/usr/lib/ocf/resource.d/`.
</details>

### Pregunta 9
Un sistema tiene un MTBF de 1000 horas y un MTTR de 1 hora. ¿Cuál es su disponibilidad aproximada?

a) 99%
b) 99.9%
c) 99.99%
d) 99.999%

<details><summary>Respuesta</summary>

**b) 99.9%**

Disponibilidad = MTBF / (MTBF + MTTR) = 1000 / (1000 + 1) = 1000 / 1001 ≈ 0.999 = 99.9%.
</details>

### Pregunta 10
¿Qué mecanismo adicional se necesita en un cluster de exactamente 2 nodos para resolver el problema de quorum?

a) Un tercer anillo de Corosync
b) Un quorum disk o quorum device
c) Desactivar el fencing
d) Configurar modo activo/activo

<details><summary>Respuesta</summary>

**b) Un quorum disk o quorum device**

Con 2 nodos, ningún nodo tiene mayoría si el otro falla o si se pierde la comunicación. Un quorum disk o quorum device actúa como "tercer voto" para desempatar. Alternativamente se puede configurar `two_node: 1` en Corosync junto con `wait_for_all`.
</details>

### Pregunta 11

¿Qué componente de Pacemaker calcula el estado deseado del cluster y decide qué acciones realizar?

a) CIB (Cluster Information Base)
b) PE (Policy Engine)
c) LRMd (Local Resource Manager daemon)
d) STONITHd

<details><summary>Respuesta</summary>

**b) PE (Policy Engine)**

El Policy Engine (PE) evalúa el estado actual del cluster (almacenado en la CIB) y calcula la transición necesaria para alcanzar el estado deseado. Genera un grafo de acciones que el CRMd coordina y el LRMd ejecuta localmente.
</details>

### Pregunta 12

¿Cuál es la principal diferencia entre un modelo de cluster activo/pasivo y activo/activo?

a) El activo/pasivo requiere más nodos
b) En el activo/activo ambos nodos procesan peticiones simultáneamente
c) El activo/pasivo es más complejo de configurar
d) El activo/activo no necesita almacenamiento compartido

<details><summary>Respuesta</summary>

**b) En el activo/activo ambos nodos procesan peticiones simultáneamente**

En el modelo activo/activo, todos los nodos procesan peticiones, aprovechando mejor los recursos. El activo/pasivo mantiene un nodo en espera. El activo/activo es más complejo y requiere sistemas de archivos cluster o almacenamiento compartido para escrituras concurrentes.
</details>

### Pregunta 13

¿Qué protocolo utiliza Corosync para garantizar el orden de mensajes entre los nodos del cluster?

a) VRRP
b) Totem (Single Ring Ordering)
c) Raft
d) Paxos

<details><summary>Respuesta</summary>

**b) Totem (Single Ring Ordering)**

Corosync utiliza el protocolo Totem con Single Ring Ordering para garantizar que los mensajes se entregan a todos los nodos en el mismo orden. Esto es fundamental para mantener la coherencia del estado del cluster.
</details>

### Pregunta 14

Un sistema tiene un MTBF de 500 horas y un MTTR de 0.5 horas. ¿Cuál es su disponibilidad aproximada?

a) 99%
b) 99.5%
c) 99.9%
d) 99.99%

<details><summary>Respuesta</summary>

**c) 99.9%**

Disponibilidad = MTBF / (MTBF + MTTR) = 500 / (500 + 0.5) = 500 / 500.5 ≈ 0.999 = 99.9%. Un MTBF alto combinado con un MTTR bajo resulta en alta disponibilidad.
</details>

### Pregunta 15

¿Cuánto tiempo de inactividad máximo al año permite una disponibilidad de 99.999% (cinco nueves)?

a) 52.6 minutos
b) 8.76 horas
c) 5.26 minutos
d) 31.5 segundos

<details><summary>Respuesta</summary>

**c) 5.26 minutos**

Cinco nueves (99.999%) permite solo 5.26 minutos de inactividad al año. Este nivel de disponibilidad se considera el estándar más exigente y requiere redundancia completa, failover automático y tiempos de recuperación extremadamente rápidos.
</details>

### Pregunta 16

¿Qué valor de `no-quorum-policy` mantiene los recursos activos pero impide iniciar nuevos cuando se pierde el quorum?

a) `stop`
b) `freeze`
c) `ignore`
d) `suicide`

<details><summary>Respuesta</summary>

**b) `freeze`**

La política `freeze` mantiene los recursos que ya están activos pero no permite iniciar nuevos ni mover los existentes. `stop` detiene todo, `ignore` ignora la pérdida de quorum, y `suicide` apaga los nodos que no tienen quorum.
</details>

### Pregunta 17

¿En qué directorio se encuentran los agentes de recursos OCF en un sistema Linux?

a) `/etc/ocf/agents/`
b) `/usr/lib/ocf/resource.d/`
c) `/var/lib/pacemaker/ocf/`
d) `/opt/ocf/resources/`

<details><summary>Respuesta</summary>

**b) `/usr/lib/ocf/resource.d/`**

Los agentes OCF se ubican en `/usr/lib/ocf/resource.d/` organizados por proveedor. Por ejemplo, `/usr/lib/ocf/resource.d/heartbeat/IPaddr2` es el agente de IP virtual del proveedor heartbeat.
</details>

### Pregunta 18

¿Qué tipo de fencing opera a nivel de recurso bloqueando el acceso del nodo al almacenamiento en lugar de apagar el nodo completo?

a) STONITH
b) SAN zoning / fencing de recurso
c) Watchdog timer
d) Network partition

<details><summary>Respuesta</summary>

**b) SAN zoning / fencing de recurso**

El fencing a nivel de recurso bloquea el acceso del nodo a recursos específicos (por ejemplo, mediante SAN zoning o reservas SCSI). A diferencia de STONITH que apaga todo el nodo, el fencing de recurso es más granular pero menos determinista.
</details>

### Pregunta 19

En un cluster de 7 nodos, ¿cuántos fallos simultáneos puede tolerar sin perder el quorum?

a) 2
b) 3
c) 4
d) 5

<details><summary>Respuesta</summary>

**b) 3**

Con 7 nodos, el quorum requiere (7+1)/2 = 4 nodos. Por lo tanto, el cluster puede tolerar la pérdida de 3 nodos (7 - 4 = 3) sin perder el quorum.
</details>

### Pregunta 20

¿Qué componente de Pacemaker ejecuta las operaciones de start, stop y monitor de los recursos en el nodo local?

a) CRMd (Cluster Resource Manager daemon)
b) PE (Policy Engine)
c) LRMd (Local Resource Manager daemon)
d) CIB (Cluster Information Base)

<details><summary>Respuesta</summary>

**c) LRMd (Local Resource Manager daemon)**

El LRMd es el daemon que ejecuta las operaciones de los resource agents en el nodo local. Recibe instrucciones del CRMd y las ejecuta llamando a los agentes de recursos apropiados (start, stop, monitor, etc.).
</details>

### Pregunta 21

¿Qué comando lista los agentes de recursos OCF disponibles del proveedor heartbeat en un cluster Pacemaker?

<input type="text" class="fill-blank" data-answer="pcs resource agents ocf:heartbeat" data-alt="pcs resource agents ocf" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs resource agents ocf:heartbeat**

El comando `pcs resource agents ocf:heartbeat` muestra todos los agentes OCF disponibles del proveedor heartbeat. Sin especificar proveedor, `pcs resource agents` muestra agentes de todas las clases.
</details>

### Pregunta 22

¿Qué comando muestra la descripción y los parámetros del agente de recurso `ocf:heartbeat:IPaddr2`?

<input type="text" class="fill-blank" data-answer="pcs resource describe ocf:heartbeat:IPaddr2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs resource describe ocf:heartbeat:IPaddr2**

El comando `pcs resource describe` muestra la documentación completa de un agente de recurso, incluyendo sus parámetros obligatorios y opcionales, valores predeterminados y las operaciones soportadas.
</details>

### Pregunta 23

¿Cuál es la fórmula correcta para calcular la disponibilidad de un sistema a partir del MTBF y el MTTR?

<input type="text" class="fill-blank" data-answer="MTBF / (MTBF + MTTR)" data-alt="MTBF/(MTBF+MTTR)" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**MTBF / (MTBF + MTTR)**

La disponibilidad se calcula dividiendo el tiempo medio entre fallos (MTBF) entre la suma del MTBF y el tiempo medio de reparación (MTTR). El resultado se multiplica por 100 para obtener el porcentaje.
</details>

### Pregunta 24

¿Qué comando muestra el estado completo de un cluster Pacemaker incluyendo nodos, recursos y restricciones?

<input type="text" class="fill-blank" data-answer="pcs status" data-alt="crm status,crm_mon" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs status**

El comando `pcs status` muestra un resumen completo del cluster: estado de los nodos, recursos activos, restricciones y errores. Equivale a `crm status` en la shell crm o a `crm_mon` para monitorización continua.
</details>

### Pregunta 25

¿Qué comando configura la propiedad de STONITH como habilitada en un cluster Pacemaker?

<input type="text" class="fill-blank" data-answer="pcs property set stonith-enabled=true" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs property set stonith-enabled=true**

El comando `pcs property set stonith-enabled=true` activa STONITH en el cluster. STONITH es obligatorio en entornos de producción para garantizar la integridad de los datos. Sin STONITH habilitado, Pacemaker no puede evitar la corrupción por split-brain.
</details>
