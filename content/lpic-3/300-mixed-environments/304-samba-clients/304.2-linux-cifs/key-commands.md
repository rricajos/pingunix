---
title: "304.2 - Comandos Clave: Clientes CIFS Linux"
description: "Referencia rápida de comandos para clientes CIFS en Linux"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 304 - Configuración de Clientes Samba"
subtema: "304.2"
peso: 3
tags:
  - lpic-3
  - tema-304
  - samba
  - cifs
  - comandos
---

# 304.2 Comandos Clave - Clientes CIFS Linux

## Montaje CIFS

| Comando / Opción                             | Descripción                                |
|----------------------------------------------|--------------------------------------------|
| `mount -t cifs //srv/share /mnt -o opts`     | Montar share CIFS                          |
| `mount.cifs //srv/share /mnt -o opts`        | Equivalente al anterior                    |
| `umount /mnt/share`                          | Desmontar share                            |
| `umount -l /mnt/share`                       | Desmontar lazy (forzado)                   |

## Opciones principales de mount.cifs

| Opción              | Descripción                                      |
|---------------------|--------------------------------------------------|
| `username=`         | Usuario para autenticación                       |
| `password=`         | Contraseña (usar credentials= en su lugar)       |
| `domain=`           | Dominio o workgroup                              |
| `credentials=`      | Archivo de credenciales (más seguro)             |
| `uid=`              | UID propietario local de archivos                |
| `gid=`              | GID propietario local de archivos                |
| `file_mode=`        | Permisos para archivos                           |
| `dir_mode=`         | Permisos para directorios                        |
| `sec=`              | Método de autenticación                          |
| `vers=`             | Versión de protocolo SMB                         |
| `multiuser`         | Montaje multiusuario                             |
| `_netdev`           | Esperar a que la red esté disponible             |
| `x-systemd.automount` | Montaje automático al acceder (systemd)       |

## Opciones sec= (seguridad)

| Valor      | Descripción                                        |
|------------|----------------------------------------------------|
| `krb5`     | Kerberos (autenticación)                           |
| `krb5i`    | Kerberos + integridad                              |
| `krb5p`    | Kerberos + cifrado (privacidad)                    |
| `ntlmv2`   | NTLMv2                                            |
| `ntlmssp`  | NTLM Security Support Provider                    |
| `none`     | Sin autenticación                                  |

## Comandos smbclient

| Comando                                    | Descripción                        |
|--------------------------------------------|------------------------------------|
| `smbclient -L //servidor -U user`          | Listar shares del servidor         |
| `smbclient //srv/share -U user`            | Conexión interactiva               |
| `smbclient //srv/share -U user -c "ls"`    | Modo batch                         |
| `smbclient //srv/share -k`                 | Autenticación Kerberos             |
| `smbclient //srv/share -N`                 | Sin contraseña (anónimo)           |
| `smbclient //srv/share -A authfile`        | Archivo de autenticación           |

## Comandos dentro de smbclient interactivo

| Comando          | Descripción                                    |
|------------------|------------------------------------------------|
| `ls`             | Listar archivos                                |
| `cd dir`         | Cambiar directorio remoto                      |
| `lcd dir`        | Cambiar directorio local                       |
| `get archivo`    | Descargar archivo                              |
| `put archivo`    | Subir archivo                                  |
| `mget patrón`    | Descargar múltiples archivos                   |
| `mput patrón`    | Subir múltiples archivos                       |
| `mkdir dir`      | Crear directorio                               |
| `rm archivo`     | Eliminar archivo                               |
| `exit`           | Salir                                          |

## Credenciales multiusuario

```bash
cifscreds add servidor        # Añadir credenciales
cifscreds update servidor     # Actualizar credenciales
cifscreds clear servidor      # Eliminar credenciales
cifscreds clearall            # Eliminar todas
```

## Configuración autofs para CIFS

```
# /etc/auto.master
/mnt/cifs  /etc/auto.cifs  --timeout=300

# /etc/auto.cifs
share  -fstype=cifs,credentials=/etc/samba/creds  ://servidor/share
*      -fstype=cifs,credentials=/etc/samba/creds  ://servidor/&
```

## Monitorización

```bash
cifsiostat 5                  # Estadísticas I/O cada 5 segundos
mount | grep cifs             # Ver montajes CIFS activos
cat /proc/fs/cifs/Stats       # Estadísticas detalladas del kernel
```
