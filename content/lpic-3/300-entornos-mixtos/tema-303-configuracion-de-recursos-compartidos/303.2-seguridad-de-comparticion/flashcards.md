---
title: "303.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.2"
---

# Flashcards: 303.2 - Seguridad De Comparticion

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Samba nunca puede otorgar más permisos de los que permite el sistema de archivos...

</div>
<div class="flashcard-back">

**R:** Samba nunca puede otorgar más permisos de los que permite el sistema de archivos. Si el sistema de archivos deniega la escritura, aunque Samba permita `writable = yes`, el usuario no podrá escribir.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Las ACLs por defecto (`default:`) se aplican automáticamente a los nuevos archiv...

</div>
<div class="flashcard-back">

**R:** Las ACLs por defecto (`default:`) se aplican automáticamente a los nuevos archivos y directorios creados dentro del directorio. Son esenciales para mantener permisos consistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `smbcacls` es la herramienta CLI para gestionar permisos NT en shares de Samba. ...

</div>
<div class="flashcard-back">

**R:** `smbcacls` es la herramienta CLI para gestionar permisos NT en shares de Samba. Conocer su sintaxis y las opciones `-a` (añadir), `-M` (modificar), `-D` (eliminar) es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `inherit permissions = yes` hace que los permisos POSIX del directorio padre se ...

</div>
<div class="flashcard-back">

**R:** `inherit permissions = yes` hace que los permisos POSIX del directorio padre se hereden, sobrescribiendo `create mask` y `directory mask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: `map acl inherit = yes` es esencial para que la herencia de permisos configurada...

</div>
<div class="flashcard-back">

**R:** `map acl inherit = yes` es esencial para que la herencia de permisos configurada desde Windows se traduzca correctamente a ACLs POSIX en Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: `vfs objects = acl_xattr` permite almacenar ACLs NT completas como atributos ext...

</div>
<div class="flashcard-back">

**R:** `vfs objects = acl_xattr` permite almacenar ACLs NT completas como atributos extendidos en el sistema de archivos Linux, manteniendo la fidelidad total de los permisos Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-007">
<div class="flashcard-front">

**P:** Tip de examen: `access based share enum = yes` en `[global]` oculta automáticamente los shares ...

</div>
<div class="flashcard-back">

**R:** `access based share enum = yes` en `[global]` oculta automáticamente los shares a los que el usuario no tiene acceso. Es diferente de `browseable = no`, que oculta el share para todos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-008">
<div class="flashcard-front">

**P:** Tip de examen: `hosts allow` y `hosts deny` pueden usarse tanto en `[global]` como en shares in...

</div>
<div class="flashcard-back">

**R:** `hosts allow` y `hosts deny` pueden usarse tanto en `[global]` como en shares individuales. Si ambos están presentes, `hosts allow` tiene prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La seguridad de los recursos compartidos en Samba implica la interacción entre múltiples capas de permisos: los permisos POSIX del sistema de archivos Linux, las ACLs POSIX extendidas, las ACLs NT de W

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son ACLs POSIX en recursos compartidos?

</div>
<div class="flashcard-back">

**R:** Las ACLs POSIX proporcionan control de acceso más granular que los permisos Unix tradicionales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Integración con la pestaña de permisos de Windows?

</div>
<div class="flashcard-back">

**R:** Para que los usuarios puedan gestionar permisos desde la pestaña "Seguridad" de Windows:

</div>
</div>

---

