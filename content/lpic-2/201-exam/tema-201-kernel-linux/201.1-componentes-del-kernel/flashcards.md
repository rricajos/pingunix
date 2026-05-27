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

> 25 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: `bzImage` es el formato estandar actual. La "b" de "big" se refiere a que puede ...

</div>
<div class="flashcard-back">

**R:** `bzImage` es el formato estandar actual. La "b" de "big" se refiere a que puede usar memoria alta, no a que el archivo sea mas grande necesariamente. `zImage` es obsoleto para kernels modernos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-012">
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

<div class="flashcard" data-id="201.1-fc-013">
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

<div class="flashcard" data-id="201.1-fc-014">
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

<div class="flashcard" data-id="201.1-fc-015">
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

<div class="flashcard" data-id="201.1-fc-016">
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

<div class="flashcard" data-id="201.1-fc-017">
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

<div class="flashcard" data-id="201.1-fc-018">
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

<div class="flashcard" data-id="201.1-fc-019">
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

<div class="flashcard" data-id="201.1-fc-020">
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

<div class="flashcard" data-id="201.1-fc-021">
<div class="flashcard-front">

**P:** Que hace el comando `uImage`?

</div>
<div class="flashcard-back">

**R:** Formato para U-Boot

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-022">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** El kernel de Linux es el nucleo del sistema operativo. Es el componente que gestiona directamente el hardware y proporciona servicios fundamentales al resto del sistema: gestion de procesos, memoria, s

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.1">
</div>

<div class="flashcard" data-id="201.1-fc-023">
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

<div class="flashcard" data-id="201.1-fc-024">
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

<div class="flashcard" data-id="201.1-fc-025">
<div class="flashcard-front">

**P:** Que es/son Makefile del kernel?

</div>
<div class="flashcard-back">

**R:** El `Makefile` principal del kernel se encuentra en la raiz del codigo fuente y controla el proceso de compilacion. Las primeras lineas definen la version:

</div>
</div>

---

