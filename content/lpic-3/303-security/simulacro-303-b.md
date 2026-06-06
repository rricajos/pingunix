---
title: "Simulacro Examen 303 - B"
tags:
  - lpic-3
  - examen-303
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "303"
---

# Simulacro B - Examen 303

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="303-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="331.1" data-correct="c">

### Pregunta 1 (Subtema 331.1)

En una infraestructura PKI jerarquica de tres niveles, la CA raiz firma el certificado de la CA intermedia y esta firma los certificados finales. ¿Que extension X.509v3 se utiliza para limitar la profundidad maxima de CAs intermedias permitidas en la cadena?

- [ ] a) `keyUsage = pathLimit:1`
- [ ] b) `extendedKeyUsage = caDepth:1`
- [ ] c) `basicConstraints = CA:TRUE, pathlen:1`
- [ ] d) `certificatePolicies = maxDepth:1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `basicConstraints = CA:TRUE, pathlen:1`**

La extension `basicConstraints` con `pathlen:N` restringe cuantas CAs intermedias adicionales pueden existir debajo de esa CA en la cadena de confianza. Un valor de `pathlen:0` significa que la CA puede emitir certificados finales pero no puede crear sub-CAs. `pathlen:1` permite una sub-CA adicional debajo. Esta restriccion es critica en PKIs empresariales para controlar la delegacion de confianza y prevenir que CAs intermedias comprometidas creen sub-CAs no autorizadas.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="331.1" data-correct="a">

### Pregunta 2 (Subtema 331.1)

¿Que campo del certificado X.509v3 contiene la URL del servidor OCSP al que los clientes deben consultar para verificar el estado de revocacion?

- [ ] a) Authority Information Access (AIA)
- [ ] b) CRL Distribution Points (CDP)
- [ ] c) Subject Alternative Name (SAN)
- [ ] d) Certificate Policies

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Authority Information Access (AIA)**

La extension Authority Information Access (AIA) contiene dos tipos de informacion: la URL del servidor OCSP responder (metodo `id-ad-ocsp`) y opcionalmente la URL para descargar el certificado del emisor (metodo `id-ad-caIssuers`). Los clientes TLS utilizan la URL OCSP del AIA para verificar en tiempo real si el certificado ha sido revocado. Los CRL Distribution Points (CDP) contienen las URLs de descarga de las CRLs, que es un mecanismo diferente de verificacion de revocacion.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="331.1" data-correct="d">

### Pregunta 3 (Subtema 331.1)

Un administrador necesita crear un certificado autofirmado valido por 365 dias con clave RSA de 4096 bits en un solo comando. ¿Cual es el comando correcto?

- [ ] a) `openssl genrsa -x509 -days 365 -newkey rsa:4096 -out cert.pem`
- [ ] b) `openssl x509 -self-sign -days 365 -keysize 4096 -out cert.pem`
- [ ] c) `openssl ca -selfsign -days 365 -newkey rsa:4096 -out cert.pem`
- [ ] d) `openssl req -x509 -newkey rsa:4096 -days 365 -keyout key.pem -out cert.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `openssl req -x509 -newkey rsa:4096 -days 365 -keyout key.pem -out cert.pem`**

El comando `openssl req -x509` combina la generacion de clave, la creacion de CSR y la firma en un solo paso, produciendo un certificado autofirmado. `-newkey rsa:4096` genera una nueva clave RSA de 4096 bits, `-days 365` establece la validez, `-keyout` especifica el archivo para la clave privada y `-out` para el certificado. Se puede anadir `-nodes` para no cifrar la clave privada con contrasena, util para servidores que arrancan sin intervencion.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="331.1" data-correct="b">

### Pregunta 4 (Subtema 331.1)

¿Que extension X.509v3 especifica los usos permitidos del certificado a nivel de aplicacion, como autenticacion de servidor web o firma de correo electronico?

- [ ] a) `keyUsage`
- [ ] b) `extendedKeyUsage`
- [ ] c) `basicConstraints`
- [ ] d) `subjectKeyIdentifier`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `extendedKeyUsage`**

La extension `extendedKeyUsage` (EKU) define los propositos especificos de aplicacion para los que puede usarse el certificado: `serverAuth` (autenticacion de servidor TLS), `clientAuth` (autenticacion de cliente), `codeSigning` (firma de codigo), `emailProtection` (S/MIME), `timeStamping`, entre otros. `keyUsage` define operaciones criptograficas de bajo nivel (digitalSignature, keyEncipherment, keyCertSign), mientras que EKU define el contexto de uso a nivel de aplicacion.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="331.2" data-correct="a">

### Pregunta 5 (Subtema 331.2)

¿Que comando de OpenSSL permite comprobar la conexion TLS a un servidor remoto, mostrando la cadena de certificados y los detalles de la negociacion?

- [ ] a) `openssl s_client -connect servidor:443 -showcerts`
- [ ] b) `openssl tls -test servidor:443 -chain`
- [ ] c) `openssl verify -connect servidor:443 -showcerts`
- [ ] d) `openssl x509 -connect servidor:443 -text`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `openssl s_client -connect servidor:443 -showcerts`**

`openssl s_client` establece una conexion TLS con un servidor remoto y muestra informacion detallada de la negociacion: version del protocolo, suite de cifrado, cadena de certificados, verificacion de la cadena y el certificado del servidor. La opcion `-showcerts` muestra todos los certificados de la cadena en formato PEM. Es una herramienta esencial para diagnosticar problemas de TLS. Se pueden usar opciones como `-servername` para SNI, `-tls1_3` para forzar la version, y `-starttls smtp` para protocolos que usan STARTTLS.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="331.2" data-correct="c">

### Pregunta 6 (Subtema 331.2)

Un servidor web Apache necesita configurar OCSP Stapling para mejorar el rendimiento de la verificacion de revocacion. ¿Que directivas son necesarias?

- [ ] a) `OCSPEnable on` y `OCSPResponder url`
- [ ] b) `SSLVerifyClient require` y `SSLOCSPEnable on`
- [ ] c) `SSLUseStapling on` y `SSLStaplingCache shmcb:/tmp/stapling(128000)`
- [ ] d) `SSLStapling enable` y `SSLCertificateChainFile ca.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `SSLUseStapling on` y `SSLStaplingCache shmcb:/tmp/stapling(128000)`**

OCSP Stapling permite que el servidor web obtenga la respuesta OCSP del responder y la envie al cliente durante el handshake TLS, eliminando la necesidad de que el cliente contacte al responder directamente. En Apache, `SSLUseStapling on` activa la funcionalidad y `SSLStaplingCache` define la cache compartida para almacenar las respuestas. Opcionalmente, `SSLStaplingResponderTimeout` ajusta el timeout y `SSLStaplingReturnResponderErrors off` evita enviar errores al cliente.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="331.2" data-correct="b">

### Pregunta 7 (Subtema 331.2)

¿Que comando descarga y verifica una CRL (Certificate Revocation List) publicada por una CA, mostrando su contenido?

- [ ] a) `openssl verify -crl_download -CAfile ca.pem`
- [ ] b) `openssl crl -in crl.pem -text -noout`
- [ ] c) `openssl x509 -crl -text -in crl.pem`
- [ ] d) `openssl revoke -list -in crl.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `openssl crl -in crl.pem -text -noout`**

El comando `openssl crl` procesa archivos CRL. Con `-text` muestra el contenido legible incluyendo el emisor, fecha de emision, proxima actualizacion y la lista de certificados revocados con sus numeros de serie y fechas de revocacion. `-noout` suprime la salida en formato PEM. Si la CRL esta en formato DER, se anade `-inform DER`. Para verificar un certificado contra una CRL, se usa `openssl verify -crl_check -CAfile ca.pem -CRLfile crl.pem cert.pem`.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="331.2" data-correct="d">

### Pregunta 8 (Subtema 331.2)

¿Que formato de archivo agrupa un certificado, su clave privada y los certificados intermedios en un unico archivo protegido por contrasena, comun en entornos Windows e IIS?

- [ ] a) PEM con concatenacion
- [ ] b) PKCS#7 (.p7b)
- [ ] c) DER bundle
- [ ] d) PKCS#12 (.p12/.pfx)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) PKCS#12 (.p12/.pfx)**

PKCS#12 es un formato binario que encapsula la clave privada, el certificado del servidor y opcionalmente los certificados intermedios en un unico archivo protegido por contrasena. Es ampliamente usado en Windows, IIS, Java keystores y para transportar credenciales. Se crea con `openssl pkcs12 -export -in cert.pem -inkey key.pem -certfile chain.pem -out bundle.p12`. Para extraer los componentes: `openssl pkcs12 -in bundle.p12 -clcerts -nokeys -out cert.pem` (certificado) y `-nocerts -nodes -out key.pem` (clave).

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="331.3" data-correct="a">

### Pregunta 9 (Subtema 331.3)

¿Que comando de GPG genera un nuevo par de claves (publica y privada) de forma interactiva, permitiendo elegir el algoritmo y el tamano?

- [ ] a) `gpg --full-generate-key`
- [ ] b) `gpg --create-keypair`
- [ ] c) `gpg --new-key --interactive`
- [ ] d) `gpg --keygen --full`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `gpg --full-generate-key`**

`gpg --full-generate-key` (o `--full-gen-key`) inicia un asistente interactivo que permite seleccionar el tipo de clave (RSA, DSA, ECC), el tamano en bits, la fecha de expiracion, el nombre y el correo electronico. La version simplificada `gpg --gen-key` usa valores predeterminados. Para generacion no interactiva se puede usar `gpg --batch --gen-key parametros.txt`. Las claves generadas se almacenan en `~/.gnupg/`. Es recomendable generar un certificado de revocacion inmediatamente despues con `gpg --gen-revoke`.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="331.3" data-correct="c">

### Pregunta 10 (Subtema 331.3)

Un administrador necesita firmar digitalmente un archivo con GPG para garantizar su autenticidad e integridad, produciendo una firma separada del archivo original. ¿Que comando es correcto?

- [ ] a) `gpg --sign --embed archivo.tar.gz`
- [ ] b) `gpg --clearsign archivo.tar.gz`
- [ ] c) `gpg --detach-sign --armor archivo.tar.gz`
- [ ] d) `gpg --verify --sign archivo.tar.gz`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `gpg --detach-sign --armor archivo.tar.gz`**

`gpg --detach-sign` (o `-b`) crea un archivo de firma separado (`.sig` o `.asc` con `--armor`) sin modificar ni incluir el archivo original. Esto es ideal para distribuir software, ya que los usuarios descargan el archivo y la firma por separado y verifican con `gpg --verify archivo.tar.gz.asc archivo.tar.gz`. `--clearsign` es para texto plano legible con firma integrada. `--sign` comprime y firma el archivo en un unico paquete GPG.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="331.3" data-correct="b">

### Pregunta 11 (Subtema 331.3)

En el modelo de confianza de GPG (Web of Trust), ¿que significa asignar un nivel de confianza "marginal" a una clave?

- [ ] a) La clave se considera no confiable y se rechaza automaticamente
- [ ] b) Se necesitan al menos tres firmas de claves con confianza marginal para validar una clave desconocida
- [ ] c) La clave se considera completamente confiable para firmar otras claves
- [ ] d) La clave solo es valida para cifrar, no para firmar

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Se necesitan al menos tres firmas de claves con confianza marginal para validar una clave desconocida**

En el modelo Web of Trust de GPG, el nivel de confianza "marginal" significa que se confia parcialmente en la capacidad del propietario de esa clave para verificar identidades. Por defecto, GPG requiere tres firmas de claves con confianza marginal (o una firma de una clave con confianza completa) para considerar valida una clave no firmada directamente. Los niveles son: `unknown`, `none`, `marginal`, `full` y `ultimate`. Este modelo descentralizado contrasta con la PKI jerarquica basada en CAs.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="331.3" data-correct="d">

### Pregunta 12 (Subtema 331.3)

¿Que comando de GPG permite importar una clave publica desde un servidor de claves publico?

- [ ] a) `gpg --fetch-key --server keys.openpgp.org ID_CLAVE`
- [ ] b) `gpg --download-key keyserver=keys.openpgp.org ID_CLAVE`
- [ ] c) `gpg --import --url keys.openpgp.org/ID_CLAVE`
- [ ] d) `gpg --keyserver keys.openpgp.org --recv-keys ID_CLAVE`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `gpg --keyserver keys.openpgp.org --recv-keys ID_CLAVE`**

`gpg --recv-keys` descarga una clave publica desde un servidor de claves y la importa al anillo local. `--keyserver` especifica el servidor (como `keys.openpgp.org`, `keyserver.ubuntu.com` o `pgp.mit.edu`). Para buscar claves se usa `gpg --keyserver servidor --search-keys correo@ejemplo.com`. Para enviar una clave al servidor: `gpg --keyserver servidor --send-keys ID_CLAVE`. El servidor de claves predeterminado se puede configurar en `~/.gnupg/gpg.conf` con la directiva `keyserver`.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="331.4" data-correct="b">

### Pregunta 13 (Subtema 331.4)

¿Que algoritmo de cifrado asimetrico basado en curvas elipticas es utilizado por GPG como alternativa mas eficiente a RSA?

- [ ] a) AES-256-GCM
- [ ] b) Curve25519 (Ed25519/ECDH)
- [ ] c) Blowfish-CBC
- [ ] d) Camellia-256

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Curve25519 (Ed25519/ECDH)**

Curve25519 es una curva eliptica disenada por Daniel J. Bernstein que proporciona seguridad equivalente a RSA-3072 con claves mucho mas cortas (256 bits). GPG utiliza Ed25519 para firmas digitales y ECDH sobre Curve25519 (X25519) para intercambio de claves. Las ventajas incluyen mayor velocidad, claves mas pequenas, resistencia a ataques de canal lateral y ausencia de parametros configurables (eliminando errores de implementacion). En GnuPG 2.1+, se puede seleccionar al generar claves con la opcion ECC.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="331.4" data-correct="a">

### Pregunta 14 (Subtema 331.4)

¿Que comando cifra un archivo con GPG usando la clave publica de un destinatario especifico?

- [ ] a) `gpg --encrypt --recipient usuario@email.com archivo.txt`
- [ ] b) `gpg --cipher --to usuario@email.com archivo.txt`
- [ ] c) `gpg --asymmetric --dest usuario@email.com archivo.txt`
- [ ] d) `gpg --public-encrypt usuario@email.com archivo.txt`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `gpg --encrypt --recipient usuario@email.com archivo.txt`**

`gpg --encrypt` (o `-e`) cifra un archivo usando criptografia asimetrica. `--recipient` (o `-r`) especifica el destinatario cuya clave publica se usara para cifrar. GPG realmente genera una clave de sesion simetrica aleatoria, cifra el archivo con esa clave (tipicamente AES-256), y luego cifra la clave de sesion con la clave publica del destinatario. Se pueden especificar multiples destinatarios con varias opciones `-r`. El resultado se descifra con `gpg --decrypt archivo.txt.gpg`.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="331.4" data-correct="c">

### Pregunta 15 (Subtema 331.4)

¿Que mecanismo criptografico utiliza LUKS internamente para proteger la clave maestra del volumen, derivando una clave a partir de la contrasena del usuario?

- [ ] a) SHA-512 simple
- [ ] b) HMAC-SHA256
- [ ] c) PBKDF2 (o Argon2 en LUKS2)
- [ ] d) bcrypt

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) PBKDF2 (o Argon2 en LUKS2)**

LUKS utiliza una funcion de derivacion de claves (KDF) para convertir la contrasena del usuario en una clave de cifrado que desbloquea la clave maestra almacenada en los key slots. LUKS1 usa PBKDF2 (Password-Based Key Derivation Function 2) con muchas iteraciones para resistir ataques de fuerza bruta. LUKS2 introduce soporte para Argon2id, que ademas de ser costoso en tiempo, requiere grandes cantidades de memoria, dificultando ataques con hardware especializado (GPUs, ASICs).

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="331.4" data-correct="d">

### Pregunta 16 (Subtema 331.4)

¿Que comando de GPG verifica la firma digital de un archivo firmado, comprobando la autenticidad e integridad?

- [ ] a) `gpg --check-sig archivo.txt.sig`
- [ ] b) `gpg --authenticate archivo.txt.sig`
- [ ] c) `gpg --validate archivo.txt.sig archivo.txt`
- [ ] d) `gpg --verify archivo.txt.sig archivo.txt`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `gpg --verify archivo.txt.sig archivo.txt`**

`gpg --verify` comprueba la firma digital de un archivo. Para firmas separadas (detached), se especifica primero el archivo de firma y luego el archivo original. GPG verifica que la firma fue creada con la clave privada correspondiente a una clave publica del anillo local, que el archivo no ha sido modificado desde la firma, y muestra la fecha de firma y el ID de la clave. Si la clave publica no esta en el anillo, indica que no puede verificar la firma y muestra el ID necesario.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="332.1" data-correct="b">

### Pregunta 17 (Subtema 332.1)

¿Que comando muestra informacion detallada de la cabecera LUKS de un dispositivo cifrado, incluyendo el estado de cada key slot?

- [ ] a) `cryptsetup info /dev/sdb1`
- [ ] b) `cryptsetup luksDump /dev/sdb1`
- [ ] c) `cryptsetup luksStatus /dev/sdb1`
- [ ] d) `cryptsetup luksInfo /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `cryptsetup luksDump /dev/sdb1`**

`cryptsetup luksDump` muestra toda la informacion de la cabecera LUKS: version, UUID, algoritmo de cifrado, modo de cifrado, tamano de clave, hash, iteraciones PBKDF2/Argon2, sal (salt) y el estado de cada key slot (ENABLED/DISABLED). Esta informacion es esencial para auditoria y diagnostico. El comando `cryptsetup status nombre` muestra informacion de un dispositivo ya abierto (mapeado), no de la cabecera LUKS.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="332.1" data-correct="c">

### Pregunta 18 (Subtema 332.1)

Un administrador necesita realizar un backup de la cabecera LUKS de un dispositivo cifrado para poder restaurarla en caso de corrupcion. ¿Que comando es correcto?

- [ ] a) `cryptsetup luksBackup /dev/sdb1 --header-file backup.img`
- [ ] b) `dd if=/dev/sdb1 of=backup.img bs=1M count=2`
- [ ] c) `cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file backup.img`
- [ ] d) `cryptsetup luksDump /dev/sdb1 > backup.img`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file backup.img`**

`cryptsetup luksHeaderBackup` crea una copia binaria exacta de la cabecera LUKS, incluyendo todos los key slots. Este backup es critico porque si la cabecera se corrompe (por ejemplo, por un error de escritura en los primeros sectores), todos los datos del volumen se pierden irremediablemente. Para restaurar: `cryptsetup luksHeaderRestore /dev/sdb1 --header-backup-file backup.img`. El backup debe almacenarse de forma segura, ya que contiene los key slots cifrados.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="332.1" data-correct="a">

### Pregunta 19 (Subtema 332.1)

¿Que opcion de `cryptsetup` permite abrir un volumen LUKS usando un archivo de clave en lugar de una contrasena interactiva?

- [ ] a) `cryptsetup luksOpen /dev/sdb1 datos --key-file /root/keyfile`
- [ ] b) `cryptsetup luksOpen /dev/sdb1 datos --password-file /root/keyfile`
- [ ] c) `cryptsetup luksOpen /dev/sdb1 datos --passphrase /root/keyfile`
- [ ] d) `cryptsetup luksOpen /dev/sdb1 datos --auth-file /root/keyfile`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `cryptsetup luksOpen /dev/sdb1 datos --key-file /root/keyfile`**

La opcion `--key-file` permite especificar un archivo cuyo contenido se usa como contrasena para desbloquear el volumen LUKS. El archivo puede contener datos binarios aleatorios (generados con `dd if=/dev/urandom of=/root/keyfile bs=4096 count=1`) o texto. Para uso automatizado en el arranque, el archivo de clave se referencia en `/etc/crypttab` en la tercera columna. Los permisos del archivo deben ser restrictivos (`chmod 400`) y debe almacenarse en una ubicacion segura.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="332.1" data-correct="d">

### Pregunta 20 (Subtema 332.1)

¿Que diferencia principal tiene LUKS2 respecto a LUKS1 en terminos de gestion de metadatos?

- [ ] a) LUKS2 no soporta key slots multiples
- [ ] b) LUKS2 utiliza cabeceras de tamano fijo de 1 MB
- [ ] c) LUKS2 elimina el soporte para cifrado AES
- [ ] d) LUKS2 usa metadatos en formato JSON y soporta cabeceras redundantes con autorecuperacion

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) LUKS2 usa metadatos en formato JSON y soporta cabeceras redundantes con autorecuperacion**

LUKS2 moderniza completamente la gestion de metadatos respecto a LUKS1. Almacena la configuracion en formato JSON legible, mantiene dos copias redundantes de la cabecera para resistir corrupcion parcial, soporta checksums de integridad en los metadatos, permite un numero practicamente ilimitado de key slots (frente a 8 en LUKS1), introduce soporte para Argon2id como KDF, y permite el cifrado autenticado con integridad (modo AEAD). Se puede convertir de LUKS1 a LUKS2 con `cryptsetup convert`.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="332.2" data-correct="c">

### Pregunta 21 (Subtema 332.2)

¿Que tipo de registro DNSSEC se almacena en la zona padre para establecer la cadena de confianza con la zona hija?

- [ ] a) DNSKEY
- [ ] b) RRSIG
- [ ] c) DS (Delegation Signer)
- [ ] d) NSEC3PARAM

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) DS (Delegation Signer)**

El registro DS se publica en la zona padre y contiene un hash de la KSK (Key Signing Key) de la zona hija. Establece la cadena de confianza entre niveles: un resolver DNSSEC valida el registro DS en la zona padre (firmado con la clave de la zona padre), obtiene el DNSKEY de la zona hija, verifica que el hash del DNSKEY coincide con el DS, y luego usa ese DNSKEY para validar los registros RRSIG de la zona hija. Sin el registro DS, la zona hija no esta enlazada a la cadena de confianza.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="332.2" data-correct="a">

### Pregunta 22 (Subtema 332.2)

¿Que parametro de BIND en `named.conf` habilita la validacion DNSSEC en un resolver recursivo?

- [ ] a) `dnssec-validation auto;`
- [ ] b) `dnssec-enable yes;`
- [ ] c) `validate-dnssec on;`
- [ ] d) `dnssec-verify auto;`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `dnssec-validation auto;`**

La directiva `dnssec-validation auto;` en la seccion `options` de `named.conf` habilita la validacion DNSSEC en BIND y utiliza automaticamente las trust anchors incorporadas (clave raiz de DNSSEC). Con `auto`, BIND mantiene actualizada la clave raiz mediante el mecanismo RFC 5011 (automated trust anchor rollover). La alternativa `dnssec-validation yes;` requiere configurar manualmente las trust anchors con `trust-anchors` o `managed-keys`. `dnssec-enable` fue eliminado en BIND 9.16+ ya que DNSSEC esta siempre habilitado.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="332.2" data-correct="b">

### Pregunta 23 (Subtema 332.2)

¿Que es DANE (DNS-Based Authentication of Named Entities) y que tipo de registro DNS utiliza?

- [ ] a) Un protocolo de cifrado DNS que usa registros DNSKEY
- [ ] b) Un mecanismo que asocia certificados TLS con nombres de dominio usando registros TLSA
- [ ] c) Un sistema de autenticacion de servidores DNS usando registros SRV
- [ ] d) Un metodo de cifrado de transferencias de zona usando registros TSIG

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Un mecanismo que asocia certificados TLS con nombres de dominio usando registros TLSA**

DANE (RFC 6698) permite a los administradores de dominio especificar que certificados TLS son validos para sus servicios, publicando registros TLSA en DNS firmados con DNSSEC. Los registros TLSA contienen: uso del certificado (CA constraint, service certificate, trust anchor, domain-issued), selector (certificado completo o clave publica), metodo de coincidencia (exact, SHA-256, SHA-512) y los datos del certificado. DANE reduce la dependencia de las CAs publicas y protege contra CAs comprometidas.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="332.2" data-correct="d">

### Pregunta 24 (Subtema 332.2)

¿Que herramienta de linea de comandos permite diagnosticar problemas de validacion DNSSEC consultando registros especificos con el flag +dnssec?

- [ ] a) `nslookup +dnssec ejemplo.com`
- [ ] b) `host -D ejemplo.com`
- [ ] c) `named-checkzone -dnssec ejemplo.com`
- [ ] d) `dig +dnssec +multi ejemplo.com DNSKEY`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `dig +dnssec +multi ejemplo.com DNSKEY`**

`dig` con la opcion `+dnssec` solicita las firmas DNSSEC (registros RRSIG) junto con los datos consultados. `+multi` formata la salida de registros largos en multiples lineas para mejor legibilidad. Se pueden consultar registros especificos como DNSKEY, DS, NSEC, NSEC3 y RRSIG. El flag `ad` (Authenticated Data) en la respuesta indica que la cadena DNSSEC fue validada correctamente. `dig +sigchase` (en versiones antiguas) o `delv` (reemplazo moderno) permiten rastrear la cadena de confianza completa.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="332.3" data-correct="c">

### Pregunta 25 (Subtema 332.3)

¿Que directiva de `sshd_config` restringe el conjunto de algoritmos de cifrado aceptados por el servidor SSH, eliminando algoritmos debiles?

- [ ] a) `EncryptionAlgorithms aes256-gcm@openssh.com`
- [ ] b) `AllowCiphers aes256-gcm@openssh.com,chacha20-poly1305@openssh.com`
- [ ] c) `Ciphers aes256-gcm@openssh.com,chacha20-poly1305@openssh.com`
- [ ] d) `SSHCiphers aes256-gcm@openssh.com,chacha20-poly1305@openssh.com`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `Ciphers aes256-gcm@openssh.com,chacha20-poly1305@openssh.com`**

La directiva `Ciphers` en `sshd_config` define la lista de algoritmos de cifrado simetrico permitidos para las conexiones SSH. Para hardening, se deben eliminar algoritmos debiles como `arcfour`, `3des-cbc` y los modos CBC en general, permitiendo solo cifrados modernos como `aes256-gcm@openssh.com` y `chacha20-poly1305@openssh.com`. Directivas similares incluyen `MACs` (algoritmos de integridad), `KexAlgorithms` (intercambio de claves) y `HostKeyAlgorithms` (algoritmos de clave de host).

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="332.3" data-correct="a">

### Pregunta 26 (Subtema 332.3)

¿Que directiva de `sshd_config` configura la autenticacion de dos factores combinando clave publica y contrasena?

- [ ] a) `AuthenticationMethods publickey,password`
- [ ] b) `RequireAuth publickey+password`
- [ ] c) `TwoFactor publickey password`
- [ ] d) `MultiAuth publickey,password`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `AuthenticationMethods publickey,password`**

La directiva `AuthenticationMethods` permite definir secuencias de metodos de autenticacion requeridos. La coma indica que ambos metodos son necesarios en orden (primero clave publica, luego contrasena). Se pueden definir alternativas con espacios: `publickey,password publickey,keyboard-interactive` permite dos opciones de secuencia. Para integracion con OTP (como Google Authenticator), se usa `publickey,keyboard-interactive` junto con la configuracion de PAM correspondiente (`pam_google_authenticator`).

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="332.3" data-correct="b">

### Pregunta 27 (Subtema 332.3)

¿Que comando genera un par de claves SSH de tipo Ed25519, considerado mas seguro y eficiente que RSA?

- [ ] a) `ssh-keygen -t ecdsa -b 521`
- [ ] b) `ssh-keygen -t ed25519 -C "comentario"`
- [ ] c) `ssh-keygen -t curve25519 -f ~/.ssh/id_ed25519`
- [ ] d) `ssh-keygen -a ed25519 -o`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ssh-keygen -t ed25519 -C "comentario"`**

`ssh-keygen -t ed25519` genera un par de claves basado en la curva Edwards 25519. Ed25519 proporciona seguridad equivalente a RSA-3072 pero con claves de solo 256 bits, firmas mas rapidas y mejor resistencia a ataques de canal lateral. `-C` anade un comentario identificativo. No necesita la opcion `-b` (tamano) porque Ed25519 tiene tamano fijo. La opcion `-a` especifica el numero de rondas de KDF para proteger la clave privada con contrasena. Ed25519 es la opcion recomendada para nuevas claves SSH.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="332.3" data-correct="d">

### Pregunta 28 (Subtema 332.3)

¿Que archivo de configuracion de AIDE define las reglas de que archivos y atributos monitorizar para la deteccion de intrusiones?

- [ ] a) `/etc/aide/aide.ini`
- [ ] b) `/var/lib/aide/aide.rules`
- [ ] c) `/etc/security/aide.conf`
- [ ] d) `/etc/aide/aide.conf` (o `/etc/aide.conf`)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `/etc/aide/aide.conf` (o `/etc/aide.conf`)**

El archivo `aide.conf` define las reglas de monitorizacion: que directorios escanear, que atributos verificar (permisos, propietario, tamano, checksums SHA-256/SHA-512, tiempos de acceso/modificacion, ACLs, xattrs, contexto SELinux) y que excluir. Se definen grupos de reglas personalizados como `NORMAL = p+i+n+u+g+s+b+m+c+sha256` y luego se aplican a rutas: `/etc NORMAL`, `/var/log LOG`. Despues de configurar, se inicializa la base de datos con `aide --init` y se verifica periodicamente con `aide --check`.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="333.1" data-correct="a">

### Pregunta 29 (Subtema 333.1)

¿Que comando de SELinux muestra la lista de todos los booleanos y sus estados actuales?

- [ ] a) `getsebool -a`
- [ ] b) `semanage boolean --list-all`
- [ ] c) `sestatus --booleans`
- [ ] d) `seinfo -b --active`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `getsebool -a`**

`getsebool -a` lista todos los booleanos de SELinux con sus valores actuales (on/off). Los booleanos permiten ajustar la politica SELinux sin necesidad de recompilarla. Por ejemplo, `httpd_can_network_connect` permite a Apache conectarse a la red, `samba_enable_home_dirs` permite a Samba compartir directorios home. Para cambiar un booleano temporalmente: `setsebool httpd_can_network_connect on`. Para hacerlo persistente (sobrevive reinicios): `setsebool -P httpd_can_network_connect on`. `semanage boolean -l` muestra informacion mas detallada.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="333.1" data-correct="c">

### Pregunta 30 (Subtema 333.1)

Un administrador mueve archivos HTML a `/var/www/html/` con `mv` y Apache devuelve errores 403 Forbidden con SELinux en modo enforcing. ¿Cual es la causa mas probable y la solucion?

- [ ] a) Los permisos de archivo son incorrectos; ejecutar `chmod 644`
- [ ] b) El modulo `mod_access` de Apache esta mal configurado
- [ ] c) Los archivos conservan el contexto SELinux del directorio de origen; ejecutar `restorecon -Rv /var/www/html/`
- [ ] d) El booleano `httpd_read_user_content` esta desactivado

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Los archivos conservan el contexto SELinux del directorio de origen; ejecutar `restorecon -Rv /var/www/html/`**

Cuando se mueven archivos con `mv`, mantienen su contexto SELinux original (por ejemplo, `user_home_t` si venian del home del usuario). Apache necesita que los archivos tengan el tipo `httpd_sys_content_t` para servirlos. `restorecon -Rv` aplica el contexto predeterminado definido en la politica para esa ruta. Si se hubieran copiado con `cp`, habrian heredado automaticamente el contexto correcto del directorio destino. Se puede verificar con `ls -Z /var/www/html/`.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="333.1" data-correct="d">

### Pregunta 31 (Subtema 333.1)

¿Que comando de SELinux asigna permanentemente un nuevo contexto de tipo a una ruta del sistema de archivos?

- [ ] a) `chcon -t httpd_sys_content_t /datos/web`
- [ ] b) `setsebool -P httpd_sys_content /datos/web`
- [ ] c) `restorecon -t httpd_sys_content_t /datos/web`
- [ ] d) `semanage fcontext -a -t httpd_sys_content_t "/datos/web(/.*)?"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `semanage fcontext -a -t httpd_sys_content_t "/datos/web(/.*)?"`**

`semanage fcontext -a` anade una regla permanente a la politica de contextos de archivos. La expresion regular `"/datos/web(/.*)?"` cubre el directorio y todo su contenido recursivamente. Despues se debe ejecutar `restorecon -Rv /datos/web` para aplicar el cambio. `chcon` cambia el contexto temporalmente (se pierde con `restorecon` o un relabeling). La combinacion `semanage fcontext` + `restorecon` es el metodo correcto y persistente para asignar contextos personalizados.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="333.1" data-correct="b">

### Pregunta 32 (Subtema 333.1)

¿Que archivo de log debe consultarse para analizar las denegaciones AVC (Access Vector Cache) de SELinux?

- [ ] a) `/var/log/messages`
- [ ] b) `/var/log/audit/audit.log`
- [ ] c) `/var/log/selinux/denials.log`
- [ ] d) `/var/log/syslog`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/var/log/audit/audit.log`**

Las denegaciones AVC de SELinux se registran en `/var/log/audit/audit.log` cuando el demonio `auditd` esta activo (que es lo habitual). Los mensajes tienen el formato `type=AVC msg=audit(timestamp): avc: denied { accion } for ...` incluyendo el proceso, el recurso, el contexto de seguridad y la regla de politica que causo la denegacion. La herramienta `ausearch -m AVC` facilita la busqueda, y `sealert -a /var/log/audit/audit.log` proporciona diagnosticos legibles con sugerencias de solucion.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="333.2" data-correct="a">

### Pregunta 33 (Subtema 333.2)

¿Que comando de AppArmor genera un perfil de seguridad para una aplicacion de forma interactiva, ejecutandola en modo aprendizaje?

- [ ] a) `aa-genprof /usr/sbin/aplicacion`
- [ ] b) `apparmor_genprof --learn /usr/sbin/aplicacion`
- [ ] c) `aa-create --interactive /usr/sbin/aplicacion`
- [ ] d) `apparmor_parser --generate /usr/sbin/aplicacion`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `aa-genprof /usr/sbin/aplicacion`**

`aa-genprof` genera un perfil de AppArmor de forma interactiva. Pone la aplicacion en modo complain, la ejecuta para registrar todos los accesos a archivos y recursos, y luego presenta cada acceso al administrador para decidir si permitirlo, denegarlo o usar un patron glob. El perfil resultante se guarda en `/etc/apparmor.d/`. Despues de generar el perfil, se puede refinar con `aa-logprof` que analiza nuevas violaciones del log. Este enfoque de "whitelist" asegura que solo los accesos explicitamente permitidos son autorizados.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="333.2" data-correct="c">

### Pregunta 34 (Subtema 333.2)

En un perfil de AppArmor, ¿que significa la regla `/var/log/app/*.log rw,`?

- [ ] a) Acceso de solo lectura a todos los archivos del directorio /var/log/app/
- [ ] b) Ejecucion restringida de archivos .log en /var/log/app/
- [ ] c) Acceso de lectura y escritura a archivos con extension .log en /var/log/app/
- [ ] d) Redireccion de escritura de logs al directorio /var/log/app/

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Acceso de lectura y escritura a archivos con extension .log en /var/log/app/**

En la sintaxis de perfiles de AppArmor, la ruta define el recurso y los permisos se especifican como sufijo: `r` (lectura), `w` (escritura), `x` (ejecucion), `m` (mmap con PROT_EXEC), `k` (lock), `l` (link). Los patrones glob `*` coinciden con cualquier nombre en un nivel, y `**` coinciden recursivamente. Asi, `/var/log/app/*.log rw,` permite leer y escribir cualquier archivo que termine en `.log` directamente dentro de `/var/log/app/`, pero no en subdirectorios.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="333.2" data-correct="d">

### Pregunta 35 (Subtema 333.2)

¿Que mecanismo del kernel Linux permite aislar grupos de procesos limitando su uso de CPU, memoria, I/O de disco y red?

- [ ] a) namespaces
- [ ] b) ulimit
- [ ] c) seccomp
- [ ] d) cgroups (control groups)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) cgroups (control groups)**

Los cgroups (control groups) son una funcionalidad del kernel Linux que permite organizar procesos en grupos jerarquicos y controlar la asignacion de recursos: CPU (cpu/cpuacct), memoria (memory), I/O de disco (blkio), red (net_cls/net_prio), numero de procesos (pids) y dispositivos (devices). cgroups v2 unifica la jerarquia en un unico arbol. Son la base de la contenedorizacion (Docker, LXC, systemd). Se gestionan via el pseudo-filesystem `/sys/fs/cgroup/` o con herramientas como `cgcreate`, `cgset` y `cgexec`.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="333.2" data-correct="b">

### Pregunta 36 (Subtema 333.2)

¿Que comando establece el limite maximo de archivos abiertos a 65536 para el usuario "webserver" de forma persistente?

- [ ] a) `ulimit -n 65536` en `/etc/profile`
- [ ] b) Anadir `webserver hard nofile 65536` en `/etc/security/limits.conf`
- [ ] c) `sysctl fs.max-open-files=65536`
- [ ] d) `setrlimit --user webserver --nofile 65536`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Anadir `webserver hard nofile 65536` en `/etc/security/limits.conf`**

El archivo `/etc/security/limits.conf` (procesado por el modulo PAM `pam_limits`) define limites persistentes por usuario o grupo. El formato es: `dominio tipo recurso valor`. `webserver hard nofile 65536` establece el limite duro de descriptores de archivo abiertos a 65536 para el usuario "webserver". Tambien se debe definir el limite soft (`webserver soft nofile 65536`). `ulimit -n` en `/etc/profile` afecta a todos los usuarios y no es especifico. Los archivos en `/etc/security/limits.d/*.conf` permiten configuracion modular.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="334.1" data-correct="c">

### Pregunta 37 (Subtema 334.1)

¿Que formato de regla de Snort define una alerta cuando se detecta trafico SSH en un puerto no estandar (8022)?

- [ ] a) `filter tcp any any -> any 8022 (msg:"SSH no estandar"; detect:ssh; sid:1000001;)`
- [ ] b) `detect tcp $EXTERNAL_NET any -> $HOME_NET 8022 (msg:"SSH no estandar"; content:"SSH"; sid:1000001;)`
- [ ] c) `alert tcp $EXTERNAL_NET any -> $HOME_NET 8022 (msg:"SSH no estandar"; content:"SSH-"; depth:4; sid:1000001; rev:1;)`
- [ ] d) `log tcp any any -> any 8022 (type:ssh; msg:"SSH no estandar"; sid:1000001;)`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `alert tcp $EXTERNAL_NET any -> $HOME_NET 8022 (msg:"SSH no estandar"; content:"SSH-"; depth:4; sid:1000001; rev:1;)`**

Las reglas de Snort siguen el formato: `accion protocolo origen puerto_origen -> destino puerto_destino (opciones)`. `alert` genera una alerta, `content:"SSH-"` busca la cadena "SSH-" en el payload (inicio del banner SSH), `depth:4` limita la busqueda a los primeros 4 bytes, `sid` es el identificador unico de la regla y `rev` la revision. Las variables `$EXTERNAL_NET` y `$HOME_NET` se definen en `snort.conf`. Suricata usa el mismo formato de reglas, lo que las hace intercambiables.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="334.1" data-correct="a">

### Pregunta 38 (Subtema 334.1)

¿Que ventaja principal tiene Suricata sobre Snort en entornos de alto rendimiento?

- [ ] a) Procesamiento multihilo nativo, aprovechando multiples nucleos de CPU simultaneamente
- [ ] b) Compatibilidad exclusiva con reglas Emerging Threats
- [ ] c) Capacidad de funcionar solo como IPS, no como IDS
- [ ] d) Soporte exclusivo para IPv6

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Procesamiento multihilo nativo, aprovechando multiples nucleos de CPU simultaneamente**

Suricata fue disenado desde el inicio con arquitectura multihilo, distribuyendo la carga de trabajo (captura de paquetes, decodificacion, deteccion, salida) entre multiples hilos que se ejecutan en paralelo en diferentes nucleos de CPU. Snort 2.x es monohilo (Snort 3 introduce multithreading). Suricata ademas soporta extraccion de archivos, identificacion de protocolos de aplicacion independiente del puerto, aceleracion por hardware y salida nativa en formato EVE JSON. Ambos son compatibles con las mismas reglas de deteccion.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="334.1" data-correct="d">

### Pregunta 39 (Subtema 334.1)

¿Que componente de OSSEC (Open Source Security) recopila logs y eventos del sistema, los analiza en busca de anomalias y envia alertas?

- [ ] a) El agente remoto exclusivamente
- [ ] b) El modulo de firewall activo
- [ ] c) El escaner de vulnerabilidades integrado
- [ ] d) El servidor (manager) con su motor de analisis de logs y reglas de decodificacion

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) El servidor (manager) con su motor de analisis de logs y reglas de decodificacion**

OSSEC es un HIDS (Host-based Intrusion Detection System) con arquitectura cliente-servidor. El servidor (manager) recibe logs de los agentes instalados en los hosts monitorizados, los procesa a traves de decodificadores (extraen campos de los logs), los evalua contra reglas de deteccion (correlacion, frecuencia, patrones) y genera alertas. Ademas incluye verificacion de integridad de archivos (syscheck), deteccion de rootkits, monitorizacion de politicas y respuesta activa (bloqueo automatico de IPs). Wazuh es un fork moderno de OSSEC.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="334.1" data-correct="b">

### Pregunta 40 (Subtema 334.1)

¿Que comando configura Suricata para funcionar en modo IPS (Intrusion Prevention System) inline usando NFQUEUE de Linux?

- [ ] a) `suricata --ips-mode -i eth0`
- [ ] b) `suricata -q 0` (junto con reglas de iptables/nftables que envian trafico a NFQUEUE)
- [ ] c) `suricata --inline --interface eth0`
- [ ] d) `suricata -c suricata.yaml --block`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `suricata -q 0` (junto con reglas de iptables/nftables que envian trafico a NFQUEUE)**

Para modo IPS inline en Linux, Suricata se conecta a NFQUEUE (Netfilter Queue) que permite que un programa en espacio de usuario decida el destino de cada paquete. Se configura iptables con `iptables -I FORWARD -j NFQUEUE --queue-num 0` para enviar el trafico reenviado a la cola 0, y Suricata se inicia con `-q 0` para leer de esa cola. Las reglas con accion `drop` bloquean paquetes maliciosos en tiempo real. Alternativamente, se puede usar AF_PACKET en modo inline con dos interfaces.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="334.2" data-correct="c">

### Pregunta 41 (Subtema 334.2)

¿Que comando de nftables crea una cadena con politica de filtrado en la tabla inet para trafico entrante?

- [ ] a) `nft add chain inet filter input { policy drop }`
- [ ] b) `nft create chain inet filter input type filter hook input`
- [ ] c) `nft add chain inet filter input { type filter hook input priority 0\; policy drop\; }`
- [ ] d) `nft new chain inet filter input hook=input policy=drop`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `nft add chain inet filter input { type filter hook input priority 0\; policy drop\; }`**

En nftables, las cadenas base requieren especificar `type` (filter, route, nat), `hook` (prerouting, input, forward, output, postrouting), `priority` (orden de evaluacion) y opcionalmente `policy` (accept/drop). La familia `inet` procesa tanto IPv4 como IPv6 con una unica regla. Los puntos y coma dentro de las llaves deben escaparse en la shell con `\;`. Las cadenas regulares (sin hook) se usan para organizar reglas y se llaman con `jump` o `goto` desde cadenas base.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="334.2" data-correct="a">

### Pregunta 42 (Subtema 334.2)

¿Que comando de nftables permite guardar la configuracion actual del firewall en un archivo para restaurarla posteriormente?

- [ ] a) `nft list ruleset > /etc/nftables.conf`
- [ ] b) `nft save > /etc/nftables.conf`
- [ ] c) `nft export rules /etc/nftables.conf`
- [ ] d) `nft dump config /etc/nftables.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `nft list ruleset > /etc/nftables.conf`**

`nft list ruleset` muestra todas las tablas, cadenas y reglas configuradas en formato que puede ser reimportado. Al redirigir la salida a `/etc/nftables.conf`, se crea un archivo de configuracion persistente. Para restaurar: `nft -f /etc/nftables.conf`. El servicio systemd `nftables.service` carga automaticamente este archivo en el arranque. Para limpiar todas las reglas antes de cargar: `nft flush ruleset`. A diferencia de iptables que necesita `iptables-save`/`iptables-restore`, nftables usa su propio formato nativo.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="334.2" data-correct="d">

### Pregunta 43 (Subtema 334.2)

¿Que regla de nftables implementa rate limiting para limitar las conexiones SSH nuevas a 3 por minuto por IP de origen?

- [ ] a) `nft add rule inet filter input tcp dport 22 limit 3/minute accept`
- [ ] b) `nft add rule inet filter input tcp dport 22 ratelimit 3/min accept`
- [ ] c) `nft add rule inet filter input tcp dport 22 throttle rate 3/minute accept`
- [ ] d) `nft add rule inet filter input tcp dport 22 ct state new meter ssh-limit { ip saddr limit rate 3/minute } accept`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `nft add rule inet filter input tcp dport 22 ct state new meter ssh-limit { ip saddr limit rate 3/minute } accept`**

Esta regla utiliza varios elementos de nftables: `ct state new` filtra solo conexiones nuevas (no establecidas), `meter ssh-limit` crea un conjunto dinamico de contadores, `ip saddr limit rate 3/minute` aplica el limite de 3 conexiones por minuto individualmente a cada IP de origen. Los paquetes que superan el limite no coinciden con la regla `accept` y caen a la politica por defecto (drop) o a la siguiente regla. El `meter` (o `set` en versiones recientes) es esencial para el rate limiting per-IP.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="334.2" data-correct="b">

### Pregunta 44 (Subtema 334.2)

¿Que regla de nftables redirige todo el trafico HTTP entrante (puerto 80) al puerto 8080 de un servidor interno 10.0.0.5 (DNAT)?

- [ ] a) `nft add rule inet nat prerouting tcp dport 80 redirect to 10.0.0.5:8080`
- [ ] b) `nft add rule ip nat prerouting tcp dport 80 dnat to 10.0.0.5:8080`
- [ ] c) `nft add rule ip nat postrouting tcp dport 80 dnat to 10.0.0.5:8080`
- [ ] d) `nft add rule ip filter forward tcp dport 80 dnat 10.0.0.5:8080`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `nft add rule ip nat prerouting tcp dport 80 dnat to 10.0.0.5:8080`**

DNAT (Destination NAT) se aplica en la cadena `prerouting` de la tabla `nat`, antes de la decision de enrutamiento. `dnat to 10.0.0.5:8080` cambia la direccion de destino y el puerto del paquete. Se usa la familia `ip` (no `inet`) porque `dnat` con direcciones IPv4 especificas requiere la familia `ip`. Ademas, se necesita `ip_forward` habilitado y reglas en la cadena `forward` que permitan el trafico reenviado. `redirect` es para redirigir al mismo host (cambia solo el puerto).

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="334.3" data-correct="c">

### Pregunta 45 (Subtema 334.3)

¿Que directiva de configuracion de OpenVPN especifica que se debe utilizar cifrado TLS para el canal de control y define el archivo de parametros Diffie-Hellman?

- [ ] a) `tls-cipher AES-256-GCM` y `key-exchange dh2048.pem`
- [ ] b) `ssl-mode tls` y `dh-params dh2048.pem`
- [ ] c) `tls-server` (o `tls-client`) y `dh dh2048.pem`
- [ ] d) `tls-enable` y `diffie-hellman dh2048.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `tls-server` (o `tls-client`) y `dh dh2048.pem`**

En OpenVPN, `tls-server` activa el modo TLS en el lado servidor (requiere certificado y clave) y `tls-client` en el lado cliente. La directiva `dh` especifica el archivo con los parametros Diffie-Hellman necesarios para el intercambio de claves en el servidor (generado con `openssl dhparam -out dh2048.pem 2048`). Directivas de seguridad adicionales incluyen `tls-auth` (clave HMAC para proteger el canal de control contra DoS), `tls-crypt` (cifra el canal de control completo) y `tls-version-min 1.2`.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="334.3" data-correct="a">

### Pregunta 46 (Subtema 334.3)

¿Que comando genera un par de claves WireGuard (publica y privada) para un peer?

- [ ] a) `wg genkey | tee privatekey | wg pubkey > publickey`
- [ ] b) `wireguard --generate-keys --output keys/`
- [ ] c) `wg keygen --private privatekey --public publickey`
- [ ] d) `wg-quick genkey privatekey publickey`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `wg genkey | tee privatekey | wg pubkey > publickey`**

`wg genkey` genera una clave privada Curve25519 aleatoria de 256 bits codificada en Base64. `tee privatekey` la guarda en un archivo y la pasa por la tuberia a `wg pubkey`, que calcula la clave publica correspondiente y se redirige a `publickey`. Tambien se puede generar una clave pre-compartida (PSK) para seguridad adicional post-cuantica con `wg genpsk`. Los permisos de la clave privada deben ser restrictivos (`chmod 600`). Las claves se incluyen en la configuracion `/etc/wireguard/wg0.conf`.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="334.3" data-correct="b">

### Pregunta 47 (Subtema 334.3)

¿Que protocolo y puertos utiliza IPsec cuando opera con NAT Traversal (NAT-T)?

- [ ] a) TCP puerto 500 y TCP puerto 4500
- [ ] b) UDP puerto 500 (IKE) y UDP puerto 4500 (NAT-T, encapsulando ESP en UDP)
- [ ] c) UDP puerto 500 y protocolo IP 50 (ESP) directamente
- [ ] d) TCP puerto 4500 exclusivamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) UDP puerto 500 (IKE) y UDP puerto 4500 (NAT-T, encapsulando ESP en UDP)**

IPsec normalmente usa el protocolo IP 50 (ESP) y UDP 500 (IKE), pero ESP no puede atravesar dispositivos NAT porque no tiene puertos. NAT Traversal (NAT-T, RFC 3947/3948) resuelve esto encapsulando los paquetes ESP dentro de UDP en el puerto 4500. IKE detecta automaticamente la presencia de NAT durante la negociacion (enviando hashes de las direcciones) y cambia al puerto 4500. En `strongSwan`, se habilita con `nat_traversal=yes` en `ipsec.conf` o es automatico en `swanctl.conf`.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="334.3" data-correct="d">

### Pregunta 48 (Subtema 334.3)

¿Que diferencia fundamental existe entre el modo tunel y el modo transporte de IPsec?

- [ ] a) El modo tunel solo cifra y el modo transporte solo autentica
- [ ] b) El modo tunel usa IKEv2 y el modo transporte usa IKEv1
- [ ] c) El modo tunel no soporta ESP y el modo transporte no soporta AH
- [ ] d) El modo tunel cifra el paquete IP completo y lo encapsula en un nuevo paquete IP, mientras que el modo transporte solo cifra el payload

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) El modo tunel cifra el paquete IP completo y lo encapsula en un nuevo paquete IP, mientras que el modo transporte solo cifra el payload**

En modo tunel, el paquete IP original completo (cabecera + payload) se cifra y se encapsula dentro de un nuevo paquete IP con las direcciones de los gateways VPN como origen/destino. Esto oculta las direcciones IP internas y es el modo estandar para VPNs site-to-site. En modo transporte, solo se cifra el payload (datos de capa 4), manteniendo la cabecera IP original. El modo transporte se usa tipicamente para comunicacion host-to-host (como IPsec entre dos servidores en la misma red).

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="335.1" data-correct="c">

### Pregunta 49 (Subtema 335.1)

¿Que herramienta permite interceptar y modificar trafico HTTP/HTTPS en tiempo real para pruebas de seguridad de aplicaciones web?

- [ ] a) `Wireshark`
- [ ] b) `tcpdump`
- [ ] c) `Burp Suite` (o `OWASP ZAP`)
- [ ] d) `nmap --script http-*`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `Burp Suite` (o `OWASP ZAP`)**

Burp Suite y OWASP ZAP son proxies de interceptacion (intercepting proxies) que se situan entre el navegador y el servidor web, permitiendo capturar, inspeccionar, modificar y reenviar peticiones y respuestas HTTP/HTTPS en tiempo real. Son herramientas esenciales para pentesting web: permiten manipular parametros, detectar inyecciones SQL, XSS, CSRF y otras vulnerabilidades OWASP. Wireshark y tcpdump capturan trafico pero no permiten modificarlo interactivamente. ZAP es la alternativa open source a Burp Suite.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="335.1" data-correct="a">

### Pregunta 50 (Subtema 335.1)

¿Que sistema de puntuacion estandarizado se utiliza para evaluar la gravedad de las vulnerabilidades de seguridad?

- [ ] a) CVSS (Common Vulnerability Scoring System)
- [ ] b) OWASP Risk Rating
- [ ] c) CWE Severity Index
- [ ] d) NVD Priority Scale

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) CVSS (Common Vulnerability Scoring System)**

CVSS es un framework abierto y estandarizado para evaluar la gravedad de vulnerabilidades de seguridad con puntuaciones de 0.0 a 10.0. CVSS v3.1 evalua tres grupos de metricas: Base (vector de ataque, complejidad, privilegios requeridos, interaccion del usuario, alcance, impacto en confidencialidad/integridad/disponibilidad), Temporal (madurez del exploit, nivel de remediacion) y Ambiental (adaptacion al contexto especifico). Rangos: None (0.0), Low (0.1-3.9), Medium (4.0-6.9), High (7.0-8.9), Critical (9.0-10.0).

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="335.1" data-correct="b">

### Pregunta 51 (Subtema 335.1)

¿Que opcion de `nmap` ejecuta scripts NSE (Nmap Scripting Engine) para detectar vulnerabilidades conocidas en los servicios descubiertos?

- [ ] a) `nmap -sV --vulns objetivo`
- [ ] b) `nmap --script vuln objetivo`
- [ ] c) `nmap -sC --vulnerability objetivo`
- [ ] d) `nmap --exploit-scan objetivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `nmap --script vuln objetivo`**

El Nmap Scripting Engine (NSE) permite ejecutar scripts Lua para automatizar tareas de deteccion. `--script vuln` ejecuta todos los scripts de la categoria "vuln" que detectan vulnerabilidades conocidas (Heartbleed, ShellShock, MS17-010, etc.). Se pueden ejecutar scripts especificos con `--script nombre_script` o combinaciones con `--script "vuln and safe"`. `-sC` ejecuta los scripts "default" (no especificos de vulnerabilidades). Los scripts se almacenan en `/usr/share/nmap/scripts/` y se actualizan con `nmap --script-updatedb`.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="335.1" data-correct="d">

### Pregunta 52 (Subtema 335.1)

¿Que herramienta de pentesting permite realizar ataques de fuerza bruta contra servicios de autenticacion como SSH, FTP, HTTP y bases de datos?

- [ ] a) `John the Ripper`
- [ ] b) `Hashcat`
- [ ] c) `aircrack-ng`
- [ ] d) `Hydra` (THC Hydra)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `Hydra` (THC Hydra)**

Hydra es una herramienta de fuerza bruta en linea que ataca servicios de autenticacion de red en tiempo real. Soporta mas de 50 protocolos: SSH, FTP, HTTP(S), SMB, RDP, MySQL, PostgreSQL, VNC, LDAP, SMTP, entre otros. Se usa con listas de usuarios y contrasenas: `hydra -L users.txt -P passwords.txt ssh://objetivo`. John the Ripper y Hashcat son crackers de hashes offline (trabajan con hashes extraidos, no contra servicios en vivo). aircrack-ng es especifico para redes WiFi.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="335.2" data-correct="a">

### Pregunta 53 (Subtema 335.2)

¿Que tipo de ataque explota la falta de validacion de entrada para inyectar consultas SQL maliciosas a traves de formularios web?

- [ ] a) SQL Injection
- [ ] b) Cross-Site Scripting (XSS)
- [ ] c) Cross-Site Request Forgery (CSRF)
- [ ] d) Server-Side Request Forgery (SSRF)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) SQL Injection**

SQL Injection ocurre cuando la entrada del usuario se incorpora directamente a consultas SQL sin sanitizacion, permitiendo al atacante modificar la logica de la consulta. Por ejemplo, `' OR 1=1 --` en un campo de login puede evadir la autenticacion. Las defensas incluyen: consultas parametrizadas (prepared statements), ORMs, validacion estricta de entrada, principio de minimo privilegio en la base de datos y WAFs. Herramientas como `sqlmap` automatizan la deteccion y explotacion. Es consistentemente una de las vulnerabilidades mas criticas segun OWASP Top 10.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="335.2" data-correct="c">

### Pregunta 54 (Subtema 335.2)

¿Que herramienta automatiza la deteccion y explotacion de vulnerabilidades de inyeccion SQL en aplicaciones web?

- [ ] a) `nikto`
- [ ] b) `dirb`
- [ ] c) `sqlmap`
- [ ] d) `wpscan`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `sqlmap`**

`sqlmap` es una herramienta open source que automatiza la deteccion y explotacion de SQL injection. Soporta todos los tipos: boolean-based blind, time-based blind, error-based, UNION query, stacked queries y out-of-band. Puede identificar el gestor de base de datos (MySQL, PostgreSQL, MSSQL, Oracle, SQLite), extraer tablas, columnas y datos, acceder al sistema de archivos y ejecutar comandos del sistema operativo. Se usa con `sqlmap -u "http://sitio/page?id=1" --dbs` para enumerar bases de datos.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="335.2" data-correct="b">

### Pregunta 55 (Subtema 335.2)

En el contexto de pruebas de penetracion, ¿que diferencia fundamental existe entre un pentest de "caja negra" y uno de "caja blanca"?

- [ ] a) La caja negra solo prueba vulnerabilidades web y la caja blanca solo vulnerabilidades de red
- [ ] b) En caja negra el tester no tiene informacion previa del sistema, mientras que en caja blanca tiene acceso completo al codigo fuente, arquitectura y credenciales
- [ ] c) La caja negra usa herramientas automatizadas y la caja blanca es exclusivamente manual
- [ ] d) La caja negra se realiza desde Internet y la caja blanca desde la red interna

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) En caja negra el tester no tiene informacion previa del sistema, mientras que en caja blanca tiene acceso completo al codigo fuente, arquitectura y credenciales**

El pentest de caja negra (black box) simula un atacante externo sin conocimiento previo: el tester solo conoce la URL o IP objetivo y debe descubrir todo mediante reconocimiento. El pentest de caja blanca (white box) proporciona al tester toda la informacion: codigo fuente, diagramas de arquitectura, credenciales, documentacion interna. La caja gris (grey box) es un enfoque intermedio con informacion parcial (como credenciales de usuario normal). Cada enfoque tiene ventajas: caja negra es mas realista, caja blanca es mas exhaustiva.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="335.2" data-correct="d">

### Pregunta 56 (Subtema 335.2)

¿Que tecnica de post-explotacion permite a un atacante mantener acceso persistente a un sistema comprometido despues de un reinicio?

- [ ] a) Port scanning
- [ ] b) Vulnerability assessment
- [ ] c) Social engineering
- [ ] d) Instalacion de un backdoor (puerta trasera) mediante cron jobs, servicios systemd o claves SSH autorizadas

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Instalacion de un backdoor (puerta trasera) mediante cron jobs, servicios systemd o claves SSH autorizadas**

La persistencia es una fase critica de post-explotacion donde el atacante asegura acceso continuado al sistema. Metodos comunes en Linux incluyen: anadir claves SSH en `~/.ssh/authorized_keys`, crear cron jobs maliciosos, instalar servicios systemd, modificar scripts de inicio (`.bashrc`, `/etc/rc.local`), crear usuarios ocultos, o implantar rootkits a nivel de kernel. En pentesting legitimo, documentar los mecanismos de persistencia descubiertos es esencial para que el cliente pueda remediarlos.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="335.2" data-correct="a">

### Pregunta 57 (Subtema 335.2)

¿Que herramienta se utiliza para enumerar subdominios, direcciones IP y registros DNS de un objetivo durante la fase de reconocimiento de un pentest?

- [ ] a) `theHarvester` (o `amass`, `subfinder`)
- [ ] b) `Metasploit`
- [ ] c) `Burp Suite`
- [ ] d) `Wireshark`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `theHarvester` (o `amass`, `subfinder`)**

`theHarvester` recopila informacion OSINT (Open Source Intelligence) de un dominio objetivo: correos electronicos, subdominios, IPs y URLs de fuentes publicas como motores de busqueda, Shodan, VirusTotal, DNS brute force y certificados de transparencia. `amass` de OWASP es mas completo para enumeracion de subdominios. `subfinder` es rapido y eficiente para descubrimiento pasivo de subdominios. Esta fase de reconocimiento es la primera en la metodologia de pentesting y proporciona la superficie de ataque del objetivo.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="335.2" data-correct="c">

### Pregunta 58 (Subtema 335.2)

¿Que vulnerabilidad permite a un atacante ejecutar scripts maliciosos en el navegador de otro usuario a traves de una aplicacion web vulnerable?

- [ ] a) SQL Injection
- [ ] b) Remote File Inclusion (RFI)
- [ ] c) Cross-Site Scripting (XSS)
- [ ] d) Buffer Overflow

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Cross-Site Scripting (XSS)**

XSS permite inyectar scripts (tipicamente JavaScript) que se ejecutan en el navegador de las victimas. Existen tres tipos: Stored XSS (el script se almacena en el servidor y se sirve a todos los usuarios), Reflected XSS (el script se refleja desde la URL o parametros) y DOM-based XSS (se ejecuta modificando el DOM en el cliente). Las consecuencias incluyen robo de cookies de sesion, redireccion a sitios maliciosos, keylogging y defacement. Las defensas incluyen codificacion de salida, Content Security Policy (CSP), validacion de entrada y HTTPOnly cookies.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="335.2" data-correct="b">

### Pregunta 59 (Subtema 335.2)

¿Que metodologia estandarizada proporciona un framework completo para la realizacion de pruebas de penetracion profesionales?

- [ ] a) ISO 27001
- [ ] b) PTES (Penetration Testing Execution Standard) u OWASP Testing Guide
- [ ] c) NIST SP 800-53
- [ ] d) CIS Critical Security Controls

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) PTES (Penetration Testing Execution Standard) u OWASP Testing Guide**

PTES define las fases de un pentest profesional: acuerdo previo (pre-engagement), recopilacion de inteligencia (intelligence gathering), modelado de amenazas (threat modeling), analisis de vulnerabilidades, explotacion, post-explotacion e informe. OWASP Testing Guide se centra especificamente en pruebas de seguridad web. ISO 27001 es un estandar de gestion de seguridad de la informacion. NIST SP 800-53 define controles de seguridad. CIS Controls son mejores practicas de ciberdefensa. Ninguno de los ultimos tres es especifico de pentesting.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="335.2" data-correct="d">

### Pregunta 60 (Subtema 335.2)

¿Que tecnica de escalada de privilegios en Linux explota binarios con el bit SUID configurado que pertenecen a root?

- [ ] a) ARP spoofing para interceptar credenciales
- [ ] b) DNS cache poisoning para redirigir servicios
- [ ] c) Brute force del hash de root en /etc/shadow
- [ ] d) Ejecutar un binario SUID vulnerable (como un editor de texto o un comando con escape a shell) para obtener un shell con privilegios de root

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Ejecutar un binario SUID vulnerable (como un editor de texto o un comando con escape a shell) para obtener un shell con privilegios de root**

Los binarios con bit SUID (`chmod u+s`) se ejecutan con los privilegios del propietario (frecuentemente root). Si un binario SUID permite ejecutar comandos arbitrarios (como `vim`, `find -exec`, `python`, `nmap --interactive`), un atacante puede obtener un shell de root. La enumeracion de binarios SUID se realiza con `find / -perm -4000 -type f 2>/dev/null`. GTFOBins es un recurso que cataloga binarios explotables. La mitigacion incluye auditar periodicamente los SUID, aplicar `nosuid` en montajes y usar capabilities en lugar de SUID.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
