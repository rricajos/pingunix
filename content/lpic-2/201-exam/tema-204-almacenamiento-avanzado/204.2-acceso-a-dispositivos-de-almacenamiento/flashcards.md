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

> 21 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: iSCSI es el protocolo SAN mas preguntado en LPIC-2. Entiende la relacion target-...

</div>
<div class="flashcard-back">

**R:** iSCSI es el protocolo SAN mas preguntado en LPIC-2. Entiende la relacion target-initiator y los comandos de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-012">
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

<div class="flashcard" data-id="204.2-fc-013">
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

<div class="flashcard" data-id="204.2-fc-014">
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

<div class="flashcard" data-id="204.2-fc-015">
<div class="flashcard-front">

**P:** Que hace el comando `discovery`?

</div>
<div class="flashcard-back">

**R:** Descubrir targets disponibles

</div>
</div>

---

<div class="flashcard-deck" data-subtema="204.2">
</div>

<div class="flashcard" data-id="204.2-fc-016">
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

<div class="flashcard" data-id="204.2-fc-017">
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

<div class="flashcard" data-id="204.2-fc-018">
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

<div class="flashcard" data-id="204.2-fc-019">
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

<div class="flashcard" data-id="204.2-fc-020">
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

<div class="flashcard" data-id="204.2-fc-021">
<div class="flashcard-front">

**P:** Que es/son dmsetup - Gestion de Device Mapper?

</div>
<div class="flashcard-back">

**R:** Device Mapper es la capa del kernel que gestiona dispositivos virtuales de bloque (usada por LVM, multipath, dm-crypt):

</div>
</div>

---

