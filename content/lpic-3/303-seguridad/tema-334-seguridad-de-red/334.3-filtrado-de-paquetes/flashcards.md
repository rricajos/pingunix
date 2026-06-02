---
title: "334.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "334.3"
---

# Flashcards: 334.3 - Filtrado De Paquetes

> 29 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-001">
<div class="flashcard-front">

**P:** ¿Que familia de nftables permite definir reglas que apliquen tanto a IPv4 como a IPv6 simultaneamente?

</div>
<div class="flashcard-back">

**R:** c). `inet`  La familia `inet` es dual-stack y permite definir reglas que aplican tanto a trafico IPv4 como IPv6 con una sola regla, evitando duplicacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando crea un set de nftables con elementos que expiran automaticamente despues de 1 hora?

</div>
<div class="flashcard-back">

**R:** b). `nft add set inet t ips { type ipv4_addr ; timeout 1h ; }`  La opcion `timeout` define el tiempo de vida de los elementos del set. Los elementos añadidos expiran automaticamente pasado el tiempo especificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando de nftables configura masquerade (SNAT dinamico) para trafico saliente por la interfaz eth0?

</div>
<div class="flashcard-back">

**R:** a). `nft add rule inet nat postrouting oif eth0 masquerade`  Masquerade se configura en el hook postrouting de la tabla nat. `oif eth0` especifica la interfaz de salida. Masquerade traduce automaticamente la IP de origen a la IP de la interfaz de salida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-004">
<div class="flashcard-front">

**P:** ¿Cual es la prioridad por defecto para cadenas de tipo filter en nftables?

</div>
<div class="flashcard-back">

**R:** c). 0  La prioridad 0 corresponde al filtrado standard (NF_IP_PRI_FILTER). Las prioridades menores (negativas) se procesan antes: raw (-300), mangle (-150), dnat (-100). Las mayores despues: snat (100).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando lista las reglas de nftables mostrando los handles necesarios para eliminar reglas individuales?

</div>
<div class="flashcard-back">

**R:** b). `nft -a list ruleset`  La opcion `-a` (handle) muestra el numero de handle de cada regla. Este handle se necesita para eliminar reglas individuales con `nft delete rule tabla cadena handle N`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-006">
<div class="flashcard-front">

**P:** ¿Que tipo de cadena nftables se necesita para configurar DNAT (port forwarding)?

</div>
<div class="flashcard-back">

**R:** b). `type nat hook prerouting`  El DNAT (Destination NAT) se configura en cadenas de tipo `nat` en el hook `prerouting`, ya que la direccion de destino debe modificarse antes de que se tome la decision de enrutamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando de nftables usa un map para asociar puertos con acciones (verdict map)?

</div>
<div class="flashcard-back">

**R:** b). `nft add rule inet t c tcp dport vmap @port_actions`  `vmap` (verdict map) permite asociar valores con acciones (accept, drop, jump) en un solo map, evitando multiples reglas individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-008">
<div class="flashcard-front">

**P:** ¿Que herramienta permite usar la sintaxis clasica de iptables pero con el backend de nftables?

</div>
<div class="flashcard-back">

**R:** b). `iptables-nft`  `iptables-nft` es una capa de compatibilidad que acepta la sintaxis clasica de iptables pero traduce las reglas internamente al framework nftables. Se puede verificar con `iptables -V` que mostrara "(nf_tables)".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando permite ver el numero maximo de conexiones rastreadas por el sistema de connection tracking?

</div>
<div class="flashcard-back">

**R:** b). `sysctl net.netfilter.nf_conntrack_max`  Este parametro del kernel define el numero maximo de conexiones que el sistema de connection tracking puede rastrear simultaneamente. Si se alcanza el limite, se descartan nuevas conexiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-010">
<div class="flashcard-front">

**P:** ¿Que comando de firewalld añade permanentemente el servicio HTTPS a la zona publica?

</div>
<div class="flashcard-back">

**R:** b). `firewall-cmd --zone=public --add-service=https --permanent`  La opcion `--permanent` hace que el cambio sea persistente tras reinicios. Sin `--permanent`, el cambio es temporal. Despues de un cambio permanente, se debe ejecutar `firewall-cmd --reload` para aplicarlo en la sesion actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-011">
<div class="flashcard-front">

**P:** ¿Que comando de nftables inserta una regla al principio de una cadena en lugar de añadirla al final?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `nft insert rule` inserta la regla al principio de la cadena, mientras que `nft add rule` la añade al final. El orden de las reglas es importante: nftables las evalua secuencialmente de arriba a abajo, y la primera regla que coincida se aplica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-012">
<div class="flashcard-front">

**P:** ¿Que familia de nftables opera a nivel de dispositivo de red y permite filtrar trafico en el hook `ingress` antes de cualquier otro procesamiento?

</div>
<div class="flashcard-back">

**R:** c) Correcta. La familia `netdev` opera a nivel de dispositivo de red y proporciona el hook `ingress`, que permite filtrar paquetes en la etapa mas temprana posible del procesamiento de red del kernel. Es util para filtrado de alto rendimiento, como mitigar ataques DDoS descartando paquetes antes de que entren al stack de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-013">
<div class="flashcard-front">

**P:** ¿Que comando de nftables elimina completamente una tabla y todo su contenido (cadenas, reglas, sets)?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `nft delete table` elimina la tabla completamente junto con todas sus cadenas, reglas y sets. `nft flush table` solo vacia el contenido (elimina reglas, sets y cadenas) pero mantiene la tabla. Es importante distinguir entre ambos: `flush` limpia, `delete` destruye.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-014">
<div class="flashcard-front">

**P:** En nftables, ¿que expresion se usa para descartar paquetes cuyo estado de connection tracking es "invalid"?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `ct state invalid drop` descarta paquetes que el sistema de connection tracking no puede asociar a ninguna conexion conocida. Estos paquetes pueden ser resultado de escaneos de puertos, paquetes corruptos o intentos de evasion. Es una regla de seguridad fundamental que debe colocarse al principio de las cadenas de filtrado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando de nftables configura una regla DNAT para redirigir el trafico que llega al puerto 8080 hacia el servidor interno 192.168.1.100 en el puerto 80?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El DNAT se configura en una cadena de tipo `nat` en el hook `prerouting`, ya que la direccion de destino debe modificarse antes de la decision de enrutamiento. `iif eth0` especifica la interfaz de entrada. `dnat to 192.168.1.100:80` cambia la IP y puerto de destino del paquete.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que opcion de `conntrack` permite ver los eventos de connection tracking en tiempo real?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `conntrack -E` (events) muestra los eventos de connection tracking en tiempo real: nuevas conexiones, cambios de estado, destruccion de entradas, etc. Es una herramienta muy util para diagnosticar problemas de conectividad relacionados con el firewall y el seguimiento de conexiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que comando de firewalld muestra las zonas activas y las interfaces asignadas a cada una?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `firewall-cmd --get-active-zones` muestra solo las zonas que tienen interfaces o fuentes asignadas, junto con la informacion de que interfaces pertenecen a cada zona. `--get-zones` lista todas las zonas disponibles (incluidas las inactivas), y `--get-default-zone` muestra la zona predeterminada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-018">
<div class="flashcard-front">

**P:** En nftables, ¿que tipo de set requiere la flag `interval` para poder almacenar rangos de direcciones IP o subredes CIDR?

</div>
<div class="flashcard-back">

**R:** c) Correcta. Los sets con la flag `interval` permiten almacenar rangos y subredes CIDR (como `192.168.0.0/16` o `10.0.0.1-10.0.0.100`). Sin esta flag, el set solo acepta valores individuales. Se crean con: `nft add set inet t s { type ipv4_addr ; flags interval ; }`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando guarda la configuracion actual de nftables en un archivo para hacerla persistente?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `nft list ruleset` muestra toda la configuracion actual de nftables en formato que puede ser cargado nuevamente. Redirigiendo la salida a `/etc/nftables.conf`, se persiste la configuracion. Al iniciar el servicio `nftables` (via systemd), se carga automaticamente este archivo con `nft -f /etc/nftables.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que rich rule de firewalld permite el acceso SSH solo desde la red 192.168.1.0/24?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Las rich rules de firewalld usan una sintaxis declarativa con `rule family` para especificar la familia de direcciones, `source address` para el origen, y `service name` para el servicio. Se añaden con `firewall-cmd --add-rich-rule='...'`. Tanto la opcion a) con `port` como la b) con `service` son validas, pero la b) es la forma mas limpia y habitual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando de nftables para crear una tabla llamada `mi_firewall` en la familia `inet`. <input type="text" class="fill-blank" data-answer="nft add table inet mi_firewall" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nft add table inet mi_firewall. `nft add table` crea una nueva tabla en la familia especificada. La familia `inet` permite que las reglas dentro de la tabla apliquen tanto a trafico IPv4 como IPv6. Las tablas son contenedores que agrupan cadenas y sets relacionados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando de nftables para añadir una regla que permita trafico SSH (puerto 22) solo desde la subred 192.168.1.0/24 en la cadena `entrada` de la tabla `inet mi_firewall`. <input type="text" class="fill-blank" data-answer="nft add rule inet mi_firewall entrada ip saddr 192.168.1.0/24 tcp dport 22 accept" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nft add rule inet mi_firewall entrada ip saddr 192.168.1.0/24 tcp dport 22 accept. La regla combina multiples criterios de matching: `ip saddr 192.168.1.0/24` filtra por IP de origen, `tcp dport 22` filtra por puerto de destino SSH, y `accept` es la accion final. Solo los paquetes que cumplen todos los criterios simultaneamente seran aceptados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar todas las conexiones rastreadas (flush) de la tabla de connection tracking. <input type="text" class="fill-blank" data-answer="conntrack -F" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** conntrack -F. `conntrack -F` (flush) elimina todas las entradas de la tabla de seguimiento de conexiones del kernel. Esto puede ser necesario tras cambios importantes en las reglas del firewall para forzar que las conexiones existentes sean reevaluadas. Usar con precaucion ya que puede interrumpir conexiones activas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para cargar un archivo de configuracion de nftables desde `/etc/nftables.conf`. <input type="text" class="fill-blank" data-answer="nft -f /etc/nftables.conf" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nft -f /etc/nftables.conf. La opcion `-f` (file) de nft carga y ejecuta las reglas desde un archivo de configuracion. Este es el metodo utilizado por el servicio systemd `nftables` para restaurar las reglas al arrancar el sistema. El archivo debe contener comandos nftables validos en formato de script.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de firewalld para recargar la configuracion despues de realizar cambios permanentes. <input type="text" class="fill-blank" data-answer="firewall-cmd --reload" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** firewall-cmd --reload. `firewall-cmd --reload` recarga la configuracion permanente de firewalld, aplicando todos los cambios realizados con la opcion `--permanent`. Sin ejecutar `--reload`, los cambios permanentes no se aplican a la configuracion en ejecucion hasta el proximo reinicio del servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5. Domina la sintaxis de nftables (familias, tablas, cad...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5. Domina la sintaxis de nftables (familias, tablas, cadenas, reglas, sets, maps) y entiende la transicion desde iptables. Conoce tambien firewalld con backend nftables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Los sets y maps son una de las ventajas principales de nftables sobre iptables. ...

</div>
<div class="flashcard-back">

**R:** Los sets y maps son una de las ventajas principales de nftables sobre iptables. Permiten matching eficiente sin duplicar reglas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `filter`?

</div>
<div class="flashcard-back">

**R:** Filtrado de paquetes (aceptar/descartar)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.3">
</div>

<div class="flashcard" data-id="334.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `nat`?

</div>
<div class="flashcard-back">

**R:** Traduccion de direcciones de red

</div>
</div>

---

