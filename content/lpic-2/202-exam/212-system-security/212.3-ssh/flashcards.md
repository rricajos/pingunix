---
title: "212.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "212.3"
---

# Flashcards: 212.3 - Ssh

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué directiva de sshd_config permite el acceso root solo mediante clave pública, bloqueando la autenticación por contraseña?

</div>
<div class="flashcard-back">

**R:** c) `PermitRootLogin prohibit-password`. La opción `prohibit-password` (anteriormente `without-password`) permite el login de root únicamente mediante autenticación por clave pública, deshabilitando la autenticación por contraseña y teclado interactivo para el usuario root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-002">
<div class="flashcard-front">

**P:** Un administrador quiere crear usuarios que solo puedan usar SFTP y estén confinados a su directorio home. ¿Qué configuración en sshd_config es correcta?

</div>
<div class="flashcard-back">

**R:** b) `Match Group sftponly` con `ForceCommand internal-sftp` y `ChrootDirectory /home/%u`. `ForceCommand internal-sftp` usa el subsistema SFTP integrado en sshd (necesario con chroot). `ChrootDirectory /home/%u` confina al usuario. El directorio chroot debe ser propiedad de root y no tener permisos de escritura para el grupo u otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando crea un túnel que permite acceder al puerto 3306 de un servidor de base de datos remoto a través de localhost:13306?

</div>
<div class="flashcard-back">

**R:** b) `ssh -L 13306:db-server:3306 usuario@servidor`. La opción `-L` crea un túnel local: `ssh -L puerto_local:destino:puerto_destino usuario@servidor_ssh`. Las conexiones al puerto local 13306 se reenvían a través del servidor SSH hacia db-server:3306.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando se usa para eliminar la entrada de un servidor del archivo `known_hosts`?

</div>
<div class="flashcard-back">

**R:** b) `ssh-keygen -R servidor.ejemplo.com`. El comando `ssh-keygen -R hostname` elimina todas las claves asociadas a ese hostname del archivo `known_hosts`. Esto es necesario cuando un servidor ha sido reinstalado y su huella digital ha cambiado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué opción de ssh_config permite reutilizar una conexión SSH existente para múltiples sesiones al mismo host?

</div>
<div class="flashcard-back">

**R:** b) `ControlMaster auto`. `ControlMaster auto` habilita la multiplexación de conexiones SSH. Junto con `ControlPath` (ruta del socket) y `ControlPersist` (tiempo de vida), permite que conexiones posteriores al mismo host reutilicen la conexión existente sin repetir la autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué permisos debe tener el archivo de clave privada SSH `~/.ssh/id_ed25519` para que OpenSSH lo acepte?

</div>
<div class="flashcard-back">

**R:** c) 600. Las claves privadas SSH deben tener permisos 600 (lectura y escritura solo para el propietario). OpenSSH rechazará usar una clave privada si tiene permisos demasiado abiertos, mostrando el mensaje "Permissions are too open".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué opción de la línea de comandos ssh permite saltar a través de un servidor intermedio (bastion host) para llegar al destino final?

</div>
<div class="flashcard-back">

**R:** b) `-J bastion`. La opción `-J` (ProxyJump) permite especificar uno o más hosts intermedios para llegar al destino. Es equivalente a la directiva `ProxyJump` en ssh_config. Se pueden encadenar múltiples saltos: `ssh -J bastion1,bastion2 usuario@destino`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-008">
<div class="flashcard-front">

**P:** Si se definen las directivas `AllowUsers` y `DenyUsers` en sshd_config, ¿cuál se evalúa primero?

</div>
<div class="flashcard-back">

**R:** b) DenyUsers se evalúa primero. El orden de evaluación de acceso en sshd es: DenyUsers -> AllowUsers -> DenyGroups -> AllowGroups. Primero se verifican las listas de denegación, luego las de permitidos. Si un usuario aparece en DenyUsers, será denegado sin importar las demás directivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué opción en el archivo `authorized_keys` permite restringir una clave pública para que solo pueda ejecutar un comando específico?

</div>
<div class="flashcard-back">

**R:** b) `command="/usr/bin/comando"`. La opción `command="..."` al inicio de una línea en `authorized_keys` fuerza la ejecución de un comando específico cuando esa clave se usa para autenticarse, ignorando cualquier comando proporcionado por el cliente. Se combina con opciones como `no-pty` y `no-port-forwarding` para mayor restricción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué hace el comando `ssh -D 1080 usuario@servidor`?

</div>
<div class="flashcard-back">

**R:** c) Crea un proxy SOCKS dinámico en el puerto local 1080. La opción `-D` crea un proxy SOCKS5 en el puerto local especificado. Todo el tráfico dirigido a este proxy se cifra y se envía a través de la conexión SSH, donde el servidor lo reenvía al destino final. Es útil para navegar de forma segura a través de un servidor remoto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué directiva de sshd_config establece un mensaje de advertencia que se muestra al usuario antes de la autenticación?

</div>
<div class="flashcard-back">

**R:** b) Banner /etc/ssh/banner.txt. La directiva `Banner` especifica un archivo de texto cuyo contenido se envía al cliente SSH antes del proceso de autenticación. Se usa comúnmente para mostrar avisos legales o políticas de uso. No debe confundirse con `/etc/motd`, que se muestra después de un login exitoso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué algoritmo de clave SSH es considerado el más recomendado actualmente por su seguridad y rendimiento?

</div>
<div class="flashcard-back">

**R:** d) Ed25519. Ed25519 es el algoritmo de clave SSH recomendado actualmente por su alta seguridad, rendimiento superior y claves compactas. Está basado en criptografía de curva elíptica (Curve25519). DSA está considerado obsoleto y ya no es soportado en versiones recientes de OpenSSH.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué directiva de sshd_config limita el número de intentos de autenticación fallidos antes de desconectar al cliente?

</div>
<div class="flashcard-back">

**R:** b) MaxAuthTries 3. La directiva `MaxAuthTries` establece el número máximo de intentos de autenticación permitidos por conexión. Si se excede este límite, la conexión se cierra. Un valor bajo (como 3) ayuda a mitigar ataques de fuerza bruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué opción del archivo `authorized_keys` restringe la conexión a una clave pública solo desde direcciones IP específicas?

</div>
<div class="flashcard-back">

**R:** b) `from="192.168.1.0/24"`. La opción `from="patrón"` en `authorized_keys` restringe el uso de una clave pública a conexiones provenientes de las direcciones IP o nombres de host especificados. Se pueden incluir múltiples patrones separados por comas y se admiten comodines.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué directiva de sshd_config configura el intervalo de envío de paquetes keepalive al cliente para detectar conexiones caídas?

</div>
<div class="flashcard-back">

**R:** b) ClientAliveInterval 300. La directiva `ClientAliveInterval` especifica el intervalo en segundos entre mensajes de verificación enviados al cliente. Si el servidor no recibe respuesta tras `ClientAliveCountMax` intentos, cierra la conexión. Con valores de 300 y 3, la conexión se cierra tras 900 segundos sin respuesta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué directiva en un bloque `Match` de sshd_config fuerza que un usuario solo pueda utilizar SFTP?

</div>
<div class="flashcard-back">

**R:** c) ForceCommand internal-sftp. La directiva `ForceCommand internal-sftp` obliga a que la sesión del usuario utilice únicamente el subsistema SFTP interno de sshd. Combinada con `ChrootDirectory`, confina al usuario a un directorio específico sin acceso a shell. Es el método estándar para crear cuentas de solo SFTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando muestra las claves actualmente cargadas en el agente SSH?

</div>
<div class="flashcard-back">

**R:** b) ssh-add -l. El comando `ssh-add -l` lista las huellas digitales de todas las claves privadas que están cargadas en el agente SSH (`ssh-agent`). La opción `-L` (mayúscula) muestra las claves públicas completas en lugar de solo las huellas digitales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué opción de `scp` se utiliza para especificar un puerto SSH diferente al estándar?

</div>
<div class="flashcard-back">

**R:** b) `-P 2222`. En `scp`, la opción `-P` (mayúscula) especifica el puerto SSH remoto. Nota que en el comando `ssh`, el puerto se especifica con `-p` (minúscula). Esta diferencia es importante para el examen. La opción `-p` (minúscula) en scp preserva las marcas de tiempo y permisos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva de ssh_config del cliente mantiene la conexión maestra activa durante un periodo de tiempo tras cerrar la última sesión?

</div>
<div class="flashcard-back">

**R:** b) ControlPersist 600. La directiva `ControlPersist` mantiene la conexión maestra SSH en segundo plano durante el número de segundos especificado después de que la última sesión se cierre. Junto con `ControlMaster auto` y `ControlPath`, permite la reutilización eficiente de conexiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando SSH crea un túnel remoto que expone el puerto 80 local como puerto 8080 en el servidor remoto?

</div>
<div class="flashcard-back">

**R:** b) `ssh -R 8080:localhost:80 usuario@servidor`. La opción `-R` (Remote) crea un túnel remoto: el puerto 8080 del servidor SSH se redirige hacia localhost:80 del cliente. Esto permite que las conexiones al puerto 8080 del servidor remoto lleguen al servicio web local del cliente. `-L` haría lo contrario (túnel local).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando copia la clave pública SSH al servidor remoto para habilitar autenticación sin contraseña?

</div>
<div class="flashcard-back">

**R:** ssh-copy-id usuario@servidor. El comando `ssh-copy-id` copia la clave pública del usuario local al archivo `~/.ssh/authorized_keys` del servidor remoto, configurando automáticamente los permisos correctos. Se puede especificar una clave concreta con `-i ~/.ssh/id_ed25519.pub`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando genera un par de claves SSH de tipo Ed25519?

</div>
<div class="flashcard-back">

**R:** ssh-keygen -t ed25519. El comando `ssh-keygen -t ed25519` genera un par de claves SSH utilizando el algoritmo Ed25519. La clave privada se guarda en `~/.ssh/id_ed25519` y la clave pública en `~/.ssh/id_ed25519.pub`. Se puede añadir un comentario con `-C`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando elimina la entrada de un host específico del archivo known_hosts?

</div>
<div class="flashcard-back">

**R:** ssh-keygen -R servidor.ejemplo.com. El comando `ssh-keygen -R hostname` elimina todas las claves asociadas a ese hostname del archivo `~/.ssh/known_hosts`. Es necesario ejecutarlo cuando un servidor ha sido reinstalado y su huella digital ha cambiado, causando un error de verificación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando añade una clave privada al agente SSH para no tener que escribir la passphrase repetidamente?

</div>
<div class="flashcard-back">

**R:** ssh-add. El comando `ssh-add` (opcionalmente seguido de la ruta de la clave) carga una clave privada en el agente SSH (`ssh-agent`). Una vez cargada, la passphrase no se solicita de nuevo hasta que la clave se elimine del agente o este se cierre. Con `-t segundos` se limita el tiempo de vida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando elimina todas las claves cargadas en el agente SSH?

</div>
<div class="flashcard-back">

**R:** ssh-add -D. El comando `ssh-add -D` elimina todas las identidades (claves privadas) del agente SSH. Es útil por seguridad cuando se termina de trabajar o si se desea recargar un conjunto diferente de claves. La opción `-d` (minúscula) elimina una clave específica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `PermitRootLogin prohibit-password` permite el acceso root solo con clave públic...

</div>
<div class="flashcard-back">

**R:** `PermitRootLogin prohibit-password` permite el acceso root solo con clave pública, bloqueando la autenticación por contraseña. Es la opción recomendada si se necesita acceso root remoto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Si se define `AllowUsers` o `AllowGroups`, solo los usuarios/grupos listados ten...

</div>
<div class="flashcard-back">

**R:** Si se define `AllowUsers` o `AllowGroups`, solo los usuarios/grupos listados tendrán acceso. Todos los demás quedan implícitamente denegados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `ForceCommand internal-sftp` combinado con `ChrootDirectory` es la forma estánda...

</div>
<div class="flashcard-back">

**R:** `ForceCommand internal-sftp` combinado con `ChrootDirectory` es la forma estándar de crear usuarios que solo pueden usar SFTP, confinados a un directorio específico. El directorio chroot debe ser propiedad de root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: La multiplexación con ControlMaster acelera las conexiones SSH posteriores al mi...

</div>
<div class="flashcard-back">

**R:** La multiplexación con ControlMaster acelera las conexiones SSH posteriores al mismo host, ya que no necesitan repetir la negociación del protocolo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Si la huella digital del servidor cambia (por reinstalación o ataque), SSH muest...

</div>
<div class="flashcard-back">

**R:** Si la huella digital del servidor cambia (por reinstalación o ataque), SSH muestra una advertencia. El usuario debe eliminar la entrada antigua con `ssh-keygen -R` antes de reconectarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `-L` redirige un puerto local hacia un destino remoto. `-R` redirige un puerto r...

</div>
<div class="flashcard-back">

**R:** `-L` redirige un puerto local hacia un destino remoto. `-R` redirige un puerto remoto hacia un destino local. `-D` crea un proxy SOCKS dinámico que puede redirigir tráfico a cualquier destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introducción a SSH?

</div>
<div class="flashcard-back">

**R:** SSH (Secure Shell) proporciona comunicación cifrada entre sistemas, reemplazando protocolos inseguros como telnet, rsh y rlogin. OpenSSH es la implementación estándar en sistemas Linux y ofrece acceso

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Configuración del servidor: sshd_config?

</div>
<div class="flashcard-back">

**R:** El archivo principal de configuración del demonio SSH es `/etc/ssh/sshd_config`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Configuración del cliente: ssh_config?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/ssh/ssh_config` (global) o `~/.ssh/config` (por usuario) configura el comportamiento del cliente SSH.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Archivo known_hosts?

</div>
<div class="flashcard-back">

**R:** `~/.ssh/known_hosts` almacena las huellas digitales de los servidores previamente conectados para detectar ataques man-in-the-middle.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Permisos requeridos para archivos SSH?

</div>
<div class="flashcard-back">

**R:** | Archivo/Directorio | Permiso |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

