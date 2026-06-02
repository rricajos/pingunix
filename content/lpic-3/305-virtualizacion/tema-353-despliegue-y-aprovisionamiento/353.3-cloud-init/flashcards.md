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

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál debe ser la primera línea de un archivo user-data en formato cloud-config?

</div>
<div class="flashcard-back">

**R:** b) `#cloud-config`. La primera línea `#cloud-config` es obligatoria para que cloud-init identifique el formato como cloud-config YAML. Sin esta línea, cloud-init no procesará el archivo correctamente. A pesar de parecer un comentario, es un marcador de formato.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-002">
<div class="flashcard-front">

**P:** ¿Cuáles son las cuatro etapas de ejecución de cloud-init en orden?

</div>
<div class="flashcard-back">

**R:** b) init-local, init, config, final. Las etapas son: 1) `init-local` (detecta datasource local antes de la red), 2) `init` (obtiene metadata, configura red), 3) `config` (ejecuta módulos de configuración como SSH y usuarios), 4) `final` (ejecuta runcmd, instala paquetes, scripts de usuario).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué datasource de cloud-init se utiliza para pruebas locales con QEMU/KVM sin plataforma cloud?

</div>
<div class="flashcard-back">

**R:** c) NoCloud. NoCloud permite usar cloud-init sin plataforma cloud. Se proporcionan user-data y meta-data a través de un ISO con volid `cidata`, un directorio en el filesystem, o una URL especificada en los parámetros del kernel (`ds=nocloud;s=URL`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué volid debe tener el ISO de NoCloud para que cloud-init lo reconozca?

</div>
<div class="flashcard-back">

**R:** c) `cidata`. El ISO debe crearse con volid `cidata`: `genisoimage -output seed.iso -volid cidata -joliet -rock user-data meta-data`. cloud-init busca específicamente este volid para detectar el datasource NoCloud.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué módulo de cloud-config permite ejecutar comandos durante la etapa final del arranque?

</div>
<div class="flashcard-back">

**R:** c) `runcmd`. `runcmd` ejecuta comandos en la etapa final de cloud-init, después de que la red y los paquetes estén configurados. `bootcmd` existe también pero se ejecuta muy temprano en el arranque, en cada boot (no solo el primero).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando verifica el estado de ejecución de cloud-init?

</div>
<div class="flashcard-back">

**R:** b) `cloud-init status`. `cloud-init status` muestra el estado actual: `running`, `done`, o `error`. Con `--long` muestra detalles adicionales. Con `--wait` espera a que cloud-init termine antes de retornar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando permite que cloud-init se vuelva a ejecutar en el próximo arranque?

</div>
<div class="flashcard-back">

**R:** c) `cloud-init clean`. `cloud-init clean` elimina los archivos de estado que cloud-init usa para saber que ya se ejecutó. En el próximo arranque, cloud-init se ejecutará como si fuera la primera vez. `--logs` también limpia los archivos de log.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué módulo de cloud-config permite crear archivos con contenido específico en el sistema de archivos?

</div>
<div class="flashcard-back">

**R:** c) `write_files`. `write_files` permite crear archivos con contenido específico, especificando path, content, owner y permissions. Es útil para crear archivos de configuración durante el primer arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué archivo contiene el log principal con la salida de los scripts ejecutados por cloud-init?

</div>
<div class="flashcard-back">

**R:** b) `/var/log/cloud-init-output.log`. `/var/log/cloud-init-output.log` contiene la salida (stdout/stderr) de los scripts y comandos ejecutados por cloud-init. `/var/log/cloud-init.log` contiene los mensajes internos de cloud-init (debug, info, warning).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué formato de user-data se activa cuando la primera línea contiene un shebang como `#!/bin/bash`?

</div>
<div class="flashcard-back">

**R:** b) Script de shell ejecutable. Cuando cloud-init detecta que el user-data comienza con un shebang (`#!/bin/bash`, `#!/usr/bin/python3`, etc.), lo trata como un script ejecutable y lo ejecuta en la etapa final. Si comienza con `#cloud-config`, lo trata como YAML. También soporta formato MIME multipart para combinar ambos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-011">
<div class="flashcard-front">

**P:** ¿En qué etapa de cloud-init se ejecutan los comandos definidos en la directiva `runcmd` y se instalan los paquetes?

</div>
<div class="flashcard-back">

**R:** d) final. La etapa `final` es la última fase de cloud-init. En ella se ejecutan los scripts de usuario, los comandos definidos en `runcmd` y la instalación de paquetes. La unidad systemd correspondiente es `cloud-final.service`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué formato de user-data permite combinar un cloud-config YAML y un script de shell en un solo archivo?

</div>
<div class="flashcard-back">

**R:** b) MIME Multipart. El formato MIME Multipart permite combinar múltiples tipos de user-data en un solo archivo, usando boundaries para separar las secciones. Cada sección tiene su propio Content-Type (`text/cloud-config` para YAML, `text/x-shellscript` para scripts).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué directiva de cloud-config se utiliza para deshabilitar la autenticación SSH por contraseña?

</div>
<div class="flashcard-back">

**R:** b) `ssh_pwauth: false`. La directiva `ssh_pwauth: false` deshabilita la autenticación SSH por contraseña. Se combina habitualmente con `disable_root: true` y la configuración de claves SSH autorizadas para mayor seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué comando de cloud-init permite consultar el instance-id de la instancia actual?

</div>
<div class="flashcard-back">

**R:** c) `cloud-init query instance_id`. El subcomando `cloud-init query` permite consultar los datos recopilados por cloud-init durante su ejecución, incluyendo instance_id, userdata y los metadatos del datasource (`ds.meta_data`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál es la dirección IP utilizada por AWS para el servicio de metadatos de instancia (IMDS)?

</div>
<div class="flashcard-back">

**R:** c) `169.254.169.254`. La dirección `169.254.169.254` es una dirección link-local reservada que AWS (y otros proveedores cloud como GCE y OpenStack) utilizan para el servicio de metadatos de instancia. Se accede mediante `curl http://169.254.169.254/latest/meta-data/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué datasource de cloud-init se utiliza cuando se desea desactivar completamente cloud-init?

</div>
<div class="flashcard-back">

**R:** c) None. El datasource `None` desactiva cloud-init. También es posible desactivar cloud-init creando el archivo `/etc/cloud/cloud-init.disabled` o pasando `cloud-init=disabled` como parámetro del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-017">
<div class="flashcard-front">

**P:** ¿Qué directiva cloud-config permite especificar la instalación de una versión concreta de un paquete?

</div>
<div class="flashcard-back">

**R:** a) `packages: - [nginx, 1.18.0]`. Para especificar una versión concreta se usa una lista con dos elementos: el nombre del paquete y la versión. Por ejemplo: `- [docker-ce, 24.0.0-1~ubuntu.22.04~jammy]`. El formato exacto de la versión depende del gestor de paquetes del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando de cloud-init permite re-ejecutar un módulo específico como `write_files` con frecuencia `always`?

</div>
<div class="flashcard-back">

**R:** b) `cloud-init single --name write_files --frequency always`. El subcomando `cloud-init single` permite ejecutar un módulo individual fuera del proceso normal de arranque. El parámetro `--frequency always` fuerza su ejecución independientemente de si ya fue ejecutado anteriormente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva de cloud-config define los datos proporcionados por el proveedor cloud (no por el usuario)?

</div>
<div class="flashcard-back">

**R:** c) vendor-data. El vendor-data es proporcionado por el proveedor cloud y se procesa después del user-data. Usa la misma sintaxis cloud-config y permite al proveedor establecer configuraciones predeterminadas como servidores NTP o mirrors de repositorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué parámetro del kernel se utiliza para indicar a cloud-init que use NoCloud como datasource obteniendo los datos desde una URL de red?

</div>
<div class="flashcard-back">

**R:** a) `ds=nocloud;s=http://10.0.0.1:8080/`. Se puede indicar a cloud-init que use NoCloud con datos remotos mediante el parámetro del kernel `ds=nocloud;s=URL` o `ds=nocloud-net;s=URL`. La URL debe servir los archivos `user-data` y `meta-data`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando genera una imagen ISO válida para el datasource NoCloud de cloud-init?

</div>
<div class="flashcard-back">

**R:** genisoimage -output seed.iso -volid cidata -joliet -rock user-data meta-data. El comando `genisoimage` (o `mkisofs`) crea un ISO con los archivos user-data y meta-data. El parámetro `-volid cidata` es obligatorio para que cloud-init reconozca el ISO como datasource NoCloud.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando espera a que cloud-init finalice completamente su ejecución antes de retornar?

</div>
<div class="flashcard-back">

**R:** cloud-init status --wait. El comando `cloud-init status --wait` bloquea la ejecución hasta que cloud-init haya completado todas sus etapas. Es útil en scripts de aprovisionamiento que necesitan garantizar que cloud-init ha terminado antes de ejecutar acciones adicionales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando permite validar la sintaxis de un archivo cloud-config YAML?

</div>
<div class="flashcard-back">

**R:** cloud-init schema --config-file user-data.yaml. El subcomando `cloud-init schema --config-file` valida un archivo cloud-config contra el esquema de cloud-init, detectando errores de sintaxis o directivas no válidas antes de desplegar la instancia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando limpia el estado de cloud-init incluyendo sus archivos de log?

</div>
<div class="flashcard-back">

**R:** cloud-init clean --logs. El comando `cloud-init clean --logs` elimina tanto los archivos de estado como los logs de cloud-init. Sin `--logs`, solo elimina los archivos de estado. En ambos casos, cloud-init se ejecutará como si fuera la primera vez en el próximo arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando muestra un análisis detallado de los tiempos de ejecución de cada módulo de cloud-init, ordenado de mayor a menor tiempo?

</div>
<div class="flashcard-back">

**R:** cloud-init analyze blame. El comando `cloud-init analyze blame` muestra el tiempo consumido por cada módulo de cloud-init, ordenado de mayor a menor duración. Es útil para diagnosticar problemas de rendimiento durante el arranque. `cloud-init analyze show` muestra un desglose cronológico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-026">
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

<div class="flashcard" data-id="353.3-fc-027">
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

<div class="flashcard" data-id="353.3-fc-028">
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

<div class="flashcard" data-id="353.3-fc-029">
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

<div class="flashcard" data-id="353.3-fc-030">
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

<div class="flashcard" data-id="353.3-fc-031">
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

<div class="flashcard" data-id="353.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `#cloud-config`?

</div>
<div class="flashcard-back">

**R:** Primera línea obligatoria del formato cloud-config

</div>
</div>

---

<div class="flashcard-deck" data-subtema="353.3">
</div>

<div class="flashcard" data-id="353.3-fc-033">
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

<div class="flashcard" data-id="353.3-fc-034">
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

<div class="flashcard" data-id="353.3-fc-035">
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

<div class="flashcard" data-id="353.3-fc-036">
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

<div class="flashcard" data-id="353.3-fc-037">
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

<div class="flashcard" data-id="353.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son NoCloud para Pruebas Locales?

</div>
<div class="flashcard-back">

**R:** NoCloud permite usar cloud-init en entornos locales (QEMU/KVM, VirtualBox) sin plataforma cloud:

</div>
</div>

---

