---
title: "364.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.4"
---

# Flashcards: 364.4 - Ha De Red

> 40 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-001">
<div class="flashcard-front">

**P:** ¿Que modo de bonding proporciona redundancia activo/pasivo sin necesidad de configuracion especial en el switch?

</div>
<div class="flashcard-back">

**R:** b) mode 1 (active-backup). El modo 1 (active-backup) mantiene una interfaz activa y las demas en espera. No requiere ninguna configuracion especial en el switch, a diferencia de los modos 0, 2, 3 y 4.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-002">
<div class="flashcard-front">

**P:** ¿Que protocolo estandar IEEE usa el modo 4 de bonding?

</div>
<div class="flashcard-back">

**R:** c) LACP (802.3ad). El modo 4 de bonding implementa LACP (Link Aggregation Control Protocol) definido en el estandar IEEE 802.3ad. Requiere que el switch tambien soporte y tenga habilitado LACP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-003">
<div class="flashcard-front">

**P:** ¿Que herramienta se usa para ver el estado y gestionar un network team en tiempo real?

</div>
<div class="flashcard-back">

**R:** b) `teamdctl`. `teamdctl` es la herramienta de control para teamd. Permite ver el estado (`teamdctl team0 state`), la configuracion (`config dump`) y gestionar puertos (`port disable/enable`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-004">
<div class="flashcard-front">

**P:** ¿Que parametro de VRRP en keepalived debe ser unico en la red para cada instancia?

</div>
<div class="flashcard-back">

**R:** c) `virtual_router_id`. El `virtual_router_id` (0-255) identifica de forma unica una instancia VRRP en la red. Si dos instancias diferentes comparten el mismo ID en la misma red, se produciran conflictos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-005">
<div class="flashcard-front">

**P:** ¿Que runner de teaming es equivalente al modo 4 (802.3ad/LACP) de bonding?

</div>
<div class="flashcard-back">

**R:** d) `lacp`. El runner `lacp` de teaming implementa LACP (IEEE 802.3ad), equivalente al modo 4 de bonding. Requiere soporte LACP en el switch.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-006">
<div class="flashcard-front">

**P:** ¿Que archivo muestra el estado de un bond de red en Linux?

</div>
<div class="flashcard-back">

**R:** b) `/proc/net/bonding/bond0`. `/proc/net/bonding/bond0` muestra informacion detallada del bond incluyendo el modo, interfaces esclavas, estado de cada interfaz y la interfaz activa actualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-007">
<div class="flashcard-front">

**P:** En keepalived, ¿que directiva evita que un nodo BACKUP recupere automaticamente el rol MASTER cuando vuelve a estar disponible?

</div>
<div class="flashcard-back">

**R:** a) `nopreempt`. La directiva `nopreempt` en una instancia VRRP evita que el nodo con mayor prioridad recupere automaticamente el rol MASTER. Esto reduce los cambios de estado innecesarios. Solo funciona cuando `state` es `BACKUP`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-008">
<div class="flashcard-front">

**P:** ¿Que parametro de bonding define cada cuantos milisegundos se verifica el estado del enlace?

</div>
<div class="flashcard-back">

**R:** c) `miimon`. `miimon` define el intervalo en milisegundos para la verificacion del estado del enlace usando MII (Media Independent Interface). Un valor tipico es 100 ms. `arp_interval` es una alternativa que usa peticiones ARP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando crea una ruta predeterminada con dos gateways para balanceo de carga?

</div>
<div class="flashcard-back">

**R:** b) `ip route add default nexthop via 10.0.0.1 weight 1 nexthop via 10.0.0.2 weight 1`. La sintaxis `nexthop` de `ip route` permite definir multiples gateways con pesos para balanceo de carga. El kernel distribuye el trafico entre los nexthops segun los pesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-010">
<div class="flashcard-front">

**P:** ¿Que ventaja principal tiene network teaming sobre bonding?

</div>
<div class="flashcard-back">

**R:** b) Arquitectura modular en espacio de usuario con runners intercambiables. Teaming usa una arquitectura modular con runners en espacio de usuario (teamd), configuracion JSON, soporte D-Bus y mejor monitorizacion (incluyendo nsna_ping para IPv6). Bonding es monolitico en el kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-011">
<div class="flashcard-front">

**P:** ¿Que modo de bonding envia el trafico por todas las interfaces simultaneamente?

</div>
<div class="flashcard-back">

**R:** c) mode 3 (broadcast). El modo 3 (broadcast) transmite cada paquete por todas las interfaces esclavas del bond simultaneamente. Requiere configuracion especial en el switch y se usa en escenarios muy especificos donde se necesita que todos los puertos reciban el trafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-012">
<div class="flashcard-front">

**P:** ¿Que parametro de bonding especifica la interfaz preferida en modo active-backup?

</div>
<div class="flashcard-back">

**R:** c) `primary`. El parametro `primary` en la configuracion de bonding especifica la interfaz preferida que sera la activa cuando este disponible. Si la interfaz primaria falla, otra toma el relevo, pero cuando la primaria se recupera, vuelve a ser la activa (salvo configuracion contraria).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-013">
<div class="flashcard-front">

**P:** ¿Que tipo de monitorizacion de enlaces usa teaming que permite verificar la conectividad IPv6 mediante neighbor solicitation?

</div>
<div class="flashcard-back">

**R:** c) `nsna_ping`. `nsna_ping` (Neighbor Solicitation/Neighbor Advertisement ping) es un tipo de link_watch exclusivo de teaming que verifica la conectividad de red usando el protocolo de descubrimiento de vecinos IPv6. Bonding no soporta este metodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-014">
<div class="flashcard-front">

**P:** En VRRP con keepalived, ¿que direccion multicast y protocolo IP se utilizan para los anuncios?

</div>
<div class="flashcard-back">

**R:** b) 224.0.0.18, protocolo IP 112. VRRP utiliza la direccion multicast 224.0.0.18 y el protocolo IP numero 112 para enviar los anuncios periodicos (advertisements) del router MASTER a los BACKUP. Los firewalls deben permitir este trafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-015">
<div class="flashcard-front">

**P:** ¿Que parametro de una instancia VRRP en keepalived define la frecuencia en segundos con la que el MASTER envia anuncios?

</div>
<div class="flashcard-back">

**R:** c) `advert_int`. `advert_int` (advertisement interval) define cada cuantos segundos el MASTER envia un anuncio VRRP a los BACKUP. El valor predeterminado es 1 segundo. Si los BACKUP no reciben anuncios durante 3 intervalos, inician la eleccion de un nuevo MASTER.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-016">
<div class="flashcard-front">

**P:** ¿Que modos de bonding NO requieren configuracion especial en el switch?

</div>
<div class="flashcard-back">

**R:** b) Modos 1, 5 y 6. Los modos 1 (active-backup), 5 (balance-tlb) y 6 (balance-alb) no requieren configuracion especial en el switch. Los modos 0 (balance-rr), 2 (balance-xor), 3 (broadcast) y 4 (802.3ad) requieren soporte del switch.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-017">
<div class="flashcard-front">

**P:** ¿Que archivo se utiliza para definir tablas de enrutamiento personalizadas en Linux?

</div>
<div class="flashcard-back">

**R:** b) `/etc/iproute2/rt_tables`. El archivo `/etc/iproute2/rt_tables` contiene el mapeo entre numeros y nombres de tablas de enrutamiento. Se usa para definir tablas personalizadas que permiten enrutamiento basado en politicas, util para multiples gateways o ISPs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-018">
<div class="flashcard-front">

**P:** ¿Que parametro de keepalived reduce la prioridad de una instancia VRRP cuando falla un script de verificacion?

</div>
<div class="flashcard-back">

**R:** b) `weight` (valor negativo en track_script). En la definicion de `vrrp_script`, el parametro `weight` con valor negativo (ej: `weight -20`) reduce la prioridad del nodo cuando el script detecta un fallo. Si la prioridad resultante es menor que la de un BACKUP, se produce el failover.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando crea un network namespace llamado "ns_servicio" en Linux?

</div>
<div class="flashcard-back">

**R:** b) `ip netns add ns_servicio`. `ip netns add` crea un nuevo network namespace que proporciona una pila de red aislada con sus propias interfaces, tablas de enrutamiento y reglas de firewall. Es util para aislar servicios y gestionar failover de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-020">
<div class="flashcard-front">

**P:** ¿Que parametro de bonding controla si se usa la velocidad de envio LACP "slow" (30s) o "fast" (1s)?

</div>
<div class="flashcard-back">

**R:** b) `lacp_rate`. `lacp_rate` controla la frecuencia de envio de paquetes LACPDU (LACP Data Units). `slow` envia cada 30 segundos y `fast` cada 1 segundo. `fast` permite una deteccion mas rapida de fallos en enlaces pero genera mas trafico de control.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando nmcli para crear un bond llamado "bond0" en modo active-backup con monitorizacion MII cada 100ms e interfaz primaria eth0. <input type="text" class="fill-blank" data-answer="nmcli con add type bond con-name bond0 ifname bond0 bond.options \"mode=active-backup,miimon=100,primary=eth0\"" data-alt="nmcli connection add type bond con-name bond0 ifname bond0 bond.options \"mode=active-backup,miimon=100,primary=eth0\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nmcli con add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup,miimon=100,primary=eth0". `nmcli con add type bond` crea una interfaz de bonding con NetworkManager. Las opciones de bonding se especifican en `bond.options` separadas por comas. Despues se añaden las interfaces esclavas con `nmcli con add type ethernet master bond0`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado completo de un network team llamado "team0" usando teamdctl. <input type="text" class="fill-blank" data-answer="teamdctl team0 state" data-alt="teamdctl team0 state dump" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** teamdctl team0 state. `teamdctl team0 state` muestra el estado actual del team incluyendo el runner activo, las interfaces miembro, cual es la interfaz activa y el estado de cada enlace. Para mas detalle se puede usar `state dump`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para crear una ruta predeterminada con balanceo entre dos gateways 192.168.1.1 y 10.0.0.1 con peso igual. <input type="text" class="fill-blank" data-answer="ip route add default nexthop via 192.168.1.1 weight 1 nexthop via 10.0.0.1 weight 1" data-alt="ip route add default nexthop via 192.168.1.1 weight 1 nexthop via 10.0.0.1 weight 1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip route add default nexthop via 192.168.1.1 weight 1 nexthop via 10.0.0.1 weight 1. La sintaxis `nexthop` de `ip route` permite definir multiples gateways con pesos. El kernel distribuye el trafico entre los nexthops proporcionalmente a los pesos, permitiendo balanceo de carga entre multiples conexiones de Internet.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado de un bond de red desde el archivo de informacion en procfs. <input type="text" class="fill-blank" data-answer="cat /proc/net/bonding/bond0" data-alt="cat /proc/net/bonding/bond0" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cat /proc/net/bonding/bond0. El archivo `/proc/net/bonding/bond0` contiene informacion completa del bond incluyendo el modo, la interfaz activa, el estado de cada esclavo, la direccion MAC, la velocidad del enlace y los parametros de monitorizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar el proceso nginx dentro de un network namespace llamado "ns_servicio". <input type="text" class="fill-blank" data-answer="ip netns exec ns_servicio /usr/sbin/nginx" data-alt="ip netns exec ns_servicio nginx" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip netns exec ns_servicio /usr/sbin/nginx. `ip netns exec` ejecuta un comando dentro de un network namespace especifico. El proceso hereda la pila de red del namespace, incluyendo sus interfaces, rutas y reglas de firewall, completamente aislado del namespace principal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El modo `1 (active-backup)` es el mas simple y no requiere configuracion del swi...

</div>
<div class="flashcard-back">

**R:** El modo `1 (active-backup)` es el mas simple y no requiere configuracion del switch. El modo `4 (802.3ad/LACP)` ofrece mayor rendimiento pero requiere soporte LACP en el switch.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `teamd` es la alternativa moderna a bonding. Los runners son equivalentes a los ...

</div>
<div class="flashcard-back">

**R:** `teamd` es la alternativa moderna a bonding. Los runners son equivalentes a los modos de bonding. `teamdctl` gestiona el team en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: VRRP usa multicast 224.0.0.18 y protocolo IP 112. El `virtual_router_id` debe se...

</div>
<div class="flashcard-back">

**R:** VRRP usa multicast 224.0.0.18 y protocolo IP 112. El `virtual_router_id` debe ser unico en la red. El nodo con mayor `priority` activa se convierte en MASTER.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `balance-rr`?

</div>
<div class="flashcard-back">

**R:** Round Robin: transmite por cada interfaz alternativamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `active-backup`?

</div>
<div class="flashcard-back">

**R:** Una interfaz activa, las demas en espera

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `balance-xor`?

</div>
<div class="flashcard-back">

**R:** Hash de MAC origen/destino para seleccionar interfaz

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `broadcast`?

</div>
<div class="flashcard-back">

**R:** Transmite en todas las interfaces

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `802.3ad`?

</div>
<div class="flashcard-back">

**R:** LACP (Link Aggregation Control Protocol)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-034">
<div class="flashcard-front">

**P:** Que es/son Network Bonding?

</div>
<div class="flashcard-back">

**R:** El **bonding** combina multiples interfaces de red fisicas en una interfaz logica para proporcionar redundancia y/o mayor ancho de banda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-035">
<div class="flashcard-front">

**P:** Que es/son Network Teaming?

</div>
<div class="flashcard-back">

**R:** El **teaming** es la alternativa moderna al bonding en Linux, usando el daemon `teamd` en espacio de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-036">
<div class="flashcard-front">

**P:** Que es/son VRRP con Keepalived?

</div>
<div class="flashcard-back">

**R:** **VRRP** (Virtual Router Redundancy Protocol) permite que multiples routers compartan una IP virtual, proporcionando redundancia del gateway.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-037">
<div class="flashcard-front">

**P:** Que es/son Multiples Gateways Predeterminados?

</div>
<div class="flashcard-back">

**R:** Para tener redundancia de salida a Internet con multiples ISPs:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-038">
<div class="flashcard-front">

**P:** Que es/son Network Namespace Failover?

</div>
<div class="flashcard-back">

**R:** Los **network namespaces** permiten aislar pilas de red completas, util para failover de servicios:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-039">
<div class="flashcard-front">

**P:** Que es/son Comparativa Bonding vs Teaming?

</div>
<div class="flashcard-back">

**R:** | Aspecto | Bonding | Teaming |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.4">
</div>

<div class="flashcard" data-id="364.4-fc-040">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

