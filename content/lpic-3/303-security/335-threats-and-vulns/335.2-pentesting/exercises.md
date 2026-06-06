---
tipo: ejercicios
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

# Ejercicios - 335.2 Pruebas de Penetracion

### Pregunta 1
¿Que tipo de escaneo nmap envia un paquete SYN pero no completa el handshake TCP de tres vias?

a) `nmap -sT` (Connect scan)
b) `nmap -sS` (SYN scan)
c) `nmap -sU` (UDP scan)
d) `nmap -sA` (ACK scan)

<details><summary>Respuesta</summary>

**b)** `nmap -sS` (SYN scan)

El SYN scan envia un paquete SYN y espera la respuesta (SYN-ACK = abierto, RST = cerrado). No completa el handshake (no envia ACK final), por lo que es mas sigiloso y rapido que el Connect scan.
</details>

### Pregunta 2
¿Cual es el primer y mas importante requisito antes de realizar cualquier prueba de penetracion?

a) Instalar Kali Linux
b) Tener autorizacion escrita del propietario del sistema
c) Configurar Metasploit
d) Realizar un escaneo de puertos preliminar

<details><summary>Respuesta</summary>

**b)** Tener autorizacion escrita del propietario del sistema

La autorizacion escrita es un requisito legal y etico fundamental. Sin ella, cualquier prueba de penetracion se considera actividad ilegal (acceso no autorizado a sistemas informaticos) en la mayoria de jurisdicciones.
</details>

### Pregunta 3
¿Que opcion de nmap detecta la version de los servicios que estan ejecutandose en los puertos abiertos?

a) `nmap -O`
b) `nmap -sV`
c) `nmap -A`
d) `nmap --version`

<details><summary>Respuesta</summary>

**b)** `nmap -sV`

La opcion `-sV` (service version) realiza deteccion de version de los servicios. `-O` detecta el sistema operativo. `-A` es agresivo e incluye tanto `-sV` como `-O`, scripts y traceroute.
</details>

### Pregunta 4
¿Que fase de la metodologia de pentesting incluye el uso de Metasploit para aprovechar vulnerabilidades encontradas?

a) Reconocimiento
b) Escaneo
c) Explotacion
d) Post-explotacion

<details><summary>Respuesta</summary>

**c)** Explotacion

La fase de explotacion es donde se utilizan herramientas como Metasploit para intentar aprovechar las vulnerabilidades descubiertas en las fases anteriores. La post-explotacion viene despues, cuando ya se tiene acceso.
</details>

### Pregunta 5
¿Que tipo de prueba de penetracion simula un atacante sin ningun conocimiento previo del sistema objetivo?

a) White box
b) Grey box
c) Black box
d) Crystal box

<details><summary>Respuesta</summary>

**c)** Black box

En una prueba black box, el pentester no tiene informacion previa sobre el sistema (como un atacante externo real). White box proporciona toda la informacion. Grey box proporciona informacion parcial.
</details>

### Pregunta 6
¿Que tipo de escaneo nmap es especifico para descubrir puertos UDP abiertos?

a) `nmap -sS`
b) `nmap -sT`
c) `nmap -sU`
d) `nmap -sN`

<details><summary>Respuesta</summary>

**c)** `nmap -sU`

El escaneo UDP (`-sU`) es el unico tipo diseñado especificamente para puertos UDP. Los demas (`-sS`, `-sT`, `-sN`, `-sF`, `-sX`) son escaneos TCP.
</details>

### Pregunta 7
En Metasploit, ¿que comando se usa para buscar un exploit especifico por su identificador CVE?

a) `find cve-2021-44228`
b) `search cve:2021-44228`
c) `lookup CVE-2021-44228`
d) `exploit search CVE-2021-44228`

<details><summary>Respuesta</summary>

**b)** `search cve:2021-44228`

El comando `search` en Metasploit acepta filtros como `cve:`, `type:`, `platform:`, `name:` para buscar modulos especificos en su base de datos.
</details>

### Pregunta 8
¿Que tecnica de evasion de nmap fragmenta los paquetes para intentar evitar la deteccion por IDS/IPS?

a) `nmap -D RND:5`
b) `nmap -f`
c) `nmap --source-port 53`
d) `nmap -T0`

<details><summary>Respuesta</summary>

**b)** `nmap -f`

La opcion `-f` fragmenta los paquetes IP en fragmentos mas pequeños, dificultando que los IDS/IPS reconstruyan y analicen los paquetes. `-D` usa señuelos (decoys), `--source-port` falsifica el puerto de origen, y `-T0` solo reduce la velocidad.
</details>

### Pregunta 9
¿Que documento define el alcance, tecnicas permitidas, ventana de tiempo y limites de una prueba de penetracion?

a) SLA (Service Level Agreement)
b) NDA (Non-Disclosure Agreement)
c) Rules of Engagement (Reglas de compromiso)
d) Informe de vulnerabilidades

<details><summary>Respuesta</summary>

**c)** Rules of Engagement (Reglas de compromiso)

Las reglas de compromiso son un documento formal que define todos los parametros de la prueba: alcance, sistemas incluidos/excluidos, tecnicas permitidas, ventana temporal, contactos de emergencia y tratamiento de datos sensibles.
</details>

### Pregunta 10
¿Que opcion de nmap ejecuta scripts NSE (Nmap Scripting Engine) diseñados para detectar vulnerabilidades conocidas?

a) `nmap --script=default`
b) `nmap --script=vuln`
c) `nmap --script=exploit`
d) `nmap --script=discovery`

<details><summary>Respuesta</summary>

**b)** `nmap --script=vuln`

La categoria `vuln` de NSE ejecuta scripts diseñados para detectar vulnerabilidades conocidas en los servicios encontrados. `default` ejecuta scripts basicos seguros, `discovery` busca informacion adicional.
</details>

### Pregunta 11

¿Que tipo de escaneo nmap activa los flags FIN, PSH y URG simultaneamente para intentar evadir firewalls?

a) `nmap -sF` (FIN scan)
b) `nmap -sN` (NULL scan)
c) `nmap -sX` (Xmas scan)
d) `nmap -sA` (ACK scan)

<details><summary>Respuesta</summary>

**c)** `nmap -sX` (Xmas scan)

El escaneo Xmas (`-sX`) envia paquetes con los flags FIN, PSH y URG activados simultaneamente (como un arbol de Navidad iluminado). Segun el RFC, un puerto cerrado debe responder con RST, mientras que un puerto abierto no responde. Puede evadir firewalls que solo filtran paquetes SYN.
</details>

### Pregunta 12

En Metasploit, ¿que comando se usa para configurar la IP del objetivo (target)?

a) `set TARGET 192.168.1.100`
b) `set RHOSTS 192.168.1.100`
c) `config target=192.168.1.100`
d) `target 192.168.1.100`

<details><summary>Respuesta</summary>

**b)** `set RHOSTS 192.168.1.100`

`set RHOSTS` configura la direccion IP o rango del objetivo remoto. `RPORT` define el puerto remoto. `LHOST` y `LPORT` definen la IP y puerto local (para reverse shells). Estos son parametros estandar en la mayoria de modulos de Metasploit.
</details>

### Pregunta 13

¿Que nivel de timing de nmap se considera "paranoico" y es el mas lento, diseñado para evadir IDS?

a) `-T1`
b) `-T0`
c) `-T2`
d) `-T5`

<details><summary>Respuesta</summary>

**b)** `-T0`

`-T0` (Paranoid) es el nivel mas lento, con intervalos de 5 minutos entre sondas, diseñado para evadir sistemas de deteccion de intrusos. `-T1` (Sneaky) es lento, `-T3` es el nivel por defecto, y `-T5` (Insane) es el mas rapido pero facilmente detectable.
</details>

### Pregunta 14

¿Que tipo de reconocimiento NO interactua directamente con el objetivo y utiliza fuentes publicas?

a) Reconocimiento activo
b) Reconocimiento pasivo
c) Escaneo de puertos
d) Enumeracion de servicios

<details><summary>Respuesta</summary>

**b)** Reconocimiento pasivo

El reconocimiento pasivo utiliza fuentes publicas como WHOIS, registros DNS publicos, buscadores (Google, Shodan), redes sociales y bases de datos publicas. No envia trafico directamente al objetivo, por lo que es indetectable. El reconocimiento activo, el escaneo de puertos y la enumeracion interactuan con el objetivo.
</details>

### Pregunta 15

¿Que componente de Metasploit es el codigo que se ejecuta en el sistema objetivo despues de una explotacion exitosa?

a) Exploit
b) Payload
c) Auxiliary
d) Encoder

<details><summary>Respuesta</summary>

**b)** Payload

El payload es el codigo que se ejecuta tras la explotacion exitosa de una vulnerabilidad. Puede ser una shell reversa, un Meterpreter, un comando simple, etc. El exploit es el codigo que aprovecha la vulnerabilidad, el auxiliary son modulos de apoyo, y el encoder codifica el payload para evadir deteccion.
</details>

### Pregunta 16

¿Que estandar define una metodologia abierta y sistematica para pruebas de seguridad?

a) CVSS
b) OSSTMM (Open Source Security Testing Methodology Manual)
c) CVE
d) OWASP Top 10

<details><summary>Respuesta</summary>

**b)** OSSTMM (Open Source Security Testing Methodology Manual)

OSSTMM proporciona una metodologia completa y abierta para realizar pruebas de seguridad de forma sistematica. PTES (Penetration Testing Execution Standard) y NIST SP 800-115 son otros estandares reconocidos. CVSS es un sistema de puntuacion de vulnerabilidades, no una metodologia de pentesting.
</details>

### Pregunta 17

¿Que tecnica de evasion de nmap utiliza hosts señuelo para ocultar la IP real del escaner?

a) `nmap -f`
b) `nmap --source-port 53`
c) `nmap -D RND:5`
d) `nmap --data-length 25`

<details><summary>Respuesta</summary>

**c)** `nmap -D RND:5`

`-D RND:5` genera 5 direcciones IP señuelo (decoys) aleatorias que aparecen como fuentes del escaneo junto con la IP real, dificultando al objetivo identificar cual es el escaner autentico. `-f` fragmenta paquetes, `--source-port` falsifica el puerto de origen y `--data-length` añade datos al paquete.
</details>

### Pregunta 18

¿Que tecnica de ingenieria social consiste en dejar dispositivos USB infectados en ubicaciones publicas para que sean encontrados y conectados por las victimas?

a) Phishing
b) Pretexting
c) Tailgating
d) Baiting

<details><summary>Respuesta</summary>

**d)** Baiting

El baiting ("cebo") consiste en dejar dispositivos fisicos infectados (USB, CDs) en lugares donde es probable que las victimas los encuentren y conecten a sus equipos por curiosidad. Una vez conectado, el malware se ejecuta y compromete el sistema. Es una tecnica que combina ingenieria social con acceso fisico.
</details>

### Pregunta 19

¿Que opcion de nmap permite escanear todos los 65535 puertos TCP de un objetivo?

a) `nmap --all-ports`
b) `nmap -p 0-65535`
c) `nmap -p-`
d) `nmap --full-scan`

<details><summary>Respuesta</summary>

**c)** `nmap -p-`

La opcion `-p-` es una abreviatura para escanear todos los 65535 puertos TCP (equivalente a `-p 1-65535`). Por defecto, nmap solo escanea los 1000 puertos mas comunes. `--top-ports N` escanea los N puertos mas frecuentes segun la base de datos de nmap.
</details>

### Pregunta 20

¿Que seccion de un informe de pentesting esta dirigida a la direccion ejecutiva y ofrece una vision general de alto nivel?

a) Hallazgos tecnicos
b) Resumen ejecutivo
c) Apendices
d) Metodologia

<details><summary>Respuesta</summary>

**b)** Resumen ejecutivo

El resumen ejecutivo es la primera seccion del informe, dirigida a la direccion y responsables de negocio. Presenta una vision general de alto nivel sobre los hallazgos mas criticos, el nivel de riesgo y las recomendaciones principales, sin entrar en detalles tecnicos profundos.
</details>

### Pregunta 21

¿Que comando de nmap realiza un escaneo de tipo SYN (half-open) contra un objetivo?

<input type="text" class="fill-blank" data-answer="nmap -sS" data-alt="nmap -sS 192.168.1.100" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nmap -sS**

El escaneo SYN (`-sS`) envia un paquete SYN y analiza la respuesta sin completar el handshake TCP. Si recibe SYN-ACK, el puerto esta abierto; si recibe RST, esta cerrado. Es el escaneo por defecto cuando se ejecuta nmap como root, y es mas rapido y sigiloso que el Connect scan.
</details>

### Pregunta 22

¿Que comando de nmap guarda los resultados del escaneo en los tres formatos de salida (normal, XML y grepable) simultaneamente?

<input type="text" class="fill-blank" data-answer="nmap -oA resultado" data-alt="nmap -oA resultado 192.168.1.100" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nmap -oA resultado**

La opcion `-oA` (output All) genera tres archivos: `resultado.nmap` (formato normal), `resultado.xml` (formato XML) y `resultado.gnmap` (formato grepable). Es equivalente a usar `-oN`, `-oX` y `-oG` simultaneamente, ideal para guardar evidencia completa de un escaneo.
</details>

### Pregunta 23

¿Que comando inicia la consola interactiva de Metasploit Framework?

<input type="text" class="fill-blank" data-answer="msfconsole" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**msfconsole**

`msfconsole` es la interfaz principal de linea de comandos de Metasploit Framework. Desde ella se pueden buscar exploits, configurar payloads, ejecutar modulos auxiliares y gestionar sesiones de post-explotacion. Es la herramienta mas utilizada para pruebas de penetracion con Metasploit.
</details>

### Pregunta 24

¿Que comando de nmap realiza un escaneo agresivo que incluye deteccion de version, OS, scripts y traceroute?

<input type="text" class="fill-blank" data-answer="nmap -A" data-alt="nmap -A 192.168.1.100" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nmap -A**

La opcion `-A` (Aggressive) activa simultaneamente la deteccion de version de servicios (`-sV`), deteccion de sistema operativo (`-O`), scripts NSE por defecto (`--script=default`) y traceroute (`--traceroute`). Es una opcion conveniente pero ruidosa, no recomendada cuando se requiere sigilo.
</details>

### Pregunta 25

¿Que comando realiza una transferencia de zona DNS completa contra un servidor de nombres especifico?

<input type="text" class="fill-blank" data-answer="dig @ns1.ejemplo.com ejemplo.com AXFR" data-alt="dig AXFR ejemplo.com @ns1.ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig @ns1.ejemplo.com ejemplo.com AXFR**

Una transferencia de zona AXFR solicita la copia completa de todos los registros DNS de un dominio. Si el servidor DNS esta mal configurado y permite transferencias de zona sin restricciones, un atacante puede obtener una lista completa de subdominios y sus IPs, facilitando el reconocimiento.
</details>
