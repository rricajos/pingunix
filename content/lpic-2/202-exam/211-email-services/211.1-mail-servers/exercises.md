---
title: "211.1 - Servidores de correo"
tags: [lpic-2, examen-202, tema-211, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "211"
subtema: "211.1"
---

# 211.1 - Ejercicios: Servidores de correo

### Pregunta 1

¿Qué componente del sistema de correo se encarga de transferir mensajes entre servidores?

a) MUA (Mail User Agent)
b) MTA (Mail Transfer Agent)
c) MDA (Mail Delivery Agent)
d) MSA (Mail Submission Agent)

<details><summary>Respuesta</summary>

**b) MTA (Mail Transfer Agent)**

El MTA es responsable de transferir el correo entre servidores utilizando el protocolo SMTP. Ejemplos de MTA son Postfix, Sendmail y Exim. El MUA es el cliente de correo del usuario, el MDA entrega el correo al buzón local y el MSA recibe correo del MUA para su envío.
</details>

### Pregunta 2

¿Cuál es el puerto estándar para el envío de correo autenticado desde un cliente (submission)?

a) 25
b) 110
c) 465
d) 587

<details><summary>Respuesta</summary>

**d) 587**

El puerto 587 (submission) es el puerto estándar para que los clientes de correo (MUA) envíen correo al servidor con autenticación. El puerto 25 es para comunicación entre servidores MTA, y el puerto 465 es para SMTPS (SMTP sobre SSL/TLS).
</details>

### Pregunta 3

¿Qué parámetro de Postfix define las redes autorizadas para usar el servidor como relay?

a) mydestination
b) mynetworks
c) relay_domains
d) permit_networks

<details><summary>Respuesta</summary>

**b) mynetworks**

`mynetworks` en `/etc/postfix/main.cf` define las direcciones IP y redes que tienen permiso para enviar correo a través del servidor sin autenticación adicional. Una configuración incorrecta puede crear un open relay.
</details>

### Pregunta 4

¿Qué comando se debe ejecutar después de modificar el archivo `/etc/aliases`?

a) postfix reload
b) aliasupdate
c) newaliases
d) postmap /etc/aliases

<details><summary>Respuesta</summary>

**c) newaliases**

`newaliases` regenera la base de datos hash de alias (`/etc/aliases.db`) a partir del archivo de texto `/etc/aliases`. Sin ejecutar este comando, los cambios en el archivo de alias no tendrán efecto.
</details>

### Pregunta 5

¿Qué comando muestra solo los parámetros de Postfix que difieren de los valores por defecto?

a) postconf -a
b) postconf -d
c) postconf -n
d) postconf -m

<details><summary>Respuesta</summary>

**c) postconf -n**

`postconf -n` muestra solo los parámetros que han sido modificados respecto a sus valores por defecto, lo que facilita ver la configuración personalizada. `postconf -d` muestra todos los valores por defecto.
</details>

### Pregunta 6

¿Qué restricción de Postfix se utiliza para prevenir que el servidor actúe como open relay?

a) reject_unknown_sender
b) reject_unauth_destination
c) reject_open_relay
d) deny_relay_access

<details><summary>Respuesta</summary>

**b) reject_unauth_destination**

`reject_unauth_destination` rechaza el correo destinado a dominios para los cuales el servidor no es el destino final ni tiene autorización de relay. Es la restricción fundamental para prevenir un open relay y debe incluirse en `smtpd_recipient_restrictions`.
</details>

### Pregunta 7

En Sendmail, ¿qué archivo se debe editar para realizar cambios de configuración?

a) /etc/mail/sendmail.cf
b) /etc/mail/sendmail.mc
c) /etc/mail/sendmail.conf
d) /etc/sendmail/main.cf

<details><summary>Respuesta</summary>

**b) /etc/mail/sendmail.mc**

Se edita `sendmail.mc` (archivo de macros m4) y luego se genera `sendmail.cf` ejecutando `m4 sendmail.mc > sendmail.cf`. El archivo `sendmail.cf` nunca se edita directamente debido a su complejidad extrema.
</details>

### Pregunta 8

¿Qué comando de Postfix elimina todos los mensajes de la cola de correo?

a) postqueue -d ALL
b) postsuper -d ALL
c) postflush ALL
d) mailq --delete-all

<details><summary>Respuesta</summary>

**b) postsuper -d ALL**

`postsuper -d ALL` elimina todos los mensajes de la cola de correo de Postfix. Para eliminar un mensaje específico se usa `postsuper -d ID_MENSAJE`. `postqueue` se usa para listar (`-p`) o forzar el envío (`-f`), no para eliminar.
</details>

### Pregunta 9

¿Qué parámetro de main.cf define el nombre de dominio completamente cualificado (FQDN) del servidor de correo?

a) mydomain
b) myorigin
c) myhostname
d) mail_name

<details><summary>Respuesta</summary>

**c) myhostname**

`myhostname` define el FQDN del servidor de correo (por ejemplo, `correo.ejemplo.com`). `mydomain` define solo el dominio (`ejemplo.com`), y `myorigin` define el dominio que aparece en las direcciones de correo saliente.
</details>

### Pregunta 10

¿Qué comando fuerza a Postfix a intentar reenviar inmediatamente todos los mensajes de la cola?

a) postfix flush
b) postqueue -f
c) postsuper -r ALL
d) mailq -f

<details><summary>Respuesta</summary>

**b) postqueue -f**

`postqueue -f` fuerza a Postfix a intentar entregar inmediatamente todos los mensajes que están en la cola. Es equivalente al comando `sendmail -q` en Sendmail. `postsuper -r ALL` reencola los mensajes pero no fuerza su envío inmediato.
</details>

### Pregunta 11

¿Qué parámetro de Postfix en main.cf define los dominios para los cuales el servidor acepta correo como destino final?

a) mynetworks
b) myorigin
c) mydestination
d) relay_domains

<details><summary>Respuesta</summary>

**c) mydestination**

El parámetro `mydestination` define la lista de dominios para los cuales Postfix acepta correo como destino final (entrega local). Si un mensaje llega dirigido a un dominio que no está en `mydestination` ni en otras tablas de destino, Postfix lo rechaza o lo reenvía según la configuración de relay.

</details>

### Pregunta 12

¿Qué archivo de Postfix define los servicios y procesos que componen la arquitectura del servidor?

a) /etc/postfix/main.cf
b) /etc/postfix/master.cf
c) /etc/postfix/services.cf
d) /etc/postfix/transport

<details><summary>Respuesta</summary>

**b) /etc/postfix/master.cf**

El archivo `/etc/postfix/master.cf` define los servicios de Postfix (smtp, submission, pickup, cleanup, etc.) y sus propiedades como tipo, estado de chroot, número máximo de procesos y opciones adicionales. Es donde se configuran servicios como el puerto de submission (587).

</details>

### Pregunta 13

¿Qué parámetro de Postfix define el dominio que aparece en las direcciones de correo saliente (campo "From")?

a) myhostname
b) mydomain
c) myorigin
d) sender_domain

<details><summary>Respuesta</summary>

**c) myorigin**

El parámetro `myorigin` define el dominio que Postfix añade a las direcciones de correo locales que no incluyen dominio. Por ejemplo, si `myorigin = ejemplo.com`, un correo enviado por el usuario `juan` aparecerá como `juan@ejemplo.com` en el campo "From".

</details>

### Pregunta 14

¿Qué comando de Sendmail se utiliza para regenerar el archivo `sendmail.cf` a partir del archivo de macros `sendmail.mc`?

a) sendmail -rebuild
b) make -C /etc/mail
c) m4 /etc/mail/sendmail.mc > /etc/mail/sendmail.cf
d) sendmailconfig

<details><summary>Respuesta</summary>

**c) m4 /etc/mail/sendmail.mc > /etc/mail/sendmail.cf**

El procesador de macros `m4` se utiliza para generar el archivo `sendmail.cf` a partir de `sendmail.mc`. Nunca se edita directamente `sendmail.cf` debido a su complejidad. Alternativamente, en algunos sistemas se puede ejecutar `make` desde `/etc/mail/`.

</details>

### Pregunta 15

¿Qué proceso de Postfix se encarga de recibir correo entrante vía protocolo SMTP?

a) smtp
b) smtpd
c) pickup
d) master

<details><summary>Respuesta</summary>

**b) smtpd**

El proceso `smtpd` es el demonio SMTP de Postfix que escucha conexiones entrantes y recibe correo de otros servidores o clientes. El proceso `smtp` (sin la "d") es el cliente SMTP que se encarga de enviar correo a otros servidores.

</details>

### Pregunta 16

¿Qué restricción de Postfix rechaza correo de clientes que aparecen en listas negras (RBL)?

a) reject_unknown_sender_domain
b) reject_unauth_destination
c) reject_rbl_client
d) reject_blacklisted

<details><summary>Respuesta</summary>

**c) reject_rbl_client**

La restricción `reject_rbl_client` seguida del nombre de la lista negra (por ejemplo, `reject_rbl_client zen.spamhaus.org`) consulta listas negras en tiempo real (RBL - Realtime Blackhole List) y rechaza correo proveniente de direcciones IP que aparezcan en dichas listas.

</details>

### Pregunta 17

¿Cuál es la función del parámetro `relayhost` en main.cf de Postfix?

a) Define los dominios para los que se acepta relay
b) Define el servidor al que se reenvía todo el correo saliente
c) Define las redes autorizadas para hacer relay
d) Define el host de backup para correo entrante

<details><summary>Respuesta</summary>

**b) Define el servidor al que se reenvía todo el correo saliente**

El parámetro `relayhost` especifica un servidor SMTP al que Postfix enviará todo el correo saliente, en lugar de entregarlo directamente. Es útil cuando el servidor local no puede enviar correo directamente a Internet. La sintaxis típica es `relayhost = [smtp.proveedor.com]:587`.

</details>

### Pregunta 18

¿Qué parámetro de Postfix limita el tamaño máximo de un mensaje individual en bytes?

a) mailbox_size_limit
b) message_size_limit
c) max_message_size
d) smtp_size_limit

<details><summary>Respuesta</summary>

**b) message_size_limit**

El parámetro `message_size_limit` define el tamaño máximo en bytes que puede tener un mensaje individual. `mailbox_size_limit` limita el tamaño total del buzón del usuario, no de un mensaje individual.

</details>

### Pregunta 19

¿En qué directorio se almacenan las colas de correo de Postfix?

a) /var/mail/postfix/
b) /var/spool/postfix/
c) /var/lib/postfix/queue/
d) /etc/postfix/queue/

<details><summary>Respuesta</summary>

**b) /var/spool/postfix/**

Las colas de correo de Postfix se almacenan en `/var/spool/postfix/`, que contiene múltiples subdirectorios como `incoming/`, `active/`, `deferred/`, `bounce/` y `corrupt/` para organizar los mensajes según su estado en el proceso de entrega.

</details>

### Pregunta 20

¿Qué restricción de Postfix permite el envío de correo a usuarios que se han autenticado mediante SASL?

a) permit_auth_users
b) permit_sasl_authenticated
c) permit_authenticated
d) allow_sasl_users

<details><summary>Respuesta</summary>

**b) permit_sasl_authenticated**

La restricción `permit_sasl_authenticated` permite que los usuarios que se han autenticado correctamente mediante SASL envíen correo a través del servidor. Es fundamental para el servicio de submission (puerto 587) donde los clientes de correo se autentican.

</details>

### Pregunta 21

¿Qué comando muestra la cola de mensajes de Postfix pendientes de entrega?

<input type="text" class="fill-blank" data-answer="mailq" data-alt="postqueue -p" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mailq**

El comando `mailq` (o su equivalente `postqueue -p`) muestra la lista de mensajes pendientes en la cola de correo de Postfix, incluyendo el ID del mensaje, tamaño, fecha de llegada, remitente y razón del retraso.

</details>

### Pregunta 22

¿Qué comando regenera la base de datos de alias después de modificar /etc/aliases?

<input type="text" class="fill-blank" data-answer="newaliases" data-alt="postalias /etc/aliases" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**newaliases**

El comando `newaliases` regenera la base de datos hash `/etc/aliases.db` a partir del archivo de texto `/etc/aliases`. Es necesario ejecutarlo cada vez que se modifica el archivo de alias para que los cambios surtan efecto.

</details>

### Pregunta 23

¿Qué comando de Postfix muestra solo los parámetros de configuración que han sido modificados respecto a los valores por defecto?

<input type="text" class="fill-blank" data-answer="postconf -n" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**postconf -n**

El comando `postconf -n` muestra solo los parámetros que han sido modificados en main.cf. Es muy útil para revisar rápidamente la configuración personalizada del servidor sin verse abrumado por los cientos de parámetros por defecto que mostraría `postconf` sin opciones.

</details>

### Pregunta 24

¿Qué comando elimina un mensaje específico con ID "ABC123" de la cola de correo de Postfix?

<input type="text" class="fill-blank" data-answer="postsuper -d ABC123" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**postsuper -d ABC123**

El comando `postsuper -d` seguido del ID del mensaje lo elimina de la cola de correo. Para eliminar todos los mensajes se usa `postsuper -d ALL`. El ID del mensaje se puede obtener con `mailq` o `postqueue -p`.

</details>

### Pregunta 25

¿Qué comando verifica la configuración de Postfix buscando errores?

<input type="text" class="fill-blank" data-answer="postfix check" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**postfix check**

El comando `postfix check` verifica la configuración de Postfix, comprobando permisos de archivos, directorios y la validez general de la configuración. Reporta advertencias y errores que podrían causar problemas en el funcionamiento del servidor.

</details>
