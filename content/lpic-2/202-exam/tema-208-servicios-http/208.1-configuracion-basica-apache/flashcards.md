---
title: "208.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "208.1"
---

# Flashcards: 208.1 - Configuracion Basica Apache

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es el archivo de configuración principal de Apache en una distribución basada en Red Hat/CentOS?

</div>
<div class="flashcard-back">

**R:** c) /etc/httpd/conf/httpd.conf. En distribuciones basadas en Red Hat/CentOS, el archivo de configuración principal de Apache se encuentra en `/etc/httpd/conf/httpd.conf`. En Debian/Ubuntu, el equivalente es `/etc/apache2/apache2.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza en Debian/Ubuntu para habilitar el módulo `mod_rewrite`?

</div>
<div class="flashcard-back">

**R:** b) a2enmod rewrite. El comando `a2enmod` se utiliza en distribuciones Debian/Ubuntu para habilitar módulos de Apache. Crea un enlace simbólico desde `mods-available` hacia `mods-enabled`. Su opuesto es `a2dismod`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-003">
<div class="flashcard-front">

**P:** En un VirtualHost basado en nombre, ¿qué cabecera HTTP utiliza Apache para determinar qué VirtualHost debe responder a la petición?

</div>
<div class="flashcard-back">

**R:** c) Host. Apache utiliza la cabecera `Host` de la petición HTTP para identificar qué VirtualHost basado en nombre debe procesar la solicitud. Esta cabecera contiene el nombre de dominio solicitado por el cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache 2.4 se utiliza para permitir el acceso solo desde la red 10.0.0.0/8?

</div>
<div class="flashcard-back">

**R:** b) Require ip 10.0.0.0/8. En Apache 2.4, el control de acceso se realiza mediante la directiva `Require`. La opción `Allow from` pertenece a la sintaxis antigua de Apache 2.2, que solo funciona si se tiene cargado el módulo `mod_access_compat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué hace el comando `apachectl graceful`?

</div>
<div class="flashcard-back">

**R:** c) Recarga la configuración sin interrumpir las conexiones existentes. El comando `apachectl graceful` envía la señal `SIGUSR1` al proceso Apache, lo que provoca que recargue su configuración sin interrumpir las conexiones activas. Los procesos hijo terminan de atender las peticiones actuales antes de releer la configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es el orden correcto de procesamiento de las directivas de contenedor en Apache?

</div>
<div class="flashcard-back">

**R:** c) Directory → Files → Location. El orden de procesamiento en Apache es: primero `<Directory>` (y `.htaccess`), luego `<DirectoryMatch>`, después `<Files>` (y `<FilesMatch>`), y finalmente `<Location>` (y `<LocationMatch>`). Las directivas procesadas después pueden sobreescribir las anteriores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué valor de `AllowOverride` proporciona el mejor rendimiento al deshabilitar completamente los archivos `.htaccess`?

</div>
<div class="flashcard-back">

**R:** c) AllowOverride None. Cuando `AllowOverride` se establece en `None`, Apache no busca archivos `.htaccess` en los directorios, lo que mejora el rendimiento al evitar lecturas innecesarias del sistema de archivos en cada petición.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué variable del `LogFormat` de Apache representa el código de estado HTTP final de la respuesta?

</div>
<div class="flashcard-back">

**R:** c) %>s. La variable `%>s` representa el código de estado final de la respuesta HTTP. El símbolo `>` indica que se toma el estado final (después de redirecciones internas). Sin el `>`, se tomaría el estado original de la petición.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué MPM (Multi-Processing Module) de Apache es necesario cuando se utiliza `mod_php`?

</div>
<div class="flashcard-back">

**R:** c) prefork. El MPM `prefork` utiliza un proceso separado para cada conexión, sin hilos. Es necesario para módulos que no son seguros para hilos (non-thread-safe) como `mod_php`. Los MPMs `worker` y `event` utilizan hilos y son incompatibles con `mod_php`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita crear un archivo de contraseñas para autenticación básica de Apache y añadir el primer usuario. ¿Qué comando debe utilizar?

</div>
<div class="flashcard-back">

**R:** b) htpasswd -c /etc/apache2/.htpasswd usuario1. La opción `-c` de `htpasswd` crea un nuevo archivo de contraseñas. Sin `-c`, el comando intenta añadir o modificar un usuario en un archivo existente. Es importante usar `-c` solo la primera vez, ya que sobreescribiría el archivo existente eliminando todos los usuarios previos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache define el directorio raíz desde el cual se sirven los archivos web a los clientes?

</div>
<div class="flashcard-back">

**R:** b) DocumentRoot. La directiva `DocumentRoot` especifica el directorio del sistema de archivos desde el cual Apache sirve los archivos web. Por ejemplo, `DocumentRoot /var/www/html` indica que las peticiones HTTP se resolverán buscando archivos dentro de ese directorio. `ServerRoot` es diferente: define el directorio base de la configuración del servidor, no el contenido web.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache permite crear un alias que mapea una URL a un directorio fuera del DocumentRoot?

</div>
<div class="flashcard-back">

**R:** c) Alias. La directiva `Alias` del módulo `mod_alias` permite mapear una URL a un directorio del sistema de archivos que puede estar fuera del `DocumentRoot`. Por ejemplo, `Alias /documentos /opt/docs` hace que las peticiones a `/documentos` se sirvan desde `/opt/docs`. `Redirect` envía al cliente a otra URL, mientras que `Alias` sirve contenido directamente desde otra ubicación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué opción de la directiva `Options` permite que Apache muestre un listado del contenido del directorio cuando no existe un archivo índice?

</div>
<div class="flashcard-back">

**R:** c) Indexes. La opción `Indexes` permite que Apache genere automáticamente un listado de archivos del directorio cuando no encuentra un archivo índice (como `index.html`). Por razones de seguridad, es recomendable deshabilitar esta opción en entornos de producción para evitar que se expongan los contenidos del directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué señal envía `apachectl graceful` al proceso Apache?

</div>
<div class="flashcard-back">

**R:** c) SIGUSR1. El comando `apachectl graceful` envía la señal `SIGUSR1` al proceso Apache, lo que provoca un reinicio elegante. Los procesos hijo activos terminan de atender las peticiones actuales antes de ser reemplazados por nuevos procesos con la configuración actualizada. Esto permite recargar la configuración sin interrumpir conexiones existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál es el nombre del servicio Apache en distribuciones basadas en Debian/Ubuntu?

</div>
<div class="flashcard-back">

**R:** c) apache2. En distribuciones basadas en Debian/Ubuntu, el servicio Apache se llama `apache2` y se gestiona con `systemctl start apache2`. En distribuciones basadas en Red Hat/CentOS, el servicio se llama `httpd`. Los archivos de configuración también varían: `/etc/apache2/apache2.conf` en Debian y `/etc/httpd/conf/httpd.conf` en Red Hat.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué directiva de Apache especifica los puertos en los que el servidor escucha conexiones entrantes?

</div>
<div class="flashcard-back">

**R:** b) Listen. La directiva `Listen` especifica las direcciones IP y puertos en los que Apache escucha conexiones. Se pueden definir múltiples directivas `Listen` para escuchar en varios puertos o interfaces. Por ejemplo, `Listen 80` y `Listen 443` para HTTP y HTTPS respectivamente. En Debian/Ubuntu, esta directiva suele estar en `/etc/apache2/ports.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué formato de log de Apache incluye las cabeceras Referer y User-Agent además de la información básica de la petición?

</div>
<div class="flashcard-back">

**R:** c) combined. El formato de log `combined` incluye la información básica del formato `common` (IP del cliente, identidad, usuario, fecha, petición, código de estado y tamaño) más las cabeceras `Referer` y `User-Agent`. Se define con `LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined` y es el formato más utilizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué MPM de Apache 2.4 es el predeterminado y ofrece el mejor rendimiento para la mayoría de escenarios?

</div>
<div class="flashcard-back">

**R:** c) event. El MPM `event` es el predeterminado en Apache 2.4 y ofrece el mejor rendimiento general. Es similar a `worker` pero con una gestión mejorada de las conexiones keep-alive, dedicando un hilo independiente para gestionarlas sin bloquear los hilos del worker. El MPM `prefork` sigue siendo necesario cuando se usa `mod_php`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva dentro de `<Directory>` controla qué directivas están permitidas en los archivos `.htaccess`?

</div>
<div class="flashcard-back">

**R:** b) AllowOverride. La directiva `AllowOverride` dentro de un bloque `<Directory>` controla qué tipos de directivas están permitidas en los archivos `.htaccess`. Los valores incluyen: `None` (deshabilita .htaccess por completo para mejor rendimiento), `All` (permite todas las directivas), `AuthConfig` (solo autenticación) y `FileInfo` (directivas de tipo de documento).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-020">
<div class="flashcard-front">

**P:** Un administrador necesita que Apache ejecute scripts CGI ubicados en el directorio `/usr/lib/cgi-bin/` cuando se acceda a la URL `/cgi-bin/`. ¿Qué directiva debe usar?

</div>
<div class="flashcard-back">

**R:** b) `ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/`. La directiva `ScriptAlias` del módulo `mod_alias` mapea una URL a un directorio y marca todos los archivos dentro como scripts CGI ejecutables. A diferencia de `Alias`, que simplemente sirve archivos, `ScriptAlias` también activa la ejecución CGI. No es necesario añadir `Options ExecCGI` por separado cuando se usa `ScriptAlias`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza en Debian/Ubuntu para habilitar un sitio virtual de Apache que tiene su configuración en el directorio `sites-available`?

</div>
<div class="flashcard-back">

**R:** a2ensite. El comando `a2ensite` (Apache2 Enable Site) habilita un sitio virtual creando un enlace simbólico desde `sites-available` hacia `sites-enabled`. Por ejemplo, `a2ensite sitio1.conf` habilita la configuración del sitio. Para deshabilitar un sitio se usa `a2dissite`. Después de habilitar o deshabilitar un sitio, es necesario recargar Apache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando de Apache permite verificar la sintaxis de los archivos de configuración sin reiniciar el servicio?

</div>
<div class="flashcard-back">

**R:** apachectl configtest. El comando `apachectl configtest` (o su equivalente `apachectl -t`) analiza los archivos de configuración de Apache y reporta errores de sintaxis sin afectar al servicio en ejecución. Es una práctica recomendada ejecutarlo antes de reiniciar o recargar Apache para evitar que un error detenga el servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando de `apachectl` muestra la lista de todos los módulos cargados en Apache?

</div>
<div class="flashcard-back">

**R:** apachectl -M. El comando `apachectl -M` muestra la lista de todos los módulos cargados en Apache, indicando si son estáticos (compilados en el binario) o compartidos (cargados dinámicamente). Para ver la configuración de VirtualHosts se utiliza `apachectl -S`, y para verificar la versión y opciones de compilación, `apachectl -V`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando en Debian/Ubuntu deshabilita un módulo de Apache?

</div>
<div class="flashcard-back">

**R:** a2dismod. El comando `a2dismod` (Apache2 Disable Module) deshabilita un módulo de Apache eliminando el enlace simbólico correspondiente del directorio `mods-enabled`. Por ejemplo, `a2dismod status` deshabilita el módulo status. Su opuesto es `a2enmod` que habilita módulos. Después de habilitar o deshabilitar módulos, es necesario reiniciar Apache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la configuración de VirtualHosts activos en Apache, incluyendo los puertos y nombres de servidor?

</div>
<div class="flashcard-back">

**R:** apachectl -S. El comando `apachectl -S` muestra un resumen de la configuración de VirtualHosts activos, incluyendo qué archivos de configuración definen cada VirtualHost, los puertos en los que escuchan y los nombres de servidor asociados. Es una herramienta útil para diagnosticar problemas de enrutamiento de peticiones cuando hay múltiples VirtualHosts configurados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que en Debian el servicio se llama `apache2` y en Red Hat se llama `htt...

</div>
<div class="flashcard-back">

**R:** Recuerda que en Debian el servicio se llama `apache2` y en Red Hat se llama `httpd`. Los archivos de configuración también varían según la distribución.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Los VirtualHosts basados en nombre son los más comunes. Cuando se usan VirtualHo...

</div>
<div class="flashcard-back">

**R:** Los VirtualHosts basados en nombre son los más comunes. Cuando se usan VirtualHosts basados en nombre, Apache utiliza la cabecera `Host` de la petición HTTP para determinar qué VirtualHost debe responder.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: El orden de procesamiento es: `<Directory>` y `.htaccess` primero, luego `<Direc...

</div>
<div class="flashcard-back">

**R:** El orden de procesamiento es: `<Directory>` y `.htaccess` primero, luego `<DirectoryMatch>`, luego `<Files>` y `<FilesMatch>`, y finalmente `<Location>` y `<LocationMatch>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: En Apache 2.4 se usa `Require` en lugar de las directivas `Order`, `Allow` y `De...

</div>
<div class="flashcard-back">

**R:** En Apache 2.4 se usa `Require` en lugar de las directivas `Order`, `Allow` y `Deny` de Apache 2.2. Sin embargo, el módulo `mod_access_compat` permite usar la sintaxis antigua.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `apachectl graceful` envía la señal `SIGUSR1` a Apache para que recargue su conf...

</div>
<div class="flashcard-back">

**R:** `apachectl graceful` envía la señal `SIGUSR1` a Apache para que recargue su configuración sin interrumpir las conexiones existentes. Es el método preferido en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `%b`?

</div>
<div class="flashcard-back">

**R:** Tamaño de la respuesta en bytes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Apache HTTP Server (httpd) es el servidor web más utilizado históricamente en sistemas Linux. El examen LPIC-2 exige un conocimiento profundo de su instalación, configuración y administración. Apache u

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Archivos de configuración principales?

</div>
<div class="flashcard-back">

**R:** | Distribución | Archivo principal | Directorio de configuración |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son VirtualHost (Hosts virtuales)?

</div>
<div class="flashcard-back">

**R:** Los hosts virtuales permiten alojar múltiples sitios web en un solo servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Archivo .htaccess?

</div>
<div class="flashcard-back">

**R:** El archivo `.htaccess` permite aplicar configuración por directorio sin modificar la configuración principal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son MPM (Multi-Processing Modules)?

</div>
<div class="flashcard-back">

**R:** Apache soporta diferentes modelos de procesamiento:

</div>
</div>

---

