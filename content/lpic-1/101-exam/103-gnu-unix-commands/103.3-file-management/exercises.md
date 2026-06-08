---
title: "103.3 - Gestion basica de archivos: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.3"
---

# 103.3 - Gestion basica de archivos: Ejercicios

### Pregunta 1
Un administrador necesita copiar el directorio `/home/sandra/proyecto/` a `/backup/` preservando todos los permisos, propietarios, timestamps y enlaces simbolicos. Cual es el comando mas adecuado?

A) `cp -r /home/sandra/proyecto/ /backup/`
B) `cp -p /home/sandra/proyecto/ /backup/`
C) `cp -a /home/sandra/proyecto/ /backup/`
D) `mv /home/sandra/proyecto/ /backup/`

<details>
<summary>Respuesta</summary>

**C) `cp -a /home/sandra/proyecto/ /backup/`**

La opcion `-a` (archive) es equivalente a `-dR --preserve=all`, lo que significa que copia recursivamente, preserva permisos, propietarios, timestamps y enlaces simbolicos (los mantiene como enlaces en lugar de copiar el contenido al que apuntan). La opcion A (`-r`) copia recursivamente pero no preserva permisos ni enlaces simbolicos. La opcion B (`-p`) preserva permisos pero no es recursiva (fallaria al copiar un directorio). La opcion D mueve en lugar de copiar.
</details>

---

### Pregunta 2
Cual de los siguientes comandos `find` localiza todos los archivos regulares mayores de 50 MB en `/var` que fueron modificados hace mas de 30 dias?

A) `find /var -type f -size +50 -mtime +30`
B) `find /var -type f -size +50M -mtime +30`
C) `find /var -type d -size +50M -mtime -30`
D) `find /var -file -size 50M -time 30`

<details>
<summary>Respuesta</summary>

**B) `find /var -type f -size +50M -mtime +30`**

El comando correcto usa: `-type f` para archivos regulares, `-size +50M` (con el sufijo M para megabytes y + para "mayor que"), y `-mtime +30` (con + para "hace mas de 30 dias"). La opcion A falta el sufijo `M` en el tamanho (sin sufijo, `+50` se interpreta como bloques de 512 bytes). La opcion C usa `-type d` que busca directorios, no archivos, y `-mtime -30` busca archivos mas recientes de 30 dias. La opcion D tiene opciones inventadas que no existen.
</details>

---

### Pregunta 3
Un usuario necesita crear un archivo tar comprimido con bzip2 del directorio `/etc/` y guardarlo como `/tmp/etc_backup.tar.bz2`. Cual es el comando correcto?

A) `tar -czvf /tmp/etc_backup.tar.bz2 /etc/`
B) `tar -cjvf /tmp/etc_backup.tar.bz2 /etc/`
C) `tar -cJvf /tmp/etc_backup.tar.bz2 /etc/`
D) `tar -xjvf /tmp/etc_backup.tar.bz2 /etc/`

<details>
<summary>Respuesta</summary>

**B) `tar -cjvf /tmp/etc_backup.tar.bz2 /etc/`**

Las opciones son: `-c` para crear, `-j` para compresion bzip2, `-v` para verbose y `-f` seguido del nombre del archivo. La opcion A usa `-z` que es para gzip (no bzip2). La opcion C usa `-J` que es para xz (no bzip2). La opcion D usa `-x` que es para extraer, no para crear. Recordar: `-z` = gzip (.gz), `-j` = bzip2 (.bz2), `-J` = xz (.xz).
</details>

---

### Pregunta 4
Que hace el siguiente comando?
```bash
find /tmp -name "*.log" -mtime +7 -exec rm {} \;
```

A) Lista todos los archivos .log en /tmp modificados en los ultimos 7 dias
B) Elimina todos los archivos .log en /tmp que fueron modificados hace mas de 7 dias
C) Mueve todos los archivos .log de /tmp a la papelera
D) Comprime todos los archivos .log en /tmp mayores de 7 MB

<details>
<summary>Respuesta</summary>

**B) Elimina todos los archivos .log en /tmp que fueron modificados hace mas de 7 dias**

El comando `find` busca en `/tmp` archivos cuyo nombre termine en `.log` (`-name "*.log"`) y que hayan sido modificados hace mas de 7 dias (`-mtime +7`). Para cada archivo encontrado, ejecuta `rm` (`-exec rm {} \;`), donde `{}` es reemplazado por el nombre del archivo y `\;` marca el fin del comando. El signo `+` en `-mtime +7` significa "hace mas de 7 dias" (no "en los ultimos 7 dias", que seria `-mtime -7`).
</details>

---

### Pregunta 5
Cual es la diferencia entre `rmdir` y `rm -r`?

A) `rmdir` es mas rapido que `rm -r`
B) `rmdir` solo elimina directorios vacios, `rm -r` elimina directorios con todo su contenido
C) `rm -r` solo funciona con archivos, no con directorios
D) No hay diferencia, son equivalentes

<details>
<summary>Respuesta</summary>

**B) `rmdir` solo elimina directorios vacios, `rm -r` elimina directorios con todo su contenido**

`rmdir` es un comando seguro que solo puede eliminar directorios que estan completamente vacios. Si el directorio contiene algun archivo o subdirectorio, `rmdir` dara un error. En cambio, `rm -r` (recursivo) elimina el directorio especificado junto con todo su contenido (archivos, subdirectorios y su contenido), de forma recursiva. Por seguridad, es preferible usar `rmdir` cuando se espera que el directorio este vacio, ya que protege contra la eliminacion accidental de contenido.
</details>

---

### Pregunta 6
Un administrador necesita crear una imagen exacta del disco `/dev/sda` con bloques de 4 MB mostrando el progreso. Cual es el comando correcto?

A) `cp /dev/sda /backup/disco.img`
B) `tar -cvf /backup/disco.img /dev/sda`
C) `dd if=/dev/sda of=/backup/disco.img bs=4M status=progress`
D) `dd of=/dev/sda if=/backup/disco.img bs=4M`

<details>
<summary>Respuesta</summary>

**C) `dd if=/dev/sda of=/backup/disco.img bs=4M status=progress`**

`dd` es el comando adecuado para crear imagenes bit a bit de discos. `if=` especifica el archivo/dispositivo de entrada, `of=` el de salida, `bs=4M` establece el tamanho de bloque a 4 megabytes (mejora el rendimiento) y `status=progress` muestra el progreso de la operacion. La opcion A no crearia una copia exacta a nivel de bloques. La opcion B archivaria el dispositivo como un archivo tar, no como una imagen de disco. La opcion D tiene invertidos `if` y `of`, lo que escribiria la imagen sobre el disco en lugar de leerlo.
</details>

---

### Pregunta 7
El comando `file /usr/bin/python3` muestra la informacion `ELF 64-bit LSB pie executable, x86-64`. Que se puede concluir?

A) El archivo es un script de Python
B) El archivo es un binario ejecutable compilado de 64 bits
C) El archivo es un enlace simbolico a Python
D) El archivo es un archivo de texto

<details>
<summary>Respuesta</summary>

**B) El archivo es un binario ejecutable compilado de 64 bits**

El comando `file` examina el contenido real del archivo (no su extension ni su nombre) para determinar su tipo. "ELF" (Executable and Linkable Format) indica que es un formato binario ejecutable de Linux. "64-bit" indica la arquitectura y "x86-64" la plataforma. `file` utiliza los "numeros magicos" (secuencias de bytes al inicio del archivo) para identificar el tipo. A diferencia de Windows, que depende de extensiones (.exe, .txt), Linux usa `file` para determinar el tipo real del contenido.
</details>

---

### Pregunta 8
Cual de los siguientes comandos `find` busca archivos con nombre que termine en `.txt` O en `.md`, que sean archivos regulares?

A) `find /home -name "*.txt" -name "*.md" -type f`
B) `find /home -name "*.txt" -or -name "*.md" -type f`
C) `find /home -type f \( -name "*.txt" -or -name "*.md" \)`
D) `find /home -type f -name "*.txt, *.md"`

<details>
<summary>Respuesta</summary>

**C) `find /home -type f \( -name "*.txt" -or -name "*.md" \)`**

La opcion correcta usa parentesis escapados `\( \)` para agrupar la condicion OR, y `-type f` fuera del grupo para que aplique a ambas condiciones. La opcion A usa dos `-name` con AND implicito, lo que buscaria archivos que terminen en `.txt` Y en `.md` a la vez (imposible). La opcion B sin parentesis aplicaria `-type f` solo a la segunda condicion (`-name "*.md"`) debido a la precedencia de operadores (AND tiene mayor precedencia que OR). La opcion D tiene una sintaxis invalida para `-name`.
</details>

### Pregunta 9

Que hace el comando `touch -t 202601151030 archivo.txt`?

a) Crea un archivo con un tamano de 202601151030 bytes
b) Establece la fecha de modificacion y acceso del archivo al 15 de enero de 2026 a las 10:30
c) Cambia los permisos del archivo al valor 202601151030
d) Crea 202601151030 copias del archivo

<details><summary>Respuesta</summary>

**b) Establece la fecha de modificacion y acceso del archivo al 15 de enero de 2026 a las 10:30**

`touch -t` permite establecer una fecha y hora especificas para un archivo en formato `YYYYMMDDhhmm`. Asi, `202601151030` corresponde al 15 de enero de 2026 a las 10:30. Si el archivo no existe, se crea con esa fecha. Si ya existe, se actualizan sus timestamps. Tambien se puede usar `-d` con formato legible: `touch -d "2026-01-15 10:30" archivo.txt`. La opcion `-r referencia.txt` copia los timestamps de otro archivo.

</details>

### Pregunta 10

Que opcion de `ls` muestra el numero de inodo de cada archivo?

a) `ls -l`
b) `ls -a`
c) `ls -i`
d) `ls -n`

<details><summary>Respuesta</summary>

**c) `ls -i`**

`ls -i` muestra el numero de inodo de cada archivo junto a su nombre. El inodo es un identificador numerico unico dentro del sistema de archivos que contiene los metadatos del archivo (permisos, propietario, tamanos, punteros a los bloques de datos). Conocer el inodo es util para identificar hard links (que comparten el mismo inodo) y para eliminar archivos con nombres problematicos usando `find -inum`. `ls -l` muestra formato largo, `-a` muestra ocultos y `-n` muestra UIDs/GIDs numericos.

</details>

### Pregunta 11

Cual es la diferencia entre `gzip`, `bzip2` y `xz` en terminos de velocidad y compresion?

a) gzip es el mas lento pero con mejor compresion
b) xz tiene la mejor compresion pero es el mas lento; gzip es el mas rapido pero con menor compresion
c) Los tres son equivalentes en velocidad y compresion
d) bzip2 es el mas rapido y xz tiene la peor compresion

<details><summary>Respuesta</summary>

**b) xz tiene la mejor compresion pero es el mas lento; gzip es el mas rapido pero con menor compresion**

El orden de velocidad (rapido a lento) es: gzip > bzip2 > xz. El orden de compresion (mejor a peor) es el inverso: xz > bzip2 > gzip. En tar, las opciones correspondientes son: `-z` para gzip (.tar.gz), `-j` para bzip2 (.tar.bz2) y `-J` para xz (.tar.xz). Los tres solo comprimen archivos individuales; para directorios se combinan con `tar`. Cada uno tiene su comando de descompresion: `gunzip`, `bunzip2` y `unxz`.

</details>

### Pregunta 12

Que opcion de `find` permite limitar la busqueda a un solo nivel de directorio sin entrar en subdirectorios?

a) `find /ruta -depth 1`
b) `find /ruta -maxdepth 1`
c) `find /ruta -level 1`
d) `find /ruta -norecurse`

<details><summary>Respuesta</summary>

**b) `find /ruta -maxdepth 1`**

`-maxdepth 1` limita la busqueda al directorio especificado sin entrar en subdirectorios. El valor indica la profundidad maxima: 0 es solo el propio directorio, 1 incluye sus archivos directos, 2 incluye un nivel de subdirectorios, etc. Tambien existe `-mindepth N` que establece la profundidad minima (util para excluir el directorio raiz de la busqueda). Las opciones A, C y D no existen en `find`.

</details>

### Pregunta 13

Que comando `tar` extrae un archivo `.tar.xz` en el directorio `/opt/`?

a) `tar -xzvf archivo.tar.xz -C /opt/`
b) `tar -xJvf archivo.tar.xz -C /opt/`
c) `tar -cJvf archivo.tar.xz -C /opt/`
d) `tar -xjvf archivo.tar.xz -C /opt/`

<details><summary>Respuesta</summary>

**b) `tar -xJvf archivo.tar.xz -C /opt/`**

Las opciones correctas son: `-x` para extraer, `-J` (mayuscula) para descompresion xz, `-v` para verbose y `-f` seguido del nombre del archivo. `-C /opt/` cambia al directorio `/opt/` antes de extraer. La opcion A usa `-z` que es para gzip (.tar.gz), no xz. La opcion C usa `-c` que es para crear, no extraer. La opcion D usa `-j` (minuscula) que es para bzip2 (.tar.bz2). Recordar: `-z` = gzip, `-j` = bzip2, `-J` = xz.

</details>

### Pregunta 14

Que comando `cpio` lista el contenido de un archivo cpio sin extraerlo?

a) `cpio -o < backup.cpio`
b) `cpio -it < backup.cpio`
c) `cpio -idv < backup.cpio`
d) `cpio -l backup.cpio`

<details><summary>Respuesta</summary>

**b) `cpio -it < backup.cpio`**

`cpio -i` es el modo de extraccion (input/copy-in) y `-t` lista el contenido sin extraer. La combinacion `-it` muestra los archivos contenidos en el archivo cpio redirigido desde stdin con `<`. La opcion A (`-o`) es el modo de creacion (output/copy-out). La opcion C (`-idv`) extraeria los archivos con creacion de directorios y verbose. cpio siempre lee desde stdin o escribe a stdout, a diferencia de tar que acepta nombres de archivo con `-f`.

</details>

### Pregunta 15

Que opcion de `cp` crea un enlace duro (hard link) en lugar de copiar el archivo?

a) `cp -s`
b) `cp -l`
c) `cp -h`
d) `cp -d`

<details><summary>Respuesta</summary>

**b) `cp -l`**

`cp -l` crea un enlace duro (hard link) al archivo de origen en lugar de realizar una copia fisica de los datos. Ambos nombres apuntan al mismo inodo y comparten los datos en disco. La opcion `-s` crea un enlace simbolico (symlink) en lugar de copiar. La opcion `-d` preserva los enlaces simbolicos (los copia como enlaces en lugar de seguirlos). La opcion `-h` no es una opcion estandar de `cp` para este proposito.

</details>

### Pregunta 16

Un administrador quiere comprimir recursivamente un directorio en formato zip. Cual es el comando correcto?

a) `gzip -r directorio/`
b) `zip directorio.zip directorio/`
c) `zip -r directorio.zip directorio/`
d) `tar -czvf directorio.zip directorio/`

<details><summary>Respuesta</summary>

**c) `zip -r directorio.zip directorio/`**

`zip -r` comprime un directorio y su contenido de forma recursiva en un archivo zip. Sin `-r`, `zip` solo anade los archivos del nivel superior del directorio. `gzip -r` comprime cada archivo del directorio individualmente (no crea un unico archivo comprimido). La opcion B sin `-r` no incluiria el contenido del directorio. La opcion D crearia un archivo tar.gz, no un zip (a pesar del nombre). El formato zip es compatible con Windows y permite descomprimir archivos individuales sin extraer todo.

</details>

### Pregunta 17

Que hace la opcion `-exec` con `+` al final en lugar de `\;` en un comando `find`?

a) Ejecuta el comando una vez por cada archivo encontrado
b) Agrupa multiples archivos encontrados en una sola invocacion del comando, siendo mas eficiente
c) Ejecuta el comando en modo interactivo pidiendo confirmacion
d) Ejecuta el comando en segundo plano

<details><summary>Respuesta</summary>

**b) Agrupa multiples archivos encontrados en una sola invocacion del comando, siendo mas eficiente**

Con `\;`, `-exec` ejecuta el comando una vez por cada archivo encontrado. Con `+`, agrupa multiples nombres de archivo y los pasa como argumentos en una sola invocacion del comando, similar a como lo hace `xargs`. Por ejemplo, `find /ruta -name "*.txt" -exec ls -l {} +` ejecuta un solo `ls -l` con todos los archivos encontrados como argumentos, en lugar de ejecutar `ls -l` una vez por cada archivo. Esto es significativamente mas eficiente con grandes cantidades de archivos.

</details>

### Pregunta 18

Que comando de `find` busca archivos que no tienen un usuario propietario valido en el sistema?

a) `find /ruta -user nobody`
b) `find /ruta -nouser`
c) `find /ruta -orphan`
d) `find /ruta -uid 0`

<details><summary>Respuesta</summary>

**b) `find /ruta -nouser`**

`find -nouser` busca archivos cuyo UID propietario no corresponde a ningun usuario en `/etc/passwd`. Esto ocurre tipicamente cuando se elimina un usuario del sistema pero sus archivos permanecen. De forma similar, `-nogroup` busca archivos sin grupo valido. Estos archivos pueden representar un problema de seguridad y deben ser reasignados o eliminados. La opcion A busca archivos del usuario "nobody", que es un usuario valido. `-uid 0` busca archivos del usuario root.

</details>

### Pregunta 19

Que comando usarias para crear un backup del MBR (primeros 512 bytes) del disco `/dev/sda`?

<input type="text" class="fill-blank" data-answer="dd if=/dev/sda of=mbr_backup.img bs=512 count=1" data-alt="dd if=/dev/sda of=mbr.img bs=512 count=1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dd if=/dev/sda of=mbr_backup.img bs=512 count=1**

`dd` copia datos a nivel de bloques. `if=/dev/sda` especifica el disco de origen, `of=mbr_backup.img` el archivo de destino, `bs=512` establece el tamano de bloque a 512 bytes y `count=1` indica que solo se copia un bloque. El MBR ocupa los primeros 512 bytes del disco e incluye el cargador de arranque y la tabla de particiones. Para restaurarlo: `dd if=mbr_backup.img of=/dev/sda bs=512 count=1`.

</details>

### Pregunta 20

Que comando usarias para listar el contenido de un archivo tar comprimido con gzip sin extraerlo?

<input type="text" class="fill-blank" data-answer="tar -tzvf archivo.tar.gz" data-alt="tar -tzf archivo.tar.gz,tar tzvf archivo.tar.gz" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tar -tzvf archivo.tar.gz**

Las opciones son: `-t` para listar (en lugar de `-c` crear o `-x` extraer), `-z` para gzip, `-v` para verbose (muestra detalles como permisos y fechas) y `-f` seguido del nombre del archivo. Sin `-v`, solo se muestran los nombres de los archivos. Para listar un tar.bz2 se usa `-j` en lugar de `-z`, y para tar.xz se usa `-J`. La opcion `-f` siempre debe ir seguida del nombre del archivo tar.

</details>

### Pregunta 21

Que comando usarias para buscar todos los archivos modificados en los ultimos 60 minutos en `/var/log`?

<input type="text" class="fill-blank" data-answer="find /var/log -mmin -60" data-alt="find /var/log -type f -mmin -60" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find /var/log -mmin -60**

`find -mmin -60` busca archivos cuya fecha de modificacion es menor a 60 minutos. El signo `-` significa "menos de". Para "mas de 60 minutos" se usa `+60` y para "exactamente 60 minutos" se usa `60`. `-mmin` trabaja en minutos, a diferencia de `-mtime` que trabaja en periodos de 24 horas. Tambien existen `-amin` (tiempo de acceso en minutos) y `-cmin` (tiempo de cambio de metadatos en minutos).

</details>

### Pregunta 22

Que comando usarias para determinar el tipo real de un archivo llamado `datos.bin`?

<input type="text" class="fill-blank" data-answer="file datos.bin" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**file datos.bin**

`file` examina el contenido real del archivo (no su extension) para determinar su tipo. Utiliza los "numeros magicos" (secuencias de bytes al inicio del archivo) y su base de datos interna para identificar el tipo. Por ejemplo, podria mostrar "ELF 64-bit executable", "JPEG image data", "ASCII text", etc. La opcion `-i` muestra el tipo MIME. La opcion `-L` sigue enlaces simbolicos para mostrar la informacion del archivo destino.

</details>

### Pregunta 23

Que comando usarias para crear la estructura de directorios `proyecto/src/main` si ninguno de los directorios padre existe?

<input type="text" class="fill-blank" data-answer="mkdir -p proyecto/src/main" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkdir -p proyecto/src/main**

`mkdir -p` crea directorios y todos los directorios padre necesarios que no existan. Sin `-p`, `mkdir proyecto/src/main` fallaria si `proyecto/` o `proyecto/src/` no existen. La opcion `-p` tambien tiene la ventaja de que no da error si el directorio ya existe, lo que la hace segura para usar en scripts. La opcion `-m` permite especificar permisos al crear: `mkdir -p -m 755 proyecto/src/main`.

</details>

---

### Pregunta 24
Un administrador ejecuta `cp -a /home/usuario/ /backup/`. Que hace la opcion `-a` que no hace `-r`?

A) Copia solo archivos, no directorios
B) Preserva permisos, propietarios, timestamps y enlaces simbolicos
C) Copia solo los archivos modificados recientemente
D) Comprime los archivos durante la copia

<details>
<summary>Respuesta</summary>

**B) Preserva permisos, propietarios, timestamps y enlaces simbolicos**

La opcion `-a` (archive) equivale a `-dpR`: preserva enlaces simbolicos (`-d`), copia recursivamente (`-R`) y preserva todos los atributos como permisos, propietario, grupo y timestamps (`--preserve=all`). Con `-r` solo se copia recursivamente pero los atributos pueden no preservarse (los symlinks se siguen en lugar de copiarse como symlinks, los permisos pueden cambiar segun la umask). Para backups y migraciones, `-a` es la opcion correcta.

</details>

---

### Pregunta 25
Cual comando lista archivos en el directorio actual ordenados por tamano, mostrando el mas grande primero?

A) `ls -lS`
B) `ls -lt`
C) `ls -lr`
D) `ls -ls`

<details>
<summary>Respuesta</summary>

**A) `ls -lS`**

`ls -lS` (S mayuscula) lista archivos en formato largo ordenados por tamano de mayor a menor. `-lt` ordena por tiempo de modificacion (mas reciente primero). `-lr` invierte el orden (reverse) de la ordenacion por defecto (alfabetica). `-ls` (s minuscula) muestra el tamano en bloques pero ordena alfabeticamente. Para invertir el orden de tamano (menor primero): `ls -lSr`. Para ver tamanos legibles: `ls -lSh`.

</details>
