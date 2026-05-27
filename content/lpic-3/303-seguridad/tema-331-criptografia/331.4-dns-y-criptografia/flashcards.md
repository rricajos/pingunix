---
title: "331.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.4"
---

# Flashcards: 331.4 - Dns Y Criptografia

> 8 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5. Domina el flujo completo de DNSSEC: generación de cla...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5. Domina el flujo completo de DNSSEC: generación de claves, firma de zonas, registros DS y la cadena de confianza. Conoce también DANE/TLSA y TSIG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: La KSK firma las claves DNSKEY, y su hash se publica como registro DS en la zona...

</div>
<div class="flashcard-back">

**R:** La KSK firma las claves DNSKEY, y su hash se publica como registro DS en la zona padre. La ZSK firma los registros normales de la zona. Esta separación facilita la rotación de claves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: La rotación de ZSK es más frecuente y sencilla (no implica cambios en la zona pa...

</div>
<div class="flashcard-back">

**R:** La rotación de ZSK es más frecuente y sencilla (no implica cambios en la zona padre). La rotación de KSK requiere coordinación con el registrador para actualizar el registro DS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: DANE-EE (uso=3) es el más usado. Significa que el certificado del servidor se au...

</div>
<div class="flashcard-back">

**R:** DANE-EE (uso=3) es el más usado. Significa que el certificado del servidor se autentica directamente por DNS, sin necesidad de validar la cadena de CA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-005">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** El Sistema de Nombres de Dominio (DNS) fue diseñado originalmente sin mecanismos de seguridad. DNSSEC añade autenticación e integridad a las respuestas DNS mediante firmas criptográficas. Además, tecno

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-006">
<div class="flashcard-front">

**P:** Que es/son NSEC vs NSEC3?

</div>
<div class="flashcard-back">

**R:** | Característica | NSEC | NSEC3 |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-007">
<div class="flashcard-front">

**P:** Que es/son DANE y Registros TLSA?

</div>
<div class="flashcard-back">

**R:** DANE (DNS-based Authentication of Named Entities) permite asociar certificados TLS directamente a nombres DNS mediante registros TLSA, reduciendo la dependencia de las CAs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-008">
<div class="flashcard-front">

**P:** Que es/son TSIG (Transaction Signature)?

</div>
<div class="flashcard-back">

**R:** TSIG autentica transferencias de zona y actualizaciones dinámicas DNS mediante claves simétricas compartidas.

</div>
</div>

---

