---
title: "104.6 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "104.6"
---

# Flashcards: 104.6 - Enlaces Duros Y Simbolicos

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-001">
<div class="flashcard-front">

**P:** Se crea un archivo y un enlace duro con los siguientes comandos: ```bash echo "hola" > archivo.txt ln archivo.txt enlace_duro.txt ``` Si luego se borra `archivo.txt`, que sucede al ejecutar `cat enlace_duro.txt`?

</div>
<div class="flashcard-back">

**R:** b) Se muestra "hola" correctamente. Un enlace duro comparte el mismo inodo que el archivo original. Borrar `archivo.txt` solo elimina una de las entradas de directorio que apuntan a ese inodo. El conteo de enlaces pasa de 2 a 1, pero los datos en disco persisten porque aun queda una referencia (el enlace duro). Los datos solo se liberan del disco cuando el conteo de enlaces llega a 0 y ningun proceso tiene el archivo abierto. Esta es una diferencia clave con los enlaces simbolicos, que se "rompen" al borrar el archivo original.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-002">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos fallaria, asumiendo que `/home` y `/mnt/usb` son sistemas de archivos diferentes?

</div>
<div class="flashcard-back">

**R:** c) `ln /home/sandra/archivo.txt /mnt/usb/enlace.txt`. Los enlaces duros NO pueden cruzar sistemas de archivos diferentes, ya que dependen del numero de inodo que es unico dentro de cada sistema de archivos. La opcion `c` intenta crear un enlace duro entre dos filesystems distintos (`/home` y `/mnt/usb`), lo cual es imposible. La opcion `a` funciona porque los enlaces simbolicos si pueden cruzar filesystems. La opcion `b` funciona porque ambos archivos estan en el mismo filesystem. La opcion `d` funciona porque los enlaces simbolicos pueden apuntar a directorios (los duros no).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-003">
<div class="flashcard-front">

**P:** Dada la siguiente salida de `ls -li`: ``` 1234567 -rw-r--r-- 3 sandra sandra 2048 Jan 10 file_a.txt 1234567 -rw-r--r-- 3 sandra sandra 2048 Jan 10 file_b.txt 9876543 lrwxrwxrwx 1 sandra sandra   10 Jan 10 file_c.txt -> file_a.txt ``` Cuantos enlaces duros apuntan al mismo inodo que `file_a.txt`?

</div>
<div class="flashcard-back">

**R:** c) 3. El numero de inodo de `file_a.txt` es `1234567`, y el conteo de enlaces duros (tercer campo) es `3`. Esto indica que hay 3 entradas de directorio apuntando al mismo inodo: `file_a.txt`, `file_b.txt` (que tiene el mismo inodo 1234567) y un tercer enlace duro que no se muestra en la salida pero que existe en algun otro lugar. `file_c.txt` es un enlace simbolico (tipo `l`, inodo diferente 9876543) que apunta a `file_a.txt`, pero no incrementa el conteo de enlaces duros del inodo original.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-004">
<div class="flashcard-front">

**P:** Un directorio vacio `/home/sandra/proyecto` muestra un conteo de enlaces de 2 en `ls -ld`. Si se crean 3 subdirectorios dentro, cual sera el nuevo conteo de enlaces?

</div>
<div class="flashcard-back">

**R:** c) 5. Un directorio vacio tiene conteo de enlaces 2: la entrada del directorio padre que apunta a el y la entrada `.` dentro del propio directorio (que apunta a si mismo). Cada subdirectorio creado dentro anade 1 al conteo, porque cada subdirectorio contiene una entrada `..` que es un enlace duro al directorio padre. La formula es: conteo = 2 + numero de subdirectorios directos. Con 3 subdirectorios: 2 + 3 = 5. Las entradas `.` y `..` son enlaces duros que el sistema crea y mantiene automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-005">
<div class="flashcard-front">

**P:** Que comando encuentra todos los enlaces simbolicos rotos en `/etc`?

</div>
<div class="flashcard-back">

**R:** b) `find /etc -xtype l`. La opcion `-xtype l` de `find` busca archivos que serian de tipo enlace simbolico (`l`) si NO se siguiera el enlace, pero cuyo destino no existe (es decir, el enlace esta roto o "dangling"). La opcion `a` (`-type l`) encuentra todos los enlaces simbolicos, tanto validos como rotos, sin distinguir entre ellos. La opcion `c` (`-links +1`) busca archivos con mas de un enlace duro, que es algo completamente diferente. La opcion `d` con `ls` listaria enlaces simbolicos por su indicador `l` al inicio pero no distinguiria los rotos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-006">
<div class="flashcard-front">

**P:** Un usuario crea un enlace simbolico con ruta relativa: ```bash cd /home/sandra ln -s documentos/informe.txt /tmp/enlace_informe.txt ``` Al acceder a `/tmp/enlace_informe.txt`, que ocurre?

</div>
<div class="flashcard-back">

**R:** b) El enlace esta roto porque la ruta relativa se resuelve desde la ubicacion del enlace, buscando `/tmp/documentos/informe.txt`. La ruta relativa `documentos/informe.txt` se almacena literalmente en el enlace simbolico. Cuando se accede al enlace desde `/tmp/enlace_informe.txt`, el sistema resuelve la ruta relativa desde la ubicacion del enlace (no desde donde se creo), buscando `/tmp/documentos/informe.txt`, que no existe. La solucion es usar una ruta absoluta: `ln -s /home/sandra/documentos/informe.txt /tmp/enlace_informe.txt`. Las rutas relativas en enlaces simbolicos siempre son relativas a la ubicacion del enlace, no al directorio de trabajo al momento de la creacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-007">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre la diferencia entre copiar un archivo y crear un enlace duro es correcta?

</div>
<div class="flashcard-back">

**R:** c) Al modificar un enlace duro, los cambios se reflejan en el original porque comparten el mismo inodo. Un enlace duro comparte el mismo inodo y los mismos bloques de datos que el archivo original. No hay un "original" y una "copia"; ambos nombres son equivalentes y apuntan a los mismos datos. Modificar el contenido a traves de cualquier nombre afecta a todos los demas nombres que apuntan al mismo inodo. En cambio, copiar con `cp` crea un nuevo archivo con nuevo inodo y copia independiente de los datos, duplicando el espacio en disco. El enlace duro NO duplica espacio, solo anade una entrada de directorio. Al borrar el original, el enlace duro sigue funcionando (la copia con `cp` tambien, al ser independiente).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-008">
<div class="flashcard-front">

**P:** Que muestra el comando `readlink -f enlace.txt` a diferencia de `readlink enlace.txt` (sin opciones)?

</div>
<div class="flashcard-back">

**R:** b) `readlink -f` resuelve toda la cadena de enlaces y devuelve la ruta absoluta final, `readlink` muestra solo el destino inmediato. `readlink` sin opciones muestra unicamente el destino inmediato (un nivel) del enlace simbolico. Si hay una cadena de enlaces (enlace3 -> enlace2 -> enlace1 -> original.txt), `readlink enlace3` solo mostraria `enlace2`. En cambio, `readlink -f` resuelve toda la cadena de enlaces recursivamente y devuelve la ruta absoluta canonicalizada del archivo final (por ejemplo, `/home/sandra/original.txt`). Variantes utiles: `readlink -e` requiere que todos los componentes existan, y `readlink -m` no requiere que ningun componente exista.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-009">
<div class="flashcard-front">

**P:** Cual de las siguientes limitaciones aplica a los enlaces duros pero NO a los enlaces simbolicos?

</div>
<div class="flashcard-back">

**R:** d) Todas las anteriores. Los enlaces duros tienen tres limitaciones que los simbolicos no: (1) No pueden cruzar sistemas de archivos porque dependen del numero de inodo, que es unico por filesystem. (2) No pueden apuntar a archivos inexistentes; el archivo debe existir para poder crear otro enlace duro al mismo inodo. Los enlaces simbolicos si pueden apuntar a archivos que no existen (enlaces rotos). (3) Los enlaces duros no tienen indicador visual especial en `ls -l`; se ven identicos a archivos normales. Los simbolicos muestran `l` al inicio y `-> destino`. Ademas, los enlaces duros no pueden apuntar a directorios (con excepcion de `.` y `..` que el sistema gestiona automaticamente).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-010">
<div class="flashcard-front">

**P:** Que tipo de archivo se muestra con el caracter `l` al inicio en la salida de `ls -l`?

</div>
<div class="flashcard-back">

**R:** c) Un enlace simbolico. El primer caracter en la salida de `ls -l` indica el tipo de archivo: `-` para archivo regular, `d` para directorio, `l` para enlace simbolico (symbolic link), `b` para dispositivo de bloque, `c` para dispositivo de caracter, `p` para pipe (FIFO) y `s` para socket. Los enlaces simbolicos ademas muestran `-> destino` al final de la linea, indicando a que archivo o directorio apuntan. Los enlaces duros NO tienen un indicador especial; se muestran como archivos regulares con `-` al inicio, ya que tecnicamente son simplemente otra entrada de directorio para el mismo inodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-011">
<div class="flashcard-front">

**P:** Que informacion almacena un inodo de un archivo en Linux?

</div>
<div class="flashcard-back">

**R:** c) Permisos, propietario, tamano, timestamps y punteros a bloques de datos, pero NO el nombre del archivo. El inodo almacena toda la metainformacion del archivo: tipo de archivo, permisos, propietario (UID) y grupo (GID), tamano, timestamps (atime, mtime, ctime), conteo de enlaces duros y punteros a los bloques de datos en disco. Sin embargo, el nombre del archivo NO se almacena en el inodo, sino en la entrada del directorio que asocia un nombre con un numero de inodo. Esta es la razon por la cual un mismo inodo puede tener multiples nombres (enlaces duros). Se puede ver el inodo con `ls -i` y la informacion completa con `stat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-012">
<div class="flashcard-front">

**P:** Un administrador ejecuta `ln -s /var/log /home/sandra/logs`. Que ocurre si posteriormente se elimina el directorio `/var/log`?

</div>
<div class="flashcard-back">

**R:** b) El enlace `/home/sandra/logs` sigue existiendo pero esta roto (dangling link). Los enlaces simbolicos contienen la ruta al archivo o directorio destino. Si el destino se elimina, el enlace simbolico sigue existiendo como archivo (con su propio inodo), pero al intentar acceder a el se obtiene un error "No such file or directory". Este tipo de enlace se denomina "roto" o "dangling". El sistema no impide la eliminacion del destino ni elimina automaticamente los enlaces que apuntan a el. Se pueden encontrar enlaces rotos con `find /ruta -xtype l`. Esta es una diferencia fundamental con los enlaces duros, que mantienen los datos mientras quede al menos una referencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-013">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos crea correctamente un enlace simbolico al directorio `/etc/nginx`?

</div>
<div class="flashcard-back">

**R:** b) `ln -s /etc/nginx /home/sandra/nginx_config`. Para crear un enlace a un directorio es obligatorio usar un enlace simbolico (`ln -s`), ya que los enlaces duros a directorios no estan permitidos para usuarios normales (solo el sistema crea los enlaces duros `.` y `..` de forma automatica). La opcion `a` intenta crear un enlace duro a un directorio, lo cual fallaria con el error "hard link not allowed for directory". Las opciones `c` y `d` no son opciones validas del comando `ln` para este proposito. Los enlaces simbolicos a directorios son muy comunes en la administracion de sistemas Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-014">
<div class="flashcard-front">

**P:** Se ejecutan los siguientes comandos: ```bash echo "contenido" > archivo.txt ln archivo.txt enlace1.txt ln archivo.txt enlace2.txt chmod 644 enlace1.txt ``` Que permisos tendra `archivo.txt` despues de ejecutar el ultimo comando?

</div>
<div class="flashcard-back">

**R:** b) 644, porque todos los enlaces duros comparten el mismo inodo y por tanto los mismos permisos. Los enlaces duros comparten el mismo inodo, lo que significa que comparten toda la metainformacion: permisos, propietario, grupo, timestamps, etc. Cambiar los permisos a traves de cualquier nombre que apunte al mismo inodo afecta a todos los nombres por igual, ya que en realidad se esta modificando la informacion almacenada en el unico inodo compartido. No existen "permisos independientes" entre enlaces duros al mismo archivo. Esto contrasta con los enlaces simbolicos, cuyos permisos propios (generalmente `lrwxrwxrwx`) son irrelevantes; se aplican los permisos del archivo destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-015">
<div class="flashcard-front">

**P:** Que comando permite buscar todos los archivos en el sistema que tienen mas de un enlace duro?

</div>
<div class="flashcard-back">

**R:** b) `find / -type f -links +1`. El comando `find / -type f -links +1` busca archivos regulares (`-type f`) que tengan mas de un enlace duro (`-links +1`), es decir, archivos cuyo conteo de enlaces sea mayor que 1 (lo que indica que hay al menos dos nombres apuntando al mismo inodo). La opcion `a` (`-type l`) busca enlaces simbolicos, no archivos con multiples enlaces duros. La opcion `c` (`-links 1`) busca archivos con exactamente 1 enlace (un solo nombre). La opcion `d` (`-xtype l`) busca enlaces simbolicos rotos. El conteo de enlaces se puede ver con `ls -l` en el segundo campo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-016">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre el tamano de un enlace simbolico es correcta?

</div>
<div class="flashcard-back">

**R:** b) El tamano del enlace simbolico es la longitud de la ruta que almacena como destino. Un enlace simbolico es un archivo especial que contiene la ruta (path) al archivo o directorio destino. Su tamano en bytes corresponde exactamente a la longitud de esa cadena de texto. Por ejemplo, si el enlace apunta a `/home/sandra/documento.txt` (30 caracteres), su tamano sera 30 bytes. Esto se puede verificar con `ls -l`, donde se muestra el tamano del enlace. El enlace simbolico tiene su propio inodo, diferente al del archivo destino, y ocupa un espacio minimo en disco que depende de la longitud de la ruta almacenada.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-017">
<div class="flashcard-front">

**P:** Que opciones de `readlink` se pueden usar para resolver la ruta absoluta de un enlace simbolico, y cual es la diferencia entre ellas?

</div>
<div class="flashcard-back">

**R:** a) `-f` resuelve la ruta aunque el destino no exista; `-e` requiere que el destino exista. Ambas opciones resuelven toda la cadena de enlaces simbolicos y devuelven la ruta absoluta canonicalizada. La diferencia clave es: `readlink -f` resuelve la ruta incluso si el ultimo componente de la ruta no existe (no genera error). `readlink -e` requiere que todos los componentes de la ruta, incluyendo el destino final, existan; si no existen, no produce salida y devuelve un codigo de error. Existe tambien `readlink -m` que no requiere que ningun componente exista. Sin opciones, `readlink` solo muestra el destino inmediato (un nivel) del enlace.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-018">
<div class="flashcard-front">

**P:** Se tiene la siguiente estructura: ```bash enlace_a -> enlace_b -> enlace_c -> archivo_real.txt ``` Que muestra `readlink enlace_a` (sin opciones)?

</div>
<div class="flashcard-back">

**R:** b) `enlace_b`. `readlink` sin opciones muestra unicamente el destino inmediato (un solo nivel) del enlace simbolico. En este caso, `enlace_a` apunta directamente a `enlace_b`, por lo que eso es lo que se muestra. No resuelve la cadena completa de enlaces. Para resolver toda la cadena y obtener la ruta absoluta del archivo final (`archivo_real.txt`), se necesita usar `readlink -f enlace_a`, que seguira todos los enlaces hasta llegar al destino real. Esta distincion entre el destino inmediato y la resolucion completa es importante para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-019">
<div class="flashcard-front">

**P:** Que diferencia hay entre `stat enlace.txt` y `stat -L enlace.txt` cuando `enlace.txt` es un enlace simbolico?

</div>
<div class="flashcard-back">

**R:** b) `stat enlace.txt` muestra informacion del enlace simbolico en si; `stat -L enlace.txt` muestra informacion del archivo destino. Por defecto, `stat` muestra la informacion del propio enlace simbolico: su inodo, tamano (longitud de la ruta almacenada), permisos del enlace, etc. La opcion `-L` (dereference) indica a `stat` que siga el enlace y muestre la informacion del archivo destino al que apunta. Esto es util para verificar la informacion real del archivo apuntado (tamano real, permisos efectivos, etc.). Esta diferencia de comportamiento se aplica a muchos comandos en Linux, donde la opcion `-L` o `--dereference` indica seguir los enlaces simbolicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-020">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre los directorios `.` y `..` es correcta?

</div>
<div class="flashcard-back">

**R:** b) Son enlaces duros mantenidos por el sistema; `.` apunta al propio directorio y `..` al directorio padre. Las entradas `.` y `..` son enlaces duros que el sistema de archivos crea y mantiene automaticamente en cada directorio. `.` es un enlace duro al propio directorio (apunta al mismo inodo), y `..` es un enlace duro al directorio padre. Por esta razon, un directorio vacio siempre tiene un conteo de enlaces de 2 (la entrada del padre que apunta a el y su propia entrada `.`). Cada subdirectorio creado dentro incrementa el conteo en 1, debido a la entrada `..` del subdirectorio. Estos son los unicos enlaces duros a directorios que el sistema permite.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un enlace simbolico llamado `/tmp/enlace_config` que apunte al archivo `/etc/nginx/nginx.conf`. <input type="text" class="fill-blank" data-answer="ln -s /etc/nginx/nginx.conf /tmp/enlace_config" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ln -s /etc/nginx/nginx.conf /tmp/enlace_config. El comando `ln -s` crea un enlace simbolico. La sintaxis es `ln -s objetivo nombre_del_enlace`. El primer argumento es el archivo destino (`/etc/nginx/nginx.conf`) y el segundo es el nombre del enlace a crear (`/tmp/enlace_config`). Se usa una ruta absoluta para el destino, lo que asegura que el enlace funcione independientemente de donde se encuentre. Sin la opcion `-s`, se crearia un enlace duro, lo cual podria fallar si `/etc` y `/tmp` estan en sistemas de archivos diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para ver el numero de inodo de un archivo llamado `documento.txt`. <input type="text" class="fill-blank" data-answer="ls -i documento.txt" data-alt="stat documento.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ls -i documento.txt. El comando `ls -i` muestra el numero de inodo de cada archivo junto con su nombre. La salida seria algo como `1234567 documento.txt`. Alternativamente, `stat documento.txt` muestra informacion completa del inodo, incluyendo el numero de inodo, tamano, permisos, propietario, timestamps y conteo de enlaces. El numero de inodo es fundamental para entender los enlaces duros, ya que dos archivos con el mismo numero de inodo son en realidad el mismo archivo (enlaces duros entre si).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando `find` para buscar todos los enlaces simbolicos rotos en el directorio `/etc`. <input type="text" class="fill-blank" data-answer="find /etc -xtype l" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** find /etc -xtype l. La opcion `-xtype l` de `find` busca enlaces simbolicos cuyo destino no existe (enlaces rotos o "dangling"). Funciona de la siguiente manera: `-xtype` evalua el tipo del archivo despues de seguir el enlace simbolico. Si el destino no existe, el archivo se clasifica como enlace simbolico (`l`), indicando que esta roto. No debe confundirse con `-type l`, que encuentra todos los enlaces simbolicos (tanto validos como rotos). Los enlaces simbolicos rotos son un problema comun de mantenimiento del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ver el destino final (ruta absoluta completa) de un enlace simbolico llamado `mi_enlace`. <input type="text" class="fill-blank" data-answer="readlink -f mi_enlace" data-alt="readlink -e mi_enlace" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** readlink -f mi_enlace. El comando `readlink -f` resuelve toda la cadena de enlaces simbolicos recursivamente y devuelve la ruta absoluta canonicalizada del archivo final. Si `mi_enlace` apunta a otro enlace que a su vez apunta a otro, `readlink -f` resuelve toda la cadena hasta llegar al archivo real. Sin la opcion `-f`, `readlink` solo muestra el destino inmediato (un nivel). La opcion `-e` es similar pero requiere que el destino final exista, mientras que `-f` funciona aunque el ultimo componente no exista.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para crear un enlace duro llamado `backup.txt` que apunte al mismo inodo que el archivo `original.txt`. <input type="text" class="fill-blank" data-answer="ln original.txt backup.txt" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ln original.txt backup.txt. El comando `ln` sin opciones crea un enlace duro. La sintaxis es `ln archivo_existente nuevo_nombre`. Esto crea una nueva entrada de directorio (`backup.txt`) que apunta al mismo inodo que `original.txt`. Ambos nombres son completamente equivalentes: no hay un "original" y una "copia". El conteo de enlaces del inodo se incrementa a 2. Se puede verificar con `ls -li` que ambos archivos comparten el mismo numero de inodo. Borrar uno de los nombres no afecta al otro, ya que los datos persisten mientras el conteo de enlaces sea mayor que 0.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-026">
<div class="flashcard-front">

**P:** Que ocurre con el espacio en disco cuando se crea un enlace duro vs un enlace simbolico vs una copia con `cp`?

</div>
<div class="flashcard-back">

**R:** Un enlace duro NO consume espacio adicional de datos; solo anade una entrada de directorio (unos pocos bytes). Los datos en disco se comparten a traves del mismo inodo. Un enlace simbolico consume un espacio minimo: su propio inodo y la cadena de texto con la ruta destino (tamaño = longitud de la ruta). Una copia con `cp` duplica completamente los datos, consumiendo el mismo espacio que el archivo original. Por eso los enlaces duros son ideales para "copias de seguridad" dentro del mismo filesystem: multiples nombres para los mismos datos sin duplicar espacio. `cp -l` crea enlaces duros en lugar de copiar, combinando la sintaxis de cp con la eficiencia de ln.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-027">
<div class="flashcard-front">

**P:** Que sucede si ejecutas `cp -s origen.txt destino.txt`? Y `cp -l origen.txt destino.txt`?

</div>
<div class="flashcard-back">

**R:** `cp -s` crea un enlace simbolico en lugar de copiar (equivalente a `ln -s origen.txt destino.txt`). `cp -l` crea un enlace duro en lugar de copiar (equivalente a `ln origen.txt destino.txt`). Ambas opciones evitan duplicar datos en disco. La opcion `-l` es especialmente util con `cp -al directorio/ backup/` para crear un "snapshot" de un directorio completo usando enlaces duros, donde solo los archivos que cambien despues ocuparan espacio adicional. Esta tecnica es la base de herramientas como `rsync --link-dest` para backups incrementales eficientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-028">
<div class="flashcard-front">

**P:** Trampa del examen: si haces `ln -s archivo.txt enlace.txt` y luego `mv archivo.txt archivo_renombrado.txt`, que pasa con el enlace?

</div>
<div class="flashcard-back">

**R:** El enlace simbolico se ROMPE. `enlace.txt` sigue apuntando a la ruta `archivo.txt`, que ya no existe porque fue renombrado. Los enlaces simbolicos almacenan la ruta como texto, no el inodo. Si el destino se mueve o renombra, el enlace queda roto (dangling). En cambio, un enlace duro NO se romperia porque apunta directamente al inodo, no al nombre. El `mv` solo cambia la entrada de directorio pero el inodo permanece igual. Esta es una diferencia critica para el examen: mover/renombrar el destino rompe los enlaces simbolicos pero no afecta a los enlaces duros (dentro del mismo filesystem).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-029">
<div class="flashcard-front">

**P:** Que comando muestra el conteo de enlaces duros, el inodo y la informacion completa de un archivo?

</div>
<div class="flashcard-back">

**R:** `stat archivo`. El comando `stat` muestra informacion detallada del inodo: numero de inodo (Inode), tamaño, bloques, tipo de archivo, permisos, UID/GID, timestamps (Access, Modify, Change) y el conteo de enlaces (Links). El conteo de enlaces indica cuantas entradas de directorio apuntan al mismo inodo. Un archivo regular sin enlaces duros adicionales tiene Links: 1. Con `ls -li` se puede ver el inodo (opcion `-i`) y el conteo de enlaces (segundo campo de `ls -l`). El timestamp Change (ctime) se actualiza cuando cambian los metadatos del inodo (permisos, propietario, conteo de enlaces), no el contenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-030">
<div class="flashcard-front">

**P:** Por que Linux no permite a los usuarios crear enlaces duros a directorios?

</div>
<div class="flashcard-back">

**R:** Porque crearia ciclos en el arbol de directorios, causando bucles infinitos en herramientas como `find`, `du` y `rm -r`. Si un directorio tuviera un enlace duro a un ancestro, el sistema de archivos dejaria de ser un arbol y se convertiria en un grafo con ciclos. Las unicas excepciones son `.` y `..`, que el kernel gestiona internamente de forma segura. Los enlaces simbolicos a directorios SI estan permitidos porque las herramientas pueden detectarlos (tipo `l` en el inodo) y decidir si seguirlos o no (`find -L` sigue enlaces, `find` sin `-L` no los sigue). El error que se obtiene al intentar `ln directorio enlace` es: "hard link not allowed for directory".

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-031">
<div class="flashcard-front">

**P:** Que diferencia hay entre `rm archivo.txt` y `unlink archivo.txt`?

</div>
<div class="flashcard-back">

**R:** Funcionalmente son casi identicos: ambos eliminan una entrada de directorio, decrementando el conteo de enlaces del inodo. Los datos se liberan solo cuando el conteo llega a 0 y ningun proceso tiene el archivo abierto. La diferencia es que `unlink` es mas simple: solo acepta un archivo (no directorios, no opciones como `-r` o `-f`). `rm` es mas versatil: acepta multiples archivos, opciones recursivas (`-r`), forzar (`-f`), interactivo (`-i`), etc. El nombre `unlink` refleja mejor lo que realmente ocurre: no se "borran" datos, se elimina un enlace (nombre) al inodo. El termino "borrar" es una simplificacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-032">
<div class="flashcard-front">

**P:** Un proceso tiene abierto un archivo con `fd` (file descriptor). Se ejecuta `rm archivo.txt` y el conteo de enlaces llega a 0. Se liberan los datos del disco?

</div>
<div class="flashcard-back">

**R:** NO. Los datos persisten en disco mientras algun proceso tenga el archivo abierto (tenga un file descriptor activo). El kernel mantiene el inodo "vivo" hasta que se cierra el ultimo file descriptor. Este comportamiento es util: un programa puede seguir leyendo/escribiendo un archivo "borrado". Los datos se liberan solo cuando el conteo de enlaces es 0 Y no hay ningun proceso con el archivo abierto. Se pueden encontrar estos archivos "borrados pero abiertos" con `lsof +L1` (archivos con link count < 1). Este caso es una fuente comun de espacio en disco que no se recupera hasta reiniciar el proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-033">
<div class="flashcard-front">

**P:** Escribe el comando para crear un enlace simbolico relativo llamado `current` que apunte a `v2.1` dentro del mismo directorio. <input type="text" class="fill-blank" data-answer="ln -s v2.1 current" data-alt="ln -sr v2.1 current" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ln -s v2.1 current. Cuando el destino y el enlace estan en el mismo directorio, una ruta relativa simple funciona correctamente. Este patron es muy comun en Linux: `/usr/bin/python -> python3.11`, `/etc/alternatives/editor -> /usr/bin/vim`. Para cambiar la version, se elimina el enlace y se crea uno nuevo: `rm current && ln -s v2.2 current`, o con `ln -sf v2.2 current` (la opcion `-f` sobreescribe el enlace existente). La opcion `-r` de GNU ln calcula automaticamente la ruta relativa correcta incluso si los directorios son diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-034">
<div class="flashcard-front">

**P:** Que opcion de `ln` permite sobreescribir un enlace simbolico existente sin tener que borrarlo primero?

</div>
<div class="flashcard-back">

**R:** `ln -sf destino enlace`. La opcion `-f` (force) elimina automaticamente el enlace existente antes de crear el nuevo. Esto es util para actualizar enlaces simbolicos de forma atomica, como cambiar la version activa de un programa: `ln -sf /opt/app-v2.0 /opt/app-current`. Sin `-f`, si el enlace ya existe, `ln` fallaria con "File exists". Tambien existe la opcion `-n` que trata al enlace existente como archivo normal (no sigue el enlace), util cuando el destino es un directorio para evitar crear el enlace DENTRO del directorio en lugar de reemplazarlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-035">
<div class="flashcard-front">

**P:** Trampa del examen: un enlace simbolico muestra permisos `lrwxrwxrwx`. Significa esto que cualquier usuario puede modificar el archivo destino?

</div>
<div class="flashcard-back">

**R:** NO. Los permisos del enlace simbolico (`lrwxrwxrwx`) son irrelevantes y no afectan al acceso. Linux ignora los permisos del propio enlace simbolico; lo que importa son los permisos del archivo DESTINO al que apunta. Cuando se accede a traves de un enlace simbolico, el kernel sigue el enlace y aplica los permisos del archivo real. Por eso `chmod` aplicado a un enlace simbolico modifica los permisos del destino, no del enlace. Los permisos `777` en el enlace son solo cosmeticos y no se pueden cambiar (no tienen sentido). Esta distincion es una trampa frecuente del examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-036">
<div class="flashcard-front">

**P:** Escribe el comando para encontrar todos los archivos que son enlaces duros al mismo inodo que `archivo.txt`. <input type="text" class="fill-blank" data-answer="find / -samefile archivo.txt" data-alt="find / -inum $(stat -c %i archivo.txt)" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** find / -samefile archivo.txt. La opcion `-samefile` de `find` busca todos los archivos que comparten el mismo inodo que el archivo especificado, es decir, todos los enlaces duros. Alternativa: `find / -inum $(stat -c %i archivo.txt)` que primero obtiene el numero de inodo con `stat` y luego busca con `-inum`. Ambos metodos encuentran TODOS los nombres (entradas de directorio) que apuntan al mismo inodo en el filesystem. Nota: la busqueda solo encontrara enlaces duros dentro del mismo sistema de archivos, ya que los inodos son unicos por filesystem.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-037">
<div class="flashcard-front">

**P:** Que diferencia hay entre `find -L /dir -type f` y `find /dir -type f` cuando hay enlaces simbolicos?

</div>
<div class="flashcard-back">

**R:** Sin `-L`, `find` NO sigue enlaces simbolicos: un enlace a un archivo se reporta como tipo `l` (enlace), no como `f` (archivo), y un enlace a un directorio no se recorre. Con `-L`, `find` sigue todos los enlaces simbolicos: evalua el tipo del destino en lugar del enlace, y recorre directorios enlazados. Ejemplo: si `/dir/enlace -> /otro/archivo.txt`, sin `-L` no apareceria con `-type f` (es tipo `l`); con `-L` si apareceria (el destino es tipo `f`). Cuidado: `-L` puede causar bucles infinitos si hay enlaces circulares. Existe tambien `-H` que solo sigue enlaces en los argumentos de la linea de comandos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-038">
<div class="flashcard-front">

**P:** Cual es la diferencia entre el ctime (change time) y el mtime (modification time) de un inodo, y como se relaciona con los enlaces?

</div>
<div class="flashcard-back">

**R:** `mtime` se actualiza cuando cambia el CONTENIDO del archivo (escritura de datos). `ctime` se actualiza cuando cambian los METADATOS del inodo: permisos, propietario, conteo de enlaces, etc. Crear un enlace duro actualiza el `ctime` (cambia el conteo de enlaces en el inodo) pero NO el `mtime` (los datos no cambian). `chmod` actualiza `ctime` pero no `mtime`. Editar el archivo actualiza ambos. El `ctime` no se puede modificar manualmente con `touch` (a diferencia del `mtime` y `atime`). Se consultan con `stat archivo`. En el examen pueden preguntar cual timestamp se modifica al crear un enlace duro: la respuesta es `ctime`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="104.6">
</div>

<div class="flashcard" data-id="104.6-fc-039">
<div class="flashcard-front">

**P:** Escribe el comando para actualizar un enlace simbolico existente `/opt/app` para que apunte a `/opt/app-v3` sin borrarlo manualmente primero. <input type="text" class="fill-blank" data-answer="ln -sf /opt/app-v3 /opt/app" data-alt="ln -snf /opt/app-v3 /opt/app" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ln -sf /opt/app-v3 /opt/app. La opcion `-f` (force) elimina el enlace existente antes de crear el nuevo. Si el destino es un directorio, se recomienda usar `-snf`: la `-n` evita que ln entre en el directorio enlazado y cree el enlace DENTRO en lugar de reemplazarlo. Este patron es estandar para gestionar versiones de aplicaciones en Linux: `/opt/app -> /opt/app-v2` se actualiza a `/opt/app -> /opt/app-v3` de forma atomica. Otros ejemplos comunes: `/usr/bin/python -> python3`, `/etc/alternatives/*`.

</div>
</div>

---

