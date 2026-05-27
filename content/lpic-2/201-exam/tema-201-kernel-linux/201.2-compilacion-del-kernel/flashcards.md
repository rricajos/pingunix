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

> 23 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: El directorio estandar para el codigo fuente del kernel es `/usr/src/linux`. Los...

</div>
<div class="flashcard-back">

**R:** El directorio estandar para el codigo fuente del kernel es `/usr/src/linux`. Los headers del kernel (necesarios para compilar modulos externos) se instalan en `/usr/src/linux-headers-<version>/` o se acceden desde `/lib/modules/<version>/build`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-012">
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

<div class="flashcard" data-id="201.2-fc-013">
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

<div class="flashcard" data-id="201.2-fc-014">
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

<div class="flashcard" data-id="201.2-fc-015">
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

<div class="flashcard" data-id="201.2-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `menuconfig`?

</div>
<div class="flashcard-back">

**R:** `make menuconfig`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `xconfig`?

</div>
<div class="flashcard-back">

**R:** `make xconfig`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `gconfig`?

</div>
<div class="flashcard-back">

**R:** `make gconfig`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `nconfig`?

</div>
<div class="flashcard-back">

**R:** `make nconfig`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `config`?

</div>
<div class="flashcard-back">

**R:** `make config`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-021">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Compilar un kernel personalizado es una habilidad clave para un administrador Linux avanzado. Permite optimizar el sistema para hardware especifico, habilitar funcionalidades concretas, eliminar compon

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.2">
</div>

<div class="flashcard" data-id="201.2-fc-022">
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

<div class="flashcard" data-id="201.2-fc-023">
<div class="flashcard-front">

**P:** Que es/son Headers del kernel?

</div>
<div class="flashcard-back">

**R:** Los headers del kernel son necesarios para compilar modulos externos (fuera del arbol del kernel):

</div>
</div>

---

