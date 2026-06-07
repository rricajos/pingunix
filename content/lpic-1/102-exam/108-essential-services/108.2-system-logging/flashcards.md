---
title: "108.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "108.2"
---

# Flashcards: 108.2 - Registro Del Sistema

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-001">
<div class="flashcard-front">

**P:** En rsyslog, que significa la regla `mail.=warning /var/log/mail.warn`?

</div>
<div class="flashcard-back">

**R:** b) Registra solo los mensajes de la facility `mail` con prioridad exacta `warning`. El operador `=` antes de la prioridad indica que solo se registra esa prioridad exacta. Sin el operador `=`, la regla `mail.warning` registraria la prioridad `warning` y todas las superiores (err, crit, alert, emerg). Los operadores de prioridad en syslog son: sin operador (esa y superiores), `=` (solo esa exacta), `!` (excepto esa y superiores), y `none` (excluir la facility).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-002">
<div class="flashcard-front">

**P:** Cual es el orden correcto de las prioridades de syslog, de mayor a menor severidad?

</div>
<div class="flashcard-back">

**R:** b) emerg, alert, crit, err, warning, notice, info, debug. Las 8 prioridades de syslog en orden de mayor a menor severidad son: emerg (0), alert (1), crit (2), err (3), warning (4), notice (5), info (6), debug (7). Una regla mnemotecnica util es: "Every Alley Cat Eats Wet Noodles In December" (Emerg, Alert, Crit, Err, Warning, Notice, Info, Debug).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-003">
<div class="flashcard-front">

**P:** Que comando envia un mensaje personalizado a syslog con facility `local0` y prioridad `info` desde un script bash?

</div>
<div class="flashcard-back">

**R:** b) `logger -p local0.info -t miscript "Mensaje"`. El comando `logger` se utiliza para generar mensajes syslog desde la linea de comandos o scripts. La opcion `-p` especifica la facility y prioridad en formato `facility.priority`, y `-t` agrega una etiqueta (tag) al mensaje. Los comandos `syslog`, `rsyslog` y `journalctl --send` no existen con esa sintaxis.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-004">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `/var/log/wtmp` y `/var/log/btmp`?

</div>
<div class="flashcard-back">

**R:** b) `wtmp` registra los logins exitosos y `btmp` los intentos de login fallidos. `/var/log/wtmp` registra los logins exitosos del sistema y se lee con el comando `last`. `/var/log/btmp` registra los intentos de login fallidos y se lee con el comando `lastb` (requiere permisos de root). Ambos son archivos binarios que no se pueden leer directamente con `cat` o `less`; se necesitan los comandos especializados `last` y `lastb` respectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-005">
<div class="flashcard-front">

**P:** En la configuracion de rsyslog, que diferencia hay entre `*.* @192.168.1.100:514` y `*.* @@192.168.1.100:514`?

</div>
<div class="flashcard-back">

**R:** b) `@` envia por UDP y `@@` envia por TCP. En rsyslog, un solo `@` indica envio de logs al servidor remoto usando UDP, mientras que doble `@@` indica envio usando TCP. Una regla mnemotecnica es: `@` = UDP (un arroba, un protocolo simple), `@@` = TCP (dos arrobas, protocolo con mas garantias). TCP es mas fiable porque garantiza la entrega, pero genera mas overhead. UDP es mas rapido pero puede perder mensajes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-006">
<div class="flashcard-front">

**P:** Que comando de `journalctl` muestra los logs del servicio `sshd` desde hace 2 horas con prioridad error o superior?

</div>
<div class="flashcard-back">

**R:** b) `journalctl -u sshd --since "2 hours ago" -p err`. En `journalctl`, la opcion `-u` filtra por unidad de servicio systemd, `--since` especifica el tiempo de inicio (acepta formatos como "2 hours ago", "yesterday", o fechas absolutas), y `-p` filtra por prioridad (la prioridad indicada y todas las superiores). La prioridad `err` incluye err, crit, alert y emerg.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-007">
<div class="flashcard-front">

**P:** Como se limita el espacio en disco del journal de systemd a un maximo de 200MB de forma permanente?

</div>
<div class="flashcard-back">

**R:** b) Configurando `SystemMaxUse=200M` en `/etc/systemd/journald.conf`. Para limitar de forma permanente el espacio del journal, se configura la directiva `SystemMaxUse=200M` en la seccion `[Journal]` de `/etc/systemd/journald.conf`, seguido de un reinicio del servicio con `systemctl restart systemd-journald`. La opcion A (`journalctl --vacuum-size=200M`) realiza una limpieza inmediata pero no establece un limite permanente. Las opciones C y D no son sintaxis validas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-008">
<div class="flashcard-front">

**P:** En logrotate, que hace la directiva `copytruncate`?

</div>
<div class="flashcard-back">

**R:** b) Copia el contenido al archivo rotado y trunca el original a cero. La directiva `copytruncate` copia el contenido del archivo de log al archivo rotado y luego trunca el archivo original a cero bytes. Esto es util para aplicaciones que mantienen el archivo abierto y no pueden ser senalizadas para reabrir el archivo (ya que el descriptor de archivo sigue apuntando al mismo inodo). Sin `copytruncate`, logrotate mueve el archivo y crea uno nuevo, lo cual requiere que la aplicacion reabra el archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-009">
<div class="flashcard-front">

**P:** Que valor de `Storage` en `/etc/systemd/journald.conf` hace que el journal sea persistente creando automaticamente el directorio si no existe?

</div>
<div class="flashcard-back">

**R:** b) `Storage=persistent`. Con `Storage=persistent`, el journal almacena los logs de forma persistente en `/var/log/journal/` y crea el directorio automaticamente si no existe. Con `Storage=auto` (valor por defecto), el almacenamiento es persistente solo si el directorio `/var/log/journal/` ya existe; si no existe, los logs se guardan de forma volatil en `/run/log/journal/`. `Storage=volatile` almacena solo en RAM y `Storage=permanent` no es un valor valido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-010">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra los mensajes del buffer del anillo del kernel con marcas de tiempo legibles?

</div>
<div class="flashcard-back">

**R:** b) `dmesg -T`. La opcion `-T` de `dmesg` muestra las marcas de tiempo en formato legible para humanos (fecha y hora completas) en lugar de los segundos desde el arranque del sistema. La opcion `-H` muestra el formato legible para humanos (human-readable) con paginacion. La opcion `-l` filtra por nivel de severidad (por ejemplo, `dmesg -l err`). La opcion `-c` muestra los mensajes y limpia el buffer.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-011">
<div class="flashcard-front">

**P:** Que comando de `journalctl` muestra los logs del arranque anterior al actual?

</div>
<div class="flashcard-back">

**R:** b) `journalctl -b -1`. `journalctl -b -1` muestra los logs del arranque anterior al actual. La opcion `-b` sin argumento o `-b 0` muestra los logs del arranque actual. `-b -2` mostraria los del arranque anterior al anterior, y asi sucesivamente. Para ver la lista de arranques disponibles se usa `journalctl --list-boots`. Esta funcionalidad requiere que el journal sea persistente (almacenado en `/var/log/journal/`); con almacenamiento volatil solo se dispone del arranque actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-012">
<div class="flashcard-front">

**P:** Que regla de rsyslog registra todos los mensajes de prioridad `info` o superior, EXCEPTO los de la facility `mail`?

</div>
<div class="flashcard-back">

**R:** a) `*.info;mail.none /var/log/messages`. La regla `*.info;mail.none /var/log/messages` registra todos los mensajes (`*`) con prioridad `info` o superior, excepto los de la facility `mail` (indicado por `.none`). El punto y coma `;` separa multiples selectores en una misma regla. El modificador `.none` excluye completamente una facility. Se pueden excluir multiples facilities: `*.info;mail.none;cron.none /var/log/messages`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-013">
<div class="flashcard-front">

**P:** Donde almacena journald los logs de forma volatil (se pierden al reiniciar)?

</div>
<div class="flashcard-back">

**R:** b) `/run/log/journal/`. Cuando el journal de systemd esta configurado como volatil (o cuando `Storage=auto` y no existe `/var/log/journal/`), los logs se almacenan en `/run/log/journal/`. El directorio `/run/` es un sistema de archivos en RAM (tmpfs), por lo que su contenido se pierde al reiniciar el sistema. Para almacenamiento persistente se usa `/var/log/journal/`. Con `Storage=persistent` en `/etc/systemd/journald.conf`, journald crea automaticamente el directorio `/var/log/journal/` si no existe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-014">
<div class="flashcard-front">

**P:** Que opcion de `journalctl` permite seguir los logs en tiempo real, similar a `tail -f`?

</div>
<div class="flashcard-back">

**R:** c) `journalctl -f`. `journalctl -f` (follow) muestra las ultimas entradas del journal y sigue mostrando las nuevas entradas en tiempo real, de forma similar a `tail -f` en archivos de log tradicionales. Se puede combinar con otros filtros: `journalctl -f -u sshd` sigue los logs del servicio sshd en tiempo real, o `journalctl -f -p err` sigue solo los mensajes con prioridad error o superior. La opcion `-r` muestra los logs en orden inverso (mas recientes primero).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-015">
<div class="flashcard-front">

**P:** Que facility de syslog se usa para mensajes del kernel?

</div>
<div class="flashcard-back">

**R:** b) `kern`. La facility `kern` se usa para mensajes del kernel de Linux. Otras facilities importantes son: `auth`/`authpriv` (autenticacion y seguridad), `cron` (servicio cron), `daemon` (demonios del sistema), `mail` (sistema de correo), `user` (aplicaciones de usuario), `lpr` (sistema de impresion), `syslog` (mensajes internos del propio syslog), y `local0` a `local7` (8 facilities para uso personalizado). La facility `system` no existe en syslog.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-016">
<div class="flashcard-front">

**P:** Que directiva de logrotate evita rotar un archivo si esta vacio?

</div>
<div class="flashcard-back">

**R:** b) `notifempty`. La directiva `notifempty` de logrotate indica que no se debe rotar el archivo si esta vacio, evitando crear archivos rotados innecesarios. `missingok` indica que no se genere un error si el archivo de log no existe. Otras directivas comunes: `compress` (comprimir archivos rotados), `delaycompress` (comprimir en la siguiente rotacion), `copytruncate` (copiar y truncar en vez de mover), y `dateext` (usar fecha como extension).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-017">
<div class="flashcard-front">

**P:** Que comando reduce el tamano del journal de systemd eliminando las entradas mas antiguas de 2 semanas?

</div>
<div class="flashcard-back">

**R:** b) `journalctl --vacuum-time=2weeks`. `journalctl --vacuum-time=2weeks` elimina las entradas del journal que tienen mas de 2 semanas de antiguedad. Para limitar por tamano se usa `--vacuum-size=100M` (reduce a un maximo de 100 MB). Estos comandos realizan una limpieza puntual. Para establecer limites permanentes se configuran las directivas `SystemMaxUse`, `SystemMaxFileSize` y `MaxRetentionSec` en `/etc/systemd/journald.conf`. Para ver el espacio usado: `journalctl --disk-usage`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-018">
<div class="flashcard-front">

**P:** Que configuracion en syslog-ng define un objeto de tipo filtro?

</div>
<div class="flashcard-back">

**R:** c) `filter f_auth { ... };`. En syslog-ng, la configuracion se basa en cuatro tipos de objetos: `source` (define de donde se reciben los mensajes), `destination` (define donde se envian), `filter` (define criterios de filtrado como facility y prioridad), y `log` (conecta source, filter y destination). Un filtro tipico seria: `filter f_auth { facility(auth, authpriv); };`. La configuracion se encuentra en `/etc/syslog-ng/syslog-ng.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-019">
<div class="flashcard-front">

**P:** Que comando de `journalctl` muestra solo los mensajes del kernel, de forma similar a `dmesg`?

</div>
<div class="flashcard-back">

**R:** b) `journalctl -k`. `journalctl -k` muestra solo los mensajes del kernel, de forma equivalente a `dmesg`. Se puede combinar con otras opciones: `journalctl -k -b -1` muestra los mensajes del kernel del arranque anterior, y `journalctl -k -p err` muestra solo los mensajes del kernel con prioridad error o superior. A diferencia de `dmesg`, que muestra el buffer del anillo del kernel actual, `journalctl -k` puede acceder a mensajes del kernel de arranques anteriores si el journal es persistente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-020">
<div class="flashcard-front">

**P:** Que significa el prefijo `-` antes de un archivo de destino en una regla de rsyslog, como en `*.*;auth.none -/var/log/syslog`?

</div>
<div class="flashcard-back">

**R:** b) Que la escritura es asincrona (no se fuerza un sync despues de cada mensaje). El prefijo `-` antes de la ruta de un archivo en rsyslog indica escritura asincrona: no se fuerza un `sync()` al disco despues de cada mensaje escrito. Esto mejora el rendimiento significativamente, especialmente en sistemas con alto volumen de logs, pero implica un riesgo minimo de perder algunos mensajes si el sistema se apaga abruptamente. Sin el prefijo `-`, rsyslog fuerza un sync despues de cada escritura, lo que es mas seguro pero mas lento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para ver los logs del servicio `nginx` usando `journalctl`. <input type="text" class="fill-blank" data-answer="journalctl -u nginx" data-alt="journalctl -u nginx.service" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** journalctl -u nginx. El comando `journalctl -u nginx` filtra y muestra solo los logs de la unidad de servicio `nginx` de systemd. La opcion `-u` (unit) acepta el nombre del servicio con o sin el sufijo `.service`. Se puede combinar con otras opciones: `-f` para seguimiento en tiempo real, `-p err` para filtrar por prioridad, `--since "1 hour ago"` para limitar por tiempo, y `-n 50` para mostrar solo las ultimas 50 entradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para enviar un mensaje de prueba a syslog con la etiqueta `mibackup` y prioridad `local0.info`. <input type="text" class="fill-blank" data-answer="logger -p local0.info -t mibackup" data-alt="logger -t mibackup -p local0.info" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** logger -p local0.info -t mibackup. El comando `logger` genera mensajes syslog desde la linea de comandos o scripts. La opcion `-p` especifica la facility y prioridad en formato `facility.priority`, y `-t` establece una etiqueta (tag) para identificar el origen del mensaje. El texto del mensaje se puede pasar como argumento: `logger -p local0.info -t mibackup "Backup completado"`. Es una herramienta esencial para registrar eventos en scripts de administracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ver las ultimas 20 entradas del journal de systemd sin paginador. <input type="text" class="fill-blank" data-answer="journalctl -n 20 --no-pager" data-alt="journalctl --no-pager -n 20" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** journalctl -n 20 --no-pager. El comando `journalctl -n 20 --no-pager` muestra las ultimas 20 entradas del journal sin usar un paginador (como `less`), enviando la salida directamente a stdout. La opcion `-n` (lines) limita el numero de entradas mostradas. `--no-pager` es util en scripts o cuando se quiere procesar la salida con otros comandos. Sin `-n`, `journalctl` muestra todas las entradas desde el inicio del journal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para forzar la ejecucion de logrotate en modo debug (simulacion sin ejecutar). <input type="text" class="fill-blank" data-answer="logrotate -d /etc/logrotate.conf" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** logrotate -d /etc/logrotate.conf. El comando `logrotate -d /etc/logrotate.conf` ejecuta logrotate en modo debug, simulando la rotacion sin realizar ningun cambio real. Es util para verificar que la configuracion es correcta antes de aplicarla. Para forzar una rotacion real: `logrotate -f /etc/logrotate.conf`. Para ejecutar normalmente: `logrotate /etc/logrotate.conf`. Logrotate se ejecuta tipicamente mediante cron de forma diaria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para ver el espacio en disco utilizado por el journal de systemd. <input type="text" class="fill-blank" data-answer="journalctl --disk-usage" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** journalctl --disk-usage. El comando `journalctl --disk-usage` muestra el espacio en disco total utilizado por los archivos del journal de systemd. Es util para monitorear el crecimiento del journal y decidir si es necesario realizar una limpieza con `journalctl --vacuum-size=TAMANO` o `journalctl --vacuum-time=TIEMPO`. Para limitar permanentemente el tamano, se configura `SystemMaxUse` en `/etc/systemd/journald.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-026">
<div class="flashcard-front">

**P:** Un administrador configura rsyslog con la regla `local3.* /var/log/app_custom.log` pero no aparecen mensajes. El desarrollador confirma que la aplicacion envia logs con facility `syslog`. Cual es el problema?

</div>
<div class="flashcard-back">

**R:** La aplicacion esta enviando mensajes con la facility `syslog` (mensajes internos del propio sistema de logging), pero la regla filtra por `local3`. Para capturar esos mensajes, la regla deberia ser `syslog.* /var/log/app_custom.log`, o bien el desarrollador debe reconfigurar la aplicacion para usar `local3` como facility. Las facilities `local0` a `local7` estan reservadas para uso personalizado y son las recomendadas para aplicaciones propias. La facility `syslog` esta reservada para mensajes generados internamente por el propio demonio syslog.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-027">
<div class="flashcard-front">

**P:** Un servidor usa systemd-journald y rsyslog simultaneamente, pero rsyslog no recibe los mensajes del journal. Que directiva debe configurarse en `/etc/systemd/journald.conf` para solucionar esto?

</div>
<div class="flashcard-back">

**R:** Debe configurarse `ForwardToSyslog=yes` en la seccion `[Journal]` de `/etc/systemd/journald.conf`. Esta directiva indica a journald que reenvie los mensajes al syslog tradicional (rsyslog o syslog-ng) a traves del socket `/dev/log`. Otras directivas de reenvio disponibles son: `ForwardToKMsg` (reenviar al buffer del kernel), `ForwardToConsole` (reenviar a la consola), y `ForwardToWall` (enviar mensajes criticos a todos los terminales). Tras modificar la configuracion, se debe reiniciar el servicio con `systemctl restart systemd-journald`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-028">
<div class="flashcard-front">

**P:** Un servidor Linux tiene instalado tanto rsyslog como systemd-journald. Un junior pregunta cual es la diferencia fundamental entre ambos sistemas de logging. Cual es la respuesta correcta?

</div>
<div class="flashcard-back">

**R:** rsyslog es un demonio de logging tradicional basado en el protocolo syslog que almacena logs en archivos de texto plano en `/var/log/`. systemd-journald es el sistema de logging nativo de systemd que almacena logs en formato binario estructurado consultable con `journalctl`. Las diferencias clave son: rsyslog usa archivos de texto (legibles con `cat`, `grep`, `less`), journald usa formato binario (solo legible con `journalctl`). rsyslog se configura en `/etc/rsyslog.conf`, journald en `/etc/systemd/journald.conf`. Ambos pueden coexistir: journald captura los logs y los reenvia a rsyslog con `ForwardToSyslog=yes`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-029">
<div class="flashcard-front">

**P:** Escribe el comando `logger` para enviar el mensaje "Error en disco" con facility `local5`, prioridad `err`, y etiqueta `monitor-disco`. <input type="text" class="fill-blank" data-answer="logger -p local5.err -t monitor-disco &quot;Error en disco&quot;" data-alt="logger -t monitor-disco -p local5.err &quot;Error en disco&quot;" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `logger -p local5.err -t monitor-disco "Error en disco"`. La opcion `-p` especifica facility y prioridad en formato `facility.priority`. La opcion `-t` define la etiqueta (tag) que aparecera en el log para identificar el origen del mensaje. El texto del mensaje se pasa como argumento entre comillas. El comando `logger` es esencial en scripts de administracion para registrar eventos en syslog. Otros usos: `logger -s` envia tambien a stderr, y `logger -i` incluye el PID del proceso en el mensaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-030">
<div class="flashcard-front">

**P:** Despues de conectar un disco USB a un servidor, necesitas verificar si el kernel lo detecto correctamente. Que comando usarias y por que?

</div>
<div class="flashcard-back">

**R:** `dmesg` o `dmesg -T` para ver los mensajes del buffer del anillo del kernel con marcas de tiempo legibles. El kernel registra en su ring buffer todos los eventos de hardware, como la deteccion de nuevos dispositivos, errores de disco o problemas de memoria. Opciones utiles: `-T` muestra timestamps legibles, `-l err` filtra por nivel de severidad, `-w` sigue los mensajes en tiempo real (similar a `tail -f`), y `-c` muestra y limpia el buffer (requiere root). Tambien se puede usar `journalctl -k` para acceder a los mismos mensajes del kernel a traves de journald.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-031">
<div class="flashcard-front">

**P:** En el examen LPIC-1 aparece la regla `cron.warning /var/log/cron.warn`. Que mensajes se registraran: solo los de prioridad `warning`, o tambien los de prioridades superiores como `err`, `crit` y `emerg`?

</div>
<div class="flashcard-back">

**R:** Se registraran los mensajes de prioridad `warning` Y todas las superiores (`err`, `crit`, `alert`, `emerg`). En syslog, una regla sin operador especial como `cron.warning` captura la prioridad indicada y todas las de mayor severidad. Esta es una distincion critica en el examen: sin operador = esa prioridad y superiores; con `=` (por ejemplo `cron.=warning`) = solo esa prioridad exacta; con `!` (por ejemplo `cron.!warning`) = excepto esa prioridad y superiores. El examen suele preguntar esta diferencia para confundir a los candidatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.2">
</div>

<div class="flashcard" data-id="108.2-fc-032">
<div class="flashcard-front">

**P:** En el examen LPIC-1 te preguntan: "Que comando muestra los intentos de login fallidos?" y las opciones son `last`, `lastb`, `lastlog` y `who`. Cual es la respuesta correcta y por que las demas son incorrectas?

</div>
<div class="flashcard-back">

**R:** La respuesta correcta es `lastb`. El comando `lastb` lee `/var/log/btmp` y muestra los intentos de login fallidos (requiere root). Las trampas del examen: `last` lee `/var/log/wtmp` y muestra los logins exitosos, no los fallidos. `lastlog` lee `/var/log/lastlog` y muestra la fecha del ultimo login de cada usuario, no los intentos fallidos. `who` lee `/var/run/utmp` y muestra los usuarios actualmente conectados. Los archivos `wtmp`, `btmp` y `lastlog` son binarios y no se pueden leer con `cat` o `less`, solo con sus comandos especificos.

</div>
</div>

---

