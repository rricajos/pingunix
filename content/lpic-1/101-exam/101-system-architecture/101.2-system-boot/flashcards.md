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

> 29 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Ordena correctamente las 4 etapas de la secuencia de arranque de un sistema Linux con BIOS:

1. <input type="text" class="fill-blank" data-answer="POST" data-alt="post,Power-On Self-Test" placeholder="$ escribe aqui...">
2. <input type="text" class="fill-blank" data-answer="MBR" data-alt="mbr,Master Boot Record,bootloader" placeholder="$ escribe aqui...">
3. <input type="text" class="fill-blank" data-answer="Kernel" data-alt="kernel,linux" placeholder="$ escribe aqui...">
4. <input type="text" class="fill-blank" data-answer="init" data-alt="init/systemd,systemd,PID 1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** La secuencia completa de arranque con BIOS es: **1) POST** — el firmware verifica la CPU, RAM y controladores de disco. **2) MBR/Bootloader** — el firmware lee los primeros 512 bytes del disco, ejecuta el codigo de arranque que carga GRUB2. **3) Kernel** — GRUB2 carga el kernel y el initramfs en memoria; el kernel inicializa el hardware y monta el sistema de archivos raiz. **4) init (PID 1)** — el kernel ejecuta `/sbin/init` (systemd o SysVinit), que inicia todos los servicios del sistema. En sistemas UEFI, la etapa 2 cambia: el firmware lee la ESP (EFI System Partition) directamente sin necesidad de MBR.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-025">
<div class="flashcard-front">

**P:** Un administrador necesita cambiar el tiempo de espera del menu GRUB2 a 10 segundos. Que archivo debe editar, que variable debe modificar, y que comando debe ejecutar despues para aplicar los cambios?

</div>
<div class="flashcard-back">

**R:** Debe editar `/etc/default/grub` y establecer `GRUB_TIMEOUT=10`. Despues debe ejecutar `update-grub` (Debian/Ubuntu) o `grub2-mkconfig -o /boot/grub2/grub.cfg` (Red Hat/CentOS). **Nunca se debe editar `/boot/grub/grub.cfg` directamente**, ya que se sobrescribe al regenerar la configuracion. Otras variables importantes en `/etc/default/grub` son: `GRUB_DEFAULT` (entrada por defecto), `GRUB_CMDLINE_LINUX` (parametros del kernel para todas las entradas) y `GRUB_CMDLINE_LINUX_DEFAULT` (parametros solo para el modo normal, no recovery). Los scripts en `/etc/grub.d/` generan las secciones del archivo `grub.cfg` final.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-026">
<div class="flashcard-front">

**P:** Un servidor Linux no arranca correctamente y sospechas de un problema con el disco. Necesitas arrancar en modo de solo lectura y con mensajes de depuracion detallados. Que parametros del kernel aniadirias en la linea `linux` de GRUB2?

</div>
<div class="flashcard-back">

**R:** Se deben usar `ro` (montar el sistema de archivos raiz como solo lectura) y `debug` (activar mensajes detallados del kernel). Parametros clave del kernel para el examen LPIC-1: `root=/dev/sda1` — especifica la particion raiz. `ro` / `rw` — montar raiz como solo lectura o lectura-escritura. `single` o `1` — arrancar en modo monousuario (runlevel 1). `init=/bin/bash` — ejecutar bash como PID 1 (rescate avanzado). `quiet` — suprimir mensajes del kernel. `splash` — mostrar pantalla grafica de arranque. `debug` — activar depuracion detallada. `systemd.unit=rescue.target` — arrancar en modo rescate con systemd. Estos parametros se pueden pasar temporalmente editando la entrada de GRUB con la tecla `e`, o permanentemente en `GRUB_CMDLINE_LINUX` dentro de `/etc/default/grub`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-027">
<div class="flashcard-front">

**P:** En un sistema con SysVinit, el administrador quiere que el sistema arranque en modo multiusuario con interfaz grafica. Que runlevel debe configurar? Y cual seria el target equivalente en systemd?

Runlevel: <input type="text" class="fill-blank" data-answer="5" data-alt="runlevel 5" placeholder="$ escribe aqui...">

Target systemd: <input type="text" class="fill-blank" data-answer="graphical.target" data-alt="graphical" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** El **runlevel 5** es el modo multiusuario con GUI en SysVinit. Su equivalente en systemd es `graphical.target`. Correspondencia completa entre runlevels y targets de systemd: **0** = `poweroff.target` (apagado). **1 / S / single** = `rescue.target` (monousuario/rescate). **2** = `multi-user.target` (multiusuario sin red en algunas distros). **3** = `multi-user.target` (multiusuario con red, sin GUI). **5** = `graphical.target` (multiusuario con GUI). **6** = `reboot.target` (reinicio). El proceso init siempre es **PID 1**. En SysVinit, el runlevel por defecto se define en `/etc/inittab`. En systemd, el target por defecto se configura con `systemctl set-default graphical.target` (crea un enlace simbolico en `/etc/systemd/system/default.target`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-028">
<div class="flashcard-front">

**P:** Un servidor Linux se reinicio inesperadamente anoche. El administrador necesita revisar los mensajes del kernel del arranque anterior, no del actual. Que comando debe usar y que requisito previo debe cumplirse?

</div>
<div class="flashcard-back">

**R:** Debe usar `journalctl -k -b -1` para ver los mensajes del kernel (`-k`) del arranque anterior (`-b -1`). El requisito previo es que **los logs de journald sean persistentes**. Para ello: 1) Configurar `Storage=persistent` en `/etc/systemd/journald.conf`. 2) Crear el directorio `/var/log/journal/` si no existe. 3) Reiniciar el servicio con `systemctl restart systemd-journald`. Sin persistencia, los logs se pierden al reiniciar. Otros metodos para consultar registros de arranque: `dmesg` — muestra el kernel ring buffer (solo arranque actual, se sobrescribe con el tiempo). `journalctl -b` — todos los logs del arranque actual. `journalctl --list-boots` — lista todos los arranques registrados. `/var/log/boot.log` — algunos sistemas guardan la salida del proceso de arranque aqui.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.2">
</div>

<div class="flashcard" data-id="101.2-fc-029">
<div class="flashcard-front">

**P:** TRAMPA DE EXAMEN: Un candidato responde que `mkinitramfs` es el comando para generar initramfs en CentOS 8 y que se debe editar `/boot/grub/grub.cfg` directamente para cambiar el timeout de GRUB. Cuantos errores hay y cuales son?

</div>
<div class="flashcard-back">

**R:** Hay **2 errores**. 1) `mkinitramfs` y `update-initramfs` son herramientas de **Debian/Ubuntu**. En CentOS/RHEL/Fedora moderno se usa `dracut` (y `dracut --force` para regenerar). `mkinitrd` era la herramienta antigua de Red Hat, ya reemplazada. 2) **Nunca se edita `/boot/grub/grub.cfg` directamente** porque se sobrescribe al regenerar. Se edita `/etc/default/grub` y luego se ejecuta `update-grub` (Debian/Ubuntu) o `grub2-mkconfig -o /boot/grub2/grub.cfg` (Red Hat/CentOS). Otras trampas frecuentes del examen: los archivos en `/boot/` se llaman `initrd.img-*` por convencion historica aunque realmente sean initramfs. `journalctl -k` equivale a `dmesg` pero con mas opciones de filtrado. Upstart existio en Ubuntu pero fue reemplazado por systemd en Ubuntu 15.04. El ring buffer de `dmesg` es circular y los mensajes de arranque se pierden con el tiempo.

</div>
</div>

---

