---
title: "302.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.2"
---

# Flashcards: 302.2 - Resolucion De Nombres Ad

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: DNS no es opcional en AD; es un requisito fundamental. Sin DNS funcional, ningún...

</div>
<div class="flashcard-back">

**R:** DNS no es opcional en AD; es un requisito fundamental. Sin DNS funcional, ningún servicio de Active Directory opera correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Los registros `_ldap._tcp` y `_kerberos._tcp` son los más importantes. Si faltan...

</div>
<div class="flashcard-back">

**R:** Los registros `_ldap._tcp` y `_kerberos._tcp` son los más importantes. Si faltan, los clientes no pueden localizar los DCs y la autenticación falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conocer la configuración del módulo DLZ en named.conf y el keytab necesario para...

</div>
<div class="flashcard-back">

**R:** Conocer la configuración del módulo DLZ en named.conf y el keytab necesario para la autenticación entre BIND y Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `_ldap._tcp.dominio.com`?

</div>
<div class="flashcard-back">

**R:** Localizar servidores LDAP del dominio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `_kerberos._tcp.dominio.com`?

</div>
<div class="flashcard-back">

**R:** Localizar KDC Kerberos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `_kpasswd._tcp.dominio.com`?

</div>
<div class="flashcard-back">

**R:** Servicio de cambio de contraseña Kerberos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-007">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema abarca la configuración y gestión del DNS en un entorno Active Directory con Samba, incluyendo registros SRV, backends DNS, actualizaciones dinámicas, zonas inversas y reenviadores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-008">
<div class="flashcard-front">

**P:** Que es/son DNS en Active Directory?

</div>
<div class="flashcard-back">

**R:** Active Directory depende de DNS para su funcionamiento. A diferencia de los dominios NT4 que usaban NetBIOS/WINS, AD utiliza DNS para:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-009">
<div class="flashcard-front">

**P:** Que es/son Registros SRV en Active Directory?

</div>
<div class="flashcard-back">

**R:** Los registros SRV (Service) son el mecanismo por el cual los clientes localizan servicios en AD:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Zonas inversas?

</div>
<div class="flashcard-back">

**R:** Las zonas inversas (PTR) son importantes para la resolución inversa de IP a nombre:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Reenviadores DNS (Forwarders)?

</div>
<div class="flashcard-back">

**R:** Los reenviadores permiten resolver nombres que no están en las zonas locales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - DNS es obligatorio para Active Directory; sin él nada funciona

</div>
</div>

---

