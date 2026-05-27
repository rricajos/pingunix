---
title: "207.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "207.3"
---

# Flashcards: 207.3 - Seguridad Dns

> 21 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la diferencia entre KSK y ZSK. La KSK firma las claves (DNSKEY), la ZSK f...

</div>
<div class="flashcard-back">

**R:** Conoce la diferencia entre KSK y ZSK. La KSK firma las claves (DNSKEY), la ZSK firma los registros de datos. La KSK se vincula con la zona padre mediante el registro DS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: NSEC permite zone walking (enumeracion). NSEC3 soluciona este problema usando ha...

</div>
<div class="flashcard-back">

**R:** NSEC permite zone walking (enumeracion). NSEC3 soluciona este problema usando hashes. Ambos prueban la no existencia de un registro de forma autenticada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: El flag `ad` (Authenticated Data) en la respuesta de dig indica que la respuesta...

</div>
<div class="flashcard-back">

**R:** El flag `ad` (Authenticated Data) en la respuesta de dig indica que la respuesta fue verificada con DNSSEC. `dnssec-validation auto` es la configuracion recomendada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: TSIG usa criptografia simetrica (clave compartida) para autenticar transacciones...

</div>
<div class="flashcard-back">

**R:** TSIG usa criptografia simetrica (clave compartida) para autenticar transacciones DNS. Es el metodo recomendado para asegurar transferencias de zona y comunicaciones rndc. La misma clave debe estar en ambos servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: El chroot confina BIND en un directorio aislado. Si el servicio es comprometido,...

</div>
<div class="flashcard-back">

**R:** El chroot confina BIND en un directorio aislado. Si el servicio es comprometido, el atacante solo tiene acceso a los archivos dentro del chroot. La opcion `-t` de `named` especifica el directorio chroot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: Rate limiting mitiga ataques de amplificacion DNS. El parametro `slip` permite q...

</div>
<div class="flashcard-back">

**R:** Rate limiting mitiga ataques de amplificacion DNS. El parametro `slip` permite que algunos clientes legitimos reciban una respuesta truncada (TC), forzandolos a reintentar por TCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-007">
<div class="flashcard-front">

**P:** Tip de examen: DoT y DoH proporcionan confidencialidad (cifrado) para las consultas DNS. DNSSEC...

</div>
<div class="flashcard-back">

**R:** DoT y DoH proporcionan confidencialidad (cifrado) para las consultas DNS. DNSSEC proporciona autenticacion e integridad. Son complementarios, no sustitutos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-008">
<div class="flashcard-front">

**P:** Tip de examen: Split DNS usa `view` en BIND para servir diferentes respuestas segun el cliente....

</div>
<div class="flashcard-back">

**R:** Split DNS usa `view` en BIND para servir diferentes respuestas segun el cliente. Las vistas se evaluan en orden. Es una practica comun para separar la resolucion interna de la externa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `responses-per-second`?

</div>
<div class="flashcard-back">

**R:** Maximo de respuestas identicas por segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `window`?

</div>
<div class="flashcard-back">

**R:** Ventana de tiempo en segundos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-011">
<div class="flashcard-front">

**P:** Que hace el comando `slip`?

</div>
<div class="flashcard-back">

**R:** Cada N respuestas limitadas, enviar una truncada (TC)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-012">
<div class="flashcard-front">

**P:** Que hace el comando `nxdomains-per-second`?

</div>
<div class="flashcard-back">

**R:** Limite de respuestas NXDOMAIN por segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-013">
<div class="flashcard-front">

**P:** Que hace el comando `errors-per-second`?

</div>
<div class="flashcard-back">

**R:** Limite de respuestas de error por segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El sistema DNS fue disenado originalmente sin mecanismos de seguridad, lo que lo hace vulnerable a diversos ataques como envenenamiento de cache, suplantacion de respuestas y espionaje. Este subtema cu

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son DNSSEC (DNS Security Extensions)?

</div>
<div class="flashcard-back">

**R:** DNSSEC anade autenticacion e integridad a las respuestas DNS mediante firmas criptograficas. No proporciona cifrado (confidencialidad), sino que permite verificar que la respuesta DNS no ha sido modifi

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-016">
<div class="flashcard-front">

**P:** Que es/son TSIG (Transaction Signatures)?

</div>
<div class="flashcard-back">

**R:** TSIG proporciona autenticacion para transacciones DNS usando claves simetricas compartidas (HMAC). Se usa principalmente para:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-017">
<div class="flashcard-front">

**P:** Que es/son BIND en chroot?

</div>
<div class="flashcard-back">

**R:** Ejecutar BIND en un entorno chroot limita el acceso del proceso `named` a un directorio restringido, reduciendo el impacto de una posible vulnerabilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-018">
<div class="flashcard-front">

**P:** Que es/son Rate Limiting (Limitacion de tasa)?

</div>
<div class="flashcard-back">

**R:** La limitacion de tasa protege contra ataques de amplificacion DNS y denegacion de servicio:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-019">
<div class="flashcard-front">

**P:** Que es/son Split DNS (DNS dividido)?

</div>
<div class="flashcard-back">

**R:** Split DNS presenta diferentes respuestas segun el origen de la consulta (red interna vs. externa):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-020">
<div class="flashcard-front">

**P:** Que es/son Resumen de tecnologias de seguridad DNS?

</div>
<div class="flashcard-back">

**R:** | Tecnologia | Proteccion | Mecanismo |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-021">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas de seguridad DNS?

</div>
<div class="flashcard-back">

**R:** - **Ocultar la version** de BIND: `version "none";`

</div>
</div>

---

