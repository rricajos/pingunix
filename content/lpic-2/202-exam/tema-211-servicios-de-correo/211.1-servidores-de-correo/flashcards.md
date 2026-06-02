---
title: "211.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "211.1"
---

# Flashcards: 211.1 - Servidores De Correo

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué componente del sistema de correo se encarga de transferir mensajes entre servidores?

</div>
<div class="flashcard-back">

**R:** b) MTA (Mail Transfer Agent). El MTA es responsable de transferir el correo entre servidores utilizando el protocolo SMTP. Ejemplos de MTA son Postfix, Sendmail y Exim. El MUA es el cliente de correo del usuario, el MDA entrega el correo al buzón local y el MSA recibe correo del MUA para su envío.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el puerto estándar para el envío de correo autenticado desde un cliente (submission)?

</div>
<div class="flashcard-back">

**R:** d) 587. El puerto 587 (submission) es el puerto estándar para que los clientes de correo (MUA) envíen correo al servidor con autenticación. El puerto 25 es para comunicación entre servidores MTA, y el puerto 465 es para SMTPS (SMTP sobre SSL/TLS).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Postfix define las redes autorizadas para usar el servidor como relay?

</div>
<div class="flashcard-back">

**R:** b) mynetworks. `mynetworks` en `/etc/postfix/main.cf` define las direcciones IP y redes que tienen permiso para enviar correo a través del servidor sin autenticación adicional. Una configuración incorrecta puede crear un open relay.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando se debe ejecutar después de modificar el archivo `/etc/aliases`?

</div>
<div class="flashcard-back">

**R:** c) newaliases. `newaliases` regenera la base de datos hash de alias (`/etc/aliases.db`) a partir del archivo de texto `/etc/aliases`. Sin ejecutar este comando, los cambios en el archivo de alias no tendrán efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando muestra solo los parámetros de Postfix que difieren de los valores por defecto?

</div>
<div class="flashcard-back">

**R:** c) postconf -n. `postconf -n` muestra solo los parámetros que han sido modificados respecto a sus valores por defecto, lo que facilita ver la configuración personalizada. `postconf -d` muestra todos los valores por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué restricción de Postfix se utiliza para prevenir que el servidor actúe como open relay?

</div>
<div class="flashcard-back">

**R:** b) reject_unauth_destination. `reject_unauth_destination` rechaza el correo destinado a dominios para los cuales el servidor no es el destino final ni tiene autorización de relay. Es la restricción fundamental para prevenir un open relay y debe incluirse en `smtpd_recipient_restrictions`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-007">
<div class="flashcard-front">

**P:** En Sendmail, ¿qué archivo se debe editar para realizar cambios de configuración?

</div>
<div class="flashcard-back">

**R:** b) /etc/mail/sendmail.mc. Se edita `sendmail.mc` (archivo de macros m4) y luego se genera `sendmail.cf` ejecutando `m4 sendmail.mc > sendmail.cf`. El archivo `sendmail.cf` nunca se edita directamente debido a su complejidad extrema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de Postfix elimina todos los mensajes de la cola de correo?

</div>
<div class="flashcard-back">

**R:** b) postsuper -d ALL. `postsuper -d ALL` elimina todos los mensajes de la cola de correo de Postfix. Para eliminar un mensaje específico se usa `postsuper -d ID_MENSAJE`. `postqueue` se usa para listar (`-p`) o forzar el envío (`-f`), no para eliminar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué parámetro de main.cf define el nombre de dominio completamente cualificado (FQDN) del servidor de correo?

</div>
<div class="flashcard-back">

**R:** c) myhostname. `myhostname` define el FQDN del servidor de correo (por ejemplo, `correo.ejemplo.com`). `mydomain` define solo el dominio (`ejemplo.com`), y `myorigin` define el dominio que aparece en las direcciones de correo saliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando fuerza a Postfix a intentar reenviar inmediatamente todos los mensajes de la cola?

</div>
<div class="flashcard-back">

**R:** b) postqueue -f. `postqueue -f` fuerza a Postfix a intentar entregar inmediatamente todos los mensajes que están en la cola. Es equivalente al comando `sendmail -q` en Sendmail. `postsuper -r ALL` reencola los mensajes pero no fuerza su envío inmediato.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Postfix en main.cf define los dominios para los cuales el servidor acepta correo como destino final?

</div>
<div class="flashcard-back">

**R:** c) mydestination. El parámetro `mydestination` define la lista de dominios para los cuales Postfix acepta correo como destino final (entrega local). Si un mensaje llega dirigido a un dominio que no está en `mydestination` ni en otras tablas de destino, Postfix lo rechaza o lo reenvía según la configuración de relay.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué archivo de Postfix define los servicios y procesos que componen la arquitectura del servidor?

</div>
<div class="flashcard-back">

**R:** b) /etc/postfix/master.cf. El archivo `/etc/postfix/master.cf` define los servicios de Postfix (smtp, submission, pickup, cleanup, etc.) y sus propiedades como tipo, estado de chroot, número máximo de procesos y opciones adicionales. Es donde se configuran servicios como el puerto de submission (587).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Postfix define el dominio que aparece en las direcciones de correo saliente (campo "From")?

</div>
<div class="flashcard-back">

**R:** c) myorigin. El parámetro `myorigin` define el dominio que Postfix añade a las direcciones de correo locales que no incluyen dominio. Por ejemplo, si `myorigin = ejemplo.com`, un correo enviado por el usuario `juan` aparecerá como `juan@ejemplo.com` en el campo "From".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué comando de Sendmail se utiliza para regenerar el archivo `sendmail.cf` a partir del archivo de macros `sendmail.mc`?

</div>
<div class="flashcard-back">

**R:** c) m4 /etc/mail/sendmail.mc > /etc/mail/sendmail.cf. El procesador de macros `m4` se utiliza para generar el archivo `sendmail.cf` a partir de `sendmail.mc`. Nunca se edita directamente `sendmail.cf` debido a su complejidad. Alternativamente, en algunos sistemas se puede ejecutar `make` desde `/etc/mail/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué proceso de Postfix se encarga de recibir correo entrante vía protocolo SMTP?

</div>
<div class="flashcard-back">

**R:** b) smtpd. El proceso `smtpd` es el demonio SMTP de Postfix que escucha conexiones entrantes y recibe correo de otros servidores o clientes. El proceso `smtp` (sin la "d") es el cliente SMTP que se encarga de enviar correo a otros servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué restricción de Postfix rechaza correo de clientes que aparecen en listas negras (RBL)?

</div>
<div class="flashcard-back">

**R:** c) reject_rbl_client. La restricción `reject_rbl_client` seguida del nombre de la lista negra (por ejemplo, `reject_rbl_client zen.spamhaus.org`) consulta listas negras en tiempo real (RBL - Realtime Blackhole List) y rechaza correo proveniente de direcciones IP que aparezcan en dichas listas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es la función del parámetro `relayhost` en main.cf de Postfix?

</div>
<div class="flashcard-back">

**R:** b) Define el servidor al que se reenvía todo el correo saliente. El parámetro `relayhost` especifica un servidor SMTP al que Postfix enviará todo el correo saliente, en lugar de entregarlo directamente. Es útil cuando el servidor local no puede enviar correo directamente a Internet. La sintaxis típica es `relayhost = [smtp.proveedor.com]:587`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Postfix limita el tamaño máximo de un mensaje individual en bytes?

</div>
<div class="flashcard-back">

**R:** b) message_size_limit. El parámetro `message_size_limit` define el tamaño máximo en bytes que puede tener un mensaje individual. `mailbox_size_limit` limita el tamaño total del buzón del usuario, no de un mensaje individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-019">
<div class="flashcard-front">

**P:** ¿En qué directorio se almacenan las colas de correo de Postfix?

</div>
<div class="flashcard-back">

**R:** b) /var/spool/postfix/. Las colas de correo de Postfix se almacenan en `/var/spool/postfix/`, que contiene múltiples subdirectorios como `incoming/`, `active/`, `deferred/`, `bounce/` y `corrupt/` para organizar los mensajes según su estado en el proceso de entrega.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué restricción de Postfix permite el envío de correo a usuarios que se han autenticado mediante SASL?

</div>
<div class="flashcard-back">

**R:** b) permit_sasl_authenticated. La restricción `permit_sasl_authenticated` permite que los usuarios que se han autenticado correctamente mediante SASL envíen correo a través del servidor. Es fundamental para el servicio de submission (puerto 587) donde los clientes de correo se autentican.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la cola de mensajes de Postfix pendientes de entrega?

</div>
<div class="flashcard-back">

**R:** mailq. El comando `mailq` (o su equivalente `postqueue -p`) muestra la lista de mensajes pendientes en la cola de correo de Postfix, incluyendo el ID del mensaje, tamaño, fecha de llegada, remitente y razón del retraso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando regenera la base de datos de alias después de modificar /etc/aliases?

</div>
<div class="flashcard-back">

**R:** newaliases. El comando `newaliases` regenera la base de datos hash `/etc/aliases.db` a partir del archivo de texto `/etc/aliases`. Es necesario ejecutarlo cada vez que se modifica el archivo de alias para que los cambios surtan efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando de Postfix muestra solo los parámetros de configuración que han sido modificados respecto a los valores por defecto?

</div>
<div class="flashcard-back">

**R:** postconf -n. El comando `postconf -n` muestra solo los parámetros que han sido modificados en main.cf. Es muy útil para revisar rápidamente la configuración personalizada del servidor sin verse abrumado por los cientos de parámetros por defecto que mostraría `postconf` sin opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando elimina un mensaje específico con ID "ABC123" de la cola de correo de Postfix?

</div>
<div class="flashcard-back">

**R:** postsuper -d ABC123. El comando `postsuper -d` seguido del ID del mensaje lo elimina de la cola de correo. Para eliminar todos los mensajes se usa `postsuper -d ALL`. El ID del mensaje se puede obtener con `mailq` o `postqueue -p`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando verifica la configuración de Postfix buscando errores?

</div>
<div class="flashcard-back">

**R:** postfix check. El comando `postfix check` verifica la configuración de Postfix, comprobando permisos de archivos, directorios y la validez general de la configuración. Reporta advertencias y errores que podrían causar problemas en el funcionamiento del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El puerto 25 es para comunicación entre servidores MTA. El puerto 587 es para qu...

</div>
<div class="flashcard-back">

**R:** El puerto 25 es para comunicación entre servidores MTA. El puerto 587 es para que los clientes (MUA) envíen correo con autenticación. Memoriza estos puertos y sus funciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `mynetworks` define qué IPs pueden usar el servidor como relay. Una configuració...

</div>
<div class="flashcard-back">

**R:** `mynetworks` define qué IPs pueden usar el servidor como relay. Una configuración incorrecta puede convertir el servidor en un open relay (retransmisión abierta), lo cual es un problema de seguridad grave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Siempre que se modifique `/etc/aliases`, hay que ejecutar `newaliases` para que ...

</div>
<div class="flashcard-back">

**R:** Siempre que se modifique `/etc/aliases`, hay que ejecutar `newaliases` para que los cambios surtan efecto. Esto genera el archivo hash `/etc/aliases.db`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Nunca se edita directamente `sendmail.cf`. Se edita `sendmail.mc` y se genera el...

</div>
<div class="flashcard-back">

**R:** Nunca se edita directamente `sendmail.cf`. Se edita `sendmail.mc` y se genera el .cf con m4. Postfix es mucho más sencillo de configurar y es el foco principal del examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `master`?

</div>
<div class="flashcard-back">

**R:** Proceso principal, gestiona los demás

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `smtp`?

</div>
<div class="flashcard-back">

**R:** Envía correo a otros servidores

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `pickup`?

</div>
<div class="flashcard-back">

**R:** Recoge correo de la cola local (maildrop)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `cleanup`?

</div>
<div class="flashcard-back">

**R:** Procesa y limpia los mensajes entrantes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `myorigin`?

</div>
<div class="flashcard-back">

**R:** Dominio que aparece en el campo "From"

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Postfix?

</div>
<div class="flashcard-back">

**R:** Postfix es el MTA más utilizado en Linux. Es modular, seguro y fácil de configurar en comparación con Sendmail.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Aliases de correo?

</div>
<div class="flashcard-back">

**R:** Los alias permiten redirigir correo de un usuario a otro.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.1">
</div>

<div class="flashcard" data-id="211.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Sendmail (conceptos básicos)?

</div>
<div class="flashcard-back">

**R:** Sendmail es el MTA histórico de Unix. Aunque Postfix es más popular, conviene conocer los conceptos básicos de Sendmail.

</div>
</div>

---

