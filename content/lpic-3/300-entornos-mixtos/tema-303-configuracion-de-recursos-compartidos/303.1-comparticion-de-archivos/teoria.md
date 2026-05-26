---
title: "303.1 - Compartición de Archivos"
description: "Configuración de recursos compartidos de archivos en Samba"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.1"
peso: 4
tags:
  - lpic-3
  - tema-303
  - samba
  - comparticion-archivos
  - smb-conf
  - vfs
---

# 303.1 Compartición de Archivos

## Introducción

La compartición de archivos es una de las funcionalidades principales de Samba. A través del archivo de configuración `smb.conf`, los administradores definen los recursos compartidos (shares) que estarán disponibles para los clientes Windows y Linux en la red. Este subtema cubre los parámetros esenciales de configuración de shares, incluyendo control de acceso, permisos, ocultación de archivos y módulos VFS.

## Estructura básica de un recurso compartido en smb.conf

Cada recurso compartido se define como una sección en `smb.conf` con corchetes:

```ini
[datos]
   comment = Datos corporativos
   path = /srv/samba/datos
   browseable = yes
   writable = yes
   valid users = @empleados
   create mask = 0660
   directory mask = 0770
```

> **Para el examen:** Cada sección en smb.conf (excepto `[global]`) define un recurso compartido. El nombre entre corchetes es el nombre con el que se accede desde la red.

## Parámetros principales de compartición

### path

Define la ruta en el sistema de archivos Linux donde se almacenan los datos del recurso compartido:

```ini
path = /srv/samba/datos
```

El directorio debe existir y tener los permisos adecuados en el sistema de archivos.

### browseable / browsable

Controla si el recurso aparece en la lista de recursos compartidos al navegar la red:

```ini
browseable = yes   # Visible al navegar (por defecto)
browseable = no    # Oculto, pero accesible si se conoce el nombre
```

> **Para el examen:** Un share con `browseable = no` sigue siendo accesible; simplemente no aparece al listar. No confundir con restricción de acceso.

### writable / writeable / read only

Controla si los usuarios pueden escribir en el recurso:

```ini
writable = yes      # Permite escritura
# Equivalente a:
read only = no
```

| Parámetro   | Valor | Efecto                    |
|-------------|-------|---------------------------|
| writable    | yes   | Permite escritura         |
| writable    | no    | Solo lectura              |
| read only   | yes   | Solo lectura (por defecto)|
| read only   | no    | Permite escritura         |

> **Para el examen:** `writable` y `read only` son opuestos. `read only = yes` es el valor por defecto.

### valid users

Restringe el acceso al recurso a usuarios o grupos específicos:

```ini
valid users = usuario1 usuario2 @grupo1
```

- Los nombres de usuario se escriben directamente
- Los grupos se prefijan con `@`
- Si está vacío, todos los usuarios autenticados tienen acceso

### write list y read list

Permiten control granular de lectura y escritura:

```ini
[proyectos]
   path = /srv/samba/proyectos
   read only = yes
   write list = @managers admin
   read list = @auditores
```

- `write list`: usuarios/grupos con permisos de escritura incluso si `read only = yes`
- `read list`: usuarios/grupos limitados a solo lectura incluso si `writable = yes`

> **Para el examen:** `write list` sobrescribe `read only = yes` para los usuarios listados. `read list` sobrescribe `writable = yes`.

### create mask y directory mask

Controlan los permisos máximos para archivos y directorios nuevos:

```ini
create mask = 0664       # Permisos máximos para archivos nuevos
directory mask = 0775    # Permisos máximos para directorios nuevos
```

Estos valores actúan como una máscara AND: los permisos resultantes nunca excederán estos valores.

### force create mode y force directory mode

Fuerzan bits de permisos específicos en archivos y directorios nuevos:

```ini
force create mode = 0660      # Bits forzados en archivos nuevos
force directory mode = 0770   # Bits forzados en directorios nuevos
```

Estos valores actúan como una máscara OR: los bits especificados siempre estarán activos.

| Parámetro            | Operación | Efecto                                   |
|----------------------|-----------|------------------------------------------|
| create mask          | AND       | Limita permisos máximos de archivos      |
| directory mask       | AND       | Limita permisos máximos de directorios   |
| force create mode    | OR        | Garantiza permisos mínimos de archivos   |
| force directory mode | OR        | Garantiza permisos mínimos de directorios|

> **Para el examen:** El orden de aplicación es: primero se aplica `create mask` (AND), luego `force create mode` (OR). El resultado final combina ambos.

## El recurso compartido [homes]

El share especial `[homes]` proporciona directorios personales automáticos:

```ini
[homes]
   comment = Directorio personal de %U
   browseable = no
   writable = yes
   valid users = %S
   create mask = 0700
   directory mask = 0700
```

- Cuando un usuario accede a un share que no existe, Samba busca si el usuario tiene un directorio home en el sistema
- `%S` se sustituye por el nombre del servicio (nombre del usuario)
- `%U` se sustituye por el nombre del usuario conectado

> **Para el examen:** `[homes]` crea shares dinámicos basados en los directorios home de los usuarios del sistema. Con `browseable = no`, solo aparece el share del propio usuario.

## Acceso de invitado (Guest Access)

Para permitir acceso sin autenticación:

```ini
[global]
   map to guest = Bad User
   guest account = nobody

[publico]
   path = /srv/samba/publico
   guest ok = yes
   guest only = yes
   writable = no
```

| Parámetro      | Descripción                                              |
|----------------|----------------------------------------------------------|
| guest ok       | Permite acceso sin contraseña                            |
| guest only     | Fuerza que todos los accesos sean como invitado          |
| map to guest   | Bad User: mapea usuarios desconocidos a invitado         |
| guest account  | Cuenta del sistema usada para el acceso de invitado      |

> **Para el examen:** `map to guest = Bad User` mapea a invitado las conexiones con usuarios que no existen en Samba. Esto es diferente de `Never` (rechaza) o `Bad Password` (mapea si la contraseña falla).

## Ocultar y vetar archivos

### hide files

Oculta archivos del listado pero permite el acceso si se conoce el nombre:

```ini
hide files = /desktop.ini/thumbs.db/.*/
```

- Los patrones se separan con `/`
- Soporta comodines `*` y `?`

### veto files

Bloquea completamente el acceso a archivos específicos:

```ini
veto files = /*.exe/*.bat/*.cmd/
delete veto files = yes
```

- `veto files` impide tanto ver como acceder a los archivos
- `delete veto files = yes` permite eliminar directorios que contienen archivos vetados

> **Para el examen:** `hide files` solo oculta visualmente; `veto files` bloquea el acceso completamente. `delete veto files` controla si un directorio con archivos vetados puede eliminarse.

## Módulo VFS de Papelera de Reciclaje

El módulo VFS `recycle` implementa una papelera de reciclaje en Samba:

```ini
[datos]
   path = /srv/samba/datos
   vfs objects = recycle
   recycle:repository = .papelera
   recycle:keeptree = yes
   recycle:versions = yes
   recycle:touch = yes
   recycle:touch_mtime = yes
   recycle:maxsize = 104857600
   recycle:exclude = *.tmp *.temp ~*
   recycle:exclude_dir = /tmp /cache
```

| Parámetro             | Descripción                                              |
|-----------------------|----------------------------------------------------------|
| vfs objects = recycle | Activa el módulo de reciclaje                            |
| recycle:repository    | Directorio donde se almacenan los archivos eliminados    |
| recycle:keeptree      | Mantiene la estructura de directorios en la papelera     |
| recycle:versions      | Mantiene versiones de archivos con el mismo nombre       |
| recycle:touch         | Actualiza la fecha de acceso al reciclar                 |
| recycle:maxsize       | Tamaño máximo de archivo para reciclar (en bytes)        |
| recycle:exclude       | Patrones de archivos excluidos del reciclaje             |
| recycle:exclude_dir   | Directorios excluidos del reciclaje                      |

> **Para el examen:** VFS (Virtual File System) permite extender la funcionalidad de Samba con módulos. `recycle` es uno de los más comunes. Se activa con `vfs objects = recycle` en la sección del share o en `[global]`.

## Verificación de la configuración

Siempre verificar `smb.conf` después de cambios:

```bash
# Verificar sintaxis
testparm

# Verificar y mostrar configuración de un share específico
testparm -s --section-name=datos

# Ver shares disponibles desde un cliente
smbclient -L //servidor -U usuario
```

## Variables útiles en smb.conf

| Variable | Significado                          |
|----------|--------------------------------------|
| %U       | Nombre del usuario conectado         |
| %G       | Grupo principal del usuario          |
| %S       | Nombre del servicio (share) actual   |
| %H       | Directorio home del usuario          |
| %m       | Nombre NetBIOS del cliente           |
| %I       | Dirección IP del cliente             |
| %D       | Nombre del dominio                   |

## Ejemplo completo de configuración

```ini
[global]
   workgroup = EMPRESA
   server string = Servidor de archivos
   map to guest = Bad User
   guest account = nobody

[homes]
   comment = Directorio personal
   browseable = no
   writable = yes
   valid users = %S
   create mask = 0700

[datos]
   comment = Datos corporativos
   path = /srv/samba/datos
   browseable = yes
   read only = yes
   write list = @editores
   valid users = @empleados
   create mask = 0660
   directory mask = 0770
   force create mode = 0660
   vfs objects = recycle
   recycle:repository = .papelera
   recycle:keeptree = yes
   hide files = /desktop.ini/thumbs.db/
   veto files = /*.exe/*.bat/

[publico]
   comment = Recursos públicos
   path = /srv/samba/publico
   guest ok = yes
   writable = no
```
