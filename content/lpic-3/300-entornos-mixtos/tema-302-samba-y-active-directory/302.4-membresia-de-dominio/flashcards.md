---
title: "302.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.4"
---

# Flashcards: 302.4 - Membresia De Dominio

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para unir un servidor Linux a un dominio Active Directory mediante Samba?

</div>
<div class="flashcard-back">

**R:** b) `net ads join -U administrator`. `net ads join` es el comando de Samba para unir un servidor Linux como miembro de un dominio AD. Requiere credenciales de administrador del dominio y que Kerberos esté configurado correctamente. `samba-tool domain join` se usa para unir un DC (no un servidor miembro). `net rpc join` es para dominios NT4.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué archivo debe configurarse para que el sistema Linux resuelva usuarios y grupos del dominio AD a través de winbind?

</div>
<div class="flashcard-back">

**R:** c) `/etc/nsswitch.conf`. El archivo `/etc/nsswitch.conf` controla el orden en que el sistema consulta las fuentes de información de nombres. Para winbind, debe incluir `winbind` en las líneas passwd y group: `passwd: files winbind` y `group: files winbind`. Sin esta configuración, `getent passwd` no mostrará los usuarios del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué diferencia principal tiene SSSD frente a winbind para la integración con Active Directory?

</div>
<div class="flashcard-back">

**R:** c) Winbind es necesario cuando el servidor también comparte archivos vía SMB. Winbind está integrado con Samba y es necesario cuando el servidor Linux, además de autenticar usuarios AD, también comparte archivos mediante el protocolo SMB. SSSD es preferido para estaciones de trabajo y servidores que solo necesitan autenticación AD, ya que ofrece un mejor manejo de caché offline y configuración más sencilla con realmd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comandos de Kerberos se utilizan para obtener, listar y destruir tickets?

</div>
<div class="flashcard-back">

**R:** b) `kinit`, `klist`, `kdestroy`. `kinit` obtiene un TGT (Ticket Granting Ticket) del KDC Kerberos, `klist` muestra los tickets almacenados en la caché de credenciales y `kdestroy` elimina todos los tickets de la caché. Estos son los tres comandos fundamentales para trabajar con tickets Kerberos. El realm se especifica en MAYÚSCULAS: `kinit usuario@EMPRESA.COM`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf permite que los usuarios de dominio inicien sesión sin necesidad de prefijar el nombre del dominio?

</div>
<div class="flashcard-back">

**R:** b) `winbind use default domain = yes`. Cuando `winbind use default domain = yes`, los usuarios pueden iniciar sesión con solo su nombre (ej: "pedro") en lugar de "EMPRESA\pedro" o "pedro@empresa.com". Winbind asume automáticamente el dominio predeterminado configurado en `workgroup`. Esto simplifica el uso pero puede causar conflictos si hay usuarios locales con el mismo nombre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué backend idmap es más apropiado para un entorno multidominio donde se desea asignación automática de rangos?

</div>
<div class="flashcard-back">

**R:** d) autorid. El backend `autorid` asigna automáticamente rangos de UIDs/GIDs a cada dominio que se descubre, sin necesidad de configuración por dominio. Es ideal para entornos multidominio con confianzas porque simplifica enormemente la configuración. Cada dominio recibe un bloque de IDs del rango total configurado. Sin embargo, los IDs pueden variar entre servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-007">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM se utiliza para crear automáticamente el directorio home de un usuario de dominio al iniciar sesión por primera vez?

</div>
<div class="flashcard-back">

**R:** c) `pam_mkhomedir.so`. El módulo `pam_mkhomedir.so` se configura en la sección de sesión de PAM (`/etc/pam.d/common-session`) y crea automáticamente el directorio home del usuario basándose en `/etc/skel` cuando el usuario inicia sesión por primera vez. Ejemplo: `session required pam_mkhomedir.so skel=/etc/skel umask=0077`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando alternativo a `net ads join` configura automáticamente SSSD, Kerberos, PAM y NSS al unirse a un dominio?

</div>
<div class="flashcard-back">

**R:** b) `realm join empresa.com`. `realm join` (proporcionado por realmd) es una herramienta que automatiza el proceso completo de unión a un dominio: configura Kerberos (`/etc/krb5.conf`), SSSD (`/etc/sssd/sssd.conf`), PAM y NSS. Es más simple que `net ads join` que requiere configuración manual de cada componente. `adcli` es una herramienta complementaria que realm puede usar internamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-009">
<div class="flashcard-front">

**P:** En la configuración idmap, ¿qué representa el backend con asterisco (`idmap config * : backend`)?

</div>
<div class="flashcard-back">

**R:** b) La configuración comodín para dominios no configurados explícitamente. El asterisco (`*`) en la configuración idmap actúa como comodín y se aplica a cualquier dominio que no tenga una configuración específica. Es obligatorio definir al menos el backend y rango para `*`. Típicamente se usa `tdb` como backend comodín. Los dominios específicos se configuran por nombre: `idmap config EMPRESA : backend = rid`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-010">
<div class="flashcard-front">

**P:** Un administrador ejecuta `kinit pedro@EMPRESA.COM` pero recibe un error de preautenticación. ¿Cuál es la causa más probable?

</div>
<div class="flashcard-back">

**R:** b) La contraseña es incorrecta o la diferencia de tiempo con el DC excede 5 minutos. Los errores de preautenticación Kerberos se producen generalmente por contraseña incorrecta o por un desfase de tiempo (clock skew) superior a 5 minutos entre el cliente y el KDC. Se debe verificar la sincronización NTP con `ntpdate -q dc.empresa.com` o `timedatectl`. También puede deberse a una cuenta bloqueada o deshabilitada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué backend idmap lee los atributos `uidNumber` y `gidNumber` directamente de los objetos de Active Directory según el esquema RFC2307?

</div>
<div class="flashcard-back">

**R:** c) ad. El backend `idmap_ad` lee los atributos POSIX (`uidNumber`, `gidNumber`) definidos en AD según el esquema RFC2307. Requiere que cada objeto tenga estos atributos configurados manualmente. La ventaja es que los IDs son consistentes entre todos los servidores porque están centralizados en AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf define la shell predeterminada para los usuarios de dominio que inician sesión a través de winbind?

</div>
<div class="flashcard-back">

**R:** c) `template shell = /bin/bash`. El parámetro `template shell` en smb.conf define la shell predeterminada que winbind asigna a los usuarios del dominio cuando se resuelven a través de NSS. Sin este parámetro, los usuarios del dominio podrían no tener una shell asignada y no podrían iniciar sesión interactivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando verifica que la relación de confianza entre un servidor miembro Linux y el dominio AD es funcional?

</div>
<div class="flashcard-back">

**R:** b) `wbinfo -t`. `wbinfo -t` verifica la relación de confianza (trust) entre el servidor miembro y el controlador de dominio enviando una verificación de secreto de máquina. Si la salida indica éxito, la relación de confianza funciona correctamente. `net ads testjoin` también verifica la membresía, pero `wbinfo -t` comprueba específicamente la confianza RPC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-014">
<div class="flashcard-front">

**P:** En la configuración de SSSD, ¿qué parámetro permite el inicio de sesión con credenciales en caché cuando el controlador de dominio no está disponible?

</div>
<div class="flashcard-back">

**R:** b) `cache_credentials = True`. El parámetro `cache_credentials = True` en la sección de dominio de `/etc/sssd/sssd.conf` permite que SSSD almacene las credenciales del usuario en caché local. Esto permite el inicio de sesión cuando el DC no es alcanzable. `winbind offline logon` es el equivalente para winbind, no para SSSD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué sección del archivo `/etc/krb5.conf` define la correspondencia entre nombres de dominio DNS y realms Kerberos?

</div>
<div class="flashcard-back">

**R:** c) `[domain_realm]`. La sección `[domain_realm]` en `/etc/krb5.conf` mapea nombres de dominio DNS a realms Kerberos. Por ejemplo, `.empresa.com = EMPRESA.COM` indica que todos los hosts del dominio DNS `empresa.com` pertenecen al realm Kerberos `EMPRESA.COM`. La entrada con punto inicial cubre los subdominios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué parámetro de SSSD permite filtrar el acceso al sistema basándose en la pertenencia a un grupo de Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `ad_access_filter`. El parámetro `ad_access_filter` en sssd.conf permite restringir el acceso al sistema basándose en atributos LDAP como `memberOf`. Por ejemplo: `ad_access_filter = memberOf=CN=LinuxUsers,OU=Groups,DC=empresa,DC=com` permite solo a miembros de ese grupo. Requiere `access_provider = ad`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-017">
<div class="flashcard-front">

**P:** Un administrador configura `idmap config * : range = 10000-19999` e `idmap config EMPRESA : range = 10000-99999`. ¿Cuál es el problema?

</div>
<div class="flashcard-back">

**R:** b) Los rangos se solapan, lo que puede causar conflictos de IDs. Los rangos idmap de diferentes backends nunca deben solaparse. En este caso, el rango del comodín (`*`: 10000-19999) se superpone con el rango de EMPRESA (10000-99999). Esto puede causar que un mismo UID/GID sea asignado a diferentes usuarios de diferentes dominios. El rango comodín debería usar un rango no solapado, por ejemplo 3000-7999.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando de `realm` permite restringir el acceso al sistema solo a usuarios específicos del dominio después de unirse?

</div>
<div class="flashcard-back">

**R:** b) `realm permit usuario1@empresa.com`. `realm permit` configura qué usuarios o grupos del dominio pueden iniciar sesión en el sistema. Se puede especificar usuarios individuales (`realm permit usuario1@empresa.com`) o permitir a todos (`realm permit --all`). Para denegar el acceso a todos se usa `realm deny --all`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-019">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia fundamental entre el backend idmap `rid` y `autorid`?

</div>
<div class="flashcard-back">

**R:** b) `rid` requiere configuración por dominio; `autorid` asigna rangos automáticamente a cada dominio. El backend `rid` calcula UIDs/GIDs sumando el RID al inicio del rango configurado para un dominio específico, requiriendo configuración explícita por dominio. `autorid` asigna automáticamente bloques de IDs a cada dominio que descubre, sin necesidad de configuración individual. `autorid` es ideal para entornos multidominio con confianzas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué opción del archivo `/etc/security/pam_winbind.conf` permite requerir que el usuario pertenezca a un grupo específico para poder iniciar sesión?

</div>
<div class="flashcard-back">

**R:** b) `require_membership_of`. El parámetro `require_membership_of` en `/etc/security/pam_winbind.conf` restringe el acceso solo a miembros de un SID de grupo específico. Se puede indicar el SID completo o el nombre del grupo. Esto proporciona un control de acceso adicional a nivel de PAM, independiente de la configuración de Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para obtener un ticket Kerberos TGT para el usuario `admin` en el realm `CORP.NET`. <input type="text" class="fill-blank" data-answer="kinit admin@CORP.NET" data-alt="kinit admin@corp.net" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** kinit admin@CORP.NET. `kinit` solicita un TGT (Ticket Granting Ticket) al KDC del realm especificado. El formato es `kinit usuario@REALM`. Aunque el realm se define en mayúsculas por convención, Kerberos acepta ambas formas. El ticket se almacena en la caché de credenciales, normalmente en `/tmp/krb5cc_<uid>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para verificar que un servidor Linux se ha unido correctamente al dominio AD usando herramientas de Samba. <input type="text" class="fill-blank" data-answer="net ads testjoin" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** net ads testjoin. `net ads testjoin` verifica que la cuenta de máquina del servidor existe en Active Directory y que las credenciales de la máquina son válidas. Si la unión es correcta, muestra "Join is OK". Si falla, indica problemas con la cuenta de máquina o las credenciales almacenadas en `secrets.tdb`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-023">
<div class="flashcard-front">

**P:** Escriba el comando para listar todos los usuarios del dominio usando la herramienta de winbind. <input type="text" class="fill-blank" data-answer="wbinfo -u" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** wbinfo -u. `wbinfo -u` consulta a winbind para listar todos los usuarios del dominio. Este comando se comunica directamente con el demonio `winbindd` sin pasar por NSS. Para listar grupos se usa `wbinfo -g`. Para verificar que NSS también funciona, se puede usar `getent passwd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-024">
<div class="flashcard-front">

**P:** Escriba el comando para descubrir la información de un dominio AD llamado `empresa.com` usando la herramienta `realm`. <input type="text" class="fill-blank" data-answer="realm discover empresa.com" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** realm discover empresa.com. `realm discover` consulta DNS y LDAP para obtener información sobre el dominio especificado: tipo de dominio, paquetes necesarios, estado de la unión y capacidades disponibles. Es el primer paso recomendado antes de unirse a un dominio con `realm join`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-025">
<div class="flashcard-front">

**P:** Escriba el comando para destruir todos los tickets Kerberos almacenados en la caché del usuario actual. <input type="text" class="fill-blank" data-answer="kdestroy" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** kdestroy. `kdestroy` elimina todos los tickets Kerberos de la caché de credenciales del usuario actual. Esto es útil para limpiar tickets expirados, cambiar de identidad o resolver problemas de autenticación. La caché se encuentra normalmente en `/tmp/krb5cc_<uid>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `net ads join` es el comando principal para unir un servidor Linux a un dominio ...

</div>
<div class="flashcard-back">

**R:** `net ads join` es el comando principal para unir un servidor Linux a un dominio AD. Requiere credenciales de administrador del dominio y Kerberos funcional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: SSSD es preferido para autenticación de usuarios en estaciones de trabajo Linux....

</div>
<div class="flashcard-back">

**R:** SSSD es preferido para autenticación de usuarios en estaciones de trabajo Linux. Winbind es necesario cuando el servidor también comparte archivos vía Samba (SMB).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conocer `kinit` (obtener ticket), `klist` (listar tickets) y `kdestroy` (destrui...

</div>
<div class="flashcard-back">

**R:** Conocer `kinit` (obtener ticket), `klist` (listar tickets) y `kdestroy` (destruir tickets). El ticket TGT tiene una validez predeterminada de 10 horas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-029">
<div class="flashcard-front">

**P:** Que es/son Unión al dominio con realm join?

</div>
<div class="flashcard-back">

**R:** `realm` (de SSSD/realmd) es una alternativa moderna a `net ads join`:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-030">
<div class="flashcard-front">

**P:** Que es/son SSSD para integración con AD?

</div>
<div class="flashcard-back">

**R:** SSSD (System Security Services Daemon) es una alternativa a winbind para integración con AD:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `net ads join` y `realm join` son los dos métodos principales de unión a AD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.4">
</div>

<div class="flashcard" data-id="302.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

