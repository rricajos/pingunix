---
title: "110.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "110.3"
---

# Flashcards: 110.3 - Cifrado De Datos

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-001">
<div class="flashcard-front">

**P:** Cual es el proceso correcto para configurar autenticacion SSH por clave publica?

</div>
<div class="flashcard-back">

**R:** b) Generar claves en el cliente, copiar la clave publica al servidor con `ssh-copy-id`, conectar. El proceso correcto es: 1) Generar el par de claves en el cliente con `ssh-keygen` (por ejemplo, `ssh-keygen -t ed25519`). 2) Copiar la clave publica al servidor con `ssh-copy-id usuario@servidor`, que agrega la clave al archivo `~/.ssh/authorized_keys` del servidor. 3) Conectar con `ssh usuario@servidor`. La clave privada nunca sale del cliente. Permisos requeridos: `~/.ssh/` = 700, clave privada = 600, authorized_keys = 600.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-002">
<div class="flashcard-front">

**P:** Que archivo almacena las claves de host de los servidores a los que un cliente SSH se ha conectado previamente?

</div>
<div class="flashcard-back">

**R:** c) `~/.ssh/known_hosts`. El archivo `~/.ssh/known_hosts` almacena las huellas digitales (fingerprints) de las claves de host de los servidores a los que el usuario se ha conectado previamente. Sirve para verificar la identidad del servidor y proteger contra ataques man-in-the-middle. Si la clave de host de un servidor cambia, SSH muestra un error y rechaza la conexion. Para eliminar una entrada antigua: `ssh-keygen -R host`. `~/.ssh/authorized_keys` almacena las claves publicas autorizadas en el servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-003">
<div class="flashcard-front">

**P:** Que tipo de tunel SSH se crea con el comando `ssh -L 8080:localhost:80 usuario@servidor`?

</div>
<div class="flashcard-back">

**R:** b) Tunel local que reenviar el puerto local 8080 al puerto 80 del servidor. La opcion `-L` crea un tunel local: el puerto 8080 en la maquina local se reenviar a traves del tunel SSH al puerto 80 del servidor. Despues de ejecutar el comando, acceder a `http://localhost:8080` equivale a acceder al puerto 80 del servidor remoto. `-R` crea un tunel remoto (puerto en el servidor reenviar al cliente). `-D` crea un proxy SOCKS dinamico. Las opciones `-N` (sin ejecutar comandos) y `-f` (segundo plano) son utiles con tuneles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-004">
<div class="flashcard-front">

**P:** Que comando cifra un archivo con GPG para que solo el destinatario `maria@empresa.com` pueda descifrarlo?

</div>
<div class="flashcard-back">

**R:** b) `gpg --encrypt --recipient maria@empresa.com archivo.txt`. `gpg --encrypt --recipient` cifra el archivo usando la clave publica del destinatario (que debe estar importada previamente). Solo Maria podra descifrarlo con su clave privada. Se genera `archivo.txt.gpg`. Para formato ASCII: `gpg --encrypt --armor --recipient maria@empresa.com archivo.txt` (genera `archivo.txt.asc`). La opcion `--symmetric` cifra con contrasena (no con clave publica). `--sign` firma pero no cifra.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-005">
<div class="flashcard-front">

**P:** Que opciones de `/etc/ssh/sshd_config` deberian configurarse para endurecer un servidor SSH?

</div>
<div class="flashcard-back">

**R:** b) `PermitRootLogin no` y `PasswordAuthentication no`. Para endurecer un servidor SSH se recomienda: `PermitRootLogin no` (deshabilitar login directo como root), `PasswordAuthentication no` (deshabilitar autenticacion por contrasena, solo claves), `PubkeyAuthentication yes` (habilitar autenticacion por clave publica), `MaxAuthTries 3` (limitar intentos), `PermitEmptyPasswords no` y opcionalmente `AllowUsers` para limitar usuarios. Despues de cambios: `systemctl restart sshd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-006">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `scp` y `sftp`?

</div>
<div class="flashcard-back">

**R:** b) `scp` es no interactivo (un solo comando) y `sftp` es interactivo (sesion con comandos). `scp` (Secure Copy) es no interactivo, ideal para copias simples y scripts, con sintaxis similar a `cp`. `sftp` (SSH File Transfer Protocol) es interactivo, permite navegar el sistema remoto con comandos como `ls`, `cd`, `get`, `put`. Ambos usan SSH (puerto 22) y cifran la transferencia. Para copiar un directorio con scp: `scp -r directorio usuario@servidor:/ruta/`. Para puerto no estandar: `scp -P 2222`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-007">
<div class="flashcard-front">

**P:** Que tipo de clave SSH se recomienda generar actualmente por ser la mas moderna y segura?

</div>
<div class="flashcard-back">

**R:** c) Ed25519. Ed25519 es el tipo de clave SSH mas moderno y recomendado. Ofrece alta seguridad con claves mas cortas (256 bits fijos), es rapido y no depende de parametros de curva que podrian ser debiles. DSA esta deprecado (solo 1024 bits). RSA es clasico y compatible pero requiere al menos 4096 bits para buena seguridad. ECDSA es bueno pero Ed25519 es preferido. Se genera con: `ssh-keygen -t ed25519`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-008">
<div class="flashcard-front">

**P:** Que comando genera un certificado de revocacion para una clave GPG?

</div>
<div class="flashcard-back">

**R:** b) `gpg --gen-revoke ID_CLAVE`. El comando `gpg --gen-revoke ID_CLAVE` genera un certificado de revocacion que se debe crear inmediatamente despues de generar la clave y almacenarse en un lugar seguro. Si la clave privada se compromete, se importa el certificado con `gpg --import revocacion.asc` y se envia al servidor de claves con `gpg --keyserver hkps://keys.openpgp.org --send-keys ID_CLAVE`. GPG tambien genera automaticamente un certificado en `~/.gnupg/openpgp-revocs.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-009">
<div class="flashcard-front">

**P:** Que comando muestra la huella digital (fingerprint) de una clave SSH?

</div>
<div class="flashcard-back">

**R:** b) `ssh-keygen -l -f ~/.ssh/id_ed25519.pub`. La opcion `-l` de `ssh-keygen` muestra la huella digital (fingerprint) de una clave, y `-f` especifica el archivo. Esto es util para verificar la identidad de un servidor comparando la huella con un valor conocido, o para comprobar el tipo y tamano de una clave. Funciona tanto con claves publicas como privadas. Para ver la huella de una clave de host del servidor: `ssh-keygen -l -f /etc/ssh/ssh_host_ed25519_key.pub`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-010">
<div class="flashcard-front">

**P:** En GPG, que hace el comando `gpg --detach-sign archivo.txt`?

</div>
<div class="flashcard-back">

**R:** b) Genera una firma digital separada del archivo original. `gpg --detach-sign` genera una firma digital en un archivo separado (`archivo.txt.sig`) sin incluirla en el archivo original. Esto es util cuando no se quiere modificar el archivo original. Otras opciones de firma: `gpg --sign` incluye la firma dentro del archivo (genera `archivo.txt.gpg`), `gpg --clearsign` envuelve el texto con la firma en texto claro (genera `archivo.txt.asc`). Para verificar: `gpg --verify archivo.txt.sig archivo.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-011">
<div class="flashcard-front">

**P:** Cuales son los permisos correctos que debe tener el directorio `~/.ssh/` para que SSH funcione correctamente?

</div>
<div class="flashcard-back">

**R:** b) 700. El directorio `~/.ssh/` debe tener permisos 700 (`drwx------`), lo que significa que solo el propietario puede leer, escribir y acceder al directorio. Los permisos de los archivos dentro son: clave privada (`id_rsa`, `id_ed25519`) = 600, clave publica (`id_rsa.pub`) = 644, `authorized_keys` = 600 o 644. SSH rechaza la conexion si los permisos son demasiado permisivos, ya que comprometerian la seguridad de las claves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-012">
<div class="flashcard-front">

**P:** Que comando copia la clave publica SSH al archivo `authorized_keys` del servidor remoto?

</div>
<div class="flashcard-back">

**R:** b) `ssh-copy-id usuario@servidor`. El comando `ssh-copy-id usuario@servidor` copia la clave publica del usuario al archivo `~/.ssh/authorized_keys` del servidor remoto, configurando automaticamente la autenticacion por clave publica. Para especificar una clave diferente: `ssh-copy-id -i ~/.ssh/mi_clave.pub usuario@servidor`. La opcion C copia la clave privada (no la publica), lo cual seria un grave error de seguridad. La clave privada nunca debe salir del equipo cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-013">
<div class="flashcard-front">

**P:** Que opcion de `/etc/ssh/sshd_config` permite restringir el acceso SSH a solo ciertos usuarios?

</div>
<div class="flashcard-back">

**R:** b) `AllowUsers admin juan`. La directiva `AllowUsers` en `/etc/ssh/sshd_config` permite restringir el acceso SSH a una lista especifica de usuarios. Solo los usuarios listados podran conectarse por SSH. Tambien existe `AllowGroups` para permitir por grupo (por ejemplo, `AllowGroups ssh-users`). Las directivas complementarias `DenyUsers` y `DenyGroups` permiten denegar usuarios o grupos especificos. Despues de cualquier cambio se debe reiniciar sshd con `systemctl restart sshd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-014">
<div class="flashcard-front">

**P:** En el modelo Web of Trust de GPG, cuantas firmas de claves con confianza "marginal" se necesitan como minimo para considerar una clave como valida?

</div>
<div class="flashcard-back">

**R:** c) 3. En el modelo Web of Trust de GPG, una clave se considera valida si esta firmada por al menos 1 clave con confianza "full" o por al menos 3 claves con confianza "marginal". Los niveles de confianza son: unknown (desconocido), none (sin confianza), marginal (confianza parcial), full (confianza completa) y ultimate (confianza absoluta, normalmente solo para tus propias claves). Este modelo descentralizado contrasta con el modelo centralizado de PKI/CA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-015">
<div class="flashcard-front">

**P:** Que comando de GPG cifra un archivo de forma simetrica (con contrasena, sin necesidad de claves publicas)?

</div>
<div class="flashcard-back">

**R:** b) `gpg --symmetric archivo.txt`. El comando `gpg --symmetric archivo.txt` (o `gpg -c archivo.txt`) cifra el archivo usando cifrado simetrico con una contrasena. No requiere claves GPG ni la clave publica de un destinatario. Se solicita una contrasena que sera necesaria para descifrar. Genera `archivo.txt.gpg`. Para descifrar: `gpg --decrypt archivo.txt.gpg`. La opcion `--encrypt --recipient` usa cifrado asimetrico (clave publica del destinatario).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `ssh -R 8080:localhost:3000 usuario@servidor`?

</div>
<div class="flashcard-back">

**R:** b) Crea un tunel remoto donde el puerto 8080 del servidor redirige al puerto 3000 local. La opcion `-R` (Remote) crea un tunel remoto: el puerto 8080 en el servidor remoto redirige el trafico al puerto 3000 de la maquina local a traves del tunel SSH. Esto es util para hacer accesible un servicio local desde el servidor remoto. `-L` crea un tunel local (opuesto). `-D` crea un proxy SOCKS dinamico. Las opciones `-N` (sin comando remoto) y `-f` (segundo plano) son utiles al crear tuneles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-017">
<div class="flashcard-front">

**P:** En que directorio almacena GPG las claves y configuracion del usuario?

</div>
<div class="flashcard-back">

**R:** b) `~/.gnupg/`. GPG almacena las claves y configuracion del usuario en el directorio `~/.gnupg/`. Este directorio contiene: `pubring.gpg` o `pubring.kbx` (anillo de claves publicas), `private-keys-v1.d/` (claves privadas), `trustdb.gpg` (base de datos de confianza), `gpg.conf` (configuracion personal) y `openpgp-revocs.d/` (certificados de revocacion generados automaticamente). Los permisos del directorio deben ser restrictivos (700).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-018">
<div class="flashcard-front">

**P:** Que opcion de `ssh-keygen` especifica el tipo de clave a generar?

</div>
<div class="flashcard-back">

**R:** c) `-t`. La opcion `-t` de `ssh-keygen` especifica el tipo de clave a generar. Los tipos disponibles son: `rsa` (clasico), `ecdsa` (curvas elipticas), `ed25519` (moderno, recomendado) y `dsa` (deprecado). Por ejemplo: `ssh-keygen -t ed25519`. La opcion `-b` especifica el tamano en bits (por ejemplo, `-b 4096` para RSA). `-f` especifica el nombre del archivo de salida. `-C` agrega un comentario a la clave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-019">
<div class="flashcard-front">

**P:** Que archivo en el servidor SSH contiene las claves publicas autorizadas para acceder a una cuenta de usuario?

</div>
<div class="flashcard-back">

**R:** b) `~/.ssh/authorized_keys`. El archivo `~/.ssh/authorized_keys` en el servidor contiene las claves publicas de los usuarios autorizados para acceder a esa cuenta via SSH sin contrasena. Cada linea contiene una clave publica. Se llena automaticamente al usar `ssh-copy-id`. Los permisos deben ser 600 o 644. `~/.ssh/known_hosts` es del cliente y almacena claves de host. `~/.ssh/config` es la configuracion del cliente SSH.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-020">
<div class="flashcard-front">

**P:** Que diferencia hay entre cifrado simetrico y asimetrico?

</div>
<div class="flashcard-back">

**R:** b) El simetrico usa una sola clave compartida y el asimetrico usa un par de claves (publica y privada). El cifrado simetrico usa una sola clave compartida entre emisor y receptor para cifrar y descifrar (ejemplos: AES, 3DES, Blowfish). Es rapido pero requiere compartir la clave de forma segura. El cifrado asimetrico usa un par de claves: la publica cifra y la privada descifra (ejemplos: RSA, ECDSA, Ed25519). Es mas lento pero resuelve el problema de distribucion de claves. En la practica se combinan: asimetrico para intercambiar una clave simetrica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-021">
<div class="flashcard-front">

**P:** Que comando genera un par de claves SSH de tipo Ed25519?

</div>
<div class="flashcard-back">

**R:** ssh-keygen -t ed25519. El comando `ssh-keygen -t ed25519` genera un par de claves SSH de tipo Ed25519, que es el algoritmo mas moderno y recomendado. Ed25519 ofrece alta seguridad con claves de tamano fijo (256 bits), es rapido y no depende de parametros de curva potencialmente debiles. Los archivos generados son `~/.ssh/id_ed25519` (clave privada, permisos 600) y `~/.ssh/id_ed25519.pub` (clave publica, permisos 644).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-022">
<div class="flashcard-front">

**P:** Que comando exporta la clave publica GPG de "Juan Garcia" en formato ASCII a un archivo?

</div>
<div class="flashcard-back">

**R:** gpg --export --armor "Juan Garcia" > clave_publica.asc. El comando `gpg --export --armor "Juan Garcia"` exporta la clave publica del usuario especificado en formato ASCII (armored), que es legible como texto. La opcion `--armor` (o `-a`) convierte la salida binaria a formato ASCII base64. La redireccion `>` guarda la salida en un archivo. Sin `--armor`, la salida seria binaria. Esta clave publica se puede compartir con otros para que puedan cifrar mensajes para ti o verificar tus firmas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-023">
<div class="flashcard-front">

**P:** Que comando elimina la entrada del host "servidor.ejemplo.com" del archivo known_hosts?

</div>
<div class="flashcard-back">

**R:** ssh-keygen -R servidor.ejemplo.com. El comando `ssh-keygen -R servidor.ejemplo.com` elimina todas las claves asociadas al host especificado del archivo `~/.ssh/known_hosts`. Esto es necesario cuando la clave de host de un servidor ha cambiado legitimamente (por ejemplo, tras una reinstalacion), ya que SSH rechaza la conexion si detecta que la clave cambio (proteccion contra ataques man-in-the-middle).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-024">
<div class="flashcard-front">

**P:** Que comando lista las claves privadas GPG almacenadas en el anillo de claves del usuario?

</div>
<div class="flashcard-back">

**R:** gpg --list-secret-keys. El comando `gpg --list-secret-keys` muestra todas las claves privadas almacenadas en el anillo de claves del usuario (en `~/.gnupg/`). Para listar las claves publicas se usa `gpg --list-keys`. `gpg --fingerprint` muestra las huellas digitales de las claves. Para eliminar claves: `gpg --delete-secret-key ID` (privada) y `gpg --delete-key ID` (publica). La clave privada se debe eliminar antes de la publica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-025">
<div class="flashcard-front">

**P:** Que comando crea un proxy SOCKS dinamico en el puerto local 1080 a traves de un tunel SSH?

</div>
<div class="flashcard-back">

**R:** ssh -D 1080 usuario@servidor. El comando `ssh -D 1080 usuario@servidor` crea un proxy SOCKS dinamico en el puerto local 1080. Todo el trafico enviado a traves de este proxy sera encaminado por el tunel SSH hacia el servidor remoto. Se puede configurar el navegador o aplicaciones para usar `localhost:1080` como proxy SOCKS. Es util para navegar de forma segura en redes no confiables. Las opciones `-N` (sin comando) y `-f` (segundo plano) son utiles con tuneles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-026">
<div class="flashcard-front">

**P:** Que es/son `ssh-agent` y `ssh-add`?

</div>
<div class="flashcard-back">

**R:** El agente SSH almacena las claves privadas descifradas en memoria, evitando tener que introducir la passphrase repetidamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-027">
<div class="flashcard-front">

**P:** Que es/son `~/.ssh/known_hosts`?

</div>
<div class="flashcard-back">

**R:** Almacena las **claves de host** de los servidores a los que te has conectado. Protege contra ataques man-in-the-middle.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-028">
<div class="flashcard-front">

**P:** Que es/son Archivos de clave de host del servidor: `/etc/ssh/`?

</div>
<div class="flashcard-back">

**R:** El servidor SSH tiene sus propias claves (host keys) que identifican al servidor de forma unica. Se almacenan en `/etc/ssh/`:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-029">
<div class="flashcard-front">

**P:** Que es/son `~/.ssh/config`?

</div>
<div class="flashcard-back">

**R:** Archivo de configuracion del cliente SSH para simplificar conexiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-030">
<div class="flashcard-front">

**P:** Que es/son `/etc/ssh/sshd_config`?

</div>
<div class="flashcard-back">

**R:** Configuracion del **servidor** SSH (demonio sshd).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-031">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **ssh-keygen**: `-t` tipo (rsa, ecdsa, ed25519), `-b` bits. Ed25519 es el recomendado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.3">
</div>

<div class="flashcard" data-id="110.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

