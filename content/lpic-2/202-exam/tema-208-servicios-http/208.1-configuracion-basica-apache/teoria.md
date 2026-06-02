---
title: "208.1 - Configuración básica de Apache"
tags: [lpic-2, examen-202, tema-208, teoria]
tipo: teoria
certificacion: lpic-2
examen: "202"
tema: "208"
subtema: "208.1"
---

# 208.1 - Configuración básica de Apache

## Peso: 4

## Introducción

Apache HTTP Server (httpd) es el servidor web más utilizado históricamente en sistemas Linux. El examen LPIC-2 exige un conocimiento profundo de su instalación, configuración y administración. Apache utiliza una arquitectura modular que permite extender su funcionalidad mediante módulos.

## Instalación de Apache

### En distribuciones basadas en Debian/Ubuntu

```bash
apt install apache2
systemctl enable apache2
systemctl start apache2
```

### En distribuciones basadas en Red Hat/CentOS

```bash
yum install httpd
systemctl enable httpd
systemctl start httpd
```

> **Para el examen:** Recuerda que en Debian el servicio se llama `apache2` y en Red Hat se llama `httpd`. Los archivos de configuración también varían según la distribución.

## Archivos de configuración principales

| Distribución | Archivo principal | Directorio de configuración |
|---|---|---|
| Debian/Ubuntu | `/etc/apache2/apache2.conf` | `/etc/apache2/` |
| Red Hat/CentOS | `/etc/httpd/conf/httpd.conf` | `/etc/httpd/` |

### Estructura en Debian/Ubuntu

```
/etc/apache2/
├── apache2.conf          # Configuración principal
├── ports.conf            # Puertos de escucha
├── sites-available/      # VirtualHosts disponibles
├── sites-enabled/        # VirtualHosts habilitados (enlaces simbólicos)
├── mods-available/       # Módulos disponibles
├── mods-enabled/         # Módulos habilitados (enlaces simbólicos)
└── conf-available/       # Fragmentos de configuración
```

### Estructura en Red Hat/CentOS

```
/etc/httpd/
├── conf/httpd.conf       # Configuración principal
├── conf.d/               # Archivos de configuración adicionales
├── conf.modules.d/       # Configuración de módulos
└── modules/              # Enlace a /usr/lib64/httpd/modules/
```

## Directivas fundamentales de configuración

### Directivas globales

```apache
ServerRoot "/etc/httpd"
Listen 80
Listen 443
ServerAdmin admin@ejemplo.com
ServerName www.ejemplo.com:80
DocumentRoot "/var/www/html"
```

- **ServerRoot**: Directorio base para la configuración del servidor.
- **Listen**: Puerto(s) en los que Apache escucha conexiones.
- **ServerName**: Nombre de host y puerto del servidor.
- **DocumentRoot**: Directorio raíz donde se sirven los archivos web.

## VirtualHost (Hosts virtuales)

Los hosts virtuales permiten alojar múltiples sitios web en un solo servidor.

### VirtualHost basado en nombre

```apache
<VirtualHost *:80>
    ServerName www.sitio1.com
    ServerAlias sitio1.com
    DocumentRoot /var/www/sitio1
    ErrorLog ${APACHE_LOG_DIR}/sitio1-error.log
    CustomLog ${APACHE_LOG_DIR}/sitio1-access.log combined
</VirtualHost>

<VirtualHost *:80>
    ServerName www.sitio2.com
    DocumentRoot /var/www/sitio2
</VirtualHost>
```

### VirtualHost basado en IP

```apache
<VirtualHost 192.168.1.10:80>
    ServerName www.sitio1.com
    DocumentRoot /var/www/sitio1
</VirtualHost>

<VirtualHost 192.168.1.11:80>
    ServerName www.sitio2.com
    DocumentRoot /var/www/sitio2
</VirtualHost>
```

> **Para el examen:** Los VirtualHosts basados en nombre son los más comunes. Cuando se usan VirtualHosts basados en nombre, Apache utiliza la cabecera `Host` de la petición HTTP para determinar qué VirtualHost debe responder.

## Directivas de contenedor

### Directory, Location y Files

```apache
# Aplica configuración a un directorio del sistema de archivos
<Directory /var/www/html>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>

# Aplica configuración a una URL
<Location /admin>
    Require ip 192.168.1.0/24
</Location>

# Aplica configuración a archivos específicos
<Files ".ht*">
    Require all denied
</Files>

# Coincidencia por expresión regular
<DirectoryMatch "^/var/www/.*/private">
    Require all denied
</DirectoryMatch>
```

> **Para el examen:** El orden de procesamiento es: `<Directory>` y `.htaccess` primero, luego `<DirectoryMatch>`, luego `<Files>` y `<FilesMatch>`, y finalmente `<Location>` y `<LocationMatch>`.

## Módulos importantes

### Gestión de módulos en Debian/Ubuntu

```bash
a2enmod rewrite        # Habilitar módulo
a2dismod rewrite       # Deshabilitar módulo
a2ensite sitio1.conf   # Habilitar sitio
a2dissite sitio1.conf  # Deshabilitar sitio
a2enconf seguridad     # Habilitar configuración
a2disconf seguridad    # Deshabilitar configuración
```

### mod_rewrite - Reescritura de URLs

```apache
<VirtualHost *:80>
    ServerName www.ejemplo.com
    RewriteEngine On
    RewriteRule ^/antiguo/(.*)$ /nuevo/$1 [R=301,L]
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}$1 [R=301,L]
</VirtualHost>
```

### mod_alias - Alias y redirecciones

```apache
Alias /documentos /opt/docs
Redirect permanent /viejo /nuevo
RedirectMatch 301 ^/blog/(.*)$ /articulos/$1
ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
```

### mod_ssl - Soporte SSL/TLS

```apache
<VirtualHost *:443>
    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/servidor.crt
    SSLCertificateKeyFile /etc/ssl/private/servidor.key
</VirtualHost>
```

## Control de acceso

### Apache 2.4 (método actual con mod_authz)

```apache
# Permitir acceso a todos
Require all granted

# Denegar acceso a todos
Require all denied

# Permitir por IP
Require ip 192.168.1.0/24

# Permitir por nombre de host
Require host ejemplo.com

# Requerir usuario autenticado
Require valid-user

# Requerir usuario específico
Require user admin juan
```

### Autenticación básica

```apache
<Directory /var/www/privado>
    AuthType Basic
    AuthName "Área restringida"
    AuthUserFile /etc/apache2/.htpasswd
    Require valid-user
</Directory>
```

```bash
htpasswd -c /etc/apache2/.htpasswd usuario1   # Crear archivo y primer usuario
htpasswd /etc/apache2/.htpasswd usuario2       # Añadir usuario adicional
```

> **Para el examen:** En Apache 2.4 se usa `Require` en lugar de las directivas `Order`, `Allow` y `Deny` de Apache 2.2. Sin embargo, el módulo `mod_access_compat` permite usar la sintaxis antigua.

## Archivo .htaccess

El archivo `.htaccess` permite aplicar configuración por directorio sin modificar la configuración principal.

```apache
# En httpd.conf - habilitar .htaccess
<Directory /var/www/html>
    AllowOverride All
</Directory>
```

- **AllowOverride None**: Ignora los archivos `.htaccess` (mejor rendimiento).
- **AllowOverride All**: Permite todas las directivas en `.htaccess`.
- **AllowOverride AuthConfig**: Permite solo directivas de autenticación.
- **AllowOverride FileInfo**: Permite directivas de tipo de documento.

## Registro de eventos (Logging)

### Directivas de logging

```apache
# Log de errores
ErrorLog ${APACHE_LOG_DIR}/error.log
LogLevel warn

# Log de acceso
LogFormat "%h %l %u %t \"%r\" %>s %b" common
LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
CustomLog ${APACHE_LOG_DIR}/access.log combined
```

### Variables del LogFormat

| Variable | Descripción |
|---|---|
| `%h` | Host remoto (IP del cliente) |
| `%l` | Identidad remota (identd) |
| `%u` | Usuario autenticado |
| `%t` | Fecha y hora de la petición |
| `%r` | Primera línea de la petición |
| `%>s` | Código de estado final |
| `%b` | Tamaño de la respuesta en bytes |
| `%{Referer}i` | Cabecera Referer |
| `%{User-Agent}i` | Cabecera User-Agent |

## Control del servicio con apachectl

```bash
apachectl start          # Iniciar Apache
apachectl stop           # Detener Apache
apachectl restart        # Reiniciar Apache
apachectl graceful       # Reinicio elegante (no corta conexiones activas)
apachectl graceful-stop  # Parada elegante
apachectl configtest     # Verificar sintaxis de configuración
apachectl -t             # Equivalente a configtest
apachectl -S             # Mostrar configuración de VirtualHosts
apachectl -M             # Listar módulos cargados
```

> **Para el examen:** `apachectl graceful` envía la señal `SIGUSR1` a Apache para que recargue su configuración sin interrumpir las conexiones existentes. Es el método preferido en producción.

## Opciones del directorio (Options)

```apache
<Directory /var/www/html>
    Options Indexes FollowSymLinks MultiViews
</Directory>
```

- **Indexes**: Muestra listado de directorio si no hay archivo índice.
- **FollowSymLinks**: Permite seguir enlaces simbólicos.
- **MultiViews**: Permite negociación de contenido.
- **ExecCGI**: Permite ejecución de scripts CGI.
- **None**: Ninguna opción habilitada.
- **All**: Todas las opciones excepto MultiViews.

## MPM (Multi-Processing Modules)

Apache soporta diferentes modelos de procesamiento:

| MPM | Descripción | Uso recomendado |
|---|---|---|
| **prefork** | Un proceso por conexión | Compatibilidad con módulos no thread-safe (mod_php) |
| **worker** | Hilos múltiples por proceso | Mayor rendimiento, menor consumo de memoria |
| **event** | Similar a worker con gestión mejorada de keep-alive | Recomendado para Apache 2.4 |

```bash
# Verificar MPM activo
apachectl -V | grep MPM
a2query -M              # En Debian/Ubuntu
```

> **Para el examen:** El MPM `event` es el predeterminado en Apache 2.4 y ofrece el mejor rendimiento para la mayoría de escenarios. El MPM `prefork` sigue siendo necesario cuando se usa `mod_php`.

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **Apache 2.4 `Require` vs 2.2 `Order/Allow/Deny`** — la sintaxis antigua (`Order deny,allow` / `Allow from`) NO funciona en Apache 2.4 sin `mod_access_compat`. Si preguntan por control de acceso moderno, siempre es `Require all granted`, `Require ip`, etc.

- **`apachectl graceful` vs `restart`** — `graceful` envia SIGUSR1 y recarga sin cortar conexiones activas. `restart` envia SIGHUP y mata todas las conexiones. En produccion siempre se prefiere `graceful`.

- **Orden de procesamiento de contenedores** — `<Directory>` y `.htaccess` se procesan primero, luego `<DirectoryMatch>`, despues `<Files>`/`<FilesMatch>`, y finalmente `<Location>`/`<LocationMatch>`. Si una pregunta mezcla estos contenedores, el ultimo en procesarse prevalece.

- **`AllowOverride None` deshabilita `.htaccess`** — si `AllowOverride` esta en `None`, Apache ignora completamente los archivos `.htaccess`. Ademas, `AllowOverride` solo es valido dentro de `<Directory>`, no en `<Location>`.

- **`a2enmod`/`a2ensite` son exclusivos de Debian** — en RHEL/CentOS no existen estos comandos. Los modulos se configuran directamente en archivos de `/etc/httpd/conf.modules.d/`. El examen puede preguntar la forma correcta segun la distribucion.

- **MPM `prefork` es obligatorio con `mod_php`** — `mod_php` no es thread-safe, asi que no funciona con `worker` ni `event`. Si la pregunta menciona PHP con mod_php, el MPM debe ser `prefork`.

- **`ServerName` no es lo mismo que `ServerAlias`** — `ServerName` es el nombre principal del VirtualHost. `ServerAlias` son nombres adicionales. Un VirtualHost solo puede tener un `ServerName`, pero multiples `ServerAlias`.

- **VirtualHost basado en nombre requiere la cabecera `Host`** — Apache usa la cabecera HTTP `Host` para decidir que VirtualHost responde. Sin esta cabecera (clientes HTTP/1.0 antiguos), se sirve el primer VirtualHost definido.

- **`-t` y `configtest` son equivalentes en `apachectl`** — ambos verifican la sintaxis de configuracion. Pero `-S` muestra la configuracion de VirtualHosts activos y `-M` lista los modulos cargados. No confundir las opciones.

- **`htpasswd -c` CREA el archivo (sobreescribe)** — la opcion `-c` destruye el contenido previo. Para anadir usuarios adicionales, usar `htpasswd` SIN `-c`. Confundir esto borra todos los usuarios existentes.
