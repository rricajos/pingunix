---
title: "332.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "332.2"
---

# Flashcards: 332.2 - Deteccion De Intrusiones Host

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Centra tu estudio en AIDE (configuracion, inicializacion, verificacion) y auditd...

</div>
<div class="flashcard-back">

**R:** Centra tu estudio en AIDE (configuracion, inicializacion, verificacion) y auditd (reglas, ausearch, aureport). Son las herramientas mas preguntadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Tras `aide --init`, es necesario renombrar/copiar la base de datos `.new.gz` a `...

</div>
<div class="flashcard-back">

**R:** Tras `aide --init`, es necesario renombrar/copiar la base de datos `.new.gz` a `.db.gz`. Tras `aide --update`, la nueva base de datos tambien requiere ser movida manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la sintaxis de reglas de `auditctl`: `-w` para vigilar archivos, `-p` par...

</div>
<div class="flashcard-back">

**R:** Conoce la sintaxis de reglas de `auditctl`: `-w` para vigilar archivos, `-p` para permisos (rwxa), `-k` para etiquetas de busqueda. `ausearch -k clave` busca por etiqueta, `aureport` genera informes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `auditd`?

</div>
<div class="flashcard-back">

**R:** Demonio que escribe registros de auditoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `auditctl`?

</div>
<div class="flashcard-back">

**R:** Configura reglas de auditoria en tiempo real

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `ausearch`?

</div>
<div class="flashcard-back">

**R:** Busca eventos en los logs de auditoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `aureport`?

</div>
<div class="flashcard-back">

**R:** Genera informes de auditoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `autrace`?

</div>
<div class="flashcard-back">

**R:** Rastrea procesos individuales

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Los sistemas de deteccion de intrusiones basados en host (HIDS) monitorizan cambios en archivos del sistema, actividad sospechosa y violaciones de politicas. Las herramientas clave incluyen AIDE y Trip

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son AIDE (Advanced Intrusion Detection Environment)?

</div>
<div class="flashcard-back">

**R:** AIDE es un sistema de deteccion de intrusiones basado en la integridad de archivos. Crea una base de datos con hashes y atributos de archivos, y luego compara el estado actual con esa linea base.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Tripwire?

</div>
<div class="flashcard-back">

**R:** Tripwire es otra herramienta de integridad de archivos, precursora de AIDE.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son OSSEC / Wazuh?

</div>
<div class="flashcard-back">

**R:** OSSEC es un HIDS completo que incluye analisis de logs, deteccion de rootkits, integridad de archivos y respuesta activa. Wazuh es un fork activamente mantenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son Samhain?

</div>
<div class="flashcard-back">

**R:** Samhain es un HIDS similar a AIDE/Tripwire pero con capacidades cliente/servidor integradas y verificacion continua en segundo plano.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-014">
<div class="flashcard-front">

**P:** Que es/son auditd - Sistema de Auditoria del Kernel?

</div>
<div class="flashcard-back">

**R:** El framework de auditoria de Linux permite registrar llamadas al sistema, accesos a archivos y eventos de seguridad a nivel de kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-015">
<div class="flashcard-front">

**P:** Que es/son Process Accounting (acct/psacct)?

</div>
<div class="flashcard-back">

**R:** El accounting de procesos registra informacion sobre todos los comandos ejecutados en el sistema.

</div>
</div>

---

