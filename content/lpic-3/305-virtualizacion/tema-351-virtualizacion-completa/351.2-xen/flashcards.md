---
title: "351.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.2"
---

# Flashcards: 351.2 - Xen

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué es Dom0 en la arquitectura Xen?

</div>
<div class="flashcard-back">

**R:** c) El dominio privilegiado que gestiona el hardware y los DomU. Dom0 es el primer dominio que arranca, tiene acceso directo al hardware, ejecuta los drivers y es necesario para gestionar los dominios guest (DomU). Sin Dom0, Xen no puede funcionar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué tipo de guest Xen requiere que el kernel del sistema operativo esté modificado?

</div>
<div class="flashcard-back">

**R:** c) PV. Los guests PV (Paravirtualizados) requieren un kernel modificado que use hypercalls para comunicarse con el hipervisor. Los HVM usan virtualización completa con hardware assist y no necesitan modificaciones. PVH es un híbrido que tampoco requiere kernel modificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando de xl detiene forzosamente un dominio Xen de forma inmediata?

</div>
<div class="flashcard-back">

**R:** c) `xl destroy mi-vm`. `xl destroy` detiene el dominio inmediatamente (equivalente a desconectar el cable de alimentación). `xl shutdown` envía una señal ACPI para un apagado ordenado. Los comandos `stop` y `kill` no existen en xl.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-004">
<div class="flashcard-front">

**P:** En un archivo de configuración xl.cfg, ¿qué valor debe tener el parámetro `builder` para un guest HVM?

</div>
<div class="flashcard-back">

**R:** b) `"hvm"`. El parámetro `builder = "hvm"` configura un guest de virtualización completa. `builder = "generic"` se usa para guests PV. Para PVH se usa `type = "pvh"` en versiones recientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué herramienta proporciona monitorización en tiempo real de los dominios Xen similar a `top`?

</div>
<div class="flashcard-back">

**R:** c) `xentop`. `xentop` es una herramienta interactiva que muestra el uso de CPU, memoria, red y disco de todos los dominios Xen en tiempo real. Soporta modo batch con `-b` y personalización del intervalo con `-d`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué es xenstore?

</div>
<div class="flashcard-back">

**R:** b) Una base de datos jerárquica compartida entre Dom0 y DomU para información de configuración. Xenstore permite a Dom0 y los DomU intercambiar información de configuración en tiempo real. Se accede mediante `xenstore-read`, `xenstore-write`, `xenstore-ls` y `xenstore-watch`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué formato de disco en xl.cfg permite usar un volumen LVM como almacenamiento?

</div>
<div class="flashcard-back">

**R:** c) `phy:/dev/vg0/disco,xvda,w`. El prefijo `phy:` se usa para dispositivos de bloques físicos, incluyendo volúmenes LVM. `file:` es para imágenes en archivos regulares. Los prefijos `lvm:` y `block:` no existen en la sintaxis de xl.cfg.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando realiza la migración en vivo de un dominio Xen a otro host?

</div>
<div class="flashcard-back">

**R:** b) `xl migrate mi-vm host-destino`. `xl migrate` realiza la migración en vivo de un dominio a otro host Xen. Requiere almacenamiento compartido (NFS, DRBD, etc.) y conectividad de red entre ambos hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué tipo de guest Xen combina extensiones de hardware para CPU con drivers paravirtualizados para E/S?

</div>
<div class="flashcard-back">

**R:** c) PVH. PVH (PV in HVM container) es un modo híbrido que usa extensiones de hardware (VT-x) para la virtualización de CPU pero emplea drivers paravirtualizados para E/S, combinando las ventajas de ambos enfoques. Es el modo recomendado en Xen moderno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué herramienta de línea de comandos reemplazó a `xm` en las versiones recientes de Xen?

</div>
<div class="flashcard-back">

**R:** c) `xl`. `xl` reemplazó a `xm` como herramienta principal de gestión de dominios Xen. `xm` dependía del demonio `xend` que fue eliminado. `xl` interactúa directamente con el hipervisor a través de `libxl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué tipo de guest Xen permite ejecutar sistemas operativos Windows sin modificar?

</div>
<div class="flashcard-back">

**R:** b) HVM. Solo los guests HVM (Hardware Virtual Machine) soportan sistemas operativos sin modificar como Windows, ya que utilizan virtualización completa asistida por hardware (VT-x/AMD-V) y QEMU para emulación de dispositivos. PV requiere kernel modificado y PVH no soporta Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-012">
<div class="flashcard-front">

**P:** En la configuración xl.cfg, ¿qué parámetro especifica el kernel del guest en modo PV (paravirtualizado)?

</div>
<div class="flashcard-back">

**R:** b) `kernel = "/boot/vmlinuz-guest"`. En guests PV, el parámetro `kernel` especifica la ruta al kernel del guest que será cargado directamente por el hipervisor. Junto con `ramdisk` (initrd) y `extra` (parámetros del kernel como root), define cómo arranca el guest paravirtualizado sin necesidad de un bootloader.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de xl conecta a la consola serie de un dominio Xen en ejecución?

</div>
<div class="flashcard-back">

**R:** c) `xl console mi-vm`. `xl console` conecta a la consola serie (serial) del dominio especificado, permitiendo interactuar con el sistema operativo del guest. Es equivalente a una conexión serie física. Para desconectar de la consola se usa la combinación de teclas `Ctrl+]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-014">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes afirmaciones sobre Dom0 en Xen es correcta?

</div>
<div class="flashcard-back">

**R:** b) Dom0 es el primer dominio que arranca y contiene los drivers de hardware. Dom0 es el dominio privilegiado esencial en Xen. Arranca primero, tiene acceso directo al hardware, ejecuta los drivers de dispositivos y es necesario para crear y gestionar todos los DomU. Sin Dom0, no se pueden gestionar las máquinas virtuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando de xl muestra la asignación de vCPUs de todos los dominios activos?

</div>
<div class="flashcard-back">

**R:** b) `xl vcpu-list`. `xl vcpu-list` muestra la lista de vCPUs asignadas a cada dominio, incluyendo su estado (running, blocked), el tiempo de CPU consumido y la CPU física donde están fijadas (pinned). Es útil para verificar la distribución de recursos de CPU entre dominios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-016">
<div class="flashcard-front">

**P:** En la configuración de red xl.cfg, ¿qué parámetro limita el ancho de banda de la interfaz virtual de un DomU?

</div>
<div class="flashcard-back">

**R:** b) `rate=100Mb/s`. En la configuración de interfaces virtuales (vif) de xl.cfg, el parámetro `rate` limita el ancho de banda disponible para la interfaz. Ejemplo: `vif = ['bridge=xenbr0,rate=100Mb/s']`. Esto permite controlar la cantidad de tráfico de red que cada DomU puede generar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué backend de almacenamiento en Xen proporciona replicación de bloques en red para alta disponibilidad?

</div>
<div class="flashcard-back">

**R:** c) DRBD. DRBD (Distributed Replicated Block Device) replica datos a nivel de bloque entre dos servidores en tiempo real, proporcionando alta disponibilidad. En Xen se configura como `disk = ['drbd:recurso,xvda,w']`. Es ideal para escenarios donde se necesita failover automático de almacenamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué estado muestra xentop cuando un dominio Xen está ejecutándose activamente?

</div>
<div class="flashcard-back">

**R:** b) `r` (running). En xentop, el estado de los dominios se representa con letras: `r` para running (ejecutándose), `b` para blocked (bloqueado esperando E/S), `p` para paused (pausado), `s` para shutdown, `c` para crashed y `d` para dying.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando de xl envía una señal ACPI de apagado ordenado a un dominio?

</div>
<div class="flashcard-back">

**R:** c) `xl shutdown mi-vm`. `xl shutdown` envía una señal ACPI de apagado al dominio, permitiendo que el sistema operativo guest realice un apagado limpio. `xl destroy` fuerza la terminación inmediata sin dar tiempo al guest a cerrar procesos. `xl stop` y `xl poweroff` no son comandos válidos de xl.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué convención de nombres se utiliza para los discos paravirtualizados en Xen?

</div>
<div class="flashcard-back">

**R:** c) `/dev/xvda`, `/dev/xvdb`. Los discos paravirtualizados en Xen usan el prefijo `xvd` (Xen Virtual Disk). `xvda` es el primer disco, `xvdb` el segundo, etc. Los discos emulados en HVM pueden aparecer como `hda`/`sda` dependiendo de la configuración. Los dispositivos `vda` son propios de virtio (KVM/QEMU).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando crea e inicia un dominio Xen a partir de un archivo de configuración?

</div>
<div class="flashcard-back">

**R:** xl create /etc/xen/mi-vm.cfg. `xl create` lee el archivo de configuración especificado (formato xl.cfg) y crea e inicia el dominio inmediatamente. El archivo define todos los parámetros del guest: nombre, memoria, vCPUs, discos, red y tipo de virtualización (PV, HVM o PVH).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando lee un valor de la base de datos Xenstore?

</div>
<div class="flashcard-back">

**R:** xenstore-read. `xenstore-read` lee un valor almacenado en la base de datos jerárquica Xenstore. Por ejemplo, `xenstore-read /local/domain/1/name` devuelve el nombre del dominio con ID 1. Xenstore es el mecanismo de comunicación entre Dom0 y los DomU para compartir información de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando lista el contenido de un directorio en Xenstore?

</div>
<div class="flashcard-back">

**R:** xenstore-ls. `xenstore-ls` muestra el contenido jerárquico de un directorio en Xenstore, listando las claves y valores almacenados. Es útil para depurar la comunicación entre dominios y verificar la configuración de dispositivos virtuales compartidos entre Dom0 y los DomU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando ejecuta xentop en modo batch mostrando una sola iteración?

</div>
<div class="flashcard-back">

**R:** xentop -b -i 1. `xentop -b` activa el modo batch (no interactivo), útil para scripts y monitorización automatizada. `-i 1` limita la salida a una sola iteración. Se puede cambiar el intervalo de refresco con `-d` (por ejemplo, `-d 5` para cada 5 segundos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando realiza la migración en vivo de un dominio Xen llamado "mi-vm" al host "host2"?

</div>
<div class="flashcard-back">

**R:** xl migrate mi-vm host2. `xl migrate` transfiere un dominio en ejecución de un host Xen a otro sin interrupción del servicio (migración en vivo). Requiere almacenamiento compartido entre ambos hosts (NFS, DRBD, etc.), conectividad de red y que ambos hosts ejecuten versiones compatibles de Xen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Dom0 es esencial para el funcionamiento de Xen. Sin Dom0, no se pueden gestionar...

</div>
<div class="flashcard-back">

**R:** Dom0 es esencial para el funcionamiento de Xen. Sin Dom0, no se pueden gestionar los guests. Dom0 tiene privilegios especiales para acceder al hardware y al hipervisor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: PVH es el modo preferido en Xen moderno. Combina el rendimiento de PV para E/S c...

</div>
<div class="flashcard-back">

**R:** PVH es el modo preferido en Xen moderno. Combina el rendimiento de PV para E/S con la compatibilidad de HVM para CPU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: En el formato de disco, `w` significa escritura (read-write) y `r` solo lectura....

</div>
<div class="flashcard-back">

**R:** En el formato de disco, `w` significa escritura (read-write) y `r` solo lectura. `xvda` es la convención de nombres para discos Xen paravirtualizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-029">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Xen es un hipervisor de Tipo 1 (bare-metal) de código abierto que se ejecuta directamente sobre el hardware. Es uno de los hipervisores más maduros del ecosistema Linux y es la base de muchas plataform

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son Herramientas de Gestión: xl y xm?

</div>
<div class="flashcard-back">

**R:** `xl` es la herramienta principal de gestión de dominios en Xen actual (reemplazó a `xm` que dependía de xend).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.2">
</div>

<div class="flashcard" data-id="351.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son Xenstore?

</div>
<div class="flashcard-back">

**R:** Xenstore es una base de datos jerárquica compartida entre Dom0 y los DomU para intercambiar información de configuración:

</div>
</div>

---

