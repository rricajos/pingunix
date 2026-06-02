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

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué lenguaje utiliza el Vagrantfile para definir la configuración?

</div>
<div class="flashcard-back">

**R:** c) Ruby DSL. El Vagrantfile usa Ruby DSL (Domain Specific Language). La configuración se define dentro de un bloque `Vagrant.configure("2") do |config| ... end`. Aunque es Ruby, no se requieren conocimientos profundos del lenguaje para escribir Vagrantfiles básicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando crea e inicia una máquina virtual definida en el Vagrantfile?

</div>
<div class="flashcard-back">

**R:** c) `vagrant up`. `vagrant up` crea la VM (si no existe), la configura y la inicia. Si la VM ya existe pero está detenida, simplemente la inicia. `vagrant init` solo crea el Vagrantfile inicial. `vagrant start` no existe como comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué es un "box" en el contexto de Vagrant?

</div>
<div class="flashcard-back">

**R:** b) Una imagen base preconfigurada que sirve como plantilla para crear VMs. Un box es una imagen de máquina virtual empaquetada que Vagrant usa como base para crear nuevas VMs. Los boxes se descargan de Vagrant Cloud (por ejemplo `ubuntu/jammy64`) y se almacenan localmente en `~/.vagrant.d/boxes/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando ejecuta los provisioners en una VM que ya está en funcionamiento?

</div>
<div class="flashcard-back">

**R:** d) Todas las anteriores son válidas. `vagrant provision` ejecuta los provisioners en una VM en ejecución. `vagrant up --provision` los ejecuta al iniciar. `vagrant reload --provision` reinicia la VM y ejecuta los provisioners. Todos logran ejecutar los provisioners, pero en contextos diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es el provider por defecto de Vagrant?

</div>
<div class="flashcard-back">

**R:** c) VirtualBox. VirtualBox es el provider por defecto de Vagrant. Para usar otros providers como libvirt, se necesita instalar el plugin correspondiente (`vagrant plugin install vagrant-libvirt`) y especificarlo con `vagrant up --provider=libvirt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-006">
<div class="flashcard-front">

**P:** ¿Cómo se define una red privada con IP estática en el Vagrantfile?

</div>
<div class="flashcard-back">

**R:** b) `config.vm.network "private_network", ip: "192.168.56.10"`. `private_network` crea una red host-only donde la VM es accesible desde el host por la IP especificada. `public_network` crea una red bridge. `forwarded_port` redirige puertos específicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-007">
<div class="flashcard-front">

**P:** ¿Cómo se define un entorno multi-máquina en el Vagrantfile?

</div>
<div class="flashcard-back">

**R:** b) Usando `config.vm.define "nombre" do |nombre| ... end`. Cada VM se define con un bloque `config.vm.define` con un nombre único. Esto permite definir múltiples VMs con diferentes configuraciones en un solo Vagrantfile. Los comandos vagrant aceptan el nombre como argumento (ej. `vagrant ssh web`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de Vagrant crea un snapshot de la VM actual?

</div>
<div class="flashcard-back">

**R:** b) `vagrant snapshot save mi-snap`. `vagrant snapshot save` crea un snapshot con nombre. `vagrant snapshot list` los lista, `vagrant snapshot restore` restaura y `vagrant snapshot delete` elimina. También existen `push` y `pop` para gestionar snapshots como una pila.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué tipo de red Vagrant conecta la VM directamente a la red física del host mediante bridge?

</div>
<div class="flashcard-back">

**R:** b) `public_network`. `public_network` crea una interfaz bridge que conecta la VM directamente a la red física, obteniendo una IP de la misma red que el host. Se configura con `config.vm.network "public_network"`, opcionalmente especificando la interfaz de bridge.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es la carpeta compartida por defecto entre el host y la VM en Vagrant?

</div>
<div class="flashcard-back">

**R:** b) El directorio del Vagrantfile se monta en `/vagrant` dentro de la VM. Por defecto, Vagrant comparte el directorio donde se encuentra el Vagrantfile como `/vagrant` dentro de la VM. Esto permite acceder fácilmente a los archivos del proyecto desde la VM. Se puede desactivar con `config.vm.synced_folder ".", "/vagrant", disabled: true`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando muestra el estado de todas las máquinas Vagrant en el sistema, independientemente del directorio actual?

</div>
<div class="flashcard-back">

**R:** b) `vagrant global-status`. `vagrant global-status` muestra el estado de todas las VMs gestionadas por Vagrant en todo el sistema. A diferencia de `vagrant status`, que solo muestra las VMs del directorio actual, `global-status` no depende de la ubicación del Vagrantfile.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué provisioner de Vagrant ejecuta Ansible directamente dentro de la máquina virtual en lugar de desde el host?

</div>
<div class="flashcard-back">

**R:** b) `ansible_local`. El provisioner `ansible_local` instala y ejecuta Ansible dentro de la VM guest, a diferencia de `ansible` que lo ejecuta desde el host. Es útil cuando Ansible no está instalado en el host (por ejemplo, en sistemas Windows).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué tipo de synced folder en Vagrant ofrece mejor rendimiento en sistemas Linux/macOS mediante exportaciones de red?

</div>
<div class="flashcard-back">

**R:** c) NFS. Las carpetas compartidas de tipo NFS (`type: "nfs"`) ofrecen mejor rendimiento que las shared folders nativas de VirtualBox en Linux/macOS. Requieren que el host tenga un servidor NFS instalado y privilegios de root para configurar las exportaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-014">
<div class="flashcard-front">

**P:** En un Vagrantfile multi-máquina, ¿cómo se conecta por SSH específicamente a la VM llamada "db"?

</div>
<div class="flashcard-back">

**R:** b) `vagrant ssh db`. En entornos multi-máquina, los comandos Vagrant aceptan el nombre de la VM como argumento. `vagrant ssh db` conecta a la VM definida con `config.vm.define "db"`. Sin especificar nombre, Vagrant opera sobre la primera VM definida o solicita aclaración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción en el Vagrantfile permite crear linked clones en VirtualBox para ahorrar espacio en disco?

</div>
<div class="flashcard-back">

**R:** b) `vb.linked_clone = true`. `vb.linked_clone = true` dentro del bloque del provider VirtualBox crea clones vinculados en lugar de copias completas del disco. Esto reduce significativamente el espacio en disco y el tiempo de creación de las VMs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando de Vagrant suspende la VM guardando su estado en memoria a disco?

</div>
<div class="flashcard-back">

**R:** c) `vagrant suspend`. `vagrant suspend` guarda el estado completo de la VM en disco (similar a hibernar). `vagrant resume` la reanuda desde ese estado. A diferencia de `vagrant halt` (apagado limpio), `suspend` preserva el estado exacto de la memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué plugin es necesario instalar para utilizar libvirt como provider de Vagrant?

</div>
<div class="flashcard-back">

**R:** b) `vagrant-libvirt`. El plugin `vagrant-libvirt` se instala con `vagrant plugin install vagrant-libvirt` y permite usar QEMU/KVM a través de libvirt como backend de virtualización. Una vez instalado, se usa con `vagrant up --provider=libvirt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué versión de configuración del Vagrantfile es la actual y recomendada?

</div>
<div class="flashcard-back">

**R:** b) `Vagrant.configure("2")`. La versión "2" de la configuración del Vagrantfile es la actual y la utilizada desde Vagrant 1.1+. La versión "1" es obsoleta y ya no se recomienda. El número de versión se pasa como argumento al método `Vagrant.configure`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué opción del Vagrantfile configura una redirección de puertos del puerto 80 del guest al puerto 8080 del host con corrección automática de conflictos?

</div>
<div class="flashcard-back">

**R:** a) `config.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true`. La opción `auto_correct: true` permite que Vagrant elija automáticamente otro puerto del host si el 8080 ya está en uso. Esto evita fallos al iniciar múltiples VMs que redirigen al mismo puerto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué ocurre cuando se ejecuta `vagrant reload --provision` en una VM en ejecución?

</div>
<div class="flashcard-back">

**R:** c) Reinicia la VM y luego ejecuta los provisioners. `vagrant reload --provision` equivale a `vagrant halt` seguido de `vagrant up --provision`. Reinicia la VM aplicando cambios del Vagrantfile (como configuración de red o hardware) y después vuelve a ejecutar los provisioners.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando inicializa un directorio de proyecto Vagrant creando un Vagrantfile con el box `ubuntu/jammy64`?

</div>
<div class="flashcard-back">

**R:** vagrant init ubuntu/jammy64. El comando `vagrant init` crea un nuevo Vagrantfile en el directorio actual. Al especificar un nombre de box como argumento, el Vagrantfile generado ya incluye `config.vm.box = "ubuntu/jammy64"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando destruye una VM de Vagrant sin pedir confirmación?

</div>
<div class="flashcard-back">

**R:** vagrant destroy -f. El flag `-f` o `--force` omite la confirmación interactiva al destruir una VM. Sin este flag, Vagrant solicita confirmación antes de eliminar la máquina virtual y sus discos asociados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando instala un plugin de Vagrant, por ejemplo `vagrant-libvirt`?

</div>
<div class="flashcard-back">

**R:** vagrant plugin install vagrant-libvirt. El comando `vagrant plugin install` descarga e instala plugins desde RubyGems. Los plugins extienden la funcionalidad de Vagrant, como soporte para providers adicionales (libvirt, VMware) o funcionalidades extras.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando lista todas las boxes de Vagrant instaladas localmente?

</div>
<div class="flashcard-back">

**R:** vagrant box list. `vagrant box list` muestra todas las boxes descargadas y almacenadas localmente en `~/.vagrant.d/boxes/`, incluyendo el nombre, la versión y el provider de cada box.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando crea un snapshot llamado "pre-upgrade" de la VM Vagrant actual?

</div>
<div class="flashcard-back">

**R:** vagrant snapshot save pre-upgrade. El comando `vagrant snapshot save` crea un snapshot con nombre de la VM actual. Para restaurarlo se usa `vagrant snapshot restore pre-upgrade` y para eliminarlo `vagrant snapshot delete pre-upgrade`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.4">
</div>

<div class="flashcard" data-id="353.4-fc-026">
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

<div class="flashcard" data-id="353.4-fc-027">
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

<div class="flashcard" data-id="353.4-fc-028">
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

<div class="flashcard" data-id="353.4-fc-029">
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

<div class="flashcard" data-id="353.4-fc-030">
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

<div class="flashcard" data-id="353.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son Vagrant Cloud?

</div>
<div class="flashcard-back">

**R:** Repositorio público de boxes en https://app.vagrantup.com/:

</div>
</div>

---

