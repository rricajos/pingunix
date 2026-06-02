---
title: "104.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "104.2"
---

# Flashcards: 104.2 - Integridad De Sistemas De Archivos

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-001">
<div class="flashcard-front">

**P:** Un usuario reporta que no puede crear archivos nuevos en `/home`, pero `df -h` muestra que aun hay 20 GB libres. Cual es la causa mas probable y que comando la diagnosticaria?

</div>
<div class="flashcard-back">

**R:** b) Se han agotado los inodos; usar `df -i /home`. Cada archivo necesita un inodo, y es posible quedarse sin inodos aunque quede espacio libre en bloques. Esto ocurre tipicamente cuando hay una enorme cantidad de archivos pequenos. `df -i` muestra el uso de inodos, y si la columna `IUse%` muestra 100%, los inodos estan agotados. Esta es una situacion clasica del examen LPIC-1 donde el disco tiene espacio pero no puede crear archivos nuevos. La solucion seria eliminar archivos innecesarios, especialmente los muy pequenos y numerosos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `df -h` y `du -sh /`?

</div>
<div class="flashcard-back">

**R:** b) `df -h` consulta al sistema de archivos sobre espacio de bloques, mientras que `du -sh /` recorre archivos sumando sus tamanos. `df` obtiene informacion directamente de las estructuras del sistema de archivos, es instantaneo y muestra el espacio real utilizado en bloques. `du` recorre fisicamente todos los archivos sumando sus tamanos, lo cual es mas lento. Pueden dar resultados diferentes por varias razones: archivos eliminados pero aun abiertos por procesos (que `df` cuenta pero `du` no ve), bloques reservados para root, o puntos de montaje que `du` podria cruzar sin la opcion `-x`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-003">
<div class="flashcard-front">

**P:** Por que NUNCA se debe ejecutar `fsck` en un sistema de archivos montado en modo lectura-escritura?

</div>
<div class="flashcard-back">

**R:** c) Porque las escrituras simultaneas del kernel y fsck pueden causar corrupcion severa de datos. `fsck` lee y modifica directamente las estructuras del sistema de archivos (superbloque, tabla de inodos, bloques de datos). Si el sistema de archivos esta montado en modo lectura-escritura, el kernel tambien esta modificando esas estructuras. Esto genera escrituras simultaneas incompatibles que pueden provocar corrupcion severa, perdida de archivos y dano irreversible. La solucion es desmontar el FS primero con `umount`, o remontarlo como solo lectura con `mount -o remount,ro` si se trata de la particion raiz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-004">
<div class="flashcard-front">

**P:** Que comando convierte un sistema de archivos ext2 a ext3 sin destruir los datos existentes?

</div>
<div class="flashcard-back">

**R:** c) `tune2fs -j /dev/sdb1`. La opcion `-j` de `tune2fs` anade un journal (diario de transacciones) al sistema de archivos ext2, convirtiendolo efectivamente en ext3. Esta conversion es no destructiva: no se pierden los datos existentes. Solo se necesita desmontar el sistema de archivos primero y luego montarlo como ext3. La opcion `a` (mkfs.ext3) destruiria todos los datos al crear un FS nuevo. `fsck` es para verificar y reparar, no para convertir. La opcion `d` no es una sintaxis valida de `e2fsck`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-005">
<div class="flashcard-front">

**P:** Cual es la herramienta correcta para reparar un sistema de archivos XFS?

</div>
<div class="flashcard-back">

**R:** c) `xfs_repair /dev/sda1`. `xfs_repair` es la herramienta real para reparar sistemas de archivos XFS. Aunque `fsck.xfs` existe en el sistema, es un placeholder que no realiza ninguna reparacion real; solo existe para que scripts genericos que llaman a `fsck` no fallen al encontrar XFS. `e2fsck` es especifico para sistemas ext2/ext3/ext4 y no funciona con XFS. Para solo verificar sin reparar se usa `xfs_repair -n`. Ademas, `xfs_repair` requiere que el sistema de archivos este desmontado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-006">
<div class="flashcard-front">

**P:** Cual de las siguientes combinaciones de comandos muestra los 5 subdirectorios mas grandes dentro de `/home`?

</div>
<div class="flashcard-back">

**R:** b) `du -sh /home/* | sort -rh | head -5`. `du -sh /home/*` calcula el tamano total de cada subdirectorio dentro de `/home` en formato legible (`-h`) mostrando solo el resumen (`-s`). El resultado se pasa a `sort -rh` que ordena en orden inverso (`-r`) interpretando los tamanos legibles (`-h`), y `head -5` muestra solo los primeros 5 resultados. `df` muestra informacion de sistemas de archivos montados, no de directorios individuales. `ls -lS` solo muestra el tamano de las entradas del directorio, no el contenido recursivo. `find` busca archivos individuales por tamano, no suma el contenido de directorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-007">
<div class="flashcard-front">

**P:** Que opcion de `tune2fs` desactiva la verificacion automatica de un sistema ext4 basada en el conteo de montajes?

</div>
<div class="flashcard-back">

**R:** b) `tune2fs -c 0 /dev/sda1`. La opcion `-c` de `tune2fs` establece el numero maximo de montajes antes de que `fsck` se ejecute automaticamente. Establecer `-c 0` o `-c -1` desactiva esta verificacion. La opcion `-i` controla el intervalo de tiempo entre verificaciones (no el conteo de montajes). La opcion `-l` lista la informacion del superbloque sin modificar nada. La opcion `-m` establece el porcentaje de bloques reservados para root, no tiene relacion con la verificacion automatica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-008">
<div class="flashcard-front">

**P:** Un sistema ext4 tiene el superbloque principal corrupto. Cual de los siguientes comandos intentaria repararlo usando un superbloque de respaldo?

</div>
<div class="flashcard-back">

**R:** b) `e2fsck -b 32768 /dev/sda3`. La opcion `-b` de `e2fsck` permite especificar la ubicacion de un superbloque de respaldo alternativo. Los sistemas ext mantienen copias del superbloque en ubicaciones predecibles, siendo `32768` una de las mas comunes. Si esa ubicacion no funciona, se pueden probar otras como `98304` o `163840`. Para encontrar las ubicaciones exactas de los superbloques de respaldo se puede usar `dumpe2fs /dev/sda3 | grep superblock` o `mke2fs -n /dev/sda3` (dry-run). Las opciones `c` y `d` son de consulta y no reparan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-009">
<div class="flashcard-front">

**P:** Que diferencia hay entre `dumpe2fs /dev/sda1` y `dumpe2fs -h /dev/sda1`?

</div>
<div class="flashcard-back">

**R:** b) Sin `-h` muestra informacion del superbloque y todos los grupos de bloques; con `-h` muestra solo la informacion del superbloque. `dumpe2fs` sin opciones muestra informacion completa: datos del superbloque mas informacion detallada de todos los grupos de bloques, incluyendo ubicaciones de superbloques de respaldo. Con la opcion `-h` (header), solo muestra la informacion del superbloque sin el volcado extenso de los grupos de bloques. En este contexto, `-h` significa "header", no "human readable". `dumpe2fs -h` es util cuando solo se necesitan los datos generales del sistema de archivos sin la informacion detallada de cada grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-010">
<div class="flashcard-front">

**P:** Que herramienta permite examinar la estructura interna de un sistema de archivos ext4 a bajo nivel e intentar recuperar archivos borrados?

</div>
<div class="flashcard-back">

**R:** c) `debugfs`. `debugfs` es un depurador interactivo para sistemas de archivos ext2/ext3/ext4 que permite examinar y modificar estructuras internas a bajo nivel. Con el comando `lsdel` se pueden listar inodos de archivos borrados, y con `undel` se puede intentar recuperarlos. Se abre en modo solo lectura por defecto (`debugfs /dev/sda1`) y en modo escritura con `-w`. `tune2fs` es para ajustar parametros del FS, no para depuracion. `xfs_db` es el depurador equivalente pero para XFS, no para ext. `e2fsck` verifica y repara pero no permite la exploracion interactiva de estructuras.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-011">
<div class="flashcard-front">

**P:** Que informacion NO almacena un inodo en un sistema de archivos ext4?

</div>
<div class="flashcard-back">

**R:** b) El nombre del archivo. El inodo almacena todos los metadatos de un archivo excepto su nombre. El nombre se almacena en la entrada del directorio que apunta al inodo. Un inodo contiene: tipo de archivo, permisos (rwx), propietario y grupo (UID/GID), tamanos, timestamps (atime, mtime, ctime), punteros a los bloques de datos y el conteo de enlaces duros. Esta es la razon por la cual varios enlaces duros con diferentes nombres pueden apuntar al mismo inodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `tune2fs -l` y `dumpe2fs -h` aplicados a la misma particion ext4?

</div>
<div class="flashcard-back">

**R:** b) Ambos muestran informacion del superbloque; la salida es esencialmente la misma. Tanto `tune2fs -l` como `dumpe2fs -h` muestran la informacion del superbloque de un sistema ext. La diferencia principal es que `tune2fs` tambien permite modificar parametros (con otras opciones como `-c`, `-i`, `-L`, etc.), mientras que `dumpe2fs` es una herramienta de solo consulta. `dumpe2fs` sin `-h` muestra informacion adicional de los grupos de bloques, incluyendo ubicaciones de superbloques de respaldo. Ninguno de los dos requiere que el sistema de archivos este montado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-013">
<div class="flashcard-front">

**P:** Que opcion de `tune2fs` cambia la etiqueta (label) de un sistema de archivos ext4?

</div>
<div class="flashcard-back">

**R:** b) `tune2fs -L "datos" /dev/sda1`. La opcion `-L` de `tune2fs` establece o cambia la etiqueta (label) del sistema de archivos. La etiqueta se puede usar para identificar el sistema de archivos en `/etc/fstab` con `LABEL=datos`. La opcion `-c` establece el maximo de montajes antes de fsck automatico. La opcion `-m` establece el porcentaje de bloques reservados para root. La opcion `-U` cambia el UUID del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-014">
<div class="flashcard-front">

**P:** Que comando muestra el numero de inodo de un archivo especifico?

</div>
<div class="flashcard-back">

**R:** b) `ls -i archivo.txt`. La opcion `-i` de `ls` muestra el numero de inodo de cada archivo listado. Por ejemplo, la salida mostraria algo como `12345 archivo.txt`. Otra forma de ver el inodo y mas informacion detallada es con `stat archivo.txt`, que muestra el inodo, permisos, timestamps y mas. `df -i` muestra el uso de inodos por sistema de archivos, no de un archivo individual. `file -i` muestra el tipo MIME del archivo, no su inodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-015">
<div class="flashcard-front">

**P:** Cual es la herramienta de desfragmentacion para sistemas de archivos XFS?

</div>
<div class="flashcard-back">

**R:** c) `xfs_fsr`. `xfs_fsr` (XFS filesystem reorganizer) es la herramienta de desfragmentacion para sistemas de archivos XFS. A diferencia de la mayoria de herramientas de mantenimiento que requieren el FS desmontado, `xfs_fsr` funciona en sistemas XFS **montados**. Puede desfragmentar todo el sistema o un archivo especifico. `xfs_repair` es para reparar sistemas de archivos XFS danados. `e4defrag` es la herramienta de desfragmentacion para ext4, no para XFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-016">
<div class="flashcard-front">

**P:** Que porcentaje de bloques reserva por defecto `mke2fs` para el usuario root al crear un sistema de archivos ext4?

</div>
<div class="flashcard-back">

**R:** c) 5%. Por defecto, `mke2fs` reserva el 5% de los bloques totales para uso exclusivo de root. Esto evita que el sistema de archivos se llene completamente, lo que podria impedir que root realice tareas de mantenimiento. Este porcentaje se puede cambiar durante la creacion con `mke2fs -m PORCENTAJE` o despues con `tune2fs -m PORCENTAJE`. Para discos de datos grandes donde root no necesita espacio reservado, es comun reducirlo a 1% o incluso 0% con `tune2fs -m 0 /dev/sdXN`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-017">
<div class="flashcard-front">

**P:** Que significa la opcion `-y` cuando se usa con `fsck` o `e2fsck`?

</div>
<div class="flashcard-back">

**R:** b) Responde "yes" automaticamente a todas las preguntas de reparacion. La opcion `-y` de `fsck`/`e2fsck` responde "si" automaticamente a todas las preguntas de reparacion durante la verificacion. Esto es util para automatizar la reparacion sin intervencion del usuario, especialmente en scripts o durante el arranque del sistema. La opcion `-n` solo verifica sin reparar (responde "no" a todo). La opcion `-f` fuerza la verificacion aunque el sistema parezca limpio. La opcion `-v` activa el modo verbose.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-018">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos es la herramienta correcta para verificar informacion detallada de un sistema de archivos XFS montado en `/mnt/datos`?

</div>
<div class="flashcard-back">

**R:** c) `xfs_info /mnt/datos`. `xfs_info` muestra informacion detallada sobre un sistema de archivos XFS y acepta como argumento el punto de montaje (el FS debe estar montado). A diferencia de `dumpe2fs`, que es especifico para ext2/ext3/ext4, `xfs_info` es especifico para XFS. `dumpe2fs` y `tune2fs -l` no funcionan con XFS ya que son exclusivos para sistemas ext. `fsck.xfs` es un placeholder que no realiza ninguna operacion real; la herramienta de reparacion para XFS es `xfs_repair`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-019">
<div class="flashcard-front">

**P:** Que sistemas de archivos incluyen journaling? (Selecciona la opcion correcta)

</div>
<div class="flashcard-back">

**R:** b) ext3, ext4, XFS, Btrfs. El journaling es un mecanismo que registra las operaciones pendientes antes de aplicarlas, permitiendo una recuperacion rapida tras fallos. ext3, ext4, XFS y Btrfs (que usa Copy-on-Write en lugar de journal tradicional) incluyen journaling. ext2 y VFAT/FAT32 **no** tienen journaling. ext3 fue la primera version de la familia ext en incorporar journaling. La ausencia de journaling en ext2 es la razon por la cual se necesita un `fsck` completo tras un apagado inesperado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-020">
<div class="flashcard-front">

**P:** Que opcion de `du` limita la profundidad de la busqueda a un solo nivel de subdirectorios?

</div>
<div class="flashcard-back">

**R:** b) `du --max-depth=1`. La opcion `--max-depth=1` (o `-d 1` en versiones modernas) limita la salida de `du` a un nivel de profundidad de subdirectorios. Esto muestra el tamano total de cada subdirectorio inmediato sin desglosar los subdirectorios internos. La opcion `-s` muestra solo el total (summary) sin desglosar subdirectorios. La opcion `-a` incluye archivos individuales ademas de directorios. La opcion `-c` muestra un total general al final de la salida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para verificar el uso de inodos en todos los sistemas de archivos montados. <input type="text" class="fill-blank" data-answer="df -i" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** df -i. La opcion `-i` de `df` muestra informacion sobre inodos en lugar de bloques: inodos totales, usados, disponibles y porcentaje de uso. Esto es crucial para diagnosticar situaciones donde no se pueden crear archivos nuevos a pesar de tener espacio libre en disco (agotamiento de inodos). Se puede combinar con `-h` para formato legible: `df -ih`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para mostrar el resumen del tamano total del directorio `/var/log` en formato legible para humanos. <input type="text" class="fill-blank" data-answer="du -sh /var/log" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** du -sh /var/log. La opcion `-s` (summary) muestra solo el total del directorio sin desglosar subdirectorios. La opcion `-h` (human readable) muestra el tamano en formato legible (KB, MB, GB). La combinacion `du -sh` es uno de los usos mas comunes de `du` para averiguar rapidamente cuanto espacio ocupa un directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para reparar automaticamente un sistema de archivos ext4 en `/dev/sda3` respondiendo "si" a todas las preguntas. <input type="text" class="fill-blank" data-answer="e2fsck -y /dev/sda3" data-alt="fsck -y /dev/sda3" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** e2fsck -y /dev/sda3. `e2fsck` es la herramienta especifica para verificar y reparar sistemas ext2/ext3/ext4. La opcion `-y` responde "yes" automaticamente a todas las preguntas de reparacion. Es fundamental que el sistema de archivos este desmontado antes de ejecutar este comando. Tambien se puede usar `fsck -y /dev/sda3` como alternativa generica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando `tune2fs` para desactivar la verificacion automatica por conteo de montajes en `/dev/sdb1`. <input type="text" class="fill-blank" data-answer="tune2fs -c 0 /dev/sdb1" data-alt="tune2fs -c -1 /dev/sdb1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tune2fs -c 0 /dev/sdb1. La opcion `-c` de `tune2fs` establece el numero maximo de montajes antes de que `fsck` se ejecute automaticamente. Establecer `-c 0` o `-c -1` desactiva esta verificacion automatica basada en el conteo de montajes. Esto puede ser util en servidores donde se prefiere controlar manualmente cuando se ejecuta `fsck`. Para desactivar tambien la verificacion por tiempo, se usa `tune2fs -i 0 /dev/sdb1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para reparar un sistema de archivos XFS desmontado en `/dev/sda2`. <input type="text" class="fill-blank" data-answer="xfs_repair /dev/sda2" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xfs_repair /dev/sda2. `xfs_repair` es la herramienta especifica para reparar sistemas de archivos XFS. A diferencia de ext, donde se usa `fsck.ext4` o `e2fsck`, para XFS se debe usar `xfs_repair`. Aunque `fsck.xfs` existe en el sistema, es solo un placeholder que no realiza ninguna reparacion real. El sistema de archivos debe estar desmontado antes de ejecutar `xfs_repair`. Para solo verificar sin reparar se usa `xfs_repair -n`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `debugfs` es util para examinar la estructura interna de ext2/ext3/ext4 y para r...

</div>
<div class="flashcard-back">

**R:** `debugfs` es util para examinar la estructura interna de ext2/ext3/ext4 y para recuperar archivos borrados. El FS debe estar preferiblemente desmontado o montado como solo lectura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `xfs_fsr` funciona en sistemas XFS **montados** (a diferencia de la mayoria de h...

</div>
<div class="flashcard-back">

**R:** `xfs_fsr` funciona en sistemas XFS **montados** (a diferencia de la mayoria de herramientas de reparacion que requieren FS desmontado). `xfs_db` es el equivalente XFS de `debugfs` para ext.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `-h`?

</div>
<div class="flashcard-back">

**R:** Formato legible (human readable)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `-c`?

</div>
<div class="flashcard-back">

**R:** Mostrar total general al final

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `--max-depth=N`?

</div>
<div class="flashcard-back">

**R:** Limitar profundidad de directorios

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--exclude=PATRON`?

</div>
<div class="flashcard-back">

**R:** Excluir archivos que coincidan con patron

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `-l`?

</div>
<div class="flashcard-back">

**R:** Listar informacion del superbloque

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son 6. Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **`fsck` solo en FS desmontado** o montado como solo lectura. NUNCA en FS montado en lectura-escritura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="104.2">
</div>

<div class="flashcard" data-id="104.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

