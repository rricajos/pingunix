---
title: "331.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.1"
---

# Flashcards: 331.1 - Certificados X509 Y Pki

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando genera una clave RSA de 4096 bits cifrada con AES-256?

</div>
<div class="flashcard-back">

**R:** b). `openssl genrsa -aes256 -out clave.key 4096`  `openssl genrsa` es el subcomando para generar claves RSA. `-aes256` cifra la clave con una passphrase, y el tamaño en bits se indica al final.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué componente de la PKI es responsable de verificar la identidad del solicitante antes de emitir un certificado?

</div>
<div class="flashcard-back">

**R:** b). RA (Autoridad de Registro)  La Autoridad de Registro (RA) verifica la identidad de los solicitantes antes de que la CA emita el certificado. Es el intermediario entre el usuario y la CA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar el estado de revocación de un certificado en tiempo real?

</div>
<div class="flashcard-back">

**R:** c). `openssl ocsp -issuer ca.pem -cert servidor.pem -url http://ocsp.ejemplo.com`  OCSP permite verificar en tiempo real el estado de revocación de un certificado individual, a diferencia de las CRL que son listas completas descargadas periódicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué formato de certificado es binario (ASN.1) y no utiliza codificación Base64?

</div>
<div class="flashcard-back">

**R:** b). DER  DER (Distinguished Encoding Rules) es el formato binario nativo ASN.1. PEM es la versión Base64 de DER con cabeceras `-----BEGIN CERTIFICATE-----`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando convierte un certificado PEM y su clave privada a formato PKCS#12?

</div>
<div class="flashcard-back">

**R:** c). `openssl pkcs12 -export -in cert.pem -inkey clave.key -out cert.p12`  El subcomando `pkcs12` con la opción `-export` crea un archivo PKCS#12 que contiene tanto el certificado como la clave privada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-006">
<div class="flashcard-front">

**P:** Un administrador necesita diagnosticar la cadena de certificados de un servidor web. ¿Qué comando mostrará todos los certificados de la cadena?

</div>
<div class="flashcard-back">

**R:** a). `openssl s_client -connect servidor:443 -showcerts`  `openssl s_client` con `-showcerts` muestra todos los certificados de la cadena enviados por el servidor durante el handshake TLS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-007">
<div class="flashcard-front">

**P:** ¿En qué directorio se almacenan las CAs de confianza adicionales en sistemas Red Hat/CentOS para que `update-ca-trust` las incorpore?

</div>
<div class="flashcard-back">

**R:** b). `/etc/pki/ca-trust/source/anchors/`  En sistemas RHEL/CentOS, se colocan los certificados CA adicionales en `/etc/pki/ca-trust/source/anchors/` y luego se ejecuta `update-ca-trust` para actualizar el almacén del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué extensión X.509 v3 indica si un certificado puede actuar como Autoridad de Certificación?

</div>
<div class="flashcard-back">

**R:** c). Basic Constraints  La extensión `basicConstraints` con el valor `CA:TRUE` indica que el certificado puede actuar como CA y firmar otros certificados. Cuando es `CA:FALSE`, es un certificado de entidad final.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué archivo de la CA contiene la base de datos de todos los certificados emitidos?

</div>
<div class="flashcard-back">

**R:** b). `/etc/pki/CA/index.txt`  El archivo `index.txt` es la base de datos de texto plano que contiene información sobre todos los certificados emitidos por la CA, incluyendo su estado (válido, revocado, expirado).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador ejecuta: `openssl req -x509 -newkey rsa:4096 -keyout clave.key -out cert.pem -days 365 -nodes`. ¿Qué efecto tiene la opción `-nodes`?

</div>
<div class="flashcard-back">

**R:** b). No cifra la clave privada con passphrase  La opción `-nodes` (no DES) indica que la clave privada generada no será cifrada con passphrase. Esto es útil para servicios que arrancan automáticamente, pero reduce la seguridad de la clave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de OpenSSL se utiliza para revocar un certificado previamente emitido por una CA?

</div>
<div class="flashcard-back">

**R:** b). `openssl ca -revoke certificado.pem -config openssl.cnf`  El subcomando `openssl ca -revoke` marca un certificado como revocado en la base de datos de la CA (`index.txt`). Después de revocar, es necesario regenerar la CRL con `openssl ca -gencrl` para que los clientes puedan verificar la revocación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué extensión X.509 v3 permite especificar nombres alternativos como dominios adicionales o direcciones IP?

</div>
<div class="flashcard-back">

**R:** c). Subject Alternative Name (SAN)  La extensión Subject Alternative Name (SAN) permite incluir nombres adicionales en el certificado, como múltiples nombres DNS (`DNS.1 = www.ejemplo.com`, `DNS.2 = ejemplo.com`) o direcciones IP (`IP.1 = 192.168.1.10`). Es imprescindible en certificados modernos, ya que muchos navegadores ignoran el campo CN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué archivo dentro de la estructura PKI almacena el siguiente número de serie que la CA asignará al próximo certificado emitido?

</div>
<div class="flashcard-back">

**R:** c). `serial`  El archivo `serial` contiene el siguiente número de serie hexadecimal que la CA asignará al próximo certificado que emita. Se incrementa automáticamente con cada emisión. `index.txt` es la base de datos de certificados y `crlnumber` es el contador de la CRL.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué diferencia principal existe entre una CA raíz y una CA intermedia?

</div>
<div class="flashcard-back">

**R:** b). La CA raíz es autofirmada y se almacena offline; la CA intermedia es firmada por la raíz y se usa para operaciones diarias  La CA raíz se autofirma y se guarda offline por seguridad para minimizar el riesgo de compromiso. La CA intermedia (subordinada) está firmada por la raíz y es la que emite certificados en operaciones cotidianas. Si la intermedia se compromete, se revoca sin afectar a la raíz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando verifica un certificado contra una cadena que incluye una CA intermedia?

</div>
<div class="flashcard-back">

**R:** b). `openssl verify -CAfile ca-raiz.pem -untrusted ca-intermedia.pem cert.pem`  La opción `-untrusted` indica los certificados intermedios que se necesitan para construir la cadena pero que no son CAs de confianza raíz. `-CAfile` especifica la CA raíz de confianza. OpenSSL construye la cadena completa: certificado -> CA intermedia -> CA raíz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza en sistemas Debian/Ubuntu para actualizar el almacén de CAs de confianza después de añadir un certificado CA personalizado?

</div>
<div class="flashcard-back">

**R:** b). `update-ca-certificates`  En sistemas Debian/Ubuntu, los certificados CA personalizados se colocan en `/usr/local/share/ca-certificates/` y se ejecuta `update-ca-certificates` para incorporarlos al almacén del sistema. En RHEL/CentOS se usa `update-ca-trust` con certificados en `/etc/pki/ca-trust/source/anchors/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué formato de certificado puede contener tanto el certificado como la clave privada en un solo archivo?

</div>
<div class="flashcard-back">

**R:** d). PKCS#12  PKCS#12 (extensiones `.p12` o `.pfx`) es un formato contenedor que puede almacenar el certificado, la clave privada y opcionalmente los certificados de la cadena en un solo archivo protegido por contraseña. PEM y DER solo almacenan un elemento por archivo, y PKCS#7 no incluye claves privadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué campo del certificado X.509 identifica al emisor que firmó el certificado?

</div>
<div class="flashcard-back">

**R:** b). Issuer  El campo `Issuer` contiene el Distinguished Name (DN) de la autoridad de certificación que emitió y firmó el certificado. El campo `Subject` identifica al titular del certificado. En certificados autofirmados, `Issuer` y `Subject` son idénticos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué opción de `openssl req` genera un certificado autofirmado directamente en lugar de solo un CSR?

</div>
<div class="flashcard-back">

**R:** b). `-x509`  La opción `-x509` en `openssl req` indica que en lugar de generar una solicitud de firma (CSR), se genere directamente un certificado autofirmado. Se combina típicamente con `-new`, `-key`, `-days` y `-out` para crear un certificado completo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué valor de la extensión `keyUsage` indica que un certificado puede usarse para firmar otros certificados?

</div>
<div class="flashcard-back">

**R:** c). `keyCertSign`  El valor `keyCertSign` en la extensión `keyUsage` indica que la clave pública del certificado puede utilizarse para verificar firmas en otros certificados. Este valor es esencial en certificados de CA y normalmente se combina con `cRLSign` y `basicConstraints = CA:TRUE`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando de OpenSSL para generar una solicitud de firma de certificado (CSR) a partir de una clave privada existente en `clave.key`, guardando el resultado en `solicitud.csr`. <input type="text" class="fill-blank" data-answer="openssl req -new -key clave.key -out solicitud.csr" data-alt="openssl req -new -key clave.key -out solicitud.csr" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openssl req -new -key clave.key -out solicitud.csr. `openssl req -new` genera una nueva solicitud de firma de certificado. `-key` especifica la clave privada existente que se usará y `-out` el archivo de salida del CSR. El comando solicitará interactivamente los campos del DN (Country, Organization, CN, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando de OpenSSL para ver los detalles de un certificado en formato PEM sin mostrar el certificado codificado. <input type="text" class="fill-blank" data-answer="openssl x509 -in certificado.pem -text -noout" data-alt="openssl x509 -text -noout -in certificado.pem" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openssl x509 -in certificado.pem -text -noout. `openssl x509 -text` muestra los detalles legibles del certificado (Subject, Issuer, validez, extensiones, etc.). La opción `-noout` suprime la impresion del certificado codificado en Base64, mostrando solo la informacion en texto legible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando de OpenSSL para convertir un certificado del formato DER al formato PEM. <input type="text" class="fill-blank" data-answer="openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem" data-alt="openssl x509 -inform DER -in cert.der -outform PEM -out cert.pem" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem. La opcion `-inform DER` indica que el archivo de entrada esta en formato binario DER y `-outform PEM` que el archivo de salida debe estar en formato PEM (Base64 con cabeceras). Este tipo de conversion es frecuente al trabajar con certificados de diferentes plataformas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando de OpenSSL para conectarse al servidor `www.ejemplo.com` en el puerto 443 y mostrar toda la cadena de certificados. <input type="text" class="fill-blank" data-answer="openssl s_client -connect www.ejemplo.com:443 -showcerts" data-alt="openssl s_client -showcerts -connect www.ejemplo.com:443" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openssl s_client -connect www.ejemplo.com:443 -showcerts. `openssl s_client` establece una conexion TLS con el servidor especificado. `-connect` indica el host y puerto, y `-showcerts` muestra todos los certificados de la cadena enviados durante el handshake TLS, incluyendo los certificados intermedios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de OpenSSL para generar una CRL actualizada a partir de la configuracion de la CA. <input type="text" class="fill-blank" data-answer="openssl ca -gencrl -out ca.crl -config openssl.cnf" data-alt="openssl ca -gencrl -config openssl.cnf -out ca.crl" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openssl ca -gencrl -out ca.crl -config openssl.cnf. `openssl ca -gencrl` genera una Lista de Revocacion de Certificados (CRL) actualizada que contiene todos los certificados revocados registrados en `index.txt`. La CRL debe regenerarse despues de cada revocacion y distribuirse a los sistemas que la necesiten para verificar certificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5, uno de los más altos. Domina los comandos de OpenSSL ...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5, uno de los más altos. Domina los comandos de OpenSSL y comprende la cadena de confianza completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre CRL y OCSP. CRL es una lista completa descargada pe...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre CRL y OCSP. CRL es una lista completa descargada periódicamente; OCSP consulta en tiempo real certificados individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `openssl s_client` es crucial para diagnóstico. Recuerda que `-showcerts` muestr...

</div>
<div class="flashcard-back">

**R:** `openssl s_client` es crucial para diagnóstico. Recuerda que `-showcerts` muestra toda la cadena, y `-verify_return_error` falla si la verificación no es exitosa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la ubicación de los directorios PKI según la distribución. RHEL usa `/etc...

</div>
<div class="flashcard-back">

**R:** Conoce la ubicación de los directorios PKI según la distribución. RHEL usa `/etc/pki/`, Debian usa `/etc/ssl/`. Tras añadir una CA personalizada, ejecuta `update-ca-trust` (RHEL) o `update-ca-certificates` (Debian).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `openssl req`?

</div>
<div class="flashcard-back">

**R:** Generar CSR y certificados autofirmados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `openssl x509`?

</div>
<div class="flashcard-back">

**R:** Examinar, convertir y firmar certificados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `openssl ca`?

</div>
<div class="flashcard-back">

**R:** Operaciones de CA (firmar, revocar, generar CRL)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `openssl verify`?

</div>
<div class="flashcard-back">

**R:** Verificar cadena de certificados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `openssl pkcs12`?

</div>
<div class="flashcard-back">

**R:** Convertir a/desde formato PKCS#12

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Los certificados X.509 son el estándar fundamental para la identidad digital en Internet. Definen la estructura de los certificados de clave pública utilizados en TLS/SSL, correo electrónico seguro, fi

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Estructura de un Certificado X.509?

</div>
<div class="flashcard-back">

**R:** Un certificado X.509 v3 contiene los siguientes campos principales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Formatos de Certificado?

</div>
<div class="flashcard-back">

**R:** | Formato | Extensión | Descripción |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Cadena de Confianza (Chain of Trust)?

</div>
<div class="flashcard-back">

**R:** La cadena de confianza funciona así:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Protección de Claves Privadas?

</div>
<div class="flashcard-back">

**R:** Las claves privadas son el activo más sensible de una PKI:

</div>
</div>

---

