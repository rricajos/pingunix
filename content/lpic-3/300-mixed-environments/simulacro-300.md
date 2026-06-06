---
title: "Simulacro Examen 300"
tags:
  - lpic-3
  - examen-300
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "300"
---

# Simulacro - Examen 300

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="300" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="301.1" data-correct="b">

### Pregunta 1 (Subtema 301.1)

¿Que directiva en `smb.conf` define el grupo de trabajo o dominio al que pertenece el servidor Samba?

- [ ] a) `domain name = MIDOMINIO`
- [ ] b) `workgroup = MIDOMINIO`
- [ ] c) `netbios domain = MIDOMINIO`
- [ ] d) `realm = MIDOMINIO`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `workgroup = MIDOMINIO`**

La directiva `workgroup` en la seccion `[global]` de `smb.conf` establece el grupo de trabajo o nombre de dominio NT al que pertenece el servidor Samba. En un entorno de Active Directory, este valor corresponde al nombre NetBIOS del dominio. La directiva `realm` se usa para el nombre DNS del dominio Kerberos, pero `workgroup` sigue siendo obligatoria.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="301.1" data-correct="c">

### Pregunta 2 (Subtema 301.1)

¿Cual es el proposito del demonio `winbindd` en un entorno Samba?

- [ ] a) Gestionar las impresoras compartidas en la red
- [ ] b) Resolver nombres NetBIOS a direcciones IP
- [ ] c) Mapear usuarios y grupos de un dominio Windows a UIDs/GIDs de Linux
- [ ] d) Servir como controlador de dominio primario

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Mapear usuarios y grupos de un dominio Windows a UIDs/GIDs de Linux**

`winbindd` es el demonio responsable de la integracion de identidades entre Windows y Linux. Utiliza la interfaz NSS (Name Service Switch) para resolver nombres de usuarios y grupos del dominio, asignandoles UIDs y GIDs locales dentro de rangos configurados con `idmap config`. Esto permite que los usuarios del dominio accedan a recursos del servidor Linux sin necesidad de cuentas locales duplicadas.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="301.1" data-correct="a">

### Pregunta 3 (Subtema 301.1)

¿Que comando se utiliza para verificar la sintaxis del archivo `smb.conf` y mostrar la configuracion efectiva?

- [ ] a) `testparm`
- [ ] b) `smbclient --check`
- [ ] c) `samba-tool configtest`
- [ ] d) `net conf validate`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `testparm`**

`testparm` es la herramienta estandar de Samba para validar la sintaxis del archivo `smb.conf`. Analiza el archivo, reporta errores de sintaxis, muestra warnings sobre directivas obsoletas y, al finalizar, muestra la configuracion efectiva resultante (incluyendo valores por defecto). Es una practica recomendada ejecutar `testparm` despues de cada modificacion de `smb.conf` antes de reiniciar los servicios.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="301.2" data-correct="b">

### Pregunta 4 (Subtema 301.2)

¿Que protocolo utiliza Samba para la resolucion de nombres NetBIOS en redes locales mediante broadcast?

- [ ] a) DNS
- [ ] b) NBNS (NetBIOS Name Service) sobre puerto UDP 137
- [ ] c) LDAP sobre puerto TCP 389
- [ ] d) mDNS sobre puerto UDP 5353

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) NBNS (NetBIOS Name Service) sobre puerto UDP 137**

La resolucion de nombres NetBIOS utiliza el protocolo NBNS operando en el puerto UDP 137. En modo broadcast (B-node), el cliente envia una solicitud de nombre a la direccion de broadcast de la subred. En entornos con WINS, se utiliza el modo P-node o H-node, donde las consultas se dirigen a un servidor WINS centralizado en lugar de usar broadcast, lo que reduce el trafico en la red.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="301.2" data-correct="d">

### Pregunta 5 (Subtema 301.2)

¿Que directiva en `smb.conf` habilita Samba como servidor WINS?

- [ ] a) `wins support = server`
- [ ] b) `name resolve order = wins`
- [ ] c) `wins server = 127.0.0.1`
- [ ] d) `wins support = yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `wins support = yes`**

La directiva `wins support = yes` en la seccion `[global]` convierte al servidor Samba en un servidor WINS (Windows Internet Name Service). Es importante no configurar `wins server` en el mismo equipo que tiene `wins support = yes`, ya que esto crea un conflicto. `name resolve order` controla el orden de busqueda de nombres pero no habilita el servicio WINS.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="301.3" data-correct="c">

### Pregunta 6 (Subtema 301.3)

En Samba, ¿que demonio es responsable de gestionar las conexiones de comparticion de archivos (SMB/CIFS)?

- [ ] a) `winbindd`
- [ ] b) `nmbd`
- [ ] c) `smbd`
- [ ] d) `samba`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `smbd`**

El demonio `smbd` es el componente principal de Samba encargado de servir las conexiones SMB/CIFS, gestionando la autenticacion de usuarios, el acceso a archivos compartidos y la impresion. Opera en los puertos TCP 139 (NetBIOS Session) y TCP 445 (Direct SMB). `nmbd` se encarga de la resolucion de nombres NetBIOS y el browsing, mientras que `winbindd` gestiona el mapeo de identidades del dominio.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="301.3" data-correct="b">

### Pregunta 7 (Subtema 301.3)

¿Que version minima del protocolo SMB soporta el cifrado de transporte de datos de forma nativa?

- [ ] a) SMB1
- [ ] b) SMB3
- [ ] c) SMB2
- [ ] d) SMB2.1

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) SMB3**

SMB3 (introducido con Windows 8 / Server 2012) incluye soporte nativo para cifrado de transporte usando AES-128-CCM (y AES-128-GCM en SMB 3.1.1). Esto permite cifrar las comunicaciones sin necesidad de un tunel VPN o IPsec. En Samba, se puede forzar el cifrado con la directiva `smb encrypt = required` en `smb.conf`. Las versiones SMB1 y SMB2 no disponen de esta funcionalidad.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="302.1" data-correct="a">

### Pregunta 8 (Subtema 302.1)

¿Que comando de `samba-tool` se usa para aprovisionar un nuevo controlador de dominio Active Directory con Samba?

- [ ] a) `samba-tool domain provision`
- [ ] b) `samba-tool domain create`
- [ ] c) `samba-tool ad provision`
- [ ] d) `samba-tool setup domain`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `samba-tool domain provision`**

El comando `samba-tool domain provision` inicializa un nuevo dominio Active Directory con Samba, creando la base de datos LDAP interna, la configuracion de Kerberos, las zonas DNS y las cuentas administrativas iniciales. Los parametros clave incluyen `--realm` (nombre DNS del dominio), `--domain` (nombre NetBIOS), `--server-role=dc` y `--dns-backend` (SAMBA_INTERNAL o BIND9_DLZ).

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="302.1" data-correct="c">

### Pregunta 9 (Subtema 302.1)

Al unir un servidor Samba como controlador de dominio adicional a un dominio AD existente, ¿que comando se utiliza?

- [ ] a) `samba-tool domain provision --join`
- [ ] b) `net ads join`
- [ ] c) `samba-tool domain join DOMINIO.EJEMPLO DC`
- [ ] d) `samba-tool domain replicate`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `samba-tool domain join DOMINIO.EJEMPLO DC`**

Para unir un servidor como controlador de dominio adicional se utiliza `samba-tool domain join` indicando el nombre completo del dominio y el rol `DC`. Esto replica toda la base de datos del directorio, los datos DNS y la informacion de SYSVOL desde un DC existente. `net ads join` se utiliza para unir un servidor como miembro del dominio (no como DC). El proceso tambien configura la replicacion DRS automatica.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="302.2" data-correct="b">

### Pregunta 10 (Subtema 302.2)

¿Que herramienta de Samba permite gestionar usuarios del Active Directory desde la linea de comandos?

- [ ] a) `pdbedit`
- [ ] b) `samba-tool user`
- [ ] c) `smbpasswd`
- [ ] d) `net user`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `samba-tool user`**

`samba-tool user` es el subcomando para la gestion completa de usuarios en un entorno Samba AD DC. Permite crear (`create`), eliminar (`delete`), deshabilitar (`disable`), habilitar (`enable`), listar (`list`) y modificar contrasenias (`setpassword`) de usuarios del dominio. `pdbedit` y `smbpasswd` son para entornos Samba standalone sin AD. `net user` es un comando de Windows, no de Samba.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="302.2" data-correct="d">

### Pregunta 11 (Subtema 302.2)

¿Que base de datos utiliza internamente Samba AD DC para almacenar los objetos del directorio?

- [ ] a) MySQL
- [ ] b) BerkeleyDB
- [ ] c) OpenLDAP
- [ ] d) LDB (basada en TDB)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) LDB (basada en TDB)**

Samba AD DC utiliza LDB (LDAP-like Database), una base de datos que implementa una interfaz LDAP sobre archivos TDB (Trivial Database). LDB fue disenada especificamente para Samba 4 y almacena toda la informacion del directorio, incluyendo usuarios, grupos, GPOs y esquema. No depende de OpenLDAP ni de ninguna base de datos relacional. Los archivos de la base de datos se almacenan en `/var/lib/samba/private/`.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="302.3" data-correct="a">

### Pregunta 12 (Subtema 302.3)

¿Que mecanismo utiliza Samba AD para replicar el contenido del directorio SYSVOL entre controladores de dominio?

- [ ] a) `rsync` o `robocopy` (replicacion manual), ya que Samba no implementa DFS-R de forma nativa
- [ ] b) DFS-R integrado en Samba
- [ ] c) NFS automatico entre controladores
- [ ] d) FTP sincronizado mediante cron

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `rsync` o `robocopy` (replicacion manual), ya que Samba no implementa DFS-R de forma nativa**

A diferencia de los controladores de dominio de Microsoft que utilizan DFS-R para replicar SYSVOL, Samba no implementa DFS-R de forma nativa. La replicacion del directorio SYSVOL (que contiene scripts de inicio de sesion y GPOs) debe gestionarse manualmente, tipicamente mediante scripts con `rsync` ejecutados periodicamente a traves de cron. Existen proyectos como `sysvol-replication` que automatizan este proceso.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="302.3" data-correct="c">

### Pregunta 13 (Subtema 302.3)

En la replicacion de Active Directory, ¿que protocolo utiliza Samba para replicar la base de datos del directorio entre controladores de dominio?

- [ ] a) LDAP Sync (RFC 4533)
- [ ] b) rsync sobre SSH
- [ ] c) DRS (Directory Replication Service) mediante RPC
- [ ] d) Samba no soporta replicacion de directorio

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) DRS (Directory Replication Service) mediante RPC**

Samba implementa el protocolo DRS (Directory Replication Service), tambien conocido como DRSUAPI, para replicar la base de datos del directorio AD entre controladores de dominio. Este es el mismo protocolo que utilizan los servidores Windows. DRS replica todas las particiones del directorio (Schema, Configuration, Domain y DNS) de forma incremental. Esto es diferente de la replicacion de SYSVOL, que debe hacerse por separado.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="303.1" data-correct="b">

### Pregunta 14 (Subtema 303.1)

¿Que directiva en `smb.conf` define la ruta en disco de un recurso compartido?

- [ ] a) `directory = /datos/compartido`
- [ ] b) `path = /datos/compartido`
- [ ] c) `share path = /datos/compartido`
- [ ] d) `root = /datos/compartido`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `path = /datos/compartido`**

La directiva `path` dentro de una seccion de recurso compartido en `smb.conf` especifica el directorio del sistema de archivos local que sera accesible a traves de la red. Por ejemplo: `[datos]` seguido de `path = /datos/compartido`. Esta directiva es obligatoria para cada recurso compartido de archivos y debe apuntar a un directorio existente con los permisos adecuados.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="303.1" data-correct="c">

### Pregunta 15 (Subtema 303.1)

¿Que directiva de `smb.conf` permite definir que usuarios tienen acceso de escritura a un recurso compartido?

- [ ] a) `writable users = usuario1, usuario2`
- [ ] b) `read only = no`
- [ ] c) `write list = usuario1, @grupo1`
- [ ] d) `allow write = usuario1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `write list = usuario1, @grupo1`**

La directiva `write list` especifica una lista de usuarios y grupos (con prefijo `@`) que tienen permiso de escritura, incluso si `read only = yes`. `read only = no` permite escritura a todos los usuarios con acceso, sin distincion. `write list` proporciona un control granular para otorgar escritura solo a usuarios o grupos especificos mientras el recurso permanece de solo lectura para los demas.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="303.2" data-correct="a">

### Pregunta 16 (Subtema 303.2)

¿Que sucede cuando se configura `vfs objects = acl_xattr` en un recurso compartido de Samba?

- [ ] a) Las ACLs de Windows se almacenan como atributos extendidos del sistema de archivos Linux
- [ ] b) Se desactivan las ACLs POSIX del sistema de archivos
- [ ] c) Se habilitan las ACLs solo para usuarios locales
- [ ] d) Se convierten las ACLs de Windows a permisos UNIX basicos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Las ACLs de Windows se almacenan como atributos extendidos del sistema de archivos Linux**

El modulo VFS `acl_xattr` permite almacenar los descriptores de seguridad de Windows NT (que incluyen ACLs DACL y SACL) como atributos extendidos (xattrs) en el sistema de archivos subyacente. Esto preserva la semantica completa de las ACLs de Windows, incluyendo herencia y permisos granulares que no tienen equivalente directo en POSIX. El sistema de archivos debe soportar atributos extendidos (ext4, XFS, etc.).

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="303.2" data-correct="d">

### Pregunta 17 (Subtema 303.2)

¿Que directiva de Samba controla el mapeo entre los permisos de creacion de archivos de Windows y los permisos UNIX?

- [ ] a) `unix permissions = 0644`
- [ ] b) `file mask = 0644`
- [ ] c) `permission mask = 0644`
- [ ] d) `create mask = 0644`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `create mask = 0644`**

`create mask` (o `create mode`) define una mascara AND que se aplica a los permisos cuando se crea un archivo nuevo. El valor resultante es la interseccion de los permisos solicitados por el cliente Windows y esta mascara. Existe tambien `directory mask` para directorios, y las directivas complementarias `force create mode` y `force directory mode` que establecen bits que siempre se activan (operacion OR).

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="303.3" data-correct="b">

### Pregunta 18 (Subtema 303.3)

¿Que directiva en `smb.conf` permite configurar un recurso compartido como papelera de reciclaje?

- [ ] a) `trash = yes`
- [ ] b) `vfs objects = recycle`
- [ ] c) `recycle bin = /samba/trash`
- [ ] d) `delete veto files = no`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `vfs objects = recycle`**

El modulo VFS `recycle` intercepta las operaciones de borrado y mueve los archivos a un directorio de reciclaje en lugar de eliminarlos permanentemente. Se configura con directivas adicionales como `recycle:repository` (ruta del directorio de reciclaje), `recycle:keeptree` (mantener estructura de directorios), `recycle:versions` (guardar multiples versiones) y `recycle:maxsize` (tamano maximo de archivos a reciclar).

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="303.3" data-correct="c">

### Pregunta 19 (Subtema 303.3)

¿Que modulo VFS de Samba permite realizar auditorias completas de acceso a archivos compartidos?

- [ ] a) `vfs objects = acl_xattr`
- [ ] b) `vfs objects = recycle`
- [ ] c) `vfs objects = full_audit`
- [ ] d) `vfs objects = shadow_copy2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `vfs objects = full_audit`**

El modulo `full_audit` registra las operaciones de acceso a archivos en el log del sistema (syslog). Se configuran las operaciones a auditar con `full_audit:success` y `full_audit:failure`, el formato del log con `full_audit:prefix`, y la facilidad de syslog con `full_audit:facility`. Permite auditar operaciones como open, read, write, unlink, rename, mkdir y otras, proporcionando trazabilidad completa del acceso a los recursos compartidos.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="304.1" data-correct="b">

### Pregunta 20 (Subtema 304.1)

¿Que comando de `smbclient` permite listar los recursos compartidos disponibles en un servidor Samba?

- [ ] a) `smbclient --shares //servidor`
- [ ] b) `smbclient -L //servidor`
- [ ] c) `smbclient -s //servidor`
- [ ] d) `smbclient --list //servidor`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `smbclient -L //servidor`**

El parametro `-L` (o `--list`) de `smbclient` muestra los recursos compartidos disponibles en el servidor especificado, incluyendo comparticiones de archivos, impresoras y recursos IPC. Opcionalmente se puede especificar `-U usuario` para autenticarse con un usuario particular, o `-N` para intentar la conexion sin contrasena. Tambien muestra informacion sobre el grupo de trabajo y servidores conocidos en la red.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="304.1" data-correct="a">

### Pregunta 21 (Subtema 304.1)

¿Que opcion del comando `mount.cifs` permite especificar credenciales desde un archivo en lugar de la linea de comandos?

- [ ] a) `credentials=/ruta/archivo`
- [ ] b) `authfile=/ruta/archivo`
- [ ] c) `passdb=/ruta/archivo`
- [ ] d) `password-file=/ruta/archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `credentials=/ruta/archivo`**

La opcion `credentials` (o `cred`) permite especificar un archivo que contiene el nombre de usuario, la contrasena y opcionalmente el dominio, evitando que las credenciales aparezcan en la linea de comandos o en `/etc/fstab`. El archivo tiene el formato: `username=valor`, `password=valor`, `domain=valor`, cada uno en una linea separada. El archivo debe tener permisos restrictivos (chmod 600).

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="304.1" data-correct="c">

### Pregunta 22 (Subtema 304.1)

¿Cual es la entrada correcta en `/etc/fstab` para montar un recurso compartido CIFS de forma automatica con credenciales almacenadas?

- [ ] a) `//servidor/datos /mnt/datos smb credentials=/etc/samba/creds 0 0`
- [ ] b) `//servidor/datos /mnt/datos nfs credentials=/etc/samba/creds 0 0`
- [ ] c) `//servidor/datos /mnt/datos cifs credentials=/etc/samba/creds 0 0`
- [ ] d) `\\servidor\datos /mnt/datos cifs credentials=/etc/samba/creds 0 0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `//servidor/datos /mnt/datos cifs credentials=/etc/samba/creds 0 0`**

La sintaxis correcta en `fstab` usa barras inclinadas (`//servidor/recurso`), el tipo de sistema de archivos `cifs` y la opcion `credentials` apuntando al archivo con las credenciales. Se recomienda anadir opciones como `_netdev` (esperar a que la red este disponible), `iocharset=utf8` (codificacion) y `vers=3.0` o superior (version del protocolo SMB).

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="304.2" data-correct="b">

### Pregunta 23 (Subtema 304.2)

¿Que libreria permite a las aplicaciones Linux acceder a recursos compartidos SMB/CIFS de forma transparente sin necesidad de montaje?

- [ ] a) `libcifs`
- [ ] b) `libsmbclient`
- [ ] c) `libsmb2`
- [ ] d) `libnetapi`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `libsmbclient`**

`libsmbclient` es la libreria de Samba que proporciona una API para acceder a recursos compartidos SMB/CIFS desde aplicaciones Linux. Aplicaciones como los exploradores de archivos de GNOME y KDE utilizan esta libreria para navegar redes Windows sin necesidad de montar los recursos compartidos. La libreria maneja la autenticacion, la resolucion de nombres y las operaciones de archivo de forma transparente.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="304.2" data-correct="d">

### Pregunta 24 (Subtema 304.2)

Un administrador necesita que un sistema Linux con PAM autentique usuarios contra un dominio AD usando Samba. ¿Que modulo PAM debe configurar?

- [ ] a) `pam_ldap.so`
- [ ] b) `pam_krb5.so`
- [ ] c) `pam_samba.so`
- [ ] d) `pam_winbind.so`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `pam_winbind.so`**

`pam_winbind.so` es el modulo PAM de Samba que permite la autenticacion de usuarios contra un dominio Active Directory a traves del demonio `winbindd`. Se configura en los archivos de PAM (`/etc/pam.d/`) y soporta funcionalidades avanzadas como cambio de contrasena, politicas de contrasena del dominio y cache de credenciales offline. Funciona en conjunto con `libnss_winbind` para la resolucion de nombres.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="305.1" data-correct="c">

### Pregunta 25 (Subtema 305.1)

¿Que servicio proporciona FreeIPA para la gestion centralizada de identidades en entornos Linux?

- [ ] a) Solo DNS y NTP
- [ ] b) Solo LDAP y Kerberos
- [ ] c) LDAP, Kerberos, DNS, CA (Certificate Authority) y politicas de acceso integradas
- [ ] d) Solo autenticacion RADIUS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) LDAP, Kerberos, DNS, CA (Certificate Authority) y politicas de acceso integradas**

FreeIPA es una solucion integral de gestion de identidades que combina 389 Directory Server (LDAP), MIT Kerberos, BIND DNS, Dogtag Certificate System (CA) y un framework de politicas basado en HBAC (Host-Based Access Control) y sudo centralizado. Proporciona una interfaz web y herramientas CLI (`ipa` command) para gestionar todos estos componentes de forma unificada.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="305.1" data-correct="a">

### Pregunta 26 (Subtema 305.1)

¿Que comando se utiliza para instalar un servidor FreeIPA y configurar todos sus componentes iniciales?

- [ ] a) `ipa-server-install`
- [ ] b) `ipa-setup`
- [ ] c) `freeipa-install --server`
- [ ] d) `ipa-deploy server`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `ipa-server-install`**

El comando `ipa-server-install` realiza la instalacion y configuracion completa de un servidor FreeIPA, incluyendo la creacion del directorio LDAP, el reino Kerberos, la autoridad certificadora, el servidor DNS (opcionalmente) y la interfaz web. Parametros importantes incluyen `--realm` (nombre del reino Kerberos), `--domain` (dominio DNS), `--ds-password` (contrasena del Directory Manager) y `--admin-password` (contrasena del administrador IPA).

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="305.1" data-correct="b">

### Pregunta 27 (Subtema 305.1)

¿Que demonio se encarga de la comunicacion entre un cliente Linux y el servidor FreeIPA para la resolucion de identidades y autenticacion?

- [ ] a) `winbindd`
- [ ] b) `sssd`
- [ ] c) `nslcd`
- [ ] d) `nscd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `sssd`**

SSSD (System Security Services Daemon) es el componente cliente que se comunica con el servidor FreeIPA para resolver identidades (usuarios, grupos) y gestionar la autenticacion. SSSD soporta cache offline, lo que permite a los usuarios iniciar sesion incluso cuando el servidor no esta disponible. Se configura mediante `/etc/sssd/sssd.conf` y se integra con NSS y PAM. El comando `ipa-client-install` configura automaticamente SSSD.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="305.2" data-correct="c">

### Pregunta 28 (Subtema 305.2)

¿Que es una relacion de confianza (trust) entre FreeIPA y Active Directory?

- [ ] a) Una VPN entre los dos servidores
- [ ] b) Una sincronizacion bidireccional de contrasenias
- [ ] c) Un acuerdo que permite a los usuarios de un dominio acceder a los recursos del otro sin duplicar cuentas
- [ ] d) Una replica del directorio LDAP de IPA en AD

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Un acuerdo que permite a los usuarios de un dominio acceder a los recursos del otro sin duplicar cuentas**

Una relacion de confianza (cross-realm trust) entre FreeIPA y Active Directory permite que los usuarios de ambos dominios accedan a los recursos del otro dominio sin necesidad de crear cuentas duplicadas. FreeIPA actua como un dominio Kerberos independiente con una confianza establecida hacia AD. Se configura con `ipa trust-add` y requiere que Samba este configurado en el servidor IPA para la comunicacion con AD.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="305.2" data-correct="a">

### Pregunta 29 (Subtema 305.2)

¿Que comando establece una relacion de confianza entre FreeIPA y un dominio Active Directory?

- [ ] a) `ipa trust-add --type=ad ad.ejemplo.com`
- [ ] b) `samba-tool trust create ad.ejemplo.com`
- [ ] c) `ipa domain-trust ad.ejemplo.com`
- [ ] d) `net ads trust create`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `ipa trust-add --type=ad ad.ejemplo.com`**

El comando `ipa trust-add` con la opcion `--type=ad` establece una relacion de confianza entre el dominio FreeIPA y el dominio Active Directory especificado. Requiere credenciales de administrador del dominio AD. El proceso configura los canales seguros entre los dos dominios y habilita la autenticacion cross-realm Kerberos. Previamente es necesario ejecutar `ipa-adtrust-install` para preparar el servidor IPA.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="305.3" data-correct="b">

### Pregunta 30 (Subtema 305.3)

¿Que opcion de exportacion de NFS es necesaria para habilitar la autenticacion Kerberos en un recurso compartido NFS?

- [ ] a) `krb5auth`
- [ ] b) `sec=krb5`
- [ ] c) `auth=kerberos`
- [ ] d) `gss=krb5`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `sec=krb5`**

La opcion `sec=krb5` en `/etc/exports` habilita la autenticacion Kerberos para las exportaciones NFS. Existen tres niveles: `sec=krb5` (solo autenticacion), `sec=krb5i` (autenticacion + integridad de datos) y `sec=krb5p` (autenticacion + integridad + privacidad/cifrado). Para que funcione, tanto el servidor como el cliente NFS deben tener principals Kerberos configurados (`nfs/hostname@REALM`) y el servicio `gssproxy` o `rpc.gssd` debe estar activo.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="305.3" data-correct="d">

### Pregunta 31 (Subtema 305.3)

¿Que diferencia hay entre `sec=krb5i` y `sec=krb5p` en NFS con Kerberos?

- [ ] a) No hay diferencia, son sinonimos
- [ ] b) `krb5i` cifra los datos y `krb5p` solo verifica la integridad
- [ ] c) `krb5i` usa autenticacion basica y `krb5p` usa autenticacion fuerte
- [ ] d) `krb5i` verifica la integridad de los datos y `krb5p` ademas los cifra

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `krb5i` verifica la integridad de los datos y `krb5p` ademas los cifra**

Los tres niveles de seguridad Kerberos en NFS son incrementales: `krb5` proporciona solo autenticacion (verifica la identidad del usuario), `krb5i` anade verificacion de integridad (detecta modificaciones en transito mediante checksums criptograficos), y `krb5p` anade cifrado completo de los datos (privacidad/privacy). Cada nivel superior consume mas recursos de CPU pero ofrece mayor seguridad.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="301.1" data-correct="d">

### Pregunta 32 (Subtema 301.1)

¿Que directiva en `smb.conf` controla el nivel de detalle de los mensajes de log generados por Samba?

- [ ] a) `debug level = 3`
- [ ] b) `logging = syslog`
- [ ] c) `log level = file`
- [ ] d) `log level = 3`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `log level = 3`**

La directiva `log level` (sinonimo de `debuglevel`) controla la verbosidad de los mensajes de log en Samba, desde 0 (solo errores criticos) hasta 10 (depuracion extrema). Se puede especificar un nivel global o niveles por componente, como `log level = 3 auth:5 winbind:10`, lo que permite depurar componentes especificos sin generar exceso de logs en otros. La directiva `log file` especifica la ruta del archivo de log.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="301.2" data-correct="a">

### Pregunta 33 (Subtema 301.2)

¿Que demonio de Samba gestiona la resolucion de nombres NetBIOS y las elecciones de navegador maestro (master browser)?

- [ ] a) `nmbd`
- [ ] b) `smbd`
- [ ] c) `winbindd`
- [ ] d) `samba-bgqd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `nmbd`**

`nmbd` (NetBIOS Message Block Daemon) es responsable de la resolucion de nombres NetBIOS, la participacion en elecciones de master browser, la provision del servicio WINS y la gestion de listas de navegacion de la red. Opera en los puertos UDP 137 (NetBIOS Name Service) y UDP 138 (NetBIOS Datagram Service). Las directivas `local master`, `preferred master` y `os level` controlan su comportamiento en las elecciones de browsing.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="301.3" data-correct="b">

### Pregunta 34 (Subtema 301.3)

¿Que comando de `samba-tool` se utiliza para gestionar registros DNS en un controlador de dominio Samba AD?

- [ ] a) `samba-tool dns-manage`
- [ ] b) `samba-tool dns`
- [ ] c) `samba-tool ldap dns`
- [ ] d) `net ads dns`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `samba-tool dns`**

`samba-tool dns` proporciona subcomandos para gestionar registros DNS en un Samba AD DC: `add` (crear registro), `delete` (eliminar), `update` (modificar), `query` (consultar), `zonecreate` (crear zona) y `zonedelete` (eliminar zona). Los registros DNS se almacenan en la base de datos del directorio AD, no en archivos de zona tradicionales, lo que permite la replicacion automatica entre controladores de dominio.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="302.1" data-correct="c">

### Pregunta 35 (Subtema 302.1)

¿Que backend DNS se recomienda para un entorno de produccion con Samba AD DC cuando se necesitan zonas DNS no integradas en AD?

- [ ] a) SAMBA_INTERNAL exclusivamente
- [ ] b) PowerDNS
- [ ] c) BIND9_DLZ
- [ ] d) Unbound

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) BIND9_DLZ**

BIND9_DLZ (Dynamically Loadable Zone) permite que BIND9 consulte la base de datos AD de Samba para las zonas integradas en el directorio, mientras mantiene la capacidad de gestionar zonas tradicionales en archivos. Es la opcion recomendada para entornos de produccion complejos donde se necesitan zonas que no estan en AD. SAMBA_INTERNAL es mas simple pero no soporta zonas externas ni funcionalidades avanzadas de BIND como views o rate limiting.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="302.2" data-correct="a">

### Pregunta 36 (Subtema 302.2)

¿Que comando permite verificar la replicacion del Active Directory entre dos controladores de dominio Samba?

- [ ] a) `samba-tool drs showrepl`
- [ ] b) `samba-tool replication status`
- [ ] c) `net ads replicate`
- [ ] d) `samba-tool domain replcheck`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `samba-tool drs showrepl`**

`samba-tool drs showrepl` muestra el estado de la replicacion DRS (Directory Replication Service) entre controladores de dominio, incluyendo los partners de replicacion, la ultima replicacion exitosa, los errores pendientes y los USN (Update Sequence Numbers). Es el equivalente al comando `repadmin /showrepl` de Windows. Otros subcomandos utiles son `drs replicate` (forzar replicacion) y `drs kcc` (ejecutar el Knowledge Consistency Checker).

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="302.3" data-correct="b">

### Pregunta 37 (Subtema 302.3)

¿Que comando de `samba-tool` permite gestionar las Group Policy Objects (GPO) en un dominio Samba AD?

- [ ] a) `samba-tool policy`
- [ ] b) `samba-tool gpo`
- [ ] c) `samba-tool group-policy`
- [ ] d) `samba-tool ad gpo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `samba-tool gpo`**

`samba-tool gpo` gestiona las Group Policy Objects del dominio con subcomandos como `create` (crear GPO), `del` (eliminar), `listall` (listar todas), `listcontainers` (ver donde se aplican), `setlink` (vincular a una OU), `dellink` (desvincular) y `manage` (gestionar configuraciones especificas). Las GPOs se almacenan parcialmente en el directorio AD y parcialmente en SYSVOL.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="303.1" data-correct="c">

### Pregunta 38 (Subtema 303.1)

¿Que directiva en `smb.conf` permite ocultar un recurso compartido para que no aparezca en la lista de navegacion?

- [ ] a) `hidden = yes`
- [ ] b) `visible = no`
- [ ] c) `browseable = no`
- [ ] d) `public = no`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `browseable = no`**

La directiva `browseable = no` (o `browsable = no`) oculta el recurso compartido de las listas de navegacion de la red, de forma similar a los recursos compartidos administrativos de Windows que terminan en `$`. Sin embargo, el recurso sigue siendo accesible si se conoce su nombre exacto; por ejemplo, `smbclient //servidor/recurso_oculto`. `public = no` controla si se permite acceso anonimo, no la visibilidad.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="303.2" data-correct="a">

### Pregunta 39 (Subtema 303.2)

¿Que modulo VFS de Samba permite acceder a versiones anteriores de archivos desde el explorador de archivos de Windows (pestana "Versiones anteriores")?

- [ ] a) `vfs objects = shadow_copy2`
- [ ] b) `vfs objects = versioning`
- [ ] c) `vfs objects = snapshots`
- [ ] d) `vfs objects = backup`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `vfs objects = shadow_copy2`**

El modulo `shadow_copy2` integra snapshots del sistema de archivos (como snapshots de LVM, Btrfs o ZFS) con la funcionalidad "Versiones anteriores" de Windows. Se configura con `shadow:snapdir` (directorio donde estan los snapshots), `shadow:basedir` (directorio base del recurso) y `shadow:format` (formato del nombre de los snapshots). Los snapshots deben seguir el formato `@GMT-YYYY.MM.DD-HH.MM.SS` o uno personalizado.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="303.3" data-correct="d">

### Pregunta 40 (Subtema 303.3)

¿Que directiva de Samba configura el recurso compartido para impresoras?

- [ ] a) `printer share = yes`
- [ ] b) `path = /var/spool/cups`
- [ ] c) `printer name = MiImpresora`
- [ ] d) `printing = cups` junto con `printable = yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `printing = cups` junto con `printable = yes`**

Para compartir impresoras mediante Samba se necesitan varias directivas: `printable = yes` (o `print ok = yes`) indica que el recurso es una impresora (no un directorio de archivos), y `printing = cups` especifica el sistema de impresion backend. Tambien se utiliza la seccion especial `[printers]` para compartir automaticamente todas las impresoras de CUPS. `path` debe apuntar al directorio de spool con permisos de escritura.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="304.1" data-correct="c">

### Pregunta 41 (Subtema 304.1)

¿Que comando permite unir un equipo Linux como miembro de un dominio Active Directory?

- [ ] a) `samba-tool domain join`
- [ ] b) `smbclient --join`
- [ ] c) `net ads join -U administrador`
- [ ] d) `wbinfo --join-domain`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `net ads join -U administrador`**

El comando `net ads join` une un servidor Linux como miembro de un dominio Active Directory. El parametro `-U` especifica el usuario con privilegios de unir equipos al dominio. El proceso crea una cuenta de equipo en AD, obtiene un keytab de Kerberos y configura la relacion de confianza. Previamente, `smb.conf` debe estar configurado con `workgroup`, `realm` y `security = ads`. `samba-tool domain join ... DC` es para unir como controlador de dominio, no como miembro.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="304.2" data-correct="b">

### Pregunta 42 (Subtema 304.2)

¿Que comando de `wbinfo` verifica que la relacion de confianza entre el servidor Linux y el dominio AD funciona correctamente?

- [ ] a) `wbinfo --trust-check`
- [ ] b) `wbinfo -t`
- [ ] c) `wbinfo --verify`
- [ ] d) `wbinfo -p`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `wbinfo -t`**

`wbinfo -t` (o `--check-secret`) verifica que el secreto de la cuenta de maquina almacenado localmente coincide con el registrado en el controlador de dominio AD, confirmando que la relacion de confianza esta operativa. `wbinfo -p` solo verifica que el demonio `winbindd` esta activo (ping). Otros comandos utiles de `wbinfo` incluyen `-u` (listar usuarios del dominio), `-g` (listar grupos) y `--getdcname` (obtener el nombre del DC).

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="305.1" data-correct="a">

### Pregunta 43 (Subtema 305.1)

¿Que herramienta de FreeIPA permite registrar un nuevo equipo cliente en el dominio IPA?

- [ ] a) `ipa-client-install`
- [ ] b) `ipa host-add`
- [ ] c) `ipa-join`
- [ ] d) `sssd-register`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `ipa-client-install`**

`ipa-client-install` es el comando principal para registrar un equipo cliente en un dominio FreeIPA. Configura automaticamente SSSD, Kerberos (`/etc/krb5.conf`), NSS, PAM, y NTP/chrony para sincronizacion horaria. Tambien crea el principal de host en el KDC y obtiene el keytab correspondiente. `ipa host-add` solo crea el registro del host en el servidor sin configurar el cliente localmente.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="305.2" data-correct="b">

### Pregunta 44 (Subtema 305.2)

¿Que comando de FreeIPA se utiliza para configurar las reglas HBAC (Host-Based Access Control)?

- [ ] a) `ipa access-add`
- [ ] b) `ipa hbacrule-add`
- [ ] c) `ipa hostacl-add`
- [ ] d) `ipa rule-add --type=hbac`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ipa hbacrule-add`**

Las reglas HBAC de FreeIPA controlan que usuarios pueden acceder a que servicios en que hosts. `ipa hbacrule-add` crea una nueva regla, y luego se asocian usuarios (`ipa hbacrule-add-user`), hosts (`ipa hbacrule-add-host`) y servicios (`ipa hbacrule-add-service`). Existe una regla predeterminada `allow_all` que debe desactivarse para que las reglas HBAC personalizadas surtan efecto. Las reglas se evaluan como allow, sin reglas de denegacion explicitas.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="305.3" data-correct="c">

### Pregunta 45 (Subtema 305.3)

¿Que servicio debe estar activo en un cliente NFS con autenticacion Kerberos para gestionar los contextos de seguridad GSSAPI?

- [ ] a) `nfs-idmapd`
- [ ] b) `rpcbind`
- [ ] c) `rpc.gssd` o `gssproxy`
- [ ] d) `nfs-blkmap`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rpc.gssd` o `gssproxy`**

El demonio `rpc.gssd` (o su sucesor `gssproxy`) se ejecuta en el cliente NFS y gestiona las credenciales GSSAPI/Kerberos necesarias para la autenticacion. Cuando un usuario accede a un recurso NFS con `sec=krb5`, `rpc.gssd` obtiene el ticket de servicio Kerberos del TGT del usuario y lo presenta al servidor. En el servidor NFS, el demonio correspondiente es `rpc.svcgssd` (o `gssproxy` que puede manejar ambos roles).

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="301.1" data-correct="b">

### Pregunta 46 (Subtema 301.1)

¿Que directiva de `smb.conf` especifica el tipo de backend para el mapeo de IDs entre Windows y Linux?

- [ ] a) `id mapping = tdb`
- [ ] b) `idmap config * : backend = tdb`
- [ ] c) `uid mapping backend = tdb`
- [ ] d) `winbind idmap = tdb`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `idmap config * : backend = tdb`**

La sintaxis moderna de Samba para configurar el mapeo de IDs utiliza `idmap config DOMINIO : backend = tipo`. El asterisco (`*`) representa el dominio predeterminado. Los backends disponibles incluyen `tdb` (mapeo automatico en base de datos local), `rid` (basado en el RID del SID), `ad` (usando atributos RFC2307 de AD) y `autorid` (mapeo automatico con rangos por dominio). Cada dominio puede tener un backend diferente.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="302.1" data-correct="d">

### Pregunta 47 (Subtema 302.1)

¿Que nivel funcional minimo del dominio AD soporta Samba como controlador de dominio?

- [ ] a) Windows Server 2016
- [ ] b) Windows Server 2012 R2
- [ ] c) Windows Server 2003
- [ ] d) Windows Server 2008 R2

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Windows Server 2008 R2**

Samba AD DC soporta el nivel funcional de Windows Server 2008 R2 como nivel maximo que puede configurar de forma nativa. Este nivel incluye soporte para la papelera de reciclaje de AD, Fine-Grained Password Policies y otras funcionalidades avanzadas. Se puede verificar y modificar el nivel funcional con `samba-tool domain level show` y `samba-tool domain level raise`.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="303.1" data-correct="a">

### Pregunta 48 (Subtema 303.1)

¿Que directiva en `smb.conf` limita el acceso a un recurso compartido basandose en la direccion IP del cliente?

- [ ] a) `hosts allow = 192.168.1.0/24`
- [ ] b) `allow from = 192.168.1.0/24`
- [ ] c) `ip allow = 192.168.1.0/24`
- [ ] d) `access from = 192.168.1.0/24`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `hosts allow = 192.168.1.0/24`**

`hosts allow` (sinonimo de `allow hosts`) restringe el acceso al recurso compartido a las direcciones IP o redes especificadas. Su contraparte es `hosts deny`. Cuando ambas estan presentes, `hosts allow` se evalua primero. Se pueden especificar multiples redes separadas por comas o espacios, y tambien se aceptan nombres de host y prefijos de red. Si se define a nivel global, aplica a todos los recursos.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="304.1" data-correct="d">

### Pregunta 49 (Subtema 304.1)

¿Que utilidad permite navegar y descargar archivos de un recurso compartido SMB de forma interactiva desde la linea de comandos?

- [ ] a) `smbget`
- [ ] b) `smbtar`
- [ ] c) `rpcclient`
- [ ] d) `smbclient`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `smbclient`**

`smbclient` proporciona una interfaz interactiva similar a FTP para navegar recursos compartidos SMB/CIFS. Una vez conectado (por ejemplo, `smbclient //servidor/recurso -U usuario`), se pueden usar comandos como `ls`, `get`, `put`, `cd`, `mkdir`, `rm` y otros. `smbget` es una herramienta no interactiva similar a `wget` para descargar archivos de recursos SMB. `rpcclient` se usa para llamadas RPC de administracion.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="301.2" data-correct="c">

### Pregunta 50 (Subtema 301.2)

¿Que directiva en `smb.conf` define el orden de resolucion de nombres para el servidor Samba?

- [ ] a) `dns resolve order = wins host lmhosts`
- [ ] b) `resolve order = lmhosts wins dns`
- [ ] c) `name resolve order = lmhosts wins host bcast`
- [ ] d) `name service order = dns wins bcast`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `name resolve order = lmhosts wins host bcast`**

`name resolve order` define la secuencia de metodos que utiliza Samba para resolver nombres. Los metodos disponibles son: `lmhosts` (archivo local `/etc/samba/lmhosts`), `wins` (servidor WINS), `host` (resolucion del sistema operativo, tipicamente DNS y `/etc/hosts`), y `bcast` (broadcast NetBIOS). El orden predeterminado es `lmhosts wins host bcast`, priorizando metodos locales sobre el broadcast de red.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="302.2" data-correct="b">

### Pregunta 51 (Subtema 302.2)

¿Que herramienta se utiliza para gestionar la base de datos de contrasenias de Samba en modo standalone (sin AD)?

- [ ] a) `samba-tool user setpassword`
- [ ] b) `smbpasswd`
- [ ] c) `passwd --samba`
- [ ] d) `net setpassword`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `smbpasswd`**

`smbpasswd` es la herramienta tradicional para gestionar contrasenias de Samba en entornos standalone (sin Active Directory). Permite crear (`smbpasswd -a usuario`), modificar y eliminar (`smbpasswd -x usuario`) contrasenias en la base de datos local de Samba (tdbsam o ldapsam). En entornos AD, se usa `samba-tool user setpassword`. `pdbedit` es otra herramienta mas avanzada para gestionar la base de datos de cuentas local.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="303.2" data-correct="c">

### Pregunta 52 (Subtema 303.2)

Un administrador necesita que los archivos creados en un recurso compartido hereden automaticamente el grupo propietario del directorio padre. ¿Que configuracion de Samba y Linux se necesita?

- [ ] a) `force group = @grupo` en `smb.conf` unicamente
- [ ] b) `inherit permissions = yes` en `smb.conf`
- [ ] c) Activar el bit SGID en el directorio (`chmod g+s`) y configurar `inherit permissions = yes`
- [ ] d) `map acl inherit = yes` en `smb.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Activar el bit SGID en el directorio (`chmod g+s`) y configurar `inherit permissions = yes`**

Para lograr la herencia de grupo, se necesita tanto la configuracion del sistema de archivos como la de Samba. El bit SGID (`chmod g+s`) en el directorio hace que los nuevos archivos hereden el grupo del directorio padre en lugar del grupo primario del usuario. La directiva `inherit permissions = yes` en Samba respeta y propaga esta configuracion. Alternativamente, `force group = @grupo` puede forzar un grupo especifico para todos los archivos nuevos.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="305.1" data-correct="a">

### Pregunta 53 (Subtema 305.1)

¿Que archivo de configuracion principal utiliza SSSD?

- [ ] a) `/etc/sssd/sssd.conf`
- [ ] b) `/etc/sssd/config.d/default.conf`
- [ ] c) `/etc/pam.d/sssd`
- [ ] d) `/etc/ldap/sssd.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/etc/sssd/sssd.conf`**

`/etc/sssd/sssd.conf` es el archivo de configuracion principal de SSSD. Define los dominios de identidad (con sus backends LDAP, AD o IPA), los servicios habilitados (nss, pam, sudo, ssh), las opciones de cache y los parametros de conexion. El archivo debe tener permisos 600 (solo lectura por root) por seguridad. Tambien se pueden usar archivos adicionales en `/etc/sssd/conf.d/` para configuracion modular.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="301.3" data-correct="b">

### Pregunta 54 (Subtema 301.3)

¿Que puerto TCP utiliza el protocolo SMB directo (sin NetBIOS)?

- [ ] a) TCP 139
- [ ] b) TCP 445
- [ ] c) TCP 389
- [ ] d) TCP 636

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) TCP 445**

SMB directo (Direct Hosting of SMB) opera en el puerto TCP 445, eliminando la dependencia de NetBIOS. El puerto TCP 139 se utiliza para SMB sobre NetBIOS Session Service. En entornos modernos, el puerto 445 es el preferido ya que no requiere la capa adicional de NetBIOS. El puerto 389 corresponde a LDAP y el 636 a LDAPS, ambos utilizados por Samba AD DC pero no para comparticion de archivos SMB.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="302.1" data-correct="c">

### Pregunta 55 (Subtema 302.1)

Cuando se aprovisiona un Samba AD DC, ¿que archivo de configuracion de Kerberos se genera automaticamente?

- [ ] a) `/etc/kerberos/krb5.conf`
- [ ] b) `/etc/samba/krb5.conf`
- [ ] c) `/var/lib/samba/private/krb5.conf` (que se enlaza o copia a `/etc/krb5.conf`)
- [ ] d) `/usr/local/samba/etc/kerberos.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/var/lib/samba/private/krb5.conf` (que se enlaza o copia a `/etc/krb5.conf`)**

Durante el aprovisionamiento de un Samba AD DC, se genera automaticamente un archivo de configuracion Kerberos en `/var/lib/samba/private/krb5.conf`. Este archivo debe enlazarse simbolicamente o copiarse a `/etc/krb5.conf` para que las herramientas de Kerberos del sistema (como `kinit`) funcionen correctamente. El archivo contiene la configuracion del realm, los servidores KDC y las opciones de cifrado compatibles.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="304.2" data-correct="a">

### Pregunta 56 (Subtema 304.2)

¿Que entrada se debe agregar en `/etc/nsswitch.conf` para que el sistema resuelva usuarios y grupos del dominio AD mediante winbind?

- [ ] a) `passwd: files winbind` y `group: files winbind`
- [ ] b) `passwd: files ldap` y `group: files ldap`
- [ ] c) `passwd: winbind files` y `group: winbind files`
- [ ] d) `passwd: files samba` y `group: files samba`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `passwd: files winbind` y `group: files winbind`**

En `/etc/nsswitch.conf`, se debe agregar `winbind` despues de `files` en las entradas `passwd` y `group`. El orden `files winbind` es importante: primero se consultan los archivos locales (`/etc/passwd`, `/etc/group`) y si el usuario no se encuentra, se consulta winbindd. Poner `winbind` antes de `files` podria causar problemas si el servicio winbindd no esta disponible, ya que se bloquearian las consultas de usuarios locales.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="305.2" data-correct="d">

### Pregunta 57 (Subtema 305.2)

¿Que es un ID view en FreeIPA y para que se utiliza?

- [ ] a) Una vista de la base de datos LDAP para consultas rapidas
- [ ] b) Un panel de monitorizacion de usuarios activos
- [ ] c) Una interfaz grafica alternativa para gestionar identidades
- [ ] d) Un mecanismo para sobrescribir atributos POSIX de usuarios del dominio de confianza AD en hosts especificos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Un mecanismo para sobrescribir atributos POSIX de usuarios del dominio de confianza AD en hosts especificos**

Los ID views en FreeIPA permiten sobrescribir atributos de identidad (como UID, GID, home directory, shell) de usuarios procedentes de dominios AD de confianza. Esto es util cuando los atributos POSIX almacenados en AD no son apropiados para el entorno Linux. Se puede definir un ID view global (`Default Trust View`) o vistas especificas por host, proporcionando flexibilidad en la asignacion de atributos POSIX.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="303.3" data-correct="b">

### Pregunta 58 (Subtema 303.3)

¿Que directiva de Samba permite limitar el tamano maximo de un archivo que se puede subir a un recurso compartido?

- [ ] a) `max file size = 100M`
- [ ] b) `vfs objects = fileid` combinado con cuotas de disco del sistema operativo
- [ ] c) `upload limit = 100M`
- [ ] d) `max upload = 104857600`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `vfs objects = fileid` combinado con cuotas de disco del sistema operativo**

Samba no tiene una directiva nativa simple para limitar el tamano maximo de archivos individuales. La forma correcta de controlar el uso de espacio es mediante cuotas de disco del sistema operativo (`quota`). Se pueden configurar cuotas por usuario y por grupo en el sistema de archivos subyacente. Samba reporta correctamente las cuotas al cliente Windows cuando `vfs objects = fileid` esta configurado. Otra opcion es usar scripts `vfs objects = preopen` personalizados.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="301.1" data-correct="c">

### Pregunta 59 (Subtema 301.1)

¿Que directiva de `smb.conf` establece el modo de seguridad que requiere autenticacion contra un servidor Active Directory?

- [ ] a) `security = domain`
- [ ] b) `security = server`
- [ ] c) `security = ads`
- [ ] d) `security = active-directory`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `security = ads`**

La directiva `security = ads` configura Samba para autenticar usuarios contra un dominio Active Directory utilizando Kerberos como metodo principal. A diferencia de `security = domain` (que usa el protocolo NT Domain mas antiguo), `security = ads` aprovecha toda la funcionalidad de AD, incluyendo autenticacion Kerberos, Group Policies y relaciones de confianza. `security = server` esta obsoleto y `security = active-directory` no existe.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="305.3" data-correct="a">

### Pregunta 60 (Subtema 305.3)

¿Que comando permite obtener un ticket Kerberos inicial (TGT) para autenticarse en un dominio FreeIPA o AD?

- [ ] a) `kinit usuario@REALM`
- [ ] b) `kticket -get usuario@REALM`
- [ ] c) `kauth usuario@REALM`
- [ ] d) `krb5init -u usuario@REALM`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `kinit usuario@REALM`**

`kinit` es el comando estandar de MIT Kerberos para obtener un Ticket Granting Ticket (TGT) del KDC. El realm debe especificarse en mayusculas (por ejemplo, `kinit admin@EJEMPLO.COM`). Una vez obtenido el TGT, los tickets de servicio se obtienen automaticamente cuando se accede a servicios kerberizados. El comando `klist` muestra los tickets almacenados en la cache, y `kdestroy` los elimina.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
