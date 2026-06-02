---
title: "211.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "211.2"
---

# Flashcards: 211.2 - Gestion De Entrega

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cuáles son los tres subdirectorios estándar de un buzón Maildir?

</div>
<div class="flashcard-back">

**R:** b) new/, cur/, tmp/. Un buzón Maildir tiene tres subdirectorios: `new/` (mensajes nuevos no leídos), `cur/` (mensajes leídos o procesados) y `tmp/` (mensajes en proceso de entrega). Cada mensaje se almacena como un archivo individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué ventaja tiene Maildir sobre mbox para acceso concurrente?

</div>
<div class="flashcard-back">

**R:** b) Maildir no requiere bloqueo de archivos. Como cada mensaje es un archivo individual en Maildir, no hay necesidad de bloquear un archivo compartido para escribir. En mbox, todos los mensajes están en un solo archivo y se necesita bloqueo para evitar corrupción durante el acceso concurrente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-003">
<div class="flashcard-front">

**P:** En una regla Procmail, ¿qué indica la barra final (`/`) en la ruta del destino?

</div>
<div class="flashcard-back">

**R:** b) Que el destino es un directorio Maildir. En Procmail, una ruta que termina en `/` indica que el destino es un buzón Maildir. Sin la barra final, Procmail trata la ruta como un archivo mbox. Por ejemplo, `.spam/` entrega al Maildir y `.spam` entrega a un archivo mbox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué flag de Procmail se utiliza para hacer una copia del mensaje y continuar procesando reglas?

</div>
<div class="flashcard-back">

**R:** c) :0 c. El flag `c` (copy) hace que Procmail entregue una copia del mensaje al destino indicado y continúe evaluando las reglas siguientes con el mensaje original. Sin este flag, la primera regla que coincida entrega el mensaje y detiene el procesamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué acción de Sieve se utiliza para mover un mensaje a una carpeta específica?

</div>
<div class="flashcard-back">

**R:** b) fileinto "carpeta". La acción `fileinto` de Sieve mueve el mensaje a la carpeta especificada. Es una de las acciones más utilizadas en los scripts Sieve para organizar el correo automáticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué herramienta actúa como interfaz entre Postfix y los filtros de contenido como SpamAssassin y ClamAV?

</div>
<div class="flashcard-back">

**R:** b) amavisd-new. amavisd-new es un intermediario entre el MTA (Postfix) y los filtros de contenido (antivirus y antispam). Recibe correo del MTA en el puerto 10024, lo pasa por los filtros configurados y lo devuelve al MTA en el puerto 10025.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para actualizar las firmas de virus de ClamAV?

</div>
<div class="flashcard-back">

**R:** c) freshclam. `freshclam` es el comando que descarga y actualiza las bases de datos de firmas de virus de ClamAV. Normalmente se ejecuta como un demonio o mediante cron para mantener las firmas actualizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Postfix se configura para activar el uso de buzones virtuales?

</div>
<div class="flashcard-back">

**R:** b) virtual_mailbox_domains. `virtual_mailbox_domains` en main.cf define los dominios para los que Postfix gestiona buzones virtuales. Se complementa con `virtual_mailbox_maps` (mapa de buzones), `virtual_mailbox_base` (directorio base) y `virtual_uid_maps`/`virtual_gid_maps` (propietario).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-009">
<div class="flashcard-front">

**P:** ¿Dónde se almacenan las reglas de filtrado Sieve del usuario cuando se usa Dovecot?

</div>
<div class="flashcard-back">

**R:** c) ~/.dovecot.sieve. Las reglas Sieve del usuario se almacenan por defecto en `~/.dovecot.sieve`. La ubicación se puede cambiar en la configuración de Dovecot mediante la directiva `sieve` en el archivo de configuración del plugin Sieve.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué parámetro en SpamAssassin define la puntuación mínima para considerar un mensaje como spam?

</div>
<div class="flashcard-back">

**R:** b) required_score. `required_score` en `/etc/spamassassin/local.cf` define la puntuación mínima a partir de la cual un mensaje se clasifica como spam. El valor por defecto es 5.0. Los mensajes que superan esta puntuación se marcan con cabeceras de spam.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Postfix en main.cf se utiliza para configurar el formato Maildir como buzón del usuario?

</div>
<div class="flashcard-back">

**R:** b) home_mailbox = Maildir/. El parámetro `home_mailbox = Maildir/` en main.cf indica a Postfix que entregue el correo en formato Maildir dentro del directorio home del usuario. La barra final es obligatoria para indicar que se trata de un directorio Maildir y no de un archivo mbox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-012">
<div class="flashcard-front">

**P:** ¿En qué puerto recibe amavisd-new el correo de Postfix para su procesamiento antivirus y antispam?

</div>
<div class="flashcard-back">

**R:** c) 10024. amavisd-new recibe el correo de Postfix en el puerto 10024, lo procesa a través de los filtros configurados (SpamAssassin, ClamAV, etc.) y lo devuelve a Postfix en el puerto 10025. Esta configuración se establece mediante `content_filter = smtp-amavis:[127.0.0.1]:10024` en main.cf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué acción de Sieve se utiliza para rechazar un mensaje con un mensaje de error al remitente?

</div>
<div class="flashcard-back">

**R:** c) reject. La acción `reject` de Sieve rechaza el mensaje y envía una notificación de rechazo al remitente con el texto especificado. A diferencia de `discard`, que elimina el mensaje silenciosamente, `reject` informa al remitente del motivo del rechazo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué variable se define en `.procmailrc` para especificar el directorio base donde Procmail entregará el correo?

</div>
<div class="flashcard-back">

**R:** b) MAILDIR. La variable `MAILDIR` en `.procmailrc` define el directorio base donde Procmail entregará el correo. La variable `DEFAULT` complementa a `MAILDIR` indicando el buzón predeterminado. Ejemplo: `MAILDIR=$HOME/Maildir` y `DEFAULT=$MAILDIR/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué componente de ClamAV se encarga de la actualización automática de las firmas de virus?

</div>
<div class="flashcard-back">

**R:** c) freshclam. `freshclam` es el componente de ClamAV responsable de descargar y actualizar las bases de datos de firmas de virus desde los servidores de ClamAV. Puede ejecutarse como demonio para actualizaciones automáticas periódicas o manualmente bajo demanda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué directiva de Postfix se utiliza para especificar un mapa de buzones virtuales?

</div>
<div class="flashcard-back">

**R:** b) virtual_mailbox_maps. La directiva `virtual_mailbox_maps` en main.cf especifica el mapa que asocia direcciones de correo virtuales con ubicaciones de buzones en el sistema de archivos. Se complementa con `virtual_mailbox_domains`, `virtual_mailbox_base`, `virtual_uid_maps` y `virtual_gid_maps`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué tipo de formato de buzón almacena todos los mensajes en un único archivo?

</div>
<div class="flashcard-back">

**R:** b) mbox. El formato mbox almacena todos los mensajes de un buzón en un único archivo secuencial, normalmente ubicado en `/var/mail/usuario`. Requiere bloqueo del archivo para acceso concurrente y su rendimiento se degrada con buzones grandes, a diferencia de Maildir donde cada mensaje es un archivo individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué acción de Sieve elimina un mensaje sin enviar notificación al remitente?

</div>
<div class="flashcard-back">

**R:** c) discard. La acción `discard` de Sieve elimina el mensaje silenciosamente sin enviar ninguna notificación al remitente. A diferencia de `reject`, que informa al remitente del rechazo, `discard` simplemente descarta el mensaje como si nunca hubiera llegado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando de Postfix se utiliza para generar la base de datos hash a partir de un archivo de mapa como `/etc/postfix/vmailbox`?

</div>
<div class="flashcard-back">

**R:** b) postmap /etc/postfix/vmailbox. El comando `postmap` genera la base de datos hash (archivo `.db`) a partir de un archivo de texto de mapa de Postfix. Es necesario ejecutarlo cada vez que se modifica un archivo de mapa como `vmailbox`, `transport` o `virtual` para que los cambios surtan efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directiva en el archivo de configuración de SpamAssassin modifica el asunto de los mensajes detectados como spam?

</div>
<div class="flashcard-back">

**R:** b) rewrite_header Subject. La directiva `rewrite_header Subject` en `/etc/spamassassin/local.cf` permite añadir un prefijo al asunto de los mensajes identificados como spam. Por ejemplo, `rewrite_header Subject [SPAM]` añade el texto "[SPAM]" al principio del asunto original.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para actualizar las firmas de virus de ClamAV?

</div>
<div class="flashcard-back">

**R:** freshclam. El comando `freshclam` descarga las últimas definiciones de virus desde los servidores de ClamAV y actualiza la base de datos local. Se recomienda ejecutarlo periódicamente o como demonio para mantener las firmas actualizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando genera la base de datos hash del archivo de mapa de transporte de Postfix?

</div>
<div class="flashcard-back">

**R:** postmap /etc/postfix/transport. El comando `postmap /etc/postfix/transport` genera el archivo de base de datos `/etc/postfix/transport.db` a partir del archivo de texto. Es necesario ejecutarlo cada vez que se modifica el archivo de transporte para que Postfix reconozca los cambios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué directiva se utiliza en Postfix main.cf para integrar amavisd-new como filtro de contenido?

</div>
<div class="flashcard-back">

**R:** content_filter = smtp-amavis:[127.0.0.1]:10024. Esta directiva en main.cf indica a Postfix que reenvíe todo el correo al filtro de contenido amavisd-new en la dirección 127.0.0.1 puerto 10024. Después del procesamiento, amavisd-new devuelve el correo a Postfix en el puerto 10025.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué directiva de Postfix configura Procmail como agente de entrega local?

</div>
<div class="flashcard-back">

**R:** mailbox_command = /usr/bin/procmail. La directiva `mailbox_command` en main.cf de Postfix permite especificar un programa externo como agente de entrega local. Estableciendo `mailbox_command = /usr/bin/procmail`, Postfix delegará la entrega local de correo a Procmail, que aplicará las reglas definidas en `.procmailrc`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de Postfix genera la base de datos del archivo de buzones virtuales /etc/postfix/vmailbox?

</div>
<div class="flashcard-back">

**R:** postmap /etc/postfix/vmailbox. El comando `postmap /etc/postfix/vmailbox` genera la base de datos hash necesaria para que Postfix pueda consultar eficientemente el mapa de buzones virtuales. Cada vez que se modifica el archivo de texto, se debe ejecutar `postmap` para regenerar la base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Maildir es el formato recomendado para servidores modernos. Cada mensaje es un a...

</div>
<div class="flashcard-back">

**R:** Maildir es el formato recomendado para servidores modernos. Cada mensaje es un archivo individual en los subdirectorios `new/`, `cur/` y `tmp/`. No requiere bloqueo de archivos y funciona bien con NFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La barra final (`/`) en el destino es crítica: indica Maildir. Sin barra, Procma...

</div>
<div class="flashcard-back">

**R:** La barra final (`/`) en el destino es crítica: indica Maildir. Sin barra, Procmail trata el destino como un archivo mbox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: amavisd-new actúa como intermediario entre Postfix y los filtros de contenido. E...

</div>
<div class="flashcard-back">

**R:** amavisd-new actúa como intermediario entre Postfix y los filtros de contenido. El correo se envía al puerto 10024, se procesa y se devuelve al puerto 10025.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/procmailrc`?

</div>
<div class="flashcard-back">

**R:** Configuración global (todos los usuarios)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `~/.procmailrc`?

</div>
<div class="flashcard-back">

**R:** Configuración personal del usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `:0`?

</div>
<div class="flashcard-back">

**R:** Inicio de regla (sin flags adicionales)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `:0 c`?

</div>
<div class="flashcard-back">

**R:** Copia: entrega una copia y continúa procesando

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `:0 f`?

</div>
<div class="flashcard-back">

**R:** Filtro: pasa el mensaje por un programa y continúa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Procmail?

</div>
<div class="flashcard-back">

**R:** Procmail es un MDA y filtro de correo local que permite clasificar y procesar correo según reglas definidas por el usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Sieve?

</div>
<div class="flashcard-back">

**R:** Sieve es un lenguaje estándar de filtrado de correo del lado del servidor, generalmente integrado con Dovecot o Cyrus.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Usuarios virtuales?

</div>
<div class="flashcard-back">

**R:** Los usuarios virtuales permiten gestionar buzones de correo sin necesidad de crear cuentas del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.2">
</div>

<div class="flashcard" data-id="211.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Mapas de transporte de Postfix?

</div>
<div class="flashcard-back">

**R:** Los transport maps permiten definir cómo y a dónde se entrega el correo según el destino:

</div>
</div>

---

