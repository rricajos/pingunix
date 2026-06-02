---
title: "335.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "335.2"
---

# Flashcards: 335.2 - Pruebas De Penetracion

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-001">
<div class="flashcard-front">

**P:** ¿Que tipo de escaneo nmap envia un paquete SYN pero no completa el handshake TCP de tres vias?

</div>
<div class="flashcard-back">

**R:** b). `nmap -sS` (SYN scan)  El SYN scan envia un paquete SYN y espera la respuesta (SYN-ACK = abierto, RST = cerrado). No completa el handshake (no envia ACK final), por lo que es mas sigiloso y rapido que el Connect scan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cual es el primer y mas importante requisito antes de realizar cualquier prueba de penetracion?

</div>
<div class="flashcard-back">

**R:** b). Tener autorizacion escrita del propietario del sistema  La autorizacion escrita es un requisito legal y etico fundamental. Sin ella, cualquier prueba de penetracion se considera actividad ilegal (acceso no autorizado a sistemas informaticos) en la mayoria de jurisdicciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que opcion de nmap detecta la version de los servicios que estan ejecutandose en los puertos abiertos?

</div>
<div class="flashcard-back">

**R:** b). `nmap -sV`  La opcion `-sV` (service version) realiza deteccion de version de los servicios. `-O` detecta el sistema operativo. `-A` es agresivo e incluye tanto `-sV` como `-O`, scripts y traceroute.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que fase de la metodologia de pentesting incluye el uso de Metasploit para aprovechar vulnerabilidades encontradas?

</div>
<div class="flashcard-back">

**R:** c). Explotacion  La fase de explotacion es donde se utilizan herramientas como Metasploit para intentar aprovechar las vulnerabilidades descubiertas en las fases anteriores. La post-explotacion viene despues, cuando ya se tiene acceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que tipo de prueba de penetracion simula un atacante sin ningun conocimiento previo del sistema objetivo?

</div>
<div class="flashcard-back">

**R:** c). Black box  En una prueba black box, el pentester no tiene informacion previa sobre el sistema (como un atacante externo real). White box proporciona toda la informacion. Grey box proporciona informacion parcial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que tipo de escaneo nmap es especifico para descubrir puertos UDP abiertos?

</div>
<div class="flashcard-back">

**R:** c). `nmap -sU`  El escaneo UDP (`-sU`) es el unico tipo diseñado especificamente para puertos UDP. Los demas (`-sS`, `-sT`, `-sN`, `-sF`, `-sX`) son escaneos TCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-007">
<div class="flashcard-front">

**P:** En Metasploit, ¿que comando se usa para buscar un exploit especifico por su identificador CVE?

</div>
<div class="flashcard-back">

**R:** b). `search cve:2021-44228`  El comando `search` en Metasploit acepta filtros como `cve:`, `type:`, `platform:`, `name:` para buscar modulos especificos en su base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que tecnica de evasion de nmap fragmenta los paquetes para intentar evitar la deteccion por IDS/IPS?

</div>
<div class="flashcard-back">

**R:** b). `nmap -f`  La opcion `-f` fragmenta los paquetes IP en fragmentos mas pequeños, dificultando que los IDS/IPS reconstruyan y analicen los paquetes. `-D` usa señuelos (decoys), `--source-port` falsifica el puerto de origen, y `-T0` solo reduce la velocidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que documento define el alcance, tecnicas permitidas, ventana de tiempo y limites de una prueba de penetracion?

</div>
<div class="flashcard-back">

**R:** c). Rules of Engagement (Reglas de compromiso)  Las reglas de compromiso son un documento formal que define todos los parametros de la prueba: alcance, sistemas incluidos/excluidos, tecnicas permitidas, ventana temporal, contactos de emergencia y tratamiento de datos sensibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que opcion de nmap ejecuta scripts NSE (Nmap Scripting Engine) diseñados para detectar vulnerabilidades conocidas?

</div>
<div class="flashcard-back">

**R:** b). `nmap --script=vuln`  La categoria `vuln` de NSE ejecuta scripts diseñados para detectar vulnerabilidades conocidas en los servicios encontrados. `default` ejecuta scripts basicos seguros, `discovery` busca informacion adicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que tipo de escaneo nmap activa los flags FIN, PSH y URG simultaneamente para intentar evadir firewalls?

</div>
<div class="flashcard-back">

**R:** c). `nmap -sX` (Xmas scan)  El escaneo Xmas (`-sX`) envia paquetes con los flags FIN, PSH y URG activados simultaneamente (como un arbol de Navidad iluminado). Segun el RFC, un puerto cerrado debe responder con RST, mientras que un puerto abierto no responde. Puede evadir firewalls que solo filtran paquetes SYN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-012">
<div class="flashcard-front">

**P:** En Metasploit, ¿que comando se usa para configurar la IP del objetivo (target)?

</div>
<div class="flashcard-back">

**R:** b). `set RHOSTS 192.168.1.100`  `set RHOSTS` configura la direccion IP o rango del objetivo remoto. `RPORT` define el puerto remoto. `LHOST` y `LPORT` definen la IP y puerto local (para reverse shells). Estos son parametros estandar en la mayoria de modulos de Metasploit.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que nivel de timing de nmap se considera "paranoico" y es el mas lento, diseñado para evadir IDS?

</div>
<div class="flashcard-back">

**R:** b). `-T0`  `-T0` (Paranoid) es el nivel mas lento, con intervalos de 5 minutos entre sondas, diseñado para evadir sistemas de deteccion de intrusos. `-T1` (Sneaky) es lento, `-T3` es el nivel por defecto, y `-T5` (Insane) es el mas rapido pero facilmente detectable.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que tipo de reconocimiento NO interactua directamente con el objetivo y utiliza fuentes publicas?

</div>
<div class="flashcard-back">

**R:** b). Reconocimiento pasivo  El reconocimiento pasivo utiliza fuentes publicas como WHOIS, registros DNS publicos, buscadores (Google, Shodan), redes sociales y bases de datos publicas. No envia trafico directamente al objetivo, por lo que es indetectable. El reconocimiento activo, el escaneo de puertos y la enumeracion interactuan con el objetivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que componente de Metasploit es el codigo que se ejecuta en el sistema objetivo despues de una explotacion exitosa?

</div>
<div class="flashcard-back">

**R:** b). Payload  El payload es el codigo que se ejecuta tras la explotacion exitosa de una vulnerabilidad. Puede ser una shell reversa, un Meterpreter, un comando simple, etc. El exploit es el codigo que aprovecha la vulnerabilidad, el auxiliary son modulos de apoyo, y el encoder codifica el payload para evadir deteccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que estandar define una metodologia abierta y sistematica para pruebas de seguridad?

</div>
<div class="flashcard-back">

**R:** b). OSSTMM (Open Source Security Testing Methodology Manual)  OSSTMM proporciona una metodologia completa y abierta para realizar pruebas de seguridad de forma sistematica. PTES (Penetration Testing Execution Standard) y NIST SP 800-115 son otros estandares reconocidos. CVSS es un sistema de puntuacion de vulnerabilidades, no una metodologia de pentesting.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que tecnica de evasion de nmap utiliza hosts señuelo para ocultar la IP real del escaner?

</div>
<div class="flashcard-back">

**R:** c). `nmap -D RND:5`  `-D RND:5` genera 5 direcciones IP señuelo (decoys) aleatorias que aparecen como fuentes del escaneo junto con la IP real, dificultando al objetivo identificar cual es el escaner autentico. `-f` fragmenta paquetes, `--source-port` falsifica el puerto de origen y `--data-length` añade datos al paquete.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que tecnica de ingenieria social consiste en dejar dispositivos USB infectados en ubicaciones publicas para que sean encontrados y conectados por las victimas?

</div>
<div class="flashcard-back">

**R:** d). Baiting  El baiting ("cebo") consiste en dejar dispositivos fisicos infectados (USB, CDs) en lugares donde es probable que las victimas los encuentren y conecten a sus equipos por curiosidad. Una vez conectado, el malware se ejecuta y compromete el sistema. Es una tecnica que combina ingenieria social con acceso fisico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que opcion de nmap permite escanear todos los 65535 puertos TCP de un objetivo?

</div>
<div class="flashcard-back">

**R:** c). `nmap -p-`  La opcion `-p-` es una abreviatura para escanear todos los 65535 puertos TCP (equivalente a `-p 1-65535`). Por defecto, nmap solo escanea los 1000 puertos mas comunes. `--top-ports N` escanea los N puertos mas frecuentes segun la base de datos de nmap.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que seccion de un informe de pentesting esta dirigida a la direccion ejecutiva y ofrece una vision general de alto nivel?

</div>
<div class="flashcard-back">

**R:** b). Resumen ejecutivo  El resumen ejecutivo es la primera seccion del informe, dirigida a la direccion y responsables de negocio. Presenta una vision general de alto nivel sobre los hallazgos mas criticos, el nivel de riesgo y las recomendaciones principales, sin entrar en detalles tecnicos profundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando de nmap realiza un escaneo de tipo SYN (half-open) contra un objetivo?

</div>
<div class="flashcard-back">

**R:** nmap -sS. El escaneo SYN (`-sS`) envia un paquete SYN y analiza la respuesta sin completar el handshake TCP. Si recibe SYN-ACK, el puerto esta abierto; si recibe RST, esta cerrado. Es el escaneo por defecto cuando se ejecuta nmap como root, y es mas rapido y sigiloso que el Connect scan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando de nmap guarda los resultados del escaneo en los tres formatos de salida (normal, XML y grepable) simultaneamente?

</div>
<div class="flashcard-back">

**R:** nmap -oA resultado. La opcion `-oA` (output All) genera tres archivos: `resultado.nmap` (formato normal), `resultado.xml` (formato XML) y `resultado.gnmap` (formato grepable). Es equivalente a usar `-oN`, `-oX` y `-oG` simultaneamente, ideal para guardar evidencia completa de un escaneo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando inicia la consola interactiva de Metasploit Framework?

</div>
<div class="flashcard-back">

**R:** msfconsole. `msfconsole` es la interfaz principal de linea de comandos de Metasploit Framework. Desde ella se pueden buscar exploits, configurar payloads, ejecutar modulos auxiliares y gestionar sesiones de post-explotacion. Es la herramienta mas utilizada para pruebas de penetracion con Metasploit.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando de nmap realiza un escaneo agresivo que incluye deteccion de version, OS, scripts y traceroute?

</div>
<div class="flashcard-back">

**R:** nmap -A. La opcion `-A` (Aggressive) activa simultaneamente la deteccion de version de servicios (`-sV`), deteccion de sistema operativo (`-O`), scripts NSE por defecto (`--script=default`) y traceroute (`--traceroute`). Es una opcion conveniente pero ruidosa, no recomendada cuando se requiere sigilo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando realiza una transferencia de zona DNS completa contra un servidor de nombres especifico?

</div>
<div class="flashcard-back">

**R:** dig @ns1.ejemplo.com ejemplo.com AXFR. Una transferencia de zona AXFR solicita la copia completa de todos los registros DNS de un dominio. Si el servidor DNS esta mal configurado y permite transferencias de zona sin restricciones, un atacante puede obtener una lista completa de subdominios y sus IPs, facilitando el reconocimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Centra tu estudio en la metodologia de pentesting, los tipos de escaneo avanzado...

</div>
<div class="flashcard-back">

**R:** Centra tu estudio en la metodologia de pentesting, los tipos de escaneo avanzado con nmap, los conceptos basicos de Metasploit y el marco legal. El examen no espera que seas un pentester, sino que comprendas el proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre `-sS` (SYN), `-sT` (Connect), `-sU` (UDP) y los esc...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre `-sS` (SYN), `-sT` (Connect), `-sU` (UDP) y los escaneos de evasion (`-sF`, `-sX`, `-sN`). Comprende los niveles de timing (`-T0` a `-T5`) y los scripts NSE.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La autorizacion escrita es el requisito mas importante. Sin ella, cualquier acti...

</div>
<div class="flashcard-back">

**R:** La autorizacion escrita es el requisito mas importante. Sin ella, cualquier actividad de pentesting es ilegal. Conoce los componentes de las reglas de compromiso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `-sS`?

</div>
<div class="flashcard-back">

**R:** Envia SYN, no completa handshake

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `-sA`?

</div>
<div class="flashcard-back">

**R:** Solo flag ACK (detecta firewall)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son Metasploit Framework?

</div>
<div class="flashcard-back">

**R:** Metasploit es el framework de pentesting mas utilizado, con una extensa base de datos de exploits.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son Kali Linux?

</div>
<div class="flashcard-back">

**R:** Kali Linux es la distribucion de referencia para pentesting, con cientos de herramientas preinstaladas organizadas por categorias:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.2">
</div>

<div class="flashcard" data-id="335.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son Ingenieria Social?

</div>
<div class="flashcard-back">

**R:** La ingenieria social explota la confianza humana para obtener informacion o acceso.

</div>
</div>

---

