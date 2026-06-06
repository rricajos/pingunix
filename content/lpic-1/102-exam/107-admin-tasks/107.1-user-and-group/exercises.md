---
title: "107.1 - Ejercicios: Gestionar cuentas de usuario y grupo"
tags:
  - lpic-1
  - examen-102
  - tema-107
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "107"
subtema: "107.1"
---

# 107.1 - Ejercicios: Gestionar cuentas de usuario y grupo

### Pregunta 1

Dada la siguiente linea de `/etc/passwd`, que indica el valor `x` en el segundo campo?
```
carlos:x:1001:1001:Carlos Lopez,,,:/home/carlos:/bin/bash
```

a) Que la cuenta del usuario esta bloqueada
b) Que la contrasena real se almacena cifrada en `/etc/shadow`
c) Que el usuario no tiene contrasena asignada
d) Que el usuario debe cambiar su contrasena en el proximo inicio de sesion

<details><summary>Respuesta</summary>

**b) Que la contrasena real se almacena cifrada en `/etc/shadow`**

La `x` en el campo de password de `/etc/passwd` es el valor estandar que indica que la contrasena cifrada se encuentra en `/etc/shadow`, un archivo que solo es legible por root. Los 7 campos de `/etc/passwd` son: usuario (`carlos`), password (`x`), UID (`1001`), GID (`1001`), GECOS (`Carlos Lopez,,,`), directorio home (`/home/carlos`) y shell (`/bin/bash`). El UID 1001 indica un usuario regular (>= 1000).

</details>

---

### Pregunta 2

Cual es la diferencia critica entre `usermod -G sudo,docker sandra` y `usermod -aG docker sandra`?

a) `-G` agrega grupos y `-aG` los reemplaza
b) `-G` sin `-a` REEMPLAZA todos los grupos secundarios; `-aG` AGREGA el grupo sin perder los existentes
c) Ambos comandos agregan grupos secundarios de la misma forma
d) `-G` afecta al grupo primario y `-aG` afecta a los grupos secundarios

<details><summary>Respuesta</summary>

**b) `-G` sin `-a` REEMPLAZA todos los grupos secundarios; `-aG` AGREGA el grupo sin perder los existentes**

`usermod -G sudo,docker sandra` **reemplaza completamente** los grupos secundarios: si sandra pertenecia a `sudo, developers, audio`, despues solo pertenecera a `sudo, docker`. `usermod -aG docker sandra` **agrega** el grupo `docker` a los existentes: si pertenecia a `sudo, developers, audio`, despues tendra `sudo, developers, audio, docker`. Siempre usar `-aG` (con la `a` de append) cuando se quiera agregar un grupo sin perder los demas. Ninguna opcion afecta al grupo primario (para eso se usa `-g`).

</details>

---

### Pregunta 3

Un administrador ejecuta `chage -d 0 sandra`. Que efecto tiene este comando?

a) Elimina la contrasena del usuario sandra
b) Bloquea la cuenta del usuario sandra permanentemente
c) Fuerza al usuario sandra a cambiar su contrasena en el proximo inicio de sesion
d) Establece la fecha de expiracion de la cuenta al dia actual

<details><summary>Respuesta</summary>

**c) Fuerza al usuario sandra a cambiar su contrasena en el proximo inicio de sesion**

`chage -d 0 sandra` establece la fecha del ultimo cambio de contrasena al dia 0 (01/01/1970, epoch). Como la contrasena "caduco" hace decadas segun esta fecha, el sistema obliga al usuario a cambiarla en el proximo login. Es equivalente en efecto a `passwd -e sandra`. Para verificar la politica de envejecimiento se usa `chage -l sandra`. La opcion `-d` establece el campo "lastchg" de `/etc/shadow`.

</details>

---

### Pregunta 4

En el archivo `/etc/shadow`, que indica el prefijo `$6$` en el campo de la contrasena cifrada?

a) Que la contrasena fue cifrada con MD5
b) Que la contrasena fue cifrada con SHA-256
c) Que la contrasena fue cifrada con SHA-512
d) Que la contrasena tiene una longitud minima de 6 caracteres

<details><summary>Respuesta</summary>

**c) Que la contrasena fue cifrada con SHA-512**

El prefijo `$6$` indica que se uso el algoritmo **SHA-512** para cifrar la contrasena. Otros prefijos comunes: `$5$` = SHA-256, `$y$` = yescrypt (moderno), `$1$` = MD5 (obsoleto e inseguro). Despues del prefijo viene el **salt** (cadena aleatoria usada en el cifrado) y luego el hash resultante. El formato completo es `$id$salt$hash`. El algoritmo se configura en `/etc/login.defs` con el parametro `ENCRYPT_METHOD`.

</details>

---

### Pregunta 5

Cual es la diferencia entre `passwd -l sandra` y `chage -E 0 sandra` para bloquear una cuenta?

a) Ambos bloquean la cuenta de forma identica, impidiendo todo acceso
b) `passwd -l` agrega `!` al hash en shadow (bloquea solo autenticacion por contrasena); `chage -E 0` expira la cuenta completamente (bloquea todo acceso)
c) `passwd -l` elimina la contrasena; `chage -E 0` la cifra con un algoritmo mas seguro
d) `passwd -l` bloquea todo acceso; `chage -E 0` solo bloquea la autenticacion por contrasena

<details><summary>Respuesta</summary>

**b) `passwd -l` agrega `!` al hash en shadow (bloquea solo autenticacion por contrasena); `chage -E 0` expira la cuenta completamente (bloquea todo acceso)**

`passwd -l` (y `usermod -L`) agregan un `!` delante del hash en `/etc/shadow`, lo que impide la autenticacion con contrasena pero el usuario podria iniciar sesion con clave SSH u otros metodos. Se desbloquea con `passwd -u` o `usermod -U`. `chage -E 0` establece la fecha de expiracion de la cuenta al dia 0 (01/01/1970), bloqueando COMPLETAMENTE la cuenta sin importar el metodo de autenticacion. Se revierte con `chage -E -1` (elimina la expiracion).

</details>

---

### Pregunta 6

Que ventaja tiene `getent passwd sandra` sobre leer directamente `/etc/passwd` con `grep`?

a) `getent` es mas rapido porque usa cache del kernel
b) `getent` consulta todas las fuentes NSS (archivos locales, LDAP, NIS), no solo los archivos locales
c) `getent` muestra la contrasena cifrada, mientras que `grep` no puede acceder a ella
d) `getent` permite editar la informacion del usuario directamente

<details><summary>Respuesta</summary>

**b) `getent` consulta todas las fuentes NSS (archivos locales, LDAP, NIS), no solo los archivos locales**

`getent` consulta las bases de datos NSS (Name Service Switch) configuradas en `/etc/nsswitch.conf`, lo que incluye archivos locales (`/etc/passwd`), **LDAP**, **NIS/NIS+** y otras bases de datos remotas. En entornos empresariales donde los usuarios se gestionan centralmente con LDAP, `grep` sobre `/etc/passwd` no mostraria los usuarios remotos, pero `getent` si. Por eso `getent` es la forma recomendada de consultar informacion de usuarios y grupos.

</details>

---

### Pregunta 7

Que diferencia hay entre `userdel ana` y `userdel -r ana`?

a) `userdel` elimina usuario y home; `userdel -r` solo elimina el usuario
b) `userdel` elimina solo la entrada del usuario; `userdel -r` elimina tambien el directorio home y el mail spool
c) `userdel -r` hace una copia de seguridad antes de eliminar
d) No hay diferencia, ambos eliminan el usuario y todos sus archivos

<details><summary>Respuesta</summary>

**b) `userdel` elimina solo la entrada del usuario; `userdel -r` elimina tambien el directorio home y el mail spool**

`userdel ana` elimina la entrada del usuario de `/etc/passwd`, `/etc/shadow` y `/etc/group`, pero **NO elimina** el directorio home (`/home/ana`) ni el mail spool; los archivos quedan "huerfanos" (pertenecen a un UID que ya no existe). `userdel -r ana` elimina la entrada del usuario Y su directorio home y mail spool (`/var/mail/ana`). Archivos fuera del home (por ejemplo en `/tmp`) no se eliminan en ningun caso. Se recomienda buscar archivos huerfanos con `find / -nouser`.

</details>

---

### Pregunta 8

Que archivo define los valores por defecto como `UID_MIN`, `PASS_MAX_DAYS` y `ENCRYPT_METHOD` para la creacion de usuarios?

a) `/etc/passwd`
b) `/etc/shadow`
c) `/etc/login.defs`
d) `/etc/skel/.bashrc`

<details><summary>Respuesta</summary>

**c) `/etc/login.defs`**

`/etc/login.defs` define los valores por defecto para la creacion de usuarios y politicas de contrasenas. Parametros importantes: `UID_MIN`/`UID_MAX` (rango de UIDs para usuarios regulares, tipicamente 1000-60000), `PASS_MAX_DAYS` (dias maximos de validez de contrasena), `PASS_MIN_DAYS`, `PASS_WARN_AGE`, `UMASK` (mascara de permisos), `CREATE_HOME`, `ENCRYPT_METHOD` (algoritmo de cifrado, tipicamente SHA512) y `USERGROUPS_ENAB` (crear grupo privado por usuario).

</details>

---

### Pregunta 9

Que hace el comando `newgrp developers` y como se vuelve al grupo primario original?

a) Cambia permanentemente el grupo primario del usuario a `developers`
b) Cambia temporalmente el grupo primario abriendo un nuevo shell; se vuelve al original con `exit`
c) Agrega al usuario al grupo `developers` de forma permanente
d) Elimina al usuario de todos los grupos excepto `developers`

<details><summary>Respuesta</summary>

**b) Cambia temporalmente el grupo primario abriendo un nuevo shell; se vuelve al original con `exit`**

`newgrp developers` inicia un nuevo shell con el grupo primario cambiado a `developers`. Los archivos creados en ese shell tendran `developers` como grupo propietario. Al ejecutar `exit`, se vuelve al shell anterior con el grupo primario original. El usuario debe pertenecer al grupo o conocer su contrasena. Es util cuando se necesita crear archivos con un grupo diferente al grupo primario habitual, sin cambiar la configuracion permanente.

</details>

---

### Pregunta 10

Que comandos se utilizan para cambiar la informacion GECOS y el shell de login de un usuario, respectivamente?

a) `usermod -c` y `usermod -s`
b) `chfn` y `chsh`
c) `passwd -c` y `passwd -s`
d) `chage -c` y `chage -s`

<details><summary>Respuesta</summary>

**b) `chfn` y `chsh`**

**`chfn`** (change finger) permite modificar el campo GECOS (campo 5 de `/etc/passwd`), que contiene informacion personal como nombre completo, oficina y telefonos. Se puede usar interactivamente o con opciones: `chfn -f "Sandra Garcia" sandra`. **`chsh`** (change shell) permite cambiar el shell de login (campo 7 de `/etc/passwd`): `chsh -s /bin/zsh sandra`. Solo se pueden asignar shells listados en `/etc/shells`. `usermod -c` y `usermod -s` tambien funcionan, pero `chfn` y `chsh` son los comandos especificos del examen LPIC-1.

</details>

---

### Pregunta 11

Que comando crea un usuario del sistema (con UID inferior a 1000) sin directorio home?

a) `useradd -r -M servicio`
b) `useradd -s /bin/false servicio`
c) `adduser --system servicio`
d) `usermod -r servicio`

<details><summary>Respuesta</summary>

**a) `useradd -r -M servicio`**

La opcion `-r` de `useradd` crea un usuario del sistema con un UID en el rango reservado para el sistema (tipicamente inferior a 1000, definido por `SYS_UID_MIN`/`SYS_UID_MAX` en `/etc/login.defs`). La opcion `-M` indica explicitamente que NO se cree el directorio home. La opcion (b) solo cambia el shell pero no crea un usuario del sistema. La opcion (c) es una herramienta de mas alto nivel disponible en Debian pero no es el comando estandar de bajo nivel. `usermod` modifica usuarios existentes, no los crea.

</details>

---

### Pregunta 12

En el archivo `/etc/group`, que representa el cuarto campo?

a) La contrasena cifrada del grupo
b) El GID numerico del grupo
c) La lista de usuarios que tienen este grupo como grupo secundario
d) El administrador del grupo

<details><summary>Respuesta</summary>

**c) La lista de usuarios que tienen este grupo como grupo secundario**

El formato de `/etc/group` tiene 4 campos separados por `:`: nombre del grupo, contrasena (generalmente `x` o vacia), GID y lista de miembros separados por coma. El cuarto campo lista los usuarios que tienen este grupo como grupo **secundario**. Los usuarios cuyo grupo primario es este grupo (definido en `/etc/passwd`) NO aparecen en este campo. Por ejemplo, en `developers:x:1001:sandra,carlos`, sandra y carlos tienen `developers` como grupo secundario.

</details>

---

### Pregunta 13

Que comando agrega al usuario `carlos` al grupo `docker` sin modificar sus otros grupos secundarios existentes?

a) `groupadd -a carlos docker`
b) `usermod -G docker carlos`
c) `usermod -aG docker carlos`
d) `gpasswd -A carlos docker`

<details><summary>Respuesta</summary>

**c) `usermod -aG docker carlos`**

`usermod -aG docker carlos` agrega (append) el grupo `docker` a los grupos secundarios de carlos sin perder los existentes. La opcion `-a` (append) es fundamental: sin ella, `usermod -G docker carlos` reemplazaria TODOS los grupos secundarios, dejando a carlos solo en `docker`. La opcion (a) no es valida para `groupadd` (que crea grupos, no agrega usuarios). La opcion (d) con `-A` establece a carlos como administrador del grupo, no como miembro.

</details>

---

### Pregunta 14

Que archivo contiene la lista de shells validos que se pueden asignar a un usuario con `chsh`?

a) `/etc/login.defs`
b) `/etc/shells`
c) `/etc/passwd`
d) `/etc/profile`

<details><summary>Respuesta</summary>

**b) `/etc/shells`**

El archivo `/etc/shells` contiene la lista de shells de login validos del sistema. Cuando un usuario ejecuta `chsh -s /bin/zsh`, el comando verifica que `/bin/zsh` este listado en `/etc/shells` antes de permitir el cambio. El contenido tipico incluye `/bin/sh`, `/bin/bash`, `/bin/zsh`, `/usr/bin/fish`, etc. `/etc/login.defs` define parametros de creacion de usuarios. `/etc/passwd` contiene la informacion de las cuentas. `/etc/profile` contiene la configuracion del entorno de login.

</details>

---

### Pregunta 15

Un administrador ejecuta `passwd -S sandra` y obtiene la salida: `sandra L 05/26/2026 0 99999 7 -1`. Que indica la letra `L`?

a) Que la cuenta tiene una contrasena valida establecida
b) Que la cuenta no tiene contrasena
c) Que la cuenta esta bloqueada (locked)
d) Que la contrasena ha expirado

<details><summary>Respuesta</summary>

**c) Que la cuenta esta bloqueada (locked)**

En la salida de `passwd -S`, el segundo campo indica el estado de la contrasena: `P` significa que tiene una contrasena valida (password set), `L` significa que la cuenta esta bloqueada (locked, se agrego `!` al hash en `/etc/shadow`), y `NP` significa que no tiene contrasena asignada. Una cuenta bloqueada con `L` no permite la autenticacion por contrasena, aunque podria permitir acceso por otros metodos como claves SSH.

</details>

---

### Pregunta 16

Que hace el comando `gpasswd -d sandra developers`?

a) Elimina el grupo developers del sistema
b) Elimina al usuario sandra del grupo developers
c) Desbloquea la contrasena del grupo developers
d) Establece a sandra como administradora del grupo developers

<details><summary>Respuesta</summary>

**b) Elimina al usuario sandra del grupo developers**

El comando `gpasswd -d usuario grupo` elimina al usuario especificado del grupo indicado. Otras opciones de `gpasswd`: `-a usuario grupo` agrega al usuario al grupo, `-A usuario grupo` establece al usuario como administrador del grupo, `-r grupo` elimina la contrasena del grupo, y `-M user1,user2 grupo` establece la lista completa de miembros. Es una alternativa a `usermod -G` para gestionar la membresia de grupos.

</details>

---

### Pregunta 17

Que directorio contiene los archivos plantilla que se copian al home de cada nuevo usuario creado con `useradd -m`?

a) `/etc/default`
b) `/etc/profile.d/`
c) `/etc/skel/`
d) `/home/template/`

<details><summary>Respuesta</summary>

**c) `/etc/skel/`**

El directorio `/etc/skel/` (skeleton) contiene los archivos plantilla que se copian automaticamente al directorio home de cada nuevo usuario cuando se crea con `useradd -m`. Archivos tipicos incluyen `.bashrc`, `.bash_logout` y `.profile`. La ruta se puede configurar con el parametro `SKEL` en `/etc/login.defs`. Si un administrador quiere que todos los usuarios nuevos tengan ciertos archivos de configuracion, los debe colocar en `/etc/skel/`.

</details>

---

### Pregunta 18

Que informacion muestra el comando `chage -l sandra`?

a) Los grupos secundarios del usuario sandra
b) El historial de comandos ejecutados por sandra
c) La politica de envejecimiento de la contrasena de sandra
d) Los permisos de los archivos de sandra

<details><summary>Respuesta</summary>

**c) La politica de envejecimiento de la contrasena de sandra**

`chage -l sandra` muestra la informacion completa de envejecimiento de la contrasena: fecha del ultimo cambio, fecha de caducidad de la contrasena, fecha de inactividad, fecha de expiracion de la cuenta, dias minimos y maximos entre cambios, y dias de aviso antes de la caducidad. Toda esta informacion se almacena en `/etc/shadow`. Es una herramienta util para verificar las politicas de seguridad aplicadas a cada cuenta de usuario.

</details>

---

### Pregunta 19

Cual es el valor de UID reservado para el superusuario root en Linux?

a) 1
b) 65534
c) 1000
d) 0

<details><summary>Respuesta</summary>

**d) 0**

El UID 0 esta reservado para el superusuario root en todos los sistemas Linux y Unix. Es el unico UID con privilegios completos sobre el sistema. Los UIDs 1-999 estan tipicamente reservados para usuarios del sistema (servicios y daemons). Los UIDs a partir de 1000 (definido por `UID_MIN` en `/etc/login.defs`) se asignan a usuarios regulares. El UID 65534 se usa generalmente para el usuario `nobody`, una cuenta con privilegios minimos.

</details>

---

### Pregunta 20

Que opcion de `useradd` establece la fecha de expiracion de la cuenta?

a) `-d YYYY-MM-DD`
b) `-e YYYY-MM-DD`
c) `-E YYYY-MM-DD`
d) `-x YYYY-MM-DD`

<details><summary>Respuesta</summary>

**b) `-e YYYY-MM-DD`**

La opcion `-e YYYY-MM-DD` de `useradd` establece la fecha de expiracion de la cuenta. Por ejemplo, `useradd -m -e 2026-12-31 temporal` crea un usuario cuya cuenta expirara el 31 de diciembre de 2026. La opcion `-d` especifica el directorio home (no confundir). Para modificar la fecha de expiracion de un usuario existente se puede usar `usermod -e YYYY-MM-DD` o `chage -E YYYY-MM-DD`. La fecha se almacena en el campo 8 de `/etc/shadow`.

</details>

---

### Pregunta 21

Escribe el comando para crear un usuario llamado `ana` con directorio home, shell `/bin/bash` y grupo secundario `sudo`.

<input type="text" class="fill-blank" data-answer="useradd -m -s /bin/bash -G sudo ana" data-alt="useradd -m -G sudo -s /bin/bash ana,useradd -G sudo -m -s /bin/bash ana" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**useradd -m -s /bin/bash -G sudo ana**

El comando `useradd` con la opcion `-m` crea el directorio home (copiando `/etc/skel/`), `-s /bin/bash` establece el shell de login, y `-G sudo` agrega al usuario al grupo secundario `sudo`. El orden de las opciones puede variar. Despues de crear el usuario, se debe establecer su contrasena con `passwd ana`.

</details>

---

### Pregunta 22

Escribe el comando para ver la informacion de UID, GID y grupos del usuario `carlos`.

<input type="text" class="fill-blank" data-answer="id carlos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**id carlos**

El comando `id carlos` muestra el UID, el GID del grupo primario y la lista de todos los grupos (primario y secundarios) del usuario. La salida tiene el formato: `uid=1001(carlos) gid=1001(carlos) groups=1001(carlos),27(sudo),999(docker)`. Se puede usar `id -u` para obtener solo el UID, `id -g` para solo el GID primario, e `id -Gn` para los nombres de todos los grupos.

</details>

---

### Pregunta 23

Escribe el comando para bloquear la cuenta del usuario `ana` usando `passwd`.

<input type="text" class="fill-blank" data-answer="passwd -l ana" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**passwd -l ana**

El comando `passwd -l ana` (lock) bloquea la cuenta del usuario agegando el caracter `!` delante del hash de la contrasena en `/etc/shadow`. Esto impide la autenticacion por contrasena, pero no bloquea otros metodos como claves SSH. Para desbloquear se usa `passwd -u ana`. Una alternativa es `usermod -L ana` (bloquear) y `usermod -U ana` (desbloquear).

</details>

---

### Pregunta 24

Escribe el comando para eliminar al usuario `temporal` junto con su directorio home y mail spool.

<input type="text" class="fill-blank" data-answer="userdel -r temporal" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**userdel -r temporal**

El comando `userdel -r temporal` elimina la entrada del usuario de `/etc/passwd`, `/etc/shadow` y `/etc/group`, y ademas elimina su directorio home y su mail spool (`/var/mail/temporal`). Sin la opcion `-r`, solo se eliminaria la entrada del usuario pero los archivos quedarian "huerfanos" en el sistema. Es recomendable buscar archivos huerfanos con `find / -nouser` despues de eliminar usuarios.

</details>

---

### Pregunta 25

Escribe el comando para consultar la informacion del usuario `sandra` en todas las fuentes NSS (archivos locales, LDAP, NIS).

<input type="text" class="fill-blank" data-answer="getent passwd sandra" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**getent passwd sandra**

El comando `getent passwd sandra` consulta la base de datos `passwd` buscando al usuario `sandra` en todas las fuentes configuradas en `/etc/nsswitch.conf`, incluyendo archivos locales (`/etc/passwd`), LDAP, NIS y otras bases de datos remotas. Es la forma recomendada de consultar informacion de usuarios en entornos empresariales, ya que `grep` sobre `/etc/passwd` solo muestra usuarios locales.

</details>
