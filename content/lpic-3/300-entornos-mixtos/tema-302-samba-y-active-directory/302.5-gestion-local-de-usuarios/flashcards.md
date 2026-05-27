---
title: "302.5 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.5"
---

# Flashcards: 302.5 - Gestion Local De Usuarios

> 17 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `smbpasswd -a` requiere que el usuario UNIX exista previamente. La contraseña Sa...

</div>
<div class="flashcard-back">

**R:** `smbpasswd -a` requiere que el usuario UNIX exista previamente. La contraseña Samba y la contraseña UNIX son bases de datos separadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `pdbedit` permite operaciones que `smbpasswd` no puede, como migración entre bac...

</div>
<div class="flashcard-back">

**R:** `pdbedit` permite operaciones que `smbpasswd` no puede, como migración entre backends, exportación/importación y modificación de atributos extendidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: El archivo de mapeo traduce nombres ANTES de la autenticación. Es especialmente ...

</div>
<div class="flashcard-back">

**R:** El archivo de mapeo traduce nombres ANTES de la autenticación. Es especialmente útil para mapear "administrator" a "root" y para resolver diferencias de nombres entre Windows y Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conocer las diferencias entre las opciones de `map to guest` y cuándo es seguro ...

</div>
<div class="flashcard-back">

**R:** Conocer las diferencias entre las opciones de `map to guest` y cuándo es seguro usar cada una. `Bad User` es la opción más comúnmente usada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `--fullname`?

</div>
<div class="flashcard-back">

**R:** Nombre para mostrar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `--homedir`?

</div>
<div class="flashcard-back">

**R:** Ruta UNC del home en red

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `--drive`?

</div>
<div class="flashcard-back">

**R:** Letra de unidad para mapear home

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `--logon-script`?

</div>
<div class="flashcard-back">

**R:** Script ejecutado al iniciar sesión

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `--profile`?

</div>
<div class="flashcard-back">

**R:** Ruta UNC del perfil de usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-010">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre la gestión de usuarios locales de Samba, incluyendo las herramientas smbpasswd y pdbedit, el mapeo de nombres de usuario, opciones de forzar usuario/grupo, cuenta de invitado y la in

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-011">
<div class="flashcard-front">

**P:** Que es/son smbpasswd - Gestión de contraseñas Samba?

</div>
<div class="flashcard-back">

**R:** `smbpasswd` es la herramienta clásica para gestionar contraseñas de usuarios en la base de datos local de Samba:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-012">
<div class="flashcard-front">

**P:** Que es/son pdbedit - Gestión avanzada de la base de datos de usuarios?

</div>
<div class="flashcard-back">

**R:** `pdbedit` es una herramienta más completa que `smbpasswd` para gestionar la base de datos passdb:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-013">
<div class="flashcard-front">

**P:** Que es/son Mapeo de nombres de usuario (username map)?

</div>
<div class="flashcard-back">

**R:** El parámetro `username map` permite traducir nombres de usuario entre los que envía el cliente Windows y los que existen en el sistema Linux:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-014">
<div class="flashcard-front">

**P:** Que es/son Force user y force group?

</div>
<div class="flashcard-back">

**R:** Estos parámetros fuerzan la identidad utilizada para operaciones de archivos en un recurso compartido:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-015">
<div class="flashcard-front">

**P:** Que es/son Cuenta de invitado (guest account)?

</div>
<div class="flashcard-back">

**R:** La cuenta de invitado permite acceso anónimo a recursos compartidos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-016">
<div class="flashcard-front">

**P:** Que es/son Rangos idmap locales?

</div>
<div class="flashcard-back">

**R:** Para servidores que usan tanto usuarios locales como de dominio, es importante definir rangos de ID no solapados:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-017">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `smbpasswd` gestiona contraseñas locales de Samba; el usuario UNIX debe existir primero

</div>
</div>

---

