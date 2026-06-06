---
title: "210.4 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.4"
---

# Flashcards: 210.4 - Servidor Openldap

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es el método de configuración recomendado en las versiones modernas de OpenLDAP?

</div>
<div class="flashcard-back">

**R:** b) OLC (Online Configuration) con cn=config. OLC (Online Configuration), también conocido como cn=config, es el método recomendado en las versiones modernas de OpenLDAP. Permite modificar la configuración en caliente sin reiniciar el servidor, y almacena la configuración como entradas LDAP en el directorio `/etc/ldap/slapd.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué herramienta se utiliza para exportar el contenido de la base de datos OpenLDAP a formato LDIF?

</div>
<div class="flashcard-back">

**R:** c) slapcat. `slapcat` exporta el contenido de la base de datos directamente a formato LDIF. Opera directamente sobre los archivos de la base de datos, sin pasar por el demonio slapd, por lo que puede ejecutarse incluso con el servidor detenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué backend de base de datos es el recomendado para nuevas instalaciones de OpenLDAP?

</div>
<div class="flashcard-back">

**R:** c) mdb. MDB (Memory-Mapped Database) es el backend recomendado para OpenLDAP. Es más rápido, fiable y sencillo de administrar que los backends antiguos bdb y hdb (basados en BerkeleyDB), que están obsoletos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué requisito tienen `slapadd` y `slapindex` para funcionar correctamente?

</div>
<div class="flashcard-back">

**R:** b) El servidor slapd debe estar detenido. `slapadd` y `slapindex` operan directamente sobre los archivos de la base de datos sin pasar por el demonio slapd. Por lo tanto, el servidor debe estar detenido para evitar corrupciones. Después de ejecutarlos, se deben ajustar los permisos: `chown -R openldap:openldap /var/lib/ldap`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-005">
<div class="flashcard-front">

**P:** ¿Dónde se almacena la configuración OLC (cn=config) en un sistema Debian?

</div>
<div class="flashcard-back">

**R:** c) /etc/ldap/slapd.d/. La configuración OLC se almacena en el directorio `/etc/ldap/slapd.d/` en sistemas Debian/Ubuntu (en RHEL/CentOS es `/etc/openldap/slapd.d/`). Este directorio contiene archivos LDIF que representan la configuración como entradas LDAP y no deben editarse manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando genera un hash de contraseña para usar en la configuración de OpenLDAP?

</div>
<div class="flashcard-back">

**R:** b) slappasswd. `slappasswd` genera hashes de contraseñas en formatos como SSHA, SHA, MD5 o CRYPT. El hash resultante se usa como valor de `rootpw` en slapd.conf o `olcRootPW` en OLC. `ldappasswd` es diferente: cambia la contraseña de un usuario vía protocolo LDAP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-007">
<div class="flashcard-front">

**P:** En la configuración de ACLs de OpenLDAP, ¿qué nivel de acceso permite leer, buscar y comparar pero NO escribir?

</div>
<div class="flashcard-back">

**R:** c) read. El nivel `read` incluye los permisos de `search`, `compare` y `auth` de forma acumulada. Es el nivel más alto que permite consultar datos sin poder modificarlos. El siguiente nivel, `write`, añade la capacidad de modificación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es la directiva OLC equivalente a `suffix` de slapd.conf?

</div>
<div class="flashcard-back">

**R:** b) olcSuffix. En OLC, las directivas de slapd.conf se traducen añadiendo el prefijo `olc`. Así, `suffix` se convierte en `olcSuffix`, `rootdn` en `olcRootDN`, `rootpw` en `olcRootPW`, y así sucesivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué tipo de replicación SyncRepl mantiene una conexión persistente para recibir cambios en tiempo real?

</div>
<div class="flashcard-back">

**R:** b) refreshAndPersist. En modo `refreshAndPersist`, el consumidor establece una conexión persistente con el proveedor. Tras una sincronización inicial, el proveedor envía los cambios en tiempo real. En contraste, `refreshOnly` realiza consultas periódicas (polling).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para convertir un archivo slapd.conf al formato de directorio OLC (slapd.d)?

</div>
<div class="flashcard-back">

**R:** b) slaptest -f /etc/ldap/slapd.conf -F /etc/ldap/slapd.d. `slaptest` con las opciones `-f` (archivo de configuración de origen) y `-F` (directorio OLC de destino) convierte la configuración del formato estático slapd.conf al formato dinámico OLC. Es útil para migrar servidores al método de configuración moderno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué esquema de OpenLDAP proporciona las clases `posixAccount` y `posixGroup` necesarias para la autenticación de usuarios Linux?

</div>
<div class="flashcard-back">

**R:** d) nis.schema. El esquema `nis.schema` proporciona las clases de objeto `posixAccount` y `posixGroup`, que definen los atributos necesarios para integrar LDAP con la autenticación de usuarios en sistemas Unix/Linux, como `uidNumber`, `gidNumber`, `homeDirectory` y `loginShell`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-012">
<div class="flashcard-front">

**P:** En la configuración de ACLs de OpenLDAP, ¿qué sujeto representa a los usuarios que se han autenticado correctamente?

</div>
<div class="flashcard-back">

**R:** c) users. En las ACLs de OpenLDAP, el sujeto `users` representa a todos los usuarios que se han autenticado (bind) correctamente en el directorio. `anonymous` se refiere a conexiones sin autenticación, `self` al propio usuario de la entrada, y `*` a todos (autenticados y anónimos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué overlay de OpenLDAP se utiliza para implementar políticas de contraseña como caducidad y complejidad?

</div>
<div class="flashcard-back">

**R:** c) ppolicy. El overlay `ppolicy` (Password Policy) permite definir políticas de contraseña avanzadas, como longitud mínima, caducidad, historial de contraseñas y bloqueo de cuentas tras intentos fallidos. Se configura como un overlay en la base de datos y se gestiona mediante entradas `pwdPolicy` en el directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué directiva de slapd.conf define el DN del administrador de la base de datos LDAP?

</div>
<div class="flashcard-back">

**R:** b) rootdn. La directiva `rootdn` en `slapd.conf` define el DN del administrador (superusuario) de la base de datos LDAP. Este usuario tiene acceso total al directorio, independientemente de las ACLs. Su contraseña se establece con `rootpw`. En OLC, el equivalente es `olcRootDN`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué modo de replicación SyncRepl funciona mediante consultas periódicas del consumidor al proveedor?

</div>
<div class="flashcard-back">

**R:** b) refreshOnly. En el modo `refreshOnly`, el consumidor (slave) consulta periódicamente al proveedor (master) para obtener los cambios. Es un modelo de tipo polling. En contraste, `refreshAndPersist` mantiene una conexión persistente para recibir cambios en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué nivel de acceso en las ACLs de OpenLDAP permite a un usuario autenticarse pero no leer ni buscar datos?

</div>
<div class="flashcard-back">

**R:** b) auth. El nivel de acceso `auth` permite únicamente la autenticación (bind) contra una entrada, sin permitir leer, buscar o comparar datos. Se utiliza típicamente para permitir que los usuarios anónimos puedan autenticarse usando el atributo `userPassword` sin poder leer su valor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es la directiva OLC equivalente a `rootpw` de slapd.conf?

</div>
<div class="flashcard-back">

**R:** b) olcRootPW. En OLC, las directivas se traducen añadiendo el prefijo `olc` y manteniendo mayúsculas según la convención. Así, `rootpw` se convierte en `olcRootPW`, `rootdn` en `olcRootDN`, `suffix` en `olcSuffix`, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué opción se utiliza con `ldapmodify` para autenticarse mediante el mecanismo SASL EXTERNAL a través de un socket Unix?

</div>
<div class="flashcard-back">

**R:** b) -Y EXTERNAL -H ldapi:///. La opción `-Y EXTERNAL` indica autenticación SASL con el mecanismo EXTERNAL (basado en el UID del proceso) y `-H ldapi:///` indica conexión a través del socket Unix local. Esta combinación es habitual para administrar la configuración OLC como root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva de slapd.conf se utiliza para definir índices sobre los atributos de la base de datos?

</div>
<div class="flashcard-back">

**R:** b) index. La directiva `index` en `slapd.conf` define los índices que se crean sobre los atributos para mejorar el rendimiento de las búsquedas. Los tipos de índice incluyen `eq` (igualdad), `pres` (presencia), `sub` (subcadena) y `approx` (aproximación). En OLC, el equivalente es `olcDbIndex`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué overlay de OpenLDAP gestiona automáticamente la membresía inversa de grupos, añadiendo el atributo `memberOf` a las entradas de usuario?

</div>
<div class="flashcard-back">

**R:** c) memberof. El overlay `memberof` gestiona automáticamente el atributo `memberOf` en las entradas de usuario cuando estos se añaden o eliminan como miembros de un grupo. Esto facilita las búsquedas de pertenencia a grupos sin necesidad de consultar cada grupo individualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para exportar toda la base de datos de OpenLDAP a un archivo LDIF llamado backup.ldif?

</div>
<div class="flashcard-back">

**R:** slapcat -l backup.ldif. `slapcat` exporta el contenido de la base de datos directamente a formato LDIF. La opción `-l` especifica el archivo de salida. Opera directamente sobre los archivos de la base de datos sin pasar por el demonio slapd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando genera un hash de contraseña en formato SSHA para usar en la configuración de OpenLDAP?

</div>
<div class="flashcard-back">

**R:** slappasswd. El comando `slappasswd` solicita una contraseña y genera su hash en formato SSHA por defecto. El hash resultante se puede usar como valor de `rootpw` en slapd.conf o `olcRootPW` en OLC. Se puede especificar otro algoritmo con `-h`, por ejemplo: `slappasswd -h {SHA}`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando regenera los índices de la base de datos de OpenLDAP (requiere que slapd esté detenido)?

</div>
<div class="flashcard-back">

**R:** slapindex. El comando `slapindex` regenera todos los índices definidos en la configuración de la base de datos. Es necesario detener el demonio `slapd` antes de ejecutarlo para evitar corrupciones. Después de ejecutarlo, se deben ajustar los permisos: `chown -R openldap:openldap /var/lib/ldap`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para importar el archivo datos.ldif directamente a la base de datos de OpenLDAP?

</div>
<div class="flashcard-back">

**R:** slapadd -l datos.ldif. `slapadd` importa datos en formato LDIF directamente a la base de datos de OpenLDAP, sin pasar por el demonio slapd. El servidor debe estar detenido durante la importación. Después, se deben corregir los permisos del directorio de la base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando carga el esquema cosine.ldif en la configuración OLC de OpenLDAP usando autenticación SASL EXTERNAL?

</div>
<div class="flashcard-back">

**R:** ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/ldap/schema/cosine.ldif. Este comando añade el esquema cosine al servidor OpenLDAP utilizando la configuración OLC. La opción `-Y EXTERNAL` usa autenticación SASL con el mecanismo EXTERNAL (basado en el UID del proceso local), y `-H ldapi:///` indica la conexión a través del socket Unix.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: OLC (cn=config) es el método recomendado y el predeterminado en las distribucion...

</div>
<div class="flashcard-back">

**R:** OLC (cn=config) es el método recomendado y el predeterminado en las distribuciones modernas. La configuración se almacena en `/etc/ldap/slapd.d/`. Los archivos dentro de este directorio NO deben editarse manualmente; se gestionan con ldapmodify.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `mdb` es el backend recomendado para nuevas instalaciones. `hdb` y `bdb` están o...

</div>
<div class="flashcard-back">

**R:** `mdb` es el backend recomendado para nuevas instalaciones. `hdb` y `bdb` están obsoletos pero pueden aparecer en preguntas sobre sistemas heredados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `slapcat`, `slapadd` y `slapindex` operan directamente sobre la base de datos si...

</div>
<div class="flashcard-back">

**R:** `slapcat`, `slapadd` y `slapindex` operan directamente sobre la base de datos sin pasar por el demonio slapd. Por eso, `slapadd` y `slapindex` requieren que el servidor esté detenido. `slapcat` puede ejecutarse con el servidor en ejecución pero se recomienda detenerlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: SyncRepl es el método de replicación estándar en OpenLDAP. Conocer la diferencia...

</div>
<div class="flashcard-back">

**R:** SyncRepl es el método de replicación estándar en OpenLDAP. Conocer la diferencia entre `refreshOnly` y `refreshAndPersist` es importante: el primero es polling y el segundo es push en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `slap*`?

</div>
<div class="flashcard-back">

**R:** Herramientas del lado del servidor (slapcat, slapadd, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `ldap*`?

</div>
<div class="flashcard-back">

**R:** Herramientas del lado del cliente (ldapsearch, ldapadd, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `core.schema`?

</div>
<div class="flashcard-back">

**R:** Atributos y clases base de LDAP

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `inetorgperson.schema`?

</div>
<div class="flashcard-back">

**R:** Clase inetOrgPerson para personas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `nis.schema`?

</div>
<div class="flashcard-back">

**R:** Clases POSIX (posixAccount, posixGroup)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción a OpenLDAP?

</div>
<div class="flashcard-back">

**R:** OpenLDAP es la implementación de código abierto más utilizada de un servidor LDAP en Linux. El demonio principal es `slapd` (Stand-alone LDAP Daemon).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-036">
<div class="flashcard-front">

**P:** Que es/son Métodos de configuración?

</div>
<div class="flashcard-back">

**R:** OpenLDAP soporta dos métodos de configuración:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-037">
<div class="flashcard-front">

**P:** Que es/son Esquemas (Schemas)?

</div>
<div class="flashcard-back">

**R:** Los esquemas definen los tipos de objetos y atributos disponibles en el directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-038">
<div class="flashcard-front">

**P:** Que es/son Control de acceso (ACLs)?

</div>
<div class="flashcard-back">

**R:** Las ACLs controlan quién puede acceder a qué datos y con qué nivel de permisos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-039">
<div class="flashcard-front">

**P:** Que es/son Overlays?

</div>
<div class="flashcard-back">

**R:** Los overlays son módulos que extienden la funcionalidad de slapd:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-040">
<div class="flashcard-front">

**P:** Que es/son Replicación (SyncRepl)?

</div>
<div class="flashcard-back">

**R:** SyncRepl permite replicar datos entre servidores LDAP. El proveedor (master) envía cambios al consumidor (slave).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-041">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

