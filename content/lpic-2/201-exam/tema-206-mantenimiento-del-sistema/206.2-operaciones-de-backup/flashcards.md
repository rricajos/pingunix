---
title: "206.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "206.2"
---

# Flashcards: 206.2 - Operaciones De Backup

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Entiende la diferencia entre incremental (desde el ultimo backup de cualquier ti...

</div>
<div class="flashcard-back">

**R:** Entiende la diferencia entre incremental (desde el ultimo backup de cualquier tipo) y diferencial (siempre desde el ultimo full). La restauracion incremental requiere el full + todos los incrementales en orden.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `--listed-incremental` es el metodo preferido para backups incrementales con tar...

</div>
<div class="flashcard-back">

**R:** `--listed-incremental` es el metodo preferido para backups incrementales con tar. Al restaurar, se usa `--listed-incremental=/dev/null` para indicar que se trata de una restauracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conoce bien las opciones `-a`, `-v`, `-z` y `--delete`. Recuerda la diferencia d...

</div>
<div class="flashcard-back">

**R:** Conoce bien las opciones `-a`, `-v`, `-z` y `--delete`. Recuerda la diferencia de comportamiento con y sin barra final en la ruta de origen. `rsync` usa SSH por defecto para conexiones remotas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `dd` es esencial para backup de MBR y clonacion de discos. Recuerda que `bs=512 ...

</div>
<div class="flashcard-back">

**R:** `dd` es esencial para backup de MBR y clonacion de discos. Recuerda que `bs=512 count=1` copia exactamente el MBR. Ten cuidado: `dd` no pide confirmacion y puede destruir datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: `cpio` se usa frecuentemente con `find` para seleccionar archivos. Recuerda los ...

</div>
<div class="flashcard-back">

**R:** `cpio` se usa frecuentemente con `find` para seleccionar archivos. Recuerda los tres modos: `-o` (crear), `-i` (extraer) y `-p` (copiar directo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: No necesitas conocer la configuracion detallada de Amanda, Bacula o BURP, pero s...

</div>
<div class="flashcard-back">

**R:** No necesitas conocer la configuracion detallada de Amanda, Bacula o BURP, pero si debes saber que existen y sus caracteristicas principales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `--delete`?

</div>
<div class="flashcard-back">

**R:** Elimina archivos en destino que no existen en origen

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `--exclude=PATRON`?

</div>
<div class="flashcard-back">

**R:** Excluye archivos que coinciden con el patron

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `--progress`?

</div>
<div class="flashcard-back">

**R:** Muestra progreso de la transferencia

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `-e`?

</div>
<div class="flashcard-back">

**R:** Especifica el shell remoto (generalmente ssh)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Las copias de seguridad son una de las responsabilidades mas criticas de un administrador de sistemas. Este subtema tiene un **peso de 3** en el examen LPIC-2 201 y cubre las herramientas y estrategias

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son dd - Copia a bajo nivel?

</div>
<div class="flashcard-back">

**R:** `dd` copia datos a nivel de bloques, ideal para clonar discos y particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son cpio - Archivado alternativo?

</div>
<div class="flashcard-back">

**R:** `cpio` (Copy In and Out) es una herramienta de archivado que lee nombres de archivo desde la entrada estandar.

</div>
</div>

---

