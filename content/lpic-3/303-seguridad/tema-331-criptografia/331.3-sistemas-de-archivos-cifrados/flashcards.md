---
title: "331.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.3"
---

# Flashcards: 331.3 - Sistemas De Archivos Cifrados

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Domina los comandos de `cryptsetup` con LUKS. Es el método principal de cifrado ...

</div>
<div class="flashcard-back">

**R:** Domina los comandos de `cryptsetup` con LUKS. Es el método principal de cifrado de disco en Linux y el más preguntado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `luksAddKey` requiere una clave existente válida para añadir una nu...

</div>
<div class="flashcard-back">

**R:** Recuerda que `luksAddKey` requiere una clave existente válida para añadir una nueva. `luksKillSlot` elimina por número de slot, `luksRemoveKey` por passphrase.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: LVM sobre LUKS es la configuración preferida por muchos instaladores de distribu...

</div>
<div class="flashcard-back">

**R:** LVM sobre LUKS es la configuración preferida por muchos instaladores de distribuciones porque cifra todo el grupo de volúmenes con una sola passphrase.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `luks`?

</div>
<div class="flashcard-back">

**R:** Usar formato LUKS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `noauto`?

</div>
<div class="flashcard-back">

**R:** No desbloquear automáticamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `discard`?

</div>
<div class="flashcard-back">

**R:** Permitir TRIM (SSD), con implicaciones de seguridad

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `swap`?

</div>
<div class="flashcard-back">

**R:** Formatear como swap tras abrir

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `cipher=`?

</div>
<div class="flashcard-back">

**R:** Especificar algoritmo de cifrado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** El cifrado de sistemas de archivos protege los datos en reposo (data at rest) contra acceso no autorizado, incluso si el medio físico es robado. Linux ofrece varias soluciones: dm-crypt/LUKS para cifra

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Configuración Persistente: /etc/crypttab?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/crypttab` permite configurar volúmenes cifrados para que se desbloqueen automáticamente durante el arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son dm-crypt en Modo Plano (Plain Mode)?

</div>
<div class="flashcard-back">

**R:** El modo plano no utiliza cabecera LUKS. Es más simple pero menos flexible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son LUKS sobre LVM?

</div>
<div class="flashcard-back">

**R:** Se puede combinar LUKS con LVM de dos formas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son LUKS en initramfs?

</div>
<div class="flashcard-back">

**R:** Para cifrar la partición raíz, se necesita soporte en initramfs:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son eCryptfs?

</div>
<div class="flashcard-back">

**R:** eCryptfs es un sistema de cifrado a nivel de archivo apilado sobre un sistema de archivos existente. Cifra archivos individualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son EncFS?

</div>
<div class="flashcard-back">

**R:** EncFS es una solución de cifrado en espacio de usuario basada en FUSE. Más simple pero con limitaciones de seguridad conocidas.

</div>
</div>

---

