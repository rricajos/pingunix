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

**P:** Que es/son Comando `mail` / `mailx`?

</div>
<div class="flashcard-back">

**R:** Utilidad de linea de comandos para enviar y leer correo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son Aliases de correo: `/etc/aliases`?

</div>
<div class="flashcard-back">

**R:** Los aliases permiten redirigir correo destinado a un usuario a otro usuario, multiples usuarios o un comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Redireccion personal: `~/.forward`?

</div>
<div class="flashcard-back">

**R:** Cada usuario puede crear un archivo `~/.forward` en su directorio home para redirigir su correo sin necesidad de permisos de root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Comando `mailq`?

</div>
<div class="flashcard-back">

**R:** Muestra la cola de correo pendiente de envio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Comando `sendmail` (interfaz compatible)?

</div>
<div class="flashcard-back">

**R:** Todos los MTAs proporcionan un comando `sendmail` compatible en `/usr/sbin/sendmail` o `/usr/lib/sendmail`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **MUA** = cliente, **MTA** = transferencia, **MDA** = entrega local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.3">
</div>

<div class="flashcard" data-id="108.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

