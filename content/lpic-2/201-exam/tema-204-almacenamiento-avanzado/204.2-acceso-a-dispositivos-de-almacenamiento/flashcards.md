---
title: "204.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "204.2"
---

# Flashcards: 204.2 - Acceso A Dispositivos De Almacenamiento

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-001">
<div class="flashcard-front">

**P:** Que comando se utiliza para descubrir targets iSCSI disponibles en un servidor remoto?

</div>
<div class="flashcard-back">

**R:** b) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`. El modo `discovery` con el tipo `sendtargets` es el comando correcto para descubrir targets iSCSI. Se usa `-m discovery` para indicar el modo de descubrimiento, `-t sendtargets` como tipo de descubrimiento y `-p` para especificar la IP (y opcionalmente el puerto) del target.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-002">
<div class="flashcard-front">

**P:** En que archivo se configura el nombre IQN del initiator iSCSI?

</div>
<div class="flashcard-back">

**R:** b) `/etc/iscsi/initiatorname.iscsi`. El archivo `/etc/iscsi/initiatorname.iscsi` contiene el nombre IQN unico del initiator, con el formato `InitiatorName=iqn.AAAA-MM.dominio.invertido:identificador`. Este archivo es leido por el demonio iscsid al iniciar. El archivo `iscsid.conf` contiene la configuracion global del demonio, no el nombre del initiator.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-003">
<div class="flashcard-front">

**P:** Cual es el puerto TCP por defecto utilizado por iSCSI?

</div>
<div class="flashcard-back">

**R:** b) 3260. El puerto TCP 3260 es el puerto estandar asignado por IANA para el protocolo iSCSI. Tanto el target como el initiator utilizan este puerto por defecto para la comunicacion. El puerto 860 fue un puerto alternativo historico pero no es el estandar actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-004">
<div class="flashcard-front">

**P:** Que comando conecta el initiator a un target iSCSI descubierto previamente?

</div>
<div class="flashcard-back">

**R:** c) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --login`. Para conectar a un target se usa el modo `node` (`-m node`) con la opcion `--login`. Se especifica el target con `-T` seguido del IQN y el portal con `-p` seguido de la IP. El termino "login" en iSCSI equivale a establecer la sesion y hacer disponible el LUN como dispositivo de bloque local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-005">
<div class="flashcard-front">

**P:** Que seccion del archivo `/etc/multipath.conf` se utiliza para excluir discos locales del control de multipath?

</div>
<div class="flashcard-back">

**R:** c) `blacklist`. La seccion `blacklist` en `/etc/multipath.conf` permite excluir dispositivos del control de multipathd. Se pueden filtrar por `devnode` (nombre del dispositivo), `wwid`, o por `vendor`/`product`. Es comun excluir discos locales (como los discos ATA del sistema) para que multipath solo gestione los LUNs SAN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-006">
<div class="flashcard-front">

**P:** Un administrador necesita que un target iSCSI se conecte automaticamente al arrancar el sistema. Que parametro debe configurar?

</div>
<div class="flashcard-back">

**R:** b) `node.startup = automatic`. El parametro `node.startup` controla si la conexion al target se establece automaticamente durante el arranque. Se configura con: `iscsiadm -m node -T IQN -p IP --op update -n node.startup -v automatic`. El valor por defecto suele ser `manual`, lo que requiere login explicito tras cada reinicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-007">
<div class="flashcard-front">

**P:** Que comando muestra el estado detallado de los dispositivos multipath incluyendo todas las rutas?

</div>
<div class="flashcard-back">

**R:** b) `multipath -ll`. El comando `multipath -ll` (doble L) muestra informacion detallada de todos los dispositivos multipath, incluyendo cada ruta individual, su estado (active/faulty), la politica de balanceo y los grupos de rutas. El comando `multipath -l` (una sola L) muestra informacion menos detallada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-008">
<div class="flashcard-front">

**P:** Que directorio contiene los enlaces simbolicos persistentes generados automaticamente por udev basados en el UUID del sistema de archivos?

</div>
<div class="flashcard-back">

**R:** b) `/dev/disk/by-uuid/`. El directorio `/dev/disk/by-uuid/` contiene enlaces simbolicos que apuntan a los dispositivos de bloque usando el UUID del sistema de archivos como nombre. Estos enlaces son generados automaticamente por las reglas udev del sistema y son la forma recomendada para referenciar dispositivos en `/etc/fstab`, ya que el UUID no cambia aunque se muevan los discos a otros puertos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-009">
<div class="flashcard-front">

**P:** Que comando de dmsetup permite ver la tabla de mapeo de los dispositivos device-mapper?

</div>
<div class="flashcard-back">

**R:** c) `dmsetup table`. El comando `dmsetup table` muestra la tabla de mapeo de cada dispositivo device-mapper, que describe como se traducen los sectores logicos a fisicos. `dmsetup ls` lista los nombres, `dmsetup info` muestra metadatos generales (estado, numero mayor/menor), y `dmsetup map` no es un subcomando valido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-010">
<div class="flashcard-front">

**P:** Que diferencia principal hay entre una SAN y un NAS?

</div>
<div class="flashcard-back">

**R:** b) SAN comparte almacenamiento a nivel de bloque y NAS a nivel de archivo. La diferencia fundamental es el nivel de abstraccion: una SAN presenta dispositivos de bloque al servidor (como si fueran discos locales), mientras que un NAS comparte sistemas de archivos ya formateados usando protocolos como NFS o SMB/CIFS. En una SAN, el servidor crea su propio sistema de archivos sobre el LUN; en un NAS, el sistema de archivos lo gestiona el servidor NAS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-011">
<div class="flashcard-front">

**P:** Un administrador quiere que todas las sesiones iSCSI se establezcan automaticamente al arrancar el sistema. ¿Que comando debe usar para configurar un target descubierto?

</div>
<div class="flashcard-back">

**R:** a) `iscsiadm -m node -T iqn.2024-01.com.empresa:lun1 -p 192.168.1.100 --op update -n node.startup -v automatic`. Para configurar la conexion automatica de un target iSCSI, se usa el modo `node` con la operacion `--op update` para modificar el parametro `node.startup` al valor `automatic`. Esto garantiza que el servicio `iscsi` establezca la sesion automaticamente durante el arranque. El valor por defecto suele ser `manual`, que requiere login explicito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que protocolo de autenticacion se utiliza comunmente para proteger las sesiones iSCSI entre initiator y target?

</div>
<div class="flashcard-back">

**R:** b) CHAP. CHAP (Challenge Handshake Authentication Protocol) es el metodo de autenticacion estandar para sesiones iSCSI. Soporta autenticacion unidireccional (el target autentica al initiator) y bidireccional (ambos se autentican mutuamente). Se configura en el initiator con `iscsiadm --op update -n node.session.auth.authmethod -v CHAP` junto con las credenciales de usuario y contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que herramienta interactiva se utiliza para configurar un target iSCSI basado en LIO en el servidor?

</div>
<div class="flashcard-back">

**R:** c) `targetcli`. `targetcli` es la herramienta interactiva para configurar targets iSCSI usando el framework LIO (Linux-IO) del kernel. Permite crear backstores (dispositivos de almacenamiento), definir targets con sus IQNs, asignar LUNs y configurar ACLs de acceso. `iscsiadm` es la herramienta del cliente (initiator), y `tgtadm` es para el framework tgt (alternativo a LIO).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-014">
<div class="flashcard-front">

**P:** En multipath, ¿que politica de balanceo alterna el trafico equitativamente entre todas las rutas disponibles?

</div>
<div class="flashcard-back">

**R:** c) `round-robin`. La politica `round-robin` distribuye las operaciones de I/O de forma equitativa entre todas las rutas activas, alternando secuencialmente. Es la politica mas simple y comun para balanceo de carga cuando todas las rutas tienen el mismo rendimiento. La politica `failover` solo usa una ruta activa y las demas quedan en standby. `group_by_prio` agrupa las rutas segun su prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando de `udevadm` se utiliza para obtener todos los atributos de un dispositivo de bloque, necesarios para crear reglas udev personalizadas?

</div>
<div class="flashcard-back">

**R:** a) `udevadm info --query=all --name=/dev/sdb`. El comando `udevadm info --query=all --name=/dev/sdb` muestra todos los atributos disponibles del dispositivo, incluyendo propiedades del subsistema, numero de serie, fabricante y otras que se pueden usar para crear reglas udev personalizadas. Tambien se puede usar `udevadm info --attribute-walk` para ver los atributos en la cadena del sysfs completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que seccion del archivo `/etc/multipath.conf` permite definir un alias amigable para un dispositivo multipath especifico identificado por su WWID?

</div>
<div class="flashcard-back">

**R:** c) `multipaths`. La seccion `multipaths` en `/etc/multipath.conf` permite definir configuraciones especificas para dispositivos individuales, identificados por su WWID (World Wide Identifier). Dentro de cada bloque `multipath`, se puede asignar un alias amigable con la directiva `alias`, facilitando la identificacion del dispositivo. Por ejemplo, un LUN con WWID largo puede referenciarse como `san_datos`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-017">
<div class="flashcard-front">

**P:** Un administrador necesita recargar las reglas de udev despues de crear una nueva regla personalizada. ¿Que secuencia de comandos debe ejecutar?

</div>
<div class="flashcard-back">

**R:** b) `udevadm control --reload-rules && udevadm trigger`. El comando `udevadm control --reload-rules` recarga las reglas udev desde los archivos de configuracion, y `udevadm trigger` provoca que udev reevalue los dispositivos existentes aplicando las nuevas reglas. Esta secuencia es necesaria despues de crear o modificar reglas en `/etc/udev/rules.d/`. Reiniciar el servicio udev completo no es necesario ni recomendado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que comando muestra las sesiones iSCSI activas con informacion detallada incluyendo los dispositivos SCSI asignados?

</div>
<div class="flashcard-back">

**R:** b) `iscsiadm -m session -P 3`. El comando `iscsiadm -m session -P 3` muestra informacion detallada de todas las sesiones iSCSI activas, incluyendo el target conectado, los parametros de conexion, y los dispositivos SCSI asignados (como `/dev/sdc`). El nivel `-P 3` proporciona el maximo detalle. Sin `-P`, solo se muestra una lista resumida de sesiones. El nivel `-P 1` muestra informacion intermedia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que componente de Device Mapper se utiliza para gestionar dispositivos virtuales de bloque en Linux, incluyendo LVM, multipath y dm-crypt?

</div>
<div class="flashcard-back">

**R:** b) `dmsetup`. `dmsetup` es la herramienta de bajo nivel para interactuar con Device Mapper, la capa del kernel que crea dispositivos virtuales de bloque. Device Mapper es utilizado por LVM (para volumenes logicos), multipath (para rutas redundantes) y dm-crypt (para cifrado). Con `dmsetup ls` se listan los dispositivos, `dmsetup table` muestra las tablas de mapeo, y `dmsetup info` muestra metadatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que formato tiene un IQN (iSCSI Qualified Name) valido?

</div>
<div class="flashcard-back">

**R:** b) `iqn.2024-01.com.empresa:storage.lun1`. El formato IQN sigue la estructura: `iqn.AAAA-MM.nombre_dominio_invertido:identificador_unico`. "iqn" es el prefijo fijo, seguido del año y mes de registro del dominio, el nombre de dominio invertido y un identificador unico separado por dos puntos. Los formatos WWN (World Wide Name) y NAA son para Fibre Channel, y EUI es para IEEE Extended Unique Identifier, no para iSCSI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para descubrir targets iSCSI disponibles en el servidor con IP 192.168.1.100?

</div>
<div class="flashcard-back">

**R:** iscsiadm -m discovery -t sendtargets -p 192.168.1.100. El comando utiliza el modo `discovery` (`-m discovery`) con el tipo `sendtargets` (`-t sendtargets`) para solicitar al servidor iSCSI la lista de targets disponibles. La opcion `-p` especifica el portal (IP y opcionalmente el puerto, que por defecto es 3260). Los targets descubiertos se almacenan en `/var/lib/iscsi/` para futuras conexiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando muestra el estado detallado de los dispositivos multipath incluyendo cada ruta individual?

</div>
<div class="flashcard-back">

**R:** multipath -ll. El comando `multipath -ll` (doble L) muestra informacion detallada de todos los dispositivos multipath, incluyendo el WWID, el tamano, la politica de balanceo, los grupos de rutas y el estado individual de cada ruta (active/faulty/running). Es la herramienta principal para diagnosticar problemas de conectividad en entornos SAN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando lista todos los dispositivos device-mapper activos en el sistema?

</div>
<div class="flashcard-back">

**R:** dmsetup ls. El comando `dmsetup ls` lista todos los dispositivos gestionados por Device Mapper, mostrando su nombre y numeros mayor y menor del dispositivo. Device Mapper es la capa del kernel usada por LVM, multipath y dm-crypt para crear dispositivos virtuales de bloque. Los dispositivos aparecen en `/dev/mapper/` y `/dev/dm-N`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para desconectar (hacer logout) de todos los targets iSCSI conectados?

</div>
<div class="flashcard-back">

**R:** iscsiadm -m node --logout. El comando `iscsiadm -m node --logout` desconecta todas las sesiones iSCSI activas. Para desconectar de un target especifico, se usa `-T` para indicar el IQN y `-p` para el portal. Antes de hacer logout, se deben desmontar los sistemas de archivos montados sobre los dispositivos iSCSI para evitar perdida de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando recarga la configuracion de multipath despues de modificar `/etc/multipath.conf`?

</div>
<div class="flashcard-back">

**R:** multipath -r. El comando `multipath -r` recarga la configuracion de multipathd leyendo nuevamente el archivo `/etc/multipath.conf` y aplicando los cambios a los dispositivos multipath activos. Es necesario ejecutar este comando despues de modificar el archivo de configuracion para que los cambios tengan efecto sin reiniciar el servicio multipathd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: iSCSI es el protocolo SAN mas preguntado en LPIC-2. Entiende la relacion target-...

</div>
<div class="flashcard-back">

**R:** iSCSI es el protocolo SAN mas preguntado en LPIC-2. Entiende la relacion target-initiator y los comandos de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la secuencia completa: discovery -> login -> uso -> logout. Y los archivo...

</div>
<div class="flashcard-back">

**R:** Conoce la secuencia completa: discovery -> login -> uso -> logout. Y los archivos de configuracion en `/etc/iscsi/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Comprende las politicas de balanceo (`round-robin`, `multibus`) y la seccion `bl...

</div>
<div class="flashcard-back">

**R:** Comprende las politicas de balanceo (`round-robin`, `multibus`) y la seccion `blacklist` para excluir discos locales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Los enlaces en `/dev/disk/by-*` son generados automaticamente por udev y son la ...

</div>
<div class="flashcard-back">

**R:** Los enlaces en `/dev/disk/by-*` son generados automaticamente por udev y son la forma recomendada de referenciar dispositivos en `/etc/fstab` para garantizar nombres estables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `node`?

</div>
<div class="flashcard-back">

**R:** Gestionar targets descubiertos (login/logout)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `session`?

</div>
<div class="flashcard-back">

**R:** Ver y gestionar sesiones activas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `iface`?

</div>
<div class="flashcard-back">

**R:** Gestionar interfaces de red para iSCSI

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/iscsi/iscsid.conf`?

</div>
<div class="flashcard-back">

**R:** Configuracion global del demonio iSCSI

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `/var/lib/iscsi/nodes/`?

</div>
<div class="flashcard-back">

**R:** Informacion de targets descubiertos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son udev y nombres persistentes?

</div>
<div class="flashcard-back">

**R:** Las reglas udev permiten asignar nombres persistentes a dispositivos de almacenamiento:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son dmsetup - Gestion de Device Mapper?

</div>
<div class="flashcard-back">

**R:** Device Mapper es la capa del kernel que gestiona dispositivos virtuales de bloque (usada por LVM, multipath, dm-crypt):

</div>
</div>

---

