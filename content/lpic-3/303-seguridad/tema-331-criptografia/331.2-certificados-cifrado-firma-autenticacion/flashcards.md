---
title: "331.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.2"
---

# Flashcards: 331.2 - Certificados Cifrado Firma Autenticacion

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando exporta la clave pública de un usuario en formato ASCII (blindado)?

</div>
<div class="flashcard-back">

**R:** b). `gpg2 --export --armor usuario@ej.com > pub.asc`  La opción `--armor` (o `-a`) produce salida en formato ASCII Base64, adecuada para enviar por correo electrónico o publicar en texto plano.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-002">
<div class="flashcard-front">

**P:** En el modelo Web of Trust de GPG, ¿cuántas firmas de confianza "marginal" se necesitan por defecto para considerar una clave como válida?

</div>
<div class="flashcard-back">

**R:** c). 3  Por defecto, GPG requiere al menos 3 firmas de claves con confianza "marginal" o 1 firma de una clave con confianza "full" para considerar una clave como válida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando crea una firma separada (detached) de un archivo sin modificar el original?

</div>
<div class="flashcard-back">

**R:** c). `gpg2 --detach-sign archivo.txt`  `--detach-sign` crea un archivo de firma separado (archivo.txt.sig) sin modificar el archivo original. Esto es ideal para distribuir software con su firma.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es la principal diferencia entre GPG/OpenPGP y S/MIME?

</div>
<div class="flashcard-back">

**R:** b). GPG usa un modelo de confianza descentralizado (Web of Trust), S/MIME usa jerárquico (PKI/CA)  GPG/OpenPGP utiliza la Web of Trust donde los usuarios se firman mutuamente las claves. S/MIME se basa en certificados X.509 emitidos por Autoridades de Certificación en una estructura jerárquica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué archivo almacena la configuración del agente GPG, incluyendo el tiempo de caché de passphrases?

</div>
<div class="flashcard-back">

**R:** b). `~/.gnupg/gpg-agent.conf`  El archivo `gpg-agent.conf` contiene directivas como `default-cache-ttl` y `max-cache-ttl` que controlan cuánto tiempo el agente mantiene las passphrases en caché.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-006">
<div class="flashcard-front">

**P:** Un administrador necesita cifrar un archivo para dos destinatarios diferentes. ¿Qué comando es correcto?

</div>
<div class="flashcard-back">

**R:** b). `gpg2 --encrypt -r user1@ej.com -r user2@ej.com archivo.txt`  Se utiliza la opción `-r` (o `--recipient`) múltiples veces, una por cada destinatario. GPG cifrará el archivo de forma que cualquiera de los destinatarios pueda descifrarlo con su clave privada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué algoritmo hash se considera actualmente como el estándar mínimo recomendado para firmas digitales?

</div>
<div class="flashcard-back">

**R:** c). SHA-256  SHA-256 es el estándar mínimo recomendado actualmente. MD5 está completamente roto, SHA-1 se considera obsoleto. SHA-256 y SHA-512 son las opciones recomendadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando publica una clave pública en un servidor de claves?

</div>
<div class="flashcard-back">

**R:** b). `gpg2 --keyserver hkps://keys.openpgp.org --send-keys ID`  `--send-keys` envía la clave pública identificada por su ID al servidor de claves especificado con `--keyserver`. El protocolo `hkps://` utiliza HTTPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué opción de `gpg2 --clearsign` produce un archivo que permite leer el texto original sin necesidad de GPG?

</div>
<div class="flashcard-back">

**R:** a). Es una característica inherente de `--clearsign`; el texto es legible dentro del archivo firmado  `--clearsign` produce una firma "en claro" donde el texto original es visible directamente, enmarcado por cabeceras PGP. La firma se añade al final, permitiendo verificar la integridad sin perder legibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando de OpenSSL se utiliza para firmar un correo electrónico con S/MIME?

</div>
<div class="flashcard-back">

**R:** b). `openssl smime -sign -in msg.txt -signer cert.pem -inkey key.pem -out firmado.eml`  El subcomando `smime` de OpenSSL con la opción `-sign` firma un mensaje. Se necesita el certificado (`-signer`) y la clave privada (`-inkey`). La opción `a)` con `cms` también es válida técnicamente pero `smime` es la respuesta más directa para el examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué nivel de confianza del propietario en GPG se reserva exclusivamente para las claves propias del usuario?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El nivel `ultimate` indica confianza absoluta y solo debe asignarse a las claves del propio usuario. Asignar `ultimate` a claves ajenas compromete la integridad del modelo Web of Trust, ya que todas las claves firmadas por esa clave se considerarían automáticamente válidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué opción de `gpg2` permite generar una clave de forma rápida con valores por defecto especificando algoritmo y tamaño?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `--quick-generate-key` permite generar un par de claves sin el diálogo interactivo completo, aceptando el nombre/email y opcionalmente el algoritmo como argumentos directos. Para la generación interactiva completa se usa `--full-generate-key`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué protocolo utilizan los servidores de claves GPG cuando se especifica el esquema `hkps://`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `hkps://` (HKP Secure) utiliza HTTPS para la comunicación con servidores de claves, proporcionando cifrado TLS. El protocolo `hkp://` estándar utiliza HTTP sin cifrar en el puerto 11371.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-014">
<div class="flashcard-front">

**P:** Un administrador necesita verificar que un archivo no ha sido modificado desde que fue firmado. ¿Qué propiedad criptográfica garantiza esto?

</div>
<div class="flashcard-back">

**R:** c) Correcta. La integridad es la propiedad que garantiza que los datos no han sido alterados. Las firmas digitales verifican la integridad calculando un hash del contenido y cifrándolo con la clave privada del firmante. Cualquier modificación posterior invalidará la firma al no coincidir el hash.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué directiva en `~/.gnupg/gpg-agent.conf` establece el tiempo máximo absoluto (en segundos) que una passphrase permanece en caché?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `max-cache-ttl` define el tiempo máximo absoluto en segundos que una passphrase se mantiene en caché, independientemente de cuántas veces se use. `default-cache-ttl` define el tiempo de caché desde el último uso. Ambas se configuran en `gpg-agent.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué formato de certificado utiliza S/MIME a diferencia de GPG/OpenPGP?

</div>
<div class="flashcard-back">

**R:** c) Correcta. S/MIME utiliza certificados X.509 emitidos por Autoridades de Certificación (CA) dentro de una infraestructura PKI jerárquica. GPG/OpenPGP utiliza su propio formato de certificado basado en el estándar OpenPGP (RFC 4880), con un modelo de confianza descentralizado (Web of Trust).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito del archivo `~/.gnupg/trustdb.gpg`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El archivo `trustdb.gpg` contiene la base de datos de confianza (trust database) de GPG, donde se registran los niveles de confianza del propietario (owner trust) asignados a cada clave. Esta información es utilizada por el modelo Web of Trust para calcular la validez de las claves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué algoritmo de cifrado asimétrico basado en curvas elípticas es considerado moderno y seguro para firmas digitales en GPG?

</div>
<div class="flashcard-back">

**R:** c) Correcta. Ed25519 es un esquema de firma digital basado en la curva Edwards Curve25519. Es moderno, eficiente y ofrece alta seguridad con claves más pequeñas que RSA. DSA está obsoleto, 3DES es un cifrado simétrico y RSA-4096, aunque seguro, no está basado en curvas elípticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-019">
<div class="flashcard-front">

**P:** En cifrado híbrido, ¿cuál es el orden correcto de las operaciones al cifrar un mensaje?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El cifrado híbrido combina la eficiencia del cifrado simétrico con la seguridad de distribución del cifrado asimétrico. Se genera una clave simétrica aleatoria de sesión, se cifra el contenido con ella (rápido para datos grandes), y finalmente se cifra solo la clave simétrica con la clave pública del destinatario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué diferencia principal existe entre `gpg2 --sign archivo.txt` y `gpg2 --detach-sign archivo.txt`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `--sign` crea un archivo binario (.gpg) que contiene tanto el documento original como la firma integrada. `--detach-sign` genera únicamente el archivo de firma (.sig) por separado, dejando el archivo original intacto. La firma separada es ideal para distribución de software donde se quiere mantener el archivo original sin modificar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para importar una clave pública GPG desde un archivo llamado `clave-publica.asc`. <input type="text" class="fill-blank" data-answer="gpg2 --import clave-publica.asc" data-alt="gpg --import clave-publica.asc" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gpg2 --import clave-publica.asc. El comando `--import` permite añadir claves (públicas o privadas) al anillo de claves local desde un archivo. El formato puede ser binario o ASCII armored (.asc).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para cifrar el archivo `datos.txt` de forma simétrica con el algoritmo AES-256 usando GPG. <input type="text" class="fill-blank" data-answer="gpg2 --symmetric --cipher-algo AES256 datos.txt" data-alt="gpg --symmetric --cipher-algo AES256 datos.txt,gpg2 -c --cipher-algo AES256 datos.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gpg2 --symmetric --cipher-algo AES256 datos.txt. `--symmetric` (o `-c`) indica cifrado simétrico con passphrase. `--cipher-algo AES256` especifica el algoritmo. Se generará el archivo `datos.txt.gpg` y se solicitará una passphrase para proteger el cifrado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para verificar la firma separada `documento.txt.sig` contra el archivo original `documento.txt`. <input type="text" class="fill-blank" data-answer="gpg2 --verify documento.txt.sig documento.txt" data-alt="gpg --verify documento.txt.sig documento.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gpg2 --verify documento.txt.sig documento.txt. El comando `--verify` comprueba la validez de una firma. Para firmas separadas (detached), se deben especificar ambos archivos: primero el archivo de firma y luego el archivo original. GPG verificará que la firma corresponde al contenido y que fue creada con una clave válida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para generar un HMAC SHA-256 de un archivo llamado `mensaje.txt` usando OpenSSL con la clave secreta "mi-secreto". <input type="text" class="fill-blank" data-answer="openssl dgst -sha256 -hmac &quot;mi-secreto&quot; mensaje.txt" data-alt="openssl dgst -sha256 -hmac 'mi-secreto' mensaje.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openssl dgst -sha256 -hmac "mi-secreto" mensaje.txt. El subcomando `dgst` de OpenSSL calcula resúmenes (hashes). La opción `-hmac` genera un código de autenticación de mensajes basado en hash (HMAC) combinando SHA-256 con la clave secreta proporcionada, verificando tanto integridad como autenticidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para recargar la configuración del agente GPG sin reiniciar el servicio. <input type="text" class="fill-blank" data-answer="gpg-connect-agent reloadagent /bye" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gpg-connect-agent reloadagent /bye. `gpg-connect-agent` permite comunicarse con el agente GPG en ejecución. El comando `reloadagent` recarga la configuración desde `~/.gnupg/gpg-agent.conf` sin necesidad de reiniciar el demonio. `/bye` cierra la conexión con el agente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce a fondo los comandos de `gpg2` para gestión de claves, cifrado y firma. E...

</div>
<div class="flashcard-back">

**R:** Conoce a fondo los comandos de `gpg2` para gestión de claves, cifrado y firma. Entiende la diferencia entre el modelo de confianza de GPG (Web of Trust) y el de PKI (jerárquico).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: En la práctica, se usa cifrado asimétrico para intercambiar una clave simétrica ...

</div>
<div class="flashcard-back">

**R:** En la práctica, se usa cifrado asimétrico para intercambiar una clave simétrica de sesión, y luego cifrado simétrico para los datos (cifrado híbrido).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Una clave se considera válida si está firmada por al menos una clave de confianz...

</div>
<div class="flashcard-back">

**R:** Una clave se considera válida si está firmada por al menos una clave de confianza "full" o por tres claves de confianza "marginal".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: El protocolo `hkps://` usa HTTPS para la comunicación con servidores de claves. ...

</div>
<div class="flashcard-back">

**R:** El protocolo `hkps://` usa HTTPS para la comunicación con servidores de claves. `hkp://` es la versión sin cifrar en puerto 11371.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre el uso práctico de la criptografía para proteger datos, verificar identidades y garantizar la integridad de la información. Se centra en GnuPG (GPG) como herramienta principal, junto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son Firmas Digitales?

</div>
<div class="flashcard-back">

**R:** Las firmas digitales garantizan **autenticidad** (quién lo firmó) e **integridad** (que no se ha modificado).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son Algoritmos Hash?

</div>
<div class="flashcard-back">

**R:** Los algoritmos hash generan un resumen de longitud fija a partir de datos de cualquier tamaño. Son fundamentales para firmas digitales y verificación de integridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son Servidores de Claves?

</div>
<div class="flashcard-back">

**R:** Los servidores de claves permiten publicar y buscar claves públicas GPG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son gpg-agent?

</div>
<div class="flashcard-back">

**R:** El `gpg-agent` es un demonio que cachea passphrases y gestiona claves privadas, evitando tener que introducir la passphrase repetidamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son S/MIME (Secure/Multipurpose Internet Mail Extensions)?

</div>
<div class="flashcard-back">

**R:** S/MIME usa certificados X.509 (no GPG) para cifrar y firmar correo electrónico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

