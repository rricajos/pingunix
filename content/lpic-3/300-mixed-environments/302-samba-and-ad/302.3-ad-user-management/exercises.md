---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "302"
subtema: "302.3"
titulo: "Gestión de Usuarios AD - Ejercicios"
peso: 3
tags:
  - lpic-3
  - tema-302
  - ejercicios
---

# Ejercicios - 302.3 Gestión de Usuarios en Active Directory

### Pregunta 1
¿Qué comando crea un nuevo usuario "maria" con contraseña en el dominio AD de Samba?

a) `samba-tool user add maria 'P@ss123'`
b) `samba-tool user create maria 'P@ss123'`
c) `smbpasswd -a maria`
d) `net ads user add maria`

<details><summary>Respuesta</summary>

**b) `samba-tool user create maria 'P@ss123'`**

`samba-tool user create` es el comando para crear usuarios en un dominio AD de Samba. La contraseña debe cumplir la política de complejidad del dominio. `smbpasswd -a` solo funciona para usuarios locales de Samba (no AD). `net ads user add` no es un comando válido.
</details>

### Pregunta 2
¿Qué comando muestra la política de contraseñas actual del dominio AD?

a) `samba-tool password policy`
b) `samba-tool domain passwordsettings show`
c) `net ads passwordsettings`
d) `samba-tool user passwordpolicy`

<details><summary>Respuesta</summary>

**b) `samba-tool domain passwordsettings show`**

`samba-tool domain passwordsettings show` muestra la configuración actual de la política de contraseñas del dominio, incluyendo longitud mínima, complejidad, historial, edades mínima y máxima, y parámetros de bloqueo de cuenta. Se modifica con `samba-tool domain passwordsettings set`.
</details>

### Pregunta 3
¿Qué backend idmap calcula el UID/GID directamente a partir del RID del SID, sin necesidad de almacenamiento adicional?

a) tdb
b) ad
c) rid
d) autorid

<details><summary>Respuesta</summary>

**c) rid**

El backend `rid` calcula el UID/GID aplicando una fórmula basada en el RID (Relative ID) del SID de Windows, sumándolo al inicio del rango configurado. No requiere almacenamiento de estado ni atributos adicionales en AD. El resultado es determinista: el mismo SID siempre produce el mismo UID/GID en cualquier servidor con la misma configuración.
</details>

### Pregunta 4
¿Qué herramienta de Windows se utiliza para administrar usuarios y grupos en un dominio Samba AD?

a) Windows PowerShell
b) Computer Management
c) Active Directory Users and Computers (RSAT)
d) Control Panel

<details><summary>Respuesta</summary>

**c) Active Directory Users and Computers (RSAT)**

Active Directory Users and Computers (ADUC), parte de las herramientas RSAT (Remote Server Administration Tools), es la herramienta gráfica estándar para administrar usuarios, grupos, OUs y equipos en un dominio AD. Funciona con Samba AD DC desde un equipo Windows unido al dominio.
</details>

### Pregunta 5
¿Cómo se añaden los usuarios "pedro" y "maria" al grupo "desarrollo" en un dominio Samba AD?

a) `samba-tool group add desarrollo pedro maria`
b) `samba-tool group addmembers desarrollo pedro,maria`
c) `samba-tool user addgroup pedro,maria desarrollo`
d) `net ads group addmembers desarrollo pedro maria`

<details><summary>Respuesta</summary>

**b) `samba-tool group addmembers desarrollo pedro,maria`**

`samba-tool group addmembers` añade uno o más usuarios a un grupo existente. Los nombres de los miembros se separan con comas sin espacios. Para quitar miembros se usa `samba-tool group removemembers` y para listar los miembros `samba-tool group listmembers`.
</details>

### Pregunta 6
¿Qué extensión del esquema AD permite almacenar atributos POSIX como uidNumber y loginShell?

a) LDAP Extensions for DIT Content Rules
b) RFC2307
c) POSIX-AD Schema
d) Unix ID Mapping

<details><summary>Respuesta</summary>

**b) RFC2307**

RFC2307 define un esquema LDAP que incluye atributos POSIX como `uidNumber`, `gidNumber`, `loginShell`, `unixHomeDirectory` y `gecos`. En Samba AD, se habilita con la opción `--use-rfc2307` durante el aprovisionamiento. Esto permite almacenar identidades Unix directamente en los objetos de AD.
</details>

### Pregunta 7
¿Qué comando establece que las contraseñas del dominio deben tener al menos 10 caracteres?

a) `samba-tool user passwordlength 10`
b) `samba-tool domain passwordsettings set --min-pwd-length=10`
c) `samba-tool password set --minimum=10`
d) `samba-tool domain policy --password-length=10`

<details><summary>Respuesta</summary>

**b) `samba-tool domain passwordsettings set --min-pwd-length=10`**

El subcomando `samba-tool domain passwordsettings set` permite configurar los parámetros de la política de contraseñas del dominio. `--min-pwd-length` establece la longitud mínima. Otros parámetros incluyen `--complexity`, `--history-length`, `--max-pwd-age` y `--account-lockout-threshold`.
</details>

### Pregunta 8
¿Qué comando de samba-tool se utiliza para crear una Unidad Organizativa (OU)?

a) `samba-tool ou add "OU=Ventas,DC=empresa,DC=com"`
b) `samba-tool ou create "OU=Ventas,DC=empresa,DC=com"`
c) `samba-tool container create "OU=Ventas,DC=empresa,DC=com"`
d) `samba-tool domain ou new Ventas`

<details><summary>Respuesta</summary>

**b) `samba-tool ou create "OU=Ventas,DC=empresa,DC=com"`**

`samba-tool ou create` crea una nueva Unidad Organizativa especificando su Distinguished Name (DN) completo. Las OUs permiten organizar objetos jerárquicamente y aplicar GPOs de forma selectiva. Se pueden crear OUs anidadas y mover usuarios entre ellas con `samba-tool user move`.
</details>

### Pregunta 9
¿Qué diferencia hay entre el backend idmap `ad` y el backend `rid`?

a) `ad` es más rápido; `rid` es más seguro
b) `ad` lee UIDs/GIDs de atributos RFC2307 en AD; `rid` los calcula algorítmicamente
c) `ad` es para dominios NT4; `rid` para AD
d) No hay diferencia funcional

<details><summary>Respuesta</summary>

**b) `ad` lee UIDs/GIDs de atributos RFC2307 en AD; `rid` los calcula algorítmicamente**

El backend `ad` consulta los atributos `uidNumber` y `gidNumber` almacenados en los objetos de Active Directory (requiere RFC2307). El backend `rid` calcula los UIDs/GIDs algorítmicamente a partir del RID del SID, sin necesitar datos adicionales en AD. `ad` permite control manual de los IDs, mientras que `rid` es automático y predecible.
</details>

### Pregunta 10
¿Por qué la edición completa de GPOs generalmente requiere RSAT desde Windows en un entorno Samba AD?

a) Porque samba-tool no puede crear GPOs
b) Porque las GPOs usan un formato binario que solo Windows puede editar
c) Porque samba-tool tiene soporte limitado para editar el contenido detallado de las GPOs
d) Porque Linux no soporta políticas de grupo

<details><summary>Respuesta</summary>

**c) Porque samba-tool tiene soporte limitado para editar el contenido detallado de las GPOs**

Aunque `samba-tool gpo` puede crear, listar, vincular y desvincular GPOs, la edición detallada de las configuraciones dentro de una GPO (registro, scripts, configuración de seguridad, etc.) requiere el editor de políticas de grupo (GPMC) disponible en las herramientas RSAT de Windows. Samba implementa la infraestructura de GPO pero no todas las herramientas de edición.
</details>

### Pregunta 11

¿Qué comando de samba-tool configura una cuenta de usuario para que nunca caduque su contraseña?

a) `samba-tool user setpassword pedro --no-expire`
b) `samba-tool user setexpiry pedro --noexpiry`
c) `samba-tool user modify pedro --password-never-expires`
d) `samba-tool domain passwordsettings set --no-expiry --user=pedro`

<details><summary>Respuesta</summary>

**b) `samba-tool user setexpiry pedro --noexpiry`**

El comando `samba-tool user setexpiry pedro --noexpiry` configura la cuenta del usuario "pedro" para que su contraseña nunca caduque. Para establecer una caducidad específica se usa `--days=N`, por ejemplo `samba-tool user setexpiry pedro --days=90` para que la contraseña caduque en 90 dias.
</details>

### Pregunta 12

¿Qué atributo LDAP almacena el nombre de login en formato UPN (User Principal Name) en Active Directory?

a) `sAMAccountName`
b) `userPrincipalName`
c) `cn`
d) `distinguishedName`

<details><summary>Respuesta</summary>

**b) `userPrincipalName`**

El atributo `userPrincipalName` (UPN) almacena el nombre de login en formato `usuario@dominio.com`. El atributo `sAMAccountName` almacena el nombre de login pre-Windows 2000 (formato corto sin dominio). `cn` es el nombre comun del objeto y `distinguishedName` es la ruta completa del objeto en el arbol LDAP.
</details>

### Pregunta 13

¿Qué comando de samba-tool permite mover un usuario a una Unidad Organizativa diferente dentro del dominio?

a) `samba-tool user move pedro "OU=Ventas,DC=empresa,DC=com"`
b) `samba-tool user transfer pedro "OU=Ventas,DC=empresa,DC=com"`
c) `samba-tool ou addmember "OU=Ventas,DC=empresa,DC=com" pedro`
d) `samba-tool user modify pedro --ou=Ventas`

<details><summary>Respuesta</summary>

**a) `samba-tool user move pedro "OU=Ventas,DC=empresa,DC=com"`**

El comando `samba-tool user move` traslada un objeto de usuario de su ubicacion actual a una OU diferente, especificada por su Distinguished Name completo. Esto es equivalente a arrastrar un usuario entre OUs en la consola ADUC (Active Directory Users and Computers) de Windows.
</details>

### Pregunta 14

¿Qué backend idmap es el mas adecuado para entornos multidominio donde se necesita una asignacion automatica de UIDs/GIDs sin configuracion manual por dominio?

a) tdb
b) rid
c) ad
d) autorid

<details><summary>Respuesta</summary>

**d) autorid**

El backend `autorid` asigna automaticamente rangos de UIDs/GIDs a cada dominio que encuentra, sin necesidad de configurar rangos especificos para cada uno. Es especialmente util en entornos con multiples dominios de confianza donde no se desea configurar cada dominio individualmente. Combina la simplicidad del backend `tdb` con la predictibilidad del `rid`.
</details>

### Pregunta 15

¿Que comando de samba-tool permite crear una Politica de Contrasenas Granular (PSO) llamada "PSO-Admins" con precedencia 10?

a) `samba-tool domain passwordsettings create "PSO-Admins" 10`
b) `samba-tool domain passwordsettings pso create "PSO-Admins" 10`
c) `samba-tool pso create "PSO-Admins" --precedence=10`
d) `samba-tool domain pso add "PSO-Admins" 10`

<details><summary>Respuesta</summary>

**b) `samba-tool domain passwordsettings pso create "PSO-Admins" 10`**

El comando `samba-tool domain passwordsettings pso create` crea una Politica de Contrasenas Granular (Fine-Grained Password Policy) con el nombre y la precedencia especificados. La precedencia determina que PSO se aplica cuando un usuario pertenece a varios grupos con PSOs diferentes (menor numero = mayor prioridad). Despues de crearla, se aplica a un grupo con `pso apply`.
</details>

### Pregunta 16

¿Que herramienta de linea de comandos permite realizar consultas LDAP directamente contra la base de datos AD de Samba usando el protocolo LDAP local?

a) `ldapsearch`
b) `ldbsearch`
c) `samba-tool ldap query`
d) `net ads search`

<details><summary>Respuesta</summary>

**b) `ldbsearch`**

`ldbsearch` es una herramienta especifica de Samba que permite consultar la base de datos LDB de Active Directory, tanto a traves del protocolo LDAP como directamente contra el archivo de base de datos local. A diferencia de `ldapsearch` estandar, `ldbsearch` entiende nativamente el formato LDB de Samba. Ambas herramientas pueden usarse, pero `ldbsearch` ofrece mejor integracion con Samba.
</details>

### Pregunta 17

¿Que parametro debe incluirse en smb.conf para que el backend idmap `ad` lea los atributos POSIX del Active Directory?

a) `idmap config EMPRESA : backend = ad` y `idmap config EMPRESA : schema_mode = rfc2307`
b) `idmap config EMPRESA : backend = tdb` y `posix = yes`
c) `idmap config * : backend = ad` y `unix extensions = yes`
d) `passdb backend = ad` y `rfc2307 = yes`

<details><summary>Respuesta</summary>

**a) `idmap config EMPRESA : backend = ad` y `idmap config EMPRESA : schema_mode = rfc2307`**

Para usar el backend idmap `ad` se debe configurar `idmap config DOMINIO : backend = ad` junto con `idmap config DOMINIO : schema_mode = rfc2307` para que Samba lea los atributos uidNumber, gidNumber, loginShell y otros del esquema RFC2307 almacenados en los objetos de Active Directory. Tambien se debe definir el rango con `idmap config DOMINIO : range`.
</details>

### Pregunta 18

¿Que GPO predeterminada se aplica a todos los controladores de dominio y contiene la politica de seguridad base para los DCs?

a) Default Domain Policy
b) Default Domain Controllers Policy
c) Default Security Policy
d) Domain Controller Baseline Policy

<details><summary>Respuesta</summary>

**b) Default Domain Controllers Policy**

La "Default Domain Controllers Policy" es una GPO predeterminada que se aplica automaticamente a la OU "Domain Controllers" y contiene la configuracion de seguridad base para los controladores de dominio. La "Default Domain Policy" se aplica a todo el dominio y contiene la politica de contrasenas y bloqueo de cuentas. Ambas se crean automaticamente durante el aprovisionamiento.
</details>

### Pregunta 19

¿Que comando de samba-tool vincula una GPO existente a una Unidad Organizativa?

a) `samba-tool gpo link {GPO-GUID} "OU=Ventas,DC=empresa,DC=com"`
b) `samba-tool gpo setlink {GPO-GUID} "OU=Ventas,DC=empresa,DC=com" -U administrator`
c) `samba-tool gpo apply {GPO-GUID} --ou=Ventas`
d) `samba-tool ou setgpo "OU=Ventas,DC=empresa,DC=com" {GPO-GUID}`

<details><summary>Respuesta</summary>

**b) `samba-tool gpo setlink {GPO-GUID} "OU=Ventas,DC=empresa,DC=com" -U administrator`**

El comando `samba-tool gpo setlink` vincula una GPO existente (identificada por su GUID) a una Unidad Organizativa especificada por su DN completo. La GPO se aplicara a todos los objetos dentro de esa OU. Para desvincular se usa `samba-tool gpo dellink` y para ver la herencia de GPOs en una OU se usa `samba-tool gpo getinheritance`.
</details>

### Pregunta 20

Un administrador necesita crear un usuario con atributos POSIX (uidNumber, loginShell, directorio home) directamente en el dominio AD. ¿Que opcion se utiliza con `samba-tool user create`?

a) Las opciones `--posix-uid` y `--posix-shell`
b) Las opciones `--uid-number`, `--login-shell` y `--unix-home`
c) La opcion `--rfc2307` seguida de los atributos
d) No es posible, los atributos POSIX deben configurarse con RSAT

<details><summary>Respuesta</summary>

**b) Las opciones `--uid-number`, `--login-shell` y `--unix-home`**

El comando `samba-tool user create` acepta opciones para establecer atributos POSIX directamente al crear el usuario: `--uid-number` para el UID, `--gid-number` para el GID, `--login-shell` para la shell y `--unix-home` para el directorio home. Esto requiere que el dominio se haya aprovisionado con `--use-rfc2307` para que el esquema incluya estos atributos.
</details>

### Pregunta 21

¿Que comando lista todos los miembros del grupo "desarrollo" en un dominio AD de Samba?

<input type="text" class="fill-blank" data-answer="samba-tool group listmembers desarrollo" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool group listmembers desarrollo**

El comando `samba-tool group listmembers` seguido del nombre del grupo muestra todos los usuarios que son miembros de ese grupo. Para anadir miembros se usa `samba-tool group addmembers grupo usuario1,usuario2` y para eliminar miembros `samba-tool group removemembers grupo usuario`.
</details>

### Pregunta 22

¿Que comando deshabilita la cuenta del usuario "pedro" en el dominio AD de Samba?

<input type="text" class="fill-blank" data-answer="samba-tool user disable pedro" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool user disable pedro**

El comando `samba-tool user disable` desactiva una cuenta de usuario en Active Directory, impidiendo que pueda iniciar sesion. La cuenta no se elimina y puede reactivarse posteriormente con `samba-tool user enable pedro`. Es una practica recomendada deshabilitar cuentas en lugar de eliminarlas inmediatamente cuando un empleado deja la organizacion.
</details>

### Pregunta 23

¿Que comando configura el bloqueo de cuentas despues de 5 intentos fallidos de inicio de sesion?

<input type="text" class="fill-blank" data-answer="samba-tool domain passwordsettings set --account-lockout-threshold=5" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool domain passwordsettings set --account-lockout-threshold=5**

El parametro `--account-lockout-threshold` establece el numero maximo de intentos fallidos de autenticacion antes de que la cuenta se bloquee automaticamente. Se complementa con `--account-lockout-duration` (minutos de bloqueo) y `--reset-account-lockout-after` (minutos para reiniciar el contador de intentos fallidos).
</details>

### Pregunta 24

¿Que comando crea una nueva Unidad Organizativa llamada "Ventas" en el dominio empresa.com?

<input type="text" class="fill-blank" data-answer="samba-tool ou create \"OU=Ventas,DC=empresa,DC=com\"" data-alt="samba-tool ou create OU=Ventas,DC=empresa,DC=com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool ou create "OU=Ventas,DC=empresa,DC=com"**

El comando `samba-tool ou create` crea una nueva Unidad Organizativa especificando su Distinguished Name (DN) completo. Las OUs son contenedores que permiten organizar objetos del directorio jerarquicamente y aplicar GPOs de forma selectiva. Se pueden crear OUs anidadas y posteriormente mover usuarios y grupos a ellas.
</details>

### Pregunta 25

¿Que comando busca un usuario especifico por su sAMAccountName en Active Directory usando ldbsearch?

<input type="text" class="fill-blank" data-answer="ldbsearch -H ldap://localhost -U administrator \"(sAMAccountName=pedro)\"" data-alt="ldbsearch -H ldap://localhost -U administrator (sAMAccountName=pedro)" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldbsearch -H ldap://localhost -U administrator "(sAMAccountName=pedro)"**

El comando `ldbsearch` permite realizar consultas LDAP contra la base de datos AD de Samba. Se especifica el servidor con `-H ldap://localhost`, la autenticacion con `-U administrator` y el filtro LDAP entre comillas. Se pueden especificar atributos adicionales a devolver despues del filtro, como `cn sAMAccountName mail`. Tambien se puede usar `ldapsearch` estandar como alternativa.
</details>
