---
title: "205.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "205.1"
---

# Flashcards: 205.1 - Configuracion Basica De Red

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-001">
<div class="flashcard-front">

**P:** Que comando moderno reemplaza a `ifconfig` para mostrar las direcciones IP de todas las interfaces?

</div>
<div class="flashcard-back">

**R:** b) `ip addr show`. El comando `ip addr show` (o su forma abreviada `ip a`) del paquete iproute2 es el reemplazo moderno de `ifconfig`. Muestra todas las interfaces de red con sus direcciones IP, mascaras de red, direcciones MAC y otros atributos. `ifconfig` esta deprecado y puede no estar instalado por defecto en distribuciones modernas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-002">
<div class="flashcard-front">

**P:** En un archivo `/etc/sysconfig/network-scripts/ifcfg-eth0` de RHEL, que valor debe tener `BOOTPROTO` para configurar una IP estatica?

</div>
<div class="flashcard-back">

**R:** c) `none`. En los archivos ifcfg de RHEL/CentOS, `BOOTPROTO=none` indica que no se usa ningun protocolo automatico de asignacion, lo que equivale a una configuracion estatica. Los valores validos son `none` (estatica), `dhcp` (cliente DHCP) y `bootp` (protocolo BOOTP). No se usa `static` como valor, a pesar de ser intuitivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-003">
<div class="flashcard-front">

**P:** Que comando establece el hostname de forma persistente en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** c) `hostnamectl set-hostname servidor01`. El comando `hostnamectl set-hostname` es la forma recomendada de establecer el hostname en sistemas con systemd. Modifica automaticamente `/etc/hostname` y actualiza el hostname activo en el kernel. La opcion b) modifica el archivo pero no aplica el cambio inmediatamente. La opcion a) solo cambia el hostname de forma transitoria (hasta el reinicio).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-004">
<div class="flashcard-front">

**P:** Cual es el numero maximo de directivas `nameserver` que se pueden definir en `/etc/resolv.conf`?

</div>
<div class="flashcard-back">

**R:** c) 3. El archivo `/etc/resolv.conf` admite un maximo de 3 directivas `nameserver`. Si se especifican mas, las adicionales son ignoradas por el resolver. Los servidores DNS se consultan en orden: si el primero no responde dentro del timeout, se intenta con el segundo, y luego con el tercero.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-005">
<div class="flashcard-front">

**P:** Que comando de nmcli crea una nueva conexion Ethernet con IP estatica en la interfaz eth0?

</div>
<div class="flashcard-back">

**R:** b) `nmcli connection add type ethernet con-name red1 ifname eth0 ipv4.addresses 192.168.1.100/24 ipv4.method manual`. El comando `nmcli connection add` crea una nueva conexion. Se necesita: `type ethernet` (tipo de conexion), `con-name` (nombre de la conexion), `ifname` (interfaz fisica), `ipv4.addresses` (IP con prefijo) y `ipv4.method manual` (para indicar configuracion estatica en lugar de DHCP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-006">
<div class="flashcard-front">

**P:** En que directorio se almacenan los archivos de configuracion de red de systemd-networkd?

</div>
<div class="flashcard-back">

**R:** b) `/etc/systemd/network/`. Los archivos de configuracion de systemd-networkd se encuentran en `/etc/systemd/network/`. Utilizan la extension `.network` para configuracion de redes, `.netdev` para dispositivos virtuales y `.link` para propiedades de enlaces. Los archivos se procesan en orden alfanumerico, por lo que es comun usar prefijos numericos (como `20-wired.network`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-007">
<div class="flashcard-front">

**P:** Que modo de bonding proporciona failover activo-pasivo sin requerir configuracion especial en el switch?

</div>
<div class="flashcard-back">

**R:** b) mode=1 (active-backup). El modo 1 (active-backup) mantiene solo una interfaz activa a la vez. Si la interfaz activa falla, otra esclava toma el control automaticamente. No requiere ninguna configuracion especial en el switch de red, lo que lo hace el modo mas sencillo de implementar. El modo 4 (802.3ad/LACP) requiere soporte del switch para agregacion de enlaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-008">
<div class="flashcard-front">

**P:** Que archivo determina el orden en que se consultan las fuentes de resolucion de nombres (como `/etc/hosts` y DNS)?

</div>
<div class="flashcard-back">

**R:** c) `/etc/nsswitch.conf`. El archivo `/etc/nsswitch.conf` (Name Service Switch) controla el orden de busqueda para varios servicios del sistema, incluyendo la resolucion de nombres de host. La linea `hosts: files dns` indica que primero se consulta `/etc/hosts` (files) y luego los servidores DNS. `/etc/resolv.conf` solo define los servidores DNS, no el orden de consulta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-009">
<div class="flashcard-front">

**P:** Un administrador ejecuta `ip route add 10.0.0.0/8 via 192.168.1.254`. Que efecto tiene este comando?

</div>
<div class="flashcard-back">

**R:** b) Agrega una ruta para alcanzar la red 10.0.0.0/8 a traves del gateway 192.168.1.254. El comando agrega una ruta estatica a la tabla de enrutamiento, indicando que todo el trafico destinado a la red 10.0.0.0/8 (direcciones 10.x.x.x) debe enviarse al router 192.168.1.254. Esta ruta es temporal (se pierde al reiniciar) a menos que se persista en los archivos de configuracion de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-010">
<div class="flashcard-front">

**P:** Que seccion del archivo de configuracion de systemd-networkd define a que interfaz se aplica la configuracion?

</div>
<div class="flashcard-back">

**R:** b) `[Match]`. En los archivos `.network` de systemd-networkd, la seccion `[Match]` determina a que interfaces se aplica la configuracion, usando criterios como `Name=eth0`, `MACAddress=`, `Type=`, etc. La seccion `[Network]` contiene la configuracion de red propiamente dicha (IP, gateway, DNS). Si no hay seccion `[Match]`, la configuracion se aplica a todas las interfaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-011">
<div class="flashcard-front">

**P:** Que comando elimina todas las direcciones IP asignadas a la interfaz eth0?

</div>
<div class="flashcard-back">

**R:** b) `ip addr flush dev eth0`. El comando `ip addr flush dev eth0` elimina todas las direcciones IP (tanto IPv4 como IPv6 no link-local) asignadas a la interfaz eth0. Es util cuando se quiere reconfigurar completamente una interfaz. A diferencia de `ip addr del`, que elimina una direccion especifica, `flush` las elimina todas de una vez.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-012">
<div class="flashcard-front">

**P:** En el archivo `/etc/network/interfaces` de Debian, que directiva indica que una interfaz debe activarse automaticamente al arrancar el sistema?

</div>
<div class="flashcard-back">

**R:** b) `auto eth0`. La directiva `auto` en `/etc/network/interfaces` indica que la interfaz debe activarse automaticamente durante el arranque del sistema. `allow-hotplug` tambien existe y activa la interfaz cuando se detecta un evento hotplug del kernel, pero `auto` es la directiva clasica para activacion al arrancar. `enable` y `startup` no son directivas validas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-013">
<div class="flashcard-front">

**P:** Que comando muestra las estadisticas de trafico (bytes y paquetes transmitidos/recibidos) de una interfaz de red?

</div>
<div class="flashcard-back">

**R:** b) `ip -s link show eth0`. La opcion `-s` (statistics) junto con `ip link show` muestra estadisticas detalladas de la interfaz, incluyendo bytes y paquetes recibidos/transmitidos, errores, paquetes descartados y colisiones. `ip addr show` muestra direcciones IP pero no estadisticas de trafico. `ip route show` muestra rutas y `ip neigh show` muestra la tabla ARP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-014">
<div class="flashcard-front">

**P:** Que parametro del archivo `ifcfg-eth0` en RHEL indica que la interfaz debe activarse automaticamente al iniciar el sistema?

</div>
<div class="flashcard-back">

**R:** b) `ONBOOT=yes`. En los archivos `ifcfg-*` de RHEL/CentOS ubicados en `/etc/sysconfig/network-scripts/`, el parametro `ONBOOT=yes` indica que la interfaz debe activarse automaticamente durante el arranque del sistema. Si se establece `ONBOOT=no`, la interfaz debera activarse manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-015">
<div class="flashcard-front">

**P:** Un administrador necesita cambiar la MTU de la interfaz eth0 a 9000 (jumbo frames). Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** a) `ip link set eth0 mtu 9000`. El comando `ip link set eth0 mtu 9000` modifica la MTU (Maximum Transmission Unit) de la interfaz eth0 a 9000 bytes. La MTU se configura a nivel de enlace (`ip link`), no a nivel de direccion (`ip addr`). Los jumbo frames (MTU 9000) se usan en redes de alto rendimiento como almacenamiento iSCSI o clusters de computacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-016">
<div class="flashcard-front">

**P:** Que directiva en `/etc/resolv.conf` define una lista de dominios que se anaden automaticamente a nombres no cualificados?

</div>
<div class="flashcard-back">

**R:** c) `search`. La directiva `search` define una lista de dominios (maximo 6) que se anaden automaticamente a nombres de host no cualificados (sin punto final). Por ejemplo, con `search empresa.com dev.empresa.com`, al buscar el host "servidor", el resolver probara primero `servidor.empresa.com` y luego `servidor.dev.empresa.com`. La directiva `domain` es similar pero solo acepta un unico dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-017">
<div class="flashcard-front">

**P:** Que modo de bonding requiere que el switch soporte el protocolo LACP (Link Aggregation Control Protocol)?

</div>
<div class="flashcard-back">

**R:** c) mode=4 (802.3ad). El modo 4 (802.3ad) implementa el estandar IEEE 802.3ad, que requiere que tanto el servidor como el switch soporten LACP para negociar la agregacion de enlaces. Los modos 1 (active-backup) y 6 (balance-alb) no requieren configuracion especial del switch. El modo 0 (balance-rr) puede requerir configuracion del switch pero no especificamente LACP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-018">
<div class="flashcard-front">

**P:** Que tipo de hostname configurado con `hostnamectl` se almacena en `/etc/hostname` y persiste entre reinicios?

</div>
<div class="flashcard-back">

**R:** c) Static. El hostname estatico (static) es el nombre almacenado en el archivo `/etc/hostname` y persiste entre reinicios. El hostname transitorio (transient) es asignado dinamicamente por DHCP o el kernel y se pierde al reiniciar. El hostname descriptivo (pretty) es un nombre libre que puede contener espacios y caracteres especiales, y tambien se almacena de forma persistente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-019">
<div class="flashcard-front">

**P:** Que comando de nmcli muestra el estado de todos los dispositivos de red disponibles en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `nmcli device status`. El comando `nmcli device status` muestra todos los dispositivos de red disponibles junto con su tipo, estado y la conexion activa asociada. `nmcli connection show` lista las conexiones configuradas (no los dispositivos). `nmcli general status` muestra el estado general de NetworkManager (conectividad, estado de red).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-020">
<div class="flashcard-front">

**P:** Un administrador quiere verificar el estado de la interfaz bond0 y sus esclavas. Que archivo del sistema de archivos virtual debe consultar?

</div>
<div class="flashcard-back">

**R:** b) `/proc/net/bonding/bond0`. El archivo `/proc/net/bonding/bond0` contiene informacion detallada sobre la interfaz bond0, incluyendo el modo de bonding, la interfaz activa, el estado de cada esclava (MII Status), la velocidad del enlace y los parametros de monitoreo. Es la fuente principal para verificar el estado del bonding en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para agregar la direccion IP 10.0.0.5 con mascara /24 a la interfaz eth1. <input type="text" class="fill-blank" data-answer="ip addr add 10.0.0.5/24 dev eth1" data-alt="ip address add 10.0.0.5/24 dev eth1,ip a add 10.0.0.5/24 dev eth1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip addr add 10.0.0.5/24 dev eth1. El comando `ip addr add` agrega una direccion IP a una interfaz. Se debe especificar la direccion con su prefijo de red (/24) y la interfaz destino con `dev`. Tambien se puede usar la forma abreviada `ip a add`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para establecer el hostname del sistema de forma permanente a "webserver01" usando la herramienta de systemd. <input type="text" class="fill-blank" data-answer="hostnamectl set-hostname webserver01" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** hostnamectl set-hostname webserver01. El comando `hostnamectl set-hostname` establece el hostname estatico del sistema en entornos con systemd. Modifica automaticamente `/etc/hostname` y actualiza el hostname activo en el kernel, todo en un solo paso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para agregar una ruta por defecto (gateway) a traves de la IP 192.168.1.1. <input type="text" class="fill-blank" data-answer="ip route add default via 192.168.1.1" data-alt="ip r add default via 192.168.1.1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip route add default via 192.168.1.1. El comando `ip route add default via` establece la puerta de enlace predeterminada del sistema. Todo el trafico que no coincida con una ruta mas especifica sera enviado al gateway 192.168.1.1. Esta ruta es temporal; para persistirla se debe configurar en los archivos de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para activar (levantar) la interfaz de red eth0 usando la herramienta moderna iproute2. <input type="text" class="fill-blank" data-answer="ip link set eth0 up" data-alt="ip l set eth0 up,ip link set dev eth0 up" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip link set eth0 up. El comando `ip link set eth0 up` activa la interfaz eth0, permitiendo que pueda enviar y recibir trafico. Es el equivalente moderno de `ifconfig eth0 up`. Para desactivarla se usa `ip link set eth0 down`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de nmcli para activar una conexion llamada "red-oficina". <input type="text" class="fill-blank" data-answer="nmcli connection up red-oficina" data-alt="nmcli con up red-oficina,nmcli c up red-oficina" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nmcli connection up red-oficina. El comando `nmcli connection up` activa una conexion previamente configurada en NetworkManager. Se puede usar el nombre de la conexion o su UUID. Para desactivarla se usa `nmcli connection down red-oficina`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El comando `ip` reemplaza completamente a los comandos legacy. Conoce las equiva...

</div>
<div class="flashcard-back">

**R:** El comando `ip` reemplaza completamente a los comandos legacy. Conoce las equivalencias: `ip addr` = `ifconfig`, `ip route` = `route`, `ip neigh` = `arp`, `ip link` = parte de `ifconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `hostnamectl` es la forma moderna y preferida de gestionar el hostname en sistem...

</div>
<div class="flashcard-back">

**R:** `hostnamectl` es la forma moderna y preferida de gestionar el hostname en sistemas con systemd. El cambio con `hostnamectl set-hostname` modifica `/etc/hostname` automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: En sistemas con NetworkManager o systemd-resolved, `/etc/resolv.conf` puede ser ...

</div>
<div class="flashcard-back">

**R:** En sistemas con NetworkManager o systemd-resolved, `/etc/resolv.conf` puede ser un enlace simbolico gestionado automaticamente. No se debe editar directamente en esos casos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `nmcli` es la herramienta CLI de NetworkManager mas importante. Conoce como crea...

</div>
<div class="flashcard-back">

**R:** `nmcli` es la herramienta CLI de NetworkManager mas importante. Conoce como crear, modificar y activar conexiones. `nmtui` es la alternativa interactiva con menus de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: systemd-networkd usa archivos `.network` con secciones `[Match]` y `[Network]`. ...

</div>
<div class="flashcard-back">

**R:** systemd-networkd usa archivos `.network` con secciones `[Match]` y `[Network]`. Es una alternativa ligera a NetworkManager, frecuente en servidores y contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los modos de bonding mas comunes (0, 1, 4, 6) y como crearlos con `nmcli`...

</div>
<div class="flashcard-back">

**R:** Conoce los modos de bonding mas comunes (0, 1, 4, 6) y como crearlos con `nmcli`. El teaming es la alternativa moderna pero el bonding sigue siendo ampliamente usado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `nameserver`?

</div>
<div class="flashcard-back">

**R:** IP del servidor DNS (maximo 3)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `domain`?

</div>
<div class="flashcard-back">

**R:** Dominio por defecto para nombres no cualificados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `search`?

</div>
<div class="flashcard-back">

**R:** Lista de dominios de busqueda (maximo 6)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `options`?

</div>
<div class="flashcard-back">

**R:** Opciones adicionales (timeout, attempts, rotate)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `TYPE`?

</div>
<div class="flashcard-back">

**R:** Tipo de interfaz (Ethernet, Bridge, Bond...)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Herramientas modernas: el comando ip (iproute2)?

</div>
<div class="flashcard-back">

**R:** El paquete `iproute2` proporciona el comando `ip`, que es la herramienta moderna y recomendada para la configuracion de red en Linux, reemplazando a los comandos legacy `ifconfig`, `route`, `arp` y `ne

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Herramientas legacy?

</div>
<div class="flashcard-back">

**R:** Aunque estan deprecadas, pueden aparecer en el examen:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son NetworkManager?

</div>
<div class="flashcard-back">

**R:** NetworkManager es el gestor de red mas comun en distribuciones de escritorio y servidor modernas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son systemd-networkd?

</div>
<div class="flashcard-back">

**R:** Alternativa de configuracion de red via systemd, comun en servidores minimalistas y contenedores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.1">
</div>

<div class="flashcard" data-id="205.1-fc-041">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

