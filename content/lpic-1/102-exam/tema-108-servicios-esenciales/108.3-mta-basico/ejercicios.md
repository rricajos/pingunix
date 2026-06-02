---
title: "108.3 Fundamentos de MTA - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-108
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "108"
subtema: "108.3"
---

# 108.3 Fundamentos de MTA - Ejercicios

### Pregunta 1

Cual de los siguientes componentes del sistema de correo se encarga de transferir mensajes entre servidores mediante el protocolo SMTP?

a) MUA (Mail User Agent)
b) MTA (Mail Transfer Agent)
c) MDA (Mail Delivery Agent)
d) MSA (Mail Submission Agent)

<details><summary>Respuesta</summary>

**b) MTA (Mail Transfer Agent)**

El MTA (Mail Transfer Agent) es el componente responsable de transferir correo entre servidores usando el protocolo SMTP. Ejemplos de MTAs son sendmail, postfix y exim. El MUA (Mail User Agent) es el cliente de correo que usa el usuario (Thunderbird, mutt). El MDA (Mail Delivery Agent) entrega el correo al buzon local del usuario (procmail, maildrop). El MSA no es un componente estandar del examen LPIC-1.

</details>

---

### Pregunta 2

Despues de editar el archivo `/etc/aliases` para agregar un nuevo alias de correo, que comando se debe ejecutar para que los cambios tengan efecto?

a) `postfix reload`
b) `sendmail -q`
c) `newaliases`
d) `systemctl restart postfix`

<details><summary>Respuesta</summary>

**c) `newaliases`**

El comando `newaliases` reconstruye la base de datos de aliases (`/etc/aliases.db`) a partir del archivo de texto `/etc/aliases`. Sin ejecutar este comando, los cambios en `/etc/aliases` no tendran efecto. Una alternativa equivalente es `sendmail -bi`. Reiniciar postfix o ejecutar `sendmail -q` (que procesa la cola) no reconstruyen la base de datos de aliases.

</details>

---

### Pregunta 3

Cual es el puerto estandar utilizado por SMTP para la transferencia de correo entre servidores?

a) Puerto 22
b) Puerto 25
c) Puerto 110
d) Puerto 587

<details><summary>Respuesta</summary>

**b) Puerto 25**

El puerto 25 es el puerto estandar de SMTP para la transferencia de correo entre servidores. El puerto 587 se usa para SMTP submission (envio de correo con autenticacion desde un cliente). El puerto 465 se usa para SMTPS (SMTP sobre SSL/TLS). El puerto 22 es SSH y el puerto 110 es POP3. Para el examen LPIC-1, el puerto 25 es el mas importante como puerto estandar de SMTP.

</details>

---

### Pregunta 4

Un usuario quiere redirigir su correo a `otro@gmail.com` pero tambien mantener una copia local. Cual es el contenido correcto del archivo `~/.forward`?

a) `otro@gmail.com`
b) `\miusuario, otro@gmail.com`
c) `forward: otro@gmail.com, local`
d) `miusuario, otro@gmail.com`

<details><summary>Respuesta</summary>

**b) `\miusuario, otro@gmail.com`**

La barra invertida `\` antes del nombre de usuario local evita la expansion recursiva del alias y asegura que se mantenga una copia local del correo. Sin la barra invertida (opcion D), podria producirse un bucle de expansion. La opcion A solo reenvia sin guardar copia local. La opcion C usa una sintaxis incorrecta. El archivo `~/.forward` permite redireccion personal sin necesidad de permisos de root.

</details>

---

### Pregunta 5

Cual de los siguientes comandos muestra la cola de correo pendiente de envio?

a) `postfix status`
b) `sendmail -q`
c) `mailq`
d) `mail --queue`

<details><summary>Respuesta</summary>

**c) `mailq`**

El comando `mailq` es la forma estandar de ver la cola de correo pendiente de envio, mostrando los mensajes con su ID, tamano, fecha y remitente/destinatario. Es equivalente a `sendmail -bp` y `postqueue -p` (en Postfix). La opcion B (`sendmail -q`) procesa la cola (intenta enviar los mensajes pendientes), no la muestra. Las opciones A y D no son comandos validos con esa sintaxis.

</details>

---

### Pregunta 6

Cual es la diferencia principal entre los formatos de buzon `mbox` y `Maildir`?

a) `mbox` usa un directorio por usuario y `Maildir` un archivo por usuario
b) `mbox` almacena todos los mensajes en un unico archivo y `Maildir` usa un directorio con un archivo por mensaje
c) `mbox` es mas moderno y robusto que `Maildir`
d) No hay diferencia significativa, solo varia la ubicacion por defecto

<details><summary>Respuesta</summary>

**b) `mbox` almacena todos los mensajes en un unico archivo y `Maildir` usa un directorio con un archivo por mensaje**

El formato `mbox` almacena todos los mensajes de un usuario en un unico archivo (tipicamente `/var/spool/mail/usuario` o `/var/mail/usuario`), lo cual es simple pero presenta problemas de bloqueo con acceso concurrente. `Maildir` usa un directorio con tres subdirectorios (`new/`, `cur/`, `tmp/`) y almacena cada mensaje como un archivo individual, ofreciendo mejor rendimiento, sin problemas de bloqueo y mayor robustez ante fallos.

</details>

---

### Pregunta 7

En el archivo `/etc/aliases`, que hace la siguiente linea: `alertas: |/usr/local/bin/procesar-alerta.sh`?

a) Crea un alias que redirige el correo a un archivo de log
b) Envia el correo destinado a `alertas` como entrada (stdin) al script indicado
c) Ejecuta el script cada vez que el servidor de correo se inicia
d) Crea un filtro que bloquea el correo destinado a `alertas`

<details><summary>Respuesta</summary>

**b) Envia el correo destinado a `alertas` como entrada (stdin) al script indicado**

El caracter pipe `|` en `/etc/aliases` indica que el correo destinado al alias se debe enviar como entrada estandar (stdin) al comando o script especificado. Esto permite procesar automaticamente los correos con scripts personalizados. Despues de agregar esta linea, se debe ejecutar `newaliases` para que el cambio tenga efecto.

</details>

---

### Pregunta 8

Cual de los siguientes es el archivo de configuracion principal de Postfix?

a) `/etc/sendmail.cf`
b) `/etc/postfix/master.cf`
c) `/etc/postfix/main.cf`
d) `/etc/mail/postfix.conf`

<details><summary>Respuesta</summary>

**c) `/etc/postfix/main.cf`**

El archivo de configuracion principal de Postfix es `/etc/postfix/main.cf`, donde se definen parametros como `myhostname`, `mydomain`, `myorigin`, `inet_interfaces`, `mydestination` y `mynetworks`. El archivo `/etc/postfix/master.cf` define los procesos de Postfix pero no la configuracion principal. `/etc/sendmail.cf` es la configuracion de sendmail (MTA clasico) y `/etc/mail/postfix.conf` no existe.

</details>

---

### Pregunta 9

Que comando es equivalente a ejecutar `newaliases` para reconstruir la base de datos de aliases?

a) `sendmail -q`
b) `sendmail -bp`
c) `sendmail -bi`
d) `sendmail -t`

<details><summary>Respuesta</summary>

**c) `sendmail -bi`**

La opcion `-bi` de sendmail reconstruye la base de datos de aliases, siendo equivalente al comando `newaliases`. La opcion `-q` procesa la cola de correo. La opcion `-bp` muestra la cola de correo (equivalente a `mailq`). La opcion `-t` lee los destinatarios del encabezado del mensaje. Todos los MTAs proporcionan un comando `sendmail` compatible con estas opciones.

</details>

---

### Pregunta 10

Como se envia un correo desde la linea de comandos con el asunto "Reporte" y el contenido del archivo `/tmp/reporte.txt` al usuario `admin@ejemplo.com`?

a) `mail -s "Reporte" admin@ejemplo.com > /tmp/reporte.txt`
b) `sendmail -s "Reporte" admin@ejemplo.com /tmp/reporte.txt`
c) `mail -s "Reporte" admin@ejemplo.com < /tmp/reporte.txt`
d) `mail --subject "Reporte" --file /tmp/reporte.txt admin@ejemplo.com`

<details><summary>Respuesta</summary>

**c) `mail -s "Reporte" admin@ejemplo.com < /tmp/reporte.txt`**

El comando `mail` con la opcion `-s` establece el asunto del correo. La redireccion de entrada `<` envia el contenido del archivo como cuerpo del mensaje. La opcion A usa `>` que redirige la salida (no la entrada). La opcion B usa una sintaxis incorrecta de sendmail (que no tiene opcion `-s`). La opcion D usa opciones largas que no existen en el comando `mail`.

</details>

---

### Pregunta 11

En el modo interactivo del comando `mail`, que tecla o comando permite salir del buzon SIN guardar los cambios realizados?

a) `q`
b) `x`
c) `exit`
d) `d`

<details><summary>Respuesta</summary>

**b) `x`**

En el modo interactivo de `mail`/`mailx`, el comando `x` sale del buzon sin guardar ningun cambio: los mensajes leidos no se mueven a `~/mbox` y los mensajes borrados no se eliminan. En cambio, `q` (quit) sale guardando los cambios: los mensajes leidos se mueven a `~/mbox` y los marcados para borrar se eliminan. `d` marca un mensaje para borrar pero no sale del programa. `exit` no es un comando valido en el modo interactivo de `mail`.

</details>

---

### Pregunta 12

Cual de los siguientes es el MTA predeterminado en distribuciones Debian?

a) Postfix
b) sendmail
c) Exim
d) Qmail

<details><summary>Respuesta</summary>

**c) Exim**

Exim es el MTA (Mail Transfer Agent) predeterminado en las distribuciones Debian. Postfix es el MTA moderno mas popular por su seguridad y facilidad de configuracion. sendmail es el MTA historico mas antiguo, con una configuracion compleja. Qmail es otro MTA pero menos usado en distribuciones principales. Todos los MTAs proporcionan un comando `sendmail` compatible para mantener la compatibilidad con scripts y aplicaciones existentes.

</details>

---

### Pregunta 13

Que parametro de Postfix en `/etc/postfix/main.cf` define los destinos de correo que se consideran locales?

a) `myhostname`
b) `mynetworks`
c) `mydestination`
d) `myorigin`

<details><summary>Respuesta</summary>

**c) `mydestination`**

El parametro `mydestination` en `/etc/postfix/main.cf` define los dominios para los cuales Postfix acepta correo como destino final (entrega local). Por ejemplo: `mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain`. `myhostname` define el nombre del host. `myorigin` define el dominio que aparece en el correo saliente. `mynetworks` define las redes confiables desde las cuales se permite el envio de correo sin autenticacion.

</details>

---

### Pregunta 14

En que ubicacion se almacena el buzon de correo local de un usuario en formato mbox en un sistema Debian?

a) `/home/usuario/Maildir/`
b) `/var/mail/usuario`
c) `/etc/mail/usuario`
d) `/var/log/mail/usuario`

<details><summary>Respuesta</summary>

**b) `/var/mail/usuario`**

En formato mbox, el buzon de correo local se almacena en `/var/mail/usuario` (Debian/Ubuntu) o `/var/spool/mail/usuario` (Red Hat/CentOS). En muchos sistemas, `/var/mail/` es un enlace simbolico a `/var/spool/mail/`. La variable de entorno `MAIL` del usuario apunta a esta ubicacion. El formato mbox almacena todos los mensajes en un unico archivo. El formato alternativo Maildir usa un directorio (`~/Maildir/`) con subdirectorios `new/`, `cur/` y `tmp/`.

</details>

---

### Pregunta 15

Que estructura de subdirectorios tiene el formato Maildir?

a) `inbox/`, `sent/`, `trash/`
b) `new/`, `cur/`, `tmp/`
c) `read/`, `unread/`, `draft/`
d) `in/`, `out/`, `pending/`

<details><summary>Respuesta</summary>

**b) `new/`, `cur/`, `tmp/`**

El formato Maildir utiliza un directorio por usuario (tipicamente `~/Maildir/`) con tres subdirectorios: `new/` (mensajes nuevos no leidos), `cur/` (mensajes leidos) y `tmp/` (mensajes en proceso de entrega). Cada mensaje se almacena como un archivo individual, lo que ofrece ventajas sobre mbox: no hay problemas de bloqueo con acceso concurrente, mejor rendimiento y mayor robustez ante fallos del sistema.

</details>

---

### Pregunta 16

Que efecto tiene la linea `postmaster: root` en el archivo `/etc/aliases`?

a) Crea una cuenta de usuario llamada postmaster
b) Redirige el correo destinado a `postmaster` al usuario `root`
c) Establece a root como administrador del servidor de correo
d) Bloquea el correo destinado a postmaster

<details><summary>Respuesta</summary>

**b) Redirige el correo destinado a `postmaster` al usuario `root`**

En `/etc/aliases`, la linea `postmaster: root` define un alias que redirige todo el correo destinado a `postmaster` al usuario `root`. El alias `postmaster` es un alias obligatorio segun los estandares de correo electronico (RFC 5321), ya que es la direccion de contacto para problemas de correo del dominio. Es habitual tambien redirigir `root` a un usuario real con otra linea como `root: admin`. Despues de editar `/etc/aliases` se debe ejecutar `newaliases`.

</details>

---

### Pregunta 17

Que opcion de `sendmail` es equivalente al comando `mailq`?

a) `sendmail -q`
b) `sendmail -bp`
c) `sendmail -bi`
d) `sendmail -t`

<details><summary>Respuesta</summary>

**b) `sendmail -bp`**

La opcion `sendmail -bp` muestra la cola de correo pendiente de envio, de forma equivalente al comando `mailq`. La opcion `-q` procesa la cola (intenta enviar los mensajes pendientes). La opcion `-bi` reconstruye la base de datos de aliases (equivalente a `newaliases`). La opcion `-t` lee los destinatarios del encabezado del mensaje. Todos los MTAs (Postfix, Exim, sendmail) proporcionan un comando `sendmail` compatible con estas opciones.

</details>

---

### Pregunta 18

Que hace el comando `postqueue -f` en Postfix?

a) Muestra la cola de correo
b) Fuerza el reenvio de todos los mensajes en la cola
c) Filtra la cola eliminando mensajes antiguos
d) Formatea la cola en formato legible

<details><summary>Respuesta</summary>

**b) Fuerza el reenvio de todos los mensajes en la cola**

`postqueue -f` en Postfix fuerza un intento inmediato de envio de todos los mensajes que estan en la cola de correo. Esto es equivalente a `sendmail -q`. `postqueue -p` muestra la cola de correo (equivalente a `mailq`). Para eliminar todos los mensajes de la cola se usa `postsuper -d ALL`. Es util cuando se ha resuelto un problema de conectividad y se quiere reintentar el envio de los mensajes pendientes.

</details>

---

### Pregunta 19

En el archivo `~/.forward`, que indica la barra invertida antes del nombre de usuario en `\sandra`?

a) Que el correo se envia cifrado
b) Que se mantiene una copia local del correo evitando la expansion recursiva del alias
c) Que el usuario esta bloqueado para recibir correo
d) Que el correo se guarda comprimido

<details><summary>Respuesta</summary>

**b) Que se mantiene una copia local del correo evitando la expansion recursiva del alias**

La barra invertida `\` antes del nombre de usuario en `~/.forward` evita la expansion recursiva del alias y asegura la entrega local del correo. Por ejemplo, `\sandra, otro@gmail.com` redirige el correo a `otro@gmail.com` y tambien mantiene una copia en el buzon local de sandra. Sin la barra invertida, podria producirse un bucle de expansion si el usuario tiene un alias definido. Sin `\sandra` en la linea, el correo solo se reenviaria sin guardar copia local.

</details>

---

### Pregunta 20

Que significan las siglas MDA en el contexto del correo electronico?

a) Mail Domain Authority
b) Mail Delivery Agent
c) Mail Distribution Agent
d) Mail Daemon Application

<details><summary>Respuesta</summary>

**b) Mail Delivery Agent**

MDA (Mail Delivery Agent) es el componente del sistema de correo encargado de la entrega final del correo al buzon local del usuario. Ejemplos de MDAs son procmail, maildrop y dovecot-lda. El MDA recibe el correo del MTA (Mail Transfer Agent) y lo deposita en el buzon del usuario (ya sea en formato mbox o Maildir). El flujo completo es: MUA (cliente) -> MTA (transferencia) -> MDA (entrega al buzon) -> MUA (lectura).

</details>

---

### Pregunta 21

Escribe el comando que se debe ejecutar despues de editar `/etc/aliases` para que los cambios tengan efecto.

<input type="text" class="fill-blank" data-answer="newaliases" data-alt="sendmail -bi" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**newaliases**

El comando `newaliases` reconstruye la base de datos de aliases (`/etc/aliases.db`) a partir del archivo de texto `/etc/aliases`. Sin ejecutar este comando, los cambios realizados en `/etc/aliases` no tendran efecto. Es equivalente a `sendmail -bi`. Este paso es obligatorio cada vez que se modifica el archivo de aliases, independientemente del MTA utilizado (Postfix, Exim o sendmail).

</details>

---

### Pregunta 22

Escribe el comando para ver la cola de correo pendiente de envio.

<input type="text" class="fill-blank" data-answer="mailq" data-alt="sendmail -bp,postqueue -p" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mailq**

El comando `mailq` muestra la cola de correo pendiente de envio, listando los mensajes con su ID, tamano, fecha de llegada, remitente y destinatario. Es equivalente a `sendmail -bp` y a `postqueue -p` en Postfix. La cola contiene mensajes que no pudieron ser entregados (por ejemplo, porque el servidor remoto no esta disponible). Para forzar el reenvio de la cola: `sendmail -q` o `postqueue -f`.

</details>

---

### Pregunta 23

Escribe el comando para enviar un correo con asunto "Alerta" al usuario `admin@empresa.com` desde la linea de comandos.

<input type="text" class="fill-blank" data-answer="mail -s &quot;Alerta&quot; admin@empresa.com" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mail -s "Alerta" admin@empresa.com**

El comando `mail -s "Alerta" admin@empresa.com` abre un prompt interactivo donde se puede escribir el cuerpo del mensaje (se finaliza con un punto solo en una linea o Ctrl+D). Tambien se puede enviar de forma no interactiva usando pipe: `echo "Mensaje" | mail -s "Alerta" admin@empresa.com` o redireccion: `mail -s "Alerta" admin@empresa.com < archivo.txt`.

</details>

---

### Pregunta 24

Escribe el comando para leer el buzon de correo del usuario actual en modo interactivo.

<input type="text" class="fill-blank" data-answer="mail" data-alt="mailx" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mail**

El comando `mail` sin argumentos abre el buzon del usuario actual en modo interactivo. Dentro del modo interactivo se pueden usar comandos como: `h` (listar encabezados), un numero para leer un mensaje, `d` (borrar), `r` (responder), `s archivo` (guardar), `q` (salir guardando cambios) y `x` (salir sin guardar). El buzon se encuentra en `/var/mail/usuario` o `/var/spool/mail/usuario`.

</details>

---

### Pregunta 25

Escribe el comando para forzar el procesamiento de la cola de correo pendiente usando sendmail.

<input type="text" class="fill-blank" data-answer="sendmail -q" data-alt="postqueue -f" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sendmail -q**

El comando `sendmail -q` fuerza el procesamiento de la cola de correo, intentando enviar todos los mensajes pendientes. En Postfix, el equivalente es `postqueue -f`. Es util despues de resolver un problema de red o de DNS que impedia la entrega de correo. Para ver la cola antes de procesarla: `mailq` o `sendmail -bp`. Para eliminar toda la cola en Postfix: `postsuper -d ALL`.

</details>
