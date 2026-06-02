---
title: "212.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "212.2"
---

# Flashcards: 212.2 - Servidores Ftp

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd.conf confina a todos los usuarios locales dentro de su directorio home?

</div>
<div class="flashcard-back">

**R:** b) `chroot_local_user=YES`. La directiva `chroot_local_user=YES` hace que vsftpd ejecute un chroot para cada usuario local, confinándolo a su directorio home sin posibilidad de navegar al resto del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre FTPS y SFTP?

</div>
<div class="flashcard-back">

**R:** b) FTPS es FTP sobre TLS/SSL, SFTP es un subsistema de SSH. FTPS añade una capa de cifrado TLS/SSL al protocolo FTP tradicional (puerto 21 o 990), mientras que SFTP es un protocolo completamente diferente que funciona como subsistema de SSH (puerto 22) y no tiene relación con FTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-003">
<div class="flashcard-front">

**P:** En el modo FTP pasivo, ¿quién inicia la conexión de datos?

</div>
<div class="flashcard-back">

**R:** c) El cliente hacia un puerto indicado por el servidor. En modo pasivo (PASV), el servidor informa al cliente de un puerto alto donde escuchará, y el cliente inicia la conexión de datos hacia ese puerto. Esto facilita el funcionamiento a través de firewalls y NAT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué archivo del sistema impide por defecto que el usuario root acceda por FTP?

</div>
<div class="flashcard-back">

**R:** c) /etc/ftpusers. El archivo `/etc/ftpusers` contiene una lista de usuarios que NO pueden acceder al servicio FTP. Es procesado por el módulo PAM `pam_listfile` y típicamente incluye root, daemon, bin y otros usuarios del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-005">
<div class="flashcard-front">

**P:** Si en vsftpd se configura `chroot_local_user=YES` y `chroot_list_enable=YES`, ¿qué ocurre con los usuarios listados en el archivo `chroot_list_file`?

</div>
<div class="flashcard-back">

**R:** c) No quedan confinados (son la excepción). Cuando `chroot_local_user=YES` está activo, todos los usuarios quedan confinados. Si además `chroot_list_enable=YES`, los usuarios en la lista son la excepción y NO quedan confinados. La lógica de la lista se invierte respecto a cuando `chroot_local_user=NO`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué directivas de vsftpd configuran el rango de puertos para el modo pasivo?

</div>
<div class="flashcard-back">

**R:** b) `pasv_min_port` y `pasv_max_port`. Las directivas `pasv_min_port` y `pasv_max_port` definen el rango de puertos que vsftpd utilizará para las conexiones de datos en modo pasivo. Es necesario abrir este rango de puertos en el firewall.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué directiva de ProFTPD es equivalente a `chroot_local_user=YES` de vsftpd?

</div>
<div class="flashcard-back">

**R:** b) `DefaultRoot ~`. En ProFTPD, la directiva `DefaultRoot ~` confina a cada usuario dentro de su directorio home, funcionando de manera equivalente a `chroot_local_user=YES` en vsftpd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-008">
<div class="flashcard-front">

**P:** Un administrador quiere que solo los usuarios listados en `/etc/vsftpd.userlist` puedan conectarse por FTP. ¿Qué configuración necesita?

</div>
<div class="flashcard-back">

**R:** b) `userlist_enable=YES` y `userlist_deny=NO`. Con `userlist_enable=YES` se activa el control por lista. Cuando `userlist_deny=NO`, la lista funciona como lista blanca: solo los usuarios que aparecen en ella tienen permitido el acceso. Con `userlist_deny=YES` (valor por defecto), la lista actúa como lista negra.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando de Pure-FTPd se usa para regenerar la base de datos de usuarios virtuales después de realizar cambios?

</div>
<div class="flashcard-back">

**R:** c) `pure-pw mkdb`. Después de añadir, eliminar o modificar usuarios virtuales con `pure-pw`, es necesario ejecutar `pure-pw mkdb` para regenerar el archivo de base de datos binario (`pureftpd.pdb`) que utiliza Pure-FTPd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd.conf fuerza a que las credenciales de los usuarios locales se transmitan cifradas mediante TLS?

</div>
<div class="flashcard-back">

**R:** b) `force_local_logins_ssl=YES`. Aunque `ssl_enable=YES` habilita el soporte TLS, no obliga su uso. La directiva `force_local_logins_ssl=YES` fuerza a que la autenticación de usuarios locales se realice obligatoriamente sobre una conexión cifrada con TLS. Complementariamente, `force_local_data_ssl=YES` fuerza el cifrado de los datos transferidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-011">
<div class="flashcard-front">

**P:** En el modo FTP activo, ¿desde qué puerto del servidor se inicia la conexión de datos hacia el cliente?

</div>
<div class="flashcard-back">

**R:** b) Puerto 20. En el modo activo de FTP, el servidor inicia la conexión de datos desde su puerto 20 hacia el puerto indicado por el cliente mediante el comando `PORT`. Este comportamiento es problemático porque los firewalls del cliente suelen bloquear conexiones entrantes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd.conf establece la máscara de permisos por defecto para los archivos subidos por usuarios locales?

</div>
<div class="flashcard-back">

**R:** b) local_umask=022. La directiva `local_umask=022` en vsftpd.conf establece la máscara de permisos (umask) para los archivos creados por usuarios locales. Con umask 022, los archivos se crean con permisos 644 (lectura para todos, escritura solo para el propietario).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd controla la velocidad máxima de transferencia para usuarios anónimos?

</div>
<div class="flashcard-back">

**R:** b) anon_max_rate=50000. La directiva `anon_max_rate` limita la velocidad de transferencia de datos para usuarios anónimos, expresada en bytes por segundo. En este ejemplo, se limita a aproximadamente 50 KB/s. Esto permite evitar que usuarios anónimos consuman todo el ancho de banda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué puerto utiliza FTPS implícito por defecto?

</div>
<div class="flashcard-back">

**R:** c) 990. FTPS implícito utiliza el puerto 990 por defecto, donde la conexión TLS se establece inmediatamente sin negociación previa. FTPS explícito utiliza el puerto 21 estándar y el cliente solicita el cifrado mediante el comando AUTH TLS antes de la autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-015">
<div class="flashcard-front">

**P:** En ProFTPD, ¿qué directiva configura el tipo de ejecución del servidor (standalone o inetd)?

</div>
<div class="flashcard-back">

**R:** b) ServerType. La directiva `ServerType` en ProFTPD define cómo se ejecuta el servidor: `standalone` para funcionar como demonio independiente, o `inetd` para ser lanzado bajo demanda por inetd/xinetd. El modo standalone es el más común en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué opción de línea de comandos de Pure-FTPd deshabilita el acceso anónimo al servidor?

</div>
<div class="flashcard-back">

**R:** b) -E. La opción `-E` de Pure-FTPd deshabilita completamente el acceso anónimo al servidor FTP. Otras opciones relevantes son `-B` (ejecutar como demonio), `-C` (máximo de conexiones por IP) y `-l` (método de autenticación).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd.conf limita el número máximo de conexiones simultáneas por dirección IP?

</div>
<div class="flashcard-back">

**R:** b) max_per_ip=5. La directiva `max_per_ip` limita las conexiones simultáneas desde una misma dirección IP, previniendo que un solo usuario acapare los recursos del servidor. La directiva `max_clients` limita el total de conexiones simultáneas al servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd debe activarse para que los usuarios locales puedan subir archivos al servidor?

</div>
<div class="flashcard-back">

**R:** b) write_enable=YES. La directiva `write_enable=YES` permite operaciones de escritura en el servidor FTP, incluyendo subida de archivos, creación de directorios y eliminación. Sin esta directiva, el servidor opera en modo de solo lectura para todos los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd establece el directorio raíz para las conexiones anónimas?

</div>
<div class="flashcard-back">

**R:** b) anon_root=/srv/ftp. La directiva `anon_root=/srv/ftp` especifica el directorio raíz al que acceden los usuarios anónimos al conectarse por FTP. Este directorio actúa como raíz del sistema de archivos visible para las conexiones anónimas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd.conf permite la escritura dentro del directorio chroot cuando `chroot_local_user=YES` está activo?

</div>
<div class="flashcard-back">

**R:** b) allow_writeable_chroot=YES. A partir de vsftpd 3.0, si el directorio chroot del usuario tiene permisos de escritura, vsftpd rechaza la conexión por seguridad. La directiva `allow_writeable_chroot=YES` permite explícitamente esta configuración, necesaria cuando los usuarios deben escribir en su directorio home.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando de Pure-FTPd añade un usuario virtual llamado "usuario1" con UID del usuario del sistema "ftpuser"?

</div>
<div class="flashcard-back">

**R:** pure-pw useradd usuario1 -u ftpuser -d /home/ftp/usuario1. El comando `pure-pw useradd` crea un usuario virtual en Pure-FTPd. La opción `-u` especifica el usuario del sistema bajo el cual se ejecutarán las operaciones de archivos, y `-d` define el directorio home del usuario virtual. Después se debe ejecutar `pure-pw mkdb` para actualizar la base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué directiva de vsftpd.conf configura la dirección IP pública del servidor para conexiones pasivas detrás de NAT?

</div>
<div class="flashcard-back">

**R:** pasv_address. La directiva `pasv_address` en vsftpd.conf especifica la dirección IP que el servidor comunica a los clientes en las respuestas PASV. Es esencial cuando el servidor está detrás de NAT, ya que los clientes necesitan conocer la IP pública para establecer la conexión de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando regenera la base de datos binaria de usuarios virtuales de Pure-FTPd después de realizar cambios?

</div>
<div class="flashcard-back">

**R:** pure-pw mkdb. El comando `pure-pw mkdb` compila los datos de usuarios virtuales en el archivo binario `pureftpd.pdb` que Pure-FTPd consulta para la autenticación. Es necesario ejecutarlo después de cada cambio realizado con `pure-pw useradd`, `pure-pw usermod` o `pure-pw userdel`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-024">
<div class="flashcard-front">

**P:** ¿Cuál es el archivo de configuración principal de vsftpd?

</div>
<div class="flashcard-back">

**R:** /etc/vsftpd.conf. El archivo `/etc/vsftpd.conf` es el archivo de configuración principal de vsftpd (Very Secure FTP Daemon). En él se definen todas las directivas de seguridad, acceso, SSL/TLS y comportamiento del servidor FTP. En algunas distribuciones puede estar en `/etc/vsftpd/vsftpd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-025">
<div class="flashcard-front">

**P:** ¿Cuál es el archivo de configuración principal de ProFTPD?

</div>
<div class="flashcard-back">

**R:** /etc/proftpd/proftpd.conf. El archivo `/etc/proftpd/proftpd.conf` es el archivo de configuración principal de ProFTPD. Utiliza una sintaxis de bloques similar a Apache, con directivas como `<Anonymous>`, `<Directory>` y `<IfModule>` para organizar la configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El modo pasivo es preferido en entornos modernos porque el cliente inicia ambas ...

</div>
<div class="flashcard-back">

**R:** El modo pasivo es preferido en entornos modernos porque el cliente inicia ambas conexiones. Es esencial configurar el rango de puertos pasivos (`pasv_min_port`/`pasv_max_port`) y abrir dichos puertos en el firewall.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: FTPS es FTP con cifrado TLS, mientras que SFTP es un protocolo completamente dif...

</div>
<div class="flashcard-back">

**R:** FTPS es FTP con cifrado TLS, mientras que SFTP es un protocolo completamente diferente que funciona sobre SSH. No son intercambiables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Cuando `chroot_local_user=YES` y `chroot_list_enable=YES`, los usuarios en la li...

</div>
<div class="flashcard-back">

**R:** Cuando `chroot_local_user=YES` y `chroot_list_enable=YES`, los usuarios en la lista son la **excepción** y NO quedan confinados. La lógica se invierte.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: ProFTPD usa la directiva `DefaultRoot ~` para confinar usuarios, equivalente a `...

</div>
<div class="flashcard-back">

**R:** ProFTPD usa la directiva `DefaultRoot ~` para confinar usuarios, equivalente a `chroot_local_user=YES` en vsftpd. Su sintaxis de configuración recuerda a la de Apache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introducción a FTP?

</div>
<div class="flashcard-back">

**R:** El protocolo FTP (File Transfer Protocol) permite la transferencia de archivos entre sistemas en red. Opera sobre TCP y utiliza dos conexiones separadas: una de **control** (puerto 21) y una de **datos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son FTPS vs SFTP?

</div>
<div class="flashcard-back">

**R:** | Característica | FTPS | SFTP |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son Pure-FTPd?

</div>
<div class="flashcard-back">

**R:** Pure-FTPd es un servidor FTP alternativo centrado en la seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son ProFTPD?

</div>
<div class="flashcard-back">

**R:** ProFTPD ofrece una configuración similar a Apache con directivas en bloques.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.2">
</div>

<div class="flashcard" data-id="212.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Restricciones y buenas prácticas?

</div>
<div class="flashcard-back">

**R:** - **Deshabilitar FTP anónimo** salvo que sea estrictamente necesario

</div>
</div>

---

