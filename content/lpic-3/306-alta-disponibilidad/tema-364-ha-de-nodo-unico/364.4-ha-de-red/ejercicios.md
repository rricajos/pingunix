---
title: "364.4 - Ejercicios: HA de Red"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.4"
peso: 2
tags:
  - lpic-3
  - tema-364
  - ejercicios
  - bonding
  - teaming
  - vrrp
---

# 364.4 - Ejercicios: HA de Red

### Pregunta 1
¿Que modo de bonding proporciona redundancia activo/pasivo sin necesidad de configuracion especial en el switch?

a) mode 0 (balance-rr)
b) mode 1 (active-backup)
c) mode 4 (802.3ad)
d) mode 6 (balance-alb)

<details><summary>Respuesta</summary>

**b) mode 1 (active-backup)**

El modo 1 (active-backup) mantiene una interfaz activa y las demas en espera. No requiere ninguna configuracion especial en el switch, a diferencia de los modos 0, 2, 3 y 4.
</details>

### Pregunta 2
¿Que protocolo estandar IEEE usa el modo 4 de bonding?

a) STP (802.1d)
b) VLAN (802.1q)
c) LACP (802.3ad)
d) WPA (802.11i)

<details><summary>Respuesta</summary>

**c) LACP (802.3ad)**

El modo 4 de bonding implementa LACP (Link Aggregation Control Protocol) definido en el estandar IEEE 802.3ad. Requiere que el switch tambien soporte y tenga habilitado LACP.
</details>

### Pregunta 3
¿Que herramienta se usa para ver el estado y gestionar un network team en tiempo real?

a) `teamctl`
b) `teamdctl`
c) `ip team`
d) `nmcli team`

<details><summary>Respuesta</summary>

**b) `teamdctl`**

`teamdctl` es la herramienta de control para teamd. Permite ver el estado (`teamdctl team0 state`), la configuracion (`config dump`) y gestionar puertos (`port disable/enable`).
</details>

### Pregunta 4
¿Que parametro de VRRP en keepalived debe ser unico en la red para cada instancia?

a) `priority`
b) `advert_int`
c) `virtual_router_id`
d) `state`

<details><summary>Respuesta</summary>

**c) `virtual_router_id`**

El `virtual_router_id` (0-255) identifica de forma unica una instancia VRRP en la red. Si dos instancias diferentes comparten el mismo ID en la misma red, se produciran conflictos.
</details>

### Pregunta 5
¿Que runner de teaming es equivalente al modo 4 (802.3ad/LACP) de bonding?

a) `activebackup`
b) `loadbalance`
c) `roundrobin`
d) `lacp`

<details><summary>Respuesta</summary>

**d) `lacp`**

El runner `lacp` de teaming implementa LACP (IEEE 802.3ad), equivalente al modo 4 de bonding. Requiere soporte LACP en el switch.
</details>

### Pregunta 6
¿Que archivo muestra el estado de un bond de red en Linux?

a) `/sys/net/bond0/status`
b) `/proc/net/bonding/bond0`
c) `/etc/bond0/status`
d) `/var/run/bond0.state`

<details><summary>Respuesta</summary>

**b) `/proc/net/bonding/bond0`**

`/proc/net/bonding/bond0` muestra informacion detallada del bond incluyendo el modo, interfaces esclavas, estado de cada interfaz y la interfaz activa actualmente.
</details>

### Pregunta 7
En keepalived, ¿que directiva evita que un nodo BACKUP recupere automaticamente el rol MASTER cuando vuelve a estar disponible?

a) `nopreempt`
b) `nofailback`
c) `sticky`
d) `no_recovery`

<details><summary>Respuesta</summary>

**a) `nopreempt`**

La directiva `nopreempt` en una instancia VRRP evita que el nodo con mayor prioridad recupere automaticamente el rol MASTER. Esto reduce los cambios de estado innecesarios. Solo funciona cuando `state` es `BACKUP`.
</details>

### Pregunta 8
¿Que parametro de bonding define cada cuantos milisegundos se verifica el estado del enlace?

a) `updelay`
b) `check_interval`
c) `miimon`
d) `arp_interval`

<details><summary>Respuesta</summary>

**c) `miimon`**

`miimon` define el intervalo en milisegundos para la verificacion del estado del enlace usando MII (Media Independent Interface). Un valor tipico es 100 ms. `arp_interval` es una alternativa que usa peticiones ARP.
</details>

### Pregunta 9
¿Que comando crea una ruta predeterminada con dos gateways para balanceo de carga?

a) `ip route add default via 10.0.0.1 via 10.0.0.2`
b) `ip route add default nexthop via 10.0.0.1 weight 1 nexthop via 10.0.0.2 weight 1`
c) `route add default gw 10.0.0.1 gw 10.0.0.2`
d) `ip route add default multipath 10.0.0.1 10.0.0.2`

<details><summary>Respuesta</summary>

**b) `ip route add default nexthop via 10.0.0.1 weight 1 nexthop via 10.0.0.2 weight 1`**

La sintaxis `nexthop` de `ip route` permite definir multiples gateways con pesos para balanceo de carga. El kernel distribuye el trafico entre los nexthops segun los pesos.
</details>

### Pregunta 10
¿Que ventaja principal tiene network teaming sobre bonding?

a) Mejor rendimiento en modo LACP
b) Arquitectura modular en espacio de usuario con runners intercambiables
c) Soporte para mas interfaces fisicas
d) Mayor compatibilidad con switches antiguos

<details><summary>Respuesta</summary>

**b) Arquitectura modular en espacio de usuario con runners intercambiables**

Teaming usa una arquitectura modular con runners en espacio de usuario (teamd), configuracion JSON, soporte D-Bus y mejor monitorizacion (incluyendo nsna_ping para IPv6). Bonding es monolitico en el kernel.
</details>

### Pregunta 11

¿Que modo de bonding envia el trafico por todas las interfaces simultaneamente?

a) mode 0 (balance-rr)
b) mode 1 (active-backup)
c) mode 3 (broadcast)
d) mode 4 (802.3ad)

<details><summary>Respuesta</summary>

**c) mode 3 (broadcast)**

El modo 3 (broadcast) transmite cada paquete por todas las interfaces esclavas del bond simultaneamente. Requiere configuracion especial en el switch y se usa en escenarios muy especificos donde se necesita que todos los puertos reciban el trafico.
</details>

### Pregunta 12

¿Que parametro de bonding especifica la interfaz preferida en modo active-backup?

a) `active_slave`
b) `preferred`
c) `primary`
d) `main_interface`

<details><summary>Respuesta</summary>

**c) `primary`**

El parametro `primary` en la configuracion de bonding especifica la interfaz preferida que sera la activa cuando este disponible. Si la interfaz primaria falla, otra toma el relevo, pero cuando la primaria se recupera, vuelve a ser la activa (salvo configuracion contraria).
</details>

### Pregunta 13

¿Que tipo de monitorizacion de enlaces usa teaming que permite verificar la conectividad IPv6 mediante neighbor solicitation?

a) `ethtool`
b) `arp_ping`
c) `nsna_ping`
d) `miimon`

<details><summary>Respuesta</summary>

**c) `nsna_ping`**

`nsna_ping` (Neighbor Solicitation/Neighbor Advertisement ping) es un tipo de link_watch exclusivo de teaming que verifica la conectividad de red usando el protocolo de descubrimiento de vecinos IPv6. Bonding no soporta este metodo.
</details>

### Pregunta 14

En VRRP con keepalived, ¿que direccion multicast y protocolo IP se utilizan para los anuncios?

a) 224.0.0.1, protocolo IP 89
b) 224.0.0.18, protocolo IP 112
c) 239.0.0.1, protocolo IP 51
d) 224.0.0.5, protocolo IP 112

<details><summary>Respuesta</summary>

**b) 224.0.0.18, protocolo IP 112**

VRRP utiliza la direccion multicast 224.0.0.18 y el protocolo IP numero 112 para enviar los anuncios periodicos (advertisements) del router MASTER a los BACKUP. Los firewalls deben permitir este trafico.
</details>

### Pregunta 15

¿Que parametro de una instancia VRRP en keepalived define la frecuencia en segundos con la que el MASTER envia anuncios?

a) `interval`
b) `heartbeat_int`
c) `advert_int`
d) `check_interval`

<details><summary>Respuesta</summary>

**c) `advert_int`**

`advert_int` (advertisement interval) define cada cuantos segundos el MASTER envia un anuncio VRRP a los BACKUP. El valor predeterminado es 1 segundo. Si los BACKUP no reciben anuncios durante 3 intervalos, inician la eleccion de un nuevo MASTER.
</details>

### Pregunta 16

¿Que modos de bonding NO requieren configuracion especial en el switch?

a) Modos 0, 2 y 4
b) Modos 1, 5 y 6
c) Modos 1, 3 y 5
d) Modos 0, 1 y 6

<details><summary>Respuesta</summary>

**b) Modos 1, 5 y 6**

Los modos 1 (active-backup), 5 (balance-tlb) y 6 (balance-alb) no requieren configuracion especial en el switch. Los modos 0 (balance-rr), 2 (balance-xor), 3 (broadcast) y 4 (802.3ad) requieren soporte del switch.
</details>

### Pregunta 17

¿Que archivo se utiliza para definir tablas de enrutamiento personalizadas en Linux?

a) `/etc/routes/tables`
b) `/etc/iproute2/rt_tables`
c) `/etc/sysconfig/routes`
d) `/proc/net/route_tables`

<details><summary>Respuesta</summary>

**b) `/etc/iproute2/rt_tables`**

El archivo `/etc/iproute2/rt_tables` contiene el mapeo entre numeros y nombres de tablas de enrutamiento. Se usa para definir tablas personalizadas que permiten enrutamiento basado en politicas, util para multiples gateways o ISPs.
</details>

### Pregunta 18

¿Que parametro de keepalived reduce la prioridad de una instancia VRRP cuando falla un script de verificacion?

a) `priority_decrease`
b) `weight` (valor negativo en track_script)
c) `penalty`
d) `failover_priority`

<details><summary>Respuesta</summary>

**b) `weight` (valor negativo en track_script)**

En la definicion de `vrrp_script`, el parametro `weight` con valor negativo (ej: `weight -20`) reduce la prioridad del nodo cuando el script detecta un fallo. Si la prioridad resultante es menor que la de un BACKUP, se produce el failover.
</details>

### Pregunta 19

¿Que comando crea un network namespace llamado "ns_servicio" en Linux?

a) `netns add ns_servicio`
b) `ip netns add ns_servicio`
c) `ip namespace create ns_servicio`
d) `nsenter --net ns_servicio`

<details><summary>Respuesta</summary>

**b) `ip netns add ns_servicio`**

`ip netns add` crea un nuevo network namespace que proporciona una pila de red aislada con sus propias interfaces, tablas de enrutamiento y reglas de firewall. Es util para aislar servicios y gestionar failover de red.
</details>

### Pregunta 20

¿Que parametro de bonding controla si se usa la velocidad de envio LACP "slow" (30s) o "fast" (1s)?

a) `lacp_interval`
b) `lacp_rate`
c) `lacp_speed`
d) `lacp_timer`

<details><summary>Respuesta</summary>

**b) `lacp_rate`**

`lacp_rate` controla la frecuencia de envio de paquetes LACPDU (LACP Data Units). `slow` envia cada 30 segundos y `fast` cada 1 segundo. `fast` permite una deteccion mas rapida de fallos en enlaces pero genera mas trafico de control.
</details>

### Pregunta 21

Escribe el comando nmcli para crear un bond llamado "bond0" en modo active-backup con monitorizacion MII cada 100ms e interfaz primaria eth0.

<input type="text" class="fill-blank" data-answer="nmcli con add type bond con-name bond0 ifname bond0 bond.options \"mode=active-backup,miimon=100,primary=eth0\"" data-alt="nmcli connection add type bond con-name bond0 ifname bond0 bond.options \"mode=active-backup,miimon=100,primary=eth0\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nmcli con add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup,miimon=100,primary=eth0"**

`nmcli con add type bond` crea una interfaz de bonding con NetworkManager. Las opciones de bonding se especifican en `bond.options` separadas por comas. Despues se añaden las interfaces esclavas con `nmcli con add type ethernet master bond0`.
</details>

### Pregunta 22

Escribe el comando para ver el estado completo de un network team llamado "team0" usando teamdctl.

<input type="text" class="fill-blank" data-answer="teamdctl team0 state" data-alt="teamdctl team0 state dump" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**teamdctl team0 state**

`teamdctl team0 state` muestra el estado actual del team incluyendo el runner activo, las interfaces miembro, cual es la interfaz activa y el estado de cada enlace. Para mas detalle se puede usar `state dump`.
</details>

### Pregunta 23

Escribe el comando para crear una ruta predeterminada con balanceo entre dos gateways 192.168.1.1 y 10.0.0.1 con peso igual.

<input type="text" class="fill-blank" data-answer="ip route add default nexthop via 192.168.1.1 weight 1 nexthop via 10.0.0.1 weight 1" data-alt="ip route add default nexthop via 192.168.1.1 weight 1 nexthop via 10.0.0.1 weight 1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip route add default nexthop via 192.168.1.1 weight 1 nexthop via 10.0.0.1 weight 1**

La sintaxis `nexthop` de `ip route` permite definir multiples gateways con pesos. El kernel distribuye el trafico entre los nexthops proporcionalmente a los pesos, permitiendo balanceo de carga entre multiples conexiones de Internet.
</details>

### Pregunta 24

Escribe el comando para ver el estado de un bond de red desde el archivo de informacion en procfs.

<input type="text" class="fill-blank" data-answer="cat /proc/net/bonding/bond0" data-alt="cat /proc/net/bonding/bond0" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cat /proc/net/bonding/bond0**

El archivo `/proc/net/bonding/bond0` contiene informacion completa del bond incluyendo el modo, la interfaz activa, el estado de cada esclavo, la direccion MAC, la velocidad del enlace y los parametros de monitorizacion.
</details>

### Pregunta 25

Escribe el comando para ejecutar el proceso nginx dentro de un network namespace llamado "ns_servicio".

<input type="text" class="fill-blank" data-answer="ip netns exec ns_servicio /usr/sbin/nginx" data-alt="ip netns exec ns_servicio nginx" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip netns exec ns_servicio /usr/sbin/nginx**

`ip netns exec` ejecuta un comando dentro de un network namespace especifico. El proceso hereda la pila de red del namespace, incluyendo sus interfaces, rutas y reglas de firewall, completamente aislado del namespace principal.
</details>
