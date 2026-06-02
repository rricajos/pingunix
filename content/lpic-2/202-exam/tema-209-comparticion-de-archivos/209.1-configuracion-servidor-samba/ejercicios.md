---
title: "209.1 - Configuración del servidor Samba"
tags: [lpic-2, examen-202, tema-209, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "209"
subtema: "209.1"
---

# 209.1 - Ejercicios: Configuración del servidor Samba

### Pregunta 1
¿Qué comando se utiliza para verificar la sintaxis del archivo de configuración smb.conf?

a) smbcheck
b) samba -t
c) testparm
d) smb --verify

<details>
<summary>Respuesta</summary>

**c) testparm**

El comando `testparm` analiza el archivo `/etc/samba/smb.conf` y reporta cualquier error de sintaxis o parámetros desconocidos. Con la opción `-s` muestra únicamente la configuración activa (omitiendo los valores por defecto). Es una herramienta esencial antes de reiniciar el servicio Samba.
</details>

---

### Pregunta 2
¿Cuál es el modo de seguridad predeterminado en Samba 4?

a) security = share
b) security = user
c) security = ads
d) security = server

<details>
<summary>Respuesta</summary>

**b) security = user**

El modo `security = user` es el predeterminado en Samba 4. En este modo, los clientes deben autenticarse con un nombre de usuario y contraseña que existan en la base de datos de usuarios de Samba. El modo `share` fue eliminado en Samba 4 y `server` está obsoleto.
</details>

---

### Pregunta 3
Un administrador necesita añadir el usuario "jperez" (que ya existe como usuario Unix) a la base de datos de Samba. ¿Qué comando debe utilizar?

a) smbpasswd -c jperez
b) pdbedit -c jperez
c) smbpasswd -a jperez
d) useradd -smb jperez

<details>
<summary>Respuesta</summary>

**c) smbpasswd -a jperez**

El comando `smbpasswd -a` añade un usuario a la base de datos de Samba. Es requisito previo que el usuario exista como usuario Unix en el sistema. La opción `-a` (add) indica que se está añadiendo un nuevo usuario, no modificando uno existente. También se podría usar `pdbedit -a jperez`.
</details>

---

### Pregunta 4
¿Qué demonio de Samba es responsable del servicio de nombres NetBIOS?

a) smbd
b) nmbd
c) winbindd
d) netbiosd

<details>
<summary>Respuesta</summary>

**b) nmbd**

El demonio `nmbd` proporciona servicios de nombres NetBIOS y navegación de red. Escucha en los puertos UDP 137 y 138. El demonio `smbd` gestiona las conexiones de compartición de archivos e impresoras (puertos TCP 139 y 445), y `winbindd` se encarga de la integración con Active Directory.
</details>

---

### Pregunta 5
¿Qué directiva en smb.conf permite que los archivos creados en un recurso compartido tengan permisos específicos?

a) file permissions
b) new file mode
c) create mask
d) umask

<details>
<summary>Respuesta</summary>

**c) create mask**

La directiva `create mask` (también conocida como `create mode`) define los permisos máximos que se asignan a los archivos nuevos creados en el recurso compartido. Por ejemplo, `create mask = 0664` permite lectura y escritura para el propietario y el grupo, y solo lectura para otros. Para directorios se usa `directory mask`.
</details>

---

### Pregunta 6
¿Qué comando muestra las conexiones activas al servidor Samba, incluyendo los recursos compartidos en uso y los archivos abiertos?

a) smbclient -status
b) net status
c) smbstatus
d) samba --connections

<details>
<summary>Respuesta</summary>

**c) smbstatus**

El comando `smbstatus` muestra información sobre las conexiones activas al servidor Samba: procesos de conexión, recursos compartidos en uso y archivos bloqueados. Con la opción `-S` muestra solo los recursos, con `-p` solo los procesos y con `-L` solo los bloqueos de archivos.
</details>

---

### Pregunta 7
¿Qué sección especial de smb.conf crea automáticamente un recurso compartido para el directorio home de cada usuario que se conecta?

a) [users]
b) [home]
c) [homes]
d) [personal]

<details>
<summary>Respuesta</summary>

**c) [homes]**

La sección `[homes]` es una sección especial de Samba que crea dinámicamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio home en el sistema. Cuando un usuario solicita un recurso con su nombre de usuario, Samba lo busca primero como recurso explícito y, si no existe, lo crea automáticamente desde `[homes]`.
</details>

---

### Pregunta 8
¿Cuál es el comando correcto para unir un servidor Samba a un dominio Active Directory?

a) net join ads -U administrador
b) net ads join -U administrador
c) samba-tool domain join -U administrador
d) realm join -U administrador

<details>
<summary>Respuesta</summary>

**b) net ads join -U administrador**

El comando `net ads join -U administrador` une el servidor Samba a un dominio Active Directory. Requiere que la sección `[global]` de smb.conf tenga `security = ads` y `realm = DOMINIO.COM` correctamente configurados. Después de la unión, se puede verificar con `net ads testjoin`.
</details>

---

### Pregunta 9
¿Qué comando se utiliza para listar los recursos compartidos de un servidor SMB remoto?

a) smbclient -L //servidor -U usuario
b) nmblookup -S servidor
c) smbstatus -L //servidor
d) net share list //servidor

<details>
<summary>Respuesta</summary>

**a) smbclient -L //servidor -U usuario**

El comando `smbclient -L` (list) muestra los recursos compartidos disponibles en un servidor remoto. Se debe especificar el servidor con la notación `//nombre_servidor` y opcionalmente el usuario con `-U`. También muestra información sobre los grupos de trabajo y servidores maestros de la red.
</details>

---

### Pregunta 10
Un administrador quiere montar permanentemente un recurso compartido CIFS usando un archivo de credenciales. ¿Cuál es la entrada correcta en /etc/fstab?

a) `//servidor/recurso /mnt/samba smbfs credentials=/root/.smbcred 0 0`
b) `//servidor/recurso /mnt/samba cifs credentials=/root/.smbcredentials 0 0`
c) `\\servidor\recurso /mnt/samba cifs user=/root/.smbcredentials 0 0`
d) `smb://servidor/recurso /mnt/samba auto credentials=/root/.smbcredentials 0 0`

<details>
<summary>Respuesta</summary>

**b) `//servidor/recurso /mnt/samba cifs credentials=/root/.smbcredentials 0 0`**

En `/etc/fstab`, los recursos CIFS se especifican con la notación de barra inclinada `//servidor/recurso`, el tipo de sistema de archivos es `cifs` (no `smbfs` que está obsoleto), y se usa la opción `credentials` para indicar el archivo con las credenciales de acceso. El archivo de credenciales contiene `username=`, `password=` y opcionalmente `domain=`.
</details>

---

### Pregunta 11

¿Qué variable de sustitución en smb.conf se reemplaza por el nombre de usuario de la sesión actual?

a) `%m`
b) `%S`
c) `%U`
d) `%L`

<details><summary>Respuesta</summary>

**c) `%U`**

La variable `%U` se reemplaza por el nombre de usuario de la sesión Samba actual. Es útil en configuraciones dinámicas como `log file = /var/log/samba/log.%U` para crear logs separados por usuario. Otras variables comunes son `%m` (nombre NetBIOS del cliente), `%S` (nombre del recurso compartido) y `%H` (directorio home del usuario).

</details>

---

### Pregunta 12

¿Qué directiva en smb.conf especifica qué usuarios o grupos tienen permiso de escritura en un recurso compartido que está configurado como `read only = yes`?

a) `valid users`
b) `write list`
c) `admin users`
d) `force user`

<details><summary>Respuesta</summary>

**b) `write list`**

La directiva `write list` permite definir usuarios o grupos (con el prefijo `@`) que tendrán permiso de escritura incluso cuando el recurso está configurado como `read only = yes`. Por ejemplo, `write list = @editores, admin` permite escritura a los miembros del grupo editores y al usuario admin, mientras el resto solo puede leer.

</details>

---

### Pregunta 13

¿Qué demonio de Samba se encarga de la integración con Active Directory para el mapeo de usuarios y grupos de Windows?

a) smbd
b) nmbd
c) winbindd
d) sambd

<details><summary>Respuesta</summary>

**c) winbindd**

El demonio `winbindd` se encarga de la integración con Active Directory, permitiendo mapear usuarios y grupos de Windows a UIDs y GIDs de Linux. Utiliza el módulo NSS (Name Service Switch) y PAM para que los usuarios de AD puedan autenticarse en el sistema Linux. Se configura junto con `security = ads` y el parámetro `idmap config` en smb.conf.

</details>

---

### Pregunta 14

¿En qué puertos TCP escucha el demonio `smbd` para gestionar las conexiones de compartición de archivos?

a) UDP 137 y 138
b) TCP 139 y 445
c) TCP 80 y 443
d) TCP 389 y 636

<details><summary>Respuesta</summary>

**b) TCP 139 y 445**

El demonio `smbd` escucha en los puertos TCP 139 (NetBIOS Session Service, para compatibilidad con clientes antiguos) y TCP 445 (SMB directo sobre TCP, utilizado por clientes modernos). El demonio `nmbd` escucha en los puertos UDP 137 (NetBIOS Name Service) y UDP 138 (NetBIOS Datagram Service) para servicios de nombres y navegación.

</details>

---

### Pregunta 15

¿Qué directiva de smb.conf permite restringir el acceso a un recurso compartido solo a determinadas direcciones IP o redes?

a) `allow hosts`
b) `hosts allow`
c) `ip restrict`
d) `access from`

<details><summary>Respuesta</summary>

**b) `hosts allow`**

La directiva `hosts allow` (también aceptada como `allow hosts`) especifica las direcciones IP, redes o nombres de host que tienen permiso para acceder al recurso compartido. Por ejemplo, `hosts allow = 192.168.1.0/24 10.0.0.5`. Su contraparte es `hosts deny` para denegar acceso. Si se usan ambas, `hosts allow` se evalúa primero.

</details>

---

### Pregunta 16

¿Qué herramienta de Samba permite administrar la base de datos de usuarios con más opciones que `smbpasswd`, incluyendo la gestión de diferentes backends?

a) smbclient
b) pdbedit
c) testparm
d) net

<details><summary>Respuesta</summary>

**b) pdbedit**

El comando `pdbedit` es una herramienta avanzada para gestionar la base de datos de usuarios de Samba. Permite listar usuarios (`pdbedit -L`), añadir usuarios (`pdbedit -a`), eliminar usuarios (`pdbedit -x`), mostrar información detallada (`pdbedit -v`) y exportar/importar la base de datos entre diferentes backends como tdbsam y ldapsam.

</details>

---

### Pregunta 17

¿Qué directiva de smb.conf fuerza que todas las operaciones de archivos en un recurso compartido se realicen como un grupo específico del sistema?

a) `default group`
b) `group`
c) `force group`
d) `set group`

<details><summary>Respuesta</summary>

**c) `force group`**

La directiva `force group` hace que todas las operaciones de archivos y directorios en el recurso compartido se realicen bajo la identidad del grupo especificado, independientemente del grupo real del usuario que se conecta. Por ejemplo, `force group = proyecto` asegura que todos los archivos creados pertenezcan al grupo "proyecto". Su equivalente para usuarios es `force user`.

</details>

---

### Pregunta 18

¿Qué comando de Samba permite resolver un nombre NetBIOS a su dirección IP?

a) smbclient
b) nmblookup
c) smbstatus
d) net lookup

<details><summary>Respuesta</summary>

**b) nmblookup**

El comando `nmblookup` consulta nombres NetBIOS en la red y devuelve la dirección IP asociada. Por ejemplo, `nmblookup SERVIDOR` resuelve el nombre NetBIOS a su IP. Con la opción `-M` busca el maestro de navegación del grupo de trabajo, y con `'*'` lista todos los hosts que responden en la red. Es útil para diagnosticar problemas de resolución de nombres en redes Windows.

</details>

---

### Pregunta 19

¿Qué valor debe tener la directiva `security` en smb.conf para unir el servidor Samba a un dominio Active Directory?

a) `security = domain`
b) `security = ad`
c) `security = ads`
d) `security = kerberos`

<details><summary>Respuesta</summary>

**c) `security = ads`**

El valor `security = ads` configura Samba para autenticar usuarios contra un dominio Active Directory usando Kerberos. Requiere además la directiva `realm = DOMINIO.COM` con el nombre del dominio AD en mayúsculas. Después de configurar smb.conf, el servidor se une al dominio con `net ads join -U administrador`. El modo `domain` es para dominios NT4 obsoletos.

</details>

---

### Pregunta 20

¿Qué directiva de smb.conf permite que un recurso compartido acepte conexiones sin autenticación (acceso anónimo)?

a) `public = yes`
b) `guest ok = yes`
c) `anonymous = yes`
d) `no auth = yes`

<details><summary>Respuesta</summary>

**b) `guest ok = yes`**

La directiva `guest ok = yes` (sinónimo de `public = yes`) permite que los usuarios accedan al recurso compartido sin necesidad de autenticarse. Las conexiones de invitado se mapean al usuario definido en `guest account` (por defecto `nobody`). Debe combinarse con `map to guest = Bad User` en la sección `[global]` para que las credenciales incorrectas se traten como acceso de invitado.

</details>

---

### Pregunta 21

¿Qué comando añade un usuario existente en el sistema Unix a la base de datos de usuarios de Samba?

<input type="text" class="fill-blank" data-answer="smbpasswd -a" data-alt="smbpasswd -a usuario,pdbedit -a" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbpasswd -a**

El comando `smbpasswd -a usuario` añade un usuario a la base de datos de Samba. Es requisito previo que el usuario ya exista como usuario Unix en el sistema. La opción `-a` indica que se está añadiendo un nuevo usuario y solicitará establecer una contraseña de Samba. También se puede usar `pdbedit -a usuario` como alternativa.

</details>

---

### Pregunta 22

¿Qué comando lista todos los usuarios registrados en la base de datos de Samba?

<input type="text" class="fill-blank" data-answer="pdbedit -L" data-alt="pdbedit -L -v" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pdbedit -L**

El comando `pdbedit -L` lista todos los usuarios registrados en la base de datos de Samba, mostrando el nombre de usuario, el UID y el nombre completo. Con la opción `-v` se muestra información detallada de cada usuario, incluyendo el SID, las flags de la cuenta, las fechas de último cambio de contraseña y la política de contraseñas.

</details>

---

### Pregunta 23

¿Qué comando permite listar los recursos compartidos disponibles en un servidor Samba remoto?

<input type="text" class="fill-blank" data-answer="smbclient -L" data-alt="smbclient -L //servidor,smbclient -L //servidor -U usuario" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbclient -L**

El comando `smbclient -L //servidor` lista los recursos compartidos disponibles en un servidor Samba o Windows remoto. La opción `-L` indica el modo de listado. Se puede especificar un usuario con `-U usuario` para autenticarse. El resultado muestra los nombres de los recursos compartidos, su tipo (Disk, Printer, IPC) y una descripción.

</details>

---

### Pregunta 24

¿Qué comando verifica que un servidor Samba se ha unido correctamente a un dominio Active Directory?

<input type="text" class="fill-blank" data-answer="net ads testjoin" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**net ads testjoin**

El comando `net ads testjoin` verifica que el servidor Samba está correctamente unido al dominio Active Directory probando la autenticación con la cuenta de máquina del servidor. Si es exitoso, muestra "Join is OK". Si falla, indica el error específico. Es útil para diagnosticar problemas de pertenencia al dominio después de ejecutar `net ads join`.

</details>

---

### Pregunta 25

¿Qué comando deshabilita un usuario en la base de datos de Samba sin eliminarlo?

<input type="text" class="fill-blank" data-answer="smbpasswd -d" data-alt="smbpasswd -d usuario" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbpasswd -d**

El comando `smbpasswd -d usuario` deshabilita un usuario en la base de datos de Samba marcando la cuenta como inactiva. El usuario no podrá autenticarse hasta que sea rehabilitado con `smbpasswd -e usuario`. A diferencia de `smbpasswd -x` que elimina completamente al usuario, `-d` permite reactivar la cuenta posteriormente sin necesidad de recrearla.

</details>

---
