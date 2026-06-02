---
title: "211.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "211.3"
---

# Flashcards: 211.3 - Acceso A Buzones

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cuáles son los puertos estándar para IMAP sin cifrar y con SSL/TLS?

</div>
<div class="flashcard-back">

**R:** b) 143 y 993. IMAP utiliza el puerto 143 para conexiones sin cifrar y el puerto 993 para conexiones SSL/TLS (IMAPS). Los puertos 110 y 995 corresponden a POP3 y POP3S respectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué directiva de Dovecot define la ubicación de los buzones de correo?

</div>
<div class="flashcard-back">

**R:** c) mail_location. La directiva `mail_location` en `/etc/dovecot/conf.d/10-mail.conf` define dónde busca Dovecot los buzones de correo. Los valores más comunes son `maildir:~/Maildir` para formato Maildir y `mbox:~/mail:INBOX=/var/mail/%u` para formato mbox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué valor de la directiva `ssl` en Dovecot obliga a que todas las conexiones usen cifrado?

</div>
<div class="flashcard-back">

**R:** c) ssl = required. `ssl = required` obliga a que todas las conexiones a Dovecot utilicen cifrado SSL/TLS. `ssl = yes` hace que SSL esté disponible pero sea opcional, y `ssl = no` lo deshabilita completamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es la principal diferencia funcional entre IMAP y POP3?

</div>
<div class="flashcard-back">

**R:** b) IMAP mantiene el correo en el servidor, POP3 lo descarga al cliente. IMAP gestiona el correo en el servidor, permitiendo acceso desde múltiples dispositivos y gestión completa de carpetas. POP3 descarga el correo al cliente local, tras lo cual normalmente se elimina del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando de Dovecot muestra solo los parámetros de configuración que difieren de los valores por defecto?

</div>
<div class="flashcard-back">

**R:** b) doveconf -n. `doveconf -n` muestra solo los parámetros que han sido modificados respecto a los valores por defecto, lo que facilita revisar la configuración personalizada. `doveconf -a` muestra todos los parámetros, incluyendo los valores por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-006">
<div class="flashcard-front">

**P:** ¿En qué directorio se encuentra la configuración modular de Dovecot?

</div>
<div class="flashcard-back">

**R:** b) /etc/dovecot/conf.d/. La configuración modular de Dovecot se distribuye en archivos dentro del directorio `/etc/dovecot/conf.d/`. Cada archivo se encarga de un aspecto diferente: autenticación (10-auth.conf), correo (10-mail.conf), SSL (10-ssl.conf), etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué formato de buzón soporta exclusivamente Courier-IMAP?

</div>
<div class="flashcard-back">

**R:** b) Maildir. Courier-IMAP solo soporta el formato Maildir. A diferencia de Dovecot, que soporta tanto mbox como Maildir, Courier-IMAP está diseñado específicamente para trabajar con buzones Maildir.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué sintaxis especial se utiliza en Dovecot para indicar la ruta del certificado SSL?

</div>
<div class="flashcard-back">

**R:** c) ssl_cert = </etc/ssl/certs/cert.pem. Dovecot utiliza la sintaxis `<` antes de la ruta del archivo para indicar que debe leer el contenido del archivo. Se escribe `ssl_cert = </etc/ssl/certs/cert.pem` (sin espacio entre `<` y la ruta).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué mecanismo de autenticación de Dovecot se utiliza típicamente con conexiones SSL/TLS?

</div>
<div class="flashcard-back">

**R:** c) plain. El mecanismo `plain` envía las credenciales en texto plano, pero es seguro cuando se usa sobre una conexión SSL/TLS cifrada. Es el mecanismo más simple, compatible y ampliamente soportado. La directiva `disable_plaintext_auth = yes` garantiza que solo se use con conexiones cifradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué protocolo utiliza Dovecot para actuar como agente de entrega local integrado con Postfix?

</div>
<div class="flashcard-back">

**R:** b) LMTP. LMTP (Local Mail Transfer Protocol) es el protocolo que Dovecot ofrece para recibir correo de Postfix y entregarlo directamente a los buzones. Se configura en Postfix con `mailbox_transport = lmtp:unix:private/dovecot-lmtp`. LDA (Local Delivery Agent) es otro método pero LMTP es el recomendado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué archivo de Dovecot configura los servicios de escucha y puertos para IMAP, POP3 y LMTP?

</div>
<div class="flashcard-back">

**R:** c) /etc/dovecot/conf.d/10-master.conf. El archivo `10-master.conf` define los servicios de Dovecot, incluyendo los listeners para IMAP (143/993), POP3 (110/995) y LMTP. También configura los sockets Unix para la integración con Postfix (autenticación SASL y entrega LMTP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-012">
<div class="flashcard-front">

**P:** ¿Cuáles son los puertos estándar para POP3 sin cifrar y con SSL/TLS?

</div>
<div class="flashcard-back">

**R:** b) 110 y 995. POP3 utiliza el puerto 110 para conexiones sin cifrar y el puerto 995 para conexiones SSL/TLS (POP3S). Los puertos 143 y 993 corresponden a IMAP e IMAPS respectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué directiva de Dovecot impide que los usuarios se autentiquen en texto plano sin una conexión cifrada?

</div>
<div class="flashcard-back">

**R:** b) disable_plaintext_auth = yes. La directiva `disable_plaintext_auth = yes` en `/etc/dovecot/conf.d/10-auth.conf` impide que los clientes envíen credenciales en texto plano a menos que la conexión esté cifrada con SSL/TLS. Es una medida de seguridad fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué variable se sustituye por el nombre de usuario en la configuración de `mail_location` de Dovecot?

</div>
<div class="flashcard-back">

**R:** c) %u. En Dovecot, `%u` se sustituye por el nombre completo del usuario (incluyendo dominio si existe). Por ejemplo, en `mail_location = mbox:~/mail:INBOX=/var/mail/%u`, el `%u` se reemplaza por el nombre del usuario que se autentica. La variable `%n` representa solo la parte del nombre sin dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué directiva en Postfix main.cf se utiliza para que Dovecot proporcione autenticación SASL?

</div>
<div class="flashcard-back">

**R:** a) smtpd_sasl_type = dovecot. La directiva `smtpd_sasl_type = dovecot` en Postfix indica que se usará Dovecot como backend de autenticación SASL. Se complementa con `smtpd_sasl_path = private/auth` que apunta al socket Unix de Dovecot y `smtpd_sasl_auth_enable = yes` para activar la autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué archivo de configuración se utiliza para configurar Roundcube webmail?

</div>
<div class="flashcard-back">

**R:** b) /etc/roundcube/config.inc.php. El archivo principal de configuración de Roundcube es `config.inc.php`, donde se definen parámetros como el servidor IMAP (`$config['default_host']`), el puerto IMAP, el servidor SMTP y otros ajustes de la interfaz web.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-017">
<div class="flashcard-front">

**P:** En Courier-IMAP, ¿qué archivo configura el demonio de autenticación?

</div>
<div class="flashcard-back">

**R:** b) /etc/courier/authdaemonrc. El archivo `/etc/courier/authdaemonrc` configura el demonio de autenticación de Courier (authdaemon), donde se especifican los módulos de autenticación a utilizar, como authpam, authldap, authuserdb, entre otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué mecanismo de autenticación de Dovecot utiliza challenge-response y no requiere que la conexión esté cifrada con SSL?

</div>
<div class="flashcard-back">

**R:** c) cram-md5. CRAM-MD5 es un mecanismo de autenticación basado en challenge-response que no transmite la contraseña en texto plano por la red, por lo que no requiere obligatoriamente una conexión SSL/TLS. Sin embargo, los mecanismos `plain` y `login` sí requieren cifrado para ser seguros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué protocolo utilizan tanto SquirrelMail como Roundcube para acceder a los buzones del servidor de correo?

</div>
<div class="flashcard-back">

**R:** c) IMAP. Tanto SquirrelMail como Roundcube son clientes webmail que se conectan al servidor de correo mediante IMAP para leer y gestionar los mensajes. No almacenan correo por sí mismos; son interfaces web que actúan como clientes IMAP frente al servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directiva de Dovecot establece los protocolos de servicio habilitados?

</div>
<div class="flashcard-back">

**R:** b) protocols = imap pop3 lmtp. La directiva `protocols` en el archivo principal `/etc/dovecot/dovecot.conf` define qué protocolos de acceso a buzones estarán activos. Los valores más comunes son `imap`, `pop3` y `lmtp`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando muestra los parámetros de configuración modificados respecto a los valores por defecto en Dovecot?

</div>
<div class="flashcard-back">

**R:** doveconf -n. El comando `doveconf -n` muestra solo los parámetros que han sido modificados por el administrador, omitiendo los valores por defecto. Es muy útil para revisar rápidamente la configuración personalizada. En contraste, `doveconf -a` muestra todos los parámetros incluyendo los valores por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando de Dovecot permite probar la autenticación de un usuario?

</div>
<div class="flashcard-back">

**R:** doveadm auth test. El comando `doveadm auth test usuario contraseña` verifica si las credenciales de un usuario son válidas según la configuración de autenticación de Dovecot. Es una herramienta esencial para la depuración de problemas de acceso a buzones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando muestra los usuarios actualmente conectados a Dovecot?

</div>
<div class="flashcard-back">

**R:** doveadm who. El comando `doveadm who` lista los usuarios que tienen sesiones activas en Dovecot, mostrando información como el nombre de usuario, la IP de conexión y el protocolo utilizado (IMAP o POP3).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para ejecutar el asistente de configuración interactivo de SquirrelMail?

</div>
<div class="flashcard-back">

**R:** /usr/share/squirrelmail/config/conf.pl. El script `conf.pl` es el asistente de configuración interactivo de SquirrelMail. Permite configurar parámetros como el servidor IMAP, el servidor SMTP, los plugins activos y otras opciones de la interfaz web de forma guiada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de Dovecot muestra todos los parámetros de configuración, incluyendo los valores por defecto?

</div>
<div class="flashcard-back">

**R:** doveconf -a. El comando `doveconf -a` muestra la lista completa de todos los parámetros de configuración de Dovecot, tanto los modificados como los que mantienen su valor por defecto. Es útil para inspeccionar la configuración completa del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Memoriza los puertos: IMAP = 143 (sin cifrar) / 993 (SSL/TLS); POP3 = 110 (sin c...

</div>
<div class="flashcard-back">

**R:** Memoriza los puertos: IMAP = 143 (sin cifrar) / 993 (SSL/TLS); POP3 = 110 (sin cifrar) / 995 (SSL/TLS). IMAP mantiene el correo en el servidor, POP3 lo descarga al cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La directiva `mail_location` define dónde busca Dovecot los buzones de correo. L...

</div>
<div class="flashcard-back">

**R:** La directiva `mail_location` define dónde busca Dovecot los buzones de correo. Los formatos más comunes son `maildir:~/Maildir` y `mbox:~/mail:INBOX=/var/mail/%u`. La variable `%u` se sustituye por el nombre de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `ssl = required` obliga a que todas las conexiones usen cifrado. Nota la sintaxi...

</div>
<div class="flashcard-back">

**R:** `ssl = required` obliga a que todas las conexiones usen cifrado. Nota la sintaxis especial de los certificados: `ssl_cert = </ruta` (con `<` antes de la ruta, sin espacio).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Tanto SquirrelMail como Roundcube son clientes webmail que se conectan al servid...

</div>
<div class="flashcard-back">

**R:** Tanto SquirrelMail como Roundcube son clientes webmail que se conectan al servidor de correo vía IMAP. No almacenan correo por sí mismos; son interfaces web para acceder a los buzones del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `plain`?

</div>
<div class="flashcard-back">

**R:** Texto plano (requiere SSL/TLS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `login`?

</div>
<div class="flashcard-back">

**R:** Similar a plain, compatible con Outlook

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `cram-md5`?

</div>
<div class="flashcard-back">

**R:** Challenge-response (no requiere SSL)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `digest-md5`?

</div>
<div class="flashcard-back">

**R:** Digest-based (más seguro que CRAM)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `required`?

</div>
<div class="flashcard-back">

**R:** SSL obligatorio para todas las conexiones

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Dovecot?

</div>
<div class="flashcard-back">

**R:** Dovecot es el servidor IMAP/POP3 más utilizado en Linux. Es seguro, rápido y fácil de configurar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Courier-IMAP?

</div>
<div class="flashcard-back">

**R:** Courier-IMAP es una alternativa a Dovecot para servicios IMAP/POP3. Es menos utilizado actualmente pero aparece en el temario LPIC-2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="211.3">
</div>

<div class="flashcard" data-id="211.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Webmail?

</div>
<div class="flashcard-back">

**R:** El acceso webmail permite a los usuarios consultar su correo a través de un navegador web.

</div>
</div>

---

