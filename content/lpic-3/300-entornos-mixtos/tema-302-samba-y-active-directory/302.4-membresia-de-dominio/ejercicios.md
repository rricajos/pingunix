---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "302"
subtema: "302.4"
titulo: "Membresía de Dominio - Ejercicios"
peso: 4
tags:
  - lpic-3
  - tema-302
  - ejercicios
---

# Ejercicios - 302.4 Membresía de Dominio

### Pregunta 1
¿Qué comando se utiliza para unir un servidor Linux a un dominio Active Directory mediante Samba?

a) `samba-tool domain join`
b) `net ads join -U administrator`
c) `realm connect empresa.com`
d) `net rpc join -U administrator`

<details><summary>Respuesta</summary>

**b) `net ads join -U administrator`**

`net ads join` es el comando de Samba para unir un servidor Linux como miembro de un dominio AD. Requiere credenciales de administrador del dominio y que Kerberos esté configurado correctamente. `samba-tool domain join` se usa para unir un DC (no un servidor miembro). `net rpc join` es para dominios NT4.
</details>

### Pregunta 2
¿Qué archivo debe configurarse para que el sistema Linux resuelva usuarios y grupos del dominio AD a través de winbind?

a) `/etc/samba/smb.conf`
b) `/etc/pam.d/common-auth`
c) `/etc/nsswitch.conf`
d) `/etc/krb5.conf`

<details><summary>Respuesta</summary>

**c) `/etc/nsswitch.conf`**

El archivo `/etc/nsswitch.conf` controla el orden en que el sistema consulta las fuentes de información de nombres. Para winbind, debe incluir `winbind` en las líneas passwd y group: `passwd: files winbind` y `group: files winbind`. Sin esta configuración, `getent passwd` no mostrará los usuarios del dominio.
</details>

### Pregunta 3
¿Qué diferencia principal tiene SSSD frente a winbind para la integración con Active Directory?

a) SSSD no soporta Kerberos
b) SSSD no puede integrarse con AD
c) Winbind es necesario cuando el servidor también comparte archivos vía SMB
d) Winbind no soporta caché de credenciales

<details><summary>Respuesta</summary>

**c) Winbind es necesario cuando el servidor también comparte archivos vía SMB**

Winbind está integrado con Samba y es necesario cuando el servidor Linux, además de autenticar usuarios AD, también comparte archivos mediante el protocolo SMB. SSSD es preferido para estaciones de trabajo y servidores que solo necesitan autenticación AD, ya que ofrece un mejor manejo de caché offline y configuración más sencilla con realmd.
</details>

### Pregunta 4
¿Qué comandos de Kerberos se utilizan para obtener, listar y destruir tickets?

a) `kget`, `kls`, `krm`
b) `kinit`, `klist`, `kdestroy`
c) `kticket get`, `kticket list`, `kticket del`
d) `krb5-init`, `krb5-list`, `krb5-destroy`

<details><summary>Respuesta</summary>

**b) `kinit`, `klist`, `kdestroy`**

`kinit` obtiene un TGT (Ticket Granting Ticket) del KDC Kerberos, `klist` muestra los tickets almacenados en la caché de credenciales y `kdestroy` elimina todos los tickets de la caché. Estos son los tres comandos fundamentales para trabajar con tickets Kerberos. El realm se especifica en MAYÚSCULAS: `kinit usuario@EMPRESA.COM`.
</details>

### Pregunta 5
¿Qué parámetro de smb.conf permite que los usuarios de dominio inicien sesión sin necesidad de prefijar el nombre del dominio?

a) `winbind enum users = yes`
b) `winbind use default domain = yes`
c) `security = ads`
d) `template shell = /bin/bash`

<details><summary>Respuesta</summary>

**b) `winbind use default domain = yes`**

Cuando `winbind use default domain = yes`, los usuarios pueden iniciar sesión con solo su nombre (ej: "pedro") en lugar de "EMPRESA\pedro" o "pedro@empresa.com". Winbind asume automáticamente el dominio predeterminado configurado en `workgroup`. Esto simplifica el uso pero puede causar conflictos si hay usuarios locales con el mismo nombre.
</details>

### Pregunta 6
¿Qué backend idmap es más apropiado para un entorno multidominio donde se desea asignación automática de rangos?

a) rid
b) ad
c) tdb
d) autorid

<details><summary>Respuesta</summary>

**d) autorid**

El backend `autorid` asigna automáticamente rangos de UIDs/GIDs a cada dominio que se descubre, sin necesidad de configuración por dominio. Es ideal para entornos multidominio con confianzas porque simplifica enormemente la configuración. Cada dominio recibe un bloque de IDs del rango total configurado. Sin embargo, los IDs pueden variar entre servidores.
</details>

### Pregunta 7
¿Qué módulo PAM se utiliza para crear automáticamente el directorio home de un usuario de dominio al iniciar sesión por primera vez?

a) `pam_winbind.so`
b) `pam_unix.so`
c) `pam_mkhomedir.so`
d) `pam_ldap.so`

<details><summary>Respuesta</summary>

**c) `pam_mkhomedir.so`**

El módulo `pam_mkhomedir.so` se configura en la sección de sesión de PAM (`/etc/pam.d/common-session`) y crea automáticamente el directorio home del usuario basándose en `/etc/skel` cuando el usuario inicia sesión por primera vez. Ejemplo: `session required pam_mkhomedir.so skel=/etc/skel umask=0077`.
</details>

### Pregunta 8
¿Qué comando alternativo a `net ads join` configura automáticamente SSSD, Kerberos, PAM y NSS al unirse a un dominio?

a) `sssd join`
b) `realm join empresa.com`
c) `adcli join empresa.com`
d) `samba-tool domain join`

<details><summary>Respuesta</summary>

**b) `realm join empresa.com`**

`realm join` (proporcionado por realmd) es una herramienta que automatiza el proceso completo de unión a un dominio: configura Kerberos (`/etc/krb5.conf`), SSSD (`/etc/sssd/sssd.conf`), PAM y NSS. Es más simple que `net ads join` que requiere configuración manual de cada componente. `adcli` es una herramienta complementaria que realm puede usar internamente.
</details>

### Pregunta 9
En la configuración idmap, ¿qué representa el backend con asterisco (`idmap config * : backend`)?

a) La configuración para todos los dominios
b) La configuración comodín para dominios no configurados explícitamente
c) Una configuración inválida
d) La configuración para el dominio local

<details><summary>Respuesta</summary>

**b) La configuración comodín para dominios no configurados explícitamente**

El asterisco (`*`) en la configuración idmap actúa como comodín y se aplica a cualquier dominio que no tenga una configuración específica. Es obligatorio definir al menos el backend y rango para `*`. Típicamente se usa `tdb` como backend comodín. Los dominios específicos se configuran por nombre: `idmap config EMPRESA : backend = rid`.
</details>

### Pregunta 10
Un administrador ejecuta `kinit pedro@EMPRESA.COM` pero recibe un error de preautenticación. ¿Cuál es la causa más probable?

a) El servidor DNS no funciona
b) La contraseña es incorrecta o la diferencia de tiempo con el DC excede 5 minutos
c) Winbind no está configurado
d) El archivo smb.conf tiene errores de sintaxis

<details><summary>Respuesta</summary>

**b) La contraseña es incorrecta o la diferencia de tiempo con el DC excede 5 minutos**

Los errores de preautenticación Kerberos se producen generalmente por contraseña incorrecta o por un desfase de tiempo (clock skew) superior a 5 minutos entre el cliente y el KDC. Se debe verificar la sincronización NTP con `ntpdate -q dc.empresa.com` o `timedatectl`. También puede deberse a una cuenta bloqueada o deshabilitada.
</details>

### Pregunta 11

¿Qué backend idmap lee los atributos `uidNumber` y `gidNumber` directamente de los objetos de Active Directory según el esquema RFC2307?

a) rid
b) tdb
c) ad
d) autorid

<details><summary>Respuesta</summary>

**c) ad**

El backend `idmap_ad` lee los atributos POSIX (`uidNumber`, `gidNumber`) definidos en AD según el esquema RFC2307. Requiere que cada objeto tenga estos atributos configurados manualmente. La ventaja es que los IDs son consistentes entre todos los servidores porque están centralizados en AD.
</details>

### Pregunta 12

¿Qué parámetro de smb.conf define la shell predeterminada para los usuarios de dominio que inician sesión a través de winbind?

a) `default shell = /bin/bash`
b) `winbind shell = /bin/bash`
c) `template shell = /bin/bash`
d) `user shell = /bin/bash`

<details><summary>Respuesta</summary>

**c) `template shell = /bin/bash`**

El parámetro `template shell` en smb.conf define la shell predeterminada que winbind asigna a los usuarios del dominio cuando se resuelven a través de NSS. Sin este parámetro, los usuarios del dominio podrían no tener una shell asignada y no podrían iniciar sesión interactivamente.
</details>

### Pregunta 13

¿Qué comando verifica que la relación de confianza entre un servidor miembro Linux y el dominio AD es funcional?

a) `net ads info`
b) `wbinfo -t`
c) `smbclient -L localhost`
d) `testparm -s`

<details><summary>Respuesta</summary>

**b) `wbinfo -t`**

`wbinfo -t` verifica la relación de confianza (trust) entre el servidor miembro y el controlador de dominio enviando una verificación de secreto de máquina. Si la salida indica éxito, la relación de confianza funciona correctamente. `net ads testjoin` también verifica la membresía, pero `wbinfo -t` comprueba específicamente la confianza RPC.
</details>

### Pregunta 14

En la configuración de SSSD, ¿qué parámetro permite el inicio de sesión con credenciales en caché cuando el controlador de dominio no está disponible?

a) `offline_login = true`
b) `cache_credentials = True`
c) `winbind offline logon = yes`
d) `enable_cache = yes`

<details><summary>Respuesta</summary>

**b) `cache_credentials = True`**

El parámetro `cache_credentials = True` en la sección de dominio de `/etc/sssd/sssd.conf` permite que SSSD almacene las credenciales del usuario en caché local. Esto permite el inicio de sesión cuando el DC no es alcanzable. `winbind offline logon` es el equivalente para winbind, no para SSSD.
</details>

### Pregunta 15

¿Qué sección del archivo `/etc/krb5.conf` define la correspondencia entre nombres de dominio DNS y realms Kerberos?

a) `[libdefaults]`
b) `[realms]`
c) `[domain_realm]`
d) `[appdefaults]`

<details><summary>Respuesta</summary>

**c) `[domain_realm]`**

La sección `[domain_realm]` en `/etc/krb5.conf` mapea nombres de dominio DNS a realms Kerberos. Por ejemplo, `.empresa.com = EMPRESA.COM` indica que todos los hosts del dominio DNS `empresa.com` pertenecen al realm Kerberos `EMPRESA.COM`. La entrada con punto inicial cubre los subdominios.
</details>

### Pregunta 16

¿Qué parámetro de SSSD permite filtrar el acceso al sistema basándose en la pertenencia a un grupo de Active Directory?

a) `valid_users`
b) `ad_access_filter`
c) `access_list`
d) `group_filter`

<details><summary>Respuesta</summary>

**b) `ad_access_filter`**

El parámetro `ad_access_filter` en sssd.conf permite restringir el acceso al sistema basándose en atributos LDAP como `memberOf`. Por ejemplo: `ad_access_filter = memberOf=CN=LinuxUsers,OU=Groups,DC=empresa,DC=com` permite solo a miembros de ese grupo. Requiere `access_provider = ad`.
</details>

### Pregunta 17

Un administrador configura `idmap config * : range = 10000-19999` e `idmap config EMPRESA : range = 10000-99999`. ¿Cuál es el problema?

a) El rango del dominio EMPRESA es demasiado grande
b) Los rangos se solapan, lo que puede causar conflictos de IDs
c) El rango comodín debería ser mayor que el del dominio
d) No se permite definir rangos diferentes para cada backend

<details><summary>Respuesta</summary>

**b) Los rangos se solapan, lo que puede causar conflictos de IDs**

Los rangos idmap de diferentes backends nunca deben solaparse. En este caso, el rango del comodín (`*`: 10000-19999) se superpone con el rango de EMPRESA (10000-99999). Esto puede causar que un mismo UID/GID sea asignado a diferentes usuarios de diferentes dominios. El rango comodín debería usar un rango no solapado, por ejemplo 3000-7999.
</details>

### Pregunta 18

¿Qué comando de `realm` permite restringir el acceso al sistema solo a usuarios específicos del dominio después de unirse?

a) `realm restrict usuario1@empresa.com`
b) `realm permit usuario1@empresa.com`
c) `realm allow usuario1@empresa.com`
d) `realm access --grant usuario1@empresa.com`

<details><summary>Respuesta</summary>

**b) `realm permit usuario1@empresa.com`**

`realm permit` configura qué usuarios o grupos del dominio pueden iniciar sesión en el sistema. Se puede especificar usuarios individuales (`realm permit usuario1@empresa.com`) o permitir a todos (`realm permit --all`). Para denegar el acceso a todos se usa `realm deny --all`.
</details>

### Pregunta 19

¿Cuál es la diferencia fundamental entre el backend idmap `rid` y `autorid`?

a) `rid` es más rápido que `autorid`
b) `rid` requiere configuración por dominio; `autorid` asigna rangos automáticamente a cada dominio
c) `autorid` solo funciona con Active Directory; `rid` con cualquier dominio
d) `rid` usa una base de datos TDB; `autorid` no

<details><summary>Respuesta</summary>

**b) `rid` requiere configuración por dominio; `autorid` asigna rangos automáticamente a cada dominio**

El backend `rid` calcula UIDs/GIDs sumando el RID al inicio del rango configurado para un dominio específico, requiriendo configuración explícita por dominio. `autorid` asigna automáticamente bloques de IDs a cada dominio que descubre, sin necesidad de configuración individual. `autorid` es ideal para entornos multidominio con confianzas.
</details>

### Pregunta 20

¿Qué opción del archivo `/etc/security/pam_winbind.conf` permite requerir que el usuario pertenezca a un grupo específico para poder iniciar sesión?

a) `require_group`
b) `require_membership_of`
c) `allowed_groups`
d) `login_groups`

<details><summary>Respuesta</summary>

**b) `require_membership_of`**

El parámetro `require_membership_of` en `/etc/security/pam_winbind.conf` restringe el acceso solo a miembros de un SID de grupo específico. Se puede indicar el SID completo o el nombre del grupo. Esto proporciona un control de acceso adicional a nivel de PAM, independiente de la configuración de Samba.
</details>

### Pregunta 21

Escriba el comando para obtener un ticket Kerberos TGT para el usuario `admin` en el realm `CORP.NET`.

<input type="text" class="fill-blank" data-answer="kinit admin@CORP.NET" data-alt="kinit admin@corp.net" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kinit admin@CORP.NET**

`kinit` solicita un TGT (Ticket Granting Ticket) al KDC del realm especificado. El formato es `kinit usuario@REALM`. Aunque el realm se define en mayúsculas por convención, Kerberos acepta ambas formas. El ticket se almacena en la caché de credenciales, normalmente en `/tmp/krb5cc_<uid>`.
</details>

### Pregunta 22

Escriba el comando para verificar que un servidor Linux se ha unido correctamente al dominio AD usando herramientas de Samba.

<input type="text" class="fill-blank" data-answer="net ads testjoin" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**net ads testjoin**

`net ads testjoin` verifica que la cuenta de máquina del servidor existe en Active Directory y que las credenciales de la máquina son válidas. Si la unión es correcta, muestra "Join is OK". Si falla, indica problemas con la cuenta de máquina o las credenciales almacenadas en `secrets.tdb`.
</details>

### Pregunta 23

Escriba el comando para listar todos los usuarios del dominio usando la herramienta de winbind.

<input type="text" class="fill-blank" data-answer="wbinfo -u" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wbinfo -u**

`wbinfo -u` consulta a winbind para listar todos los usuarios del dominio. Este comando se comunica directamente con el demonio `winbindd` sin pasar por NSS. Para listar grupos se usa `wbinfo -g`. Para verificar que NSS también funciona, se puede usar `getent passwd`.
</details>

### Pregunta 24

Escriba el comando para descubrir la información de un dominio AD llamado `empresa.com` usando la herramienta `realm`.

<input type="text" class="fill-blank" data-answer="realm discover empresa.com" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**realm discover empresa.com**

`realm discover` consulta DNS y LDAP para obtener información sobre el dominio especificado: tipo de dominio, paquetes necesarios, estado de la unión y capacidades disponibles. Es el primer paso recomendado antes de unirse a un dominio con `realm join`.
</details>

### Pregunta 25

Escriba el comando para destruir todos los tickets Kerberos almacenados en la caché del usuario actual.

<input type="text" class="fill-blank" data-answer="kdestroy" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kdestroy**

`kdestroy` elimina todos los tickets Kerberos de la caché de credenciales del usuario actual. Esto es útil para limpiar tickets expirados, cambiar de identidad o resolver problemas de autenticación. La caché se encuentra normalmente en `/tmp/krb5cc_<uid>`.
</details>
