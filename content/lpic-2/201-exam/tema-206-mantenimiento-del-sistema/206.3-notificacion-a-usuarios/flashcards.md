---
title: "206.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "206.3"
---

# Flashcards: 206.3 - Notificacion A Usuarios

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `/etc/motd` se muestra despues del login exitoso. No confundir con `/etc/issue` ...

</div>
<div class="flashcard-back">

**R:** `/etc/motd` se muestra despues del login exitoso. No confundir con `/etc/issue` que se muestra antes del login.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `/etc/issue` es para consolas locales, `/etc/issue.net` es para conexiones remot...

</div>
<div class="flashcard-back">

**R:** `/etc/issue` es para consolas locales, `/etc/issue.net` es para conexiones remotas. Las secuencias de escape (`\n`, `\l`, etc.) generalmente solo funcionan en `/etc/issue`, no en `/etc/issue.net`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Los banners legales son importantes por razones de cumplimiento normativo. Puede...

</div>
<div class="flashcard-back">

**R:** Los banners legales son importantes por razones de cumplimiento normativo. Pueden ser necesarios para que acciones legales contra accesos no autorizados sean validas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `mesg n` bloquea mensajes de `write` pero generalmente NO bloquea mensajes de `w...

</div>
<div class="flashcard-back">

**R:** `mesg n` bloquea mensajes de `write` pero generalmente NO bloquea mensajes de `wall` enviados por root. Solo root puede enviar mensajes a usuarios que tengan `mesg n`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: `shutdown` envia mensajes automaticamente a los usuarios. La opcion `-c` cancela...

</div>
<div class="flashcard-back">

**R:** `shutdown` envia mensajes automaticamente a los usuarios. La opcion `-c` cancela un apagado programado y puede incluir un mensaje explicativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: `systemd-ask-password` se usa para solicitar contrasenas durante el arranque, co...

</div>
<div class="flashcard-back">

**R:** `systemd-ask-password` se usa para solicitar contrasenas durante el arranque, como claves de descifrado LUKS. No es una herramienta de notificacion general, sino de interaccion segura con el usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `\d`?

</div>
<div class="flashcard-back">

**R:** Fecha actual

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `\t`?

</div>
<div class="flashcard-back">

**R:** Hora actual

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `\n`?

</div>
<div class="flashcard-back">

**R:** Nombre de host (hostname)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `\l`?

</div>
<div class="flashcard-back">

**R:** Nombre de la terminal (tty)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-011">
<div class="flashcard-front">

**P:** Que hace el comando `\s`?

</div>
<div class="flashcard-back">

**R:** Nombre del sistema operativo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** La comunicacion con los usuarios del sistema es una tarea fundamental del administrador. Ya sea para notificar un mantenimiento programado, advertir sobre politicas de uso o enviar mensajes urgentes, L

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son systemd-ask-password?

</div>
<div class="flashcard-back">

**R:** `systemd-ask-password` es una herramienta de systemd para solicitar contrasenas de forma segura al usuario, tipicamente durante el arranque del sistema (por ejemplo, para desbloquear particiones LUKS).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son Resumen de archivos y comandos?

</div>
<div class="flashcard-back">

**R:** | Mecanismo | Momento | Alcance |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - **Mantener los mensajes breves y claros**: Los usuarios tienden a ignorar mensajes largos

</div>
</div>

---

