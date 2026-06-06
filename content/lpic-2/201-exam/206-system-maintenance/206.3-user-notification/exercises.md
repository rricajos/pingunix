---
title: "206.3 - Notificacion a usuarios"
tags: [lpic-2, examen-201, tema-206, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "206"
subtema: "206.3"
---

# 206.3 - Ejercicios: Notificacion a usuarios

### Pregunta 1

¿Que archivo se muestra al usuario ANTES de iniciar sesion en una consola local?

a) `/etc/motd`
b) `/etc/issue`
c) `/etc/issue.net`
d) `/etc/login.msg`

<details><summary>Respuesta</summary>

**b) `/etc/issue`**

El archivo `/etc/issue` se muestra en la pantalla de login de la consola local antes de que el usuario introduzca sus credenciales. `/etc/motd` se muestra despues del login exitoso, y `/etc/issue.net` es para conexiones remotas.

</details>

### Pregunta 2

¿Que directiva se debe configurar en `/etc/ssh/sshd_config` para que SSH muestre un banner antes del login?

a) `MotdFile /etc/issue.net`
b) `LoginBanner /etc/issue.net`
c) `Banner /etc/issue.net`
d) `PreLoginMessage /etc/issue.net`

<details><summary>Respuesta</summary>

**c) `Banner /etc/issue.net`**

La directiva `Banner` en `/etc/ssh/sshd_config` especifica el archivo cuyo contenido se mostrara al usuario antes de la autenticacion SSH. Normalmente se apunta a `/etc/issue.net`, aunque puede ser cualquier archivo de texto.

</details>

### Pregunta 3

¿Que comando envia un mensaje a TODOS los usuarios conectados al sistema?

a) `write`
b) `msg`
c) `wall`
d) `broadcast`

<details><summary>Respuesta</summary>

**c) `wall`**

El comando `wall` (Write to ALL) envia un mensaje a todas las terminales de todos los usuarios que estan conectados al sistema. El comando `write` envia un mensaje a un usuario especifico.

</details>

### Pregunta 4

Un usuario ejecuta `mesg n` en su terminal. ¿Cual es el efecto?

a) No podra recibir mensajes de `wall` ni de `write`
b) No podra recibir mensajes de `write`, pero los mensajes de `wall` de root si llegaran
c) Todos los mensajes seran redirigidos a su correo
d) Solo bloqueara los mensajes del sistema

<details><summary>Respuesta</summary>

**b) No podra recibir mensajes de `write`, pero los mensajes de `wall` de root si llegaran**

`mesg n` deshabilita la escritura en la terminal del usuario por parte de otros usuarios, bloqueando los mensajes de `write`. Sin embargo, los mensajes enviados con `wall` por el usuario root generalmente no son bloqueados por esta configuracion.

</details>

### Pregunta 5

¿Que secuencia de escape en `/etc/issue` muestra el nombre del host?

a) `\h`
b) `\n`
c) `\s`
d) `\H`

<details><summary>Respuesta</summary>

**b) `\n`**

En el archivo `/etc/issue`, la secuencia `\n` muestra el nombre del host (hostname) de la maquina. Nota: esto es diferente de la secuencia `\n` en otros contextos (como bash), donde representa un salto de linea.

</details>

### Pregunta 6

¿Como se cancela un apagado programado con `shutdown` y se notifica a los usuarios?

a) `shutdown --abort "Mensaje"`
b) `shutdown -c "El reinicio ha sido cancelado"`
c) `shutdown --cancel`
d) `kill $(pidof shutdown)`

<details><summary>Respuesta</summary>

**b) `shutdown -c "El reinicio ha sido cancelado"`**

La opcion `-c` (cancel) de `shutdown` cancela un apagado o reinicio previamente programado. El mensaje opcional se envia a todos los usuarios conectados para informarles de la cancelacion.

</details>

### Pregunta 7

¿Cual es la diferencia principal entre `/etc/issue` y `/etc/issue.net`?

a) `/etc/issue` es para sistemas SysV, `/etc/issue.net` para systemd
b) `/etc/issue` se muestra en la consola local, `/etc/issue.net` en conexiones remotas
c) `/etc/issue.net` es la version cifrada de `/etc/issue`
d) No hay diferencia, son sinonimos

<details><summary>Respuesta</summary>

**b) `/etc/issue` se muestra en la consola local, `/etc/issue.net` en conexiones remotas**

`/etc/issue` es mostrado por `getty` (o `agetty`) en las consolas locales (tty). `/etc/issue.net` esta destinado a conexiones remotas como SSH o Telnet. Ademas, las secuencias de escape como `\n`, `\l`, etc., normalmente solo se interpretan en `/etc/issue`, no en `/etc/issue.net`.

</details>

### Pregunta 8

¿Para que se utiliza `systemd-ask-password`?

a) Para cambiar la contrasena de un usuario del sistema
b) Para solicitar contrasenas de forma segura durante el arranque, como claves de descifrado LUKS
c) Para verificar la fortaleza de una contrasena
d) Para enviar contrasenas cifradas a los usuarios

<details><summary>Respuesta</summary>

**b) Para solicitar contrasenas de forma segura durante el arranque, como claves de descifrado LUKS**

`systemd-ask-password` es una herramienta de systemd disenada para solicitar contrasenas de forma segura, tipicamente durante el arranque del sistema. Su uso mas comun es pedir la contrasena de descifrado de particiones LUKS cifradas. Trabaja con agentes como Plymouth (grafico) o la consola de texto.

</details>

### Pregunta 9

¿En que directorio se encuentran los scripts que generan el MOTD dinamico en distribuciones basadas en Debian/Ubuntu?

a) `/etc/motd.d/`
b) `/etc/update-motd.d/`
c) `/usr/lib/motd/`
d) `/var/run/motd.d/`

<details><summary>Respuesta</summary>

**b) `/etc/update-motd.d/`**

En distribuciones basadas en Debian/Ubuntu, el MOTD puede generarse dinamicamente mediante scripts ejecutables ubicados en `/etc/update-motd.d/`. Los scripts se ejecutan en orden numerico (00-header, 10-help-text, etc.) y su salida combinada forma el mensaje del dia que ven los usuarios.

</details>

### Pregunta 10

Un administrador necesita enviar un mensaje solo al usuario "maria" que esta conectada en la terminal `pts/3`. ¿Que comando debe usar?

a) `wall maria pts/3 "Mensaje"`
b) `write maria pts/3`
c) `msg maria pts/3 "Mensaje"`
d) `notify maria pts/3`

<details><summary>Respuesta</summary>

**b) `write maria pts/3`**

El comando `write` permite enviar un mensaje a un usuario especifico en una terminal determinada. La sintaxis es `write usuario [terminal]`. Despues de ejecutar el comando, se escribe el mensaje linea por linea y se finaliza con Ctrl+D. El comando `wall` no acepta un usuario especifico como destino.

</details>

### Pregunta 11

¿Que secuencia de escape en el archivo `/etc/issue` muestra la version del kernel?

a) `\k`
b) `\v`
c) `\r`
d) `\K`

<details><summary>Respuesta</summary>

**c) `\r`**

En el archivo `/etc/issue`, la secuencia `\r` muestra la version del kernel (release) del sistema. Por ejemplo, podria mostrar "6.1.0-18-amd64". Otras secuencias comunes son `\n` (hostname), `\l` (terminal), `\s` (nombre del SO), `\m` (arquitectura) y `\d` (fecha actual).

</details>

### Pregunta 12

Un administrador quiere programar un reinicio del servidor para las 23:00 e informar a todos los usuarios conectados. ¿Que comando debe usar?

a) `reboot -t 23:00 "Reinicio programado"`
b) `shutdown -r 23:00 "Reinicio programado a las 23:00"`
c) `systemctl reboot --schedule 23:00`
d) `wall "Reinicio a las 23:00" && at 23:00 reboot`

<details><summary>Respuesta</summary>

**b) `shutdown -r 23:00 "Reinicio programado a las 23:00"`**

El comando `shutdown -r` programa un reinicio a la hora especificada. El mensaje entre comillas se envia automaticamente a todos los usuarios conectados mediante `wall`. Ademas, `shutdown` envia avisos periodicos a medida que se acerca la hora programada, dando tiempo a los usuarios para guardar su trabajo.

</details>

### Pregunta 13

¿Que secuencia de escape en `/etc/issue` muestra el nombre de la terminal donde se esta realizando el login?

a) `\n`
b) `\t`
c) `\l`
d) `\s`

<details><summary>Respuesta</summary>

**c) `\l`**

La secuencia `\l` (ele minuscula) en `/etc/issue` muestra el nombre de la terminal (tty) donde el usuario esta iniciando sesion, por ejemplo "tty1", "tty2", etc. No confundir con `\n` que muestra el hostname, ni con `\t` que muestra la hora actual.

</details>

### Pregunta 14

¿Cual es la diferencia principal entre `/etc/motd` y los scripts en `/etc/update-motd.d/`?

a) `/etc/motd` es para SSH y `/etc/update-motd.d/` para consola local
b) `/etc/motd` es un archivo estatico mientras que `/etc/update-motd.d/` genera contenido dinamico
c) `/etc/update-motd.d/` solo funciona en sistemas RHEL
d) No hay diferencia, son sinonimos

<details><summary>Respuesta</summary>

**b) `/etc/motd` es un archivo estatico mientras que `/etc/update-motd.d/` genera contenido dinamico**

El archivo `/etc/motd` contiene un mensaje estatico que el administrador edita manualmente. En distribuciones basadas en Debian/Ubuntu, el directorio `/etc/update-motd.d/` contiene scripts ejecutables que generan contenido dinamico (actualizaciones pendientes, estado del sistema, etc.) cada vez que un usuario inicia sesion.

</details>

### Pregunta 15

¿Que ocurre cuando un usuario con `mesg n` configurado recibe un mensaje de `wall` enviado por root?

a) El mensaje es bloqueado completamente
b) El mensaje se entrega de todas formas
c) El mensaje se almacena en un buffer hasta que el usuario ejecute `mesg y`
d) El mensaje se redirige al correo del usuario

<details><summary>Respuesta</summary>

**b) El mensaje se entrega de todas formas**

Cuando root envia un mensaje con `wall`, este se entrega a todos los usuarios conectados independientemente de su configuracion de `mesg`. La restriccion `mesg n` solo bloquea mensajes de usuarios normales (especialmente los de `write`), pero no los mensajes de wall enviados por root. Esto garantiza que las notificaciones criticas del administrador siempre lleguen.

</details>

### Pregunta 16

Un administrador ha programado un apagado con `shutdown -h +30` pero necesita cancelarlo. ¿Que comando debe ejecutar?

a) `shutdown --stop`
b) `shutdown -c`
c) `shutdown --abort`
d) `systemctl cancel-shutdown`

<details><summary>Respuesta</summary>

**b) `shutdown -c`**

La opcion `-c` (cancel) de `shutdown` cancela un apagado o reinicio previamente programado. Opcionalmente se puede incluir un mensaje que se enviara a todos los usuarios: `shutdown -c "El apagado ha sido cancelado"`. Este mensaje se distribuye automaticamente via `wall`.

</details>

### Pregunta 17

¿En que directorio almacena systemd las solicitudes pendientes de contrasena generadas por `systemd-ask-password`?

a) `/var/run/passwords/`
b) `/run/systemd/ask-password/`
c) `/etc/systemd/passwords/`
d) `/tmp/systemd-passwords/`

<details><summary>Respuesta</summary>

**b) `/run/systemd/ask-password/`**

Las solicitudes de contrasena generadas por `systemd-ask-password` se almacenan como archivos en el directorio `/run/systemd/ask-password/`. Los agentes de contrasena (Plymouth para el arranque grafico, la consola de texto, o wall) monitorizan este directorio para presentar las solicitudes al usuario.

</details>

### Pregunta 18

¿Que secuencia de escape en `/etc/issue` muestra el numero de usuarios actualmente conectados al sistema?

a) `\u`
b) `\U`
c) `\c`
d) `\#`

<details><summary>Respuesta</summary>

**b) `\U`**

La secuencia `\U` en `/etc/issue` muestra el numero de usuarios actualmente conectados al sistema. Muestra un texto como "3 users" o "1 user". Es util para que los usuarios vean la carga del sistema antes de iniciar sesion. Las secuencias de escape de `/etc/issue` son interpretadas por `agetty` y generalmente no funcionan en `/etc/issue.net`.

</details>

### Pregunta 19

¿Que agente de systemd presenta las solicitudes de contrasena en la pantalla de arranque grafica?

a) Console
b) Wall
c) Plymouth
d) Getty

<details><summary>Respuesta</summary>

**c) Plymouth**

Plymouth es el agente que muestra las solicitudes de contrasena de `systemd-ask-password` en la pantalla de arranque grafica (splash screen). Es el mecanismo por el cual se solicita la contrasena de descifrado LUKS de forma visual durante el arranque. Si Plymouth no esta disponible, se utiliza el agente de consola de texto.

</details>

### Pregunta 20

¿Que comando de `shutdown` apaga inmediatamente el sistema?

a) `shutdown -h 0`
b) `shutdown -h now`
c) `shutdown --immediate`
d) Ambas a) y b) son correctas

<details><summary>Respuesta</summary>

**d) Ambas a) y b) son correctas**

Tanto `shutdown -h now` como `shutdown -h 0` inician el apagado inmediato del sistema. La opcion `-h` indica halt (apagar), `now` es un alias para el tiempo "+0" que significa inmediatamente. Tambien se puede usar `+N` para minutos (ej: `+10`) o una hora especifica (ej: `23:00`).

</details>

### Pregunta 21

Escribe el comando para enviar el mensaje "Mantenimiento en 5 minutos" a todos los usuarios conectados al sistema.

<input type="text" class="fill-blank" data-answer="wall 'Mantenimiento en 5 minutos'" data-alt="wall \"Mantenimiento en 5 minutos\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wall 'Mantenimiento en 5 minutos'**

El comando `wall` (Write to ALL) envia un mensaje a todas las terminales de todos los usuarios conectados. El mensaje aparecera precedido de una cabecera indicando quien lo envio y desde que terminal. Es la herramienta estandar para notificaciones urgentes del administrador.

</details>

### Pregunta 22

Escribe el comando para deshabilitar la recepcion de mensajes de otros usuarios en tu terminal.

<input type="text" class="fill-blank" data-answer="mesg n" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mesg n**

El comando `mesg n` deshabilita los permisos de escritura de otros usuarios en tu terminal, bloqueando los mensajes enviados con `write`. Sin embargo, los mensajes de `wall` enviados por root generalmente no se bloquean. Para volver a habilitar la recepcion se usa `mesg y`.

</details>

### Pregunta 23

Escribe el comando para programar un apagado del sistema en 15 minutos con un mensaje de aviso a los usuarios.

<input type="text" class="fill-blank" data-answer="shutdown -h +15 'El sistema se apagara en 15 minutos'" data-alt="shutdown -h +15 \"El sistema se apagara en 15 minutos\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**shutdown -h +15 'El sistema se apagara en 15 minutos'**

El comando `shutdown -h +15` programa el apagado del sistema para dentro de 15 minutos. La opcion `-h` indica halt (apagar) y `+15` especifica el tiempo en minutos. El mensaje entre comillas se envia automaticamente a todos los usuarios conectados. Se pueden enviar avisos adicionales con `wall` si es necesario.

</details>

### Pregunta 24

Escribe el comando para enviar un mensaje al usuario "carlos" que esta conectado en la terminal pts/1.

<input type="text" class="fill-blank" data-answer="write carlos pts/1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**write carlos pts/1**

El comando `write` permite enviar un mensaje interactivo a un usuario especifico en una terminal determinada. Despues de ejecutar el comando, cada linea que se escriba sera enviada al usuario. La sesion se termina pulsando Ctrl+D. Si el usuario tiene `mesg n`, el mensaje sera rechazado (a menos que el remitente sea root).

</details>

### Pregunta 25

Escribe el comando para cancelar un apagado previamente programado y notificar a los usuarios que ha sido cancelado.

<input type="text" class="fill-blank" data-answer="shutdown -c 'El apagado ha sido cancelado'" data-alt="shutdown -c \"El apagado ha sido cancelado\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**shutdown -c 'El apagado ha sido cancelado'**

La opcion `-c` (cancel) de `shutdown` cancela cualquier apagado o reinicio programado previamente. El mensaje opcional se envia a todos los usuarios conectados para informarles de la cancelacion. Es importante siempre incluir un mensaje explicativo para evitar confusion entre los usuarios.

</details>
