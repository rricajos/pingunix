---
title: "351.5 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.5"
---

# Flashcards: 351.5 - Imagenes De Disco Vm

> 10 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: qcow2 es el formato recomendado para QEMU/KVM. Ofrece el mejor balance entre fun...

</div>
<div class="flashcard-back">

**R:** qcow2 es el formato recomendado para QEMU/KVM. Ofrece el mejor balance entre funcionalidad y rendimiento. raw solo es preferible cuando se necesita rendimiento máximo sin funcionalidades avanzadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El backing file debe existir siempre y nunca debe ser modificado. Si se elimina ...

</div>
<div class="flashcard-back">

**R:** El backing file debe existir siempre y nunca debe ser modificado. Si se elimina o modifica el backing file, todas las imágenes derivadas quedan corruptas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `virt-sparsify` funciona rellenando con ceros el espacio libre dentro del filesy...

</div>
<div class="flashcard-back">

**R:** `virt-sparsify` funciona rellenando con ceros el espacio libre dentro del filesystem del guest, y luego eliminando esos bloques de ceros del archivo de imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: libguestfs NO requiere que la VM esté en ejecución. Opera directamente sobre arc...

</div>
<div class="flashcard-back">

**R:** libguestfs NO requiere que la VM esté en ejecución. Opera directamente sobre archivos de imagen. Es esencial para automatizar la personalización de imágenes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-005">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La gestión de imágenes de disco es fundamental en entornos de virtualización. Este subtema cubre los diferentes formatos, herramientas de manipulación, conversión entre formatos y las técnicas avanzada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-006">
<div class="flashcard-front">

**P:** Que es/son Comparación de Formatos de Imagen?

</div>
<div class="flashcard-back">

**R:** | Formato | Hipervisor | Thin Prov. | Snapshots | Compresión | Cifrado |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-007">
<div class="flashcard-front">

**P:** Que es/son Backing Files (Copy-on-Write Chains)?

</div>
<div class="flashcard-back">

**R:** Los backing files permiten crear imágenes derivadas que solo almacenan los cambios respecto a una imagen base:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-008">
<div class="flashcard-front">

**P:** Que es/son virt-sparsify?

</div>
<div class="flashcard-back">

**R:** Reduce el tamaño físico de una imagen eliminando espacio no utilizado:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-009">
<div class="flashcard-front">

**P:** Que es/son virt-resize?

</div>
<div class="flashcard-back">

**R:** Redimensiona particiones dentro de una imagen de disco:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-010">
<div class="flashcard-front">

**P:** Que es/son libguestfs: guestfish y guestmount?

</div>
<div class="flashcard-back">

**R:** libguestfs permite acceder y modificar el sistema de archivos de imágenes de disco sin necesidad de arrancar la VM.

</div>
</div>

---

