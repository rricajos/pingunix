---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "335 - Amenazas y Evaluacion de Vulnerabilidades"
tema: "335.2 - Pruebas de penetracion"
subtema: "335.2"
peso: 3
tags:
  - lpic-3
  - tema-335
  - pentesting
  - nmap
  - metasploit
---

# Comandos Clave - 335.2 Pruebas de Penetracion

## Reconocimiento

| Comando | Descripcion |
|---------|-------------|
| `whois ejemplo.com` | Consulta de registro de dominio |
| `dig ejemplo.com ANY` | Consulta todos los registros DNS |
| `dig ejemplo.com MX` | Consulta registros de correo |
| `dig -x IP` | DNS inverso |
| `dig @ns1.ej.com ejemplo.com AXFR` | Transferencia de zona |
| `host -l ejemplo.com ns1.ej.com` | Listar zona DNS |
| `theHarvester -d ejemplo.com -b google` | Recopilar emails y subdominios |

## nmap - Tipos de Escaneo

| Comando | Descripcion |
|---------|-------------|
| `nmap -sS target` | Escaneo SYN (sigiloso, por defecto root) |
| `nmap -sT target` | Escaneo TCP Connect (completa handshake) |
| `nmap -sU target` | Escaneo UDP |
| `nmap -sF target` | Escaneo FIN |
| `nmap -sX target` | Escaneo Xmas (FIN+PSH+URG) |
| `nmap -sN target` | Escaneo NULL (sin flags) |
| `nmap -sA target` | Escaneo ACK (detecta firewalls) |
| `nmap -sI zombie target` | Escaneo idle/zombie |
| `nmap -sn red/cidr` | Ping sweep (descubrimiento de hosts) |

## nmap - Opciones Avanzadas

| Comando | Descripcion |
|---------|-------------|
| `nmap -sV target` | Deteccion de version de servicios |
| `nmap -O target` | Deteccion de sistema operativo |
| `nmap -A target` | Escaneo agresivo (version+OS+scripts+traceroute) |
| `nmap --script=vuln target` | Scripts de deteccion de vulnerabilidades |
| `nmap --script=default target` | Scripts por defecto |
| `nmap -p- target` | Escanear todos los 65535 puertos |
| `nmap -p 80,443,8080 target` | Puertos especificos |
| `nmap --top-ports 100 target` | Top 100 puertos mas comunes |

## nmap - Velocidad y Evasion

| Comando | Descripcion |
|---------|-------------|
| `nmap -T0 target` | Timing paranoico (muy lento) |
| `nmap -T1 target` | Timing sigiloso |
| `nmap -T3 target` | Timing normal (por defecto) |
| `nmap -T4 target` | Timing agresivo |
| `nmap -T5 target` | Timing insano |
| `nmap -f target` | Fragmentar paquetes |
| `nmap -D RND:5 target` | Usar 5 señuelos aleatorios |
| `nmap --source-port 53 target` | Puerto de origen especifico |

## nmap - Salida

| Comando | Descripcion |
|---------|-------------|
| `nmap -oN archivo.txt target` | Salida normal |
| `nmap -oX archivo.xml target` | Salida XML |
| `nmap -oG archivo.gnmap target` | Salida grepable |
| `nmap -oA base target` | Todos los formatos |

## Metasploit

| Comando | Descripcion |
|---------|-------------|
| `msfconsole` | Iniciar Metasploit |
| `search tipo:exploit plataforma` | Buscar exploits |
| `search cve:YYYY-NNNNN` | Buscar por CVE |
| `use modulo` | Seleccionar modulo |
| `show options` | Ver opciones del modulo |
| `show payloads` | Ver payloads compatibles |
| `set RHOSTS IP` | Configurar objetivo |
| `set LHOST IP` | Configurar IP local |
| `set PAYLOAD nombre` | Seleccionar payload |
| `exploit` / `run` | Ejecutar el modulo |
| `sessions -l` | Listar sesiones activas |
| `sessions -i N` | Interactuar con sesion N |

## Fases del Pentesting

| Fase | Herramientas principales |
|------|------------------------|
| 1. Reconocimiento | whois, dig, theHarvester, OSINT |
| 2. Escaneo | nmap, masscan |
| 3. Enumeracion | nmap scripts, enum4linux |
| 4. Explotacion | Metasploit, exploits manuales |
| 5. Post-explotacion | Meterpreter, shells |
| 6. Reporte | Documentacion formal |

## Estandares de Pentesting

| Estandar | Descripcion |
|----------|-------------|
| PTES | Penetration Testing Execution Standard |
| OSSTMM | Open Source Security Testing Methodology Manual |
| NIST SP 800-115 | Technical Guide to Security Testing |
| OWASP Testing Guide | Pruebas para aplicaciones web |
