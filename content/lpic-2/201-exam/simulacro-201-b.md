---
title: "Simulacro Examen 201 - B"
tags:
  - lpic-2
  - examen-201
  - simulacro
tipo: simulacro
certificacion: lpic-2
examen: "201"
---

# Simulacro B - Examen 201

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="201-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="200.1" data-correct="b">

### Pregunta 1 (Subtema 200.1)

Un administrador ejecuta `vmstat 5 3` en un servidor. La columna `si` muestra valores constantemente altos (por encima de 5000). ¿Que indica esta situacion?

- [ ] a) Hay un alto volumen de interrupciones del sistema
- [ ] b) El sistema esta leyendo frecuentemente datos desde el swap hacia la RAM (swap in)
- [ ] c) El sistema esta escribiendo datos de la RAM al swap (swap out)
- [ ] d) Hay un elevado numero de cambios de contexto entre procesos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) El sistema esta leyendo frecuentemente datos desde el swap hacia la RAM (swap in)**

En la salida de `vmstat`, la columna `si` (swap in) indica la cantidad de memoria (en KB/s) que se esta moviendo desde el espacio swap de vuelta a la RAM. Valores altos sostenidos indican que el sistema no tiene suficiente RAM y continuamente necesita recuperar paginas del swap, lo cual impacta severamente el rendimiento. La columna `so` seria swap out (de RAM a swap).

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="200.1" data-correct="d">

### Pregunta 2 (Subtema 200.1)

Un administrador observa la salida de `iostat -x 1` y ve que el campo `%util` de `/dev/sda` esta constantemente al 98%. ¿Que significa esto?

- [ ] a) El disco esta utilizando el 98% de su capacidad de almacenamiento
- [ ] b) El 98% de las operaciones de E/S son de lectura
- [ ] c) El disco tiene un 98% de eficiencia en cache
- [ ] d) El disco esta ocupado procesando solicitudes de E/S el 98% del tiempo, indicando un posible cuello de botella

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) El disco esta ocupado procesando solicitudes de E/S el 98% del tiempo, indicando un posible cuello de botella**

El campo `%util` de `iostat -x` representa el porcentaje de tiempo que el dispositivo estuvo ocupado atendiendo solicitudes de E/S. Un valor cercano al 100% indica saturacion del disco, es decir, que practicamente no tiene tiempo ocioso. Esto es un indicador claro de cuello de botella de E/S. No se refiere a la capacidad de almacenamiento ni a la proporcion de lecturas/escrituras.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="200.1" data-correct="a">

### Pregunta 3 (Subtema 200.1)

¿Que columna de la salida de `top` indica el porcentaje de tiempo que un proceso ha estado en estado de espera involuntaria por E/S de disco?

- [ ] a) `%wa` en la linea de resumen de CPU
- [ ] b) `%MEM` en la lista de procesos
- [ ] c) `VIRT` en la lista de procesos
- [ ] d) `NI` en la lista de procesos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `%wa` en la linea de resumen de CPU**

En la linea de resumen de CPU de `top`, el campo `%wa` (wait) indica el porcentaje de tiempo que la CPU estuvo ociosa esperando la finalizacion de operaciones de E/S de disco. Un valor alto de `%wa` sugiere que los procesos estan bloqueados esperando datos del disco, lo que apunta a un cuello de botella en el subsistema de almacenamiento. `%MEM` es uso de RAM, `VIRT` es memoria virtual total, y `NI` es el valor nice del proceso.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="200.2" data-correct="c">

### Pregunta 4 (Subtema 200.2)

Un administrador utiliza `sar -n DEV 1 5` en un servidor. ¿Que tipo de informacion proporciona este comando?

- [ ] a) Estadisticas de uso de CPU desglosadas por nucleo
- [ ] b) Estadisticas de uso de memoria y swap
- [ ] c) Estadisticas de trafico de red por interfaz (paquetes y bytes enviados/recibidos)
- [ ] d) Estadisticas de uso de inodos por sistema de archivos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Estadisticas de trafico de red por interfaz (paquetes y bytes enviados/recibidos)**

La opcion `-n DEV` de `sar` muestra estadisticas de las interfaces de red, incluyendo paquetes por segundo recibidos (`rxpck/s`) y transmitidos (`txpck/s`), bytes por segundo (`rxkB/s`, `txkB/s`) y errores. El parametro `1 5` indica muestreo cada 1 segundo durante 5 intervalos. Para CPU se usa `-u` o `-P ALL`, para memoria `-r`, y para inodos no se usa `sar` directamente.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="200.2" data-correct="b">

### Pregunta 5 (Subtema 200.2)

Un administrador necesita generar un informe grafico de tendencias de uso de recursos del sistema a lo largo de las ultimas semanas. ¿Que combinacion de herramientas es la mas adecuada?

- [ ] a) `top` y `gnuplot`
- [ ] b) `collectd` con plugin rrdtool y una interfaz como Cacti o Grafana
- [ ] c) `vmstat` redirigido a un archivo y `cat` para revisarlo
- [ ] d) `dmesg` y un editor de texto

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `collectd` con plugin rrdtool y una interfaz como Cacti o Grafana**

Para la monitorizacion a largo plazo y la generacion de graficos de tendencias, se necesita un sistema que recopile datos de forma continua, los almacene eficientemente y permita visualizacion. `collectd` recopila metricas periodicamente y puede almacenarlas en bases de datos RRD. Herramientas como Cacti, Grafana o MRTG visualizan estas metricas en graficos historicos. `top` y `vmstat` son herramientas interactivas o de corto plazo, no diseñadas para almacenamiento historico.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="200.2" data-correct="a">

### Pregunta 6 (Subtema 200.2)

¿Que herramienta del paquete sysstat permite obtener un informe consolidado de todas las metricas del sistema recogidas durante un dia completo?

- [ ] a) `sar -A -f /var/log/sysstat/sa15`
- [ ] b) `sadc --report /var/log/sysstat/sa15`
- [ ] c) `sysstat --full-report`
- [ ] d) `iostat -A -f /var/log/sysstat/sa15`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `sar -A -f /var/log/sysstat/sa15`**

La opcion `-A` de `sar` equivale a activar todas las opciones de reporte disponibles (CPU, memoria, disco, red, etc.) en un solo comando. Combinada con `-f` para leer desde un archivo de datos historico, proporciona un informe completo del dia. `sadc` es el recopilador de datos (no genera informes), `sysstat` no es un comando ejecutable, y `iostat` no soporta las opciones `-A` ni `-f` de esa forma.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="201.1" data-correct="c">

### Pregunta 7 (Subtema 201.1)

Un administrador quiere compilar el kernel con una configuracion que parte de los valores por defecto definidos por los desarrolladores para su arquitectura. ¿Que target de `make` debe utilizar?

- [ ] a) `make menuconfig`
- [ ] b) `make oldconfig`
- [ ] c) `make defconfig`
- [ ] d) `make allmodconfig`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `make defconfig`**

`make defconfig` genera un archivo `.config` con los valores por defecto recomendados para la arquitectura actual, tal como fueron definidos por los desarrolladores del kernel. `make menuconfig` abre la interfaz interactiva de configuracion. `make oldconfig` usa un `.config` existente y pregunta solo por las opciones nuevas. `make allmodconfig` activa todas las opciones posibles como modulos, lo que resulta en una compilacion extremadamente grande.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="201.1" data-correct="b">

### Pregunta 8 (Subtema 201.1)

Despues de compilar el kernel con `make`, ¿que comando instala los modulos compilados en el directorio correcto bajo `/lib/modules/`?

- [ ] a) `make install`
- [ ] b) `make modules_install`
- [ ] c) `make modules_copy`
- [ ] d) `cp -r modules/ /lib/modules/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `make modules_install`**

`make modules_install` copia los modulos compilados al directorio `/lib/modules/<version>/` y ejecuta `depmod` automaticamente para generar las dependencias. `make install` instala la imagen del kernel, el System.map y la configuracion en `/boot/`, pero no los modulos. El orden correcto es primero `make modules_install` y luego `make install`.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="201.1" data-correct="d">

### Pregunta 9 (Subtema 201.1)

Un administrador aplica un parche al codigo fuente del kernel con `patch -p1 < fix-security.patch` desde el directorio raiz del fuente. El parche falla en algunos archivos. ¿Que opcion de `patch` permite revertir un parche ya aplicado?

- [ ] a) `patch --undo < fix-security.patch`
- [ ] b) `patch -p1 --rollback < fix-security.patch`
- [ ] c) `patch -p1 --remove < fix-security.patch`
- [ ] d) `patch -R -p1 < fix-security.patch`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `patch -R -p1 < fix-security.patch`**

La opcion `-R` (reverse) de `patch` revierte un parche previamente aplicado, intercambiando las secciones "old" y "new" del parche. Esto es esencial cuando un parche causa problemas y necesita deshacerse. La opcion `-p1` sigue siendo necesaria para eliminar el primer componente de la ruta en el archivo de parche. Las opciones `--undo`, `--rollback` y `--remove` no existen en el comando `patch`.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="201.2" data-correct="a">

### Pregunta 10 (Subtema 201.2)

Un administrador necesita compilar e instalar un kernel personalizado en un sistema basado en Debian. ¿Que herramienta especifica de Debian genera un paquete `.deb` del kernel compilado?

- [ ] a) `make-kpkg` o `make bindeb-pkg`
- [ ] b) `dpkg-kernel --build`
- [ ] c) `apt-build kernel`
- [ ] d) `dkms build`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `make-kpkg` o `make bindeb-pkg`**

En Debian/Ubuntu, `make-kpkg` (del paquete `kernel-package`) es la herramienta clasica para compilar el kernel y generar paquetes `.deb` instalables con `dpkg`. En kernels modernos, `make bindeb-pkg` (o `make deb-pkg`) es el metodo integrado que genera paquetes `.deb` directamente desde el sistema de compilacion del kernel. `dkms` es para modulos de terceros, no para el kernel completo.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="201.2" data-correct="c">

### Pregunta 11 (Subtema 201.2)

Un administrador ha actualizado el kernel y necesita generar la imagen initramfs para la nueva version. ¿Que comando es el mas adecuado en un sistema basado en Debian?

- [ ] a) `dracut --regenerate-all`
- [ ] b) `mkinitrd /boot/initrd-5.15.0.img 5.15.0`
- [ ] c) `update-initramfs -c -k 5.15.0`
- [ ] d) `initramfs-tools --create 5.15.0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `update-initramfs -c -k 5.15.0`**

En sistemas Debian/Ubuntu, `update-initramfs` es la herramienta estandar para gestionar imagenes initramfs. La opcion `-c` crea una nueva imagen y `-k` especifica la version del kernel. Para actualizar una existente se usa `-u`. `dracut` es la herramienta equivalente en Red Hat/Fedora. `mkinitrd` es una herramienta obsoleta que fue reemplazada por `mkinitramfs` y `update-initramfs`.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="201.2" data-correct="b">

### Pregunta 12 (Subtema 201.2)

¿Que archivo de configuracion utiliza `dracut` para definir los modulos y opciones que se incluyen en la imagen initramfs?

- [ ] a) `/etc/initramfs-tools/modules`
- [ ] b) `/etc/dracut.conf` y archivos en `/etc/dracut.conf.d/`
- [ ] c) `/etc/mkinitcpio.conf`
- [ ] d) `/boot/initramfs.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/dracut.conf` y archivos en `/etc/dracut.conf.d/`**

`dracut` (usado en Red Hat, Fedora, SUSE) lee su configuracion principal de `/etc/dracut.conf` y de archivos `.conf` dentro de `/etc/dracut.conf.d/`. En estos archivos se pueden especificar modulos adicionales, drivers a incluir, opciones de compresion, etc. La opcion a) es para `initramfs-tools` de Debian, y la opcion c) es para `mkinitcpio` de Arch Linux.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="201.3" data-correct="d">

### Pregunta 13 (Subtema 201.3)

Un administrador ejecuta `lsmod` y observa que el modulo `nf_conntrack` tiene un valor de `Used by` superior a 0. ¿Que implica esto si intenta eliminarlo con `rmmod`?

- [ ] a) El modulo se eliminara correctamente tras una confirmacion
- [ ] b) El modulo se descargara forzosamente junto con sus dependientes
- [ ] c) El modulo se marcara para descarga en el proximo reinicio
- [ ] d) `rmmod` fallara con un error indicando que el modulo esta en uso

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `rmmod` fallara con un error indicando que el modulo esta en uso**

`rmmod` no puede descargar un modulo que tiene un conteo de uso mayor que 0, lo que significa que otros modulos dependen de el o esta siendo utilizado activamente. A diferencia de `modprobe -r`, que intenta descargar tambien los modulos dependientes de forma automatica, `rmmod` solo trabaja con el modulo especificado. Para descargarlo, primero habria que descargar todos los modulos que dependen de el.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="201.3" data-correct="a">

### Pregunta 14 (Subtema 201.3)

¿Que archivo dentro del arbol de modulos del kernel contiene la lista de alias que mapean identificadores de hardware (como PCI IDs) a modulos del kernel?

- [ ] a) `modules.alias`
- [ ] b) `modules.dep`
- [ ] c) `modules.symbols`
- [ ] d) `modules.pcimap`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `modules.alias`**

El archivo `modules.alias` (ubicado en `/lib/modules/<version>/`) contiene mapeos entre identificadores de hardware (como IDs PCI, USB, ACPI) y los nombres de los modulos que los soportan. Cuando el kernel detecta un dispositivo, udev usa estos alias para cargar automaticamente el modulo correcto mediante `modprobe`. `modules.dep` contiene dependencias entre modulos, y `modules.symbols` lista los simbolos exportados por cada modulo.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="201.3" data-correct="c">

### Pregunta 15 (Subtema 201.3)

Un administrador quiere evitar que el modulo `nouveau` se cargue automaticamente en el sistema. ¿Que directiva debe usar en un archivo dentro de `/etc/modprobe.d/`?

- [ ] a) `deny nouveau`
- [ ] b) `disable nouveau`
- [ ] c) `blacklist nouveau`
- [ ] d) `exclude nouveau`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `blacklist nouveau`**

La directiva `blacklist` en archivos de `/etc/modprobe.d/` impide que un modulo se cargue automaticamente por su alias de hardware. Sin embargo, el modulo aun puede cargarse explicitamente con `modprobe nouveau` o si otro modulo lo solicita como dependencia. Para un bloqueo mas completo, se puede combinar con `install nouveau /bin/false`, que reemplaza el comando de carga por uno que no hace nada. Las opciones `deny`, `disable` y `exclude` no son directivas validas de modprobe.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="202.1" data-correct="b">

### Pregunta 16 (Subtema 202.1)

Un administrador necesita arrancar el sistema en un target especifico de systemd de forma temporal (solo para el proximo arranque). ¿Que parametro del kernel debe agregar en la linea de GRUB?

- [ ] a) `runlevel=emergency`
- [ ] b) `systemd.unit=multi-user.target`
- [ ] c) `target=multi-user`
- [ ] d) `init.target=multi-user.target`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `systemd.unit=multi-user.target`**

El parametro del kernel `systemd.unit=` permite especificar el target en el que systemd debe arrancar. Este cambio es temporal y solo afecta al arranque actual. Para hacerlo permanente, se usaria `systemctl set-default <target>`, que modifica el enlace simbolico `/etc/systemd/system/default.target`. Las opciones `runlevel=`, `target=` e `init.target=` no son parametros validos del kernel para systemd.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="202.1" data-correct="a">

### Pregunta 17 (Subtema 202.1)

En GRUB 2, ¿que variable en `/etc/default/grub` define los parametros del kernel que se pasan en la linea `linux` de todas las entradas de arranque?

- [ ] a) `GRUB_CMDLINE_LINUX`
- [ ] b) `GRUB_KERNEL_PARAMS`
- [ ] c) `GRUB_BOOT_OPTIONS`
- [ ] d) `GRUB_LINUX_ARGS`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `GRUB_CMDLINE_LINUX`**

`GRUB_CMDLINE_LINUX` define parametros que se aplican a TODAS las entradas del menu (tanto normales como de recuperacion). Existe tambien `GRUB_CMDLINE_LINUX_DEFAULT`, que solo aplica a las entradas normales (no de recuperacion). Ambas variables se combinan en la linea `linux` del `grub.cfg` generado. Las opciones b), c) y d) no son variables validas de GRUB.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="202.1" data-correct="d">

### Pregunta 18 (Subtema 202.1)

Escriba el comando que permite verificar la configuracion de GRUB y listar las entradas de arranque disponibles sin generar un nuevo `grub.cfg`.

- [ ] a) `grub-mkconfig --check`
- [ ] b) `grub-install --list`
- [ ] c) `grub-editenv list`
- [ ] d) `awk '/menuentry/ {print}' /boot/grub/grub.cfg`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `awk '/menuentry/ {print}' /boot/grub/grub.cfg`**

Para listar las entradas de arranque disponibles en GRUB 2, se puede examinar directamente el archivo `grub.cfg` filtrando las lineas `menuentry`. Tambien se puede usar `grep -E "^menuentry" /boot/grub/grub.cfg` o en algunos sistemas `grub-mkconfig` sin `-o` para ver la salida generada sin escribirla. `grub-editenv list` muestra las variables del entorno GRUB (como `saved_entry`), no las entradas del menu.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="202.2" data-correct="c">

### Pregunta 19 (Subtema 202.2)

Un administrador necesita acceder a un sistema Linux que no arranca. Ha iniciado desde un Live CD y ha montado la particion raiz en `/mnt/sysroot`. ¿Cual es el comando correcto para montar el sistema de archivos `/proc` dentro del entorno chroot?

- [ ] a) `cp -r /proc /mnt/sysroot/proc`
- [ ] b) `mount /proc /mnt/sysroot/proc`
- [ ] c) `mount -t proc proc /mnt/sysroot/proc`
- [ ] d) `ln -s /proc /mnt/sysroot/proc`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mount -t proc proc /mnt/sysroot/proc`**

Para montar `/proc` dentro de un entorno chroot, se usa `mount -t proc proc <punto_de_montaje>`, especificando el tipo de sistema de archivos (`-t proc`). `/proc` es un sistema de archivos virtual que el kernel genera dinamicamente; no se puede copiar ni enlazar simbolicamente. De forma similar, `/sys` se monta con `mount -t sysfs sysfs /mnt/sysroot/sys` y `/dev` con `mount --bind /dev /mnt/sysroot/dev`.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="202.2" data-correct="a">

### Pregunta 20 (Subtema 202.2)

Despues de una actualizacion fallida, el sistema entra en modo de emergencia. El administrador descubre que `/etc/fstab` tiene una entrada incorrecta para una particion que ya no existe. ¿Cual es la forma mas rapida de solucionar el problema desde el shell de emergencia?

- [ ] a) Remontar raiz en lectura-escritura con `mount -o remount,rw /`, editar `/etc/fstab`, y reiniciar
- [ ] b) Ejecutar `fsck -A` para reparar todos los sistemas de archivos
- [ ] c) Ejecutar `systemctl restart fstab`
- [ ] d) Borrar `/etc/fstab` y reiniciar para que se regenere automaticamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Remontar raiz en lectura-escritura con `mount -o remount,rw /`, editar `/etc/fstab`, y reiniciar**

En el modo de emergencia, el sistema de archivos raiz suele estar montado en solo lectura. Para poder editar archivos, primero se debe remontar en modo lectura-escritura con `mount -o remount,rw /`. Luego se puede editar `/etc/fstab` con `vi` o `nano` para corregir o eliminar la entrada problematica. Finalmente se reinicia. `fsck -A` no corrige errores de configuracion en `fstab`, y `/etc/fstab` no se regenera automaticamente.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="202.2" data-correct="b">

### Pregunta 21 (Subtema 202.2)

Escriba el comando que permite verificar la integridad del bootloader GRUB instalado en el sector de arranque del disco `/dev/sda`.

- [ ] a) `grub-check /dev/sda`
- [ ] b) `dd if=/dev/sda bs=512 count=1 | xxd | head`
- [ ] c) `grub-verify --disk /dev/sda`
- [ ] d) `fsck.grub /dev/sda`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dd if=/dev/sda bs=512 count=1 | xxd | head`**

No existe un comando especifico de GRUB para verificar su integridad en el disco. El metodo practico es examinar los primeros 512 bytes del disco (el MBR) usando `dd` y visualizarlos con `xxd` u `od`. Se puede buscar la firma de GRUB (la cadena "GRUB" o "GRUB ") en los datos. La firma de arranque valida `0x55AA` debe estar en los bytes 510-511. Los comandos `grub-check`, `grub-verify` y `fsck.grub` no existen.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="202.3" data-correct="a">

### Pregunta 22 (Subtema 202.3)

En un entorno PXE, ¿que protocolo utiliza el cliente para descargar el archivo de arranque (bootloader) del servidor despues de obtener su configuracion de red via DHCP?

- [ ] a) TFTP
- [ ] b) FTP
- [ ] c) HTTP
- [ ] d) NFS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) TFTP**

En la cadena de arranque PXE clasica, el cliente DHCP recibe la direccion IP del servidor TFTP y el nombre del archivo de arranque (como `pxelinux.0`) en las opciones DHCP `next-server` y `filename`. Luego descarga ese archivo usando TFTP (Trivial File Transfer Protocol), que es un protocolo simple sin autenticacion que opera en el puerto UDP 69. Implementaciones mas modernas como iPXE pueden usar HTTP, pero el PXE estandar usa TFTP.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="202.3" data-correct="c">

### Pregunta 23 (Subtema 202.3)

¿Que tipo de dispositivo de destino utiliza el Device Tree (DTB) en sistemas embebidos ARM con Linux?

- [ ] a) Describe las particiones del disco duro
- [ ] b) Define la configuracion de red del dispositivo
- [ ] c) Describe el hardware de la plataforma al kernel para que sepa que perifericos y buses existen
- [ ] d) Almacena las credenciales de acceso al firmware UEFI

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Describe el hardware de la plataforma al kernel para que sepa que perifericos y buses existen**

El Device Tree Blob (DTB) es una estructura de datos que describe el hardware de una plataforma: buses, controladores de memoria, GPIOs, UARTs, controladores de interrupciones y otros perifericos. En arquitecturas ARM (a diferencia de x86 con ACPI), el hardware no siempre es auto-detectable, por lo que el kernel necesita el DTB para saber que dispositivos existen y como acceder a ellos. El bootloader (como U-Boot) carga el DTB y lo pasa al kernel durante el arranque.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="202.3" data-correct="d">

### Pregunta 24 (Subtema 202.3)

¿Que opcion de DHCP se utiliza para indicar al cliente PXE la direccion IP del servidor TFTP donde se encuentra el archivo de arranque?

- [ ] a) `option routers`
- [ ] b) `option domain-name-servers`
- [ ] c) `option broadcast-address`
- [ ] d) `next-server`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `next-server`**

En la configuracion del servidor DHCP (como ISC DHCP), la directiva `next-server` especifica la direccion IP del servidor TFTP que contiene los archivos de arranque PXE. Se combina con la directiva `filename` que indica el nombre del archivo bootloader (por ejemplo, `pxelinux.0`). `option routers` define la puerta de enlace, `option domain-name-servers` los DNS, y `option broadcast-address` la direccion de broadcast.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="203.1" data-correct="b">

### Pregunta 25 (Subtema 203.1)

Un administrador necesita montar manualmente un sistema de archivos Btrfs que tiene multiples dispositivos (RAID). ¿Que comando debe ejecutar primero para que el kernel reconozca todos los dispositivos del volumen?

- [ ] a) `mdadm --assemble --scan`
- [ ] b) `btrfs device scan`
- [ ] c) `mount -t btrfs /dev/sda1 /mnt`
- [ ] d) `btrfs filesystem show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `btrfs device scan`**

Cuando un volumen Btrfs abarca multiples dispositivos, el kernel necesita conocer todos los dispositivos que forman parte del volumen antes de poder montarlo. `btrfs device scan` examina todos los dispositivos de bloque y registra los que contienen datos Btrfs, permitiendo que el kernel ensamble correctamente los volumenes multi-dispositivo. Despues de ejecutar el scan, se puede montar usando cualquiera de los dispositivos del volumen. `mdadm` es para RAID de software (md), no para RAID nativo de Btrfs.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="203.1" data-correct="d">

### Pregunta 26 (Subtema 203.1)

¿Que opcion de montaje en `/etc/fstab` indica que el sistema de archivos no debe montarse automaticamente durante el arranque, pero si permite montarlo manualmente con `mount /punto`?

- [ ] a) `auto`
- [ ] b) `defaults`
- [ ] c) `user`
- [ ] d) `noauto`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `noauto`**

La opcion `noauto` en `/etc/fstab` evita que el sistema de archivos se monte automaticamente al ejecutar `mount -a` (que ocurre durante el arranque). Sin embargo, la entrada sigue siendo util porque permite montar el sistema de archivos simplemente especificando el punto de montaje: `mount /punto`, ya que `mount` leera las opciones y el dispositivo de `/etc/fstab`. `auto` (incluido en `defaults`) indica montaje automatico.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="203.1" data-correct="a">

### Pregunta 27 (Subtema 203.1)

Escriba el comando que crea un sistema de archivos ext4 con un porcentaje de bloques reservados del 1% (en lugar del 5% por defecto) en `/dev/sdb1`.

- [ ] a) `mkfs.ext4 -m 1 /dev/sdb1`
- [ ] b) `mkfs.ext4 -r 1% /dev/sdb1`
- [ ] c) `mkfs.ext4 --reserved=1 /dev/sdb1`
- [ ] d) `tune2fs -m 1 /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `mkfs.ext4 -m 1 /dev/sdb1`**

La opcion `-m` de `mkfs.ext4` establece el porcentaje de bloques reservados para el superusuario. Por defecto es 5%, lo cual puede representar un desperdicio significativo en discos grandes usados para datos. Con `-m 1` se reduce al 1%. La opcion d) `tune2fs -m 1` tambien puede cambiar este valor en un sistema de archivos ya creado, pero la pregunta pide el comando durante la creacion. Las opciones `-r` y `--reserved=` no son validas para `mkfs.ext4`.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="203.2" data-correct="c">

### Pregunta 28 (Subtema 203.2)

Un administrador ejecuta `tune2fs -c 30 /dev/sda2` en una particion ext4. ¿Que efecto tiene este comando?

- [ ] a) Establece el tamano de cache del sistema de archivos en 30 MB
- [ ] b) Cambia el conteo de bloques a 30
- [ ] c) Configura que se fuerce una verificacion automatica del FS cada 30 montajes
- [ ] d) Limita el numero de inodos a 30 millones

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Configura que se fuerce una verificacion automatica del FS cada 30 montajes**

La opcion `-c` de `tune2fs` establece el numero maximo de montajes entre verificaciones automaticas del sistema de archivos con `fsck`. Al alcanzar los 30 montajes, el siguiente arranque ejecutara una verificacion forzada. Esto se complementa con `-i` que establece un intervalo temporal maximo entre verificaciones. Para desactivar la verificacion por conteo de montajes, se usa `-c 0` o `-c -1`.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="203.2" data-correct="a">

### Pregunta 29 (Subtema 203.2)

Un administrador necesita desfragmentar un sistema de archivos XFS montado. ¿Que comando debe utilizar?

- [ ] a) `xfs_fsr`
- [ ] b) `e4defrag`
- [ ] c) `xfs_defrag`
- [ ] d) `defrag -t xfs`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `xfs_fsr`**

`xfs_fsr` (XFS Filesystem Reorganizer) es la herramienta especifica para desfragmentar sistemas de archivos XFS. Reorganiza los archivos fragmentados moviendo sus extents para que sean contiguos. Puede ejecutarse sobre un sistema de archivos montado sin necesidad de desmontarlo. `e4defrag` es para ext4, no para XFS. `xfs_defrag` y `defrag -t xfs` no son comandos validos.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="203.2" data-correct="b">

### Pregunta 30 (Subtema 203.2)

Escriba el comando para crear una copia de seguridad (dump) completa de un sistema de archivos XFS montado en `/datos` hacia un archivo.

- [ ] a) `xfs_backup /datos /backup/datos.dump`
- [ ] b) `xfsdump -l 0 -f /backup/datos.dump /datos`
- [ ] c) `dump -0 -f /backup/datos.dump /datos`
- [ ] d) `tar -czf /backup/datos.dump /datos`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `xfsdump -l 0 -f /backup/datos.dump /datos`**

`xfsdump` es la herramienta nativa de copia de seguridad para XFS. La opcion `-l 0` indica un dump de nivel 0 (completo, sin incrementalidad). La opcion `-f` especifica el archivo de destino. El ultimo argumento es el punto de montaje del sistema de archivos. `xfsdump` soporta niveles incrementales del 0 al 9 y se restaura con `xfsrestore`. El comando `dump` es para ext2/3/4, no para XFS.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="203.3" data-correct="a">

### Pregunta 31 (Subtema 203.3)

¿Que opcion de montaje habilita las ACL (Access Control Lists) POSIX en un sistema de archivos ext4 si no estan habilitadas por defecto?

- [ ] a) `acl`
- [ ] b) `posix_acl`
- [ ] c) `enable_acl`
- [ ] d) `xattr`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `acl`**

La opcion de montaje `acl` habilita las listas de control de acceso POSIX en el sistema de archivos. Se puede especificar en `/etc/fstab` o al montar manualmente: `mount -o acl /dev/sda1 /mnt`. En muchas distribuciones modernas con ext4, las ACL estan habilitadas por defecto (opcion `default_mount_options` en el superbloque). Para verificarlo, se puede usar `tune2fs -l /dev/sda1 | grep "Default mount options"`. La opcion `xattr` habilita atributos extendidos, que son un prerequisito para ACL pero no las habilitan directamente.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="203.3" data-correct="c">

### Pregunta 32 (Subtema 203.3)

Un administrador necesita crear un sistema de archivos que se almacene completamente en RAM con un limite de 512 MB. ¿Que linea en `/etc/fstab` es correcta?

- [ ] a) `ramfs /tmp/ram ramfs size=512M 0 0`
- [ ] b) `ramdisk /tmp/ram ext4 size=512M 0 0`
- [ ] c) `tmpfs /tmp/ram tmpfs size=512M,nodev,nosuid 0 0`
- [ ] d) `shmfs /tmp/ram tmpfs maxsize=512M 0 0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `tmpfs /tmp/ram tmpfs size=512M,nodev,nosuid 0 0`**

La sintaxis correcta para montar un tmpfs en `/etc/fstab` es: `tmpfs <punto_montaje> tmpfs <opciones> 0 0`. La opcion `size=512M` limita el tamano maximo. A diferencia de tmpfs, `ramfs` no tiene opcion de limite de tamano (crece indefinidamente hasta agotar la RAM), lo que hace la opcion a) incorrecta funcionalmente. Las opciones `nodev` y `nosuid` se añaden por seguridad.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="203.3" data-correct="b">

### Pregunta 33 (Subtema 203.3)

¿Que tipo de sistema de archivos se utiliza para la particion EFI System Partition (ESP) en sistemas con arranque UEFI?

- [ ] a) ext4
- [ ] b) FAT32 (vfat)
- [ ] c) NTFS
- [ ] d) XFS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) FAT32 (vfat)**

La especificacion UEFI requiere que la particion ESP (EFI System Partition) utilice el sistema de archivos FAT32 (tipo vfat en Linux). Esto garantiza la compatibilidad entre todos los firmwares UEFI independientemente del sistema operativo. En `/etc/fstab`, se monta tipicamente en `/boot/efi` con tipo `vfat`. La ESP contiene los cargadores de arranque (como `shimx64.efi`, `grubx64.efi`) y las variables de arranque del firmware.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="204.1" data-correct="c">

### Pregunta 34 (Subtema 204.1)

Un administrador observa en `/proc/mdstat` que un array RAID 1 muestra `[U_]`. ¿Que significa esta salida?

- [ ] a) Ambos discos estan activos y funcionando correctamente
- [ ] b) El array esta siendo reconstruido
- [ ] c) Un disco del array ha fallado o esta ausente y el array opera en modo degradado
- [ ] d) El array esta pausado para mantenimiento

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Un disco del array ha fallado o esta ausente y el array opera en modo degradado**

En `/proc/mdstat`, cada caracter dentro de los corchetes `[]` representa un dispositivo del array. `U` (Up) significa que el dispositivo esta activo y funcional, mientras que `_` indica que el dispositivo ha fallado o no esta presente. `[U_]` en un RAID 1 de dos discos significa que solo un disco esta operativo. El array sigue funcionando pero sin redundancia. El administrador debe reemplazar el disco fallido lo antes posible.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="204.1" data-correct="d">

### Pregunta 35 (Subtema 204.1)

¿Que archivo de configuracion debe actualizarse despues de crear o modificar un array RAID por software para que se ensamble correctamente en el proximo arranque?

- [ ] a) `/etc/raid.conf`
- [ ] b) `/etc/mdstat.conf`
- [ ] c) `/etc/fstab`
- [ ] d) `/etc/mdadm/mdadm.conf` o `/etc/mdadm.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `/etc/mdadm/mdadm.conf` o `/etc/mdadm.conf`**

El archivo `mdadm.conf` contiene las definiciones de los arrays RAID para que `mdadm` pueda ensamblarlos automaticamente al arrancar. Se actualiza tipicamente ejecutando `mdadm --detail --scan >> /etc/mdadm/mdadm.conf`. Sin este archivo correctamente configurado, los arrays podrian no ensamblarse en el orden correcto o con los nombres esperados. `/etc/fstab` define donde montar el array, pero no como ensamblarlo.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="204.1" data-correct="a">

### Pregunta 36 (Subtema 204.1)

Escriba el comando para crear un array RAID 10 con 4 discos usando mdadm.

- [ ] a) `mdadm --create /dev/md0 --level=10 --raid-devices=4 /dev/sd[b-e]1`
- [ ] b) `mdadm --create /dev/md0 --level=1+0 --raid-devices=4 /dev/sd[b-e]1`
- [ ] c) `mdadm --assemble /dev/md0 --level=10 /dev/sd[b-e]1`
- [ ] d) `mdadm --build /dev/md0 --level=raid10 --devices=4 /dev/sd[b-e]1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `mdadm --create /dev/md0 --level=10 --raid-devices=4 /dev/sd[b-e]1`**

El comando `mdadm --create` con `--level=10` crea un array RAID 10 (mirror+stripe) que requiere un minimo de 4 discos. El nivel se especifica como `10`, no como `1+0`. `--raid-devices=4` indica el numero de dispositivos activos. `--assemble` es para reensamblar un array existente, no para crear uno nuevo. `--build` es para crear arrays sin superbloque y `--level=raid10` no es una especificacion valida del nivel.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="204.2" data-correct="a">

### Pregunta 37 (Subtema 204.2)

Un administrador necesita configurar multipath para usar round-robin como politica de balanceo de carga. ¿En que archivo se realiza esta configuracion?

- [ ] a) `/etc/multipath.conf`
- [ ] b) `/etc/multipathd/policy.conf`
- [ ] c) `/etc/dm-multipath.conf`
- [ ] d) `/etc/scsi/multipath.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/etc/multipath.conf`**

La configuracion de multipath se realiza en `/etc/multipath.conf`. En la seccion `defaults` o `devices` se puede establecer `path_selector "round-robin 0"` para la politica de balanceo. El archivo permite definir secciones como `defaults`, `blacklist`, `blacklist_exceptions`, `devices` y `multipaths` para configurar el comportamiento global y por dispositivo. Despues de modificar el archivo, se debe reiniciar el servicio `multipathd`.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="204.2" data-correct="c">

### Pregunta 38 (Subtema 204.2)

Escriba el comando para descubrir los targets iSCSI disponibles en un servidor con IP 192.168.1.100.

- [ ] a) `iscsi-discover 192.168.1.100`
- [ ] b) `iscsiadm -m target -o list 192.168.1.100`
- [ ] c) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`
- [ ] d) `iscsid --discover --portal 192.168.1.100`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`**

`iscsiadm` es la herramienta de administracion de iSCSI en Linux. El modo `-m discovery` se usa para descubrir targets. El tipo `-t sendtargets` (o `-t st`) envia una solicitud al portal especificado con `-p` para que este reporte sus targets disponibles. Los targets descubiertos se almacenan en `/var/lib/iscsi/` y luego se pueden conectar con `iscsiadm -m node --login`.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="204.2" data-correct="b">

### Pregunta 39 (Subtema 204.2)

¿Que ocurre con los datos en una SAN iSCSI si se pierde la conexion de red entre el initiator y el target?

- [ ] a) Los datos se replican automaticamente a un servidor local
- [ ] b) Las operaciones de E/S se bloquean hasta que se agota el timeout configurado, pudiendo causar errores en las aplicaciones
- [ ] c) El sistema de archivos se desmonta automaticamente de forma limpia
- [ ] d) El initiator conmuta automaticamente a un almacenamiento local alternativo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Las operaciones de E/S se bloquean hasta que se agota el timeout configurado, pudiendo causar errores en las aplicaciones**

Cuando se pierde la conectividad de red con un target iSCSI, las operaciones de E/S pendientes se bloquean. El comportamiento depende de los timeouts configurados en `/etc/iscsi/iscsid.conf` (como `node.session.timeo.replacement_timeout`). Si la conexion se restablece dentro del periodo de timeout, las operaciones se reintentan. Si se agota el timeout, el dispositivo se marca como fallido y las aplicaciones reciben errores de E/S. Multipath puede mitigar este problema proporcionando rutas alternativas.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="204.3" data-correct="c">

### Pregunta 40 (Subtema 204.3)

Un administrador necesita crear un snapshot de un volumen logico `/dev/vg_data/lv_web` de 50 GB. ¿Que comando crea un snapshot de 5 GB?

- [ ] a) `lvcreate -s -n snap_web -L 5G /dev/vg_data`
- [ ] b) `lvsnap --create --size 5G /dev/vg_data/lv_web`
- [ ] c) `lvcreate -s -n snap_web -L 5G /dev/vg_data/lv_web`
- [ ] d) `lvcreate --snapshot /dev/vg_data/lv_web 5G`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `lvcreate -s -n snap_web -L 5G /dev/vg_data/lv_web`**

El comando `lvcreate -s` (o `--snapshot`) crea un snapshot de un LV existente. La opcion `-n` asigna un nombre al snapshot, `-L 5G` define el tamano del espacio para almacenar los cambios (no tiene que ser igual al LV original), y el ultimo argumento es el LV del que se hace el snapshot. El tamano del snapshot debe ser suficiente para almacenar todos los bloques que cambien mientras exista el snapshot; si se llena, el snapshot se invalida.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="204.3" data-correct="a">

### Pregunta 41 (Subtema 204.3)

¿Que comando muestra los atributos detallados de todos los volumenes fisicos (PV) de un sistema LVM, incluyendo el espacio libre disponible?

- [ ] a) `pvdisplay`
- [ ] b) `pvlist`
- [ ] c) `pvscan --detail`
- [ ] d) `lvm pvinfo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `pvdisplay`**

`pvdisplay` muestra informacion detallada de cada volumen fisico, incluyendo el nombre del PV, el VG al que pertenece, tamano total, tamano de PE (Physical Extent), PE asignados y libres, y el UUID del PV. Para una salida mas compacta existe `pvs`, y para buscar nuevos PVs existe `pvscan`. Los comandos `pvlist` y `lvm pvinfo` no existen como tales en LVM2.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="204.3" data-correct="d">

### Pregunta 42 (Subtema 204.3)

Un administrador quiere mover todos los datos del volumen fisico `/dev/sdb1` a otros PVs del mismo VG para poder retirar el disco. ¿Que comando debe usar?

- [ ] a) `lvmove /dev/sdb1`
- [ ] b) `vgreduce --removemissing vg_data`
- [ ] c) `lvm migrate /dev/sdb1`
- [ ] d) `pvmove /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `pvmove /dev/sdb1`**

`pvmove` migra todos los extents fisicos del PV especificado a otros PVs disponibles dentro del mismo VG. El proceso se realiza en caliente (sin desmontar). Una vez completado, se puede retirar el PV del VG con `vgreduce vg_data /dev/sdb1` y luego eliminar la etiqueta con `pvremove /dev/sdb1`. `vgreduce --removemissing` se usa cuando un PV ya no existe fisicamente (disco fallido), no para una migracion planificada.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="205.1" data-correct="c">

### Pregunta 43 (Subtema 205.1)

Un administrador configura una interfaz VLAN en Linux. ¿Que modulo del kernel debe estar cargado para que las VLAN funcionen?

- [ ] a) `bridge`
- [ ] b) `bonding`
- [ ] c) `8021q`
- [ ] d) `vlan_core`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `8021q`**

El modulo del kernel `8021q` implementa el soporte para VLAN segun el estandar IEEE 802.1Q. Se puede cargar manualmente con `modprobe 8021q`. Una vez cargado, se pueden crear interfaces VLAN con `ip link add link eth0 name eth0.100 type vlan id 100` o con la herramienta obsoleta `vconfig`. El modulo `bridge` es para bridges de red, y `bonding` para agregacion de enlaces.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="205.1" data-correct="b">

### Pregunta 44 (Subtema 205.1)

Escriba el comando que crea una interfaz VLAN con ID 200 sobre la interfaz fisica `eth0` usando el comando `ip`.

- [ ] a) `ip vlan add eth0 id 200`
- [ ] b) `ip link add link eth0 name eth0.200 type vlan id 200`
- [ ] c) `ip addr add vlan 200 dev eth0`
- [ ] d) `ip link set eth0 vlan 200`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ip link add link eth0 name eth0.200 type vlan id 200`**

El comando `ip link add` crea una nueva interfaz virtual. `link eth0` especifica la interfaz padre, `name eth0.200` asigna el nombre (convencion: padre.vlanid), `type vlan` indica que es una VLAN e `id 200` establece el ID de VLAN. Despues de crearla, hay que asignarle una IP con `ip addr add` y activarla con `ip link set eth0.200 up`. Las otras opciones no son sintaxis validas del comando `ip`.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="205.1" data-correct="d">

### Pregunta 45 (Subtema 205.1)

¿Que comando muestra la configuracion actual de un bridge de red incluyendo los puertos asociados y el estado STP?

- [ ] a) `ip bridge show`
- [ ] b) `bridgectl status`
- [ ] c) `networkctl bridge-info`
- [ ] d) `brctl show` o `bridge link show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `brctl show` o `bridge link show`**

`brctl show` (del paquete `bridge-utils`) lista los bridges existentes, sus puertos miembros y el estado de STP. En sistemas modernos, el comando `bridge` (del paquete `iproute2`) ofrece funcionalidad equivalente: `bridge link show` muestra los puertos de los bridges. Tambien se puede usar `ip link show type bridge` para listar las interfaces bridge. Los comandos `ip bridge show`, `bridgectl` y `networkctl bridge-info` no existen.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="205.2" data-correct="a">

### Pregunta 46 (Subtema 205.2)

Un administrador configura un router Linux con dos interfaces de red. Despues de habilitar `ip_forward`, las maquinas detras del router no pueden acceder a Internet. ¿Que falta probablemente en la configuracion?

- [ ] a) Una regla de NAT/masquerade con iptables o nftables en la interfaz de salida
- [ ] b) Una ruta estatica adicional en la tabla main
- [ ] c) Un servidor DHCP en la interfaz interna
- [ ] d) Deshabilitar el firewall completamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Una regla de NAT/masquerade con iptables o nftables en la interfaz de salida**

Habilitar `ip_forward` permite que el kernel reenvie paquetes entre interfaces, pero si las maquinas internas usan direcciones IP privadas (RFC 1918), los paquetes no seran aceptados en Internet sin NAT. Se necesita una regla de masquerade como: `iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE` (donde `eth0` es la interfaz WAN). Esto traduce las IPs privadas a la IP publica del router.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="205.2" data-correct="c">

### Pregunta 47 (Subtema 205.2)

¿Que longitud en bits tiene una direccion IPv6?

- [ ] a) 32 bits
- [ ] b) 64 bits
- [ ] c) 128 bits
- [ ] d) 256 bits

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) 128 bits**

Las direcciones IPv6 tienen una longitud de 128 bits, representados como 8 grupos de 4 digitos hexadecimales separados por dos puntos (por ejemplo, `2001:0db8:85a3:0000:0000:8a2e:0370:7334`). Esto proporciona aproximadamente 3.4 x 10^38 direcciones unicas. En comparacion, IPv4 usa 32 bits, proporcionando solo 4.3 x 10^9 direcciones. Los 64 bits superiores tipicamente identifican la red (prefijo) y los 64 inferiores el host (identificador de interfaz).

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="205.2" data-correct="b">

### Pregunta 48 (Subtema 205.2)

Escriba el comando para agregar una ruta por defecto (default gateway) con IPv6 a traves del router `fe80::1` en la interfaz `eth0`.

- [ ] a) `ip route add default via fe80::1`
- [ ] b) `ip -6 route add default via fe80::1 dev eth0`
- [ ] c) `route -6 add default gw fe80::1`
- [ ] d) `ip route add ::/0 nexthop fe80::1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ip -6 route add default via fe80::1 dev eth0`**

Para rutas IPv6, se usa `ip -6 route`. Cuando el gateway es una direccion link-local (fe80::), es obligatorio especificar la interfaz con `dev`, ya que las direcciones link-local no son unicas globalmente y podrian existir en multiples interfaces. La opcion a) no especifica `-6` ni `dev`. La opcion c) usa el comando obsoleto `route`. La opcion d) tiene sintaxis incorrecta.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="205.3" data-correct="a">

### Pregunta 49 (Subtema 205.3)

Un administrador ejecuta `netstat -s` en un servidor web y observa un numero alto de "segments retransmited". ¿Que indica esto?

- [ ] a) Hay problemas de red como congestion, perdida de paquetes o latencia excesiva que obligan a retransmitir segmentos TCP
- [ ] b) El servidor esta rechazando conexiones por exceso de carga
- [ ] c) El firewall esta bloqueando paquetes de forma selectiva
- [ ] d) La resolucion DNS esta fallando intermitentemente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Hay problemas de red como congestion, perdida de paquetes o latencia excesiva que obligan a retransmitir segmentos TCP**

Un numero elevado de retransmisiones TCP indica que los segmentos enviados no estan siendo confirmados (ACK) dentro del tiempo esperado, lo que obliga al emisor a reenviarlos. Las causas comunes incluyen congestion de red, interfaces con errores, cables defectuosos, o latencia excesiva. `netstat -s` (o `ss -s` y `nstat`) muestra estadisticas globales de protocolos. Las retransmisiones degradan significativamente el rendimiento de las aplicaciones.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="205.3" data-correct="d">

### Pregunta 50 (Subtema 205.3)

¿Que herramienta de la linea de comandos permite capturar y analizar paquetes de red en una interfaz especifica, mostrando el contenido de los paquetes?

- [ ] a) `netstat`
- [ ] b) `ss`
- [ ] c) `nmap`
- [ ] d) `tcpdump`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `tcpdump`**

`tcpdump` es la herramienta clasica de captura de paquetes en Linux. Permite capturar trafico en una interfaz especifica con filtros flexibles, por ejemplo: `tcpdump -i eth0 -n port 80` captura trafico HTTP en eth0. Con `-w` se guardan las capturas en formato pcap para analisis posterior con Wireshark. `netstat` y `ss` muestran conexiones/sockets pero no capturan trafico. `nmap` es un escaner de puertos, no un capturador de paquetes.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="205.3" data-correct="c">

### Pregunta 51 (Subtema 205.3)

Escriba el comando `tcpdump` que captura solo trafico DNS (puerto 53) en la interfaz `eth0` y lo guarda en un archivo para analisis posterior.

- [ ] a) `tcpdump -i eth0 dns -o capture.pcap`
- [ ] b) `tcpdump --interface eth0 --port 53 --save capture.pcap`
- [ ] c) `tcpdump -i eth0 port 53 -w capture.pcap`
- [ ] d) `tcpdump -i eth0 -f "dns" -w capture.pcap`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `tcpdump -i eth0 port 53 -w capture.pcap`**

En `tcpdump`, `-i eth0` especifica la interfaz, `port 53` es el filtro BPF (Berkeley Packet Filter) que selecciona solo trafico en el puerto 53 (DNS, tanto TCP como UDP), y `-w capture.pcap` escribe los paquetes capturados en formato pcap. El archivo resultante puede abrirse con Wireshark o analizarse con `tcpdump -r capture.pcap`. Los filtros de `tcpdump` usan la sintaxis BPF, no nombres de protocolos como "dns".

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="206.1" data-correct="b">

### Pregunta 52 (Subtema 206.1)

¿Que comando de `make` se utiliza para compilar e instalar un programa desde su codigo fuente siguiendo el patron clasico de GNU autotools?

- [ ] a) `make build && make deploy`
- [ ] b) `./configure && make && make install`
- [ ] c) `cmake --build . && cmake --install .`
- [ ] d) `make compile && make setup`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `./configure && make && make install`**

El patron clasico de compilacion e instalacion con GNU autotools consiste en tres pasos: `./configure` analiza el sistema y genera los Makefiles apropiados, `make` compila el software usando esos Makefiles, y `make install` copia los binarios, bibliotecas y archivos de configuracion a sus ubicaciones finales (tipicamente bajo `/usr/local/`). Se puede personalizar el prefijo de instalacion con `./configure --prefix=/opt/programa`.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="206.1" data-correct="a">

### Pregunta 53 (Subtema 206.1)

Un administrador compila un programa desde codigo fuente y quiere instalarlo en `/opt/custom/` en lugar de `/usr/local/`. ¿Que parametro debe pasar a `./configure`?

- [ ] a) `./configure --prefix=/opt/custom`
- [ ] b) `./configure --install-dir=/opt/custom`
- [ ] c) `./configure --path=/opt/custom`
- [ ] d) `./configure --destdir=/opt/custom`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `./configure --prefix=/opt/custom`**

La opcion `--prefix` de `./configure` establece el directorio base para la instalacion. Los binarios se instalaran en `<prefix>/bin`, las bibliotecas en `<prefix>/lib`, la documentacion en `<prefix>/share`, etc. `DESTDIR` es una variable de `make install` que permite instalar en una raiz alternativa (util para crear paquetes), pero no cambia las rutas internas del programa. Las opciones `--install-dir` y `--path` no existen en autotools.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="206.1" data-correct="c">

### Pregunta 54 (Subtema 206.1)

Despues de instalar una biblioteca compartida manualmente en `/usr/local/lib`, los programas que dependen de ella no pueden encontrarla. ¿Que comando debe ejecutar el administrador?

- [ ] a) `modprobe libcache`
- [ ] b) `updatedb`
- [ ] c) `ldconfig`
- [ ] d) `depmod -a`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `ldconfig`**

`ldconfig` actualiza la cache del enlazador dinamico (`/etc/ld.so.cache`) que el sistema usa para localizar bibliotecas compartidas en tiempo de ejecucion. Si la biblioteca se instalo en un directorio no estandar, primero hay que agregar ese directorio en un archivo `.conf` dentro de `/etc/ld.so.conf.d/` y luego ejecutar `ldconfig`. Alternativamente, se puede usar la variable de entorno `LD_LIBRARY_PATH` para busquedas temporales. `depmod` es para modulos del kernel, y `updatedb` es para la base de datos de `locate`.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="206.2" data-correct="b">

### Pregunta 55 (Subtema 206.2)

Un administrador necesita hacer una copia de seguridad incremental diaria de un servidor, donde solo se copien los archivos modificados desde la ultima copia completa. ¿Que herramienta y opciones son las mas apropiadas?

- [ ] a) `cp -u /datos /backup`
- [ ] b) `rsync -av --link-dest=/backup/ultima_completa /datos/ /backup/incremental_hoy/`
- [ ] c) `tar -czf /backup/incremental.tar.gz /datos`
- [ ] d) `scp -r /datos backup-server:/backup`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `rsync -av --link-dest=/backup/ultima_completa /datos/ /backup/incremental_hoy/`**

`rsync` con `--link-dest` crea copias incrementales eficientes: los archivos que no han cambiado se enlazan (hard link) a la copia de referencia en lugar de duplicarse, ahorrando espacio. Los archivos nuevos o modificados se copian normalmente. Esto produce un backup que parece completo pero ocupa solo el espacio de los cambios. `cp -u` no tiene logica de respaldo incremental. `tar` sin opciones de incrementalidad copia todo.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="206.2" data-correct="c">

### Pregunta 56 (Subtema 206.2)

Escriba el comando que sincroniza el directorio `/srv/datos/` con un servidor remoto via SSH, eliminando en el destino los archivos que ya no existen en el origen.

- [ ] a) `rsync -av /srv/datos/ usuario@servidor:/backup/datos`
- [ ] b) `rsync -av --clean /srv/datos/ usuario@servidor:/backup/datos/`
- [ ] c) `rsync -av --delete /srv/datos/ usuario@servidor:/backup/datos/`
- [ ] d) `rsync -av --remove-deleted /srv/datos/ usuario@servidor:/backup/datos/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rsync -av --delete /srv/datos/ usuario@servidor:/backup/datos/`**

La opcion `--delete` de `rsync` elimina los archivos en el destino que ya no existen en el origen, manteniendo una replica exacta. La barra final en el origen (`/srv/datos/`) es importante: significa copiar el contenido del directorio, no el directorio mismo. Sin `--delete`, los archivos eliminados en el origen permanecerian en el destino indefinidamente. Las opciones `--clean` y `--remove-deleted` no existen en `rsync`.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="206.2" data-correct="a">

### Pregunta 57 (Subtema 206.2)

¿Que sistema de notificacion de cambios del kernel utiliza una herramienta como `inotifywait` para detectar modificaciones en archivos y directorios en tiempo real?

- [ ] a) inotify
- [ ] b) fanotify
- [ ] c) dnotify
- [ ] d) kqueue

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) inotify**

`inotify` es la API del kernel Linux que permite monitorizar eventos del sistema de archivos en tiempo real (creacion, modificacion, eliminacion, acceso, etc.). La herramienta `inotifywait` (del paquete `inotify-tools`) utiliza esta API para esperar eventos y ejecutar acciones, lo que la hace ideal para automatizar backups incrementales. `dnotify` es su predecesor obsoleto. `fanotify` es mas moderno pero orientado a antivirus/auditoria. `kqueue` es de BSD, no de Linux.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="206.3" data-correct="d">

### Pregunta 58 (Subtema 206.3)

Un administrador necesita enviar notificaciones al equipo de operaciones cuando la carga del sistema supera un umbral. ¿Que herramienta de monitorizacion de codigo abierto es adecuada para esta tarea y soporta alertas, graficos y monitorizacion distribuida?

- [ ] a) `sar`
- [ ] b) `top`
- [ ] c) `collectd`
- [ ] d) Nagios o Icinga

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Nagios o Icinga**

Nagios (y su fork Icinga) son sistemas completos de monitorizacion que soportan alertas por email, SMS o webhook cuando se superan umbrales configurados, graficos historicos, monitorizacion distribuida de multiples servidores, y plugins personalizables. `sar` y `top` son herramientas locales sin capacidad de alertas. `collectd` recopila metricas pero no tiene un sistema de alertas tan robusto como Nagios/Icinga.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="206.3" data-correct="b">

### Pregunta 59 (Subtema 206.3)

¿Que protocolo utiliza por defecto el agente SNMP en Linux para exponer metricas del sistema a un servidor de monitorizacion?

- [ ] a) TCP puerto 22
- [ ] b) UDP puerto 161
- [ ] c) TCP puerto 80
- [ ] d) UDP puerto 514

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) UDP puerto 161**

El agente SNMP (Simple Network Management Protocol) escucha por defecto en el puerto UDP 161. Las consultas (GET, SET) se envian a este puerto. Las traps SNMP (notificaciones asincronas del agente al gestor) se envian al puerto UDP 162. En Linux, el demonio `snmpd` (del paquete `net-snmp`) implementa el agente. El puerto 22 es SSH, el 80 es HTTP, y el 514 es syslog.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="206.3" data-correct="c">

### Pregunta 60 (Subtema 206.3)

Escriba el comando que consulta un valor OID especifico en un agente SNMP remoto con IP 192.168.1.50 usando la comunidad "public" y la version 2c del protocolo.

- [ ] a) `snmp-get -v 2c -c public 192.168.1.50 sysDescr`
- [ ] b) `snmpquery -version 2c -community public 192.168.1.50 system.sysDescr.0`
- [ ] c) `snmpget -v 2c -c public 192.168.1.50 sysDescr.0`
- [ ] d) `snmpwalk -v 2c -c public 192.168.1.50`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `snmpget -v 2c -c public 192.168.1.50 sysDescr.0`**

`snmpget` consulta un OID especifico en un agente SNMP. La opcion `-v 2c` especifica la version del protocolo, `-c public` la comunidad de lectura. `sysDescr.0` es el OID que devuelve la descripcion del sistema. El `.0` indica la instancia escalar del objeto. `snmpwalk` recorre todo un subarbol OID (no consulta uno especifico). Los comandos `snmp-get` y `snmpquery` no existen en el paquete `net-snmp`.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
