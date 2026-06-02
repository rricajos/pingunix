---
title: "205.2 - Configuracion avanzada de red"
tags: [lpic-2, examen-201, tema-205, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "205"
subtema: "205.2"
---

# 205.2 - Ejercicios: Configuracion avanzada de red

### Pregunta 1
Que archivo debe modificarse para habilitar permanentemente el reenvio de paquetes IPv4 en un sistema Linux?

a) `/etc/network/forwarding`
b) `/proc/sys/net/ipv4/ip_forward`
c) `/etc/sysctl.conf`
d) `/etc/ip_forward.conf`

<details>
<summary>Respuesta</summary>

**c) `/etc/sysctl.conf`**

Para habilitar el reenvio de forma permanente, se agrega `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf` (o en un archivo en `/etc/sysctl.d/`). El archivo `/proc/sys/net/ipv4/ip_forward` permite el cambio inmediato pero temporal (se pierde al reiniciar). Despues de editar sysctl.conf se aplican los cambios con `sysctl -p`.
</details>

---

### Pregunta 2
Que comando crea una interfaz VLAN con ID 200 sobre la interfaz eth0?

a) `vlan add eth0 200`
b) `ip link add link eth0 name eth0.200 type vlan id 200`
c) `ip vlan create eth0 id 200`
d) `nmcli vlan add eth0.200 id 200`

<details>
<summary>Respuesta</summary>

**b) `ip link add link eth0 name eth0.200 type vlan id 200`**

La sintaxis correcta usa `ip link add` con los parametros: `link` (interfaz padre), `name` (nombre de la subinterfaz VLAN), `type vlan` (tipo de dispositivo virtual) e `id` (identificador VLAN 802.1Q). Antes de crear VLANs, debe estar cargado el modulo del kernel `8021q` (`modprobe 8021q`).
</details>

---

### Pregunta 3
En el contexto de policy routing, que hace el comando `ip rule add from 10.0.1.0/24 table custom`?

a) Agrega una ruta hacia 10.0.1.0/24 en la tabla custom
b) Indica que el trafico originado en 10.0.1.0/24 use la tabla de enrutamiento custom
c) Bloquea el trafico de 10.0.1.0/24
d) Crea una nueva tabla de enrutamiento llamada custom

<details>
<summary>Respuesta</summary>

**b) Indica que el trafico originado en 10.0.1.0/24 use la tabla de enrutamiento custom**

Las reglas de politica (`ip rule`) determinan que tabla de enrutamiento se consulta para cada paquete. Esta regla establece que todo trafico con IP de origen en la red 10.0.1.0/24 sea enrutado usando la tabla "custom" en lugar de la tabla "main" por defecto. Esto permite tener diferentes gateways para diferentes redes de origen.
</details>

---

### Pregunta 4
Que comando de tc se utiliza para simular 100ms de latencia en una interfaz de red para pruebas?

a) `tc qdisc add dev eth0 root tbf delay 100ms`
b) `tc qdisc add dev eth0 root netem delay 100ms`
c) `tc latency add dev eth0 100ms`
d) `tc qdisc add dev eth0 root htb delay 100ms`

<details>
<summary>Respuesta</summary>

**b) `tc qdisc add dev eth0 root netem delay 100ms`**

La qdisc `netem` (Network Emulator) permite simular condiciones de red como latencia, perdida de paquetes, duplicacion y reordenamiento. Es especialmente util para pruebas. `tbf` sirve para limitar ancho de banda, y `htb` para control de ancho de banda jerarquico, pero ninguno de los dos simula latencia.
</details>

---

### Pregunta 5
Cual de las siguientes afirmaciones sobre las direcciones IPv6 link-local es correcta?

a) Son enrutables a traves de Internet
b) Comienzan con el prefijo fe80:: y se configuran automaticamente en cada interfaz
c) Solo se asignan manualmente por el administrador
d) Son equivalentes a las direcciones de broadcast en IPv4

<details>
<summary>Respuesta</summary>

**b) Comienzan con el prefijo fe80:: y se configuran automaticamente en cada interfaz**

Las direcciones link-local (fe80::/10) se generan automaticamente en cada interfaz de red IPv6 habilitada, sin necesidad de configuracion manual ni servidor DHCP. Son validas unicamente en el segmento de red local (no enrutables). Son esenciales para el funcionamiento de NDP (Neighbor Discovery Protocol) y la comunicacion local.
</details>

---

### Pregunta 6
Que comando crea un tunel GRE con IP remota 203.0.113.1 e IP local 198.51.100.1?

a) `ip link add gre1 type gre remote 203.0.113.1 local 198.51.100.1`
b) `ip tunnel add gre1 mode gre remote 203.0.113.1 local 198.51.100.1`
c) `ip route add tunnel gre remote 203.0.113.1 local 198.51.100.1`
d) `iptunnel create gre1 203.0.113.1 198.51.100.1`

<details>
<summary>Respuesta</summary>

**b) `ip tunnel add gre1 mode gre remote 203.0.113.1 local 198.51.100.1`**

El comando `ip tunnel add` crea un tunel especificando el nombre (`gre1`), el modo (`gre`), la IP remota del otro extremo (`remote`) y la IP local de este extremo (`local`). Tras crearlo, se necesita asignar una IP al tunel y activarlo con `ip link set gre1 up`. La opcion a) tambien podria funcionar en versiones recientes pero la forma canonica es `ip tunnel add`.
</details>

---

### Pregunta 7
Que protocolo reemplaza a ARP en IPv6 para la resolucion de direcciones de capa 2?

a) RARP (Reverse ARP)
b) NDP (Neighbor Discovery Protocol)
c) DHCPv6
d) ICMPv6 Echo

<details>
<summary>Respuesta</summary>

**b) NDP (Neighbor Discovery Protocol)**

NDP (Neighbor Discovery Protocol), definido en RFC 4861, reemplaza a ARP en IPv6. Utiliza mensajes ICMPv6 para la resolucion de direcciones (Neighbor Solicitation/Advertisement), descubrimiento de routers (Router Solicitation/Advertisement), deteccion de direcciones duplicadas (DAD) y redireccion. A diferencia de ARP que usa broadcast, NDP usa multicast.
</details>

---

### Pregunta 8
Un administrador necesita crear un bridge que conecte eth0 y eth1. Cual es la secuencia correcta de comandos?

a) `brctl addbr br0 && brctl addif br0 eth0 eth1 && ifconfig br0 up`
b) `ip link add name br0 type bridge && ip link set eth0 master br0 && ip link set eth1 master br0 && ip link set br0 up`
c) `nmcli bridge create br0 ports eth0,eth1`
d) `bridge create br0 members eth0 eth1`

<details>
<summary>Respuesta</summary>

**b) `ip link add name br0 type bridge && ip link set eth0 master br0 && ip link set eth1 master br0 && ip link set br0 up`**

La secuencia correcta con herramientas modernas (iproute2) es: crear el bridge con `ip link add type bridge`, agregar cada interfaz con `ip link set IF master br0`, y finalmente activar el bridge con `ip link set br0 up`. La opcion a) usa herramientas legacy (brctl) y la sintaxis de addif no acepta multiples interfaces a la vez.
</details>

---

### Pregunta 9
En que archivo se definen las tablas de enrutamiento personalizadas para su uso con policy routing?

a) `/etc/sysctl.conf`
b) `/etc/iproute2/rt_tables`
c) `/etc/routing/tables.conf`
d) `/proc/net/rt_tables`

<details>
<summary>Respuesta</summary>

**b) `/etc/iproute2/rt_tables`**

El archivo `/etc/iproute2/rt_tables` mapea numeros de tabla a nombres simbolicos. Las tablas predeterminadas son: 255 (local), 254 (main) y 253 (default). Para crear una tabla personalizada, se agrega una linea como `100 nombre_tabla`. Luego se pueden agregar rutas a esa tabla con `ip route add ... table nombre_tabla`.
</details>

---

### Pregunta 10
Que qdisc de tc se utiliza comunmente para limitar el ancho de banda de salida a una tasa fija?

a) `netem`
b) `sfq`
c) `tbf`
d) `pfifo_fast`

<details>
<summary>Respuesta</summary>

**c) `tbf`**

TBF (Token Bucket Filter) es la qdisc mas sencilla para limitar el ancho de banda de salida a una tasa fija. Funciona como un cubo de tokens: los paquetes solo se transmiten si hay tokens disponibles, y los tokens se reponen a la tasa configurada. Ejemplo: `tc qdisc add dev eth0 root tbf rate 1mbit burst 32kbit latency 400ms`. `netem` simula condiciones de red, `sfq` distribuye equitativamente y `pfifo_fast` es la qdisc por defecto.
</details>

---

### Pregunta 11

Que parametro de sysctl controla si un sistema Linux puede actuar como router reenviando paquetes IPv4?

a) `net.ipv4.ip_routing`
b) `net.ipv4.ip_forward`
c) `net.ipv4.forwarding`
d) `net.ipv4.router_enable`

<details>
<summary>Respuesta</summary>

**b) `net.ipv4.ip_forward`**

El parametro `net.ipv4.ip_forward` controla si el kernel de Linux reenvia paquetes entre interfaces de red. Un valor de `1` habilita el reenvio y un valor de `0` lo deshabilita. Para hacerlo permanente se configura en `/etc/sysctl.conf` o en un archivo en `/etc/sysctl.d/`. Se aplica con `sysctl -p`.
</details>

---

### Pregunta 12

Que modulo del kernel se necesita cargar para soportar interfaces VLAN con etiquetado 802.1Q?

a) `vlan`
b) `8021q`
c) `ieee802`
d) `vlan_tag`

<details>
<summary>Respuesta</summary>

**b) `8021q`**

El modulo del kernel `8021q` proporciona soporte para VLANs con etiquetado IEEE 802.1Q. Se carga con `modprobe 8021q`. En la mayoria de distribuciones modernas, el modulo se carga automaticamente al crear una interfaz VLAN. Sin este modulo, no es posible crear subinterfaces VLAN.
</details>

---

### Pregunta 13

Cual es la tabla de enrutamiento principal que se muestra por defecto al ejecutar `ip route show`?

a) `local` (255)
b) `main` (254)
c) `default` (253)
d) `unspec` (0)

<details>
<summary>Respuesta</summary>

**b) `main` (254)**

La tabla `main` (numero 254) es la tabla de enrutamiento principal de Linux y es la que se muestra por defecto con `ip route show`. Todas las rutas anadidas con `ip route add` sin especificar tabla se agregan a `main`. La tabla `local` (255) contiene rutas locales y de broadcast gestionadas por el kernel, y la tabla `default` (253) esta normalmente vacia.
</details>

---

### Pregunta 14

Un administrador desea que el trafico proveniente de la interfaz eth1 utilice una tabla de enrutamiento personalizada llamada "dmz". Que comando debe usar?

a) `ip route add table dmz dev eth1`
b) `ip rule add iif eth1 table dmz`
c) `ip table add dmz interface eth1`
d) `ip policy add eth1 lookup dmz`

<details>
<summary>Respuesta</summary>

**b) `ip rule add iif eth1 table dmz`**

El comando `ip rule add iif eth1 table dmz` crea una regla de politica de enrutamiento que indica al kernel que todo trafico que ingrese por la interfaz eth1 debe ser enrutado consultando la tabla "dmz" en lugar de la tabla "main". La tabla "dmz" debe estar definida previamente en `/etc/iproute2/rt_tables`.
</details>

---

### Pregunta 15

Que tipo de tunel se utiliza para encapsular trafico IPv6 dentro de paquetes IPv4?

a) GRE
b) IPIP
c) SIT
d) VXLAN

<details>
<summary>Respuesta</summary>

**c) SIT**

SIT (Simple Internet Transition) es un mecanismo de tunel disenado especificamente para encapsular paquetes IPv6 dentro de paquetes IPv4, tambien conocido como 6in4. Se crea con `ip tunnel add mode sit`. GRE es un tunel generico IP sobre IP, IPIP encapsula IPv4 sobre IPv4, y VXLAN es una tecnologia de superposicion de capa 2 sobre capa 3.
</details>

---

### Pregunta 16

En tc (traffic control), que componente clasifica los paquetes y los asigna a una clase especifica?

a) qdisc
b) class
c) filter
d) handle

<details>
<summary>Respuesta</summary>

**c) filter**

Los filtros (filters) en tc son reglas que examinan los paquetes y los clasifican asignandolos a una clase especifica. Se basan en criterios como direccion IP, puerto, protocolo o marcas del firewall. Las qdisc son disciplinas de colas que gestionan como se envian los paquetes, y las clases son subdivisiones jerarquicas de una qdisc.
</details>

---

### Pregunta 17

Que parametro del kernel previene ataques de IP spoofing verificando que los paquetes llegan por la interfaz correcta?

a) `/proc/sys/net/ipv4/conf/all/accept_redirects`
b) `/proc/sys/net/ipv4/conf/all/rp_filter`
c) `/proc/sys/net/ipv4/tcp_syncookies`
d) `/proc/sys/net/ipv4/icmp_echo_ignore_broadcasts`

<details>
<summary>Respuesta</summary>

**b) `/proc/sys/net/ipv4/conf/all/rp_filter`**

El parametro `rp_filter` (Reverse Path Filtering) verifica que la direccion IP de origen de cada paquete recibido sea alcanzable a traves de la interfaz por la que llego. Si la verificacion falla, el paquete se descarta, previniendo ataques de IP spoofing. Un valor de `1` activa la verificacion estricta y `2` la verificacion flexible.
</details>

---

### Pregunta 18

Que archivo se consulta para ver la informacion detallada de todas las VLANs configuradas en el sistema?

a) `/sys/class/net/vlan/config`
b) `/proc/net/vlan/config`
c) `/etc/vlan/config`
d) `/var/run/vlan/config`

<details>
<summary>Respuesta</summary>

**b) `/proc/net/vlan/config`**

El archivo `/proc/net/vlan/config` lista todas las interfaces VLAN configuradas en el sistema, mostrando el nombre de la interfaz VLAN, el ID de VLAN y la interfaz fisica padre. Para informacion detallada de una VLAN especifica se consulta `/proc/net/vlan/nombre_interfaz` (por ejemplo, `/proc/net/vlan/eth0.100`).
</details>

---

### Pregunta 19

Que herramienta legacy se utilizaba para crear y administrar bridges antes de los comandos ip de iproute2?

a) `bridgectl`
b) `brctl`
c) `bridge-utils`
d) `netbridge`

<details>
<summary>Respuesta</summary>

**b) `brctl`**

El comando `brctl` (del paquete `bridge-utils`) era la herramienta legacy para gestionar bridges de red en Linux. Permite crear bridges (`brctl addbr`), agregar interfaces (`brctl addif`), activar STP (`brctl stp`) y ver el estado (`brctl show`). En sistemas modernos se recomienda usar `ip link add type bridge` e `ip link set master`.
</details>

---

### Pregunta 20

Que direccion IPv6 se asigna automaticamente a cada interfaz de red y se utiliza para comunicacion local en el segmento de red?

a) Global unicast (2000::/3)
b) Unique local (fc00::/7)
c) Link-local (fe80::/10)
d) Multicast (ff00::/8)

<details>
<summary>Respuesta</summary>

**c) Link-local (fe80::/10)**

Las direcciones link-local con prefijo fe80::/10 se asignan automaticamente a cada interfaz de red IPv6 activa mediante autoconfig. Son validas unicamente en el segmento de red local y no son enrutables. Son esenciales para el funcionamiento del Neighbor Discovery Protocol (NDP) y para la comunicacion inicial antes de obtener una direccion global.
</details>

---

### Pregunta 21

Escribe el comando para habilitar temporalmente el reenvio de paquetes IPv4 usando sysctl.

<input type="text" class="fill-blank" data-answer="sysctl -w net.ipv4.ip_forward=1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**sysctl -w net.ipv4.ip_forward=1**

El comando `sysctl -w net.ipv4.ip_forward=1` habilita inmediatamente el reenvio de paquetes IPv4 en el kernel. Este cambio es temporal y se pierde al reiniciar. Para hacerlo permanente se debe agregar `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf` y ejecutar `sysctl -p`.
</details>

---

### Pregunta 22

Escribe el comando para crear una interfaz VLAN con ID 50 sobre la interfaz eth0.

<input type="text" class="fill-blank" data-answer="ip link add link eth0 name eth0.50 type vlan id 50" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip link add link eth0 name eth0.50 type vlan id 50**

El comando `ip link add` con `type vlan` crea una subinterfaz VLAN. Se especifica la interfaz padre con `link`, el nombre con `name` (por convencion `interfaz.vlan_id`), y el ID de VLAN con `id`. Despues de crearla, hay que asignarle una IP y activarla con `ip link set eth0.50 up`.
</details>

---

### Pregunta 23

Escribe el comando para crear un bridge de red llamado br0 usando la herramienta ip de iproute2.

<input type="text" class="fill-blank" data-answer="ip link add name br0 type bridge" data-alt="ip link add br0 type bridge" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip link add name br0 type bridge**

El comando `ip link add name br0 type bridge` crea una interfaz de bridge virtual llamada br0. Despues de crearla, se agregan interfaces fisicas con `ip link set ethX master br0` y se activa con `ip link set br0 up`. El bridge funciona como un switch virtual de capa 2.
</details>

---

### Pregunta 24

Escribe el comando para ver las reglas de politica de enrutamiento configuradas en el sistema.

<input type="text" class="fill-blank" data-answer="ip rule show" data-alt="ip rule list,ip rule" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip rule show**

El comando `ip rule show` muestra todas las reglas de politica de enrutamiento (policy routing rules) configuradas. Cada regla tiene una prioridad y determina que tabla de enrutamiento se consulta segun criterios como IP de origen, interfaz de entrada o marca del paquete. Las reglas por defecto son: lookup local (0), lookup main (32766) y lookup default (32767).
</details>

---

### Pregunta 25

Escribe el comando para eliminar toda la configuracion de traffic control (tc) de la interfaz eth0.

<input type="text" class="fill-blank" data-answer="tc qdisc del dev eth0 root" data-alt="tc qdisc delete dev eth0 root" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**tc qdisc del dev eth0 root**

El comando `tc qdisc del dev eth0 root` elimina la qdisc raiz y toda la configuracion asociada (clases y filtros) de la interfaz eth0, restaurando la qdisc por defecto del sistema. Es util para limpiar configuraciones de traffic shaping antes de aplicar nuevas reglas.
</details>

---
