---
title: "201.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "201.2"
---

# Flashcards: 201.2 - Compilacion Del Kernel

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cual es el orden correcto de los pasos para compilar e instalar un kernel personalizado?

</div>
<div class="flashcard-back">

**R:** b) make bzImage → make modules → make modules_install → make install. El orden correcto es: primero compilar la imagen del kernel (`bzImage`), luego compilar los modulos (`modules`), despues instalar los modulos en `/lib/modules/<version>/` (`modules_install`), y finalmente instalar el kernel en `/boot/` (`install`). Los modulos deben compilarse antes de instalarlos, y el kernel debe compilarse antes de instalarlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-002">
<div class="flashcard-front">

**P:** Un administrador tiene un archivo `.config` de un kernel 5.10 y quiere usarlo para compilar un kernel 5.15. ¿Que comando es el mas apropiado para actualizar la configuracion?

</div>
<div class="flashcard-back">

**R:** c) `make oldconfig`. `make oldconfig` lee el `.config` existente y solo pregunta por las opciones nuevas que no existian en la version anterior. Es la forma mas eficiente de migrar una configuracion entre versiones de kernel. `make menuconfig` mostraria todas las opciones, `make defconfig` descartaria la configuracion anterior, y `make mrproper` eliminaria el `.config`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-003">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia entre `make clean` y `make mrproper`?

</div>
<div class="flashcard-back">

**R:** b) `make clean` elimina archivos objeto pero conserva `.config`; `make mrproper` elimina todo incluyendo `.config`. `make clean` elimina los archivos generados durante la compilacion (archivos `.o`, la imagen del kernel, etc.) pero preserva el archivo `.config` y otros archivos de configuracion. `make mrproper` realiza una limpieza completa, eliminando ademas `.config`, backups y archivos de configuracion. Siempre respalda `.config` antes de `make mrproper`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que herramienta se utiliza en distribuciones basadas en Red Hat/Fedora para generar la imagen initramfs?

</div>
<div class="flashcard-back">

**R:** c) `dracut`. `dracut` es la herramienta estandar en Red Hat, Fedora, CentOS y SUSE para generar imagenes initramfs. `mkinitramfs` y `update-initramfs` son herramientas de Debian/Ubuntu. `dracut` ha reemplazado al antiguo `mkinitrd` en las distribuciones de la familia Red Hat.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-005">
<div class="flashcard-front">

**P:** ¿Donde instala `make modules_install` los modulos compilados?

</div>
<div class="flashcard-back">

**R:** c) `/lib/modules/<version>/`. `make modules_install` copia todos los modulos compilados (archivos `.ko`) al directorio `/lib/modules/<version>/` organizado en subdirectorios segun su categoria (kernel/drivers/, kernel/fs/, kernel/net/, etc.). Tambien genera el archivo `modules.dep` con las dependencias entre modulos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que funcion cumple DKMS en la gestion del kernel?

</div>
<div class="flashcard-back">

**R:** b) Recompila automaticamente modulos de terceros cuando se instala un nuevo kernel. DKMS (Dynamic Kernel Module Support) mantiene el codigo fuente de modulos de terceros (como drivers de NVIDIA, VirtualBox, etc.) y los recompila automaticamente cuando se instala una nueva version del kernel. Sin DKMS, estos modulos dejarian de funcionar despues de cada actualizacion del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-007">
<div class="flashcard-front">

**P:** Un administrador quiere compilar el kernel usando 8 hilos para acelerar el proceso. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** b) `make -j8`. La opcion `-j` (jobs) de `make` permite ejecutar multiples procesos de compilacion en paralelo. `-j8` ejecuta hasta 8 procesos simultaneos. Es comun usar `make -j$(nproc)` para usar automaticamente tantos hilos como nucleos tenga el sistema, optimizando el tiempo de compilacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que interfaz utiliza `make menuconfig` para la configuracion del kernel?

</div>
<div class="flashcard-back">

**R:** c) Interfaz de texto basada en ncurses. `make menuconfig` utiliza la biblioteca ncurses para mostrar una interfaz de menus basada en texto (TUI - Text User Interface). Es la opcion mas popular porque funciona en terminales sin entorno grafico. `make xconfig` usa Qt, `make gconfig` usa GTK, y `make config` es solo linea de comandos pregunta a pregunta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-009">
<div class="flashcard-front">

**P:** ¿Donde se almacena el codigo fuente de los modulos gestionados por DKMS?

</div>
<div class="flashcard-back">

**R:** b) `/usr/src/<modulo>-<version>/`. DKMS almacena el codigo fuente de los modulos en `/usr/src/<nombre-modulo>-<version>/`. Cada modulo tiene un archivo `dkms.conf` en ese directorio que define las instrucciones de compilacion. El arbol de compilacion de DKMS se mantiene en `/var/lib/dkms/` donde se guardan los modulos ya compilados para cada version del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-010">
<div class="flashcard-front">

**P:** Despues de compilar un kernel personalizado, ¿que hace exactamente el comando `make install`?

</div>
<div class="flashcard-back">

**R:** b) Copia vmlinuz, System.map y config a /boot/, y ejecuta scripts de post-instalacion que pueden actualizar el bootloader. `make install` copia la imagen del kernel (`vmlinuz`), la tabla de simbolos (`System.map`) y la configuracion (`.config`) al directorio `/boot/` con el sufijo de version apropiado. Ademas, ejecuta el script `/sbin/installkernel` si existe, que en muchas distribuciones actualiza automaticamente la configuracion del bootloader (GRUB). No compila ni instala modulos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-011">
<div class="flashcard-front">

**P:** Un administrador ejecuta `make defconfig`. ¿Que efecto tiene este comando?

</div>
<div class="flashcard-back">

**R:** b) Genera un archivo `.config` con la configuracion por defecto para la arquitectura actual. `make defconfig` crea un archivo `.config` nuevo basado en los valores por defecto definidos por los desarrolladores del kernel para la arquitectura del sistema actual (x86, ARM, etc.). Esto sobrescribe cualquier `.config` existente. Es util como punto de partida cuando no se tiene una configuracion previa o se quiere empezar desde cero con valores razonables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que target de make genera un archivo `.config` con todas las opciones configuradas como modulos donde sea posible?

</div>
<div class="flashcard-back">

**R:** b) `make allmodconfig`. `make allmodconfig` crea una configuracion donde todas las opciones que pueden ser compiladas como modulos se configuran como tales (`=m`), y las que solo pueden ser built-in se establecen como `=y`. Esto maximiza la flexibilidad del kernel resultante. Es opuesto a `make allyesconfig` que compila todo como built-in.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-013">
<div class="flashcard-front">

**P:** Despues de compilar un kernel personalizado, ¿que comando debe ejecutarse para generar el archivo initramfs en una distribucion basada en Debian?

</div>
<div class="flashcard-back">

**R:** b) `mkinitramfs -o /boot/initrd.img-<version> <version>`. En distribuciones basadas en Debian/Ubuntu, `mkinitramfs` es la herramienta para generar la imagen initramfs. La opcion `-o` especifica el archivo de salida y el parametro final es la version del kernel. Tambien se puede usar `update-initramfs -c -k <version>` para crear o `update-initramfs -u -k <version>` para actualizar. `dracut` es la herramienta de Red Hat/Fedora. `mkinitrd` es la herramienta legacy.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-014">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia entre `make distclean` y `make mrproper`?

</div>
<div class="flashcard-back">

**R:** b) `make distclean` ademas de lo que hace `mrproper`, elimina archivos de editor, backups y archivos de parches. La jerarquia de limpieza es: `make clean` (archivos objeto, conserva .config) < `make mrproper` (todo lo de clean mas .config y archivos de configuracion) < `make distclean` (todo lo de mrproper mas archivos de editor como .orig, .rej, archivos de parche y tags). `make distclean` deja el codigo fuente exactamente como fue descargado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-015">
<div class="flashcard-front">

**P:** Un administrador quiere compilar un kernel para una placa ARM desde un equipo x86_64. ¿Que variables debe especificar en el comando `make`?

</div>
<div class="flashcard-back">

**R:** b) `ARCH=arm` y `CROSS_COMPILE=arm-linux-gnueabihf-`. Para la compilacion cruzada del kernel, se deben especificar dos variables: `ARCH` define la arquitectura objetivo (arm, arm64, mips, etc.) y `CROSS_COMPILE` define el prefijo del toolchain de compilacion cruzada (que incluye el guion final). Por ejemplo: `make ARCH=arm CROSS_COMPILE=arm-linux-gnueabihf- menuconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que opcion de configuracion del kernel permite agregar un sufijo personalizado al nombre de version, como "-produccion"?

</div>
<div class="flashcard-back">

**R:** b) `CONFIG_LOCALVERSION`. `CONFIG_LOCALVERSION` en el archivo `.config` permite agregar un sufijo personalizado a la version del kernel. Por ejemplo, `CONFIG_LOCALVERSION="-produccion"` resultaria en una version como `5.15.60-produccion`. Tambien se puede especificar en la linea de comandos con `make LOCALVERSION="-produccion"`. `EXTRAVERSION` se define en el Makefile y no es configurable desde `.config`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que herramienta de configuracion del kernel solo pregunta por las opciones nuevas que no existian en la version anterior del `.config`?

</div>
<div class="flashcard-back">

**R:** c) `make oldconfig`. `make oldconfig` lee el archivo `.config` existente y solo presenta preguntas interactivas para las opciones que son nuevas en la version actual del kernel y que no existian en la configuracion anterior. Es la herramienta ideal para migrar configuraciones entre versiones del kernel. `make olddefconfig` es similar pero acepta automaticamente los valores por defecto sin preguntar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-018">
<div class="flashcard-front">

**P:** ¿Donde se encuentra el enlace simbolico `build` que apunta al codigo fuente o headers del kernel y que es utilizado por herramientas de compilacion de modulos externos?

</div>
<div class="flashcard-back">

**R:** b) `/lib/modules/$(uname -r)/build`. El enlace simbolico `build` en `/lib/modules/<version>/` apunta tipicamente a los headers o al directorio de fuentes del kernel utilizado para compilar esa version. Es utilizado por herramientas como DKMS y otros sistemas de compilacion de modulos externos para localizar los headers y archivos de configuracion necesarios para compilar modulos compatibles con el kernel instalado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que archivo de configuracion debe existir en el directorio de un modulo gestionado por DKMS para definir las instrucciones de compilacion?

</div>
<div class="flashcard-back">

**R:** c) `dkms.conf`. El archivo `dkms.conf` es el archivo de configuracion obligatorio para modulos gestionados por DKMS. Se encuentra en `/usr/src/<modulo>-<version>/dkms.conf` y contiene variables como `PACKAGE_NAME`, `PACKAGE_VERSION`, `BUILT_MODULE_NAME`, `DEST_MODULE_LOCATION` y las instrucciones de compilacion (`MAKE`). La opcion `AUTOINSTALL="yes"` permite la recompilacion automatica al instalar un nuevo kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que interfaz grafica basada en Qt se puede utilizar para configurar las opciones del kernel?

</div>
<div class="flashcard-back">

**R:** b) `make xconfig`. `make xconfig` utiliza la biblioteca Qt para presentar una interfaz grafica completa de configuracion del kernel. Requiere las bibliotecas Qt de desarrollo instaladas en el sistema. `make gconfig` es la alternativa basada en GTK. `make menuconfig` y `make nconfig` son interfaces basadas en texto (ncurses). Las opciones `qtconfig` y `guiconfig` no existen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando compila el kernel y los modulos utilizando tantos hilos de compilacion como nucleos de CPU tenga el sistema?

</div>
<div class="flashcard-back">

**R:** make -j$(nproc). El comando `make -j$(nproc)` utiliza la sustitucion de comandos `$(nproc)` para obtener automaticamente el numero de nucleos de CPU y pasarlo como argumento a la opcion `-j` (jobs) de `make`. Esto paraleliza la compilacion utilizando todos los nucleos disponibles, reduciendo significativamente el tiempo de compilacion del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando instala los modulos compilados del kernel en el directorio `/lib/modules/<version>/`?

</div>
<div class="flashcard-back">

**R:** make modules_install. El comando `make modules_install` copia todos los modulos compilados (archivos `.ko`) al directorio `/lib/modules/<version>/` organizados en subdirectorios por categoria. Tambien genera el archivo `modules.dep` con las dependencias entre modulos. Este paso debe ejecutarse despues de `make modules` y antes de `make install`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando regenera la imagen initramfs para el kernel actual usando `dracut` forzando la sobreescritura si ya existe?

</div>
<div class="flashcard-back">

**R:** dracut --force. El comando `dracut --force` regenera la imagen initramfs para el kernel en ejecucion, sobrescribiendo la imagen existente si la hay. Sin `--force`, dracut se negaria a sobrescribir un archivo existente. Es la herramienta estandar en distribuciones Red Hat, Fedora, CentOS y SUSE para gestionar imagenes initramfs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando instala los headers del kernel actual en una distribucion basada en Debian?

</div>
<div class="flashcard-back">

**R:** apt-get install linux-headers-$(uname -r). Los headers del kernel son necesarios para compilar modulos externos (como drivers de NVIDIA, VirtualBox, etc.). En Debian/Ubuntu se instalan con `apt-get install linux-headers-$(uname -r)`, que descarga e instala los archivos de cabecera especificos para la version del kernel en ejecucion en `/usr/src/linux-headers-$(uname -r)/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando elimina completamente todos los archivos generados de la compilacion del kernel, incluyendo el archivo `.config`?

</div>
<div class="flashcard-back">

**R:** make mrproper. El comando `make mrproper` realiza una limpieza completa del directorio del codigo fuente del kernel, eliminando todos los archivos generados durante la compilacion, incluyendo archivos objeto (`.o`), la imagen del kernel, y crucialmente, el archivo de configuracion `.config`. Es mas agresivo que `make clean`, que preserva `.config`. Siempre se debe respaldar `.config` antes de ejecutar `make mrproper`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El directorio estandar para el codigo fuente del kernel es `/usr/src/linux`. Los...

</div>
<div class="flashcard-back">

**R:** El directorio estandar para el codigo fuente del kernel es `/usr/src/linux`. Los headers del kernel (necesarios para compilar modulos externos) se instalan en `/usr/src/linux-headers-<version>/` o se acceden desde `/lib/modules/<version>/build`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `make mrproper` elimina todo incluyendo `.config`. `make clean` solo elimina arc...

</div>
<div class="flashcard-back">

**R:** `make mrproper` elimina todo incluyendo `.config`. `make clean` solo elimina archivos objeto de compilaciones anteriores pero preserva `.config`. Siempre respalda `.config` antes de ejecutar `make mrproper`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: El orden correcto es: configurar -> compilar bzImage -> compilar modules -> modu...

</div>
<div class="flashcard-back">

**R:** El orden correcto es: configurar -> compilar bzImage -> compilar modules -> modules_install -> install. `make modules_install` copia los modulos a `/lib/modules/<version>/`. `make install` copia el kernel, System.map y config a `/boot/` y actualiza el bootloader.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Debes conocer las tres herramientas: `mkinitramfs` (Debian), `mkinitrd` (legacy)...

</div>
<div class="flashcard-back">

**R:** Debes conocer las tres herramientas: `mkinitramfs` (Debian), `mkinitrd` (legacy) y `dracut` (Red Hat/Fedora). `dracut` es la herramienta moderna que esta reemplazando a `mkinitrd` en la familia Red Hat.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: DKMS recompila automaticamente modulos de terceros cuando se instala un nuevo ke...

</div>
<div class="flashcard-back">

**R:** DKMS recompila automaticamente modulos de terceros cuando se instala un nuevo kernel. Es esencial para drivers propietarios como los de NVIDIA o VirtualBox. Los fuentes se almacenan en `/usr/src/<modulo>-<version>/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `make bzImage`?

</div>
<div class="flashcard-back">

**R:** Compila la imagen del kernel comprimida

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `make modules`?

</div>
<div class="flashcard-back">

**R:** Compila todos los modulos configurados con =m

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `make install`?

</div>
<div class="flashcard-back">

**R:** Copia vmlinuz, System.map y config a `/boot/`, ejecuta scripts de post-instalacion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `make all`?

</div>
<div class="flashcard-back">

**R:** Equivale a `make bzImage` + `make modules`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son El archivo .config en detalle?

</div>
<div class="flashcard-back">

**R:** El archivo `.config` es un archivo de texto plano con las opciones de compilacion:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Headers del kernel?

</div>
<div class="flashcard-back">

**R:** Los headers del kernel son necesarios para compilar modulos externos (fuera del arbol del kernel):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

