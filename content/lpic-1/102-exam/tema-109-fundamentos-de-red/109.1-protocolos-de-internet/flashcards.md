---
title: "109.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "109.1"
---

# Flashcards: 109.1 - Protocolos De Internet

> 29 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-001">
<div class="flashcard-front">

**P:** Cuantos hosts disponibles tiene una red con mascara /26?

</div>
<div class="flashcard-back">

**R:** b) 62. La formula para calcular hosts disponibles es: 2^(32 - prefijo) - 2. Para /26: 2^(32-26) - 2 = 2^6 - 2 = 64 - 2 = 62 hosts. Se restan 2 porque la primera direccion es la direccion de red y la ultima es la direccion de broadcast, que no se pueden asignar a hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-002">
<div class="flashcard-front">

**P:** Cual de los siguientes es un rango de direcciones IPv4 privadas definido en RFC 1918?

</div>
<div class="flashcard-back">

**R:** b) 172.16.0.0/12. Los tres rangos de direcciones IPv4 privadas segun RFC 1918 son: 10.0.0.0/8 (Clase A), 172.16.0.0/12 (Clase B) y 192.168.0.0/16 (Clase C). La opcion A (192.0.0.0/8) no es un rango privado. La opcion C (10.0.0.0/16) tiene la mascara incorrecta (deberia ser /8). La opcion D (169.254.0.0/16) es el rango link-local (APIPA), no un rango privado RFC 1918.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-003">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre TCP y UDP es correcta?

</div>
<div class="flashcard-back">

**R:** c) TCP es orientado a conexion con handshake de 3 vias y garantiza entrega ordenada. TCP (Transmission Control Protocol) es orientado a conexion, establece la conexion mediante un handshake de 3 vias (SYN, SYN-ACK, ACK) y garantiza la entrega ordenada con retransmision de paquetes perdidos. UDP (User Datagram Protocol) es sin conexion, sin handshake, y no garantiza ni la entrega ni el orden. TCP se usa para HTTP, SSH, SMTP; UDP se usa para DNS, NTP, DHCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-004">
<div class="flashcard-front">

**P:** Cual es la forma simplificada correcta de la direccion IPv6 `2001:0db8:0000:0000:0000:ff00:0042:8329`?

</div>
<div class="flashcard-back">

**R:** b) `2001:db8::ff00:42:8329`. La simplificacion de IPv6 se hace en dos pasos: primero se eliminan los ceros a la izquierda de cada grupo (`0db8` -> `db8`, `0042` -> `42`), y luego se reemplazan los grupos consecutivos de ceros por `::`. La regla importante es que `::` solo puede usarse una vez en una direccion. La opcion A es parcialmente correcta (primer paso) pero no aplica el segundo. La opcion C usa `:::` que es invalido. La opcion D omite grupos necesarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-005">
<div class="flashcard-front">

**P:** Que tipo de direccion IPv6 es `fe80::1`?

</div>
<div class="flashcard-back">

**R:** c) Link-local. Las direcciones con prefijo `fe80::/10` son direcciones link-local en IPv6. Se autoconfiguran en cada interfaz y solo son validas en el enlace local (no son enrutables). La direccion `::1` es loopback (equivalente a 127.0.0.1 en IPv4). Las direcciones `2000::/3` son global unicast (publicas enrutables). Las direcciones `fc00::/7` (tipicamente `fd00::/8`) son unique local (privadas, equivalentes a RFC 1918 en IPv4).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-006">
<div class="flashcard-front">

**P:** Cual es el numero de puerto asignado al servicio HTTPS?

</div>
<div class="flashcard-back">

**R:** c) 443. HTTPS (HTTP sobre TLS/SSL) utiliza el puerto 443/TCP. El puerto 80 corresponde a HTTP sin cifrado. Los puertos 8080 y 8443 son puertos alternativos comunes pero no son los puertos estandar asignados. Otros puertos importantes: SSH=22, SMTP=25, DNS=53, POP3=110, IMAP=143, LDAP=389, LDAPS=636, IMAPS=993, POP3S=995.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-007">
<div class="flashcard-front">

**P:** Cuales son las 4 capas del modelo TCP/IP en orden de abajo hacia arriba?

</div>
<div class="flashcard-back">

**R:** b) Acceso a red, Internet, Transporte, Aplicacion. El modelo TCP/IP tiene 4 capas: 1) Acceso a red (equivale a las capas 1 y 2 de OSI: Ethernet, Wi-Fi), 2) Internet (equivale a capa 3 de OSI: IP, ICMP), 3) Transporte (equivale a capa 4 de OSI: TCP, UDP), 4) Aplicacion (equivale a capas 5, 6 y 7 de OSI: HTTP, SSH, DNS). El modelo TCP/IP simplifica las 7 capas del modelo OSI en 4 capas practicas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-008">
<div class="flashcard-front">

**P:** Al dividir la red 192.168.10.0/24 en 4 subredes iguales, cual es la nueva mascara de subred y cuantos hosts tiene cada subred?

</div>
<div class="flashcard-back">

**R:** b) /26 con 62 hosts por subred. Para dividir una red en 4 subredes se necesitan 2 bits adicionales (2^2 = 4). La nueva mascara es /26 (24 + 2 = 26). Cada subred tiene 2^(32-26) - 2 = 2^6 - 2 = 62 hosts. Las 4 subredes resultantes son: 192.168.10.0/26, 192.168.10.64/26, 192.168.10.128/26 y 192.168.10.192/26.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-009">
<div class="flashcard-front">

**P:** Que protocolo reemplaza a ARP en IPv6 para la resolucion de direcciones?

</div>
<div class="flashcard-back">

**R:** b) ICMPv6 (NDP). NDP (Neighbor Discovery Protocol) es el protocolo de descubrimiento de vecinos de IPv6 que reemplaza a ARP de IPv4. NDP usa mensajes ICMPv6 para la resolucion de direcciones (IPv6 a MAC), descubrimiento de routers, deteccion de direcciones duplicadas (DAD) y redireccion. Usa mensajes Neighbor Solicitation y Neighbor Advertisement en lugar de ARP Request y ARP Reply. SLAAC es el mecanismo de autoconfiguracion de direcciones, no de resolucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-010">
<div class="flashcard-front">

**P:** En IPv6, que mecanismo permite a un host autoconfigurarse una direccion sin necesidad de un servidor DHCP?

</div>
<div class="flashcard-back">

**R:** c) SLAAC. SLAAC (Stateless Address Autoconfiguration) es el mecanismo de autoconfiguracion de direcciones IPv6 sin estado. El host genera su propia direccion combinando el prefijo de red anunciado por el router (via Router Advertisement) con un identificador de interfaz generado a partir de la MAC (EUI-64) o de forma aleatoria. No necesita servidor DHCP. NDP es el protocolo de descubrimiento de vecinos (resolucion de direcciones). APIPA es la autoconfiguracion link-local de IPv4 (169.254.x.x).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-011">
<div class="flashcard-front">

**P:** Que archivo en Linux mapea los nombres de servicios de red a sus numeros de puerto?

</div>
<div class="flashcard-back">

**R:** c) `/etc/services`. El archivo `/etc/services` mapea nombres de servicios a numeros de puerto y protocolo (TCP/UDP). Por ejemplo, contiene entradas como `ssh 22/tcp`, `http 80/tcp`, `dns 53/udp`. El archivo `/etc/protocols` mapea nombres de protocolos a numeros de protocolo IP (como `tcp 6`, `udp 17`, `icmp 1`). Ambos archivos son de referencia y no configuran servicios activamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-012">
<div class="flashcard-front">

**P:** Cual de las siguientes direcciones IPv4 corresponde al rango link-local (APIPA)?

</div>
<div class="flashcard-back">

**R:** d) 169.254.10.5. El rango 169.254.0.0/16 es el rango de direcciones link-local (APIPA - Automatic Private IP Addressing). Estas direcciones se autoasignan cuando un equipo no puede obtener una direccion IP por DHCP. Solo son validas en el enlace local y no son enrutables. Las opciones A, B y C corresponden a rangos de direcciones privadas RFC 1918 (10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16 respectivamente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-013">
<div class="flashcard-front">

**P:** Cual de los siguientes protocolos utiliza UDP como protocolo de transporte?

</div>
<div class="flashcard-back">

**R:** c) NTP. NTP (Network Time Protocol) utiliza UDP en el puerto 123 para la sincronizacion de relojes. UDP es adecuado para NTP porque es mas rapido y ligero que TCP, y la perdida ocasional de un paquete no es critica. SSH (puerto 22), HTTP (puerto 80) y SMTP (puerto 25) utilizan TCP porque requieren entrega fiable y ordenada de datos. Otros protocolos que usan UDP incluyen DNS (53), DHCP (67/68) y SNMP (161/162).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-014">
<div class="flashcard-front">

**P:** Que rango de puertos se denomina "well-known" o puertos bien conocidos y requiere permisos de root para utilizarse?

</div>
<div class="flashcard-back">

**R:** b) 0-1023. Los puertos bien conocidos (well-known) abarcan el rango 0-1023 y estan reservados para servicios estandar del sistema. Requieren permisos de root para ser abiertos. El rango 1024-49151 corresponde a puertos registrados (registered), asignados a aplicaciones por la IANA. El rango 49152-65535 son puertos dinamicos o efimeros, utilizados automaticamente para conexiones salientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-015">
<div class="flashcard-front">

**P:** Que tipo de direccion IPv6 NO existe?

</div>
<div class="flashcard-back">

**R:** c) Broadcast. IPv6 no tiene broadcast. La funcionalidad de broadcast se implementa mediante multicast en IPv6. Los tres tipos de direcciones IPv6 son: unicast (identifica una unica interfaz), multicast (identifica un grupo de interfaces, el paquete se entrega a todas) y anycast (identifica un grupo de interfaces, el paquete se entrega a la mas cercana). Esta es una diferencia fundamental entre IPv4 (que si tiene broadcast) e IPv6.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-016">
<div class="flashcard-front">

**P:** Cual es la notacion correcta para especificar una direccion IPv6 con un puerto en una URL?

</div>
<div class="flashcard-back">

**R:** b) `http://[2001:db8::1]:443`. En URLs y configuraciones, las direcciones IPv6 se encierran entre corchetes `[]` para distinguir los dos puntos de la direccion del separador de puerto. La notacion correcta es `[direccion_IPv6]:puerto`. Sin los corchetes, seria imposible distinguir los dos puntos de la direccion IPv6 de los dos puntos que separan la direccion del puerto. Esta notacion es fundamental para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-017">
<div class="flashcard-front">

**P:** Cual es el numero de protocolo IP asignado a ICMP segun `/etc/protocols`?

</div>
<div class="flashcard-back">

**R:** b) 1. Segun el archivo `/etc/protocols`, ICMP tiene asignado el numero de protocolo 1. TCP tiene el numero 6 y UDP el numero 17. ICMP (Internet Control Message Protocol) es un protocolo de control y diagnostico utilizado por herramientas como `ping` (ICMP Echo Request/Reply) y `traceroute`. ICMP no transporta datos de usuario, sino mensajes de control de la red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-018">
<div class="flashcard-front">

**P:** En una red con mascara /30, cuantos hosts disponibles hay?

</div>
<div class="flashcard-back">

**R:** b) 2. Con la formula 2^(32 - prefijo) - 2: para /30 = 2^(32-30) - 2 = 2^2 - 2 = 4 - 2 = 2 hosts. Se restan 2 para la direccion de red y la de broadcast. La mascara /30 (255.255.255.252) se utiliza tipicamente en enlaces punto a punto entre routers, donde solo se necesitan 2 direcciones IP asignables. La mascara /32 corresponde a un host unico (0 hosts asignables adicionales).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-019">
<div class="flashcard-front">

**P:** Que clase de direccion IPv4 corresponde al rango de primer octeto 128-191?

</div>
<div class="flashcard-back">

**R:** b) Clase B. El rango de primer octeto 128-191 corresponde a la Clase B, con mascara por defecto 255.255.0.0 (/16), usada para redes medianas. Clase A abarca 1-126 con mascara /8 (redes grandes). Clase C abarca 192-223 con mascara /24 (redes pequenas). Clase D abarca 224-239 y se usa para multicast. El rango 127.0.0.0/8 esta reservado para loopback (localhost).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-020">
<div class="flashcard-front">

**P:** Que funcion de NDP verifica que una direccion IPv6 no este siendo utilizada por otro host antes de asignarla?

</div>
<div class="flashcard-back">

**R:** c) Deteccion de direcciones duplicadas (DAD). DAD (Duplicate Address Detection) es una funcion del protocolo NDP (Neighbor Discovery Protocol) que verifica que una direccion IPv6 no este ya en uso antes de asignarla a una interfaz. El host envia un mensaje Neighbor Solicitation a la direccion que desea usar; si recibe un Neighbor Advertisement en respuesta, significa que la direccion ya esta en uso. Router Solicitation solicita informacion de routers. Redirect informa de rutas mas optimas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-021">
<div class="flashcard-front">

**P:** Que puerto TCP utiliza el servicio LDAP?

</div>
<div class="flashcard-back">

**R:** 389. LDAP (Lightweight Directory Access Protocol) utiliza el puerto TCP 389. Su version segura LDAPS (LDAP sobre SSL/TLS) utiliza el puerto TCP 636. LDAP se utiliza para acceder y gestionar servicios de directorio, como Active Directory o OpenLDAP. Es importante recordar estos puertos para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-022">
<div class="flashcard-front">

**P:** Cual es la direccion IPv6 de loopback (equivalente a 127.0.0.1 en IPv4)?

</div>
<div class="flashcard-back">

**R:** ::1. La direccion `::1` es la direccion de loopback en IPv6, equivalente a `127.0.0.1` en IPv4. Es la abreviacion de `0000:0000:0000:0000:0000:0000:0000:0001`. Se utiliza para que un host se comunique consigo mismo. Las direcciones link-local en IPv6 comienzan con `fe80::/10` y las direcciones global unicast con `2000::/3`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-023">
<div class="flashcard-front">

**P:** En que archivo de Linux se mapean los nombres de protocolos IP a sus numeros de protocolo?

</div>
<div class="flashcard-back">

**R:** /etc/protocols. El archivo `/etc/protocols` mapea nombres de protocolos a numeros de protocolo IP. Contiene entradas como `icmp 1`, `tcp 6` y `udp 17`. No debe confundirse con `/etc/services`, que mapea nombres de servicios a numeros de puerto. Ambos archivos son de referencia para el sistema y las aplicaciones de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-024">
<div class="flashcard-front">

**P:** Que puerto UDP utiliza el servidor DHCP para recibir solicitudes de los clientes?

</div>
<div class="flashcard-back">

**R:** 67. El servidor DHCP escucha en el puerto UDP 67, mientras que el cliente DHCP utiliza el puerto UDP 68. DHCP (Dynamic Host Configuration Protocol) asigna automaticamente direcciones IP y otros parametros de red a los clientes. Utiliza UDP porque es un protocolo sin conexion y es necesario cuando el cliente aun no tiene una direccion IP configurada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-025">
<div class="flashcard-front">

**P:** Que protocolo de transporte utiliza DNS y en que puerto opera?

</div>
<div class="flashcard-back">

**R:** 53. DNS (Domain Name System) utiliza el puerto 53, tanto con TCP como con UDP. Las consultas DNS normales usan UDP por su rapidez, mientras que TCP se emplea para transferencias de zona entre servidores DNS y para respuestas que exceden los 512 bytes. DNS es fundamental para traducir nombres de dominio a direcciones IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `fe80::/10`?

</div>
<div class="flashcard-back">

**R:** Autoconfigurada, solo valida en el enlace local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `::1`?

</div>
<div class="flashcard-back">

**R:** Equivalente a 127.0.0.1 en IPv4

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `2000::/3`?

</div>
<div class="flashcard-back">

**R:** Direcciones publicas enrutables (como las IPv4 publicas)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.1">
</div>

<div class="flashcard" data-id="109.1-fc-029">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **TCP/IP tiene 4 capas**: Acceso a red, Internet, Transporte, Aplicacion

</div>
</div>

---

