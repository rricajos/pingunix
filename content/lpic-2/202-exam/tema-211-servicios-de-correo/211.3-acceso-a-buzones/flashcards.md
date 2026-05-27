---
title: "211.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "211.3"
---

# Flashcards: 211.3 - Acceso A Buzones

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Memoriza los puertos: IMAP = 143 (sin cifrar) / 993 (SSL/TLS); POP3 = 110 (sin c...

</div>
<div class="flashcard-back">

**R:** Memoriza los puertos: IMAP = 143 (sin cifrar) / 993 (SSL/TLS); POP3 = 110 (sin cifrar) / 995 (SSL/TLS). IMAP mantiene el correo en el servidor, POP3 lo descarga al cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: La directiva `mail_location` define dónde busca Dovecot los buzones de correo. L...

</div>
<div class="flashcard-back">

**R:** La directiva `mail_location` define dónde busca Dovecot los buzones de correo. Los formatos más comunes son `maildir:~/Maildir` y `mbox:~/mail:INBOX=/var/mail/%u`. La variable `%u` se sustituye por el nombre de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `ssl = required` obliga a que todas las conexiones usen cifrado. Nota la sintaxi...

</div>
<div class="flashcard-back">

**R:** `ssl = required` obliga a que todas las conexiones usen cifrado. Nota la sintaxis especial de los certificados: `ssl_cert = </ruta` (con `<` antes de la ruta, sin espacio).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Tanto SquirrelMail como Roundcube son clientes webmail que se conectan al servid...

</div>
<div class="flashcard-back">

**R:** Tanto SquirrelMail como Roundcube son clientes webmail que se conectan al servidor de correo vía IMAP. No almacenan correo por sí mismos; son interfaces web para acceder a los buzones del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `plain`?

</div>
<div class="flashcard-back">

**R:** Texto plano (requiere SSL/TLS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `login`?

</div>
<div class="flashcard-back">

**R:** Similar a plain, compatible con Outlook

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `cram-md5`?

</div>
<div class="flashcard-back">

**R:** Challenge-response (no requiere SSL)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `digest-md5`?

</div>
<div class="flashcard-back">

**R:** Digest-based (más seguro que CRAM)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `ntlm`?

</div>
<div class="flashcard-back">

**R:** Autenticación Windows NTLM

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Dovecot?

</div>
<div class="flashcard-back">

**R:** Dovecot es el servidor IMAP/POP3 más utilizado en Linux. Es seguro, rápido y fácil de configurar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Courier-IMAP?

</div>
<div class="flashcard-back">

**R:** Courier-IMAP es una alternativa a Dovecot para servicios IMAP/POP3. Es menos utilizado actualmente pero aparece en el temario LPIC-2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Webmail?

</div>
<div class="flashcard-back">

**R:** El acceso webmail permite a los usuarios consultar su correo a través de un navegador web.

</div>
</div>

---

