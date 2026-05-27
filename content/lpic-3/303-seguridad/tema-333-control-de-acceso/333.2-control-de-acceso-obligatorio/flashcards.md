---
title: "333.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "333.2"
---

# Flashcards: 333.2 - Control De Acceso Obligatorio

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 4. Necesitas conocer tanto SELinux como AppArmor en prof...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 4. Necesitas conocer tanto SELinux como AppArmor en profundidad: modos, comandos de gestion, contextos de seguridad, booleanos y creacion de perfiles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Cambiar entre `enforcing` y `permissive` no requiere reinicio. Cambiar a/desde `...

</div>
<div class="flashcard-back">

**R:** Cambiar entre `enforcing` y `permissive` no requiere reinicio. Cambiar a/desde `disabled` SI requiere reinicio y reetiquetado del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `chcon` cambia contextos temporalmente (se pierden con `restorecon` o relabeling...

</div>
<div class="flashcard-back">

**R:** `chcon` cambia contextos temporalmente (se pierden con `restorecon` o relabeling). `semanage fcontext` + `restorecon` es la forma correcta y permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conoce el flujo completo: `aa-genprof` o `aa-autodep` para crear, `aa-complain` ...

</div>
<div class="flashcard-back">

**R:** Conoce el flujo completo: `aa-genprof` o `aa-autodep` para crear, `aa-complain` para depurar, `aa-logprof` para ajustar, `aa-enforce` para activar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `httpd_can_network_connect`?

</div>
<div class="flashcard-back">

**R:** Permitir a Apache conexiones de red

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `httpd_enable_homedirs`?

</div>
<div class="flashcard-back">

**R:** Permitir acceso a directorios home

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `ftpd_anon_write`?

</div>
<div class="flashcard-back">

**R:** Permitir escritura FTP anonima

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `samba_enable_home_dirs`?

</div>
<div class="flashcard-back">

**R:** Samba puede acceder a homes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `ssh_sysadm_login`?

</div>
<div class="flashcard-back">

**R:** Login SSH con rol sysadm

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El Control de Acceso Obligatorio (MAC) es un modelo de seguridad donde las politicas de acceso son definidas por el administrador del sistema y no pueden ser modificadas por los usuarios individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son SELinux (Security-Enhanced Linux)?

</div>
<div class="flashcard-back">

**R:** SELinux fue desarrollado por la NSA y es el sistema MAC por defecto en distribuciones Red Hat/CentOS/Fedora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son AppArmor?

</div>
<div class="flashcard-back">

**R:** AppArmor es el sistema MAC por defecto en distribuciones Debian/Ubuntu y SUSE. Utiliza perfiles basados en rutas de archivos (no etiquetas como SELinux).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son Comparacion SELinux vs AppArmor?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | SELinux | AppArmor |

</div>
</div>

---

