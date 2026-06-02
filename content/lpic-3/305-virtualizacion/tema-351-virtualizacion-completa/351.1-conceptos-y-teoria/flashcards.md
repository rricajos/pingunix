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

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué tipo de hipervisor se ejecuta directamente sobre el hardware sin un sistema operativo anfitrión?

</div>
<div class="flashcard-back">

**R:** b) Hipervisor Tipo 1. Los hipervisores Tipo 1 (bare-metal) se ejecutan directamente sobre el hardware. Ejemplos: Xen, VMware ESXi, KVM. Los Tipo 2 se ejecutan como aplicación dentro de un SO anfitrión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando permite verificar si un procesador Intel soporta virtualización por hardware?

</div>
<div class="flashcard-back">

**R:** c) `grep -c vmx /proc/cpuinfo`. La flag `vmx` en `/proc/cpuinfo` indica soporte Intel VT-x. La flag `svm` corresponde a AMD-V. Ambas son necesarias para usar KVM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué módulo del kernel proporciona aceleración de red moviendo el procesamiento de paquetes del espacio de usuario al kernel?

</div>
<div class="flashcard-back">

**R:** c) `vhost-net`. El módulo `vhost-net` mueve el procesamiento de paquetes de red de QEMU (espacio de usuario) al kernel, reduciendo latencia y consumo de CPU significativamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué tecnología permite que un único dispositivo PCI físico se presente como múltiples dispositivos virtuales independientes?

</div>
<div class="flashcard-back">

**R:** d) SR-IOV. SR-IOV (Single Root I/O Virtualization) permite que un dispositivo físico (Physical Function) genere múltiples Virtual Functions que se asignan directamente a las VMs. VT-d/IOMMU permiten passthrough de dispositivos completos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre paravirtualización y virtualización completa?

</div>
<div class="flashcard-back">

**R:** b) La paravirtualización requiere que el SO guest sea modificado o use drivers especiales. En paravirtualización, el guest es consciente del hipervisor y usa hypercalls para comunicarse directamente. Esto requiere modificaciones en el kernel o drivers PV (como virtio), pero ofrece mejor rendimiento que la virtualización completa pura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-006">
<div class="flashcard-front">

**P:** ¿Cómo se clasifica KVM en términos de tipo de hipervisor?

</div>
<div class="flashcard-back">

**R:** b) Tipo 1, ya que convierte el kernel Linux en hipervisor. Aunque KVM se ejecuta sobre un kernel Linux, al cargarse como módulo (`kvm.ko`) convierte el propio kernel en un hipervisor bare-metal, clasificándose como Tipo 1. El kernel Linux pasa a ser el hipervisor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué mecanismo de gestión de memoria utiliza traducción de direcciones en hardware con dos niveles de tablas de páginas?

</div>
<div class="flashcard-back">

**R:** c) EPT (Extended Page Tables). EPT (Intel) y NPT/RVI (AMD) realizan la traducción de direcciones Guest Virtual → Guest Physical → Host Physical directamente en hardware, con mejor rendimiento que las Shadow Page Tables que lo hacen por software.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué parámetro debe añadirse a la línea de arranque del kernel para activar IOMMU en sistemas Intel?

</div>
<div class="flashcard-back">

**R:** b) `intel_iommu=on`. Se añade en `/etc/default/grub` en la variable `GRUB_CMDLINE_LINUX`. Para AMD se usa `amd_iommu=on`. Adicionalmente `iommu=pt` mejora el rendimiento en modo passthrough.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes afirmaciones sobre QEMU es correcta?

</div>
<div class="flashcard-back">

**R:** c) QEMU puede emular arquitecturas diferentes a la del host sin necesidad de KVM. QEMU funciona como emulador puro (traduciendo instrucciones de cualquier arquitectura por software) o como virtualizador con KVM (ejecutando código nativo para la misma arquitectura). Sin KVM es mucho más lento pero puede emular ARM en x86, por ejemplo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la configuración actual de un switch Open vSwitch?

</div>
<div class="flashcard-back">

**R:** b) `ovs-vsctl show`. `ovs-vsctl show` muestra la configuración completa de OVS incluyendo bridges, puertos e interfaces. `brctl show` es para bridges Linux estándar, no para OVS. `ovs-ofctl` gestiona reglas OpenFlow.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué diferencia fundamental existe entre emulación y virtualización?

</div>
<div class="flashcard-back">

**R:** b) La emulación traduce instrucciones por software y permite arquitecturas cruzadas; la virtualización ejecuta código nativo y requiere la misma arquitectura. La emulación simula completamente el hardware por software, permitiendo ejecutar código de una arquitectura en otra (por ejemplo ARM en x86), pero con rendimiento muy bajo. La virtualización ejecuta código nativo en la CPU con extensiones VT-x/AMD-V, obteniendo rendimiento casi nativo pero limitándose a la misma arquitectura host/guest.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tecnología Intel permite asignar dispositivos PCI físicos directamente a máquinas virtuales (device passthrough)?

</div>
<div class="flashcard-back">

**R:** b) Intel VT-d (IOMMU). Intel VT-d (Virtualization Technology for Directed I/O) implementa IOMMU, que permite aislar y asignar dispositivos PCI directamente a VMs con acceso DMA seguro. VT-x es para virtualización de CPU, EPT para gestión de memoria y SR-IOV es una especificación PCI-SIG para compartir dispositivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué mecanismo de gestión de memoria virtualizada mantiene copias sincronizadas de las tablas de páginas del guest por software?

</div>
<div class="flashcard-back">

**R:** c) Shadow Page Tables. Las Shadow Page Tables son un mecanismo por software donde el hipervisor intercepta las modificaciones a las tablas de páginas del guest y mantiene una copia "sombra" sincronizada que mapea directamente a direcciones físicas del host. Es más lento y consume más CPU que EPT/NPT que lo hacen por hardware.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué driver se utiliza para vincular un dispositivo PCI al subsistema VFIO para device passthrough?

</div>
<div class="flashcard-back">

**R:** b) vfio-pci. El driver `vfio-pci` (Virtual Function I/O) se utiliza para desvincular un dispositivo PCI de su driver original y prepararlo para el passthrough a una VM. VFIO proporciona acceso DMA seguro gracias a IOMMU. `pci-stub` es una alternativa más antigua y menos segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué tipo de virtualización utiliza "hypercalls" para que el SO guest se comunique directamente con el hipervisor?

</div>
<div class="flashcard-back">

**R:** c) Paravirtualización. En paravirtualización, el SO guest es consciente de que está virtualizado y utiliza hypercalls (llamadas al hipervisor) en lugar de instrucciones privilegiadas de hardware. Esto requiere modificar el kernel del guest o usar drivers especiales (como virtio), pero ofrece mejor rendimiento en operaciones de E/S.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-016">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito principal de los drivers virtio en entornos de virtualización?

</div>
<div class="flashcard-back">

**R:** b) Proporcionar drivers paravirtualizados de alto rendimiento para E/S (disco, red, etc.). Los drivers virtio son una interfaz estandarizada para dispositivos paravirtualizados en KVM/QEMU. Incluyen virtio-net (red), virtio-blk/virtio-scsi (disco), virtio-serial y otros. Al comunicarse directamente con el hipervisor sin emular hardware real, ofrecen rendimiento significativamente superior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué protocolo permite a Open vSwitch implementar redes definidas por software (SDN)?

</div>
<div class="flashcard-back">

**R:** c) OpenFlow. Open vSwitch soporta OpenFlow, el protocolo estándar para SDN (Software Defined Networking). OpenFlow permite a un controlador centralizado programar las reglas de flujo del switch, decidiendo cómo se reenvía, modifica o descarta el tráfico de red. Esto es fundamental en entornos cloud y virtualización empresarial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué URI de libvirt se utiliza para conectar a un hipervisor KVM/QEMU remoto a través de SSH?

</div>
<div class="flashcard-back">

**R:** b) `qemu+ssh://host/system`. La URI `qemu+ssh://usuario@host/system` establece una conexión cifrada vía SSH al demonio libvirtd del host remoto. `qemu:///system` (con triple barra) es solo para conexión local. El esquema `qemu+tcp` es posible pero no cifrado sin configuración adicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-019">
<div class="flashcard-front">

**P:** ¿Cuántas líneas de código tiene aproximadamente el kernel module de WireGuard, destacado por su simplicidad frente a otras implementaciones VPN?

</div>
<div class="flashcard-back">

**R:** b) ~4.000 líneas. WireGuard destaca por su base de código extremadamente pequeña de aproximadamente 4.000 líneas, lo que facilita su auditoría de seguridad. En comparación, implementaciones como OpenVPN o IPsec tienen bases de código mucho mayores, lo que incrementa la superficie de ataque potencial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué módulo de kernel es necesario cargar para usar KVM en un procesador AMD?

</div>
<div class="flashcard-back">

**R:** b) `kvm-amd`. Para procesadores AMD se carga `kvm-amd.ko` (que utiliza las extensiones AMD-V/SVM). Para Intel se carga `kvm-intel.ko` (que utiliza VT-x/VMX). En ambos casos, el módulo principal `kvm.ko` también debe estar cargado, ya que proporciona la infraestructura base de virtualización.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando verifica si el procesador del host soporta extensiones de virtualización AMD-V?

</div>
<div class="flashcard-back">

**R:** grep -c svm /proc/cpuinfo. La flag `svm` en `/proc/cpuinfo` indica soporte para AMD-V (Secure Virtual Machine). Si el resultado es mayor que 0, el procesador soporta virtualización por hardware. Para Intel, la flag equivalente es `vmx`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando crea un bridge en Open vSwitch llamado br0?

</div>
<div class="flashcard-back">

**R:** ovs-vsctl add-br br0. `ovs-vsctl add-br` crea un nuevo bridge virtual en Open vSwitch. Posteriormente se pueden añadir puertos con `ovs-vsctl add-port br0 eth0`. A diferencia de `brctl` (bridges Linux estándar), OVS soporta funcionalidades avanzadas como OpenFlow, VLAN, VXLAN y GRE.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando activa 4 Virtual Functions SR-IOV en la interfaz de red eth0?

</div>
<div class="flashcard-back">

**R:** echo 4 > /sys/class/net/eth0/device/sriov_numvfs. Escribir el número deseado de VFs en el archivo `sriov_numvfs` del dispositivo activa SR-IOV. Cada Virtual Function se puede asignar directamente a una VM mediante passthrough, proporcionando rendimiento de red casi nativo sin la sobrecarga de la emulación de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando carga el módulo principal de KVM en el kernel Linux?

</div>
<div class="flashcard-back">

**R:** modprobe kvm. `modprobe kvm` carga el módulo principal de KVM que proporciona la infraestructura base de virtualización. Después se debe cargar el módulo específico del procesador: `modprobe kvm-intel` para Intel VT-x o `modprobe kvm-amd` para AMD-V. Una vez cargados, el dispositivo `/dev/kvm` estará disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando verifica que los grupos IOMMU están configurados correctamente en el sistema?

</div>
<div class="flashcard-back">

**R:** find /sys/kernel/iommu_groups/ -type l. Este comando lista los enlaces simbólicos dentro de los grupos IOMMU, mostrando qué dispositivos PCI pertenecen a cada grupo. Si el directorio está vacío o no existe, IOMMU no está habilitado. Se debe verificar que `intel_iommu=on` (o `amd_iommu=on`) esté presente en los parámetros de arranque del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.1">
</div>

<div class="flashcard" data-id="351.1-fc-026">
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

<div class="flashcard" data-id="351.1-fc-027">
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

<div class="flashcard" data-id="351.1-fc-028">
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

<div class="flashcard" data-id="351.1-fc-029">
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

<div class="flashcard" data-id="351.1-fc-030">
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

<div class="flashcard" data-id="351.1-fc-031">
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

<div class="flashcard" data-id="351.1-fc-032">
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

<div class="flashcard" data-id="351.1-fc-033">
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

<div class="flashcard" data-id="351.1-fc-034">
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

<div class="flashcard" data-id="351.1-fc-035">
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

<div class="flashcard" data-id="351.1-fc-036">
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

<div class="flashcard" data-id="351.1-fc-037">
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

<div class="flashcard" data-id="351.1-fc-038">
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

<div class="flashcard" data-id="351.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Resumen de Conceptos Clave?

</div>
<div class="flashcard-back">

**R:** | Concepto | Importancia para el examen |

</div>
</div>

---

