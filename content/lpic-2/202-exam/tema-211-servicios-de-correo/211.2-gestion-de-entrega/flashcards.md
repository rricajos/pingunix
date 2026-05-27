---
title: "211.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "211.2"
---

# Flashcards: 211.2 - Gestion De Entrega

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Maildir es el formato recomendado para servidores modernos. Cada mensaje es un a...

</div>
<div class="flashcard-back">

**R:** Maildir es el formato recomendado para servidores modernos. Cada mensaje es un archivo individual en los subdirectorios `new/`, `cur/` y `tmp/`. No requiere bloqueo de archivos y funciona bien con NFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: La barra final (`/`) en el destino es crítica: indica Maildir. Sin barra, Procma...

</div>
<div class="flashcard-back">

**R:** La barra final (`/`) en el destino es crítica: indica Maildir. Sin barra, Procmail trata el destino como un archivo mbox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: amavisd-new actúa como intermediario entre Postfix y los filtros de contenido. E...

</div>
<div class="flashcard-back">

**R:** amavisd-new actúa como intermediario entre Postfix y los filtros de contenido. El correo se envía al puerto 10024, se procesa y se devuelve al puerto 10025.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `/var/mail/usuario`?

</div>
<div class="flashcard-back">

**R:** `~/Maildir/`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/procmailrc`?

</div>
<div class="flashcard-back">

**R:** Configuración global (todos los usuarios)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `~/.procmailrc`?

</div>
<div class="flashcard-back">

**R:** Configuración personal del usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `:0`?

</div>
<div class="flashcard-back">

**R:** Inicio de regla (sin flags adicionales)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `:0 c`?

</div>
<div class="flashcard-back">

**R:** Copia: entrega una copia y continúa procesando

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Procmail?

</div>
<div class="flashcard-back">

**R:** Procmail es un MDA y filtro de correo local que permite clasificar y procesar correo según reglas definidas por el usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Sieve?

</div>
<div class="flashcard-back">

**R:** Sieve es un lenguaje estándar de filtrado de correo del lado del servidor, generalmente integrado con Dovecot o Cyrus.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Usuarios virtuales?

</div>
<div class="flashcard-back">

**R:** Los usuarios virtuales permiten gestionar buzones de correo sin necesidad de crear cuentas del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son Mapas de transporte de Postfix?

</div>
<div class="flashcard-back">

**R:** Los transport maps permiten definir cómo y a dónde se entrega el correo según el destino:

</div>
</div>

---

