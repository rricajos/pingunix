---
title: "351.1 - Ejercicios: Conceptos y Teoría"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "351 - Virtualización Completa"
subtema: "351.1"
peso: 6
tags:
  - lpic-3
  - tema-351
  - ejercicios
  - virtualizacion
  - kvm
---

# Ejercicios - 351.1 Conceptos y Teoría

### Pregunta 1
¿Qué tipo de hipervisor se ejecuta directamente sobre el hardware sin un sistema operativo anfitrión?

a) Hipervisor Tipo 2
b) Hipervisor Tipo 1
c) Hipervisor Tipo 3
d) Hipervisor Hosted

<details><summary>Respuesta</summary>

**b) Hipervisor Tipo 1**

Los hipervisores Tipo 1 (bare-metal) se ejecutan directamente sobre el hardware. Ejemplos: Xen, VMware ESXi, KVM. Los Tipo 2 se ejecutan como aplicación dentro de un SO anfitrión.
</details>

### Pregunta 2
¿Qué comando permite verificar si un procesador Intel soporta virtualización por hardware?

a) `grep -c svm /proc/cpuinfo`
b) `lsmod | grep vt-x`
c) `grep -c vmx /proc/cpuinfo`
d) `cat /sys/kernel/kvm/enabled`

<details><summary>Respuesta</summary>

**c) `grep -c vmx /proc/cpuinfo`**

La flag `vmx` en `/proc/cpuinfo` indica soporte Intel VT-x. La flag `svm` corresponde a AMD-V. Ambas son necesarias para usar KVM.
</details>

### Pregunta 3
¿Qué módulo del kernel proporciona aceleración de red moviendo el procesamiento de paquetes del espacio de usuario al kernel?

a) `kvm-intel`
b) `virtio-net`
c) `vhost-net`
d) `bridge`

<details><summary>Respuesta</summary>

**c) `vhost-net`**

El módulo `vhost-net` mueve el procesamiento de paquetes de red de QEMU (espacio de usuario) al kernel, reduciendo latencia y consumo de CPU significativamente.
</details>

### Pregunta 4
¿Qué tecnología permite que un único dispositivo PCI físico se presente como múltiples dispositivos virtuales independientes?

a) VT-d
b) IOMMU
c) PCI Passthrough
d) SR-IOV

<details><summary>Respuesta</summary>

**d) SR-IOV**

SR-IOV (Single Root I/O Virtualization) permite que un dispositivo físico (Physical Function) genere múltiples Virtual Functions que se asignan directamente a las VMs. VT-d/IOMMU permiten passthrough de dispositivos completos.
</details>

### Pregunta 5
¿Cuál es la diferencia principal entre paravirtualización y virtualización completa?

a) La paravirtualización requiere hardware VT-x, la completa no
b) La paravirtualización requiere que el SO guest sea modificado o use drivers especiales
c) La virtualización completa ofrece mejor rendimiento que la paravirtualización
d) La paravirtualización solo funciona con hipervisores Tipo 2

<details><summary>Respuesta</summary>

**b) La paravirtualización requiere que el SO guest sea modificado o use drivers especiales**

En paravirtualización, el guest es consciente del hipervisor y usa hypercalls para comunicarse directamente. Esto requiere modificaciones en el kernel o drivers PV (como virtio), pero ofrece mejor rendimiento que la virtualización completa pura.
</details>

### Pregunta 6
¿Cómo se clasifica KVM en términos de tipo de hipervisor?

a) Tipo 2, ya que se ejecuta sobre Linux
b) Tipo 1, ya que convierte el kernel Linux en hipervisor
c) Tipo 1.5, categoría híbrida
d) Depende de si se usa con QEMU o sin él

<details><summary>Respuesta</summary>

**b) Tipo 1, ya que convierte el kernel Linux en hipervisor**

Aunque KVM se ejecuta sobre un kernel Linux, al cargarse como módulo (`kvm.ko`) convierte el propio kernel en un hipervisor bare-metal, clasificándose como Tipo 1. El kernel Linux pasa a ser el hipervisor.
</details>

### Pregunta 7
¿Qué mecanismo de gestión de memoria utiliza traducción de direcciones en hardware con dos niveles de tablas de páginas?

a) Shadow Page Tables
b) Balloon Driver
c) EPT (Extended Page Tables)
d) KSM (Kernel Same-page Merging)

<details><summary>Respuesta</summary>

**c) EPT (Extended Page Tables)**

EPT (Intel) y NPT/RVI (AMD) realizan la traducción de direcciones Guest Virtual → Guest Physical → Host Physical directamente en hardware, con mejor rendimiento que las Shadow Page Tables que lo hacen por software.
</details>

### Pregunta 8
¿Qué parámetro debe añadirse a la línea de arranque del kernel para activar IOMMU en sistemas Intel?

a) `kvm.iommu=on`
b) `intel_iommu=on`
c) `iommu=intel`
d) `vt-d=enable`

<details><summary>Respuesta</summary>

**b) `intel_iommu=on`**

Se añade en `/etc/default/grub` en la variable `GRUB_CMDLINE_LINUX`. Para AMD se usa `amd_iommu=on`. Adicionalmente `iommu=pt` mejora el rendimiento en modo passthrough.
</details>

### Pregunta 9
¿Cuál de las siguientes afirmaciones sobre QEMU es correcta?

a) QEMU solo puede funcionar como virtualizador, nunca como emulador
b) QEMU requiere siempre extensiones de hardware VT-x/AMD-V
c) QEMU puede emular arquitecturas diferentes a la del host sin necesidad de KVM
d) QEMU es un hipervisor Tipo 1 por sí mismo

<details><summary>Respuesta</summary>

**c) QEMU puede emular arquitecturas diferentes a la del host sin necesidad de KVM**

QEMU funciona como emulador puro (traduciendo instrucciones de cualquier arquitectura por software) o como virtualizador con KVM (ejecutando código nativo para la misma arquitectura). Sin KVM es mucho más lento pero puede emular ARM en x86, por ejemplo.
</details>

### Pregunta 10
¿Qué comando muestra la configuración actual de un switch Open vSwitch?

a) `ovs-vsctl list-bridges`
b) `ovs-vsctl show`
c) `ovs-ofctl show br0`
d) `brctl show`

<details><summary>Respuesta</summary>

**b) `ovs-vsctl show`**

`ovs-vsctl show` muestra la configuración completa de OVS incluyendo bridges, puertos e interfaces. `brctl show` es para bridges Linux estándar, no para OVS. `ovs-ofctl` gestiona reglas OpenFlow.
</details>

### Pregunta 11

¿Qué diferencia fundamental existe entre emulación y virtualización?

a) La emulación es más rápida que la virtualización
b) La emulación traduce instrucciones por software y permite arquitecturas cruzadas; la virtualización ejecuta código nativo y requiere la misma arquitectura
c) La virtualización solo funciona con Linux; la emulación funciona con cualquier SO
d) No existe diferencia, ambos términos son sinónimos

<details><summary>Respuesta</summary>

**b) La emulación traduce instrucciones por software y permite arquitecturas cruzadas; la virtualización ejecuta código nativo y requiere la misma arquitectura**

La emulación simula completamente el hardware por software, permitiendo ejecutar código de una arquitectura en otra (por ejemplo ARM en x86), pero con rendimiento muy bajo. La virtualización ejecuta código nativo en la CPU con extensiones VT-x/AMD-V, obteniendo rendimiento casi nativo pero limitándose a la misma arquitectura host/guest.
</details>

### Pregunta 12

¿Qué tecnología Intel permite asignar dispositivos PCI físicos directamente a máquinas virtuales (device passthrough)?

a) Intel VT-x
b) Intel VT-d (IOMMU)
c) Intel EPT
d) Intel SR-IOV

<details><summary>Respuesta</summary>

**b) Intel VT-d (IOMMU)**

Intel VT-d (Virtualization Technology for Directed I/O) implementa IOMMU, que permite aislar y asignar dispositivos PCI directamente a VMs con acceso DMA seguro. VT-x es para virtualización de CPU, EPT para gestión de memoria y SR-IOV es una especificación PCI-SIG para compartir dispositivos.
</details>

### Pregunta 13

¿Qué mecanismo de gestión de memoria virtualizada mantiene copias sincronizadas de las tablas de páginas del guest por software?

a) EPT (Extended Page Tables)
b) NPT (Nested Page Tables)
c) Shadow Page Tables
d) KSM (Kernel Same-page Merging)

<details><summary>Respuesta</summary>

**c) Shadow Page Tables**

Las Shadow Page Tables son un mecanismo por software donde el hipervisor intercepta las modificaciones a las tablas de páginas del guest y mantiene una copia "sombra" sincronizada que mapea directamente a direcciones físicas del host. Es más lento y consume más CPU que EPT/NPT que lo hacen por hardware.
</details>

### Pregunta 14

¿Qué driver se utiliza para vincular un dispositivo PCI al subsistema VFIO para device passthrough?

a) virtio-pci
b) vfio-pci
c) pci-stub
d) xen-pciback

<details><summary>Respuesta</summary>

**b) vfio-pci**

El driver `vfio-pci` (Virtual Function I/O) se utiliza para desvincular un dispositivo PCI de su driver original y prepararlo para el passthrough a una VM. VFIO proporciona acceso DMA seguro gracias a IOMMU. `pci-stub` es una alternativa más antigua y menos segura.
</details>

### Pregunta 15

¿Qué tipo de virtualización utiliza "hypercalls" para que el SO guest se comunique directamente con el hipervisor?

a) Virtualización completa (full virtualization)
b) Emulación
c) Paravirtualización
d) Virtualización asistida por hardware

<details><summary>Respuesta</summary>

**c) Paravirtualización**

En paravirtualización, el SO guest es consciente de que está virtualizado y utiliza hypercalls (llamadas al hipervisor) en lugar de instrucciones privilegiadas de hardware. Esto requiere modificar el kernel del guest o usar drivers especiales (como virtio), pero ofrece mejor rendimiento en operaciones de E/S.
</details>

### Pregunta 16

¿Cuál es el propósito principal de los drivers virtio en entornos de virtualización?

a) Emular hardware real para máxima compatibilidad
b) Proporcionar drivers paravirtualizados de alto rendimiento para E/S (disco, red, etc.)
c) Gestionar la migración en vivo de máquinas virtuales
d) Sustituir las extensiones VT-x del procesador

<details><summary>Respuesta</summary>

**b) Proporcionar drivers paravirtualizados de alto rendimiento para E/S (disco, red, etc.)**

Los drivers virtio son una interfaz estandarizada para dispositivos paravirtualizados en KVM/QEMU. Incluyen virtio-net (red), virtio-blk/virtio-scsi (disco), virtio-serial y otros. Al comunicarse directamente con el hipervisor sin emular hardware real, ofrecen rendimiento significativamente superior.
</details>

### Pregunta 17

¿Qué protocolo permite a Open vSwitch implementar redes definidas por software (SDN)?

a) STP (Spanning Tree Protocol)
b) LACP (Link Aggregation Control Protocol)
c) OpenFlow
d) LLDP (Link Layer Discovery Protocol)

<details><summary>Respuesta</summary>

**c) OpenFlow**

Open vSwitch soporta OpenFlow, el protocolo estándar para SDN (Software Defined Networking). OpenFlow permite a un controlador centralizado programar las reglas de flujo del switch, decidiendo cómo se reenvía, modifica o descarta el tráfico de red. Esto es fundamental en entornos cloud y virtualización empresarial.
</details>

### Pregunta 18

¿Qué URI de libvirt se utiliza para conectar a un hipervisor KVM/QEMU remoto a través de SSH?

a) `qemu:///system`
b) `qemu+ssh://host/system`
c) `ssh://host/qemu`
d) `kvm+ssh://host/system`

<details><summary>Respuesta</summary>

**b) `qemu+ssh://host/system`**

La URI `qemu+ssh://usuario@host/system` establece una conexión cifrada vía SSH al demonio libvirtd del host remoto. `qemu:///system` (con triple barra) es solo para conexión local. El esquema `qemu+tcp` es posible pero no cifrado sin configuración adicional.
</details>

### Pregunta 19

¿Cuántas líneas de código tiene aproximadamente el kernel module de WireGuard, destacado por su simplicidad frente a otras implementaciones VPN?

a) ~400 líneas
b) ~4.000 líneas
c) ~40.000 líneas
d) ~400.000 líneas

<details><summary>Respuesta</summary>

**b) ~4.000 líneas**

WireGuard destaca por su base de código extremadamente pequeña de aproximadamente 4.000 líneas, lo que facilita su auditoría de seguridad. En comparación, implementaciones como OpenVPN o IPsec tienen bases de código mucho mayores, lo que incrementa la superficie de ataque potencial.
</details>

### Pregunta 20

¿Qué módulo de kernel es necesario cargar para usar KVM en un procesador AMD?

a) `kvm-intel`
b) `kvm-amd`
c) `amd-v`
d) `svm`

<details><summary>Respuesta</summary>

**b) `kvm-amd`**

Para procesadores AMD se carga `kvm-amd.ko` (que utiliza las extensiones AMD-V/SVM). Para Intel se carga `kvm-intel.ko` (que utiliza VT-x/VMX). En ambos casos, el módulo principal `kvm.ko` también debe estar cargado, ya que proporciona la infraestructura base de virtualización.
</details>

### Pregunta 21

¿Qué comando verifica si el procesador del host soporta extensiones de virtualización AMD-V?

<input type="text" class="fill-blank" data-answer="grep -c svm /proc/cpuinfo" data-alt="grep svm /proc/cpuinfo,egrep svm /proc/cpuinfo" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep -c svm /proc/cpuinfo**

La flag `svm` en `/proc/cpuinfo` indica soporte para AMD-V (Secure Virtual Machine). Si el resultado es mayor que 0, el procesador soporta virtualización por hardware. Para Intel, la flag equivalente es `vmx`.
</details>

### Pregunta 22

¿Qué comando crea un bridge en Open vSwitch llamado br0?

<input type="text" class="fill-blank" data-answer="ovs-vsctl add-br br0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ovs-vsctl add-br br0**

`ovs-vsctl add-br` crea un nuevo bridge virtual en Open vSwitch. Posteriormente se pueden añadir puertos con `ovs-vsctl add-port br0 eth0`. A diferencia de `brctl` (bridges Linux estándar), OVS soporta funcionalidades avanzadas como OpenFlow, VLAN, VXLAN y GRE.
</details>

### Pregunta 23

¿Qué comando activa 4 Virtual Functions SR-IOV en la interfaz de red eth0?

<input type="text" class="fill-blank" data-answer="echo 4 > /sys/class/net/eth0/device/sriov_numvfs" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**echo 4 > /sys/class/net/eth0/device/sriov_numvfs**

Escribir el número deseado de VFs en el archivo `sriov_numvfs` del dispositivo activa SR-IOV. Cada Virtual Function se puede asignar directamente a una VM mediante passthrough, proporcionando rendimiento de red casi nativo sin la sobrecarga de la emulación de red.
</details>

### Pregunta 24

¿Qué comando carga el módulo principal de KVM en el kernel Linux?

<input type="text" class="fill-blank" data-answer="modprobe kvm" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**modprobe kvm**

`modprobe kvm` carga el módulo principal de KVM que proporciona la infraestructura base de virtualización. Después se debe cargar el módulo específico del procesador: `modprobe kvm-intel` para Intel VT-x o `modprobe kvm-amd` para AMD-V. Una vez cargados, el dispositivo `/dev/kvm` estará disponible.
</details>

### Pregunta 25

¿Qué comando verifica que los grupos IOMMU están configurados correctamente en el sistema?

<input type="text" class="fill-blank" data-answer="find /sys/kernel/iommu_groups/ -type l" data-alt="dmesg | grep -i iommu" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find /sys/kernel/iommu_groups/ -type l**

Este comando lista los enlaces simbólicos dentro de los grupos IOMMU, mostrando qué dispositivos PCI pertenecen a cada grupo. Si el directorio está vacío o no existe, IOMMU no está habilitado. Se debe verificar que `intel_iommu=on` (o `amd_iommu=on`) esté presente en los parámetros de arranque del kernel.
</details>
