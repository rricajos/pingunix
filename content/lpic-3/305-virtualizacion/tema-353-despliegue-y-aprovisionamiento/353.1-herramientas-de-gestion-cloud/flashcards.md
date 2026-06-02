---
title: "353.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "353.1"
---

# Flashcards: 353.1 - Herramientas De Gestion Cloud

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando de Terraform muestra una vista previa de los cambios que se aplicarán sin ejecutarlos?

</div>
<div class="flashcard-back">

**R:** c) `terraform plan`. `terraform plan` muestra los cambios que Terraform realizará en la infraestructura sin aplicarlos realmente. Muestra recursos que se crearán (+), modificarán (~) o destruirán (-). Es una buena práctica revisarlo siempre antes de `terraform apply`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué es el archivo `terraform.tfstate`?

</div>
<div class="flashcard-back">

**R:** b) El mapa entre la configuración de Terraform y los recursos reales de infraestructura. El archivo de estado (`terraform.tfstate`) contiene el mapeo entre los recursos definidos en la configuración HCL y los recursos reales creados en la infraestructura. Es crítico para que Terraform sepa qué existe y qué debe cambiar. Puede contener datos sensibles y debe almacenarse de forma segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-003">
<div class="flashcard-front">

**P:** ¿Cuál es la característica principal que distingue a Ansible de otras herramientas de gestión de configuración como Puppet o Chef?

</div>
<div class="flashcard-back">

**R:** b) Ansible es agentless (sin agente), se conecta por SSH. Ansible no requiere instalar agentes en los hosts gestionados. Se conecta por SSH (o WinRM para Windows) y solo necesita Python instalado en los hosts remotos. Puppet y Chef requieren agentes instalados en cada nodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué concepto de Terraform representa un plugin que interactúa con la API de un servicio cloud?

</div>
<div class="flashcard-back">

**R:** c) Provider. Un provider es un plugin que permite a Terraform interactuar con la API de un servicio específico (AWS, Azure, GCP, libvirt, etc.). Se configura con credenciales y región, y proporciona los tipos de recursos disponibles para ese servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando de Ansible ejecuta un playbook en modo de verificación sin aplicar cambios?

</div>
<div class="flashcard-back">

**R:** b) `ansible-playbook site.yml --check`. La opción `--check` (o `-C`) ejecuta el playbook en modo "dry-run", verificando qué cambios se realizarían sin aplicarlos realmente. Se puede combinar con `--diff` para ver las diferencias exactas que se producirían.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué es IaC (Infraestructura como Código)?

</div>
<div class="flashcard-back">

**R:** b) La práctica de gestionar infraestructura mediante archivos de configuración versionables y reproducibles. IaC permite definir la infraestructura en archivos de texto que pueden versionarse con Git, revisarse, reutilizarse y automatizarse. Esto elimina la configuración manual, mejora la reproducibilidad y proporciona documentación viva de la infraestructura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando de Terraform inicializa un directorio de trabajo descargando los providers necesarios?

</div>
<div class="flashcard-back">

**R:** b) `terraform init`. `terraform init` es el primer comando a ejecutar en un directorio de Terraform. Descarga los providers definidos, inicializa el backend de estado y descarga los módulos referenciados. Debe ejecutarse siempre que se cambie la configuración de providers o módulos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el patrón general de los comandos de OpenStack CLI?

</div>
<div class="flashcard-back">

**R:** b) `openstack <recurso> <acción>`. Los comandos de OpenStack CLI siguen el patrón `openstack <recurso> <acción>`, como `openstack server list`, `openstack network create`, `openstack image show`, etc. Es un cliente unificado que reemplazó los clientes individuales (nova, neutron, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué componente de Ansible define la lista de hosts a gestionar?

</div>
<div class="flashcard-back">

**R:** c) Inventory. El inventario (inventory) define los hosts y grupos de hosts que Ansible puede gestionar. Puede ser un archivo INI/YAML estático o generarse dinámicamente (inventario dinámico). El inventario por defecto está en `/etc/ansible/hosts`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué diferencia fundamental hay entre Terraform y Ansible en su uso típico?

</div>
<div class="flashcard-back">

**R:** b) Terraform provisiona infraestructura (crear VMs, redes, etc.); Ansible configura los sistemas ya creados. Terraform es principalmente para provisionar infraestructura (crear y gestionar recursos cloud como VMs, redes, balanceadores). Ansible es principalmente para configurar sistemas (instalar paquetes, copiar archivos, gestionar servicios). Son complementarias: Terraform crea la infraestructura y Ansible la configura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de Terraform importa un recurso de infraestructura existente al archivo de estado?

</div>
<div class="flashcard-back">

**R:** b) `terraform import`. `terraform import aws_instance.web i-1234567890abcdef0` importa un recurso existente en la infraestructura al estado de Terraform. Es necesario definir primero el bloque `resource` en la configuración HCL. Terraform entonces asocia el recurso real con la configuración declarada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué componente de Ansible se ejecuta cuando es notificado por un cambio en una tarea?

</div>
<div class="flashcard-back">

**R:** c) Handler. Un handler es una tarea especial que solo se ejecuta cuando es notificada por otra tarea mediante la directiva `notify`. Se ejecuta una sola vez al final del play, aunque sea notificado múltiples veces. Es comúnmente usado para reiniciar servicios tras cambios de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de Terraform elimina un recurso del archivo de estado sin destruirlo en la infraestructura real?

</div>
<div class="flashcard-back">

**R:** b) `terraform state rm`. `terraform state rm aws_instance.web` elimina un recurso del archivo de estado sin afectar al recurso real en la infraestructura. Después de esto, Terraform ya no gestiona ese recurso. Es útil cuando se quiere dejar de gestionar un recurso con Terraform sin destruirlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué lenguaje utiliza Terraform para definir la infraestructura?

</div>
<div class="flashcard-back">

**R:** c) HCL (HashiCorp Configuration Language). Terraform utiliza HCL (HashiCorp Configuration Language) como lenguaje declarativo para definir infraestructura. HCL es legible, soporta variables, módulos y funciones. Aunque Terraform también acepta JSON como formato alternativo, HCL es el formato recomendado y más utilizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué concepto de Terraform permite reutilizar conjuntos de recursos como bloques de construcción?

</div>
<div class="flashcard-back">

**R:** b) Module. Los módulos de Terraform son contenedores reutilizables de recursos que pueden compartirse y versionarse. Pueden ser módulos locales (subdirectorios) o remotos (Terraform Registry, Git). Se invocan con el bloque `module { source = "..." }` y aceptan variables de entrada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué directiva de un playbook de Ansible permite ejecutar tareas con privilegios de root?

</div>
<div class="flashcard-back">

**R:** b) `become: yes`. `become: yes` en un playbook de Ansible habilita la escalación de privilegios (por defecto usando sudo). Reemplazó a la antigua directiva `sudo: yes`. Se puede personalizar con `become_method` (sudo, su, doas) y `become_user` (usuario al que escalar).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué herramienta de IaC de AWS permite definir infraestructura con templates declarativos nativos?

</div>
<div class="flashcard-back">

**R:** c) CloudFormation. AWS CloudFormation es el servicio nativo de IaC de Amazon Web Services. Permite definir infraestructura AWS en templates declarativos (YAML o JSON). Los recursos se agrupan en "stacks" que se crean, actualizan y eliminan como una unidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué ventaja tiene Pulumi sobre Terraform en cuanto a la definición de infraestructura?

</div>
<div class="flashcard-back">

**R:** b) Permite definir infraestructura usando lenguajes de programación reales como Python, TypeScript o Go. Pulumi permite usar lenguajes de programación completos (Python, TypeScript, Go, C#, Java) en lugar de un DSL específico como HCL. Esto permite usar lógica condicional, bucles, funciones y todo el ecosistema del lenguaje elegido para definir la infraestructura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando de Ansible ejecuta un módulo ad-hoc en todos los hosts del inventario?

</div>
<div class="flashcard-back">

**R:** b) `ansible all -m ping`. `ansible all -m ping` ejecuta el módulo `ping` en todos los hosts del inventario de forma ad-hoc (sin playbook). `all` se refiere a todos los hosts, `-m` especifica el módulo. Los comandos ad-hoc son útiles para tareas rápidas sin necesidad de crear un playbook completo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando de Terraform formatea los archivos de configuración HCL para que sigan el estilo canónico?

</div>
<div class="flashcard-back">

**R:** b) `terraform fmt`. `terraform fmt` reformatea los archivos HCL para que sigan el estilo canónico de HashiCorp (indentación consistente, alineación de `=`, etc.). Es similar a `gofmt` para Go. Se recomienda ejecutarlo antes de commits para mantener un estilo consistente en el equipo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando de Terraform para destruir toda la infraestructura gestionada. <input type="text" class="fill-blank" data-answer="terraform destroy" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** terraform destroy. `terraform destroy` planifica y ejecuta la destrucción de todos los recursos gestionados en el archivo de estado. Solicita confirmación antes de proceder. Se puede añadir `-auto-approve` para omitir la confirmación interactiva. También se puede destruir un recurso específico con `-target`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando de Terraform para listar todos los recursos gestionados en el archivo de estado. <input type="text" class="fill-blank" data-answer="terraform state list" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** terraform state list. `terraform state list` muestra todos los recursos que Terraform está gestionando actualmente, listando sus direcciones (como `aws_instance.web`, `aws_vpc.main`). Es útil para verificar qué recursos están bajo control de Terraform y para operaciones de mantenimiento del estado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando de Ansible para ejecutar el playbook `site.yml` usando el archivo de inventario `inventario.ini`. <input type="text" class="fill-blank" data-answer="ansible-playbook -i inventario.ini site.yml" data-alt="ansible-playbook site.yml -i inventario.ini" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ansible-playbook -i inventario.ini site.yml. `ansible-playbook` ejecuta un playbook de Ansible. `-i` especifica el archivo de inventario con los hosts a gestionar. Si no se especifica `-i`, Ansible usa el inventario por defecto definido en `/etc/ansible/hosts` o en el archivo de configuración `ansible.cfg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando de OpenStack CLI para crear un servidor llamado `mi-servidor` con flavor `m1.small` e imagen `ubuntu-22.04`. <input type="text" class="fill-blank" data-answer="openstack server create --flavor m1.small --image ubuntu-22.04 mi-servidor" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** openstack server create --flavor m1.small --image ubuntu-22.04 mi-servidor. `openstack server create` crea una nueva instancia (servidor virtual) en OpenStack. `--flavor` define el tipo de instancia (CPU, RAM, disco), `--image` la imagen del SO a usar. Se pueden añadir opciones como `--network`, `--key-name` y `--security-group`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de Terraform para validar que la configuración HCL es sintácticamente correcta. <input type="text" class="fill-blank" data-answer="terraform validate" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** terraform validate. `terraform validate` verifica que la configuración es sintácticamente válida y coherente internamente (referencias correctas, tipos de datos válidos, etc.). Requiere que `terraform init` se haya ejecutado previamente. No accede a la API del proveedor ni al estado remoto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El archivo de estado (`terraform.tfstate`) es crítico. Contiene el mapeo entre c...

</div>
<div class="flashcard-back">

**R:** El archivo de estado (`terraform.tfstate`) es crítico. Contiene el mapeo entre configuración y recursos reales. Nunca debe editarse manualmente y debe almacenarse de forma segura (puede contener datos sensibles).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Ansible es agentless (sin agente). Solo necesita SSH y Python en los hosts remot...

</div>
<div class="flashcard-back">

**R:** Ansible es agentless (sin agente). Solo necesita SSH y Python en los hosts remotos. Terraform gestiona infraestructura; Ansible configura los sistemas ya creados. Son complementarias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: OpenStack es relevante para entornos de cloud privado. Los comandos siguen el pa...

</div>
<div class="flashcard-back">

**R:** OpenStack es relevante para entornos de cloud privado. Los comandos siguen el patrón `openstack <recurso> <acción>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-029">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Las herramientas de gestión cloud permiten automatizar la creación, configuración y gestión de infraestructura de forma reproducible y versionable. Este concepto se conoce como Infraestructura como Cód

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son Infraestructura como Código (IaC)?

</div>
<div class="flashcard-back">

**R:** IaC es la práctica de gestionar infraestructura mediante archivos de configuración declarativos o imperativos, en lugar de procesos manuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Terraform?

</div>
<div class="flashcard-back">

**R:** Terraform es la herramienta de IaC más extendida. Permite gestionar infraestructura en múltiples proveedores cloud con un lenguaje declarativo unificado (HCL).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Ansible?

</div>
<div class="flashcard-back">

**R:** Ansible es una herramienta de automatización y gestión de configuración sin agentes que usa SSH para conectarse a los hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son CloudFormation?

</div>
<div class="flashcard-back">

**R:** AWS CloudFormation es el servicio nativo de IaC de Amazon Web Services:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son Pulumi?

</div>
<div class="flashcard-back">

**R:** Pulumi permite definir infraestructura usando lenguajes de programación reales (Python, TypeScript, Go, etc.):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.1">
</div>

<div class="flashcard" data-id="353.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son OpenStack CLI?

</div>
<div class="flashcard-back">

**R:** OpenStack es una plataforma de cloud privado. Su CLI permite gestionar recursos de computación, red y almacenamiento:

</div>
</div>

---

