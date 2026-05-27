---
title: "351.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.3"
---

# Flashcards: 351.3 - Qemu

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: La opción `-enable-kvm` o `-accel kvm` activa la aceleración KVM. Sin ella, QEMU...

</div>
<div class="flashcard-back">

**R:** La opción `-enable-kvm` o `-accel kvm` activa la aceleración KVM. Sin ella, QEMU funciona en modo emulación pura, mucho más lento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Los snapshots internos solo están soportados en formato qcow2. Las imágenes raw ...

</div>
<div class="flashcard-back">

**R:** Los snapshots internos solo están soportados en formato qcow2. Las imágenes raw no soportan snapshots.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Los snapshots externos usan copy-on-write: solo almacenan los bloques que han ca...

</div>
<div class="flashcard-back">

**R:** Los snapshots externos usan copy-on-write: solo almacenan los bloques que han cambiado respecto al backing file. Son más eficientes para workflows de ramificación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: SPICE ofrece mejor rendimiento para entornos de escritorio que VNC, soportando a...

</div>
<div class="flashcard-back">

**R:** SPICE ofrece mejor rendimiento para entornos de escritorio que VNC, soportando audio, USB remoto y copiar/pegar bidireccional. VNC es más universal y simple.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `-enable-kvm`?

</div>
<div class="flashcard-back">

**R:** Activar aceleración KVM

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `-m <MB>`?

</div>
<div class="flashcard-back">

**R:** Memoria RAM en MB

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `-smp <N>`?

</div>
<div class="flashcard-back">

**R:** Número de CPUs virtuales

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `-cpu host`?

</div>
<div class="flashcard-back">

**R:** Exponer las características reales de la CPU

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `-hda <imagen>`?

</div>
<div class="flashcard-back">

**R:** Disco duro primario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** QEMU (Quick Emulator) es un emulador y virtualizador genérico de código abierto. Puede funcionar como emulador puro (traduciendo instrucciones por software) o como virtualizador en combinación con KVM,

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son qemu-system-x86_64?

</div>
<div class="flashcard-back">

**R:** Comando principal para ejecutar máquinas virtuales x86_64:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Formatos de Imagen?

</div>
<div class="flashcard-back">

**R:** | Formato | Extensión | Características |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son QEMU Monitor?

</div>
<div class="flashcard-back">

**R:** Interfaz interactiva de control de QEMU accesible durante la ejecución:

</div>
</div>

---

