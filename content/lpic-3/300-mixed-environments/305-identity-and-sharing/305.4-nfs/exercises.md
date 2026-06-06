---
title: "305.4 - Ejercicios: NFS"
description: "Ejercicios de práctica para NFSv4 con Kerberos e integración FreeIPA"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.4"
peso: 3
tags:
  - lpic-3
  - tema-305
  - nfs
  - kerberos
  - ejercicios
---

# 305.4 Ejercicios - NFS

### Pregunta 1
¿Qué nivel de seguridad NFSv4 proporciona autenticación Kerberos con cifrado completo de datos?

a) sec=krb5
b) sec=krb5i
c) sec=krb5p
d) sec=krb5e

<details><summary>Respuesta</summary>

**c) sec=krb5p**

`sec=krb5p` proporciona el nivel más alto de seguridad: autenticación Kerberos, verificación de integridad y cifrado completo (privacidad) de todos los datos transmitidos. La "p" significa "privacy" (privacidad).
</details>

### Pregunta 2
En `/etc/exports`, ¿cómo se especifica que una exportación acepta tanto `krb5` como `krb5i`?

a) `sec=krb5,krb5i`
b) `sec=krb5:krb5i`
c) `sec=krb5+krb5i`
d) `sec=krb5|krb5i`

<details><summary>Respuesta</summary>

**b) `sec=krb5:krb5i`**

En `/etc/exports`, los múltiples mecanismos de seguridad se separan con dos puntos (`:`). Por ejemplo, `sec=krb5:krb5i:krb5p` acepta cualquiera de los tres niveles de seguridad Kerberos.
</details>

### Pregunta 3
¿Qué servicio moderno gestiona las credenciales GSS-API (Kerberos) para NFS?

a) rpc.gssd
b) rpc.svcgssd
c) gssproxy
d) krb5kdc

<details><summary>Respuesta</summary>

**c) gssproxy**

`gssproxy` es el servicio moderno que reemplaza a `rpc.gssd` (cliente) y `rpc.svcgssd` (servidor) para la gestión de credenciales GSS-API en NFS con Kerberos. Proporciona una gestión más segura y eficiente de las credenciales.
</details>

### Pregunta 4
¿Qué sucede si el parámetro `Domain` en `/etc/idmapd.conf` no coincide entre el servidor y el cliente NFSv4?

a) La conexión NFS falla completamente
b) Todos los archivos aparecen como propiedad de nobody:nobody
c) Los archivos se montan como solo lectura
d) El rendimiento se degrada significativamente

<details><summary>Respuesta</summary>

**b) Todos los archivos aparecen como propiedad de nobody:nobody**

Si el `Domain` de idmapd no coincide entre servidor y cliente, el mapeo de identidades falla y todos los archivos se muestran con propietario y grupo `nobody:nobody`, ya que el sistema no puede traducir los nombres de usuario correctamente.
</details>

### Pregunta 5
¿Qué principal Kerberos necesita el servidor NFS en su keytab?

a) `host/nfsserver@REALM`
b) `nfs/nfsserver.dominio@REALM`
c) `krbtgt/REALM@REALM`
d) `HTTP/nfsserver@REALM`

<details><summary>Respuesta</summary>

**b) `nfs/nfsserver.dominio@REALM`**

El servidor NFS necesita un keytab con el principal `nfs/FQDN@REALM`. Este principal se crea en FreeIPA con `ipa service-add nfs/nfsserver.dominio` y el keytab se obtiene con `ipa-getkeytab`.
</details>

### Pregunta 6
¿Cómo se almacenan los mapas de automount centralizadamente en FreeIPA?

a) En archivos /etc/auto.* sincronizados por rsync
b) En el directorio LDAP de FreeIPA, accesibles vía SSSD
c) En una base de datos SQL de FreeIPA
d) En el share SYSVOL de FreeIPA

<details><summary>Respuesta</summary>

**b) En el directorio LDAP de FreeIPA, accesibles vía SSSD**

FreeIPA almacena los mapas de automount en su directorio LDAP (389 DS). Los clientes acceden a estos mapas a través de SSSD configurando `automount: sss` en `/etc/nsswitch.conf`.
</details>

### Pregunta 7
¿Qué comando de FreeIPA se usa para crear un servicio NFS antes de obtener su keytab?

a) `ipa nfs-add nfsserver.empresa.local`
b) `ipa service-add nfs/nfsserver.empresa.local`
c) `ipa host-add-service nfsserver nfs`
d) `ipa-getkeytab -p nfs/nfsserver`

<details><summary>Respuesta</summary>

**b) `ipa service-add nfs/nfsserver.empresa.local`**

`ipa service-add` registra un servicio Kerberos en FreeIPA. El formato del principal es `servicio/FQDN`. Después de crear el servicio, se obtiene el keytab con `ipa-getkeytab`.
</details>

### Pregunta 8
¿Qué diferencia hay entre `sec=sys` y `sec=krb5` en NFSv4?

a) No hay diferencia, son equivalentes
b) `sys` usa UID/GID sin verificar identidad; `krb5` autentica mediante Kerberos
c) `sys` es más seguro porque verifica el sistema operativo
d) `krb5` solo funciona con NFSv3

<details><summary>Respuesta</summary>

**b) `sys` usa UID/GID sin verificar identidad; `krb5` autentica mediante Kerberos**

`sec=sys` confía en el UID/GID que envía el cliente sin verificación (susceptible a suplantación si un usuario tiene el mismo UID en otra máquina). `sec=krb5` usa Kerberos para verificar criptográficamente la identidad del usuario.
</details>

### Pregunta 9
¿Qué comando limpia la caché de mapeo de identidades de NFSv4?

a) `nfsidmap -c`
b) `idmap --clear`
c) `nfs-cache clear`
d) `exportfs -c`

<details><summary>Respuesta</summary>

**a) `nfsidmap -c`**

`nfsidmap -c` limpia la caché de mapeo de identidades del kernel NFSv4. Esto es útil cuando se han realizado cambios en `/etc/idmapd.conf` o en la configuración de NSS y se necesita que los nuevos mapeos surtan efecto.
</details>

### Pregunta 10
Un administrador quiere configurar automount centralizado en FreeIPA para que los clientes monten `/nfs/datos` desde `nfsserver.empresa.local:/export/datos` con Kerberos. ¿Cuál es la secuencia correcta de comandos?

a) Solo crear el archivo `/etc/auto.nfs` en cada cliente
b) `ipa automountmap-add`, luego `ipa automountkey-add` para auto.master y para el mapa
c) `ipa nfs-export-add` seguido de `ipa automount-enable`
d) Configurar SSSD con `nfs_provider = ipa`

<details><summary>Respuesta</summary>

**b) `ipa automountmap-add`, luego `ipa automountkey-add` para auto.master y para el mapa**

La secuencia correcta es: 1) `ipa automountmap-add default auto.nfs` para crear el mapa, 2) `ipa automountkey-add default auto.master --key=/nfs --info=auto.nfs` para añadir la entrada en auto.master, 3) `ipa automountkey-add default auto.nfs --key=datos --info="-fstype=nfs4,sec=krb5 nfsserver.empresa.local:/export/datos"` para definir el punto de montaje.
</details>

### Pregunta 11

¿Qué opción de `/etc/exports` mapea el usuario root del cliente al usuario `nobody` en el servidor?

a) `no_root_squash`
b) `all_squash`
c) `root_squash`
d) `anon_squash`

<details><summary>Respuesta</summary>

**c) `root_squash`**

`root_squash` es la opción por defecto en NFS que mapea las solicitudes del usuario root (UID 0) del cliente al usuario `nobody` en el servidor. Esto previene que un root remoto tenga privilegios de root sobre los archivos exportados. `no_root_squash` desactiva este comportamiento.
</details>

### Pregunta 12

¿Qué daemon legacy gestionaba las credenciales Kerberos en el lado del servidor NFS, ahora reemplazado por `gssproxy`?

a) `rpc.gssd`
b) `rpc.svcgssd`
c) `rpc.mountd`
d) `rpc.nfsd`

<details><summary>Respuesta</summary>

**b) `rpc.svcgssd`**

`rpc.svcgssd` era el daemon del servidor NFS que validaba las credenciales Kerberos de los clientes. `rpc.gssd` era su equivalente en el cliente. Ambos han sido reemplazados por `gssproxy`, que gestiona las credenciales GSS-API tanto en servidor como en cliente.
</details>

### Pregunta 13

¿Qué opción en `/etc/nsswitch.conf` permite que autofs consulte los mapas de automount almacenados en LDAP vía SSSD?

a) `automount: ldap files`
b) `automount: sss files`
c) `automount: ipa files`
d) `automount: sssd ldap`

<details><summary>Respuesta</summary>

**b) `automount: sss files`**

La entrada `automount: sss files` en `/etc/nsswitch.conf` indica al servicio autofs que primero consulte SSSD (que accede al LDAP de FreeIPA) y luego los archivos locales para obtener los mapas de automount.
</details>

### Pregunta 14

¿Qué método de traducción en `idmapd.conf` se recomienda en entornos con FreeIPA y SSSD?

a) `Method = static`
b) `Method = umich_ldap`
c) `Method = nsswitch`
d) `Method = direct`

<details><summary>Respuesta</summary>

**c) `Method = nsswitch`**

`Method = nsswitch` es el método recomendado porque utiliza el sistema de resolución de nombres del sistema operativo (NSS), que en entornos FreeIPA está configurado para consultar SSSD. Esto permite que `idmapd` resuelva los nombres de usuario de forma centralizada.
</details>

### Pregunta 15

¿Qué opción de `/etc/exports` mapea todos los usuarios del cliente (no solo root) al usuario `nobody`?

a) `root_squash`
b) `all_squash`
c) `no_root_squash`
d) `anon_uid`

<details><summary>Respuesta</summary>

**b) `all_squash`**

`all_squash` mapea todas las solicitudes de todos los usuarios (no solo root) al usuario `nobody` en el servidor. Es útil para exports públicos donde no se necesita autenticación individual y todos los accesos deben realizarse con los mismos permisos.
</details>

### Pregunta 16

¿Qué comando muestra las exportaciones NFS activas en el servidor con sus opciones?

a) `showmount -e`
b) `exportfs -v`
c) `nfsstat -e`
d) `rpcinfo -e`

<details><summary>Respuesta</summary>

**b) `exportfs -v`**

`exportfs -v` muestra todas las exportaciones NFS activas con sus opciones detalladas en el servidor. `showmount -e` también lista las exportaciones pero desde la perspectiva del cliente y sin el mismo nivel de detalle en opciones.
</details>

### Pregunta 17

¿Qué comando de FreeIPA crea una ubicación de automount?

a) `ipa automount-add default`
b) `ipa automountlocation-add default`
c) `ipa automount-location-create default`
d) `ipa autofs-location-add default`

<details><summary>Respuesta</summary>

**b) `ipa automountlocation-add default`**

`ipa automountlocation-add` crea una ubicación de automount en FreeIPA que actúa como contenedor para los mapas de automount. La ubicación `default` es la más común y puede configurarse en `sssd.conf` con `ipa_automount_location = default`.
</details>

### Pregunta 18

¿Qué ocurre si un cliente NFSv4 intenta montar con `sec=krb5p` una exportación configurada solo con `sec=krb5`?

a) El montaje se realiza con `sec=krb5` automáticamente
b) El montaje falla porque `krb5p` no es un nivel permitido
c) El montaje se realiza con `sec=krb5p` ignorando la configuración del servidor
d) El servidor negocia automáticamente al nivel más alto disponible

<details><summary>Respuesta</summary>

**b) El montaje falla porque `krb5p` no es un nivel permitido**

Si la exportación solo especifica `sec=krb5`, el cliente debe usar exactamente ese nivel de seguridad. Para permitir múltiples niveles, se deben listar todos separados por dos puntos en el servidor: `sec=krb5:krb5i:krb5p`.
</details>

### Pregunta 19

¿Qué comando activa la depuración NFS en el kernel para diagnosticar problemas?

a) `nfsstat --debug`
b) `rpcdebug -m nfs -s all`
c) `nfs-debug --enable`
d) `exportfs --debug`

<details><summary>Respuesta</summary>

**b) `rpcdebug -m nfs -s all`**

`rpcdebug -m nfs -s all` activa todos los mensajes de depuración NFS en el kernel. Los mensajes se envían a los logs del kernel y se pueden consultar con `dmesg` o `journalctl`. Para desactivar la depuración se usa `rpcdebug -m nfs -c all`.
</details>

### Pregunta 20

¿Qué campo de `/etc/idmapd.conf` define el usuario al que se mapean las identidades que no pueden resolverse?

a) `Default-User`
b) `Anonymous-User`
c) `Nobody-User`
d) `Fallback-User`

<details><summary>Respuesta</summary>

**c) `Nobody-User`**

El parámetro `Nobody-User` en la sección `[Mapping]` de `idmapd.conf` define el usuario al que se mapean las identidades que no pueden resolverse correctamente. Por defecto es `nobody`. El parámetro equivalente para grupos es `Nobody-Group`.
</details>

### Pregunta 21

Escribe el comando para montar un export NFS con autenticación Kerberos y cifrado completo desde `nfsserver.empresa.local:/srv/nfs/datos` en `/mnt/datos`.

<input type="text" class="fill-blank" data-answer="mount -t nfs4 -o sec=krb5p nfsserver.empresa.local:/srv/nfs/datos /mnt/datos" data-alt="mount -t nfs4 -o sec=krb5p nfsserver.empresa.local:/srv/nfs/datos /mnt/datos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -t nfs4 -o sec=krb5p nfsserver.empresa.local:/srv/nfs/datos /mnt/datos**

Se usa `mount -t nfs4` para montar un export NFSv4. La opción `sec=krb5p` activa Kerberos con privacidad (cifrado completo de datos), que es el nivel más alto de seguridad disponible.
</details>

### Pregunta 22

Escribe el comando para limpiar la cache de mapeo de identidades de NFSv4.

<input type="text" class="fill-blank" data-answer="nfsidmap -c" data-alt="nfsidmap -c" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nfsidmap -c**

`nfsidmap -c` limpia la cache de mapeo de identidades del kernel NFSv4. Es necesario ejecutar este comando después de cambiar la configuración de `/etc/idmapd.conf` o la resolución de nombres para que los nuevos mapeos surtan efecto.
</details>

### Pregunta 23

Escribe el comando para registrar el servicio NFS del host `nfsserver.empresa.local` en FreeIPA.

<input type="text" class="fill-blank" data-answer="ipa service-add nfs/nfsserver.empresa.local" data-alt="ipa service-add nfs/nfsserver.empresa.local" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa service-add nfs/nfsserver.empresa.local**

`ipa service-add` registra un principal Kerberos de servicio en FreeIPA. El formato es `servicio/FQDN`. Después de registrar el servicio, se puede obtener el keytab con `ipa-getkeytab` para que el servidor NFS pueda autenticarse.
</details>

### Pregunta 24

Escribe el comando para reexportar todos los directorios de `/etc/exports` y mostrar la información detallada.

<input type="text" class="fill-blank" data-answer="exportfs -arv" data-alt="exportfs -rav" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**exportfs -arv**

`exportfs -arv` reexporta todos los directorios configurados en `/etc/exports`. La opción `-a` aplica a todas las exportaciones, `-r` reexporta (sincroniza la tabla de exportaciones del kernel con `/etc/exports`) y `-v` muestra información detallada de cada exportación.
</details>

### Pregunta 25

Escribe el comando para verificar el contenido del keytab Kerberos ubicado en `/etc/krb5.keytab`.

<input type="text" class="fill-blank" data-answer="klist -kt /etc/krb5.keytab" data-alt="klist -ke /etc/krb5.keytab" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**klist -kt /etc/krb5.keytab**

`klist -kt` muestra los principales Kerberos almacenados en un archivo keytab junto con sus timestamps. La opción `-k` indica que se lee un keytab (no la cache de tickets) y `-t` muestra las marcas temporales de cada entrada.
</details>
