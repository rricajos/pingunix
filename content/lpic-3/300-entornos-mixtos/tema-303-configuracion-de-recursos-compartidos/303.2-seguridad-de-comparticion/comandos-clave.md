---
title: "303.2 - Comandos Clave: Seguridad de Compartición"
description: "Referencia rápida de comandos y parámetros de seguridad para shares de Samba"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.2"
peso: 4
tags:
  - lpic-3
  - tema-303
  - samba
  - seguridad
  - comandos
---

# 303.2 Comandos Clave - Seguridad de Compartición

## Comandos de gestión de ACLs

| Comando / Herramienta | Descripción                                           |
|------------------------|-------------------------------------------------------|
| `smbcacls //srv/share archivo -U user` | Ver ACLs NT de un archivo               |
| `smbcacls ... -a "ACL:..."` | Añadir una ACL NT                              |
| `smbcacls ... -M "ACL:..."` | Modificar una ACL NT existente                 |
| `smbcacls ... -D "ACL:..."` | Eliminar una ACL NT                            |
| `smbcacls ... -S "..."` | Establecer descriptor de seguridad completo        |
| `smbcacls ... --set-owner=user` | Cambiar propietario NT                    |
| `setfacl -m u:user:rwx ruta` | Establecer ACL POSIX                         |
| `setfacl -d -m g:grupo:rx ruta` | ACL POSIX por defecto                     |
| `setfacl -R -m g:grupo:rx ruta` | ACL POSIX recursiva                       |
| `setfacl -b ruta`       | Eliminar todas las ACLs POSIX                       |
| `getfacl ruta`           | Ver ACLs POSIX de un archivo/directorio             |

## Formato de ACL NT para smbcacls

```
ACL:DOMINIO\usuario:TIPO/FLAGS/PERMISOS
```

| Campo    | Valores posibles                                     |
|----------|------------------------------------------------------|
| TIPO     | `ALLOWED`, `DENIED`                                  |
| FLAGS    | `0x0` (sin herencia), `0x03` (herencia completa)     |
| PERMISOS | `FULL`, `CHANGE`, `READ`, `WRITE`, máscara hex       |

## Parámetros de seguridad en smb.conf

| Parámetro                   | Valor por defecto | Descripción                                    |
|-----------------------------|-------------------|------------------------------------------------|
| `nt acl support`            | yes               | Habilitar soporte de ACLs NT                   |
| `inherit permissions`       | no                | Heredar permisos POSIX del directorio padre     |
| `inherit acls`              | no                | Heredar ACLs por defecto del padre              |
| `map acl inherit`           | no                | Mapear herencia NT a ACLs POSIX por defecto     |
| `acl group control`         | no                | Grupo propietario puede gestionar ACLs          |
| `access based share enum`   | no                | Solo mostrar shares accesibles al usuario       |
| `hosts allow`               | (vacío = todos)   | IPs/redes permitidas                            |
| `hosts deny`                | (vacío)           | IPs/redes denegadas                             |
| `store dos attributes`      | no                | Almacenar atributos DOS en xattrs               |
| `vfs objects = acl_xattr`   | (no activado)     | Almacenar ACLs NT en atributos extendidos       |

## Comandos de diagnóstico

```bash
# Verificar permisos del sistema de archivos
ls -la /srv/samba/datos/
getfacl /srv/samba/datos/

# Verificar ACLs NT en un share
smbcacls //servidor/share archivo.txt -U admin

# Probar acceso como usuario específico
smbclient //servidor/share -U usuario -c "ls; put testfile"

# Verificar configuración de Samba
testparm -s

# Log detallado de permisos
# En smb.conf: log level = 3 auth:10 acls:10
```
