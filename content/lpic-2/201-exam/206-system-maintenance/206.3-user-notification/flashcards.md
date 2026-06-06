---
title: "206.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "206.3"
---

# Flashcards: 206.3 - Notificacion A Usuarios

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-001">
<div class="flashcard-front">

**P:** ¿Que archivo se muestra al usuario ANTES de iniciar sesion en una consola local?

</div>
<div class="flashcard-back">

**R:** b) `/etc/issue`. El archivo `/etc/issue` se muestra en la pantalla de login de la consola local antes de que el usuario introduzca sus credenciales. `/etc/motd` se muestra despues del login exitoso, y `/etc/issue.net` es para conexiones remotas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-002">
<div class="flashcard-front">

**P:** ¿Que directiva se debe configurar en `/etc/ssh/sshd_config` para que SSH muestre un banner antes del login?

</div>
<div class="flashcard-back">

**R:** c) `Banner /etc/issue.net`. La directiva `Banner` en `/etc/ssh/sshd_config` especifica el archivo cuyo contenido se mostrara al usuario antes de la autenticacion SSH. Normalmente se apunta a `/etc/issue.net`, aunque puede ser cualquier archivo de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando envia un mensaje a TODOS los usuarios conectados al sistema?

</div>
<div class="flashcard-back">

**R:** c) `wall`. El comando `wall` (Write to ALL) envia un mensaje a todas las terminales de todos los usuarios que estan conectados al sistema. El comando `write` envia un mensaje a un usuario especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-004">
<div class="flashcard-front">

**P:** Un usuario ejecuta `mesg n` en su terminal. ¿Cual es el efecto?

</div>
<div class="flashcard-back">

**R:** b) No podra recibir mensajes de `write`, pero los mensajes de `wall` de root si llegaran. `mesg n` deshabilita la escritura en la terminal del usuario por parte de otros usuarios, bloqueando los mensajes de `write`. Sin embargo, los mensajes enviados con `wall` por el usuario root generalmente no son bloqueados por esta configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que secuencia de escape en `/etc/issue` muestra el nombre del host?

</div>
<div class="flashcard-back">

**R:** b) `\n`. En el archivo `/etc/issue`, la secuencia `\n` muestra el nombre del host (hostname) de la maquina. Nota: esto es diferente de la secuencia `\n` en otros contextos (como bash), donde representa un salto de linea.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-006">
<div class="flashcard-front">

**P:** ¿Como se cancela un apagado programado con `shutdown` y se notifica a los usuarios?

</div>
<div class="flashcard-back">

**R:** b) `shutdown -c "El reinicio ha sido cancelado"`. La opcion `-c` (cancel) de `shutdown` cancela un apagado o reinicio previamente programado. El mensaje opcional se envia a todos los usuarios conectados para informarles de la cancelacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-007">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre `/etc/issue` y `/etc/issue.net`?

</div>
<div class="flashcard-back">

**R:** b) `/etc/issue` se muestra en la consola local, `/etc/issue.net` en conexiones remotas. `/etc/issue` es mostrado por `getty` (o `agetty`) en las consolas locales (tty). `/etc/issue.net` esta destinado a conexiones remotas como SSH o Telnet. Ademas, las secuencias de escape como `\n`, `\l`, etc., normalmente solo se interpretan en `/etc/issue`, no en `/etc/issue.net`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-008">
<div class="flashcard-front">

**P:** ¿Para que se utiliza `systemd-ask-password`?

</div>
<div class="flashcard-back">

**R:** b) Para solicitar contrasenas de forma segura durante el arranque, como claves de descifrado LUKS. `systemd-ask-password` es una herramienta de systemd disenada para solicitar contrasenas de forma segura, tipicamente durante el arranque del sistema. Su uso mas comun es pedir la contrasena de descifrado de particiones LUKS cifradas. Trabaja con agentes como Plymouth (grafico) o la consola de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-009">
<div class="flashcard-front">

**P:** ¿En que directorio se encuentran los scripts que generan el MOTD dinamico en distribuciones basadas en Debian/Ubuntu?

</div>
<div class="flashcard-back">

**R:** b) `/etc/update-motd.d/`. En distribuciones basadas en Debian/Ubuntu, el MOTD puede generarse dinamicamente mediante scripts ejecutables ubicados en `/etc/update-motd.d/`. Los scripts se ejecutan en orden numerico (00-header, 10-help-text, etc.) y su salida combinada forma el mensaje del dia que ven los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita enviar un mensaje solo al usuario "maria" que esta conectada en la terminal `pts/3`. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `write maria pts/3`. El comando `write` permite enviar un mensaje a un usuario especifico en una terminal determinada. La sintaxis es `write usuario [terminal]`. Despues de ejecutar el comando, se escribe el mensaje linea por linea y se finaliza con Ctrl+D. El comando `wall` no acepta un usuario especifico como destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-011">
<div class="flashcard-front">

**P:** ¿Que secuencia de escape en el archivo `/etc/issue` muestra la version del kernel?

</div>
<div class="flashcard-back">

**R:** c) `\r`. En el archivo `/etc/issue`, la secuencia `\r` muestra la version del kernel (release) del sistema. Por ejemplo, podria mostrar "6.1.0-18-amd64". Otras secuencias comunes son `\n` (hostname), `\l` (terminal), `\s` (nombre del SO), `\m` (arquitectura) y `\d` (fecha actual).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-012">
<div class="flashcard-front">

**P:** Un administrador quiere programar un reinicio del servidor para las 23:00 e informar a todos los usuarios conectados. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `shutdown -r 23:00 "Reinicio programado a las 23:00"`. El comando `shutdown -r` programa un reinicio a la hora especificada. El mensaje entre comillas se envia automaticamente a todos los usuarios conectados mediante `wall`. Ademas, `shutdown` envia avisos periodicos a medida que se acerca la hora programada, dando tiempo a los usuarios para guardar su trabajo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-013">
<div class="flashcard-front">

**P:** ¿Que secuencia de escape en `/etc/issue` muestra el nombre de la terminal donde se esta realizando el login?

</div>
<div class="flashcard-back">

**R:** c) `\l`. La secuencia `\l` (ele minuscula) en `/etc/issue` muestra el nombre de la terminal (tty) donde el usuario esta iniciando sesion, por ejemplo "tty1", "tty2", etc. No confundir con `\n` que muestra el hostname, ni con `\t` que muestra la hora actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-014">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre `/etc/motd` y los scripts en `/etc/update-motd.d/`?

</div>
<div class="flashcard-back">

**R:** b) `/etc/motd` es un archivo estatico mientras que `/etc/update-motd.d/` genera contenido dinamico. El archivo `/etc/motd` contiene un mensaje estatico que el administrador edita manualmente. En distribuciones basadas en Debian/Ubuntu, el directorio `/etc/update-motd.d/` contiene scripts ejecutables que generan contenido dinamico (actualizaciones pendientes, estado del sistema, etc.) cada vez que un usuario inicia sesion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que ocurre cuando un usuario con `mesg n` configurado recibe un mensaje de `wall` enviado por root?

</div>
<div class="flashcard-back">

**R:** b) El mensaje se entrega de todas formas. Cuando root envia un mensaje con `wall`, este se entrega a todos los usuarios conectados independientemente de su configuracion de `mesg`. La restriccion `mesg n` solo bloquea mensajes de usuarios normales (especialmente los de `write`), pero no los mensajes de wall enviados por root. Esto garantiza que las notificaciones criticas del administrador siempre lleguen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-016">
<div class="flashcard-front">

**P:** Un administrador ha programado un apagado con `shutdown -h +30` pero necesita cancelarlo. ¿Que comando debe ejecutar?

</div>
<div class="flashcard-back">

**R:** b) `shutdown -c`. La opcion `-c` (cancel) de `shutdown` cancela un apagado o reinicio previamente programado. Opcionalmente se puede incluir un mensaje que se enviara a todos los usuarios: `shutdown -c "El apagado ha sido cancelado"`. Este mensaje se distribuye automaticamente via `wall`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-017">
<div class="flashcard-front">

**P:** ¿En que directorio almacena systemd las solicitudes pendientes de contrasena generadas por `systemd-ask-password`?

</div>
<div class="flashcard-back">

**R:** b) `/run/systemd/ask-password/`. Las solicitudes de contrasena generadas por `systemd-ask-password` se almacenan como archivos en el directorio `/run/systemd/ask-password/`. Los agentes de contrasena (Plymouth para el arranque grafico, la consola de texto, o wall) monitorizan este directorio para presentar las solicitudes al usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que secuencia de escape en `/etc/issue` muestra el numero de usuarios actualmente conectados al sistema?

</div>
<div class="flashcard-back">

**R:** b) `\U`. La secuencia `\U` en `/etc/issue` muestra el numero de usuarios actualmente conectados al sistema. Muestra un texto como "3 users" o "1 user". Es util para que los usuarios vean la carga del sistema antes de iniciar sesion. Las secuencias de escape de `/etc/issue` son interpretadas por `agetty` y generalmente no funcionan en `/etc/issue.net`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-019">
<div class="flashcard-front">

**P:** ¿Que agente de systemd presenta las solicitudes de contrasena en la pantalla de arranque grafica?

</div>
<div class="flashcard-back">

**R:** c) Plymouth. Plymouth es el agente que muestra las solicitudes de contrasena de `systemd-ask-password` en la pantalla de arranque grafica (splash screen). Es el mecanismo por el cual se solicita la contrasena de descifrado LUKS de forma visual durante el arranque. Si Plymouth no esta disponible, se utiliza el agente de consola de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que comando de `shutdown` apaga inmediatamente el sistema?

</div>
<div class="flashcard-back">

**R:** d) Ambas a) y b) son correctas. Tanto `shutdown -h now` como `shutdown -h 0` inician el apagado inmediato del sistema. La opcion `-h` indica halt (apagar), `now` es un alias para el tiempo "+0" que significa inmediatamente. Tambien se puede usar `+N` para minutos (ej: `+10`) o una hora especifica (ej: `23:00`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para enviar el mensaje "Mantenimiento en 5 minutos" a todos los usuarios conectados al sistema. <input type="text" class="fill-blank" data-answer="wall 'Mantenimiento en 5 minutos'" data-alt="wall \"Mantenimiento en 5 minutos\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** wall 'Mantenimiento en 5 minutos'. El comando `wall` (Write to ALL) envia un mensaje a todas las terminales de todos los usuarios conectados. El mensaje aparecera precedido de una cabecera indicando quien lo envio y desde que terminal. Es la herramienta estandar para notificaciones urgentes del administrador.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para deshabilitar la recepcion de mensajes de otros usuarios en tu terminal. <input type="text" class="fill-blank" data-answer="mesg n" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mesg n. El comando `mesg n` deshabilita los permisos de escritura de otros usuarios en tu terminal, bloqueando los mensajes enviados con `write`. Sin embargo, los mensajes de `wall` enviados por root generalmente no se bloquean. Para volver a habilitar la recepcion se usa `mesg y`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para programar un apagado del sistema en 15 minutos con un mensaje de aviso a los usuarios. <input type="text" class="fill-blank" data-answer="shutdown -h +15 'El sistema se apagara en 15 minutos'" data-alt="shutdown -h +15 \"El sistema se apagara en 15 minutos\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** shutdown -h +15 'El sistema se apagara en 15 minutos'. El comando `shutdown -h +15` programa el apagado del sistema para dentro de 15 minutos. La opcion `-h` indica halt (apagar) y `+15` especifica el tiempo en minutos. El mensaje entre comillas se envia automaticamente a todos los usuarios conectados. Se pueden enviar avisos adicionales con `wall` si es necesario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para enviar un mensaje al usuario "carlos" que esta conectado en la terminal pts/1. <input type="text" class="fill-blank" data-answer="write carlos pts/1" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** write carlos pts/1. El comando `write` permite enviar un mensaje interactivo a un usuario especifico en una terminal determinada. Despues de ejecutar el comando, cada linea que se escriba sera enviada al usuario. La sesion se termina pulsando Ctrl+D. Si el usuario tiene `mesg n`, el mensaje sera rechazado (a menos que el remitente sea root).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para cancelar un apagado previamente programado y notificar a los usuarios que ha sido cancelado. <input type="text" class="fill-blank" data-answer="shutdown -c 'El apagado ha sido cancelado'" data-alt="shutdown -c \"El apagado ha sido cancelado\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** shutdown -c 'El apagado ha sido cancelado'. La opcion `-c` (cancel) de `shutdown` cancela cualquier apagado o reinicio programado previamente. El mensaje opcional se envia a todos los usuarios conectados para informarles de la cancelacion. Es importante siempre incluir un mensaje explicativo para evitar confusion entre los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `/etc/motd` se muestra despues del login exitoso. No confundir con `/etc/issue` ...

</div>
<div class="flashcard-back">

**R:** `/etc/motd` se muestra despues del login exitoso. No confundir con `/etc/issue` que se muestra antes del login.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `/etc/issue` es para consolas locales, `/etc/issue.net` es para conexiones remot...

</div>
<div class="flashcard-back">

**R:** `/etc/issue` es para consolas locales, `/etc/issue.net` es para conexiones remotas. Las secuencias de escape (`\n`, `\l`, etc.) generalmente solo funcionan en `/etc/issue`, no en `/etc/issue.net`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Los banners legales son importantes por razones de cumplimiento normativo. Puede...

</div>
<div class="flashcard-back">

**R:** Los banners legales son importantes por razones de cumplimiento normativo. Pueden ser necesarios para que acciones legales contra accesos no autorizados sean validas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `mesg n` bloquea mensajes de `write` pero generalmente NO bloquea mensajes de `w...

</div>
<div class="flashcard-back">

**R:** `mesg n` bloquea mensajes de `write` pero generalmente NO bloquea mensajes de `wall` enviados por root. Solo root puede enviar mensajes a usuarios que tengan `mesg n`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `shutdown` envia mensajes automaticamente a los usuarios. La opcion `-c` cancela...

</div>
<div class="flashcard-back">

**R:** `shutdown` envia mensajes automaticamente a los usuarios. La opcion `-c` cancela un apagado programado y puede incluir un mensaje explicativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `systemd-ask-password` se usa para solicitar contrasenas durante el arranque, co...

</div>
<div class="flashcard-back">

**R:** `systemd-ask-password` se usa para solicitar contrasenas durante el arranque, como claves de descifrado LUKS. No es una herramienta de notificacion general, sino de interaccion segura con el usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son systemd-ask-password?

</div>
<div class="flashcard-back">

**R:** `systemd-ask-password` es una herramienta de systemd para solicitar contrasenas de forma segura al usuario, tipicamente durante el arranque del sistema (por ejemplo, para desbloquear particiones LUKS).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Resumen de archivos y comandos?

</div>
<div class="flashcard-back">

**R:** | Mecanismo | Momento | Alcance |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - **Mantener los mensajes breves y claros**: Los usuarios tienden a ignorar mensajes largos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.3">
</div>

<div class="flashcard" data-id="206.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

