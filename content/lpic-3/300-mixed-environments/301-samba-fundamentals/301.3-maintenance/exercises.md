---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "301"
subtema: "301.3"
titulo: "Mantenimiento Regular - Ejercicios"
peso: 2
tags:
  - lpic-3
  - tema-301
  - ejercicios
---

# Ejercicios - 301.3 Mantenimiento Regular

### Pregunta 1
¿Qué comando muestra las conexiones activas y los archivos bloqueados en un servidor Samba?

a) smbclient -L
b) smbstatus
c) net status
d) testparm

<details><summary>Respuesta</summary>

**b) smbstatus**

`smbstatus` es la herramienta principal para monitorizar el estado de un servidor Samba en tiempo real. Muestra las conexiones activas, los recursos compartidos en uso y los archivos con bloqueos (oplocks). Se puede usar con `-b` para un resumen breve o `-S` para ver solo los recursos compartidos.
</details>

### Pregunta 2
¿Qué herramienta se utiliza para crear copias de seguridad de bases de datos TDB de Samba?

a) tdbdump
b) tdbtool
c) tdbbackup
d) tdbcopy

<details><summary>Respuesta</summary>

**c) tdbbackup**

`tdbbackup` crea copias de seguridad de bases de datos TDB y también puede verificar su integridad con la opción `-v`. Si detecta corrupción, puede restaurar desde la última copia válida. `tdbdump` solo muestra el contenido y `tdbtool` es una herramienta interactiva de gestión.
</details>

### Pregunta 3
¿Qué comando de `rpcclient` se utiliza para listar los usuarios de un dominio?

a) srvinfo
b) netshareenum
c) enumdomusers
d) queryuser

<details><summary>Respuesta</summary>

**c) enumdomusers**

El comando `enumdomusers` dentro de `rpcclient` enumera todos los usuarios del dominio con sus RIDs (Relative IDs). `srvinfo` muestra información del servidor, `netshareenum` lista recursos compartidos y `queryuser` muestra detalles de un usuario específico por su RID.
</details>

### Pregunta 4
¿Cuál es la forma correcta de listar los recursos compartidos de un servidor remoto con smbclient?

a) `smbclient --list servidor`
b) `smbclient -L //servidor -U usuario`
c) `smbclient -s //servidor`
d) `smbclient -e //servidor -U usuario`

<details><summary>Respuesta</summary>

**b) `smbclient -L //servidor -U usuario`**

La opción `-L` (list) seguida de la dirección del servidor muestra los recursos compartidos disponibles. `-U` especifica el usuario para autenticación. Para listar sin autenticación (sesión anónima), se usa `-N` en lugar de `-U`.
</details>

### Pregunta 5
¿Qué subcomando de `net` se utiliza para unirse a un dominio Active Directory?

a) `net rpc join`
b) `net ads join`
c) `net domain join`
d) `net ad connect`

<details><summary>Respuesta</summary>

**b) `net ads join`**

`net ads join -U admin` une el servidor Samba a un dominio Active Directory. `net rpc join` se usa para dominios NT4. Después de unirse, se puede verificar la membresía con `net ads testjoin`. El comando `net ads` requiere que Samba esté compilado con soporte para Active Directory.
</details>

### Pregunta 6
¿Qué base de datos TDB almacena los secretos de la máquina y la contraseña del dominio?

a) passdb.tdb
b) registry.tdb
c) secrets.tdb
d) locking.tdb

<details><summary>Respuesta</summary>

**c) secrets.tdb**

`secrets.tdb` almacena información crítica como la contraseña de la cuenta de máquina en el dominio, secretos LDAP y otras credenciales de seguridad. Se encuentra en `/var/lib/samba/private/`. `passdb.tdb` almacena las cuentas de usuario Samba y `registry.tdb` contiene el registro de Samba.
</details>

### Pregunta 7
¿Cómo se puede recargar la configuración de Samba sin reiniciar los servicios?

a) `systemctl reload samba`
b) `smbcontrol all reload-config`
c) `testparm --reload`
d) `kill -HUP $(pidof smbd)`

<details><summary>Respuesta</summary>

**b) `smbcontrol all reload-config`**

`smbcontrol all reload-config` envía una señal a todos los procesos de Samba para que relean la configuración de smb.conf. Esto es más seguro que reiniciar los servicios, ya que no interrumpe las conexiones activas. `smbcontrol` también puede enviar otros mensajes a los demonios de Samba.
</details>

### Pregunta 8
¿Qué comando de `nmblookup` muestra la tabla completa de nombres NetBIOS de un host remoto?

a) `nmblookup -S host`
b) `nmblookup -A 192.168.1.10`
c) `nmblookup -M host`
d) `nmblookup -R host`

<details><summary>Respuesta</summary>

**b) `nmblookup -A 192.168.1.10`**

La opción `-A` (node status) de `nmblookup` consulta la tabla de nombres NetBIOS de un host remoto identificado por su dirección IP. Muestra todos los nombres y tipos de servicio registrados en ese host. `-M` busca el Master Browser, `-S` muestra servicios y `-R` consulta vía WINS.
</details>

### Pregunta 9
¿Cuál es la función de `tdbtool` en el mantenimiento de Samba?

a) Solo crear copias de seguridad de bases TDB
b) Volcar el contenido completo de una base TDB
c) Herramienta interactiva para inspeccionar y manipular bases TDB
d) Convertir bases TDB entre versiones de Samba

<details><summary>Respuesta</summary>

**c) Herramienta interactiva para inspeccionar y manipular bases TDB**

`tdbtool` es una herramienta interactiva que permite inspeccionar, consultar, modificar y eliminar entradas en bases de datos TDB. Incluye comandos como `info`, `keys`, `show`, `delete`, `dump` y `check`. A diferencia de `tdbdump` (solo lectura) y `tdbbackup` (solo backup), `tdbtool` permite operaciones de lectura y escritura.
</details>

### Pregunta 10
Un administrador necesita verificar que un servidor Samba está correctamente unido a un dominio AD. ¿Qué comando debe usar?

a) `smbstatus -d`
b) `net ads testjoin`
c) `testparm --domain`
d) `wbinfo -p`

<details><summary>Respuesta</summary>

**b) `net ads testjoin`**

`net ads testjoin` verifica que la cuenta de la máquina es válida en el dominio Active Directory y que la unión al dominio está funcionando correctamente. Si la prueba falla, puede ser necesario volver a unirse con `net ads join`. `wbinfo -p` solo verifica la comunicación con winbindd, no la membresía del dominio.
</details>

### Pregunta 11

¿Qué opción de `smbstatus` muestra únicamente los recursos compartidos que están siendo utilizados activamente?

a) `-b`
b) `-L`
c) `-S`
d) `-p`

<details><summary>Respuesta</summary>

**c) `-S`**

La opción `-S` (shares) de `smbstatus` muestra exclusivamente los recursos compartidos que están actualmente en uso, indicando qué usuarios están conectados a cada recurso. La opción `-b` muestra un resumen breve de las conexiones, `-L` muestra los archivos bloqueados y `-p` produce una salida parseable para su uso en scripts.
</details>

### Pregunta 12

¿Qué comando de `rpcclient` se utiliza para obtener información general sobre un servidor Samba remoto?

a) `enumdomusers`
b) `netshareenum`
c) `srvinfo`
d) `queryuser`

<details><summary>Respuesta</summary>

**c) `srvinfo`**

El comando `srvinfo` dentro de `rpcclient` muestra información general del servidor, incluyendo el nombre del servidor, versión del sistema operativo, tipo de servidor y comentario. `enumdomusers` lista los usuarios del dominio, `netshareenum` enumera los recursos compartidos y `queryuser` obtiene detalles de un usuario específico por su RID.
</details>

### Pregunta 13

¿Cuál es la función del comando `net cache flush` en el mantenimiento de Samba?

a) Limpia la caché de archivos temporales de los recursos compartidos
b) Vacía la caché de resolución de nombres de Samba
c) Elimina las sesiones inactivas del servidor
d) Libera la memoria utilizada por los procesos smbd

<details><summary>Respuesta</summary>

**b) Vacía la caché de resolución de nombres de Samba**

El comando `net cache flush` vacía la caché de nombres utilizada por Samba para resolución de nombres NetBIOS y DNS. Esto puede ser útil cuando se han realizado cambios en DNS o WINS y se necesita que Samba resuelva los nombres de nuevo. `net cache list` permite ver el contenido de la caché antes de vaciarla.
</details>

### Pregunta 14

Un administrador necesita verificar la integridad de la base de datos TDB `passdb.tdb` y restaurarla si está corrupta. ¿Qué comando debe utilizar?

a) `tdbdump -v /var/lib/samba/private/passdb.tdb`
b) `tdbtool check /var/lib/samba/private/passdb.tdb`
c) `tdbbackup -v /var/lib/samba/private/passdb.tdb`
d) `tdbverify /var/lib/samba/private/passdb.tdb`

<details><summary>Respuesta</summary>

**c) `tdbbackup -v /var/lib/samba/private/passdb.tdb`**

La opción `-v` (verify) de `tdbbackup` verifica la integridad de la base de datos TDB. Si detecta corrupción, restaura automáticamente desde la última copia de seguridad válida. `tdbdump` solo muestra el contenido sin verificar integridad, y `tdbtool` tiene un comando `check` pero se ejecuta dentro de la herramienta interactiva.
</details>

### Pregunta 15

¿Qué subcomando de `net` muestra las sesiones activas en el servidor Samba?

a) `net session list`
b) `net status sessions`
c) `net connections show`
d) `net rpc sessions`

<details><summary>Respuesta</summary>

**b) `net status sessions`**

El comando `net status sessions` muestra las sesiones activas en el servidor Samba, incluyendo información sobre los usuarios conectados, las máquinas cliente y los recursos en uso. `net status shares` muestra los archivos abiertos. El comando `net` es una herramienta versátil con múltiples subcomandos para gestión de Samba.
</details>

### Pregunta 16

¿Qué archivo TDB de Samba almacena la información sobre los bloqueos de bytes en archivos compartidos?

a) `locking.tdb`
b) `brlock.tdb`
c) `sessionid.tdb`
d) `connections.tdb`

<details><summary>Respuesta</summary>

**b) `brlock.tdb`**

`brlock.tdb` almacena la información sobre los bloqueos de rango de bytes (byte range locks) en archivos compartidos. `locking.tdb` contiene información de bloqueos compartidos (oplocks y share modes), `sessionid.tdb` almacena las sesiones activas y `connections.tdb` las conexiones activas a recursos compartidos.
</details>

### Pregunta 17

¿Cuál es el comportamiento de Samba cuando el archivo de log alcanza el tamaño definido por `max log size`?

a) Detiene el servicio smbd
b) Elimina el archivo de log y crea uno nuevo vacío
c) Renombra el archivo de log con extensión `.old` y crea uno nuevo
d) Comprime el archivo de log automáticamente

<details><summary>Respuesta</summary>

**c) Renombra el archivo de log con extensión `.old` y crea uno nuevo**

Cuando el archivo de log de Samba alcanza el tamaño máximo configurado con `max log size` (expresado en KB), Samba renombra el archivo añadiendo la extensión `.old` y comienza a escribir en un archivo nuevo. Solo se mantiene una copia `.old`. Para una gestión de logs más avanzada, se recomienda configurar `logrotate` externamente.
</details>

### Pregunta 18

¿Qué opción de `smbclient` permite autenticarse con Kerberos en lugar de NTLM al conectar a un recurso compartido?

a) `-A`
b) `-k`
c) `-K`
d) `--kerberos`

<details><summary>Respuesta</summary>

**b) `-k`**

La opción `-k` de `smbclient` habilita la autenticación Kerberos, utilizando el ticket del usuario actual obtenido previamente con `kinit`. Esto es especialmente útil en entornos Active Directory donde Kerberos es el método de autenticación preferido. Sin esta opción, smbclient utiliza NTLM por defecto.
</details>

### Pregunta 19

¿Qué base de datos TDB almacena el mapeo entre grupos de Windows y grupos Unix en Samba?

a) `secrets.tdb`
b) `account_policy.tdb`
c) `group_mapping.tdb`
d) `registry.tdb`

<details><summary>Respuesta</summary>

**c) `group_mapping.tdb`**

La base de datos `group_mapping.tdb` almacena las correspondencias entre los grupos de Windows (identificados por SIDs) y los grupos Unix (identificados por GIDs). Esta información es esencial para que Samba pueda traducir correctamente los permisos entre ambos sistemas. `secrets.tdb` almacena secretos de máquina y `account_policy.tdb` las políticas de cuentas.
</details>

### Pregunta 20

¿Qué comando de `rpcclient` permite obtener la política de contraseñas del dominio?

a) `queryuser`
b) `enumdomusers`
c) `getdompwinfo`
d) `lookupnames`

<details><summary>Respuesta</summary>

**c) `getdompwinfo`**

El comando `getdompwinfo` dentro de `rpcclient` muestra la política de contraseñas del dominio, incluyendo la longitud mínima de contraseña y los requisitos de complejidad. `queryuser` obtiene información de un usuario específico, `enumdomusers` lista todos los usuarios y `lookupnames` traduce un nombre a su SID correspondiente.
</details>

### Pregunta 21

¿Qué comando lista los recursos compartidos de un servidor remoto mediante smbclient sin requerir autenticación (sesión anónima)?

<input type="text" class="fill-blank" data-answer="smbclient -L //servidor -N" data-alt="smbclient -N -L //servidor" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbclient -L //servidor -N**

La opción `-L` (list) de `smbclient` lista los recursos compartidos de un servidor remoto, y la opción `-N` (no password) permite hacerlo sin autenticación, realizando una conexión anónima (null session). Si el servidor no permite sesiones anónimas, el comando fallará y será necesario usar `-U usuario` para autenticarse.
</details>

### Pregunta 22

¿Qué comando de `nmblookup` busca el Master Browser de un grupo de trabajo o dominio?

<input type="text" class="fill-blank" data-answer="nmblookup -M MIGRUPO" data-alt="nmblookup -M" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nmblookup -M MIGRUPO**

La opción `-M` de `nmblookup` busca el Master Browser de un grupo de trabajo o dominio NetBIOS especificado. El Master Browser mantiene la lista de navegación de los recursos de red disponibles en el grupo. Esta función es relevante en redes NetBIOS donde los clientes necesitan descubrir recursos compartidos.
</details>

### Pregunta 23

¿Qué comando volca todo el contenido de una base de datos TDB a la salida estándar?

<input type="text" class="fill-blank" data-answer="tdbdump" data-alt="tdbdump /var/lib/samba/archivo.tdb" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tdbdump**

El comando `tdbdump` seguido de la ruta de un archivo TDB vuelca todo su contenido en formato legible a la salida estándar. Es una herramienta de solo lectura que permite inspeccionar el contenido de cualquier base de datos TDB de Samba sin modificarla. Para operaciones interactivas de lectura y escritura se utiliza `tdbtool`.
</details>

### Pregunta 24

¿Qué comando recarga la configuración de todos los demonios de Samba sin reiniciar los servicios ni interrumpir las conexiones activas?

<input type="text" class="fill-blank" data-answer="smbcontrol all reload-config" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbcontrol all reload-config**

El comando `smbcontrol all reload-config` envía una señal a todos los procesos de Samba (smbd, nmbd, winbindd) para que relean el archivo smb.conf sin necesidad de reiniciar los servicios. Las conexiones activas no se interrumpen, lo que lo hace ideal para aplicar cambios de configuración en un servidor en producción.
</details>

### Pregunta 25

¿Qué comando de `net` se utiliza para unir un servidor Samba a un dominio Active Directory?

<input type="text" class="fill-blank" data-answer="net ads join" data-alt="net ads join -U admin,net ads join -U administrator" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**net ads join**

El comando `net ads join -U admin` une un servidor Samba a un dominio Active Directory. Requiere credenciales de un usuario con privilegios para crear cuentas de máquina en el dominio. Tras la unión, se puede verificar el estado con `net ads testjoin`. Para dominios NT4 legacy se utiliza `net rpc join` en su lugar.
</details>
