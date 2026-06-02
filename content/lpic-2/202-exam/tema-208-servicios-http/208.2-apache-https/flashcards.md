---
title: "208.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "208.2"
---

# Flashcards: 208.2 - Apache Https

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache especifica la ubicación de la clave privada del servidor SSL/TLS?

</div>
<div class="flashcard-back">

**R:** b) SSLCertificateKeyFile. La directiva `SSLCertificateKeyFile` indica la ruta al archivo que contiene la clave privada del servidor. Esta clave debe corresponder al certificado especificado en `SSLCertificateFile`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando de OpenSSL genera una solicitud de firma de certificado (CSR) a partir de una clave privada existente?

</div>
<div class="flashcard-back">

**R:** b) openssl req -new -key servidor.key -out servidor.csr. El subcomando `req` de OpenSSL se utiliza para crear y procesar solicitudes de certificado. La opción `-new` indica que se genera una nueva solicitud, y `-key` especifica la clave privada existente a utilizar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué extensión de TLS permite alojar múltiples sitios HTTPS con diferentes certificados en una misma dirección IP?

</div>
<div class="flashcard-back">

**R:** c) SNI. SNI (Server Name Indication) es una extensión de TLS que permite al cliente indicar el nombre de host durante el handshake TLS. Esto permite al servidor seleccionar el certificado correcto antes de completar la conexión, posibilitando múltiples sitios HTTPS en una sola IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál de los siguientes protocolos se considera seguro para uso en producción en la actualidad?

</div>
<div class="flashcard-back">

**R:** d) TLSv1.2. TLS 1.2 y TLS 1.3 son las únicas versiones consideradas seguras actualmente. SSLv2, SSLv3, TLS 1.0 y TLS 1.1 están obsoletos y contienen vulnerabilidades conocidas. Deben deshabilitarse en la configuración de Apache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué archivo de Let's Encrypt debe usarse en la directiva `SSLCertificateFile` de Apache?

</div>
<div class="flashcard-back">

**R:** c) fullchain.pem. El archivo `fullchain.pem` contiene el certificado del servidor junto con los certificados intermedios de la CA. Desde Apache 2.4.8, se recomienda usar este archivo en `SSLCertificateFile` en lugar de especificar los certificados intermedios por separado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué hace la directiva `SSLHonorCipherOrder on` en Apache?

</div>
<div class="flashcard-back">

**R:** c) Hace que el servidor determine el cipher suite a utilizar según su orden de preferencia. Cuando `SSLHonorCipherOrder` está habilitado, el servidor elige el primer cipher suite de su lista que sea compatible con el cliente, en lugar de dejar que el cliente elija. Esto permite al administrador priorizar los cipher suites más seguros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando de Certbot simula el proceso de renovación de certificados sin aplicar cambios reales?

</div>
<div class="flashcard-back">

**R:** c) certbot renew --dry-run. La opción `--dry-run` ejecuta el proceso de renovación de forma simulada, verificando que la configuración y la comunicación con los servidores de Let's Encrypt funcionan correctamente, sin modificar los certificados reales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito principal de HSTS (HTTP Strict Transport Security)?

</div>
<div class="flashcard-back">

**R:** b) Indicar al navegador que siempre debe conectarse mediante HTTPS. HSTS es una cabecera HTTP que instruye al navegador a conectarse siempre mediante HTTPS durante el período especificado en `max-age`. A diferencia de una redirección del servidor, HSTS funciona en el lado del cliente, evitando incluso la primera petición HTTP insegura en visitas posteriores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué ventaja proporciona OCSP Stapling respecto a la verificación OCSP tradicional?

</div>
<div class="flashcard-back">

**R:** c) El servidor envía la respuesta OCSP junto con el certificado, evitando que el cliente contacte a la CA. Con OCSP Stapling, el servidor web obtiene periódicamente la respuesta OCSP de la CA y la envía al cliente durante el handshake TLS. Esto mejora el rendimiento (menos latencia), la privacidad del usuario y la fiabilidad (no depende de la disponibilidad del servidor OCSP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita redirigir todo el tráfico HTTP a HTTPS usando mod_rewrite. ¿Cuál es la configuración correcta dentro de un VirtualHost en el puerto 80?

</div>
<div class="flashcard-back">

**R:** b) `RewriteEngine On` seguido de `RewriteRule ^(.*)$ https://%{HTTP_HOST}$1 [R=301,L]`. Para usar mod_rewrite es necesario primero activar el motor con `RewriteEngine On`. La regla utiliza `%{HTTP_HOST}` para mantener el nombre de host original, `R=301` para una redirección permanente y `L` para que sea la última regla procesada. El código 301 es preferible al 302 para redirecciones permanentes de HTTP a HTTPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache activa el motor SSL/TLS para un VirtualHost específico?

</div>
<div class="flashcard-back">

**R:** b) SSLEngine on. La directiva `SSLEngine on` activa el soporte SSL/TLS dentro de un bloque `<VirtualHost>`. Sin esta directiva, el VirtualHost no procesará conexiones HTTPS aunque esté configurado para escuchar en el puerto 443. Esta directiva es proporcionada por el módulo `mod_ssl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache fue eliminada en la versión 2.4.8 y sustituida por la inclusión de certificados intermedios directamente en `SSLCertificateFile`?

</div>
<div class="flashcard-back">

**R:** b) SSLCertificateChainFile. La directiva `SSLCertificateChainFile` fue eliminada en Apache 2.4.8. Desde esa versión, los certificados intermedios se incluyen en el mismo archivo referenciado por `SSLCertificateFile`, concatenando el certificado del servidor seguido de los certificados intermedios. `SSLCACertificateFile` sigue existiendo pero se usa para verificar certificados de cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache configura la verificación de certificados de cliente (mTLS)?

</div>
<div class="flashcard-back">

**R:** b) SSLVerifyClient require. La directiva `SSLVerifyClient require` obliga a que el cliente presente un certificado válido durante el handshake TLS. Esto implementa la autenticación mutua (mTLS). El servidor verifica el certificado del cliente contra la CA especificada en `SSLCACertificateFile`. La directiva `SSLVerifyDepth` controla la profundidad máxima de verificación de la cadena.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué contiene un archivo CSR (Certificate Signing Request) que se envía a una Autoridad Certificadora?

</div>
<div class="flashcard-back">

**R:** b) La clave pública del servidor y la información del solicitante. Un CSR contiene la clave pública del servidor junto con la información del solicitante (nombre de dominio, organización, país, etc.). Se envía a una Autoridad Certificadora para que lo firme y emita el certificado. La clave privada nunca se incluye en el CSR ni se envía a la CA; permanece siempre en el servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito de la directiva `SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1` en Apache?

</div>
<div class="flashcard-back">

**R:** c) Permitir solo TLS 1.2 y TLS 1.3 deshabilitando los protocolos inseguros. La directiva comienza habilitando todos los protocolos (`all`) y luego deshabilita individualmente con el prefijo `-` las versiones inseguras: SSLv2, SSLv3, TLS 1.0 y TLS 1.1. El resultado es que solo quedan habilitados TLS 1.2 y TLS 1.3, que son las únicas versiones consideradas seguras actualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué parámetro de la cabecera HSTS extiende la política de solo HTTPS a todos los subdominios del sitio?

</div>
<div class="flashcard-back">

**R:** b) includeSubDomains. El parámetro `includeSubDomains` en la cabecera `Strict-Transport-Security` indica al navegador que la política HSTS debe aplicarse también a todos los subdominios. Por ejemplo: `Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"`. El parámetro `preload` permite incluir el dominio en las listas de precarga de los navegadores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué beneficio de rendimiento proporciona OCSP Stapling?

</div>
<div class="flashcard-back">

**R:** b) Elimina la necesidad de que el cliente contacte al servidor OCSP de la CA para verificar la revocación. Con OCSP Stapling, el servidor web obtiene periódicamente la respuesta OCSP de la CA y la envía al cliente durante el handshake TLS. Esto elimina la latencia adicional de la consulta OCSP por parte del cliente, mejora la privacidad (la CA no sabe qué sitios visita el usuario) y mejora la fiabilidad (no depende de la disponibilidad del servidor OCSP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-018">
<div class="flashcard-front">

**P:** Un administrador quiere verificar que la clave privada corresponde a un certificado SSL. ¿Qué debe comparar?

</div>
<div class="flashcard-back">

**R:** b) El modulus MD5 de la clave privada y del certificado. Para verificar que una clave privada corresponde a un certificado, se compara el modulus de ambos. Los comandos son: `openssl x509 -noout -modulus -in servidor.crt | openssl md5` y `openssl rsa -noout -modulus -in servidor.key | openssl md5`. Si ambos hashes MD5 coinciden, la clave privada y el certificado forman un par válido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-019">
<div class="flashcard-front">

**P:** ¿En qué directorio almacena Let's Encrypt los certificados generados por Certbot?

</div>
<div class="flashcard-back">

**R:** b) /etc/letsencrypt/live/. Certbot almacena los certificados de Let's Encrypt en `/etc/letsencrypt/live/dominio/`. Dentro de este directorio se encuentran: `fullchain.pem` (certificado + intermedios), `privkey.pem` (clave privada), `cert.pem` (solo el certificado) y `chain.pem` (solo los certificados intermedios). Los archivos son enlaces simbólicos a las versiones más recientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando de OpenSSL permite probar manualmente una conexión SSL/TLS a un servidor web especificando el nombre de host con SNI?

</div>
<div class="flashcard-back">

**R:** b) `openssl s_client -connect www.ejemplo.com:443 -servername www.ejemplo.com`. El comando `openssl s_client` establece una conexión SSL/TLS con un servidor. La opción `-connect` especifica el host y puerto, y `-servername` envía la extensión SNI para indicar el nombre de host deseado. Esto es necesario cuando el servidor aloja múltiples sitios HTTPS en la misma IP, ya que permite obtener el certificado correcto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando de OpenSSL genera una clave privada RSA de 2048 bits?

</div>
<div class="flashcard-back">

**R:** openssl genrsa -out servidor.key 2048. El subcomando `genrsa` de OpenSSL genera una clave privada RSA. La opción `-out` especifica el archivo de salida y el último argumento (2048) indica el tamaño de la clave en bits. Se recomienda usar al menos 2048 bits para garantizar la seguridad. La clave privada debe protegerse con permisos restrictivos (chmod 600).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando habilita el módulo SSL en Apache en distribuciones Debian/Ubuntu?

</div>
<div class="flashcard-back">

**R:** a2enmod ssl. El comando `a2enmod ssl` habilita el módulo `mod_ssl` en Apache creando un enlace simbólico en `mods-enabled`. Este módulo es necesario para que Apache procese conexiones HTTPS. Después de habilitarlo, se debe reiniciar Apache con `systemctl restart apache2`. En Red Hat/CentOS, el módulo se instala con `yum install mod_ssl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando de Certbot obtiene un certificado de Let's Encrypt y configura Apache automáticamente?

</div>
<div class="flashcard-back">

**R:** certbot --apache. El comando `certbot --apache` obtiene un certificado de Let's Encrypt y modifica automáticamente la configuración de Apache para usar HTTPS. Configura el VirtualHost SSL, las directivas de certificado y opcionalmente la redirección de HTTP a HTTPS. Para solo obtener el certificado sin modificar la configuración, se usa `certbot certonly`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando de OpenSSL muestra la información detallada de un certificado X.509 en formato legible?

</div>
<div class="flashcard-back">

**R:** openssl x509 -in servidor.crt -text -noout. El subcomando `x509` de OpenSSL procesa certificados. La opción `-text` muestra toda la información del certificado en formato legible (emisor, sujeto, fechas de validez, algoritmo, extensiones, etc.) y `-noout` evita que se imprima el certificado codificado en base64. La opción `-in` especifica el archivo del certificado a examinar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de Certbot renueva todos los certificados que están próximos a expirar?

</div>
<div class="flashcard-back">

**R:** certbot renew. El comando `certbot renew` verifica todos los certificados gestionados por Certbot y renueva aquellos que están próximos a expirar (por defecto, menos de 30 días). Certbot instala automáticamente un temporizador de systemd o una tarea cron que ejecuta este comando periódicamente. Para probar la renovación sin aplicar cambios, se usa `certbot renew --dry-run`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Aunque coloquialmente se sigue hablando de "SSL", en la práctica se usa TLS. Las...

</div>
<div class="flashcard-back">

**R:** Aunque coloquialmente se sigue hablando de "SSL", en la práctica se usa TLS. Las versiones seguras son TLS 1.2 y TLS 1.3. SSLv2 y SSLv3 deben estar deshabilitados siempre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Un CSR (Certificate Signing Request) contiene la clave pública y la información ...

</div>
<div class="flashcard-back">

**R:** Un CSR (Certificate Signing Request) contiene la clave pública y la información del solicitante. Se envía a una CA para que lo firme y emita el certificado. La clave privada nunca se envía a la CA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `SSLCertificateChainFile` fue eliminado en Apache 2.4.8. Desde esa versión, los ...

</div>
<div class="flashcard-back">

**R:** `SSLCertificateChainFile` fue eliminado en Apache 2.4.8. Desde esa versión, los certificados intermedios se incluyen en el mismo archivo referenciado por `SSLCertificateFile`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: SNI es necesario para alojar múltiples sitios HTTPS con diferentes certificados ...

</div>
<div class="flashcard-back">

**R:** SNI es necesario para alojar múltiples sitios HTTPS con diferentes certificados en una misma dirección IP. Sin SNI, solo se podía tener un certificado por IP. Todos los navegadores modernos soportan SNI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: OCSP Stapling mejora el rendimiento y la privacidad. Sin stapling, el navegador ...

</div>
<div class="flashcard-back">

**R:** OCSP Stapling mejora el rendimiento y la privacidad. Sin stapling, el navegador del cliente debe contactar directamente al servidor OCSP de la CA, lo que añade latencia y revela al CA qué sitios visita el usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `SSLEngine on`?

</div>
<div class="flashcard-back">

**R:** Activa SSL/TLS para el VirtualHost

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `SSLCertificateFile`?

</div>
<div class="flashcard-back">

**R:** Ruta al certificado del servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `SSLCACertificateFile`?

</div>
<div class="flashcard-back">

**R:** Ruta al certificado de la CA (cadena de confianza)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** HTTPS (HTTP sobre SSL/TLS) proporciona comunicación cifrada entre el cliente y el servidor web. La configuración de SSL/TLS en Apache es una competencia esencial para cualquier administrador de sistema

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Let's Encrypt y Certbot?

</div>
<div class="flashcard-back">

**R:** Let's Encrypt es una autoridad certificadora gratuita y automatizada. Certbot es el cliente oficial para obtener y renovar certificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son SNI (Server Name Indication)?

</div>
<div class="flashcard-back">

**R:** SNI es una extensión de TLS que permite al cliente indicar el nombre de host al que se conecta durante el handshake. Esto permite alojar múltiples sitios HTTPS en una sola dirección IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son HSTS (HTTP Strict Transport Security)?

</div>
<div class="flashcard-back">

**R:** HSTS indica al navegador que siempre debe usar HTTPS para conectarse al sitio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son OCSP Stapling?

</div>
<div class="flashcard-back">

**R:** OCSP Stapling permite al servidor obtener y enviar la respuesta OCSP junto con el certificado, evitando que el cliente tenga que contactar a la CA para verificar la revocación del certificado.

</div>
</div>

---

