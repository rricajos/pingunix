---
title: "351.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.4"
---

# Flashcards: 351.4 - Libvirt

> 10 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: La diferencia entre `qemu:///system` y `qemu:///session` es crucial. `system` ej...

</div>
<div class="flashcard-back">

**R:** La diferencia entre `qemu:///system` y `qemu:///session` es crucial. `system` ejecuta VMs como root con acceso completo a redes bridge. `session` ejecuta VMs como usuario normal con red NAT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `define` crea una VM persistente (sobrevive reinicios del host). `create` crea u...

</div>
<div class="flashcard-back">

**R:** `define` crea una VM persistente (sobrevive reinicios del host). `create` crea una VM transitoria (desaparece al apagarse). `undefine` elimina la definición pero NO los discos a menos que se use `--remove-all-storage`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: La migración en vivo (`--live`) transfiere la memoria mientras la VM sigue funci...

</div>
<div class="flashcard-back">

**R:** La migración en vivo (`--live`) transfiere la memoria mientras la VM sigue funcionando. La opción `--copy-storage-all` permite migrar sin almacenamiento compartido copiando los discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `qemu:///system`?

</div>
<div class="flashcard-back">

**R:** KVM/QEMU local con privilegios de sistema

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `qemu+ssh://host/system`?

</div>
<div class="flashcard-back">

**R:** KVM/QEMU remoto vía SSH

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `qemu+tcp://host/system`?

</div>
<div class="flashcard-back">

**R:** KVM/QEMU remoto vía TCP

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `xen:///`?

</div>
<div class="flashcard-back">

**R:** Xen local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-008">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Libvirt es la capa de abstracción estándar para gestionar plataformas de virtualización en Linux. Con un peso de 9 puntos, este es el subtema más importante de toda la especialidad LPIC-3 305. Proporci

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-009">
<div class="flashcard-front">

**P:** Que es/son virt-install?

</div>
<div class="flashcard-back">

**R:** Herramienta para crear VMs de forma automatizada:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-010">
<div class="flashcard-front">

**P:** Que es/son virt-manager?

</div>
<div class="flashcard-back">

**R:** Interfaz gráfica para gestionar VMs a través de libvirt. Permite:

</div>
</div>

---

