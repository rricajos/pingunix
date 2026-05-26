---
tipo: teoria
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
  - cifrado-disco
---

# 331.3 Sistemas de Archivos Cifrados

## Introducción

El cifrado de sistemas de archivos protege los datos en reposo (data at rest) contra acceso no autorizado, incluso si el medio físico es robado. Linux ofrece varias soluciones: dm-crypt/LUKS para cifrado a nivel de bloque, eCryptfs para cifrado a nivel de archivo, y EncFS como solución en espacio de usuario.

> **Para el examen:** Domina los comandos de `cryptsetup` con LUKS. Es el método principal de cifrado de disco en Linux y el más preguntado.

---

## dm-crypt y LUKS

### Conceptos Fundamentales

**dm-crypt** es el subsistema de cifrado a nivel de bloque del kernel Linux, basado en device-mapper. **LUKS** (Linux Unified Key Setup) es el estándar que añade:

- Cabecera con metadatos del cifrado
- Soporte para hasta 8 slots de clave (contraseñas diferentes)
- Gestión estandarizada de claves
- Portabilidad entre distribuciones

| Componente | Descripción |
|-----------|-------------|
| dm-crypt | Capa de cifrado del kernel (device-mapper) |
| LUKS | Formato estándar con cabecera y gestión de claves |
| cryptsetup | Herramienta de línea de comandos para gestionar ambos |

### Crear Volumen LUKS

```bash
# Formatear partición con LUKS (destruye datos existentes)
cryptsetup luksFormat /dev/sdb1

# Con opciones específicas de cifrado
cryptsetup luksFormat --cipher aes-xts-plain64 \
  --key-size 512 --hash sha512 /dev/sdb1

# Abrir (desbloquear) el volumen
cryptsetup luksOpen /dev/sdb1 datos_cifrados
# Equivalente moderno:
cryptsetup open --type luks /dev/sdb1 datos_cifrados

# Crear sistema de archivos en el volumen descifrado
mkfs.ext4 /dev/mapper/datos_cifrados

# Montar
mount /dev/mapper/datos_cifrados /mnt/datos

# Desmontar y cerrar
umount /mnt/datos
cryptsetup luksClose datos_cifrados
# Equivalente moderno:
cryptsetup close datos_cifrados
```

### Gestión de Claves LUKS

LUKS soporta hasta 8 slots de clave (0-7), permitiendo múltiples contraseñas o archivos de clave.

```bash
# Ver información del volumen LUKS
cryptsetup luksDump /dev/sdb1

# Añadir nueva clave (slot adicional)
cryptsetup luksAddKey /dev/sdb1

# Añadir clave en slot específico
cryptsetup luksAddKey --key-slot 3 /dev/sdb1

# Usar archivo como clave
dd if=/dev/urandom of=/root/keyfile bs=4096 count=1
chmod 600 /root/keyfile
cryptsetup luksAddKey /dev/sdb1 /root/keyfile

# Abrir con archivo de clave
cryptsetup luksOpen --key-file /root/keyfile /dev/sdb1 datos

# Eliminar una clave (por slot)
cryptsetup luksKillSlot /dev/sdb1 3

# Eliminar una clave (por passphrase)
cryptsetup luksRemoveKey /dev/sdb1

# Cambiar passphrase
cryptsetup luksChangeKey /dev/sdb1
```

> **Para el examen:** Recuerda que `luksAddKey` requiere una clave existente válida para añadir una nueva. `luksKillSlot` elimina por número de slot, `luksRemoveKey` por passphrase.

### Backup y Restauración de Cabecera LUKS

La cabecera LUKS es crítica: si se corrompe, los datos se pierden irrecuperablemente.

```bash
# Backup de la cabecera
cryptsetup luksHeaderBackup /dev/sdb1 \
  --header-backup-file /ruta/segura/cabecera-backup.img

# Restaurar cabecera
cryptsetup luksHeaderRestore /dev/sdb1 \
  --header-backup-file /ruta/segura/cabecera-backup.img

# Verificar estado
cryptsetup status datos_cifrados

# Test de passphrase sin abrir
cryptsetup luksOpen --test-passphrase /dev/sdb1
```

---

## Configuración Persistente: /etc/crypttab

El archivo `/etc/crypttab` permite configurar volúmenes cifrados para que se desbloqueen automáticamente durante el arranque.

```bash
# Formato: nombre   dispositivo   archivo_clave   opciones
# /etc/crypttab

# Desbloqueo con passphrase al arrancar
datos_cifrados  /dev/sdb1   none    luks

# Desbloqueo con archivo de clave
datos_cifrados  UUID=xxxx-xxxx  /root/keyfile   luks

# Con opciones adicionales
datos_cifrados  /dev/sdb1   /root/keyfile   luks,discard,noauto

# Swap cifrado (clave aleatoria en cada arranque)
swap_cifrado    /dev/sdb2   /dev/urandom    swap,cipher=aes-xts-plain64,size=256
```

Opciones comunes de crypttab:

| Opción | Descripción |
|--------|-------------|
| `luks` | Usar formato LUKS |
| `noauto` | No desbloquear automáticamente |
| `discard` | Permitir TRIM (SSD), con implicaciones de seguridad |
| `swap` | Formatear como swap tras abrir |
| `cipher=` | Especificar algoritmo de cifrado |
| `size=` | Tamaño de clave en bits |
| `tries=` | Número de intentos de contraseña |

Tras modificar `/etc/crypttab`, añadir la entrada correspondiente en `/etc/fstab`:

```bash
# /etc/fstab
/dev/mapper/datos_cifrados  /mnt/datos  ext4  defaults  0  2
```

---

## dm-crypt en Modo Plano (Plain Mode)

El modo plano no utiliza cabecera LUKS. Es más simple pero menos flexible.

```bash
# Abrir en modo plano
cryptsetup open --type plain /dev/sdb1 datos_plain \
  --cipher aes-xts-plain64 --key-size 256

# O con la sintaxis antigua
cryptsetup create datos_plain /dev/sdb1

# Cerrar
cryptsetup close datos_plain
```

| Característica | LUKS | Plain mode |
|---------------|------|------------|
| Cabecera de metadatos | Si | No |
| Múltiples claves | Si (8 slots) | No |
| Detectable como cifrado | Si | No (denegabilidad plausible) |
| Cambio de contraseña | Si | No (hay que re-cifrar) |

---

## LUKS sobre LVM

Se puede combinar LUKS con LVM de dos formas:

### Opción 1: LUKS sobre LVM (cifrar volúmenes lógicos individuales)

```bash
# Crear LVM primero, luego cifrar cada LV
pvcreate /dev/sdb1
vgcreate vg_datos /dev/sdb1
lvcreate -L 10G -n lv_sensible vg_datos

# Cifrar el volumen lógico
cryptsetup luksFormat /dev/vg_datos/lv_sensible
cryptsetup luksOpen /dev/vg_datos/lv_sensible sensible
mkfs.ext4 /dev/mapper/sensible
```

### Opcion 2: LVM sobre LUKS (cifrar todo el grupo de volúmenes)

```bash
# Cifrar primero, luego crear LVM dentro
cryptsetup luksFormat /dev/sdb1
cryptsetup luksOpen /dev/sdb1 cifrado

# LVM sobre el volumen descifrado
pvcreate /dev/mapper/cifrado
vgcreate vg_seguro /dev/mapper/cifrado
lvcreate -L 10G -n lv_datos vg_seguro
mkfs.ext4 /dev/vg_seguro/lv_datos
```

> **Para el examen:** LVM sobre LUKS es la configuración preferida por muchos instaladores de distribuciones porque cifra todo el grupo de volúmenes con una sola passphrase.

---

## Swap Cifrado

```bash
# Swap cifrado con clave aleatoria (en /etc/crypttab)
swap_cifrado  /dev/sdb2  /dev/urandom  swap,cipher=aes-xts-plain64,size=256

# En /etc/fstab
/dev/mapper/swap_cifrado  none  swap  sw  0  0
```

---

## LUKS en initramfs

Para cifrar la partición raíz, se necesita soporte en initramfs:

```bash
# Debian/Ubuntu: actualizar initramfs con soporte LUKS
update-initramfs -u

# RHEL/CentOS: regenerar initramfs con dracut
dracut --force

# Verificar que los módulos de cifrado están incluidos
lsinitrd /boot/initramfs-$(uname -r).img | grep crypt
```

---

## eCryptfs

eCryptfs es un sistema de cifrado a nivel de archivo apilado sobre un sistema de archivos existente. Cifra archivos individualmente.

```bash
# Montar directorio cifrado
mount -t ecryptfs /datos/cifrados /datos/cifrados

# Opciones interactivas: algoritmo, tamaño de clave, paso de nombre de archivo

# Montar con opciones explícitas
mount -t ecryptfs /datos/cifrados /datos/cifrados \
  -o ecryptfs_cipher=aes,ecryptfs_key_bytes=32,\
ecryptfs_passthrough=no,ecryptfs_enable_filename_crypto=yes

# Desmontar
umount /datos/cifrados
```

Características de eCryptfs:

- Cifra archivo por archivo (no todo el bloque)
- Metadatos en las cabeceras de cada archivo
- No necesita partición dedicada
- Útil para cifrar directorios home individuales

---

## EncFS

EncFS es una solución de cifrado en espacio de usuario basada en FUSE. Más simple pero con limitaciones de seguridad conocidas.

```bash
# Crear/montar directorio cifrado
encfs /ruta/datos-cifrados /ruta/punto-montaje

# Primera vez: elegir modo (estándar/paranoico)
# Subsiguientes: pide passphrase

# Desmontar
fusermount -u /ruta/punto-montaje

# Cambiar passphrase
encfsctl passwd /ruta/datos-cifrados
```

| Característica | dm-crypt/LUKS | eCryptfs | EncFS |
|---------------|---------------|----------|-------|
| Nivel de cifrado | Bloque | Archivo (kernel) | Archivo (FUSE) |
| Necesita partición | Si | No | No |
| Rendimiento | Alto | Medio | Bajo |
| Cifrado de nombres | N/A | Opcional | Opcional |
| Uso principal | Discos/particiones | Directorios home | Directorios individuales |

> **Para el examen:** Conoce las diferencias entre cifrado a nivel de bloque (dm-crypt/LUKS) y a nivel de archivo (eCryptfs, EncFS). dm-crypt protege toda la partición; eCryptfs permite cifrar archivos selectivamente.
