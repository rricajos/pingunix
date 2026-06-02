---
title: "305.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.4"
---

# Flashcards: 305.4 - Nfs

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué nivel de seguridad NFSv4 proporciona autenticación Kerberos con cifrado completo de datos?

</div>
<div class="flashcard-back">

**R:** c) sec=krb5p. `sec=krb5p` proporciona el nivel más alto de seguridad: autenticación Kerberos, verificación de integridad y cifrado completo (privacidad) de todos los datos transmitidos. La "p" significa "privacy" (privacidad).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-002">
<div class="flashcard-front">

**P:** En `/etc/exports`, ¿cómo se especifica que una exportación acepta tanto `krb5` como `krb5i`?

</div>
<div class="flashcard-back">

**R:** b) `sec=krb5:krb5i`. En `/etc/exports`, los múltiples mecanismos de seguridad se separan con dos puntos (`:`). Por ejemplo, `sec=krb5:krb5i:krb5p` acepta cualquiera de los tres niveles de seguridad Kerberos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué servicio moderno gestiona las credenciales GSS-API (Kerberos) para NFS?

</div>
<div class="flashcard-back">

**R:** c) gssproxy. `gssproxy` es el servicio moderno que reemplaza a `rpc.gssd` (cliente) y `rpc.svcgssd` (servidor) para la gestión de credenciales GSS-API en NFS con Kerberos. Proporciona una gestión más segura y eficiente de las credenciales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué sucede si el parámetro `Domain` en `/etc/idmapd.conf` no coincide entre el servidor y el cliente NFSv4?

</div>
<div class="flashcard-back">

**R:** b) Todos los archivos aparecen como propiedad de nobody:nobody. Si el `Domain` de idmapd no coincide entre servidor y cliente, el mapeo de identidades falla y todos los archivos se muestran con propietario y grupo `nobody:nobody`, ya que el sistema no puede traducir los nombres de usuario correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué principal Kerberos necesita el servidor NFS en su keytab?

</div>
<div class="flashcard-back">

**R:** b) `nfs/nfsserver.dominio@REALM`. El servidor NFS necesita un keytab con el principal `nfs/FQDN@REALM`. Este principal se crea en FreeIPA con `ipa service-add nfs/nfsserver.dominio` y el keytab se obtiene con `ipa-getkeytab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-006">
<div class="flashcard-front">

**P:** ¿Cómo se almacenan los mapas de automount centralizadamente en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) En el directorio LDAP de FreeIPA, accesibles vía SSSD. FreeIPA almacena los mapas de automount en su directorio LDAP (389 DS). Los clientes acceden a estos mapas a través de SSSD configurando `automount: sss` en `/etc/nsswitch.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando de FreeIPA se usa para crear un servicio NFS antes de obtener su keytab?

</div>
<div class="flashcard-back">

**R:** b) `ipa service-add nfs/nfsserver.empresa.local`. `ipa service-add` registra un servicio Kerberos en FreeIPA. El formato del principal es `servicio/FQDN`. Después de crear el servicio, se obtiene el keytab con `ipa-getkeytab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre `sec=sys` y `sec=krb5` en NFSv4?

</div>
<div class="flashcard-back">

**R:** b) `sys` usa UID/GID sin verificar identidad; `krb5` autentica mediante Kerberos. `sec=sys` confía en el UID/GID que envía el cliente sin verificación (susceptible a suplantación si un usuario tiene el mismo UID en otra máquina). `sec=krb5` usa Kerberos para verificar criptográficamente la identidad del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando limpia la caché de mapeo de identidades de NFSv4?

</div>
<div class="flashcard-back">

**R:** a) `nfsidmap -c`. `nfsidmap -c` limpia la caché de mapeo de identidades del kernel NFSv4. Esto es útil cuando se han realizado cambios en `/etc/idmapd.conf` o en la configuración de NSS y se necesita que los nuevos mapeos surtan efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere configurar automount centralizado en FreeIPA para que los clientes monten `/nfs/datos` desde `nfsserver.empresa.local:/export/datos` con Kerberos. ¿Cuál es la secuencia correcta de comandos?

</div>
<div class="flashcard-back">

**R:** b) `ipa automountmap-add`, luego `ipa automountkey-add` para auto.master y para el mapa. La secuencia correcta es: 1) `ipa automountmap-add default auto.nfs` para crear el mapa, 2) `ipa automountkey-add default auto.master --key=/nfs --info=auto.nfs` para añadir la entrada en auto.master, 3) `ipa automountkey-add default auto.nfs --key=datos --info="-fstype=nfs4,sec=krb5 nfsserver.empresa.local:/export/datos"` para definir el punto de montaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `/etc/exports` mapea el usuario root del cliente al usuario `nobody` en el servidor?

</div>
<div class="flashcard-back">

**R:** c) `root_squash`. `root_squash` es la opción por defecto en NFS que mapea las solicitudes del usuario root (UID 0) del cliente al usuario `nobody` en el servidor. Esto previene que un root remoto tenga privilegios de root sobre los archivos exportados. `no_root_squash` desactiva este comportamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué daemon legacy gestionaba las credenciales Kerberos en el lado del servidor NFS, ahora reemplazado por `gssproxy`?

</div>
<div class="flashcard-back">

**R:** b) `rpc.svcgssd`. `rpc.svcgssd` era el daemon del servidor NFS que validaba las credenciales Kerberos de los clientes. `rpc.gssd` era su equivalente en el cliente. Ambos han sido reemplazados por `gssproxy`, que gestiona las credenciales GSS-API tanto en servidor como en cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué opción en `/etc/nsswitch.conf` permite que autofs consulte los mapas de automount almacenados en LDAP vía SSSD?

</div>
<div class="flashcard-back">

**R:** b) `automount: sss files`. La entrada `automount: sss files` en `/etc/nsswitch.conf` indica al servicio autofs que primero consulte SSSD (que accede al LDAP de FreeIPA) y luego los archivos locales para obtener los mapas de automount.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué método de traducción en `idmapd.conf` se recomienda en entornos con FreeIPA y SSSD?

</div>
<div class="flashcard-back">

**R:** c) `Method = nsswitch`. `Method = nsswitch` es el método recomendado porque utiliza el sistema de resolución de nombres del sistema operativo (NSS), que en entornos FreeIPA está configurado para consultar SSSD. Esto permite que `idmapd` resuelva los nombres de usuario de forma centralizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción de `/etc/exports` mapea todos los usuarios del cliente (no solo root) al usuario `nobody`?

</div>
<div class="flashcard-back">

**R:** b) `all_squash`. `all_squash` mapea todas las solicitudes de todos los usuarios (no solo root) al usuario `nobody` en el servidor. Es útil para exports públicos donde no se necesita autenticación individual y todos los accesos deben realizarse con los mismos permisos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando muestra las exportaciones NFS activas en el servidor con sus opciones?

</div>
<div class="flashcard-back">

**R:** b) `exportfs -v`. `exportfs -v` muestra todas las exportaciones NFS activas con sus opciones detalladas en el servidor. `showmount -e` también lista las exportaciones pero desde la perspectiva del cliente y sin el mismo nivel de detalle en opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando de FreeIPA crea una ubicación de automount?

</div>
<div class="flashcard-back">

**R:** b) `ipa automountlocation-add default`. `ipa automountlocation-add` crea una ubicación de automount en FreeIPA que actúa como contenedor para los mapas de automount. La ubicación `default` es la más común y puede configurarse en `sssd.conf` con `ipa_automount_location = default`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué ocurre si un cliente NFSv4 intenta montar con `sec=krb5p` una exportación configurada solo con `sec=krb5`?

</div>
<div class="flashcard-back">

**R:** b) El montaje falla porque `krb5p` no es un nivel permitido. Si la exportación solo especifica `sec=krb5`, el cliente debe usar exactamente ese nivel de seguridad. Para permitir múltiples niveles, se deben listar todos separados por dos puntos en el servidor: `sec=krb5:krb5i:krb5p`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando activa la depuración NFS en el kernel para diagnosticar problemas?

</div>
<div class="flashcard-back">

**R:** b) `rpcdebug -m nfs -s all`. `rpcdebug -m nfs -s all` activa todos los mensajes de depuración NFS en el kernel. Los mensajes se envían a los logs del kernel y se pueden consultar con `dmesg` o `journalctl`. Para desactivar la depuración se usa `rpcdebug -m nfs -c all`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué campo de `/etc/idmapd.conf` define el usuario al que se mapean las identidades que no pueden resolverse?

</div>
<div class="flashcard-back">

**R:** c) `Nobody-User`. El parámetro `Nobody-User` en la sección `[Mapping]` de `idmapd.conf` define el usuario al que se mapean las identidades que no pueden resolverse correctamente. Por defecto es `nobody`. El parámetro equivalente para grupos es `Nobody-Group`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para montar un export NFS con autenticación Kerberos y cifrado completo desde `nfsserver.empresa.local:/srv/nfs/datos` en `/mnt/datos`. <input type="text" class="fill-blank" data-answer="mount -t nfs4 -o sec=krb5p nfsserver.empresa.local:/srv/nfs/datos /mnt/datos" data-alt="mount -t nfs4 -o sec=krb5p nfsserver.empresa.local:/srv/nfs/datos /mnt/datos" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mount -t nfs4 -o sec=krb5p nfsserver.empresa.local:/srv/nfs/datos /mnt/datos. Se usa `mount -t nfs4` para montar un export NFSv4. La opción `sec=krb5p` activa Kerberos con privacidad (cifrado completo de datos), que es el nivel más alto de seguridad disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para limpiar la cache de mapeo de identidades de NFSv4. <input type="text" class="fill-blank" data-answer="nfsidmap -c" data-alt="nfsidmap -c" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nfsidmap -c. `nfsidmap -c` limpia la cache de mapeo de identidades del kernel NFSv4. Es necesario ejecutar este comando después de cambiar la configuración de `/etc/idmapd.conf` o la resolución de nombres para que los nuevos mapeos surtan efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para registrar el servicio NFS del host `nfsserver.empresa.local` en FreeIPA. <input type="text" class="fill-blank" data-answer="ipa service-add nfs/nfsserver.empresa.local" data-alt="ipa service-add nfs/nfsserver.empresa.local" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa service-add nfs/nfsserver.empresa.local. `ipa service-add` registra un principal Kerberos de servicio en FreeIPA. El formato es `servicio/FQDN`. Después de registrar el servicio, se puede obtener el keytab con `ipa-getkeytab` para que el servidor NFS pueda autenticarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para reexportar todos los directorios de `/etc/exports` y mostrar la información detallada. <input type="text" class="fill-blank" data-answer="exportfs -arv" data-alt="exportfs -rav" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** exportfs -arv. `exportfs -arv` reexporta todos los directorios configurados en `/etc/exports`. La opción `-a` aplica a todas las exportaciones, `-r` reexporta (sincroniza la tabla de exportaciones del kernel con `/etc/exports`) y `-v` muestra información detallada de cada exportación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para verificar el contenido del keytab Kerberos ubicado en `/etc/krb5.keytab`. <input type="text" class="fill-blank" data-answer="klist -kt /etc/krb5.keytab" data-alt="klist -ke /etc/krb5.keytab" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** klist -kt /etc/krb5.keytab. `klist -kt` muestra los principales Kerberos almacenados en un archivo keytab junto con sus timestamps. La opción `-k` indica que se lee un keytab (no la cache de tickets) y `-t` muestra las marcas temporales de cada entrada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `sec=sys` usa UID/GID del sistema (susceptible a suplantación). `krb5` autentica...

</div>
<div class="flashcard-back">

**R:** `sec=sys` usa UID/GID del sistema (susceptible a suplantación). `krb5` autentica, `krb5i` añade integridad y `krb5p` añade cifrado. `krb5p` es el más seguro pero con mayor overhead.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: En `/etc/exports`, la opción `sec=` especifica qué mecanismos de seguridad acept...

</div>
<div class="flashcard-back">

**R:** En `/etc/exports`, la opción `sec=` especifica qué mecanismos de seguridad acepta la exportación. Se pueden listar múltiples separados por `:`. El cliente debe usar uno de los mecanismos permitidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `gssproxy` es la alternativa moderna a `rpc.gssd` y `rpc.svcgssd`. Gestiona las ...

</div>
<div class="flashcard-back">

**R:** `gssproxy` es la alternativa moderna a `rpc.gssd` y `rpc.svcgssd`. Gestiona las credenciales GSS-API tanto en el servidor como en el cliente NFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: FreeIPA almacena mapas de automount en LDAP. Los clientes consultan estos mapas ...

</div>
<div class="flashcard-back">

**R:** FreeIPA almacena mapas de automount en LDAP. Los clientes consultan estos mapas a través de SSSD (`automount: sss` en nsswitch.conf). Esto elimina la necesidad de mantener archivos auto.master/auto.* en cada cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: El parámetro `Domain` en idmapd.conf DEBE ser idéntico en el servidor y todos lo...

</div>
<div class="flashcard-back">

**R:** El parámetro `Domain` en idmapd.conf DEBE ser idéntico en el servidor y todos los clientes NFSv4. Si no coincide, todos los archivos aparecerán como propiedad de `nobody:nobody`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `sys`?

</div>
<div class="flashcard-back">

**R:** Autenticación basada en UID/GID (sin Kerberos, inseguro)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `krb5`?

</div>
<div class="flashcard-back">

**R:** Autenticación Kerberos (verifica identidad)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `krb5i`?

</div>
<div class="flashcard-back">

**R:** Kerberos + integridad (verifica que datos no se alteraron)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `krb5p`?

</div>
<div class="flashcard-back">

**R:** Kerberos + privacidad (cifra todos los datos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `sec=`?

</div>
<div class="flashcard-back">

**R:** Mecanismo(s) de seguridad permitidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-036">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** NFSv4 es la versión moderna del protocolo NFS (Network File System) que incluye soporte nativo para autenticación Kerberos, mapeo de identidades y ACLs. En entornos mixtos con FreeIPA, NFS se integra c

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

