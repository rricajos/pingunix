---
title: "202.2 - Recuperacion del sistema"
tags: [lpic-2, examen-201, tema-202, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "202"
subtema: "202.2"
---

# 202.2 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un sistema Linux no puede arrancar debido a un archivo `/etc/fstab` corrupto. ¿Cual es la mejor opcion para acceder al sistema y repararlo?

a) Arrancar con `systemd.unit=rescue.target`
b) Arrancar con `systemd.unit=emergency.target`
c) Arrancar con `init=/sbin/reboot`
d) Reinstalar el sistema operativo

<details>
<summary>Respuesta</summary>

**b) Arrancar con `systemd.unit=emergency.target`**

El modo emergencia es la opcion correcta porque no intenta montar los sistemas de archivos listados en `/etc/fstab`. El modo rescate (`rescue.target`) si intenta montar los sistemas de archivos de fstab, por lo que fallaria si fstab esta corrupto. Una vez en modo emergencia, se puede remontar la raiz en lectura/escritura con `mount -o remount,rw /` y corregir el archivo fstab.
</details>

---

### Pregunta 2

Despues de arrancar con `init=/bin/bash`, un administrador intenta editar un archivo de configuracion pero recibe un error de "Read-only file system". ¿Que debe hacer?

a) Ejecutar `fsck /`
b) Ejecutar `mount -o remount,rw /`
c) Ejecutar `chmod 777 /`
d) Reiniciar y arrancar con `rw` como parametro del kernel

<details>
<summary>Respuesta</summary>

**b) Ejecutar `mount -o remount,rw /`**

Cuando se arranca con `init=/bin/bash`, el sistema de archivos raiz se monta en modo solo lectura por defecto (por el parametro `ro` en la linea del kernel). Para poder modificar archivos, es necesario remontar la raiz en modo lectura/escritura con `mount -o remount,rw /`. La opcion d) tambien funcionaria pero no es la solucion mas practica ya que implica reiniciar.
</details>

---

### Pregunta 3

¿Cuales son los sistemas de archivos virtuales que DEBEN montarse antes de ejecutar `chroot` para que herramientas como `grub-install` funcionen correctamente?

a) `/tmp`, `/var`, `/home`
b) `/dev`, `/proc`, `/sys`
c) `/boot`, `/etc`, `/usr`
d) `/run`, `/tmp`, `/opt`

<details>
<summary>Respuesta</summary>

**b) `/dev`, `/proc`, `/sys`**

Los sistemas de archivos virtuales `/dev` (dispositivos), `/proc` (informacion del kernel y procesos) y `/sys` (informacion del hardware y kernel) son esenciales para que muchas herramientas del sistema funcionen correctamente dentro del entorno chroot. Sin ellos, comandos como `grub-install`, `mount` y otros no podran interactuar con el hardware ni con el kernel. Tambien es recomendable montar `/dev/pts` y `/run`.
</details>

---

### Pregunta 4

Un administrador quiere respaldar solo el codigo del bootloader del MBR sin incluir la tabla de particiones. ¿Que comando dd es correcto?

a) `dd if=/dev/sda of=mbr.img bs=512 count=1`
b) `dd if=/dev/sda of=bootloader.img bs=446 count=1`
c) `dd if=/dev/sda of=bootloader.img bs=64 count=1`
d) `dd if=/dev/sda of=mbr.img bs=510 count=1`

<details>
<summary>Respuesta</summary>

**b) `dd if=/dev/sda of=bootloader.img bs=446 count=1`**

El codigo del bootloader ocupa los primeros 446 bytes del MBR. Los siguientes 64 bytes contienen la tabla de particiones, y los ultimos 2 bytes son la firma de arranque (0x55AA). Al usar `bs=446 count=1`, se copian exactamente los 446 bytes del bootloader sin tocar la tabla de particiones. La opcion a) copia los 512 bytes completos del MBR, incluyendo la tabla de particiones.
</details>

---

### Pregunta 5

En la shell de rescate de GRUB (`grub rescue>`), ¿cual es la secuencia correcta de comandos para arrancar manualmente?

a) `boot`, `linux /vmlinuz`, `initrd /initrd.img`
b) `set root=(hd0,1)`, `insmod normal`, `normal`
c) `mount /dev/sda1`, `chroot /mnt`, `grub-install`
d) `fsck /dev/sda1`, `reboot`

<details>
<summary>Respuesta</summary>

**b) `set root=(hd0,1)`, `insmod normal`, `normal`**

En la shell de rescate de GRUB, primero se debe establecer la particion raiz correcta con `set root=`, luego cargar el modulo `normal` con `insmod normal`, y finalmente ejecutar `normal` para cargar el menu completo de GRUB. Desde la shell de rescate, los comandos `linux` e `initrd` no estan disponibles hasta que se carga el modulo normal. Las opciones c) y d) son comandos de Linux, no de GRUB.
</details>

---

### Pregunta 6

¿Cual es el comando correcto para reinstalar GRUB en un sistema UEFI despues de hacer chroot desde un Live CD?

a) `grub-install /dev/sda`
b) `grub-install --target=x86_64-efi --efi-directory=/boot/efi`
c) `grub-install --force /dev/sda1`
d) `dd if=grub.img of=/dev/sda bs=512 count=1`

<details>
<summary>Respuesta</summary>

**b) `grub-install --target=x86_64-efi --efi-directory=/boot/efi`**

En sistemas UEFI, `grub-install` necesita los parametros `--target=x86_64-efi` para especificar la plataforma y `--efi-directory` para indicar donde esta montada la particion EFI (normalmente `/boot/efi`). La opcion a) es para sistemas BIOS/MBR. La opcion d) no tiene sentido para UEFI ya que no utiliza MBR.
</details>

---

### Pregunta 7

Un administrador necesita ejecutar `fsck` en la particion raiz (`/`) de un sistema en ejecucion. ¿Cual es el procedimiento correcto?

a) Ejecutar `fsck /` directamente
b) Ejecutar `fsck -f /dev/sda1` con el sistema en ejecucion
c) Arrancar en modo emergencia y ejecutar `fsck /dev/sda1` con la raiz montada en solo lectura
d) No es posible ejecutar fsck en la particion raiz

<details>
<summary>Respuesta</summary>

**c) Arrancar en modo emergencia y ejecutar `fsck /dev/sda1` con la raiz montada en solo lectura**

Nunca se debe ejecutar `fsck` en un sistema de archivos montado en modo lectura/escritura, ya que puede causar corrupcion severa de datos. El procedimiento correcto es arrancar en modo emergencia (donde la raiz se monta en solo lectura) o desde un Live CD (donde la particion no esta montada). Tambien se puede usar `touch /forcefsck` para que fsck se ejecute automaticamente en el proximo arranque.
</details>

---

### Pregunta 8

Despues de realizar reparaciones dentro de un entorno chroot con `init=/bin/bash`, ¿cual es la forma mas segura de reiniciar el sistema?

a) Ejecutar `reboot`
b) Ejecutar `shutdown -r now`
c) Ejecutar `sync` y luego `echo b > /proc/sysrq-trigger`
d) Desconectar la alimentacion electrica

<details>
<summary>Respuesta</summary>

**c) Ejecutar `sync` y luego `echo b > /proc/sysrq-trigger`**

Cuando se arranca con `init=/bin/bash`, los comandos `reboot` y `shutdown` normalmente no funcionan porque no hay un sistema init en ejecucion que gestione el apagado. El procedimiento seguro es: primero ejecutar `sync` para asegurar que todos los datos en buffer se escriban al disco, luego remontar en solo lectura con `mount -o remount,ro /`, y finalmente forzar el reinicio mediante la interfaz SysRq con `echo b > /proc/sysrq-trigger`. Tambien se puede intentar `exec /sbin/init` para iniciar el sistema normalmente.
</details>

---

### Pregunta 9

¿Que comando permite desmontar recursivamente todos los sistemas de archivos montados bajo `/mnt` despues de salir de un entorno chroot?

a) `umount /mnt`
b) `umount -a /mnt`
c) `umount -R /mnt`
d) `umount --force /mnt`

<details>
<summary>Respuesta</summary>

**c) `umount -R /mnt`**

La opcion `-R` (o `--recursive`) de `umount` desmonta recursivamente todos los sistemas de archivos montados bajo el punto de montaje especificado. Esto es especialmente util despues de un chroot, donde se han montado `/dev`, `/proc`, `/sys` y otros bajo `/mnt`. La opcion `-a` desmontaria todos los sistemas de archivos del sistema (peligroso), y `umount /mnt` solo desmontaria el punto de montaje principal si no hay otros montados debajo.
</details>

---

### Pregunta 10

Un administrador arranca en modo emergencia y ejecuta `blkid`. La salida muestra que la particion raiz tiene UUID `a1b2c3d4-e5f6-7890-abcd-ef1234567890`. ¿Cual seria la linea correcta en `/etc/fstab` para esta particion raiz ext4?

a) `/dev/sda1  /  ext4  defaults  0  0`
b) `UUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890  /  ext4  defaults  1  1`
c) `LABEL=root  /  ext4  rw  1  1`
d) `a1b2c3d4-e5f6-7890-abcd-ef1234567890  /  ext4  defaults  1  1`

<details>
<summary>Respuesta</summary>

**b) `UUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890  /  ext4  defaults  1  1`**

La forma recomendada de identificar particiones en fstab es mediante UUID, ya que los nombres de dispositivo (`/dev/sdX`) pueden cambiar entre arranques. El formato correcto incluye el prefijo `UUID=`, el punto de montaje `/`, el tipo de sistema de archivos `ext4`, las opciones `defaults`, `1` para dump (respaldo), y `1` para pass (orden de fsck, donde 1 indica la raiz). La opcion d) es incorrecta porque falta el prefijo `UUID=`.
</details>

---

### Pregunta 11

Un administrador arranca desde un Live CD y necesita reinstalar GRUB en un sistema BIOS/MBR. Despues de montar el sistema en `/mnt` y hacer chroot, ¿que secuencia de comandos es la correcta?

a) `grub-mkconfig -o /boot/grub/grub.cfg` y luego `grub-install /dev/sda`
b) `grub-install /dev/sda` y luego `grub-mkconfig -o /boot/grub/grub.cfg`
c) Solo `grub-install /dev/sda1`
d) Solo `grub-mkconfig -o /boot/grub/grub.cfg`

<details><summary>Respuesta</summary>

**b) `grub-install /dev/sda` y luego `grub-mkconfig -o /boot/grub/grub.cfg`**

El orden correcto es primero instalar los archivos de GRUB en el MBR del disco con `grub-install /dev/sda` (disco completo, no particion), y luego regenerar la configuracion con `grub-mkconfig`. Es importante instalar en el disco (`/dev/sda`) y no en una particion (`/dev/sda1`). La regeneracion de la configuracion despues garantiza que las entradas del menu esten actualizadas.

</details>

---

### Pregunta 12

¿Que herramienta de reparacion de sistemas de archivos se utiliza especificamente para particiones XFS?

a) `fsck.xfs`
b) `xfs_repair`
c) `e2fsck`
d) `xfs_check`

<details><summary>Respuesta</summary>

**b) `xfs_repair`**

`xfs_repair` es la herramienta especifica para reparar sistemas de archivos XFS. A diferencia de `fsck` para ext4, `xfs_repair` debe ejecutarse en particiones completamente desmontadas (no funciona en modo solo lectura). `fsck.xfs` existe pero en muchas distribuciones solo muestra un mensaje indicando que se use `xfs_repair`. `e2fsck` es para ext2/ext3/ext4. `xfs_check` es obsoleto.

</details>

---

### Pregunta 13

Un administrador necesita forzar la ejecucion de `fsck` en la particion raiz en el proximo arranque del sistema. ¿Cual de los siguientes metodos es valido?

a) Ejecutar `fsck --on-next-boot /dev/sda1`
b) Crear el archivo `/forcefsck` con `touch /forcefsck`
c) Editar `/etc/fstab` y cambiar el valor de pass a 0
d) Ejecutar `systemctl enable fsck.service`

<details><summary>Respuesta</summary>

**b) Crear el archivo `/forcefsck` con `touch /forcefsck`**

Crear un archivo vacio llamado `/forcefsck` en la raiz del sistema de archivos indica al proceso de arranque que debe ejecutar una verificacion `fsck` completa antes de montar el sistema. El archivo se elimina automaticamente despues de la verificacion. Alternativas incluyen usar el parametro del kernel `fsck.mode=force` o manipular el contador de montajes con `tune2fs -C`.

</details>

---

### Pregunta 14

En la estructura del MBR, ¿cuantos bytes ocupa la tabla de particiones y en que offset comienza?

a) 64 bytes, offset 446
b) 446 bytes, offset 0
c) 2 bytes, offset 510
d) 512 bytes, offset 0

<details><summary>Respuesta</summary>

**a) 64 bytes, offset 446**

El MBR de 512 bytes se divide en tres secciones: el codigo del bootloader ocupa los primeros 446 bytes (offset 0-445), la tabla de particiones ocupa 64 bytes (offset 446-509, con espacio para 4 entradas de 16 bytes cada una), y la firma de arranque 0x55AA ocupa los ultimos 2 bytes (offset 510-511). Conocer esta estructura es fundamental para operaciones de respaldo con `dd`.

</details>

---

### Pregunta 15

Un administrador intenta arrancar en modo rescate con `systemd.unit=rescue.target` pero el sistema falla porque una particion en `/etc/fstab` no existe. ¿Cual es el siguiente paso de recuperacion?

a) Reinstalar el sistema operativo
b) Arrancar con `systemd.unit=emergency.target` que no intenta montar las particiones de fstab
c) Arrancar con `systemd.unit=graphical.target`
d) Desconectar el disco duro y conectarlo a otro sistema

<details><summary>Respuesta</summary>

**b) Arrancar con `systemd.unit=emergency.target` que no intenta montar las particiones de fstab**

El `rescue.target` intenta montar todos los sistemas de archivos listados en `/etc/fstab`, por lo que falla si alguna entrada es invalida. El `emergency.target` es mas basico: solo monta el sistema de archivos raiz en modo solo lectura y no intenta montar otras particiones. Desde ahi, el administrador puede remontar raiz como lectura/escritura y corregir `/etc/fstab`.

</details>

---

### Pregunta 16

¿Que comando permite identificar los UUIDs de todas las particiones del sistema, informacion esencial al reparar `/etc/fstab`?

a) `fdisk -l`
b) `blkid`
c) `lsblk`
d) Todas las anteriores proporcionan UUIDs

<details><summary>Respuesta</summary>

**b) `blkid`**

`blkid` es la herramienta especifica para mostrar los atributos de dispositivos de bloque, incluyendo UUID, tipo de sistema de archivos y etiqueta (LABEL). Aunque `lsblk -f` tambien muestra UUIDs, `blkid` es la herramienta dedicada para esta tarea. `fdisk -l` muestra la tabla de particiones pero no los UUIDs. La opcion d) es incorrecta porque `fdisk -l` no muestra UUIDs.

</details>

---

### Pregunta 17

Despues de realizar cambios en un entorno chroot arrancado con `init=/bin/bash`, el administrador quiere asegurarse de que todos los datos en buffer se escriban al disco antes de reiniciar. ¿Que comando debe ejecutar?

a) `flush`
b) `sync`
c) `commit`
d) `fsync`

<details><summary>Respuesta</summary>

**b) `sync`**

El comando `sync` fuerza la escritura de todos los datos almacenados en los buffers del sistema de archivos al disco fisico. Es esencial ejecutarlo antes de reiniciar un sistema arrancado con `init=/bin/bash`, donde no hay un proceso init que gestione el apagado limpio. El procedimiento seguro es: `sync`, luego `mount -o remount,ro /`, y finalmente reiniciar con `echo b > /proc/sysrq-trigger`.

</details>

---

### Pregunta 18

¿Que opcion de `fsck` permite verificar un sistema de archivos sin realizar ninguna reparacion?

a) `fsck -y`
b) `fsck -n`
c) `fsck -f`
d) `fsck -a`

<details><summary>Respuesta</summary>

**b) `fsck -n`**

La opcion `-n` de `fsck` ejecuta la verificacion en modo solo lectura, respondiendo "no" automaticamente a todas las preguntas de reparacion. Es util para evaluar el estado de un sistema de archivos sin hacer cambios. `-y` responde "si" a todas las reparaciones, `-f` fuerza la verificacion incluso si el sistema parece limpio, y `-a` repara automaticamente los problemas que puede resolver de forma segura.

</details>

---

### Pregunta 19

Un administrador clona un disco duro completo a otro utilizando `dd`. ¿Que problema potencial puede surgir si ambos discos se conectan al mismo sistema simultaneamente?

a) Los discos se fusionaran en un solo volumen
b) Las particiones tendran los mismos UUIDs, causando conflictos de montaje
c) El disco clonado no sera reconocido por el BIOS
d) No habra ningun problema, ambos discos funcionaran independientemente

<details><summary>Respuesta</summary>

**b) Las particiones tendran los mismos UUIDs, causando conflictos de montaje**

Al clonar un disco con `dd`, se copia una replica exacta byte a byte, incluyendo los UUIDs de las particiones. Si ambos discos se conectan al sistema, `/etc/fstab` y otros mecanismos que identifican particiones por UUID tendran ambigueedad sobre cual disco montar. Para resolver esto, se deben generar nuevos UUIDs en el disco clonado con `tune2fs -U random /dev/sdXN`.

</details>

---

### Pregunta 20

¿Que secuencia de comandos de GRUB permite arrancar manualmente desde la shell normal de GRUB (`grub>`) cuando se conoce que la particion raiz esta en `(hd0,msdos1)` y el kernel esta en `/boot/vmlinuz`?

a) `set root=(hd0,msdos1)` --> `linux /boot/vmlinuz root=/dev/sda1 ro` --> `initrd /boot/initrd.img` --> `boot`
b) `mount (hd0,msdos1)` --> `exec /boot/vmlinuz` --> `reboot`
c) `load kernel /boot/vmlinuz` --> `start`
d) `insmod normal` --> `normal`

<details><summary>Respuesta</summary>

**a) `set root=(hd0,msdos1)` --> `linux /boot/vmlinuz root=/dev/sda1 ro` --> `initrd /boot/initrd.img` --> `boot`**

Desde la shell normal de GRUB, la secuencia es: establecer la particion con `set root=`, cargar el kernel con `linux` especificando la raiz del sistema y opciones, cargar el initramfs con `initrd`, y finalmente arrancar con `boot`. La opcion d) solo funciona desde la shell de rescate (`grub rescue>`) y carga el menu normal en lugar de arrancar directamente.

</details>

---

### Pregunta 21

¿Que comando remonta el sistema de archivos raiz en modo lectura/escritura cuando se ha arrancado con `init=/bin/bash`?

<input type="text" class="fill-blank" data-answer="mount -o remount,rw /" data-alt="mount -o rw,remount /" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -o remount,rw /**

Cuando se arranca con `init=/bin/bash`, el sistema de archivos raiz se monta en modo solo lectura (`ro`). Para poder modificar archivos de configuracion o restablecer contrasenas, es necesario remontarlo en modo lectura/escritura con `mount -o remount,rw /`. La opcion `remount` permite cambiar las opciones de montaje sin desmontar el sistema de archivos.

</details>

---

### Pregunta 22

¿Que comando respalda el MBR completo (512 bytes) del disco `/dev/sda` a un archivo llamado `mbr_backup.img`?

<input type="text" class="fill-blank" data-answer="dd if=/dev/sda of=mbr_backup.img bs=512 count=1" data-alt="dd if=/dev/sda of=/backup/mbr_backup.img bs=512 count=1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dd if=/dev/sda of=mbr_backup.img bs=512 count=1**

El comando `dd` con `if=/dev/sda` (input file) lee del disco, `of=mbr_backup.img` (output file) escribe al archivo de respaldo, `bs=512` establece el tamano de bloque en 512 bytes, y `count=1` lee un solo bloque. Esto captura los 512 bytes completos del MBR: bootloader (446 bytes), tabla de particiones (64 bytes) y firma (2 bytes).

</details>

---

### Pregunta 23

¿Que comando entra en un entorno chroot usando `/mnt` como nuevo directorio raiz con `/bin/bash` como shell?

<input type="text" class="fill-blank" data-answer="chroot /mnt /bin/bash" data-alt="chroot /mnt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chroot /mnt /bin/bash**

El comando `chroot /mnt /bin/bash` cambia el directorio raiz aparente a `/mnt` y ejecuta `/bin/bash` como shell dentro de ese entorno. Previamente, se deben montar los sistemas de archivos virtuales (`/dev`, `/proc`, `/sys`) bajo `/mnt` con `mount --bind` para que las herramientas del sistema funcionen correctamente dentro del chroot.

</details>

---

### Pregunta 24

¿Que comando ejecuta una verificacion y reparacion automatica del sistema de archivos ext4 en `/dev/sda2` respondiendo "si" a todas las preguntas?

<input type="text" class="fill-blank" data-answer="fsck -y /dev/sda2" data-alt="fsck.ext4 -y /dev/sda2,e2fsck -y /dev/sda2" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**fsck -y /dev/sda2**

La opcion `-y` de `fsck` responde automaticamente "si" a todas las preguntas de reparacion, lo que es util en scripts o cuando se esta seguro de que se quieren aplicar todas las correcciones. Es fundamental que la particion este desmontada o montada en solo lectura antes de ejecutar `fsck`. Nunca se debe ejecutar en un sistema de archivos montado en modo lectura/escritura.

</details>

---

### Pregunta 25

¿Que comando monta el sistema de archivos del dispositivo `/dev/sda1` en el directorio `/mnt/boot` para preparar un entorno de recuperacion?

<input type="text" class="fill-blank" data-answer="mount /dev/sda1 /mnt/boot" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount /dev/sda1 /mnt/boot**

El comando `mount /dev/sda1 /mnt/boot` monta la particion `/dev/sda1` en el punto de montaje `/mnt/boot`. Esto es parte del proceso de preparacion de un entorno de recuperacion desde un Live CD, donde primero se monta la particion raiz en `/mnt`, luego la particion de arranque en `/mnt/boot`, y posteriormente los sistemas de archivos virtuales antes de ejecutar `chroot /mnt`.

</details>
