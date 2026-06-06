---
title: "210.4 - Servidor OpenLDAP"
tags: [lpic-2, examen-202, tema-210, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "210"
subtema: "210.4"
---

# 210.4 - Ejercicios: Servidor OpenLDAP

### Pregunta 1

¿Cuál es el método de configuración recomendado en las versiones modernas de OpenLDAP?

a) slapd.conf (archivo estático)
b) OLC (Online Configuration) con cn=config
c) /etc/openldap/openldap.conf
d) Configuración vía variables de entorno

<details><summary>Respuesta</summary>

**b) OLC (Online Configuration) con cn=config**

OLC (Online Configuration), también conocido como cn=config, es el método recomendado en las versiones modernas de OpenLDAP. Permite modificar la configuración en caliente sin reiniciar el servidor, y almacena la configuración como entradas LDAP en el directorio `/etc/ldap/slapd.d/`.
</details>

### Pregunta 2

¿Qué herramienta se utiliza para exportar el contenido de la base de datos OpenLDAP a formato LDIF?

a) ldapexport
b) slapdump
c) slapcat
d) ldapbackup

<details><summary>Respuesta</summary>

**c) slapcat**

`slapcat` exporta el contenido de la base de datos directamente a formato LDIF. Opera directamente sobre los archivos de la base de datos, sin pasar por el demonio slapd, por lo que puede ejecutarse incluso con el servidor detenido.
</details>

### Pregunta 3

¿Qué backend de base de datos es el recomendado para nuevas instalaciones de OpenLDAP?

a) bdb
b) hdb
c) mdb
d) sql

<details><summary>Respuesta</summary>

**c) mdb**

MDB (Memory-Mapped Database) es el backend recomendado para OpenLDAP. Es más rápido, fiable y sencillo de administrar que los backends antiguos bdb y hdb (basados en BerkeleyDB), que están obsoletos.
</details>

### Pregunta 4

¿Qué requisito tienen `slapadd` y `slapindex` para funcionar correctamente?

a) Deben ejecutarse como usuario ldap
b) El servidor slapd debe estar detenido
c) Se requiere conexión de red activa
d) Deben ejecutarse desde el directorio /var/lib/ldap

<details><summary>Respuesta</summary>

**b) El servidor slapd debe estar detenido**

`slapadd` y `slapindex` operan directamente sobre los archivos de la base de datos sin pasar por el demonio slapd. Por lo tanto, el servidor debe estar detenido para evitar corrupciones. Después de ejecutarlos, se deben ajustar los permisos: `chown -R openldap:openldap /var/lib/ldap`.
</details>

### Pregunta 5

¿Dónde se almacena la configuración OLC (cn=config) en un sistema Debian?

a) /etc/ldap/cn=config/
b) /var/lib/ldap/config/
c) /etc/ldap/slapd.d/
d) /etc/openldap/config.d/

<details><summary>Respuesta</summary>

**c) /etc/ldap/slapd.d/**

La configuración OLC se almacena en el directorio `/etc/ldap/slapd.d/` en sistemas Debian/Ubuntu (en RHEL/CentOS es `/etc/openldap/slapd.d/`). Este directorio contiene archivos LDIF que representan la configuración como entradas LDAP y no deben editarse manualmente.
</details>

### Pregunta 6

¿Qué comando genera un hash de contraseña para usar en la configuración de OpenLDAP?

a) ldappasswd
b) slappasswd
c) openssl passwd
d) slapauth

<details><summary>Respuesta</summary>

**b) slappasswd**

`slappasswd` genera hashes de contraseñas en formatos como SSHA, SHA, MD5 o CRYPT. El hash resultante se usa como valor de `rootpw` en slapd.conf o `olcRootPW` en OLC. `ldappasswd` es diferente: cambia la contraseña de un usuario vía protocolo LDAP.
</details>

### Pregunta 7

En la configuración de ACLs de OpenLDAP, ¿qué nivel de acceso permite leer, buscar y comparar pero NO escribir?

a) search
b) compare
c) read
d) write

<details><summary>Respuesta</summary>

**c) read**

El nivel `read` incluye los permisos de `search`, `compare` y `auth` de forma acumulada. Es el nivel más alto que permite consultar datos sin poder modificarlos. El siguiente nivel, `write`, añade la capacidad de modificación.
</details>

### Pregunta 8

¿Cuál es la directiva OLC equivalente a `suffix` de slapd.conf?

a) olcBaseDN
b) olcSuffix
c) olcRootSuffix
d) olcDatabaseSuffix

<details><summary>Respuesta</summary>

**b) olcSuffix**

En OLC, las directivas de slapd.conf se traducen añadiendo el prefijo `olc`. Así, `suffix` se convierte en `olcSuffix`, `rootdn` en `olcRootDN`, `rootpw` en `olcRootPW`, y así sucesivamente.
</details>

### Pregunta 9

¿Qué tipo de replicación SyncRepl mantiene una conexión persistente para recibir cambios en tiempo real?

a) refreshOnly
b) refreshAndPersist
c) pushReplication
d) realTimeSync

<details><summary>Respuesta</summary>

**b) refreshAndPersist**

En modo `refreshAndPersist`, el consumidor establece una conexión persistente con el proveedor. Tras una sincronización inicial, el proveedor envía los cambios en tiempo real. En contraste, `refreshOnly` realiza consultas periódicas (polling).
</details>

### Pregunta 10

¿Qué comando se utiliza para convertir un archivo slapd.conf al formato de directorio OLC (slapd.d)?

a) slapd -convert
b) slaptest -f /etc/ldap/slapd.conf -F /etc/ldap/slapd.d
c) ldapconvert -f slapd.conf -d slapd.d
d) slapadd -c /etc/ldap/slapd.conf

<details><summary>Respuesta</summary>

**b) slaptest -f /etc/ldap/slapd.conf -F /etc/ldap/slapd.d**

`slaptest` con las opciones `-f` (archivo de configuración de origen) y `-F` (directorio OLC de destino) convierte la configuración del formato estático slapd.conf al formato dinámico OLC. Es útil para migrar servidores al método de configuración moderno.
</details>

### Pregunta 11

¿Qué esquema de OpenLDAP proporciona las clases `posixAccount` y `posixGroup` necesarias para la autenticación de usuarios Linux?

a) core.schema
b) cosine.schema
c) inetorgperson.schema
d) nis.schema

<details><summary>Respuesta</summary>

**d) nis.schema**

El esquema `nis.schema` proporciona las clases de objeto `posixAccount` y `posixGroup`, que definen los atributos necesarios para integrar LDAP con la autenticación de usuarios en sistemas Unix/Linux, como `uidNumber`, `gidNumber`, `homeDirectory` y `loginShell`.

</details>

### Pregunta 12

En la configuración de ACLs de OpenLDAP, ¿qué sujeto representa a los usuarios que se han autenticado correctamente?

a) self
b) anonymous
c) users
d) authenticated

<details><summary>Respuesta</summary>

**c) users**

En las ACLs de OpenLDAP, el sujeto `users` representa a todos los usuarios que se han autenticado (bind) correctamente en el directorio. `anonymous` se refiere a conexiones sin autenticación, `self` al propio usuario de la entrada, y `*` a todos (autenticados y anónimos).

</details>

### Pregunta 13

¿Qué overlay de OpenLDAP se utiliza para implementar políticas de contraseña como caducidad y complejidad?

a) syncprov
b) memberof
c) ppolicy
d) refint

<details><summary>Respuesta</summary>

**c) ppolicy**

El overlay `ppolicy` (Password Policy) permite definir políticas de contraseña avanzadas, como longitud mínima, caducidad, historial de contraseñas y bloqueo de cuentas tras intentos fallidos. Se configura como un overlay en la base de datos y se gestiona mediante entradas `pwdPolicy` en el directorio.

</details>

### Pregunta 14

¿Qué directiva de slapd.conf define el DN del administrador de la base de datos LDAP?

a) admindn
b) rootdn
c) managerdn
d) superuserdn

<details><summary>Respuesta</summary>

**b) rootdn**

La directiva `rootdn` en `slapd.conf` define el DN del administrador (superusuario) de la base de datos LDAP. Este usuario tiene acceso total al directorio, independientemente de las ACLs. Su contraseña se establece con `rootpw`. En OLC, el equivalente es `olcRootDN`.

</details>

### Pregunta 15

¿Qué modo de replicación SyncRepl funciona mediante consultas periódicas del consumidor al proveedor?

a) refreshAndPersist
b) refreshOnly
c) pushSync
d) pollingSync

<details><summary>Respuesta</summary>

**b) refreshOnly**

En el modo `refreshOnly`, el consumidor (slave) consulta periódicamente al proveedor (master) para obtener los cambios. Es un modelo de tipo polling. En contraste, `refreshAndPersist` mantiene una conexión persistente para recibir cambios en tiempo real.

</details>

### Pregunta 16

¿Qué nivel de acceso en las ACLs de OpenLDAP permite a un usuario autenticarse pero no leer ni buscar datos?

a) none
b) auth
c) compare
d) search

<details><summary>Respuesta</summary>

**b) auth**

El nivel de acceso `auth` permite únicamente la autenticación (bind) contra una entrada, sin permitir leer, buscar o comparar datos. Se utiliza típicamente para permitir que los usuarios anónimos puedan autenticarse usando el atributo `userPassword` sin poder leer su valor.

</details>

### Pregunta 17

¿Cuál es la directiva OLC equivalente a `rootpw` de slapd.conf?

a) olcPassword
b) olcRootPW
c) olcAdminPassword
d) olcRootPassword

<details><summary>Respuesta</summary>

**b) olcRootPW**

En OLC, las directivas se traducen añadiendo el prefijo `olc` y manteniendo mayúsculas según la convención. Así, `rootpw` se convierte en `olcRootPW`, `rootdn` en `olcRootDN`, `suffix` en `olcSuffix`, etc.

</details>

### Pregunta 18

¿Qué opción se utiliza con `ldapmodify` para autenticarse mediante el mecanismo SASL EXTERNAL a través de un socket Unix?

a) -x -D "cn=admin"
b) -Y EXTERNAL -H ldapi:///
c) -S EXTERNAL -U ldapi
d) -A EXTERNAL -P local

<details><summary>Respuesta</summary>

**b) -Y EXTERNAL -H ldapi:///**

La opción `-Y EXTERNAL` indica autenticación SASL con el mecanismo EXTERNAL (basado en el UID del proceso) y `-H ldapi:///` indica conexión a través del socket Unix local. Esta combinación es habitual para administrar la configuración OLC como root.

</details>

### Pregunta 19

¿Qué directiva de slapd.conf se utiliza para definir índices sobre los atributos de la base de datos?

a) dbindex
b) index
c) attrindex
d) searchindex

<details><summary>Respuesta</summary>

**b) index**

La directiva `index` en `slapd.conf` define los índices que se crean sobre los atributos para mejorar el rendimiento de las búsquedas. Los tipos de índice incluyen `eq` (igualdad), `pres` (presencia), `sub` (subcadena) y `approx` (aproximación). En OLC, el equivalente es `olcDbIndex`.

</details>

### Pregunta 20

¿Qué overlay de OpenLDAP gestiona automáticamente la membresía inversa de grupos, añadiendo el atributo `memberOf` a las entradas de usuario?

a) refint
b) unique
c) memberof
d) dynlist

<details><summary>Respuesta</summary>

**c) memberof**

El overlay `memberof` gestiona automáticamente el atributo `memberOf` en las entradas de usuario cuando estos se añaden o eliminan como miembros de un grupo. Esto facilita las búsquedas de pertenencia a grupos sin necesidad de consultar cada grupo individualmente.

</details>

### Pregunta 21

¿Qué comando se utiliza para exportar toda la base de datos de OpenLDAP a un archivo LDIF llamado backup.ldif?

<input type="text" class="fill-blank" data-answer="slapcat -l backup.ldif" data-alt="slapcat > backup.ldif" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**slapcat -l backup.ldif**

`slapcat` exporta el contenido de la base de datos directamente a formato LDIF. La opción `-l` especifica el archivo de salida. Opera directamente sobre los archivos de la base de datos sin pasar por el demonio slapd.

</details>

### Pregunta 22

¿Qué comando genera un hash de contraseña en formato SSHA para usar en la configuración de OpenLDAP?

<input type="text" class="fill-blank" data-answer="slappasswd" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**slappasswd**

El comando `slappasswd` solicita una contraseña y genera su hash en formato SSHA por defecto. El hash resultante se puede usar como valor de `rootpw` en slapd.conf o `olcRootPW` en OLC. Se puede especificar otro algoritmo con `-h`, por ejemplo: `slappasswd -h {SHA}`.

</details>

### Pregunta 23

¿Qué comando regenera los índices de la base de datos de OpenLDAP (requiere que slapd esté detenido)?

<input type="text" class="fill-blank" data-answer="slapindex" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**slapindex**

El comando `slapindex` regenera todos los índices definidos en la configuración de la base de datos. Es necesario detener el demonio `slapd` antes de ejecutarlo para evitar corrupciones. Después de ejecutarlo, se deben ajustar los permisos: `chown -R openldap:openldap /var/lib/ldap`.

</details>

### Pregunta 24

¿Qué comando se utiliza para importar el archivo datos.ldif directamente a la base de datos de OpenLDAP?

<input type="text" class="fill-blank" data-answer="slapadd -l datos.ldif" data-alt="slapadd < datos.ldif" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**slapadd -l datos.ldif**

`slapadd` importa datos en formato LDIF directamente a la base de datos de OpenLDAP, sin pasar por el demonio slapd. El servidor debe estar detenido durante la importación. Después, se deben corregir los permisos del directorio de la base de datos.

</details>

### Pregunta 25

¿Qué comando carga el esquema cosine.ldif en la configuración OLC de OpenLDAP usando autenticación SASL EXTERNAL?

<input type="text" class="fill-blank" data-answer="ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/ldap/schema/cosine.ldif" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/ldap/schema/cosine.ldif**

Este comando añade el esquema cosine al servidor OpenLDAP utilizando la configuración OLC. La opción `-Y EXTERNAL` usa autenticación SASL con el mecanismo EXTERNAL (basado en el UID del proceso local), y `-H ldapi:///` indica la conexión a través del socket Unix.

</details>
