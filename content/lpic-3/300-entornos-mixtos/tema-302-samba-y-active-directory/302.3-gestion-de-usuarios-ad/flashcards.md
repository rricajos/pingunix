---
title: "302.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.3"
---

# Flashcards: 302.3 - Gestion De Usuarios Ad

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `samba-tool user create` requiere que la contraseña cumpla con la política de co...

</div>
<div class="flashcard-back">

**R:** `samba-tool user create` requiere que la contraseña cumpla con la política de complejidad de AD (mayúsculas, minúsculas, números, caracteres especiales, mínimo 7 caracteres por defecto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: RSAT funciona con Samba AD DC y es la forma recomendada de administrar aspectos ...

</div>
<div class="flashcard-back">

**R:** RSAT funciona con Samba AD DC y es la forma recomendada de administrar aspectos como GPOs complejas y gestión de sitios que no están completamente soportados por samba-tool.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: La gestión completa de GPOs (edición de configuraciones) normalmente requiere RS...

</div>
<div class="flashcard-back">

**R:** La gestión completa de GPOs (edición de configuraciones) normalmente requiere RSAT desde Windows, ya que samba-tool tiene soporte limitado para la edición del contenido de las GPOs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los diferentes backends idmap y cuándo usar cada uno. `rid` es predecibl...

</div>
<div class="flashcard-back">

**R:** Conocer los diferentes backends idmap y cuándo usar cada uno. `rid` es predecible y no requiere datos adicionales en AD. `ad` requiere atributos RFC2307 pero permite control preciso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `sAMAccountName`?

</div>
<div class="flashcard-back">

**R:** Nombre de login (pre-Windows 2000)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `userPrincipalName`?

</div>
<div class="flashcard-back">

**R:** Nombre de login (formato UPN: user@domain)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `cn`?

</div>
<div class="flashcard-back">

**R:** Nombre común

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `distinguishedName`?

</div>
<div class="flashcard-back">

**R:** DN completo del objeto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `memberOf`?

</div>
<div class="flashcard-back">

**R:** Grupos a los que pertenece

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre la gestión de usuarios y grupos en un dominio Active Directory administrado por Samba, incluyendo herramientas de línea de comandos, RSAT desde Windows, políticas de contraseñas, GPO

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son RSAT (Remote Server Administration Tools)?

</div>
<div class="flashcard-back">

**R:** Las herramientas RSAT permiten administrar Samba AD DC desde un equipo Windows:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Integración LDAP?

</div>
<div class="flashcard-back">

**R:** Active Directory es un servicio LDAP, por lo que se puede consultar y modificar usando herramientas LDAP estándar:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son Mapeo de UIDs/GIDs (idmap)?

</div>
<div class="flashcard-back">

**R:** El mapeo de identificadores entre Windows (SIDs) y Linux (UIDs/GIDs) es fundamental:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son Esquema de Active Directory?

</div>
<div class="flashcard-back">

**R:** - El esquema define los tipos de objetos y atributos disponibles en AD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `samba-tool user/group` para gestión completa de usuarios y grupos AD

</div>
</div>

---

