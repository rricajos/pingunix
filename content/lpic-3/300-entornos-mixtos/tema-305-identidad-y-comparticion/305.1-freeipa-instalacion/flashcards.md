---
title: "305.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.1"
---

# Flashcards: 305.1 - Freeipa Instalacion

> 13 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: FreeIPA combina 389 DS (LDAP), MIT Kerberos (autenticación), Dogtag CA (certific...

</div>
<div class="flashcard-back">

**R:** FreeIPA combina 389 DS (LDAP), MIT Kerberos (autenticación), Dogtag CA (certificados) y BIND (DNS). Conocer estos cuatro componentes principales es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-server-install` es el comando principal para instalar un servidor FreeIPA. ...

</div>
<div class="flashcard-back">

**R:** `ipa-server-install` es el comando principal para instalar un servidor FreeIPA. `--realm` siempre en mayúsculas. `--setup-dns` integra BIND como servidor DNS del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-client-install` configura automáticamente Kerberos, SSSD, PAM y NSS en el c...

</div>
<div class="flashcard-back">

**R:** `ipa-client-install` configura automáticamente Kerberos, SSSD, PAM y NSS en el cliente. `--mkhomedir` activa la creación automática de directorios home.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Desde FreeIPA 4.x, la instalación de réplicas es más sencilla: primero se inscri...

</div>
<div class="flashcard-back">

**R:** Desde FreeIPA 4.x, la instalación de réplicas es más sencilla: primero se inscribe como cliente y luego se promueve con `ipa-replica-install`. Ya no es necesario preparar un archivo de réplica manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: Dogtag CA proporciona la infraestructura PKI. Certmonger se encarga de la renova...

</div>
<div class="flashcard-back">

**R:** Dogtag CA proporciona la infraestructura PKI. Certmonger se encarga de la renovación automática de certificados. `getcert list` muestra los certificados gestionados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `--realm`?

</div>
<div class="flashcard-back">

**R:** Realm Kerberos (MAYÚSCULAS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `--domain`?

</div>
<div class="flashcard-back">

**R:** Dominio DNS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `--ds-password`?

</div>
<div class="flashcard-back">

**R:** Contraseña del Directory Manager (LDAP admin)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `--admin-password`?

</div>
<div class="flashcard-back">

**R:** Contraseña del usuario admin de IPA

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `--hostname`?

</div>
<div class="flashcard-back">

**R:** FQDN del servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** FreeIPA (Identity, Policy, Audit) es una solución integrada de gestión de identidades para entornos Linux/Unix. Proporciona autenticación centralizada, autorización, gestión de certificados y DNS en un

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Componentes de FreeIPA?

</div>
<div class="flashcard-back">

**R:** FreeIPA integra varios componentes de código abierto:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Interfaz web?

</div>
<div class="flashcard-back">

**R:** La interfaz web está disponible en `https://ipa.empresa.local/ipa/ui/`:

</div>
</div>

---

