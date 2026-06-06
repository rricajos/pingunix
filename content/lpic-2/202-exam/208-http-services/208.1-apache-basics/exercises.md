---
title: "208.1 - Configuración básica de Apache"
tags: [lpic-2, examen-202, tema-208, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "208"
subtema: "208.1"
---

# 208.1 - Ejercicios: Configuración básica de Apache

### Pregunta 1
¿Cuál es el archivo de configuración principal de Apache en una distribución basada en Red Hat/CentOS?

a) /etc/apache2/apache2.conf
b) /etc/httpd/httpd.conf
c) /etc/httpd/conf/httpd.conf
d) /etc/apache/httpd.conf

<details>
<summary>Respuesta</summary>

**c) /etc/httpd/conf/httpd.conf**

En distribuciones basadas en Red Hat/CentOS, el archivo de configuración principal de Apache se encuentra en `/etc/httpd/conf/httpd.conf`. En Debian/Ubuntu, el equivalente es `/etc/apache2/apache2.conf`.
</details>

---

### Pregunta 2
¿Qué comando se utiliza en Debian/Ubuntu para habilitar el módulo `mod_rewrite`?

a) apache2ctl enable rewrite
b) a2enmod rewrite
c) httpd -enable rewrite
d) modprobe rewrite

<details>
<summary>Respuesta</summary>

**b) a2enmod rewrite**

El comando `a2enmod` se utiliza en distribuciones Debian/Ubuntu para habilitar módulos de Apache. Crea un enlace simbólico desde `mods-available` hacia `mods-enabled`. Su opuesto es `a2dismod`.
</details>

---

### Pregunta 3
En un VirtualHost basado en nombre, ¿qué cabecera HTTP utiliza Apache para determinar qué VirtualHost debe responder a la petición?

a) Accept
b) Referer
c) Host
d) X-Forwarded-For

<details>
<summary>Respuesta</summary>

**c) Host**

Apache utiliza la cabecera `Host` de la petición HTTP para identificar qué VirtualHost basado en nombre debe procesar la solicitud. Esta cabecera contiene el nombre de dominio solicitado por el cliente.
</details>

---

### Pregunta 4
¿Qué directiva de Apache 2.4 se utiliza para permitir el acceso solo desde la red 10.0.0.0/8?

a) Allow from 10.0.0.0/8
b) Require ip 10.0.0.0/8
c) Grant ip 10.0.0.0/8
d) Access allow 10.0.0.0/8

<details>
<summary>Respuesta</summary>

**b) Require ip 10.0.0.0/8**

En Apache 2.4, el control de acceso se realiza mediante la directiva `Require`. La opción `Allow from` pertenece a la sintaxis antigua de Apache 2.2, que solo funciona si se tiene cargado el módulo `mod_access_compat`.
</details>

---

### Pregunta 5
¿Qué hace el comando `apachectl graceful`?

a) Detiene Apache inmediatamente
b) Reinicia Apache cortando todas las conexiones activas
c) Recarga la configuración sin interrumpir las conexiones existentes
d) Verifica la sintaxis del archivo de configuración

<details>
<summary>Respuesta</summary>

**c) Recarga la configuración sin interrumpir las conexiones existentes**

El comando `apachectl graceful` envía la señal `SIGUSR1` al proceso Apache, lo que provoca que recargue su configuración sin interrumpir las conexiones activas. Los procesos hijo terminan de atender las peticiones actuales antes de releer la configuración.
</details>

---

### Pregunta 6
¿Cuál es el orden correcto de procesamiento de las directivas de contenedor en Apache?

a) Location → Directory → Files
b) Files → Directory → Location
c) Directory → Files → Location
d) Location → Files → Directory

<details>
<summary>Respuesta</summary>

**c) Directory → Files → Location**

El orden de procesamiento en Apache es: primero `<Directory>` (y `.htaccess`), luego `<DirectoryMatch>`, después `<Files>` (y `<FilesMatch>`), y finalmente `<Location>` (y `<LocationMatch>`). Las directivas procesadas después pueden sobreescribir las anteriores.
</details>

---

### Pregunta 7
¿Qué valor de `AllowOverride` proporciona el mejor rendimiento al deshabilitar completamente los archivos `.htaccess`?

a) AllowOverride All
b) AllowOverride Off
c) AllowOverride None
d) AllowOverride Disabled

<details>
<summary>Respuesta</summary>

**c) AllowOverride None**

Cuando `AllowOverride` se establece en `None`, Apache no busca archivos `.htaccess` en los directorios, lo que mejora el rendimiento al evitar lecturas innecesarias del sistema de archivos en cada petición.
</details>

---

### Pregunta 8
¿Qué variable del `LogFormat` de Apache representa el código de estado HTTP final de la respuesta?

a) %s
b) %r
c) %>s
d) %{status}

<details>
<summary>Respuesta</summary>

**c) %>s**

La variable `%>s` representa el código de estado final de la respuesta HTTP. El símbolo `>` indica que se toma el estado final (después de redirecciones internas). Sin el `>`, se tomaría el estado original de la petición.
</details>

---

### Pregunta 9
¿Qué MPM (Multi-Processing Module) de Apache es necesario cuando se utiliza `mod_php`?

a) event
b) worker
c) prefork
d) proxy

<details>
<summary>Respuesta</summary>

**c) prefork**

El MPM `prefork` utiliza un proceso separado para cada conexión, sin hilos. Es necesario para módulos que no son seguros para hilos (non-thread-safe) como `mod_php`. Los MPMs `worker` y `event` utilizan hilos y son incompatibles con `mod_php`.
</details>

---

### Pregunta 10
Un administrador necesita crear un archivo de contraseñas para autenticación básica de Apache y añadir el primer usuario. ¿Qué comando debe utilizar?

a) htpasswd /etc/apache2/.htpasswd usuario1
b) htpasswd -c /etc/apache2/.htpasswd usuario1
c) passwd -c /etc/apache2/.htpasswd usuario1
d) apache2-passwd --create usuario1

<details>
<summary>Respuesta</summary>

**b) htpasswd -c /etc/apache2/.htpasswd usuario1**

La opción `-c` de `htpasswd` crea un nuevo archivo de contraseñas. Sin `-c`, el comando intenta añadir o modificar un usuario en un archivo existente. Es importante usar `-c` solo la primera vez, ya que sobreescribiría el archivo existente eliminando todos los usuarios previos.
</details>

---

### Pregunta 11

¿Qué directiva de Apache define el directorio raíz desde el cual se sirven los archivos web a los clientes?

a) ServerRoot
b) DocumentRoot
c) WebRoot
d) RootDirectory

<details><summary>Respuesta</summary>

**b) DocumentRoot**

La directiva `DocumentRoot` especifica el directorio del sistema de archivos desde el cual Apache sirve los archivos web. Por ejemplo, `DocumentRoot /var/www/html` indica que las peticiones HTTP se resolverán buscando archivos dentro de ese directorio. `ServerRoot` es diferente: define el directorio base de la configuración del servidor, no el contenido web.

</details>

---

### Pregunta 12

¿Qué directiva de Apache permite crear un alias que mapea una URL a un directorio fuera del DocumentRoot?

a) Redirect
b) RewriteRule
c) Alias
d) SymLink

<details><summary>Respuesta</summary>

**c) Alias**

La directiva `Alias` del módulo `mod_alias` permite mapear una URL a un directorio del sistema de archivos que puede estar fuera del `DocumentRoot`. Por ejemplo, `Alias /documentos /opt/docs` hace que las peticiones a `/documentos` se sirvan desde `/opt/docs`. `Redirect` envía al cliente a otra URL, mientras que `Alias` sirve contenido directamente desde otra ubicación.

</details>

---

### Pregunta 13

¿Qué opción de la directiva `Options` permite que Apache muestre un listado del contenido del directorio cuando no existe un archivo índice?

a) FollowSymLinks
b) MultiViews
c) Indexes
d) ExecCGI

<details><summary>Respuesta</summary>

**c) Indexes**

La opción `Indexes` permite que Apache genere automáticamente un listado de archivos del directorio cuando no encuentra un archivo índice (como `index.html`). Por razones de seguridad, es recomendable deshabilitar esta opción en entornos de producción para evitar que se expongan los contenidos del directorio.

</details>

---

### Pregunta 14

¿Qué señal envía `apachectl graceful` al proceso Apache?

a) SIGTERM
b) SIGHUP
c) SIGUSR1
d) SIGKILL

<details><summary>Respuesta</summary>

**c) SIGUSR1**

El comando `apachectl graceful` envía la señal `SIGUSR1` al proceso Apache, lo que provoca un reinicio elegante. Los procesos hijo activos terminan de atender las peticiones actuales antes de ser reemplazados por nuevos procesos con la configuración actualizada. Esto permite recargar la configuración sin interrumpir conexiones existentes.

</details>

---

### Pregunta 15

¿Cuál es el nombre del servicio Apache en distribuciones basadas en Debian/Ubuntu?

a) httpd
b) apache
c) apache2
d) apached

<details><summary>Respuesta</summary>

**c) apache2**

En distribuciones basadas en Debian/Ubuntu, el servicio Apache se llama `apache2` y se gestiona con `systemctl start apache2`. En distribuciones basadas en Red Hat/CentOS, el servicio se llama `httpd`. Los archivos de configuración también varían: `/etc/apache2/apache2.conf` en Debian y `/etc/httpd/conf/httpd.conf` en Red Hat.

</details>

---

### Pregunta 16

¿Qué directiva de Apache especifica los puertos en los que el servidor escucha conexiones entrantes?

a) Port
b) Listen
c) BindAddress
d) ServerPort

<details><summary>Respuesta</summary>

**b) Listen**

La directiva `Listen` especifica las direcciones IP y puertos en los que Apache escucha conexiones. Se pueden definir múltiples directivas `Listen` para escuchar en varios puertos o interfaces. Por ejemplo, `Listen 80` y `Listen 443` para HTTP y HTTPS respectivamente. En Debian/Ubuntu, esta directiva suele estar en `/etc/apache2/ports.conf`.

</details>

---

### Pregunta 17

¿Qué formato de log de Apache incluye las cabeceras Referer y User-Agent además de la información básica de la petición?

a) common
b) extended
c) combined
d) full

<details><summary>Respuesta</summary>

**c) combined**

El formato de log `combined` incluye la información básica del formato `common` (IP del cliente, identidad, usuario, fecha, petición, código de estado y tamaño) más las cabeceras `Referer` y `User-Agent`. Se define con `LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined` y es el formato más utilizado.

</details>

---

### Pregunta 18

¿Qué MPM de Apache 2.4 es el predeterminado y ofrece el mejor rendimiento para la mayoría de escenarios?

a) prefork
b) worker
c) event
d) itk

<details><summary>Respuesta</summary>

**c) event**

El MPM `event` es el predeterminado en Apache 2.4 y ofrece el mejor rendimiento general. Es similar a `worker` pero con una gestión mejorada de las conexiones keep-alive, dedicando un hilo independiente para gestionarlas sin bloquear los hilos del worker. El MPM `prefork` sigue siendo necesario cuando se usa `mod_php`.

</details>

---

### Pregunta 19

¿Qué directiva dentro de `<Directory>` controla qué directivas están permitidas en los archivos `.htaccess`?

a) Override
b) AllowOverride
c) HtaccessControl
d) DirectoryOverride

<details><summary>Respuesta</summary>

**b) AllowOverride**

La directiva `AllowOverride` dentro de un bloque `<Directory>` controla qué tipos de directivas están permitidas en los archivos `.htaccess`. Los valores incluyen: `None` (deshabilita .htaccess por completo para mejor rendimiento), `All` (permite todas las directivas), `AuthConfig` (solo autenticación) y `FileInfo` (directivas de tipo de documento).

</details>

---

### Pregunta 20

Un administrador necesita que Apache ejecute scripts CGI ubicados en el directorio `/usr/lib/cgi-bin/` cuando se acceda a la URL `/cgi-bin/`. ¿Qué directiva debe usar?

a) `Alias /cgi-bin/ /usr/lib/cgi-bin/`
b) `ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/`
c) `CGIRoot /cgi-bin/ /usr/lib/cgi-bin/`
d) `ExecCGI /cgi-bin/ /usr/lib/cgi-bin/`

<details><summary>Respuesta</summary>

**b) `ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/`**

La directiva `ScriptAlias` del módulo `mod_alias` mapea una URL a un directorio y marca todos los archivos dentro como scripts CGI ejecutables. A diferencia de `Alias`, que simplemente sirve archivos, `ScriptAlias` también activa la ejecución CGI. No es necesario añadir `Options ExecCGI` por separado cuando se usa `ScriptAlias`.

</details>

---

### Pregunta 21

¿Qué comando se utiliza en Debian/Ubuntu para habilitar un sitio virtual de Apache que tiene su configuración en el directorio `sites-available`?

<input type="text" class="fill-blank" data-answer="a2ensite" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**a2ensite**

El comando `a2ensite` (Apache2 Enable Site) habilita un sitio virtual creando un enlace simbólico desde `sites-available` hacia `sites-enabled`. Por ejemplo, `a2ensite sitio1.conf` habilita la configuración del sitio. Para deshabilitar un sitio se usa `a2dissite`. Después de habilitar o deshabilitar un sitio, es necesario recargar Apache.

</details>

---

### Pregunta 22

¿Qué comando de Apache permite verificar la sintaxis de los archivos de configuración sin reiniciar el servicio?

<input type="text" class="fill-blank" data-answer="apachectl configtest" data-alt="apachectl -t,apache2ctl configtest,apache2ctl -t" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**apachectl configtest**

El comando `apachectl configtest` (o su equivalente `apachectl -t`) analiza los archivos de configuración de Apache y reporta errores de sintaxis sin afectar al servicio en ejecución. Es una práctica recomendada ejecutarlo antes de reiniciar o recargar Apache para evitar que un error detenga el servicio.

</details>

---

### Pregunta 23

¿Qué comando de `apachectl` muestra la lista de todos los módulos cargados en Apache?

<input type="text" class="fill-blank" data-answer="apachectl -M" data-alt="apache2ctl -M,httpd -M" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**apachectl -M**

El comando `apachectl -M` muestra la lista de todos los módulos cargados en Apache, indicando si son estáticos (compilados en el binario) o compartidos (cargados dinámicamente). Para ver la configuración de VirtualHosts se utiliza `apachectl -S`, y para verificar la versión y opciones de compilación, `apachectl -V`.

</details>

---

### Pregunta 24

¿Qué comando en Debian/Ubuntu deshabilita un módulo de Apache?

<input type="text" class="fill-blank" data-answer="a2dismod" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**a2dismod**

El comando `a2dismod` (Apache2 Disable Module) deshabilita un módulo de Apache eliminando el enlace simbólico correspondiente del directorio `mods-enabled`. Por ejemplo, `a2dismod status` deshabilita el módulo status. Su opuesto es `a2enmod` que habilita módulos. Después de habilitar o deshabilitar módulos, es necesario reiniciar Apache.

</details>

---

### Pregunta 25

¿Qué comando muestra la configuración de VirtualHosts activos en Apache, incluyendo los puertos y nombres de servidor?

<input type="text" class="fill-blank" data-answer="apachectl -S" data-alt="apache2ctl -S,httpd -S" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**apachectl -S**

El comando `apachectl -S` muestra un resumen de la configuración de VirtualHosts activos, incluyendo qué archivos de configuración definen cada VirtualHost, los puertos en los que escuchan y los nombres de servidor asociados. Es una herramienta útil para diagnosticar problemas de enrutamiento de peticiones cuando hay múltiples VirtualHosts configurados.

</details>

---
