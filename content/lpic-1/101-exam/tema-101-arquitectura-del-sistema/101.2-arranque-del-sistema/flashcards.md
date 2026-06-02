---
title: "101.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "101.2"
---

# Flashcards: 101.2 - Arranque Del Sistema

> 28 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-001">
<div class="flashcard-front">

**P:** Cual es la funcion principal del POST (Power-On Self-Test) durante la secuencia de arranque?

</div>
<div class="flashcard-back">

**R:** b) Verificar la integridad del hardware basico como CPU, RAM y controladores de disco. El POST es una serie de pruebas de diagnostico que ejecuta el firmware (BIOS o UEFI) inmediatamente al encender el equipo. Verifica que la CPU, la memoria RAM, los controladores de disco y otros componentes esenciales funcionan correctamente. Si el POST falla, el sistema emite pitidos o muestra codigos de error y se detiene antes de intentar cargar el sistema operativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-002">
<div class="flashcard-front">

**P:** En un sistema con BIOS, cual es el tamano total del MBR (Master Boot Record) y que contiene?

</div>
<div class="flashcard-back">

**R:** b) 512 bytes: codigo de arranque (446 bytes), tabla de particiones (64 bytes) y firma (2 bytes). El MBR ocupa los primeros 512 bytes del disco y se divide en tres partes: el codigo de arranque (bootstrap code) de 446 bytes que contiene la primera etapa del bootloader, la tabla de particiones de 64 bytes que permite un maximo de 4 particiones primarias (4 entradas de 16 bytes), y la firma de arranque de 2 bytes (0x55AA) que indica al firmware que el disco es arrancable.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-003">
<div class="flashcard-front">

**P:** Que parametro del kernel se usa para arrancar directamente en un shell bash, sin pasar por init o systemd?

</div>
<div class="flashcard-back">

**R:** b) init=/bin/bash. El parametro `init=/bin/bash` indica al kernel que ejecute `/bin/bash` como proceso PID 1 en lugar del proceso init normal (systemd o SysVinit). Esto proporciona un shell de root directo sin ningun servicio del sistema, util para tareas de rescate avanzadas como cambiar la contrasena de root. `single` y `rescue` arrancan en modo monousuario con servicios minimos, y `emergency.target` inicia un shell con el sistema de archivos raiz montado como solo lectura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-004">
<div class="flashcard-front">

**P:** Cual es la diferencia tecnica principal entre initrd e initramfs?

</div>
<div class="flashcard-back">

**R:** b) initramfs es un archivo cpio comprimido que se extrae en tmpfs, mientras que initrd es una imagen de disco que se monta como dispositivo de bloque. initrd (Initial RAM Disk) es una imagen de disco comprimida que requiere un controlador de sistema de archivos para montarse como dispositivo de bloque. initramfs (Initial RAM Filesystem) es un archivo cpio comprimido que se extrae directamente en ramfs/tmpfs, siendo mas eficiente y la tecnologia estandar desde el kernel 2.6. Aunque tecnicamente son diferentes, los archivos en `/boot/` suelen llamarse `initrd.img-*` por convencion historica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-005">
<div class="flashcard-front">

**P:** Que herramienta se utiliza en distribuciones Red Hat/CentOS/Fedora modernas para generar la imagen initramfs?

</div>
<div class="flashcard-back">

**R:** c) dracut. `dracut` es la herramienta moderna para generar imagenes initramfs en distribuciones basadas en Red Hat (CentOS, Fedora, RHEL). `mkinitrd` es la herramienta antigua de Red Hat que ha sido reemplazada por dracut. `mkinitramfs` y `update-initramfs` son herramientas especificas de Debian/Ubuntu. El comando `dracut --force` regenera la imagen del kernel actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-006">
<div class="flashcard-front">

**P:** Que caracteristica tiene el kernel ring buffer (buffer de anillo del kernel)?

</div>
<div class="flashcard-back">

**R:** c) Es un buffer circular de tamano fijo donde los mensajes antiguos se sobrescriben con los nuevos. El kernel ring buffer es un area de memoria de tamano fijo donde el kernel almacena sus mensajes de registro. Al ser circular, cuando se llena, los mensajes mas antiguos se sobrescriben con los nuevos. Por este motivo, los mensajes de arranque se van perdiendo con el tiempo. El contenido se pierde al reiniciar y se puede consultar con el comando `dmesg`. Su tamano se puede configurar con el parametro del kernel `log_buf_len`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-007">
<div class="flashcard-front">

**P:** En que archivo de configuracion se establece la persistencia de los logs de journalctl?

</div>
<div class="flashcard-back">

**R:** b) /etc/systemd/journald.conf. Para hacer persistentes los logs de journalctl se configura `Storage=persistent` en `/etc/systemd/journald.conf`. Tambien se debe crear el directorio `/var/log/journal/` si no existe. Por defecto, en muchas distribuciones los logs de journalctl no son persistentes y se pierden al reiniciar. Despues de modificar la configuracion, se reinicia el servicio con `systemctl restart systemd-journald`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-008">
<div class="flashcard-front">

**P:** Que comando de dmesg permite filtrar y mostrar solo los mensajes del kernel con nivel de error?

</div>
<div class="flashcard-back">

**R:** b) dmesg --level=err. La opcion `--level` de `dmesg` permite filtrar mensajes por nivel de gravedad. `dmesg --level=err` muestra solo los mensajes de error. Se pueden combinar niveles, por ejemplo `dmesg --level=err,warn` para ver errores y advertencias. Otras opciones utiles son `-T` para marcas de tiempo legibles, `-H` para formato humano con colores, y `-w` para seguir nuevos mensajes en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-009">
<div class="flashcard-front">

**P:** Cual de los siguientes NO es un sistema de inicio (init system) que haya sido utilizado en distribuciones Linux?

</div>
<div class="flashcard-back">

**R:** d) bootctl. `bootctl` no es un sistema de inicio sino una herramienta para gestionar el bootloader systemd-boot. Los tres sistemas de inicio principales en la historia de Linux son: SysVinit (clasico, basado en runlevels, inicio secuencial), Upstart (desarrollado por Canonical para Ubuntu, basado en eventos) y systemd (moderno, inicio en paralelo, usado por la mayoria de distribuciones actuales). Upstart fue sustituido por systemd en Ubuntu 15.04.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-010">
<div class="flashcard-front">

**P:** Que opcion del comando journalctl muestra solo los mensajes del kernel, de forma equivalente a dmesg?

</div>
<div class="flashcard-back">

**R:** c) journalctl -k. La opcion `-k` (o `--dmesg`) de `journalctl` filtra para mostrar unicamente los mensajes del kernel, haciendo que sea funcionalmente equivalente a `dmesg`. Se puede combinar con `-b` para ver solo los mensajes del kernel del arranque actual: `journalctl -k -b`. La opcion `-b` sola muestra todos los logs del arranque actual (kernel y servicios).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-011">
<div class="flashcard-front">

**P:** Que comando se utiliza en Debian/Ubuntu para regenerar el archivo de configuracion de GRUB2?

</div>
<div class="flashcard-back">

**R:** update-grub. `update-grub` es un wrapper disponible en Debian/Ubuntu que equivale a ejecutar `grub-mkconfig -o /boot/grub/grub.cfg`. Regenera el archivo `grub.cfg` a partir de la configuracion en `/etc/default/grub` y los scripts en `/etc/grub.d/`. Se debe ejecutar cada vez que se modifica la configuracion de GRUB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-012">
<div class="flashcard-front">

**P:** Que comando muestra los mensajes almacenados en el kernel ring buffer?

</div>
<div class="flashcard-back">

**R:** dmesg. `dmesg` muestra los mensajes del kernel ring buffer, que incluyen mensajes de arranque, deteccion de hardware, carga de modulos y errores del kernel. Se puede usar con `-T` para marcas de tiempo legibles, `--level=err` para filtrar por nivel, y `-w` para seguir mensajes en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-013">
<div class="flashcard-front">

**P:** Que comando de journalctl se usa para ver los logs del arranque actual del sistema?

</div>
<div class="flashcard-back">

**R:** journalctl -b. `journalctl -b` muestra los logs del arranque actual. Se puede especificar arranques anteriores con `-b -1` (anterior), `-b -2` (dos arranques atras), etc. Para listar todos los arranques registrados se usa `journalctl --list-boots`. Requiere que los logs sean persistentes para ver arranques anteriores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-014">
<div class="flashcard-front">

**P:** Que comando se usa en Debian/Ubuntu para actualizar la imagen initramfs del kernel actual?

</div>
<div class="flashcard-back">

**R:** update-initramfs -u. `update-initramfs -u` actualiza la imagen initramfs existente para el kernel en ejecucion. La opcion `-u` significa update. Para crear una nueva imagen se usa `-c` con `-k version`. En Red Hat/CentOS/Fedora moderno se usa `dracut` en su lugar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-015">
<div class="flashcard-front">

**P:** Que comando permite instalar GRUB2 en el MBR del disco /dev/sda?

</div>
<div class="flashcard-back">

**R:** grub-install /dev/sda. `grub-install /dev/sda` instala el cargador de arranque GRUB2 en el MBR del disco especificado. En distribuciones Red Hat/CentOS se usa `grub2-install`. Para sistemas UEFI se requieren parametros adicionales: `grub-install --target=x86_64-efi --efi-directory=/boot/efi`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-016">
<div class="flashcard-front">

**P:** Tip de examen: Aunque tecnicamente son diferentes, los archivos en `/boot/` todavia suelen llam...

</div>
<div class="flashcard-back">

**R:** Aunque tecnicamente son diferentes, los archivos en `/boot/` todavia suelen llamarse `initrd.img-*` por convencion historica, incluso cuando realmente son initramfs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-017">
<div class="flashcard-front">

**P:** Tip de examen: Es importante saber que Upstart existio y fue usado por Ubuntu, pero actualmente...

</div>
<div class="flashcard-back">

**R:** Es importante saber que Upstart existio y fue usado por Ubuntu, pero actualmente systemd es el estandar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-018">
<div class="flashcard-front">

**P:** Tip de examen: Debido a que el ring buffer es circular y de tamano fijo, los mensajes de arranq...

</div>
<div class="flashcard-back">

**R:** Debido a que el ring buffer es circular y de tamano fijo, los mensajes de arranque se van perdiendo con el tiempo a medida que el sistema genera nuevos mensajes del kernel. Por eso es importante consultar `dmesg` poco despues del arranque si se necesita informacion del boot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `/boot/grub/grub.cfg`?

</div>
<div class="flashcard-back">

**R:** Archivo de configuracion principal de GRUB2. **NO se debe editar manualmente.** Se genera automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/default/grub`?

</div>
<div class="flashcard-back">

**R:** Archivo con las opciones por defecto de GRUB2. **Este es el archivo que se edita manualmente.**

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-021">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/grub.d/`?

</div>
<div class="flashcard-back">

**R:** Directorio con scripts que generan secciones del archivo `grub.cfg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-022">
<div class="flashcard-front">

**P:** Que hace el comando `00_header`?

</div>
<div class="flashcard-back">

**R:** Genera la cabecera del archivo de configuracion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-023">
<div class="flashcard-front">

**P:** Que hace el comando `05_debian_theme`?

</div>
<div class="flashcard-back">

**R:** Configura el fondo y colores (Debian/Ubuntu)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-024">
<div class="flashcard-front">

**P:** Que es/son 1. La secuencia completa de arranque?

</div>
<div class="flashcard-back">

**R:** El proceso de arranque de un sistema Linux sigue una secuencia bien definida. Es fundamental comprender cada etapa para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-025">
<div class="flashcard-front">

**P:** Que es/son 3. El cargador de arranque GRUB2?

</div>
<div class="flashcard-back">

**R:** GRUB2 (GRand Unified Bootloader version 2) es el cargador de arranque estandar en la mayoria de distribuciones Linux modernas. Ha reemplazado a GRUB Legacy (version 0.97).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-026">
<div class="flashcard-front">

**P:** Que es/son 4. Opciones del kernel en el arranque?

</div>
<div class="flashcard-back">

**R:** Los parametros del kernel se pasan a traves de la linea `linux` en GRUB2. Estos parametros modifican el comportamiento del arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-027">
<div class="flashcard-front">

**P:** Que es/son 6. El proceso init y systemd?

</div>
<div class="flashcard-back">

**R:** Una vez que el kernel ha montado el initramfs y posteriormente el sistema de archivos raiz real, ejecuta el proceso init (PID 1). Este proceso es responsable de iniciar todos los demas servicios del si

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-028">
<div class="flashcard-front">

**P:** Que es/son 7. Registros de arranque?

</div>
<div class="flashcard-back">

**R:** Los registros (logs) de arranque son fundamentales para diagnosticar problemas. Existen varios metodos para consultarlos.

</div>
</div>

---

