---
title: "211.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "211.1"
---

# Flashcards: 211.1 - Servidores De Correo

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El puerto 25 es para comunicación entre servidores MTA. El puerto 587 es para qu...

</div>
<div class="flashcard-back">

**R:** El puerto 25 es para comunicación entre servidores MTA. El puerto 587 es para que los clientes (MUA) envíen correo con autenticación. Memoriza estos puertos y sus funciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `mynetworks` define qué IPs pueden usar el servidor como relay. Una configuració...

</div>
<div class="flashcard-back">

**R:** `mynetworks` define qué IPs pueden usar el servidor como relay. Una configuración incorrecta puede convertir el servidor en un open relay (retransmisión abierta), lo cual es un problema de seguridad grave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Siempre que se modifique `/etc/aliases`, hay que ejecutar `newaliases` para que ...

</div>
<div class="flashcard-back">

**R:** Siempre que se modifique `/etc/aliases`, hay que ejecutar `newaliases` para que los cambios surtan efecto. Esto genera el archivo hash `/etc/aliases.db`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Nunca se edita directamente `sendmail.cf`. Se edita `sendmail.mc` y se genera el...

</div>
<div class="flashcard-back">

**R:** Nunca se edita directamente `sendmail.cf`. Se edita `sendmail.mc` y se genera el .cf con m4. Postfix es mucho más sencillo de configurar y es el foco principal del examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `master`?

</div>
<div class="flashcard-back">

**R:** Proceso principal, gestiona los demás

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `smtpd`?

</div>
<div class="flashcard-back">

**R:** Recibe correo vía SMTP

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `smtp`?

</div>
<div class="flashcard-back">

**R:** Envía correo a otros servidores

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `pickup`?

</div>
<div class="flashcard-back">

**R:** Recoge correo de la cola local (maildrop)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `cleanup`?

</div>
<div class="flashcard-back">

**R:** Procesa y limpia los mensajes entrantes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Postfix?

</div>
<div class="flashcard-back">

**R:** Postfix es el MTA más utilizado en Linux. Es modular, seguro y fácil de configurar en comparación con Sendmail.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Aliases de correo?

</div>
<div class="flashcard-back">

**R:** Los alias permiten redirigir correo de un usuario a otro.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Sendmail (conceptos básicos)?

</div>
<div class="flashcard-back">

**R:** Sendmail es el MTA histórico de Unix. Aunque Postfix es más popular, conviene conocer los conceptos básicos de Sendmail.

</div>
</div>

---

