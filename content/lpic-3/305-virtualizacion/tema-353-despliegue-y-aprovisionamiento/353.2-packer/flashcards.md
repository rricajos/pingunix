---
title: "353.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "353.2"
---

# Flashcards: 353.2 - Packer

> 7 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: HCL2 es el formato actual de Packer (desde v1.7+). El formato JSON antiguo sigue...

</div>
<div class="flashcard-back">

**R:** HCL2 es el formato actual de Packer (desde v1.7+). El formato JSON antiguo sigue siendo soportado pero HCL2 es el recomendado. Los archivos usan la extensión `.pkr.hcl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El file provisioner sube archivos a la imagen durante la construcción. Para move...

</div>
<div class="flashcard-back">

**R:** El file provisioner sube archivos a la imagen durante la construcción. Para moverlos a rutas protegidas (como /etc/), se sube a /tmp/ primero y luego se mueve con un shell provisioner usando sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Packer puede construir imágenes para múltiples plataformas en paralelo desde un ...

</div>
<div class="flashcard-back">

**R:** Packer puede construir imágenes para múltiples plataformas en paralelo desde un único template. Esto garantiza que todas las imágenes sean idénticas independientemente del hipervisor o cloud.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `packer build`?

</div>
<div class="flashcard-back">

**R:** Construir imagen

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `packer validate`?

</div>
<div class="flashcard-back">

**R:** Verificar template

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-006">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Packer es una herramienta de HashiCorp para crear imágenes de máquinas idénticas para múltiples plataformas desde una única configuración. Permite automatizar la creación de imágenes para QEMU/KVM, Vir

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-007">
<div class="flashcard-front">

**P:** Que es/son Formato de Template HCL2?

</div>
<div class="flashcard-back">

**R:** Packer usa HCL2 (HashiCorp Configuration Language v2) como formato de template moderno (reemplazó al formato JSON anterior).

</div>
</div>

---

