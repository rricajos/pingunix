---
title: "362.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "362.3"
---

# Flashcards: 362.3 - Sistemas De Archivos Cluster

> 10 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El DLM es **obligatorio** para GFS2 y OCFS2. Debe configurarse como recurso clon...

</div>
<div class="flashcard-back">

**R:** El DLM es **obligatorio** para GFS2 y OCFS2. Debe configurarse como recurso clone (ejecutandose en todos los nodos). Sin DLM, el FS cluster no puede montarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El numero de journals (`-j`) debe ser al menos igual al numero de nodos que mont...

</div>
<div class="flashcard-back">

**R:** El numero de journals (`-j`) debe ser al menos igual al numero de nodos que montaran el FS. Cada nodo necesita su propio journal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: **Nunca** deshabilites STONITH cuando uses GFS2 u OCFS2 en produccion. El fencin...

</div>
<div class="flashcard-back">

**R:** **Nunca** deshabilites STONITH cuando uses GFS2 u OCFS2 en produccion. El fencing es un requisito obligatorio para la integridad de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `mkfs.gfs2`?

</div>
<div class="flashcard-back">

**R:** `mkfs.ocfs2`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-005">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Los **sistemas de archivos cluster** permiten que multiples nodos accedan simultaneamente al mismo sistema de archivos en almacenamiento compartido, coordinando el acceso mediante un **gestor de bloque

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-006">
<div class="flashcard-front">

**P:** Que es/son DLM - Distributed Lock Manager?

</div>
<div class="flashcard-back">

**R:** El **DLM** es el componente que coordina los bloqueos entre nodos del cluster. Es necesario para GFS2 y OCFS2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-007">
<div class="flashcard-front">

**P:** Que es/son GFS2 - Global File System 2?

</div>
<div class="flashcard-back">

**R:** **GFS2** es un sistema de archivos cluster desarrollado por Red Hat, integrado en el kernel Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-008">
<div class="flashcard-front">

**P:** Que es/son OCFS2 - Oracle Cluster File System 2?

</div>
<div class="flashcard-back">

**R:** **OCFS2** es un sistema de archivos cluster desarrollado por Oracle, tambien integrado en el kernel Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-009">
<div class="flashcard-front">

**P:** Que es/son Requisitos de Fencing?

</div>
<div class="flashcard-back">

**R:** Los sistemas de archivos cluster **requieren fencing** configurado para funcionar correctamente:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Comparativa GFS2 vs OCFS2?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | GFS2 | OCFS2 |

</div>
</div>

---

