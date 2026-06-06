---
title: "204.1 - Configuracion de RAID"
tags: [lpic-2, examen-201, tema-204, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "204"
subtema: "204.1"
---

# 204.1 - Ejercicios: Configuracion de RAID

### Pregunta 1
Cual es el numero minimo de discos necesarios para crear un array RAID 5?

a) 2
b) 3
c) 4
d) 5

<details>
<summary>Respuesta</summary>

**b) 3**

RAID 5 requiere un minimo de 3 discos porque necesita distribuir los datos y la paridad entre al menos tres dispositivos. Con dos discos no seria posible implementar el esquema de paridad distribuida que caracteriza a RAID 5.
</details>

---

### Pregunta 2
Que comando se utiliza para crear un array RAID 1 con dos discos y un disco spare?

a) `mdadm --create /dev/md0 --level=1 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1`
b) `mdadm --create /dev/md0 --level=1 --raid-devices=2 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1`
c) `mdadm --assemble /dev/md0 --level=1 --raid-devices=2 --spare=1 /dev/sdb1 /dev/sdc1 /dev/sdd1`
d) `mdadm --build /dev/md0 --level=1 --raid-devices=2 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1`

<details>
<summary>Respuesta</summary>

**b) `mdadm --create /dev/md0 --level=1 --raid-devices=2 --spare-devices=1 /dev/sdb1 /dev/sdc1 /dev/sdd1`**

Se usa `--create` para crear nuevos arrays, `--raid-devices=2` indica que el mirror tiene 2 discos activos, y `--spare-devices=1` designa un disco como repuesto. Se proporcionan los tres dispositivos (2 activos + 1 spare).
</details>

---

### Pregunta 3
En la salida de `/proc/mdstat`, que indica la notacion `[U_]`?

a) El array tiene un disco sin utilizar
b) El array esta en estado degradado con un disco fallido
c) El array esta siendo reconstruido
d) El array tiene un disco spare disponible

<details>
<summary>Respuesta</summary>

**b) El array esta en estado degradado con un disco fallido**

En `/proc/mdstat`, cada caracter entre corchetes representa un disco del array. `U` (Up) significa que el disco esta activo y funcionando. `_` (guion bajo) significa que el disco esta ausente o fallido. Por tanto, `[U_]` indica un array RAID 1 con un disco activo y uno fallido.
</details>

---

### Pregunta 4
Que archivo de configuracion debe actualizarse para que los arrays RAID se ensamblen automaticamente durante el arranque?

a) `/etc/fstab`
b) `/etc/mdadm.conf`
c) `/etc/raid.conf`
d) `/proc/mdstat`

<details>
<summary>Respuesta</summary>

**b) `/etc/mdadm.conf`**

El archivo `/etc/mdadm.conf` (o `/etc/mdadm/mdadm.conf` en Debian) contiene las definiciones de los arrays RAID. Se genera con `mdadm --detail --scan` y es leido durante el arranque para reensamblar los arrays automaticamente. Nota: `/etc/fstab` se usa para el montaje, pero el ensamblado del array depende de `mdadm.conf`.
</details>

---

### Pregunta 5
Dispones de 4 discos de 1 TB cada uno en RAID 6. Cual es la capacidad util del array?

a) 1 TB
b) 2 TB
c) 3 TB
d) 4 TB

<details>
<summary>Respuesta</summary>

**b) 2 TB**

RAID 6 utiliza doble paridad, por lo que la capacidad util es (N-2) discos. Con 4 discos de 1 TB: (4-2) x 1 TB = 2 TB. Los 2 TB restantes se usan para almacenar los dos bloques de paridad independientes, lo que permite tolerar la perdida simultanea de hasta 2 discos.
</details>

---

### Pregunta 6
Cual es el procedimiento correcto para reemplazar un disco fallido en un array RAID?

a) Detener el array, reemplazar el disco, reiniciar el array
b) Marcar el disco como fallido con `--fail`, retirarlo con `--remove`, agregar el nuevo con `--add`
c) Ejecutar `mdadm --rebuild /dev/md0 /dev/nuevo_disco`
d) Editar `/etc/mdadm.conf` y reiniciar el servicio mdmonitor

<details>
<summary>Respuesta</summary>

**b) Marcar el disco como fallido con `--fail`, retirarlo con `--remove`, agregar el nuevo con `--add`**

El procedimiento correcto sin detener el array es: primero marcar el disco como fallido (`mdadm --fail /dev/md0 /dev/sdX`), luego retirarlo del array (`mdadm --remove /dev/md0 /dev/sdX`), reemplazar fisicamente el disco, particionar el nuevo disco, y finalmente agregarlo al array (`mdadm --add /dev/md0 /dev/sdY`). La reconstruccion comienza automaticamente.
</details>

---

### Pregunta 7
Que comando permite expandir un array RAID 5 de 3 a 4 discos?

a) `mdadm --add /dev/md0 /dev/sde1`
b) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`
c) `mdadm --extend /dev/md0 --devices=4 /dev/sde1`
d) `mdadm --create /dev/md0 --level=5 --raid-devices=4 /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1`

<details>
<summary>Respuesta</summary>

**b) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`**

La opcion `--grow` de mdadm permite modificar un array existente. Se usa junto con `--raid-devices=4` para indicar el nuevo numero de discos activos y `--add` para agregar el nuevo disco. Despues de completar el crecimiento, es necesario redimensionar el sistema de archivos con `resize2fs` o `xfs_growfs`.
</details>

---

### Pregunta 8
Que nivel RAID ofrece la mejor combinacion de rendimiento y redundancia, pero requiere un minimo de 4 discos?

a) RAID 5
b) RAID 6
c) RAID 10
d) RAID 0

<details>
<summary>Respuesta</summary>

**c) RAID 10**

RAID 10 (1+0) combina mirroring (RAID 1) con striping (RAID 0), ofreciendo tanto alto rendimiento de lectura/escritura como redundancia. Requiere un minimo de 4 discos (2 pares de espejos). Aunque RAID 6 tambien requiere 4 discos, su rendimiento de escritura es inferior debido al calculo de doble paridad.
</details>

---

### Pregunta 9
Un administrador ejecuta `mdadm --detail /dev/md0` y observa que un disco aparece como "spare rebuilding". Que significa esto?

a) El disco spare esta defectuoso y debe ser reemplazado
b) El disco spare se ha activado y esta reconstruyendo los datos del disco fallido
c) El array esta siendo convertido de un nivel RAID a otro
d) El disco spare esta siendo verificado antes de ser agregado al array

<details>
<summary>Respuesta</summary>

**b) El disco spare se ha activado y esta reconstruyendo los datos del disco fallido**

Cuando un disco del array falla y hay un spare disponible, mdadm activa automaticamente el disco spare e inicia la reconstruccion (rebuild). Durante este proceso, el disco aparece como "spare rebuilding" en la salida de `--detail`. El progreso se puede monitorizar con `cat /proc/mdstat`.
</details>

---

### Pregunta 10
Que comando elimina completamente los metadatos RAID del superbloque de un dispositivo para poder reutilizarlo?

a) `mdadm --remove /dev/sdb1`
b) `mdadm --zero-superblock /dev/sdb1`
c) `mdadm --clean /dev/sdb1`
d) `mdadm --erase /dev/sdb1`

<details>
<summary>Respuesta</summary>

**b) `mdadm --zero-superblock /dev/sdb1`**

El comando `mdadm --zero-superblock` borra los metadatos RAID almacenados en el superbloque del dispositivo. Esto es necesario cuando se quiere reutilizar un disco que pertenecioa a un array RAID, ya que sin limpiar el superbloque, mdadm podria intentar reensamblarlo en un array antiguo. Es una practica recomendada antes de reutilizar discos.
</details>

---

### Pregunta 11

Un administrador tiene 5 discos de 2 TB configurados en RAID 5. ¿Cual es la capacidad util total del array?

a) 4 TB
b) 6 TB
c) 8 TB
d) 10 TB

<details>
<summary>Respuesta</summary>

**c) 8 TB**

En RAID 5, la capacidad util es (N-1) discos, donde N es el numero total de discos activos. Con 5 discos de 2 TB: (5-1) x 2 TB = 8 TB. Un disco equivalente de capacidad se dedica a almacenar la paridad distribuida entre todos los discos, lo que permite tolerar la perdida de un disco sin perder datos.
</details>

---

### Pregunta 12

¿Que comando genera automaticamente la configuracion de `/etc/mdadm.conf` a partir de los arrays activos?

a) `mdadm --create --scan >> /etc/mdadm.conf`
b) `mdadm --detail --scan >> /etc/mdadm.conf`
c) `mdadm --assemble --scan >> /etc/mdadm.conf`
d) `mdadm --config --generate >> /etc/mdadm.conf`

<details>
<summary>Respuesta</summary>

**b) `mdadm --detail --scan >> /etc/mdadm.conf`**

El comando `mdadm --detail --scan` genera las lineas de configuracion `ARRAY` con los UUIDs de todos los arrays RAID activos en el sistema. Al redirigir la salida a `/etc/mdadm.conf`, se asegura que los arrays se reensamblen automaticamente durante el arranque. Despues de modificar este archivo, se debe actualizar el initramfs con `update-initramfs -u` o `dracut -f`.
</details>

---

### Pregunta 13

¿Que nivel de RAID ofrece cero redundancia pero maximo rendimiento de lectura y escritura?

a) RAID 1
b) RAID 5
c) RAID 0
d) RAID 6

<details>
<summary>Respuesta</summary>

**c) RAID 0**

RAID 0 (striping) distribuye los datos entre todos los discos del array sin ninguna informacion de redundancia o paridad. Esto proporciona el maximo rendimiento tanto en lectura como en escritura, ya que las operaciones se paralelean entre discos. Sin embargo, si cualquier disco del array falla, se pierden TODOS los datos, lo que lo hace inadecuado para datos criticos.
</details>

---

### Pregunta 14

Despues de crear un array RAID en un sistema Debian, ¿que comando se debe ejecutar para actualizar el initramfs e incluir la configuracion RAID?

a) `mkinitcpio -P`
b) `update-initramfs -u`
c) `grub-mkconfig -o /boot/grub/grub.cfg`
d) `systemctl restart mdmonitor`

<details>
<summary>Respuesta</summary>

**b) `update-initramfs -u`**

En sistemas Debian/Ubuntu, `update-initramfs -u` regenera la imagen initramfs incluyendo los modulos RAID y la configuracion de `/etc/mdadm.conf`. Esto es esencial para que los arrays se ensamblen correctamente durante el arranque temprano del sistema. En RHEL/CentOS se usa `dracut -f` para el mismo proposito. `mkinitcpio` es especifico de Arch Linux.
</details>

---

### Pregunta 15

¿Que tipo de particion debe usarse para discos que formaran parte de un array RAID software con mdadm en tablas de particion MBR?

a) Tipo `83` (Linux)
b) Tipo `82` (Linux swap)
c) Tipo `fd` (Linux RAID autodetect)
d) Tipo `8e` (Linux LVM)

<details>
<summary>Respuesta</summary>

**c) Tipo `fd` (Linux RAID autodetect)**

Las particiones destinadas a RAID software deben tener el tipo `fd` (Linux RAID autodetect) en tablas MBR, o `da` en tablas GPT. Este tipo permite que el kernel detecte automaticamente las particiones RAID durante el arranque y las ensamble sin necesidad de configuracion adicional. Aunque mdadm puede funcionar con particiones tipo `83`, el uso de `fd` es la practica recomendada.
</details>

---

### Pregunta 16

Un administrador quiere verificar la integridad de los datos en un array RAID software. ¿Que archivo del sistema se utiliza para iniciar una verificacion (scrub)?

a) `/proc/mdstat`
b) `/sys/block/md0/md/sync_action`
c) `/etc/mdadm.conf`
d) `/sys/block/md0/md/raid_level`

<details>
<summary>Respuesta</summary>

**b) `/sys/block/md0/md/sync_action`**

Para iniciar una verificacion de integridad (scrub) en un array RAID, se escribe `check` en el archivo `/sys/block/md0/md/sync_action` mediante `echo check > /sys/block/md0/md/sync_action`. El resultado se puede leer en `/sys/block/md0/md/mismatch_cnt`, que muestra el numero de sectores con discrepancias. Esta operacion se suele programar en un cron semanal.
</details>

---

### Pregunta 17

¿Que directiva en `/etc/mdadm.conf` especifica la direccion de correo para alertas de fallo de RAID?

a) `EMAIL`
b) `ALERTADDR`
c) `MAILADDR`
d) `NOTIFY`

<details>
<summary>Respuesta</summary>

**c) `MAILADDR`**

La directiva `MAILADDR` en `/etc/mdadm.conf` define la direccion de correo electronico a la que se envian las alertas cuando se detectan eventos como fallos de disco o degradacion del array. Por ejemplo: `MAILADDR root@localhost` o `MAILADDR admin@ejemplo.com`. El demonio `mdadm --monitor` debe estar activo para que las notificaciones funcionen.
</details>

---

### Pregunta 18

Un administrador observa en `/proc/mdstat` que un array RAID 1 muestra `[2/1] [U_]`. ¿Que significa esto?

a) El array tiene 2 discos activos de 1 requerido
b) El array requiere 2 discos pero solo 1 esta activo; un disco ha fallado
c) El array tiene 1 disco spare de 2 disponibles
d) El array esta en proceso de reconstruccion al 50%

<details>
<summary>Respuesta</summary>

**b) El array requiere 2 discos pero solo 1 esta activo; un disco ha fallado**

La notacion `[2/1]` indica que el array fue configurado con 2 discos pero solo 1 esta activo. `[U_]` confirma el estado: `U` indica un disco activo (Up) y `_` indica un disco ausente o fallido. El array esta en estado degradado y funciona con redundancia reducida. Se debe reemplazar el disco fallido lo antes posible para restaurar la redundancia completa.
</details>

---

### Pregunta 19

¿Que nivel RAID soporta la perdida simultanea de hasta 2 discos?

a) RAID 0
b) RAID 1
c) RAID 5
d) RAID 6

<details>
<summary>Respuesta</summary>

**d) RAID 6**

RAID 6 utiliza doble paridad distribuida, lo que le permite tolerar la perdida simultanea de hasta 2 discos sin perdida de datos. Requiere un minimo de 4 discos y la capacidad util es (N-2). RAID 5 solo tolera 1 fallo. RAID 1 puede tolerar N-1 fallos (en un mirror de 2 discos, tolera 1 fallo). RAID 0 no tolera ningun fallo.
</details>

---

### Pregunta 20

¿Que consideracion es importante al configurar `/boot` en un array RAID para poder arrancar el sistema?

a) `/boot` debe estar en RAID 0 para maximo rendimiento
b) `/boot` debe estar en RAID 1 y GRUB debe instalarse en todos los discos del array
c) `/boot` no puede estar en ningun tipo de RAID
d) `/boot` debe estar en RAID 5 para equilibrar rendimiento y redundancia

<details>
<summary>Respuesta</summary>

**b) `/boot` debe estar en RAID 1 y GRUB debe instalarse en todos los discos del array**

Para arrancar desde RAID software, se recomienda usar RAID 1 para `/boot` porque el gestor de arranque (GRUB) puede leer directamente de cualquier disco del espejo. Ademas, GRUB debe instalarse en el MBR de cada disco del array con `grub-install /dev/sdX` para que el sistema pueda arrancar aunque un disco falle. RAID 5 o RAID 0 no son adecuados para `/boot` en la mayoria de configuraciones.
</details>

---

### Pregunta 21

¿Que comando se utiliza para ver el estado actual de todos los arrays RAID del sistema leyendo el archivo virtual del kernel?

<input type="text" class="fill-blank" data-answer="cat /proc/mdstat" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**cat /proc/mdstat**

El archivo `/proc/mdstat` muestra en tiempo real el estado de todos los arrays RAID software del sistema, incluyendo el nivel RAID, los discos miembros, el estado de cada disco (`[UU]` para activos, `[U_]` para degradados) y el progreso de operaciones como reconstruccion o verificacion. Es la forma mas rapida de comprobar el estado RAID.
</details>

---

### Pregunta 22

¿Que comando se utiliza para marcar el disco `/dev/sdb1` como fallido en el array `/dev/md0`?

<input type="text" class="fill-blank" data-answer="mdadm --fail /dev/md0 /dev/sdb1" data-alt="mdadm /dev/md0 --fail /dev/sdb1,mdadm -f /dev/md0 /dev/sdb1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mdadm --fail /dev/md0 /dev/sdb1**

El comando `mdadm --fail` (o `-f`) marca un disco como fallido en un array RAID. Este es el primer paso en el procedimiento de reemplazo de un disco: primero se marca como fallido, luego se retira con `mdadm --remove`, se reemplaza fisicamente, y finalmente se agrega el nuevo disco con `mdadm --add`. La reconstruccion comienza automaticamente.
</details>

---

### Pregunta 23

¿Que comando se utiliza para ver informacion detallada del array RAID `/dev/md0`, incluyendo estado de los discos y UUID?

<input type="text" class="fill-blank" data-answer="mdadm --detail /dev/md0" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mdadm --detail /dev/md0**

El comando `mdadm --detail` muestra informacion completa sobre un array RAID, incluyendo el nivel, tamano, UUID, numero de dispositivos, estado de cada disco miembro (active, spare, faulty), progreso de reconstruccion y opciones de configuracion. Es mas detallado que `/proc/mdstat` y es esencial para diagnosticar problemas en arrays RAID.
</details>

---

### Pregunta 24

¿Que comando detiene el array RAID `/dev/md0` para poder desmontar los discos o realizar mantenimiento?

<input type="text" class="fill-blank" data-answer="mdadm --stop /dev/md0" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mdadm --stop /dev/md0**

El comando `mdadm --stop` desactiva un array RAID, liberando los discos miembros. El sistema de archivos debe estar desmontado antes de detener el array. Para volver a activarlo, se usa `mdadm --assemble /dev/md0` seguido de los dispositivos miembros, o `mdadm --assemble --scan` para reensamblar todos los arrays basandose en `/etc/mdadm.conf`.
</details>

---

### Pregunta 25

¿Que comando agrega el disco `/dev/sde1` como spare al array RAID `/dev/md0`?

<input type="text" class="fill-blank" data-answer="mdadm --add /dev/md0 /dev/sde1" data-alt="mdadm /dev/md0 --add /dev/sde1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mdadm --add /dev/md0 /dev/sde1**

El comando `mdadm --add` agrega un disco a un array existente. Si el array ya tiene todos sus discos activos, el nuevo disco se configura automaticamente como spare (repuesto). Los discos spare permanecen inactivos hasta que un disco activo falla, momento en que se activa automaticamente la reconstruccion del array usando el spare.
</details>

---
