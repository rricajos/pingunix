---
title: "301.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.3"
---

# Flashcards: 301.3 - Mantenimiento Regular

> 42 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando muestra las conexiones activas y los archivos bloqueados en un servidor Samba?

</div>
<div class="flashcard-back">

**R:** b) smbstatus. `smbstatus` es la herramienta principal para monitorizar el estado de un servidor Samba en tiempo real. Muestra las conexiones activas, los recursos compartidos en uso y los archivos con bloqueos (oplocks). Se puede usar con `-b` para un resumen breve o `-S` para ver solo los recursos compartidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué herramienta se utiliza para crear copias de seguridad de bases de datos TDB de Samba?

</div>
<div class="flashcard-back">

**R:** c) tdbbackup. `tdbbackup` crea copias de seguridad de bases de datos TDB y también puede verificar su integridad con la opción `-v`. Si detecta corrupción, puede restaurar desde la última copia válida. `tdbdump` solo muestra el contenido y `tdbtool` es una herramienta interactiva de gestión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando de `rpcclient` se utiliza para listar los usuarios de un dominio?

</div>
<div class="flashcard-back">

**R:** c) enumdomusers. El comando `enumdomusers` dentro de `rpcclient` enumera todos los usuarios del dominio con sus RIDs (Relative IDs). `srvinfo` muestra información del servidor, `netshareenum` lista recursos compartidos y `queryuser` muestra detalles de un usuario específico por su RID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es la forma correcta de listar los recursos compartidos de un servidor remoto con smbclient?

</div>
<div class="flashcard-back">

**R:** b) `smbclient -L //servidor -U usuario`. La opción `-L` (list) seguida de la dirección del servidor muestra los recursos compartidos disponibles. `-U` especifica el usuario para autenticación. Para listar sin autenticación (sesión anónima), se usa `-N` en lugar de `-U`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué subcomando de `net` se utiliza para unirse a un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `net ads join`. `net ads join -U admin` une el servidor Samba a un dominio Active Directory. `net rpc join` se usa para dominios NT4. Después de unirse, se puede verificar la membresía con `net ads testjoin`. El comando `net ads` requiere que Samba esté compilado con soporte para Active Directory.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué base de datos TDB almacena los secretos de la máquina y la contraseña del dominio?

</div>
<div class="flashcard-back">

**R:** c) secrets.tdb. `secrets.tdb` almacena información crítica como la contraseña de la cuenta de máquina en el dominio, secretos LDAP y otras credenciales de seguridad. Se encuentra en `/var/lib/samba/private/`. `passdb.tdb` almacena las cuentas de usuario Samba y `registry.tdb` contiene el registro de Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-007">
<div class="flashcard-front">

**P:** ¿Cómo se puede recargar la configuración de Samba sin reiniciar los servicios?

</div>
<div class="flashcard-back">

**R:** b) `smbcontrol all reload-config`. `smbcontrol all reload-config` envía una señal a todos los procesos de Samba para que relean la configuración de smb.conf. Esto es más seguro que reiniciar los servicios, ya que no interrumpe las conexiones activas. `smbcontrol` también puede enviar otros mensajes a los demonios de Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de `nmblookup` muestra la tabla completa de nombres NetBIOS de un host remoto?

</div>
<div class="flashcard-back">

**R:** b) `nmblookup -A 192.168.1.10`. La opción `-A` (node status) de `nmblookup` consulta la tabla de nombres NetBIOS de un host remoto identificado por su dirección IP. Muestra todos los nombres y tipos de servicio registrados en ese host. `-M` busca el Master Browser, `-S` muestra servicios y `-R` consulta vía WINS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál es la función de `tdbtool` en el mantenimiento de Samba?

</div>
<div class="flashcard-back">

**R:** c) Herramienta interactiva para inspeccionar y manipular bases TDB. `tdbtool` es una herramienta interactiva que permite inspeccionar, consultar, modificar y eliminar entradas en bases de datos TDB. Incluye comandos como `info`, `keys`, `show`, `delete`, `dump` y `check`. A diferencia de `tdbdump` (solo lectura) y `tdbbackup` (solo backup), `tdbtool` permite operaciones de lectura y escritura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita verificar que un servidor Samba está correctamente unido a un dominio AD. ¿Qué comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `net ads testjoin`. `net ads testjoin` verifica que la cuenta de la máquina es válida en el dominio Active Directory y que la unión al dominio está funcionando correctamente. Si la prueba falla, puede ser necesario volver a unirse con `net ads join`. `wbinfo -p` solo verifica la comunicación con winbindd, no la membresía del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `smbstatus` muestra únicamente los recursos compartidos que están siendo utilizados activamente?

</div>
<div class="flashcard-back">

**R:** c) `-S`. La opción `-S` (shares) de `smbstatus` muestra exclusivamente los recursos compartidos que están actualmente en uso, indicando qué usuarios están conectados a cada recurso. La opción `-b` muestra un resumen breve de las conexiones, `-L` muestra los archivos bloqueados y `-p` produce una salida parseable para su uso en scripts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando de `rpcclient` se utiliza para obtener información general sobre un servidor Samba remoto?

</div>
<div class="flashcard-back">

**R:** c) `srvinfo`. El comando `srvinfo` dentro de `rpcclient` muestra información general del servidor, incluyendo el nombre del servidor, versión del sistema operativo, tipo de servidor y comentario. `enumdomusers` lista los usuarios del dominio, `netshareenum` enumera los recursos compartidos y `queryuser` obtiene detalles de un usuario específico por su RID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-013">
<div class="flashcard-front">

**P:** ¿Cuál es la función del comando `net cache flush` en el mantenimiento de Samba?

</div>
<div class="flashcard-back">

**R:** b) Vacía la caché de resolución de nombres de Samba. El comando `net cache flush` vacía la caché de nombres utilizada por Samba para resolución de nombres NetBIOS y DNS. Esto puede ser útil cuando se han realizado cambios en DNS o WINS y se necesita que Samba resuelva los nombres de nuevo. `net cache list` permite ver el contenido de la caché antes de vaciarla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-014">
<div class="flashcard-front">

**P:** Un administrador necesita verificar la integridad de la base de datos TDB `passdb.tdb` y restaurarla si está corrupta. ¿Qué comando debe utilizar?

</div>
<div class="flashcard-back">

**R:** c) `tdbbackup -v /var/lib/samba/private/passdb.tdb`. La opción `-v` (verify) de `tdbbackup` verifica la integridad de la base de datos TDB. Si detecta corrupción, restaura automáticamente desde la última copia de seguridad válida. `tdbdump` solo muestra el contenido sin verificar integridad, y `tdbtool` tiene un comando `check` pero se ejecuta dentro de la herramienta interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué subcomando de `net` muestra las sesiones activas en el servidor Samba?

</div>
<div class="flashcard-back">

**R:** b) `net status sessions`. El comando `net status sessions` muestra las sesiones activas en el servidor Samba, incluyendo información sobre los usuarios conectados, las máquinas cliente y los recursos en uso. `net status shares` muestra los archivos abiertos. El comando `net` es una herramienta versátil con múltiples subcomandos para gestión de Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué archivo TDB de Samba almacena la información sobre los bloqueos de bytes en archivos compartidos?

</div>
<div class="flashcard-back">

**R:** b) `brlock.tdb`. `brlock.tdb` almacena la información sobre los bloqueos de rango de bytes (byte range locks) en archivos compartidos. `locking.tdb` contiene información de bloqueos compartidos (oplocks y share modes), `sessionid.tdb` almacena las sesiones activas y `connections.tdb` las conexiones activas a recursos compartidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es el comportamiento de Samba cuando el archivo de log alcanza el tamaño definido por `max log size`?

</div>
<div class="flashcard-back">

**R:** c) Renombra el archivo de log con extensión `.old` y crea uno nuevo. Cuando el archivo de log de Samba alcanza el tamaño máximo configurado con `max log size` (expresado en KB), Samba renombra el archivo añadiendo la extensión `.old` y comienza a escribir en un archivo nuevo. Solo se mantiene una copia `.old`. Para una gestión de logs más avanzada, se recomienda configurar `logrotate` externamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué opción de `smbclient` permite autenticarse con Kerberos en lugar de NTLM al conectar a un recurso compartido?

</div>
<div class="flashcard-back">

**R:** b) `-k`. La opción `-k` de `smbclient` habilita la autenticación Kerberos, utilizando el ticket del usuario actual obtenido previamente con `kinit`. Esto es especialmente útil en entornos Active Directory donde Kerberos es el método de autenticación preferido. Sin esta opción, smbclient utiliza NTLM por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué base de datos TDB almacena el mapeo entre grupos de Windows y grupos Unix en Samba?

</div>
<div class="flashcard-back">

**R:** c) `group_mapping.tdb`. La base de datos `group_mapping.tdb` almacena las correspondencias entre los grupos de Windows (identificados por SIDs) y los grupos Unix (identificados por GIDs). Esta información es esencial para que Samba pueda traducir correctamente los permisos entre ambos sistemas. `secrets.tdb` almacena secretos de máquina y `account_policy.tdb` las políticas de cuentas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando de `rpcclient` permite obtener la política de contraseñas del dominio?

</div>
<div class="flashcard-back">

**R:** c) `getdompwinfo`. El comando `getdompwinfo` dentro de `rpcclient` muestra la política de contraseñas del dominio, incluyendo la longitud mínima de contraseña y los requisitos de complejidad. `queryuser` obtiene información de un usuario específico, `enumdomusers` lista todos los usuarios y `lookupnames` traduce un nombre a su SID correspondiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando lista los recursos compartidos de un servidor remoto mediante smbclient sin requerir autenticación (sesión anónima)?

</div>
<div class="flashcard-back">

**R:** smbclient -L //servidor -N. La opción `-L` (list) de `smbclient` lista los recursos compartidos de un servidor remoto, y la opción `-N` (no password) permite hacerlo sin autenticación, realizando una conexión anónima (null session). Si el servidor no permite sesiones anónimas, el comando fallará y será necesario usar `-U usuario` para autenticarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando de `nmblookup` busca el Master Browser de un grupo de trabajo o dominio?

</div>
<div class="flashcard-back">

**R:** nmblookup -M MIGRUPO. La opción `-M` de `nmblookup` busca el Master Browser de un grupo de trabajo o dominio NetBIOS especificado. El Master Browser mantiene la lista de navegación de los recursos de red disponibles en el grupo. Esta función es relevante en redes NetBIOS donde los clientes necesitan descubrir recursos compartidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando volca todo el contenido de una base de datos TDB a la salida estándar?

</div>
<div class="flashcard-back">

**R:** tdbdump. El comando `tdbdump` seguido de la ruta de un archivo TDB vuelca todo su contenido en formato legible a la salida estándar. Es una herramienta de solo lectura que permite inspeccionar el contenido de cualquier base de datos TDB de Samba sin modificarla. Para operaciones interactivas de lectura y escritura se utiliza `tdbtool`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando recarga la configuración de todos los demonios de Samba sin reiniciar los servicios ni interrumpir las conexiones activas?

</div>
<div class="flashcard-back">

**R:** smbcontrol all reload-config. El comando `smbcontrol all reload-config` envía una señal a todos los procesos de Samba (smbd, nmbd, winbindd) para que relean el archivo smb.conf sin necesidad de reiniciar los servicios. Las conexiones activas no se interrumpen, lo que lo hace ideal para aplicar cambios de configuración en un servidor en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de `net` se utiliza para unir un servidor Samba a un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** net ads join. El comando `net ads join -U admin` une un servidor Samba a un dominio Active Directory. Requiere credenciales de un usuario con privilegios para crear cuentas de máquina en el dominio. Tras la unión, se puede verificar el estado con `net ads testjoin`. Para dominios NT4 legacy se utiliza `net rpc join` en su lugar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `smbstatus` es la herramienta principal para verificar conexiones activas. La op...

</div>
<div class="flashcard-back">

**R:** `smbstatus` es la herramienta principal para verificar conexiones activas. La opción `-b` muestra un resumen breve y `-S` muestra los recursos compartidos en uso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `rpcclient` es útil para enumerar usuarios, grupos y recursos. Conocer los coman...

</div>
<div class="flashcard-back">

**R:** `rpcclient` es útil para enumerar usuarios, grupos y recursos. Conocer los comandos básicos como `enumdomusers`, `srvinfo` y `netshareenum`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conocer las tres herramientas TDB (`tdbbackup`, `tdbtool`, `tdbdump`) y las base...

</div>
<div class="flashcard-back">

**R:** Conocer las tres herramientas TDB (`tdbbackup`, `tdbtool`, `tdbdump`) y las bases de datos más importantes como `secrets.tdb` y `passdb.tdb`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `queryuser RID`?

</div>
<div class="flashcard-back">

**R:** Información detallada de un usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `enumprivs`?

</div>
<div class="flashcard-back">

**R:** Listar privilegios disponibles

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `secrets.tdb`?

</div>
<div class="flashcard-back">

**R:** Secretos de máquina, contraseña de dominio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `passdb.tdb`?

</div>
<div class="flashcard-back">

**R:** Base de datos de usuarios Samba (tdbsam)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `locking.tdb`?

</div>
<div class="flashcard-back">

**R:** Información de bloqueos compartidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre las herramientas y procedimientos necesarios para el mantenimiento diario de un servidor Samba, incluyendo monitorización de conexiones, consultas de red, gestión de bases de datos T

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Monitorización con smbstatus?

</div>
<div class="flashcard-back">

**R:** El comando `smbstatus` muestra información en tiempo real sobre las conexiones activas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Consultas de red con nmblookup?

</div>
<div class="flashcard-back">

**R:** `nmblookup` consulta nombres NetBIOS y servicios WINS:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Acceso con smbclient?

</div>
<div class="flashcard-back">

**R:** `smbclient` es un cliente SMB similar a un cliente FTP:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son Administración remota con rpcclient?

</div>
<div class="flashcard-back">

**R:** `rpcclient` permite ejecutar llamadas RPC contra servidores SMB:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son El comando net?

</div>
<div class="flashcard-back">

**R:** El comando `net` es una herramienta versátil con múltiples subcomandos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son Herramientas de bases de datos TDB?

</div>
<div class="flashcard-back">

**R:** Samba utiliza bases de datos TDB (Trivial Database) para almacenar estado interno. Las herramientas para gestionarlas son fundamentales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `smbstatus` para monitorizar conexiones activas y bloqueos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-042">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

