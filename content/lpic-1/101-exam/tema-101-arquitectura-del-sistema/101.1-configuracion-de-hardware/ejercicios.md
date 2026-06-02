---
title: "101.1 - Ejercicios de practica"
tags:
  - lpic-1
  - examen-101
  - tema-101
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "101"
subtema: "101.1"
---

# 101.1 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1
Que comando muestra los modulos del kernel que estan actualmente cargados?

a) `modinfo`
b) `insmod`
c) `lsmod`
d) `modprobe -l`

<details>
<summary>Respuesta</summary>

**c) `lsmod`**

`lsmod` muestra una lista de todos los modulos del kernel cargados, su tamano y las dependencias. Equivale a leer `/proc/modules`.

</details>

---

### Pregunta 2
Cual es la diferencia principal entre `modprobe` e `insmod`?

a) `modprobe` solo funciona como root
b) `insmod` gestiona dependencias automaticamente
c) `modprobe` gestiona dependencias automaticamente
d) No hay diferencia, son alias

<details>
<summary>Respuesta</summary>

**c) `modprobe` gestiona dependencias automaticamente**

`modprobe` resuelve y carga automaticamente las dependencias del modulo. `insmod` requiere que especifiques la ruta completa del modulo y no maneja dependencias.

</details>

---

### Pregunta 3
En que directorio se encuentran las reglas personalizadas de udev?

a) `/etc/udev/`
b) `/etc/udev/rules.d/`
c) `/dev/udev/`
d) `/sys/udev/rules/`

<details>
<summary>Respuesta</summary>

**b) `/etc/udev/rules.d/`**

Las reglas personalizadas se colocan en `/etc/udev/rules.d/`. Las reglas del sistema estan en `/lib/udev/rules.d/`. Las reglas en `/etc/` tienen prioridad sobre las de `/lib/`.

</details>

---

### Pregunta 4
Que archivo de /proc contiene informacion sobre las interrupciones (IRQs) del sistema?

a) `/proc/irq`
b) `/proc/interrupts`
c) `/proc/dma`
d) `/proc/ioports`

<details>
<summary>Respuesta</summary>

**b) `/proc/interrupts`**

`/proc/interrupts` muestra el conteo de interrupciones por CPU y por dispositivo. `/proc/dma` muestra los canales DMA y `/proc/ioports` los puertos de E/S.

</details>

---

### Pregunta 5
Que sistema de archivos virtual expone la informacion de dispositivos y drivers del kernel de forma jerarquica?

a) procfs (/proc)
b) devfs (/dev)
c) sysfs (/sys)
d) tmpfs (/tmp)

<details>
<summary>Respuesta</summary>

**c) sysfs (/sys)**

`/sys` (sysfs) expone informacion de dispositivos, buses y drivers de forma jerarquica. `/proc` contiene principalmente informacion de procesos y del kernel, aunque tambien tiene algo de info de hardware.

</details>

---

### Pregunta 6
Que comando usarias para ver los dispositivos PCI junto con los modulos del kernel que los manejan?

a) `lspci -v`
b) `lspci -k`
c) `lspci -t`
d) `lsmod -p`

<details>
<summary>Respuesta</summary>

**b) `lspci -k`**

La opcion `-k` de `lspci` muestra el driver del kernel en uso y los modulos del kernel disponibles para cada dispositivo PCI.

</details>

---

### Pregunta 7
UEFI utiliza una particion especial para almacenar los cargadores de arranque. Como se llama y donde se monta normalmente?

<details>
<summary>Respuesta</summary>

**ESP (EFI System Partition)**. Se monta normalmente en `/boot/efi`. Debe estar formateada con FAT32 (vfat). Contiene los archivos `.efi` de los cargadores de arranque.

</details>

---

### Pregunta 8
Que comando permite monitorizar en tiempo real los eventos de conexion/desconexion de dispositivos?

a) `dmesg -w`
b) `udevadm monitor`
c) `lsdev --watch`
d) `udevadm info`

<details>
<summary>Respuesta</summary>

**b) `udevadm monitor`**

`udevadm monitor` muestra los eventos de udev y del kernel en tiempo real. Es util para depurar problemas de hardware. `dmesg -w` tambien muestra mensajes del kernel en tiempo real pero no es especifico de udev.

</details>

---

### Pregunta 9
Que comando descarga un modulo del kernel incluyendo sus dependencias no utilizadas?

a) `rmmod modulo`
b) `insmod -r modulo`
c) `modprobe -r modulo`
d) `modunload modulo`

<details>
<summary>Respuesta</summary>

**c) `modprobe -r modulo`**

`modprobe -r` descarga el modulo y sus dependencias que no esten siendo utilizadas por otros modulos. `rmmod` solo descarga el modulo especificado sin manejar dependencias.

</details>

---

### Pregunta 10
Que archivo contendria una blacklist para evitar que un modulo se cargue automaticamente?

a) `/etc/modules`
b) `/etc/modprobe.d/blacklist.conf`
c) `/sys/module/blacklist`
d) `/proc/modules.deny`

<details>
<summary>Respuesta</summary>

**b) `/etc/modprobe.d/blacklist.conf`**

Los archivos en `/etc/modprobe.d/` pueden contener directivas `blacklist nombre_modulo` para evitar que se carguen automaticamente. El nombre del archivo puede ser cualquiera con extension `.conf`.

</details>

### Pregunta 11

Que subdirectorio de /sys organiza los dispositivos segun su funcion (red, sonido, entrada), independientemente del bus al que estan conectados?

a) /sys/devices/
b) /sys/bus/
c) /sys/class/
d) /sys/firmware/

<details><summary>Respuesta</summary>

**c) /sys/class/**

`/sys/class/` agrupa los dispositivos por su funcion o clase (net, input, sound, block, tty, etc.), sin importar a que bus estan conectados fisicamente. `/sys/bus/` organiza por tipo de bus (pci, usb, scsi). `/sys/devices/` contiene el arbol fisico completo de todos los dispositivos. Los directorios en `/sys/bus/` y `/sys/class/` contienen enlaces simbolicos que apuntan a `/sys/devices/`.

</details>

### Pregunta 12

Cual de las siguientes afirmaciones sobre dispositivos coldplug y hotplug es correcta?

a) Los dispositivos coldplug solo se detectan al apagar el sistema
b) Udev solo gestiona dispositivos hotplug, no coldplug
c) Los dispositivos hotplug se conectan mientras el sistema esta en funcionamiento y son gestionados por udev
d) El soporte hotplug requiere una version del kernel anterior a 2.6

<details><summary>Respuesta</summary>

**c) Los dispositivos hotplug se conectan mientras el sistema esta en funcionamiento y son gestionados por udev**

Los dispositivos hotplug son aquellos que se conectan o desconectan con el sistema encendido (USB, discos externos, etc.). Los dispositivos coldplug estan presentes al encender la maquina (CPU, RAM, disco interno). En distribuciones actuales, udev gestiona ambos tipos de deteccion. El soporte hotplug del kernel Linux se introdujo a partir de la version 2.6.

</details>

### Pregunta 13

Que opcion de lspci muestra los identificadores numericos del fabricante y del dispositivo PCI?

a) lspci -v
b) lspci -k
c) lspci -nn
d) lspci -t

<details><summary>Respuesta</summary>

**c) lspci -nn**

La opcion `-nn` de `lspci` muestra tanto los nombres descriptivos como los IDs numericos del fabricante (vendor) y del dispositivo en formato [vendor:device]. `-v` muestra informacion detallada general, `-k` muestra los modulos del kernel asociados, y `-t` muestra la topologia en forma de arbol.

</details>

### Pregunta 14

Que archivo en /proc muestra los canales DMA (Direct Memory Access) en uso por los dispositivos?

a) /proc/interrupts
b) /proc/ioports
c) /proc/dma
d) /proc/meminfo

<details><summary>Respuesta</summary>

**c) /proc/dma**

`/proc/dma` muestra los canales DMA asignados a los dispositivos. DMA permite a los dispositivos acceder directamente a la memoria RAM sin pasar por la CPU. `/proc/interrupts` muestra las IRQs, `/proc/ioports` muestra los puertos de entrada/salida, y `/proc/meminfo` muestra informacion sobre la memoria RAM del sistema.

</details>

### Pregunta 15

Que comando muestra la informacion de la CPU del sistema?

a) cpuinfo
b) lscpu
c) cat /dev/cpu
d) modinfo cpu

<details><summary>Respuesta</summary>

**b) lscpu**

`lscpu` muestra informacion completa sobre la arquitectura de la CPU, incluyendo modelo, nucleos, hilos, cache y capacidades. Tambien se puede consultar `cat /proc/cpuinfo` para obtener informacion detallada del procesador. No existe un comando `cpuinfo` ni `/dev/cpu` como archivo legible.

</details>

### Pregunta 16

Que funcion cumple D-Bus (Desktop Bus) en un sistema Linux?

a) Es un bus fisico de hardware para conectar dispositivos de escritorio
b) Es un sistema de comunicacion entre procesos (IPC) que permite a aplicaciones y servicios comunicarse entre si
c) Es un controlador de dispositivos USB para entornos graficos
d) Es un sistema de archivos virtual para dispositivos de almacenamiento

<details><summary>Respuesta</summary>

**b) Es un sistema de comunicacion entre procesos (IPC) que permite a aplicaciones y servicios comunicarse entre si**

D-Bus (Desktop Bus) es un sistema de comunicacion entre procesos que permite a las aplicaciones intercambiar informacion. Tiene dos buses principales: el system bus (comunicacion con servicios del sistema como udev y NetworkManager) y el session bus (comunicacion entre aplicaciones del usuario). No es un bus fisico de hardware.

</details>

### Pregunta 17

Que comando de bajo nivel se utiliza para cargar un modulo del kernel especificando su ruta completa, sin gestion automatica de dependencias?

a) modprobe
b) insmod
c) lsmod
d) modinfo

<details><summary>Respuesta</summary>

**b) insmod**

`insmod` carga un modulo del kernel requiriendo la ruta completa del archivo `.ko` y no gestiona dependencias automaticamente. Si el modulo depende de otros modulos no cargados, `insmod` fallara. `modprobe` es la alternativa de alto nivel que resuelve dependencias automaticamente y no requiere la ruta completa. `lsmod` lista modulos cargados y `modinfo` muestra informacion de un modulo.

</details>

### Pregunta 18

En que directorio se almacenan los modulos del kernel para la version actualmente en ejecucion?

a) /etc/modules/
b) /usr/lib/kernel/
c) /lib/modules/$(uname -r)/
d) /sys/module/

<details><summary>Respuesta</summary>

**c) /lib/modules/$(uname -r)/**

Los modulos compilados del kernel se almacenan en `/lib/modules/` dentro de un subdirectorio que coincide con la version del kernel en ejecucion, obtenible con `uname -r`. `/etc/modules` es un archivo de configuracion que lista modulos a cargar en el arranque. `/sys/module/` contiene informacion en tiempo real sobre los modulos actualmente cargados, pero no los archivos `.ko` de los modulos.

</details>

### Pregunta 19

Que muestra la opcion -t del comando lsusb?

a) Informacion detallada de cada dispositivo USB
b) Un arbol jerarquico de los dispositivos USB conectados
c) El tipo de cada dispositivo USB
d) Los tiempos de respuesta de los dispositivos USB

<details><summary>Respuesta</summary>

**b) Un arbol jerarquico de los dispositivos USB conectados**

La opcion `-t` de `lsusb` muestra los dispositivos USB en formato de arbol jerarquico, mostrando como estan conectados a los controladores y hubs USB. `-v` muestra informacion detallada, y `-s bus:device` permite filtrar un dispositivo especifico.

</details>

### Pregunta 20

Que sucede cuando se ejecuta el comando `udevadm trigger`?

a) Se detiene el servicio udev completamente
b) Se eliminan todos los archivos de dispositivo en /dev
c) Se fuerza la re-evaluacion de las reglas de udev para los dispositivos existentes
d) Se muestra un log de los ultimos eventos de udev

<details><summary>Respuesta</summary>

**c) Se fuerza la re-evaluacion de las reglas de udev para los dispositivos existentes**

`udevadm trigger` solicita al kernel que reenvie los eventos de los dispositivos existentes, provocando que udev re-evalúe sus reglas para todos los dispositivos. Esto es util despues de modificar reglas en `/etc/udev/rules.d/` o `/lib/udev/rules.d/` para aplicarlas sin reiniciar. `udevadm monitor` muestra eventos en tiempo real y `udevadm info` muestra informacion de un dispositivo especifico.

</details>

### Pregunta 21

Que comando se utiliza para listar los modulos del kernel cargados actualmente en el sistema?

<input type="text" class="fill-blank" data-answer="lsmod" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lsmod**

`lsmod` muestra la lista de modulos del kernel cargados en memoria, incluyendo su nombre, tamano y dependencias. Es equivalente a leer el contenido de `/proc/modules`.

</details>

### Pregunta 22

Que comando se utiliza para cargar un modulo del kernel gestionando automaticamente sus dependencias?

<input type="text" class="fill-blank" data-answer="modprobe" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**modprobe**

`modprobe` carga un modulo del kernel y resuelve automaticamente todas sus dependencias, cargando los modulos necesarios antes. Para descargar un modulo y sus dependencias no utilizadas se usa `modprobe -r nombre_modulo`.

</details>

### Pregunta 23

Que comando muestra los dispositivos conectados al bus PCI del sistema?

<input type="text" class="fill-blank" data-answer="lspci" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lspci**

`lspci` lista todos los dispositivos conectados al bus PCI, mostrando informacion como el tipo de dispositivo, fabricante y modelo. Se puede usar con opciones como `-v` (detallado), `-k` (modulos del kernel) o `-nn` (IDs numericos).

</details>

### Pregunta 24

Que comando muestra los dispositivos USB conectados al sistema?

<input type="text" class="fill-blank" data-answer="lsusb" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lsusb**

`lsusb` lista todos los dispositivos conectados al bus USB, mostrando el numero de bus, numero de dispositivo, ID del fabricante/producto y nombre del dispositivo. Se puede usar con `-v` para informacion detallada o `-t` para vista en arbol.

</details>

### Pregunta 25

Que comando se utiliza para descargar un modulo del kernel sin gestionar dependencias?

<input type="text" class="fill-blank" data-answer="rmmod" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rmmod**

`rmmod` descarga un modulo del kernel especificado, pero no gestiona dependencias. Si otros modulos dependen del modulo que se intenta descargar, `rmmod` fallara. Para descargar un modulo junto con sus dependencias no utilizadas, se recomienda usar `modprobe -r`.

</details>

---

## Ejercicios practicos

### Ejercicio 1: Explorar hardware
Ejecuta los siguientes comandos y observa la salida:
```bash
lspci
lsusb
lsblk
lscpu
cat /proc/cpuinfo
cat /proc/meminfo
```

### Ejercicio 2: Modulos del kernel
```bash
# Listar modulos cargados
lsmod

# Buscar un modulo especifico
lsmod | grep ext4

# Ver informacion de un modulo
modinfo ext4

# Ver dependencias de un modulo
modprobe --show-depends ext4
```

### Ejercicio 3: Monitorizar eventos de hardware
```bash
# En una terminal, ejecuta:
udevadm monitor

# En otra terminal, conecta/desconecta un USB
# Observa los eventos que aparecen
```
