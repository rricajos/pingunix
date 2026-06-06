---
title: "Simulacro Examen 305 - B"
tags:
  - lpic-3
  - examen-305
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "305"
---

# Simulacro B - Examen 305

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="305-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="351.1" data-correct="c">

### Pregunta 1 (Subtema 351.1)

¿Que archivo de dispositivo en el sistema de archivos del host proporciona la interfaz del hipervisor KVM para que QEMU pueda ejecutar codigo del guest directamente en la CPU?

- [ ] a) `/dev/vhost-net`
- [ ] b) `/dev/virtio`
- [ ] c) `/dev/kvm`
- [ ] d) `/dev/hypervisor`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/dev/kvm`**

El archivo de dispositivo `/dev/kvm` es la interfaz del modulo KVM del kernel con el espacio de usuario. QEMU abre este dispositivo para crear y gestionar maquinas virtuales utilizando las extensiones de virtualizacion por hardware del procesador (VT-x o AMD-V). A traves de llamadas ioctl() sobre este descriptor de archivo, QEMU puede crear VMs, configurar vCPUs, mapear memoria del guest y ejecutar codigo del guest directamente en la CPU fisica. `/dev/vhost-net` es la interfaz del backend de red en el kernel para virtio-net.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="351.1" data-correct="a">

### Pregunta 2 (Subtema 351.1)

¿Que comando de virsh permite editar interactivamente la definicion XML de una maquina virtual existente?

- [ ] a) `virsh edit vm1`
- [ ] b) `virsh xml-edit vm1`
- [ ] c) `virsh modify vm1 --xml`
- [ ] d) `virsh config vm1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `virsh edit vm1`**

`virsh edit` abre la definicion XML del dominio en el editor de texto configurado en la variable de entorno `$EDITOR` (o `vi` por defecto). Al guardar y cerrar, libvirt valida el XML y aplica los cambios. Esto es equivalente a exportar con `virsh dumpxml`, editar manualmente y reimportar con `virsh define`. Es la forma recomendada de modificar la configuracion de una VM porque libvirt valida la sintaxis XML antes de aplicarla, evitando configuraciones invalidas que podrian impedir el arranque de la VM.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="351.1" data-correct="d">

### Pregunta 3 (Subtema 351.1)

¿Que mecanismo de CPU permite a KVM ejecutar instrucciones del guest directamente en el procesador fisico sin traduccion binaria?

- [ ] a) Hyperthreading (HT)
- [ ] b) Control de ejecucion especulativa (Spectre mitigation)
- [ ] c) Tabla de paginas invertida (inverted page table)
- [ ] d) Tablas de paginas extendidas (EPT en Intel / NPT en AMD)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Tablas de paginas extendidas (EPT en Intel / NPT en AMD)**

Las Extended Page Tables (EPT, Intel) o Nested Page Tables (NPT, AMD) son extensiones de hardware que permiten al hipervisor gestionar la traduccion de memoria del guest sin intervencion por software en cada fallo de pagina. Cada VM tiene su propia tabla de paginas gestionada por el hardware, traduciendo directamente las direcciones virtuales del guest a direcciones fisicas del host en dos niveles. Esto elimina la necesidad de shadow page tables mantenidas por software, reduciendo significativamente la sobrecarga de virtualizacion en la gestion de memoria.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="351.1" data-correct="b">

### Pregunta 4 (Subtema 351.1)

¿Que comando de virsh guarda el estado completo de una maquina virtual en ejecucion (incluyendo la RAM) a un archivo para restaurarla posteriormente?

- [ ] a) `virsh snapshot-create vm1`
- [ ] b) `virsh save vm1 /ruta/estado.img`
- [ ] c) `virsh suspend vm1 --file /ruta/estado.img`
- [ ] d) `virsh hibernate vm1 /ruta/estado.img`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `virsh save vm1 /ruta/estado.img`**

`virsh save` detiene una VM en ejecucion y guarda todo su estado (memoria RAM, estado de CPU y dispositivos) en un archivo del host. La VM se apaga tras el guardado. Se restaura con `virsh restore /ruta/estado.img`, reanudando la ejecucion exactamente desde el punto en que fue guardada. A diferencia de los snapshots internos (que se almacenan dentro de la imagen de disco qcow2), `virsh save` produce un archivo externo independiente. Es util para migraciones offline o liberacion temporal de recursos.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="351.1" data-correct="a">

### Pregunta 5 (Subtema 351.1)

¿Que comando de virsh adjunta en caliente un nuevo disco virtio a una maquina virtual en ejecucion?

- [ ] a) `virsh attach-disk vm1 /var/lib/libvirt/images/extra.qcow2 vdb --driver qemu --subdriver qcow2`
- [ ] b) `virsh add-disk vm1 --source /var/lib/libvirt/images/extra.qcow2 --target vdb`
- [ ] c) `virsh hotplug-disk vm1 vdb /var/lib/libvirt/images/extra.qcow2`
- [ ] d) `virsh device-add vm1 --type disk --path /var/lib/libvirt/images/extra.qcow2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `virsh attach-disk vm1 /var/lib/libvirt/images/extra.qcow2 vdb --driver qemu --subdriver qcow2`**

`virsh attach-disk` permite adjuntar un disco a una VM, incluso en caliente si la VM esta en ejecucion y el bus del dispositivo lo soporta (virtio y SCSI soportan hotplug). Se especifica el dominio, la ruta del archivo de imagen y el nombre del dispositivo destino (vdb para el segundo disco virtio). `--driver qemu` indica el backend y `--subdriver qcow2` el formato del disco. Con `--persistent` el cambio se mantiene tras reinicio. El comando inverso es `virsh detach-disk`.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="351.2" data-correct="c">

### Pregunta 6 (Subtema 351.2)

¿Que comando de `xl` muestra informacion detallada sobre el hipervisor Xen, incluyendo version, memoria total y CPUs fisicas?

- [ ] a) `xl status`
- [ ] b) `xl version`
- [ ] c) `xl info`
- [ ] d) `xl hypervisor --details`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `xl info`**

`xl info` muestra informacion completa sobre el hipervisor Xen y el host, incluyendo: version del hipervisor, modelo y numero de CPUs fisicas, memoria total y libre, tipo de virtualizacion soportada (HVM, PV), version del kernel de Dom0, arquitectura y capacidades del procesador. Es el equivalente Xen de `virsh nodeinfo` en libvirt. Para ver solo los dominios se usa `xl list`, y para informacion de un dominio especifico `xl list -l nombre`.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="351.2" data-correct="b">

### Pregunta 7 (Subtema 351.2)

¿Que tipo de virtualizacion Xen combina el rendimiento de paravirtualizacion con la compatibilidad HVM, permitiendo ejecutar kernels sin modificar pero usando drivers PV para E/S?

- [ ] a) PV (Paravirtualizacion pura)
- [ ] b) PVHVM (PV drivers sobre HVM)
- [ ] c) Full emulation sin aceleracion
- [ ] d) PV-on-HVM sin drivers

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) PVHVM (PV drivers sobre HVM)**

PVHVM es un modo hibrido en Xen donde el dominio guest se ejecuta como HVM (sin modificar el kernel, usando extensiones de hardware VT-x/AMD-V), pero instala drivers paravirtualizados (PV) para disco y red dentro del guest. Esto combina la compatibilidad de HVM (cualquier SO sin modificar) con el rendimiento de E/S de la paravirtualizacion (evitando la emulacion de dispositivos IDE/e1000). PVH es una evolucion posterior que unifica ambos modos a nivel del hipervisor, eliminando la necesidad de emulacion de dispositivos QEMU.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="351.2" data-correct="d">

### Pregunta 8 (Subtema 351.2)

¿Que demonio de Xen gestiona el almacen de configuracion compartida (XenStore) entre Dom0 y los dominios guest?

- [ ] a) `xenconsoled`
- [ ] b) `xen-blkback`
- [ ] c) `oxenstored`
- [ ] d) `xenstored`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `xenstored`**

`xenstored` es el demonio que gestiona el XenStore, una base de datos jerarquica compartida (similar a un sistema de archivos) que permite la comunicacion de configuracion entre Dom0 y los dominios guest (DomU). Los dominios leen y escriben claves en el XenStore para negociar la configuracion de dispositivos paravirtualizados (como la conexion entre drivers frontend y backend). `oxenstored` es una implementacion alternativa en OCaml del mismo servicio. `xenconsoled` gestiona las consolas de texto de los dominios guest.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="351.2" data-correct="a">

### Pregunta 9 (Subtema 351.2)

¿Que comando de `xl` pausa temporalmente la ejecucion de un dominio Xen guest sin apagarlo?

- [ ] a) `xl pause domU`
- [ ] b) `xl suspend domU`
- [ ] c) `xl freeze domU`
- [ ] d) `xl stop domU`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `xl pause domU`**

`xl pause` congela la ejecucion de un dominio, suspendiendo todas sus vCPUs sin liberar la memoria ni destruir el dominio. El dominio permanece en estado pausado y puede reanudarse instantaneamente con `xl unpause domU`. A diferencia de `xl save` (que guarda el estado a disco y libera memoria) o `xl shutdown` (que envia senal de apagado al guest), `xl pause` mantiene el dominio completo en memoria pero sin consumir ciclos de CPU. Es util para depuracion o congelamiento temporal.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="351.3" data-correct="b">

### Pregunta 10 (Subtema 351.3)

¿Que opcion de QEMU configura el reenvio de un puerto del host a un puerto del guest cuando se usa red en modo usuario (SLIRP)?

- [ ] a) `-net port-forward,hostport=8080,guestport=80`
- [ ] b) `-nic user,hostfwd=tcp::8080-:80`
- [ ] c) `-netdev user,portmap=8080:80`
- [ ] d) `-network forward,host=8080,guest=80`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `-nic user,hostfwd=tcp::8080-:80`**

La red en modo usuario (SLIRP) de QEMU no requiere privilegios de root y proporciona NAT al guest. Para acceder a servicios del guest desde el host, se configura el reenvio de puertos con `hostfwd=protocolo::puertohost-:puertoguest`. En este ejemplo, las conexiones TCP al puerto 8080 del host se reenvian al puerto 80 del guest. La sintaxis moderna usa `-nic user,hostfwd=...` que combina frontend y backend de red. Se pueden especificar multiples reglas de reenvio separadas con comas.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="351.3" data-correct="c">

### Pregunta 11 (Subtema 351.3)

¿Que opcion de QEMU asigna 4 CPUs virtuales (vCPUs) a una maquina virtual con topologia de 2 sockets y 2 cores por socket?

- [ ] a) `-cpu 4,sockets=2,cores=2`
- [ ] b) `-vcpus 4 -topology 2s,2c`
- [ ] c) `-smp 4,sockets=2,cores=2,threads=1`
- [ ] d) `-processors 4 --layout=2x2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `-smp 4,sockets=2,cores=2,threads=1`**

La opcion `-smp` (Symmetric Multi-Processing) de QEMU configura las CPUs virtuales y su topologia. El primer parametro es el numero total de vCPUs, seguido de `sockets` (procesadores fisicos virtuales), `cores` (nucleos por socket) y `threads` (hilos por nucleo). La topologia afecta como el guest percibe la CPU y puede influir en el rendimiento del planificador del SO guest. Para hot-plug de CPUs se usa `-smp 2,maxcpus=8` que permite agregar CPUs en caliente hasta un maximo de 8.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="351.3" data-correct="d">

### Pregunta 12 (Subtema 351.3)

¿Que opcion de QEMU permite acceder a la consola de gestion (monitor) de QEMU a traves de una conexion telnet en el puerto 4444?

- [ ] a) `-console telnet:localhost:4444`
- [ ] b) `-serial telnet:localhost:4444`
- [ ] c) `-qmp telnet:localhost:4444,server,nowait`
- [ ] d) `-monitor telnet:localhost:4444,server,nowait`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `-monitor telnet:localhost:4444,server,nowait`**

La opcion `-monitor` redirige la consola de gestion interactiva (QEMU Monitor) al destino especificado. Con `telnet:localhost:4444,server,nowait`, QEMU escucha conexiones telnet en el puerto 4444 sin bloquear el inicio de la VM (`nowait`). El QEMU Monitor permite comandos como `info status`, `savevm`, `loadvm`, `migrate`, `device_add` y `quit`. `-qmp` es la interfaz de maquina (JSON) en lugar de la interfaz interactiva humana. `-serial` redirige el puerto serie del guest, no el monitor.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="351.3" data-correct="a">

### Pregunta 13 (Subtema 351.3)

¿Que comando de `qemu-img` muestra informacion detallada de una imagen de disco, incluyendo formato, tamano virtual, tamano real en disco y snapshots?

- [ ] a) `qemu-img info disco.qcow2`
- [ ] b) `qemu-img show disco.qcow2`
- [ ] c) `qemu-img status disco.qcow2`
- [ ] d) `qemu-img details disco.qcow2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `qemu-img info disco.qcow2`**

`qemu-img info` muestra metadatos detallados de una imagen de disco: formato detectado (qcow2, raw, vmdk...), tamano virtual (capacidad maxima), tamano real en disco (espacio ocupado para imagenes sparse), cluster size, snapshots internos, backing file (si existe), cifrado y otras opciones especificas del formato. La opcion `--output=json` produce la salida en formato JSON para procesamiento automatizado. Es una herramienta esencial para diagnosticar problemas con imagenes de disco y verificar sus propiedades.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="351.4" data-correct="b">

### Pregunta 14 (Subtema 351.4)

¿Que comando de virsh crea una nueva red virtual a partir de una definicion XML sin iniciarla?

- [ ] a) `virsh net-create red.xml`
- [ ] b) `virsh net-define red.xml`
- [ ] c) `virsh net-add red.xml`
- [ ] d) `virsh net-register red.xml`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `virsh net-define red.xml`**

`virsh net-define` registra una nueva red virtual de forma persistente a partir de un archivo XML, pero sin iniciarla inmediatamente. Se inicia con `virsh net-start nombre`. Para que se inicie automaticamente con libvirtd se usa `virsh net-autostart nombre`. En cambio, `virsh net-create` crea e inicia la red inmediatamente pero de forma transitoria (se pierde al reiniciar libvirtd). Los comandos de gestion incluyen `virsh net-list`, `virsh net-info`, `virsh net-edit`, `virsh net-destroy` (detener) y `virsh net-undefine` (eliminar definicion).

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="351.4" data-correct="c">

### Pregunta 15 (Subtema 351.4)

¿Que herramienta de la suite libguestfs permite inspeccionar y modificar el sistema de archivos de una imagen de disco virtual sin necesidad de arrancar la VM?

- [ ] a) `virsh vol-upload`
- [ ] b) `qemu-nbd`
- [ ] c) `guestfish`
- [ ] d) `virt-viewer`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `guestfish`**

`guestfish` (Guest Filesystem Interactive Shell) es la herramienta interactiva de libguestfs que permite montar, inspeccionar y modificar el sistema de archivos de imagenes de disco virtual sin arrancar la VM ni necesitar acceso de red. Soporta operaciones como copiar archivos, editar configuraciones, instalar paquetes, reparar sistemas de arranque y mas. Otras herramientas de la suite incluyen `virt-customize` (personalizar imagenes), `virt-sysprep` (limpiar datos), `virt-resize` (redimensionar particiones) y `virt-inspector` (detectar SO y configuracion).

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="351.4" data-correct="d">

### Pregunta 16 (Subtema 351.4)

¿Que comando de virsh muestra el uso actual de CPU de todas las maquinas virtuales activas en formato de tabla?

- [ ] a) `virsh dominfo --all`
- [ ] b) `virsh top`
- [ ] c) `virsh list --cpu-usage`
- [ ] d) `virsh cpu-stats dominio` (por dominio) o herramientas como `virt-top` para vista global

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `virsh cpu-stats dominio` (por dominio) o herramientas como `virt-top` para vista global**

`virsh cpu-stats` muestra estadisticas de CPU de un dominio especifico (tiempo de CPU por vCPU y total). Para una vista global tipo `top` de todas las VMs, se usa `virt-top`, una herramienta independiente que muestra en tiempo real el consumo de CPU, memoria y E/S de todos los dominios. `virsh domstats --cpu-total` tambien puede mostrar estadisticas de CPU de multiples dominios. `virsh dominfo` muestra informacion general del dominio (estado, memoria, CPUs) pero no estadisticas de uso en tiempo real.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="351.4" data-correct="a">

### Pregunta 17 (Subtema 351.4)

¿Que directiva se usa en el XML de libvirt para configurar una interfaz de red bridge que conecte la VM directamente a la red fisica del host?

- [ ] a) `<interface type='bridge'><source bridge='br0'/></interface>`
- [ ] b) `<interface type='network'><source network='bridge0'/></interface>`
- [ ] c) `<interface type='direct'><source bridge='br0'/></interface>`
- [ ] d) `<interface type='physical'><source dev='br0'/></interface>`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `<interface type='bridge'><source bridge='br0'/></interface>`**

La configuracion `type='bridge'` conecta la interfaz virtual de la VM directamente a un bridge Linux del host (por ejemplo, `br0`), permitiendo que la VM aparezca como un dispositivo mas en la red fisica. El bridge debe estar configurado previamente en el host con la interfaz fisica como puerto. `type='network'` usa una red virtual gestionada por libvirt. `type='direct'` usa macvtap para conectar directamente a la interfaz fisica sin bridge. Dentro de `<interface>` se define tambien el modelo (`<model type='virtio'/>`) y la MAC.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="352.1" data-correct="b">

### Pregunta 18 (Subtema 352.1)

¿Que tipo de namespace de Linux proporciona un arbol de procesos aislado, donde el proceso init del contenedor tiene PID 1?

- [ ] a) User namespace
- [ ] b) PID namespace
- [ ] c) Mount namespace (mnt)
- [ ] d) UTS namespace

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) PID namespace**

El PID namespace crea un arbol de procesos aislado donde el primer proceso del contenedor recibe el PID 1, como si fuera el proceso init del sistema. Los procesos dentro del contenedor solo pueden ver otros procesos en su mismo namespace (y namespaces hijos). Desde el host, todos los procesos del contenedor son visibles con sus PIDs reales del host namespace. Los PID namespaces pueden anidarse, y un proceso tiene un PID diferente en cada nivel de la jerarquia. Esto es fundamental para el aislamiento de procesos en contenedores.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="352.1" data-correct="c">

### Pregunta 19 (Subtema 352.1)

¿Que comando del kernel Linux permite entrar en los namespaces de un proceso existente para ejecutar comandos dentro de su contexto de aislamiento?

- [ ] a) `unshare --target PID`
- [ ] b) `ip netns exec PID`
- [ ] c) `nsenter --target PID --mount --uts --ipc --net --pid`
- [ ] d) `enter-ns --pid PID --all`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `nsenter --target PID --mount --uts --ipc --net --pid`**

`nsenter` permite entrar en uno o mas namespaces de un proceso existente identificado por su PID. Cada flag selecciona un namespace especifico: `--mount` (sistema de archivos), `--uts` (hostname), `--ipc` (comunicacion entre procesos), `--net` (red), `--pid` (procesos), `--user` (usuarios) y `--cgroup`. Es la herramienta de bajo nivel que usan internamente comandos como `docker exec` y `lxc-attach`. `unshare` crea nuevos namespaces en lugar de entrar en existentes. Los archivos de namespace estan en `/proc/PID/ns/`.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="352.1" data-correct="d">

### Pregunta 20 (Subtema 352.1)

¿Que tipo de contenedor LXC se ejecuta sin privilegios de root en el host, mapeando los UIDs internos a un rango de UIDs sin privilegios?

- [ ] a) Contenedor privilegiado con SELinux
- [ ] b) Contenedor chroot
- [ ] c) Contenedor seguro con AppArmor
- [ ] d) Contenedor no privilegiado (unprivileged container)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Contenedor no privilegiado (unprivileged container)**

Los contenedores no privilegiados de LXC utilizan el user namespace del kernel para mapear los UIDs dentro del contenedor (0-65535) a un rango de UIDs sin privilegios en el host (por ejemplo, 100000-165535). Esto significa que el root (UID 0) dentro del contenedor es en realidad un usuario sin privilegios en el host, proporcionando una capa de seguridad fundamental. Se configuran con `lxc.idmap` en el archivo de configuracion y requieren entradas en `/etc/subuid` y `/etc/subgid` para el usuario que ejecuta el contenedor.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="352.1" data-correct="a">

### Pregunta 21 (Subtema 352.1)

¿Que directiva de configuracion de LXC limita la memoria RAM maxima que puede usar un contenedor?

- [ ] a) `lxc.cgroup.memory.limit_in_bytes` (cgroups v1) o `lxc.cgroup2.memory.max` (cgroups v2)
- [ ] b) `lxc.memory.max = 512M`
- [ ] c) `lxc.resource.ram = 512M`
- [ ] d) `lxc.limit.memory = 512M`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `lxc.cgroup.memory.limit_in_bytes` (cgroups v1) o `lxc.cgroup2.memory.max` (cgroups v2)**

Los limites de recursos en LXC se configuran directamente a traves de las interfaces de cgroups del kernel. En cgroups v1, `lxc.cgroup.memory.limit_in_bytes = 536870912` limita la RAM a 512 MB. En cgroups v2, la directiva equivalente es `lxc.cgroup2.memory.max = 536870912`. Otros limites de cgroups incluyen CPU (`cpuset.cpus`, `cpu.shares`), E/S (`blkio.weight`) y numero de procesos (`pids.max`). Estas directivas se definen en el archivo `/var/lib/lxc/nombre/config`.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="352.2" data-correct="b">

### Pregunta 22 (Subtema 352.2)

¿Que instruccion de un Dockerfile establece el directorio de trabajo para las instrucciones RUN, CMD, ENTRYPOINT, COPY y ADD que le siguen?

- [ ] a) `DIRECTORY /app`
- [ ] b) `WORKDIR /app`
- [ ] c) `CHDIR /app`
- [ ] d) `SETDIR /app`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `WORKDIR /app`**

`WORKDIR` establece el directorio de trabajo dentro del contenedor para todas las instrucciones subsiguientes (RUN, CMD, ENTRYPOINT, COPY, ADD). Si el directorio no existe, se crea automaticamente. Se puede usar multiples veces en un Dockerfile y acepta rutas relativas (relativas al WORKDIR anterior). Es preferible a usar `RUN cd /app` porque `WORKDIR` afecta a todas las instrucciones posteriores mientras que `cd` solo afecta al `RUN` donde se ejecuta. Tambien establece el directorio de trabajo por defecto al ejecutar el contenedor.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="352.2" data-correct="c">

### Pregunta 23 (Subtema 352.2)

¿Que instruccion de un Dockerfile define un punto de montaje de volumen que sera persistido fuera del sistema de archivos de capas del contenedor?

- [ ] a) `MOUNT /datos`
- [ ] b) `PERSIST /datos`
- [ ] c) `VOLUME /datos`
- [ ] d) `STORAGE /datos`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `VOLUME /datos`**

`VOLUME` en un Dockerfile declara que el directorio especificado sera un punto de montaje para datos persistentes. Al crear un contenedor, Docker creara automaticamente un volumen anonimo para ese directorio (a menos que se especifique explicitamente un bind mount o named volume con `-v`). Los datos en el volumen persisten incluso si el contenedor se elimina (si se usa un named volume). `VOLUME` no permite especificar el directorio del host; eso se hace en tiempo de ejecucion con `docker run -v /host:/datos`.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="352.2" data-correct="d">

### Pregunta 24 (Subtema 352.2)

¿Que instruccion de un Dockerfile define el comando que no puede ser sobrescrito facilmente al ejecutar `docker run`, sirviendo como ejecutable principal del contenedor?

- [ ] a) `CMD`
- [ ] b) `RUN`
- [ ] c) `EXEC`
- [ ] d) `ENTRYPOINT`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `ENTRYPOINT`**

`ENTRYPOINT` define el ejecutable principal del contenedor y no es sobrescrito por los argumentos de `docker run` (a diferencia de `CMD`). Los argumentos pasados a `docker run` se anaden como parametros al ENTRYPOINT. Se puede combinar con `CMD` para proporcionar argumentos por defecto: `ENTRYPOINT ["nginx"]` con `CMD ["-g", "daemon off;"]`. Para sobrescribir el ENTRYPOINT se necesita usar explicitamente `--entrypoint` en `docker run`. Existen dos formas: exec (`ENTRYPOINT ["ejecutable"]`) y shell (`ENTRYPOINT comando`).

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="352.2" data-correct="a">

### Pregunta 25 (Subtema 352.2)

¿Que tecnica de construccion de imagenes Docker permite usar multiples instrucciones `FROM` en un Dockerfile para reducir el tamano de la imagen final?

- [ ] a) Multi-stage build
- [ ] b) Layer squashing
- [ ] c) Image flattening
- [ ] d) Dockerfile chaining

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Multi-stage build**

Los multi-stage builds permiten usar multiples instrucciones `FROM` en un Dockerfile, cada una iniciando una nueva etapa de construccion. Se puede copiar artefactos de una etapa a otra con `COPY --from=etapa`. Ejemplo: una etapa con herramientas de compilacion construye el binario, y la etapa final (imagen minima como `alpine`) solo copia el binario compilado, resultando en imagenes mucho mas pequenas sin herramientas de compilacion. Las etapas se nombran con `FROM golang:1.21 AS builder` y se referencian con `COPY --from=builder`.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="352.3" data-correct="b">

### Pregunta 26 (Subtema 352.3)

¿Que comando inicializa un nodo como manager de un cluster Docker Swarm?

- [ ] a) `docker cluster init`
- [ ] b) `docker swarm init`
- [ ] c) `docker swarm create --manager`
- [ ] d) `docker node init --role manager`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `docker swarm init`**

`docker swarm init` inicializa el nodo actual como el primer manager de un nuevo cluster Docker Swarm. El comando genera un token de union que los demas nodos usan para unirse al cluster con `docker swarm join --token TOKEN IP:2377`. Se pueden agregar nodos como workers o como managers adicionales (para alta disponibilidad). Opciones importantes incluyen `--advertise-addr` (IP de comunicacion entre nodos) y `--data-path-port` (puerto para trafico overlay). Los managers usan el algoritmo Raft para consenso distribuido.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="352.3" data-correct="c">

### Pregunta 27 (Subtema 352.3)

En Kubernetes, ¿que componente del plano de control almacena todo el estado del cluster de forma persistente?

- [ ] a) `kube-apiserver`
- [ ] b) `kube-scheduler`
- [ ] c) `etcd`
- [ ] d) `kube-controller-manager`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `etcd`**

`etcd` es un almacen de datos clave-valor distribuido y consistente que persiste todo el estado del cluster Kubernetes: configuracion de nodos, Pods, Services, Deployments, Secrets, ConfigMaps y demas objetos. Solo el `kube-apiserver` se comunica directamente con etcd. Es un componente critico cuya perdida de datos significaria la perdida del estado completo del cluster. Se recomienda ejecutar etcd en un cluster de al menos 3 nodos para alta disponibilidad, usando el protocolo Raft para consenso. Los backups de etcd son esenciales para la recuperacion ante desastres.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="352.3" data-correct="d">

### Pregunta 28 (Subtema 352.3)

¿Que tipo de objeto de Kubernetes asegura que un Pod se ejecute en todos (o un subconjunto de) los nodos del cluster?

- [ ] a) ReplicaSet
- [ ] b) StatefulSet
- [ ] c) Deployment
- [ ] d) DaemonSet

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) DaemonSet**

Un DaemonSet garantiza que una copia de un Pod se ejecute en cada nodo del cluster (o en un subconjunto seleccionado mediante `nodeSelector` o `affinity`). Cuando se agrega un nuevo nodo al cluster, el DaemonSet automaticamente programa un Pod en el. Es ideal para servicios que deben ejecutarse en todos los nodos: agentes de logging (Fluentd, Filebeat), agentes de monitorizacion (Prometheus node exporter), plugins de red (Calico, Flannel) o agentes de almacenamiento. A diferencia de Deployment, no se especifica un numero de replicas.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="352.3" data-correct="a">

### Pregunta 29 (Subtema 352.3)

¿Que objeto de Kubernetes permite almacenar datos de configuracion como pares clave-valor y montarlos como archivos o variables de entorno en Pods?

- [ ] a) ConfigMap
- [ ] b) Secret
- [ ] c) PersistentVolume
- [ ] d) Annotation

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) ConfigMap**

Un ConfigMap almacena datos de configuracion no confidenciales como pares clave-valor. Los Pods pueden consumir ConfigMaps como variables de entorno (`envFrom`), argumentos de linea de comandos o archivos montados en un volumen. Ejemplo: `kubectl create configmap app-config --from-file=config.properties`. A diferencia de los Secrets (que almacenan datos sensibles codificados en base64), los ConfigMaps estan diseñados para configuracion no sensible. Los cambios en un ConfigMap montado como volumen se propagan automaticamente al Pod (con cierto retraso).

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="353.1" data-correct="b">

### Pregunta 30 (Subtema 353.1)

¿Que bloque de una plantilla Packer en formato HCL define la plataforma destino donde se construira la imagen (por ejemplo, QEMU, Amazon, Docker)?

- [ ] a) `provisioner`
- [ ] b) `source`
- [ ] c) `target`
- [ ] d) `platform`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `source`**

En el formato HCL2 de Packer, el bloque `source` (antes llamado `builder` en JSON) define la plataforma destino y los parametros para construir la imagen. Ejemplo: `source "qemu" "ubuntu" { ... }` define un builder QEMU para crear una imagen de Ubuntu. Los parametros incluyen tipo de maquina, ISO de instalacion, configuracion de disco, SSH, formato de salida, etc. El bloque `build` referencia los sources y define los provisioners. `packer init` descarga los plugins necesarios para los sources definidos.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="353.1" data-correct="c">

### Pregunta 31 (Subtema 353.1)

¿Que directiva de cloud-init en un archivo cloud-config permite ejecutar comandos arbitrarios durante el primer arranque de la instancia?

- [ ] a) `exec:`
- [ ] b) `commands:`
- [ ] c) `runcmd:`
- [ ] d) `shell:`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `runcmd:`**

La directiva `runcmd:` en un archivo cloud-config ejecuta una lista de comandos durante el primer arranque de la instancia, despues de que todos los modulos de configuracion se hayan procesado. Cada elemento puede ser una cadena (ejecutada en shell) o una lista (ejecutada directamente sin shell). Ejemplo: `runcmd: ["systemctl enable nginx", "systemctl start nginx"]`. A diferencia de `bootcmd:` (que se ejecuta muy temprano en cada arranque), `runcmd:` solo se ejecuta una vez durante la inicializacion. Los comandos se ejecutan como root.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="353.1" data-correct="a">

### Pregunta 32 (Subtema 353.1)

¿Que directiva de cloud-init permite crear archivos con contenido especifico en el sistema de archivos de la instancia?

- [ ] a) `write_files:`
- [ ] b) `create_files:`
- [ ] c) `file_content:`
- [ ] d) `templates:`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `write_files:`**

La directiva `write_files:` crea o sobrescribe archivos en el sistema de archivos con contenido definido en el cloud-config. Cada entrada especifica `path` (ruta del archivo), `content` (contenido), `permissions` (permisos, como "0644"), `owner` (propietario) y opcionalmente `encoding` (base64, gzip). Ejemplo: escribir un archivo de configuracion de nginx o una clave de aplicacion. Los archivos se crean antes de que se ejecuten `runcmd` o `bootcmd`, lo que permite referenciarlos en comandos posteriores.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="353.1" data-correct="d">

### Pregunta 33 (Subtema 353.1)

¿Que comando permite verificar el estado de cloud-init y si se completo correctamente la inicializacion de una instancia?

- [ ] a) `cloud-init check`
- [ ] b) `systemctl status cloud-init-complete`
- [ ] c) `cloud-init --verify`
- [ ] d) `cloud-init status`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `cloud-init status`**

`cloud-init status` muestra el estado actual de la inicializacion: `running` (en ejecucion), `done` (completado) o `error` (fallo). Con `--long` muestra detalles adicionales incluyendo la etapa actual y errores. `cloud-init status --wait` bloquea hasta que cloud-init termine. Otros comandos utiles son `cloud-init analyze show` (analisis de rendimiento por modulo), `cloud-init query` (consultar metadatos), `cloud-init schema --system` (validar configuracion) y los logs en `/var/log/cloud-init.log` y `/var/log/cloud-init-output.log`.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="353.2" data-correct="b">

### Pregunta 34 (Subtema 353.2)

¿Que comando de Vagrant destruye completamente la maquina virtual y libera todos los recursos asociados?

- [ ] a) `vagrant halt --force`
- [ ] b) `vagrant destroy`
- [ ] c) `vagrant remove`
- [ ] d) `vagrant delete`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `vagrant destroy`**

`vagrant destroy` elimina completamente la maquina virtual, incluyendo los discos virtuales y cualquier estado almacenado. Solicita confirmacion antes de proceder (se puede omitir con `-f` o `--force`). A diferencia de `vagrant halt` (que solo detiene la VM preservando el disco), `destroy` libera todos los recursos. El `Vagrantfile` y los datos del aprovisionamiento no se eliminan, por lo que se puede recrear la VM con `vagrant up`. Es util para empezar de cero o limpiar entornos de desarrollo que ya no se necesitan.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="353.2" data-correct="c">

### Pregunta 35 (Subtema 353.2)

¿Que directiva del Vagrantfile configura una red privada con una IP estatica para la maquina virtual?

- [ ] a) `config.vm.network "public_network", ip: "192.168.50.10"`
- [ ] b) `config.vm.ip = "192.168.50.10"`
- [ ] c) `config.vm.network "private_network", ip: "192.168.50.10"`
- [ ] d) `config.vm.network "internal", address: "192.168.50.10"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `config.vm.network "private_network", ip: "192.168.50.10"`**

`config.vm.network "private_network"` crea una red host-only que permite la comunicacion entre el host y la VM (y entre VMs) sin exponerla a la red externa. Con `ip:` se asigna una IP estatica; sin ella, se usa DHCP. `"public_network"` crea una red bridged que conecta la VM a la red fisica. Tambien se puede configurar `"forwarded_port"` para reenviar puertos: `config.vm.network "forwarded_port", guest: 80, host: 8080`. Multiples interfaces de red se definen con multiples lineas `config.vm.network`.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="353.2" data-correct="a">

### Pregunta 36 (Subtema 353.2)

¿Que directiva del Vagrantfile sincroniza un directorio del host con un directorio dentro de la maquina virtual?

- [ ] a) `config.vm.synced_folder "./src", "/var/www/html"`
- [ ] b) `config.vm.shared_dir "./src", "/var/www/html"`
- [ ] c) `config.vm.mount "./src" => "/var/www/html"`
- [ ] d) `config.vm.folder_sync source: "./src", target: "/var/www/html"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `config.vm.synced_folder "./src", "/var/www/html"`**

`config.vm.synced_folder` monta un directorio del host dentro de la VM, manteniendo los archivos sincronizados bidirecccionalmente. El primer argumento es la ruta en el host (relativa al Vagrantfile) y el segundo la ruta dentro de la VM. Por defecto, el directorio del proyecto (donde esta el Vagrantfile) se sincroniza con `/vagrant`. Tipos de sincronizacion: VirtualBox shared folders (defecto), NFS (`type: "nfs"`), rsync (`type: "rsync"`) y SMB (`type: "smb"`). NFS es significativamente mas rapido para proyectos grandes.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="351.1" data-correct="d">

### Pregunta 37 (Subtema 351.1)

En el contexto de KVM, ¿que es el dispositivo `virtio-balloon` y cual es su funcion?

- [ ] a) Un controlador de red de alta velocidad para VMs
- [ ] b) Un mecanismo de cifrado de memoria de la VM
- [ ] c) Un driver de almacenamiento para discos thin provisioned
- [ ] d) Un mecanismo para ajustar dinamicamente la memoria RAM asignada a una VM en ejecucion

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Un mecanismo para ajustar dinamicamente la memoria RAM asignada a una VM en ejecucion**

El dispositivo `virtio-balloon` permite al hipervisor reclamar memoria de una VM en ejecucion o devolversela sin reiniciarla. Cuando el hipervisor necesita memoria, "infla" el balloon dentro del guest, haciendo que el guest libere paginas de memoria al host. Cuando la VM necesita mas memoria, el balloon se "desinfla". Se configura en QEMU con `-device virtio-balloon-pci` y en libvirt se gestiona con `virsh setmem dominio memoria_en_KB`. Requiere drivers virtio en el guest. No es un reemplazo del memory hotplug, sino un mecanismo de reclamacion dinamica.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="352.2" data-correct="c">

### Pregunta 38 (Subtema 352.2)

¿Que comando de Docker inspecciona los metadatos detallados de un contenedor, imagen, red o volumen en formato JSON?

- [ ] a) `docker describe miweb`
- [ ] b) `docker info miweb`
- [ ] c) `docker inspect miweb`
- [ ] d) `docker metadata miweb`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `docker inspect miweb`**

`docker inspect` devuelve informacion detallada en formato JSON sobre objetos Docker (contenedores, imagenes, redes, volumenes). Incluye configuracion completa, estado, red, montajes, variables de entorno, puntos de montaje y mucho mas. Se puede filtrar la salida con `--format` usando plantillas Go: por ejemplo, `docker inspect --format '{{.NetworkSettings.IPAddress}}' miweb` extrae solo la IP. `docker container inspect`, `docker image inspect`, `docker network inspect` y `docker volume inspect` son variantes especificas.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="352.3" data-correct="b">

### Pregunta 39 (Subtema 352.3)

¿Que objeto de Kubernetes permite almacenar datos sensibles como contraseñas, tokens y claves SSH de forma codificada en base64?

- [ ] a) ConfigMap
- [ ] b) Secret
- [ ] c) EncryptedData
- [ ] d) Credential

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Secret**

Un Secret en Kubernetes almacena datos sensibles codificados en base64 (no cifrados por defecto). Los tipos incluyen `Opaque` (generico), `kubernetes.io/tls` (certificados TLS), `kubernetes.io/dockerconfigjson` (credenciales de registro Docker) y `kubernetes.io/service-account-token`. Los Pods consumen Secrets como variables de entorno o archivos montados. Se crean con `kubectl create secret generic db-pass --from-literal=password=s3cr3t`. Para cifrado real en reposo, se configura `EncryptionConfiguration` en el API server o se usa un sistema externo como HashiCorp Vault.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="351.3" data-correct="d">

### Pregunta 40 (Subtema 351.3)

¿Que comando de `qemu-img` crea una imagen overlay (diferencial) que usa otra imagen como base de solo lectura?

- [ ] a) `qemu-img create -f qcow2 -o overlay=base.qcow2 diff.qcow2 20G`
- [ ] b) `qemu-img snapshot -c diff base.qcow2`
- [ ] c) `qemu-img link base.qcow2 diff.qcow2`
- [ ] d) `qemu-img create -f qcow2 -b base.qcow2 -F qcow2 diff.qcow2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `qemu-img create -f qcow2 -b base.qcow2 -F qcow2 diff.qcow2`**

La opcion `-b` (backing file) crea una imagen diferencial que almacena solo los cambios respecto a la imagen base. `-F` especifica el formato de la imagen base. Las lecturas de sectores no modificados se redirigen a la imagen base, mientras que las escrituras se almacenan en la imagen diferencial. Esto permite crear multiples VMs a partir de una misma imagen base (golden image) con minimo uso de espacio adicional. `qemu-img rebase` permite cambiar la imagen base, y `qemu-img commit` fusiona los cambios de vuelta a la base.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="351.2" data-correct="c">

### Pregunta 41 (Subtema 351.2)

¿Que comando de `xl` realiza la migracion en caliente de un dominio Xen a otro host?

- [ ] a) `xl move domU host2`
- [ ] b) `xl transfer --live domU host2`
- [ ] c) `xl migrate domU host2`
- [ ] d) `xl relocate domU host2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `xl migrate domU host2`**

`xl migrate` transfiere un dominio en ejecucion a otro host Xen con minima interrupcion. El dominio continua ejecutandose mientras se copia iterativamente la memoria al host destino. En la ultima iteracion, el dominio se pausa brevemente, se transfiere el estado final de la memoria y los registros de CPU, y se reanuda en el destino. Requiere almacenamiento compartido (NFS, SAN) para los discos o se puede migrar con `--copy-storage-all`. La comunicacion entre hosts se realiza via el demonio `xl` escuchando en el destino.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="352.1" data-correct="b">

### Pregunta 42 (Subtema 352.1)

¿Que tipo de namespace de Linux aisla el hostname y el nombre de dominio NIS del sistema, permitiendo que cada contenedor tenga su propio hostname?

- [ ] a) PID namespace
- [ ] b) UTS namespace
- [ ] c) Network namespace
- [ ] d) IPC namespace

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) UTS namespace**

El UTS namespace (UNIX Time-Sharing) aisla los identificadores del sistema: hostname (`uname -n`) y nombre de dominio NIS. Cada contenedor puede tener su propio hostname independiente sin afectar al host ni a otros contenedores. Se establece con `hostname` o `sethostname()` dentro del namespace. En Docker, se configura con `docker run --hostname micontenedor`. En LXC, con la directiva `lxc.uts.name`. El comando `unshare --uts` crea un nuevo UTS namespace manualmente. El IPC namespace aisla las colas de mensajes, semaforos y memoria compartida de System V.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="352.2" data-correct="a">

### Pregunta 43 (Subtema 352.2)

¿Que comando de Docker permite ejecutar un comando dentro de un contenedor que ya esta en ejecucion?

- [ ] a) `docker exec -it miweb /bin/bash`
- [ ] b) `docker run -it miweb /bin/bash`
- [ ] c) `docker attach --exec miweb /bin/bash`
- [ ] d) `docker shell miweb /bin/bash`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `docker exec -it miweb /bin/bash`**

`docker exec` ejecuta un nuevo comando dentro de un contenedor en ejecucion. Las opciones `-i` (interactivo, mantiene stdin abierto) y `-t` (asigna un pseudo-TTY) son necesarias para sesiones interactivas como una shell. A diferencia de `docker attach` (que conecta al proceso principal PID 1 del contenedor), `exec` crea un nuevo proceso independiente. Opciones adicionales incluyen `-u` (ejecutar como otro usuario), `-w` (directorio de trabajo), `-e` (variables de entorno) y `-d` (modo detached, ejecutar en segundo plano).

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="352.2" data-correct="d">

### Pregunta 44 (Subtema 352.2)

¿Que comando de Docker permite exportar una imagen como un archivo tar para transferirla a otro host sin usar un registro?

- [ ] a) `docker export miimagen > imagen.tar`
- [ ] b) `docker backup miimagen -o imagen.tar`
- [ ] c) `docker image tar miimagen > imagen.tar`
- [ ] d) `docker save miimagen -o imagen.tar`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `docker save miimagen -o imagen.tar`**

`docker save` exporta una o mas imagenes Docker (con todas sus capas, tags y metadatos) a un archivo tar. Se importa en otro host con `docker load -i imagen.tar`. A diferencia de `docker export` (que exporta el sistema de archivos de un contenedor como una sola capa, perdiendo el historial y metadatos), `docker save` preserva la estructura completa de la imagen con todas sus capas. Es util para transferir imagenes entre hosts sin conexion a un registro o para backups.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="352.3" data-correct="c">

### Pregunta 45 (Subtema 352.3)

En Kubernetes, ¿que tipo de Service expone el servicio en un puerto estatico de cada nodo del cluster?

- [ ] a) ClusterIP
- [ ] b) LoadBalancer
- [ ] c) NodePort
- [ ] d) ExternalName

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) NodePort**

Un Service de tipo `NodePort` expone el servicio en un puerto estatico (rango 30000-32767 por defecto) en la IP de cada nodo del cluster. Las peticiones a `<IP_nodo>:<NodePort>` se reenvian al Service y de ahi a los Pods. Internamente crea tambien un ClusterIP. `ClusterIP` solo es accesible dentro del cluster. `LoadBalancer` crea un balanceador de carga externo del proveedor cloud (y tambien genera un NodePort y ClusterIP). `ExternalName` mapea el Service a un nombre DNS externo mediante un registro CNAME.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="352.3" data-correct="b">

### Pregunta 46 (Subtema 352.3)

¿Que objeto de Kubernetes proporciona almacenamiento persistente que sobrevive al ciclo de vida de los Pods, abstrayendo el backend de almacenamiento subyacente?

- [ ] a) ConfigMap
- [ ] b) PersistentVolumeClaim (PVC)
- [ ] c) EmptyDir
- [ ] d) HostPath

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) PersistentVolumeClaim (PVC)**

Un PersistentVolumeClaim es una solicitud de almacenamiento por parte de un usuario que se vincula a un PersistentVolume (PV). El PV representa el recurso de almacenamiento real (NFS, iSCSI, Ceph, disco cloud, etc.), mientras que el PVC abstrae los detalles, permitiendo a los Pods solicitar almacenamiento por tamaño y modo de acceso (`ReadWriteOnce`, `ReadOnlyMany`, `ReadWriteMany`). Con StorageClasses se puede aprovisionar PVs automaticamente (dynamic provisioning). `EmptyDir` es un volumen temporal que se borra al eliminar el Pod.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="353.1" data-correct="a">

### Pregunta 47 (Subtema 353.1)

¿Que comando de Terraform aplica los cambios planificados a la infraestructura real despues de revisar el plan de ejecucion?

- [ ] a) `terraform apply`
- [ ] b) `terraform deploy`
- [ ] c) `terraform execute`
- [ ] d) `terraform push`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `terraform apply`**

`terraform apply` ejecuta los cambios necesarios para alcanzar el estado deseado definido en los archivos de configuracion (`.tf`). Primero muestra un plan de ejecucion (como `terraform plan`) y solicita confirmacion antes de proceder. Se puede usar `terraform apply plan.out` para aplicar un plan previamente guardado sin confirmacion adicional. `-auto-approve` omite la confirmacion interactiva. Terraform mantiene un archivo de estado (`terraform.tfstate`) que registra la correspondencia entre los recursos definidos y los reales.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="353.1" data-correct="c">

### Pregunta 48 (Subtema 353.1)

¿Que comando de Terraform genera un plan de ejecucion mostrando los cambios que se realizaran sin aplicarlos?

- [ ] a) `terraform diff`
- [ ] b) `terraform preview`
- [ ] c) `terraform plan`
- [ ] d) `terraform check`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `terraform plan`**

`terraform plan` analiza la configuracion actual, el estado almacenado y la infraestructura real para generar un plan de ejecucion que muestra que recursos se crearan (+), modificaran (~) o destruiran (-). No realiza ningun cambio real. Se puede guardar el plan con `-out=plan.out` para aplicarlo posteriormente con `terraform apply plan.out`, garantizando que los cambios aplicados sean exactamente los revisados. Es una practica recomendada ejecutar `plan` antes de `apply`, especialmente en entornos de produccion.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="353.2" data-correct="d">

### Pregunta 49 (Subtema 353.2)

¿Que comando de Vagrant genera un `Vagrantfile` plantilla para un box especifico?

- [ ] a) `vagrant create ubuntu/jammy64`
- [ ] b) `vagrant new ubuntu/jammy64`
- [ ] c) `vagrant setup ubuntu/jammy64`
- [ ] d) `vagrant init ubuntu/jammy64`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `vagrant init ubuntu/jammy64`**

`vagrant init` genera un `Vagrantfile` plantilla en el directorio actual con el box especificado como imagen base. El Vagrantfile contiene la configuracion minima con comentarios explicativos. Si ya existe un Vagrantfile, el comando falla (se puede forzar con `--force`). Con `--minimal` genera un archivo sin comentarios. El box `ubuntu/jammy64` se descargara automaticamente de Vagrant Cloud al ejecutar `vagrant up` si no esta disponible localmente. Los boxes se gestionan con `vagrant box add`, `vagrant box list`, `vagrant box remove` y `vagrant box update`.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="353.2" data-correct="b">

### Pregunta 50 (Subtema 353.2)

¿Que comando de Vagrant muestra el estado actual de las maquinas virtuales gestionadas en el directorio actual?

- [ ] a) `vagrant info`
- [ ] b) `vagrant status`
- [ ] c) `vagrant list`
- [ ] d) `vagrant show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `vagrant status`**

`vagrant status` muestra el estado actual de las maquinas virtuales definidas en el Vagrantfile del directorio actual. Los estados posibles incluyen: `not created` (no creada), `running` (en ejecucion), `poweroff` (apagada), `saved` (suspendida) y `aborted` (terminada inesperadamente). Para ver el estado de todas las maquinas Vagrant del sistema (todos los directorios), se usa `vagrant global-status`. `vagrant global-status --prune` limpia las entradas obsoletas de la cache global.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="351.3" data-correct="c">

### Pregunta 51 (Subtema 351.3)

Escribe el comando QEMU completo para iniciar una VM con KVM habilitado, 2 GB de RAM, 2 vCPUs, un disco qcow2 con interfaz virtio y red en modo usuario con reenvio del puerto SSH. ¿Cual es la opcion correcta?

- [ ] a) `qemu-system-x86_64 -kvm -ram 2G -cpus 2 -hda disco.qcow2 -net user,ssh=2222`
- [ ] b) `qemu-kvm --memory 2048 --smp 2 --disk disco.qcow2,virtio --network user,forward=22`
- [ ] c) `qemu-system-x86_64 -enable-kvm -m 2048 -smp 2 -drive file=disco.qcow2,format=qcow2,if=virtio -nic user,hostfwd=tcp::2222-:22`
- [ ] d) `qemu-system-x86_64 -accel kvm -mem 2G -vcpus 2 -virtio-disk disco.qcow2 -user-net portfwd=2222:22`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `qemu-system-x86_64 -enable-kvm -m 2048 -smp 2 -drive file=disco.qcow2,format=qcow2,if=virtio -nic user,hostfwd=tcp::2222-:22`**

Este comando combina las opciones correctas de QEMU: `-enable-kvm` activa la aceleracion por hardware, `-m 2048` asigna 2 GB de RAM, `-smp 2` configura 2 vCPUs, `-drive file=disco.qcow2,format=qcow2,if=virtio` conecta el disco con interfaz virtio, y `-nic user,hostfwd=tcp::2222-:22` configura red en modo usuario con reenvio del puerto 2222 del host al 22 del guest para SSH. Cada opcion usa la sintaxis documentada oficialmente de QEMU.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="351.4" data-correct="a">

### Pregunta 52 (Subtema 351.4)

¿Cual es el comando correcto de `virt-install` para crear una nueva maquina virtual con 2 GB de RAM, 2 vCPUs, un disco de 20 GB y arrancar desde una ISO?

- [ ] a) `virt-install --name vm1 --ram 2048 --vcpus 2 --disk size=20 --cdrom /ruta/imagen.iso --os-variant ubuntu22.04`
- [ ] b) `virt-install vm1 --memory 2G --cpu 2 --create-disk 20G --iso /ruta/imagen.iso`
- [ ] c) `virsh install --new vm1 -m 2048 -c 2 -d 20G --boot /ruta/imagen.iso`
- [ ] d) `libvirt-create --name vm1 --ram 2048 --cpus 2 --disk-size 20 --cdrom /ruta/imagen.iso`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `virt-install --name vm1 --ram 2048 --vcpus 2 --disk size=20 --cdrom /ruta/imagen.iso --os-variant ubuntu22.04`**

`virt-install` es la herramienta CLI de la suite `virtinst` para crear nuevas VMs a traves de libvirt. `--name` asigna el nombre del dominio, `--ram` la memoria en MB, `--vcpus` las CPUs virtuales, `--disk size=20` crea un disco de 20 GB (por defecto qcow2 en el pool default), `--cdrom` monta la ISO de instalacion, y `--os-variant` optimiza la configuracion para el SO especificado. Otros parametros utiles son `--network` (configuracion de red), `--graphics` (tipo de consola) y `--location` (instalacion por red).

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="352.2" data-correct="b">

### Pregunta 53 (Subtema 352.2)

¿Cual es el comando correcto de Docker para crear una red personalizada de tipo bridge con una subred especifica?

- [ ] a) `docker network add --type bridge --subnet 172.20.0.0/16 mi_red`
- [ ] b) `docker network create --driver bridge --subnet 172.20.0.0/16 mi_red`
- [ ] c) `docker net create bridge mi_red --ip-range 172.20.0.0/16`
- [ ] d) `docker create network --bridge --cidr 172.20.0.0/16 mi_red`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `docker network create --driver bridge --subnet 172.20.0.0/16 mi_red`**

`docker network create` crea una nueva red Docker. `--driver bridge` especifica el driver (bridge es el defecto para redes locales). `--subnet` define la subred CIDR. Otros parametros incluyen `--gateway` (puerta de enlace), `--ip-range` (rango de IPs asignables), `--internal` (sin acceso externo) y `--attachable` (permite que contenedores standalone se conecten a redes overlay). Los contenedores se conectan con `docker run --network mi_red` o `docker network connect mi_red contenedor`.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="352.3" data-correct="d">

### Pregunta 54 (Subtema 352.3)

¿Cual es el comando correcto de `kubectl` para obtener los logs del contenedor `app` dentro de un Pod multi-contenedor llamado `mipod`?

- [ ] a) `kubectl log mipod --container app`
- [ ] b) `kubectl get logs mipod -c app`
- [ ] c) `kubectl output mipod --container=app`
- [ ] d) `kubectl logs mipod -c app`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `kubectl logs mipod -c app`**

`kubectl logs` muestra los logs de un contenedor dentro de un Pod. Con `-c` (o `--container`) se especifica el contenedor en Pods multi-contenedor (si el Pod tiene un solo contenedor, no es necesario). Opciones utiles incluyen `-f` (seguir en tiempo real), `--previous` (logs del contenedor anterior, util si se reinicio), `--since=1h` (logs de la ultima hora), `--tail=100` (ultimas 100 lineas) y `--timestamps` (incluir marcas de tiempo). Para logs de todos los Pods de un Deployment: `kubectl logs deployment/miapp`.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="353.1" data-correct="c">

### Pregunta 55 (Subtema 353.1)

¿Cual es el comando correcto de Terraform para inicializar un directorio de trabajo, descargando los providers y modulos necesarios?

- [ ] a) `terraform setup`
- [ ] b) `terraform start`
- [ ] c) `terraform init`
- [ ] d) `terraform install`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `terraform init`**

`terraform init` inicializa el directorio de trabajo de Terraform. Descarga e instala los providers (plugins para AWS, Azure, GCP, libvirt, etc.) definidos en el bloque `required_providers`, descarga los modulos referenciados, configura el backend para el estado remoto (S3, Consul, etc.) si esta definido, y genera el archivo `.terraform.lock.hcl` para bloquear las versiones de los providers. Debe ejecutarse antes de `plan` o `apply`, y se vuelve a ejecutar al agregar nuevos providers o modulos. Es una operacion segura y se puede ejecutar multiples veces.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="351.1" data-correct="b">

### Pregunta 56 (Subtema 351.1)

¿Cual es el comando correcto para verificar que los modulos KVM estan cargados en el kernel Linux?

- [ ] a) `modinfo kvm | grep loaded`
- [ ] b) `lsmod | grep kvm`
- [ ] c) `kvm-check --modules`
- [ ] d) `cat /proc/modules | grep virtualization`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `lsmod | grep kvm`**

`lsmod | grep kvm` muestra los modulos KVM cargados en el kernel. La salida tipica incluye `kvm_intel` (o `kvm_amd`) y `kvm` (modulo generico). Si no aparecen, se pueden cargar con `modprobe kvm` y `modprobe kvm_intel` (o `kvm_amd`). `modinfo kvm` muestra informacion del modulo (autor, descripcion, parametros) pero no si esta cargado. Para verificar que el dispositivo `/dev/kvm` existe y es accesible: `ls -la /dev/kvm`. En Ubuntu, `kvm-ok` del paquete `cpu-checker` realiza una verificacion completa.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="352.2" data-correct="a">

### Pregunta 57 (Subtema 352.2)

¿Cual es el comando correcto de Docker para limitar un contenedor a un maximo de 512 MB de RAM y 1 CPU?

- [ ] a) `docker run -d --memory 512m --cpus 1 nginx`
- [ ] b) `docker run -d --ram 512m --cpu-count 1 nginx`
- [ ] c) `docker run -d --mem-limit 512M --max-cpus 1 nginx`
- [ ] d) `docker run -d --memory-max 512m --cpu-limit 1.0 nginx`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `docker run -d --memory 512m --cpus 1 nginx`**

`--memory` (o `-m`) limita la memoria RAM del contenedor (soporta sufijos b, k, m, g). `--cpus` limita el uso de CPU (1.0 = una CPU completa, 0.5 = media CPU). Si el contenedor excede el limite de memoria, el OOM killer lo terminara. Otros parametros de recursos incluyen `--memory-swap` (memoria + swap), `--memory-reservation` (limite suave), `--cpu-shares` (peso relativo), `--cpuset-cpus` (CPUs especificas) y `--blkio-weight` (peso de E/S de disco). Estos limites se implementan internamente mediante cgroups.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="351.2" data-correct="d">

### Pregunta 58 (Subtema 351.2)

¿Cual es el comando correcto de `xl` para crear un dominio HVM de Xen a partir de su archivo de configuracion?

- [ ] a) `xl start /etc/xen/win10.cfg`
- [ ] b) `xl new --hvm /etc/xen/win10.cfg`
- [ ] c) `xl boot /etc/xen/win10.cfg`
- [ ] d) `xl create /etc/xen/win10.cfg`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `xl create /etc/xen/win10.cfg`**

`xl create` lee el archivo de configuracion y crea e inicia un nuevo dominio Xen. El tipo de virtualizacion (PV o HVM) se determina por el contenido del archivo `.cfg`: los dominios HVM incluyen `type = "hvm"` o `builder = "hvm"` y tipicamente especifican un dispositivo de disco tipo CD/DVD para la instalacion del SO. Con la opcion `-p` se crea el dominio en estado pausado. Con `-c` se conecta automaticamente a la consola del dominio tras crearlo. El archivo de configuracion define nombre, memoria, vCPUs, discos, red y opciones especificas del tipo.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="353.1" data-correct="c">

### Pregunta 59 (Subtema 353.1)

¿Cual es el comando correcto de Ansible para ejecutar un playbook que configura servidores web definidos en un inventario?

- [ ] a) `ansible run webservers.yml -i inventario.ini`
- [ ] b) `ansible-run --playbook webservers.yml --inventory inventario.ini`
- [ ] c) `ansible-playbook -i inventario.ini webservers.yml`
- [ ] d) `ansible execute -p webservers.yml -h inventario.ini`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `ansible-playbook -i inventario.ini webservers.yml`**

`ansible-playbook` es el comando para ejecutar playbooks de Ansible. `-i` especifica el archivo de inventario que define los hosts y grupos. El playbook (YAML) contiene las tareas (tasks), handlers, variables y roles a aplicar. Opciones utiles incluyen `--check` (dry run, no aplica cambios), `--diff` (muestra diferencias en archivos), `--limit` (restringir a hosts especificos), `--tags` (ejecutar solo tareas con tags especificos), `-e` (variables extra) y `-v`/`-vvv` (modo verbose). Ansible se usa frecuentemente como provisioner en Packer y Vagrant.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="353.1" data-correct="b">

### Pregunta 60 (Subtema 353.1)

¿Cual es el comando correcto de Terraform para destruir toda la infraestructura gestionada por la configuracion actual?

- [ ] a) `terraform remove --all`
- [ ] b) `terraform destroy`
- [ ] c) `terraform delete --force`
- [ ] d) `terraform teardown`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `terraform destroy`**

`terraform destroy` elimina todos los recursos gestionados por la configuracion actual de Terraform, en el orden inverso de dependencias. Muestra un plan de destruccion y solicita confirmacion antes de proceder (`-auto-approve` omite la confirmacion). Es equivalente a `terraform apply -destroy`. Se puede destruir recursos especificos con `-target=recurso`. El archivo de estado se actualiza para reflejar que los recursos han sido eliminados. Es fundamental en entornos de desarrollo o pruebas para limpiar la infraestructura y evitar costes innecesarios en la nube.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
