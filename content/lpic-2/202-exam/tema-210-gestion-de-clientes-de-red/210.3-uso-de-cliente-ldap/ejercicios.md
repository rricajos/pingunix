---
title: "210.3 - Uso de cliente LDAP"
tags: [lpic-2, examen-202, tema-210, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "210"
subtema: "210.3"
---

# 210.3 - Ejercicios: Uso de cliente LDAP

### Pregunta 1

¿Qué significa DN en el contexto de LDAP?

a) Domain Name
b) Distinguished Name
c) Directory Node
d) Data Namespace

<details><summary>Respuesta</summary>

**b) Distinguished Name**

DN (Distinguished Name) es el nombre completo y único de una entrada en el directorio LDAP, que incluye la ruta completa desde la raíz. Ejemplo: `uid=juan,ou=personas,dc=ejemplo,dc=com`.
</details>

### Pregunta 2

¿Qué opción de `ldapsearch` se utiliza para especificar el punto de inicio de la búsqueda?

a) -s
b) -d
c) -b
d) -r

<details><summary>Respuesta</summary>

**c) -b**

La opción `-b` de `ldapsearch` especifica el Base DN, que es el punto de inicio en el árbol LDAP desde donde se realizará la búsqueda. Ejemplo: `ldapsearch -x -b "dc=ejemplo,dc=com"`.
</details>

### Pregunta 3

¿Qué puerto utiliza LDAP sobre SSL/TLS (LDAPS)?

a) 389
b) 443
c) 636
d) 993

<details><summary>Respuesta</summary>

**c) 636**

LDAPS utiliza el puerto 636. El puerto 389 es para LDAP sin cifrar o con STARTTLS. Es importante no confundir LDAPS (puerto 636) con STARTTLS (que usa el puerto 389 estándar).
</details>

### Pregunta 4

¿Qué comando se utiliza para añadir nuevas entradas al directorio LDAP desde un archivo LDIF?

a) ldapinsert
b) ldapadd
c) ldapnew
d) ldapcreate

<details><summary>Respuesta</summary>

**b) ldapadd**

`ldapadd` añade nuevas entradas al directorio LDAP. Se usa típicamente con un archivo LDIF: `ldapadd -x -D "cn=admin,dc=ejemplo,dc=com" -W -f nuevas_entradas.ldif`.
</details>

### Pregunta 5

En un archivo LDIF, ¿cómo se separan las diferentes entradas?

a) Con punto y coma
b) Con una línea que contiene "---"
c) Con una línea en blanco
d) Con la palabra "entry"

<details><summary>Respuesta</summary>

**c) Con una línea en blanco**

En formato LDIF, las entradas se separan con líneas en blanco. Cada entrada comienza con una línea `dn:` que indica su Distinguished Name, y se separa de la siguiente entrada con al menos una línea vacía.
</details>

### Pregunta 6

¿Qué opción de `ldapsearch` fuerza el uso de STARTTLS y falla si no es posible establecer la conexión cifrada?

a) -Z
b) -ZZ
c) -T
d) -SSL

<details><summary>Respuesta</summary>

**b) -ZZ**

La opción `-ZZ` fuerza el uso de STARTTLS y provoca un error si no se puede establecer la conexión cifrada. La opción `-Z` (una sola Z) intenta STARTTLS pero continúa sin cifrado si falla.
</details>

### Pregunta 7

¿En qué archivo se configura el Base DN y URI por defecto para los clientes LDAP en un sistema Debian?

a) /etc/ldap.conf
b) /etc/ldap/ldap.conf
c) /etc/openldap/ldap.conf
d) /etc/default/ldap

<details><summary>Respuesta</summary>

**b) /etc/ldap/ldap.conf**

En sistemas Debian/Ubuntu, la configuración del cliente LDAP se encuentra en `/etc/ldap/ldap.conf`. En sistemas RHEL/CentOS, la ruta es `/etc/openldap/ldap.conf`.
</details>

### Pregunta 8

¿Cuáles son los tres tipos de alcance (scope) de búsqueda en LDAP?

a) local, remote, global
b) base, one, sub
c) root, branch, leaf
d) simple, recursive, deep

<details><summary>Respuesta</summary>

**b) base, one, sub**

Los tres alcances de búsqueda LDAP son: `base` (solo la entrada del Base DN), `one` (solo un nivel por debajo del Base DN) y `sub` (todo el subárbol desde el Base DN, es el valor por defecto).
</details>

### Pregunta 9

¿Qué valor de `TLS_REQCERT` en ldap.conf es el más seguro y recomendado para producción?

a) never
b) allow
c) try
d) demand

<details><summary>Respuesta</summary>

**d) demand**

`TLS_REQCERT demand` requiere que el servidor presente un certificado válido y verificable. Es el valor más seguro y el recomendado para entornos de producción. `never` no verifica nada, `allow` permite conexiones con certificados inválidos y `try` verifica solo si el servidor presenta certificado.
</details>

### Pregunta 10

¿Qué changetype se utiliza en un archivo LDIF para modificar un atributo existente de una entrada LDAP?

a) changetype: update
b) changetype: modify
c) changetype: replace
d) changetype: edit

<details><summary>Respuesta</summary>

**b) changetype: modify**

El `changetype: modify` se utiliza en archivos LDIF para modificar entradas existentes. Dentro de un bloque modify, se pueden usar las operaciones `add` (añadir atributo), `replace` (reemplazar valor) y `delete` (eliminar atributo).
</details>

### Pregunta 11

¿Qué opción de `ldapsearch` se utiliza para especificar el DN del usuario con el que autenticarse (bind DN)?

a) -b
b) -D
c) -W
d) -H

<details><summary>Respuesta</summary>

**b) -D**

La opción `-D` de `ldapsearch` especifica el DN del usuario que se utilizará para autenticarse (bind) en el servidor LDAP. Se combina normalmente con `-W` (pedir contraseña interactivamente) o `-w` (contraseña en línea de comandos).

</details>

### Pregunta 12

¿Qué objectClass de LDAP se utiliza para representar una cuenta POSIX con atributos como uidNumber, gidNumber y homeDirectory?

a) inetOrgPerson
b) organizationalPerson
c) posixAccount
d) person

<details><summary>Respuesta</summary>

**c) posixAccount**

El objectClass `posixAccount` define los atributos necesarios para una cuenta de usuario POSIX en LDAP, incluyendo `uidNumber`, `gidNumber`, `homeDirectory` y `loginShell`. Se usa para integrar la autenticación LDAP con sistemas Linux/Unix.

</details>

### Pregunta 13

¿Qué comando se utiliza para eliminar una entrada específica del directorio LDAP?

a) ldapremove
b) ldapdel
c) ldapdelete
d) ldapdrop

<details><summary>Respuesta</summary>

**c) ldapdelete**

`ldapdelete` elimina entradas del directorio LDAP. Se especifica el DN de la entrada a eliminar junto con las credenciales de autenticación. Con la opción `-r` se pueden eliminar recursivamente una entrada y todos sus hijos.

</details>

### Pregunta 14

¿Qué directiva de `/etc/ldap/ldap.conf` define la URI del servidor LDAP al que se conectarán los clientes por defecto?

a) SERVER
b) HOST
c) URI
d) LDAP_SERVER

<details><summary>Respuesta</summary>

**c) URI**

La directiva `URI` en `/etc/ldap/ldap.conf` especifica la dirección del servidor LDAP que las herramientas de cliente usarán por defecto. Acepta múltiples URIs separadas por espacios para redundancia, por ejemplo: `URI ldap://ldap1.ejemplo.com ldap://ldap2.ejemplo.com`.

</details>

### Pregunta 15

¿Qué opción de `ldapsearch` se utiliza para obtener la salida en formato LDIF sin comentarios ni versión?

a) -L
b) -LL
c) -LLL
d) -LLLL

<details><summary>Respuesta</summary>

**c) -LLL**

La opción `-LLL` produce una salida en formato LDIF limpio sin comentarios ni número de versión. `-L` produce LDIF con comentarios, `-LL` produce LDIF sin comentarios pero con versión, y `-LLL` elimina tanto comentarios como versión.

</details>

### Pregunta 16

¿Qué comando se utiliza para modificar entradas existentes en el directorio LDAP desde un archivo LDIF?

a) ldapchange
b) ldapedit
c) ldapupdate
d) ldapmodify

<details><summary>Respuesta</summary>

**d) ldapmodify**

`ldapmodify` permite modificar entradas existentes en el directorio LDAP utilizando archivos LDIF que contienen `changetype: modify` junto con las operaciones `add`, `replace` o `delete`. La sintaxis es: `ldapmodify -x -D "bind_dn" -W -f cambios.ldif`.

</details>

### Pregunta 17

¿Qué valor de `TLS_REQCERT` en ldap.conf permite la conexión incluso si el certificado del servidor es inválido?

a) demand
b) try
c) allow
d) never

<details><summary>Respuesta</summary>

**c) allow**

Con `TLS_REQCERT allow`, el cliente verifica el certificado del servidor pero permite la conexión aunque la verificación falle. Con `never` no se verifica en absoluto, con `try` se verifica solo si se presenta un certificado, y con `demand` se exige un certificado válido.

</details>

### Pregunta 18

¿Qué servicio moderno se recomienda para integrar la autenticación LDAP con el sistema, reemplazando a nss-ldap y pam_ldap?

a) nslcd
b) SSSD
c) nscd
d) winbind

<details><summary>Respuesta</summary>

**b) SSSD**

SSSD (System Security Services Daemon) es la solución moderna y recomendada para integrar la autenticación LDAP (y otros backends como Active Directory) con el sistema. Ofrece caché local, soporte offline y mejor rendimiento que las soluciones anteriores como nss-ldap y pam_ldap.

</details>

### Pregunta 19

En el archivo `/etc/nsswitch.conf`, ¿qué línea configura la resolución de usuarios para buscar primero en archivos locales y luego en LDAP?

a) passwd: ldap files
b) passwd: files ldap
c) users: files ldap
d) auth: files ldap

<details><summary>Respuesta</summary>

**b) passwd: files ldap**

La línea `passwd: files ldap` en `/etc/nsswitch.conf` indica que la resolución de usuarios se realizará primero consultando los archivos locales (`/etc/passwd`) y luego el directorio LDAP. El orden es importante: `files` primero garantiza que los usuarios locales tengan prioridad.

</details>

### Pregunta 20

¿Qué opción de `ldapsearch` indica autenticación simple (en lugar de SASL)?

a) -s
b) -x
c) -a
d) -S

<details><summary>Respuesta</summary>

**b) -x**

La opción `-x` de `ldapsearch` indica que se debe utilizar autenticación simple en lugar de SASL (Simple Authentication and Security Layer). Es una de las opciones más comunes y se usa prácticamente en todas las consultas LDAP desde la línea de comandos.

</details>

### Pregunta 21

¿Qué comando se utiliza para buscar en LDAP todas las entradas con objectClass `posixAccount` dentro del base DN `dc=empresa,dc=com`?

<input type="text" class="fill-blank" data-answer="ldapsearch -x -b &quot;dc=empresa,dc=com&quot; &quot;(objectClass=posixAccount)&quot;" data-alt="ldapsearch -x -b dc=empresa,dc=com (objectClass=posixAccount)" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldapsearch -x -b "dc=empresa,dc=com" "(objectClass=posixAccount)"**

Este comando realiza una búsqueda LDAP con autenticación simple (`-x`), usando como base DN `dc=empresa,dc=com` (`-b`) y filtrando las entradas cuyo objectClass sea `posixAccount`.

</details>

### Pregunta 22

¿Qué comando se utiliza para añadir entradas al directorio LDAP desde el archivo `usuarios.ldif` autenticándose como `cn=admin,dc=empresa,dc=com`?

<input type="text" class="fill-blank" data-answer="ldapadd -x -D &quot;cn=admin,dc=empresa,dc=com&quot; -W -f usuarios.ldif" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldapadd -x -D "cn=admin,dc=empresa,dc=com" -W -f usuarios.ldif**

Este comando añade las entradas contenidas en el archivo `usuarios.ldif` al directorio LDAP. La opción `-D` especifica el bind DN, `-W` solicita la contraseña interactivamente y `-f` indica el archivo LDIF de entrada.

</details>

### Pregunta 23

¿Qué comando elimina recursivamente la entrada `ou=temporal,dc=empresa,dc=com` y todos sus hijos del directorio LDAP?

<input type="text" class="fill-blank" data-answer="ldapdelete -x -D &quot;cn=admin,dc=empresa,dc=com&quot; -W -r &quot;ou=temporal,dc=empresa,dc=com&quot;" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldapdelete -x -D "cn=admin,dc=empresa,dc=com" -W -r "ou=temporal,dc=empresa,dc=com"**

La opción `-r` de `ldapdelete` realiza una eliminación recursiva, eliminando la entrada especificada y todas las entradas que se encuentran por debajo de ella en el árbol LDAP.

</details>

### Pregunta 24

¿Qué comando realiza una búsqueda LDAP forzando el uso de STARTTLS sobre el servidor `ldap.empresa.com`?

<input type="text" class="fill-blank" data-answer="ldapsearch -x -ZZ -H ldap://ldap.empresa.com -b &quot;dc=empresa,dc=com&quot;" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldapsearch -x -ZZ -H ldap://ldap.empresa.com -b "dc=empresa,dc=com"**

La opción `-ZZ` fuerza el uso de STARTTLS y la conexión falla si no se puede establecer el cifrado. La opción `-H` especifica la URI del servidor LDAP. Combinadas, permiten realizar búsquedas cifradas obligatoriamente.

</details>

### Pregunta 25

¿Qué comando se utiliza para buscar en LDAP solo un nivel por debajo del base DN `ou=personas,dc=empresa,dc=com`?

<input type="text" class="fill-blank" data-answer="ldapsearch -x -s one -b &quot;ou=personas,dc=empresa,dc=com&quot;" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldapsearch -x -s one -b "ou=personas,dc=empresa,dc=com"**

La opción `-s one` limita el alcance de la búsqueda a un solo nivel por debajo del base DN, sin descender a niveles más profundos. Las alternativas son `-s base` (solo la entrada del base DN) y `-s sub` (todo el subárbol, por defecto).

</details>
