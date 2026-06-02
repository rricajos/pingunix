---
title: "205.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "205.3"
---

# Flashcards: 205.3 - Resolucion De Problemas De Red

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-001">
<div class="flashcard-front">

**P:** Un administrador puede hacer ping a 8.8.8.8 pero no puede acceder a ningun sitio web por nombre. Cual es la causa mas probable?

</div>
<div class="flashcard-back">

**R:** c) El servidor DNS no esta configurado o no responde. Si el ping a una IP publica (8.8.8.8) funciona, la conectividad de red esta operativa (interfaz, IP, gateway, enrutamiento). El problema es que no se pueden resolver nombres de dominio a direcciones IP, lo que indica un fallo en la configuracion DNS. Se debe verificar `/etc/resolv.conf` y probar con `dig` o `nslookup` para confirmar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-002">
<div class="flashcard-front">

**P:** Que comando muestra los puertos TCP que estan en modo escucha junto con el proceso propietario?

</div>
<div class="flashcard-back">

**R:** b) `ss -tlnp`. Las opciones significan: `-t` (TCP), `-l` (listening/escucha), `-n` (numerico, sin resolver nombres), `-p` (mostrar proceso). La opcion a) mostraria UDP (`-u`), la opcion c) mostraria todas las conexiones TCP (`-a` incluye establecidas y en escucha), y la opcion d) muestra un resumen de estadisticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-003">
<div class="flashcard-front">

**P:** Que herramienta combina las funcionalidades de ping y traceroute en una monitorizacion interactiva continua?

</div>
<div class="flashcard-back">

**R:** c) mtr. `mtr` (My Traceroute) ejecuta continuamente un traceroute y muestra estadisticas en tiempo real de cada salto, incluyendo porcentaje de perdida de paquetes, latencia minima, media y maxima, y desviacion estandar. Es la herramienta ideal para diagnosticar problemas intermitentes de ruta. Se puede usar en modo interactivo o con `--report` para un informe no interactivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-004">
<div class="flashcard-front">

**P:** Que comando de tcpdump captura todo el trafico HTTP hacia el host 192.168.1.100 y lo guarda en un archivo?

</div>
<div class="flashcard-back">

**R:** a) `tcpdump -i eth0 host 192.168.1.100 and port 80 -w /tmp/http.pcap`. La sintaxis de tcpdump usa filtros BPF (Berkeley Packet Filter): `host` filtra por IP, `port` filtra por puerto, y `and` combina condiciones. La opcion `-w` escribe la captura en formato pcap. La opcion `-i` especifica la interfaz. Los filtros son expresiones de texto libre, no formato clave=valor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-005">
<div class="flashcard-front">

**P:** Que opcion de dig muestra solo la respuesta a la consulta DNS, sin cabeceras ni informacion adicional?

</div>
<div class="flashcard-back">

**R:** c) `dig +short`. La opcion `+short` de dig muestra unicamente la respuesta a la consulta, omitiendo toda la informacion adicional (cabeceras, seccion de autoridad, seccion adicional, estadisticas). Por ejemplo, `dig +short ejemplo.com` mostraria solo la IP (como `93.184.216.34`). Es muy util para scripts y consultas rapidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-006">
<div class="flashcard-front">

**P:** Un administrador ejecuta `nmap -sn 192.168.1.0/24`. Que hace este comando?

</div>
<div class="flashcard-back">

**R:** b) Realiza un ping sweep para descubrir hosts activos sin escanear puertos. La opcion `-sn` (anteriormente `-sP`) indica a nmap que realice solo el descubrimiento de hosts, sin escanear puertos. Utiliza una combinacion de ICMP echo, TCP SYN al puerto 443, TCP ACK al puerto 80 y ICMP timestamp para determinar que hosts estan activos. Es util para obtener un inventario rapido de la red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-007">
<div class="flashcard-front">

**P:** Que informacion proporciona el comando `ethtool eth0`?

</div>
<div class="flashcard-back">

**R:** c) La velocidad, duplex, autonegociacion y estado del enlace fisico. `ethtool` muestra informacion de la capa fisica de la interfaz de red: velocidad del enlace (100Mb/s, 1000Mb/s), modo duplex (Full/Half), estado de autonegociacion (on/off), y si hay enlace detectado (Link detected: yes/no). Es la primera herramienta a usar cuando se sospecha de problemas fisicos de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-008">
<div class="flashcard-front">

**P:** Que comando se usa para verificar rapidamente si el puerto 443 de un servidor remoto esta abierto y aceptando conexiones?

</div>
<div class="flashcard-back">

**R:** c) `nc -zv 192.168.1.100 443`. El comando `nc` (netcat) con las opciones `-z` (modo escaneo, sin enviar datos) y `-v` (verbose, mostrar resultado) intenta establecer una conexion TCP al puerto especificado. Si el puerto esta abierto, reporta "Connection succeeded" o "open"; si esta cerrado o filtrado, reporta un error. `ping` no puede verificar puertos y `dig` es para consultas DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-009">
<div class="flashcard-front">

**P:** En la salida de traceroute, que significa una linea con `* * *`?

</div>
<div class="flashcard-back">

**R:** c) El router en ese salto no responde a los sondeos (puede filtrar ICMP/UDP). Los asteriscos `* * *` indican que el router en ese salto no envio respuestas ICMP Time Exceeded. Esto puede deberse a que el router tiene configurado filtrar ese tipo de trafico, tiene limitacion de tasa para ICMP, o esta muy congestionado. No necesariamente indica un problema: muchos routers de Internet filtran deliberadamente estos paquetes por seguridad. Si los saltos siguientes responden, la ruta funciona correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita trazar la cadena completa de resolucion DNS de un dominio, desde los servidores raiz hasta el servidor autoritativo. Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `dig +trace ejemplo.com`. La opcion `+trace` de dig realiza consultas iterativas empezando por los servidores raiz DNS (.), pasando por los servidores TLD (.com), hasta llegar al servidor autoritativo del dominio. Muestra cada paso de la cadena de delegacion, lo que es invaluable para diagnosticar problemas de resolucion DNS como delegaciones incorrectas o servidores autoritativos no respondiendo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-011">
<div class="flashcard-front">

**P:** Que opcion de tcpdump evita la resolucion de nombres de host y puertos, mostrando solo valores numericos?

</div>
<div class="flashcard-back">

**R:** b) `-nn`. La opcion `-nn` de tcpdump desactiva la resolucion de nombres. La primera `-n` evita la resolucion de direcciones IP a nombres de host, y la segunda `-n` evita la resolucion de numeros de puerto a nombres de servicio. Esto acelera significativamente la captura al no realizar consultas DNS inversas por cada paquete capturado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-012">
<div class="flashcard-front">

**P:** Un administrador necesita verificar si hay errores de transmision o paquetes descartados en una interfaz de red. Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `ip -s link show eth0`. El comando `ip -s link show eth0` muestra estadisticas detalladas de la interfaz, incluyendo el numero de bytes y paquetes transmitidos/recibidos, errores de RX/TX, paquetes descartados (dropped), desbordamientos (overruns) y errores de trama. Estas estadisticas son fundamentales para diagnosticar problemas de rendimiento o hardware en la capa fisica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-013">
<div class="flashcard-front">

**P:** Que estado en la tabla de vecinos (ip neigh) indica que una entrada ARP fue configurada manualmente y no expirara?

</div>
<div class="flashcard-back">

**R:** c) `PERMANENT`. El estado `PERMANENT` indica que la entrada fue configurada manualmente por el administrador (entrada estatica) y no sera eliminada automaticamente por el mecanismo de expiracion del kernel. Las entradas `REACHABLE` son validas y verificadas recientemente, `STALE` son validas pero antiguas, y `DELAY` estan esperando confirmacion de accesibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-014">
<div class="flashcard-front">

**P:** Que opcion de nmap realiza un escaneo SYN stealth que requiere privilegios de root?

</div>
<div class="flashcard-back">

**R:** b) `-sS`. La opcion `-sS` realiza un escaneo SYN (half-open scan), que envia paquetes SYN sin completar la conexion TCP. Es mas rapido y menos detectable que un escaneo TCP completo (`-sT`), pero requiere privilegios de root para crear paquetes raw. `-sU` escanea puertos UDP y `-sn` realiza solo descubrimiento de hosts sin escanear puertos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-015">
<div class="flashcard-front">

**P:** Que columna de mtr indica el porcentaje de paquetes que se perdieron en cada salto?

</div>
<div class="flashcard-back">

**R:** c) `Loss%`. La columna `Loss%` en mtr muestra el porcentaje de paquetes perdidos en cada salto de la ruta. Un valor alto en un salto intermedio no siempre indica un problema real, ya que algunos routers limitan las respuestas ICMP. Si el `Loss%` solo es alto en el destino final, entonces si hay un problema de perdida de paquetes real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-016">
<div class="flashcard-front">

**P:** Un administrador ejecuta `ping -s 1472 -M do -c 4 destino`. Que esta intentando verificar?

</div>
<div class="flashcard-back">

**R:** c) El MTU del camino (Path MTU Discovery). La opcion `-s 1472` establece un tamano de paquete de 1472 bytes de datos (que con las cabeceras IP e ICMP de 28 bytes suma 1500, el MTU estandar de Ethernet). La opcion `-M do` activa el bit "Don't Fragment" (DF), lo que impide la fragmentacion. Si el MTU del camino es menor que 1500, se recibira un error ICMP "Fragmentation Needed", indicando un problema de MTU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-017">
<div class="flashcard-front">

**P:** Que herramienta de diagnostico de red proporciona informacion sobre la velocidad del enlace, el modo duplex y si hay un cable conectado fisicamente?

</div>
<div class="flashcard-back">

**R:** c) `ethtool`. El comando `ethtool` muestra informacion de la capa fisica de la interfaz de red, incluyendo la velocidad del enlace (10/100/1000 Mbps), modo duplex (Full/Half), estado de autonegociacion y si se detecta enlace fisico (Link detected: yes/no). Es la herramienta de primera linea para diagnosticar problemas fisicos de conectividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-018">
<div class="flashcard-front">

**P:** Que opcion de ss muestra tanto los sockets TCP como UDP que estan en modo escucha?

</div>
<div class="flashcard-back">

**R:** b) `ss -tulnp`. La combinacion `-tulnp` incluye: `-t` (TCP), `-u` (UDP), `-l` (listening/escucha), `-n` (numerico) y `-p` (proceso). Sin la opcion `-u`, solo se mostrarian los sockets TCP. La opcion `-a` mostraria todos los sockets (incluyendo los establecidos), no solo los que estan en escucha.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-019">
<div class="flashcard-front">

**P:** Un administrador quiere capturar solo los paquetes ICMP en la interfaz eth0 usando tcpdump. Que filtro debe utilizar?

</div>
<div class="flashcard-back">

**R:** b) `tcpdump -i eth0 icmp`. Los filtros de tcpdump usan la sintaxis BPF (Berkeley Packet Filter). Para filtrar por protocolo se escribe directamente el nombre del protocolo: `icmp`, `tcp`, `udp`, `arp`, etc. No se necesitan opciones adicionales como `--filter` o `protocol`. Estos filtros se pueden combinar con operadores logicos: `tcpdump -i eth0 icmp and host 192.168.1.1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-020">
<div class="flashcard-front">

**P:** Que opcion de nmap permite detectar la version de los servicios que estan ejecutandose en los puertos abiertos?

</div>
<div class="flashcard-back">

**R:** b) `-sV`. La opcion `-sV` (Service Version detection) de nmap interroga los puertos abiertos para determinar el servicio y su version. Por ejemplo, puede distinguir entre Apache 2.4.41 y Nginx 1.18.0 en el puerto 80. La opcion `-O` detecta el sistema operativo, `-A` es un escaneo agresivo que incluye `-sV`, `-O` y mas, y `-F` es un escaneo rapido de los puertos mas comunes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para capturar el trafico de red en la interfaz eth0 y guardarlo en un archivo pcap llamado /tmp/captura.pcap. <input type="text" class="fill-blank" data-answer="tcpdump -i eth0 -w /tmp/captura.pcap" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tcpdump -i eth0 -w /tmp/captura.pcap. El comando `tcpdump -i eth0 -w /tmp/captura.pcap` captura todo el trafico de la interfaz eth0 y lo guarda en formato pcap. La opcion `-i` especifica la interfaz y `-w` indica el archivo de salida. El archivo pcap puede analizarse posteriormente con `tcpdump -r` o con herramientas graficas como Wireshark.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para realizar una consulta DNS inversa (de IP a nombre) de la direccion 8.8.8.8 usando dig. <input type="text" class="fill-blank" data-answer="dig -x 8.8.8.8" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** dig -x 8.8.8.8. La opcion `-x` de dig realiza una consulta DNS inversa (PTR), traduciendo la direccion IP al nombre de dominio asociado. Internamente, dig convierte la IP al formato de zona inversa `8.8.8.8.in-addr.arpa` y consulta el registro PTR correspondiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para generar un reporte no interactivo de mtr hacia el host 10.0.0.1. <input type="text" class="fill-blank" data-answer="mtr --report 10.0.0.1" data-alt="mtr -r 10.0.0.1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mtr --report 10.0.0.1. El comando `mtr --report` (o `mtr -r`) ejecuta mtr en modo no interactivo, realizando un numero predeterminado de ciclos (por defecto 10) y luego muestra un informe con las estadisticas de cada salto. Es util para scripts y para compartir resultados de diagnostico con otros administradores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para verificar si el puerto 22 del host 192.168.1.50 esta abierto usando netcat. <input type="text" class="fill-blank" data-answer="nc -zv 192.168.1.50 22" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nc -zv 192.168.1.50 22. El comando `nc -zv` verifica la conectividad a un puerto especifico. La opcion `-z` indica modo escaneo (no envia datos) y `-v` activa el modo verbose para ver el resultado. Si el puerto esta abierto, reportara "Connection succeeded" o "open". Es mas rapido y ligero que nmap para verificar un solo puerto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para mostrar la tabla de vecinos ARP del sistema usando la herramienta moderna de iproute2. <input type="text" class="fill-blank" data-answer="ip neigh show" data-alt="ip neigh,ip n show,ip n,ip neighbour show" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ip neigh show. El comando `ip neigh show` (o su forma abreviada `ip n`) muestra la tabla de vecinos del sistema, que incluye las entradas ARP (IPv4) y NDP (IPv6). Cada entrada muestra la direccion IP, la direccion MAC (lladdr), la interfaz y el estado (REACHABLE, STALE, DELAY, etc.). Es el reemplazo moderno de `arp -a`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Seguir un enfoque metodologico por capas es fundamental. Empieza siempre por lo ...

</div>
<div class="flashcard-back">

**R:** Seguir un enfoque metodologico por capas es fundamental. Empieza siempre por lo basico (cable, IP, gateway) antes de investigar problemas mas complejos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `mtr` es la herramienta mas completa para diagnosticar problemas de ruta. La col...

</div>
<div class="flashcard-back">

**R:** `mtr` es la herramienta mas completa para diagnosticar problemas de ruta. La columna `Loss%` indica perdida de paquetes en cada salto, y `Avg` muestra la latencia media.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `ss` es mas rapido y eficiente que `netstat`. La combinacion `-tlnp` (TCP, liste...

</div>
<div class="flashcard-back">

**R:** `ss` es mas rapido y eficiente que `netstat`. La combinacion `-tlnp` (TCP, listening, numeric, process) es la mas utilizada para verificar servicios en escucha.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las opciones `-i` (interfaz), `-w` (escribir pcap), `-r` (leer pcap), `-n...

</div>
<div class="flashcard-back">

**R:** Conoce las opciones `-i` (interfaz), `-w` (escribir pcap), `-r` (leer pcap), `-nn` (no resolver) y los filtros basicos de host, port y protocol.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `dig` es la herramienta DNS mas completa y preferida. Conoce `+short` para respu...

</div>
<div class="flashcard-back">

**R:** `dig` es la herramienta DNS mas completa y preferida. Conoce `+short` para respuestas concisas, `+trace` para ver la cadena de resolucion completa, y `@servidor` para consultar un DNS especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `icmp_seq`?

</div>
<div class="flashcard-back">

**R:** Numero de secuencia del paquete

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `ttl`?

</div>
<div class="flashcard-back">

**R:** Time To Live restante (saltos restantes)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `packet loss`?

</div>
<div class="flashcard-back">

**R:** Porcentaje de paquetes perdidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `Loss%`?

</div>
<div class="flashcard-back">

**R:** Porcentaje de paquetes perdidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `-l`?

</div>
<div class="flashcard-back">

**R:** Solo sockets en escucha (listening)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Metodologia de diagnostico por capas?

</div>
<div class="flashcard-back">

**R:** La resolucion de problemas de red se aborda sistematicamente siguiendo el modelo de capas (de abajo hacia arriba):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son ping - Prueba de conectividad basica?

</div>
<div class="flashcard-back">

**R:** El comando `ping` envia paquetes ICMP Echo Request y espera ICMP Echo Reply para verificar la conectividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son mtr - My Traceroute?

</div>
<div class="flashcard-back">

**R:** `mtr` combina la funcionalidad de `ping` y `traceroute` en una herramienta interactiva de monitorizacion continua.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son tcpdump - Captura de paquetes?

</div>
<div class="flashcard-back">

**R:** `tcpdump` es un analizador de paquetes de red en linea de comandos. Es esencial para diagnostico avanzado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son nmap - Escaneo de red?

</div>
<div class="flashcard-back">

**R:** `nmap` escanea hosts y puertos para descubrir servicios y evaluar la seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son nc / ncat - Navaja suiza de red?

</div>
<div class="flashcard-back">

**R:** `nc` (netcat) o `ncat` (version mejorada de nmap) permite crear conexiones TCP/UDP arbitrarias.

</div>
</div>

---

