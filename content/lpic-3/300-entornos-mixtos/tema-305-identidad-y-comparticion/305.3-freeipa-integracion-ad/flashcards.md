---
title: "305.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.3"
---

# Flashcards: 305.3 - Freeipa Integracion Ad

> 16 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Un forest trust incluye todos los dominios del bosque AD. Un external trust es m...

</div>
<div class="flashcard-back">

**R:** Un forest trust incluye todos los dominios del bosque AD. Un external trust es más limitado y solo cubre un dominio específico. Para la mayoría de escenarios, se recomienda forest trust.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-adtrust-install` prepara el servidor FreeIPA para establecer relaciones de ...

</div>
<div class="flashcard-back">

**R:** `ipa-adtrust-install` prepara el servidor FreeIPA para establecer relaciones de confianza con AD. Debe ejecutarse antes de crear el trust. `--add-sids` es importante para que los usuarios IPA sean visibles en el contexto de AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `ipa trust-add` crea la relación de confianza. Se puede usar credenciales de adm...

</div>
<div class="flashcard-back">

**R:** `ipa trust-add` crea la relación de confianza. Se puede usar credenciales de administrador AD (`--admin`) o un secreto compartido (`--trust-secret`) previamente configurado en ambos lados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-ad-trust` genera UIDs/GIDs automáticamente a partir del SID de AD. `ipa-ad-...

</div>
<div class="flashcard-back">

**R:** `ipa-ad-trust` genera UIDs/GIDs automáticamente a partir del SID de AD. `ipa-ad-trust-posix` requiere que los usuarios AD tengan atributos uidNumber/gidNumber configurados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: Winsync es un método legacy que sincroniza datos de AD a IPA. El enfoque recomen...

</div>
<div class="flashcard-back">

**R:** Winsync es un método legacy que sincroniza datos de AD a IPA. El enfoque recomendado es usar relaciones de confianza (trust) que son más escalables y no duplican datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: Con trust configurado, SSSD descubre automáticamente los subdominios (dominios A...

</div>
<div class="flashcard-back">

**R:** Con trust configurado, SSSD descubre automáticamente los subdominios (dominios AD de confianza). Los usuarios AD se referencian como `usuario@dominio.ad`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-007">
<div class="flashcard-front">

**P:** Tip de examen: El mapeo de grupos AD requiere tres pasos: crear grupo externo, añadir el grupo ...

</div>
<div class="flashcard-back">

**R:** El mapeo de grupos AD requiere tres pasos: crear grupo externo, añadir el grupo AD como miembro externo, y vincular el grupo externo a un grupo POSIX de IPA. Los grupos externos no pueden usarse directamente en reglas HBAC o sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `--netbios-name`?

</div>
<div class="flashcard-back">

**R:** Nombre NetBIOS del dominio IPA

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `--add-sids`?

</div>
<div class="flashcard-back">

**R:** Generar SIDs para usuarios y grupos IPA existentes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `--add-agents`?

</div>
<div class="flashcard-back">

**R:** Configurar agentes de trust en réplicas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-011">
<div class="flashcard-front">

**P:** Que hace el comando `--type=ad`?

</div>
<div class="flashcard-back">

**R:** Tipo de trust (Active Directory)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-012">
<div class="flashcard-front">

**P:** Que hace el comando `--admin`?

</div>
<div class="flashcard-back">

**R:** Cuenta de administrador de AD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-013">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La integración de FreeIPA con Active Directory permite que usuarios y recursos de ambos sistemas coexistan en un entorno mixto. Existen dos enfoques principales: relaciones de confianza (trust) y sincr

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-014">
<div class="flashcard-front">

**P:** Que es/son ID Ranges?

</div>
<div class="flashcard-back">

**R:** Los rangos de IDs mapean los SIDs de AD a UIDs/GIDs POSIX:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-015">
<div class="flashcard-front">

**P:** Que es/son SSSD para usuarios de trust?

</div>
<div class="flashcard-back">

**R:** SSSD en los clientes FreeIPA resuelve automáticamente los usuarios del dominio AD de confianza:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-016">
<div class="flashcard-front">

**P:** Que es/son Mapeo de grupos entre FreeIPA y AD?

</div>
<div class="flashcard-back">

**R:** Para asignar permisos a grupos AD en FreeIPA:

</div>
</div>

---

