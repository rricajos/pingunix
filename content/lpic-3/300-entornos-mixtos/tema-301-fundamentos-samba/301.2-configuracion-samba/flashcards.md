---
title: "301.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.2"
---

# Flashcards: 301.2 - Configuracion Samba

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué herramienta se debe utilizar para verificar la sintaxis del archivo smb.conf?

</div>
<div class="flashcard-back">

**R:** b) testparm. `testparm` es la herramienta oficial para verificar la sintaxis y la validez de la configuración en smb.conf. Muestra advertencias sobre parámetros incorrectos o en desuso y presenta la configuración efectiva. Se recomienda ejecutarlo después de cada cambio en smb.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el backend de autenticación predeterminado en Samba 4?

</div>
<div class="flashcard-back">

**R:** c) tdbsam. `tdbsam` es el backend predeterminado desde Samba 3. Almacena las cuentas en una base de datos TDB (Trivial Database) en `/var/lib/samba/private/passdb.tdb`. Es adecuado para servidores independientes y entornos pequeños. `smbpasswd` es el formato legacy y `ldapsam` se usa para entornos distribuidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué sección especial de smb.conf crea automáticamente un recurso compartido para el directorio personal de cada usuario?

</div>
<div class="flashcard-back">

**R:** c) [homes]. La sección `[homes]` es una sección especial que crea dinámicamente un recurso compartido para el directorio home de cada usuario autenticado. Cuando un usuario se conecta, Samba busca primero un recurso con su nombre y, si no existe, comprueba si existe la sección [homes] y el usuario en el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-004">
<div class="flashcard-front">

**P:** En smb.conf, ¿qué variable se sustituye por el nombre NetBIOS del cliente que se conecta?

</div>
<div class="flashcard-back">

**R:** c) `%m`. La variable `%m` se sustituye por el nombre NetBIOS del cliente. `%U` es el nombre de usuario solicitado, `%I` es la dirección IP del cliente y `%L` es el nombre NetBIOS del servidor. Estas variables son útiles para crear logs separados por cliente: `log file = /var/log/samba/log.%m`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué valor del parámetro `server role` configura Samba como miembro de un dominio?

</div>
<div class="flashcard-back">

**R:** b) `member server`. El valor `member server` configura Samba como miembro de un dominio Active Directory o NT4. En este modo, Samba delega la autenticación al controlador de dominio. `standalone server` es para servidores independientes y `active directory domain controller` es para actuar como DC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es la función del módulo VFS `recycle`?

</div>
<div class="flashcard-back">

**R:** b) Implementa una papelera de reciclaje para archivos eliminados. El módulo VFS `recycle` intercepta las operaciones de eliminación de archivos y los mueve a un directorio de papelera (configurado con `recycle:repository`) en lugar de eliminarlos definitivamente. Permite configurar opciones como mantener la estructura de directorios (`keeptree`), versionar archivos (`versions`) y limitar el tamaño máximo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf limita las interfaces de red en las que Samba escucha peticiones?

</div>
<div class="flashcard-back">

**R:** c) `interfaces` junto con `bind interfaces only`. El parámetro `interfaces` define las interfaces o subredes en las que Samba acepta conexiones (ej: `interfaces = eth0 lo 192.168.1.0/24`). Para que la restricción sea efectiva, debe combinarse con `bind interfaces only = yes`. Sin este segundo parámetro, Samba escucha en todas las interfaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre `create mask` y `force create mode` en smb.conf?

</div>
<div class="flashcard-back">

**R:** b) `create mask` aplica un AND lógico; `force create mode` aplica un OR lógico. `create mask` (también llamado `create mode`) aplica una operación AND bit a bit con los permisos del archivo creado, eliminando bits de permiso. `force create mode` aplica una operación OR bit a bit, asegurando que ciertos bits estén siempre activos. Por ejemplo, `create mask = 0660` garantiza que "otros" nunca tengan permisos, mientras que `force create mode = 0040` asegura lectura para el grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-009">
<div class="flashcard-front">

**P:** Un administrador necesita que todos los archivos creados en un recurso compartido pertenezcan al grupo "contabilidad". ¿Qué parámetro debe usar?

</div>
<div class="flashcard-back">

**R:** c) `force group = contabilidad`. El parámetro `force group = contabilidad` hace que todas las operaciones de archivos en el recurso compartido se realicen con la identidad del grupo "contabilidad", independientemente del grupo primario del usuario. `valid users` restringe quién puede acceder y `write list` define quién puede escribir, pero ninguno cambia la propiedad de los archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes configuraciones de `passdb backend` permite centralizar usuarios en un directorio LDAP?

</div>
<div class="flashcard-back">

**R:** c) `passdb backend = ldapsam:ldap://ldap.ejemplo.com`. El backend `ldapsam` permite almacenar las cuentas Samba en un servidor LDAP externo, facilitando la centralización de usuarios en entornos con múltiples servidores. Requiere que el esquema LDAP de Samba esté instalado en el servidor LDAP. `tdbsam` y `smbpasswd` son backends locales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué módulo VFS permite la integración con snapshots del sistema de archivos para ofrecer "versiones anteriores" a los clientes Windows?

</div>
<div class="flashcard-back">

**R:** b) shadow_copy2. El módulo VFS `shadow_copy2` permite que los clientes Windows accedan a versiones anteriores de archivos (Previous Versions) integrándose con snapshots del sistema de archivos (LVM, ZFS, btrfs). Los clientes pueden restaurar archivos desde la pestaña "Versiones anteriores" del Explorador de Windows. `recycle` implementa papelera de reciclaje y `full_audit` registra operaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué variable de sustitución en smb.conf representa la dirección IP del cliente que se conecta?

</div>
<div class="flashcard-back">

**R:** c) `%I`. La variable `%I` se sustituye por la dirección IP del cliente que establece la conexión. Se utiliza frecuentemente en configuraciones de log y control de acceso. `%m` es el nombre NetBIOS del cliente, `%U` es el nombre de usuario solicitado y `%L` es el nombre NetBIOS del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-013">
<div class="flashcard-front">

**P:** ¿Cuál es el efecto del parámetro `security = share` en Samba 4?

</div>
<div class="flashcard-back">

**R:** c) Fue eliminado en Samba 4 y no es válido. El modo `security = share` fue eliminado en Samba 4. En versiones anteriores permitía autenticación a nivel de recurso compartido en lugar de a nivel de usuario. En Samba 4, se debe usar `server role` para definir el rol del servidor. Para acceso sin autenticación se utiliza `guest ok = yes` en el recurso compartido junto con `map to guest = Bad User` en la sección global.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-014">
<div class="flashcard-front">

**P:** Un administrador desea que Samba registre todas las operaciones de creación y eliminación de archivos en un recurso compartido. ¿Qué módulo VFS debe configurar?

</div>
<div class="flashcard-back">

**R:** c) full_audit. El módulo VFS `full_audit` permite registrar operaciones detalladas sobre los archivos de un recurso compartido, incluyendo mkdir, rmdir, rename, unlink, write, entre otras. Se configura con parámetros como `full_audit:success` para operaciones exitosas y `full_audit:failure` para las fallidas, y puede enviar los registros a syslog.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf controla la codificación de caracteres utilizada para los nombres de archivos en el sistema de archivos Linux?

</div>
<div class="flashcard-back">

**R:** c) `unix charset`. El parámetro `unix charset` define la codificación utilizada para almacenar los nombres de archivos en el sistema de archivos Linux, normalmente `UTF-8`. `dos charset` define la codificación para la comunicación con clientes DOS/Windows antiguos (típicamente CP850) y `display charset` controla la codificación de visualización. Es fundamental configurarlo correctamente para nombres con caracteres especiales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué ocurre cuando se define `hosts allow` tanto en la sección `[global]` como en una sección de recurso compartido?

</div>
<div class="flashcard-back">

**R:** b) La configuración del recurso compartido sobrescribe la global. Cuando un parámetro se define tanto en `[global]` como en la sección de un recurso compartido, la configuración del recurso compartido sobrescribe a la global para ese recurso específico. Esto permite definir reglas de acceso más restrictivas o permisivas para recursos individuales. La sección `[global]` actúa como valores predeterminados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué módulo VFS es recomendado para garantizar la compatibilidad con clientes macOS y el servicio Time Machine?

</div>
<div class="flashcard-back">

**R:** c) fruit. El módulo VFS `fruit` proporciona compatibilidad mejorada con clientes macOS, incluyendo soporte para Time Machine (copias de seguridad de macOS), metadatos de archivos del Finder, iconos personalizados y resource forks. Generalmente se utiliza junto con `streams_xattr` para almacenar los flujos de datos alternativos NTFS necesarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf permite incluir archivos de configuración externos de forma condicional?

</div>
<div class="flashcard-back">

**R:** b) `include`. El parámetro `include` permite incluir archivos de configuración externos en smb.conf. Soporta variables de sustitución, por ejemplo `include = /etc/samba/smb.conf.%m` incluiría un archivo diferente para cada cliente según su nombre NetBIOS. Si el archivo referenciado no existe, se ignora silenciosamente. Esto permite configuraciones dinámicas y modulares.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-019">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre los parámetros `valid users` y `write list` en una sección de recurso compartido?

</div>
<div class="flashcard-back">

**R:** b) `valid users` controla quién puede acceder al recurso; `write list` define quién tiene permisos de escritura. `valid users` define la lista de usuarios y grupos que tienen permiso para conectarse al recurso compartido. Si está vacío, todos los usuarios autenticados pueden acceder. `write list` especifica qué usuarios pueden escribir incluso si el recurso está configurado como `read only = yes`. Ambos aceptan nombres de usuario y grupos con prefijo `@`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué efecto tiene `use sendfile = yes` en el rendimiento de Samba?

</div>
<div class="flashcard-back">

**R:** b) Utiliza la llamada al sistema sendfile() para transferir archivos directamente del disco al socket, mejorando el rendimiento. El parámetro `use sendfile = yes` permite a Samba utilizar la llamada al sistema `sendfile()` del kernel Linux, que transfiere datos directamente del descriptor de archivo al socket de red sin pasar por el espacio de usuario. Esto reduce copias de memoria y cambios de contexto, mejorando significativamente el rendimiento en la transferencia de archivos grandes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar la sintaxis del archivo smb.conf y mostrar la configuración efectiva sin pausa interactiva?

</div>
<div class="flashcard-back">

**R:** testparm -s. El comando `testparm -s` verifica la sintaxis de smb.conf y muestra la configuración efectiva sin la pausa interactiva (que pide presionar Enter). Es la forma más práctica para verificar la configuración de forma rápida o en scripts. Sin la opción `-s`, testparm espera confirmación del usuario antes de mostrar los resultados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-022">
<div class="flashcard-front">

**P:** ¿Cuál es el parámetro de smb.conf que define el rol del servidor Samba como servidor independiente?

</div>
<div class="flashcard-back">

**R:** server role = standalone server. El parámetro `server role = standalone server` configura Samba como un servidor independiente con autenticación local. En este modo, Samba no participa en ningún dominio y gestiona sus propias cuentas de usuario. Otros valores posibles son `member server`, `active directory domain controller`, `classic primary domain controller` y `classic backup domain controller`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf se configura con el valor `tdbsam` para definir el almacenamiento predeterminado de credenciales de usuario?

</div>
<div class="flashcard-back">

**R:** passdb backend. El parámetro `passdb backend` define dónde se almacenan las credenciales de los usuarios de Samba. El valor predeterminado `tdbsam` utiliza una base de datos TDB almacenada en `/var/lib/samba/private/passdb.tdb`. Otros valores posibles son `smbpasswd` (archivo de texto plano, legacy) y `ldapsam` (directorio LDAP externo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué directiva de smb.conf se utiliza para especificar los módulos VFS que se cargarán en un recurso compartido?

</div>
<div class="flashcard-back">

**R:** vfs objects. El parámetro `vfs objects` define la lista de módulos VFS (Virtual File System) que se cargan para un recurso compartido. Se pueden especificar múltiples módulos separados por espacios, por ejemplo: `vfs objects = acl_xattr recycle full_audit`. El orden de los módulos puede afectar su comportamiento, ya que se aplican como una pila.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué variable de sustitución de smb.conf representa el directorio home del usuario conectado?

</div>
<div class="flashcard-back">

**R:** %H. La variable `%H` se sustituye por el directorio home del usuario conectado según la información del sistema (`/etc/passwd` o NSS). Se utiliza frecuentemente en la sección `[homes]` para definir la ruta del recurso compartido personal. Otras variables importantes son `%U` (nombre de usuario), `%m` (nombre NetBIOS del cliente) y `%S` (nombre del recurso compartido).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `testparm` es la herramienta obligatoria para verificar la sintaxis de smb.conf....

</div>
<div class="flashcard-back">

**R:** `testparm` es la herramienta obligatoria para verificar la sintaxis de smb.conf. Siempre debe ejecutarse después de cada cambio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El parámetro `security = share` fue eliminado en Samba 4. `server role` es la fo...

</div>
<div class="flashcard-back">

**R:** El parámetro `security = share` fue eliminado en Samba 4. `server role` es la forma moderna y preferida de configurar el modo de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `tdbsam` es el backend predeterminado. `ldapsam` se usa para entornos distribuid...

</div>
<div class="flashcard-back">

**R:** `tdbsam` es el backend predeterminado. `ldapsam` se usa para entornos distribuidos. `smbpasswd` es legacy y no recomendado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los parámetros de rendimiento más comunes y los módulos VFS principales....

</div>
<div class="flashcard-back">

**R:** Conocer los parámetros de rendimiento más comunes y los módulos VFS principales. `testparm` es imprescindible para verificar la configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `standalone server`?

</div>
<div class="flashcard-back">

**R:** Servidor independiente con autenticación local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `member server`?

</div>
<div class="flashcard-back">

**R:** Miembro de un dominio AD o NT4

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `%U`?

</div>
<div class="flashcard-back">

**R:** Nombre de usuario (solicitado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `acl_xattr`?

</div>
<div class="flashcard-back">

**R:** Almacena ACLs NT en atributos extendidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `recycle`?

</div>
<div class="flashcard-back">

**R:** Papelera de reciclaje para archivos eliminados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema abarca la configuración detallada de Samba mediante smb.conf, incluyendo modos de seguridad, backends de autenticación, módulos VFS y optimización de rendimiento. Es el subtema con mayor p

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Modos de seguridad (server role)?

</div>
<div class="flashcard-back">

**R:** El parámetro `server role` (anteriormente `security`) define el rol del servidor:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Backends de autenticación (passdb backend)?

</div>
<div class="flashcard-back">

**R:** El parámetro `passdb backend` define dónde se almacenan las credenciales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son Módulos VFS (Virtual File System)?

</div>
<div class="flashcard-back">

**R:** Los módulos VFS extienden la funcionalidad de los recursos compartidos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.2">
</div>

<div class="flashcard" data-id="301.2-fc-039">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - smb.conf se divide en [global] y secciones de recursos compartidos

</div>
</div>

---

