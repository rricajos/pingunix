---
title: "351.4 - Ejercicios: Libvirt"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "351 - Virtualización Completa"
subtema: "351.4"
peso: 9
tags:
  - lpic-3
  - tema-351
  - ejercicios
  - libvirt
  - virsh
---

# Ejercicios - 351.4 Libvirt

### Pregunta 1
¿Cuál es la diferencia entre `virsh define` y `virsh create`?

a) `define` arranca la VM inmediatamente, `create` solo la registra
b) `define` registra la VM de forma persistente, `create` la arranca como transitoria
c) No hay diferencia, son sinónimos
d) `define` se usa para KVM y `create` para Xen

<details><summary>Respuesta</summary>

**b) `define` registra la VM de forma persistente, `create` la arranca como transitoria**

`virsh define` lee un XML y registra la VM de forma persistente (sobrevive reinicios del host) pero no la arranca. `virsh create` arranca la VM inmediatamente pero es transitoria: desaparece al apagarse.
</details>

### Pregunta 2
¿Qué URI se utiliza para conectar a KVM/QEMU local con privilegios de sistema?

a) `kvm:///local`
b) `qemu:///session`
c) `qemu:///system`
d) `qemu://localhost/system`

<details><summary>Respuesta</summary>

**c) `qemu:///system`**

`qemu:///system` conecta al demonio libvirtd local con privilegios de sistema (root). `qemu:///session` conecta como usuario sin privilegios. La triple barra `///` indica conexión local.
</details>

### Pregunta 3
¿Qué comando muestra los discos asignados a una VM?

a) `virsh disk-list mi-vm`
b) `virsh domblklist mi-vm`
c) `virsh show-disks mi-vm`
d) `virsh vol-list mi-vm`

<details><summary>Respuesta</summary>

**b) `virsh domblklist mi-vm`**

`virsh domblklist` lista los dispositivos de bloque (discos) asignados a un dominio. `virsh vol-list` lista volúmenes de un storage pool, no discos de una VM específica.
</details>

### Pregunta 4
¿Qué opción de `virsh migrate` permite migrar una VM sin almacenamiento compartido?

a) `--live`
b) `--copy-storage-all`
c) `--p2p`
d) `--tunnelled`

<details><summary>Respuesta</summary>

**b) `--copy-storage-all`**

`--copy-storage-all` copia los discos de la VM al host destino durante la migración, eliminando la necesidad de almacenamiento compartido. `--live` mantiene la VM funcionando durante la migración pero requiere almacenamiento compartido por sí solo.
</details>

### Pregunta 5
¿Qué hace `virsh undefine mi-vm` por defecto?

a) Apaga y elimina la VM y sus discos
b) Elimina la definición XML de la VM pero NO borra los discos
c) Solo apaga la VM
d) Elimina la VM, sus discos y sus snapshots

<details><summary>Respuesta</summary>

**b) Elimina la definición XML de la VM pero NO borra los discos**

`virsh undefine` solo elimina la definición (archivo XML) de la VM. Los discos permanecen en el sistema. Para eliminar también los discos se debe usar `virsh undefine mi-vm --remove-all-storage`.
</details>

### Pregunta 6
¿Cuál es el directorio por defecto donde libvirt almacena las imágenes de disco?

a) `/etc/libvirt/images/`
b) `/var/lib/libvirt/images/`
c) `/opt/libvirt/disks/`
d) `/var/lib/qemu/images/`

<details><summary>Respuesta</summary>

**b) `/var/lib/libvirt/images/`**

Este directorio es el storage pool predeterminado (llamado "default") de libvirt. Las definiciones XML de las VMs se almacenan en `/etc/libvirt/qemu/`.
</details>

### Pregunta 7
¿Qué herramienta permite crear una VM de forma automatizada especificando parámetros en la línea de comandos?

a) `virsh create`
b) `virt-manager`
c) `virt-install`
d) `virt-builder`

<details><summary>Respuesta</summary>

**c) `virt-install`**

`virt-install` permite crear VMs de forma automatizada desde la línea de comandos, especificando nombre, RAM, disco, fuente de instalación, red, etc. Es ideal para scripts y aprovisionamiento automatizado.
</details>

### Pregunta 8
¿Qué tipo de red virtual libvirt proporciona acceso a la red externa a través de NAT?

a) Bridge
b) Isolated
c) NAT (forward mode='nat')
d) Macvtap

<details><summary>Respuesta</summary>

**c) NAT (forward mode='nat')**

La red NAT es la red por defecto en libvirt (`default`, usando `virbr0`). Las VMs obtienen IPs privadas y acceden a la red externa a través de NAT. Bridge conecta directamente al bridge del host. Isolated no tiene salida al exterior.
</details>

### Pregunta 9
¿Qué comando crea un snapshot de una VM con nombre y descripción?

a) `virsh snapshot mi-vm --name snap1`
b) `virsh snapshot-create mi-vm snap1`
c) `virsh snapshot-create-as mi-vm --name snap1 --description "descripcion"`
d) `virsh save mi-vm snap1`

<details><summary>Respuesta</summary>

**c) `virsh snapshot-create-as mi-vm --name snap1 --description "descripcion"`**

`snapshot-create-as` permite crear un snapshot especificando nombre y descripción directamente en la línea de comandos. `snapshot-create` acepta un XML. `virsh save` guarda el estado de la VM a un archivo (no es un snapshot).
</details>

### Pregunta 10
¿Qué diferencia hay entre `qemu:///system` y `qemu:///session`?

a) `system` solo funciona localmente, `session` permite conexiones remotas
b) `system` ejecuta VMs como root con acceso a redes bridge, `session` como usuario con red NAT
c) `system` es para producción, `session` es para pruebas
d) No hay diferencia funcional, solo organizativa

<details><summary>Respuesta</summary>

**b) `system` ejecuta VMs como root con acceso a redes bridge, `session` como usuario con red NAT**

`qemu:///system` se conecta al demonio libvirtd que ejecuta como root, permitiendo acceso a redes bridge, storage pools del sistema, etc. `qemu:///session` ejecuta un proceso libvirt como usuario normal, limitado a red NAT (slirp) y almacenamiento en el directorio del usuario.
</details>

### Pregunta 11

¿Qué comando de virsh muestra el XML completo de definición de una VM?

a) `virsh showxml mi-vm`
b) `virsh dumpxml mi-vm`
c) `virsh xml-export mi-vm`
d) `virsh describe mi-vm`

<details><summary>Respuesta</summary>

**b) `virsh dumpxml mi-vm`**

`virsh dumpxml` muestra la definición XML completa de un dominio, incluyendo toda la configuración de hardware virtual, discos, red, dispositivos y parámetros. Es útil para documentar, clonar o depurar la configuración de una VM. `virsh edit` permite editar el XML directamente.
</details>

### Pregunta 12

¿Qué tipo de red virtual libvirt crea una red aislada donde las VMs solo pueden comunicarse entre sí, sin acceso al exterior?

a) NAT
b) Bridge
c) Isolated
d) Macvtap

<details><summary>Respuesta</summary>

**c) Isolated**

Una red isolated (aislada) permite la comunicación entre VMs conectadas a la misma red virtual, pero no proporciona acceso a la red externa ni al host. Es ideal para laboratorios de pruebas y entornos que requieren aislamiento completo de la red de producción.
</details>

### Pregunta 13

¿Qué comando de virsh revierte una VM al estado de un snapshot específico?

a) `virsh snapshot-restore mi-vm snap1`
b) `virsh snapshot-revert mi-vm snap1`
c) `virsh snapshot-apply mi-vm snap1`
d) `virsh snapshot-rollback mi-vm snap1`

<details><summary>Respuesta</summary>

**b) `virsh snapshot-revert mi-vm snap1`**

`virsh snapshot-revert` restaura la VM al estado exacto del snapshot especificado, incluyendo el estado del disco (y opcionalmente la memoria RAM si se capturó). Los cambios realizados después de la creación del snapshot se pierden si no se ha creado otro snapshot.
</details>

### Pregunta 14

¿Qué opción de `virsh migrate` permite que la VM continúe funcionando durante el proceso de migración?

a) `--online`
b) `--live`
c) `--running`
d) `--hot`

<details><summary>Respuesta</summary>

**b) `--live`**

La opción `--live` realiza una migración en vivo: la memoria de la VM se copia iterativamente mientras sigue ejecutándose, con una pausa mínima al final para transferir las últimas páginas modificadas. Sin `--live`, la VM se pausa durante toda la transferencia de memoria.
</details>

### Pregunta 15

¿Qué comando de virsh crea un storage pool de tipo directorio?

a) `virsh pool-create-as mi-pool filesystem --target /ruta`
b) `virsh pool-define-as mi-pool dir --target /var/lib/libvirt/images/mi-pool`
c) `virsh pool-add mi-pool --type dir --path /ruta`
d) `virsh storage-pool create mi-pool dir /ruta`

<details><summary>Respuesta</summary>

**b) `virsh pool-define-as mi-pool dir --target /var/lib/libvirt/images/mi-pool`**

`virsh pool-define-as` define un storage pool de forma persistente. El tipo `dir` indica un pool basado en directorio. Después de definirlo, se debe ejecutar `virsh pool-build` para crear el directorio, `virsh pool-start` para activarlo y `virsh pool-autostart` para habilitarlo en el arranque.
</details>

### Pregunta 16

¿Qué archivo de configuración principal contiene las opciones del demonio libvirtd?

a) `/etc/libvirt/libvirt.conf`
b) `/etc/libvirt/libvirtd.conf`
c) `/etc/libvirt/qemu.conf`
d) `/etc/default/libvirtd`

<details><summary>Respuesta</summary>

**b) `/etc/libvirt/libvirtd.conf`**

`/etc/libvirt/libvirtd.conf` configura el demonio libvirtd: puertos de escucha, autenticación, TLS, logging, límites de conexiones, etc. `/etc/libvirt/qemu.conf` configura opciones específicas del driver QEMU. Los XMLs de los dominios se almacenan en `/etc/libvirt/qemu/`.
</details>

### Pregunta 17

¿Qué comando de virsh habilita el arranque automático de una VM cuando el host se inicia?

a) `virsh enable mi-vm`
b) `virsh autostart mi-vm`
c) `virsh boot-auto mi-vm`
d) `virsh set-autostart mi-vm on`

<details><summary>Respuesta</summary>

**b) `virsh autostart mi-vm`**

`virsh autostart mi-vm` configura la VM para que se inicie automáticamente cuando libvirtd arranca (normalmente durante el boot del host). Para deshabilitarlo se usa `virsh autostart --disable mi-vm`. Solo funciona con VMs definidas de forma persistente (no transitorias).
</details>

### Pregunta 18

¿Qué herramienta de libvirt permite clonar una VM existente incluyendo sus discos?

a) `virsh copy`
b) `virt-clone`
c) `virsh duplicate`
d) `virt-copy`

<details><summary>Respuesta</summary>

**b) `virt-clone`**

`virt-clone` crea una copia completa de una VM existente, generando nuevos UUIDs, direcciones MAC y copiando los discos. La opción `--auto-clone` autodescubre los discos y genera nombres automáticos. La VM original debe estar apagada durante la clonación.
</details>

### Pregunta 19

En el XML de un dominio libvirt, ¿qué modo de CPU pasa las características exactas de la CPU del host a la VM?

a) `<cpu mode='host-model'/>`
b) `<cpu mode='host-passthrough'/>`
c) `<cpu mode='custom'/>`
d) `<cpu mode='native'/>`

<details><summary>Respuesta</summary>

**b) `<cpu mode='host-passthrough'/>`**

`host-passthrough` expone la CPU del host exactamente como es al guest, incluyendo todas las flags. `host-model` crea un modelo de CPU basado en el host pero con mayor compatibilidad para migración. `custom` permite definir un modelo de CPU específico manualmente.
</details>

### Pregunta 20

¿Qué directorio almacena los logs de las VMs QEMU/KVM gestionadas por libvirt?

a) `/var/log/qemu/`
b) `/var/log/libvirt/qemu/`
c) `/var/lib/libvirt/logs/`
d) `/etc/libvirt/logs/`

<details><summary>Respuesta</summary>

**b) `/var/log/libvirt/qemu/`**

Los logs de cada VM QEMU/KVM se almacenan en `/var/log/libvirt/qemu/` con el nombre del dominio (por ejemplo, `mi-vm.log`). Estos logs contienen la línea de comandos QEMU ejecutada, mensajes de error y eventos del ciclo de vida de la VM. Son esenciales para la depuración.
</details>

### Pregunta 21

¿Qué comando de virsh lista todas las VMs definidas, tanto activas como inactivas?

<input type="text" class="fill-blank" data-answer="virsh list --all" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**virsh list --all**

`virsh list` sin opciones solo muestra las VMs activas (en ejecución). La opción `--all` incluye también las VMs definidas pero apagadas (estado "shut off"). Es el comando más utilizado para obtener una visión general de todas las máquinas virtuales del host.
</details>

### Pregunta 22

¿Qué comando de virsh conecta a la consola serial de una VM llamada "mi-vm"?

<input type="text" class="fill-blank" data-answer="virsh console mi-vm" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**virsh console mi-vm**

`virsh console` conecta a la consola serial del dominio especificado, permitiendo interactuar con el sistema operativo del guest como si fuera un terminal serie. Para desconectarse se usa la combinación `Ctrl+]`. El guest debe tener configurada una consola serial (ttyS0).
</details>

### Pregunta 23

¿Qué comando de virsh realiza la migración en vivo de una VM a un host remoto vía SSH?

<input type="text" class="fill-blank" data-answer="virsh migrate --live mi-vm qemu+ssh://host-destino/system" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**virsh migrate --live mi-vm qemu+ssh://host-destino/system**

`virsh migrate --live` ejecuta la migración en vivo, transfiriendo la memoria iterativamente mientras la VM sigue funcionando. La URI `qemu+ssh://host-destino/system` conecta al libvirtd remoto vía SSH. Requiere almacenamiento compartido, misma arquitectura de CPU y libvirtd en ambos hosts.
</details>

### Pregunta 24

¿Qué comando crea un volumen de 20GB en formato qcow2 dentro del storage pool "mi-pool"?

<input type="text" class="fill-blank" data-answer="virsh vol-create-as mi-pool mi-disco.qcow2 20G --format qcow2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**virsh vol-create-as mi-pool mi-disco.qcow2 20G --format qcow2**

`virsh vol-create-as` crea un volumen directamente especificando los parámetros en la línea de comandos. Se indica el nombre del pool, nombre del volumen, tamaño y formato. La alternativa `virsh vol-create` acepta un archivo XML con la definición del volumen.
</details>

### Pregunta 25

¿Qué comando de virsh lista las redes virtuales definidas, incluyendo las inactivas?

<input type="text" class="fill-blank" data-answer="virsh net-list --all" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**virsh net-list --all**

`virsh net-list --all` muestra todas las redes virtuales definidas en libvirt, incluyendo su estado (activa/inactiva) y si tienen autostart habilitado. Sin `--all`, solo muestra las redes activas. La red "default" (NAT con virbr0) viene preconfigurada en la mayoría de instalaciones.
</details>
