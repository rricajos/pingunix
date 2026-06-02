---
title: "351.3 - Ejercicios: QEMU"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "351 - Virtualización Completa"
subtema: "351.3"
peso: 4
tags:
  - lpic-3
  - tema-351
  - ejercicios
  - qemu
  - qemu-img
---

# Ejercicios - 351.3 QEMU

### Pregunta 1
¿Qué opción de qemu-system-x86_64 activa la aceleración por hardware KVM?

a) `-kvm`
b) `-accel hardware`
c) `-enable-kvm`
d) `-use-kvm`

<details><summary>Respuesta</summary>

**c) `-enable-kvm`**

La opción `-enable-kvm` (o `-accel kvm`) activa la aceleración KVM, permitiendo que QEMU use las extensiones de virtualización del procesador (VT-x/AMD-V) para ejecutar código nativo en lugar de emular.
</details>

### Pregunta 2
¿Qué comando crea una imagen de disco qcow2 de 20GB?

a) `qemu-img new -f qcow2 disco.qcow2 20G`
b) `qemu-img create -f qcow2 disco.qcow2 20G`
c) `qemu-img make -t qcow2 disco.qcow2 20G`
d) `qemu-img init -format qcow2 disco.qcow2 20G`

<details><summary>Respuesta</summary>

**b) `qemu-img create -f qcow2 disco.qcow2 20G`**

`qemu-img create` es el subcomando para crear imágenes. `-f qcow2` especifica el formato. El tamaño 20G es el tamaño máximo virtual (con thin provisioning en qcow2, el archivo físico será mucho menor inicialmente).
</details>

### Pregunta 3
¿Qué formato de imagen de disco NO soporta snapshots internos?

a) qcow2
b) raw
c) Ambos los soportan
d) Ninguno los soporta

<details><summary>Respuesta</summary>

**b) raw**

El formato raw no soporta snapshots, compresión, cifrado ni backing files. Es el formato más simple y de mejor rendimiento puro, pero carece de funcionalidades avanzadas. Solo qcow2 soporta snapshots internos.
</details>

### Pregunta 4
¿Qué comando convierte una imagen de formato raw a qcow2 con compresión?

a) `qemu-img convert -c -f raw -O qcow2 disco.raw disco.qcow2`
b) `qemu-img compress -f raw -O qcow2 disco.raw disco.qcow2`
c) `qemu-img convert --compress raw:disco.raw qcow2:disco.qcow2`
d) `qemu-img transform -c -i disco.raw -o disco.qcow2`

<details><summary>Respuesta</summary>

**a) `qemu-img convert -c -f raw -O qcow2 disco.raw disco.qcow2`**

`-c` activa la compresión, `-f raw` indica el formato de origen, `-O qcow2` el formato de destino. La compresión reduce el tamaño del archivo pero puede impactar el rendimiento de lectura.
</details>

### Pregunta 5
¿Qué comando del QEMU Monitor crea un snapshot completo del estado de la VM (incluyendo memoria)?

a) `snapshot create`
b) `savevm mi-snap`
c) `create-snapshot mi-snap`
d) `snap -c mi-snap`

<details><summary>Respuesta</summary>

**b) `savevm mi-snap`**

En el QEMU Monitor, `savevm` crea un snapshot completo que incluye disco, memoria RAM y estado de dispositivos. `loadvm` restaura el snapshot. Esto solo funciona con imágenes qcow2.
</details>

### Pregunta 6
¿Qué es un backing file en el contexto de imágenes qcow2?

a) Una copia de seguridad automática de la imagen
b) Una imagen base de solo lectura sobre la que se registran solo los cambios (copy-on-write)
c) Un archivo de metadatos que describe la imagen
d) Un archivo de log de cambios realizados en la imagen

<details><summary>Respuesta</summary>

**b) Una imagen base de solo lectura sobre la que se registran solo los cambios (copy-on-write)**

Los backing files implementan copy-on-write: la imagen nueva solo almacena los bloques que difieren de la base. Esto permite crear múltiples VMs derivadas de una imagen base compartida de forma muy eficiente en espacio.
</details>

### Pregunta 7
¿Cuál es la diferencia principal entre VNC y SPICE para acceso remoto a VMs?

a) VNC soporta audio y USB remoto, SPICE no
b) SPICE ofrece mejor rendimiento de escritorio, audio y soporte USB remoto
c) VNC es más rápido que SPICE en todos los escenarios
d) SPICE solo funciona sin KVM

<details><summary>Respuesta</summary>

**b) SPICE ofrece mejor rendimiento de escritorio, audio y soporte USB remoto**

SPICE está optimizado para entornos de escritorio con soporte nativo para audio, redirección USB, copiar/pegar bidireccional y ajuste dinámico de resolución. VNC es más universal pero más básico.
</details>

### Pregunta 8
¿Qué opción permite iniciar una VM QEMU sin interfaz gráfica, redirigiendo la salida a la consola serial?

a) `-display none`
b) `-nographic`
c) `-headless`
d) `-no-gui`

<details><summary>Respuesta</summary>

**b) `-nographic`**

`-nographic` desactiva la salida gráfica y redirige la consola serial y el monitor QEMU a la terminal. El guest debe estar configurado con `console=ttyS0` en los parámetros del kernel.
</details>

### Pregunta 9
¿Qué comando muestra la cadena completa de backing files de una imagen qcow2?

a) `qemu-img info disco.qcow2`
b) `qemu-img info --backing-chain disco.qcow2`
c) `qemu-img chain disco.qcow2`
d) `qemu-img check --chain disco.qcow2`

<details><summary>Respuesta</summary>

**b) `qemu-img info --backing-chain disco.qcow2`**

`--backing-chain` muestra la información de la imagen y de todos sus backing files encadenados, desde la imagen actual hasta la imagen base original. Sin esta opción, solo muestra el backing file inmediato.
</details>

### Pregunta 10
¿Qué interfaz de disco virtual ofrece el mejor rendimiento con drivers paravirtualizados en QEMU/KVM?

a) IDE
b) SCSI
c) SATA
d) virtio

<details><summary>Respuesta</summary>

**d) virtio**

Los dispositivos virtio son drivers paravirtualizados que comunican directamente con el hipervisor sin emular hardware real. Se especifican con `-drive file=disco.qcow2,if=virtio` y ofrecen significativamente mejor rendimiento que IDE, SCSI o SATA emulados.
</details>

### Pregunta 11

¿Qué comando de qemu-img aumenta el tamaño de una imagen de disco en 10GB?

a) `qemu-img grow disco.qcow2 10G`
b) `qemu-img resize disco.qcow2 +10G`
c) `qemu-img extend disco.qcow2 10G`
d) `qemu-img resize --grow disco.qcow2 10G`

<details><summary>Respuesta</summary>

**b) `qemu-img resize disco.qcow2 +10G`**

`qemu-img resize` con el prefijo `+` aumenta el tamaño en la cantidad indicada. Sin prefijo establece un tamaño absoluto. Para reducir se usa el prefijo `-` junto con la opción `--shrink`. Solo modifica el tamaño virtual; el sistema de archivos debe redimensionarse desde dentro del guest.
</details>

### Pregunta 12

¿Qué opción de qemu-system-x86_64 expone las características reales de la CPU del host a la VM?

a) `-cpu native`
b) `-cpu host`
c) `-cpu real`
d) `-cpu passthrough`

<details><summary>Respuesta</summary>

**b) `-cpu host`**

La opción `-cpu host` pasa las características exactas de la CPU física del host a la VM, incluyendo todas las flags e instrucciones soportadas. Esto es necesario para aplicaciones que requieren instrucciones específicas (como AES-NI o AVX) y también es un requisito para la migración en vivo entre hosts idénticos.
</details>

### Pregunta 13

¿Qué comando del QEMU Monitor pausa la ejecución de la máquina virtual?

a) `pause`
b) `stop`
c) `suspend`
d) `freeze`

<details><summary>Respuesta</summary>

**b) `stop`**

En el QEMU Monitor, el comando `stop` pausa la ejecución de la VM (congela la CPU virtual). Para reanudarla se usa `cont` (continue). `system_powerdown` envía una señal ACPI de apagado, `system_reset` reinicia la VM, y `quit` cierra QEMU completamente.
</details>

### Pregunta 14

¿Qué formato de imagen de disco soporta cifrado LUKS nativo en QEMU?

a) raw
b) vmdk
c) qcow2
d) vdi

<details><summary>Respuesta</summary>

**c) qcow2**

El formato qcow2 soporta cifrado LUKS nativo, permitiendo cifrar el contenido de la imagen de disco. Además de cifrado, qcow2 es el único formato que soporta thin provisioning, snapshots internos, compresión y backing files. Los formatos raw, vmdk y vdi no soportan cifrado nativo en QEMU.
</details>

### Pregunta 15

¿Qué opción de qemu-system-x86_64 configura la red en modo usuario (NAT) sin necesidad de configuración adicional en el host?

a) `-netdev bridge,id=net0`
b) `-net nic -net user`
c) `-netdev tap,id=net0`
d) `-net nic -net bridge`

<details><summary>Respuesta</summary>

**b) `-net nic -net user`**

El modo de red de usuario (`-net user`) implementa un stack TCP/IP en espacio de usuario con NAT integrado. No requiere privilegios de root ni configuración de bridge en el host. Es ideal para pruebas simples pero tiene limitaciones: no permite conexiones entrantes (sin port forwarding) y tiene menor rendimiento que TAP.
</details>

### Pregunta 16

¿Qué opción de QEMU redirige la consola serial y el monitor a la terminal actual sin interfaz gráfica?

a) `-display none -serial stdio`
b) `-nographic`
c) `-headless -console`
d) `-no-display`

<details><summary>Respuesta</summary>

**b) `-nographic`**

La opción `-nographic` desactiva toda la salida gráfica y redirige la consola serial y el monitor QEMU a la terminal (stdio). Es esencial para ejecutar VMs en servidores sin entorno gráfico. El guest debe tener configurado `console=ttyS0` en los parámetros del kernel para que la salida sea visible.
</details>

### Pregunta 17

¿Qué sucede al ejecutar `qemu-img snapshot -a snap1 disco.qcow2`?

a) Crea un nuevo snapshot llamado snap1
b) Elimina el snapshot snap1
c) Revierte la imagen al estado del snapshot snap1
d) Lista los detalles del snapshot snap1

<details><summary>Respuesta</summary>

**c) Revierte la imagen al estado del snapshot snap1**

La opción `-a` (apply) de `qemu-img snapshot` revierte la imagen al estado guardado en el snapshot especificado. `-c` crea un snapshot, `-d` elimina un snapshot y `-l` lista todos los snapshots. Esta operación debe realizarse con la VM apagada.
</details>

### Pregunta 18

¿Qué opción de QEMU define el orden de arranque de la VM, indicando que debe iniciar desde el CD-ROM?

a) `-boot cdrom`
b) `-boot d`
c) `-boot order=cd`
d) `-cdrom-boot`

<details><summary>Respuesta</summary>

**b) `-boot d`**

La opción `-boot d` establece el CD-ROM como dispositivo de arranque. `c` indica disco duro, `d` indica CD-ROM y `n` indica arranque por red (PXE). Se puede especificar un orden combinado como `-boot cd` para intentar disco primero y luego CD-ROM.
</details>

### Pregunta 19

¿Qué tipo de snapshot en QEMU crea un nuevo archivo qcow2 que usa la imagen original como backing file de solo lectura?

a) Snapshot interno
b) Snapshot externo
c) Snapshot de memoria
d) Snapshot incremental

<details><summary>Respuesta</summary>

**b) Snapshot externo**

Los snapshots externos crean un nuevo archivo qcow2 con la imagen original como backing file (solo lectura). Solo se almacenan los bloques que cambian (copy-on-write). Los snapshots internos se almacenan dentro del mismo archivo qcow2. Los externos son más eficientes para workflows de ramificación.
</details>

### Pregunta 20

¿Qué protocolo ofrece mejor rendimiento para escritorio remoto de VMs QEMU/KVM, incluyendo audio, USB remoto y copiar/pegar bidireccional?

a) VNC
b) RDP
c) SPICE
d) X11

<details><summary>Respuesta</summary>

**c) SPICE**

SPICE (Simple Protocol for Independent Computing Environments) está optimizado para entornos de escritorio virtualizados. Soporta audio bidireccional, redirección USB, copiar/pegar entre host y guest, ajuste dinámico de resolución y múltiples monitores. VNC es más universal pero ofrece funcionalidad más básica.
</details>

### Pregunta 21

¿Qué comando lista los snapshots internos de una imagen de disco qcow2?

<input type="text" class="fill-blank" data-answer="qemu-img snapshot -l disco.qcow2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img snapshot -l disco.qcow2**

La opción `-l` (list) de `qemu-img snapshot` muestra todos los snapshots internos almacenados en la imagen qcow2, incluyendo su nombre (TAG), ID, tamaño del estado de la VM y fecha de creación. Solo funciona con imágenes en formato qcow2.
</details>

### Pregunta 22

¿Qué comando convierte una imagen qcow2 a formato vmdk (VMware)?

<input type="text" class="fill-blank" data-answer="qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk**

`qemu-img convert` permite convertir entre diferentes formatos de imagen de disco. `-f` especifica el formato de origen y `-O` (mayúscula) el formato de destino. QEMU soporta conversión entre qcow2, raw, vmdk, vdi, vhd y otros formatos.
</details>

### Pregunta 23

¿Qué comando muestra la información detallada (formato, tamaño real, tamaño virtual, backing file) de una imagen de disco?

<input type="text" class="fill-blank" data-answer="qemu-img info disco.qcow2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img info disco.qcow2**

`qemu-img info` muestra metadatos de la imagen incluyendo: formato (qcow2, raw, etc.), tamaño virtual, tamaño real en disco (espacio utilizado), cluster size, referencia al backing file si existe, y si tiene cifrado o compresión habilitados.
</details>

### Pregunta 24

¿Qué comando crea una imagen qcow2 derivada de una imagen base usando copy-on-write (backing file)?

<input type="text" class="fill-blank" data-answer="qemu-img create -f qcow2 -b base.qcow2 -F qcow2 snapshot.qcow2" data-alt="qemu-img create -f qcow2 -b base.qcow2 snapshot.qcow2" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img create -f qcow2 -b base.qcow2 -F qcow2 snapshot.qcow2**

La opción `-b` especifica el backing file (imagen base) y `-F` indica el formato del backing file. La nueva imagen solo almacena los bloques que difieren de la base, implementando copy-on-write. Es útil para crear múltiples VMs derivadas de una imagen base común.
</details>

### Pregunta 25

¿Qué comando ejecuta una VM QEMU/KVM con 2GB de RAM, 2 CPUs y aceleración por hardware habilitada?

<input type="text" class="fill-blank" data-answer="qemu-system-x86_64 -enable-kvm -m 2048 -smp 2" data-alt="qemu-system-x86_64 -enable-kvm -m 2G -smp 2" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-system-x86_64 -enable-kvm -m 2048 -smp 2**

`-enable-kvm` activa la aceleración KVM, `-m 2048` asigna 2048 MB de RAM y `-smp 2` configura 2 CPUs virtuales. Estas son las opciones fundamentales para ejecutar una VM con buen rendimiento. Sin `-enable-kvm`, QEMU funciona en modo emulación pura, mucho más lento.
</details>
