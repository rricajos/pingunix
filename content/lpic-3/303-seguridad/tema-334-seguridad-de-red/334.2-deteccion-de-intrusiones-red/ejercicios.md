---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "334 - Seguridad de Red"
tema: "334.2 - Deteccion de intrusiones en la red"
subtema: "334.2"
peso: 4
tags:
  - lpic-3
  - tema-334
  - snort
  - suricata
  - tcpdump
  - nids
---

# Ejercicios - 334.2 Deteccion de Intrusiones en la Red

### Pregunta 1
¿Cual es la diferencia principal entre un IDS y un IPS?

a) IDS es mas rapido que IPS
b) IDS detecta y alerta; IPS detecta y bloquea el trafico malicioso
c) IPS solo funciona en modo offline
d) IDS analiza solo encabezados; IPS analiza el contenido completo

<details><summary>Respuesta</summary>

**b)** IDS detecta y alerta; IPS detecta y bloquea el trafico malicioso

Un IDS (Intrusion Detection System) monitoriza el trafico de forma pasiva y genera alertas. Un IPS (Intrusion Prevention System) se coloca en linea (inline) y puede bloquear o descartar trafico malicioso activamente.
</details>

### Pregunta 2
¿Que comando ejecuta Snort en modo NIDS utilizando un archivo de configuracion?

a) `snort -v -i eth0`
b) `snort -c /etc/snort/snort.conf -l /var/log/snort`
c) `snort --nids -config /etc/snort/snort.conf`
d) `snort -dev -l /var/log/snort`

<details><summary>Respuesta</summary>

**b)** `snort -c /etc/snort/snort.conf -l /var/log/snort`

La opcion `-c` especifica el archivo de configuracion que incluye las reglas de deteccion, activando el modo NIDS. `-l` indica el directorio de logs. Sin `-c`, Snort opera como sniffer o logger.
</details>

### Pregunta 3
¿Que filtro de tcpdump captura solo paquetes TCP con el flag SYN activado (sin ACK)?

a) `tcpdump -i eth0 'tcp syn'`
b) `tcpdump -i eth0 'tcp[tcpflags] == tcp-syn'`
c) `tcpdump -i eth0 'tcp flags syn'`
d) `tcpdump -i eth0 -syn`

<details><summary>Respuesta</summary>

**b)** `tcpdump -i eth0 'tcp[tcpflags] == tcp-syn'`

El filtro `tcp[tcpflags] == tcp-syn` captura paquetes donde SOLO el flag SYN esta activo. Usar `& tcp-syn != 0` capturaria cualquier paquete con SYN, incluyendo SYN-ACK.
</details>

### Pregunta 4
¿Que ventaja principal tiene Suricata sobre Snort?

a) Suricata es gratuito y Snort es de pago
b) Suricata soporta multi-hilo nativo
c) Suricata no necesita reglas
d) Suricata solo funciona en modo IPS

<details><summary>Respuesta</summary>

**b)** Suricata soporta multi-hilo nativo

Suricata fue diseñado desde el inicio con soporte multi-hilo, permitiendo aprovechar multiples nucleos de CPU para mejor rendimiento. Snort clasico es mono-hilo. Ambos son open source.
</details>

### Pregunta 5
¿Que archivo de log de Zeek contiene informacion sobre todas las conexiones de red observadas?

a) `http.log`
b) `notice.log`
c) `conn.log`
d) `network.log`

<details><summary>Respuesta</summary>

**c)** `conn.log`

`conn.log` registra un resumen de cada conexion observada, incluyendo IPs de origen y destino, puertos, protocolo, duracion, bytes transferidos y servicio detectado.
</details>

### Pregunta 6
En una regla de Snort, ¿que opcion especifica el patron de contenido a buscar en el payload del paquete?

a) `pattern:`
b) `match:`
c) `content:`
d) `payload:`

<details><summary>Respuesta</summary>

**c)** `content:`

La opcion `content:` especifica una cadena o patron hexadecimal que Snort buscara en el payload del paquete. Puede combinarse con `nocase` para busqueda insensible a mayusculas y con `http_uri` para limitar la busqueda a la URI HTTP.
</details>

### Pregunta 7
¿Que comando de tshark extrae solo las direcciones IP de origen y destino de un archivo PCAP?

a) `tshark -r captura.pcap -Y "ip.src and ip.dst"`
b) `tshark -r captura.pcap -T fields -e ip.src -e ip.dst`
c) `tshark -r captura.pcap --extract ip.src ip.dst`
d) `tshark -r captura.pcap -f "ip.src ip.dst"`

<details><summary>Respuesta</summary>

**b)** `tshark -r captura.pcap -T fields -e ip.src -e ip.dst`

`-T fields` cambia el formato de salida a campos, y `-e campo` especifica que campos extraer. Esto permite obtener datos estructurados para analisis posterior.
</details>

### Pregunta 8
¿Que tipo de deteccion de intrusiones es mas eficaz contra ataques zero-day?

a) Basada en firmas
b) Basada en anomalias
c) Basada en listas negras
d) Basada en protocolos

<details><summary>Respuesta</summary>

**b)** Basada en anomalias

La deteccion basada en anomalias establece una linea base del comportamiento normal y alerta cuando se detectan desviaciones. Esto permite detectar ataques nuevos (zero-day) que no tienen firma conocida, aunque genera mas falsos positivos.
</details>

### Pregunta 9
¿Que opcion de tcpdump captura paquetes sin truncar el contenido?

a) `tcpdump -i eth0 -full`
b) `tcpdump -i eth0 -s 0`
c) `tcpdump -i eth0 -complete`
d) `tcpdump -i eth0 -l 65535`

<details><summary>Respuesta</summary>

**b)** `tcpdump -i eth0 -s 0`

La opcion `-s 0` (snaplen 0) captura el paquete completo sin truncar. Por defecto, tcpdump puede truncar paquetes grandes. El valor 0 significa capturar el maximo posible (65535 bytes).
</details>

### Pregunta 10
¿Que herramienta proporciona monitorizacion de trafico de red en tiempo real con interfaz web?

a) Snort
b) Zeek
c) ntopng
d) tcpdump

<details><summary>Respuesta</summary>

**c)** ntopng

ntopng proporciona una interfaz web (por defecto en el puerto 3000) que muestra estadisticas de trafico en tiempo real, flujos de red, hosts activos y alertas. Snort y Zeek no tienen interfaz web nativa; tcpdump es solo linea de comandos.
</details>

### Pregunta 11

¿Que modo de operacion de Snort muestra paquetes con cabeceras, datos del payload y capa de enlace?

a) `snort -v`
b) `snort -vd`
c) `snort -vde`
d) `snort -A full`

<details><summary>Respuesta</summary>

**c) Correcta**

`snort -vde` ejecuta Snort en modo sniffer mostrando la maxima informacion: `-v` para cabeceras, `-d` para datos del payload, y `-e` para la capa de enlace (Ethernet/MAC). Sin la opcion `-c` con archivo de configuracion, Snort opera como sniffer simple y no analiza contra reglas.

</details>

### Pregunta 12

En una regla de Snort, ¿que opcion permite especificar un umbral de activacion para evitar alertas excesivas?

a) `rate:`
b) `threshold:`
c) `limit:`
d) `frequency:`

<details><summary>Respuesta</summary>

**b) Correcta**

La opcion `threshold:` controla la frecuencia de activacion de una regla. Acepta parametros como `type` (limit, threshold, both), `track` (by_src, by_dst), `count` y `seconds`. Por ejemplo, `threshold:type both,track by_src,count 20,seconds 5;` alerta cuando una IP origen genera 20 coincidencias en 5 segundos.

</details>

### Pregunta 13

¿Que formato de log utiliza Suricata por defecto para registrar eventos, alertas y metadatos de protocolos?

a) Texto plano (syslog)
b) unified2 (formato binario)
c) EVE JSON
d) PCAP

<details><summary>Respuesta</summary>

**c) Correcta**

Suricata utiliza EVE (Extensible Event Format) JSON como formato principal de log. Este formato estructurado permite registrar alertas, metadatos de protocolos (HTTP, DNS, TLS), informacion de archivos y mas en un formato facilmente procesable por herramientas de analisis como jq, Elasticsearch o sistemas SIEM.

</details>

### Pregunta 14

¿Que opcion de tcpdump permite capturar paquetes y mostrar su contenido en formato ASCII, util para inspeccionar trafico HTTP en texto plano?

a) `-X`
b) `-A`
c) `-T`
d) `-d`

<details><summary>Respuesta</summary>

**b) Correcta**

La opcion `-A` muestra el contenido del paquete en formato ASCII, lo que es muy util para inspeccionar trafico de protocolos basados en texto como HTTP, SMTP o FTP. La opcion `-X` muestra el contenido en hexadecimal y ASCII combinado, y `-XX` incluye ademas la cabecera de enlace.

</details>

### Pregunta 15

¿Que variable predefinida de Snort representa la red local que se desea proteger?

a) `$LOCAL_NET`
b) `$HOME_NET`
c) `$INTERNAL_NET`
d) `$PROTECTED_NET`

<details><summary>Respuesta</summary>

**b) Correcta**

`$HOME_NET` es la variable que define la red local a proteger en la configuracion de Snort. Se define en `snort.conf` (por ejemplo, `var HOME_NET 192.168.1.0/24`). La variable complementaria `$EXTERNAL_NET` define las redes externas. Las reglas de Snort usan estas variables para determinar la direccion del trafico.

</details>

### Pregunta 16

¿En que modo opera Suricata cuando se ejecuta con la opcion `-q 0` para funcionar como IPS utilizando NFQUEUE?

a) Modo sniffer
b) Modo offline
c) Modo IPS inline
d) Modo logger

<details><summary>Respuesta</summary>

**c) Correcta**

La opcion `-q 0` indica a Suricata que reciba paquetes del target NFQUEUE de iptables/nftables con el numero de cola 0. En este modo inline (IPS), Suricata puede inspeccionar cada paquete y decidir si aceptarlo o descartarlo basandose en las reglas, antes de que continue su viaje por el stack de red.

</details>

### Pregunta 17

¿Que herramienta de linea de comandos permite leer logs de Zeek y extraer campos especificos de forma eficiente?

a) `zeek-extract`
b) `zeek-cut`
c) `zeek-filter`
d) `zeek-parse`

<details><summary>Respuesta</summary>

**b) Correcta**

`zeek-cut` es una herramienta diseñada para procesar los logs tabulados de Zeek, permitiendo seleccionar y extraer columnas especificas por nombre. Por ejemplo, `cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p` extrae las IPs de origen, destino y puerto de destino de todas las conexiones registradas.

</details>

### Pregunta 18

¿Que accion de una regla Snort descarta el paquete cuando se ejecuta en modo IPS (inline)?

a) `alert`
b) `reject`
c) `drop`
d) `block`

<details><summary>Respuesta</summary>

**c) Correcta**

La accion `drop` en Snort descarta el paquete silenciosamente cuando se ejecuta en modo inline (IPS). `reject` descarta el paquete y envia un reset TCP o un ICMP unreachable al origen. `alert` solo genera una alerta sin bloquear. `pass` permite el trafico sin accion.

</details>

### Pregunta 19

Un administrador necesita capturar los primeros 100 paquetes de trafico DNS en la interfaz eth0 sin resolucion de nombres. ¿Que comando de tcpdump debe usar?

a) `tcpdump -i eth0 port 53 -c 100 --no-resolve`
b) `tcpdump -i eth0 -n port 53 -c 100`
c) `tcpdump -i eth0 dns -c 100 -n`
d) `tcpdump -i eth0 -c 100 --filter dns -n`

<details><summary>Respuesta</summary>

**b) Correcta**

`-n` deshabilita la resolucion DNS (evita que tcpdump genere trafico DNS adicional al resolver direcciones). `-c 100` limita la captura a 100 paquetes. `port 53` filtra trafico DNS por puerto. Los filtros BPF van al final del comando, despues de las opciones.

</details>

### Pregunta 20

¿Que log de Zeek registra actividad anomala o malformada detectada durante el analisis de trafico?

a) `notice.log`
b) `conn.log`
c) `weird.log`
d) `alert.log`

<details><summary>Respuesta</summary>

**c) Correcta**

`weird.log` registra actividad anomala detectada por Zeek, como protocolos malformados, violaciones de estandares, o comportamientos inesperados en el trafico. `notice.log` contiene alertas y notificaciones de mayor nivel, `conn.log` registra todas las conexiones, y Zeek no genera un archivo llamado `alert.log`.

</details>

### Pregunta 21

Escribe el comando para ejecutar Suricata en modo IDS monitorizando la interfaz eth0 con su archivo de configuracion por defecto.

<input type="text" class="fill-blank" data-answer="suricata -c /etc/suricata/suricata.yaml -i eth0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**suricata -c /etc/suricata/suricata.yaml -i eth0**

`-c` especifica el archivo de configuracion YAML de Suricata e `-i` la interfaz de red a monitorizar. En modo IDS, Suricata captura trafico de forma pasiva y genera alertas segun las reglas configuradas, sin bloquear paquetes.

</details>

### Pregunta 22

Escribe el comando de tcpdump para capturar todo el trafico de la interfaz eth0 y guardarlo en un archivo PCAP llamado `captura.pcap`.

<input type="text" class="fill-blank" data-answer="tcpdump -i eth0 -w captura.pcap" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tcpdump -i eth0 -w captura.pcap**

La opcion `-w` escribe los paquetes capturados en formato PCAP al archivo especificado. Este archivo puede ser analizado posteriormente con herramientas como Wireshark, tshark, Suricata o Zeek para analisis forense o deteccion de incidentes.

</details>

### Pregunta 23

Escribe el comando de tshark para leer un archivo PCAP y filtrar solo las peticiones HTTP de tipo GET.

<input type="text" class="fill-blank" data-answer="tshark -r captura.pcap -Y &quot;http.request.method == GET&quot;" data-alt="tshark -r captura.pcap -Y 'http.request.method == GET'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tshark -r captura.pcap -Y "http.request.method == GET"**

`-r` lee un archivo PCAP previamente capturado. `-Y` aplica un filtro de visualizacion (display filter) de Wireshark. Los filtros de visualizacion son mas granulares que los filtros de captura BPF y permiten filtrar por campos de protocolo como el metodo HTTP.

</details>

### Pregunta 24

Escribe el comando para actualizar las reglas de deteccion de Suricata.

<input type="text" class="fill-blank" data-answer="suricata-update" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**suricata-update**

`suricata-update` descarga y actualiza las reglas de deteccion de Suricata desde fuentes configuradas (como Emerging Threats). Gestiona automaticamente la descarga, descompresion e instalacion de las reglas en el directorio configurado en `suricata.yaml`.

</details>

### Pregunta 25

Escribe el comando para ejecutar Zeek y analizar un archivo PCAP existente llamado `evidencia.pcap`.

<input type="text" class="fill-blank" data-answer="zeek -r evidencia.pcap" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**zeek -r evidencia.pcap**

`zeek -r` procesa un archivo PCAP y genera los logs estructurados correspondientes (conn.log, dns.log, http.log, ssl.log, etc.) en el directorio actual. Es una herramienta fundamental para el analisis forense de red, ya que extrae y estructura automaticamente informacion de multiples protocolos.

</details>
