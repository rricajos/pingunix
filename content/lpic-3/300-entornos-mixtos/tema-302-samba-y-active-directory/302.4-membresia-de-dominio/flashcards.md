---
title: "302.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.4"
---

# Flashcards: 302.4 - Membresia De Dominio

> 7 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `net ads join` es el comando principal para unir un servidor Linux a un dominio ...

</div>
<div class="flashcard-back">

**R:** `net ads join` es el comando principal para unir un servidor Linux a un dominio AD. Requiere credenciales de administrador del dominio y Kerberos funcional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: SSSD es preferido para autenticación de usuarios en estaciones de trabajo Linux....

</div>
<div class="flashcard-back">

**R:** SSSD es preferido para autenticación de usuarios en estaciones de trabajo Linux. Winbind es necesario cuando el servidor también comparte archivos vía Samba (SMB).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conocer `kinit` (obtener ticket), `klist` (listar tickets) y `kdestroy` (destrui...

</div>
<div class="flashcard-back">

**R:** Conocer `kinit` (obtener ticket), `klist` (listar tickets) y `kdestroy` (destruir tickets). El ticket TGT tiene una validez predeterminada de 10 horas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-004">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre la configuración de un servidor Linux como miembro de un dominio Active Directory, incluyendo los métodos de unión (net ads, realm), integración con SSSD y winbind, configuración de

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-005">
<div class="flashcard-front">

**P:** Que es/son Unión al dominio con realm join?

</div>
<div class="flashcard-back">

**R:** `realm` (de SSSD/realmd) es una alternativa moderna a `net ads join`:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-006">
<div class="flashcard-front">

**P:** Que es/son SSSD para integración con AD?

</div>
<div class="flashcard-back">

**R:** SSSD (System Security Services Daemon) es una alternativa a winbind para integración con AD:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-007">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `net ads join` y `realm join` son los dos métodos principales de unión a AD

</div>
</div>

---

