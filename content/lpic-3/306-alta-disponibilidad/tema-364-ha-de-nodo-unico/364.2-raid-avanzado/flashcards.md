---
title: "364.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.2"
---

# Flashcards: 364.2 - Raid Avanzado

> 7 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El reshape permite cambiar el nivel de RAID y el numero de discos sin desmontar ...

</div>
<div class="flashcard-back">

**R:** El reshape permite cambiar el nivel de RAID y el numero de discos sin desmontar el array. El proceso puede llevar horas y no debe interrumpirse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `mismatch_cnt` muestra el numero de bloques que no coinciden entre discos. Un va...

</div>
<div class="flashcard-back">

**R:** `mismatch_cnt` muestra el numero de bloques que no coinciden entre discos. Un valor distinto de 0 indica posibles problemas (excepto en RAID 1 con cache de escritura).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `storcli` (MegaRAID/LSI) y `ssacli` (HP Smart Array) son las herramientas princi...

</div>
<div class="flashcard-back">

**R:** `storcli` (MegaRAID/LSI) y `ssacli` (HP Smart Array) son las herramientas principales de RAID hardware. `hpacucli` es el nombre anterior de `ssacli`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `lvmcache` (dm-cache) se integra con LVM y es mas facil de gestionar que bcache....

</div>
<div class="flashcard-back">

**R:** `lvmcache` (dm-cache) se integra con LVM y es mas facil de gestionar que bcache. Los modos `writethrough` y `writeback` son los mas importantes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `writethrough`?

</div>
<div class="flashcard-back">

**R:** Escritura en HDD y SSD simultaneamente (seguro)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `writeback`?

</div>
<div class="flashcard-back">

**R:** Escritura en SSD primero, luego en HDD (rapido)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.2">
</div>

<div class="flashcard" data-id="364.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `writearound`?

</div>
<div class="flashcard-back">

**R:** Solo cache de lectura, escritura directa a HDD

</div>
</div>

---

