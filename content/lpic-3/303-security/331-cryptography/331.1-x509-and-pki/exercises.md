---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.1 - Certificados X.509 y PKI"
subtema: "331.1"
peso: 5
tags:
  - lpic-3
  - tema-331
  - x509
  - pki
  - openssl
---

# Ejercicios - 331.1 Certificados X.509 y PKI

### Pregunta 1
¿Qué comando genera una clave RSA de 4096 bits cifrada con AES-256?

a) `openssl rsa -genkey -aes256 -bits 4096 -out clave.key`
b) `openssl genrsa -aes256 -out clave.key 4096`
c) `openssl genpkey -rsa -aes256 4096 -out clave.key`
d) `openssl key -generate -rsa 4096 -cipher aes256 -out clave.key`

<details><summary>Respuesta</summary>

**b)** `openssl genrsa -aes256 -out clave.key 4096`

`openssl genrsa` es el subcomando para generar claves RSA. `-aes256` cifra la clave con una passphrase, y el tamaño en bits se indica al final.
</details>

### Pregunta 2
¿Qué componente de la PKI es responsable de verificar la identidad del solicitante antes de emitir un certificado?

a) CA (Autoridad de Certificación)
b) RA (Autoridad de Registro)
c) CRL (Lista de Revocación de Certificados)
d) OCSP (Online Certificate Status Protocol)

<details><summary>Respuesta</summary>

**b)** RA (Autoridad de Registro)

La Autoridad de Registro (RA) verifica la identidad de los solicitantes antes de que la CA emita el certificado. Es el intermediario entre el usuario y la CA.
</details>

### Pregunta 3
¿Qué comando se utiliza para verificar el estado de revocación de un certificado en tiempo real?

a) `openssl crl -check -cert servidor.pem`
b) `openssl verify -crl_check -CAfile ca.pem cert.pem`
c) `openssl ocsp -issuer ca.pem -cert servidor.pem -url http://ocsp.ejemplo.com`
d) `openssl revoke -status servidor.pem`

<details><summary>Respuesta</summary>

**c)** `openssl ocsp -issuer ca.pem -cert servidor.pem -url http://ocsp.ejemplo.com`

OCSP permite verificar en tiempo real el estado de revocación de un certificado individual, a diferencia de las CRL que son listas completas descargadas periódicamente.
</details>

### Pregunta 4
¿Qué formato de certificado es binario (ASN.1) y no utiliza codificación Base64?

a) PEM
b) DER
c) PKCS#7
d) PFX

<details><summary>Respuesta</summary>

**b)** DER

DER (Distinguished Encoding Rules) es el formato binario nativo ASN.1. PEM es la versión Base64 de DER con cabeceras `-----BEGIN CERTIFICATE-----`.
</details>

### Pregunta 5
¿Qué comando convierte un certificado PEM y su clave privada a formato PKCS#12?

a) `openssl x509 -export -in cert.pem -inkey clave.key -out cert.p12`
b) `openssl pkcs12 -convert -in cert.pem -key clave.key -out cert.p12`
c) `openssl pkcs12 -export -in cert.pem -inkey clave.key -out cert.p12`
d) `openssl p12 -create -cert cert.pem -key clave.key -out cert.p12`

<details><summary>Respuesta</summary>

**c)** `openssl pkcs12 -export -in cert.pem -inkey clave.key -out cert.p12`

El subcomando `pkcs12` con la opción `-export` crea un archivo PKCS#12 que contiene tanto el certificado como la clave privada.
</details>

### Pregunta 6
Un administrador necesita diagnosticar la cadena de certificados de un servidor web. ¿Qué comando mostrará todos los certificados de la cadena?

a) `openssl s_client -connect servidor:443 -showcerts`
b) `openssl x509 -chain -in servidor:443`
c) `openssl verify -show_chain servidor:443`
d) `openssl s_client -connect servidor:443 -certchain`

<details><summary>Respuesta</summary>

**a)** `openssl s_client -connect servidor:443 -showcerts`

`openssl s_client` con `-showcerts` muestra todos los certificados de la cadena enviados por el servidor durante el handshake TLS.
</details>

### Pregunta 7
¿En qué directorio se almacenan las CAs de confianza adicionales en sistemas Red Hat/CentOS para que `update-ca-trust` las incorpore?

a) `/etc/ssl/certs/`
b) `/etc/pki/ca-trust/source/anchors/`
c) `/usr/share/ca-certificates/`
d) `/etc/pki/CA/certs/`

<details><summary>Respuesta</summary>

**b)** `/etc/pki/ca-trust/source/anchors/`

En sistemas RHEL/CentOS, se colocan los certificados CA adicionales en `/etc/pki/ca-trust/source/anchors/` y luego se ejecuta `update-ca-trust` para actualizar el almacén del sistema.
</details>

### Pregunta 8
¿Qué extensión X.509 v3 indica si un certificado puede actuar como Autoridad de Certificación?

a) Key Usage
b) Subject Alternative Name (SAN)
c) Basic Constraints
d) CRL Distribution Points

<details><summary>Respuesta</summary>

**c)** Basic Constraints

La extensión `basicConstraints` con el valor `CA:TRUE` indica que el certificado puede actuar como CA y firmar otros certificados. Cuando es `CA:FALSE`, es un certificado de entidad final.
</details>

### Pregunta 9
¿Qué archivo de la CA contiene la base de datos de todos los certificados emitidos?

a) `/etc/pki/CA/serial`
b) `/etc/pki/CA/index.txt`
c) `/etc/pki/CA/crlnumber`
d) `/etc/pki/CA/database.db`

<details><summary>Respuesta</summary>

**b)** `/etc/pki/CA/index.txt`

El archivo `index.txt` es la base de datos de texto plano que contiene información sobre todos los certificados emitidos por la CA, incluyendo su estado (válido, revocado, expirado).
</details>

### Pregunta 10
Un administrador ejecuta: `openssl req -x509 -newkey rsa:4096 -keyout clave.key -out cert.pem -days 365 -nodes`. ¿Qué efecto tiene la opción `-nodes`?

a) No incluye extensiones de nodo en el certificado
b) No cifra la clave privada con passphrase
c) Genera el certificado sin número de serie
d) Omite la verificación de DNS del nombre común

<details><summary>Respuesta</summary>

**b)** No cifra la clave privada con passphrase

La opción `-nodes` (no DES) indica que la clave privada generada no será cifrada con passphrase. Esto es útil para servicios que arrancan automáticamente, pero reduce la seguridad de la clave.
</details>

### Pregunta 11

¿Qué comando de OpenSSL se utiliza para revocar un certificado previamente emitido por una CA?

a) `openssl x509 -revoke certificado.pem`
b) `openssl ca -revoke certificado.pem -config openssl.cnf`
c) `openssl crl -revoke certificado.pem`
d) `openssl verify -revoke certificado.pem`

<details><summary>Respuesta</summary>

**b)** `openssl ca -revoke certificado.pem -config openssl.cnf`

El subcomando `openssl ca -revoke` marca un certificado como revocado en la base de datos de la CA (`index.txt`). Después de revocar, es necesario regenerar la CRL con `openssl ca -gencrl` para que los clientes puedan verificar la revocación.
</details>

### Pregunta 12

¿Qué extensión X.509 v3 permite especificar nombres alternativos como dominios adicionales o direcciones IP?

a) Basic Constraints
b) Key Usage
c) Subject Alternative Name (SAN)
d) CRL Distribution Points

<details><summary>Respuesta</summary>

**c)** Subject Alternative Name (SAN)

La extensión Subject Alternative Name (SAN) permite incluir nombres adicionales en el certificado, como múltiples nombres DNS (`DNS.1 = www.ejemplo.com`, `DNS.2 = ejemplo.com`) o direcciones IP (`IP.1 = 192.168.1.10`). Es imprescindible en certificados modernos, ya que muchos navegadores ignoran el campo CN.
</details>

### Pregunta 13

¿Qué archivo dentro de la estructura PKI almacena el siguiente número de serie que la CA asignará al próximo certificado emitido?

a) `index.txt`
b) `crlnumber`
c) `serial`
d) `ca-cert.pem`

<details><summary>Respuesta</summary>

**c)** `serial`

El archivo `serial` contiene el siguiente número de serie hexadecimal que la CA asignará al próximo certificado que emita. Se incrementa automáticamente con cada emisión. `index.txt` es la base de datos de certificados y `crlnumber` es el contador de la CRL.
</details>

### Pregunta 14

¿Qué diferencia principal existe entre una CA raíz y una CA intermedia?

a) La CA raíz emite certificados más rápido
b) La CA raíz es autofirmada y se almacena offline; la CA intermedia es firmada por la raíz y se usa para operaciones diarias
c) La CA intermedia tiene mayor nivel de confianza
d) La CA raíz solo se usa en redes internas

<details><summary>Respuesta</summary>

**b)** La CA raíz es autofirmada y se almacena offline; la CA intermedia es firmada por la raíz y se usa para operaciones diarias

La CA raíz se autofirma y se guarda offline por seguridad para minimizar el riesgo de compromiso. La CA intermedia (subordinada) está firmada por la raíz y es la que emite certificados en operaciones cotidianas. Si la intermedia se compromete, se revoca sin afectar a la raíz.
</details>

### Pregunta 15

¿Qué comando verifica un certificado contra una cadena que incluye una CA intermedia?

a) `openssl verify -CAfile ca-raiz.pem -chain ca-intermedia.pem cert.pem`
b) `openssl verify -CAfile ca-raiz.pem -untrusted ca-intermedia.pem cert.pem`
c) `openssl verify -CAfile ca-intermedia.pem cert.pem`
d) `openssl x509 -verify -CAfile ca-raiz.pem -intermediate ca-intermedia.pem cert.pem`

<details><summary>Respuesta</summary>

**b)** `openssl verify -CAfile ca-raiz.pem -untrusted ca-intermedia.pem cert.pem`

La opción `-untrusted` indica los certificados intermedios que se necesitan para construir la cadena pero que no son CAs de confianza raíz. `-CAfile` especifica la CA raíz de confianza. OpenSSL construye la cadena completa: certificado -> CA intermedia -> CA raíz.
</details>

### Pregunta 16

¿Qué comando se utiliza en sistemas Debian/Ubuntu para actualizar el almacén de CAs de confianza después de añadir un certificado CA personalizado?

a) `update-ca-trust`
b) `update-ca-certificates`
c) `ca-certificates --update`
d) `ssl-update-certs`

<details><summary>Respuesta</summary>

**b)** `update-ca-certificates`

En sistemas Debian/Ubuntu, los certificados CA personalizados se colocan en `/usr/local/share/ca-certificates/` y se ejecuta `update-ca-certificates` para incorporarlos al almacén del sistema. En RHEL/CentOS se usa `update-ca-trust` con certificados en `/etc/pki/ca-trust/source/anchors/`.
</details>

### Pregunta 17

¿Qué formato de certificado puede contener tanto el certificado como la clave privada en un solo archivo?

a) PEM
b) DER
c) PKCS#7
d) PKCS#12

<details><summary>Respuesta</summary>

**d)** PKCS#12

PKCS#12 (extensiones `.p12` o `.pfx`) es un formato contenedor que puede almacenar el certificado, la clave privada y opcionalmente los certificados de la cadena en un solo archivo protegido por contraseña. PEM y DER solo almacenan un elemento por archivo, y PKCS#7 no incluye claves privadas.
</details>

### Pregunta 18

¿Qué campo del certificado X.509 identifica al emisor que firmó el certificado?

a) Subject
b) Issuer
c) Serial Number
d) Signature Algorithm

<details><summary>Respuesta</summary>

**b)** Issuer

El campo `Issuer` contiene el Distinguished Name (DN) de la autoridad de certificación que emitió y firmó el certificado. El campo `Subject` identifica al titular del certificado. En certificados autofirmados, `Issuer` y `Subject` son idénticos.
</details>

### Pregunta 19

¿Qué opción de `openssl req` genera un certificado autofirmado directamente en lugar de solo un CSR?

a) `-self-sign`
b) `-x509`
c) `-auto`
d) `-ca`

<details><summary>Respuesta</summary>

**b)** `-x509`

La opción `-x509` en `openssl req` indica que en lugar de generar una solicitud de firma (CSR), se genere directamente un certificado autofirmado. Se combina típicamente con `-new`, `-key`, `-days` y `-out` para crear un certificado completo.
</details>

### Pregunta 20

¿Qué valor de la extensión `keyUsage` indica que un certificado puede usarse para firmar otros certificados?

a) `digitalSignature`
b) `keyEncipherment`
c) `keyCertSign`
d) `dataEncipherment`

<details><summary>Respuesta</summary>

**c)** `keyCertSign`

El valor `keyCertSign` en la extensión `keyUsage` indica que la clave pública del certificado puede utilizarse para verificar firmas en otros certificados. Este valor es esencial en certificados de CA y normalmente se combina con `cRLSign` y `basicConstraints = CA:TRUE`.
</details>

### Pregunta 21

Escribe el comando de OpenSSL para generar una solicitud de firma de certificado (CSR) a partir de una clave privada existente en `clave.key`, guardando el resultado en `solicitud.csr`.

<input type="text" class="fill-blank" data-answer="openssl req -new -key clave.key -out solicitud.csr" data-alt="openssl req -new -key clave.key -out solicitud.csr" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl req -new -key clave.key -out solicitud.csr**

`openssl req -new` genera una nueva solicitud de firma de certificado. `-key` especifica la clave privada existente que se usará y `-out` el archivo de salida del CSR. El comando solicitará interactivamente los campos del DN (Country, Organization, CN, etc.).
</details>

### Pregunta 22

Escribe el comando de OpenSSL para ver los detalles de un certificado en formato PEM sin mostrar el certificado codificado.

<input type="text" class="fill-blank" data-answer="openssl x509 -in certificado.pem -text -noout" data-alt="openssl x509 -text -noout -in certificado.pem" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl x509 -in certificado.pem -text -noout**

`openssl x509 -text` muestra los detalles legibles del certificado (Subject, Issuer, validez, extensiones, etc.). La opción `-noout` suprime la impresion del certificado codificado en Base64, mostrando solo la informacion en texto legible.
</details>

### Pregunta 23

Escribe el comando de OpenSSL para convertir un certificado del formato DER al formato PEM.

<input type="text" class="fill-blank" data-answer="openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem" data-alt="openssl x509 -inform DER -in cert.der -outform PEM -out cert.pem" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem**

La opcion `-inform DER` indica que el archivo de entrada esta en formato binario DER y `-outform PEM` que el archivo de salida debe estar en formato PEM (Base64 con cabeceras). Este tipo de conversion es frecuente al trabajar con certificados de diferentes plataformas.
</details>

### Pregunta 24

Escribe el comando de OpenSSL para conectarse al servidor `www.ejemplo.com` en el puerto 443 y mostrar toda la cadena de certificados.

<input type="text" class="fill-blank" data-answer="openssl s_client -connect www.ejemplo.com:443 -showcerts" data-alt="openssl s_client -showcerts -connect www.ejemplo.com:443" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl s_client -connect www.ejemplo.com:443 -showcerts**

`openssl s_client` establece una conexion TLS con el servidor especificado. `-connect` indica el host y puerto, y `-showcerts` muestra todos los certificados de la cadena enviados durante el handshake TLS, incluyendo los certificados intermedios.
</details>

### Pregunta 25

Escribe el comando de OpenSSL para generar una CRL actualizada a partir de la configuracion de la CA.

<input type="text" class="fill-blank" data-answer="openssl ca -gencrl -out ca.crl -config openssl.cnf" data-alt="openssl ca -gencrl -config openssl.cnf -out ca.crl" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl ca -gencrl -out ca.crl -config openssl.cnf**

`openssl ca -gencrl` genera una Lista de Revocacion de Certificados (CRL) actualizada que contiene todos los certificados revocados registrados en `index.txt`. La CRL debe regenerarse despues de cada revocacion y distribuirse a los sistemas que la necesiten para verificar certificados.
</details>
