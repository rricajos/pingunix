---
title: "331.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.2"
---

# Flashcards: 331.2 - Certificados Cifrado Firma Autenticacion

> 10 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Conoce a fondo los comandos de `gpg2` para gestión de claves, cifrado y firma. E...

</div>
<div class="flashcard-back">

**R:** Conoce a fondo los comandos de `gpg2` para gestión de claves, cifrado y firma. Entiende la diferencia entre el modelo de confianza de GPG (Web of Trust) y el de PKI (jerárquico).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: En la práctica, se usa cifrado asimétrico para intercambiar una clave simétrica ...

</div>
<div class="flashcard-back">

**R:** En la práctica, se usa cifrado asimétrico para intercambiar una clave simétrica de sesión, y luego cifrado simétrico para los datos (cifrado híbrido).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Una clave se considera válida si está firmada por al menos una clave de confianz...

</div>
<div class="flashcard-back">

**R:** Una clave se considera válida si está firmada por al menos una clave de confianza "full" o por tres claves de confianza "marginal".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: El protocolo `hkps://` usa HTTPS para la comunicación con servidores de claves. ...

</div>
<div class="flashcard-back">

**R:** El protocolo `hkps://` usa HTTPS para la comunicación con servidores de claves. `hkp://` es la versión sin cifrar en puerto 11371.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-005">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre el uso práctico de la criptografía para proteger datos, verificar identidades y garantizar la integridad de la información. Se centra en GnuPG (GPG) como herramienta principal, junto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-006">
<div class="flashcard-front">

**P:** Que es/son Firmas Digitales?

</div>
<div class="flashcard-back">

**R:** Las firmas digitales garantizan **autenticidad** (quién lo firmó) e **integridad** (que no se ha modificado).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-007">
<div class="flashcard-front">

**P:** Que es/son Algoritmos Hash?

</div>
<div class="flashcard-back">

**R:** Los algoritmos hash generan un resumen de longitud fija a partir de datos de cualquier tamaño. Son fundamentales para firmas digitales y verificación de integridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-008">
<div class="flashcard-front">

**P:** Que es/son Servidores de Claves?

</div>
<div class="flashcard-back">

**R:** Los servidores de claves permiten publicar y buscar claves públicas GPG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son gpg-agent?

</div>
<div class="flashcard-back">

**R:** El `gpg-agent` es un demonio que cachea passphrases y gestiona claves privadas, evitando tener que introducir la passphrase repetidamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.2">
</div>

<div class="flashcard" data-id="331.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son S/MIME (Secure/Multipurpose Internet Mail Extensions)?

</div>
<div class="flashcard-back">

**R:** S/MIME usa certificados X.509 (no GPG) para cifrar y firmar correo electrónico.

</div>
</div>

---

