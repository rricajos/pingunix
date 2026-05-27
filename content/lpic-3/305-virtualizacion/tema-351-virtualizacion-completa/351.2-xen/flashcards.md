---
title: "351.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.2"
---

# Flashcards: 351.2 - Xen

> 9 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Dom0 es esencial para el funcionamiento de Xen. Sin Dom0, no se pueden gestionar...

</div>
<div class="flashcard-back">

**R:** Dom0 es esencial para el funcionamiento de Xen. Sin Dom0, no se pueden gestionar los guests. Dom0 tiene privilegios especiales para acceder al hardware y al hipervisor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: PVH es el modo preferido en Xen moderno. Combina el rendimiento de PV para E/S c...

</div>
<div class="flashcard-back">

**R:** PVH es el modo preferido en Xen moderno. Combina el rendimiento de PV para E/S con la compatibilidad de HVM para CPU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: En el formato de disco, `w` significa escritura (read-write) y `r` solo lectura....

</div>
<div class="flashcard-back">

**R:** En el formato de disco, `w` significa escritura (read-write) y `r` solo lectura. `xvda` es la convención de nombres para discos Xen paravirtualizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `phy:`?

</div>
<div class="flashcard-back">

**R:** `phy:/dev/vg0/disk,xvda,w`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `file:`?

</div>
<div class="flashcard-back">

**R:** `file:/path/image.img,xvdb,w`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `tap:aio:`?

</div>
<div class="flashcard-back">

**R:** `tap:aio:/path/image.img,xvdc,w`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-007">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Xen es un hipervisor de Tipo 1 (bare-metal) de código abierto que se ejecuta directamente sobre el hardware. Es uno de los hipervisores más maduros del ecosistema Linux y es la base de muchas plataform

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-008">
<div class="flashcard-front">

**P:** Que es/son Herramientas de Gestión: xl y xm?

</div>
<div class="flashcard-back">

**R:** `xl` es la herramienta principal de gestión de dominios en Xen actual (reemplazó a `xm` que dependía de xend).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Xenstore?

</div>
<div class="flashcard-back">

**R:** Xenstore es una base de datos jerárquica compartida entre Dom0 y los DomU para intercambiar información de configuración:

</div>
</div>

---

