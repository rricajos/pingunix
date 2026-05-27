---
title: "351.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.1"
---

# Flashcards: 351.1 - Conceptos Y Teoria

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: KVM es un caso especial: convierte el kernel Linux en un hipervisor Tipo 1 media...

</div>
<div class="flashcard-back">

**R:** KVM es un caso especial: convierte el kernel Linux en un hipervisor Tipo 1 mediante un módulo del kernel (`kvm.ko`), aunque se ejecuta sobre Linux. Se clasifica oficialmente como Tipo 1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: VT-d/AMD-Vi es necesario para **device passthrough**. SR-IOV va un paso más allá...

</div>
<div class="flashcard-back">

**R:** VT-d/AMD-Vi es necesario para **device passthrough**. SR-IOV va un paso más allá permitiendo compartir un dispositivo entre múltiples VMs con rendimiento casi nativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: QEMU puede funcionar como emulador puro (cualquier arquitectura) o como virtuali...

</div>
<div class="flashcard-back">

**R:** QEMU puede funcionar como emulador puro (cualquier arquitectura) o como virtualizador con KVM (misma arquitectura, rendimiento casi nativo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: OVS se utiliza frecuentemente en entornos de virtualización empresarial y cloud ...

</div>
<div class="flashcard-back">

**R:** OVS se utiliza frecuentemente en entornos de virtualización empresarial y cloud (OpenStack) como alternativa al bridge Linux estándar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `kvm.ko`?

</div>
<div class="flashcard-back">

**R:** Módulo principal, infraestructura de virtualización

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `kvm-intel.ko`?

</div>
<div class="flashcard-back">

**R:** Soporte específico para Intel VT-x

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `kvm-amd.ko`?

</div>
<div class="flashcard-back">

**R:** Soporte específico para AMD-V

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `vhost-net`?

</div>
<div class="flashcard-back">

**R:** Aceleración de red en el kernel (bypass de QEMU)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `vhost-scsi`?

</div>
<div class="flashcard-back">

**R:** Aceleración de almacenamiento SCSI

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La virtualización permite ejecutar múltiples sistemas operativos simultáneamente sobre un mismo hardware físico. Este subtema constituye la base teórica fundamental para toda la especialidad LPIC-3 305

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Arquitectura KVM?

</div>
<div class="flashcard-back">

**R:** KVM (Kernel-based Virtual Machine) se implementa como módulos del kernel Linux:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Emulación vs Virtualización?

</div>
<div class="flashcard-back">

**R:** | Aspecto | Emulación | Virtualización |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Open vSwitch (OVS)?

</div>
<div class="flashcard-back">

**R:** Switch virtual de nivel empresarial que soporta protocolos como OpenFlow, VLAN, VXLAN, GRE y bonding.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son Libvirt como Capa de Abstracción?

</div>
<div class="flashcard-back">

**R:** Libvirt proporciona una API unificada para gestionar diferentes tecnologías de virtualización:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-015">
<div class="flashcard-front">

**P:** Que es/son Resumen de Conceptos Clave?

</div>
<div class="flashcard-back">

**R:** | Concepto | Importancia para el examen |

</div>
</div>

---

