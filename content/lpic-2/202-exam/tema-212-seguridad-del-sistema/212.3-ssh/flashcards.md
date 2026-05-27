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

> 25 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: `PermitRootLogin prohibit-password` permite el acceso root solo con clave públic...

</div>
<div class="flashcard-back">

**R:** `PermitRootLogin prohibit-password` permite el acceso root solo con clave pública, bloqueando la autenticación por contraseña. Es la opción recomendada si se necesita acceso root remoto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-012">
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

<div class="flashcard" data-id="212.3-fc-013">
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

<div class="flashcard" data-id="212.3-fc-014">
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

<div class="flashcard" data-id="212.3-fc-015">
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

<div class="flashcard" data-id="212.3-fc-016">
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

<div class="flashcard" data-id="212.3-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `~/.ssh/`?

</div>
<div class="flashcard-back">

**R:** 700

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `~/.ssh/authorized_keys`?

</div>
<div class="flashcard-back">

**R:** 600

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `~/.ssh/config`?

</div>
<div class="flashcard-back">

**R:** 600

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `~/.ssh/known_hosts`?

</div>
<div class="flashcard-back">

**R:** 644

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.3">
</div>

<div class="flashcard" data-id="212.3-fc-021">
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

<div class="flashcard" data-id="212.3-fc-022">
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

<div class="flashcard" data-id="212.3-fc-023">
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

<div class="flashcard" data-id="212.3-fc-024">
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

<div class="flashcard" data-id="212.3-fc-025">
<div class="flashcard-front">

**P:** Que es/son Permisos requeridos para archivos SSH?

</div>
<div class="flashcard-back">

**R:** | Archivo/Directorio | Permiso |

</div>
</div>

---

