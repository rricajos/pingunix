---
title: "305.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.4"
---

# Flashcards: 305.4 - Nfs

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `sec=sys` usa UID/GID del sistema (susceptible a suplantación). `krb5` autentica...

</div>
<div class="flashcard-back">

**R:** `sec=sys` usa UID/GID del sistema (susceptible a suplantación). `krb5` autentica, `krb5i` añade integridad y `krb5p` añade cifrado. `krb5p` es el más seguro pero con mayor overhead.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: En `/etc/exports`, la opción `sec=` especifica qué mecanismos de seguridad acept...

</div>
<div class="flashcard-back">

**R:** En `/etc/exports`, la opción `sec=` especifica qué mecanismos de seguridad acepta la exportación. Se pueden listar múltiples separados por `:`. El cliente debe usar uno de los mecanismos permitidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `gssproxy` es la alternativa moderna a `rpc.gssd` y `rpc.svcgssd`. Gestiona las ...

</div>
<div class="flashcard-back">

**R:** `gssproxy` es la alternativa moderna a `rpc.gssd` y `rpc.svcgssd`. Gestiona las credenciales GSS-API tanto en el servidor como en el cliente NFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: FreeIPA almacena mapas de automount en LDAP. Los clientes consultan estos mapas ...

</div>
<div class="flashcard-back">

**R:** FreeIPA almacena mapas de automount en LDAP. Los clientes consultan estos mapas a través de SSSD (`automount: sss` en nsswitch.conf). Esto elimina la necesidad de mantener archivos auto.master/auto.* en cada cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: El parámetro `Domain` en idmapd.conf DEBE ser idéntico en el servidor y todos lo...

</div>
<div class="flashcard-back">

**R:** El parámetro `Domain` en idmapd.conf DEBE ser idéntico en el servidor y todos los clientes NFSv4. Si no coincide, todos los archivos aparecerán como propiedad de `nobody:nobody`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `sys`?

</div>
<div class="flashcard-back">

**R:** Autenticación basada en UID/GID (sin Kerberos, inseguro)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `krb5`?

</div>
<div class="flashcard-back">

**R:** Autenticación Kerberos (verifica identidad)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `krb5i`?

</div>
<div class="flashcard-back">

**R:** Kerberos + integridad (verifica que datos no se alteraron)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `krb5p`?

</div>
<div class="flashcard-back">

**R:** Kerberos + privacidad (cifra todos los datos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `sec=`?

</div>
<div class="flashcard-back">

**R:** Mecanismo(s) de seguridad permitidos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.4">
</div>

<div class="flashcard" data-id="305.4-fc-011">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** NFSv4 es la versión moderna del protocolo NFS (Network File System) que incluye soporte nativo para autenticación Kerberos, mapeo de identidades y ACLs. En entornos mixtos con FreeIPA, NFS se integra c

</div>
</div>

---

