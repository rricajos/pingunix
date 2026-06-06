---
title: "351.2 - Ejercicios: Xen"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "351 - Virtualización Completa"
subtema: "351.2"
peso: 3
tags:
  - lpic-3
  - tema-351
  - ejercicios
  - xen
---

# Ejercicios - 351.2 Xen

### Pregunta 1
¿Qué es Dom0 en la arquitectura Xen?

a) Un dominio guest sin privilegios
b) El hipervisor Xen en sí mismo
c) El dominio privilegiado que gestiona el hardware y los DomU
d) Un dominio especial para almacenamiento

<details><summary>Respuesta</summary>

**c) El dominio privilegiado que gestiona el hardware y los DomU**

Dom0 es el primer dominio que arranca, tiene acceso directo al hardware, ejecuta los drivers y es necesario para gestionar los dominios guest (DomU). Sin Dom0, Xen no puede funcionar.
</details>

### Pregunta 2
¿Qué tipo de guest Xen requiere que el kernel del sistema operativo esté modificado?

a) HVM
b) PVH
c) PV
d) Todos los tipos

<details><summary>Respuesta</summary>

**c) PV**

Los guests PV (Paravirtualizados) requieren un kernel modificado que use hypercalls para comunicarse con el hipervisor. Los HVM usan virtualización completa con hardware assist y no necesitan modificaciones. PVH es un híbrido que tampoco requiere kernel modificado.
</details>

### Pregunta 3
¿Qué comando de xl detiene forzosamente un dominio Xen de forma inmediata?

a) `xl shutdown mi-vm`
b) `xl stop mi-vm`
c) `xl destroy mi-vm`
d) `xl kill mi-vm`

<details><summary>Respuesta</summary>

**c) `xl destroy mi-vm`**

`xl destroy` detiene el dominio inmediatamente (equivalente a desconectar el cable de alimentación). `xl shutdown` envía una señal ACPI para un apagado ordenado. Los comandos `stop` y `kill` no existen en xl.
</details>

### Pregunta 4
En un archivo de configuración xl.cfg, ¿qué valor debe tener el parámetro `builder` para un guest HVM?

a) `"generic"`
b) `"hvm"`
c) `"pvh"`
d) `"full"`

<details><summary>Respuesta</summary>

**b) `"hvm"`**

El parámetro `builder = "hvm"` configura un guest de virtualización completa. `builder = "generic"` se usa para guests PV. Para PVH se usa `type = "pvh"` en versiones recientes.
</details>

### Pregunta 5
¿Qué herramienta proporciona monitorización en tiempo real de los dominios Xen similar a `top`?

a) `xl monitor`
b) `xen-monitor`
c) `xentop`
d) `xl top`

<details><summary>Respuesta</summary>

**c) `xentop`**

`xentop` es una herramienta interactiva que muestra el uso de CPU, memoria, red y disco de todos los dominios Xen en tiempo real. Soporta modo batch con `-b` y personalización del intervalo con `-d`.
</details>

### Pregunta 6
¿Qué es xenstore?

a) Un sistema de archivos para almacenar imágenes de VM
b) Una base de datos jerárquica compartida entre Dom0 y DomU para información de configuración
c) Un repositorio de plantillas de configuración Xen
d) El almacén de snapshots de dominios Xen

<details><summary>Respuesta</summary>

**b) Una base de datos jerárquica compartida entre Dom0 y DomU para información de configuración**

Xenstore permite a Dom0 y los DomU intercambiar información de configuración en tiempo real. Se accede mediante `xenstore-read`, `xenstore-write`, `xenstore-ls` y `xenstore-watch`.
</details>

### Pregunta 7
¿Qué formato de disco en xl.cfg permite usar un volumen LVM como almacenamiento?

a) `file:/dev/vg0/disco,xvda,w`
b) `lvm:/dev/vg0/disco,xvda,w`
c) `phy:/dev/vg0/disco,xvda,w`
d) `block:/dev/vg0/disco,xvda,w`

<details><summary>Respuesta</summary>

**c) `phy:/dev/vg0/disco,xvda,w`**

El prefijo `phy:` se usa para dispositivos de bloques físicos, incluyendo volúmenes LVM. `file:` es para imágenes en archivos regulares. Los prefijos `lvm:` y `block:` no existen en la sintaxis de xl.cfg.
</details>

### Pregunta 8
¿Qué comando realiza la migración en vivo de un dominio Xen a otro host?

a) `xl move mi-vm host-destino`
b) `xl migrate mi-vm host-destino`
c) `xl transfer mi-vm host-destino`
d) `xl live-migrate mi-vm host-destino`

<details><summary>Respuesta</summary>

**b) `xl migrate mi-vm host-destino`**

`xl migrate` realiza la migración en vivo de un dominio a otro host Xen. Requiere almacenamiento compartido (NFS, DRBD, etc.) y conectividad de red entre ambos hosts.
</details>

### Pregunta 9
¿Qué tipo de guest Xen combina extensiones de hardware para CPU con drivers paravirtualizados para E/S?

a) PV
b) HVM
c) PVH
d) PVHVM

<details><summary>Respuesta</summary>

**c) PVH**

PVH (PV in HVM container) es un modo híbrido que usa extensiones de hardware (VT-x) para la virtualización de CPU pero emplea drivers paravirtualizados para E/S, combinando las ventajas de ambos enfoques. Es el modo recomendado en Xen moderno.
</details>

### Pregunta 10
¿Qué herramienta de línea de comandos reemplazó a `xm` en las versiones recientes de Xen?

a) `xen-cli`
b) `xenctl`
c) `xl`
d) `xapi`

<details><summary>Respuesta</summary>

**c) `xl`**

`xl` reemplazó a `xm` como herramienta principal de gestión de dominios Xen. `xm` dependía del demonio `xend` que fue eliminado. `xl` interactúa directamente con el hipervisor a través de `libxl`.
</details>

### Pregunta 11

¿Qué tipo de guest Xen permite ejecutar sistemas operativos Windows sin modificar?

a) PV
b) HVM
c) PVH
d) Todos los tipos

<details><summary>Respuesta</summary>

**b) HVM**

Solo los guests HVM (Hardware Virtual Machine) soportan sistemas operativos sin modificar como Windows, ya que utilizan virtualización completa asistida por hardware (VT-x/AMD-V) y QEMU para emulación de dispositivos. PV requiere kernel modificado y PVH no soporta Windows.
</details>

### Pregunta 12

En la configuración xl.cfg, ¿qué parámetro especifica el kernel del guest en modo PV (paravirtualizado)?

a) `boot = "kernel"`
b) `kernel = "/boot/vmlinuz-guest"`
c) `loader = "/boot/vmlinuz-guest"`
d) `image = "/boot/vmlinuz-guest"`

<details><summary>Respuesta</summary>

**b) `kernel = "/boot/vmlinuz-guest"`**

En guests PV, el parámetro `kernel` especifica la ruta al kernel del guest que será cargado directamente por el hipervisor. Junto con `ramdisk` (initrd) y `extra` (parámetros del kernel como root), define cómo arranca el guest paravirtualizado sin necesidad de un bootloader.
</details>

### Pregunta 13

¿Qué comando de xl conecta a la consola serie de un dominio Xen en ejecución?

a) `xl attach mi-vm`
b) `xl serial mi-vm`
c) `xl console mi-vm`
d) `xl terminal mi-vm`

<details><summary>Respuesta</summary>

**c) `xl console mi-vm`**

`xl console` conecta a la consola serie (serial) del dominio especificado, permitiendo interactuar con el sistema operativo del guest. Es equivalente a una conexión serie física. Para desconectar de la consola se usa la combinación de teclas `Ctrl+]`.
</details>

### Pregunta 14

¿Cuál de las siguientes afirmaciones sobre Dom0 en Xen es correcta?

a) Dom0 es opcional y puede eliminarse después del arranque
b) Dom0 es el primer dominio que arranca y contiene los drivers de hardware
c) Dom0 es un dominio sin privilegios como cualquier DomU
d) Dom0 solo se necesita para guests HVM, no para PV

<details><summary>Respuesta</summary>

**b) Dom0 es el primer dominio que arranca y contiene los drivers de hardware**

Dom0 es el dominio privilegiado esencial en Xen. Arranca primero, tiene acceso directo al hardware, ejecuta los drivers de dispositivos y es necesario para crear y gestionar todos los DomU. Sin Dom0, no se pueden gestionar las máquinas virtuales.
</details>

### Pregunta 15

¿Qué comando de xl muestra la asignación de vCPUs de todos los dominios activos?

a) `xl cpu-list`
b) `xl vcpu-list`
c) `xl show-cpus`
d) `xl sched-info`

<details><summary>Respuesta</summary>

**b) `xl vcpu-list`**

`xl vcpu-list` muestra la lista de vCPUs asignadas a cada dominio, incluyendo su estado (running, blocked), el tiempo de CPU consumido y la CPU física donde están fijadas (pinned). Es útil para verificar la distribución de recursos de CPU entre dominios.
</details>

### Pregunta 16

En la configuración de red xl.cfg, ¿qué parámetro limita el ancho de banda de la interfaz virtual de un DomU?

a) `bandwidth=100Mb/s`
b) `rate=100Mb/s`
c) `limit=100Mb/s`
d) `maxrate=100Mb/s`

<details><summary>Respuesta</summary>

**b) `rate=100Mb/s`**

En la configuración de interfaces virtuales (vif) de xl.cfg, el parámetro `rate` limita el ancho de banda disponible para la interfaz. Ejemplo: `vif = ['bridge=xenbr0,rate=100Mb/s']`. Esto permite controlar la cantidad de tráfico de red que cada DomU puede generar.
</details>

### Pregunta 17

¿Qué backend de almacenamiento en Xen proporciona replicación de bloques en red para alta disponibilidad?

a) NFS
b) LVM
c) DRBD
d) iSCSI

<details><summary>Respuesta</summary>

**c) DRBD**

DRBD (Distributed Replicated Block Device) replica datos a nivel de bloque entre dos servidores en tiempo real, proporcionando alta disponibilidad. En Xen se configura como `disk = ['drbd:recurso,xvda,w']`. Es ideal para escenarios donde se necesita failover automático de almacenamiento.
</details>

### Pregunta 18

¿Qué estado muestra xentop cuando un dominio Xen está ejecutándose activamente?

a) `a` (active)
b) `r` (running)
c) `e` (executing)
d) `s` (started)

<details><summary>Respuesta</summary>

**b) `r` (running)**

En xentop, el estado de los dominios se representa con letras: `r` para running (ejecutándose), `b` para blocked (bloqueado esperando E/S), `p` para paused (pausado), `s` para shutdown, `c` para crashed y `d` para dying.
</details>

### Pregunta 19

¿Qué comando de xl envía una señal ACPI de apagado ordenado a un dominio?

a) `xl destroy mi-vm`
b) `xl poweroff mi-vm`
c) `xl shutdown mi-vm`
d) `xl stop mi-vm`

<details><summary>Respuesta</summary>

**c) `xl shutdown mi-vm`**

`xl shutdown` envía una señal ACPI de apagado al dominio, permitiendo que el sistema operativo guest realice un apagado limpio. `xl destroy` fuerza la terminación inmediata sin dar tiempo al guest a cerrar procesos. `xl stop` y `xl poweroff` no son comandos válidos de xl.
</details>

### Pregunta 20

¿Qué convención de nombres se utiliza para los discos paravirtualizados en Xen?

a) `/dev/sda`, `/dev/sdb`
b) `/dev/vda`, `/dev/vdb`
c) `/dev/xvda`, `/dev/xvdb`
d) `/dev/hda`, `/dev/hdb`

<details><summary>Respuesta</summary>

**c) `/dev/xvda`, `/dev/xvdb`**

Los discos paravirtualizados en Xen usan el prefijo `xvd` (Xen Virtual Disk). `xvda` es el primer disco, `xvdb` el segundo, etc. Los discos emulados en HVM pueden aparecer como `hda`/`sda` dependiendo de la configuración. Los dispositivos `vda` son propios de virtio (KVM/QEMU).
</details>

### Pregunta 21

¿Qué comando crea e inicia un dominio Xen a partir de un archivo de configuración?

<input type="text" class="fill-blank" data-answer="xl create /etc/xen/mi-vm.cfg" data-alt="xl create mi-vm.cfg" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xl create /etc/xen/mi-vm.cfg**

`xl create` lee el archivo de configuración especificado (formato xl.cfg) y crea e inicia el dominio inmediatamente. El archivo define todos los parámetros del guest: nombre, memoria, vCPUs, discos, red y tipo de virtualización (PV, HVM o PVH).
</details>

### Pregunta 22

¿Qué comando lee un valor de la base de datos Xenstore?

<input type="text" class="fill-blank" data-answer="xenstore-read" data-alt="xenstore-read /local/domain/1/name" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xenstore-read**

`xenstore-read` lee un valor almacenado en la base de datos jerárquica Xenstore. Por ejemplo, `xenstore-read /local/domain/1/name` devuelve el nombre del dominio con ID 1. Xenstore es el mecanismo de comunicación entre Dom0 y los DomU para compartir información de configuración.
</details>

### Pregunta 23

¿Qué comando lista el contenido de un directorio en Xenstore?

<input type="text" class="fill-blank" data-answer="xenstore-ls" data-alt="xenstore-ls /local/domain" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xenstore-ls**

`xenstore-ls` muestra el contenido jerárquico de un directorio en Xenstore, listando las claves y valores almacenados. Es útil para depurar la comunicación entre dominios y verificar la configuración de dispositivos virtuales compartidos entre Dom0 y los DomU.
</details>

### Pregunta 24

¿Qué comando ejecuta xentop en modo batch mostrando una sola iteración?

<input type="text" class="fill-blank" data-answer="xentop -b -i 1" data-alt="xentop --batch -i 1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xentop -b -i 1**

`xentop -b` activa el modo batch (no interactivo), útil para scripts y monitorización automatizada. `-i 1` limita la salida a una sola iteración. Se puede cambiar el intervalo de refresco con `-d` (por ejemplo, `-d 5` para cada 5 segundos).
</details>

### Pregunta 25

¿Qué comando realiza la migración en vivo de un dominio Xen llamado "mi-vm" al host "host2"?

<input type="text" class="fill-blank" data-answer="xl migrate mi-vm host2" data-alt="xl migrate mi-vm host-destino" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xl migrate mi-vm host2**

`xl migrate` transfiere un dominio en ejecución de un host Xen a otro sin interrupción del servicio (migración en vivo). Requiere almacenamiento compartido entre ambos hosts (NFS, DRBD, etc.), conectividad de red y que ambos hosts ejecuten versiones compatibles de Xen.
</details>
