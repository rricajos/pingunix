---
title: "201.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "201.3"
---

# Flashcards: 201.3 - Gestion Del Kernel En Ejecucion

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita habilitar el reenvio de paquetes IPv4 de forma permanente. ¿Cual es la forma correcta de hacerlo?

</div>
<div class="flashcard-back">

**R:** a) `echo 1 > /proc/sys/net/ipv4/ip_forward` y anadir `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`. Para que el cambio sea tanto inmediato como permanente, se necesitan dos acciones: aplicarlo en tiempo real (ya sea con `echo` o `sysctl -w`) y configurarlo en `/etc/sysctl.conf` para que persista tras el reinicio. Alternativamente, se puede editar `sysctl.conf` y ejecutar `sysctl -p` para aplicar ambos pasos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando carga un modulo del kernel resolviendo automaticamente sus dependencias?

</div>
<div class="flashcard-back">

**R:** b) `modprobe vfat`. `modprobe` es la herramienta recomendada para cargar modulos porque resuelve y carga automaticamente las dependencias (por ejemplo, carga `fat` antes de `vfat`). `insmod` requiere la ruta completa y no resuelve dependencias. `depmod` genera el archivo de dependencias pero no carga modulos. `loadmod` no existe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que archivo se debe editar para impedir permanentemente que un modulo se cargue automaticamente en el arranque?

</div>
<div class="flashcard-back">

**R:** b) Un archivo en `/etc/modprobe.d/` con la directiva `blacklist`. Para impedir la carga automatica de un modulo, se crea un archivo en `/etc/modprobe.d/` (por ejemplo, `/etc/modprobe.d/blacklist-nouveau.conf`) con la linea `blacklist nouveau`. Esto impide la carga automatica pero aun permite la carga manual. Para bloquear completamente, se anade `install nouveau /bin/true`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-004">
<div class="flashcard-front">

**P:** Un administrador ejecuta `modprobe -r snd_hda_intel` y recibe el error "Module snd_hda_intel is in use". ¿Que significa esto?

</div>
<div class="flashcard-back">

**R:** b) El modulo esta en uso por otro modulo o proceso y no puede descargarse. El error indica que el modulo tiene dependientes activos: otros modulos que dependen de el o procesos que estan utilizandolo. Se puede verificar con `lsmod` donde la columna "Used by" muestra que modulos dependen de el. Primero hay que descargar los modulos dependientes o detener los procesos que lo utilizan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando muestra los parametros configurables disponibles para el modulo `e1000e`?

</div>
<div class="flashcard-back">

**R:** b) `modinfo -p e1000e`. La opcion `-p` (parameters) de `modinfo` muestra los parametros configurables de un modulo junto con su descripcion y tipo. Estos parametros se pueden pasar al cargar el modulo con `modprobe e1000e parametro=valor` o configurarse permanentemente en `/etc/modprobe.d/` con la directiva `options`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-006">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia entre `sysctl -p` y `sysctl --system`?

</div>
<div class="flashcard-back">

**R:** b) `sysctl -p` carga solo `/etc/sysctl.conf`, `sysctl --system` carga desde todos los archivos de configuracion del sistema. `sysctl -p` carga la configuracion desde `/etc/sysctl.conf` por defecto (o un archivo especificado con `sysctl -p /ruta/archivo`). `sysctl --system` carga la configuracion desde todos los archivos de configuracion del sistema: `/etc/sysctl.conf`, `/etc/sysctl.d/*.conf`, `/run/sysctl.d/*.conf`, `/usr/lib/sysctl.d/*.conf`, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-007">
<div class="flashcard-front">

**P:** Un administrador necesita diagnosticar por que un dispositivo USB no es reconocido. ¿Que comando es el mas apropiado para ver los mensajes del kernel relacionados?

</div>
<div class="flashcard-back">

**R:** c) `dmesg -T | grep -i usb`. `dmesg` muestra el buffer de anillo del kernel que contiene mensajes sobre deteccion de hardware, carga de drivers y errores. La opcion `-T` muestra marcas de tiempo legibles. Filtrar con `grep -i usb` muestra solo los mensajes relacionados con dispositivos USB, facilitando el diagnostico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-008">
<div class="flashcard-front">

**P:** ¿Que ocurre cuando se ejecuta `depmod` sin argumentos?

</div>
<div class="flashcard-back">

**R:** c) Analiza los modulos del kernel actual y genera el archivo modules.dep con las dependencias. `depmod` escanea todos los modulos en `/lib/modules/$(uname -r)/` y genera el archivo `modules.dep` (y su version binaria `modules.dep.bin`) que contiene el arbol de dependencias entre modulos. `modprobe` utiliza este archivo para resolver dependencias. Se debe ejecutar `depmod` despues de instalar modulos manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que parametro de sysctl controla la tendencia del sistema a mover paginas de memoria al area de swap?

</div>
<div class="flashcard-back">

**R:** b) `vm.swappiness`. `vm.swappiness` es un valor entre 0 y 100 que controla la agresividad con la que el kernel mueve paginas de la RAM al swap. Un valor de 0 minimiza el uso de swap (solo se usa cuando es absolutamente necesario), mientras que 100 hace que el kernel use swap agresivamente. El valor por defecto es 60. Para servidores de base de datos se suele reducir a 10.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere configurar el modulo `snd_hda_intel` para que siempre se cargue con el parametro `power_save=1`. ¿Donde y como debe configurarlo?

</div>
<div class="flashcard-back">

**R:** b) Crear un archivo en `/etc/modprobe.d/` con la linea `options snd_hda_intel power_save=1`. La directiva `options` en archivos de `/etc/modprobe.d/` permite definir parametros que se aplican automaticamente cada vez que se carga un modulo con `modprobe`. Por ejemplo, crear `/etc/modprobe.d/snd_hda_intel.conf` con `options snd_hda_intel power_save=1`. Los parametros de modulos no se gestionan con `sysctl`, que es para parametros del kernel en `/proc/sys/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: Los cambios realizados directamente en `/proc/sys/` son inmediatos pero se pierd...

</div>
<div class="flashcard-back">

**R:** Los cambios realizados directamente en `/proc/sys/` son inmediatos pero se pierden al reiniciar. Para hacerlos permanentes, se deben configurar en `sysctl.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: `sysctl -w` modifica un parametro en tiempo real. `sysctl -p` carga la configura...

</div>
<div class="flashcard-back">

**R:** `sysctl -w` modifica un parametro en tiempo real. `sysctl -p` carga la configuracion desde el archivo (por defecto `/etc/sysctl.conf`). La opcion `--system` carga desde todos los archivos de configuracion del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: Siempre usa `modprobe` en lugar de `insmod`/`rmmod`. `modprobe` resuelve depende...

</div>
<div class="flashcard-back">

**R:** Siempre usa `modprobe` en lugar de `insmod`/`rmmod`. `modprobe` resuelve dependencias automaticamente, mientras que `insmod` requiere la ruta completa del archivo `.ko` y no gestiona dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: `depmod` debe ejecutarse despues de instalar modulos manualmente. `modprobe` dep...

</div>
<div class="flashcard-back">

**R:** `depmod` debe ejecutarse despues de instalar modulos manualmente. `modprobe` depende de `modules.dep` para resolver dependencias. Si `modprobe` no encuentra un modulo nuevo, ejecuta `depmod`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: Blacklistar un modulo con `blacklist` solo impide la carga automatica. El modulo...

</div>
<div class="flashcard-back">

**R:** Blacklistar un modulo con `blacklist` solo impide la carga automatica. El modulo aun puede cargarse manualmente con `modprobe`. Para bloquear completamente, usa `install nombre_modulo /bin/true` que redirige la carga a un comando inocuo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-016">
<div class="flashcard-front">

**P:** Tip de examen: `dmesg` es la herramienta principal para diagnosticar problemas de hardware y mo...

</div>
<div class="flashcard-back">

**R:** `dmesg` es la herramienta principal para diagnosticar problemas de hardware y modulos. Los mensajes del kernel tambien se pueden ver con `journalctl -k` en sistemas con systemd. La opcion `-T` muestra marcas de tiempo legibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `/proc/sys/kernel/`?

</div>
<div class="flashcard-back">

**R:** Parametros generales del kernel

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-018">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** La gestion del kernel en ejecucion permite a los administradores ajustar el comportamiento del sistema sin necesidad de reiniciar ni recompilar el kernel. Esto incluye la carga y descarga de modulos, e

</div>
</div>

---

