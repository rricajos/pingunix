---
title: "104.7 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "104.7"
---

# Flashcards: 104.7 - Ubicacion De Archivos Del Sistema

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-001">
<div class="flashcard-front">

**P:** Segun el FHS, en que directorio deberia ubicarse el software compilado e instalado manualmente por el administrador del sistema?

</div>
<div class="flashcard-back">

**R:** c) `/usr/local`. Segun el Filesystem Hierarchy Standard (FHS), `/usr/local` es la jerarquia terciaria destinada al software instalado localmente por el administrador, tipicamente compilado desde el codigo fuente. Tiene su propia estructura con `bin/`, `sbin/`, `lib/`, etc. El software instalado aqui no es gestionado por el gestor de paquetes de la distribucion. `/opt` es para software de terceros que se instala como paquetes autocontenidos (por ejemplo, Google Chrome). `/usr/bin` contiene binarios instalados por el gestor de paquetes. `/var/lib` almacena datos de estado de aplicaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `/tmp` y `/var/tmp` segun el FHS?

</div>
<div class="flashcard-back">

**R:** b) `/tmp` se borra al reiniciar y `/var/tmp` persiste entre reinicios. `/tmp` es para archivos temporales de corta vida que se limpian al reiniciar el sistema (o periodicamente por systemd-tmpfiles o tmpwatch). `/var/tmp` es para archivos temporales que deben sobrevivir a reinicios del sistema, siendo mas adecuado para datos temporales de larga duracion. Esta distincion es importante para el examen LPIC-1 y para decidir donde almacenar archivos temporales segun si necesitan persistencia entre reinicios o no.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-003">
<div class="flashcard-front">

**P:** Un administrador necesita encontrar rapidamente la ubicacion del archivo `updatedb.conf` sin recorrer el disco en tiempo real. Cual es el comando mas adecuado?

</div>
<div class="flashcard-back">

**R:** b) `locate updatedb.conf`. `locate` busca en una base de datos indexada previamente construida por `updatedb`, lo que lo hace extremadamente rapido en comparacion con `find`, que recorre el arbol de directorios en tiempo real. `which` solo busca ejecutables en las rutas del `$PATH`, no archivos de configuracion. `whereis` busca binarios, paginas de manual y codigo fuente en ubicaciones estandar, pero no archivos de configuracion genericos. La unica desventaja de `locate` es que la base de datos puede estar desactualizada si el archivo fue creado recientemente (se actualiza normalmente una vez al dia via cron).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-004">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos identifica correctamente si `cd` es un comando interno (builtin) del shell o un programa externo?

</div>
<div class="flashcard-back">

**R:** c) `type cd`. `type` es un builtin del shell que identifica que tipo de comando es: builtin, alias, funcion del shell, palabra reservada o archivo externo. Para `cd`, mostraria "cd is a shell builtin". `which` solo busca ejecutables en las rutas del `$PATH` y no reconoce builtins (no devolveria resultado para `cd`). `whereis` busca binarios, fuentes y paginas de manual pero tampoco identifica builtins. `find` busca archivos en el sistema de archivos y desconoce los builtins del shell. `type -a` muestra todas las formas en que un comando esta disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-005">
<div class="flashcard-front">

**P:** `locate` no encuentra un archivo que fue creado hace 5 minutos. Cual es la causa y como se soluciona?

</div>
<div class="flashcard-back">

**R:** b) La base de datos de `locate` esta desactualizada; ejecutar `sudo updatedb`. `locate` busca en una base de datos indexada que se actualiza periodicamente, normalmente una vez al dia mediante una tarea cron o un timer de systemd. Si el archivo fue creado despues de la ultima ejecucion de `updatedb`, no aparecera en los resultados. La solucion es ejecutar `sudo updatedb` para actualizar la base de datos manualmente, tras lo cual `locate` encontrara el archivo. Como alternativa inmediata, se puede usar `find` que busca en tiempo real. La configuracion de `updatedb` se encuentra en `/etc/updatedb.conf`, donde se definen rutas y sistemas de archivos a excluir con `PRUNEPATHS` y `PRUNEFS`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-006">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos `find` busca todos los archivos con el bit SUID activo en todo el sistema?

</div>
<div class="flashcard-back">

**R:** b) `find / -type f -perm -4000`. El comando `find` con `-perm -4000` busca archivos que tengan al menos el bit SUID (valor 4000) activo, independientemente de los demas permisos. El guion `-` antes del valor significa "al menos estos bits deben estar activos". `-type f` restringe la busqueda a archivos regulares. Equivalentemente se puede usar `find / -perm -u=s`. La opcion `a` busca archivos con permisos exactos 777, no SUID. La opcion `c` busca archivos por tamano, no por permisos. La opcion `d` busca archivos propiedad de root, lo cual no implica que tengan SUID.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-007">
<div class="flashcard-front">

**P:** Que es el UsrMerge y cual de los siguientes es un resultado de su implementacion?

</div>
<div class="flashcard-back">

**R:** b) `/bin`, `/sbin` y `/lib` se convierten en enlaces simbolicos a sus equivalentes dentro de `/usr`. UsrMerge es un cambio en la estructura del sistema de archivos donde los directorios raiz `/bin`, `/sbin`, `/lib` y `/lib64` se convierten en enlaces simbolicos a `/usr/bin`, `/usr/sbin`, `/usr/lib` y `/usr/lib64` respectivamente. Esto simplifica la estructura eliminando la distincion historica entre binarios "esenciales para el arranque" y binarios en `/usr`. En sistemas modernos, `/usr` siempre esta disponible durante el arranque. Los enlaces simbolicos mantienen compatibilidad con scripts que usan las rutas antiguas. Distribuciones como Fedora, Debian 12+, Ubuntu 22.04+ y Arch Linux ya implementan UsrMerge.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-008">
<div class="flashcard-front">

**P:** Segun el FHS, cual de los siguientes directorios es "variable" (cambia durante la operacion normal) y parcialmente "compartible" en red?

</div>
<div class="flashcard-back">

**R:** c) `/var`. `/var` contiene datos variables que cambian constantemente durante la operacion normal: logs (`/var/log`), colas de trabajos (`/var/spool`), cache (`/var/cache`), etc. Es parcialmente compartible porque algunos subdirectorios como `/var/mail` o `/var/spool` pueden compartirse via NFS, mientras que otros como `/var/run` o `/var/lock` son especificos de cada maquina. `/usr` es estatico y compartible. `/etc` es estatico y no compartible (especifico de cada maquina). `/boot` es estatico y no compartible (especifico del hardware). Esta clasificacion es importante para planificar particiones, backups y montajes NFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-009">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `which` y `type`?

</div>
<div class="flashcard-back">

**R:** b) `which` solo busca ejecutables en `$PATH`, mientras que `type` identifica builtins, alias, funciones y archivos. `which` busca exclusivamente archivos ejecutables en los directorios listados en la variable `$PATH`. No reconoce builtins del shell, alias ni funciones. `type` es un builtin del shell que identifica la naturaleza completa de un comando: si es un alias, un builtin, una funcion del shell, una palabra reservada o un archivo ejecutable en disco. Por ejemplo, `which cd` no devuelve resultado (cd es un builtin), pero `type cd` muestra "cd is a shell builtin". `type -t` devuelve una palabra clave (alias, builtin, file, function, keyword) y `type -a` muestra todas las formas disponibles de un comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-010">
<div class="flashcard-front">

**P:** Segun el FHS, en que directorio se almacena el kernel de Linux (`vmlinuz-*`)?

</div>
<div class="flashcard-back">

**R:** c) `/boot`. El directorio `/boot` contiene los archivos necesarios para el proceso de arranque del sistema, incluyendo el kernel comprimido de Linux (`vmlinuz-*`), la imagen initramfs (`initrd.img-*` o `initramfs-*`) y la configuracion del bootloader GRUB (`/boot/grub/`). Es un directorio estatico (solo cambia al actualizar el kernel) y no compartible (especifico del hardware de cada maquina). En algunos sistemas, `/boot` es una particion separada, especialmente cuando se usa un bootloader que tiene limitaciones para acceder a ciertos sistemas de archivos. Historicamente, `/boot` usaba ext2 por su simplicidad y amplio soporte por bootloaders.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-011">
<div class="flashcard-front">

**P:** Segun el FHS, que contiene el directorio `/opt`?

</div>
<div class="flashcard-back">

**R:** b) Software de terceros y paquetes adicionales autocontenidos. El directorio `/opt` esta destinado a software de terceros que se instala como paquetes autocontenidos y no forma parte de la distribucion base. Ejemplos incluyen Google Chrome (`/opt/google/chrome`), software comercial o aplicaciones que no siguen la estructura estandar de `/usr`. Cada paquete en `/opt` suele crear su propio subdirectorio. A diferencia de `/usr/local`, que es para software compilado e instalado manualmente por el administrador, `/opt` esta pensado para software proporcionado por proveedores externos que prefieren mantener todos sus archivos en un solo directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-012">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre `/proc` y `/sys` es correcta?

</div>
<div class="flashcard-back">

**R:** b) Son sistemas de archivos virtuales generados por el kernel en tiempo real que no existen en disco. `/proc` y `/sys` son sistemas de archivos virtuales (pseudo-filesystems) que el kernel genera dinamicamente. No ocupan espacio en disco. `/proc` proporciona informacion sobre procesos en ejecucion (`/proc/PID/`) y parametros del kernel (`/proc/cpuinfo`, `/proc/meminfo`). `/sys` expone informacion sobre hardware, drivers y subsistemas del kernel de forma organizada. Su contenido cambia en tiempo real segun el estado del sistema. Intentar respaldar estos directorios no tiene sentido, ya que su contenido es generado dinamicamente por el kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-013">
<div class="flashcard-front">

**P:** Que variable se configura en `/etc/updatedb.conf` para excluir directorios especificos de la base de datos de `locate`?

</div>
<div class="flashcard-back">

**R:** b) `PRUNEPATHS`. La variable `PRUNEPATHS` en `/etc/updatedb.conf` define una lista de directorios que seran excluidos de la indexacion por `updatedb`. Por ejemplo, `PRUNEPATHS="/tmp /var/spool /media /mnt"` excluye estos directorios de la base de datos de `locate`. Otras variables importantes del mismo archivo son: `PRUNEFS` (tipos de sistema de archivos a excluir, como NFS o proc), `PRUNENAMES` (nombres de directorios a excluir, como `.git`) y `PRUNE_BIND_MOUNTS` (excluir bind mounts). Estos archivos no aparecen en los resultados de `locate`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-014">
<div class="flashcard-front">

**P:** Que comando muestra la ruta del binario, el codigo fuente y la pagina de manual de un comando?

</div>
<div class="flashcard-back">

**R:** c) `whereis`. `whereis` localiza el binario, el codigo fuente y la pagina de manual de un comando buscando en ubicaciones estandar del sistema. Por ejemplo, `whereis ls` mostraria `/usr/bin/ls` (binario) y `/usr/share/man/man1/ls.1.gz` (pagina de manual). Se puede filtrar con `-b` (solo binario), `-m` (solo manual) y `-s` (solo fuentes). `which` solo busca ejecutables en el `$PATH`. `type` identifica si un comando es builtin, alias, funcion o archivo. `locate` busca en una base de datos indexada pero no distingue entre binario, fuente y manual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-015">
<div class="flashcard-front">

**P:** Segun el FHS, donde se encuentra el directorio home del usuario root?

</div>
<div class="flashcard-back">

**R:** b) `/root`. El directorio home del usuario root es `/root`, ubicado directamente en la raiz del sistema de archivos. NO esta dentro de `/home`, a diferencia de los usuarios normales que tienen sus directorios en `/home/usuario`. Esta separacion tiene propositos practicos: si `/home` esta en una particion separada que no se monta (por ejemplo, por un error), el usuario root aun puede acceder a su directorio home para realizar tareas de mantenimiento. Ademas, root necesita acceso a su home durante las fases tempranas del arranque, antes de que se monten todas las particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-016">
<div class="flashcard-front">

**P:** Que tipos de valores devuelve `type -t` para diferentes comandos?

</div>
<div class="flashcard-back">

**R:** b) Devuelve `alias`, `builtin`, `file`, `function` o `keyword`. La opcion `-t` de `type` devuelve una sola palabra que identifica el tipo del comando: `alias` (es un alias del shell), `builtin` (comando integrado del shell, como `cd` o `echo`), `file` (archivo ejecutable en disco), `function` (funcion definida en el shell) o `keyword` (palabra reservada del shell, como `if`, `for`, `while`). Esta opcion es util en scripts para determinar programaticamente la naturaleza de un comando. Sin `-t`, `type` muestra una descripcion mas detallada. La opcion `-a` muestra todas las formas disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-017">
<div class="flashcard-front">

**P:** Cual de las siguientes descripciones del directorio `/srv` es correcta segun el FHS?

</div>
<div class="flashcard-back">

**R:** b) Contiene datos servidos por el sistema, como paginas web o archivos FTP. Segun el FHS, `/srv` esta destinado a contener datos proporcionados por servicios que ejecuta el sistema. Por ejemplo, un servidor web podria almacenar sus paginas en `/srv/www` o `/srv/http`, y un servidor FTP en `/srv/ftp`. Sin embargo, en la practica, muchas distribuciones usan otras ubicaciones (como `/var/www` para Apache) por tradicion. La utilizacion especifica de `/srv` no esta estandarizada en detalle, dejando al administrador decidir la estructura interna. Es un directorio especifico de cada maquina y no se comparte por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-018">
<div class="flashcard-front">

**P:** Que diferencia hay entre `/mnt` y `/media` segun el FHS?

</div>
<div class="flashcard-back">

**R:** b) `/mnt` es para montajes manuales temporales del administrador y `/media` para montajes automaticos de medios extraibles. El FHS define `/mnt` como un punto de montaje temporal para que el administrador monte sistemas de archivos manualmente (por ejemplo, `mount /dev/sdb1 /mnt`). `/media` esta destinado a puntos de montaje automatico de medios extraibles como USB, CD-ROM o tarjetas SD. En escritorios modernos, cuando se inserta un USB, el sistema lo monta automaticamente en `/media/usuario/nombre_dispositivo`. Esta distincion es conceptual pero importante para el examen: `/mnt` = manual/administrador, `/media` = automatico/medios extraibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-019">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos `find` busca archivos vacios en el directorio `/tmp`?

</div>
<div class="flashcard-back">

**R:** a) `find /tmp -type f -size 0`. El comando `find /tmp -type f -size 0` busca archivos regulares (`-type f`) con tamano exactamente 0 bytes (`-size 0`). Alternativamente, se puede usar `find /tmp -type f -empty`, que es equivalente y busca archivos vacios. La opcion `-size -1` buscaria archivos menores de 1 bloque (512 bytes), lo cual incluiria archivos pequenos no vacios. Las opciones `-null` y `-zero` no son parametros validos de `find`. Los sufijos de tamano incluyen `c` (bytes), `k` (kilobytes), `M` (megabytes) y `G` (gigabytes).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-020">
<div class="flashcard-front">

**P:** La opcion `-b` de `locate` modifica el comportamiento de la busqueda. Que hace exactamente `locate -b "passwd"`?

</div>
<div class="flashcard-back">

**R:** b) Restringe la busqueda al nombre base del archivo, ignorando la ruta. La opcion `-b` (basename) de `locate` restringe la busqueda al nombre del archivo solamente, ignorando los componentes de la ruta. Sin `-b`, `locate passwd` encontraria tanto `/etc/passwd` como `/documentos/passwd_info/datos.txt` (porque la ruta contiene "passwd"). Con `-b`, solo encontraria archivos cuyo nombre base contenga "passwd". Ademas, `locate -b '\passwd'` (con barra invertida) busca archivos cuyo nombre base sea exactamente "passwd". Esta distincion es relevante para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para actualizar manualmente la base de datos utilizada por `locate`. <input type="text" class="fill-blank" data-answer="sudo updatedb" data-alt="updatedb" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** sudo updatedb. El comando `updatedb` actualiza la base de datos indexada que utiliza `locate` para sus busquedas. Requiere privilegios de root (de ahi el `sudo`) para poder recorrer todos los directorios del sistema. La base de datos se almacena normalmente en `/var/lib/mlocate/mlocate.db` o `/var/lib/plocate/plocate.db`. En la mayoria de distribuciones, `updatedb` se ejecuta automaticamente mediante una tarea cron diaria, pero si se necesita encontrar archivos recien creados, es necesario ejecutarlo manualmente. Su configuracion se encuentra en `/etc/updatedb.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando `find` para buscar todos los archivos con extension `.conf` dentro de `/etc`. <input type="text" class="fill-blank" data-answer="find /etc -name '*.conf'" data-alt="find /etc -name *.conf,find /etc -type f -name '*.conf'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** find /etc -name '*.conf'. El comando `find /etc -name '*.conf'` busca en tiempo real dentro del directorio `/etc` todos los archivos cuyo nombre termine en `.conf`. Es importante entrecomillar el patron `'*.conf'` para evitar que el shell lo expanda antes de pasarlo a `find`. Se puede refinar con `-type f` para buscar solo archivos regulares (excluyendo directorios). Para busquedas sin distincion de mayusculas se usa `-iname`. A diferencia de `locate`, `find` recorre el arbol de directorios en tiempo real, por lo que siempre encuentra archivos recientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para identificar que tipo de comando es `cd` (builtin, alias, archivo, etc.). <input type="text" class="fill-blank" data-answer="type cd" data-alt="type -t cd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** type cd. El comando `type cd` mostrara "cd is a shell builtin", indicando que `cd` es un comando integrado del shell, no un programa externo. `type` es un builtin del shell que identifica la naturaleza de un comando: si es un alias, builtin, funcion del shell, palabra reservada o archivo ejecutable en disco. La variante `type -t cd` devuelve una sola palabra (`builtin`), util para scripts. `which cd` no funcionaria para este proposito, ya que `which` solo busca ejecutables en el `$PATH` y no reconoce builtins.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para buscar la ruta completa del ejecutable `python3` en el PATH del sistema. <input type="text" class="fill-blank" data-answer="which python3" data-alt="whereis -b python3" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** which python3. El comando `which python3` busca en los directorios listados en la variable `$PATH` y devuelve la ruta completa del primer ejecutable llamado `python3` que encuentre (por ejemplo, `/usr/bin/python3`). Si hay multiples versiones, `which -a python3` muestra todas las rutas encontradas. `which` solo busca ejecutables en el `$PATH` y no reconoce builtins del shell ni alias. Para una busqueda mas completa que incluya binario, paginas de manual y codigo fuente, se puede usar `whereis python3`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando `find` para buscar todos los archivos modificados en los ultimos 7 dias en `/var/log`. <input type="text" class="fill-blank" data-answer="find /var/log -mtime -7" data-alt="find /var/log -type f -mtime -7" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** find /var/log -mtime -7. El comando `find /var/log -mtime -7` busca archivos cuyo tiempo de modificacion (`mtime`) sea menor a 7 dias (es decir, modificados en la ultima semana). El signo `-` antes del numero significa "menos de". Con `+7` se buscarian archivos modificados hace mas de 7 dias. Sin signo, se busca exactamente ese numero de dias. Tambien existen `-atime` (tiempo de acceso), `-ctime` (tiempo de cambio de inodo), `-mmin` (minutos de modificacion) y `-amin` (minutos de acceso) para busquedas temporales mas precisas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `locate -b` (basename) restringe la busqueda al nombre del archivo solamente, ig...

</div>
<div class="flashcard-back">

**R:** `locate -b` (basename) restringe la busqueda al nombre del archivo solamente, ignorando la ruta. Sin `-b`, `locate passwd` encontraria tanto `/etc/passwd` como `/documentos/passwd_info/datos.txt` (porque la ruta contiene "passwd").

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Es importante saber que `updatedb` se ejecuta automaticamente a traves de cron (...

</div>
<div class="flashcard-back">

**R:** Es importante saber que `updatedb` se ejecuta automaticamente a traves de cron (generalmente a diario). Los archivos creados despues de la ultima ejecucion de `updatedb` no apareceran en los resultados de `locate` hasta la proxima actualizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `/bin`?

</div>
<div class="flashcard-back">

**R:** Binarios esenciales del sistema

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `/sbin`?

</div>
<div class="flashcard-back">

**R:** Binarios esenciales de administracion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `/lib`?

</div>
<div class="flashcard-back">

**R:** Bibliotecas compartidas esenciales

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `/usr`?

</div>
<div class="flashcard-back">

**R:** Jerarquia secundaria para datos de solo lectura del usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `/usr/bin`?

</div>
<div class="flashcard-back">

**R:** Binarios de usuario no esenciales para el arranque

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-033">
<div class="flashcard-front">

**P:** Que es/son 1. FHS - Filesystem Hierarchy Standard?

</div>
<div class="flashcard-back">

**R:** El **FHS** (Filesystem Hierarchy Standard) es un estandar que define la estructura de directorios y su contenido en sistemas Linux/Unix. Su objetivo es garantizar la interoperabilidad entre distribucio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-034">
<div class="flashcard-front">

**P:** Que es/son 4. Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **`/bin` y `/sbin`** contienen binarios esenciales. En distros modernas con **UsrMerge**, son enlaces simbolicos a `/usr/bin` y `/usr/sbin`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.7">
</div>

<div class="flashcard" data-id="104.7-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

