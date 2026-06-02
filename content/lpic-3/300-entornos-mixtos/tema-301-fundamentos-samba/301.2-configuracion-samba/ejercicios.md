---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "301"
subtema: "301.2"
titulo: "Configuración Samba - Ejercicios"
peso: 4
tags:
  - lpic-3
  - tema-301
  - ejercicios
---

# Ejercicios - 301.2 Configuración Samba

### Pregunta 1
¿Qué herramienta se debe utilizar para verificar la sintaxis del archivo smb.conf?

a) smbclient
b) testparm
c) smbstatus
d) pdbedit

<details><summary>Respuesta</summary>

**b) testparm**

`testparm` es la herramienta oficial para verificar la sintaxis y la validez de la configuración en smb.conf. Muestra advertencias sobre parámetros incorrectos o en desuso y presenta la configuración efectiva. Se recomienda ejecutarlo después de cada cambio en smb.conf.
</details>

### Pregunta 2
¿Cuál es el backend de autenticación predeterminado en Samba 4?

a) smbpasswd
b) ldapsam
c) tdbsam
d) mysqlsam

<details><summary>Respuesta</summary>

**c) tdbsam**

`tdbsam` es el backend predeterminado desde Samba 3. Almacena las cuentas en una base de datos TDB (Trivial Database) en `/var/lib/samba/private/passdb.tdb`. Es adecuado para servidores independientes y entornos pequeños. `smbpasswd` es el formato legacy y `ldapsam` se usa para entornos distribuidos.
</details>

### Pregunta 3
¿Qué sección especial de smb.conf crea automáticamente un recurso compartido para el directorio personal de cada usuario?

a) [printers]
b) [global]
c) [homes]
d) [users]

<details><summary>Respuesta</summary>

**c) [homes]**

La sección `[homes]` es una sección especial que crea dinámicamente un recurso compartido para el directorio home de cada usuario autenticado. Cuando un usuario se conecta, Samba busca primero un recurso con su nombre y, si no existe, comprueba si existe la sección [homes] y el usuario en el sistema.
</details>

### Pregunta 4
En smb.conf, ¿qué variable se sustituye por el nombre NetBIOS del cliente que se conecta?

a) `%U`
b) `%I`
c) `%m`
d) `%L`

<details><summary>Respuesta</summary>

**c) `%m`**

La variable `%m` se sustituye por el nombre NetBIOS del cliente. `%U` es el nombre de usuario solicitado, `%I` es la dirección IP del cliente y `%L` es el nombre NetBIOS del servidor. Estas variables son útiles para crear logs separados por cliente: `log file = /var/log/samba/log.%m`.
</details>

### Pregunta 5
¿Qué valor del parámetro `server role` configura Samba como miembro de un dominio?

a) `standalone server`
b) `member server`
c) `active directory domain controller`
d) `domain member`

<details><summary>Respuesta</summary>

**b) `member server`**

El valor `member server` configura Samba como miembro de un dominio Active Directory o NT4. En este modo, Samba delega la autenticación al controlador de dominio. `standalone server` es para servidores independientes y `active directory domain controller` es para actuar como DC.
</details>

### Pregunta 6
¿Cuál es la función del módulo VFS `recycle`?

a) Comprime archivos antiguos automáticamente
b) Implementa una papelera de reciclaje para archivos eliminados
c) Recicla las conexiones inactivas
d) Libera espacio en disco automáticamente

<details><summary>Respuesta</summary>

**b) Implementa una papelera de reciclaje para archivos eliminados**

El módulo VFS `recycle` intercepta las operaciones de eliminación de archivos y los mueve a un directorio de papelera (configurado con `recycle:repository`) en lugar de eliminarlos definitivamente. Permite configurar opciones como mantener la estructura de directorios (`keeptree`), versionar archivos (`versions`) y limitar el tamaño máximo.
</details>

### Pregunta 7
¿Qué parámetro de smb.conf limita las interfaces de red en las que Samba escucha peticiones?

a) `network interfaces`
b) `listen on`
c) `interfaces` junto con `bind interfaces only`
d) `socket address`

<details><summary>Respuesta</summary>

**c) `interfaces` junto con `bind interfaces only`**

El parámetro `interfaces` define las interfaces o subredes en las que Samba acepta conexiones (ej: `interfaces = eth0 lo 192.168.1.0/24`). Para que la restricción sea efectiva, debe combinarse con `bind interfaces only = yes`. Sin este segundo parámetro, Samba escucha en todas las interfaces.
</details>

### Pregunta 8
¿Qué diferencia hay entre `create mask` y `force create mode` en smb.conf?

a) No hay diferencia, son sinónimos
b) `create mask` aplica un AND lógico; `force create mode` aplica un OR lógico
c) `create mask` se aplica a directorios; `force create mode` a archivos
d) `create mask` es para SMB1; `force create mode` para SMB2

<details><summary>Respuesta</summary>

**b) `create mask` aplica un AND lógico; `force create mode` aplica un OR lógico**

`create mask` (también llamado `create mode`) aplica una operación AND bit a bit con los permisos del archivo creado, eliminando bits de permiso. `force create mode` aplica una operación OR bit a bit, asegurando que ciertos bits estén siempre activos. Por ejemplo, `create mask = 0660` garantiza que "otros" nunca tengan permisos, mientras que `force create mode = 0040` asegura lectura para el grupo.
</details>

### Pregunta 9
Un administrador necesita que todos los archivos creados en un recurso compartido pertenezcan al grupo "contabilidad". ¿Qué parámetro debe usar?

a) `valid users = @contabilidad`
b) `write list = @contabilidad`
c) `force group = contabilidad`
d) `group = contabilidad`

<details><summary>Respuesta</summary>

**c) `force group = contabilidad`**

El parámetro `force group = contabilidad` hace que todas las operaciones de archivos en el recurso compartido se realicen con la identidad del grupo "contabilidad", independientemente del grupo primario del usuario. `valid users` restringe quién puede acceder y `write list` define quién puede escribir, pero ninguno cambia la propiedad de los archivos.
</details>

### Pregunta 10
¿Cuál de las siguientes configuraciones de `passdb backend` permite centralizar usuarios en un directorio LDAP?

a) `passdb backend = tdbsam`
b) `passdb backend = smbpasswd`
c) `passdb backend = ldapsam:ldap://ldap.ejemplo.com`
d) `passdb backend = adsam`

<details><summary>Respuesta</summary>

**c) `passdb backend = ldapsam:ldap://ldap.ejemplo.com`**

El backend `ldapsam` permite almacenar las cuentas Samba en un servidor LDAP externo, facilitando la centralización de usuarios en entornos con múltiples servidores. Requiere que el esquema LDAP de Samba esté instalado en el servidor LDAP. `tdbsam` y `smbpasswd` son backends locales.
</details>

### Pregunta 11

¿Qué módulo VFS permite la integración con snapshots del sistema de archivos para ofrecer "versiones anteriores" a los clientes Windows?

a) recycle
b) shadow_copy2
c) full_audit
d) acl_xattr

<details><summary>Respuesta</summary>

**b) shadow_copy2**

El módulo VFS `shadow_copy2` permite que los clientes Windows accedan a versiones anteriores de archivos (Previous Versions) integrándose con snapshots del sistema de archivos (LVM, ZFS, btrfs). Los clientes pueden restaurar archivos desde la pestaña "Versiones anteriores" del Explorador de Windows. `recycle` implementa papelera de reciclaje y `full_audit` registra operaciones.
</details>

### Pregunta 12

¿Qué variable de sustitución en smb.conf representa la dirección IP del cliente que se conecta?

a) `%m`
b) `%U`
c) `%I`
d) `%L`

<details><summary>Respuesta</summary>

**c) `%I`**

La variable `%I` se sustituye por la dirección IP del cliente que establece la conexión. Se utiliza frecuentemente en configuraciones de log y control de acceso. `%m` es el nombre NetBIOS del cliente, `%U` es el nombre de usuario solicitado y `%L` es el nombre NetBIOS del servidor.
</details>

### Pregunta 13

¿Cuál es el efecto del parámetro `security = share` en Samba 4?

a) Configura la seguridad a nivel de recurso compartido
b) Habilita el acceso anónimo a todos los recursos
c) Fue eliminado en Samba 4 y no es válido
d) Configura la autenticación mediante el recurso compartido

<details><summary>Respuesta</summary>

**c) Fue eliminado en Samba 4 y no es válido**

El modo `security = share` fue eliminado en Samba 4. En versiones anteriores permitía autenticación a nivel de recurso compartido en lugar de a nivel de usuario. En Samba 4, se debe usar `server role` para definir el rol del servidor. Para acceso sin autenticación se utiliza `guest ok = yes` en el recurso compartido junto con `map to guest = Bad User` en la sección global.
</details>

### Pregunta 14

Un administrador desea que Samba registre todas las operaciones de creación y eliminación de archivos en un recurso compartido. ¿Qué módulo VFS debe configurar?

a) recycle
b) catia
c) full_audit
d) streams_xattr

<details><summary>Respuesta</summary>

**c) full_audit**

El módulo VFS `full_audit` permite registrar operaciones detalladas sobre los archivos de un recurso compartido, incluyendo mkdir, rmdir, rename, unlink, write, entre otras. Se configura con parámetros como `full_audit:success` para operaciones exitosas y `full_audit:failure` para las fallidas, y puede enviar los registros a syslog.
</details>

### Pregunta 15

¿Qué parámetro de smb.conf controla la codificación de caracteres utilizada para los nombres de archivos en el sistema de archivos Linux?

a) `dos charset`
b) `display charset`
c) `unix charset`
d) `encoding`

<details><summary>Respuesta</summary>

**c) `unix charset`**

El parámetro `unix charset` define la codificación utilizada para almacenar los nombres de archivos en el sistema de archivos Linux, normalmente `UTF-8`. `dos charset` define la codificación para la comunicación con clientes DOS/Windows antiguos (típicamente CP850) y `display charset` controla la codificación de visualización. Es fundamental configurarlo correctamente para nombres con caracteres especiales.
</details>

### Pregunta 16

¿Qué ocurre cuando se define `hosts allow` tanto en la sección `[global]` como en una sección de recurso compartido?

a) Se combinan las dos listas de hosts permitidos
b) La configuración del recurso compartido sobrescribe la global
c) La configuración global siempre prevalece
d) Se produce un error de configuración

<details><summary>Respuesta</summary>

**b) La configuración del recurso compartido sobrescribe la global**

Cuando un parámetro se define tanto en `[global]` como en la sección de un recurso compartido, la configuración del recurso compartido sobrescribe a la global para ese recurso específico. Esto permite definir reglas de acceso más restrictivas o permisivas para recursos individuales. La sección `[global]` actúa como valores predeterminados.
</details>

### Pregunta 17

¿Qué módulo VFS es recomendado para garantizar la compatibilidad con clientes macOS y el servicio Time Machine?

a) catia
b) streams_xattr
c) fruit
d) crossrename

<details><summary>Respuesta</summary>

**c) fruit**

El módulo VFS `fruit` proporciona compatibilidad mejorada con clientes macOS, incluyendo soporte para Time Machine (copias de seguridad de macOS), metadatos de archivos del Finder, iconos personalizados y resource forks. Generalmente se utiliza junto con `streams_xattr` para almacenar los flujos de datos alternativos NTFS necesarios.
</details>

### Pregunta 18

¿Qué parámetro de smb.conf permite incluir archivos de configuración externos de forma condicional?

a) `config file`
b) `include`
c) `import`
d) `source`

<details><summary>Respuesta</summary>

**b) `include`**

El parámetro `include` permite incluir archivos de configuración externos en smb.conf. Soporta variables de sustitución, por ejemplo `include = /etc/samba/smb.conf.%m` incluiría un archivo diferente para cada cliente según su nombre NetBIOS. Si el archivo referenciado no existe, se ignora silenciosamente. Esto permite configuraciones dinámicas y modulares.
</details>

### Pregunta 19

¿Cuál es la diferencia entre los parámetros `valid users` y `write list` en una sección de recurso compartido?

a) Son sinónimos y tienen la misma función
b) `valid users` controla quién puede acceder al recurso; `write list` define quién tiene permisos de escritura
c) `valid users` aplica solo a usuarios locales; `write list` a usuarios de dominio
d) `write list` restringe acceso de lectura; `valid users` de escritura

<details><summary>Respuesta</summary>

**b) `valid users` controla quién puede acceder al recurso; `write list` define quién tiene permisos de escritura**

`valid users` define la lista de usuarios y grupos que tienen permiso para conectarse al recurso compartido. Si está vacío, todos los usuarios autenticados pueden acceder. `write list` especifica qué usuarios pueden escribir incluso si el recurso está configurado como `read only = yes`. Ambos aceptan nombres de usuario y grupos con prefijo `@`.
</details>

### Pregunta 20

¿Qué efecto tiene `use sendfile = yes` en el rendimiento de Samba?

a) Comprime los datos antes de enviarlos
b) Utiliza la llamada al sistema sendfile() para transferir archivos directamente del disco al socket, mejorando el rendimiento
c) Envía los archivos en fragmentos más pequeños
d) Habilita la transferencia de archivos en modo asíncrono

<details><summary>Respuesta</summary>

**b) Utiliza la llamada al sistema sendfile() para transferir archivos directamente del disco al socket, mejorando el rendimiento**

El parámetro `use sendfile = yes` permite a Samba utilizar la llamada al sistema `sendfile()` del kernel Linux, que transfiere datos directamente del descriptor de archivo al socket de red sin pasar por el espacio de usuario. Esto reduce copias de memoria y cambios de contexto, mejorando significativamente el rendimiento en la transferencia de archivos grandes.
</details>

### Pregunta 21

¿Qué comando se utiliza para verificar la sintaxis del archivo smb.conf y mostrar la configuración efectiva sin pausa interactiva?

<input type="text" class="fill-blank" data-answer="testparm -s" data-alt="testparm -s /etc/samba/smb.conf" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**testparm -s**

El comando `testparm -s` verifica la sintaxis de smb.conf y muestra la configuración efectiva sin la pausa interactiva (que pide presionar Enter). Es la forma más práctica para verificar la configuración de forma rápida o en scripts. Sin la opción `-s`, testparm espera confirmación del usuario antes de mostrar los resultados.
</details>

### Pregunta 22

¿Cuál es el parámetro de smb.conf que define el rol del servidor Samba como servidor independiente?

<input type="text" class="fill-blank" data-answer="server role = standalone server" data-alt="server role=standalone server" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**server role = standalone server**

El parámetro `server role = standalone server` configura Samba como un servidor independiente con autenticación local. En este modo, Samba no participa en ningún dominio y gestiona sus propias cuentas de usuario. Otros valores posibles son `member server`, `active directory domain controller`, `classic primary domain controller` y `classic backup domain controller`.
</details>

### Pregunta 23

¿Qué parámetro de smb.conf se configura con el valor `tdbsam` para definir el almacenamiento predeterminado de credenciales de usuario?

<input type="text" class="fill-blank" data-answer="passdb backend" data-alt="passdb backend = tdbsam" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**passdb backend**

El parámetro `passdb backend` define dónde se almacenan las credenciales de los usuarios de Samba. El valor predeterminado `tdbsam` utiliza una base de datos TDB almacenada en `/var/lib/samba/private/passdb.tdb`. Otros valores posibles son `smbpasswd` (archivo de texto plano, legacy) y `ldapsam` (directorio LDAP externo).
</details>

### Pregunta 24

¿Qué directiva de smb.conf se utiliza para especificar los módulos VFS que se cargarán en un recurso compartido?

<input type="text" class="fill-blank" data-answer="vfs objects" data-alt="vfs objects =" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vfs objects**

El parámetro `vfs objects` define la lista de módulos VFS (Virtual File System) que se cargan para un recurso compartido. Se pueden especificar múltiples módulos separados por espacios, por ejemplo: `vfs objects = acl_xattr recycle full_audit`. El orden de los módulos puede afectar su comportamiento, ya que se aplican como una pila.
</details>

### Pregunta 25

¿Qué variable de sustitución de smb.conf representa el directorio home del usuario conectado?

<input type="text" class="fill-blank" data-answer="%H" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**%H**

La variable `%H` se sustituye por el directorio home del usuario conectado según la información del sistema (`/etc/passwd` o NSS). Se utiliza frecuentemente en la sección `[homes]` para definir la ruta del recurso compartido personal. Otras variables importantes son `%U` (nombre de usuario), `%m` (nombre NetBIOS del cliente) y `%S` (nombre del recurso compartido).
</details>
