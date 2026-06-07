---
title: "103.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "103.3"
---

# Flashcards: 103.3 - Gestion Basica De Archivos

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita copiar el directorio `/home/sandra/proyecto/` a `/backup/` preservando todos los permisos, propietarios, timestamps y enlaces simbolicos. Cual es el comando mas adecuado?

</div>
<div class="flashcard-back">

**R:** C) `cp -a /home/sandra/proyecto/ /backup/`. La opcion `-a` (archive) es equivalente a `-dR --preserve=all`, lo que significa que copia recursivamente, preserva permisos, propietarios, timestamps y enlaces simbolicos (los mantiene como enlaces en lugar de copiar el contenido al que apuntan). La opcion A (`-r`) copia recursivamente pero no preserva permisos ni enlaces simbolicos. La opcion B (`-p`) preserva permisos pero no es recursiva (fallaria al copiar un directorio). La opcion D mueve en lugar de copiar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-002">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos `find` localiza todos los archivos regulares mayores de 50 MB en `/var` que fueron modificados hace mas de 30 dias?

</div>
<div class="flashcard-back">

**R:** B) `find /var -type f -size +50M -mtime +30`. El comando correcto usa: `-type f` para archivos regulares, `-size +50M` (con el sufijo M para megabytes y + para "mayor que"), y `-mtime +30` (con + para "hace mas de 30 dias"). La opcion A falta el sufijo `M` en el tamanho (sin sufijo, `+50` se interpreta como bloques de 512 bytes). La opcion C usa `-type d` que busca directorios, no archivos, y `-mtime -30` busca archivos mas recientes de 30 dias. La opcion D tiene opciones inventadas que no existen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-003">
<div class="flashcard-front">

**P:** Un usuario necesita crear un archivo tar comprimido con bzip2 del directorio `/etc/` y guardarlo como `/tmp/etc_backup.tar.bz2`. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** B) `tar -cjvf /tmp/etc_backup.tar.bz2 /etc/`. Las opciones son: `-c` para crear, `-j` para compresion bzip2, `-v` para verbose y `-f` seguido del nombre del archivo. La opcion A usa `-z` que es para gzip (no bzip2). La opcion C usa `-J` que es para xz (no bzip2). La opcion D usa `-x` que es para extraer, no para crear. Recordar: `-z` = gzip (.gz), `-j` = bzip2 (.bz2), `-J` = xz (.xz).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-004">
<div class="flashcard-front">

**P:** Que hace el siguiente comando?

</div>
<div class="flashcard-back">

**R:** B) Elimina todos los archivos .log en /tmp que fueron modificados hace mas de 7 dias. El comando `find` busca en `/tmp` archivos cuyo nombre termine en `.log` (`-name "*.log"`) y que hayan sido modificados hace mas de 7 dias (`-mtime +7`). Para cada archivo encontrado, ejecuta `rm` (`-exec rm {} \;`), donde `{}` es reemplazado por el nombre del archivo y `\;` marca el fin del comando. El signo `+` en `-mtime +7` significa "hace mas de 7 dias" (no "en los ultimos 7 dias", que seria `-mtime -7`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-005">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `rmdir` y `rm -r`?

</div>
<div class="flashcard-back">

**R:** B) `rmdir` solo elimina directorios vacios, `rm -r` elimina directorios con todo su contenido. `rmdir` es un comando seguro que solo puede eliminar directorios que estan completamente vacios. Si el directorio contiene algun archivo o subdirectorio, `rmdir` dara un error. En cambio, `rm -r` (recursivo) elimina el directorio especificado junto con todo su contenido (archivos, subdirectorios y su contenido), de forma recursiva. Por seguridad, es preferible usar `rmdir` cuando se espera que el directorio este vacio, ya que protege contra la eliminacion accidental de contenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-006">
<div class="flashcard-front">

**P:** Un administrador necesita crear una imagen exacta del disco `/dev/sda` con bloques de 4 MB mostrando el progreso. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** C) `dd if=/dev/sda of=/backup/disco.img bs=4M status=progress`. `dd` es el comando adecuado para crear imagenes bit a bit de discos. `if=` especifica el archivo/dispositivo de entrada, `of=` el de salida, `bs=4M` establece el tamanho de bloque a 4 megabytes (mejora el rendimiento) y `status=progress` muestra el progreso de la operacion. La opcion A no crearia una copia exacta a nivel de bloques. La opcion B archivaria el dispositivo como un archivo tar, no como una imagen de disco. La opcion D tiene invertidos `if` y `of`, lo que escribiria la imagen sobre el disco en lugar de leerlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-007">
<div class="flashcard-front">

**P:** El comando `file /usr/bin/python3` muestra la informacion `ELF 64-bit LSB pie executable, x86-64`. Que se puede concluir?

</div>
<div class="flashcard-back">

**R:** B) El archivo es un binario ejecutable compilado de 64 bits. El comando `file` examina el contenido real del archivo (no su extension ni su nombre) para determinar su tipo. "ELF" (Executable and Linkable Format) indica que es un formato binario ejecutable de Linux. "64-bit" indica la arquitectura y "x86-64" la plataforma. `file` utiliza los "numeros magicos" (secuencias de bytes al inicio del archivo) para identificar el tipo. A diferencia de Windows, que depende de extensiones (.exe, .txt), Linux usa `file` para determinar el tipo real del contenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-008">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos `find` busca archivos con nombre que termine en `.txt` O en `.md`, que sean archivos regulares?

</div>
<div class="flashcard-back">

**R:** C) `find /home -type f \( -name "*.txt" -or -name "*.md" \)`. La opcion correcta usa parentesis escapados `\( \)` para agrupar la condicion OR, y `-type f` fuera del grupo para que aplique a ambas condiciones. La opcion A usa dos `-name` con AND implicito, lo que buscaria archivos que terminen en `.txt` Y en `.md` a la vez (imposible). La opcion B sin parentesis aplicaria `-type f` solo a la segunda condicion (`-name "*.md"`) debido a la precedencia de operadores (AND tiene mayor precedencia que OR). La opcion D tiene una sintaxis invalida para `-name`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `touch -t 202601151030 archivo.txt`?

</div>
<div class="flashcard-back">

**R:** b) Establece la fecha de modificacion y acceso del archivo al 15 de enero de 2026 a las 10:30. `touch -t` permite establecer una fecha y hora especificas para un archivo en formato `YYYYMMDDhhmm`. Asi, `202601151030` corresponde al 15 de enero de 2026 a las 10:30. Si el archivo no existe, se crea con esa fecha. Si ya existe, se actualizan sus timestamps. Tambien se puede usar `-d` con formato legible: `touch -d "2026-01-15 10:30" archivo.txt`. La opcion `-r referencia.txt` copia los timestamps de otro archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-010">
<div class="flashcard-front">

**P:** Que opcion de `ls` muestra el numero de inodo de cada archivo?

</div>
<div class="flashcard-back">

**R:** c) `ls -i`. `ls -i` muestra el numero de inodo de cada archivo junto a su nombre. El inodo es un identificador numerico unico dentro del sistema de archivos que contiene los metadatos del archivo (permisos, propietario, tamanos, punteros a los bloques de datos). Conocer el inodo es util para identificar hard links (que comparten el mismo inodo) y para eliminar archivos con nombres problematicos usando `find -inum`. `ls -l` muestra formato largo, `-a` muestra ocultos y `-n` muestra UIDs/GIDs numericos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-011">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `gzip`, `bzip2` y `xz` en terminos de velocidad y compresion?

</div>
<div class="flashcard-back">

**R:** b) xz tiene la mejor compresion pero es el mas lento; gzip es el mas rapido pero con menor compresion. El orden de velocidad (rapido a lento) es: gzip > bzip2 > xz. El orden de compresion (mejor a peor) es el inverso: xz > bzip2 > gzip. En tar, las opciones correspondientes son: `-z` para gzip (.tar.gz), `-j` para bzip2 (.tar.bz2) y `-J` para xz (.tar.xz). Los tres solo comprimen archivos individuales; para directorios se combinan con `tar`. Cada uno tiene su comando de descompresion: `gunzip`, `bunzip2` y `unxz`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-012">
<div class="flashcard-front">

**P:** Que opcion de `find` permite limitar la busqueda a un solo nivel de directorio sin entrar en subdirectorios?

</div>
<div class="flashcard-back">

**R:** b) `find /ruta -maxdepth 1`. `-maxdepth 1` limita la busqueda al directorio especificado sin entrar en subdirectorios. El valor indica la profundidad maxima: 0 es solo el propio directorio, 1 incluye sus archivos directos, 2 incluye un nivel de subdirectorios, etc. Tambien existe `-mindepth N` que establece la profundidad minima (util para excluir el directorio raiz de la busqueda). Las opciones A, C y D no existen en `find`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-013">
<div class="flashcard-front">

**P:** Que comando `tar` extrae un archivo `.tar.xz` en el directorio `/opt/`?

</div>
<div class="flashcard-back">

**R:** b) `tar -xJvf archivo.tar.xz -C /opt/`. Las opciones correctas son: `-x` para extraer, `-J` (mayuscula) para descompresion xz, `-v` para verbose y `-f` seguido del nombre del archivo. `-C /opt/` cambia al directorio `/opt/` antes de extraer. La opcion A usa `-z` que es para gzip (.tar.gz), no xz. La opcion C usa `-c` que es para crear, no extraer. La opcion D usa `-j` (minuscula) que es para bzip2 (.tar.bz2). Recordar: `-z` = gzip, `-j` = bzip2, `-J` = xz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-014">
<div class="flashcard-front">

**P:** Que comando `cpio` lista el contenido de un archivo cpio sin extraerlo?

</div>
<div class="flashcard-back">

**R:** b) `cpio -it < backup.cpio`. `cpio -i` es el modo de extraccion (input/copy-in) y `-t` lista el contenido sin extraer. La combinacion `-it` muestra los archivos contenidos en el archivo cpio redirigido desde stdin con `<`. La opcion A (`-o`) es el modo de creacion (output/copy-out). La opcion C (`-idv`) extraeria los archivos con creacion de directorios y verbose. cpio siempre lee desde stdin o escribe a stdout, a diferencia de tar que acepta nombres de archivo con `-f`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-015">
<div class="flashcard-front">

**P:** Que opcion de `cp` crea un enlace duro (hard link) en lugar de copiar el archivo?

</div>
<div class="flashcard-back">

**R:** b) `cp -l`. `cp -l` crea un enlace duro (hard link) al archivo de origen en lugar de realizar una copia fisica de los datos. Ambos nombres apuntan al mismo inodo y comparten los datos en disco. La opcion `-s` crea un enlace simbolico (symlink) en lugar de copiar. La opcion `-d` preserva los enlaces simbolicos (los copia como enlaces en lugar de seguirlos). La opcion `-h` no es una opcion estandar de `cp` para este proposito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-016">
<div class="flashcard-front">

**P:** Un administrador quiere comprimir recursivamente un directorio en formato zip. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** c) `zip -r directorio.zip directorio/`. `zip -r` comprime un directorio y su contenido de forma recursiva en un archivo zip. Sin `-r`, `zip` solo anade los archivos del nivel superior del directorio. `gzip -r` comprime cada archivo del directorio individualmente (no crea un unico archivo comprimido). La opcion B sin `-r` no incluiria el contenido del directorio. La opcion D crearia un archivo tar.gz, no un zip (a pesar del nombre). El formato zip es compatible con Windows y permite descomprimir archivos individuales sin extraer todo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-017">
<div class="flashcard-front">

**P:** Que hace la opcion `-exec` con `+` al final en lugar de `\;` en un comando `find`?

</div>
<div class="flashcard-back">

**R:** b) Agrupa multiples archivos encontrados en una sola invocacion del comando, siendo mas eficiente. Con `\;`, `-exec` ejecuta el comando una vez por cada archivo encontrado. Con `+`, agrupa multiples nombres de archivo y los pasa como argumentos en una sola invocacion del comando, similar a como lo hace `xargs`. Por ejemplo, `find /ruta -name "*.txt" -exec ls -l {} +` ejecuta un solo `ls -l` con todos los archivos encontrados como argumentos, en lugar de ejecutar `ls -l` una vez por cada archivo. Esto es significativamente mas eficiente con grandes cantidades de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-018">
<div class="flashcard-front">

**P:** Que comando de `find` busca archivos que no tienen un usuario propietario valido en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `find /ruta -nouser`. `find -nouser` busca archivos cuyo UID propietario no corresponde a ningun usuario en `/etc/passwd`. Esto ocurre tipicamente cuando se elimina un usuario del sistema pero sus archivos permanecen. De forma similar, `-nogroup` busca archivos sin grupo valido. Estos archivos pueden representar un problema de seguridad y deben ser reasignados o eliminados. La opcion A busca archivos del usuario "nobody", que es un usuario valido. `-uid 0` busca archivos del usuario root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-019">
<div class="flashcard-front">

**P:** Que comando usarias para crear un backup del MBR (primeros 512 bytes) del disco `/dev/sda`?

</div>
<div class="flashcard-back">

**R:** dd if=/dev/sda of=mbr_backup.img bs=512 count=1. `dd` copia datos a nivel de bloques. `if=/dev/sda` especifica el disco de origen, `of=mbr_backup.img` el archivo de destino, `bs=512` establece el tamano de bloque a 512 bytes y `count=1` indica que solo se copia un bloque. El MBR ocupa los primeros 512 bytes del disco e incluye el cargador de arranque y la tabla de particiones. Para restaurarlo: `dd if=mbr_backup.img of=/dev/sda bs=512 count=1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-020">
<div class="flashcard-front">

**P:** Que comando usarias para listar el contenido de un archivo tar comprimido con gzip sin extraerlo?

</div>
<div class="flashcard-back">

**R:** tar -tzvf archivo.tar.gz. Las opciones son: `-t` para listar (en lugar de `-c` crear o `-x` extraer), `-z` para gzip, `-v` para verbose (muestra detalles como permisos y fechas) y `-f` seguido del nombre del archivo. Sin `-v`, solo se muestran los nombres de los archivos. Para listar un tar.bz2 se usa `-j` en lugar de `-z`, y para tar.xz se usa `-J`. La opcion `-f` siempre debe ir seguida del nombre del archivo tar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-021">
<div class="flashcard-front">

**P:** Que comando usarias para buscar todos los archivos modificados en los ultimos 60 minutos en `/var/log`?

</div>
<div class="flashcard-back">

**R:** find /var/log -mmin -60. `find -mmin -60` busca archivos cuya fecha de modificacion es menor a 60 minutos. El signo `-` significa "menos de". Para "mas de 60 minutos" se usa `+60` y para "exactamente 60 minutos" se usa `60`. `-mmin` trabaja en minutos, a diferencia de `-mtime` que trabaja en periodos de 24 horas. Tambien existen `-amin` (tiempo de acceso en minutos) y `-cmin` (tiempo de cambio de metadatos en minutos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-022">
<div class="flashcard-front">

**P:** Que comando usarias para determinar el tipo real de un archivo llamado `datos.bin`?

</div>
<div class="flashcard-back">

**R:** file datos.bin. `file` examina el contenido real del archivo (no su extension) para determinar su tipo. Utiliza los "numeros magicos" (secuencias de bytes al inicio del archivo) y su base de datos interna para identificar el tipo. Por ejemplo, podria mostrar "ELF 64-bit executable", "JPEG image data", "ASCII text", etc. La opcion `-i` muestra el tipo MIME. La opcion `-L` sigue enlaces simbolicos para mostrar la informacion del archivo destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-023">
<div class="flashcard-front">

**P:** Que comando usarias para crear la estructura de directorios `proyecto/src/main` si ninguno de los directorios padre existe?

</div>
<div class="flashcard-back">

**R:** mkdir -p proyecto/src/main. `mkdir -p` crea directorios y todos los directorios padre necesarios que no existan. Sin `-p`, `mkdir proyecto/src/main` fallaria si `proyecto/` o `proyecto/src/` no existen. La opcion `-p` tambien tiene la ventaja de que no da error si el directorio ya existe, lo que la hace segura para usar en scripts. La opcion `-m` permite especificar permisos al crear: `mkdir -p -m 755 proyecto/src/main`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-024">
<div class="flashcard-front">

**P:** Tip de examen: `cp -a` es la forma mas completa de copiar directorios preservando todas las pro...

</div>
<div class="flashcard-back">

**R:** `cp -a` es la forma mas completa de copiar directorios preservando todas las propiedades. Es equivalente a `cp -dR --preserve=all`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-025">
<div class="flashcard-front">

**P:** Tip de examen: `file` analiza el contenido real del archivo usando "numeros magicos" (magic num...

</div>
<div class="flashcard-back">

**R:** `file` analiza el contenido real del archivo usando "numeros magicos" (magic numbers) internos, no la extension del nombre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `*`?

</div>
<div class="flashcard-back">

**R:** Cero o mas caracteres cualesquiera

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `?`?

</div>
<div class="flashcard-back">

**R:** Exactamente un caracter cualquiera

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `[!abc]`?

</div>
<div class="flashcard-back">

**R:** Cualquier caracter EXCEPTO los listados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `-v`?

</div>
<div class="flashcard-back">

**R:** **Verbose** (mostrar progreso)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `-f archivo`?

</div>
<div class="flashcard-back">

**R:** Especifica el nombre del **archivo** tar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-031">
<div class="flashcard-front">

**P:** Un administrador ejecuta `ls -la /home/user/` y observa un archivo con permisos `lrwxrwxrwx`. Que indica la letra `l` al inicio de la cadena de permisos, y que opciones de `ls` necesito para ver esta informacion?

</div>
<div class="flashcard-back">

**R:** La letra `l` al inicio indica que el archivo es un **enlace simbolico** (symlink). Para ver esta informacion se necesita `ls -l` (formato largo), que muestra tipo de archivo, permisos, propietario, grupo, tamanho, fecha y nombre. La opcion `-a` anade los archivos ocultos (los que empiezan con `.`). Otros tipos de archivo en la primera posicion: `-` = archivo regular, `d` = directorio, `b` = dispositivo de bloque, `c` = dispositivo de caracter, `p` = pipe con nombre, `s` = socket. La combinacion `-la` es una de las mas comunes en administracion de sistemas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-032">
<div class="flashcard-front">

**P:** Un usuario ejecuta `mv informe.txt /tmp/informe_viejo.txt`. El archivo `/tmp/informe_viejo.txt` ya existe. Que ocurre por defecto, y que opcion de `mv` evita la sobreescritura accidental?

</div>
<div class="flashcard-back">

**R:** Por defecto, `mv` **sobreescribe** el archivo destino sin pedir confirmacion. Para evitar sobreescrituras accidentales se usa `mv -i` (interactive), que pregunta antes de sobreescribir. Otra opcion es `mv -n` (no-clobber), que no sobreescribe si el destino ya existe. La opcion `-b` crea una copia de respaldo del destino antes de sobreescribir. Dato clave para el examen: `mv` no necesita `-r` para mover directorios (a diferencia de `cp` y `rm`, que si requieren `-r` para operar recursivamente sobre directorios).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-033">
<div class="flashcard-front">

**P:** Un colega renombra una imagen JPEG a `documento.pdf`. Al ejecutar `file documento.pdf`, que mostrara el comando y por que?

</div>
<div class="flashcard-back">

**R:** `file` mostrara algo como `documento.pdf: JPEG image data`, porque `file` **analiza el contenido real del archivo** (los "numeros magicos" o magic numbers en los primeros bytes), no su extension. El archivo sigue siendo una imagen JPEG independientemente de como se llame. Esta es una diferencia fundamental con Windows, donde el sistema operativo depende de la extension para determinar el tipo. La opcion `file -i` muestra el tipo MIME (por ejemplo `image/jpeg`), util para scripts. La opcion `file -L` sigue los enlaces simbolicos para analizar el archivo destino en lugar del enlace.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-034">
<div class="flashcard-front">

**P:** Completa el patron glob que lista todos los archivos en `/etc/` que empiezan por `host` y terminan en cualquier extension:

`ls /etc/` <input type="text" class="fill-blank" data-answer="host*" data-alt="host*.*" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `host*`. El asterisco `*` sustituye cero o mas caracteres cualesquiera. Esto coincidiria con `hosts`, `hostname`, `hosts.allow`, `hosts.deny`, etc. Puntos clave del globbing: el **shell** (no el comando) expande los comodines antes de ejecutar el comando. Los comodines principales son: `*` (cero o mas caracteres), `?` (exactamente un caracter), `[abc]` (uno de los caracteres listados), `[!abc]` o `[^abc]` (cualquier caracter excepto los listados), `[a-z]` (un rango de caracteres). Los archivos ocultos (que empiezan con `.`) no se incluyen con `*` a menos que se escriba explicitamente `.*`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-035">
<div class="flashcard-front">

**P:** Un administrador necesita encontrar todos los archivos con permisos SUID activados en todo el sistema. Escribe el comando `find` correcto:

<input type="text" class="fill-blank" data-answer="find / -perm -4000" data-alt="find / -perm -u+s,find / -perm /4000" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `find / -perm -4000` (o `find / -perm -u+s`). La opcion `-perm -4000` busca archivos que tengan el bit SUID (4000) activado. El prefijo `-` indica que TODOS los bits especificados deben estar presentes (pueden tener otros adicionales). Con `/` en lugar de `-`, basta con que CUALQUIERA de los bits coincida. Esta busqueda es critica en auditorias de seguridad, ya que los archivos SUID se ejecutan con los privilegios del propietario. Otras busquedas por permisos frecuentes en el examen: `-perm -2000` (SGID), `-perm -1000` (sticky bit), `-perm 0644` (coincidencia exacta).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-036">
<div class="flashcard-front">

**P:** Un administrador ejecuta `dd if=/dev/zero of=/dev/sdb bs=1M count=100`. Que efecto tiene este comando y por que es peligroso?

</div>
<div class="flashcard-back">

**R:** Escribe **100 MB de ceros** al inicio del disco `/dev/sdb`, destruyendo la tabla de particiones y los primeros 100 MB de datos de forma **irrecuperable**. `if=/dev/zero` lee un flujo infinito de bytes nulos, `of=/dev/sdb` escribe directamente al dispositivo de bloque, `bs=1M` usa bloques de 1 megabyte y `count=100` limita a 100 bloques. `dd` es peligroso porque: no pide confirmacion, opera directamente sobre dispositivos de bloque, y si se invierten `if` y `of` se puede destruir el disco de origen. Por eso se le llama informalmente "disk destroyer". Siempre verificar dos veces los parametros `if=` y `of=` antes de ejecutar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.3">
</div>

<div class="flashcard" data-id="103.3-fc-037">
<div class="flashcard-front">

**P:** En el examen LPIC-1 aparece: `cp -r directorio/ /backup/`. Un colega dice que esto es equivalente a `cp -a directorio/ /backup/`. Tiene razon? Que diferencia critica hay entre `-r` y `-a`?

</div>
<div class="flashcard-back">

**R:** **No tiene razon.** `cp -r` copia recursivamente pero **no preserva** permisos, propietarios, timestamps ni enlaces simbolicos (los symlinks se copian como archivos regulares). `cp -a` equivale a `cp -dR --preserve=all`, que copia recursivamente preservando **todo**: permisos, propietarios, timestamps, enlaces simbolicos (como enlaces, no como copias), y atributos extendidos. Trampas frecuentes del examen 103.3: (1) confundir `-r` con `-a` en `cp`; (2) confundir `-z` (gzip), `-j` (bzip2) y `-J` (xz) en `tar`; (3) olvidar que `mv` no necesita `-r` para mover directorios; (4) confundir `-mtime +7` (hace MAS de 7 dias) con `-mtime -7` (hace MENOS de 7 dias) en `find`; (5) invertir `if=` y `of=` en `dd`.

</div>
</div>

---

