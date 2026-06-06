---
title: "Simulacro Examen 300 - B"
tags:
  - lpic-3
  - examen-300
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "300"
---

# Simulacro B - Examen 300

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="300-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="301.1" data-correct="c">

### Pregunta 1 (Subtema 301.1)

Un administrador configura `interfaces = lo eth0 192.168.10.0/24` y `bind interfaces only = yes` en `smb.conf`. ¿Cual es el efecto preciso de esta configuracion?

- [ ] a) Samba escucha en todas las interfaces pero solo responde a la subred 192.168.10.0/24
- [ ] b) Samba ignora la directiva `interfaces` si `bind interfaces only` esta activo
- [ ] c) Samba enlaza sus sockets de escucha exclusivamente a las interfaces y subredes listadas, rechazando conexiones desde cualquier otra interfaz
- [ ] d) Samba escucha en todas las interfaces pero aplica filtrado de paquetes a nivel de firewall

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Samba enlaza sus sockets de escucha exclusivamente a las interfaces y subredes listadas, rechazando conexiones desde cualquier otra interfaz**

Cuando `bind interfaces only = yes` esta activo, `smbd` y `nmbd` crean sockets de escucha unicamente en las direcciones IP asociadas a las interfaces listadas en `interfaces`. Esto significa que el servidor no acepta conexiones entrantes en ninguna otra interfaz de red. Es una capa de seguridad adicional al firewall, pero tiene una implicacion importante: si no se incluye `lo` (loopback), herramientas locales como `smbclient` contra localhost fallaran.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="301.1" data-correct="a">

### Pregunta 2 (Subtema 301.1)

¿Que ocurre cuando se define `include = /etc/samba/smb.conf.%m` en la seccion `[global]` de `smb.conf`?

- [ ] a) Samba carga un archivo de configuracion adicional especifico para cada cliente, donde `%m` se sustituye por el nombre NetBIOS del equipo que se conecta
- [ ] b) Samba carga un archivo de configuracion adicional donde `%m` se sustituye por el nombre del recurso compartido solicitado
- [ ] c) Samba carga un archivo de configuracion adicional donde `%m` se sustituye por el nombre del usuario autenticado
- [ ] d) La directiva `include` solo acepta rutas estaticas y las variables de sustitucion no estan soportadas

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Samba carga un archivo de configuracion adicional especifico para cada cliente, donde `%m` se sustituye por el nombre NetBIOS del equipo que se conecta**

La variable `%m` en `smb.conf` se sustituye por el nombre NetBIOS de la maquina cliente. Esto permite cargar configuraciones personalizadas por equipo. Si el archivo no existe, Samba lo ignora silenciosamente. Otras variables de sustitucion utiles son `%U` (nombre de usuario), `%I` (direccion IP del cliente), `%L` (nombre NetBIOS del servidor) y `%S` (nombre del recurso compartido). Esta tecnica es util para aplicar configuraciones diferenciadas segun el cliente.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="301.1" data-correct="d">

### Pregunta 3 (Subtema 301.1)

Un servidor Samba miembro de un dominio AD utiliza `idmap config CORP : backend = rid` con `idmap config CORP : range = 10000-999999`. ¿Que problema puede surgir si un segundo dominio de confianza tiene SIDs cuyos RIDs se solapan con los del dominio CORP?

- [ ] a) No hay problema, cada dominio tiene un rango de idmap independiente por defecto
- [ ] b) Samba rechaza automaticamente los RIDs duplicados del segundo dominio
- [ ] c) Los usuarios del segundo dominio no podran autenticarse en absoluto
- [ ] d) Se produciran colisiones de UID/GID, ya que el backend `rid` calcula IDs deterministicamente a partir del RID y ambos dominios generarian el mismo UID para RIDs identicos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Se produciran colisiones de UID/GID, ya que el backend `rid` calcula IDs deterministicamente a partir del RID y ambos dominios generarian el mismo UID para RIDs identicos**

El backend `rid` calcula el UID/GID sumando el RID al inicio del rango configurado. Si dos dominios distintos comparten la misma configuracion de rango, un usuario con RID 1001 en el dominio CORP y otro con RID 1001 en el dominio de confianza obtendrian el mismo UID. La solucion es configurar rangos separados para cada dominio (`idmap config TRUST : range = 1000000-1999999`) o utilizar el backend `autorid`, que asigna rangos automaticamente por dominio.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="301.2" data-correct="b">

### Pregunta 4 (Subtema 301.2)

¿Que tipo de registro DNS es esencial para que los clientes localicen automaticamente un controlador de dominio Active Directory mediante Samba?

- [ ] a) Registro PTR apuntando al nombre del DC
- [ ] b) Registros SRV como `_ldap._tcp.dominio` y `_kerberos._tcp.dominio`
- [ ] c) Registro CNAME con alias `dc` apuntando al servidor Samba
- [ ] d) Registro MX del dominio apuntando al controlador

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Registros SRV como `_ldap._tcp.dominio` y `_kerberos._tcp.dominio`**

Active Directory depende de registros SRV en DNS para la localizacion de servicios (DC Locator). Los registros clave incluyen `_ldap._tcp.dominio` (localizacion de servidores LDAP), `_kerberos._tcp.dominio` (KDC), `_gc._tcp.dominio` (Global Catalog) y `_kpasswd._tcp.dominio` (cambio de contrasena). Samba AD DC crea estos registros automaticamente durante el aprovisionamiento. Sin ellos, los clientes no pueden localizar los servicios del dominio y la union al dominio falla.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="301.2" data-correct="d">

### Pregunta 5 (Subtema 301.2)

Un servidor Samba tiene configurado `wins server = 10.0.0.5` y `wins support = yes` simultaneamente. ¿Que ocurre al iniciar el servicio `nmbd`?

- [ ] a) Samba prioriza `wins server` y desactiva `wins support` automaticamente
- [ ] b) Samba funciona como servidor y cliente WINS simultaneamente sin problemas
- [ ] c) Samba ignora ambas directivas y utiliza broadcast exclusivamente
- [ ] d) `nmbd` registra un error y la configuracion es invalida, ya que un servidor WINS no debe apuntar a otro servidor WINS externo como cliente al mismo tiempo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `nmbd` registra un error y la configuracion es invalida, ya que un servidor WINS no debe apuntar a otro servidor WINS externo como cliente al mismo tiempo**

Configurar `wins support = yes` y `wins server` en el mismo host es una configuracion contradictoria y erronea. `wins support = yes` convierte al servidor en un servidor WINS, mientras que `wins server` lo configura como cliente WINS que consulta un servidor externo. `testparm` advertira de este conflicto. La documentacion de Samba indica explicitamente que ambas directivas son mutuamente excluyentes en el mismo host.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="301.2" data-correct="a">

### Pregunta 6 (Subtema 301.2)

¿Que directiva de `smb.conf` controla la ventaja del servidor Samba en las elecciones de Local Master Browser, y que valor garantiza que gane frente a un sistema Windows con OS level 32?

- [ ] a) `os level = 65`, ya que Windows normalmente usa valores entre 1 y 32 y el valor mas alto gana la eleccion
- [ ] b) `preferred master = yes`, que automaticamente gana cualquier eleccion independientemente del OS level
- [ ] c) `local master = yes`, que otorga prioridad absoluta sobre cualquier sistema Windows
- [ ] d) `domain master = yes`, que establece al servidor como master browser global

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `os level = 65`, ya que Windows normalmente usa valores entre 1 y 32 y el valor mas alto gana la eleccion**

La directiva `os level` establece la prioridad del servidor en las elecciones de Local Master Browser. Los valores tipicos de Windows son: Windows Server DC (32), Windows Server miembro (16), Windows workstation (1). Configurar `os level = 65` asegura que Samba gane frente a cualquier sistema Windows. `preferred master = yes` fuerza una nueva eleccion al iniciar pero no garantiza ganarla sin un `os level` suficiente. `domain master` controla el Domain Master Browser, no el local.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="301.3" data-correct="c">

### Pregunta 7 (Subtema 301.3)

¿Que directiva de `smb.conf` permite restringir las versiones del protocolo SMB que acepta el servidor, deshabilitando SMB1 por motivos de seguridad?

- [ ] a) `protocol = SMB2`
- [ ] b) `smb version = 2`
- [ ] c) `server min protocol = SMB2`
- [ ] d) `disable netbios = yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `server min protocol = SMB2`**

La directiva `server min protocol` establece la version minima del protocolo SMB que el servidor acepta. Configurar `server min protocol = SMB2` rechaza conexiones SMB1 (tambien conocido como NT1/CIFS), mitigando vulnerabilidades como EternalBlue. La contraparte `server max protocol` define la version maxima. Los valores validos incluyen `NT1` (SMB1), `SMB2`, `SMB2_02`, `SMB2_10`, `SMB3`, `SMB3_00`, `SMB3_02` y `SMB3_11`. `disable netbios` solo afecta al transporte NetBIOS, no al protocolo SMB.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="301.3" data-correct="b">

### Pregunta 8 (Subtema 301.3)

Un administrador ejecuta `smbstatus` y observa que hay 50 conexiones abiertas al recurso `[datos]`. ¿Que informacion adicional proporciona `smbstatus -L` que no muestra `smbstatus` sin parametros?

- [ ] a) Las direcciones IP de todos los clientes conectados
- [ ] b) Los bloqueos de archivos (locks) activos en los recursos compartidos, incluyendo el tipo de bloqueo y el rango de bytes
- [ ] c) El ancho de banda consumido por cada conexion
- [ ] d) Las credenciales Kerberos utilizadas por cada sesion

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Los bloqueos de archivos (locks) activos en los recursos compartidos, incluyendo el tipo de bloqueo y el rango de bytes**

`smbstatus -L` (o `--locks`) muestra exclusivamente los bloqueos de archivos (oplocks y byte-range locks) que los clientes mantienen sobre archivos abiertos. Esto es fundamental para diagnosticar problemas de acceso concurrente. `smbstatus` sin parametros muestra tres secciones: sesiones activas (PID, usuario, grupo, maquina), recursos compartidos en uso y bloqueos. La opcion `-S` muestra solo recursos compartidos, y `-p` muestra solo los PIDs de los procesos `smbd`.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="301.3" data-correct="a">

### Pregunta 9 (Subtema 301.3)

¿Que comando muestra la configuracion efectiva de Samba incluyendo solo los parametros que difieren de sus valores por defecto?

- [ ] a) `testparm -s`
- [ ] b) `testparm --verbose`
- [ ] c) `samba-tool config show`
- [ ] d) `net conf list`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `testparm -s`**

El parametro `-s` (silent/suppress) de `testparm` omite la pausa interactiva que solicita pulsar Enter y muestra directamente la configuracion efectiva. Por defecto, `testparm` solo muestra los parametros que difieren de los valores predeterminados, proporcionando una vista compacta. Para ver todos los parametros incluyendo los valores por defecto se usa `testparm -v` (verbose). `net conf list` solo muestra configuraciones almacenadas en el registro de Samba, no las del archivo `smb.conf`.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="301.4" data-correct="d">

### Pregunta 10 (Subtema 301.4)

En un entorno con Samba como miembro de dominio AD, ¿que comando permite listar todos los grupos del dominio accesibles a traves de winbindd para verificar que el mapeo de identidades funciona correctamente?

- [ ] a) `getent group --domain=AD`
- [ ] b) `net ads group list`
- [ ] c) `samba-tool group list`
- [ ] d) `wbinfo -g`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `wbinfo -g`**

`wbinfo -g` consulta al demonio `winbindd` para listar todos los grupos disponibles del dominio. Es una herramienta de diagnostico esencial para verificar que winbind esta resolviendo correctamente los grupos del dominio AD. `getent group` tambien muestra grupos del dominio (si NSS winbind esta configurado), pero consulta a traves de NSS, no directamente a winbindd. `samba-tool group list` solo funciona en un Samba AD DC, no en un servidor miembro.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="301.4" data-correct="b">

### Pregunta 11 (Subtema 301.4)

Un administrador necesita convertir un SID de Windows a su correspondiente UID/GID en un servidor Samba miembro de dominio. ¿Que comando debe utilizar?

- [ ] a) `net lookupname S-1-5-21-...`
- [ ] b) `wbinfo --sid-to-uid S-1-5-21-...`
- [ ] c) `id --sid S-1-5-21-...`
- [ ] d) `samba-tool sid2uid S-1-5-21-...`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `wbinfo --sid-to-uid S-1-5-21-...`**

`wbinfo --sid-to-uid` (o `-S`) convierte un SID de Windows al UID POSIX correspondiente segun la configuracion de idmap. La operacion inversa se realiza con `wbinfo --uid-to-sid` (o `-U`). Para grupos, se usan `--sid-to-gid` (o `-Y`) y `--gid-to-sid` (o `-G`). Estas herramientas son fundamentales para diagnosticar problemas de mapeo de identidades, especialmente cuando los permisos de archivos no coinciden con los esperados.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="301.4" data-correct="c">

### Pregunta 12 (Subtema 301.4)

¿Que backend de idmap es el mas apropiado cuando se necesita que los UIDs y GIDs asignados a usuarios del dominio AD sean consistentes en todos los servidores miembro sin requerir atributos POSIX en AD?

- [ ] a) `tdb`, porque almacena los mapeos en una base de datos local compartida
- [ ] b) `ad`, porque lee los atributos directamente del directorio
- [ ] c) `autorid`, porque genera UIDs/GIDs deterministicos basados en el SID del dominio y el RID del objeto sin necesidad de coordinacion
- [ ] d) `nss`, porque utiliza el Name Service Switch del sistema

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `autorid`, porque genera UIDs/GIDs deterministicos basados en el SID del dominio y el RID del objeto sin necesidad de coordinacion**

El backend `autorid` combina las ventajas de `rid` (mapeo deterministico sin base de datos centralizada) con la capacidad de manejar multiples dominios automaticamente. Asigna un rango de IDs a cada dominio detectado y calcula el UID/GID dentro de ese rango usando el RID. Como el calculo es deterministico, todos los servidores con la misma configuracion de `rangesize` obtienen los mismos UIDs/GIDs sin necesidad de sincronizacion. `tdb` genera IDs aleatorios y no es consistente entre servidores.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="302.1" data-correct="a">

### Pregunta 13 (Subtema 302.1)

Durante el aprovisionamiento de un Samba AD DC con `samba-tool domain provision`, ¿que opcion especifica que se debe usar el servidor DNS integrado de Samba en lugar de BIND9?

- [ ] a) `--dns-backend=SAMBA_INTERNAL`
- [ ] b) `--dns-type=internal`
- [ ] c) `--use-internal-dns`
- [ ] d) `--dns-backend=SAMBA_DNS`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `--dns-backend=SAMBA_INTERNAL`**

La opcion `--dns-backend=SAMBA_INTERNAL` indica que Samba utilizara su propio servidor DNS integrado para gestionar las zonas AD. Las alternativas son `BIND9_DLZ` (para usar BIND9 con el modulo DLZ) y `NONE` (sin gestion DNS automatica). SAMBA_INTERNAL es la opcion mas simple, adecuada para entornos pequenos o medianos, pero carece de funcionalidades avanzadas de BIND como views, rate limiting o zonas no integradas en AD.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="302.1" data-correct="d">

### Pregunta 14 (Subtema 302.1)

Despues de aprovisionar un Samba AD DC, ¿que comando permite verificar que todos los registros DNS necesarios para el funcionamiento del dominio estan presentes?

- [ ] a) `samba-tool dns check`
- [ ] b) `dig -t ANY dominio.ejemplo.com`
- [ ] c) `nslookup -type=all dominio.ejemplo.com`
- [ ] d) `samba_dnsupdate --verbose --all-names`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `samba_dnsupdate --verbose --all-names`**

`samba_dnsupdate --verbose --all-names` verifica y actualiza todos los registros DNS que un Samba AD DC necesita tener registrados, incluyendo los registros SRV para LDAP, Kerberos, Global Catalog y los registros A del servidor. Si algun registro falta, lo crea automaticamente. Es especialmente util despues de cambios de IP del servidor o problemas de replicacion DNS. Las herramientas genericas como `dig` o `nslookup` pueden verificar registros individuales pero no validan el conjunto completo.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="302.1" data-correct="b">

### Pregunta 15 (Subtema 302.1)

¿Que parametro de `samba-tool domain provision` define la complejidad y longitud minima de la contrasena del administrador durante la instalacion inicial?

- [ ] a) `--admin-pass-complexity=high`
- [ ] b) No existe un parametro especifico; la complejidad se rige por la politica de contrasenas por defecto del dominio AD que requiere al menos 7 caracteres con mezcla de mayusculas, minusculas y numeros
- [ ] c) `--password-policy=complex`
- [ ] d) `--min-password-length=12`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) No existe un parametro especifico; la complejidad se rige por la politica de contrasenas por defecto del dominio AD que requiere al menos 7 caracteres con mezcla de mayusculas, minusculas y numeros**

Durante el aprovisionamiento, la contrasena del administrador (especificada con `--adminpass`) debe cumplir la politica de complejidad predeterminada del dominio AD. Esta politica, heredada de Windows, exige un minimo de 7 caracteres y debe contener al menos tres de las cuatro categorias: mayusculas, minusculas, numeros y caracteres especiales. Despues del aprovisionamiento, la politica puede modificarse con `samba-tool domain passwordsettings set`.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="302.2" data-correct="c">

### Pregunta 16 (Subtema 302.2)

¿Que comando permite crear una Unidad Organizativa (OU) en un dominio Samba AD desde la linea de comandos?

- [ ] a) `samba-tool ou create "OU=Ventas,DC=ejemplo,DC=com"`
- [ ] b) `samba-tool ad ou-add "OU=Ventas,DC=ejemplo,DC=com"`
- [ ] c) `samba-tool ou create "OU=Ventas,DC=ejemplo,DC=com"` o bien `ldbmodify` con un archivo LDIF
- [ ] d) Solo es posible crear OUs mediante RSAT desde un equipo Windows

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `samba-tool ou create "OU=Ventas,DC=ejemplo,DC=com"` o bien `ldbmodify` con un archivo LDIF**

`samba-tool ou create` permite crear Unidades Organizativas especificando su Distinguished Name (DN) completo. Alternativamente, se puede usar `ldbmodify` o `ldbadd` con archivos LDIF para operaciones mas complejas sobre el directorio. Las OUs son contenedores fundamentales en AD para organizar objetos y aplicar Group Policies. Tambien se pueden gestionar desde RSAT (Remote Server Administration Tools) en Windows, pero no es la unica opcion.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="302.2" data-correct="a">

### Pregunta 17 (Subtema 302.2)

Un administrador necesita modificar directamente un atributo de un objeto en la base de datos LDB de Samba AD. ¿Que herramienta de linea de comandos permite realizar consultas y modificaciones LDAP directas sobre la base de datos?

- [ ] a) `ldbsearch` para consultas y `ldbmodify` para modificaciones
- [ ] b) `ldapsearch` y `ldapmodify` exclusivamente
- [ ] c) `samba-tool ldap query` y `samba-tool ldap modify`
- [ ] d) `tdbdump` y `tdbtool`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `ldbsearch` para consultas y `ldbmodify` para modificaciones**

Las herramientas `ldb*` (ldbsearch, ldbmodify, ldbadd, ldbdel, ldbrename, ldbedit) operan directamente sobre la base de datos LDB de Samba sin pasar por el protocolo LDAP de red. Esto es util para reparaciones y operaciones de bajo nivel. `ldbsearch` se puede usar como: `ldbsearch -H /var/lib/samba/private/sam.ldb "(sAMAccountName=usuario)"`. Las herramientas `ldapsearch`/`ldapmodify` funcionan a traves del protocolo LDAP de red y tambien son validas, pero las herramientas `ldb*` permiten acceso directo incluso si el servicio Samba no esta activo.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="302.2" data-correct="b">

### Pregunta 18 (Subtema 302.2)

¿Que comando de `samba-tool` permite configurar la politica de contrasenas del dominio, como la longitud minima y el historial de contrasenas?

- [ ] a) `samba-tool password policy set`
- [ ] b) `samba-tool domain passwordsettings set`
- [ ] c) `samba-tool user password-policy`
- [ ] d) `samba-tool ad password-settings`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `samba-tool domain passwordsettings set`**

`samba-tool domain passwordsettings set` permite modificar la politica de contrasenas del dominio. Los parametros incluyen `--min-pwd-length` (longitud minima), `--min-pwd-age` (edad minima), `--max-pwd-age` (edad maxima), `--history-length` (historial), `--complexity` (on/off) y `--store-plaintext` (on/off). Para ver la politica actual se usa `samba-tool domain passwordsettings show`. Tambien soporta Fine-Grained Password Policies con `samba-tool domain passwordsettings pso`.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="302.3" data-correct="d">

### Pregunta 19 (Subtema 302.3)

¿Que comando fuerza una replicacion inmediata de una particion del directorio AD entre dos controladores de dominio Samba?

- [ ] a) `samba-tool drs sync`
- [ ] b) `net rpc replicate`
- [ ] c) `samba-tool domain sync DC2`
- [ ] d) `samba-tool drs replicate DC-DESTINO DC-ORIGEN DC=ejemplo,DC=com`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `samba-tool drs replicate DC-DESTINO DC-ORIGEN DC=ejemplo,DC=com`**

`samba-tool drs replicate` inicia una replicacion inmediata de la particion especificada (por su DN) desde el DC de origen hacia el DC de destino. Es el equivalente de `repadmin /replicate` en Windows. Se debe especificar el DN de la particion a replicar, como `DC=ejemplo,DC=com` para la particion del dominio, `CN=Configuration,DC=ejemplo,DC=com` para la configuracion, o `CN=Schema,CN=Configuration,DC=ejemplo,DC=com` para el esquema.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="302.3" data-correct="c">

### Pregunta 20 (Subtema 302.3)

¿Que rol FSMO (Flexible Single Master Operations) controla la creacion del esquema del directorio Active Directory y solo puede existir en un unico DC del bosque?

- [ ] a) PDC Emulator
- [ ] b) RID Master
- [ ] c) Schema Master
- [ ] d) Infrastructure Master

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Schema Master**

El Schema Master es el unico DC autorizado para realizar modificaciones en el esquema del directorio AD (definiciones de clases y atributos). Es un rol unico en todo el bosque, no por dominio. En Samba AD, los roles FSMO se gestionan con `samba-tool fsmo show` (ver titular actual) y `samba-tool fsmo seize/transfer` (transferir roles). Los cinco roles FSMO son: Schema Master y Domain Naming Master (a nivel de bosque), y PDC Emulator, RID Master e Infrastructure Master (a nivel de dominio).

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="302.3" data-correct="a">

### Pregunta 21 (Subtema 302.3)

¿Que herramienta verifica la integridad de la base de datos del directorio AD en un Samba DC, comprobando referencias cruzadas, indices y consistencia del esquema?

- [ ] a) `samba-tool dbcheck`
- [ ] b) `samba-tool domain verify`
- [ ] c) `tdbbackup --verify`
- [ ] d) `ldbcheck --integrity`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `samba-tool dbcheck`**

`samba-tool dbcheck` analiza la base de datos LDB del directorio AD en busca de errores de integridad, como referencias a objetos inexistentes (dangling references), atributos con valores invalidos, inconsistencias en los indices y problemas de esquema. Con la opcion `--fix` puede reparar automaticamente muchos de los problemas detectados. Es recomendable ejecutarlo periodicamente y siempre antes y despues de una actualizacion de Samba. La opcion `--cross-ncs` verifica referencias entre particiones.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="302.4" data-correct="b">

### Pregunta 22 (Subtema 302.4)

¿Que directiva de `smb.conf` especifica la ruta al archivo keytab de Kerberos que utiliza un servidor Samba miembro de dominio para la autenticacion?

- [ ] a) `kerberos keytab = /etc/samba/krb5.keytab`
- [ ] b) `dedicated keytab file = /etc/krb5.keytab` junto con `kerberos method = dedicated keytab`
- [ ] c) `keytab path = /etc/krb5.keytab`
- [ ] d) `auth keytab = /etc/samba/machine.keytab`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dedicated keytab file = /etc/krb5.keytab` junto con `kerberos method = dedicated keytab`**

La directiva `dedicated keytab file` especifica la ruta al archivo keytab que Samba utiliza para la autenticacion Kerberos, pero solo surte efecto cuando `kerberos method = dedicated keytab`. Otras opciones de `kerberos method` son `secrets only` (usa el secreto de la cuenta de maquina almacenado en secrets.tdb) y `system keytab` (usa el keytab del sistema). El keytab contiene los principals de servicio (SPNs) del servidor, como `cifs/hostname@REALM` y `host/hostname@REALM`.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="302.4" data-correct="c">

### Pregunta 23 (Subtema 302.4)

Un administrador obtiene un ticket Kerberos con `kinit admin@EJEMPLO.COM` pero recibe un error de "clock skew too great" al intentar autenticarse contra el Samba AD DC. ¿Cual es la causa mas probable?

- [ ] a) El principal `admin` no existe en el KDC
- [ ] b) La contrasena del usuario ha expirado
- [ ] c) La diferencia horaria entre el cliente y el KDC supera los 5 minutos (tolerancia por defecto de Kerberos)
- [ ] d) El archivo `/etc/krb5.conf` tiene un realm incorrecto

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) La diferencia horaria entre el cliente y el KDC supera los 5 minutos (tolerancia por defecto de Kerberos)**

Kerberos depende criticamente de la sincronizacion horaria entre clientes y servidores. El error "clock skew too great" indica que la diferencia de tiempo supera la tolerancia configurada (por defecto, 5 minutos / 300 segundos). La solucion es configurar NTP o chrony para sincronizar los relojes. En un entorno AD, el DC con el rol PDC Emulator actua como fuente de tiempo autoritativa. La tolerancia se puede modificar con `clockskew` en `krb5.conf`, pero no es recomendable aumentarla por razones de seguridad.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="302.4" data-correct="a">

### Pregunta 24 (Subtema 302.4)

¿Que comando permite exportar un keytab con los principals de servicio de una cuenta de equipo desde un Samba AD DC?

- [ ] a) `samba-tool domain exportkeytab /tmp/server.keytab --principal=cifs/servidor.ejemplo.com`
- [ ] b) `ktutil export /tmp/server.keytab cifs/servidor.ejemplo.com`
- [ ] c) `samba-tool keytab create /tmp/server.keytab`
- [ ] d) `net ads keytab export /tmp/server.keytab`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `samba-tool domain exportkeytab /tmp/server.keytab --principal=cifs/servidor.ejemplo.com`**

`samba-tool domain exportkeytab` extrae principals de servicio del directorio AD y los almacena en un archivo keytab. Se puede filtrar por principal especifico con `--principal` o exportar todos los principals de una cuenta. Esto es util para configurar servicios kerberizados como Apache con mod_auth_gssapi, servidores NFS o aplicaciones que necesitan autenticacion Kerberos. El keytab resultante debe protegerse con permisos restrictivos (chmod 600).

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="302.5" data-correct="d">

### Pregunta 25 (Subtema 302.5)

¿Que herramienta de Samba permite gestionar las listas de control de acceso (ACLs) de los objetos de Group Policy almacenados en SYSVOL desde la linea de comandos?

- [ ] a) `setfacl` directamente sobre los directorios de SYSVOL
- [ ] b) `samba-tool gpo acl`
- [ ] c) `chmod` y `chown` sobre los directorios de GPO
- [ ] d) `samba-tool ntacl set` y `samba-tool ntacl get`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `samba-tool ntacl set` y `samba-tool ntacl get`**

`samba-tool ntacl` permite consultar (`get`) y establecer (`set`) las ACLs NT (descriptores de seguridad de Windows) en archivos y directorios del servidor Samba, incluyendo SYSVOL. Esto es fundamental para que las GPOs funcionen correctamente, ya que los clientes Windows verifican los permisos NTFS de los archivos de politica. `samba-tool ntacl sysvolreset` restablece las ACLs de SYSVOL a los valores predeterminados. Las herramientas POSIX como `setfacl` no gestionan las ACLs NT correctamente.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="302.5" data-correct="b">

### Pregunta 26 (Subtema 302.5)

¿Que comando muestra todas las GPOs vinculadas a un sitio, dominio u OU especifica en un Samba AD DC?

- [ ] a) `samba-tool gpo list`
- [ ] b) `samba-tool gpo listall` para ver todas, o `samba-tool gpo listcontainers GUID` para ver donde se aplica una GPO especifica
- [ ] c) `samba-tool gpo show --links`
- [ ] d) `samba-tool gpo query --ou="OU=Ventas"`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `samba-tool gpo listall` para ver todas, o `samba-tool gpo listcontainers GUID` para ver donde se aplica una GPO especifica**

`samba-tool gpo listall` muestra todas las GPOs del dominio con su nombre, GUID y ruta en SYSVOL. `samba-tool gpo listcontainers` muestra los contenedores (OUs, dominio, sitios) donde una GPO especifica esta vinculada. La operacion inversa, `samba-tool gpo list USUARIO`, muestra las GPOs que se aplican a un usuario concreto. Para vincular una GPO a una OU se usa `samba-tool gpo setlink`.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="302.5" data-correct="c">

### Pregunta 27 (Subtema 302.5)

En un entorno Samba AD con multiples DCs, ¿donde se almacenan fisicamente los archivos de las Group Policy Objects (GPOs) y como se garantiza su disponibilidad?

- [ ] a) En la base de datos LDB exclusivamente, replicados mediante DRS
- [ ] b) En `/etc/samba/gpo/` en cada DC, sincronizados por NFS
- [ ] c) Parcialmente en la base de datos AD (metadatos y enlaces) y parcialmente en el directorio SYSVOL (archivos de configuracion), siendo SYSVOL replicado manualmente con rsync
- [ ] d) En un recurso compartido DFS que se replica automaticamente entre DCs

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Parcialmente en la base de datos AD (metadatos y enlaces) y parcialmente en el directorio SYSVOL (archivos de configuracion), siendo SYSVOL replicado manualmente con rsync**

Las GPOs tienen dos componentes: el Group Policy Container (GPC), almacenado como objeto en la base de datos AD y replicado automaticamente por DRS, y el Group Policy Template (GPT), que son los archivos de configuracion almacenados en `SYSVOL/dominio/Policies/{GUID}`. Como Samba no implementa DFS-R nativamente, la replicacion de SYSVOL entre DCs debe gestionarse manualmente mediante scripts con rsync, lo que es una diferencia significativa con Windows Server.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="303.1" data-correct="a">

### Pregunta 28 (Subtema 303.1)

Un administrador configura un recurso compartido con `valid users = @ventas, admin` y `invalid users = invitado, @temporales`. Un usuario llamado `admin` que pertenece al grupo `temporales` intenta acceder. ¿Que ocurre?

- [ ] a) El acceso es denegado porque `invalid users` tiene prioridad sobre `valid users`
- [ ] b) El acceso es permitido porque el usuario `admin` esta explicitamente en `valid users`
- [ ] c) Samba genera un error de conflicto y deniega el acceso a todos los usuarios
- [ ] d) Samba evalua `valid users` primero y permite el acceso

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) El acceso es denegado porque `invalid users` tiene prioridad sobre `valid users`**

En Samba, la directiva `invalid users` siempre tiene prioridad sobre `valid users`. Si un usuario aparece en ambas listas (directamente o a traves de pertenencia a grupos), el acceso sera denegado. En este caso, aunque `admin` esta en `valid users`, su pertenencia al grupo `@temporales` lo incluye en `invalid users`, resultando en la denegacion del acceso. Esta es una medida de seguridad por diseno: la denegacion explicita siempre prevalece.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="303.1" data-correct="d">

### Pregunta 29 (Subtema 303.1)

¿Que directiva de `smb.conf` permite definir un script que se ejecuta automaticamente cuando un usuario se conecta a un recurso compartido?

- [ ] a) `login script = script.bat`
- [ ] b) `exec on connect = /usr/local/bin/script.sh`
- [ ] c) `postconnect = /usr/local/bin/script.sh`
- [ ] d) `preexec = /usr/local/bin/script.sh`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `preexec = /usr/local/bin/script.sh`**

La directiva `preexec` (o `exec`) ejecuta un comando del servidor como el usuario conectado antes de que se complete la conexion al recurso compartido. Si el script retorna un codigo distinto de cero, la conexion se rechaza. Existe tambien `root preexec` (ejecuta como root), `postexec` (al desconectar) y `root postexec`. `login script` es diferente: especifica un script batch de Windows que se ejecuta en el cliente al iniciar sesion en el dominio, no en el servidor.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="303.1" data-correct="b">

### Pregunta 30 (Subtema 303.1)

¿Que directiva de `smb.conf` impide que los clientes eliminen archivos o directorios que coincidan con un patron determinado, como archivos de sistema de macOS?

- [ ] a) `hide files = /._*/.DS_Store/`
- [ ] b) `veto files = /._*/.DS_Store/`
- [ ] c) `delete readonly = no`
- [ ] d) `deny delete = /._*/.DS_Store/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `veto files = /._*/.DS_Store/`**

`veto files` define patrones de archivos que seran completamente invisibles e inaccesibles para los clientes SMB. Los patrones se delimitan con `/`. Los archivos vetados no pueden ser listados, abiertos, ni eliminados por los clientes. `hide files` oculta los archivos (los marca como ocultos en Windows) pero siguen siendo accesibles si se conoce el nombre. La directiva complementaria `delete veto files = yes` permite que al eliminar un directorio tambien se eliminen los archivos vetados que contiene.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="303.2" data-correct="c">

### Pregunta 31 (Subtema 303.2)

Un administrador configura `vfs objects = acl_xattr` pero los usuarios de Windows no pueden establecer permisos desde la pestana de Seguridad. ¿Cual es la causa mas probable?

- [ ] a) El modulo `acl_xattr` no esta compilado en esta version de Samba
- [ ] b) El recurso compartido tiene `read only = yes`
- [ ] c) El sistema de archivos subyacente no tiene soporte para atributos extendidos (`user_xattr`) habilitado en las opciones de montaje
- [ ] d) Falta la directiva `nt acl support = yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El sistema de archivos subyacente no tiene soporte para atributos extendidos (`user_xattr`) habilitado en las opciones de montaje**

El modulo `acl_xattr` almacena los descriptores de seguridad NT como atributos extendidos en el sistema de archivos. Si el sistema de archivos no soporta xattrs o no tiene habilitada la opcion `user_xattr` en el montaje (en `/etc/fstab`), las operaciones de escritura de ACLs fallan silenciosamente o con error. En ext4 y XFS los xattrs estan habilitados por defecto, pero en otros sistemas de archivos puede requerirse configuracion explicita. `nt acl support` esta habilitado por defecto en `yes`.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="303.2" data-correct="a">

### Pregunta 32 (Subtema 303.2)

¿Que diferencia existe entre `force create mode` y `create mask` en `smb.conf`?

- [ ] a) `create mask` aplica una operacion AND (restringe permisos) y `force create mode` aplica una operacion OR (anade permisos) sobre los permisos de archivos nuevos
- [ ] b) `create mask` se aplica a archivos y `force create mode` a directorios
- [ ] c) `create mask` define permisos para usuarios locales y `force create mode` para usuarios del dominio
- [ ] d) No hay diferencia funcional, son sinonimos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `create mask` aplica una operacion AND (restringe permisos) y `force create mode` aplica una operacion OR (anade permisos) sobre los permisos de archivos nuevos**

Cuando se crea un archivo, Samba aplica primero `create mask` con una operacion AND sobre los permisos solicitados por el cliente, eliminando bits no deseados. Luego aplica `force create mode` con una operacion OR, forzando que ciertos bits esten siempre activos. Por ejemplo, con `create mask = 0770` y `force create mode = 0660`, un archivo nunca tendra permisos para "others" (AND con 0770) y siempre tendra lectura/escritura para owner y group (OR con 0660). Las directivas equivalentes para directorios son `directory mask` y `force directory mode`.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="303.2" data-correct="d">

### Pregunta 33 (Subtema 303.2)

¿Que modulo VFS de Samba permite mapear los streams NTFS (Alternate Data Streams) a un directorio separado en el sistema de archivos Linux?

- [ ] a) `vfs objects = xattr_tdb`
- [ ] b) `vfs objects = fileid`
- [ ] c) `vfs objects = acl_xattr`
- [ ] d) `vfs objects = streams_depot`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `vfs objects = streams_depot`**

`streams_depot` almacena los Alternate Data Streams (ADS) de NTFS en un directorio oculto separado (`.streams`) dentro del recurso compartido. Los ADS son flujos de datos adicionales asociados a un archivo, utilizados por Windows para metadatos y por algunas aplicaciones. Alternativas incluyen `streams_xattr` (almacena los streams como atributos extendidos, limitado por el tamano maximo de xattrs) y `xattr_tdb` (almacena xattrs en una base de datos TDB cuando el sistema de archivos no los soporta).

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="303.3" data-correct="b">

### Pregunta 34 (Subtema 303.3)

Un administrador configura `vfs objects = recycle` en un recurso compartido. ¿Que directiva adicional define el directorio donde se almacenan los archivos eliminados?

- [ ] a) `recycle:path = .papelera`
- [ ] b) `recycle:repository = .papelera`
- [ ] c) `recycle:directory = .papelera`
- [ ] d) `recycle:trash = .papelera`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `recycle:repository = .papelera`**

La directiva `recycle:repository` especifica la ruta relativa (dentro del recurso compartido) del directorio donde se mueven los archivos eliminados. Otras directivas importantes del modulo recycle son: `recycle:keeptree = yes` (mantiene la estructura de directorios original), `recycle:versions = yes` (conserva multiples versiones de archivos con el mismo nombre), `recycle:touch = yes` (actualiza la fecha de modificacion), `recycle:exclude = *.tmp, *.log` (excluye patrones) y `recycle:maxsize = 0` (sin limite de tamano).

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="303.3" data-correct="a">

### Pregunta 35 (Subtema 303.3)

¿Que recurso compartido especial de Samba permite a los clientes Windows descargar automaticamente los drivers de impresora al conectarse a una impresora compartida?

- [ ] a) `[print$]`
- [ ] b) `[printers]`
- [ ] c) `[drivers]`
- [ ] d) `[printcap]`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `[print$]`**

El recurso compartido `[print$]` es el almacen de drivers de impresora en Samba (equivalente al Print$ share de Windows). Cuando un cliente se conecta a una impresora compartida, Windows descarga automaticamente el driver apropiado desde este recurso. La estructura interna contiene subdirectorios como `W32X86` (drivers x86), `x64` (drivers de 64 bits) y `WIN40` (drivers legacy). Los administradores necesitan permisos de escritura para subir drivers con `rpcclient` o RSAT.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="303.3" data-correct="c">

### Pregunta 36 (Subtema 303.3)

¿Que directiva de `smb.conf` configura el modulo `full_audit` para registrar solo las operaciones de apertura, escritura y eliminacion de archivos?

- [ ] a) `full_audit:log = open, write, unlink`
- [ ] b) `full_audit:operations = open write unlink`
- [ ] c) `full_audit:success = open write unlink`
- [ ] d) `full_audit:events = open, write, unlink`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `full_audit:success = open write unlink`**

`full_audit:success` define las operaciones que se registran cuando se completan exitosamente, separadas por espacios. `full_audit:failure` define las que se registran cuando fallan. Las operaciones disponibles incluyen `open`, `close`, `read`, `write`, `unlink` (eliminar archivo), `rename`, `mkdir`, `rmdir`, `chmod`, `chown` y muchas mas. La directiva `full_audit:prefix` personaliza el formato del log, pudiendo incluir variables como `%u` (usuario), `%I` (IP) y `%S` (recurso compartido).

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="303.4" data-correct="b">

### Pregunta 37 (Subtema 303.4)

¿Que directiva de `smb.conf` habilita el soporte de DFS (Distributed File System) en un recurso compartido para que los clientes puedan seguir referencias a otros servidores?

- [ ] a) `dfs enable = yes`
- [ ] b) `msdfs root = yes`
- [ ] c) `dfs referral = yes`
- [ ] d) `host msdfs = yes` en la seccion `[global]`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `msdfs root = yes`**

La directiva `msdfs root = yes` en la seccion de un recurso compartido lo convierte en la raiz de un espacio de nombres DFS. Ademas, se debe habilitar `host msdfs = yes` en la seccion `[global]`. Los enlaces DFS se crean como enlaces simbolicos en el directorio del recurso con el formato `msdfs:servidor\recurso`. Esto permite a los clientes Windows seguir transparentemente las referencias a recursos compartidos en otros servidores, creando un espacio de nombres unificado.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="303.4" data-correct="d">

### Pregunta 38 (Subtema 303.4)

Un administrador necesita crear un enlace DFS dentro de un recurso compartido Samba que apunte al servidor `\\fileserver2\proyectos`. ¿Que tipo de enlace simbolico debe crear en el directorio del recurso?

- [ ] a) `ln -s //fileserver2/proyectos proyectos`
- [ ] b) `ln -s \\\\fileserver2\\proyectos proyectos`
- [ ] c) `ln -s dfs://fileserver2/proyectos proyectos`
- [ ] d) `ln -s msdfs:fileserver2\\proyectos proyectos`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `ln -s msdfs:fileserver2\\proyectos proyectos`**

Los enlaces DFS en Samba se crean como enlaces simbolicos cuyo destino usa el prefijo `msdfs:` seguido del formato UNC con barras invertidas. El formato correcto es `msdfs:servidor\recurso` o `msdfs:servidor1\recurso,servidor2\recurso` para multiples destinos (failover/balanceo). Samba detecta estos enlaces simbolicos especiales y los presenta a los clientes Windows como referencias DFS, que el cliente sigue transparentemente para acceder al recurso en el servidor de destino.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="303.4" data-correct="a">

### Pregunta 39 (Subtema 303.4)

¿Que ventaja proporciona la configuracion de multiples destinos en un enlace DFS de Samba, como `msdfs:srv1\datos,srv2\datos`?

- [ ] a) Permite failover automatico y balanceo de carga: si el primer servidor no esta disponible, el cliente se redirige al segundo
- [ ] b) Los datos se replican automaticamente entre ambos servidores mediante DFS-R
- [ ] c) Los clientes montan ambos recursos simultaneamente como un unico volumen
- [ ] d) Solo el primer servidor se utiliza; el segundo se ignora hasta que se elimina manualmente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Permite failover automatico y balanceo de carga: si el primer servidor no esta disponible, el cliente se redirige al segundo**

Cuando un enlace DFS tiene multiples destinos separados por comas, el cliente Windows selecciona aleatoriamente uno de ellos (balanceo de carga). Si el destino seleccionado no esta disponible, el cliente prueba con el siguiente (failover). Sin embargo, Samba no replica datos entre los servidores; la sincronizacion del contenido debe gestionarse externamente con herramientas como rsync o un almacenamiento compartido. DFS solo proporciona la referencia de nombres, no la replicacion de datos.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="304.1" data-correct="c">

### Pregunta 40 (Subtema 304.1)

¿Que opcion del comando `mount.cifs` permite especificar la version del protocolo SMB a utilizar, forzando por ejemplo SMB3 para garantizar el cifrado del transporte?

- [ ] a) `smb_version=3.0`
- [ ] b) `protocol=SMB3`
- [ ] c) `vers=3.0`
- [ ] d) `smbver=3.0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `vers=3.0`**

La opcion `vers` de `mount.cifs` especifica la version del protocolo SMB a utilizar. Los valores validos incluyen `1.0` (SMB1, inseguro), `2.0`, `2.1`, `3.0`, `3.02` y `3.1.1`. Usar `vers=3.0` o superior permite aprovechar el cifrado de transporte nativo de SMB3. En kernels Linux modernos, el valor por defecto es `3.1.1` con negociacion automatica, pero puede ser necesario forzar una version especifica para compatibilidad o seguridad. La opcion `3.1.1` ofrece las mejores caracteristicas de seguridad.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="304.1" data-correct="b">

### Pregunta 41 (Subtema 304.1)

¿Que opcion de montaje en `/etc/fstab` garantiza que el recurso CIFS no se monte hasta que la red este disponible durante el arranque del sistema?

- [ ] a) `auto`
- [ ] b) `_netdev`
- [ ] c) `network`
- [ ] d) `wait_network`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `_netdev`**

La opcion `_netdev` indica al sistema que el dispositivo requiere acceso a la red y no debe montarse hasta que las interfaces de red esten configuradas y activas. Sin esta opcion, el sistema puede intentar montar el recurso CIFS antes de que la red este disponible, causando errores y retrasos en el arranque. Otra opcion complementaria es `x-systemd.automount` (en sistemas con systemd), que monta el recurso bajo demanda cuando se accede al punto de montaje, evitando dependencias en el orden de arranque.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="304.1" data-correct="d">

### Pregunta 42 (Subtema 304.1)

¿Que comando permite descargar un archivo de un recurso compartido SMB de forma no interactiva, similar a `wget`?

- [ ] a) `smbclient -c "get archivo.txt" //servidor/recurso`
- [ ] b) `cifs-get //servidor/recurso/archivo.txt`
- [ ] c) `mount.cifs` seguido de `cp`
- [ ] d) `smbget smb://servidor/recurso/archivo.txt`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `smbget smb://servidor/recurso/archivo.txt`**

`smbget` es una utilidad de descarga no interactiva para recursos SMB, similar a `wget` para HTTP. Soporta descarga recursiva (`-R`), continuacion de descargas interrumpidas, autenticacion con `-U usuario` o archivo de credenciales y URLs en formato `smb://servidor/recurso/ruta`. Aunque `smbclient -c "get archivo"` tambien funciona, `smbget` esta disenado especificamente para descargas no interactivas y ofrece barras de progreso, descarga recursiva de directorios completos y mejor integracion con scripts.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="304.2" data-correct="a">

### Pregunta 43 (Subtema 304.2)

¿Que directiva en `/etc/samba/smb.conf` debe configurarse para que `winbindd` cree automaticamente directorios home para los usuarios del dominio al iniciar sesion por primera vez?

- [ ] a) No es una directiva de Samba; se configura `pam_mkhomedir.so` en la pila de PAM
- [ ] b) `template homedir = /home/%U` con `create home = yes`
- [ ] c) `winbind create home = yes`
- [ ] d) `mkhomedir = yes` en la seccion `[global]`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) No es una directiva de Samba; se configura `pam_mkhomedir.so` en la pila de PAM**

La creacion automatica de directorios home es responsabilidad de PAM, no de Samba directamente. Se configura anadiendo `session required pam_mkhomedir.so skel=/etc/skel umask=0077` en los archivos de PAM (`/etc/pam.d/common-session` o equivalente). La directiva de Samba `template homedir = /home/%D/%U` define la plantilla de la ruta del directorio home que winbind reporta a NSS, pero no crea el directorio fisicamente. `%D` es el dominio y `%U` el nombre de usuario.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="304.2" data-correct="c">

### Pregunta 44 (Subtema 304.2)

Un administrador ejecuta `getent passwd` y no aparecen los usuarios del dominio AD, aunque `wbinfo -u` los muestra correctamente. ¿Cual es la causa mas probable?

- [ ] a) El demonio `winbindd` no esta en ejecucion
- [ ] b) Las credenciales del servidor estan expiradas
- [ ] c) Falta la entrada `winbind` en las lineas `passwd` y `group` de `/etc/nsswitch.conf`
- [ ] d) El rango de idmap esta agotado

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Falta la entrada `winbind` en las lineas `passwd` y `group` de `/etc/nsswitch.conf`**

Si `wbinfo -u` funciona, significa que `winbindd` esta operativo y puede comunicarse con el dominio AD. El hecho de que `getent passwd` no muestre los usuarios indica que el Name Service Switch (NSS) no esta configurado para consultar winbind. La solucion es editar `/etc/nsswitch.conf` y asegurar que las lineas `passwd` y `group` incluyan `winbind` (por ejemplo: `passwd: files winbind`). Tambien debe verificarse que la libreria `libnss_winbind.so` esta instalada en el sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="304.2" data-correct="b">

### Pregunta 45 (Subtema 304.2)

¿Que directiva de `smb.conf` define el shell por defecto asignado a los usuarios del dominio que no tienen un shell configurado en Active Directory?

- [ ] a) `winbind default shell = /bin/bash`
- [ ] b) `template shell = /bin/bash`
- [ ] c) `user shell = /bin/bash`
- [ ] d) `default shell = /bin/bash`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `template shell = /bin/bash`**

`template shell` define el shell de login predeterminado para los usuarios del dominio mapeados por winbind cuando no tienen un atributo `loginShell` en Active Directory. El valor por defecto es `/bin/false`, lo que impide el login interactivo. Para permitir que los usuarios del dominio inicien sesion en el sistema Linux, debe cambiarse a `/bin/bash` u otro shell valido. Junto con `template homedir`, forma la base de los atributos POSIX asignados a usuarios del dominio.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="304.3" data-correct="d">

### Pregunta 46 (Subtema 304.3)

¿Que herramienta permite realizar llamadas RPC remotas a un servidor Samba para tareas de administracion como enumerar recursos compartidos, usuarios y gestionar impresoras?

- [ ] a) `smbclient`
- [ ] b) `net rpc`
- [ ] c) `wbinfo`
- [ ] d) `rpcclient`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `rpcclient`**

`rpcclient` es una herramienta interactiva que permite realizar llamadas RPC (Remote Procedure Call) a servidores SMB/CIFS. Proporciona comandos como `enumshares` (listar recursos), `enumdomusers` (listar usuarios), `getprinter` (informacion de impresora), `adddriver` (anadir driver de impresora), `lookupnames` (resolver nombres a SIDs) y `lsaenumsid` (enumerar SIDs). Es invaluable para diagnostico y administracion avanzada. `net rpc` tambien realiza operaciones RPC pero con una interfaz no interactiva.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="304.3" data-correct="a">

### Pregunta 47 (Subtema 304.3)

¿Que comando de `net` permite enumerar y gestionar los recursos compartidos en un servidor Samba remoto utilizando RPC?

- [ ] a) `net rpc share list -S servidor -U admin`
- [ ] b) `net ads share list -S servidor`
- [ ] c) `net share list --remote=servidor`
- [ ] d) `net smb shares servidor`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `net rpc share list -S servidor -U admin`**

El comando `net rpc share` proporciona subcomandos para gestionar recursos compartidos de forma remota: `list` (listar), `add` (crear), `delete` (eliminar) y `allowedusers` (mostrar permisos). La opcion `-S` especifica el servidor de destino y `-U` el usuario de autenticacion. `net rpc` opera sobre el protocolo MS-RPC, mientras que `net ads` se usa para operaciones especificas de Active Directory (como join/leave). `net conf` gestiona la configuracion almacenada en el registro de Samba.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="304.3" data-correct="c">

### Pregunta 48 (Subtema 304.3)

Un administrador necesita subir un driver de impresora al recurso `[print$]` de un servidor Samba desde un equipo Linux. ¿Que herramienta y procedimiento debe utilizar?

- [ ] a) Copiar los archivos directamente con `smbclient` al recurso `[print$]`
- [ ] b) Usar `lpadmin -p impresora -m driver.ppd`
- [ ] c) Usar `rpcclient` con los comandos `adddriver` y `setdriver` para registrar el driver en la base de datos de impresoras
- [ ] d) Usar `samba-tool printer add-driver`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Usar `rpcclient` con los comandos `adddriver` y `setdriver` para registrar el driver en la base de datos de impresoras**

El proceso de instalacion de un driver de impresora en Samba requiere dos pasos: primero, copiar los archivos del driver al recurso `[print$]` en el subdirectorio apropiado (x64, W32X86), y segundo, registrar el driver en la base de datos de impresoras usando `rpcclient` con `adddriver` (registrar el driver) y `setdriver` (asociarlo a una impresora). Solo copiar archivos no es suficiente; el driver debe registrarse via RPC para que Windows lo descargue automaticamente.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="305.1" data-correct="b">

### Pregunta 49 (Subtema 305.1)

¿Que componente de FreeIPA actua como la autoridad certificadora (CA) para emitir certificados X.509 a hosts y servicios del dominio?

- [ ] a) MIT Kerberos KDC
- [ ] b) Dogtag Certificate System
- [ ] c) OpenSSL CA integrado
- [ ] d) Let's Encrypt ACME client

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Dogtag Certificate System**

Dogtag Certificate System es el componente de FreeIPA que actua como autoridad certificadora (CA). Emite y gestiona certificados X.509 para hosts, servicios y usuarios del dominio. Soporta sub-CAs, perfiles de certificado personalizados, revocacion (CRL y OCSP) y renovacion automatica mediante el demonio `certmonger`. Cuando se instala FreeIPA con `ipa-server-install`, Dogtag se configura automaticamente. Tambien es posible integrar FreeIPA con una CA externa si se prefiere no usar Dogtag.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="305.1" data-correct="d">

### Pregunta 50 (Subtema 305.1)

¿Que demonio de FreeIPA se encarga de la renovacion automatica de certificados proximos a su fecha de expiracion?

- [ ] a) `sssd`
- [ ] b) `ipa-dnskeysyncd`
- [ ] c) `dirsrv`
- [ ] d) `certmonger`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `certmonger`**

`certmonger` es un demonio que monitoriza los certificados del sistema y solicita automaticamente su renovacion antes de que expiren. En un entorno FreeIPA, `certmonger` se comunica con la CA de Dogtag para obtener certificados renovados. Gestiona tanto los certificados del propio servidor IPA (LDAP, HTTP, KDC) como los de servicios adicionales. El comando `getcert list` muestra todos los certificados gestionados y su estado, y `ipa-getcert request` solicita un nuevo certificado.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="305.1" data-correct="a">

### Pregunta 51 (Subtema 305.1)

¿Que comando de FreeIPA permite anadir una replica del servidor IPA para alta disponibilidad?

- [ ] a) `ipa-replica-install`
- [ ] b) `ipa server-add --replica`
- [ ] c) `ipa-server-install --replica-of=master.ejemplo.com`
- [ ] d) `ipa replica-create`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `ipa-replica-install`**

`ipa-replica-install` configura un servidor como replica de un servidor FreeIPA existente. El proceso replica el directorio LDAP (389 DS), la configuracion de Kerberos, los certificados de la CA y opcionalmente el servidor DNS. En versiones modernas de FreeIPA (4.3+), no se necesita preparar un archivo de replica previamente; el comando se ejecuta directamente en el nuevo servidor despues de registrarlo como cliente con `ipa-client-install`. Se pueden configurar acuerdos de replicacion con topologia especifica usando `ipa topologysegment-add`.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="305.2" data-correct="c">

### Pregunta 52 (Subtema 305.2)

¿Que paquete o componente debe instalarse en el servidor FreeIPA antes de poder establecer una relacion de confianza con Active Directory?

- [ ] a) `samba-dc`
- [ ] b) `krb5-kdc-ldap`
- [ ] c) El componente de trust instalado con `ipa-adtrust-install`, que configura Samba y los servicios necesarios
- [ ] d) `openldap-clients` con soporte GSSAPI

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El componente de trust instalado con `ipa-adtrust-install`, que configura Samba y los servicios necesarios**

`ipa-adtrust-install` prepara el servidor FreeIPA para establecer relaciones de confianza con dominios Active Directory. Configura Samba como componente auxiliar para la comunicacion con AD (protocolos RPC y LDAP de AD), crea los SIDs necesarios para los usuarios y grupos de IPA, configura el servicio `cifs` y habilita el soporte de cross-realm Kerberos. Despues de ejecutar `ipa-adtrust-install`, se puede crear la confianza con `ipa trust-add`.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="305.2" data-correct="b">

### Pregunta 53 (Subtema 305.2)

¿Que tipo de confianza se establece por defecto entre FreeIPA y Active Directory con el comando `ipa trust-add`?

- [ ] a) Confianza bidireccional transitiva
- [ ] b) Confianza unidireccional donde los usuarios de AD pueden acceder a recursos de IPA, pero no al reves
- [ ] c) Confianza bidireccional no transitiva
- [ ] d) Confianza de bosque (forest trust) bidireccional

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Confianza unidireccional donde los usuarios de AD pueden acceder a recursos de IPA, pero no al reves**

Por defecto, `ipa trust-add` establece una confianza unidireccional (one-way trust) donde FreeIPA confia en AD. Esto significa que los usuarios de AD pueden autenticarse y acceder a recursos en el dominio IPA, pero los usuarios de IPA no pueden acceder a recursos en AD. Para una confianza bidireccional se usa `ipa trust-add --two-way=true`. La confianza es de tipo "forest trust", lo que permite acceso entre todos los dominios de ambos bosques si es bidireccional.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="305.2" data-correct="d">

### Pregunta 54 (Subtema 305.2)

En un entorno con trust entre FreeIPA y AD, ¿que componente de SSSD se encarga de resolver las identidades de los usuarios de AD en los clientes IPA?

- [ ] a) El proveedor `ldap` de SSSD consultando directamente los DCs de AD
- [ ] b) El demonio `winbindd` ejecutandose en cada cliente IPA
- [ ] c) El proveedor `krb5` de SSSD mediante tickets de servicio
- [ ] d) El proveedor `ipa` de SSSD, que consulta el servidor IPA que actua como intermediario con AD a traves del servicio `extdom`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) El proveedor `ipa` de SSSD, que consulta el servidor IPA que actua como intermediario con AD a traves del servicio `extdom`**

En un entorno con trust IPA-AD, los clientes IPA no contactan directamente con los DCs de AD para resolver identidades. En su lugar, SSSD en el cliente consulta al servidor IPA usando el proveedor `ipa`. El servidor IPA utiliza el plugin LDAP `extdom` (Extended Domain) para resolver los atributos de los usuarios de AD y devolver la informacion al cliente. Esto simplifica la configuracion de los clientes, que solo necesitan comunicarse con los servidores IPA.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="305.3" data-correct="a">

### Pregunta 55 (Subtema 305.3)

¿Que archivo define las exportaciones NFS en un servidor Linux y que sintaxis se utiliza para compartir `/datos` a la red 10.0.0.0/24 con acceso de lectura/escritura y autenticacion Kerberos con cifrado?

- [ ] a) `/etc/exports` con la linea `/datos 10.0.0.0/24(rw,sec=krb5p,no_root_squash)`
- [ ] b) `/etc/nfs.conf` con la linea `share=/datos network=10.0.0.0/24 rw krb5p`
- [ ] c) `/etc/exports` con la linea `/datos 10.0.0.0/24 rw sec=krb5p`
- [ ] d) `/etc/nfs/shares.conf` con la linea `[datos] path=/datos allowed=10.0.0.0/24`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/etc/exports` con la linea `/datos 10.0.0.0/24(rw,sec=krb5p,no_root_squash)`**

El archivo `/etc/exports` define los directorios exportados via NFS. La sintaxis es `directorio cliente(opciones)`. Es importante que no haya espacio entre el cliente y el parentesis de opciones; un espacio cambia completamente el significado (exportaria a todos sin opciones). `sec=krb5p` habilita autenticacion Kerberos con cifrado completo. `no_root_squash` permite que root en el cliente tenga privilegios de root en el servidor (usar con precaucion). Despues de modificar el archivo, se aplican los cambios con `exportfs -ra`.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="305.3" data-correct="c">

### Pregunta 56 (Subtema 305.3)

¿Que servicio debe ejecutarse en el servidor NFS para gestionar el mapeo entre nombres de usuario y UIDs/GIDs cuando se utiliza NFSv4?

- [ ] a) `rpc.mountd`
- [ ] b) `rpcbind`
- [ ] c) `rpc.idmapd` (o `nfsidmap`)
- [ ] d) `rpc.statd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rpc.idmapd` (o `nfsidmap`)**

NFSv4 utiliza nombres de usuario en formato `usuario@dominio` en lugar de UIDs/GIDs numericos en el protocolo de red. El demonio `rpc.idmapd` (y en versiones mas recientes, `nfsidmap` a traves del kernel) se encarga de traducir entre estos nombres y los UIDs/GIDs locales. La configuracion se realiza en `/etc/idmapd.conf`, donde el parametro `Domain` debe coincidir entre cliente y servidor para que el mapeo funcione correctamente. Si los dominios no coinciden, los archivos aparecen con propietario `nobody`.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="305.3" data-correct="b">

### Pregunta 57 (Subtema 305.3)

¿Que opcion de montaje NFS en el cliente forza el uso exclusivo de NFSv4, deshabilitando la negociacion automatica de versiones?

- [ ] a) `proto=nfs4`
- [ ] b) `nfsvers=4` o `vers=4`
- [ ] c) `version=4.0`
- [ ] d) `nfs4only`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `nfsvers=4` o `vers=4`**

La opcion de montaje `nfsvers=4` (o su sinonimo `vers=4`) fuerza al cliente a utilizar exclusivamente NFSv4, sin intentar negociar versiones anteriores. Se pueden especificar subversiones como `nfsvers=4.1` o `nfsvers=4.2` para funcionalidades especificas. NFSv4.1 introduce pNFS (parallel NFS) y sesiones, mientras que NFSv4.2 anade copy offload y sparse files. Sin esta opcion, el cliente puede negociar NFSv3 si el servidor lo soporta, perdiendo funcionalidades como ACLs nativas y el mapeo de identidades basado en nombres.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="305.4" data-correct="d">

### Pregunta 58 (Subtema 305.4)

¿Que directiva de `smb.conf` habilita el soporte de multicanal (SMB Multichannel) en Samba para agregar el ancho de banda de multiples interfaces de red?

- [ ] a) `smb multichannel = yes`
- [ ] b) `multi channel = yes`
- [ ] c) `network bonding = smb`
- [ ] d) `server multi channel support = yes`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `server multi channel support = yes`**

`server multi channel support = yes` habilita SMB Multichannel en Samba, permitiendo que un cliente establezca multiples conexiones TCP simultaneas sobre diferentes interfaces de red, agregando ancho de banda y proporcionando failover de red. Esta funcionalidad fue introducida en SMB3 y requiere que tanto el cliente como el servidor tengan multiples interfaces de red activas. En Samba, esta funcionalidad fue marcada como experimental durante mucho tiempo y su soporte ha ido mejorando en versiones recientes.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="305.4" data-correct="a">

### Pregunta 59 (Subtema 305.4)

¿Que herramienta de FreeIPA permite gestionar reglas de sudo centralizadas para que los clientes del dominio IPA obtengan las politicas de sudo desde el servidor?

- [ ] a) `ipa sudorule-add` para crear reglas, junto con `ipa sudocmd-add` para definir los comandos permitidos
- [ ] b) `ipa sudo-add` para crear reglas directamente en `/etc/sudoers` de forma remota
- [ ] c) `ipa policy-add --type=sudo` para crear politicas de acceso
- [ ] d) Solo es posible gestionar sudo editando `/etc/sudoers` manualmente en cada cliente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `ipa sudorule-add` para crear reglas, junto con `ipa sudocmd-add` para definir los comandos permitidos**

FreeIPA permite centralizar las reglas de sudo en el servidor LDAP. `ipa sudocmd-add` define los comandos que pueden ejecutarse, `ipa sudocmdgroup-add` agrupa comandos, y `ipa sudorule-add` crea reglas que asocian usuarios, hosts y comandos. SSSD en los clientes obtiene estas reglas automaticamente (con `sudo_provider = ipa` en `sssd.conf`). Esto elimina la necesidad de editar `/etc/sudoers` en cada cliente individualmente y proporciona un punto de gestion centralizado.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="305.4" data-correct="c">

### Pregunta 60 (Subtema 305.4)

Un administrador necesita configurar un servidor Samba para que los clientes SMB que soporten cifrado lo utilicen obligatoriamente, pero sin rechazar clientes antiguos que no lo soporten. ¿Que valor de la directiva `smb encrypt` consigue este comportamiento?

- [ ] a) `smb encrypt = off`
- [ ] b) `smb encrypt = required`
- [ ] c) `smb encrypt = desired`
- [ ] d) `smb encrypt = auto`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `smb encrypt = desired`**

La directiva `smb encrypt` tiene tres valores posibles: `off` (cifrado deshabilitado), `desired` (cifrado preferido pero no obligatorio) y `required` (cifrado obligatorio, rechaza clientes sin soporte). Con `desired`, el servidor solicita cifrado a los clientes que lo soportan (SMB3+), pero permite conexiones sin cifrar de clientes antiguos (SMB1/SMB2). Con `required`, solo se aceptan conexiones cifradas, lo que puede bloquear clientes legacy. Esta directiva se puede aplicar globalmente o por recurso compartido.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
