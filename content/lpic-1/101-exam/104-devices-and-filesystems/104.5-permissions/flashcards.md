---
title: "104.5 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "104.5"
---

# Flashcards: 104.5 - Permisos Y Propiedad

> 44 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-001">
<div class="flashcard-front">

**P:** Cual es el valor octal de los permisos `rwxr-x---`?

</div>
<div class="flashcard-back">

**R:** b) `750`. Para convertir permisos simbolicos a octales se suma el valor de cada permiso: `r=4`, `w=2`, `x=1`. Para el propietario: `rwx` = 4+2+1 = **7**. Para el grupo: `r-x` = 4+0+1 = **5**. Para otros: `---` = 0+0+0 = **0**. El resultado es `750`. La opcion `a` (740) corresponderia a `rwxr-----`. La opcion `c` (751) corresponderia a `rwxr-x--x`. La opcion `d` (760) corresponderia a `rwxrw----`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-002">
<div class="flashcard-front">

**P:** Si la umask es `027`, que permisos tendran los archivos recien creados?

</div>
<div class="flashcard-back">

**R:** b) `640` (rw-r-----). La umask define que permisos se quitan al crear archivos y directorios. Los archivos tienen permisos base `666` (rw-rw-rw-) y los directorios `777` (rwxrwxrwx). Para archivos: `666 - 027 = 640` (rw-r-----). Para directorios seria: `777 - 027 = 750` (rwxr-x---). Con umask `027`, el propietario puede leer y escribir, el grupo solo leer, y otros no tienen ningun acceso. La opcion `a` (750) seria el resultado para directorios, no para archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-003">
<div class="flashcard-front">

**P:** El archivo `/usr/bin/passwd` tiene permisos `-rwsr-xr-x` y es propiedad de root. Que significa la `s` en la posicion de ejecucion del propietario?

</div>
<div class="flashcard-back">

**R:** c) El archivo se ejecuta con los permisos del propietario (root) independientemente de quien lo ejecute. La `s` en la posicion de ejecucion del propietario indica el bit **SUID (Set User ID)**. Cuando un usuario normal ejecuta `/usr/bin/passwd`, el proceso se ejecuta con los permisos de root (propietario del archivo), permitiendole modificar `/etc/shadow` que solo root puede escribir. Sin SUID, los usuarios normales no podrian cambiar sus contrasenas. El valor octal completo de estos permisos es `4755` (4=SUID, 7=rwx, 5=r-x, 5=r-x). El sticky bit se muestra como `t` en la posicion de otros, no como `s` en la del propietario.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-004">
<div class="flashcard-front">

**P:** Un administrador necesita configurar el directorio `/proyecto` para trabajo en equipo. Los archivos nuevos deben heredar el grupo `developers` y los usuarios no deben poder borrar archivos de otros. Cual es el valor octal correcto?

</div>
<div class="flashcard-back">

**R:** c) `3770`. El valor `3770` combina SGID (2) + Sticky bit (1) = 3, mas los permisos `rwxrwx---` (770). El SGID en un directorio hace que los archivos creados dentro hereden automaticamente el grupo del directorio (`developers`), en lugar del grupo primario del usuario. El Sticky bit impide que un usuario pueda borrar archivos de otros miembros, aunque tenga permiso de escritura en el directorio. Solo el propietario del archivo, el propietario del directorio o root pueden eliminar archivos. `2770` solo tiene SGID sin sticky bit. `1770` solo tiene sticky bit sin SGID. `4770` tiene SUID que no tiene efecto en directorios en Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-005">
<div class="flashcard-front">

**P:** Cual es la diferencia entre SGID aplicado a un archivo ejecutable y SGID aplicado a un directorio?

</div>
<div class="flashcard-back">

**R:** c) En archivos ejecuta como grupo del archivo; en directorios los archivos nuevos heredan el grupo del directorio. SGID (Set Group ID) tiene comportamientos distintos segun donde se aplique. En un archivo ejecutable, hace que el proceso se ejecute con los permisos del grupo del archivo, no del grupo del usuario que lo ejecuta. En un directorio, hace que los archivos y subdirectorios creados dentro hereden el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. SGID en directorios es fundamental para el trabajo colaborativo en equipo y es mucho mas frecuente en el examen LPIC-1. Sin SGID, los archivos creados tendrian el grupo primario del usuario, complicando el trabajo colaborativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-006">
<div class="flashcard-front">

**P:** Un usuario ejecuta los siguientes comandos con umask `022`: ```bash touch archivo.txt chmod 644 archivo.txt chmod u+x archivo.txt chmod g+w archivo.txt chmod o= archivo.txt ``` Cuales son los permisos finales en formato octal?

</div>
<div class="flashcard-back">

**R:** c) `760`. Paso a paso: (1) `touch` con umask 022 crea el archivo con permisos `644` (rw-r--r--). (2) `chmod 644` no cambia nada, sigue en `644` (rw-r--r--). (3) `chmod u+x` anade ejecucion al propietario: `744` (rwxr--r--). (4) `chmod g+w` anade escritura al grupo: `764` (rwxrw-r--). (5) `chmod o=` quita todos los permisos a otros: `760` (rwxrw----). El operador `=` sin permisos despues establece exactamente cero permisos. Los permisos finales son `760`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-007">
<div class="flashcard-front">

**P:** En la salida de `ls -l`, que indica una `T` mayuscula en la posicion de ejecucion de otros?

</div>
<div class="flashcard-back">

**R:** d) El sticky bit esta activo pero el permiso de ejecucion para otros NO esta activo. En `ls -l`, la mayuscula/minuscula de los indicadores de permisos especiales indica si el permiso de ejecucion subyacente esta presente. `t` minuscula = sticky bit activo + ejecucion activa para otros. `T` mayuscula = sticky bit activo pero SIN ejecucion para otros. El mismo principio aplica a SUID (`s`/`S` en posicion del propietario) y SGID (`s`/`S` en posicion del grupo). La mayuscula indica que el permiso especial esta configurado pero no tiene sentido practico completo porque falta el permiso de ejecucion subyacente.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-008">
<div class="flashcard-front">

**P:** Un administrador ejecuta `umask 077` en su sesion de shell. Afecta esto a los archivos creados por otros usuarios del sistema?

</div>
<div class="flashcard-back">

**R:** c) No, la umask es un valor por proceso/sesion y solo afecta a esa sesion. La umask es un atributo que pertenece a cada proceso y sesion de shell de forma independiente. Cambiar la umask en una sesion solo afecta a los archivos creados en ESA sesion especifica. Para que un cambio de umask afecte a un usuario especifico de forma persistente, se configura en `~/.bashrc` o `~/.profile`. Para afectar a todos los usuarios, se configura en `/etc/profile`, `/etc/bash.bashrc` o en `/etc/login.defs` (variable `UMASK`). Cualquier usuario puede establecer su propia umask, no solo root.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-009">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos cambia el propietario a `sandra` y el grupo a `developers` del directorio `/var/www` y todo su contenido de forma recursiva?

</div>
<div class="flashcard-back">

**R:** c) `chown -R sandra:developers /var/www`. El comando `chown` cambia el propietario y el grupo de un archivo o directorio. La sintaxis `chown usuario:grupo` establece ambos en un solo comando. La opcion `-R` (recursivo) aplica el cambio a todo el contenido del directorio, incluyendo subdirectorios y archivos. La opcion `b` es correcta en sintaxis pero no es recursiva (falta `-R`). `chgrp` solo cambia el grupo, no acepta la sintaxis `usuario:grupo`. `chmod` cambia permisos, no propietarios ni grupos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-010">
<div class="flashcard-front">

**P:** Que permiso necesita un usuario en un directorio para poder acceder a los archivos que contiene y entrar con `cd`?

</div>
<div class="flashcard-back">

**R:** c) `x` (ejecucion). En directorios, el permiso `x` (ejecucion) permite acceder al directorio con `cd` y acceder a los archivos contenidos dentro. Sin `x`, no se puede entrar al directorio ni acceder a nada en su interior, aunque se tenga `r`. El permiso `r` en un directorio permite listar su contenido (con `ls`), pero sin `x` no se puede acceder a los archivos listados. El permiso `w` permite crear, eliminar y renombrar archivos dentro del directorio. Para acceder a un archivo, se necesita permiso `x` en TODOS los directorios de la ruta completa. Esta distincion de permisos en directorios es un tema frecuente en el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-011">
<div class="flashcard-front">

**P:** Un archivo tiene permisos `644`. Que permisos en formato simbolico le corresponden?

</div>
<div class="flashcard-back">

**R:** b) `rw-r--r--`. Para convertir de octal a simbolico se descompone cada digito: `6` = `rw-` (4+2), `4` = `r--` (4), `4` = `r--` (4). El propietario puede leer y escribir, el grupo solo puede leer, y otros solo pueden leer. Este es el permiso tipico por defecto para archivos regulares creados con umask `022`. La opcion `a` seria `754`, la opcion `c` seria `664` y la opcion `d` seria `600`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-012">
<div class="flashcard-front">

**P:** Cual es el efecto de ejecutar `chmod o= archivo.txt`?

</div>
<div class="flashcard-back">

**R:** b) Elimina todos los permisos de otros (---). El operador `=` en `chmod` establece exactamente los permisos especificados. Cuando se usa `o=` sin ningun permiso despues del signo igual, se establecen exactamente cero permisos para otros. Es equivalente a `chmod o-rwx archivo.txt`. Esta es una forma comun de restringir el acceso de otros usuarios a un archivo. Por ejemplo, si el archivo tenia `644`, despues de `chmod o= archivo.txt` tendria `640`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-013">
<div class="flashcard-front">

**P:** Si la umask es `077`, que permisos tendran los directorios recien creados?

</div>
<div class="flashcard-back">

**R:** b) `700` (rwx------). Los directorios tienen permisos base `777`. Con umask `077`, el calculo es: `777 - 077 = 700` (rwx------). Esto significa que solo el propietario tendra acceso completo al directorio; el grupo y otros no tendran ningun permiso. Los archivos con esta umask tendrian `600` (666 - 077 = 600, rw-------). La umask `077` es una configuracion muy restrictiva usada para maximizar la seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-014">
<div class="flashcard-front">

**P:** Un usuario normal intenta cambiar el propietario de un archivo con `chown root archivo.txt`. Que ocurre?

</div>
<div class="flashcard-back">

**R:** b) El comando falla porque solo root puede cambiar el propietario de archivos. En Linux, solo root puede cambiar el propietario de un archivo con `chown`. Un usuario normal puede cambiar el grupo de sus propios archivos, pero solo a grupos a los que pertenece, usando `chgrp` o `chown :grupo`. Esta restriccion de seguridad evita que un usuario pueda "regalar" archivos a otros usuarios, lo que podria usarse para eludir cuotas de disco o crear confusiones de propiedad.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-015">
<div class="flashcard-front">

**P:** Un directorio tiene permisos `drwxr-x---` y pertenece al grupo `developers`. Un usuario que pertenece al grupo `developers` intenta crear un archivo dentro. Que ocurre?

</div>
<div class="flashcard-back">

**R:** b) No puede crear el archivo porque el grupo no tiene permiso de escritura. Los permisos del grupo son `r-x` (lectura y ejecucion). Para crear archivos dentro de un directorio se necesita permiso de **escritura** (`w`). El permiso `x` permite entrar al directorio con `cd` y el permiso `r` permite listar su contenido con `ls`, pero sin `w` no se pueden crear, eliminar ni renombrar archivos dentro. Solo el propietario (que tiene `rwx`) puede crear archivos en este directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-016">
<div class="flashcard-front">

**P:** Que valor octal representa los permisos `rwxrwxrwt` (incluyendo el sticky bit)?

</div>
<div class="flashcard-back">

**R:** b) `1777`. El sticky bit tiene valor `1` en el cuarto digito (digito especial). Los permisos `rwxrwxrwx` corresponden a `777`. La `t` en la posicion de ejecucion de otros indica que el sticky bit esta activo Y el permiso de ejecucion esta presente. El valor total es `1777`. Este es el permiso clasico del directorio `/tmp`, donde todos pueden escribir pero nadie puede borrar archivos de otros usuarios. Si fuera `T` (mayuscula) indicaria sticky bit sin permiso de ejecucion para otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-017">
<div class="flashcard-front">

**P:** Que comando muestra la umask actual en formato simbolico?

</div>
<div class="flashcard-back">

**R:** b) `umask -S`. `umask -S` muestra la umask actual en formato simbolico, por ejemplo `u=rwx,g=rx,o=rx` (que corresponde a umask `022`). Sin opciones, `umask` muestra el valor en formato numerico octal (por ejemplo, `0022`). El formato simbolico muestra los permisos que SI se asignan, mientras que el formato numerico muestra los permisos que se QUITAN. Las opciones `-v` y `--symbolic` no son opciones validas de umask.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-018">
<div class="flashcard-front">

**P:** Un archivo ejecutable tiene permisos `-rwxr-Sr-x`. Que indica la `S` mayuscula en la posicion del grupo?

</div>
<div class="flashcard-back">

**R:** b) El SGID esta activo pero el grupo NO tiene permiso de ejecucion. La `S` mayuscula en la posicion de ejecucion del grupo indica que el bit SGID (Set Group ID) esta activado pero el permiso de ejecucion para el grupo NO esta presente. Cuando el SGID esta activo Y el permiso de ejecucion esta presente, se muestra como `s` minuscula. La misma logica aplica a SUID en la posicion del propietario (`s`/`S`) y al sticky bit en la posicion de otros (`t`/`T`). Un SGID con `S` (sin ejecucion) generalmente no tiene efecto practico en archivos ejecutables.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-019">
<div class="flashcard-front">

**P:** Donde se configura la umask de forma permanente para TODOS los usuarios del sistema?

</div>
<div class="flashcard-back">

**R:** c) `/etc/profile`. `/etc/profile` es un archivo de configuracion global que se ejecuta al iniciar sesion para todos los usuarios del sistema. Agregar `umask 027` en este archivo afectara a todos los usuarios. Los archivos `~/.bashrc` y `~/.profile` son configuraciones personales de cada usuario individual. `/etc/passwd` contiene informacion de cuentas de usuario, no configuracion de umask. Otros lugares para configurar umask global incluyen `/etc/bash.bashrc` y `/etc/login.defs` (variable `UMASK`).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-020">
<div class="flashcard-front">

**P:** Si un directorio tiene SGID activado y pertenece al grupo `webteam`, que grupo tendra un archivo creado dentro por un usuario cuyo grupo primario es `sandra`?

</div>
<div class="flashcard-back">

**R:** b) `webteam`. Cuando el SGID (Set Group ID) esta activado en un directorio, los archivos y subdirectorios creados dentro heredan automaticamente el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. En este caso, aunque el usuario tiene grupo primario `sandra`, el archivo creado pertenecera al grupo `webteam`. Esta es la funcion principal del SGID en directorios y es fundamental para el trabajo colaborativo en equipo. La umask afecta los permisos, no la asignacion de grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para dar permisos `rwxr-xr-x` (755) al archivo `script.sh` usando notacion octal. <input type="text" class="fill-blank" data-answer="chmod 755 script.sh" data-alt="chmod 755 ./script.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** chmod 755 script.sh. El modo numerico `755` establece: propietario `rwx` (7=4+2+1), grupo `r-x` (5=4+1), otros `r-x` (5=4+1). Estos son los permisos tipicos para scripts ejecutables y directorios. El propietario tiene control total, mientras que el grupo y otros pueden leer y ejecutar pero no modificar.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para cambiar el propietario a `sandra` y el grupo a `developers` del archivo `proyecto.txt`. <input type="text" class="fill-blank" data-answer="chown sandra:developers proyecto.txt" data-alt="chown sandra.developers proyecto.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** chown sandra:developers proyecto.txt. El comando `chown` con la sintaxis `usuario:grupo` permite cambiar tanto el propietario como el grupo en un solo comando. Tambien se puede usar un punto en lugar de los dos puntos: `chown sandra.developers proyecto.txt`. Para cambiar solo el grupo se usa `chown :developers proyecto.txt` o el comando `chgrp developers proyecto.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para establecer el SGID y los permisos `rwxrwx---` (770) en el directorio `/proyecto`. <input type="text" class="fill-blank" data-answer="chmod 2770 /proyecto" data-alt="chmod g+s,u=rwx,g=rwx,o= /proyecto" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** chmod 2770 /proyecto. El valor `2770` combina el SGID (2 en el cuarto digito) con los permisos `rwxrwx---` (770). El SGID en un directorio hace que los archivos creados dentro hereden automaticamente el grupo del directorio. Esto es esencial para directorios de trabajo colaborativo donde todos los miembros del grupo necesitan acceso a los archivos creados por cualquier miembro.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para establecer la umask a `027` en la sesion actual. <input type="text" class="fill-blank" data-answer="umask 027" data-alt="umask 0027" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** umask 027. El comando `umask 027` establece la mascara de creacion de archivos para la sesion actual. Con esta umask, los archivos nuevos tendran permisos `640` (666-027) y los directorios `750` (777-027). El propietario tendra permisos completos, el grupo tendra lectura (y ejecucion en directorios), y otros no tendran ningun acceso. El cero inicial es opcional (tanto `027` como `0027` son validos).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para anadir el permiso de ejecucion para todos los usuarios (propietario, grupo y otros) al archivo `programa.sh`. <input type="text" class="fill-blank" data-answer="chmod a+x programa.sh" data-alt="chmod +x programa.sh,chmod ugo+x programa.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** chmod a+x programa.sh. El operador `a` significa "all" (todos: propietario, grupo y otros). El operador `+` anade el permiso especificado. `x` es el permiso de ejecucion. Tambien es valido usar `chmod +x programa.sh` (sin especificar `a`, se aplica a todos por defecto) o `chmod ugo+x programa.sh`. Este es un comando muy comun para hacer ejecutable un script recien creado.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-026">
<div class="flashcard-front">

**P:** Que comando muestra las ACL (Access Control Lists) de un archivo?

</div>
<div class="flashcard-back">

**R:** `getfacl archivo`. El comando `getfacl` muestra las listas de control de acceso POSIX de un archivo o directorio. La salida incluye el propietario, grupo, permisos base (user::, group::, other::) y las entradas ACL adicionales (user:nombre:permisos, group:nombre:permisos). Si el archivo tiene ACLs extendidas, `ls -l` mostrara un `+` al final de los permisos (ej: `rw-r--r--+`). Las ACLs permiten dar permisos granulares a usuarios o grupos especificos mas alla del modelo tradicional propietario/grupo/otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-027">
<div class="flashcard-front">

**P:** Como se otorgan permisos de lectura y escritura al usuario `carlos` sobre el archivo `informe.txt` usando ACLs?

</div>
<div class="flashcard-back">

**R:** `setfacl -m u:carlos:rw informe.txt`. El comando `setfacl` modifica las ACLs. La opcion `-m` (modify) anade o modifica una entrada ACL. La sintaxis `u:carlos:rw` especifica: `u` = usuario, `carlos` = nombre del usuario, `rw` = permisos de lectura y escritura. Para verificar se usa `getfacl informe.txt`. Para otorgar permisos a un grupo se usa `g:grupo:permisos`. Para eliminar una entrada ACL especifica se usa `setfacl -x u:carlos informe.txt`. Para eliminar TODAS las ACLs se usa `setfacl -b informe.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-028">
<div class="flashcard-front">

**P:** Que es la ACL mask y como afecta a los permisos efectivos?

</div>
<div class="flashcard-back">

**R:** La mask en una ACL define los permisos maximos que pueden tener las entradas de usuario nombrado, grupo propietario y grupo nombrado. Actua como un techo: si la mask es `r--`, un usuario con ACL `rw-` solo tendra efectivamente `r--`. La mask se muestra con `getfacl` como `mask::rwx` y se calcula automaticamente al usar `setfacl -m`. Se puede establecer manualmente con `setfacl -m m::r archivo`. Importante: la mask NO afecta al propietario del archivo (user::) ni a otros (other::). Cuando se ejecuta `chmod` sobre un archivo con ACLs, este modifica la mask, no los permisos del grupo base.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-029">
<div class="flashcard-front">

**P:** Que son las ACLs por defecto (default ACLs) y donde se aplican?

</div>
<div class="flashcard-back">

**R:** Las ACLs por defecto solo se pueden establecer en directorios y definen las ACLs que heredaran automaticamente los archivos y subdirectorios creados dentro. Se configuran con `setfacl -d -m u:carlos:rwx /proyecto` o `setfacl -m d:u:carlos:rwx /proyecto`. La `d:` al inicio indica que es una ACL por defecto. Los subdirectorios tambien heredan las ACLs por defecto, propagando los permisos en cascada. `getfacl` las muestra como `default:user:carlos:rwx`. Las ACLs por defecto son esenciales para mantener permisos consistentes en directorios de trabajo colaborativo sin necesidad de ejecutar setfacl manualmente en cada archivo nuevo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-030">
<div class="flashcard-front">

**P:** En `ls -l`, un archivo muestra permisos `rw-r--r--+`. Que indica el signo `+` al final?

</div>
<div class="flashcard-back">

**R:** El `+` indica que el archivo tiene ACLs extendidas (Access Control Lists) ademas de los permisos POSIX estandar. Los permisos mostrados por `ls -l` solo reflejan los permisos base (propietario, grupo, otros), pero hay entradas ACL adicionales que otorgan o restringen acceso a usuarios o grupos especificos. Para ver las ACLs completas se debe usar `getfacl archivo`. Este detalle es importante en el examen: si ves un `+` en la salida de `ls -l`, significa que los permisos efectivos no son solo los que se muestran; hay reglas ACL adicionales que se deben consultar.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-031">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar TODAS las ACLs de un archivo, dejando solo los permisos POSIX basicos. <input type="text" class="fill-blank" data-answer="setfacl -b archivo" data-alt="setfacl --remove-all archivo" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** setfacl -b archivo. La opcion `-b` (o `--remove-all`) elimina todas las ACLs extendidas del archivo, dejando solo los permisos POSIX basicos (propietario, grupo, otros). Para eliminar solo una entrada ACL especifica se usa `-x` (ej: `setfacl -x u:carlos archivo`). Para eliminar solo las ACLs por defecto de un directorio se usa `-k` (ej: `setfacl -k /proyecto`).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-032">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `chmod -R 755 /dir` y `chmod -R u=rwX,g=rX,o=rX /dir`?

</div>
<div class="flashcard-back">

**R:** `chmod -R 755` aplica permisos `rwxr-xr-x` a TODO (archivos y directorios). `chmod -R u=rwX,g=rX,o=rX` usa `X` mayuscula que solo anade ejecucion a directorios y archivos que YA tienen ejecucion. La `X` mayuscula es inteligente: aplica `x` solo si el objeto es un directorio o si ya tiene algun bit de ejecucion activo. Esto es crucial porque `chmod -R 755` haria ejecutables TODOS los archivos (incluyendo .txt, .conf, etc.), lo cual es un problema de seguridad. La forma con `X` es la practica recomendada para aplicar permisos recursivos: directorios obtienen `755` y archivos obtienen `644`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-033">
<div class="flashcard-front">

**P:** Un archivo tiene permisos `---r-xrwx`. El usuario `ana`, propietaria del archivo, intenta leerlo. Que ocurre?

</div>
<div class="flashcard-back">

**R:** Ana NO puede leer el archivo. Linux evalua los permisos en orden estricto: primero comprueba si el usuario es el propietario y aplica SOLO los permisos del propietario (`---`). Aunque los permisos de grupo (`r-x`) y otros (`rwx`) permiten lectura, Linux NO los considera una vez que ha identificado al usuario como propietario. Esta es una trampa clasica del examen LPIC-1: los permisos del propietario siempre tienen prioridad absoluta, incluso si son mas restrictivos que los del grupo o de otros. Ana tendria que ejecutar `chmod u+r archivo` para poder leerlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-034">
<div class="flashcard-front">

**P:** Que comando cambia SOLO el grupo de un archivo sin modificar el propietario?

</div>
<div class="flashcard-back">

**R:** `chgrp grupo archivo` o `chown :grupo archivo`. Ambos cambian solo el grupo. `chgrp` es el comando especifico para cambiar grupos. `chown :grupo` (con dos puntos antes del grupo y sin usuario) tambien funciona. Un usuario normal puede cambiar el grupo de sus propios archivos, pero solo a un grupo al que pertenezca. Solo root puede cambiar el grupo a cualquier grupo del sistema. Para ver los grupos a los que pertenece un usuario se usa `groups` o `id`. La opcion `-R` en ambos comandos aplica el cambio recursivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-035">
<div class="flashcard-front">

**P:** Que diferencia hay entre `chmod u+s archivo` y `chmod g+s archivo`?

</div>
<div class="flashcard-back">

**R:** `chmod u+s` establece el bit SUID (Set User ID): el archivo se ejecuta con los permisos del propietario. `chmod g+s` establece el bit SGID (Set Group ID): el archivo se ejecuta con los permisos del grupo del archivo. En notacion octal, SUID = `4000`, SGID = `2000`. Un ejemplo clasico de SUID es `/usr/bin/passwd` (ejecuta como root para modificar `/etc/shadow`). Un ejemplo de SGID en archivo es `/usr/bin/wall` (ejecuta con grupo `tty`). En directorios, SGID tiene un efecto diferente: los archivos creados heredan el grupo del directorio. SUID en directorios no tiene efecto en Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-036">
<div class="flashcard-front">

**P:** Escribe el comando para establecer ACLs por defecto en `/proyecto` de modo que el usuario `dev1` herede permisos `rwx` en todos los archivos nuevos. <input type="text" class="fill-blank" data-answer="setfacl -d -m u:dev1:rwx /proyecto" data-alt="setfacl -m d:u:dev1:rwx /proyecto" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** setfacl -d -m u:dev1:rwx /proyecto. La opcion `-d` indica que se trata de una ACL por defecto (default), que solo aplica a directorios. Todos los archivos y subdirectorios creados dentro de `/proyecto` heredaran automaticamente la entrada ACL `user:dev1:rwx`. Forma alternativa: `setfacl -m d:u:dev1:rwx /proyecto` (prefijo `d:` en la entrada). Las ACLs por defecto se propagan en cascada a subdirectorios nuevos. Se verifican con `getfacl /proyecto` (aparecen como `default:user:dev1:rwx`).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-037">
<div class="flashcard-front">

**P:** Cual es el efecto de ejecutar `chmod 0777 archivo` vs `chmod 777 archivo`?

</div>
<div class="flashcard-back">

**R:** Ambos establecen `rwxrwxrwx`, pero `chmod 0777` explicita que los bits especiales (SUID, SGID, sticky) se ponen a cero, eliminandolos si existian. `chmod 777` solo modifica los 3 digitos basicos y en la practica tambien limpia los bits especiales. Sin embargo, la forma con 4 digitos es mas explicita y recomendada cuando se quiere asegurar que no quedan bits especiales activos. Para preservar bits especiales existentes, se debe usar notacion simbolica (`chmod a=rwx`) o incluir el valor deseado en el cuarto digito (ej: `chmod 4777` para mantener SUID).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-038">
<div class="flashcard-front">

**P:** Un directorio tiene permisos `drwxrwxrwt` (/tmp). El usuario `pepe` intenta eliminar un archivo creado por `maria`. Que ocurre?

</div>
<div class="flashcard-back">

**R:** `pepe` NO puede eliminar el archivo de `maria`. La `t` indica el sticky bit, que restringe la eliminacion de archivos dentro del directorio. Con sticky bit activo, solo pueden eliminar un archivo: (1) el propietario del archivo, (2) el propietario del directorio, o (3) root. Aunque el directorio tiene permisos `rwx` para todos (777), el sticky bit impide que un usuario borre archivos de otros. El caso clasico es `/tmp` con permisos `1777`: todos pueden crear archivos, pero solo el creador puede borrarlos. Sin sticky bit, cualquier usuario con permiso `w` en el directorio podria borrar archivos de otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-039">
<div class="flashcard-front">

**P:** Que comando copia las ACLs de un archivo a otro?

</div>
<div class="flashcard-back">

**R:** `getfacl archivo_origen | setfacl --set-file=- archivo_destino`. Se usa `getfacl` para extraer las ACLs del archivo origen y se pasan por pipe a `setfacl --set-file=-` que lee la entrada estandar (indicado por `-`) y las aplica al archivo destino. Tambien se puede usar `getfacl archivo_origen > acl.txt` seguido de `setfacl --set-file=acl.txt archivo_destino` para hacerlo en dos pasos. La opcion `--set-file` reemplaza todas las ACLs existentes. Para crear una copia de respaldo de ACLs de un arbol de directorios se usa `getfacl -R /dir > backup.acl` y se restaura con `setfacl --restore=backup.acl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-040">
<div class="flashcard-front">

**P:** Escribe el comando para buscar todos los archivos con SUID activo en el sistema. <input type="text" class="fill-blank" data-answer="find / -perm -4000" data-alt="find / -perm -u+s,find / -perm /4000" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** find / -perm -4000. El `-perm -4000` busca archivos que tengan AL MENOS el bit SUID activo (el `-` antes del numero indica "al menos estos bits"). Para buscar SGID se usa `-perm -2000`, y para sticky bit `-perm -1000`. Auditar archivos SUID/SGID es una tarea de seguridad importante, ya que estos archivos se ejecutan con privilegios elevados y un atacante podria explotarlos. Variantes validas: `find / -perm -u+s` (notacion simbolica), `find / -perm /4000` (con `/` busca archivos con CUALQUIERA de los bits especificados).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-041">
<div class="flashcard-front">

**P:** Como afecta la umask a los permisos de archivos vs directorios? Si la umask es `022`, cuales son los permisos por defecto de cada uno?

</div>
<div class="flashcard-back">

**R:** Los permisos base son diferentes: archivos usan `666` (sin ejecucion por seguridad), directorios usan `777`. Con umask `022`: archivos = `666 - 022 = 644` (`rw-r--r--`), directorios = `777 - 022 = 755` (`rwxr-xr-x`). La razon de la diferencia es que la ejecucion en archivos es peligrosa (podria ejecutar codigo malicioso), mientras que en directorios es necesaria para poder acceder a ellos (`cd`). Trampa del examen: la umask NO es una resta aritmetica real; es una operacion de bits (AND NOT). En la practica la diferencia solo se nota con umasks como `023` donde `666 - 023` no seria `643` sino `644` porque los archivos no tienen bit `x` base.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-042">
<div class="flashcard-front">

**P:** Cual es la diferencia entre los operadores `+`, `-` y `=` en chmod?

</div>
<div class="flashcard-back">

**R:** `+` anade permisos sin afectar los existentes: `chmod g+w` anade escritura al grupo. `-` quita permisos sin afectar los demas: `chmod o-x` quita ejecucion de otros. `=` establece permisos exactos, reemplazando los anteriores: `chmod g=rx` establece exactamente `r-x` para el grupo, quitando cualquier otro permiso que tuviera. Uso especial: `chmod o=` (sin permisos despues de `=`) quita TODOS los permisos de otros. Se pueden combinar multiples operaciones separadas por coma: `chmod u=rwx,g=rx,o= archivo`. El operador `=` es el mas preciso y seguro cuando se quiere establecer un conjunto exacto de permisos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-043">
<div class="flashcard-front">

**P:** Escribe el comando para otorgar permisos de lectura al grupo `auditores` sobre el archivo `log.txt` usando ACLs. <input type="text" class="fill-blank" data-answer="setfacl -m g:auditores:r log.txt" data-alt="setfacl -m g:auditores:r-- log.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** setfacl -m g:auditores:r log.txt. La sintaxis para ACLs de grupo es `g:nombre_grupo:permisos`. El `-m` modifica/anade la entrada ACL. Esto permite que el grupo `auditores` lea el archivo sin necesidad de cambiar el grupo propietario ni los permisos base POSIX. Despues de este comando, `getfacl log.txt` mostrara una linea `group:auditores:r--`. En `ls -l`, el archivo mostrara el `+` indicador de ACLs extendidas. Para eliminar esta ACL especifica: `setfacl -x g:auditores log.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.5">
</div>

<div class="flashcard" data-id="104.5-fc-044">
<div class="flashcard-front">

**P:** Trampa del examen: si un archivo tiene permisos `rw-rw-r--` y se ejecuta `chmod 644 archivo`, cambia algo?

</div>
<div class="flashcard-back">

**R:** NO cambia nada. `644` en octal es exactamente `rw-r--r--`... pero espera: el archivo tenia `rw-rw-r--` que es `664`, no `644`. Asi que SI cambia: el grupo pierde el permiso de escritura. Este tipo de pregunta busca verificar que sabes convertir entre notacion simbolica y octal sin equivocarte. Los calculos rapidos son: `rw-` = 4+2 = 6, `rw-` = 4+2 = 6, `r--` = 4 = 4, total = `664`. Al aplicar `chmod 644`, el grupo pasa de `rw-` (6) a `r--` (4). Siempre convierte ambos valores antes de comparar.

</div>
</div>

---

