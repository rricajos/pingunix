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

> 10 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="362.2">
</div>

<div class="flashcard" data-id="362.2-fc-001">
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

<div class="flashcard" data-id="362.2-fc-002">
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

<div class="flashcard" data-id="362.2-fc-003">
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

<div class="flashcard" data-id="362.2-fc-004">
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

<div class="flashcard" data-id="362.2-fc-005">
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

<div class="flashcard" data-id="362.2-fc-006">
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

<div class="flashcard" data-id="362.2-fc-007">
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

<div class="flashcard" data-id="362.2-fc-008">
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

<div class="flashcard" data-id="362.2-fc-009">
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

<div class="flashcard" data-id="362.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Reservas SCSI Persistentes (SPC-3)?

</div>
<div class="flashcard-back">

**R:** Las **reservas SCSI persistentes** (SPC-3 PR) permiten que multiples nodos de un cluster coordinen el acceso a un LUN compartido.

</div>
</div>

---

