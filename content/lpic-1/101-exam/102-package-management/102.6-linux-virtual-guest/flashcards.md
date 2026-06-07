---
title: "102.6 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "102.6"
---

# Flashcards: 102.6 - Linux Como Guest Virtual

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-001">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones describe correctamente un hipervisor Tipo 1 (Bare Metal)?

</div>
<div class="flashcard-back">

**R:** b) Se ejecuta directamente sobre el hardware sin un sistema operativo intermedio. Un hipervisor Tipo 1 (Bare Metal) se ejecuta directamente sobre el hardware fisico, ofreciendo mejor rendimiento y menor sobrecarga. Ejemplos incluyen KVM (integrado en el kernel Linux), Xen, VMware ESXi y Microsoft Hyper-V. Un hipervisor Tipo 2 (Hosted), como VirtualBox o VMware Workstation, se ejecuta como una aplicacion sobre un sistema operativo ya instalado, con mayor sobrecarga. KVM se considera Tipo 1 porque convierte al kernel Linux en un hipervisor que opera directamente sobre el hardware.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia fundamental entre una maquina virtual y un contenedor?

</div>
<div class="flashcard-back">

**R:** b) Los contenedores comparten el kernel del host mientras que cada VM tiene su propio kernel. La diferencia fundamental es que los contenedores (Docker, LXC, Podman) comparten el kernel del sistema host y solo aislan el espacio de usuario, mientras que cada maquina virtual tiene su propio kernel completo. Esto hace que los contenedores sean mas ligeros (megabytes vs gigabytes), arranquen mas rapido (segundos vs minutos) y permitan mayor densidad (cientos/miles vs decenas por host). Sin embargo, las VMs ofrecen un aislamiento mas fuerte al tener hardware virtualizado independiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-003">
<div class="flashcard-front">

**P:** En el modelo de servicios en la nube, cual es la definicion correcta de IaaS (Infrastructure as a Service)?

</div>
<div class="flashcard-back">

**R:** b) El proveedor proporciona hardware, red, almacenamiento y virtualizacion; el usuario gestiona el SO y las aplicaciones. En IaaS (Infrastructure as a Service), el proveedor ofrece la infraestructura basica (servidores virtuales, red, almacenamiento) y el usuario es responsable de instalar y administrar el sistema operativo, middleware, aplicaciones y datos. Ejemplos: AWS EC2, Google Compute Engine, Azure VMs. En PaaS el proveedor tambien gestiona el SO y middleware (ej: Heroku). En SaaS el proveedor gestiona todo y el usuario solo usa la aplicacion (ej: Gmail).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-004">
<div class="flashcard-front">

**P:** Despues de clonar una maquina virtual Linux, cual de los siguientes elementos es imprescindible regenerar para evitar conflictos?

</div>
<div class="flashcard-back">

**R:** b) El archivo `/etc/machine-id` y las claves SSH del host. Al clonar una VM, el clon es una copia exacta del original. Es imprescindible regenerar: el machine-id (`rm /etc/machine-id && systemd-machine-id-setup`), las claves SSH del host (`rm /etc/ssh/ssh_host_* && ssh-keygen -A`), y cambiar el hostname (`hostnamectl set-hostname nuevo-nombre`). Si no se regeneran las claves SSH, los clientes recibiran advertencias de "host key changed". El machine-id duplicado causa conflictos en D-Bus, DHCP y otros servicios. La herramienta `virt-sysprep` automatiza estas tareas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-005">
<div class="flashcard-front">

**P:** Cual es la funcion principal de las guest additions / guest tools en una maquina virtual?

</div>
<div class="flashcard-back">

**R:** c) Mejorar la integracion y el rendimiento entre el hipervisor y el sistema guest. Las guest additions/tools son paquetes de software que se instalan dentro del guest para mejorar la integracion con el hipervisor. Proporcionan: controladores graficos optimizados, carpetas compartidas entre host y guest, portapapeles compartido, sincronizacion del reloj, redimensionado automatico de ventana y apagado limpio. En VirtualBox se llaman Guest Additions, en VMware son VMware Tools (o open-vm-tools en su version libre), y en KVM/QEMU se usa el qemu-guest-agent.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-006">
<div class="flashcard-front">

**P:** Que comando permite detectar si un sistema Linux se esta ejecutando dentro de una maquina virtual?

</div>
<div class="flashcard-back">

**R:** b) `systemd-detect-virt`. El comando `systemd-detect-virt` detecta si el sistema esta virtualizado y muestra el tipo de hipervisor: `kvm` para KVM/QEMU, `vmware` para VMware, `oracle` para VirtualBox, `xen` para Xen, `microsoft` para Hyper-V, `docker` para contenedores Docker. En un sistema fisico, la salida es `none` con codigo de retorno 1. Otros metodos incluyen `hostnamectl` (que muestra "Virtualization: tipo"), `lscpu | grep "Hypervisor vendor"` y `dmidecode -s system-product-name`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-007">
<div class="flashcard-front">

**P:** Que es D-Bus en el contexto de un sistema Linux?

</div>
<div class="flashcard-back">

**R:** b) Un sistema de comunicacion entre procesos (IPC) que permite a aplicaciones y servicios intercambiar mensajes. D-Bus (Desktop Bus) es un sistema de comunicacion entre procesos en Linux. Tiene dos tipos de buses: el System Bus (unico para todo el sistema, usado por servicios como systemd y guest agents) y el Session Bus (uno por cada sesion de usuario, usado por aplicaciones de escritorio). En el contexto de virtualizacion, los guest agents (qemu-guest-agent, open-vm-tools) utilizan D-Bus para comunicarse con el hipervisor, permitiendo solicitar apagados limpios, congelar el sistema de archivos para backups y reportar informacion del guest.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-008">
<div class="flashcard-front">

**P:** Que es cloud-init y cuando se ejecuta?

</div>
<div class="flashcard-back">

**R:** c) Una herramienta de configuracion automatica de instancias en la nube que se ejecuta durante el primer arranque. cloud-init es la herramienta estandar de la industria para la configuracion automatica de instancias en la nube durante el primer arranque. Es compatible con AWS, Azure, Google Cloud, OpenStack y otros. Permite configurar el hostname, crear usuarios con claves SSH, instalar paquetes, ejecutar scripts y configurar la red. La configuracion se escribe en formato YAML y debe comenzar con la linea `#cloud-config`. La configuracion principal se encuentra en `/etc/cloud/cloud.cfg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-009">
<div class="flashcard-front">

**P:** Cual es la diferencia entre una imagen de disco en formato RAW y una en formato qcow2?

</div>
<div class="flashcard-back">

**R:** b) RAW tiene tamano fijo y mejor rendimiento, qcow2 tiene tamano dinamico y soporta snapshots. El formato RAW ocupa el tamano completo del disco virtual desde el inicio (un disco de 20 GB ocupa 20 GB en el host), ofrece mejor rendimiento por acceso directo pero no soporta snapshots ni cifrado. El formato qcow2 (Copy-On-Write) solo ocupa el espacio de los datos realmente escritos (thin provisioning), soporta snapshots, compresion y cifrado, pero tiene un rendimiento ligeramente menor. qcow2 es el formato nativo de QEMU/KVM y el mas utilizado en entornos de virtualizacion Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-010">
<div class="flashcard-front">

**P:** Que extensiones de hardware del procesador son necesarias para que KVM funcione?

</div>
<div class="flashcard-back">

**R:** b) Intel VT-x o AMD-V (AMD SVM). KVM (Kernel-based Virtual Machine) requiere extensiones de virtualizacion por hardware: Intel VT-x (en procesadores Intel) o AMD-V / AMD SVM (en procesadores AMD). Estas extensiones deben estar habilitadas en la configuracion del BIOS/UEFI. Se puede verificar su disponibilidad con `grep -E '(vmx|svm)' /proc/cpuinfo`, donde `vmx` indica Intel VT-x y `svm` indica AMD-V. Sin estas extensiones habilitadas, KVM no podra crear maquinas virtuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-011">
<div class="flashcard-front">

**P:** En la paravirtualizacion, que caracteristica tiene el sistema operativo guest?

</div>
<div class="flashcard-back">

**R:** b) Esta modificado para comunicarse directamente con el hipervisor mediante hypercalls. En la paravirtualizacion, el guest OS sabe que esta virtualizado y esta modificado para comunicarse directamente con el hipervisor usando "hypercalls" en lugar de instrucciones privilegiadas. Esto ofrece mejor rendimiento que la virtualizacion completa sin soporte de hardware. El ejemplo principal es Xen en modo paravirtualizado. En la virtualizacion completa (como KVM o VirtualBox), el guest no necesita modificaciones y cree que se ejecuta en hardware real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-012">
<div class="flashcard-front">

**P:** Que tecnologia de contenedores se caracteriza por no requerir un demonio (daemonless)?

</div>
<div class="flashcard-back">

**R:** c) Podman. Podman es una alternativa a Docker que se caracteriza por ser "daemonless", es decir, no requiere un demonio en ejecucion para gestionar los contenedores. Cada contenedor se ejecuta como un proceso hijo directo del comando Podman. Docker, en cambio, depende del demonio `dockerd` que se ejecuta continuamente en segundo plano. LXC proporciona contenedores de sistema operativo completo. containerd es un runtime de contenedores de bajo nivel utilizado internamente por Docker y Kubernetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-013">
<div class="flashcard-front">

**P:** Cual es el modelo de servicio en la nube donde el proveedor gestiona toda la infraestructura incluyendo el sistema operativo y el middleware, y el usuario solo se encarga de su aplicacion y datos?

</div>
<div class="flashcard-back">

**R:** b) PaaS. En PaaS (Platform as a Service), el proveedor gestiona el hardware, la virtualizacion, el sistema operativo y el middleware. El usuario solo necesita desarrollar y desplegar su aplicacion y gestionar sus datos. Ejemplos incluyen Heroku, Google App Engine y Azure App Service. En IaaS el usuario tambien debe gestionar el SO y middleware. En SaaS el proveedor gestiona absolutamente todo, incluyendo la aplicacion, y el usuario solo la utiliza (como Gmail u Office 365).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-014">
<div class="flashcard-front">

**P:** Que formato de imagen de disco virtual soporta snapshots, compresion y cifrado, y es el formato nativo de QEMU/KVM?

</div>
<div class="flashcard-back">

**R:** c) qcow2. qcow2 (QEMU Copy-On-Write version 2) es el formato nativo de QEMU/KVM. Soporta snapshots (instantaneas del estado del disco), compresion, cifrado y thin provisioning (el archivo solo ocupa el espacio de los datos realmente escritos). El formato RAW tiene mejor rendimiento por acceso directo pero no soporta snapshots ni cifrado, y el archivo ocupa el tamano completo del disco virtual desde el inicio. VMDK es el formato de VMware y VDI es de VirtualBox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-015">
<div class="flashcard-front">

**P:** Despues de clonar una maquina virtual, que comando regenera las claves SSH del host en un sistema Red Hat/CentOS?

</div>
<div class="flashcard-back">

**R:** b) `ssh-keygen -A`. `ssh-keygen -A` genera todas las claves de host SSH que faltan (RSA, ECDSA, ED25519) y es el metodo utilizado en sistemas Red Hat/CentOS. Primero se deben eliminar las claves existentes con `rm /etc/ssh/ssh_host_*` y luego ejecutar `ssh-keygen -A`. En Debian/Ubuntu, el metodo equivalente es `dpkg-reconfigure openssh-server`. Si no se regeneran las claves tras la clonacion, los clientes SSH recibiran advertencias de "host key changed" porque el fingerprint sera identico al de la maquina original.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-016">
<div class="flashcard-front">

**P:** Que herramienta automatiza la preparacion de una maquina virtual para ser usada como plantilla, eliminando machine-id, claves SSH y otros datos especificos?

</div>
<div class="flashcard-back">

**R:** b) `virt-sysprep`. `virt-sysprep` es una herramienta que automatiza el proceso de "generalizar" una maquina virtual para convertirla en una plantilla. Elimina datos especificos de la instalacion como `/etc/machine-id`, las claves SSH del host, logs, historial de bash, y otros datos que deben ser unicos por maquina. `virt-manager` es la interfaz grafica para gestionar VMs. `cloud-init` configura instancias en el primer arranque. `qemu-img` gestiona imagenes de disco virtual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-017">
<div class="flashcard-front">

**P:** Cual es la funcion del archivo `/etc/machine-id` y por que es importante tras clonar una VM?

</div>
<div class="flashcard-back">

**R:** b) Contiene un identificador hexadecimal unico de 32 caracteres que identifica la instalacion. `/etc/machine-id` es un identificador hexadecimal unico de 32 caracteres generado durante la instalacion del sistema. Es usado por systemd, D-Bus, DHCP y otros servicios que necesitan identificar de forma unica cada maquina. Al clonar una VM, ambas maquinas tendran el mismo machine-id, lo que causa conflictos. Se regenera eliminando el archivo y ejecutando `systemd-machine-id-setup`. El archivo `/var/lib/dbus/machine-id` normalmente es un enlace simbolico o copia de `/etc/machine-id`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-018">
<div class="flashcard-front">

**P:** Que primera linea debe tener obligatoriamente un archivo de configuracion de cloud-init en formato YAML?

</div>
<div class="flashcard-back">

**R:** b) `#cloud-config`. La configuracion de cloud-init en formato YAML debe comenzar obligatoriamente con la linea `#cloud-config` para que cloud-init la reconozca como un archivo de configuracion valido. A partir de esa linea, se pueden definir directivas como `hostname`, `users`, `packages`, `runcmd`, etc. `#!/bin/bash` es un shebang para scripts de shell. `---` es el inicio estandar de un documento YAML pero no es lo que cloud-init requiere. cloud-init se ejecuta durante el primer arranque de la instancia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-019">
<div class="flashcard-front">

**P:** Que tipo de bus D-Bus se utiliza para la comunicacion entre servicios del sistema, como los guest agents del hipervisor?

</div>
<div class="flashcard-back">

**R:** b) System Bus. D-Bus tiene dos tipos de buses: el System Bus y el Session Bus. El System Bus es unico para todo el sistema y se utiliza para la comunicacion entre servicios del sistema, como systemd, los guest agents (qemu-guest-agent, open-vm-tools) y otros daemons. El Session Bus es uno por cada sesion de usuario y se usa para aplicaciones de escritorio. Los guest agents del hipervisor usan el System Bus para recibir solicitudes como apagados limpios, congelar el sistema de archivos o reportar informacion del guest.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-020">
<div class="flashcard-front">

**P:** Que controlador paravirtualizado se utiliza en entornos KVM/QEMU para mejorar el rendimiento de la red virtual del guest?

</div>
<div class="flashcard-back">

**R:** b) virtio-net. `virtio-net` es el controlador paravirtualizado de red del framework virtio, utilizado en entornos KVM/QEMU. Los controladores virtio ofrecen mejor rendimiento que los controladores emulados (como e1000 o rtl8139) porque el guest sabe que esta virtualizado y se comunica directamente con el hipervisor. Otros controladores virtio incluyen `virtio-blk`/`virtio-scsi` para discos y `virtio-balloon` para gestion de memoria. El kernel Linux incluye soporte nativo para virtio. vmxnet3 es el equivalente de VMware.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-021">
<div class="flashcard-front">

**P:** Que comando usarias para detectar si un sistema Linux esta ejecutandose dentro de una maquina virtual y que tipo de hipervisor usa?

</div>
<div class="flashcard-back">

**R:** systemd-detect-virt. `systemd-detect-virt` es el comando estandar para detectar si el sistema esta virtualizado. Devuelve el nombre del hipervisor detectado: `kvm` para KVM/QEMU, `vmware` para VMware, `oracle` para VirtualBox, `xen` para Xen, `microsoft` para Hyper-V, o `none` si es un sistema fisico (con codigo de retorno 1). Otros metodos incluyen `dmidecode -s system-product-name` y `cat /sys/class/dmi/id/product_name`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-022">
<div class="flashcard-front">

**P:** Que comando usarias para regenerar el machine-id del sistema despues de eliminar `/etc/machine-id`?

</div>
<div class="flashcard-back">

**R:** systemd-machine-id-setup. Despues de eliminar `/etc/machine-id` con `rm /etc/machine-id`, se ejecuta `systemd-machine-id-setup` para generar un nuevo identificador unico. El procedimiento completo es: `rm /etc/machine-id && systemd-machine-id-setup`. Esto es imprescindible tras clonar una VM para evitar conflictos en D-Bus, DHCP y otros servicios. El comando `dbus-uuidgen --ensure` asegura que `/var/lib/dbus/machine-id` tambien existe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-023">
<div class="flashcard-front">

**P:** Que comando usarias para crear una imagen de disco virtual en formato qcow2 de 20 GB?

</div>
<div class="flashcard-back">

**R:** qemu-img create -f qcow2 disco.qcow2 20G. `qemu-img create` es el comando para crear imagenes de disco virtual. La opcion `-f qcow2` especifica el formato qcow2 (Copy-On-Write), que soporta thin provisioning, snapshots y compresion. El nombre del archivo es `disco.qcow2` y `20G` define el tamano maximo del disco virtual. Gracias al thin provisioning, el archivo inicialmente ocupara muy poco espacio y crecera a medida que se escriban datos. Para formato RAW se usaria `-f raw`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-024">
<div class="flashcard-front">

**P:** Que comando usarias para verificar si el procesador soporta extensiones de virtualizacion por hardware?

</div>
<div class="flashcard-back">

**R:** grep -E '(vmx|svm)' /proc/cpuinfo. Este comando busca en la informacion del procesador las extensiones de virtualizacion por hardware. `vmx` indica Intel VT-x y `svm` indica AMD-V (Secure Virtual Machine). Si el comando produce salida, el procesador soporta virtualizacion por hardware. Estas extensiones son necesarias para que KVM funcione y deben estar habilitadas en la configuracion del BIOS/UEFI. Tambien se puede verificar con `lsmod | grep kvm` para ver si los modulos kvm_intel o kvm_amd estan cargados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-025">
<div class="flashcard-front">

**P:** Que comando genera un nuevo identificador aleatorio de D-Bus?

</div>
<div class="flashcard-back">

**R:** dbus-uuidgen. `dbus-uuidgen` genera un nuevo UUID (identificador unico universal) aleatorio para D-Bus. Sin opciones, simplemente genera y muestra un nuevo ID. Con `--ensure` se asegura de que `/var/lib/dbus/machine-id` existe (lo crea si no existe). Con `--get` obtiene el machine ID de D-Bus actual. Este comando es importante en el contexto de la clonacion de maquinas virtuales para regenerar identificadores unicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: KVM **requiere** extensiones de virtualizacion por hardware (Intel VT-x o AMD-V)...

</div>
<div class="flashcard-back">

**R:** KVM **requiere** extensiones de virtualizacion por hardware (Intel VT-x o AMD-V) para funcionar. Estas extensiones deben estar **habilitadas en la configuracion del BIOS/UEFI**. Si no estan habilitadas, KVM no podra crear maquinas virtuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: qcow2 es el formato preferido en entornos KVM/QEMU por su flexibilidad (snapshot...

</div>
<div class="flashcard-back">

**R:** qcow2 es el formato preferido en entornos KVM/QEMU por su flexibilidad (snapshots, thin provisioning). RAW ofrece mejor rendimiento pero sin funcionalidades avanzadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Si no se regeneran las claves SSH del host despues de clonar, los clientes que s...

</div>
<div class="flashcard-back">

**R:** Si no se regeneran las claves SSH del host despues de clonar, los clientes que se conecten a la maquina clonada recibiran advertencias de "host key changed" porque el fingerprint sera identico al de la maquina original.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Al clonar una VM, es imprescindible regenerar el machine-id. Dos maquinas con el...

</div>
<div class="flashcard-back">

**R:** Al clonar una VM, es imprescindible regenerar el machine-id. Dos maquinas con el mismo machine-id pueden causar conflictos en D-Bus, DHCP y otros servicios que dependen de este identificador unico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: cloud-init se ejecuta solo durante el **primer arranque** de la instancia. La co...

</div>
<div class="flashcard-back">

**R:** cloud-init se ejecuta solo durante el **primer arranque** de la instancia. La configuracion se proporciona en formato YAML con la directiva `#cloud-config` al inicio del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/machine-id`?

</div>
<div class="flashcard-back">

**R:** Machine ID principal del sistema, usado por systemd

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `/var/lib/dbus/machine-id`?

</div>
<div class="flashcard-back">

**R:** Machine ID de D-Bus. Normalmente es un enlace simbolico a `/etc/machine-id` o una copia identica

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/cloud/cloud.cfg`?

</div>
<div class="flashcard-back">

**R:** Configuracion principal de cloud-init

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `/var/log/cloud-init.log`?

</div>
<div class="flashcard-back">

**R:** Log de ejecucion de cloud-init

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-035">
<div class="flashcard-front">

**P:** Un administrador instala una VM con VirtualBox pero no puede redimensionar la ventana, no funciona el portapapeles compartido ni las carpetas compartidas. Que debe instalar dentro del guest para resolver estos problemas y cual es el equivalente en VMware y KVM/QEMU?

</div>
<div class="flashcard-back">

**R:** Debe instalar las **Guest Additions** de VirtualBox dentro del sistema guest. Estas herramientas proporcionan controladores graficos optimizados, redimensionado automatico de ventana, portapapeles compartido, carpetas compartidas, sincronizacion del reloj y apagado limpio desde el hipervisor. En **VMware**, el equivalente son **VMware Tools** (o su version de codigo abierto **open-vm-tools**, instalable con `apt install open-vm-tools` o `yum install open-vm-tools`). En **KVM/QEMU**, se utiliza el **qemu-guest-agent** junto con los controladores **virtio** para rendimiento optimizado de disco y red. En todos los casos, estas herramientas se instalan **dentro del guest**, no en el host, y mejoran significativamente la integracion y el rendimiento de la maquina virtual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-036">
<div class="flashcard-front">

**P:** Un equipo DevOps necesita desplegar 50 instancias Linux identicas en AWS, cada una con un hostname unico, un usuario administrador con clave SSH y varios paquetes preinstalados. Que herramienta deben usar para automatizar esta configuracion inicial y que formato debe tener el archivo de configuracion?

</div>
<div class="flashcard-back">

**R:** Deben usar **cloud-init**, la herramienta estandar de la industria para la configuracion automatica de instancias en la nube durante el **primer arranque**. El archivo de configuracion debe estar en formato **YAML** y obligatoriamente comenzar con la linea `#cloud-config`. Ejemplo de configuracion: se definen directivas como `hostname`, `users` (con `ssh_authorized_keys`), `packages` y `runcmd` para comandos post-instalacion. cloud-init es compatible con AWS, Azure, Google Cloud y OpenStack. Su configuracion principal reside en `/etc/cloud/cloud.cfg` y los logs se encuentran en `/var/log/cloud-init.log`. Es importante recordar que cloud-init se ejecuta **solo durante el primer arranque**; para re-ejecutarlo se debe limpiar su estado con `cloud-init clean`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.6">
</div>

<div class="flashcard" data-id="102.6-fc-037">
<div class="flashcard-front">

**P:** Un candidato LPIC-1 responde que KVM es un hipervisor Tipo 2 porque se ejecuta sobre Linux, que los contenedores tienen su propio kernel, y que cloud-init se ejecuta en cada arranque del sistema. Cuantos errores ha cometido y cuales son las respuestas correctas?

</div>
<div class="flashcard-back">

**R:** Ha cometido **3 errores**, todos son trampas clasicas del examen LPIC-1: **(1)** KVM es un hipervisor **Tipo 1 (Bare Metal)**, no Tipo 2. Aunque se ejecuta sobre Linux, KVM convierte al kernel Linux en un hipervisor que opera directamente sobre el hardware. Los Tipo 2 son VirtualBox y VMware Workstation. **(2)** Los contenedores **comparten el kernel** del host; no tienen kernel propio. Cada VM si tiene su propio kernel completo. Esta es la diferencia fundamental entre contenedores y VMs. **(3)** cloud-init se ejecuta **solo durante el primer arranque**, no en cada arranque. Para re-ejecutarlo hay que limpiar su estado con `cloud-init clean`. Otras trampas frecuentes: confundir `vmx` (Intel VT-x) con `svm` (AMD-V) en `/proc/cpuinfo`, olvidar regenerar `/etc/machine-id` y las claves SSH tras clonar una VM, y confundir IaaS/PaaS/SaaS.

</div>
</div>

---

