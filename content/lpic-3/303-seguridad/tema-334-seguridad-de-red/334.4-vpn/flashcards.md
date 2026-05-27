---
title: "334.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "334.4"
---

# Flashcards: 334.4 - Vpn

> 8 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre IPsec, OpenVPN y WireGuard. Domina la configuracion...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre IPsec, OpenVPN y WireGuard. Domina la configuracion basica de cada uno, los modos de IPsec (tunnel vs transport), y la generacion de claves de WireGuard.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los parametros `left` (local) y `right` (remoto) en ipsec.conf. `leftsubn...

</div>
<div class="flashcard-back">

**R:** Conoce los parametros `left` (local) y `right` (remoto) en ipsec.conf. `leftsubnet`/`rightsubnet` definen las redes protegidas. `authby=secret` usa PSK, `authby=rsasig` usa certificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: WireGuard usa UDP exclusivamente (por defecto puerto 51820). `AllowedIPs` funcio...

</div>
<div class="flashcard-back">

**R:** WireGuard usa UDP exclusivamente (por defecto puerto 51820). `AllowedIPs` funciona como tabla de enrutamiento Y ACL: define que IPs se enrutan por el tunel y que IPs se aceptan del peer.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-004">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Las VPN crean tuneles cifrados sobre redes publicas, permitiendo comunicacion segura entre redes o hosts remotos. Las principales tecnologias VPN en Linux son IPsec (strongSwan/Libreswan), OpenVPN y Wi

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-005">
<div class="flashcard-front">

**P:** Que es/son IPsec?

</div>
<div class="flashcard-back">

**R:** IPsec opera en la capa de red (capa 3) y es un estandar IETF para comunicacion segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-006">
<div class="flashcard-front">

**P:** Que es/son OpenVPN?

</div>
<div class="flashcard-back">

**R:** OpenVPN opera en espacio de usuario sobre TLS/SSL, usando la capa de transporte (TCP/UDP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-007">
<div class="flashcard-front">

**P:** Que es/son WireGuard?

</div>
<div class="flashcard-back">

**R:** WireGuard es un protocolo VPN moderno, simple y de alto rendimiento integrado en el kernel Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-008">
<div class="flashcard-front">

**P:** Que es/son Comparacion de Tecnologias VPN?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | IPsec | OpenVPN | WireGuard |

</div>
</div>

---

