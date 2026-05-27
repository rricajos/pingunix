---
title: "334.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "334.1"
---

# Flashcards: 334.1 - Hardening De Red

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los parametros sysctl de red mas importantes, la diferencia entre nftable...

</div>
<div class="flashcard-back">

**R:** Conoce los parametros sysctl de red mas importantes, la diferencia entre nftables e iptables, y los TCP wrappers. Entiende la segmentacion de red y el aislamiento con namespaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `rp_filter=1` (strict mode) verifica que la ruta de retorno del paquete use la m...

</div>
<div class="flashcard-back">

**R:** `rp_filter=1` (strict mode) verifica que la ruta de retorno del paquete use la misma interfaz por la que llego. `rp_filter=2` (loose mode) solo verifica que exista alguna ruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: TCP Wrappers solo funciona con servicios compilados con soporte libwrap. Servici...

</div>
<div class="flashcard-back">

**R:** TCP Wrappers solo funciona con servicios compilados con soporte libwrap. Servicios modernos como Apache y Nginx NO lo usan. SSH (sshd) si lo soporta tipicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `rp_filter`?

</div>
<div class="flashcard-back">

**R:** 1

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `tcp_syncookies`?

</div>
<div class="flashcard-back">

**R:** 1

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `icmp_echo_ignore_broadcasts`?

</div>
<div class="flashcard-back">

**R:** 1

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `accept_redirects`?

</div>
<div class="flashcard-back">

**R:** 0

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `send_redirects`?

</div>
<div class="flashcard-back">

**R:** 0

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El hardening de red implica configurar el stack de red del sistema para minimizar la superficie de ataque. Incluye la configuracion de firewalls (nftables/iptables), parametros del kernel para red, TCP

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son nftables - Fundamentos?

</div>
<div class="flashcard-back">

**R:** nftables es el sucesor de iptables y es el framework de filtrado de paquetes recomendado en Linux moderno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son TCP Wrappers?

</div>
<div class="flashcard-back">

**R:** TCP Wrappers proporciona control de acceso basado en host para servicios que usan la biblioteca `libwrap`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Deshabilitacion de IPv6?

</div>
<div class="flashcard-back">

**R:** Si IPv6 no se utiliza, debe deshabilitarse para reducir la superficie de ataque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Network Namespace Isolation?

</div>
<div class="flashcard-back">

**R:** Los namespaces de red proporcionan aislamiento completo del stack de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son Segmentacion de Red?

</div>
<div class="flashcard-back">

**R:** La segmentacion divide la red en zonas con diferentes niveles de confianza:

</div>
</div>

---

