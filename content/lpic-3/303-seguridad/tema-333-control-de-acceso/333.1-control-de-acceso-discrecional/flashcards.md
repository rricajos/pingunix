---
title: "333.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "333.1"
---

# Flashcards: 333.1 - Control De Acceso Discrecional

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Domina los permisos especiales (SUID/SGID/sticky), las ACLs POSIX (getfacl/setfa...

</div>
<div class="flashcard-back">

**R:** Domina los permisos especiales (SUID/SGID/sticky), las ACLs POSIX (getfacl/setfacl) incluyendo ACLs por defecto y mascara, y los atributos extendidos con chattr.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: SUID en archivos ejecutables es un riesgo de seguridad potencial. Audita regular...

</div>
<div class="flashcard-back">

**R:** SUID en archivos ejecutables es un riesgo de seguridad potencial. Audita regularmente archivos con SUID/SGID. SUID no funciona en scripts interpretados por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `chmod` en un archivo con ACLs modifica la mascara, no los permisos del grupo pr...

</div>
<div class="flashcard-back">

**R:** `chmod` en un archivo con ACLs modifica la mascara, no los permisos del grupo propietario. Un `+` al final de `ls -l` indica presencia de ACLs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `i`?

</div>
<div class="flashcard-back">

**R:** No se puede modificar, eliminar, renombrar ni enlazar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `a`?

</div>
<div class="flashcard-back">

**R:** Solo se puede añadir contenido (ideal para logs)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `d`?

</div>
<div class="flashcard-back">

**R:** Excluido de backups con dump

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `s`?

</div>
<div class="flashcard-back">

**R:** Los bloques se sobreescriben al eliminar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `u`?

</div>
<div class="flashcard-back">

**R:** El contenido se guarda al eliminar (permite recuperar)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El Control de Acceso Discrecional (DAC) es el modelo de seguridad tradicional de Unix donde el propietario de un recurso decide quien puede acceder a el. Incluye permisos rwx, bits especiales (SUID, SG

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son umask?

</div>
<div class="flashcard-back">

**R:** La umask define los permisos que se **eliminan** al crear nuevos archivos y directorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son ACLs POSIX (Listas de Control de Acceso)?

</div>
<div class="flashcard-back">

**R:** Las ACLs POSIX extienden el modelo de permisos tradicional permitiendo definir permisos para usuarios y grupos adicionales.

</div>
</div>

---

