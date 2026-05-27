---
title: "Flashcards - Reconocimiento y Recopilacion de Informacion"
tags:
  - hacking
  - ofensivo
  - reconocimiento
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "reconocimiento"
---

# Flashcards: Reconocimiento y Recopilacion de Informacion

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre reconocimiento pasivo, semi-pasivo y activo?

</div>
<div class="flashcard-back">

**R:** El reconocimiento **pasivo** (OSINT) no interactua con el objetivo y tiene riesgo de deteccion nulo. El **semi-pasivo** realiza consultas minimas como DNS y WHOIS con riesgo muy bajo. El **activo** implica escaneo de puertos y probing directo con riesgo alto de deteccion por IDS/IPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-002">
<div class="flashcard-front">

**P:** Que herramienta usarias para recopilar correos electronicos, subdominios e IPs de fuentes publicas como Google, Bing y Shodan?

</div>
<div class="flashcard-back">

**R:** `theHarvester`. Se ejecuta con `theHarvester -d ejemplo.com -b google,bing,linkedin,dnsdumpster,crtsh`. Permite especificar multiples fuentes de datos con `-b` y guardar resultados con `-f`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-003">
<div class="flashcard-front">

**P:** Que es Shodan y que filtros usarias para buscar servidores Apache en Espana?

</div>
<div class="flashcard-back">

**R:** Shodan es un motor de busqueda que indexa dispositivos conectados a Internet. Para buscar servidores Apache en Espana: `shodan search "apache country:ES"`. Filtros utiles incluyen `country:`, `city:`, `port:`, `org:`, `hostname:`, `os:` y `product:`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-004">
<div class="flashcard-front">

**P:** Que Google Dork usarias para encontrar archivos .env con credenciales expuestas en un dominio objetivo?

</div>
<div class="flashcard-back">

**R:** `site:ejemplo.com filetype:env`. Los Google Dorks combinan operadores como `site:`, `filetype:`, `inurl:`, `intitle:` e `intext:` para encontrar informacion expuesta. Otros ejemplos utiles: `site:ejemplo.com filetype:sql` para bases de datos y `site:ejemplo.com intitle:"index of"` para listados de directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-005">
<div class="flashcard-front">

**P:** Que flag de Nmap usarias para hacer un escaneo SYN sigiloso y por que requiere privilegios de root?

</div>
<div class="flashcard-back">

**R:** `sudo nmap -sS objetivo`. El SYN scan envia paquetes SYN pero no completa el handshake TCP (no envia el ACK final), haciendolo mas sigiloso. Requiere root porque necesita acceso a raw sockets para construir paquetes TCP personalizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-006">
<div class="flashcard-front">

**P:** Que comando de Nmap usarias para escanear TODOS los 65535 puertos TCP con deteccion de version y scripts por defecto?

</div>
<div class="flashcard-back">

**R:** `sudo nmap -sC -sV -p- objetivo`. `-sC` ejecuta los scripts NSE por defecto, `-sV` detecta versiones de servicios y `-p-` escanea los 65535 puertos. Este es el combo clasico de pentesting/CTF. Se puede anadir `-T4` para acelerar en redes fiables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-007">
<div class="flashcard-front">

**P:** Que significan los templates de timing de Nmap -T0 a -T5?

</div>
<div class="flashcard-back">

**R:** `-T0` (Paranoico) y `-T1` (Astuto) son para evasion de IDS, muy lentos. `-T2` (Educado) reduce la carga en la red. `-T3` (Normal) es el valor por defecto. `-T4` (Agresivo) es para redes rapidas y fiables. `-T5` (Demente) sacrifica precision por velocidad maxima.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-008">
<div class="flashcard-front">

**P:** Que herramienta usarias para enumerar subdominios de forma pasiva y cual para enumeracion activa con fuerza bruta?

</div>
<div class="flashcard-back">

**R:** Para enumeracion **pasiva**: `subfinder -d ejemplo.com -silent`. Para enumeracion **activa** con fuerza bruta: `amass enum -active -brute -d ejemplo.com`. Subfinder consulta fuentes publicas sin interactuar con el objetivo, mientras que Amass en modo activo realiza consultas directas e intenta descubrir subdominios por fuerza bruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-009">
<div class="flashcard-front">

**P:** Que comando de dig usarias para intentar una transferencia de zona DNS y por que es una vulnerabilidad critica?

</div>
<div class="flashcard-back">

**R:** `dig ejemplo.com AXFR @ns1.ejemplo.com`. Una transferencia de zona exitosa expone TODOS los registros DNS del dominio, revelando subdominios internos, servidores y la estructura completa de la red. Es una vulnerabilidad critica de configuracion del servidor DNS que deberia estar restringida solo a servidores secundarios autorizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-010">
<div class="flashcard-front">

**P:** Para que sirve WhatWeb y cual es la diferencia con Wafw00f?

</div>
<div class="flashcard-back">

**R:** **WhatWeb** detecta tecnologias web usadas por un sitio (CMS, frameworks, lenguajes, servidores). Se usa con `whatweb -a 3 ejemplo.com` para modo agresivo. **Wafw00f** detecta especificamente si el sitio esta protegido por un WAF (Web Application Firewall) y que tipo de WAF es. Son complementarias en la fase de fingerprinting.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-011">
<div class="flashcard-front">

**P:** Que flag de Nmap genera la salida en todos los formatos a la vez y cuales son esos formatos?

</div>
<div class="flashcard-back">

**R:** `nmap -oA nombre_base objetivo`. Genera tres archivos simultaneamente: `-oN` (salida normal legible), `-oX` (XML para herramientas automatizadas) y `-oG` (formato grepeable). Es la opcion recomendada para documentar correctamente un pentesting.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-012">
<div class="flashcard-front">

**P:** Que son los scripts NSE de Nmap y como ejecutarias los scripts de vulnerabilidades conocidas contra un objetivo?

</div>
<div class="flashcard-back">

**R:** NSE (Nmap Scripting Engine) permite ejecutar scripts Lua para automatizar tareas de descubrimiento y auditoria. Para vulnerabilidades: `nmap --script vuln objetivo`. Para servicios especificos: `nmap --script http-enum,http-headers -p 80 objetivo` o `nmap --script smb-enum-shares -p 445 objetivo`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-013">
<div class="flashcard-front">

**P:** Que herramienta grafica de OSINT permite mapear relaciones entre entidades como dominios, IPs, personas y organizaciones?

</div>
<div class="flashcard-back">

**R:** **Maltego**. Permite crear grafos visuales arrastrando entidades al canvas y ejecutando "transforms" para descubrir relaciones. Los transforms incluyen "To DNS Name" (subdominios), "To Email Addresses" (correos), "To IP Address" (resoluciones DNS) y "To Website" (tecnologias web).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-014">
<div class="flashcard-front">

**P:** Que informacion puedes obtener con el comando `whois ejemplo.com` y en que fase del reconocimiento se usa?

</div>
<div class="flashcard-back">

**R:** WHOIS proporciona informacion de registro del dominio: propietario, fechas de registro y expiracion, registrador, servidores DNS y datos de contacto. Se usa en la fase de reconocimiento **semi-pasivo** ya que implica una consulta directa al servidor WHOIS pero con interaccion minima.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-015">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `nmap -sn` y `nmap -Pn` para descubrimiento de hosts?

</div>
<div class="flashcard-back">

**R:** `nmap -sn` (ping sweep) descubre hosts vivos en una subred sin escanear puertos, usando paquetes ICMP, TCP SYN y ARP. `nmap -Pn` deshabilita la fase de descubrimiento y asume que todos los hosts estan activos, util cuando los firewalls bloquean ICMP y las respuestas de ping.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-016">
<div class="flashcard-front">

**P:** Que herramienta usarias para hacer un escaneo basico de vulnerabilidades web y como la ejecutarias?

</div>
<div class="flashcard-back">

**R:** **Nikto**. Se ejecuta con `nikto -h http://ejemplo.com`. Escanea un servidor web en busca de archivos peligrosos, versiones desactualizadas, problemas de configuracion y vulnerabilidades conocidas. Se puede guardar el reporte con `nikto -h ejemplo.com -o reporte.html -Format htm`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-017">
<div class="flashcard-front">

**P:** Nombra las tres fases de la metodologia de reconocimiento y una herramienta representativa de cada una.

</div>
<div class="flashcard-back">

**R:** **Fase 1 - Pasivo**: WHOIS, Google Dorks, Shodan, theHarvester, Wayback Machine. **Fase 2 - Semi-pasivo**: consultas DNS con dig/nslookup, subfinder, WhatWeb. **Fase 3 - Activo**: Nmap (escaneo de puertos), Amass brute (subdominios activos), Nikto (fingerprinting agresivo), Wafw00f (deteccion de WAF).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="reconocimiento">
</div>

<div class="flashcard" data-id="recon-fc-018">
<div class="flashcard-front">

**P:** Que es Censys y en que se diferencia de Shodan?

</div>
<div class="flashcard-back">

**R:** Censys, al igual que Shodan, permite buscar hosts y servicios expuestos en Internet. La diferencia principal es que Censys enfatiza la busqueda de **certificados SSL/TLS** y tiene una integracion mas fuerte con datos de Certificate Transparency. Ejemplo: `censys search "parsed.names: ejemplo.com" --index-type certificates` para buscar certificados de un dominio.

</div>
</div>

---
