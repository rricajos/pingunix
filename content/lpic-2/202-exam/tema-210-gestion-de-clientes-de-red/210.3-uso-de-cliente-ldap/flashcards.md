---
title: "210.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.3"
---

# Flashcards: 210.3 - Uso De Cliente Ldap

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Entender la diferencia entre DN, RDN y Base DN es fundamental. El DN es la ruta ...

</div>
<div class="flashcard-back">

**R:** Entender la diferencia entre DN, RDN y Base DN es fundamental. El DN es la ruta completa, el RDN es el nombre relativo, y el Base DN es el punto de inicio de búsquedas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conocer la sintaxis LDIF es imprescindible: cada entrada empieza con `dn:`, las ...

</div>
<div class="flashcard-back">

**R:** Conocer la sintaxis LDIF es imprescindible: cada entrada empieza con `dn:`, las entradas se separan con líneas en blanco, y las modificaciones usan `changetype: modify` con `add`, `replace` o `delete`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Todos los comandos de cliente LDAP comparten las opciones `-x` (autenticación si...

</div>
<div class="flashcard-back">

**R:** Todos los comandos de cliente LDAP comparten las opciones `-x` (autenticación simple), `-D` (bind DN), `-W` (pedir contraseña) y `-H` (servidor). Memoriza estas opciones comunes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: SSSD es la forma recomendada actualmente para integrar LDAP con el sistema. Cono...

</div>
<div class="flashcard-back">

**R:** SSSD es la forma recomendada actualmente para integrar LDAP con el sistema. Conocer tanto la configuración tradicional (nss-ldap/pam_ldap) como la moderna (SSSD) es necesario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `cn: Juan García`?

</div>
<div class="flashcard-back">

**R:** > **Para el examen:** Entender la diferencia entre DN, RDN y Base DN es fundamental. El DN es la ruta completa, el RDN es el nombre relativo, y el Base DN es el punto de inicio de búsquedas.  ### ObjectClasses comunes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `top`?

</div>
<div class="flashcard-back">

**R:** Clase base obligatoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `person`?

</div>
<div class="flashcard-back">

**R:** Información básica de persona (cn, sn)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `organizationalPerson`?

</div>
<div class="flashcard-back">

**R:** Extensión de person con datos organizativos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `inetOrgPerson`?

</div>
<div class="flashcard-back">

**R:** Persona con datos de Internet (mail, uid)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Conceptos fundamentales de LDAP?

</div>
<div class="flashcard-back">

**R:** LDAP (Lightweight Directory Access Protocol) es un protocolo para acceder y gestionar servicios de directorio. Funciona sobre el puerto **389** (sin cifrar) y **636** (LDAPS con TLS/SSL).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Formato LDIF?

</div>
<div class="flashcard-back">

**R:** LDIF (LDAP Data Interchange Format) es el formato de texto para representar entradas LDAP y modificaciones.

</div>
</div>

---

