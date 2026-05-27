---
title: "332.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "332.3"
---

# Flashcards: 332.3 - Control De Recursos

> 16 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre ulimit (limites por sesion), limits.conf (limites p...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre ulimit (limites por sesion), limits.conf (limites persistentes por usuario/grupo) y cgroups (limites por grupo de procesos). Entiende cgroups v1 vs v2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `pam_limits` debe estar habilitado en PAM para que limits.conf surta efecto. Ver...

</div>
<div class="flashcard-back">

**R:** `pam_limits` debe estar habilitado en PAM para que limits.conf surta efecto. Verifica que existe la linea `session required pam_limits.so` en los archivos PAM correspondientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `systemctl set-property` aplica cambios persistentes por defecto (crea archivos ...

</div>
<div class="flashcard-back">

**R:** `systemctl set-property` aplica cambios persistentes por defecto (crea archivos drop-in). Usa `--runtime` para cambios temporales. `CPUQuota=200%` permite usar hasta 2 cores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `-n`?

</div>
<div class="flashcard-back">

**R:** Numero maximo de archivos abiertos (nofile)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `-u`?

</div>
<div class="flashcard-back">

**R:** Numero maximo de procesos (nproc)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `-f`?

</div>
<div class="flashcard-back">

**R:** Tamaño maximo de archivo creado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `-c`?

</div>
<div class="flashcard-back">

**R:** Tamaño maximo de core dump

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `-v`?

</div>
<div class="flashcard-back">

**R:** Memoria virtual maxima

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El control de recursos es esencial para la seguridad del sistema, ya que previene que un usuario o proceso consuma todos los recursos disponibles (CPU, memoria, procesos), lo cual podria provocar una d

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son ulimit?

</div>
<div class="flashcard-back">

**R:** `ulimit` establece limites de recursos para la sesion actual del shell y sus procesos hijos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son /etc/security/limits.conf?

</div>
<div class="flashcard-back">

**R:** Para hacer limites persistentes, se configuran en `/etc/security/limits.conf` o en archivos dentro de `/etc/security/limits.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Proteccion Contra Fork Bombs?

</div>
<div class="flashcard-back">

**R:** Una fork bomb es un proceso que se replica indefinidamente, consumiendo todos los recursos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son Cgroups v1?

</div>
<div class="flashcard-back">

**R:** Los Control Groups (cgroups) permiten limitar, contabilizar y aislar el uso de recursos de grupos de procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son Cgroups v2?

</div>
<div class="flashcard-back">

**R:** Cgroups v2 es la version unificada con una jerarquia unica. Es el valor por defecto en distribuciones modernas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son Control de Recursos con systemd?

</div>
<div class="flashcard-back">

**R:** systemd integra cgroups nativamente para gestionar recursos de servicios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-016">
<div class="flashcard-front">

**P:** Que es/son pam_limits?

</div>
<div class="flashcard-back">

**R:** El modulo `pam_limits` aplica los limites definidos en `/etc/security/limits.conf` durante la autenticacion.

</div>
</div>

---

