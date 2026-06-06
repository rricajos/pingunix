---
title: "104.6 Crear y cambiar enlaces duros y simbolicos - Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-104
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "104"
subtema: "104.6"
---

# 104.6 Crear y cambiar enlaces duros y simbolicos - Ejercicios

### Pregunta 1

Se crea un archivo y un enlace duro con los siguientes comandos:
```bash
echo "hola" > archivo.txt
ln archivo.txt enlace_duro.txt
```
Si luego se borra `archivo.txt`, que sucede al ejecutar `cat enlace_duro.txt`?

a) Se produce un error "No such file or directory"
b) Se muestra "hola" correctamente
c) Se muestra un archivo vacio
d) Se produce un error "dangling link"

<details>
<summary>Respuesta</summary>

**b) Se muestra "hola" correctamente**

Un enlace duro comparte el mismo inodo que el archivo original. Borrar `archivo.txt` solo elimina una de las entradas de directorio que apuntan a ese inodo. El conteo de enlaces pasa de 2 a 1, pero los datos en disco persisten porque aun queda una referencia (el enlace duro). Los datos solo se liberan del disco cuando el conteo de enlaces llega a 0 y ningun proceso tiene el archivo abierto. Esta es una diferencia clave con los enlaces simbolicos, que se "rompen" al borrar el archivo original.

</details>

---

### Pregunta 2

Cual de los siguientes comandos fallaria, asumiendo que `/home` y `/mnt/usb` son sistemas de archivos diferentes?

a) `ln -s /home/sandra/archivo.txt /mnt/usb/enlace.txt`
b) `ln /home/sandra/archivo.txt /home/sandra/enlace.txt`
c) `ln /home/sandra/archivo.txt /mnt/usb/enlace.txt`
d) `ln -s /home/sandra/directorio/ /tmp/enlace_dir`

<details>
<summary>Respuesta</summary>

**c) `ln /home/sandra/archivo.txt /mnt/usb/enlace.txt`**

Los enlaces duros NO pueden cruzar sistemas de archivos diferentes, ya que dependen del numero de inodo que es unico dentro de cada sistema de archivos. La opcion `c` intenta crear un enlace duro entre dos filesystems distintos (`/home` y `/mnt/usb`), lo cual es imposible. La opcion `a` funciona porque los enlaces simbolicos si pueden cruzar filesystems. La opcion `b` funciona porque ambos archivos estan en el mismo filesystem. La opcion `d` funciona porque los enlaces simbolicos pueden apuntar a directorios (los duros no).

</details>

---

### Pregunta 3

Dada la siguiente salida de `ls -li`:
```
1234567 -rw-r--r-- 3 sandra sandra 2048 Jan 10 file_a.txt
1234567 -rw-r--r-- 3 sandra sandra 2048 Jan 10 file_b.txt
9876543 lrwxrwxrwx 1 sandra sandra   10 Jan 10 file_c.txt -> file_a.txt
```
Cuantos enlaces duros apuntan al mismo inodo que `file_a.txt`?

a) 1
b) 2
c) 3
d) 4

<details>
<summary>Respuesta</summary>

**c) 3**

El numero de inodo de `file_a.txt` es `1234567`, y el conteo de enlaces duros (tercer campo) es `3`. Esto indica que hay 3 entradas de directorio apuntando al mismo inodo: `file_a.txt`, `file_b.txt` (que tiene el mismo inodo 1234567) y un tercer enlace duro que no se muestra en la salida pero que existe en algun otro lugar. `file_c.txt` es un enlace simbolico (tipo `l`, inodo diferente 9876543) que apunta a `file_a.txt`, pero no incrementa el conteo de enlaces duros del inodo original.

</details>

---

### Pregunta 4

Un directorio vacio `/home/sandra/proyecto` muestra un conteo de enlaces de 2 en `ls -ld`. Si se crean 3 subdirectorios dentro, cual sera el nuevo conteo de enlaces?

a) 3
b) 4
c) 5
d) 8

<details>
<summary>Respuesta</summary>

**c) 5**

Un directorio vacio tiene conteo de enlaces 2: la entrada del directorio padre que apunta a el y la entrada `.` dentro del propio directorio (que apunta a si mismo). Cada subdirectorio creado dentro anade 1 al conteo, porque cada subdirectorio contiene una entrada `..` que es un enlace duro al directorio padre. La formula es: conteo = 2 + numero de subdirectorios directos. Con 3 subdirectorios: 2 + 3 = 5. Las entradas `.` y `..` son enlaces duros que el sistema crea y mantiene automaticamente.

</details>

---

### Pregunta 5

Que comando encuentra todos los enlaces simbolicos rotos en `/etc`?

a) `find /etc -type l`
b) `find /etc -xtype l`
c) `find /etc -type f -links +1`
d) `ls -la /etc | grep "^l"`

<details>
<summary>Respuesta</summary>

**b) `find /etc -xtype l`**

La opcion `-xtype l` de `find` busca archivos que serian de tipo enlace simbolico (`l`) si NO se siguiera el enlace, pero cuyo destino no existe (es decir, el enlace esta roto o "dangling"). La opcion `a` (`-type l`) encuentra todos los enlaces simbolicos, tanto validos como rotos, sin distinguir entre ellos. La opcion `c` (`-links +1`) busca archivos con mas de un enlace duro, que es algo completamente diferente. La opcion `d` con `ls` listaria enlaces simbolicos por su indicador `l` al inicio pero no distinguiria los rotos.

</details>

---

### Pregunta 6

Un usuario crea un enlace simbolico con ruta relativa:
```bash
cd /home/sandra
ln -s documentos/informe.txt /tmp/enlace_informe.txt
```
Al acceder a `/tmp/enlace_informe.txt`, que ocurre?

a) Funciona correctamente, mostrando el contenido de `/home/sandra/documentos/informe.txt`
b) El enlace esta roto porque la ruta relativa se resuelve desde la ubicacion del enlace, buscando `/tmp/documentos/informe.txt`
c) Se produce un error de permisos porque `/tmp` no tiene acceso a `/home`
d) Funciona correctamente porque la ruta relativa se resuelve desde el directorio de trabajo actual

<details>
<summary>Respuesta</summary>

**b) El enlace esta roto porque la ruta relativa se resuelve desde la ubicacion del enlace, buscando `/tmp/documentos/informe.txt`**

La ruta relativa `documentos/informe.txt` se almacena literalmente en el enlace simbolico. Cuando se accede al enlace desde `/tmp/enlace_informe.txt`, el sistema resuelve la ruta relativa desde la ubicacion del enlace (no desde donde se creo), buscando `/tmp/documentos/informe.txt`, que no existe. La solucion es usar una ruta absoluta: `ln -s /home/sandra/documentos/informe.txt /tmp/enlace_informe.txt`. Las rutas relativas en enlaces simbolicos siempre son relativas a la ubicacion del enlace, no al directorio de trabajo al momento de la creacion.

</details>

---

### Pregunta 7

Cual de las siguientes afirmaciones sobre la diferencia entre copiar un archivo y crear un enlace duro es correcta?

a) Tanto copiar como crear un enlace duro duplican el espacio en disco
b) Un enlace duro crea un nuevo inodo con una copia independiente de los datos
c) Al modificar un enlace duro, los cambios se reflejan en el original porque comparten el mismo inodo
d) Al borrar el archivo original, tanto la copia como el enlace duro dejan de funcionar

<details>
<summary>Respuesta</summary>

**c) Al modificar un enlace duro, los cambios se reflejan en el original porque comparten el mismo inodo**

Un enlace duro comparte el mismo inodo y los mismos bloques de datos que el archivo original. No hay un "original" y una "copia"; ambos nombres son equivalentes y apuntan a los mismos datos. Modificar el contenido a traves de cualquier nombre afecta a todos los demas nombres que apuntan al mismo inodo. En cambio, copiar con `cp` crea un nuevo archivo con nuevo inodo y copia independiente de los datos, duplicando el espacio en disco. El enlace duro NO duplica espacio, solo anade una entrada de directorio. Al borrar el original, el enlace duro sigue funcionando (la copia con `cp` tambien, al ser independiente).

</details>

---

### Pregunta 8

Que muestra el comando `readlink -f enlace.txt` a diferencia de `readlink enlace.txt` (sin opciones)?

a) `readlink -f` muestra los permisos del enlace, `readlink` muestra el destino
b) `readlink -f` resuelve toda la cadena de enlaces y devuelve la ruta absoluta final, `readlink` muestra solo el destino inmediato
c) `readlink -f` fuerza la lectura del enlace, `readlink` solo verifica si existe
d) No hay diferencia, ambos muestran el mismo resultado

<details>
<summary>Respuesta</summary>

**b) `readlink -f` resuelve toda la cadena de enlaces y devuelve la ruta absoluta final, `readlink` muestra solo el destino inmediato**

`readlink` sin opciones muestra unicamente el destino inmediato (un nivel) del enlace simbolico. Si hay una cadena de enlaces (enlace3 -> enlace2 -> enlace1 -> original.txt), `readlink enlace3` solo mostraria `enlace2`. En cambio, `readlink -f` resuelve toda la cadena de enlaces recursivamente y devuelve la ruta absoluta canonicalizada del archivo final (por ejemplo, `/home/sandra/original.txt`). Variantes utiles: `readlink -e` requiere que todos los componentes existan, y `readlink -m` no requiere que ningun componente exista.

</details>

---

### Pregunta 9

Cual de las siguientes limitaciones aplica a los enlaces duros pero NO a los enlaces simbolicos?

a) No pueden apuntar a archivos en otros sistemas de archivos
b) No pueden apuntar a archivos que no existen
c) No se pueden identificar con `ls -l`
d) Todas las anteriores

<details>
<summary>Respuesta</summary>

**d) Todas las anteriores**

Los enlaces duros tienen tres limitaciones que los simbolicos no: (1) No pueden cruzar sistemas de archivos porque dependen del numero de inodo, que es unico por filesystem. (2) No pueden apuntar a archivos inexistentes; el archivo debe existir para poder crear otro enlace duro al mismo inodo. Los enlaces simbolicos si pueden apuntar a archivos que no existen (enlaces rotos). (3) Los enlaces duros no tienen indicador visual especial en `ls -l`; se ven identicos a archivos normales. Los simbolicos muestran `l` al inicio y `-> destino`. Ademas, los enlaces duros no pueden apuntar a directorios (con excepcion de `.` y `..` que el sistema gestiona automaticamente).

</details>

---

### Pregunta 10

Que tipo de archivo se muestra con el caracter `l` al inicio en la salida de `ls -l`?

a) Un archivo de log del sistema
b) Un enlace duro
c) Un enlace simbolico
d) Una biblioteca compartida (library)

<details>
<summary>Respuesta</summary>

**c) Un enlace simbolico**

El primer caracter en la salida de `ls -l` indica el tipo de archivo: `-` para archivo regular, `d` para directorio, `l` para enlace simbolico (symbolic link), `b` para dispositivo de bloque, `c` para dispositivo de caracter, `p` para pipe (FIFO) y `s` para socket. Los enlaces simbolicos ademas muestran `-> destino` al final de la linea, indicando a que archivo o directorio apuntan. Los enlaces duros NO tienen un indicador especial; se muestran como archivos regulares con `-` al inicio, ya que tecnicamente son simplemente otra entrada de directorio para el mismo inodo.

</details>

---

### Pregunta 11

Que informacion almacena un inodo de un archivo en Linux?

a) Solo el nombre del archivo y su tamano
b) El nombre del archivo, permisos, propietario y timestamps
c) Permisos, propietario, tamano, timestamps y punteros a bloques de datos, pero NO el nombre del archivo
d) Unicamente los punteros a los bloques de datos en disco

<details><summary>Respuesta</summary>

**c) Permisos, propietario, tamano, timestamps y punteros a bloques de datos, pero NO el nombre del archivo**

El inodo almacena toda la metainformacion del archivo: tipo de archivo, permisos, propietario (UID) y grupo (GID), tamano, timestamps (atime, mtime, ctime), conteo de enlaces duros y punteros a los bloques de datos en disco. Sin embargo, el nombre del archivo NO se almacena en el inodo, sino en la entrada del directorio que asocia un nombre con un numero de inodo. Esta es la razon por la cual un mismo inodo puede tener multiples nombres (enlaces duros). Se puede ver el inodo con `ls -i` y la informacion completa con `stat`.

</details>

---

### Pregunta 12

Un administrador ejecuta `ln -s /var/log /home/sandra/logs`. Que ocurre si posteriormente se elimina el directorio `/var/log`?

a) El enlace `/home/sandra/logs` se elimina automaticamente
b) El enlace `/home/sandra/logs` sigue existiendo pero esta roto (dangling link)
c) El enlace `/home/sandra/logs` se convierte automaticamente en un enlace duro
d) El sistema impide eliminar `/var/log` porque tiene un enlace simbolico apuntando a el

<details><summary>Respuesta</summary>

**b) El enlace `/home/sandra/logs` sigue existiendo pero esta roto (dangling link)**

Los enlaces simbolicos contienen la ruta al archivo o directorio destino. Si el destino se elimina, el enlace simbolico sigue existiendo como archivo (con su propio inodo), pero al intentar acceder a el se obtiene un error "No such file or directory". Este tipo de enlace se denomina "roto" o "dangling". El sistema no impide la eliminacion del destino ni elimina automaticamente los enlaces que apuntan a el. Se pueden encontrar enlaces rotos con `find /ruta -xtype l`. Esta es una diferencia fundamental con los enlaces duros, que mantienen los datos mientras quede al menos una referencia.

</details>

---

### Pregunta 13

Cual de los siguientes comandos crea correctamente un enlace simbolico al directorio `/etc/nginx`?

a) `ln /etc/nginx /home/sandra/nginx_config`
b) `ln -s /etc/nginx /home/sandra/nginx_config`
c) `ln -d /etc/nginx /home/sandra/nginx_config`
d) `ln --hard /etc/nginx /home/sandra/nginx_config`

<details><summary>Respuesta</summary>

**b) `ln -s /etc/nginx /home/sandra/nginx_config`**

Para crear un enlace a un directorio es obligatorio usar un enlace simbolico (`ln -s`), ya que los enlaces duros a directorios no estan permitidos para usuarios normales (solo el sistema crea los enlaces duros `.` y `..` de forma automatica). La opcion `a` intenta crear un enlace duro a un directorio, lo cual fallaria con el error "hard link not allowed for directory". Las opciones `c` y `d` no son opciones validas del comando `ln` para este proposito. Los enlaces simbolicos a directorios son muy comunes en la administracion de sistemas Linux.

</details>

---

### Pregunta 14

Se ejecutan los siguientes comandos:
```bash
echo "contenido" > archivo.txt
ln archivo.txt enlace1.txt
ln archivo.txt enlace2.txt
chmod 644 enlace1.txt
```
Que permisos tendra `archivo.txt` despues de ejecutar el ultimo comando?

a) Los permisos originales, ya que el enlace duro tiene permisos independientes
b) 644, porque todos los enlaces duros comparten el mismo inodo y por tanto los mismos permisos
c) Se produce un error porque no se pueden cambiar permisos en un enlace duro
d) Solo `enlace1.txt` tendra permisos 644, los demas mantienen los originales

<details><summary>Respuesta</summary>

**b) 644, porque todos los enlaces duros comparten el mismo inodo y por tanto los mismos permisos**

Los enlaces duros comparten el mismo inodo, lo que significa que comparten toda la metainformacion: permisos, propietario, grupo, timestamps, etc. Cambiar los permisos a traves de cualquier nombre que apunte al mismo inodo afecta a todos los nombres por igual, ya que en realidad se esta modificando la informacion almacenada en el unico inodo compartido. No existen "permisos independientes" entre enlaces duros al mismo archivo. Esto contrasta con los enlaces simbolicos, cuyos permisos propios (generalmente `lrwxrwxrwx`) son irrelevantes; se aplican los permisos del archivo destino.

</details>

---

### Pregunta 15

Que comando permite buscar todos los archivos en el sistema que tienen mas de un enlace duro?

a) `find / -type l`
b) `find / -type f -links +1`
c) `find / -type f -links 1`
d) `find / -xtype l`

<details><summary>Respuesta</summary>

**b) `find / -type f -links +1`**

El comando `find / -type f -links +1` busca archivos regulares (`-type f`) que tengan mas de un enlace duro (`-links +1`), es decir, archivos cuyo conteo de enlaces sea mayor que 1 (lo que indica que hay al menos dos nombres apuntando al mismo inodo). La opcion `a` (`-type l`) busca enlaces simbolicos, no archivos con multiples enlaces duros. La opcion `c` (`-links 1`) busca archivos con exactamente 1 enlace (un solo nombre). La opcion `d` (`-xtype l`) busca enlaces simbolicos rotos. El conteo de enlaces se puede ver con `ls -l` en el segundo campo.

</details>

---

### Pregunta 16

Cual de las siguientes afirmaciones sobre el tamano de un enlace simbolico es correcta?

a) El enlace simbolico tiene el mismo tamano que el archivo original
b) El tamano del enlace simbolico es la longitud de la ruta que almacena como destino
c) Los enlaces simbolicos no ocupan espacio en disco
d) El tamano del enlace simbolico es siempre de 4 bytes

<details><summary>Respuesta</summary>

**b) El tamano del enlace simbolico es la longitud de la ruta que almacena como destino**

Un enlace simbolico es un archivo especial que contiene la ruta (path) al archivo o directorio destino. Su tamano en bytes corresponde exactamente a la longitud de esa cadena de texto. Por ejemplo, si el enlace apunta a `/home/sandra/documento.txt` (30 caracteres), su tamano sera 30 bytes. Esto se puede verificar con `ls -l`, donde se muestra el tamano del enlace. El enlace simbolico tiene su propio inodo, diferente al del archivo destino, y ocupa un espacio minimo en disco que depende de la longitud de la ruta almacenada.

</details>

---

### Pregunta 17

Que opciones de `readlink` se pueden usar para resolver la ruta absoluta de un enlace simbolico, y cual es la diferencia entre ellas?

a) `-f` resuelve la ruta aunque el destino no exista; `-e` requiere que el destino exista
b) `-f` y `-e` son identicas en funcionamiento
c) `-f` muestra solo el destino inmediato; `-e` resuelve toda la cadena
d) `-e` resuelve la ruta aunque el destino no exista; `-f` requiere que todos los componentes existan

<details><summary>Respuesta</summary>

**a) `-f` resuelve la ruta aunque el destino no exista; `-e` requiere que el destino exista**

Ambas opciones resuelven toda la cadena de enlaces simbolicos y devuelven la ruta absoluta canonicalizada. La diferencia clave es: `readlink -f` resuelve la ruta incluso si el ultimo componente de la ruta no existe (no genera error). `readlink -e` requiere que todos los componentes de la ruta, incluyendo el destino final, existan; si no existen, no produce salida y devuelve un codigo de error. Existe tambien `readlink -m` que no requiere que ningun componente exista. Sin opciones, `readlink` solo muestra el destino inmediato (un nivel) del enlace.

</details>

---

### Pregunta 18

Se tiene la siguiente estructura:
```bash
enlace_a -> enlace_b -> enlace_c -> archivo_real.txt
```
Que muestra `readlink enlace_a` (sin opciones)?

a) `archivo_real.txt`
b) `enlace_b`
c) La ruta completa `/ruta/archivo_real.txt`
d) Error porque hay una cadena de enlaces

<details><summary>Respuesta</summary>

**b) `enlace_b`**

`readlink` sin opciones muestra unicamente el destino inmediato (un solo nivel) del enlace simbolico. En este caso, `enlace_a` apunta directamente a `enlace_b`, por lo que eso es lo que se muestra. No resuelve la cadena completa de enlaces. Para resolver toda la cadena y obtener la ruta absoluta del archivo final (`archivo_real.txt`), se necesita usar `readlink -f enlace_a`, que seguira todos los enlaces hasta llegar al destino real. Esta distincion entre el destino inmediato y la resolucion completa es importante para el examen LPIC-1.

</details>

---

### Pregunta 19

Que diferencia hay entre `stat enlace.txt` y `stat -L enlace.txt` cuando `enlace.txt` es un enlace simbolico?

a) No hay diferencia, ambos muestran la informacion del archivo destino
b) `stat enlace.txt` muestra informacion del enlace simbolico en si; `stat -L enlace.txt` muestra informacion del archivo destino
c) `stat -L` muestra los permisos del enlace y `stat` muestra los permisos del destino
d) `stat -L` fuerza la lectura del enlace sin seguirlo

<details><summary>Respuesta</summary>

**b) `stat enlace.txt` muestra informacion del enlace simbolico en si; `stat -L enlace.txt` muestra informacion del archivo destino**

Por defecto, `stat` muestra la informacion del propio enlace simbolico: su inodo, tamano (longitud de la ruta almacenada), permisos del enlace, etc. La opcion `-L` (dereference) indica a `stat` que siga el enlace y muestre la informacion del archivo destino al que apunta. Esto es util para verificar la informacion real del archivo apuntado (tamano real, permisos efectivos, etc.). Esta diferencia de comportamiento se aplica a muchos comandos en Linux, donde la opcion `-L` o `--dereference` indica seguir los enlaces simbolicos.

</details>

---

### Pregunta 20

Cual de las siguientes afirmaciones sobre los directorios `.` y `..` es correcta?

a) Son enlaces simbolicos creados automaticamente por el sistema
b) Son enlaces duros mantenidos por el sistema; `.` apunta al propio directorio y `..` al directorio padre
c) Son archivos de configuracion ocultos que almacenan metadatos del directorio
d) Son creados manualmente por el administrador del sistema

<details><summary>Respuesta</summary>

**b) Son enlaces duros mantenidos por el sistema; `.` apunta al propio directorio y `..` al directorio padre**

Las entradas `.` y `..` son enlaces duros que el sistema de archivos crea y mantiene automaticamente en cada directorio. `.` es un enlace duro al propio directorio (apunta al mismo inodo), y `..` es un enlace duro al directorio padre. Por esta razon, un directorio vacio siempre tiene un conteo de enlaces de 2 (la entrada del padre que apunta a el y su propia entrada `.`). Cada subdirectorio creado dentro incrementa el conteo en 1, debido a la entrada `..` del subdirectorio. Estos son los unicos enlaces duros a directorios que el sistema permite.

</details>

---

### Pregunta 21

Escribe el comando para crear un enlace simbolico llamado `/tmp/enlace_config` que apunte al archivo `/etc/nginx/nginx.conf`.

<input type="text" class="fill-blank" data-answer="ln -s /etc/nginx/nginx.conf /tmp/enlace_config" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ln -s /etc/nginx/nginx.conf /tmp/enlace_config**

El comando `ln -s` crea un enlace simbolico. La sintaxis es `ln -s objetivo nombre_del_enlace`. El primer argumento es el archivo destino (`/etc/nginx/nginx.conf`) y el segundo es el nombre del enlace a crear (`/tmp/enlace_config`). Se usa una ruta absoluta para el destino, lo que asegura que el enlace funcione independientemente de donde se encuentre. Sin la opcion `-s`, se crearia un enlace duro, lo cual podria fallar si `/etc` y `/tmp` estan en sistemas de archivos diferentes.

</details>

---

### Pregunta 22

Escribe el comando para ver el numero de inodo de un archivo llamado `documento.txt`.

<input type="text" class="fill-blank" data-answer="ls -i documento.txt" data-alt="stat documento.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ls -i documento.txt**

El comando `ls -i` muestra el numero de inodo de cada archivo junto con su nombre. La salida seria algo como `1234567 documento.txt`. Alternativamente, `stat documento.txt` muestra informacion completa del inodo, incluyendo el numero de inodo, tamano, permisos, propietario, timestamps y conteo de enlaces. El numero de inodo es fundamental para entender los enlaces duros, ya que dos archivos con el mismo numero de inodo son en realidad el mismo archivo (enlaces duros entre si).

</details>

---

### Pregunta 23

Escribe el comando `find` para buscar todos los enlaces simbolicos rotos en el directorio `/etc`.

<input type="text" class="fill-blank" data-answer="find /etc -xtype l" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find /etc -xtype l**

La opcion `-xtype l` de `find` busca enlaces simbolicos cuyo destino no existe (enlaces rotos o "dangling"). Funciona de la siguiente manera: `-xtype` evalua el tipo del archivo despues de seguir el enlace simbolico. Si el destino no existe, el archivo se clasifica como enlace simbolico (`l`), indicando que esta roto. No debe confundirse con `-type l`, que encuentra todos los enlaces simbolicos (tanto validos como rotos). Los enlaces simbolicos rotos son un problema comun de mantenimiento del sistema.

</details>

---

### Pregunta 24

Escribe el comando para ver el destino final (ruta absoluta completa) de un enlace simbolico llamado `mi_enlace`.

<input type="text" class="fill-blank" data-answer="readlink -f mi_enlace" data-alt="readlink -e mi_enlace" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**readlink -f mi_enlace**

El comando `readlink -f` resuelve toda la cadena de enlaces simbolicos recursivamente y devuelve la ruta absoluta canonicalizada del archivo final. Si `mi_enlace` apunta a otro enlace que a su vez apunta a otro, `readlink -f` resuelve toda la cadena hasta llegar al archivo real. Sin la opcion `-f`, `readlink` solo muestra el destino inmediato (un nivel). La opcion `-e` es similar pero requiere que el destino final exista, mientras que `-f` funciona aunque el ultimo componente no exista.

</details>

---

### Pregunta 25

Escribe el comando para crear un enlace duro llamado `backup.txt` que apunte al mismo inodo que el archivo `original.txt`.

<input type="text" class="fill-blank" data-answer="ln original.txt backup.txt" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ln original.txt backup.txt**

El comando `ln` sin opciones crea un enlace duro. La sintaxis es `ln archivo_existente nuevo_nombre`. Esto crea una nueva entrada de directorio (`backup.txt`) que apunta al mismo inodo que `original.txt`. Ambos nombres son completamente equivalentes: no hay un "original" y una "copia". El conteo de enlaces del inodo se incrementa a 2. Se puede verificar con `ls -li` que ambos archivos comparten el mismo numero de inodo. Borrar uno de los nombres no afecta al otro, ya que los datos persisten mientras el conteo de enlaces sea mayor que 0.

</details>
