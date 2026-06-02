---
title: "334.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "334.2"
---

# Flashcards: 334.2 - Deteccion De Intrusiones Red

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre un IDS y un IPS?

</div>
<div class="flashcard-back">

**R:** b). IDS detecta y alerta; IPS detecta y bloquea el trafico malicioso  Un IDS (Intrusion Detection System) monitoriza el trafico de forma pasiva y genera alertas. Un IPS (Intrusion Prevention System) se coloca en linea (inline) y puede bloquear o descartar trafico malicioso activamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando ejecuta Snort en modo NIDS utilizando un archivo de configuracion?

</div>
<div class="flashcard-back">

**R:** b). `snort -c /etc/snort/snort.conf -l /var/log/snort`  La opcion `-c` especifica el archivo de configuracion que incluye las reglas de deteccion, activando el modo NIDS. `-l` indica el directorio de logs. Sin `-c`, Snort opera como sniffer o logger.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que filtro de tcpdump captura solo paquetes TCP con el flag SYN activado (sin ACK)?

</div>
<div class="flashcard-back">

**R:** b). `tcpdump -i eth0 'tcp[tcpflags] == tcp-syn'`  El filtro `tcp[tcpflags] == tcp-syn` captura paquetes donde SOLO el flag SYN esta activo. Usar `& tcp-syn != 0` capturaria cualquier paquete con SYN, incluyendo SYN-ACK.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que ventaja principal tiene Suricata sobre Snort?

</div>
<div class="flashcard-back">

**R:** b). Suricata soporta multi-hilo nativo  Suricata fue diseñado desde el inicio con soporte multi-hilo, permitiendo aprovechar multiples nucleos de CPU para mejor rendimiento. Snort clasico es mono-hilo. Ambos son open source.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que archivo de log de Zeek contiene informacion sobre todas las conexiones de red observadas?

</div>
<div class="flashcard-back">

**R:** c). `conn.log`  `conn.log` registra un resumen de cada conexion observada, incluyendo IPs de origen y destino, puertos, protocolo, duracion, bytes transferidos y servicio detectado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-006">
<div class="flashcard-front">

**P:** En una regla de Snort, ¿que opcion especifica el patron de contenido a buscar en el payload del paquete?

</div>
<div class="flashcard-back">

**R:** c). `content:`  La opcion `content:` especifica una cadena o patron hexadecimal que Snort buscara en el payload del paquete. Puede combinarse con `nocase` para busqueda insensible a mayusculas y con `http_uri` para limitar la busqueda a la URI HTTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando de tshark extrae solo las direcciones IP de origen y destino de un archivo PCAP?

</div>
<div class="flashcard-back">

**R:** b). `tshark -r captura.pcap -T fields -e ip.src -e ip.dst`  `-T fields` cambia el formato de salida a campos, y `-e campo` especifica que campos extraer. Esto permite obtener datos estructurados para analisis posterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que tipo de deteccion de intrusiones es mas eficaz contra ataques zero-day?

</div>
<div class="flashcard-back">

**R:** b). Basada en anomalias  La deteccion basada en anomalias establece una linea base del comportamiento normal y alerta cuando se detectan desviaciones. Esto permite detectar ataques nuevos (zero-day) que no tienen firma conocida, aunque genera mas falsos positivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que opcion de tcpdump captura paquetes sin truncar el contenido?

</div>
<div class="flashcard-back">

**R:** b). `tcpdump -i eth0 -s 0`  La opcion `-s 0` (snaplen 0) captura el paquete completo sin truncar. Por defecto, tcpdump puede truncar paquetes grandes. El valor 0 significa capturar el maximo posible (65535 bytes).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que herramienta proporciona monitorizacion de trafico de red en tiempo real con interfaz web?

</div>
<div class="flashcard-back">

**R:** c). ntopng  ntopng proporciona una interfaz web (por defecto en el puerto 3000) que muestra estadisticas de trafico en tiempo real, flujos de red, hosts activos y alertas. Snort y Zeek no tienen interfaz web nativa; tcpdump es solo linea de comandos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que modo de operacion de Snort muestra paquetes con cabeceras, datos del payload y capa de enlace?

</div>
<div class="flashcard-back">

**R:** c) Correcta. `snort -vde` ejecuta Snort en modo sniffer mostrando la maxima informacion: `-v` para cabeceras, `-d` para datos del payload, y `-e` para la capa de enlace (Ethernet/MAC). Sin la opcion `-c` con archivo de configuracion, Snort opera como sniffer simple y no analiza contra reglas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-012">
<div class="flashcard-front">

**P:** En una regla de Snort, ¿que opcion permite especificar un umbral de activacion para evitar alertas excesivas?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opcion `threshold:` controla la frecuencia de activacion de una regla. Acepta parametros como `type` (limit, threshold, both), `track` (by_src, by_dst), `count` y `seconds`. Por ejemplo, `threshold:type both,track by_src,count 20,seconds 5;` alerta cuando una IP origen genera 20 coincidencias en 5 segundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que formato de log utiliza Suricata por defecto para registrar eventos, alertas y metadatos de protocolos?

</div>
<div class="flashcard-back">

**R:** c) Correcta. Suricata utiliza EVE (Extensible Event Format) JSON como formato principal de log. Este formato estructurado permite registrar alertas, metadatos de protocolos (HTTP, DNS, TLS), informacion de archivos y mas en un formato facilmente procesable por herramientas de analisis como jq, Elasticsearch o sistemas SIEM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que opcion de tcpdump permite capturar paquetes y mostrar su contenido en formato ASCII, util para inspeccionar trafico HTTP en texto plano?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opcion `-A` muestra el contenido del paquete en formato ASCII, lo que es muy util para inspeccionar trafico de protocolos basados en texto como HTTP, SMTP o FTP. La opcion `-X` muestra el contenido en hexadecimal y ASCII combinado, y `-XX` incluye ademas la cabecera de enlace.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que variable predefinida de Snort representa la red local que se desea proteger?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `$HOME_NET` es la variable que define la red local a proteger en la configuracion de Snort. Se define en `snort.conf` (por ejemplo, `var HOME_NET 192.168.1.0/24`). La variable complementaria `$EXTERNAL_NET` define las redes externas. Las reglas de Snort usan estas variables para determinar la direccion del trafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-016">
<div class="flashcard-front">

**P:** ¿En que modo opera Suricata cuando se ejecuta con la opcion `-q 0` para funcionar como IPS utilizando NFQUEUE?

</div>
<div class="flashcard-back">

**R:** c) Correcta. La opcion `-q 0` indica a Suricata que reciba paquetes del target NFQUEUE de iptables/nftables con el numero de cola 0. En este modo inline (IPS), Suricata puede inspeccionar cada paquete y decidir si aceptarlo o descartarlo basandose en las reglas, antes de que continue su viaje por el stack de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que herramienta de linea de comandos permite leer logs de Zeek y extraer campos especificos de forma eficiente?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `zeek-cut` es una herramienta diseñada para procesar los logs tabulados de Zeek, permitiendo seleccionar y extraer columnas especificas por nombre. Por ejemplo, `cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p` extrae las IPs de origen, destino y puerto de destino de todas las conexiones registradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que accion de una regla Snort descarta el paquete cuando se ejecuta en modo IPS (inline)?

</div>
<div class="flashcard-back">

**R:** c) Correcta. La accion `drop` en Snort descarta el paquete silenciosamente cuando se ejecuta en modo inline (IPS). `reject` descarta el paquete y envia un reset TCP o un ICMP unreachable al origen. `alert` solo genera una alerta sin bloquear. `pass` permite el trafico sin accion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-019">
<div class="flashcard-front">

**P:** Un administrador necesita capturar los primeros 100 paquetes de trafico DNS en la interfaz eth0 sin resolucion de nombres. ¿Que comando de tcpdump debe usar?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `-n` deshabilita la resolucion DNS (evita que tcpdump genere trafico DNS adicional al resolver direcciones). `-c 100` limita la captura a 100 paquetes. `port 53` filtra trafico DNS por puerto. Los filtros BPF van al final del comando, despues de las opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que log de Zeek registra actividad anomala o malformada detectada durante el analisis de trafico?

</div>
<div class="flashcard-back">

**R:** c) Correcta. `weird.log` registra actividad anomala detectada por Zeek, como protocolos malformados, violaciones de estandares, o comportamientos inesperados en el trafico. `notice.log` contiene alertas y notificaciones de mayor nivel, `conn.log` registra todas las conexiones, y Zeek no genera un archivo llamado `alert.log`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar Suricata en modo IDS monitorizando la interfaz eth0 con su archivo de configuracion por defecto. <input type="text" class="fill-blank" data-answer="suricata -c /etc/suricata/suricata.yaml -i eth0" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** suricata -c /etc/suricata/suricata.yaml -i eth0. `-c` especifica el archivo de configuracion YAML de Suricata e `-i` la interfaz de red a monitorizar. En modo IDS, Suricata captura trafico de forma pasiva y genera alertas segun las reglas configuradas, sin bloquear paquetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando de tcpdump para capturar todo el trafico de la interfaz eth0 y guardarlo en un archivo PCAP llamado `captura.pcap`. <input type="text" class="fill-blank" data-answer="tcpdump -i eth0 -w captura.pcap" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tcpdump -i eth0 -w captura.pcap. La opcion `-w` escribe los paquetes capturados en formato PCAP al archivo especificado. Este archivo puede ser analizado posteriormente con herramientas como Wireshark, tshark, Suricata o Zeek para analisis forense o deteccion de incidentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando de tshark para leer un archivo PCAP y filtrar solo las peticiones HTTP de tipo GET. <input type="text" class="fill-blank" data-answer="tshark -r captura.pcap -Y &quot;http.request.method == GET&quot;" data-alt="tshark -r captura.pcap -Y 'http.request.method == GET'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tshark -r captura.pcap -Y "http.request.method == GET". `-r` lee un archivo PCAP previamente capturado. `-Y` aplica un filtro de visualizacion (display filter) de Wireshark. Los filtros de visualizacion son mas granulares que los filtros de captura BPF y permiten filtrar por campos de protocolo como el metodo HTTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para actualizar las reglas de deteccion de Suricata. <input type="text" class="fill-blank" data-answer="suricata-update" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** suricata-update. `suricata-update` descarga y actualiza las reglas de deteccion de Suricata desde fuentes configuradas (como Emerging Threats). Gestiona automaticamente la descarga, descompresion e instalacion de las reglas en el directorio configurado en `suricata.yaml`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar Zeek y analizar un archivo PCAP existente llamado `evidencia.pcap`. <input type="text" class="fill-blank" data-answer="zeek -r evidencia.pcap" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** zeek -r evidencia.pcap. `zeek -r` procesa un archivo PCAP y genera los logs estructurados correspondientes (conn.log, dns.log, http.log, ssl.log, etc.) en el directorio actual. Es una herramienta fundamental para el analisis forense de red, ya que extrae y estructura automaticamente informacion de multiples protocolos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Comprende las diferencias entre IDS e IPS, los modos de operacion de Snort/Suric...

</div>
<div class="flashcard-back">

**R:** Comprende las diferencias entre IDS e IPS, los modos de operacion de Snort/Suricata, y la sintaxis basica de reglas. Conoce las opciones avanzadas de tcpdump.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los filtros BPF (Berkeley Packet Filter) usados por tcpdump. Los filtros ...

</div>
<div class="flashcard-back">

**R:** Conoce los filtros BPF (Berkeley Packet Filter) usados por tcpdump. Los filtros de flags TCP como `tcp[tcpflags]` son especialmente relevantes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `alert`?

</div>
<div class="flashcard-back">

**R:** Accion (alert, log, pass, drop, reject)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-029">
<div class="flashcard-front">

**P:** Que es/son IDS vs IPS?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | IDS (Detection) | IPS (Prevention) |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son Snort?

</div>
<div class="flashcard-back">

**R:** Snort es uno de los NIDS mas populares y puede operar en tres modos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son Suricata?

</div>
<div class="flashcard-back">

**R:** Suricata es un motor NIDS/IPS de alto rendimiento con soporte multi-hilo, compatible con reglas de Snort.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son Zeek (anteriormente Bro)?

</div>
<div class="flashcard-back">

**R:** Zeek es un framework de analisis de trafico de red que genera logs estructurados detallados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.2">
</div>

<div class="flashcard" data-id="334.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son Monitoreo de Red con ntopng?

</div>
<div class="flashcard-back">

**R:** ntopng proporciona monitorizacion de trafico en tiempo real con interfaz web.

</div>
</div>

---

