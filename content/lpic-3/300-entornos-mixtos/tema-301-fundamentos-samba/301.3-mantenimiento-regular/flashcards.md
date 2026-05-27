---
title: "301.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.3"
---

# Flashcards: 301.3 - Mantenimiento Regular

> 16 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `smbstatus` es la herramienta principal para verificar conexiones activas. La op...

</div>
<div class="flashcard-back">

**R:** `smbstatus` es la herramienta principal para verificar conexiones activas. La opción `-b` muestra un resumen breve y `-S` muestra los recursos compartidos en uso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `rpcclient` es útil para enumerar usuarios, grupos y recursos. Conocer los coman...

</div>
<div class="flashcard-back">

**R:** `rpcclient` es útil para enumerar usuarios, grupos y recursos. Conocer los comandos básicos como `enumdomusers`, `srvinfo` y `netshareenum`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conocer las tres herramientas TDB (`tdbbackup`, `tdbtool`, `tdbdump`) y las base...

</div>
<div class="flashcard-back">

**R:** Conocer las tres herramientas TDB (`tdbbackup`, `tdbtool`, `tdbdump`) y las bases de datos más importantes como `secrets.tdb` y `passdb.tdb`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `ls`?

</div>
<div class="flashcard-back">

**R:** Listar archivos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `cd directorio`?

</div>
<div class="flashcard-back">

**R:** Cambiar directorio remoto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `lcd directorio`?

</div>
<div class="flashcard-back">

**R:** Cambiar directorio local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `get archivo`?

</div>
<div class="flashcard-back">

**R:** Descargar archivo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `put archivo`?

</div>
<div class="flashcard-back">

**R:** Subir archivo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-009">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre las herramientas y procedimientos necesarios para el mantenimiento diario de un servidor Samba, incluyendo monitorización de conexiones, consultas de red, gestión de bases de datos T

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son Monitorización con smbstatus?

</div>
<div class="flashcard-back">

**R:** El comando `smbstatus` muestra información en tiempo real sobre las conexiones activas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Consultas de red con nmblookup?

</div>
<div class="flashcard-back">

**R:** `nmblookup` consulta nombres NetBIOS y servicios WINS:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son Acceso con smbclient?

</div>
<div class="flashcard-back">

**R:** `smbclient` es un cliente SMB similar a un cliente FTP:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son Administración remota con rpcclient?

</div>
<div class="flashcard-back">

**R:** `rpcclient` permite ejecutar llamadas RPC contra servidores SMB:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son El comando net?

</div>
<div class="flashcard-back">

**R:** El comando `net` es una herramienta versátil con múltiples subcomandos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son Herramientas de bases de datos TDB?

</div>
<div class="flashcard-back">

**R:** Samba utiliza bases de datos TDB (Trivial Database) para almacenar estado interno. Las herramientas para gestionarlas son fundamentales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.3">
</div>

<div class="flashcard" data-id="301.3-fc-016">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - `smbstatus` para monitorizar conexiones activas y bloqueos

</div>
</div>

---

