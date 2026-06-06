---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "334 - Seguridad de Red"
tema: "334.3 - Filtrado de paquetes"
subtema: "334.3"
peso: 5
tags:
  - lpic-3
  - tema-334
  - nftables
  - iptables
  - firewalld
  - nat
---

# Ejercicios - 334.3 Filtrado de Paquetes

### Pregunta 1
¿Que familia de nftables permite definir reglas que apliquen tanto a IPv4 como a IPv6 simultaneamente?

a) `ip`
b) `ip6`
c) `inet`
d) `bridge`

<details><summary>Respuesta</summary>

**c)** `inet`

La familia `inet` es dual-stack y permite definir reglas que aplican tanto a trafico IPv4 como IPv6 con una sola regla, evitando duplicacion.
</details>

### Pregunta 2
¿Que comando crea un set de nftables con elementos que expiran automaticamente despues de 1 hora?

a) `nft add set inet t ips { type ipv4_addr ; expire 1h ; }`
b) `nft add set inet t ips { type ipv4_addr ; timeout 1h ; }`
c) `nft add set inet t ips { type ipv4_addr ; ttl 3600 ; }`
d) `nft add set inet t ips { type ipv4_addr ; lifetime 1h ; }`

<details><summary>Respuesta</summary>

**b)** `nft add set inet t ips { type ipv4_addr ; timeout 1h ; }`

La opcion `timeout` define el tiempo de vida de los elementos del set. Los elementos añadidos expiran automaticamente pasado el tiempo especificado.
</details>

### Pregunta 3
¿Que comando de nftables configura masquerade (SNAT dinamico) para trafico saliente por la interfaz eth0?

a) `nft add rule inet nat postrouting oif eth0 masquerade`
b) `nft add rule inet nat prerouting oif eth0 masquerade`
c) `nft add rule inet filter output oif eth0 masquerade`
d) `nft add rule inet nat output oif eth0 snat dynamic`

<details><summary>Respuesta</summary>

**a)** `nft add rule inet nat postrouting oif eth0 masquerade`

Masquerade se configura en el hook postrouting de la tabla nat. `oif eth0` especifica la interfaz de salida. Masquerade traduce automaticamente la IP de origen a la IP de la interfaz de salida.
</details>

### Pregunta 4
¿Cual es la prioridad por defecto para cadenas de tipo filter en nftables?

a) -300
b) -100
c) 0
d) 100

<details><summary>Respuesta</summary>

**c)** 0

La prioridad 0 corresponde al filtrado standard (NF_IP_PRI_FILTER). Las prioridades menores (negativas) se procesan antes: raw (-300), mangle (-150), dnat (-100). Las mayores despues: snat (100).
</details>

### Pregunta 5
¿Que comando lista las reglas de nftables mostrando los handles necesarios para eliminar reglas individuales?

a) `nft list ruleset --handles`
b) `nft -a list ruleset`
c) `nft list ruleset -v`
d) `nft list ruleset --show-id`

<details><summary>Respuesta</summary>

**b)** `nft -a list ruleset`

La opcion `-a` (handle) muestra el numero de handle de cada regla. Este handle se necesita para eliminar reglas individuales con `nft delete rule tabla cadena handle N`.
</details>

### Pregunta 6
¿Que tipo de cadena nftables se necesita para configurar DNAT (port forwarding)?

a) `type filter hook prerouting`
b) `type nat hook prerouting`
c) `type route hook prerouting`
d) `type nat hook postrouting`

<details><summary>Respuesta</summary>

**b)** `type nat hook prerouting`

El DNAT (Destination NAT) se configura en cadenas de tipo `nat` en el hook `prerouting`, ya que la direccion de destino debe modificarse antes de que se tome la decision de enrutamiento.
</details>

### Pregunta 7
¿Que comando de nftables usa un map para asociar puertos con acciones (verdict map)?

a) `nft add rule inet t c tcp dport map @port_actions`
b) `nft add rule inet t c tcp dport vmap @port_actions`
c) `nft add rule inet t c tcp dport lookup @port_actions`
d) `nft add rule inet t c tcp dport match @port_actions`

<details><summary>Respuesta</summary>

**b)** `nft add rule inet t c tcp dport vmap @port_actions`

`vmap` (verdict map) permite asociar valores con acciones (accept, drop, jump) en un solo map, evitando multiples reglas individuales.
</details>

### Pregunta 8
¿Que herramienta permite usar la sintaxis clasica de iptables pero con el backend de nftables?

a) `iptables-legacy`
b) `iptables-nft`
c) `nft-iptables`
d) `iptables-translate`

<details><summary>Respuesta</summary>

**b)** `iptables-nft`

`iptables-nft` es una capa de compatibilidad que acepta la sintaxis clasica de iptables pero traduce las reglas internamente al framework nftables. Se puede verificar con `iptables -V` que mostrara "(nf_tables)".
</details>

### Pregunta 9
¿Que comando permite ver el numero maximo de conexiones rastreadas por el sistema de connection tracking?

a) `conntrack --max`
b) `sysctl net.netfilter.nf_conntrack_max`
c) `nft show conntrack limit`
d) `cat /proc/net/nf_conntrack_count`

<details><summary>Respuesta</summary>

**b)** `sysctl net.netfilter.nf_conntrack_max`

Este parametro del kernel define el numero maximo de conexiones que el sistema de connection tracking puede rastrear simultaneamente. Si se alcanza el limite, se descartan nuevas conexiones.
</details>

### Pregunta 10
¿Que comando de firewalld añade permanentemente el servicio HTTPS a la zona publica?

a) `firewall-cmd --add-service=https --zone=public`
b) `firewall-cmd --zone=public --add-service=https --permanent`
c) `firewall-cmd --permanent --zone=public --enable=https`
d) `firewall-cmd --zone=public --service=https --add --save`

<details><summary>Respuesta</summary>

**b)** `firewall-cmd --zone=public --add-service=https --permanent`

La opcion `--permanent` hace que el cambio sea persistente tras reinicios. Sin `--permanent`, el cambio es temporal. Despues de un cambio permanente, se debe ejecutar `firewall-cmd --reload` para aplicarlo en la sesion actual.
</details>

### Pregunta 11

¿Que comando de nftables inserta una regla al principio de una cadena en lugar de añadirla al final?

a) `nft prepend rule inet t c tcp dport 80 accept`
b) `nft insert rule inet t c tcp dport 80 accept`
c) `nft add rule --first inet t c tcp dport 80 accept`
d) `nft add rule inet t c position 0 tcp dport 80 accept`

<details><summary>Respuesta</summary>

**b) Correcta**

`nft insert rule` inserta la regla al principio de la cadena, mientras que `nft add rule` la añade al final. El orden de las reglas es importante: nftables las evalua secuencialmente de arriba a abajo, y la primera regla que coincida se aplica.

</details>

### Pregunta 12

¿Que familia de nftables opera a nivel de dispositivo de red y permite filtrar trafico en el hook `ingress` antes de cualquier otro procesamiento?

a) `bridge`
b) `inet`
c) `netdev`
d) `arp`

<details><summary>Respuesta</summary>

**c) Correcta**

La familia `netdev` opera a nivel de dispositivo de red y proporciona el hook `ingress`, que permite filtrar paquetes en la etapa mas temprana posible del procesamiento de red del kernel. Es util para filtrado de alto rendimiento, como mitigar ataques DDoS descartando paquetes antes de que entren al stack de red.

</details>

### Pregunta 13

¿Que comando de nftables elimina completamente una tabla y todo su contenido (cadenas, reglas, sets)?

a) `nft flush table inet mi_firewall`
b) `nft delete table inet mi_firewall`
c) `nft remove table inet mi_firewall`
d) `nft drop table inet mi_firewall`

<details><summary>Respuesta</summary>

**b) Correcta**

`nft delete table` elimina la tabla completamente junto con todas sus cadenas, reglas y sets. `nft flush table` solo vacia el contenido (elimina reglas, sets y cadenas) pero mantiene la tabla. Es importante distinguir entre ambos: `flush` limpia, `delete` destruye.

</details>

### Pregunta 14

En nftables, ¿que expresion se usa para descartar paquetes cuyo estado de connection tracking es "invalid"?

a) `ct state invalid reject`
b) `ct state invalid drop`
c) `ct status invalid drop`
d) `conntrack state invalid drop`

<details><summary>Respuesta</summary>

**b) Correcta**

`ct state invalid drop` descarta paquetes que el sistema de connection tracking no puede asociar a ninguna conexion conocida. Estos paquetes pueden ser resultado de escaneos de puertos, paquetes corruptos o intentos de evasion. Es una regla de seguridad fundamental que debe colocarse al principio de las cadenas de filtrado.

</details>

### Pregunta 15

¿Que comando de nftables configura una regla DNAT para redirigir el trafico que llega al puerto 8080 hacia el servidor interno 192.168.1.100 en el puerto 80?

a) `nft add rule inet nat postrouting tcp dport 8080 dnat to 192.168.1.100:80`
b) `nft add rule inet nat prerouting iif eth0 tcp dport 8080 dnat to 192.168.1.100:80`
c) `nft add rule inet filter prerouting tcp dport 8080 redirect to 192.168.1.100:80`
d) `nft add rule inet nat output tcp dport 8080 dnat to 192.168.1.100:80`

<details><summary>Respuesta</summary>

**b) Correcta**

El DNAT se configura en una cadena de tipo `nat` en el hook `prerouting`, ya que la direccion de destino debe modificarse antes de la decision de enrutamiento. `iif eth0` especifica la interfaz de entrada. `dnat to 192.168.1.100:80` cambia la IP y puerto de destino del paquete.

</details>

### Pregunta 16

¿Que opcion de `conntrack` permite ver los eventos de connection tracking en tiempo real?

a) `conntrack -L --realtime`
b) `conntrack -E`
c) `conntrack -W`
d) `conntrack --events`

<details><summary>Respuesta</summary>

**b) Correcta**

`conntrack -E` (events) muestra los eventos de connection tracking en tiempo real: nuevas conexiones, cambios de estado, destruccion de entradas, etc. Es una herramienta muy util para diagnosticar problemas de conectividad relacionados con el firewall y el seguimiento de conexiones.

</details>

### Pregunta 17

¿Que comando de firewalld muestra las zonas activas y las interfaces asignadas a cada una?

a) `firewall-cmd --list-zones`
b) `firewall-cmd --get-active-zones`
c) `firewall-cmd --zone-info`
d) `firewall-cmd --show-zones`

<details><summary>Respuesta</summary>

**b) Correcta**

`firewall-cmd --get-active-zones` muestra solo las zonas que tienen interfaces o fuentes asignadas, junto con la informacion de que interfaces pertenecen a cada zona. `--get-zones` lista todas las zonas disponibles (incluidas las inactivas), y `--get-default-zone` muestra la zona predeterminada.

</details>

### Pregunta 18

En nftables, ¿que tipo de set requiere la flag `interval` para poder almacenar rangos de direcciones IP o subredes CIDR?

a) Sets anonimos
b) Sets con timeout
c) Sets con intervalos
d) Sets concatenados

<details><summary>Respuesta</summary>

**c) Correcta**

Los sets con la flag `interval` permiten almacenar rangos y subredes CIDR (como `192.168.0.0/16` o `10.0.0.1-10.0.0.100`). Sin esta flag, el set solo acepta valores individuales. Se crean con: `nft add set inet t s { type ipv4_addr ; flags interval ; }`.

</details>

### Pregunta 19

¿Que comando guarda la configuracion actual de nftables en un archivo para hacerla persistente?

a) `nft save > /etc/nftables.conf`
b) `nft list ruleset > /etc/nftables.conf`
c) `nft export > /etc/nftables.conf`
d) `nft dump ruleset > /etc/nftables.conf`

<details><summary>Respuesta</summary>

**b) Correcta**

`nft list ruleset` muestra toda la configuracion actual de nftables en formato que puede ser cargado nuevamente. Redirigiendo la salida a `/etc/nftables.conf`, se persiste la configuracion. Al iniciar el servicio `nftables` (via systemd), se carga automaticamente este archivo con `nft -f /etc/nftables.conf`.

</details>

### Pregunta 20

¿Que rich rule de firewalld permite el acceso SSH solo desde la red 192.168.1.0/24?

a) `rule family="ipv4" source address="192.168.1.0/24" port port="22" protocol="tcp" accept`
b) `rule family="ipv4" source address="192.168.1.0/24" service name="ssh" accept`
c) `rule source="192.168.1.0/24" allow service ssh`
d) `rule ipv4 from 192.168.1.0/24 accept ssh`

<details><summary>Respuesta</summary>

**b) Correcta**

Las rich rules de firewalld usan una sintaxis declarativa con `rule family` para especificar la familia de direcciones, `source address` para el origen, y `service name` para el servicio. Se añaden con `firewall-cmd --add-rich-rule='...'`. Tanto la opcion a) con `port` como la b) con `service` son validas, pero la b) es la forma mas limpia y habitual.

</details>

### Pregunta 21

Escribe el comando de nftables para crear una tabla llamada `mi_firewall` en la familia `inet`.

<input type="text" class="fill-blank" data-answer="nft add table inet mi_firewall" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nft add table inet mi_firewall**

`nft add table` crea una nueva tabla en la familia especificada. La familia `inet` permite que las reglas dentro de la tabla apliquen tanto a trafico IPv4 como IPv6. Las tablas son contenedores que agrupan cadenas y sets relacionados.

</details>

### Pregunta 22

Escribe el comando de nftables para añadir una regla que permita trafico SSH (puerto 22) solo desde la subred 192.168.1.0/24 en la cadena `entrada` de la tabla `inet mi_firewall`.

<input type="text" class="fill-blank" data-answer="nft add rule inet mi_firewall entrada ip saddr 192.168.1.0/24 tcp dport 22 accept" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nft add rule inet mi_firewall entrada ip saddr 192.168.1.0/24 tcp dport 22 accept**

La regla combina multiples criterios de matching: `ip saddr 192.168.1.0/24` filtra por IP de origen, `tcp dport 22` filtra por puerto de destino SSH, y `accept` es la accion final. Solo los paquetes que cumplen todos los criterios simultaneamente seran aceptados.

</details>

### Pregunta 23

Escribe el comando para eliminar todas las conexiones rastreadas (flush) de la tabla de connection tracking.

<input type="text" class="fill-blank" data-answer="conntrack -F" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**conntrack -F**

`conntrack -F` (flush) elimina todas las entradas de la tabla de seguimiento de conexiones del kernel. Esto puede ser necesario tras cambios importantes en las reglas del firewall para forzar que las conexiones existentes sean reevaluadas. Usar con precaucion ya que puede interrumpir conexiones activas.

</details>

### Pregunta 24

Escribe el comando para cargar un archivo de configuracion de nftables desde `/etc/nftables.conf`.

<input type="text" class="fill-blank" data-answer="nft -f /etc/nftables.conf" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nft -f /etc/nftables.conf**

La opcion `-f` (file) de nft carga y ejecuta las reglas desde un archivo de configuracion. Este es el metodo utilizado por el servicio systemd `nftables` para restaurar las reglas al arrancar el sistema. El archivo debe contener comandos nftables validos en formato de script.

</details>

### Pregunta 25

Escribe el comando de firewalld para recargar la configuracion despues de realizar cambios permanentes.

<input type="text" class="fill-blank" data-answer="firewall-cmd --reload" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**firewall-cmd --reload**

`firewall-cmd --reload` recarga la configuracion permanente de firewalld, aplicando todos los cambios realizados con la opcion `--permanent`. Sin ejecutar `--reload`, los cambios permanentes no se aplican a la configuracion en ejecucion hasta el proximo reinicio del servicio.

</details>
