---
title: "204.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "204.3"
---

# Flashcards: 204.3 - Lvm

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-001">
<div class="flashcard-front">

**P:** Cual es el orden correcto de la jerarquia LVM, de nivel mas bajo a mas alto?

</div>
<div class="flashcard-back">

**R:** c) Disco -> PV -> VG -> LV. La jerarquia de LVM es: disco fisico o particion -> Physical Volume (PV) -> Volume Group (VG) -> Logical Volume (LV). Primero se inicializan los discos como PVs con `pvcreate`, luego se agrupan en VGs con `vgcreate`, y finalmente se crean LVs con `lvcreate` dentro del VG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-002">
<div class="flashcard-front">

**P:** Un administrador quiere ampliar un volumen logico con ext4 en 10 GB sin desmontar el sistema de archivos. Cual es el comando mas eficiente?

</div>
<div class="flashcard-back">

**R:** b) `lvextend -r -L +10G /dev/vg_datos/lv_home`. La opcion `-r` (o `--resizefs`) de `lvextend` redimensiona automaticamente el sistema de archivos despues de ampliar el LV, en un solo paso. La opcion a) tambien funciona pero requiere dos comandos. La opcion c) tiene el orden invertido (nunca se debe ampliar el FS antes que el LV). La opcion d) establece el tamano total a 10G en lugar de agregar 10G.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-003">
<div class="flashcard-front">

**P:** Que comando crea un snapshot de 5 GB llamado "snap_datos" del volumen logico `/dev/vg_datos/lv_datos`?

</div>
<div class="flashcard-back">

**R:** b) `lvcreate -s -L 5G -n snap_datos /dev/vg_datos/lv_datos`. La opcion `-s` (o `--snapshot`) de `lvcreate` indica que se crea un snapshot. Se especifica el tamano con `-L`, el nombre con `-n`, y al final se indica el LV de origen. La opcion a) tambien seria valida (usa `--snapshot` en forma larga). La opcion b) es la forma mas habitual y concisa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-004">
<div class="flashcard-front">

**P:** Que ocurre si un snapshot LVM alcanza el 100% de su capacidad asignada?

</div>
<div class="flashcard-back">

**R:** c) Se invalida y no puede ser utilizado. Cuando un snapshot se llena al 100%, se marca como invalido porque ya no puede registrar los cambios del volumen original. Un snapshot invalido debe ser eliminado con `lvremove`. Para evitar esto, se debe monitorizar el porcentaje de uso con `lvs` (columna Data%) y dimensionar adecuadamente el snapshot o ampliarlo a tiempo con `lvextend`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-005">
<div class="flashcard-front">

**P:** Un administrador necesita agregar un nuevo disco `/dev/sde1` a un grupo de volumenes existente llamado `vg_produccion`. Que secuencia de comandos es correcta?

</div>
<div class="flashcard-back">

**R:** b) `pvcreate /dev/sde1 && vgextend vg_produccion /dev/sde1`. Primero se debe inicializar el disco como volumen fisico con `pvcreate`, y luego agregarlo al VG existente con `vgextend`. Nota: en versiones recientes de LVM, `vgextend` puede ejecutar implicitamente `pvcreate`, pero la secuencia explicita es la practica recomendada y la que se espera en el examen. La opcion d) crearia un nuevo VG en lugar de extender el existente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-006">
<div class="flashcard-front">

**P:** Que comando se utiliza para mover los datos de un volumen fisico a otro dentro del mismo grupo de volumenes, sin interrupcion del servicio?

</div>
<div class="flashcard-back">

**R:** b) `pvmove /dev/sdb1 /dev/sdc1`. El comando `pvmove` migra todos los extents (datos) de un PV a otro dentro del mismo VG, sin necesidad de desmontar los sistemas de archivos ni detener los servicios. Es el metodo estandar para evacuar un disco antes de retirarlo con `vgreduce`. Si no se especifica el destino, LVM elige automaticamente otro PV con espacio disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-007">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `-L` y `-l` en los comandos LVM?

</div>
<div class="flashcard-back">

**R:** b) `-L` especifica el tamano en unidades legibles y `-l` en extents o porcentaje. La opcion `-L` (mayuscula) acepta tamanos en formato legible como `10G`, `500M`, `1T`. La opcion `-l` (minuscula) acepta un numero de extents logicos o porcentajes como `100%FREE`, `50%VG`, `5000` (extents). Por ejemplo: `lvcreate -L 20G` crea un LV de 20 GiB, mientras que `lvcreate -l 100%FREE` utiliza todo el espacio libre del VG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-008">
<div class="flashcard-front">

**P:** Un administrador tiene un LV con XFS que necesita reducir. Que afirmacion es correcta?

</div>
<div class="flashcard-back">

**R:** c) XFS no soporta reduccion; debe hacer backup, recrear el LV mas pequeno y restaurar. El sistema de archivos XFS solo soporta crecimiento (con `xfs_growfs`), no reduccion. No existe un comando `xfs_shrink`. Si se necesita un volumen XFS mas pequeno, la unica opcion es respaldar los datos, eliminar y recrear el LV con menor tamano, crear un nuevo XFS y restaurar el backup. Esta es una limitacion importante a recordar para el examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-009">
<div class="flashcard-front">

**P:** Que comando restaura un volumen logico al estado capturado en un snapshot?

</div>
<div class="flashcard-back">

**R:** b) `lvconvert --merge /dev/vg_datos/snap_datos`. El comando `lvconvert --merge` fusiona el snapshot con su volumen de origen, revirtiendo el LV original al estado en que se encontraba cuando se creo el snapshot. El snapshot se elimina automaticamente despues de la fusion. Si el LV original esta montado, la fusion se efectua en el siguiente arranque o tras desmontar y remontar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-010">
<div class="flashcard-front">

**P:** Que es el thin provisioning en LVM y cual es su ventaja principal?

</div>
<div class="flashcard-back">

**R:** b) Una tecnica que permite asignar mas espacio virtual que el fisicamente disponible, asignando almacenamiento real solo al escribir datos. El thin provisioning (aprovisionamiento ligero) crea un "thin pool" desde el cual se asignan "thin volumes" que pueden tener un tamano virtual mayor al espacio fisico real. El almacenamiento se consume solo cuando se escriben datos realmente. Se crea con `lvcreate -T` (thin pool) y `lvcreate -V` (tamano virtual). Es ideal para entornos de virtualizacion donde muchas VMs no usan todo su espacio asignado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-011">
<div class="flashcard-front">

**P:** Un administrador necesita retirar el disco `/dev/sdb1` de un grupo de volumenes `vg_datos` que tiene datos activos. ¿Cual es la secuencia correcta de comandos?

</div>
<div class="flashcard-back">

**R:** b) `pvmove /dev/sdb1 && vgreduce vg_datos /dev/sdb1`. Antes de retirar un PV que contiene datos, es imprescindible migrar los extents a otro PV del mismo VG con `pvmove`. Este comando mueve los datos en linea sin interrupcion del servicio. Una vez vaciado el PV, se puede retirar del VG con `vgreduce`. Si se intenta ejecutar `vgreduce` sin vaciar primero el PV, el comando fallara con un error.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-012">
<div class="flashcard-front">

**P:** ¿Que comando muestra un resumen rapido de todos los volumenes logicos del sistema, incluyendo nombre, VG, atributos y tamano?

</div>
<div class="flashcard-back">

**R:** c) `lvs`. El comando `lvs` muestra una tabla resumida con informacion de todos los volumenes logicos, incluyendo nombre, grupo de volumenes, atributos, tamano, y para snapshots la columna Data% de uso. Es mas conciso que `lvdisplay` (que muestra informacion detallada de cada LV) y `lvscan` (que solo muestra nombre, tamano y estado). Los comandos `pvs` y `vgs` proporcionan informacion equivalente para PVs y VGs respectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-013">
<div class="flashcard-front">

**P:** Un administrador quiere crear un volumen logico que utilice todo el espacio libre disponible en el grupo de volumenes `vg_datos`. ¿Que opcion de `lvcreate` debe usar?

</div>
<div class="flashcard-back">

**R:** b) `lvcreate -l 100%FREE -n lv_datos vg_datos`. La opcion `-l 100%FREE` utiliza todo el espacio libre disponible en el VG. Con `-l` (minuscula) se pueden usar porcentajes como `100%FREE` (espacio libre), `50%VG` (del total del VG), o un numero absoluto de extents. La opcion `-L` (mayuscula) espera tamanos en formato legible (G, M, T) y no acepta porcentajes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-014">
<div class="flashcard-front">

**P:** ¿Que directorio contiene los backups automaticos de los metadatos LVM?

</div>
<div class="flashcard-back">

**R:** b) `/etc/lvm/backup/`. LVM almacena automaticamente un backup de los metadatos de cada VG en `/etc/lvm/backup/`, y un historico de cambios en `/etc/lvm/archive/`. Estos backups se actualizan cada vez que se modifica la configuracion LVM. En caso de corrupcion de metadatos, se pueden restaurar con `vgcfgrestore`. El archivo de configuracion principal de LVM es `/etc/lvm/lvm.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que ocurre si se reduce un volumen logico sin antes reducir el sistema de archivos que contiene?

</div>
<div class="flashcard-back">

**R:** b) El sistema de archivos se corrompe y se pierden datos. Si se reduce el LV sin reducir primero el sistema de archivos, los datos que se encuentren en los bloques eliminados se perderan y el sistema de archivos quedara corrupto. El orden correcto para reducir es: desmontar, verificar con `e2fsck -f`, reducir el FS con `resize2fs`, y finalmente reducir el LV con `lvreduce`. La opcion `lvresize -r` automatiza este proceso de forma segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que tamano tiene por defecto un Physical Extent (PE) en LVM?

</div>
<div class="flashcard-back">

**R:** b) 4 MB. El tamano por defecto del Physical Extent (PE) en LVM es 4 MB. Este es la unidad minima de asignacion y determina la granularidad con la que se puede asignar espacio. Se puede cambiar al crear el VG con `vgcreate -s <tamano>`. Un PE mas grande es eficiente para VGs grandes, mientras que un PE mas pequeño ofrece mayor precision pero genera mas metadatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-017">
<div class="flashcard-front">

**P:** Un administrador quiere mover un grupo de volumenes `vg_datos` de un servidor a otro. ¿Que comando debe ejecutar en el servidor de origen para preparar el VG para la exportacion?

</div>
<div class="flashcard-back">

**R:** a) `vgexport vg_datos`. Para mover un VG entre servidores, primero se desactiva con `vgchange -a n vg_datos` y luego se exporta con `vgexport vg_datos`. Despues de mover fisicamente los discos al nuevo servidor, se importa con `vgimport vg_datos` y se activa con `vgchange -a y vg_datos`. La exportacion marca el VG como "exported" para evitar que ambos sistemas accedan simultaneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-018">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes rutas NO es una forma valida de acceder a un volumen logico `lv_home` en el grupo `vg_datos`?

</div>
<div class="flashcard-back">

**R:** d) `/dev/lvm/vg_datos/lv_home`. Las rutas validas para acceder a un LV son `/dev/VG/LV` (enlace simbolico creado por LVM), `/dev/mapper/VG-LV` (creado por Device Mapper) y `/dev/dm-N` (dispositivo real de Device Mapper). La ruta `/dev/lvm/` no existe en el sistema. Las dos primeras formas son las mas utilizadas en `/etc/fstab` y scripts de administracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-019">
<div class="flashcard-front">

**P:** ¿Que tipo de volumen logico LVM permite crear volumenes virtuales cuyo tamano total puede exceder la capacidad fisica real del pool?

</div>
<div class="flashcard-back">

**R:** d) Thin volume. Los thin volumes (volumenes ligeros) se crean dentro de un thin pool y pueden tener un tamano virtual mayor que el espacio fisico real disponible (overprovisioning). El almacenamiento real se asigna bajo demanda cuando se escriben datos. Se crean con `lvcreate -T` para el pool y `lvcreate -V` para el tamano virtual. Es ideal para entornos de virtualizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que comando verifica la integridad de los metadatos de un grupo de volumenes?

</div>
<div class="flashcard-back">

**R:** a) `vgck vg_datos`. El comando `vgck` verifica la consistencia de los metadatos de un grupo de volumenes. Si detecta problemas, informa sobre las discrepancias encontradas. En caso de metadatos corruptos, se puede intentar la restauracion con `vgcfgrestore` usando los backups almacenados automaticamente en `/etc/lvm/backup/` y `/etc/lvm/archive/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para crear un volumen fisico (PV) en la particion `/dev/sdb1`?

</div>
<div class="flashcard-back">

**R:** pvcreate /dev/sdb1. El comando `pvcreate` inicializa una particion o disco como volumen fisico para su uso con LVM, escribiendo la cabecera de metadatos LVM en el dispositivo. La particion debe tener el tipo `8e` (Linux LVM) en tablas MBR. Despues de crear el PV, se puede agregar a un grupo de volumenes con `vgcreate` o `vgextend`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando crea un grupo de volumenes llamado `vg_produccion` usando los volumenes fisicos `/dev/sdb1` y `/dev/sdc1`?

</div>
<div class="flashcard-back">

**R:** vgcreate vg_produccion /dev/sdb1 /dev/sdc1. El comando `vgcreate` crea un nuevo grupo de volumenes agrupando uno o mas volumenes fisicos. Los PVs deben haber sido inicializados previamente con `pvcreate`. Se puede especificar un tamano de PE personalizado con `-s` (por ejemplo, `vgcreate -s 16M`). El VG resultante forma un pool de almacenamiento del cual se crean los volumenes logicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando amplia el volumen logico `/dev/vg_datos/lv_home` en 10 GB y redimensiona automaticamente el sistema de archivos?

</div>
<div class="flashcard-back">

**R:** lvextend -r -L +10G /dev/vg_datos/lv_home. La opcion `-r` (o `--resizefs`) de `lvextend` redimensiona automaticamente el sistema de archivos despues de ampliar el volumen logico, combinando dos operaciones en una sola. El prefijo `+` antes del tamano indica que se agregan 10 GB al tamano actual. Sin `+`, se estableceria el tamano total a 10 GB. Esta es la forma mas eficiente y segura de ampliar un LV.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando muestra informacion detallada del volumen fisico `/dev/sdb1`, incluyendo el VG al que pertenece y los extents libres?

</div>
<div class="flashcard-back">

**R:** pvdisplay /dev/sdb1. El comando `pvdisplay` muestra informacion detallada de un volumen fisico, incluyendo el nombre del PV, el VG al que pertenece, el tamano, el tamano del PE, el numero total de PEs, los PEs libres y los PEs asignados. Para una vista resumida de todos los PVs, se puede usar `pvs`. Para escanear en busca de PVs, se usa `pvscan`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando agrega el volumen fisico `/dev/sdd1` a un grupo de volumenes existente llamado `vg_datos`?

</div>
<div class="flashcard-back">

**R:** vgextend vg_datos /dev/sdd1. El comando `vgextend` agrega uno o mas volumenes fisicos a un grupo de volumenes existente, ampliando su capacidad total. El PV debe haber sido inicializado previamente con `pvcreate`. Despues de extender el VG, el nuevo espacio esta disponible para ampliar volumenes logicos existentes con `lvextend` o crear nuevos con `lvcreate`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La jerarquia es siempre: Disco -> PV -> VG -> LV -> Sistema de archivos. Memoriz...

</div>
<div class="flashcard-back">

**R:** La jerarquia es siempre: Disco -> PV -> VG -> LV -> Sistema de archivos. Memoriza esta cadena y los comandos asociados a cada nivel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `pvmove` es critico para migrar datos entre discos sin tiempo de inactividad. Pe...

</div>
<div class="flashcard-back">

**R:** `pvmove` es critico para migrar datos entre discos sin tiempo de inactividad. Permite evacuar un disco antes de retirarlo del VG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Los LVs se acceden como `/dev/VG/LV` o `/dev/mapper/VG-LV`. Ambas rutas son vali...

</div>
<div class="flashcard-back">

**R:** Los LVs se acceden como `/dev/VG/LV` o `/dev/mapper/VG-LV`. Ambas rutas son validas y equivalentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Al ampliar: primero LV, luego FS. Al reducir: primero FS, luego LV. Si se reduce...

</div>
<div class="flashcard-back">

**R:** Al ampliar: primero LV, luego FS. Al reducir: primero FS, luego LV. Si se reduce el LV antes que el FS, se perderan datos. XFS solo puede crecer, nunca reducirse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Si un snapshot se llena al 100%, se invalida y no puede ser utilizado. Monitoriz...

</div>
<div class="flashcard-back">

**R:** Si un snapshot se llena al 100%, se invalida y no puede ser utilizado. Monitoriza con `lvs` la columna `Data%`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `-l extents`?

</div>
<div class="flashcard-back">

**R:** Numero de extents o porcentaje (50%VG, 100%FREE)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--type tipo`?

</div>
<div class="flashcard-back">

**R:** Tipo de LV (linear, mirror, striped, raid1, raid5)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `-V tamano`?

</div>
<div class="flashcard-back">

**R:** Tamano virtual para thin volume

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Introduccion a LVM?

</div>
<div class="flashcard-back">

**R:** LVM (Logical Volume Manager) es una capa de abstraccion entre los dispositivos de almacenamiento fisico y los sistemas de archivos. Permite gestionar el almacenamiento de forma flexible, pudiendo redim

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Volumenes fisicos (PV)?

</div>
<div class="flashcard-back">

**R:** Los volumenes fisicos son la base de LVM. Se crean a partir de discos enteros o particiones (tipo `8e` en MBR o `8e00` en GPT).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Grupos de volumenes (VG)?

</div>
<div class="flashcard-back">

**R:** Un VG agrupa uno o mas PVs en un unico pool de almacenamiento del cual se crean los LVs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Volumenes logicos (LV)?

</div>
<div class="flashcard-back">

**R:** Los LVs son los volumenes sobre los que se crean los sistemas de archivos. Son analogos a las particiones pero mucho mas flexibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son Snapshots (instantaneas)?

</div>
<div class="flashcard-back">

**R:** Los snapshots son copias instantaneas del estado de un LV en un momento dado. Usan la tecnica COW (Copy-On-Write).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son Thin Provisioning?

</div>
<div class="flashcard-back">

**R:** El thin provisioning permite asignar mas espacio del fisicamente disponible (overprovisioning), asignando almacenamiento real solo cuando se escribe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son LVM y RAID?

</div>
<div class="flashcard-back">

**R:** LVM puede crear volumenes logicos con redundancia integrada:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.3">
</div>

<div class="flashcard" data-id="204.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - Siempre dejar espacio libre en el VG para snapshots y crecimiento futuro

</div>
</div>

---

