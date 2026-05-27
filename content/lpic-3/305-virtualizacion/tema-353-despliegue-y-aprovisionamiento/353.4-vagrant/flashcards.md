---
title: "353.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "353.4"
---

# Flashcards: 353.4 - Vagrant

> 11 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: El Vagrantfile usa la versión de configuración "2" (`Vagrant.configure("2")`). L...

</div>
<div class="flashcard-back">

**R:** El Vagrantfile usa la versión de configuración "2" (`Vagrant.configure("2")`). La versión "1" es obsoleta. El archivo debe llamarse `Vagrantfile` (sin extensión).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: VirtualBox es el provider por defecto. Para usar libvirt se necesita el plugin `...

</div>
<div class="flashcard-back">

**R:** VirtualBox es el provider por defecto. Para usar libvirt se necesita el plugin `vagrant-libvirt`: `vagrant plugin install vagrant-libvirt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: En entornos multi-máquina, cada VM se define con `config.vm.define "nombre"`. Lo...

</div>
<div class="flashcard-back">

**R:** En entornos multi-máquina, cada VM se define con `config.vm.define "nombre"`. Los comandos vagrant aceptan el nombre de la VM como argumento para operar sobre una específica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `vagrant up`?

</div>
<div class="flashcard-back">

**R:** Crear e iniciar VM

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-005">
<div class="flashcard-front">

**P:** Que hace el comando `vagrant ssh`?

</div>
<div class="flashcard-back">

**R:** Conectar por SSH

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `vagrant halt`?

</div>
<div class="flashcard-back">

**R:** Apagar VM

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `vagrant destroy`?

</div>
<div class="flashcard-back">

**R:** Eliminar VM

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `vagrant provision`?

</div>
<div class="flashcard-back">

**R:** Re-ejecutar provisioners

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-009">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Vagrant es una herramienta de HashiCorp para crear y gestionar entornos de desarrollo reproducibles utilizando máquinas virtuales. Permite definir la configuración completa de una VM en un archivo de t

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-010">
<div class="flashcard-front">

**P:** Que es/son Vagrantfile?

</div>
<div class="flashcard-back">

**R:** El Vagrantfile usa Ruby DSL para definir la configuración:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-011">
<div class="flashcard-front">

**P:** Que es/son Vagrant Cloud?

</div>
<div class="flashcard-back">

**R:** Repositorio público de boxes en https://app.vagrantup.com/:

</div>
</div>

---

