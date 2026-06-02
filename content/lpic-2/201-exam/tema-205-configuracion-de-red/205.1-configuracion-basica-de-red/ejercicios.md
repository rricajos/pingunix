---
title: "205.1 - Configuracion basica de red"
tags: [lpic-2, examen-201, tema-205, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "205"
subtema: "205.1"
---

# 205.1 - Ejercicios: Configuracion basica de red

### Pregunta 1
Que comando moderno reemplaza a `ifconfig` para mostrar las direcciones IP de todas las interfaces?

a) `ip config show`
b) `ip addr show`
c) `ip interface list`
d) `netstat -i`

<details>
<summary>Respuesta</summary>

**b) `ip addr show`**

El comando `ip addr show` (o su forma abreviada `ip a`) del paquete iproute2 es el reemplazo moderno de `ifconfig`. Muestra todas las interfaces de red con sus direcciones IP, mascaras de red, direcciones MAC y otros atributos. `ifconfig` esta deprecado y puede no estar instalado por defecto en distribuciones modernas.
</details>

---

### Pregunta 2
En un archivo `/etc/sysconfig/network-scripts/ifcfg-eth0` de RHEL, que valor debe tener `BOOTPROTO` para configurar una IP estatica?

a) `static`
b) `manual`
c) `none`
d) `fixed`

<details>
<summary>Respuesta</summary>

**c) `none`**

En los archivos ifcfg de RHEL/CentOS, `BOOTPROTO=none` indica que no se usa ningun protocolo automatico de asignacion, lo que equivale a una configuracion estatica. Los valores validos son `none` (estatica), `dhcp` (cliente DHCP) y `bootp` (protocolo BOOTP). No se usa `static` como valor, a pesar de ser intuitivo.
</details>

---

### Pregunta 3
Que comando establece el hostname de forma persistente en un sistema con systemd?

a) `hostname servidor01`
b) `echo "servidor01" > /etc/hostname`
c) `hostnamectl set-hostname servidor01`
d) `sysctl hostname=servidor01`

<details>
<summary>Respuesta</summary>

**c) `hostnamectl set-hostname servidor01`**

El comando `hostnamectl set-hostname` es la forma recomendada de establecer el hostname en sistemas con systemd. Modifica automaticamente `/etc/hostname` y actualiza el hostname activo en el kernel. La opcion b) modifica el archivo pero no aplica el cambio inmediatamente. La opcion a) solo cambia el hostname de forma transitoria (hasta el reinicio).
</details>

---

### Pregunta 4
Cual es el numero maximo de directivas `nameserver` que se pueden definir en `/etc/resolv.conf`?

a) 1
b) 2
c) 3
d) Sin limite

<details>
<summary>Respuesta</summary>

**c) 3**

El archivo `/etc/resolv.conf` admite un maximo de 3 directivas `nameserver`. Si se especifican mas, las adicionales son ignoradas por el resolver. Los servidores DNS se consultan en orden: si el primero no responde dentro del timeout, se intenta con el segundo, y luego con el tercero.
</details>

---

### Pregunta 5
Que comando de nmcli crea una nueva conexion Ethernet con IP estatica en la interfaz eth0?

a) `nmcli device add eth0 ipv4.addresses 192.168.1.100/24`
b) `nmcli connection add type ethernet con-name red1 ifname eth0 ipv4.addresses 192.168.1.100/24 ipv4.method manual`
c) `nmcli interface create eth0 ip 192.168.1.100/24`
d) `nmcli network add static eth0 192.168.1.100/24`

<details>
<summary>Respuesta</summary>

**b) `nmcli connection add type ethernet con-name red1 ifname eth0 ipv4.addresses 192.168.1.100/24 ipv4.method manual`**

El comando `nmcli connection add` crea una nueva conexion. Se necesita: `type ethernet` (tipo de conexion), `con-name` (nombre de la conexion), `ifname` (interfaz fisica), `ipv4.addresses` (IP con prefijo) y `ipv4.method manual` (para indicar configuracion estatica en lugar de DHCP).
</details>

---

### Pregunta 6
En que directorio se almacenan los archivos de configuracion de red de systemd-networkd?

a) `/etc/networkd/`
b) `/etc/systemd/network/`
c) `/etc/network/systemd/`
d) `/lib/systemd/network-config/`

<details>
<summary>Respuesta</summary>

**b) `/etc/systemd/network/`**

Los archivos de configuracion de systemd-networkd se encuentran en `/etc/systemd/network/`. Utilizan la extension `.network` para configuracion de redes, `.netdev` para dispositivos virtuales y `.link` para propiedades de enlaces. Los archivos se procesan en orden alfanumerico, por lo que es comun usar prefijos numericos (como `20-wired.network`).
</details>

---

### Pregunta 7
Que modo de bonding proporciona failover activo-pasivo sin requerir configuracion especial en el switch?

a) mode=0 (balance-rr)
b) mode=1 (active-backup)
c) mode=4 (802.3ad)
d) mode=3 (broadcast)

<details>
<summary>Respuesta</summary>

**b) mode=1 (active-backup)**

El modo 1 (active-backup) mantiene solo una interfaz activa a la vez. Si la interfaz activa falla, otra esclava toma el control automaticamente. No requiere ninguna configuracion especial en el switch de red, lo que lo hace el modo mas sencillo de implementar. El modo 4 (802.3ad/LACP) requiere soporte del switch para agregacion de enlaces.
</details>

---

### Pregunta 8
Que archivo determina el orden en que se consultan las fuentes de resolucion de nombres (como `/etc/hosts` y DNS)?

a) `/etc/resolv.conf`
b) `/etc/host.conf`
c) `/etc/nsswitch.conf`
d) `/etc/dns.conf`

<details>
<summary>Respuesta</summary>

**c) `/etc/nsswitch.conf`**

El archivo `/etc/nsswitch.conf` (Name Service Switch) controla el orden de busqueda para varios servicios del sistema, incluyendo la resolucion de nombres de host. La linea `hosts: files dns` indica que primero se consulta `/etc/hosts` (files) y luego los servidores DNS. `/etc/resolv.conf` solo define los servidores DNS, no el orden de consulta.
</details>

---

### Pregunta 9
Un administrador ejecuta `ip route add 10.0.0.0/8 via 192.168.1.254`. Que efecto tiene este comando?

a) Cambia la puerta de enlace predeterminada a 192.168.1.254
b) Agrega una ruta para alcanzar la red 10.0.0.0/8 a traves del gateway 192.168.1.254
c) Crea un tunel hacia la red 10.0.0.0/8
d) Asigna la direccion 10.0.0.0 a la interfaz con IP 192.168.1.254

<details>
<summary>Respuesta</summary>

**b) Agrega una ruta para alcanzar la red 10.0.0.0/8 a traves del gateway 192.168.1.254**

El comando agrega una ruta estatica a la tabla de enrutamiento, indicando que todo el trafico destinado a la red 10.0.0.0/8 (direcciones 10.x.x.x) debe enviarse al router 192.168.1.254. Esta ruta es temporal (se pierde al reiniciar) a menos que se persista en los archivos de configuracion de red.
</details>

---

### Pregunta 10
Que seccion del archivo de configuracion de systemd-networkd define a que interfaz se aplica la configuracion?

a) `[Interface]`
b) `[Match]`
c) `[Device]`
d) `[Link]`

<details>
<summary>Respuesta</summary>

**b) `[Match]`**

En los archivos `.network` de systemd-networkd, la seccion `[Match]` determina a que interfaces se aplica la configuracion, usando criterios como `Name=eth0`, `MACAddress=`, `Type=`, etc. La seccion `[Network]` contiene la configuracion de red propiamente dicha (IP, gateway, DNS). Si no hay seccion `[Match]`, la configuracion se aplica a todas las interfaces.
</details>

---

### Pregunta 11

Que comando elimina todas las direcciones IP asignadas a la interfaz eth0?

a) `ip addr delete all dev eth0`
b) `ip addr flush dev eth0`
c) `ifconfig eth0 0.0.0.0`
d) `ip addr clear eth0`

<details>
<summary>Respuesta</summary>

**b) `ip addr flush dev eth0`**

El comando `ip addr flush dev eth0` elimina todas las direcciones IP (tanto IPv4 como IPv6 no link-local) asignadas a la interfaz eth0. Es util cuando se quiere reconfigurar completamente una interfaz. A diferencia de `ip addr del`, que elimina una direccion especifica, `flush` las elimina todas de una vez.
</details>

---

### Pregunta 12

En el archivo `/etc/network/interfaces` de Debian, que directiva indica que una interfaz debe activarse automaticamente al arrancar el sistema?

a) `allow-hotplug eth0`
b) `auto eth0`
c) `enable eth0`
d) `startup eth0`

<details>
<summary>Respuesta</summary>

**b) `auto eth0`**

La directiva `auto` en `/etc/network/interfaces` indica que la interfaz debe activarse automaticamente durante el arranque del sistema. `allow-hotplug` tambien existe y activa la interfaz cuando se detecta un evento hotplug del kernel, pero `auto` es la directiva clasica para activacion al arrancar. `enable` y `startup` no son directivas validas.
</details>

---

### Pregunta 13

Que comando muestra las estadisticas de trafico (bytes y paquetes transmitidos/recibidos) de una interfaz de red?

a) `ip addr show eth0`
b) `ip -s link show eth0`
c) `ip route show dev eth0`
d) `ip neigh show dev eth0`

<details>
<summary>Respuesta</summary>

**b) `ip -s link show eth0`**

La opcion `-s` (statistics) junto con `ip link show` muestra estadisticas detalladas de la interfaz, incluyendo bytes y paquetes recibidos/transmitidos, errores, paquetes descartados y colisiones. `ip addr show` muestra direcciones IP pero no estadisticas de trafico. `ip route show` muestra rutas y `ip neigh show` muestra la tabla ARP.
</details>

---

### Pregunta 14

Que parametro del archivo `ifcfg-eth0` en RHEL indica que la interfaz debe activarse automaticamente al iniciar el sistema?

a) `AUTOSTART=yes`
b) `ONBOOT=yes`
c) `ACTIVATE=yes`
d) `STARTUP=yes`

<details>
<summary>Respuesta</summary>

**b) `ONBOOT=yes`**

En los archivos `ifcfg-*` de RHEL/CentOS ubicados en `/etc/sysconfig/network-scripts/`, el parametro `ONBOOT=yes` indica que la interfaz debe activarse automaticamente durante el arranque del sistema. Si se establece `ONBOOT=no`, la interfaz debera activarse manualmente.
</details>

---

### Pregunta 15

Un administrador necesita cambiar la MTU de la interfaz eth0 a 9000 (jumbo frames). Que comando debe usar?

a) `ip link set eth0 mtu 9000`
b) `ifconfig eth0 mtu-size 9000`
c) `ip addr set eth0 mtu 9000`
d) `nmcli device mtu eth0 9000`

<details>
<summary>Respuesta</summary>

**a) `ip link set eth0 mtu 9000`**

El comando `ip link set eth0 mtu 9000` modifica la MTU (Maximum Transmission Unit) de la interfaz eth0 a 9000 bytes. La MTU se configura a nivel de enlace (`ip link`), no a nivel de direccion (`ip addr`). Los jumbo frames (MTU 9000) se usan en redes de alto rendimiento como almacenamiento iSCSI o clusters de computacion.
</details>

---

### Pregunta 16

Que directiva en `/etc/resolv.conf` define una lista de dominios que se anaden automaticamente a nombres no cualificados?

a) `nameserver`
b) `domain`
c) `search`
d) `options`

<details>
<summary>Respuesta</summary>

**c) `search`**

La directiva `search` define una lista de dominios (maximo 6) que se anaden automaticamente a nombres de host no cualificados (sin punto final). Por ejemplo, con `search empresa.com dev.empresa.com`, al buscar el host "servidor", el resolver probara primero `servidor.empresa.com` y luego `servidor.dev.empresa.com`. La directiva `domain` es similar pero solo acepta un unico dominio.
</details>

---

### Pregunta 17

Que modo de bonding requiere que el switch soporte el protocolo LACP (Link Aggregation Control Protocol)?

a) mode=0 (balance-rr)
b) mode=1 (active-backup)
c) mode=4 (802.3ad)
d) mode=6 (balance-alb)

<details>
<summary>Respuesta</summary>

**c) mode=4 (802.3ad)**

El modo 4 (802.3ad) implementa el estandar IEEE 802.3ad, que requiere que tanto el servidor como el switch soporten LACP para negociar la agregacion de enlaces. Los modos 1 (active-backup) y 6 (balance-alb) no requieren configuracion especial del switch. El modo 0 (balance-rr) puede requerir configuracion del switch pero no especificamente LACP.
</details>

---

### Pregunta 18

Que tipo de hostname configurado con `hostnamectl` se almacena en `/etc/hostname` y persiste entre reinicios?

a) Transient
b) Pretty
c) Static
d) Dynamic

<details>
<summary>Respuesta</summary>

**c) Static**

El hostname estatico (static) es el nombre almacenado en el archivo `/etc/hostname` y persiste entre reinicios. El hostname transitorio (transient) es asignado dinamicamente por DHCP o el kernel y se pierde al reiniciar. El hostname descriptivo (pretty) es un nombre libre que puede contener espacios y caracteres especiales, y tambien se almacena de forma persistente.
</details>

---

### Pregunta 19

Que comando de nmcli muestra el estado de todos los dispositivos de red disponibles en el sistema?

a) `nmcli connection show`
b) `nmcli device status`
c) `nmcli general status`
d) `nmcli networking show`

<details>
<summary>Respuesta</summary>

**b) `nmcli device status`**

El comando `nmcli device status` muestra todos los dispositivos de red disponibles junto con su tipo, estado y la conexion activa asociada. `nmcli connection show` lista las conexiones configuradas (no los dispositivos). `nmcli general status` muestra el estado general de NetworkManager (conectividad, estado de red).
</details>

---

### Pregunta 20

Un administrador quiere verificar el estado de la interfaz bond0 y sus esclavas. Que archivo del sistema de archivos virtual debe consultar?

a) `/sys/class/net/bond0/status`
b) `/proc/net/bonding/bond0`
c) `/etc/sysconfig/bond0`
d) `/var/run/bonding/bond0`

<details>
<summary>Respuesta</summary>

**b) `/proc/net/bonding/bond0`**

El archivo `/proc/net/bonding/bond0` contiene informacion detallada sobre la interfaz bond0, incluyendo el modo de bonding, la interfaz activa, el estado de cada esclava (MII Status), la velocidad del enlace y los parametros de monitoreo. Es la fuente principal para verificar el estado del bonding en tiempo real.
</details>

---

### Pregunta 21

Escribe el comando para agregar la direccion IP 10.0.0.5 con mascara /24 a la interfaz eth1.

<input type="text" class="fill-blank" data-answer="ip addr add 10.0.0.5/24 dev eth1" data-alt="ip address add 10.0.0.5/24 dev eth1,ip a add 10.0.0.5/24 dev eth1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip addr add 10.0.0.5/24 dev eth1**

El comando `ip addr add` agrega una direccion IP a una interfaz. Se debe especificar la direccion con su prefijo de red (/24) y la interfaz destino con `dev`. Tambien se puede usar la forma abreviada `ip a add`.
</details>

---

### Pregunta 22

Escribe el comando para establecer el hostname del sistema de forma permanente a "webserver01" usando la herramienta de systemd.

<input type="text" class="fill-blank" data-answer="hostnamectl set-hostname webserver01" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**hostnamectl set-hostname webserver01**

El comando `hostnamectl set-hostname` establece el hostname estatico del sistema en entornos con systemd. Modifica automaticamente `/etc/hostname` y actualiza el hostname activo en el kernel, todo en un solo paso.
</details>

---

### Pregunta 23

Escribe el comando para agregar una ruta por defecto (gateway) a traves de la IP 192.168.1.1.

<input type="text" class="fill-blank" data-answer="ip route add default via 192.168.1.1" data-alt="ip r add default via 192.168.1.1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip route add default via 192.168.1.1**

El comando `ip route add default via` establece la puerta de enlace predeterminada del sistema. Todo el trafico que no coincida con una ruta mas especifica sera enviado al gateway 192.168.1.1. Esta ruta es temporal; para persistirla se debe configurar en los archivos de red.
</details>

---

### Pregunta 24

Escribe el comando para activar (levantar) la interfaz de red eth0 usando la herramienta moderna iproute2.

<input type="text" class="fill-blank" data-answer="ip link set eth0 up" data-alt="ip l set eth0 up,ip link set dev eth0 up" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip link set eth0 up**

El comando `ip link set eth0 up` activa la interfaz eth0, permitiendo que pueda enviar y recibir trafico. Es el equivalente moderno de `ifconfig eth0 up`. Para desactivarla se usa `ip link set eth0 down`.
</details>

---

### Pregunta 25

Escribe el comando de nmcli para activar una conexion llamada "red-oficina".

<input type="text" class="fill-blank" data-answer="nmcli connection up red-oficina" data-alt="nmcli con up red-oficina,nmcli c up red-oficina" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**nmcli connection up red-oficina**

El comando `nmcli connection up` activa una conexion previamente configurada en NetworkManager. Se puede usar el nombre de la conexion o su UUID. Para desactivarla se usa `nmcli connection down red-oficina`.
</details>

---
