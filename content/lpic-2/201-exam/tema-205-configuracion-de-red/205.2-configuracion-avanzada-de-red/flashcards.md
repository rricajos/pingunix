---
title: "205.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "205.2"
---

# Flashcards: 205.2 - Configuracion Avanzada De Red

> 24 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-001">
<div class="flashcard-front">

**P:** Que archivo debe modificarse para habilitar permanentemente el reenvio de paquetes IPv4 en un sistema Linux?

</div>
<div class="flashcard-back">

**R:** c) `/etc/sysctl.conf`. Para habilitar el reenvio de forma permanente, se agrega `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf` (o en un archivo en `/etc/sysctl.d/`). El archivo `/proc/sys/net/ipv4/ip_forward` permite el cambio inmediato pero temporal (se pierde al reiniciar). Despues de editar sysctl.conf se aplican los cambios con `sysctl -p`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-002">
<div class="flashcard-front">

**P:** Que comando crea una interfaz VLAN con ID 200 sobre la interfaz eth0?

</div>
<div class="flashcard-back">

**R:** b) `ip link add link eth0 name eth0.200 type vlan id 200`. La sintaxis correcta usa `ip link add` con los parametros: `link` (interfaz padre), `name` (nombre de la subinterfaz VLAN), `type vlan` (tipo de dispositivo virtual) e `id` (identificador VLAN 802.1Q). Antes de crear VLANs, debe estar cargado el modulo del kernel `8021q` (`modprobe 8021q`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-003">
<div class="flashcard-front">

**P:** En el contexto de policy routing, que hace el comando `ip rule add from 10.0.1.0/24 table custom`?

</div>
<div class="flashcard-back">

**R:** b) Indica que el trafico originado en 10.0.1.0/24 use la tabla de enrutamiento custom. Las reglas de politica (`ip rule`) determinan que tabla de enrutamiento se consulta para cada paquete. Esta regla establece que todo trafico con IP de origen en la red 10.0.1.0/24 sea enrutado usando la tabla "custom" en lugar de la tabla "main" por defecto. Esto permite tener diferentes gateways para diferentes redes de origen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-004">
<div class="flashcard-front">

**P:** Que comando de tc se utiliza para simular 100ms de latencia en una interfaz de red para pruebas?

</div>
<div class="flashcard-back">

**R:** b) `tc qdisc add dev eth0 root netem delay 100ms`. La qdisc `netem` (Network Emulator) permite simular condiciones de red como latencia, perdida de paquetes, duplicacion y reordenamiento. Es especialmente util para pruebas. `tbf` sirve para limitar ancho de banda, y `htb` para control de ancho de banda jerarquico, pero ninguno de los dos simula latencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-005">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre las direcciones IPv6 link-local es correcta?

</div>
<div class="flashcard-back">

**R:** b) Comienzan con el prefijo fe80:: y se configuran automaticamente en cada interfaz. Las direcciones link-local (fe80::/10) se generan automaticamente en cada interfaz de red IPv6 habilitada, sin necesidad de configuracion manual ni servidor DHCP. Son validas unicamente en el segmento de red local (no enrutables). Son esenciales para el funcionamiento de NDP (Neighbor Discovery Protocol) y la comunicacion local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-006">
<div class="flashcard-front">

**P:** Que comando crea un tunel GRE con IP remota 203.0.113.1 e IP local 198.51.100.1?

</div>
<div class="flashcard-back">

**R:** b) `ip tunnel add gre1 mode gre remote 203.0.113.1 local 198.51.100.1`. El comando `ip tunnel add` crea un tunel especificando el nombre (`gre1`), el modo (`gre`), la IP remota del otro extremo (`remote`) y la IP local de este extremo (`local`). Tras crearlo, se necesita asignar una IP al tunel y activarlo con `ip link set gre1 up`. La opcion a) tambien podria funcionar en versiones recientes pero la forma canonica es `ip tunnel add`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-007">
<div class="flashcard-front">

**P:** Que protocolo reemplaza a ARP en IPv6 para la resolucion de direcciones de capa 2?

</div>
<div class="flashcard-back">

**R:** b) NDP (Neighbor Discovery Protocol). NDP (Neighbor Discovery Protocol), definido en RFC 4861, reemplaza a ARP en IPv6. Utiliza mensajes ICMPv6 para la resolucion de direcciones (Neighbor Solicitation/Advertisement), descubrimiento de routers (Router Solicitation/Advertisement), deteccion de direcciones duplicadas (DAD) y redireccion. A diferencia de ARP que usa broadcast, NDP usa multicast.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-008">
<div class="flashcard-front">

**P:** Un administrador necesita crear un bridge que conecte eth0 y eth1. Cual es la secuencia correcta de comandos?

</div>
<div class="flashcard-back">

**R:** b) `ip link add name br0 type bridge && ip link set eth0 master br0 && ip link set eth1 master br0 && ip link set br0 up`. La secuencia correcta con herramientas modernas (iproute2) es: crear el bridge con `ip link add type bridge`, agregar cada interfaz con `ip link set IF master br0`, y finalmente activar el bridge con `ip link set br0 up`. La opcion a) usa herramientas legacy (brctl) y la sintaxis de addif no acepta multiples interfaces a la vez.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-009">
<div class="flashcard-front">

**P:** En que archivo se definen las tablas de enrutamiento personalizadas para su uso con policy routing?

</div>
<div class="flashcard-back">

**R:** b) `/etc/iproute2/rt_tables`. El archivo `/etc/iproute2/rt_tables` mapea numeros de tabla a nombres simbolicos. Las tablas predeterminadas son: 255 (local), 254 (main) y 253 (default). Para crear una tabla personalizada, se agrega una linea como `100 nombre_tabla`. Luego se pueden agregar rutas a esa tabla con `ip route add ... table nombre_tabla`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-010">
<div class="flashcard-front">

**P:** Que qdisc de tc se utiliza comunmente para limitar el ancho de banda de salida a una tasa fija?

</div>
<div class="flashcard-back">

**R:** c) `tbf`. TBF (Token Bucket Filter) es la qdisc mas sencilla para limitar el ancho de banda de salida a una tasa fija. Funciona como un cubo de tokens: los paquetes solo se transmiten si hay tokens disponibles, y los tokens se reponen a la tasa configurada. Ejemplo: `tc qdisc add dev eth0 root tbf rate 1mbit burst 32kbit latency 400ms`. `netem` simula condiciones de red, `sfq` distribuye equitativamente y `pfifo_fast` es la qdisc por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: El policy routing permite tener multiples gateways y elegir la ruta segun el ori...

</div>
<div class="flashcard-back">

**R:** El policy routing permite tener multiples gateways y elegir la ruta segun el origen del trafico. Es fundamental para escenarios con multiples ISP o redes complejas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: `/proc/sys/net/ipv4/ip_forward` es un archivo clave. Debe estar a `1` para que e...

</div>
<div class="flashcard-back">

**R:** `/proc/sys/net/ipv4/ip_forward` es un archivo clave. Debe estar a `1` para que el sistema actue como router. Para persistir el cambio se edita `/etc/sysctl.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: Las interfaces VLAN se nombran tipicamente como `interfaz.vlan_id` (ej: `eth0.10...

</div>
<div class="flashcard-back">

**R:** Las interfaces VLAN se nombran tipicamente como `interfaz.vlan_id` (ej: `eth0.100`). Se crean con `ip link add type vlan id N`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los modos de tunel principales: `gre`, `sit`, `ipip`. Los tuneles se crea...

</div>
<div class="flashcard-back">

**R:** Conoce los modos de tunel principales: `gre`, `sit`, `ipip`. Los tuneles se crean con `ip tunnel add` o `ip link add`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: Comprende los conceptos basicos de `tc`: qdisc, class y filter. Conoce al menos ...

</div>
<div class="flashcard-back">

**R:** Comprende los conceptos basicos de `tc`: qdisc, class y filter. Conoce al menos `tbf` para limitar ancho de banda y `netem` para simular condiciones de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-016">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los tipos de direcciones IPv6, especialmente link-local (fe80::) que siem...

</div>
<div class="flashcard-back">

**R:** Conoce los tipos de direcciones IPv6, especialmente link-local (fe80::) que siempre esta presente. Comprende que NDP reemplaza a ARP y que SLAAC permite autoconfig sin DHCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `local`?

</div>
<div class="flashcard-back">

**R:** 255

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `main`?

</div>
<div class="flashcard-back">

**R:** 254

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `default`?

</div>
<div class="flashcard-back">

**R:** 253

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `ip link add type vxlan`?

</div>
<div class="flashcard-back">

**R:** > **Para el examen:** Conoce los modos de tunel principales: `gre`, `sit`, `ipip`. Los tuneles se crean con `ip tunnel add` o `ip link add`.  ## Traffic shaping con tc  El comando `tc` (traffic control) permite controlar el ancho de banda, la latencia y la priorizacion del trafico de red.  ### Conceptos basicos de tc  - **qdisc:** Disciplina de colas (queueing discipline), algoritmo que gestiona las colas de paquetes - **class:** Subdivision de un qdisc para clasificar trafico - **filter:** Regla que asigna paquetes a clases  ### Ejemplos de tc  ```bash # Ver la configuracion actual de tc tc qdisc show dev eth0 tc class show dev eth0 tc filter show dev eth0  # Limitar el ancho de banda de salida a 1 Mbit/s usando TBF tc qdisc add dev eth0 root tbf rate 1mbit burst 32kbit latency 400ms  # Usar HTB (Hierarchical Token Bucket) para control mas avanzado tc qdisc add dev eth0 root handle 1: htb default 30  # Crear clase con ancho de banda garantizado tc class add dev eth0 parent 1: classid 1:1 htb rate 10mbit ceil 10mbit  # Subclase para trafico prioritario tc class add dev eth0 parent 1:1 classid 1:10 htb rate 5mbit ceil 10mbit  # Subclase para trafico normal tc class add dev eth0 parent 1:1 classid 1:30 htb rate 3mbit ceil 10mbit  # Filtro para asignar trafico al puerto 80 a la clase prioritaria tc filter add dev eth0 parent 1: protocol ip prio 1 u32 \   match ip dport 80 0xffff flowid 1:10  # Simular latencia (util para pruebas) tc qdisc add dev eth0 root netem delay 100ms  # Simular perdida de paquetes tc qdisc add dev eth0 root netem loss 10%  # Eliminar toda la configuracion tc tc qdisc del dev eth0 root ```  ### Qdiscs comunes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-021">
<div class="flashcard-front">

**P:** Que hace el comando `pfifo_fast`?

</div>
<div class="flashcard-back">

**R:** FIFO rapido con prioridades

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-022">
<div class="flashcard-front">

**P:** Que es/son VLANs (Virtual LANs)?

</div>
<div class="flashcard-back">

**R:** Las VLANs permiten segmentar una red fisica en multiples redes logicas usando etiquetado 802.1Q.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-023">
<div class="flashcard-front">

**P:** Que es/son Bridges (puentes de red)?

</div>
<div class="flashcard-back">

**R:** Un bridge conecta dos o mas segmentos de red a nivel de capa 2 (enlace de datos), funcionando como un switch virtual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.2">
</div>

<div class="flashcard" data-id="205.2-fc-024">
<div class="flashcard-front">

**P:** Que es/son Traffic shaping con tc?

</div>
<div class="flashcard-back">

**R:** El comando `tc` (traffic control) permite controlar el ancho de banda, la latencia y la priorizacion del trafico de red.

</div>
</div>

---

