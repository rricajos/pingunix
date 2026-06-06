---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "302"
subtema: "302.5"
titulo: "Gestión Local de Usuarios - Ejercicios"
peso: 2
tags:
  - lpic-3
  - tema-302
  - ejercicios
---

# Ejercicios - 302.5 Gestión Local de Usuarios

### Pregunta 1
¿Qué requisito debe cumplirse antes de poder añadir un usuario a la base de datos de Samba con `smbpasswd -a`?

a) El usuario debe existir en Active Directory
b) El usuario debe existir en el sistema Linux (/etc/passwd)
c) El usuario debe tener un directorio home
d) El usuario debe pertenecer al grupo samba

<details><summary>Respuesta</summary>

**b) El usuario debe existir en el sistema Linux (/etc/passwd)**

`smbpasswd -a` añade una contraseña Samba para un usuario que ya debe existir como usuario UNIX en `/etc/passwd`. Si el usuario no existe en el sistema, el comando fallará. Primero se debe crear el usuario con `useradd` y luego añadirlo a Samba con `smbpasswd -a`.
</details>

### Pregunta 2
¿Qué ventaja tiene `pdbedit` sobre `smbpasswd` para la gestión de usuarios locales de Samba?

a) pdbedit es más rápido
b) pdbedit permite modificar atributos extendidos como perfil, script de login y home de red
c) pdbedit no requiere que el usuario exista en /etc/passwd
d) pdbedit funciona con Active Directory

<details><summary>Respuesta</summary>

**b) pdbedit permite modificar atributos extendidos como perfil, script de login y home de red**

`pdbedit` es más completo que `smbpasswd`: permite gestionar atributos como el nombre completo, directorio home de red, letra de unidad, script de login, perfil de usuario y descripción. Además, permite exportar/importar la base de datos y migrar entre backends (de smbpasswd a tdbsam, por ejemplo).
</details>

### Pregunta 3
En el archivo de mapeo de usuarios (`username map`), ¿qué hace la entrada `root = administrator admin`?

a) Crea los usuarios administrator y admin como alias de root
b) Mapea los nombres Windows "administrator" y "admin" al usuario Unix "root"
c) Impide que administrator y admin se conecten como root
d) Sincroniza las contraseñas entre root, administrator y admin

<details><summary>Respuesta</summary>

**b) Mapea los nombres Windows "administrator" y "admin" al usuario Unix "root"**

El formato del archivo username map es `usuario_unix = nombre_windows1 [nombre_windows2 ...]`. Cuando un cliente se conecta como "administrator" o "admin", Samba traduce ese nombre a "root" antes de la autenticación. Esto es útil para que el administrador de Windows pueda gestionar recursos como root.
</details>

### Pregunta 4
¿Qué efecto tiene `force group = +proyecto` en un recurso compartido?

a) Fuerza el grupo "proyecto" para todos los usuarios
b) Fuerza el grupo "proyecto" solo si el usuario ya es miembro de ese grupo
c) Añade automáticamente al usuario al grupo "proyecto"
d) Crea el grupo "proyecto" si no existe

<details><summary>Respuesta</summary>

**b) Fuerza el grupo "proyecto" solo si el usuario ya es miembro de ese grupo**

El signo `+` antes del nombre del grupo indica que `force group` solo aplica si el usuario autenticado ya pertenece al grupo "proyecto". Si el usuario no es miembro, se utiliza su grupo primario normal. Sin el `+`, el grupo se fuerza para todos los usuarios sin importar su membresía.
</details>

### Pregunta 5
¿Cuál es la diferencia entre `map to guest = Bad User` y `map to guest = Bad Password`?

a) No hay diferencia
b) "Bad User" mapea a invitado si el usuario no existe; "Bad Password" si la contraseña falla
c) "Bad User" es más moderno; "Bad Password" es legacy
d) "Bad User" requiere winbind; "Bad Password" no

<details><summary>Respuesta</summary>

**b) "Bad User" mapea a invitado si el usuario no existe; "Bad Password" si la contraseña falla**

`Bad User` mapea a la cuenta de invitado cuando el nombre de usuario enviado no existe en la base de datos de Samba. `Bad Password` mapea a invitado incluso cuando el usuario existe pero la contraseña es incorrecta, lo cual es inseguro porque un usuario legítimo con contraseña errónea obtendría acceso de invitado en lugar de un error de autenticación.
</details>

### Pregunta 6
¿Cómo se exporta la base de datos de usuarios de Samba al formato smbpasswd con pdbedit?

a) `pdbedit --export smbpasswd`
b) `pdbedit -e smbpasswd:/tmp/export.txt`
c) `pdbedit -L -w > /tmp/export.txt`
d) `pdbedit --dump /tmp/export.txt`

<details><summary>Respuesta</summary>

**b) `pdbedit -e smbpasswd:/tmp/export.txt`**

La opción `-e` (export) de `pdbedit` exporta la base de datos al formato especificado. La sintaxis es `pdbedit -e backend:ruta`. Se puede exportar a formato smbpasswd (texto plano) o tdbsam (base TDB). Para importar se usa `-i`: `pdbedit -i smbpasswd:/tmp/export.txt`. La opción `-L -w` también lista en formato smbpasswd pero es solo para visualización.
</details>

### Pregunta 7
¿Qué cuenta Unix se utiliza por defecto para los accesos de invitado en Samba?

a) guest
b) samba
c) nobody
d) anonymous

<details><summary>Respuesta</summary>

**c) nobody**

Por defecto, Samba utiliza la cuenta `nobody` como cuenta de invitado (`guest account = nobody` en smb.conf). Esta cuenta debe existir en el sistema Linux. Los archivos creados por usuarios invitados pertenecerán a esta cuenta. Se puede cambiar con el parámetro `guest account` en la sección [global].
</details>

### Pregunta 8
Un administrador quiere que todos los archivos creados en el recurso compartido "web" pertenezcan al usuario "www-data" y al grupo "www-data". ¿Qué configuración necesita?

a) `valid users = www-data`
b) `force user = www-data` y `force group = www-data`
c) `create mask = www-data:www-data`
d) `owner = www-data`

<details><summary>Respuesta</summary>

**b) `force user = www-data` y `force group = www-data`**

La combinación de `force user = www-data` y `force group = www-data` hace que todas las operaciones de archivos en el recurso compartido se realicen con la identidad de www-data, independientemente del usuario que se haya autenticado. Esto es común en recursos para servidores web donde todos los archivos deben pertenecer al usuario del servidor web.
</details>

### Pregunta 9
¿Qué parámetro de smb.conf debe estar activado para que `getent passwd` muestre los usuarios del dominio a través de winbind?

a) `winbind use default domain = yes`
b) `winbind enum users = yes`
c) `security = ads`
d) `passdb backend = tdbsam`

<details><summary>Respuesta</summary>

**b) `winbind enum users = yes`**

El parámetro `winbind enum users = yes` permite que winbind enumere todos los usuarios del dominio, lo que hace posible que `getent passwd` (sin argumentos) liste los usuarios de dominio. Sin este parámetro, `getent passwd usuario_específico` puede funcionar, pero la lista completa no se mostrará. En dominios grandes, la enumeración puede ser lenta.
</details>

### Pregunta 10
¿Cuál es el propósito del comodín `!nobody = *` al final de un archivo username map?

a) Eliminar al usuario nobody
b) Bloquear todos los accesos no mapeados
c) Mapear todos los usuarios no mapeados previamente a "nobody" y detener la búsqueda
d) Crear un usuario nobody para cada conexión

<details><summary>Respuesta</summary>

**c) Mapear todos los usuarios no mapeados previamente a "nobody" y detener la búsqueda**

El carácter `!` indica que se debe detener el procesamiento del archivo de mapeo en esa línea. El `*` coincide con cualquier nombre de usuario. Juntos, `!nobody = *` mapea cualquier usuario que no haya coincidido con reglas anteriores al usuario Unix "nobody" y detiene la búsqueda. Sin el `!`, el procesamiento continuaría innecesariamente.
</details>

### Pregunta 11

¿Qué opción de `smbpasswd` se utiliza para deshabilitar una cuenta de usuario en la base de datos Samba?

a) `smbpasswd -x usuario`
b) `smbpasswd -d usuario`
c) `smbpasswd -l usuario`
d) `smbpasswd -D usuario`

<details><summary>Respuesta</summary>

**b) `smbpasswd -d usuario`**

La opción `-d` de `smbpasswd` deshabilita una cuenta de usuario en la base de datos de Samba sin eliminarla. El usuario no podrá autenticarse hasta que la cuenta sea rehabilitada con `smbpasswd -e usuario`. La opción `-x` elimina completamente la cuenta de la base de datos.
</details>

### Pregunta 12

¿Qué comando de `pdbedit` permite migrar la base de datos de usuarios del formato smbpasswd al formato tdbsam?

a) `pdbedit --migrate smbpasswd tdbsam`
b) `pdbedit -i smbpasswd:/etc/samba/smbpasswd -e tdbsam:/var/lib/samba/private/passdb.tdb`
c) `pdbedit --convert smbpasswd tdbsam`
d) `pdbedit -m smbpasswd -t tdbsam`

<details><summary>Respuesta</summary>

**b) `pdbedit -i smbpasswd:/etc/samba/smbpasswd -e tdbsam:/var/lib/samba/private/passdb.tdb`**

La opción `-i` (import) de `pdbedit` importa desde un backend y `-e` (export) exporta a otro backend. Combinadas, permiten migrar entre formatos. La sintaxis es `pdbedit -i origen:ruta -e destino:ruta`. Esta funcionalidad es exclusiva de `pdbedit`; `smbpasswd` no puede realizar migraciones.
</details>

### Pregunta 13

¿Qué parámetro de smb.conf define la ruta del archivo de mapeo de nombres de usuario?

a) `user map = /etc/samba/smbusers`
b) `username map = /etc/samba/smbusers`
c) `name map = /etc/samba/smbusers`
d) `user translation = /etc/samba/smbusers`

<details><summary>Respuesta</summary>

**b) `username map = /etc/samba/smbusers`**

El parámetro `username map` en la sección `[global]` de smb.conf especifica la ruta al archivo que contiene los mapeos de nombres de usuario. El formato del archivo es `usuario_unix = nombre_windows1 [nombre_windows2 ...]`. Los mapeos se aplican antes de la autenticación.
</details>

### Pregunta 14

¿Qué valor de `map to guest` se considera inseguro porque podría dar acceso de invitado a un usuario legítimo que escribió mal su contraseña?

a) `Never`
b) `Bad User`
c) `Bad Password`
d) `Bad Uid`

<details><summary>Respuesta</summary>

**c) `Bad Password`**

`map to guest = Bad Password` es inseguro porque cuando un usuario legítimo introduce una contraseña incorrecta, en lugar de recibir un error de autenticación, se le concede acceso como invitado sin que lo sepa. Esto puede provocar pérdida de datos o confusión. `Bad User` es más seguro ya que solo mapea a invitado usuarios inexistentes.
</details>

### Pregunta 15

En el contexto de `force user` y `force group`, ¿qué sucede con la identidad del usuario autenticado?

a) Se reemplaza completamente, incluyendo los permisos de Samba
b) El usuario autenticado mantiene sus permisos de Samba, pero las operaciones de archivos usan la identidad forzada
c) Solo se cambia el grupo primario, no el usuario
d) Se crea una cuenta temporal con la identidad forzada

<details><summary>Respuesta</summary>

**b) El usuario autenticado mantiene sus permisos de Samba, pero las operaciones de archivos usan la identidad forzada**

Cuando se usa `force user` o `force group`, el usuario se autentica normalmente con sus propias credenciales y Samba aplica las restricciones de acceso del share (valid users, write list, etc.). Sin embargo, todas las operaciones en el sistema de archivos (crear, modificar, eliminar archivos) se ejecutan con la identidad del usuario/grupo forzado.
</details>

### Pregunta 16

¿Qué opción de `pdbedit` permite configurar el script que se ejecuta al iniciar sesión un usuario Windows?

a) `pdbedit -u usuario --startup="login.bat"`
b) `pdbedit -u usuario --logon-script="login.bat"`
c) `pdbedit -u usuario --script="login.bat"`
d) `pdbedit -u usuario --login-cmd="login.bat"`

<details><summary>Respuesta</summary>

**b) `pdbedit -u usuario --logon-script="login.bat"`**

La opción `--logon-script` de `pdbedit` establece el script de inicio de sesión que se ejecutará cuando el usuario inicie sesión desde un cliente Windows. Este script se busca en el share `[netlogon]`. Otros atributos configurables incluyen `--homedir`, `--drive`, `--profile` y `--fullname`.
</details>

### Pregunta 17

¿Qué ocurre si se configura `winbind use default domain = yes` y existe un usuario local con el mismo nombre que un usuario del dominio?

a) Se muestra un error y ambos usuarios quedan bloqueados
b) Se puede producir un conflicto de identidades; el usuario local tiene prioridad según nsswitch.conf
c) Winbind renombra automáticamente al usuario del dominio
d) Se fusionan ambas cuentas en una sola

<details><summary>Respuesta</summary>

**b) Se puede producir un conflicto de identidades; el usuario local tiene prioridad según nsswitch.conf**

Con `winbind use default domain = yes`, los usuarios del dominio se resuelven sin el prefijo de dominio. Si existe un usuario local con el mismo nombre, la resolución depende del orden en `/etc/nsswitch.conf`. Con `passwd: files winbind`, los archivos locales se consultan primero, por lo que el usuario local tiene prioridad.
</details>

### Pregunta 18

¿Qué comando de `pdbedit` muestra la información detallada de un usuario específico, incluyendo SID, home de red y perfil?

a) `pdbedit -L usuario`
b) `pdbedit -v -u usuario`
c) `pdbedit --info usuario`
d) `pdbedit -s usuario`

<details><summary>Respuesta</summary>

**b) `pdbedit -v -u usuario`**

La combinación de `-v` (verbose) y `-u usuario` en `pdbedit` muestra información detallada del usuario incluyendo: SID, nombre completo, directorio home de red, letra de unidad, script de login, perfil, horas de acceso permitidas y flags de cuenta. `pdbedit -L` solo muestra un listado resumido.
</details>

### Pregunta 19

En un archivo `username map`, ¿cuándo se aplica la traducción de nombres en el proceso de autenticación?

a) Después de verificar la contraseña
b) Antes de la autenticación
c) Solo durante la creación de sesión
d) Al cerrar la sesión del usuario

<details><summary>Respuesta</summary>

**b) Antes de la autenticación**

El mapeo de nombres de usuario se aplica antes del proceso de autenticación. Primero Samba recibe el nombre enviado por el cliente Windows, lo traduce según las reglas del archivo de mapeo, y luego utiliza el nombre resultante para buscar al usuario en la base de datos y verificar la contraseña.
</details>

### Pregunta 20

¿Por qué es importante que los rangos idmap del comodín (`*`) y de los dominios específicos no se solapen?

a) Por razones de rendimiento
b) Porque un mismo UID/GID podría asignarse a diferentes usuarios de diferentes dominios
c) Porque Samba no arranca con rangos solapados
d) Porque Windows no permite rangos solapados

<details><summary>Respuesta</summary>

**b) Porque un mismo UID/GID podría asignarse a diferentes usuarios de diferentes dominios**

Si los rangos idmap se solapan, es posible que un usuario del dominio comodín y un usuario del dominio específico reciban el mismo UID/GID, causando que uno pueda acceder a los archivos del otro. Además, los rangos no deben incluir UIDs/GIDs del sistema (normalmente < 1000) para evitar conflictos con cuentas locales.
</details>

### Pregunta 21

Escriba el comando para añadir el usuario Linux `maria` a la base de datos local de Samba.

<input type="text" class="fill-blank" data-answer="smbpasswd -a maria" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbpasswd -a maria**

`smbpasswd -a` añade un usuario a la base de datos de contraseñas de Samba. El usuario `maria` debe existir previamente en el sistema Linux (`/etc/passwd`). El comando solicitará la nueva contraseña de Samba, que es independiente de la contraseña del sistema.
</details>

### Pregunta 22

Escriba el comando para listar todos los usuarios de la base de datos Samba mostrando información detallada.

<input type="text" class="fill-blank" data-answer="pdbedit -L -v" data-alt="pdbedit -Lv" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pdbedit -L -v**

`pdbedit -L` lista todos los usuarios de la base de datos passdb y `-v` (verbose) muestra información detallada de cada uno, incluyendo SID, nombre completo, directorio home, script de login, perfil y flags de cuenta.
</details>

### Pregunta 23

Escriba el comando para eliminar completamente al usuario `carlos` de la base de datos de Samba usando `smbpasswd`.

<input type="text" class="fill-blank" data-answer="smbpasswd -x carlos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbpasswd -x carlos**

`smbpasswd -x` elimina completamente al usuario de la base de datos de contraseñas de Samba. A diferencia de `-d` que solo deshabilita la cuenta, `-x` borra el registro. El usuario seguirá existiendo en el sistema Linux (`/etc/passwd`) y deberá eliminarse por separado si se desea.
</details>

### Pregunta 24

Escriba el comando `pdbedit` para configurar la letra de unidad `H:` como mapeo del directorio home de red para el usuario `pedro`.

<input type="text" class="fill-blank" data-answer="pdbedit -u pedro --drive=H:" data-alt='pdbedit -u pedro --drive="H:"' placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pdbedit -u pedro --drive=H:**

La opción `--drive` de `pdbedit` establece la letra de unidad que Windows mapeará automáticamente al directorio home de red del usuario al iniciar sesión. Se usa junto con `--homedir` que define la ruta UNC del home de red (por ejemplo, `\\servidor\pedro`).
</details>

### Pregunta 25

Escriba el comando para rehabilitar la cuenta Samba deshabilitada del usuario `ana`.

<input type="text" class="fill-blank" data-answer="smbpasswd -e ana" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbpasswd -e ana**

`smbpasswd -e` habilita una cuenta previamente deshabilitada con `smbpasswd -d`. La cuenta recupera su estado activo y el usuario puede volver a autenticarse en recursos compartidos de Samba. Esta operación no afecta a la cuenta del sistema Linux.
</details>
