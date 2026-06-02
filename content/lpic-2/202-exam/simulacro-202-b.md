---
title: "Simulacro Examen 202 - B"
tags:
  - lpic-2
  - examen-202
  - simulacro
tipo: simulacro
certificacion: lpic-2
examen: "202"
---

# Simulacro B - Examen 202

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="202-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="207.1" data-correct="c">

### Pregunta 1 (Subtema 207.1)

¿Qué directiva de BIND define qué servidores pueden realizar transferencias de zona completas desde un servidor DNS autoritativo?

- [ ] a) `allow-query`
- [ ] b) `allow-recursion`
- [ ] c) `allow-transfer`
- [ ] d) `allow-update`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `allow-transfer`**

La directiva `allow-transfer` controla qué hosts pueden solicitar transferencias de zona (AXFR/IXFR). Por seguridad, debe restringirse exclusivamente a los servidores secundarios autorizados, ya que una transferencia de zona revela todos los registros del dominio.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="207.1" data-correct="b">

### Pregunta 2 (Subtema 207.1)

Un administrador observa que tras modificar una zona DNS, los servidores secundarios no recogen los cambios. ¿Cuál es la causa más probable?

- [ ] a) El archivo de zona tiene permisos incorrectos
- [ ] b) No se incrementó el número de serie (serial) del registro SOA
- [ ] c) El servidor secundario no tiene `allow-recursion` habilitado
- [ ] d) Falta la directiva `zone-refresh` en named.conf

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) No se incrementó el número de serie (serial) del registro SOA**

Los servidores secundarios comparan el número de serie del SOA para determinar si la zona ha cambiado. Si el serial no se incrementa después de modificar los registros, los secundarios asumen que la zona está actualizada y no inician una transferencia. El formato recomendado es YYYYMMDDNN.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="207.1" data-correct="d">

### Pregunta 3 (Subtema 207.1)

¿Qué comando comprueba la sintaxis de un archivo de zona DNS antes de cargarlo en BIND?

- [ ] a) `named-checkconf /var/named/example.com.zone`
- [ ] b) `bind-check example.com`
- [ ] c) `rndc validate example.com`
- [ ] d) `named-checkzone example.com /var/named/example.com.zone`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `named-checkzone example.com /var/named/example.com.zone`**

El comando `named-checkzone` verifica la sintaxis y la integridad de un archivo de zona DNS. Requiere dos argumentos: el nombre de la zona y la ruta al archivo de zona. `named-checkconf` verifica la sintaxis de `named.conf`, no de los archivos de zona.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="207.2" data-correct="b">

### Pregunta 4 (Subtema 207.2)

¿Qué tipo de registro DNS se utiliza para delegar una subzona a un servidor de nombres diferente?

- [ ] a) SOA
- [ ] b) NS
- [ ] c) CNAME
- [ ] d) PTR

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) NS**

Los registros NS (Name Server) se utilizan para delegar la autoridad de una subzona a otros servidores de nombres. Por ejemplo, para delegar `sub.example.com`, se añaden registros NS en la zona `example.com` que apunten a los servidores DNS autoritativos de la subzona, junto con registros A de tipo glue si los servidores están dentro de la propia subzona delegada.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="207.2" data-correct="c">

### Pregunta 5 (Subtema 207.2)

En un archivo de zona DNS, ¿qué efecto tiene el símbolo `@` al inicio de un registro?

- [ ] a) Indica un comentario
- [ ] b) Hace referencia al servidor DNS primario
- [ ] c) Representa el nombre del dominio definido en la directiva `$ORIGIN` o en la declaración de zona
- [ ] d) Es un alias para localhost

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Representa el nombre del dominio definido en la directiva `$ORIGIN` o en la declaración de zona**

El símbolo `@` es una abreviatura que se sustituye por el valor actual de `$ORIGIN`, que por defecto es el nombre de la zona. Así, `@ IN A 1.2.3.4` en la zona `example.com` equivale a `example.com. IN A 1.2.3.4`.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="207.2" data-correct="a">

### Pregunta 6 (Subtema 207.2)

Un administrador necesita configurar un registro DNS para que el correo de `example.com` se entregue a `mail.example.com` con la máxima prioridad. ¿Cuál es el registro correcto?

- [ ] a) `example.com. IN MX 10 mail.example.com.`
- [ ] b) `example.com. IN MX mail.example.com. 10`
- [ ] c) `example.com. IN MAIL 10 mail.example.com.`
- [ ] d) `mail.example.com. IN MX 10 example.com.`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `example.com. IN MX 10 mail.example.com.`**

El formato del registro MX es: nombre del dominio, clase IN, tipo MX, prioridad (número menor = mayor prioridad) y el servidor de correo. El valor 10 indica máxima prioridad si es el más bajo entre todos los registros MX del dominio. Un registro MX nunca debe apuntar a un CNAME.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="207.3" data-correct="b">

### Pregunta 7 (Subtema 207.3)

¿Qué registro DNS permite a un dominio especificar qué servidores están autorizados para enviar correo en su nombre?

- [ ] a) DKIM
- [ ] b) SPF (publicado como registro TXT)
- [ ] c) DMARC
- [ ] d) MX

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) SPF (publicado como registro TXT)**

SPF (Sender Policy Framework) se publica como un registro TXT en el DNS del dominio. Define qué direcciones IP o servidores están autorizados a enviar correo para ese dominio. Un ejemplo: `v=spf1 mx ip4:192.168.1.0/24 -all`. El mecanismo `-all` rechaza correo de fuentes no autorizadas.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="207.3" data-correct="d">

### Pregunta 8 (Subtema 207.3)

¿Qué comando regenera la base de datos hash de alias de correo de Postfix después de modificar `/etc/aliases`?

- [ ] a) `postmap /etc/aliases`
- [ ] b) `postfix reload-aliases`
- [ ] c) `postalias --rebuild`
- [ ] d) `newaliases`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `newaliases`**

El comando `newaliases` regenera la base de datos de alias de correo a partir del archivo `/etc/aliases`. Es equivalente a `postalias /etc/aliases`. Sin regenerar esta base de datos, Postfix no reconocerá los cambios realizados en el archivo de texto plano.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="207.3" data-correct="a">

### Pregunta 9 (Subtema 207.3)

¿Qué directiva de Postfix define el nombre del host que se utiliza en el saludo SMTP (banner EHLO/HELO)?

- [ ] a) `myhostname`
- [ ] b) `mydomain`
- [ ] c) `smtp_helo_name`
- [ ] d) `myorigin`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `myhostname`**

La directiva `myhostname` en `/etc/postfix/main.cf` especifica el FQDN del servidor de correo, que se usa en el banner SMTP y como parte del saludo EHLO. `mydomain` define el dominio padre y `myorigin` define el dominio que aparece en el correo enviado localmente.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="208.1" data-correct="d">

### Pregunta 10 (Subtema 208.1)

¿Qué directiva de Apache 2.4 permite servir diferentes sitios web según el nombre de host en la cabecera HTTP `Host`?

- [ ] a) `Listen`
- [ ] b) `ServerRoot`
- [ ] c) `DocumentRoot`
- [ ] d) `ServerName` dentro de un bloque `<VirtualHost *:80>`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `ServerName` dentro de un bloque `<VirtualHost *:80>`**

Los Virtual Hosts basados en nombre permiten alojar múltiples sitios en una misma dirección IP. Apache compara la cabecera `Host` de la petición HTTP con la directiva `ServerName` (y `ServerAlias`) de cada bloque `<VirtualHost>` para determinar qué sitio servir. Si ningún bloque coincide, se usa el primer VirtualHost definido.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="208.1" data-correct="a">

### Pregunta 11 (Subtema 208.1)

Un administrador ejecuta `apachectl -M` y observa `rewrite_module (shared)`. ¿Qué significa `shared`?

- [ ] a) El módulo se cargó dinámicamente mediante `LoadModule`
- [ ] b) El módulo está compartido entre varios procesos Apache
- [ ] c) El módulo está disponible pero no activo
- [ ] d) El módulo se compiló estáticamente en el binario de Apache

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) El módulo se cargó dinámicamente mediante `LoadModule`**

La indicación `(shared)` significa que el módulo fue cargado como un objeto compartido (.so) mediante la directiva `LoadModule` en la configuración. Un módulo `(static)` está compilado directamente en el binario de Apache y no puede descargarse sin recompilar.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="208.2" data-correct="b">

### Pregunta 12 (Subtema 208.2)

¿Qué directiva de Apache se utiliza para especificar la clave privada del servidor en una configuración HTTPS?

- [ ] a) `SSLCertificateFile`
- [ ] b) `SSLCertificateKeyFile`
- [ ] c) `SSLPrivateKey`
- [ ] d) `SSLKeyPath`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `SSLCertificateKeyFile`**

La directiva `SSLCertificateKeyFile` apunta al archivo que contiene la clave privada del servidor (normalmente `privkey.pem`). `SSLCertificateFile` contiene el certificado público (y la cadena de intermedios). Ambas directivas son obligatorias para configurar HTTPS en Apache.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="208.2" data-correct="c">

### Pregunta 13 (Subtema 208.2)

¿Qué comando de OpenSSL permite visualizar los detalles de un certificado X.509 en formato legible?

- [ ] a) `openssl req -text -in cert.pem`
- [ ] b) `openssl verify -text cert.pem`
- [ ] c) `openssl x509 -text -noout -in cert.pem`
- [ ] d) `openssl s_client -showcert cert.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `openssl x509 -text -noout -in cert.pem`**

El subcomando `x509` con la opción `-text` muestra los detalles del certificado en formato legible, incluyendo emisor, sujeto, fechas de validez, extensiones y algoritmo de firma. La opción `-noout` suprime la salida del certificado codificado en PEM, mostrando solo el texto legible.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="208.3" data-correct="a">

### Pregunta 14 (Subtema 208.3)

¿Qué directiva de Squid define el orden de evaluación cuando una petición coincide con varias ACLs?

- [ ] a) `http_access` (se evalúa de arriba hacia abajo, la primera regla que coincide se aplica)
- [ ] b) `acl_priority`
- [ ] c) `access_order`
- [ ] d) `http_access` (se evalúan todas las reglas y gana la más restrictiva)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `http_access` (se evalúa de arriba hacia abajo, la primera regla que coincide se aplica)**

Las reglas `http_access` en Squid se procesan secuencialmente de arriba hacia abajo. La primera regla que coincide con la petición se aplica y no se evalúan las siguientes. Por eso es fundamental el orden: las reglas de denegación específicas deben ir antes que las de permiso generales, y la última regla debe ser `http_access deny all`.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="208.3" data-correct="d">

### Pregunta 15 (Subtema 208.3)

Un administrador quiere que Squid bloquee el acceso a todos los sitios que contengan la palabra "gambling" en la URL. ¿Qué tipo de ACL es la más adecuada?

- [ ] a) `acl bloquear dst gambling`
- [ ] b) `acl bloquear dstdomain .gambling`
- [ ] c) `acl bloquear srcdom_regex gambling`
- [ ] d) `acl bloquear url_regex -i gambling`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `acl bloquear url_regex -i gambling`**

La ACL de tipo `url_regex` aplica una expresión regular a la URL completa solicitada. La opción `-i` hace la comparación insensible a mayúsculas/minúsculas. A continuación se añadiría `http_access deny bloquear`. `dstdomain` solo compara contra el dominio destino, no la URL completa.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="208.4" data-correct="c">

### Pregunta 16 (Subtema 208.4)

¿Qué directiva de Nginx permite definir páginas de error personalizadas?

- [ ] a) `custom_error`
- [ ] b) `error_redirect`
- [ ] c) `error_page`
- [ ] d) `http_error`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `error_page`**

La directiva `error_page` permite asociar códigos de error HTTP a URIs personalizadas. Por ejemplo, `error_page 404 /custom_404.html;` sirve un archivo personalizado cuando se produce un error 404. También puede redirigir a una URL externa: `error_page 502 https://backup.example.com;`.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="209.1" data-correct="b">

### Pregunta 17 (Subtema 209.1)

¿Qué parámetro de smb.conf permite que usuarios no autenticados (guest) accedan a un recurso compartido sin proporcionar contraseña?

- [ ] a) `public = yes`
- [ ] b) `guest ok = yes`
- [ ] c) `anonymous = yes`
- [ ] d) `no_auth = yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `guest ok = yes`**

La directiva `guest ok = yes` (sinónimo de `public = yes`, por lo que ambas son técnicamente correctas) permite el acceso de invitados sin autenticación. Sin embargo, en el examen LPIC-2, `guest ok` es la forma canónica. También se necesita `map to guest = Bad User` en la sección `[global]` para mapear usuarios inexistentes a la cuenta de invitado.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="209.1" data-correct="c">

### Pregunta 18 (Subtema 209.1)

¿Qué comando se utiliza para añadir un usuario al backend de contraseñas de Samba?

- [ ] a) `useradd -s /bin/samba usuario`
- [ ] b) `samba-adduser usuario`
- [ ] c) `smbpasswd -a usuario`
- [ ] d) `pdbedit --add-user usuario`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `smbpasswd -a usuario`**

El comando `smbpasswd -a` añade un usuario a la base de datos de contraseñas de Samba (tdbsam). El usuario debe existir previamente como usuario del sistema. La opción `-a` es necesaria para añadir un nuevo usuario; sin ella, `smbpasswd` solo cambia la contraseña de un usuario existente en Samba.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="209.1" data-correct="d">

### Pregunta 19 (Subtema 209.1)

¿Qué comando verifica la corrección sintáctica del archivo `smb.conf` y muestra un resumen de la configuración activa?

- [ ] a) `smbclient --check`
- [ ] b) `smbd -t`
- [ ] c) `samba --validate`
- [ ] d) `testparm`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `testparm`**

El comando `testparm` analiza el archivo `smb.conf`, reporta errores de sintaxis y muestra la configuración efectiva tras aplicar los valores por defecto. Es una herramienta esencial para depurar problemas de configuración de Samba. Con la opción `-s` omite la pausa interactiva.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="209.2" data-correct="a">

### Pregunta 20 (Subtema 209.2)

¿Qué opción en `/etc/exports` fuerza que las operaciones de escritura se completen en disco antes de responder al cliente NFS?

- [ ] a) `sync`
- [ ] b) `flush`
- [ ] c) `write-through`
- [ ] d) `direct`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `sync`**

La opción `sync` garantiza que el servidor NFS confirme las operaciones de escritura solo después de que los datos se hayan escrito físicamente en disco. Es el valor por defecto en las versiones modernas de nfs-utils. La opción `async` mejora el rendimiento pero arriesga la pérdida de datos si el servidor falla antes de escribir en disco.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="210.1" data-correct="b">

### Pregunta 21 (Subtema 210.1)

¿Qué parámetro de configuración de Dovecot define los protocolos que el servidor ofrecerá a los clientes?

- [ ] a) `mail_protocols`
- [ ] b) `protocols`
- [ ] c) `listen_protocols`
- [ ] d) `service_protocols`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `protocols`**

La directiva `protocols` en la configuración de Dovecot (normalmente en `/etc/dovecot/dovecot.conf`) define qué protocolos se habilitan. Por ejemplo, `protocols = imap pop3 lmtp` habilita IMAP, POP3 y LMTP. Si se omite un protocolo, Dovecot no escuchará en los puertos correspondientes.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="210.1" data-correct="c">

### Pregunta 22 (Subtema 210.1)

¿Cuál es la diferencia fundamental entre IMAP y POP3 en cuanto al manejo de correos?

- [ ] a) IMAP solo funciona con TLS, mientras que POP3 funciona sin cifrado
- [ ] b) POP3 permite acceso concurrente desde múltiples dispositivos
- [ ] c) IMAP mantiene los correos en el servidor permitiendo acceso desde múltiples dispositivos, mientras que POP3 los descarga y normalmente los elimina del servidor
- [ ] d) POP3 soporta carpetas en el servidor, IMAP no

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) IMAP mantiene los correos en el servidor permitiendo acceso desde múltiples dispositivos, mientras que POP3 los descarga y normalmente los elimina del servidor**

IMAP (puerto 143, o 993 con TLS) sincroniza el estado del buzón entre servidor y cliente, soportando carpetas, búsquedas en servidor y acceso concurrente. POP3 (puerto 110, o 995 con TLS) descarga los mensajes al cliente y, por defecto, los elimina del servidor, siendo más adecuado para acceso desde un único dispositivo.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="210.2" data-correct="b">

### Pregunta 23 (Subtema 210.2)

¿Qué directiva de Postfix define las redes desde las que el servidor acepta reenviar correo (relay)?

- [ ] a) `relay_domains`
- [ ] b) `mynetworks`
- [ ] c) `smtpd_relay_restrictions`
- [ ] d) `trusted_networks`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `mynetworks`**

La directiva `mynetworks` lista las redes IP de confianza cuyos clientes pueden enviar correo a través del servidor sin autenticación adicional. Por ejemplo, `mynetworks = 127.0.0.0/8, 10.0.0.0/24`. Configurar este valor de forma demasiado permisiva puede convertir el servidor en un open relay.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="210.2" data-correct="d">

### Pregunta 24 (Subtema 210.2)

¿Qué comando muestra la cola de correos pendientes de entrega en Postfix junto con su tamaño y destinatario?

- [ ] a) `postfix queue`
- [ ] b) `postcat -q`
- [ ] c) `mailq -v`
- [ ] d) `mailq`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `mailq`**

El comando `mailq` (equivalente a `postqueue -p`) muestra la cola de correos de Postfix, incluyendo el ID del mensaje, tamaño, hora de llegada, remitente y destinatario. Para ver el contenido de un mensaje específico se usa `postcat -q ID_mensaje`. Para forzar el reenvío de la cola se usa `postqueue -f`.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="210.3" data-correct="a">

### Pregunta 25 (Subtema 210.3)

¿Qué formato de buzón de correo almacena cada mensaje en un archivo individual dentro de subdirectorios `new/`, `cur/` y `tmp/`?

- [ ] a) Maildir
- [ ] b) mbox
- [ ] c) MH
- [ ] d) MMDF

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Maildir**

El formato Maildir almacena cada mensaje como un archivo individual, organizado en subdirectorios `new/` (mensajes no leídos), `cur/` (mensajes leídos) y `tmp/` (mensajes en proceso de entrega). A diferencia de mbox (que usa un solo archivo para todo el buzón), Maildir no requiere bloqueo de archivos y es más resistente a la corrupción.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="210.3" data-correct="c">

### Pregunta 26 (Subtema 210.3)

¿Qué componente de Dovecot se encarga de recibir correos desde un MTA (como Postfix) para entregarlos al buzón del usuario?

- [ ] a) `imap-login`
- [ ] b) `pop3`
- [ ] c) `lmtp` o `dovecot-lda`
- [ ] d) `auth-worker`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `lmtp` o `dovecot-lda`**

Dovecot proporciona dos agentes de entrega local: `dovecot-lda` (LDA, Local Delivery Agent) invocado como programa externo, y el servicio `lmtp` (Local Mail Transfer Protocol) que actúa como un servidor LMTP. Ambos permiten aplicar filtros Sieve al correo entrante antes de depositarlo en el buzón del usuario.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="210.4" data-correct="b">

### Pregunta 27 (Subtema 210.4)

¿Qué protocolo utiliza Sieve para gestionar filtros de correo en el servidor sin necesidad de acceder por IMAP?

- [ ] a) SMTP
- [ ] b) ManageSieve (puerto 4190)
- [ ] c) LMTP
- [ ] d) POP3

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) ManageSieve (puerto 4190)**

ManageSieve es un protocolo dedicado que permite a los clientes de correo cargar, modificar y activar scripts Sieve en el servidor de forma remota, escuchando en el puerto 4190. Dovecot implementa este protocolo mediante el servicio `managesieve`. Los scripts Sieve permiten reglas como redirigir, archivar o rechazar correos automáticamente.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="210.4" data-correct="d">

### Pregunta 28 (Subtema 210.4)

¿Qué directiva de Postfix permite usar Dovecot SASL para autenticar a los clientes que desean enviar correo a través del servidor?

- [ ] a) `smtpd_sasl_type = cyrus`
- [ ] b) `smtpd_auth_method = dovecot`
- [ ] c) `smtp_sasl_auth_enable = yes`
- [ ] d) `smtpd_sasl_type = dovecot`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `smtpd_sasl_type = dovecot`**

La directiva `smtpd_sasl_type = dovecot` configura Postfix para utilizar el servicio de autenticación SASL de Dovecot en lugar de Cyrus SASL. Se complementa con `smtpd_sasl_path = private/auth` (la ruta al socket Unix de Dovecot) y `smtpd_sasl_auth_enable = yes` para activar la autenticación.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="211.1" data-correct="c">

### Pregunta 29 (Subtema 211.1)

¿Qué comando de OpenLDAP permite buscar entradas en el directorio LDAP desde la línea de comandos?

- [ ] a) `ldapquery`
- [ ] b) `ldapfind`
- [ ] c) `ldapsearch`
- [ ] d) `slapcat`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `ldapsearch`**

El comando `ldapsearch` realiza consultas contra un servidor LDAP. Por ejemplo, `ldapsearch -x -b "dc=example,dc=com" "(uid=admin)"` busca el usuario admin. La opción `-x` usa autenticación simple, `-b` especifica la base de búsqueda y el filtro se escribe entre paréntesis.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="211.1" data-correct="a">

### Pregunta 30 (Subtema 211.1)

¿Qué comando se utiliza para exportar todo el contenido de una base de datos OpenLDAP a un archivo LDIF sin necesidad de que el servicio slapd esté en ejecución?

- [ ] a) `slapcat`
- [ ] b) `ldapsearch -x -b "" -s sub`
- [ ] c) `ldapexport`
- [ ] d) `slapd --dump`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `slapcat`**

El comando `slapcat` accede directamente a la base de datos de OpenLDAP (sin pasar por el servicio slapd) y genera la salida en formato LDIF. Es ideal para copias de seguridad ya que puede ejecutarse con el servicio detenido. Su contraparte para importar datos es `slapadd`.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="211.2" data-correct="b">

### Pregunta 31 (Subtema 211.2)

¿Qué módulo de PAM verifica si la cuenta del usuario no ha expirado y si las restricciones de contraseña se cumplen?

- [ ] a) `pam_unix.so` (tipo auth)
- [ ] b) `pam_unix.so` (tipo account)
- [ ] c) `pam_limits.so`
- [ ] d) `pam_env.so`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `pam_unix.so` (tipo account)**

El tipo `account` en PAM se encarga de la gestión de cuentas: verifica si la cuenta está bloqueada, si ha expirado, si la contraseña necesita cambiarse, y si el acceso está permitido en el horario actual. El tipo `auth` se encarga de la verificación de credenciales, y `session` de la configuración del entorno.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="211.2" data-correct="d">

### Pregunta 32 (Subtema 211.2)

En un archivo de configuración PAM, ¿qué efecto tiene el control `requisite`?

- [ ] a) Si el módulo falla, continúa evaluando los siguientes módulos antes de denegar
- [ ] b) El resultado del módulo se ignora por completo
- [ ] c) Si el módulo tiene éxito, se detiene inmediatamente y permite el acceso
- [ ] d) Si el módulo falla, se deniega inmediatamente sin evaluar los módulos restantes

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Si el módulo falla, se deniega inmediatamente sin evaluar los módulos restantes**

El control `requisite` provoca un fallo inmediato: si el módulo no se satisface, PAM deniega el acceso sin procesar los módulos siguientes de la pila. Esto contrasta con `required`, que marca el fallo pero continúa evaluando los módulos restantes antes de devolver la denegación final.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="211.3" data-correct="c">

### Pregunta 33 (Subtema 211.3)

¿Qué archivo de configuración controla el comportamiento del cliente SSSD (System Security Services Daemon)?

- [ ] a) `/etc/ldap.conf`
- [ ] b) `/etc/nsswitch.conf`
- [ ] c) `/etc/sssd/sssd.conf`
- [ ] d) `/etc/pam.d/sssd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/etc/sssd/sssd.conf`**

El archivo `/etc/sssd/sssd.conf` es la configuración principal de SSSD. Define los dominios de autenticación (LDAP, Active Directory, FreeIPA), las opciones de caché y los servicios habilitados (nss, pam). Debe tener permisos 600 para que SSSD lo acepte, ya que puede contener credenciales.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="211.3" data-correct="a">

### Pregunta 34 (Subtema 211.3)

¿Qué archivo del sistema se modifica para que la resolución de nombres de usuario consulte primero los archivos locales y luego SSSD?

- [ ] a) `/etc/nsswitch.conf`
- [ ] b) `/etc/sssd/sssd.conf`
- [ ] c) `/etc/pam.d/common-auth`
- [ ] d) `/etc/resolv.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/etc/nsswitch.conf`**

El archivo `/etc/nsswitch.conf` (Name Service Switch) define el orden de las fuentes para la resolución de información del sistema. Para integrar SSSD, se configura: `passwd: files sss` y `group: files sss`, lo que indica que primero se consultan los archivos locales (`/etc/passwd`, `/etc/group`) y luego SSSD.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="212.1" data-correct="a">

### Pregunta 35 (Subtema 212.1)

¿Qué comando de iptables guarda las reglas actuales en un archivo para que persistan tras un reinicio?

- [ ] a) `iptables-save > /etc/iptables/rules.v4`
- [ ] b) `iptables --export /etc/iptables/rules.v4`
- [ ] c) `iptables -P save`
- [ ] d) `service iptables commit`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `iptables-save > /etc/iptables/rules.v4`**

El comando `iptables-save` vuelca todas las reglas activas en formato texto a la salida estándar. Redirigido a un archivo (como `/etc/iptables/rules.v4` en Debian o `/etc/sysconfig/iptables` en Red Hat), las reglas se restauran automáticamente al arrancar mediante `iptables-restore` o el servicio correspondiente.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="212.1" data-correct="d">

### Pregunta 36 (Subtema 212.1)

Un administrador necesita permitir tráfico de retorno de conexiones ya establecidas en iptables. ¿Qué regla cumple este objetivo?

- [ ] a) `iptables -A INPUT -m state --state NEW -j ACCEPT`
- [ ] b) `iptables -A INPUT -m conntrack --ctstate RELATED -j ACCEPT`
- [ ] c) `iptables -A INPUT -m state --state INVALID -j ACCEPT`
- [ ] d) `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT`**

El módulo `conntrack` con `--ctstate ESTABLISHED,RELATED` permite paquetes que pertenecen a conexiones ya establecidas (ESTABLISHED) y conexiones relacionadas (RELATED), como las respuestas ICMP o conexiones FTP de datos. Esta regla es fundamental en un firewall stateful y generalmente se coloca al inicio de la cadena INPUT para mayor eficiencia.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="212.2" data-correct="a">

### Pregunta 37 (Subtema 212.2)

¿Qué directiva de vsftpd limita el rango de puertos que el servidor puede asignar a las conexiones de datos en modo pasivo?

- [ ] a) `pasv_min_port` y `pasv_max_port`
- [ ] b) `passive_port_range`
- [ ] c) `data_port_min` y `data_port_max`
- [ ] d) `ftp_data_port`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `pasv_min_port` y `pasv_max_port`**

Las directivas `pasv_min_port` y `pasv_max_port` definen el rango de puertos que vsftpd utilizará para las conexiones de datos en modo pasivo. Esto es esencial para configurar firewalls, ya que permite abrir solo un rango específico de puertos en lugar de todos los puertos altos. Por ejemplo: `pasv_min_port=40000` y `pasv_max_port=40100`.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="212.3" data-correct="d">

### Pregunta 38 (Subtema 212.3)

¿Qué algoritmo de clave SSH se recomienda actualmente por su seguridad y rendimiento?

- [ ] a) DSA
- [ ] b) RSA de 1024 bits
- [ ] c) ECDSA
- [ ] d) Ed25519

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Ed25519**

Ed25519, basado en la curva Edwards25519, ofrece alta seguridad con claves compactas (256 bits) y un rendimiento superior en la generación y verificación de firmas. DSA está obsoleto desde OpenSSH 7.0, RSA requiere al menos 2048 bits (preferiblemente 4096), y ECDSA, aunque válido, puede tener preocupaciones sobre las curvas NIST.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="212.4" data-correct="b">

### Pregunta 39 (Subtema 212.4)

¿Qué herramienta escanea el sistema en busca de rootkits y archivos sospechosos modificados?

- [ ] a) `nmap`
- [ ] b) `chkrootkit`
- [ ] c) `tripwire`
- [ ] d) `lynis`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `chkrootkit`**

`chkrootkit` es una herramienta que examina el sistema en busca de signos de rootkits conocidos, comprobando binarios del sistema, interfaces de red en modo promiscuo, archivos ocultos sospechosos y módulos del kernel cargados. Otra herramienta similar es `rkhunter`. `tripwire` verifica integridad de archivos y `nmap` escanea puertos.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="212.4" data-correct="c">

### Pregunta 40 (Subtema 212.4)

En la configuración de fail2ban, ¿qué define el parámetro `findtime`?

- [ ] a) El tiempo que fail2ban espera antes de iniciar el monitoreo
- [ ] b) La duración del baneo
- [ ] c) La ventana de tiempo en la que se cuentan los intentos fallidos (maxretry)
- [ ] d) El intervalo de comprobación de los archivos de log

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) La ventana de tiempo en la que se cuentan los intentos fallidos (maxretry)**

`findtime` define el período durante el cual se acumulan los intentos fallidos. Si se alcanzan `maxretry` intentos fallidos dentro de `findtime` segundos, la IP se banea durante `bantime` segundos. Por ejemplo, `findtime = 600` y `maxretry = 5` significa que 5 intentos fallidos en 10 minutos activan el baneo.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="212.5" data-correct="a">

### Pregunta 41 (Subtema 212.5)

¿Qué directiva de OpenVPN especifica que el archivo de configuración es para un cliente y no para un servidor?

- [ ] a) `client`
- [ ] b) `mode client`
- [ ] c) `tls-client`
- [ ] d) `remote-mode`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `client`**

La directiva `client` es un atajo que equivale a combinar `pull` y `tls-client`. Indica que la instancia OpenVPN actúa como cliente: aceptará las directivas de configuración enviadas por el servidor (push) y actuará como parte TLS-cliente en el handshake. El servidor usa la directiva `server` como su equivalente.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="207.1" data-correct="c">

### Pregunta 42 (Subtema 207.1)

¿Qué tipo de registro DNSSEC contiene la firma digital de un conjunto de registros (RRset) de una zona?

- [ ] a) DNSKEY
- [ ] b) DS
- [ ] c) RRSIG
- [ ] d) NSEC

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) RRSIG**

El registro RRSIG (Resource Record Signature) contiene la firma criptográfica de un conjunto de registros del mismo tipo (RRset). Cada RRset en una zona firmada tiene su correspondiente RRSIG. El registro DNSKEY contiene la clave pública para verificar las firmas, y el registro DS enlaza la confianza entre zona padre e hija.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="207.2" data-correct="d">

### Pregunta 43 (Subtema 207.2)

¿Qué tipo de registro DNS se usa para la resolución inversa de una dirección IPv6?

- [ ] a) AAAA
- [ ] b) A6
- [ ] c) IN-ADDR
- [ ] d) PTR en la zona `ip6.arpa`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) PTR en la zona `ip6.arpa`**

La resolución inversa de IPv6 usa registros PTR en la zona `ip6.arpa`. La dirección IPv6 se expande completamente y se invierte nibble a nibble (cada carácter hexadecimal separado por puntos). Por ejemplo, `2001:db8::1` se resuelve en la zona `1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa`.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="208.4" data-correct="a">

### Pregunta 44 (Subtema 208.4)

¿Qué directiva de Nginx envía la señal para recargar la configuración sin detener el servicio?

- [ ] a) `nginx -s reload`
- [ ] b) `nginx -s reconfig`
- [ ] c) `nginx -k graceful`
- [ ] d) `nginx --reload`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `nginx -s reload`**

El comando `nginx -s reload` envía la señal SIGHUP al proceso master de Nginx, que recarga la configuración, abre nuevos procesos worker con la nueva configuración y cierra gracefully los procesos worker antiguos cuando terminan de atender sus conexiones actuales. Otros valores de `-s`: `stop` (cierre inmediato), `quit` (cierre graceful), `reopen` (reabrir logs).

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="210.1" data-correct="d">

### Pregunta 45 (Subtema 210.1)

¿Qué directiva de Dovecot establece la ubicación del buzón de correo de los usuarios?

- [ ] a) `mail_home`
- [ ] b) `mailbox_path`
- [ ] c) `default_mail_env`
- [ ] d) `mail_location`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `mail_location`**

La directiva `mail_location` define el formato y la ubicación de los buzones. Por ejemplo, `mail_location = maildir:~/Maildir` indica formato Maildir en el subdirectorio `Maildir` del home del usuario, y `mail_location = mbox:~/mail:INBOX=/var/mail/%u` indica formato mbox. Si no se especifica, Dovecot intenta autodetectar el formato.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="210.2" data-correct="b">

### Pregunta 46 (Subtema 210.2)

¿Qué directiva de Postfix especifica los dominios para los que el servidor es el destino final de entrega?

- [ ] a) `mynetworks`
- [ ] b) `mydestination`
- [ ] c) `relay_domains`
- [ ] d) `virtual_mailbox_domains`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `mydestination`**

La directiva `mydestination` lista los dominios para los que Postfix acepta correo como destino final (entrega local). Normalmente incluye `$myhostname`, `localhost.$mydomain` y `localhost`. Si un dominio no está en esta lista ni en `virtual_mailbox_domains`, Postfix rechazará el correo para ese dominio (o lo reenviará si está en `relay_domains`).

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="211.1" data-correct="c">

### Pregunta 47 (Subtema 211.1)

¿Qué comando importa datos en formato LDIF a un servidor OpenLDAP en ejecución?

- [ ] a) `slapadd`
- [ ] b) `ldapimport`
- [ ] c) `ldapadd`
- [ ] d) `ldapinsert`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `ldapadd`**

El comando `ldapadd` (equivalente a `ldapmodify -a`) conecta al servidor LDAP y añade entradas a partir de un archivo LDIF. A diferencia de `slapadd`, que opera directamente sobre la base de datos con el servicio detenido, `ldapadd` trabaja a través de la conexión LDAP con el servicio activo y aplica las ACLs definidas.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="211.2" data-correct="a">

### Pregunta 48 (Subtema 211.2)

¿Qué tipo de módulo PAM (`type`) se encarga de configurar el entorno de la sesión del usuario, como los límites de recursos o el montaje de directorios home?

- [ ] a) `session`
- [ ] b) `auth`
- [ ] c) `account`
- [ ] d) `password`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `session`**

El tipo `session` se ejecuta al inicio y al final de cada sesión del usuario. Los módulos de sesión configuran el entorno: `pam_limits.so` aplica los límites de `/etc/security/limits.conf`, `pam_mkhomedir.so` crea el directorio home si no existe, y `pam_systemd.so` registra la sesión en systemd-logind.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="207.3" data-correct="b">

### Pregunta 49 (Subtema 207.3)

¿Qué comando de Postfix reconstruye las tablas hash (como transport, virtual, access) después de modificarlas?

- [ ] a) `posthash`
- [ ] b) `postmap`
- [ ] c) `postconf --rebuild`
- [ ] d) `postfix hash`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `postmap`**

El comando `postmap` genera las bases de datos indexadas (formato hash o btree) a partir de los archivos de texto de Postfix. Por ejemplo, `postmap /etc/postfix/virtual` crea el archivo `virtual.db`. Postfix usa estas bases de datos indexadas para búsquedas rápidas en lugar de leer los archivos de texto plano.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="209.2" data-correct="d">

### Pregunta 50 (Subtema 209.2)

¿Qué opción en `/etc/exports` mapea todas las peticiones del usuario root del cliente NFS al usuario `nfsnobody`?

- [ ] a) `no_root_access`
- [ ] b) `squash_root`
- [ ] c) `all_squash`
- [ ] d) `root_squash`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `root_squash`**

La opción `root_squash` (habilitada por defecto) mapea las peticiones del UID/GID 0 (root) del cliente al usuario anónimo `nfsnobody` (UID 65534). Esto evita que el root de un cliente tenga privilegios de root sobre los archivos exportados. `no_root_squash` desactiva esta protección, y `all_squash` mapea todos los usuarios al usuario anónimo.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="207.1" data-correct="a">

### Pregunta 51 (Subtema 207.1)

¿Qué comando envía una notificación a BIND para que recargue una zona específica sin reiniciar el servicio completo?

- [ ] a) `rndc reload example.com`
- [ ] b) `named-reload example.com`
- [ ] c) `ndc refresh example.com`
- [ ] d) `dig +reload example.com`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `rndc reload example.com`**

El comando `rndc` (Remote Name Daemon Control) es la herramienta administrativa de BIND. `rndc reload example.com` recarga solo la zona especificada. Sin nombre de zona, `rndc reload` recarga todas las zonas. Otras opciones útiles: `rndc flush` (limpia la caché) y `rndc status` (estado del servicio).

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="208.1" data-correct="b">

### Pregunta 52 (Subtema 208.1)

¿Qué directiva de Apache 2.4 dentro de un bloque `<Directory>` impide que se listen los archivos del directorio si no existe un archivo índice?

- [ ] a) `DirectoryListing Off`
- [ ] b) `Options -Indexes`
- [ ] c) `IndexOptions None`
- [ ] d) `DisableIndexes yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `Options -Indexes`**

La opción `-Indexes` en la directiva `Options` deshabilita el listado automático del contenido del directorio cuando no se encuentra un archivo índice (como `index.html`). Con `Indexes` habilitado, Apache muestra una lista navegable de todos los archivos, lo cual puede exponer información sensible. El prefijo `-` desactiva la opción específica.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="210.3" data-correct="b">

### Pregunta 53 (Subtema 210.3)

¿Qué comando de Postfix se utiliza para ver la configuración efectiva actual mostrando todos los parámetros y sus valores?

- [ ] a) `postfix showconfig`
- [ ] b) `postconf`
- [ ] c) `postfix -c dump`
- [ ] d) `postmaster --show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `postconf`**

El comando `postconf` sin argumentos muestra todos los parámetros de configuración de Postfix con sus valores actuales. Con `-n` muestra solo los parámetros que difieren de los valores por defecto. Con `-d` muestra los valores por defecto. Es la herramienta principal para verificar y depurar la configuración de Postfix.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="211.1" data-correct="c">

### Pregunta 54 (Subtema 211.1)

¿Qué significa el Distinguished Name (DN) `cn=admin,dc=example,dc=com` en LDAP?

- [ ] a) Un servidor DNS llamado admin en el dominio example.com
- [ ] b) Un certificado de seguridad para admin.example.com
- [ ] c) Una entrada LDAP con nombre común "admin" bajo el dominio example.com
- [ ] d) Un alias de correo electrónico admin@example.com

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Una entrada LDAP con nombre común "admin" bajo el dominio example.com**

El DN (Distinguished Name) identifica de forma única una entrada en el directorio LDAP. Cada componente representa un nivel en la jerarquía: `cn` (Common Name), `dc` (Domain Component). El DN se lee de izquierda a derecha, de lo más específico a lo más general, formando una ruta jerárquica en el árbol del directorio (DIT).

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="212.2" data-correct="c">

### Pregunta 55 (Subtema 212.2)

¿Qué directiva de vsftpd permite que los usuarios locales del sistema se conecten al servidor FTP?

- [ ] a) `system_users=YES`
- [ ] b) `allow_local=YES`
- [ ] c) `local_enable=YES`
- [ ] d) `unix_auth=YES`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `local_enable=YES`**

La directiva `local_enable=YES` permite que los usuarios definidos en `/etc/passwd` se autentiquen e inicien sesión en el servidor vsftpd. Sin esta directiva, solo los usuarios anónimos podrían conectarse (si `anonymous_enable=YES`). Para permitir subida de archivos, también se necesita `write_enable=YES`.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="212.4" data-correct="b">

### Pregunta 56 (Subtema 212.4)

¿Qué comando de OpenSSL permite verificar la conectividad TLS con un servidor remoto y mostrar los detalles del certificado presentado?

- [ ] a) `openssl verify servidor:443`
- [ ] b) `openssl s_client -connect servidor:443`
- [ ] c) `openssl tls-check servidor:443`
- [ ] d) `openssl x509 -connect servidor:443`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `openssl s_client -connect servidor:443`**

El subcomando `s_client` de OpenSSL establece una conexión TLS con el servidor especificado y muestra toda la información de la negociación: cadena de certificados, versión de TLS negociada, cipher suite utilizado y detalles del certificado. Es una herramienta fundamental para depurar problemas de TLS/SSL.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="207.2" data-correct="c">

### Pregunta 57 (Subtema 207.2)

¿Qué tipo de registro DNS se utiliza para asociar un servicio específico (como SIP o LDAP) con un host y puerto determinados?

- [ ] a) CNAME
- [ ] b) MX
- [ ] c) SRV
- [ ] d) TXT

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) SRV**

Los registros SRV (Service) permiten definir la ubicación de servicios específicos dentro de un dominio. El formato es: `_servicio._protocolo.nombre TTL IN SRV prioridad peso puerto host`. Por ejemplo, `_ldap._tcp.example.com. 300 IN SRV 10 5 389 ldap.example.com.` indica que el servicio LDAP/TCP está disponible en ldap.example.com en el puerto 389.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="209.1" data-correct="d">

### Pregunta 58 (Subtema 209.1)

¿Qué comando de Samba muestra las conexiones activas y los archivos abiertos en el servidor SMB?

- [ ] a) `smbclient --status`
- [ ] b) `net status`
- [ ] c) `nmblookup -S`
- [ ] d) `smbstatus`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `smbstatus`**

El comando `smbstatus` muestra información en tiempo real sobre el servidor Samba: conexiones activas de clientes, recursos compartidos en uso y archivos bloqueados. Con `-b` muestra un resumen breve, con `-S` muestra solo los recursos compartidos y con `-L` muestra solo los bloqueos de archivos.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="210.4" data-correct="a">

### Pregunta 59 (Subtema 210.4)

¿Qué puerto SMTP se recomienda para la sumisión de correo autenticado (submission) por parte de clientes de correo?

- [ ] a) 587
- [ ] b) 25
- [ ] c) 465
- [ ] d) 143

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) 587**

El puerto 587 es el estándar para el servicio de submission (RFC 6409), donde los clientes de correo envían mensajes que requieren autenticación SASL antes de ser aceptados. El puerto 25 se reserva para comunicación entre MTAs. El puerto 465 fue asignado históricamente a SMTPS (SMTP sobre TLS implícito) y ha sido readmitido por RFC 8314.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="211.3" data-correct="b">

### Pregunta 60 (Subtema 211.3)

¿Qué comando permite limpiar la caché de SSSD para forzar la reconsulta de usuarios y grupos desde el backend LDAP?

- [ ] a) `sssd --flush-cache`
- [ ] b) `sss_cache -E`
- [ ] c) `sssd-cache --clear`
- [ ] d) `systemctl reset sssd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `sss_cache -E`**

El comando `sss_cache -E` invalida todas las entradas de la caché de SSSD, forzando que la próxima consulta se realice directamente contra el backend (LDAP, AD, etc.). Sin `-E`, se pueden invalidar selectivamente usuarios (`-u`), grupos (`-g`) o dominios (`-d`). Después de limpiar la caché, no es necesario reiniciar el servicio SSSD.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
