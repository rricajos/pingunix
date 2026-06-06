---
title: "109.2 Configuracion persistente de red - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-109
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "109"
subtema: "109.2"
---

# 109.2 Configuracion persistente de red - Ejercicios

### Pregunta 1

Cual de los siguientes comandos es el reemplazo moderno (iproute2) de `ifconfig`?

a) `ip config`
b) `ip addr`
c) `netctl`
d) `ifup`

<details><summary>Respuesta</summary>

**b) `ip addr`**

El comando `ip addr` (o `ip addr show`) del paquete iproute2 es el reemplazo moderno de `ifconfig` para mostrar y configurar direcciones IP en interfaces de red. Otras equivalencias son: `route` -> `ip route`, `arp` -> `ip neigh`, `ifconfig` -> `ip link show` / `ip addr show`. El paquete `net-tools` (que incluye ifconfig, route, arp) esta deprecado.

</details>

---

### Pregunta 2

Que significa la linea `hosts: files dns myhostname` en `/etc/nsswitch.conf`?

a) Solo se pueden resolver nombres mediante DNS y archivos locales
b) Primero se busca en `/etc/hosts`, luego en DNS y finalmente se resuelve el hostname local
c) Se consulta DNS primero y si no responde se busca en archivos locales
d) Se utilizan los tres metodos simultaneamente y se devuelve el primer resultado

<details><summary>Respuesta</summary>

**b) Primero se busca en `/etc/hosts`, luego en DNS y finalmente se resuelve el hostname local**

La linea `hosts: files dns myhostname` en `/etc/nsswitch.conf` define el orden de busqueda para resolver nombres de host: 1) `files` busca primero en `/etc/hosts`, 2) `dns` consulta los servidores DNS definidos en `/etc/resolv.conf`, 3) `myhostname` resuelve el nombre del propio host como ultimo recurso. Esto significa que las entradas en `/etc/hosts` tienen prioridad sobre las respuestas DNS.

</details>

---

### Pregunta 3

Cuantos servidores DNS se pueden definir como maximo en `/etc/resolv.conf`?

a) 1
b) 2
c) 3
d) Ilimitados

<details><summary>Respuesta</summary>

**c) 3**

El archivo `/etc/resolv.conf` permite definir un maximo de 3 directivas `nameserver`, cada una con la IP de un servidor DNS. Si se necesitan mas, solo se usaran los 3 primeros. Las directivas `domain` y `search` son mutuamente excluyentes; si ambas estan presentes, se usa la ultima definida en el archivo.

</details>

---

### Pregunta 4

Un administrador configura una IP estatica con `ip addr add 192.168.1.50/24 dev eth0`. Que ocurre con esta configuracion al reiniciar el sistema?

a) Se mantiene porque el comando `ip` guarda la configuracion automaticamente
b) Se pierde porque las configuraciones con `ip` son temporales
c) Se mantiene si se ejecuto como root
d) Se mantiene solo si el servicio NetworkManager esta activo

<details><summary>Respuesta</summary>

**b) Se pierde porque las configuraciones con `ip` son temporales**

Las configuraciones realizadas con el comando `ip` (iproute2) e `ifconfig` (net-tools) son temporales y se pierden al reiniciar el sistema. Para hacer la configuracion persistente se deben usar los archivos de configuracion de la distribucion: `/etc/network/interfaces` (Debian clasico), archivos en `/etc/sysconfig/network-scripts/` (RHEL), archivos `.network` en `/etc/systemd/network/` (systemd-networkd), `nmcli` (NetworkManager) o archivos YAML en `/etc/netplan/` (Ubuntu moderno).

</details>

---

### Pregunta 5

Como se crea una conexion de red con IP estatica usando `nmcli` de NetworkManager?

a) `nmcli device add ethernet ip4 192.168.1.100/24`
b) `nmcli connection add type ethernet con-name mi-red ifname eth0 ip4 192.168.1.100/24 gw4 192.168.1.1`
c) `nmcli set eth0 address 192.168.1.100/24 gateway 192.168.1.1`
d) `nmcli interface configure eth0 static 192.168.1.100/24`

<details><summary>Respuesta</summary>

**b) `nmcli connection add type ethernet con-name mi-red ifname eth0 ip4 192.168.1.100/24 gw4 192.168.1.1`**

La sintaxis correcta de `nmcli` para crear una conexion estatica incluye: `connection add` (accion), `type ethernet` (tipo de conexion), `con-name` (nombre de la conexion), `ifname` (interfaz de red), `ip4` (direccion IP con mascara) y `gw4` (gateway). Despues se puede configurar DNS con `nmcli connection modify mi-red ipv4.dns "8.8.8.8"` y activar con `nmcli connection up mi-red`.

</details>

---

### Pregunta 6

Cual es el archivo de configuracion de red por interfaz en sistemas RHEL/CentOS?

a) `/etc/network/interfaces`
b) `/etc/sysconfig/network-scripts/ifcfg-eth0`
c) `/etc/systemd/network/eth0.network`
d) `/etc/netplan/01-netcfg.yaml`

<details><summary>Respuesta</summary>

**b) `/etc/sysconfig/network-scripts/ifcfg-eth0`**

En sistemas RHEL/CentOS, la configuracion de red por interfaz se realiza en archivos con formato `ifcfg-nombre` dentro del directorio `/etc/sysconfig/network-scripts/`. Estos archivos contienen directivas como `BOOTPROTO`, `IPADDR`, `NETMASK`, `GATEWAY`, `DNS1`, `ONBOOT`, etc. La opcion A corresponde a Debian clasico, la C a systemd-networkd y la D a Netplan (Ubuntu moderno).

</details>

---

### Pregunta 7

Como se configura systemd-networkd para que la interfaz eth0 obtenga su IP por DHCP?

a) Creando `/etc/systemd/network/eth0.conf` con `DHCP=yes`
b) Ejecutando `networkctl dhcp eth0`
c) Creando un archivo `.network` en `/etc/systemd/network/` con secciones `[Match]` y `[Network]` con `DHCP=yes`
d) Editando `/etc/systemd/networkd.conf` y agregando `Interface=eth0 DHCP=yes`

<details><summary>Respuesta</summary>

**c) Creando un archivo `.network` en `/etc/systemd/network/` con secciones `[Match]` y `[Network]` con `DHCP=yes`**

systemd-networkd usa archivos con extension `.network` en `/etc/systemd/network/`. El archivo debe contener al menos una seccion `[Match]` con `Name=eth0` para identificar la interfaz, y una seccion `[Network]` con `DHCP=yes` para habilitar DHCP. Despues se activa con `systemctl enable systemd-networkd && systemctl start systemd-networkd`. El estado se verifica con `networkctl status eth0`.

</details>

---

### Pregunta 8

Cual es el equivalente moderno de `route -n` para mostrar la tabla de rutas?

a) `ip route show`
b) `netstat -r`
c) `routectl list`
d) `networkctl routes`

<details><summary>Respuesta</summary>

**a) `ip route show`**

El comando `ip route show` (o abreviado `ip r`) es el reemplazo moderno de `route -n` para mostrar la tabla de rutas del sistema. `netstat -r` es otra forma legacy de ver la tabla de rutas (equivalente a `route -n`) pero tambien esta deprecada. Para agregar una ruta por defecto se usa `ip route add default via 192.168.1.1`. Los comandos `routectl` y `networkctl routes` no existen.

</details>

---

### Pregunta 9

Que comando de Netplan aplica los cambios de configuracion de red en Ubuntu moderno?

a) `netplan generate`
b) `netplan apply`
c) `netplan reload`
d) `netplan commit`

<details><summary>Respuesta</summary>

**b) `netplan apply`**

El comando `netplan apply` lee los archivos YAML de configuracion en `/etc/netplan/`, genera la configuracion del backend (NetworkManager o systemd-networkd) y la aplica inmediatamente. `netplan generate` solo genera la configuracion sin aplicarla. `netplan try` aplica la configuracion temporalmente y la revierte si no se confirma (util para evitar perder conectividad). Los comandos `netplan reload` y `netplan commit` no existen.

</details>

---

### Pregunta 10

Que comando se utiliza para establecer el hostname de forma persistente en un sistema con systemd?

a) `hostname mi-servidor`
b) `echo "mi-servidor" > /etc/hostname && reboot`
c) `hostnamectl set-hostname mi-servidor`
d) `sysctl hostname=mi-servidor`

<details><summary>Respuesta</summary>

**c) `hostnamectl set-hostname mi-servidor`**

`hostnamectl set-hostname` establece el hostname de forma persistente en sistemas con systemd, actualizando el archivo `/etc/hostname`. La opcion A (`hostname mi-servidor`) solo cambia el hostname temporalmente y se pierde al reiniciar. La opcion B funciona pero requiere un reinicio innecesario. `hostnamectl` tambien permite establecer un hostname descriptivo con `--pretty`. Los tipos de hostname son: static (persistente), transient (temporal) y pretty (descriptivo).

</details>

---

### Pregunta 11

Que directiva en `/etc/resolv.conf` especifica los dominios que se agregan automaticamente a nombres cortos al resolver DNS?

a) `nameserver`
b) `domain`
c) `search`
d) `options`

<details><summary>Respuesta</summary>

**c) `search`**

La directiva `search` en `/etc/resolv.conf` define una lista de dominios que se agregan automaticamente a nombres cortos (sin punto final). Por ejemplo, con `search empresa.com red.local`, al buscar `servidor` se intentara resolver `servidor.empresa.com`, luego `servidor.red.local`. La directiva `domain` tiene una funcion similar pero solo permite un dominio. Ambas son mutuamente excluyentes; si se definen las dos, se usa la ultima.

</details>

---

### Pregunta 12

En que directorio se ubican los archivos de configuracion de Netplan en Ubuntu moderno?

a) `/etc/network/`
b) `/etc/NetworkManager/`
c) `/etc/netplan/`
d) `/etc/systemd/network/`

<details><summary>Respuesta</summary>

**c) `/etc/netplan/`**

Los archivos de configuracion de Netplan se ubican en `/etc/netplan/` con extension `.yaml`. Netplan es el sistema de configuracion de red utilizado en Ubuntu 17.10 en adelante. Los archivos YAML describen la configuracion deseada y Netplan genera la configuracion para el backend correspondiente (NetworkManager o systemd-networkd). Se aplican los cambios con `netplan apply` y se pueden probar de forma segura con `netplan try`.

</details>

---

### Pregunta 13

Que comando de `nmcli` muestra el estado de todos los dispositivos de red gestionados por NetworkManager?

a) `nmcli general status`
b) `nmcli device status`
c) `nmcli connection list`
d) `nmcli network show`

<details><summary>Respuesta</summary>

**b) `nmcli device status`**

El comando `nmcli device status` muestra el estado de todos los dispositivos de red (interfaces) gestionados por NetworkManager, incluyendo el tipo, estado y conexion activa de cada uno. `nmcli general status` muestra el estado general de NetworkManager. `nmcli connection show` lista las conexiones configuradas (perfiles de red). `nmcli` es la herramienta de linea de comandos de NetworkManager; `nmtui` es la version con interfaz de texto.

</details>

---

### Pregunta 14

Que comando se usa en sistemas Debian clasicos para activar una interfaz de red configurada en `/etc/network/interfaces`?

a) `ip link set eth0 up`
b) `ifup eth0`
c) `nmcli device connect eth0`
d) `networkctl up eth0`

<details><summary>Respuesta</summary>

**b) `ifup eth0`**

En sistemas Debian clasicos que usan `/etc/network/interfaces`, el comando `ifup` activa una interfaz de red leyendo su configuracion del archivo. Su contraparte `ifdown` desactiva la interfaz. La opcion A (`ip link set eth0 up`) activa la interfaz a nivel de enlace pero no aplica la configuracion del archivo interfaces. `nmcli` corresponde a NetworkManager y `networkctl` a systemd-networkd.

</details>

---

### Pregunta 15

En un archivo de configuracion de interfaz de RHEL (`ifcfg-eth0`), que directiva determina si la interfaz se activa automaticamente al arrancar el sistema?

a) `BOOTPROTO`
b) `AUTOSTART`
c) `ONBOOT`
d) `ACTIVATE`

<details><summary>Respuesta</summary>

**c) `ONBOOT`**

La directiva `ONBOOT=yes` en los archivos `ifcfg-*` de `/etc/sysconfig/network-scripts/` indica que la interfaz debe activarse automaticamente al arrancar el sistema. Con `ONBOOT=no`, la interfaz no se activa en el arranque. `BOOTPROTO` define el metodo de obtencion de IP (static, dhcp, none). `AUTOSTART` y `ACTIVATE` no son directivas validas en estos archivos de configuracion.

</details>

---

### Pregunta 16

Que comando de Netplan permite probar la configuracion de red y revertirla automaticamente si no se confirma?

a) `netplan apply`
b) `netplan generate`
c) `netplan try`
d) `netplan test`

<details><summary>Respuesta</summary>

**c) `netplan try`**

El comando `netplan try` aplica la configuracion de red temporalmente y espera la confirmacion del usuario. Si el usuario no confirma dentro del tiempo establecido (por defecto 120 segundos), la configuracion se revierte automaticamente a la anterior. Esto es muy util para evitar perder la conectividad al hacer cambios remotos. `netplan apply` aplica los cambios permanentemente. `netplan generate` solo genera la configuracion sin aplicarla.

</details>

---

### Pregunta 17

Que archivo de configuracion global de red en RHEL/CentOS contiene la directiva `NETWORKING=yes`?

a) `/etc/sysconfig/network-scripts/ifcfg-eth0`
b) `/etc/sysconfig/network`
c) `/etc/network/interfaces`
d) `/etc/NetworkManager/NetworkManager.conf`

<details><summary>Respuesta</summary>

**b) `/etc/sysconfig/network`**

El archivo `/etc/sysconfig/network` es el archivo de configuracion global de red en sistemas RHEL/CentOS. Contiene directivas como `NETWORKING=yes` (habilitar red), `HOSTNAME` (nombre del host), `GATEWAY` (gateway por defecto) y `NOZEROCONF` (deshabilitar IPs link-local). Los archivos de configuracion por interfaz estan en `/etc/sysconfig/network-scripts/` con el prefijo `ifcfg-`.

</details>

---

### Pregunta 18

Que tipo de hostname en systemd se almacena en el archivo `/etc/hostname`?

a) transient
b) pretty
c) static
d) dynamic

<details><summary>Respuesta</summary>

**c) static**

El hostname de tipo `static` es el nombre persistente del sistema y se almacena en `/etc/hostname`. Los tres tipos de hostname en systemd son: `static` (persistente, almacenado en disco), `transient` (temporal, asignado por DHCP o mDNS) y `pretty` (descriptivo, puede contener caracteres especiales como espacios). Se gestionan con `hostnamectl`, por ejemplo: `hostnamectl set-hostname "Mi Servidor" --pretty` para el hostname descriptivo.

</details>

---

### Pregunta 19

Que comando muestra la tabla ARP (vecinos) usando la herramienta moderna iproute2?

a) `arp -a`
b) `ip arp show`
c) `ip neigh show`
d) `netstat -arp`

<details><summary>Respuesta</summary>

**c) `ip neigh show`**

El comando `ip neigh show` (o abreviado `ip neigh` o `ip n`) muestra la tabla de vecinos (ARP) del sistema usando iproute2. Es el reemplazo moderno del comando `arp -a` del paquete net-tools (deprecado). La tabla ARP mapea direcciones IP a direcciones MAC en la red local. Otras equivalencias de iproute2: `ifconfig` -> `ip addr`/`ip link`, `route` -> `ip route`, `netstat` -> `ss`.

</details>

---

### Pregunta 20

En un archivo de systemd-networkd, que seccion se usa para identificar a que interfaz de red se aplica la configuracion?

a) `[Network]`
b) `[Interface]`
c) `[Match]`
d) `[Device]`

<details><summary>Respuesta</summary>

**c) `[Match]`**

En los archivos `.network` de systemd-networkd ubicados en `/etc/systemd/network/`, la seccion `[Match]` se utiliza para identificar a que interfaz se aplica la configuracion, usando directivas como `Name=eth0`. La seccion `[Network]` contiene la configuracion de red propiamente dicha (Address, Gateway, DNS, DHCP). El servicio se gestiona con `systemctl` y el estado se verifica con `networkctl status`.

</details>

---

### Pregunta 21

Que comando muestra el FQDN (nombre de dominio completo) del host actual?

<input type="text" class="fill-blank" data-answer="hostname -f" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**hostname -f**

El comando `hostname -f` muestra el FQDN (Fully Qualified Domain Name) del sistema, que incluye el nombre del host y el dominio completo (por ejemplo, `servidor.empresa.com`). `hostname` sin opciones muestra solo el nombre corto del host. `hostname -i` muestra la direccion IP asociada al hostname. `hostname -I` muestra todas las direcciones IP del host.

</details>

---

### Pregunta 22

Que comando agrega una ruta por defecto usando el gateway 192.168.1.1 con iproute2?

<input type="text" class="fill-blank" data-answer="ip route add default via 192.168.1.1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip route add default via 192.168.1.1**

El comando `ip route add default via 192.168.1.1` agrega la ruta por defecto (gateway) usando iproute2. Es el equivalente moderno de `route add default gw 192.168.1.1`. Esta configuracion es temporal y se pierde al reiniciar. Para hacerla persistente se deben usar archivos de configuracion de la distribucion correspondiente. `ip route show` (o `ip r`) muestra la tabla de rutas actual.

</details>

---

### Pregunta 23

Que comando desactiva la interfaz de red eth0 usando iproute2?

<input type="text" class="fill-blank" data-answer="ip link set eth0 down" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip link set eth0 down**

El comando `ip link set eth0 down` desactiva la interfaz de red eth0 a nivel de enlace. Para activarla se usa `ip link set eth0 up`. Estos son los equivalentes modernos de `ifconfig eth0 down` e `ifconfig eth0 up` del paquete net-tools. Para ver el estado de las interfaces se usa `ip link show` y para ver estadisticas `ip -s link show eth0`.

</details>

---

### Pregunta 24

Que comando de NetworkManager activa una conexion de red llamada "mi-red"?

<input type="text" class="fill-blank" data-answer="nmcli connection up mi-red" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nmcli connection up mi-red**

El comando `nmcli connection up mi-red` activa la conexion de red llamada "mi-red" en NetworkManager. Para desactivarla se usa `nmcli connection down mi-red`. Para ver las conexiones disponibles: `nmcli connection show`. Para eliminar una conexion: `nmcli connection delete mi-red`. `nmcli` es la herramienta de linea de comandos de NetworkManager, mientras que `nmtui` proporciona una interfaz de texto interactiva.

</details>

---

### Pregunta 25

En que archivo se define la configuracion de red de la interfaz eth0 en Debian clasico?

<input type="text" class="fill-blank" data-answer="/etc/network/interfaces" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/etc/network/interfaces**

En Debian clasico (y Ubuntu antiguo), la configuracion de red se define en `/etc/network/interfaces`. Este archivo contiene la configuracion de todas las interfaces del sistema, usando directivas como `auto` (activar al arrancar), `iface` (configuracion de interfaz), `address`, `netmask`, `gateway` y `dns-nameservers`. Las interfaces se gestionan con `ifup` (activar) e `ifdown` (desactivar).

</details>
