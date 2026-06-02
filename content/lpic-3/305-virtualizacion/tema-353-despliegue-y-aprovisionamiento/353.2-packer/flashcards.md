---
title: "353.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "353.2"
---

# Flashcards: 353.2 - Packer

> 30 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cuáles son los tres componentes principales de un template de Packer?

</div>
<div class="flashcard-back">

**R:** b) Builder, Provisioner, Post-processor. Los tres componentes de un template Packer son: Builder (crea la imagen para una plataforma), Provisioner (configura la imagen durante la construcción) y Post-processor (procesa la imagen resultante, como comprimir o subir).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando de Packer verifica la sintaxis de un template sin construir la imagen?

</div>
<div class="flashcard-back">

**R:** b) `packer validate .`. `packer validate` verifica que el template es sintácticamente correcto y que todas las configuraciones requeridas están presentes, sin iniciar ningún proceso de construcción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué formato de template utiliza Packer en versiones modernas (1.7+)?

</div>
<div class="flashcard-back">

**R:** c) HCL2 (archivos .pkr.hcl). HCL2 (HashiCorp Configuration Language v2) es el formato recomendado desde Packer 1.7+. Los archivos usan la extensión `.pkr.hcl`. El formato JSON anterior sigue soportado pero se considera legacy.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué provisioner de Packer permite subir archivos desde el host a la imagen en construcción?

</div>
<div class="flashcard-back">

**R:** c) `file`. El provisioner `file` sube archivos o directorios desde el host a la imagen en construcción. Como las subidas suelen ejecutarse sin privilegios, es común subir a `/tmp/` y luego mover con un provisioner `shell` usando sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué opción de `packer build` permite construir solo un source específico de un template multi-plataforma?

</div>
<div class="flashcard-back">

**R:** b) `packer build -only=qemu.ubuntu .`. La opción `-only` filtra qué sources se construyen. El formato es `tipo.nombre` (ej. `qemu.ubuntu`). La opción inversa es `-except` para excluir sources específicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es la principal ventaja de usar Packer para crear imágenes?

</div>
<div class="flashcard-back">

**R:** b) Permite crear imágenes idénticas para múltiples plataformas desde un único template. Packer puede construir imágenes para QEMU, VirtualBox, VMware, AWS, Azure, GCP y más, todo desde un único template. Esto garantiza que las imágenes sean idénticas independientemente de la plataforma de destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué builder de Packer crea imágenes para QEMU/KVM en formato qcow2?

</div>
<div class="flashcard-back">

**R:** c) `qemu`. El builder `qemu` crea imágenes para QEMU/KVM. Puede generar imágenes en formatos qcow2 y raw. Se configura con opciones como `format`, `accelerator`, `disk_size`, `memory`, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué post-processor de Packer convierte la imagen resultante en un box de Vagrant?

</div>
<div class="flashcard-back">

**R:** b) `vagrant`. El post-processor `vagrant` convierte la imagen resultante en un archivo `.box` compatible con Vagrant. Esto permite usar imágenes creadas con Packer directamente en entornos Vagrant.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-009">
<div class="flashcard-front">

**P:** ¿En qué bloque HCL2 de Packer se definen los provisioners y post-processors?

</div>
<div class="flashcard-back">

**R:** b) `build { }`. El bloque `build` asocia uno o más `sources` con `provisioners` y `post-processors`. El bloque `source` define el builder y la configuración de la imagen base. El bloque `build` orquesta todo el proceso de construcción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando inicializa Packer descargando los plugins necesarios definidos en el template?

</div>
<div class="flashcard-back">

**R:** c) `packer init .`. `packer init` lee el bloque `packer { required_plugins { } }` del template y descarga los plugins necesarios. Es similar a `terraform init` en Terraform. Debe ejecutarse antes del primer build o cuando se añaden nuevos plugins.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `packer build` ejecuta la construcción paso a paso, pausando entre cada etapa para depuración?

</div>
<div class="flashcard-back">

**R:** b) `packer build -debug`. `packer build -debug` ejecuta la construcción en modo debug, pausando entre cada paso y mostrando información detallada. En este modo, Packer espera una confirmación del usuario para continuar con cada etapa, permitiendo inspeccionar el estado de la VM durante la construcción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué opción del builder QEMU de Packer especifica que la construcción debe ejecutarse sin interfaz gráfica?

</div>
<div class="flashcard-back">

**R:** b) `headless = true`. La opción `headless = true` en el builder QEMU indica que la VM se ejecutará sin interfaz gráfica durante la construcción. Esto es necesario en servidores sin entorno gráfico y en pipelines de CI/CD. Se puede acceder mediante VNC si se necesita depurar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué provisioner de Packer permite integrar Ansible para configurar la imagen durante la construcción?

</div>
<div class="flashcard-back">

**R:** d) Tanto a) como b) son válidos. Packer ofrece dos provisioners de Ansible: `ansible` (ejecuta Ansible desde la máquina host conectándose por SSH a la VM en construcción) y `ansible-local` (copia el playbook dentro de la VM y lo ejecuta localmente). El provisioner `ansible` es más común y no requiere Ansible instalado en la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué opción de `packer build` permite excluir un source específico de la construcción?

</div>
<div class="flashcard-back">

**R:** b) `packer build -except=qemu.ubuntu .`. La opción `-except` excluye sources específicos de la construcción. Es la opción inversa a `-only`. Útil cuando se quiere construir para todas las plataformas excepto una o algunas. Ejemplo: `packer build -except=virtualbox-iso.linux .` construye todo excepto la imagen de VirtualBox.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué post-processor de Packer genera un archivo de checksums para verificar la integridad de la imagen construida?

</div>
<div class="flashcard-back">

**R:** c) `checksum`. El post-processor `checksum` genera archivos de verificación de integridad para las imágenes construidas. Se configura con `checksum_types` para especificar los algoritmos (sha256, md5, sha512). El archivo resultante contiene el hash y puede distribuirse junto con la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué tipo de variable de Packer HCL2 impide que su valor aparezca en los logs de construcción?

</div>
<div class="flashcard-back">

**R:** b) `sensitive = true`. Marcar una variable con `sensitive = true` en HCL2 hace que Packer oculte su valor en los logs de construcción, mostrando `<sensitive>` en su lugar. Es esencial para contraseñas, tokens y otros datos sensibles que se pasan como variables al template.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es el flujo de trabajo correcto para construir una imagen con Packer?

</div>
<div class="flashcard-back">

**R:** b) init, validate, build. El flujo correcto es: 1) `packer init .` para descargar plugins, 2) `packer validate .` para verificar la sintaxis, 3) opcionalmente `packer fmt .` para formatear, y 4) `packer build .` para construir la imagen. Este flujo garantiza que todo esté correctamente configurado antes de la construcción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué elemento del builder de Packer define la secuencia de teclas enviadas a la VM para automatizar la instalación del SO?

</div>
<div class="flashcard-back">

**R:** b) `boot_command`. `boot_command` es una lista de cadenas que se envían como pulsaciones de teclas a la VM durante el arranque. Se usa para automatizar la instalación del SO (seleccionar opciones del menú de arranque, pasar parámetros de kernel, etc.). Soporta plantillas como `{{ .HTTPIP }}` y `{{ .HTTPPort }}` para autoinstall.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-019">
<div class="flashcard-front">

**P:** ¿Por qué es necesario subir archivos a `/tmp/` con el file provisioner en lugar de directamente a rutas del sistema como `/etc/`?

</div>
<div class="flashcard-back">

**R:** b) El file provisioner se ejecuta sin privilegios root, por lo que no puede escribir en rutas protegidas. El file provisioner sube archivos usando la conexión SSH del usuario configurado, que normalmente no tiene privilegios de root. Por eso se suben primero a `/tmp/` (accesible por todos) y luego se mueven a su destino final con un shell provisioner usando `sudo mv`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué builder de Packer crea Amazon Machine Images (AMI) a partir de una instancia EC2?

</div>
<div class="flashcard-back">

**R:** c) `amazon-ebs`. El builder `amazon-ebs` crea AMIs lanzando una instancia EC2, configurándola con provisioners y luego creando una AMI a partir de la instancia. El nombre hace referencia al almacenamiento EBS (Elastic Block Store) que se usa para el volumen raíz de la imagen resultante.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para construir una imagen con Packer usando el template en el directorio actual. <input type="text" class="fill-blank" data-answer="packer build ." data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** packer build .. `packer build .` lee todos los archivos `.pkr.hcl` del directorio actual y construye las imágenes definidas. Packer ejecuta los builders, provisioners y post-processors en el orden definido. También se puede especificar un archivo específico: `packer build ubuntu.pkr.hcl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para construir una imagen con Packer pasando la variable `iso_url` con valor `ubuntu.iso`. <input type="text" class="fill-blank" data-answer="packer build -var \"iso_url=ubuntu.iso\" ." data-alt="packer build -var 'iso_url=ubuntu.iso' ." placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** packer build -var "iso_url=ubuntu.iso" .. La opción `-var` permite pasar variables al template durante la construcción. Para múltiples variables, se pueden usar varios `-var` o un archivo de variables con `-var-file=variables.pkrvars.hcl`. Las variables definidas en la línea de comandos tienen prioridad sobre las del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para formatear todos los archivos HCL de Packer en el directorio actual. <input type="text" class="fill-blank" data-answer="packer fmt ." data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** packer fmt .. `packer fmt .` reformatea los archivos `.pkr.hcl` del directorio actual siguiendo el estilo canónico de HCL. Es similar a `terraform fmt` y se recomienda ejecutarlo antes de commits para mantener un formato consistente. Muestra los archivos que fueron modificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para inspeccionar un template de Packer y ver sus componentes (sources, variables, builds). <input type="text" class="fill-blank" data-answer="packer inspect ." data-alt="packer inspect ubuntu.pkr.hcl" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** packer inspect .. `packer inspect` muestra un resumen del template: las variables definidas con sus valores por defecto, los sources (builders) configurados y los builds definidos. Es útil para documentar y verificar la estructura de un template sin ejecutar la construcción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para validar la sintaxis de un template de Packer llamado `ubuntu.pkr.hcl`. <input type="text" class="fill-blank" data-answer="packer validate ubuntu.pkr.hcl" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** packer validate ubuntu.pkr.hcl. `packer validate` verifica que el template es sintácticamente correcto, que todas las variables requeridas están definidas y que las configuraciones de builders, provisioners y post-processors son válidas. No inicia ninguna construcción ni accede a APIs externas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: HCL2 es el formato actual de Packer (desde v1.7+). El formato JSON antiguo sigue...

</div>
<div class="flashcard-back">

**R:** HCL2 es el formato actual de Packer (desde v1.7+). El formato JSON antiguo sigue siendo soportado pero HCL2 es el recomendado. Los archivos usan la extensión `.pkr.hcl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El file provisioner sube archivos a la imagen durante la construcción. Para move...

</div>
<div class="flashcard-back">

**R:** El file provisioner sube archivos a la imagen durante la construcción. Para moverlos a rutas protegidas (como /etc/), se sube a /tmp/ primero y luego se mueve con un shell provisioner usando sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Packer puede construir imágenes para múltiples plataformas en paralelo desde un ...

</div>
<div class="flashcard-back">

**R:** Packer puede construir imágenes para múltiples plataformas en paralelo desde un único template. Esto garantiza que todas las imágenes sean idénticas independientemente del hipervisor o cloud.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-029">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Packer es una herramienta de HashiCorp para crear imágenes de máquinas idénticas para múltiples plataformas desde una única configuración. Permite automatizar la creación de imágenes para QEMU/KVM, Vir

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.2">
</div>

<div class="flashcard" data-id="353.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son Formato de Template HCL2?

</div>
<div class="flashcard-back">

**R:** Packer usa HCL2 (HashiCorp Configuration Language v2) como formato de template moderno (reemplazó al formato JSON anterior).

</div>
</div>

---

