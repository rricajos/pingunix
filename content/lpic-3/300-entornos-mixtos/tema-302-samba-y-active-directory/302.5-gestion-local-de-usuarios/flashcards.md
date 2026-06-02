---
title: "302.5 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.5"
---

# Flashcards: 302.5 - Gestion Local De Usuarios

> 40 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-001">
<div class="flashcard-front">

**P:** ¿Qué requisito debe cumplirse antes de poder añadir un usuario a la base de datos de Samba con `smbpasswd -a`?

</div>
<div class="flashcard-back">

**R:** b) El usuario debe existir en el sistema Linux (/etc/passwd). `smbpasswd -a` añade una contraseña Samba para un usuario que ya debe existir como usuario UNIX en `/etc/passwd`. Si el usuario no existe en el sistema, el comando fallará. Primero se debe crear el usuario con `useradd` y luego añadirlo a Samba con `smbpasswd -a`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-002">
<div class="flashcard-front">

**P:** ¿Qué ventaja tiene `pdbedit` sobre `smbpasswd` para la gestión de usuarios locales de Samba?

</div>
<div class="flashcard-back">

**R:** b) pdbedit permite modificar atributos extendidos como perfil, script de login y home de red. `pdbedit` es más completo que `smbpasswd`: permite gestionar atributos como el nombre completo, directorio home de red, letra de unidad, script de login, perfil de usuario y descripción. Además, permite exportar/importar la base de datos y migrar entre backends (de smbpasswd a tdbsam, por ejemplo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-003">
<div class="flashcard-front">

**P:** En el archivo de mapeo de usuarios (`username map`), ¿qué hace la entrada `root = administrator admin`?

</div>
<div class="flashcard-back">

**R:** b) Mapea los nombres Windows "administrator" y "admin" al usuario Unix "root". El formato del archivo username map es `usuario_unix = nombre_windows1 [nombre_windows2 ...]`. Cuando un cliente se conecta como "administrator" o "admin", Samba traduce ese nombre a "root" antes de la autenticación. Esto es útil para que el administrador de Windows pueda gestionar recursos como root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-004">
<div class="flashcard-front">

**P:** ¿Qué efecto tiene `force group = +proyecto` en un recurso compartido?

</div>
<div class="flashcard-back">

**R:** b) Fuerza el grupo "proyecto" solo si el usuario ya es miembro de ese grupo. El signo `+` antes del nombre del grupo indica que `force group` solo aplica si el usuario autenticado ya pertenece al grupo "proyecto". Si el usuario no es miembro, se utiliza su grupo primario normal. Sin el `+`, el grupo se fuerza para todos los usuarios sin importar su membresía.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `map to guest = Bad User` y `map to guest = Bad Password`?

</div>
<div class="flashcard-back">

**R:** b) "Bad User" mapea a invitado si el usuario no existe; "Bad Password" si la contraseña falla. `Bad User` mapea a la cuenta de invitado cuando el nombre de usuario enviado no existe en la base de datos de Samba. `Bad Password` mapea a invitado incluso cuando el usuario existe pero la contraseña es incorrecta, lo cual es inseguro porque un usuario legítimo con contraseña errónea obtendría acceso de invitado en lugar de un error de autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-006">
<div class="flashcard-front">

**P:** ¿Cómo se exporta la base de datos de usuarios de Samba al formato smbpasswd con pdbedit?

</div>
<div class="flashcard-back">

**R:** b) `pdbedit -e smbpasswd:/tmp/export.txt`. La opción `-e` (export) de `pdbedit` exporta la base de datos al formato especificado. La sintaxis es `pdbedit -e backend:ruta`. Se puede exportar a formato smbpasswd (texto plano) o tdbsam (base TDB). Para importar se usa `-i`: `pdbedit -i smbpasswd:/tmp/export.txt`. La opción `-L -w` también lista en formato smbpasswd pero es solo para visualización.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-007">
<div class="flashcard-front">

**P:** ¿Qué cuenta Unix se utiliza por defecto para los accesos de invitado en Samba?

</div>
<div class="flashcard-back">

**R:** c) nobody. Por defecto, Samba utiliza la cuenta `nobody` como cuenta de invitado (`guest account = nobody` en smb.conf). Esta cuenta debe existir en el sistema Linux. Los archivos creados por usuarios invitados pertenecerán a esta cuenta. Se puede cambiar con el parámetro `guest account` en la sección [global].

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-008">
<div class="flashcard-front">

**P:** Un administrador quiere que todos los archivos creados en el recurso compartido "web" pertenezcan al usuario "www-data" y al grupo "www-data". ¿Qué configuración necesita?

</div>
<div class="flashcard-back">

**R:** b) `force user = www-data` y `force group = www-data`. La combinación de `force user = www-data` y `force group = www-data` hace que todas las operaciones de archivos en el recurso compartido se realicen con la identidad de www-data, independientemente del usuario que se haya autenticado. Esto es común en recursos para servidores web donde todos los archivos deben pertenecer al usuario del servidor web.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-009">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf debe estar activado para que `getent passwd` muestre los usuarios del dominio a través de winbind?

</div>
<div class="flashcard-back">

**R:** b) `winbind enum users = yes`. El parámetro `winbind enum users = yes` permite que winbind enumere todos los usuarios del dominio, lo que hace posible que `getent passwd` (sin argumentos) liste los usuarios de dominio. Sin este parámetro, `getent passwd usuario_específico` puede funcionar, pero la lista completa no se mostrará. En dominios grandes, la enumeración puede ser lenta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito del comodín `!nobody = *` al final de un archivo username map?

</div>
<div class="flashcard-back">

**R:** c) Mapear todos los usuarios no mapeados previamente a "nobody" y detener la búsqueda. El carácter `!` indica que se debe detener el procesamiento del archivo de mapeo en esa línea. El `*` coincide con cualquier nombre de usuario. Juntos, `!nobody = *` mapea cualquier usuario que no haya coincidido con reglas anteriores al usuario Unix "nobody" y detiene la búsqueda. Sin el `!`, el procesamiento continuaría innecesariamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `smbpasswd` se utiliza para deshabilitar una cuenta de usuario en la base de datos Samba?

</div>
<div class="flashcard-back">

**R:** b) `smbpasswd -d usuario`. La opción `-d` de `smbpasswd` deshabilita una cuenta de usuario en la base de datos de Samba sin eliminarla. El usuario no podrá autenticarse hasta que la cuenta sea rehabilitada con `smbpasswd -e usuario`. La opción `-x` elimina completamente la cuenta de la base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando de `pdbedit` permite migrar la base de datos de usuarios del formato smbpasswd al formato tdbsam?

</div>
<div class="flashcard-back">

**R:** b) `pdbedit -i smbpasswd:/etc/samba/smbpasswd -e tdbsam:/var/lib/samba/private/passdb.tdb`. La opción `-i` (import) de `pdbedit` importa desde un backend y `-e` (export) exporta a otro backend. Combinadas, permiten migrar entre formatos. La sintaxis es `pdbedit -i origen:ruta -e destino:ruta`. Esta funcionalidad es exclusiva de `pdbedit`; `smbpasswd` no puede realizar migraciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-013">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf define la ruta del archivo de mapeo de nombres de usuario?

</div>
<div class="flashcard-back">

**R:** b) `username map = /etc/samba/smbusers`. El parámetro `username map` en la sección `[global]` de smb.conf especifica la ruta al archivo que contiene los mapeos de nombres de usuario. El formato del archivo es `usuario_unix = nombre_windows1 [nombre_windows2 ...]`. Los mapeos se aplican antes de la autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-014">
<div class="flashcard-front">

**P:** ¿Qué valor de `map to guest` se considera inseguro porque podría dar acceso de invitado a un usuario legítimo que escribió mal su contraseña?

</div>
<div class="flashcard-back">

**R:** c) `Bad Password`. `map to guest = Bad Password` es inseguro porque cuando un usuario legítimo introduce una contraseña incorrecta, en lugar de recibir un error de autenticación, se le concede acceso como invitado sin que lo sepa. Esto puede provocar pérdida de datos o confusión. `Bad User` es más seguro ya que solo mapea a invitado usuarios inexistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-015">
<div class="flashcard-front">

**P:** En el contexto de `force user` y `force group`, ¿qué sucede con la identidad del usuario autenticado?

</div>
<div class="flashcard-back">

**R:** b) El usuario autenticado mantiene sus permisos de Samba, pero las operaciones de archivos usan la identidad forzada. Cuando se usa `force user` o `force group`, el usuario se autentica normalmente con sus propias credenciales y Samba aplica las restricciones de acceso del share (valid users, write list, etc.). Sin embargo, todas las operaciones en el sistema de archivos (crear, modificar, eliminar archivos) se ejecutan con la identidad del usuario/grupo forzado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-016">
<div class="flashcard-front">

**P:** ¿Qué opción de `pdbedit` permite configurar el script que se ejecuta al iniciar sesión un usuario Windows?

</div>
<div class="flashcard-back">

**R:** b) `pdbedit -u usuario --logon-script="login.bat"`. La opción `--logon-script` de `pdbedit` establece el script de inicio de sesión que se ejecutará cuando el usuario inicie sesión desde un cliente Windows. Este script se busca en el share `[netlogon]`. Otros atributos configurables incluyen `--homedir`, `--drive`, `--profile` y `--fullname`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-017">
<div class="flashcard-front">

**P:** ¿Qué ocurre si se configura `winbind use default domain = yes` y existe un usuario local con el mismo nombre que un usuario del dominio?

</div>
<div class="flashcard-back">

**R:** b) Se puede producir un conflicto de identidades; el usuario local tiene prioridad según nsswitch.conf. Con `winbind use default domain = yes`, los usuarios del dominio se resuelven sin el prefijo de dominio. Si existe un usuario local con el mismo nombre, la resolución depende del orden en `/etc/nsswitch.conf`. Con `passwd: files winbind`, los archivos locales se consultan primero, por lo que el usuario local tiene prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando de `pdbedit` muestra la información detallada de un usuario específico, incluyendo SID, home de red y perfil?

</div>
<div class="flashcard-back">

**R:** b) `pdbedit -v -u usuario`. La combinación de `-v` (verbose) y `-u usuario` en `pdbedit` muestra información detallada del usuario incluyendo: SID, nombre completo, directorio home de red, letra de unidad, script de login, perfil, horas de acceso permitidas y flags de cuenta. `pdbedit -L` solo muestra un listado resumido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-019">
<div class="flashcard-front">

**P:** En un archivo `username map`, ¿cuándo se aplica la traducción de nombres en el proceso de autenticación?

</div>
<div class="flashcard-back">

**R:** b) Antes de la autenticación. El mapeo de nombres de usuario se aplica antes del proceso de autenticación. Primero Samba recibe el nombre enviado por el cliente Windows, lo traduce según las reglas del archivo de mapeo, y luego utiliza el nombre resultante para buscar al usuario en la base de datos y verificar la contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-020">
<div class="flashcard-front">

**P:** ¿Por qué es importante que los rangos idmap del comodín (`*`) y de los dominios específicos no se solapen?

</div>
<div class="flashcard-back">

**R:** b) Porque un mismo UID/GID podría asignarse a diferentes usuarios de diferentes dominios. Si los rangos idmap se solapan, es posible que un usuario del dominio comodín y un usuario del dominio específico reciban el mismo UID/GID, causando que uno pueda acceder a los archivos del otro. Además, los rangos no deben incluir UIDs/GIDs del sistema (normalmente < 1000) para evitar conflictos con cuentas locales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para añadir el usuario Linux `maria` a la base de datos local de Samba. <input type="text" class="fill-blank" data-answer="smbpasswd -a maria" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbpasswd -a maria. `smbpasswd -a` añade un usuario a la base de datos de contraseñas de Samba. El usuario `maria` debe existir previamente en el sistema Linux (`/etc/passwd`). El comando solicitará la nueva contraseña de Samba, que es independiente de la contraseña del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para listar todos los usuarios de la base de datos Samba mostrando información detallada. <input type="text" class="fill-blank" data-answer="pdbedit -L -v" data-alt="pdbedit -Lv" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** pdbedit -L -v. `pdbedit -L` lista todos los usuarios de la base de datos passdb y `-v` (verbose) muestra información detallada de cada uno, incluyendo SID, nombre completo, directorio home, script de login, perfil y flags de cuenta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-023">
<div class="flashcard-front">

**P:** Escriba el comando para eliminar completamente al usuario `carlos` de la base de datos de Samba usando `smbpasswd`. <input type="text" class="fill-blank" data-answer="smbpasswd -x carlos" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbpasswd -x carlos. `smbpasswd -x` elimina completamente al usuario de la base de datos de contraseñas de Samba. A diferencia de `-d` que solo deshabilita la cuenta, `-x` borra el registro. El usuario seguirá existiendo en el sistema Linux (`/etc/passwd`) y deberá eliminarse por separado si se desea.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-024">
<div class="flashcard-front">

**P:** Escriba el comando `pdbedit` para configurar la letra de unidad `H:` como mapeo del directorio home de red para el usuario `pedro`. <input type="text" class="fill-blank" data-answer="pdbedit -u pedro --drive=H:" data-alt='pdbedit -u pedro --drive="H:"' placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** pdbedit -u pedro --drive=H:. La opción `--drive` de `pdbedit` establece la letra de unidad que Windows mapeará automáticamente al directorio home de red del usuario al iniciar sesión. Se usa junto con `--homedir` que define la ruta UNC del home de red (por ejemplo, `\\servidor\pedro`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-025">
<div class="flashcard-front">

**P:** Escriba el comando para rehabilitar la cuenta Samba deshabilitada del usuario `ana`. <input type="text" class="fill-blank" data-answer="smbpasswd -e ana" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbpasswd -e ana. `smbpasswd -e` habilita una cuenta previamente deshabilitada con `smbpasswd -d`. La cuenta recupera su estado activo y el usuario puede volver a autenticarse en recursos compartidos de Samba. Esta operación no afecta a la cuenta del sistema Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `smbpasswd -a` requiere que el usuario UNIX exista previamente. La contraseña Sa...

</div>
<div class="flashcard-back">

**R:** `smbpasswd -a` requiere que el usuario UNIX exista previamente. La contraseña Samba y la contraseña UNIX son bases de datos separadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `pdbedit` permite operaciones que `smbpasswd` no puede, como migración entre bac...

</div>
<div class="flashcard-back">

**R:** `pdbedit` permite operaciones que `smbpasswd` no puede, como migración entre backends, exportación/importación y modificación de atributos extendidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: El archivo de mapeo traduce nombres ANTES de la autenticación. Es especialmente ...

</div>
<div class="flashcard-back">

**R:** El archivo de mapeo traduce nombres ANTES de la autenticación. Es especialmente útil para mapear "administrator" a "root" y para resolver diferencias de nombres entre Windows y Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conocer las diferencias entre las opciones de `map to guest` y cuándo es seguro ...

</div>
<div class="flashcard-back">

**R:** Conocer las diferencias entre las opciones de `map to guest` y cuándo es seguro usar cada una. `Bad User` es la opción más comúnmente usada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `--drive`?

</div>
<div class="flashcard-back">

**R:** Letra de unidad para mapear home

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--logon-script`?

</div>
<div class="flashcard-back">

**R:** Script ejecutado al iniciar sesión

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--profile`?

</div>
<div class="flashcard-back">

**R:** Ruta UNC del perfil de usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-033">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre la gestión de usuarios locales de Samba, incluyendo las herramientas smbpasswd y pdbedit, el mapeo de nombres de usuario, opciones de forzar usuario/grupo, cuenta de invitado y la in

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-034">
<div class="flashcard-front">

**P:** Que es/son smbpasswd - Gestión de contraseñas Samba?

</div>
<div class="flashcard-back">

**R:** `smbpasswd` es la herramienta clásica para gestionar contraseñas de usuarios en la base de datos local de Samba:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-035">
<div class="flashcard-front">

**P:** Que es/son pdbedit - Gestión avanzada de la base de datos de usuarios?

</div>
<div class="flashcard-back">

**R:** `pdbedit` es una herramienta más completa que `smbpasswd` para gestionar la base de datos passdb:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-036">
<div class="flashcard-front">

**P:** Que es/son Mapeo de nombres de usuario (username map)?

</div>
<div class="flashcard-back">

**R:** El parámetro `username map` permite traducir nombres de usuario entre los que envía el cliente Windows y los que existen en el sistema Linux:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-037">
<div class="flashcard-front">

**P:** Que es/son Force user y force group?

</div>
<div class="flashcard-back">

**R:** Estos parámetros fuerzan la identidad utilizada para operaciones de archivos en un recurso compartido:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-038">
<div class="flashcard-front">

**P:** Que es/son Cuenta de invitado (guest account)?

</div>
<div class="flashcard-back">

**R:** La cuenta de invitado permite acceso anónimo a recursos compartidos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-039">
<div class="flashcard-front">

**P:** Que es/son Rangos idmap locales?

</div>
<div class="flashcard-back">

**R:** Para servidores que usan tanto usuarios locales como de dominio, es importante definir rangos de ID no solapados:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.5">
</div>

<div class="flashcard" data-id="302.5-fc-040">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `smbpasswd` gestiona contraseñas locales de Samba; el usuario UNIX debe existir primero

</div>
</div>

---

