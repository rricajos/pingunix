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

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="361.1">
</div>

<div class="flashcard" data-id="361.1-fc-001">
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

<div class="flashcard" data-id="361.1-fc-002">
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

<div class="flashcard" data-id="361.1-fc-003">
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

<div class="flashcard" data-id="361.1-fc-004">
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

<div class="flashcard" data-id="361.1-fc-005">
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

<div class="flashcard" data-id="361.1-fc-006">
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

<div class="flashcard" data-id="361.1-fc-007">
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

<div class="flashcard" data-id="361.1-fc-008">
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

<div class="flashcard" data-id="361.1-fc-009">
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

<div class="flashcard" data-id="361.1-fc-010">
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

<div class="flashcard" data-id="361.1-fc-011">
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

<div class="flashcard" data-id="361.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Heartbeat y Comunicación?

</div>
<div class="flashcard-back">

**R:** El **heartbeat** es el mecanismo de latido que permite a los nodos confirmar que están activos:

</div>
</div>

---

