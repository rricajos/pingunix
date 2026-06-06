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

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** ¿Que archivo binario principal utiliza ISOLINUX para arrancar desde medios opticos CD/DVD?

</div>
<div class="flashcard-back">

**R:** c) `isolinux.bin`. ISOLINUX utiliza el archivo `isolinux.bin` como cargador de arranque principal para medios opticos con sistema de archivos ISO 9660 (con extensiones El Torito). Su archivo de configuracion correspondiente es `isolinux.cfg`. Se utiliza ampliamente para crear Live CDs y discos de instalacion de distribuciones Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-012">
<div class="flashcard-front">

**P:** En la configuracion DHCP para arranque PXE, ¿que directiva especifica la direccion del servidor TFTP?

</div>
<div class="flashcard-back">

**R:** c) `next-server`. En la configuracion de ISC DHCP para PXE, la directiva `next-server` indica la direccion IP del servidor TFTP desde el cual el cliente descargara el cargador de arranque. La directiva `filename` complementa indicando el nombre del archivo de arranque (por ejemplo, `"pxelinux.0"`). Ambas directivas son necesarias para una configuracion PXE funcional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-013">
<div class="flashcard-front">

**P:** ¿Que herramienta se utiliza para gestionar las Machine Owner Keys (MOK) en sistemas con Secure Boot?

</div>
<div class="flashcard-back">

**R:** c) `mokutil`. `mokutil` es la herramienta para gestionar las Machine Owner Keys (MOK) en sistemas con Secure Boot. Permite verificar el estado de Secure Boot (`mokutil --sb-state`), listar claves enrolladas (`mokutil --list-enrolled`) e importar nuevas claves (`mokutil --import`). Las MOK permiten que los usuarios agreguen sus propias claves de confianza sin necesidad de modificar las claves del firmware UEFI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-014">
<div class="flashcard-front">

**P:** ¿Cual es la directiva en la configuracion de SYSLINUX que define el tiempo de espera antes de arrancar la opcion por defecto, expresada en decimas de segundo?

</div>
<div class="flashcard-back">

**R:** c) `TIMEOUT`. La directiva `TIMEOUT` en la configuracion de SYSLINUX/ISOLINUX/PXELINUX define el tiempo de espera en **decimas de segundo** antes de arrancar automaticamente la entrada por defecto. Por ejemplo, `TIMEOUT 50` equivale a 5 segundos. Si se establece en 0, el sistema espera indefinidamente la interaccion del usuario. La directiva `PROMPT 1` debe estar activa para que el timeout funcione correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-015">
<div class="flashcard-front">

**P:** ¿Cual de los siguientes cargadores de arranque esta diseñado principalmente para sistemas embebidos con arquitectura ARM?

</div>
<div class="flashcard-back">

**R:** c) U-Boot. U-Boot (Universal Boot Loader) es el cargador de arranque estandar para sistemas embebidos, especialmente en arquitecturas ARM, MIPS y PowerPC. Se usa ampliamente en routers, dispositivos IoT y placas de desarrollo como Raspberry Pi y BeagleBone. A diferencia de GRUB 2 y systemd-boot que estan orientados a escritorio/servidor x86, U-Boot esta optimizado para hardware con recursos limitados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-016">
<div class="flashcard-front">

**P:** Un administrador quiere cambiar el orden de arranque en un sistema UEFI para que la entrada 0002 arranque primero, seguida de 0001 y 0003. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** c) `efibootmgr -o 0002,0001,0003`. La opcion `-o` de `efibootmgr` establece el orden de arranque completo en la NVRAM UEFI. Se listan los numeros de las entradas separados por comas en el orden deseado. La opcion `-n` solo establece el proximo arranque (una sola vez), sin cambiar el orden permanente. `bootctl` gestiona systemd-boot, no las entradas UEFI de la NVRAM directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-017">
<div class="flashcard-front">

**P:** En la cadena de confianza de Secure Boot, ¿que base de datos contiene las firmas digitales revocadas?

</div>
<div class="flashcard-back">

**R:** b) dbx. En Secure Boot, `dbx` es la base de datos de firmas revocadas (blacklist). Contiene los hashes y certificados que han sido revocados y que no deben permitirse durante el arranque. La base de datos `db` contiene las firmas permitidas (whitelist). La PK (Platform Key) es la clave raiz del propietario de la plataforma, y la KEK (Key Exchange Key) autoriza las actualizaciones de db y dbx.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que archivo de texto plano puede usarse en U-Boot como alternativa al script de arranque compilado `boot.scr`?

</div>
<div class="flashcard-back">

**R:** b) `/boot/uEnv.txt`. `/boot/uEnv.txt` es un archivo de texto plano que contiene variables de entorno de U-Boot. Es una alternativa mas sencilla al script compilado `boot.scr`, ya que no requiere compilacion y se puede editar directamente. Contiene variables como `bootargs`, `bootcmd` y `loadaddr` en formato `variable=valor`. U-Boot lee este archivo automaticamente durante el proceso de arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-019">
<div class="flashcard-front">

**P:** ¿Cual de los siguientes cargadores de arranque NO soporta el arranque en sistemas BIOS/MBR?

</div>
<div class="flashcard-back">

**R:** c) systemd-boot. systemd-boot (anteriormente gummiboot) es un cargador de arranque exclusivamente UEFI. No tiene soporte para el arranque BIOS/MBR. Solo puede leer la ESP (EFI System Partition) con formato FAT. GRUB 2 y SYSLINUX soportan tanto BIOS como UEFI, y U-Boot depende de la plataforma pero generalmente soporta arranque sin UEFI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-020">
<div class="flashcard-front">

**P:** En un entorno PXE, un cliente con IP 192.168.1.100 busca su configuracion. ¿Cual es la representacion hexadecimal de esta IP que PXELINUX buscara?

</div>
<div class="flashcard-back">

**R:** a) `C0A80164`. La IP 192.168.1.100 se convierte a hexadecimal componente por componente: 192=C0, 168=A8, 1=01, 100=64, resultando en `C0A80164` (en mayusculas). PXELINUX busca este archivo en el directorio `pxelinux.cfg/` y, si no lo encuentra, va eliminando digitos desde la derecha: `C0A8016`, `C0A801`, etc., hasta llegar al archivo `default`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para instalar systemd-boot en la particion ESP de un sistema UEFI?

</div>
<div class="flashcard-back">

**R:** bootctl install. El comando `bootctl install` instala los archivos de systemd-boot en la ESP (EFI System Partition). Copia el cargador EFI y crea la estructura de directorios necesaria en `/boot/loader/`. Despues de la instalacion, se deben crear las entradas de arranque como archivos `.conf` en `/boot/loader/entries/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para verificar si Secure Boot esta habilitado en el sistema?

</div>
<div class="flashcard-back">

**R:** mokutil --sb-state. El comando `mokutil --sb-state` muestra el estado actual de Secure Boot, indicando si esta habilitado o deshabilitado. Es la forma estandar de verificar el estado de Secure Boot desde el sistema operativo Linux. Mostrara "SecureBoot enabled" o "SecureBoot disabled" segun la configuracion del firmware UEFI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando se usa para instalar SYSLINUX en una particion FAT ubicada en `/dev/sdb1`?

</div>
<div class="flashcard-back">

**R:** syslinux --install /dev/sdb1. El comando `syslinux --install /dev/sdb1` instala el cargador de arranque SYSLINUX en la particion FAT especificada. Tambien se puede usar la forma abreviada `syslinux -i /dev/sdb1`. Tras la instalacion, se debe crear el archivo de configuracion `syslinux.cfg` en la raiz de la particion con las entradas de arranque deseadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando muestra las entradas de arranque UEFI almacenadas en la NVRAM con informacion detallada?

</div>
<div class="flashcard-back">

**R:** efibootmgr -v. El comando `efibootmgr -v` (o `efibootmgr --verbose`) muestra todas las entradas de arranque UEFI almacenadas en la NVRAM del firmware con informacion detallada, incluyendo la ruta completa del cargador EFI, el dispositivo y las opciones de cada entrada. Sin la opcion `-v`, solo se muestra una lista resumida de las entradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando de U-Boot muestra todas las variables de entorno configuradas actualmente?

</div>
<div class="flashcard-back">

**R:** printenv. En la consola interactiva de U-Boot, el comando `printenv` muestra todas las variables de entorno configuradas, incluyendo `bootargs`, `bootcmd`, `loadaddr` y otras. Las variables se pueden modificar con `setenv` y guardar permanentemente con `saveenv`. Es una herramienta fundamental para diagnosticar y configurar el proceso de arranque en sistemas embebidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-026">
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

<div class="flashcard" data-id="202.3-fc-027">
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

<div class="flashcard" data-id="202.3-fc-028">
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

<div class="flashcard" data-id="202.3-fc-029">
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

<div class="flashcard" data-id="202.3-fc-030">
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

<div class="flashcard" data-id="202.3-fc-031">
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

<div class="flashcard" data-id="202.3-fc-032">
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

<div class="flashcard" data-id="202.3-fc-033">
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

<div class="flashcard" data-id="202.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Comparativa de cargadores de arranque?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | GRUB 2 | SYSLINUX | systemd-boot | U-Boot |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.3">
</div>

<div class="flashcard" data-id="202.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

