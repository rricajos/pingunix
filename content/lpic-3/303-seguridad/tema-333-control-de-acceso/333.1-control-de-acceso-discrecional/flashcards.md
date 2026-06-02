---
title: "333.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "333.1"
---

# Flashcards: 333.1 - Control De Acceso Discrecional

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-001">
<div class="flashcard-front">

**P:** Un directorio tiene permisos `drwxrwxrwt`. ¿Que significa la `t` al final?

</div>
<div class="flashcard-back">

**R:** b). El sticky bit esta establecido; solo el propietario puede eliminar sus archivos  El sticky bit (`t` en la posicion de ejecucion de "otros") en un directorio significa que solo el propietario del archivo, el propietario del directorio o root pueden eliminar o renombrar archivos dentro del directorio, incluso si otros tienen permiso de escritura. Ejemplo clasico: `/tmp`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando establece una ACL por defecto para que el usuario "juan" tenga permisos rwx en todos los nuevos archivos creados dentro de `/datos/proyecto/`?

</div>
<div class="flashcard-back">

**R:** b). `setfacl -d -m u:juan:rwx /datos/proyecto/`  La opcion `-d` (o `--default`) establece una ACL por defecto en el directorio. Los nuevos archivos y subdirectorios creados dentro heredaran automaticamente esta ACL.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-003">
<div class="flashcard-front">

**P:** Un archivo tiene la siguiente salida de `getfacl`: `user:juan:rw-` y `mask::r--`. ¿Cuales son los permisos efectivos de juan?

</div>
<div class="flashcard-back">

**R:** b). r--  La mascara (mask) limita los permisos efectivos de las entradas ACL de usuarios y grupos adicionales. Los permisos efectivos son la interseccion de la ACL del usuario y la mascara: `rw-` AND `r--` = `r--`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando hace que un archivo sea completamente inmutable, impidiendo incluso a root modificarlo o eliminarlo?

</div>
<div class="flashcard-back">

**R:** b). `chattr +i archivo`  El atributo inmutable (`+i`) impide cualquier modificacion al archivo: no se puede escribir, eliminar, renombrar o crear enlaces. Ni siquiera root puede hacerlo sin primero quitar el atributo con `chattr -i`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-005">
<div class="flashcard-front">

**P:** Con una umask de 0027, ¿que permisos tendran los nuevos archivos creados?

</div>
<div class="flashcard-back">

**R:** b). 640 (rw-r-----)  Los archivos se crean con permisos base 666 menos la umask: 666 - 027 = 640 (rw-r-----). Los directorios se crean con 777 - 027 = 750 (rwxr-x---).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que efecto tiene el bit SGID (2000) en un directorio?

</div>
<div class="flashcard-back">

**R:** b). Los nuevos archivos creados heredan el grupo del directorio  El SGID en un directorio hace que los nuevos archivos y subdirectorios creados dentro hereden el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. Es muy util para directorios de trabajo compartido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que indica el simbolo `+` al final de los permisos en la salida de `ls -l`?

</div>
<div class="flashcard-back">

**R:** b). El archivo tiene ACLs POSIX configuradas  Cuando `ls -l` muestra un `+` despues de los permisos (ej: `-rw-r--r--+`), indica que el archivo tiene ACLs POSIX adicionales. Se pueden ver con `getfacl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando elimina todas las ACLs de un archivo, dejando solo los permisos Unix tradicionales?

</div>
<div class="flashcard-back">

**R:** c). `setfacl -b archivo`  La opcion `-b` (o `--remove-all`) elimina todas las ACLs extendidas del archivo, dejando solo los permisos Unix basicos. `-x` elimina entradas especificas, `-k` elimina ACLs por defecto, `-d` establece ACLs por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que atributo de `chattr` permite solo añadir contenido a un archivo sin poder modificar o eliminar el contenido existente?

</div>
<div class="flashcard-back">

**R:** b). `+a` (append-only)  El atributo append-only (`+a`) permite añadir datos al final del archivo pero no modificar ni eliminar el contenido existente. Es ideal para archivos de log donde se quiere garantizar que los registros no puedan ser alterados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador ejecuta `chmod 750 archivo.txt` en un archivo que tiene ACLs. ¿Que efecto tiene esto en las ACLs?

</div>
<div class="flashcard-back">

**R:** b). La mascara (mask) de las ACLs se modifica al valor del grupo (5 = r-x)  Cuando se usa `chmod` en un archivo con ACLs, los permisos del grupo que muestra `ls -l` corresponden en realidad a la mascara de las ACLs. Por lo tanto, `chmod 750` establece la mascara a `r-x`, limitando los permisos efectivos de todas las entradas ACL de usuarios y grupos adicionales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-011">
<div class="flashcard-front">

**P:** Que comando copia las ACLs de archivo.txt a destino.txt preservando todas las entradas?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La combinacion getfacl | setfacl --set-file=- permite volcar todas las ACLs de un archivo y aplicarlas exactamente al destino. cp -p preserva permisos basicos pero no ACLs extendidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-012">
<div class="flashcard-front">

**P:** Un archivo tiene permisos -rwsr-xr-x. Que indica la s en la posicion del bit de ejecucion del propietario?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La s en la posicion de ejecucion del propietario indica que el bit SUID (Set User ID) esta activo. Cuando se ejecuta, el proceso adquiere los privilegios del propietario, no del usuario que lo ejecuta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-013">
<div class="flashcard-front">

**P:** Con umask 0077, que permisos tendran los nuevos directorios creados?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Los directorios se crean con permisos base 777. Restando la umask: 777 - 077 = 700 (drwx------). Solo el propietario tiene acceso completo, los demas no tienen ningun permiso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-014">
<div class="flashcard-front">

**P:** Que atributo de chattr sincroniza las escrituras al disco de forma sincrona, similar a abrir archivos con O_SYNC?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El atributo +S (Synchronous) hace que todas las escrituras en el archivo se realicen de forma sincrona, equivalente a montar el sistema de archivos con la opcion sync. chattr +s es borrado seguro.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-015">
<div class="flashcard-front">

**P:** Que comando hace un backup de todas las ACLs de /datos/ de forma recursiva a un archivo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. getfacl -R genera la salida de ACLs de todos los archivos y directorios de forma recursiva. El resultado puede restaurarse con setfacl --restore=backup_acls.txt.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-016">
<div class="flashcard-front">

**P:** Que comando busca todos los archivos con el bit SUID activo en el sistema?

</div>
<div class="flashcard-back">

**R:** b) Correcta. find / -perm -4000 -type f busca archivos donde el bit SUID (4000) esta activo. El prefijo - significa que el bit debe estar presente entre los permisos del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-017">
<div class="flashcard-front">

**P:** Que resultado tiene setfacl -k /datos/proyecto/ sobre el directorio?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opcion -k elimina exclusivamente las ACLs por defecto (default ACLs) del directorio, manteniendo intactas las ACLs de acceso regulares. Para eliminar todas las ACLs se usa -b.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-018">
<div class="flashcard-front">

**P:** Cual es la forma correcta de establecer la umask de forma persistente para todos los usuarios del sistema en Ubuntu/Debian?

</div>
<div class="flashcard-back">

**R:** d) Correcta. En sistemas modernos existen multiples metodos: /etc/profile o archivos en /etc/profile.d/ para shells interactivos, y el modulo pam_umask.so para todas las sesiones PAM incluyendo no interactivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-019">
<div class="flashcard-front">

**P:** Un directorio tiene permisos 2770 y grupo equipo. Un usuario del grupo equipo crea un archivo nuevo. Que grupo tendra el archivo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El bit SGID (2000) en un directorio hace que todos los archivos y subdirectorios creados hereden el grupo del directorio (equipo), sin importar el grupo primario del usuario que los crea. Fundamental para directorios compartidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-020">
<div class="flashcard-front">

**P:** Que indica lsattr si muestra ----i--------e-- para un archivo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La letra i indica que el archivo es inmutable: no puede modificarse, eliminarse ni renombrarse. La e indica que usa extents del sistema de archivos ext4, que es el comportamiento por defecto en ext4.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-021">
<div class="flashcard-front">

**P:** Que comando establece una ACL por defecto para que el grupo auditores tenga permiso de lectura en todos los nuevos archivos de /datos/reportes/?

</div>
<div class="flashcard-back">

**R:** setfacl -d -m g:auditores:r /datos/reportes/. La opcion -d establece ACL por defecto en el directorio. La opcion -m modifica o agrega la entrada. Los nuevos archivos y subdirectorios creados en /datos/reportes/ heredaran automaticamente esta ACL.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-022">
<div class="flashcard-front">

**P:** Que comando muestra todas las ACLs de los archivos en /var/www/ de forma recursiva?

</div>
<div class="flashcard-back">

**R:** getfacl -R /var/www/. getfacl -R recorre recursivamente el directorio y muestra las ACLs de cada archivo y subdirectorio. La salida puede redirigirse para hacer backup: getfacl -R /var/www/ > backup.acl

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-023">
<div class="flashcard-front">

**P:** Que comando elimina el atributo inmutable del archivo /etc/resolv.conf para poder modificarlo?

</div>
<div class="flashcard-back">

**R:** chattr -i /etc/resolv.conf. chattr -i elimina el atributo inmutable (i). Sin este atributo el archivo puede modificarse normalmente. Para volverlo inmutable se usa chattr +i. Solo root puede modificar estos atributos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-024">
<div class="flashcard-front">

**P:** Que comando de find localiza todos los archivos con el bit SGID activo en el sistema?

</div>
<div class="flashcard-back">

**R:** find / -perm -2000 -type f. find con -perm -2000 busca archivos donde el bit SGID (2000) esta activo. Para directorios se usa -type d. El prefijo - significa que el bit debe estar presente en los permisos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-025">
<div class="flashcard-front">

**P:** Que comando restaura las ACLs guardadas en el archivo backup_acls.txt?

</div>
<div class="flashcard-back">

**R:** setfacl --restore=backup_acls.txt. setfacl --restore lee el formato de salida de getfacl -R y aplica todas las ACLs al sistema de archivos. Es la forma estandar de restaurar ACLs tras un backup.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Domina los permisos especiales (SUID/SGID/sticky), las ACLs POSIX (getfacl/setfa...

</div>
<div class="flashcard-back">

**R:** Domina los permisos especiales (SUID/SGID/sticky), las ACLs POSIX (getfacl/setfacl) incluyendo ACLs por defecto y mascara, y los atributos extendidos con chattr.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: SUID en archivos ejecutables es un riesgo de seguridad potencial. Audita regular...

</div>
<div class="flashcard-back">

**R:** SUID en archivos ejecutables es un riesgo de seguridad potencial. Audita regularmente archivos con SUID/SGID. SUID no funciona en scripts interpretados por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `chmod` en un archivo con ACLs modifica la mascara, no los permisos del grupo pr...

</div>
<div class="flashcard-back">

**R:** `chmod` en un archivo con ACLs modifica la mascara, no los permisos del grupo propietario. Un `+` al final de `ls -l` indica presencia de ACLs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `chattr +i` hace un archivo completamente inmutable: ni siquiera root puede modi...

</div>
<div class="flashcard-back">

**R:** `chattr +i` hace un archivo completamente inmutable: ni siquiera root puede modificarlo o eliminarlo sin quitar primero el atributo. Esto es muy util para proteger archivos criticos como `/etc/passwd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `i`?

</div>
<div class="flashcard-back">

**R:** No se puede modificar, eliminar, renombrar ni enlazar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `a`?

</div>
<div class="flashcard-back">

**R:** Solo se puede añadir contenido (ideal para logs)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `s`?

</div>
<div class="flashcard-back">

**R:** Los bloques se sobreescriben al eliminar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `u`?

</div>
<div class="flashcard-back">

**R:** El contenido se guarda al eliminar (permite recuperar)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son umask?

</div>
<div class="flashcard-back">

**R:** La umask define los permisos que se **eliminan** al crear nuevos archivos y directorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son ACLs POSIX (Listas de Control de Acceso)?

</div>
<div class="flashcard-back">

**R:** Las ACLs POSIX extienden el modelo de permisos tradicional permitiendo definir permisos para usuarios y grupos adicionales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.1">
</div>

<div class="flashcard" data-id="333.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

