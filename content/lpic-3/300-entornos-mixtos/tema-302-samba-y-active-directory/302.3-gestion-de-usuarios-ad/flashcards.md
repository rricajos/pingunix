---
title: "302.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.3"
---

# Flashcards: 302.3 - Gestion De Usuarios Ad

> 40 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando crea un nuevo usuario "maria" con contraseña en el dominio AD de Samba?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool user create maria 'P@ss123'`. `samba-tool user create` es el comando para crear usuarios en un dominio AD de Samba. La contraseña debe cumplir la política de complejidad del dominio. `smbpasswd -a` solo funciona para usuarios locales de Samba (no AD). `net ads user add` no es un comando válido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la política de contraseñas actual del dominio AD?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool domain passwordsettings show`. `samba-tool domain passwordsettings show` muestra la configuración actual de la política de contraseñas del dominio, incluyendo longitud mínima, complejidad, historial, edades mínima y máxima, y parámetros de bloqueo de cuenta. Se modifica con `samba-tool domain passwordsettings set`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué backend idmap calcula el UID/GID directamente a partir del RID del SID, sin necesidad de almacenamiento adicional?

</div>
<div class="flashcard-back">

**R:** c) rid. El backend `rid` calcula el UID/GID aplicando una fórmula basada en el RID (Relative ID) del SID de Windows, sumándolo al inicio del rango configurado. No requiere almacenamiento de estado ni atributos adicionales en AD. El resultado es determinista: el mismo SID siempre produce el mismo UID/GID en cualquier servidor con la misma configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué herramienta de Windows se utiliza para administrar usuarios y grupos en un dominio Samba AD?

</div>
<div class="flashcard-back">

**R:** c) Active Directory Users and Computers (RSAT). Active Directory Users and Computers (ADUC), parte de las herramientas RSAT (Remote Server Administration Tools), es la herramienta gráfica estándar para administrar usuarios, grupos, OUs y equipos en un dominio AD. Funciona con Samba AD DC desde un equipo Windows unido al dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-005">
<div class="flashcard-front">

**P:** ¿Cómo se añaden los usuarios "pedro" y "maria" al grupo "desarrollo" en un dominio Samba AD?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool group addmembers desarrollo pedro,maria`. `samba-tool group addmembers` añade uno o más usuarios a un grupo existente. Los nombres de los miembros se separan con comas sin espacios. Para quitar miembros se usa `samba-tool group removemembers` y para listar los miembros `samba-tool group listmembers`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué extensión del esquema AD permite almacenar atributos POSIX como uidNumber y loginShell?

</div>
<div class="flashcard-back">

**R:** b) RFC2307. RFC2307 define un esquema LDAP que incluye atributos POSIX como `uidNumber`, `gidNumber`, `loginShell`, `unixHomeDirectory` y `gecos`. En Samba AD, se habilita con la opción `--use-rfc2307` durante el aprovisionamiento. Esto permite almacenar identidades Unix directamente en los objetos de AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando establece que las contraseñas del dominio deben tener al menos 10 caracteres?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool domain passwordsettings set --min-pwd-length=10`. El subcomando `samba-tool domain passwordsettings set` permite configurar los parámetros de la política de contraseñas del dominio. `--min-pwd-length` establece la longitud mínima. Otros parámetros incluyen `--complexity`, `--history-length`, `--max-pwd-age` y `--account-lockout-threshold`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de samba-tool se utiliza para crear una Unidad Organizativa (OU)?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool ou create "OU=Ventas,DC=empresa,DC=com"`. `samba-tool ou create` crea una nueva Unidad Organizativa especificando su Distinguished Name (DN) completo. Las OUs permiten organizar objetos jerárquicamente y aplicar GPOs de forma selectiva. Se pueden crear OUs anidadas y mover usuarios entre ellas con `samba-tool user move`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre el backend idmap `ad` y el backend `rid`?

</div>
<div class="flashcard-back">

**R:** b) `ad` lee UIDs/GIDs de atributos RFC2307 en AD; `rid` los calcula algorítmicamente. El backend `ad` consulta los atributos `uidNumber` y `gidNumber` almacenados en los objetos de Active Directory (requiere RFC2307). El backend `rid` calcula los UIDs/GIDs algorítmicamente a partir del RID del SID, sin necesitar datos adicionales en AD. `ad` permite control manual de los IDs, mientras que `rid` es automático y predecible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-010">
<div class="flashcard-front">

**P:** ¿Por qué la edición completa de GPOs generalmente requiere RSAT desde Windows en un entorno Samba AD?

</div>
<div class="flashcard-back">

**R:** c) Porque samba-tool tiene soporte limitado para editar el contenido detallado de las GPOs. Aunque `samba-tool gpo` puede crear, listar, vincular y desvincular GPOs, la edición detallada de las configuraciones dentro de una GPO (registro, scripts, configuración de seguridad, etc.) requiere el editor de políticas de grupo (GPMC) disponible en las herramientas RSAT de Windows. Samba implementa la infraestructura de GPO pero no todas las herramientas de edición.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de samba-tool configura una cuenta de usuario para que nunca caduque su contraseña?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool user setexpiry pedro --noexpiry`. El comando `samba-tool user setexpiry pedro --noexpiry` configura la cuenta del usuario "pedro" para que su contraseña nunca caduque. Para establecer una caducidad específica se usa `--days=N`, por ejemplo `samba-tool user setexpiry pedro --days=90` para que la contraseña caduque en 90 dias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué atributo LDAP almacena el nombre de login en formato UPN (User Principal Name) en Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `userPrincipalName`. El atributo `userPrincipalName` (UPN) almacena el nombre de login en formato `usuario@dominio.com`. El atributo `sAMAccountName` almacena el nombre de login pre-Windows 2000 (formato corto sin dominio). `cn` es el nombre comun del objeto y `distinguishedName` es la ruta completa del objeto en el arbol LDAP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de samba-tool permite mover un usuario a una Unidad Organizativa diferente dentro del dominio?

</div>
<div class="flashcard-back">

**R:** a) `samba-tool user move pedro "OU=Ventas,DC=empresa,DC=com"`. El comando `samba-tool user move` traslada un objeto de usuario de su ubicacion actual a una OU diferente, especificada por su Distinguished Name completo. Esto es equivalente a arrastrar un usuario entre OUs en la consola ADUC (Active Directory Users and Computers) de Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué backend idmap es el mas adecuado para entornos multidominio donde se necesita una asignacion automatica de UIDs/GIDs sin configuracion manual por dominio?

</div>
<div class="flashcard-back">

**R:** d) autorid. El backend `autorid` asigna automaticamente rangos de UIDs/GIDs a cada dominio que encuentra, sin necesidad de configurar rangos especificos para cada uno. Es especialmente util en entornos con multiples dominios de confianza donde no se desea configurar cada dominio individualmente. Combina la simplicidad del backend `tdb` con la predictibilidad del `rid`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando de samba-tool permite crear una Politica de Contrasenas Granular (PSO) llamada "PSO-Admins" con precedencia 10?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool domain passwordsettings pso create "PSO-Admins" 10`. El comando `samba-tool domain passwordsettings pso create` crea una Politica de Contrasenas Granular (Fine-Grained Password Policy) con el nombre y la precedencia especificados. La precedencia determina que PSO se aplica cuando un usuario pertenece a varios grupos con PSOs diferentes (menor numero = mayor prioridad). Despues de crearla, se aplica a un grupo con `pso apply`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que herramienta de linea de comandos permite realizar consultas LDAP directamente contra la base de datos AD de Samba usando el protocolo LDAP local?

</div>
<div class="flashcard-back">

**R:** b) `ldbsearch`. `ldbsearch` es una herramienta especifica de Samba que permite consultar la base de datos LDB de Active Directory, tanto a traves del protocolo LDAP como directamente contra el archivo de base de datos local. A diferencia de `ldapsearch` estandar, `ldbsearch` entiende nativamente el formato LDB de Samba. Ambas herramientas pueden usarse, pero `ldbsearch` ofrece mejor integracion con Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que parametro debe incluirse en smb.conf para que el backend idmap `ad` lea los atributos POSIX del Active Directory?

</div>
<div class="flashcard-back">

**R:** a) `idmap config EMPRESA : backend = ad` y `idmap config EMPRESA : schema_mode = rfc2307`. Para usar el backend idmap `ad` se debe configurar `idmap config DOMINIO : backend = ad` junto con `idmap config DOMINIO : schema_mode = rfc2307` para que Samba lea los atributos uidNumber, gidNumber, loginShell y otros del esquema RFC2307 almacenados en los objetos de Active Directory. Tambien se debe definir el rango con `idmap config DOMINIO : range`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que GPO predeterminada se aplica a todos los controladores de dominio y contiene la politica de seguridad base para los DCs?

</div>
<div class="flashcard-back">

**R:** b) Default Domain Controllers Policy. La "Default Domain Controllers Policy" es una GPO predeterminada que se aplica automaticamente a la OU "Domain Controllers" y contiene la configuracion de seguridad base para los controladores de dominio. La "Default Domain Policy" se aplica a todo el dominio y contiene la politica de contrasenas y bloqueo de cuentas. Ambas se crean automaticamente durante el aprovisionamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando de samba-tool vincula una GPO existente a una Unidad Organizativa?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool gpo setlink {GPO-GUID} "OU=Ventas,DC=empresa,DC=com" -U administrator`. El comando `samba-tool gpo setlink` vincula una GPO existente (identificada por su GUID) a una Unidad Organizativa especificada por su DN completo. La GPO se aplicara a todos los objetos dentro de esa OU. Para desvincular se usa `samba-tool gpo dellink` y para ver la herencia de GPOs en una OU se usa `samba-tool gpo getinheritance`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-020">
<div class="flashcard-front">

**P:** Un administrador necesita crear un usuario con atributos POSIX (uidNumber, loginShell, directorio home) directamente en el dominio AD. ¿Que opcion se utiliza con `samba-tool user create`?

</div>
<div class="flashcard-back">

**R:** b) Las opciones `--uid-number`, `--login-shell` y `--unix-home`. El comando `samba-tool user create` acepta opciones para establecer atributos POSIX directamente al crear el usuario: `--uid-number` para el UID, `--gid-number` para el GID, `--login-shell` para la shell y `--unix-home` para el directorio home. Esto requiere que el dominio se haya aprovisionado con `--use-rfc2307` para que el esquema incluya estos atributos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando lista todos los miembros del grupo "desarrollo" en un dominio AD de Samba?

</div>
<div class="flashcard-back">

**R:** samba-tool group listmembers desarrollo. El comando `samba-tool group listmembers` seguido del nombre del grupo muestra todos los usuarios que son miembros de ese grupo. Para anadir miembros se usa `samba-tool group addmembers grupo usuario1,usuario2` y para eliminar miembros `samba-tool group removemembers grupo usuario`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando deshabilita la cuenta del usuario "pedro" en el dominio AD de Samba?

</div>
<div class="flashcard-back">

**R:** samba-tool user disable pedro. El comando `samba-tool user disable` desactiva una cuenta de usuario en Active Directory, impidiendo que pueda iniciar sesion. La cuenta no se elimina y puede reactivarse posteriormente con `samba-tool user enable pedro`. Es una practica recomendada deshabilitar cuentas en lugar de eliminarlas inmediatamente cuando un empleado deja la organizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando configura el bloqueo de cuentas despues de 5 intentos fallidos de inicio de sesion?

</div>
<div class="flashcard-back">

**R:** samba-tool domain passwordsettings set --account-lockout-threshold=5. El parametro `--account-lockout-threshold` establece el numero maximo de intentos fallidos de autenticacion antes de que la cuenta se bloquee automaticamente. Se complementa con `--account-lockout-duration` (minutos de bloqueo) y `--reset-account-lockout-after` (minutos para reiniciar el contador de intentos fallidos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando crea una nueva Unidad Organizativa llamada "Ventas" en el dominio empresa.com?

</div>
<div class="flashcard-back">

**R:** samba-tool ou create "OU=Ventas,DC=empresa,DC=com". El comando `samba-tool ou create` crea una nueva Unidad Organizativa especificando su Distinguished Name (DN) completo. Las OUs son contenedores que permiten organizar objetos del directorio jerarquicamente y aplicar GPOs de forma selectiva. Se pueden crear OUs anidadas y posteriormente mover usuarios y grupos a ellas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando busca un usuario especifico por su sAMAccountName en Active Directory usando ldbsearch?

</div>
<div class="flashcard-back">

**R:** ldbsearch -H ldap://localhost -U administrator "(sAMAccountName=pedro)". El comando `ldbsearch` permite realizar consultas LDAP contra la base de datos AD de Samba. Se especifica el servidor con `-H ldap://localhost`, la autenticacion con `-U administrator` y el filtro LDAP entre comillas. Se pueden especificar atributos adicionales a devolver despues del filtro, como `cn sAMAccountName mail`. Tambien se puede usar `ldapsearch` estandar como alternativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `samba-tool user create` requiere que la contraseña cumpla con la política de co...

</div>
<div class="flashcard-back">

**R:** `samba-tool user create` requiere que la contraseña cumpla con la política de complejidad de AD (mayúsculas, minúsculas, números, caracteres especiales, mínimo 7 caracteres por defecto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: RSAT funciona con Samba AD DC y es la forma recomendada de administrar aspectos ...

</div>
<div class="flashcard-back">

**R:** RSAT funciona con Samba AD DC y es la forma recomendada de administrar aspectos como GPOs complejas y gestión de sitios que no están completamente soportados por samba-tool.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La gestión completa de GPOs (edición de configuraciones) normalmente requiere RS...

</div>
<div class="flashcard-back">

**R:** La gestión completa de GPOs (edición de configuraciones) normalmente requiere RSAT desde Windows, ya que samba-tool tiene soporte limitado para la edición del contenido de las GPOs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los diferentes backends idmap y cuándo usar cada uno. `rid` es predecibl...

</div>
<div class="flashcard-back">

**R:** Conocer los diferentes backends idmap y cuándo usar cada uno. `rid` es predecible y no requiere datos adicionales en AD. `ad` requiere atributos RFC2307 pero permite control preciso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `sAMAccountName`?

</div>
<div class="flashcard-back">

**R:** Nombre de login (pre-Windows 2000)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `userPrincipalName`?

</div>
<div class="flashcard-back">

**R:** Nombre de login (formato UPN: user@domain)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `rid`?

</div>
<div class="flashcard-back">

**R:** Calcula UID/GID a partir del RID

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `autorid`?

</div>
<div class="flashcard-back">

**R:** Asignación automática basada en RID

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `ldap`?

</div>
<div class="flashcard-back">

**R:** Lee mapeos de un servidor LDAP

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre la gestión de usuarios y grupos en un dominio Active Directory administrado por Samba, incluyendo herramientas de línea de comandos, RSAT desde Windows, políticas de contraseñas, GPO

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son RSAT (Remote Server Administration Tools)?

</div>
<div class="flashcard-back">

**R:** Las herramientas RSAT permiten administrar Samba AD DC desde un equipo Windows:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Integración LDAP?

</div>
<div class="flashcard-back">

**R:** Active Directory es un servicio LDAP, por lo que se puede consultar y modificar usando herramientas LDAP estándar:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son Mapeo de UIDs/GIDs (idmap)?

</div>
<div class="flashcard-back">

**R:** El mapeo de identificadores entre Windows (SIDs) y Linux (UIDs/GIDs) es fundamental:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son Esquema de Active Directory?

</div>
<div class="flashcard-back">

**R:** - El esquema define los tipos de objetos y atributos disponibles en AD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.3">
</div>

<div class="flashcard" data-id="302.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `samba-tool user/group` para gestión completa de usuarios y grupos AD

</div>
</div>

---

