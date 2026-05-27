---
title: "207.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "207.1"
---

# Flashcards: 207.1 - Configuracion Basica Dns

> 10 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las directivas principales del bloque `options`, especialmente `forwarder...

</div>
<div class="flashcard-back">

**R:** Conoce las directivas principales del bloque `options`, especialmente `forwarders`, `recursion`, `allow-query`, `allow-transfer` y `listen-on`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Entiende la diferencia entre los tipos de zona. La zona `hint` es obligatoria pa...

</div>
<div class="flashcard-back">

**R:** Entiende la diferencia entre los tipos de zona. La zona `hint` es obligatoria para que el servidor pueda resolver consultas de forma recursiva comenzando desde la raiz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Las ACLs deben definirse ANTES de ser referenciadas en la configuracion. Conoce ...

</div>
<div class="flashcard-back">

**R:** Las ACLs deben definirse ANTES de ser referenciadas en la configuracion. Conoce las ACLs predefinidas, especialmente `any`, `none`, `localhost` y `localnets`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Siempre ejecuta `named-checkconf` y `named-checkzone` antes de recargar BIND. Un...

</div>
<div class="flashcard-back">

**R:** Siempre ejecuta `named-checkconf` y `named-checkzone` antes de recargar BIND. Un error de sintaxis puede impedir que el servidor arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: `dig` es la herramienta principal de diagnostico DNS. Conoce las opciones `+shor...

</div>
<div class="flashcard-back">

**R:** `dig` es la herramienta principal de diagnostico DNS. Conoce las opciones `+short`, `+trace`, `-x` (inversa) y como especificar el servidor con `@servidor`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/bind/named.conf`?

</div>
<div class="flashcard-back">

**R:** `/etc/named.conf`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `/var/cache/bind/`?

</div>
<div class="flashcard-back">

**R:** `/var/named/`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `/var/run/named/`?

</div>
<div class="flashcard-back">

**R:** `/var/run/named/`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El DNS (Domain Name System) es uno de los servicios mas criticos de Internet, encargado de traducir nombres de dominio a direcciones IP y viceversa. BIND (Berkeley Internet Name Domain) es la implement

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Estructura de named.conf?

</div>
<div class="flashcard-back">

**R:** El archivo `named.conf` tiene una estructura basada en bloques con la siguiente sintaxis:

</div>
</div>

---

