---
title: "102.6 - Linux como sistema guest de virtualizacion: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-102
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "102"
subtema: "102.6"
---

# 102.6 - Linux como sistema guest de virtualizacion: Ejercicios

### Pregunta 1

Cual de las siguientes afirmaciones describe correctamente un hipervisor Tipo 1 (Bare Metal)?

a) Se ejecuta como una aplicacion sobre un sistema operativo anfitrion ya instalado
b) Se ejecuta directamente sobre el hardware sin un sistema operativo intermedio
c) Solo puede ejecutar contenedores, no maquinas virtuales completas
d) Requiere un sistema operativo Windows como base

<details><summary>Respuesta</summary>

**b) Se ejecuta directamente sobre el hardware sin un sistema operativo intermedio**

Un hipervisor Tipo 1 (Bare Metal) se ejecuta directamente sobre el hardware fisico, ofreciendo mejor rendimiento y menor sobrecarga. Ejemplos incluyen KVM (integrado en el kernel Linux), Xen, VMware ESXi y Microsoft Hyper-V. Un hipervisor Tipo 2 (Hosted), como VirtualBox o VMware Workstation, se ejecuta como una aplicacion sobre un sistema operativo ya instalado, con mayor sobrecarga. KVM se considera Tipo 1 porque convierte al kernel Linux en un hipervisor que opera directamente sobre el hardware.

</details>

---

### Pregunta 2

Cual es la diferencia fundamental entre una maquina virtual y un contenedor?

a) Las maquinas virtuales son mas ligeras y rapidas que los contenedores
b) Los contenedores comparten el kernel del host mientras que cada VM tiene su propio kernel
c) Los contenedores proporcionan mayor aislamiento que las maquinas virtuales
d) Las maquinas virtuales solo funcionan en la nube y los contenedores solo en local

<details><summary>Respuesta</summary>

**b) Los contenedores comparten el kernel del host mientras que cada VM tiene su propio kernel**

La diferencia fundamental es que los contenedores (Docker, LXC, Podman) comparten el kernel del sistema host y solo aislan el espacio de usuario, mientras que cada maquina virtual tiene su propio kernel completo. Esto hace que los contenedores sean mas ligeros (megabytes vs gigabytes), arranquen mas rapido (segundos vs minutos) y permitan mayor densidad (cientos/miles vs decenas por host). Sin embargo, las VMs ofrecen un aislamiento mas fuerte al tener hardware virtualizado independiente.

</details>

---

### Pregunta 3

En el modelo de servicios en la nube, cual es la definicion correcta de IaaS (Infrastructure as a Service)?

a) El proveedor gestiona toda la infraestructura y la aplicacion; el usuario solo usa el software
b) El proveedor proporciona hardware, red, almacenamiento y virtualizacion; el usuario gestiona el SO y las aplicaciones
c) El proveedor gestiona la plataforma completa incluyendo el SO; el usuario solo sube su codigo
d) El usuario gestiona todo, incluyendo el hardware fisico

<details><summary>Respuesta</summary>

**b) El proveedor proporciona hardware, red, almacenamiento y virtualizacion; el usuario gestiona el SO y las aplicaciones**

En IaaS (Infrastructure as a Service), el proveedor ofrece la infraestructura basica (servidores virtuales, red, almacenamiento) y el usuario es responsable de instalar y administrar el sistema operativo, middleware, aplicaciones y datos. Ejemplos: AWS EC2, Google Compute Engine, Azure VMs. En PaaS el proveedor tambien gestiona el SO y middleware (ej: Heroku). En SaaS el proveedor gestiona todo y el usuario solo usa la aplicacion (ej: Gmail).

</details>

---

### Pregunta 4

Despues de clonar una maquina virtual Linux, cual de los siguientes elementos es imprescindible regenerar para evitar conflictos?

a) Los archivos de log en `/var/log/`
b) El archivo `/etc/machine-id` y las claves SSH del host
c) El sistema de archivos completo con `mkfs`
d) La tabla de particiones con `fdisk`

<details><summary>Respuesta</summary>

**b) El archivo `/etc/machine-id` y las claves SSH del host**

Al clonar una VM, el clon es una copia exacta del original. Es imprescindible regenerar: el machine-id (`rm /etc/machine-id && systemd-machine-id-setup`), las claves SSH del host (`rm /etc/ssh/ssh_host_* && ssh-keygen -A`), y cambiar el hostname (`hostnamectl set-hostname nuevo-nombre`). Si no se regeneran las claves SSH, los clientes recibiran advertencias de "host key changed". El machine-id duplicado causa conflictos en D-Bus, DHCP y otros servicios. La herramienta `virt-sysprep` automatiza estas tareas.

</details>

---

### Pregunta 5

Cual es la funcion principal de las guest additions / guest tools en una maquina virtual?

a) Cifrar la comunicacion entre el host y el guest
b) Permitir que la VM acceda a Internet
c) Mejorar la integracion y el rendimiento entre el hipervisor y el sistema guest
d) Convertir una VM de un formato a otro

<details><summary>Respuesta</summary>

**c) Mejorar la integracion y el rendimiento entre el hipervisor y el sistema guest**

Las guest additions/tools son paquetes de software que se instalan dentro del guest para mejorar la integracion con el hipervisor. Proporcionan: controladores graficos optimizados, carpetas compartidas entre host y guest, portapapeles compartido, sincronizacion del reloj, redimensionado automatico de ventana y apagado limpio. En VirtualBox se llaman Guest Additions, en VMware son VMware Tools (o open-vm-tools en su version libre), y en KVM/QEMU se usa el qemu-guest-agent.

</details>

---

### Pregunta 6

Que comando permite detectar si un sistema Linux se esta ejecutando dentro de una maquina virtual?

a) `uname -a`
b) `systemd-detect-virt`
c) `lsblk --virt`
d) `cat /proc/version`

<details><summary>Respuesta</summary>

**b) `systemd-detect-virt`**

El comando `systemd-detect-virt` detecta si el sistema esta virtualizado y muestra el tipo de hipervisor: `kvm` para KVM/QEMU, `vmware` para VMware, `oracle` para VirtualBox, `xen` para Xen, `microsoft` para Hyper-V, `docker` para contenedores Docker. En un sistema fisico, la salida es `none` con codigo de retorno 1. Otros metodos incluyen `hostnamectl` (que muestra "Virtualization: tipo"), `lscpu | grep "Hypervisor vendor"` y `dmidecode -s system-product-name`.

</details>

---

### Pregunta 7

Que es D-Bus en el contexto de un sistema Linux?

a) Un bus de hardware que conecta dispositivos USB al sistema
b) Un sistema de comunicacion entre procesos (IPC) que permite a aplicaciones y servicios intercambiar mensajes
c) Un controlador de disco virtual para maquinas virtuales
d) Un protocolo de red para la transferencia de datos entre host y guest

<details><summary>Respuesta</summary>

**b) Un sistema de comunicacion entre procesos (IPC) que permite a aplicaciones y servicios intercambiar mensajes**

D-Bus (Desktop Bus) es un sistema de comunicacion entre procesos en Linux. Tiene dos tipos de buses: el System Bus (unico para todo el sistema, usado por servicios como systemd y guest agents) y el Session Bus (uno por cada sesion de usuario, usado por aplicaciones de escritorio). En el contexto de virtualizacion, los guest agents (qemu-guest-agent, open-vm-tools) utilizan D-Bus para comunicarse con el hipervisor, permitiendo solicitar apagados limpios, congelar el sistema de archivos para backups y reportar informacion del guest.

</details>

---

### Pregunta 8

Que es cloud-init y cuando se ejecuta?

a) Una herramienta para crear imagenes de disco de maquinas virtuales, se ejecuta manualmente
b) Un servicio de monitorizacion de instancias en la nube, se ejecuta continuamente
c) Una herramienta de configuracion automatica de instancias en la nube que se ejecuta durante el primer arranque
d) Un gestor de paquetes especifico para entornos cloud, se ejecuta al instalar software

<details><summary>Respuesta</summary>

**c) Una herramienta de configuracion automatica de instancias en la nube que se ejecuta durante el primer arranque**

cloud-init es la herramienta estandar de la industria para la configuracion automatica de instancias en la nube durante el primer arranque. Es compatible con AWS, Azure, Google Cloud, OpenStack y otros. Permite configurar el hostname, crear usuarios con claves SSH, instalar paquetes, ejecutar scripts y configurar la red. La configuracion se escribe en formato YAML y debe comenzar con la linea `#cloud-config`. La configuracion principal se encuentra en `/etc/cloud/cloud.cfg`.

</details>

---

### Pregunta 9

Cual es la diferencia entre una imagen de disco en formato RAW y una en formato qcow2?

a) RAW solo funciona en VMware y qcow2 solo en VirtualBox
b) RAW tiene tamano fijo y mejor rendimiento, qcow2 tiene tamano dinamico y soporta snapshots
c) qcow2 tiene mejor rendimiento que RAW en todos los casos
d) RAW soporta snapshots y cifrado, qcow2 no

<details><summary>Respuesta</summary>

**b) RAW tiene tamano fijo y mejor rendimiento, qcow2 tiene tamano dinamico y soporta snapshots**

El formato RAW ocupa el tamano completo del disco virtual desde el inicio (un disco de 20 GB ocupa 20 GB en el host), ofrece mejor rendimiento por acceso directo pero no soporta snapshots ni cifrado. El formato qcow2 (Copy-On-Write) solo ocupa el espacio de los datos realmente escritos (thin provisioning), soporta snapshots, compresion y cifrado, pero tiene un rendimiento ligeramente menor. qcow2 es el formato nativo de QEMU/KVM y el mas utilizado en entornos de virtualizacion Linux.

</details>

---

### Pregunta 10

Que extensiones de hardware del procesador son necesarias para que KVM funcione?

a) SSE4 y AVX2
b) Intel VT-x o AMD-V (AMD SVM)
c) Intel Turbo Boost o AMD Precision Boost
d) HyperThreading o SMT

<details><summary>Respuesta</summary>

**b) Intel VT-x o AMD-V (AMD SVM)**

KVM (Kernel-based Virtual Machine) requiere extensiones de virtualizacion por hardware: Intel VT-x (en procesadores Intel) o AMD-V / AMD SVM (en procesadores AMD). Estas extensiones deben estar habilitadas en la configuracion del BIOS/UEFI. Se puede verificar su disponibilidad con `grep -E '(vmx|svm)' /proc/cpuinfo`, donde `vmx` indica Intel VT-x y `svm` indica AMD-V. Sin estas extensiones habilitadas, KVM no podra crear maquinas virtuales.

</details>

### Pregunta 11

En la paravirtualizacion, que caracteristica tiene el sistema operativo guest?

a) No necesita ninguna modificacion y cree que se ejecuta en hardware real
b) Esta modificado para comunicarse directamente con el hipervisor mediante hypercalls
c) Solo puede ejecutar contenedores, no aplicaciones normales
d) Requiere obligatoriamente extensiones de hardware Intel VT-x o AMD-V

<details><summary>Respuesta</summary>

**b) Esta modificado para comunicarse directamente con el hipervisor mediante hypercalls**

En la paravirtualizacion, el guest OS sabe que esta virtualizado y esta modificado para comunicarse directamente con el hipervisor usando "hypercalls" en lugar de instrucciones privilegiadas. Esto ofrece mejor rendimiento que la virtualizacion completa sin soporte de hardware. El ejemplo principal es Xen en modo paravirtualizado. En la virtualizacion completa (como KVM o VirtualBox), el guest no necesita modificaciones y cree que se ejecuta en hardware real.

</details>

### Pregunta 12

Que tecnologia de contenedores se caracteriza por no requerir un demonio (daemonless)?

a) Docker
b) LXC
c) Podman
d) containerd

<details><summary>Respuesta</summary>

**c) Podman**

Podman es una alternativa a Docker que se caracteriza por ser "daemonless", es decir, no requiere un demonio en ejecucion para gestionar los contenedores. Cada contenedor se ejecuta como un proceso hijo directo del comando Podman. Docker, en cambio, depende del demonio `dockerd` que se ejecuta continuamente en segundo plano. LXC proporciona contenedores de sistema operativo completo. containerd es un runtime de contenedores de bajo nivel utilizado internamente por Docker y Kubernetes.

</details>

### Pregunta 13

Cual es el modelo de servicio en la nube donde el proveedor gestiona toda la infraestructura incluyendo el sistema operativo y el middleware, y el usuario solo se encarga de su aplicacion y datos?

a) IaaS
b) PaaS
c) SaaS
d) DaaS

<details><summary>Respuesta</summary>

**b) PaaS**

En PaaS (Platform as a Service), el proveedor gestiona el hardware, la virtualizacion, el sistema operativo y el middleware. El usuario solo necesita desarrollar y desplegar su aplicacion y gestionar sus datos. Ejemplos incluyen Heroku, Google App Engine y Azure App Service. En IaaS el usuario tambien debe gestionar el SO y middleware. En SaaS el proveedor gestiona absolutamente todo, incluyendo la aplicacion, y el usuario solo la utiliza (como Gmail u Office 365).

</details>

### Pregunta 14

Que formato de imagen de disco virtual soporta snapshots, compresion y cifrado, y es el formato nativo de QEMU/KVM?

a) RAW
b) VMDK
c) qcow2
d) VDI

<details><summary>Respuesta</summary>

**c) qcow2**

qcow2 (QEMU Copy-On-Write version 2) es el formato nativo de QEMU/KVM. Soporta snapshots (instantaneas del estado del disco), compresion, cifrado y thin provisioning (el archivo solo ocupa el espacio de los datos realmente escritos). El formato RAW tiene mejor rendimiento por acceso directo pero no soporta snapshots ni cifrado, y el archivo ocupa el tamano completo del disco virtual desde el inicio. VMDK es el formato de VMware y VDI es de VirtualBox.

</details>

### Pregunta 15

Despues de clonar una maquina virtual, que comando regenera las claves SSH del host en un sistema Red Hat/CentOS?

a) `dpkg-reconfigure openssh-server`
b) `ssh-keygen -A`
c) `ssh-keygen -t rsa`
d) `systemctl regenerate sshd`

<details><summary>Respuesta</summary>

**b) `ssh-keygen -A`**

`ssh-keygen -A` genera todas las claves de host SSH que faltan (RSA, ECDSA, ED25519) y es el metodo utilizado en sistemas Red Hat/CentOS. Primero se deben eliminar las claves existentes con `rm /etc/ssh/ssh_host_*` y luego ejecutar `ssh-keygen -A`. En Debian/Ubuntu, el metodo equivalente es `dpkg-reconfigure openssh-server`. Si no se regeneran las claves tras la clonacion, los clientes SSH recibiran advertencias de "host key changed" porque el fingerprint sera identico al de la maquina original.

</details>

### Pregunta 16

Que herramienta automatiza la preparacion de una maquina virtual para ser usada como plantilla, eliminando machine-id, claves SSH y otros datos especificos?

a) `virt-manager`
b) `virt-sysprep`
c) `cloud-init`
d) `qemu-img`

<details><summary>Respuesta</summary>

**b) `virt-sysprep`**

`virt-sysprep` es una herramienta que automatiza el proceso de "generalizar" una maquina virtual para convertirla en una plantilla. Elimina datos especificos de la instalacion como `/etc/machine-id`, las claves SSH del host, logs, historial de bash, y otros datos que deben ser unicos por maquina. `virt-manager` es la interfaz grafica para gestionar VMs. `cloud-init` configura instancias en el primer arranque. `qemu-img` gestiona imagenes de disco virtual.

</details>

### Pregunta 17

Cual es la funcion del archivo `/etc/machine-id` y por que es importante tras clonar una VM?

a) Almacena la clave de licencia del sistema operativo
b) Contiene un identificador hexadecimal unico de 32 caracteres que identifica la instalacion
c) Guarda la configuracion de red del sistema
d) Almacena las credenciales de usuario del sistema

<details><summary>Respuesta</summary>

**b) Contiene un identificador hexadecimal unico de 32 caracteres que identifica la instalacion**

`/etc/machine-id` es un identificador hexadecimal unico de 32 caracteres generado durante la instalacion del sistema. Es usado por systemd, D-Bus, DHCP y otros servicios que necesitan identificar de forma unica cada maquina. Al clonar una VM, ambas maquinas tendran el mismo machine-id, lo que causa conflictos. Se regenera eliminando el archivo y ejecutando `systemd-machine-id-setup`. El archivo `/var/lib/dbus/machine-id` normalmente es un enlace simbolico o copia de `/etc/machine-id`.

</details>

### Pregunta 18

Que primera linea debe tener obligatoriamente un archivo de configuracion de cloud-init en formato YAML?

a) `#!/bin/bash`
b) `#cloud-config`
c) `---`
d) `[cloud-init]`

<details><summary>Respuesta</summary>

**b) `#cloud-config`**

La configuracion de cloud-init en formato YAML debe comenzar obligatoriamente con la linea `#cloud-config` para que cloud-init la reconozca como un archivo de configuracion valido. A partir de esa linea, se pueden definir directivas como `hostname`, `users`, `packages`, `runcmd`, etc. `#!/bin/bash` es un shebang para scripts de shell. `---` es el inicio estandar de un documento YAML pero no es lo que cloud-init requiere. cloud-init se ejecuta durante el primer arranque de la instancia.

</details>

### Pregunta 19

Que tipo de bus D-Bus se utiliza para la comunicacion entre servicios del sistema, como los guest agents del hipervisor?

a) Session Bus
b) System Bus
c) Network Bus
d) Virtual Bus

<details><summary>Respuesta</summary>

**b) System Bus**

D-Bus tiene dos tipos de buses: el System Bus y el Session Bus. El System Bus es unico para todo el sistema y se utiliza para la comunicacion entre servicios del sistema, como systemd, los guest agents (qemu-guest-agent, open-vm-tools) y otros daemons. El Session Bus es uno por cada sesion de usuario y se usa para aplicaciones de escritorio. Los guest agents del hipervisor usan el System Bus para recibir solicitudes como apagados limpios, congelar el sistema de archivos o reportar informacion del guest.

</details>

### Pregunta 20

Que controlador paravirtualizado se utiliza en entornos KVM/QEMU para mejorar el rendimiento de la red virtual del guest?

a) e1000
b) virtio-net
c) vmxnet3
d) rtl8139

<details><summary>Respuesta</summary>

**b) virtio-net**

`virtio-net` es el controlador paravirtualizado de red del framework virtio, utilizado en entornos KVM/QEMU. Los controladores virtio ofrecen mejor rendimiento que los controladores emulados (como e1000 o rtl8139) porque el guest sabe que esta virtualizado y se comunica directamente con el hipervisor. Otros controladores virtio incluyen `virtio-blk`/`virtio-scsi` para discos y `virtio-balloon` para gestion de memoria. El kernel Linux incluye soporte nativo para virtio. vmxnet3 es el equivalente de VMware.

</details>

### Pregunta 21

Que comando usarias para detectar si un sistema Linux esta ejecutandose dentro de una maquina virtual y que tipo de hipervisor usa?

<input type="text" class="fill-blank" data-answer="systemd-detect-virt" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemd-detect-virt**

`systemd-detect-virt` es el comando estandar para detectar si el sistema esta virtualizado. Devuelve el nombre del hipervisor detectado: `kvm` para KVM/QEMU, `vmware` para VMware, `oracle` para VirtualBox, `xen` para Xen, `microsoft` para Hyper-V, o `none` si es un sistema fisico (con codigo de retorno 1). Otros metodos incluyen `dmidecode -s system-product-name` y `cat /sys/class/dmi/id/product_name`.

</details>

### Pregunta 22

Que comando usarias para regenerar el machine-id del sistema despues de eliminar `/etc/machine-id`?

<input type="text" class="fill-blank" data-answer="systemd-machine-id-setup" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemd-machine-id-setup**

Despues de eliminar `/etc/machine-id` con `rm /etc/machine-id`, se ejecuta `systemd-machine-id-setup` para generar un nuevo identificador unico. El procedimiento completo es: `rm /etc/machine-id && systemd-machine-id-setup`. Esto es imprescindible tras clonar una VM para evitar conflictos en D-Bus, DHCP y otros servicios. El comando `dbus-uuidgen --ensure` asegura que `/var/lib/dbus/machine-id` tambien existe.

</details>

### Pregunta 23

Que comando usarias para crear una imagen de disco virtual en formato qcow2 de 20 GB?

<input type="text" class="fill-blank" data-answer="qemu-img create -f qcow2 disco.qcow2 20G" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img create -f qcow2 disco.qcow2 20G**

`qemu-img create` es el comando para crear imagenes de disco virtual. La opcion `-f qcow2` especifica el formato qcow2 (Copy-On-Write), que soporta thin provisioning, snapshots y compresion. El nombre del archivo es `disco.qcow2` y `20G` define el tamano maximo del disco virtual. Gracias al thin provisioning, el archivo inicialmente ocupara muy poco espacio y crecera a medida que se escriban datos. Para formato RAW se usaria `-f raw`.

</details>

### Pregunta 24

Que comando usarias para verificar si el procesador soporta extensiones de virtualizacion por hardware?

<input type="text" class="fill-blank" data-answer="grep -E '(vmx|svm)' /proc/cpuinfo" data-alt="grep -E 'vmx|svm' /proc/cpuinfo,egrep '(vmx|svm)' /proc/cpuinfo" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep -E '(vmx|svm)' /proc/cpuinfo**

Este comando busca en la informacion del procesador las extensiones de virtualizacion por hardware. `vmx` indica Intel VT-x y `svm` indica AMD-V (Secure Virtual Machine). Si el comando produce salida, el procesador soporta virtualizacion por hardware. Estas extensiones son necesarias para que KVM funcione y deben estar habilitadas en la configuracion del BIOS/UEFI. Tambien se puede verificar con `lsmod | grep kvm` para ver si los modulos kvm_intel o kvm_amd estan cargados.

</details>

### Pregunta 25

Que comando genera un nuevo identificador aleatorio de D-Bus?

<input type="text" class="fill-blank" data-answer="dbus-uuidgen" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dbus-uuidgen**

`dbus-uuidgen` genera un nuevo UUID (identificador unico universal) aleatorio para D-Bus. Sin opciones, simplemente genera y muestra un nuevo ID. Con `--ensure` se asegura de que `/var/lib/dbus/machine-id` existe (lo crea si no existe). Con `--get` obtiene el machine ID de D-Bus actual. Este comando es importante en el contexto de la clonacion de maquinas virtuales para regenerar identificadores unicos.

</details>
