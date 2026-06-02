---
title: "206.2 - Operaciones de backup"
tags: [lpic-2, examen-201, tema-206, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "206"
subtema: "206.2"
---

# 206.2 - Ejercicios: Operaciones de backup

### Pregunta 1

¿Que opcion de `tar` permite realizar backups incrementales utilizando un archivo snapshot?

a) `--incremental`
b) `--newer`
c) `--listed-incremental`
d) `--snapshot`

<details><summary>Respuesta</summary>

**c) `--listed-incremental`**

La opcion `--listed-incremental=ARCHIVO` permite a tar realizar backups incrementales. El archivo snapshot (.snar) registra el estado de los archivos. En la primera ejecucion se crea un backup completo; en ejecuciones posteriores solo se archivan los archivos nuevos o modificados.

</details>

### Pregunta 2

Al ejecutar `rsync -av /home/usuario/ /backup/usuario/`, ¿que efecto tiene la barra final (`/`) en la ruta de origen?

a) No tiene ningun efecto
b) Copia el contenido del directorio sin incluir el directorio en si
c) Fuerza la eliminacion de archivos en el destino
d) Activa la compresion durante la transferencia

<details><summary>Respuesta</summary>

**b) Copia el contenido del directorio sin incluir el directorio en si**

En rsync, la barra final en la ruta de origen indica que se debe copiar el contenido del directorio. Sin la barra (`/home/usuario`), rsync copiaria el directorio `usuario` dentro del destino, creando `/backup/usuario/usuario/`.

</details>

### Pregunta 3

¿Que comando crea una copia exacta del MBR (Master Boot Record) de un disco?

a) `dd if=/dev/sda of=mbr.bin bs=446 count=1`
b) `dd if=/dev/sda of=mbr.bin bs=512 count=1`
c) `dd if=/dev/sda of=mbr.bin bs=1024 count=1`
d) `cp /dev/sda mbr.bin`

<details><summary>Respuesta</summary>

**b) `dd if=/dev/sda of=mbr.bin bs=512 count=1`**

El MBR ocupa exactamente los primeros 512 bytes del disco: 446 bytes para el bootloader, 64 bytes para la tabla de particiones y 2 bytes para la firma (0x55AA). El comando `dd if=/dev/sda of=mbr.bin bs=512 count=1` copia estos 512 bytes completos.

</details>

### Pregunta 4

¿Cual es la diferencia principal entre un backup incremental y un backup diferencial?

a) El incremental es mas rapido de restaurar
b) El diferencial copia los cambios desde el ultimo backup de cualquier tipo
c) El incremental copia los cambios desde el ultimo backup (cualquier tipo), el diferencial desde el ultimo backup completo
d) No hay diferencia significativa entre ambos

<details><summary>Respuesta</summary>

**c) El incremental copia los cambios desde el ultimo backup (cualquier tipo), el diferencial desde el ultimo backup completo**

El backup incremental registra solo los cambios desde la ultima copia (sea full o incremental), generando archivos pequenos pero requiriendo toda la cadena para restaurar. El diferencial siempre referencia al ultimo backup completo, lo que produce archivos mas grandes pero simplifica la restauracion (solo se necesita el full + el ultimo diferencial).

</details>

### Pregunta 5

¿Que opcion de `rsync` elimina en el destino los archivos que ya no existen en el origen?

a) `--remove`
b) `--clean`
c) `--delete`
d) `--purge`

<details><summary>Respuesta</summary>

**c) `--delete`**

La opcion `--delete` hace que rsync elimine del destino cualquier archivo que no exista en el origen, creando una replica exacta. Es muy util para mantener un espejo actualizado, pero debe usarse con precaucion ya que puede causar perdida de datos si se configura incorrectamente.

</details>

### Pregunta 6

¿En que modo opera `cpio` cuando se usa con la opcion `-o`?

a) Copy-in (extraccion)
b) Copy-out (creacion de archivo)
c) Copy-pass (copia directa)
d) Copy-over (sobreescritura)

<details><summary>Respuesta</summary>

**b) Copy-out (creacion de archivo)**

El modo copy-out (`-o`) de cpio lee nombres de archivo desde la entrada estandar y crea un archivo cpio en la salida estandar. Ejemplo: `find /etc | cpio -ov > backup.cpio`. Los otros modos son copy-in (`-i`) para extraer y copy-pass (`-p`) para copiar directamente entre directorios.

</details>

### Pregunta 7

¿Que opcion de rsync se recomienda para realizar una simulacion antes de ejecutar la sincronizacion real?

a) `--test`
b) `--simulate`
c) `-n` o `--dry-run`
d) `--preview`

<details><summary>Respuesta</summary>

**c) `-n` o `--dry-run`**

La opcion `-n` (o `--dry-run`) ejecuta rsync sin realizar ningun cambio real, mostrando lo que se haria. Es especialmente importante usarla antes de ejecutar rsync con `--delete` para verificar que no se eliminaran archivos importantes.

</details>

### Pregunta 8

¿Cual de las siguientes herramientas es un sistema de backup empresarial con arquitectura modular que incluye Director, Storage Daemon y File Daemon?

a) Amanda
b) Bacula
c) rsync
d) BURP

<details><summary>Respuesta</summary>

**b) Bacula**

Bacula utiliza una arquitectura modular compuesta por: el Director (coordina las operaciones), el Storage Daemon (gestiona los medios de almacenamiento), el File Daemon (agente en los clientes) y la Console (interfaz de administracion). Ademas usa una base de datos como catalogo.

</details>

### Pregunta 9

Para restaurar una secuencia de backups incrementales realizados con `tar --listed-incremental`, ¿que valor se usa para el archivo snapshot durante la restauracion?

a) El mismo archivo snapshot usado al crear el backup
b) `/dev/null`
c) Un archivo snapshot vacio nuevo
d) No se necesita especificar un archivo snapshot para restaurar

<details><summary>Respuesta</summary>

**b) `/dev/null`**

Al restaurar un backup incremental, se usa `--listed-incremental=/dev/null` para indicar a tar que se trata de una operacion de restauracion. Ejemplo: `tar --listed-incremental=/dev/null -xzf backup-inc.tar.gz`. Esto asegura que tar procese correctamente las eliminaciones y movimientos de archivos registrados en el backup.

</details>

### Pregunta 10

¿Que significa la opcion `-a` de rsync?

a) Solo sincroniza archivos (no directorios)
b) Activa el modo automatico sin intervencion del usuario
c) Es equivalente a `-rlptgoD` (modo archivo: recursivo, enlaces, permisos, tiempos, grupo, owner, devices)
d) Agrega archivos al destino sin eliminar nada

<details><summary>Respuesta</summary>

**c) Es equivalente a `-rlptgoD` (modo archivo: recursivo, enlaces, permisos, tiempos, grupo, owner, devices)**

La opcion `-a` (archive) de rsync es un atajo que combina varias opciones: `-r` (recursivo), `-l` (enlaces simbolicos), `-p` (permisos), `-t` (tiempos de modificacion), `-g` (grupo), `-o` (propietario) y `-D` (dispositivos y archivos especiales). Es la opcion mas comun para realizar backups ya que preserva la mayoria de los atributos de los archivos.

</details>

### Pregunta 11

¿Que opcion de `dd` muestra el progreso de la copia en tiempo real?

a) `progress=yes`
b) `status=progress`
c) `--show-progress`
d) `verbose=on`

<details><summary>Respuesta</summary>

**b) `status=progress`**

La opcion `status=progress` de `dd` muestra estadisticas de progreso periodicas durante la copia, incluyendo la cantidad de datos transferidos, la velocidad y el tiempo transcurrido. Sin esta opcion, `dd` no muestra ninguna salida hasta que la operacion finaliza, lo que puede ser confuso en copias grandes y lentas.

</details>

### Pregunta 12

¿Que opcion de `rsync` comprime los datos durante la transferencia para reducir el ancho de banda utilizado?

a) `-c`
b) `-z`
c) `--compress-level`
d) `-C`

<details><summary>Respuesta</summary>

**b) `-z`**

La opcion `-z` (compress) de rsync comprime los datos durante la transferencia, reduciendo el ancho de banda utilizado. Es especialmente util en transferencias remotas sobre redes lentas. La opcion `-c` (checksum) fuerza la verificacion por checksum en lugar de por tamano/fecha, y `-C` excluye archivos comunes de control de versiones.

</details>

### Pregunta 13

Un administrador necesita crear un backup de /home que incluya solo los archivos modificados despues de una fecha especifica, sin usar snapshot. ¿Que opcion de tar debe utilizar?

a) `--after-date`
b) `--newer`
c) `--modified-since`
d) `--changed`

<details><summary>Respuesta</summary>

**b) `--newer`**

La opcion `--newer` (o `--after-date`) de tar permite archivar solo los archivos cuya fecha de modificacion sea posterior a la fecha especificada. Ejemplo: `tar -czf cambios.tar.gz --newer="2024-01-15" /home`. Tambien se puede usar `--newer-mtime` para comparar con la fecha de un archivo de referencia.

</details>

### Pregunta 14

¿Que sistema de backup empresarial utiliza herramientas nativas como `tar` y `dump` como backend para realizar las copias de seguridad?

a) Bacula
b) BURP
c) Amanda
d) rsnapshot

<details><summary>Respuesta</summary>

**c) Amanda**

Amanda (Advanced Maryland Automatic Network Disk Archiver) es un sistema de backup en red que utiliza herramientas nativas del sistema como `tar` y `dump` como backend para realizar las copias. Esto le da la ventaja de que los backups pueden ser restaurados con herramientas estandar incluso sin Amanda instalado. Bacula usa su propio formato de almacenamiento.

</details>

### Pregunta 15

¿Que opcion de `dd` permite continuar la copia ignorando errores de lectura y rellenando con ceros?

a) `conv=noerror,sync`
b) `skip=errors`
c) `iflag=noerror`
d) `conv=continue`

<details><summary>Respuesta</summary>

**a) `conv=noerror,sync`**

La combinacion `conv=noerror,sync` es esencial para recuperar datos de discos danados. `noerror` indica a `dd` que continue la copia cuando encuentre errores de lectura (en lugar de abortar), y `sync` rellena los bloques no leidos con bytes nulos (ceros) para mantener la alineacion correcta de los datos.

</details>

### Pregunta 16

¿Que comando de `rsync` se utiliza para crear backups incrementales con hardlinks, similar al estilo de Time Machine de Apple?

a) `rsync -av --incremental`
b) `rsync -av --link-dest=DIR_ANTERIOR`
c) `rsync -av --hardlink`
d) `rsync -av --backup-link`

<details><summary>Respuesta</summary>

**b) `rsync -av --link-dest=DIR_ANTERIOR`**

La opcion `--link-dest` de rsync permite crear backups incrementales eficientes usando hardlinks. Los archivos que no han cambiado respecto al directorio de referencia se enlazan con hardlinks en lugar de copiarse, ahorrando espacio en disco. Cada backup parece ser completo pero solo los archivos modificados ocupan espacio adicional.

</details>

### Pregunta 17

¿Que modo de `cpio` se utiliza para copiar archivos directamente entre directorios sin crear un archivo intermedio?

a) Copy-out (`-o`)
b) Copy-in (`-i`)
c) Copy-pass (`-p`)
d) Copy-direct (`-d`)

<details><summary>Respuesta</summary>

**c) Copy-pass (`-p`)**

El modo copy-pass (`-p`) de cpio copia archivos directamente de un directorio a otro sin necesidad de crear un archivo cpio intermedio. Se usa combinado con `find`: `find /home -newer /var/backups/timestamp | cpio -pdv /backup/`. Es util para copias incrementales donde no se necesita un archivo de respaldo.

</details>

### Pregunta 18

Al realizar un backup del MBR con `dd`, ¿cuantos bytes comprende el bootloader dentro de los 512 bytes totales?

a) 512
b) 446
c) 64
d) 2

<details><summary>Respuesta</summary>

**b) 446**

El MBR (Master Boot Record) ocupa 512 bytes y se divide en tres partes: los primeros 446 bytes contienen el codigo del bootloader, los siguientes 64 bytes contienen la tabla de particiones (4 entradas de 16 bytes cada una), y los ultimos 2 bytes son la firma de arranque (0x55AA). Para copiar solo el bootloader: `dd if=/dev/sda of=bootloader.bin bs=446 count=1`.

</details>

### Pregunta 19

¿Que ventaja principal tienen los snapshots LVM para las operaciones de backup?

a) Son mas rapidos que tar para comprimir archivos
b) Permiten realizar backups consistentes de un sistema en funcionamiento sin detenerlo
c) Eliminan la necesidad de espacio en disco adicional para el backup
d) Encriptan automaticamente los datos del backup

<details><summary>Respuesta</summary>

**b) Permiten realizar backups consistentes de un sistema en funcionamiento sin detenerlo**

Los snapshots LVM capturan el estado de un volumen logico en un instante preciso, permitiendo realizar backups de datos consistentes mientras el sistema sigue en funcionamiento. El snapshot se crea de forma casi instantanea y actua como una "foto congelada" del volumen. Si los datos cambian despues del snapshot, los bloques originales se conservan en el espacio del snapshot.

</details>

### Pregunta 20

¿Que opcion de `rsync` permite limitar el ancho de banda utilizado durante la transferencia?

a) `--speed-limit=KBPS`
b) `--bwlimit=KBPS`
c) `--max-rate=KBPS`
d) `--throttle=KBPS`

<details><summary>Respuesta</summary>

**b) `--bwlimit=KBPS`**

La opcion `--bwlimit` de rsync limita el ancho de banda utilizado durante la transferencia, especificado en kilobytes por segundo. Ejemplo: `rsync -avz --bwlimit=5000 /origen/ destino:/backup/` limita la transferencia a aproximadamente 5 MB/s. Es util para evitar saturar el enlace de red durante las operaciones de backup.

</details>

### Pregunta 21

Escribe el comando tar para crear un backup completo incremental de /home usando un archivo snapshot en /var/backups/home.snar, comprimido con gzip, guardandolo en /backup/full.tar.gz.

<input type="text" class="fill-blank" data-answer="tar --listed-incremental=/var/backups/home.snar -czf /backup/full.tar.gz /home" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tar --listed-incremental=/var/backups/home.snar -czf /backup/full.tar.gz /home**

La primera vez que se ejecuta con `--listed-incremental`, tar crea el archivo snapshot y realiza un backup completo (nivel 0). En ejecuciones posteriores, tar lee el snapshot para determinar que archivos han cambiado y solo archiva los modificados. La opcion `-czf` crea un archivo comprimido con gzip.

</details>

### Pregunta 22

Escribe el comando rsync para sincronizar /home/usuario/ con un servidor remoto (usuario@servidor:/backup/) usando compresion y via SSH.

<input type="text" class="fill-blank" data-answer="rsync -avz /home/usuario/ usuario@servidor:/backup/" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rsync -avz /home/usuario/ usuario@servidor:/backup/**

El comando utiliza `-a` (archive mode, preserva permisos y atributos), `-v` (verbose) y `-z` (compresion). rsync usa SSH por defecto como transporte remoto, por lo que no es necesario especificar `-e ssh` a menos que se necesite un puerto diferente. La barra final en el origen indica que se copia el contenido del directorio.

</details>

### Pregunta 23

Escribe el comando dd para crear una imagen completa del disco /dev/sda y guardarla en /backup/disco.img con bloques de 4 megabytes y mostrando progreso.

<input type="text" class="fill-blank" data-answer="dd if=/dev/sda of=/backup/disco.img bs=4M status=progress" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dd if=/dev/sda of=/backup/disco.img bs=4M status=progress**

El comando `dd` con `if` (input file) especifica el disco de origen, `of` (output file) el archivo destino, `bs=4M` establece un tamano de bloque de 4 megabytes (mejora el rendimiento) y `status=progress` muestra el avance de la copia en tiempo real.

</details>

### Pregunta 24

Escribe el comando para crear un archivo cpio a partir de todos los archivos .conf encontrados en /etc.

<input type="text" class="fill-blank" data-answer="find /etc -name '*.conf' | cpio -ov > backup.cpio" data-alt="find /etc -name \"*.conf\" | cpio -ov > backup.cpio,find /etc -name '*.conf' | cpio -o > backup.cpio" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find /etc -name '*.conf' | cpio -ov > backup.cpio**

El comando `find` genera la lista de archivos que coinciden con el patron `*.conf` en /etc, y la pasa por tuberia a `cpio` en modo copy-out (`-o`) que crea el archivo. La opcion `-v` muestra los archivos procesados. La salida de cpio se redirige al archivo `backup.cpio`.

</details>

### Pregunta 25

Escribe el comando para crear un snapshot LVM de 5GB del volumen logico /dev/vg0/datos con el nombre snap_datos.

<input type="text" class="fill-blank" data-answer="lvcreate -L 5G -s -n snap_datos /dev/vg0/datos" data-alt="lvcreate -s -L 5G -n snap_datos /dev/vg0/datos,lvcreate --size 5G --snapshot --name snap_datos /dev/vg0/datos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lvcreate -L 5G -s -n snap_datos /dev/vg0/datos**

El comando `lvcreate` con `-s` (snapshot) crea un snapshot del volumen logico especificado. `-L 5G` establece el tamano del snapshot (espacio para almacenar las diferencias), y `-n snap_datos` le asigna un nombre. El snapshot se puede montar como solo lectura para realizar un backup consistente.

</details>
