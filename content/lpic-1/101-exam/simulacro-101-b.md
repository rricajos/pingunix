---
title: "Simulacro Examen 101 - B"
tags:
  - lpic-1
  - examen-101
  - simulacro
tipo: simulacro
certificacion: lpic-1
examen: "101"
---

# Simulacro B - Examen 101

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="101-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="101.1" data-correct="d">

### Pregunta 1 (Subtema 101.1)

Un administrador ejecuta `lsmod` y observa que el modulo `snd_hda_intel` aparece con un valor de "Used by" mayor que 0. Que significa esto?

- [ ] a) El modulo esta corrupto y debe reinstalarse
- [ ] b) El modulo fue cargado manualmente con `insmod`
- [ ] c) El modulo esta en la blacklist pero se cargo igualmente
- [ ] d) Otros modulos o procesos dependen de el y esta en uso activo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Otros modulos o procesos dependen de el y esta en uso activo**

La columna "Used by" de `lsmod` indica cuantos modulos u otros componentes dependen del modulo listado. Un valor mayor que 0 significa que el modulo esta en uso activo y no puede descargarse con `rmmod` sin antes descargar sus dependientes.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="101.1" data-correct="a">

### Pregunta 2 (Subtema 101.1)

Que comando descarga un modulo del kernel y tambien descarga automaticamente los modulos que ya no son necesarios?

- [ ] a) `modprobe -r nombre_modulo`
- [ ] b) `rmmod -a nombre_modulo`
- [ ] c) `insmod --remove nombre_modulo`
- [ ] d) `depmod -r nombre_modulo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `modprobe -r nombre_modulo`**

`modprobe -r` (o `--remove`) descarga un modulo y tambien intenta descargar los modulos de los que dependia si ya no estan en uso. `rmmod` solo descarga el modulo especificado sin gestionar dependencias. `depmod` regenera el archivo de dependencias, no descarga modulos.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="101.1" data-correct="b">

### Pregunta 3 (Subtema 101.1)

Que archivo genera `depmod` y cual es su funcion principal?

- [ ] a) `/etc/modules.conf` - configura las opciones de carga de modulos
- [ ] b) `/lib/modules/$(uname -r)/modules.dep` - lista las dependencias entre modulos
- [ ] c) `/proc/modules` - muestra los modulos actualmente cargados
- [ ] d) `/sys/module/dependencies` - expone las dependencias al espacio de usuario

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/lib/modules/$(uname -r)/modules.dep` - lista las dependencias entre modulos**

`depmod` analiza todos los modulos del kernel disponibles y genera el archivo `modules.dep` (y su version binaria `modules.dep.bin`), que contiene la lista de dependencias de cada modulo. Este archivo es utilizado por `modprobe` para resolver dependencias automaticamente.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="101.2" data-correct="c">

### Pregunta 4 (Subtema 101.2)

En GRUB 2, que archivo contiene las variables de configuracion como `GRUB_TIMEOUT` y `GRUB_CMDLINE_LINUX` que se usan al generar `grub.cfg`?

- [ ] a) `/boot/grub/grub.cfg`
- [ ] b) `/etc/grub.d/40_custom`
- [ ] c) `/etc/default/grub`
- [ ] d) `/boot/grub/device.map`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/etc/default/grub`**

`/etc/default/grub` contiene las variables de configuracion principales como `GRUB_TIMEOUT` (tiempo de espera del menu), `GRUB_CMDLINE_LINUX` (parametros del kernel) y `GRUB_DEFAULT` (entrada por defecto). Los scripts en `/etc/grub.d/` generan las secciones del `grub.cfg` usando estas variables.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="101.2" data-correct="a">

### Pregunta 5 (Subtema 101.2)

Que comando instala el cargador de arranque GRUB 2 en el MBR del disco `/dev/sda`?

- [ ] a) `grub-install /dev/sda`
- [ ] b) `grub-mkconfig /dev/sda`
- [ ] c) `grub-setup --mbr /dev/sda`
- [ ] d) `install-grub --target=mbr /dev/sda`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `grub-install /dev/sda`**

`grub-install` copia los archivos de GRUB al directorio de arranque e instala el cargador de arranque en el MBR (o la particion EFI en sistemas UEFI). Se debe especificar el dispositivo del disco, no una particion. `grub-mkconfig` genera la configuracion pero no instala el cargador.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="101.2" data-correct="d">

### Pregunta 6 (Subtema 101.2)

Que parametro del kernel pasado en la linea de arranque de GRUB se utiliza para especificar la particion raiz del sistema?

- [ ] a) `boot=/dev/sda1`
- [ ] b) `initrd=/dev/sda1`
- [ ] c) `rootfs=/dev/sda1`
- [ ] d) `root=/dev/sda1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `root=/dev/sda1`**

El parametro `root=` indica al kernel cual es el dispositivo o particion que contiene el sistema de archivos raiz. Puede especificarse como nombre de dispositivo (`/dev/sda1`), UUID (`root=UUID=xxx`) o etiqueta (`root=LABEL=xxx`). `initrd` especifica la imagen initramfs, no la particion raiz.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="101.3" data-correct="b">

### Pregunta 7 (Subtema 101.3)

Un administrador necesita habilitar un servicio para que se inicie automaticamente en cada arranque con systemd. Que comando debe usar?

- [ ] a) `systemctl start servicio.service`
- [ ] b) `systemctl enable servicio.service`
- [ ] c) `systemctl activate servicio.service`
- [ ] d) `systemctl boot servicio.service`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `systemctl enable servicio.service`**

`systemctl enable` crea los enlaces simbolicos necesarios para que el servicio se inicie automaticamente en el arranque segun lo definido en la seccion `[Install]` de su archivo unit. `systemctl start` solo lo inicia en la sesion actual sin hacerlo persistente.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="101.3" data-correct="d">

### Pregunta 8 (Subtema 101.3)

Que comando de systemd permite ver los mensajes de log del arranque actual del sistema?

- [ ] a) `systemctl log --boot`
- [ ] b) `dmesg --systemd`
- [ ] c) `systemctl status --all`
- [ ] d) `journalctl -b`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `journalctl -b`**

`journalctl -b` muestra todos los mensajes del journal correspondientes al arranque actual. Con `-b -1` se pueden ver los mensajes del arranque anterior. `dmesg` muestra solo los mensajes del buffer del kernel, no todos los logs del sistema gestionados por systemd-journald.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="101.3" data-correct="a">

### Pregunta 9 (Subtema 101.3)

En un sistema SysVinit, en que directorio se encuentran los scripts de inicio de los servicios?

- [ ] a) `/etc/init.d/`
- [ ] b) `/usr/lib/systemd/system/`
- [ ] c) `/etc/systemd/system/`
- [ ] d) `/boot/init/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/etc/init.d/`**

En SysVinit, los scripts de inicio de los servicios se almacenan en `/etc/init.d/`. Los directorios `/etc/rc0.d/` a `/etc/rc6.d/` contienen enlaces simbolicos a estos scripts para definir que servicios se inician en cada runlevel. Los directorios bajo `/usr/lib/systemd/` y `/etc/systemd/` son propios de systemd.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="102.1" data-correct="c">

### Pregunta 10 (Subtema 102.1)

En un disco con tabla de particiones MBR, las particiones logicas dentro de una particion extendida comienzan a numerarse a partir de que numero?

- [ ] a) 1
- [ ] b) 4
- [ ] c) 5
- [ ] d) 0

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) 5**

En MBR, los numeros 1 a 4 estan reservados para las particiones primarias (y la extendida). Las particiones logicas dentro de la extendida siempre comienzan con el numero 5, independientemente de cuantas particiones primarias existan realmente. Asi, la primera logica seria `/dev/sda5`.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="102.1" data-correct="b">

### Pregunta 11 (Subtema 102.1)

Cual es el tamano recomendado para la particion de swap en un sistema con 4 GB de RAM que necesita soporte para hibernacion?

- [ ] a) 1 GB
- [ ] b) Al menos 4 GB (igual o mayor que la RAM)
- [ ] c) 512 MB
- [ ] d) Exactamente 2 GB (la mitad de la RAM)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Al menos 4 GB (igual o mayor que la RAM)**

Para soportar hibernacion, la particion de swap debe ser al menos del tamano de la RAM, ya que el contenido completo de la memoria se escribe en la particion swap durante la hibernacion. Sin hibernacion, las recomendaciones varian, pero con hibernacion es obligatorio que sea >= RAM.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="102.1" data-correct="a">

### Pregunta 12 (Subtema 102.1)

Que directorio en la jerarquia FHS debe tener su propia particion si se desea aislar los datos de los usuarios del sistema operativo?

- [ ] a) `/home`
- [ ] b) `/etc`
- [ ] c) `/usr`
- [ ] d) `/opt`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/home`**

Colocar `/home` en una particion separada es una practica comun para aislar los datos de los usuarios. Esto permite reinstalar o actualizar el sistema operativo sin afectar los archivos personales, y facilita la gestion de cuotas de disco y copias de seguridad.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="102.2" data-correct="d">

### Pregunta 13 (Subtema 102.2)

Que formato de sistema de archivos debe tener la particion ESP (EFI System Partition)?

- [ ] a) ext4
- [ ] b) NTFS
- [ ] c) XFS
- [ ] d) FAT32 (vfat)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) FAT32 (vfat)**

La especificacion UEFI requiere que la ESP este formateada con FAT32 (aunque FAT12 y FAT16 tambien son tecnicamente validos para particiones pequenas). Se monta tipicamente en `/boot/efi` y contiene los archivos `.efi` de los cargadores de arranque.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="102.2" data-correct="b">

### Pregunta 14 (Subtema 102.2)

En un sistema UEFI, donde se almacenan las variables de arranque que definen el orden de los cargadores de arranque?

- [ ] a) En el MBR del disco
- [ ] b) En la NVRAM del firmware UEFI
- [ ] c) En el archivo `/boot/grub/grub.cfg`
- [ ] d) En la particion `/boot`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) En la NVRAM del firmware UEFI**

Las variables de arranque UEFI (como el orden de boot) se almacenan en la NVRAM (memoria no volatil) del firmware. Se pueden gestionar desde Linux con el comando `efibootmgr`. A diferencia del BIOS legacy que solo lee el MBR, UEFI mantiene sus propias variables de configuracion en el firmware.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="102.2" data-correct="a">

### Pregunta 15 (Subtema 102.2)

Que comando se utiliza para gestionar las entradas de arranque UEFI desde la linea de comandos de Linux?

- [ ] a) `efibootmgr`
- [ ] b) `grub-install --efi`
- [ ] c) `uefi-setup`
- [ ] d) `bootctl list`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `efibootmgr`**

`efibootmgr` permite listar, crear, eliminar y modificar las entradas de arranque UEFI almacenadas en la NVRAM. Con `-v` muestra informacion detallada y con `-o` permite cambiar el orden de arranque. `bootctl` es una herramienta de systemd-boot, no de GRUB.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="102.3" data-correct="c">

### Pregunta 16 (Subtema 102.3)

Que tipo de archivo de paquete utiliza openSUSE como formato nativo?

- [ ] a) `.deb`
- [ ] b) `.tar.gz`
- [ ] c) `.rpm`
- [ ] d) `.pkg`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `.rpm`**

openSUSE, al igual que Red Hat, Fedora y CentOS, utiliza paquetes RPM (Red Hat Package Manager). Sin embargo, openSUSE usa `zypper` como gestor de paquetes de alto nivel en lugar de `yum` o `dnf`. El formato `.deb` es propio de Debian y derivados.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="102.3" data-correct="a">

### Pregunta 17 (Subtema 102.3)

Que distribucion es la base de Linux Mint y Ubuntu?

- [ ] a) Debian
- [ ] b) Red Hat
- [ ] c) Slackware
- [ ] d) Arch Linux

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Debian**

Debian es la distribucion base de la que derivan Ubuntu (directamente) y Linux Mint (a traves de Ubuntu). Todas comparten el sistema de paquetes dpkg/apt y el formato de paquetes `.deb`. Red Hat es la base de Fedora y CentOS/RHEL.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="102.4" data-correct="b">

### Pregunta 18 (Subtema 102.4)

Que comando de `dpkg` permite buscar a que paquete instalado pertenece el archivo `/usr/bin/vim`?

- [ ] a) `dpkg -L /usr/bin/vim`
- [ ] b) `dpkg -S /usr/bin/vim`
- [ ] c) `dpkg -l /usr/bin/vim`
- [ ] d) `dpkg -p /usr/bin/vim`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dpkg -S /usr/bin/vim`**

`dpkg -S` (search) busca en la base de datos de paquetes instalados y devuelve el nombre del paquete que contiene el archivo indicado. `dpkg -L` lista los archivos de un paquete dado (requiere nombre de paquete, no ruta). `dpkg -l` lista paquetes y su estado.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="102.4" data-correct="d">

### Pregunta 19 (Subtema 102.4)

Que comando actualiza la lista de paquetes disponibles desde los repositorios configurados en un sistema Debian?

- [ ] a) `apt upgrade`
- [ ] b) `dpkg --update`
- [ ] c) `apt-get dist-upgrade`
- [ ] d) `apt-get update`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `apt-get update`**

`apt-get update` descarga las listas de paquetes desde los repositorios configurados en `/etc/apt/sources.list` y `/etc/apt/sources.list.d/`. No instala ni actualiza paquetes, solo actualiza la informacion disponible. `apt upgrade` instala las actualizaciones disponibles.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="102.4" data-correct="c">

### Pregunta 20 (Subtema 102.4)

Despues de instalar un paquete `.deb` con `dpkg -i` que reporta dependencias faltantes, que comando resuelve e instala las dependencias pendientes?

- [ ] a) `dpkg --configure -a`
- [ ] b) `apt-get update`
- [ ] c) `apt-get install -f`
- [ ] d) `dpkg --fix-depends`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `apt-get install -f`**

`apt-get install -f` (o `--fix-broken`) intenta reparar un sistema con dependencias rotas, descargando e instalando los paquetes necesarios desde los repositorios. `dpkg --configure -a` configura paquetes desempaquetados pero no resuelve dependencias de repositorios.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="102.5" data-correct="a">

### Pregunta 21 (Subtema 102.5)

Que comando lista todos los archivos que contiene un paquete RPM instalado llamado `httpd`?

- [ ] a) `rpm -ql httpd`
- [ ] b) `rpm -qf httpd`
- [ ] c) `rpm -qi httpd`
- [ ] d) `rpm -qa httpd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `rpm -ql httpd`**

`rpm -ql` (query list) muestra todos los archivos instalados por un paquete. `-qf` busca a que paquete pertenece un archivo. `-qi` muestra informacion descriptiva del paquete. `-qa` lista todos los paquetes instalados (si se omite el nombre) o verifica si un paquete esta instalado.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="102.5" data-correct="c">

### Pregunta 22 (Subtema 102.5)

Que comando instala un paquete RPM descargado localmente sin verificar las dependencias?

- [ ] a) `rpm -i --force paquete.rpm`
- [ ] b) `rpm -Uvh --skip-deps paquete.rpm`
- [ ] c) `rpm -ivh --nodeps paquete.rpm`
- [ ] d) `rpm -e --nodeps paquete.rpm`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rpm -ivh --nodeps paquete.rpm`**

`rpm -ivh` instala un paquete (`-i` install, `-v` verbose, `-h` hash/progreso). `--nodeps` omite la verificacion de dependencias. Esto no es recomendable en produccion ya que el paquete puede no funcionar correctamente. `rpm -e` desinstala, no instala. `--force` sobreescribe archivos pero no omite dependencias.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="102.5" data-correct="b">

### Pregunta 23 (Subtema 102.5)

Que opcion de `rpm` permite consultar informacion de un archivo `.rpm` que aun NO esta instalado?

- [ ] a) `rpm -q`
- [ ] b) `rpm -qp`
- [ ] c) `rpm -ql`
- [ ] d) `rpm -qR`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `rpm -qp`**

La opcion `-p` (package file) indica a `rpm` que realice la consulta sobre un archivo `.rpm` en lugar de sobre la base de datos de paquetes instalados. Asi, `rpm -qpi archivo.rpm` muestra informacion del paquete y `rpm -qpl archivo.rpm` lista los archivos que contendria al instalarse.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="102.6" data-correct="d">

### Pregunta 24 (Subtema 102.6)

Que comando de `dnf` elimina los paquetes descargados en cache que ya no son necesarios?

- [ ] a) `dnf remove --cache`
- [ ] b) `dnf purge cache`
- [ ] c) `dnf cache --clear`
- [ ] d) `dnf clean all`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `dnf clean all`**

`dnf clean all` elimina todos los datos en cache: paquetes descargados, metadatos de repositorios y cache de la base de datos. Tambien se pueden limpiar partes especificas con `dnf clean packages` (solo paquetes) o `dnf clean metadata` (solo metadatos).

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="102.6" data-correct="b">

### Pregunta 25 (Subtema 102.6)

Que comando de `zypper` se utiliza en openSUSE para buscar un paquete por nombre?

- [ ] a) `zypper find nombre`
- [ ] b) `zypper search nombre`
- [ ] c) `zypper query nombre`
- [ ] d) `zypper list nombre`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `zypper search nombre`**

`zypper search` (o `zypper se`) busca paquetes por nombre o descripcion en los repositorios configurados. Es el equivalente a `dnf search` en Red Hat o `apt-cache search` en Debian. `zypper install` instala y `zypper remove` desinstala paquetes.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="103.1" data-correct="c">

### Pregunta 26 (Subtema 103.1)

Que variable de entorno determina en que directorios busca el shell los comandos ejecutables?

- [ ] a) `$SHELL`
- [ ] b) `$HOME`
- [ ] c) `$PATH`
- [ ] d) `$EXEC`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `$PATH`**

`$PATH` contiene una lista de directorios separados por dos puntos (`:`) donde el shell busca los ejecutables cuando se introduce un comando. Si el comando no se encuentra en ninguno de estos directorios, el shell devuelve un error "command not found". `$SHELL` indica el shell del usuario y `$HOME` su directorio personal.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="103.1" data-correct="a">

### Pregunta 27 (Subtema 103.1)

Que hace el comando `exec bash` cuando se ejecuta dentro de una sesion de shell?

- [ ] a) Reemplaza el proceso de shell actual con una nueva instancia de bash
- [ ] b) Inicia un nuevo subshell de bash manteniendo el original
- [ ] c) Ejecuta bash en modo de depuracion
- [ ] d) Abre un segundo terminal con bash

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Reemplaza el proceso de shell actual con una nueva instancia de bash**

`exec` reemplaza el proceso actual del shell con el comando especificado, sin crear un nuevo proceso. Con `exec bash`, el shell actual se sustituye por una nueva instancia de bash (util para recargar la configuracion). Si fuera un subshell normal, el original seguiria existiendo como proceso padre.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="103.1" data-correct="d">

### Pregunta 28 (Subtema 103.1)

Que archivo se ejecuta para todos los usuarios al iniciar una sesion de login en Bash, antes de los archivos de perfil del usuario?

- [ ] a) `~/.bashrc`
- [ ] b) `~/.bash_profile`
- [ ] c) `/etc/bash.bashrc`
- [ ] d) `/etc/profile`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `/etc/profile`**

`/etc/profile` es el archivo de perfil global que se ejecuta para todos los usuarios en shells de login antes de los archivos personales como `~/.bash_profile`. Contiene configuraciones del sistema como variables de entorno globales. Los archivos de `/etc/profile.d/` tambien se cargan desde ahi. `~/.bashrc` y `/etc/bash.bashrc` se ejecutan en shells interactivos no-login.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="103.2" data-correct="b">

### Pregunta 29 (Subtema 103.2)

Que hace el siguiente comando: `cut -d':' -f1,6 /etc/passwd`?

- [ ] a) Muestra las lineas 1 y 6 del archivo
- [ ] b) Muestra el nombre de usuario y el directorio home de cada entrada
- [ ] c) Elimina los campos 1 y 6 del archivo
- [ ] d) Muestra las primeras 6 columnas separadas por dos puntos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Muestra el nombre de usuario y el directorio home de cada entrada**

`cut -d':'` establece los dos puntos como delimitador, y `-f1,6` selecciona el primer campo (nombre de usuario) y el sexto campo (directorio home) del formato de `/etc/passwd`. `cut` extrae campos o columnas, no elimina contenido del archivo original.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="103.2" data-correct="d">

### Pregunta 30 (Subtema 103.2)

Que comando ordena las lineas de un archivo numericamente en orden descendente?

- [ ] a) `sort -a archivo`
- [ ] b) `sort -d archivo`
- [ ] c) `sort -n archivo`
- [ ] d) `sort -nr archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `sort -nr archivo`**

`sort -n` ordena numericamente (en lugar de alfabeticamente) y `-r` invierte el orden (descendente). Combinados, `-nr` ordena los numeros de mayor a menor. Sin `-n`, `sort` ordenaria alfabeticamente (donde "9" iria despues de "80"). `-d` ordena en modo diccionario, no descendente.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="103.3" data-correct="c">

### Pregunta 31 (Subtema 103.3)

Que operador redirige la salida estandar de un comando anadiendo al final del archivo en lugar de sobreescribirlo?

- [ ] a) `>`
- [ ] b) `<`
- [ ] c) `>>`
- [ ] d) `|`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `>>`**

`>>` redirige stdout anadiendo (append) al final del archivo existente, sin eliminar su contenido previo. `>` sobreescribe el archivo completamente. `<` redirige la entrada estandar desde un archivo. `|` (pipe) conecta la salida de un comando con la entrada de otro.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="103.3" data-correct="a">

### Pregunta 32 (Subtema 103.3)

Que hace el operador `<<EOF` (here document) en un script de shell?

- [ ] a) Permite pasar un bloque de texto multilínea como entrada estandar hasta encontrar la etiqueta EOF
- [ ] b) Redirige la salida de error a un archivo llamado EOF
- [ ] c) Crea un archivo temporal llamado EOF
- [ ] d) Lee el contenido del archivo EOF como entrada

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Permite pasar un bloque de texto multilinea como entrada estandar hasta encontrar la etiqueta EOF**

Un "here document" (`<<DELIMITADOR`) permite enviar un bloque de texto como stdin a un comando. Todo el texto entre `<<EOF` y la linea que contiene solo `EOF` se pasa como entrada. El delimitador puede ser cualquier palabra, aunque `EOF` es la convencion mas comun.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="103.3" data-correct="b">

### Pregunta 33 (Subtema 103.3)

Que hace el siguiente comando: `ls /directorio_inexistente 2>/dev/null`?

- [ ] a) Muestra los errores en pantalla y la salida en /dev/null
- [ ] b) Descarta los mensajes de error y no muestra nada si el directorio no existe
- [ ] c) Redirige la salida estandar a /dev/null
- [ ] d) Crea el directorio si no existe

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Descarta los mensajes de error y no muestra nada si el directorio no existe**

`2>/dev/null` redirige el descriptor de archivo 2 (stderr) a `/dev/null`, que es un dispositivo especial que descarta todo lo que recibe. Si el directorio no existe, el mensaje de error de `ls` se envia a stderr y se descarta. Si existiera, la salida estandar (stdout) se mostraria normalmente.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="103.4" data-correct="c">

### Pregunta 34 (Subtema 103.4)

Que opcion de `grep` permite buscar un patron de forma recursiva en todos los archivos de un directorio y sus subdirectorios?

- [ ] a) `grep -l`
- [ ] b) `grep -c`
- [ ] c) `grep -r`
- [ ] d) `grep -w`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `grep -r`**

`grep -r` (o `--recursive`) busca el patron en todos los archivos dentro del directorio especificado y todos sus subdirectorios. `-l` muestra solo los nombres de archivo con coincidencias. `-c` cuenta las coincidencias por archivo. `-w` busca solo palabras completas.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="103.4" data-correct="d">

### Pregunta 35 (Subtema 103.4)

En una expresion regular basica, que metacaracter representa "cualquier caracter unico"?

- [ ] a) `*`
- [ ] b) `?`
- [ ] c) `\w`
- [ ] d) `.`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `.`**

En expresiones regulares, el punto (`.`) coincide con cualquier caracter unico excepto el salto de linea. `*` es un cuantificador que significa "cero o mas del caracter anterior". `?` en BRE es un caracter literal (en ERE significa "cero o uno"). `\w` es una extension de Perl (PCRE), no de POSIX BRE.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="103.4" data-correct="a">

### Pregunta 36 (Subtema 103.4)

Que opcion de `grep` hace que la busqueda coincida solo con palabras completas, no con subcadenas?

- [ ] a) `grep -w`
- [ ] b) `grep -x`
- [ ] c) `grep -o`
- [ ] d) `grep -f`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `grep -w`**

`grep -w` (word-regexp) solo coincide cuando el patron forma una palabra completa, es decir, esta rodeado por caracteres no alfanumericos. Asi, `grep -w "log"` coincidiria con "log" pero no con "login" o "catalog". `-x` coincide con la linea entera. `-o` muestra solo la parte coincidente.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="103.5" data-correct="b">

### Pregunta 37 (Subtema 103.5)

Que comando envía la senal SIGTERM a todos los procesos que coinciden con el nombre "apache2"?

- [ ] a) `kill apache2`
- [ ] b) `killall apache2`
- [ ] c) `pkill -9 apache2`
- [ ] d) `kill -STOP apache2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `killall apache2`**

`killall` envia una senal (SIGTERM por defecto) a todos los procesos que coinciden con el nombre exacto especificado. `kill` requiere un PID, no un nombre. `pkill` tambien envia senales por nombre pero `-9` seria SIGKILL, no SIGTERM. `kill -STOP` envia SIGSTOP, no SIGTERM.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="103.5" data-correct="c">

### Pregunta 38 (Subtema 103.5)

Un proceso esta ejecutandose en primer plano (foreground) en la terminal. Que combinacion de teclas lo suspende (pausa) y lo envia al fondo?

- [ ] a) Ctrl+C
- [ ] b) Ctrl+D
- [ ] c) Ctrl+Z
- [ ] d) Ctrl+S

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Ctrl+Z**

`Ctrl+Z` envia la senal SIGTSTP al proceso en primer plano, suspendiendolo. El proceso queda en estado "stopped" en segundo plano. Luego se puede reanudar con `fg` (primer plano) o `bg` (segundo plano). `Ctrl+C` envia SIGINT (terminacion). `Ctrl+D` envia EOF. `Ctrl+S` pausa la salida de la terminal.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="103.6" data-correct="d">

### Pregunta 39 (Subtema 103.6)

Que comando muestra todos los procesos del sistema con informacion completa en formato BSD?

- [ ] a) `ps -e`
- [ ] b) `ps -l`
- [ ] c) `ps -ef`
- [ ] d) `ps aux`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `ps aux`**

`ps aux` es la forma BSD de mostrar todos los procesos: `a` incluye procesos de todos los usuarios, `u` muestra el formato orientado al usuario (con %CPU, %MEM, etc.) y `x` incluye procesos sin terminal controladora. `ps -ef` es equivalente en formato POSIX/System V. Notar que en formato BSD no se usa guion antes de las opciones.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="103.6" data-correct="a">

### Pregunta 40 (Subtema 103.6)

Que archivo especial dentro de `/proc` permite ver la linea de comandos con la que se inicio un proceso con PID 1?

- [ ] a) `/proc/1/cmdline`
- [ ] b) `/proc/1/command`
- [ ] c) `/proc/1/exec`
- [ ] d) `/proc/1/args`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/proc/1/cmdline`**

Cada proceso tiene un directorio en `/proc/PID/` con informacion sobre el mismo. El archivo `cmdline` contiene la linea de comandos completa con la que se inicio el proceso, con los argumentos separados por caracteres nulos. Otros archivos utiles son `status` (estado), `environ` (variables de entorno) y `fd/` (descriptores de archivo).

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="103.7" data-correct="b">

### Pregunta 41 (Subtema 103.7)

En una expresion regular extendida, que metacaracter se usa para indicar alternancia (OR logico)?

- [ ] a) `&`
- [ ] b) `|`
- [ ] c) `/`
- [ ] d) `~`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `|`**

El operador `|` (pipe/barra vertical) en expresiones regulares extendidas funciona como alternancia, coincidiendo con el patron de la izquierda o el de la derecha. Ejemplo: `grep -E "error|warning"` coincide con lineas que contengan "error" o "warning". En BRE se debe escapar: `\|`.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="103.7" data-correct="c">

### Pregunta 42 (Subtema 103.7)

Que expresion regular coincide exactamente con una direccion IPv4 simple como "192.168.1.1" (sin validacion estricta de rango)?

- [ ] a) `[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*`
- [ ] b) `\d{3}.\d{3}.\d{1,3}.\d{1,3}`
- [ ] c) `[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+`
- [ ] d) `[0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+`**

`[0-9]+` coincide con uno o mas digitos (ERE), y `\.` coincide con un punto literal. La opcion a) con `*` aceptaria cero digitos. La opcion d) exige exactamente 3 digitos en cada octeto, lo cual no coincidiria con "1.2.3.4". La opcion b) usa `\d` que no es POSIX estandar.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="103.7" data-correct="a">

### Pregunta 43 (Subtema 103.7)

En una expresion regular, que significa el cuantificador `{2,5}`?

- [ ] a) Coincide con entre 2 y 5 repeticiones del elemento anterior
- [ ] b) Coincide con exactamente 2 o exactamente 5 repeticiones
- [ ] c) Coincide con los caracteres 2 a 5 de la linea
- [ ] d) Coincide con cualquier digito del 2 al 5

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Coincide con entre 2 y 5 repeticiones del elemento anterior**

`{n,m}` es un cuantificador que especifica un rango de repeticiones: minimo `n` y maximo `m`. Asi, `a{2,5}` coincide con "aa", "aaa", "aaaa" o "aaaaa". `{n}` seria exactamente n, y `{n,}` seria al menos n. En BRE se escapan las llaves: `\{2,5\}`.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="103.8" data-correct="d">

### Pregunta 44 (Subtema 103.8)

En vi, estando en modo normal, que tecla permite insertar texto al final de la linea actual?

- [ ] a) `i`
- [ ] b) `o`
- [ ] c) `I`
- [ ] d) `A`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `A`**

`A` (mayuscula) mueve el cursor al final de la linea actual y entra en modo insercion. `a` inserta despues del caracter actual. `i` inserta antes del cursor. `I` (mayuscula) inserta al inicio de la linea. `o` abre una nueva linea debajo de la actual.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="103.8" data-correct="b">

### Pregunta 45 (Subtema 103.8)

En vi, que comando en modo normal elimina la linea completa donde esta el cursor?

- [ ] a) `dl`
- [ ] b) `dd`
- [ ] c) `D`
- [ ] d) `x`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dd`**

`dd` elimina (corta) la linea completa donde se encuentra el cursor. `D` elimina desde la posicion del cursor hasta el final de la linea. `x` elimina solo el caracter bajo el cursor. `dl` elimina un caracter a la derecha (equivalente a `x`). Las lineas eliminadas con `dd` se pueden pegar con `p`.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="104.1" data-correct="c">

### Pregunta 46 (Subtema 104.1)

Que comando crea un sistema de archivos ext4 en la particion `/dev/sdb1`?

- [ ] a) `format ext4 /dev/sdb1`
- [ ] b) `mkpart ext4 /dev/sdb1`
- [ ] c) `mkfs.ext4 /dev/sdb1`
- [ ] d) `fsck.ext4 /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mkfs.ext4 /dev/sdb1`**

`mkfs.ext4` (o `mkfs -t ext4`) crea (formatea) un sistema de archivos ext4 en la particion indicada. `fsck.ext4` se usa para verificar y reparar un sistema de archivos, no para crearlo. No existen comandos `format` ni `mkpart` estandar en Linux para crear filesystems.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="104.1" data-correct="a">

### Pregunta 47 (Subtema 104.1)

Que comando muestra el UUID y el tipo de sistema de archivos de todas las particiones?

- [ ] a) `blkid`
- [ ] b) `lsblk -t`
- [ ] c) `fdisk -l`
- [ ] d) `partprobe`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `blkid`**

`blkid` muestra los atributos de los dispositivos de bloque, incluyendo UUID, tipo de filesystem (TYPE) y etiqueta (LABEL). Estos UUIDs se usan frecuentemente en `/etc/fstab` para identificar particiones de forma unica. `lsblk` muestra dispositivos de bloque pero con `-t` muestra topologia, no UUIDs. `partprobe` relee la tabla de particiones.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="104.1" data-correct="d">

### Pregunta 48 (Subtema 104.1)

Que tipo de sistema de archivos es el predeterminado en la mayoria de las distribuciones Linux modernas para la particion raiz?

- [ ] a) XFS
- [ ] b) Btrfs
- [ ] c) ext3
- [ ] d) ext4

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) ext4**

ext4 (Fourth Extended Filesystem) es el sistema de archivos predeterminado en la mayoria de distribuciones Linux (Debian, Ubuntu, Linux Mint, etc.). Soporta volumenes de hasta 1 EB, archivos de hasta 16 TB y journaling. XFS es el predeterminado en RHEL/CentOS 7+ y Btrfs en openSUSE y Fedora mas recientes.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="104.2" data-correct="b">

### Pregunta 49 (Subtema 104.2)

Que opcion del comando `df` muestra el tipo de sistema de archivos de cada particion montada?

- [ ] a) `df -h`
- [ ] b) `df -T`
- [ ] c) `df -i`
- [ ] d) `df -l`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `df -T`**

`df -T` (type) anade una columna que muestra el tipo de sistema de archivos (ext4, xfs, tmpfs, etc.) de cada particion montada. `-h` muestra tamanos legibles para humanos. `-i` muestra uso de inodos en lugar de bloques. `-l` limita la salida a filesystems locales.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="104.2" data-correct="c">

### Pregunta 50 (Subtema 104.2)

Que comando muestra el espacio utilizado por cada subdirectorio de `/var`, mostrando solo un nivel de profundidad en formato legible?

- [ ] a) `ls -lhS /var`
- [ ] b) `df -h /var`
- [ ] c) `du -h --max-depth=1 /var`
- [ ] d) `stat /var/*`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `du -h --max-depth=1 /var`**

`du -h --max-depth=1 /var` muestra el tamano total de cada subdirectorio inmediato de `/var` en formato legible, sin descender a niveles mas profundos. `df` muestra uso del filesystem completo, no de directorios individuales. `ls -lh` muestra tamanos de archivos pero no el tamano total recursivo de directorios.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="104.3" data-correct="a">

### Pregunta 51 (Subtema 104.3)

Que columna del archivo `/etc/fstab` especifica el punto de montaje del sistema de archivos?

- [ ] a) La segunda columna
- [ ] b) La primera columna
- [ ] c) La tercera columna
- [ ] d) La cuarta columna

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) La segunda columna**

El formato de `/etc/fstab` es: dispositivo (1a), punto de montaje (2a), tipo de filesystem (3a), opciones (4a), dump (5a), pass/fsck (6a). La primera columna identifica el dispositivo (por UUID, LABEL o ruta), y la segunda indica donde se monta en la jerarquia de directorios.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="104.3" data-correct="d">

### Pregunta 52 (Subtema 104.3)

Que comando desmonta todos los sistemas de archivos listados en `/etc/mtab` excepto el raiz?

- [ ] a) `umount /`
- [ ] b) `umount --force`
- [ ] c) `mount -o remount`
- [ ] d) `umount -a`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `umount -a`**

`umount -a` intenta desmontar todos los sistemas de archivos descritos en `/etc/mtab` (o `/proc/mounts`). En la practica, el sistema de archivos raiz y los que estan en uso no se desmontaran. Se usa tipicamente durante el apagado del sistema. `umount /` intentaria desmontar solo el raiz (y fallaria si esta en uso).

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="104.3" data-correct="b">

### Pregunta 53 (Subtema 104.3)

Que opcion de montaje en `/etc/fstab` impide la ejecucion de binarios en un sistema de archivos?

- [ ] a) `ro`
- [ ] b) `noexec`
- [ ] c) `nosuid`
- [ ] d) `noauto`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `noexec`**

La opcion `noexec` impide la ejecucion de cualquier binario en el sistema de archivos montado. Es una medida de seguridad comun para particiones como `/tmp` o `/var`. `ro` monta en solo lectura. `nosuid` ignora los bits SUID/SGID. `noauto` evita el montaje automatico durante el arranque.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="104.5" data-correct="c">

### Pregunta 54 (Subtema 104.5)

Que representa el permiso octal 0755 en notacion simbolica?

- [ ] a) `rw-r--r--`
- [ ] b) `rwxr--r--`
- [ ] c) `rwxr-xr-x`
- [ ] d) `rwxrwxr-x`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rwxr-xr-x`**

En notacion octal, 7 = rwx (4+2+1), 5 = r-x (4+0+1). Asi, 755 da rwx al propietario, r-x al grupo y r-x a otros. Es un permiso comun para directorios y scripts ejecutables donde todos pueden leer y ejecutar pero solo el propietario puede modificar.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="104.5" data-correct="a">

### Pregunta 55 (Subtema 104.5)

Que efecto tiene el bit SGID cuando se aplica a un directorio?

- [ ] a) Los nuevos archivos creados dentro heredan el grupo del directorio, no el grupo primario del usuario
- [ ] b) Solo los miembros del grupo pueden acceder al directorio
- [ ] c) Los archivos dentro del directorio se ejecutan con permisos del grupo
- [ ] d) El directorio no puede ser eliminado por usuarios que no pertenecen al grupo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Los nuevos archivos creados dentro heredan el grupo del directorio, no el grupo primario del usuario**

Cuando el bit SGID (Set Group ID, `chmod g+s` o 2xxx) se establece en un directorio, todos los archivos y subdirectorios creados dentro heredan el grupo del directorio padre en lugar del grupo primario del usuario que los crea. Esto es util para directorios compartidos por un equipo de trabajo.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="104.5" data-correct="d">

### Pregunta 56 (Subtema 104.5)

Que comando cambia el propietario y el grupo de un archivo simultaneamente a "maria" y "desarrollo"?

- [ ] a) `chmod maria:desarrollo archivo`
- [ ] b) `chgrp maria:desarrollo archivo`
- [ ] c) `chown desarrollo:maria archivo`
- [ ] d) `chown maria:desarrollo archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `chown maria:desarrollo archivo`**

`chown usuario:grupo archivo` cambia simultaneamente el propietario y el grupo. El formato es `propietario:grupo` (o `propietario.grupo`). `chmod` modifica permisos, no propietarios. `chgrp` cambia solo el grupo. El orden importa: primero el usuario, luego el grupo.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="104.6" data-correct="b">

### Pregunta 57 (Subtema 104.6)

Cual es la diferencia principal entre un enlace duro (hard link) y un enlace simbolico (soft link)?

- [ ] a) Los enlaces duros pueden apuntar a directorios, los simbolicos no
- [ ] b) Los enlaces duros comparten el mismo inodo que el archivo original, los simbolicos tienen su propio inodo
- [ ] c) Los enlaces simbolicos no se pueden eliminar sin eliminar el archivo original
- [ ] d) Los enlaces duros funcionan entre diferentes sistemas de archivos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Los enlaces duros comparten el mismo inodo que el archivo original, los simbolicos tienen su propio inodo**

Un enlace duro es otra entrada de directorio que apunta al mismo inodo, por lo que comparten datos y metadatos. Un enlace simbolico tiene su propio inodo y contiene la ruta al archivo destino. Los enlaces duros no pueden cruzar sistemas de archivos ni apuntar a directorios (normalmente). Los simbolicos si pueden.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="104.6" data-correct="c">

### Pregunta 58 (Subtema 104.6)

Que sucede cuando se elimina el archivo original al que apunta un enlace simbolico?

- [ ] a) El enlace simbolico se elimina automaticamente
- [ ] b) El enlace simbolico pasa a apuntar a /dev/null
- [ ] c) El enlace simbolico queda roto (dangling symlink) y produce error al acceder
- [ ] d) El contenido del archivo se mantiene accesible a traves del enlace

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El enlace simbolico queda roto (dangling symlink) y produce error al acceder**

Los enlaces simbolicos contienen solo la ruta al archivo destino. Si el archivo original se elimina, el enlace sigue existiendo pero apunta a una ruta inexistente, resultando en un "dangling symlink". Al intentar acceder, se obtiene un error "No such file or directory". En contraste, con enlaces duros, el contenido permanece accesible mientras exista al menos un enlace.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="104.7" data-correct="a">

### Pregunta 59 (Subtema 104.7)

Que opcion de `find` ejecuta un comando sobre cada archivo encontrado, reemplazando `{}` por el nombre del archivo, pero agrupando los resultados para mayor eficiencia?

- [ ] a) `find ... -exec comando {} +`
- [ ] b) `find ... -exec comando {} \;`
- [ ] c) `find ... -ok comando {} \;`
- [ ] d) `find ... -run comando {}`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `find ... -exec comando {} +`**

`-exec comando {} +` agrupa los archivos encontrados y los pasa como multiples argumentos a una sola ejecucion del comando, similar a como funciona `xargs`. Es mas eficiente que `-exec comando {} \;`, que ejecuta el comando una vez por cada archivo encontrado. `-ok` es similar a `-exec \;` pero pide confirmacion al usuario.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="104.7" data-correct="d">

### Pregunta 60 (Subtema 104.7)

Que opcion de `find` busca archivos que han sido modificados en los ultimos 7 dias?

- [ ] a) `find /ruta -mtime 7`
- [ ] b) `find /ruta -atime -7`
- [ ] c) `find /ruta -ctime +7`
- [ ] d) `find /ruta -mtime -7`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `find /ruta -mtime -7`**

`-mtime -7` busca archivos cuyo contenido fue modificado hace menos de 7 dias. El prefijo `-` significa "menos de", `+` significa "mas de" y sin prefijo significa "exactamente". `-atime` se refiere al tiempo de acceso y `-ctime` al cambio de metadatos (inodo), no a la modificacion del contenido.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
