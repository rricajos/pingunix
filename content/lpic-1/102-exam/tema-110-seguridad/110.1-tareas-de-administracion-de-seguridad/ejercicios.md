---
title: "110.1 Tareas de administracion de seguridad - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-110
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "110"
subtema: "110.1"
---

# 110.1 Tareas de administracion de seguridad - Ejercicios

### Pregunta 1

Que comando encuentra todos los archivos con el bit SUID activado en el sistema?

a) `find / -perm 4000 -type f 2>/dev/null`
b) `find / -perm -4000 -type f 2>/dev/null`
c) `locate --suid /`
d) `ls -laR / | grep suid`

<details><summary>Respuesta</summary>

**b) `find / -perm -4000 -type f 2>/dev/null`**

El comando `find / -perm -4000 -type f` busca archivos regulares que tengan al menos el bit SUID activado. El guion antes de 4000 (`-4000`) significa "al menos estos permisos". Sin el guion (`4000`, opcion A), buscaria archivos con exactamente esos permisos y nada mas. La redireccion `2>/dev/null` suprime los errores de permisos. Es importante auditar archivos SUID porque se ejecutan con los permisos del propietario (normalmente root).

</details>

---

### Pregunta 2

Un administrador necesita que el usuario `maria` pueda reiniciar nginx sin contrasena. Cual es la linea correcta en `/etc/sudoers`?

a) `maria ALL=(ALL) /usr/bin/systemctl restart nginx`
b) `maria ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx`
c) `maria NOPASSWD: systemctl restart nginx`
d) `maria ALL=NOPASSWD: restart nginx`

<details><summary>Respuesta</summary>

**b) `maria ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx`**

La sintaxis correcta de `/etc/sudoers` es: `usuario host=(usuario_ejecutar) opciones: comandos`. `ALL=(ALL)` permite ejecutar desde cualquier host como cualquier usuario, `NOPASSWD:` evita la solicitud de contrasena, y se debe especificar la ruta completa del comando. La opcion A es valida pero pedira contrasena (falta NOPASSWD). Siempre se debe editar con `visudo` para validar la sintaxis.

</details>

---

### Pregunta 3

Cual es la diferencia entre `su` y `su -`?

a) `su` inicia un login shell completo y `su -` mantiene el entorno actual
b) `su -` inicia un login shell completo cargando el entorno de root, y `su` mantiene el entorno actual
c) `su -` requiere la contrasena del usuario actual y `su` la de root
d) No hay diferencia practica entre ambos comandos

<details><summary>Respuesta</summary>

**b) `su -` inicia un login shell completo cargando el entorno de root, y `su` mantiene el entorno actual**

`su` cambia al usuario root pero mantiene el entorno actual (variables, directorio de trabajo, PATH). `su -` (equivalente a `su -l` o `su --login`) cambia a root con un login shell completo, cargando el entorno de root (/root como HOME, PATH de root, etc.). Se recomienda usar `su -` para tener un entorno limpio de root. Ambos requieren la contrasena de root (a diferencia de `sudo` que pide la contrasena del propio usuario).

</details>

---

### Pregunta 4

Que comando establece que la contrasena del usuario `juan` expire en un maximo de 60 dias?

a) `passwd -M 60 juan`
b) `chage -M 60 juan`
c) `usermod --expire 60 juan`
d) `chage -E 60 juan`

<details><summary>Respuesta</summary>

**b) `chage -M 60 juan`**

El comando `chage -M 60 juan` establece que la contrasena debe cambiarse cada 60 dias como maximo. Otras opciones de `chage`: `-m` (dias minimos entre cambios), `-W` (dias de aviso antes de caducidad), `-E` (fecha de expiracion de la cuenta, no de la contrasena), `-I` (dias de inactividad tras caducidad), `-d 0` (forzar cambio en proximo login). `chage -l juan` muestra toda la informacion de caducidad.

</details>

---

### Pregunta 5

Que comando muestra que proceso esta usando el puerto TCP 80?

a) `ps aux | grep port 80`
b) `lsof -i :80`
c) `top -p 80`
d) `which port 80`

<details><summary>Respuesta</summary>

**b) `lsof -i :80`**

El comando `lsof -i :80` lista los procesos que tienen abierto el puerto 80 (tanto TCP como UDP). Otras formas: `fuser -n tcp 80` identifica el proceso usando el puerto TCP 80, `ss -tulnp | grep :80` muestra los sockets en escucha en el puerto 80 con informacion del proceso. `lsof` (List Open Files) es una herramienta versatil que puede filtrar por puerto, protocolo, usuario o PID.

</details>

---

### Pregunta 6

Cual es la diferencia entre un limite `soft` y un limite `hard` en `/etc/security/limits.conf`?

a) `soft` es permanente y `hard` es temporal
b) `soft` es el limite actual que el usuario puede aumentar hasta el `hard`, y `hard` es el maximo absoluto que solo root puede aumentar
c) `hard` se aplica a usuarios y `soft` a grupos
d) `soft` limita CPU y `hard` limita memoria

<details><summary>Respuesta</summary>

**b) `soft` es el limite actual que el usuario puede aumentar hasta el `hard`, y `hard` es el maximo absoluto que solo root puede aumentar**

El soft limit es el limite actualmente en efecto que el usuario puede modificar (aumentar hasta el hard limit o reducir). El hard limit es el techo maximo que solo root puede aumentar. En `/etc/security/limits.conf`, el tipo `-` establece ambos limites al mismo valor. Los recursos comunes son: `nproc` (procesos), `nofile` (archivos abiertos), `fsize` (tamano de archivo), `core` (core dumps).

</details>

---

### Pregunta 7

Que comando muestra los usuarios conectados actualmente al sistema junto con el comando que estan ejecutando?

a) `who`
b) `w`
c) `last`
d) `lastlog`

<details><summary>Respuesta</summary>

**b) `w`**

El comando `w` muestra los usuarios conectados actualmente con informacion detallada: usuario, terminal, host remoto, hora de login, tiempo de inactividad (idle), carga del sistema y el comando que estan ejecutando en ese momento. `who` muestra los usuarios conectados pero con menos detalle (sin el comando actual ni el idle time). `last` muestra el historico de logins (pasado). `lastlog` muestra el ultimo login de cada usuario.

</details>

---

### Pregunta 8

Que comando busca archivos en el sistema que no tienen un propietario valido (usuario eliminado)?

a) `find / -noowner 2>/dev/null`
b) `find / -nouser 2>/dev/null`
c) `find / -user nobody 2>/dev/null`
d) `locate --orphan /`

<details><summary>Respuesta</summary>

**b) `find / -nouser 2>/dev/null`**

El parametro `-nouser` de `find` busca archivos cuyo UID numerico no corresponde a ningun usuario en `/etc/passwd`, lo cual ocurre cuando se elimina un usuario sin eliminar sus archivos. Similarmente, `-nogroup` busca archivos sin grupo valido. Estos archivos son un riesgo de seguridad porque si se crea un nuevo usuario con el mismo UID, heredaria automaticamente la propiedad de esos archivos. La opcion A usa `-noowner` que no es un parametro valido de `find`.

</details>

---

### Pregunta 9

Que herramienta se utiliza para editar de forma segura el archivo `/etc/sudoers`?

a) `nano /etc/sudoers`
b) `sudoedit /etc/sudoers`
c) `visudo`
d) `vim /etc/sudoers`

<details><summary>Respuesta</summary>

**c) `visudo`**

`visudo` es la herramienta designada para editar `/etc/sudoers` de forma segura. Valida la sintaxis antes de guardar, evitando errores que podrian dejar el sistema sin acceso sudo. Tambien implementa bloqueo de archivo para evitar ediciones simultaneas. Editar directamente con `nano` o `vim` (opciones A y D) es peligroso porque un error de sintaxis puede bloquear todo el acceso sudo. `sudoedit` se usa para editar otros archivos con privilegios, no para editar sudoers.

</details>

---

### Pregunta 10

Que hace el comando `nmap -sn 192.168.1.0/24`?

a) Escanea todos los puertos de los hosts en la red 192.168.1.0/24
b) Realiza un escaneo de descubrimiento de hosts (ping scan) sin escanear puertos
c) Escanea solo los puertos bien conocidos (0-1023)
d) Realiza un escaneo sigiloso (stealth) de toda la subred

<details><summary>Respuesta</summary>

**b) Realiza un escaneo de descubrimiento de hosts (ping scan) sin escanear puertos**

La opcion `-sn` (antes `-sP`) de `nmap` realiza un ping scan, que descubre que hosts estan activos en la red sin escanear sus puertos. Es util para obtener un inventario rapido de dispositivos en la red. Otras opciones de nmap: `-sT` (escaneo TCP connect), `-sS` (escaneo SYN stealth, requiere root), `-sU` (escaneo UDP), `-p` (puertos especificos), `-O` (detectar sistema operativo), `-sV` (detectar version de servicios).

</details>

---

### Pregunta 11

Que comando bloquea la cuenta del usuario `pedro` impidiendo que pueda iniciar sesion?

a) `usermod -d pedro`
b) `passwd -l pedro`
c) `chage -L pedro`
d) `userdel pedro`

<details><summary>Respuesta</summary>

**b) `passwd -l pedro`**

El comando `passwd -l pedro` bloquea la cuenta del usuario pedro, anadiendo un `!` al inicio del hash de la contrasena en `/etc/shadow`. Esto impide el login con contrasena pero no afecta al acceso por clave SSH. Para desbloquear se usa `passwd -u pedro`. La opcion `-e` fuerza el cambio de contrasena en el proximo login. La opcion `-d` elimina la contrasena (dejar en blanco). `userdel` eliminaria el usuario completamente.

</details>

---

### Pregunta 12

En `/etc/security/limits.conf`, que recurso se utiliza para limitar el numero maximo de archivos que un usuario puede tener abiertos simultaneamente?

a) `nproc`
b) `fsize`
c) `nofile`
d) `core`

<details><summary>Respuesta</summary>

**c) `nofile`**

El recurso `nofile` en `/etc/security/limits.conf` controla el numero maximo de archivos abiertos simultaneamente (file descriptors) por usuario o grupo. Por ejemplo, `@developers hard nofile 8192` limita el grupo developers a 8192 archivos abiertos. `nproc` limita el numero de procesos, `fsize` el tamano maximo de archivo y `core` el tamano maximo de core dumps. Se puede verificar el limite actual con `ulimit -n`.

</details>

---

### Pregunta 13

Que comando fuerza al usuario `ana` a cambiar su contrasena en el proximo inicio de sesion usando `chage`?

a) `chage -E 0 ana`
b) `chage -M 0 ana`
c) `chage -d 0 ana`
d) `chage -W 0 ana`

<details><summary>Respuesta</summary>

**c) `chage -d 0 ana`**

El comando `chage -d 0 ana` establece la fecha del ultimo cambio de contrasena al dia 0 (epoch), lo que fuerza al usuario a cambiar su contrasena en el proximo inicio de sesion. Otra forma de lograr lo mismo es `passwd -e ana`. La opcion `-E` establece la fecha de expiracion de la cuenta, `-M` el maximo de dias de validez de la contrasena y `-W` los dias de aviso antes de la expiracion.

</details>

---

### Pregunta 14

Que comando muestra las conexiones de red abiertas por un usuario especifico llamado `juan`?

a) `lsof -u juan -i`
b) `netstat -u juan`
c) `fuser -u juan`
d) `ss -u juan`

<details><summary>Respuesta</summary>

**a) `lsof -u juan -i`**

El comando `lsof -u juan -i` combina dos filtros: `-u juan` filtra por usuario y `-i` muestra solo conexiones de red. Esto muestra todas las conexiones de red abiertas por el usuario juan. `lsof` (List Open Files) es muy versatil: `-i :80` filtra por puerto, `-p PID` por proceso, `+D /directorio` por directorio. Las opciones B, C y D no usan la sintaxis correcta para filtrar por usuario.

</details>

---

### Pregunta 15

Que opcion de `sudo` permite ejecutar un comando como un usuario diferente a root?

a) `sudo -s usuario comando`
b) `sudo -u usuario comando`
c) `sudo -r usuario comando`
d) `sudo --user usuario comando`

<details><summary>Respuesta</summary>

**b) `sudo -u usuario comando`**

La opcion `-u` de `sudo` permite ejecutar un comando como un usuario diferente a root. Por ejemplo, `sudo -u www-data comando` ejecuta el comando con los permisos del usuario www-data. Sin `-u`, `sudo` ejecuta como root por defecto. Otras opciones importantes: `-l` (listar permisos sudo), `-i` (shell interactivo como root), `-s` (shell sin login), `-k` (invalidar credenciales en cache).

</details>

---

### Pregunta 16

Que fichero lee el comando `last` para mostrar el historico de inicios de sesion?

a) `/var/log/auth.log`
b) `/var/log/wtmp`
c) `/var/log/btmp`
d) `/var/log/lastlog`

<details><summary>Respuesta</summary>

**b) `/var/log/wtmp`**

El comando `last` lee el archivo `/var/log/wtmp` para mostrar el historico de inicios de sesion exitosos del sistema. El comando `lastb` lee `/var/log/btmp` para mostrar los intentos de login fallidos. Estos archivos son binarios y no se pueden leer con editores de texto. `last -n 10` muestra los ultimos 10 logins, `last usuario` los de un usuario especifico y `last reboot` el historico de reinicios.

</details>

---

### Pregunta 17

Que diferencia hay entre `-perm -4000` y `-perm /6000` en el comando `find`?

a) `-perm -4000` busca SUID exacto y `-perm /6000` busca SGID exacto
b) `-perm -4000` busca archivos con al menos SUID y `-perm /6000` busca archivos con SUID o SGID (o ambos)
c) No hay diferencia, ambos buscan lo mismo
d) `-perm -4000` busca archivos sin SUID y `-perm /6000` busca archivos con SGID

<details><summary>Respuesta</summary>

**b) `-perm -4000` busca archivos con al menos SUID y `-perm /6000` busca archivos con SUID o SGID (o ambos)**

El guion `-` antes del permiso significa AND (todos los bits especificados deben estar activos). La barra `/` significa OR (al menos uno de los bits especificados debe estar activo). Asi, `-perm -4000` encuentra archivos que tienen al menos el bit SUID (4000) activado. `-perm /6000` encuentra archivos que tienen SUID (4000) o SGID (2000) o ambos, ya que 6000 = 4000 + 2000. Sin prefijo, `-perm 4000` busca permisos exactos.

</details>

---

### Pregunta 18

Que comando de `nmap` escanea puertos especificos 22, 80 y 443 en un host?

a) `nmap --ports 22,80,443 host`
b) `nmap -p 22,80,443 host`
c) `nmap -P 22,80,443 host`
d) `nmap -scan 22,80,443 host`

<details><summary>Respuesta</summary>

**b) `nmap -p 22,80,443 host`**

La opcion `-p` de `nmap` permite especificar los puertos a escanear. Se pueden listar puertos individuales separados por comas (`-p 22,80,443`) o rangos (`-p 1-1000`). Sin `-p`, nmap escanea los 1000 puertos mas comunes. Otras opciones importantes: `-sT` (escaneo TCP connect), `-sS` (SYN stealth, requiere root), `-sU` (UDP), `-O` (detectar OS), `-sV` (version de servicios).

</details>

---

### Pregunta 19

Que comando identifica y mata todos los procesos que estan usando el archivo `/var/log/syslog`?

a) `kill $(lsof /var/log/syslog)`
b) `fuser -k /var/log/syslog`
c) `ps -ef | grep syslog | kill`
d) `lsof -k /var/log/syslog`

<details><summary>Respuesta</summary>

**b) `fuser -k /var/log/syslog`**

El comando `fuser -k /var/log/syslog` identifica todos los procesos que tienen abierto el archivo `/var/log/syslog` y les envia la senal SIGKILL para terminarlos. La opcion `-v` muestra detalles del proceso. La opcion `-i` pide confirmacion antes de matar. `fuser` es especialmente util para desmontar sistemas de archivos cuando estan en uso: `fuser -km /mnt/usb` mata los procesos que usan el punto de montaje.

</details>

---

### Pregunta 20

Que muestra la salida del comando `passwd -S usuario`?

a) La contrasena del usuario en texto plano
b) El hash de la contrasena del usuario
c) El estado de la contrasena: si esta activa, bloqueada o sin contrasena, junto con fechas de caducidad
d) Los permisos sudo del usuario

<details><summary>Respuesta</summary>

**c) El estado de la contrasena: si esta activa, bloqueada o sin contrasena, junto con fechas de caducidad**

El comando `passwd -S usuario` muestra el estado de la contrasena del usuario con formato: nombre, estado (P=password activa, L=locked/bloqueada, NP=no password), fecha del ultimo cambio, dias minimos, dias maximos, dias de aviso y dias de inactividad. Nunca muestra la contrasena ni su hash. Para ver informacion mas detallada de caducidad se usa `chage -l usuario`.

</details>

---

### Pregunta 21

Que comando muestra todos los limites de recursos del shell actual?

<input type="text" class="fill-blank" data-answer="ulimit -a" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ulimit -a**

El comando `ulimit -a` muestra todos los limites de recursos del shell actual, incluyendo: tamano maximo de archivo (`-f`), numero maximo de procesos (`-u`), numero maximo de archivos abiertos (`-n`), tamano de core dumps (`-c`) y memoria virtual (`-v`). Para ver limites soft se usa `ulimit -Sa` y para hard `ulimit -Ha`. Los limites persistentes se configuran en `/etc/security/limits.conf`.

</details>

---

### Pregunta 22

Que comando muestra la informacion de caducidad de la contrasena del usuario `carlos`?

<input type="text" class="fill-blank" data-answer="chage -l carlos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chage -l carlos**

El comando `chage -l carlos` muestra toda la informacion de caducidad de la contrasena del usuario carlos: fecha del ultimo cambio, fecha de expiracion, dias minimos y maximos entre cambios, dias de aviso y dias de inactividad. Para modificar estos valores se usan opciones como `-M` (max dias), `-m` (min dias), `-W` (dias de aviso), `-E` (fecha de expiracion de cuenta) y `-I` (dias de inactividad).

</details>

---

### Pregunta 23

Que comando busca archivos que no tienen un grupo valido asignado en todo el sistema?

<input type="text" class="fill-blank" data-answer="find / -nogroup" data-alt="find / -nogroup 2>/dev/null" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find / -nogroup**

El comando `find / -nogroup` busca archivos cuyo GID numerico no corresponde a ningun grupo en `/etc/group`, lo que ocurre cuando se elimina un grupo sin eliminar sus archivos. Es similar a `find / -nouser` que busca archivos sin propietario valido. Ambos representan riesgos de seguridad y deben auditarse regularmente. Se recomienda agregar `2>/dev/null` para suprimir errores de permisos.

</details>

---

### Pregunta 24

Que comando lista los permisos sudo del usuario actual?

<input type="text" class="fill-blank" data-answer="sudo -l" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sudo -l**

El comando `sudo -l` lista los comandos que el usuario actual puede ejecutar con sudo, segun la configuracion de `/etc/sudoers`. Muestra las reglas aplicables al usuario, incluyendo si puede ejecutar todos los comandos, comandos especificos, si requiere contrasena (NOPASSWD) y como que usuarios puede ejecutar. Es util para verificar los privilegios asignados sin necesidad de leer directamente el archivo sudoers.

</details>

---

### Pregunta 25

Que comando muestra que proceso esta usando el puerto TCP 22 con `fuser`?

<input type="text" class="fill-blank" data-answer="fuser -n tcp 22" data-alt="fuser -v -n tcp 22" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**fuser -n tcp 22**

El comando `fuser -n tcp 22` identifica el proceso que esta utilizando el puerto TCP 22 (tipicamente SSH). La opcion `-n tcp` indica que se busca en el espacio de nombres TCP. Para modo detallado se agrega `-v`: `fuser -v -n tcp 22`. Alternativas para obtener informacion similar: `lsof -i :22`, `ss -tulnp | grep :22`. `fuser -k -n tcp 22` mataria el proceso que usa ese puerto.

</details>
