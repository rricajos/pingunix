---
title: "304.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "304.1"
---

# Flashcards: 304.1 - Clientes De Autenticacion Linux

> 40 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué entrada en `/etc/nsswitch.conf` configura la resolución de usuarios a través de SSSD?

</div>
<div class="flashcard-back">

**R:** b) `passwd: files sss`. El módulo NSS de SSSD se llama `sss` (no `sssd`). El orden `files sss` asegura que los usuarios locales se resuelven primero (/etc/passwd), y luego se consulta SSSD para usuarios del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué parámetro de sssd.conf genera automáticamente UIDs y GIDs a partir del SID de Windows sin necesidad de extensiones POSIX en AD?

</div>
<div class="flashcard-back">

**R:** b) `ldap_id_mapping = true`. `ldap_id_mapping = true` hace que SSSD genere automáticamente UIDs y GIDs basándose en el SID de Windows mediante un algoritmo determinista. Esto elimina la necesidad de configurar atributos POSIX (uidNumber, gidNumber) en Active Directory.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM crea automáticamente el directorio home del usuario en su primer inicio de sesión?

</div>
<div class="flashcard-back">

**R:** c) pam_mkhomedir.so. `pam_mkhomedir.so` se configura en la pila de sesión PAM y crea automáticamente el directorio home del usuario la primera vez que inicia sesión, usando `/etc/skel` como plantilla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es el formato correcto del realm Kerberos en `/etc/krb5.conf`?

</div>
<div class="flashcard-back">

**R:** b) EMPRESA.LOCAL (mayúsculas). Por convención, el realm Kerberos siempre se escribe en MAYÚSCULAS en `/etc/krb5.conf`. El dominio DNS correspondiente se escribe en minúsculas, pero el realm siempre es mayúsculas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando se usa para unir una máquina Linux a un dominio AD utilizando SSSD/realmd?

</div>
<div class="flashcard-back">

**R:** b) `realm join dominio -U admin`. `realm join` es el comando recomendado para unir sistemas Linux a dominios AD cuando se usa SSSD. Automáticamente configura sssd.conf, krb5.conf y los archivos PAM/NSS necesarios. `net ads join` se usa con Winbind.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Winbind en smb.conf permite que los usuarios inicien sesión como `usuario` en lugar de `DOMINIO\usuario`?

</div>
<div class="flashcard-back">

**R:** b) `winbind use default domain = yes`. `winbind use default domain = yes` permite omitir el prefijo de dominio al iniciar sesión. Los usuarios pueden autenticarse simplemente como `usuario` sin necesidad de escribir `DOMINIO\usuario` o `usuario@dominio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando limpia toda la caché de SSSD?

</div>
<div class="flashcard-back">

**R:** b) `sss_cache -E`. `sss_cache -E` invalida todas las entradas de la caché de SSSD (usuarios, grupos, servicios). También se puede usar `sss_cache -u usuario` para limpiar la caché de un usuario específico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué diferencia principal tiene `oddjob-mkhomedir` respecto a `pam_mkhomedir`?

</div>
<div class="flashcard-back">

**R:** b) oddjob funciona mejor con SELinux al ejecutar como servicio privilegiado. `oddjob-mkhomedir` ejecuta la creación del directorio home a través del servicio oddjobd, que tiene los contextos SELinux apropiados. `pam_mkhomedir` crea el directorio en el contexto del proceso de login, lo que puede causar problemas con SELinux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál de los siguientes es el archivo de configuración principal de SSSD y qué permisos requiere?

</div>
<div class="flashcard-back">

**R:** b) `/etc/sssd/sssd.conf` con permisos 0600. El archivo de configuración de SSSD está en `/etc/sssd/sssd.conf` y debe tener permisos 0600 (lectura/escritura solo para root). SSSD se negará a iniciar si los permisos son más permisivos, por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere que solo los miembros del grupo AD `LinuxUsers` puedan iniciar sesión en un servidor Linux con SSSD. ¿Qué parámetro de sssd.conf debe configurar?

</div>
<div class="flashcard-back">

**R:** b) `access_provider = ad` con `ad_access_filter`. Con `access_provider = ad`, SSSD utiliza las políticas de acceso de AD. Se puede combinar con `ad_access_filter = memberOf=CN=LinuxUsers,OU=Groups,DC=empresa,DC=local` para restringir el acceso solo a miembros de un grupo AD específico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué flag de control PAM indica que el módulo debe tener éxito para que la autenticación continúe, pero si falla, se siguen evaluando los demás módulos antes de denegar?

</div>
<div class="flashcard-back">

**R:** a) `required`. El flag `required` indica que el módulo debe tener éxito para que el resultado global sea exitoso, pero la evaluación continúa con los demás módulos de la pila. `requisite` deniega inmediatamente si falla. `sufficient` acepta inmediatamente si tiene éxito. `optional` no afecta al resultado global salvo que sea el único módulo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué parámetro de sssd.conf controla si los nombres de usuario se muestran en formato `usuario@dominio` o simplemente como `usuario`?

</div>
<div class="flashcard-back">

**R:** b) `use_fully_qualified_names`. Cuando `use_fully_qualified_names = false`, los usuarios se muestran y pueden iniciar sesión como `usuario` sin el sufijo de dominio. Con `true`, deben usar `usuario@dominio`. En entornos con un único dominio, se recomienda `false` para simplificar. Con múltiples dominios, `true` evita ambigüedades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-013">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `pam_sss.so` con `use_first_pass` y con `try_first_pass`?

</div>
<div class="flashcard-back">

**R:** b) `use_first_pass` falla si no hay contraseña previa; `try_first_pass` solicita una nueva si no hay. `use_first_pass` utiliza la contraseña proporcionada a un módulo anterior y falla si no se proporcionó ninguna. `try_first_pass` intenta usar la contraseña anterior, pero si no existe o falla, solicita una nueva al usuario. `try_first_pass` es más flexible en pilas PAM donde el primer módulo puede no solicitar contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué parámetro de sssd.conf define cuántos días son válidas las credenciales en caché para inicio de sesión offline?

</div>
<div class="flashcard-back">

**R:** b) `offline_credentials_expiration`. El parámetro `offline_credentials_expiration` en la sección `[pam]` de sssd.conf define el número de días que las credenciales en caché permanecen válidas para autenticación offline. Por ejemplo, `offline_credentials_expiration = 7` permite el login offline durante 7 días. Requiere `cache_credentials = true` en la sección del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué ventaja tiene SSSD sobre Winbind para la integración con FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) SSSD tiene soporte nativo para FreeIPA como backend; Winbind no lo soporta. SSSD soporta múltiples backends de identidad: AD, LDAP, Kerberos y FreeIPA (con `id_provider = ipa`). Winbind, al ser parte de Samba, está diseñado específicamente para interactuar con Active Directory y no tiene soporte nativo para FreeIPA. SSSD es la opción recomendada en entornos FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `krb5.conf` permite que los tickets Kerberos se puedan delegar a otros servicios?

</div>
<div class="flashcard-back">

**R:** b) `forwardable = true`. El parámetro `forwardable = true` en la sección `[libdefaults]` de `/etc/krb5.conf` permite que los tickets TGT se puedan delegar a otros servicios. Esto es necesario para escenarios como SSO (Single Sign-On) donde un servicio necesita actuar en nombre del usuario para acceder a otros recursos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-017">
<div class="flashcard-front">

**P:** En la configuración PAM, ¿cuál es el propósito del tipo de módulo `account`?

</div>
<div class="flashcard-back">

**R:** b) Verificar si la cuenta está autorizada para acceder (no expirada, restricciones de horario, etc.). El tipo `account` en PAM verifica la autorización de la cuenta: si la cuenta está expirada, bloqueada, si hay restricciones de horario o si el usuario tiene permitido el acceso al servicio. No verifica la contraseña (eso es `auth`) ni cambia credenciales (`password`). Es la segunda etapa después de `auth`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-018">
<div class="flashcard-front">

**P:** ¿Cuál es la configuración correcta en `/etc/sudoers` para permitir que el grupo AD `linuxadmins` ejecute cualquier comando con sudo?

</div>
<div class="flashcard-back">

**R:** b) `%linuxadmins ALL=(ALL) ALL`. En la configuración de sudoers, los grupos se prefijan con `%`. La sintaxis `%linuxadmins ALL=(ALL) ALL` permite a todos los miembros del grupo `linuxadmins` ejecutar cualquier comando como cualquier usuario en cualquier host. Si SSSD usa `use_fully_qualified_names = true`, se debe usar `%linuxadmins@dominio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué parámetro de Winbind en smb.conf permite la autenticación con credenciales en caché cuando el controlador de dominio no está disponible?

</div>
<div class="flashcard-back">

**R:** b) `winbind offline logon = yes`. `winbind offline logon = yes` permite que los usuarios inicien sesión utilizando credenciales almacenadas en caché local cuando el controlador de dominio no es alcanzable. Esto es especialmente útil para laptops y sistemas que pueden estar desconectados temporalmente de la red corporativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué parámetro de sssd.conf se usa para especificar múltiples controladores de dominio AD como servidores de autenticación?

</div>
<div class="flashcard-back">

**R:** a) `ad_server`. El parámetro `ad_server` en sssd.conf acepta una lista de controladores de dominio separados por comas: `ad_server = dc1.empresa.local, dc2.empresa.local`. SSSD intentará conectar con el primero y, si falla, con los siguientes. También se puede usar `_srv_` para autodescubrimiento vía DNS SRV records.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para invalidar toda la caché de SSSD (usuarios, grupos y todos los servicios). <input type="text" class="fill-blank" data-answer="sss_cache -E" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** sss_cache -E. `sss_cache -E` invalida todas las entradas de la caché de SSSD, forzando que la próxima consulta obtenga datos frescos del servidor. Para invalidar solo un usuario específico se usa `sss_cache -u usuario`. Después de ejecutar este comando, es recomendable reiniciar SSSD con `systemctl restart sssd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para verificar que un usuario del dominio se resuelve correctamente a través de NSS. <input type="text" class="fill-blank" data-answer="getent passwd usuario" data-alt="id usuario" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** getent passwd usuario. `getent passwd usuario` consulta NSS para resolver la información del usuario, incluyendo UID, GID, directorio home y shell. Si devuelve información, la integración NSS (ya sea vía winbind o sss) funciona correctamente. También se puede usar `id usuario` para ver UID, GID y grupos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-023">
<div class="flashcard-front">

**P:** Escriba el comando `realm` para listar todos los dominios a los que está unido el sistema. <input type="text" class="fill-blank" data-answer="realm list" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** realm list. `realm list` muestra todos los dominios a los que el sistema está actualmente unido, incluyendo información como el tipo de dominio, el nombre del realm, los métodos de autenticación configurados y los permisos de acceso (qué usuarios pueden iniciar sesión).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-024">
<div class="flashcard-front">

**P:** Escriba el comando para verificar que el demonio winbind está respondiendo correctamente. <input type="text" class="fill-blank" data-answer="wbinfo -p" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** wbinfo -p. `wbinfo -p` envía un ping al demonio `winbindd` para verificar que está funcionando y respondiendo. Si el comando tiene éxito, muestra "Ping to winbindd succeeded". Si falla, hay que verificar que el servicio está en ejecución con `systemctl status winbind`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-025">
<div class="flashcard-front">

**P:** Escriba el comando para abandonar el dominio `empresa.local` usando la herramienta `realm`. <input type="text" class="fill-blank" data-answer="realm leave empresa.local" data-alt="realm leave" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** realm leave empresa.local. `realm leave` elimina la máquina del dominio, desactiva la configuración de SSSD y limpia los archivos de configuración que se crearon durante la unión. Si solo hay un dominio configurado, se puede omitir el nombre del dominio. Este comando es el inverso de `realm join`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `pam_winbind.so` y `pam_sss.so` son los módulos PAM para Winbind y SSSD respecti...

</div>
<div class="flashcard-back">

**R:** `pam_winbind.so` y `pam_sss.so` son los módulos PAM para Winbind y SSSD respectivamente. Ambos deben configurarse en los cuatro tipos de módulos PAM (auth, account, password, session).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El orden en nsswitch.conf importa. `files` primero asegura que los usuarios loca...

</div>
<div class="flashcard-back">

**R:** El orden en nsswitch.conf importa. `files` primero asegura que los usuarios locales se resuelven antes que los del dominio. `winbind` y `sss` no deben usarse simultáneamente para el mismo servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `winbind use default domain = yes` permite que los usuarios inicien sesión como ...

</div>
<div class="flashcard-back">

**R:** `winbind use default domain = yes` permite que los usuarios inicien sesión como `usuario` en lugar de `DOMINIO\usuario`. `winbind offline logon = yes` permite autenticación con credenciales en caché cuando el DC no está disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: SSSD con `id_provider = ad` es la forma recomendada de integrar Linux con Active...

</div>
<div class="flashcard-back">

**R:** SSSD con `id_provider = ad` es la forma recomendada de integrar Linux con Active Directory. `ldap_id_mapping = true` genera automáticamente UIDs/GIDs a partir del SID de Windows, sin necesidad de extensiones POSIX en AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: El realm Kerberos siempre se escribe en MAYÚSCULAS. `dns_lookup_kdc = true` perm...

</div>
<div class="flashcard-back">

**R:** El realm Kerberos siempre se escribe en MAYÚSCULAS. `dns_lookup_kdc = true` permite descubrir automáticamente los controladores de dominio a través de registros DNS SRV.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `pam_mkhomedir` y `oddjob-mkhomedir` crean directorios home automáticamente. `od...

</div>
<div class="flashcard-back">

**R:** `pam_mkhomedir` y `oddjob-mkhomedir` crean directorios home automáticamente. `oddjob` es preferido en Red Hat/CentOS porque funciona mejor con SELinux al ejecutar como servicio privilegiado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: Para usar grupos AD en sudoers, se prefijan con `%`. Si `use_fully_qualified_nam...

</div>
<div class="flashcard-back">

**R:** Para usar grupos AD en sudoers, se prefijan con `%`. Si `use_fully_qualified_names = true` en SSSD, se debe usar el nombre completo `%grupo@dominio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `auth`?

</div>
<div class="flashcard-back">

**R:** Verifica la identidad del usuario (contraseña)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `account`?

</div>
<div class="flashcard-back">

**R:** Verifica si la cuenta está autorizada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `password`?

</div>
<div class="flashcard-back">

**R:** Gestiona el cambio de contraseña

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `session`?

</div>
<div class="flashcard-back">

**R:** Acciones al inicio/fin de sesión

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-037">
<div class="flashcard-front">

**P:** Que hace el comando `files`?

</div>
<div class="flashcard-back">

**R:** Archivos locales (/etc/passwd, /etc/group)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** En entornos mixtos, los sistemas Linux frecuentemente necesitan autenticar usuarios contra un dominio Active Directory (AD). Las dos soluciones principales son Winbind (parte de Samba) y SSSD (System S

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Comparativa Winbind vs SSSD?

</div>
<div class="flashcard-back">

**R:** | Característica           | Winbind               | SSSD                    |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

