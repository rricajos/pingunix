---
title: "305.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.2"
---

# Flashcards: 305.2 - Freeipa Gestion De Entidades

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Los comandos siguen el patrón `ipa ENTIDAD-ACCIÓN`. Las acciones comunes son: `a...

</div>
<div class="flashcard-back">

**R:** Los comandos siguen el patrón `ipa ENTIDAD-ACCIÓN`. Las acciones comunes son: `add`, `mod`, `del`, `find`, `show`, `enable`, `disable`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: FreeIPA soporta grupos anidados (un grupo como miembro de otro grupo). Los grupo...

</div>
<div class="flashcard-back">

**R:** FreeIPA soporta grupos anidados (un grupo como miembro de otro grupo). Los grupos externos se usan para contener SIDs de Active Directory en relaciones de confianza.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: La inscripción con OTP (One-Time Password) permite inscribir clientes sin propor...

</div>
<div class="flashcard-back">

**R:** La inscripción con OTP (One-Time Password) permite inscribir clientes sin proporcionar credenciales de administrador. El OTP se genera con `--random` y se usa una sola vez.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Por defecto existe la regla `allow_all` que permite acceso total. Se debe deshab...

</div>
<div class="flashcard-back">

**R:** Por defecto existe la regla `allow_all` que permite acceso total. Se debe deshabilitar antes de que las reglas HBAC personalizadas tengan efecto. `ipa hbactest` permite verificar si un acceso sería permitido o denegado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: Las reglas sudo en FreeIPA se componen de: usuarios (quién), hosts (dónde), coma...

</div>
<div class="flashcard-back">

**R:** Las reglas sudo en FreeIPA se componen de: usuarios (quién), hosts (dónde), comandos permitidos (qué) y RunAs (como quién). Los comandos se agrupan en `sudocmdgroup` para facilitar la gestión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: Las políticas de contraseñas pueden definirse por grupo con diferentes prioridad...

</div>
<div class="flashcard-back">

**R:** Las políticas de contraseñas pueden definirse por grupo con diferentes prioridades. La política con menor número de prioridad se aplica primero. La política global se aplica a todos si no hay una más específica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-007">
<div class="flashcard-front">

**P:** Tip de examen: Automember usa expresiones regulares sobre atributos de la entidad para determin...

</div>
<div class="flashcard-back">

**R:** Automember usa expresiones regulares sobre atributos de la entidad para determinar la pertenencia a grupos. Las reglas se aplican automáticamente al crear nuevas entidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-008">
<div class="flashcard-front">

**P:** Tip de examen: ID Views permiten que un mismo usuario tenga diferentes UIDs o directorios home ...

</div>
<div class="flashcard-back">

**R:** ID Views permiten que un mismo usuario tenga diferentes UIDs o directorios home en diferentes hosts. Son útiles para migración o para integrar servidores legacy con atributos POSIX diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `ipa hbacrule-add`?

</div>
<div class="flashcard-back">

**R:** Crear regla HBAC

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** FreeIPA proporciona una gestión centralizada de identidades que incluye usuarios, grupos, hosts, reglas de control de acceso basado en host (HBAC), reglas sudo, políticas de contraseñas y más. Todas la

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Reglas de automember?

</div>
<div class="flashcard-back">

**R:** Automember asigna automáticamente usuarios o hosts a grupos basándose en sus atributos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son ID Views?

</div>
<div class="flashcard-back">

**R:** ID Views permiten sobrescribir atributos POSIX de usuarios y grupos por host:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son ipa-getkeytab?

</div>
<div class="flashcard-back">

**R:** Gestiona keytabs Kerberos para servicios:

</div>
</div>

---

