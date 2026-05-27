---
title: "304.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "304.1"
---

# Flashcards: 304.1 - Clientes De Autenticacion Linux

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: `pam_winbind.so` y `pam_sss.so` son los módulos PAM para Winbind y SSSD respecti...

</div>
<div class="flashcard-back">

**R:** `pam_winbind.so` y `pam_sss.so` son los módulos PAM para Winbind y SSSD respectivamente. Ambos deben configurarse en los cuatro tipos de módulos PAM (auth, account, password, session).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El orden en nsswitch.conf importa. `files` primero asegura que los usuarios loca...

</div>
<div class="flashcard-back">

**R:** El orden en nsswitch.conf importa. `files` primero asegura que los usuarios locales se resuelven antes que los del dominio. `winbind` y `sss` no deben usarse simultáneamente para el mismo servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `winbind use default domain = yes` permite que los usuarios inicien sesión como ...

</div>
<div class="flashcard-back">

**R:** `winbind use default domain = yes` permite que los usuarios inicien sesión como `usuario` en lugar de `DOMINIO\usuario`. `winbind offline logon = yes` permite autenticación con credenciales en caché cuando el DC no está disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: SSSD con `id_provider = ad` es la forma recomendada de integrar Linux con Active...

</div>
<div class="flashcard-back">

**R:** SSSD con `id_provider = ad` es la forma recomendada de integrar Linux con Active Directory. `ldap_id_mapping = true` genera automáticamente UIDs/GIDs a partir del SID de Windows, sin necesidad de extensiones POSIX en AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: El realm Kerberos siempre se escribe en MAYÚSCULAS. `dns_lookup_kdc = true` perm...

</div>
<div class="flashcard-back">

**R:** El realm Kerberos siempre se escribe en MAYÚSCULAS. `dns_lookup_kdc = true` permite descubrir automáticamente los controladores de dominio a través de registros DNS SRV.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: `pam_mkhomedir` y `oddjob-mkhomedir` crean directorios home automáticamente. `od...

</div>
<div class="flashcard-back">

**R:** `pam_mkhomedir` y `oddjob-mkhomedir` crean directorios home automáticamente. `oddjob` es preferido en Red Hat/CentOS porque funciona mejor con SELinux al ejecutar como servicio privilegiado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-007">
<div class="flashcard-front">

**P:** Tip de examen: Para usar grupos AD en sudoers, se prefijan con `%`. Si `use_fully_qualified_nam...

</div>
<div class="flashcard-back">

**R:** Para usar grupos AD en sudoers, se prefijan con `%`. Si `use_fully_qualified_names = true` en SSSD, se debe usar el nombre completo `%grupo@dominio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `auth`?

</div>
<div class="flashcard-back">

**R:** Verifica la identidad del usuario (contraseña)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `account`?

</div>
<div class="flashcard-back">

**R:** Verifica si la cuenta está autorizada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `password`?

</div>
<div class="flashcard-back">

**R:** Gestiona el cambio de contraseña

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-011">
<div class="flashcard-front">

**P:** Que hace el comando `session`?

</div>
<div class="flashcard-back">

**R:** Acciones al inicio/fin de sesión

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-012">
<div class="flashcard-front">

**P:** Que hace el comando `files`?

</div>
<div class="flashcard-back">

**R:** Archivos locales (/etc/passwd, /etc/group)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** En entornos mixtos, los sistemas Linux frecuentemente necesitan autenticar usuarios contra un dominio Active Directory (AD). Las dos soluciones principales son Winbind (parte de Samba) y SSSD (System S

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.1">
</div>

<div class="flashcard" data-id="304.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son Comparativa Winbind vs SSSD?

</div>
<div class="flashcard-back">

**R:** | Característica           | Winbind               | SSSD                    |

</div>
</div>

---

