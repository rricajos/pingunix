---
title: "364.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.3"
---

# Flashcards: 364.3 - Lvm Avanzado

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El thin provisioning permite **overprovisioning** (asignar mas espacio virtual q...

</div>
<div class="flashcard-back">

**R:** El thin provisioning permite **overprovisioning** (asignar mas espacio virtual que real). Es fundamental monitorizar el uso real del pool para evitar quedarse sin espacio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: La politica `smq` es la predeterminada y recomendada. `writethrough` es mas segu...

</div>
<div class="flashcard-back">

**R:** La politica `smq` es la predeterminada y recomendada. `writethrough` es mas seguro (escritura en HDD y SSD), `writeback` es mas rapido (escritura primero en SSD).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: VDO proporciona deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor ...

</div>
<div class="flashcard-back">

**R:** VDO proporciona deduplicacion y compresion. El `vdoLogicalSize` puede ser mayor que el tamaño fisico (thin provisioning). XFS es el FS recomendado sobre VDO.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `pvmove` es esencial para reemplazar discos sin tiempo de inactividad. Los datos...

</div>
<div class="flashcard-back">

**R:** `pvmove` es esencial para reemplazar discos sin tiempo de inactividad. Los datos se mueven en linea mientras el LV sigue disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `smq`?

</div>
<div class="flashcard-back">

**R:** Stochastic Multi Queue (predeterminada, eficiente)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `mq`?

</div>
<div class="flashcard-back">

**R:** Multi Queue (legacy)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `cleaner`?

</div>
<div class="flashcard-back">

**R:** Solo limpia dirty blocks (para eliminar cache)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `raid1`?

</div>
<div class="flashcard-back">

**R:** RAID 1

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `raid4`?

</div>
<div class="flashcard-back">

**R:** RAID 4

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son LVM Thin Provisioning?

</div>
<div class="flashcard-back">

**R:** El **thin provisioning** permite crear volumenes logicos que aparentan tener mas espacio del que realmente tienen asignado. El espacio se asigna dinamicamente cuando se escriben datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son LVM Cache (dm-cache)?

</div>
<div class="flashcard-back">

**R:** LVM cache usa un SSD como cache para acelerar un LV almacenado en HDD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son LVM RAID?

</div>
<div class="flashcard-back">

**R:** LVM puede crear volumenes con niveles RAID integrados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son VDO (Virtual Data Optimizer)?

</div>
<div class="flashcard-back">

**R:** **VDO** proporciona deduplicacion y compresion en linea para reducir el espacio de almacenamiento utilizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son Metadata Backups?

</div>
<div class="flashcard-back">

**R:** LVM guarda automaticamente copias de seguridad de los metadatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.3">
</div>

<div class="flashcard" data-id="364.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son pvmove - Migracion Online?

</div>
<div class="flashcard-back">

**R:** **pvmove** permite migrar datos entre PVs sin desmontar el LV.

</div>
</div>

---

