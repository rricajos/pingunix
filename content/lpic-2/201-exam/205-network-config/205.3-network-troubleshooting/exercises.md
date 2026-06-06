---
title: "205.3 - Resolucion de problemas de red"
tags: [lpic-2, examen-201, tema-205, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "205"
subtema: "205.3"
---

# 205.3 - Ejercicios: Resolucion de problemas de red

### Pregunta 1
Un administrador puede hacer ping a 8.8.8.8 pero no puede acceder a ningun sitio web por nombre. Cual es la causa mas probable?

a) El gateway esta mal configurado
b) La interfaz de red esta desactivada
c) El servidor DNS no esta configurado o no responde
d) El firewall esta bloqueando todo el trafico

<details>
<summary>Respuesta</summary>

**c) El servidor DNS no esta configurado o no responde**

Si el ping a una IP publica (8.8.8.8) funciona, la conectividad de red esta operativa (interfaz, IP, gateway, enrutamiento). El problema es que no se pueden resolver nombres de dominio a direcciones IP, lo que indica un fallo en la configuracion DNS. Se debe verificar `/etc/resolv.conf` y probar con `dig` o `nslookup` para confirmar.
</details>

---

### Pregunta 2
Que comando muestra los puertos TCP que estan en modo escucha junto con el proceso propietario?

a) `ss -ulnp`
b) `ss -tlnp`
c) `ss -tanp`
d) `ss -s`

<details>
<summary>Respuesta</summary>

**b) `ss -tlnp`**

Las opciones significan: `-t` (TCP), `-l` (listening/escucha), `-n` (numerico, sin resolver nombres), `-p` (mostrar proceso). La opcion a) mostraria UDP (`-u`), la opcion c) mostraria todas las conexiones TCP (`-a` incluye establecidas y en escucha), y la opcion d) muestra un resumen de estadisticas.
</details>

---

### Pregunta 3
Que herramienta combina las funcionalidades de ping y traceroute en una monitorizacion interactiva continua?

a) tracepath
b) iptraf
c) mtr
d) nmap

<details>
<summary>Respuesta</summary>

**c) mtr**

`mtr` (My Traceroute) ejecuta continuamente un traceroute y muestra estadisticas en tiempo real de cada salto, incluyendo porcentaje de perdida de paquetes, latencia minima, media y maxima, y desviacion estandar. Es la herramienta ideal para diagnosticar problemas intermitentes de ruta. Se puede usar en modo interactivo o con `--report` para un informe no interactivo.
</details>

---

### Pregunta 4
Que comando de tcpdump captura todo el trafico HTTP hacia el host 192.168.1.100 y lo guarda en un archivo?

a) `tcpdump -i eth0 host 192.168.1.100 and port 80 -w /tmp/http.pcap`
b) `tcpdump -i eth0 http 192.168.1.100 -o /tmp/http.pcap`
c) `tcpdump -capture eth0 192.168.1.100:80 --save /tmp/http.pcap`
d) `tcpdump -i eth0 -filter "host=192.168.1.100 port=80" -w /tmp/http.pcap`

<details>
<summary>Respuesta</summary>

**a) `tcpdump -i eth0 host 192.168.1.100 and port 80 -w /tmp/http.pcap`**

La sintaxis de tcpdump usa filtros BPF (Berkeley Packet Filter): `host` filtra por IP, `port` filtra por puerto, y `and` combina condiciones. La opcion `-w` escribe la captura en formato pcap. La opcion `-i` especifica la interfaz. Los filtros son expresiones de texto libre, no formato clave=valor.
</details>

---

### Pregunta 5
Que opcion de dig muestra solo la respuesta a la consulta DNS, sin cabeceras ni informacion adicional?

a) `dig --brief`
b) `dig +noall`
c) `dig +short`
d) `dig -q`

<details>
<summary>Respuesta</summary>

**c) `dig +short`**

La opcion `+short` de dig muestra unicamente la respuesta a la consulta, omitiendo toda la informacion adicional (cabeceras, seccion de autoridad, seccion adicional, estadisticas). Por ejemplo, `dig +short ejemplo.com` mostraria solo la IP (como `93.184.216.34`). Es muy util para scripts y consultas rapidas.
</details>

---

### Pregunta 6
Un administrador ejecuta `nmap -sn 192.168.1.0/24`. Que hace este comando?

a) Escanea todos los puertos de todos los hosts en la red
b) Realiza un ping sweep para descubrir hosts activos sin escanear puertos
c) Escanea los puertos 1-1024 de toda la subred
d) Realiza un escaneo SYN stealth de la subred

<details>
<summary>Respuesta</summary>

**b) Realiza un ping sweep para descubrir hosts activos sin escanear puertos**

La opcion `-sn` (anteriormente `-sP`) indica a nmap que realice solo el descubrimiento de hosts, sin escanear puertos. Utiliza una combinacion de ICMP echo, TCP SYN al puerto 443, TCP ACK al puerto 80 y ICMP timestamp para determinar que hosts estan activos. Es util para obtener un inventario rapido de la red.
</details>

---

### Pregunta 7
Que informacion proporciona el comando `ethtool eth0`?

a) Las direcciones IP configuradas en la interfaz
b) Las rutas de red asociadas a la interfaz
c) La velocidad, duplex, autonegociacion y estado del enlace fisico
d) Las reglas de firewall aplicadas a la interfaz

<details>
<summary>Respuesta</summary>

**c) La velocidad, duplex, autonegociacion y estado del enlace fisico**

`ethtool` muestra informacion de la capa fisica de la interfaz de red: velocidad del enlace (100Mb/s, 1000Mb/s), modo duplex (Full/Half), estado de autonegociacion (on/off), y si hay enlace detectado (Link detected: yes/no). Es la primera herramienta a usar cuando se sospecha de problemas fisicos de red.
</details>

---

### Pregunta 8
Que comando se usa para verificar rapidamente si el puerto 443 de un servidor remoto esta abierto y aceptando conexiones?

a) `ping 192.168.1.100:443`
b) `traceroute -p 443 192.168.1.100`
c) `nc -zv 192.168.1.100 443`
d) `dig 192.168.1.100 443`

<details>
<summary>Respuesta</summary>

**c) `nc -zv 192.168.1.100 443`**

El comando `nc` (netcat) con las opciones `-z` (modo escaneo, sin enviar datos) y `-v` (verbose, mostrar resultado) intenta establecer una conexion TCP al puerto especificado. Si el puerto esta abierto, reporta "Connection succeeded" o "open"; si esta cerrado o filtrado, reporta un error. `ping` no puede verificar puertos y `dig` es para consultas DNS.
</details>

---

### Pregunta 9
En la salida de traceroute, que significa una linea con `* * *`?

a) El destino ha sido alcanzado
b) Hay una perdida total de paquetes en la ruta
c) El router en ese salto no responde a los sondeos (puede filtrar ICMP/UDP)
d) La conexion ha sido rechazada por un firewall

<details>
<summary>Respuesta</summary>

**c) El router en ese salto no responde a los sondeos (puede filtrar ICMP/UDP)**

Los asteriscos `* * *` indican que el router en ese salto no envio respuestas ICMP Time Exceeded. Esto puede deberse a que el router tiene configurado filtrar ese tipo de trafico, tiene limitacion de tasa para ICMP, o esta muy congestionado. No necesariamente indica un problema: muchos routers de Internet filtran deliberadamente estos paquetes por seguridad. Si los saltos siguientes responden, la ruta funciona correctamente.
</details>

---

### Pregunta 10
Un administrador necesita trazar la cadena completa de resolucion DNS de un dominio, desde los servidores raiz hasta el servidor autoritativo. Que comando debe usar?

a) `dig +recurse ejemplo.com`
b) `dig +trace ejemplo.com`
c) `nslookup -debug ejemplo.com`
d) `host -a ejemplo.com`

<details>
<summary>Respuesta</summary>

**b) `dig +trace ejemplo.com`**

La opcion `+trace` de dig realiza consultas iterativas empezando por los servidores raiz DNS (.), pasando por los servidores TLD (.com), hasta llegar al servidor autoritativo del dominio. Muestra cada paso de la cadena de delegacion, lo que es invaluable para diagnosticar problemas de resolucion DNS como delegaciones incorrectas o servidores autoritativos no respondiendo.
</details>

---

### Pregunta 11

Que opcion de tcpdump evita la resolucion de nombres de host y puertos, mostrando solo valores numericos?

a) `-v`
b) `-nn`
c) `-q`
d) `-N`

<details>
<summary>Respuesta</summary>

**b) `-nn`**

La opcion `-nn` de tcpdump desactiva la resolucion de nombres. La primera `-n` evita la resolucion de direcciones IP a nombres de host, y la segunda `-n` evita la resolucion de numeros de puerto a nombres de servicio. Esto acelera significativamente la captura al no realizar consultas DNS inversas por cada paquete capturado.
</details>

---

### Pregunta 12

Un administrador necesita verificar si hay errores de transmision o paquetes descartados en una interfaz de red. Que comando debe usar?

a) `ip route show dev eth0`
b) `ip -s link show eth0`
c) `ping -c 4 localhost`
d) `ss -s`

<details>
<summary>Respuesta</summary>

**b) `ip -s link show eth0`**

El comando `ip -s link show eth0` muestra estadisticas detalladas de la interfaz, incluyendo el numero de bytes y paquetes transmitidos/recibidos, errores de RX/TX, paquetes descartados (dropped), desbordamientos (overruns) y errores de trama. Estas estadisticas son fundamentales para diagnosticar problemas de rendimiento o hardware en la capa fisica.
</details>

---

### Pregunta 13

Que estado en la tabla de vecinos (ip neigh) indica que una entrada ARP fue configurada manualmente y no expirara?

a) `REACHABLE`
b) `STALE`
c) `PERMANENT`
d) `DELAY`

<details>
<summary>Respuesta</summary>

**c) `PERMANENT`**

El estado `PERMANENT` indica que la entrada fue configurada manualmente por el administrador (entrada estatica) y no sera eliminada automaticamente por el mecanismo de expiracion del kernel. Las entradas `REACHABLE` son validas y verificadas recientemente, `STALE` son validas pero antiguas, y `DELAY` estan esperando confirmacion de accesibilidad.
</details>

---

### Pregunta 14

Que opcion de nmap realiza un escaneo SYN stealth que requiere privilegios de root?

a) `-sT`
b) `-sS`
c) `-sU`
d) `-sn`

<details>
<summary>Respuesta</summary>

**b) `-sS`**

La opcion `-sS` realiza un escaneo SYN (half-open scan), que envia paquetes SYN sin completar la conexion TCP. Es mas rapido y menos detectable que un escaneo TCP completo (`-sT`), pero requiere privilegios de root para crear paquetes raw. `-sU` escanea puertos UDP y `-sn` realiza solo descubrimiento de hosts sin escanear puertos.
</details>

---

### Pregunta 15

Que columna de mtr indica el porcentaje de paquetes que se perdieron en cada salto?

a) `Avg`
b) `Snt`
c) `Loss%`
d) `StDev`

<details>
<summary>Respuesta</summary>

**c) `Loss%`**

La columna `Loss%` en mtr muestra el porcentaje de paquetes perdidos en cada salto de la ruta. Un valor alto en un salto intermedio no siempre indica un problema real, ya que algunos routers limitan las respuestas ICMP. Si el `Loss%` solo es alto en el destino final, entonces si hay un problema de perdida de paquetes real.
</details>

---

### Pregunta 16

Un administrador ejecuta `ping -s 1472 -M do -c 4 destino`. Que esta intentando verificar?

a) La velocidad de la conexion
b) Si el destino soporta paquetes fragmentados
c) El MTU del camino (Path MTU Discovery)
d) La resolucion DNS del destino

<details>
<summary>Respuesta</summary>

**c) El MTU del camino (Path MTU Discovery)**

La opcion `-s 1472` establece un tamano de paquete de 1472 bytes de datos (que con las cabeceras IP e ICMP de 28 bytes suma 1500, el MTU estandar de Ethernet). La opcion `-M do` activa el bit "Don't Fragment" (DF), lo que impide la fragmentacion. Si el MTU del camino es menor que 1500, se recibira un error ICMP "Fragmentation Needed", indicando un problema de MTU.
</details>

---

### Pregunta 17

Que herramienta de diagnostico de red proporciona informacion sobre la velocidad del enlace, el modo duplex y si hay un cable conectado fisicamente?

a) `ip addr show`
b) `ss -s`
c) `ethtool`
d) `nmap`

<details>
<summary>Respuesta</summary>

**c) `ethtool`**

El comando `ethtool` muestra informacion de la capa fisica de la interfaz de red, incluyendo la velocidad del enlace (10/100/1000 Mbps), modo duplex (Full/Half), estado de autonegociacion y si se detecta enlace fisico (Link detected: yes/no). Es la herramienta de primera linea para diagnosticar problemas fisicos de conectividad.
</details>

---

### Pregunta 18

Que opcion de ss muestra tanto los sockets TCP como UDP que estan en modo escucha?

a) `ss -tlnp`
b) `ss -tulnp`
c) `ss -tanp`
d) `ss -tuanp`

<details>
<summary>Respuesta</summary>

**b) `ss -tulnp`**

La combinacion `-tulnp` incluye: `-t` (TCP), `-u` (UDP), `-l` (listening/escucha), `-n` (numerico) y `-p` (proceso). Sin la opcion `-u`, solo se mostrarian los sockets TCP. La opcion `-a` mostraria todos los sockets (incluyendo los establecidos), no solo los que estan en escucha.
</details>

---

### Pregunta 19

Un administrador quiere capturar solo los paquetes ICMP en la interfaz eth0 usando tcpdump. Que filtro debe utilizar?

a) `tcpdump -i eth0 protocol icmp`
b) `tcpdump -i eth0 icmp`
c) `tcpdump -i eth0 --filter icmp`
d) `tcpdump -i eth0 type icmp`

<details>
<summary>Respuesta</summary>

**b) `tcpdump -i eth0 icmp`**

Los filtros de tcpdump usan la sintaxis BPF (Berkeley Packet Filter). Para filtrar por protocolo se escribe directamente el nombre del protocolo: `icmp`, `tcp`, `udp`, `arp`, etc. No se necesitan opciones adicionales como `--filter` o `protocol`. Estos filtros se pueden combinar con operadores logicos: `tcpdump -i eth0 icmp and host 192.168.1.1`.
</details>

---

### Pregunta 20

Que opcion de nmap permite detectar la version de los servicios que estan ejecutandose en los puertos abiertos?

a) `-O`
b) `-sV`
c) `-A`
d) `-F`

<details>
<summary>Respuesta</summary>

**b) `-sV`**

La opcion `-sV` (Service Version detection) de nmap interroga los puertos abiertos para determinar el servicio y su version. Por ejemplo, puede distinguir entre Apache 2.4.41 y Nginx 1.18.0 en el puerto 80. La opcion `-O` detecta el sistema operativo, `-A` es un escaneo agresivo que incluye `-sV`, `-O` y mas, y `-F` es un escaneo rapido de los puertos mas comunes.
</details>

---

### Pregunta 21

Escribe el comando para capturar el trafico de red en la interfaz eth0 y guardarlo en un archivo pcap llamado /tmp/captura.pcap.

<input type="text" class="fill-blank" data-answer="tcpdump -i eth0 -w /tmp/captura.pcap" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**tcpdump -i eth0 -w /tmp/captura.pcap**

El comando `tcpdump -i eth0 -w /tmp/captura.pcap` captura todo el trafico de la interfaz eth0 y lo guarda en formato pcap. La opcion `-i` especifica la interfaz y `-w` indica el archivo de salida. El archivo pcap puede analizarse posteriormente con `tcpdump -r` o con herramientas graficas como Wireshark.
</details>

---

### Pregunta 22

Escribe el comando para realizar una consulta DNS inversa (de IP a nombre) de la direccion 8.8.8.8 usando dig.

<input type="text" class="fill-blank" data-answer="dig -x 8.8.8.8" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**dig -x 8.8.8.8**

La opcion `-x` de dig realiza una consulta DNS inversa (PTR), traduciendo la direccion IP al nombre de dominio asociado. Internamente, dig convierte la IP al formato de zona inversa `8.8.8.8.in-addr.arpa` y consulta el registro PTR correspondiente.
</details>

---

### Pregunta 23

Escribe el comando para generar un reporte no interactivo de mtr hacia el host 10.0.0.1.

<input type="text" class="fill-blank" data-answer="mtr --report 10.0.0.1" data-alt="mtr -r 10.0.0.1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mtr --report 10.0.0.1**

El comando `mtr --report` (o `mtr -r`) ejecuta mtr en modo no interactivo, realizando un numero predeterminado de ciclos (por defecto 10) y luego muestra un informe con las estadisticas de cada salto. Es util para scripts y para compartir resultados de diagnostico con otros administradores.
</details>

---

### Pregunta 24

Escribe el comando para verificar si el puerto 22 del host 192.168.1.50 esta abierto usando netcat.

<input type="text" class="fill-blank" data-answer="nc -zv 192.168.1.50 22" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**nc -zv 192.168.1.50 22**

El comando `nc -zv` verifica la conectividad a un puerto especifico. La opcion `-z` indica modo escaneo (no envia datos) y `-v` activa el modo verbose para ver el resultado. Si el puerto esta abierto, reportara "Connection succeeded" o "open". Es mas rapido y ligero que nmap para verificar un solo puerto.
</details>

---

### Pregunta 25

Escribe el comando para mostrar la tabla de vecinos ARP del sistema usando la herramienta moderna de iproute2.

<input type="text" class="fill-blank" data-answer="ip neigh show" data-alt="ip neigh,ip n show,ip n,ip neighbour show" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ip neigh show**

El comando `ip neigh show` (o su forma abreviada `ip n`) muestra la tabla de vecinos del sistema, que incluye las entradas ARP (IPv4) y NDP (IPv6). Cada entrada muestra la direccion IP, la direccion MAC (lladdr), la interfaz y el estado (REACHABLE, STALE, DELAY, etc.). Es el reemplazo moderno de `arp -a`.
</details>

---
