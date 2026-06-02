---
title: "212.2 - Servidores FTP: Ejercicios"
tags: [lpic-2, examen-202, tema-212, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "212"
subtema: "212.2"
---

# 212.2 - Servidores FTP: Ejercicios

### Pregunta 1

¿Qué directiva de vsftpd.conf confina a todos los usuarios locales dentro de su directorio home?

a) `jail_enable=YES`
b) `chroot_local_user=YES`
c) `restrict_home=YES`
d) `user_home_lock=YES`

<details>
<summary>Respuesta</summary>

**b) `chroot_local_user=YES`**

La directiva `chroot_local_user=YES` hace que vsftpd ejecute un chroot para cada usuario local, confinándolo a su directorio home sin posibilidad de navegar al resto del sistema de archivos.
</details>

---

### Pregunta 2

¿Cuál es la diferencia principal entre FTPS y SFTP?

a) FTPS usa el puerto 22 y SFTP el puerto 21
b) FTPS es FTP sobre TLS/SSL, SFTP es un subsistema de SSH
c) SFTP es más lento que FTPS
d) FTPS no requiere certificados

<details>
<summary>Respuesta</summary>

**b) FTPS es FTP sobre TLS/SSL, SFTP es un subsistema de SSH**

FTPS añade una capa de cifrado TLS/SSL al protocolo FTP tradicional (puerto 21 o 990), mientras que SFTP es un protocolo completamente diferente que funciona como subsistema de SSH (puerto 22) y no tiene relación con FTP.
</details>

---

### Pregunta 3

En el modo FTP pasivo, ¿quién inicia la conexión de datos?

a) El servidor desde el puerto 20
b) El servidor desde un puerto aleatorio
c) El cliente hacia un puerto indicado por el servidor
d) El firewall intermedio

<details>
<summary>Respuesta</summary>

**c) El cliente hacia un puerto indicado por el servidor**

En modo pasivo (PASV), el servidor informa al cliente de un puerto alto donde escuchará, y el cliente inicia la conexión de datos hacia ese puerto. Esto facilita el funcionamiento a través de firewalls y NAT.
</details>

---

### Pregunta 4

¿Qué archivo del sistema impide por defecto que el usuario root acceda por FTP?

a) /etc/vsftpd.conf
b) /etc/pam.d/vsftpd
c) /etc/ftpusers
d) /etc/ssh/sshd_config

<details>
<summary>Respuesta</summary>

**c) /etc/ftpusers**

El archivo `/etc/ftpusers` contiene una lista de usuarios que NO pueden acceder al servicio FTP. Es procesado por el módulo PAM `pam_listfile` y típicamente incluye root, daemon, bin y otros usuarios del sistema.
</details>

---

### Pregunta 5

Si en vsftpd se configura `chroot_local_user=YES` y `chroot_list_enable=YES`, ¿qué ocurre con los usuarios listados en el archivo `chroot_list_file`?

a) Quedan doblemente confinados
b) Son los únicos que quedan confinados
c) No quedan confinados (son la excepción)
d) Se les deniega el acceso FTP

<details>
<summary>Respuesta</summary>

**c) No quedan confinados (son la excepción)**

Cuando `chroot_local_user=YES` está activo, todos los usuarios quedan confinados. Si además `chroot_list_enable=YES`, los usuarios en la lista son la excepción y NO quedan confinados. La lógica de la lista se invierte respecto a cuando `chroot_local_user=NO`.
</details>

---

### Pregunta 6

¿Qué directivas de vsftpd configuran el rango de puertos para el modo pasivo?

a) `passive_port_start` y `passive_port_end`
b) `pasv_min_port` y `pasv_max_port`
c) `data_port_range`
d) `ftp_data_port` y `ftp_data_port_max`

<details>
<summary>Respuesta</summary>

**b) `pasv_min_port` y `pasv_max_port`**

Las directivas `pasv_min_port` y `pasv_max_port` definen el rango de puertos que vsftpd utilizará para las conexiones de datos en modo pasivo. Es necesario abrir este rango de puertos en el firewall.
</details>

---

### Pregunta 7

¿Qué directiva de ProFTPD es equivalente a `chroot_local_user=YES` de vsftpd?

a) `ChrootHome on`
b) `DefaultRoot ~`
c) `RootLogin off`
d) `UserHome /`

<details>
<summary>Respuesta</summary>

**b) `DefaultRoot ~`**

En ProFTPD, la directiva `DefaultRoot ~` confina a cada usuario dentro de su directorio home, funcionando de manera equivalente a `chroot_local_user=YES` en vsftpd.
</details>

---

### Pregunta 8

Un administrador quiere que solo los usuarios listados en `/etc/vsftpd.userlist` puedan conectarse por FTP. ¿Qué configuración necesita?

a) `userlist_enable=YES` y `userlist_deny=YES`
b) `userlist_enable=YES` y `userlist_deny=NO`
c) `userlist_enable=NO` y `allow_list=YES`
d) `user_whitelist=/etc/vsftpd.userlist`

<details>
<summary>Respuesta</summary>

**b) `userlist_enable=YES` y `userlist_deny=NO`**

Con `userlist_enable=YES` se activa el control por lista. Cuando `userlist_deny=NO`, la lista funciona como lista blanca: solo los usuarios que aparecen en ella tienen permitido el acceso. Con `userlist_deny=YES` (valor por defecto), la lista actúa como lista negra.
</details>

---

### Pregunta 9

¿Qué comando de Pure-FTPd se usa para regenerar la base de datos de usuarios virtuales después de realizar cambios?

a) `pure-pw rebuild`
b) `pure-pw update`
c) `pure-pw mkdb`
d) `pure-ftpd --rebuild-db`

<details>
<summary>Respuesta</summary>

**c) `pure-pw mkdb`**

Después de añadir, eliminar o modificar usuarios virtuales con `pure-pw`, es necesario ejecutar `pure-pw mkdb` para regenerar el archivo de base de datos binario (`pureftpd.pdb`) que utiliza Pure-FTPd.
</details>

---

### Pregunta 10

¿Qué directiva de vsftpd.conf fuerza a que las credenciales de los usuarios locales se transmitan cifradas mediante TLS?

a) `ssl_enable=YES`
b) `force_local_logins_ssl=YES`
c) `require_ssl_reuse=YES`
d) `encrypt_passwords=YES`

<details>
<summary>Respuesta</summary>

**b) `force_local_logins_ssl=YES`**

Aunque `ssl_enable=YES` habilita el soporte TLS, no obliga su uso. La directiva `force_local_logins_ssl=YES` fuerza a que la autenticación de usuarios locales se realice obligatoriamente sobre una conexión cifrada con TLS. Complementariamente, `force_local_data_ssl=YES` fuerza el cifrado de los datos transferidos.
</details>

---

### Pregunta 11

En el modo FTP activo, ¿desde qué puerto del servidor se inicia la conexión de datos hacia el cliente?

a) Puerto 21
b) Puerto 20
c) Un puerto aleatorio alto
d) El mismo puerto que el canal de control

<details>
<summary>Respuesta</summary>

**b) Puerto 20**

En el modo activo de FTP, el servidor inicia la conexión de datos desde su puerto 20 hacia el puerto indicado por el cliente mediante el comando `PORT`. Este comportamiento es problemático porque los firewalls del cliente suelen bloquear conexiones entrantes.
</details>

---

### Pregunta 12

¿Qué directiva de vsftpd.conf establece la máscara de permisos por defecto para los archivos subidos por usuarios locales?

a) file_permissions=022
b) local_umask=022
c) upload_mask=022
d) default_perms=022

<details>
<summary>Respuesta</summary>

**b) local_umask=022**

La directiva `local_umask=022` en vsftpd.conf establece la máscara de permisos (umask) para los archivos creados por usuarios locales. Con umask 022, los archivos se crean con permisos 644 (lectura para todos, escritura solo para el propietario).
</details>

---

### Pregunta 13

¿Qué directiva de vsftpd controla la velocidad máxima de transferencia para usuarios anónimos?

a) max_bandwidth=50000
b) anon_max_rate=50000
c) transfer_limit=50000
d) anon_speed_limit=50000

<details>
<summary>Respuesta</summary>

**b) anon_max_rate=50000**

La directiva `anon_max_rate` limita la velocidad de transferencia de datos para usuarios anónimos, expresada en bytes por segundo. En este ejemplo, se limita a aproximadamente 50 KB/s. Esto permite evitar que usuarios anónimos consuman todo el ancho de banda.
</details>

---

### Pregunta 14

¿Qué puerto utiliza FTPS implícito por defecto?

a) 21
b) 22
c) 990
d) 443

<details>
<summary>Respuesta</summary>

**c) 990**

FTPS implícito utiliza el puerto 990 por defecto, donde la conexión TLS se establece inmediatamente sin negociación previa. FTPS explícito utiliza el puerto 21 estándar y el cliente solicita el cifrado mediante el comando AUTH TLS antes de la autenticación.
</details>

---

### Pregunta 15

En ProFTPD, ¿qué directiva configura el tipo de ejecución del servidor (standalone o inetd)?

a) RunMode
b) ServerType
c) DaemonMode
d) ExecutionType

<details>
<summary>Respuesta</summary>

**b) ServerType**

La directiva `ServerType` en ProFTPD define cómo se ejecuta el servidor: `standalone` para funcionar como demonio independiente, o `inetd` para ser lanzado bajo demanda por inetd/xinetd. El modo standalone es el más común en producción.
</details>

---

### Pregunta 16

¿Qué opción de línea de comandos de Pure-FTPd deshabilita el acceso anónimo al servidor?

a) -A
b) -E
c) -N
d) -D

<details>
<summary>Respuesta</summary>

**b) -E**

La opción `-E` de Pure-FTPd deshabilita completamente el acceso anónimo al servidor FTP. Otras opciones relevantes son `-B` (ejecutar como demonio), `-C` (máximo de conexiones por IP) y `-l` (método de autenticación).
</details>

---

### Pregunta 17

¿Qué directiva de vsftpd.conf limita el número máximo de conexiones simultáneas por dirección IP?

a) max_clients=5
b) max_per_ip=5
c) ip_connection_limit=5
d) per_ip_max=5

<details>
<summary>Respuesta</summary>

**b) max_per_ip=5**

La directiva `max_per_ip` limita las conexiones simultáneas desde una misma dirección IP, previniendo que un solo usuario acapare los recursos del servidor. La directiva `max_clients` limita el total de conexiones simultáneas al servidor.
</details>

---

### Pregunta 18

¿Qué directiva de vsftpd debe activarse para que los usuarios locales puedan subir archivos al servidor?

a) upload_enable=YES
b) write_enable=YES
c) local_write=YES
d) allow_upload=YES

<details>
<summary>Respuesta</summary>

**b) write_enable=YES**

La directiva `write_enable=YES` permite operaciones de escritura en el servidor FTP, incluyendo subida de archivos, creación de directorios y eliminación. Sin esta directiva, el servidor opera en modo de solo lectura para todos los usuarios.
</details>

---

### Pregunta 19

¿Qué directiva de vsftpd establece el directorio raíz para las conexiones anónimas?

a) ftp_home=/srv/ftp
b) anon_root=/srv/ftp
c) anonymous_home=/srv/ftp
d) anon_dir=/srv/ftp

<details>
<summary>Respuesta</summary>

**b) anon_root=/srv/ftp**

La directiva `anon_root=/srv/ftp` especifica el directorio raíz al que acceden los usuarios anónimos al conectarse por FTP. Este directorio actúa como raíz del sistema de archivos visible para las conexiones anónimas.
</details>

---

### Pregunta 20

¿Qué directiva de vsftpd.conf permite la escritura dentro del directorio chroot cuando `chroot_local_user=YES` está activo?

a) writable_chroot=YES
b) allow_writeable_chroot=YES
c) chroot_writable=YES
d) enable_chroot_write=YES

<details>
<summary>Respuesta</summary>

**b) allow_writeable_chroot=YES**

A partir de vsftpd 3.0, si el directorio chroot del usuario tiene permisos de escritura, vsftpd rechaza la conexión por seguridad. La directiva `allow_writeable_chroot=YES` permite explícitamente esta configuración, necesaria cuando los usuarios deben escribir en su directorio home.
</details>

---

### Pregunta 21

¿Qué comando de Pure-FTPd añade un usuario virtual llamado "usuario1" con UID del usuario del sistema "ftpuser"?

<input type="text" class="fill-blank" data-answer="pure-pw useradd usuario1 -u ftpuser -d /home/ftp/usuario1" data-alt="pure-pw useradd" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**pure-pw useradd usuario1 -u ftpuser -d /home/ftp/usuario1**

El comando `pure-pw useradd` crea un usuario virtual en Pure-FTPd. La opción `-u` especifica el usuario del sistema bajo el cual se ejecutarán las operaciones de archivos, y `-d` define el directorio home del usuario virtual. Después se debe ejecutar `pure-pw mkdb` para actualizar la base de datos.
</details>

---

### Pregunta 22

¿Qué directiva de vsftpd.conf configura la dirección IP pública del servidor para conexiones pasivas detrás de NAT?

<input type="text" class="fill-blank" data-answer="pasv_address" data-alt="pasv_address=203.0.113.10" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**pasv_address**

La directiva `pasv_address` en vsftpd.conf especifica la dirección IP que el servidor comunica a los clientes en las respuestas PASV. Es esencial cuando el servidor está detrás de NAT, ya que los clientes necesitan conocer la IP pública para establecer la conexión de datos.
</details>

---

### Pregunta 23

¿Qué comando regenera la base de datos binaria de usuarios virtuales de Pure-FTPd después de realizar cambios?

<input type="text" class="fill-blank" data-answer="pure-pw mkdb" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**pure-pw mkdb**

El comando `pure-pw mkdb` compila los datos de usuarios virtuales en el archivo binario `pureftpd.pdb` que Pure-FTPd consulta para la autenticación. Es necesario ejecutarlo después de cada cambio realizado con `pure-pw useradd`, `pure-pw usermod` o `pure-pw userdel`.
</details>

---

### Pregunta 24

¿Cuál es el archivo de configuración principal de vsftpd?

<input type="text" class="fill-blank" data-answer="/etc/vsftpd.conf" data-alt="vsftpd.conf" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**/etc/vsftpd.conf**

El archivo `/etc/vsftpd.conf` es el archivo de configuración principal de vsftpd (Very Secure FTP Daemon). En él se definen todas las directivas de seguridad, acceso, SSL/TLS y comportamiento del servidor FTP. En algunas distribuciones puede estar en `/etc/vsftpd/vsftpd.conf`.
</details>

---

### Pregunta 25

¿Cuál es el archivo de configuración principal de ProFTPD?

<input type="text" class="fill-blank" data-answer="/etc/proftpd/proftpd.conf" data-alt="proftpd.conf" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**/etc/proftpd/proftpd.conf**

El archivo `/etc/proftpd/proftpd.conf` es el archivo de configuración principal de ProFTPD. Utiliza una sintaxis de bloques similar a Apache, con directivas como `<Anonymous>`, `<Directory>` y `<IfModule>` para organizar la configuración.
</details>
