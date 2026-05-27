---
title: "332.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "332.1"
---

# Flashcards: 332.1 - Hardening Del Host

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5. Cubre un amplio rango de temas desde BIOS/UEFI hasta ...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5. Cubre un amplio rango de temas desde BIOS/UEFI hasta PAM y sysctl. Conoce los parametros de kernel mas importantes y las configuraciones de PAM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `kernel.randomize_va_space=2` activa ASLR completo (incluye heap, stack, mmap, V...

</div>
<div class="flashcard-back">

**R:** `kernel.randomize_va_space=2` activa ASLR completo (incluye heap, stack, mmap, VDSO). El valor 0 lo desactiva, 1 es parcial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `pam_pwquality` es el reemplazo moderno de `pam_cracklib`. Los valores negativos...

</div>
<div class="flashcard-back">

**R:** `pam_pwquality` es el reemplazo moderno de `pam_cracklib`. Los valores negativos en `dcredit`, `ucredit`, etc. indican el minimo requerido. La opcion `remember=12` en `pam_unix.so` impide reutilizar las ultimas 12 contraseñas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conoce que existen los CIS Benchmarks como referencia de hardening y que herrami...

</div>
<div class="flashcard-back">

**R:** Conoce que existen los CIS Benchmarks como referencia de hardening y que herramientas como Lynis y OpenSCAP permiten evaluar el cumplimiento automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.kptr_restrict`?

</div>
<div class="flashcard-back">

**R:** 2

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.dmesg_restrict`?

</div>
<div class="flashcard-back">

**R:** 1

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.randomize_va_space`?

</div>
<div class="flashcard-back">

**R:** 2

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.yama.ptrace_scope`?

</div>
<div class="flashcard-back">

**R:** 2

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.sysrq`?

</div>
<div class="flashcard-back">

**R:** 0

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El hardening (endurecimiento) del host es el proceso de reducir la superficie de ataque de un sistema Linux mediante la eliminacion de servicios innecesarios, la configuracion segura del kernel, la pro

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.1">
</div>

<div class="flashcard" data-id="332.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son USB Guard?

</div>
<div class="flashcard-back">

**R:** USBGuard controla que dispositivos USB pueden conectarse al sistema.

</div>
</div>

---

