---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "333 - Control de Acceso"
tema: "333.1 - Control de acceso discrecional"
subtema: "333.1"
peso: 3
tags:
  - lpic-3
  - tema-333
  - permisos
  - acl
  - xattr
---

# Ejercicios - 333.1 Control de Acceso Discrecional

### Pregunta 1
Un directorio tiene permisos `drwxrwxrwt`. ¿Que significa la `t` al final?

a) El directorio tiene ACLs configuradas
b) El sticky bit esta establecido; solo el propietario puede eliminar sus archivos
c) El directorio esta cifrado
d) La `t` indica que el directorio es temporal

<details><summary>Respuesta</summary>

**b)** El sticky bit esta establecido; solo el propietario puede eliminar sus archivos

El sticky bit (`t` en la posicion de ejecucion de "otros") en un directorio significa que solo el propietario del archivo, el propietario del directorio o root pueden eliminar o renombrar archivos dentro del directorio, incluso si otros tienen permiso de escritura. Ejemplo clasico: `/tmp`.
</details>

### Pregunta 2
¿Que comando establece una ACL por defecto para que el usuario "juan" tenga permisos rwx en todos los nuevos archivos creados dentro de `/datos/proyecto/`?

a) `setfacl -m u:juan:rwx /datos/proyecto/`
b) `setfacl -d -m u:juan:rwx /datos/proyecto/`
c) `setfacl --default u:juan:rwx /datos/proyecto/`
d) `setfacl -R -m u:juan:rwx /datos/proyecto/`

<details><summary>Respuesta</summary>

**b)** `setfacl -d -m u:juan:rwx /datos/proyecto/`

La opcion `-d` (o `--default`) establece una ACL por defecto en el directorio. Los nuevos archivos y subdirectorios creados dentro heredaran automaticamente esta ACL.
</details>

### Pregunta 3
Un archivo tiene la siguiente salida de `getfacl`: `user:juan:rw-` y `mask::r--`. ¿Cuales son los permisos efectivos de juan?

a) rw-
b) r--
c) ---
d) r-x

<details><summary>Respuesta</summary>

**b)** r--

La mascara (mask) limita los permisos efectivos de las entradas ACL de usuarios y grupos adicionales. Los permisos efectivos son la interseccion de la ACL del usuario y la mascara: `rw-` AND `r--` = `r--`.
</details>

### Pregunta 4
¿Que comando hace que un archivo sea completamente inmutable, impidiendo incluso a root modificarlo o eliminarlo?

a) `chmod 000 archivo`
b) `chattr +i archivo`
c) `setfacl -m u:root:--- archivo`
d) `chattr +a archivo`

<details><summary>Respuesta</summary>

**b)** `chattr +i archivo`

El atributo inmutable (`+i`) impide cualquier modificacion al archivo: no se puede escribir, eliminar, renombrar o crear enlaces. Ni siquiera root puede hacerlo sin primero quitar el atributo con `chattr -i`.
</details>

### Pregunta 5
Con una umask de 0027, ¿que permisos tendran los nuevos archivos creados?

a) 750 (rwxr-x---)
b) 640 (rw-r-----)
c) 027 (----w-rwx)
d) 733 (rwx-wx-wx)

<details><summary>Respuesta</summary>

**b)** 640 (rw-r-----)

Los archivos se crean con permisos base 666 menos la umask: 666 - 027 = 640 (rw-r-----). Los directorios se crean con 777 - 027 = 750 (rwxr-x---).
</details>

### Pregunta 6
¿Que efecto tiene el bit SGID (2000) en un directorio?

a) Los ejecutables dentro se ejecutan como root
b) Los nuevos archivos creados heredan el grupo del directorio
c) Solo el propietario puede eliminar archivos
d) El directorio se vuelve inmutable

<details><summary>Respuesta</summary>

**b)** Los nuevos archivos creados heredan el grupo del directorio

El SGID en un directorio hace que los nuevos archivos y subdirectorios creados dentro hereden el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. Es muy util para directorios de trabajo compartido.
</details>

### Pregunta 7
¿Que indica el simbolo `+` al final de los permisos en la salida de `ls -l`?

a) El archivo tiene atributos extendidos con chattr
b) El archivo tiene ACLs POSIX configuradas
c) El archivo esta cifrado
d) El archivo tiene el bit SUID activado

<details><summary>Respuesta</summary>

**b)** El archivo tiene ACLs POSIX configuradas

Cuando `ls -l` muestra un `+` despues de los permisos (ej: `-rw-r--r--+`), indica que el archivo tiene ACLs POSIX adicionales. Se pueden ver con `getfacl`.
</details>

### Pregunta 8
¿Que comando elimina todas las ACLs de un archivo, dejando solo los permisos Unix tradicionales?

a) `setfacl -x archivo`
b) `setfacl --remove-all archivo`
c) `setfacl -b archivo`
d) `setfacl -d archivo`

<details><summary>Respuesta</summary>

**c)** `setfacl -b archivo`

La opcion `-b` (o `--remove-all`) elimina todas las ACLs extendidas del archivo, dejando solo los permisos Unix basicos. `-x` elimina entradas especificas, `-k` elimina ACLs por defecto, `-d` establece ACLs por defecto.
</details>

### Pregunta 9
¿Que atributo de `chattr` permite solo añadir contenido a un archivo sin poder modificar o eliminar el contenido existente?

a) `+i` (immutable)
b) `+a` (append-only)
c) `+s` (secure deletion)
d) `+u` (undeletable)

<details><summary>Respuesta</summary>

**b)** `+a` (append-only)

El atributo append-only (`+a`) permite añadir datos al final del archivo pero no modificar ni eliminar el contenido existente. Es ideal para archivos de log donde se quiere garantizar que los registros no puedan ser alterados.
</details>

### Pregunta 10
Un administrador ejecuta `chmod 750 archivo.txt` en un archivo que tiene ACLs. ¿Que efecto tiene esto en las ACLs?

a) Las ACLs se eliminan automaticamente
b) La mascara (mask) de las ACLs se modifica al valor del grupo (5 = r-x)
c) No tiene ningun efecto en las ACLs
d) Los permisos del grupo en las ACLs se sobreescriben

<details><summary>Respuesta</summary>

**b)** La mascara (mask) de las ACLs se modifica al valor del grupo (5 = r-x)

Cuando se usa `chmod` en un archivo con ACLs, los permisos del grupo que muestra `ls -l` corresponden en realidad a la mascara de las ACLs. Por lo tanto, `chmod 750` establece la mascara a `r-x`, limitando los permisos efectivos de todas las entradas ACL de usuarios y grupos adicionales.
</details>

### Pregunta 11

Que comando copia las ACLs de archivo.txt a destino.txt preservando todas las entradas?

a) cp --acl archivo.txt destino.txt
b) getfacl archivo.txt | setfacl --set-file=- destino.txt
c) setfacl --copy archivo.txt destino.txt
d) cp -p archivo.txt destino.txt

<details><summary>Respuesta</summary>

**b) Correcta**

La combinacion getfacl | setfacl --set-file=- permite volcar todas las ACLs de un archivo y aplicarlas exactamente al destino. cp -p preserva permisos basicos pero no ACLs extendidas.

</details>

### Pregunta 12

Un archivo tiene permisos -rwsr-xr-x. Que indica la s en la posicion del bit de ejecucion del propietario?

a) El archivo requiere contrasena para ejecutarse
b) El bit SUID esta activo: el proceso se ejecuta con los privilegios del propietario del archivo
c) El archivo es un enlace simbolico seguro
d) El archivo tiene el bit SGID activo

<details><summary>Respuesta</summary>

**b) Correcta**

La s en la posicion de ejecucion del propietario indica que el bit SUID (Set User ID) esta activo. Cuando se ejecuta, el proceso adquiere los privilegios del propietario, no del usuario que lo ejecuta.

</details>

### Pregunta 13

Con umask 0077, que permisos tendran los nuevos directorios creados?

a) drwxr-xr-x (755)
b) drwx------ (700)
c) drwxrwxrwx (777)
d) drwxr-x--- (750)

<details><summary>Respuesta</summary>

**b) Correcta**

Los directorios se crean con permisos base 777. Restando la umask: 777 - 077 = 700 (drwx------). Solo el propietario tiene acceso completo, los demas no tienen ningun permiso.

</details>

### Pregunta 14

Que atributo de chattr sincroniza las escrituras al disco de forma sincrona, similar a abrir archivos con O_SYNC?

a) chattr +a archivo
b) chattr +S archivo
c) chattr +s archivo
d) chattr +D archivo

<details><summary>Respuesta</summary>

**b) Correcta**

El atributo +S (Synchronous) hace que todas las escrituras en el archivo se realicen de forma sincrona, equivalente a montar el sistema de archivos con la opcion sync. chattr +s es borrado seguro.

</details>

### Pregunta 15

Que comando hace un backup de todas las ACLs de /datos/ de forma recursiva a un archivo?

a) acl-backup -R /datos/ > backup.acl
b) getfacl -R /datos/ > backup_acls.txt
c) setfacl --backup /datos/ > backup_acls.txt
d) aclbackup /datos/ backup_acls.txt

<details><summary>Respuesta</summary>

**b) Correcta**

getfacl -R genera la salida de ACLs de todos los archivos y directorios de forma recursiva. El resultado puede restaurarse con setfacl --restore=backup_acls.txt.

</details>

### Pregunta 16

Que comando busca todos los archivos con el bit SUID activo en el sistema?

a) find / -perm /4000 -type f
b) find / -perm -4000 -type f
c) find / -suid -type f
d) locate --suid

<details><summary>Respuesta</summary>

**b) Correcta**

find / -perm -4000 -type f busca archivos donde el bit SUID (4000) esta activo. El prefijo - significa que el bit debe estar presente entre los permisos del archivo.

</details>

### Pregunta 17

Que resultado tiene setfacl -k /datos/proyecto/ sobre el directorio?

a) Elimina todas las ACLs incluyendo las de acceso
b) Elimina solo las ACLs por defecto del directorio
c) Establece la mascara a cero
d) Elimina las ACLs del grupo propietario

<details><summary>Respuesta</summary>

**b) Correcta**

La opcion -k elimina exclusivamente las ACLs por defecto (default ACLs) del directorio, manteniendo intactas las ACLs de acceso regulares. Para eliminar todas las ACLs se usa -b.

</details>

### Pregunta 18

Cual es la forma correcta de establecer la umask de forma persistente para todos los usuarios del sistema en Ubuntu/Debian?

a) Modificar UMASK en /etc/login.defs
b) Agregar umask 0027 en /etc/profile o /etc/profile.d/
c) Configurar session optional pam_umask.so umask=0027 en /etc/pam.d/common-session
d) Tanto b como c son metodos validos

<details><summary>Respuesta</summary>

**d) Correcta**

En sistemas modernos existen multiples metodos: /etc/profile o archivos en /etc/profile.d/ para shells interactivos, y el modulo pam_umask.so para todas las sesiones PAM incluyendo no interactivas.

</details>

### Pregunta 19

Un directorio tiene permisos 2770 y grupo equipo. Un usuario del grupo equipo crea un archivo nuevo. Que grupo tendra el archivo?

a) El grupo primario del usuario
b) equipo
c) root
d) El grupo del proceso padre

<details><summary>Respuesta</summary>

**b) Correcta**

El bit SGID (2000) en un directorio hace que todos los archivos y subdirectorios creados hereden el grupo del directorio (equipo), sin importar el grupo primario del usuario que los crea. Fundamental para directorios compartidos.

</details>

### Pregunta 20

Que indica lsattr si muestra ----i--------e-- para un archivo?

a) El archivo tiene el atributo append-only e inmutable
b) El archivo tiene el atributo inmutable (i) y usa extents del sistema de archivos (e)
c) El archivo esta cifrado (e) e inmutable (i)
d) El atributo e significa enlace externo

<details><summary>Respuesta</summary>

**b) Correcta**

La letra i indica que el archivo es inmutable: no puede modificarse, eliminarse ni renombrarse. La e indica que usa extents del sistema de archivos ext4, que es el comportamiento por defecto en ext4.

</details>

### Pregunta 21

Que comando establece una ACL por defecto para que el grupo auditores tenga permiso de lectura en todos los nuevos archivos de /datos/reportes/?

<input type="text" class="fill-blank" data-answer="setfacl -d -m g:auditores:r /datos/reportes/" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**setfacl -d -m g:auditores:r /datos/reportes/**

La opcion -d establece ACL por defecto en el directorio. La opcion -m modifica o agrega la entrada. Los nuevos archivos y subdirectorios creados en /datos/reportes/ heredaran automaticamente esta ACL.

</details>

### Pregunta 22

Que comando muestra todas las ACLs de los archivos en /var/www/ de forma recursiva?

<input type="text" class="fill-blank" data-answer="getfacl -R /var/www/" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**getfacl -R /var/www/**

getfacl -R recorre recursivamente el directorio y muestra las ACLs de cada archivo y subdirectorio. La salida puede redirigirse para hacer backup: getfacl -R /var/www/ > backup.acl

</details>

### Pregunta 23

Que comando elimina el atributo inmutable del archivo /etc/resolv.conf para poder modificarlo?

<input type="text" class="fill-blank" data-answer="chattr -i /etc/resolv.conf" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chattr -i /etc/resolv.conf**

chattr -i elimina el atributo inmutable (i). Sin este atributo el archivo puede modificarse normalmente. Para volverlo inmutable se usa chattr +i. Solo root puede modificar estos atributos.

</details>

### Pregunta 24

Que comando de find localiza todos los archivos con el bit SGID activo en el sistema?

<input type="text" class="fill-blank" data-answer="find / -perm -2000 -type f" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find / -perm -2000 -type f**

find con -perm -2000 busca archivos donde el bit SGID (2000) esta activo. Para directorios se usa -type d. El prefijo - significa que el bit debe estar presente en los permisos.

</details>

### Pregunta 25

Que comando restaura las ACLs guardadas en el archivo backup_acls.txt?

<input type="text" class="fill-blank" data-answer="setfacl --restore=backup_acls.txt" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**setfacl --restore=backup_acls.txt**

setfacl --restore lee el formato de salida de getfacl -R y aplica todas las ACLs al sistema de archivos. Es la forma estandar de restaurar ACLs tras un backup.

</details>
