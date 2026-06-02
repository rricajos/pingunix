---
title: "334.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "334.1"
---

# Flashcards: 334.1 - Hardening De Red

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl habilita la proteccion contra ataques SYN flood?

</div>
<div class="flashcard-back">

**R:** b). `net.ipv4.tcp_syncookies = 1`  TCP SYN cookies es un mecanismo que permite al servidor responder a conexiones SYN sin mantener estado en memoria, protegiendo contra ataques SYN flood que intentan agotar los recursos del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que hace el parametro `net.ipv4.conf.all.rp_filter = 1`?

</div>
<div class="flashcard-back">

**R:** b). Activa el reverse path filtering, rechazando paquetes con IP de origen falsificada  El Reverse Path Filtering verifica que la direccion de origen de cada paquete recibido sea alcanzable a traves de la interfaz por la que llego. El valor 1 (strict) requiere coincidencia exacta de interfaz; el valor 2 (loose) solo requiere que exista alguna ruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-003">
<div class="flashcard-front">

**P:** En TCP Wrappers, ¿cual es el orden de evaluacion entre hosts.allow y hosts.deny?

</div>
<div class="flashcard-back">

**R:** b). hosts.allow se evalua primero; si no coincide, se evalua hosts.deny  El flujo es: 1) Si coincide en hosts.allow -> PERMITIDO. 2) Si coincide en hosts.deny -> DENEGADO. 3) Si no coincide en ninguno -> PERMITIDO (por defecto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando de nftables crea una cadena de entrada con politica de descarte por defecto?

</div>
<div class="flashcard-back">

**R:** b). `nft add chain inet filtro entrada { type filter hook input priority 0 ; policy drop ; }`  En nftables, las cadenas base requieren especificar type (filter/nat/route), hook (input/output/forward), priority y policy dentro de llaves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que modulo de iptables permite limitar el numero de conexiones nuevas a un servicio en un periodo de tiempo?

</div>
<div class="flashcard-back">

**R:** c). `recent`  El modulo `recent` mantiene una lista de IPs recientes y permite establecer umbrales de conexion por IP en un periodo. El modulo `limit` limita la tasa global, no por IP. `hashlimit` combina ambas funcionalidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que comando crea un namespace de red aislado llamado "seguro"?

</div>
<div class="flashcard-back">

**R:** b). `ip netns add seguro`  `ip netns add` crea un nuevo namespace de red con su propio stack de red aislado (interfaces, tabla de rutas, reglas de firewall, etc.). Se ejecutan comandos dentro con `ip netns exec seguro comando`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl deshabilita completamente IPv6 en todas las interfaces?

</div>
<div class="flashcard-back">

**R:** b). `net.ipv6.conf.all.disable_ipv6 = 1`  Este parametro deshabilita IPv6 en todas las interfaces. Tambien se recomienda establecer `net.ipv6.conf.default.disable_ipv6 = 1` para que las nuevas interfaces tambien lo tengan deshabilitado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que familia de nftables permite crear reglas que aplican tanto a IPv4 como a IPv6?

</div>
<div class="flashcard-back">

**R:** c). `inet`  La familia `inet` en nftables es una familia dual-stack que aplica las reglas tanto a trafico IPv4 como IPv6, evitando duplicar reglas. Las familias `ip` e `ip6` solo aplican a su respectivo protocolo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-009">
<div class="flashcard-front">

**P:** ¿Para que sirve el comando `conntrack -L`?

</div>
<div class="flashcard-back">

**R:** b). Lista todas las conexiones rastreadas por el sistema de connection tracking  `conntrack -L` muestra la tabla de seguimiento de conexiones del kernel, incluyendo estado (ESTABLISHED, TIME_WAIT, etc.), direcciones de origen y destino, y puertos de cada conexion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl registra paquetes con direcciones IP de origen imposibles (paquetes marcianos)?

</div>
<div class="flashcard-back">

**R:** b). `net.ipv4.conf.all.log_martians = 1`  Los "paquetes marcianos" son aquellos con direcciones IP de origen imposibles o no rutables. `log_martians` registra estos paquetes en el log del kernel, util para detectar intentos de spoofing o errores de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que diferencia existe entre `rp_filter=1` (strict) y `rp_filter=2` (loose)?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Con `rp_filter=1` (strict), el kernel verifica que la direccion de origen del paquete sea alcanzable a traves de la misma interfaz por la que llego. Con `rp_filter=2` (loose), solo verifica que exista alguna ruta hacia la IP de origen en la tabla de enrutamiento, sin importar la interfaz. El modo strict es mas seguro pero puede causar problemas en redes con enrutamiento asimetrico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl deshabilita el reenvio de paquetes IPv4, lo cual es recomendable cuando el servidor no actua como router?

</div>
<div class="flashcard-back">

**R:** a) Correcta. `net.ipv4.ip_forward = 0` deshabilita el reenvio de paquetes entre interfaces de red. Si el sistema no actua como router o gateway, debe estar deshabilitado para evitar que el servidor sea usado como punto de rebote en ataques de red. Para IPv6, el parametro equivalente es `net.ipv6.conf.all.forwarding = 0`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-013">
<div class="flashcard-front">

**P:** En TCP Wrappers, ¿que ocurre cuando una conexion no coincide con ninguna regla en `/etc/hosts.allow` ni en `/etc/hosts.deny`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Si una conexion no coincide con ninguna regla en ninguno de los dos archivos, se permite por defecto. Por esta razon, la practica recomendada de seguridad es añadir `ALL: ALL` en `/etc/hosts.deny` para denegar todo por defecto, y luego definir las excepciones especificas en `/etc/hosts.allow`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que herramienta monitoriza cambios en las asociaciones IP/MAC de la tabla ARP para detectar posibles ataques de ARP spoofing?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `arpwatch` es un demonio que monitoriza la actividad ARP de la red, detectando cambios en las asociaciones IP/MAC y alertando al administrador por email o syslog. Esto permite detectar ataques de ARP spoofing/poisoning donde un atacante intenta asociar su MAC a la IP de otro dispositivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando crea un par de interfaces virtuales (veth) para conectar dos network namespaces?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `ip link add veth0 type veth peer name veth1` crea un par de interfaces virtuales Ethernet conectadas entre si (como un cable virtual). Luego se puede mover una de las interfaces a un namespace diferente con `ip link set veth1 netns nombre_ns` para establecer comunicacion entre namespaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl rechaza los paquetes con source routing, evitando que un atacante pueda predeterminar la ruta de un paquete?

</div>
<div class="flashcard-back">

**R:** a) Correcta. `net.ipv4.conf.all.accept_source_route = 0` rechaza paquetes que incluyen opciones de source routing (IP Options). El source routing permite al emisor especificar la ruta exacta que debe seguir el paquete, lo cual puede ser explotado para evadir firewalls o redireccionar trafico a traves de redes comprometidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-017">
<div class="flashcard-front">

**P:** Un administrador desea deshabilitar IPv6 completamente a traves de parametros del kernel en GRUB. ¿Que linea debe añadir en `/etc/default/grub`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El parametro de kernel `ipv6.disable=1` deshabilita completamente el modulo IPv6 desde el arranque. Despues de modificar `/etc/default/grub`, se debe regenerar la configuracion de GRUB con `grub2-mkconfig -o /boot/grub2/grub.cfg` (o `update-grub` en Debian/Ubuntu).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que parametro sysctl protege contra ataques Smurf al ignorar los pings enviados a direcciones broadcast?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `net.ipv4.icmp_echo_ignore_broadcasts = 1` ignora las peticiones ICMP echo (ping) enviadas a direcciones broadcast o multicast. Los ataques Smurf envian pings falsificados a la direccion broadcast de una red, haciendo que todos los hosts respondan a la victima, amplificando el trafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que regla en nftables permite limitar la tasa de nuevas conexiones SSH a 3 por minuto?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La expresion `limit rate 3/minute` en nftables establece una limitacion de tasa. Combinada con `ct state new`, solo aplica a nuevas conexiones. Las conexiones que excedan el limite no coincidiran con esta regla y seran procesadas por las reglas siguientes (o la politica por defecto de la cadena).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que principio de seguridad de red establece que no se debe confiar en ningun trafico por defecto, independientemente de su origen?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El modelo Zero Trust asume que ninguna red, usuario o dispositivo es confiable por defecto, incluso si esta dentro del perimetro de la red corporativa. Todo acceso debe ser verificado, autenticado y autorizado explicitamente. Esto contrasta con el modelo tradicional de perimetro, donde se confia en el trafico interno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para aplicar de forma inmediata todos los parametros sysctl definidos en el archivo `/etc/sysctl.d/99-network-hardening.conf`. <input type="text" class="fill-blank" data-answer="sysctl -p /etc/sysctl.d/99-network-hardening.conf" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** sysctl -p /etc/sysctl.d/99-network-hardening.conf. `sysctl -p` lee y aplica los parametros del archivo especificado. Sin argumento, lee `/etc/sysctl.conf`. Es necesario ejecutar este comando despues de modificar archivos de configuracion sysctl para que los cambios surtan efecto sin reiniciar el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para añadir una entrada ARP estatica que asocie la IP `192.168.1.1` con la MAC `00:11:22:33:44:55` en la interfaz `eth0` usando el comando `ip`. <input type="text" class="fill-blank" data-answer="ip neigh add 192.168.1.1 lladdr 00:11:22:33:44:55 nud permanent dev eth0" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip neigh add 192.168.1.1 lladdr 00:11:22:33:44:55 nud permanent dev eth0. Las entradas ARP estaticas (`nud permanent`) previenen ataques de ARP spoofing para hosts criticos como el gateway. `lladdr` especifica la direccion MAC (link-layer address) y `nud permanent` indica que la entrada nunca expira ni se verifica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar el comando `ip addr show` dentro del namespace de red llamado `ns_aislado`. <input type="text" class="fill-blank" data-answer="ip netns exec ns_aislado ip addr show" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip netns exec ns_aislado ip addr show. `ip netns exec` permite ejecutar cualquier comando dentro del contexto de un network namespace especifico. El comando se ejecuta con el stack de red aislado del namespace, incluyendo sus propias interfaces, tabla de rutas y reglas de firewall.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando de nftables para crear un set de IPs llamado `ips_bloqueadas` de tipo IPv4 en la tabla `inet filtro`. <input type="text" class="fill-blank" data-answer="nft add set inet filtro ips_bloqueadas { type ipv4_addr ; }" data-alt="nft add set inet filtro ips_bloqueadas { type ipv4_addr \; }" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nft add set inet filtro ips_bloqueadas { type ipv4_addr ; }. Los sets de nftables permiten agrupar elementos del mismo tipo (direcciones IP, puertos, etc.) para uso eficiente en reglas. Una vez creado el set, se pueden añadir elementos con `nft add element` y referenciarlo en reglas con `@ips_bloqueadas`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-025">
<div class="flashcard-front">

**P:** Escribe la regla que se debe añadir en `/etc/hosts.deny` para denegar el acceso a todos los servicios desde cualquier origen por defecto. <input type="text" class="fill-blank" data-answer="ALL: ALL" data-alt="ALL:ALL" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ALL: ALL. La regla `ALL: ALL` en `/etc/hosts.deny` deniega el acceso a todos los servicios protegidos por TCP Wrappers desde cualquier origen. Esta es la practica recomendada de seguridad (deny by default), combinada con reglas especificas de permitir en `/etc/hosts.allow` para los servicios y clientes autorizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los parametros sysctl de red mas importantes, la diferencia entre nftable...

</div>
<div class="flashcard-back">

**R:** Conoce los parametros sysctl de red mas importantes, la diferencia entre nftables e iptables, y los TCP wrappers. Entiende la segmentacion de red y el aislamiento con namespaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `rp_filter=1` (strict mode) verifica que la ruta de retorno del paquete use la m...

</div>
<div class="flashcard-back">

**R:** `rp_filter=1` (strict mode) verifica que la ruta de retorno del paquete use la misma interfaz por la que llego. `rp_filter=2` (loose mode) solo verifica que exista alguna ruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: TCP Wrappers solo funciona con servicios compilados con soporte libwrap. Servici...

</div>
<div class="flashcard-back">

**R:** TCP Wrappers solo funciona con servicios compilados con soporte libwrap. Servicios modernos como Apache y Nginx NO lo usan. SSH (sshd) si lo soporta tipicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-029">
<div class="flashcard-front">

**P:** Que es/son nftables - Fundamentos?

</div>
<div class="flashcard-back">

**R:** nftables es el sucesor de iptables y es el framework de filtrado de paquetes recomendado en Linux moderno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son TCP Wrappers?

</div>
<div class="flashcard-back">

**R:** TCP Wrappers proporciona control de acceso basado en host para servicios que usan la biblioteca `libwrap`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Deshabilitacion de IPv6?

</div>
<div class="flashcard-back">

**R:** Si IPv6 no se utiliza, debe deshabilitarse para reducir la superficie de ataque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Network Namespace Isolation?

</div>
<div class="flashcard-back">

**R:** Los namespaces de red proporcionan aislamiento completo del stack de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.1">
</div>

<div class="flashcard" data-id="334.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Segmentacion de Red?

</div>
<div class="flashcard-back">

**R:** La segmentacion divide la red en zonas con diferentes niveles de confianza:

</div>
</div>

---

