---
title: "301.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.2"
---

# Flashcards: 301.2 - Configuracion Samba

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `testparm` es la herramienta obligatoria para verificar la sintaxis de smb.conf....

</div>
<div class="flashcard-back">

**R:** `testparm` es la herramienta obligatoria para verificar la sintaxis de smb.conf. Siempre debe ejecutarse después de cada cambio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El parámetro `security = share` fue eliminado en Samba 4. `server role` es la fo...

</div>
<div class="flashcard-back">

**R:** El parámetro `security = share` fue eliminado en Samba 4. `server role` es la forma moderna y preferida de configurar el modo de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `tdbsam` es el backend predeterminado. `ldapsam` se usa para entornos distribuid...

</div>
<div class="flashcard-back">

**R:** `tdbsam` es el backend predeterminado. `ldapsam` se usa para entornos distribuidos. `smbpasswd` es legacy y no recomendado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los parámetros de rendimiento más comunes y los módulos VFS principales....

</div>
<div class="flashcard-back">

**R:** Conocer los parámetros de rendimiento más comunes y los módulos VFS principales. `testparm` es imprescindible para verificar la configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `standalone server`?

</div>
<div class="flashcard-back">

**R:** Servidor independiente con autenticación local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `member server`?

</div>
<div class="flashcard-back">

**R:** Miembro de un dominio AD o NT4

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `classic primary domain controller`?

</div>
<div class="flashcard-back">

**R:** PDC de dominio NT4 (legacy)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `classic backup domain controller`?

</div>
<div class="flashcard-back">

**R:** BDC de dominio NT4 (legacy)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `active directory domain controller`?

</div>
<div class="flashcard-back">

**R:** Controlador de dominio AD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema abarca la configuración detallada de Samba mediante smb.conf, incluyendo modos de seguridad, backends de autenticación, módulos VFS y optimización de rendimiento. Es el subtema con mayor p

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Modos de seguridad (server role)?

</div>
<div class="flashcard-back">

**R:** El parámetro `server role` (anteriormente `security`) define el rol del servidor:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son Backends de autenticación (passdb backend)?

</div>
<div class="flashcard-back">

**R:** El parámetro `passdb backend` define dónde se almacenan las credenciales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son Módulos VFS (Virtual File System)?

</div>
<div class="flashcard-back">

**R:** Los módulos VFS extienden la funcionalidad de los recursos compartidos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-014">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - smb.conf se divide en [global] y secciones de recursos compartidos

</div>
</div>

---

