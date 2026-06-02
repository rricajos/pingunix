---
title: "352.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.2"
---

# Flashcards: 352.2 - Lxc

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando crea un contenedor LXC descargando una imagen de Ubuntu Jammy para arquitectura amd64?

</div>
<div class="flashcard-back">

**R:** b) `lxc-create -n mi-ct -t download -- -d ubuntu -r jammy -a amd64`. El template `download` descarga imágenes preconfiguradas del servidor de imágenes LXC. Los parámetros después de `--` son: `-d` (distribución), `-r` (release), `-a` (arquitectura). El template `-t ubuntu` usa debootstrap local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-002">
<div class="flashcard-front">

**P:** ¿Dónde se almacena el archivo de configuración de un contenedor LXC llamado "web-server"?

</div>
<div class="flashcard-back">

**R:** b) `/var/lib/lxc/web-server/config`. Los contenedores privilegiados se almacenan en `/var/lib/lxc/<nombre>/`, con el archivo `config` para la configuración y el directorio `rootfs/` para el sistema de archivos. Los no privilegiados se almacenan en `~/.local/share/lxc/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando permite obtener una shell interactiva dentro de un contenedor LXC en ejecución?

</div>
<div class="flashcard-back">

**R:** c) `lxc-attach -n mi-ct`. `lxc-attach` adjunta una nueva sesión a los namespaces del contenedor en ejecución, proporcionando una shell. `lxc-console` conecta a la consola del contenedor (similar a un terminal serial). Con `lxc-attach` se puede ejecutar también un comando específico añadiendo `-- comando`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué opción de configuración LXC establece el tipo de interfaz de red como par virtual ethernet?

</div>
<div class="flashcard-back">

**R:** b) `lxc.net.0.type = veth`. `lxc.net.0.type = veth` configura un par de interfaces virtuales ethernet. El `0` es el índice de la interfaz. El tipo `veth` crea un par donde un extremo está en el contenedor y el otro se conecta al bridge del host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando clona un contenedor LXC usando copy-on-write (snapshot)?

</div>
<div class="flashcard-back">

**R:** b) `lxc-copy -n mi-ct -N mi-clon -s`. `lxc-copy` reemplazó al antiguo `lxc-clone`. La opción `-s` crea un clon con snapshot (copy-on-write), que es más rápido y eficiente en espacio. Requiere un backend que lo soporte (btrfs, LVM, ZFS u overlay).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué diferencia principal hay entre LXC y LXD?

</div>
<div class="flashcard-back">

**R:** b) LXD añade una API REST, gestión de imágenes y clustering sobre LXC. LXD es un gestor de contenedores de sistema construido sobre LXC (liblxc). Añade una API REST, gestión de imágenes, clustering, migración en vivo y gestión avanzada de almacenamiento y redes. El cliente de LXD usa el comando `lxc` (sin guión).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué configuración de `lxc.idmap` mapea UID 0 del contenedor al UID 100000 del host con un rango de 65536 UIDs?

</div>
<div class="flashcard-back">

**R:** b) `lxc.idmap = u 0 100000 65536`. El formato es: `lxc.idmap = <u|g> <id_inicio_contenedor> <id_inicio_host> <rango>`. `u` es para UIDs y `g` para GIDs. En este caso, el UID 0 del contenedor se mapea al 100000 del host, y así sucesivamente para 65536 UIDs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué backend de almacenamiento LXC NO soporta snapshots eficientes (copy-on-write)?

</div>
<div class="flashcard-back">

**R:** c) dir. El backend `dir` (directorio simple) es el predeterminado pero no soporta snapshots eficientes; debe copiar todo el rootfs. Los backends btrfs, zfs, lvm y overlay soportan snapshots nativos con copy-on-write.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando detiene forzosamente un contenedor LXC que no responde al apagado normal?

</div>
<div class="flashcard-back">

**R:** b) `lxc-stop -n mi-ct -k`. La opción `-k` (kill) de `lxc-stop` fuerza la detención inmediata del contenedor. Sin `-k`, `lxc-stop` envía la señal SIGPWR al init del contenedor y espera un apagado ordenado. `lxc-destroy` elimina el contenedor, no solo lo detiene.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `lxc-attach` y `lxc-console`?

</div>
<div class="flashcard-back">

**R:** b) `lxc-attach` crea un nuevo proceso en los namespaces del contenedor; `lxc-console` conecta al terminal del contenedor. `lxc-attach` usa `nsenter` para crear un nuevo proceso directamente en los namespaces del contenedor. `lxc-console` conecta a la consola del contenedor (como un terminal serie), que es el tty configurado para el contenedor. Se sale de `lxc-console` con Ctrl+a seguido de q.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de configuración LXC permite el arranque automático de un contenedor al iniciar el host?

</div>
<div class="flashcard-back">

**R:** b) `lxc.start.auto = 1`. `lxc.start.auto = 1` habilita el arranque automático del contenedor cuando el host se inicia. Se complementa con `lxc.start.delay` (retardo en segundos entre arranques) y `lxc.start.order` (prioridad de arranque, valores más altos se inician primero).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de red LXC asigna una interfaz virtual con su propia dirección MAC directamente sobre la interfaz física del host?

</div>
<div class="flashcard-back">

**R:** c) macvlan. El tipo de red `macvlan` crea una interfaz virtual con su propia dirección MAC directamente sobre la interfaz física del host. A diferencia de `veth`, no requiere un bridge. El tipo `phys` asigna la interfaz física directamente al contenedor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-013">
<div class="flashcard-front">

**P:** ¿Dónde se almacenan los contenedores LXC no privilegiados (unprivileged) de un usuario?

</div>
<div class="flashcard-back">

**R:** c) `~/.local/share/lxc/`. Los contenedores no privilegiados se almacenan en el directorio del usuario `~/.local/share/lxc/`, a diferencia de los privilegiados que se almacenan en `/var/lib/lxc/`. La configuración por defecto para nuevos contenedores del usuario se encuentra en `~/.config/lxc/default.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué comando de LXC congela todos los procesos de un contenedor en ejecución?

</div>
<div class="flashcard-back">

**R:** b) `lxc-freeze -n mi-ct`. `lxc-freeze` congela todos los procesos del contenedor enviando SIGSTOP a cada uno. Los procesos quedan suspendidos sin consumir CPU pero mantienen su estado en memoria. Se descongelan con `lxc-unfreeze`. Es útil para mantenimiento o migración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción de configuración LXC especifica qué capabilities deben eliminarse del contenedor?

</div>
<div class="flashcard-back">

**R:** b) `lxc.cap.drop`. `lxc.cap.drop` lista las capabilities de Linux que se eliminan del contenedor. Por ejemplo, `lxc.cap.drop = sys_admin mac_admin mac_override` elimina esas capabilities específicas. La opción complementaria `lxc.cap.keep` especifica las únicas capabilities que se mantienen, descartando todas las demás.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué archivo configura el bridge de red por defecto de LXC (lxcbr0)?

</div>
<div class="flashcard-back">

**R:** b) `/etc/default/lxc-net`. El archivo `/etc/default/lxc-net` configura el bridge por defecto `lxcbr0` de LXC, incluyendo la dirección IP (`LXC_ADDR`), la máscara de red (`LXC_NETMASK`), la red (`LXC_NETWORK`) y el rango DHCP (`LXC_DHCP_RANGE`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando de LXD (no LXC nativo) permite ejecutar un comando dentro de un contenedor en ejecución?

</div>
<div class="flashcard-back">

**R:** b) `lxc exec mi-ct -- bash`. En LXD, `lxc exec` ejecuta un comando dentro de un contenedor en ejecución. Es importante distinguir entre los comandos `lxc-*` (LXC nativo, con guión) y `lxc` (cliente de LXD, sin guión). En LXC nativo, el equivalente es `lxc-attach -n mi-ct`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué sucede cuando se ejecuta `lxc-destroy -n mi-ct -s`?

</div>
<div class="flashcard-back">

**R:** a) Destruye el contenedor y todos sus snapshots. La opción `-s` (o `--snapshots`) de `lxc-destroy` elimina el contenedor junto con todos sus snapshots asociados. Sin esta opción, `lxc-destroy` falla si el contenedor tiene snapshots, requiriendo eliminarlos primero.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué opción de configuración LXC define el path del sistema de archivos raíz del contenedor?

</div>
<div class="flashcard-back">

**R:** b) `lxc.rootfs.path`. `lxc.rootfs.path` define la ruta al sistema de archivos raíz del contenedor. El formato incluye el tipo de backend, por ejemplo: `lxc.rootfs.path = dir:/var/lib/lxc/mi-ct/rootfs` para el backend de directorio. Otros backends soportados incluyen btrfs, lvm, zfs y overlay.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué opción de `lxc-create` especifica el backend de almacenamiento a utilizar para el contenedor?

</div>
<div class="flashcard-back">

**R:** b) `-B`. La opción `-B` de `lxc-create` especifica el backend de almacenamiento: `dir` (predeterminado), `btrfs`, `lvm`, `zfs`, `overlay` o `loop`. Ejemplo: `lxc-create -n mi-ct -t download -B btrfs -- -d ubuntu -r jammy -a amd64`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para listar todos los contenedores LXC con información detallada (nombre, estado, IP, memoria). <input type="text" class="fill-blank" data-answer="lxc-ls --fancy" data-alt="lxc-ls -f" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lxc-ls --fancy. `lxc-ls --fancy` muestra una tabla con información detallada de todos los contenedores: nombre, estado, dirección IPv4, dirección IPv6, autostart y grupos. Se puede personalizar con `--fancy-format` para elegir las columnas mostradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para crear un snapshot del contenedor LXC llamado `web`. <input type="text" class="fill-blank" data-answer="lxc-snapshot -n web" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lxc-snapshot -n web. `lxc-snapshot -n web` crea un snapshot del contenedor llamado `web`. Los snapshots se nombran automáticamente como snap0, snap1, etc. Se pueden listar con `-L` y restaurar con `-r snap0`. El contenedor debe estar detenido para crear un snapshot consistente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado e información de un contenedor LXC llamado `db-server`. <input type="text" class="fill-blank" data-answer="lxc-info -n db-server" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lxc-info -n db-server. `lxc-info -n db-server` muestra información del contenedor incluyendo: estado (RUNNING, STOPPED, FROZEN), PID del proceso init, dirección IP, uso de CPU, uso de memoria y uso de red. Es el comando principal para verificar el estado de un contenedor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para iniciar un contenedor LXC llamado `mi-ct` en primer plano para depuración. <input type="text" class="fill-blank" data-answer="lxc-start -n mi-ct -F" data-alt="lxc-start -F -n mi-ct" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lxc-start -n mi-ct -F. `lxc-start -n mi-ct -F` inicia el contenedor en primer plano (foreground). La opción `-F` muestra la salida de la consola directamente en el terminal, lo que es útil para depurar problemas de arranque. Sin `-F`, el contenedor se inicia en segundo plano (modo daemon).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para restaurar el snapshot `snap0` del contenedor LXC llamado `web`. <input type="text" class="fill-blank" data-answer="lxc-snapshot -n web -r snap0" data-alt="lxc-snapshot -r snap0 -n web" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lxc-snapshot -n web -r snap0. `lxc-snapshot -n web -r snap0` restaura el contenedor `web` al estado del snapshot `snap0`. El contenedor debe estar detenido antes de restaurar. Se pueden listar los snapshots disponibles con `lxc-snapshot -n web -L`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El template `download` descarga imágenes preconfiguradas del servidor de imágene...

</div>
<div class="flashcard-back">

**R:** El template `download` descarga imágenes preconfiguradas del servidor de imágenes LXC. Los templates locales (`-t ubuntu`, `-t debian`) ejecutan scripts de debootstrap para construir el rootfs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `lxc-copy` reemplazó al antiguo `lxc-clone`. La opción `-s` crea un clon con sna...

</div>
<div class="flashcard-back">

**R:** `lxc-copy` reemplazó al antiguo `lxc-clone`. La opción `-s` crea un clon con snapshot (COW), mucho más rápido y eficiente en espacio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Distinguir entre los comandos `lxc-*` (LXC nativo) y `lxc` (cliente de LXD). Son...

</div>
<div class="flashcard-back">

**R:** Distinguir entre los comandos `lxc-*` (LXC nativo) y `lxc` (cliente de LXD). Son herramientas diferentes: LXC es la librería base, LXD es una capa superior con más funcionalidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Los contenedores no privilegiados son más seguros porque root dentro del contene...

</div>
<div class="flashcard-back">

**R:** Los contenedores no privilegiados son más seguros porque root dentro del contenedor (UID 0) se mapea a un usuario sin privilegios en el host. Un escape del contenedor no otorga privilegios de root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/lxc/default.conf`?

</div>
<div class="flashcard-back">

**R:** Configuración por defecto para nuevos contenedores

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `/var/lib/lxc/<nombre>/config`?

</div>
<div class="flashcard-back">

**R:** Configuración de un contenedor específico

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `~/.local/share/lxc/`?

</div>
<div class="flashcard-back">

**R:** Contenedores no privilegiados (por usuario)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `lxc.net.X.type`?

</div>
<div class="flashcard-back">

**R:** Tipo de red: `veth`, `macvlan`, `phys`, `none`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** LXC (Linux Containers) proporciona contenedores a nivel de sistema operativo, más parecidos a máquinas virtuales ligeras que a contenedores de aplicación (como Docker). Cada contenedor LXC ejecuta un s

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Backends de Almacenamiento?

</div>
<div class="flashcard-back">

**R:** | Backend | Descripción | Snapshots eficientes |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son LXD: La Evolución de LXC?

</div>
<div class="flashcard-back">

**R:** LXD es un gestor de contenedores de sistema construido sobre LXC que añade:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.2">
</div>

<div class="flashcard" data-id="352.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Contenedores No Privilegiados?

</div>
<div class="flashcard-back">

**R:** Ejecutan el contenedor mapeando UIDs/GIDs a rangos sin privilegios:

</div>
</div>

---

