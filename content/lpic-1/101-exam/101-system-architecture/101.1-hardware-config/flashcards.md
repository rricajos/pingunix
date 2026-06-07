---
title: "101.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "101.1"
---

# Flashcards: 101.1 - Configuracion De Hardware

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-001">
<div class="flashcard-front">

**P:** Que comando muestra los modulos del kernel que estan actualmente cargados?

</div>
<div class="flashcard-back">

**R:** c) `lsmod`. `lsmod` muestra una lista de todos los modulos del kernel cargados, su tamano y las dependencias. Equivale a leer `/proc/modules`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `modprobe` e `insmod`?

</div>
<div class="flashcard-back">

**R:** c) `modprobe` gestiona dependencias automaticamente. `modprobe` resuelve y carga automaticamente las dependencias del modulo. `insmod` requiere que especifiques la ruta completa del modulo y no maneja dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-003">
<div class="flashcard-front">

**P:** En que directorio se encuentran las reglas personalizadas de udev?

</div>
<div class="flashcard-back">

**R:** b) `/etc/udev/rules.d/`. Las reglas personalizadas se colocan en `/etc/udev/rules.d/`. Las reglas del sistema estan en `/lib/udev/rules.d/`. Las reglas en `/etc/` tienen prioridad sobre las de `/lib/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-004">
<div class="flashcard-front">

**P:** Que archivo de /proc contiene informacion sobre las interrupciones (IRQs) del sistema?

</div>
<div class="flashcard-back">

**R:** b) `/proc/interrupts`. `/proc/interrupts` muestra el conteo de interrupciones por CPU y por dispositivo. `/proc/dma` muestra los canales DMA y `/proc/ioports` los puertos de E/S.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-005">
<div class="flashcard-front">

**P:** Que sistema de archivos virtual expone la informacion de dispositivos y drivers del kernel de forma jerarquica?

</div>
<div class="flashcard-back">

**R:** c) sysfs (/sys). `/sys` (sysfs) expone informacion de dispositivos, buses y drivers de forma jerarquica. `/proc` contiene principalmente informacion de procesos y del kernel, aunque tambien tiene algo de info de hardware.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-006">
<div class="flashcard-front">

**P:** Que comando usarias para ver los dispositivos PCI junto con los modulos del kernel que los manejan?

</div>
<div class="flashcard-back">

**R:** b) `lspci -k`. La opcion `-k` de `lspci` muestra el driver del kernel en uso y los modulos del kernel disponibles para cada dispositivo PCI.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-007">
<div class="flashcard-front">

**P:** UEFI utiliza una particion especial para almacenar los cargadores de arranque. Como se llama y donde se monta normalmente?

</div>
<div class="flashcard-back">

**R:** ESP (EFI System Partition). . Se monta normalmente en `/boot/efi`. Debe estar formateada con FAT32 (vfat). Contiene los archivos `.efi` de los cargadores de arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-008">
<div class="flashcard-front">

**P:** Que comando permite monitorizar en tiempo real los eventos de conexion/desconexion de dispositivos?

</div>
<div class="flashcard-back">

**R:** b) `udevadm monitor`. `udevadm monitor` muestra los eventos de udev y del kernel en tiempo real. Es util para depurar problemas de hardware. `dmesg -w` tambien muestra mensajes del kernel en tiempo real pero no es especifico de udev.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-009">
<div class="flashcard-front">

**P:** Que comando descarga un modulo del kernel incluyendo sus dependencias no utilizadas?

</div>
<div class="flashcard-back">

**R:** c) `modprobe -r modulo`. `modprobe -r` descarga el modulo y sus dependencias que no esten siendo utilizadas por otros modulos. `rmmod` solo descarga el modulo especificado sin manejar dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-010">
<div class="flashcard-front">

**P:** Que archivo contendria una blacklist para evitar que un modulo se cargue automaticamente?

</div>
<div class="flashcard-back">

**R:** b) `/etc/modprobe.d/blacklist.conf`. Los archivos en `/etc/modprobe.d/` pueden contener directivas `blacklist nombre_modulo` para evitar que se carguen automaticamente. El nombre del archivo puede ser cualquiera con extension `.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-011">
<div class="flashcard-front">

**P:** Que subdirectorio de /sys organiza los dispositivos segun su funcion (red, sonido, entrada), independientemente del bus al que estan conectados?

</div>
<div class="flashcard-back">

**R:** c) /sys/class/. `/sys/class/` agrupa los dispositivos por su funcion o clase (net, input, sound, block, tty, etc.), sin importar a que bus estan conectados fisicamente. `/sys/bus/` organiza por tipo de bus (pci, usb, scsi). `/sys/devices/` contiene el arbol fisico completo de todos los dispositivos. Los directorios en `/sys/bus/` y `/sys/class/` contienen enlaces simbolicos que apuntan a `/sys/devices/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-012">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre dispositivos coldplug y hotplug es correcta?

</div>
<div class="flashcard-back">

**R:** c) Los dispositivos hotplug se conectan mientras el sistema esta en funcionamiento y son gestionados por udev. Los dispositivos hotplug son aquellos que se conectan o desconectan con el sistema encendido (USB, discos externos, etc.). Los dispositivos coldplug estan presentes al encender la maquina (CPU, RAM, disco interno). En distribuciones actuales, udev gestiona ambos tipos de deteccion. El soporte hotplug del kernel Linux se introdujo a partir de la version 2.6.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-013">
<div class="flashcard-front">

**P:** Que opcion de lspci muestra los identificadores numericos del fabricante y del dispositivo PCI?

</div>
<div class="flashcard-back">

**R:** c) lspci -nn. La opcion `-nn` de `lspci` muestra tanto los nombres descriptivos como los IDs numericos del fabricante (vendor) y del dispositivo en formato [vendor:device]. `-v` muestra informacion detallada general, `-k` muestra los modulos del kernel asociados, y `-t` muestra la topologia en forma de arbol.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-014">
<div class="flashcard-front">

**P:** Que archivo en /proc muestra los canales DMA (Direct Memory Access) en uso por los dispositivos?

</div>
<div class="flashcard-back">

**R:** c) /proc/dma. `/proc/dma` muestra los canales DMA asignados a los dispositivos. DMA permite a los dispositivos acceder directamente a la memoria RAM sin pasar por la CPU. `/proc/interrupts` muestra las IRQs, `/proc/ioports` muestra los puertos de entrada/salida, y `/proc/meminfo` muestra informacion sobre la memoria RAM del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-015">
<div class="flashcard-front">

**P:** Que comando muestra la informacion de la CPU del sistema?

</div>
<div class="flashcard-back">

**R:** b) lscpu. `lscpu` muestra informacion completa sobre la arquitectura de la CPU, incluyendo modelo, nucleos, hilos, cache y capacidades. Tambien se puede consultar `cat /proc/cpuinfo` para obtener informacion detallada del procesador. No existe un comando `cpuinfo` ni `/dev/cpu` como archivo legible.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-016">
<div class="flashcard-front">

**P:** Que funcion cumple D-Bus (Desktop Bus) en un sistema Linux?

</div>
<div class="flashcard-back">

**R:** b) Es un sistema de comunicacion entre procesos (IPC) que permite a aplicaciones y servicios comunicarse entre si. D-Bus (Desktop Bus) es un sistema de comunicacion entre procesos que permite a las aplicaciones intercambiar informacion. Tiene dos buses principales: el system bus (comunicacion con servicios del sistema como udev y NetworkManager) y el session bus (comunicacion entre aplicaciones del usuario). No es un bus fisico de hardware.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-017">
<div class="flashcard-front">

**P:** Que comando de bajo nivel se utiliza para cargar un modulo del kernel especificando su ruta completa, sin gestion automatica de dependencias?

</div>
<div class="flashcard-back">

**R:** b) insmod. `insmod` carga un modulo del kernel requiriendo la ruta completa del archivo `.ko` y no gestiona dependencias automaticamente. Si el modulo depende de otros modulos no cargados, `insmod` fallara. `modprobe` es la alternativa de alto nivel que resuelve dependencias automaticamente y no requiere la ruta completa. `lsmod` lista modulos cargados y `modinfo` muestra informacion de un modulo.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-018">
<div class="flashcard-front">

**P:** En que directorio se almacenan los modulos del kernel para la version actualmente en ejecucion?

</div>
<div class="flashcard-back">

**R:** c) /lib/modules/$(uname -r)/. Los modulos compilados del kernel se almacenan en `/lib/modules/` dentro de un subdirectorio que coincide con la version del kernel en ejecucion, obtenible con `uname -r`. `/etc/modules` es un archivo de configuracion que lista modulos a cargar en el arranque. `/sys/module/` contiene informacion en tiempo real sobre los modulos actualmente cargados, pero no los archivos `.ko` de los modulos.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-019">
<div class="flashcard-front">

**P:** Que muestra la opcion -t del comando lsusb?

</div>
<div class="flashcard-back">

**R:** b) Un arbol jerarquico de los dispositivos USB conectados. La opcion `-t` de `lsusb` muestra los dispositivos USB en formato de arbol jerarquico, mostrando como estan conectados a los controladores y hubs USB. `-v` muestra informacion detallada, y `-s bus:device` permite filtrar un dispositivo especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-020">
<div class="flashcard-front">

**P:** Que sucede cuando se ejecuta el comando `udevadm trigger`?

</div>
<div class="flashcard-back">

**R:** c) Se fuerza la re-evaluacion de las reglas de udev para los dispositivos existentes. `udevadm trigger` solicita al kernel que reenvie los eventos de los dispositivos existentes, provocando que udev re-evalúe sus reglas para todos los dispositivos. Esto es util despues de modificar reglas en `/etc/udev/rules.d/` o `/lib/udev/rules.d/` para aplicarlas sin reiniciar. `udevadm monitor` muestra eventos en tiempo real y `udevadm info` muestra informacion de un dispositivo especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-021">
<div class="flashcard-front">

**P:** Que comando se utiliza para listar los modulos del kernel cargados actualmente en el sistema?

</div>
<div class="flashcard-back">

**R:** lsmod. `lsmod` muestra la lista de modulos del kernel cargados en memoria, incluyendo su nombre, tamano y dependencias. Es equivalente a leer el contenido de `/proc/modules`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-022">
<div class="flashcard-front">

**P:** Que comando se utiliza para cargar un modulo del kernel gestionando automaticamente sus dependencias?

</div>
<div class="flashcard-back">

**R:** modprobe. `modprobe` carga un modulo del kernel y resuelve automaticamente todas sus dependencias, cargando los modulos necesarios antes. Para descargar un modulo y sus dependencias no utilizadas se usa `modprobe -r nombre_modulo`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-023">
<div class="flashcard-front">

**P:** Que comando muestra los dispositivos conectados al bus PCI del sistema?

</div>
<div class="flashcard-back">

**R:** lspci. `lspci` lista todos los dispositivos conectados al bus PCI, mostrando informacion como el tipo de dispositivo, fabricante y modelo. Se puede usar con opciones como `-v` (detallado), `-k` (modulos del kernel) o `-nn` (IDs numericos).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-024">
<div class="flashcard-front">

**P:** Que comando muestra los dispositivos USB conectados al sistema?

</div>
<div class="flashcard-back">

**R:** lsusb. `lsusb` lista todos los dispositivos conectados al bus USB, mostrando el numero de bus, numero de dispositivo, ID del fabricante/producto y nombre del dispositivo. Se puede usar con `-v` para informacion detallada o `-t` para vista en arbol.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-025">
<div class="flashcard-front">

**P:** Que comando se utiliza para descargar un modulo del kernel sin gestionar dependencias?

</div>
<div class="flashcard-back">

**R:** rmmod. `rmmod` descarga un modulo del kernel especificado, pero no gestiona dependencias. Si otros modulos dependen del modulo que se intenta descargar, `rmmod` fallara. Para descargar un modulo junto con sus dependencias no utilizadas, se recomienda usar `modprobe -r`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: En distribuciones actuales de Linux, udev es responsable tanto de la deteccion c...

</div>
<div class="flashcard-back">

**R:** En distribuciones actuales de Linux, udev es responsable tanto de la deteccion coldplug (durante el encendido) como de la deteccion hotplug (con el sistema en funcionamiento).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Las funciones deshabilitadas en BIOS/UEFI reducen el consumo de energia y pueden...

</div>
<div class="flashcard-back">

**R:** Las funciones deshabilitadas en BIOS/UEFI reducen el consumo de energia y pueden aumentar la proteccion del sistema. Si el dispositivo incorrecto aparece primero en la lista de arranque, el sistema operativo puede no cargarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `/sys/bus/` organiza por tipo de bus, `/sys/class/` organiza por funcion del dis...

</div>
<div class="flashcard-back">

**R:** `/sys/bus/` organiza por tipo de bus, `/sys/class/` organiza por funcion del dispositivo, y `/sys/devices/` es el arbol fisico real. Los dos primeros contienen enlaces simbolicos que apuntan al tercero.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-029">
<div class="flashcard-front">

**P:** Que diferencia hay entre `/sys/bus/`, `/sys/class/` y `/sys/devices/` en sysfs?

</div>
<div class="flashcard-back">

**R:** `/sys/devices/` contiene el arbol fisico real de todos los dispositivos del sistema, organizados segun su conexion hardware (plataforma, PCI, USB, etc.). `/sys/bus/` organiza los dispositivos por tipo de bus (pci, usb, scsi, i2c) y contiene enlaces simbolicos a `/sys/devices/`. `/sys/class/` organiza por funcion logica del dispositivo (net, block, input, tty, sound) con enlaces simbolicos a `/sys/devices/`. Ejemplo: una tarjeta de red aparece en `/sys/devices/pci0000:00/...`, en `/sys/bus/pci/devices/` y en `/sys/class/net/eth0`. El examen pregunta frecuentemente sobre estas tres vistas complementarias.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-030">
<div class="flashcard-front">

**P:** Que archivo en `/proc` muestra la linea de comandos con la que se inicio el kernel?

</div>
<div class="flashcard-back">

**R:** `/proc/cmdline`. Este archivo muestra los parametros que se pasaron al kernel durante el arranque, como `root=/dev/sda1 quiet splash`. Es muy util para diagnosticar problemas de arranque, verificar que parametros de kernel estan activos y comprobar configuraciones como `nomodeset`, `acpi=off` o `init=/bin/bash`. Se puede leer con `cat /proc/cmdline`. Los parametros de kernel se configuran en el gestor de arranque (GRUB2) en la variable `GRUB_CMDLINE_LINUX` de `/etc/default/grub`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-031">
<div class="flashcard-front">

**P:** Que diferencia hay entre `lspci`, `lsusb` y `lsblk`?

</div>
<div class="flashcard-back">

**R:** `lspci` lista los dispositivos conectados al bus PCI/PCIe (tarjetas graficas, red, sonido, controladores SATA/NVMe). Con `-v` muestra detalles y con `-k` los modulos del kernel que los gestionan. `lsusb` lista los dispositivos USB conectados (pendrives, teclados, ratones, webcams). Con `-t` muestra el arbol de hubs USB. `lsblk` lista los dispositivos de bloque (discos, particiones, LVM, RAID) en formato de arbol. Con `-f` muestra el sistema de archivos. Los tres obtienen su informacion de `/sys` (sysfs) y son herramientas fundamentales para diagnosticar problemas de hardware en el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-032">
<div class="flashcard-front">

**P:** Que contiene el archivo `/proc/interrupts` y para que sirve?

</div>
<div class="flashcard-back">

**R:** `/proc/interrupts` muestra una tabla con todas las interrupciones (IRQ) del sistema, indicando cuantas se han producido por cada CPU y que dispositivo las genera. Cada linea muestra: numero de IRQ, conteo por CPU, controlador de interrupciones, y nombre del dispositivo. Es util para: diagnosticar conflictos de IRQ, verificar que un dispositivo esta generando interrupciones (y por tanto funcionando), e identificar desequilibrios de interrupciones entre CPUs. IRQ tipicas: 0=timer, 1=teclado, 14/15=IDE. En sistemas modernos la mayoria de IRQs son MSI/MSI-X (Message Signaled Interrupts) para dispositivos PCIe.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-033">
<div class="flashcard-front">

**P:** Que comando permite cargar un modulo del kernel manualmente y cual es la diferencia entre `modprobe` e `insmod`?

</div>
<div class="flashcard-back">

**R:** `modprobe` carga un modulo del kernel Y sus dependencias automaticamente. `insmod` carga un modulo individual SIN resolver dependencias (requiere la ruta completa al archivo .ko). `modprobe` es la herramienta recomendada porque consulta la base de datos de dependencias generada por `depmod`. Ejemplo: `modprobe snd_hda_intel` carga el modulo de audio Intel HD y todas sus dependencias. `insmod /lib/modules/.../snd_hda_intel.ko` fallaria si faltan dependencias. Para descargar modulos: `modprobe -r` (con dependencias) o `rmmod` (sin). Para listar modulos cargados: `lsmod`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-034">
<div class="flashcard-front">

**P:** Que contiene `/proc/cpuinfo` y que informacion clave proporciona?

</div>
<div class="flashcard-back">

**R:** `/proc/cpuinfo` contiene informacion detallada sobre cada CPU/core del sistema: modelo del procesador (`model name`), velocidad (`cpu MHz`), tamano de cache (`cache size`), numero de cores (`cpu cores`), flags de capacidades (sse, avx, vmx/svm para virtualizacion), y el `processor` que identifica cada core logico. Es util para: verificar cuantos cores tiene el sistema, comprobar si soporta virtualizacion por hardware (flags `vmx` para Intel VT-x o `svm` para AMD-V), y diagnosticar problemas de rendimiento. Alternativas: `lscpu` ofrece un resumen mas legible.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-035">
<div class="flashcard-front">

**P:** Escribe el comando para listar todos los modulos del kernel actualmente cargados. <input type="text" class="fill-blank" data-answer="lsmod" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lsmod. El comando `lsmod` muestra los modulos del kernel actualmente cargados, formateando la informacion de `/proc/modules`. La salida tiene tres columnas: Module (nombre), Size (tamano en bytes), y Used by (modulos que dependen de el y conteo de uso). Un modulo con conteo 0 no esta siendo usado y puede descargarse con `modprobe -r`. Para obtener informacion detallada de un modulo especifico se usa `modinfo nombre_modulo`, que muestra su ruta, autor, descripcion, parametros y dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-036">
<div class="flashcard-front">

**P:** Que archivo en `/proc` muestra la cantidad de memoria RAM total, libre y disponible?

</div>
<div class="flashcard-back">

**R:** `/proc/meminfo`. Este archivo contiene informacion detallada sobre el uso de memoria del sistema: `MemTotal` (RAM total), `MemFree` (RAM completamente libre), `MemAvailable` (RAM disponible incluyendo caches recuperables), `Buffers` y `Cached` (memoria usada como cache de disco), `SwapTotal` y `SwapFree` (swap). El comando `free -h` ofrece un resumen mas legible de la misma informacion. Trampa del examen: `MemFree` suele ser muy bajo en Linux porque el kernel usa la RAM libre como cache de disco; `MemAvailable` es el valor real de memoria disponible para aplicaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-037">
<div class="flashcard-front">

**P:** Que es D-Bus y que relacion tiene con `udev` en la gestion de dispositivos?

</div>
<div class="flashcard-back">

**R:** D-Bus es un sistema de comunicacion entre procesos (IPC) que permite a las aplicaciones intercambiar mensajes. `udev` es el gestor de dispositivos del kernel que detecta hardware nuevo, crea nodos en `/dev/` y aplica reglas. La relacion: cuando `udev` detecta un nuevo dispositivo (ej: USB conectado), envia una senal a traves de D-Bus que las aplicaciones de escritorio pueden escuchar para reaccionar automaticamente (ej: montar un pendrive, abrir el gestor de archivos). El comando `udevadm monitor` permite ver los eventos de dispositivos en tiempo real. Las reglas de udev se configuran en `/etc/udev/rules.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-038">
<div class="flashcard-front">

**P:** Que diferencia hay entre `/dev/sda`, `/dev/nvme0n1` y `/dev/vda`?

</div>
<div class="flashcard-back">

**R:** `/dev/sda` es un disco SCSI, SATA o USB (gestionado por el subsistema SCSI). Las particiones son `sda1`, `sda2`, etc. `/dev/nvme0n1` es un disco NVMe (SSD conectado por PCIe). `nvme0` es el controlador, `n1` el namespace (disco). Las particiones son `nvme0n1p1`, `nvme0n1p2`. `/dev/vda` es un disco virtual (virtio) en maquinas virtuales KVM/QEMU. Las particiones son `vda1`, `vda2`. Otros: `/dev/xvda` para Xen, `/dev/hda` para discos IDE legacy (obsoleto). El examen puede preguntar que tipo de dispositivo corresponde a cada nomenclatura.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-039">
<div class="flashcard-front">

**P:** Escribe el comando para ver que modulo del kernel gestiona cada dispositivo PCI. <input type="text" class="fill-blank" data-answer="lspci -k" data-alt="lspci -v" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lspci -k. La opcion `-k` (kernel) de `lspci` muestra, para cada dispositivo PCI, el modulo del kernel que lo gestiona (`Kernel driver in use:`) y los modulos disponibles (`Kernel modules:`). Esto es esencial para diagnosticar cuando un dispositivo no funciona: si no tiene "driver in use", falta cargar el modulo correspondiente con `modprobe`. Ejemplo de salida: `00:02.0 VGA ... Kernel driver in use: i915 / Kernel modules: i915`. La opcion `-v` tambien muestra esta informacion junto con otros detalles (regiones de memoria, capacidades, IRQ).

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-040">
<div class="flashcard-front">

**P:** Que son `/proc/ioports` y `/proc/dma` y cuando son relevantes para el examen?

</div>
<div class="flashcard-back">

**R:** `/proc/ioports` muestra los rangos de puertos de E/S (I/O ports) asignados a cada dispositivo, usados para comunicacion CPU-dispositivo en arquitecturas x86. Ejemplo: `0060-0060 : keyboard`. `/proc/dma` muestra los canales DMA (Direct Memory Access) en uso, que permiten a dispositivos transferir datos directamente a memoria sin pasar por la CPU. Ambos son legado de ISA pero siguen existiendo. Para el examen, lo clave es saber que existen y su ubicacion en `/proc`. En hardware moderno, PCI/PCIe usa MMIO (Memory-Mapped I/O) y bus-mastering DMA, reemplazando los mecanismos legacy.

</div>
</div>

---

<div class="flashcard-deck" data-subtopic="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-041">
<div class="flashcard-front">

**P:** Trampa del examen: cual es la diferencia entre `/proc` y `/sys`?

</div>
<div class="flashcard-back">

**R:** Ambos son sistemas de archivos virtuales (no ocupan espacio en disco). `/proc` (procfs) originalmente solo contenia informacion de procesos (un directorio numerado por PID), pero se fue extendiendo con informacion del sistema (`cpuinfo`, `meminfo`, `interrupts`, etc.). `/sys` (sysfs) se creo despues para organizar la informacion de dispositivos y drivers de forma estructurada en un arbol jerarquico (bus, class, devices). La regla general: `/proc` para informacion de procesos y estado del kernel, `/sys` para informacion de dispositivos y hardware. El examen puede pedir identificar en cual de los dos se encuentra cierta informacion.

</div>
</div>

---

