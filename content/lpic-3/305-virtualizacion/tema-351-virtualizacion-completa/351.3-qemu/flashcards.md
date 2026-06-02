---
title: "351.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.3"
---

# Flashcards: 351.3 - Qemu

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué opción de qemu-system-x86_64 activa la aceleración por hardware KVM?

</div>
<div class="flashcard-back">

**R:** c) `-enable-kvm`. La opción `-enable-kvm` (o `-accel kvm`) activa la aceleración KVM, permitiendo que QEMU use las extensiones de virtualización del procesador (VT-x/AMD-V) para ejecutar código nativo en lugar de emular.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando crea una imagen de disco qcow2 de 20GB?

</div>
<div class="flashcard-back">

**R:** b) `qemu-img create -f qcow2 disco.qcow2 20G`. `qemu-img create` es el subcomando para crear imágenes. `-f qcow2` especifica el formato. El tamaño 20G es el tamaño máximo virtual (con thin provisioning en qcow2, el archivo físico será mucho menor inicialmente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué formato de imagen de disco NO soporta snapshots internos?

</div>
<div class="flashcard-back">

**R:** b) raw. El formato raw no soporta snapshots, compresión, cifrado ni backing files. Es el formato más simple y de mejor rendimiento puro, pero carece de funcionalidades avanzadas. Solo qcow2 soporta snapshots internos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando convierte una imagen de formato raw a qcow2 con compresión?

</div>
<div class="flashcard-back">

**R:** a) `qemu-img convert -c -f raw -O qcow2 disco.raw disco.qcow2`. `-c` activa la compresión, `-f raw` indica el formato de origen, `-O qcow2` el formato de destino. La compresión reduce el tamaño del archivo pero puede impactar el rendimiento de lectura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando del QEMU Monitor crea un snapshot completo del estado de la VM (incluyendo memoria)?

</div>
<div class="flashcard-back">

**R:** b) `savevm mi-snap`. En el QEMU Monitor, `savevm` crea un snapshot completo que incluye disco, memoria RAM y estado de dispositivos. `loadvm` restaura el snapshot. Esto solo funciona con imágenes qcow2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué es un backing file en el contexto de imágenes qcow2?

</div>
<div class="flashcard-back">

**R:** b) Una imagen base de solo lectura sobre la que se registran solo los cambios (copy-on-write). Los backing files implementan copy-on-write: la imagen nueva solo almacena los bloques que difieren de la base. Esto permite crear múltiples VMs derivadas de una imagen base compartida de forma muy eficiente en espacio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-007">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre VNC y SPICE para acceso remoto a VMs?

</div>
<div class="flashcard-back">

**R:** b) SPICE ofrece mejor rendimiento de escritorio, audio y soporte USB remoto. SPICE está optimizado para entornos de escritorio con soporte nativo para audio, redirección USB, copiar/pegar bidireccional y ajuste dinámico de resolución. VNC es más universal pero más básico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué opción permite iniciar una VM QEMU sin interfaz gráfica, redirigiendo la salida a la consola serial?

</div>
<div class="flashcard-back">

**R:** b) `-nographic`. `-nographic` desactiva la salida gráfica y redirige la consola serial y el monitor QEMU a la terminal. El guest debe estar configurado con `console=ttyS0` en los parámetros del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la cadena completa de backing files de una imagen qcow2?

</div>
<div class="flashcard-back">

**R:** b) `qemu-img info --backing-chain disco.qcow2`. `--backing-chain` muestra la información de la imagen y de todos sus backing files encadenados, desde la imagen actual hasta la imagen base original. Sin esta opción, solo muestra el backing file inmediato.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué interfaz de disco virtual ofrece el mejor rendimiento con drivers paravirtualizados en QEMU/KVM?

</div>
<div class="flashcard-back">

**R:** d) virtio. Los dispositivos virtio son drivers paravirtualizados que comunican directamente con el hipervisor sin emular hardware real. Se especifican con `-drive file=disco.qcow2,if=virtio` y ofrecen significativamente mejor rendimiento que IDE, SCSI o SATA emulados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de qemu-img aumenta el tamaño de una imagen de disco en 10GB?

</div>
<div class="flashcard-back">

**R:** b) `qemu-img resize disco.qcow2 +10G`. `qemu-img resize` con el prefijo `+` aumenta el tamaño en la cantidad indicada. Sin prefijo establece un tamaño absoluto. Para reducir se usa el prefijo `-` junto con la opción `--shrink`. Solo modifica el tamaño virtual; el sistema de archivos debe redimensionarse desde dentro del guest.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué opción de qemu-system-x86_64 expone las características reales de la CPU del host a la VM?

</div>
<div class="flashcard-back">

**R:** b) `-cpu host`. La opción `-cpu host` pasa las características exactas de la CPU física del host a la VM, incluyendo todas las flags e instrucciones soportadas. Esto es necesario para aplicaciones que requieren instrucciones específicas (como AES-NI o AVX) y también es un requisito para la migración en vivo entre hosts idénticos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando del QEMU Monitor pausa la ejecución de la máquina virtual?

</div>
<div class="flashcard-back">

**R:** b) `stop`. En el QEMU Monitor, el comando `stop` pausa la ejecución de la VM (congela la CPU virtual). Para reanudarla se usa `cont` (continue). `system_powerdown` envía una señal ACPI de apagado, `system_reset` reinicia la VM, y `quit` cierra QEMU completamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué formato de imagen de disco soporta cifrado LUKS nativo en QEMU?

</div>
<div class="flashcard-back">

**R:** c) qcow2. El formato qcow2 soporta cifrado LUKS nativo, permitiendo cifrar el contenido de la imagen de disco. Además de cifrado, qcow2 es el único formato que soporta thin provisioning, snapshots internos, compresión y backing files. Los formatos raw, vmdk y vdi no soportan cifrado nativo en QEMU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción de qemu-system-x86_64 configura la red en modo usuario (NAT) sin necesidad de configuración adicional en el host?

</div>
<div class="flashcard-back">

**R:** b) `-net nic -net user`. El modo de red de usuario (`-net user`) implementa un stack TCP/IP en espacio de usuario con NAT integrado. No requiere privilegios de root ni configuración de bridge en el host. Es ideal para pruebas simples pero tiene limitaciones: no permite conexiones entrantes (sin port forwarding) y tiene menor rendimiento que TAP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué opción de QEMU redirige la consola serial y el monitor a la terminal actual sin interfaz gráfica?

</div>
<div class="flashcard-back">

**R:** b) `-nographic`. La opción `-nographic` desactiva toda la salida gráfica y redirige la consola serial y el monitor QEMU a la terminal (stdio). Es esencial para ejecutar VMs en servidores sin entorno gráfico. El guest debe tener configurado `console=ttyS0` en los parámetros del kernel para que la salida sea visible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-017">
<div class="flashcard-front">

**P:** ¿Qué sucede al ejecutar `qemu-img snapshot -a snap1 disco.qcow2`?

</div>
<div class="flashcard-back">

**R:** c) Revierte la imagen al estado del snapshot snap1. La opción `-a` (apply) de `qemu-img snapshot` revierte la imagen al estado guardado en el snapshot especificado. `-c` crea un snapshot, `-d` elimina un snapshot y `-l` lista todos los snapshots. Esta operación debe realizarse con la VM apagada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué opción de QEMU define el orden de arranque de la VM, indicando que debe iniciar desde el CD-ROM?

</div>
<div class="flashcard-back">

**R:** b) `-boot d`. La opción `-boot d` establece el CD-ROM como dispositivo de arranque. `c` indica disco duro, `d` indica CD-ROM y `n` indica arranque por red (PXE). Se puede especificar un orden combinado como `-boot cd` para intentar disco primero y luego CD-ROM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué tipo de snapshot en QEMU crea un nuevo archivo qcow2 que usa la imagen original como backing file de solo lectura?

</div>
<div class="flashcard-back">

**R:** b) Snapshot externo. Los snapshots externos crean un nuevo archivo qcow2 con la imagen original como backing file (solo lectura). Solo se almacenan los bloques que cambian (copy-on-write). Los snapshots internos se almacenan dentro del mismo archivo qcow2. Los externos son más eficientes para workflows de ramificación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué protocolo ofrece mejor rendimiento para escritorio remoto de VMs QEMU/KVM, incluyendo audio, USB remoto y copiar/pegar bidireccional?

</div>
<div class="flashcard-back">

**R:** c) SPICE. SPICE (Simple Protocol for Independent Computing Environments) está optimizado para entornos de escritorio virtualizados. Soporta audio bidireccional, redirección USB, copiar/pegar entre host y guest, ajuste dinámico de resolución y múltiples monitores. VNC es más universal pero ofrece funcionalidad más básica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando lista los snapshots internos de una imagen de disco qcow2?

</div>
<div class="flashcard-back">

**R:** qemu-img snapshot -l disco.qcow2. La opción `-l` (list) de `qemu-img snapshot` muestra todos los snapshots internos almacenados en la imagen qcow2, incluyendo su nombre (TAG), ID, tamaño del estado de la VM y fecha de creación. Solo funciona con imágenes en formato qcow2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando convierte una imagen qcow2 a formato vmdk (VMware)?

</div>
<div class="flashcard-back">

**R:** qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk. `qemu-img convert` permite convertir entre diferentes formatos de imagen de disco. `-f` especifica el formato de origen y `-O` (mayúscula) el formato de destino. QEMU soporta conversión entre qcow2, raw, vmdk, vdi, vhd y otros formatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la información detallada (formato, tamaño real, tamaño virtual, backing file) de una imagen de disco?

</div>
<div class="flashcard-back">

**R:** qemu-img info disco.qcow2. `qemu-img info` muestra metadatos de la imagen incluyendo: formato (qcow2, raw, etc.), tamaño virtual, tamaño real en disco (espacio utilizado), cluster size, referencia al backing file si existe, y si tiene cifrado o compresión habilitados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando crea una imagen qcow2 derivada de una imagen base usando copy-on-write (backing file)?

</div>
<div class="flashcard-back">

**R:** qemu-img create -f qcow2 -b base.qcow2 -F qcow2 snapshot.qcow2. La opción `-b` especifica el backing file (imagen base) y `-F` indica el formato del backing file. La nueva imagen solo almacena los bloques que difieren de la base, implementando copy-on-write. Es útil para crear múltiples VMs derivadas de una imagen base común.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando ejecuta una VM QEMU/KVM con 2GB de RAM, 2 CPUs y aceleración por hardware habilitada?

</div>
<div class="flashcard-back">

**R:** qemu-system-x86_64 -enable-kvm -m 2048 -smp 2. `-enable-kvm` activa la aceleración KVM, `-m 2048` asigna 2048 MB de RAM y `-smp 2` configura 2 CPUs virtuales. Estas son las opciones fundamentales para ejecutar una VM con buen rendimiento. Sin `-enable-kvm`, QEMU funciona en modo emulación pura, mucho más lento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La opción `-enable-kvm` o `-accel kvm` activa la aceleración KVM. Sin ella, QEMU...

</div>
<div class="flashcard-back">

**R:** La opción `-enable-kvm` o `-accel kvm` activa la aceleración KVM. Sin ella, QEMU funciona en modo emulación pura, mucho más lento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Los snapshots internos solo están soportados en formato qcow2. Las imágenes raw ...

</div>
<div class="flashcard-back">

**R:** Los snapshots internos solo están soportados en formato qcow2. Las imágenes raw no soportan snapshots.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Los snapshots externos usan copy-on-write: solo almacenan los bloques que han ca...

</div>
<div class="flashcard-back">

**R:** Los snapshots externos usan copy-on-write: solo almacenan los bloques que han cambiado respecto al backing file. Son más eficientes para workflows de ramificación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: SPICE ofrece mejor rendimiento para entornos de escritorio que VNC, soportando a...

</div>
<div class="flashcard-back">

**R:** SPICE ofrece mejor rendimiento para entornos de escritorio que VNC, soportando audio, USB remoto y copiar/pegar bidireccional. VNC es más universal y simple.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `-cpu host`?

</div>
<div class="flashcard-back">

**R:** Exponer las características reales de la CPU

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `-boot <orden>`?

</div>
<div class="flashcard-back">

**R:** Orden de arranque: c=disco, d=cdrom, n=red

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `-nographic`?

</div>
<div class="flashcard-back">

**R:** Sin interfaz gráfica (solo consola serial)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `.qcow2`?

</div>
<div class="flashcard-back">

**R:** Nativo QEMU, thin provisioning, snapshots, compresión, cifrado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `info block`?

</div>
<div class="flashcard-back">

**R:** Información de dispositivos de bloque

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** QEMU (Quick Emulator) es un emulador y virtualizador genérico de código abierto. Puede funcionar como emulador puro (traduciendo instrucciones por software) o como virtualizador en combinación con KVM,

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son qemu-system-x86_64?

</div>
<div class="flashcard-back">

**R:** Comando principal para ejecutar máquinas virtuales x86_64:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Formatos de Imagen?

</div>
<div class="flashcard-back">

**R:** | Formato | Extensión | Características |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.3">
</div>

<div class="flashcard" data-id="351.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son QEMU Monitor?

</div>
<div class="flashcard-back">

**R:** Interfaz interactiva de control de QEMU accesible durante la ejecución:

</div>
</div>

---

