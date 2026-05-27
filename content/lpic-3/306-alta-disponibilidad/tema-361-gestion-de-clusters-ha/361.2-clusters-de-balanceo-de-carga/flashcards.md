---
title: "361.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "361.2"
---

# Flashcards: 361.2 - Clusters De Balanceo De Carga

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: DR es el modo más eficiente y más usado en producción. En DR, los Real Servers n...

</div>
<div class="flashcard-back">

**R:** DR es el modo más eficiente y más usado en producción. En DR, los Real Servers necesitan la VIP en loopback con ARP suprimido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conoce al menos rr, wrr, lc, wlc, sh y dh. `wlc` es el predeterminado.

</div>
<div class="flashcard-back">

**R:** Conoce al menos rr, wrr, lc, wlc, sh y dh. `wlc` es el predeterminado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `virtual_router_id` debe ser único en la red. El nodo con mayor `priority` se co...

</div>
<div class="flashcard-back">

**R:** `virtual_router_id` debe ser único en la red. El nodo con mayor `priority` se convierte en MASTER. VRRP usa multicast 224.0.0.18.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la diferencia entre `mode http` (capa 7, puede inspeccionar HTTP) y `mode...

</div>
<div class="flashcard-back">

**R:** Conoce la diferencia entre `mode http` (capa 7, puede inspeccionar HTTP) y `mode tcp` (capa 4, solo reenvía TCP). Las ACLs solo funcionan en modo HTTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `rr`?

</div>
<div class="flashcard-back">

**R:** Distribución cíclica equitativa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `wrr`?

</div>
<div class="flashcard-back">

**R:** Round Robin con pesos por servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `lc`?

</div>
<div class="flashcard-back">

**R:** Envía al servidor con menos conexiones activas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `wlc`?

</div>
<div class="flashcard-back">

**R:** LC con pesos (predeterminado en IPVS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `sh`?

</div>
<div class="flashcard-back">

**R:** El mismo cliente siempre va al mismo servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción al Balanceo de Carga?

</div>
<div class="flashcard-back">

**R:** El **balanceo de carga** distribuye el tráfico de red entre múltiples servidores para mejorar el rendimiento, la disponibilidad y la escalabilidad. Existen balanceadores en capa 4 (transporte/TCP) y ca

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son LVS - Linux Virtual Server?

</div>
<div class="flashcard-back">

**R:** **LVS** es una solución de balanceo de carga integrada en el kernel de Linux a través del módulo **IPVS** (IP Virtual Server). Opera en capa 4 (TCP/UDP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son Algoritmos de Planificación (Scheduling)?

</div>
<div class="flashcard-back">

**R:** | Algoritmo | Sigla | Descripción |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son Keepalived?

</div>
<div class="flashcard-back">

**R:** **Keepalived** proporciona dos funcionalidades clave:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-014">
<div class="flashcard-front">

**P:** Que es/son HAProxy?

</div>
<div class="flashcard-back">

**R:** **HAProxy** es un balanceador de carga de alto rendimiento que opera en capa 4 (TCP) y capa 7 (HTTP).

</div>
</div>

---

