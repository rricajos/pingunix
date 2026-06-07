---
title: "108.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "108.3"
---

# Flashcards: 108.3 - Mta Basico

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-001">
<div class="flashcard-front">

**P:** Cual de los siguientes componentes del sistema de correo se encarga de transferir mensajes entre servidores mediante el protocolo SMTP?

</div>
<div class="flashcard-back">

**R:** b) MTA (Mail Transfer Agent). El MTA (Mail Transfer Agent) es el componente responsable de transferir correo entre servidores usando el protocolo SMTP. Ejemplos de MTAs son sendmail, postfix y exim. El MUA (Mail User Agent) es el cliente de correo que usa el usuario (Thunderbird, mutt). El MDA (Mail Delivery Agent) entrega el correo al buzon local del usuario (procmail, maildrop). El MSA no es un componente estandar del examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-002">
<div class="flashcard-front">

**P:** Despues de editar el archivo `/etc/aliases` para agregar un nuevo alias de correo, que comando se debe ejecutar para que los cambios tengan efecto?

</div>
<div class="flashcard-back">

**R:** c) `newaliases`. El comando `newaliases` reconstruye la base de datos de aliases (`/etc/aliases.db`) a partir del archivo de texto `/etc/aliases`. Sin ejecutar este comando, los cambios en `/etc/aliases` no tendran efecto. Una alternativa equivalente es `sendmail -bi`. Reiniciar postfix o ejecutar `sendmail -q` (que procesa la cola) no reconstruyen la base de datos de aliases.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-003">
<div class="flashcard-front">

**P:** Cual es el puerto estandar utilizado por SMTP para la transferencia de correo entre servidores?

</div>
<div class="flashcard-back">

**R:** b) Puerto 25. El puerto 25 es el puerto estandar de SMTP para la transferencia de correo entre servidores. El puerto 587 se usa para SMTP submission (envio de correo con autenticacion desde un cliente). El puerto 465 se usa para SMTPS (SMTP sobre SSL/TLS). El puerto 22 es SSH y el puerto 110 es POP3. Para el examen LPIC-1, el puerto 25 es el mas importante como puerto estandar de SMTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-004">
<div class="flashcard-front">

**P:** Un usuario quiere redirigir su correo a `otro@gmail.com` pero tambien mantener una copia local. Cual es el contenido correcto del archivo `~/.forward`?

</div>
<div class="flashcard-back">

**R:** b) `\miusuario, otro@gmail.com`. La barra invertida `\` antes del nombre de usuario local evita la expansion recursiva del alias y asegura que se mantenga una copia local del correo. Sin la barra invertida (opcion D), podria producirse un bucle de expansion. La opcion A solo reenvia sin guardar copia local. La opcion C usa una sintaxis incorrecta. El archivo `~/.forward` permite redireccion personal sin necesidad de permisos de root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-005">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra la cola de correo pendiente de envio?

</div>
<div class="flashcard-back">

**R:** c) `mailq`. El comando `mailq` es la forma estandar de ver la cola de correo pendiente de envio, mostrando los mensajes con su ID, tamano, fecha y remitente/destinatario. Es equivalente a `sendmail -bp` y `postqueue -p` (en Postfix). La opcion B (`sendmail -q`) procesa la cola (intenta enviar los mensajes pendientes), no la muestra. Las opciones A y D no son comandos validos con esa sintaxis.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-006">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre los formatos de buzon `mbox` y `Maildir`?

</div>
<div class="flashcard-back">

**R:** b) `mbox` almacena todos los mensajes en un unico archivo y `Maildir` usa un directorio con un archivo por mensaje. El formato `mbox` almacena todos los mensajes de un usuario en un unico archivo (tipicamente `/var/spool/mail/usuario` o `/var/mail/usuario`), lo cual es simple pero presenta problemas de bloqueo con acceso concurrente. `Maildir` usa un directorio con tres subdirectorios (`new/`, `cur/`, `tmp/`) y almacena cada mensaje como un archivo individual, ofreciendo mejor rendimiento, sin problemas de bloqueo y mayor robustez ante fallos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-007">
<div class="flashcard-front">

**P:** En el archivo `/etc/aliases`, que hace la siguiente linea: `alertas: |/usr/local/bin/procesar-alerta.sh`?

</div>
<div class="flashcard-back">

**R:** b) Envia el correo destinado a `alertas` como entrada (stdin) al script indicado. El caracter pipe `|` en `/etc/aliases` indica que el correo destinado al alias se debe enviar como entrada estandar (stdin) al comando o script especificado. Esto permite procesar automaticamente los correos con scripts personalizados. Despues de agregar esta linea, se debe ejecutar `newaliases` para que el cambio tenga efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-008">
<div class="flashcard-front">

**P:** Cual de los siguientes es el archivo de configuracion principal de Postfix?

</div>
<div class="flashcard-back">

**R:** c) `/etc/postfix/main.cf`. El archivo de configuracion principal de Postfix es `/etc/postfix/main.cf`, donde se definen parametros como `myhostname`, `mydomain`, `myorigin`, `inet_interfaces`, `mydestination` y `mynetworks`. El archivo `/etc/postfix/master.cf` define los procesos de Postfix pero no la configuracion principal. `/etc/sendmail.cf` es la configuracion de sendmail (MTA clasico) y `/etc/mail/postfix.conf` no existe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-009">
<div class="flashcard-front">

**P:** Que comando es equivalente a ejecutar `newaliases` para reconstruir la base de datos de aliases?

</div>
<div class="flashcard-back">

**R:** c) `sendmail -bi`. La opcion `-bi` de sendmail reconstruye la base de datos de aliases, siendo equivalente al comando `newaliases`. La opcion `-q` procesa la cola de correo. La opcion `-bp` muestra la cola de correo (equivalente a `mailq`). La opcion `-t` lee los destinatarios del encabezado del mensaje. Todos los MTAs proporcionan un comando `sendmail` compatible con estas opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-010">
<div class="flashcard-front">

**P:** Como se envia un correo desde la linea de comandos con el asunto "Reporte" y el contenido del archivo `/tmp/reporte.txt` al usuario `admin@ejemplo.com`?

</div>
<div class="flashcard-back">

**R:** c) `mail -s "Reporte" admin@ejemplo.com < /tmp/reporte.txt`. El comando `mail` con la opcion `-s` establece el asunto del correo. La redireccion de entrada `<` envia el contenido del archivo como cuerpo del mensaje. La opcion A usa `>` que redirige la salida (no la entrada). La opcion B usa una sintaxis incorrecta de sendmail (que no tiene opcion `-s`). La opcion D usa opciones largas que no existen en el comando `mail`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-011">
<div class="flashcard-front">

**P:** En el modo interactivo del comando `mail`, que tecla o comando permite salir del buzon SIN guardar los cambios realizados?

</div>
<div class="flashcard-back">

**R:** b) `x`. En el modo interactivo de `mail`/`mailx`, el comando `x` sale del buzon sin guardar ningun cambio: los mensajes leidos no se mueven a `~/mbox` y los mensajes borrados no se eliminan. En cambio, `q` (quit) sale guardando los cambios: los mensajes leidos se mueven a `~/mbox` y los marcados para borrar se eliminan. `d` marca un mensaje para borrar pero no sale del programa. `exit` no es un comando valido en el modo interactivo de `mail`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-012">
<div class="flashcard-front">

**P:** Cual de los siguientes es el MTA predeterminado en distribuciones Debian?

</div>
<div class="flashcard-back">

**R:** c) Exim. Exim es el MTA (Mail Transfer Agent) predeterminado en las distribuciones Debian. Postfix es el MTA moderno mas popular por su seguridad y facilidad de configuracion. sendmail es el MTA historico mas antiguo, con una configuracion compleja. Qmail es otro MTA pero menos usado en distribuciones principales. Todos los MTAs proporcionan un comando `sendmail` compatible para mantener la compatibilidad con scripts y aplicaciones existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-013">
<div class="flashcard-front">

**P:** Que parametro de Postfix en `/etc/postfix/main.cf` define los destinos de correo que se consideran locales?

</div>
<div class="flashcard-back">

**R:** c) `mydestination`. El parametro `mydestination` en `/etc/postfix/main.cf` define los dominios para los cuales Postfix acepta correo como destino final (entrega local). Por ejemplo: `mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain`. `myhostname` define el nombre del host. `myorigin` define el dominio que aparece en el correo saliente. `mynetworks` define las redes confiables desde las cuales se permite el envio de correo sin autenticacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-014">
<div class="flashcard-front">

**P:** En que ubicacion se almacena el buzon de correo local de un usuario en formato mbox en un sistema Debian?

</div>
<div class="flashcard-back">

**R:** b) `/var/mail/usuario`. En formato mbox, el buzon de correo local se almacena en `/var/mail/usuario` (Debian/Ubuntu) o `/var/spool/mail/usuario` (Red Hat/CentOS). En muchos sistemas, `/var/mail/` es un enlace simbolico a `/var/spool/mail/`. La variable de entorno `MAIL` del usuario apunta a esta ubicacion. El formato mbox almacena todos los mensajes en un unico archivo. El formato alternativo Maildir usa un directorio (`~/Maildir/`) con subdirectorios `new/`, `cur/` y `tmp/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-015">
<div class="flashcard-front">

**P:** Que estructura de subdirectorios tiene el formato Maildir?

</div>
<div class="flashcard-back">

**R:** b) `new/`, `cur/`, `tmp/`. El formato Maildir utiliza un directorio por usuario (tipicamente `~/Maildir/`) con tres subdirectorios: `new/` (mensajes nuevos no leidos), `cur/` (mensajes leidos) y `tmp/` (mensajes en proceso de entrega). Cada mensaje se almacena como un archivo individual, lo que ofrece ventajas sobre mbox: no hay problemas de bloqueo con acceso concurrente, mejor rendimiento y mayor robustez ante fallos del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-016">
<div class="flashcard-front">

**P:** Que efecto tiene la linea `postmaster: root` en el archivo `/etc/aliases`?

</div>
<div class="flashcard-back">

**R:** b) Redirige el correo destinado a `postmaster` al usuario `root`. En `/etc/aliases`, la linea `postmaster: root` define un alias que redirige todo el correo destinado a `postmaster` al usuario `root`. El alias `postmaster` es un alias obligatorio segun los estandares de correo electronico (RFC 5321), ya que es la direccion de contacto para problemas de correo del dominio. Es habitual tambien redirigir `root` a un usuario real con otra linea como `root: admin`. Despues de editar `/etc/aliases` se debe ejecutar `newaliases`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-017">
<div class="flashcard-front">

**P:** Que opcion de `sendmail` es equivalente al comando `mailq`?

</div>
<div class="flashcard-back">

**R:** b) `sendmail -bp`. La opcion `sendmail -bp` muestra la cola de correo pendiente de envio, de forma equivalente al comando `mailq`. La opcion `-q` procesa la cola (intenta enviar los mensajes pendientes). La opcion `-bi` reconstruye la base de datos de aliases (equivalente a `newaliases`). La opcion `-t` lee los destinatarios del encabezado del mensaje. Todos los MTAs (Postfix, Exim, sendmail) proporcionan un comando `sendmail` compatible con estas opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `postqueue -f` en Postfix?

</div>
<div class="flashcard-back">

**R:** b) Fuerza el reenvio de todos los mensajes en la cola. `postqueue -f` en Postfix fuerza un intento inmediato de envio de todos los mensajes que estan en la cola de correo. Esto es equivalente a `sendmail -q`. `postqueue -p` muestra la cola de correo (equivalente a `mailq`). Para eliminar todos los mensajes de la cola se usa `postsuper -d ALL`. Es util cuando se ha resuelto un problema de conectividad y se quiere reintentar el envio de los mensajes pendientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-019">
<div class="flashcard-front">

**P:** En el archivo `~/.forward`, que indica la barra invertida antes del nombre de usuario en `\sandra`?

</div>
<div class="flashcard-back">

**R:** b) Que se mantiene una copia local del correo evitando la expansion recursiva del alias. La barra invertida `\` antes del nombre de usuario en `~/.forward` evita la expansion recursiva del alias y asegura la entrega local del correo. Por ejemplo, `\sandra, otro@gmail.com` redirige el correo a `otro@gmail.com` y tambien mantiene una copia en el buzon local de sandra. Sin la barra invertida, podria producirse un bucle de expansion si el usuario tiene un alias definido. Sin `\sandra` en la linea, el correo solo se reenviaria sin guardar copia local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-020">
<div class="flashcard-front">

**P:** Que significan las siglas MDA en el contexto del correo electronico?

</div>
<div class="flashcard-back">

**R:** b) Mail Delivery Agent. MDA (Mail Delivery Agent) es el componente del sistema de correo encargado de la entrega final del correo al buzon local del usuario. Ejemplos de MDAs son procmail, maildrop y dovecot-lda. El MDA recibe el correo del MTA (Mail Transfer Agent) y lo deposita en el buzon del usuario (ya sea en formato mbox o Maildir). El flujo completo es: MUA (cliente) -> MTA (transferencia) -> MDA (entrega al buzon) -> MUA (lectura).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando que se debe ejecutar despues de editar `/etc/aliases` para que los cambios tengan efecto. <input type="text" class="fill-blank" data-answer="newaliases" data-alt="sendmail -bi" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** newaliases. El comando `newaliases` reconstruye la base de datos de aliases (`/etc/aliases.db`) a partir del archivo de texto `/etc/aliases`. Sin ejecutar este comando, los cambios realizados en `/etc/aliases` no tendran efecto. Es equivalente a `sendmail -bi`. Este paso es obligatorio cada vez que se modifica el archivo de aliases, independientemente del MTA utilizado (Postfix, Exim o sendmail).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para ver la cola de correo pendiente de envio. <input type="text" class="fill-blank" data-answer="mailq" data-alt="sendmail -bp,postqueue -p" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mailq. El comando `mailq` muestra la cola de correo pendiente de envio, listando los mensajes con su ID, tamano, fecha de llegada, remitente y destinatario. Es equivalente a `sendmail -bp` y a `postqueue -p` en Postfix. La cola contiene mensajes que no pudieron ser entregados (por ejemplo, porque el servidor remoto no esta disponible). Para forzar el reenvio de la cola: `sendmail -q` o `postqueue -f`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para enviar un correo con asunto "Alerta" al usuario `admin@empresa.com` desde la linea de comandos. <input type="text" class="fill-blank" data-answer="mail -s &quot;Alerta&quot; admin@empresa.com" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mail -s "Alerta" admin@empresa.com. El comando `mail -s "Alerta" admin@empresa.com` abre un prompt interactivo donde se puede escribir el cuerpo del mensaje (se finaliza con un punto solo en una linea o Ctrl+D). Tambien se puede enviar de forma no interactiva usando pipe: `echo "Mensaje" | mail -s "Alerta" admin@empresa.com` o redireccion: `mail -s "Alerta" admin@empresa.com < archivo.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para leer el buzon de correo del usuario actual en modo interactivo. <input type="text" class="fill-blank" data-answer="mail" data-alt="mailx" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mail. El comando `mail` sin argumentos abre el buzon del usuario actual en modo interactivo. Dentro del modo interactivo se pueden usar comandos como: `h` (listar encabezados), un numero para leer un mensaje, `d` (borrar), `r` (responder), `s archivo` (guardar), `q` (salir guardando cambios) y `x` (salir sin guardar). El buzon se encuentra en `/var/mail/usuario` o `/var/spool/mail/usuario`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para forzar el procesamiento de la cola de correo pendiente usando sendmail. <input type="text" class="fill-blank" data-answer="sendmail -q" data-alt="postqueue -f" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** sendmail -q. El comando `sendmail -q` fuerza el procesamiento de la cola de correo, intentando enviar todos los mensajes pendientes. En Postfix, el equivalente es `postqueue -f`. Es util despues de resolver un problema de red o de DNS que impedia la entrega de correo. Para ver la cola antes de procesarla: `mailq` o `sendmail -bp`. Para eliminar toda la cola en Postfix: `postsuper -d ALL`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `h`?

</div>
<div class="flashcard-back">

**R:** Listar encabezados de mensajes (headers)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `p`?

</div>
<div class="flashcard-back">

**R:** Imprimir (mostrar) el mensaje actual (print)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `n`?

</div>
<div class="flashcard-back">

**R:** Mostrar el siguiente mensaje (next)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `d`?

</div>
<div class="flashcard-back">

**R:** Borrar el mensaje actual (delete)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `r`?

</div>
<div class="flashcard-back">

**R:** Responder al mensaje actual (reply)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-031">
<div class="flashcard-front">

**P:** Un administrador necesita enviar automaticamente el contenido de `/var/log/resumen.log` por correo al equipo de soporte cada noche. Escribe el comando completo para enviar ese archivo con asunto "Log nocturno" a `soporte@empresa.com`. <input type="text" class="fill-blank" data-answer="mail -s &quot;Log nocturno&quot; soporte@empresa.com < /var/log/resumen.log" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `mail -s "Log nocturno" soporte@empresa.com < /var/log/resumen.log`. El comando `mail` (tambien disponible como `mailx`) es la utilidad estandar de linea de comandos para enviar y leer correo. La opcion `-s` establece el asunto y la redireccion `<` envia el contenido del archivo como cuerpo del mensaje. Tambien se puede usar con pipe: `cat /var/log/resumen.log | mail -s "Log nocturno" soporte@empresa.com`. Para enviar a multiples destinatarios se separan con comas. En scripts de cron es muy habitual usar `mail` para notificaciones automaticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-032">
<div class="flashcard-front">

**P:** Un administrador anade las siguientes lineas a `/etc/aliases`: `webmaster: ana, carlos` y `noreply: /dev/null`. Ejecuta `newaliases` y reinicia Postfix. Que ocurre cuando llega un correo a `webmaster` y que ocurre cuando llega uno a `noreply`?

</div>
<div class="flashcard-back">

**R:** El correo dirigido a `webmaster` se entrega a los buzones de los usuarios `ana` y `carlos` (ambos reciben una copia). El correo dirigido a `noreply` se descarta silenciosamente al redirigirse a `/dev/null`. El archivo `/etc/aliases` permite definir aliases de correo con varias acciones: redirigir a uno o varios usuarios (separados por comas), redirigir a un archivo, descartar a `/dev/null`, o enviar a un comando con pipe (`|/ruta/script.sh`). Es imprescindible ejecutar `newaliases` (o `sendmail -bi`) despues de cada modificacion para reconstruir la base de datos `/etc/aliases.db`. Sin este paso, los cambios no tienen efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-033">
<div class="flashcard-front">

**P:** La usuaria `laura` quiere que su correo corporativo se reenvie a su cuenta personal `laura@gmail.com` y que ademas se mantenga una copia en su buzon local del servidor. No tiene acceso root. Que archivo debe crear y cual debe ser su contenido exacto?

</div>
<div class="flashcard-back">

**R:** Debe crear el archivo `~/.forward` en su directorio home con el contenido: `\laura, laura@gmail.com`. El archivo `~/.forward` permite la redireccion personal de correo sin necesidad de permisos de root. La barra invertida `\laura` evita la expansion recursiva del alias y garantiza la entrega local (copia en el buzon). Sin la barra invertida, el correo solo se reenviaria a Gmail sin guardar copia local. Si `laura` solo quisiera reenviar sin copia local, bastaria con escribir unicamente `laura@gmail.com` en el archivo. Los permisos del archivo deben ser 644 o mas restrictivos, y el directorio home no debe tener permisos de escritura para otros usuarios, o el MTA ignorara el archivo por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-034">
<div class="flashcard-front">

**P:** Un administrador ejecuta `mailq` y ve 47 mensajes pendientes en la cola. Tras resolver un problema de DNS, quiere forzar el reenvio inmediato de todos esos mensajes. Escribe el comando usando la interfaz compatible `sendmail`. <input type="text" class="fill-blank" data-answer="sendmail -q" data-alt="postqueue -f" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `sendmail -q`. Primero, `mailq` (equivalente a `sendmail -bp` o `postqueue -p`) muestra la cola de correo pendiente con informacion de cada mensaje: ID, tamano, fecha, remitente y destinatario. Para forzar el procesamiento inmediato de la cola se usa `sendmail -q` (o `postqueue -f` en Postfix). Diferencia clave para el examen: `mailq` / `sendmail -bp` = **ver** la cola (solo lectura); `sendmail -q` / `postqueue -f` = **procesar** la cola (intentar enviar). No confundir `-bp` (mostrar) con `-bi` (reconstruir aliases) ni con `-q` (procesar cola).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-035">
<div class="flashcard-front">

**P:** Un script de backup usa el comando `/usr/sbin/sendmail -t < /tmp/informe.eml` para enviar notificaciones. El servidor tiene Postfix instalado, no sendmail clasico. Funcionara el script? Por que?

</div>
<div class="flashcard-back">

**R:** Si, funcionara correctamente. Todos los MTAs modernos (Postfix, Exim, Qmail) proporcionan un binario compatible en `/usr/sbin/sendmail` (o `/usr/lib/sendmail`) que acepta las mismas opciones del sendmail clasico. Esto garantiza la compatibilidad con scripts y aplicaciones existentes. La opcion `-t` indica que los destinatarios se leen de las cabeceras del mensaje (To:, Cc:, Bcc:) en lugar de pasarlos como argumentos. Opciones clave de la interfaz compatible: `-bi` (reconstruir aliases = `newaliases`), `-bp` (mostrar cola = `mailq`), `-q` (procesar cola), `-t` (leer destinatarios de cabeceras). El comando `sendmail` suele ser un enlace simbolico al binario real del MTA instalado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-036">
<div class="flashcard-front">

**P:** Relaciona cada componente del sistema de correo con su funcion: 1) MUA, 2) MTA, 3) MDA. Funciones: a) Entrega el correo al buzon local del usuario, b) Transfiere correo entre servidores via SMTP, c) Interfaz del usuario para leer y escribir correo.

</div>
<div class="flashcard-back">

**R:** 1-c) **MUA** (Mail User Agent) = Interfaz del usuario para leer y escribir correo. Ejemplos: Thunderbird, mutt, Evolution. 2-b) **MTA** (Mail Transfer Agent) = Transfiere correo entre servidores via SMTP por el puerto 25. Ejemplos: Postfix, Exim, sendmail. 3-a) **MDA** (Mail Delivery Agent) = Entrega el correo al buzon local del usuario. Ejemplos: procmail, maildrop, dovecot-lda. Flujo completo: MUA envia -> MTA transfiere (SMTP, puerto 25) -> MDA entrega al buzon (mbox o Maildir). Punto critico para el examen: Exim es el MTA predeterminado en Debian; todos los MTAs proporcionan un binario `/usr/sbin/sendmail` compatible; `newaliases` y `mailq` deben funcionar con cualquier MTA instalado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-037">
<div class="flashcard-front">

**P:** Un candidato al examen LPIC-1 confunde `sendmail -q` con `sendmail -bp` y responde que `sendmail -bp` fuerza el envio de la cola. Otro candidato olvida ejecutar un comando despues de editar `/etc/aliases`. Identifica ambos errores y las respuestas correctas.

</div>
<div class="flashcard-back">

**R:** **Error 1:** `sendmail -bp` NO fuerza el envio; solo **muestra** la cola de correo (equivalente a `mailq`). El comando que **procesa** la cola es `sendmail -q` (equivalente a `postqueue -f`). **Error 2:** Despues de editar `/etc/aliases` se debe ejecutar `newaliases` (o `sendmail -bi`) para reconstruir la base de datos. Sin este paso, los cambios no tienen efecto. Otras trampas frecuentes del examen: confundir `q` (salir guardando cambios en `mail`) con `x` (salir sin guardar); olvidar que `~/.forward` no necesita permisos de root pero `/etc/aliases` si; creer que reiniciar el MTA aplica los cambios de `/etc/aliases` (no es asi, se necesita `newaliases`); confundir el puerto 25 (SMTP entre servidores) con el 587 (SMTP submission con autenticacion).

</div>
</div>

---

