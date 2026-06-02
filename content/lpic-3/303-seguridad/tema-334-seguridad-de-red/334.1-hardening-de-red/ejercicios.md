---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "334 - Seguridad de Red"
tema: "334.1 - Hardening de red"
subtema: "334.1"
peso: 4
tags:
  - lpic-3
  - tema-334
  - nftables
  - iptables
  - sysctl
---

# Ejercicios - 334.1 Hardening de Red

### Pregunta 1
¿Que parametro sysctl habilita la proteccion contra ataques SYN flood?

a) `net.ipv4.tcp_syn_protect = 1`
b) `net.ipv4.tcp_syncookies = 1`
c) `net.ipv4.tcp_flood_protection = 1`
d) `net.ipv4.syn_cookies_enable = 1`

<details><summary>Respuesta</summary>

**b)** `net.ipv4.tcp_syncookies = 1`

TCP SYN cookies es un mecanismo que permite al servidor responder a conexiones SYN sin mantener estado en memoria, protegiendo contra ataques SYN flood que intentan agotar los recursos del servidor.
</details>

### Pregunta 2
¿Que hace el parametro `net.ipv4.conf.all.rp_filter = 1`?

a) Filtra paquetes por protocolo
b) Activa el reverse path filtering, rechazando paquetes con IP de origen falsificada
c) Filtra paquetes duplicados
d) Bloquea paquetes fragmentados

<details><summary>Respuesta</summary>

**b)** Activa el reverse path filtering, rechazando paquetes con IP de origen falsificada

El Reverse Path Filtering verifica que la direccion de origen de cada paquete recibido sea alcanzable a traves de la interfaz por la que llego. El valor 1 (strict) requiere coincidencia exacta de interfaz; el valor 2 (loose) solo requiere que exista alguna ruta.
</details>

### Pregunta 3
En TCP Wrappers, ¿cual es el orden de evaluacion entre hosts.allow y hosts.deny?

a) hosts.deny se evalua primero, luego hosts.allow
b) hosts.allow se evalua primero; si no coincide, se evalua hosts.deny
c) Se evaluan ambos simultaneamente
d) El orden depende de la configuracion en /etc/nsswitch.conf

<details><summary>Respuesta</summary>

**b)** hosts.allow se evalua primero; si no coincide, se evalua hosts.deny

El flujo es: 1) Si coincide en hosts.allow -> PERMITIDO. 2) Si coincide en hosts.deny -> DENEGADO. 3) Si no coincide en ninguno -> PERMITIDO (por defecto).
</details>

### Pregunta 4
¿Que comando de nftables crea una cadena de entrada con politica de descarte por defecto?

a) `nft create chain inet filtro entrada policy drop`
b) `nft add chain inet filtro entrada { type filter hook input priority 0 ; policy drop ; }`
c) `nft chain inet filtro entrada --policy DROP`
d) `nft add filter inet entrada DROP`

<details><summary>Respuesta</summary>

**b)** `nft add chain inet filtro entrada { type filter hook input priority 0 ; policy drop ; }`

En nftables, las cadenas base requieren especificar type (filter/nat/route), hook (input/output/forward), priority y policy dentro de llaves.
</details>

### Pregunta 5
¿Que modulo de iptables permite limitar el numero de conexiones nuevas a un servicio en un periodo de tiempo?

a) `conntrack`
b) `limit`
c) `recent`
d) `hashlimit`

<details><summary>Respuesta</summary>

**c)** `recent`

El modulo `recent` mantiene una lista de IPs recientes y permite establecer umbrales de conexion por IP en un periodo. El modulo `limit` limita la tasa global, no por IP. `hashlimit` combina ambas funcionalidades.
</details>

### Pregunta 6
¿Que comando crea un namespace de red aislado llamado "seguro"?

a) `netns create seguro`
b) `ip netns add seguro`
c) `ip namespace create seguro`
d) `nsenter --net seguro`

<details><summary>Respuesta</summary>

**b)** `ip netns add seguro`

`ip netns add` crea un nuevo namespace de red con su propio stack de red aislado (interfaces, tabla de rutas, reglas de firewall, etc.). Se ejecutan comandos dentro con `ip netns exec seguro comando`.
</details>

### Pregunta 7
¿Que parametro sysctl deshabilita completamente IPv6 en todas las interfaces?

a) `net.ipv6.disable = 1`
b) `net.ipv6.conf.all.disable_ipv6 = 1`
c) `net.ipv6.conf.all.ipv6_disable = 1`
d) `net.ipv6.enabled = 0`

<details><summary>Respuesta</summary>

**b)** `net.ipv6.conf.all.disable_ipv6 = 1`

Este parametro deshabilita IPv6 en todas las interfaces. Tambien se recomienda establecer `net.ipv6.conf.default.disable_ipv6 = 1` para que las nuevas interfaces tambien lo tengan deshabilitado.
</details>

### Pregunta 8
¿Que familia de nftables permite crear reglas que aplican tanto a IPv4 como a IPv6?

a) `ip`
b) `ip6`
c) `inet`
d) `dual`

<details><summary>Respuesta</summary>

**c)** `inet`

La familia `inet` en nftables es una familia dual-stack que aplica las reglas tanto a trafico IPv4 como IPv6, evitando duplicar reglas. Las familias `ip` e `ip6` solo aplican a su respectivo protocolo.
</details>

### Pregunta 9
¿Para que sirve el comando `conntrack -L`?

a) Lista las reglas de firewall activas
b) Lista todas las conexiones rastreadas por el sistema de connection tracking
c) Lista las interfaces de red
d) Lista las rutas de red

<details><summary>Respuesta</summary>

**b)** Lista todas las conexiones rastreadas por el sistema de connection tracking

`conntrack -L` muestra la tabla de seguimiento de conexiones del kernel, incluyendo estado (ESTABLISHED, TIME_WAIT, etc.), direcciones de origen y destino, y puertos de cada conexion.
</details>

### Pregunta 10
¿Que parametro sysctl registra paquetes con direcciones IP de origen imposibles (paquetes marcianos)?

a) `net.ipv4.conf.all.log_impossible = 1`
b) `net.ipv4.conf.all.log_martians = 1`
c) `net.ipv4.log_invalid_source = 1`
d) `net.ipv4.conf.all.log_spoofed = 1`

<details><summary>Respuesta</summary>

**b)** `net.ipv4.conf.all.log_martians = 1`

Los "paquetes marcianos" son aquellos con direcciones IP de origen imposibles o no rutables. `log_martians` registra estos paquetes en el log del kernel, util para detectar intentos de spoofing o errores de configuracion.
</details>

### Pregunta 11

¿Que diferencia existe entre `rp_filter=1` (strict) y `rp_filter=2` (loose)?

a) Strict solo funciona con IPv6; loose solo con IPv4
b) Strict verifica que la ruta de retorno use la misma interfaz; loose solo verifica que exista alguna ruta
c) Strict bloquea el paquete; loose solo lo registra
d) No hay diferencia funcional, solo de rendimiento

<details><summary>Respuesta</summary>

**b) Correcta**

Con `rp_filter=1` (strict), el kernel verifica que la direccion de origen del paquete sea alcanzable a traves de la misma interfaz por la que llego. Con `rp_filter=2` (loose), solo verifica que exista alguna ruta hacia la IP de origen en la tabla de enrutamiento, sin importar la interfaz. El modo strict es mas seguro pero puede causar problemas en redes con enrutamiento asimetrico.

</details>

### Pregunta 12

¿Que parametro sysctl deshabilita el reenvio de paquetes IPv4, lo cual es recomendable cuando el servidor no actua como router?

a) `net.ipv4.ip_forward = 0`
b) `net.ipv4.forwarding_disable = 1`
c) `net.ipv4.no_forward = 1`
d) `net.ipv4.conf.all.routing = 0`

<details><summary>Respuesta</summary>

**a) Correcta**

`net.ipv4.ip_forward = 0` deshabilita el reenvio de paquetes entre interfaces de red. Si el sistema no actua como router o gateway, debe estar deshabilitado para evitar que el servidor sea usado como punto de rebote en ataques de red. Para IPv6, el parametro equivalente es `net.ipv6.conf.all.forwarding = 0`.

</details>

### Pregunta 13

En TCP Wrappers, ¿que ocurre cuando una conexion no coincide con ninguna regla en `/etc/hosts.allow` ni en `/etc/hosts.deny`?

a) La conexion se deniega por defecto
b) La conexion se permite por defecto
c) Se registra un error y se cierra la conexion
d) Se solicita autenticacion adicional

<details><summary>Respuesta</summary>

**b) Correcta**

Si una conexion no coincide con ninguna regla en ninguno de los dos archivos, se permite por defecto. Por esta razon, la practica recomendada de seguridad es añadir `ALL: ALL` en `/etc/hosts.deny` para denegar todo por defecto, y luego definir las excepciones especificas en `/etc/hosts.allow`.

</details>

### Pregunta 14

¿Que herramienta monitoriza cambios en las asociaciones IP/MAC de la tabla ARP para detectar posibles ataques de ARP spoofing?

a) arping
b) arpwatch
c) arp-scan
d) nmap

<details><summary>Respuesta</summary>

**b) Correcta**

`arpwatch` es un demonio que monitoriza la actividad ARP de la red, detectando cambios en las asociaciones IP/MAC y alertando al administrador por email o syslog. Esto permite detectar ataques de ARP spoofing/poisoning donde un atacante intenta asociar su MAC a la IP de otro dispositivo.

</details>

### Pregunta 15

¿Que comando crea un par de interfaces virtuales (veth) para conectar dos network namespaces?

a) `ip link add type tunnel peer name tun1`
b) `ip link add veth0 type veth peer name veth1`
c) `ip netns connect veth0 veth1`
d) `ip link create pair veth0 veth1`

<details><summary>Respuesta</summary>

**b) Correcta**

`ip link add veth0 type veth peer name veth1` crea un par de interfaces virtuales Ethernet conectadas entre si (como un cable virtual). Luego se puede mover una de las interfaces a un namespace diferente con `ip link set veth1 netns nombre_ns` para establecer comunicacion entre namespaces.

</details>

### Pregunta 16

¿Que parametro sysctl rechaza los paquetes con source routing, evitando que un atacante pueda predeterminar la ruta de un paquete?

a) `net.ipv4.conf.all.accept_source_route = 0`
b) `net.ipv4.conf.all.source_route_reject = 1`
c) `net.ipv4.conf.all.no_source_route = 1`
d) `net.ipv4.route.source_filtering = 1`

<details><summary>Respuesta</summary>

**a) Correcta**

`net.ipv4.conf.all.accept_source_route = 0` rechaza paquetes que incluyen opciones de source routing (IP Options). El source routing permite al emisor especificar la ruta exacta que debe seguir el paquete, lo cual puede ser explotado para evadir firewalls o redireccionar trafico a traves de redes comprometidas.

</details>

### Pregunta 17

Un administrador desea deshabilitar IPv6 completamente a traves de parametros del kernel en GRUB. ¿Que linea debe añadir en `/etc/default/grub`?

a) `GRUB_CMDLINE_LINUX="disable_ipv6=1"`
b) `GRUB_CMDLINE_LINUX="ipv6.disable=1"`
c) `GRUB_CMDLINE_LINUX="net.ipv6.disable=1"`
d) `GRUB_CMDLINE_LINUX="noipv6"`

<details><summary>Respuesta</summary>

**b) Correcta**

El parametro de kernel `ipv6.disable=1` deshabilita completamente el modulo IPv6 desde el arranque. Despues de modificar `/etc/default/grub`, se debe regenerar la configuracion de GRUB con `grub2-mkconfig -o /boot/grub2/grub.cfg` (o `update-grub` en Debian/Ubuntu).

</details>

### Pregunta 18

¿Que parametro sysctl protege contra ataques Smurf al ignorar los pings enviados a direcciones broadcast?

a) `net.ipv4.icmp_echo_ignore_all = 1`
b) `net.ipv4.icmp_echo_ignore_broadcasts = 1`
c) `net.ipv4.icmp_broadcast_ignore = 1`
d) `net.ipv4.icmp_no_broadcast = 1`

<details><summary>Respuesta</summary>

**b) Correcta**

`net.ipv4.icmp_echo_ignore_broadcasts = 1` ignora las peticiones ICMP echo (ping) enviadas a direcciones broadcast o multicast. Los ataques Smurf envian pings falsificados a la direccion broadcast de una red, haciendo que todos los hosts respondan a la victima, amplificando el trafico.

</details>

### Pregunta 19

¿Que regla en nftables permite limitar la tasa de nuevas conexiones SSH a 3 por minuto?

a) `nft add rule inet filtro entrada tcp dport 22 ct state new rate 3/minute accept`
b) `nft add rule inet filtro entrada tcp dport 22 ct state new limit rate 3/minute accept`
c) `nft add rule inet filtro entrada tcp dport 22 limit rate 3/minute accept`
d) `nft add rule inet filtro entrada tcp dport 22 throttle 3/minute accept`

<details><summary>Respuesta</summary>

**b) Correcta**

La expresion `limit rate 3/minute` en nftables establece una limitacion de tasa. Combinada con `ct state new`, solo aplica a nuevas conexiones. Las conexiones que excedan el limite no coincidiran con esta regla y seran procesadas por las reglas siguientes (o la politica por defecto de la cadena).

</details>

### Pregunta 20

¿Que principio de seguridad de red establece que no se debe confiar en ningun trafico por defecto, independientemente de su origen?

a) Defensa en profundidad
b) Minimo privilegio
c) Zero Trust
d) Separacion de funciones

<details><summary>Respuesta</summary>

**c) Correcta**

El modelo Zero Trust asume que ninguna red, usuario o dispositivo es confiable por defecto, incluso si esta dentro del perimetro de la red corporativa. Todo acceso debe ser verificado, autenticado y autorizado explicitamente. Esto contrasta con el modelo tradicional de perimetro, donde se confia en el trafico interno.

</details>

### Pregunta 21

Escribe el comando para aplicar de forma inmediata todos los parametros sysctl definidos en el archivo `/etc/sysctl.d/99-network-hardening.conf`.

<input type="text" class="fill-blank" data-answer="sysctl -p /etc/sysctl.d/99-network-hardening.conf" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sysctl -p /etc/sysctl.d/99-network-hardening.conf**

`sysctl -p` lee y aplica los parametros del archivo especificado. Sin argumento, lee `/etc/sysctl.conf`. Es necesario ejecutar este comando despues de modificar archivos de configuracion sysctl para que los cambios surtan efecto sin reiniciar el sistema.

</details>

### Pregunta 22

Escribe el comando para añadir una entrada ARP estatica que asocie la IP `192.168.1.1` con la MAC `00:11:22:33:44:55` en la interfaz `eth0` usando el comando `ip`.

<input type="text" class="fill-blank" data-answer="ip neigh add 192.168.1.1 lladdr 00:11:22:33:44:55 nud permanent dev eth0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip neigh add 192.168.1.1 lladdr 00:11:22:33:44:55 nud permanent dev eth0**

Las entradas ARP estaticas (`nud permanent`) previenen ataques de ARP spoofing para hosts criticos como el gateway. `lladdr` especifica la direccion MAC (link-layer address) y `nud permanent` indica que la entrada nunca expira ni se verifica.

</details>

### Pregunta 23

Escribe el comando para ejecutar el comando `ip addr show` dentro del namespace de red llamado `ns_aislado`.

<input type="text" class="fill-blank" data-answer="ip netns exec ns_aislado ip addr show" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip netns exec ns_aislado ip addr show**

`ip netns exec` permite ejecutar cualquier comando dentro del contexto de un network namespace especifico. El comando se ejecuta con el stack de red aislado del namespace, incluyendo sus propias interfaces, tabla de rutas y reglas de firewall.

</details>

### Pregunta 24

Escribe el comando de nftables para crear un set de IPs llamado `ips_bloqueadas` de tipo IPv4 en la tabla `inet filtro`.

<input type="text" class="fill-blank" data-answer="nft add set inet filtro ips_bloqueadas { type ipv4_addr ; }" data-alt="nft add set inet filtro ips_bloqueadas { type ipv4_addr \; }" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nft add set inet filtro ips_bloqueadas { type ipv4_addr ; }**

Los sets de nftables permiten agrupar elementos del mismo tipo (direcciones IP, puertos, etc.) para uso eficiente en reglas. Una vez creado el set, se pueden añadir elementos con `nft add element` y referenciarlo en reglas con `@ips_bloqueadas`.

</details>

### Pregunta 25

Escribe la regla que se debe añadir en `/etc/hosts.deny` para denegar el acceso a todos los servicios desde cualquier origen por defecto.

<input type="text" class="fill-blank" data-answer="ALL: ALL" data-alt="ALL:ALL" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ALL: ALL**

La regla `ALL: ALL` en `/etc/hosts.deny` deniega el acceso a todos los servicios protegidos por TCP Wrappers desde cualquier origen. Esta es la practica recomendada de seguridad (deny by default), combinada con reglas especificas de permitir en `/etc/hosts.allow` para los servicios y clientes autorizados.

</details>
