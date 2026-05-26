---
tipo: teoria
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
  - dac
---

# 333.1 Control de Acceso Discrecional (DAC)

## Introduccion

El Control de Acceso Discrecional (DAC) es el modelo de seguridad tradicional de Unix donde el propietario de un recurso decide quien puede acceder a el. Incluye permisos rwx, bits especiales (SUID, SGID, sticky), umask, ACLs POSIX y atributos extendidos.

> **Para el examen:** Domina los permisos especiales (SUID/SGID/sticky), las ACLs POSIX (getfacl/setfacl) incluyendo ACLs por defecto y mascara, y los atributos extendidos con chattr.

---

## Permisos Tradicionales Unix

### Permisos Basicos (rwx)

| Permiso | Archivo | Directorio |
|---------|---------|------------|
| r (4) | Leer contenido | Listar contenido |
| w (2) | Modificar contenido | Crear/eliminar archivos |
| x (1) | Ejecutar | Acceder (cd) al directorio |

```bash
# Ver permisos
ls -la archivo.txt
# -rw-r--r-- 1 usuario grupo 1024 Jan 15 10:00 archivo.txt

# Cambiar permisos (octal)
chmod 750 archivo.sh    # rwxr-x---

# Cambiar permisos (simbolico)
chmod u+x,g-w,o= archivo.sh

# Cambiar propietario
chown usuario:grupo archivo.txt

# Cambiar solo grupo
chgrp nuevo_grupo archivo.txt

# Recursivo
chmod -R 750 /var/www/
chown -R www-data:www-data /var/www/
```

### Bits Especiales

#### SUID (Set User ID) - 4000

Cuando se establece en un ejecutable, el proceso se ejecuta con los permisos del **propietario** del archivo, no del usuario que lo ejecuta.

```bash
# Establecer SUID
chmod u+s archivo
chmod 4755 archivo

# Ejemplo: passwd tiene SUID para modificar /etc/shadow
ls -la /usr/bin/passwd
# -rwsr-xr-x 1 root root ... /usr/bin/passwd

# Buscar archivos con SUID
find / -perm -4000 -type f 2>/dev/null
```

#### SGID (Set Group ID) - 2000

En ejecutables: el proceso hereda el grupo del archivo. En directorios: los nuevos archivos heredan el grupo del directorio.

```bash
# Establecer SGID
chmod g+s directorio/
chmod 2770 directorio/

# Ejemplo: directorio compartido
mkdir /datos/proyecto
chgrp equipo /datos/proyecto
chmod 2770 /datos/proyecto
# Todos los archivos nuevos tendran grupo "equipo"

# Buscar directorios con SGID
find / -perm -2000 -type d 2>/dev/null
```

#### Sticky Bit - 1000

En directorios: solo el propietario del archivo (o root) puede eliminarlo, aunque otros tengan permiso de escritura en el directorio.

```bash
# Establecer sticky bit
chmod +t directorio/
chmod 1777 directorio/

# Ejemplo clasico: /tmp
ls -ld /tmp
# drwxrwxrwt 15 root root ... /tmp

# Buscar directorios con sticky bit
find / -perm -1000 -type d 2>/dev/null
```

> **Para el examen:** SUID en archivos ejecutables es un riesgo de seguridad potencial. Audita regularmente archivos con SUID/SGID. SUID no funciona en scripts interpretados por seguridad.

---

## umask

La umask define los permisos que se **eliminan** al crear nuevos archivos y directorios.

```bash
# Ver umask actual
umask          # Formato octal (ej: 0022)
umask -S       # Formato simbolico (ej: u=rwx,g=rx,o=rx)

# Establecer umask
umask 0027     # Archivos: 640, Directorios: 750

# Calcular permisos resultantes:
# Archivos: 666 - umask = permisos
# Directorios: 777 - umask = permisos

# Ejemplo con umask 0022:
# Archivos:    666 - 022 = 644 (rw-r--r--)
# Directorios: 777 - 022 = 755 (rwxr-xr-x)

# Ejemplo con umask 0077:
# Archivos:    666 - 077 = 600 (rw-------)
# Directorios: 777 - 077 = 700 (rwx------)
```

| umask | Archivos | Directorios | Uso |
|-------|----------|-------------|-----|
| 0022 | 644 | 755 | Por defecto |
| 0027 | 640 | 750 | Restrictivo |
| 0077 | 600 | 700 | Muy restrictivo |
| 0002 | 664 | 775 | Colaborativo |

Configuracion persistente:

```bash
# Para todos los usuarios: /etc/profile o /etc/bashrc
umask 0027

# Para un usuario: ~/.bashrc
umask 0077

# Para PAM: /etc/pam.d/common-session
session optional pam_umask.so umask=0027
```

---

## ACLs POSIX (Listas de Control de Acceso)

Las ACLs POSIX extienden el modelo de permisos tradicional permitiendo definir permisos para usuarios y grupos adicionales.

### Requisitos

```bash
# El sistema de archivos debe montarse con soporte ACL
mount -o acl /dev/sda1 /datos
# O en /etc/fstab:
/dev/sda1  /datos  ext4  defaults,acl  0  2

# Nota: ext4 y xfs soportan ACLs por defecto
```

### Comandos Basicos

```bash
# Ver ACLs de un archivo
getfacl archivo.txt

# Salida ejemplo:
# file: archivo.txt
# owner: maria
# group: equipo
# user::rw-
# user:juan:rw-
# group::r--
# group:auditores:r--
# mask::rw-
# other::---

# Establecer ACL para un usuario
setfacl -m u:juan:rw archivo.txt

# Establecer ACL para un grupo
setfacl -m g:auditores:r archivo.txt

# Eliminar ACL de un usuario
setfacl -x u:juan archivo.txt

# Eliminar todas las ACLs
setfacl -b archivo.txt

# Copiar ACLs de un archivo a otro
getfacl archivo1.txt | setfacl --set-file=- archivo2.txt
```

### ACLs por Defecto (Default ACLs)

Las ACLs por defecto se aplican a directorios y se heredan automaticamente por los nuevos archivos y subdirectorios creados dentro.

```bash
# Establecer ACL por defecto en directorio
setfacl -d -m u:juan:rwx /datos/proyecto/
setfacl -d -m g:equipo:rx /datos/proyecto/

# Ver ACLs por defecto
getfacl /datos/proyecto/
# default:user::rwx
# default:user:juan:rwx
# default:group::r-x
# default:group:equipo:r-x
# default:mask::rwx
# default:other::---

# Eliminar ACLs por defecto
setfacl -k /datos/proyecto/
```

### La Mascara (mask)

La mascara establece los permisos maximos efectivos para usuarios y grupos adicionales (no el propietario ni "otros").

```bash
# Establecer mascara
setfacl -m m::rx archivo.txt

# Permisos efectivos:
# Si un usuario tiene ACL rw- pero la mascara es r-x
# Los permisos efectivos son r-- (interseccion)
```

| Entrada ACL | Afectada por mask |
|-------------|-------------------|
| user:: (propietario) | No |
| user:nombre: | Si |
| group:: (grupo propietario) | Si |
| group:nombre: | Si |
| mask:: | N/A (es la mascara) |
| other:: | No |

> **Para el examen:** `chmod` en un archivo con ACLs modifica la mascara, no los permisos del grupo propietario. Un `+` al final de `ls -l` indica presencia de ACLs.

### Opciones Avanzadas de setfacl

```bash
# Aplicar recursivamente
setfacl -R -m u:juan:rx /datos/

# Establecer ACLs desde archivo
setfacl --restore=backup_acls.txt

# Backup de ACLs
getfacl -R /datos/ > backup_acls.txt

# Modificar multiples entradas a la vez
setfacl -m u:juan:rwx,g:equipo:rx,o::- archivo.txt
```

---

## Atributos Extendidos (Extended Attributes)

### xattr con getfattr / setfattr

Los atributos extendidos permiten almacenar metadatos adicionales en archivos.

```bash
# Establecer atributo
setfattr -n user.descripcion -v "Datos confidenciales" archivo.txt

# Ver atributos
getfattr archivo.txt
getfattr -n user.descripcion archivo.txt

# Listar todos los atributos con valores
getfattr -d archivo.txt

# Eliminar atributo
setfattr -x user.descripcion archivo.txt
```

### chattr - Atributos de Sistema de Archivos

`chattr` modifica atributos especiales del sistema de archivos (ext2/ext3/ext4).

```bash
# Hacer archivo inmutable (ni root puede modificarlo)
chattr +i archivo.txt

# Quitar inmutabilidad
chattr -i archivo.txt

# Solo permitir añadir contenido (append-only)
chattr +a archivo.log

# Ver atributos
lsattr archivo.txt
# ----i--------e-- archivo.txt

# Aplicar recursivamente
chattr -R +i /etc/configuracion/
```

| Atributo | Letra | Descripcion |
|----------|-------|-------------|
| Immutable | `i` | No se puede modificar, eliminar, renombrar ni enlazar |
| Append-only | `a` | Solo se puede añadir contenido (ideal para logs) |
| No dump | `d` | Excluido de backups con dump |
| Secure deletion | `s` | Los bloques se sobreescriben al eliminar |
| Undeletable | `u` | El contenido se guarda al eliminar (permite recuperar) |
| No atime | `A` | No actualizar tiempo de acceso |
| Synchronous | `S` | Escrituras sincronas |

> **Para el examen:** `chattr +i` hace un archivo completamente inmutable: ni siquiera root puede modificarlo o eliminarlo sin quitar primero el atributo. Esto es muy util para proteger archivos criticos como `/etc/passwd`.
