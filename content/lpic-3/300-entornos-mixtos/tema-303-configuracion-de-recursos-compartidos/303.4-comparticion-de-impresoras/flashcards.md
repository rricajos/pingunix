---
title: "303.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.4"
---

# Flashcards: 303.4 - Comparticion De Impresoras

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `printing = cups` y `printcap name = cups` son los parámetros esenciales para la...

</div>
<div class="flashcard-back">

**R:** `printing = cups` y `printcap name = cups` son los parámetros esenciales para la integración Samba-CUPS. `load printers = yes` carga automáticamente todas las impresoras definidas en CUPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `printable = yes` es lo que distingue un share de impresora de un share de archi...

</div>
<div class="flashcard-back">

**R:** `printable = yes` es lo que distingue un share de impresora de un share de archivos. Es obligatorio para que los clientes puedan enviar trabajos de impresión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `cups options = raw` hace que CUPS no aplique filtros adicionales al trabajo de ...

</div>
<div class="flashcard-back">

**R:** `cups options = raw` hace que CUPS no aplique filtros adicionales al trabajo de impresión. Los datos se envían tal cual los genera el driver del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: El share `[print$]` es donde Samba almacena los drivers de impresora para distri...

</div>
<div class="flashcard-back">

**R:** El share `[print$]` es donde Samba almacena los drivers de impresora para distribución automática a clientes Windows. La estructura de subdirectorios corresponde a las diferentes arquitecturas de Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: `rpcclient` con los comandos `adddriver` y `setdriver` se usa para gestionar dri...

</div>
<div class="flashcard-back">

**R:** `rpcclient` con los comandos `adddriver` y `setdriver` se usa para gestionar drivers de impresora desde la línea de comandos Linux. `enumdrivers` y `enumprinters` listan los recursos disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `printing`?

</div>
<div class="flashcard-back">

**R:** Sistema de impresión a usar (`cups`, `bsd`, `lprng`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `printcap name`?

</div>
<div class="flashcard-back">

**R:** Fuente de la lista de impresoras (`cups` para autodescubrir)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `load printers`?

</div>
<div class="flashcard-back">

**R:** Cargar automáticamente todas las impresoras de CUPS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `cups options`?

</div>
<div class="flashcard-back">

**R:** Opciones adicionales para CUPS (`raw` = sin filtro)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `path`?

</div>
<div class="flashcard-back">

**R:** Directorio de spool para trabajos de impresión

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-011">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La compartición de impresoras es una funcionalidad clave en entornos mixtos. Samba permite que clientes Windows impriman a través de impresoras gestionadas por CUPS (Common Unix Printing System) en Lin

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-012">
<div class="flashcard-front">

**P:** Que es/son Sección [printers]?

</div>
<div class="flashcard-back">

**R:** La sección especial `[printers]` define la configuración por defecto para todas las impresoras compartidas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-013">
<div class="flashcard-front">

**P:** Que es/son Impresión raw (sin procesamiento)?

</div>
<div class="flashcard-back">

**R:** Con `cups options = raw`, Samba envía los datos de impresión directamente a CUPS sin procesamiento adicional:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-014">
<div class="flashcard-front">

**P:** Que es/son Pipes SPOOLSS?

</div>
<div class="flashcard-back">

**R:** El protocolo SPOOLSS (Spooler Subsystem) es el mecanismo RPC que Windows usa para comunicarse con el servicio de impresión. Samba implementa las pipes SPOOLSS para:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-015">
<div class="flashcard-front">

**P:** Que es/son Configuración avanzada de impresoras individuales?

</div>
<div class="flashcard-back">

**R:** Se pueden definir impresoras individuales con configuración específica:

</div>
</div>

---

