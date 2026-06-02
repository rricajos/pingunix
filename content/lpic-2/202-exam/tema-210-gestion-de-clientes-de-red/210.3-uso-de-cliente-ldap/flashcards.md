---
title: "210.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.3"
---

# Flashcards: 210.3 - Uso De Cliente Ldap

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué significa DN en el contexto de LDAP?

</div>
<div class="flashcard-back">

**R:** b) Distinguished Name. DN (Distinguished Name) es el nombre completo y único de una entrada en el directorio LDAP, que incluye la ruta completa desde la raíz. Ejemplo: `uid=juan,ou=personas,dc=ejemplo,dc=com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué opción de `ldapsearch` se utiliza para especificar el punto de inicio de la búsqueda?

</div>
<div class="flashcard-back">

**R:** c) -b. La opción `-b` de `ldapsearch` especifica el Base DN, que es el punto de inicio en el árbol LDAP desde donde se realizará la búsqueda. Ejemplo: `ldapsearch -x -b "dc=ejemplo,dc=com"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué puerto utiliza LDAP sobre SSL/TLS (LDAPS)?

</div>
<div class="flashcard-back">

**R:** c) 636. LDAPS utiliza el puerto 636. El puerto 389 es para LDAP sin cifrar o con STARTTLS. Es importante no confundir LDAPS (puerto 636) con STARTTLS (que usa el puerto 389 estándar).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para añadir nuevas entradas al directorio LDAP desde un archivo LDIF?

</div>
<div class="flashcard-back">

**R:** b) ldapadd. `ldapadd` añade nuevas entradas al directorio LDAP. Se usa típicamente con un archivo LDIF: `ldapadd -x -D "cn=admin,dc=ejemplo,dc=com" -W -f nuevas_entradas.ldif`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-005">
<div class="flashcard-front">

**P:** En un archivo LDIF, ¿cómo se separan las diferentes entradas?

</div>
<div class="flashcard-back">

**R:** c) Con una línea en blanco. En formato LDIF, las entradas se separan con líneas en blanco. Cada entrada comienza con una línea `dn:` que indica su Distinguished Name, y se separa de la siguiente entrada con al menos una línea vacía.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué opción de `ldapsearch` fuerza el uso de STARTTLS y falla si no es posible establecer la conexión cifrada?

</div>
<div class="flashcard-back">

**R:** b) -ZZ. La opción `-ZZ` fuerza el uso de STARTTLS y provoca un error si no se puede establecer la conexión cifrada. La opción `-Z` (una sola Z) intenta STARTTLS pero continúa sin cifrado si falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-007">
<div class="flashcard-front">

**P:** ¿En qué archivo se configura el Base DN y URI por defecto para los clientes LDAP en un sistema Debian?

</div>
<div class="flashcard-back">

**R:** b) /etc/ldap/ldap.conf. En sistemas Debian/Ubuntu, la configuración del cliente LDAP se encuentra en `/etc/ldap/ldap.conf`. En sistemas RHEL/CentOS, la ruta es `/etc/openldap/ldap.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-008">
<div class="flashcard-front">

**P:** ¿Cuáles son los tres tipos de alcance (scope) de búsqueda en LDAP?

</div>
<div class="flashcard-back">

**R:** b) base, one, sub. Los tres alcances de búsqueda LDAP son: `base` (solo la entrada del Base DN), `one` (solo un nivel por debajo del Base DN) y `sub` (todo el subárbol desde el Base DN, es el valor por defecto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué valor de `TLS_REQCERT` en ldap.conf es el más seguro y recomendado para producción?

</div>
<div class="flashcard-back">

**R:** d) demand. `TLS_REQCERT demand` requiere que el servidor presente un certificado válido y verificable. Es el valor más seguro y el recomendado para entornos de producción. `never` no verifica nada, `allow` permite conexiones con certificados inválidos y `try` verifica solo si el servidor presenta certificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué changetype se utiliza en un archivo LDIF para modificar un atributo existente de una entrada LDAP?

</div>
<div class="flashcard-back">

**R:** b) changetype: modify. El `changetype: modify` se utiliza en archivos LDIF para modificar entradas existentes. Dentro de un bloque modify, se pueden usar las operaciones `add` (añadir atributo), `replace` (reemplazar valor) y `delete` (eliminar atributo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `ldapsearch` se utiliza para especificar el DN del usuario con el que autenticarse (bind DN)?

</div>
<div class="flashcard-back">

**R:** b) -D. La opción `-D` de `ldapsearch` especifica el DN del usuario que se utilizará para autenticarse (bind) en el servidor LDAP. Se combina normalmente con `-W` (pedir contraseña interactivamente) o `-w` (contraseña en línea de comandos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué objectClass de LDAP se utiliza para representar una cuenta POSIX con atributos como uidNumber, gidNumber y homeDirectory?

</div>
<div class="flashcard-back">

**R:** c) posixAccount. El objectClass `posixAccount` define los atributos necesarios para una cuenta de usuario POSIX en LDAP, incluyendo `uidNumber`, `gidNumber`, `homeDirectory` y `loginShell`. Se usa para integrar la autenticación LDAP con sistemas Linux/Unix.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para eliminar una entrada específica del directorio LDAP?

</div>
<div class="flashcard-back">

**R:** c) ldapdelete. `ldapdelete` elimina entradas del directorio LDAP. Se especifica el DN de la entrada a eliminar junto con las credenciales de autenticación. Con la opción `-r` se pueden eliminar recursivamente una entrada y todos sus hijos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué directiva de `/etc/ldap/ldap.conf` define la URI del servidor LDAP al que se conectarán los clientes por defecto?

</div>
<div class="flashcard-back">

**R:** c) URI. La directiva `URI` en `/etc/ldap/ldap.conf` especifica la dirección del servidor LDAP que las herramientas de cliente usarán por defecto. Acepta múltiples URIs separadas por espacios para redundancia, por ejemplo: `URI ldap://ldap1.ejemplo.com ldap://ldap2.ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción de `ldapsearch` se utiliza para obtener la salida en formato LDIF sin comentarios ni versión?

</div>
<div class="flashcard-back">

**R:** c) -LLL. La opción `-LLL` produce una salida en formato LDIF limpio sin comentarios ni número de versión. `-L` produce LDIF con comentarios, `-LL` produce LDIF sin comentarios pero con versión, y `-LLL` elimina tanto comentarios como versión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para modificar entradas existentes en el directorio LDAP desde un archivo LDIF?

</div>
<div class="flashcard-back">

**R:** d) ldapmodify. `ldapmodify` permite modificar entradas existentes en el directorio LDAP utilizando archivos LDIF que contienen `changetype: modify` junto con las operaciones `add`, `replace` o `delete`. La sintaxis es: `ldapmodify -x -D "bind_dn" -W -f cambios.ldif`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-017">
<div class="flashcard-front">

**P:** ¿Qué valor de `TLS_REQCERT` en ldap.conf permite la conexión incluso si el certificado del servidor es inválido?

</div>
<div class="flashcard-back">

**R:** c) allow. Con `TLS_REQCERT allow`, el cliente verifica el certificado del servidor pero permite la conexión aunque la verificación falle. Con `never` no se verifica en absoluto, con `try` se verifica solo si se presenta un certificado, y con `demand` se exige un certificado válido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué servicio moderno se recomienda para integrar la autenticación LDAP con el sistema, reemplazando a nss-ldap y pam_ldap?

</div>
<div class="flashcard-back">

**R:** b) SSSD. SSSD (System Security Services Daemon) es la solución moderna y recomendada para integrar la autenticación LDAP (y otros backends como Active Directory) con el sistema. Ofrece caché local, soporte offline y mejor rendimiento que las soluciones anteriores como nss-ldap y pam_ldap.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-019">
<div class="flashcard-front">

**P:** En el archivo `/etc/nsswitch.conf`, ¿qué línea configura la resolución de usuarios para buscar primero en archivos locales y luego en LDAP?

</div>
<div class="flashcard-back">

**R:** b) passwd: files ldap. La línea `passwd: files ldap` en `/etc/nsswitch.conf` indica que la resolución de usuarios se realizará primero consultando los archivos locales (`/etc/passwd`) y luego el directorio LDAP. El orden es importante: `files` primero garantiza que los usuarios locales tengan prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué opción de `ldapsearch` indica autenticación simple (en lugar de SASL)?

</div>
<div class="flashcard-back">

**R:** b) -x. La opción `-x` de `ldapsearch` indica que se debe utilizar autenticación simple en lugar de SASL (Simple Authentication and Security Layer). Es una de las opciones más comunes y se usa prácticamente en todas las consultas LDAP desde la línea de comandos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para buscar en LDAP todas las entradas con objectClass `posixAccount` dentro del base DN `dc=empresa,dc=com`?

</div>
<div class="flashcard-back">

**R:** ldapsearch -x -b "dc=empresa,dc=com" "(objectClass=posixAccount)". Este comando realiza una búsqueda LDAP con autenticación simple (`-x`), usando como base DN `dc=empresa,dc=com` (`-b`) y filtrando las entradas cuyo objectClass sea `posixAccount`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para añadir entradas al directorio LDAP desde el archivo `usuarios.ldif` autenticándose como `cn=admin,dc=empresa,dc=com`?

</div>
<div class="flashcard-back">

**R:** ldapadd -x -D "cn=admin,dc=empresa,dc=com" -W -f usuarios.ldif. Este comando añade las entradas contenidas en el archivo `usuarios.ldif` al directorio LDAP. La opción `-D` especifica el bind DN, `-W` solicita la contraseña interactivamente y `-f` indica el archivo LDIF de entrada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando elimina recursivamente la entrada `ou=temporal,dc=empresa,dc=com` y todos sus hijos del directorio LDAP?

</div>
<div class="flashcard-back">

**R:** ldapdelete -x -D "cn=admin,dc=empresa,dc=com" -W -r "ou=temporal,dc=empresa,dc=com". La opción `-r` de `ldapdelete` realiza una eliminación recursiva, eliminando la entrada especificada y todas las entradas que se encuentran por debajo de ella en el árbol LDAP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando realiza una búsqueda LDAP forzando el uso de STARTTLS sobre el servidor `ldap.empresa.com`?

</div>
<div class="flashcard-back">

**R:** ldapsearch -x -ZZ -H ldap://ldap.empresa.com -b "dc=empresa,dc=com". La opción `-ZZ` fuerza el uso de STARTTLS y la conexión falla si no se puede establecer el cifrado. La opción `-H` especifica la URI del servidor LDAP. Combinadas, permiten realizar búsquedas cifradas obligatoriamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para buscar en LDAP solo un nivel por debajo del base DN `ou=personas,dc=empresa,dc=com`?

</div>
<div class="flashcard-back">

**R:** ldapsearch -x -s one -b "ou=personas,dc=empresa,dc=com". La opción `-s one` limita el alcance de la búsqueda a un solo nivel por debajo del base DN, sin descender a niveles más profundos. Las alternativas son `-s base` (solo la entrada del base DN) y `-s sub` (todo el subárbol, por defecto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Entender la diferencia entre DN, RDN y Base DN es fundamental. El DN es la ruta ...

</div>
<div class="flashcard-back">

**R:** Entender la diferencia entre DN, RDN y Base DN es fundamental. El DN es la ruta completa, el RDN es el nombre relativo, y el Base DN es el punto de inicio de búsquedas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conocer la sintaxis LDIF es imprescindible: cada entrada empieza con `dn:`, las ...

</div>
<div class="flashcard-back">

**R:** Conocer la sintaxis LDIF es imprescindible: cada entrada empieza con `dn:`, las entradas se separan con líneas en blanco, y las modificaciones usan `changetype: modify` con `add`, `replace` o `delete`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Todos los comandos de cliente LDAP comparten las opciones `-x` (autenticación si...

</div>
<div class="flashcard-back">

**R:** Todos los comandos de cliente LDAP comparten las opciones `-x` (autenticación simple), `-D` (bind DN), `-W` (pedir contraseña) y `-H` (servidor). Memoriza estas opciones comunes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: SSSD es la forma recomendada actualmente para integrar LDAP con el sistema. Cono...

</div>
<div class="flashcard-back">

**R:** SSSD es la forma recomendada actualmente para integrar LDAP con el sistema. Conocer tanto la configuración tradicional (nss-ldap/pam_ldap) como la moderna (SSSD) es necesario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `cn: Juan García`?

</div>
<div class="flashcard-back">

**R:** > **Para el examen:** Entender la diferencia entre DN, RDN y Base DN es fundamental. El DN es la ruta completa, el RDN es el nombre relativo, y el Base DN es el punto de inicio de búsquedas.  ### ObjectClasses comunes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `person`?

</div>
<div class="flashcard-back">

**R:** Información básica de persona (cn, sn)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `organizationalPerson`?

</div>
<div class="flashcard-back">

**R:** Extensión de person con datos organizativos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `inetOrgPerson`?

</div>
<div class="flashcard-back">

**R:** Persona con datos de Internet (mail, uid)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `posixAccount`?

</div>
<div class="flashcard-back">

**R:** Cuenta POSIX (uidNumber, gidNumber, homeDirectory)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Conceptos fundamentales de LDAP?

</div>
<div class="flashcard-back">

**R:** LDAP (Lightweight Directory Access Protocol) es un protocolo para acceder y gestionar servicios de directorio. Funciona sobre el puerto **389** (sin cifrar) y **636** (LDAPS con TLS/SSL).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.3">
</div>

<div class="flashcard" data-id="210.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Formato LDIF?

</div>
<div class="flashcard-back">

**R:** LDIF (LDAP Data Interchange Format) es el formato de texto para representar entradas LDAP y modificaciones.

</div>
</div>

---

