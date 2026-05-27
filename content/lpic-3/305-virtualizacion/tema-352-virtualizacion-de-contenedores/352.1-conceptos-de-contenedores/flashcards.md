---
title: "352.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.1"
---

# Flashcards: 352.1 - Conceptos De Contenedores

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Los contenedores comparten el kernel del host. Esto los hace más ligeros pero po...

</div>
<div class="flashcard-back">

**R:** Los contenedores comparten el kernel del host. Esto los hace más ligeros pero potencialmente menos seguros que las VMs. Un exploit en el kernel afecta a todos los contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El namespace `user` es fundamental para contenedores rootless. Permite mapear el...

</div>
<div class="flashcard-back">

**R:** El namespace `user` es fundamental para contenedores rootless. Permite mapear el UID 0 dentro del contenedor a un UID sin privilegios en el host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: OverlayFS es el storage driver predeterminado en Docker moderno. AUFS fue usado ...

</div>
<div class="flashcard-back">

**R:** OverlayFS es el storage driver predeterminado en Docker moderno. AUFS fue usado en versiones antiguas pero no está en el kernel mainline.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: OCI asegura la interoperabilidad entre diferentes herramientas de contenedores. ...

</div>
<div class="flashcard-back">

**R:** OCI asegura la interoperabilidad entre diferentes herramientas de contenedores. Una imagen construida con Docker puede ejecutarse con Podman, y viceversa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: Por defecto, los contenedores Docker se ejecutan con un subconjunto limitado de ...

</div>
<div class="flashcard-back">

**R:** Por defecto, los contenedores Docker se ejecutan con un subconjunto limitado de capabilities. Nunca deben ejecutarse con `--privileged` en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `CLONE_NEWPID`?

</div>
<div class="flashcard-back">

**R:** Árbol de procesos (PID 1 propio)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-007">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Los contenedores son una forma de virtualización a nivel de sistema operativo que permite ejecutar múltiples instancias aisladas sobre un mismo kernel. A diferencia de las máquinas virtuales, no requie

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-008">
<div class="flashcard-front">

**P:** Que es/son Namespaces del Kernel Linux?

</div>
<div class="flashcard-back">

**R:** Los namespaces proporcionan aislamiento de recursos del sistema. Cada contenedor tiene su propio conjunto de namespaces:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-009">
<div class="flashcard-front">

**P:** Que es/son Cgroups (Control Groups)?

</div>
<div class="flashcard-back">

**R:** Los cgroups limitan, contabilizan y aíslan el uso de recursos del sistema por grupos de procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Especificación OCI?

</div>
<div class="flashcard-back">

**R:** La Open Container Initiative define tres especificaciones estándar:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Seccomp (Secure Computing Mode)?

</div>
<div class="flashcard-back">

**R:** Filtra las llamadas al sistema (syscalls) que un proceso puede realizar:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Linux Capabilities?

</div>
<div class="flashcard-back">

**R:** Las capabilities dividen los privilegios de root en unidades individuales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Contenedores Rootless?

</div>
<div class="flashcard-back">

**R:** Ejecutan el container engine y los contenedores sin privilegios de root en el host:

</div>
</div>

---

