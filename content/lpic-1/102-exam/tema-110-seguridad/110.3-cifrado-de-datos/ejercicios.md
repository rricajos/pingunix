---
title: "110.3 Proteger datos con cifrado - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-110
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "110"
subtema: "110.3"
---

# 110.3 Proteger datos con cifrado - Ejercicios

### Pregunta 1

Cual es el proceso correcto para configurar autenticacion SSH por clave publica?

a) Generar claves en el servidor, copiar la clave privada al cliente, conectar
b) Generar claves en el cliente, copiar la clave publica al servidor con `ssh-copy-id`, conectar
c) Generar claves en el servidor, copiar la clave publica al cliente, conectar
d) Generar las mismas claves en el cliente y el servidor, luego conectar

<details><summary>Respuesta</summary>

**b) Generar claves en el cliente, copiar la clave publica al servidor con `ssh-copy-id`, conectar**

El proceso correcto es: 1) Generar el par de claves en el cliente con `ssh-keygen` (por ejemplo, `ssh-keygen -t ed25519`). 2) Copiar la clave publica al servidor con `ssh-copy-id usuario@servidor`, que agrega la clave al archivo `~/.ssh/authorized_keys` del servidor. 3) Conectar con `ssh usuario@servidor`. La clave privada nunca sale del cliente. Permisos requeridos: `~/.ssh/` = 700, clave privada = 600, authorized_keys = 600.

</details>

---

### Pregunta 2

Que archivo almacena las claves de host de los servidores a los que un cliente SSH se ha conectado previamente?

a) `~/.ssh/authorized_keys`
b) `~/.ssh/config`
c) `~/.ssh/known_hosts`
d) `/etc/ssh/ssh_host_keys`

<details><summary>Respuesta</summary>

**c) `~/.ssh/known_hosts`**

El archivo `~/.ssh/known_hosts` almacena las huellas digitales (fingerprints) de las claves de host de los servidores a los que el usuario se ha conectado previamente. Sirve para verificar la identidad del servidor y proteger contra ataques man-in-the-middle. Si la clave de host de un servidor cambia, SSH muestra un error y rechaza la conexion. Para eliminar una entrada antigua: `ssh-keygen -R host`. `~/.ssh/authorized_keys` almacena las claves publicas autorizadas en el servidor.

</details>

---

### Pregunta 3

Que tipo de tunel SSH se crea con el comando `ssh -L 8080:localhost:80 usuario@servidor`?

a) Tunel remoto que expone el puerto 8080 del servidor
b) Tunel local que reenviar el puerto local 8080 al puerto 80 del servidor
c) Proxy SOCKS en el puerto 8080
d) Tunel inverso que redirige el trafico del puerto 80 al 8080

<details><summary>Respuesta</summary>

**b) Tunel local que reenviar el puerto local 8080 al puerto 80 del servidor**

La opcion `-L` crea un tunel local: el puerto 8080 en la maquina local se reenviar a traves del tunel SSH al puerto 80 del servidor. Despues de ejecutar el comando, acceder a `http://localhost:8080` equivale a acceder al puerto 80 del servidor remoto. `-R` crea un tunel remoto (puerto en el servidor reenviar al cliente). `-D` crea un proxy SOCKS dinamico. Las opciones `-N` (sin ejecutar comandos) y `-f` (segundo plano) son utiles con tuneles.

</details>

---

### Pregunta 4

Que comando cifra un archivo con GPG para que solo el destinatario `maria@empresa.com` pueda descifrarlo?

a) `gpg --symmetric --recipient maria@empresa.com archivo.txt`
b) `gpg --encrypt --recipient maria@empresa.com archivo.txt`
c) `gpg --sign --recipient maria@empresa.com archivo.txt`
d) `gpg --cipher maria@empresa.com archivo.txt`

<details><summary>Respuesta</summary>

**b) `gpg --encrypt --recipient maria@empresa.com archivo.txt`**

`gpg --encrypt --recipient` cifra el archivo usando la clave publica del destinatario (que debe estar importada previamente). Solo Maria podra descifrarlo con su clave privada. Se genera `archivo.txt.gpg`. Para formato ASCII: `gpg --encrypt --armor --recipient maria@empresa.com archivo.txt` (genera `archivo.txt.asc`). La opcion `--symmetric` cifra con contrasena (no con clave publica). `--sign` firma pero no cifra.

</details>

---

### Pregunta 5

Que opciones de `/etc/ssh/sshd_config` deberian configurarse para endurecer un servidor SSH?

a) `PermitRootLogin yes` y `PasswordAuthentication yes`
b) `PermitRootLogin no` y `PasswordAuthentication no`
c) `AllowAllUsers yes` y `DisableEncryption no`
d) `RootAccess deny` y `PasswordPolicy strong`

<details><summary>Respuesta</summary>

**b) `PermitRootLogin no` y `PasswordAuthentication no`**

Para endurecer un servidor SSH se recomienda: `PermitRootLogin no` (deshabilitar login directo como root), `PasswordAuthentication no` (deshabilitar autenticacion por contrasena, solo claves), `PubkeyAuthentication yes` (habilitar autenticacion por clave publica), `MaxAuthTries 3` (limitar intentos), `PermitEmptyPasswords no` y opcionalmente `AllowUsers` para limitar usuarios. Despues de cambios: `systemctl restart sshd`.

</details>

---

### Pregunta 6

Cual es la diferencia entre `scp` y `sftp`?

a) `scp` cifra la transferencia y `sftp` no
b) `scp` es no interactivo (un solo comando) y `sftp` es interactivo (sesion con comandos)
c) `sftp` es mas rapido que `scp`
d) `scp` usa el puerto 22 y `sftp` usa el puerto 21

<details><summary>Respuesta</summary>

**b) `scp` es no interactivo (un solo comando) y `sftp` es interactivo (sesion con comandos)**

`scp` (Secure Copy) es no interactivo, ideal para copias simples y scripts, con sintaxis similar a `cp`. `sftp` (SSH File Transfer Protocol) es interactivo, permite navegar el sistema remoto con comandos como `ls`, `cd`, `get`, `put`. Ambos usan SSH (puerto 22) y cifran la transferencia. Para copiar un directorio con scp: `scp -r directorio usuario@servidor:/ruta/`. Para puerto no estandar: `scp -P 2222`.

</details>

---

### Pregunta 7

Que tipo de clave SSH se recomienda generar actualmente por ser la mas moderna y segura?

a) DSA
b) RSA de 1024 bits
c) Ed25519
d) ECDSA de 256 bits

<details><summary>Respuesta</summary>

**c) Ed25519**

Ed25519 es el tipo de clave SSH mas moderno y recomendado. Ofrece alta seguridad con claves mas cortas (256 bits fijos), es rapido y no depende de parametros de curva que podrian ser debiles. DSA esta deprecado (solo 1024 bits). RSA es clasico y compatible pero requiere al menos 4096 bits para buena seguridad. ECDSA es bueno pero Ed25519 es preferido. Se genera con: `ssh-keygen -t ed25519`.

</details>

---

### Pregunta 8

Que comando genera un certificado de revocacion para una clave GPG?

a) `gpg --delete-key ID_CLAVE`
b) `gpg --gen-revoke ID_CLAVE`
c) `gpg --revoke ID_CLAVE`
d) `gpg --invalidate ID_CLAVE`

<details><summary>Respuesta</summary>

**b) `gpg --gen-revoke ID_CLAVE`**

El comando `gpg --gen-revoke ID_CLAVE` genera un certificado de revocacion que se debe crear inmediatamente despues de generar la clave y almacenarse en un lugar seguro. Si la clave privada se compromete, se importa el certificado con `gpg --import revocacion.asc` y se envia al servidor de claves con `gpg --keyserver hkps://keys.openpgp.org --send-keys ID_CLAVE`. GPG tambien genera automaticamente un certificado en `~/.gnupg/openpgp-revocs.d/`.

</details>

---

### Pregunta 9

Que comando muestra la huella digital (fingerprint) de una clave SSH?

a) `ssh-keygen -f ~/.ssh/id_ed25519.pub`
b) `ssh-keygen -l -f ~/.ssh/id_ed25519.pub`
c) `ssh-agent -l ~/.ssh/id_ed25519.pub`
d) `ssh-fingerprint ~/.ssh/id_ed25519.pub`

<details><summary>Respuesta</summary>

**b) `ssh-keygen -l -f ~/.ssh/id_ed25519.pub`**

La opcion `-l` de `ssh-keygen` muestra la huella digital (fingerprint) de una clave, y `-f` especifica el archivo. Esto es util para verificar la identidad de un servidor comparando la huella con un valor conocido, o para comprobar el tipo y tamano de una clave. Funciona tanto con claves publicas como privadas. Para ver la huella de una clave de host del servidor: `ssh-keygen -l -f /etc/ssh/ssh_host_ed25519_key.pub`.

</details>

---

### Pregunta 10

En GPG, que hace el comando `gpg --detach-sign archivo.txt`?

a) Cifra el archivo y genera una firma incluida
b) Genera una firma digital separada del archivo original
c) Firma y cifra el archivo simultaneamente
d) Verifica la firma del archivo

<details><summary>Respuesta</summary>

**b) Genera una firma digital separada del archivo original**

`gpg --detach-sign` genera una firma digital en un archivo separado (`archivo.txt.sig`) sin incluirla en el archivo original. Esto es util cuando no se quiere modificar el archivo original. Otras opciones de firma: `gpg --sign` incluye la firma dentro del archivo (genera `archivo.txt.gpg`), `gpg --clearsign` envuelve el texto con la firma en texto claro (genera `archivo.txt.asc`). Para verificar: `gpg --verify archivo.txt.sig archivo.txt`.

</details>

---

### Pregunta 11

Cuales son los permisos correctos que debe tener el directorio `~/.ssh/` para que SSH funcione correctamente?

a) 755
b) 700
c) 644
d) 600

<details><summary>Respuesta</summary>

**b) 700**

El directorio `~/.ssh/` debe tener permisos 700 (`drwx------`), lo que significa que solo el propietario puede leer, escribir y acceder al directorio. Los permisos de los archivos dentro son: clave privada (`id_rsa`, `id_ed25519`) = 600, clave publica (`id_rsa.pub`) = 644, `authorized_keys` = 600 o 644. SSH rechaza la conexion si los permisos son demasiado permisivos, ya que comprometerian la seguridad de las claves.

</details>

---

### Pregunta 12

Que comando copia la clave publica SSH al archivo `authorized_keys` del servidor remoto?

a) `ssh-keygen -c usuario@servidor`
b) `ssh-copy-id usuario@servidor`
c) `scp ~/.ssh/id_rsa usuario@servidor:~/.ssh/authorized_keys`
d) `ssh-agent --copy usuario@servidor`

<details><summary>Respuesta</summary>

**b) `ssh-copy-id usuario@servidor`**

El comando `ssh-copy-id usuario@servidor` copia la clave publica del usuario al archivo `~/.ssh/authorized_keys` del servidor remoto, configurando automaticamente la autenticacion por clave publica. Para especificar una clave diferente: `ssh-copy-id -i ~/.ssh/mi_clave.pub usuario@servidor`. La opcion C copia la clave privada (no la publica), lo cual seria un grave error de seguridad. La clave privada nunca debe salir del equipo cliente.

</details>

---

### Pregunta 13

Que opcion de `/etc/ssh/sshd_config` permite restringir el acceso SSH a solo ciertos usuarios?

a) `PermitUsers admin juan`
b) `AllowUsers admin juan`
c) `UserAccess admin juan`
d) `SSHUsers admin juan`

<details><summary>Respuesta</summary>

**b) `AllowUsers admin juan`**

La directiva `AllowUsers` en `/etc/ssh/sshd_config` permite restringir el acceso SSH a una lista especifica de usuarios. Solo los usuarios listados podran conectarse por SSH. Tambien existe `AllowGroups` para permitir por grupo (por ejemplo, `AllowGroups ssh-users`). Las directivas complementarias `DenyUsers` y `DenyGroups` permiten denegar usuarios o grupos especificos. Despues de cualquier cambio se debe reiniciar sshd con `systemctl restart sshd`.

</details>

---

### Pregunta 14

En el modelo Web of Trust de GPG, cuantas firmas de claves con confianza "marginal" se necesitan como minimo para considerar una clave como valida?

a) 1
b) 2
c) 3
d) 5

<details><summary>Respuesta</summary>

**c) 3**

En el modelo Web of Trust de GPG, una clave se considera valida si esta firmada por al menos 1 clave con confianza "full" o por al menos 3 claves con confianza "marginal". Los niveles de confianza son: unknown (desconocido), none (sin confianza), marginal (confianza parcial), full (confianza completa) y ultimate (confianza absoluta, normalmente solo para tus propias claves). Este modelo descentralizado contrasta con el modelo centralizado de PKI/CA.

</details>

---

### Pregunta 15

Que comando de GPG cifra un archivo de forma simetrica (con contrasena, sin necesidad de claves publicas)?

a) `gpg --encrypt archivo.txt`
b) `gpg --symmetric archivo.txt`
c) `gpg --password archivo.txt`
d) `gpg --passphrase archivo.txt`

<details><summary>Respuesta</summary>

**b) `gpg --symmetric archivo.txt`**

El comando `gpg --symmetric archivo.txt` (o `gpg -c archivo.txt`) cifra el archivo usando cifrado simetrico con una contrasena. No requiere claves GPG ni la clave publica de un destinatario. Se solicita una contrasena que sera necesaria para descifrar. Genera `archivo.txt.gpg`. Para descifrar: `gpg --decrypt archivo.txt.gpg`. La opcion `--encrypt --recipient` usa cifrado asimetrico (clave publica del destinatario).

</details>

---

### Pregunta 16

Que hace el comando `ssh -R 8080:localhost:3000 usuario@servidor`?

a) Crea un tunel local del puerto 8080 al puerto 3000
b) Crea un tunel remoto donde el puerto 8080 del servidor redirige al puerto 3000 local
c) Crea un proxy SOCKS en el puerto 8080
d) Restringe el acceso SSH al puerto 8080

<details><summary>Respuesta</summary>

**b) Crea un tunel remoto donde el puerto 8080 del servidor redirige al puerto 3000 local**

La opcion `-R` (Remote) crea un tunel remoto: el puerto 8080 en el servidor remoto redirige el trafico al puerto 3000 de la maquina local a traves del tunel SSH. Esto es util para hacer accesible un servicio local desde el servidor remoto. `-L` crea un tunel local (opuesto). `-D` crea un proxy SOCKS dinamico. Las opciones `-N` (sin comando remoto) y `-f` (segundo plano) son utiles al crear tuneles.

</details>

---

### Pregunta 17

En que directorio almacena GPG las claves y configuracion del usuario?

a) `~/.gpg/`
b) `~/.gnupg/`
c) `~/.pgp/`
d) `/etc/gpg/`

<details><summary>Respuesta</summary>

**b) `~/.gnupg/`**

GPG almacena las claves y configuracion del usuario en el directorio `~/.gnupg/`. Este directorio contiene: `pubring.gpg` o `pubring.kbx` (anillo de claves publicas), `private-keys-v1.d/` (claves privadas), `trustdb.gpg` (base de datos de confianza), `gpg.conf` (configuracion personal) y `openpgp-revocs.d/` (certificados de revocacion generados automaticamente). Los permisos del directorio deben ser restrictivos (700).

</details>

---

### Pregunta 18

Que opcion de `ssh-keygen` especifica el tipo de clave a generar?

a) `-b`
b) `-f`
c) `-t`
d) `-C`

<details><summary>Respuesta</summary>

**c) `-t`**

La opcion `-t` de `ssh-keygen` especifica el tipo de clave a generar. Los tipos disponibles son: `rsa` (clasico), `ecdsa` (curvas elipticas), `ed25519` (moderno, recomendado) y `dsa` (deprecado). Por ejemplo: `ssh-keygen -t ed25519`. La opcion `-b` especifica el tamano en bits (por ejemplo, `-b 4096` para RSA). `-f` especifica el nombre del archivo de salida. `-C` agrega un comentario a la clave.

</details>

---

### Pregunta 19

Que archivo en el servidor SSH contiene las claves publicas autorizadas para acceder a una cuenta de usuario?

a) `~/.ssh/known_hosts`
b) `~/.ssh/authorized_keys`
c) `~/.ssh/config`
d) `/etc/ssh/authorized_keys`

<details><summary>Respuesta</summary>

**b) `~/.ssh/authorized_keys`**

El archivo `~/.ssh/authorized_keys` en el servidor contiene las claves publicas de los usuarios autorizados para acceder a esa cuenta via SSH sin contrasena. Cada linea contiene una clave publica. Se llena automaticamente al usar `ssh-copy-id`. Los permisos deben ser 600 o 644. `~/.ssh/known_hosts` es del cliente y almacena claves de host. `~/.ssh/config` es la configuracion del cliente SSH.

</details>

---

### Pregunta 20

Que diferencia hay entre cifrado simetrico y asimetrico?

a) El simetrico usa dos claves y el asimetrico usa una
b) El simetrico usa una sola clave compartida y el asimetrico usa un par de claves (publica y privada)
c) El simetrico es mas lento que el asimetrico
d) No hay diferencia practica entre ambos

<details><summary>Respuesta</summary>

**b) El simetrico usa una sola clave compartida y el asimetrico usa un par de claves (publica y privada)**

El cifrado simetrico usa una sola clave compartida entre emisor y receptor para cifrar y descifrar (ejemplos: AES, 3DES, Blowfish). Es rapido pero requiere compartir la clave de forma segura. El cifrado asimetrico usa un par de claves: la publica cifra y la privada descifra (ejemplos: RSA, ECDSA, Ed25519). Es mas lento pero resuelve el problema de distribucion de claves. En la practica se combinan: asimetrico para intercambiar una clave simetrica.

</details>

---

### Pregunta 21

Que comando genera un par de claves SSH de tipo Ed25519?

<input type="text" class="fill-blank" data-answer="ssh-keygen -t ed25519" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ssh-keygen -t ed25519**

El comando `ssh-keygen -t ed25519` genera un par de claves SSH de tipo Ed25519, que es el algoritmo mas moderno y recomendado. Ed25519 ofrece alta seguridad con claves de tamano fijo (256 bits), es rapido y no depende de parametros de curva potencialmente debiles. Los archivos generados son `~/.ssh/id_ed25519` (clave privada, permisos 600) y `~/.ssh/id_ed25519.pub` (clave publica, permisos 644).

</details>

---

### Pregunta 22

Que comando exporta la clave publica GPG de "Juan Garcia" en formato ASCII a un archivo?

<input type="text" class="fill-blank" data-answer="gpg --export --armor \"Juan Garcia\" > clave_publica.asc" data-alt="gpg --export -a \"Juan Garcia\" > clave_publica.asc" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpg --export --armor "Juan Garcia" > clave_publica.asc**

El comando `gpg --export --armor "Juan Garcia"` exporta la clave publica del usuario especificado en formato ASCII (armored), que es legible como texto. La opcion `--armor` (o `-a`) convierte la salida binaria a formato ASCII base64. La redireccion `>` guarda la salida en un archivo. Sin `--armor`, la salida seria binaria. Esta clave publica se puede compartir con otros para que puedan cifrar mensajes para ti o verificar tus firmas.

</details>

---

### Pregunta 23

Que comando elimina la entrada del host "servidor.ejemplo.com" del archivo known_hosts?

<input type="text" class="fill-blank" data-answer="ssh-keygen -R servidor.ejemplo.com" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ssh-keygen -R servidor.ejemplo.com**

El comando `ssh-keygen -R servidor.ejemplo.com` elimina todas las claves asociadas al host especificado del archivo `~/.ssh/known_hosts`. Esto es necesario cuando la clave de host de un servidor ha cambiado legitimamente (por ejemplo, tras una reinstalacion), ya que SSH rechaza la conexion si detecta que la clave cambio (proteccion contra ataques man-in-the-middle).

</details>

---

### Pregunta 24

Que comando lista las claves privadas GPG almacenadas en el anillo de claves del usuario?

<input type="text" class="fill-blank" data-answer="gpg --list-secret-keys" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpg --list-secret-keys**

El comando `gpg --list-secret-keys` muestra todas las claves privadas almacenadas en el anillo de claves del usuario (en `~/.gnupg/`). Para listar las claves publicas se usa `gpg --list-keys`. `gpg --fingerprint` muestra las huellas digitales de las claves. Para eliminar claves: `gpg --delete-secret-key ID` (privada) y `gpg --delete-key ID` (publica). La clave privada se debe eliminar antes de la publica.

</details>

---

### Pregunta 25

Que comando crea un proxy SOCKS dinamico en el puerto local 1080 a traves de un tunel SSH?

<input type="text" class="fill-blank" data-answer="ssh -D 1080 usuario@servidor" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ssh -D 1080 usuario@servidor**

El comando `ssh -D 1080 usuario@servidor` crea un proxy SOCKS dinamico en el puerto local 1080. Todo el trafico enviado a traves de este proxy sera encaminado por el tunel SSH hacia el servidor remoto. Se puede configurar el navegador o aplicaciones para usar `localhost:1080` como proxy SOCKS. Es util para navegar de forma segura en redes no confiables. Las opciones `-N` (sin comando) y `-f` (segundo plano) son utiles con tuneles.

</details>
