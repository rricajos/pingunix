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

### Pregunta 26

Cual es la diferencia principal entre BIOS y UEFI respecto al tamano maximo de disco soportado?

a) BIOS soporta hasta 4 TB, UEFI hasta 8 TB
b) BIOS soporta hasta 2 TB (MBR), UEFI soporta discos mayores de 2 TB (GPT)
c) No hay diferencia, ambos soportan cualquier tamano
d) UEFI esta limitado a 1 TB por particion

<details>
<summary>Respuesta</summary>

**BIOS soporta hasta 2 TB (MBR), UEFI soporta discos mayores de 2 TB (GPT)**

BIOS utiliza la tabla de particiones MBR que esta limitada a discos de 2 TB y maximo 4 particiones primarias. UEFI utiliza GPT que soporta discos de mas de 2 TB y hasta 128 particiones. Ademas, UEFI ofrece Secure Boot, interfaz grafica y tiempos de arranque mas rapidos.

</details>

---

### Pregunta 27

Que es la ESP (EFI System Partition) y que sistema de archivos debe utilizar?

<details>
<summary>Respuesta</summary>

**ESP es la particion donde UEFI almacena los cargadores de arranque**

La ESP (EFI System Partition) es una particion obligatoria en sistemas UEFI que contiene los archivos `.efi` de los cargadores de arranque. Debe estar formateada con FAT32 (vfat) y se monta normalmente en `/boot/efi`. Sin esta particion, un sistema UEFI no puede arrancar.

</details>

---

### Pregunta 28

Que dispositivo especial de /dev descarta toda la informacion que se escribe en el?

a) /dev/zero
b) /dev/null
c) /dev/random
d) /dev/discard

<details>
<summary>Respuesta</summary>

**/dev/null**

`/dev/null` descarta toda la informacion que se escribe en el y devuelve EOF al leer. Se usa habitualmente para redirigir salida que no interesa: `comando > /dev/null 2>&1`. `/dev/zero` genera bytes nulos al leerlo, `/dev/random` genera numeros aleatorios bloqueantes y `/dev/urandom` genera numeros aleatorios no bloqueantes.

</details>

---

### Pregunta 29

Que comando muestra los dispositivos de bloque del sistema en formato de arbol, incluyendo el sistema de archivos?

a) fdisk -l
b) lsblk -f
c) blkid
d) mount -l

<details>
<summary>Respuesta</summary>

**lsblk -f**

`lsblk` lista los dispositivos de bloque (discos, particiones) en formato de arbol. La opcion `-f` anade informacion del sistema de archivos, UUID y punto de montaje. Tambien se puede usar `-o NAME,SIZE,TYPE,MOUNTPOINT` para seleccionar columnas especificas. `blkid` muestra UUIDs pero no en formato arbol. `fdisk -l` muestra la tabla de particiones.

</details>

---

### Pregunta 30

Que comando muestra informacion detallada de un modulo del kernel, como su descripcion, autor, licencia y parametros?

a) lsmod info
b) modprobe -i
c) modinfo
d) cat /sys/module/

<details>
<summary>Respuesta</summary>

**modinfo**

`modinfo` muestra informacion detallada de un modulo del kernel: descripcion, autor, licencia, dependencias y parametros configurables. Por ejemplo, `modinfo ext4` muestra toda la info del modulo ext4. Con `-p` muestra solo los parametros. No es necesario que el modulo este cargado para consultarlo.

</details>

---

### Pregunta 31

Cual es el formato basico de una regla de udev y donde se guardan las reglas personalizadas?

<details>
<summary>Respuesta</summary>

**Las reglas udev usan pares CLAVE==valor para emparejar y CLAVE+=valor para asignar**

El formato basico es: `KERNEL=="sdb", SUBSYSTEM=="block", SYMLINK+="mi_disco"`. Las reglas personalizadas se guardan en `/etc/udev/rules.d/` con extension `.rules`. Las reglas del sistema estan en `/lib/udev/rules.d/`. Las de `/etc/` tienen prioridad. Tras modificar reglas, se aplican con `udevadm trigger` sin necesidad de reiniciar.

</details>

---

### Pregunta 32

Que es una IRQ (Interrupt Request) y donde se puede consultar la tabla de IRQs del sistema?

<details>
<summary>Respuesta</summary>

**Una IRQ es una senal que un dispositivo envia al procesador para solicitar atencion**

Las IRQs (Interrupt Requests) permiten a los dispositivos de hardware notificar al procesador que necesitan atencion. La tabla de IRQs se consulta en `/proc/interrupts`, que muestra el conteo de interrupciones por CPU y por dispositivo. Cada dispositivo tiene asignado un numero de IRQ unico para evitar conflictos.

</details>

---

### Pregunta 33

Que es DMA (Direct Memory Access) y que ventaja ofrece frente al acceso convencional?

<details>
<summary>Respuesta</summary>

**DMA permite a los dispositivos acceder directamente a la RAM sin pasar por la CPU**

DMA (Direct Memory Access) es un mecanismo que permite a dispositivos como discos o tarjetas de red transferir datos directamente a la memoria RAM sin intervencion del procesador, liberando la CPU para otras tareas. Los canales DMA asignados se consultan en `/proc/dma`. Los puertos de E/S (I/O ports) se consultan en `/proc/ioports`.

</details>

---

### Pregunta 34

Que archivo se usa en sistemas Debian para configurar que modulos del kernel se carguen automaticamente al arrancar?

a) /etc/modprobe.conf
b) /etc/modules
c) /lib/modules/autoload
d) /sys/module/autoload

<details>
<summary>Respuesta</summary>

**/etc/modules**

En sistemas Debian/Ubuntu, `/etc/modules` es un archivo de texto que lista los modulos a cargar automaticamente durante el arranque, uno por linea. En sistemas con systemd, se usa el directorio `/etc/modules-load.d/` con archivos `.conf`. Atencion: `/etc/modprobe.d/` solo configura opciones, aliases y blacklists, pero NO carga modulos.

</details>

---

### Pregunta 35

Que diferencia hay entre /dev/random y /dev/urandom?

a) /dev/random es mas rapido
b) /dev/random bloquea si no hay suficiente entropia, /dev/urandom nunca bloquea
c) /dev/urandom genera numeros mas seguros
d) Son identicos, solo cambia el nombre

<details>
<summary>Respuesta</summary>

**/dev/random bloquea si no hay suficiente entropia, /dev/urandom nunca bloquea**

`/dev/random` genera numeros aleatorios criptograficamente seguros pero puede bloquearse si el pool de entropia del kernel esta agotado. `/dev/urandom` nunca bloquea y reutiliza el pool interno, siendo suficiente para la mayoria de usos. En kernels Linux modernos (5.6+), ambos son practicamente equivalentes en seguridad.

</details>

---

### Pregunta 36

Que muestra el comando `lsmod` y a que archivo de /proc es equivalente?

<details>
<summary>Respuesta</summary>

**lsmod muestra los modulos del kernel cargados y es equivalente a leer /proc/modules**

`lsmod` formatea el contenido de `/proc/modules` mostrando tres columnas: nombre del modulo, tamano en bytes y lista de modulos que dependen de el (Used by). Es una herramienta de solo lectura que no carga ni descarga modulos. Para buscar un modulo especifico se puede combinar con grep: `lsmod | grep ext4`.

</details>

---

### Pregunta 37

Que subdirectorios principales contiene /sys y como se relacionan entre si?

<details>
<summary>Respuesta</summary>

**/sys contiene bus/, class/, devices/, firmware/, module/ y power/**

`/sys/bus/` organiza dispositivos por tipo de bus (pci, usb, scsi). `/sys/class/` los agrupa por funcion (net, input, sound, block). `/sys/devices/` contiene el arbol fisico real de todos los dispositivos. Los directorios en `/sys/bus/` y `/sys/class/` contienen enlaces simbolicos que apuntan a `/sys/devices/`. `/sys/module/` muestra informacion de los modulos cargados. `/sys/firmware/` expone interfaces del firmware (ACPI, EFI).

</details>

---

### Pregunta 38

Que es Secure Boot y que firmware lo soporta?

a) Es una funcion de BIOS que cifra el disco duro
b) Es una funcion de UEFI que verifica la firma digital de los cargadores de arranque
c) Es un modo de arranque seguro disponible en BIOS y UEFI
d) Es un sistema de autenticacion de usuarios al arrancar

<details>
<summary>Respuesta</summary>

**Es una funcion de UEFI que verifica la firma digital de los cargadores de arranque**

Secure Boot es una caracteristica exclusiva de UEFI (no disponible en BIOS) que verifica las firmas digitales de los cargadores de arranque y drivers antes de ejecutarlos. Esto previene la ejecucion de software no autorizado durante el arranque. Algunas distribuciones Linux requieren desactivar Secure Boot si no tienen un cargador firmado.

</details>

---

### Pregunta 39

Como se identifican los discos y particiones en /dev para discos SATA/SCSI y para discos NVMe?

<details>
<summary>Respuesta</summary>

**SATA/SCSI usan /dev/sdX y NVMe usan /dev/nvmeXnY**

Los discos SATA y SCSI se nombran `/dev/sda`, `/dev/sdb`, etc. Sus particiones son `/dev/sda1`, `/dev/sda2`. Los discos NVMe usan el formato `/dev/nvme0n1` (controlador 0, namespace 1), con particiones `/dev/nvme0n1p1`, `/dev/nvme0n1p2`. Los lectores de CD/DVD son `/dev/sr0`. Se pueden listar todos con `lsblk`.

</details>

---

### Pregunta 40

Que diferencia hay entre /etc/modprobe.d/ y /etc/modules-load.d/ respecto a la gestion de modulos del kernel?

a) Son lo mismo, solo cambia el nombre segun la distribucion
b) /etc/modprobe.d/ configura opciones y blacklists, /etc/modules-load.d/ lista modulos a cargar al arrancar
c) /etc/modules-load.d/ es para blacklists y /etc/modprobe.d/ carga modulos
d) Ambos cargan modulos automaticamente al arrancar

<details>
<summary>Respuesta</summary>

**/etc/modprobe.d/ configura opciones y blacklists, /etc/modules-load.d/ lista modulos a cargar al arrancar**

`/etc/modprobe.d/` contiene archivos `.conf` con directivas como `blacklist modulo`, `options modulo param=valor` y `alias nombre modulo`. NO carga modulos por si solo. `/etc/modules-load.d/` (systemd) y `/etc/modules` (Debian) son los que listan modulos para cargar automaticamente durante el arranque. Esta es una trampa habitual del examen.

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
