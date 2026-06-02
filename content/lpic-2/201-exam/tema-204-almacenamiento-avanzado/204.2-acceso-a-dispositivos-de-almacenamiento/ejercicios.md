---
title: "204.2 - Acceso a dispositivos de almacenamiento"
tags: [lpic-2, examen-201, tema-204, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "204"
subtema: "204.2"
---

# 204.2 - Ejercicios: Acceso a dispositivos de almacenamiento

### Pregunta 1
Que comando se utiliza para descubrir targets iSCSI disponibles en un servidor remoto?

a) `iscsiadm -m node -t sendtargets -p 192.168.1.100`
b) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`
c) `iscsiadm -m session -t sendtargets -p 192.168.1.100`
d) `iscsi-discover -p 192.168.1.100`

<details>
<summary>Respuesta</summary>

**b) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`**

El modo `discovery` con el tipo `sendtargets` es el comando correcto para descubrir targets iSCSI. Se usa `-m discovery` para indicar el modo de descubrimiento, `-t sendtargets` como tipo de descubrimiento y `-p` para especificar la IP (y opcionalmente el puerto) del target.
</details>

---

### Pregunta 2
En que archivo se configura el nombre IQN del initiator iSCSI?

a) `/etc/iscsi/iscsid.conf`
b) `/etc/iscsi/initiatorname.iscsi`
c) `/etc/iscsi/iqn.conf`
d) `/var/lib/iscsi/initiator`

<details>
<summary>Respuesta</summary>

**b) `/etc/iscsi/initiatorname.iscsi`**

El archivo `/etc/iscsi/initiatorname.iscsi` contiene el nombre IQN unico del initiator, con el formato `InitiatorName=iqn.AAAA-MM.dominio.invertido:identificador`. Este archivo es leido por el demonio iscsid al iniciar. El archivo `iscsid.conf` contiene la configuracion global del demonio, no el nombre del initiator.
</details>

---

### Pregunta 3
Cual es el puerto TCP por defecto utilizado por iSCSI?

a) 860
b) 3260
c) 3389
d) 5060

<details>
<summary>Respuesta</summary>

**b) 3260**

El puerto TCP 3260 es el puerto estandar asignado por IANA para el protocolo iSCSI. Tanto el target como el initiator utilizan este puerto por defecto para la comunicacion. El puerto 860 fue un puerto alternativo historico pero no es el estandar actual.
</details>

---

### Pregunta 4
Que comando conecta el initiator a un target iSCSI descubierto previamente?

a) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --connect`
b) `iscsiadm -m session -T iqn.2024-01.com.empresa:lun1 --start`
c) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --login`
d) `iscsiadm -m discovery -T iqn.2024-01.com.empresa:lun1 --login`

<details>
<summary>Respuesta</summary>

**c) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --login`**

Para conectar a un target se usa el modo `node` (`-m node`) con la opcion `--login`. Se especifica el target con `-T` seguido del IQN y el portal con `-p` seguido de la IP. El termino "login" en iSCSI equivale a establecer la sesion y hacer disponible el LUN como dispositivo de bloque local.
</details>

---

### Pregunta 5
Que seccion del archivo `/etc/multipath.conf` se utiliza para excluir discos locales del control de multipath?

a) `defaults`
b) `devices`
c) `blacklist`
d) `multipaths`

<details>
<summary>Respuesta</summary>

**c) `blacklist`**

La seccion `blacklist` en `/etc/multipath.conf` permite excluir dispositivos del control de multipathd. Se pueden filtrar por `devnode` (nombre del dispositivo), `wwid`, o por `vendor`/`product`. Es comun excluir discos locales (como los discos ATA del sistema) para que multipath solo gestione los LUNs SAN.
</details>

---

### Pregunta 6
Un administrador necesita que un target iSCSI se conecte automaticamente al arrancar el sistema. Que parametro debe configurar?

a) `node.conn[0].startup = automatic`
b) `node.startup = automatic`
c) `node.session.auto_connect = yes`
d) `discovery.startup = automatic`

<details>
<summary>Respuesta</summary>

**b) `node.startup = automatic`**

El parametro `node.startup` controla si la conexion al target se establece automaticamente durante el arranque. Se configura con: `iscsiadm -m node -T IQN -p IP --op update -n node.startup -v automatic`. El valor por defecto suele ser `manual`, lo que requiere login explicito tras cada reinicio.
</details>

---

### Pregunta 7
Que comando muestra el estado detallado de los dispositivos multipath incluyendo todas las rutas?

a) `multipath -l`
b) `multipath -ll`
c) `multipath -v0`
d) `multipathd status`

<details>
<summary>Respuesta</summary>

**b) `multipath -ll`**

El comando `multipath -ll` (doble L) muestra informacion detallada de todos los dispositivos multipath, incluyendo cada ruta individual, su estado (active/faulty), la politica de balanceo y los grupos de rutas. El comando `multipath -l` (una sola L) muestra informacion menos detallada.
</details>

---

### Pregunta 8
Que directorio contiene los enlaces simbolicos persistentes generados automaticamente por udev basados en el UUID del sistema de archivos?

a) `/dev/disk/by-id/`
b) `/dev/disk/by-uuid/`
c) `/dev/disk/by-path/`
d) `/dev/disk/by-name/`

<details>
<summary>Respuesta</summary>

**b) `/dev/disk/by-uuid/`**

El directorio `/dev/disk/by-uuid/` contiene enlaces simbolicos que apuntan a los dispositivos de bloque usando el UUID del sistema de archivos como nombre. Estos enlaces son generados automaticamente por las reglas udev del sistema y son la forma recomendada para referenciar dispositivos en `/etc/fstab`, ya que el UUID no cambia aunque se muevan los discos a otros puertos.
</details>

---

### Pregunta 9
Que comando de dmsetup permite ver la tabla de mapeo de los dispositivos device-mapper?

a) `dmsetup ls`
b) `dmsetup info`
c) `dmsetup table`
d) `dmsetup map`

<details>
<summary>Respuesta</summary>

**c) `dmsetup table`**

El comando `dmsetup table` muestra la tabla de mapeo de cada dispositivo device-mapper, que describe como se traducen los sectores logicos a fisicos. `dmsetup ls` lista los nombres, `dmsetup info` muestra metadatos generales (estado, numero mayor/menor), y `dmsetup map` no es un subcomando valido.
</details>

---

### Pregunta 10
Que diferencia principal hay entre una SAN y un NAS?

a) SAN usa protocolos TCP/IP y NAS usa protocolos propietarios
b) SAN comparte almacenamiento a nivel de bloque y NAS a nivel de archivo
c) SAN es mas economica que NAS
d) SAN solo funciona con Fibre Channel y NAS solo con Ethernet

<details>
<summary>Respuesta</summary>

**b) SAN comparte almacenamiento a nivel de bloque y NAS a nivel de archivo**

La diferencia fundamental es el nivel de abstraccion: una SAN presenta dispositivos de bloque al servidor (como si fueran discos locales), mientras que un NAS comparte sistemas de archivos ya formateados usando protocolos como NFS o SMB/CIFS. En una SAN, el servidor crea su propio sistema de archivos sobre el LUN; en un NAS, el sistema de archivos lo gestiona el servidor NAS.
</details>

---

### Pregunta 11

Un administrador quiere que todas las sesiones iSCSI se establezcan automaticamente al arrancar el sistema. ¿Que comando debe usar para configurar un target descubierto?

a) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --op update -n node.startup -v automatic`
b) `iscsiadm -m session -T iqn.2024-01.com.empresa:lun1 --auto-connect`
c) `iscsiadm -m discovery --op update -n startup -v auto`
d) `systemctl enable iscsi-autoconnect`

<details>
<summary>Respuesta</summary>

**a) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --op update -n node.startup -v automatic`**

Para configurar la conexion automatica de un target iSCSI, se usa el modo `node` con la operacion `--op update` para modificar el parametro `node.startup` al valor `automatic`. Esto garantiza que el servicio `iscsi` establezca la sesion automaticamente durante el arranque. El valor por defecto suele ser `manual`, que requiere login explicito.
</details>

---

### Pregunta 12

¿Que protocolo de autenticacion se utiliza comunmente para proteger las sesiones iSCSI entre initiator y target?

a) Kerberos
b) CHAP
c) LDAP
d) RADIUS

<details>
<summary>Respuesta</summary>

**b) CHAP**

CHAP (Challenge Handshake Authentication Protocol) es el metodo de autenticacion estandar para sesiones iSCSI. Soporta autenticacion unidireccional (el target autentica al initiator) y bidireccional (ambos se autentican mutuamente). Se configura en el initiator con `iscsiadm --op update -n node.session.auth.authmethod -v CHAP` junto con las credenciales de usuario y contraseña.
</details>

---

### Pregunta 13

¿Que herramienta interactiva se utiliza para configurar un target iSCSI basado en LIO en el servidor?

a) `iscsiadm`
b) `tgtadm`
c) `targetcli`
d) `iscsi-target-config`

<details>
<summary>Respuesta</summary>

**c) `targetcli`**

`targetcli` es la herramienta interactiva para configurar targets iSCSI usando el framework LIO (Linux-IO) del kernel. Permite crear backstores (dispositivos de almacenamiento), definir targets con sus IQNs, asignar LUNs y configurar ACLs de acceso. `iscsiadm` es la herramienta del cliente (initiator), y `tgtadm` es para el framework tgt (alternativo a LIO).
</details>

---

### Pregunta 14

En multipath, ¿que politica de balanceo alterna el trafico equitativamente entre todas las rutas disponibles?

a) `failover`
b) `group_by_prio`
c) `round-robin`
d) `group_by_serial`

<details>
<summary>Respuesta</summary>

**c) `round-robin`**

La politica `round-robin` distribuye las operaciones de I/O de forma equitativa entre todas las rutas activas, alternando secuencialmente. Es la politica mas simple y comun para balanceo de carga cuando todas las rutas tienen el mismo rendimiento. La politica `failover` solo usa una ruta activa y las demas quedan en standby. `group_by_prio` agrupa las rutas segun su prioridad.
</details>

---

### Pregunta 15

¿Que comando de `udevadm` se utiliza para obtener todos los atributos de un dispositivo de bloque, necesarios para crear reglas udev personalizadas?

a) `udevadm info --query=all --name=/dev/sdb`
b) `udevadm monitor --name=/dev/sdb`
c) `udevadm list --device=/dev/sdb`
d) `udevadm show /dev/sdb`

<details>
<summary>Respuesta</summary>

**a) `udevadm info --query=all --name=/dev/sdb`**

El comando `udevadm info --query=all --name=/dev/sdb` muestra todos los atributos disponibles del dispositivo, incluyendo propiedades del subsistema, numero de serie, fabricante y otras que se pueden usar para crear reglas udev personalizadas. Tambien se puede usar `udevadm info --attribute-walk` para ver los atributos en la cadena del sysfs completa.
</details>

---

### Pregunta 16

¿Que seccion del archivo `/etc/multipath.conf` permite definir un alias amigable para un dispositivo multipath especifico identificado por su WWID?

a) `defaults`
b) `devices`
c) `multipaths`
d) `blacklist`

<details>
<summary>Respuesta</summary>

**c) `multipaths`**

La seccion `multipaths` en `/etc/multipath.conf` permite definir configuraciones especificas para dispositivos individuales, identificados por su WWID (World Wide Identifier). Dentro de cada bloque `multipath`, se puede asignar un alias amigable con la directiva `alias`, facilitando la identificacion del dispositivo. Por ejemplo, un LUN con WWID largo puede referenciarse como `san_datos`.
</details>

---

### Pregunta 17

Un administrador necesita recargar las reglas de udev despues de crear una nueva regla personalizada. ¿Que secuencia de comandos debe ejecutar?

a) `systemctl restart udev`
b) `udevadm control --reload-rules && udevadm trigger`
c) `udevadm refresh`
d) `service udev reload`

<details>
<summary>Respuesta</summary>

**b) `udevadm control --reload-rules && udevadm trigger`**

El comando `udevadm control --reload-rules` recarga las reglas udev desde los archivos de configuracion, y `udevadm trigger` provoca que udev reevalue los dispositivos existentes aplicando las nuevas reglas. Esta secuencia es necesaria despues de crear o modificar reglas en `/etc/udev/rules.d/`. Reiniciar el servicio udev completo no es necesario ni recomendado.
</details>

---

### Pregunta 18

¿Que comando muestra las sesiones iSCSI activas con informacion detallada incluyendo los dispositivos SCSI asignados?

a) `iscsiadm -m session`
b) `iscsiadm -m session -P 3`
c) `iscsiadm -m node --list`
d) `iscsiadm -m discovery --show`

<details>
<summary>Respuesta</summary>

**b) `iscsiadm -m session -P 3`**

El comando `iscsiadm -m session -P 3` muestra informacion detallada de todas las sesiones iSCSI activas, incluyendo el target conectado, los parametros de conexion, y los dispositivos SCSI asignados (como `/dev/sdc`). El nivel `-P 3` proporciona el maximo detalle. Sin `-P`, solo se muestra una lista resumida de sesiones. El nivel `-P 1` muestra informacion intermedia.
</details>

---

### Pregunta 19

¿Que componente de Device Mapper se utiliza para gestionar dispositivos virtuales de bloque en Linux, incluyendo LVM, multipath y dm-crypt?

a) `mdadm`
b) `dmsetup`
c) `fdisk`
d) `parted`

<details>
<summary>Respuesta</summary>

**b) `dmsetup`**

`dmsetup` es la herramienta de bajo nivel para interactuar con Device Mapper, la capa del kernel que crea dispositivos virtuales de bloque. Device Mapper es utilizado por LVM (para volumenes logicos), multipath (para rutas redundantes) y dm-crypt (para cifrado). Con `dmsetup ls` se listan los dispositivos, `dmsetup table` muestra las tablas de mapeo, y `dmsetup info` muestra metadatos.
</details>

---

### Pregunta 20

¿Que formato tiene un IQN (iSCSI Qualified Name) valido?

a) `wwn.2024.com.empresa.storage.lun1`
b) `iqn.2024-01.com.empresa:storage.lun1`
c) `naa.2024.01.com.empresa.storage`
d) `eui.2024010ABCDEF1234`

<details>
<summary>Respuesta</summary>

**b) `iqn.2024-01.com.empresa:storage.lun1`**

El formato IQN sigue la estructura: `iqn.AAAA-MM.nombre_dominio_invertido:identificador_unico`. "iqn" es el prefijo fijo, seguido del año y mes de registro del dominio, el nombre de dominio invertido y un identificador unico separado por dos puntos. Los formatos WWN (World Wide Name) y NAA son para Fibre Channel, y EUI es para IEEE Extended Unique Identifier, no para iSCSI.
</details>

---

### Pregunta 21

¿Que comando se utiliza para descubrir targets iSCSI disponibles en el servidor con IP 192.168.1.100?

<input type="text" class="fill-blank" data-answer="iscsiadm -m discovery -t sendtargets -p 192.168.1.100" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**iscsiadm -m discovery -t sendtargets -p 192.168.1.100**

El comando utiliza el modo `discovery` (`-m discovery`) con el tipo `sendtargets` (`-t sendtargets`) para solicitar al servidor iSCSI la lista de targets disponibles. La opcion `-p` especifica el portal (IP y opcionalmente el puerto, que por defecto es 3260). Los targets descubiertos se almacenan en `/var/lib/iscsi/` para futuras conexiones.
</details>

---

### Pregunta 22

¿Que comando muestra el estado detallado de los dispositivos multipath incluyendo cada ruta individual?

<input type="text" class="fill-blank" data-answer="multipath -ll" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**multipath -ll**

El comando `multipath -ll` (doble L) muestra informacion detallada de todos los dispositivos multipath, incluyendo el WWID, el tamano, la politica de balanceo, los grupos de rutas y el estado individual de cada ruta (active/faulty/running). Es la herramienta principal para diagnosticar problemas de conectividad en entornos SAN.
</details>

---

### Pregunta 23

¿Que comando lista todos los dispositivos device-mapper activos en el sistema?

<input type="text" class="fill-blank" data-answer="dmsetup ls" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**dmsetup ls**

El comando `dmsetup ls` lista todos los dispositivos gestionados por Device Mapper, mostrando su nombre y numeros mayor y menor del dispositivo. Device Mapper es la capa del kernel usada por LVM, multipath y dm-crypt para crear dispositivos virtuales de bloque. Los dispositivos aparecen en `/dev/mapper/` y `/dev/dm-N`.
</details>

---

### Pregunta 24

¿Que comando se utiliza para desconectar (hacer logout) de todos los targets iSCSI conectados?

<input type="text" class="fill-blank" data-answer="iscsiadm -m node --logout" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**iscsiadm -m node --logout**

El comando `iscsiadm -m node --logout` desconecta todas las sesiones iSCSI activas. Para desconectar de un target especifico, se usa `-T` para indicar el IQN y `-p` para el portal. Antes de hacer logout, se deben desmontar los sistemas de archivos montados sobre los dispositivos iSCSI para evitar perdida de datos.
</details>

---

### Pregunta 25

¿Que comando recarga la configuracion de multipath despues de modificar `/etc/multipath.conf`?

<input type="text" class="fill-blank" data-answer="multipath -r" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**multipath -r**

El comando `multipath -r` recarga la configuracion de multipathd leyendo nuevamente el archivo `/etc/multipath.conf` y aplicando los cambios a los dispositivos multipath activos. Es necesario ejecutar este comando despues de modificar el archivo de configuracion para que los cambios tengan efecto sin reiniciar el servicio multipathd.
</details>

---
