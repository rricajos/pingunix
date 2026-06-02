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

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Un administrador ejecuta `modprobe -n -v vfat`. ¿Que efecto tiene este comando?

</div>
<div class="flashcard-back">

**R:** b) Simula la carga del modulo vfat mostrando lo que se haria, sin cargarlo realmente (dry-run). La combinacion de opciones `-n` (dry-run) y `-v` (verbose) en `modprobe` simula la carga del modulo sin ejecutarla realmente, mostrando todas las acciones que se realizarian, incluyendo la resolucion de dependencias. Es util para verificar que modulos se cargarian y en que orden antes de hacer la carga real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-012">
<div class="flashcard-front">

**P:** ¿Que directiva en un archivo de `/etc/modprobe.d/` bloquea completamente la carga de un modulo, incluso si se intenta cargar manualmente?

</div>
<div class="flashcard-back">

**R:** c) `install modulo /bin/true`. La directiva `blacklist` solo impide la carga automatica del modulo (por ejemplo, mediante udev), pero aun permite la carga manual con `modprobe`. Para bloquear completamente la carga de un modulo, se usa `install modulo /bin/true`, que redirige el intento de carga a ejecutar `/bin/true` (un comando que no hace nada), impidiendo efectivamente que el modulo se cargue bajo cualquier circunstancia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-013">
<div class="flashcard-front">

**P:** Un administrador quiere deshabilitar las respuestas a ping en un servidor Linux de forma inmediata y permanente. ¿Que combinacion de acciones es correcta?

</div>
<div class="flashcard-back">

**R:** a) Ejecutar `sysctl -w net.ipv4.icmp_echo_ignore_all=1` y agregar la misma linea en `/etc/sysctl.conf`. Para que el cambio sea inmediato, se usa `sysctl -w net.ipv4.icmp_echo_ignore_all=1`. Para que persista tras el reinicio, se agrega `net.ipv4.icmp_echo_ignore_all = 1` en `/etc/sysctl.conf` o en un archivo de `/etc/sysctl.d/`. El valor `1` indica que se ignoran todos los pings. La opcion b) usaria el valor incorrecto (0 no deshabilitaria nada) y no seria permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-014">
<div class="flashcard-front">

**P:** ¿Que nivel de mensaje del kernel corresponde a "condicion critica" en la escala de severidad de dmesg?

</div>
<div class="flashcard-back">

**R:** b) Nivel 2 (crit). Los niveles de mensajes del kernel van del 0 al 7, siendo 0 el mas grave: 0=emerg (sistema inutilizable), 1=alert (accion inmediata necesaria), 2=crit (condicion critica), 3=err (error), 4=warning (advertencia), 5=notice (normal pero significativo), 6=info (informativo), 7=debug (depuracion). Se pueden filtrar con `dmesg --level=crit`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que parametro de sysctl permite configurar el numero de segundos que el sistema espera antes de reiniciarse automaticamente despues de un kernel panic?

</div>
<div class="flashcard-back">

**R:** b) `kernel.panic`. El parametro `kernel.panic` define el numero de segundos que el kernel espera antes de reiniciar automaticamente despues de un panic. Un valor de `0` (por defecto) significa que el sistema no se reinicia automaticamente. Un valor como `10` haria que el sistema se reinicie 10 segundos despues del panic. Es importante para servidores en produccion donde un reinicio automatico es preferible a un sistema congelado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-016">
<div class="flashcard-front">

**P:** Un administrador necesita ver los mensajes del kernel en tiempo real mientras conecta dispositivos USB. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** a) `dmesg -w`. La opcion `-w` (wait) de `dmesg` pone el comando en modo de seguimiento (similar a `tail -f`), mostrando los nuevos mensajes del kernel en tiempo real conforme se generan. Es ideal para diagnosticar problemas de hardware conectando dispositivos. `-c` limpia el buffer, `-H` formatea con colores y paginacion, y `--level=info` solo filtra por nivel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que archivo del directorio `/lib/modules/<version>/` contiene la lista de dependencias entre modulos que `modprobe` utiliza para resolver dependencias automaticamente?

</div>
<div class="flashcard-back">

**R:** b) `modules.dep`. El archivo `modules.dep` contiene el arbol completo de dependencias entre modulos del kernel. Es generado por el comando `depmod` y utilizado por `modprobe` para saber que modulos adicionales deben cargarse antes del modulo solicitado. Existe tambien una version binaria `modules.dep.bin` para consultas mas rapidas. `modules.alias` mapea alias a modulos, y `modules.builtin` lista modulos compilados dentro del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que parametro de sysctl se debe habilitar para que un servidor Linux funcione como router, reenviando paquetes entre interfaces de red?

</div>
<div class="flashcard-back">

**R:** b) `net.ipv4.ip_forward`. El parametro `net.ipv4.ip_forward` habilita (valor `1`) o deshabilita (valor `0`) el reenvio de paquetes IPv4 entre interfaces de red, funcion esencial para que un servidor actue como router. Para IPv6 se usa `net.ipv6.conf.all.forwarding`. `tcp_syncookies` es para proteccion contra SYN flood, `somaxconn` para el backlog de conexiones TCP, y `kernel.hostname` para el nombre del host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-019">
<div class="flashcard-front">

**P:** Un administrador instala un modulo del kernel manualmente copiando el archivo `.ko` a `/lib/modules/<version>/`. ¿Que comando debe ejecutar para que `modprobe` pueda encontrar el nuevo modulo?

</div>
<div class="flashcard-back">

**R:** c) `depmod`. Despues de instalar un modulo manualmente, es necesario ejecutar `depmod` para que escanee todos los modulos en `/lib/modules/<version>/` y regenere el archivo `modules.dep` con las dependencias actualizadas. Sin ejecutar `depmod`, `modprobe` no sera capaz de encontrar el nuevo modulo ni resolver sus dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que diferencia principal existe entre `insmod` y `modprobe` al cargar modulos del kernel?

</div>
<div class="flashcard-back">

**R:** b) `modprobe` resuelve dependencias automaticamente y solo necesita el nombre del modulo; `insmod` requiere la ruta completa y no resuelve dependencias. `modprobe` es la herramienta recomendada porque consulta `modules.dep` para resolver y cargar automaticamente todas las dependencias necesarias, y solo necesita el nombre del modulo (sin ruta). `insmod` es una herramienta de bajo nivel que requiere la ruta completa del archivo `.ko` y falla si las dependencias no estan cargadas previamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando habilita el reenvio de paquetes IPv4 en tiempo real usando `sysctl`?

</div>
<div class="flashcard-back">

**R:** sysctl -w net.ipv4.ip_forward=1. El comando `sysctl -w net.ipv4.ip_forward=1` establece el parametro de reenvio de paquetes IPv4 a `1` (habilitado) de forma inmediata. La opcion `-w` (write) indica que se va a modificar un parametro. Este cambio es temporal y se pierde al reiniciar; para hacerlo permanente se debe agregar `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando aplica todos los parametros definidos en `/etc/sysctl.conf` al sistema en ejecucion?

</div>
<div class="flashcard-back">

**R:** sysctl -p. El comando `sysctl -p` lee y aplica los parametros configurados en el archivo `/etc/sysctl.conf` (por defecto). Si se quiere cargar desde un archivo diferente, se especifica la ruta: `sysctl -p /etc/sysctl.d/99-custom.conf`. Para cargar desde todos los archivos de configuracion del sistema se usa `sysctl --system`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando descarga el modulo `vfat` del kernel, incluyendo sus dependencias no utilizadas?

</div>
<div class="flashcard-back">

**R:** modprobe -r vfat. El comando `modprobe -r` (o `modprobe --remove`) descarga el modulo especificado y tambien intenta descargar las dependencias que ya no estan siendo utilizadas por ningun otro modulo. A diferencia de `rmmod`, que solo descarga el modulo indicado, `modprobe -r` gestiona las dependencias de forma inteligente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando muestra los mensajes del buffer de anillo del kernel con marcas de tiempo en formato legible?

</div>
<div class="flashcard-back">

**R:** dmesg -T. La opcion `-T` (o `--ctime`) de `dmesg` convierte las marcas de tiempo del kernel (que por defecto son segundos desde el arranque) a un formato de fecha y hora legible. Esto facilita correlacionar los mensajes del kernel con eventos especificos del sistema. Sin `-T`, las marcas de tiempo se muestran como segundos relativos al arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando muestra todos los parametros ajustables del kernel disponibles via `sysctl`?

</div>
<div class="flashcard-back">

**R:** sysctl -a. El comando `sysctl -a` (o `sysctl --all`) lista todos los parametros del kernel que son ajustables a traves de `/proc/sys/`, mostrando su nombre y valor actual. La salida puede ser extensa, por lo que frecuentemente se combina con `grep` para filtrar parametros especificos, como `sysctl -a | grep swappiness`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-026">
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

<div class="flashcard" data-id="201.3-fc-027">
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

<div class="flashcard" data-id="201.3-fc-028">
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

<div class="flashcard" data-id="201.3-fc-029">
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

<div class="flashcard" data-id="201.3-fc-030">
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

<div class="flashcard" data-id="201.3-fc-031">
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

<div class="flashcard" data-id="201.3-fc-032">
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

<div class="flashcard" data-id="201.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.panic`?

</div>
<div class="flashcard-back">

**R:** Segundos antes de reiniciar tras panic

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `kernel.sysrq`?

</div>
<div class="flashcard-back">

**R:** Habilitar teclas SysRq magicas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="201.3">
</div>

<div class="flashcard" data-id="201.3-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `kernel/`?

</div>
<div class="flashcard-back">

**R:** Directorio con modulos organizados por categoria

</div>
</div>

---

