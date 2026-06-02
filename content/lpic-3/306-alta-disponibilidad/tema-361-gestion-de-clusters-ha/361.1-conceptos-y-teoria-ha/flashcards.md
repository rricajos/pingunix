---
title: "361.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "361.1"
---

# Flashcards: 361.1 - Conceptos Y Teoria Ha

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cuánto tiempo de inactividad máximo al año permite una disponibilidad de 99.99%?

</div>
<div class="flashcard-back">

**R:** b) 52.6 minutos. 99.99% (cuatro nueves) permite aproximadamente 52.6 minutos de inactividad al año. 99.9% = 8.76 horas, 99.999% = 5.26 minutos y 99.9999% = 31.5 segundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué componente de la arquitectura Pacemaker/Corosync se encarga de la comunicación entre nodos y la gestión de membresía?

</div>
<div class="flashcard-back">

**R:** c) Corosync. Corosync es la capa de mensajería que gestiona la comunicación entre nodos, la membresía del cluster y el quorum. Pacemaker se encarga de la gestión de recursos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-003">
<div class="flashcard-front">

**P:** En un cluster de 5 nodos, ¿cuántos nodos deben estar activos para mantener el quorum?

</div>
<div class="flashcard-back">

**R:** b) 3. El quorum requiere (N+1)/2 nodos para N impar. Con 5 nodos: (5+1)/2 = 3. Esto permite tolerar el fallo de hasta 2 nodos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué es STONITH?

</div>
<div class="flashcard-back">

**R:** b) Un mecanismo para apagar o reiniciar físicamente un nodo defectuoso. STONITH (Shoot The Other Node In The Head) es un mecanismo de fencing que garantiza que un nodo problemático sea eliminado físicamente del cluster para evitar corrupción de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la principal consecuencia de un split-brain en un cluster?

</div>
<div class="flashcard-back">

**R:** b) Corrupción de datos en almacenamiento compartido. El split-brain ocurre cuando los nodos pierden comunicación y ambos creen ser el primario. Si ambos escriben simultáneamente en almacenamiento compartido, se produce corrupción de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué almacena el CIB (Cluster Information Base)?

</div>
<div class="flashcard-back">

**R:** b) La configuración completa del cluster en formato XML. El CIB es una base de datos XML que contiene la configuración del cluster, incluyendo nodos, recursos, restricciones y propiedades. Se replica automáticamente entre todos los nodos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué valor de `no-quorum-policy` detiene todos los recursos cuando se pierde el quorum?

</div>
<div class="flashcard-back">

**R:** c) `stop`. `stop` es el valor predeterminado y detiene todos los recursos. `freeze` mantiene los activos pero no inicia nuevos. `ignore` ignora la pérdida de quorum. `suicide` apaga el nodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es la clase de agente de recurso más completa y recomendada en Pacemaker?

</div>
<div class="flashcard-back">

**R:** c) OCF. Los agentes OCF (Open Cluster Framework) son los más completos, soportando operaciones como start, stop, monitor, promote, demote y migrate. Se encuentran en `/usr/lib/ocf/resource.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-009">
<div class="flashcard-front">

**P:** Un sistema tiene un MTBF de 1000 horas y un MTTR de 1 hora. ¿Cuál es su disponibilidad aproximada?

</div>
<div class="flashcard-back">

**R:** b) 99.9%. Disponibilidad = MTBF / (MTBF + MTTR) = 1000 / (1000 + 1) = 1000 / 1001 ≈ 0.999 = 99.9%.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué mecanismo adicional se necesita en un cluster de exactamente 2 nodos para resolver el problema de quorum?

</div>
<div class="flashcard-back">

**R:** b) Un quorum disk o quorum device. Con 2 nodos, ningún nodo tiene mayoría si el otro falla o si se pierde la comunicación. Un quorum disk o quorum device actúa como "tercer voto" para desempatar. Alternativamente se puede configurar `two_node: 1` en Corosync junto con `wait_for_all`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué componente de Pacemaker calcula el estado deseado del cluster y decide qué acciones realizar?

</div>
<div class="flashcard-back">

**R:** b) PE (Policy Engine). El Policy Engine (PE) evalúa el estado actual del cluster (almacenado en la CIB) y calcula la transición necesaria para alcanzar el estado deseado. Genera un grafo de acciones que el CRMd coordina y el LRMd ejecuta localmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-012">
<div class="flashcard-front">

**P:** ¿Cuál es la principal diferencia entre un modelo de cluster activo/pasivo y activo/activo?

</div>
<div class="flashcard-back">

**R:** b) En el activo/activo ambos nodos procesan peticiones simultáneamente. En el modelo activo/activo, todos los nodos procesan peticiones, aprovechando mejor los recursos. El activo/pasivo mantiene un nodo en espera. El activo/activo es más complejo y requiere sistemas de archivos cluster o almacenamiento compartido para escrituras concurrentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué protocolo utiliza Corosync para garantizar el orden de mensajes entre los nodos del cluster?

</div>
<div class="flashcard-back">

**R:** b) Totem (Single Ring Ordering). Corosync utiliza el protocolo Totem con Single Ring Ordering para garantizar que los mensajes se entregan a todos los nodos en el mismo orden. Esto es fundamental para mantener la coherencia del estado del cluster.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-014">
<div class="flashcard-front">

**P:** Un sistema tiene un MTBF de 500 horas y un MTTR de 0.5 horas. ¿Cuál es su disponibilidad aproximada?

</div>
<div class="flashcard-back">

**R:** c) 99.9%. Disponibilidad = MTBF / (MTBF + MTTR) = 500 / (500 + 0.5) = 500 / 500.5 ≈ 0.999 = 99.9%. Un MTBF alto combinado con un MTTR bajo resulta en alta disponibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-015">
<div class="flashcard-front">

**P:** ¿Cuánto tiempo de inactividad máximo al año permite una disponibilidad de 99.999% (cinco nueves)?

</div>
<div class="flashcard-back">

**R:** c) 5.26 minutos. Cinco nueves (99.999%) permite solo 5.26 minutos de inactividad al año. Este nivel de disponibilidad se considera el estándar más exigente y requiere redundancia completa, failover automático y tiempos de recuperación extremadamente rápidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué valor de `no-quorum-policy` mantiene los recursos activos pero impide iniciar nuevos cuando se pierde el quorum?

</div>
<div class="flashcard-back">

**R:** b) `freeze`. La política `freeze` mantiene los recursos que ya están activos pero no permite iniciar nuevos ni mover los existentes. `stop` detiene todo, `ignore` ignora la pérdida de quorum, y `suicide` apaga los nodos que no tienen quorum.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-017">
<div class="flashcard-front">

**P:** ¿En qué directorio se encuentran los agentes de recursos OCF en un sistema Linux?

</div>
<div class="flashcard-back">

**R:** b) `/usr/lib/ocf/resource.d/`. Los agentes OCF se ubican en `/usr/lib/ocf/resource.d/` organizados por proveedor. Por ejemplo, `/usr/lib/ocf/resource.d/heartbeat/IPaddr2` es el agente de IP virtual del proveedor heartbeat.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué tipo de fencing opera a nivel de recurso bloqueando el acceso del nodo al almacenamiento en lugar de apagar el nodo completo?

</div>
<div class="flashcard-back">

**R:** b) SAN zoning / fencing de recurso. El fencing a nivel de recurso bloquea el acceso del nodo a recursos específicos (por ejemplo, mediante SAN zoning o reservas SCSI). A diferencia de STONITH que apaga todo el nodo, el fencing de recurso es más granular pero menos determinista.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-019">
<div class="flashcard-front">

**P:** En un cluster de 7 nodos, ¿cuántos fallos simultáneos puede tolerar sin perder el quorum?

</div>
<div class="flashcard-back">

**R:** b) 3. Con 7 nodos, el quorum requiere (7+1)/2 = 4 nodos. Por lo tanto, el cluster puede tolerar la pérdida de 3 nodos (7 - 4 = 3) sin perder el quorum.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué componente de Pacemaker ejecuta las operaciones de start, stop y monitor de los recursos en el nodo local?

</div>
<div class="flashcard-back">

**R:** c) LRMd (Local Resource Manager daemon). El LRMd es el daemon que ejecuta las operaciones de los resource agents en el nodo local. Recibe instrucciones del CRMd y las ejecuta llamando a los agentes de recursos apropiados (start, stop, monitor, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando lista los agentes de recursos OCF disponibles del proveedor heartbeat en un cluster Pacemaker?

</div>
<div class="flashcard-back">

**R:** pcs resource agents ocf:heartbeat. El comando `pcs resource agents ocf:heartbeat` muestra todos los agentes OCF disponibles del proveedor heartbeat. Sin especificar proveedor, `pcs resource agents` muestra agentes de todas las clases.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la descripción y los parámetros del agente de recurso `ocf:heartbeat:IPaddr2`?

</div>
<div class="flashcard-back">

**R:** pcs resource describe ocf:heartbeat:IPaddr2. El comando `pcs resource describe` muestra la documentación completa de un agente de recurso, incluyendo sus parámetros obligatorios y opcionales, valores predeterminados y las operaciones soportadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-023">
<div class="flashcard-front">

**P:** ¿Cuál es la fórmula correcta para calcular la disponibilidad de un sistema a partir del MTBF y el MTTR?

</div>
<div class="flashcard-back">

**R:** MTBF / (MTBF + MTTR). La disponibilidad se calcula dividiendo el tiempo medio entre fallos (MTBF) entre la suma del MTBF y el tiempo medio de reparación (MTTR). El resultado se multiplica por 100 para obtener el porcentaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando muestra el estado completo de un cluster Pacemaker incluyendo nodos, recursos y restricciones?

</div>
<div class="flashcard-back">

**R:** pcs status. El comando `pcs status` muestra un resumen completo del cluster: estado de los nodos, recursos activos, restricciones y errores. Equivale a `crm status` en la shell crm o a `crm_mon` para monitorización continua.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando configura la propiedad de STONITH como habilitada en un cluster Pacemaker?

</div>
<div class="flashcard-back">

**R:** pcs property set stonith-enabled=true. El comando `pcs property set stonith-enabled=true` activa STONITH en el cluster. STONITH es obligatorio en entornos de producción para garantizar la integridad de los datos. Sin STONITH habilitado, Pacemaker no puede evitar la corrupción por split-brain.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Memoriza los valores de 99.9% (8.76 h/año), 99.99% (52.6 min/año) y 99.999% (5.2...

</div>
<div class="flashcard-back">

**R:** Memoriza los valores de 99.9% (8.76 h/año), 99.99% (52.6 min/año) y 99.999% (5.26 min/año). Son los más preguntados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Identifica siempre los SPOF en un diagrama de arquitectura. La eliminación de SP...

</div>
<div class="flashcard-back">

**R:** Identifica siempre los SPOF en un diagrama de arquitectura. La eliminación de SPOF es el principio fundamental del diseño HA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre activo/pasivo y activo/activo, y cuándo usar cada m...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre activo/pasivo y activo/activo, y cuándo usar cada modelo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: STONITH es **obligatorio** en un cluster Pacemaker en producción. Sin STONITH, e...

</div>
<div class="flashcard-back">

**R:** STONITH es **obligatorio** en un cluster Pacemaker en producción. Sin STONITH, el cluster no puede garantizar la integridad de los datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Un cluster de 2 nodos no tiene quorum natural. Necesita un mecanismo adicional c...

</div>
<div class="flashcard-back">

**R:** Un cluster de 2 nodos no tiene quorum natural. Necesita un mecanismo adicional como quorum disk, quorum device o configuración `two_node: 1` en Corosync.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Los agentes OCF son los más importantes. Soportan operaciones de start, stop, mo...

</div>
<div class="flashcard-back">

**R:** Los agentes OCF son los más importantes. Soportan operaciones de start, stop, monitor, promote, demote, migrate_to y migrate_from.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introducción a la Alta Disponibilidad?

</div>
<div class="flashcard-back">

**R:** La **Alta Disponibilidad (HA)** es la capacidad de un sistema para permanecer operativo y accesible durante un período de tiempo determinado, minimizando el tiempo de inactividad no planificado. En ent

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son SPOF - Single Point of Failure?

</div>
<div class="flashcard-back">

**R:** Un **SPOF** es cualquier componente cuyo fallo provoca la caída completa del servicio. El objetivo principal de HA es eliminar todos los SPOF del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son El Problema del Split-Brain?

</div>
<div class="flashcard-back">

**R:** El **split-brain** ocurre cuando los nodos de un cluster pierden la comunicación entre sí pero siguen funcionando. Cada nodo cree que el otro ha fallado y ambos intentan tomar el control de los recurso

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Quorum?

</div>
<div class="flashcard-back">

**R:** El **quorum** es el mecanismo de votación que determina qué partición del cluster tiene derecho a seguir operando. Evita el split-brain asegurando que solo la partición mayoritaria continúe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Resource Agents (Agentes de Recursos)?

</div>
<div class="flashcard-back">

**R:** Los **Resource Agents** son scripts que Pacemaker usa para gestionar recursos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Heartbeat y Comunicación?

</div>
<div class="flashcard-back">

**R:** El **heartbeat** es el mecanismo de latido que permite a los nodos confirmar que están activos:

</div>
</div>

---

