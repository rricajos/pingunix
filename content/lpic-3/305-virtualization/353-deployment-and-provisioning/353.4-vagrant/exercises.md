---
title: "353.4 - Ejercicios: Vagrant"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "353 - Despliegue y Aprovisionamiento"
subtema: "353.4"
peso: 3
tags:
  - lpic-3
  - tema-353
  - ejercicios
  - vagrant
---

# Ejercicios - 353.4 Vagrant

### Pregunta 1
¿Qué lenguaje utiliza el Vagrantfile para definir la configuración?

a) YAML
b) JSON
c) Ruby DSL
d) HCL

<details><summary>Respuesta</summary>

**c) Ruby DSL**

El Vagrantfile usa Ruby DSL (Domain Specific Language). La configuración se define dentro de un bloque `Vagrant.configure("2") do |config| ... end`. Aunque es Ruby, no se requieren conocimientos profundos del lenguaje para escribir Vagrantfiles básicos.
</details>

### Pregunta 2
¿Qué comando crea e inicia una máquina virtual definida en el Vagrantfile?

a) `vagrant start`
b) `vagrant create`
c) `vagrant up`
d) `vagrant init`

<details><summary>Respuesta</summary>

**c) `vagrant up`**

`vagrant up` crea la VM (si no existe), la configura y la inicia. Si la VM ya existe pero está detenida, simplemente la inicia. `vagrant init` solo crea el Vagrantfile inicial. `vagrant start` no existe como comando.
</details>

### Pregunta 3
¿Qué es un "box" en el contexto de Vagrant?

a) Un contenedor Docker
b) Una imagen base preconfigurada que sirve como plantilla para crear VMs
c) Un directorio de proyecto Vagrant
d) Un plugin de Vagrant

<details><summary>Respuesta</summary>

**b) Una imagen base preconfigurada que sirve como plantilla para crear VMs**

Un box es una imagen de máquina virtual empaquetada que Vagrant usa como base para crear nuevas VMs. Los boxes se descargan de Vagrant Cloud (por ejemplo `ubuntu/jammy64`) y se almacenan localmente en `~/.vagrant.d/boxes/`.
</details>

### Pregunta 4
¿Qué comando ejecuta los provisioners en una VM que ya está en funcionamiento?

a) `vagrant up --provision`
b) `vagrant provision`
c) `vagrant reload --provision`
d) Todas las anteriores son válidas

<details><summary>Respuesta</summary>

**d) Todas las anteriores son válidas**

`vagrant provision` ejecuta los provisioners en una VM en ejecución. `vagrant up --provision` los ejecuta al iniciar. `vagrant reload --provision` reinicia la VM y ejecuta los provisioners. Todos logran ejecutar los provisioners, pero en contextos diferentes.
</details>

### Pregunta 5
¿Cuál es el provider por defecto de Vagrant?

a) Libvirt
b) Docker
c) VirtualBox
d) Hyper-V

<details><summary>Respuesta</summary>

**c) VirtualBox**

VirtualBox es el provider por defecto de Vagrant. Para usar otros providers como libvirt, se necesita instalar el plugin correspondiente (`vagrant plugin install vagrant-libvirt`) y especificarlo con `vagrant up --provider=libvirt`.
</details>

### Pregunta 6
¿Cómo se define una red privada con IP estática en el Vagrantfile?

a) `config.vm.network "host_only", ip: "192.168.56.10"`
b) `config.vm.network "private_network", ip: "192.168.56.10"`
c) `config.vm.ip = "192.168.56.10"`
d) `config.vm.network "static", address: "192.168.56.10"`

<details><summary>Respuesta</summary>

**b) `config.vm.network "private_network", ip: "192.168.56.10"`**

`private_network` crea una red host-only donde la VM es accesible desde el host por la IP especificada. `public_network` crea una red bridge. `forwarded_port` redirige puertos específicos.
</details>

### Pregunta 7
¿Cómo se define un entorno multi-máquina en el Vagrantfile?

a) Creando múltiples Vagrantfiles
b) Usando `config.vm.define "nombre" do |nombre| ... end`
c) Usando `config.vm.multi = true`
d) Usando `config.cluster.add "nombre"`

<details><summary>Respuesta</summary>

**b) Usando `config.vm.define "nombre" do |nombre| ... end`**

Cada VM se define con un bloque `config.vm.define` con un nombre único. Esto permite definir múltiples VMs con diferentes configuraciones en un solo Vagrantfile. Los comandos vagrant aceptan el nombre como argumento (ej. `vagrant ssh web`).
</details>

### Pregunta 8
¿Qué comando de Vagrant crea un snapshot de la VM actual?

a) `vagrant snapshot create mi-snap`
b) `vagrant snapshot save mi-snap`
c) `vagrant save mi-snap`
d) `vagrant checkpoint mi-snap`

<details><summary>Respuesta</summary>

**b) `vagrant snapshot save mi-snap`**

`vagrant snapshot save` crea un snapshot con nombre. `vagrant snapshot list` los lista, `vagrant snapshot restore` restaura y `vagrant snapshot delete` elimina. También existen `push` y `pop` para gestionar snapshots como una pila.
</details>

### Pregunta 9
¿Qué tipo de red Vagrant conecta la VM directamente a la red física del host mediante bridge?

a) `private_network`
b) `public_network`
c) `bridged_network`
d) `forwarded_port`

<details><summary>Respuesta</summary>

**b) `public_network`**

`public_network` crea una interfaz bridge que conecta la VM directamente a la red física, obteniendo una IP de la misma red que el host. Se configura con `config.vm.network "public_network"`, opcionalmente especificando la interfaz de bridge.
</details>

### Pregunta 10
¿Cuál es la carpeta compartida por defecto entre el host y la VM en Vagrant?

a) El directorio home del usuario se monta en `/home/vagrant`
b) El directorio del Vagrantfile se monta en `/vagrant` dentro de la VM
c) No hay carpeta compartida por defecto
d) `/tmp` del host se monta en `/tmp` de la VM

<details><summary>Respuesta</summary>

**b) El directorio del Vagrantfile se monta en `/vagrant` dentro de la VM**

Por defecto, Vagrant comparte el directorio donde se encuentra el Vagrantfile como `/vagrant` dentro de la VM. Esto permite acceder fácilmente a los archivos del proyecto desde la VM. Se puede desactivar con `config.vm.synced_folder ".", "/vagrant", disabled: true`.
</details>

### Pregunta 11

¿Qué comando muestra el estado de todas las máquinas Vagrant en el sistema, independientemente del directorio actual?

a) `vagrant status --all`
b) `vagrant global-status`
c) `vagrant list`
d) `vagrant status --global`

<details><summary>Respuesta</summary>

**b) `vagrant global-status`**

`vagrant global-status` muestra el estado de todas las VMs gestionadas por Vagrant en todo el sistema. A diferencia de `vagrant status`, que solo muestra las VMs del directorio actual, `global-status` no depende de la ubicación del Vagrantfile.
</details>

### Pregunta 12

¿Qué provisioner de Vagrant ejecuta Ansible directamente dentro de la máquina virtual en lugar de desde el host?

a) `ansible`
b) `ansible_local`
c) `ansible_guest`
d) `ansible_remote`

<details><summary>Respuesta</summary>

**b) `ansible_local`**

El provisioner `ansible_local` instala y ejecuta Ansible dentro de la VM guest, a diferencia de `ansible` que lo ejecuta desde el host. Es útil cuando Ansible no está instalado en el host (por ejemplo, en sistemas Windows).
</details>

### Pregunta 13

¿Qué tipo de synced folder en Vagrant ofrece mejor rendimiento en sistemas Linux/macOS mediante exportaciones de red?

a) VirtualBox shared folders
b) rsync
c) NFS
d) SMB

<details><summary>Respuesta</summary>

**c) NFS**

Las carpetas compartidas de tipo NFS (`type: "nfs"`) ofrecen mejor rendimiento que las shared folders nativas de VirtualBox en Linux/macOS. Requieren que el host tenga un servidor NFS instalado y privilegios de root para configurar las exportaciones.
</details>

### Pregunta 14

En un Vagrantfile multi-máquina, ¿cómo se conecta por SSH específicamente a la VM llamada "db"?

a) `vagrant ssh --name db`
b) `vagrant ssh db`
c) `vagrant connect db`
d) `vagrant ssh --machine db`

<details><summary>Respuesta</summary>

**b) `vagrant ssh db`**

En entornos multi-máquina, los comandos Vagrant aceptan el nombre de la VM como argumento. `vagrant ssh db` conecta a la VM definida con `config.vm.define "db"`. Sin especificar nombre, Vagrant opera sobre la primera VM definida o solicita aclaración.
</details>

### Pregunta 15

¿Qué opción en el Vagrantfile permite crear linked clones en VirtualBox para ahorrar espacio en disco?

a) `vb.clone = true`
b) `vb.linked_clone = true`
c) `vb.thin_provision = true`
d) `vb.copy_on_write = true`

<details><summary>Respuesta</summary>

**b) `vb.linked_clone = true`**

`vb.linked_clone = true` dentro del bloque del provider VirtualBox crea clones vinculados en lugar de copias completas del disco. Esto reduce significativamente el espacio en disco y el tiempo de creación de las VMs.
</details>

### Pregunta 16

¿Qué comando de Vagrant suspende la VM guardando su estado en memoria a disco?

a) `vagrant pause`
b) `vagrant save`
c) `vagrant suspend`
d) `vagrant freeze`

<details><summary>Respuesta</summary>

**c) `vagrant suspend`**

`vagrant suspend` guarda el estado completo de la VM en disco (similar a hibernar). `vagrant resume` la reanuda desde ese estado. A diferencia de `vagrant halt` (apagado limpio), `suspend` preserva el estado exacto de la memoria.
</details>

### Pregunta 17

¿Qué plugin es necesario instalar para utilizar libvirt como provider de Vagrant?

a) `vagrant-kvm`
b) `vagrant-libvirt`
c) `vagrant-qemu`
d) `vagrant-virtmanager`

<details><summary>Respuesta</summary>

**b) `vagrant-libvirt`**

El plugin `vagrant-libvirt` se instala con `vagrant plugin install vagrant-libvirt` y permite usar QEMU/KVM a través de libvirt como backend de virtualización. Una vez instalado, se usa con `vagrant up --provider=libvirt`.
</details>

### Pregunta 18

¿Qué versión de configuración del Vagrantfile es la actual y recomendada?

a) `Vagrant.configure("1")`
b) `Vagrant.configure("2")`
c) `Vagrant.configure("3")`
d) `Vagrant.configure("latest")`

<details><summary>Respuesta</summary>

**b) `Vagrant.configure("2")`**

La versión "2" de la configuración del Vagrantfile es la actual y la utilizada desde Vagrant 1.1+. La versión "1" es obsoleta y ya no se recomienda. El número de versión se pasa como argumento al método `Vagrant.configure`.
</details>

### Pregunta 19

¿Qué opción del Vagrantfile configura una redirección de puertos del puerto 80 del guest al puerto 8080 del host con corrección automática de conflictos?

a) `config.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true`
b) `config.vm.network "port_forward", from: 80, to: 8080`
c) `config.vm.forward_port 80, 8080`
d) `config.vm.network "nat", guest: 80, host: 8080`

<details><summary>Respuesta</summary>

**a) `config.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true`**

La opción `auto_correct: true` permite que Vagrant elija automáticamente otro puerto del host si el 8080 ya está en uso. Esto evita fallos al iniciar múltiples VMs que redirigen al mismo puerto.
</details>

### Pregunta 20

¿Qué ocurre cuando se ejecuta `vagrant reload --provision` en una VM en ejecución?

a) Solo ejecuta los provisioners sin reiniciar
b) Destruye la VM y la recrea desde cero
c) Reinicia la VM y luego ejecuta los provisioners
d) Actualiza el box y reinicia la VM

<details><summary>Respuesta</summary>

**c) Reinicia la VM y luego ejecuta los provisioners**

`vagrant reload --provision` equivale a `vagrant halt` seguido de `vagrant up --provision`. Reinicia la VM aplicando cambios del Vagrantfile (como configuración de red o hardware) y después vuelve a ejecutar los provisioners.
</details>

### Pregunta 21

¿Qué comando inicializa un directorio de proyecto Vagrant creando un Vagrantfile con el box `ubuntu/jammy64`?

<input type="text" class="fill-blank" data-answer="vagrant init ubuntu/jammy64" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vagrant init ubuntu/jammy64**

El comando `vagrant init` crea un nuevo Vagrantfile en el directorio actual. Al especificar un nombre de box como argumento, el Vagrantfile generado ya incluye `config.vm.box = "ubuntu/jammy64"`.
</details>

### Pregunta 22

¿Qué comando destruye una VM de Vagrant sin pedir confirmación?

<input type="text" class="fill-blank" data-answer="vagrant destroy -f" data-alt="vagrant destroy --force" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vagrant destroy -f**

El flag `-f` o `--force` omite la confirmación interactiva al destruir una VM. Sin este flag, Vagrant solicita confirmación antes de eliminar la máquina virtual y sus discos asociados.
</details>

### Pregunta 23

¿Qué comando instala un plugin de Vagrant, por ejemplo `vagrant-libvirt`?

<input type="text" class="fill-blank" data-answer="vagrant plugin install vagrant-libvirt" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vagrant plugin install vagrant-libvirt**

El comando `vagrant plugin install` descarga e instala plugins desde RubyGems. Los plugins extienden la funcionalidad de Vagrant, como soporte para providers adicionales (libvirt, VMware) o funcionalidades extras.
</details>

### Pregunta 24

¿Qué comando lista todas las boxes de Vagrant instaladas localmente?

<input type="text" class="fill-blank" data-answer="vagrant box list" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vagrant box list**

`vagrant box list` muestra todas las boxes descargadas y almacenadas localmente en `~/.vagrant.d/boxes/`, incluyendo el nombre, la versión y el provider de cada box.
</details>

### Pregunta 25

¿Qué comando crea un snapshot llamado "pre-upgrade" de la VM Vagrant actual?

<input type="text" class="fill-blank" data-answer="vagrant snapshot save pre-upgrade" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vagrant snapshot save pre-upgrade**

El comando `vagrant snapshot save` crea un snapshot con nombre de la VM actual. Para restaurarlo se usa `vagrant snapshot restore pre-upgrade` y para eliminarlo `vagrant snapshot delete pre-upgrade`.
</details>
