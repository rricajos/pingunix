---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.3 - Sistemas de archivos cifrados"
subtema: "331.3"
peso: 3
tags:
  - lpic-3
  - tema-331
  - luks
  - dm-crypt
  - ecryptfs
---

# Ejercicios - 331.3 Sistemas de Archivos Cifrados

### Pregunta 1
¿Qué comando formatea una partición con LUKS utilizando cifrado AES-XTS con clave de 512 bits?

a) `cryptsetup create --cipher aes-xts-plain64 --key-size 512 /dev/sdb1`
b) `cryptsetup luksFormat --cipher aes-xts-plain64 --key-size 512 /dev/sdb1`
c) `luks-setup --format aes-xts-512 /dev/sdb1`
d) `cryptsetup luksCreate --aes-xts 512 /dev/sdb1`

<details><summary>Respuesta</summary>

**b)** `cryptsetup luksFormat --cipher aes-xts-plain64 --key-size 512 /dev/sdb1`

`cryptsetup luksFormat` inicializa la partición con formato LUKS. `--cipher` especifica el algoritmo y `--key-size` el tamaño de clave en bits.
</details>

### Pregunta 2
¿Cuántos slots de clave soporta LUKS por defecto?

a) 4
b) 8
c) 16
d) Ilimitados

<details><summary>Respuesta</summary>

**b)** 8

LUKS soporta hasta 8 slots de clave (numerados del 0 al 7), permitiendo que múltiples contraseñas o archivos de clave puedan desbloquear el mismo volumen.
</details>

### Pregunta 3
¿Qué archivo se configura para desbloquear automáticamente volúmenes cifrados durante el arranque del sistema?

a) `/etc/fstab`
b) `/etc/luks.conf`
c) `/etc/crypttab`
d) `/etc/dm-crypt.conf`

<details><summary>Respuesta</summary>

**c)** `/etc/crypttab`

El archivo `/etc/crypttab` define los volúmenes cifrados que deben desbloquearse durante el arranque, incluyendo el nombre del mapeo, dispositivo, archivo de clave y opciones.
</details>

### Pregunta 4
Un administrador necesita hacer backup de la cabecera LUKS antes de una operación de mantenimiento. ¿Qué comando debe usar?

a) `cryptsetup luksDump /dev/sdb1 > backup.img`
b) `cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file backup.img`
c) `dd if=/dev/sdb1 of=backup.img bs=1M count=2`
d) `cryptsetup luksBackup --header /dev/sdb1 backup.img`

<details><summary>Respuesta</summary>

**b)** `cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file backup.img`

`luksHeaderBackup` es el método correcto y seguro para respaldar la cabecera LUKS. `luksDump` solo muestra información, no crea un backup restaurable.
</details>

### Pregunta 5
¿Cuál es la principal ventaja de dm-crypt en modo plano (plain mode) sobre LUKS?

a) Mayor rendimiento de cifrado
b) Soporte para múltiples contraseñas
c) Denegabilidad plausible (no hay cabecera identificable)
d) Mejor compatibilidad con sistemas de archivos

<details><summary>Respuesta</summary>

**c)** Denegabilidad plausible (no hay cabecera identificable)

En modo plano, no existe cabecera LUKS en el disco, por lo que no hay forma de probar que la partición contiene datos cifrados. Esto ofrece denegabilidad plausible, a costa de perder gestión de múltiples claves y cambio de contraseña.
</details>

### Pregunta 6
¿Qué diferencia principal existe entre eCryptfs y EncFS?

a) eCryptfs opera en el kernel, EncFS opera en espacio de usuario (FUSE)
b) eCryptfs cifra bloques, EncFS cifra archivos
c) eCryptfs no soporta cifrado de nombres de archivo, EncFS sí
d) EncFS es más seguro que eCryptfs

<details><summary>Respuesta</summary>

**a)** eCryptfs opera en el kernel, EncFS opera en espacio de usuario (FUSE)

eCryptfs es un sistema de archivos apilado que opera en el espacio del kernel, ofreciendo mejor rendimiento. EncFS usa FUSE (Filesystem in Userspace), siendo más fácil de configurar pero con menor rendimiento.
</details>

### Pregunta 7
¿Qué entrada en `/etc/crypttab` configura swap cifrado con clave aleatoria en cada arranque?

a) `swap_cifrado /dev/sdb2 none swap,luks`
b) `swap_cifrado /dev/sdb2 /dev/urandom swap,cipher=aes-xts-plain64,size=256`
c) `swap_cifrado /dev/sdb2 random swap`
d) `swap_cifrado /dev/sdb2 /dev/random luks,swap`

<details><summary>Respuesta</summary>

**b)** `swap_cifrado /dev/sdb2 /dev/urandom swap,cipher=aes-xts-plain64,size=256`

Se utiliza `/dev/urandom` como fuente de clave aleatoria. La opción `swap` indica que se formateará como swap tras abrir. La clave cambia en cada arranque, por lo que los datos de swap del arranque anterior son irrecuperables.
</details>

### Pregunta 8
¿Qué comando elimina el slot de clave número 3 de un volumen LUKS?

a) `cryptsetup luksRemoveKey --slot 3 /dev/sdb1`
b) `cryptsetup luksDeleteSlot /dev/sdb1 3`
c) `cryptsetup luksKillSlot /dev/sdb1 3`
d) `cryptsetup luksRemoveSlot 3 /dev/sdb1`

<details><summary>Respuesta</summary>

**c)** `cryptsetup luksKillSlot /dev/sdb1 3`

`luksKillSlot` elimina un slot de clave específico por su número. `luksRemoveKey` elimina una clave proporcionando la passphrase, sin necesidad de conocer el número de slot.
</details>

### Pregunta 9
¿Qué comando se necesita para regenerar el initramfs con soporte de cifrado en sistemas basados en RHEL?

a) `update-initramfs -u`
b) `mkinitcpio -p linux`
c) `dracut --force`
d) `initramfs-tools --update`

<details><summary>Respuesta</summary>

**c)** `dracut --force`

En sistemas RHEL/CentOS/Fedora, `dracut --force` regenera el initramfs. En Debian/Ubuntu se usa `update-initramfs -u`. En Arch Linux se usa `mkinitcpio`.
</details>

### Pregunta 10
Un administrador quiere crear la configuración "LVM sobre LUKS". ¿Cuál es el orden correcto de operaciones?

a) Crear PV -> Crear VG -> Crear LV -> Cifrar LV con LUKS
b) Cifrar partición con LUKS -> Abrir LUKS -> Crear PV sobre /dev/mapper -> Crear VG -> Crear LV
c) Crear VG -> Cifrar VG con LUKS -> Crear LV
d) Cifrar disco completo -> Particionar -> Crear LVM

<details><summary>Respuesta</summary>

**b)** Cifrar partición con LUKS -> Abrir LUKS -> Crear PV sobre /dev/mapper -> Crear VG -> Crear LV

En "LVM sobre LUKS", primero se cifra la partición con `luksFormat`, se abre con `luksOpen`, y luego se crean los componentes LVM (PV, VG, LV) sobre el dispositivo mapeado en `/dev/mapper/`. Todo el contenido LVM queda cifrado con una sola passphrase.
</details>

### Pregunta 11

¿Qué opción de `cryptsetup luksFormat` especifica el algoritmo hash utilizado para la derivación de clave?

a) `--cipher`
b) `--hash`
c) `--key-size`
d) `--algorithm`

<details><summary>Respuesta</summary>

**b) Correcta**

La opción `--hash` especifica el algoritmo hash usado en la función de derivación de clave (PBKDF2). Por ejemplo, `--hash sha512` utiliza SHA-512 para derivar la clave maestra a partir de la passphrase. Por defecto suele ser SHA-256.

</details>

### Pregunta 12

¿Qué comando permite verificar si una passphrase es correcta para un volumen LUKS sin necesidad de abrirlo?

a) `cryptsetup luksVerify /dev/sdb1`
b) `cryptsetup luksOpen --test-passphrase /dev/sdb1`
c) `cryptsetup luksCheck /dev/sdb1`
d) `cryptsetup luksTest --passphrase /dev/sdb1`

<details><summary>Respuesta</summary>

**b) Correcta**

La opción `--test-passphrase` permite verificar si una passphrase es válida para desbloquear un volumen LUKS sin realmente abrirlo ni crear un mapeo en `/dev/mapper/`. Es útil para comprobar credenciales de forma segura.

</details>

### Pregunta 13

¿Qué opción en `/etc/crypttab` permite el uso de TRIM en dispositivos SSD cifrados con LUKS, y cuál es su implicación de seguridad?

a) `trim` - no tiene implicaciones de seguridad
b) `discard` - puede revelar qué bloques están en uso y cuáles están vacíos
c) `ssd` - optimiza automáticamente para dispositivos de estado sólido
d) `allow-trim` - permite TRIM solo en bloques ya descifrados

<details><summary>Respuesta</summary>

**b) Correcta**

La opción `discard` habilita el paso de comandos TRIM/DISCARD al dispositivo SSD subyacente. Si bien mejora el rendimiento y la vida útil del SSD, tiene una implicación de seguridad: un atacante puede determinar qué sectores del disco contienen datos y cuáles están vacíos, filtrando información sobre el uso del sistema de archivos.

</details>

### Pregunta 14

¿Qué diferencia fundamental existe entre `cryptsetup luksKillSlot` y `cryptsetup luksRemoveKey`?

a) `luksKillSlot` es más seguro que `luksRemoveKey`
b) `luksKillSlot` elimina un slot por su número; `luksRemoveKey` elimina la clave proporcionando la passphrase
c) `luksRemoveKey` solo funciona con archivos de clave, no con passphrases
d) `luksKillSlot` requiere que el volumen esté abierto; `luksRemoveKey` no

<details><summary>Respuesta</summary>

**b) Correcta**

`luksKillSlot` elimina un slot de clave especificando su número (0-7). `luksRemoveKey` solicita al usuario que introduzca la passphrase que desea eliminar, buscando en todos los slots cuál coincide. Ambos comandos requieren autenticación con una clave válida diferente para evitar la eliminación accidental de la última clave.

</details>

### Pregunta 15

Un administrador monta un directorio con eCryptfs y desea habilitar el cifrado de nombres de archivo. ¿Qué opción de montaje debe usar?

a) `ecryptfs_hide_filenames=yes`
b) `ecryptfs_enable_filename_crypto=yes`
c) `ecryptfs_encrypt_names=true`
d) `ecryptfs_filename_encryption=on`

<details><summary>Respuesta</summary>

**b) Correcta**

La opción `ecryptfs_enable_filename_crypto=yes` habilita el cifrado de nombres de archivo en eCryptfs. Por defecto, eCryptfs solo cifra el contenido de los archivos. Con esta opción, los nombres de archivo también se cifran, ocultando la estructura del directorio a usuarios no autorizados.

</details>

### Pregunta 16

¿Qué comando se utiliza para desmontar un sistema de archivos EncFS montado mediante FUSE?

a) `umount /ruta/punto-montaje`
b) `fusermount -u /ruta/punto-montaje`
c) `encfs --unmount /ruta/punto-montaje`
d) `encfsctl unmount /ruta/punto-montaje`

<details><summary>Respuesta</summary>

**b) Correcta**

`fusermount -u` es el comando estándar para desmontar sistemas de archivos FUSE, incluyendo EncFS. Aunque `umount` también puede funcionar en algunos casos, `fusermount -u` es el método correcto y recomendado para sistemas de archivos en espacio de usuario basados en FUSE.

</details>

### Pregunta 17

¿Cuál es el cifrado por defecto utilizado por `cryptsetup luksFormat` en versiones modernas de LUKS2?

a) `aes-cbc-essiv:sha256`
b) `aes-xts-plain64`
c) `3des-cbc-plain`
d) `chacha20-poly1305`

<details><summary>Respuesta</summary>

**b) Correcta**

El cifrado por defecto en LUKS2 moderno es `aes-xts-plain64` con un tamaño de clave de 512 bits (que en modo XTS equivale a 256 bits efectivos). El modo XTS está diseñado específicamente para cifrado de disco y ofrece mejor seguridad que CBC para este caso de uso.

</details>

### Pregunta 18

¿Qué ventaja principal ofrece eCryptfs sobre dm-crypt/LUKS para el cifrado de directorios home individuales?

a) eCryptfs es más rápido que dm-crypt
b) eCryptfs no necesita una partición dedicada y puede cifrar directorios sobre un sistema de archivos existente
c) eCryptfs cifra todo el disco de forma transparente
d) eCryptfs soporta más algoritmos de cifrado

<details><summary>Respuesta</summary>

**b) Correcta**

eCryptfs es un sistema de archivos apilado que cifra archivos individuales sobre un sistema de archivos existente, sin necesidad de particiones o dispositivos de bloque dedicados. Esto lo hace ideal para cifrar directorios home individuales, ya que cada usuario puede tener su propio directorio cifrado independientemente, sin afectar la estructura de particiones del sistema.

</details>

### Pregunta 19

En la configuración de `/etc/crypttab`, ¿qué valor se especifica en el campo de archivo de clave para solicitar una passphrase interactiva durante el arranque?

a) `password`
b) `interactive`
c) `none`
d) `ask`

<details><summary>Respuesta</summary>

**c) Correcta**

El valor `none` en el campo de archivo de clave de `/etc/crypttab` indica que se solicitará una passphrase interactiva al usuario durante el proceso de arranque. Si se especifica una ruta a un archivo, se usará ese archivo como clave sin intervención del usuario.

</details>

### Pregunta 20

¿Qué comando de `cryptsetup` muestra información detallada sobre la cabecera LUKS, incluyendo los slots de clave activos?

a) `cryptsetup luksInfo /dev/sdb1`
b) `cryptsetup luksDump /dev/sdb1`
c) `cryptsetup luksStatus /dev/sdb1`
d) `cryptsetup luksHeader /dev/sdb1`

<details><summary>Respuesta</summary>

**b) Correcta**

`luksDump` muestra información detallada de la cabecera LUKS: versión, UUID, algoritmo de cifrado, hash, tamaño de clave, y el estado de cada uno de los 8 slots de clave (activo/inactivo). No muestra datos sensibles como las claves o passphrases.

</details>

### Pregunta 21

Escribe el comando para abrir (desbloquear) un volumen LUKS en `/dev/sda2` con el nombre de mapeo `datos_seguros`.

<input type="text" class="fill-blank" data-answer="cryptsetup luksOpen /dev/sda2 datos_seguros" data-alt="cryptsetup open --type luks /dev/sda2 datos_seguros,cryptsetup open /dev/sda2 datos_seguros" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cryptsetup luksOpen /dev/sda2 datos_seguros**

Este comando desbloquea el volumen LUKS y crea el dispositivo mapeado en `/dev/mapper/datos_seguros`. La sintaxis moderna equivalente es `cryptsetup open --type luks /dev/sda2 datos_seguros`. Se solicitará la passphrase para desbloquear.

</details>

### Pregunta 22

Escribe el comando para añadir un archivo de clave (`/root/keyfile`) como método adicional de desbloqueo a un volumen LUKS en `/dev/sdb1`.

<input type="text" class="fill-blank" data-answer="cryptsetup luksAddKey /dev/sdb1 /root/keyfile" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cryptsetup luksAddKey /dev/sdb1 /root/keyfile**

`luksAddKey` añade una nueva clave a un slot disponible. Se requiere proporcionar una clave existente válida para autorizar la operación. El archivo de clave se especifica como último argumento después del dispositivo.

</details>

### Pregunta 23

Escribe el comando para cambiar la passphrase de un volumen LUKS en `/dev/sdc1`.

<input type="text" class="fill-blank" data-answer="cryptsetup luksChangeKey /dev/sdc1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cryptsetup luksChangeKey /dev/sdc1**

`luksChangeKey` solicita primero la passphrase antigua para identificar el slot, y luego pide la nueva passphrase. La operación reemplaza la clave en el mismo slot sin afectar a otros slots ni a la clave maestra del volumen.

</details>

### Pregunta 24

Escribe el comando para crear y montar un directorio cifrado con EncFS, usando `/datos/.cifrado` como directorio cifrado y `/datos/visible` como punto de montaje.

<input type="text" class="fill-blank" data-answer="encfs /datos/.cifrado /datos/visible" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**encfs /datos/.cifrado /datos/visible**

EncFS toma dos argumentos: el directorio donde se almacenarán los datos cifrados y el punto de montaje donde se accederá al contenido descifrado. Si es la primera vez, EncFS preguntará por el modo de configuración (estándar/paranoico) y la passphrase.

</details>

### Pregunta 25

Escribe el comando para cerrar (bloquear) un volumen LUKS mapeado como `datos_cifrados`.

<input type="text" class="fill-blank" data-answer="cryptsetup luksClose datos_cifrados" data-alt="cryptsetup close datos_cifrados" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cryptsetup luksClose datos_cifrados**

`luksClose` (o su equivalente moderno `close`) cierra el mapeo cifrado y elimina el dispositivo de `/dev/mapper/`. Es fundamental desmontar el sistema de archivos con `umount` antes de cerrar el volumen LUKS para evitar pérdida de datos.

</details>
