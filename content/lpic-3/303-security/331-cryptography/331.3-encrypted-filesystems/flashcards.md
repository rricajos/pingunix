---
title: "331.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.3"
---

# Flashcards: 331.3 - Sistemas De Archivos Cifrados

> 42 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando formatea una partición con LUKS utilizando cifrado AES-XTS con clave de 512 bits?

</div>
<div class="flashcard-back">

**R:** b). `cryptsetup luksFormat --cipher aes-xts-plain64 --key-size 512 /dev/sdb1`  `cryptsetup luksFormat` inicializa la partición con formato LUKS. `--cipher` especifica el algoritmo y `--key-size` el tamaño de clave en bits.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-002">
<div class="flashcard-front">

**P:** ¿Cuántos slots de clave soporta LUKS por defecto?

</div>
<div class="flashcard-back">

**R:** b). 8  LUKS soporta hasta 8 slots de clave (numerados del 0 al 7), permitiendo que múltiples contraseñas o archivos de clave puedan desbloquear el mismo volumen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué archivo se configura para desbloquear automáticamente volúmenes cifrados durante el arranque del sistema?

</div>
<div class="flashcard-back">

**R:** c). `/etc/crypttab`  El archivo `/etc/crypttab` define los volúmenes cifrados que deben desbloquearse durante el arranque, incluyendo el nombre del mapeo, dispositivo, archivo de clave y opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-004">
<div class="flashcard-front">

**P:** Un administrador necesita hacer backup de la cabecera LUKS antes de una operación de mantenimiento. ¿Qué comando debe usar?

</div>
<div class="flashcard-back">

**R:** b). `cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file backup.img`  `luksHeaderBackup` es el método correcto y seguro para respaldar la cabecera LUKS. `luksDump` solo muestra información, no crea un backup restaurable.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la principal ventaja de dm-crypt en modo plano (plain mode) sobre LUKS?

</div>
<div class="flashcard-back">

**R:** c). Denegabilidad plausible (no hay cabecera identificable)  En modo plano, no existe cabecera LUKS en el disco, por lo que no hay forma de probar que la partición contiene datos cifrados. Esto ofrece denegabilidad plausible, a costa de perder gestión de múltiples claves y cambio de contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué diferencia principal existe entre eCryptfs y EncFS?

</div>
<div class="flashcard-back">

**R:** a). eCryptfs opera en el kernel, EncFS opera en espacio de usuario (FUSE)  eCryptfs es un sistema de archivos apilado que opera en el espacio del kernel, ofreciendo mejor rendimiento. EncFS usa FUSE (Filesystem in Userspace), siendo más fácil de configurar pero con menor rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué entrada en `/etc/crypttab` configura swap cifrado con clave aleatoria en cada arranque?

</div>
<div class="flashcard-back">

**R:** b). `swap_cifrado /dev/sdb2 /dev/urandom swap,cipher=aes-xts-plain64,size=256`  Se utiliza `/dev/urandom` como fuente de clave aleatoria. La opción `swap` indica que se formateará como swap tras abrir. La clave cambia en cada arranque, por lo que los datos de swap del arranque anterior son irrecuperables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando elimina el slot de clave número 3 de un volumen LUKS?

</div>
<div class="flashcard-back">

**R:** c). `cryptsetup luksKillSlot /dev/sdb1 3`  `luksKillSlot` elimina un slot de clave específico por su número. `luksRemoveKey` elimina una clave proporcionando la passphrase, sin necesidad de conocer el número de slot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando se necesita para regenerar el initramfs con soporte de cifrado en sistemas basados en RHEL?

</div>
<div class="flashcard-back">

**R:** c). `dracut --force`  En sistemas RHEL/CentOS/Fedora, `dracut --force` regenera el initramfs. En Debian/Ubuntu se usa `update-initramfs -u`. En Arch Linux se usa `mkinitcpio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere crear la configuración "LVM sobre LUKS". ¿Cuál es el orden correcto de operaciones?

</div>
<div class="flashcard-back">

**R:** b). Cifrar partición con LUKS -> Abrir LUKS -> Crear PV sobre /dev/mapper -> Crear VG -> Crear LV  En "LVM sobre LUKS", primero se cifra la partición con `luksFormat`, se abre con `luksOpen`, y luego se crean los componentes LVM (PV, VG, LV) sobre el dispositivo mapeado en `/dev/mapper/`. Todo el contenido LVM queda cifrado con una sola passphrase.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `cryptsetup luksFormat` especifica el algoritmo hash utilizado para la derivación de clave?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opción `--hash` especifica el algoritmo hash usado en la función de derivación de clave (PBKDF2). Por ejemplo, `--hash sha512` utiliza SHA-512 para derivar la clave maestra a partir de la passphrase. Por defecto suele ser SHA-256.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando permite verificar si una passphrase es correcta para un volumen LUKS sin necesidad de abrirlo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opción `--test-passphrase` permite verificar si una passphrase es válida para desbloquear un volumen LUKS sin realmente abrirlo ni crear un mapeo en `/dev/mapper/`. Es útil para comprobar credenciales de forma segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué opción en `/etc/crypttab` permite el uso de TRIM en dispositivos SSD cifrados con LUKS, y cuál es su implicación de seguridad?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opción `discard` habilita el paso de comandos TRIM/DISCARD al dispositivo SSD subyacente. Si bien mejora el rendimiento y la vida útil del SSD, tiene una implicación de seguridad: un atacante puede determinar qué sectores del disco contienen datos y cuáles están vacíos, filtrando información sobre el uso del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué diferencia fundamental existe entre `cryptsetup luksKillSlot` y `cryptsetup luksRemoveKey`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `luksKillSlot` elimina un slot de clave especificando su número (0-7). `luksRemoveKey` solicita al usuario que introduzca la passphrase que desea eliminar, buscando en todos los slots cuál coincide. Ambos comandos requieren autenticación con una clave válida diferente para evitar la eliminación accidental de la última clave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-015">
<div class="flashcard-front">

**P:** Un administrador monta un directorio con eCryptfs y desea habilitar el cifrado de nombres de archivo. ¿Qué opción de montaje debe usar?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opción `ecryptfs_enable_filename_crypto=yes` habilita el cifrado de nombres de archivo en eCryptfs. Por defecto, eCryptfs solo cifra el contenido de los archivos. Con esta opción, los nombres de archivo también se cifran, ocultando la estructura del directorio a usuarios no autorizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para desmontar un sistema de archivos EncFS montado mediante FUSE?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `fusermount -u` es el comando estándar para desmontar sistemas de archivos FUSE, incluyendo EncFS. Aunque `umount` también puede funcionar en algunos casos, `fusermount -u` es el método correcto y recomendado para sistemas de archivos en espacio de usuario basados en FUSE.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es el cifrado por defecto utilizado por `cryptsetup luksFormat` en versiones modernas de LUKS2?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El cifrado por defecto en LUKS2 moderno es `aes-xts-plain64` con un tamaño de clave de 512 bits (que en modo XTS equivale a 256 bits efectivos). El modo XTS está diseñado específicamente para cifrado de disco y ofrece mejor seguridad que CBC para este caso de uso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué ventaja principal ofrece eCryptfs sobre dm-crypt/LUKS para el cifrado de directorios home individuales?

</div>
<div class="flashcard-back">

**R:** b) Correcta. eCryptfs es un sistema de archivos apilado que cifra archivos individuales sobre un sistema de archivos existente, sin necesidad de particiones o dispositivos de bloque dedicados. Esto lo hace ideal para cifrar directorios home individuales, ya que cada usuario puede tener su propio directorio cifrado independientemente, sin afectar la estructura de particiones del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-019">
<div class="flashcard-front">

**P:** En la configuración de `/etc/crypttab`, ¿qué valor se especifica en el campo de archivo de clave para solicitar una passphrase interactiva durante el arranque?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El valor `none` en el campo de archivo de clave de `/etc/crypttab` indica que se solicitará una passphrase interactiva al usuario durante el proceso de arranque. Si se especifica una ruta a un archivo, se usará ese archivo como clave sin intervención del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando de `cryptsetup` muestra información detallada sobre la cabecera LUKS, incluyendo los slots de clave activos?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `luksDump` muestra información detallada de la cabecera LUKS: versión, UUID, algoritmo de cifrado, hash, tamaño de clave, y el estado de cada uno de los 8 slots de clave (activo/inactivo). No muestra datos sensibles como las claves o passphrases.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para abrir (desbloquear) un volumen LUKS en `/dev/sda2` con el nombre de mapeo `datos_seguros`. <input type="text" class="fill-blank" data-answer="cryptsetup luksOpen /dev/sda2 datos_seguros" data-alt="cryptsetup open --type luks /dev/sda2 datos_seguros,cryptsetup open /dev/sda2 datos_seguros" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cryptsetup luksOpen /dev/sda2 datos_seguros. Este comando desbloquea el volumen LUKS y crea el dispositivo mapeado en `/dev/mapper/datos_seguros`. La sintaxis moderna equivalente es `cryptsetup open --type luks /dev/sda2 datos_seguros`. Se solicitará la passphrase para desbloquear.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para añadir un archivo de clave (`/root/keyfile`) como método adicional de desbloqueo a un volumen LUKS en `/dev/sdb1`. <input type="text" class="fill-blank" data-answer="cryptsetup luksAddKey /dev/sdb1 /root/keyfile" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cryptsetup luksAddKey /dev/sdb1 /root/keyfile. `luksAddKey` añade una nueva clave a un slot disponible. Se requiere proporcionar una clave existente válida para autorizar la operación. El archivo de clave se especifica como último argumento después del dispositivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para cambiar la passphrase de un volumen LUKS en `/dev/sdc1`. <input type="text" class="fill-blank" data-answer="cryptsetup luksChangeKey /dev/sdc1" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cryptsetup luksChangeKey /dev/sdc1. `luksChangeKey` solicita primero la passphrase antigua para identificar el slot, y luego pide la nueva passphrase. La operación reemplaza la clave en el mismo slot sin afectar a otros slots ni a la clave maestra del volumen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para crear y montar un directorio cifrado con EncFS, usando `/datos/.cifrado` como directorio cifrado y `/datos/visible` como punto de montaje. <input type="text" class="fill-blank" data-answer="encfs /datos/.cifrado /datos/visible" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** encfs /datos/.cifrado /datos/visible. EncFS toma dos argumentos: el directorio donde se almacenarán los datos cifrados y el punto de montaje donde se accederá al contenido descifrado. Si es la primera vez, EncFS preguntará por el modo de configuración (estándar/paranoico) y la passphrase.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para cerrar (bloquear) un volumen LUKS mapeado como `datos_cifrados`. <input type="text" class="fill-blank" data-answer="cryptsetup luksClose datos_cifrados" data-alt="cryptsetup close datos_cifrados" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cryptsetup luksClose datos_cifrados. `luksClose` (o su equivalente moderno `close`) cierra el mapeo cifrado y elimina el dispositivo de `/dev/mapper/`. Es fundamental desmontar el sistema de archivos con `umount` antes de cerrar el volumen LUKS para evitar pérdida de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Domina los comandos de `cryptsetup` con LUKS. Es el método principal de cifrado ...

</div>
<div class="flashcard-back">

**R:** Domina los comandos de `cryptsetup` con LUKS. Es el método principal de cifrado de disco en Linux y el más preguntado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `luksAddKey` requiere una clave existente válida para añadir una nu...

</div>
<div class="flashcard-back">

**R:** Recuerda que `luksAddKey` requiere una clave existente válida para añadir una nueva. `luksKillSlot` elimina por número de slot, `luksRemoveKey` por passphrase.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: LVM sobre LUKS es la configuración preferida por muchos instaladores de distribu...

</div>
<div class="flashcard-back">

**R:** LVM sobre LUKS es la configuración preferida por muchos instaladores de distribuciones porque cifra todo el grupo de volúmenes con una sola passphrase.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre cifrado a nivel de bloque (dm-crypt/LUKS) y a nivel...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre cifrado a nivel de bloque (dm-crypt/LUKS) y a nivel de archivo (eCryptfs, EncFS). dm-crypt protege toda la partición; eCryptfs permite cifrar archivos selectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `noauto`?

</div>
<div class="flashcard-back">

**R:** No desbloquear automáticamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `discard`?

</div>
<div class="flashcard-back">

**R:** Permitir TRIM (SSD), con implicaciones de seguridad

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `swap`?

</div>
<div class="flashcard-back">

**R:** Formatear como swap tras abrir

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `cipher=`?

</div>
<div class="flashcard-back">

**R:** Especificar algoritmo de cifrado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `tries=`?

</div>
<div class="flashcard-back">

**R:** Número de intentos de contraseña

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** El cifrado de sistemas de archivos protege los datos en reposo (data at rest) contra acceso no autorizado, incluso si el medio físico es robado. Linux ofrece varias soluciones: dm-crypt/LUKS para cifra

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Configuración Persistente: /etc/crypttab?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/crypttab` permite configurar volúmenes cifrados para que se desbloqueen automáticamente durante el arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son dm-crypt en Modo Plano (Plain Mode)?

</div>
<div class="flashcard-back">

**R:** El modo plano no utiliza cabecera LUKS. Es más simple pero menos flexible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son LUKS sobre LVM?

</div>
<div class="flashcard-back">

**R:** Se puede combinar LUKS con LVM de dos formas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son LUKS en initramfs?

</div>
<div class="flashcard-back">

**R:** Para cifrar la partición raíz, se necesita soporte en initramfs:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son eCryptfs?

</div>
<div class="flashcard-back">

**R:** eCryptfs es un sistema de cifrado a nivel de archivo apilado sobre un sistema de archivos existente. Cifra archivos individualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son EncFS?

</div>
<div class="flashcard-back">

**R:** EncFS es una solución de cifrado en espacio de usuario basada en FUSE. Más simple pero con limitaciones de seguridad conocidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.3">
</div>

<div class="flashcard" data-id="331.3-fc-042">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

