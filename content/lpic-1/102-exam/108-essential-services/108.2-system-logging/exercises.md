---
title: "108.2 Registro del sistema - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-108
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "108"
subtema: "108.2"
---

# 108.2 Registro del sistema - Ejercicios

### Pregunta 1

En rsyslog, que significa la regla `mail.=warning /var/log/mail.warn`?

a) Registra todos los mensajes de la facility `mail` con prioridad `warning` y superiores
b) Registra solo los mensajes de la facility `mail` con prioridad exacta `warning`
c) Registra todos los mensajes excepto los de prioridad `warning`
d) Registra los mensajes de todas las facilities con prioridad `warning`

<details><summary>Respuesta</summary>

**b) Registra solo los mensajes de la facility `mail` con prioridad exacta `warning`**

El operador `=` antes de la prioridad indica que solo se registra esa prioridad exacta. Sin el operador `=`, la regla `mail.warning` registraria la prioridad `warning` y todas las superiores (err, crit, alert, emerg). Los operadores de prioridad en syslog son: sin operador (esa y superiores), `=` (solo esa exacta), `!` (excepto esa y superiores), y `none` (excluir la facility).

</details>

---

### Pregunta 2

Cual es el orden correcto de las prioridades de syslog, de mayor a menor severidad?

a) debug, info, notice, warning, err, crit, alert, emerg
b) emerg, alert, crit, err, warning, notice, info, debug
c) emerg, crit, alert, err, warning, notice, info, debug
d) alert, emerg, crit, err, warning, notice, info, debug

<details><summary>Respuesta</summary>

**b) emerg, alert, crit, err, warning, notice, info, debug**

Las 8 prioridades de syslog en orden de mayor a menor severidad son: emerg (0), alert (1), crit (2), err (3), warning (4), notice (5), info (6), debug (7). Una regla mnemotecnica util es: "Every Alley Cat Eats Wet Noodles In December" (Emerg, Alert, Crit, Err, Warning, Notice, Info, Debug).

</details>

---

### Pregunta 3

Que comando envia un mensaje personalizado a syslog con facility `local0` y prioridad `info` desde un script bash?

a) `syslog -p local0.info "Mensaje"`
b) `logger -p local0.info -t miscript "Mensaje"`
c) `journalctl --send "local0.info" "Mensaje"`
d) `rsyslog -f local0 -p info "Mensaje"`

<details><summary>Respuesta</summary>

**b) `logger -p local0.info -t miscript "Mensaje"`**

El comando `logger` se utiliza para generar mensajes syslog desde la linea de comandos o scripts. La opcion `-p` especifica la facility y prioridad en formato `facility.priority`, y `-t` agrega una etiqueta (tag) al mensaje. Los comandos `syslog`, `rsyslog` y `journalctl --send` no existen con esa sintaxis.

</details>

---

### Pregunta 4

Cual es la diferencia entre `/var/log/wtmp` y `/var/log/btmp`?

a) `wtmp` registra los intentos fallidos y `btmp` los logins exitosos
b) `wtmp` registra los logins exitosos y `btmp` los intentos de login fallidos
c) Ambos registran la misma informacion pero en formato diferente
d) `wtmp` es para el sistema y `btmp` es para las aplicaciones

<details><summary>Respuesta</summary>

**b) `wtmp` registra los logins exitosos y `btmp` los intentos de login fallidos**

`/var/log/wtmp` registra los logins exitosos del sistema y se lee con el comando `last`. `/var/log/btmp` registra los intentos de login fallidos y se lee con el comando `lastb` (requiere permisos de root). Ambos son archivos binarios que no se pueden leer directamente con `cat` o `less`; se necesitan los comandos especializados `last` y `lastb` respectivamente.

</details>

---

### Pregunta 5

En la configuracion de rsyslog, que diferencia hay entre `*.* @192.168.1.100:514` y `*.* @@192.168.1.100:514`?

a) `@` envia por TCP y `@@` envia por UDP
b) `@` envia por UDP y `@@` envia por TCP
c) `@` envia en texto plano y `@@` envia cifrado con TLS
d) No hay diferencia, ambas envian por TCP

<details><summary>Respuesta</summary>

**b) `@` envia por UDP y `@@` envia por TCP**

En rsyslog, un solo `@` indica envio de logs al servidor remoto usando UDP, mientras que doble `@@` indica envio usando TCP. Una regla mnemotecnica es: `@` = UDP (un arroba, un protocolo simple), `@@` = TCP (dos arrobas, protocolo con mas garantias). TCP es mas fiable porque garantiza la entrega, pero genera mas overhead. UDP es mas rapido pero puede perder mensajes.

</details>

---

### Pregunta 6

Que comando de `journalctl` muestra los logs del servicio `sshd` desde hace 2 horas con prioridad error o superior?

a) `journalctl --service sshd --since "2h" --level err`
b) `journalctl -u sshd --since "2 hours ago" -p err`
c) `journalctl -f sshd -t "2 hours" -p error`
d) `journalctl --unit=sshd --time=2h --priority=3`

<details><summary>Respuesta</summary>

**b) `journalctl -u sshd --since "2 hours ago" -p err`**

En `journalctl`, la opcion `-u` filtra por unidad de servicio systemd, `--since` especifica el tiempo de inicio (acepta formatos como "2 hours ago", "yesterday", o fechas absolutas), y `-p` filtra por prioridad (la prioridad indicada y todas las superiores). La prioridad `err` incluye err, crit, alert y emerg.

</details>

---

### Pregunta 7

Como se limita el espacio en disco del journal de systemd a un maximo de 200MB de forma permanente?

a) Ejecutando `journalctl --vacuum-size=200M`
b) Configurando `SystemMaxUse=200M` en `/etc/systemd/journald.conf`
c) Editando `MaxDiskUsage=200M` en `/etc/rsyslog.conf`
d) Ejecutando `systemctl set-property systemd-journald MaxSize=200M`

<details><summary>Respuesta</summary>

**b) Configurando `SystemMaxUse=200M` en `/etc/systemd/journald.conf`**

Para limitar de forma permanente el espacio del journal, se configura la directiva `SystemMaxUse=200M` en la seccion `[Journal]` de `/etc/systemd/journald.conf`, seguido de un reinicio del servicio con `systemctl restart systemd-journald`. La opcion A (`journalctl --vacuum-size=200M`) realiza una limpieza inmediata pero no establece un limite permanente. Las opciones C y D no son sintaxis validas.

</details>

---

### Pregunta 8

En logrotate, que hace la directiva `copytruncate`?

a) Copia el archivo rotado y lo comprime inmediatamente
b) Copia el contenido al archivo rotado y trunca el original a cero
c) Crea una copia de seguridad antes de eliminar el archivo
d) Trunca el archivo sin hacer copia

<details><summary>Respuesta</summary>

**b) Copia el contenido al archivo rotado y trunca el original a cero**

La directiva `copytruncate` copia el contenido del archivo de log al archivo rotado y luego trunca el archivo original a cero bytes. Esto es util para aplicaciones que mantienen el archivo abierto y no pueden ser senalizadas para reabrir el archivo (ya que el descriptor de archivo sigue apuntando al mismo inodo). Sin `copytruncate`, logrotate mueve el archivo y crea uno nuevo, lo cual requiere que la aplicacion reabra el archivo.

</details>

---

### Pregunta 9

Que valor de `Storage` en `/etc/systemd/journald.conf` hace que el journal sea persistente creando automaticamente el directorio si no existe?

a) `Storage=auto`
b) `Storage=persistent`
c) `Storage=volatile`
d) `Storage=permanent`

<details><summary>Respuesta</summary>

**b) `Storage=persistent`**

Con `Storage=persistent`, el journal almacena los logs de forma persistente en `/var/log/journal/` y crea el directorio automaticamente si no existe. Con `Storage=auto` (valor por defecto), el almacenamiento es persistente solo si el directorio `/var/log/journal/` ya existe; si no existe, los logs se guardan de forma volatil en `/run/log/journal/`. `Storage=volatile` almacena solo en RAM y `Storage=permanent` no es un valor valido.

</details>

---

### Pregunta 10

Cual de los siguientes comandos muestra los mensajes del buffer del anillo del kernel con marcas de tiempo legibles?

a) `dmesg -H`
b) `dmesg -T`
c) `dmesg -l`
d) `dmesg -c`

<details><summary>Respuesta</summary>

**b) `dmesg -T`**

La opcion `-T` de `dmesg` muestra las marcas de tiempo en formato legible para humanos (fecha y hora completas) en lugar de los segundos desde el arranque del sistema. La opcion `-H` muestra el formato legible para humanos (human-readable) con paginacion. La opcion `-l` filtra por nivel de severidad (por ejemplo, `dmesg -l err`). La opcion `-c` muestra los mensajes y limpia el buffer.

</details>

---

### Pregunta 11

Que comando de `journalctl` muestra los logs del arranque anterior al actual?

a) `journalctl -b 0`
b) `journalctl -b -1`
c) `journalctl --previous-boot`
d) `journalctl -k -1`

<details><summary>Respuesta</summary>

**b) `journalctl -b -1`**

`journalctl -b -1` muestra los logs del arranque anterior al actual. La opcion `-b` sin argumento o `-b 0` muestra los logs del arranque actual. `-b -2` mostraria los del arranque anterior al anterior, y asi sucesivamente. Para ver la lista de arranques disponibles se usa `journalctl --list-boots`. Esta funcionalidad requiere que el journal sea persistente (almacenado en `/var/log/journal/`); con almacenamiento volatil solo se dispone del arranque actual.

</details>

---

### Pregunta 12

Que regla de rsyslog registra todos los mensajes de prioridad `info` o superior, EXCEPTO los de la facility `mail`?

a) `*.info;mail.none /var/log/messages`
b) `*.info;!mail /var/log/messages`
c) `*.info -mail /var/log/messages`
d) `info.*;mail.exclude /var/log/messages`

<details><summary>Respuesta</summary>

**a) `*.info;mail.none /var/log/messages`**

La regla `*.info;mail.none /var/log/messages` registra todos los mensajes (`*`) con prioridad `info` o superior, excepto los de la facility `mail` (indicado por `.none`). El punto y coma `;` separa multiples selectores en una misma regla. El modificador `.none` excluye completamente una facility. Se pueden excluir multiples facilities: `*.info;mail.none;cron.none /var/log/messages`.

</details>

---

### Pregunta 13

Donde almacena journald los logs de forma volatil (se pierden al reiniciar)?

a) `/var/log/journal/`
b) `/run/log/journal/`
c) `/tmp/journal/`
d) `/var/log/syslog`

<details><summary>Respuesta</summary>

**b) `/run/log/journal/`**

Cuando el journal de systemd esta configurado como volatil (o cuando `Storage=auto` y no existe `/var/log/journal/`), los logs se almacenan en `/run/log/journal/`. El directorio `/run/` es un sistema de archivos en RAM (tmpfs), por lo que su contenido se pierde al reiniciar el sistema. Para almacenamiento persistente se usa `/var/log/journal/`. Con `Storage=persistent` en `/etc/systemd/journald.conf`, journald crea automaticamente el directorio `/var/log/journal/` si no existe.

</details>

---

### Pregunta 14

Que opcion de `journalctl` permite seguir los logs en tiempo real, similar a `tail -f`?

a) `journalctl -t`
b) `journalctl -r`
c) `journalctl -f`
d) `journalctl --live`

<details><summary>Respuesta</summary>

**c) `journalctl -f`**

`journalctl -f` (follow) muestra las ultimas entradas del journal y sigue mostrando las nuevas entradas en tiempo real, de forma similar a `tail -f` en archivos de log tradicionales. Se puede combinar con otros filtros: `journalctl -f -u sshd` sigue los logs del servicio sshd en tiempo real, o `journalctl -f -p err` sigue solo los mensajes con prioridad error o superior. La opcion `-r` muestra los logs en orden inverso (mas recientes primero).

</details>

---

### Pregunta 15

Que facility de syslog se usa para mensajes del kernel?

a) `daemon`
b) `kern`
c) `syslog`
d) `system`

<details><summary>Respuesta</summary>

**b) `kern`**

La facility `kern` se usa para mensajes del kernel de Linux. Otras facilities importantes son: `auth`/`authpriv` (autenticacion y seguridad), `cron` (servicio cron), `daemon` (demonios del sistema), `mail` (sistema de correo), `user` (aplicaciones de usuario), `lpr` (sistema de impresion), `syslog` (mensajes internos del propio syslog), y `local0` a `local7` (8 facilities para uso personalizado). La facility `system` no existe en syslog.

</details>

---

### Pregunta 16

Que directiva de logrotate evita rotar un archivo si esta vacio?

a) `missingok`
b) `notifempty`
c) `noempty`
d) `skipempty`

<details><summary>Respuesta</summary>

**b) `notifempty`**

La directiva `notifempty` de logrotate indica que no se debe rotar el archivo si esta vacio, evitando crear archivos rotados innecesarios. `missingok` indica que no se genere un error si el archivo de log no existe. Otras directivas comunes: `compress` (comprimir archivos rotados), `delaycompress` (comprimir en la siguiente rotacion), `copytruncate` (copiar y truncar en vez de mover), y `dateext` (usar fecha como extension).

</details>

---

### Pregunta 17

Que comando reduce el tamano del journal de systemd eliminando las entradas mas antiguas de 2 semanas?

a) `journalctl --vacuum-size=2weeks`
b) `journalctl --vacuum-time=2weeks`
c) `journalctl --clean --older-than=2w`
d) `systemctl clean journald --time=2weeks`

<details><summary>Respuesta</summary>

**b) `journalctl --vacuum-time=2weeks`**

`journalctl --vacuum-time=2weeks` elimina las entradas del journal que tienen mas de 2 semanas de antiguedad. Para limitar por tamano se usa `--vacuum-size=100M` (reduce a un maximo de 100 MB). Estos comandos realizan una limpieza puntual. Para establecer limites permanentes se configuran las directivas `SystemMaxUse`, `SystemMaxFileSize` y `MaxRetentionSec` en `/etc/systemd/journald.conf`. Para ver el espacio usado: `journalctl --disk-usage`.

</details>

---

### Pregunta 18

Que configuracion en syslog-ng define un objeto de tipo filtro?

a) `source s_local { ... };`
b) `destination d_auth { ... };`
c) `filter f_auth { ... };`
d) `log { ... };`

<details><summary>Respuesta</summary>

**c) `filter f_auth { ... };`**

En syslog-ng, la configuracion se basa en cuatro tipos de objetos: `source` (define de donde se reciben los mensajes), `destination` (define donde se envian), `filter` (define criterios de filtrado como facility y prioridad), y `log` (conecta source, filter y destination). Un filtro tipico seria: `filter f_auth { facility(auth, authpriv); };`. La configuracion se encuentra en `/etc/syslog-ng/syslog-ng.conf`.

</details>

---

### Pregunta 19

Que comando de `journalctl` muestra solo los mensajes del kernel, de forma similar a `dmesg`?

a) `journalctl -u kernel`
b) `journalctl -k`
c) `journalctl --kernel-only`
d) `journalctl -f kern`

<details><summary>Respuesta</summary>

**b) `journalctl -k`**

`journalctl -k` muestra solo los mensajes del kernel, de forma equivalente a `dmesg`. Se puede combinar con otras opciones: `journalctl -k -b -1` muestra los mensajes del kernel del arranque anterior, y `journalctl -k -p err` muestra solo los mensajes del kernel con prioridad error o superior. A diferencia de `dmesg`, que muestra el buffer del anillo del kernel actual, `journalctl -k` puede acceder a mensajes del kernel de arranques anteriores si el journal es persistente.

</details>

---

### Pregunta 20

Que significa el prefijo `-` antes de un archivo de destino en una regla de rsyslog, como en `*.*;auth.none -/var/log/syslog`?

a) Que el archivo se crea si no existe
b) Que la escritura es asincrona (no se fuerza un sync despues de cada mensaje)
c) Que el archivo se trunca antes de escribir
d) Que los mensajes se escriben en orden inverso

<details><summary>Respuesta</summary>

**b) Que la escritura es asincrona (no se fuerza un sync despues de cada mensaje)**

El prefijo `-` antes de la ruta de un archivo en rsyslog indica escritura asincrona: no se fuerza un `sync()` al disco despues de cada mensaje escrito. Esto mejora el rendimiento significativamente, especialmente en sistemas con alto volumen de logs, pero implica un riesgo minimo de perder algunos mensajes si el sistema se apaga abruptamente. Sin el prefijo `-`, rsyslog fuerza un sync despues de cada escritura, lo que es mas seguro pero mas lento.

</details>

---

### Pregunta 21

Escribe el comando para ver los logs del servicio `nginx` usando `journalctl`.

<input type="text" class="fill-blank" data-answer="journalctl -u nginx" data-alt="journalctl -u nginx.service" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**journalctl -u nginx**

El comando `journalctl -u nginx` filtra y muestra solo los logs de la unidad de servicio `nginx` de systemd. La opcion `-u` (unit) acepta el nombre del servicio con o sin el sufijo `.service`. Se puede combinar con otras opciones: `-f` para seguimiento en tiempo real, `-p err` para filtrar por prioridad, `--since "1 hour ago"` para limitar por tiempo, y `-n 50` para mostrar solo las ultimas 50 entradas.

</details>

---

### Pregunta 22

Escribe el comando para enviar un mensaje de prueba a syslog con la etiqueta `mibackup` y prioridad `local0.info`.

<input type="text" class="fill-blank" data-answer="logger -p local0.info -t mibackup" data-alt="logger -t mibackup -p local0.info" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**logger -p local0.info -t mibackup**

El comando `logger` genera mensajes syslog desde la linea de comandos o scripts. La opcion `-p` especifica la facility y prioridad en formato `facility.priority`, y `-t` establece una etiqueta (tag) para identificar el origen del mensaje. El texto del mensaje se puede pasar como argumento: `logger -p local0.info -t mibackup "Backup completado"`. Es una herramienta esencial para registrar eventos en scripts de administracion.

</details>

---

### Pregunta 23

Escribe el comando para ver las ultimas 20 entradas del journal de systemd sin paginador.

<input type="text" class="fill-blank" data-answer="journalctl -n 20 --no-pager" data-alt="journalctl --no-pager -n 20" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**journalctl -n 20 --no-pager**

El comando `journalctl -n 20 --no-pager` muestra las ultimas 20 entradas del journal sin usar un paginador (como `less`), enviando la salida directamente a stdout. La opcion `-n` (lines) limita el numero de entradas mostradas. `--no-pager` es util en scripts o cuando se quiere procesar la salida con otros comandos. Sin `-n`, `journalctl` muestra todas las entradas desde el inicio del journal.

</details>

---

### Pregunta 24

Escribe el comando para forzar la ejecucion de logrotate en modo debug (simulacion sin ejecutar).

<input type="text" class="fill-blank" data-answer="logrotate -d /etc/logrotate.conf" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**logrotate -d /etc/logrotate.conf**

El comando `logrotate -d /etc/logrotate.conf` ejecuta logrotate en modo debug, simulando la rotacion sin realizar ningun cambio real. Es util para verificar que la configuracion es correcta antes de aplicarla. Para forzar una rotacion real: `logrotate -f /etc/logrotate.conf`. Para ejecutar normalmente: `logrotate /etc/logrotate.conf`. Logrotate se ejecuta tipicamente mediante cron de forma diaria.

</details>

---

### Pregunta 25

Escribe el comando para ver el espacio en disco utilizado por el journal de systemd.

<input type="text" class="fill-blank" data-answer="journalctl --disk-usage" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**journalctl --disk-usage**

El comando `journalctl --disk-usage` muestra el espacio en disco total utilizado por los archivos del journal de systemd. Es util para monitorear el crecimiento del journal y decidir si es necesario realizar una limpieza con `journalctl --vacuum-size=TAMANO` o `journalctl --vacuum-time=TIEMPO`. Para limitar permanentemente el tamano, se configura `SystemMaxUse` en `/etc/systemd/journald.conf`.

</details>
