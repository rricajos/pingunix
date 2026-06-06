---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.2 - Certificados para cifrado, firma y autenticación"
subtema: "331.2"
peso: 4
tags:
  - lpic-3
  - tema-331
  - gnupg
  - gpg
  - cifrado
  - firma-digital
---

# Ejercicios - 331.2 Certificados para Cifrado, Firma y Autenticación

### Pregunta 1
¿Qué comando exporta la clave pública de un usuario en formato ASCII (blindado)?

a) `gpg2 --output pub.asc --export-public usuario@ej.com`
b) `gpg2 --export --armor usuario@ej.com > pub.asc`
c) `gpg2 --export --text usuario@ej.com > pub.asc`
d) `gpg2 --dump-key --ascii usuario@ej.com > pub.asc`

<details><summary>Respuesta</summary>

**b)** `gpg2 --export --armor usuario@ej.com > pub.asc`

La opción `--armor` (o `-a`) produce salida en formato ASCII Base64, adecuada para enviar por correo electrónico o publicar en texto plano.
</details>

### Pregunta 2
En el modelo Web of Trust de GPG, ¿cuántas firmas de confianza "marginal" se necesitan por defecto para considerar una clave como válida?

a) 1
b) 2
c) 3
d) 5

<details><summary>Respuesta</summary>

**c)** 3

Por defecto, GPG requiere al menos 3 firmas de claves con confianza "marginal" o 1 firma de una clave con confianza "full" para considerar una clave como válida.
</details>

### Pregunta 3
¿Qué comando crea una firma separada (detached) de un archivo sin modificar el original?

a) `gpg2 --sign archivo.txt`
b) `gpg2 --clearsign archivo.txt`
c) `gpg2 --detach-sign archivo.txt`
d) `gpg2 --separate-sign archivo.txt`

<details><summary>Respuesta</summary>

**c)** `gpg2 --detach-sign archivo.txt`

`--detach-sign` crea un archivo de firma separado (archivo.txt.sig) sin modificar el archivo original. Esto es ideal para distribuir software con su firma.
</details>

### Pregunta 4
¿Cuál es la principal diferencia entre GPG/OpenPGP y S/MIME?

a) GPG solo permite cifrado simétrico, S/MIME solo asimétrico
b) GPG usa un modelo de confianza descentralizado (Web of Trust), S/MIME usa jerárquico (PKI/CA)
c) S/MIME no soporta firmas digitales
d) GPG es más rápido que S/MIME en todos los casos

<details><summary>Respuesta</summary>

**b)** GPG usa un modelo de confianza descentralizado (Web of Trust), S/MIME usa jerárquico (PKI/CA)

GPG/OpenPGP utiliza la Web of Trust donde los usuarios se firman mutuamente las claves. S/MIME se basa en certificados X.509 emitidos por Autoridades de Certificación en una estructura jerárquica.
</details>

### Pregunta 5
¿Qué archivo almacena la configuración del agente GPG, incluyendo el tiempo de caché de passphrases?

a) `~/.gnupg/gpg.conf`
b) `~/.gnupg/gpg-agent.conf`
c) `/etc/gpg/agent.conf`
d) `~/.gnupg/agent.conf`

<details><summary>Respuesta</summary>

**b)** `~/.gnupg/gpg-agent.conf`

El archivo `gpg-agent.conf` contiene directivas como `default-cache-ttl` y `max-cache-ttl` que controlan cuánto tiempo el agente mantiene las passphrases en caché.
</details>

### Pregunta 6
Un administrador necesita cifrar un archivo para dos destinatarios diferentes. ¿Qué comando es correcto?

a) `gpg2 --encrypt --multi-recipient user1@ej.com,user2@ej.com archivo.txt`
b) `gpg2 --encrypt -r user1@ej.com -r user2@ej.com archivo.txt`
c) `gpg2 --encrypt --recipients "user1@ej.com user2@ej.com" archivo.txt`
d) `gpg2 --encrypt --to user1@ej.com --to user2@ej.com archivo.txt`

<details><summary>Respuesta</summary>

**b)** `gpg2 --encrypt -r user1@ej.com -r user2@ej.com archivo.txt`

Se utiliza la opción `-r` (o `--recipient`) múltiples veces, una por cada destinatario. GPG cifrará el archivo de forma que cualquiera de los destinatarios pueda descifrarlo con su clave privada.
</details>

### Pregunta 7
¿Qué algoritmo hash se considera actualmente como el estándar mínimo recomendado para firmas digitales?

a) MD5
b) SHA-1
c) SHA-256
d) CRC32

<details><summary>Respuesta</summary>

**c)** SHA-256

SHA-256 es el estándar mínimo recomendado actualmente. MD5 está completamente roto, SHA-1 se considera obsoleto. SHA-256 y SHA-512 son las opciones recomendadas.
</details>

### Pregunta 8
¿Qué comando publica una clave pública en un servidor de claves?

a) `gpg2 --keyserver hkps://keys.openpgp.org --upload-key ID`
b) `gpg2 --keyserver hkps://keys.openpgp.org --send-keys ID`
c) `gpg2 --keyserver hkps://keys.openpgp.org --publish ID`
d) `gpg2 --push-key hkps://keys.openpgp.org ID`

<details><summary>Respuesta</summary>

**b)** `gpg2 --keyserver hkps://keys.openpgp.org --send-keys ID`

`--send-keys` envía la clave pública identificada por su ID al servidor de claves especificado con `--keyserver`. El protocolo `hkps://` utiliza HTTPS.
</details>

### Pregunta 9
¿Qué opción de `gpg2 --clearsign` produce un archivo que permite leer el texto original sin necesidad de GPG?

a) Es una característica inherente de `--clearsign`; el texto es legible dentro del archivo firmado
b) Se necesita la opción adicional `--readable`
c) `--clearsign` no permite ver el texto original sin GPG
d) Se debe usar `--clearsign --plaintext`

<details><summary>Respuesta</summary>

**a)** Es una característica inherente de `--clearsign`; el texto es legible dentro del archivo firmado

`--clearsign` produce una firma "en claro" donde el texto original es visible directamente, enmarcado por cabeceras PGP. La firma se añade al final, permitiendo verificar la integridad sin perder legibilidad.
</details>

### Pregunta 10
¿Qué comando de OpenSSL se utiliza para firmar un correo electrónico con S/MIME?

a) `openssl cms -sign -in msg.txt -signer cert.pem -inkey key.pem`
b) `openssl smime -sign -in msg.txt -signer cert.pem -inkey key.pem -out firmado.eml`
c) `openssl email -sign -cert cert.pem -key key.pem msg.txt`
d) `openssl sign -smime -in msg.txt -certificate cert.pem`

<details><summary>Respuesta</summary>

**b)** `openssl smime -sign -in msg.txt -signer cert.pem -inkey key.pem -out firmado.eml`

El subcomando `smime` de OpenSSL con la opción `-sign` firma un mensaje. Se necesita el certificado (`-signer`) y la clave privada (`-inkey`). La opción `a)` con `cms` también es válida técnicamente pero `smime` es la respuesta más directa para el examen.
</details>

### Pregunta 11

¿Qué nivel de confianza del propietario en GPG se reserva exclusivamente para las claves propias del usuario?

a) full
b) marginal
c) ultimate
d) absolute

<details><summary>Respuesta</summary>

**c) Correcta**

El nivel `ultimate` indica confianza absoluta y solo debe asignarse a las claves del propio usuario. Asignar `ultimate` a claves ajenas compromete la integridad del modelo Web of Trust, ya que todas las claves firmadas por esa clave se considerarían automáticamente válidas.

</details>

### Pregunta 12

¿Qué opción de `gpg2` permite generar una clave de forma rápida con valores por defecto especificando algoritmo y tamaño?

a) `gpg2 --gen-key --fast rsa4096`
b) `gpg2 --quick-generate-key "Nombre <email>" rsa4096`
c) `gpg2 --auto-generate-key rsa4096 "Nombre <email>"`
d) `gpg2 --generate-key --default rsa4096`

<details><summary>Respuesta</summary>

**b) Correcta**

`--quick-generate-key` permite generar un par de claves sin el diálogo interactivo completo, aceptando el nombre/email y opcionalmente el algoritmo como argumentos directos. Para la generación interactiva completa se usa `--full-generate-key`.

</details>

### Pregunta 13

¿Qué protocolo utilizan los servidores de claves GPG cuando se especifica el esquema `hkps://`?

a) HTTP sobre el puerto 11371
b) HTTPS cifrado con TLS
c) SSH tunelizado
d) FTP seguro sobre el puerto 990

<details><summary>Respuesta</summary>

**b) Correcta**

`hkps://` (HKP Secure) utiliza HTTPS para la comunicación con servidores de claves, proporcionando cifrado TLS. El protocolo `hkp://` estándar utiliza HTTP sin cifrar en el puerto 11371.

</details>

### Pregunta 14

Un administrador necesita verificar que un archivo no ha sido modificado desde que fue firmado. ¿Qué propiedad criptográfica garantiza esto?

a) Confidencialidad
b) Disponibilidad
c) Integridad
d) No repudio exclusivamente

<details><summary>Respuesta</summary>

**c) Correcta**

La integridad es la propiedad que garantiza que los datos no han sido alterados. Las firmas digitales verifican la integridad calculando un hash del contenido y cifrándolo con la clave privada del firmante. Cualquier modificación posterior invalidará la firma al no coincidir el hash.

</details>

### Pregunta 15

¿Qué directiva en `~/.gnupg/gpg-agent.conf` establece el tiempo máximo absoluto (en segundos) que una passphrase permanece en caché?

a) `cache-ttl-max 7200`
b) `max-cache-ttl 7200`
c) `passphrase-timeout 7200`
d) `absolute-cache-ttl 7200`

<details><summary>Respuesta</summary>

**b) Correcta**

`max-cache-ttl` define el tiempo máximo absoluto en segundos que una passphrase se mantiene en caché, independientemente de cuántas veces se use. `default-cache-ttl` define el tiempo de caché desde el último uso. Ambas se configuran en `gpg-agent.conf`.

</details>

### Pregunta 16

¿Qué formato de certificado utiliza S/MIME a diferencia de GPG/OpenPGP?

a) PEM
b) DER
c) X.509
d) PKCS#7

<details><summary>Respuesta</summary>

**c) Correcta**

S/MIME utiliza certificados X.509 emitidos por Autoridades de Certificación (CA) dentro de una infraestructura PKI jerárquica. GPG/OpenPGP utiliza su propio formato de certificado basado en el estándar OpenPGP (RFC 4880), con un modelo de confianza descentralizado (Web of Trust).

</details>

### Pregunta 17

¿Cuál es el propósito del archivo `~/.gnupg/trustdb.gpg`?

a) Almacenar las claves privadas del usuario
b) Almacenar la base de datos de confianza con los niveles asignados a cada clave
c) Guardar la configuración de los servidores de claves
d) Contener los certificados X.509 importados

<details><summary>Respuesta</summary>

**b) Correcta**

El archivo `trustdb.gpg` contiene la base de datos de confianza (trust database) de GPG, donde se registran los niveles de confianza del propietario (owner trust) asignados a cada clave. Esta información es utilizada por el modelo Web of Trust para calcular la validez de las claves.

</details>

### Pregunta 18

¿Qué algoritmo de cifrado asimétrico basado en curvas elípticas es considerado moderno y seguro para firmas digitales en GPG?

a) RSA-4096
b) DSA
c) Ed25519
d) 3DES

<details><summary>Respuesta</summary>

**c) Correcta**

Ed25519 es un esquema de firma digital basado en la curva Edwards Curve25519. Es moderno, eficiente y ofrece alta seguridad con claves más pequeñas que RSA. DSA está obsoleto, 3DES es un cifrado simétrico y RSA-4096, aunque seguro, no está basado en curvas elípticas.

</details>

### Pregunta 19

En cifrado híbrido, ¿cuál es el orden correcto de las operaciones al cifrar un mensaje?

a) Se cifra el mensaje con la clave pública del destinatario, luego se genera una clave simétrica
b) Se genera una clave simétrica de sesión, se cifra el mensaje con ella, y luego se cifra la clave simétrica con la clave pública del destinatario
c) Se cifra todo el mensaje directamente con la clave pública del destinatario
d) Se cifra el mensaje con la clave privada del remitente

<details><summary>Respuesta</summary>

**b) Correcta**

El cifrado híbrido combina la eficiencia del cifrado simétrico con la seguridad de distribución del cifrado asimétrico. Se genera una clave simétrica aleatoria de sesión, se cifra el contenido con ella (rápido para datos grandes), y finalmente se cifra solo la clave simétrica con la clave pública del destinatario.

</details>

### Pregunta 20

¿Qué diferencia principal existe entre `gpg2 --sign archivo.txt` y `gpg2 --detach-sign archivo.txt`?

a) `--sign` solo firma, `--detach-sign` firma y cifra
b) `--sign` genera un archivo que contiene el documento y la firma juntos, `--detach-sign` genera solo la firma en un archivo separado
c) `--sign` usa cifrado simétrico, `--detach-sign` usa asimétrico
d) No hay diferencia funcional, solo cambia la extensión del archivo

<details><summary>Respuesta</summary>

**b) Correcta**

`--sign` crea un archivo binario (.gpg) que contiene tanto el documento original como la firma integrada. `--detach-sign` genera únicamente el archivo de firma (.sig) por separado, dejando el archivo original intacto. La firma separada es ideal para distribución de software donde se quiere mantener el archivo original sin modificar.

</details>

### Pregunta 21

Escribe el comando para importar una clave pública GPG desde un archivo llamado `clave-publica.asc`.

<input type="text" class="fill-blank" data-answer="gpg2 --import clave-publica.asc" data-alt="gpg --import clave-publica.asc" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpg2 --import clave-publica.asc**

El comando `--import` permite añadir claves (públicas o privadas) al anillo de claves local desde un archivo. El formato puede ser binario o ASCII armored (.asc).

</details>

### Pregunta 22

Escribe el comando para cifrar el archivo `datos.txt` de forma simétrica con el algoritmo AES-256 usando GPG.

<input type="text" class="fill-blank" data-answer="gpg2 --symmetric --cipher-algo AES256 datos.txt" data-alt="gpg --symmetric --cipher-algo AES256 datos.txt,gpg2 -c --cipher-algo AES256 datos.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpg2 --symmetric --cipher-algo AES256 datos.txt**

`--symmetric` (o `-c`) indica cifrado simétrico con passphrase. `--cipher-algo AES256` especifica el algoritmo. Se generará el archivo `datos.txt.gpg` y se solicitará una passphrase para proteger el cifrado.

</details>

### Pregunta 23

Escribe el comando para verificar la firma separada `documento.txt.sig` contra el archivo original `documento.txt`.

<input type="text" class="fill-blank" data-answer="gpg2 --verify documento.txt.sig documento.txt" data-alt="gpg --verify documento.txt.sig documento.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpg2 --verify documento.txt.sig documento.txt**

El comando `--verify` comprueba la validez de una firma. Para firmas separadas (detached), se deben especificar ambos archivos: primero el archivo de firma y luego el archivo original. GPG verificará que la firma corresponde al contenido y que fue creada con una clave válida.

</details>

### Pregunta 24

Escribe el comando para generar un HMAC SHA-256 de un archivo llamado `mensaje.txt` usando OpenSSL con la clave secreta "mi-secreto".

<input type="text" class="fill-blank" data-answer="openssl dgst -sha256 -hmac &quot;mi-secreto&quot; mensaje.txt" data-alt="openssl dgst -sha256 -hmac 'mi-secreto' mensaje.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openssl dgst -sha256 -hmac "mi-secreto" mensaje.txt**

El subcomando `dgst` de OpenSSL calcula resúmenes (hashes). La opción `-hmac` genera un código de autenticación de mensajes basado en hash (HMAC) combinando SHA-256 con la clave secreta proporcionada, verificando tanto integridad como autenticidad.

</details>

### Pregunta 25

Escribe el comando para recargar la configuración del agente GPG sin reiniciar el servicio.

<input type="text" class="fill-blank" data-answer="gpg-connect-agent reloadagent /bye" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpg-connect-agent reloadagent /bye**

`gpg-connect-agent` permite comunicarse con el agente GPG en ejecución. El comando `reloadagent` recarga la configuración desde `~/.gnupg/gpg-agent.conf` sin necesidad de reiniciar el demonio. `/bye` cierra la conexión con el agente.

</details>
