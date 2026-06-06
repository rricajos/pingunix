---
title: "202.3 - Cargadores de arranque alternativos"
tags: [lpic-2, examen-201, tema-202, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "202"
subtema: "202.3"
---

# 202.3 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

¿Cual de los siguientes cargadores de arranque de la familia SYSLINUX se utiliza para arrancar sistemas Linux a traves de la red mediante PXE?

a) SYSLINUX
b) ISOLINUX
c) PXELINUX
d) EXTLINUX

<details>
<summary>Respuesta</summary>

**c) PXELINUX**

PXELINUX es la variante de la familia SYSLINUX diseñada especificamente para el arranque por red utilizando el protocolo PXE (Preboot Execution Environment). SYSLINUX se usa para sistemas de archivos FAT, ISOLINUX para medios opticos (CD/DVD con ISO 9660), y EXTLINUX para sistemas de archivos Linux nativos (ext2/3/4, btrfs).
</details>

---

### Pregunta 2

En una configuracion de arranque PXE, ¿en que orden busca PXELINUX su archivo de configuracion?

a) IP hexadecimal, MAC, default
b) default, MAC, IP hexadecimal
c) MAC (con prefijo 01-), IP hexadecimal, default
d) hostname, MAC, default

<details>
<summary>Respuesta</summary>

**c) MAC (con prefijo 01-), IP hexadecimal, default**

PXELINUX busca la configuracion en el siguiente orden: primero por direccion MAC con el prefijo `01-` (por ejemplo, `01-aa-bb-cc-dd-ee-ff`), luego por la IP del cliente convertida a hexadecimal (reduciendo digitos progresivamente), y finalmente el archivo `default`. Este orden permite configuraciones especificas por maquina (MAC) con un respaldo general (default).
</details>

---

### Pregunta 3

¿Que comando se utiliza para instalar y gestionar systemd-boot?

a) `grub-install`
b) `bootctl`
c) `systemd-boot`
d) `efibootmgr`

<details>
<summary>Respuesta</summary>

**b) `bootctl`**

`bootctl` es la herramienta de linea de comandos para instalar, actualizar y gestionar systemd-boot. Se ejecuta `bootctl install` para instalar el cargador en la ESP, `bootctl status` para ver el estado y `bootctl list` para listar las entradas. `efibootmgr` gestiona las entradas de arranque UEFI en la NVRAM, pero no es especifico de systemd-boot.
</details>

---

### Pregunta 4

Un administrador necesita crear un USB arrancable con SYSLINUX. ¿Que sistema de archivos debe tener la particion USB?

a) ext4
b) NTFS
c) FAT (FAT12/FAT16/FAT32)
d) XFS

<details>
<summary>Respuesta</summary>

**c) FAT (FAT12/FAT16/FAT32)**

SYSLINUX esta diseñado especificamente para funcionar con sistemas de archivos FAT. Para arrancar desde ext2/3/4 o btrfs se utilizaria EXTLINUX, que es otra variante de la misma familia. Para medios opticos con ISO 9660 se utiliza ISOLINUX.
</details>

---

### Pregunta 5

¿Donde se almacenan las entradas de arranque individuales de systemd-boot?

a) `/etc/systemd/boot.conf`
b) `/boot/loader/entries/*.conf`
c) `/boot/grub/grub.cfg`
d) `/etc/default/bootloader`

<details>
<summary>Respuesta</summary>

**b) `/boot/loader/entries/*.conf`**

systemd-boot almacena cada entrada de arranque como un archivo `.conf` individual en el directorio `/boot/loader/entries/`. La configuracion principal del cargador (timeout, entrada por defecto) se encuentra en `/boot/loader/loader.conf`. Cada archivo de entrada contiene directivas como `title`, `linux`, `initrd` y `options`.
</details>

---

### Pregunta 6

¿Que herramienta se usa para gestionar las entradas de arranque almacenadas en la NVRAM de un sistema UEFI?

a) `bootctl`
b) `grub-install`
c) `efibootmgr`
d) `mokutil`

<details>
<summary>Respuesta</summary>

**c) `efibootmgr`**

`efibootmgr` es la herramienta estandar para manipular las entradas de arranque UEFI almacenadas en la NVRAM del firmware. Permite crear, eliminar, reordenar y activar/desactivar entradas de arranque. `bootctl` gestiona systemd-boot especificamente, `grub-install` instala GRUB, y `mokutil` gestiona las Machine Owner Keys para Secure Boot.
</details>

---

### Pregunta 7

¿Cual de las siguientes afirmaciones sobre systemd-boot es correcta?

a) Soporta arranque en sistemas BIOS y UEFI
b) Solo funciona en sistemas UEFI y lee unicamente la ESP
c) Requiere un archivo grub.cfg para su configuracion
d) Es el cargador por defecto en todas las distribuciones Linux

<details>
<summary>Respuesta</summary>

**b) Solo funciona en sistemas UEFI y lee unicamente la ESP**

systemd-boot es un cargador de arranque exclusivamente UEFI. No soporta el arranque BIOS/MBR. Solo puede acceder a la ESP (EFI System Partition), que utiliza sistema de archivos FAT32. Esto significa que los kernels e initramfs deben estar en la ESP o ser accesibles desde ella. Utiliza sus propios archivos de configuracion, no `grub.cfg`.
</details>

---

### Pregunta 8

Un administrador desea que un servidor arranque desde la red usando PXE. ¿Que dos servicios minimos necesita en el servidor de arranque?

a) DNS y HTTP
b) DHCP y TFTP
c) NFS y FTP
d) DHCP y NFS

<details>
<summary>Respuesta</summary>

**b) DHCP y TFTP**

El arranque PXE requiere como minimo un servidor DHCP (para asignar una IP al cliente e indicarle la ubicacion del archivo de arranque mediante las opciones `next-server` y `filename`) y un servidor TFTP (para transferir el cargador de arranque, la configuracion, el kernel y el initramfs al cliente). Opcionalmente se pueden usar NFS o HTTP para proporcionar el sistema de archivos raiz despues del arranque inicial.
</details>

---

### Pregunta 9

¿Que componente se utiliza en la cadena de arranque Secure Boot para permitir que cargadores no firmados directamente por Microsoft puedan ejecutarse?

a) `grubx64.efi`
b) `shimx64.efi`
c) `bootx64.efi`
d) `mokutil`

<details>
<summary>Respuesta</summary>

**b) `shimx64.efi`**

`shim` es un cargador de primera etapa firmado por Microsoft que actua como intermediario en la cadena de confianza de Secure Boot. Shim verifica la firma de GRUB (u otro cargador de segunda etapa) usando las claves de la distribucion o las MOK (Machine Owner Keys). Esto permite que distribuciones Linux funcionen con Secure Boot activo sin necesitar que cada version de GRUB este firmada directamente por Microsoft.
</details>

---

### Pregunta 10

En U-Boot, ¿que comando se utiliza para guardar de forma persistente las variables de entorno modificadas con `setenv`?

a) `saveenv`
b) `export`
c) `env save`
d) `persist`

<details>
<summary>Respuesta</summary>

**a) `saveenv`**

En la consola interactiva de U-Boot, `saveenv` guarda todas las variables de entorno actuales de forma persistente (normalmente en flash o en una particion reservada). Las variables se modifican con `setenv` (por ejemplo, `setenv bootargs "root=/dev/mmcblk0p2 rw"`), pero los cambios no sobreviven un reinicio hasta que se ejecuta `saveenv`. El comando `printenv` muestra las variables actuales.
</details>

---

### Pregunta 11

¿Que archivo binario principal utiliza ISOLINUX para arrancar desde medios opticos CD/DVD?

a) `syslinux.bin`
b) `pxelinux.0`
c) `isolinux.bin`
d) `bootx64.efi`

<details>
<summary>Respuesta</summary>

**c) `isolinux.bin`**

ISOLINUX utiliza el archivo `isolinux.bin` como cargador de arranque principal para medios opticos con sistema de archivos ISO 9660 (con extensiones El Torito). Su archivo de configuracion correspondiente es `isolinux.cfg`. Se utiliza ampliamente para crear Live CDs y discos de instalacion de distribuciones Linux.
</details>

---

### Pregunta 12

En la configuracion DHCP para arranque PXE, ¿que directiva especifica la direccion del servidor TFTP?

a) `tftp-server`
b) `boot-server`
c) `next-server`
d) `server-name`

<details>
<summary>Respuesta</summary>

**c) `next-server`**

En la configuracion de ISC DHCP para PXE, la directiva `next-server` indica la direccion IP del servidor TFTP desde el cual el cliente descargara el cargador de arranque. La directiva `filename` complementa indicando el nombre del archivo de arranque (por ejemplo, `"pxelinux.0"`). Ambas directivas son necesarias para una configuracion PXE funcional.
</details>

---

### Pregunta 13

¿Que herramienta se utiliza para gestionar las Machine Owner Keys (MOK) en sistemas con Secure Boot?

a) `efibootmgr`
b) `bootctl`
c) `mokutil`
d) `sbsign`

<details>
<summary>Respuesta</summary>

**c) `mokutil`**

`mokutil` es la herramienta para gestionar las Machine Owner Keys (MOK) en sistemas con Secure Boot. Permite verificar el estado de Secure Boot (`mokutil --sb-state`), listar claves enrolladas (`mokutil --list-enrolled`) e importar nuevas claves (`mokutil --import`). Las MOK permiten que los usuarios agreguen sus propias claves de confianza sin necesidad de modificar las claves del firmware UEFI.
</details>

---

### Pregunta 14

¿Cual es la directiva en la configuracion de SYSLINUX que define el tiempo de espera antes de arrancar la opcion por defecto, expresada en decimas de segundo?

a) `WAIT`
b) `DELAY`
c) `TIMEOUT`
d) `TIMER`

<details>
<summary>Respuesta</summary>

**c) `TIMEOUT`**

La directiva `TIMEOUT` en la configuracion de SYSLINUX/ISOLINUX/PXELINUX define el tiempo de espera en **decimas de segundo** antes de arrancar automaticamente la entrada por defecto. Por ejemplo, `TIMEOUT 50` equivale a 5 segundos. Si se establece en 0, el sistema espera indefinidamente la interaccion del usuario. La directiva `PROMPT 1` debe estar activa para que el timeout funcione correctamente.
</details>

---

### Pregunta 15

¿Cual de los siguientes cargadores de arranque esta diseñado principalmente para sistemas embebidos con arquitectura ARM?

a) GRUB 2
b) systemd-boot
c) U-Boot
d) SYSLINUX

<details>
<summary>Respuesta</summary>

**c) U-Boot**

U-Boot (Universal Boot Loader) es el cargador de arranque estandar para sistemas embebidos, especialmente en arquitecturas ARM, MIPS y PowerPC. Se usa ampliamente en routers, dispositivos IoT y placas de desarrollo como Raspberry Pi y BeagleBone. A diferencia de GRUB 2 y systemd-boot que estan orientados a escritorio/servidor x86, U-Boot esta optimizado para hardware con recursos limitados.
</details>

---

### Pregunta 16

Un administrador quiere cambiar el orden de arranque en un sistema UEFI para que la entrada 0002 arranque primero, seguida de 0001 y 0003. ¿Que comando debe usar?

a) `efibootmgr -o 0001,0002,0003`
b) `efibootmgr -n 0002`
c) `efibootmgr -o 0002,0001,0003`
d) `bootctl set-default 0002`

<details>
<summary>Respuesta</summary>

**c) `efibootmgr -o 0002,0001,0003`**

La opcion `-o` de `efibootmgr` establece el orden de arranque completo en la NVRAM UEFI. Se listan los numeros de las entradas separados por comas en el orden deseado. La opcion `-n` solo establece el proximo arranque (una sola vez), sin cambiar el orden permanente. `bootctl` gestiona systemd-boot, no las entradas UEFI de la NVRAM directamente.
</details>

---

### Pregunta 17

En la cadena de confianza de Secure Boot, ¿que base de datos contiene las firmas digitales revocadas?

a) db
b) dbx
c) PK
d) KEK

<details>
<summary>Respuesta</summary>

**b) dbx**

En Secure Boot, `dbx` es la base de datos de firmas revocadas (blacklist). Contiene los hashes y certificados que han sido revocados y que no deben permitirse durante el arranque. La base de datos `db` contiene las firmas permitidas (whitelist). La PK (Platform Key) es la clave raiz del propietario de la plataforma, y la KEK (Key Exchange Key) autoriza las actualizaciones de db y dbx.
</details>

---

### Pregunta 18

¿Que archivo de texto plano puede usarse en U-Boot como alternativa al script de arranque compilado `boot.scr`?

a) `/boot/grub.cfg`
b) `/boot/uEnv.txt`
c) `/boot/boot.conf`
d) `/boot/uboot.cfg`

<details>
<summary>Respuesta</summary>

**b) `/boot/uEnv.txt`**

`/boot/uEnv.txt` es un archivo de texto plano que contiene variables de entorno de U-Boot. Es una alternativa mas sencilla al script compilado `boot.scr`, ya que no requiere compilacion y se puede editar directamente. Contiene variables como `bootargs`, `bootcmd` y `loadaddr` en formato `variable=valor`. U-Boot lee este archivo automaticamente durante el proceso de arranque.
</details>

---

### Pregunta 19

¿Cual de los siguientes cargadores de arranque NO soporta el arranque en sistemas BIOS/MBR?

a) GRUB 2
b) SYSLINUX
c) systemd-boot
d) U-Boot

<details>
<summary>Respuesta</summary>

**c) systemd-boot**

systemd-boot (anteriormente gummiboot) es un cargador de arranque exclusivamente UEFI. No tiene soporte para el arranque BIOS/MBR. Solo puede leer la ESP (EFI System Partition) con formato FAT. GRUB 2 y SYSLINUX soportan tanto BIOS como UEFI, y U-Boot depende de la plataforma pero generalmente soporta arranque sin UEFI.
</details>

---

### Pregunta 20

En un entorno PXE, un cliente con IP 192.168.1.100 busca su configuracion. ¿Cual es la representacion hexadecimal de esta IP que PXELINUX buscara?

a) `C0A80164`
b) `c0a80164`
c) `192A8164`
d) `C0A80165`

<details>
<summary>Respuesta</summary>

**a) `C0A80164`**

La IP 192.168.1.100 se convierte a hexadecimal componente por componente: 192=C0, 168=A8, 1=01, 100=64, resultando en `C0A80164` (en mayusculas). PXELINUX busca este archivo en el directorio `pxelinux.cfg/` y, si no lo encuentra, va eliminando digitos desde la derecha: `C0A8016`, `C0A801`, etc., hasta llegar al archivo `default`.
</details>

---

### Pregunta 21

¿Que comando se utiliza para instalar systemd-boot en la particion ESP de un sistema UEFI?

<input type="text" class="fill-blank" data-answer="bootctl install" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**bootctl install**

El comando `bootctl install` instala los archivos de systemd-boot en la ESP (EFI System Partition). Copia el cargador EFI y crea la estructura de directorios necesaria en `/boot/loader/`. Despues de la instalacion, se deben crear las entradas de arranque como archivos `.conf` en `/boot/loader/entries/`.
</details>

---

### Pregunta 22

¿Que comando se utiliza para verificar si Secure Boot esta habilitado en el sistema?

<input type="text" class="fill-blank" data-answer="mokutil --sb-state" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**mokutil --sb-state**

El comando `mokutil --sb-state` muestra el estado actual de Secure Boot, indicando si esta habilitado o deshabilitado. Es la forma estandar de verificar el estado de Secure Boot desde el sistema operativo Linux. Mostrara "SecureBoot enabled" o "SecureBoot disabled" segun la configuracion del firmware UEFI.
</details>

---

### Pregunta 23

¿Que comando se usa para instalar SYSLINUX en una particion FAT ubicada en `/dev/sdb1`?

<input type="text" class="fill-blank" data-answer="syslinux --install /dev/sdb1" data-alt="syslinux -i /dev/sdb1" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**syslinux --install /dev/sdb1**

El comando `syslinux --install /dev/sdb1` instala el cargador de arranque SYSLINUX en la particion FAT especificada. Tambien se puede usar la forma abreviada `syslinux -i /dev/sdb1`. Tras la instalacion, se debe crear el archivo de configuracion `syslinux.cfg` en la raiz de la particion con las entradas de arranque deseadas.
</details>

---

### Pregunta 24

¿Que comando muestra las entradas de arranque UEFI almacenadas en la NVRAM con informacion detallada?

<input type="text" class="fill-blank" data-answer="efibootmgr -v" data-alt="efibootmgr --verbose" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**efibootmgr -v**

El comando `efibootmgr -v` (o `efibootmgr --verbose`) muestra todas las entradas de arranque UEFI almacenadas en la NVRAM del firmware con informacion detallada, incluyendo la ruta completa del cargador EFI, el dispositivo y las opciones de cada entrada. Sin la opcion `-v`, solo se muestra una lista resumida de las entradas.
</details>

---

### Pregunta 25

¿Que comando de U-Boot muestra todas las variables de entorno configuradas actualmente?

<input type="text" class="fill-blank" data-answer="printenv" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**printenv**

En la consola interactiva de U-Boot, el comando `printenv` muestra todas las variables de entorno configuradas, incluyendo `bootargs`, `bootcmd`, `loadaddr` y otras. Las variables se pueden modificar con `setenv` y guardar permanentemente con `saveenv`. Es una herramienta fundamental para diagnosticar y configurar el proceso de arranque en sistemas embebidos.
</details>
