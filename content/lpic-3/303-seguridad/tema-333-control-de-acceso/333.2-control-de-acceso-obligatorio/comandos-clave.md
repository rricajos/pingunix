---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "333 - Control de Acceso"
tema: "333.2 - Control de acceso obligatorio"
subtema: "333.2"
peso: 4
tags:
  - lpic-3
  - tema-333
  - selinux
  - apparmor
  - mac
---

# Comandos Clave - 333.2 Control de Acceso Obligatorio

## SELinux - Estado y Modos

| Comando | Descripcion |
|---------|-------------|
| `getenforce` | Ver modo actual (Enforcing/Permissive/Disabled) |
| `sestatus` | Estado detallado de SELinux |
| `setenforce 0` | Cambiar a modo Permissive (temporal) |
| `setenforce 1` | Cambiar a modo Enforcing (temporal) |
| `/etc/selinux/config` | Configuracion permanente del modo |

## SELinux - Contextos

| Comando | Descripcion |
|---------|-------------|
| `ls -Z` | Ver contexto de archivos |
| `ps auxZ` | Ver contexto de procesos |
| `id -Z` | Ver contexto del usuario actual |
| `chcon -t tipo_t archivo` | Cambiar contexto temporalmente |
| `restorecon -v archivo` | Restaurar contexto por defecto |
| `restorecon -Rv directorio/` | Restaurar recursivamente |
| `semanage fcontext -a -t tipo_t "/ruta(/.*)?"` | Regla de contexto permanente |
| `semanage fcontext -l` | Listar reglas de contexto |
| `semanage fcontext -d "/ruta(/.*)?"` | Eliminar regla personalizada |

## SELinux - Booleanos

| Comando | Descripcion |
|---------|-------------|
| `getsebool -a` | Listar todos los booleanos |
| `getsebool nombre_booleano` | Ver valor de un booleano |
| `setsebool nombre_booleano on` | Activar booleano (temporal) |
| `setsebool -P nombre_booleano on` | Activar booleano (permanente) |
| `semanage boolean -l` | Listar booleanos con descripcion |

## SELinux - Puertos

| Comando | Descripcion |
|---------|-------------|
| `semanage port -l` | Listar asignaciones de puertos |
| `semanage port -a -t tipo_t -p tcp PUERTO` | Añadir puerto |
| `semanage port -m -t tipo_t -p tcp PUERTO` | Modificar puerto |
| `semanage port -d -t tipo_t -p tcp PUERTO` | Eliminar puerto |

## SELinux - Diagnostico

| Comando | Descripcion |
|---------|-------------|
| `ausearch -m AVC -ts recent` | Buscar denegaciones recientes |
| `sealert -a /var/log/audit/audit.log` | Analisis de alertas SELinux |
| `audit2allow -a` | Mostrar reglas necesarias |
| `audit2allow -a -M modulo` | Generar modulo de politica |
| `semodule -i modulo.pp` | Instalar modulo de politica |
| `semodule -l` | Listar modulos instalados |

## AppArmor - Estado y Modos

| Comando | Descripcion |
|---------|-------------|
| `aa-status` / `apparmor_status` | Ver estado de AppArmor |
| `aa-enforce perfil` | Poner perfil en modo enforce |
| `aa-complain perfil` | Poner perfil en modo complain |
| `aa-disable perfil` | Deshabilitar perfil |
| `apparmor_parser -r perfil` | Recargar perfil |
| `apparmor_parser perfil` | Cargar perfil nuevo |
| `apparmor_parser -R perfil` | Eliminar perfil cargado |

## AppArmor - Creacion de Perfiles

| Comando | Descripcion |
|---------|-------------|
| `aa-genprof /ruta/ejecutable` | Generar perfil interactivamente |
| `aa-logprof` | Actualizar perfil desde logs |
| `aa-autodep /ruta/ejecutable` | Generar perfil basico automatico |

## AppArmor - Archivos Importantes

| Ruta | Descripcion |
|------|-------------|
| `/etc/apparmor.d/` | Directorio de perfiles |
| `/etc/apparmor.d/abstractions/` | Conjuntos de permisos reutilizables |
| `/etc/apparmor.d/tunables/` | Variables globales |
| `/var/log/syslog` o `journalctl` | Logs de AppArmor |

## Permisos en Perfiles AppArmor

| Permiso | Significado |
|---------|-------------|
| `r` | Lectura |
| `w` | Escritura |
| `a` | Append (solo añadir) |
| `k` | Lock de archivos |
| `l` | Link |
| `m` | mmap ejecutable |
| `ix` | Ejecutar heredando perfil |
| `px` / `Px` | Ejecutar con perfil propio |
| `ux` / `Ux` | Ejecutar sin confinamiento |
