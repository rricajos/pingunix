---
title: "363.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "363.2"
---

# Flashcards: 363.2 - Ceph

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: MON requiere numero impar (3 o 5) para quorum. OSD hay uno por disco. MDS solo e...

</div>
<div class="flashcard-back">

**R:** MON requiere numero impar (3 o 5) para quorum. OSD hay uno por disco. MDS solo es necesario para CephFS. MGR proporciona el dashboard y metricas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El estado ideal de un PG es `active+clean`. Si ves `degraded` significa que no h...

</div>
<div class="flashcard-back">

**R:** El estado ideal de un PG es `active+clean`. Si ves `degraded` significa que no hay suficientes replicas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: RBD es ideal para volumenes de maquinas virtuales y contenedores. Soporta thin p...

</div>
<div class="flashcard-back">

**R:** RBD es ideal para volumenes de maquinas virtuales y contenedores. Soporta thin provisioning, snapshots y clones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `active+clean`?

</div>
<div class="flashcard-back">

**R:** Normal, todo bien

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `active+degraded`?

</div>
<div class="flashcard-back">

**R:** Funcionando pero faltan replicas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `active+recovering`?

</div>
<div class="flashcard-back">

**R:** Recuperando datos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `peering`?

</div>
<div class="flashcard-back">

**R:** Estableciendo acuerdo entre OSDs

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `stale`?

</div>
<div class="flashcard-back">

**R:** PG sin actualizaciones recientes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion a Ceph?

</div>
<div class="flashcard-back">

**R:** **Ceph** es una plataforma de almacenamiento distribuido que proporciona almacenamiento de objetos, bloques y archivos en un unico sistema unificado. Es altamente escalable y no tiene punto unico de fa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Algoritmo CRUSH?

</div>
<div class="flashcard-back">

**R:** **CRUSH** (Controlled Replication Under Scalable Hashing) es el algoritmo que Ceph usa para determinar donde almacenar los datos. No necesita tabla de asignacion centralizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Placement Groups (PGs)?

</div>
<div class="flashcard-back">

**R:** Los **Placement Groups** son agrupaciones logicas de objetos que simplifican la gestion de replicacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son RBD - RADOS Block Device?

</div>
<div class="flashcard-back">

**R:** **RBD** proporciona almacenamiento de bloques sobre Ceph, similar a un disco virtual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son CephFS - Ceph File System?

</div>
<div class="flashcard-back">

**R:** **CephFS** es un sistema de archivos distribuido compatible con POSIX que se ejecuta sobre RADOS. Requiere al menos un **MDS** (Metadata Server).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-014">
<div class="flashcard-front">

**P:** Que es/son RGW - RADOS Gateway?

</div>
<div class="flashcard-back">

**R:** **RGW** proporciona una interfaz REST compatible con **Amazon S3** y **OpenStack Swift**.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.2">
</div>

<div class="flashcard" data-id="363.2-fc-015">
<div class="flashcard-front">

**P:** Que es/son Despliegue con cephadm?

</div>
<div class="flashcard-back">

**R:** **cephadm** es la herramienta oficial para desplegar y gestionar clusters Ceph modernos (desde Octopus).

</div>
</div>

---

