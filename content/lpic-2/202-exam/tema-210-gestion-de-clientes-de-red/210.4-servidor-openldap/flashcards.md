---
title: "210.4 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.4"
---

# Flashcards: 210.4 - Servidor Openldap

> 15 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: OLC (cn=config) es el método recomendado y el predeterminado en las distribucion...

</div>
<div class="flashcard-back">

**R:** OLC (cn=config) es el método recomendado y el predeterminado en las distribuciones modernas. La configuración se almacena en `/etc/ldap/slapd.d/`. Los archivos dentro de este directorio NO deben editarse manualmente; se gestionan con ldapmodify.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: `mdb` es el backend recomendado para nuevas instalaciones. `hdb` y `bdb` están o...

</div>
<div class="flashcard-back">

**R:** `mdb` es el backend recomendado para nuevas instalaciones. `hdb` y `bdb` están obsoletos pero pueden aparecer en preguntas sobre sistemas heredados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `slapcat`, `slapadd` y `slapindex` operan directamente sobre la base de datos si...

</div>
<div class="flashcard-back">

**R:** `slapcat`, `slapadd` y `slapindex` operan directamente sobre la base de datos sin pasar por el demonio slapd. Por eso, `slapadd` y `slapindex` requieren que el servidor esté detenido. `slapcat` puede ejecutarse con el servidor en ejecución pero se recomienda detenerlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: SyncRepl es el método de replicación estándar en OpenLDAP. Conocer la diferencia...

</div>
<div class="flashcard-back">

**R:** SyncRepl es el método de replicación estándar en OpenLDAP. Conocer la diferencia entre `refreshOnly` y `refreshAndPersist` es importante: el primero es polling y el segundo es push en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `slapd`?

</div>
<div class="flashcard-back">

**R:** Demonio del servidor LDAP

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `slap*`?

</div>
<div class="flashcard-back">

**R:** Herramientas del lado del servidor (slapcat, slapadd, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `ldap*`?

</div>
<div class="flashcard-back">

**R:** Herramientas del lado del cliente (ldapsearch, ldapadd, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `suffix`?

</div>
<div class="flashcard-back">

**R:** `olcSuffix`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `rootdn`?

</div>
<div class="flashcard-back">

**R:** `olcRootDN`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción a OpenLDAP?

</div>
<div class="flashcard-back">

**R:** OpenLDAP es la implementación de código abierto más utilizada de un servidor LDAP en Linux. El demonio principal es `slapd` (Stand-alone LDAP Daemon).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-011">
<div class="flashcard-front">

**P:** Que es/son Métodos de configuración?

</div>
<div class="flashcard-back">

**R:** OpenLDAP soporta dos métodos de configuración:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-012">
<div class="flashcard-front">

**P:** Que es/son Esquemas (Schemas)?

</div>
<div class="flashcard-back">

**R:** Los esquemas definen los tipos de objetos y atributos disponibles en el directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-013">
<div class="flashcard-front">

**P:** Que es/son Control de acceso (ACLs)?

</div>
<div class="flashcard-back">

**R:** Las ACLs controlan quién puede acceder a qué datos y con qué nivel de permisos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-014">
<div class="flashcard-front">

**P:** Que es/son Overlays?

</div>
<div class="flashcard-back">

**R:** Los overlays son módulos que extienden la funcionalidad de slapd:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.4">
</div>

<div class="flashcard" data-id="210.4-fc-015">
<div class="flashcard-front">

**P:** Que es/son Replicación (SyncRepl)?

</div>
<div class="flashcard-back">

**R:** SyncRepl permite replicar datos entre servidores LDAP. El proveedor (master) envía cambios al consumidor (slave).

</div>
</div>

---

