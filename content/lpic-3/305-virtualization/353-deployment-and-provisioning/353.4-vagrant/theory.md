---
title: "353.4 - Vagrant"
tipo: teoria
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "353 - Despliegue y Aprovisionamiento"
subtema: "353.4"
peso: 3
tags:
  - lpic-3
  - tema-353
  - vagrant
  - vagrantfile
  - virtualbox
  - provisioners
---

# 353.4 Vagrant

## Introducción

Vagrant es una herramienta de HashiCorp para crear y gestionar entornos de desarrollo reproducibles utilizando máquinas virtuales. Permite definir la configuración completa de una VM en un archivo de texto (Vagrantfile) que puede versionarse y compartirse.

## Conceptos Fundamentales

| Concepto | Descripción |
|---|---|
| **Vagrantfile** | Archivo de configuración en Ruby DSL que define las VMs |
| **Box** | Imagen base preconfigurada (similar a una plantilla de VM) |
| **Provider** | Backend de virtualización (VirtualBox, libvirt, Hyper-V, VMware) |
| **Provisioner** | Herramienta de configuración (Shell, Ansible, Puppet, Chef) |
| **Synced Folder** | Directorio compartido entre host y VM |
| **Vagrant Cloud** | Repositorio público de boxes |

## Vagrantfile

El Vagrantfile usa Ruby DSL para definir la configuración:

### Configuración básica

```ruby
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Box base
  config.vm.box = "ubuntu/jammy64"
  config.vm.box_version = "20230607.0.0"

  # Hostname
  config.vm.hostname = "mi-servidor"

  # Red
  config.vm.network "private_network", ip: "192.168.56.10"
  config.vm.network "forwarded_port", guest: 80, host: 8080

  # Carpetas compartidas
  config.vm.synced_folder "./html", "/var/www/html"

  # Configuración del provider
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
    vb.name = "mi-servidor-vagrant"
  end

  # Provisioning con shell
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y nginx
    systemctl enable nginx
    systemctl start nginx
  SHELL
end
```

### Configuración avanzada

```ruby
Vagrant.configure("2") do |config|
  config.vm.box = "generic/ubuntu2204"

  # Box URL personalizada
  config.vm.box_url = "https://ejemplo.com/boxes/ubuntu.box"

  # Desactivar actualización automática del box
  config.vm.box_check_update = false

  # Configuración SSH
  config.ssh.username = "vagrant"
  config.ssh.private_key_path = "~/.ssh/mi_clave"

  # Tiempo de espera para boot
  config.vm.boot_timeout = 600

  # Desactivar carpeta compartida por defecto
  config.vm.synced_folder ".", "/vagrant", disabled: true

  # Post-up message
  config.vm.post_up_message = "Servidor listo en http://192.168.56.10"
end
```

> **Para el examen:** El Vagrantfile usa la versión de configuración "2" (`Vagrant.configure("2")`). La versión "1" es obsoleta. El archivo debe llamarse `Vagrantfile` (sin extensión).

## Comandos Vagrant

### Ciclo de vida

```bash
# Inicializar directorio con Vagrantfile
vagrant init ubuntu/jammy64

# Crear e iniciar VM
vagrant up

# Iniciar con provider específico
vagrant up --provider=libvirt

# Conectar por SSH
vagrant ssh

# Ver estado de la VM
vagrant status

# Estado de todas las VMs de Vagrant en el sistema
vagrant global-status

# Detener VM (apagado ordenado)
vagrant halt

# Suspender VM (guardar estado en disco)
vagrant suspend

# Reanudar VM suspendida
vagrant resume

# Reiniciar VM (halt + up)
vagrant reload

# Reiniciar con re-provisioning
vagrant reload --provision

# Destruir VM (eliminar completamente)
vagrant destroy

# Destruir sin confirmación
vagrant destroy -f
```

### Provisioning

```bash
# Ejecutar provisioners en una VM ya iniciada
vagrant provision

# Ejecutar solo un provisioner específico
vagrant provision --provision-with shell

# Iniciar VM forzando provisioning
vagrant up --provision
```

### Gestión de Boxes

```bash
# Listar boxes instaladas
vagrant box list

# Añadir un box
vagrant box add ubuntu/jammy64

# Añadir box con URL
vagrant box add mi-box https://ejemplo.com/mi-box.box

# Añadir box con provider específico
vagrant box add generic/ubuntu2204 --provider libvirt

# Eliminar box
vagrant box remove ubuntu/jammy64

# Actualizar box
vagrant box update

# Listar versiones obsoletas
vagrant box prune --dry-run

# Eliminar versiones obsoletas
vagrant box prune
```

### Snapshots

```bash
# Crear snapshot
vagrant snapshot save mi-snapshot

# Listar snapshots
vagrant snapshot list

# Restaurar snapshot
vagrant snapshot restore mi-snapshot

# Eliminar snapshot
vagrant snapshot delete mi-snapshot

# Push/pop (stack de snapshots)
vagrant snapshot push
vagrant snapshot pop
```

## Providers

### VirtualBox (por defecto)

```ruby
config.vm.provider "virtualbox" do |vb|
  vb.memory = "2048"
  vb.cpus = 2
  vb.name = "mi-vm"
  vb.gui = false
  vb.linked_clone = true
  vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
end
```

### Libvirt

```ruby
config.vm.provider "libvirt" do |libvirt|
  libvirt.memory = 2048
  libvirt.cpus = 2
  libvirt.driver = "kvm"
  libvirt.uri = "qemu:///system"
  libvirt.storage_pool_name = "default"
  libvirt.disk_bus = "virtio"
  libvirt.nic_model_type = "virtio"
end
```

### Hyper-V

```ruby
config.vm.provider "hyperv" do |hv|
  hv.memory = 2048
  hv.cpus = 2
  hv.vmname = "mi-vm"
  hv.enable_virtualization_extensions = true
end
```

| Provider | Plataforma | Instalación |
|---|---|---|
| VirtualBox | Windows, Linux, macOS | Incluido |
| Libvirt | Linux | Plugin: `vagrant-libvirt` |
| Hyper-V | Windows | Incluido |
| VMware | Windows, Linux, macOS | Plugin comercial |
| Docker | Windows, Linux, macOS | Plugin |

> **Para el examen:** VirtualBox es el provider por defecto. Para usar libvirt se necesita el plugin `vagrant-libvirt`: `vagrant plugin install vagrant-libvirt`.

## Provisioners

### Shell Provisioner

```ruby
# Inline
config.vm.provision "shell", inline: <<-SHELL
  apt-get update
  apt-get install -y nginx
SHELL

# Script externo
config.vm.provision "shell", path: "scripts/setup.sh"

# Script con argumentos
config.vm.provision "shell", path: "scripts/setup.sh", args: ["produccion", "v2.0"]

# Como usuario privilegiado (por defecto)
config.vm.provision "shell", inline: "apt-get update", privileged: true

# Como usuario vagrant (sin privilegios)
config.vm.provision "shell", inline: "echo $HOME", privileged: false
```

### Ansible Provisioner

```ruby
# Ansible ejecutado desde el host
config.vm.provision "ansible" do |ansible|
  ansible.playbook = "ansible/site.yml"
  ansible.inventory_path = "ansible/inventory"
  ansible.extra_vars = { env: "desarrollo" }
  ansible.verbose = "v"
end

# Ansible ejecutado dentro de la VM
config.vm.provision "ansible_local" do |ansible|
  ansible.playbook = "site.yml"
  ansible.install_mode = "pip"
end
```

### Puppet Provisioner

```ruby
config.vm.provision "puppet" do |puppet|
  puppet.manifests_path = "puppet/manifests"
  puppet.manifest_file = "default.pp"
  puppet.module_path = "puppet/modules"
end
```

### Chef Provisioner

```ruby
config.vm.provision "chef_solo" do |chef|
  chef.cookbooks_path = "cookbooks"
  chef.add_recipe "apache"
  chef.json = { "apache" => { "port" => 8080 } }
end
```

## Entornos Multi-máquina

```ruby
Vagrant.configure("2") do |config|
  # Servidor web
  config.vm.define "web" do |web|
    web.vm.box = "ubuntu/jammy64"
    web.vm.hostname = "web-server"
    web.vm.network "private_network", ip: "192.168.56.10"
    web.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
    web.vm.provision "shell", inline: <<-SHELL
      apt-get update && apt-get install -y nginx
    SHELL
  end

  # Servidor de base de datos
  config.vm.define "db" do |db|
    db.vm.box = "ubuntu/jammy64"
    db.vm.hostname = "db-server"
    db.vm.network "private_network", ip: "192.168.56.11"
    db.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
    end
    db.vm.provision "shell", inline: <<-SHELL
      apt-get update && apt-get install -y postgresql
    SHELL
  end

  # Balanceador de carga
  config.vm.define "lb" do |lb|
    lb.vm.box = "ubuntu/jammy64"
    lb.vm.hostname = "lb-server"
    lb.vm.network "private_network", ip: "192.168.56.12"
    lb.vm.network "forwarded_port", guest: 80, host: 8080
  end
end
```

```bash
# Operaciones en entornos multi-máquina
vagrant up            # Inicia todas las VMs
vagrant up web        # Inicia solo la VM "web"
vagrant ssh db        # SSH a la VM "db"
vagrant halt lb       # Detiene solo "lb"
vagrant destroy web   # Destruye solo "web"
```

> **Para el examen:** En entornos multi-máquina, cada VM se define con `config.vm.define "nombre"`. Los comandos vagrant aceptan el nombre de la VM como argumento para operar sobre una específica.

## Synced Folders (Carpetas Compartidas)

```ruby
# Carpeta compartida por defecto (directorio del Vagrantfile → /vagrant)
# Se puede desactivar:
config.vm.synced_folder ".", "/vagrant", disabled: true

# Carpeta compartida personalizada
config.vm.synced_folder "./src", "/opt/app"

# Con tipo NFS (mejor rendimiento en Linux/macOS)
config.vm.synced_folder "./src", "/opt/app", type: "nfs"

# Con tipo rsync
config.vm.synced_folder "./src", "/opt/app", type: "rsync",
  rsync__exclude: [".git/", "node_modules/"]

# Con propietario y grupo
config.vm.synced_folder "./data", "/data", owner: "www-data", group: "www-data"
```

## Networking

### Forwarded Ports

```ruby
# Redirigir puerto del guest al host
config.vm.network "forwarded_port", guest: 80, host: 8080
config.vm.network "forwarded_port", guest: 443, host: 8443
config.vm.network "forwarded_port", guest: 3306, host: 3306, auto_correct: true
```

### Private Network (Host-Only)

```ruby
# IP estática
config.vm.network "private_network", ip: "192.168.56.10"

# IP por DHCP
config.vm.network "private_network", type: "dhcp"
```

### Public Network (Bridged)

```ruby
# Bridge automático
config.vm.network "public_network"

# Bridge a interfaz específica
config.vm.network "public_network", bridge: "eth0"

# Bridge con IP estática
config.vm.network "public_network", ip: "192.168.1.100", bridge: "eth0"
```

## Vagrant Cloud

Repositorio público de boxes en https://app.vagrantup.com/:

```bash
# Buscar boxes
vagrant cloud search ubuntu

# Las boxes siguen el formato usuario/nombre
# Ejemplos populares:
# ubuntu/jammy64     - Ubuntu 22.04
# generic/ubuntu2204 - Ubuntu 22.04 multi-provider
# centos/stream9     - CentOS Stream 9
# debian/bookworm64  - Debian 12
```

## Resumen

| Concepto | Detalle clave |
|---|---|
| Vagrantfile | Ruby DSL, `Vagrant.configure("2")` |
| `vagrant up` | Crear e iniciar VM |
| `vagrant ssh` | Conectar por SSH |
| `vagrant halt` | Apagar VM |
| `vagrant destroy` | Eliminar VM |
| `vagrant provision` | Re-ejecutar provisioners |
| `vagrant snapshot` | Gestión de snapshots |
| Box | Imagen base (descargada de Vagrant Cloud) |
| Multi-máquina | `config.vm.define "nombre"` |
| Synced folders | Carpetas compartidas host-VM |
| Forwarded ports | Redirección de puertos guest-host |
| Private network | Red solo-host con IP estática/DHCP |
| Public network | Red bridge a la red física |

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **`vagrant halt` vs `vagrant destroy`** — `halt` apaga la VM de forma ordenada pero conserva los discos y la definicion (se puede reiniciar con `vagrant up`). `destroy` elimina completamente la VM y sus discos. El examen puede preguntar como liberar espacio en disco permanentemente (respuesta: `destroy`).
- **`vagrant up` solo ejecuta provisioners la primera vez** — Los provisioners se ejecutan automaticamente en el primer `vagrant up`. En arranques posteriores, `vagrant up` NO re-ejecuta los provisioners. Para forzar la re-ejecucion se usa `vagrant up --provision` o `vagrant provision`. El examen puede preguntar por que un cambio en el provisioner no se aplica.
- **`vagrant suspend` vs `vagrant halt`** — `suspend` guarda el estado completo de la VM en disco (como hibernar), el resume es instantaneo. `halt` apaga la VM (como shutdown), el arranque es completo. `suspend` consume espacio en disco para guardar la RAM. El examen puede preguntar cual es mas rapido al reanudar.
- **VirtualBox es el provider por defecto** — Si no se especifica provider, Vagrant usa VirtualBox. Para usar libvirt se necesita instalar el plugin `vagrant-libvirt` (`vagrant plugin install vagrant-libvirt`) y especificar `--provider=libvirt` o configurarlo en el Vagrantfile. El examen puede preguntar que se necesita para usar KVM con Vagrant.
- **Synced folders: por defecto `.` se monta en `/vagrant`** — El directorio del Vagrantfile se comparte automaticamente como `/vagrant` dentro de la VM. Para desactivarlo: `config.vm.synced_folder ".", "/vagrant", disabled: true`. El examen puede preguntar donde encontrar el Vagrantfile desde dentro de la VM.
- **`private_network` vs `public_network`** — `private_network` crea una red host-only (solo accesible desde el host y otras VMs). `public_network` crea una red bridged donde la VM obtiene una IP en la red fisica real. El examen puede preguntar que tipo de red usar para que la VM sea accesible desde otros equipos de la LAN.
- **`Vagrant.configure("2")` es la version de configuracion, no la version de Vagrant** — El `"2"` se refiere a la version del formato de configuracion, no a la version de Vagrant instalada. La version "1" es obsoleta. El examen puede intentar confundir estos conceptos.
- **`ansible` vs `ansible_local` provisioner** — `ansible` ejecuta Ansible desde el HOST hacia la VM via SSH. `ansible_local` instala y ejecuta Ansible DENTRO de la VM. Si Ansible no esta instalado en el host, se debe usar `ansible_local`. El examen puede preguntar cual usar cuando el host es Windows (respuesta: `ansible_local`, ya que Ansible no corre nativamente en Windows).
- **`vagrant global-status` muestra VMs de todo el sistema** — `vagrant status` muestra solo las VMs del directorio actual. `vagrant global-status` muestra todas las VMs de Vagrant en el sistema, independientemente del directorio. El examen puede preguntar como ver todas las VMs Vagrant activas.
- **Multi-maquina: `config.vm.define` es obligatorio** — En entornos multi-maquina, cada VM se define con `config.vm.define "nombre"`. Sin este bloque, solo se puede tener una VM. Los comandos aceptan el nombre como argumento: `vagrant ssh web`, `vagrant halt db`. El examen puede preguntar como dirigir un comando a una VM especifica.
