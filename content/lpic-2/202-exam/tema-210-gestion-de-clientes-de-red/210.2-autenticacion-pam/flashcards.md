---
title: "210.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.2"
---

# Flashcards: 210.2 - Autenticacion Pam

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Memoriza los cuatro tipos de módulos PAM y qué función cumple cada uno. Es una d...

</div>
<div class="flashcard-back">

**R:** Memoriza los cuatro tipos de módulos PAM y qué función cumple cada uno. Es una de las preguntas más frecuentes del tema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: La diferencia entre `required` y `requisite` es clave. `required` continúa evalu...

</div>
<div class="flashcard-back">

**R:** La diferencia entre `required` y `requisite` es clave. `required` continúa evaluando (para no revelar qué módulo falló), mientras que `requisite` detiene inmediatamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Si existe `/etc/nologin`, solo root puede iniciar sesión. El contenido del archi...

</div>
<div class="flashcard-back">

**R:** Si existe `/etc/nologin`, solo root puede iniciar sesión. El contenido del archivo se muestra como mensaje a los usuarios rechazados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `limits.conf` requiere que `pam_limits.so` esté habilitado en la sesión PAM corr...

</div>
<div class="flashcard-back">

**R:** `limits.conf` requiere que `pam_limits.so` esté habilitado en la sesión PAM correspondiente. Sin la línea `session required pam_limits.so`, los límites no se aplicarán.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `retry`?

</div>
<div class="flashcard-back">

**R:** Número de intentos permitidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `minlen`?

</div>
<div class="flashcard-back">

**R:** Longitud mínima de la contraseña

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `dcredit`?

</div>
<div class="flashcard-back">

**R:** Crédito por dígitos (negativo = requeridos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `ucredit`?

</div>
<div class="flashcard-back">

**R:** Crédito por mayúsculas (negativo = requeridas)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `lcredit`?

</div>
<div class="flashcard-back">

**R:** Crédito por minúsculas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción a PAM?

</div>
<div class="flashcard-back">

**R:** PAM (Pluggable Authentication Modules) es un framework que permite a las aplicaciones de Linux delegar la autenticación a módulos configurables de forma independiente. Gracias a PAM, las aplicaciones n

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Arquitectura de PAM?

</div>
<div class="flashcard-back">

**R:** PAM organiza la autenticación en cuatro tipos de módulos (grupos funcionales):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son Flags de control?

</div>
<div class="flashcard-back">

**R:** Los flags de control determinan cómo se comporta la pila PAM cuando un módulo tiene éxito o falla:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son Archivo /etc/security/limits.conf?

</div>
<div class="flashcard-back">

**R:** Define límites de recursos para usuarios y grupos. Es leído por `pam_limits.so`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-014">
<div class="flashcard-front">

**P:** Que es/son Orden de evaluación?

</div>
<div class="flashcard-back">

**R:** PAM evalúa los módulos de arriba hacia abajo dentro de cada tipo. El resultado final depende de la combinación de los flags de control:

</div>
</div>

---

