---
title: "211.2 - Gestión de entrega"
tags: [lpic-2, examen-202, tema-211, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "211"
subtema: "211.2"
---

# 211.2 - Ejercicios: Gestión de entrega

### Pregunta 1

¿Cuáles son los tres subdirectorios estándar de un buzón Maildir?

a) inbox/, sent/, trash/
b) new/, cur/, tmp/
c) read/, unread/, pending/
d) mail/, queue/, archive/

<details><summary>Respuesta</summary>

**b) new/, cur/, tmp/**

Un buzón Maildir tiene tres subdirectorios: `new/` (mensajes nuevos no leídos), `cur/` (mensajes leídos o procesados) y `tmp/` (mensajes en proceso de entrega). Cada mensaje se almacena como un archivo individual.
</details>

### Pregunta 2

¿Qué ventaja tiene Maildir sobre mbox para acceso concurrente?

a) Maildir usa cifrado automático
b) Maildir no requiere bloqueo de archivos
c) Maildir comprime los mensajes automáticamente
d) Maildir es más rápido en lectura secuencial

<details><summary>Respuesta</summary>

**b) Maildir no requiere bloqueo de archivos**

Como cada mensaje es un archivo individual en Maildir, no hay necesidad de bloquear un archivo compartido para escribir. En mbox, todos los mensajes están en un solo archivo y se necesita bloqueo para evitar corrupción durante el acceso concurrente.
</details>

### Pregunta 3

En una regla Procmail, ¿qué indica la barra final (`/`) en la ruta del destino?

a) Que el destino es un archivo comprimido
b) Que el destino es un directorio Maildir
c) Que se debe crear el directorio si no existe
d) Que se sobrescribe el contenido anterior

<details><summary>Respuesta</summary>

**b) Que el destino es un directorio Maildir**

En Procmail, una ruta que termina en `/` indica que el destino es un buzón Maildir. Sin la barra final, Procmail trata la ruta como un archivo mbox. Por ejemplo, `.spam/` entrega al Maildir y `.spam` entrega a un archivo mbox.
</details>

### Pregunta 4

¿Qué flag de Procmail se utiliza para hacer una copia del mensaje y continuar procesando reglas?

a) :0 f
b) :0 w
c) :0 c
d) :0 d

<details><summary>Respuesta</summary>

**c) :0 c**

El flag `c` (copy) hace que Procmail entregue una copia del mensaje al destino indicado y continúe evaluando las reglas siguientes con el mensaje original. Sin este flag, la primera regla que coincida entrega el mensaje y detiene el procesamiento.
</details>

### Pregunta 5

¿Qué acción de Sieve se utiliza para mover un mensaje a una carpeta específica?

a) moveto "carpeta"
b) fileinto "carpeta"
c) deliver "carpeta"
d) store "carpeta"

<details><summary>Respuesta</summary>

**b) fileinto "carpeta"**

La acción `fileinto` de Sieve mueve el mensaje a la carpeta especificada. Es una de las acciones más utilizadas en los scripts Sieve para organizar el correo automáticamente.
</details>

### Pregunta 6

¿Qué herramienta actúa como interfaz entre Postfix y los filtros de contenido como SpamAssassin y ClamAV?

a) milter-manager
b) amavisd-new
c) postscreen
d) content-filter

<details><summary>Respuesta</summary>

**b) amavisd-new**

amavisd-new es un intermediario entre el MTA (Postfix) y los filtros de contenido (antivirus y antispam). Recibe correo del MTA en el puerto 10024, lo pasa por los filtros configurados y lo devuelve al MTA en el puerto 10025.
</details>

### Pregunta 7

¿Qué comando se utiliza para actualizar las firmas de virus de ClamAV?

a) clamupdate
b) clamscan --update
c) freshclam
d) clamav-update

<details><summary>Respuesta</summary>

**c) freshclam**

`freshclam` es el comando que descarga y actualiza las bases de datos de firmas de virus de ClamAV. Normalmente se ejecuta como un demonio o mediante cron para mantener las firmas actualizadas.
</details>

### Pregunta 8

¿Qué parámetro de Postfix se configura para activar el uso de buzones virtuales?

a) virtual_users = yes
b) virtual_mailbox_domains
c) enable_virtual = true
d) virtual_transport

<details><summary>Respuesta</summary>

**b) virtual_mailbox_domains**

`virtual_mailbox_domains` en main.cf define los dominios para los que Postfix gestiona buzones virtuales. Se complementa con `virtual_mailbox_maps` (mapa de buzones), `virtual_mailbox_base` (directorio base) y `virtual_uid_maps`/`virtual_gid_maps` (propietario).
</details>

### Pregunta 9

¿Dónde se almacenan las reglas de filtrado Sieve del usuario cuando se usa Dovecot?

a) /etc/sieve/usuario.sieve
b) ~/.procmailrc
c) ~/.dovecot.sieve
d) /etc/dovecot/sieve/usuario

<details><summary>Respuesta</summary>

**c) ~/.dovecot.sieve**

Las reglas Sieve del usuario se almacenan por defecto en `~/.dovecot.sieve`. La ubicación se puede cambiar en la configuración de Dovecot mediante la directiva `sieve` en el archivo de configuración del plugin Sieve.
</details>

### Pregunta 10

¿Qué parámetro en SpamAssassin define la puntuación mínima para considerar un mensaje como spam?

a) spam_threshold
b) required_score
c) min_score
d) spam_level

<details><summary>Respuesta</summary>

**b) required_score**

`required_score` en `/etc/spamassassin/local.cf` define la puntuación mínima a partir de la cual un mensaje se clasifica como spam. El valor por defecto es 5.0. Los mensajes que superan esta puntuación se marcan con cabeceras de spam.
</details>

### Pregunta 11

¿Qué parámetro de Postfix en main.cf se utiliza para configurar el formato Maildir como buzón del usuario?

a) mailbox_format = maildir
b) home_mailbox = Maildir/
c) mail_spool_directory = Maildir/
d) delivery_format = maildir

<details><summary>Respuesta</summary>

**b) home_mailbox = Maildir/**

El parámetro `home_mailbox = Maildir/` en main.cf indica a Postfix que entregue el correo en formato Maildir dentro del directorio home del usuario. La barra final es obligatoria para indicar que se trata de un directorio Maildir y no de un archivo mbox.

</details>

### Pregunta 12

¿En qué puerto recibe amavisd-new el correo de Postfix para su procesamiento antivirus y antispam?

a) 25
b) 587
c) 10024
d) 10025

<details><summary>Respuesta</summary>

**c) 10024**

amavisd-new recibe el correo de Postfix en el puerto 10024, lo procesa a través de los filtros configurados (SpamAssassin, ClamAV, etc.) y lo devuelve a Postfix en el puerto 10025. Esta configuración se establece mediante `content_filter = smtp-amavis:[127.0.0.1]:10024` en main.cf.

</details>

### Pregunta 13

¿Qué acción de Sieve se utiliza para rechazar un mensaje con un mensaje de error al remitente?

a) discard
b) deny
c) reject
d) refuse

<details><summary>Respuesta</summary>

**c) reject**

La acción `reject` de Sieve rechaza el mensaje y envía una notificación de rechazo al remitente con el texto especificado. A diferencia de `discard`, que elimina el mensaje silenciosamente, `reject` informa al remitente del motivo del rechazo.

</details>

### Pregunta 14

¿Qué variable se define en `.procmailrc` para especificar el directorio base donde Procmail entregará el correo?

a) MAILPATH
b) MAILDIR
c) MAILHOME
d) DELIVERYDIR

<details><summary>Respuesta</summary>

**b) MAILDIR**

La variable `MAILDIR` en `.procmailrc` define el directorio base donde Procmail entregará el correo. La variable `DEFAULT` complementa a `MAILDIR` indicando el buzón predeterminado. Ejemplo: `MAILDIR=$HOME/Maildir` y `DEFAULT=$MAILDIR/`.

</details>

### Pregunta 15

¿Qué componente de ClamAV se encarga de la actualización automática de las firmas de virus?

a) clamd
b) clamscan
c) freshclam
d) clamav-milter

<details><summary>Respuesta</summary>

**c) freshclam**

`freshclam` es el componente de ClamAV responsable de descargar y actualizar las bases de datos de firmas de virus desde los servidores de ClamAV. Puede ejecutarse como demonio para actualizaciones automáticas periódicas o manualmente bajo demanda.

</details>

### Pregunta 16

¿Qué directiva de Postfix se utiliza para especificar un mapa de buzones virtuales?

a) virtual_users_map
b) virtual_mailbox_maps
c) virtual_delivery_maps
d) virtual_account_maps

<details><summary>Respuesta</summary>

**b) virtual_mailbox_maps**

La directiva `virtual_mailbox_maps` en main.cf especifica el mapa que asocia direcciones de correo virtuales con ubicaciones de buzones en el sistema de archivos. Se complementa con `virtual_mailbox_domains`, `virtual_mailbox_base`, `virtual_uid_maps` y `virtual_gid_maps`.

</details>

### Pregunta 17

¿Qué tipo de formato de buzón almacena todos los mensajes en un único archivo?

a) Maildir
b) mbox
c) MH
d) dstruc

<details><summary>Respuesta</summary>

**b) mbox**

El formato mbox almacena todos los mensajes de un buzón en un único archivo secuencial, normalmente ubicado en `/var/mail/usuario`. Requiere bloqueo del archivo para acceso concurrente y su rendimiento se degrada con buzones grandes, a diferencia de Maildir donde cada mensaje es un archivo individual.

</details>

### Pregunta 18

¿Qué acción de Sieve elimina un mensaje sin enviar notificación al remitente?

a) reject
b) delete
c) discard
d) drop

<details><summary>Respuesta</summary>

**c) discard**

La acción `discard` de Sieve elimina el mensaje silenciosamente sin enviar ninguna notificación al remitente. A diferencia de `reject`, que informa al remitente del rechazo, `discard` simplemente descarta el mensaje como si nunca hubiera llegado.

</details>

### Pregunta 19

¿Qué comando de Postfix se utiliza para generar la base de datos hash a partir de un archivo de mapa como `/etc/postfix/vmailbox`?

a) posthash /etc/postfix/vmailbox
b) postmap /etc/postfix/vmailbox
c) postdb /etc/postfix/vmailbox
d) newmap /etc/postfix/vmailbox

<details><summary>Respuesta</summary>

**b) postmap /etc/postfix/vmailbox**

El comando `postmap` genera la base de datos hash (archivo `.db`) a partir de un archivo de texto de mapa de Postfix. Es necesario ejecutarlo cada vez que se modifica un archivo de mapa como `vmailbox`, `transport` o `virtual` para que los cambios surtan efecto.

</details>

### Pregunta 20

¿Qué directiva en el archivo de configuración de SpamAssassin modifica el asunto de los mensajes detectados como spam?

a) subject_prefix
b) rewrite_header Subject
c) spam_subject_tag
d) modify_subject

<details><summary>Respuesta</summary>

**b) rewrite_header Subject**

La directiva `rewrite_header Subject` en `/etc/spamassassin/local.cf` permite añadir un prefijo al asunto de los mensajes identificados como spam. Por ejemplo, `rewrite_header Subject [SPAM]` añade el texto "[SPAM]" al principio del asunto original.

</details>

### Pregunta 21

¿Qué comando se utiliza para actualizar las firmas de virus de ClamAV?

<input type="text" class="fill-blank" data-answer="freshclam" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**freshclam**

El comando `freshclam` descarga las últimas definiciones de virus desde los servidores de ClamAV y actualiza la base de datos local. Se recomienda ejecutarlo periódicamente o como demonio para mantener las firmas actualizadas.

</details>

### Pregunta 22

¿Qué comando genera la base de datos hash del archivo de mapa de transporte de Postfix?

<input type="text" class="fill-blank" data-answer="postmap /etc/postfix/transport" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**postmap /etc/postfix/transport**

El comando `postmap /etc/postfix/transport` genera el archivo de base de datos `/etc/postfix/transport.db` a partir del archivo de texto. Es necesario ejecutarlo cada vez que se modifica el archivo de transporte para que Postfix reconozca los cambios.

</details>

### Pregunta 23

¿Qué directiva se utiliza en Postfix main.cf para integrar amavisd-new como filtro de contenido?

<input type="text" class="fill-blank" data-answer="content_filter = smtp-amavis:[127.0.0.1]:10024" data-alt="content_filter = smtp-amavis:[localhost]:10024" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**content_filter = smtp-amavis:[127.0.0.1]:10024**

Esta directiva en main.cf indica a Postfix que reenvíe todo el correo al filtro de contenido amavisd-new en la dirección 127.0.0.1 puerto 10024. Después del procesamiento, amavisd-new devuelve el correo a Postfix en el puerto 10025.

</details>

### Pregunta 24

¿Qué directiva de Postfix configura Procmail como agente de entrega local?

<input type="text" class="fill-blank" data-answer="mailbox_command = /usr/bin/procmail" data-alt="mailbox_command = /usr/bin/procmail -a &quot;$EXTENSION&quot;" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mailbox_command = /usr/bin/procmail**

La directiva `mailbox_command` en main.cf de Postfix permite especificar un programa externo como agente de entrega local. Estableciendo `mailbox_command = /usr/bin/procmail`, Postfix delegará la entrega local de correo a Procmail, que aplicará las reglas definidas en `.procmailrc`.

</details>

### Pregunta 25

¿Qué comando de Postfix genera la base de datos del archivo de buzones virtuales /etc/postfix/vmailbox?

<input type="text" class="fill-blank" data-answer="postmap /etc/postfix/vmailbox" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**postmap /etc/postfix/vmailbox**

El comando `postmap /etc/postfix/vmailbox` genera la base de datos hash necesaria para que Postfix pueda consultar eficientemente el mapa de buzones virtuales. Cada vez que se modifica el archivo de texto, se debe ejecutar `postmap` para regenerar la base de datos.

</details>
