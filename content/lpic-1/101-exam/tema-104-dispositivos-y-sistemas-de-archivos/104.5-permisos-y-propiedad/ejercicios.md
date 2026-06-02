---
title: "104.5 Gestionar permisos y propiedad de archivos - Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-104
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "104"
subtema: "104.5"
---

# 104.5 Gestionar permisos y propiedad de archivos - Ejercicios

### Pregunta 1

Cual es el valor octal de los permisos `rwxr-x---`?

a) `740`
b) `750`
c) `751`
d) `760`

<details>
<summary>Respuesta</summary>

**b) `750`**

Para convertir permisos simbolicos a octales se suma el valor de cada permiso: `r=4`, `w=2`, `x=1`. Para el propietario: `rwx` = 4+2+1 = **7**. Para el grupo: `r-x` = 4+0+1 = **5**. Para otros: `---` = 0+0+0 = **0**. El resultado es `750`. La opcion `a` (740) corresponderia a `rwxr-----`. La opcion `c` (751) corresponderia a `rwxr-x--x`. La opcion `d` (760) corresponderia a `rwxrw----`.

</details>

---

### Pregunta 2

Si la umask es `027`, que permisos tendran los archivos recien creados?

a) `750` (rwxr-x---)
b) `640` (rw-r-----)
c) `644` (rw-r--r--)
d) `600` (rw-------)

<details>
<summary>Respuesta</summary>

**b) `640` (rw-r-----)**

La umask define que permisos se quitan al crear archivos y directorios. Los archivos tienen permisos base `666` (rw-rw-rw-) y los directorios `777` (rwxrwxrwx). Para archivos: `666 - 027 = 640` (rw-r-----). Para directorios seria: `777 - 027 = 750` (rwxr-x---). Con umask `027`, el propietario puede leer y escribir, el grupo solo leer, y otros no tienen ningun acceso. La opcion `a` (750) seria el resultado para directorios, no para archivos.

</details>

---

### Pregunta 3

El archivo `/usr/bin/passwd` tiene permisos `-rwsr-xr-x` y es propiedad de root. Que significa la `s` en la posicion de ejecucion del propietario?

a) El archivo solo puede ser ejecutado por root
b) El archivo tiene permisos de escritura especiales para el grupo
c) El archivo se ejecuta con los permisos del propietario (root) independientemente de quien lo ejecute
d) El archivo tiene el sticky bit activado

<details>
<summary>Respuesta</summary>

**c) El archivo se ejecuta con los permisos del propietario (root) independientemente de quien lo ejecute**

La `s` en la posicion de ejecucion del propietario indica el bit **SUID (Set User ID)**. Cuando un usuario normal ejecuta `/usr/bin/passwd`, el proceso se ejecuta con los permisos de root (propietario del archivo), permitiendole modificar `/etc/shadow` que solo root puede escribir. Sin SUID, los usuarios normales no podrian cambiar sus contrasenas. El valor octal completo de estos permisos es `4755` (4=SUID, 7=rwx, 5=r-x, 5=r-x). El sticky bit se muestra como `t` en la posicion de otros, no como `s` en la del propietario.

</details>

---

### Pregunta 4

Un administrador necesita configurar el directorio `/proyecto` para trabajo en equipo. Los archivos nuevos deben heredar el grupo `developers` y los usuarios no deben poder borrar archivos de otros. Cual es el valor octal correcto?

a) `2770`
b) `1770`
c) `3770`
d) `4770`

<details>
<summary>Respuesta</summary>

**c) `3770`**

El valor `3770` combina SGID (2) + Sticky bit (1) = 3, mas los permisos `rwxrwx---` (770). El SGID en un directorio hace que los archivos creados dentro hereden automaticamente el grupo del directorio (`developers`), en lugar del grupo primario del usuario. El Sticky bit impide que un usuario pueda borrar archivos de otros miembros, aunque tenga permiso de escritura en el directorio. Solo el propietario del archivo, el propietario del directorio o root pueden eliminar archivos. `2770` solo tiene SGID sin sticky bit. `1770` solo tiene sticky bit sin SGID. `4770` tiene SUID que no tiene efecto en directorios en Linux.

</details>

---

### Pregunta 5

Cual es la diferencia entre SGID aplicado a un archivo ejecutable y SGID aplicado a un directorio?

a) En archivos ejecuta como grupo del archivo; en directorios no tiene efecto
b) En archivos permite borrado restringido; en directorios hereda el grupo
c) En archivos ejecuta como grupo del archivo; en directorios los archivos nuevos heredan el grupo del directorio
d) No hay diferencia, el comportamiento es identico en ambos casos

<details>
<summary>Respuesta</summary>

**c) En archivos ejecuta como grupo del archivo; en directorios los archivos nuevos heredan el grupo del directorio**

SGID (Set Group ID) tiene comportamientos distintos segun donde se aplique. En un archivo ejecutable, hace que el proceso se ejecute con los permisos del grupo del archivo, no del grupo del usuario que lo ejecuta. En un directorio, hace que los archivos y subdirectorios creados dentro hereden el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. SGID en directorios es fundamental para el trabajo colaborativo en equipo y es mucho mas frecuente en el examen LPIC-1. Sin SGID, los archivos creados tendrian el grupo primario del usuario, complicando el trabajo colaborativo.

</details>

---

### Pregunta 6

Un usuario ejecuta los siguientes comandos con umask `022`:
```bash
touch archivo.txt
chmod 644 archivo.txt
chmod u+x archivo.txt
chmod g+w archivo.txt
chmod o= archivo.txt
```
Cuales son los permisos finales en formato octal?

a) `644`
b) `764`
c) `760`
d) `740`

<details>
<summary>Respuesta</summary>

**c) `760`**

Paso a paso: (1) `touch` con umask 022 crea el archivo con permisos `644` (rw-r--r--). (2) `chmod 644` no cambia nada, sigue en `644` (rw-r--r--). (3) `chmod u+x` anade ejecucion al propietario: `744` (rwxr--r--). (4) `chmod g+w` anade escritura al grupo: `764` (rwxrw-r--). (5) `chmod o=` quita todos los permisos a otros: `760` (rwxrw----). El operador `=` sin permisos despues establece exactamente cero permisos. Los permisos finales son `760`.

</details>

---

### Pregunta 7

En la salida de `ls -l`, que indica una `T` mayuscula en la posicion de ejecucion de otros?

a) El archivo tiene permisos de ejecucion para todos los usuarios
b) El sticky bit esta activo y el permiso de ejecucion para otros esta activo
c) El SUID esta activo pero sin permiso de ejecucion
d) El sticky bit esta activo pero el permiso de ejecucion para otros NO esta activo

<details>
<summary>Respuesta</summary>

**d) El sticky bit esta activo pero el permiso de ejecucion para otros NO esta activo**

En `ls -l`, la mayuscula/minuscula de los indicadores de permisos especiales indica si el permiso de ejecucion subyacente esta presente. `t` minuscula = sticky bit activo + ejecucion activa para otros. `T` mayuscula = sticky bit activo pero SIN ejecucion para otros. El mismo principio aplica a SUID (`s`/`S` en posicion del propietario) y SGID (`s`/`S` en posicion del grupo). La mayuscula indica que el permiso especial esta configurado pero no tiene sentido practico completo porque falta el permiso de ejecucion subyacente.

</details>

---

### Pregunta 8

Un administrador ejecuta `umask 077` en su sesion de shell. Afecta esto a los archivos creados por otros usuarios del sistema?

a) Si, la umask se aplica globalmente a todos los usuarios del sistema
b) Si, pero solo a los usuarios del mismo grupo que el administrador
c) No, la umask es un valor por proceso/sesion y solo afecta a esa sesion
d) No, porque solo root puede establecer la umask

<details>
<summary>Respuesta</summary>

**c) No, la umask es un valor por proceso/sesion y solo afecta a esa sesion**

La umask es un atributo que pertenece a cada proceso y sesion de shell de forma independiente. Cambiar la umask en una sesion solo afecta a los archivos creados en ESA sesion especifica. Para que un cambio de umask afecte a un usuario especifico de forma persistente, se configura en `~/.bashrc` o `~/.profile`. Para afectar a todos los usuarios, se configura en `/etc/profile`, `/etc/bash.bashrc` o en `/etc/login.defs` (variable `UMASK`). Cualquier usuario puede establecer su propia umask, no solo root.

</details>

---

### Pregunta 9

Cual de los siguientes comandos cambia el propietario a `sandra` y el grupo a `developers` del directorio `/var/www` y todo su contenido de forma recursiva?

a) `chgrp -R sandra:developers /var/www`
b) `chown sandra:developers /var/www`
c) `chown -R sandra:developers /var/www`
d) `chmod -R sandra:developers /var/www`

<details>
<summary>Respuesta</summary>

**c) `chown -R sandra:developers /var/www`**

El comando `chown` cambia el propietario y el grupo de un archivo o directorio. La sintaxis `chown usuario:grupo` establece ambos en un solo comando. La opcion `-R` (recursivo) aplica el cambio a todo el contenido del directorio, incluyendo subdirectorios y archivos. La opcion `b` es correcta en sintaxis pero no es recursiva (falta `-R`). `chgrp` solo cambia el grupo, no acepta la sintaxis `usuario:grupo`. `chmod` cambia permisos, no propietarios ni grupos.

</details>

---

### Pregunta 10

Que permiso necesita un usuario en un directorio para poder acceder a los archivos que contiene y entrar con `cd`?

a) `r` (lectura)
b) `w` (escritura)
c) `x` (ejecucion)
d) `rw` (lectura y escritura)

<details>
<summary>Respuesta</summary>

**c) `x` (ejecucion)**

En directorios, el permiso `x` (ejecucion) permite acceder al directorio con `cd` y acceder a los archivos contenidos dentro. Sin `x`, no se puede entrar al directorio ni acceder a nada en su interior, aunque se tenga `r`. El permiso `r` en un directorio permite listar su contenido (con `ls`), pero sin `x` no se puede acceder a los archivos listados. El permiso `w` permite crear, eliminar y renombrar archivos dentro del directorio. Para acceder a un archivo, se necesita permiso `x` en TODOS los directorios de la ruta completa. Esta distincion de permisos en directorios es un tema frecuente en el examen LPIC-1.

</details>

---

### Pregunta 11

Un archivo tiene permisos `644`. Que permisos en formato simbolico le corresponden?

a) `rwxr--r--`
b) `rw-r--r--`
c) `rw-rw-r--`
d) `rw-------`

<details><summary>Respuesta</summary>

**b) `rw-r--r--`**

Para convertir de octal a simbolico se descompone cada digito: `6` = `rw-` (4+2), `4` = `r--` (4), `4` = `r--` (4). El propietario puede leer y escribir, el grupo solo puede leer, y otros solo pueden leer. Este es el permiso tipico por defecto para archivos regulares creados con umask `022`. La opcion `a` seria `754`, la opcion `c` seria `664` y la opcion `d` seria `600`.

</details>

---

### Pregunta 12

Cual es el efecto de ejecutar `chmod o= archivo.txt`?

a) Asigna todos los permisos a otros
b) Elimina todos los permisos de otros (---)
c) Establece los permisos de otros igual que los del propietario
d) No tiene efecto, es una sintaxis invalida

<details><summary>Respuesta</summary>

**b) Elimina todos los permisos de otros (---)**

El operador `=` en `chmod` establece exactamente los permisos especificados. Cuando se usa `o=` sin ningun permiso despues del signo igual, se establecen exactamente cero permisos para otros. Es equivalente a `chmod o-rwx archivo.txt`. Esta es una forma comun de restringir el acceso de otros usuarios a un archivo. Por ejemplo, si el archivo tenia `644`, despues de `chmod o= archivo.txt` tendria `640`.

</details>

---

### Pregunta 13

Si la umask es `077`, que permisos tendran los directorios recien creados?

a) `777` (rwxrwxrwx)
b) `700` (rwx------)
c) `000` (---------)
d) `644` (rw-r--r--)

<details><summary>Respuesta</summary>

**b) `700` (rwx------)**

Los directorios tienen permisos base `777`. Con umask `077`, el calculo es: `777 - 077 = 700` (rwx------). Esto significa que solo el propietario tendra acceso completo al directorio; el grupo y otros no tendran ningun permiso. Los archivos con esta umask tendrian `600` (666 - 077 = 600, rw-------). La umask `077` es una configuracion muy restrictiva usada para maximizar la seguridad.

</details>

---

### Pregunta 14

Un usuario normal intenta cambiar el propietario de un archivo con `chown root archivo.txt`. Que ocurre?

a) El propietario cambia a root correctamente
b) El comando falla porque solo root puede cambiar el propietario de archivos
c) El propietario cambia pero se pierden los permisos especiales
d) El archivo se borra automaticamente por seguridad

<details><summary>Respuesta</summary>

**b) El comando falla porque solo root puede cambiar el propietario de archivos**

En Linux, solo root puede cambiar el propietario de un archivo con `chown`. Un usuario normal puede cambiar el grupo de sus propios archivos, pero solo a grupos a los que pertenece, usando `chgrp` o `chown :grupo`. Esta restriccion de seguridad evita que un usuario pueda "regalar" archivos a otros usuarios, lo que podria usarse para eludir cuotas de disco o crear confusiones de propiedad.

</details>

---

### Pregunta 15

Un directorio tiene permisos `drwxr-x---` y pertenece al grupo `developers`. Un usuario que pertenece al grupo `developers` intenta crear un archivo dentro. Que ocurre?

a) Puede crear el archivo porque tiene permiso de ejecucion en el grupo
b) No puede crear el archivo porque el grupo no tiene permiso de escritura
c) Puede crear el archivo porque tiene permiso de lectura
d) Solo root puede crear archivos en ese directorio

<details><summary>Respuesta</summary>

**b) No puede crear el archivo porque el grupo no tiene permiso de escritura**

Los permisos del grupo son `r-x` (lectura y ejecucion). Para crear archivos dentro de un directorio se necesita permiso de **escritura** (`w`). El permiso `x` permite entrar al directorio con `cd` y el permiso `r` permite listar su contenido con `ls`, pero sin `w` no se pueden crear, eliminar ni renombrar archivos dentro. Solo el propietario (que tiene `rwx`) puede crear archivos en este directorio.

</details>

---

### Pregunta 16

Que valor octal representa los permisos `rwxrwxrwt` (incluyendo el sticky bit)?

a) `777`
b) `1777`
c) `7777`
d) `2777`

<details><summary>Respuesta</summary>

**b) `1777`**

El sticky bit tiene valor `1` en el cuarto digito (digito especial). Los permisos `rwxrwxrwx` corresponden a `777`. La `t` en la posicion de ejecucion de otros indica que el sticky bit esta activo Y el permiso de ejecucion esta presente. El valor total es `1777`. Este es el permiso clasico del directorio `/tmp`, donde todos pueden escribir pero nadie puede borrar archivos de otros usuarios. Si fuera `T` (mayuscula) indicaria sticky bit sin permiso de ejecucion para otros.

</details>

---

### Pregunta 17

Que comando muestra la umask actual en formato simbolico?

a) `umask`
b) `umask -S`
c) `umask -v`
d) `umask --symbolic`

<details><summary>Respuesta</summary>

**b) `umask -S`**

`umask -S` muestra la umask actual en formato simbolico, por ejemplo `u=rwx,g=rx,o=rx` (que corresponde a umask `022`). Sin opciones, `umask` muestra el valor en formato numerico octal (por ejemplo, `0022`). El formato simbolico muestra los permisos que SI se asignan, mientras que el formato numerico muestra los permisos que se QUITAN. Las opciones `-v` y `--symbolic` no son opciones validas de umask.

</details>

---

### Pregunta 18

Un archivo ejecutable tiene permisos `-rwxr-Sr-x`. Que indica la `S` mayuscula en la posicion del grupo?

a) El SGID esta activo y el grupo tiene permiso de ejecucion
b) El SGID esta activo pero el grupo NO tiene permiso de ejecucion
c) El sticky bit esta activo en el grupo
d) El SUID esta activo en la posicion del grupo

<details><summary>Respuesta</summary>

**b) El SGID esta activo pero el grupo NO tiene permiso de ejecucion**

La `S` mayuscula en la posicion de ejecucion del grupo indica que el bit SGID (Set Group ID) esta activado pero el permiso de ejecucion para el grupo NO esta presente. Cuando el SGID esta activo Y el permiso de ejecucion esta presente, se muestra como `s` minuscula. La misma logica aplica a SUID en la posicion del propietario (`s`/`S`) y al sticky bit en la posicion de otros (`t`/`T`). Un SGID con `S` (sin ejecucion) generalmente no tiene efecto practico en archivos ejecutables.

</details>

---

### Pregunta 19

Donde se configura la umask de forma permanente para TODOS los usuarios del sistema?

a) `~/.bashrc`
b) `~/.profile`
c) `/etc/profile`
d) `/etc/passwd`

<details><summary>Respuesta</summary>

**c) `/etc/profile`**

`/etc/profile` es un archivo de configuracion global que se ejecuta al iniciar sesion para todos los usuarios del sistema. Agregar `umask 027` en este archivo afectara a todos los usuarios. Los archivos `~/.bashrc` y `~/.profile` son configuraciones personales de cada usuario individual. `/etc/passwd` contiene informacion de cuentas de usuario, no configuracion de umask. Otros lugares para configurar umask global incluyen `/etc/bash.bashrc` y `/etc/login.defs` (variable `UMASK`).

</details>

---

### Pregunta 20

Si un directorio tiene SGID activado y pertenece al grupo `webteam`, que grupo tendra un archivo creado dentro por un usuario cuyo grupo primario es `sandra`?

a) `sandra`
b) `webteam`
c) `root`
d) Depende de la umask del usuario

<details><summary>Respuesta</summary>

**b) `webteam`**

Cuando el SGID (Set Group ID) esta activado en un directorio, los archivos y subdirectorios creados dentro heredan automaticamente el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. En este caso, aunque el usuario tiene grupo primario `sandra`, el archivo creado pertenecera al grupo `webteam`. Esta es la funcion principal del SGID en directorios y es fundamental para el trabajo colaborativo en equipo. La umask afecta los permisos, no la asignacion de grupo.

</details>

---

### Pregunta 21

Escribe el comando para dar permisos `rwxr-xr-x` (755) al archivo `script.sh` usando notacion octal.

<input type="text" class="fill-blank" data-answer="chmod 755 script.sh" data-alt="chmod 755 ./script.sh" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chmod 755 script.sh**

El modo numerico `755` establece: propietario `rwx` (7=4+2+1), grupo `r-x` (5=4+1), otros `r-x` (5=4+1). Estos son los permisos tipicos para scripts ejecutables y directorios. El propietario tiene control total, mientras que el grupo y otros pueden leer y ejecutar pero no modificar.

</details>

---

### Pregunta 22

Escribe el comando para cambiar el propietario a `sandra` y el grupo a `developers` del archivo `proyecto.txt`.

<input type="text" class="fill-blank" data-answer="chown sandra:developers proyecto.txt" data-alt="chown sandra.developers proyecto.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chown sandra:developers proyecto.txt**

El comando `chown` con la sintaxis `usuario:grupo` permite cambiar tanto el propietario como el grupo en un solo comando. Tambien se puede usar un punto en lugar de los dos puntos: `chown sandra.developers proyecto.txt`. Para cambiar solo el grupo se usa `chown :developers proyecto.txt` o el comando `chgrp developers proyecto.txt`.

</details>

---

### Pregunta 23

Escribe el comando para establecer el SGID y los permisos `rwxrwx---` (770) en el directorio `/proyecto`.

<input type="text" class="fill-blank" data-answer="chmod 2770 /proyecto" data-alt="chmod g+s,u=rwx,g=rwx,o= /proyecto" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chmod 2770 /proyecto**

El valor `2770` combina el SGID (2 en el cuarto digito) con los permisos `rwxrwx---` (770). El SGID en un directorio hace que los archivos creados dentro hereden automaticamente el grupo del directorio. Esto es esencial para directorios de trabajo colaborativo donde todos los miembros del grupo necesitan acceso a los archivos creados por cualquier miembro.

</details>

---

### Pregunta 24

Escribe el comando para establecer la umask a `027` en la sesion actual.

<input type="text" class="fill-blank" data-answer="umask 027" data-alt="umask 0027" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**umask 027**

El comando `umask 027` establece la mascara de creacion de archivos para la sesion actual. Con esta umask, los archivos nuevos tendran permisos `640` (666-027) y los directorios `750` (777-027). El propietario tendra permisos completos, el grupo tendra lectura (y ejecucion en directorios), y otros no tendran ningun acceso. El cero inicial es opcional (tanto `027` como `0027` son validos).

</details>

---

### Pregunta 25

Escribe el comando para anadir el permiso de ejecucion para todos los usuarios (propietario, grupo y otros) al archivo `programa.sh`.

<input type="text" class="fill-blank" data-answer="chmod a+x programa.sh" data-alt="chmod +x programa.sh,chmod ugo+x programa.sh" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chmod a+x programa.sh**

El operador `a` significa "all" (todos: propietario, grupo y otros). El operador `+` anade el permiso especificado. `x` es el permiso de ejecucion. Tambien es valido usar `chmod +x programa.sh` (sin especificar `a`, se aplica a todos por defecto) o `chmod ugo+x programa.sh`. Este es un comando muy comun para hacer ejecutable un script recien creado.

</details>
