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

> 25 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: Si el sistema no puede arrancar ni siquiera en modo rescate (por ejemplo, un `/e...

</div>
<div class="flashcard-back">

**R:** Si el sistema no puede arrancar ni siquiera en modo rescate (por ejemplo, un `/etc/fstab` corrupto), el modo emergencia es la opcion correcta porque no intenta montar los sistemas de archivos de fstab.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-012">
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

<div class="flashcard" data-id="202.2-fc-013">
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

<div class="flashcard" data-id="202.2-fc-014">
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

<div class="flashcard" data-id="202.2-fc-015">
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

<div class="flashcard" data-id="202.2-fc-016">
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

<div class="flashcard" data-id="202.2-fc-017">
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

<div class="flashcard" data-id="202.2-fc-018">
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

<div class="flashcard" data-id="202.2-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `emergency.target`?

</div>
<div class="flashcard-back">

**R:** Modo emergencia minimo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `chroot /mnt`?

</div>
<div class="flashcard-back">

**R:** Entrar en el sistema montado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-021">
<div class="flashcard-front">

**P:** Que hace el comando `fsck /dev/sdX`?

</div>
<div class="flashcard-back">

**R:** Reparar sistema de archivos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-022">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** La recuperacion del sistema es una de las habilidades mas criticas para un administrador Linux. Este subtema cubre las tecnicas necesarias para diagnosticar y reparar sistemas que no arrancan correctam

</div>
</div>

---

<div class="flashcard-deck" data-subtema="202.2">
</div>

<div class="flashcard" data-id="202.2-fc-023">
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

<div class="flashcard" data-id="202.2-fc-024">
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

<div class="flashcard" data-id="202.2-fc-025">
<div class="flashcard-front">

**P:** Que es/son Resumen de archivos y comandos clave?

</div>
<div class="flashcard-back">

**R:** | Recurso | Funcion en recuperacion |

</div>
</div>

---

