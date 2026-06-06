---
title: "353.3 - Ejercicios: cloud-init"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "353 - Despliegue y Aprovisionamiento"
subtema: "353.3"
peso: 3
tags:
  - lpic-3
  - tema-353
  - ejercicios
  - cloud-init
---

# Ejercicios - 353.3 cloud-init

### Pregunta 1
¿Cuál debe ser la primera línea de un archivo user-data en formato cloud-config?

a) `---`
b) `#cloud-config`
c) `cloud-config:`
d) `#!/bin/cloud-config`

<details><summary>Respuesta</summary>

**b) `#cloud-config`**

La primera línea `#cloud-config` es obligatoria para que cloud-init identifique el formato como cloud-config YAML. Sin esta línea, cloud-init no procesará el archivo correctamente. A pesar de parecer un comentario, es un marcador de formato.
</details>

### Pregunta 2
¿Cuáles son las cuatro etapas de ejecución de cloud-init en orden?

a) boot, network, config, scripts
b) init-local, init, config, final
c) pre-init, init, post-init, cleanup
d) detect, configure, provision, finalize

<details><summary>Respuesta</summary>

**b) init-local, init, config, final**

Las etapas son: 1) `init-local` (detecta datasource local antes de la red), 2) `init` (obtiene metadata, configura red), 3) `config` (ejecuta módulos de configuración como SSH y usuarios), 4) `final` (ejecuta runcmd, instala paquetes, scripts de usuario).
</details>

### Pregunta 3
¿Qué datasource de cloud-init se utiliza para pruebas locales con QEMU/KVM sin plataforma cloud?

a) Local
b) None
c) NoCloud
d) ConfigDrive

<details><summary>Respuesta</summary>

**c) NoCloud**

NoCloud permite usar cloud-init sin plataforma cloud. Se proporcionan user-data y meta-data a través de un ISO con volid `cidata`, un directorio en el filesystem, o una URL especificada en los parámetros del kernel (`ds=nocloud;s=URL`).
</details>

### Pregunta 4
¿Qué volid debe tener el ISO de NoCloud para que cloud-init lo reconozca?

a) `cloud-init`
b) `nocloud`
c) `cidata`
d) `userdata`

<details><summary>Respuesta</summary>

**c) `cidata`**

El ISO debe crearse con volid `cidata`: `genisoimage -output seed.iso -volid cidata -joliet -rock user-data meta-data`. cloud-init busca específicamente este volid para detectar el datasource NoCloud.
</details>

### Pregunta 5
¿Qué módulo de cloud-config permite ejecutar comandos durante la etapa final del arranque?

a) `commands`
b) `exec`
c) `runcmd`
d) `bootcmd`

<details><summary>Respuesta</summary>

**c) `runcmd`**

`runcmd` ejecuta comandos en la etapa final de cloud-init, después de que la red y los paquetes estén configurados. `bootcmd` existe también pero se ejecuta muy temprano en el arranque, en cada boot (no solo el primero).
</details>

### Pregunta 6
¿Qué comando verifica el estado de ejecución de cloud-init?

a) `systemctl status cloud-init`
b) `cloud-init status`
c) `cloud-init check`
d) `cloud-init info`

<details><summary>Respuesta</summary>

**b) `cloud-init status`**

`cloud-init status` muestra el estado actual: `running`, `done`, o `error`. Con `--long` muestra detalles adicionales. Con `--wait` espera a que cloud-init termine antes de retornar.
</details>

### Pregunta 7
¿Qué comando permite que cloud-init se vuelva a ejecutar en el próximo arranque?

a) `cloud-init reset`
b) `cloud-init restart`
c) `cloud-init clean`
d) `cloud-init rerun`

<details><summary>Respuesta</summary>

**c) `cloud-init clean`**

`cloud-init clean` elimina los archivos de estado que cloud-init usa para saber que ya se ejecutó. En el próximo arranque, cloud-init se ejecutará como si fuera la primera vez. `--logs` también limpia los archivos de log.
</details>

### Pregunta 8
¿Qué módulo de cloud-config permite crear archivos con contenido específico en el sistema de archivos?

a) `create_files`
b) `file_content`
c) `write_files`
d) `copy_files`

<details><summary>Respuesta</summary>

**c) `write_files`**

`write_files` permite crear archivos con contenido específico, especificando path, content, owner y permissions. Es útil para crear archivos de configuración durante el primer arranque.
</details>

### Pregunta 9
¿Qué archivo contiene el log principal con la salida de los scripts ejecutados por cloud-init?

a) `/var/log/cloud-init.log`
b) `/var/log/cloud-init-output.log`
c) `/var/log/syslog`
d) `/var/log/cloud-init/scripts.log`

<details><summary>Respuesta</summary>

**b) `/var/log/cloud-init-output.log`**

`/var/log/cloud-init-output.log` contiene la salida (stdout/stderr) de los scripts y comandos ejecutados por cloud-init. `/var/log/cloud-init.log` contiene los mensajes internos de cloud-init (debug, info, warning).
</details>

### Pregunta 10
¿Qué formato de user-data se activa cuando la primera línea contiene un shebang como `#!/bin/bash`?

a) cloud-config YAML
b) Script de shell ejecutable
c) Formato MIME multipart
d) Formato Jinja template

<details><summary>Respuesta</summary>

**b) Script de shell ejecutable**

Cuando cloud-init detecta que el user-data comienza con un shebang (`#!/bin/bash`, `#!/usr/bin/python3`, etc.), lo trata como un script ejecutable y lo ejecuta en la etapa final. Si comienza con `#cloud-config`, lo trata como YAML. También soporta formato MIME multipart para combinar ambos.
</details>

### Pregunta 11

¿En qué etapa de cloud-init se ejecutan los comandos definidos en la directiva `runcmd` y se instalan los paquetes?

a) init-local
b) init
c) config
d) final

<details><summary>Respuesta</summary>

**d) final**

La etapa `final` es la última fase de cloud-init. En ella se ejecutan los scripts de usuario, los comandos definidos en `runcmd` y la instalación de paquetes. La unidad systemd correspondiente es `cloud-final.service`.
</details>

### Pregunta 12

¿Qué formato de user-data permite combinar un cloud-config YAML y un script de shell en un solo archivo?

a) Jinja template
b) MIME Multipart
c) JSON
d) HCL

<details><summary>Respuesta</summary>

**b) MIME Multipart**

El formato MIME Multipart permite combinar múltiples tipos de user-data en un solo archivo, usando boundaries para separar las secciones. Cada sección tiene su propio Content-Type (`text/cloud-config` para YAML, `text/x-shellscript` para scripts).
</details>

### Pregunta 13

¿Qué directiva de cloud-config se utiliza para deshabilitar la autenticación SSH por contraseña?

a) `disable_ssh: true`
b) `ssh_pwauth: false`
c) `ssh_auth: none`
d) `password_auth: disabled`

<details><summary>Respuesta</summary>

**b) `ssh_pwauth: false`**

La directiva `ssh_pwauth: false` deshabilita la autenticación SSH por contraseña. Se combina habitualmente con `disable_root: true` y la configuración de claves SSH autorizadas para mayor seguridad.
</details>

### Pregunta 14

¿Qué comando de cloud-init permite consultar el instance-id de la instancia actual?

a) `cloud-init info instance_id`
b) `cloud-init get instance_id`
c) `cloud-init query instance_id`
d) `cloud-init show instance_id`

<details><summary>Respuesta</summary>

**c) `cloud-init query instance_id`**

El subcomando `cloud-init query` permite consultar los datos recopilados por cloud-init durante su ejecución, incluyendo instance_id, userdata y los metadatos del datasource (`ds.meta_data`).
</details>

### Pregunta 15

¿Cuál es la dirección IP utilizada por AWS para el servicio de metadatos de instancia (IMDS)?

a) `10.0.0.1`
b) `192.168.1.1`
c) `169.254.169.254`
d) `172.16.0.1`

<details><summary>Respuesta</summary>

**c) `169.254.169.254`**

La dirección `169.254.169.254` es una dirección link-local reservada que AWS (y otros proveedores cloud como GCE y OpenStack) utilizan para el servicio de metadatos de instancia. Se accede mediante `curl http://169.254.169.254/latest/meta-data/`.
</details>

### Pregunta 16

¿Qué datasource de cloud-init se utiliza cuando se desea desactivar completamente cloud-init?

a) NoCloud
b) Disabled
c) None
d) Off

<details><summary>Respuesta</summary>

**c) None**

El datasource `None` desactiva cloud-init. También es posible desactivar cloud-init creando el archivo `/etc/cloud/cloud-init.disabled` o pasando `cloud-init=disabled` como parámetro del kernel.
</details>

### Pregunta 17

¿Qué directiva cloud-config permite especificar la instalación de una versión concreta de un paquete?

a) `packages: - [nginx, 1.18.0]`
b) `packages: - nginx=1.18.0`
c) `packages: - nginx@1.18.0`
d) `packages: - nginx:1.18.0`

<details><summary>Respuesta</summary>

**a) `packages: - [nginx, 1.18.0]`**

Para especificar una versión concreta se usa una lista con dos elementos: el nombre del paquete y la versión. Por ejemplo: `- [docker-ce, 24.0.0-1~ubuntu.22.04~jammy]`. El formato exacto de la versión depende del gestor de paquetes del sistema.
</details>

### Pregunta 18

¿Qué comando de cloud-init permite re-ejecutar un módulo específico como `write_files` con frecuencia `always`?

a) `cloud-init run --module write_files`
b) `cloud-init single --name write_files --frequency always`
c) `cloud-init exec write_files`
d) `cloud-init module write_files --force`

<details><summary>Respuesta</summary>

**b) `cloud-init single --name write_files --frequency always`**

El subcomando `cloud-init single` permite ejecutar un módulo individual fuera del proceso normal de arranque. El parámetro `--frequency always` fuerza su ejecución independientemente de si ya fue ejecutado anteriormente.
</details>

### Pregunta 19

¿Qué directiva de cloud-config define los datos proporcionados por el proveedor cloud (no por el usuario)?

a) user-data
b) meta-data
c) vendor-data
d) provider-data

<details><summary>Respuesta</summary>

**c) vendor-data**

El vendor-data es proporcionado por el proveedor cloud y se procesa después del user-data. Usa la misma sintaxis cloud-config y permite al proveedor establecer configuraciones predeterminadas como servidores NTP o mirrors de repositorios.
</details>

### Pregunta 20

¿Qué parámetro del kernel se utiliza para indicar a cloud-init que use NoCloud como datasource obteniendo los datos desde una URL de red?

a) `ds=nocloud;s=http://10.0.0.1:8080/`
b) `cloud-init.datasource=nocloud`
c) `ci.datasource=network`
d) `nocloud.url=http://10.0.0.1:8080/`

<details><summary>Respuesta</summary>

**a) `ds=nocloud;s=http://10.0.0.1:8080/`**

Se puede indicar a cloud-init que use NoCloud con datos remotos mediante el parámetro del kernel `ds=nocloud;s=URL` o `ds=nocloud-net;s=URL`. La URL debe servir los archivos `user-data` y `meta-data`.
</details>

### Pregunta 21

¿Qué comando genera una imagen ISO válida para el datasource NoCloud de cloud-init?

<input type="text" class="fill-blank" data-answer="genisoimage -output seed.iso -volid cidata -joliet -rock user-data meta-data" data-alt="genisoimage -output seed.iso -volid cidata -joliet -rock seed/user-data seed/meta-data,mkisofs -output seed.iso -volid cidata -joliet -rock user-data meta-data" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**genisoimage -output seed.iso -volid cidata -joliet -rock user-data meta-data**

El comando `genisoimage` (o `mkisofs`) crea un ISO con los archivos user-data y meta-data. El parámetro `-volid cidata` es obligatorio para que cloud-init reconozca el ISO como datasource NoCloud.
</details>

### Pregunta 22

¿Qué comando espera a que cloud-init finalice completamente su ejecución antes de retornar?

<input type="text" class="fill-blank" data-answer="cloud-init status --wait" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cloud-init status --wait**

El comando `cloud-init status --wait` bloquea la ejecución hasta que cloud-init haya completado todas sus etapas. Es útil en scripts de aprovisionamiento que necesitan garantizar que cloud-init ha terminado antes de ejecutar acciones adicionales.
</details>

### Pregunta 23

¿Qué comando permite validar la sintaxis de un archivo cloud-config YAML?

<input type="text" class="fill-blank" data-answer="cloud-init schema --config-file user-data.yaml" data-alt="cloud-init schema --config-file user-data.yml" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cloud-init schema --config-file user-data.yaml**

El subcomando `cloud-init schema --config-file` valida un archivo cloud-config contra el esquema de cloud-init, detectando errores de sintaxis o directivas no válidas antes de desplegar la instancia.
</details>

### Pregunta 24

¿Qué comando limpia el estado de cloud-init incluyendo sus archivos de log?

<input type="text" class="fill-blank" data-answer="cloud-init clean --logs" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cloud-init clean --logs**

El comando `cloud-init clean --logs` elimina tanto los archivos de estado como los logs de cloud-init. Sin `--logs`, solo elimina los archivos de estado. En ambos casos, cloud-init se ejecutará como si fuera la primera vez en el próximo arranque.
</details>

### Pregunta 25

¿Qué comando muestra un análisis detallado de los tiempos de ejecución de cada módulo de cloud-init, ordenado de mayor a menor tiempo?

<input type="text" class="fill-blank" data-answer="cloud-init analyze blame" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cloud-init analyze blame**

El comando `cloud-init analyze blame` muestra el tiempo consumido por cada módulo de cloud-init, ordenado de mayor a menor duración. Es útil para diagnosticar problemas de rendimiento durante el arranque. `cloud-init analyze show` muestra un desglose cronológico.
</details>
