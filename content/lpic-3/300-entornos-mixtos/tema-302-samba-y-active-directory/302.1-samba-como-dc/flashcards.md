---
title: "302.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.1"
---

# Flashcards: 302.1 - Samba Como Dc

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El aprovisionamiento crea el archivo smb.conf, la base de datos LDAP, el KDC Ker...

</div>
<div class="flashcard-back">

**R:** El aprovisionamiento crea el archivo smb.conf, la base de datos LDAP, el KDC Kerberos y opcionalmente configura DNS. La opción `--use-rfc2307` es importante para mapeo de UIDs/GIDs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los 5 roles FSMO, su alcance (bosque vs dominio) y la diferencia entre `...

</div>
<div class="flashcard-back">

**R:** Conocer los 5 roles FSMO, su alcance (bosque vs dominio) y la diferencia entre `transfer` (ordenado) y `seize` (forzado). Schema Master y Domain Naming Master son a nivel de bosque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: La replicación de SYSVOL en Samba requiere herramientas externas como rsync. DFS...

</div>
<div class="flashcard-back">

**R:** La replicación de SYSVOL en Samba requiere herramientas externas como rsync. DFS-R de Microsoft no está implementado en Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `samba-tool` es la herramienta central para administrar Samba AD DC. Conocer los...

</div>
<div class="flashcard-back">

**R:** `samba-tool` es la herramienta central para administrar Samba AD DC. Conocer los subcomandos de domain, user, group, dns, fsmo y drs es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `--realm`?

</div>
<div class="flashcard-back">

**R:** Nombre Kerberos del dominio (MAYÚSCULAS, ej: EMPRESA.COM)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `--domain`?

</div>
<div class="flashcard-back">

**R:** Nombre NetBIOS del dominio (máx 15 caracteres)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `--server-role=dc`?

</div>
<div class="flashcard-back">

**R:** Rol de controlador de dominio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `--dns-backend`?

</div>
<div class="flashcard-back">

**R:** Backend DNS: SAMBA_INTERNAL, BIND9_DLZ o NONE

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `--adminpass`?

</div>
<div class="flashcard-back">

**R:** Contraseña del administrador del dominio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este es el subtema con mayor peso de toda la especialidad 300. Cubre la configuración de Samba 4 como controlador de dominio Active Directory, incluyendo aprovisionamiento, roles FSMO, replicación, con

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Roles FSMO (Flexible Single Master Operations)?

</div>
<div class="flashcard-back">

**R:** En Active Directory, ciertos roles solo pueden ser realizados por un DC a la vez:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `samba-tool domain provision` crea el dominio AD con LDAP, Kerberos y DNS integrados

</div>
</div>

---

