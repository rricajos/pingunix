---
title: "303.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.1"
---

# Flashcards: 303.1 - Comparticion De Archivos

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es el valor por defecto del parámetro `read only` en smb.conf?

</div>
<div class="flashcard-back">

**R:** b) yes. Por defecto, todos los recursos compartidos en Samba son de solo lectura (`read only = yes`). Es necesario establecer explícitamente `writable = yes` o `read only = no` para permitir la escritura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-002">
<div class="flashcard-front">

**P:** Un recurso compartido tiene `browseable = no`. ¿Qué efecto tiene esto?

</div>
<div class="flashcard-back">

**R:** c) El recurso no aparece en la lista al navegar, pero es accesible si se conoce el nombre. `browseable = no` solo oculta el recurso del listado de red. Los usuarios pueden acceder directamente escribiendo la ruta UNC completa (por ejemplo, `\\servidor\recurso`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué parámetro permite a ciertos usuarios escribir en un share que tiene `read only = yes`?

</div>
<div class="flashcard-back">

**R:** c) write list. `write list` define usuarios o grupos que tienen permisos de escritura incluso cuando el share está configurado como solo lectura (`read only = yes`). `write list` sobrescribe la restricción de solo lectura para los usuarios especificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-004">
<div class="flashcard-front">

**P:** Dada la siguiente configuración, ¿cuáles serán los permisos de un archivo nuevo creado con permisos solicitados 0777?

</div>
<div class="flashcard-back">

**R:** a) 0664. El cálculo es: primero se aplica `create mask` (AND): 0777 AND 0664 = 0664. Luego se aplica `force create mode` (OR): 0664 OR 0640 = 0664. El resultado final es 0664.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre `hide files` y `veto files`?

</div>
<div class="flashcard-back">

**R:** b) `hide files` oculta visualmente; `veto files` bloquea el acceso completamente. `hide files` solo oculta los archivos del listado de directorio, pero siguen siendo accesibles si se conoce el nombre. `veto files` impide completamente el acceso a los archivos que coinciden con los patrones especificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué hace la sección especial `[homes]` en smb.conf?

</div>
<div class="flashcard-back">

**R:** b) Proporciona automáticamente un share con el directorio personal de cada usuario. `[homes]` es una sección especial que crea dinámicamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio personal en el sistema Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-007">
<div class="flashcard-front">

**P:** Para activar el módulo de papelera de reciclaje en un share, ¿qué parámetro se utiliza?

</div>
<div class="flashcard-back">

**R:** c) vfs objects = recycle. El módulo de reciclaje se activa mediante `vfs objects = recycle`. VFS (Virtual File System) es el sistema de módulos extensibles de Samba, y `recycle` es uno de los módulos disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué valor de `map to guest` convierte en acceso de invitado las conexiones de usuarios que no existen en Samba?

</div>
<div class="flashcard-back">

**R:** c) Bad User. `map to guest = Bad User` mapea a invitado las conexiones realizadas con nombres de usuario que no existen en Samba. `Never` rechaza la conexión, `Bad Password` mapea cuando la contraseña es incorrecta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes configuraciones permite que el grupo `editores` tenga acceso de escritura mientras el resto solo puede leer?

</div>
<div class="flashcard-back">

**R:** b) `read only = yes` y `write list = @editores`. Con `read only = yes`, el share es de solo lectura por defecto. `write list = @editores` otorga permisos de escritura específicamente a los miembros del grupo `editores`, sobrescribiendo la restricción de solo lectura para ellos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué parámetro del módulo VFS recycle controla si se mantiene la estructura de directorios original al mover archivos a la papelera?

</div>
<div class="flashcard-back">

**R:** c) recycle:keeptree. `recycle:keeptree = yes` mantiene la estructura de directorios original dentro de la papelera de reciclaje. Esto facilita encontrar archivos eliminados ya que conservan su ubicación relativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué variable de smb.conf se sustituye por el nombre del usuario conectado al recurso compartido?

</div>
<div class="flashcard-back">

**R:** c) `%U`. La variable `%U` se sustituye por el nombre del usuario que se ha conectado al recurso compartido. Es útil en configuraciones como `template homedir = /home/%U` o en la sección `[homes]`. `%S` representa el nombre del servicio (share), `%G` el grupo primario del usuario y `%m` el nombre NetBIOS del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué efecto tiene `guest only = yes` en un recurso compartido que tiene `guest ok = yes`?

</div>
<div class="flashcard-back">

**R:** b) Fuerza que todos los accesos al share se realicen como invitado, independientemente de la autenticación. Cuando `guest only = yes` y `guest ok = yes`, todos los usuarios que acceden al recurso son tratados como invitados, sin importar si se autentican con credenciales válidas. Todas las operaciones de archivos se ejecutan con la identidad de la cuenta `guest account` (normalmente `nobody`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué parámetro del módulo VFS recycle permite mantener múltiples versiones de un archivo eliminado con el mismo nombre?

</div>
<div class="flashcard-back">

**R:** b) `recycle:versions`. `recycle:versions = yes` hace que cuando se elimina un archivo con el mismo nombre que otro ya existente en la papelera, se cree una copia con un sufijo numérico (por ejemplo, `archivo.txt`, `Copy #1 of archivo.txt`) en lugar de sobrescribirlo. Esto previene la pérdida de versiones anteriores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-014">
<div class="flashcard-front">

**P:** Dada la siguiente configuración, ¿cuáles serán los permisos de un archivo nuevo creado con permisos solicitados 0777?

</div>
<div class="flashcard-back">

**R:** a) 0770. El cálculo es: primero se aplica `create mask` (AND): 0777 AND 0770 = 0770. Luego se aplica `force create mode` (OR): 0770 OR 0020 = 0770. El bit 0020 ya estaba activo tras el mask, por lo que el OR no cambia nada. El resultado final es 0770.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `recycle` define el tamaño máximo de archivo que será enviado a la papelera en lugar de eliminarse definitivamente?

</div>
<div class="flashcard-back">

**R:** c) `recycle:maxsize`. `recycle:maxsize` define el tamaño máximo en bytes de un archivo para ser reciclado. Los archivos que excedan este tamaño se eliminan definitivamente sin pasar por la papelera. Por ejemplo, `recycle:maxsize = 104857600` establece el límite en 100 MB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-016">
<div class="flashcard-front">

**P:** En la sección `[homes]`, ¿qué variable se usa en `valid users` para restringir el acceso solo al propietario del directorio home?

</div>
<div class="flashcard-back">

**R:** b) `%S`. En la sección `[homes]`, `valid users = %S` utiliza la variable `%S` que se sustituye por el nombre del servicio. Cuando un usuario accede a su home, el nombre del servicio coincide con su nombre de usuario, asegurando que solo el propietario pueda acceder a su directorio personal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué ocurre si un recurso compartido tiene `veto files = /*.exe/` y `delete veto files = no`, y un usuario intenta eliminar un directorio que contiene archivos .exe?

</div>
<div class="flashcard-back">

**R:** b) El directorio no puede eliminarse porque contiene archivos vetados. Con `delete veto files = no` (valor predeterminado), un directorio que contenga archivos vetados no puede ser eliminado. Los archivos vetados son invisibles e inaccesibles, pero bloquean la eliminación del directorio padre. Para permitir la eliminación, se debe configurar `delete veto files = yes`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-018">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `force create mode` y `create mask`?

</div>
<div class="flashcard-back">

**R:** b) `create mask` aplica una operación AND (limita máximos); `force create mode` aplica un OR (garantiza mínimos). `create mask` realiza una operación AND con los permisos solicitados, eliminando bits que excedan la máscara. `force create mode` realiza una operación OR con el resultado, asegurando que ciertos bits siempre estén activos. El orden de aplicación es: primero `create mask` (AND), luego `force create mode` (OR).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf permite separar los patrones en `hide files` y `veto files`?

</div>
<div class="flashcard-back">

**R:** c) Barra (`/`). Los patrones en `hide files` y `veto files` se separan con barras (`/`). Por ejemplo: `veto files = /*.exe/*.bat/*.cmd/`. Los patrones soportan comodines `*` y `?`. La barra al inicio y al final también es necesaria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-020">
<div class="flashcard-front">

**P:** Un administrador quiere que un recurso compartido sea accesible para los usuarios del grupo `ventas`, pero que solo los miembros de `supervisores` puedan escribir. ¿Cuál es la configuración correcta?

</div>
<div class="flashcard-back">

**R:** b) `valid users = @ventas` y `read only = yes` y `write list = @supervisores`. Con `valid users = @ventas` se restringe el acceso al grupo ventas (los supervisores deben ser también miembros de ventas, o añadirse como `@ventas @supervisores`). `read only = yes` establece solo lectura por defecto. `write list = @supervisores` otorga permisos de escritura exclusivamente a los supervisores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para verificar la sintaxis del archivo de configuración `smb.conf`. <input type="text" class="fill-blank" data-answer="testparm" data-alt="testparm -s" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** testparm. `testparm` analiza el archivo `smb.conf`, verifica su sintaxis y muestra los errores encontrados. La opción `-s` suprime la solicitud de pulsar Enter para mostrar la configuración. Es una práctica recomendada ejecutar `testparm` después de cada cambio en `smb.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para listar los recursos compartidos disponibles en el servidor `fileserver` como el usuario `admin`. <input type="text" class="fill-blank" data-answer="smbclient -L //fileserver -U admin" data-alt="smbclient -L //fileserver/ -U admin" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbclient -L //fileserver -U admin. `smbclient -L` lista los recursos compartidos disponibles en el servidor especificado. La opción `-U admin` especifica el usuario para la autenticación. Este comando es útil para verificar qué shares están visibles desde la perspectiva del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-023">
<div class="flashcard-front">

**P:** Escriba el parámetro de smb.conf para excluir los archivos `.tmp` y `.temp` del módulo de papelera de reciclaje. <input type="text" class="fill-blank" data-answer="recycle:exclude = *.tmp *.temp" data-alt="recycle:exclude = *.tmp *.temp ~*" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** recycle:exclude = *.tmp *.temp. El parámetro `recycle:exclude` define patrones de archivos que no serán enviados a la papelera al eliminarse. Los patrones se separan por espacios. Los archivos que coincidan con estos patrones se eliminan definitivamente, sin pasar por el directorio de reciclaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-024">
<div class="flashcard-front">

**P:** Escriba el parámetro de smb.conf para ocultar los archivos `desktop.ini` y `thumbs.db` en un recurso compartido. <input type="text" class="fill-blank" data-answer="hide files = /desktop.ini/thumbs.db/" data-alt="hide files = /desktop.ini/Thumbs.db/" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** hide files = /desktop.ini/thumbs.db/. `hide files` oculta archivos del listado de directorio usando patrones separados por barras. Los archivos siguen siendo accesibles si se conoce el nombre exacto. Para bloquear completamente el acceso se debe usar `veto files` en su lugar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-025">
<div class="flashcard-front">

**P:** Escriba el parámetro de smb.conf para configurar que el directorio de la papelera de reciclaje se llame `.papelera` dentro de cada recurso compartido. <input type="text" class="fill-blank" data-answer="recycle:repository = .papelera" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** recycle:repository = .papelera. El parámetro `recycle:repository` define el nombre del directorio dentro del recurso compartido donde se almacenarán los archivos eliminados. Si no existe, Samba lo crea automáticamente cuando se elimina el primer archivo. El nombre con punto inicial lo oculta en listados de Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Cada sección en smb.conf (excepto `[global]`) define un recurso compartido. El n...

</div>
<div class="flashcard-back">

**R:** Cada sección en smb.conf (excepto `[global]`) define un recurso compartido. El nombre entre corchetes es el nombre con el que se accede desde la red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Un share con `browseable = no` sigue siendo accesible; simplemente no aparece al...

</div>
<div class="flashcard-back">

**R:** Un share con `browseable = no` sigue siendo accesible; simplemente no aparece al listar. No confundir con restricción de acceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `writable` y `read only` son opuestos. `read only = yes` es el valor por defecto...

</div>
<div class="flashcard-back">

**R:** `writable` y `read only` son opuestos. `read only = yes` es el valor por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `write list` sobrescribe `read only = yes` para los usuarios listados. `read lis...

</div>
<div class="flashcard-back">

**R:** `write list` sobrescribe `read only = yes` para los usuarios listados. `read list` sobrescribe `writable = yes`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: El orden de aplicación es: primero se aplica `create mask` (AND), luego `force c...

</div>
<div class="flashcard-back">

**R:** El orden de aplicación es: primero se aplica `create mask` (AND), luego `force create mode` (OR). El resultado final combina ambos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `[homes]` crea shares dinámicos basados en los directorios home de los usuarios ...

</div>
<div class="flashcard-back">

**R:** `[homes]` crea shares dinámicos basados en los directorios home de los usuarios del sistema. Con `browseable = no`, solo aparece el share del propio usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: `map to guest = Bad User` mapea a invitado las conexiones con usuarios que no ex...

</div>
<div class="flashcard-back">

**R:** `map to guest = Bad User` mapea a invitado las conexiones con usuarios que no existen en Samba. Esto es diferente de `Never` (rechaza) o `Bad Password` (mapea si la contraseña falla).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-033">
<div class="flashcard-front">

**P:** Tip de examen: `hide files` solo oculta visualmente; `veto files` bloquea el acceso completamen...

</div>
<div class="flashcard-back">

**R:** `hide files` solo oculta visualmente; `veto files` bloquea el acceso completamente. `delete veto files` controla si un directorio con archivos vetados puede eliminarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-034">
<div class="flashcard-front">

**P:** Tip de examen: VFS (Virtual File System) permite extender la funcionalidad de Samba con módulos...

</div>
<div class="flashcard-back">

**R:** VFS (Virtual File System) permite extender la funcionalidad de Samba con módulos. `recycle` es uno de los más comunes. Se activa con `vfs objects = recycle` en la sección del share o en `[global]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La compartición de archivos es una de las funcionalidades principales de Samba. A través del archivo de configuración `smb.conf`, los administradores definen los recursos compartidos (shares) que estar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Estructura básica de un recurso compartido en smb.conf?

</div>
<div class="flashcard-back">

**R:** Cada recurso compartido se define como una sección en `smb.conf` con corchetes:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son El recurso compartido [homes]?

</div>
<div class="flashcard-back">

**R:** El share especial `[homes]` proporciona directorios personales automáticos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Acceso de invitado (Guest Access)?

</div>
<div class="flashcard-back">

**R:** Para permitir acceso sin autenticación:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Módulo VFS de Papelera de Reciclaje?

</div>
<div class="flashcard-back">

**R:** El módulo VFS `recycle` implementa una papelera de reciclaje en Samba:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son Verificación de la configuración?

</div>
<div class="flashcard-back">

**R:** Siempre verificar `smb.conf` después de cambios:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-041">
<div class="flashcard-front">

**P:** Que es/son Variables útiles en smb.conf?

</div>
<div class="flashcard-back">

**R:** | Variable | Significado                          |

</div>
</div>

---

