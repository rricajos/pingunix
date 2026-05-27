---
title: "301.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.1"
---

# Flashcards: 301.1 - Conceptos Y Arquitectura

> 14 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Es fundamental conocer las diferencias entre SMB1, SMB2 y SMB3. SMB1 es inseguro...

</div>
<div class="flashcard-back">

**R:** Es fundamental conocer las diferencias entre SMB1, SMB2 y SMB3. SMB1 es inseguro y no debe usarse en producción. Samba 4 soporta SMB2 y SMB3.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `smbd` y `nmbd` son necesarios para un servidor de archivos básico,...

</div>
<div class="flashcard-back">

**R:** Recuerda que `smbd` y `nmbd` son necesarios para un servidor de archivos básico, mientras que `winbindd` solo se necesita cuando se integra con un dominio Windows/AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: WINS resuelve nombres NetBIOS, NO nombres DNS. En entornos modernos con AD, DNS ...

</div>
<div class="flashcard-back">

**R:** WINS resuelve nombres NetBIOS, NO nombres DNS. En entornos modernos con AD, DNS ha reemplazado en gran medida a WINS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: Los puertos 137/UDP, 138/UDP, 139/TCP y 445/TCP son los más preguntados. Recuerd...

</div>
<div class="flashcard-back">

**R:** Los puertos 137/UDP, 138/UDP, 139/TCP y 445/TCP son los más preguntados. Recuerda que el puerto 445 permite SMB sin NetBIOS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `smbd`?

</div>
<div class="flashcard-back">

**R:** Servicio de archivos e impresoras, autenticación

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `nmbd`?

</div>
<div class="flashcard-back">

**R:** Resolución de nombres NetBIOS, WINS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `winbindd`?

</div>
<div class="flashcard-back">

**R:** Integración con dominios Windows, mapeo de usuarios

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `<00>`?

</div>
<div class="flashcard-back">

**R:** Único

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `<03>`?

</div>
<div class="flashcard-back">

**R:** Único

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre los fundamentos del protocolo SMB/CIFS, la arquitectura de Samba, los servicios que lo componen y los conceptos de red necesarios para integrar sistemas Linux en entornos Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Samba 4 como controlador de dominio?

</div>
<div class="flashcard-back">

**R:** Cuando Samba 4 actúa como controlador de dominio Active Directory, ejecuta un demonio unificado `samba` que incluye:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Puertos de red utilizados?

</div>
<div class="flashcard-back">

**R:** | Puerto | Protocolo | Servicio |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Diferencias clave entre Samba 3 y Samba 4?

</div>
<div class="flashcard-back">

**R:** | Característica | Samba 3 | Samba 4 |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - SMB/CIFS es el protocolo; Samba es la implementación libre

</div>
</div>

---

