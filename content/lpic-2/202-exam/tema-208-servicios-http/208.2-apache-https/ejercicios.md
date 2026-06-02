---
title: "208.2 - Apache HTTPS"
tags: [lpic-2, examen-202, tema-208, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "208"
subtema: "208.2"
---

# 208.2 - Ejercicios: Apache HTTPS

### Pregunta 1
¿Qué directiva de Apache especifica la ubicación de la clave privada del servidor SSL/TLS?

a) SSLPrivateKey
b) SSLCertificateKeyFile
c) SSLKeyFile
d) SSLServerKey

<details>
<summary>Respuesta</summary>

**b) SSLCertificateKeyFile**

La directiva `SSLCertificateKeyFile` indica la ruta al archivo que contiene la clave privada del servidor. Esta clave debe corresponder al certificado especificado en `SSLCertificateFile`.
</details>

---

### Pregunta 2
¿Qué comando de OpenSSL genera una solicitud de firma de certificado (CSR) a partir de una clave privada existente?

a) openssl csr -new -key servidor.key -out servidor.csr
b) openssl req -new -key servidor.key -out servidor.csr
c) openssl x509 -req -key servidor.key -out servidor.csr
d) openssl genrsa -csr -key servidor.key -out servidor.csr

<details>
<summary>Respuesta</summary>

**b) openssl req -new -key servidor.key -out servidor.csr**

El subcomando `req` de OpenSSL se utiliza para crear y procesar solicitudes de certificado. La opción `-new` indica que se genera una nueva solicitud, y `-key` especifica la clave privada existente a utilizar.
</details>

---

### Pregunta 3
¿Qué extensión de TLS permite alojar múltiples sitios HTTPS con diferentes certificados en una misma dirección IP?

a) ALPN
b) OCSP
c) SNI
d) HSTS

<details>
<summary>Respuesta</summary>

**c) SNI**

SNI (Server Name Indication) es una extensión de TLS que permite al cliente indicar el nombre de host durante el handshake TLS. Esto permite al servidor seleccionar el certificado correcto antes de completar la conexión, posibilitando múltiples sitios HTTPS en una sola IP.
</details>

---

### Pregunta 4
¿Cuál de los siguientes protocolos se considera seguro para uso en producción en la actualidad?

a) SSLv3
b) TLSv1.0
c) TLSv1.1
d) TLSv1.2

<details>
<summary>Respuesta</summary>

**d) TLSv1.2**

TLS 1.2 y TLS 1.3 son las únicas versiones consideradas seguras actualmente. SSLv2, SSLv3, TLS 1.0 y TLS 1.1 están obsoletos y contienen vulnerabilidades conocidas. Deben deshabilitarse en la configuración de Apache.
</details>

---

### Pregunta 5
¿Qué archivo de Let's Encrypt debe usarse en la directiva `SSLCertificateFile` de Apache?

a) cert.pem
b) chain.pem
c) fullchain.pem
d) privkey.pem

<details>
<summary>Respuesta</summary>

**c) fullchain.pem**

El archivo `fullchain.pem` contiene el certificado del servidor junto con los certificados intermedios de la CA. Desde Apache 2.4.8, se recomienda usar este archivo en `SSLCertificateFile` en lugar de especificar los certificados intermedios por separado.
</details>

---

### Pregunta 6
¿Qué hace la directiva `SSLHonorCipherOrder on` en Apache?

a) Ordena los cipher suites alfabéticamente
b) Permite al cliente elegir el cipher suite preferido
c) Hace que el servidor determine el cipher suite a utilizar según su orden de preferencia
d) Deshabilita los cipher suites débiles automáticamente

<details>
<summary>Respuesta</summary>

**c) Hace que el servidor determine el cipher suite a utilizar según su orden de preferencia**

Cuando `SSLHonorCipherOrder` está habilitado, el servidor elige el primer cipher suite de su lista que sea compatible con el cliente, en lugar de dejar que el cliente elija. Esto permite al administrador priorizar los cipher suites más seguros.
</details>

---

### Pregunta 7
¿Qué comando de Certbot simula el proceso de renovación de certificados sin aplicar cambios reales?

a) certbot renew --test
b) certbot renew --simulate
c) certbot renew --dry-run
d) certbot test-renew

<details>
<summary>Respuesta</summary>

**c) certbot renew --dry-run**

La opción `--dry-run` ejecuta el proceso de renovación de forma simulada, verificando que la configuración y la comunicación con los servidores de Let's Encrypt funcionan correctamente, sin modificar los certificados reales.
</details>

---

### Pregunta 8
¿Cuál es el propósito principal de HSTS (HTTP Strict Transport Security)?

a) Cifrar las cookies del navegador
b) Indicar al navegador que siempre debe conectarse mediante HTTPS
c) Redirigir automáticamente las peticiones HTTP a HTTPS en el servidor
d) Verificar la validez del certificado SSL del servidor

<details>
<summary>Respuesta</summary>

**b) Indicar al navegador que siempre debe conectarse mediante HTTPS**

HSTS es una cabecera HTTP que instruye al navegador a conectarse siempre mediante HTTPS durante el período especificado en `max-age`. A diferencia de una redirección del servidor, HSTS funciona en el lado del cliente, evitando incluso la primera petición HTTP insegura en visitas posteriores.
</details>

---

### Pregunta 9
¿Qué ventaja proporciona OCSP Stapling respecto a la verificación OCSP tradicional?

a) Elimina la necesidad de usar certificados firmados por una CA
b) Permite usar certificados autofirmados en producción
c) El servidor envía la respuesta OCSP junto con el certificado, evitando que el cliente contacte a la CA
d) Cifra la comunicación entre el cliente y el servidor OCSP

<details>
<summary>Respuesta</summary>

**c) El servidor envía la respuesta OCSP junto con el certificado, evitando que el cliente contacte a la CA**

Con OCSP Stapling, el servidor web obtiene periódicamente la respuesta OCSP de la CA y la envía al cliente durante el handshake TLS. Esto mejora el rendimiento (menos latencia), la privacidad del usuario y la fiabilidad (no depende de la disponibilidad del servidor OCSP).
</details>

---

### Pregunta 10
Un administrador necesita redirigir todo el tráfico HTTP a HTTPS usando mod_rewrite. ¿Cuál es la configuración correcta dentro de un VirtualHost en el puerto 80?

a) `RewriteRule ^(.*)$ https://%{SERVER_NAME}$1 [R=302,L]`
b) `RewriteEngine On` seguido de `RewriteRule ^(.*)$ https://%{HTTP_HOST}$1 [R=301,L]`
c) `Redirect https://%{HTTP_HOST}`
d) `SSLRedirect On`

<details>
<summary>Respuesta</summary>

**b) `RewriteEngine On` seguido de `RewriteRule ^(.*)$ https://%{HTTP_HOST}$1 [R=301,L]`**

Para usar mod_rewrite es necesario primero activar el motor con `RewriteEngine On`. La regla utiliza `%{HTTP_HOST}` para mantener el nombre de host original, `R=301` para una redirección permanente y `L` para que sea la última regla procesada. El código 301 es preferible al 302 para redirecciones permanentes de HTTP a HTTPS.
</details>

---

### Pregunta 11

¿Qué directiva de Apache activa el motor SSL/TLS para un VirtualHost específico?

a) SSLActivate on
b) SSLEngine on
c) SSLEnable on
d) SSL on

<details><summary>Respuesta</summary>

**b) SSLEngine on**

La directiva `SSLEngine on` activa el soporte SSL/TLS dentro de un bloque `<VirtualHost>`. Sin esta directiva, el VirtualHost no procesará conexiones HTTPS aunque esté configurado para escuchar en el puerto 443. Esta directiva es proporcionada por el módulo `mod_ssl`.

</details>

---

### Pregunta 12

¿Qué directiva de Apache fue eliminada en la versión 2.4.8 y sustituida por la inclusión de certificados intermedios directamente en `SSLCertificateFile`?

a) SSLCACertificateFile
b) SSLCertificateChainFile
c) SSLIntermediateFile
d) SSLCAChainFile

<details><summary>Respuesta</summary>

**b) SSLCertificateChainFile**

La directiva `SSLCertificateChainFile` fue eliminada en Apache 2.4.8. Desde esa versión, los certificados intermedios se incluyen en el mismo archivo referenciado por `SSLCertificateFile`, concatenando el certificado del servidor seguido de los certificados intermedios. `SSLCACertificateFile` sigue existiendo pero se usa para verificar certificados de cliente.

</details>

---

### Pregunta 13

¿Qué directiva de Apache configura la verificación de certificados de cliente (mTLS)?

a) SSLClientAuth require
b) SSLVerifyClient require
c) SSLRequireClient on
d) SSLMutualAuth on

<details><summary>Respuesta</summary>

**b) SSLVerifyClient require**

La directiva `SSLVerifyClient require` obliga a que el cliente presente un certificado válido durante el handshake TLS. Esto implementa la autenticación mutua (mTLS). El servidor verifica el certificado del cliente contra la CA especificada en `SSLCACertificateFile`. La directiva `SSLVerifyDepth` controla la profundidad máxima de verificación de la cadena.

</details>

---

### Pregunta 14

¿Qué contiene un archivo CSR (Certificate Signing Request) que se envía a una Autoridad Certificadora?

a) La clave privada del servidor y la información del solicitante
b) La clave pública del servidor y la información del solicitante
c) El certificado firmado por la CA
d) La clave privada de la CA

<details><summary>Respuesta</summary>

**b) La clave pública del servidor y la información del solicitante**

Un CSR contiene la clave pública del servidor junto con la información del solicitante (nombre de dominio, organización, país, etc.). Se envía a una Autoridad Certificadora para que lo firme y emita el certificado. La clave privada nunca se incluye en el CSR ni se envía a la CA; permanece siempre en el servidor.

</details>

---

### Pregunta 15

¿Cuál es el propósito de la directiva `SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1` en Apache?

a) Habilitar solo SSLv2 y SSLv3
b) Deshabilitar todos los protocolos SSL/TLS
c) Permitir solo TLS 1.2 y TLS 1.3 deshabilitando los protocolos inseguros
d) Habilitar todos los protocolos excepto TLS 1.2 y TLS 1.3

<details><summary>Respuesta</summary>

**c) Permitir solo TLS 1.2 y TLS 1.3 deshabilitando los protocolos inseguros**

La directiva comienza habilitando todos los protocolos (`all`) y luego deshabilita individualmente con el prefijo `-` las versiones inseguras: SSLv2, SSLv3, TLS 1.0 y TLS 1.1. El resultado es que solo quedan habilitados TLS 1.2 y TLS 1.3, que son las únicas versiones consideradas seguras actualmente.

</details>

---

### Pregunta 16

¿Qué parámetro de la cabecera HSTS extiende la política de solo HTTPS a todos los subdominios del sitio?

a) allDomains
b) includeSubDomains
c) subdomainPolicy
d) extendSSL

<details><summary>Respuesta</summary>

**b) includeSubDomains**

El parámetro `includeSubDomains` en la cabecera `Strict-Transport-Security` indica al navegador que la política HSTS debe aplicarse también a todos los subdominios. Por ejemplo: `Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"`. El parámetro `preload` permite incluir el dominio en las listas de precarga de los navegadores.

</details>

---

### Pregunta 17

¿Qué beneficio de rendimiento proporciona OCSP Stapling?

a) Reduce el tamaño del certificado SSL
b) Elimina la necesidad de que el cliente contacte al servidor OCSP de la CA para verificar la revocación
c) Acelera el cifrado simétrico durante la sesión TLS
d) Comprime las respuestas HTTPS

<details><summary>Respuesta</summary>

**b) Elimina la necesidad de que el cliente contacte al servidor OCSP de la CA para verificar la revocación**

Con OCSP Stapling, el servidor web obtiene periódicamente la respuesta OCSP de la CA y la envía al cliente durante el handshake TLS. Esto elimina la latencia adicional de la consulta OCSP por parte del cliente, mejora la privacidad (la CA no sabe qué sitios visita el usuario) y mejora la fiabilidad (no depende de la disponibilidad del servidor OCSP).

</details>

---

### Pregunta 18

Un administrador quiere verificar que la clave privada corresponde a un certificado SSL. ¿Qué debe comparar?

a) Los hashes SHA256 de ambos archivos
b) El modulus MD5 de la clave privada y del certificado
c) Las fechas de expiración de ambos archivos
d) Los nombres comunes (CN) en ambos archivos

<details><summary>Respuesta</summary>

**b) El modulus MD5 de la clave privada y del certificado**

Para verificar que una clave privada corresponde a un certificado, se compara el modulus de ambos. Los comandos son: `openssl x509 -noout -modulus -in servidor.crt | openssl md5` y `openssl rsa -noout -modulus -in servidor.key | openssl md5`. Si ambos hashes MD5 coinciden, la clave privada y el certificado forman un par válido.

</details>

---

### Pregunta 19

¿En qué directorio almacena Let's Encrypt los certificados generados por Certbot?

a) /etc/ssl/letsencrypt/
b) /etc/letsencrypt/live/
c) /var/lib/certbot/certs/
d) /etc/certbot/certificates/

<details><summary>Respuesta</summary>

**b) /etc/letsencrypt/live/**

Certbot almacena los certificados de Let's Encrypt en `/etc/letsencrypt/live/dominio/`. Dentro de este directorio se encuentran: `fullchain.pem` (certificado + intermedios), `privkey.pem` (clave privada), `cert.pem` (solo el certificado) y `chain.pem` (solo los certificados intermedios). Los archivos son enlaces simbólicos a las versiones más recientes.

</details>

---

### Pregunta 20

¿Qué comando de OpenSSL permite probar manualmente una conexión SSL/TLS a un servidor web especificando el nombre de host con SNI?

a) `openssl verify -connect www.ejemplo.com:443`
b) `openssl s_client -connect www.ejemplo.com:443 -servername www.ejemplo.com`
c) `openssl test -ssl www.ejemplo.com:443`
d) `openssl check -host www.ejemplo.com -port 443`

<details><summary>Respuesta</summary>

**b) `openssl s_client -connect www.ejemplo.com:443 -servername www.ejemplo.com`**

El comando `openssl s_client` establece una conexión SSL/TLS con un servidor. La opción `-connect` especifica el host y puerto, y `-servername` envía la extensión SNI para indicar el nombre de host deseado. Esto es necesario cuando el servidor aloja múltiples sitios HTTPS en la misma IP, ya que permite obtener el certificado correcto.

</details>

---

### Pregunta 21

¿Qué comando de OpenSSL genera una clave privada RSA de 2048 bits?

<input type="text" class="fill-blank" data-answer="openssl genrsa -out servidor.key 2048" data-alt="openssl genrsa 2048,openssl genrsa -out clave.key 2048" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl genrsa -out servidor.key 2048**

El subcomando `genrsa` de OpenSSL genera una clave privada RSA. La opción `-out` especifica el archivo de salida y el último argumento (2048) indica el tamaño de la clave en bits. Se recomienda usar al menos 2048 bits para garantizar la seguridad. La clave privada debe protegerse con permisos restrictivos (chmod 600).

</details>

---

### Pregunta 22

¿Qué comando habilita el módulo SSL en Apache en distribuciones Debian/Ubuntu?

<input type="text" class="fill-blank" data-answer="a2enmod ssl" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**a2enmod ssl**

El comando `a2enmod ssl` habilita el módulo `mod_ssl` en Apache creando un enlace simbólico en `mods-enabled`. Este módulo es necesario para que Apache procese conexiones HTTPS. Después de habilitarlo, se debe reiniciar Apache con `systemctl restart apache2`. En Red Hat/CentOS, el módulo se instala con `yum install mod_ssl`.

</details>

---

### Pregunta 23

¿Qué comando de Certbot obtiene un certificado de Let's Encrypt y configura Apache automáticamente?

<input type="text" class="fill-blank" data-answer="certbot --apache" data-alt="certbot --apache -d ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**certbot --apache**

El comando `certbot --apache` obtiene un certificado de Let's Encrypt y modifica automáticamente la configuración de Apache para usar HTTPS. Configura el VirtualHost SSL, las directivas de certificado y opcionalmente la redirección de HTTP a HTTPS. Para solo obtener el certificado sin modificar la configuración, se usa `certbot certonly`.

</details>

---

### Pregunta 24

¿Qué comando de OpenSSL muestra la información detallada de un certificado X.509 en formato legible?

<input type="text" class="fill-blank" data-answer="openssl x509 -in servidor.crt -text -noout" data-alt="openssl x509 -text -noout -in servidor.crt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl x509 -in servidor.crt -text -noout**

El subcomando `x509` de OpenSSL procesa certificados. La opción `-text` muestra toda la información del certificado en formato legible (emisor, sujeto, fechas de validez, algoritmo, extensiones, etc.) y `-noout` evita que se imprima el certificado codificado en base64. La opción `-in` especifica el archivo del certificado a examinar.

</details>

---

### Pregunta 25

¿Qué comando de Certbot renueva todos los certificados que están próximos a expirar?

<input type="text" class="fill-blank" data-answer="certbot renew" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**certbot renew**

El comando `certbot renew` verifica todos los certificados gestionados por Certbot y renueva aquellos que están próximos a expirar (por defecto, menos de 30 días). Certbot instala automáticamente un temporizador de systemd o una tarea cron que ejecuta este comando periódicamente. Para probar la renovación sin aplicar cambios, se usa `certbot renew --dry-run`.

</details>

---
