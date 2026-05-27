---
title: "207.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "207.2"
---

# Flashcards: 207.2 - Zonas Dns

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Los nombres que terminan en un punto (`.`) son FQDN (nombres completos). Los que...

</div>
<div class="flashcard-back">

**R:** Los nombres que terminan en un punto (`.`) son FQDN (nombres completos). Los que no terminan en punto se completan con el valor de `$ORIGIN`. Ejemplo: `www` se convierte en `www.ejemplo.com.` si `$ORIGIN` es `ejemplo.com.`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El formato recomendado para el serial es `YYYYMMDDNN` (ano, mes, dia, numero de ...

</div>
<div class="flashcard-back">

**R:** El formato recomendado para el serial es `YYYYMMDDNN` (ano, mes, dia, numero de revision). El serial DEBE incrementarse en cada cambio para que los servidores esclavos detecten la actualizacion. El campo RNAME usa `.` en lugar de `@` para el email.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que un CNAME no puede coexistir con ningun otro tipo de registro para e...

</div>
<div class="flashcard-back">

**R:** Recuerda que un CNAME no puede coexistir con ningun otro tipo de registro para el mismo nombre. No se puede poner un CNAME en el apex (raiz) de la zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Conoce el formato del registro SRV: `_servicio._protocolo` con prioridad, peso, ...

</div>
<div class="flashcard-back">

**R:** Conoce el formato del registro SRV: `_servicio._protocolo` con prioridad, peso, puerto y destino. Es comun en servicios como SIP, LDAP, XMPP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: La zona inversa se escribe con los octetos de la red en orden INVERSO seguidos d...

</div>
<div class="flashcard-back">

**R:** La zona inversa se escribe con los octetos de la red en orden INVERSO seguidos de `.in-addr.arpa`. Para `192.168.1.0/24` la zona es `1.168.192.in-addr.arpa`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: `notify yes` en el maestro envia notificaciones automaticas a los esclavos cuand...

</div>
<div class="flashcard-back">

**R:** `notify yes` en el maestro envia notificaciones automaticas a los esclavos cuando la zona cambia. `allow-transfer` debe restringirse solo a los servidores esclavos por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `$TTL`?

</div>
<div class="flashcard-back">

**R:** TTL por defecto para los registros de la zona

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `$ORIGIN`?

</div>
<div class="flashcard-back">

**R:** Dominio base (se anade a nombres no terminados en punto)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `@`?

</div>
<div class="flashcard-back">

**R:** Sustitucion del valor de `$ORIGIN` (o el nombre de la zona)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Las zonas DNS contienen la informacion real sobre los dominios: que direcciones IP corresponden a que nombres, donde se entregan los correos, cuales son los servidores de nombres autoritativos, etc. Co

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-011">
<div class="flashcard-front">

**P:** Que es/son Formato de un archivo de zona?

</div>
<div class="flashcard-back">

**R:** Un archivo de zona tipico tiene la siguiente estructura:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-012">
<div class="flashcard-front">

**P:** Que es/son Registro SOA (Start of Authority)?

</div>
<div class="flashcard-back">

**R:** El registro SOA es obligatorio en cada archivo de zona y define parametros fundamentales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-013">
<div class="flashcard-front">

**P:** Que es/son Zonas inversas?

</div>
<div class="flashcard-back">

**R:** Las zonas inversas permiten resolver direcciones IP a nombres de host (registros PTR).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-014">
<div class="flashcard-front">

**P:** Que es/son Resolucion de problemas comunes?

</div>
<div class="flashcard-back">

**R:** | Problema | Causa probable | Solucion |

</div>
</div>

---

