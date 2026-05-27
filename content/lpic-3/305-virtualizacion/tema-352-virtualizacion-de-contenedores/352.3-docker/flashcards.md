---
title: "352.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.3"
---

# Flashcards: 352.3 - Docker

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Siempre usar la forma exec (con corchetes JSON). La forma shell ejecuta el coman...

</div>
<div class="flashcard-back">

**R:** Siempre usar la forma exec (con corchetes JSON). La forma shell ejecuta el comando a través de `/bin/sh -c`, lo que impide que las señales lleguen correctamente al proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Los multi-stage builds son esenciales para crear imágenes pequeñas y seguras. La...

</div>
<div class="flashcard-back">

**R:** Los multi-stage builds son esenciales para crear imágenes pequeñas y seguras. La imagen final solo contiene lo necesario para ejecutar la aplicación, sin herramientas de compilación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: En redes bridge personalizadas, los contenedores pueden resolverse por nombre (D...

</div>
<div class="flashcard-back">

**R:** En redes bridge personalizadas, los contenedores pueden resolverse por nombre (DNS interno). En la red bridge por defecto (`docker0`), solo se pueden comunicar por IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `.dockerignore` reduce el tamaño del contexto de build enviado al daemon Docker,...

</div>
<div class="flashcard-back">

**R:** `.dockerignore` reduce el tamaño del contexto de build enviado al daemon Docker, acelerando la construcción y evitando incluir archivos sensibles en la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `docker run imagen comando`?

</div>
<div class="flashcard-back">

**R:** `docker run --entrypoint X imagen`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `CMD comando arg1`?

</div>
<div class="flashcard-back">

**R:** `ENTRYPOINT comando arg1`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `CMD ["cmd", "arg1"]`?

</div>
<div class="flashcard-back">

**R:** `ENTRYPOINT ["cmd", "arg1"]`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `-d`?

</div>
<div class="flashcard-back">

**R:** Modo daemon (background)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `-it`?

</div>
<div class="flashcard-back">

**R:** Interactivo con terminal

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Docker es la plataforma de contenedores más extendida. Con un peso de 9 puntos (junto con libvirt), es uno de los subtemas más importantes del examen LPIC-3 305. Docker empaqueta aplicaciones y sus dep

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Dockerfile?

</div>
<div class="flashcard-back">

**R:** El Dockerfile define cómo construir una imagen de contenedor paso a paso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Docker Compose?

</div>
<div class="flashcard-back">

**R:** Define aplicaciones multi-contenedor en un archivo YAML:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son .dockerignore?

</div>
<div class="flashcard-back">

**R:** Excluye archivos del contexto de build:

</div>
</div>

---

