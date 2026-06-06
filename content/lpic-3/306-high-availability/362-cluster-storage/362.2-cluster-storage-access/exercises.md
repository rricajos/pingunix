---
title: "362.2 - Ejercicios: Acceso a Almacenamiento Cluster"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.2"
peso: 3
tags:
  - lpic-3
  - tema-362
  - ejercicios
  - iscsi
  - multipath
---

# 362.2 - Ejercicios: Acceso a Almacenamiento Cluster

### Pregunta 1
¿Que tipo de almacenamiento proporciona acceso a nivel de bloque a traves de una red dedicada?

a) DAS
b) NAS
c) SAN
d) NFS

<details><summary>Respuesta</summary>

**c) SAN**

SAN (Storage Area Network) proporciona acceso a nivel de bloque a traves de una red dedicada usando protocolos como Fibre Channel o iSCSI. NAS proporciona acceso a nivel de archivo.
</details>

### Pregunta 2
¿Cual es el puerto TCP predeterminado de iSCSI?

a) 860
b) 3260
c) 3306
d) 5432

<details><summary>Respuesta</summary>

**b) 3260**

El puerto predeterminado para iSCSI es 3260/TCP. Este se configura en los portals del target.
</details>

### Pregunta 3
¿Que herramienta se usa para configurar iSCSI targets usando LIO en Linux?

a) iscsiadm
b) tgtadm
c) targetcli
d) iscsi-target

<details><summary>Respuesta</summary>

**c) targetcli**

`targetcli` es la interfaz de linea de comandos interactiva para configurar LIO (Linux-IO), el framework de iSCSI target integrado en el kernel Linux. `iscsiadm` es la herramienta del initiator (cliente).
</details>

### Pregunta 4
¿Que comando descubre targets iSCSI disponibles en un servidor?

a) `iscsiadm -m node -T iqn... --login`
b) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260`
c) `iscsiadm -m session`
d) `targetcli discover 192.168.1.100`

<details><summary>Respuesta</summary>

**b) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260`**

El modo `discovery` con tipo `sendtargets` consulta al portal iSCSI especificado para obtener la lista de targets disponibles.
</details>

### Pregunta 5
¿Que politica de agrupacion de multipath mantiene solo una ruta activa y las demas en espera?

a) `multibus`
b) `group_by_prio`
c) `failover`
d) `round-robin`

<details><summary>Respuesta</summary>

**c) `failover`**

La politica `failover` usa una sola ruta activa a la vez. Las demas rutas quedan en espera y se activan solo si la ruta principal falla. `multibus` usa todas las rutas activas simultaneamente.
</details>

### Pregunta 6
¿Que comando muestra la topologia multipath con el estado detallado de todas las rutas?

a) `multipath -v0`
b) `multipath -ll`
c) `multipathd show maps`
d) `dmsetup ls`

<details><summary>Respuesta</summary>

**b) `multipath -ll`**

`multipath -ll` muestra la topologia completa incluyendo el nombre del mapa, las politicas, los grupos de rutas y el estado de cada ruta individual.
</details>

### Pregunta 7
¿Que operacion SPC-3 permite a un nodo del cluster quitar la reserva SCSI de otro nodo?

a) register
b) reserve
c) release
d) preempt

<details><summary>Respuesta</summary>

**d) preempt**

La operacion `preempt` permite a un nodo quitar forzosamente la reserva de otro nodo. Es fundamental para el fencing a nivel de almacenamiento en clusters HA.
</details>

### Pregunta 8
¿En que directorio del sistema se encuentra la informacion de los HBAs Fibre Channel?

a) `/proc/fc_host/`
b) `/sys/class/fc_host/`
c) `/dev/fc/`
d) `/etc/fc/`

<details><summary>Respuesta</summary>

**b) `/sys/class/fc_host/`**

La informacion de los HBAs (Host Bus Adapters) Fibre Channel se encuentra en `/sys/class/fc_host/`. Desde alli se pueden leer el WWPN, WWNN y estado del puerto.
</details>

### Pregunta 9
¿Cual es el formato correcto de un IQN (iSCSI Qualified Name)?

a) `wwn.50014380123456789`
b) `iqn.2024-01.com.empresa:storage.lun1`
c) `naa.600508b4000123456`
d) `eui.0123456789ABCDEF`

<details><summary>Respuesta</summary>

**b) `iqn.2024-01.com.empresa:storage.lun1`**

El formato IQN es: `iqn.YYYY-MM.dominio.invertido:identificador`. Las opciones a, c y d son formatos de identificacion de almacenamiento (WWN, NAA, EUI) pero no son IQN.
</details>

### Pregunta 10
¿Que archivo configura el nombre IQN del initiator iSCSI?

a) `/etc/iscsi/iscsid.conf`
b) `/etc/iscsi/initiatorname.iscsi`
c) `/etc/iscsi/targets.conf`
d) `/etc/target/saveconfig.json`

<details><summary>Respuesta</summary>

**b) `/etc/iscsi/initiatorname.iscsi`**

El archivo `/etc/iscsi/initiatorname.iscsi` contiene el IQN del initiator. Cada nodo debe tener un IQN unico. El archivo `/etc/iscsi/iscsid.conf` contiene la configuracion general del daemon.
</details>

### Pregunta 11

¿Que tipo de backstore en targetcli utiliza un archivo regular como almacenamiento subyacente para un target iSCSI?

a) block
b) pscsi
c) fileio
d) ramdisk

<details><summary>Respuesta</summary>

**c) fileio**

El backstore `fileio` utiliza un archivo en el sistema de archivos como almacenamiento. Se crea con `/backstores/fileio create nombre /ruta/archivo tamaño`. A diferencia de `block` que usa dispositivos de bloque directamente, `fileio` es mas flexible pero puede tener menor rendimiento.
</details>

### Pregunta 12

¿Que identifica de forma unica a un puerto Fibre Channel en una SAN?

a) IQN (iSCSI Qualified Name)
b) WWPN (World Wide Port Name)
c) LUN (Logical Unit Number)
d) TPG (Target Portal Group)

<details><summary>Respuesta</summary>

**b) WWPN (World Wide Port Name)**

El WWPN identifica de forma unica cada puerto Fibre Channel en la SAN. Se utiliza para el zoning (control de acceso) y para la asignacion de LUNs. El WWNN (World Wide Node Name) identifica al nodo completo.
</details>

### Pregunta 13

¿Que politica de agrupacion de multipath utiliza todas las rutas simultaneamente distribuyendo el trafico entre ellas?

a) `failover`
b) `multibus`
c) `group_by_serial`
d) `group_by_prio`

<details><summary>Respuesta</summary>

**b) `multibus`**

La politica `multibus` coloca todas las rutas disponibles en un solo grupo y distribuye el trafico entre ellas (normalmente con round-robin). Esto proporciona tanto redundancia como mayor rendimiento al usar multiples rutas simultaneamente.
</details>

### Pregunta 14

¿Que seccion del archivo `/etc/multipath.conf` permite excluir dispositivos de la gestion de multipath?

a) `defaults`
b) `blacklist`
c) `multipaths`
d) `devices`

<details><summary>Respuesta</summary>

**b) `blacklist`**

La seccion `blacklist` permite excluir dispositivos de multipath usando criterios como `devnode` (patron de nombre), `wwid` (identificador unico) o `device` (vendor/product). Los discos locales suelen excluirse para evitar conflictos.
</details>

### Pregunta 15

¿Que tipo de reserva SCSI persistente (SPC-3) permite que solo el nodo que posee la reserva pueda escribir en el LUN?

a) Exclusive Access
b) Write Exclusive
c) Shared Access
d) Read Only

<details><summary>Respuesta</summary>

**b) Write Exclusive**

La reserva `Write Exclusive` permite que solo el nodo que posee la reserva pueda escribir en el LUN, mientras otros nodos pueden leer. `Exclusive Access` bloquea tanto lectura como escritura para los demas nodos.
</details>

### Pregunta 16

¿Que comando de `iscsiadm` conecta (login) a un target iSCSI especifico?

a) `iscsiadm -m discovery --login`
b) `iscsiadm -m node -T iqn... -p IP --login`
c) `iscsiadm -m session --connect`
d) `iscsiadm -m target --attach`

<details><summary>Respuesta</summary>

**b) `iscsiadm -m node -T iqn... -p IP --login`**

El modo `node` de `iscsiadm` con la opcion `--login` establece una sesion iSCSI con el target especificado. Se necesita el IQN del target (`-T`) y la direccion del portal (`-p`). La sesion hace que el LUN aparezca como un dispositivo de bloque local.
</details>

### Pregunta 17

¿Que topologia de Fibre Channel es la mas utilizada en entornos empresariales modernos y utiliza switches FC?

a) Point-to-point
b) Arbitrated Loop (FC-AL)
c) Switched Fabric
d) Ring

<details><summary>Respuesta</summary>

**c) Switched Fabric**

Switched Fabric es la topologia mas utilizada en entornos modernos. Utiliza switches Fibre Channel para conectar hosts y almacenamiento, proporcionando alta disponibilidad, escalabilidad y rendimiento. Arbitrated Loop es una topologia mas antigua y limitada.
</details>

### Pregunta 18

¿Que parametro de `/etc/multipath.conf` en la seccion `defaults` permite usar nombres amigables como `mpath0` en lugar de WWIDs largos?

a) `alias_prefix mpath`
b) `user_friendly_names yes`
c) `friendly_names true`
d) `short_names enable`

<details><summary>Respuesta</summary>

**b) `user_friendly_names yes`**

El parametro `user_friendly_names yes` hace que los dispositivos multipath reciban nombres legibles como `mpath0`, `mpath1`, etc., en lugar de identificadores WWID extensos. Los dispositivos aparecen en `/dev/mapper/`.
</details>

### Pregunta 19

¿Que comando permite registrar una clave de reserva SCSI persistente en un dispositivo?

a) `sg_persist --in --read-keys /dev/sda`
b) `sg_persist --out --register --param-sark=0x123abc /dev/sda`
c) `sg_persist --out --reserve /dev/sda`
d) `sg_persist --in --read-reservation /dev/sda`

<details><summary>Respuesta</summary>

**b) `sg_persist --out --register --param-sark=0x123abc /dev/sda`**

El registro es el primer paso para usar reservas SPC-3. `--out` indica una operacion de escritura, `--register` es la accion, y `--param-sark` especifica la clave de registro. Cada nodo del cluster registra su propia clave unica.
</details>

### Pregunta 20

¿Que diferencia fundamental existe entre NAS y SAN en cuanto al nivel de acceso al almacenamiento?

a) NAS es mas rapido que SAN
b) NAS opera a nivel de archivo y SAN a nivel de bloque
c) SAN usa Ethernet y NAS usa Fibre Channel
d) SAN solo funciona con Linux

<details><summary>Respuesta</summary>

**b) NAS opera a nivel de archivo y SAN a nivel de bloque**

NAS (Network Attached Storage) proporciona acceso a nivel de archivo mediante protocolos como NFS o SMB. SAN (Storage Area Network) proporciona acceso a nivel de bloque, donde los LUNs aparecen como discos locales en los servidores.
</details>

### Pregunta 21

¿Que comando descubre los targets iSCSI disponibles en el servidor 192.168.1.100?

<input type="text" class="fill-blank" data-answer="iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260" data-alt="iscsiadm -m discovery -t sendtargets -p 192.168.1.100,iscsiadm --mode discovery --type sendtargets --portal 192.168.1.100:3260" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260**

El modo `discovery` con tipo `sendtargets` consulta al portal iSCSI para obtener la lista de targets disponibles. El puerto 3260 es el predeterminado y puede omitirse.
</details>

### Pregunta 22

¿Que comando muestra la topologia multipath con informacion detallada de todas las rutas y su estado?

<input type="text" class="fill-blank" data-answer="multipath -ll" data-alt="multipathd show maps" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**multipath -ll**

`multipath -ll` muestra la topologia completa de multipath incluyendo el nombre del dispositivo, WWID, politica de agrupacion, grupos de rutas y el estado de cada ruta individual (active, ready, ghost, faulty).
</details>

### Pregunta 23

¿Que comando genera la configuracion predeterminada de multipath y habilita el servicio?

<input type="text" class="fill-blank" data-answer="mpathconf --enable --with_multipathd y" data-alt="mpathconf --enable" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mpathconf --enable --with_multipathd y**

El comando `mpathconf --enable --with_multipathd y` genera el archivo `/etc/multipath.conf` con valores predeterminados, habilita el modulo del kernel y arranca el daemon `multipathd`.
</details>

### Pregunta 24

¿Que comando escanea nuevos LUNs Fibre Channel en el host bus adapter host0?

<input type="text" class="fill-blank" data-answer="echo \"- - -\" > /sys/class/scsi_host/host0/scan" data-alt="echo '- - -' > /sys/class/scsi_host/host0/scan" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**echo "- - -" > /sys/class/scsi_host/host0/scan**

Escribir `- - -` (tres guiones separados por espacios, que representan canal, target ID y LUN como wildcards) en el archivo `scan` del HBA provoca un escaneo SCSI que detecta nuevos LUNs disponibles.
</details>

### Pregunta 25

¿Que comando muestra las sesiones iSCSI activas actualmente en el initiator?

<input type="text" class="fill-blank" data-answer="iscsiadm -m session" data-alt="iscsiadm --mode session" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**iscsiadm -m session**

`iscsiadm -m session` lista todas las sesiones iSCSI activas, mostrando el portal al que estan conectadas, el IQN del target y el identificador de sesion. Es util para verificar que las conexiones estan establecidas.
</details>
