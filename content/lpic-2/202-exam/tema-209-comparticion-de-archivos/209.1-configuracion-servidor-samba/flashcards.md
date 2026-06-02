---
title: "209.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "209.1"
---

# Flashcards: 209.1 - Configuracion Servidor Samba

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar la sintaxis del archivo de configuración smb.conf?

</div>
<div class="flashcard-back">

**R:** c) testparm. El comando `testparm` analiza el archivo `/etc/samba/smb.conf` y reporta cualquier error de sintaxis o parámetros desconocidos. Con la opción `-s` muestra únicamente la configuración activa (omitiendo los valores por defecto). Es una herramienta esencial antes de reiniciar el servicio Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el modo de seguridad predeterminado en Samba 4?

</div>
<div class="flashcard-back">

**R:** b) security = user. El modo `security = user` es el predeterminado en Samba 4. En este modo, los clientes deben autenticarse con un nombre de usuario y contraseña que existan en la base de datos de usuarios de Samba. El modo `share` fue eliminado en Samba 4 y `server` está obsoleto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-003">
<div class="flashcard-front">

**P:** Un administrador necesita añadir el usuario "jperez" (que ya existe como usuario Unix) a la base de datos de Samba. ¿Qué comando debe utilizar?

</div>
<div class="flashcard-back">

**R:** c) smbpasswd -a jperez. El comando `smbpasswd -a` añade un usuario a la base de datos de Samba. Es requisito previo que el usuario exista como usuario Unix en el sistema. La opción `-a` (add) indica que se está añadiendo un nuevo usuario, no modificando uno existente. También se podría usar `pdbedit -a jperez`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué demonio de Samba es responsable del servicio de nombres NetBIOS?

</div>
<div class="flashcard-back">

**R:** b) nmbd. El demonio `nmbd` proporciona servicios de nombres NetBIOS y navegación de red. Escucha en los puertos UDP 137 y 138. El demonio `smbd` gestiona las conexiones de compartición de archivos e impresoras (puertos TCP 139 y 445), y `winbindd` se encarga de la integración con Active Directory.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué directiva en smb.conf permite que los archivos creados en un recurso compartido tengan permisos específicos?

</div>
<div class="flashcard-back">

**R:** c) create mask. La directiva `create mask` (también conocida como `create mode`) define los permisos máximos que se asignan a los archivos nuevos creados en el recurso compartido. Por ejemplo, `create mask = 0664` permite lectura y escritura para el propietario y el grupo, y solo lectura para otros. Para directorios se usa `directory mask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando muestra las conexiones activas al servidor Samba, incluyendo los recursos compartidos en uso y los archivos abiertos?

</div>
<div class="flashcard-back">

**R:** c) smbstatus. El comando `smbstatus` muestra información sobre las conexiones activas al servidor Samba: procesos de conexión, recursos compartidos en uso y archivos bloqueados. Con la opción `-S` muestra solo los recursos, con `-p` solo los procesos y con `-L` solo los bloqueos de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué sección especial de smb.conf crea automáticamente un recurso compartido para el directorio home de cada usuario que se conecta?

</div>
<div class="flashcard-back">

**R:** c) [homes]. La sección `[homes]` es una sección especial de Samba que crea dinámicamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio home en el sistema. Cuando un usuario solicita un recurso con su nombre de usuario, Samba lo busca primero como recurso explícito y, si no existe, lo crea automáticamente desde `[homes]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el comando correcto para unir un servidor Samba a un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** b) net ads join -U administrador. El comando `net ads join -U administrador` une el servidor Samba a un dominio Active Directory. Requiere que la sección `[global]` de smb.conf tenga `security = ads` y `realm = DOMINIO.COM` correctamente configurados. Después de la unión, se puede verificar con `net ads testjoin`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para listar los recursos compartidos de un servidor SMB remoto?

</div>
<div class="flashcard-back">

**R:** a) smbclient -L //servidor -U usuario. El comando `smbclient -L` (list) muestra los recursos compartidos disponibles en un servidor remoto. Se debe especificar el servidor con la notación `//nombre_servidor` y opcionalmente el usuario con `-U`. También muestra información sobre los grupos de trabajo y servidores maestros de la red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere montar permanentemente un recurso compartido CIFS usando un archivo de credenciales. ¿Cuál es la entrada correcta en /etc/fstab?

</div>
<div class="flashcard-back">

**R:** b) `//servidor/recurso /mnt/samba cifs credentials=/root/.smbcredentials 0 0`. En `/etc/fstab`, los recursos CIFS se especifican con la notación de barra inclinada `//servidor/recurso`, el tipo de sistema de archivos es `cifs` (no `smbfs` que está obsoleto), y se usa la opción `credentials` para indicar el archivo con las credenciales de acceso. El archivo de credenciales contiene `username=`, `password=` y opcionalmente `domain=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué variable de sustitución en smb.conf se reemplaza por el nombre de usuario de la sesión actual?

</div>
<div class="flashcard-back">

**R:** c) `%U`. La variable `%U` se reemplaza por el nombre de usuario de la sesión Samba actual. Es útil en configuraciones dinámicas como `log file = /var/log/samba/log.%U` para crear logs separados por usuario. Otras variables comunes son `%m` (nombre NetBIOS del cliente), `%S` (nombre del recurso compartido) y `%H` (directorio home del usuario).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué directiva en smb.conf especifica qué usuarios o grupos tienen permiso de escritura en un recurso compartido que está configurado como `read only = yes`?

</div>
<div class="flashcard-back">

**R:** b) `write list`. La directiva `write list` permite definir usuarios o grupos (con el prefijo `@`) que tendrán permiso de escritura incluso cuando el recurso está configurado como `read only = yes`. Por ejemplo, `write list = @editores, admin` permite escritura a los miembros del grupo editores y al usuario admin, mientras el resto solo puede leer.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué demonio de Samba se encarga de la integración con Active Directory para el mapeo de usuarios y grupos de Windows?

</div>
<div class="flashcard-back">

**R:** c) winbindd. El demonio `winbindd` se encarga de la integración con Active Directory, permitiendo mapear usuarios y grupos de Windows a UIDs y GIDs de Linux. Utiliza el módulo NSS (Name Service Switch) y PAM para que los usuarios de AD puedan autenticarse en el sistema Linux. Se configura junto con `security = ads` y el parámetro `idmap config` en smb.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-014">
<div class="flashcard-front">

**P:** ¿En qué puertos TCP escucha el demonio `smbd` para gestionar las conexiones de compartición de archivos?

</div>
<div class="flashcard-back">

**R:** b) TCP 139 y 445. El demonio `smbd` escucha en los puertos TCP 139 (NetBIOS Session Service, para compatibilidad con clientes antiguos) y TCP 445 (SMB directo sobre TCP, utilizado por clientes modernos). El demonio `nmbd` escucha en los puertos UDP 137 (NetBIOS Name Service) y UDP 138 (NetBIOS Datagram Service) para servicios de nombres y navegación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué directiva de smb.conf permite restringir el acceso a un recurso compartido solo a determinadas direcciones IP o redes?

</div>
<div class="flashcard-back">

**R:** b) `hosts allow`. La directiva `hosts allow` (también aceptada como `allow hosts`) especifica las direcciones IP, redes o nombres de host que tienen permiso para acceder al recurso compartido. Por ejemplo, `hosts allow = 192.168.1.0/24 10.0.0.5`. Su contraparte es `hosts deny` para denegar acceso. Si se usan ambas, `hosts allow` se evalúa primero.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué herramienta de Samba permite administrar la base de datos de usuarios con más opciones que `smbpasswd`, incluyendo la gestión de diferentes backends?

</div>
<div class="flashcard-back">

**R:** b) pdbedit. El comando `pdbedit` es una herramienta avanzada para gestionar la base de datos de usuarios de Samba. Permite listar usuarios (`pdbedit -L`), añadir usuarios (`pdbedit -a`), eliminar usuarios (`pdbedit -x`), mostrar información detallada (`pdbedit -v`) y exportar/importar la base de datos entre diferentes backends como tdbsam y ldapsam.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué directiva de smb.conf fuerza que todas las operaciones de archivos en un recurso compartido se realicen como un grupo específico del sistema?

</div>
<div class="flashcard-back">

**R:** c) `force group`. La directiva `force group` hace que todas las operaciones de archivos y directorios en el recurso compartido se realicen bajo la identidad del grupo especificado, independientemente del grupo real del usuario que se conecta. Por ejemplo, `force group = proyecto` asegura que todos los archivos creados pertenezcan al grupo "proyecto". Su equivalente para usuarios es `force user`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando de Samba permite resolver un nombre NetBIOS a su dirección IP?

</div>
<div class="flashcard-back">

**R:** b) nmblookup. El comando `nmblookup` consulta nombres NetBIOS en la red y devuelve la dirección IP asociada. Por ejemplo, `nmblookup SERVIDOR` resuelve el nombre NetBIOS a su IP. Con la opción `-M` busca el maestro de navegación del grupo de trabajo, y con `'*'` lista todos los hosts que responden en la red. Es útil para diagnosticar problemas de resolución de nombres en redes Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué valor debe tener la directiva `security` en smb.conf para unir el servidor Samba a un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** c) `security = ads`. El valor `security = ads` configura Samba para autenticar usuarios contra un dominio Active Directory usando Kerberos. Requiere además la directiva `realm = DOMINIO.COM` con el nombre del dominio AD en mayúsculas. Después de configurar smb.conf, el servidor se une al dominio con `net ads join -U administrador`. El modo `domain` es para dominios NT4 obsoletos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directiva de smb.conf permite que un recurso compartido acepte conexiones sin autenticación (acceso anónimo)?

</div>
<div class="flashcard-back">

**R:** b) `guest ok = yes`. La directiva `guest ok = yes` (sinónimo de `public = yes`) permite que los usuarios accedan al recurso compartido sin necesidad de autenticarse. Las conexiones de invitado se mapean al usuario definido en `guest account` (por defecto `nobody`). Debe combinarse con `map to guest = Bad User` en la sección `[global]` para que las credenciales incorrectas se traten como acceso de invitado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando añade un usuario existente en el sistema Unix a la base de datos de usuarios de Samba?

</div>
<div class="flashcard-back">

**R:** smbpasswd -a. El comando `smbpasswd -a usuario` añade un usuario a la base de datos de Samba. Es requisito previo que el usuario ya exista como usuario Unix en el sistema. La opción `-a` indica que se está añadiendo un nuevo usuario y solicitará establecer una contraseña de Samba. También se puede usar `pdbedit -a usuario` como alternativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando lista todos los usuarios registrados en la base de datos de Samba?

</div>
<div class="flashcard-back">

**R:** pdbedit -L. El comando `pdbedit -L` lista todos los usuarios registrados en la base de datos de Samba, mostrando el nombre de usuario, el UID y el nombre completo. Con la opción `-v` se muestra información detallada de cada usuario, incluyendo el SID, las flags de la cuenta, las fechas de último cambio de contraseña y la política de contraseñas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando permite listar los recursos compartidos disponibles en un servidor Samba remoto?

</div>
<div class="flashcard-back">

**R:** smbclient -L. El comando `smbclient -L //servidor` lista los recursos compartidos disponibles en un servidor Samba o Windows remoto. La opción `-L` indica el modo de listado. Se puede especificar un usuario con `-U usuario` para autenticarse. El resultado muestra los nombres de los recursos compartidos, su tipo (Disk, Printer, IPC) y una descripción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando verifica que un servidor Samba se ha unido correctamente a un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** net ads testjoin. El comando `net ads testjoin` verifica que el servidor Samba está correctamente unido al dominio Active Directory probando la autenticación con la cuenta de máquina del servidor. Si es exitoso, muestra "Join is OK". Si falla, indica el error específico. Es útil para diagnosticar problemas de pertenencia al dominio después de ejecutar `net ads join`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando deshabilita un usuario en la base de datos de Samba sin eliminarlo?

</div>
<div class="flashcard-back">

**R:** smbpasswd -d. El comando `smbpasswd -d usuario` deshabilita un usuario en la base de datos de Samba marcando la cuenta como inactiva. El usuario no podrá autenticarse hasta que sea rehabilitado con `smbpasswd -e usuario`. A diferencia de `smbpasswd -x` que elimina completamente al usuario, `-d` permite reactivar la cuenta posteriormente sin necesidad de recrearla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La directiva `workgroup` define el grupo de trabajo o dominio Windows al que per...

</div>
<div class="flashcard-back">

**R:** La directiva `workgroup` define el grupo de trabajo o dominio Windows al que pertenece el servidor. `security = user` es el modo predeterminado y el más utilizado, que requiere autenticación con usuario y contraseña de Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El modo `security = share` fue eliminado en Samba 4. Los modos actuales son `use...

</div>
<div class="flashcard-back">

**R:** El modo `security = share` fue eliminado en Samba 4. Los modos actuales son `user` (predeterminado) y `ads` (para integración con Active Directory). El modo `domain` es para dominios NT4 y está prácticamente obsoleto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La sección `[homes]` crea automáticamente un recurso compartido para cada usuari...

</div>
<div class="flashcard-back">

**R:** La sección `[homes]` crea automáticamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio home. La variable `%S` se reemplaza por el nombre del recurso solicitado (que coincide con el nombre de usuario) y `%U` con el nombre de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Tanto `smbpasswd` como `pdbedit` gestionan los usuarios de Samba, pero `pdbedit`...

</div>
<div class="flashcard-back">

**R:** Tanto `smbpasswd` como `pdbedit` gestionan los usuarios de Samba, pero `pdbedit` es más completo y permite administrar diferentes backends de base de datos (tdbsam, ldapsam). Recuerda que el usuario Unix debe existir antes de crear el usuario Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Las variables de sustitución son muy útiles para crear configuraciones dinámicas...

</div>
<div class="flashcard-back">

**R:** Las variables de sustitución son muy útiles para crear configuraciones dinámicas. Por ejemplo, `log file = /var/log/samba/log.%m` crea un archivo de log separado para cada cliente que se conecta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `security = user`?

</div>
<div class="flashcard-back">

**R:** Autenticación contra la base de datos local de Samba (predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `path`?

</div>
<div class="flashcard-back">

**R:** Ruta del directorio en el sistema de archivos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `browseable`?

</div>
<div class="flashcard-back">

**R:** Si el recurso aparece al explorar la red (`yes`/`no`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Samba es la implementación libre del protocolo SMB/CIFS que permite a sistemas Linux compartir archivos e impresoras con clientes Windows y otros sistemas. Con un peso de 5, este es uno de los subtemas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Archivo de configuración smb.conf?

</div>
<div class="flashcard-back">

**R:** El archivo principal de configuración es `/etc/samba/smb.conf`. Se divide en secciones identificadas por corchetes.

</div>
</div>

---

