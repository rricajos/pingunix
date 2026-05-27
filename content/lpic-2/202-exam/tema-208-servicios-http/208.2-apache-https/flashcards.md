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

> 23 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: Aunque coloquialmente se sigue hablando de "SSL", en la práctica se usa TLS. Las...

</div>
<div class="flashcard-back">

**R:** Aunque coloquialmente se sigue hablando de "SSL", en la práctica se usa TLS. Las versiones seguras son TLS 1.2 y TLS 1.3. SSLv2 y SSLv3 deben estar deshabilitados siempre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.2">
</div>

<div class="flashcard" data-id="208.2-fc-012">
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

<div class="flashcard" data-id="208.2-fc-013">
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

<div class="flashcard" data-id="208.2-fc-014">
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

<div class="flashcard" data-id="208.2-fc-015">
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

<div class="flashcard" data-id="208.2-fc-016">
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

<div class="flashcard" data-id="208.2-fc-017">
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

<div class="flashcard" data-id="208.2-fc-018">
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

<div class="flashcard" data-id="208.2-fc-019">
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

<div class="flashcard" data-id="208.2-fc-020">
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

<div class="flashcard" data-id="208.2-fc-021">
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

<div class="flashcard" data-id="208.2-fc-022">
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

<div class="flashcard" data-id="208.2-fc-023">
<div class="flashcard-front">

**P:** Que es/son OCSP Stapling?

</div>
<div class="flashcard-back">

**R:** OCSP Stapling permite al servidor obtener y enviar la respuesta OCSP junto con el certificado, evitando que el cliente tenga que contactar a la CA para verificar la revocación del certificado.

</div>
</div>

---

