---
title: "351.5 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.5"
---

# Flashcards: 351.5 - Imagenes De Disco Vm

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-001">
<div class="flashcard-front">

**P:** ¿Qué formato de imagen de disco ofrece thin provisioning, snapshots internos y compresión de forma nativa?

</div>
<div class="flashcard-back">

**R:** c) qcow2. qcow2 (QEMU Copy-On-Write v2) es el formato nativo de QEMU/KVM que soporta thin provisioning, snapshots internos, compresión zlib, cifrado LUKS y backing files. Es el formato más versátil para entornos KVM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-002">
<div class="flashcard-front">

**P:** ¿Qué sucede si se elimina el backing file de una imagen qcow2 que depende de él?

</div>
<div class="flashcard-back">

**R:** c) La imagen derivada queda corrupta e inutilizable. Las imágenes con backing files dependen completamente de la imagen base. Si se elimina, modifica o mueve el backing file, todas las imágenes derivadas dejan de funcionar ya que solo contienen los bloques que difieren de la base.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-003">
<div class="flashcard-front">

**P:** ¿Qué herramienta permite reducir el tamaño físico de una imagen eliminando espacio no utilizado?

</div>
<div class="flashcard-back">

**R:** b) `virt-sparsify`. `virt-sparsify` rellena con ceros el espacio libre dentro del filesystem del guest y luego elimina esos bloques de ceros, reduciendo el tamaño real del archivo. `virt-resize` redimensiona particiones dentro de la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-004">
<div class="flashcard-front">

**P:** ¿Qué herramienta permite montar el filesystem de una imagen de disco directamente en el host sin arrancar la VM?

</div>
<div class="flashcard-back">

**R:** b) `guestmount`. `guestmount -a disco.qcow2 -i /mnt/guest` monta el filesystem de la imagen usando libguestfs (a través de FUSE). La opción `-i` realiza la inspección automática del SO para montar los filesystems correctos. Se desmonta con `guestunmount`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-005">
<div class="flashcard-front">

**P:** ¿Qué es un archivo OVA?

</div>
<div class="flashcard-back">

**R:** b) Un archivo TAR que contiene archivos OVF (descriptor XML, imagen de disco y checksums). OVA (Open Virtual Appliance) es un paquete TAR que contiene un archivo .ovf (descriptor XML), las imágenes de disco (.vmdk u otro formato) y un archivo .mf con checksums. Es el formato estándar para distribuir VMs entre hipervisores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando crea una imagen qcow2 derivada de un backing file existente?

</div>
<div class="flashcard-back">

**R:** a) `qemu-img create -f qcow2 -b base.qcow2 -F qcow2 overlay.qcow2`. `-b` especifica el backing file y `-F` su formato. La imagen resultante (overlay) es de tipo copy-on-write: solo almacena los bloques que difieren de la base. No se especifica tamaño porque se hereda del backing file.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-007">
<div class="flashcard-front">

**P:** ¿Qué herramienta de libguestfs permite personalizar una imagen de VM (cambiar hostname, instalar paquetes, inyectar SSH keys)?

</div>
<div class="flashcard-back">

**R:** b) `virt-customize`. `virt-customize` permite realizar múltiples operaciones de personalización en una sola ejecución: `--hostname`, `--install`, `--ssh-inject`, `--run-command`, etc. `guestfish` es un shell interactivo más genérico. `virt-edit` solo edita un archivo individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el flag correcto de formato para convertir una imagen VHD (Hyper-V) con qemu-img?

</div>
<div class="flashcard-back">

**R:** c) `-f vpc`. En qemu-img, el formato VHD de Hyper-V se especifica como `vpc` (Virtual PC, nombre histórico). Ejemplo: `qemu-img convert -f vpc -O qcow2 disco.vhd disco.qcow2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-009">
<div class="flashcard-front">

**P:** ¿Qué hace el comando `virt-resize --expand /dev/sda2 viejo.qcow2 nuevo.qcow2`?

</div>
<div class="flashcard-back">

**R:** b) Copia la imagen a nuevo.qcow2 expandiendo la partición /dev/sda2. `virt-resize` siempre crea una copia de la imagen en el destino, nunca modifica la imagen original. La imagen destino debe existir previamente y tener mayor tamaño. `--expand` indica qué partición debe crecer para ocupar el espacio adicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando de guestfish permite subir un archivo desde el host al sistema de archivos de una imagen de VM?

</div>
<div class="flashcard-back">

**R:** b) `upload archivo-local /ruta/destino`. En guestfish, `upload` copia un archivo del host al filesystem de la imagen y `download` hace la operación inversa. Primero hay que ejecutar `run` y montar el filesystem con `mount`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de preallocación en qcow2 reserva solo las estructuras internas de metadatos sin asignar bloques de datos?

</div>
<div class="flashcard-back">

**R:** c) `metadata`. La preallocación `metadata` reserva espacio para las tablas internas de qcow2 (L1/L2 tables, refcount tables) pero no asigna los bloques de datos reales. Esto mejora el rendimiento de escritura inicial sin ocupar todo el espacio en disco. `full` preasigna todo, `falloc` usa fallocate() para reservar bloques, y `off` no preasigna nada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando permite ver toda la cadena de backing files de una imagen qcow2 multinivel?

</div>
<div class="flashcard-back">

**R:** b) `qemu-img info --backing-chain disco.qcow2`. La opción `--backing-chain` de `qemu-img info` muestra la información de cada imagen en la cadena de backing files, desde la imagen actual hasta la imagen base. Es útil para diagnosticar cadenas COW multinivel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de `qemu-img` permite cambiar el backing file de una imagen overlay?

</div>
<div class="flashcard-back">

**R:** b) `qemu-img rebase`. `qemu-img rebase -b nuevo-base.qcow2 -F qcow2 overlay.qcow2` cambia el backing file de una imagen overlay. Puede operar en modo "unsafe" (solo cambia la referencia) o "safe" (recalcula las diferencias respecto a la nueva base).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-014">
<div class="flashcard-front">

**P:** ¿Qué herramienta de libguestfs permite inspeccionar el sistema operativo instalado dentro de una imagen de disco sin arrancar la VM?

</div>
<div class="flashcard-back">

**R:** b) `virt-inspector`. `virt-inspector` analiza una imagen de disco y genera un informe XML con información detallada sobre el sistema operativo instalado, incluyendo distribución, versión, kernel, paquetes instalados y configuración de red. Opera sin necesidad de arrancar la VM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-015">
<div class="flashcard-front">

**P:** ¿Qué formato de disco virtual utiliza internamente QEMU para referirse a archivos VHD de Hyper-V?

</div>
<div class="flashcard-back">

**R:** c) `vpc`. QEMU utiliza el nombre `vpc` (Virtual PC) como identificador interno del formato VHD, debido al origen histórico del formato en Microsoft Virtual PC. Para convertir: `qemu-img convert -f vpc -O qcow2 disco.vhd disco.qcow2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-016">
<div class="flashcard-front">

**P:** ¿Qué operación realiza `virt-sparsify` internamente para reducir el tamaño de una imagen de disco?

</div>
<div class="flashcard-back">

**R:** b) Rellena con ceros el espacio libre del filesystem del guest y luego elimina esos bloques de ceros. `virt-sparsify` trabaja en dos fases: primero escribe ceros en todo el espacio libre dentro del filesystem del guest, y luego crea una nueva imagen (o modifica in-place) eliminando los bloques que contienen solo ceros, haciendo la imagen "sparse" (dispersa).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando de `virt-v2v` convierte una VM desde un archivo OVA al formato libvirt con imágenes qcow2?

</div>
<div class="flashcard-back">

**R:** b) `virt-v2v -i ova mi-vm.ova -o libvirt -of qcow2`. `virt-v2v` usa `-i ova` para especificar que la entrada es un archivo OVA, `-o libvirt` para que la salida se registre en libvirt, y `-of qcow2` para especificar el formato de disco de salida. También puede usar `-o local -os /ruta/` para guardar en un directorio local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-018">
<div class="flashcard-front">

**P:** ¿Qué sucede si se intenta redimensionar una imagen qcow2 que tiene snapshots internos con `qemu-img resize`?

</div>
<div class="flashcard-back">

**R:** c) La operación falla porque no se puede redimensionar con snapshots presentes. `qemu-img resize` no permite redimensionar imágenes que contienen snapshots internos. Es necesario eliminar todos los snapshots antes de redimensionar, o utilizar `qemu-img convert` para crear una nueva imagen consolidada sin snapshots y luego redimensionar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-019">
<div class="flashcard-front">

**P:** ¿Qué opción de `virt-resize` permite expandir un volumen lógico LVM dentro de una imagen de disco?

</div>
<div class="flashcard-back">

**R:** b) `--LV-expand`. La opción `--LV-expand /dev/vg/lv` de `virt-resize` expande un volumen lógico LVM dentro de la imagen. Se combina con `--expand` para la partición física que contiene el PV. Ejemplo: `virt-resize --expand /dev/sda2 --LV-expand /dev/vg0/root viejo.qcow2 nuevo.qcow2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando de `qemu-img` estima el espacio necesario para convertir una imagen de un formato a otro sin realizar la conversión?

</div>
<div class="flashcard-back">

**R:** c) `qemu-img measure`. `qemu-img measure -f raw -O qcow2 disco.raw` calcula el espacio de disco necesario para la conversión sin ejecutarla. Muestra tanto el tamaño requerido como el tamaño completamente asignado, útil para planificar migraciones y conversiones de formato.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear una imagen de disco en formato qcow2 de 20 GB llamada `disco.qcow2`. <input type="text" class="fill-blank" data-answer="qemu-img create -f qcow2 disco.qcow2 20G" data-alt="qemu-img create -f qcow2 disco.qcow2 20g" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** qemu-img create -f qcow2 disco.qcow2 20G. `qemu-img create` crea una nueva imagen de disco. `-f qcow2` especifica el formato. El último argumento es el tamaño virtual de la imagen. Con qcow2, la imagen usará thin provisioning por defecto, ocupando solo el espacio realmente escrito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para convertir una imagen `disco.qcow2` de formato qcow2 a formato vmdk (VMware) llamada `disco.vmdk`. <input type="text" class="fill-blank" data-answer="qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** qemu-img convert -f qcow2 -O vmdk disco.qcow2 disco.vmdk. `qemu-img convert` convierte imágenes entre formatos. `-f` indica el formato de origen, `-O` (mayúscula) indica el formato de destino. Esta operación permite migrar discos virtuales entre diferentes hipervisores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para montar el filesystem de la imagen `disco.qcow2` en el directorio `/mnt/guest` usando libguestfs con inspección automática. <input type="text" class="fill-blank" data-answer="guestmount -a disco.qcow2 -i /mnt/guest" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** guestmount -a disco.qcow2 -i /mnt/guest. `guestmount` monta el filesystem de una imagen de disco en el host usando FUSE. `-a` especifica la imagen, `-i` activa la inspección automática del SO para montar los filesystems correctos. Se desmonta con `guestunmount /mnt/guest`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para reducir el tamaño de la imagen `disco.qcow2` in-place eliminando el espacio no utilizado. <input type="text" class="fill-blank" data-answer="virt-sparsify --in-place disco.qcow2" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** virt-sparsify --in-place disco.qcow2. `virt-sparsify --in-place` reduce el tamaño de la imagen directamente sin crear una copia. La VM debe estar apagada durante esta operación. Sin `--in-place`, se crea una nueva imagen reducida dejando la original intacta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para verificar la integridad y reparar una imagen qcow2 dañada llamada `disco.qcow2`. <input type="text" class="fill-blank" data-answer="qemu-img check -r all disco.qcow2" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** qemu-img check -r all disco.qcow2. `qemu-img check -r all` verifica y repara todos los errores encontrados en una imagen qcow2 (leaks de refcount, errores de consistencia, etc.). Sin `-r`, solo verifica sin reparar. La opción `all` indica que se reparen todos los tipos de errores detectados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: qcow2 es el formato recomendado para QEMU/KVM. Ofrece el mejor balance entre fun...

</div>
<div class="flashcard-back">

**R:** qcow2 es el formato recomendado para QEMU/KVM. Ofrece el mejor balance entre funcionalidad y rendimiento. raw solo es preferible cuando se necesita rendimiento máximo sin funcionalidades avanzadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El backing file debe existir siempre y nunca debe ser modificado. Si se elimina ...

</div>
<div class="flashcard-back">

**R:** El backing file debe existir siempre y nunca debe ser modificado. Si se elimina o modifica el backing file, todas las imágenes derivadas quedan corruptas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `virt-sparsify` funciona rellenando con ceros el espacio libre dentro del filesy...

</div>
<div class="flashcard-back">

**R:** `virt-sparsify` funciona rellenando con ceros el espacio libre dentro del filesystem del guest, y luego eliminando esos bloques de ceros del archivo de imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: libguestfs NO requiere que la VM esté en ejecución. Opera directamente sobre arc...

</div>
<div class="flashcard-back">

**R:** libguestfs NO requiere que la VM esté en ejecución. Opera directamente sobre archivos de imagen. Es esencial para automatizar la personalización de imágenes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La gestión de imágenes de disco es fundamental en entornos de virtualización. Este subtema cubre los diferentes formatos, herramientas de manipulación, conversión entre formatos y las técnicas avanzada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-031">
<div class="flashcard-front">

**P:** Que es/son Comparación de Formatos de Imagen?

</div>
<div class="flashcard-back">

**R:** | Formato | Hipervisor | Thin Prov. | Snapshots | Compresión | Cifrado |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-032">
<div class="flashcard-front">

**P:** Que es/son Backing Files (Copy-on-Write Chains)?

</div>
<div class="flashcard-back">

**R:** Los backing files permiten crear imágenes derivadas que solo almacenan los cambios respecto a una imagen base:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-033">
<div class="flashcard-front">

**P:** Que es/son virt-sparsify?

</div>
<div class="flashcard-back">

**R:** Reduce el tamaño físico de una imagen eliminando espacio no utilizado:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-034">
<div class="flashcard-front">

**P:** Que es/son virt-resize?

</div>
<div class="flashcard-back">

**R:** Redimensiona particiones dentro de una imagen de disco:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-035">
<div class="flashcard-front">

**P:** Que es/son libguestfs: guestfish y guestmount?

</div>
<div class="flashcard-back">

**R:** libguestfs permite acceder y modificar el sistema de archivos de imágenes de disco sin necesidad de arrancar la VM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.5">
</div>

<div class="flashcard" data-id="351.5-fc-036">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

