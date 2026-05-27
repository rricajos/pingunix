---
title: "331.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.1"
---

# Flashcards: 331.1 - Certificados X509 Y Pki

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5, uno de los más altos. Domina los comandos de OpenSSL ...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5, uno de los más altos. Domina los comandos de OpenSSL y comprende la cadena de confianza completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre CRL y OCSP. CRL es una lista completa descargada pe...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre CRL y OCSP. CRL es una lista completa descargada periódicamente; OCSP consulta en tiempo real certificados individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `openssl s_client` es crucial para diagnóstico. Recuerda que `-showcerts` muestr...

</div>
<div class="flashcard-back">

**R:** `openssl s_client` es crucial para diagnóstico. Recuerda que `-showcerts` muestra toda la cadena, y `-verify_return_error` falla si la verificación no es exitosa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la ubicación de los directorios PKI según la distribución. RHEL usa `/etc...

</div>
<div class="flashcard-back">

**R:** Conoce la ubicación de los directorios PKI según la distribución. RHEL usa `/etc/pki/`, Debian usa `/etc/ssl/`. Tras añadir una CA personalizada, ejecuta `update-ca-trust` (RHEL) o `update-ca-certificates` (Debian).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `openssl req`?

</div>
<div class="flashcard-back">

**R:** Generar CSR y certificados autofirmados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `openssl x509`?

</div>
<div class="flashcard-back">

**R:** Examinar, convertir y firmar certificados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `openssl ca`?

</div>
<div class="flashcard-back">

**R:** Operaciones de CA (firmar, revocar, generar CRL)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `openssl s_client`?

</div>
<div class="flashcard-back">

**R:** Diagnóstico de conexiones TLS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `openssl verify`?

</div>
<div class="flashcard-back">

**R:** Verificar cadena de certificados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Los certificados X.509 son el estándar fundamental para la identidad digital en Internet. Definen la estructura de los certificados de clave pública utilizados en TLS/SSL, correo electrónico seguro, fi

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Estructura de un Certificado X.509?

</div>
<div class="flashcard-back">

**R:** Un certificado X.509 v3 contiene los siguientes campos principales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Formatos de Certificado?

</div>
<div class="flashcard-back">

**R:** | Formato | Extensión | Descripción |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Cadena de Confianza (Chain of Trust)?

</div>
<div class="flashcard-back">

**R:** La cadena de confianza funciona así:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.1">
</div>

<div class="flashcard" data-id="331.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son Protección de Claves Privadas?

</div>
<div class="flashcard-back">

**R:** Las claves privadas son el activo más sensible de una PKI:

</div>
</div>

---

