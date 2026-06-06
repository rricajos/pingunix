---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "302"
subtema: "302.1"
titulo: "Samba como DC - Ejercicios"
peso: 5
tags:
  - lpic-3
  - tema-302
  - ejercicios
---

# Ejercicios - 302.1 Samba como Controlador de Dominio

### Pregunta 1
¿Qué comando se utiliza para aprovisionar un nuevo dominio Active Directory con Samba?

a) `samba-tool domain create`
b) `samba-tool domain provision`
c) `net ads provision`
d) `samba-tool ad setup`

<details><summary>Respuesta</summary>

**b) `samba-tool domain provision`**

`samba-tool domain provision` es el comando que crea un nuevo dominio Active Directory. Requiere parámetros como `--realm` (nombre Kerberos), `--domain` (nombre NetBIOS), `--server-role=dc` y `--dns-backend`. El proceso genera la base de datos LDAP, configura Kerberos, crea las zonas DNS y genera el archivo smb.conf.
</details>

### Pregunta 2
¿Cuáles de los roles FSMO tienen alcance a nivel de bosque (forest)?

a) PDC Emulator y RID Master
b) Schema Master y Domain Naming Master
c) Infrastructure Master y Schema Master
d) RID Master y Domain Naming Master

<details><summary>Respuesta</summary>

**b) Schema Master y Domain Naming Master**

Los roles FSMO a nivel de bosque son el Schema Master (controla modificaciones al esquema AD) y el Domain Naming Master (gestiona la adición y eliminación de dominios en el bosque). Los roles a nivel de dominio son: PDC Emulator, RID Master e Infrastructure Master.
</details>

### Pregunta 3
¿Qué opción del aprovisionamiento habilita las extensiones RFC2307 para atributos POSIX en AD?

a) `--posix-attributes`
b) `--use-rfc2307`
c) `--enable-unix`
d) `--unix-extensions`

<details><summary>Respuesta</summary>

**b) `--use-rfc2307`**

La opción `--use-rfc2307` del comando `samba-tool domain provision` habilita las extensiones RFC2307 que permiten almacenar atributos POSIX (uidNumber, gidNumber, loginShell, etc.) directamente en los objetos de Active Directory. Esto es esencial para la integración con sistemas Linux.
</details>

### Pregunta 4
¿Qué herramienta se usa para replicar SYSVOL entre controladores de dominio Samba?

a) DFS-R (integrado en Samba)
b) samba-tool drs replicate
c) rsync (herramienta externa)
d) samba-tool sysvol sync

<details><summary>Respuesta</summary>

**c) rsync (herramienta externa)**

Samba no implementa DFS-R (Distributed File System Replication) que es el mecanismo nativo de Microsoft para replicar SYSVOL. Por lo tanto, se debe usar una herramienta externa como rsync para sincronizar el directorio SYSVOL entre controladores de dominio, normalmente programado con cron.
</details>

### Pregunta 5
¿Cuál es la diferencia entre `samba-tool fsmo transfer` y `samba-tool fsmo seize`?

a) No hay diferencia, son sinónimos
b) `transfer` es para roles de bosque y `seize` para roles de dominio
c) `transfer` realiza una transferencia ordenada; `seize` toma el rol forzosamente
d) `transfer` mueve todos los roles; `seize` solo uno

<details><summary>Respuesta</summary>

**c) `transfer` realiza una transferencia ordenada; `seize` toma el rol forzosamente**

`samba-tool fsmo transfer` realiza una transferencia ordenada (graceful) del rol al DC actual, comunicándose con el titular actual del rol. `samba-tool fsmo seize` toma el rol forzosamente sin comunicarse con el titular anterior, y solo debe usarse cuando el DC que tenía el rol ya no está disponible.
</details>

### Pregunta 6
¿Qué backends DNS soporta Samba al actuar como controlador de dominio AD?

a) Solo BIND9
b) SAMBA_INTERNAL y BIND9_DLZ
c) Solo DNS interno
d) PowerDNS y BIND9

<details><summary>Respuesta</summary>

**b) SAMBA_INTERNAL y BIND9_DLZ**

Samba soporta dos backends DNS: `SAMBA_INTERNAL` (servidor DNS integrado en el proceso samba, más simple) y `BIND9_DLZ` (BIND9 con módulo DLZ que lee las zonas AD desde la base de datos de Samba). También existe la opción `NONE` para no configurar DNS, pero no es recomendable.
</details>

### Pregunta 7
¿Qué comando verifica el estado de la replicación entre controladores de dominio Samba?

a) `samba-tool domain repl status`
b) `samba-tool drs showrepl`
c) `net ads repl`
d) `samba-tool fsmo show`

<details><summary>Respuesta</summary>

**b) `samba-tool drs showrepl`**

`samba-tool drs showrepl` muestra el estado de la replicación DRS (Directory Replication Service) entre los controladores de dominio. Incluye información sobre las últimas replicaciones exitosas y fallidas, particiones replicadas y socios de replicación. `samba-tool drs replicate` permite forzar una replicación.
</details>

### Pregunta 8
Al aprovisionar un dominio AD con Samba, ¿dónde se almacena la base de datos principal de Active Directory?

a) `/etc/samba/ad.db`
b) `/var/lib/samba/private/sam.ldb`
c) `/var/lib/samba/passdb.tdb`
d) `/var/lib/samba/ad/ntds.dit`

<details><summary>Respuesta</summary>

**b) `/var/lib/samba/private/sam.ldb`**

La base de datos principal de Active Directory en Samba se almacena en `/var/lib/samba/private/sam.ldb`, que es una base de datos LDB (LDAP Database). Este archivo contiene toda la información del directorio, incluyendo usuarios, grupos, esquema y configuración. Es el equivalente de ntds.dit en Windows.
</details>

### Pregunta 9
¿Qué comando se utiliza para unir un segundo controlador de dominio a un dominio AD existente en Samba?

a) `net ads join`
b) `samba-tool domain join empresa.com DC`
c) `samba-tool domain provision --join`
d) `samba-tool dc add`

<details><summary>Respuesta</summary>

**b) `samba-tool domain join empresa.com DC`**

Para unir un DC adicional se usa `samba-tool domain join` especificando el dominio y el rol `DC`. El comando replica la base de datos AD desde un DC existente, configura Kerberos y DNS. `net ads join` se usa para unir un servidor miembro (no un DC) a un dominio AD.
</details>

### Pregunta 10
¿Cuál es el requisito de sincronización de tiempo para que Kerberos funcione correctamente en un dominio AD?

a) La diferencia máxima permitida es de 1 minuto
b) La diferencia máxima permitida es de 5 minutos
c) La diferencia máxima permitida es de 15 minutos
d) No hay requisito de sincronización de tiempo

<details><summary>Respuesta</summary>

**b) La diferencia máxima permitida es de 5 minutos**

Kerberos requiere que la diferencia de tiempo entre el cliente y el servidor sea menor a 5 minutos (valor predeterminado del clock skew). Si la diferencia es mayor, la autenticación Kerberos falla. Por esta razón, es fundamental tener NTP correctamente configurado en todos los equipos del dominio. El PDC Emulator suele actuar como fuente de tiempo para el dominio.
</details>

### Pregunta 11

¿Qué rol FSMO es responsable de asignar bloques de RIDs (Relative IDs) a los controladores de dominio?

a) Schema Master
b) PDC Emulator
c) RID Master
d) Infrastructure Master

<details><summary>Respuesta</summary>

**c) RID Master**

El RID Master es responsable de asignar bloques de RIDs a cada controlador de dominio. Los RIDs son la parte variable del SID que identifica de forma única a cada objeto de seguridad (usuarios, grupos, equipos) dentro del dominio. Cada DC recibe un bloque de RIDs del RID Master para garantizar que no se produzcan duplicados al crear objetos en diferentes DCs.
</details>

### Pregunta 12

¿Qué comando de `samba-tool` permite verificar y reparar la base de datos de Active Directory?

a) `samba-tool domain repair`
b) `samba-tool dbcheck --fix`
c) `samba-tool ad verify`
d) `samba-tool ldb repair`

<details><summary>Respuesta</summary>

**b) `samba-tool dbcheck --fix`**

El comando `samba-tool dbcheck` verifica la integridad de la base de datos de Active Directory almacenada en sam.ldb. Con la opción `--fix`, intenta reparar automáticamente las inconsistencias encontradas. Se recomienda ejecutarlo después de actualizaciones de Samba o cuando se sospechan problemas de corrupción en la base de datos.
</details>

### Pregunta 13

¿Cuál es la función del PDC Emulator en un dominio Active Directory de Samba?

a) Es el único DC que puede escribir en la base de datos AD
b) Gestiona la sincronización de hora, procesamiento urgente de cambios de contraseña y compatibilidad con clientes NT4
c) Es responsable de modificar el esquema de Active Directory
d) Gestiona la adición y eliminación de dominios del bosque

<details><summary>Respuesta</summary>

**b) Gestiona la sincronización de hora, procesamiento urgente de cambios de contraseña y compatibilidad con clientes NT4**

El PDC Emulator es un rol FSMO a nivel de dominio que cumple varias funciones críticas: es la fuente de tiempo autoritativa para el dominio, procesa cambios de contraseña urgentes (para que surtan efecto inmediatamente), es el DC preferido para autenticación NTLM, y mantiene compatibilidad con clientes y BDCs de dominio NT4 legacy.
</details>

### Pregunta 14

¿Qué archivo se genera durante el aprovisionamiento y debe copiarse a `/etc/krb5.conf` para que Kerberos funcione correctamente en el sistema?

a) `/etc/samba/smb.conf`
b) `/var/lib/samba/private/krb5.conf`
c) `/var/lib/samba/private/sam.ldb`
d) `/etc/samba/krb5.keytab`

<details><summary>Respuesta</summary>

**b) `/var/lib/samba/private/krb5.conf`**

Durante el aprovisionamiento del dominio AD, Samba genera el archivo `/var/lib/samba/private/krb5.conf` con la configuración de Kerberos adecuada para el dominio (realm, KDC, etc.). Este archivo debe copiarse o enlazarse simbólicamente a `/etc/krb5.conf` para que las herramientas Kerberos del sistema (kinit, klist) funcionen correctamente con el dominio.
</details>

### Pregunta 15

¿Qué opción del aprovisionamiento permite especificar el servidor DNS al que se reenviarán las consultas que Samba no puede resolver localmente?

a) `--dns-backend`
b) `--dns-forwarder`
c) `--realm`
d) `--nameserver`

<details><summary>Respuesta</summary>

**b) `--dns-forwarder`**

Aunque no se listó explícitamente en el comando de aprovisionamiento estándar, el parámetro `dns forwarder` se configura en smb.conf (generado durante el aprovisionamiento o editado posteriormente). Sin embargo, la forma directa de especificarlo depende de la versión. En la práctica, el reenviador DNS se configura con `dns forwarder = IP` en la sección `[global]` de smb.conf generado tras el aprovisionamiento.
</details>

### Pregunta 16

¿Qué tipo de confianza se crea automáticamente entre los dominios dentro de un mismo bosque de Active Directory?

a) Confianza externa unidireccional
b) Confianza bidireccional transitiva
c) Confianza de bosque
d) No se crean confianzas automáticamente

<details><summary>Respuesta</summary>

**b) Confianza bidireccional transitiva**

Los dominios dentro del mismo bosque de Active Directory tienen automáticamente confianzas bidireccionales transitivas. Esto significa que si el dominio A confía en B y B confía en C, entonces A confía transitivamente en C. Las confianzas externas (entre bosques diferentes) deben crearse manualmente con `samba-tool domain trust create` y pueden ser unidireccionales o bidireccionales.
</details>

### Pregunta 17

¿Qué comando muestra el nivel funcional actual del dominio y del bosque en Samba AD DC?

a) `samba-tool domain info`
b) `samba-tool domain level show`
c) `samba-tool fsmo show`
d) `samba-tool domain status`

<details><summary>Respuesta</summary>

**b) `samba-tool domain level show`**

El comando `samba-tool domain level show` muestra el nivel funcional actual del dominio y del bosque (por ejemplo, 2008_R2, 2012, etc.). El nivel funcional determina qué características de AD están disponibles. Se puede elevar con `samba-tool domain level raise --domain-level=2008_R2 --forest-level=2008_R2`, pero esta operación es irreversible.
</details>

### Pregunta 18

¿Qué protocolo de replicación utiliza Samba para sincronizar la base de datos de Active Directory entre controladores de dominio?

a) LDAP Sync (syncrepl)
b) DRS (Directory Replication Service)
c) rsync
d) FRS (File Replication Service)

<details><summary>Respuesta</summary>

**b) DRS (Directory Replication Service)**

Samba utiliza DRS (Directory Replication Service), el mismo protocolo de replicación que utiliza Microsoft Windows Server para sincronizar la base de datos de Active Directory entre controladores de dominio. Se gestiona con `samba-tool drs showrepl` para ver el estado y `samba-tool drs replicate` para forzar replicación. SYSVOL, sin embargo, no se replica con DRS y requiere herramientas externas como rsync.
</details>

### Pregunta 19

¿Qué recurso compartido especial contiene los scripts de inicio de sesión y las GPOs en un controlador de dominio AD?

a) `[netlogon]`
b) `[homes]`
c) `[sysvol]`
d) `[print$]`

<details><summary>Respuesta</summary>

**c) `[sysvol]`**

El recurso compartido `[sysvol]` contiene la estructura SYSVOL del dominio, que incluye las GPOs (Group Policy Objects) y los scripts de inicio de sesión. El recurso `[netlogon]` es un subdirectorio de SYSVOL que contiene específicamente los scripts de logon. Ambos se crean automáticamente durante el aprovisionamiento y su ruta predeterminada es `/var/lib/samba/sysvol/`.
</details>

### Pregunta 20

¿Por qué es necesario que NTP esté correctamente configurado antes de aprovisionar un dominio AD con Samba?

a) Porque Samba requiere NTP para el servicio DNS
b) Porque la replicación DRS depende de timestamps exactos
c) Porque Kerberos requiere que la diferencia de tiempo entre cliente y servidor sea menor a 5 minutos
d) Porque los logs de Samba necesitan timestamps sincronizados

<details><summary>Respuesta</summary>

**c) Porque Kerberos requiere que la diferencia de tiempo entre cliente y servidor sea menor a 5 minutos**

Kerberos utiliza timestamps en los tickets de autenticación para prevenir ataques de replay. Si la diferencia de tiempo (clock skew) entre un cliente y el KDC supera los 5 minutos (valor predeterminado), la autenticación falla. Por esto, NTP debe configurarse antes del aprovisionamiento y mantenerse funcionando en todos los equipos del dominio. El PDC Emulator actúa como fuente de tiempo autoritativa.
</details>

### Pregunta 21

¿Qué comando de samba-tool aprovisiona un nuevo dominio AD con el realm EMPRESA.COM, nombre NetBIOS EMPRESA, DNS interno y contraseña de administrador?

<input type="text" class="fill-blank" data-answer="samba-tool domain provision --realm=EMPRESA.COM --domain=EMPRESA --server-role=dc --dns-backend=SAMBA_INTERNAL --adminpass='P@ssw0rd123'" data-alt="samba-tool domain provision" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool domain provision --realm=EMPRESA.COM --domain=EMPRESA --server-role=dc --dns-backend=SAMBA_INTERNAL --adminpass='P@ssw0rd123'**

El comando completo especifica: `--realm` para el nombre Kerberos del dominio (en mayúsculas), `--domain` para el nombre NetBIOS, `--server-role=dc` para el rol de controlador de dominio, `--dns-backend=SAMBA_INTERNAL` para usar el DNS integrado y `--adminpass` para la contraseña del administrador. Opcionalmente se puede añadir `--use-rfc2307` para atributos POSIX.
</details>

### Pregunta 22

¿Qué comando muestra qué controlador de dominio tiene cada uno de los 5 roles FSMO?

<input type="text" class="fill-blank" data-answer="samba-tool fsmo show" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool fsmo show**

El comando `samba-tool fsmo show` muestra los 5 roles FSMO (Schema Master, Domain Naming Master, PDC Emulator, RID Master e Infrastructure Master) junto con el nombre del DC que posee cada rol. Es el primer paso para planificar una transferencia o toma forzosa de roles en caso de fallos o mantenimiento de controladores de dominio.
</details>

### Pregunta 23

¿Qué comando fuerza la replicación de la partición del dominio desde dc1.empresa.com hacia dc2.empresa.com?

<input type="text" class="fill-blank" data-answer="samba-tool drs replicate dc2.empresa.com dc1.empresa.com dc=empresa,dc=com" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool drs replicate dc2.empresa.com dc1.empresa.com dc=empresa,dc=com**

El comando `samba-tool drs replicate` fuerza una replicación inmediata de una partición del directorio. Los argumentos son: el DC destino, el DC origen y la partición a replicar (en formato DN). Es útil para sincronizar cambios urgentes sin esperar al ciclo de replicación automática gestionada por el KCC (Knowledge Consistency Checker).
</details>

### Pregunta 24

¿Qué comando une un segundo controlador de dominio llamado DC2 al dominio existente empresa.com usando DNS interno?

<input type="text" class="fill-blank" data-answer="samba-tool domain join empresa.com DC -U administrator --dns-backend=SAMBA_INTERNAL" data-alt="samba-tool domain join empresa.com DC" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool domain join empresa.com DC -U administrator --dns-backend=SAMBA_INTERNAL**

El comando `samba-tool domain join` con el rol `DC` une un nuevo controlador de dominio al dominio existente. Requiere credenciales de administrador, DNS configurado para resolver el dominio y conectividad a los puertos necesarios (LDAP, Kerberos, DNS, SMB). El proceso replica automáticamente la base de datos AD desde un DC existente.
</details>

### Pregunta 25

¿Qué comando obtiene un ticket Kerberos para el usuario administrator en el realm EMPRESA.COM?

<input type="text" class="fill-blank" data-answer="kinit administrator@EMPRESA.COM" data-alt="kinit administrator" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kinit administrator@EMPRESA.COM**

El comando `kinit` obtiene un TGT (Ticket Granting Ticket) de Kerberos para el usuario especificado. El realm debe estar en mayúsculas y coincidir con la configuración del dominio AD. Tras obtener el ticket, se puede verificar con `klist` y destruirlo con `kdestroy`. Este ticket es necesario para operaciones que requieren autenticación Kerberos, como el acceso a recursos con `smbclient -k`.
</details>
