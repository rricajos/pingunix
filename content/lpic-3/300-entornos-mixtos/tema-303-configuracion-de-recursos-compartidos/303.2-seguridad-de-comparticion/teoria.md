---
title: "303.2 - Seguridad de Compartición"
description: "Seguridad y control de acceso en recursos compartidos de Samba"
tipo: teoria
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
  - acl
  - permisos
---

# 303.2 Seguridad de Compartición

## Introducción

La seguridad de los recursos compartidos en Samba implica la interacción entre múltiples capas de permisos: los permisos POSIX del sistema de archivos Linux, las ACLs POSIX extendidas, las ACLs NT de Windows y los parámetros de control de acceso de Samba. Comprender cómo estas capas interactúan es fundamental para configurar correctamente la seguridad en entornos mixtos.

## Interacción entre permisos Linux y Samba

### Permisos efectivos

El acceso efectivo a un archivo se determina por la intersección más restrictiva entre:

1. **Permisos de Samba** (definidos en smb.conf)
2. **Permisos del sistema de archivos** (POSIX / ACLs)

```
Acceso efectivo = Permisos Samba ∩ Permisos del sistema de archivos
```

> **Para el examen:** Samba nunca puede otorgar más permisos de los que permite el sistema de archivos. Si el sistema de archivos deniega la escritura, aunque Samba permita `writable = yes`, el usuario no podrá escribir.

### Ejemplo práctico

```ini
# smb.conf
[datos]
   path = /srv/samba/datos
   writable = yes
   valid users = @empleados
```

```bash
# Sistema de archivos
drwxrwx--- root empleados /srv/samba/datos
```

Un usuario del grupo `empleados` podrá escribir porque tanto Samba (`writable = yes`) como el sistema de archivos (`rwx` para el grupo) lo permiten.

## ACLs POSIX en recursos compartidos

Las ACLs POSIX proporcionan control de acceso más granular que los permisos Unix tradicionales:

```bash
# Establecer ACL
setfacl -m u:usuario1:rwx /srv/samba/datos
setfacl -m g:contabilidad:rx /srv/samba/datos

# ACL por defecto para nuevos archivos
setfacl -d -m g:contabilidad:rx /srv/samba/datos

# Ver ACLs
getfacl /srv/samba/datos
```

Para que Samba respete las ACLs POSIX, el sistema de archivos debe soportarlas (ext4, xfs) y estar montado con soporte ACL.

> **Para el examen:** Las ACLs por defecto (`default:`) se aplican automáticamente a los nuevos archivos y directorios creados dentro del directorio. Son esenciales para mantener permisos consistentes.

## ACLs NT (Windows)

### Concepto

Las ACLs NT son el modelo de permisos nativo de Windows, más complejo que POSIX. Incluyen conceptos como:

- **DACL** (Discretionary Access Control List): lista de permisos
- **SACL** (System Access Control List): auditoría
- **Security Descriptor**: contenedor de DACL + SACL + propietario

### smbcacls

La herramienta `smbcacls` permite gestionar ACLs NT desde la línea de comandos Linux:

```bash
# Ver ACLs de un archivo
smbcacls //servidor/share archivo.txt -U administrador

# Establecer una ACL
smbcacls //servidor/share archivo.txt -U administrador \
  -a "ACL:DOMINIO\usuario:ALLOWED/0x0/FULL"

# Modificar una ACL existente
smbcacls //servidor/share archivo.txt -U administrador \
  -M "ACL:DOMINIO\grupo:ALLOWED/0x0/READ"

# Eliminar una ACL
smbcacls //servidor/share archivo.txt -U administrador \
  -D "ACL:DOMINIO\usuario:ALLOWED/0x0/FULL"
```

Formato de ACL NT: `ACL:quien:TIPO/FLAGS/PERMISOS`

| Campo    | Valores                                          |
|----------|--------------------------------------------------|
| quien    | DOMINIO\usuario o DOMINIO\grupo                  |
| TIPO     | ALLOWED, DENIED                                  |
| FLAGS    | 0x0 (ninguno), 0x03 (herencia objeto+contenedor) |
| PERMISOS | FULL, READ, WRITE, CHANGE, 0x001f01ff (máscara)  |

> **Para el examen:** `smbcacls` es la herramienta CLI para gestionar permisos NT en shares de Samba. Conocer su sintaxis y las opciones `-a` (añadir), `-M` (modificar), `-D` (eliminar) es fundamental.

### Security Descriptor

El descriptor de seguridad completo incluye:

```
REVISION:1
CONTROL:SR|DP
OWNER:DOMINIO\administrador
GROUP:DOMINIO\Domain Users
ACL:DOMINIO\administrador:ALLOWED/0x0/FULL
ACL:DOMINIO\usuarios:ALLOWED/0x0/READ
```

## Herencia de permisos en Samba

### inherit permissions

```ini
[datos]
   path = /srv/samba/datos
   inherit permissions = yes
```

Cuando está activo, los nuevos archivos y directorios heredan los permisos del directorio padre en lugar de usar `create mask` y `directory mask`.

> **Para el examen:** `inherit permissions = yes` hace que los permisos POSIX del directorio padre se hereden, sobrescribiendo `create mask` y `directory mask`.

### inherit acls

```ini
[datos]
   path = /srv/samba/datos
   inherit acls = yes
```

Hace que las ACLs por defecto del directorio padre se apliquen como ACLs de los nuevos archivos y directorios.

### map acl inherit

```ini
[datos]
   path = /srv/samba/datos
   map acl inherit = yes
```

Mapea los flags de herencia de ACLs NT a ACLs POSIX por defecto. Esto es crucial para la integración correcta de permisos Windows con el sistema de archivos Linux.

| Parámetro           | Efecto                                                     |
|---------------------|------------------------------------------------------------|
| inherit permissions | Hereda permisos POSIX del directorio padre                 |
| inherit acls        | Hereda ACLs por defecto del directorio padre               |
| map acl inherit     | Mapea herencia NT a ACLs POSIX por defecto                 |

> **Para el examen:** `map acl inherit = yes` es esencial para que la herencia de permisos configurada desde Windows se traduzca correctamente a ACLs POSIX en Linux.

## Integración con la pestaña de permisos de Windows

Para que los usuarios puedan gestionar permisos desde la pestaña "Seguridad" de Windows:

```ini
[datos]
   path = /srv/samba/datos
   nt acl support = yes        # Activado por defecto
   inherit acls = yes
   map acl inherit = yes
   acl group control = yes     # Permite al grupo propietario gestionar ACLs
```

La configuración recomendada para integración completa:

```ini
[datos]
   path = /srv/samba/datos
   nt acl support = yes
   inherit acls = yes
   map acl inherit = yes
   store dos attributes = yes
   vfs objects = acl_xattr
```

El módulo VFS `acl_xattr` almacena las ACLs NT completas en atributos extendidos del sistema de archivos, preservando toda la información de permisos Windows.

> **Para el examen:** `vfs objects = acl_xattr` permite almacenar ACLs NT completas como atributos extendidos en el sistema de archivos Linux, manteniendo la fidelidad total de los permisos Windows.

## Enumeración de shares basada en acceso

### access based share enum

```ini
[global]
   access based share enum = yes
```

Cuando está activo, los usuarios solo ven los recursos compartidos a los que tienen acceso. Los shares a los que no tienen permisos no aparecen en el listado.

```ini
[confidencial]
   path = /srv/samba/confidencial
   valid users = @directivos
   # Con access based share enum, solo los directivos ven este share
```

> **Para el examen:** `access based share enum = yes` en `[global]` oculta automáticamente los shares a los que el usuario no tiene acceso. Es diferente de `browseable = no`, que oculta el share para todos.

## Control de acceso por host

### hosts allow y hosts deny

```ini
[datos]
   path = /srv/samba/datos
   hosts allow = 192.168.1.0/24 10.0.0.5
   hosts deny = 192.168.1.100
```

| Parámetro   | Descripción                                      |
|-------------|--------------------------------------------------|
| hosts allow | IPs/redes permitidas (lista blanca)              |
| hosts deny  | IPs/redes denegadas (lista negra)                |

Reglas de evaluación:
1. Si solo `hosts allow`: solo esas IPs pueden acceder
2. Si solo `hosts deny`: todas excepto esas IPs pueden acceder
3. Si ambos: `hosts allow` se evalúa primero; luego `hosts deny`
4. Se pueden usar en `[global]` o en shares individuales

```ini
# Ejemplos de formato
hosts allow = 192.168.1. 10.0.0.0/24 EXCEPT 10.0.0.50
hosts allow = 192.168.1.0/255.255.255.0
hosts deny = ALL
```

> **Para el examen:** `hosts allow` y `hosts deny` pueden usarse tanto en `[global]` como en shares individuales. Si ambos están presentes, `hosts allow` tiene prioridad.

## Ejemplo completo de configuración segura

```ini
[global]
   workgroup = EMPRESA
   security = ADS
   realm = EMPRESA.LOCAL
   access based share enum = yes

[finanzas]
   comment = Datos financieros
   path = /srv/samba/finanzas
   valid users = @finanzas @directivos
   write list = @finanzas
   read list = @auditores
   hosts allow = 192.168.10.0/24
   inherit acls = yes
   map acl inherit = yes
   nt acl support = yes
   vfs objects = acl_xattr
   store dos attributes = yes
   create mask = 0770
   directory mask = 0770
```

## Diagnóstico de problemas de permisos

```bash
# Verificar permisos POSIX
ls -la /srv/samba/datos/

# Verificar ACLs POSIX
getfacl /srv/samba/datos/

# Verificar ACLs NT desde Samba
smbcacls //servidor/datos archivo.txt -U admin

# Verificar el acceso efectivo del usuario
smbclient //servidor/datos -U usuario -c "ls"

# Ver log detallado de permisos (nivel 10)
log level = 3 auth:10 acls:10
```
