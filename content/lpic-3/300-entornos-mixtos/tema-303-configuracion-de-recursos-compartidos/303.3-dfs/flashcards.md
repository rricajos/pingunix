---
title: "303.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.3"
---

# Flashcards: 303.3 - Dfs

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: DFS permite crear un espacio de nombres virtual que agrupa shares de múltiples s...

</div>
<div class="flashcard-back">

**R:** DFS permite crear un espacio de nombres virtual que agrupa shares de múltiples servidores bajo una única ruta de acceso, proporcionando transparencia de ubicación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Se necesitan dos parámetros para DFS: `host msdfs = yes` en `[global]` y `msdfs ...

</div>
<div class="flashcard-back">

**R:** Se necesitan dos parámetros para DFS: `host msdfs = yes` en `[global]` y `msdfs root = yes` en el share que actuará como raíz DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Los enlaces DFS en Samba se implementan como enlaces simbólicos con el prefijo `...

</div>
<div class="flashcard-back">

**R:** Los enlaces DFS en Samba se implementan como enlaces simbólicos con el prefijo `msdfs:` en el directorio raíz DFS. Los destinos múltiples se separan con comas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `msdfs proxy` redirige un share completo a otro servidor. No requiere `msdfs roo...

</div>
<div class="flashcard-back">

**R:** `msdfs proxy` redirige un share completo a otro servidor. No requiere `msdfs root = yes` ni enlaces simbólicos; funciona a nivel de share.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `host msdfs`?

</div>
<div class="flashcard-back">

**R:** [global]

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `msdfs root`?

</div>
<div class="flashcard-back">

**R:** [share]

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `msdfs proxy`?

</div>
<div class="flashcard-back">

**R:** [share]

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `msdfs shuffle referrals`?

</div>
<div class="flashcard-back">

**R:** [global]

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** DFS (Distributed File System) es una tecnología que permite crear un espacio de nombres unificado para recursos compartidos distribuidos en múltiples servidores. Con DFS, los usuarios acceden a una rut

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son DFS Proxy (msdfs proxy)?

</div>
<div class="flashcard-back">

**R:** `msdfs proxy` permite redirigir un share completo a otro servidor sin crear enlaces simbólicos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Failover con DFS?

</div>
<div class="flashcard-back">

**R:** Los enlaces DFS con múltiples destinos proporcionan failover:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Parámetros DFS en smb.conf?

</div>
<div class="flashcard-back">

**R:** | Parámetro       | Sección   | Descripción                                          |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son Consideraciones de seguridad?

</div>
<div class="flashcard-back">

**R:** - Los permisos en la raíz DFS controlan quién puede ver los enlaces

</div>
</div>

---

