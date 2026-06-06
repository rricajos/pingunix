---
title: "Simulacro Examen 303"
tags:
  - lpic-3
  - examen-303
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "303"
---

# Simulacro - Examen 303

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="303" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="331.1" data-correct="b">

### Pregunta 1 (Subtema 331.1)

¿Que componente de una infraestructura PKI es responsable de firmar certificados digitales?

- [ ] a) RA (Registration Authority)
- [ ] b) CA (Certificate Authority)
- [ ] c) CRL (Certificate Revocation List)
- [ ] d) OCSP (Online Certificate Status Protocol)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) CA (Certificate Authority)**

La Autoridad de Certificacion (CA) es el componente central de una PKI responsable de emitir y firmar certificados digitales X.509 usando su clave privada. La RA (Autoridad de Registro) verifica la identidad de los solicitantes antes de enviar la solicitud a la CA. La CRL es una lista de certificados revocados publicada por la CA, y OCSP es un protocolo para verificar el estado de revocacion en tiempo real.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="331.1" data-correct="c">

### Pregunta 2 (Subtema 331.1)

¿Que comando de OpenSSL genera una clave privada RSA de 4096 bits?

- [ ] a) `openssl rsa -newkey 4096 -out key.pem`
- [ ] b) `openssl genkey -rsa 4096 -out key.pem`
- [ ] c) `openssl genrsa -out key.pem 4096`
- [ ] d) `openssl req -newkey rsa:4096 -out key.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `openssl genrsa -out key.pem 4096`**

El comando `openssl genrsa` genera una clave privada RSA. El parametro `-out` especifica el archivo de salida y `4096` indica el tamano en bits. Opcionalmente se puede cifrar la clave con `-aes256` u otro algoritmo de cifrado. La opcion d) generaria una clave y una solicitud CSR simultaneamente, pero la sintaxis mostrada no es correcta para solo generar la clave.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="331.1" data-correct="a">

### Pregunta 3 (Subtema 331.1)

¿Que extension X.509v3 indica que un certificado puede ser usado como CA intermedia?

- [ ] a) `basicConstraints = CA:TRUE`
- [ ] b) `keyUsage = keyCertSign`
- [ ] c) `extendedKeyUsage = caIntermediate`
- [ ] d) `subjectType = CA`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `basicConstraints = CA:TRUE`**

La extension `basicConstraints` con el valor `CA:TRUE` indica que el certificado puede actuar como Autoridad de Certificacion, es decir, puede firmar otros certificados. Opcionalmente se puede limitar la profundidad de la cadena con `pathlen:N`. La extension `keyUsage = keyCertSign` tambien es necesaria para firmar certificados, pero por si sola no define el certificado como CA. Ambas extensiones deben estar presentes para una CA valida.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="331.1" data-correct="d">

### Pregunta 4 (Subtema 331.1)

¿Que comando de OpenSSL se utiliza para generar una solicitud de firma de certificado (CSR)?

- [ ] a) `openssl x509 -req -new`
- [ ] b) `openssl csr -new -key server.key`
- [ ] c) `openssl ca -newreq -key server.key`
- [ ] d) `openssl req -new -key server.key -out server.csr`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `openssl req -new -key server.key -out server.csr`**

El comando `openssl req -new` genera una nueva solicitud de firma de certificado (CSR). La opcion `-key` especifica la clave privada a utilizar y `-out` el archivo de salida. El CSR contiene la clave publica y la informacion del sujeto (CN, O, OU, etc.) y se envia a una CA para su firma. Se puede usar `-subj` para proporcionar la informacion del sujeto en la linea de comandos sin interaccion.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="331.2" data-correct="b">

### Pregunta 5 (Subtema 331.2)

¿Que comando verifica la cadena de confianza completa de un certificado X.509 contra un bundle de CAs?

- [ ] a) `openssl x509 -check -CAfile ca-bundle.pem -in cert.pem`
- [ ] b) `openssl verify -CAfile ca-bundle.pem cert.pem`
- [ ] c) `openssl s_client -verify cert.pem`
- [ ] d) `openssl validate -chain ca-bundle.pem cert.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `openssl verify -CAfile ca-bundle.pem cert.pem`**

El comando `openssl verify` comprueba la validez de un certificado verificando la cadena de confianza completa hasta una CA raiz de confianza. `-CAfile` especifica el archivo con los certificados de las CAs de confianza. Si hay CAs intermedias, se puede usar `-untrusted intermedia.pem` para proporcionarlas. El comando verifica la firma, las fechas de validez y las restricciones de las extensiones.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="331.2" data-correct="c">

### Pregunta 6 (Subtema 331.2)

¿Que protocolo permite verificar el estado de revocacion de un certificado en tiempo real sin necesidad de descargar una CRL completa?

- [ ] a) SCEP
- [ ] b) CMP
- [ ] c) OCSP
- [ ] d) EST

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) OCSP**

OCSP (Online Certificate Status Protocol, RFC 6960) permite a un cliente consultar el estado de un certificado especifico a un servidor OCSP responder en tiempo real. A diferencia de las CRLs que requieren descargar la lista completa de certificados revocados, OCSP responde solo sobre el certificado consultado, reduciendo el ancho de banda y proporcionando informacion mas actualizada. OCSP Stapling mejora la privacidad al hacer que el servidor web obtenga la respuesta OCSP.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="331.3" data-correct="a">

### Pregunta 7 (Subtema 331.3)

¿Que herramienta de linea de comandos se utiliza para gestionar certificados y claves en el almacen de claves de Let's Encrypt en un servidor Linux?

- [ ] a) `certbot`
- [ ] b) `letsencrypt-cli`
- [ ] c) `acme-client`
- [ ] d) `ssl-manage`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `certbot`**

`certbot` es el cliente oficial de la EFF para el protocolo ACME (Automated Certificate Management Environment) utilizado por Let's Encrypt. Permite obtener, renovar y gestionar certificados SSL/TLS gratuitos de forma automatizada. Soporta plugins para Apache (`--apache`) y Nginx (`--nginx`) que configuran automaticamente el servidor web. La renovacion se automatiza con `certbot renew` ejecutado periodicamente via cron o timer de systemd.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="331.3" data-correct="b">

### Pregunta 8 (Subtema 331.3)

¿Que comando de OpenSSL permite ver el contenido decodificado de un certificado X.509 en formato PEM?

- [ ] a) `openssl x509 -read -in cert.pem`
- [ ] b) `openssl x509 -text -noout -in cert.pem`
- [ ] c) `openssl cert -display cert.pem`
- [ ] d) `openssl asn1parse -in cert.pem`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `openssl x509 -text -noout -in cert.pem`**

El comando `openssl x509 -text` muestra el contenido completo del certificado de forma legible, incluyendo el emisor, sujeto, fechas de validez, algoritmo de firma, clave publica, extensiones y numero de serie. La opcion `-noout` evita que se imprima la version codificada en Base64 del certificado. `-in` especifica el archivo de entrada. `openssl asn1parse` muestra la estructura ASN.1 de bajo nivel, no la interpretacion del certificado.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="331.4" data-correct="c">

### Pregunta 9 (Subtema 331.4)

¿Que algoritmo de cifrado simetrico AES utiliza bloques de 128 bits con una clave de 256 bits en modo CBC?

- [ ] a) `aes128-cbc`
- [ ] b) `aes256-ecb`
- [ ] c) `aes-256-cbc`
- [ ] d) `aes-128-gcm`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `aes-256-cbc`**

AES (Advanced Encryption Standard) siempre opera con bloques de 128 bits, independientemente del tamano de clave. `aes-256-cbc` indica AES con clave de 256 bits en modo CBC (Cipher Block Chaining). En modo CBC, cada bloque se cifra usando el resultado del bloque anterior, lo que proporciona difusion. El modo GCM (Galois/Counter Mode) es preferido en implementaciones modernas porque proporciona cifrado autenticado (confidencialidad + integridad).

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="331.4" data-correct="a">

### Pregunta 10 (Subtema 331.4)

¿Que comando cifra un archivo usando GPG con cifrado simetrico?

- [ ] a) `gpg --symmetric archivo.txt`
- [ ] b) `gpg --encrypt --symmetric archivo.txt`
- [ ] c) `gpg --cipher archivo.txt`
- [ ] d) `gpg -e -s archivo.txt`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `gpg --symmetric archivo.txt`**

`gpg --symmetric` (o `gpg -c`) cifra un archivo usando un algoritmo de cifrado simetrico (por defecto AES-256 en versiones recientes). Solicita una frase de contrasena que se usa para derivar la clave de cifrado. El archivo resultante tiene extension `.gpg`. La opcion d) (`-e -s`) cifra con clave publica del destinatario (`-e`) y firma (`-s`), que es cifrado asimetrico con firma, no cifrado simetrico.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="332.1" data-correct="b">

### Pregunta 11 (Subtema 332.1)

¿Que sistema de cifrado de disco completo esta integrado en el kernel de Linux?

- [ ] a) TrueCrypt
- [ ] b) dm-crypt/LUKS
- [ ] c) VeraCrypt
- [ ] d) eCryptfs

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) dm-crypt/LUKS**

dm-crypt es el subsistema de cifrado a nivel de bloque integrado en el kernel de Linux, basado en la infraestructura device-mapper. LUKS (Linux Unified Key Setup) es la especificacion estandar para el cifrado de disco en Linux que se construye sobre dm-crypt, proporcionando gestion de multiples claves, cabeceras estandarizadas y metadatos de cifrado. La herramienta principal de gestion es `cryptsetup`. eCryptfs opera a nivel de sistema de archivos, no de bloque.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="332.1" data-correct="c">

### Pregunta 12 (Subtema 332.1)

¿Que comando inicializa una particion con cifrado LUKS?

- [ ] a) `luks-setup create /dev/sdb1`
- [ ] b) `cryptsetup create luks /dev/sdb1`
- [ ] c) `cryptsetup luksFormat /dev/sdb1`
- [ ] d) `dm-crypt --init /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `cryptsetup luksFormat /dev/sdb1`**

`cryptsetup luksFormat` inicializa una particion con el formato LUKS, escribiendo la cabecera LUKS que contiene los metadatos de cifrado, los slots de clave y los parametros del algoritmo. Por defecto utiliza AES-256-XTS. Se puede especificar el algoritmo con `--cipher`, el tamano de clave con `--key-size` y el hash con `--hash`. Despues de formatear, se abre con `cryptsetup luksOpen /dev/sdb1 nombre` para crear el dispositivo mapeado.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="332.1" data-correct="a">

### Pregunta 13 (Subtema 332.1)

¿Que archivo se utiliza para configurar el montaje automatico de volumenes LUKS durante el arranque?

- [ ] a) `/etc/crypttab`
- [ ] b) `/etc/luks.conf`
- [ ] c) `/etc/fstab` con opcion `encrypt`
- [ ] d) `/etc/dm-crypt/devices.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/etc/crypttab`**

El archivo `/etc/crypttab` define los volumenes cifrados que se abren automaticamente durante el arranque del sistema. Cada linea especifica: nombre del dispositivo mapeado, dispositivo o UUID de la particion cifrada, archivo de clave (o `none` para solicitar contrasena interactivamente) y opciones (como `luks`, `discard`, `noauto`). Despues de abrir el volumen con `crypttab`, el punto de montaje se define en `/etc/fstab` usando la ruta `/dev/mapper/nombre`.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="332.1" data-correct="d">

### Pregunta 14 (Subtema 332.1)

¿Cuantos slots de clave (key slots) soporta LUKS1 por defecto?

- [ ] a) 4
- [ ] b) 16
- [ ] c) 1
- [ ] d) 8

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) 8**

LUKS1 soporta hasta 8 key slots (numerados del 0 al 7), cada uno de los cuales puede contener una clave diferente que desbloquea el volumen. Esto permite que multiples usuarios tengan diferentes contrasenias para el mismo volumen, o mantener claves de recuperacion. Se gestionan con `cryptsetup luksAddKey` (agregar), `cryptsetup luksRemoveKey` (eliminar) y `cryptsetup luksDump` (ver estado de los slots). LUKS2 amplia significativamente el numero de slots disponibles.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="332.2" data-correct="b">

### Pregunta 15 (Subtema 332.2)

¿Que herramienta se utiliza para configurar DNSSEC en un servidor BIND, generando las claves de firma de zona?

- [ ] a) `rndc dnssec-keygen`
- [ ] b) `dnssec-keygen`
- [ ] c) `bind-keygen`
- [ ] d) `named-keygen`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dnssec-keygen`**

`dnssec-keygen` genera pares de claves DNSSEC (KSK - Key Signing Key y ZSK - Zone Signing Key). Para una KSK se usa `dnssec-keygen -f KSK -a RSASHA256 -b 2048 ejemplo.com` y para una ZSK `dnssec-keygen -a RSASHA256 -b 1024 ejemplo.com`. Las claves generadas se incluyen en el archivo de zona y luego se firma la zona con `dnssec-signzone`. En versiones modernas de BIND, se puede usar `dnssec-policy` para automatizar la gestion de claves.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="332.2" data-correct="c">

### Pregunta 16 (Subtema 332.2)

¿Que tipo de registro DNS contiene la clave publica de firma de zona utilizada por DNSSEC?

- [ ] a) SIG
- [ ] b) KEY
- [ ] c) DNSKEY
- [ ] d) RRSIG

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) DNSKEY**

El registro DNSKEY contiene la clave publica utilizada para firmar los registros de una zona DNS. Existen dos tipos: la ZSK (Zone Signing Key, flag 256) que firma los registros de la zona, y la KSK (Key Signing Key, flag 257) que firma los registros DNSKEY. Los registros RRSIG contienen las firmas digitales de cada conjunto de registros. El registro DS (Delegation Signer) en la zona padre enlaza con la KSK de la zona hija, estableciendo la cadena de confianza.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="332.2" data-correct="a">

### Pregunta 17 (Subtema 332.2)

¿Que comando firma una zona DNS con DNSSEC en BIND?

- [ ] a) `dnssec-signzone -o ejemplo.com ejemplo.com.zone`
- [ ] b) `rndc sign ejemplo.com`
- [ ] c) `named-signzone ejemplo.com.zone`
- [ ] d) `dnssec-sign -zone ejemplo.com`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `dnssec-signzone -o ejemplo.com ejemplo.com.zone`**

`dnssec-signzone` firma todos los registros de un archivo de zona, generando registros RRSIG y NSEC/NSEC3. La opcion `-o` especifica el nombre de la zona. El resultado es un archivo de zona firmado (con extension `.signed`) que incluye todas las firmas digitales. Opcionalmente se pueden especificar las claves con `-k` (KSK) y `-z` no se necesita ya que detecta automaticamente las ZSK en el directorio actual.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="332.3" data-correct="b">

### Pregunta 18 (Subtema 332.3)

¿Que directiva de SSH en `sshd_config` deshabilita la autenticacion por contrasena, forzando el uso de claves publicas?

- [ ] a) `AuthenticationMethods publickey`
- [ ] b) `PasswordAuthentication no`
- [ ] c) `DisablePassword yes`
- [ ] d) `KeyOnly yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `PasswordAuthentication no`**

La directiva `PasswordAuthentication no` en `/etc/ssh/sshd_config` desactiva la autenticacion por contrasena en el servidor SSH, obligando a los usuarios a autenticarse mediante claves publicas u otros metodos configurados. Para mayor seguridad, tambien se recomienda desactivar `ChallengeResponseAuthentication no` (o `KbdInteractiveAuthentication no` en versiones recientes) y asegurar que `PubkeyAuthentication yes` esta habilitado.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="332.3" data-correct="c">

### Pregunta 19 (Subtema 332.3)

¿Que herramienta se utiliza para verificar la integridad de archivos del sistema detectando modificaciones no autorizadas?

- [ ] a) `chkrootkit`
- [ ] b) `rkhunter`
- [ ] c) `AIDE`
- [ ] d) `ClamAV`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `AIDE`**

AIDE (Advanced Intrusion Detection Environment) es un sistema de deteccion de intrusiones basado en host que verifica la integridad de archivos. Genera una base de datos con checksums (SHA-256, SHA-512, etc.), permisos, propietarios y atributos de los archivos del sistema. Periodicamente se compara el estado actual con la base de datos para detectar modificaciones, adiciones o eliminaciones no autorizadas. Se inicializa con `aide --init` y se verifica con `aide --check`. `chkrootkit` y `rkhunter` buscan rootkits especificos.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="332.3" data-correct="a">

### Pregunta 20 (Subtema 332.3)

¿Que directiva de `sshd_config` limita los usuarios que pueden conectarse por SSH al servidor?

- [ ] a) `AllowUsers usuario1 usuario2`
- [ ] b) `PermitUsers usuario1 usuario2`
- [ ] c) `SSHUsers usuario1 usuario2`
- [ ] d) `LoginUsers usuario1 usuario2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `AllowUsers usuario1 usuario2`**

`AllowUsers` en `sshd_config` define una lista blanca de usuarios permitidos. Si esta directiva esta presente, solo los usuarios listados pueden conectarse por SSH. Se pueden usar patrones con comodines y especificar host de origen con `usuario@host`. Las directivas relacionadas son `DenyUsers` (lista negra), `AllowGroups` y `DenyGroups`. El orden de evaluacion es: DenyUsers, AllowUsers, DenyGroups, AllowGroups.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="333.1" data-correct="d">

### Pregunta 21 (Subtema 333.1)

¿Que sistema de control de acceso obligatorio (MAC) esta integrado en el kernel de Linux y utiliza politicas basadas en tipos y dominios?

- [ ] a) AppArmor
- [ ] b) Smack
- [ ] c) TOMOYO
- [ ] d) SELinux

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) SELinux**

SELinux (Security-Enhanced Linux) implementa un sistema MAC basado en Type Enforcement (TE), donde cada proceso ejecuta en un dominio de seguridad y cada recurso tiene un tipo. Las politicas definen que dominios pueden acceder a que tipos. SELinux tiene tres modos: `enforcing` (aplica las politicas), `permissive` (solo registra violaciones) y `disabled`. Se gestiona con herramientas como `semanage`, `setsebool`, `restorecon` y `audit2allow`.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="333.1" data-correct="b">

### Pregunta 22 (Subtema 333.1)

¿Que comando cambia el modo de SELinux de enforcing a permissive sin reiniciar?

- [ ] a) `selinux --permissive`
- [ ] b) `setenforce 0`
- [ ] c) `setsebool -P permissive on`
- [ ] d) `getenforce permissive`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `setenforce 0`**

`setenforce 0` cambia SELinux a modo permissive (registra pero no bloquea) y `setenforce 1` lo cambia a enforcing. Este cambio es temporal y se pierde al reiniciar. Para hacerlo permanente, se debe editar `/etc/selinux/config` y cambiar `SELINUX=permissive`. `getenforce` solo muestra el modo actual sin cambiarlo. `sestatus` muestra informacion detallada del estado de SELinux.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="333.1" data-correct="c">

### Pregunta 23 (Subtema 333.1)

¿Que comando restaura el contexto de seguridad SELinux predeterminado de un archivo o directorio?

- [ ] a) `semanage fcontext -a`
- [ ] b) `chcon -R --reference=/etc`
- [ ] c) `restorecon -Rv /ruta/directorio`
- [ ] d) `setcon --restore /ruta`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `restorecon -Rv /ruta/directorio`**

`restorecon` restaura los contextos de seguridad SELinux de archivos y directorios a los valores definidos en la politica de archivos. La opcion `-R` opera recursivamente y `-v` muestra los cambios realizados. Es especialmente importante ejecutarlo despues de mover archivos (que mantienen su contexto original) a diferencia de copiarlos (que heredan el contexto del destino). `semanage fcontext` define las reglas de contexto, pero `restorecon` las aplica.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="333.2" data-correct="a">

### Pregunta 24 (Subtema 333.2)

¿Que sistema MAC utiliza perfiles basados en rutas de archivos en lugar de etiquetas de seguridad?

- [ ] a) AppArmor
- [ ] b) SELinux
- [ ] c) Smack
- [ ] d) GrSecurity

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) AppArmor**

AppArmor utiliza un modelo basado en rutas de archivos (path-based) donde los perfiles de seguridad definen que archivos, directorios, capacidades de red y otros recursos puede acceder una aplicacion. A diferencia de SELinux que etiqueta cada archivo con un contexto de seguridad, AppArmor identifica los archivos por su ruta en el sistema de archivos. Los perfiles se almacenan en `/etc/apparmor.d/` y pueden estar en modo `enforce` o `complain` (equivalente a permissive).

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="333.2" data-correct="b">

### Pregunta 25 (Subtema 333.2)

¿Que comando pone un perfil de AppArmor en modo complain (solo registro, sin bloqueo)?

- [ ] a) `apparmor_parser --complain /etc/apparmor.d/perfil`
- [ ] b) `aa-complain /etc/apparmor.d/perfil`
- [ ] c) `apparmor-set complain perfil`
- [ ] d) `aa-logprof --complain perfil`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `aa-complain /etc/apparmor.d/perfil`**

`aa-complain` establece un perfil de AppArmor en modo complain, donde las violaciones de politica se registran en el log pero no se bloquean. Esto es util para desarrollar y depurar perfiles. `aa-enforce` cambia el perfil a modo enforce (bloqueo activo). `aa-logprof` analiza los logs de violaciones para sugerir modificaciones al perfil. `aa-genprof` genera un nuevo perfil interactivamente ejecutando la aplicacion en modo learning.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="333.2" data-correct="c">

### Pregunta 26 (Subtema 333.2)

¿Que utilidad del kernel limita los recursos del sistema que un proceso puede consumir (CPU, memoria, archivos abiertos)?

- [ ] a) `cgroups` exclusivamente
- [ ] b) SELinux
- [ ] c) `ulimit` y `pam_limits` (`/etc/security/limits.conf`)
- [ ] d) AppArmor

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `ulimit` y `pam_limits` (`/etc/security/limits.conf`)**

`ulimit` (en bash) y `/etc/security/limits.conf` (configuracion persistente via `pam_limits`) controlan los limites de recursos por usuario y proceso: tamano maximo de archivo (`fsize`), numero de archivos abiertos (`nofile`), numero de procesos (`nproc`), memoria bloqueada (`memlock`), etc. Se definen limites soft (ajustables por el usuario hasta el hard) y hard (solo reducibles por usuarios no root). `cgroups` tambien controla recursos pero a nivel de grupos de procesos.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="334.1" data-correct="d">

### Pregunta 27 (Subtema 334.1)

¿Que herramienta de deteccion de intrusiones en red (NIDS) analiza el trafico en tiempo real y puede generar alertas basadas en reglas de firmas?

- [ ] a) `nmap`
- [ ] b) `tcpdump`
- [ ] c) `Wireshark`
- [ ] d) `Snort` o `Suricata`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `Snort` o `Suricata`**

Snort y Suricata son sistemas de deteccion (y prevencion) de intrusiones en red que analizan el trafico en tiempo real comparandolo con bases de datos de firmas de ataques conocidos. Ambos pueden funcionar en modo IDS (deteccion) o IPS (prevencion, bloqueando trafico malicioso). Suricata ofrece multithreading nativo y es compatible con las reglas de Snort. `nmap` es un escaner de puertos, `tcpdump` y `Wireshark` son analizadores de paquetes sin motor de reglas de deteccion.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="334.1" data-correct="a">

### Pregunta 28 (Subtema 334.1)

¿Que herramienta basada en host detecta rootkits y verifica la integridad de binarios del sistema?

- [ ] a) `rkhunter`
- [ ] b) `fail2ban`
- [ ] c) `arpwatch`
- [ ] d) `logwatch`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `rkhunter`**

`rkhunter` (Rootkit Hunter) escanea el sistema en busca de rootkits, backdoors y exploits locales. Verifica los checksums de binarios del sistema contra bases de datos conocidas, busca archivos ocultos sospechosos, comprueba permisos inseguros y analiza modulos del kernel cargados. Se ejecuta con `rkhunter --check` y se actualiza la base de datos de firmas con `rkhunter --update`. `chkrootkit` es otra herramienta similar. `fail2ban` bloquea IPs por intentos fallidos de autenticacion.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="334.2" data-correct="b">

### Pregunta 29 (Subtema 334.2)

¿Que herramienta de iptables/nftables permite realizar filtrado de paquetes con estado (stateful) en Linux?

- [ ] a) El modulo `filter`
- [ ] b) El modulo `conntrack` (connection tracking)
- [ ] c) El modulo `nat`
- [ ] d) El modulo `mangle`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) El modulo `conntrack` (connection tracking)**

El modulo `conntrack` (connection tracking) del kernel Linux mantiene una tabla de conexiones activas y permite crear reglas de filtrado basadas en el estado de la conexion (NEW, ESTABLISHED, RELATED, INVALID). Esto es fundamental para un firewall stateful, ya que permite aceptar trafico de retorno de conexiones establecidas sin necesidad de reglas explicitas para cada puerto de respuesta. Se usa con `-m conntrack --ctstate` en iptables o `ct state` en nftables.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="334.2" data-correct="c">

### Pregunta 30 (Subtema 334.2)

¿Que comando de nftables crea una tabla nueva para filtrado de paquetes IPv4?

- [ ] a) `nft create table filter`
- [ ] b) `nft new table ip filter`
- [ ] c) `nft add table ip filter`
- [ ] d) `nft table add ip filter`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `nft add table ip filter`**

En nftables, `nft add table ip filter` crea una nueva tabla llamada `filter` en la familia `ip` (IPv4). A diferencia de iptables que tiene tablas predefinidas (filter, nat, mangle), nftables permite crear tablas con nombres arbitrarios. Las familias disponibles son: `ip` (IPv4), `ip6` (IPv6), `inet` (IPv4+IPv6), `arp` y `bridge`. Despues de crear la tabla, se agregan cadenas con `nft add chain` y reglas con `nft add rule`.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="334.3" data-correct="a">

### Pregunta 31 (Subtema 334.3)

¿Que protocolo VPN opera en capa 3 del modelo OSI y es el estandar de la IETF para VPNs site-to-site?

- [ ] a) IPsec
- [ ] b) OpenVPN
- [ ] c) WireGuard
- [ ] d) PPTP

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) IPsec**

IPsec (Internet Protocol Security) opera en la capa de red (capa 3) del modelo OSI y es el estandar de la IETF para comunicaciones seguras. Utiliza dos protocolos principales: AH (Authentication Header) para integridad y autenticacion, y ESP (Encapsulating Security Payload) para cifrado e integridad. Soporta dos modos: transporte (cifra solo el payload) y tunel (cifra el paquete completo). IKE (Internet Key Exchange) gestiona el intercambio de claves. En Linux se implementa con `strongSwan` o `Libreswan`.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="334.3" data-correct="d">

### Pregunta 32 (Subtema 334.3)

¿Que herramienta VPN utiliza un unico archivo de configuracion simple y opera exclusivamente en capa 3 con UDP?

- [ ] a) OpenVPN
- [ ] b) strongSwan
- [ ] c) Libreswan
- [ ] d) WireGuard

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) WireGuard**

WireGuard es una VPN moderna integrada en el kernel de Linux que destaca por su simplicidad de configuracion (un solo archivo con las claves y los endpoints), rendimiento superior y una base de codigo minimalista. Opera exclusivamente en capa 3 sobre UDP y utiliza criptografia moderna (Curve25519 para intercambio de claves, ChaCha20 para cifrado, Poly1305 para autenticacion). Se configura con la herramienta `wg` y las interfaces se gestionan con `wg-quick up/down`.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="334.3" data-correct="b">

### Pregunta 33 (Subtema 334.3)

¿En que archivo de configuracion de OpenVPN se define el servidor y los parametros del tunel VPN?

- [ ] a) `/etc/openvpn/vpn.cfg`
- [ ] b) `/etc/openvpn/server.conf` (o un archivo `.conf` en `/etc/openvpn/server/`)
- [ ] c) `/etc/vpn/openvpn.conf`
- [ ] d) `/var/lib/openvpn/server.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/openvpn/server.conf` (o un archivo `.conf` en `/etc/openvpn/server/`)**

La configuracion del servidor OpenVPN se almacena en archivos `.conf` dentro de `/etc/openvpn/` o `/etc/openvpn/server/`. Las directivas principales incluyen `port` (puerto, por defecto 1194), `proto` (udp/tcp), `dev` (tun/tap), `ca`, `cert`, `key` y `dh` (certificados y claves), `server` (subred del tunel), y `push` (rutas enviadas a los clientes). El servicio systemd correspondiente es `openvpn-server@nombre.service`.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="335.1" data-correct="c">

### Pregunta 34 (Subtema 335.1)

¿Que herramienta se utiliza para escanear vulnerabilidades conocidas en servicios de red de un host remoto?

- [ ] a) `nikto`
- [ ] b) `nmap`
- [ ] c) `OpenVAS` (o `Greenbone Vulnerability Management`)
- [ ] d) `Metasploit`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `OpenVAS` (o `Greenbone Vulnerability Management`)**

OpenVAS (Open Vulnerability Assessment Scanner), ahora parte de Greenbone Vulnerability Management, es un escaner de vulnerabilidades completo que verifica miles de CVEs conocidos en servicios de red, aplicaciones web y configuraciones del sistema. Utiliza una base de datos de NVTs (Network Vulnerability Tests) actualizable. `nmap` es un escaner de puertos/servicios, `nikto` es especifico para servidores web, y `Metasploit` es un framework de explotacion, no solo de escaneo.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="335.1" data-correct="a">

### Pregunta 35 (Subtema 335.1)

¿Que opcion de `nmap` realiza un escaneo de deteccion de versiones de los servicios en puertos abiertos?

- [ ] a) `nmap -sV objetivo`
- [ ] b) `nmap -sS objetivo`
- [ ] c) `nmap -O objetivo`
- [ ] d) `nmap -sP objetivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `nmap -sV objetivo`**

`nmap -sV` (version scan) interroga los puertos abiertos para determinar el servicio y la version del software que esta escuchando. Envia sondas especificas y compara las respuestas con su base de datos de firmas de servicios. `-sS` es un escaneo SYN stealth (solo detecta puertos abiertos/cerrados), `-O` detecta el sistema operativo del host, y `-sP` (ahora `-sn`) solo realiza descubrimiento de hosts sin escanear puertos.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="335.1" data-correct="b">

### Pregunta 36 (Subtema 335.1)

¿Que base de datos publica cataloga las vulnerabilidades de seguridad conocidas con identificadores unicos?

- [ ] a) OWASP Top 10
- [ ] b) CVE (Common Vulnerabilities and Exposures)
- [ ] c) CIS Benchmarks
- [ ] d) NIST SP 800-53

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) CVE (Common Vulnerabilities and Exposures)**

CVE es el sistema de identificacion estandar para vulnerabilidades de seguridad, mantenido por MITRE. Cada vulnerabilidad recibe un identificador unico con formato CVE-AAAA-NNNNN (por ejemplo, CVE-2024-12345). El NVD (National Vulnerability Database) de NIST complementa los CVE con puntuaciones CVSS (severidad) y referencias. OWASP Top 10 es una lista de las 10 principales vulnerabilidades web. CIS Benchmarks son guias de hardening.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="331.1" data-correct="d">

### Pregunta 37 (Subtema 331.1)

¿Que formato de certificado utiliza codificacion binaria ASN.1 DER y es comun en entornos Windows?

- [ ] a) PEM
- [ ] b) PKCS#7
- [ ] c) PKCS#10
- [ ] d) DER

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) DER**

DER (Distinguished Encoding Rules) es un formato binario para codificar certificados X.509, claves y otros objetos ASN.1. Es comun en entornos Windows (con extensiones `.cer`, `.der`, `.crt`). PEM (Privacy Enhanced Mail) es la version Base64 de DER envuelta entre marcadores `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----`, mas comun en Linux. Se puede convertir entre formatos con `openssl x509 -inform DER -outform PEM`.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="331.2" data-correct="a">

### Pregunta 38 (Subtema 331.2)

¿Que comando de OpenSSL permite firmar un CSR con una CA propia para emitir un certificado?

- [ ] a) `openssl ca -in server.csr -out server.crt -config openssl.cnf`
- [ ] b) `openssl sign -ca ca.pem -csr server.csr -out server.crt`
- [ ] c) `openssl x509 -sign server.csr -ca ca.pem`
- [ ] d) `openssl cert -issue -ca ca.crt -csr server.csr`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `openssl ca -in server.csr -out server.crt -config openssl.cnf`**

El comando `openssl ca` utiliza la configuracion de la CA definida en `openssl.cnf` para firmar un CSR y emitir un certificado. El archivo de configuracion especifica la clave privada de la CA, el certificado de la CA, la base de datos de certificados emitidos, el numero de serie y las politicas de firma. Alternativamente, para firmar rapido sin la infraestructura completa de CA, se puede usar `openssl x509 -req -CA ca.crt -CAkey ca.key -in server.csr`.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="332.1" data-correct="c">

### Pregunta 39 (Subtema 332.1)

¿Que comando agrega una clave adicional (key slot) a un volumen LUKS existente?

- [ ] a) `cryptsetup addKey /dev/sdb1`
- [ ] b) `cryptsetup keyAdd /dev/sdb1`
- [ ] c) `cryptsetup luksAddKey /dev/sdb1`
- [ ] d) `luks-add-key /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `cryptsetup luksAddKey /dev/sdb1`**

`cryptsetup luksAddKey` agrega una nueva contrasena o archivo de clave a un slot disponible del volumen LUKS. Primero solicita una contrasena existente para autorizacion y luego la nueva contrasena. Se puede usar `--key-file` para especificar un archivo de clave en lugar de una contrasena interactiva. `cryptsetup luksRemoveKey` elimina una clave, y `cryptsetup luksKillSlot` elimina un slot especifico por su numero.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="332.2" data-correct="b">

### Pregunta 40 (Subtema 332.2)

¿Que tipo de registro DNSSEC proporciona la prueba de que un nombre de dominio no existe (negative proof)?

- [ ] a) DNSKEY
- [ ] b) NSEC o NSEC3
- [ ] c) RRSIG
- [ ] d) DS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) NSEC o NSEC3**

Los registros NSEC (Next Secure) y NSEC3 (Next Secure version 3) proporcionan autenticacion de respuestas negativas en DNSSEC, es decir, prueban criptograficamente que un nombre de dominio consultado no existe. NSEC lista el siguiente nombre existente en la zona, lo que permite la enumeracion de la zona (zone walking). NSEC3 soluciona este problema usando hashes de los nombres, dificultando la enumeracion. Ambos registros estan firmados con RRSIG.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="332.3" data-correct="d">

### Pregunta 41 (Subtema 332.3)

¿Que herramienta permite bloquear automaticamente direcciones IP despues de multiples intentos fallidos de autenticacion?

- [ ] a) `iptables` directamente
- [ ] b) `tcp_wrappers`
- [ ] c) `AIDE`
- [ ] d) `fail2ban`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `fail2ban`**

`fail2ban` monitoriza archivos de log (como `/var/log/auth.log`) buscando patrones de intentos fallidos de autenticacion (SSH, HTTP auth, etc.) y bloquea automaticamente las direcciones IP ofensoras creando reglas de firewall temporales (iptables/nftables). Se configura mediante `jails` en `/etc/fail2ban/jail.conf` (o `.local`), definiendo el servicio a proteger, el filtro de log, el tiempo de bloqueo (`bantime`), el numero maximo de intentos (`maxretry`) y la ventana de tiempo (`findtime`).

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="333.1" data-correct="a">

### Pregunta 42 (Subtema 333.1)

¿Que comando de SELinux permite generar un modulo de politica a partir de las denegaciones registradas en el log de auditoria?

- [ ] a) `audit2allow -M modulo < /var/log/audit/audit.log`
- [ ] b) `semodule --generate modulo`
- [ ] c) `semanage policy --create modulo`
- [ ] d) `setsebool --module modulo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `audit2allow -M modulo < /var/log/audit/audit.log`**

`audit2allow` analiza los mensajes de denegacion AVC (Access Vector Cache) del log de auditoria y genera las reglas de politica SELinux necesarias para permitir las acciones bloqueadas. La opcion `-M` crea un modulo compilado (`.pp`) listo para instalar con `semodule -i modulo.pp`. Es una herramienta esencial para personalizar la politica SELinux. Se recomienda revisar las reglas generadas antes de instalar el modulo, ya que podria permitir acciones inseguras.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="333.2" data-correct="c">

### Pregunta 43 (Subtema 333.2)

¿Que mecanismo del kernel Linux permite restringir las llamadas al sistema (syscalls) que un proceso puede realizar?

- [ ] a) SELinux
- [ ] b) AppArmor
- [ ] c) seccomp (Secure Computing Mode)
- [ ] d) capabilities

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) seccomp (Secure Computing Mode)**

seccomp es un mecanismo del kernel que restringe las llamadas al sistema disponibles para un proceso. En modo estricto, solo permite `read`, `write`, `exit` y `sigreturn`. El modo BPF (seccomp-bpf) permite definir filtros personalizados usando programas BPF que evaluan cada syscall y deciden si permitirla, denegarla o registrarla. Docker, Kubernetes y systemd utilizan seccomp para confinar procesos. `capabilities` divide los privilegios de root en unidades granulares, pero no filtra syscalls.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="334.1" data-correct="b">

### Pregunta 44 (Subtema 334.1)

¿Que configuracion de iptables implementa un firewall basico que acepta conexiones establecidas y relacionadas pero bloquea nuevas conexiones entrantes?

- [ ] a) `iptables -A INPUT -j DROP`
- [ ] b) `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` seguido de `iptables -P INPUT DROP`
- [ ] c) `iptables -A INPUT -p tcp --dport 0:65535 -j REJECT`
- [ ] d) `iptables -A INPUT -m state --state ALL -j DROP`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` seguido de `iptables -P INPUT DROP`**

Esta configuracion implementa un firewall stateful basico: la primera regla permite el trafico de conexiones ya establecidas (ESTABLISHED) y conexiones relacionadas (RELATED, como respuestas ICMP o conexiones de datos FTP), y la politica por defecto DROP bloquea todas las demas conexiones entrantes (NEW). Se agregan reglas adicionales antes del DROP para servicios especificos que se quieran permitir (como SSH en el puerto 22).

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="334.2" data-correct="a">

### Pregunta 45 (Subtema 334.2)

¿Que tabla de iptables se utiliza para realizar traduccion de direcciones de red (NAT)?

- [ ] a) `nat`
- [ ] b) `filter`
- [ ] c) `mangle`
- [ ] d) `raw`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `nat`**

La tabla `nat` de iptables se utiliza exclusivamente para la traduccion de direcciones de red. Contiene las cadenas PREROUTING (DNAT, para redirigir trafico entrante), POSTROUTING (SNAT/MASQUERADE, para enmascarar trafico saliente) y OUTPUT (NAT del trafico generado localmente). La tabla `filter` es para filtrado de paquetes, `mangle` para modificar cabeceras de paquetes, y `raw` para excepciones del connection tracking.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="334.3" data-correct="c">

### Pregunta 46 (Subtema 334.3)

¿Que protocolo utiliza IPsec para el intercambio inicial de claves y la negociacion de los Security Associations (SA)?

- [ ] a) ESP
- [ ] b) AH
- [ ] c) IKE (Internet Key Exchange)
- [ ] d) ISAKMP solo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) IKE (Internet Key Exchange)**

IKE es el protocolo utilizado por IPsec para negociar Security Associations (SA) e intercambiar claves criptograficas de forma segura. IKEv1 opera en dos fases: Fase 1 (establecer canal seguro entre peers) y Fase 2 (negociar SAs para el trafico IPsec). IKEv2 (RFC 7296) simplifica el proceso a un unico intercambio de 4 mensajes. IKE opera sobre UDP puerto 500 (o 4500 con NAT-T). En Linux, `strongSwan` y `Libreswan` implementan IKEv1 e IKEv2.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="335.1" data-correct="d">

### Pregunta 47 (Subtema 335.1)

¿Que herramienta permite realizar escaneos de vulnerabilidades especificamente en aplicaciones web?

- [ ] a) `OpenVAS`
- [ ] b) `nmap`
- [ ] c) `Metasploit`
- [ ] d) `nikto`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `nikto`**

`nikto` es un escaner de vulnerabilidades especializado en servidores web que comprueba miles de problemas potenciales: archivos y programas peligrosos, versiones desactualizadas de servidores, problemas de configuracion, archivos por defecto, y vulnerabilidades conocidas. Realiza pruebas contra Apache, Nginx, IIS y otros servidores web. A diferencia de OpenVAS que es un escaner de vulnerabilidades general, nikto se centra exclusivamente en la capa web (HTTP/HTTPS).

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="331.3" data-correct="b">

### Pregunta 48 (Subtema 331.3)

¿Que archivo almacena las claves publicas GPG de un usuario en Linux?

- [ ] a) `/etc/gpg/pubring.gpg`
- [ ] b) `~/.gnupg/pubring.kbx` (o `pubring.gpg` en versiones antiguas)
- [ ] c) `~/.ssh/gpg_keys`
- [ ] d) `/var/lib/gpg/keyring`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `~/.gnupg/pubring.kbx` (o `pubring.gpg` en versiones antiguas)**

El anillo de claves publicas de GPG se almacena en `~/.gnupg/pubring.kbx` (formato keybox, usado por GnuPG 2.1+) o `~/.gnupg/pubring.gpg` (formato antiguo). El anillo de claves privadas se almacena en `~/.gnupg/private-keys-v1.d/` (GnuPG 2.1+) o `~/.gnupg/secring.gpg` (formato antiguo). El archivo `~/.gnupg/trustdb.gpg` contiene la base de datos de confianza. Los permisos del directorio `~/.gnupg` deben ser 700.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="331.4" data-correct="a">

### Pregunta 49 (Subtema 331.4)

¿Que comando exporta la clave publica GPG de un usuario en formato ASCII armored?

- [ ] a) `gpg --export --armor usuario@email.com`
- [ ] b) `gpg --public-key --export usuario@email.com`
- [ ] c) `gpg --output pubkey.asc usuario@email.com`
- [ ] d) `gpg --dump-key usuario@email.com`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `gpg --export --armor usuario@email.com`**

`gpg --export` exporta la clave publica especificada del anillo de claves. La opcion `--armor` (o `-a`) convierte la salida a formato ASCII (Base64), que es mas facil de compartir por correo electronico o copiar en servidores de claves. Sin `--armor`, la salida es binaria. Se puede redirigir a un archivo con `--output pubkey.asc` o `> pubkey.asc`. Las claves se importan con `gpg --import pubkey.asc`.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="332.3" data-correct="c">

### Pregunta 50 (Subtema 332.3)

¿Que directiva de `sshd_config` limita el acceso SSH a usuarios que pertenecen a un grupo especifico?

- [ ] a) `AllowUsers @grupo`
- [ ] b) `PermitGroups sshusers`
- [ ] c) `AllowGroups sshusers`
- [ ] d) `GroupAccess sshusers`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `AllowGroups sshusers`**

`AllowGroups` en `sshd_config` restringe el acceso SSH a los miembros de los grupos especificados. Si esta directiva esta presente, solo los usuarios que pertenecen a al menos uno de los grupos listados pueden conectarse. Se pueden combinar `AllowUsers` y `AllowGroups`; en ese caso, el usuario debe cumplir ambas condiciones. Los grupos se refieren a los grupos del sistema (`/etc/group` o NSS). Se pueden usar patrones con comodines.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="333.1" data-correct="b">

### Pregunta 51 (Subtema 333.1)

¿Que comando muestra el contexto de seguridad SELinux de un archivo?

- [ ] a) `ls -la`
- [ ] b) `ls -Z`
- [ ] c) `seinfo --file`
- [ ] d) `getcon`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ls -Z`**

`ls -Z` muestra el contexto de seguridad SELinux de los archivos en formato `usuario:rol:tipo:nivel`. Por ejemplo, un archivo web podria tener el contexto `system_u:object_r:httpd_sys_content_t:s0`. El contexto de un proceso se puede ver con `ps -eZ`. `id -Z` muestra el contexto del usuario actual. Los contextos son la base de las decisiones de acceso en SELinux: el kernel verifica si el dominio del proceso tiene permiso para acceder al tipo del recurso.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="333.2" data-correct="a">

### Pregunta 52 (Subtema 333.2)

¿Que mecanismo del kernel permite otorgar privilegios granulares a un proceso sin darle acceso root completo?

- [ ] a) Linux capabilities
- [ ] b) SELinux booleans
- [ ] c) AppArmor caps
- [ ] d) sudo exclusivamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Linux capabilities**

Las Linux capabilities dividen los privilegios tradicionalmente asociados con root en unidades independientes. Por ejemplo, `CAP_NET_BIND_SERVICE` permite vincular puertos por debajo de 1024, `CAP_NET_RAW` permite usar sockets raw, y `CAP_SYS_ADMIN` otorga varias operaciones administrativas. Se asignan a archivos con `setcap` (por ejemplo, `setcap cap_net_bind_service=+ep /usr/bin/programa`) y se verifican con `getcap`. Esto evita la necesidad de ejecutar programas como root.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="334.1" data-correct="d">

### Pregunta 53 (Subtema 334.1)

¿Que cadena de iptables procesa los paquetes que se reenvian entre interfaces de red (routing)?

- [ ] a) INPUT
- [ ] b) OUTPUT
- [ ] c) PREROUTING
- [ ] d) FORWARD

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) FORWARD**

La cadena FORWARD de la tabla filter procesa los paquetes que atraviesan el sistema Linux actuando como router/gateway, es decir, paquetes que no son generados localmente ni destinados al propio sistema. INPUT procesa paquetes destinados al sistema local, OUTPUT procesa paquetes generados localmente, y PREROUTING (en las tablas nat y mangle) procesa todos los paquetes antes de la decision de enrutamiento. Para que FORWARD funcione, el reenvio de IP debe estar habilitado (`net.ipv4.ip_forward = 1`).

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="334.2" data-correct="b">

### Pregunta 54 (Subtema 334.2)

¿Que comando de iptables implementa SNAT (Source NAT) para enmascarar el trafico saliente de la red 192.168.1.0/24?

- [ ] a) `iptables -t filter -A FORWARD -s 192.168.1.0/24 -j MASQUERADE`
- [ ] b) `iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE`
- [ ] c) `iptables -t nat -A PREROUTING -s 192.168.1.0/24 -j SNAT`
- [ ] d) `iptables -A OUTPUT -s 192.168.1.0/24 -j MASQUERADE`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE`**

MASQUERADE es una forma dinamica de SNAT que reemplaza la IP de origen con la IP de la interfaz de salida. Se aplica en la cadena POSTROUTING de la tabla nat, despues de la decision de enrutamiento. `-s` especifica la red de origen, `-o` la interfaz de salida. MASQUERADE es ideal para interfaces con IP dinamica (DHCP). Para IP fija, se recomienda `SNAT --to-source IP_PUBLICA` por mejor rendimiento.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="335.1" data-correct="c">

### Pregunta 55 (Subtema 335.1)

¿Que framework de pentesting proporciona exploits, payloads y modulos auxiliares para pruebas de seguridad?

- [ ] a) `Nessus`
- [ ] b) `Burp Suite`
- [ ] c) `Metasploit Framework`
- [ ] d) `OWASP ZAP`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `Metasploit Framework`**

Metasploit Framework es la plataforma de pentesting mas utilizada, proporcionando una extensa coleccion de exploits, payloads (como Meterpreter), modulos auxiliares (escaneo, fuzzing), modulos post-explotacion y codificadores. Se opera principalmente mediante `msfconsole`. El flujo tipico es: seleccionar un exploit (`use`), configurar el objetivo (`set RHOSTS`), seleccionar un payload (`set PAYLOAD`) y ejecutar (`exploit`). `Burp Suite` y `OWASP ZAP` son proxies para pruebas web, y `Nessus` es un escaner de vulnerabilidades.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="331.3" data-correct="d">

### Pregunta 56 (Subtema 331.3)

¿Que protocolo utiliza certbot/Let's Encrypt para validar la propiedad de un dominio automaticamente?

- [ ] a) SCEP
- [ ] b) EST
- [ ] c) CMP
- [ ] d) ACME (con desafios HTTP-01 o DNS-01)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) ACME (con desafios HTTP-01 o DNS-01)**

El protocolo ACME (Automated Certificate Management Environment, RFC 8555) automatiza la validacion de dominios y la emision de certificados. Los desafios mas comunes son: HTTP-01 (el servidor debe servir un token en `/.well-known/acme-challenge/`), DNS-01 (crear un registro TXT en `_acme-challenge.dominio`) y TLS-ALPN-01 (presentar un certificado especial durante el handshake TLS). DNS-01 es el unico que permite validar dominios wildcard (`*.dominio.com`).

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="332.1" data-correct="a">

### Pregunta 57 (Subtema 332.1)

¿Que sistema de archivos cifrado opera a nivel de archivo (no a nivel de bloque) permitiendo cifrar directorios individuales?

- [ ] a) eCryptfs
- [ ] b) LUKS
- [ ] c) dm-crypt
- [ ] d) BitLocker

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) eCryptfs**

eCryptfs es un sistema de archivos cifrado apilado (stacked) que opera a nivel de archivo, cifrando cada archivo individualmente sobre un sistema de archivos subyacente (como ext4). Cada archivo cifrado contiene su propia cabecera con metadatos de cifrado, lo que permite cifrar directorios especificos sin cifrar todo el disco. Es utilizado por Ubuntu para cifrar directorios home. Se monta con `mount -t ecryptfs` especificando opciones de cifrado, clave y otros parametros.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="333.1" data-correct="b">

### Pregunta 58 (Subtema 333.1)

¿Que herramienta de SELinux permite modificar el tipo de puerto asignado a un servicio personalizado?

- [ ] a) `setsebool`
- [ ] b) `semanage port`
- [ ] c) `restorecon`
- [ ] d) `chcon`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `semanage port`**

`semanage port` gestiona las asignaciones de tipos SELinux a puertos de red. Por ejemplo, si se configura Apache en un puerto no estandar (8888), se debe ejecutar `semanage port -a -t http_port_t -p tcp 8888` para que SELinux permita a Apache vincular ese puerto. Sin esta configuracion, SELinux bloquearia la vinculacion. `semanage port -l` lista las asignaciones actuales. `setsebool` gestiona booleanos, `restorecon` restaura contextos de archivos, y `chcon` cambia contextos temporalmente.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="334.3" data-correct="c">

### Pregunta 59 (Subtema 334.3)

¿Que archivo de configuracion de strongSwan define las conexiones IPsec y sus parametros?

- [ ] a) `/etc/strongswan/vpn.conf`
- [ ] b) `/etc/ipsec/connections.conf`
- [ ] c) `/etc/ipsec.conf` (o `/etc/swanctl/swanctl.conf` en versiones modernas)
- [ ] d) `/etc/strongswan/ike.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/etc/ipsec.conf` (o `/etc/swanctl/swanctl.conf` en versiones modernas)**

La configuracion clasica de strongSwan utiliza `/etc/ipsec.conf` para definir las conexiones (secciones `conn nombre`), los parametros de cada SA (left/right para los endpoints, tipo de autenticacion, subredes a proteger, etc.) y `/etc/ipsec.secrets` para las credenciales. Las versiones modernas de strongSwan promueven el uso de `swanctl.conf` con sintaxis VICI, que es mas flexible y soporta recarga sin reinicio mediante `swanctl --load-all`.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="335.1" data-correct="a">

### Pregunta 60 (Subtema 335.1)

¿Que tipo de escaneo de nmap utiliza paquetes SYN sin completar el handshake TCP, siendo mas sigiloso?

- [ ] a) `nmap -sS` (SYN scan)
- [ ] b) `nmap -sT` (TCP connect scan)
- [ ] c) `nmap -sU` (UDP scan)
- [ ] d) `nmap -sA` (ACK scan)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `nmap -sS` (SYN scan)**

El SYN scan (`-sS`), tambien llamado "half-open scan", envia un paquete SYN y analiza la respuesta sin completar el handshake TCP de tres vias. Si recibe SYN/ACK, el puerto esta abierto (y envia RST para cerrar); si recibe RST, esta cerrado. Al no completar la conexion, es menos probable que aparezca en los logs de aplicaciones del objetivo. Requiere privilegios de root. `-sT` completa el handshake completo y es mas detectable pero no requiere root.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
