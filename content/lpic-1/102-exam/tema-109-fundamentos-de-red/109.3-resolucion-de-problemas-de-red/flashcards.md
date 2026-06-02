---
title: "109.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "109.3"
---

# Flashcards: 109.3 - Resolucion De Problemas De Red

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-001">
<div class="flashcard-front">

**P:** Cual es el orden correcto de la metodologia de troubleshooting de red de abajo hacia arriba?

</div>
<div class="flashcard-back">

**R:** c) Enlace fisico -> IP -> Gateway -> DNS -> Servicio. La resolucion de problemas de red se realiza de abajo hacia arriba, siguiendo las capas del modelo TCP/IP: 1) Verificar que la interfaz esta activa (enlace fisico), 2) Verificar que tiene IP correcta, 3) Verificar conectividad al gateway, 4) Verificar resolucion DNS, 5) Verificar que el servicio responde. Esto permite identificar sistematicamente en que capa se encuentra el problema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-002">
<div class="flashcard-front">

**P:** Que significan las flags `-tulnp` en el comando `ss -tulnp`?

</div>
<div class="flashcard-back">

**R:** b) TCP, UDP, listening, numerico, process. Las flags `-tulnp` son la combinacion mas comun de `ss` (y `netstat`): `-t` filtra solo conexiones TCP, `-u` filtra solo UDP, `-l` muestra solo puertos en escucha (listening), `-n` muestra direcciones y puertos en formato numerico (sin resolver nombres), y `-p` muestra el PID y nombre del proceso asociado. Esta combinacion muestra todos los servicios que estan escuchando en el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-003">
<div class="flashcard-front">

**P:** Cual de las siguientes herramientas combina las funcionalidades de `ping` y `traceroute` en una interfaz interactiva en tiempo real?

</div>
<div class="flashcard-back">

**R:** b) `mtr`. `mtr` (My Traceroute) combina `ping` y `traceroute` en una herramienta interactiva en tiempo real, mostrando continuamente la ruta, latencia y perdida de paquetes en cada salto. Es muy util para diagnosticar problemas intermitentes de red. `mtr -r` genera un reporte puntual. `netcat` es para conexiones de red genericas. `tcpdump` captura trafico de red. `nmap` escanea puertos y hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-004">
<div class="flashcard-front">

**P:** Un usuario puede hacer ping a `8.8.8.8` pero no puede acceder a `www.ejemplo.com`. Cual es la causa mas probable?

</div>
<div class="flashcard-back">

**R:** c) Hay un problema de resolucion DNS. Si el ping a una IP publica (8.8.8.8) funciona, la conectividad de red esta correcta (interfaz activa, IP correcta, gateway funcional, acceso a Internet). El hecho de que no pueda acceder a un nombre de dominio indica un problema de resolucion DNS. Se puede diagnosticar con `cat /etc/resolv.conf`, `dig www.ejemplo.com` o `dig @8.8.8.8 www.ejemplo.com` para probar con un DNS especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-005">
<div class="flashcard-front">

**P:** Que comando verifica si el puerto TCP 443 esta abierto en el servidor 192.168.1.50?

</div>
<div class="flashcard-back">

**R:** c) `nc -zv 192.168.1.50 443`. El comando `nc` (netcat) con las opciones `-z` (modo escaneo, sin enviar datos) y `-v` (modo verbose) intenta una conexion TCP al puerto especificado y reporta si esta abierto o cerrado. `ping` usa ICMP y no puede verificar puertos especificos. `traceroute -p` cambia el puerto usado para la traza pero no verifica la apertura de un servicio. `ss -tulnp` solo muestra los puertos locales, no de servidores remotos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-006">
<div class="flashcard-front">

**P:** Que significan los asteriscos `* * *` en la salida de `traceroute`?

</div>
<div class="flashcard-back">

**R:** b) El router de ese salto no respondio dentro del tiempo limite. Los `* * *` en la salida de `traceroute` indican que el router de ese salto no envio una respuesta dentro del tiempo limite. Esto puede deberse a que el router tiene ICMP deshabilitado, el firewall filtra las respuestas, o el paquete fue descartado. No significa necesariamente que haya un problema de conectividad, ya que muchos routers en Internet estan configurados para no responder a estos paquetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-007">
<div class="flashcard-front">

**P:** Cual es la herramienta moderna que reemplaza a `netstat`?

</div>
<div class="flashcard-back">

**R:** c) `ss`. `ss` (socket statistics) del paquete iproute2 es el reemplazo moderno de `netstat` del paquete net-tools (deprecado). `ss` es mas rapido y ofrece mas funcionalidades, como filtrado por estado de conexion (`ss state established`) y por puerto (`ss sport = :22`). Las opciones comunes son compatibles: `ss -tulnp` muestra la misma informacion que `netstat -tulnp`. `ip` reemplaza a `ifconfig` y `route`, no a `netstat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-008">
<div class="flashcard-front">

**P:** Que comando captura solo el trafico del puerto 80 en la interfaz eth0 y lo guarda en un archivo?

</div>
<div class="flashcard-back">

**R:** b) `tcpdump -i eth0 port 80 -w captura.pcap`. `tcpdump` captura trafico de red y requiere permisos de root. La opcion `-i eth0` especifica la interfaz, el filtro `port 80` captura solo trafico del puerto 80, y `-w captura.pcap` guarda la captura en un archivo. Para leer la captura posteriormente se usa `tcpdump -r captura.pcap`. Otras opciones utiles: `-n` (no resolver nombres), `-c 100` (capturar solo 100 paquetes), `-A` (mostrar contenido ASCII).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-009">
<div class="flashcard-front">

**P:** Que diferencia hay entre `traceroute` y `tracepath`?

</div>
<div class="flashcard-back">

**R:** b) `traceroute` puede requerir root y `tracepath` no requiere root. `traceroute` es la herramienta clasica que puede requerir permisos de root (dependiendo del metodo de sondeo), usa UDP por defecto y tiene muchas opciones (como `-I` para ICMP, `-T` para TCP). `tracepath` es una alternativa mas simple que no requiere permisos de root y tiene menos opciones. Ambos muestran la ruta que siguen los paquetes hasta el destino (saltos/hops). Las versiones IPv6 son `traceroute6` y `tracepath6`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-010">
<div class="flashcard-front">

**P:** En la salida de `route -n`, que indican las flags `UG` en una entrada de la tabla de rutas?

</div>
<div class="flashcard-back">

**R:** c) La ruta esta activa y usa un gateway. En la tabla de rutas, la flag `U` indica que la ruta esta activa (Up) y la flag `G` indica que la ruta usa un gateway (no es directamente conectada). La combinacion `UG` es tipica de la ruta por defecto (0.0.0.0 con gateway). Otras flags: `H` indica que el destino es un host especifico (no una red), `!` indica una ruta de rechazo, `D` indica una ruta creada dinamicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-011">
<div class="flashcard-front">

**P:** Que comando limita el ping a enviar solamente 4 paquetes ICMP al host 192.168.1.1?

</div>
<div class="flashcard-back">

**R:** c) `ping -c 4 192.168.1.1`. La opcion `-c` (count) de `ping` limita el numero de paquetes ICMP Echo Request enviados. `ping -c 4 192.168.1.1` envia exactamente 4 paquetes y luego termina. Sin esta opcion, `ping` en Linux envia paquetes indefinidamente hasta que se presiona Ctrl+C. Otras opciones utiles: `-i` (intervalo entre pings), `-w` (timeout total), `-W` (timeout por paquete), `-s` (tamano del paquete).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-012">
<div class="flashcard-front">

**P:** Un administrador no puede hacer ping ni al gateway ni a ninguna IP externa, pero la interfaz muestra una direccion IP correcta con `ip addr show`. Cual deberia ser el siguiente paso de diagnostico?

</div>
<div class="flashcard-back">

**R:** b) Verificar que la ruta por defecto (gateway) este configurada con `ip route show`. Siguiendo la metodologia de troubleshooting de abajo hacia arriba: la interfaz esta activa y tiene IP (capas 1-2 OK), pero no puede alcanzar el gateway. El siguiente paso logico es verificar la tabla de rutas con `ip route show` para confirmar que existe una ruta por defecto correcta. Si falta el gateway, se agrega con `ip route add default via IP_GATEWAY`. Verificar DNS seria un paso posterior, y reiniciar el servicio no es un diagnostico sistematico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-013">
<div class="flashcard-front">

**P:** Que opcion de `traceroute` permite usar ICMP en lugar de UDP para trazar la ruta?

</div>
<div class="flashcard-back">

**R:** b) `traceroute -I host`. La opcion `-I` de `traceroute` fuerza el uso de ICMP Echo Request en lugar de UDP (que es el metodo por defecto). La opcion `-T` usa TCP en lugar de UDP, lo que es util cuando ICMP y UDP estan bloqueados por firewalls. `traceroute` puede requerir permisos de root dependiendo del metodo. `tracepath` es una alternativa que no requiere root pero tiene menos opciones de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-014">
<div class="flashcard-front">

**P:** Que comando muestra un resumen estadistico de los sockets del sistema con `ss`?

</div>
<div class="flashcard-back">

**R:** b) `ss -s`. El comando `ss -s` muestra un resumen estadistico de los sockets del sistema, incluyendo el numero total de sockets, conexiones TCP establecidas, en escucha, cerradas, etc. Es util para tener una vision rapida del estado de la red. `ss -a` muestra todas las conexiones (no un resumen). `ss -o` muestra informacion de temporizadores. Las opciones mas comunes combinadas son `-tulnp` para ver puertos TCP/UDP en escucha con PID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-015">
<div class="flashcard-front">

**P:** Que herramienta de diagnostico de red se conoce como la "navaja suiza" por su versatilidad en conexiones de red?

</div>
<div class="flashcard-back">

**R:** c) `netcat (nc)`. `netcat` (comando `nc`) es conocido como la "navaja suiza" de las redes por su versatilidad. Permite verificar puertos abiertos (`nc -zv host puerto`), escuchar en puertos (`nc -l puerto`), transferir archivos, enviar peticiones HTTP manuales y mas. `tcpdump` es un capturador de trafico. `mtr` combina ping y traceroute. `nmap` es un escaner de red y puertos. Netcat es una herramienta fundamental para diagnostico y pruebas de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-016">
<div class="flashcard-front">

**P:** Que comando de `tcpdump` captura solo 20 paquetes en la interfaz eth0 sin resolver nombres?

</div>
<div class="flashcard-back">

**R:** a) `tcpdump -i eth0 -n -c 20`. Las opciones de `tcpdump` son: `-i eth0` (interfaz especifica), `-n` (no resolver nombres DNS, hace la captura mas rapida), `-c 20` (capturar solo 20 paquetes y terminar). `tcpdump` requiere permisos de root. Otras opciones importantes: `-w archivo.pcap` (guardar captura), `-r archivo.pcap` (leer captura), `-A` (mostrar en ASCII), `port 80` (filtrar por puerto), `host IP` (filtrar por host).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-017">
<div class="flashcard-front">

**P:** Cual es el comando equivalente de `ping` para IPv6?

</div>
<div class="flashcard-back">

**R:** c) `ping6 host`. El comando `ping6` es el equivalente de `ping` para IPv6. Envia paquetes ICMPv6 Echo Request al host de destino. En versiones modernas de `ping`, tambien se puede usar `ping -6 host` para forzar el uso de IPv6. De forma similar, `traceroute6` y `tracepath6` son las versiones IPv6 de `traceroute` y `tracepath` respectivamente. Tambien se puede usar `traceroute -6` y `tracepath -6`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-018">
<div class="flashcard-front">

**P:** En la salida de `mtr`, que columna indica el porcentaje de paquetes perdidos en cada salto?

</div>
<div class="flashcard-back">

**R:** c) `Loss%`. En la salida de `mtr`, la columna `Loss%` muestra el porcentaje de paquetes perdidos en cada salto (router intermedio). Otras columnas importantes: `Snt` (paquetes enviados), `Last` (ultima latencia), `Avg` (latencia promedio), `Best` (mejor latencia), `Wrst` (peor latencia) y `StDev` (desviacion estandar). `mtr` es especialmente util para detectar donde exactamente hay perdida de paquetes o alta latencia en la ruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-019">
<div class="flashcard-front">

**P:** Que flag en la tabla de rutas indica que el destino es un host especifico y no una red?

</div>
<div class="flashcard-back">

**R:** c) `H`. La flag `H` (Host) en la tabla de rutas indica que el destino es un host especifico, no una red completa. Una ruta con flags `UGH` significa: ruta activa (U), que usa un gateway (G), con destino a un host especifico (H). La mascara para estas rutas es 255.255.255.255 (/32). Las otras flags son: `U` (ruta activa), `G` (usa gateway), `D` (creada dinamicamente), `M` (modificada), `!` (rechaza paquetes).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-020">
<div class="flashcard-front">

**P:** Que comando filtra las conexiones del `ss` para mostrar solo las que usan el puerto destino 443?

</div>
<div class="flashcard-back">

**R:** b) `ss dport = :443`. El comando `ss dport = :443` filtra las conexiones mostrando solo aquellas cuyo puerto destino es 443 (HTTPS). Tambien se puede usar `ss sport = :22` para filtrar por puerto origen 22. Otras opciones de filtrado incluyen: `ss state established` (solo conexiones establecidas), `ss state listening` (solo en escucha). Estas capacidades de filtrado avanzado son una ventaja de `ss` sobre `netstat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-021">
<div class="flashcard-front">

**P:** Que comando envia exactamente 3 paquetes ICMP al host 10.0.0.1?

</div>
<div class="flashcard-back">

**R:** ping -c 3 10.0.0.1. El comando `ping -c 3 10.0.0.1` envia 3 paquetes ICMP Echo Request al host 10.0.0.1 y luego termina. La opcion `-c` (count) limita el numero de paquetes. Sin esta opcion, `ping` en Linux envia paquetes indefinidamente. En la salida se muestra el TTL, el tiempo de ida y vuelta (latencia) y las estadisticas de perdida de paquetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-022">
<div class="flashcard-front">

**P:** Que comando muestra la tabla de rutas IPv6 usando iproute2?

</div>
<div class="flashcard-back">

**R:** ip -6 route show. El comando `ip -6 route show` (o abreviado `ip -6 route`) muestra la tabla de rutas IPv6 del sistema usando iproute2. Es el equivalente moderno de `route -6` o `route -A inet6` del paquete net-tools. La opcion `-6` indica que se deben mostrar las rutas del protocolo IPv6. Para ver la tabla de rutas IPv4 se usa simplemente `ip route show`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-023">
<div class="flashcard-front">

**P:** Que comando verifica si el puerto TCP 22 esta abierto en el host 192.168.1.10 usando netcat?

</div>
<div class="flashcard-back">

**R:** nc -zv 192.168.1.10 22. El comando `nc -zv 192.168.1.10 22` verifica si el puerto TCP 22 esta abierto en el host especificado. La opcion `-z` (zero I/O) realiza solo un escaneo sin enviar datos, y `-v` (verbose) muestra el resultado detallado. Si el puerto esta abierto, `nc` reporta "succeeded" o "open"; si esta cerrado, reporta "refused" o "failed". Para escanear un rango de puertos: `nc -zv host 20-25`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-024">
<div class="flashcard-front">

**P:** Que comando muestra todos los puertos TCP y UDP en escucha con informacion del proceso usando la herramienta moderna?

</div>
<div class="flashcard-back">

**R:** ss -tulnp. El comando `ss -tulnp` es la forma moderna de mostrar puertos en escucha: `-t` (TCP), `-u` (UDP), `-l` (listening/escucha), `-n` (numerico, sin resolver nombres), `-p` (mostrar proceso/PID). `ss` reemplaza a `netstat` del paquete net-tools deprecado. La salida muestra el protocolo, estado, direccion local, direccion remota y el proceso asociado a cada socket.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-025">
<div class="flashcard-front">

**P:** Que comando guarda una captura de trafico de red de la interfaz eth0 en un archivo llamado captura.pcap?

</div>
<div class="flashcard-back">

**R:** tcpdump -i eth0 -w captura.pcap. El comando `tcpdump -i eth0 -w captura.pcap` captura todo el trafico de la interfaz eth0 y lo guarda en el archivo `captura.pcap`. La opcion `-i` especifica la interfaz y `-w` el archivo de salida. Para leer la captura posteriormente se usa `tcpdump -r captura.pcap`. `tcpdump` requiere permisos de root para capturar trafico. Se pueden aplicar filtros como `port 80`, `host IP` o `icmp` para capturar solo trafico especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Se espera conocimiento **basico** de tcpdump, no uso avanzado.

</div>
<div class="flashcard-back">

**R:** Se espera conocimiento **basico** de tcpdump, no uso avanzado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `-z`?

</div>
<div class="flashcard-back">

**R:** Solo escaneo (zero I/O, no enviar datos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-028">
<div class="flashcard-front">

**P:** Que es/son Metodologia de troubleshooting de red?

</div>
<div class="flashcard-back">

**R:** La resolucion de problemas de red se realiza de **abajo hacia arriba**, siguiendo las capas del modelo TCP/IP:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-029">
<div class="flashcard-front">

**P:** Que es/son ping / ping6?

</div>
<div class="flashcard-back">

**R:** Usa ICMP Echo Request/Reply para verificar conectividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-030">
<div class="flashcard-front">

**P:** Que es/son traceroute / tracepath?

</div>
<div class="flashcard-back">

**R:** Muestran la ruta que siguen los paquetes hasta el destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-031">
<div class="flashcard-front">

**P:** Que es/son mtr?

</div>
<div class="flashcard-back">

**R:** Combina `ping` y `traceroute` en una herramienta interactiva en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son ss (socket statistics)?

</div>
<div class="flashcard-back">

**R:** Reemplazo moderno de `netstat`, mas rapido y con mas funcionalidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son netcat / nc?

</div>
<div class="flashcard-back">

**R:** Herramienta versatil para conexiones de red (la "navaja suiza" de las redes).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son tcpdump?

</div>
<div class="flashcard-back">

**R:** Captura y analiza trafico de red (requiere root).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. Metodologia de troubleshooting: **de abajo a arriba** (enlace -> IP -> gateway -> DNS -> servicio)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.3">
</div>

<div class="flashcard" data-id="109.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

