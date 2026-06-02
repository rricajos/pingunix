---
title: "203.2 - Mantenimiento del sistema de archivos"
tags: [lpic-2, examen-201, tema-203, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "203"
subtema: "203.2"
---

# 203.2 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un administrador necesita reducir el porcentaje de bloques reservados para root en una particion ext4 de 2TB usada como almacenamiento de datos, donde el 5% por defecto desperdicia 100GB. ¿Que comando debe usar?

a) `resize2fs -m 1 /dev/sdb1`
b) `tune2fs -m 1 /dev/sdb1`
c) `e2fsck -m 1 /dev/sdb1`
d) `mkfs.ext4 -m 1 /dev/sdb1`

<details>
<summary>Respuesta</summary>

**b) `tune2fs -m 1 /dev/sdb1`**

`tune2fs -m` cambia el porcentaje de bloques reservados para el superusuario en un sistema de archivos ext2/3/4 existente. Con `-m 1` se reduce al 1%, liberando espacio significativo en discos grandes. `resize2fs` es para cambiar el tamano del FS, `e2fsck` para verificar, y `mkfs.ext4` destruiria todos los datos al crear un nuevo FS.
</details>

---

### Pregunta 2

¿Cual es la herramienta correcta para reparar un sistema de archivos XFS dañado?

a) `fsck.xfs /dev/sda3`
b) `e2fsck /dev/sda3`
c) `xfs_repair /dev/sda3`
d) `xfs_check /dev/sda3`

<details>
<summary>Respuesta</summary>

**c) `xfs_repair /dev/sda3`**

`xfs_repair` es la unica herramienta real para reparar sistemas de archivos XFS. Aunque `fsck.xfs` existe en el sistema, es un placeholder que no realiza ninguna operacion real de reparacion. `e2fsck` es exclusiva para ext2/3/4. `xfs_check` es una herramienta antigua de verificacion que ha sido reemplazada por `xfs_repair -n`.
</details>

---

### Pregunta 3

Un administrador quiere expandir un sistema de archivos XFS que esta en `/dev/sda3` montado en `/datos`. ¿Que comando debe usar?

a) `resize2fs /dev/sda3`
b) `xfs_growfs /dev/sda3`
c) `xfs_growfs /datos`
d) `xfs_resize /datos`

<details>
<summary>Respuesta</summary>

**c) `xfs_growfs /datos`**

`xfs_growfs` opera sobre el **punto de montaje**, no sobre el dispositivo. Ademas, el sistema de archivos XFS debe estar **montado** para poder expandirse. Esto contrasta con `resize2fs` que opera sobre el dispositivo. La opcion b) es incorrecta porque `xfs_growfs` espera un punto de montaje. `xfs_resize` no existe como comando.
</details>

---

### Pregunta 4

¿Que comando muestra informacion detallada del superbloque de un sistema de archivos ext4, incluyendo el numero de bloques, inodos y la ultima fecha de verificacion?

a) `tune2fs -l /dev/sda1`
b) `dumpe2fs -h /dev/sda1`
c) `e2fsck -n /dev/sda1`
d) `xfs_info /dev/sda1`

<details>
<summary>Respuesta</summary>

**b) `dumpe2fs -h /dev/sda1`**

`dumpe2fs -h` muestra la informacion del superbloque sin listar los descriptores de grupo, incluyendo UUID, etiqueta, conteo de bloques e inodos, tamano de bloque, estado del FS, conteo de montajes, fechas de verificacion y caracteristicas habilitadas. `tune2fs -l` tambien muestra informacion similar. `e2fsck -n` verifica sin reparar pero no esta diseñado para mostrar informacion del superbloque. `xfs_info` es para XFS.
</details>

---

### Pregunta 5

¿Que se debe hacer ANTES de reducir el tamano de un sistema de archivos ext4 con `resize2fs`?

a) Montar el sistema de archivos en modo lectura-escritura
b) Ejecutar `e2fsck -f` sobre el sistema de archivos desmontado
c) Ejecutar `xfs_repair` sobre el sistema de archivos
d) Crear un respaldo del superbloque con `dumpe2fs`

<details>
<summary>Respuesta</summary>

**b) Ejecutar `e2fsck -f` sobre el sistema de archivos desmontado**

Antes de reducir un sistema de archivos ext4, es obligatorio que este desmontado y que se ejecute una verificacion forzada con `e2fsck -f`. Si se intenta reducir sin pasar fsck, `resize2fs` mostrara un error indicando que primero debe ejecutarse e2fsck. Esto garantiza la integridad de los datos antes de la operacion potencialmente destructiva de reduccion.
</details>

---

### Pregunta 6

Un administrador quiere verificar el estado de salud de un disco duro de forma rapida usando SMART. ¿Que comando es el mas adecuado?

a) `smartctl -a /dev/sda`
b) `smartctl -H /dev/sda`
c) `smartctl -t short /dev/sda`
d) `smartctl -A /dev/sda`

<details>
<summary>Respuesta</summary>

**b) `smartctl -H /dev/sda`**

`smartctl -H` (Health) muestra de forma rapida el estado de salud general del disco, reportando "PASSED" o "FAILED". Es la forma mas directa de verificar si el disco esta en buen estado. La opcion `-a` muestra toda la informacion disponible (mas verbosa), `-t short` ejecuta un test que tarda varios minutos, y `-A` muestra los atributos sin el veredicto de salud resumido.
</details>

---

### Pregunta 7

¿Cual de las siguientes afirmaciones sobre XFS es correcta?

a) XFS puede expandirse y reducirse en linea
b) XFS solo puede expandirse, nunca reducirse
c) XFS solo puede reducirse, nunca expandirse
d) XFS no soporta cambios de tamano

<details>
<summary>Respuesta</summary>

**b) XFS solo puede expandirse, nunca reducirse**

Esta es una limitacion fundamental de XFS: solo soporta el crecimiento del sistema de archivos mediante `xfs_growfs`, pero no permite la reduccion. Si se necesita reducir una particion XFS, la unica opcion es respaldar los datos, crear un sistema de archivos nuevo mas pequeño y restaurar. Ademas, `xfs_growfs` requiere que el sistema de archivos este montado.
</details>

---

### Pregunta 8

¿Que comando agrega un journal a un sistema de archivos ext2, convirtiendolo efectivamente en ext3?

a) `mkfs.ext3 /dev/sda1`
b) `tune2fs -j /dev/sda1`
c) `e2fsck -j /dev/sda1`
d) `resize2fs -j /dev/sda1`

<details>
<summary>Respuesta</summary>

**b) `tune2fs -j /dev/sda1`**

`tune2fs -j` agrega un journal a un sistema de archivos ext2 existente, convirtiendolo en ext3 sin destruir los datos. Esta es una forma no destructiva de actualizar el sistema de archivos. La opcion a) `mkfs.ext3` crearia un nuevo sistema de archivos desde cero, destruyendo todos los datos existentes.
</details>

---

### Pregunta 9

Un administrador configura `smartd` para monitorizar discos. ¿En que archivo se define la configuracion del demonio?

a) `/etc/smart.conf`
b) `/etc/smartd.conf`
c) `/etc/smartctl.conf`
d) `/etc/sysconfig/smartd`

<details>
<summary>Respuesta</summary>

**b) `/etc/smartd.conf`**

El archivo `/etc/smartd.conf` contiene la configuracion del demonio `smartd`. En este archivo se especifican los discos a monitorizar, las direcciones de correo para alertas y la programacion de tests automaticos. La directiva `DEVICESCAN` puede usarse para monitorizar automaticamente todos los discos detectados. Tras modificar el archivo, se debe reiniciar el servicio con `systemctl restart smartd`.
</details>

---

### Pregunta 10

Un administrador necesita crear un sistema de archivos FAT32 en una memoria USB (`/dev/sdb1`) con la etiqueta "BACKUP". ¿Que comando es correcto?

a) `mkfs.fat -F 32 -n BACKUP /dev/sdb1`
b) `mkfs.ext4 -L BACKUP /dev/sdb1`
c) `mkfs.ntfs -L BACKUP /dev/sdb1`
d) `mkfs.fat -F 16 -n BACKUP /dev/sdb1`

<details>
<summary>Respuesta</summary>

**a) `mkfs.fat -F 32 -n BACKUP /dev/sdb1`**

`mkfs.fat` (o su alias `mkfs.vfat`) con la opcion `-F 32` crea un sistema de archivos FAT32. La opcion `-n` establece la etiqueta del volumen. Tambien se podria usar `mkfs.vfat -F 32 -n BACKUP /dev/sdb1`. La opcion `-F 16` crearia FAT16 en lugar de FAT32. La opcion b) crearia ext4, que no es compatible con la mayoria de dispositivos y sistemas operativos.
</details>

---

### Pregunta 11

Un administrador quiere desactivar la verificacion automatica por numero de montajes en una particion ext4. ¿Que comando debe usar?

a) `tune2fs -c 0 /dev/sda1`
b) `e2fsck -c 0 /dev/sda1`
c) `fsck --disable /dev/sda1`
d) `tune2fs -i 0 /dev/sda1`

<details>
<summary>Respuesta</summary>

**a) `tune2fs -c 0 /dev/sda1`**

La opcion `-c` de `tune2fs` establece el numero maximo de montajes antes de que se fuerce una verificacion con fsck. Con el valor `0` o `-1` se desactiva esta comprobacion. La opcion `-i 0` desactiva la verificacion por intervalo de tiempo, no por numero de montajes. `e2fsck -c` realiza una busqueda de bloques defectuosos, que es una funcionalidad completamente diferente.
</details>

---

### Pregunta 12

¿Que comando se utiliza para cambiar la etiqueta de un sistema de archivos XFS existente?

a) `tune2fs -L "nueva" /dev/sda1`
b) `xfs_admin -L "nueva" /dev/sda1`
c) `xfs_label "nueva" /dev/sda1`
d) `xfs_info -L "nueva" /dev/sda1`

<details>
<summary>Respuesta</summary>

**b) `xfs_admin -L "nueva" /dev/sda1`**

`xfs_admin` es la herramienta para modificar parametros de sistemas de archivos XFS, y la opcion `-L` cambia la etiqueta. El sistema de archivos debe estar desmontado para esta operacion. `tune2fs` es exclusiva para ext2/3/4. `xfs_info` solo muestra informacion pero no modifica parametros. No existe un comando llamado `xfs_label`.
</details>

---

### Pregunta 13

¿Que opcion de `e2fsck` repara automaticamente los errores sin preguntar al usuario?

a) `-a`
b) `-n`
c) `-y`
d) `-f`

<details>
<summary>Respuesta</summary>

**c) `-y`**

La opcion `-y` de `e2fsck` responde "yes" automaticamente a todas las preguntas de reparacion, lo que permite una reparacion completamente automatica. La opcion `-p` tambien repara automaticamente pero solo errores que son seguros de corregir. La opcion `-n` abre el sistema de archivos en modo solo lectura sin reparar nada. La opcion `-f` fuerza la verificacion incluso si el sistema de archivos parece limpio.
</details>

---

### Pregunta 14

Un administrador ejecuta `xfs_repair -n /dev/sda3`. ¿Que accion realiza este comando?

a) Repara el sistema de archivos XFS de forma no destructiva
b) Verifica el sistema de archivos sin realizar ninguna reparacion
c) Reconstruye el log del sistema de archivos
d) Repara solo los bloques de nombres de archivo

<details>
<summary>Respuesta</summary>

**b) Verifica el sistema de archivos sin realizar ninguna reparacion**

La opcion `-n` de `xfs_repair` ejecuta el modo "dry-run" o "no modify", que verifica la integridad del sistema de archivos XFS sin realizar cambios. Reporta los problemas encontrados pero no los corrige. Es equivalente a `fsck -n` para ext y es util para diagnosticar el estado del sistema de archivos antes de proceder con una reparacion real.
</details>

---

### Pregunta 15

¿Que atributo SMART (ID 5) es considerado uno de los indicadores mas criticos de fallo inminente de un disco duro?

a) Power On Hours
b) Temperature
c) Reallocated Sector Count
d) Start Stop Count

<details>
<summary>Respuesta</summary>

**c) Reallocated Sector Count**

El atributo Reallocated Sector Count (ID 5) indica el numero de sectores que han sido reasignados a la zona de reserva del disco porque se detectaron como defectuosos. Un valor creciente de sectores reasignados es una señal clara de degradacion del medio magnetico y un indicador fiable de posible fallo del disco. Junto con Current Pending Sector (ID 197), es el atributo mas critico a monitorizar.
</details>

---

### Pregunta 16

¿Que herramienta se utiliza para obtener informacion detallada de un sistema de archivos XFS que esta montado en `/datos`?

a) `dumpe2fs /dev/sda3`
b) `xfs_info /datos`
c) `tune2fs -l /dev/sda3`
d) `xfs_admin -l /datos`

<details>
<summary>Respuesta</summary>

**b) `xfs_info /datos`**

`xfs_info` muestra informacion detallada de un sistema de archivos XFS, incluyendo el tamano de bloque, el numero de bloques, la configuracion del log y los grupos de asignacion. Acepta tanto el punto de montaje como el dispositivo como argumento, pero el sistema de archivos **debe estar montado**. `dumpe2fs` y `tune2fs -l` son exclusivos para ext2/3/4.
</details>

---

### Pregunta 17

Un administrador quiere ejecutar un test SMART completo (largo) en el disco `/dev/sda`. ¿Que comando debe usar?

a) `smartctl -t short /dev/sda`
b) `smartctl -H /dev/sda`
c) `smartctl -t long /dev/sda`
d) `smartctl -a /dev/sda`

<details>
<summary>Respuesta</summary>

**c) `smartctl -t long /dev/sda`**

El comando `smartctl -t long` ejecuta un test SMART extenso (completo) que analiza toda la superficie del disco. Este test puede tardar varias horas dependiendo del tamano del disco. El test corto (`-t short`) es una verificacion rapida que tarda solo unos minutos. La opcion `-H` verifica el estado de salud general y `-a` muestra toda la informacion sin ejecutar tests.
</details>

---

### Pregunta 18

¿Que opcion de `mkfs.ext4` permite especificar un tamano de bloque de 4096 bytes durante la creacion del sistema de archivos?

a) `-s 4096`
b) `-b 4096`
c) `-B 4096`
d) `-block 4096`

<details>
<summary>Respuesta</summary>

**b) `-b 4096`**

La opcion `-b` de `mkfs.ext4` establece el tamano de bloque en bytes. Los valores validos son 1024, 2048 y 4096 bytes. Un tamano de bloque mayor (4096) es optimo para archivos grandes y es el valor por defecto en la mayoria de distribuciones modernas. Un tamano menor (1024) es mas eficiente para sistemas con muchos archivos pequeños, ya que reduce la fragmentacion interna.
</details>

---

### Pregunta 19

¿Que archivo, si existe en la raiz del sistema de archivos raiz, fuerza la ejecucion de `fsck` en el proximo arranque?

a) `/etc/forcefsck`
b) `/forcefsck`
c) `/boot/forcefsck`
d) `/run/forcefsck`

<details>
<summary>Respuesta</summary>

**b) `/forcefsck`**

La presencia del archivo `/forcefsck` en la raiz del sistema de archivos indica al proceso de arranque que debe ejecutar `fsck` en todas las particiones durante el proximo inicio. Una vez completada la verificacion, el archivo suele eliminarse automaticamente. Este mecanismo es util cuando se sospecha de corrupcion del sistema de archivos y se necesita una verificacion forzada.
</details>

---

### Pregunta 20

¿Que opcion de `tune2fs` permite cambiar el UUID de un sistema de archivos ext4 a un valor aleatorio?

a) `tune2fs -U random /dev/sda1`
b) `tune2fs --uuid new /dev/sda1`
c) `tune2fs -u random /dev/sda1`
d) `tune2fs -O uuid_change /dev/sda1`

<details>
<summary>Respuesta</summary>

**a) `tune2fs -U random /dev/sda1`**

La opcion `-U` (mayuscula) de `tune2fs` permite cambiar el UUID del sistema de archivos. El parametro `random` genera un nuevo UUID aleatorio. Tambien se puede especificar un UUID concreto o usar `clear` para eliminarlo. Es importante actualizar `/etc/fstab` despues de cambiar el UUID si se referencia por UUID. La opcion `-u` (minuscula) cambia el usuario de los bloques reservados.
</details>

---

### Pregunta 21

¿Que comando se utiliza para crear un sistema de archivos ext4 en la particion `/dev/sdb1`?

<input type="text" class="fill-blank" data-answer="mkfs.ext4 /dev/sdb1" data-alt="mkfs -t ext4 /dev/sdb1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mkfs.ext4 /dev/sdb1**

El comando `mkfs.ext4` crea un nuevo sistema de archivos ext4 en el dispositivo especificado. Tambien se puede usar la forma generica `mkfs -t ext4 /dev/sdb1`. Esta operacion destruye todos los datos existentes en la particion. Se pueden agregar opciones como `-L` para etiqueta, `-b` para tamano de bloque o `-m` para porcentaje de bloques reservados.
</details>

---

### Pregunta 22

¿Que comando se utiliza para expandir un sistema de archivos XFS montado en `/datos` al tamano maximo disponible de la particion?

<input type="text" class="fill-blank" data-answer="xfs_growfs /datos" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**xfs_growfs /datos**

El comando `xfs_growfs` expande un sistema de archivos XFS al tamano maximo disponible en la particion subyacente. A diferencia de `resize2fs`, `xfs_growfs` opera sobre el punto de montaje (no sobre el dispositivo) y el sistema de archivos debe estar montado. XFS solo puede expandirse, nunca reducirse, lo cual es una limitacion importante a recordar.
</details>

---

### Pregunta 23

¿Que comando muestra solo la informacion del superbloque (sin descriptores de grupo) de un sistema de archivos ext4 en `/dev/sda1`?

<input type="text" class="fill-blank" data-answer="dumpe2fs -h /dev/sda1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**dumpe2fs -h /dev/sda1**

La opcion `-h` de `dumpe2fs` muestra unicamente la informacion del superbloque, omitiendo los descriptores de grupo que producen una salida extensa. Esto incluye UUID, etiqueta, tamano del FS, conteo de bloques e inodos, estado del FS, conteo de montajes, caracteristicas habilitadas y fechas de verificacion. Sin `-h`, la salida seria mucho mas larga.
</details>

---

### Pregunta 24

¿Que comando agrega un journal a un sistema de archivos ext2 en `/dev/sda1`, convirtiendolo en ext3?

<input type="text" class="fill-blank" data-answer="tune2fs -j /dev/sda1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**tune2fs -j /dev/sda1**

El comando `tune2fs -j` agrega un journal (diario de transacciones) a un sistema de archivos ext2, convirtiendolo efectivamente en ext3 sin destruir los datos existentes. Es una conversion no destructiva y reversible (se puede eliminar el journal con `tune2fs -O ^has_journal`). El journal mejora la recuperacion ante fallos al registrar las operaciones pendientes.
</details>

---

### Pregunta 25

¿Que comando repara un sistema de archivos XFS en `/dev/sda3` que esta desmontado?

<input type="text" class="fill-blank" data-answer="xfs_repair /dev/sda3" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**xfs_repair /dev/sda3**

`xfs_repair` es la herramienta estandar para reparar sistemas de archivos XFS dañados. El sistema de archivos debe estar desmontado antes de ejecutar la reparacion. Aunque `fsck.xfs` existe en el sistema, es un placeholder que no realiza ninguna operacion real. En casos extremos, se puede usar `xfs_repair -L` para forzar la reconstruccion del log, pero esto puede causar perdida de datos.
</details>
