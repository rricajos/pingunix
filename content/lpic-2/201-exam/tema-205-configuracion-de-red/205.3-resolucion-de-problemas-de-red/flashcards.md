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

> 26 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: Seguir un enfoque metodologico por capas es fundamental. Empieza siempre por lo ...

</div>
<div class="flashcard-back">

**R:** Seguir un enfoque metodologico por capas es fundamental. Empieza siempre por lo basico (cable, IP, gateway) antes de investigar problemas mas complejos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-012">
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

<div class="flashcard" data-id="205.3-fc-013">
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

<div class="flashcard" data-id="205.3-fc-014">
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

<div class="flashcard" data-id="205.3-fc-015">
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

<div class="flashcard" data-id="205.3-fc-016">
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

<div class="flashcard" data-id="205.3-fc-017">
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

<div class="flashcard" data-id="205.3-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `time`?

</div>
<div class="flashcard-back">

**R:** Tiempo de ida y vuelta (RTT)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-019">
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

<div class="flashcard" data-id="205.3-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `rtt min/avg/max/mdev`?

</div>
<div class="flashcard-back">

**R:** Estadisticas de latencia

</div>
</div>

---

<div class="flashcard-deck" data-subtema="205.3">
</div>

<div class="flashcard" data-id="205.3-fc-021">
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

<div class="flashcard" data-id="205.3-fc-022">
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

<div class="flashcard" data-id="205.3-fc-023">
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

<div class="flashcard" data-id="205.3-fc-024">
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

<div class="flashcard" data-id="205.3-fc-025">
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

<div class="flashcard" data-id="205.3-fc-026">
<div class="flashcard-front">

**P:** Que es/son nc / ncat - Navaja suiza de red?

</div>
<div class="flashcard-back">

**R:** `nc` (netcat) o `ncat` (version mejorada de nmap) permite crear conexiones TCP/UDP arbitrarias.

</div>
</div>

---

