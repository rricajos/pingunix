---
title: "301.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.4"
---

# Flashcards: 301.4 - Resolucion De Problemas

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Es crucial conocer los niveles de log y la capacidad de ajustarlos por component...

</div>
<div class="flashcard-back">

**R:** Es crucial conocer los niveles de log y la capacidad de ajustarlos por componente. El nivel 3 es normalmente suficiente para diagnosticar problemas de acceso. Nunca usar nivel 10 en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los puertos a filtrar (445, 139, 137, 138) y los filtros básicos de Wire...

</div>
<div class="flashcard-back">

**R:** Conocer los puertos a filtrar (445, 139, 137, 138) y los filtros básicos de Wireshark para SMB. tcpdump es útil para capturas rápidas en servidores sin interfaz gráfica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: El orden predeterminado es `lmhosts wins host bcast`. Conocer cada método y cuán...

</div>
<div class="flashcard-back">

**R:** El orden predeterminado es `lmhosts wins host bcast`. Conocer cada método y cuándo se utiliza es fundamental para diagnosticar problemas de resolución de nombres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `lmhosts`?

</div>
<div class="flashcard-back">

**R:** Archivo estático `/etc/samba/lmhosts`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `wins`?

</div>
<div class="flashcard-back">

**R:** Consulta al servidor WINS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `host`?

</div>
<div class="flashcard-back">

**R:** Resolución DNS del sistema (`/etc/hosts`, DNS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `bcast`?

</div>
<div class="flashcard-back">

**R:** Broadcast NetBIOS en la subred local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `NT_STATUS_ACCESS_DENIED`?

</div>
<div class="flashcard-back">

**R:** Permisos insuficientes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-009">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema aborda las técnicas y herramientas para diagnosticar y resolver problemas comunes en entornos Samba, incluyendo niveles de log, análisis de tráfico de red, resolución de nombres y errores

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-010">
<div class="flashcard-front">

**P:** Que es/son Niveles de log en Samba?

</div>
<div class="flashcard-back">

**R:** Samba proporciona niveles de log granulares del 0 al 10:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-011">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - Niveles de log del 0 al 10, ajustables por componente y en caliente con `smbcontrol`

</div>
</div>

---

