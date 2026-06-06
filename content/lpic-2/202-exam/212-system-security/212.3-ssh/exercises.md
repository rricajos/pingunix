---
title: "212.3 - SSH: Ejercicios"
tags: [lpic-2, examen-202, tema-212, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "212"
subtema: "212.3"
---

# 212.3 - SSH: Ejercicios

### Pregunta 1

¿Qué directiva de sshd_config permite el acceso root solo mediante clave pública, bloqueando la autenticación por contraseña?

a) `PermitRootLogin yes`
b) `PermitRootLogin no`
c) `PermitRootLogin prohibit-password`
d) `PermitRootLogin publickey-only`

<details>
<summary>Respuesta</summary>

**c) `PermitRootLogin prohibit-password`**

La opción `prohibit-password` (anteriormente `without-password`) permite el login de root únicamente mediante autenticación por clave pública, deshabilitando la autenticación por contraseña y teclado interactivo para el usuario root.
</details>

---

### Pregunta 2

Un administrador quiere crear usuarios que solo puedan usar SFTP y estén confinados a su directorio home. ¿Qué configuración en sshd_config es correcta?

a) `Match Group sftponly` con `ForceCommand /usr/bin/sftp` y `ChrootDirectory /home/%u`
b) `Match Group sftponly` con `ForceCommand internal-sftp` y `ChrootDirectory /home/%u`
c) `SFTPOnly yes` con `ChrootDirectory /home/%u`
d) `Match Group sftponly` con `Shell /bin/sftp`

<details>
<summary>Respuesta</summary>

**b) `Match Group sftponly` con `ForceCommand internal-sftp` y `ChrootDirectory /home/%u`**

`ForceCommand internal-sftp` usa el subsistema SFTP integrado en sshd (necesario con chroot). `ChrootDirectory /home/%u` confina al usuario. El directorio chroot debe ser propiedad de root y no tener permisos de escritura para el grupo u otros.
</details>

---

### Pregunta 3

¿Qué comando crea un túnel que permite acceder al puerto 3306 de un servidor de base de datos remoto a través de localhost:13306?

a) `ssh -R 13306:localhost:3306 usuario@servidor`
b) `ssh -L 13306:db-server:3306 usuario@servidor`
c) `ssh -D 13306 usuario@servidor`
d) `ssh -L 3306:13306 usuario@servidor`

<details>
<summary>Respuesta</summary>

**b) `ssh -L 13306:db-server:3306 usuario@servidor`**

La opción `-L` crea un túnel local: `ssh -L puerto_local:destino:puerto_destino usuario@servidor_ssh`. Las conexiones al puerto local 13306 se reenvían a través del servidor SSH hacia db-server:3306.
</details>

---

### Pregunta 4

¿Qué comando se usa para eliminar la entrada de un servidor del archivo `known_hosts`?

a) `ssh-keygen -D servidor.ejemplo.com`
b) `ssh-keygen -R servidor.ejemplo.com`
c) `ssh-agent -R servidor.ejemplo.com`
d) `ssh -remove-host servidor.ejemplo.com`

<details>
<summary>Respuesta</summary>

**b) `ssh-keygen -R servidor.ejemplo.com`**

El comando `ssh-keygen -R hostname` elimina todas las claves asociadas a ese hostname del archivo `known_hosts`. Esto es necesario cuando un servidor ha sido reinstalado y su huella digital ha cambiado.
</details>

---

### Pregunta 5

¿Qué opción de ssh_config permite reutilizar una conexión SSH existente para múltiples sesiones al mismo host?

a) `ConnectionReuse yes`
b) `ControlMaster auto`
c) `Multiplexing yes`
d) `SessionShare auto`

<details>
<summary>Respuesta</summary>

**b) `ControlMaster auto`**

`ControlMaster auto` habilita la multiplexación de conexiones SSH. Junto con `ControlPath` (ruta del socket) y `ControlPersist` (tiempo de vida), permite que conexiones posteriores al mismo host reutilicen la conexión existente sin repetir la autenticación.
</details>

---

### Pregunta 6

¿Qué permisos debe tener el archivo de clave privada SSH `~/.ssh/id_ed25519` para que OpenSSH lo acepte?

a) 644
b) 755
c) 600
d) 700

<details>
<summary>Respuesta</summary>

**c) 600**

Las claves privadas SSH deben tener permisos 600 (lectura y escritura solo para el propietario). OpenSSH rechazará usar una clave privada si tiene permisos demasiado abiertos, mostrando el mensaje "Permissions are too open".
</details>

---

### Pregunta 7

¿Qué opción de la línea de comandos ssh permite saltar a través de un servidor intermedio (bastion host) para llegar al destino final?

a) `-B bastion`
b) `-J bastion`
c) `-P bastion`
d) `-G bastion`

<details>
<summary>Respuesta</summary>

**b) `-J bastion`**

La opción `-J` (ProxyJump) permite especificar uno o más hosts intermedios para llegar al destino. Es equivalente a la directiva `ProxyJump` en ssh_config. Se pueden encadenar múltiples saltos: `ssh -J bastion1,bastion2 usuario@destino`.
</details>

---

### Pregunta 8

Si se definen las directivas `AllowUsers` y `DenyUsers` en sshd_config, ¿cuál se evalúa primero?

a) AllowUsers se evalúa primero
b) DenyUsers se evalúa primero
c) Se evalúan simultáneamente
d) La última directiva en el archivo tiene prioridad

<details>
<summary>Respuesta</summary>

**b) DenyUsers se evalúa primero**

El orden de evaluación de acceso en sshd es: DenyUsers -> AllowUsers -> DenyGroups -> AllowGroups. Primero se verifican las listas de denegación, luego las de permitidos. Si un usuario aparece en DenyUsers, será denegado sin importar las demás directivas.
</details>

---

### Pregunta 9

¿Qué opción en el archivo `authorized_keys` permite restringir una clave pública para que solo pueda ejecutar un comando específico?

a) `force="/usr/bin/comando"`
b) `command="/usr/bin/comando"`
c) `restrict="/usr/bin/comando"`
d) `exec="/usr/bin/comando"`

<details>
<summary>Respuesta</summary>

**b) `command="/usr/bin/comando"`**

La opción `command="..."` al inicio de una línea en `authorized_keys` fuerza la ejecución de un comando específico cuando esa clave se usa para autenticarse, ignorando cualquier comando proporcionado por el cliente. Se combina con opciones como `no-pty` y `no-port-forwarding` para mayor restricción.
</details>

---

### Pregunta 10

¿Qué hace el comando `ssh -D 1080 usuario@servidor`?

a) Crea un túnel directo al puerto 1080 del servidor
b) Descarga archivos del servidor al puerto local 1080
c) Crea un proxy SOCKS dinámico en el puerto local 1080
d) Establece el tiempo de desconexión a 1080 segundos

<details>
<summary>Respuesta</summary>

**c) Crea un proxy SOCKS dinámico en el puerto local 1080**

La opción `-D` crea un proxy SOCKS5 en el puerto local especificado. Todo el tráfico dirigido a este proxy se cifra y se envía a través de la conexión SSH, donde el servidor lo reenvía al destino final. Es útil para navegar de forma segura a través de un servidor remoto.
</details>

---

### Pregunta 11

¿Qué directiva de sshd_config establece un mensaje de advertencia que se muestra al usuario antes de la autenticación?

a) WarningMessage /etc/ssh/banner.txt
b) Banner /etc/ssh/banner.txt
c) PreLoginBanner /etc/ssh/banner.txt
d) Motd /etc/ssh/banner.txt

<details>
<summary>Respuesta</summary>

**b) Banner /etc/ssh/banner.txt**

La directiva `Banner` especifica un archivo de texto cuyo contenido se envía al cliente SSH antes del proceso de autenticación. Se usa comúnmente para mostrar avisos legales o políticas de uso. No debe confundirse con `/etc/motd`, que se muestra después de un login exitoso.
</details>

---

### Pregunta 12

¿Qué algoritmo de clave SSH es considerado el más recomendado actualmente por su seguridad y rendimiento?

a) RSA
b) DSA
c) ECDSA
d) Ed25519

<details>
<summary>Respuesta</summary>

**d) Ed25519**

Ed25519 es el algoritmo de clave SSH recomendado actualmente por su alta seguridad, rendimiento superior y claves compactas. Está basado en criptografía de curva elíptica (Curve25519). DSA está considerado obsoleto y ya no es soportado en versiones recientes de OpenSSH.
</details>

---

### Pregunta 13

¿Qué directiva de sshd_config limita el número de intentos de autenticación fallidos antes de desconectar al cliente?

a) MaxLoginAttempts 3
b) MaxAuthTries 3
c) AuthRetryLimit 3
d) LoginAttempts 3

<details>
<summary>Respuesta</summary>

**b) MaxAuthTries 3**

La directiva `MaxAuthTries` establece el número máximo de intentos de autenticación permitidos por conexión. Si se excede este límite, la conexión se cierra. Un valor bajo (como 3) ayuda a mitigar ataques de fuerza bruta.
</details>

---

### Pregunta 14

¿Qué opción del archivo `authorized_keys` restringe la conexión a una clave pública solo desde direcciones IP específicas?

a) `allow="192.168.1.0/24"`
b) `from="192.168.1.0/24"`
c) `source="192.168.1.0/24"`
d) `ip="192.168.1.0/24"`

<details>
<summary>Respuesta</summary>

**b) `from="192.168.1.0/24"`**

La opción `from="patrón"` en `authorized_keys` restringe el uso de una clave pública a conexiones provenientes de las direcciones IP o nombres de host especificados. Se pueden incluir múltiples patrones separados por comas y se admiten comodines.
</details>

---

### Pregunta 15

¿Qué directiva de sshd_config configura el intervalo de envío de paquetes keepalive al cliente para detectar conexiones caídas?

a) KeepAliveInterval 300
b) ClientAliveInterval 300
c) HeartbeatInterval 300
d) PingInterval 300

<details>
<summary>Respuesta</summary>

**b) ClientAliveInterval 300**

La directiva `ClientAliveInterval` especifica el intervalo en segundos entre mensajes de verificación enviados al cliente. Si el servidor no recibe respuesta tras `ClientAliveCountMax` intentos, cierra la conexión. Con valores de 300 y 3, la conexión se cierra tras 900 segundos sin respuesta.
</details>

---

### Pregunta 16

¿Qué directiva en un bloque `Match` de sshd_config fuerza que un usuario solo pueda utilizar SFTP?

a) AllowSFTPOnly yes
b) Shell /bin/sftp
c) ForceCommand internal-sftp
d) SFTPOnly yes

<details>
<summary>Respuesta</summary>

**c) ForceCommand internal-sftp**

La directiva `ForceCommand internal-sftp` obliga a que la sesión del usuario utilice únicamente el subsistema SFTP interno de sshd. Combinada con `ChrootDirectory`, confina al usuario a un directorio específico sin acceso a shell. Es el método estándar para crear cuentas de solo SFTP.
</details>

---

### Pregunta 17

¿Qué comando muestra las claves actualmente cargadas en el agente SSH?

a) ssh-agent -l
b) ssh-add -l
c) ssh-keygen -l
d) ssh-list

<details>
<summary>Respuesta</summary>

**b) ssh-add -l**

El comando `ssh-add -l` lista las huellas digitales de todas las claves privadas que están cargadas en el agente SSH (`ssh-agent`). La opción `-L` (mayúscula) muestra las claves públicas completas en lugar de solo las huellas digitales.
</details>

---

### Pregunta 18

¿Qué opción de `scp` se utiliza para especificar un puerto SSH diferente al estándar?

a) `-p 2222`
b) `-P 2222`
c) `--port 2222`
d) `-o Port=2222`

<details>
<summary>Respuesta</summary>

**b) `-P 2222`**

En `scp`, la opción `-P` (mayúscula) especifica el puerto SSH remoto. Nota que en el comando `ssh`, el puerto se especifica con `-p` (minúscula). Esta diferencia es importante para el examen. La opción `-p` (minúscula) en scp preserva las marcas de tiempo y permisos.
</details>

---

### Pregunta 19

¿Qué directiva de ssh_config del cliente mantiene la conexión maestra activa durante un periodo de tiempo tras cerrar la última sesión?

a) ControlTimeout 600
b) ControlPersist 600
c) SessionTimeout 600
d) MasterPersist 600

<details>
<summary>Respuesta</summary>

**b) ControlPersist 600**

La directiva `ControlPersist` mantiene la conexión maestra SSH en segundo plano durante el número de segundos especificado después de que la última sesión se cierre. Junto con `ControlMaster auto` y `ControlPath`, permite la reutilización eficiente de conexiones.
</details>

---

### Pregunta 20

¿Qué comando SSH crea un túnel remoto que expone el puerto 80 local como puerto 8080 en el servidor remoto?

a) `ssh -L 8080:localhost:80 usuario@servidor`
b) `ssh -R 8080:localhost:80 usuario@servidor`
c) `ssh -D 8080 usuario@servidor`
d) `ssh -T 8080:80 usuario@servidor`

<details>
<summary>Respuesta</summary>

**b) `ssh -R 8080:localhost:80 usuario@servidor`**

La opción `-R` (Remote) crea un túnel remoto: el puerto 8080 del servidor SSH se redirige hacia localhost:80 del cliente. Esto permite que las conexiones al puerto 8080 del servidor remoto lleguen al servicio web local del cliente. `-L` haría lo contrario (túnel local).
</details>

---

### Pregunta 21

¿Qué comando copia la clave pública SSH al servidor remoto para habilitar autenticación sin contraseña?

<input type="text" class="fill-blank" data-answer="ssh-copy-id usuario@servidor" data-alt="ssh-copy-id" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ssh-copy-id usuario@servidor**

El comando `ssh-copy-id` copia la clave pública del usuario local al archivo `~/.ssh/authorized_keys` del servidor remoto, configurando automáticamente los permisos correctos. Se puede especificar una clave concreta con `-i ~/.ssh/id_ed25519.pub`.
</details>

---

### Pregunta 22

¿Qué comando genera un par de claves SSH de tipo Ed25519?

<input type="text" class="fill-blank" data-answer="ssh-keygen -t ed25519" data-alt="ssh-keygen -t ed25519 -C usuario@ejemplo.com" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ssh-keygen -t ed25519**

El comando `ssh-keygen -t ed25519` genera un par de claves SSH utilizando el algoritmo Ed25519. La clave privada se guarda en `~/.ssh/id_ed25519` y la clave pública en `~/.ssh/id_ed25519.pub`. Se puede añadir un comentario con `-C`.
</details>

---

### Pregunta 23

¿Qué comando elimina la entrada de un host específico del archivo known_hosts?

<input type="text" class="fill-blank" data-answer="ssh-keygen -R servidor.ejemplo.com" data-alt="ssh-keygen -R" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ssh-keygen -R servidor.ejemplo.com**

El comando `ssh-keygen -R hostname` elimina todas las claves asociadas a ese hostname del archivo `~/.ssh/known_hosts`. Es necesario ejecutarlo cuando un servidor ha sido reinstalado y su huella digital ha cambiado, causando un error de verificación.
</details>

---

### Pregunta 24

¿Qué comando añade una clave privada al agente SSH para no tener que escribir la passphrase repetidamente?

<input type="text" class="fill-blank" data-answer="ssh-add" data-alt="ssh-add ~/.ssh/id_ed25519" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ssh-add**

El comando `ssh-add` (opcionalmente seguido de la ruta de la clave) carga una clave privada en el agente SSH (`ssh-agent`). Una vez cargada, la passphrase no se solicita de nuevo hasta que la clave se elimine del agente o este se cierre. Con `-t segundos` se limita el tiempo de vida.
</details>

---

### Pregunta 25

¿Qué comando elimina todas las claves cargadas en el agente SSH?

<input type="text" class="fill-blank" data-answer="ssh-add -D" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ssh-add -D**

El comando `ssh-add -D` elimina todas las identidades (claves privadas) del agente SSH. Es útil por seguridad cuando se termina de trabajar o si se desea recargar un conjunto diferente de claves. La opción `-d` (minúscula) elimina una clave específica.
</details>
