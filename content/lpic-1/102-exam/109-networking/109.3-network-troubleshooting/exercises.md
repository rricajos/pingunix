---
title: "109.3 Resolucion de problemas basicos de red - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-109
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "109"
subtema: "109.3"
---

# 109.3 Resolucion de problemas basicos de red - Ejercicios

### Pregunta 1

Cual es el orden correcto de la metodologia de troubleshooting de red de abajo hacia arriba?

a) DNS -> Gateway -> IP -> Enlace fisico -> Servicio
b) Servicio -> DNS -> Gateway -> IP -> Enlace fisico
c) Enlace fisico -> IP -> Gateway -> DNS -> Servicio
d) Gateway -> IP -> DNS -> Enlace fisico -> Servicio

<details><summary>Respuesta</summary>

**c) Enlace fisico -> IP -> Gateway -> DNS -> Servicio**

La resolucion de problemas de red se realiza de abajo hacia arriba, siguiendo las capas del modelo TCP/IP: 1) Verificar que la interfaz esta activa (enlace fisico), 2) Verificar que tiene IP correcta, 3) Verificar conectividad al gateway, 4) Verificar resolucion DNS, 5) Verificar que el servicio responde. Esto permite identificar sistematicamente en que capa se encuentra el problema.

</details>

---

### Pregunta 2

Que significan las flags `-tulnp` en el comando `ss -tulnp`?

a) TCP, UDP, log, nombres, procesos
b) TCP, UDP, listening, numerico, process
c) TCP, upstream, local, network, port
d) Total, UDP, listening, names, PID

<details><summary>Respuesta</summary>

**b) TCP, UDP, listening, numerico, process**

Las flags `-tulnp` son la combinacion mas comun de `ss` (y `netstat`): `-t` filtra solo conexiones TCP, `-u` filtra solo UDP, `-l` muestra solo puertos en escucha (listening), `-n` muestra direcciones y puertos en formato numerico (sin resolver nombres), y `-p` muestra el PID y nombre del proceso asociado. Esta combinacion muestra todos los servicios que estan escuchando en el sistema.

</details>

---

### Pregunta 3

Cual de las siguientes herramientas combina las funcionalidades de `ping` y `traceroute` en una interfaz interactiva en tiempo real?

a) `netcat`
b) `mtr`
c) `tcpdump`
d) `nmap`

<details><summary>Respuesta</summary>

**b) `mtr`**

`mtr` (My Traceroute) combina `ping` y `traceroute` en una herramienta interactiva en tiempo real, mostrando continuamente la ruta, latencia y perdida de paquetes en cada salto. Es muy util para diagnosticar problemas intermitentes de red. `mtr -r` genera un reporte puntual. `netcat` es para conexiones de red genericas. `tcpdump` captura trafico de red. `nmap` escanea puertos y hosts.

</details>

---

### Pregunta 4

Un usuario puede hacer ping a `8.8.8.8` pero no puede acceder a `www.ejemplo.com`. Cual es la causa mas probable?

a) El gateway esta mal configurado
b) La interfaz de red esta desactivada
c) Hay un problema de resolucion DNS
d) El firewall bloquea todo el trafico saliente

<details><summary>Respuesta</summary>

**c) Hay un problema de resolucion DNS**

Si el ping a una IP publica (8.8.8.8) funciona, la conectividad de red esta correcta (interfaz activa, IP correcta, gateway funcional, acceso a Internet). El hecho de que no pueda acceder a un nombre de dominio indica un problema de resolucion DNS. Se puede diagnosticar con `cat /etc/resolv.conf`, `dig www.ejemplo.com` o `dig @8.8.8.8 www.ejemplo.com` para probar con un DNS especifico.

</details>

---

### Pregunta 5

Que comando verifica si el puerto TCP 443 esta abierto en el servidor 192.168.1.50?

a) `ping -p 443 192.168.1.50`
b) `traceroute -p 443 192.168.1.50`
c) `nc -zv 192.168.1.50 443`
d) `ss -tulnp 192.168.1.50:443`

<details><summary>Respuesta</summary>

**c) `nc -zv 192.168.1.50 443`**

El comando `nc` (netcat) con las opciones `-z` (modo escaneo, sin enviar datos) y `-v` (modo verbose) intenta una conexion TCP al puerto especificado y reporta si esta abierto o cerrado. `ping` usa ICMP y no puede verificar puertos especificos. `traceroute -p` cambia el puerto usado para la traza pero no verifica la apertura de un servicio. `ss -tulnp` solo muestra los puertos locales, no de servidores remotos.

</details>

---

### Pregunta 6

Que significan los asteriscos `* * *` en la salida de `traceroute`?

a) El router de ese salto es el destino final
b) El router de ese salto no respondio dentro del tiempo limite
c) Hay perdida total de paquetes en la red
d) El router esta bloqueando todo el trafico

<details><summary>Respuesta</summary>

**b) El router de ese salto no respondio dentro del tiempo limite**

Los `* * *` en la salida de `traceroute` indican que el router de ese salto no envio una respuesta dentro del tiempo limite. Esto puede deberse a que el router tiene ICMP deshabilitado, el firewall filtra las respuestas, o el paquete fue descartado. No significa necesariamente que haya un problema de conectividad, ya que muchos routers en Internet estan configurados para no responder a estos paquetes.

</details>

---

### Pregunta 7

Cual es la herramienta moderna que reemplaza a `netstat`?

a) `ip`
b) `nmap`
c) `ss`
d) `nc`

<details><summary>Respuesta</summary>

**c) `ss`**

`ss` (socket statistics) del paquete iproute2 es el reemplazo moderno de `netstat` del paquete net-tools (deprecado). `ss` es mas rapido y ofrece mas funcionalidades, como filtrado por estado de conexion (`ss state established`) y por puerto (`ss sport = :22`). Las opciones comunes son compatibles: `ss -tulnp` muestra la misma informacion que `netstat -tulnp`. `ip` reemplaza a `ifconfig` y `route`, no a `netstat`.

</details>

---

### Pregunta 8

Que comando captura solo el trafico del puerto 80 en la interfaz eth0 y lo guarda en un archivo?

a) `tcpdump -i eth0 -p 80 -o captura.pcap`
b) `tcpdump -i eth0 port 80 -w captura.pcap`
c) `ss -i eth0 --capture port 80 > captura.pcap`
d) `netcat -i eth0 -l 80 > captura.pcap`

<details><summary>Respuesta</summary>

**b) `tcpdump -i eth0 port 80 -w captura.pcap`**

`tcpdump` captura trafico de red y requiere permisos de root. La opcion `-i eth0` especifica la interfaz, el filtro `port 80` captura solo trafico del puerto 80, y `-w captura.pcap` guarda la captura en un archivo. Para leer la captura posteriormente se usa `tcpdump -r captura.pcap`. Otras opciones utiles: `-n` (no resolver nombres), `-c 100` (capturar solo 100 paquetes), `-A` (mostrar contenido ASCII).

</details>

---

### Pregunta 9

Que diferencia hay entre `traceroute` y `tracepath`?

a) `traceroute` usa TCP y `tracepath` usa UDP
b) `traceroute` puede requerir root y `tracepath` no requiere root
c) `tracepath` es mas completo y tiene mas opciones que `traceroute`
d) No hay diferencia, son nombres alternativos del mismo comando

<details><summary>Respuesta</summary>

**b) `traceroute` puede requerir root y `tracepath` no requiere root**

`traceroute` es la herramienta clasica que puede requerir permisos de root (dependiendo del metodo de sondeo), usa UDP por defecto y tiene muchas opciones (como `-I` para ICMP, `-T` para TCP). `tracepath` es una alternativa mas simple que no requiere permisos de root y tiene menos opciones. Ambos muestran la ruta que siguen los paquetes hasta el destino (saltos/hops). Las versiones IPv6 son `traceroute6` y `tracepath6`.

</details>

---

### Pregunta 10

En la salida de `route -n`, que indican las flags `UG` en una entrada de la tabla de rutas?

a) La ruta esta inactiva y usa un gateway
b) La ruta esta activa y es una ruta directamente conectada
c) La ruta esta activa y usa un gateway
d) La ruta es una ruta de host que esta activa

<details><summary>Respuesta</summary>

**c) La ruta esta activa y usa un gateway**

En la tabla de rutas, la flag `U` indica que la ruta esta activa (Up) y la flag `G` indica que la ruta usa un gateway (no es directamente conectada). La combinacion `UG` es tipica de la ruta por defecto (0.0.0.0 con gateway). Otras flags: `H` indica que el destino es un host especifico (no una red), `!` indica una ruta de rechazo, `D` indica una ruta creada dinamicamente.

</details>

---

### Pregunta 11

Que comando limita el ping a enviar solamente 4 paquetes ICMP al host 192.168.1.1?

a) `ping -t 4 192.168.1.1`
b) `ping -n 4 192.168.1.1`
c) `ping -c 4 192.168.1.1`
d) `ping -l 4 192.168.1.1`

<details><summary>Respuesta</summary>

**c) `ping -c 4 192.168.1.1`**

La opcion `-c` (count) de `ping` limita el numero de paquetes ICMP Echo Request enviados. `ping -c 4 192.168.1.1` envia exactamente 4 paquetes y luego termina. Sin esta opcion, `ping` en Linux envia paquetes indefinidamente hasta que se presiona Ctrl+C. Otras opciones utiles: `-i` (intervalo entre pings), `-w` (timeout total), `-W` (timeout por paquete), `-s` (tamano del paquete).

</details>

---

### Pregunta 12

Un administrador no puede hacer ping ni al gateway ni a ninguna IP externa, pero la interfaz muestra una direccion IP correcta con `ip addr show`. Cual deberia ser el siguiente paso de diagnostico?

a) Verificar la resolucion DNS
b) Verificar que la ruta por defecto (gateway) este configurada con `ip route show`
c) Reiniciar el servicio de red
d) Verificar el servicio web con `nc -zv`

<details><summary>Respuesta</summary>

**b) Verificar que la ruta por defecto (gateway) este configurada con `ip route show`**

Siguiendo la metodologia de troubleshooting de abajo hacia arriba: la interfaz esta activa y tiene IP (capas 1-2 OK), pero no puede alcanzar el gateway. El siguiente paso logico es verificar la tabla de rutas con `ip route show` para confirmar que existe una ruta por defecto correcta. Si falta el gateway, se agrega con `ip route add default via IP_GATEWAY`. Verificar DNS seria un paso posterior, y reiniciar el servicio no es un diagnostico sistematico.

</details>

---

### Pregunta 13

Que opcion de `traceroute` permite usar ICMP en lugar de UDP para trazar la ruta?

a) `traceroute -T host`
b) `traceroute -I host`
c) `traceroute -U host`
d) `traceroute -P icmp host`

<details><summary>Respuesta</summary>

**b) `traceroute -I host`**

La opcion `-I` de `traceroute` fuerza el uso de ICMP Echo Request en lugar de UDP (que es el metodo por defecto). La opcion `-T` usa TCP en lugar de UDP, lo que es util cuando ICMP y UDP estan bloqueados por firewalls. `traceroute` puede requerir permisos de root dependiendo del metodo. `tracepath` es una alternativa que no requiere root pero tiene menos opciones de configuracion.

</details>

---

### Pregunta 14

Que comando muestra un resumen estadistico de los sockets del sistema con `ss`?

a) `ss -a`
b) `ss -s`
c) `ss -i`
d) `ss --stats`

<details><summary>Respuesta</summary>

**b) `ss -s`**

El comando `ss -s` muestra un resumen estadistico de los sockets del sistema, incluyendo el numero total de sockets, conexiones TCP establecidas, en escucha, cerradas, etc. Es util para tener una vision rapida del estado de la red. `ss -a` muestra todas las conexiones (no un resumen). `ss -o` muestra informacion de temporizadores. Las opciones mas comunes combinadas son `-tulnp` para ver puertos TCP/UDP en escucha con PID.

</details>

---

### Pregunta 15

Que herramienta de diagnostico de red se conoce como la "navaja suiza" por su versatilidad en conexiones de red?

a) `tcpdump`
b) `mtr`
c) `netcat (nc)`
d) `nmap`

<details><summary>Respuesta</summary>

**c) `netcat (nc)`**

`netcat` (comando `nc`) es conocido como la "navaja suiza" de las redes por su versatilidad. Permite verificar puertos abiertos (`nc -zv host puerto`), escuchar en puertos (`nc -l puerto`), transferir archivos, enviar peticiones HTTP manuales y mas. `tcpdump` es un capturador de trafico. `mtr` combina ping y traceroute. `nmap` es un escaner de red y puertos. Netcat es una herramienta fundamental para diagnostico y pruebas de red.

</details>

---

### Pregunta 16

Que comando de `tcpdump` captura solo 20 paquetes en la interfaz eth0 sin resolver nombres?

a) `tcpdump -i eth0 -n -c 20`
b) `tcpdump -i eth0 -limit 20 -numeric`
c) `tcpdump -eth0 -n -p 20`
d) `tcpdump --interface eth0 --count 20 --no-dns`

<details><summary>Respuesta</summary>

**a) `tcpdump -i eth0 -n -c 20`**

Las opciones de `tcpdump` son: `-i eth0` (interfaz especifica), `-n` (no resolver nombres DNS, hace la captura mas rapida), `-c 20` (capturar solo 20 paquetes y terminar). `tcpdump` requiere permisos de root. Otras opciones importantes: `-w archivo.pcap` (guardar captura), `-r archivo.pcap` (leer captura), `-A` (mostrar en ASCII), `port 80` (filtrar por puerto), `host IP` (filtrar por host).

</details>

---

### Pregunta 17

Cual es el comando equivalente de `ping` para IPv6?

a) `ping -v6 host`
b) `ping --ipv6 host`
c) `ping6 host`
d) `pingv6 host`

<details><summary>Respuesta</summary>

**c) `ping6 host`**

El comando `ping6` es el equivalente de `ping` para IPv6. Envia paquetes ICMPv6 Echo Request al host de destino. En versiones modernas de `ping`, tambien se puede usar `ping -6 host` para forzar el uso de IPv6. De forma similar, `traceroute6` y `tracepath6` son las versiones IPv6 de `traceroute` y `tracepath` respectivamente. Tambien se puede usar `traceroute -6` y `tracepath -6`.

</details>

---

### Pregunta 18

En la salida de `mtr`, que columna indica el porcentaje de paquetes perdidos en cada salto?

a) `Avg`
b) `Snt`
c) `Loss%`
d) `StDev`

<details><summary>Respuesta</summary>

**c) `Loss%`**

En la salida de `mtr`, la columna `Loss%` muestra el porcentaje de paquetes perdidos en cada salto (router intermedio). Otras columnas importantes: `Snt` (paquetes enviados), `Last` (ultima latencia), `Avg` (latencia promedio), `Best` (mejor latencia), `Wrst` (peor latencia) y `StDev` (desviacion estandar). `mtr` es especialmente util para detectar donde exactamente hay perdida de paquetes o alta latencia en la ruta.

</details>

---

### Pregunta 19

Que flag en la tabla de rutas indica que el destino es un host especifico y no una red?

a) `U`
b) `G`
c) `H`
d) `D`

<details><summary>Respuesta</summary>

**c) `H`**

La flag `H` (Host) en la tabla de rutas indica que el destino es un host especifico, no una red completa. Una ruta con flags `UGH` significa: ruta activa (U), que usa un gateway (G), con destino a un host especifico (H). La mascara para estas rutas es 255.255.255.255 (/32). Las otras flags son: `U` (ruta activa), `G` (usa gateway), `D` (creada dinamicamente), `M` (modificada), `!` (rechaza paquetes).

</details>

---

### Pregunta 20

Que comando filtra las conexiones del `ss` para mostrar solo las que usan el puerto destino 443?

a) `ss -t port 443`
b) `ss dport = :443`
c) `ss --dest-port 443`
d) `ss -p 443`

<details><summary>Respuesta</summary>

**b) `ss dport = :443`**

El comando `ss dport = :443` filtra las conexiones mostrando solo aquellas cuyo puerto destino es 443 (HTTPS). Tambien se puede usar `ss sport = :22` para filtrar por puerto origen 22. Otras opciones de filtrado incluyen: `ss state established` (solo conexiones establecidas), `ss state listening` (solo en escucha). Estas capacidades de filtrado avanzado son una ventaja de `ss` sobre `netstat`.

</details>

---

### Pregunta 21

Que comando envia exactamente 3 paquetes ICMP al host 10.0.0.1?

<input type="text" class="fill-blank" data-answer="ping -c 3 10.0.0.1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ping -c 3 10.0.0.1**

El comando `ping -c 3 10.0.0.1` envia 3 paquetes ICMP Echo Request al host 10.0.0.1 y luego termina. La opcion `-c` (count) limita el numero de paquetes. Sin esta opcion, `ping` en Linux envia paquetes indefinidamente. En la salida se muestra el TTL, el tiempo de ida y vuelta (latencia) y las estadisticas de perdida de paquetes.

</details>

---

### Pregunta 22

Que comando muestra la tabla de rutas IPv6 usando iproute2?

<input type="text" class="fill-blank" data-answer="ip -6 route show" data-alt="ip -6 route" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip -6 route show**

El comando `ip -6 route show` (o abreviado `ip -6 route`) muestra la tabla de rutas IPv6 del sistema usando iproute2. Es el equivalente moderno de `route -6` o `route -A inet6` del paquete net-tools. La opcion `-6` indica que se deben mostrar las rutas del protocolo IPv6. Para ver la tabla de rutas IPv4 se usa simplemente `ip route show`.

</details>

---

### Pregunta 23

Que comando verifica si el puerto TCP 22 esta abierto en el host 192.168.1.10 usando netcat?

<input type="text" class="fill-blank" data-answer="nc -zv 192.168.1.10 22" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nc -zv 192.168.1.10 22**

El comando `nc -zv 192.168.1.10 22` verifica si el puerto TCP 22 esta abierto en el host especificado. La opcion `-z` (zero I/O) realiza solo un escaneo sin enviar datos, y `-v` (verbose) muestra el resultado detallado. Si el puerto esta abierto, `nc` reporta "succeeded" o "open"; si esta cerrado, reporta "refused" o "failed". Para escanear un rango de puertos: `nc -zv host 20-25`.

</details>

---

### Pregunta 24

Que comando muestra todos los puertos TCP y UDP en escucha con informacion del proceso usando la herramienta moderna?

<input type="text" class="fill-blank" data-answer="ss -tulnp" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ss -tulnp**

El comando `ss -tulnp` es la forma moderna de mostrar puertos en escucha: `-t` (TCP), `-u` (UDP), `-l` (listening/escucha), `-n` (numerico, sin resolver nombres), `-p` (mostrar proceso/PID). `ss` reemplaza a `netstat` del paquete net-tools deprecado. La salida muestra el protocolo, estado, direccion local, direccion remota y el proceso asociado a cada socket.

</details>

---

### Pregunta 25

Que comando guarda una captura de trafico de red de la interfaz eth0 en un archivo llamado captura.pcap?

<input type="text" class="fill-blank" data-answer="tcpdump -i eth0 -w captura.pcap" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tcpdump -i eth0 -w captura.pcap**

El comando `tcpdump -i eth0 -w captura.pcap` captura todo el trafico de la interfaz eth0 y lo guarda en el archivo `captura.pcap`. La opcion `-i` especifica la interfaz y `-w` el archivo de salida. Para leer la captura posteriormente se usa `tcpdump -r captura.pcap`. `tcpdump` requiere permisos de root para capturar trafico. Se pueden aplicar filtros como `port 80`, `host IP` o `icmp` para capturar solo trafico especifico.

</details>
