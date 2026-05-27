---
title: "210.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.1"
---

# Flashcards: 210.1 - Configuracion Dhcp

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Las reservas con `fixed-address` se basan en la dirección MAC declarada con `har...

</div>
<div class="flashcard-back">

**R:** Las reservas con `fixed-address` se basan en la dirección MAC declarada con `hardware ethernet`. Es fundamental recordar la sintaxis exacta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: La ruta `/var/lib/dhcp/dhcpd.leases` es muy preguntada. Memoriza tanto la ubicac...

</div>
<div class="flashcard-back">

**R:** La ruta `/var/lib/dhcp/dhcpd.leases` es muy preguntada. Memoriza tanto la ubicación como la estructura del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conocer las diferencias de sintaxis entre DHCPv4 y DHCPv6 es importante. Recuerd...

</div>
<div class="flashcard-back">

**R:** Conocer las diferencias de sintaxis entre DHCPv4 y DHCPv6 es importante. Recuerda los puertos 546/547 y los prefijos `subnet6`, `range6` y `dhcp6.`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `dhcrelay` es esencial cuando clientes y servidor DHCP están en subredes distint...

</div>
<div class="flashcard-back">

**R:** `dhcrelay` es esencial cuando clientes y servidor DHCP están en subredes distintas. Recuerda que requiere indicar la interfaz y la IP del servidor DHCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `range`?

</div>
<div class="flashcard-back">

**R:** Rango de IPs a asignar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `option routers`?

</div>
<div class="flashcard-back">

**R:** Puerta de enlace predeterminada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `option domain-name-servers`?

</div>
<div class="flashcard-back">

**R:** Servidores DNS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `option subnet-mask`?

</div>
<div class="flashcard-back">

**R:** Máscara de subred

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-009">
<div class="flashcard-front">

**P:** Que es/son Conceptos fundamentales de DHCP?

</div>
<div class="flashcard-back">

**R:** DHCP (Dynamic Host Configuration Protocol) permite la asignación automática de direcciones IP y otros parámetros de red a los clientes. Funciona sobre UDP utilizando los puertos **67** (servidor) y **6

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Servidor ISC DHCP (dhcpd)?

</div>
<div class="flashcard-back">

**R:** El servidor DHCP más utilizado en Linux es el del Internet Systems Consortium (ISC). El demonio se llama `dhcpd` y su archivo de configuración principal es `/etc/dhcp/dhcpd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Archivo de configuración dhcpd.conf?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/dhcp/dhcpd.conf` contiene toda la configuración del servidor DHCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Reservas de dirección fija (fixed-address)?

</div>
<div class="flashcard-back">

**R:** Permiten asignar siempre la misma IP a un cliente identificado por su dirección MAC:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Archivo de concesiones (dhcpd.leases)?

</div>
<div class="flashcard-back">

**R:** El servidor DHCP registra todas las concesiones activas en el archivo `/var/lib/dhcp/dhcpd.leases`. Este archivo se actualiza automáticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son DHCPv6?

</div>
<div class="flashcard-back">

**R:** Para IPv6, el servidor DHCP utiliza el demonio `dhcpd6` con su propio archivo de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-015">
<div class="flashcard-front">

**P:** Que es/son DHCP Relay (dhcrelay)?

</div>
<div class="flashcard-back">

**R:** Cuando el servidor DHCP se encuentra en una red diferente a la de los clientes, se necesita un agente relay que reenvíe las peticiones DHCP entre subredes.

</div>
</div>

---

