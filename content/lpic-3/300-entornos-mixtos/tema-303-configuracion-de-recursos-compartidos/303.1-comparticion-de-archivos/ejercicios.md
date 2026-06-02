---
title: "303.1 - Ejercicios: Compartición de Archivos"
description: "Ejercicios de práctica para compartición de archivos en Samba"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.1"
peso: 4
tags:
  - lpic-3
  - tema-303
  - samba
  - ejercicios
---

# 303.1 Ejercicios - Compartición de Archivos

### Pregunta 1
¿Cuál es el valor por defecto del parámetro `read only` en smb.conf?

a) no
b) yes
c) auto
d) inherit

<details><summary>Respuesta</summary>

**b) yes**

Por defecto, todos los recursos compartidos en Samba son de solo lectura (`read only = yes`). Es necesario establecer explícitamente `writable = yes` o `read only = no` para permitir la escritura.
</details>

### Pregunta 2
Un recurso compartido tiene `browseable = no`. ¿Qué efecto tiene esto?

a) Los usuarios no pueden acceder al recurso bajo ninguna circunstancia
b) Solo los administradores pueden ver el recurso
c) El recurso no aparece en la lista al navegar, pero es accesible si se conoce el nombre
d) El recurso se elimina del servidor

<details><summary>Respuesta</summary>

**c) El recurso no aparece en la lista al navegar, pero es accesible si se conoce el nombre**

`browseable = no` solo oculta el recurso del listado de red. Los usuarios pueden acceder directamente escribiendo la ruta UNC completa (por ejemplo, `\\servidor\recurso`).
</details>

### Pregunta 3
¿Qué parámetro permite a ciertos usuarios escribir en un share que tiene `read only = yes`?

a) valid users
b) read list
c) write list
d) force user

<details><summary>Respuesta</summary>

**c) write list**

`write list` define usuarios o grupos que tienen permisos de escritura incluso cuando el share está configurado como solo lectura (`read only = yes`). `write list` sobrescribe la restricción de solo lectura para los usuarios especificados.
</details>

### Pregunta 4
Dada la siguiente configuración, ¿cuáles serán los permisos de un archivo nuevo creado con permisos solicitados 0777?

```ini
create mask = 0664
force create mode = 0640
```

a) 0664
b) 0640
c) 0777
d) 0664

<details><summary>Respuesta</summary>

**a) 0664**

El cálculo es: primero se aplica `create mask` (AND): 0777 AND 0664 = 0664. Luego se aplica `force create mode` (OR): 0664 OR 0640 = 0664. El resultado final es 0664.
</details>

### Pregunta 5
¿Cuál es la diferencia principal entre `hide files` y `veto files`?

a) No hay diferencia, son sinónimos
b) `hide files` oculta visualmente; `veto files` bloquea el acceso completamente
c) `hide files` es para directorios; `veto files` es para archivos
d) `veto files` solo funciona en Windows; `hide files` en Linux

<details><summary>Respuesta</summary>

**b) `hide files` oculta visualmente; `veto files` bloquea el acceso completamente**

`hide files` solo oculta los archivos del listado de directorio, pero siguen siendo accesibles si se conoce el nombre. `veto files` impide completamente el acceso a los archivos que coinciden con los patrones especificados.
</details>

### Pregunta 6
¿Qué hace la sección especial `[homes]` en smb.conf?

a) Define el directorio home del servicio Samba
b) Proporciona automáticamente un share con el directorio personal de cada usuario
c) Configura el directorio de instalación de Samba
d) Define la ruta base para todos los shares

<details><summary>Respuesta</summary>

**b) Proporciona automáticamente un share con el directorio personal de cada usuario**

`[homes]` es una sección especial que crea dinámicamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio personal en el sistema Linux.
</details>

### Pregunta 7
Para activar el módulo de papelera de reciclaje en un share, ¿qué parámetro se utiliza?

a) recycle = yes
b) trash = on
c) vfs objects = recycle
d) enable recycle = true

<details><summary>Respuesta</summary>

**c) vfs objects = recycle**

El módulo de reciclaje se activa mediante `vfs objects = recycle`. VFS (Virtual File System) es el sistema de módulos extensibles de Samba, y `recycle` es uno de los módulos disponibles.
</details>

### Pregunta 8
¿Qué valor de `map to guest` convierte en acceso de invitado las conexiones de usuarios que no existen en Samba?

a) Never
b) Bad Password
c) Bad User
d) Always

<details><summary>Respuesta</summary>

**c) Bad User**

`map to guest = Bad User` mapea a invitado las conexiones realizadas con nombres de usuario que no existen en Samba. `Never` rechaza la conexión, `Bad Password` mapea cuando la contraseña es incorrecta.
</details>

### Pregunta 9
¿Cuál de las siguientes configuraciones permite que el grupo `editores` tenga acceso de escritura mientras el resto solo puede leer?

a) `writable = yes` y `read list = @editores`
b) `read only = yes` y `write list = @editores`
c) `writable = no` y `valid users = @editores`
d) `guest ok = yes` y `write list = @editores`

<details><summary>Respuesta</summary>

**b) `read only = yes` y `write list = @editores`**

Con `read only = yes`, el share es de solo lectura por defecto. `write list = @editores` otorga permisos de escritura específicamente a los miembros del grupo `editores`, sobrescribiendo la restricción de solo lectura para ellos.
</details>

### Pregunta 10
¿Qué parámetro del módulo VFS recycle controla si se mantiene la estructura de directorios original al mover archivos a la papelera?

a) recycle:versions
b) recycle:repository
c) recycle:keeptree
d) recycle:touch

<details><summary>Respuesta</summary>

**c) recycle:keeptree**

`recycle:keeptree = yes` mantiene la estructura de directorios original dentro de la papelera de reciclaje. Esto facilita encontrar archivos eliminados ya que conservan su ubicación relativa.
</details>

### Pregunta 11

¿Qué variable de smb.conf se sustituye por el nombre del usuario conectado al recurso compartido?

a) `%S`
b) `%G`
c) `%U`
d) `%m`

<details><summary>Respuesta</summary>

**c) `%U`**

La variable `%U` se sustituye por el nombre del usuario que se ha conectado al recurso compartido. Es útil en configuraciones como `template homedir = /home/%U` o en la sección `[homes]`. `%S` representa el nombre del servicio (share), `%G` el grupo primario del usuario y `%m` el nombre NetBIOS del cliente.
</details>

### Pregunta 12

¿Qué efecto tiene `guest only = yes` en un recurso compartido que tiene `guest ok = yes`?

a) Deshabilita el acceso de invitado
b) Fuerza que todos los accesos al share se realicen como invitado, independientemente de la autenticación
c) Solo permite acceso al usuario `guest` del sistema
d) Restringe el acceso a una única sesión de invitado simultánea

<details><summary>Respuesta</summary>

**b) Fuerza que todos los accesos al share se realicen como invitado, independientemente de la autenticación**

Cuando `guest only = yes` y `guest ok = yes`, todos los usuarios que acceden al recurso son tratados como invitados, sin importar si se autentican con credenciales válidas. Todas las operaciones de archivos se ejecutan con la identidad de la cuenta `guest account` (normalmente `nobody`).
</details>

### Pregunta 13

¿Qué parámetro del módulo VFS recycle permite mantener múltiples versiones de un archivo eliminado con el mismo nombre?

a) `recycle:keeptree`
b) `recycle:versions`
c) `recycle:touch`
d) `recycle:maxsize`

<details><summary>Respuesta</summary>

**b) `recycle:versions`**

`recycle:versions = yes` hace que cuando se elimina un archivo con el mismo nombre que otro ya existente en la papelera, se cree una copia con un sufijo numérico (por ejemplo, `archivo.txt`, `Copy #1 of archivo.txt`) en lugar de sobrescribirlo. Esto previene la pérdida de versiones anteriores.
</details>

### Pregunta 14

Dada la siguiente configuración, ¿cuáles serán los permisos de un archivo nuevo creado con permisos solicitados 0777?

```ini
create mask = 0770
force create mode = 0020
```

a) 0770
b) 0777
c) 0020
d) 0750

<details><summary>Respuesta</summary>

**a) 0770**

El cálculo es: primero se aplica `create mask` (AND): 0777 AND 0770 = 0770. Luego se aplica `force create mode` (OR): 0770 OR 0020 = 0770. El bit 0020 ya estaba activo tras el mask, por lo que el OR no cambia nada. El resultado final es 0770.
</details>

### Pregunta 15

¿Qué parámetro de `recycle` define el tamaño máximo de archivo que será enviado a la papelera en lugar de eliminarse definitivamente?

a) `recycle:maxfiles`
b) `recycle:limit`
c) `recycle:maxsize`
d) `recycle:threshold`

<details><summary>Respuesta</summary>

**c) `recycle:maxsize`**

`recycle:maxsize` define el tamaño máximo en bytes de un archivo para ser reciclado. Los archivos que excedan este tamaño se eliminan definitivamente sin pasar por la papelera. Por ejemplo, `recycle:maxsize = 104857600` establece el límite en 100 MB.
</details>

### Pregunta 16

En la sección `[homes]`, ¿qué variable se usa en `valid users` para restringir el acceso solo al propietario del directorio home?

a) `%U`
b) `%S`
c) `%H`
d) `%G`

<details><summary>Respuesta</summary>

**b) `%S`**

En la sección `[homes]`, `valid users = %S` utiliza la variable `%S` que se sustituye por el nombre del servicio. Cuando un usuario accede a su home, el nombre del servicio coincide con su nombre de usuario, asegurando que solo el propietario pueda acceder a su directorio personal.
</details>

### Pregunta 17

¿Qué ocurre si un recurso compartido tiene `veto files = /*.exe/` y `delete veto files = no`, y un usuario intenta eliminar un directorio que contiene archivos .exe?

a) El directorio y los archivos .exe se eliminan normalmente
b) El directorio no puede eliminarse porque contiene archivos vetados
c) Solo se eliminan los archivos .exe, el directorio permanece
d) Se muestra un error de permiso denegado

<details><summary>Respuesta</summary>

**b) El directorio no puede eliminarse porque contiene archivos vetados**

Con `delete veto files = no` (valor predeterminado), un directorio que contenga archivos vetados no puede ser eliminado. Los archivos vetados son invisibles e inaccesibles, pero bloquean la eliminación del directorio padre. Para permitir la eliminación, se debe configurar `delete veto files = yes`.
</details>

### Pregunta 18

¿Cuál es la diferencia entre `force create mode` y `create mask`?

a) Son sinónimos que hacen lo mismo
b) `create mask` aplica una operación AND (limita máximos); `force create mode` aplica un OR (garantiza mínimos)
c) `create mask` solo afecta archivos; `force create mode` solo directorios
d) `force create mode` se aplica antes que `create mask`

<details><summary>Respuesta</summary>

**b) `create mask` aplica una operación AND (limita máximos); `force create mode` aplica un OR (garantiza mínimos)**

`create mask` realiza una operación AND con los permisos solicitados, eliminando bits que excedan la máscara. `force create mode` realiza una operación OR con el resultado, asegurando que ciertos bits siempre estén activos. El orden de aplicación es: primero `create mask` (AND), luego `force create mode` (OR).
</details>

### Pregunta 19

¿Qué parámetro de smb.conf permite separar los patrones en `hide files` y `veto files`?

a) Coma (`,`)
b) Punto y coma (`;`)
c) Barra (`/`)
d) Espacio (` `)

<details><summary>Respuesta</summary>

**c) Barra (`/`)**

Los patrones en `hide files` y `veto files` se separan con barras (`/`). Por ejemplo: `veto files = /*.exe/*.bat/*.cmd/`. Los patrones soportan comodines `*` y `?`. La barra al inicio y al final también es necesaria.
</details>

### Pregunta 20

Un administrador quiere que un recurso compartido sea accesible para los usuarios del grupo `ventas`, pero que solo los miembros de `supervisores` puedan escribir. ¿Cuál es la configuración correcta?

a) `valid users = @ventas` y `writable = yes` y `read list = @supervisores`
b) `valid users = @ventas` y `read only = yes` y `write list = @supervisores`
c) `valid users = @supervisores` y `read only = no` y `read list = @ventas`
d) `valid users = @ventas @supervisores` y `writable = no`

<details><summary>Respuesta</summary>

**b) `valid users = @ventas` y `read only = yes` y `write list = @supervisores`**

Con `valid users = @ventas` se restringe el acceso al grupo ventas (los supervisores deben ser también miembros de ventas, o añadirse como `@ventas @supervisores`). `read only = yes` establece solo lectura por defecto. `write list = @supervisores` otorga permisos de escritura exclusivamente a los supervisores.
</details>

### Pregunta 21

Escriba el comando para verificar la sintaxis del archivo de configuración `smb.conf`.

<input type="text" class="fill-blank" data-answer="testparm" data-alt="testparm -s" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**testparm**

`testparm` analiza el archivo `smb.conf`, verifica su sintaxis y muestra los errores encontrados. La opción `-s` suprime la solicitud de pulsar Enter para mostrar la configuración. Es una práctica recomendada ejecutar `testparm` después de cada cambio en `smb.conf`.
</details>

### Pregunta 22

Escriba el comando para listar los recursos compartidos disponibles en el servidor `fileserver` como el usuario `admin`.

<input type="text" class="fill-blank" data-answer="smbclient -L //fileserver -U admin" data-alt="smbclient -L //fileserver/ -U admin" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbclient -L //fileserver -U admin**

`smbclient -L` lista los recursos compartidos disponibles en el servidor especificado. La opción `-U admin` especifica el usuario para la autenticación. Este comando es útil para verificar qué shares están visibles desde la perspectiva del cliente.
</details>

### Pregunta 23

Escriba el parámetro de smb.conf para excluir los archivos `.tmp` y `.temp` del módulo de papelera de reciclaje.

<input type="text" class="fill-blank" data-answer="recycle:exclude = *.tmp *.temp" data-alt="recycle:exclude = *.tmp *.temp ~*" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**recycle:exclude = *.tmp *.temp**

El parámetro `recycle:exclude` define patrones de archivos que no serán enviados a la papelera al eliminarse. Los patrones se separan por espacios. Los archivos que coincidan con estos patrones se eliminan definitivamente, sin pasar por el directorio de reciclaje.
</details>

### Pregunta 24

Escriba el parámetro de smb.conf para ocultar los archivos `desktop.ini` y `thumbs.db` en un recurso compartido.

<input type="text" class="fill-blank" data-answer="hide files = /desktop.ini/thumbs.db/" data-alt="hide files = /desktop.ini/Thumbs.db/" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**hide files = /desktop.ini/thumbs.db/**

`hide files` oculta archivos del listado de directorio usando patrones separados por barras. Los archivos siguen siendo accesibles si se conoce el nombre exacto. Para bloquear completamente el acceso se debe usar `veto files` en su lugar.
</details>

### Pregunta 25

Escriba el parámetro de smb.conf para configurar que el directorio de la papelera de reciclaje se llame `.papelera` dentro de cada recurso compartido.

<input type="text" class="fill-blank" data-answer="recycle:repository = .papelera" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**recycle:repository = .papelera**

El parámetro `recycle:repository` define el nombre del directorio dentro del recurso compartido donde se almacenarán los archivos eliminados. Si no existe, Samba lo crea automáticamente cuando se elimina el primer archivo. El nombre con punto inicial lo oculta en listados de Linux.
</details>
