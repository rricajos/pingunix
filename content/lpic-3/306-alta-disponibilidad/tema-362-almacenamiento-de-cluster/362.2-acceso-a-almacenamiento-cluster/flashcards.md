---
title: "362.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "362.2"
---

# Flashcards: 362.2 - Acceso A Almacenamiento Cluster

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-001">
<div class="flashcard-front">

**P:** ¿Que tipo de almacenamiento proporciona acceso a nivel de bloque a traves de una red dedicada?

</div>
<div class="flashcard-back">

**R:** c) SAN. SAN (Storage Area Network) proporciona acceso a nivel de bloque a traves de una red dedicada usando protocolos como Fibre Channel o iSCSI. NAS proporciona acceso a nivel de archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cual es el puerto TCP predeterminado de iSCSI?

</div>
<div class="flashcard-back">

**R:** b) 3260. El puerto predeterminado para iSCSI es 3260/TCP. Este se configura en los portals del target.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que herramienta se usa para configurar iSCSI targets usando LIO en Linux?

</div>
<div class="flashcard-back">

**R:** c) targetcli. `targetcli` es la interfaz de linea de comandos interactiva para configurar LIO (Linux-IO), el framework de iSCSI target integrado en el kernel Linux. `iscsiadm` es la herramienta del initiator (cliente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando descubre targets iSCSI disponibles en un servidor?

</div>
<div class="flashcard-back">

**R:** b) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260`. El modo `discovery` con tipo `sendtargets` consulta al portal iSCSI especificado para obtener la lista de targets disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que politica de agrupacion de multipath mantiene solo una ruta activa y las demas en espera?

</div>
<div class="flashcard-back">

**R:** c) `failover`. La politica `failover` usa una sola ruta activa a la vez. Las demas rutas quedan en espera y se activan solo si la ruta principal falla. `multibus` usa todas las rutas activas simultaneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que comando muestra la topologia multipath con el estado detallado de todas las rutas?

</div>
<div class="flashcard-back">

**R:** b) `multipath -ll`. `multipath -ll` muestra la topologia completa incluyendo el nombre del mapa, las politicas, los grupos de rutas y el estado de cada ruta individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que operacion SPC-3 permite a un nodo del cluster quitar la reserva SCSI de otro nodo?

</div>
<div class="flashcard-back">

**R:** d) preempt. La operacion `preempt` permite a un nodo quitar forzosamente la reserva de otro nodo. Es fundamental para el fencing a nivel de almacenamiento en clusters HA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-008">
<div class="flashcard-front">

**P:** ¿En que directorio del sistema se encuentra la informacion de los HBAs Fibre Channel?

</div>
<div class="flashcard-back">

**R:** b) `/sys/class/fc_host/`. La informacion de los HBAs (Host Bus Adapters) Fibre Channel se encuentra en `/sys/class/fc_host/`. Desde alli se pueden leer el WWPN, WWNN y estado del puerto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-009">
<div class="flashcard-front">

**P:** ¿Cual es el formato correcto de un IQN (iSCSI Qualified Name)?

</div>
<div class="flashcard-back">

**R:** b) `iqn.2024-01.com.empresa:storage.lun1`. El formato IQN es: `iqn.YYYY-MM.dominio.invertido:identificador`. Las opciones a, c y d son formatos de identificacion de almacenamiento (WWN, NAA, EUI) pero no son IQN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que archivo configura el nombre IQN del initiator iSCSI?

</div>
<div class="flashcard-back">

**R:** b) `/etc/iscsi/initiatorname.iscsi`. El archivo `/etc/iscsi/initiatorname.iscsi` contiene el IQN del initiator. Cada nodo debe tener un IQN unico. El archivo `/etc/iscsi/iscsid.conf` contiene la configuracion general del daemon.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que tipo de backstore en targetcli utiliza un archivo regular como almacenamiento subyacente para un target iSCSI?

</div>
<div class="flashcard-back">

**R:** c) fileio. El backstore `fileio` utiliza un archivo en el sistema de archivos como almacenamiento. Se crea con `/backstores/fileio create nombre /ruta/archivo tamaño`. A diferencia de `block` que usa dispositivos de bloque directamente, `fileio` es mas flexible pero puede tener menor rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que identifica de forma unica a un puerto Fibre Channel en una SAN?

</div>
<div class="flashcard-back">

**R:** b) WWPN (World Wide Port Name). El WWPN identifica de forma unica cada puerto Fibre Channel en la SAN. Se utiliza para el zoning (control de acceso) y para la asignacion de LUNs. El WWNN (World Wide Node Name) identifica al nodo completo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que politica de agrupacion de multipath utiliza todas las rutas simultaneamente distribuyendo el trafico entre ellas?

</div>
<div class="flashcard-back">

**R:** b) `multibus`. La politica `multibus` coloca todas las rutas disponibles en un solo grupo y distribuye el trafico entre ellas (normalmente con round-robin). Esto proporciona tanto redundancia como mayor rendimiento al usar multiples rutas simultaneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que seccion del archivo `/etc/multipath.conf` permite excluir dispositivos de la gestion de multipath?

</div>
<div class="flashcard-back">

**R:** b) `blacklist`. La seccion `blacklist` permite excluir dispositivos de multipath usando criterios como `devnode` (patron de nombre), `wwid` (identificador unico) o `device` (vendor/product). Los discos locales suelen excluirse para evitar conflictos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que tipo de reserva SCSI persistente (SPC-3) permite que solo el nodo que posee la reserva pueda escribir en el LUN?

</div>
<div class="flashcard-back">

**R:** b) Write Exclusive. La reserva `Write Exclusive` permite que solo el nodo que posee la reserva pueda escribir en el LUN, mientras otros nodos pueden leer. `Exclusive Access` bloquea tanto lectura como escritura para los demas nodos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando de `iscsiadm` conecta (login) a un target iSCSI especifico?

</div>
<div class="flashcard-back">

**R:** b) `iscsiadm -m node -T iqn... -p IP --login`. El modo `node` de `iscsiadm` con la opcion `--login` establece una sesion iSCSI con el target especificado. Se necesita el IQN del target (`-T`) y la direccion del portal (`-p`). La sesion hace que el LUN aparezca como un dispositivo de bloque local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que topologia de Fibre Channel es la mas utilizada en entornos empresariales modernos y utiliza switches FC?

</div>
<div class="flashcard-back">

**R:** c) Switched Fabric. Switched Fabric es la topologia mas utilizada en entornos modernos. Utiliza switches Fibre Channel para conectar hosts y almacenamiento, proporcionando alta disponibilidad, escalabilidad y rendimiento. Arbitrated Loop es una topologia mas antigua y limitada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que parametro de `/etc/multipath.conf` en la seccion `defaults` permite usar nombres amigables como `mpath0` en lugar de WWIDs largos?

</div>
<div class="flashcard-back">

**R:** b) `user_friendly_names yes`. El parametro `user_friendly_names yes` hace que los dispositivos multipath reciban nombres legibles como `mpath0`, `mpath1`, etc., en lugar de identificadores WWID extensos. Los dispositivos aparecen en `/dev/mapper/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando permite registrar una clave de reserva SCSI persistente en un dispositivo?

</div>
<div class="flashcard-back">

**R:** b) `sg_persist --out --register --param-sark=0x123abc /dev/sda`. El registro es el primer paso para usar reservas SPC-3. `--out` indica una operacion de escritura, `--register` es la accion, y `--param-sark` especifica la clave de registro. Cada nodo del cluster registra su propia clave unica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que diferencia fundamental existe entre NAS y SAN en cuanto al nivel de acceso al almacenamiento?

</div>
<div class="flashcard-back">

**R:** b) NAS opera a nivel de archivo y SAN a nivel de bloque. NAS (Network Attached Storage) proporciona acceso a nivel de archivo mediante protocolos como NFS o SMB. SAN (Storage Area Network) proporciona acceso a nivel de bloque, donde los LUNs aparecen como discos locales en los servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando descubre los targets iSCSI disponibles en el servidor 192.168.1.100?

</div>
<div class="flashcard-back">

**R:** iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260. El modo `discovery` con tipo `sendtargets` consulta al portal iSCSI para obtener la lista de targets disponibles. El puerto 3260 es el predeterminado y puede omitirse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando muestra la topologia multipath con informacion detallada de todas las rutas y su estado?

</div>
<div class="flashcard-back">

**R:** multipath -ll. `multipath -ll` muestra la topologia completa de multipath incluyendo el nombre del dispositivo, WWID, politica de agrupacion, grupos de rutas y el estado de cada ruta individual (active, ready, ghost, faulty).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando genera la configuracion predeterminada de multipath y habilita el servicio?

</div>
<div class="flashcard-back">

**R:** mpathconf --enable --with_multipathd y. El comando `mpathconf --enable --with_multipathd y` genera el archivo `/etc/multipath.conf` con valores predeterminados, habilita el modulo del kernel y arranca el daemon `multipathd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando escanea nuevos LUNs Fibre Channel en el host bus adapter host0?

</div>
<div class="flashcard-back">

**R:** echo "- - -" > /sys/class/scsi_host/host0/scan. Escribir `- - -` (tres guiones separados por espacios, que representan canal, target ID y LUN como wildcards) en el archivo `scan` del HBA provoca un escaneo SCSI que detecta nuevos LUNs disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando muestra las sesiones iSCSI activas actualmente en el initiator?

</div>
<div class="flashcard-back">

**R:** iscsiadm -m session. `iscsiadm -m session` lista todas las sesiones iSCSI activas, mostrando el portal al que estan conectadas, el IQN del target y el identificador de sesion. Es util para verificar que las conexiones estan establecidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: SAN proporciona acceso a nivel de bloque (como un disco local), NAS a nivel de a...

</div>
<div class="flashcard-back">

**R:** SAN proporciona acceso a nivel de bloque (como un disco local), NAS a nivel de archivo (como un directorio compartido). Esta distincion es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El puerto predeterminado de iSCSI es **3260/TCP**. `targetcli` es la herramienta...

</div>
<div class="flashcard-back">

**R:** El puerto predeterminado de iSCSI es **3260/TCP**. `targetcli` es la herramienta para configurar LIO targets. `iscsiadm` es la herramienta del initiator.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `multipath -ll` es el comando principal para ver la topologia. Las politicas `fa...

</div>
<div class="flashcard-back">

**R:** `multipath -ll` es el comando principal para ver la topologia. Las politicas `failover` y `multibus` son las mas importantes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Las reservas SPC-3 son fundamentales para el fencing a nivel de almacenamiento e...

</div>
<div class="flashcard-back">

**R:** Las reservas SPC-3 son fundamentales para el fencing a nivel de almacenamiento en clusters. Permiten que un nodo "expulse" a otro del LUN compartido mediante pre-empt.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `failover`?

</div>
<div class="flashcard-back">

**R:** Una ruta activa, las demas en espera

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `multibus`?

</div>
<div class="flashcard-back">

**R:** Todas las rutas en un grupo (round-robin)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `group_by_serial`?

</div>
<div class="flashcard-back">

**R:** Agrupa por numero de serie del almacenamiento

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son iSCSI?

</div>
<div class="flashcard-back">

**R:** **iSCSI** (Internet Small Computer Systems Interface) permite acceder a almacenamiento de bloque a traves de redes TCP/IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Fibre Channel?

</div>
<div class="flashcard-back">

**R:** **Fibre Channel (FC)** es un protocolo de red de alta velocidad usado principalmente para conectar almacenamiento SAN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Multipath I/O?

</div>
<div class="flashcard-back">

**R:** **Multipath I/O** permite tener multiples rutas fisicas hacia un mismo dispositivo de almacenamiento, proporcionando redundancia y/o mayor rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Reservas SCSI Persistentes (SPC-3)?

</div>
<div class="flashcard-back">

**R:** Las **reservas SCSI persistentes** (SPC-3 PR) permiten que multiples nodos de un cluster coordinen el acceso a un LUN compartido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

