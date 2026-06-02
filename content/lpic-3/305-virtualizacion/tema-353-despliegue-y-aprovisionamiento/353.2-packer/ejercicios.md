---
title: "353.2 - Ejercicios: Packer"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "353 - Despliegue y Aprovisionamiento"
subtema: "353.2"
peso: 2
tags:
  - lpic-3
  - tema-353
  - ejercicios
  - packer
---

# Ejercicios - 353.2 Packer

### Pregunta 1
¿Cuáles son los tres componentes principales de un template de Packer?

a) Source, Target, Pipeline
b) Builder, Provisioner, Post-processor
c) Image, Script, Output
d) Provider, Resource, Module

<details><summary>Respuesta</summary>

**b) Builder, Provisioner, Post-processor**

Los tres componentes de un template Packer son: Builder (crea la imagen para una plataforma), Provisioner (configura la imagen durante la construcción) y Post-processor (procesa la imagen resultante, como comprimir o subir).
</details>

### Pregunta 2
¿Qué comando de Packer verifica la sintaxis de un template sin construir la imagen?

a) `packer check .`
b) `packer validate .`
c) `packer verify .`
d) `packer lint .`

<details><summary>Respuesta</summary>

**b) `packer validate .`**

`packer validate` verifica que el template es sintácticamente correcto y que todas las configuraciones requeridas están presentes, sin iniciar ningún proceso de construcción.
</details>

### Pregunta 3
¿Qué formato de template utiliza Packer en versiones modernas (1.7+)?

a) JSON exclusivamente
b) YAML
c) HCL2 (archivos .pkr.hcl)
d) TOML

<details><summary>Respuesta</summary>

**c) HCL2 (archivos .pkr.hcl)**

HCL2 (HashiCorp Configuration Language v2) es el formato recomendado desde Packer 1.7+. Los archivos usan la extensión `.pkr.hcl`. El formato JSON anterior sigue soportado pero se considera legacy.
</details>

### Pregunta 4
¿Qué provisioner de Packer permite subir archivos desde el host a la imagen en construcción?

a) `upload`
b) `copy`
c) `file`
d) `transfer`

<details><summary>Respuesta</summary>

**c) `file`**

El provisioner `file` sube archivos o directorios desde el host a la imagen en construcción. Como las subidas suelen ejecutarse sin privilegios, es común subir a `/tmp/` y luego mover con un provisioner `shell` usando sudo.
</details>

### Pregunta 5
¿Qué opción de `packer build` permite construir solo un source específico de un template multi-plataforma?

a) `packer build --source qemu.ubuntu .`
b) `packer build -only=qemu.ubuntu .`
c) `packer build --target qemu.ubuntu .`
d) `packer build --builder qemu .`

<details><summary>Respuesta</summary>

**b) `packer build -only=qemu.ubuntu .`**

La opción `-only` filtra qué sources se construyen. El formato es `tipo.nombre` (ej. `qemu.ubuntu`). La opción inversa es `-except` para excluir sources específicos.
</details>

### Pregunta 6
¿Cuál es la principal ventaja de usar Packer para crear imágenes?

a) Es más rápido que clonar VMs manualmente
b) Permite crear imágenes idénticas para múltiples plataformas desde un único template
c) Incluye un hipervisor integrado
d) Reemplaza la necesidad de usar Terraform

<details><summary>Respuesta</summary>

**b) Permite crear imágenes idénticas para múltiples plataformas desde un único template**

Packer puede construir imágenes para QEMU, VirtualBox, VMware, AWS, Azure, GCP y más, todo desde un único template. Esto garantiza que las imágenes sean idénticas independientemente de la plataforma de destino.
</details>

### Pregunta 7
¿Qué builder de Packer crea imágenes para QEMU/KVM en formato qcow2?

a) `kvm`
b) `libvirt`
c) `qemu`
d) `qcow2`

<details><summary>Respuesta</summary>

**c) `qemu`**

El builder `qemu` crea imágenes para QEMU/KVM. Puede generar imágenes en formatos qcow2 y raw. Se configura con opciones como `format`, `accelerator`, `disk_size`, `memory`, etc.
</details>

### Pregunta 8
¿Qué post-processor de Packer convierte la imagen resultante en un box de Vagrant?

a) `vagrant-box`
b) `vagrant`
c) `box`
d) `vagrant-export`

<details><summary>Respuesta</summary>

**b) `vagrant`**

El post-processor `vagrant` convierte la imagen resultante en un archivo `.box` compatible con Vagrant. Esto permite usar imágenes creadas con Packer directamente en entornos Vagrant.
</details>

### Pregunta 9
¿En qué bloque HCL2 de Packer se definen los provisioners y post-processors?

a) `source { }`
b) `build { }`
c) `template { }`
d) `config { }`

<details><summary>Respuesta</summary>

**b) `build { }`**

El bloque `build` asocia uno o más `sources` con `provisioners` y `post-processors`. El bloque `source` define el builder y la configuración de la imagen base. El bloque `build` orquesta todo el proceso de construcción.
</details>

### Pregunta 10
¿Qué comando inicializa Packer descargando los plugins necesarios definidos en el template?

a) `packer setup`
b) `packer install`
c) `packer init .`
d) `packer get`

<details><summary>Respuesta</summary>

**c) `packer init .`**

`packer init` lee el bloque `packer { required_plugins { } }` del template y descarga los plugins necesarios. Es similar a `terraform init` en Terraform. Debe ejecutarse antes del primer build o cuando se añaden nuevos plugins.
</details>

### Pregunta 11

¿Qué opción de `packer build` ejecuta la construcción paso a paso, pausando entre cada etapa para depuración?

a) `packer build --step`
b) `packer build -debug`
c) `packer build --pause`
d) `packer build -verbose`

<details><summary>Respuesta</summary>

**b) `packer build -debug`**

`packer build -debug` ejecuta la construcción en modo debug, pausando entre cada paso y mostrando información detallada. En este modo, Packer espera una confirmación del usuario para continuar con cada etapa, permitiendo inspeccionar el estado de la VM durante la construcción.
</details>

### Pregunta 12

¿Qué opción del builder QEMU de Packer especifica que la construcción debe ejecutarse sin interfaz gráfica?

a) `gui = false`
b) `headless = true`
c) `display = none`
d) `no_vnc = true`

<details><summary>Respuesta</summary>

**b) `headless = true`**

La opción `headless = true` en el builder QEMU indica que la VM se ejecutará sin interfaz gráfica durante la construcción. Esto es necesario en servidores sin entorno gráfico y en pipelines de CI/CD. Se puede acceder mediante VNC si se necesita depurar.
</details>

### Pregunta 13

¿Qué provisioner de Packer permite integrar Ansible para configurar la imagen durante la construcción?

a) `ansible-local`
b) `ansible`
c) `ansible-remote`
d) Tanto a) como b) son válidos

<details><summary>Respuesta</summary>

**d) Tanto a) como b) son válidos**

Packer ofrece dos provisioners de Ansible: `ansible` (ejecuta Ansible desde la máquina host conectándose por SSH a la VM en construcción) y `ansible-local` (copia el playbook dentro de la VM y lo ejecuta localmente). El provisioner `ansible` es más común y no requiere Ansible instalado en la imagen.
</details>

### Pregunta 14

¿Qué opción de `packer build` permite excluir un source específico de la construcción?

a) `packer build -skip=qemu.ubuntu .`
b) `packer build -except=qemu.ubuntu .`
c) `packer build -exclude=qemu.ubuntu .`
d) `packer build -without=qemu.ubuntu .`

<details><summary>Respuesta</summary>

**b) `packer build -except=qemu.ubuntu .`**

La opción `-except` excluye sources específicos de la construcción. Es la opción inversa a `-only`. Útil cuando se quiere construir para todas las plataformas excepto una o algunas. Ejemplo: `packer build -except=virtualbox-iso.linux .` construye todo excepto la imagen de VirtualBox.
</details>

### Pregunta 15

¿Qué post-processor de Packer genera un archivo de checksums para verificar la integridad de la imagen construida?

a) `hash`
b) `verify`
c) `checksum`
d) `integrity`

<details><summary>Respuesta</summary>

**c) `checksum`**

El post-processor `checksum` genera archivos de verificación de integridad para las imágenes construidas. Se configura con `checksum_types` para especificar los algoritmos (sha256, md5, sha512). El archivo resultante contiene el hash y puede distribuirse junto con la imagen.
</details>

### Pregunta 16

¿Qué tipo de variable de Packer HCL2 impide que su valor aparezca en los logs de construcción?

a) `private = true`
b) `sensitive = true`
c) `hidden = true`
d) `secret = true`

<details><summary>Respuesta</summary>

**b) `sensitive = true`**

Marcar una variable con `sensitive = true` en HCL2 hace que Packer oculte su valor en los logs de construcción, mostrando `<sensitive>` en su lugar. Es esencial para contraseñas, tokens y otros datos sensibles que se pasan como variables al template.
</details>

### Pregunta 17

¿Cuál es el flujo de trabajo correcto para construir una imagen con Packer?

a) build, validate, init
b) init, validate, build
c) validate, init, build
d) init, build, validate

<details><summary>Respuesta</summary>

**b) init, validate, build**

El flujo correcto es: 1) `packer init .` para descargar plugins, 2) `packer validate .` para verificar la sintaxis, 3) opcionalmente `packer fmt .` para formatear, y 4) `packer build .` para construir la imagen. Este flujo garantiza que todo esté correctamente configurado antes de la construcción.
</details>

### Pregunta 18

¿Qué elemento del builder de Packer define la secuencia de teclas enviadas a la VM para automatizar la instalación del SO?

a) `install_command`
b) `boot_command`
c) `startup_sequence`
d) `preseed_command`

<details><summary>Respuesta</summary>

**b) `boot_command`**

`boot_command` es una lista de cadenas que se envían como pulsaciones de teclas a la VM durante el arranque. Se usa para automatizar la instalación del SO (seleccionar opciones del menú de arranque, pasar parámetros de kernel, etc.). Soporta plantillas como `{{ .HTTPIP }}` y `{{ .HTTPPort }}` para autoinstall.
</details>

### Pregunta 19

¿Por qué es necesario subir archivos a `/tmp/` con el file provisioner en lugar de directamente a rutas del sistema como `/etc/`?

a) `/tmp/` es más rápido para transferencias
b) El file provisioner se ejecuta sin privilegios root, por lo que no puede escribir en rutas protegidas
c) El file provisioner solo soporta la ruta `/tmp/`
d) Es un requisito de seguridad de Packer

<details><summary>Respuesta</summary>

**b) El file provisioner se ejecuta sin privilegios root, por lo que no puede escribir en rutas protegidas**

El file provisioner sube archivos usando la conexión SSH del usuario configurado, que normalmente no tiene privilegios de root. Por eso se suben primero a `/tmp/` (accesible por todos) y luego se mueven a su destino final con un shell provisioner usando `sudo mv`.
</details>

### Pregunta 20

¿Qué builder de Packer crea Amazon Machine Images (AMI) a partir de una instancia EC2?

a) `aws`
b) `amazon-ami`
c) `amazon-ebs`
d) `ec2`

<details><summary>Respuesta</summary>

**c) `amazon-ebs`**

El builder `amazon-ebs` crea AMIs lanzando una instancia EC2, configurándola con provisioners y luego creando una AMI a partir de la instancia. El nombre hace referencia al almacenamiento EBS (Elastic Block Store) que se usa para el volumen raíz de la imagen resultante.
</details>

### Pregunta 21

Escribe el comando para construir una imagen con Packer usando el template en el directorio actual.

<input type="text" class="fill-blank" data-answer="packer build ." data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**packer build .**

`packer build .` lee todos los archivos `.pkr.hcl` del directorio actual y construye las imágenes definidas. Packer ejecuta los builders, provisioners y post-processors en el orden definido. También se puede especificar un archivo específico: `packer build ubuntu.pkr.hcl`.
</details>

### Pregunta 22

Escribe el comando para construir una imagen con Packer pasando la variable `iso_url` con valor `ubuntu.iso`.

<input type="text" class="fill-blank" data-answer="packer build -var \"iso_url=ubuntu.iso\" ." data-alt="packer build -var 'iso_url=ubuntu.iso' ." placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**packer build -var "iso_url=ubuntu.iso" .**

La opción `-var` permite pasar variables al template durante la construcción. Para múltiples variables, se pueden usar varios `-var` o un archivo de variables con `-var-file=variables.pkrvars.hcl`. Las variables definidas en la línea de comandos tienen prioridad sobre las del archivo.
</details>

### Pregunta 23

Escribe el comando para formatear todos los archivos HCL de Packer en el directorio actual.

<input type="text" class="fill-blank" data-answer="packer fmt ." data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**packer fmt .**

`packer fmt .` reformatea los archivos `.pkr.hcl` del directorio actual siguiendo el estilo canónico de HCL. Es similar a `terraform fmt` y se recomienda ejecutarlo antes de commits para mantener un formato consistente. Muestra los archivos que fueron modificados.
</details>

### Pregunta 24

Escribe el comando para inspeccionar un template de Packer y ver sus componentes (sources, variables, builds).

<input type="text" class="fill-blank" data-answer="packer inspect ." data-alt="packer inspect ubuntu.pkr.hcl" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**packer inspect .**

`packer inspect` muestra un resumen del template: las variables definidas con sus valores por defecto, los sources (builders) configurados y los builds definidos. Es útil para documentar y verificar la estructura de un template sin ejecutar la construcción.
</details>

### Pregunta 25

Escribe el comando para validar la sintaxis de un template de Packer llamado `ubuntu.pkr.hcl`.

<input type="text" class="fill-blank" data-answer="packer validate ubuntu.pkr.hcl" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**packer validate ubuntu.pkr.hcl**

`packer validate` verifica que el template es sintácticamente correcto, que todas las variables requeridas están definidas y que las configuraciones de builders, provisioners y post-processors son válidas. No inicia ninguna construcción ni accede a APIs externas.
</details>
