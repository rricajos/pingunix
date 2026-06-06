---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.4 - DNS y criptografía"
subtema: "331.4"
peso: 5
tags:
  - lpic-3
  - tema-331
  - dnssec
  - dane
  - tsig
---

# Ejercicios - 331.4 DNS y Criptografía

### Pregunta 1
¿Qué comando genera una KSK (Key Signing Key) con algoritmo RSASHA256 de 4096 bits para la zona ejemplo.com?

a) `dnssec-keygen -a RSASHA256 -b 4096 -n ZONE ejemplo.com`
b) `dnssec-keygen -a RSASHA256 -b 4096 -n ZONE -f KSK ejemplo.com`
c) `dnssec-keygen -a RSASHA256 -b 4096 -n KSK ejemplo.com`
d) `dnssec-genkey -type KSK -algo RSASHA256 -bits 4096 ejemplo.com`

<details><summary>Respuesta</summary>

**b)** `dnssec-keygen -a RSASHA256 -b 4096 -n ZONE -f KSK ejemplo.com`

La opción `-f KSK` indica que se debe generar una Key Signing Key (con flags=257). Sin `-f KSK`, se genera una ZSK (flags=256). `-n ZONE` especifica que es una clave de zona.
</details>

### Pregunta 2
¿Qué registro DNSSEC se publica en la zona padre para establecer la cadena de confianza?

a) RRSIG
b) DNSKEY
c) DS
d) NSEC

<details><summary>Respuesta</summary>

**c)** DS (Delegation Signer)

El registro DS contiene el hash de la KSK de la zona hija y se publica en la zona padre. Es el enlace que conecta la cadena de confianza entre zonas padre e hija.
</details>

### Pregunta 3
¿Cuál es la principal ventaja de NSEC3 sobre NSEC?

a) NSEC3 cifra las respuestas DNS
b) NSEC3 protege contra la enumeración de zona (zone walking)
c) NSEC3 es más rápido de validar
d) NSEC3 no requiere firma digital

<details><summary>Respuesta</summary>

**b)** NSEC3 protege contra la enumeración de zona (zone walking)

NSEC lista los nombres de dominio en orden, permitiendo recorrer toda la zona. NSEC3 usa hashes de los nombres, haciendo impracticable la enumeración completa de la zona.
</details>

### Pregunta 4
¿Qué comando firma una zona DNS generando registros NSEC3 con salt?

a) `dnssec-signzone -nsec3 -salt "abc123" -o ejemplo.com db.ejemplo.com`
b) `dnssec-signzone -3 "abc123" -o ejemplo.com db.ejemplo.com`
c) `dnssec-signzone --nsec3-salt="abc123" -o ejemplo.com db.ejemplo.com`
d) `dnssec-signzone -N 3 -s "abc123" -o ejemplo.com db.ejemplo.com`

<details><summary>Respuesta</summary>

**b)** `dnssec-signzone -3 "abc123" -o ejemplo.com db.ejemplo.com`

La opción `-3` seguida del salt activa NSEC3 en lugar de NSEC. El salt es una cadena hexadecimal que se añade antes del hash para dificultar ataques de diccionario.
</details>

### Pregunta 5
¿Qué tipo de registro DANE/TLSA con uso=3 (DANE-EE) permite?

a) Validar el certificado del servidor solo mediante la cadena de CA tradicional
b) Autenticar el certificado del servidor directamente por DNS, sin necesidad de CA
c) Cifrar las consultas DNS con el certificado del servidor
d) Revocar certificados a través de DNS

<details><summary>Respuesta</summary>

**b)** Autenticar el certificado del servidor directamente por DNS, sin necesidad de CA

DANE-EE (uso=3) indica que el certificado o clave pública del endpoint está directamente asociado al registro DNS. La validación se realiza contra el registro TLSA en DNS, no contra una CA.
</details>

### Pregunta 6
¿Qué protocolo utiliza claves simétricas compartidas para autenticar transferencias de zona DNS?

a) DNSSEC
b) DANE
c) TSIG
d) DoT

<details><summary>Respuesta</summary>

**c)** TSIG (Transaction Signature)

TSIG utiliza claves simétricas compartidas (HMAC) para autenticar transacciones DNS como transferencias de zona (AXFR/IXFR) y actualizaciones dinámicas entre servidores DNS.
</details>

### Pregunta 7
¿En qué puerto estándar opera DNS-over-TLS (DoT)?

a) 53
b) 443
c) 853
d) 8853

<details><summary>Respuesta</summary>

**c)** 853

DNS-over-TLS utiliza el puerto TCP 853. DNS tradicional usa el puerto 53, y DNS-over-HTTPS usa el puerto 443 (el mismo que HTTPS).
</details>

### Pregunta 8
¿Qué comando se utiliza para generar un registro DS a partir de una clave KSK existente?

a) `dnssec-signzone -ds Kejemplo.com.+008+67890.key`
b) `dnssec-dsfromkey Kejemplo.com.+008+67890.key`
c) `dnssec-keygen -ds Kejemplo.com.+008+67890.key`
d) `dig -ds Kejemplo.com.+008+67890.key`

<details><summary>Respuesta</summary>

**b)** `dnssec-dsfromkey Kejemplo.com.+008+67890.key`

`dnssec-dsfromkey` genera registros DS (Delegation Signer) a partir de un archivo de clave DNSKEY. Estos registros DS deben publicarse en la zona padre.
</details>

### Pregunta 9
¿Qué directiva de Unbound activa la validación DNSSEC?

a) `dnssec-enable: yes`
b) `auto-trust-anchor-file: "/var/lib/unbound/root.key"`
c) `validate-dnssec: true`
d) `dnssec-validation auto`

<details><summary>Respuesta</summary>

**b)** `auto-trust-anchor-file: "/var/lib/unbound/root.key"`

En Unbound, la directiva `auto-trust-anchor-file` especifica el archivo del trust anchor raíz y activa la validación DNSSEC automáticamente. Se obtiene/actualiza con `unbound-anchor`.
</details>

### Pregunta 10
¿Cuál es la diferencia fundamental entre DNS-over-TLS (DoT) y DNS-over-HTTPS (DoH) desde la perspectiva de un firewall?

a) DoT es más seguro que DoH
b) DoT usa un puerto dedicado (853) fácilmente bloqueable; DoH usa el puerto 443, indistinguible del tráfico HTTPS
c) DoH no cifra las consultas DNS
d) DoT no soporta DNSSEC, DoH sí

<details><summary>Respuesta</summary>

**b)** DoT usa un puerto dedicado (853) fácilmente bloqueable; DoH usa el puerto 443, indistinguible del tráfico HTTPS

Un firewall puede bloquear DoT filtrando el puerto 853. DoH es más difícil de bloquear porque comparte el puerto 443 con todo el tráfico HTTPS, haciéndolo prácticamente indistinguible.
</details>

### Pregunta 11

¿Qué valor de flags tiene una ZSK (Zone Signing Key) en DNSSEC?

a) 128
b) 256
c) 257
d) 512

<details><summary>Respuesta</summary>

**b) Correcta**

La ZSK tiene flags=256, lo que indica que es una clave de zona estándar para firmar registros. La KSK tiene flags=257, donde el bit adicional (Secure Entry Point) indica que su hash se publica como registro DS en la zona padre para establecer la cadena de confianza.

</details>

### Pregunta 12

¿Qué tipo de registro DNSSEC contiene la firma digital de un conjunto de registros (RRset)?

a) DNSKEY
b) DS
c) RRSIG
d) NSEC

<details><summary>Respuesta</summary>

**c) Correcta**

El registro RRSIG (Resource Record Signature) contiene la firma digital de un RRset (conjunto de registros del mismo tipo para el mismo nombre). Cada RRset en una zona firmada tiene su correspondiente RRSIG generado con la ZSK.

</details>

### Pregunta 13

¿Qué aspecto de seguridad NO proporciona DNSSEC?

a) Autenticación del origen de los datos
b) Integridad de los datos
c) Confidencialidad de las consultas DNS
d) Prueba de no existencia de un dominio

<details><summary>Respuesta</summary>

**c) Correcta**

DNSSEC NO proporciona confidencialidad. Las consultas y respuestas DNS siguen siendo en texto plano. DNSSEC solo garantiza autenticación (verificar quién firmó los datos), integridad (que no fueron modificados) y prueba de no existencia (registros NSEC/NSEC3). Para confidencialidad se necesita DNS-over-TLS o DNS-over-HTTPS.

</details>

### Pregunta 14

En un registro TLSA con el formato `_443._tcp.www.ejemplo.com. IN TLSA 3 1 1 hash...`, ¿qué indica el valor "1" en el campo selector?

a) Certificado completo
b) Solo la clave pública del certificado
c) Solo el emisor del certificado
d) Solo el nombre común (CN)

<details><summary>Respuesta</summary>

**b) Correcta**

El campo selector con valor 1 indica que el hash se calcula sobre la clave pública (SubjectPublicKeyInfo) del certificado, no sobre el certificado completo. El valor 0 indicaría que se usa el certificado completo. Usar solo la clave pública (selector=1) permite renovar el certificado sin cambiar el registro TLSA, siempre que la clave pública no cambie.

</details>

### Pregunta 15

¿Qué directiva de BIND permite que las zonas se firmen automáticamente sin intervención manual?

a) `dnssec-enable yes;`
b) `auto-dnssec maintain;`
c) `dnssec-auto-sign on;`
d) `zone-signing automatic;`

<details><summary>Respuesta</summary>

**b) Correcta**

La directiva `auto-dnssec maintain;` junto con `inline-signing yes;` permite que BIND gestione automáticamente la firma de la zona, incluyendo la re-firma cuando los registros RRSIG se acercan a su fecha de expiración. La opción `maintain` también gestiona la rotación de claves si se encuentran nuevas claves en el directorio de claves.

</details>

### Pregunta 16

¿Cuál es el propósito del salt en NSEC3?

a) Cifrar las respuestas DNS
b) Dificultar ataques de diccionario precalculados contra los hashes de nombres de dominio
c) Acelerar la validación DNSSEC
d) Comprimir los registros NSEC3

<details><summary>Respuesta</summary>

**b) Correcta**

El salt en NSEC3 se concatena con el nombre de dominio antes de calcular el hash. Esto previene ataques con tablas rainbow o diccionarios precalculados, ya que cada zona puede usar un salt diferente, obligando al atacante a recalcular los hashes para cada zona específica.

</details>

### Pregunta 17

¿Qué comando se utiliza para verificar la configuración del resolver Unbound antes de iniciarlo?

a) `unbound-check`
b) `unbound-checkconf`
c) `unbound --verify`
d) `unbound-test-config`

<details><summary>Respuesta</summary>

**b) Correcta**

`unbound-checkconf` verifica la sintaxis y consistencia del archivo de configuración de Unbound (por defecto `/etc/unbound/unbound.conf`). Es una práctica recomendada ejecutarlo antes de reiniciar el servicio para detectar errores de configuración.

</details>

### Pregunta 18

En la rotación de ZSK usando el método de pre-publicación, ¿por qué se debe esperar al menos 2 veces el TTL antes de usar la nueva clave para firmar?

a) Para que el servidor tenga tiempo de generar las firmas
b) Para asegurar que todos los resolvers con caché hayan obtenido la nueva clave DNSKEY
c) Porque BIND requiere ese tiempo para procesar la clave
d) Para sincronizar los relojes entre servidores DNS

<details><summary>Respuesta</summary>

**b) Correcta**

Se debe esperar al menos 2 x TTL (en la práctica) para asegurar que todos los resolvers recursivos que tienen la zona en caché hayan obtenido la versión actualizada que incluye la nueva DNSKEY. Si se empieza a firmar con la nueva ZSK antes de que los resolvers la conozcan, las firmas no podrán ser validadas.

</details>

### Pregunta 19

¿Qué algoritmo utiliza TSIG para autenticar las transferencias de zona?

a) RSA
b) ECDSA
c) HMAC (clave simétrica compartida)
d) Ed25519

<details><summary>Respuesta</summary>

**c) Correcta**

TSIG utiliza HMAC (Hash-based Message Authentication Code) con claves simétricas compartidas entre servidores DNS. Los algoritmos más comunes son `hmac-sha256` y `hmac-sha512`. A diferencia de DNSSEC que usa criptografía asimétrica, TSIG es simétrico: ambos servidores deben conocer la misma clave secreta.

</details>

### Pregunta 20

¿Qué herramienta se utiliza para obtener y actualizar el trust anchor raíz de DNSSEC para el resolver Unbound?

a) `dnssec-keygen`
b) `unbound-anchor`
c) `dig +dnssec`
d) `dnssec-trust-update`

<details><summary>Respuesta</summary>

**b) Correcta**

`unbound-anchor` descarga y verifica el trust anchor raíz de DNSSEC (la clave pública del root) y lo almacena en el archivo especificado (normalmente `/var/lib/unbound/root.key`). Este trust anchor es el punto de partida de la cadena de confianza para la validación DNSSEC.

</details>

### Pregunta 21

Escribe el comando para generar una ZSK (Zone Signing Key) con algoritmo RSASHA256 de 2048 bits para la zona `midominio.com`.

<input type="text" class="fill-blank" data-answer="dnssec-keygen -a RSASHA256 -b 2048 -n ZONE midominio.com" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dnssec-keygen -a RSASHA256 -b 2048 -n ZONE midominio.com**

Para generar una ZSK no se incluye la opción `-f KSK`. Los parámetros son: `-a` para el algoritmo, `-b` para el tamaño de clave en bits, y `-n ZONE` para indicar que es una clave de zona. Se generan dos archivos: `.key` (clave pública) y `.private` (clave privada).

</details>

### Pregunta 22

Escribe el comando para firmar la zona `ejemplo.com` cuyo archivo de zona es `db.ejemplo.com`, generando registros NSEC3 con el salt "a1b2c3".

<input type="text" class="fill-blank" data-answer="dnssec-signzone -3 a1b2c3 -o ejemplo.com db.ejemplo.com" data-alt="dnssec-signzone -3 &quot;a1b2c3&quot; -o ejemplo.com db.ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dnssec-signzone -3 a1b2c3 -o ejemplo.com db.ejemplo.com**

La opción `-3` seguida del salt activa NSEC3 en lugar de NSEC. `-o` especifica el nombre de la zona (origin). El resultado es un archivo `db.ejemplo.com.signed` que contiene la zona firmada con registros RRSIG y NSEC3.

</details>

### Pregunta 23

Escribe el comando para generar una clave TSIG con algoritmo hmac-sha256 y nombre "transfer-key", redirigiendo la salida al archivo `/etc/named/transfer.key`.

<input type="text" class="fill-blank" data-answer="tsig-keygen -a hmac-sha256 transfer-key > /etc/named/transfer.key" data-alt="tsig-keygen -a hmac-sha256 transfer-key >/etc/named/transfer.key" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tsig-keygen -a hmac-sha256 transfer-key > /etc/named/transfer.key**

`tsig-keygen` genera una clave TSIG en formato compatible con BIND. `-a` especifica el algoritmo HMAC. El archivo generado contiene un bloque `key` con el nombre, algoritmo y secreto codificado en Base64, listo para incluir en la configuración de BIND.

</details>

### Pregunta 24

Escribe el comando para generar un registro DS a partir de un archivo de clave KSK llamado `Kejemplo.com.+008+67890.key`.

<input type="text" class="fill-blank" data-answer="dnssec-dsfromkey Kejemplo.com.+008+67890.key" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dnssec-dsfromkey Kejemplo.com.+008+67890.key**

`dnssec-dsfromkey` genera registros DS (Delegation Signer) a partir de una clave DNSKEY. El registro DS resultante contiene el hash de la KSK y debe publicarse en la zona padre para establecer la cadena de confianza DNSSEC.

</details>

### Pregunta 25

Escribe el comando para obtener y almacenar el trust anchor raíz de DNSSEC en el archivo `/var/lib/unbound/root.key` para el resolver Unbound.

<input type="text" class="fill-blank" data-answer="unbound-anchor -a /var/lib/unbound/root.key" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**unbound-anchor -a /var/lib/unbound/root.key**

`unbound-anchor` descarga, verifica e instala el trust anchor raíz de DNSSEC. La opción `-a` especifica la ruta del archivo donde se almacenará la clave. Este archivo es referenciado por la directiva `auto-trust-anchor-file` en la configuración de Unbound para habilitar la validación DNSSEC.

</details>
