---
title: "364.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.4"
---

# Flashcards: 364.4 - Ha De Red

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El modo `1 (active-backup)` es el mas simple y no requiere configuracion del swi...

</div>
<div class="flashcard-back">

**R:** El modo `1 (active-backup)` es el mas simple y no requiere configuracion del switch. El modo `4 (802.3ad/LACP)` ofrece mayor rendimiento pero requiere soporte LACP en el switch.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `teamd` es la alternativa moderna a bonding. Los runners son equivalentes a los ...

</div>
<div class="flashcard-back">

**R:** `teamd` es la alternativa moderna a bonding. Los runners son equivalentes a los modos de bonding. `teamdctl` gestiona el team en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: VRRP usa multicast 224.0.0.18 y protocolo IP 112. El `virtual_router_id` debe se...

</div>
<div class="flashcard-back">

**R:** VRRP usa multicast 224.0.0.18 y protocolo IP 112. El `virtual_router_id` debe ser unico en la red. El nodo con mayor `priority` activa se convierte en MASTER.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `balance-rr`?

</div>
<div class="flashcard-back">

**R:** Round Robin: transmite por cada interfaz alternativamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `active-backup`?

</div>
<div class="flashcard-back">

**R:** Una interfaz activa, las demas en espera

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `balance-xor`?

</div>
<div class="flashcard-back">

**R:** Hash de MAC origen/destino para seleccionar interfaz

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `broadcast`?

</div>
<div class="flashcard-back">

**R:** Transmite en todas las interfaces

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `802.3ad`?

</div>
<div class="flashcard-back">

**R:** LACP (Link Aggregation Control Protocol)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-009">
<div class="flashcard-front">

**P:** Que es/son Network Bonding?

</div>
<div class="flashcard-back">

**R:** El **bonding** combina multiples interfaces de red fisicas en una interfaz logica para proporcionar redundancia y/o mayor ancho de banda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-010">
<div class="flashcard-front">

**P:** Que es/son Network Teaming?

</div>
<div class="flashcard-back">

**R:** El **teaming** es la alternativa moderna al bonding en Linux, usando el daemon `teamd` en espacio de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-011">
<div class="flashcard-front">

**P:** Que es/son VRRP con Keepalived?

</div>
<div class="flashcard-back">

**R:** **VRRP** (Virtual Router Redundancy Protocol) permite que multiples routers compartan una IP virtual, proporcionando redundancia del gateway.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-012">
<div class="flashcard-front">

**P:** Que es/son Multiples Gateways Predeterminados?

</div>
<div class="flashcard-back">

**R:** Para tener redundancia de salida a Internet con multiples ISPs:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-013">
<div class="flashcard-front">

**P:** Que es/son Network Namespace Failover?

</div>
<div class="flashcard-back">

**R:** Los **network namespaces** permiten aislar pilas de red completas, util para failover de servicios:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-014">
<div class="flashcard-front">

**P:** Que es/son Comparativa Bonding vs Teaming?

</div>
<div class="flashcard-back">

**R:** | Aspecto | Bonding | Teaming |

</div>
</div>

---

