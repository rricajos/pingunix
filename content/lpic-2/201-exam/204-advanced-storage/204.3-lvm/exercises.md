---
title: "204.3 - LVM"
tags: [lpic-2, examen-201, tema-204, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "204"
subtema: "204.3"
---

# 204.3 - Ejercicios: LVM

### Pregunta 1
Cual es el orden correcto de la jerarquia LVM, de nivel mas bajo a mas alto?

a) LV -> VG -> PV -> Disco
b) Disco -> VG -> PV -> LV
c) Disco -> PV -> VG -> LV
d) PV -> Disco -> LV -> VG

<details>
<summary>Respuesta</summary>

**c) Disco -> PV -> VG -> LV**

La jerarquia de LVM es: disco fisico o particion -> Physical Volume (PV) -> Volume Group (VG) -> Logical Volume (LV). Primero se inicializan los discos como PVs con `pvcreate`, luego se agrupan en VGs con `vgcreate`, y finalmente se crean LVs con `lvcreate` dentro del VG.
</details>

---

### Pregunta 2
Un administrador quiere ampliar un volumen logico con ext4 en 10 GB sin desmontar el sistema de archivos. Cual es el comando mas eficiente?

a) `lvextend -L +10G /dev/vg_datos/lv_home && resize2fs /dev/vg_datos/lv_home`
b) `lvextend -r -L +10G /dev/vg_datos/lv_home`
c) `resize2fs /dev/vg_datos/lv_home +10G && lvextend -L +10G /dev/vg_datos/lv_home`
d) `lvresize -L 10G /dev/vg_datos/lv_home`

<details>
<summary>Respuesta</summary>

**b) `lvextend -r -L +10G /dev/vg_datos/lv_home`**

La opcion `-r` (o `--resizefs`) de `lvextend` redimensiona automaticamente el sistema de archivos despues de ampliar el LV, en un solo paso. La opcion a) tambien funciona pero requiere dos comandos. La opcion c) tiene el orden invertido (nunca se debe ampliar el FS antes que el LV). La opcion d) establece el tamano total a 10G en lugar de agregar 10G.
</details>

---

### Pregunta 3
Que comando crea un snapshot de 5 GB llamado "snap_datos" del volumen logico `/dev/vg_datos/lv_datos`?

a) `lvcreate -L 5G -n snap_datos --snapshot /dev/vg_datos/lv_datos`
b) `lvcreate -s -L 5G -n snap_datos /dev/vg_datos/lv_datos`
c) `lvsnap -L 5G -n snap_datos /dev/vg_datos/lv_datos`
d) `lvcreate -L 5G -n snap_datos --type snapshot vg_datos`

<details>
<summary>Respuesta</summary>

**b) `lvcreate -s -L 5G -n snap_datos /dev/vg_datos/lv_datos`**

La opcion `-s` (o `--snapshot`) de `lvcreate` indica que se crea un snapshot. Se especifica el tamano con `-L`, el nombre con `-n`, y al final se indica el LV de origen. La opcion a) tambien seria valida (usa `--snapshot` en forma larga). La opcion b) es la forma mas habitual y concisa.
</details>

---

### Pregunta 4
Que ocurre si un snapshot LVM alcanza el 100% de su capacidad asignada?

a) Se amplia automaticamente
b) Se elimina automaticamente
c) Se invalida y no puede ser utilizado
d) Se congela en modo solo lectura

<details>
<summary>Respuesta</summary>

**c) Se invalida y no puede ser utilizado**

Cuando un snapshot se llena al 100%, se marca como invalido porque ya no puede registrar los cambios del volumen original. Un snapshot invalido debe ser eliminado con `lvremove`. Para evitar esto, se debe monitorizar el porcentaje de uso con `lvs` (columna Data%) y dimensionar adecuadamente el snapshot o ampliarlo a tiempo con `lvextend`.
</details>

---

### Pregunta 5
Un administrador necesita agregar un nuevo disco `/dev/sde1` a un grupo de volumenes existente llamado `vg_produccion`. Que secuencia de comandos es correcta?

a) `vgextend vg_produccion /dev/sde1`
b) `pvcreate /dev/sde1 && vgextend vg_produccion /dev/sde1`
c) `vgadd vg_produccion /dev/sde1`
d) `pvcreate /dev/sde1 && vgcreate vg_produccion /dev/sde1`

<details>
<summary>Respuesta</summary>

**b) `pvcreate /dev/sde1 && vgextend vg_produccion /dev/sde1`**

Primero se debe inicializar el disco como volumen fisico con `pvcreate`, y luego agregarlo al VG existente con `vgextend`. Nota: en versiones recientes de LVM, `vgextend` puede ejecutar implicitamente `pvcreate`, pero la secuencia explicita es la practica recomendada y la que se espera en el examen. La opcion d) crearia un nuevo VG en lugar de extender el existente.
</details>

---

### Pregunta 6
Que comando se utiliza para mover los datos de un volumen fisico a otro dentro del mismo grupo de volumenes, sin interrupcion del servicio?

a) `lvcopy /dev/sdb1 /dev/sdc1`
b) `pvmove /dev/sdb1 /dev/sdc1`
c) `vgmove /dev/sdb1 /dev/sdc1`
d) `dd if=/dev/sdb1 of=/dev/sdc1`

<details>
<summary>Respuesta</summary>

**b) `pvmove /dev/sdb1 /dev/sdc1`**

El comando `pvmove` migra todos los extents (datos) de un PV a otro dentro del mismo VG, sin necesidad de desmontar los sistemas de archivos ni detener los servicios. Es el metodo estandar para evacuar un disco antes de retirarlo con `vgreduce`. Si no se especifica el destino, LVM elige automaticamente otro PV con espacio disponible.
</details>

---

### Pregunta 7
Cual es la diferencia principal entre `-L` y `-l` en los comandos LVM?

a) `-L` especifica el tamano en bytes y `-l` en kilobytes
b) `-L` especifica el tamano en unidades legibles y `-l` en extents o porcentaje
c) `-L` se usa para LVs y `-l` para PVs
d) No hay diferencia, son sinonimos

<details>
<summary>Respuesta</summary>

**b) `-L` especifica el tamano en unidades legibles y `-l` en extents o porcentaje**

La opcion `-L` (mayuscula) acepta tamanos en formato legible como `10G`, `500M`, `1T`. La opcion `-l` (minuscula) acepta un numero de extents logicos o porcentajes como `100%FREE`, `50%VG`, `5000` (extents). Por ejemplo: `lvcreate -L 20G` crea un LV de 20 GiB, mientras que `lvcreate -l 100%FREE` utiliza todo el espacio libre del VG.
</details>

---

### Pregunta 8
Un administrador tiene un LV con XFS que necesita reducir. Que afirmacion es correcta?

a) Puede reducirlo con `xfs_shrink` despues de desmontar
b) Puede reducirlo con `lvreduce -r` que gestiona XFS automaticamente
c) XFS no soporta reduccion; debe hacer backup, recrear el LV mas pequeno y restaurar
d) Puede reducirlo convirtiendo primero a ext4 y luego de vuelta a XFS

<details>
<summary>Respuesta</summary>

**c) XFS no soporta reduccion; debe hacer backup, recrear el LV mas pequeno y restaurar**

El sistema de archivos XFS solo soporta crecimiento (con `xfs_growfs`), no reduccion. No existe un comando `xfs_shrink`. Si se necesita un volumen XFS mas pequeno, la unica opcion es respaldar los datos, eliminar y recrear el LV con menor tamano, crear un nuevo XFS y restaurar el backup. Esta es una limitacion importante a recordar para el examen.
</details>

---

### Pregunta 9
Que comando restaura un volumen logico al estado capturado en un snapshot?

a) `lvrevert /dev/vg_datos/snap_datos`
b) `lvconvert --merge /dev/vg_datos/snap_datos`
c) `lvrestore /dev/vg_datos/snap_datos`
d) `lvcreate --restore /dev/vg_datos/snap_datos`

<details>
<summary>Respuesta</summary>

**b) `lvconvert --merge /dev/vg_datos/snap_datos`**

El comando `lvconvert --merge` fusiona el snapshot con su volumen de origen, revirtiendo el LV original al estado en que se encontraba cuando se creo el snapshot. El snapshot se elimina automaticamente despues de la fusion. Si el LV original esta montado, la fusion se efectua en el siguiente arranque o tras desmontar y remontar.
</details>

---

### Pregunta 10
Que es el thin provisioning en LVM y cual es su ventaja principal?

a) Un metodo de compresion de datos en volumenes logicos
b) Una tecnica que permite asignar mas espacio virtual que el fisicamente disponible, asignando almacenamiento real solo al escribir datos
c) Una forma de crear volumenes logicos sin grupo de volumenes
d) Un tipo de RAID especifico de LVM para discos SSD

<details>
<summary>Respuesta</summary>

**b) Una tecnica que permite asignar mas espacio virtual que el fisicamente disponible, asignando almacenamiento real solo al escribir datos**

El thin provisioning (aprovisionamiento ligero) crea un "thin pool" desde el cual se asignan "thin volumes" que pueden tener un tamano virtual mayor al espacio fisico real. El almacenamiento se consume solo cuando se escriben datos realmente. Se crea con `lvcreate -T` (thin pool) y `lvcreate -V` (tamano virtual). Es ideal para entornos de virtualizacion donde muchas VMs no usan todo su espacio asignado.
</details>

---

### Pregunta 11

Un administrador necesita retirar el disco `/dev/sdb1` de un grupo de volumenes `vg_datos` que tiene datos activos. ¿Cual es la secuencia correcta de comandos?

a) `vgreduce vg_datos /dev/sdb1 && pvremove /dev/sdb1`
b) `pvmove /dev/sdb1 && vgreduce vg_datos /dev/sdb1`
c) `pvremove /dev/sdb1 && vgreduce vg_datos /dev/sdb1`
d) `vgremove vg_datos /dev/sdb1 && pvremove /dev/sdb1`

<details>
<summary>Respuesta</summary>

**b) `pvmove /dev/sdb1 && vgreduce vg_datos /dev/sdb1`**

Antes de retirar un PV que contiene datos, es imprescindible migrar los extents a otro PV del mismo VG con `pvmove`. Este comando mueve los datos en linea sin interrupcion del servicio. Una vez vaciado el PV, se puede retirar del VG con `vgreduce`. Si se intenta ejecutar `vgreduce` sin vaciar primero el PV, el comando fallara con un error.
</details>

---

### Pregunta 12

¿Que comando muestra un resumen rapido de todos los volumenes logicos del sistema, incluyendo nombre, VG, atributos y tamano?

a) `lvdisplay`
b) `lvscan`
c) `lvs`
d) `lvlist`

<details>
<summary>Respuesta</summary>

**c) `lvs`**

El comando `lvs` muestra una tabla resumida con informacion de todos los volumenes logicos, incluyendo nombre, grupo de volumenes, atributos, tamano, y para snapshots la columna Data% de uso. Es mas conciso que `lvdisplay` (que muestra informacion detallada de cada LV) y `lvscan` (que solo muestra nombre, tamano y estado). Los comandos `pvs` y `vgs` proporcionan informacion equivalente para PVs y VGs respectivamente.
</details>

---

### Pregunta 13

Un administrador quiere crear un volumen logico que utilice todo el espacio libre disponible en el grupo de volumenes `vg_datos`. ¿Que opcion de `lvcreate` debe usar?

a) `lvcreate -L 100% -n lv_datos vg_datos`
b) `lvcreate -l 100%FREE -n lv_datos vg_datos`
c) `lvcreate -l 100%VG -n lv_datos vg_datos`
d) `lvcreate -L max -n lv_datos vg_datos`

<details>
<summary>Respuesta</summary>

**b) `lvcreate -l 100%FREE -n lv_datos vg_datos`**

La opcion `-l 100%FREE` utiliza todo el espacio libre disponible en el VG. Con `-l` (minuscula) se pueden usar porcentajes como `100%FREE` (espacio libre), `50%VG` (del total del VG), o un numero absoluto de extents. La opcion `-L` (mayuscula) espera tamanos en formato legible (G, M, T) y no acepta porcentajes.
</details>

---

### Pregunta 14

¿Que directorio contiene los backups automaticos de los metadatos LVM?

a) `/var/lib/lvm/backup/`
b) `/etc/lvm/backup/`
c) `/boot/lvm/backup/`
d) `/opt/lvm/backup/`

<details>
<summary>Respuesta</summary>

**b) `/etc/lvm/backup/`**

LVM almacena automaticamente un backup de los metadatos de cada VG en `/etc/lvm/backup/`, y un historico de cambios en `/etc/lvm/archive/`. Estos backups se actualizan cada vez que se modifica la configuracion LVM. En caso de corrupcion de metadatos, se pueden restaurar con `vgcfgrestore`. El archivo de configuracion principal de LVM es `/etc/lvm/lvm.conf`.
</details>

---

### Pregunta 15

¿Que ocurre si se reduce un volumen logico sin antes reducir el sistema de archivos que contiene?

a) LVM ajusta automaticamente el sistema de archivos
b) El sistema de archivos se corrompe y se pierden datos
c) LVM rechaza la operacion con un error
d) El sistema de archivos se remonta automaticamente en modo solo lectura

<details>
<summary>Respuesta</summary>

**b) El sistema de archivos se corrompe y se pierden datos**

Si se reduce el LV sin reducir primero el sistema de archivos, los datos que se encuentren en los bloques eliminados se perderan y el sistema de archivos quedara corrupto. El orden correcto para reducir es: desmontar, verificar con `e2fsck -f`, reducir el FS con `resize2fs`, y finalmente reducir el LV con `lvreduce`. La opcion `lvresize -r` automatiza este proceso de forma segura.
</details>

---

### Pregunta 16

¿Que tamano tiene por defecto un Physical Extent (PE) en LVM?

a) 1 MB
b) 4 MB
c) 8 MB
d) 16 MB

<details>
<summary>Respuesta</summary>

**b) 4 MB**

El tamano por defecto del Physical Extent (PE) en LVM es 4 MB. Este es la unidad minima de asignacion y determina la granularidad con la que se puede asignar espacio. Se puede cambiar al crear el VG con `vgcreate -s <tamano>`. Un PE mas grande es eficiente para VGs grandes, mientras que un PE mas pequeño ofrece mayor precision pero genera mas metadatos.
</details>

---

### Pregunta 17

Un administrador quiere mover un grupo de volumenes `vg_datos` de un servidor a otro. ¿Que comando debe ejecutar en el servidor de origen para preparar el VG para la exportacion?

a) `vgexport vg_datos`
b) `vgmove vg_datos`
c) `vgtransfer vg_datos`
d) `vgbackup vg_datos`

<details>
<summary>Respuesta</summary>

**a) `vgexport vg_datos`**

Para mover un VG entre servidores, primero se desactiva con `vgchange -a n vg_datos` y luego se exporta con `vgexport vg_datos`. Despues de mover fisicamente los discos al nuevo servidor, se importa con `vgimport vg_datos` y se activa con `vgchange -a y vg_datos`. La exportacion marca el VG como "exported" para evitar que ambos sistemas accedan simultaneamente.
</details>

---

### Pregunta 18

¿Cual de las siguientes rutas NO es una forma valida de acceder a un volumen logico `lv_home` en el grupo `vg_datos`?

a) `/dev/vg_datos/lv_home`
b) `/dev/mapper/vg_datos-lv_home`
c) `/dev/dm-0`
d) `/dev/lvm/vg_datos/lv_home`

<details>
<summary>Respuesta</summary>

**d) `/dev/lvm/vg_datos/lv_home`**

Las rutas validas para acceder a un LV son `/dev/VG/LV` (enlace simbolico creado por LVM), `/dev/mapper/VG-LV` (creado por Device Mapper) y `/dev/dm-N` (dispositivo real de Device Mapper). La ruta `/dev/lvm/` no existe en el sistema. Las dos primeras formas son las mas utilizadas en `/etc/fstab` y scripts de administracion.
</details>

---

### Pregunta 19

¿Que tipo de volumen logico LVM permite crear volumenes virtuales cuyo tamano total puede exceder la capacidad fisica real del pool?

a) Linear volume
b) Striped volume
c) Mirror volume
d) Thin volume

<details>
<summary>Respuesta</summary>

**d) Thin volume**

Los thin volumes (volumenes ligeros) se crean dentro de un thin pool y pueden tener un tamano virtual mayor que el espacio fisico real disponible (overprovisioning). El almacenamiento real se asigna bajo demanda cuando se escriben datos. Se crean con `lvcreate -T` para el pool y `lvcreate -V` para el tamano virtual. Es ideal para entornos de virtualizacion.
</details>

---

### Pregunta 20

¿Que comando verifica la integridad de los metadatos de un grupo de volumenes?

a) `vgck vg_datos`
b) `vgverify vg_datos`
c) `vgscan --check vg_datos`
d) `vgtest vg_datos`

<details>
<summary>Respuesta</summary>

**a) `vgck vg_datos`**

El comando `vgck` verifica la consistencia de los metadatos de un grupo de volumenes. Si detecta problemas, informa sobre las discrepancias encontradas. En caso de metadatos corruptos, se puede intentar la restauracion con `vgcfgrestore` usando los backups almacenados automaticamente en `/etc/lvm/backup/` y `/etc/lvm/archive/`.
</details>

---

### Pregunta 21

¿Que comando se utiliza para crear un volumen fisico (PV) en la particion `/dev/sdb1`?

<input type="text" class="fill-blank" data-answer="pvcreate /dev/sdb1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**pvcreate /dev/sdb1**

El comando `pvcreate` inicializa una particion o disco como volumen fisico para su uso con LVM, escribiendo la cabecera de metadatos LVM en el dispositivo. La particion debe tener el tipo `8e` (Linux LVM) en tablas MBR. Despues de crear el PV, se puede agregar a un grupo de volumenes con `vgcreate` o `vgextend`.
</details>

---

### Pregunta 22

¿Que comando crea un grupo de volumenes llamado `vg_produccion` usando los volumenes fisicos `/dev/sdb1` y `/dev/sdc1`?

<input type="text" class="fill-blank" data-answer="vgcreate vg_produccion /dev/sdb1 /dev/sdc1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**vgcreate vg_produccion /dev/sdb1 /dev/sdc1**

El comando `vgcreate` crea un nuevo grupo de volumenes agrupando uno o mas volumenes fisicos. Los PVs deben haber sido inicializados previamente con `pvcreate`. Se puede especificar un tamano de PE personalizado con `-s` (por ejemplo, `vgcreate -s 16M`). El VG resultante forma un pool de almacenamiento del cual se crean los volumenes logicos.
</details>

---

### Pregunta 23

¿Que comando amplia el volumen logico `/dev/vg_datos/lv_home` en 10 GB y redimensiona automaticamente el sistema de archivos?

<input type="text" class="fill-blank" data-answer="lvextend -r -L +10G /dev/vg_datos/lv_home" data-alt="lvextend --resizefs -L +10G /dev/vg_datos/lv_home" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**lvextend -r -L +10G /dev/vg_datos/lv_home**

La opcion `-r` (o `--resizefs`) de `lvextend` redimensiona automaticamente el sistema de archivos despues de ampliar el volumen logico, combinando dos operaciones en una sola. El prefijo `+` antes del tamano indica que se agregan 10 GB al tamano actual. Sin `+`, se estableceria el tamano total a 10 GB. Esta es la forma mas eficiente y segura de ampliar un LV.
</details>

---

### Pregunta 24

¿Que comando muestra informacion detallada del volumen fisico `/dev/sdb1`, incluyendo el VG al que pertenece y los extents libres?

<input type="text" class="fill-blank" data-answer="pvdisplay /dev/sdb1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**pvdisplay /dev/sdb1**

El comando `pvdisplay` muestra informacion detallada de un volumen fisico, incluyendo el nombre del PV, el VG al que pertenece, el tamano, el tamano del PE, el numero total de PEs, los PEs libres y los PEs asignados. Para una vista resumida de todos los PVs, se puede usar `pvs`. Para escanear en busca de PVs, se usa `pvscan`.
</details>

---

### Pregunta 25

¿Que comando agrega el volumen fisico `/dev/sdd1` a un grupo de volumenes existente llamado `vg_datos`?

<input type="text" class="fill-blank" data-answer="vgextend vg_datos /dev/sdd1" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**vgextend vg_datos /dev/sdd1**

El comando `vgextend` agrega uno o mas volumenes fisicos a un grupo de volumenes existente, ampliando su capacidad total. El PV debe haber sido inicializado previamente con `pvcreate`. Despues de extender el VG, el nuevo espacio esta disponible para ampliar volumenes logicos existentes con `lvextend` o crear nuevos con `lvcreate`.
</details>

---
