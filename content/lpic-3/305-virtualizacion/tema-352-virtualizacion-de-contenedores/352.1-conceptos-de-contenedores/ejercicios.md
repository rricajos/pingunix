---
title: "352.1 - Ejercicios: Conceptos de Contenedores"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "352 - Virtualización de Contenedores"
subtema: "352.1"
peso: 7
tags:
  - lpic-3
  - tema-352
  - ejercicios
  - contenedores
  - namespaces
  - cgroups
---

# Ejercicios - 352.1 Conceptos de Contenedores

### Pregunta 1
¿Qué namespace de Linux aísla los árboles de procesos, permitiendo que un contenedor tenga su propio PID 1?

a) mnt
b) net
c) pid
d) uts

<details><summary>Respuesta</summary>

**c) pid**

El namespace PID aísla el árbol de procesos. Dentro del contenedor, el proceso principal tiene PID 1, aunque en el host tiene un PID diferente. Esto permite que cada contenedor tenga su propia vista independiente de los procesos.
</details>

### Pregunta 2
¿Cuál es la diferencia fundamental entre contenedores y máquinas virtuales?

a) Los contenedores son más seguros que las VMs
b) Los contenedores comparten el kernel del host, las VMs tienen kernel propio
c) Los contenedores no pueden acceder a la red
d) Las VMs son más rápidas que los contenedores

<details><summary>Respuesta</summary>

**b) Los contenedores comparten el kernel del host, las VMs tienen kernel propio**

Los contenedores comparten el kernel del sistema operativo host y usan namespaces y cgroups para el aislamiento. Las VMs tienen su propio kernel y SO completo ejecutándose sobre un hipervisor. Esto hace a los contenedores más ligeros pero potencialmente menos aislados.
</details>

### Pregunta 3
¿Qué mecanismo del kernel Linux limita el uso de CPU, memoria y E/S por grupos de procesos?

a) Namespaces
b) Cgroups
c) SELinux
d) Seccomp

<details><summary>Respuesta</summary>

**b) Cgroups**

Los Control Groups (cgroups) limitan, contabilizan y aíslan el uso de recursos del sistema (CPU, memoria, E/S de disco, PIDs) por grupos de procesos. Los namespaces proporcionan aislamiento de visibilidad, no de recursos.
</details>

### Pregunta 4
¿Cuál es la principal diferencia entre cgroups v1 y cgroups v2?

a) v2 no soporta límites de memoria
b) v1 usa una jerarquía única, v2 usa múltiples
c) v2 usa una jerarquía única unificada, v1 usa múltiples jerarquías independientes
d) v2 solo funciona con Docker, v1 con cualquier runtime

<details><summary>Respuesta</summary>

**c) v2 usa una jerarquía única unificada, v1 usa múltiples jerarquías independientes**

En cgroups v1, cada controlador (cpu, memory, blkio, etc.) tiene su propia jerarquía independiente. En v2, hay una única jerarquía unificada donde todos los controladores se gestionan de forma coherente.
</details>

### Pregunta 5
¿Qué sistema de archivos por capas es el storage driver predeterminado en Docker moderno?

a) AUFS
b) Btrfs
c) OverlayFS (overlay2)
d) DeviceMapper

<details><summary>Respuesta</summary>

**c) OverlayFS (overlay2)**

OverlayFS (driver overlay2) es el storage driver predeterminado en Docker moderno. Combina capas lower (solo lectura) con una capa upper (lectura-escritura) en una vista merged. AUFS fue usado anteriormente pero no está en el kernel mainline.
</details>

### Pregunta 6
¿Qué especificación OCI define el formato de las imágenes de contenedor?

a) Runtime Specification
b) Image Specification
c) Distribution Specification
d) Container Specification

<details><summary>Respuesta</summary>

**b) Image Specification**

La OCI Image Specification define el formato estándar de las imágenes de contenedor: manifest (referencia a configuración y capas), configuration (metadatos) y layers (capas del filesystem como tarballs). La Runtime Spec define cómo ejecutar contenedores.
</details>

### Pregunta 7
¿Qué mecanismo de seguridad filtra las llamadas al sistema (syscalls) que un contenedor puede realizar?

a) Capabilities
b) AppArmor
c) Seccomp
d) Namespaces

<details><summary>Respuesta</summary>

**c) Seccomp**

Seccomp (Secure Computing Mode) filtra las syscalls que un proceso puede realizar. Docker aplica un perfil seccomp por defecto que bloquea syscalls peligrosas. Las capabilities dividen los privilegios de root en unidades, pero no filtran syscalls específicas.
</details>

### Pregunta 8
¿Qué namespace es fundamental para ejecutar contenedores rootless?

a) pid
b) net
c) user
d) mnt

<details><summary>Respuesta</summary>

**c) user**

El namespace user permite mapear UID 0 (root) dentro del contenedor a un UID sin privilegios en el host. Esto es la base de los contenedores rootless: el proceso parece ser root dentro del contenedor pero no tiene privilegios reales en el host.
</details>

### Pregunta 9
¿Cuál es la función de `runc` en la arquitectura de contenedores?

a) Es un registro de imágenes de contenedores
b) Es un runtime OCI de bajo nivel que crea y ejecuta contenedores
c) Es una herramienta de orquestación de contenedores
d) Es un sistema de archivos para contenedores

<details><summary>Respuesta</summary>

**b) Es un runtime OCI de bajo nivel que crea y ejecuta contenedores**

`runc` es la implementación de referencia del runtime OCI. Se encarga de crear los namespaces, configurar cgroups y ejecutar el proceso del contenedor. Herramientas de alto nivel como Docker y containerd usan runc internamente.
</details>

### Pregunta 10
¿Qué archivos del sistema deben estar configurados para que funcionen los contenedores rootless con user namespaces?

a) `/etc/passwd` y `/etc/group`
b) `/etc/subuid` y `/etc/subgid`
c) `/etc/containers/policy.json`
d) `/etc/security/limits.conf`

<details><summary>Respuesta</summary>

**b) `/etc/subuid` y `/etc/subgid`**

`/etc/subuid` y `/etc/subgid` definen los rangos de UIDs y GIDs subordinados que cada usuario puede usar en user namespaces. Ejemplo: `usuario:100000:65536` asigna 65536 UIDs empezando en 100000 al usuario indicado.
</details>

### Pregunta 11

¿Qué namespace de Linux aísla el hostname y el domainname del sistema?

a) pid
b) mnt
c) uts
d) net

<details><summary>Respuesta</summary>

**c) uts**

El namespace UTS (Unix Time Sharing) aísla los identificadores de hostname y domainname del sistema. Esto permite que cada contenedor tenga su propio hostname independiente sin afectar al host ni a otros contenedores. Se crea con el flag `CLONE_NEWUTS`.
</details>

### Pregunta 12

¿Qué runtime OCI de bajo nivel, escrito en C, es una alternativa más ligera y rápida que runc?

a) containerd
b) CRI-O
c) crun
d) lxc

<details><summary>Respuesta</summary>

**c) crun**

`crun` es un runtime OCI de bajo nivel escrito en C que ofrece menor consumo de memoria y tiempos de arranque más rápidos que `runc` (escrito en Go). Es compatible con la especificación OCI y puede sustituir a runc en Docker, Podman y Kubernetes.
</details>

### Pregunta 13

¿Qué capa de OverlayFS almacena los cambios realizados por el contenedor en ejecución?

a) Lower Layer
b) Merged Layer
c) Upper Layer
d) Work Layer

<details><summary>Respuesta</summary>

**c) Upper Layer**

OverlayFS utiliza capas lower (solo lectura, provenientes de la imagen) y una capa upper (lectura-escritura) donde se almacenan todos los cambios realizados por el contenedor. La vista merged combina ambas capas en una visión unificada que es lo que ve el contenedor.
</details>

### Pregunta 14

En cgroups v2, ¿qué archivo se utiliza para establecer el límite máximo de memoria de un grupo de procesos?

a) `memory.limit_in_bytes`
b) `memory.max`
c) `memory.high`
d) `memory.total`

<details><summary>Respuesta</summary>

**b) `memory.max`**

En cgroups v2, `memory.max` define el límite estricto de memoria para un cgroup. Si los procesos exceden este límite, el OOM killer entrará en acción. `memory.limit_in_bytes` es el equivalente en cgroups v1. `memory.high` en v2 es un límite suave que activa la presión de memoria.
</details>

### Pregunta 15

¿Qué capability de Linux permite a un proceso vincular puertos privilegiados (menores a 1024)?

a) `CAP_NET_ADMIN`
b) `CAP_SYS_ADMIN`
c) `CAP_NET_BIND_SERVICE`
d) `CAP_NET_RAW`

<details><summary>Respuesta</summary>

**c) `CAP_NET_BIND_SERVICE`**

`CAP_NET_BIND_SERVICE` permite vincular sockets a puertos privilegiados (por debajo de 1024) sin necesidad de privilegios de root completos. Es una capability comúnmente asignada a contenedores que ejecutan servidores web en los puertos 80 o 443.
</details>

### Pregunta 16

¿Qué acción por defecto define un perfil seccomp cuando una syscall no está explícitamente permitida?

a) `SCMP_ACT_ALLOW`
b) `SCMP_ACT_ERRNO`
c) `SCMP_ACT_KILL`
d) `SCMP_ACT_LOG`

<details><summary>Respuesta</summary>

**b) `SCMP_ACT_ERRNO`**

En los perfiles seccomp, `defaultAction` define qué ocurre con syscalls no listadas. `SCMP_ACT_ERRNO` devuelve un error al proceso que intenta la syscall. `SCMP_ACT_KILL` terminaría el proceso. El perfil por defecto de Docker usa `SCMP_ACT_ERRNO` como acción predeterminada.
</details>

### Pregunta 17

¿Qué herramienta permite copiar imágenes de contenedores entre registros sin necesidad de un daemon Docker?

a) `docker pull`
b) `buildah`
c) `skopeo`
d) `crane`

<details><summary>Respuesta</summary>

**c) `skopeo`**

`skopeo` es una herramienta de línea de comandos para trabajar con imágenes de contenedores remotas. Permite copiar imágenes entre registros (`skopeo copy`), inspeccionar imágenes remotas (`skopeo inspect`) y firmar imágenes, todo sin necesidad de un daemon Docker local.
</details>

### Pregunta 18

¿Qué componente de la especificación OCI Runtime define la configuración de un contenedor, incluyendo namespaces, mounts y el proceso a ejecutar?

a) `rootfs/`
b) `image.json`
c) `config.json`
d) `manifest.json`

<details><summary>Respuesta</summary>

**c) `config.json`**

En la OCI Runtime Specification, un "bundle" de contenedor se compone de un directorio `rootfs/` (sistema de archivos raíz) y un archivo `config.json` que describe la configuración completa del contenedor: namespaces, cgroups, mounts, proceso a ejecutar, variables de entorno y restricciones de seguridad.
</details>

### Pregunta 19

¿Qué controlador de cgroups permite asignar procesos a CPUs y nodos NUMA específicos?

a) cpu
b) cpuacct
c) cpuset
d) sched

<details><summary>Respuesta</summary>

**c) cpuset**

El controlador `cpuset` permite asignar un grupo de procesos a un conjunto específico de CPUs y nodos NUMA. Esto es útil para aislar cargas de trabajo que requieren rendimiento predecible o para garantizar la afinidad de CPU en entornos de contenedores.
</details>

### Pregunta 20

¿Cuál es el runtime de alto nivel que utiliza Docker internamente para gestionar el ciclo de vida de los contenedores?

a) runc
b) containerd
c) CRI-O
d) dockerd

<details><summary>Respuesta</summary>

**b) containerd**

`containerd` es el runtime de alto nivel que Docker utiliza internamente. Se encarga de gestionar las imágenes, la ejecución de contenedores, el almacenamiento y la red. A su vez, containerd delega la creación del contenedor al runtime de bajo nivel (runc por defecto). containerd también es utilizado directamente por Kubernetes.
</details>

### Pregunta 21

Escribe el comando para listar todos los namespaces del sistema Linux.

<input type="text" class="fill-blank" data-answer="lsns" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lsns**

`lsns` lista todos los namespaces existentes en el sistema, mostrando el tipo de namespace, el número de procesos, el PID propietario, el usuario y el comando. Se puede filtrar por tipo con `-t` (por ejemplo, `lsns -t net`) o por PID con `-p`.
</details>

### Pregunta 22

Escribe el comando para entrar en los namespaces de red, PID y montaje de un proceso con PID 1234.

<input type="text" class="fill-blank" data-answer="nsenter -t 1234 -n -p -m" data-alt="nsenter --target 1234 -n -p -m,nsenter -t 1234 -m -n -p" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nsenter -t 1234 -n -p -m**

`nsenter` permite entrar en los namespaces de un proceso existente. `-t` especifica el PID del proceso objetivo, `-n` entra en el namespace de red, `-p` en el de PID y `-m` en el de montaje. Es fundamental para depurar contenedores desde el host.
</details>

### Pregunta 23

Escribe el comando para crear un nuevo namespace de red aislado ejecutando una shell bash.

<input type="text" class="fill-blank" data-answer="unshare --net bash" data-alt="unshare -n bash" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**unshare --net bash**

`unshare` crea nuevos namespaces y ejecuta un programa dentro de ellos. `--net` (o `-n`) crea un nuevo namespace de red, aislando completamente las interfaces de red, rutas y reglas de firewall. El proceso hijo solo verá la interfaz loopback.
</details>

### Pregunta 24

Escribe el comando para ver los controladores de cgroups v2 disponibles en el sistema.

<input type="text" class="fill-blank" data-answer="cat /sys/fs/cgroup/cgroup.controllers" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cat /sys/fs/cgroup/cgroup.controllers**

El archivo `/sys/fs/cgroup/cgroup.controllers` en cgroups v2 lista los controladores disponibles en el sistema (cpu, memory, io, pids, cpuset, etc.). Para habilitar controladores en un subcgroup, se escriben en `cgroup.subtree_control`.
</details>

### Pregunta 25

Escribe el comando para ejecutar un contenedor Docker eliminando todas las capabilities y añadiendo solo `NET_BIND_SERVICE`.

<input type="text" class="fill-blank" data-answer="docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx" data-alt="docker run --cap-drop ALL --cap-add NET_BIND_SERVICE nginx" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx**

`--cap-drop=ALL` elimina todas las capabilities del contenedor, y `--cap-add=NET_BIND_SERVICE` añade solo la capability necesaria para vincular puertos privilegiados. Esta práctica de mínimo privilegio es esencial para la seguridad de contenedores en producción.
</details>
