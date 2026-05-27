---
title: "Flashcards - CTF (Capture The Flag)"
tags:
  - hacking
  - ofensivo
  - ctf
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "ctf"
---

# Flashcards: CTF - Capture The Flag

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-001">
<div class="flashcard-front">

**P:** Cuales son los tres tipos principales de CTF y en que consiste cada uno?

</div>
<div class="flashcard-back">

**R:** **Jeopardy** (el mas comun): desafios individuales organizados por categorias con puntuacion variable, cada reto tiene una flag unica. **Attack-Defense**: equipos defienden sus servicios mientras atacan los de otros equipos. **King of the Hill**: controlar un servidor el mayor tiempo posible, combinando ataque y defensa en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-002">
<div class="flashcard-front">

**P:** Nombra las categorias tipicas de un CTF Jeopardy y una herramienta representativa de cada una.

</div>
<div class="flashcard-back">

**R:** **Web**: Burp Suite. **Crypto**: CyberChef. **Forensics**: Volatility. **Reverse Engineering**: Ghidra. **Pwn** (explotacion de binarios): pwntools. **Misc** (variados): Python. **Steganografia**: steghide. Cada categoria requiere un conjunto de habilidades y herramientas diferente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-003">
<div class="flashcard-front">

**P:** Que herramienta usarias para analizar y extraer archivos embebidos dentro de una imagen o binario sospechoso?

</div>
<div class="flashcard-back">

**R:** **binwalk**. Para analizar: `binwalk archivo_sospechoso.png`. Para extraer automaticamente: `binwalk -e archivo_sospechoso.png`. binwalk detecta firmas de archivos embebidos (ZIP, gzip, ELF, imagenes, etc.) dentro de cualquier archivo. Complementar con `file` para identificar el tipo real y `strings -n 8 archivo | grep -i flag` para buscar texto legible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-004">
<div class="flashcard-front">

**P:** Que es Ghidra y para que tipo de retos CTF se usa?

</div>
<div class="flashcard-back">

**R:** Ghidra es un **decompilador** de codigo abierto desarrollado por la NSA. Es la herramienta principal para retos de **Reverse Engineering**, donde se analiza binarios compilados para entender su logica sin tener el codigo fuente. Permite desensamblar y decompilar a pseudocodigo C. Alternativas: IDA Free, radare2. Para depuracion en vivo se usa GDB con pwndbg.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-005">
<div class="flashcard-front">

**P:** Que es pwntools y como lo usarias para conectarte a un servicio remoto y enviar un payload de buffer overflow?

</div>
<div class="flashcard-back">

**R:** pwntools es un framework de explotacion en Python. Ejemplo: `from pwn import *; r = remote('challenge.ctf.com', 1337); payload = b'A' * 64 + p64(0x00401234); r.sendline(payload); r.interactive()`. Funciones clave: `remote()` (conexion de red), `process()` (binario local), `p64()`/`p32()` (empaquetado little-endian), `cyclic()` (generar/buscar offsets).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-006">
<div class="flashcard-front">

**P:** Que comando usarias para verificar las protecciones de seguridad de un binario (CANARY, NX, PIE, RELRO)?

</div>
<div class="flashcard-back">

**R:** `checksec ./binario`. Muestra: **CANARY** (proteccion contra buffer overflow con stack canaries), **NX** (no execute, impide ejecucion de shellcode en el stack), **PIE** (Position Independent Executable, ASLR del binario), **RELRO** (proteccion de la GOT). Conocer las protecciones activas determina que tecnicas de explotacion son viables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-007">
<div class="flashcard-front">

**P:** Que herramientas usarias para retos de esteganografia en imagenes JPEG vs PNG?

</div>
<div class="flashcard-back">

**R:** Para **JPEG**: `steghide extract -sf imagen.jpg` (extrae datos ocultos, puede requerir password). Para **PNG/BMP**: `zsteg imagen.png` (analiza todos los modos de bits) o `zsteg -a imagen.png`. Para analisis visual de planos de bits: **stegsolve** (`java -jar stegsolve.jar`). Para LSB (Least Significant Bit) manual se puede usar Python con PIL.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-008">
<div class="flashcard-front">

**P:** Que es CyberChef y para que tipo de retos CTF es especialmente util?

</div>
<div class="flashcard-back">

**R:** CyberChef (https://gchq.github.io/CyberChef/) es una herramienta web conocida como la "navaja suiza de decodificacion". Es esencial para retos de **Crypto** y **Misc**: decodificar Base64, hexadecimal, ROT13, XOR, analizar formatos de datos, realizar conversiones entre bases numericas y encadenar multiples operaciones de forma visual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-009">
<div class="flashcard-front">

**P:** Como usarias Volatility para analizar un volcado de memoria en un reto de forensics?

</div>
<div class="flashcard-back">

**R:** 1) Identificar perfil: `volatility -f memory.dump imageinfo`. 2) Listar procesos: `volatility -f memory.dump --profile=Win7SP1x64 pslist`. 3) Buscar flags: `volatility -f memory.dump --profile=Win7SP1x64 filescan | grep flag`. 4) Conexiones de red: `linux_netstat`. 5) Inyeccion de procesos: `linux_malfind`. 6) Historial bash: `linux_bash`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-010">
<div class="flashcard-front">

**P:** Cuales son los cuatro pasos de la metodologia general para resolver un reto CTF?

</div>
<div class="flashcard-back">

**R:** **Paso 1 - Reconocimiento**: leer el enunciado con atencion, examinar archivos con `file`, `strings`, `xxd`, `binwalk`. **Paso 2 - Analisis**: aplicar herramientas especificas, buscar patrones (Base64, hex, ROT13, XOR), consultar writeups similares. **Paso 3 - Explotacion**: desarrollar exploit, probar en local, ejecutar contra el target. **Paso 4 - Documentacion**: escribir un writeup para consolidar lo aprendido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-011">
<div class="flashcard-front">

**P:** Que comandos rapidos usarias como primer analisis al descargar un archivo desconocido de un reto CTF?

</div>
<div class="flashcard-back">

**R:** `file *` (identificar tipo real), `xxd archivo.bin | head` (ver bytes en hexadecimal), `binwalk archivo` (buscar archivos embebidos), `strings archivo | grep -iE "(flag|ctf)\{"` (buscar flags directamente), `exiftool imagen.jpg` (metadatos). Estos comandos revelan rapidamente si hay informacion oculta, archivos embebidos o la flag directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-012">
<div class="flashcard-front">

**P:** Que herramientas de linea de comandos usarias para trazar llamadas del sistema y librerias de un binario?

</div>
<div class="flashcard-back">

**R:** `strace ./binario` traza las **llamadas al sistema** (syscalls) como open, read, write, connect. `ltrace ./binario` traza las **llamadas a librerias** como printf, strcmp, malloc. Ambas son utiles para retos de Reverse Engineering cuando no se quiere abrir Ghidra: permiten observar el comportamiento del programa en ejecucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-013">
<div class="flashcard-front">

**P:** Como decodificarias ROT13 desde la linea de comandos?

</div>
<div class="flashcard-back">

**R:** `echo "synt{ebg13}" | tr 'a-zA-Z' 'n-za-mN-ZA-M'`. El comando `tr` rota cada letra 13 posiciones en el alfabeto. La salida seria `flag{rot13}`. ROT13 es su propia inversa: aplicarla dos veces devuelve el texto original. En CyberChef tambien se puede usar la operacion "ROT13".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-014">
<div class="flashcard-front">

**P:** Que plataformas de practica de CTF recomendarias para un principiante y para nivel medio-avanzado?

</div>
<div class="flashcard-back">

**R:** **Principiante**: PicoCTF (Jeopardy permanente, gratuito), OverTheWire (wargames SSH, gratuito), TryHackMe (labs guiados, parcialmente gratuito), CryptoHack (solo crypto, gratuito). **Medio-Avanzado**: HackTheBox (labs + CTF), pwnable.kr (solo Pwn), Root-Me (variado). **CTFtime** (ctftime.org) publica el calendario de competiciones en vivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-015">
<div class="flashcard-front">

**P:** En un reto web CTF, que archivos y rutas verificarias primero en busca de informacion?

</div>
<div class="flashcard-back">

**R:** `curl -s http://target/robots.txt` (rutas ocultas al indexador), `curl -s http://target/.git/HEAD` (repositorio git expuesto), `curl -s http://target | grep flag` (flag en el HTML), `curl -s http://target/sitemap.xml` (mapa del sitio). Tambien revisar las DevTools del navegador (cookies, localStorage, comentarios HTML, headers de respuesta).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-016">
<div class="flashcard-front">

**P:** Que comando de Wireshark/tshark usarias para buscar texto que contenga "flag" en una captura de red?

</div>
<div class="flashcard-back">

**R:** `tshark -r capture.pcap -Y "tcp contains flag" -x` muestra los paquetes que contienen "flag" con volcado hexadecimal. Para peticiones HTTP: `tshark -r capture.pcap -Y "http.request" -T fields -e http.request.uri`. Para extraer archivos transferidos: `tshark -r capture.pcap --export-objects http,/tmp/extracted/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-017">
<div class="flashcard-front">

**P:** Como usarias objdump y GDB para analizar rapidamente la funcion main de un binario?

</div>
<div class="flashcard-back">

**R:** Con objdump: `objdump -d ./binario | grep -A 20 "<main>"` para ver el desensamblado. Con GDB (usando pwndbg): `gdb ./binario`, luego `disas main` para desensamblar, `break *main+42` para breakpoint, `run` para ejecutar, `x/20x $esp` para examinar el stack. GDB permite depuracion interactiva y es esencial para retos de Pwn.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ctf">
</div>

<div class="flashcard" data-id="ctf-fc-018">
<div class="flashcard-front">

**P:** Cuales son los consejos mas importantes para una competicion CTF en equipo?

</div>
<div class="flashcard-back">

**R:** 1) Empezar por los retos faciles para sumar puntos rapido. 2) Leer todos los enunciados antes de empezar. 3) Dividir por especialidades (web, crypto, pwn). 4) Tomar notas de todo lo intentado. 5) No atascarse mas de 30 minutos en un reto; cambiar. 6) Automatizar lo repetitivo con scripts Python. 7) En CTFs de 48h, dormir: un cerebro descansado resuelve mas.

</div>
</div>

---
