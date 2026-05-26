---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "333 - Control de Acceso"
tema: "333.1 - Control de acceso discrecional"
subtema: "333.1"
peso: 3
tags:
  - lpic-3
  - tema-333
  - permisos
  - acl
  - xattr
---

# Comandos Clave - 333.1 Control de Acceso Discrecional

## Permisos Tradicionales

| Comando | Descripcion |
|---------|-------------|
| `chmod 750 archivo` | Establecer permisos (octal) |
| `chmod u+s archivo` | Establecer SUID |
| `chmod g+s directorio/` | Establecer SGID |
| `chmod +t directorio/` | Establecer sticky bit |
| `chmod 4755 archivo` | SUID + rwxr-xr-x |
| `chmod 2770 directorio/` | SGID + rwxrwx--- |
| `chmod 1777 directorio/` | Sticky + rwxrwxrwx |
| `chown usuario:grupo archivo` | Cambiar propietario y grupo |
| `chgrp grupo archivo` | Cambiar solo grupo |
| `find / -perm -4000 -type f` | Buscar archivos con SUID |
| `find / -perm -2000 -type d` | Buscar directorios con SGID |

## umask

| Comando | Descripcion |
|---------|-------------|
| `umask` | Ver umask actual (octal) |
| `umask -S` | Ver umask actual (simbolico) |
| `umask 0027` | Archivos 640, directorios 750 |
| `umask 0077` | Archivos 600, directorios 700 |

## ACLs POSIX

| Comando | Descripcion |
|---------|-------------|
| `getfacl archivo` | Ver ACLs de un archivo |
| `setfacl -m u:usuario:rwx archivo` | Añadir ACL de usuario |
| `setfacl -m g:grupo:rx archivo` | Añadir ACL de grupo |
| `setfacl -m m::rx archivo` | Establecer mascara |
| `setfacl -x u:usuario archivo` | Eliminar ACL de usuario |
| `setfacl -b archivo` | Eliminar todas las ACLs |
| `setfacl -d -m u:usuario:rwx dir/` | ACL por defecto (herencia) |
| `setfacl -k dir/` | Eliminar ACLs por defecto |
| `setfacl -R -m u:usuario:rx dir/` | Aplicar ACL recursivamente |
| `getfacl -R dir/ > backup.txt` | Backup de ACLs |
| `setfacl --restore=backup.txt` | Restaurar ACLs desde backup |
| `getfacl f1 \| setfacl --set-file=- f2` | Copiar ACLs entre archivos |

## Atributos Extendidos (xattr)

| Comando | Descripcion |
|---------|-------------|
| `setfattr -n user.clave -v "valor" archivo` | Establecer atributo |
| `getfattr archivo` | Listar atributos |
| `getfattr -d archivo` | Listar con valores |
| `getfattr -n user.clave archivo` | Ver atributo especifico |
| `setfattr -x user.clave archivo` | Eliminar atributo |

## chattr / lsattr

| Comando | Descripcion |
|---------|-------------|
| `chattr +i archivo` | Hacer inmutable |
| `chattr -i archivo` | Quitar inmutabilidad |
| `chattr +a archivo` | Solo append (añadir) |
| `chattr -a archivo` | Quitar append-only |
| `chattr -R +i directorio/` | Inmutable recursivo |
| `lsattr archivo` | Ver atributos del archivo |
| `lsattr -d directorio/` | Ver atributos del directorio |

## Bits Especiales - Referencia Rapida

| Bit | Octal | Simbolico | En archivo | En directorio |
|-----|-------|-----------|------------|---------------|
| SUID | 4000 | `u+s` | Ejecuta como propietario | (sin efecto) |
| SGID | 2000 | `g+s` | Ejecuta como grupo | Nuevos archivos heredan grupo |
| Sticky | 1000 | `+t` | (sin efecto) | Solo propietario puede borrar |
