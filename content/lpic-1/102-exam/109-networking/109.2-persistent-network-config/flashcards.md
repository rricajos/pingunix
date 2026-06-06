---
title: "109.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "109.2"
---

# Flashcards: 109.2 - Configuracion Persistente De Red

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-001">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos es el reemplazo moderno (iproute2) de `ifconfig`?

</div>
<div class="flashcard-back">

**R:** b) `ip addr`. El comando `ip addr` (o `ip addr show`) del paquete iproute2 es el reemplazo moderno de `ifconfig` para mostrar y configurar direcciones IP en interfaces de red. Otras equivalencias son: `route` -> `ip route`, `arp` -> `ip neigh`, `ifconfig` -> `ip link show` / `ip addr show`. El paquete `net-tools` (que incluye ifconfig, route, arp) esta deprecado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-002">
<div class="flashcard-front">

**P:** Que significa la linea `hosts: files dns myhostname` en `/etc/nsswitch.conf`?

</div>
<div class="flashcard-back">

**R:** b) Primero se busca en `/etc/hosts`, luego en DNS y finalmente se resuelve el hostname local. La linea `hosts: files dns myhostname` en `/etc/nsswitch.conf` define el orden de busqueda para resolver nombres de host: 1) `files` busca primero en `/etc/hosts`, 2) `dns` consulta los servidores DNS definidos en `/etc/resolv.conf`, 3) `myhostname` resuelve el nombre del propio host como ultimo recurso. Esto significa que las entradas en `/etc/hosts` tienen prioridad sobre las respuestas DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-003">
<div class="flashcard-front">

**P:** Cuantos servidores DNS se pueden definir como maximo en `/etc/resolv.conf`?

</div>
<div class="flashcard-back">

**R:** c) 3. El archivo `/etc/resolv.conf` permite definir un maximo de 3 directivas `nameserver`, cada una con la IP de un servidor DNS. Si se necesitan mas, solo se usaran los 3 primeros. Las directivas `domain` y `search` son mutuamente excluyentes; si ambas estan presentes, se usa la ultima definida en el archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-004">
<div class="flashcard-front">

**P:** Un administrador configura una IP estatica con `ip addr add 192.168.1.50/24 dev eth0`. Que ocurre con esta configuracion al reiniciar el sistema?

</div>
<div class="flashcard-back">

**R:** b) Se pierde porque las configuraciones con `ip` son temporales. Las configuraciones realizadas con el comando `ip` (iproute2) e `ifconfig` (net-tools) son temporales y se pierden al reiniciar el sistema. Para hacer la configuracion persistente se deben usar los archivos de configuracion de la distribucion: `/etc/network/interfaces` (Debian clasico), archivos en `/etc/sysconfig/network-scripts/` (RHEL), archivos `.network` en `/etc/systemd/network/` (systemd-networkd), `nmcli` (NetworkManager) o archivos YAML en `/etc/netplan/` (Ubuntu moderno).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-005">
<div class="flashcard-front">

**P:** Como se crea una conexion de red con IP estatica usando `nmcli` de NetworkManager?

</div>
<div class="flashcard-back">

**R:** b) `nmcli connection add type ethernet con-name mi-red ifname eth0 ip4 192.168.1.100/24 gw4 192.168.1.1`. La sintaxis correcta de `nmcli` para crear una conexion estatica incluye: `connection add` (accion), `type ethernet` (tipo de conexion), `con-name` (nombre de la conexion), `ifname` (interfaz de red), `ip4` (direccion IP con mascara) y `gw4` (gateway). Despues se puede configurar DNS con `nmcli connection modify mi-red ipv4.dns "8.8.8.8"` y activar con `nmcli connection up mi-red`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-006">
<div class="flashcard-front">

**P:** Cual es el archivo de configuracion de red por interfaz en sistemas RHEL/CentOS?

</div>
<div class="flashcard-back">

**R:** b) `/etc/sysconfig/network-scripts/ifcfg-eth0`. En sistemas RHEL/CentOS, la configuracion de red por interfaz se realiza en archivos con formato `ifcfg-nombre` dentro del directorio `/etc/sysconfig/network-scripts/`. Estos archivos contienen directivas como `BOOTPROTO`, `IPADDR`, `NETMASK`, `GATEWAY`, `DNS1`, `ONBOOT`, etc. La opcion A corresponde a Debian clasico, la C a systemd-networkd y la D a Netplan (Ubuntu moderno).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-007">
<div class="flashcard-front">

**P:** Como se configura systemd-networkd para que la interfaz eth0 obtenga su IP por DHCP?

</div>
<div class="flashcard-back">

**R:** c) Creando un archivo `.network` en `/etc/systemd/network/` con secciones `[Match]` y `[Network]` con `DHCP=yes`. systemd-networkd usa archivos con extension `.network` en `/etc/systemd/network/`. El archivo debe contener al menos una seccion `[Match]` con `Name=eth0` para identificar la interfaz, y una seccion `[Network]` con `DHCP=yes` para habilitar DHCP. Despues se activa con `systemctl enable systemd-networkd && systemctl start systemd-networkd`. El estado se verifica con `networkctl status eth0`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-008">
<div class="flashcard-front">

**P:** Cual es el equivalente moderno de `route -n` para mostrar la tabla de rutas?

</div>
<div class="flashcard-back">

**R:** a) `ip route show`. El comando `ip route show` (o abreviado `ip r`) es el reemplazo moderno de `route -n` para mostrar la tabla de rutas del sistema. `netstat -r` es otra forma legacy de ver la tabla de rutas (equivalente a `route -n`) pero tambien esta deprecada. Para agregar una ruta por defecto se usa `ip route add default via 192.168.1.1`. Los comandos `routectl` y `networkctl routes` no existen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-009">
<div class="flashcard-front">

**P:** Que comando de Netplan aplica los cambios de configuracion de red en Ubuntu moderno?

</div>
<div class="flashcard-back">

**R:** b) `netplan apply`. El comando `netplan apply` lee los archivos YAML de configuracion en `/etc/netplan/`, genera la configuracion del backend (NetworkManager o systemd-networkd) y la aplica inmediatamente. `netplan generate` solo genera la configuracion sin aplicarla. `netplan try` aplica la configuracion temporalmente y la revierte si no se confirma (util para evitar perder conectividad). Los comandos `netplan reload` y `netplan commit` no existen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-010">
<div class="flashcard-front">

**P:** Que comando se utiliza para establecer el hostname de forma persistente en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** c) `hostnamectl set-hostname mi-servidor`. `hostnamectl set-hostname` establece el hostname de forma persistente en sistemas con systemd, actualizando el archivo `/etc/hostname`. La opcion A (`hostname mi-servidor`) solo cambia el hostname temporalmente y se pierde al reiniciar. La opcion B funciona pero requiere un reinicio innecesario. `hostnamectl` tambien permite establecer un hostname descriptivo con `--pretty`. Los tipos de hostname son: static (persistente), transient (temporal) y pretty (descriptivo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-011">
<div class="flashcard-front">

**P:** Que directiva en `/etc/resolv.conf` especifica los dominios que se agregan automaticamente a nombres cortos al resolver DNS?

</div>
<div class="flashcard-back">

**R:** c) `search`. La directiva `search` en `/etc/resolv.conf` define una lista de dominios que se agregan automaticamente a nombres cortos (sin punto final). Por ejemplo, con `search empresa.com red.local`, al buscar `servidor` se intentara resolver `servidor.empresa.com`, luego `servidor.red.local`. La directiva `domain` tiene una funcion similar pero solo permite un dominio. Ambas son mutuamente excluyentes; si se definen las dos, se usa la ultima.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-012">
<div class="flashcard-front">

**P:** En que directorio se ubican los archivos de configuracion de Netplan en Ubuntu moderno?

</div>
<div class="flashcard-back">

**R:** c) `/etc/netplan/`. Los archivos de configuracion de Netplan se ubican en `/etc/netplan/` con extension `.yaml`. Netplan es el sistema de configuracion de red utilizado en Ubuntu 17.10 en adelante. Los archivos YAML describen la configuracion deseada y Netplan genera la configuracion para el backend correspondiente (NetworkManager o systemd-networkd). Se aplican los cambios con `netplan apply` y se pueden probar de forma segura con `netplan try`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-013">
<div class="flashcard-front">

**P:** Que comando de `nmcli` muestra el estado de todos los dispositivos de red gestionados por NetworkManager?

</div>
<div class="flashcard-back">

**R:** b) `nmcli device status`. El comando `nmcli device status` muestra el estado de todos los dispositivos de red (interfaces) gestionados por NetworkManager, incluyendo el tipo, estado y conexion activa de cada uno. `nmcli general status` muestra el estado general de NetworkManager. `nmcli connection show` lista las conexiones configuradas (perfiles de red). `nmcli` es la herramienta de linea de comandos de NetworkManager; `nmtui` es la version con interfaz de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-014">
<div class="flashcard-front">

**P:** Que comando se usa en sistemas Debian clasicos para activar una interfaz de red configurada en `/etc/network/interfaces`?

</div>
<div class="flashcard-back">

**R:** b) `ifup eth0`. En sistemas Debian clasicos que usan `/etc/network/interfaces`, el comando `ifup` activa una interfaz de red leyendo su configuracion del archivo. Su contraparte `ifdown` desactiva la interfaz. La opcion A (`ip link set eth0 up`) activa la interfaz a nivel de enlace pero no aplica la configuracion del archivo interfaces. `nmcli` corresponde a NetworkManager y `networkctl` a systemd-networkd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-015">
<div class="flashcard-front">

**P:** En un archivo de configuracion de interfaz de RHEL (`ifcfg-eth0`), que directiva determina si la interfaz se activa automaticamente al arrancar el sistema?

</div>
<div class="flashcard-back">

**R:** c) `ONBOOT`. La directiva `ONBOOT=yes` en los archivos `ifcfg-*` de `/etc/sysconfig/network-scripts/` indica que la interfaz debe activarse automaticamente al arrancar el sistema. Con `ONBOOT=no`, la interfaz no se activa en el arranque. `BOOTPROTO` define el metodo de obtencion de IP (static, dhcp, none). `AUTOSTART` y `ACTIVATE` no son directivas validas en estos archivos de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-016">
<div class="flashcard-front">

**P:** Que comando de Netplan permite probar la configuracion de red y revertirla automaticamente si no se confirma?

</div>
<div class="flashcard-back">

**R:** c) `netplan try`. El comando `netplan try` aplica la configuracion de red temporalmente y espera la confirmacion del usuario. Si el usuario no confirma dentro del tiempo establecido (por defecto 120 segundos), la configuracion se revierte automaticamente a la anterior. Esto es muy util para evitar perder la conectividad al hacer cambios remotos. `netplan apply` aplica los cambios permanentemente. `netplan generate` solo genera la configuracion sin aplicarla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-017">
<div class="flashcard-front">

**P:** Que archivo de configuracion global de red en RHEL/CentOS contiene la directiva `NETWORKING=yes`?

</div>
<div class="flashcard-back">

**R:** b) `/etc/sysconfig/network`. El archivo `/etc/sysconfig/network` es el archivo de configuracion global de red en sistemas RHEL/CentOS. Contiene directivas como `NETWORKING=yes` (habilitar red), `HOSTNAME` (nombre del host), `GATEWAY` (gateway por defecto) y `NOZEROCONF` (deshabilitar IPs link-local). Los archivos de configuracion por interfaz estan en `/etc/sysconfig/network-scripts/` con el prefijo `ifcfg-`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-018">
<div class="flashcard-front">

**P:** Que tipo de hostname en systemd se almacena en el archivo `/etc/hostname`?

</div>
<div class="flashcard-back">

**R:** c) static. El hostname de tipo `static` es el nombre persistente del sistema y se almacena en `/etc/hostname`. Los tres tipos de hostname en systemd son: `static` (persistente, almacenado en disco), `transient` (temporal, asignado por DHCP o mDNS) y `pretty` (descriptivo, puede contener caracteres especiales como espacios). Se gestionan con `hostnamectl`, por ejemplo: `hostnamectl set-hostname "Mi Servidor" --pretty` para el hostname descriptivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-019">
<div class="flashcard-front">

**P:** Que comando muestra la tabla ARP (vecinos) usando la herramienta moderna iproute2?

</div>
<div class="flashcard-back">

**R:** c) `ip neigh show`. El comando `ip neigh show` (o abreviado `ip neigh` o `ip n`) muestra la tabla de vecinos (ARP) del sistema usando iproute2. Es el reemplazo moderno del comando `arp -a` del paquete net-tools (deprecado). La tabla ARP mapea direcciones IP a direcciones MAC en la red local. Otras equivalencias de iproute2: `ifconfig` -> `ip addr`/`ip link`, `route` -> `ip route`, `netstat` -> `ss`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-020">
<div class="flashcard-front">

**P:** En un archivo de systemd-networkd, que seccion se usa para identificar a que interfaz de red se aplica la configuracion?

</div>
<div class="flashcard-back">

**R:** c) `[Match]`. En los archivos `.network` de systemd-networkd ubicados en `/etc/systemd/network/`, la seccion `[Match]` se utiliza para identificar a que interfaz se aplica la configuracion, usando directivas como `Name=eth0`. La seccion `[Network]` contiene la configuracion de red propiamente dicha (Address, Gateway, DNS, DHCP). El servicio se gestiona con `systemctl` y el estado se verifica con `networkctl status`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-021">
<div class="flashcard-front">

**P:** Que comando muestra el FQDN (nombre de dominio completo) del host actual?

</div>
<div class="flashcard-back">

**R:** hostname -f. El comando `hostname -f` muestra el FQDN (Fully Qualified Domain Name) del sistema, que incluye el nombre del host y el dominio completo (por ejemplo, `servidor.empresa.com`). `hostname` sin opciones muestra solo el nombre corto del host. `hostname -i` muestra la direccion IP asociada al hostname. `hostname -I` muestra todas las direcciones IP del host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-022">
<div class="flashcard-front">

**P:** Que comando agrega una ruta por defecto usando el gateway 192.168.1.1 con iproute2?

</div>
<div class="flashcard-back">

**R:** ip route add default via 192.168.1.1. El comando `ip route add default via 192.168.1.1` agrega la ruta por defecto (gateway) usando iproute2. Es el equivalente moderno de `route add default gw 192.168.1.1`. Esta configuracion es temporal y se pierde al reiniciar. Para hacerla persistente se deben usar archivos de configuracion de la distribucion correspondiente. `ip route show` (o `ip r`) muestra la tabla de rutas actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-023">
<div class="flashcard-front">

**P:** Que comando desactiva la interfaz de red eth0 usando iproute2?

</div>
<div class="flashcard-back">

**R:** ip link set eth0 down. El comando `ip link set eth0 down` desactiva la interfaz de red eth0 a nivel de enlace. Para activarla se usa `ip link set eth0 up`. Estos son los equivalentes modernos de `ifconfig eth0 down` e `ifconfig eth0 up` del paquete net-tools. Para ver el estado de las interfaces se usa `ip link show` y para ver estadisticas `ip -s link show eth0`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-024">
<div class="flashcard-front">

**P:** Que comando de NetworkManager activa una conexion de red llamada "mi-red"?

</div>
<div class="flashcard-back">

**R:** nmcli connection up mi-red. El comando `nmcli connection up mi-red` activa la conexion de red llamada "mi-red" en NetworkManager. Para desactivarla se usa `nmcli connection down mi-red`. Para ver las conexiones disponibles: `nmcli connection show`. Para eliminar una conexion: `nmcli connection delete mi-red`. `nmcli` es la herramienta de linea de comandos de NetworkManager, mientras que `nmtui` proporciona una interfaz de texto interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-025">
<div class="flashcard-front">

**P:** En que archivo se define la configuracion de red de la interfaz eth0 en Debian clasico?

</div>
<div class="flashcard-back">

**R:** /etc/network/interfaces. En Debian clasico (y Ubuntu antiguo), la configuracion de red se define en `/etc/network/interfaces`. Este archivo contiene la configuracion de todas las interfaces del sistema, usando directivas como `auto` (activar al arrancar), `iface` (configuracion de interfaz), `address`, `netmask`, `gateway` y `dns-nameservers`. Las interfaces se gestionan con `ifup` (activar) e `ifdown` (desactivar).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `nameserver`?

</div>
<div class="flashcard-back">

**R:** IP del servidor DNS (maximo 3)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `search`?

</div>
<div class="flashcard-back">

**R:** Lista de dominios para busqueda (se agrega automaticamente)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `options`?

</div>
<div class="flashcard-back">

**R:** Opciones adicionales (timeout, intentos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `NETWORKING`?

</div>
<div class="flashcard-back">

**R:** Habilitar/deshabilitar la red (yes/no)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `GATEWAY`?

</div>
<div class="flashcard-back">

**R:** Gateway predeterminado del sistema

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son `/etc/hosts`?

</div>
<div class="flashcard-back">

**R:** Archivo de resolucion estatica de nombres. Se consulta **antes** que DNS (segun `/etc/nsswitch.conf`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son `/etc/nsswitch.conf`?

</div>
<div class="flashcard-back">

**R:** Define el **orden de busqueda** para distintas bases de datos del sistema, incluyendo la resolucion de nombres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son `/etc/resolv.conf`?

</div>
<div class="flashcard-back">

**R:** Configuracion de los servidores DNS del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Comando `ip` (iproute2)?

</div>
<div class="flashcard-back">

**R:** Herramienta moderna para configuracion de red. Reemplaza a `ifconfig`, `route`, `arp`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **`/etc/hostname`** contiene el hostname estatico; **`hostnamectl`** lo gestiona en systemd

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.2">
</div>

<div class="flashcard" data-id="109.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

