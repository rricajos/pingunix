---
title: "202.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "202.3"
---

# Flashcards: 202.3 - Cargadores De Arranque Alternativos

> 22 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cual de los siguientes cargadores de arranque de la familia SYSLINUX se utiliza para arrancar sistemas Linux a traves de la red mediante PXE?

</div>
<div class="flashcard-back">

**R:** c) PXELINUX. PXELINUX es la variante de la familia SYSLINUX diseñada especificamente para el arranque por red utilizando el protocolo PXE (Preboot Execution Environment). SYSLINUX se usa para sistemas de archivos FAT, ISOLINUX para medios opticos (CD/DVD con ISO 9660), y EXTLINUX para sistemas de archivos Linux nativos (ext2/3/4, btrfs).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-002">
<div class="flashcard-front">

**P:** En una configuracion de arranque PXE, ¿en que orden busca PXELINUX su archivo de configuracion?

</div>
<div class="flashcard-back">

**R:** c) MAC (con prefijo 01-), IP hexadecimal, default. PXELINUX busca la configuracion en el siguiente orden: primero por direccion MAC con el prefijo `01-` (por ejemplo, `01-aa-bb-cc-dd-ee-ff`), luego por la IP del cliente convertida a hexadecimal (reduciendo digitos progresivamente), y finalmente el archivo `default`. Este orden permite configuraciones especificas por maquina (MAC) con un respaldo general (default).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para instalar y gestionar systemd-boot?

</div>
<div class="flashcard-back">

**R:** b) `bootctl`. `bootctl` es la herramienta de linea de comandos para instalar, actualizar y gestionar systemd-boot. Se ejecuta `bootctl install` para instalar el cargador en la ESP, `bootctl status` para ver el estado y `bootctl list` para listar las entradas. `efibootmgr` gestiona las entradas de arranque UEFI en la NVRAM, pero no es especifico de systemd-boot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-004">
<div class="flashcard-front">

**P:** Un administrador necesita crear un USB arrancable con SYSLINUX. ¿Que sistema de archivos debe tener la particion USB?

</div>
<div class="flashcard-back">

**R:** c) FAT (FAT12/FAT16/FAT32). SYSLINUX esta diseñado especificamente para funcionar con sistemas de archivos FAT. Para arrancar desde ext2/3/4 o btrfs se utilizaria EXTLINUX, que es otra variante de la misma familia. Para medios opticos con ISO 9660 se utiliza ISOLINUX.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-005">
<div class="flashcard-front">

**P:** ¿Donde se almacenan las entradas de arranque individuales de systemd-boot?

</div>
<div class="flashcard-back">

**R:** b) `/boot/loader/entries/*.conf`. systemd-boot almacena cada entrada de arranque como un archivo `.conf` individual en el directorio `/boot/loader/entries/`. La configuracion principal del cargador (timeout, entrada por defecto) se encuentra en `/boot/loader/loader.conf`. Cada archivo de entrada contiene directivas como `title`, `linux`, `initrd` y `options`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-006">
<div class="flashcard-front">

**P:** ¿Que herramienta se usa para gestionar las entradas de arranque almacenadas en la NVRAM de un sistema UEFI?

</div>
<div class="flashcard-back">

**R:** c) `efibootmgr`. `efibootmgr` es la herramienta estandar para manipular las entradas de arranque UEFI almacenadas en la NVRAM del firmware. Permite crear, eliminar, reordenar y activar/desactivar entradas de arranque. `bootctl` gestiona systemd-boot especificamente, `grub-install` instala GRUB, y `mokutil` gestiona las Machine Owner Keys para Secure Boot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-007">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre systemd-boot es correcta?

</div>
<div class="flashcard-back">

**R:** b) Solo funciona en sistemas UEFI y lee unicamente la ESP. systemd-boot es un cargador de arranque exclusivamente UEFI. No soporta el arranque BIOS/MBR. Solo puede acceder a la ESP (EFI System Partition), que utiliza sistema de archivos FAT32. Esto significa que los kernels e initramfs deben estar en la ESP o ser accesibles desde ella. Utiliza sus propios archivos de configuracion, no `grub.cfg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-008">
<div class="flashcard-front">

**P:** Un administrador desea que un servidor arranque desde la red usando PXE. ¿Que dos servicios minimos necesita en el servidor de arranque?

</div>
<div class="flashcard-back">

**R:** b) DHCP y TFTP. El arranque PXE requiere como minimo un servidor DHCP (para asignar una IP al cliente e indicarle la ubicacion del archivo de arranque mediante las opciones `next-server` y `filename`) y un servidor TFTP (para transferir el cargador de arranque, la configuracion, el kernel y el initramfs al cliente). Opcionalmente se pueden usar NFS o HTTP para proporcionar el sistema de archivos raiz despues del arranque inicial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que componente se utiliza en la cadena de arranque Secure Boot para permitir que cargadores no firmados directamente por Microsoft puedan ejecutarse?

</div>
<div class="flashcard-back">

**R:** b) `shimx64.efi`. `shim` es un cargador de primera etapa firmado por Microsoft que actua como intermediario en la cadena de confianza de Secure Boot. Shim verifica la firma de GRUB (u otro cargador de segunda etapa) usando las claves de la distribucion o las MOK (Machine Owner Keys). Esto permite que distribuciones Linux funcionen con Secure Boot activo sin necesitar que cada version de GRUB este firmada directamente por Microsoft.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-010">
<div class="flashcard-front">

**P:** En U-Boot, ¿que comando se utiliza para guardar de forma persistente las variables de entorno modificadas con `setenv`?

</div>
<div class="flashcard-back">

**R:** a) `saveenv`. En la consola interactiva de U-Boot, `saveenv` guarda todas las variables de entorno actuales de forma persistente (normalmente en flash o en una particion reservada). Las variables se modifican con `setenv` (por ejemplo, `setenv bootargs "root=/dev/mmcblk0p2 rw"`), pero los cambios no sobreviven un reinicio hasta que se ejecuta `saveenv`. El comando `printenv` muestra las variables actuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: PXELINUX busca la configuracion primero por direccion MAC (con prefijo `01-`), l...

</div>
<div class="flashcard-back">

**R:** PXELINUX busca la configuracion primero por direccion MAC (con prefijo `01-`), luego por IP en hexadecimal (reduciendo digitos), y finalmente el archivo `default`. Por ejemplo, para la IP 192.168.1.100, buscaria `C0A80164`, `C0A8016`, `C0A801`, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: `systemd-boot` solo funciona con UEFI y almacena su configuracion en la ESP. Cad...

</div>
<div class="flashcard-back">

**R:** `systemd-boot` solo funciona con UEFI y almacena su configuracion en la ESP. Cada entrada de arranque es un archivo `.conf` independiente en `/boot/loader/entries/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: El arranque PXE requiere al menos dos servicios: DHCP (para asignar IP y indicar...

</div>
<div class="flashcard-back">

**R:** El arranque PXE requiere al menos dos servicios: DHCP (para asignar IP y indicar el archivo de arranque) y TFTP (para transferir los archivos). Opcionalmente se puede usar NFS o HTTP para el sistema de archivos raiz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Secure Boot utiliza `shim` como cargador de primera etapa firmado por Microsoft....

</div>
<div class="flashcard-back">

**R:** Secure Boot utiliza `shim` como cargador de primera etapa firmado por Microsoft. Shim a su vez carga GRUB u otro cargador de segunda etapa. `mokutil` se usa para gestionar las Machine Owner Keys (MOK).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-015">
<div class="flashcard-front">

**P:** Que hace el comando `DEFAULT`?

</div>
<div class="flashcard-back">

**R:** Etiqueta de arranque por defecto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `PROMPT`?

</div>
<div class="flashcard-back">

**R:** Mostrar prompt (0=no, 1=si)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `TIMEOUT`?

</div>
<div class="flashcard-back">

**R:** Tiempo de espera en decimas de segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `LABEL`?

</div>
<div class="flashcard-back">

**R:** Define una entrada de arranque

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `KERNEL`?

</div>
<div class="flashcard-back">

**R:** Ruta al kernel

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-020">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** Aunque GRUB 2 es el cargador de arranque mas utilizado en sistemas Linux de escritorio y servidor, existen varios cargadores alternativos diseñados para escenarios especificos: arranque por red, sistem

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-021">
<div class="flashcard-front">

**P:** Que es/son La familia SYSLINUX?

</div>
<div class="flashcard-back">

**R:** SYSLINUX es un conjunto de cargadores de arranque ligeros desarrollados por H. Peter Anvin. Cada variante esta diseñada para un tipo especifico de medio de arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-022">
<div class="flashcard-front">

**P:** Que es/son Comparativa de cargadores de arranque?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | GRUB 2 | SYSLINUX | systemd-boot | U-Boot |

</div>
</div>

---

