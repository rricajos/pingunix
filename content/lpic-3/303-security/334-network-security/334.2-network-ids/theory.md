---
tipo: teoria
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
  - nids
  - tcpdump
---

# 334.2 Deteccion de Intrusiones en la Red

## Introduccion

Los sistemas de deteccion de intrusiones de red (NIDS) analizan el trafico de red en busca de actividad maliciosa. Este subtema cubre herramientas como Snort, Suricata, Zeek/Bro y herramientas de captura como tcpdump y Wireshark, asi como los conceptos fundamentales de deteccion basada en firmas y anomalias.

> **Para el examen:** Comprende las diferencias entre IDS e IPS, los modos de operacion de Snort/Suricata, y la sintaxis basica de reglas. Conoce las opciones avanzadas de tcpdump.

---

## IDS vs IPS

| Caracteristica | IDS (Detection) | IPS (Prevention) |
|---------------|-----------------|-------------------|
| Accion | Detecta y alerta | Detecta y bloquea |
| Posicion | Fuera de linea (espejo/tap) | En linea (inline) |
| Latencia | No añade | Puede añadir |
| Fallo | Sin impacto en red | Puede interrumpir trafico |
| Modo en Snort | Sniffer/Logger/NIDS | Inline mode |

### Deteccion Basada en Firmas vs Anomalias

| Tipo | Ventajas | Desventajas |
|------|----------|-------------|
| Firmas | Precisa, pocos falsos positivos | No detecta ataques nuevos (zero-day) |
| Anomalias | Detecta ataques desconocidos | Mas falsos positivos, requiere baseline |

---

## Snort

Snort es uno de los NIDS mas populares y puede operar en tres modos.

### Modos de Operacion

```bash
# Modo Sniffer - muestra paquetes en pantalla
snort -v                    # Solo cabeceras
snort -vd                   # Cabeceras + datos
snort -vde                  # Cabeceras + datos + capa enlace

# Modo Logger - registra paquetes en disco
snort -dev -l /var/log/snort

# Modo NIDS - analiza trafico contra reglas
snort -c /etc/snort/snort.conf -l /var/log/snort

# Modo IPS (inline)
snort -Q --daq afpacket -i eth0:eth1 -c /etc/snort/snort.conf
```

### Estructura de Reglas Snort

```
accion protocolo ip_origen puerto_origen -> ip_destino puerto_destino (opciones;)
```

```bash
# Ejemplos de reglas Snort

# Alertar sobre intento de acceso SSH
alert tcp any any -> $HOME_NET 22 (msg:"SSH connection attempt"; \
  flow:to_server,established; sid:1000001; rev:1;)

# Detectar escaneo de puertos SYN
alert tcp any any -> $HOME_NET any (msg:"Possible SYN scan"; \
  flags:S; threshold:type both,track by_src,count 20,seconds 5; \
  sid:1000002; rev:1;)

# Detectar contenido especifico
alert tcp any any -> $HOME_NET 80 (msg:"SQL Injection attempt"; \
  content:"UNION SELECT"; nocase; http_uri; sid:1000003; rev:1;)

# Detectar shellcode
alert ip any any -> $HOME_NET any (msg:"Shellcode detected"; \
  content:"|90 90 90 90 90|"; sid:1000004; rev:1;)
```

### Componentes de una Regla

| Componente | Descripcion |
|-----------|-------------|
| `alert` | Accion (alert, log, pass, drop, reject) |
| `tcp/udp/icmp/ip` | Protocolo |
| `$HOME_NET` | Variable de red local |
| `$EXTERNAL_NET` | Variable de red externa |
| `->` | Direccion del trafico |
| `msg:` | Mensaje de la alerta |
| `content:` | Patron a buscar en el payload |
| `sid:` | ID unico de la regla |
| `rev:` | Revision de la regla |
| `flow:` | Direccion del flujo |
| `threshold:` | Umbral de activacion |

---

## Suricata

Suricata es un motor NIDS/IPS de alto rendimiento con soporte multi-hilo, compatible con reglas de Snort.

```bash
# Ejecutar Suricata
suricata -c /etc/suricata/suricata.yaml -i eth0

# Modo IDS
suricata -c /etc/suricata/suricata.yaml -i eth0

# Modo IPS (inline con NFQUEUE)
suricata -c /etc/suricata/suricata.yaml -q 0

# Modo offline (analisis PCAP)
suricata -c /etc/suricata/suricata.yaml -r captura.pcap

# Actualizar reglas
suricata-update
```

### Configuracion Principal

```yaml
# /etc/suricata/suricata.yaml
vars:
  address-groups:
    HOME_NET: "[192.168.1.0/24]"
    EXTERNAL_NET: "!$HOME_NET"

default-rule-path: /var/lib/suricata/rules

outputs:
  - eve-log:
      enabled: yes
      filetype: regular
      filename: eve.json
      types:
        - alert
        - dns
        - http
        - tls
        - files
```

| Caracteristica | Snort | Suricata |
|---------------|-------|----------|
| Hilos | Mono-hilo | Multi-hilo |
| Compatibilidad reglas | Nativas | Compatible con Snort |
| Formato de log | Texto/unified2 | EVE JSON |
| Protocolo L7 | Limitado | Deteccion avanzada |
| GPU aceleracion | No | Disponible |

---

## tcpdump - Filtros Avanzados

```bash
# Captura basica
tcpdump -i eth0

# Capturar a archivo PCAP
tcpdump -i eth0 -w captura.pcap

# Leer archivo PCAP
tcpdump -r captura.pcap

# Filtros avanzados
# Solo trafico SSH
tcpdump -i eth0 port 22

# Trafico desde una IP especifica
tcpdump -i eth0 src host 192.168.1.100

# Trafico TCP con flag SYN
tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'

# Solo paquetes SYN (sin ACK)
tcpdump -i eth0 'tcp[tcpflags] == tcp-syn'

# Paquetes ICMP
tcpdump -i eth0 icmp

# Trafico DNS
tcpdump -i eth0 port 53

# Trafico HTTP con contenido
tcpdump -i eth0 -A port 80

# Combinar filtros
tcpdump -i eth0 'src net 192.168.1.0/24 and dst port 443'

# Limitar captura
tcpdump -i eth0 -c 100      # Solo 100 paquetes
tcpdump -i eth0 -s 0        # Captura completa (no truncar)

# Mostrar en hexadecimal y ASCII
tcpdump -i eth0 -XX port 80

# Sin resolucion DNS
tcpdump -i eth0 -n

# Rotacion de archivos
tcpdump -i eth0 -w captura_%Y%m%d.pcap -G 3600 -W 24
```

> **Para el examen:** Conoce los filtros BPF (Berkeley Packet Filter) usados por tcpdump. Los filtros de flags TCP como `tcp[tcpflags]` son especialmente relevantes.

---

## Wireshark / tshark

```bash
# tshark - version de linea de comandos de Wireshark

# Capturar en interfaz
tshark -i eth0

# Filtro de captura (BPF)
tshark -i eth0 -f "port 80"

# Filtro de visualizacion
tshark -i eth0 -Y "http.request.method == GET"

# Capturar a archivo
tshark -i eth0 -w captura.pcap

# Leer y filtrar archivo PCAP
tshark -r captura.pcap -Y "dns"

# Estadisticas de protocolos
tshark -r captura.pcap -q -z io,phs

# Estadisticas de conversaciones
tshark -r captura.pcap -q -z conv,tcp

# Extraer campos especificos
tshark -r captura.pcap -T fields -e ip.src -e ip.dst -e tcp.dstport

# Seguir flujo TCP
tshark -r captura.pcap -z follow,tcp,ascii,0
```

---

## Zeek (anteriormente Bro)

Zeek es un framework de analisis de trafico de red que genera logs estructurados detallados.

```bash
# Ejecutar Zeek en una interfaz
zeek -i eth0

# Analizar archivo PCAP
zeek -r captura.pcap

# Logs generados en el directorio actual:
# conn.log    - Conexiones
# dns.log     - Consultas DNS
# http.log    - Peticiones HTTP
# ssl.log     - Conexiones TLS/SSL
# files.log   - Archivos transferidos
# notice.log  - Alertas y notificaciones
# weird.log   - Actividad anomala

# Leer logs con zeek-cut
cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p proto service

# Buscar conexiones sospechosas
cat conn.log | zeek-cut id.orig_h id.resp_h duration | sort -t$'\t' -k3 -rn
```

---

## Monitoreo de Red con ntopng

ntopng proporciona monitorizacion de trafico en tiempo real con interfaz web.

```bash
# Ejecutar ntopng
ntopng -i eth0

# Con archivo PCAP
ntopng -i captura.pcap

# Acceder via navegador: http://localhost:3000
# Usuario por defecto: admin/admin
```

---

## Analisis de PCAP y Correlacion de Logs

### Flujo de Analisis

1. **Captura**: tcpdump o Wireshark para capturar trafico
2. **Deteccion**: Snort/Suricata para alertas basadas en firmas
3. **Analisis**: Zeek para logs estructurados
4. **Correlacion**: Comparar alertas con logs del sistema
5. **Respuesta**: Documentar y responder al incidente

```bash
# Ejemplo de correlacion:
# 1. Suricata detecta alerta
cat /var/log/suricata/eve.json | jq 'select(.event_type=="alert")'

# 2. Buscar la IP en logs de Zeek
grep "IP_SOSPECHOSA" /var/log/zeek/conn.log

# 3. Verificar en logs del sistema
journalctl --since "2025-01-15 10:00" --until "2025-01-15 11:00" | grep "IP_SOSPECHOSA"
```

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **IDS vs IPS** — IDS (Detection) solo detecta y alerta, se coloca fuera de linea (mirror/tap); IPS (Prevention) detecta y bloquea, se coloca en linea (inline). Si el IPS falla, puede interrumpir el trafico de red. El examen pregunta frecuentemente por la posicion en la red y el impacto de un fallo
- **Snort: modos de operacion** — sniffer (`-v`), logger (`-dev -l`), NIDS (`-c snort.conf`) e IPS inline (`-Q --daq afpacket`). No confundir los modos: `-v` solo muestra paquetes en pantalla, NO analiza contra reglas. Para deteccion real se necesita `-c` con archivo de configuracion
- **Deteccion por firmas vs anomalias** — firmas: precisa pero no detecta zero-days; anomalias: detecta ataques desconocidos pero mas falsos positivos. El examen puede preguntar que tipo de deteccion captura un ataque completamente nuevo (respuesta: anomalias)
- **Snort `sid` unico obligatorio** — cada regla de Snort debe tener un `sid` (Signature ID) unico. Las reglas personalizadas deben usar sid >= 1000000 para no colisionar con las reglas oficiales. Olvidar el sid o usar uno duplicado causa errores
- **Snort `->` vs `<>`** — `->` indica trafico unidireccional (origen a destino); `<>` indica trafico bidireccional. Usar `->` cuando se necesita `<>` puede perder detecciones en la direccion inversa
- **Suricata multi-hilo vs Snort mono-hilo** — Suricata usa multi-threading nativo (mejor rendimiento en multi-core); Snort clasico es mono-hilo. Para redes de alto ancho de banda, Suricata es mas adecuado. El examen puede preguntar ventajas de rendimiento
- **Suricata EVE JSON vs Snort unified2** — Suricata genera logs en formato EVE JSON (facil de parsear, integrable con SIEM); Snort clasico usa unified2 (binario). Si la pregunta menciona formato de log moderno o integracion con Elasticsearch, la respuesta es Suricata/EVE
- **tcpdump: filtros BPF y flags TCP** — `tcp[tcpflags] & tcp-syn != 0` captura paquetes con flag SYN activado (incluyendo SYN-ACK); `tcp[tcpflags] == tcp-syn` captura SOLO paquetes SYN puros. La diferencia entre `&` (AND bit a bit) y `==` (igualdad exacta) es critica
- **tcpdump `-s 0`** — captura el paquete completo sin truncar. Por defecto, tcpdump puede truncar paquetes largos. Sin `-s 0`, se puede perder el payload relevante para analisis. Siempre usarlo en capturas forenses
- **Zeek (Bro) genera logs, no alertas** — a diferencia de Snort/Suricata, Zeek genera logs estructurados detallados (conn.log, dns.log, http.log) pero no alerta directamente sobre firmas de ataques. Es un framework de analisis de trafico, no un IDS basado en firmas. Confundir su funcion es un error comun
