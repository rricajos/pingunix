---
title: "Flashcards - Blue Team: Deteccion y Respuesta"
tags:
  - hacking
  - defensivo
  - blue-team
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "blue-team"
---

# Flashcards: Blue Team - Deteccion y Respuesta

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-001">
<div class="flashcard-front">

**P:** Cuales son las seis fases del framework NIST SP 800-61 para respuesta a incidentes?

</div>
<div class="flashcard-back">

**R:** 1) **Preparacion**: herramientas, procedimientos y formacion. 2) **Deteccion e Identificacion**: alertas SIEM, correlacion de eventos. 3) **Contencion**: aislamiento de red, bloqueo de cuentas. 4) **Erradicacion**: eliminar malware, parchear vulnerabilidades. 5) **Recuperacion**: restaurar backups, validar integridad. 6) **Lecciones Aprendidas**: post-mortem, actualizar procedimientos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-002">
<div class="flashcard-front">

**P:** Como aislariais un host comprometido sin destruir evidencia forense?

</div>
<div class="flashcard-back">

**R:** **No apagar el servidor** (preservar memoria volatil). Desconectar la red: `ip link set eth0 down`. Bloquear IP del atacante: `iptables -I INPUT -s IP_atacante -j DROP`. Deshabilitar cuenta: `passwd -l usuario_comprometido`. Revocar sesiones: `pkill -KILL -u usuario_comprometido`. Crear snapshot para analisis: `lvcreate --size 10G --snapshot --name snap_forense /dev/vg0/root`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-003">
<div class="flashcard-front">

**P:** Nombra los archivos de log mas importantes en Linux y que contiene cada uno.

</div>
<div class="flashcard-back">

**R:** `/var/log/auth.log`: autenticacion, sudo, SSH (Debian). `/var/log/secure`: autenticacion (RHEL). `/var/log/syslog`: mensajes generales del sistema. `/var/log/kern.log`: mensajes del kernel. `/var/log/wtmp`: historial de sesiones (leer con `last`). `/var/log/btmp`: intentos fallidos (leer con `lastb`). `/var/log/audit/audit.log`: eventos de auditd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-004">
<div class="flashcard-front">

**P:** Que comando usarias para contar intentos de login SSH fallidos por IP atacante?

</div>
<div class="flashcard-back">

**R:** `grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head -10`. Este comando extrae las IPs de los intentos fallidos, las cuenta y las ordena de mayor a menor. Para buscar escalacion de privilegios: `grep "sudo:" /var/log/auth.log | grep "COMMAND"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-005">
<div class="flashcard-front">

**P:** Que es un SIEM y cuales son los componentes del ELK Stack?

</div>
<div class="flashcard-back">

**R:** Un SIEM (Security Information and Event Management) centraliza logs, correlaciona eventos y genera alertas de seguridad. ELK Stack: **Elasticsearch** (motor de busqueda y almacenamiento), **Logstash** (pipeline de procesamiento y parseo de logs), **Kibana** (interfaz web de visualizacion). Los agentes **Filebeat** envian los logs desde los endpoints a Logstash.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-006">
<div class="flashcard-front">

**P:** Que es Wazuh y que capacidades ofrece como SIEM open-source?

</div>
<div class="flashcard-back">

**R:** Wazuh combina **HIDS** (Host Intrusion Detection System), **SIEM** y **Compliance** en una sola plataforma. Capacidades: deteccion de intrusiones, analisis de logs, verificacion de integridad de archivos, deteccion de vulnerabilidades, compliance (PCI DSS, GDPR). Se instala un agente en cada endpoint que reporta al manager central.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-007">
<div class="flashcard-front">

**P:** Que es el Threat Hunting y cuales son sus cinco fases?

</div>
<div class="flashcard-back">

**R:** El Threat Hunting es la busqueda **proactiva** de amenazas que han evadido los controles automatizados. Fases: 1) **Hipotesis**: formular teoria basada en inteligencia de amenazas. 2) **Busqueda**: recopilar y analizar datos. 3) **Hallazgo**: identificar actividad maliciosa o anomala. 4) **Respuesta**: contener, erradicar y documentar. 5) **Mejora**: crear nuevas detecciones automatizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-008">
<div class="flashcard-front">

**P:** Que comandos de threat hunting usarias para buscar procesos ejecutandose desde ubicaciones sospechosas?

</div>
<div class="flashcard-back">

**R:** `find /tmp /var/tmp /dev/shm -type f -executable 2>/dev/null` (ejecutables en directorios temporales). `ss -tulnp | grep -v "127.0.0.1"` (conexiones de red inusuales). `ss -tlnp | grep -E ":(4444|5555|6666|8888|9999)"` (puertos de reverse shell comunes). `grep -r "/dev/tcp/" /home/ /tmp/ /var/tmp/ 2>/dev/null` (scripts de reverse shell).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-009">
<div class="flashcard-front">

**P:** Como capturarias la memoria volatil de un sistema comprometido para analisis forense?

</div>
<div class="flashcard-back">

**R:** Con **LiME** (Linux Memory Extractor): `insmod /path/to/lime.ko "path=/evidence/memory.lime format=lime"`. Para disco: `dd if=/dev/sda of=/evidence/disco.img bs=4M status=progress conv=sync,noerror`. Siempre calcular hash de integridad: `sha256sum /evidence/disco.img > /evidence/disco.img.sha256`. Usar `dcfldd` para verificacion integrada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-010">
<div class="flashcard-front">

**P:** Que comandos de Volatility usarias para analizar un volcado de memoria Linux?

</div>
<div class="flashcard-back">

**R:** `imageinfo` (identificar perfil), `linux_pslist` (listar procesos), `linux_netstat` (conexiones de red activas), `linux_malfind` (buscar inyeccion de procesos), `linux_bash` (historial de bash en memoria), `linux_find_file -F "/tmp/malware"` (extraer archivos). Primero identificar el perfil correcto y luego usar las demas funciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-011">
<div class="flashcard-front">

**P:** Que es una regla YARA y como la usarias para detectar reverse shells en Linux?

</div>
<div class="flashcard-back">

**R:** YARA permite crear reglas de deteccion basadas en patrones de texto y binarios. Ejemplo de strings: `$s1 = "/dev/tcp/"`, `$s2 = "bash -i >& "`, `$s3 = "nc -e /bin/"`, `$s4 = "python -c 'import socket,subprocess"`. Condicion: `any of them`. Escanear: `yara -r reglas.yar /tmp/ /var/tmp/ /dev/shm/`. Tambien se pueden escanear procesos: `yara -p 4 reglas.yar /proc/*/exe`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-012">
<div class="flashcard-front">

**P:** Que comandos de respuesta en vivo (live response) ejecutarias al sospechar de un compromiso activo?

</div>
<div class="flashcard-back">

**R:** `ps auxwf` (procesos detallados), `ss -tulnp` y `ss -anp | grep ESTABLISHED` (conexiones de red), `lsof -p PID` (archivos abiertos por proceso sospechoso), `ls -la /proc/PID/exe` (binario real), `cat /proc/PID/cmdline` (linea de comandos), `find / -mtime -1 -type f 2>/dev/null` (archivos modificados recientemente), `dpkg -V coreutils` (verificar integridad de binarios).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-013">
<div class="flashcard-front">

**P:** Que tipos de IOCs (Indicadores de Compromiso) existen?

</div>
<div class="flashcard-back">

**R:** **Red**: IPs maliciosas, dominios C2, URLs de phishing. **Sistema**: hashes de malware, rutas de archivos sospechosas, claves de registro. **Email**: direcciones de remitente, asuntos, adjuntos maliciosos. **Comportamiento**: patrones de trafico inusuales, horarios anomalos, volumenes de datos sospechosos. Los IOCs se comparten entre organizaciones para deteccion colectiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-014">
<div class="flashcard-front">

**P:** Como analizarias estaticamente un archivo sospechoso de malware en Linux?

</div>
<div class="flashcard-back">

**R:** `file muestra` (tipo de archivo), `strings -a muestra | head -50` (cadenas legibles), `readelf -h muestra` (header ELF), `readelf -d muestra` (dependencias), `md5sum muestra` y `sha256sum muestra` (hashes para buscar en VirusTotal). Para analisis dinamico en sandbox: `strace -f ./muestra` (syscalls) y `ltrace -f ./muestra` (llamadas a librerias).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-015">
<div class="flashcard-front">

**P:** Que herramientas de The Sleuth Kit usarias para analisis forense de disco?

</div>
<div class="flashcard-back">

**R:** `mmls disco.img` (listar particiones), `fls -r -o 2048 disco.img` (listar archivos, incluidos eliminados), `icat -o 2048 disco.img 12345 > archivo_recuperado` (recuperar por inode). Para timeline: `fls -r -m "/" -o 2048 disco.img > body.txt` y `mactime -b body.txt -d > timeline.csv`. **Autopsy** es la interfaz grafica de TSK.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-016">
<div class="flashcard-front">

**P:** Que comandos de tshark usarias para buscar exfiltracion de datos via DNS en una captura de red?

</div>
<div class="flashcard-back">

**R:** `tshark -r captura.pcap -Y "dns" -T fields -e dns.qry.name | sort | uniq -c | sort -rn | head -20`. Busca consultas DNS con alta frecuencia o subdominios inusualmente largos (indicativo de datos codificados). Con Zeek: `cat dns.log | zeek-cut query answers` para analizar patrones de consultas. Buscar beaconing: conexiones periodicas a los mismos destinos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-017">
<div class="flashcard-front">

**P:** Que debe incluir un registro de cadena de custodia en una investigacion forense?

</div>
<div class="flashcard-back">

**R:** Numero de caso, fecha de inicio, analista responsable. Por cada evidencia: descripcion, hash SHA256, fecha y hora de captura (UTC), herramienta usada, quien la capturo, ubicacion de almacenamiento, y registro de cada acceso posterior con fecha, persona y proposito. La cadena de custodia asegura que la evidencia sea admisible en procedimientos legales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="blue-team">
</div>

<div class="flashcard" data-id="blue-fc-018">
<div class="flashcard-front">

**P:** Por que se deben usar binarios estaticos de un medio externo durante una respuesta en vivo?

</div>
<div class="flashcard-back">

**R:** Porque las herramientas del sistema comprometido **pueden estar manipuladas** por un rootkit. Un atacante puede reemplazar `ps`, `ss`, `netstat` o `ls` con versiones modificadas que ocultan procesos maliciosos, conexiones de red o archivos. Usar binarios estaticos de un USB confiable (toolkit forense) garantiza que los resultados del analisis son fiables y no han sido alterados.

</div>
</div>

---
