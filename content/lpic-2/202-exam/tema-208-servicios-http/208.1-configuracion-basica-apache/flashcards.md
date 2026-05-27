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

> 24 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: Recuerda que en Debian el servicio se llama `apache2` y en Red Hat se llama `htt...

</div>
<div class="flashcard-back">

**R:** Recuerda que en Debian el servicio se llama `apache2` y en Red Hat se llama `httpd`. Los archivos de configuración también varían según la distribución.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-012">
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

<div class="flashcard" data-id="208.1-fc-013">
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

<div class="flashcard" data-id="208.1-fc-014">
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

<div class="flashcard" data-id="208.1-fc-015">
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

<div class="flashcard" data-id="208.1-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/apache2/apache2.conf`?

</div>
<div class="flashcard-back">

**R:** `/etc/apache2/`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/httpd/conf/httpd.conf`?

</div>
<div class="flashcard-back">

**R:** `/etc/httpd/`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `%h`?

</div>
<div class="flashcard-back">

**R:** Host remoto (IP del cliente)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `%l`?

</div>
<div class="flashcard-back">

**R:** Identidad remota (identd)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `%u`?

</div>
<div class="flashcard-back">

**R:** Usuario autenticado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.1">
</div>

<div class="flashcard" data-id="208.1-fc-021">
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

<div class="flashcard" data-id="208.1-fc-022">
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

<div class="flashcard" data-id="208.1-fc-023">
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

<div class="flashcard" data-id="208.1-fc-024">
<div class="flashcard-front">

**P:** Que es/son MPM (Multi-Processing Modules)?

</div>
<div class="flashcard-back">

**R:** Apache soporta diferentes modelos de procesamiento:

</div>
</div>

---

