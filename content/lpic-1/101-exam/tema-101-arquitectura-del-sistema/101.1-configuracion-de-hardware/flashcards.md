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

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
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

<div class="flashcard-deck" data-subtema="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `/sys/`?

</div>
<div class="flashcard-back">

**R:** Informacion de dispositivos (sysfs)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son Archivos clave para el examen?

</div>
<div class="flashcard-back">

**R:** | Archivo/Directorio | Proposito |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.1">
</div>

<div class="flashcard" data-id="101.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

