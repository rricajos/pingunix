---
title: "351.5 - Ejercicios: Imágenes de Disco VM"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "351 - Virtualización Completa"
subtema: "351.5"
peso: 3
tags:
  - lpic-3
  - tema-351
  - ejercicios
  - imagenes
  - qcow2
  - libguestfs
---

# Ejercicios - 351.5 Imágenes de Disco VM

### Pregunta 1
¿Qué formato de imagen de disco ofrece thin provisioning, snapshots internos y compresión de forma nativa?

a) raw
b) vmdk
c) qcow2
d) vdi

<details><summary>Respuesta</summary>

**c) qcow2**

qcow2 (QEMU Copy-On-Write v2) es el formato nativo de QEMU/KVM que soporta thin provisioning, snapshots internos, compresión zlib, cifrado LUKS y backing files. Es el formato más versátil para entornos KVM.
</details>

### Pregunta 2
¿Qué sucede si se elimina el backing file de una imagen qcow2 que depende de él?

a) La imagen derivada sigue funcionando sin problemas
b) La imagen derivada se convierte automáticamente en imagen independiente
c) La imagen derivada queda corrupta e inutilizable
d) Se crea automáticamente una copia del backing file

<details><summary>Respuesta</summary>

**c) La imagen derivada queda corrupta e inutilizable**

Las imágenes con backing files dependen completamente de la imagen base. Si se elimina, modifica o mueve el backing file, todas las imágenes derivadas dejan de funcionar ya que solo contienen los bloques que difieren de la base.
</details>

### Pregunta 3
¿Qué herramienta permite reducir el tamaño físico de una imagen eliminando espacio no utilizado?

a) `qemu-img resize`
b) `virt-sparsify`
c) `virt-resize`
d) `qemu-img compress`

<details><summary>Respuesta</summary>

**b) `virt-sparsify`**

`virt-sparsify` rellena con ceros el espacio libre dentro del filesystem del guest y luego elimina esos bloques de ceros, reduciendo el tamaño real del archivo. `virt-resize` redimensiona particiones dentro de la imagen.
</details>

### Pregunta 4
¿Qué herramienta permite montar el filesystem de una imagen de disco directamente en el host sin arrancar la VM?

a) `mount -o loop`
b) `guestmount`
c) `virt-mount`
d) `qemu-mount`

<details><summary>Respuesta</summary>

**b) `guestmount`**

`guestmount -a disco.qcow2 -i /mnt/guest` monta el filesystem de la imagen usando libguestfs (a través de FUSE). La opción `-i` realiza la inspección automática del SO para montar los filesystems correctos. Se desmonta con `guestunmount`.
</details>

### Pregunta 5
¿Qué es un archivo OVA?

a) Un formato de imagen de disco de Oracle
b) Un archivo TAR que contiene archivos OVF (descriptor XML, imagen de disco y checksums)
c) Un archivo de configuración de OpenStack
d) Un formato de snapshot comprimido

<details><summary>Respuesta</summary>

**b) Un archivo TAR que contiene archivos OVF (descriptor XML, imagen de disco y checksums)**

OVA (Open Virtual Appliance) es un paquete TAR que contiene un archivo .ovf (descriptor XML), las imágenes de disco (.vmdk u otro formato) y un archivo .mf con checksums. Es el formato estándar para distribuir VMs entre hipervisores.
</details>

### Pregunta 6
¿Qué comando crea una imagen qcow2 derivada de un backing file existente?

a) `qemu-img create -f qcow2 -b base.qcow2 -F qcow2 overlay.qcow2`
b) `qemu-img clone base.qcow2 overlay.qcow2`
c) `qemu-img derive -b base.qcow2 overlay.qcow2`
d) `qemu-img snapshot -c overlay base.qcow2`

<details><summary>Respuesta</summary>

**a) `qemu-img create -f qcow2 -b base.qcow2 -F qcow2 overlay.qcow2`**

`-b` especifica el backing file y `-F` su formato. La imagen resultante (overlay) es de tipo copy-on-write: solo almacena los bloques que difieren de la base. No se especifica tamaño porque se hereda del backing file.
</details>

### Pregunta 7
¿Qué herramienta de libguestfs permite personalizar una imagen de VM (cambiar hostname, instalar paquetes, inyectar SSH keys)?

a) `guestfish`
b) `virt-customize`
c) `virt-edit`
d) `virt-builder`

<details><summary>Respuesta</summary>

**b) `virt-customize`**

`virt-customize` permite realizar múltiples operaciones de personalización en una sola ejecución: `--hostname`, `--install`, `--ssh-inject`, `--run-command`, etc. `guestfish` es un shell interactivo más genérico. `virt-edit` solo edita un archivo individual.
</details>

### Pregunta 8
¿Cuál es el flag correcto de formato para convertir una imagen VHD (Hyper-V) con qemu-img?

a) `-f vhd`
b) `-f hyperv`
c) `-f vpc`
d) `-f vhdx`

<details><summary>Respuesta</summary>

**c) `-f vpc`**

En qemu-img, el formato VHD de Hyper-V se especifica como `vpc` (Virtual PC, nombre histórico). Ejemplo: `qemu-img convert -f vpc -O qcow2 disco.vhd disco.qcow2`.
</details>

### Pregunta 9
¿Qué hace el comando `virt-resize --expand /dev/sda2 viejo.qcow2 nuevo.qcow2`?

a) Expande el archivo de imagen viejo.qcow2
b) Copia la imagen a nuevo.qcow2 expandiendo la partición /dev/sda2
c) Redimensiona solo la partición sin copiar
d) Comprime la partición /dev/sda2

<details><summary>Respuesta</summary>

**b) Copia la imagen a nuevo.qcow2 expandiendo la partición /dev/sda2**

`virt-resize` siempre crea una copia de la imagen en el destino, nunca modifica la imagen original. La imagen destino debe existir previamente y tener mayor tamaño. `--expand` indica qué partición debe crecer para ocupar el espacio adicional.
</details>

### Pregunta 10
¿Qué comando de guestfish permite subir un archivo desde el host al sistema de archivos de una imagen de VM?

a) `copy archivo /destino`
b) `upload archivo-local /ruta/destino`
c) `put archivo /destino`
d) `send archivo /destino`

<details><summary>Respuesta</summary>

**b) `upload archivo-local /ruta/destino`**

En guestfish, `upload` copia un archivo del host al filesystem de la imagen y `download` hace la operación inversa. Primero hay que ejecutar `run` y montar el filesystem con `mount`.
</details>

### Pregunta 11

¿Qué opción de preallocación en qcow2 reserva solo las estructuras internas de metadatos sin asignar bloques de datos?

a) `full`
b) `off`
c) `metadata`
d) `falloc`

<details><summary>Respuesta</summary>

**c) `metadata`**

La preallocación `metadata` reserva espacio para las tablas internas de qcow2 (L1/L2 tables, refcount tables) pero no asigna los bloques de datos reales. Esto mejora el rendimiento de escritura inicial sin ocupar todo el espacio en disco. `full` preasigna todo, `falloc` usa fallocate() para reservar bloques, y `off` no preasigna nada.
</details>

### Pregunta 12

¿Qué comando permite ver toda la cadena de backing files de una imagen qcow2 multinivel?

a) `qemu-img info --chain disco.qcow2`
b) `qemu-img info --backing-chain disco.qcow2`
c) `qemu-img check --backing disco.qcow2`
d) `qemu-img list --chain disco.qcow2`

<details><summary>Respuesta</summary>

**b) `qemu-img info --backing-chain disco.qcow2`**

La opción `--backing-chain` de `qemu-img info` muestra la información de cada imagen en la cadena de backing files, desde la imagen actual hasta la imagen base. Es útil para diagnosticar cadenas COW multinivel.
</details>

### Pregunta 13

¿Qué comando de `qemu-img` permite cambiar el backing file de una imagen overlay?

a) `qemu-img convert`
b) `qemu-img rebase`
c) `qemu-img modify`
d) `qemu-img snapshot`

<details><summary>Respuesta</summary>

**b) `qemu-img rebase`**

`qemu-img rebase -b nuevo-base.qcow2 -F qcow2 overlay.qcow2` cambia el backing file de una imagen overlay. Puede operar en modo "unsafe" (solo cambia la referencia) o "safe" (recalcula las diferencias respecto a la nueva base).
</details>

### Pregunta 14

¿Qué herramienta de libguestfs permite inspeccionar el sistema operativo instalado dentro de una imagen de disco sin arrancar la VM?

a) `virt-edit`
b) `virt-inspector`
c) `virt-ls`
d) `virt-cat`

<details><summary>Respuesta</summary>

**b) `virt-inspector`**

`virt-inspector` analiza una imagen de disco y genera un informe XML con información detallada sobre el sistema operativo instalado, incluyendo distribución, versión, kernel, paquetes instalados y configuración de red. Opera sin necesidad de arrancar la VM.
</details>

### Pregunta 15

¿Qué formato de disco virtual utiliza internamente QEMU para referirse a archivos VHD de Hyper-V?

a) `vhd`
b) `hyperv`
c) `vpc`
d) `vhdx`

<details><summary>Respuesta</summary>

**c) `vpc`**

QEMU utiliza el nombre `vpc` (Virtual PC) como identificador interno del formato VHD, debido al origen histórico del formato en Microsoft Virtual PC. Para convertir: `qemu-img convert -f vpc -O qcow2 disco.vhd disco.qcow2`.
</details>

### Pregunta 16

¿Qué operación realiza `virt-sparsify` internamente para reducir el tamaño de una imagen de disco?

a) Comprime los bloques de datos con gzip
b) Rellena con ceros el espacio libre del filesystem del guest y luego elimina esos bloques de ceros
c) Elimina las particiones vacías
d) Trunca el archivo de imagen al último bloque escrito

<details><summary>Respuesta</summary>

**b) Rellena con ceros el espacio libre del filesystem del guest y luego elimina esos bloques de ceros**

`virt-sparsify` trabaja en dos fases: primero escribe ceros en todo el espacio libre dentro del filesystem del guest, y luego crea una nueva imagen (o modifica in-place) eliminando los bloques que contienen solo ceros, haciendo la imagen "sparse" (dispersa).
</details>

### Pregunta 17

¿Qué comando de `virt-v2v` convierte una VM desde un archivo OVA al formato libvirt con imágenes qcow2?

a) `virt-v2v -i vmx mi-vm.ova -o libvirt`
b) `virt-v2v -i ova mi-vm.ova -o libvirt -of qcow2`
c) `virt-v2v --import mi-vm.ova --output qcow2`
d) `virt-v2v convert mi-vm.ova --format qcow2`

<details><summary>Respuesta</summary>

**b) `virt-v2v -i ova mi-vm.ova -o libvirt -of qcow2`**

`virt-v2v` usa `-i ova` para especificar que la entrada es un archivo OVA, `-o libvirt` para que la salida se registre en libvirt, y `-of qcow2` para especificar el formato de disco de salida. También puede usar `-o local -os /ruta/` para guardar en un directorio local.
</details>

### Pregunta 18

¿Qué sucede si se intenta redimensionar una imagen qcow2 que tiene snapshots internos con `qemu-img resize`?

a) Se redimensiona correctamente junto con los snapshots
b) Solo se redimensiona el snapshot activo
c) La operación falla porque no se puede redimensionar con snapshots presentes
d) Los snapshots se eliminan automáticamente

<details><summary>Respuesta</summary>

**c) La operación falla porque no se puede redimensionar con snapshots presentes**

`qemu-img resize` no permite redimensionar imágenes que contienen snapshots internos. Es necesario eliminar todos los snapshots antes de redimensionar, o utilizar `qemu-img convert` para crear una nueva imagen consolidada sin snapshots y luego redimensionar.
</details>

### Pregunta 19

¿Qué opción de `virt-resize` permite expandir un volumen lógico LVM dentro de una imagen de disco?

a) `--expand-lv`
b) `--LV-expand`
c) `--lvm-resize`
d) `--grow-lv`

<details><summary>Respuesta</summary>

**b) `--LV-expand`**

La opción `--LV-expand /dev/vg/lv` de `virt-resize` expande un volumen lógico LVM dentro de la imagen. Se combina con `--expand` para la partición física que contiene el PV. Ejemplo: `virt-resize --expand /dev/sda2 --LV-expand /dev/vg0/root viejo.qcow2 nuevo.qcow2`.
</details>

### Pregunta 20

¿Qué comando de `qemu-img` estima el espacio necesario para convertir una imagen de un formato a otro sin realizar la conversión?

a) `qemu-img info`
b) `qemu-img estimate`
c) `qemu-img measure`
d) `qemu-img check`

<details><summary>Respuesta</summary>

**c) `qemu-img measure`**

`qemu-img measure -f raw -O qcow2 disco.raw` calcula el espacio de disco necesario para la conversión sin ejecutarla. Muestra tanto el tamaño requerido como el tamaño completamente asignado, útil para planificar migraciones y conversiones de formato.
</details>

### Pregunta 21

Escribe el comando para crear una imagen de disco en formato qcow2 de 20 GB llamada `disco.qcow2`.

<input type="text" class="fill-blank" data-answer="qemu-img create -f qcow2 disco.qcow2 20G" data-alt="qemu-img create -f qcow2 disco.qcow2 20g" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img create -f qcow2 disco.qcow2 20G**

`qemu-img create` crea una nueva imagen de disco. `-f qcow2` especifica el formato. El último argumento es el tamaño virtual de la imagen. Con qcow2, la imagen usará thin provisioning por defecto, ocupando solo el espacio realmente escrito.
</details>

### Pregunta 22

Escribe el comando para convertir una imagen `disco.qcow2` de formato qcow2 a formato vmdk (VMware) llamada `disco.vmdk`.

<input type="text" class="fill-blank" data-answer="qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk**

`qemu-img convert` convierte imágenes entre formatos. `-f` indica el formato de origen, `-O` (mayúscula) indica el formato de destino. Esta operación permite migrar discos virtuales entre diferentes hipervisores.
</details>

### Pregunta 23

Escribe el comando para montar el filesystem de la imagen `disco.qcow2` en el directorio `/mnt/guest` usando libguestfs con inspección automática.

<input type="text" class="fill-blank" data-answer="guestmount -a disco.qcow2 -i /mnt/guest" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**guestmount -a disco.qcow2 -i /mnt/guest**

`guestmount` monta el filesystem de una imagen de disco en el host usando FUSE. `-a` especifica la imagen, `-i` activa la inspección automática del SO para montar los filesystems correctos. Se desmonta con `guestunmount /mnt/guest`.
</details>

### Pregunta 24

Escribe el comando para reducir el tamaño de la imagen `disco.qcow2` in-place eliminando el espacio no utilizado.

<input type="text" class="fill-blank" data-answer="virt-sparsify --in-place disco.qcow2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**virt-sparsify --in-place disco.qcow2**

`virt-sparsify --in-place` reduce el tamaño de la imagen directamente sin crear una copia. La VM debe estar apagada durante esta operación. Sin `--in-place`, se crea una nueva imagen reducida dejando la original intacta.
</details>

### Pregunta 25

Escribe el comando para verificar la integridad y reparar una imagen qcow2 dañada llamada `disco.qcow2`.

<input type="text" class="fill-blank" data-answer="qemu-img check -r all disco.qcow2" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**qemu-img check -r all disco.qcow2**

`qemu-img check -r all` verifica y repara todos los errores encontrados en una imagen qcow2 (leaks de refcount, errores de consistencia, etc.). Sin `-r`, solo verifica sin reparar. La opción `all` indica que se reparen todos los tipos de errores detectados.
</details>
