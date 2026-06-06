---
title: "304.1 - Ejercicios: Clientes de Autenticación Linux"
description: "Ejercicios de práctica para autenticación Linux contra AD"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 304 - Configuración de Clientes Samba"
subtema: "304.1"
peso: 5
tags:
  - lpic-3
  - tema-304
  - samba
  - pam
  - sssd
  - ejercicios
---

# 304.1 Ejercicios - Clientes de Autenticación Linux

### Pregunta 1
¿Qué entrada en `/etc/nsswitch.conf` configura la resolución de usuarios a través de SSSD?

a) `passwd: files ldap`
b) `passwd: files sss`
c) `passwd: files sssd`
d) `passwd: sss files`

<details><summary>Respuesta</summary>

**b) `passwd: files sss`**

El módulo NSS de SSSD se llama `sss` (no `sssd`). El orden `files sss` asegura que los usuarios locales se resuelven primero (/etc/passwd), y luego se consulta SSSD para usuarios del dominio.
</details>

### Pregunta 2
¿Qué parámetro de sssd.conf genera automáticamente UIDs y GIDs a partir del SID de Windows sin necesidad de extensiones POSIX en AD?

a) `auto_id_mapping = true`
b) `ldap_id_mapping = true`
c) `id_provider = posix`
d) `sid_mapping = auto`

<details><summary>Respuesta</summary>

**b) `ldap_id_mapping = true`**

`ldap_id_mapping = true` hace que SSSD genere automáticamente UIDs y GIDs basándose en el SID de Windows mediante un algoritmo determinista. Esto elimina la necesidad de configurar atributos POSIX (uidNumber, gidNumber) en Active Directory.
</details>

### Pregunta 3
¿Qué módulo PAM crea automáticamente el directorio home del usuario en su primer inicio de sesión?

a) pam_unix.so
b) pam_sss.so
c) pam_mkhomedir.so
d) pam_homedir.so

<details><summary>Respuesta</summary>

**c) pam_mkhomedir.so**

`pam_mkhomedir.so` se configura en la pila de sesión PAM y crea automáticamente el directorio home del usuario la primera vez que inicia sesión, usando `/etc/skel` como plantilla.
</details>

### Pregunta 4
¿Cuál es el formato correcto del realm Kerberos en `/etc/krb5.conf`?

a) empresa.local (minúsculas)
b) EMPRESA.LOCAL (mayúsculas)
c) Empresa.Local (capitalizado)
d) empresa.LOCAL (mixto)

<details><summary>Respuesta</summary>

**b) EMPRESA.LOCAL (mayúsculas)**

Por convención, el realm Kerberos siempre se escribe en MAYÚSCULAS en `/etc/krb5.conf`. El dominio DNS correspondiente se escribe en minúsculas, pero el realm siempre es mayúsculas.
</details>

### Pregunta 5
¿Qué comando se usa para unir una máquina Linux a un dominio AD utilizando SSSD/realmd?

a) `net ads join -U admin`
b) `realm join dominio -U admin`
c) `sssd join dominio`
d) `adcli connect dominio`

<details><summary>Respuesta</summary>

**b) `realm join dominio -U admin`**

`realm join` es el comando recomendado para unir sistemas Linux a dominios AD cuando se usa SSSD. Automáticamente configura sssd.conf, krb5.conf y los archivos PAM/NSS necesarios. `net ads join` se usa con Winbind.
</details>

### Pregunta 6
¿Qué parámetro de Winbind en smb.conf permite que los usuarios inicien sesión como `usuario` en lugar de `DOMINIO\usuario`?

a) `winbind separator = \`
b) `winbind use default domain = yes`
c) `winbind domain prefix = no`
d) `winbind short names = yes`

<details><summary>Respuesta</summary>

**b) `winbind use default domain = yes`**

`winbind use default domain = yes` permite omitir el prefijo de dominio al iniciar sesión. Los usuarios pueden autenticarse simplemente como `usuario` sin necesidad de escribir `DOMINIO\usuario` o `usuario@dominio`.
</details>

### Pregunta 7
¿Qué comando limpia toda la caché de SSSD?

a) `sssd --clear-cache`
b) `sss_cache -E`
c) `realm cache --clear`
d) `systemctl restart sssd --clear`

<details><summary>Respuesta</summary>

**b) `sss_cache -E`**

`sss_cache -E` invalida todas las entradas de la caché de SSSD (usuarios, grupos, servicios). También se puede usar `sss_cache -u usuario` para limpiar la caché de un usuario específico.
</details>

### Pregunta 8
¿Qué diferencia principal tiene `oddjob-mkhomedir` respecto a `pam_mkhomedir`?

a) oddjob es más rápido
b) oddjob funciona mejor con SELinux al ejecutar como servicio privilegiado
c) oddjob soporta más distribuciones Linux
d) oddjob crea homes con permisos más restrictivos

<details><summary>Respuesta</summary>

**b) oddjob funciona mejor con SELinux al ejecutar como servicio privilegiado**

`oddjob-mkhomedir` ejecuta la creación del directorio home a través del servicio oddjobd, que tiene los contextos SELinux apropiados. `pam_mkhomedir` crea el directorio en el contexto del proceso de login, lo que puede causar problemas con SELinux.
</details>

### Pregunta 9
¿Cuál de los siguientes es el archivo de configuración principal de SSSD y qué permisos requiere?

a) `/etc/sssd.conf` con permisos 0644
b) `/etc/sssd/sssd.conf` con permisos 0600
c) `/etc/sss/sssd.conf` con permisos 0640
d) `/etc/sssd/sssd.conf` con permisos 0644

<details><summary>Respuesta</summary>

**b) `/etc/sssd/sssd.conf` con permisos 0600**

El archivo de configuración de SSSD está en `/etc/sssd/sssd.conf` y debe tener permisos 0600 (lectura/escritura solo para root). SSSD se negará a iniciar si los permisos son más permisivos, por seguridad.
</details>

### Pregunta 10
Un administrador quiere que solo los miembros del grupo AD `LinuxUsers` puedan iniciar sesión en un servidor Linux con SSSD. ¿Qué parámetro de sssd.conf debe configurar?

a) `valid_users = @LinuxUsers`
b) `access_provider = ad` con `ad_access_filter`
c) `login_filter = LinuxUsers`
d) `allowed_groups = LinuxUsers`

<details><summary>Respuesta</summary>

**b) `access_provider = ad` con `ad_access_filter`**

Con `access_provider = ad`, SSSD utiliza las políticas de acceso de AD. Se puede combinar con `ad_access_filter = memberOf=CN=LinuxUsers,OU=Groups,DC=empresa,DC=local` para restringir el acceso solo a miembros de un grupo AD específico.
</details>

### Pregunta 11

¿Qué flag de control PAM indica que el módulo debe tener éxito para que la autenticación continúe, pero si falla, se siguen evaluando los demás módulos antes de denegar?

a) `required`
b) `sufficient`
c) `optional`
d) `requisite`

<details><summary>Respuesta</summary>

**a) `required`**

El flag `required` indica que el módulo debe tener éxito para que el resultado global sea exitoso, pero la evaluación continúa con los demás módulos de la pila. `requisite` deniega inmediatamente si falla. `sufficient` acepta inmediatamente si tiene éxito. `optional` no afecta al resultado global salvo que sea el único módulo.
</details>

### Pregunta 12

¿Qué parámetro de sssd.conf controla si los nombres de usuario se muestran en formato `usuario@dominio` o simplemente como `usuario`?

a) `full_name_format`
b) `use_fully_qualified_names`
c) `username_format`
d) `domain_prefix`

<details><summary>Respuesta</summary>

**b) `use_fully_qualified_names`**

Cuando `use_fully_qualified_names = false`, los usuarios se muestran y pueden iniciar sesión como `usuario` sin el sufijo de dominio. Con `true`, deben usar `usuario@dominio`. En entornos con un único dominio, se recomienda `false` para simplificar. Con múltiples dominios, `true` evita ambigüedades.
</details>

### Pregunta 13

¿Cuál es la diferencia entre `pam_sss.so` con `use_first_pass` y con `try_first_pass`?

a) No hay diferencia práctica
b) `use_first_pass` falla si no hay contraseña previa; `try_first_pass` solicita una nueva si no hay
c) `try_first_pass` es más seguro que `use_first_pass`
d) `use_first_pass` solo funciona con Kerberos

<details><summary>Respuesta</summary>

**b) `use_first_pass` falla si no hay contraseña previa; `try_first_pass` solicita una nueva si no hay**

`use_first_pass` utiliza la contraseña proporcionada a un módulo anterior y falla si no se proporcionó ninguna. `try_first_pass` intenta usar la contraseña anterior, pero si no existe o falla, solicita una nueva al usuario. `try_first_pass` es más flexible en pilas PAM donde el primer módulo puede no solicitar contraseña.
</details>

### Pregunta 14

¿Qué parámetro de sssd.conf define cuántos días son válidas las credenciales en caché para inicio de sesión offline?

a) `cache_timeout`
b) `offline_credentials_expiration`
c) `credential_lifetime`
d) `cache_credentials_timeout`

<details><summary>Respuesta</summary>

**b) `offline_credentials_expiration`**

El parámetro `offline_credentials_expiration` en la sección `[pam]` de sssd.conf define el número de días que las credenciales en caché permanecen válidas para autenticación offline. Por ejemplo, `offline_credentials_expiration = 7` permite el login offline durante 7 días. Requiere `cache_credentials = true` en la sección del dominio.
</details>

### Pregunta 15

¿Qué ventaja tiene SSSD sobre Winbind para la integración con FreeIPA?

a) SSSD es más rápido
b) SSSD tiene soporte nativo para FreeIPA como backend; Winbind no lo soporta
c) FreeIPA requiere Winbind para funcionar
d) No hay diferencia, ambos soportan FreeIPA por igual

<details><summary>Respuesta</summary>

**b) SSSD tiene soporte nativo para FreeIPA como backend; Winbind no lo soporta**

SSSD soporta múltiples backends de identidad: AD, LDAP, Kerberos y FreeIPA (con `id_provider = ipa`). Winbind, al ser parte de Samba, está diseñado específicamente para interactuar con Active Directory y no tiene soporte nativo para FreeIPA. SSSD es la opción recomendada en entornos FreeIPA.
</details>

### Pregunta 16

¿Qué parámetro de `krb5.conf` permite que los tickets Kerberos se puedan delegar a otros servicios?

a) `renewable = true`
b) `forwardable = true`
c) `proxiable = true`
d) `delegatable = true`

<details><summary>Respuesta</summary>

**b) `forwardable = true`**

El parámetro `forwardable = true` en la sección `[libdefaults]` de `/etc/krb5.conf` permite que los tickets TGT se puedan delegar a otros servicios. Esto es necesario para escenarios como SSO (Single Sign-On) donde un servicio necesita actuar en nombre del usuario para acceder a otros recursos.
</details>

### Pregunta 17

En la configuración PAM, ¿cuál es el propósito del tipo de módulo `account`?

a) Verificar la contraseña del usuario
b) Verificar si la cuenta está autorizada para acceder (no expirada, restricciones de horario, etc.)
c) Cambiar la contraseña del usuario
d) Ejecutar acciones al inicio de sesión

<details><summary>Respuesta</summary>

**b) Verificar si la cuenta está autorizada para acceder (no expirada, restricciones de horario, etc.)**

El tipo `account` en PAM verifica la autorización de la cuenta: si la cuenta está expirada, bloqueada, si hay restricciones de horario o si el usuario tiene permitido el acceso al servicio. No verifica la contraseña (eso es `auth`) ni cambia credenciales (`password`). Es la segunda etapa después de `auth`.
</details>

### Pregunta 18

¿Cuál es la configuración correcta en `/etc/sudoers` para permitir que el grupo AD `linuxadmins` ejecute cualquier comando con sudo?

a) `linuxadmins ALL=(ALL) ALL`
b) `%linuxadmins ALL=(ALL) ALL`
c) `@linuxadmins ALL=(ALL) ALL`
d) `+linuxadmins ALL=(ALL) ALL`

<details><summary>Respuesta</summary>

**b) `%linuxadmins ALL=(ALL) ALL`**

En la configuración de sudoers, los grupos se prefijan con `%`. La sintaxis `%linuxadmins ALL=(ALL) ALL` permite a todos los miembros del grupo `linuxadmins` ejecutar cualquier comando como cualquier usuario en cualquier host. Si SSSD usa `use_fully_qualified_names = true`, se debe usar `%linuxadmins@dominio`.
</details>

### Pregunta 19

¿Qué parámetro de Winbind en smb.conf permite la autenticación con credenciales en caché cuando el controlador de dominio no está disponible?

a) `winbind cache time = 300`
b) `winbind offline logon = yes`
c) `winbind credential cache = yes`
d) `winbind local cache = yes`

<details><summary>Respuesta</summary>

**b) `winbind offline logon = yes`**

`winbind offline logon = yes` permite que los usuarios inicien sesión utilizando credenciales almacenadas en caché local cuando el controlador de dominio no es alcanzable. Esto es especialmente útil para laptops y sistemas que pueden estar desconectados temporalmente de la red corporativa.
</details>

### Pregunta 20

¿Qué parámetro de sssd.conf se usa para especificar múltiples controladores de dominio AD como servidores de autenticación?

a) `ad_server`
b) `ldap_uri`
c) `krb5_server`
d) `auth_servers`

<details><summary>Respuesta</summary>

**a) `ad_server`**

El parámetro `ad_server` en sssd.conf acepta una lista de controladores de dominio separados por comas: `ad_server = dc1.empresa.local, dc2.empresa.local`. SSSD intentará conectar con el primero y, si falla, con los siguientes. También se puede usar `_srv_` para autodescubrimiento vía DNS SRV records.
</details>

### Pregunta 21

Escriba el comando para invalidar toda la caché de SSSD (usuarios, grupos y todos los servicios).

<input type="text" class="fill-blank" data-answer="sss_cache -E" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sss_cache -E**

`sss_cache -E` invalida todas las entradas de la caché de SSSD, forzando que la próxima consulta obtenga datos frescos del servidor. Para invalidar solo un usuario específico se usa `sss_cache -u usuario`. Después de ejecutar este comando, es recomendable reiniciar SSSD con `systemctl restart sssd`.
</details>

### Pregunta 22

Escriba el comando para verificar que un usuario del dominio se resuelve correctamente a través de NSS.

<input type="text" class="fill-blank" data-answer="getent passwd usuario" data-alt="id usuario" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**getent passwd usuario**

`getent passwd usuario` consulta NSS para resolver la información del usuario, incluyendo UID, GID, directorio home y shell. Si devuelve información, la integración NSS (ya sea vía winbind o sss) funciona correctamente. También se puede usar `id usuario` para ver UID, GID y grupos.
</details>

### Pregunta 23

Escriba el comando `realm` para listar todos los dominios a los que está unido el sistema.

<input type="text" class="fill-blank" data-answer="realm list" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**realm list**

`realm list` muestra todos los dominios a los que el sistema está actualmente unido, incluyendo información como el tipo de dominio, el nombre del realm, los métodos de autenticación configurados y los permisos de acceso (qué usuarios pueden iniciar sesión).
</details>

### Pregunta 24

Escriba el comando para verificar que el demonio winbind está respondiendo correctamente.

<input type="text" class="fill-blank" data-answer="wbinfo -p" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wbinfo -p**

`wbinfo -p` envía un ping al demonio `winbindd` para verificar que está funcionando y respondiendo. Si el comando tiene éxito, muestra "Ping to winbindd succeeded". Si falla, hay que verificar que el servicio está en ejecución con `systemctl status winbind`.
</details>

### Pregunta 25

Escriba el comando para abandonar el dominio `empresa.local` usando la herramienta `realm`.

<input type="text" class="fill-blank" data-answer="realm leave empresa.local" data-alt="realm leave" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**realm leave empresa.local**

`realm leave` elimina la máquina del dominio, desactiva la configuración de SSSD y limpia los archivos de configuración que se crearon durante la unión. Si solo hay un dominio configurado, se puede omitir el nombre del dominio. Este comando es el inverso de `realm join`.
</details>
