---
title: "202.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "202.2"
---

# Flashcards: 202.2 - Recuperacion Del Sistema

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-001">
<div class="flashcard-front">

**P:** Un sistema Linux no puede arrancar debido a un archivo `/etc/fstab` corrupto. ¿Cual es la mejor opcion para acceder al sistema y repararlo?

</div>
<div class="flashcard-back">

**R:** b) Arrancar con `systemd.unit=emergency.target`. El modo emergencia es la opcion correcta porque no intenta montar los sistemas de archivos listados en `/etc/fstab`. El modo rescate (`rescue.target`) si intenta montar los sistemas de archivos de fstab, por lo que fallaria si fstab esta corrupto. Una vez en modo emergencia, se puede remontar la raiz en lectura/escritura con `mount -o remount,rw /` y corregir el archivo fstab.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-002">
<div class="flashcard-front">

**P:** Despues de arrancar con `init=/bin/bash`, un administrador intenta editar un archivo de configuracion pero recibe un error de "Read-only file system". ¿Que debe hacer?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar `mount -o remount,rw /`. Cuando se arranca con `init=/bin/bash`, el sistema de archivos raiz se monta en modo solo lectura por defecto (por el parametro `ro` en la linea del kernel). Para poder modificar archivos, es necesario remontar la raiz en modo lectura/escritura con `mount -o remount,rw /`. La opcion d) tambien funcionaria pero no es la solucion mas practica ya que implica reiniciar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-003">
<div class="flashcard-front">

**P:** ¿Cuales son los sistemas de archivos virtuales que DEBEN montarse antes de ejecutar `chroot` para que herramientas como `grub-install` funcionen correctamente?

</div>
<div class="flashcard-back">

**R:** b) `/dev`, `/proc`, `/sys`. Los sistemas de archivos virtuales `/dev` (dispositivos), `/proc` (informacion del kernel y procesos) y `/sys` (informacion del hardware y kernel) son esenciales para que muchas herramientas del sistema funcionen correctamente dentro del entorno chroot. Sin ellos, comandos como `grub-install`, `mount` y otros no podran interactuar con el hardware ni con el kernel. Tambien es recomendable montar `/dev/pts` y `/run`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-004">
<div class="flashcard-front">

**P:** Un administrador quiere respaldar solo el codigo del bootloader del MBR sin incluir la tabla de particiones. ¿Que comando dd es correcto?

</div>
<div class="flashcard-back">

**R:** b) `dd if=/dev/sda of=bootloader.img bs=446 count=1`. El codigo del bootloader ocupa los primeros 446 bytes del MBR. Los siguientes 64 bytes contienen la tabla de particiones, y los ultimos 2 bytes son la firma de arranque (0x55AA). Al usar `bs=446 count=1`, se copian exactamente los 446 bytes del bootloader sin tocar la tabla de particiones. La opcion a) copia los 512 bytes completos del MBR, incluyendo la tabla de particiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-005">
<div class="flashcard-front">

**P:** En la shell de rescate de GRUB (`grub rescue>`), ¿cual es la secuencia correcta de comandos para arrancar manualmente?

</div>
<div class="flashcard-back">

**R:** b) `set root=(hd0,1)`, `insmod normal`, `normal`. En la shell de rescate de GRUB, primero se debe establecer la particion raiz correcta con `set root=`, luego cargar el modulo `normal` con `insmod normal`, y finalmente ejecutar `normal` para cargar el menu completo de GRUB. Desde la shell de rescate, los comandos `linux` e `initrd` no estan disponibles hasta que se carga el modulo normal. Las opciones c) y d) son comandos de Linux, no de GRUB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-006">
<div class="flashcard-front">

**P:** ¿Cual es el comando correcto para reinstalar GRUB en un sistema UEFI despues de hacer chroot desde un Live CD?

</div>
<div class="flashcard-back">

**R:** b) `grub-install --target=x86_64-efi --efi-directory=/boot/efi`. En sistemas UEFI, `grub-install` necesita los parametros `--target=x86_64-efi` para especificar la plataforma y `--efi-directory` para indicar donde esta montada la particion EFI (normalmente `/boot/efi`). La opcion a) es para sistemas BIOS/MBR. La opcion d) no tiene sentido para UEFI ya que no utiliza MBR.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-007">
<div class="flashcard-front">

**P:** Un administrador necesita ejecutar `fsck` en la particion raiz (`/`) de un sistema en ejecucion. ¿Cual es el procedimiento correcto?

</div>
<div class="flashcard-back">

**R:** c) Arrancar en modo emergencia y ejecutar `fsck /dev/sda1` con la raiz montada en solo lectura. Nunca se debe ejecutar `fsck` en un sistema de archivos montado en modo lectura/escritura, ya que puede causar corrupcion severa de datos. El procedimiento correcto es arrancar en modo emergencia (donde la raiz se monta en solo lectura) o desde un Live CD (donde la particion no esta montada). Tambien se puede usar `touch /forcefsck` para que fsck se ejecute automaticamente en el proximo arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-008">
<div class="flashcard-front">

**P:** Despues de realizar reparaciones dentro de un entorno chroot con `init=/bin/bash`, ¿cual es la forma mas segura de reiniciar el sistema?

</div>
<div class="flashcard-back">

**R:** c) Ejecutar `sync` y luego `echo b > /proc/sysrq-trigger`. Cuando se arranca con `init=/bin/bash`, los comandos `reboot` y `shutdown` normalmente no funcionan porque no hay un sistema init en ejecucion que gestione el apagado. El procedimiento seguro es: primero ejecutar `sync` para asegurar que todos los datos en buffer se escriban al disco, luego remontar en solo lectura con `mount -o remount,ro /`, y finalmente forzar el reinicio mediante la interfaz SysRq con `echo b > /proc/sysrq-trigger`. Tambien se puede intentar `exec /sbin/init` para iniciar el sistema normalmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando permite desmontar recursivamente todos los sistemas de archivos montados bajo `/mnt` despues de salir de un entorno chroot?

</div>
<div class="flashcard-back">

**R:** c) `umount -R /mnt`. La opcion `-R` (o `--recursive`) de `umount` desmonta recursivamente todos los sistemas de archivos montados bajo el punto de montaje especificado. Esto es especialmente util despues de un chroot, donde se han montado `/dev`, `/proc`, `/sys` y otros bajo `/mnt`. La opcion `-a` desmontaria todos los sistemas de archivos del sistema (peligroso), y `umount /mnt` solo desmontaria el punto de montaje principal si no hay otros montados debajo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-010">
<div class="flashcard-front">

**P:** Un administrador arranca en modo emergencia y ejecuta `blkid`. La salida muestra que la particion raiz tiene UUID `a1b2c3d4-e5f6-7890-abcd-ef1234567890`. ¿Cual seria la linea correcta en `/etc/fstab` para esta particion raiz ext4?

</div>
<div class="flashcard-back">

**R:** b) `UUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890  /  ext4  defaults  1  1`. La forma recomendada de identificar particiones en fstab es mediante UUID, ya que los nombres de dispositivo (`/dev/sdX`) pueden cambiar entre arranques. El formato correcto incluye el prefijo `UUID=`, el punto de montaje `/`, el tipo de sistema de archivos `ext4`, las opciones `defaults`, `1` para dump (respaldo), y `1` para pass (orden de fsck, donde 1 indica la raiz). La opcion d) es incorrecta porque falta el prefijo `UUID=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-011">
<div class="flashcard-front">

**P:** Un administrador arranca desde un Live CD y necesita reinstalar GRUB en un sistema BIOS/MBR. Despues de montar el sistema en `/mnt` y hacer chroot, ¿que secuencia de comandos es la correcta?

</div>
<div class="flashcard-back">

**R:** b) `grub-install /dev/sda` y luego `grub-mkconfig -o /boot/grub/grub.cfg`. El orden correcto es primero instalar los archivos de GRUB en el MBR del disco con `grub-install /dev/sda` (disco completo, no particion), y luego regenerar la configuracion con `grub-mkconfig`. Es importante instalar en el disco (`/dev/sda`) y no en una particion (`/dev/sda1`). La regeneracion de la configuracion despues garantiza que las entradas del menu esten actualizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que herramienta de reparacion de sistemas de archivos se utiliza especificamente para particiones XFS?

</div>
<div class="flashcard-back">

**R:** b) `xfs_repair`. `xfs_repair` es la herramienta especifica para reparar sistemas de archivos XFS. A diferencia de `fsck` para ext4, `xfs_repair` debe ejecutarse en particiones completamente desmontadas (no funciona en modo solo lectura). `fsck.xfs` existe pero en muchas distribuciones solo muestra un mensaje indicando que se use `xfs_repair`. `e2fsck` es para ext2/ext3/ext4. `xfs_check` es obsoleto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-013">
<div class="flashcard-front">

**P:** Un administrador necesita forzar la ejecucion de `fsck` en la particion raiz en el proximo arranque del sistema. ¿Cual de los siguientes metodos es valido?

</div>
<div class="flashcard-back">

**R:** b) Crear el archivo `/forcefsck` con `touch /forcefsck`. Crear un archivo vacio llamado `/forcefsck` en la raiz del sistema de archivos indica al proceso de arranque que debe ejecutar una verificacion `fsck` completa antes de montar el sistema. El archivo se elimina automaticamente despues de la verificacion. Alternativas incluyen usar el parametro del kernel `fsck.mode=force` o manipular el contador de montajes con `tune2fs -C`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-014">
<div class="flashcard-front">

**P:** En la estructura del MBR, ¿cuantos bytes ocupa la tabla de particiones y en que offset comienza?

</div>
<div class="flashcard-back">

**R:** a) 64 bytes, offset 446. El MBR de 512 bytes se divide en tres secciones: el codigo del bootloader ocupa los primeros 446 bytes (offset 0-445), la tabla de particiones ocupa 64 bytes (offset 446-509, con espacio para 4 entradas de 16 bytes cada una), y la firma de arranque 0x55AA ocupa los ultimos 2 bytes (offset 510-511). Conocer esta estructura es fundamental para operaciones de respaldo con `dd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-015">
<div class="flashcard-front">

**P:** Un administrador intenta arrancar en modo rescate con `systemd.unit=rescue.target` pero el sistema falla porque una particion en `/etc/fstab` no existe. ¿Cual es el siguiente paso de recuperacion?

</div>
<div class="flashcard-back">

**R:** b) Arrancar con `systemd.unit=emergency.target` que no intenta montar las particiones de fstab. El `rescue.target` intenta montar todos los sistemas de archivos listados en `/etc/fstab`, por lo que falla si alguna entrada es invalida. El `emergency.target` es mas basico: solo monta el sistema de archivos raiz en modo solo lectura y no intenta montar otras particiones. Desde ahi, el administrador puede remontar raiz como lectura/escritura y corregir `/etc/fstab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando permite identificar los UUIDs de todas las particiones del sistema, informacion esencial al reparar `/etc/fstab`?

</div>
<div class="flashcard-back">

**R:** b) `blkid`. `blkid` es la herramienta especifica para mostrar los atributos de dispositivos de bloque, incluyendo UUID, tipo de sistema de archivos y etiqueta (LABEL). Aunque `lsblk -f` tambien muestra UUIDs, `blkid` es la herramienta dedicada para esta tarea. `fdisk -l` muestra la tabla de particiones pero no los UUIDs. La opcion d) es incorrecta porque `fdisk -l` no muestra UUIDs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-017">
<div class="flashcard-front">

**P:** Despues de realizar cambios en un entorno chroot arrancado con `init=/bin/bash`, el administrador quiere asegurarse de que todos los datos en buffer se escriban al disco antes de reiniciar. ¿Que comando debe ejecutar?

</div>
<div class="flashcard-back">

**R:** b) `sync`. El comando `sync` fuerza la escritura de todos los datos almacenados en los buffers del sistema de archivos al disco fisico. Es esencial ejecutarlo antes de reiniciar un sistema arrancado con `init=/bin/bash`, donde no hay un proceso init que gestione el apagado limpio. El procedimiento seguro es: `sync`, luego `mount -o remount,ro /`, y finalmente reiniciar con `echo b > /proc/sysrq-trigger`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-018">
<div class="flashcard-front">

**P:** ¿Que opcion de `fsck` permite verificar un sistema de archivos sin realizar ninguna reparacion?

</div>
<div class="flashcard-back">

**R:** b) `fsck -n`. La opcion `-n` de `fsck` ejecuta la verificacion en modo solo lectura, respondiendo "no" automaticamente a todas las preguntas de reparacion. Es util para evaluar el estado de un sistema de archivos sin hacer cambios. `-y` responde "si" a todas las reparaciones, `-f` fuerza la verificacion incluso si el sistema parece limpio, y `-a` repara automaticamente los problemas que puede resolver de forma segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-019">
<div class="flashcard-front">

**P:** Un administrador clona un disco duro completo a otro utilizando `dd`. ¿Que problema potencial puede surgir si ambos discos se conectan al mismo sistema simultaneamente?

</div>
<div class="flashcard-back">

**R:** b) Las particiones tendran los mismos UUIDs, causando conflictos de montaje. Al clonar un disco con `dd`, se copia una replica exacta byte a byte, incluyendo los UUIDs de las particiones. Si ambos discos se conectan al sistema, `/etc/fstab` y otros mecanismos que identifican particiones por UUID tendran ambigueedad sobre cual disco montar. Para resolver esto, se deben generar nuevos UUIDs en el disco clonado con `tune2fs -U random /dev/sdXN`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que secuencia de comandos de GRUB permite arrancar manualmente desde la shell normal de GRUB (`grub>`) cuando se conoce que la particion raiz esta en `(hd0,msdos1)` y el kernel esta en `/boot/vmlinuz`?

</div>
<div class="flashcard-back">

**R:** a) `set root=(hd0,msdos1)` --> `linux /boot/vmlinuz root=/dev/sda1 ro` --> `initrd /boot/initrd.img` --> `boot`. Desde la shell normal de GRUB, la secuencia es: establecer la particion con `set root=`, cargar el kernel con `linux` especificando la raiz del sistema y opciones, cargar el initramfs con `initrd`, y finalmente arrancar con `boot`. La opcion d) solo funciona desde la shell de rescate (`grub rescue>`) y carga el menu normal en lugar de arrancar directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando remonta el sistema de archivos raiz en modo lectura/escritura cuando se ha arrancado con `init=/bin/bash`?

</div>
<div class="flashcard-back">

**R:** mount -o remount,rw /. Cuando se arranca con `init=/bin/bash`, el sistema de archivos raiz se monta en modo solo lectura (`ro`). Para poder modificar archivos de configuracion o restablecer contrasenas, es necesario remontarlo en modo lectura/escritura con `mount -o remount,rw /`. La opcion `remount` permite cambiar las opciones de montaje sin desmontar el sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando respalda el MBR completo (512 bytes) del disco `/dev/sda` a un archivo llamado `mbr_backup.img`?

</div>
<div class="flashcard-back">

**R:** dd if=/dev/sda of=mbr_backup.img bs=512 count=1. El comando `dd` con `if=/dev/sda` (input file) lee del disco, `of=mbr_backup.img` (output file) escribe al archivo de respaldo, `bs=512` establece el tamano de bloque en 512 bytes, y `count=1` lee un solo bloque. Esto captura los 512 bytes completos del MBR: bootloader (446 bytes), tabla de particiones (64 bytes) y firma (2 bytes).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando entra en un entorno chroot usando `/mnt` como nuevo directorio raiz con `/bin/bash` como shell?

</div>
<div class="flashcard-back">

**R:** chroot /mnt /bin/bash. El comando `chroot /mnt /bin/bash` cambia el directorio raiz aparente a `/mnt` y ejecuta `/bin/bash` como shell dentro de ese entorno. Previamente, se deben montar los sistemas de archivos virtuales (`/dev`, `/proc`, `/sys`) bajo `/mnt` con `mount --bind` para que las herramientas del sistema funcionen correctamente dentro del chroot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando ejecuta una verificacion y reparacion automatica del sistema de archivos ext4 en `/dev/sda2` respondiendo "si" a todas las preguntas?

</div>
<div class="flashcard-back">

**R:** fsck -y /dev/sda2. La opcion `-y` de `fsck` responde automaticamente "si" a todas las preguntas de reparacion, lo que es util en scripts o cuando se esta seguro de que se quieren aplicar todas las correcciones. Es fundamental que la particion este desmontada o montada en solo lectura antes de ejecutar `fsck`. Nunca se debe ejecutar en un sistema de archivos montado en modo lectura/escritura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando monta el sistema de archivos del dispositivo `/dev/sda1` en el directorio `/mnt/boot` para preparar un entorno de recuperacion?

</div>
<div class="flashcard-back">

**R:** mount /dev/sda1 /mnt/boot. El comando `mount /dev/sda1 /mnt/boot` monta la particion `/dev/sda1` en el punto de montaje `/mnt/boot`. Esto es parte del proceso de preparacion de un entorno de recuperacion desde un Live CD, donde primero se monta la particion raiz en `/mnt`, luego la particion de arranque en `/mnt/boot`, y posteriormente los sistemas de archivos virtuales antes de ejecutar `chroot /mnt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Si el sistema no puede arrancar ni siquiera en modo rescate (por ejemplo, un `/e...

</div>
<div class="flashcard-back">

**R:** Si el sistema no puede arrancar ni siquiera en modo rescate (por ejemplo, un `/etc/fstab` corrupto), el modo emergencia es la opcion correcta porque no intenta montar los sistemas de archivos de fstab.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Cuando se arranca con `init=/bin/bash`, el sistema de archivos raiz se monta en ...

</div>
<div class="flashcard-back">

**R:** Cuando se arranca con `init=/bin/bash`, el sistema de archivos raiz se monta en **solo lectura**. Es necesario remontarlo con `mount -o remount,rw /` antes de poder hacer cambios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Es fundamental montar `/dev`, `/proc` y `/sys` antes de hacer chroot. Sin estos ...

</div>
<div class="flashcard-back">

**R:** Es fundamental montar `/dev`, `/proc` y `/sys` antes de hacer chroot. Sin estos sistemas de archivos virtuales, muchos comandos (como `grub-install`) no funcionaran correctamente dentro del entorno chroot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: NUNCA ejecutar `fsck` en un sistema de archivos montado en modo lectura/escritur...

</div>
<div class="flashcard-back">

**R:** NUNCA ejecutar `fsck` en un sistema de archivos montado en modo lectura/escritura. Esto puede causar corrupcion de datos severa. Si es necesario reparar la particion raiz, arrancar en modo emergencia o desde un Live CD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Si fstab tiene errores, arrancar con `systemd.unit=emergency.target` es la opcio...

</div>
<div class="flashcard-back">

**R:** Si fstab tiene errores, arrancar con `systemd.unit=emergency.target` es la opcion mas segura porque no intenta montar las entradas de fstab. El modo rescate si intenta montarlas y podria fallar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Al restaurar el MBR, es importante saber la diferencia entre restaurar los 512 b...

</div>
<div class="flashcard-back">

**R:** Al restaurar el MBR, es importante saber la diferencia entre restaurar los 512 bytes completos (que incluye la tabla de particiones) y restaurar solo los primeros 446 bytes (solo el bootloader). Restaurar los 512 bytes en un disco con tabla de particiones diferente destruira la tabla actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `init=/bin/bash`?

</div>
<div class="flashcard-back">

**R:** Arranque sin init, shell directa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `rescue.target`?

</div>
<div class="flashcard-back">

**R:** Modo rescate con servicios basicos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `dd if= of= bs=`?

</div>
<div class="flashcard-back">

**R:** Copiar/respaldar sectores de disco

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `mount -o remount,rw /`?

</div>
<div class="flashcard-back">

**R:** Remontar raiz en lectura/escritura

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `blkid`?

</div>
<div class="flashcard-back">

**R:** Identificar particiones y UUIDs

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Recuperacion de /etc/fstab?

</div>
<div class="flashcard-back">

**R:** Un archivo `/etc/fstab` corrupto o incorrecto puede impedir el arranque del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son Procedimiento completo de recuperacion?

</div>
<div class="flashcard-back">

**R:** Resumen del flujo de trabajo tipico de recuperacion:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-039">
<div class="flashcard-front">

**P:** Que es/son Resumen de archivos y comandos clave?

</div>
<div class="flashcard-back">

**R:** | Recurso | Funcion en recuperacion |

</div>
</div>

---

