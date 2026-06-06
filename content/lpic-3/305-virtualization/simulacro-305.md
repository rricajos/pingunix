---
title: "Simulacro Examen 305"
tags:
  - lpic-3
  - examen-305
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "305"
---

# Simulacro - Examen 305

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="305" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="351.1" data-correct="b">

### Pregunta 1 (Subtema 351.1)

¿Que modulo del kernel Linux proporciona la funcionalidad de virtualizacion KVM en procesadores Intel?

- [ ] a) `kvm_amd`
- [ ] b) `kvm_intel`
- [ ] c) `vhost_net`
- [ ] d) `virtio`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `kvm_intel`**

KVM (Kernel-based Virtual Machine) requiere dos modulos del kernel: el modulo generico `kvm` y un modulo especifico del procesador. Para procesadores Intel con soporte VT-x se carga `kvm_intel`, y para procesadores AMD con soporte AMD-V se carga `kvm_amd`. Se puede verificar el soporte de virtualizacion por hardware con `grep -E '(vmx|svm)' /proc/cpuinfo`. `vhost_net` es un modulo para red virtio optimizada y `virtio` es el framework de dispositivos paravirtualizados.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="351.1" data-correct="c">

### Pregunta 2 (Subtema 351.1)

¿Que herramienta de linea de comandos gestiona maquinas virtuales a traves de la API de libvirt?

- [ ] a) `qemu-system-x86_64`
- [ ] b) `kvm`
- [ ] c) `virsh`
- [ ] d) `virt-viewer`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `virsh`**

`virsh` (virtualization interactive shell) es la herramienta CLI principal para gestionar maquinas virtuales a traves de la API de libvirt. Permite crear, iniciar, detener, pausar, migrar y configurar VMs con comandos como `virsh start`, `virsh shutdown`, `virsh list`, `virsh define`, `virsh edit`, etc. Soporta conexion local y remota a hipervisores KVM, Xen, QEMU y otros. `qemu-system-x86_64` es el emulador QEMU directo y `virt-viewer` es un visor grafico.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="351.1" data-correct="a">

### Pregunta 3 (Subtema 351.1)

¿Que comando de virsh muestra la lista de todas las maquinas virtuales, incluyendo las que estan apagadas?

- [ ] a) `virsh list --all`
- [ ] b) `virsh list`
- [ ] c) `virsh show-all`
- [ ] d) `virsh vm-list --inactive`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `virsh list --all`**

`virsh list --all` muestra todas las maquinas virtuales registradas en libvirt, tanto las activas (en ejecucion) como las inactivas (apagadas). Sin la opcion `--all`, `virsh list` solo muestra las VMs que estan actualmente en ejecucion. Otras opciones utiles son `--state-running`, `--state-shutoff` y `--state-paused` para filtrar por estado especifico.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="351.1" data-correct="d">

### Pregunta 4 (Subtema 351.1)

¿Que tipo de dispositivo de red paravirtualizado proporciona el mejor rendimiento en maquinas virtuales KVM?

- [ ] a) `e1000`
- [ ] b) `rtl8139`
- [ ] c) `ne2k_pci`
- [ ] d) `virtio-net`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `virtio-net`**

`virtio-net` es el controlador de red paravirtualizado del framework virtio, diseñado especificamente para entornos virtualizados. A diferencia de los controladores emulados (`e1000`, `rtl8139`), virtio-net elimina la sobrecarga de emular hardware real al proporcionar una interfaz directa y eficiente entre el guest y el host. Requiere drivers virtio en el sistema operativo guest (incluidos por defecto en kernels Linux modernos). Los dispositivos virtio tambien existen para disco (`virtio-blk`/`virtio-scsi`), memoria (`virtio-balloon`) y consola.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="351.2" data-correct="b">

### Pregunta 5 (Subtema 351.2)

¿Que tipo de virtualizacion Xen ejecuta un kernel modificado en el dominio guest para mejorar el rendimiento?

- [ ] a) HVM (Hardware Virtual Machine)
- [ ] b) PV (Paravirtualizacion)
- [ ] c) PVH (Paravirtualized Hardware)
- [ ] d) Full emulation

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) PV (Paravirtualizacion)**

En la paravirtualizacion (PV) de Xen, el sistema operativo guest ejecuta un kernel modificado que interactua directamente con el hipervisor mediante hypercalls en lugar de instrucciones privilegiadas de hardware. Esto elimina la necesidad de extensiones de virtualizacion por hardware (VT-x/AMD-V) y ofrece muy buen rendimiento. HVM utiliza virtualizacion por hardware para ejecutar guests sin modificar. PVH combina elementos de ambos, usando PV para E/S y HVM para el nucleo de ejecucion.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="351.2" data-correct="a">

### Pregunta 6 (Subtema 351.2)

¿Que dominio especial de Xen ejecuta el hipervisor y tiene acceso directo al hardware?

- [ ] a) Dom0 (Domain 0)
- [ ] b) DomU (Domain U)
- [ ] c) DomS (Domain Stub)
- [ ] d) DomH (Domain Host)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Dom0 (Domain 0)**

Dom0 (Domain 0) es el dominio privilegiado de Xen que se inicia primero cuando arranca el hipervisor. Tiene acceso directo al hardware fisico y ejecuta los drivers de dispositivos que los dominios guest (DomU) utilizan a traves de canales de E/S paravirtualizados. Dom0 tambien aloja las herramientas de gestion (`xl`, `xm`, libvirt) y es responsable de crear, gestionar y destruir los dominios guest. DomU son los dominios de usuario sin privilegios.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="351.2" data-correct="c">

### Pregunta 7 (Subtema 351.2)

¿Que herramienta de linea de comandos se usa para gestionar dominios Xen de forma nativa?

- [ ] a) `xm` (exclusivamente)
- [ ] b) `virsh` (exclusivamente)
- [ ] c) `xl` (Xen Light)
- [ ] d) `xen-manage`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `xl` (Xen Light)**

`xl` es la herramienta actual de gestion de Xen que reemplazo a `xm` (Xen Management, obsoleta desde Xen 4.5). `xl` utiliza la libreria libxl e interactua directamente con el hipervisor Xen sin necesidad de un demonio intermediario. Los comandos principales incluyen `xl create` (crear dominio), `xl list` (listar dominios), `xl shutdown`, `xl destroy`, `xl migrate` y `xl info`. Tambien se puede usar `virsh` a traves del driver libvirt para Xen.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="351.3" data-correct="b">

### Pregunta 8 (Subtema 351.3)

¿Que comando de QEMU ejecuta una maquina virtual con aceleracion KVM?

- [ ] a) `qemu-system-x86_64 -kvm`
- [ ] b) `qemu-system-x86_64 -enable-kvm`
- [ ] c) `qemu-system-x86_64 -accel hardware`
- [ ] d) `qemu-kvm`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `qemu-system-x86_64 -enable-kvm`**

La opcion `-enable-kvm` activa la aceleracion KVM en QEMU, utilizando la virtualizacion por hardware del procesador para ejecutar el codigo del guest directamente en la CPU (en lugar de emularlo por software). Esto mejora drasticamente el rendimiento. La sintaxis moderna equivalente es `-accel kvm` o `-machine accel=kvm`. `qemu-kvm` fue un wrapper obsoleto que se unifico en qemu-system. Sin KVM, QEMU funciona como emulador puro (mucho mas lento).

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="351.3" data-correct="d">

### Pregunta 9 (Subtema 351.3)

¿Que formato de imagen de disco virtual permite snapshots internos y aprovisionamiento thin (sparse)?

- [ ] a) raw
- [ ] b) vmdk
- [ ] c) vdi
- [ ] d) qcow2

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) qcow2**

qcow2 (QEMU Copy-On-Write version 2) es el formato de imagen de disco nativo de QEMU/KVM que soporta: snapshots internos, aprovisionamiento thin (el archivo crece conforme se escriben datos), compresion, cifrado (AES o LUKS), backing files (imagenes diferenciales) y preallocation. El formato raw es mas rapido en E/S directa pero no soporta estas funcionalidades. Se crean con `qemu-img create -f qcow2 disco.qcow2 20G` y se gestionan con `qemu-img`.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="351.3" data-correct="a">

### Pregunta 10 (Subtema 351.3)

¿Que comando convierte una imagen de disco virtual de formato raw a qcow2?

- [ ] a) `qemu-img convert -f raw -O qcow2 disco.raw disco.qcow2`
- [ ] b) `qemu-img create -f qcow2 --source disco.raw disco.qcow2`
- [ ] c) `kvm-img convert disco.raw disco.qcow2`
- [ ] d) `virt-convert --format qcow2 disco.raw`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `qemu-img convert -f raw -O qcow2 disco.raw disco.qcow2`**

`qemu-img convert` es la herramienta para convertir entre formatos de imagen de disco virtual. `-f` especifica el formato de entrada (raw) y `-O` el formato de salida (qcow2). Soporta conversion entre raw, qcow2, vmdk, vdi, vhd y otros formatos. Se pueden agregar opciones como `-c` para compresion o `-o preallocation=metadata` para preasignacion de metadatos. `qemu-img info disco.qcow2` muestra informacion del disco.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="351.4" data-correct="c">

### Pregunta 11 (Subtema 351.4)

¿Que URI se utiliza para conectarse a un hipervisor KVM local mediante libvirt?

- [ ] a) `kvm:///local`
- [ ] b) `libvirt://localhost/kvm`
- [ ] c) `qemu:///system`
- [ ] d) `kvm:///system`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `qemu:///system`**

El URI `qemu:///system` conecta al demonio libvirtd local para gestionar maquinas virtuales KVM/QEMU con privilegios de sistema. El URI `qemu:///session` conecta a una instancia por usuario sin privilegios de root. Para conexiones remotas se usan URIs como `qemu+ssh://usuario@host/system` o `qemu+tcp://host/system`. Aunque el hipervisor sea KVM, libvirt utiliza el driver `qemu` ya que KVM se accede a traves de QEMU.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="351.4" data-correct="b">

### Pregunta 12 (Subtema 351.4)

¿En que formato se definen las maquinas virtuales en libvirt?

- [ ] a) JSON
- [ ] b) XML
- [ ] c) YAML
- [ ] d) INI

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) XML**

libvirt utiliza archivos XML para definir todos los objetos virtuales: dominios (maquinas virtuales), redes, pools de almacenamiento y dispositivos. El XML de un dominio describe la CPU, memoria, discos, interfaces de red, dispositivos de entrada y otros componentes. Se puede exportar la definicion con `virsh dumpxml vm`, editar con `virsh edit vm`, y crear una nueva VM con `virsh define fichero.xml`. La documentacion del esquema XML esta disponible en la web de libvirt.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="351.4" data-correct="a">

### Pregunta 13 (Subtema 351.4)

¿Que comando de virsh realiza una migracion en caliente (live migration) de una maquina virtual a otro host?

- [ ] a) `virsh migrate --live vm1 qemu+ssh://host2/system`
- [ ] b) `virsh move --live vm1 host2`
- [ ] c) `virsh transfer vm1 host2`
- [ ] d) `virsh relocate --online vm1 host2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `virsh migrate --live vm1 qemu+ssh://host2/system`**

`virsh migrate --live` realiza una migracion en caliente, transfiriendo la maquina virtual al host destino sin interrupcion perceptible del servicio. La VM continua ejecutandose mientras se transfiere la memoria. Requiere almacenamiento compartido (NFS, Ceph, GlusterFS) o se puede usar `--copy-storage-all` para copiar tambien los discos. Otros flags utiles son `--persistent` (mantener en destino), `--undefinesource` (eliminar del origen) y `--compressed` (comprimir datos de migracion).

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="352.1" data-correct="c">

### Pregunta 14 (Subtema 352.1)

¿Que tecnologia del kernel Linux proporciona el aislamiento de procesos que utilizan los contenedores LXC?

- [ ] a) chroot unicamente
- [ ] b) KVM y hardware virtualization
- [ ] c) Namespaces y cgroups
- [ ] d) SELinux y AppArmor

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Namespaces y cgroups**

Los contenedores Linux se basan en dos tecnologias del kernel: los namespaces proporcionan aislamiento (PID, red, montajes, IPC, usuarios, hostname, cgroups) creando la ilusion de un sistema independiente para cada contenedor, y los cgroups (control groups) limitan y controlan el uso de recursos (CPU, memoria, E/S, red). Juntos permiten ejecutar procesos aislados sin la sobrecarga de una maquina virtual completa. LXC, Docker y otras tecnologias de contenedores utilizan estas primitivas del kernel.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="352.1" data-correct="a">

### Pregunta 15 (Subtema 352.1)

¿Que comando crea y arranca un contenedor LXC a partir de una plantilla?

- [ ] a) `lxc-create -n micontenedor -t ubuntu` seguido de `lxc-start -n micontenedor`
- [ ] b) `lxc create micontenedor --template ubuntu && lxc start micontenedor`
- [ ] c) `lxc-init -t ubuntu -n micontenedor`
- [ ] d) `lxc-run -n micontenedor -t ubuntu`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `lxc-create -n micontenedor -t ubuntu` seguido de `lxc-start -n micontenedor`**

En LXC clasico, `lxc-create` crea un contenedor descargando e instalando el sistema de archivos raiz segun la plantilla especificada (`-t`). Las plantillas disponibles incluyen `ubuntu`, `debian`, `centos`, `alpine`, etc. `lxc-start` arranca el contenedor. Otros comandos esenciales son `lxc-stop` (detener), `lxc-destroy` (eliminar), `lxc-attach` (acceder al contenedor) y `lxc-info` (informacion del estado). La configuracion reside en `/var/lib/lxc/nombre/config`.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="352.1" data-correct="d">

### Pregunta 16 (Subtema 352.1)

¿Que archivo contiene la configuracion principal de un contenedor LXC?

- [ ] a) `/etc/lxc/containers/nombre.conf`
- [ ] b) `/var/run/lxc/nombre/config`
- [ ] c) `/etc/lxc/nombre.conf`
- [ ] d) `/var/lib/lxc/nombre/config`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `/var/lib/lxc/nombre/config`**

La configuracion de cada contenedor LXC se almacena en `/var/lib/lxc/nombre/config`, donde se definen parametros como la red (`lxc.net.0.type`, `lxc.net.0.link`), los limites de recursos (via cgroups), los puntos de montaje, las capacidades del kernel permitidas, el perfil AppArmor/SELinux y otros ajustes de seguridad y aislamiento. El rootfs del contenedor se encuentra en `/var/lib/lxc/nombre/rootfs/`.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="352.2" data-correct="b">

### Pregunta 17 (Subtema 352.2)

¿Que comando de Docker ejecuta un contenedor en segundo plano con un nombre especifico?

- [ ] a) `docker create --name miweb -d nginx`
- [ ] b) `docker run -d --name miweb nginx`
- [ ] c) `docker start --background --name miweb nginx`
- [ ] d) `docker exec -d --name miweb nginx`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `docker run -d --name miweb nginx`**

`docker run -d` ejecuta un contenedor en modo detached (segundo plano). `--name` asigna un nombre personalizado al contenedor (en lugar del nombre aleatorio generado por defecto). `nginx` es la imagen a utilizar. `docker create` solo crea el contenedor sin arrancarlo. `docker exec` ejecuta un comando dentro de un contenedor ya en ejecucion. `docker start` arranca un contenedor previamente creado o detenido.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="352.2" data-correct="c">

### Pregunta 18 (Subtema 352.2)

¿Que instruccion de un Dockerfile especifica el comando que se ejecutara al iniciar el contenedor?

- [ ] a) `RUN`
- [ ] b) `EXEC`
- [ ] c) `CMD`
- [ ] d) `START`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `CMD`**

`CMD` especifica el comando por defecto que se ejecuta al iniciar el contenedor. Puede ser sobreescrito al ejecutar `docker run`. `ENTRYPOINT` tambien define el comando de inicio pero es mas dificil de sobreescribir (se combina con `CMD` como argumentos). `RUN` ejecuta comandos durante la construccion de la imagen (creando capas). Solo puede haber un `CMD` por Dockerfile; si hay multiples, solo el ultimo tiene efecto.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="352.2" data-correct="a">

### Pregunta 19 (Subtema 352.2)

¿Que comando de Docker construye una imagen a partir de un Dockerfile en el directorio actual?

- [ ] a) `docker build -t miapp:v1 .`
- [ ] b) `docker create -t miapp:v1 .`
- [ ] c) `docker image make -t miapp:v1 .`
- [ ] d) `docker compile -t miapp:v1 .`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `docker build -t miapp:v1 .`**

`docker build` construye una imagen Docker ejecutando las instrucciones del Dockerfile. `-t miapp:v1` asigna un nombre y tag a la imagen. El punto (`.`) indica el contexto de build (directorio actual). Docker envia el contexto al daemon, ejecuta cada instruccion creando capas intermedias con cache y produce la imagen final. Opciones utiles incluyen `-f` (Dockerfile alternativo), `--no-cache` (sin cache), `--build-arg` (variables de build) y `--target` (build multi-stage parcial).

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="352.2" data-correct="d">

### Pregunta 20 (Subtema 352.2)

¿Que tipo de almacenamiento persistente permite a un contenedor Docker acceder a un directorio del host?

- [ ] a) `docker layer`
- [ ] b) `tmpfs mount`
- [ ] c) `named volume` (exclusivamente)
- [ ] d) `bind mount`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `bind mount`**

Un bind mount monta un directorio o archivo del host directamente dentro del contenedor, proporcionando acceso al sistema de archivos del host. Se configura con `-v /host/path:/container/path` o `--mount type=bind,source=/host/path,target=/container/path`. Los named volumes (`docker volume create`) son gestionados por Docker y se almacenan en `/var/lib/docker/volumes/`. Los tmpfs mounts almacenan datos en memoria RAM. Tanto bind mounts como named volumes proporcionan persistencia.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="352.3" data-correct="b">

### Pregunta 21 (Subtema 352.3)

¿Que herramienta permite definir y ejecutar aplicaciones Docker multi-contenedor usando un archivo YAML?

- [ ] a) `docker stack`
- [ ] b) `docker compose`
- [ ] c) `docker swarm`
- [ ] d) `docker service`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `docker compose`**

`docker compose` (antes `docker-compose` como binario separado) permite definir aplicaciones multi-contenedor en un archivo `docker-compose.yml` (o `compose.yaml`). Define servicios, redes, volumenes y dependencias entre contenedores. Comandos principales: `docker compose up -d` (crear e iniciar), `docker compose down` (detener y eliminar), `docker compose logs` (ver logs), `docker compose ps` (estado). `docker stack` es para Docker Swarm, `docker service` para servicios individuales en Swarm.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="352.3" data-correct="c">

### Pregunta 22 (Subtema 352.3)

En Kubernetes, ¿que objeto es la unidad minima de despliegue que encapsula uno o mas contenedores?

- [ ] a) Node
- [ ] b) Deployment
- [ ] c) Pod
- [ ] d) Service

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Pod**

Un Pod es la unidad atomica mas pequena en Kubernetes que puede contener uno o mas contenedores que comparten la misma red (misma IP), almacenamiento y namespace. Los contenedores dentro de un Pod se programan y ejecutan siempre en el mismo nodo. Los Pods son efimeros; los Deployments y ReplicaSets gestionan su ciclo de vida y replicas. Un Service proporciona un punto de acceso estable a un conjunto de Pods, y un Node es la maquina (fisica o virtual) donde se ejecutan los Pods.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="352.3" data-correct="a">

### Pregunta 23 (Subtema 352.3)

¿Que comando de kubectl aplica una configuracion definida en un archivo YAML a un cluster Kubernetes?

- [ ] a) `kubectl apply -f deployment.yaml`
- [ ] b) `kubectl create -f deployment.yaml` (exclusivamente)
- [ ] c) `kubectl deploy -f deployment.yaml`
- [ ] d) `kubectl run -f deployment.yaml`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `kubectl apply -f deployment.yaml`**

`kubectl apply -f` aplica una configuracion declarativa al cluster Kubernetes, creando o actualizando los recursos definidos en el archivo YAML. A diferencia de `kubectl create` (que solo crea y falla si el recurso ya existe), `apply` es idempotente: crea si no existe y actualiza si ya existe, comparando el estado deseado con el actual. Es la forma recomendada para gestion declarativa de recursos. `kubectl delete -f` elimina los recursos definidos en el archivo.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="352.3" data-correct="d">

### Pregunta 24 (Subtema 352.3)

¿Que objeto de Kubernetes expone un conjunto de Pods como un servicio de red con una IP estable?

- [ ] a) Ingress
- [ ] b) Endpoint
- [ ] c) Deployment
- [ ] d) Service

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Service**

Un Service en Kubernetes proporciona una IP virtual estable (ClusterIP) y un nombre DNS que actua como punto de acceso a un conjunto de Pods seleccionados por labels. Los tipos de Service son: `ClusterIP` (acceso interno), `NodePort` (expone en un puerto del nodo), `LoadBalancer` (integra balanceador externo) y `ExternalName` (alias DNS). Un Ingress opera en capa 7 (HTTP/HTTPS) para enrutamiento mas avanzado. Los Endpoints son la lista de IPs de los Pods seleccionados.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="353.1" data-correct="b">

### Pregunta 25 (Subtema 353.1)

¿Que herramienta de HashiCorp permite crear imagenes de maquinas virtuales reproducibles para multiples plataformas?

- [ ] a) Terraform
- [ ] b) Packer
- [ ] c) Vagrant
- [ ] d) Consul

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Packer**

Packer automatiza la creacion de imagenes de maquinas identicas para multiples plataformas (AWS AMI, Azure, GCP, VMware, VirtualBox, Docker, etc.) a partir de una unica configuracion. Utiliza plantillas HCL (o JSON) que definen builders (plataformas de destino), provisioners (scripts de configuracion, Ansible, Chef, etc.) y post-processors (compresion, subida). Terraform gestiona la infraestructura, Vagrant gestiona entornos de desarrollo y Consul es un servicio de descubrimiento.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="353.1" data-correct="c">

### Pregunta 26 (Subtema 353.1)

¿Que herramienta se utiliza para la inicializacion de instancias cloud, configurando hostname, claves SSH y paquetes durante el primer arranque?

- [ ] a) Ansible
- [ ] b) Packer
- [ ] c) cloud-init
- [ ] d) Puppet

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) cloud-init**

cloud-init es el estandar de facto para la inicializacion de instancias en la nube. Se ejecuta durante el primer arranque y puede configurar: hostname, usuarios y claves SSH, repositorios de paquetes, paquetes a instalar, scripts de ejecucion, montajes de discos, y mucho mas. La configuracion se proporciona via user-data (YAML con formato cloud-config) a traves de metadatos del proveedor cloud, ISO adjunta o datasource de red. Soporta AWS, Azure, GCP, OpenStack y otros.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="353.1" data-correct="a">

### Pregunta 27 (Subtema 353.1)

¿Que archivo de configuracion de cloud-init define acciones como la creacion de usuarios, instalacion de paquetes y ejecucion de comandos?

- [ ] a) Un archivo YAML con la directiva `#cloud-config` en la primera linea
- [ ] b) Un script bash con extension `.cloud`
- [ ] c) Un archivo JSON con clave `cloud-init`
- [ ] d) Un archivo INI en `/etc/cloud/config.ini`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Un archivo YAML con la directiva `#cloud-config` en la primera linea**

El formato principal de cloud-init es un archivo YAML que comienza con `#cloud-config` en la primera linea. Las directivas incluyen `users` (crear usuarios), `packages` (instalar paquetes), `runcmd` (ejecutar comandos), `write_files` (crear archivos), `ssh_authorized_keys` (claves SSH), `hostname` y muchas mas. Tambien se soportan scripts shell directos (comenzando con `#!/bin/bash`) y otros formatos como MIME multipart para combinar tipos.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="353.2" data-correct="d">

### Pregunta 28 (Subtema 353.2)

¿Que herramienta de HashiCorp crea y gestiona entornos de desarrollo virtualizados reproducibles usando un archivo `Vagrantfile`?

- [ ] a) Packer
- [ ] b) Terraform
- [ ] c) Docker Compose
- [ ] d) Vagrant

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Vagrant**

Vagrant permite crear entornos de desarrollo reproducibles definidos en un `Vagrantfile` (Ruby DSL). Gestiona el ciclo de vida completo de maquinas virtuales: `vagrant up` (crear/iniciar), `vagrant halt` (detener), `vagrant destroy` (eliminar), `vagrant ssh` (acceder), `vagrant provision` (aprovisionar). Soporta multiples proveedores (VirtualBox, libvirt, VMware, Hyper-V, Docker) y provisioners (shell, Ansible, Puppet, Chef). Los boxes son las imagenes base que se descargan de Vagrant Cloud.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="353.2" data-correct="b">

### Pregunta 29 (Subtema 353.2)

¿Que comando de Vagrant inicia y aprovisiona una maquina virtual segun el `Vagrantfile`?

- [ ] a) `vagrant start`
- [ ] b) `vagrant up`
- [ ] c) `vagrant init`
- [ ] d) `vagrant run`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `vagrant up`**

`vagrant up` es el comando principal que crea la maquina virtual (si no existe), la inicia y ejecuta el aprovisionamiento definido en el `Vagrantfile`. Si la VM ya existe pero esta detenida, la inicia sin reaprovisionar (a menos que se use `--provision`). `vagrant init` solo genera un `Vagrantfile` plantilla. `vagrant provision` ejecuta el aprovisionamiento en una VM ya en ejecucion. `vagrant reload` reinicia la VM aplicando cambios del `Vagrantfile`.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="351.1" data-correct="c">

### Pregunta 30 (Subtema 351.1)

¿Que comando de virsh crea un snapshot de una maquina virtual en ejecucion?

- [ ] a) `virsh save vm1 snapshot1`
- [ ] b) `virsh backup vm1 --snapshot`
- [ ] c) `virsh snapshot-create-as vm1 snap1`
- [ ] d) `virsh snapshot --create vm1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `virsh snapshot-create-as vm1 snap1`**

`virsh snapshot-create-as` crea un snapshot con nombre de una maquina virtual, capturando el estado del disco (y opcionalmente la memoria RAM si la VM esta en ejecucion). Parametros adicionales incluyen `--description` (descripcion), `--disk-only` (solo disco, sin memoria), `--atomic` (operacion atomica) y `--live` (minimizar el tiempo de pausa). Los snapshots se listan con `virsh snapshot-list`, se restauran con `virsh snapshot-revert` y se eliminan con `virsh snapshot-delete`.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="351.1" data-correct="a">

### Pregunta 31 (Subtema 351.1)

¿Que tipo de red virtual de libvirt proporciona NAT para que las VMs accedan a redes externas?

- [ ] a) Red NAT por defecto (virbr0)
- [ ] b) Red bridged (br0)
- [ ] c) Red macvtap
- [ ] d) Red hostdev

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Red NAT por defecto (virbr0)**

libvirt crea por defecto una red NAT virtual llamada `default` con la interfaz bridge `virbr0` y la subred 192.168.122.0/24. Las maquinas virtuales conectadas a esta red reciben IP via DHCP de dnsmasq y acceden a redes externas mediante NAT gestionado por iptables. La red bridged conecta VMs directamente a la red fisica (requiere configuracion del bridge en el host). La red macvtap conecta directamente al interfaz fisico sin bridge.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="351.2" data-correct="d">

### Pregunta 32 (Subtema 351.2)

¿Que componente de Xen gestiona las solicitudes de E/S de los dominios PV guest para acceder a los dispositivos de bloque?

- [ ] a) `xenstored`
- [ ] b) `xenconsoled`
- [ ] c) `xen-blkback` (modulo del kernel en Dom0)
- [ ] d) Los drivers de backend en Dom0 (blkback/netback) que se comunican con los drivers de frontend en DomU

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Los drivers de backend en Dom0 (blkback/netback) que se comunican con los drivers de frontend en DomU**

En la paravirtualizacion de Xen, la E/S se gestiona mediante un modelo split-driver: los dominios guest (DomU) ejecutan drivers de frontend (blkfront para discos, netfront para red) que se comunican a traves de anillos de memoria compartida con los drivers de backend (blkback, netback) en Dom0. Dom0 tiene acceso real al hardware y realiza las operaciones de E/S. `xenstored` gestiona la configuracion compartida entre dominios y `xenconsoled` las consolas de texto.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="351.3" data-correct="b">

### Pregunta 33 (Subtema 351.3)

¿Que opcion de QEMU asigna 4 GB de RAM a una maquina virtual?

- [ ] a) `--ram 4G`
- [ ] b) `-m 4096` (o `-m 4G`)
- [ ] c) `-memory 4096M`
- [ ] d) `--mem-size=4G`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `-m 4096` (o `-m 4G`)**

La opcion `-m` de QEMU define la cantidad de memoria RAM asignada a la maquina virtual. Se puede especificar en megabytes (`-m 4096`) o con sufijo (`-m 4G`). Opciones avanzadas de memoria incluyen `-m 4G,maxmem=8G,slots=2` para permitir hot-plug de memoria. El dispositivo `virtio-balloon` permite ajustar la memoria dinamicamente en ejecucion. `-smp` controla el numero de CPUs virtuales.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="351.4" data-correct="c">

### Pregunta 34 (Subtema 351.4)

¿Que componente de libvirt gestiona los pools de almacenamiento (directorio, LVM, NFS, Ceph, etc.)?

- [ ] a) `virsh vol-*` exclusivamente
- [ ] b) `virt-manager`
- [ ] c) El storage driver de libvirtd, gestionado con `virsh pool-*`
- [ ] d) `storaged`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El storage driver de libvirtd, gestionado con `virsh pool-*`**

libvirt abstrae el almacenamiento mediante pools y volumenes. Los pools se gestionan con `virsh pool-define` (definir), `virsh pool-start` (activar), `virsh pool-autostart` (inicio automatico), `virsh pool-list` (listar) y `virsh pool-info` (informacion). Los tipos de pool incluyen: `dir` (directorio), `logical` (LVM), `netfs` (NFS), `rbd` (Ceph), `iscsi`, `disk` y otros. Los volumenes dentro de los pools se gestionan con `virsh vol-create`, `virsh vol-list`, etc.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="352.1" data-correct="a">

### Pregunta 35 (Subtema 352.1)

¿Que tipo de namespace de Linux proporciona aislamiento de la pila de red (interfaces, rutas, iptables) para contenedores?

- [ ] a) Network namespace (net)
- [ ] b) PID namespace
- [ ] c) Mount namespace (mnt)
- [ ] d) User namespace

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Network namespace (net)**

El network namespace proporciona a cada contenedor su propia pila de red aislada, incluyendo interfaces de red, tabla de rutas, reglas de firewall (iptables/nftables), sockets y puertos. Cada contenedor puede tener su propia IP y configuracion de red independiente. Se pueden crear manualmente con `ip netns add nombre` y conectar entre namespaces usando pares veth (virtual Ethernet). Los otros namespaces aislan procesos (PID), montajes (mnt), usuarios (user), IPC y hostname (UTS).

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="352.1" data-correct="c">

### Pregunta 36 (Subtema 352.1)

¿Que comando permite acceder a la shell de un contenedor LXC en ejecucion?

- [ ] a) `lxc-console -n contenedor`
- [ ] b) `lxc-connect -n contenedor`
- [ ] c) `lxc-attach -n contenedor`
- [ ] d) `lxc-shell -n contenedor`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `lxc-attach -n contenedor`**

`lxc-attach` ejecuta un comando o abre una shell interactiva dentro de los namespaces de un contenedor LXC en ejecucion, proporcionando acceso directo al entorno del contenedor. Es similar a `nsenter` pero especifico de LXC. `lxc-console` conecta a la consola de texto del contenedor (como un terminal serial). `lxc-attach` es preferible porque permite ejecutar comandos arbitrarios con `lxc-attach -n contenedor -- comando`.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="352.2" data-correct="b">

### Pregunta 37 (Subtema 352.2)

¿Que comando de Docker muestra los logs de un contenedor en ejecucion?

- [ ] a) `docker output miweb`
- [ ] b) `docker logs miweb`
- [ ] c) `docker console miweb`
- [ ] d) `docker log --container miweb`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `docker logs miweb`**

`docker logs` muestra la salida estandar (stdout) y la salida de errores (stderr) del contenedor especificado. Opciones utiles incluyen `-f` o `--follow` (seguir la salida en tiempo real, similar a `tail -f`), `--tail N` (mostrar las ultimas N lineas), `--since` y `--until` (filtrar por marca de tiempo), y `-t` (incluir marcas de tiempo). Los logs se almacenan en el host segun el driver de logging configurado (json-file por defecto).

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="352.2" data-correct="d">

### Pregunta 38 (Subtema 352.2)

¿Que tipo de red Docker permite la comunicacion directa entre contenedores en diferentes hosts sin NAT?

- [ ] a) bridge
- [ ] b) host
- [ ] c) none
- [ ] d) overlay

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) overlay**

Las redes overlay de Docker permiten la comunicacion entre contenedores ejecutandose en diferentes hosts Docker, utilizando VXLAN para encapsular el trafico. Es el tipo de red utilizado en Docker Swarm para comunicacion entre servicios distribuidos. La red `bridge` es local a un host (red por defecto), `host` usa la pila de red del host directamente (sin aislamiento), y `none` desactiva toda la red del contenedor. Las redes overlay requieren un almacen clave-valor distribuido o Docker Swarm.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="352.3" data-correct="a">

### Pregunta 39 (Subtema 352.3)

¿Que componente de Kubernetes ejecuta los contenedores en cada nodo worker?

- [ ] a) `kubelet`
- [ ] b) `kube-proxy`
- [ ] c) `kube-scheduler`
- [ ] d) `kube-controller-manager`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `kubelet`**

`kubelet` es el agente que se ejecuta en cada nodo worker de Kubernetes y es responsable de gestionar los contenedores en ese nodo. Recibe las especificaciones de Pods del API server, se comunica con el container runtime (containerd, CRI-O) para crear/destruir contenedores, monitoriza su estado y reporta al control plane. `kube-proxy` gestiona las reglas de red para los Services. `kube-scheduler` decide en que nodo se ejecuta cada Pod. `kube-controller-manager` ejecuta los controladores del cluster.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="353.1" data-correct="c">

### Pregunta 40 (Subtema 353.1)

¿Que comando de Packer construye las imagenes definidas en un archivo de plantilla HCL?

- [ ] a) `packer create template.pkr.hcl`
- [ ] b) `packer run template.pkr.hcl`
- [ ] c) `packer build template.pkr.hcl`
- [ ] d) `packer make template.pkr.hcl`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `packer build template.pkr.hcl`**

`packer build` ejecuta la construccion de las imagenes definidas en la plantilla. El proceso lanza una instancia temporal, ejecuta los provisioners (scripts, Ansible, etc.) para configurarla, y luego genera la imagen final para cada builder definido. `packer validate` verifica la sintaxis de la plantilla antes de construir. `packer init` descarga los plugins necesarios. El formato moderno utiliza archivos `.pkr.hcl` (HCL2), aunque el formato JSON (`.json`) sigue siendo soportado.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="353.2" data-correct="b">

### Pregunta 41 (Subtema 353.2)

En un Vagrantfile, ¿que bloque de configuracion define el proveedor de virtualizacion y sus parametros?

- [ ] a) `config.vm.box`
- [ ] b) `config.vm.provider "virtualbox" do |vb|`
- [ ] c) `config.vm.hypervisor "virtualbox"`
- [ ] d) `config.provider.type = "virtualbox"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `config.vm.provider "virtualbox" do |vb|`**

El bloque `config.vm.provider` permite configurar parametros especificos del proveedor de virtualizacion. Dentro del bloque se pueden ajustar recursos como memoria (`vb.memory = "2048"`), CPUs (`vb.cpus = 2`), nombre de la VM (`vb.name = "mivm"`) y opciones de visualizacion (`vb.gui = true`). Vagrant soporta multiples proveedores: VirtualBox, libvirt, VMware, Hyper-V y Docker, cada uno con sus propias opciones de configuracion.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="351.1" data-correct="d">

### Pregunta 42 (Subtema 351.1)

¿Que comando verifica si el procesador soporta virtualizacion por hardware para KVM?

- [ ] a) `kvm --check`
- [ ] b) `virsh capabilities --cpu`
- [ ] c) `lscpu | grep KVM`
- [ ] d) `grep -E '(vmx|svm)' /proc/cpuinfo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `grep -E '(vmx|svm)' /proc/cpuinfo`**

Para verificar el soporte de virtualizacion por hardware, se buscan los flags `vmx` (Intel VT-x) o `svm` (AMD-V) en `/proc/cpuinfo`. La presencia de estos flags indica que el procesador soporta virtualizacion asistida por hardware necesaria para KVM. Tambien se puede usar `lscpu` que muestra `VT-x` o `AMD-V` en la seccion de virtualizacion, o `kvm-ok` (paquete cpu-checker en Debian/Ubuntu) que verifica tanto el soporte de CPU como los modulos del kernel.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="351.3" data-correct="a">

### Pregunta 43 (Subtema 351.3)

¿Que comando de qemu-img crea un disco virtual qcow2 de 50 GB con preasignacion de metadatos?

- [ ] a) `qemu-img create -f qcow2 -o preallocation=metadata disco.qcow2 50G`
- [ ] b) `qemu-img new -f qcow2 -s 50G disco.qcow2`
- [ ] c) `qemu-img create --format qcow2 --prealloc disco.qcow2 50G`
- [ ] d) `qemu-img init -f qcow2 -size 50G disco.qcow2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `qemu-img create -f qcow2 -o preallocation=metadata disco.qcow2 50G`**

`qemu-img create` crea un nuevo disco virtual. `-f qcow2` especifica el formato, `-o preallocation=metadata` preasigna las tablas de metadatos (mejorando el rendimiento de escritura sin asignar todo el espacio). Las opciones de preasignacion incluyen `off` (por defecto, thin provisioning), `metadata` (solo metadatos), `falloc` (fallocate) y `full` (preasignacion completa). `50G` es el tamano maximo virtual del disco.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="351.4" data-correct="b">

### Pregunta 44 (Subtema 351.4)

¿Que herramienta grafica de libvirt permite gestionar maquinas virtuales, redes y almacenamiento de forma visual?

- [ ] a) `virt-viewer`
- [ ] b) `virt-manager`
- [ ] c) `cockpit-machines`
- [ ] d) `virtinst`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `virt-manager`**

`virt-manager` (Virtual Machine Manager) es la interfaz grafica oficial de libvirt para la gestion completa de maquinas virtuales. Permite crear VMs con asistente, gestionar el ciclo de vida, configurar hardware virtual, gestionar redes y almacenamiento, ver la consola grafica y monitorizar el rendimiento. Soporta conexion a hipervisores remotos via SSH. `virt-viewer` solo muestra la consola grafica de una VM. `cockpit-machines` es un plugin web para Cockpit. `virtinst` es la libreria Python usada internamente.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="352.1" data-correct="c">

### Pregunta 45 (Subtema 352.1)

¿Que mecanismo del kernel Linux permite limitar el uso de CPU, memoria y E/S de un grupo de procesos (usado por contenedores)?

- [ ] a) namespaces
- [ ] b) capabilities
- [ ] c) cgroups (control groups)
- [ ] d) seccomp

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) cgroups (control groups)**

Los cgroups (control groups) son un mecanismo del kernel que permite organizar procesos en grupos jerarquicos y controlar/limitar sus recursos: CPU (`cpu.max`), memoria (`memory.max`), E/S de disco (`io.max`), red y PIDs. cgroups v2 (unificado) es la version moderna que reemplaza a cgroups v1. Los contenedores Docker y LXC utilizan cgroups para garantizar que un contenedor no consuma todos los recursos del host. Se gestionan a traves del filesystem virtual `/sys/fs/cgroup/`.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="352.2" data-correct="d">

### Pregunta 46 (Subtema 352.2)

¿Que instruccion de un Dockerfile copia archivos del contexto de build al sistema de archivos de la imagen?

- [ ] a) `ADD` (exclusivamente)
- [ ] b) `INSERT`
- [ ] c) `PUT`
- [ ] d) `COPY`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `COPY`**

`COPY` es la instruccion recomendada para copiar archivos y directorios del contexto de build a la imagen. `ADD` tiene funcionalidad adicional (descompresion automatica de tarballs y descarga de URLs) pero se recomienda `COPY` por su comportamiento predecible. La sintaxis es `COPY origen destino`, donde origen es relativo al contexto de build. `COPY --from=stage` permite copiar archivos de una etapa anterior en builds multi-stage, util para crear imagenes finales mas pequenas.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="352.2" data-correct="a">

### Pregunta 47 (Subtema 352.2)

¿Que sistema de almacenamiento por capas (layers) utiliza Docker para construir imagenes de forma eficiente?

- [ ] a) UnionFS (overlay2 por defecto)
- [ ] b) BTRFS exclusivamente
- [ ] c) ZFS exclusivamente
- [ ] d) ext4 con snapshots

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) UnionFS (overlay2 por defecto)**

Docker utiliza un sistema de archivos por capas basado en UnionFS, siendo `overlay2` el driver por defecto en la mayoria de distribuciones Linux modernas. Cada instruccion del Dockerfile (RUN, COPY, ADD) crea una nueva capa de solo lectura. Al ejecutar un contenedor, se anade una capa de escritura (copy-on-write) en la parte superior. Esto permite compartir capas entre imagenes, reduciendo el uso de disco y acelerando las descargas. Otros drivers incluyen `btrfs`, `zfs` y `devicemapper`.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="352.3" data-correct="b">

### Pregunta 48 (Subtema 352.3)

¿Que objeto de Kubernetes gestiona el despliegue de Pods asegurando un numero especifico de replicas?

- [ ] a) Service
- [ ] b) Deployment
- [ ] c) ConfigMap
- [ ] d) DaemonSet

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Deployment**

Un Deployment gestiona el despliegue declarativo de Pods, creando y manteniendo el numero deseado de replicas a traves de un ReplicaSet. Proporciona actualizaciones rolling (progresivas), rollback a versiones anteriores, escalado horizontal y auto-recuperacion de Pods fallidos. Un DaemonSet asegura que un Pod se ejecute en cada nodo (no un numero fijo de replicas). Un ConfigMap almacena configuracion, y un Service expone los Pods en la red.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="353.1" data-correct="c">

### Pregunta 49 (Subtema 353.1)

¿Que tipo de provisioner de Packer ejecuta playbooks de Ansible para configurar la imagen?

- [ ] a) `provisioner "shell"`
- [ ] b) `provisioner "chef-solo"`
- [ ] c) `provisioner "ansible"`
- [ ] d) `provisioner "puppet-masterless"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `provisioner "ansible"`**

El provisioner `ansible` de Packer ejecuta playbooks de Ansible en la instancia temporal durante la construccion de la imagen. Configura automaticamente la conexion SSH/WinRM y el inventario. Existe tambien `ansible-local` que ejecuta Ansible directamente dentro de la instancia (requiriendo que Ansible este instalado en ella). Los parametros principales incluyen `playbook_file`, `extra_arguments`, `ansible_env_vars` y `groups` (para asignar la instancia a grupos del inventario).

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="353.2" data-correct="a">

### Pregunta 50 (Subtema 353.2)

¿Que comando de Vagrant permite aprovisionar una maquina virtual ya en ejecucion sin reiniciarla?

- [ ] a) `vagrant provision`
- [ ] b) `vagrant up --provision`
- [ ] c) `vagrant apply`
- [ ] d) `vagrant configure`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `vagrant provision`**

`vagrant provision` ejecuta los provisioners definidos en el `Vagrantfile` sobre una VM que ya esta en ejecucion, sin necesidad de reiniciarla. Es util para iterar durante el desarrollo de scripts de aprovisionamiento. `vagrant up --provision` fuerza el aprovisionamiento durante el inicio (normalmente solo se ejecuta la primera vez). `vagrant reload --provision` reinicia la VM y luego aprovisiona. Los provisioners pueden ser shell, Ansible, Puppet, Chef, Salt u otros.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="351.1" data-correct="d">

### Pregunta 51 (Subtema 351.1)

¿Que directiva de libvirt en el XML de un dominio permite PCI passthrough de un dispositivo fisico a una VM?

- [ ] a) `<disk type='pci'>`
- [ ] b) `<controller type='passthrough'>`
- [ ] c) `<interface type='hostdev'>`
- [ ] d) `<hostdev mode='subsystem' type='pci' managed='yes'>`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `<hostdev mode='subsystem' type='pci' managed='yes'>`**

PCI passthrough permite asignar un dispositivo PCI fisico del host directamente a una VM, proporcionando acceso nativo al hardware (tipicamente GPUs, controladoras de red o almacenamiento). En el XML de libvirt, se configura con la etiqueta `<hostdev>` especificando el modo (`subsystem`), tipo (`pci`) y la direccion del dispositivo (domain, bus, slot, function). Requiere soporte IOMMU (VT-d en Intel o AMD-Vi). `managed='yes'` hace que libvirt gestione automaticamente el binding del driver.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="351.2" data-correct="b">

### Pregunta 52 (Subtema 351.2)

¿Que archivo de configuracion define los parametros de un dominio guest en Xen cuando se usa `xl create`?

- [ ] a) `/etc/xen/xend-config.sxp`
- [ ] b) Un archivo `.cfg` (por ejemplo, `/etc/xen/mi_vm.cfg`)
- [ ] c) `/etc/libvirt/xen/dominio.xml`
- [ ] d) `/var/lib/xen/domains/nombre/config`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Un archivo `.cfg` (por ejemplo, `/etc/xen/mi_vm.cfg`)**

Los dominios guest de Xen se definen en archivos de configuracion con extension `.cfg` (formato Python) ubicados tipicamente en `/etc/xen/`. El archivo contiene parametros como `name` (nombre del dominio), `memory` (RAM en MB), `vcpus` (CPUs virtuales), `disk` (discos), `vif` (interfaces de red), `kernel`/`ramdisk` (para PV) o `builder='hvm'` (para HVM). Se crea el dominio con `xl create /etc/xen/mi_vm.cfg`.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="352.1" data-correct="c">

### Pregunta 53 (Subtema 352.1)

¿Que herramienta de contenedores, alternativa a Docker, esta diseñada para ejecutar contenedores sin demonio (daemonless)?

- [ ] a) `containerd`
- [ ] b) `rkt`
- [ ] c) `Podman`
- [ ] d) `CRI-O`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `Podman`**

Podman es una herramienta de gestion de contenedores compatible con Docker a nivel de CLI que no requiere un demonio en ejecucion (daemonless). Los contenedores se ejecutan como procesos hijos directos del usuario, lo que mejora la seguridad y permite contenedores rootless de forma nativa. Los comandos de Podman son practicamente identicos a Docker (`podman run`, `podman build`, `podman images`). `containerd` y `CRI-O` son container runtimes de bajo nivel para Kubernetes, y `rkt` esta discontinuado.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="352.2" data-correct="b">

### Pregunta 54 (Subtema 352.2)

¿Que comando Docker elimina todos los contenedores detenidos, redes no utilizadas, imagenes sin tag y cache de build?

- [ ] a) `docker clean all`
- [ ] b) `docker system prune`
- [ ] c) `docker rm --all --force`
- [ ] d) `docker cleanup`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `docker system prune`**

`docker system prune` libera espacio eliminando recursos no utilizados: contenedores detenidos, redes sin contenedores, imagenes dangling (sin tag) y cache de build. Con la opcion `-a` tambien elimina imagenes que no estan siendo usadas por ningun contenedor. `--volumes` incluye los volumenes no utilizados. Comandos mas granulares incluyen `docker container prune`, `docker image prune`, `docker network prune` y `docker volume prune`.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="352.3" data-correct="d">

### Pregunta 55 (Subtema 352.3)

¿Que comando de kubectl escala un Deployment a 5 replicas?

- [ ] a) `kubectl resize deployment miweb --replicas=5`
- [ ] b) `kubectl set replicas deployment/miweb 5`
- [ ] c) `kubectl deployment scale miweb --count=5`
- [ ] d) `kubectl scale deployment/miweb --replicas=5`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `kubectl scale deployment/miweb --replicas=5`**

`kubectl scale` ajusta el numero de replicas de un Deployment, ReplicaSet o StatefulSet. El parametro `--replicas=5` establece el numero deseado de Pods. El Deployment Controller se encarga de crear o eliminar Pods para alcanzar el numero objetivo. Para autoescalado basado en metricas, se usa `kubectl autoscale deployment/miweb --min=2 --max=10 --cpu-percent=80` (Horizontal Pod Autoscaler).

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="353.1" data-correct="a">

### Pregunta 56 (Subtema 353.1)

¿Que modulo de cloud-init gestiona la configuracion de la red en el primer arranque?

- [ ] a) El datasource de red y el modulo `network` (con configuracion en `network-config`)
- [ ] b) NetworkManager exclusivamente
- [ ] c) systemd-networkd exclusivamente
- [ ] d) El script `/etc/init.d/networking`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) El datasource de red y el modulo `network` (con configuracion en `network-config`)**

cloud-init gestiona la red a traves de los datasources del proveedor cloud y la configuracion de red proporcionada (network-config v1 o v2). Soporta multiples renderers: NetworkManager, systemd-networkd, ENI (interfaces), Netplan y otros, adaptandose al sistema operativo de la instancia. La configuracion de red puede incluir interfaces, direcciones IP, DNS, rutas, VLANs y bonds. cloud-init aplica la configuracion de red antes que otros modulos.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="351.3" data-correct="c">

### Pregunta 57 (Subtema 351.3)

¿Que opcion de QEMU conecta el disco virtual a la VM usando un controlador virtio para mejor rendimiento?

- [ ] a) `-hda disco.qcow2`
- [ ] b) `-drive file=disco.qcow2,format=qcow2`
- [ ] c) `-drive file=disco.qcow2,format=qcow2,if=virtio`
- [ ] d) `-disk path=disco.qcow2,type=virtio`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `-drive file=disco.qcow2,format=qcow2,if=virtio`**

La opcion `-drive` con `if=virtio` conecta el disco usando la interfaz paravirtualizada virtio-blk, que ofrece el mejor rendimiento al evitar la emulacion de un controlador IDE o SCSI real. Los parametros importantes incluyen `file` (ruta del disco), `format` (qcow2, raw), `if` (interfaz: virtio, ide, scsi), `cache` (modo de cache: writeback, writethrough, none, directsync) y `aio` (backend de E/S asincrona: threads, native, io_uring).

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="352.3" data-correct="b">

### Pregunta 58 (Subtema 352.3)

En un archivo `docker-compose.yml`, ¿que directiva define la dependencia entre servicios para controlar el orden de inicio?

- [ ] a) `links`
- [ ] b) `depends_on`
- [ ] c) `requires`
- [ ] d) `after`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `depends_on`**

`depends_on` en docker-compose define las dependencias entre servicios, controlando el orden de inicio y parada. Por ejemplo, si el servicio `web` tiene `depends_on: [db]`, Docker Compose arrancara `db` antes que `web`. Sin embargo, `depends_on` solo espera a que el contenedor inicie, no a que el servicio este "listo". Para esperar a que un servicio este disponible, se debe usar `healthcheck` combinado con `depends_on` con condicion `service_healthy`.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="353.2" data-correct="c">

### Pregunta 59 (Subtema 353.2)

¿Que tipo de provisioner de Vagrant ejecuta un script shell dentro de la maquina virtual?

- [ ] a) `config.vm.provision "command"`
- [ ] b) `config.vm.provision "bash"`
- [ ] c) `config.vm.provision "shell", inline: "apt-get update"`
- [ ] d) `config.vm.provision "exec", command: "apt-get update"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `config.vm.provision "shell", inline: "apt-get update"`**

El provisioner `shell` de Vagrant ejecuta scripts dentro de la VM. Se puede usar `inline:` para comandos directos o `path:` para apuntar a un archivo de script externo. Otras opciones incluyen `privileged:` (ejecutar como root, por defecto true), `args:` (argumentos para el script) y `env:` (variables de entorno). Vagrant tambien soporta provisioners de Ansible, Puppet, Chef, Salt y Docker, entre otros.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="351.4" data-correct="d">

### Pregunta 60 (Subtema 351.4)

¿Que herramienta de libvirt permite clonar una maquina virtual existente, generando nuevo UUID, MAC y nombre?

- [ ] a) `virsh clone`
- [ ] b) `virsh copy`
- [ ] c) `qemu-img clone`
- [ ] d) `virt-clone`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `virt-clone`**

`virt-clone` es una herramienta de la suite `virtinst` que crea una copia completa de una maquina virtual existente, generando automaticamente un nuevo UUID, nuevas direcciones MAC y copiando los discos. La sintaxis basica es `virt-clone --original vm_original --name vm_clon --auto-clone`. Se puede personalizar la ruta de los nuevos discos con `--file`. La VM original debe estar apagada durante la clonacion. `virt-sysprep` permite limpiar datos especificos de la instancia (hostname, claves SSH, etc.) de la VM clonada.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
