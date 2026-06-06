---
title: "211.3 - Acceso a buzones"
tags: [lpic-2, examen-202, tema-211, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "211"
subtema: "211.3"
---

# 211.3 - Ejercicios: Acceso a buzones

### Pregunta 1

¿Cuáles son los puertos estándar para IMAP sin cifrar y con SSL/TLS?

a) 110 y 995
b) 143 y 993
c) 143 y 995
d) 110 y 993

<details><summary>Respuesta</summary>

**b) 143 y 993**

IMAP utiliza el puerto 143 para conexiones sin cifrar y el puerto 993 para conexiones SSL/TLS (IMAPS). Los puertos 110 y 995 corresponden a POP3 y POP3S respectivamente.
</details>

### Pregunta 2

¿Qué directiva de Dovecot define la ubicación de los buzones de correo?

a) mailbox_path
b) mail_home
c) mail_location
d) inbox_path

<details><summary>Respuesta</summary>

**c) mail_location**

La directiva `mail_location` en `/etc/dovecot/conf.d/10-mail.conf` define dónde busca Dovecot los buzones de correo. Los valores más comunes son `maildir:~/Maildir` para formato Maildir y `mbox:~/mail:INBOX=/var/mail/%u` para formato mbox.
</details>

### Pregunta 3

¿Qué valor de la directiva `ssl` en Dovecot obliga a que todas las conexiones usen cifrado?

a) ssl = yes
b) ssl = force
c) ssl = required
d) ssl = mandatory

<details><summary>Respuesta</summary>

**c) ssl = required**

`ssl = required` obliga a que todas las conexiones a Dovecot utilicen cifrado SSL/TLS. `ssl = yes` hace que SSL esté disponible pero sea opcional, y `ssl = no` lo deshabilita completamente.
</details>

### Pregunta 4

¿Cuál es la principal diferencia funcional entre IMAP y POP3?

a) IMAP es más rápido que POP3
b) IMAP mantiene el correo en el servidor, POP3 lo descarga al cliente
c) POP3 soporta carpetas y subcarpetas, IMAP no
d) IMAP solo funciona con cifrado, POP3 no requiere cifrado

<details><summary>Respuesta</summary>

**b) IMAP mantiene el correo en el servidor, POP3 lo descarga al cliente**

IMAP gestiona el correo en el servidor, permitiendo acceso desde múltiples dispositivos y gestión completa de carpetas. POP3 descarga el correo al cliente local, tras lo cual normalmente se elimina del servidor.
</details>

### Pregunta 5

¿Qué comando de Dovecot muestra solo los parámetros de configuración que difieren de los valores por defecto?

a) doveconf -a
b) doveconf -n
c) dovecot -c
d) doveadm config

<details><summary>Respuesta</summary>

**b) doveconf -n**

`doveconf -n` muestra solo los parámetros que han sido modificados respecto a los valores por defecto, lo que facilita revisar la configuración personalizada. `doveconf -a` muestra todos los parámetros, incluyendo los valores por defecto.
</details>

### Pregunta 6

¿En qué directorio se encuentra la configuración modular de Dovecot?

a) /etc/dovecot/modules/
b) /etc/dovecot/conf.d/
c) /etc/dovecot/config.d/
d) /etc/dovecot.d/

<details><summary>Respuesta</summary>

**b) /etc/dovecot/conf.d/**

La configuración modular de Dovecot se distribuye en archivos dentro del directorio `/etc/dovecot/conf.d/`. Cada archivo se encarga de un aspecto diferente: autenticación (10-auth.conf), correo (10-mail.conf), SSL (10-ssl.conf), etc.
</details>

### Pregunta 7

¿Qué formato de buzón soporta exclusivamente Courier-IMAP?

a) mbox
b) Maildir
c) mbox y Maildir
d) dbox

<details><summary>Respuesta</summary>

**b) Maildir**

Courier-IMAP solo soporta el formato Maildir. A diferencia de Dovecot, que soporta tanto mbox como Maildir, Courier-IMAP está diseñado específicamente para trabajar con buzones Maildir.
</details>

### Pregunta 8

¿Qué sintaxis especial se utiliza en Dovecot para indicar la ruta del certificado SSL?

a) ssl_cert = "/etc/ssl/certs/cert.pem"
b) ssl_cert = file:/etc/ssl/certs/cert.pem
c) ssl_cert = </etc/ssl/certs/cert.pem
d) ssl_cert = path(/etc/ssl/certs/cert.pem)

<details><summary>Respuesta</summary>

**c) ssl_cert = </etc/ssl/certs/cert.pem**

Dovecot utiliza la sintaxis `<` antes de la ruta del archivo para indicar que debe leer el contenido del archivo. Se escribe `ssl_cert = </etc/ssl/certs/cert.pem` (sin espacio entre `<` y la ruta).
</details>

### Pregunta 9

¿Qué mecanismo de autenticación de Dovecot se utiliza típicamente con conexiones SSL/TLS?

a) cram-md5
b) digest-md5
c) plain
d) ntlm

<details><summary>Respuesta</summary>

**c) plain**

El mecanismo `plain` envía las credenciales en texto plano, pero es seguro cuando se usa sobre una conexión SSL/TLS cifrada. Es el mecanismo más simple, compatible y ampliamente soportado. La directiva `disable_plaintext_auth = yes` garantiza que solo se use con conexiones cifradas.
</details>

### Pregunta 10

¿Qué protocolo utiliza Dovecot para actuar como agente de entrega local integrado con Postfix?

a) SMTP
b) LMTP
c) LDA
d) IMAP

<details><summary>Respuesta</summary>

**b) LMTP**

LMTP (Local Mail Transfer Protocol) es el protocolo que Dovecot ofrece para recibir correo de Postfix y entregarlo directamente a los buzones. Se configura en Postfix con `mailbox_transport = lmtp:unix:private/dovecot-lmtp`. LDA (Local Delivery Agent) es otro método pero LMTP es el recomendado.
</details>

### Pregunta 11

¿Qué archivo de Dovecot configura los servicios de escucha y puertos para IMAP, POP3 y LMTP?

a) /etc/dovecot/conf.d/10-auth.conf
b) /etc/dovecot/conf.d/10-mail.conf
c) /etc/dovecot/conf.d/10-master.conf
d) /etc/dovecot/conf.d/10-ssl.conf

<details><summary>Respuesta</summary>

**c) /etc/dovecot/conf.d/10-master.conf**

El archivo `10-master.conf` define los servicios de Dovecot, incluyendo los listeners para IMAP (143/993), POP3 (110/995) y LMTP. También configura los sockets Unix para la integración con Postfix (autenticación SASL y entrega LMTP).
</details>

### Pregunta 12

¿Cuáles son los puertos estándar para POP3 sin cifrar y con SSL/TLS?

a) 143 y 993
b) 110 y 995
c) 110 y 993
d) 25 y 465

<details><summary>Respuesta</summary>

**b) 110 y 995**

POP3 utiliza el puerto 110 para conexiones sin cifrar y el puerto 995 para conexiones SSL/TLS (POP3S). Los puertos 143 y 993 corresponden a IMAP e IMAPS respectivamente.
</details>

### Pregunta 13

¿Qué directiva de Dovecot impide que los usuarios se autentiquen en texto plano sin una conexión cifrada?

a) require_ssl_auth = yes
b) disable_plaintext_auth = yes
c) ssl_auth_only = yes
d) plain_auth_disabled = yes

<details><summary>Respuesta</summary>

**b) disable_plaintext_auth = yes**

La directiva `disable_plaintext_auth = yes` en `/etc/dovecot/conf.d/10-auth.conf` impide que los clientes envíen credenciales en texto plano a menos que la conexión esté cifrada con SSL/TLS. Es una medida de seguridad fundamental.
</details>

### Pregunta 14

¿Qué variable se sustituye por el nombre de usuario en la configuración de `mail_location` de Dovecot?

a) $USER
b) %n
c) %u
d) ${username}

<details><summary>Respuesta</summary>

**c) %u**

En Dovecot, `%u` se sustituye por el nombre completo del usuario (incluyendo dominio si existe). Por ejemplo, en `mail_location = mbox:~/mail:INBOX=/var/mail/%u`, el `%u` se reemplaza por el nombre del usuario que se autentica. La variable `%n` representa solo la parte del nombre sin dominio.
</details>

### Pregunta 15

¿Qué directiva en Postfix main.cf se utiliza para que Dovecot proporcione autenticación SASL?

a) smtpd_sasl_type = dovecot
b) sasl_backend = dovecot
c) auth_provider = dovecot
d) smtpd_auth_type = dovecot-sasl

<details><summary>Respuesta</summary>

**a) smtpd_sasl_type = dovecot**

La directiva `smtpd_sasl_type = dovecot` en Postfix indica que se usará Dovecot como backend de autenticación SASL. Se complementa con `smtpd_sasl_path = private/auth` que apunta al socket Unix de Dovecot y `smtpd_sasl_auth_enable = yes` para activar la autenticación.
</details>

### Pregunta 16

¿Qué archivo de configuración se utiliza para configurar Roundcube webmail?

a) /etc/roundcube/roundcube.conf
b) /etc/roundcube/config.inc.php
c) /etc/roundcube/main.cf
d) /etc/roundcube/settings.xml

<details><summary>Respuesta</summary>

**b) /etc/roundcube/config.inc.php**

El archivo principal de configuración de Roundcube es `config.inc.php`, donde se definen parámetros como el servidor IMAP (`$config['default_host']`), el puerto IMAP, el servidor SMTP y otros ajustes de la interfaz web.
</details>

### Pregunta 17

En Courier-IMAP, ¿qué archivo configura el demonio de autenticación?

a) /etc/courier/authd.conf
b) /etc/courier/authdaemonrc
c) /etc/courier/auth.conf
d) /etc/courier/pam.d/courier

<details><summary>Respuesta</summary>

**b) /etc/courier/authdaemonrc**

El archivo `/etc/courier/authdaemonrc` configura el demonio de autenticación de Courier (authdaemon), donde se especifican los módulos de autenticación a utilizar, como authpam, authldap, authuserdb, entre otros.
</details>

### Pregunta 18

¿Qué mecanismo de autenticación de Dovecot utiliza challenge-response y no requiere que la conexión esté cifrada con SSL?

a) plain
b) login
c) cram-md5
d) gssapi

<details><summary>Respuesta</summary>

**c) cram-md5**

CRAM-MD5 es un mecanismo de autenticación basado en challenge-response que no transmite la contraseña en texto plano por la red, por lo que no requiere obligatoriamente una conexión SSL/TLS. Sin embargo, los mecanismos `plain` y `login` sí requieren cifrado para ser seguros.
</details>

### Pregunta 19

¿Qué protocolo utilizan tanto SquirrelMail como Roundcube para acceder a los buzones del servidor de correo?

a) POP3
b) SMTP
c) IMAP
d) LMTP

<details><summary>Respuesta</summary>

**c) IMAP**

Tanto SquirrelMail como Roundcube son clientes webmail que se conectan al servidor de correo mediante IMAP para leer y gestionar los mensajes. No almacenan correo por sí mismos; son interfaces web que actúan como clientes IMAP frente al servidor.
</details>

### Pregunta 20

¿Qué directiva de Dovecot establece los protocolos de servicio habilitados?

a) services = imap pop3
b) protocols = imap pop3 lmtp
c) enable_protocols = imap,pop3
d) listen_services = imap pop3 lmtp

<details><summary>Respuesta</summary>

**b) protocols = imap pop3 lmtp**

La directiva `protocols` en el archivo principal `/etc/dovecot/dovecot.conf` define qué protocolos de acceso a buzones estarán activos. Los valores más comunes son `imap`, `pop3` y `lmtp`.
</details>

### Pregunta 21

¿Qué comando muestra los parámetros de configuración modificados respecto a los valores por defecto en Dovecot?

<input type="text" class="fill-blank" data-answer="doveconf -n" data-alt="doveconf -n" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**doveconf -n**

El comando `doveconf -n` muestra solo los parámetros que han sido modificados por el administrador, omitiendo los valores por defecto. Es muy útil para revisar rápidamente la configuración personalizada. En contraste, `doveconf -a` muestra todos los parámetros incluyendo los valores por defecto.
</details>

### Pregunta 22

¿Qué comando de Dovecot permite probar la autenticación de un usuario?

<input type="text" class="fill-blank" data-answer="doveadm auth test" data-alt="doveadm auth test usuario contraseña" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**doveadm auth test**

El comando `doveadm auth test usuario contraseña` verifica si las credenciales de un usuario son válidas según la configuración de autenticación de Dovecot. Es una herramienta esencial para la depuración de problemas de acceso a buzones.
</details>

### Pregunta 23

¿Qué comando muestra los usuarios actualmente conectados a Dovecot?

<input type="text" class="fill-blank" data-answer="doveadm who" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**doveadm who**

El comando `doveadm who` lista los usuarios que tienen sesiones activas en Dovecot, mostrando información como el nombre de usuario, la IP de conexión y el protocolo utilizado (IMAP o POP3).
</details>

### Pregunta 24

¿Qué comando se utiliza para ejecutar el asistente de configuración interactivo de SquirrelMail?

<input type="text" class="fill-blank" data-answer="/usr/share/squirrelmail/config/conf.pl" data-alt="conf.pl" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/usr/share/squirrelmail/config/conf.pl**

El script `conf.pl` es el asistente de configuración interactivo de SquirrelMail. Permite configurar parámetros como el servidor IMAP, el servidor SMTP, los plugins activos y otras opciones de la interfaz web de forma guiada.
</details>

### Pregunta 25

¿Qué comando de Dovecot muestra todos los parámetros de configuración, incluyendo los valores por defecto?

<input type="text" class="fill-blank" data-answer="doveconf -a" data-alt="doveconf -a" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**doveconf -a**

El comando `doveconf -a` muestra la lista completa de todos los parámetros de configuración de Dovecot, tanto los modificados como los que mantienen su valor por defecto. Es útil para inspeccionar la configuración completa del servidor.
</details>
