---
title: "Simulacro Examen 101"
tags:
  - lpic-1
  - examen-101
  - simulacro
tipo: simulacro
certificacion: lpic-1
examen: "101"
---

# Simulacro - Examen 101

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="101" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="101.1" data-correct="c">

### Pregunta 1 (Subtema 101.1)

Cual es la diferencia principal entre `modprobe` e `insmod`?

- [ ] a) `modprobe` solo funciona como root
- [ ] b) `insmod` gestiona dependencias automaticamente
- [ ] c) `modprobe` gestiona dependencias automaticamente
- [ ] d) No hay diferencia, son alias

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `modprobe` gestiona dependencias automaticamente**

`modprobe` resuelve y carga automaticamente las dependencias del modulo utilizando la informacion de `/lib/modules/$(uname -r)/modules.dep`. `insmod` requiere la ruta completa del archivo `.ko` y no maneja dependencias.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="101.1" data-correct="c">

### Pregunta 2 (Subtema 101.1)

Que sistema de archivos virtual expone la informacion de dispositivos y drivers del kernel de forma jerarquica?

- [ ] a) procfs (/proc)
- [ ] b) devfs (/dev)
- [ ] c) sysfs (/sys)
- [ ] d) tmpfs (/tmp)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) sysfs (/sys)**

`/sys` (sysfs) expone informacion de dispositivos, buses y drivers de forma jerarquica. `/proc` contiene principalmente informacion de procesos y del kernel, aunque tambien tiene algo de informacion de hardware.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="101.1" data-correct="b">

### Pregunta 3 (Subtema 101.1)

Que archivo contendria una blacklist para evitar que un modulo del kernel se cargue automaticamente?

- [ ] a) `/etc/modules`
- [ ] b) `/etc/modprobe.d/blacklist.conf`
- [ ] c) `/sys/module/blacklist`
- [ ] d) `/proc/modules.deny`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/modprobe.d/blacklist.conf`**

Los archivos en `/etc/modprobe.d/` pueden contener directivas `blacklist nombre_modulo` para evitar que se carguen automaticamente. Cualquier archivo con extension `.conf` en ese directorio es valido.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="101.1" data-correct="b">

### Pregunta 4 (Subtema 101.1)

Que comando usarias para ver los dispositivos PCI junto con los modulos del kernel que los manejan?

- [ ] a) `lspci -v`
- [ ] b) `lspci -k`
- [ ] c) `lspci -t`
- [ ] d) `lsmod -p`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `lspci -k`**

La opcion `-k` de `lspci` muestra el driver del kernel en uso y los modulos del kernel disponibles para cada dispositivo PCI. La opcion `-v` muestra informacion verbose pero no especificamente los modulos del kernel.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="101.1" data-correct="b">

### Pregunta 5 (Subtema 101.1)

Que archivo de `/proc` contiene informacion sobre las interrupciones (IRQs) del sistema?

- [ ] a) `/proc/irq`
- [ ] b) `/proc/interrupts`
- [ ] c) `/proc/dma`
- [ ] d) `/proc/ioports`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/proc/interrupts`**

`/proc/interrupts` muestra el conteo de interrupciones por CPU y por dispositivo. `/proc/dma` muestra los canales DMA registrados y `/proc/ioports` los rangos de puertos de E/S en uso.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="101.2" data-correct="d">

### Pregunta 6 (Subtema 101.2)

Durante el arranque con GRUB 2, que parametro del kernel se usa para arrancar el sistema directamente en una shell de root sin pasar por init?

- [ ] a) `single`
- [ ] b) `runlevel=1`
- [ ] c) `emergency`
- [ ] d) `init=/bin/bash`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `init=/bin/bash`**

El parametro `init=/bin/bash` le dice al kernel que ejecute `/bin/bash` en lugar del proceso init normal. Esto proporciona una shell de root inmediata sin ninguna inicializacion del sistema. `single` y `emergency` siguen ejecutando systemd/init.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="101.2" data-correct="a">

### Pregunta 7 (Subtema 101.2)

En un sistema con GRUB 2, en que directorio se encuentra el archivo principal de configuracion generado?

- [ ] a) `/boot/grub/grub.cfg`
- [ ] b) `/etc/grub/grub.conf`
- [ ] c) `/boot/grub/menu.lst`
- [ ] d) `/etc/grub2.cfg`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `/boot/grub/grub.cfg`**

El archivo principal de GRUB 2 es `/boot/grub/grub.cfg` (o `/boot/grub2/grub.cfg` en algunas distribuciones). Este archivo se genera automaticamente con `grub-mkconfig` y no debe editarse manualmente. Las personalizaciones se hacen en `/etc/default/grub`.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="101.2" data-correct="c">

### Pregunta 8 (Subtema 101.2)

Que comando se utiliza para regenerar la configuracion de GRUB 2 despues de modificar `/etc/default/grub`?

- [ ] a) `grub-install`
- [ ] b) `grub-setup`
- [ ] c) `grub-mkconfig -o /boot/grub/grub.cfg`
- [ ] d) `update-grub2 --rebuild`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `grub-mkconfig -o /boot/grub/grub.cfg`**

`grub-mkconfig` genera un nuevo archivo de configuracion basandose en los scripts de `/etc/grub.d/` y las variables de `/etc/default/grub`. En Debian/Ubuntu, `update-grub` es un wrapper que ejecuta este mismo comando.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="101.3" data-correct="b">

### Pregunta 9 (Subtema 101.3)

En un sistema que usa systemd, que comando muestra el target por defecto al que arranca el sistema?

- [ ] a) `systemctl get-runlevel`
- [ ] b) `systemctl get-default`
- [ ] c) `systemctl show-target`
- [ ] d) `systemctl default --show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `systemctl get-default`**

`systemctl get-default` muestra el target por defecto (por ejemplo, `graphical.target` o `multi-user.target`). Para cambiarlo se usa `systemctl set-default nombre.target`.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="101.3" data-correct="c">

### Pregunta 10 (Subtema 101.3)

Cual es el equivalente en systemd del runlevel 3 de SysVinit?

- [ ] a) `rescue.target`
- [ ] b) `graphical.target`
- [ ] c) `multi-user.target`
- [ ] d) `network.target`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `multi-user.target`**

`multi-user.target` equivale al runlevel 3 (modo multiusuario con red, sin interfaz grafica). `graphical.target` equivale al runlevel 5, y `rescue.target` al runlevel 1.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="101.3" data-correct="a">

### Pregunta 11 (Subtema 101.3)

Que comando de systemd se utiliza para enviar un mensaje de apagado a todos los usuarios y programar el apagado del sistema en 10 minutos?

- [ ] a) `shutdown +10`
- [ ] b) `systemctl poweroff +10`
- [ ] c) `halt --delay 10`
- [ ] d) `poweroff -t 10`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `shutdown +10`**

El comando `shutdown` acepta un argumento de tiempo como `+10` (minutos) o una hora especifica `HH:MM`. Envia un aviso a todos los usuarios conectados. `shutdown -c` cancela un apagado programado.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="102.1" data-correct="d">

### Pregunta 12 (Subtema 102.1)

Que esquema de particionado permite crear mas de 4 particiones sin necesidad de particiones extendidas y soporta discos mayores de 2 TB?

- [ ] a) MBR
- [ ] b) LVM
- [ ] c) RAID
- [ ] d) GPT

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) GPT**

GPT (GUID Partition Table) soporta hasta 128 particiones por defecto, discos de hasta 9.4 ZB y no necesita el concepto de particiones extendidas/logicas. MBR esta limitado a 4 particiones primarias y 2 TB.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="102.1" data-correct="b">

### Pregunta 13 (Subtema 102.1)

En un esquema de particionado MBR, cual es el numero maximo de particiones primarias que se pueden crear?

- [ ] a) 2
- [ ] b) 4
- [ ] c) 8
- [ ] d) 16

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) 4**

MBR permite un maximo de 4 particiones primarias. Para tener mas particiones, una de las primarias debe ser una particion extendida que contenga particiones logicas.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="102.2" data-correct="c">

### Pregunta 14 (Subtema 102.2)

En un sistema con UEFI, que tipo de particion es necesaria para almacenar los cargadores de arranque?

- [ ] a) `/boot`
- [ ] b) Particion swap
- [ ] c) ESP (EFI System Partition)
- [ ] d) Particion BIOS boot

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) ESP (EFI System Partition)**

La ESP es una particion FAT32 (normalmente montada en `/boot/efi`) que contiene los cargadores de arranque EFI. Es obligatoria en sistemas UEFI. La particion BIOS boot se usa para GRUB en discos GPT con BIOS legacy.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="102.3" data-correct="b">

### Pregunta 15 (Subtema 102.3)

Que gestor de paquetes es compartido por Debian y sus distribuciones derivadas como Ubuntu?

- [ ] a) yum
- [ ] b) dpkg/apt
- [ ] c) rpm/dnf
- [ ] d) pacman

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) dpkg/apt**

Las distribuciones basadas en Debian (Ubuntu, Linux Mint, etc.) utilizan `dpkg` como gestor de paquetes de bajo nivel y `apt`/`apt-get` como herramienta de alto nivel que gestiona dependencias y repositorios.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="102.4" data-correct="a">

### Pregunta 16 (Subtema 102.4)

Que comando de dpkg muestra todos los paquetes instalados en el sistema?

- [ ] a) `dpkg -l`
- [ ] b) `dpkg -S`
- [ ] c) `dpkg -L`
- [ ] d) `dpkg -s`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `dpkg -l`**

`dpkg -l` lista todos los paquetes conocidos y su estado. `dpkg -L paquete` lista los archivos de un paquete instalado. `dpkg -S archivo` busca a que paquete pertenece un archivo. `dpkg -s paquete` muestra el estado de un paquete.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="102.4" data-correct="d">

### Pregunta 17 (Subtema 102.4)

Que comando instala un paquete `.deb` local resolviendo automaticamente las dependencias desde los repositorios?

- [ ] a) `dpkg -i paquete.deb`
- [ ] b) `apt-get install paquete.deb`
- [ ] c) `dpkg --configure paquete.deb`
- [ ] d) `apt install ./paquete.deb`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `apt install ./paquete.deb`**

`apt install ./paquete.deb` instala un paquete local y resuelve dependencias automaticamente desde los repositorios configurados. `dpkg -i` instala el paquete pero no resuelve dependencias; si faltan, habria que ejecutar `apt-get install -f` despues.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="102.5" data-correct="c">

### Pregunta 18 (Subtema 102.5)

Que comando de RPM muestra a que paquete pertenece un archivo determinado?

- [ ] a) `rpm -ql archivo`
- [ ] b) `rpm -qi archivo`
- [ ] c) `rpm -qf /ruta/archivo`
- [ ] d) `rpm -qa archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `rpm -qf /ruta/archivo`**

`rpm -qf /ruta/archivo` consulta que paquete instalo ese archivo. `-ql paquete` lista archivos de un paquete, `-qi paquete` muestra informacion del paquete, y `-qa` lista todos los paquetes instalados.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="102.5" data-correct="a">

### Pregunta 19 (Subtema 102.5)

Que opcion de `rpm` se utiliza para verificar la integridad de un paquete instalado comparando los archivos con la base de datos RPM?

- [ ] a) `rpm -V paquete`
- [ ] b) `rpm -K paquete`
- [ ] c) `rpm --check paquete`
- [ ] d) `rpm -q --verify paquete.rpm`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `rpm -V paquete`**

`rpm -V` (o `--verify`) compara los atributos de los archivos instalados (tamano, permisos, checksum, etc.) con la informacion almacenada en la base de datos RPM. `rpm -K` verifica la firma de un archivo `.rpm` descargado.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="102.6" data-correct="b">

### Pregunta 20 (Subtema 102.6)

Que herramienta de alto nivel se usa en distribuciones basadas en Red Hat para gestionar paquetes resolviendo dependencias automaticamente?

- [ ] a) `rpm`
- [ ] b) `dnf`
- [ ] c) `dpkg`
- [ ] d) `zypper`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dnf`**

`dnf` (Dandified YUM) es el gestor de paquetes de alto nivel en Fedora, RHEL 8+ y derivados. Reemplazo a `yum` y gestiona dependencias, repositorios y actualizaciones. `zypper` es el equivalente en openSUSE.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="103.1" data-correct="d">

### Pregunta 21 (Subtema 103.1)

Que comando muestra el contenido de la variable de entorno PATH?

- [ ] a) `path`
- [ ] b) `show PATH`
- [ ] c) `cat $PATH`
- [ ] d) `echo $PATH`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `echo $PATH`**

`echo $PATH` muestra el contenido de la variable de entorno PATH, que contiene los directorios donde el shell busca los comandos ejecutables, separados por dos puntos (`:`).

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="103.1" data-correct="a">

### Pregunta 22 (Subtema 103.1)

Que hace el comando `type`?

- [ ] a) Indica si un comando es un alias, funcion, builtin o archivo ejecutable
- [ ] b) Muestra el tipo de archivo (texto, binario, etc.)
- [ ] c) Clasifica los archivos por tipo
- [ ] d) Cambia el tipo de un archivo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Indica si un comando es un alias, funcion, builtin o archivo ejecutable**

`type comando` muestra como el shell interpreta el comando: si es un alias, una funcion de shell, un builtin del shell o un comando externo (mostrando su ruta). Es util para depurar que version de un comando se esta ejecutando.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="103.1" data-correct="c">

### Pregunta 23 (Subtema 103.1)

Que archivo se ejecuta solo cuando un usuario inicia sesion interactiva de login en Bash?

- [ ] a) `~/.bashrc`
- [ ] b) `/etc/bash.bashrc`
- [ ] c) `~/.bash_profile`
- [ ] d) `/etc/environment`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `~/.bash_profile`**

`~/.bash_profile` (o `~/.bash_login` o `~/.profile`) se ejecuta en shells de login interactivos. `~/.bashrc` se ejecuta en shells interactivos no-login. Es comun que `~/.bash_profile` incluya un `source ~/.bashrc`.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="103.1" data-correct="b">

### Pregunta 24 (Subtema 103.1)

Cual es la diferencia entre `which` y `whereis`?

- [ ] a) No hay ninguna diferencia practica
- [ ] b) `which` busca solo en PATH; `whereis` busca tambien paginas man y codigo fuente
- [ ] c) `whereis` busca solo en PATH; `which` busca tambien paginas man
- [ ] d) `which` muestra todos los resultados; `whereis` solo el primero

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `which` busca solo en PATH; `whereis` busca tambien paginas man y codigo fuente**

`which` localiza un ejecutable buscando en los directorios de la variable PATH. `whereis` busca el binario, las paginas del manual y el codigo fuente en ubicaciones estandar del sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="103.2" data-correct="a">

### Pregunta 25 (Subtema 103.2)

Que comando aplica un filtro de texto linea por linea y permite hacer sustituciones usando expresiones regulares?

- [ ] a) `sed`
- [ ] b) `grep`
- [ ] c) `cut`
- [ ] d) `tr`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `sed`**

`sed` (stream editor) procesa texto linea por linea y es especialmente utilizado para sustituciones con `sed 's/patron/reemplazo/g'`. `grep` filtra lineas que coinciden, `cut` extrae campos y `tr` traduce o elimina caracteres.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="103.2" data-correct="d">

### Pregunta 26 (Subtema 103.2)

Que comando de `sed` reemplaza TODAS las ocurrencias de "foo" por "bar" en cada linea de un archivo?

- [ ] a) `sed 's/foo/bar/' archivo`
- [ ] b) `sed 'r/foo/bar/' archivo`
- [ ] c) `sed 'c/foo/bar/g' archivo`
- [ ] d) `sed 's/foo/bar/g' archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `sed 's/foo/bar/g' archivo`**

El flag `g` al final del comando de sustitucion de `sed` indica que se reemplacen todas las ocurrencias en cada linea. Sin `g`, solo se reemplaza la primera ocurrencia de cada linea.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="103.2" data-correct="c">

### Pregunta 27 (Subtema 103.2)

Que hace el siguiente comando: `awk -F: '{print $1, $3}' /etc/passwd`?

- [ ] a) Muestra las lineas que contienen dos puntos
- [ ] b) Elimina el primer y tercer campo del archivo
- [ ] c) Imprime el nombre de usuario y el UID de cada entrada
- [ ] d) Reemplaza el delimitador por espacios

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Imprime el nombre de usuario y el UID de cada entrada**

`-F:` establece los dos puntos como separador de campos. `$1` es el primer campo (nombre de usuario) y `$3` es el tercero (UID) en el formato de `/etc/passwd`.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="103.3" data-correct="b">

### Pregunta 28 (Subtema 103.3)

Que hace el operador `2>&1` en la linea de comandos?

- [ ] a) Redirige stdin a stdout
- [ ] b) Redirige stderr al mismo destino que stdout
- [ ] c) Redirige stdout a stderr
- [ ] d) Duplica el descriptor de archivo 1

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Redirige stderr al mismo destino que stdout**

`2>&1` redirige el descriptor de archivo 2 (stderr) al mismo lugar que el descriptor 1 (stdout). Es comun usarlo con `>` para capturar ambas salidas: `comando > archivo 2>&1`.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="103.3" data-correct="c">

### Pregunta 29 (Subtema 103.3)

Que hace el comando `tee` en un pipeline?

- [ ] a) Divide la entrada en multiples archivos por tamano
- [ ] b) Filtra las lineas duplicadas
- [ ] c) Escribe la entrada tanto a stdout como a uno o mas archivos
- [ ] d) Combina multiples entradas en una sola salida

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Escribe la entrada tanto a stdout como a uno o mas archivos**

`tee` lee de stdin y escribe simultaneamente a stdout y a los archivos especificados. Ejemplo: `ls -l | tee listado.txt` muestra el resultado en pantalla y lo guarda en el archivo.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="103.3" data-correct="a">

### Pregunta 30 (Subtema 103.3)

Que resultado produce el comando `cat archivo1 archivo2 > combinado.txt`?

- [ ] a) Concatena el contenido de ambos archivos en combinado.txt
- [ ] b) Copia archivo1 y archivo2 al directorio combinado.txt
- [ ] c) Muestra los archivos en paralelo
- [ ] d) Compara los dos archivos y guarda las diferencias

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Concatena el contenido de ambos archivos en combinado.txt**

`cat` concatena los archivos dados como argumentos y los escribe a stdout. Con `>` se redirige esa salida a `combinado.txt`, creando el archivo o sobreescribiendolo si ya existe.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="103.3" data-correct="d">

### Pregunta 31 (Subtema 103.3)

Que hace `xargs` en un pipeline?

- [ ] a) Cuenta el numero de argumentos
- [ ] b) Ordena los argumentos alfabeticamente
- [ ] c) Elimina argumentos duplicados
- [ ] d) Construye y ejecuta comandos a partir de la entrada estandar

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Construye y ejecuta comandos a partir de la entrada estandar**

`xargs` lee elementos de stdin y los pasa como argumentos a un comando. Ejemplo: `find /tmp -name "*.log" | xargs rm` construye el comando `rm` con los archivos encontrados como argumentos.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="103.4" data-correct="b">

### Pregunta 32 (Subtema 103.4)

Que opcion de `grep` muestra solo las lineas que NO coinciden con el patron?

- [ ] a) `grep -c`
- [ ] b) `grep -v`
- [ ] c) `grep -n`
- [ ] d) `grep -l`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `grep -v`**

`grep -v` invierte la busqueda, mostrando las lineas que no contienen el patron. `-c` cuenta las coincidencias, `-n` muestra numeros de linea y `-l` muestra solo nombres de archivos que contienen coincidencias.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="103.4" data-correct="a">

### Pregunta 33 (Subtema 103.4)

Que expresion regular coincide con lineas que comienzan con un digito?

- [ ] a) `^[0-9]`
- [ ] b) `[0-9]$`
- [ ] c) `\d*`
- [ ] d) `^[a-z0-9]`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `^[0-9]`**

`^` indica el inicio de la linea y `[0-9]` coincide con cualquier digito. Juntos, `^[0-9]` coincide con lineas que comienzan con un digito. `$` indica fin de linea, y `[a-z0-9]` incluiria tambien letras.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="103.4" data-correct="c">

### Pregunta 34 (Subtema 103.4)

Que diferencia hay entre `grep` y `egrep`?

- [ ] a) `egrep` busca solo en archivos binarios
- [ ] b) `grep` soporta expresiones regulares extendidas y `egrep` no
- [ ] c) `egrep` soporta expresiones regulares extendidas sin necesidad de escapar metacaracteres
- [ ] d) `egrep` es mas rapido pero menos preciso

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `egrep` soporta expresiones regulares extendidas sin necesidad de escapar metacaracteres**

`egrep` equivale a `grep -E` y permite usar metacaracteres extendidos como `+`, `?`, `|` y `()` directamente. Con `grep` basico, estos deben escaparse (`\+`, `\?`, `\|`, `\(\)`).

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="103.4" data-correct="d">

### Pregunta 35 (Subtema 103.4)

Que comando busca recursivamente la cadena "error" en todos los archivos del directorio `/var/log`, ignorando mayusculas y minusculas?

- [ ] a) `grep -l "error" /var/log`
- [ ] b) `grep -n "error" /var/log/*`
- [ ] c) `grep -r "Error" /var/log`
- [ ] d) `grep -ri "error" /var/log`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `grep -ri "error" /var/log`**

`-r` activa la busqueda recursiva en subdirectorios, e `-i` ignora la distincion entre mayusculas y minusculas. Sin `-r`, grep no buscaria dentro de subdirectorios. Sin `-i`, no encontraria "Error" o "ERROR".

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="103.5" data-correct="b">

### Pregunta 36 (Subtema 103.5)

Que comando se usa para enviar la senal SIGKILL a un proceso con PID 1234?

- [ ] a) `kill 1234`
- [ ] b) `kill -9 1234`
- [ ] c) `kill -15 1234`
- [ ] d) `kill -HUP 1234`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `kill -9 1234`**

`kill -9` envia la senal SIGKILL (senal 9) que termina el proceso de forma inmediata e incondicional. `kill` sin opciones envia SIGTERM (15), que permite al proceso terminar ordenadamente. SIGHUP (1) recarga la configuracion.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="103.5" data-correct="c">

### Pregunta 37 (Subtema 103.5)

Que comando muestra los procesos en forma de arbol jerarquico mostrando las relaciones padre-hijo?

- [ ] a) `ps -ef`
- [ ] b) `top -t`
- [ ] c) `pstree`
- [ ] d) `ps --tree`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `pstree`**

`pstree` muestra los procesos en una estructura de arbol que visualiza las relaciones padre-hijo. `ps -ef` lista todos los procesos pero en formato plano. `ps auxf` tambien muestra un arbol pero menos visual que `pstree`.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="103.5" data-correct="a">

### Pregunta 38 (Subtema 103.5)

Que hace el comando `nohup`?

- [ ] a) Permite que un proceso continue ejecutandose despues de cerrar la terminal
- [ ] b) Reduce la prioridad de un proceso
- [ ] c) Ejecuta un proceso sin acceso a la red
- [ ] d) Detiene temporalmente un proceso

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Permite que un proceso continue ejecutandose despues de cerrar la terminal**

`nohup` hace que un proceso ignore la senal SIGHUP, que normalmente se envia cuando se cierra la terminal. La salida se redirige por defecto a `nohup.out` si no se especifica otra redireccion.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="103.5" data-correct="d">

### Pregunta 39 (Subtema 103.5)

Que comando cambia la prioridad de un proceso ya en ejecucion con PID 5678 a un valor nice de 10?

- [ ] a) `nice -n 10 -p 5678`
- [ ] b) `nice 10 5678`
- [ ] c) `renice 5678 10`
- [ ] d) `renice -n 10 -p 5678`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `renice -n 10 -p 5678`**

`renice` modifica la prioridad de procesos ya en ejecucion. `nice` se usa para iniciar un nuevo proceso con una prioridad especifica. Los valores nice van de -20 (maxima prioridad) a 19 (minima prioridad).

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="103.6" data-correct="b">

### Pregunta 40 (Subtema 103.6)

Que campo del archivo `/etc/passwd` especifica el shell por defecto de un usuario?

- [ ] a) El quinto campo
- [ ] b) El septimo campo (ultimo)
- [ ] c) El segundo campo
- [ ] d) El sexto campo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) El septimo campo (ultimo)**

El formato de `/etc/passwd` es: `usuario:x:UID:GID:GECOS:home:shell`. El septimo y ultimo campo define el shell por defecto. `/sbin/nologin` o `/bin/false` indica que el usuario no puede iniciar sesion interactiva.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="103.6" data-correct="a">

### Pregunta 41 (Subtema 103.6)

Que hace el comando `chage -l usuario`?

- [ ] a) Muestra la informacion de caducidad de la contrasena del usuario
- [ ] b) Cambia la contrasena del usuario
- [ ] c) Bloquea la cuenta del usuario
- [ ] d) Lista los grupos del usuario

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Muestra la informacion de caducidad de la contrasena del usuario**

`chage -l` muestra la politica de contrasenas: fecha del ultimo cambio, caducidad, dias de aviso, etc. `chage` (change age) tambien permite modificar estos parametros con opciones como `-M` (dias maximos) y `-E` (fecha de expiracion).

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="103.7" data-correct="c">

### Pregunta 42 (Subtema 103.7)

Que expresion regular extendida coincide con una o mas ocurrencias del caracter "a"?

- [ ] a) `a*`
- [ ] b) `a?`
- [ ] c) `a+`
- [ ] d) `a{1}`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `a+`**

En expresiones regulares extendidas, `+` significa "una o mas ocurrencias". `*` significa "cero o mas", `?` significa "cero o una", y `{1}` significa "exactamente una".

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="103.7" data-correct="a">

### Pregunta 43 (Subtema 103.7)

Que comando busca con expresiones regulares basicas y necesita escapar metacaracteres como `+` y `|`?

- [ ] a) `grep`
- [ ] b) `egrep`
- [ ] c) `grep -E`
- [ ] d) `grep -P`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `grep`**

`grep` sin opciones usa expresiones regulares basicas (BRE), donde `+`, `?`, `|`, `(` y `)` son literales y deben escaparse para funcionar como metacaracteres. `grep -E` y `egrep` usan ERE donde estos metacaracteres funcionan directamente.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="103.8" data-correct="d">

### Pregunta 44 (Subtema 103.8)

Que editor de texto opera en tres modos: normal, insercion y linea de comandos?

- [ ] a) nano
- [ ] b) emacs
- [ ] c) ed
- [ ] d) vi/vim

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) vi/vim**

`vi` tiene tres modos principales: modo normal (navegacion y comandos), modo insercion (escritura de texto, se accede con `i`, `a`, `o`, etc.) y modo linea de comandos (se accede con `:` para guardar, salir, buscar, etc.).

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="103.8" data-correct="b">

### Pregunta 45 (Subtema 103.8)

En vi, que comando guarda el archivo y sale del editor?

- [ ] a) `:q!`
- [ ] b) `:wq`
- [ ] c) `:w`
- [ ] d) `:x!`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `:wq`**

`:wq` escribe (write) el archivo y sale (quit) del editor. `:q!` sale sin guardar cambios. `:w` solo guarda sin salir. `:x` tambien guarda y sale pero solo escribe si hubo cambios.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="104.1" data-correct="c">

### Pregunta 46 (Subtema 104.1)

Que comando crea una nueva particion en un disco con tabla de particiones GPT de forma interactiva?

- [ ] a) `fdisk`
- [ ] b) `parted`
- [ ] c) `gdisk`
- [ ] d) `mkpart`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `gdisk`**

`gdisk` es la herramienta interactiva especifica para discos con GPT (similar a `fdisk` para MBR). `fdisk` tradicionalmente solo soportaba MBR, aunque versiones modernas ya soportan GPT. `parted` funciona con ambos pero tiene interfaz diferente.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="104.1" data-correct="a">

### Pregunta 47 (Subtema 104.1)

Que comando muestra informacion sobre los dispositivos de bloque del sistema en formato de arbol?

- [ ] a) `lsblk`
- [ ] b) `blkid`
- [ ] c) `fdisk -l`
- [ ] d) `df -h`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `lsblk`**

`lsblk` muestra los dispositivos de bloque en un formato de arbol que visualiza la relacion entre discos, particiones y puntos de montaje. `blkid` muestra UUIDs y tipos de filesystem. `fdisk -l` lista las particiones. `df` muestra el uso de espacio.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="104.1" data-correct="b">

### Pregunta 48 (Subtema 104.1)

Que tipo de particion en un esquema MBR puede contener particiones logicas?

- [ ] a) Primaria
- [ ] b) Extendida
- [ ] c) Swap
- [ ] d) LVM

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Extendida**

La particion extendida es un contenedor que puede albergar multiples particiones logicas. Solo puede existir una particion extendida por disco MBR, y ocupa una de las cuatro entradas de particion primaria.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="104.2" data-correct="d">

### Pregunta 49 (Subtema 104.2)

Que opcion del comando `df` muestra el uso de disco en un formato legible para humanos (KB, MB, GB)?

- [ ] a) `df -a`
- [ ] b) `df -i`
- [ ] c) `df -T`
- [ ] d) `df -h`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `df -h`**

`df -h` (human-readable) muestra los tamanos en KB, MB o GB segun corresponda. `-i` muestra informacion de inodos. `-T` muestra el tipo de filesystem. `-a` incluye filesystems virtuales.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="104.2" data-correct="a">

### Pregunta 50 (Subtema 104.2)

Que comando muestra el espacio en disco utilizado por un directorio y sus contenidos?

- [ ] a) `du -sh /directorio`
- [ ] b) `df /directorio`
- [ ] c) `ls -lS /directorio`
- [ ] d) `stat /directorio`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `du -sh /directorio`**

`du` (disk usage) calcula el espacio usado por archivos y directorios. `-s` muestra solo el total resumido, y `-h` lo muestra en formato legible. `df` muestra el uso del filesystem completo, no de un directorio individual.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="104.3" data-correct="c">

### Pregunta 51 (Subtema 104.3)

Que opcion de `mount` monta un filesystem en modo solo lectura?

- [ ] a) `mount -t ro`
- [ ] b) `mount -n`
- [ ] c) `mount -o ro`
- [ ] d) `mount -r only`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mount -o ro`**

`-o ro` (read-only) monta el filesystem en modo solo lectura. `-o rw` lo monta en lectura-escritura. La opcion `-t` especifica el tipo de filesystem, y `-n` monta sin escribir en `/etc/mtab`.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="104.3" data-correct="b">

### Pregunta 52 (Subtema 104.3)

En el archivo `/etc/fstab`, que valor en el sexto campo (fs_passno) indica que el filesystem debe ser verificado primero durante el arranque?

- [ ] a) 0
- [ ] b) 1
- [ ] c) 2
- [ ] d) -1

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) 1**

En `/etc/fstab`, el sexto campo indica el orden de verificacion con `fsck`: `1` para el filesystem raiz (verificado primero), `2` para otros filesystems (verificados despues), y `0` para omitir la verificacion.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="104.5" data-correct="a">

### Pregunta 53 (Subtema 104.5)

Que comando establece permisos de lectura y ejecucion para el propietario, y solo lectura para grupo y otros?

- [ ] a) `chmod 544 archivo`
- [ ] b) `chmod 754 archivo`
- [ ] c) `chmod 644 archivo`
- [ ] d) `chmod 511 archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `chmod 544 archivo`**

En notacion octal: 5 = lectura (4) + ejecucion (1) para el propietario, 4 = lectura para grupo, 4 = lectura para otros. 754 daria rwx al propietario y rx al grupo. 644 daria rw al propietario.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="104.5" data-correct="c">

### Pregunta 54 (Subtema 104.5)

Que efecto tiene el bit SUID cuando se establece en un archivo ejecutable?

- [ ] a) El archivo solo puede ser ejecutado por el propietario
- [ ] b) El archivo se ejecuta con los permisos del grupo propietario
- [ ] c) El archivo se ejecuta con los permisos del usuario propietario del archivo
- [ ] d) El archivo no puede ser eliminado por otros usuarios

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) El archivo se ejecuta con los permisos del usuario propietario del archivo**

El bit SUID (Set User ID, `chmod u+s` o 4xxx) hace que el ejecutable se ejecute con los privilegios del propietario del archivo, no del usuario que lo ejecuta. Ejemplo clasico: `/usr/bin/passwd` tiene SUID para poder modificar `/etc/shadow`.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="104.5" data-correct="d">

### Pregunta 55 (Subtema 104.5)

Que efecto tiene el sticky bit en un directorio?

- [ ] a) Solo root puede acceder al directorio
- [ ] b) Los archivos creados heredan el grupo del directorio
- [ ] c) El directorio se monta automaticamente al acceder
- [ ] d) Solo el propietario de un archivo (o root) puede eliminarlo dentro del directorio

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Solo el propietario de un archivo (o root) puede eliminarlo dentro del directorio**

El sticky bit (`chmod +t` o 1xxx) en un directorio impide que los usuarios borren o renombren archivos de otros usuarios. El ejemplo clasico es `/tmp`, que tiene permisos 1777.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="104.6" data-correct="b">

### Pregunta 56 (Subtema 104.6)

Que comando crea un enlace simbolico llamado `link_actual` que apunta a `/etc/config.conf`?

- [ ] a) `ln /etc/config.conf link_actual`
- [ ] b) `ln -s /etc/config.conf link_actual`
- [ ] c) `link -s /etc/config.conf link_actual`
- [ ] d) `cp -l /etc/config.conf link_actual`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ln -s /etc/config.conf link_actual`**

`ln -s` crea un enlace simbolico (soft link). Sin `-s`, `ln` crea un enlace duro (hard link). Los enlaces simbolicos pueden apuntar a directorios y a archivos en otros filesystems, mientras que los duros no.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="104.7" data-correct="a">

### Pregunta 57 (Subtema 104.7)

Que comando busca archivos en el sistema por nombre, tamano, tipo, permisos y otros atributos?

- [ ] a) `find`
- [ ] b) `locate`
- [ ] c) `which`
- [ ] d) `ls -R`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `find`**

`find` busca archivos recorriendo el arbol de directorios en tiempo real y soporta criterios como `-name`, `-size`, `-type`, `-perm`, `-user`, `-mtime`, etc. `locate` usa una base de datos preindexada y solo busca por nombre.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="104.7" data-correct="c">

### Pregunta 58 (Subtema 104.7)

Que comando de `find` localiza todos los archivos regulares mayores de 100 MB en el directorio `/home`?

- [ ] a) `find /home -size 100M`
- [ ] b) `find /home -type f -max 100M`
- [ ] c) `find /home -type f -size +100M`
- [ ] d) `find /home -filesize >100M`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `find /home -type f -size +100M`**

`-type f` selecciona solo archivos regulares y `-size +100M` busca archivos mayores de 100 megabytes. El prefijo `+` significa "mayor que", `-` significa "menor que", y sin prefijo significa "exactamente".

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="104.7" data-correct="b">

### Pregunta 59 (Subtema 104.7)

Que comando actualiza la base de datos utilizada por `locate`?

- [ ] a) `locate --update`
- [ ] b) `updatedb`
- [ ] c) `locatedb --refresh`
- [ ] d) `mlocate --rebuild`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `updatedb`**

`updatedb` reconstruye la base de datos de `locate` (normalmente `/var/lib/mlocate/mlocate.db`). Se ejecuta tipicamente via cron diariamente. La configuracion esta en `/etc/updatedb.conf`.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="104.7" data-correct="d">

### Pregunta 60 (Subtema 104.7)

Que hace el siguiente comando: `find /var/log -name "*.log" -mtime +30 -exec rm {} \;`?

- [ ] a) Lista los archivos .log modificados en los ultimos 30 dias
- [ ] b) Comprime los archivos .log mayores de 30 MB
- [ ] c) Mueve los archivos .log de mas de 30 dias a /tmp
- [ ] d) Elimina los archivos .log que no han sido modificados en mas de 30 dias

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Elimina los archivos .log que no han sido modificados en mas de 30 dias**

`-name "*.log"` filtra por extension, `-mtime +30` selecciona archivos modificados hace mas de 30 dias, y `-exec rm {} \;` ejecuta `rm` sobre cada archivo encontrado. `{}` se sustituye por el nombre del archivo.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
