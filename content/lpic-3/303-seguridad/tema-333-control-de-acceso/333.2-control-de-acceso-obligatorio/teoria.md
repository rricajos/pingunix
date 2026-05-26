---
tipo: teoria
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

# 333.2 Control de Acceso Obligatorio (MAC)

## Introduccion

El Control de Acceso Obligatorio (MAC) es un modelo de seguridad donde las politicas de acceso son definidas por el administrador del sistema y no pueden ser modificadas por los usuarios individuales. A diferencia de DAC, en MAC ni siquiera root puede eludir las politicas establecidas. Linux implementa MAC mediante SELinux y AppArmor.

> **Para el examen:** Este subtema tiene peso 4. Necesitas conocer tanto SELinux como AppArmor en profundidad: modos, comandos de gestion, contextos de seguridad, booleanos y creacion de perfiles.

---

## DAC vs MAC

| Caracteristica | DAC | MAC |
|---------------|-----|-----|
| Quien define acceso | Propietario del recurso | Politica del sistema |
| Root puede eludir | Si | No |
| Granularidad | Archivo/directorio | Procesos, archivos, puertos, etc. |
| Complejidad | Baja | Alta |
| Ejemplo | chmod, ACLs POSIX | SELinux, AppArmor |
| Proteccion contra root comprometido | No | Si |

---

## SELinux (Security-Enhanced Linux)

SELinux fue desarrollado por la NSA y es el sistema MAC por defecto en distribuciones Red Hat/CentOS/Fedora.

### Modos de SELinux

| Modo | Descripcion |
|------|-------------|
| Enforcing | Aplica la politica y deniega accesos no permitidos |
| Permissive | No aplica pero registra las violaciones (para depuracion) |
| Disabled | SELinux completamente desactivado |

```bash
# Ver modo actual
getenforce
# Enforcing

# Ver estado detallado
sestatus
# SELinux status:          enabled
# SELinuxfs mount:         /sys/fs/selinux
# Current mode:            enforcing
# Policy from config file: targeted

# Cambiar modo temporalmente
setenforce 0    # Permissive
setenforce 1    # Enforcing

# Cambiar modo permanentemente
# /etc/selinux/config
SELINUX=enforcing    # enforcing | permissive | disabled
SELINUXTYPE=targeted
```

> **Para el examen:** Cambiar entre `enforcing` y `permissive` no requiere reinicio. Cambiar a/desde `disabled` SI requiere reinicio y reetiquetado del sistema de archivos.

### Contextos de Seguridad

Todo en SELinux tiene un contexto de seguridad con el formato: `usuario:rol:tipo:nivel`

```bash
# Ver contexto de archivos
ls -Z /var/www/html/
# -rw-r--r--. root root unconfined_u:object_r:httpd_sys_content_t:s0 index.html

# Ver contexto de procesos
ps auxZ | grep httpd
# system_u:system_r:httpd_t:s0   root  ... /usr/sbin/httpd

# Ver contexto del usuario actual
id -Z
# unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
```

| Componente | Descripcion | Ejemplo |
|-----------|-------------|---------|
| Usuario SELinux | Identidad SELinux | system_u, unconfined_u |
| Rol | Determina que tipos puede usar | system_r, object_r |
| Tipo | Principal mecanismo de control | httpd_t, httpd_sys_content_t |
| Nivel | MLS/MCS (Multi-Level Security) | s0, s0:c0.c1023 |

### Politica "targeted"

La politica targeted confina procesos especificos (httpd, named, etc.) mientras los demas se ejecutan en dominio "unconfined" (sin restricciones MAC).

### Gestion de Contextos de Archivos

```bash
# Restaurar contexto por defecto de un archivo
restorecon -v /var/www/html/index.html

# Restaurar recursivamente
restorecon -Rv /var/www/html/

# Cambiar contexto temporalmente
chcon -t httpd_sys_content_t /datos/web/archivo.html

# Cambiar contexto permanentemente (sobrevive relabeling)
semanage fcontext -a -t httpd_sys_content_t "/datos/web(/.*)?"
restorecon -Rv /datos/web/

# Listar reglas de contexto de archivos
semanage fcontext -l | grep /var/www

# Eliminar regla de contexto personalizada
semanage fcontext -d "/datos/web(/.*)?"
```

> **Para el examen:** `chcon` cambia contextos temporalmente (se pierden con `restorecon` o relabeling). `semanage fcontext` + `restorecon` es la forma correcta y permanente.

### Booleanos de SELinux

Los booleanos permiten ajustar la politica sin recompilarla.

```bash
# Listar todos los booleanos
getsebool -a

# Ver valor de un booleano
getsebool httpd_can_network_connect
# httpd_can_network_connect --> off

# Cambiar booleano temporalmente
setsebool httpd_can_network_connect on

# Cambiar booleano permanentemente
setsebool -P httpd_can_network_connect on

# Listar booleanos con descripcion
semanage boolean -l | grep httpd
```

Booleanos comunes:

| Booleano | Descripcion |
|----------|-------------|
| `httpd_can_network_connect` | Permitir a Apache conexiones de red |
| `httpd_enable_homedirs` | Permitir acceso a directorios home |
| `ftpd_anon_write` | Permitir escritura FTP anonima |
| `samba_enable_home_dirs` | Samba puede acceder a homes |
| `ssh_sysadm_login` | Login SSH con rol sysadm |

### Gestion de Puertos

```bash
# Listar puertos permitidos para un tipo
semanage port -l | grep http
# http_port_t    tcp   80, 443, 488, 8008, 8009, 8443

# Añadir puerto personalizado
semanage port -a -t http_port_t -p tcp 8080

# Modificar asignacion existente
semanage port -m -t http_port_t -p tcp 8080

# Eliminar asignacion personalizada
semanage port -d -t http_port_t -p tcp 8080
```

### Diagnostico y Solucion de Problemas

```bash
# Ver denegaciones en el log de auditoria
ausearch -m AVC -ts recent

# Herramienta de analisis de alertas SELinux
sealert -a /var/log/audit/audit.log

# Generar modulo de politica a partir de denegaciones
audit2allow -a         # Muestra las reglas necesarias
audit2allow -a -M mi_modulo  # Genera modulo compilado

# Instalar modulo de politica
semodule -i mi_modulo.pp

# Listar modulos instalados
semodule -l

# Ver logs de SELinux
journalctl -t setroubleshoot
```

```bash
# Flujo tipico de solucion de problemas:
# 1. Verificar modo
getenforce
# 2. Buscar denegaciones
ausearch -m AVC -ts recent
# 3. Analizar con sealert
sealert -a /var/log/audit/audit.log
# 4. Probar en modo permissive si es necesario
setenforce 0
# 5. Aplicar solucion (contexto, booleano, o modulo)
# 6. Volver a enforcing
setenforce 1
```

---

## AppArmor

AppArmor es el sistema MAC por defecto en distribuciones Debian/Ubuntu y SUSE. Utiliza perfiles basados en rutas de archivos (no etiquetas como SELinux).

### Modos de Perfiles

| Modo | Descripcion |
|------|-------------|
| Enforce | Aplica el perfil y bloquea accesos no permitidos |
| Complain | No bloquea pero registra violaciones (para depuracion) |
| Unconfined | Sin restricciones (perfil no cargado) |

### Comandos Basicos

```bash
# Ver estado de AppArmor
aa-status
# o
apparmor_status

# Salida muestra:
# - Perfiles cargados
# - Perfiles en modo enforce
# - Perfiles en modo complain
# - Procesos confinados

# Poner perfil en modo enforce
aa-enforce /etc/apparmor.d/usr.sbin.apache2
# o por nombre del ejecutable
aa-enforce /usr/sbin/apache2

# Poner perfil en modo complain
aa-complain /etc/apparmor.d/usr.sbin.apache2

# Deshabilitar perfil
aa-disable /etc/apparmor.d/usr.sbin.apache2

# Recargar perfil
apparmor_parser -r /etc/apparmor.d/usr.sbin.apache2

# Cargar perfil nuevo
apparmor_parser /etc/apparmor.d/usr.sbin.mi_app

# Eliminar perfil cargado
apparmor_parser -R /etc/apparmor.d/usr.sbin.mi_app
```

### Estructura de Perfiles

Los perfiles se almacenan en `/etc/apparmor.d/` con nombres basados en la ruta del ejecutable (reemplazando `/` por `.`).

```bash
# Ejemplo: /etc/apparmor.d/usr.sbin.apache2

#include <tunables/global>

/usr/sbin/apache2 {
  #include <abstractions/base>
  #include <abstractions/nameservice>
  #include <abstractions/apache2-common>

  capability net_bind_service,
  capability setuid,
  capability setgid,

  /var/www/html/** r,          # Lectura de contenido web
  /var/log/apache2/*.log w,    # Escritura de logs
  /etc/apache2/** r,           # Lectura de configuracion
  /run/apache2/*.pid rw,       # PID file
  /tmp/** rw,                  # Acceso temporal

  # Red
  network inet stream,
  network inet6 stream,

  # Denegacion explicita
  deny /etc/shadow r,
}
```

### Permisos en Perfiles

| Permiso | Descripcion |
|---------|-------------|
| `r` | Lectura |
| `w` | Escritura |
| `a` | Append (solo añadir) |
| `k` | Lock de archivos |
| `l` | Link |
| `m` | mmap con PROT_EXEC |
| `x` | Ejecucion |
| `ix` | Hereda el perfil actual |
| `px` | Transicion a perfil del ejecutable |
| `ux` | Ejecutar sin confinamiento |
| `Px` | px con limpieza de entorno |
| `Ux` | ux con limpieza de entorno |

### Creacion de Perfiles

```bash
# Generar perfil interactivamente
aa-genprof /usr/sbin/mi_aplicacion
# 1. Inicia escaneo de logs
# 2. Ejecutar la aplicacion en otra terminal
# 3. Volver y seleccionar acciones para cada acceso

# Actualizar perfil existente basado en logs
aa-logprof

# Generar perfil basico automaticamente
aa-autodep /usr/sbin/mi_aplicacion
```

### Flujo de Creacion de Perfil

```bash
# 1. Generar perfil basico
aa-autodep /usr/sbin/mi_app

# 2. Poner en modo complain
aa-complain /usr/sbin/mi_app

# 3. Ejercitar la aplicacion (todas sus funcionalidades)

# 4. Analizar logs y ajustar perfil
aa-logprof

# 5. Pasar a modo enforce
aa-enforce /usr/sbin/mi_app

# 6. Monitorear y ajustar si es necesario
```

> **Para el examen:** Conoce el flujo completo: `aa-genprof` o `aa-autodep` para crear, `aa-complain` para depurar, `aa-logprof` para ajustar, `aa-enforce` para activar.

### Abstracciones y Tunables

```bash
# Abstracciones: conjuntos predefinidos de permisos comunes
/etc/apparmor.d/abstractions/
# - base          : accesos basicos del sistema
# - nameservice   : resolucion de nombres
# - authentication: acceso a archivos de autenticacion
# - apache2-common: permisos comunes de Apache

# Tunables: variables globales
/etc/apparmor.d/tunables/
# - global : incluye todas las variables
# - home   : define @{HOME}
```

---

## Comparacion SELinux vs AppArmor

| Caracteristica | SELinux | AppArmor |
|---------------|---------|----------|
| Modelo de etiquetado | Etiquetas en inodos | Basado en rutas |
| Complejidad | Alta | Media |
| Distribucion por defecto | RHEL/CentOS/Fedora | Debian/Ubuntu/SUSE |
| Politica base | targeted, mls, minimum | Perfiles individuales |
| Granularidad | Muy alta | Alta |
| Control de red | Si (puertos, protocolos) | Limitado |
| Reetiquetado | Necesario tras cambios | No necesario |
| Herramientas de diagnostico | audit2allow, sealert | aa-logprof |
| Curva de aprendizaje | Pronunciada | Moderada |
| Proteccion rename/hardlink | Si (etiquetas en inodo) | No (basado en ruta) |
