---
title: "353.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "353.3"
---

# Flashcards: 353.3 - Cloud Init

> 12 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Las etapas se ejecutan siempre en orden. `init-local` se ejecuta antes de que la...

</div>
<div class="flashcard-back">

**R:** Las etapas se ejecutan siempre en orden. `init-local` se ejecuta antes de que la red esté disponible. Los scripts de `runcmd` y la instalación de paquetes se ejecutan en la etapa `final`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El formato cloud-config YAML SIEMPRE debe comenzar con `#cloud-config` en la pri...

</div>
<div class="flashcard-back">

**R:** El formato cloud-config YAML SIEMPRE debe comenzar con `#cloud-config` en la primera línea (incluyendo el #). Los scripts deben comenzar con un shebang (`#!/bin/bash`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: NoCloud es el datasource para usar cloud-init localmente. Requiere al menos `met...

</div>
<div class="flashcard-back">

**R:** NoCloud es el datasource para usar cloud-init localmente. Requiere al menos `meta-data` (puede estar vacío) y `user-data`. El volid del ISO debe ser `cidata`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `cloud-final.service`?

</div>
<div class="flashcard-back">

**R:** > **Para el examen:** Las etapas se ejecutan siempre en orden. `init-local` se ejecuta antes de que la red esté disponible. Los scripts de `runcmd` y la instalación de paquetes se ejecutan en la etapa `final`.  ## Formatos de user-data  ### cloud-config YAML  El formato más común. Debe comenzar con `#cloud-config`:  ```yaml #cloud-config hostname: mi-servidor fqdn: mi-servidor.ejemplo.com  # Crear usuarios users:   - name: admin     groups: sudo, docker     shell: /bin/bash     sudo: ALL=(ALL) NOPASSWD:ALL     ssh_authorized_keys:       - ssh-rsa AAAAB3... admin@laptop  # Instalar paquetes package_update: true package_upgrade: true packages:   - nginx   - curl   - git   - htop  # Escribir archivos write_files:   - path: /etc/nginx/conf.d/default.conf     content:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/cloud/cloud.cfg`?

</div>
<div class="flashcard-back">

**R:** Configuración principal de cloud-init

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `/var/lib/cloud/`?

</div>
<div class="flashcard-back">

**R:** Datos de runtime de cloud-init

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-007">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** cloud-init es el estándar de la industria para la inicialización de instancias cloud en el primer arranque. Configura automáticamente hostname, usuarios, SSH keys, paquetes, scripts y más. Es soportado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-008">
<div class="flashcard-front">

**P:** Que es/son Etapas de cloud-init?

</div>
<div class="flashcard-back">

**R:** cloud-init se ejecuta en cuatro etapas durante el arranque:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-009">
<div class="flashcard-front">

**P:** Que es/son meta-data?

</div>
<div class="flashcard-back">

**R:** Información sobre la instancia proporcionada por la plataforma cloud:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-010">
<div class="flashcard-front">

**P:** Que es/son vendor-data?

</div>
<div class="flashcard-back">

**R:** Datos proporcionados por el proveedor cloud (no por el usuario). Se procesan después de user-data pero con la misma sintaxis:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-011">
<div class="flashcard-front">

**P:** Que es/son Datasources?

</div>
<div class="flashcard-back">

**R:** Los datasources son los métodos que cloud-init usa para obtener meta-data y user-data:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-012">
<div class="flashcard-front">

**P:** Que es/son NoCloud para Pruebas Locales?

</div>
<div class="flashcard-back">

**R:** NoCloud permite usar cloud-init en entornos locales (QEMU/KVM, VirtualBox) sin plataforma cloud:

</div>
</div>

---

