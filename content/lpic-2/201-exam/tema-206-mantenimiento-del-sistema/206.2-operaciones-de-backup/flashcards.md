---
title: "206.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "206.2"
---

# Flashcards: 206.2 - Operaciones De Backup

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-001">
<div class="flashcard-front">

**P:** ¿Que opcion de `tar` permite realizar backups incrementales utilizando un archivo snapshot?

</div>
<div class="flashcard-back">

**R:** c) `--listed-incremental`. La opcion `--listed-incremental=ARCHIVO` permite a tar realizar backups incrementales. El archivo snapshot (.snar) registra el estado de los archivos. En la primera ejecucion se crea un backup completo; en ejecuciones posteriores solo se archivan los archivos nuevos o modificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-002">
<div class="flashcard-front">

**P:** Al ejecutar `rsync -av /home/usuario/ /backup/usuario/`, ¿que efecto tiene la barra final (`/`) en la ruta de origen?

</div>
<div class="flashcard-back">

**R:** b) Copia el contenido del directorio sin incluir el directorio en si. En rsync, la barra final en la ruta de origen indica que se debe copiar el contenido del directorio. Sin la barra (`/home/usuario`), rsync copiaria el directorio `usuario` dentro del destino, creando `/backup/usuario/usuario/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando crea una copia exacta del MBR (Master Boot Record) de un disco?

</div>
<div class="flashcard-back">

**R:** b) `dd if=/dev/sda of=mbr.bin bs=512 count=1`. El MBR ocupa exactamente los primeros 512 bytes del disco: 446 bytes para el bootloader, 64 bytes para la tabla de particiones y 2 bytes para la firma (0x55AA). El comando `dd if=/dev/sda of=mbr.bin bs=512 count=1` copia estos 512 bytes completos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-004">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre un backup incremental y un backup diferencial?

</div>
<div class="flashcard-back">

**R:** c) El incremental copia los cambios desde el ultimo backup (cualquier tipo), el diferencial desde el ultimo backup completo. El backup incremental registra solo los cambios desde la ultima copia (sea full o incremental), generando archivos pequenos pero requiriendo toda la cadena para restaurar. El diferencial siempre referencia al ultimo backup completo, lo que produce archivos mas grandes pero simplifica la restauracion (solo se necesita el full + el ultimo diferencial).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que opcion de `rsync` elimina en el destino los archivos que ya no existen en el origen?

</div>
<div class="flashcard-back">

**R:** c) `--delete`. La opcion `--delete` hace que rsync elimine del destino cualquier archivo que no exista en el origen, creando una replica exacta. Es muy util para mantener un espejo actualizado, pero debe usarse con precaucion ya que puede causar perdida de datos si se configura incorrectamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-006">
<div class="flashcard-front">

**P:** ¿En que modo opera `cpio` cuando se usa con la opcion `-o`?

</div>
<div class="flashcard-back">

**R:** b) Copy-out (creacion de archivo). El modo copy-out (`-o`) de cpio lee nombres de archivo desde la entrada estandar y crea un archivo cpio en la salida estandar. Ejemplo: `find /etc | cpio -ov > backup.cpio`. Los otros modos son copy-in (`-i`) para extraer y copy-pass (`-p`) para copiar directamente entre directorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que opcion de rsync se recomienda para realizar una simulacion antes de ejecutar la sincronizacion real?

</div>
<div class="flashcard-back">

**R:** c) `-n` o `--dry-run`. La opcion `-n` (o `--dry-run`) ejecuta rsync sin realizar ningun cambio real, mostrando lo que se haria. Es especialmente importante usarla antes de ejecutar rsync con `--delete` para verificar que no se eliminaran archivos importantes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-008">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes herramientas es un sistema de backup empresarial con arquitectura modular que incluye Director, Storage Daemon y File Daemon?

</div>
<div class="flashcard-back">

**R:** b) Bacula. Bacula utiliza una arquitectura modular compuesta por: el Director (coordina las operaciones), el Storage Daemon (gestiona los medios de almacenamiento), el File Daemon (agente en los clientes) y la Console (interfaz de administracion). Ademas usa una base de datos como catalogo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-009">
<div class="flashcard-front">

**P:** Para restaurar una secuencia de backups incrementales realizados con `tar --listed-incremental`, ¿que valor se usa para el archivo snapshot durante la restauracion?

</div>
<div class="flashcard-back">

**R:** b) `/dev/null`. Al restaurar un backup incremental, se usa `--listed-incremental=/dev/null` para indicar a tar que se trata de una operacion de restauracion. Ejemplo: `tar --listed-incremental=/dev/null -xzf backup-inc.tar.gz`. Esto asegura que tar procese correctamente las eliminaciones y movimientos de archivos registrados en el backup.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que significa la opcion `-a` de rsync?

</div>
<div class="flashcard-back">

**R:** c) Es equivalente a `-rlptgoD` (modo archivo: recursivo, enlaces, permisos, tiempos, grupo, owner, devices). La opcion `-a` (archive) de rsync es un atajo que combina varias opciones: `-r` (recursivo), `-l` (enlaces simbolicos), `-p` (permisos), `-t` (tiempos de modificacion), `-g` (grupo), `-o` (propietario) y `-D` (dispositivos y archivos especiales). Es la opcion mas comun para realizar backups ya que preserva la mayoria de los atributos de los archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que opcion de `dd` muestra el progreso de la copia en tiempo real?

</div>
<div class="flashcard-back">

**R:** b) `status=progress`. La opcion `status=progress` de `dd` muestra estadisticas de progreso periodicas durante la copia, incluyendo la cantidad de datos transferidos, la velocidad y el tiempo transcurrido. Sin esta opcion, `dd` no muestra ninguna salida hasta que la operacion finaliza, lo que puede ser confuso en copias grandes y lentas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que opcion de `rsync` comprime los datos durante la transferencia para reducir el ancho de banda utilizado?

</div>
<div class="flashcard-back">

**R:** b) `-z`. La opcion `-z` (compress) de rsync comprime los datos durante la transferencia, reduciendo el ancho de banda utilizado. Es especialmente util en transferencias remotas sobre redes lentas. La opcion `-c` (checksum) fuerza la verificacion por checksum en lugar de por tamano/fecha, y `-C` excluye archivos comunes de control de versiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-013">
<div class="flashcard-front">

**P:** Un administrador necesita crear un backup de /home que incluya solo los archivos modificados despues de una fecha especifica, sin usar snapshot. ¿Que opcion de tar debe utilizar?

</div>
<div class="flashcard-back">

**R:** b) `--newer`. La opcion `--newer` (o `--after-date`) de tar permite archivar solo los archivos cuya fecha de modificacion sea posterior a la fecha especificada. Ejemplo: `tar -czf cambios.tar.gz --newer="2024-01-15" /home`. Tambien se puede usar `--newer-mtime` para comparar con la fecha de un archivo de referencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que sistema de backup empresarial utiliza herramientas nativas como `tar` y `dump` como backend para realizar las copias de seguridad?

</div>
<div class="flashcard-back">

**R:** c) Amanda. Amanda (Advanced Maryland Automatic Network Disk Archiver) es un sistema de backup en red que utiliza herramientas nativas del sistema como `tar` y `dump` como backend para realizar las copias. Esto le da la ventaja de que los backups pueden ser restaurados con herramientas estandar incluso sin Amanda instalado. Bacula usa su propio formato de almacenamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que opcion de `dd` permite continuar la copia ignorando errores de lectura y rellenando con ceros?

</div>
<div class="flashcard-back">

**R:** a) `conv=noerror,sync`. La combinacion `conv=noerror,sync` es esencial para recuperar datos de discos danados. `noerror` indica a `dd` que continue la copia cuando encuentre errores de lectura (en lugar de abortar), y `sync` rellena los bloques no leidos con bytes nulos (ceros) para mantener la alineacion correcta de los datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando de `rsync` se utiliza para crear backups incrementales con hardlinks, similar al estilo de Time Machine de Apple?

</div>
<div class="flashcard-back">

**R:** b) `rsync -av --link-dest=DIR_ANTERIOR`. La opcion `--link-dest` de rsync permite crear backups incrementales eficientes usando hardlinks. Los archivos que no han cambiado respecto al directorio de referencia se enlazan con hardlinks en lugar de copiarse, ahorrando espacio en disco. Cada backup parece ser completo pero solo los archivos modificados ocupan espacio adicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que modo de `cpio` se utiliza para copiar archivos directamente entre directorios sin crear un archivo intermedio?

</div>
<div class="flashcard-back">

**R:** c) Copy-pass (`-p`). El modo copy-pass (`-p`) de cpio copia archivos directamente de un directorio a otro sin necesidad de crear un archivo cpio intermedio. Se usa combinado con `find`: `find /home -newer /var/backups/timestamp | cpio -pdv /backup/`. Es util para copias incrementales donde no se necesita un archivo de respaldo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-018">
<div class="flashcard-front">

**P:** Al realizar un backup del MBR con `dd`, ¿cuantos bytes comprende el bootloader dentro de los 512 bytes totales?

</div>
<div class="flashcard-back">

**R:** b) 446. El MBR (Master Boot Record) ocupa 512 bytes y se divide en tres partes: los primeros 446 bytes contienen el codigo del bootloader, los siguientes 64 bytes contienen la tabla de particiones (4 entradas de 16 bytes cada una), y los ultimos 2 bytes son la firma de arranque (0x55AA). Para copiar solo el bootloader: `dd if=/dev/sda of=bootloader.bin bs=446 count=1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que ventaja principal tienen los snapshots LVM para las operaciones de backup?

</div>
<div class="flashcard-back">

**R:** b) Permiten realizar backups consistentes de un sistema en funcionamiento sin detenerlo. Los snapshots LVM capturan el estado de un volumen logico en un instante preciso, permitiendo realizar backups de datos consistentes mientras el sistema sigue en funcionamiento. El snapshot se crea de forma casi instantanea y actua como una "foto congelada" del volumen. Si los datos cambian despues del snapshot, los bloques originales se conservan en el espacio del snapshot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que opcion de `rsync` permite limitar el ancho de banda utilizado durante la transferencia?

</div>
<div class="flashcard-back">

**R:** b) `--bwlimit=KBPS`. La opcion `--bwlimit` de rsync limita el ancho de banda utilizado durante la transferencia, especificado en kilobytes por segundo. Ejemplo: `rsync -avz --bwlimit=5000 /origen/ destino:/backup/` limita la transferencia a aproximadamente 5 MB/s. Es util para evitar saturar el enlace de red durante las operaciones de backup.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando tar para crear un backup completo incremental de /home usando un archivo snapshot en /var/backups/home.snar, comprimido con gzip, guardandolo en /backup/full.tar.gz. <input type="text" class="fill-blank" data-answer="tar --listed-incremental=/var/backups/home.snar -czf /backup/full.tar.gz /home" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tar --listed-incremental=/var/backups/home.snar -czf /backup/full.tar.gz /home. La primera vez que se ejecuta con `--listed-incremental`, tar crea el archivo snapshot y realiza un backup completo (nivel 0). En ejecuciones posteriores, tar lee el snapshot para determinar que archivos han cambiado y solo archiva los modificados. La opcion `-czf` crea un archivo comprimido con gzip.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando rsync para sincronizar /home/usuario/ con un servidor remoto (usuario@servidor:/backup/) usando compresion y via SSH. <input type="text" class="fill-blank" data-answer="rsync -avz /home/usuario/ usuario@servidor:/backup/" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** rsync -avz /home/usuario/ usuario@servidor:/backup/. El comando utiliza `-a` (archive mode, preserva permisos y atributos), `-v` (verbose) y `-z` (compresion). rsync usa SSH por defecto como transporte remoto, por lo que no es necesario especificar `-e ssh` a menos que se necesite un puerto diferente. La barra final en el origen indica que se copia el contenido del directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando dd para crear una imagen completa del disco /dev/sda y guardarla en /backup/disco.img con bloques de 4 megabytes y mostrando progreso. <input type="text" class="fill-blank" data-answer="dd if=/dev/sda of=/backup/disco.img bs=4M status=progress" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** dd if=/dev/sda of=/backup/disco.img bs=4M status=progress. El comando `dd` con `if` (input file) especifica el disco de origen, `of` (output file) el archivo destino, `bs=4M` establece un tamano de bloque de 4 megabytes (mejora el rendimiento) y `status=progress` muestra el avance de la copia en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para crear un archivo cpio a partir de todos los archivos .conf encontrados en /etc. <input type="text" class="fill-blank" data-answer="find /etc -name '*.conf' | cpio -ov > backup.cpio" data-alt="find /etc -name \"*.conf\" | cpio -ov > backup.cpio,find /etc -name '*.conf' | cpio -o > backup.cpio" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** find /etc -name '*.conf' | cpio -ov > backup.cpio. El comando `find` genera la lista de archivos que coinciden con el patron `*.conf` en /etc, y la pasa por tuberia a `cpio` en modo copy-out (`-o`) que crea el archivo. La opcion `-v` muestra los archivos procesados. La salida de cpio se redirige al archivo `backup.cpio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para crear un snapshot LVM de 5GB del volumen logico /dev/vg0/datos con el nombre snap_datos. <input type="text" class="fill-blank" data-answer="lvcreate -L 5G -s -n snap_datos /dev/vg0/datos" data-alt="lvcreate -s -L 5G -n snap_datos /dev/vg0/datos,lvcreate --size 5G --snapshot --name snap_datos /dev/vg0/datos" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lvcreate -L 5G -s -n snap_datos /dev/vg0/datos. El comando `lvcreate` con `-s` (snapshot) crea un snapshot del volumen logico especificado. `-L 5G` establece el tamano del snapshot (espacio para almacenar las diferencias), y `-n snap_datos` le asigna un nombre. El snapshot se puede montar como solo lectura para realizar un backup consistente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Entiende la diferencia entre incremental (desde el ultimo backup de cualquier ti...

</div>
<div class="flashcard-back">

**R:** Entiende la diferencia entre incremental (desde el ultimo backup de cualquier tipo) y diferencial (siempre desde el ultimo full). La restauracion incremental requiere el full + todos los incrementales en orden.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `--listed-incremental` es el metodo preferido para backups incrementales con tar...

</div>
<div class="flashcard-back">

**R:** `--listed-incremental` es el metodo preferido para backups incrementales con tar. Al restaurar, se usa `--listed-incremental=/dev/null` para indicar que se trata de una restauracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conoce bien las opciones `-a`, `-v`, `-z` y `--delete`. Recuerda la diferencia d...

</div>
<div class="flashcard-back">

**R:** Conoce bien las opciones `-a`, `-v`, `-z` y `--delete`. Recuerda la diferencia de comportamiento con y sin barra final en la ruta de origen. `rsync` usa SSH por defecto para conexiones remotas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `dd` es esencial para backup de MBR y clonacion de discos. Recuerda que `bs=512 ...

</div>
<div class="flashcard-back">

**R:** `dd` es esencial para backup de MBR y clonacion de discos. Recuerda que `bs=512 count=1` copia exactamente el MBR. Ten cuidado: `dd` no pide confirmacion y puede destruir datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `cpio` se usa frecuentemente con `find` para seleccionar archivos. Recuerda los ...

</div>
<div class="flashcard-back">

**R:** `cpio` se usa frecuentemente con `find` para seleccionar archivos. Recuerda los tres modos: `-o` (crear), `-i` (extraer) y `-p` (copiar directo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: No necesitas conocer la configuracion detallada de Amanda, Bacula o BURP, pero s...

</div>
<div class="flashcard-back">

**R:** No necesitas conocer la configuracion detallada de Amanda, Bacula o BURP, pero si debes saber que existen y sus caracteristicas principales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--delete`?

</div>
<div class="flashcard-back">

**R:** Elimina archivos en destino que no existen en origen

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `--exclude=PATRON`?

</div>
<div class="flashcard-back">

**R:** Excluye archivos que coinciden con el patron

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `--progress`?

</div>
<div class="flashcard-back">

**R:** Muestra progreso de la transferencia

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `-e`?

</div>
<div class="flashcard-back">

**R:** Especifica el shell remoto (generalmente ssh)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son dd - Copia a bajo nivel?

</div>
<div class="flashcard-back">

**R:** `dd` copia datos a nivel de bloques, ideal para clonar discos y particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.2">
</div>

<div class="flashcard" data-id="206.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son cpio - Archivado alternativo?

</div>
<div class="flashcard-back">

**R:** `cpio` (Copy In and Out) es una herramienta de archivado que lee nombres de archivo desde la entrada estandar.

</div>
</div>

---

