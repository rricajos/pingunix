---
title: "201.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "201.1"
---

# Flashcards: 201.1 - Componentes Del Kernel

> 40 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cual es la principal diferencia entre `bzImage` y `zImage` como formatos de imagen del kernel?

</div>
<div class="flashcard-back">

**R:** b) `bzImage` puede cargarse en memoria alta (por encima de 1 MB), mientras que `zImage` esta limitado a los primeros 640 KB. La "b" en `bzImage` significa "big", refiriendose a que puede usar memoria alta, eliminando la restriccion de 640 KB de `zImage`. Ambos formatos usan el mismo tipo de compresion. `bzImage` es el formato estandar para kernels modernos en arquitectura x86.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-002">
<div class="flashcard-front">

**P:** ¿En que directorio se encuentra la documentacion oficial incluida con el codigo fuente del kernel de Linux?

</div>
<div class="flashcard-back">

**R:** b) `/usr/src/linux/Documentation/`. La documentacion oficial del kernel viene incluida en el arbol del codigo fuente, dentro del subdirectorio `Documentation/`. Este directorio contiene informacion sobre subsistemas, parametros de arranque, API del kernel y guias de configuracion. Es la referencia primaria para cualquier aspecto tecnico del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-003">
<div class="flashcard-front">

**P:** Un archivo `.config` del kernel contiene la linea `CONFIG_EXT4_FS=m`. ¿Que significa esto?

</div>
<div class="flashcard-back">

**R:** c) El soporte para EXT4 se compilara como un modulo cargable. En la configuracion del kernel, `=m` indica que la funcionalidad se compilara como modulo que puede cargarse y descargarse en tiempo de ejecucion. `=y` significaria compilado directamente en el kernel (built-in), y `# CONFIG_EXT4_FS is not set` indicaria que esta deshabilitado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando muestra la version del kernel actualmente en ejecucion?

</div>
<div class="flashcard-back">

**R:** c) `uname -r`. El comando `uname` con la opcion `-r` muestra la version (release) del kernel en ejecucion, por ejemplo `5.15.0-56-generic`. Tambien se puede obtener de `/proc/version` o con `uname -a` que muestra toda la informacion del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-005">
<div class="flashcard-front">

**P:** ¿Donde se definen las variables VERSION, PATCHLEVEL y SUBLEVEL que determinan la version del kernel?

</div>
<div class="flashcard-back">

**R:** c) En `/usr/src/linux/Makefile`. El `Makefile` principal en la raiz del codigo fuente del kernel contiene las variables `VERSION`, `PATCHLEVEL`, `SUBLEVEL` y `EXTRAVERSION` que definen la version completa del kernel. Estas variables se usan durante la compilacion para generar el nombre de version del kernel resultante.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para aplicar un parche al codigo fuente del kernel?

</div>
<div class="flashcard-back">

**R:** b) `patch -p1 < archivo.patch`. El comando `patch` se ejecuta desde el directorio raiz del codigo fuente. La opcion `-p1` indica que se debe eliminar el primer componente de la ruta en las lineas del parche (tipicamente `a/` o `b/` generados por `diff` o `git diff`). Para revertir un parche se usa `patch -R -p1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que archivo en `/boot/` contiene la tabla de correspondencias entre direcciones de memoria y nombres de funciones del kernel?

</div>
<div class="flashcard-back">

**R:** c) `System.map-<version>`. `System.map` es la tabla de simbolos del kernel que mapea direcciones de memoria a nombres de funciones y variables del kernel. Se utiliza para depuracion y diagnostico, especialmente para interpretar mensajes de error del kernel (kernel oops/panic). Cada version del kernel tiene su propio `System.map`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-008">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre el kernel Linux es correcta?

</div>
<div class="flashcard-back">

**R:** b) Linux es un kernel monolitico con soporte de modulos cargables. Linux se clasifica como un kernel monolitico hibrido. Toda la funcionalidad del kernel se ejecuta en espacio de kernel (a diferencia de un microkernel), pero soporta modulos cargables que pueden anadirse o eliminarse en tiempo de ejecucion sin reiniciar. Esto combina el rendimiento del diseno monolitico con la flexibilidad de los modulos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-009">
<div class="flashcard-front">

**P:** Un administrador quiere copiar la configuracion del kernel en ejecucion para usarla como base en una nueva compilacion. ¿Cual de los siguientes comandos es apropiado?

</div>
<div class="flashcard-back">

**R:** b) `cp /boot/config-$(uname -r) /usr/src/linux/.config`. La configuracion del kernel en ejecucion se almacena en `/boot/config-<version>`. Usando `$(uname -r)` se obtiene la version actual automaticamente. Alternativamente, si el kernel fue compilado con `CONFIG_IKCONFIG_PROC`, se puede usar `zcat /proc/config.gz > /usr/src/linux/.config`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-010">
<div class="flashcard-front">

**P:** ¿Donde se almacenan los modulos compilados del kernel en ejecucion?

</div>
<div class="flashcard-back">

**R:** c) `/lib/modules/$(uname -r)/`. Los modulos compilados del kernel se instalan en `/lib/modules/<version>/`. Cada version del kernel tiene su propio directorio de modulos. Dentro se encuentran subdirectorios como `kernel/` (con los modulos organizados por tipo), archivos de dependencias (`modules.dep`) y otros metadatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que significan las variables VERSION=5, PATCHLEVEL=15 y SUBLEVEL=60 en el Makefile principal del kernel?

</div>
<div class="flashcard-back">

**R:** b) Definen la version del kernel como 5.15.60. Las variables VERSION, PATCHLEVEL y SUBLEVEL en el Makefile principal del kernel se combinan para formar el numero de version completo: VERSION.PATCHLEVEL.SUBLEVEL. Adicionalmente, la variable EXTRAVERSION permite agregar un sufijo personalizado (por ejemplo, "-custom"). Estas variables son leidas por el sistema de compilacion para generar el nombre de version del kernel resultante.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que tipo de version del kernel esta disenada para ser mantenida durante un periodo extenso de 2 a 6 anos con correcciones de seguridad?

</div>
<div class="flashcard-back">

**R:** c) LTS (Long Term Support). Las versiones LTS del kernel de Linux se mantienen durante periodos extendidos, tipicamente de 2 a 6 anos, recibiendo correcciones de bugs y parches de seguridad. Son las versiones preferidas para entornos de produccion y servidores donde la estabilidad a largo plazo es prioritaria. Las versiones Stable se mantienen solo hasta que se lanza la siguiente version.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-013">
<div class="flashcard-front">

**P:** Un administrador necesita verificar la integridad de un archivo de codigo fuente del kernel descargado de kernel.org. ¿Que herramienta debe utilizar?

</div>
<div class="flashcard-back">

**R:** b) `gpg --verify` con el archivo de firma proporcionado. kernel.org proporciona archivos de firma GPG (.sign) para cada version del kernel. El proceso correcto es descargar el archivo de firma, descomprimir el tarball (.tar.xz a .tar), y ejecutar `gpg --verify linux-x.y.z.tar.sign linux-x.y.z.tar`. Esto verifica que el codigo fuente fue firmado por los desarrolladores oficiales del kernel, garantizando tanto integridad como autenticidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que archivo virtual del sistema permite obtener la configuracion del kernel en ejecucion si la opcion CONFIG_IKCONFIG_PROC fue habilitada durante la compilacion?

</div>
<div class="flashcard-back">

**R:** b) `/proc/config.gz`. Si el kernel fue compilado con la opcion `CONFIG_IKCONFIG_PROC=y`, el archivo `/proc/config.gz` contiene la configuracion completa del kernel en ejecucion en formato comprimido con gzip. Se puede leer con `zcat /proc/config.gz`. Esta es una alternativa al archivo `/boot/config-$(uname -r)` y es especialmente util cuando el directorio `/boot` no esta disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-015">
<div class="flashcard-front">

**P:** ¿Cual es la funcion del archivo `initrd.img` (o `initramfs`) que se encuentra en `/boot/`?

</div>
<div class="flashcard-back">

**R:** b) Es una imagen temporal del sistema de archivos que se carga en RAM durante el arranque para proporcionar modulos y herramientas necesarios para montar el sistema raiz real. El initramfs (initial RAM filesystem) contiene modulos del kernel, scripts y herramientas necesarios para el arranque temprano del sistema. Es esencial cuando el controlador del disco o el sistema de archivos raiz estan compilados como modulos, cuando se usa LVM, RAID o cifrado de disco. Una vez montado el sistema raiz real, el initramfs se descarta de la memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que opcion en el archivo `.config` del kernel indica que una funcionalidad esta completamente deshabilitada?

</div>
<div class="flashcard-back">

**R:** c) `# CONFIG_MODULO is not set`. En el archivo `.config` del kernel, una funcionalidad deshabilitada se indica con una linea comentada en el formato `# CONFIG_OPCION is not set`. Los valores activos son `=y` (compilado dentro del kernel) y `=m` (compilado como modulo cargable). No se usa `=n`, `=0` ni `=disabled` como valores en el archivo de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que diferencia existe entre el archivo `vmlinux` y `vmlinuz`?

</div>
<div class="flashcard-back">

**R:** b) `vmlinux` es el kernel sin comprimir en formato ELF usado para depuracion; `vmlinuz` es el kernel comprimido listo para arrancar. `vmlinux` es el archivo ejecutable en formato ELF que resulta directamente de la compilacion. Es grande y no comprimido, usado principalmente para depuracion con herramientas como `gdb`. `vmlinuz` es la version comprimida (la "z" indica compresion) que se instala en `/boot/` y es cargada por el bootloader durante el arranque del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-018">
<div class="flashcard-front">

**P:** Un administrador necesita aplicar un parche incremental al kernel 5.15.60 para actualizarlo a 5.15.61. ¿Desde que directorio debe ejecutar el comando `patch`?

</div>
<div class="flashcard-back">

**R:** b) Desde la raiz del codigo fuente del kernel (`/usr/src/linux/`). Los parches del kernel se aplican desde el directorio raiz del codigo fuente con el comando `patch -p1 < archivo.patch`. La opcion `-p1` elimina el primer componente de la ruta en el archivo de parche (tipicamente `a/` o `b/`). Es importante estar en el directorio correcto para que las rutas relativas del parche coincidan con la estructura de directorios del codigo fuente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que formato de imagen del kernel se utiliza tipicamente en sistemas embebidos con el bootloader U-Boot?

</div>
<div class="flashcard-back">

**R:** c) uImage. El formato `uImage` es una imagen del kernel con una cabecera especifica para el bootloader U-Boot, que es comun en sistemas embebidos basados en arquitecturas ARM y otras. `bzImage` es el formato estandar para x86. `zImage` tambien se usa en ARM pero sin la cabecera de U-Boot. `vmlinux` es el kernel sin comprimir usado para depuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-020">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre el enlace simbolico `/usr/src/linux` es correcta?

</div>
<div class="flashcard-back">

**R:** b) Es una convencion comun que apunta al directorio del codigo fuente del kernel activo, facilitando la compilacion. El enlace simbolico `/usr/src/linux` es una convencion estandar en Linux que apunta al directorio del codigo fuente del kernel que se esta utilizando para compilacion o referencia. No es obligatorio para el funcionamiento del sistema, pero muchos scripts y herramientas de compilacion lo esperan. Se crea manualmente con `ln -sf linux-version linux`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando muestra la version del kernel actualmente en ejecucion?

</div>
<div class="flashcard-back">

**R:** uname -r. El comando `uname -r` muestra unicamente la version (release) del kernel en ejecucion, por ejemplo `5.15.0-56-generic`. La opcion `-r` significa "kernel release". Para ver toda la informacion del sistema (nombre del kernel, hostname, version, arquitectura, etc.) se usa `uname -a`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando muestra informacion detallada sobre un modulo del kernel, incluyendo su descripcion, dependencias y parametros?

</div>
<div class="flashcard-back">

**R:** modinfo. El comando `modinfo` seguido del nombre del modulo (por ejemplo, `modinfo ext4`) muestra informacion detallada como la ruta del archivo, licencia, descripcion, autor, dependencias, alias, parametros configurables y la version del kernel para la que fue compilado (vermagic).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para aplicar un parche al codigo fuente del kernel, eliminando el primer componente de la ruta?

</div>
<div class="flashcard-back">

**R:** patch -p1. El comando `patch -p1` aplica un archivo de parche al codigo fuente. La opcion `-p1` elimina el primer componente de la ruta en las lineas del parche (tipicamente `a/` o `b/` generados por `diff` o `git diff`). Se ejecuta desde el directorio raiz del codigo fuente. Para revertir un parche se usa `patch -R -p1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando lista los modulos del kernel actualmente cargados en memoria?

</div>
<div class="flashcard-back">

**R:** lsmod. El comando `lsmod` muestra los modulos actualmente cargados en el kernel, formateando la informacion del archivo `/proc/modules`. La salida incluye tres columnas: nombre del modulo, tamano en bytes y lista de modulos que dependen de el (Used by). Es la herramienta rapida para verificar si un modulo especifico esta cargado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando permite obtener la configuracion del kernel en ejecucion desde el archivo comprimido en `/proc/`?

</div>
<div class="flashcard-back">

**R:** zcat /proc/config.gz. El comando `zcat /proc/config.gz` descomprime y muestra el contenido del archivo de configuracion del kernel en ejecucion. Este archivo solo esta disponible si el kernel fue compilado con la opcion `CONFIG_IKCONFIG_PROC=y`. Es una alternativa util cuando no se tiene acceso al archivo `/boot/config-$(uname -r)`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `bzImage` es el formato estandar actual. La "b" de "big" se refiere a que puede ...

</div>
<div class="flashcard-back">

**R:** `bzImage` es el formato estandar actual. La "b" de "big" se refiere a que puede usar memoria alta, no a que el archivo sea mas grande necesariamente. `zImage` es obsoleto para kernels modernos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `uname -r` muestra la version del kernel en ejecucion. El sufijo como `-generic`...

</div>
<div class="flashcard-back">

**R:** `uname -r` muestra la version del kernel en ejecucion. El sufijo como `-generic` o `-amd64` es anadido por la distribucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La documentacion del kernel esta en `/usr/src/linux/Documentation/`. Es la refer...

</div>
<div class="flashcard-back">

**R:** La documentacion del kernel esta en `/usr/src/linux/Documentation/`. Es la referencia oficial para parametros, configuracion y funcionalidades del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Los parches se aplican con el comando `patch -p1`. Se aplican desde el directori...

</div>
<div class="flashcard-back">

**R:** Los parches se aplican con el comando `patch -p1`. Se aplican desde el directorio raiz del codigo fuente del kernel. La opcion `-p1` elimina el primer componente de la ruta en el parche.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: La version del kernel se define en las variables `VERSION`, `PATCHLEVEL`, `SUBLE...

</div>
<div class="flashcard-back">

**R:** La version del kernel se define en las variables `VERSION`, `PATCHLEVEL`, `SUBLEVEL` y `EXTRAVERSION` del Makefile principal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Linux es un kernel monolitico con soporte de modulos cargables. Las funcionalida...

</div>
<div class="flashcard-back">

**R:** Linux es un kernel monolitico con soporte de modulos cargables. Las funcionalidades pueden compilarse como built-in (=y), modulo (=m) o deshabilitadas (=n). Los modulos se cargan y descargan en tiempo de ejecucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `vmlinux`?

</div>
<div class="flashcard-back">

**R:** Kernel sin comprimir (formato ELF)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `vmlinuz`?

</div>
<div class="flashcard-back">

**R:** Kernel comprimido (nombre generico)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `bzImage`?

</div>
<div class="flashcard-back">

**R:** Big zImage, carga en memoria alta

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `zImage`?

</div>
<div class="flashcard-back">

**R:** Carga en memoria baja (< 640 KB)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `/usr/src/linux/.config`?

</div>
<div class="flashcard-back">

**R:** Archivo de configuracion para compilacion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Documentacion del kernel?

</div>
<div class="flashcard-back">

**R:** La documentacion oficial del kernel se encuentra dentro del codigo fuente:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Archivo de configuracion del kernel (.config)?

</div>
<div class="flashcard-back">

**R:** El archivo `.config` en el directorio raiz del codigo fuente del kernel contiene todas las opciones de configuracion seleccionadas para la compilacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Makefile del kernel?

</div>
<div class="flashcard-back">

**R:** El `Makefile` principal del kernel se encuentra en la raiz del codigo fuente y controla el proceso de compilacion. Las primeras lineas definen la version:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

