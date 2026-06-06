---
title: "351.1 - Conceptos y Teoría de Virtualización"
tipo: teoria
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "351 - Virtualización Completa"
subtema: "351.1"
peso: 6
tags:
  - lpic-3
  - tema-351
  - virtualizacion
  - hypervisor
  - kvm
  - hardware-assisted
---

# 351.1 Conceptos y Teoría de Virtualización

## Introducción

La virtualización permite ejecutar múltiples sistemas operativos simultáneamente sobre un mismo hardware físico. Este subtema constituye la base teórica fundamental para toda la especialidad LPIC-3 305 y tiene un peso significativo de 6 puntos.

## Tipos de Hipervisores

### Hipervisor Tipo 1 (Bare-Metal)

Se ejecuta directamente sobre el hardware, sin un sistema operativo anfitrión intermedio.

| Característica | Descripción |
|---|---|
| Rendimiento | Alto, acceso directo al hardware |
| Latencia | Mínima |
| Ejemplos | Xen, VMware ESXi, Microsoft Hyper-V |
| Uso típico | Centros de datos, producción |

### Hipervisor Tipo 2 (Hosted)

Se ejecuta como una aplicación dentro de un sistema operativo anfitrión.

| Característica | Descripción |
|---|---|
| Rendimiento | Menor, pasa por el SO anfitrión |
| Latencia | Mayor |
| Ejemplos | VirtualBox, VMware Workstation, QEMU (sin KVM) |
| Uso típico | Desarrollo, pruebas |

> **Para el examen:** KVM es un caso especial: convierte el kernel Linux en un hipervisor Tipo 1 mediante un módulo del kernel (`kvm.ko`), aunque se ejecuta sobre Linux. Se clasifica oficialmente como Tipo 1.

## Virtualización Completa vs Paravirtualización

### Virtualización Completa (Full Virtualization)

El hipervisor presenta una réplica exacta del hardware al sistema guest. El SO invitado no necesita modificaciones.

```
┌─────────────────────────────────────┐
│         Guest OS (sin modificar)     │
├─────────────────────────────────────┤
│         Hardware Virtual Completo    │
├─────────────────────────────────────┤
│         Hipervisor                   │
├─────────────────────────────────────┤
│         Hardware Físico              │
└─────────────────────────────────────┘
```

### Paravirtualización (Para-virtualization)

El SO invitado es consciente de que está virtualizado y utiliza **hypercalls** para comunicarse directamente con el hipervisor.

```
┌─────────────────────────────────────┐
│     Guest OS (modificado/drivers PV) │
├─────────────────────────────────────┤
│     Hypercalls → Hipervisor          │
├─────────────────────────────────────┤
│     Hardware Físico                  │
└─────────────────────────────────────┘
```

| Aspecto | Virtualización Completa | Paravirtualización |
|---|---|---|
| Modificación del guest | No necesaria | Requiere drivers PV |
| Rendimiento | Bueno con HW assist | Excelente |
| Compatibilidad | Cualquier SO | Solo SO compatibles |
| Ejemplos | KVM + QEMU, VirtualBox | Xen PV, virtio drivers |

## Virtualización Asistida por Hardware

### Extensiones de CPU

- **Intel VT-x (vmx)**: Extensiones de virtualización de Intel que añaden un nuevo modo de ejecución para el hipervisor (VMX root/non-root).
- **AMD-V (svm)**: Equivalente de AMD, también conocido como AMD SVM (Secure Virtual Machine).

Verificar soporte en el procesador:

```bash
# Intel VT-x
grep -c vmx /proc/cpuinfo

# AMD-V
grep -c svm /proc/cpuinfo

# Verificar módulos KVM cargados
lsmod | grep kvm
```

### Extensiones de E/S

- **Intel VT-d / AMD-Vi (IOMMU)**: Permiten asignar dispositivos PCI directamente a las máquinas virtuales (device passthrough).
- **SR-IOV (Single Root I/O Virtualization)**: Permite que un único dispositivo físico (como una NIC) se presente como múltiples dispositivos virtuales independientes (Virtual Functions).

```bash
# Verificar IOMMU activo
dmesg | grep -i iommu

# Ver grupos IOMMU
find /sys/kernel/iommu_groups/ -type l

# Verificar SR-IOV en una NIC
lspci -vvv | grep -i "single root"
```

> **Para el examen:** VT-d/AMD-Vi es necesario para **device passthrough**. SR-IOV va un paso más allá permitiendo compartir un dispositivo entre múltiples VMs con rendimiento casi nativo.

## Arquitectura KVM

KVM (Kernel-based Virtual Machine) se implementa como módulos del kernel Linux:

```
┌──────────────────────────────────────────┐
│  Espacio de usuario: QEMU (emulación)    │
├──────────────────────────────────────────┤
│  Kernel: kvm.ko + kvm-intel/kvm-amd.ko  │
├──────────────────────────────────────────┤
│  Hardware: CPU con VT-x/AMD-V            │
└──────────────────────────────────────────┘
```

### Módulos principales

| Módulo | Función |
|---|---|
| `kvm.ko` | Módulo principal, infraestructura de virtualización |
| `kvm-intel.ko` | Soporte específico para Intel VT-x |
| `kvm-amd.ko` | Soporte específico para AMD-V |
| `vhost-net` | Aceleración de red en el kernel (bypass de QEMU) |
| `vhost-scsi` | Aceleración de almacenamiento SCSI |

```bash
# Cargar módulos KVM
modprobe kvm
modprobe kvm-intel  # o kvm-amd

# Verificar dispositivo KVM
ls -la /dev/kvm
```

### vhost-net

El módulo `vhost-net` mueve el procesamiento de paquetes de red del espacio de usuario (QEMU) al kernel, reduciendo significativamente la latencia y el consumo de CPU.

## Emulación vs Virtualización

| Aspecto | Emulación | Virtualización |
|---|---|---|
| Definición | Simula hardware completo por software | Ejecuta código nativo en la CPU |
| Rendimiento | Muy lento | Casi nativo |
| Arquitectura cruzada | Sí (ej. ARM en x86) | No, misma arquitectura |
| Ejemplo | QEMU sin KVM | KVM, Xen HVM |
| CPU flags necesarias | Ninguna | VT-x o AMD-V |

> **Para el examen:** QEMU puede funcionar como emulador puro (cualquier arquitectura) o como virtualizador con KVM (misma arquitectura, rendimiento casi nativo).

## Gestión de Memoria

### EPT (Extended Page Tables) / NPT (Nested Page Tables)

Traducción de direcciones de memoria en dos niveles gestionada directamente por hardware:

```
Dirección Virtual Guest → Dirección Física Guest → Dirección Física Host
         (Guest PT)              (EPT/NPT)
```

### Shadow Page Tables

Mecanismo por software donde el hipervisor mantiene copias sincronizadas de las tablas de páginas del guest. Más lento que EPT/NPT y con mayor consumo de CPU.

| Mecanismo | Tipo | Rendimiento | Soporte |
|---|---|---|---|
| EPT (Intel) | Hardware | Alto | Intel Nehalem+ |
| NPT/RVI (AMD) | Hardware | Alto | AMD Barcelona+ |
| Shadow Page Tables | Software | Bajo | Universal |

## Device Passthrough y SR-IOV

### Device Passthrough (PCI Passthrough)

Asigna un dispositivo PCI físico completo a una VM, proporcionando acceso directo al hardware:

```bash
# Vincular dispositivo al driver vfio-pci
echo "0000:03:00.0" > /sys/bus/pci/devices/0000:03:00.0/driver/unbind
echo "vfio-pci" > /sys/bus/pci/devices/0000:03:00.0/driver_override
echo "0000:03:00.0" > /sys/bus/pci/drivers/vfio-pci/bind
```

### SR-IOV

```
┌─────────────────────────────────────────┐
│ NIC Física (PF - Physical Function)     │
├────────┬────────┬────────┬──────────────┤
│  VF0   │  VF1   │  VF2   │  ...         │
│ (VM1)  │ (VM2)  │ (VM3)  │              │
└────────┴────────┴────────┴──────────────┘
```

```bash
# Activar VFs en una NIC SR-IOV
echo 4 > /sys/class/net/eth0/device/sriov_numvfs
```

## Open vSwitch (OVS)

Switch virtual de nivel empresarial que soporta protocolos como OpenFlow, VLAN, VXLAN, GRE y bonding.

```bash
# Crear un bridge OVS
ovs-vsctl add-br br0

# Añadir un puerto
ovs-vsctl add-port br0 eth0

# Ver configuración
ovs-vsctl show
```

> **Para el examen:** OVS se utiliza frecuentemente en entornos de virtualización empresarial y cloud (OpenStack) como alternativa al bridge Linux estándar.

## Libvirt como Capa de Abstracción

Libvirt proporciona una API unificada para gestionar diferentes tecnologías de virtualización:

```
┌─────────────────────────────────────┐
│  virt-manager / virsh / virt-install│
├─────────────────────────────────────┤
│           libvirt API               │
├──────┬──────┬───────┬───────────────┤
│ KVM  │ Xen  │ LXC   │ VirtualBox   │
└──────┴──────┴───────┴───────────────┘
```

Componentes clave:
- **libvirtd**: Demonio que gestiona las conexiones y operaciones.
- **URIs de conexión**: `qemu:///system`, `xen:///`, `lxc:///`.
- **XML de dominio**: Define cada VM de forma declarativa.

## Resumen de Conceptos Clave

| Concepto | Importancia para el examen |
|---|---|
| Tipo 1 vs Tipo 2 | Clasificación fundamental |
| VT-x/AMD-V | Requisito para KVM |
| VT-d/IOMMU | Necesario para passthrough |
| EPT vs Shadow PT | Gestión de memoria |
| SR-IOV | PF y VF para compartir dispositivos |
| vhost-net | Aceleración de red en kernel |
| KVM = Tipo 1 | Aunque corre sobre Linux |

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **Paravirtualizacion vs virtualizacion completa** — Para necesita kernel modificado (drivers virtio o hypercalls), completa emula hardware real sin modificar el guest. KVM con virtio es hibrido (virtualizacion completa asistida por hardware + drivers paravirtualizados para E/S).
- **KVM es Tipo 1, no Tipo 2** — Aunque KVM se ejecuta sobre Linux, el modulo `kvm.ko` convierte el kernel en un hipervisor bare-metal. Se clasifica oficialmente como Tipo 1. Las preguntas intentaran confundirte diciendo que es Tipo 2 por ejecutarse "sobre un SO".
- **VT-x/AMD-V vs VT-d/AMD-Vi** — VT-x y AMD-V son extensiones de CPU necesarias para KVM. VT-d y AMD-Vi (IOMMU) son extensiones de E/S necesarias para device passthrough. No confundir: sin VT-d no hay passthrough aunque tengas VT-x.
- **EPT/NPT vs Shadow Page Tables** — EPT (Intel) y NPT (AMD) son traduccion de paginas por hardware (dos niveles). Shadow Page Tables es el metodo por software, mas lento y con mayor consumo de CPU. El examen puede preguntar cual es mas eficiente.
- **SR-IOV: PF vs VF** — Physical Function (PF) es el dispositivo fisico completo; Virtual Functions (VF) son las instancias virtuales que se asignan a las VMs. SR-IOV permite compartir una NIC entre varias VMs con rendimiento casi nativo, a diferencia del passthrough que asigna el dispositivo completo a una sola VM.
- **`grep vmx` vs `grep svm`** — `vmx` es la flag de Intel VT-x en `/proc/cpuinfo`; `svm` es la de AMD-V. El examen puede dar una salida de cpuinfo y preguntar que tecnologia soporta el procesador.
- **vhost-net no es un driver del guest** — `vhost-net` es un modulo del kernel del HOST que acelera la red moviendo el procesamiento de QEMU (espacio de usuario) al kernel. No confundir con virtio-net que es el driver paravirtualizado dentro del guest.
- **Emulacion permite arquitectura cruzada, virtualizacion no** — QEMU sin KVM puede emular ARM en x86 (lento). Con KVM solo puede virtualizar la misma arquitectura del host (rapido). El examen preguntara en que escenario se necesita emulacion pura.
- **OVS vs bridge Linux estandar** — Open vSwitch soporta OpenFlow, VLAN, VXLAN, GRE y es el estandar en entornos cloud (OpenStack). El bridge Linux es mas simple pero carece de estas funcionalidades avanzadas. No son intercambiables en produccion cloud.
- **`qemu:///system` vs `qemu:///session`** — `system` ejecuta VMs como root con acceso a bridges de red. `session` ejecuta como usuario sin privilegios con red NAT unicamente. Tres barras (///) significan conexion local; la distincion system/session es una de las preguntas mas frecuentes.
