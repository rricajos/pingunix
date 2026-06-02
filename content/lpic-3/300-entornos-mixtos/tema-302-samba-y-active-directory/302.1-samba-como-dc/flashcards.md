---
title: "302.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.1"
---

# Flashcards: 302.1 - Samba Como Dc

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para aprovisionar un nuevo dominio Active Directory con Samba?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool domain provision`. `samba-tool domain provision` es el comando que crea un nuevo dominio Active Directory. Requiere parámetros como `--realm` (nombre Kerberos), `--domain` (nombre NetBIOS), `--server-role=dc` y `--dns-backend`. El proceso genera la base de datos LDAP, configura Kerberos, crea las zonas DNS y genera el archivo smb.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cuáles de los roles FSMO tienen alcance a nivel de bosque (forest)?

</div>
<div class="flashcard-back">

**R:** b) Schema Master y Domain Naming Master. Los roles FSMO a nivel de bosque son el Schema Master (controla modificaciones al esquema AD) y el Domain Naming Master (gestiona la adición y eliminación de dominios en el bosque). Los roles a nivel de dominio son: PDC Emulator, RID Master e Infrastructure Master.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué opción del aprovisionamiento habilita las extensiones RFC2307 para atributos POSIX en AD?

</div>
<div class="flashcard-back">

**R:** b) `--use-rfc2307`. La opción `--use-rfc2307` del comando `samba-tool domain provision` habilita las extensiones RFC2307 que permiten almacenar atributos POSIX (uidNumber, gidNumber, loginShell, etc.) directamente en los objetos de Active Directory. Esto es esencial para la integración con sistemas Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué herramienta se usa para replicar SYSVOL entre controladores de dominio Samba?

</div>
<div class="flashcard-back">

**R:** c) rsync (herramienta externa). Samba no implementa DFS-R (Distributed File System Replication) que es el mecanismo nativo de Microsoft para replicar SYSVOL. Por lo tanto, se debe usar una herramienta externa como rsync para sincronizar el directorio SYSVOL entre controladores de dominio, normalmente programado con cron.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `samba-tool fsmo transfer` y `samba-tool fsmo seize`?

</div>
<div class="flashcard-back">

**R:** c) `transfer` realiza una transferencia ordenada; `seize` toma el rol forzosamente. `samba-tool fsmo transfer` realiza una transferencia ordenada (graceful) del rol al DC actual, comunicándose con el titular actual del rol. `samba-tool fsmo seize` toma el rol forzosamente sin comunicarse con el titular anterior, y solo debe usarse cuando el DC que tenía el rol ya no está disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué backends DNS soporta Samba al actuar como controlador de dominio AD?

</div>
<div class="flashcard-back">

**R:** b) SAMBA_INTERNAL y BIND9_DLZ. Samba soporta dos backends DNS: `SAMBA_INTERNAL` (servidor DNS integrado en el proceso samba, más simple) y `BIND9_DLZ` (BIND9 con módulo DLZ que lee las zonas AD desde la base de datos de Samba). También existe la opción `NONE` para no configurar DNS, pero no es recomendable.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando verifica el estado de la replicación entre controladores de dominio Samba?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool drs showrepl`. `samba-tool drs showrepl` muestra el estado de la replicación DRS (Directory Replication Service) entre los controladores de dominio. Incluye información sobre las últimas replicaciones exitosas y fallidas, particiones replicadas y socios de replicación. `samba-tool drs replicate` permite forzar una replicación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-008">
<div class="flashcard-front">

**P:** Al aprovisionar un dominio AD con Samba, ¿dónde se almacena la base de datos principal de Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `/var/lib/samba/private/sam.ldb`. La base de datos principal de Active Directory en Samba se almacena en `/var/lib/samba/private/sam.ldb`, que es una base de datos LDB (LDAP Database). Este archivo contiene toda la información del directorio, incluyendo usuarios, grupos, esquema y configuración. Es el equivalente de ntds.dit en Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para unir un segundo controlador de dominio a un dominio AD existente en Samba?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool domain join empresa.com DC`. Para unir un DC adicional se usa `samba-tool domain join` especificando el dominio y el rol `DC`. El comando replica la base de datos AD desde un DC existente, configura Kerberos y DNS. `net ads join` se usa para unir un servidor miembro (no un DC) a un dominio AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es el requisito de sincronización de tiempo para que Kerberos funcione correctamente en un dominio AD?

</div>
<div class="flashcard-back">

**R:** b) La diferencia máxima permitida es de 5 minutos. Kerberos requiere que la diferencia de tiempo entre el cliente y el servidor sea menor a 5 minutos (valor predeterminado del clock skew). Si la diferencia es mayor, la autenticación Kerberos falla. Por esta razón, es fundamental tener NTP correctamente configurado en todos los equipos del dominio. El PDC Emulator suele actuar como fuente de tiempo para el dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué rol FSMO es responsable de asignar bloques de RIDs (Relative IDs) a los controladores de dominio?

</div>
<div class="flashcard-back">

**R:** c) RID Master. El RID Master es responsable de asignar bloques de RIDs a cada controlador de dominio. Los RIDs son la parte variable del SID que identifica de forma única a cada objeto de seguridad (usuarios, grupos, equipos) dentro del dominio. Cada DC recibe un bloque de RIDs del RID Master para garantizar que no se produzcan duplicados al crear objetos en diferentes DCs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando de `samba-tool` permite verificar y reparar la base de datos de Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool dbcheck --fix`. El comando `samba-tool dbcheck` verifica la integridad de la base de datos de Active Directory almacenada en sam.ldb. Con la opción `--fix`, intenta reparar automáticamente las inconsistencias encontradas. Se recomienda ejecutarlo después de actualizaciones de Samba o cuando se sospechan problemas de corrupción en la base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-013">
<div class="flashcard-front">

**P:** ¿Cuál es la función del PDC Emulator en un dominio Active Directory de Samba?

</div>
<div class="flashcard-back">

**R:** b) Gestiona la sincronización de hora, procesamiento urgente de cambios de contraseña y compatibilidad con clientes NT4. El PDC Emulator es un rol FSMO a nivel de dominio que cumple varias funciones críticas: es la fuente de tiempo autoritativa para el dominio, procesa cambios de contraseña urgentes (para que surtan efecto inmediatamente), es el DC preferido para autenticación NTLM, y mantiene compatibilidad con clientes y BDCs de dominio NT4 legacy.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué archivo se genera durante el aprovisionamiento y debe copiarse a `/etc/krb5.conf` para que Kerberos funcione correctamente en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `/var/lib/samba/private/krb5.conf`. Durante el aprovisionamiento del dominio AD, Samba genera el archivo `/var/lib/samba/private/krb5.conf` con la configuración de Kerberos adecuada para el dominio (realm, KDC, etc.). Este archivo debe copiarse o enlazarse simbólicamente a `/etc/krb5.conf` para que las herramientas Kerberos del sistema (kinit, klist) funcionen correctamente con el dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción del aprovisionamiento permite especificar el servidor DNS al que se reenviarán las consultas que Samba no puede resolver localmente?

</div>
<div class="flashcard-back">

**R:** b) `--dns-forwarder`. Aunque no se listó explícitamente en el comando de aprovisionamiento estándar, el parámetro `dns forwarder` se configura en smb.conf (generado durante el aprovisionamiento o editado posteriormente). Sin embargo, la forma directa de especificarlo depende de la versión. En la práctica, el reenviador DNS se configura con `dns forwarder = IP` en la sección `[global]` de smb.conf generado tras el aprovisionamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué tipo de confianza se crea automáticamente entre los dominios dentro de un mismo bosque de Active Directory?

</div>
<div class="flashcard-back">

**R:** b) Confianza bidireccional transitiva. Los dominios dentro del mismo bosque de Active Directory tienen automáticamente confianzas bidireccionales transitivas. Esto significa que si el dominio A confía en B y B confía en C, entonces A confía transitivamente en C. Las confianzas externas (entre bosques diferentes) deben crearse manualmente con `samba-tool domain trust create` y pueden ser unidireccionales o bidireccionales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando muestra el nivel funcional actual del dominio y del bosque en Samba AD DC?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool domain level show`. El comando `samba-tool domain level show` muestra el nivel funcional actual del dominio y del bosque (por ejemplo, 2008_R2, 2012, etc.). El nivel funcional determina qué características de AD están disponibles. Se puede elevar con `samba-tool domain level raise --domain-level=2008_R2 --forest-level=2008_R2`, pero esta operación es irreversible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué protocolo de replicación utiliza Samba para sincronizar la base de datos de Active Directory entre controladores de dominio?

</div>
<div class="flashcard-back">

**R:** b) DRS (Directory Replication Service). Samba utiliza DRS (Directory Replication Service), el mismo protocolo de replicación que utiliza Microsoft Windows Server para sincronizar la base de datos de Active Directory entre controladores de dominio. Se gestiona con `samba-tool drs showrepl` para ver el estado y `samba-tool drs replicate` para forzar replicación. SYSVOL, sin embargo, no se replica con DRS y requiere herramientas externas como rsync.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué recurso compartido especial contiene los scripts de inicio de sesión y las GPOs en un controlador de dominio AD?

</div>
<div class="flashcard-back">

**R:** c) `[sysvol]`. El recurso compartido `[sysvol]` contiene la estructura SYSVOL del dominio, que incluye las GPOs (Group Policy Objects) y los scripts de inicio de sesión. El recurso `[netlogon]` es un subdirectorio de SYSVOL que contiene específicamente los scripts de logon. Ambos se crean automáticamente durante el aprovisionamiento y su ruta predeterminada es `/var/lib/samba/sysvol/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-020">
<div class="flashcard-front">

**P:** ¿Por qué es necesario que NTP esté correctamente configurado antes de aprovisionar un dominio AD con Samba?

</div>
<div class="flashcard-back">

**R:** c) Porque Kerberos requiere que la diferencia de tiempo entre cliente y servidor sea menor a 5 minutos. Kerberos utiliza timestamps en los tickets de autenticación para prevenir ataques de replay. Si la diferencia de tiempo (clock skew) entre un cliente y el KDC supera los 5 minutos (valor predeterminado), la autenticación falla. Por esto, NTP debe configurarse antes del aprovisionamiento y mantenerse funcionando en todos los equipos del dominio. El PDC Emulator actúa como fuente de tiempo autoritativa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando de samba-tool aprovisiona un nuevo dominio AD con el realm EMPRESA.COM, nombre NetBIOS EMPRESA, DNS interno y contraseña de administrador?

</div>
<div class="flashcard-back">

**R:** samba-tool domain provision --realm=EMPRESA.COM --domain=EMPRESA --server-role=dc --dns-backend=SAMBA_INTERNAL --adminpass='P@ssw0rd123'. El comando completo especifica: `--realm` para el nombre Kerberos del dominio (en mayúsculas), `--domain` para el nombre NetBIOS, `--server-role=dc` para el rol de controlador de dominio, `--dns-backend=SAMBA_INTERNAL` para usar el DNS integrado y `--adminpass` para la contraseña del administrador. Opcionalmente se puede añadir `--use-rfc2307` para atributos POSIX.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando muestra qué controlador de dominio tiene cada uno de los 5 roles FSMO?

</div>
<div class="flashcard-back">

**R:** samba-tool fsmo show. El comando `samba-tool fsmo show` muestra los 5 roles FSMO (Schema Master, Domain Naming Master, PDC Emulator, RID Master e Infrastructure Master) junto con el nombre del DC que posee cada rol. Es el primer paso para planificar una transferencia o toma forzosa de roles en caso de fallos o mantenimiento de controladores de dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando fuerza la replicación de la partición del dominio desde dc1.empresa.com hacia dc2.empresa.com?

</div>
<div class="flashcard-back">

**R:** samba-tool drs replicate dc2.empresa.com dc1.empresa.com dc=empresa,dc=com. El comando `samba-tool drs replicate` fuerza una replicación inmediata de una partición del directorio. Los argumentos son: el DC destino, el DC origen y la partición a replicar (en formato DN). Es útil para sincronizar cambios urgentes sin esperar al ciclo de replicación automática gestionada por el KCC (Knowledge Consistency Checker).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando une un segundo controlador de dominio llamado DC2 al dominio existente empresa.com usando DNS interno?

</div>
<div class="flashcard-back">

**R:** samba-tool domain join empresa.com DC -U administrator --dns-backend=SAMBA_INTERNAL. El comando `samba-tool domain join` con el rol `DC` une un nuevo controlador de dominio al dominio existente. Requiere credenciales de administrador, DNS configurado para resolver el dominio y conectividad a los puertos necesarios (LDAP, Kerberos, DNS, SMB). El proceso replica automáticamente la base de datos AD desde un DC existente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando obtiene un ticket Kerberos para el usuario administrator en el realm EMPRESA.COM?

</div>
<div class="flashcard-back">

**R:** kinit administrator@EMPRESA.COM. El comando `kinit` obtiene un TGT (Ticket Granting Ticket) de Kerberos para el usuario especificado. El realm debe estar en mayúsculas y coincidir con la configuración del dominio AD. Tras obtener el ticket, se puede verificar con `klist` y destruirlo con `kdestroy`. Este ticket es necesario para operaciones que requieren autenticación Kerberos, como el acceso a recursos con `smbclient -k`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El aprovisionamiento crea el archivo smb.conf, la base de datos LDAP, el KDC Ker...

</div>
<div class="flashcard-back">

**R:** El aprovisionamiento crea el archivo smb.conf, la base de datos LDAP, el KDC Kerberos y opcionalmente configura DNS. La opción `--use-rfc2307` es importante para mapeo de UIDs/GIDs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los 5 roles FSMO, su alcance (bosque vs dominio) y la diferencia entre `...

</div>
<div class="flashcard-back">

**R:** Conocer los 5 roles FSMO, su alcance (bosque vs dominio) y la diferencia entre `transfer` (ordenado) y `seize` (forzado). Schema Master y Domain Naming Master son a nivel de bosque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La replicación de SYSVOL en Samba requiere herramientas externas como rsync. DFS...

</div>
<div class="flashcard-back">

**R:** La replicación de SYSVOL en Samba requiere herramientas externas como rsync. DFS-R de Microsoft no está implementado en Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `samba-tool` es la herramienta central para administrar Samba AD DC. Conocer los...

</div>
<div class="flashcard-back">

**R:** `samba-tool` es la herramienta central para administrar Samba AD DC. Conocer los subcomandos de domain, user, group, dns, fsmo y drs es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `--realm`?

</div>
<div class="flashcard-back">

**R:** Nombre Kerberos del dominio (MAYÚSCULAS, ej: EMPRESA.COM)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--domain`?

</div>
<div class="flashcard-back">

**R:** Nombre NetBIOS del dominio (máx 15 caracteres)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--dns-backend`?

</div>
<div class="flashcard-back">

**R:** Backend DNS: SAMBA_INTERNAL, BIND9_DLZ o NONE

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `--adminpass`?

</div>
<div class="flashcard-back">

**R:** Contraseña del administrador del dominio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `--use-rfc2307`?

</div>
<div class="flashcard-back">

**R:** Habilitar extensiones RFC2307 para atributos POSIX en AD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Roles FSMO (Flexible Single Master Operations)?

</div>
<div class="flashcard-back">

**R:** En Active Directory, ciertos roles solo pueden ser realizados por un DC a la vez:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `samba-tool domain provision` crea el dominio AD con LDAP, Kerberos y DNS integrados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.1">
</div>

<div class="flashcard" data-id="302.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

