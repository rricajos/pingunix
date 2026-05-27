---
title: "Simulacro Examen 202"
tags:
  - lpic-2
  - examen-202
  - simulacro
tipo: simulacro
certificacion: lpic-2
examen: "202"
---

# Simulacro - Examen 202

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="202" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="212.5" data-correct="b">

### Pregunta 1 (Subtema 212.5)

¿Qué directiva en la configuración del cliente OpenVPN verifica que el certificado presentado por el servidor es realmente de tipo servidor?

- [ ] a) `verify-server-cert`
- [ ] b) `remote-cert-tls server`
- [ ] c) `tls-verify server`
- [ ] d) `check-cert-type server`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `remote-cert-tls server`**

La directiva `remote-cert-tls server` verifica que el certificado presentado por el servidor durante el handshake TLS tenga el atributo de uso extendido de clave (EKU) de tipo servidor. Esto previene que un cliente comprometido se haga pasar por servidor.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="212.1" data-correct="b">

### Pregunta 2 (Subtema 212.1)

Un administrador ejecuta `iptables -I INPUT 1 -s 10.0.0.50 -j ACCEPT`. ¿Qué efecto tiene este comando?

- [ ] a) Añade la regla al final de la cadena INPUT
- [ ] b) Inserta la regla en la primera posición de la cadena INPUT
- [ ] c) Reemplaza la primera regla de la cadena INPUT
- [ ] d) Crea una nueva cadena llamada INPUT con esta regla

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Inserta la regla en la primera posición de la cadena INPUT**

La opción `-I` (insert) con el número 1 coloca la regla en la primera posición de la cadena, con lo cual será evaluada antes que cualquier otra regla existente. Esto es diferente de `-A` (append), que añade al final.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="208.1" data-correct="c">

### Pregunta 3 (Subtema 208.1)

¿Qué valor de `AllowOverride` proporciona el mejor rendimiento al deshabilitar completamente los archivos `.htaccess`?

- [ ] a) AllowOverride All
- [ ] b) AllowOverride Off
- [ ] c) AllowOverride None
- [ ] d) AllowOverride Disabled

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) AllowOverride None**

Cuando `AllowOverride` se establece en `None`, Apache no busca archivos `.htaccess` en los directorios, lo que mejora el rendimiento al evitar lecturas innecesarias del sistema de archivos en cada petición.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="209.2" data-correct="c">

### Pregunta 4 (Subtema 209.2)

¿Qué comando muestra los directorios exportados por un servidor NFS remoto?

- [ ] a) exportfs -v servidor
- [ ] b) nfsstat -e servidor
- [ ] c) showmount -e servidor
- [ ] d) rpcinfo -e servidor

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) showmount -e servidor**

El comando `showmount -e` (exports) consulta a un servidor NFS y muestra la lista de directorios exportados junto con los clientes que tienen acceso. Con la opción `-a` muestra los montajes activos y con `-d` muestra solo los directorios montados.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="208.2" data-correct="b">

### Pregunta 5 (Subtema 208.2)

¿Qué comando de OpenSSL genera una solicitud de firma de certificado (CSR) a partir de una clave privada existente?

- [ ] a) openssl csr -new -key servidor.key -out servidor.csr
- [ ] b) openssl req -new -key servidor.key -out servidor.csr
- [ ] c) openssl x509 -req -key servidor.key -out servidor.csr
- [ ] d) openssl genrsa -csr -key servidor.key -out servidor.csr

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) openssl req -new -key servidor.key -out servidor.csr**

El subcomando `req` de OpenSSL se utiliza para crear y procesar solicitudes de certificado. La opción `-new` indica que se genera una nueva solicitud, y `-key` especifica la clave privada existente a utilizar.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="212.3" data-correct="b">

### Pregunta 6 (Subtema 212.3)

¿Qué opción de la línea de comandos ssh permite saltar a través de un servidor intermedio (bastion host) para llegar al destino final?

- [ ] a) `-B bastion`
- [ ] b) `-J bastion`
- [ ] c) `-P bastion`
- [ ] d) `-G bastion`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `-J bastion`**

La opción `-J` (ProxyJump) permite especificar uno o más hosts intermedios para llegar al destino. Es equivalente a la directiva `ProxyJump` en ssh_config. Se pueden encadenar múltiples saltos: `ssh -J bastion1,bastion2 usuario@destino`.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="208.4" data-correct="b">

### Pregunta 7 (Subtema 208.4)

En un bloque `upstream`, ¿qué significa marcar un servidor con la opción `backup`?

- [ ] a) El servidor almacena una copia de seguridad de los datos
- [ ] b) El servidor solo recibe peticiones cuando todos los demás servidores no están disponibles
- [ ] c) El servidor tiene prioridad sobre los demás
- [ ] d) El servidor se utiliza para replicar la configuración

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) El servidor solo recibe peticiones cuando todos los demás servidores no están disponibles**

Un servidor marcado con `backup` en un bloque `upstream` actúa como reserva. Solo recibe tráfico cuando todos los servidores principales (no marcados como `backup` ni `down`) están inactivos o no responden. Es útil para implementar alta disponibilidad.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="212.2" data-correct="c">

### Pregunta 8 (Subtema 212.2)

¿Qué comando de Pure-FTPd se usa para regenerar la base de datos de usuarios virtuales después de realizar cambios?

- [ ] a) `pure-pw rebuild`
- [ ] b) `pure-pw update`
- [ ] c) `pure-pw mkdb`
- [ ] d) `pure-ftpd --rebuild-db`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `pure-pw mkdb`**

Después de añadir, eliminar o modificar usuarios virtuales con `pure-pw`, es necesario ejecutar `pure-pw mkdb` para regenerar el archivo de base de datos binario (`pureftpd.pdb`) que utiliza Pure-FTPd.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="208.2" data-correct="c">

### Pregunta 9 (Subtema 208.2)

¿Qué archivo de Let's Encrypt debe usarse en la directiva `SSLCertificateFile` de Apache?

- [ ] a) cert.pem
- [ ] b) chain.pem
- [ ] c) fullchain.pem
- [ ] d) privkey.pem

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) fullchain.pem**

El archivo `fullchain.pem` contiene el certificado del servidor junto con los certificados intermedios de la CA. Desde Apache 2.4.8, se recomienda usar este archivo en `SSLCertificateFile` en lugar de especificar los certificados intermedios por separado.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="208.1" data-correct="b">

### Pregunta 10 (Subtema 208.1)

¿Qué comando se utiliza en Debian/Ubuntu para habilitar el módulo `mod_rewrite`?

- [ ] a) apache2ctl enable rewrite
- [ ] b) a2enmod rewrite
- [ ] c) httpd -enable rewrite
- [ ] d) modprobe rewrite

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) a2enmod rewrite**

El comando `a2enmod` se utiliza en distribuciones Debian/Ubuntu para habilitar módulos de Apache. Crea un enlace simbólico desde `mods-available` hacia `mods-enabled`. Su opuesto es `a2dismod`.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="212.5" data-correct="b">

### Pregunta 11 (Subtema 212.5)

Un administrador quiere que todo el tráfico de los clientes VPN se enrute a través del servidor OpenVPN. ¿Qué directiva debe añadir al archivo server.conf?

- [ ] a) `push "default-route"`
- [ ] b) `push "redirect-gateway def1 bypass-dhcp"`
- [ ] c) `route-all-traffic yes`
- [ ] d) `push "route 0.0.0.0 0.0.0.0"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `push "redirect-gateway def1 bypass-dhcp"`**

La directiva `push "redirect-gateway def1 bypass-dhcp"` informa a los clientes que deben redirigir todo su tráfico de Internet a través del túnel VPN. `def1` modifica la tabla de rutas del cliente sin eliminar la ruta por defecto original, y `bypass-dhcp` excluye el tráfico DHCP local.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="212.3" data-correct="c">

### Pregunta 12 (Subtema 212.3)

¿Qué hace el comando `ssh -D 1080 usuario@servidor`?

- [ ] a) Crea un túnel directo al puerto 1080 del servidor
- [ ] b) Descarga archivos del servidor al puerto local 1080
- [ ] c) Crea un proxy SOCKS dinámico en el puerto local 1080
- [ ] d) Establece el tiempo de desconexión a 1080 segundos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Crea un proxy SOCKS dinámico en el puerto local 1080**

La opción `-D` crea un proxy SOCKS5 en el puerto local especificado. Todo el tráfico dirigido a este proxy se cifra y se envía a través de la conexión SSH, donde el servidor lo reenvía al destino final. Es útil para navegar de forma segura a través de un servidor remoto.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="208.2" data-correct="c">

### Pregunta 13 (Subtema 208.2)

¿Qué comando de Certbot simula el proceso de renovación de certificados sin aplicar cambios reales?

- [ ] a) certbot renew --test
- [ ] b) certbot renew --simulate
- [ ] c) certbot renew --dry-run
- [ ] d) certbot test-renew

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) certbot renew --dry-run**

La opción `--dry-run` ejecuta el proceso de renovación de forma simulada, verificando que la configuración y la comunicación con los servidores de Let's Encrypt funcionan correctamente, sin modificar los certificados reales.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="208.3" data-correct="c">

### Pregunta 14 (Subtema 208.3)

¿Cuál es el puerto predeterminado en el que Squid escucha las conexiones de los clientes?

- [ ] a) 8080
- [ ] b) 80
- [ ] c) 3128
- [ ] d) 8888

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) 3128**

El puerto predeterminado de Squid es 3128, configurado mediante la directiva `http_port` en `/etc/squid/squid.conf`. Aunque puede cambiarse a cualquier otro puerto, 3128 es el estándar reconocido para proxies Squid.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="209.2" data-correct="b">

### Pregunta 15 (Subtema 209.2)

¿Qué ventaja principal tiene NFSv4 sobre NFSv3 en relación con la configuración de firewalls?

- [ ] a) NFSv4 no requiere autenticación
- [ ] b) NFSv4 utiliza solo el puerto TCP 2049, mientras que NFSv3 necesita múltiples puertos
- [ ] c) NFSv4 utiliza cifrado por defecto
- [ ] d) NFSv4 funciona solo sobre UDP, que es más fácil de filtrar

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) NFSv4 utiliza solo el puerto TCP 2049, mientras que NFSv3 necesita múltiples puertos**

NFSv4 simplifica enormemente la configuración de firewalls al utilizar exclusivamente el puerto TCP 2049. NFSv3 requiere rpcbind (puerto 111) y puertos dinámicos adicionales para mountd, statd y lockd, lo que complica las reglas de firewall.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="209.1" data-correct="c">

### Pregunta 16 (Subtema 209.1)

¿Qué directiva en smb.conf permite que los archivos creados en un recurso compartido tengan permisos específicos?

- [ ] a) file permissions
- [ ] b) new file mode
- [ ] c) create mask
- [ ] d) umask

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) create mask**

La directiva `create mask` (también conocida como `create mode`) define los permisos máximos que se asignan a los archivos nuevos creados en el recurso compartido. Por ejemplo, `create mask = 0664` permite lectura y escritura para el propietario y el grupo, y solo lectura para otros. Para directorios se usa `directory mask`.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="208.3" data-correct="c">

### Pregunta 17 (Subtema 208.3)

¿Qué directiva de Squid especifica la cantidad de memoria RAM que puede utilizarse para almacenar objetos en caché?

- [ ] a) memory_cache
- [ ] b) ram_cache_size
- [ ] c) cache_mem
- [ ] d) maximum_memory

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) cache_mem**

La directiva `cache_mem` especifica la cantidad de memoria RAM que Squid dedica a almacenar los objetos más frecuentemente solicitados. Por ejemplo, `cache_mem 256 MB`. Esto es adicional a la memoria que Squid necesita para su funcionamiento normal.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="212.3" data-correct="c">

### Pregunta 18 (Subtema 212.3)

¿Qué directiva de sshd_config permite el acceso root solo mediante clave pública, bloqueando la autenticación por contraseña?

- [ ] a) `PermitRootLogin yes`
- [ ] b) `PermitRootLogin no`
- [ ] c) `PermitRootLogin prohibit-password`
- [ ] d) `PermitRootLogin publickey-only`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `PermitRootLogin prohibit-password`**

La opción `prohibit-password` (anteriormente `without-password`) permite el login de root únicamente mediante autenticación por clave pública, deshabilitando la autenticación por contraseña y teclado interactivo para el usuario root.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="208.1" data-correct="c">

### Pregunta 19 (Subtema 208.1)

¿Cuál es el archivo de configuración principal de Apache en una distribución basada en Red Hat/CentOS?

- [ ] a) /etc/apache2/apache2.conf
- [ ] b) /etc/httpd/httpd.conf
- [ ] c) /etc/httpd/conf/httpd.conf
- [ ] d) /etc/apache/httpd.conf

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) /etc/httpd/conf/httpd.conf**

En distribuciones basadas en Red Hat/CentOS, el archivo de configuración principal de Apache se encuentra en `/etc/httpd/conf/httpd.conf`. En Debian/Ubuntu, el equivalente es `/etc/apache2/apache2.conf`.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="208.3" data-correct="b">

### Pregunta 20 (Subtema 208.3)

¿Qué código de estado en el log de Squid indica que un objeto fue servido directamente desde la caché?

- [ ] a) TCP_MISS
- [ ] b) TCP_HIT
- [ ] c) TCP_DENIED
- [ ] d) TCP_REFRESH

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) TCP_HIT**

`TCP_HIT` en el `access.log` de Squid indica que el objeto solicitado se encontró en la caché y fue servido al cliente sin necesidad de contactar el servidor origen. `TCP_MISS` indica que el objeto no estaba en caché y tuvo que descargarse.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="212.5" data-correct="b">

### Pregunta 21 (Subtema 212.5)

¿Cuál es la diferencia principal entre las interfaces `tun` y `tap` en OpenVPN?

- [ ] a) `tun` usa TCP y `tap` usa UDP
- [ ] b) `tun` opera en capa 3 (routing) y `tap` en capa 2 (bridging)
- [ ] c) `tun` es más lento pero más seguro que `tap`
- [ ] d) `tun` solo soporta IPv4 y `tap` soporta IPv4 e IPv6

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `tun` opera en capa 3 (routing) y `tap` en capa 2 (bridging)**

La interfaz `tun` crea un túnel de capa 3 (IP) adecuado para routing entre subredes diferentes. La interfaz `tap` emula un dispositivo Ethernet de capa 2, permitiendo bridging y tráfico broadcast. `tun` es más eficiente y el modo recomendado para la mayoría de escenarios.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="209.2" data-correct="b">

### Pregunta 22 (Subtema 209.2)

¿Cuál es la diferencia entre las siguientes entradas en /etc/exports?

- [ ] a) No hay diferencia, ambas son equivalentes
- [ ] b) La línea A da acceso rw a la red 192.168.1.0/24; la línea B da acceso rw a todos los hosts
- [ ] c) La línea A es una sintaxis inválida
- [ ] d) La línea B aplica las opciones solo al primer cliente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) La línea A da acceso rw a la red 192.168.1.0/24; la línea B da acceso rw a todos los hosts**

En `/etc/exports`, el espacio entre el cliente y las opciones es significativo. En la línea A, `192.168.1.0/24(rw)` concede acceso de lectura y escritura a esa red. En la línea B, el espacio hace que se interprete como dos entradas separadas: `192.168.1.0/24` con opciones predeterminadas (ro) y `(rw)` que se aplica a todos los hosts. Este es un error muy común y peligroso.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="212.3" data-correct="c">

### Pregunta 23 (Subtema 212.3)

¿Qué permisos debe tener el archivo de clave privada SSH `~/.ssh/id_ed25519` para que OpenSSH lo acepte?

- [ ] a) 644
- [ ] b) 755
- [ ] c) 600
- [ ] d) 700

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) 600**

Las claves privadas SSH deben tener permisos 600 (lectura y escritura solo para el propietario). OpenSSH rechazará usar una clave privada si tiene permisos demasiado abiertos, mostrando el mensaje "Permissions are too open".

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="208.1" data-correct="c">

### Pregunta 24 (Subtema 208.1)

¿Qué variable del `LogFormat` de Apache representa el código de estado HTTP final de la respuesta?

- [ ] a) %s
- [ ] b) %r
- [ ] c) %>s
- [ ] d) %{status}

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) %>s**

La variable `%>s` representa el código de estado final de la respuesta HTTP. El símbolo `>` indica que se toma el estado final (después de redirecciones internas). Sin el `>`, se tomaría el estado original de la petición.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="208.3" data-correct="b">

### Pregunta 25 (Subtema 208.3)

¿Qué representan las letras MTWHF en una ACL de tipo `time` en Squid?

- [ ] a) Month, Tuesday, Wednesday, Thursday, Friday
- [ ] b) Monday, Tuesday, Wednesday, Thursday, Friday
- [ ] c) Monday, Thursday, Wednesday, Holiday, Friday
- [ ] d) Monday, Tuesday, Week, Holiday, Friday

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Monday, Tuesday, Wednesday, Thursday, Friday**

En las ACLs de tipo `time`, cada día se representa con una letra: S=Sunday, M=Monday, T=Tuesday, W=Wednesday, H=Thursday, F=Friday, A=Saturday. MTWHF corresponde a los días laborales de lunes a viernes.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="212.4" data-correct="b">

### Pregunta 26 (Subtema 212.4)

¿Qué comando de aureport genera un informe de todos los intentos de autenticación registrados por el sistema de auditoría?

- [ ] a) `aureport --login`
- [ ] b) `aureport -au`
- [ ] c) `aureport --auth-report`
- [ ] d) `aureport -p`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `aureport -au`**

El comando `aureport -au` genera un informe de eventos de autenticación. Otras opciones útiles incluyen: `aureport -f` (acceso a archivos), `aureport --failed` (eventos fallidos), `aureport -l` (logins), y `aureport` sin opciones para un resumen general.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="212.2" data-correct="b">

### Pregunta 27 (Subtema 212.2)

¿Qué directiva de ProFTPD es equivalente a `chroot_local_user=YES` de vsftpd?

- [ ] a) `ChrootHome on`
- [ ] b) `DefaultRoot ~`
- [ ] c) `RootLogin off`
- [ ] d) `UserHome /`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `DefaultRoot ~`**

En ProFTPD, la directiva `DefaultRoot ~` confina a cada usuario dentro de su directorio home, funcionando de manera equivalente a `chroot_local_user=YES` en vsftpd.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="209.1" data-correct="a">

### Pregunta 28 (Subtema 209.1)

¿Qué comando se utiliza para listar los recursos compartidos de un servidor SMB remoto?

- [ ] a) smbclient -L //servidor -U usuario
- [ ] b) nmblookup -S servidor
- [ ] c) smbstatus -L //servidor
- [ ] d) net share list //servidor

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) smbclient -L //servidor -U usuario**

El comando `smbclient -L` (list) muestra los recursos compartidos disponibles en un servidor remoto. Se debe especificar el servidor con la notación `//nombre_servidor` y opcionalmente el usuario con `-U`. También muestra información sobre los grupos de trabajo y servidores maestros de la red.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="212.5" data-correct="b">

### Pregunta 29 (Subtema 212.5)

En la configuración de `tls-auth`, ¿qué valor de dirección usa el servidor y cuál el cliente?

- [ ] a) Servidor: 1, Cliente: 0
- [ ] b) Servidor: 0, Cliente: 1
- [ ] c) Ambos usan 0
- [ ] d) No se especifica dirección

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Servidor: 0, Cliente: 1**

Con `tls-auth`, el servidor usa la dirección `0` (`tls-auth ta.key 0`) y el cliente usa la dirección `1` (`tls-auth ta.key 1`). Esto asegura que las firmas HMAC se generen y verifiquen correctamente en cada extremo. Con `tls-crypt`, no se especifica dirección.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="212.4" data-correct="b">

### Pregunta 30 (Subtema 212.4)

En `/etc/security/limits.conf`, ¿qué tipo de límite puede el propio usuario aumentar hasta el valor hard?

- [ ] a) hard
- [ ] b) soft
- [ ] c) max
- [ ] d) default

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) soft**

Los límites `soft` representan el valor actual que aplica al usuario, pero este puede aumentarlo con `ulimit` hasta alcanzar el valor `hard`. Solo root puede aumentar los límites `hard`. El tipo `-` establece ambos valores (soft y hard) simultáneamente.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="212.1" data-correct="b">

### Pregunta 31 (Subtema 212.1)

¿Qué comando de nftables lista todas las reglas activas del sistema?

- [ ] a) `nft show all`
- [ ] b) `nft list ruleset`
- [ ] c) `nft -L`
- [ ] d) `nft rules --list`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `nft list ruleset`**

El comando `nft list ruleset` muestra todas las tablas, cadenas y reglas configuradas actualmente en nftables.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="209.2" data-correct="b">

### Pregunta 32 (Subtema 209.2)

¿Qué servicio es necesario para NFSv3 pero no para NFSv4?

- [ ] a) nfsd
- [ ] b) rpcbind
- [ ] c) idmapd
- [ ] d) nfs-server

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) rpcbind**

`rpcbind` (anteriormente `portmap`) es el servicio que mapea los programas RPC a puertos de red. NFSv3 lo necesita porque utiliza puertos dinámicos para sus servicios auxiliares (mountd, statd, lockd). NFSv4 no lo necesita porque opera exclusivamente en el puerto TCP 2049 con todos los servicios integrados.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="208.2" data-correct="b">

### Pregunta 33 (Subtema 208.2)

¿Cuál es el propósito principal de HSTS (HTTP Strict Transport Security)?

- [ ] a) Cifrar las cookies del navegador
- [ ] b) Indicar al navegador que siempre debe conectarse mediante HTTPS
- [ ] c) Redirigir automáticamente las peticiones HTTP a HTTPS en el servidor
- [ ] d) Verificar la validez del certificado SSL del servidor

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Indicar al navegador que siempre debe conectarse mediante HTTPS**

HSTS es una cabecera HTTP que instruye al navegador a conectarse siempre mediante HTTPS durante el período especificado en `max-age`. A diferencia de una redirección del servidor, HSTS funciona en el lado del cliente, evitando incluso la primera petición HTTP insegura en visitas posteriores.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="212.3" data-correct="b">

### Pregunta 34 (Subtema 212.3)

Un administrador quiere crear usuarios que solo puedan usar SFTP y estén confinados a su directorio home. ¿Qué configuración en sshd_config es correcta?

- [ ] a) `Match Group sftponly` con `ForceCommand /usr/bin/sftp` y `ChrootDirectory /home/%u`
- [ ] b) `Match Group sftponly` con `ForceCommand internal-sftp` y `ChrootDirectory /home/%u`
- [ ] c) `SFTPOnly yes` con `ChrootDirectory /home/%u`
- [ ] d) `Match Group sftponly` con `Shell /bin/sftp`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `Match Group sftponly` con `ForceCommand internal-sftp` y `ChrootDirectory /home/%u`**

`ForceCommand internal-sftp` usa el subsistema SFTP integrado en sshd (necesario con chroot). `ChrootDirectory /home/%u` confina al usuario. El directorio chroot debe ser propiedad de root y no tener permisos de escritura para el grupo u otros.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="208.4" data-correct="b">

### Pregunta 35 (Subtema 208.4)

¿Cuál es el orden correcto de prioridad de los modificadores de `location` en Nginx, de mayor a menor?

- [ ] a) `~` > `^~` > `=` > prefijo normal
- [ ] b) `=` > `^~` > `~`/`~*` > prefijo normal
- [ ] c) `^~` > `=` > `~`/`~*` > prefijo normal
- [ ] d) prefijo normal > `~`/`~*` > `^~` > `=`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `=` > `^~` > `~`/`~*` > prefijo normal**

El orden de prioridad es: coincidencia exacta (`=`) tiene la mayor prioridad, seguida del prefijo preferente (`^~`) que detiene la búsqueda de expresiones regulares, luego las expresiones regulares (`~` sensible y `~*` insensible a mayúsculas) en orden de aparición, y finalmente el prefijo normal con la menor prioridad.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="208.4" data-correct="b">

### Pregunta 36 (Subtema 208.4)

Un administrador quiere configurar Nginx para que sirva archivos estáticos desde `/var/www/static` cuando se accede a la URL `/assets/`. ¿Qué configuración es correcta?

- [ ] a) `location /assets/ { root /var/www/static; }`
- [ ] b) `location /assets/ { alias /var/www/static/; }`
- [ ] c) `location /assets/ { document_root /var/www/static; }`
- [ ] d) `location /assets/ { proxy_pass /var/www/static; }`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `location /assets/ { alias /var/www/static/; }`**

La directiva `alias` reemplaza completamente la parte de la URI que coincide con el `location`. Así, `/assets/imagen.jpg` se sirve desde `/var/www/static/imagen.jpg`. Si se usara `root /var/www/static`, Nginx buscaría en `/var/www/static/assets/imagen.jpg`, añadiendo la URI completa a la ruta, que no es lo deseado en este caso.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="208.4" data-correct="c">

### Pregunta 37 (Subtema 208.4)

¿Qué método de balanceo de carga en Nginx garantiza que las peticiones de un mismo cliente siempre se dirijan al mismo servidor backend?

- [ ] a) round_robin
- [ ] b) least_conn
- [ ] c) ip_hash
- [ ] d) sticky

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) ip_hash**

El método `ip_hash` utiliza la dirección IP del cliente para determinar a qué servidor backend se dirige la petición. Esto garantiza que las peticiones del mismo cliente siempre vayan al mismo servidor, lo que es útil para mantener la persistencia de sesión.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="208.4" data-correct="b">

### Pregunta 38 (Subtema 208.4)

¿Qué comando de Nginx verifica la sintaxis de la configuración sin reiniciar el servicio?

- [ ] a) nginx -c
- [ ] b) nginx -t
- [ ] c) nginx -s check
- [ ] d) nginx --verify

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) nginx -t**

El comando `nginx -t` analiza todos los archivos de configuración y reporta errores de sintaxis sin afectar al servicio en ejecución. Es una práctica recomendada ejecutarlo siempre antes de `nginx -s reload` para evitar que un error de configuración interrumpa el servicio.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="208.2" data-correct="d">

### Pregunta 39 (Subtema 208.2)

¿Cuál de los siguientes protocolos se considera seguro para uso en producción en la actualidad?

- [ ] a) SSLv3
- [ ] b) TLSv1.0
- [ ] c) TLSv1.1
- [ ] d) TLSv1.2

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) TLSv1.2**

TLS 1.2 y TLS 1.3 son las únicas versiones consideradas seguras actualmente. SSLv2, SSLv3, TLS 1.0 y TLS 1.1 están obsoletos y contienen vulnerabilidades conocidas. Deben deshabilitarse en la configuración de Apache.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="208.1" data-correct="c">

### Pregunta 40 (Subtema 208.1)

¿Qué hace el comando `apachectl graceful`?

- [ ] a) Detiene Apache inmediatamente
- [ ] b) Reinicia Apache cortando todas las conexiones activas
- [ ] c) Recarga la configuración sin interrumpir las conexiones existentes
- [ ] d) Verifica la sintaxis del archivo de configuración

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Recarga la configuración sin interrumpir las conexiones existentes**

El comando `apachectl graceful` envía la señal `SIGUSR1` al proceso Apache, lo que provoca que recargue su configuración sin interrumpir las conexiones activas. Los procesos hijo terminan de atender las peticiones actuales antes de releer la configuración.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="212.2" data-correct="b">

### Pregunta 41 (Subtema 212.2)

Un administrador quiere que solo los usuarios listados en `/etc/vsftpd.userlist` puedan conectarse por FTP. ¿Qué configuración necesita?

- [ ] a) `userlist_enable=YES` y `userlist_deny=YES`
- [ ] b) `userlist_enable=YES` y `userlist_deny=NO`
- [ ] c) `userlist_enable=NO` y `allow_list=YES`
- [ ] d) `user_whitelist=/etc/vsftpd.userlist`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `userlist_enable=YES` y `userlist_deny=NO`**

Con `userlist_enable=YES` se activa el control por lista. Cuando `userlist_deny=NO`, la lista funciona como lista blanca: solo los usuarios que aparecen en ella tienen permitido el acceso. Con `userlist_deny=YES` (valor por defecto), la lista actúa como lista negra.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="212.2" data-correct="c">

### Pregunta 42 (Subtema 212.2)

En el modo FTP pasivo, ¿quién inicia la conexión de datos?

- [ ] a) El servidor desde el puerto 20
- [ ] b) El servidor desde un puerto aleatorio
- [ ] c) El cliente hacia un puerto indicado por el servidor
- [ ] d) El firewall intermedio

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El cliente hacia un puerto indicado por el servidor**

En modo pasivo (PASV), el servidor informa al cliente de un puerto alto donde escuchará, y el cliente inicia la conexión de datos hacia ese puerto. Esto facilita el funcionamiento a través de firewalls y NAT.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="212.2" data-correct="c">

### Pregunta 43 (Subtema 212.2)

¿Qué archivo del sistema impide por defecto que el usuario root acceda por FTP?

- [ ] a) /etc/vsftpd.conf
- [ ] b) /etc/pam.d/vsftpd
- [ ] c) /etc/ftpusers
- [ ] d) /etc/ssh/sshd_config

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) /etc/ftpusers**

El archivo `/etc/ftpusers` contiene una lista de usuarios que NO pueden acceder al servicio FTP. Es procesado por el módulo PAM `pam_listfile` y típicamente incluye root, daemon, bin y otros usuarios del sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="212.4" data-correct="c">

### Pregunta 44 (Subtema 212.4)

¿Qué archivo de fail2ban se debe crear o modificar para personalizar la configuración sin que las actualizaciones del paquete sobrescriban los cambios?

- [ ] a) /etc/fail2ban/fail2ban.conf
- [ ] b) /etc/fail2ban/jail.conf
- [ ] c) /etc/fail2ban/jail.local
- [ ] d) /etc/fail2ban/config.local

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) /etc/fail2ban/jail.local**

El archivo `jail.local` sobrescribe los valores de `jail.conf`. Las actualizaciones del paquete fail2ban pueden sobrescribir `jail.conf`, pero nunca tocan `jail.local`. Por eso, las personalizaciones siempre deben hacerse en `jail.local`.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="212.1" data-correct="c">

### Pregunta 45 (Subtema 212.1)

Un administrador necesita redirigir el tráfico entrante en el puerto 443 hacia un servidor interno 10.0.0.5 en el puerto 8443. ¿Qué regla de iptables es correcta?

- [ ] a) `iptables -A FORWARD -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`
- [ ] b) `iptables -t nat -A POSTROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`
- [ ] c) `iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`
- [ ] d) `iptables -t nat -A INPUT -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`**

DNAT (Destination NAT) se configura en la cadena PREROUTING de la tabla nat, ya que la traducción de la dirección de destino debe ocurrir antes de la decisión de enrutamiento.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="212.5" data-correct="b">

### Pregunta 46 (Subtema 212.5)

¿Qué dos pasos adicionales de configuración del sistema son necesarios en el servidor para que los clientes OpenVPN puedan acceder a Internet a través de la VPN?

- [ ] a) Instalar un proxy HTTP y configurar DNS
- [ ] b) Habilitar IP forwarding y configurar NAT/masquerading
- [ ] c) Crear un puente de red (bridge) y habilitar ARP proxy
- [ ] d) Configurar DHCP relay y habilitar multicast

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Habilitar IP forwarding y configurar NAT/masquerading**

Para que los clientes VPN accedan a Internet a través del servidor, se necesitan dos cosas: 1) Habilitar IP forwarding (`net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`) para que el kernel reenvíe paquetes entre interfaces, y 2) configurar NAT con `iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE` para traducir las direcciones de la red VPN.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="208.3" data-correct="c">

### Pregunta 47 (Subtema 208.3)

¿Qué comando debe ejecutarse antes del primer inicio de Squid para crear la estructura de directorios de la caché?

- [ ] a) squid -k reconfigure
- [ ] b) squid -k init
- [ ] c) squid -z
- [ ] d) squid --create-cache

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) squid -z**

El comando `squid -z` crea la estructura de directorios de caché definida en la directiva `cache_dir`. Debe ejecutarse antes del primer inicio del servicio para que Squid pueda almacenar los objetos en caché correctamente.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="208.1" data-correct="c">

### Pregunta 48 (Subtema 208.1)

¿Cuál es el orden correcto de procesamiento de las directivas de contenedor en Apache?

- [ ] a) Location → Directory → Files
- [ ] b) Files → Directory → Location
- [ ] c) Directory → Files → Location
- [ ] d) Location → Files → Directory

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Directory → Files → Location**

El orden de procesamiento en Apache es: primero `<Directory>` (y `.htaccess`), luego `<DirectoryMatch>`, después `<Files>` (y `<FilesMatch>`), y finalmente `<Location>` (y `<LocationMatch>`). Las directivas procesadas después pueden sobreescribir las anteriores.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="208.3" data-correct="c">

### Pregunta 49 (Subtema 208.3)

¿Qué protocolo utiliza Squid para comunicarse con otros proxies en una jerarquía de caché y en qué puerto opera por defecto?

- [ ] a) HTTP en el puerto 3128
- [ ] b) HTCP en el puerto 4827
- [ ] c) ICP en el puerto 3130
- [ ] d) SNMP en el puerto 3401

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) ICP en el puerto 3130**

ICP (Internet Cache Protocol) es el protocolo utilizado por Squid para comunicarse con proxies hermanos (sibling) y padres (parent) en una jerarquía de caché. Funciona sobre UDP en el puerto 3130 por defecto, configurado mediante la directiva `icp_port`.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="208.1" data-correct="b">

### Pregunta 50 (Subtema 208.1)

Un administrador necesita crear un archivo de contraseñas para autenticación básica de Apache y añadir el primer usuario. ¿Qué comando debe utilizar?

- [ ] a) htpasswd /etc/apache2/.htpasswd usuario1
- [ ] b) htpasswd -c /etc/apache2/.htpasswd usuario1
- [ ] c) passwd -c /etc/apache2/.htpasswd usuario1
- [ ] d) apache2-passwd --create usuario1

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) htpasswd -c /etc/apache2/.htpasswd usuario1**

La opción `-c` de `htpasswd` crea un nuevo archivo de contraseñas. Sin `-c`, el comando intenta añadir o modificar un usuario en un archivo existente. Es importante usar `-c` solo la primera vez, ya que sobreescribiría el archivo existente eliminando todos los usuarios previos.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="212.5" data-correct="b">

### Pregunta 51 (Subtema 212.5)

¿Qué directiva en la configuración del servidor OpenVPN permite que los clientes VPN se comuniquen directamente entre sí?

- [ ] a) `allow-client-communication`
- [ ] b) `client-to-client`
- [ ] c) `inter-client yes`
- [ ] d) `push "allow-peer"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `client-to-client`**

Por defecto, el tráfico entre clientes no se permite en OpenVPN. La directiva `client-to-client` habilita la comunicación directa entre clientes conectados al mismo servidor sin que el tráfico pase por las reglas del firewall del servidor.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="212.1" data-correct="d">

### Pregunta 52 (Subtema 212.1)

¿Qué tabla de iptables se utiliza por defecto cuando no se especifica la opción `-t`?

- [ ] a) nat
- [ ] b) mangle
- [ ] c) raw
- [ ] d) filter

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) filter**

La tabla `filter` es la tabla por defecto de iptables. Contiene las cadenas INPUT, OUTPUT y FORWARD, y se usa para el filtrado básico de paquetes.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="212.3" data-correct="b">

### Pregunta 53 (Subtema 212.3)

¿Qué opción de ssh_config permite reutilizar una conexión SSH existente para múltiples sesiones al mismo host?

- [ ] a) `ConnectionReuse yes`
- [ ] b) `ControlMaster auto`
- [ ] c) `Multiplexing yes`
- [ ] d) `SessionShare auto`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ControlMaster auto`**

`ControlMaster auto` habilita la multiplexación de conexiones SSH. Junto con `ControlPath` (ruta del socket) y `ControlPersist` (tiempo de vida), permite que conexiones posteriores al mismo host reutilicen la conexión existente sin repetir la autenticación.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="208.3" data-correct="b">

### Pregunta 54 (Subtema 208.3)

En la directiva `cache_dir ufs /var/spool/squid 100 16 256`, ¿qué representa el valor 100?

- [ ] a) El número máximo de archivos en caché
- [ ] b) El tamaño máximo de la caché en disco en megabytes
- [ ] c) El número de subdirectorios de nivel 1
- [ ] d) El porcentaje máximo de uso del disco

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) El tamaño máximo de la caché en disco en megabytes**

En la directiva `cache_dir`, los parámetros son: tipo de almacenamiento (`ufs`), directorio (`/var/spool/squid`), tamaño en MB (100), subdirectorios de nivel 1 (16) y subdirectorios de nivel 2 (256).

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="212.1" data-correct="c">

### Pregunta 55 (Subtema 212.1)

En firewalld, ¿qué ocurre si se ejecuta `firewall-cmd --add-service=http` sin la opción `--permanent`?

- [ ] a) El cambio no se aplica hasta hacer reload
- [ ] b) El comando falla con un error
- [ ] c) El cambio se aplica inmediatamente pero se pierde al reiniciar
- [ ] d) El cambio se aplica y persiste automáticamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El cambio se aplica inmediatamente pero se pierde al reiniciar**

Sin `--permanent`, los cambios se aplican en la configuración en ejecución (runtime) de forma inmediata, pero no se guardan en la configuración persistente. Al reiniciar firewalld o el sistema, estos cambios se pierden.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="212.5" data-correct="c">

### Pregunta 56 (Subtema 212.5)

¿Qué comando de easy-rsa genera los parámetros Diffie-Hellman necesarios para el servidor OpenVPN?

- [ ] a) `./easyrsa gen-key dh`
- [ ] b) `./easyrsa build-dh`
- [ ] c) `./easyrsa gen-dh`
- [ ] d) `./easyrsa create-dh`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `./easyrsa gen-dh`**

El comando `./easyrsa gen-dh` genera los parámetros Diffie-Hellman necesarios para el intercambio seguro de claves. El archivo resultante (`dh.pem`) se referencia en la configuración del servidor con la directiva `dh`. Este proceso puede tardar varios minutos dependiendo del tamaño de clave.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="212.3" data-correct="b">

### Pregunta 57 (Subtema 212.3)

¿Qué opción en el archivo `authorized_keys` permite restringir una clave pública para que solo pueda ejecutar un comando específico?

- [ ] a) `force="/usr/bin/comando"`
- [ ] b) `command="/usr/bin/comando"`
- [ ] c) `restrict="/usr/bin/comando"`
- [ ] d) `exec="/usr/bin/comando"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `command="/usr/bin/comando"`**

La opción `command="..."` al inicio de una línea en `authorized_keys` fuerza la ejecución de un comando específico cuando esa clave se usa para autenticarse, ignorando cualquier comando proporcionado por el cliente. Se combina con opciones como `no-pty` y `no-port-forwarding` para mayor restricción.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="208.4" data-correct="c">

### Pregunta 58 (Subtema 208.4)

¿Qué directiva de Nginx se utiliza para definir el número de conexiones simultáneas que puede manejar cada proceso worker?

- [ ] a) max_connections
- [ ] b) worker_processes
- [ ] c) worker_connections
- [ ] d) connection_limit

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) worker_connections**

La directiva `worker_connections` se define dentro del bloque `events` y especifica el número máximo de conexiones simultáneas que cada proceso worker puede manejar. El número total teórico de conexiones es `worker_processes * worker_connections`.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="208.3" data-correct="c">

### Pregunta 59 (Subtema 208.3)

Un administrador quiere recargar la configuración de Squid sin interrumpir las conexiones activas. ¿Qué comando debe usar?

- [ ] a) squid -k restart
- [ ] b) squid -k reload
- [ ] c) squid -k reconfigure
- [ ] d) squid -k refresh

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) squid -k reconfigure**

El comando `squid -k reconfigure` hace que Squid relea su archivo de configuración sin necesidad de reiniciar el servicio. Las conexiones activas no se interrumpen. Es equivalente a enviar la señal SIGHUP al proceso de Squid.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="208.1" data-correct="b">

### Pregunta 60 (Subtema 208.1)

¿Qué directiva de Apache 2.4 se utiliza para permitir el acceso solo desde la red 10.0.0.0/8?

- [ ] a) Allow from 10.0.0.0/8
- [ ] b) Require ip 10.0.0.0/8
- [ ] c) Grant ip 10.0.0.0/8
- [ ] d) Access allow 10.0.0.0/8

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Require ip 10.0.0.0/8**

En Apache 2.4, el control de acceso se realiza mediante la directiva `Require`. La opción `Allow from` pertenece a la sintaxis antigua de Apache 2.2, que solo funciona si se tiene cargado el módulo `mod_access_compat`.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
