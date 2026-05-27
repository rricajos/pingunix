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

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-001">
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

<div class="flashcard" data-id="361.3-fc-002">
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

<div class="flashcard" data-id="361.3-fc-003">
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

<div class="flashcard" data-id="361.3-fc-004">
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

<div class="flashcard" data-id="361.3-fc-005">
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

<div class="flashcard" data-id="361.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `ocf:proveedor:agente`?

</div>
<div class="flashcard-back">

**R:** `ocf:heartbeat:IPaddr2`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `systemd:servicio`?

</div>
<div class="flashcard-back">

**R:** `systemd:httpd`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `lsb:script`?

</div>
<div class="flashcard-back">

**R:** `lsb:httpd`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `service:nombre`?

</div>
<div class="flashcard-back">

**R:** `service:httpd`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `stonith:agente`?

</div>
<div class="flashcard-back">

**R:** `stonith:fence_ipmilan`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.3">
</div>

<div class="flashcard" data-id="361.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Un **cluster de failover** garantiza la continuidad del servicio trasladando automáticamente los recursos de un nodo fallido a otro nodo funcional. Pacemaker/Corosync es la solución estándar en Linux.

</div>
</div>

---

