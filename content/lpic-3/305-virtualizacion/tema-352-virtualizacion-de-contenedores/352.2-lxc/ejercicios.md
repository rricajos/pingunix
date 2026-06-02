---
title: "352.2 - Ejercicios: LXC"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "352 - Virtualización de Contenedores"
subtema: "352.2"
peso: 6
tags:
  - lpic-3
  - tema-352
  - ejercicios
  - lxc
---

# Ejercicios - 352.2 LXC

### Pregunta 1
¿Qué comando crea un contenedor LXC descargando una imagen de Ubuntu Jammy para arquitectura amd64?

a) `lxc-create -n mi-ct -t ubuntu -- --release jammy`
b) `lxc-create -n mi-ct -t download -- -d ubuntu -r jammy -a amd64`
c) `lxc-create -n mi-ct --image ubuntu:jammy:amd64`
d) `lxc-create -n mi-ct -t download -d ubuntu`

<details><summary>Respuesta</summary>

**b) `lxc-create -n mi-ct -t download -- -d ubuntu -r jammy -a amd64`**

El template `download` descarga imágenes preconfiguradas del servidor de imágenes LXC. Los parámetros después de `--` son: `-d` (distribución), `-r` (release), `-a` (arquitectura). El template `-t ubuntu` usa debootstrap local.
</details>

### Pregunta 2
¿Dónde se almacena el archivo de configuración de un contenedor LXC llamado "web-server"?

a) `/etc/lxc/web-server.conf`
b) `/var/lib/lxc/web-server/config`
c) `/etc/lxc/containers/web-server/config`
d) `/opt/lxc/web-server/lxc.conf`

<details><summary>Respuesta</summary>

**b) `/var/lib/lxc/web-server/config`**

Los contenedores privilegiados se almacenan en `/var/lib/lxc/<nombre>/`, con el archivo `config` para la configuración y el directorio `rootfs/` para el sistema de archivos. Los no privilegiados se almacenan en `~/.local/share/lxc/`.
</details>

### Pregunta 3
¿Qué comando permite obtener una shell interactiva dentro de un contenedor LXC en ejecución?

a) `lxc-console -n mi-ct`
b) `lxc-shell -n mi-ct`
c) `lxc-attach -n mi-ct`
d) `lxc-exec -n mi-ct bash`

<details><summary>Respuesta</summary>

**c) `lxc-attach -n mi-ct`**

`lxc-attach` adjunta una nueva sesión a los namespaces del contenedor en ejecución, proporcionando una shell. `lxc-console` conecta a la consola del contenedor (similar a un terminal serial). Con `lxc-attach` se puede ejecutar también un comando específico añadiendo `-- comando`.
</details>

### Pregunta 4
¿Qué opción de configuración LXC establece el tipo de interfaz de red como par virtual ethernet?

a) `lxc.network.type = bridge`
b) `lxc.net.0.type = veth`
c) `lxc.net.0.type = bridge`
d) `lxc.network.0.mode = veth`

<details><summary>Respuesta</summary>

**b) `lxc.net.0.type = veth`**

`lxc.net.0.type = veth` configura un par de interfaces virtuales ethernet. El `0` es el índice de la interfaz. El tipo `veth` crea un par donde un extremo está en el contenedor y el otro se conecta al bridge del host.
</details>

### Pregunta 5
¿Qué comando clona un contenedor LXC usando copy-on-write (snapshot)?

a) `lxc-clone -n mi-ct -N mi-clon -s`
b) `lxc-copy -n mi-ct -N mi-clon -s`
c) `lxc-snapshot -n mi-ct -c mi-clon`
d) `lxc-create -n mi-clon --clone mi-ct`

<details><summary>Respuesta</summary>

**b) `lxc-copy -n mi-ct -N mi-clon -s`**

`lxc-copy` reemplazó al antiguo `lxc-clone`. La opción `-s` crea un clon con snapshot (copy-on-write), que es más rápido y eficiente en espacio. Requiere un backend que lo soporte (btrfs, LVM, ZFS u overlay).
</details>

### Pregunta 6
¿Qué diferencia principal hay entre LXC y LXD?

a) LXC es para contenedores de aplicación, LXD para contenedores de sistema
b) LXD añade una API REST, gestión de imágenes y clustering sobre LXC
c) LXD es la versión de LXC para Docker
d) LXC es más moderno que LXD

<details><summary>Respuesta</summary>

**b) LXD añade una API REST, gestión de imágenes y clustering sobre LXC**

LXD es un gestor de contenedores de sistema construido sobre LXC (liblxc). Añade una API REST, gestión de imágenes, clustering, migración en vivo y gestión avanzada de almacenamiento y redes. El cliente de LXD usa el comando `lxc` (sin guión).
</details>

### Pregunta 7
¿Qué configuración de `lxc.idmap` mapea UID 0 del contenedor al UID 100000 del host con un rango de 65536 UIDs?

a) `lxc.idmap = user 0:100000:65536`
b) `lxc.idmap = u 0 100000 65536`
c) `lxc.uid.map = 0-65536:100000`
d) `lxc.userns.uid = 100000+65536`

<details><summary>Respuesta</summary>

**b) `lxc.idmap = u 0 100000 65536`**

El formato es: `lxc.idmap = <u|g> <id_inicio_contenedor> <id_inicio_host> <rango>`. `u` es para UIDs y `g` para GIDs. En este caso, el UID 0 del contenedor se mapea al 100000 del host, y así sucesivamente para 65536 UIDs.
</details>

### Pregunta 8
¿Qué backend de almacenamiento LXC NO soporta snapshots eficientes (copy-on-write)?

a) btrfs
b) zfs
c) dir
d) lvm

<details><summary>Respuesta</summary>

**c) dir**

El backend `dir` (directorio simple) es el predeterminado pero no soporta snapshots eficientes; debe copiar todo el rootfs. Los backends btrfs, zfs, lvm y overlay soportan snapshots nativos con copy-on-write.
</details>

### Pregunta 9
¿Qué comando detiene forzosamente un contenedor LXC que no responde al apagado normal?

a) `lxc-destroy -n mi-ct`
b) `lxc-stop -n mi-ct -k`
c) `lxc-kill -n mi-ct`
d) `lxc-stop -n mi-ct --force`

<details><summary>Respuesta</summary>

**b) `lxc-stop -n mi-ct -k`**

La opción `-k` (kill) de `lxc-stop` fuerza la detención inmediata del contenedor. Sin `-k`, `lxc-stop` envía la señal SIGPWR al init del contenedor y espera un apagado ordenado. `lxc-destroy` elimina el contenedor, no solo lo detiene.
</details>

### Pregunta 10
¿Cuál es la diferencia entre `lxc-attach` y `lxc-console`?

a) Son idénticos en funcionalidad
b) `lxc-attach` crea un nuevo proceso en los namespaces del contenedor; `lxc-console` conecta al terminal del contenedor
c) `lxc-console` solo funciona con contenedores no privilegiados
d) `lxc-attach` requiere que SSH esté instalado en el contenedor

<details><summary>Respuesta</summary>

**b) `lxc-attach` crea un nuevo proceso en los namespaces del contenedor; `lxc-console` conecta al terminal del contenedor**

`lxc-attach` usa `nsenter` para crear un nuevo proceso directamente en los namespaces del contenedor. `lxc-console` conecta a la consola del contenedor (como un terminal serie), que es el tty configurado para el contenedor. Se sale de `lxc-console` con Ctrl+a seguido de q.
</details>

### Pregunta 11

¿Qué opción de configuración LXC permite el arranque automático de un contenedor al iniciar el host?

a) `lxc.boot.auto = true`
b) `lxc.start.auto = 1`
c) `lxc.autostart = yes`
d) `lxc.init.auto = 1`

<details><summary>Respuesta</summary>

**b) `lxc.start.auto = 1`**

`lxc.start.auto = 1` habilita el arranque automático del contenedor cuando el host se inicia. Se complementa con `lxc.start.delay` (retardo en segundos entre arranques) y `lxc.start.order` (prioridad de arranque, valores más altos se inician primero).
</details>

### Pregunta 12

¿Qué tipo de red LXC asigna una interfaz virtual con su propia dirección MAC directamente sobre la interfaz física del host?

a) veth
b) phys
c) macvlan
d) bridge

<details><summary>Respuesta</summary>

**c) macvlan**

El tipo de red `macvlan` crea una interfaz virtual con su propia dirección MAC directamente sobre la interfaz física del host. A diferencia de `veth`, no requiere un bridge. El tipo `phys` asigna la interfaz física directamente al contenedor.
</details>

### Pregunta 13

¿Dónde se almacenan los contenedores LXC no privilegiados (unprivileged) de un usuario?

a) `/var/lib/lxc/`
b) `/etc/lxc/unprivileged/`
c) `~/.local/share/lxc/`
d) `/home/lxc/containers/`

<details><summary>Respuesta</summary>

**c) `~/.local/share/lxc/`**

Los contenedores no privilegiados se almacenan en el directorio del usuario `~/.local/share/lxc/`, a diferencia de los privilegiados que se almacenan en `/var/lib/lxc/`. La configuración por defecto para nuevos contenedores del usuario se encuentra en `~/.config/lxc/default.conf`.
</details>

### Pregunta 14

¿Qué comando de LXC congela todos los procesos de un contenedor en ejecución?

a) `lxc-stop -n mi-ct --pause`
b) `lxc-freeze -n mi-ct`
c) `lxc-pause -n mi-ct`
d) `lxc-suspend -n mi-ct`

<details><summary>Respuesta</summary>

**b) `lxc-freeze -n mi-ct`**

`lxc-freeze` congela todos los procesos del contenedor enviando SIGSTOP a cada uno. Los procesos quedan suspendidos sin consumir CPU pero mantienen su estado en memoria. Se descongelan con `lxc-unfreeze`. Es útil para mantenimiento o migración.
</details>

### Pregunta 15

¿Qué opción de configuración LXC especifica qué capabilities deben eliminarse del contenedor?

a) `lxc.security.drop`
b) `lxc.cap.drop`
c) `lxc.caps.remove`
d) `lxc.capability.deny`

<details><summary>Respuesta</summary>

**b) `lxc.cap.drop`**

`lxc.cap.drop` lista las capabilities de Linux que se eliminan del contenedor. Por ejemplo, `lxc.cap.drop = sys_admin mac_admin mac_override` elimina esas capabilities específicas. La opción complementaria `lxc.cap.keep` especifica las únicas capabilities que se mantienen, descartando todas las demás.
</details>

### Pregunta 16

¿Qué archivo configura el bridge de red por defecto de LXC (lxcbr0)?

a) `/etc/lxc/lxc.conf`
b) `/etc/default/lxc-net`
c) `/etc/lxc/bridge.conf`
d) `/etc/network/lxc-bridge`

<details><summary>Respuesta</summary>

**b) `/etc/default/lxc-net`**

El archivo `/etc/default/lxc-net` configura el bridge por defecto `lxcbr0` de LXC, incluyendo la dirección IP (`LXC_ADDR`), la máscara de red (`LXC_NETMASK`), la red (`LXC_NETWORK`) y el rango DHCP (`LXC_DHCP_RANGE`).
</details>

### Pregunta 17

¿Qué comando de LXD (no LXC nativo) permite ejecutar un comando dentro de un contenedor en ejecución?

a) `lxc attach mi-ct -- bash`
b) `lxc exec mi-ct -- bash`
c) `lxc run mi-ct bash`
d) `lxc shell mi-ct`

<details><summary>Respuesta</summary>

**b) `lxc exec mi-ct -- bash`**

En LXD, `lxc exec` ejecuta un comando dentro de un contenedor en ejecución. Es importante distinguir entre los comandos `lxc-*` (LXC nativo, con guión) y `lxc` (cliente de LXD, sin guión). En LXC nativo, el equivalente es `lxc-attach -n mi-ct`.
</details>

### Pregunta 18

¿Qué sucede cuando se ejecuta `lxc-destroy -n mi-ct -s`?

a) Destruye el contenedor y todos sus snapshots
b) Destruye solo los snapshots, manteniendo el contenedor
c) Detiene el contenedor de forma segura (safe)
d) Destruye el contenedor con confirmación interactiva

<details><summary>Respuesta</summary>

**a) Destruye el contenedor y todos sus snapshots**

La opción `-s` (o `--snapshots`) de `lxc-destroy` elimina el contenedor junto con todos sus snapshots asociados. Sin esta opción, `lxc-destroy` falla si el contenedor tiene snapshots, requiriendo eliminarlos primero.
</details>

### Pregunta 19

¿Qué opción de configuración LXC define el path del sistema de archivos raíz del contenedor?

a) `lxc.rootfs.dir`
b) `lxc.rootfs.path`
c) `lxc.mount.root`
d) `lxc.filesystem.root`

<details><summary>Respuesta</summary>

**b) `lxc.rootfs.path`**

`lxc.rootfs.path` define la ruta al sistema de archivos raíz del contenedor. El formato incluye el tipo de backend, por ejemplo: `lxc.rootfs.path = dir:/var/lib/lxc/mi-ct/rootfs` para el backend de directorio. Otros backends soportados incluyen btrfs, lvm, zfs y overlay.
</details>

### Pregunta 20

¿Qué opción de `lxc-create` especifica el backend de almacenamiento a utilizar para el contenedor?

a) `-s`
b) `-B`
c) `--storage`
d) `--backend`

<details><summary>Respuesta</summary>

**b) `-B`**

La opción `-B` de `lxc-create` especifica el backend de almacenamiento: `dir` (predeterminado), `btrfs`, `lvm`, `zfs`, `overlay` o `loop`. Ejemplo: `lxc-create -n mi-ct -t download -B btrfs -- -d ubuntu -r jammy -a amd64`.
</details>

### Pregunta 21

Escribe el comando para listar todos los contenedores LXC con información detallada (nombre, estado, IP, memoria).

<input type="text" class="fill-blank" data-answer="lxc-ls --fancy" data-alt="lxc-ls -f" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lxc-ls --fancy**

`lxc-ls --fancy` muestra una tabla con información detallada de todos los contenedores: nombre, estado, dirección IPv4, dirección IPv6, autostart y grupos. Se puede personalizar con `--fancy-format` para elegir las columnas mostradas.
</details>

### Pregunta 22

Escribe el comando para crear un snapshot del contenedor LXC llamado `web`.

<input type="text" class="fill-blank" data-answer="lxc-snapshot -n web" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lxc-snapshot -n web**

`lxc-snapshot -n web` crea un snapshot del contenedor llamado `web`. Los snapshots se nombran automáticamente como snap0, snap1, etc. Se pueden listar con `-L` y restaurar con `-r snap0`. El contenedor debe estar detenido para crear un snapshot consistente.
</details>

### Pregunta 23

Escribe el comando para ver el estado e información de un contenedor LXC llamado `db-server`.

<input type="text" class="fill-blank" data-answer="lxc-info -n db-server" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lxc-info -n db-server**

`lxc-info -n db-server` muestra información del contenedor incluyendo: estado (RUNNING, STOPPED, FROZEN), PID del proceso init, dirección IP, uso de CPU, uso de memoria y uso de red. Es el comando principal para verificar el estado de un contenedor.
</details>

### Pregunta 24

Escribe el comando para iniciar un contenedor LXC llamado `mi-ct` en primer plano para depuración.

<input type="text" class="fill-blank" data-answer="lxc-start -n mi-ct -F" data-alt="lxc-start -F -n mi-ct" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lxc-start -n mi-ct -F**

`lxc-start -n mi-ct -F` inicia el contenedor en primer plano (foreground). La opción `-F` muestra la salida de la consola directamente en el terminal, lo que es útil para depurar problemas de arranque. Sin `-F`, el contenedor se inicia en segundo plano (modo daemon).
</details>

### Pregunta 25

Escribe el comando para restaurar el snapshot `snap0` del contenedor LXC llamado `web`.

<input type="text" class="fill-blank" data-answer="lxc-snapshot -n web -r snap0" data-alt="lxc-snapshot -r snap0 -n web" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lxc-snapshot -n web -r snap0**

`lxc-snapshot -n web -r snap0` restaura el contenedor `web` al estado del snapshot `snap0`. El contenedor debe estar detenido antes de restaurar. Se pueden listar los snapshots disponibles con `lxc-snapshot -n web -L`.
</details>
