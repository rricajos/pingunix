---
title: "352.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.1"
---

# Flashcards: 352.1 - Conceptos De Contenedores

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué namespace de Linux aísla los árboles de procesos, permitiendo que un contenedor tenga su propio PID 1?

</div>
<div class="flashcard-back">

**R:** c) pid. El namespace PID aísla el árbol de procesos. Dentro del contenedor, el proceso principal tiene PID 1, aunque en el host tiene un PID diferente. Esto permite que cada contenedor tenga su propia vista independiente de los procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia fundamental entre contenedores y máquinas virtuales?

</div>
<div class="flashcard-back">

**R:** b) Los contenedores comparten el kernel del host, las VMs tienen kernel propio. Los contenedores comparten el kernel del sistema operativo host y usan namespaces y cgroups para el aislamiento. Las VMs tienen su propio kernel y SO completo ejecutándose sobre un hipervisor. Esto hace a los contenedores más ligeros pero potencialmente menos aislados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué mecanismo del kernel Linux limita el uso de CPU, memoria y E/S por grupos de procesos?

</div>
<div class="flashcard-back">

**R:** b) Cgroups. Los Control Groups (cgroups) limitan, contabilizan y aíslan el uso de recursos del sistema (CPU, memoria, E/S de disco, PIDs) por grupos de procesos. Los namespaces proporcionan aislamiento de visibilidad, no de recursos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es la principal diferencia entre cgroups v1 y cgroups v2?

</div>
<div class="flashcard-back">

**R:** c) v2 usa una jerarquía única unificada, v1 usa múltiples jerarquías independientes. En cgroups v1, cada controlador (cpu, memory, blkio, etc.) tiene su propia jerarquía independiente. En v2, hay una única jerarquía unificada donde todos los controladores se gestionan de forma coherente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué sistema de archivos por capas es el storage driver predeterminado en Docker moderno?

</div>
<div class="flashcard-back">

**R:** c) OverlayFS (overlay2). OverlayFS (driver overlay2) es el storage driver predeterminado en Docker moderno. Combina capas lower (solo lectura) con una capa upper (lectura-escritura) en una vista merged. AUFS fue usado anteriormente pero no está en el kernel mainline.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué especificación OCI define el formato de las imágenes de contenedor?

</div>
<div class="flashcard-back">

**R:** b) Image Specification. La OCI Image Specification define el formato estándar de las imágenes de contenedor: manifest (referencia a configuración y capas), configuration (metadatos) y layers (capas del filesystem como tarballs). La Runtime Spec define cómo ejecutar contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué mecanismo de seguridad filtra las llamadas al sistema (syscalls) que un contenedor puede realizar?

</div>
<div class="flashcard-back">

**R:** c) Seccomp. Seccomp (Secure Computing Mode) filtra las syscalls que un proceso puede realizar. Docker aplica un perfil seccomp por defecto que bloquea syscalls peligrosas. Las capabilities dividen los privilegios de root en unidades, pero no filtran syscalls específicas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué namespace es fundamental para ejecutar contenedores rootless?

</div>
<div class="flashcard-back">

**R:** c) user. El namespace user permite mapear UID 0 (root) dentro del contenedor a un UID sin privilegios en el host. Esto es la base de los contenedores rootless: el proceso parece ser root dentro del contenedor pero no tiene privilegios reales en el host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál es la función de `runc` en la arquitectura de contenedores?

</div>
<div class="flashcard-back">

**R:** b) Es un runtime OCI de bajo nivel que crea y ejecuta contenedores. `runc` es la implementación de referencia del runtime OCI. Se encarga de crear los namespaces, configurar cgroups y ejecutar el proceso del contenedor. Herramientas de alto nivel como Docker y containerd usan runc internamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué archivos del sistema deben estar configurados para que funcionen los contenedores rootless con user namespaces?

</div>
<div class="flashcard-back">

**R:** b) `/etc/subuid` y `/etc/subgid`. `/etc/subuid` y `/etc/subgid` definen los rangos de UIDs y GIDs subordinados que cada usuario puede usar en user namespaces. Ejemplo: `usuario:100000:65536` asigna 65536 UIDs empezando en 100000 al usuario indicado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué namespace de Linux aísla el hostname y el domainname del sistema?

</div>
<div class="flashcard-back">

**R:** c) uts. El namespace UTS (Unix Time Sharing) aísla los identificadores de hostname y domainname del sistema. Esto permite que cada contenedor tenga su propio hostname independiente sin afectar al host ni a otros contenedores. Se crea con el flag `CLONE_NEWUTS`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué runtime OCI de bajo nivel, escrito en C, es una alternativa más ligera y rápida que runc?

</div>
<div class="flashcard-back">

**R:** c) crun. `crun` es un runtime OCI de bajo nivel escrito en C que ofrece menor consumo de memoria y tiempos de arranque más rápidos que `runc` (escrito en Go). Es compatible con la especificación OCI y puede sustituir a runc en Docker, Podman y Kubernetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué capa de OverlayFS almacena los cambios realizados por el contenedor en ejecución?

</div>
<div class="flashcard-back">

**R:** c) Upper Layer. OverlayFS utiliza capas lower (solo lectura, provenientes de la imagen) y una capa upper (lectura-escritura) donde se almacenan todos los cambios realizados por el contenedor. La vista merged combina ambas capas en una visión unificada que es lo que ve el contenedor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-014">
<div class="flashcard-front">

**P:** En cgroups v2, ¿qué archivo se utiliza para establecer el límite máximo de memoria de un grupo de procesos?

</div>
<div class="flashcard-back">

**R:** b) `memory.max`. En cgroups v2, `memory.max` define el límite estricto de memoria para un cgroup. Si los procesos exceden este límite, el OOM killer entrará en acción. `memory.limit_in_bytes` es el equivalente en cgroups v1. `memory.high` en v2 es un límite suave que activa la presión de memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué capability de Linux permite a un proceso vincular puertos privilegiados (menores a 1024)?

</div>
<div class="flashcard-back">

**R:** c) `CAP_NET_BIND_SERVICE`. `CAP_NET_BIND_SERVICE` permite vincular sockets a puertos privilegiados (por debajo de 1024) sin necesidad de privilegios de root completos. Es una capability comúnmente asignada a contenedores que ejecutan servidores web en los puertos 80 o 443.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué acción por defecto define un perfil seccomp cuando una syscall no está explícitamente permitida?

</div>
<div class="flashcard-back">

**R:** b) `SCMP_ACT_ERRNO`. En los perfiles seccomp, `defaultAction` define qué ocurre con syscalls no listadas. `SCMP_ACT_ERRNO` devuelve un error al proceso que intenta la syscall. `SCMP_ACT_KILL` terminaría el proceso. El perfil por defecto de Docker usa `SCMP_ACT_ERRNO` como acción predeterminada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué herramienta permite copiar imágenes de contenedores entre registros sin necesidad de un daemon Docker?

</div>
<div class="flashcard-back">

**R:** c) `skopeo`. `skopeo` es una herramienta de línea de comandos para trabajar con imágenes de contenedores remotas. Permite copiar imágenes entre registros (`skopeo copy`), inspeccionar imágenes remotas (`skopeo inspect`) y firmar imágenes, todo sin necesidad de un daemon Docker local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué componente de la especificación OCI Runtime define la configuración de un contenedor, incluyendo namespaces, mounts y el proceso a ejecutar?

</div>
<div class="flashcard-back">

**R:** c) `config.json`. En la OCI Runtime Specification, un "bundle" de contenedor se compone de un directorio `rootfs/` (sistema de archivos raíz) y un archivo `config.json` que describe la configuración completa del contenedor: namespaces, cgroups, mounts, proceso a ejecutar, variables de entorno y restricciones de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué controlador de cgroups permite asignar procesos a CPUs y nodos NUMA específicos?

</div>
<div class="flashcard-back">

**R:** c) cpuset. El controlador `cpuset` permite asignar un grupo de procesos a un conjunto específico de CPUs y nodos NUMA. Esto es útil para aislar cargas de trabajo que requieren rendimiento predecible o para garantizar la afinidad de CPU en entornos de contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-020">
<div class="flashcard-front">

**P:** ¿Cuál es el runtime de alto nivel que utiliza Docker internamente para gestionar el ciclo de vida de los contenedores?

</div>
<div class="flashcard-back">

**R:** b) containerd. `containerd` es el runtime de alto nivel que Docker utiliza internamente. Se encarga de gestionar las imágenes, la ejecución de contenedores, el almacenamiento y la red. A su vez, containerd delega la creación del contenedor al runtime de bajo nivel (runc por defecto). containerd también es utilizado directamente por Kubernetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para listar todos los namespaces del sistema Linux. <input type="text" class="fill-blank" data-answer="lsns" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lsns. `lsns` lista todos los namespaces existentes en el sistema, mostrando el tipo de namespace, el número de procesos, el PID propietario, el usuario y el comando. Se puede filtrar por tipo con `-t` (por ejemplo, `lsns -t net`) o por PID con `-p`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para entrar en los namespaces de red, PID y montaje de un proceso con PID 1234. <input type="text" class="fill-blank" data-answer="nsenter -t 1234 -n -p -m" data-alt="nsenter --target 1234 -n -p -m,nsenter -t 1234 -m -n -p" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nsenter -t 1234 -n -p -m. `nsenter` permite entrar en los namespaces de un proceso existente. `-t` especifica el PID del proceso objetivo, `-n` entra en el namespace de red, `-p` en el de PID y `-m` en el de montaje. Es fundamental para depurar contenedores desde el host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para crear un nuevo namespace de red aislado ejecutando una shell bash. <input type="text" class="fill-blank" data-answer="unshare --net bash" data-alt="unshare -n bash" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** unshare --net bash. `unshare` crea nuevos namespaces y ejecuta un programa dentro de ellos. `--net` (o `-n`) crea un nuevo namespace de red, aislando completamente las interfaces de red, rutas y reglas de firewall. El proceso hijo solo verá la interfaz loopback.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ver los controladores de cgroups v2 disponibles en el sistema. <input type="text" class="fill-blank" data-answer="cat /sys/fs/cgroup/cgroup.controllers" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cat /sys/fs/cgroup/cgroup.controllers. El archivo `/sys/fs/cgroup/cgroup.controllers` en cgroups v2 lista los controladores disponibles en el sistema (cpu, memory, io, pids, cpuset, etc.). Para habilitar controladores en un subcgroup, se escriben en `cgroup.subtree_control`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar un contenedor Docker eliminando todas las capabilities y añadiendo solo `NET_BIND_SERVICE`. <input type="text" class="fill-blank" data-answer="docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx" data-alt="docker run --cap-drop ALL --cap-add NET_BIND_SERVICE nginx" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE nginx. `--cap-drop=ALL` elimina todas las capabilities del contenedor, y `--cap-add=NET_BIND_SERVICE` añade solo la capability necesaria para vincular puertos privilegiados. Esta práctica de mínimo privilegio es esencial para la seguridad de contenedores en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Los contenedores comparten el kernel del host. Esto los hace más ligeros pero po...

</div>
<div class="flashcard-back">

**R:** Los contenedores comparten el kernel del host. Esto los hace más ligeros pero potencialmente menos seguros que las VMs. Un exploit en el kernel afecta a todos los contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El namespace `user` es fundamental para contenedores rootless. Permite mapear el...

</div>
<div class="flashcard-back">

**R:** El namespace `user` es fundamental para contenedores rootless. Permite mapear el UID 0 dentro del contenedor a un UID sin privilegios en el host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: OverlayFS es el storage driver predeterminado en Docker moderno. AUFS fue usado ...

</div>
<div class="flashcard-back">

**R:** OverlayFS es el storage driver predeterminado en Docker moderno. AUFS fue usado en versiones antiguas pero no está en el kernel mainline.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: OCI asegura la interoperabilidad entre diferentes herramientas de contenedores. ...

</div>
<div class="flashcard-back">

**R:** OCI asegura la interoperabilidad entre diferentes herramientas de contenedores. Una imagen construida con Docker puede ejecutarse con Podman, y viceversa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Por defecto, los contenedores Docker se ejecutan con un subconjunto limitado de ...

</div>
<div class="flashcard-back">

**R:** Por defecto, los contenedores Docker se ejecutan con un subconjunto limitado de capabilities. Nunca deben ejecutarse con `--privileged` en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `CLONE_NEWPID`?

</div>
<div class="flashcard-back">

**R:** Árbol de procesos (PID 1 propio)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Los contenedores son una forma de virtualización a nivel de sistema operativo que permite ejecutar múltiples instancias aisladas sobre un mismo kernel. A diferencia de las máquinas virtuales, no requie

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Namespaces del Kernel Linux?

</div>
<div class="flashcard-back">

**R:** Los namespaces proporcionan aislamiento de recursos del sistema. Cada contenedor tiene su propio conjunto de namespaces:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son Cgroups (Control Groups)?

</div>
<div class="flashcard-back">

**R:** Los cgroups limitan, contabilizan y aíslan el uso de recursos del sistema por grupos de procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Especificación OCI?

</div>
<div class="flashcard-back">

**R:** La Open Container Initiative define tres especificaciones estándar:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Seccomp (Secure Computing Mode)?

</div>
<div class="flashcard-back">

**R:** Filtra las llamadas al sistema (syscalls) que un proceso puede realizar:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Linux Capabilities?

</div>
<div class="flashcard-back">

**R:** Las capabilities dividen los privilegios de root en unidades individuales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Contenedores Rootless?

</div>
<div class="flashcard-back">

**R:** Ejecutan el container engine y los contenedores sin privilegios de root en el host:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.1">
</div>

<div class="flashcard" data-id="352.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

