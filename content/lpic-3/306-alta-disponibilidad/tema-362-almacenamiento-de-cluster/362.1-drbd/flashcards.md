---
title: "362.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "362.1"
---

# Flashcards: 362.1 - Drbd

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las tres secciones principales: `global`, `common` y `resource`. La secci...

</div>
<div class="flashcard-back">

**R:** Conoce las tres secciones principales: `global`, `common` y `resource`. La seccion `common` aplica valores predeterminados a todos los recursos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El protocolo **C** es el mas usado en produccion porque garantiza que no se pier...

</div>
<div class="flashcard-back">

**R:** El protocolo **C** es el mas usado en produccion porque garantiza que no se pierdan datos. El protocolo **A** es adecuado para replicacion de larga distancia donde la latencia es alta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: La verificacion online compara datos bloque a bloque usando el algoritmo definid...

</div>
<div class="flashcard-back">

**R:** La verificacion online compara datos bloque a bloque usando el algoritmo definido en `verify-alg`. No corrige diferencias automaticamente; se necesita resincronizar despues.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: En la recuperacion manual de split-brain, el nodo "victima" usa `--discard-my-da...

</div>
<div class="flashcard-back">

**R:** En la recuperacion manual de split-brain, el nodo "victima" usa `--discard-my-data` al reconectar. Siempre se debe elegir cual nodo tiene los datos correctos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `cs`?

</div>
<div class="flashcard-back">

**R:** Connection State

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `ro`?

</div>
<div class="flashcard-back">

**R:** Role (local/remoto)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `ds`?

</div>
<div class="flashcard-back">

**R:** Disk State (local/remoto)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/drbd.conf`?

</div>
<div class="flashcard-back">

**R:** Configuracion principal

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion a DRBD?

</div>
<div class="flashcard-back">

**R:** **DRBD** (Distributed Replicated Block Device) es un sistema de replicacion de dispositivos de bloque a nivel de kernel que replica datos entre dos o mas nodos a traves de la red. Se conoce como **RAID

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Modos de Sincronizacion (Protocolos)?

</div>
<div class="flashcard-back">

**R:** | Protocolo | Nombre | Descripcion | Rendimiento | Seguridad |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Verificacion Online?

</div>
<div class="flashcard-back">

**R:** La verificacion online compara los datos entre nodos sin detener el servicio:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Recuperacion de Split-Brain?

</div>
<div class="flashcard-back">

**R:** Cuando ocurre un split-brain en DRBD (ambos nodos fueron primarios mientras estaban desconectados), se necesita intervencion manual:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Modo Dual-Primary?

</div>
<div class="flashcard-back">

**R:** En modo dual-primary, ambos nodos pueden ser primarios simultaneamente. Requiere un sistema de archivos cluster (GFS2, OCFS2):

</div>
</div>

---

