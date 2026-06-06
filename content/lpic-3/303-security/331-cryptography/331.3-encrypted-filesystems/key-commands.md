---
tipo: comandos
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

# Comandos Clave - 331.3 Sistemas de Archivos Cifrados

## LUKS - Operaciones Básicas

| Comando | Descripción |
|---------|-------------|
| `cryptsetup luksFormat /dev/sdX` | Formatear partición con LUKS |
| `cryptsetup luksFormat --cipher aes-xts-plain64 --key-size 512 /dev/sdX` | Formatear con cifrado específico |
| `cryptsetup luksOpen /dev/sdX nombre` | Abrir (desbloquear) volumen LUKS |
| `cryptsetup open --type luks /dev/sdX nombre` | Abrir volumen (sintaxis moderna) |
| `cryptsetup luksClose nombre` | Cerrar volumen LUKS |
| `cryptsetup close nombre` | Cerrar volumen (sintaxis moderna) |
| `cryptsetup luksDump /dev/sdX` | Mostrar información de cabecera LUKS |
| `cryptsetup status nombre` | Ver estado del volumen abierto |
| `cryptsetup luksOpen --test-passphrase /dev/sdX` | Probar passphrase sin abrir |

## LUKS - Gestión de Claves

| Comando | Descripción |
|---------|-------------|
| `cryptsetup luksAddKey /dev/sdX` | Añadir nueva passphrase |
| `cryptsetup luksAddKey --key-slot 3 /dev/sdX` | Añadir clave en slot específico |
| `cryptsetup luksAddKey /dev/sdX /root/keyfile` | Añadir archivo de clave |
| `cryptsetup luksOpen --key-file /root/keyfile /dev/sdX nombre` | Abrir con archivo de clave |
| `cryptsetup luksRemoveKey /dev/sdX` | Eliminar clave por passphrase |
| `cryptsetup luksKillSlot /dev/sdX 3` | Eliminar slot de clave específico |
| `cryptsetup luksChangeKey /dev/sdX` | Cambiar passphrase existente |

## LUKS - Cabecera y Backup

| Comando | Descripción |
|---------|-------------|
| `cryptsetup luksHeaderBackup /dev/sdX --header-backup-file backup.img` | Backup de cabecera |
| `cryptsetup luksHeaderRestore /dev/sdX --header-backup-file backup.img` | Restaurar cabecera |
| `dd if=/dev/urandom of=/root/keyfile bs=4096 count=1` | Generar archivo de clave |

## dm-crypt Modo Plano

| Comando | Descripción |
|---------|-------------|
| `cryptsetup open --type plain /dev/sdX nombre` | Abrir en modo plano |
| `cryptsetup create nombre /dev/sdX` | Crear mapeo en modo plano (sintaxis antigua) |

## eCryptfs y EncFS

| Comando | Descripción |
|---------|-------------|
| `mount -t ecryptfs /origen /destino` | Montar directorio con eCryptfs |
| `encfs /cifrado /punto-montaje` | Montar directorio con EncFS |
| `fusermount -u /punto-montaje` | Desmontar EncFS |
| `encfsctl passwd /cifrado` | Cambiar passphrase de EncFS |

## Archivos de Configuración

| Archivo | Descripción |
|---------|-------------|
| `/etc/crypttab` | Configuración de volúmenes cifrados para arranque |
| `/etc/fstab` | Montaje de volúmenes descifrados |
| `update-initramfs -u` | Actualizar initramfs con soporte LUKS (Debian) |
| `dracut --force` | Regenerar initramfs con soporte LUKS (RHEL) |

## Formato de /etc/crypttab

```
# nombre         dispositivo        clave           opciones
datos_cifrados   UUID=xxx-xxx       none            luks
datos_auto       /dev/sdb1          /root/keyfile   luks,discard
swap_cifrado     /dev/sdb2          /dev/urandom    swap,cipher=aes-xts-plain64,size=256
```
