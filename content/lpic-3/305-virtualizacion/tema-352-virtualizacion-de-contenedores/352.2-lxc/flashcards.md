---
title: "352.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.2"
---

# Flashcards: 352.2 - Lxc

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El template `download` descarga imágenes preconfiguradas del servidor de imágene...

</div>
<div class="flashcard-back">

**R:** El template `download` descarga imágenes preconfiguradas del servidor de imágenes LXC. Los templates locales (`-t ubuntu`, `-t debian`) ejecutan scripts de debootstrap para construir el rootfs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `lxc-copy` reemplazó al antiguo `lxc-clone`. La opción `-s` crea un clon con sna...

</div>
<div class="flashcard-back">

**R:** `lxc-copy` reemplazó al antiguo `lxc-clone`. La opción `-s` crea un clon con snapshot (COW), mucho más rápido y eficiente en espacio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Distinguir entre los comandos `lxc-*` (LXC nativo) y `lxc` (cliente de LXD). Son...

</div>
<div class="flashcard-back">

**R:** Distinguir entre los comandos `lxc-*` (LXC nativo) y `lxc` (cliente de LXD). Son herramientas diferentes: LXC es la librería base, LXD es una capa superior con más funcionalidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Los contenedores no privilegiados son más seguros porque root dentro del contene...

</div>
<div class="flashcard-back">

**R:** Los contenedores no privilegiados son más seguros porque root dentro del contenedor (UID 0) se mapea a un usuario sin privilegios en el host. Un escape del contenedor no otorga privilegios de root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/lxc/lxc.conf`?

</div>
<div class="flashcard-back">

**R:** Configuración global de LXC

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `/var/lib/lxc/<nombre>/config`?

</div>
<div class="flashcard-back">

**R:** Configuración de un contenedor específico

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `~/.local/share/lxc/`?

</div>
<div class="flashcard-back">

**R:** Contenedores no privilegiados (por usuario)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-008">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** LXC (Linux Containers) proporciona contenedores a nivel de sistema operativo, más parecidos a máquinas virtuales ligeras que a contenedores de aplicación (como Docker). Cada contenedor LXC ejecuta un s

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Backends de Almacenamiento?

</div>
<div class="flashcard-back">

**R:** | Backend | Descripción | Snapshots eficientes |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son LXD: La Evolución de LXC?

</div>
<div class="flashcard-back">

**R:** LXD es un gestor de contenedores de sistema construido sobre LXC que añade:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Contenedores No Privilegiados?

</div>
<div class="flashcard-back">

**R:** Ejecutan el contenedor mapeando UIDs/GIDs a rangos sin privilegios:

</div>
</div>

---

