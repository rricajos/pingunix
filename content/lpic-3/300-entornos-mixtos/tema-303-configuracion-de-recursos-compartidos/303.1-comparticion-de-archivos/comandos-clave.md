---
title: "303.1 - Comandos Clave: Compartición de Archivos"
description: "Referencia rápida de parámetros y comandos para compartición de archivos en Samba"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.1"
peso: 4
tags:
  - lpic-3
  - tema-303
  - samba
  - comandos
---

# 303.1 Comandos Clave - Compartición de Archivos

## Parámetros de smb.conf para shares

| Parámetro          | Valor por defecto | Descripción                                       |
|--------------------|-------------------|---------------------------------------------------|
| `path`             | (ninguno)         | Ruta del directorio compartido                    |
| `browseable`       | yes               | Visibilidad al navegar la red                     |
| `writable`         | no                | Permite escritura (opuesto a `read only`)         |
| `read only`        | yes               | Solo lectura                                      |
| `valid users`      | (vacío = todos)   | Usuarios/grupos con acceso (`@grupo`)             |
| `write list`       | (vacío)           | Usuarios/grupos con escritura forzada             |
| `read list`        | (vacío)           | Usuarios/grupos con solo lectura forzada          |
| `create mask`      | 0744              | Máscara AND para archivos nuevos                  |
| `directory mask`   | 0755              | Máscara AND para directorios nuevos               |
| `force create mode`| 0000              | Máscara OR para archivos nuevos                   |
| `force directory mode`| 0000           | Máscara OR para directorios nuevos                |
| `guest ok`         | no                | Permitir acceso sin autenticación                 |
| `guest only`       | no                | Forzar acceso como invitado para todos            |
| `hide files`       | (vacío)           | Patrones de archivos ocultos (`/patrón/`)         |
| `veto files`       | (vacío)           | Patrones de archivos bloqueados                   |
| `delete veto files`| no                | Permitir eliminar dirs con archivos vetados       |
| `comment`          | (vacío)           | Descripción del recurso compartido                |

## Parámetros del módulo VFS recycle

| Parámetro              | Descripción                                          |
|------------------------|------------------------------------------------------|
| `vfs objects = recycle` | Activa el módulo de papelera de reciclaje           |
| `recycle:repository`   | Directorio de la papelera (relativo al share)        |
| `recycle:keeptree`     | Mantener estructura de directorios                   |
| `recycle:versions`     | Mantener versiones de archivos duplicados            |
| `recycle:touch`        | Actualizar fecha de acceso al reciclar               |
| `recycle:maxsize`      | Tamaño máximo de archivo reciclable (bytes)          |
| `recycle:exclude`      | Patrones de archivos excluidos del reciclaje         |
| `recycle:exclude_dir`  | Directorios excluidos del reciclaje                  |

## Variables de sustitución en smb.conf

| Variable | Significado                    |
|----------|--------------------------------|
| `%U`     | Usuario conectado              |
| `%G`     | Grupo principal del usuario    |
| `%S`     | Nombre del servicio (share)    |
| `%H`     | Home del usuario               |
| `%m`     | Nombre NetBIOS del cliente     |
| `%I`     | IP del cliente                 |

## Comandos de verificación y gestión

```bash
# Verificar configuración de smb.conf
testparm

# Listar shares desde cliente
smbclient -L //servidor -U usuario

# Acceder a un share
smbclient //servidor/share -U usuario

# Recargar configuración sin reiniciar
smbcontrol all reload-config
```
