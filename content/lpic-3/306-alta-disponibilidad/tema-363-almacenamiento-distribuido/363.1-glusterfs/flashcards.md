---
title: "363.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "363.1"
---

# Flashcards: 363.1 - Glusterfs

> 7 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: GlusterFS no tiene servidor de metadatos centralizado. Usa un algoritmo de hash ...

</div>
<div class="flashcard-back">

**R:** GlusterFS no tiene servidor de metadatos centralizado. Usa un algoritmo de hash elastico (DHT - Distributed Hash Table) para localizar archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conoce todos los tipos de volumen. `distributed-replicated` es el mas comun. El ...

</div>
<div class="flashcard-back">

**R:** Conoce todos los tipos de volumen. `distributed-replicated` es el mas comun. El numero de bricks debe ser multiplo del factor de replica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Despues de añadir bricks, SIEMPRE ejecutar `rebalance` para distribuir los datos...

</div>
<div class="flashcard-back">

**R:** Despues de añadir bricks, SIEMPRE ejecutar `rebalance` para distribuir los datos existentes a los nuevos bricks. Sin rebalanceo, solo los archivos nuevos iran a los bricks nuevos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: La geo-replicacion es asincrona (a diferencia de la replicacion normal que es si...

</div>
<div class="flashcard-back">

**R:** La geo-replicacion es asincrona (a diferencia de la replicacion normal que es sincrona). Se usa para DR (Disaster Recovery) entre sitios remotos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-005">
<div class="flashcard-front">

**P:** Que es/son Introduccion a GlusterFS?

</div>
<div class="flashcard-back">

**R:** **GlusterFS** es un sistema de archivos distribuido de codigo abierto capaz de escalar a varios petabytes. Agrega almacenamiento de multiples servidores en un espacio de nombres unificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-006">
<div class="flashcard-front">

**P:** Que es/son Geo-Replicacion?

</div>
<div class="flashcard-back">

**R:** La **geo-replicacion** permite replicar volumenes entre clusters GlusterFS distantes geograficamente (asincronamente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="363.1">
</div>

<div class="flashcard" data-id="363.1-fc-007">
<div class="flashcard-front">

**P:** Que es/son Healing (Auto-Reparacion)?

</div>
<div class="flashcard-back">

**R:** Cuando un brick se recupera de un fallo, GlusterFS repara automaticamente los datos desincronizados:

</div>
</div>

---

