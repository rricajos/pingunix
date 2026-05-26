---
tipo: comandos
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

# Comandos Clave - 334.2 Deteccion de Intrusiones en la Red

## Snort

| Comando | Descripcion |
|---------|-------------|
| `snort -v` | Modo sniffer (solo cabeceras) |
| `snort -vde` | Modo sniffer completo |
| `snort -dev -l /var/log/snort` | Modo logger |
| `snort -c /etc/snort/snort.conf -l /var/log/snort` | Modo NIDS |
| `snort -Q --daq afpacket -i eth0:eth1 -c snort.conf` | Modo IPS inline |
| `snort -T -c /etc/snort/snort.conf` | Verificar configuracion |

## Suricata

| Comando | Descripcion |
|---------|-------------|
| `suricata -c /etc/suricata/suricata.yaml -i eth0` | Modo IDS |
| `suricata -c /etc/suricata/suricata.yaml -q 0` | Modo IPS (NFQUEUE) |
| `suricata -c /etc/suricata/suricata.yaml -r captura.pcap` | Analisis offline |
| `suricata-update` | Actualizar reglas |
| `/etc/suricata/suricata.yaml` | Configuracion principal |
| `/var/log/suricata/eve.json` | Log principal (formato JSON) |

## tcpdump

| Comando | Descripcion |
|---------|-------------|
| `tcpdump -i eth0` | Captura basica |
| `tcpdump -i eth0 -w captura.pcap` | Guardar a archivo |
| `tcpdump -r captura.pcap` | Leer archivo PCAP |
| `tcpdump -i eth0 -n port 22` | Filtrar por puerto, sin DNS |
| `tcpdump -i eth0 src host 10.0.0.1` | Filtrar por IP origen |
| `tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'` | Paquetes con SYN |
| `tcpdump -i eth0 'tcp[tcpflags] == tcp-syn'` | Solo SYN (sin ACK) |
| `tcpdump -i eth0 -A port 80` | Mostrar payload ASCII |
| `tcpdump -i eth0 -XX port 80` | Mostrar hex y ASCII |
| `tcpdump -i eth0 -c 100 -s 0` | 100 paquetes, sin truncar |
| `tcpdump -i eth0 'src net 192.168.1.0/24 and dst port 443'` | Filtro combinado |

## tshark (Wireshark CLI)

| Comando | Descripcion |
|---------|-------------|
| `tshark -i eth0` | Captura en interfaz |
| `tshark -i eth0 -f "port 80"` | Filtro de captura BPF |
| `tshark -i eth0 -Y "http.request"` | Filtro de visualizacion |
| `tshark -r captura.pcap -Y "dns"` | Filtrar PCAP |
| `tshark -r captura.pcap -q -z io,phs` | Estadisticas de protocolos |
| `tshark -r captura.pcap -q -z conv,tcp` | Estadisticas de conversaciones |
| `tshark -r captura.pcap -T fields -e ip.src -e ip.dst` | Extraer campos |

## Zeek (Bro)

| Comando | Descripcion |
|---------|-------------|
| `zeek -i eth0` | Monitorear interfaz |
| `zeek -r captura.pcap` | Analizar PCAP |
| `zeek-cut campo1 campo2 < log.log` | Extraer campos de logs |

## Logs de Zeek

| Archivo | Contenido |
|---------|-----------|
| `conn.log` | Conexiones de red |
| `dns.log` | Consultas DNS |
| `http.log` | Peticiones HTTP |
| `ssl.log` | Conexiones TLS/SSL |
| `files.log` | Archivos transferidos |
| `notice.log` | Alertas y notificaciones |
| `weird.log` | Actividad anomala |

## ntopng

| Comando | Descripcion |
|---------|-------------|
| `ntopng -i eth0` | Monitoreo en interfaz |
| `ntopng -i captura.pcap` | Analisis de PCAP |
| Puerto web: `3000` | Interfaz de administracion |
