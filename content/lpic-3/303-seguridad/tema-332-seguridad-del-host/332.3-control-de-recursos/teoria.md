---
tipo: teoria
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "332 - Seguridad del Host"
tema: "332.3 - Control de recursos"
subtema: "332.3"
peso: 3
tags:
  - lpic-3
  - tema-332
  - ulimit
  - cgroups
  - systemd
  - recursos
---

# 332.3 Control de Recursos

## Introduccion

El control de recursos es esencial para la seguridad del sistema, ya que previene que un usuario o proceso consuma todos los recursos disponibles (CPU, memoria, procesos), lo cual podria provocar una denegacion de servicio. Linux ofrece mecanismos como ulimit, cgroups y las directivas de control de recursos de systemd.

> **Para el examen:** Conoce las diferencias entre ulimit (limites por sesion), limits.conf (limites persistentes por usuario/grupo) y cgroups (limites por grupo de procesos). Entiende cgroups v1 vs v2.

---

## ulimit

`ulimit` establece limites de recursos para la sesion actual del shell y sus procesos hijos.

### Tipos de Limites

| Tipo | Descripcion |
|------|-------------|
| Soft | Limite actual, el usuario puede aumentarlo hasta el hard limit |
| Hard | Limite maximo, solo root puede aumentarlo |

### Opciones de ulimit

```bash
# Ver todos los limites actuales
ulimit -a

# Limites soft
ulimit -Sa

# Limites hard
ulimit -Ha

# Opciones principales:
ulimit -n 4096    # Maximo de archivos abiertos (nofile)
ulimit -u 2048    # Maximo de procesos de usuario (nproc)
ulimit -f 0       # Tamaño maximo de archivo (en bloques de 512 bytes)
ulimit -c 0       # Tamaño de core dump (0 = deshabilitado)
ulimit -v 4194304 # Memoria virtual maxima (KB)
ulimit -s 8192    # Tamaño de stack (KB)
ulimit -l 64      # Memoria bloqueada maxima (KB)
ulimit -t unlimited  # Tiempo de CPU

# Establecer limite hard
ulimit -Hn 8192
# Establecer limite soft
ulimit -Sn 4096
```

| Opcion | Recurso |
|--------|---------|
| `-n` | Numero maximo de archivos abiertos (nofile) |
| `-u` | Numero maximo de procesos (nproc) |
| `-f` | Tamaño maximo de archivo creado |
| `-c` | Tamaño maximo de core dump |
| `-v` | Memoria virtual maxima |
| `-s` | Tamaño maximo del stack |
| `-l` | Memoria bloqueada maxima (mlock) |
| `-t` | Tiempo de CPU maximo (segundos) |

---

## /etc/security/limits.conf

Para hacer limites persistentes, se configuran en `/etc/security/limits.conf` o en archivos dentro de `/etc/security/limits.d/`.

```bash
# Formato: dominio  tipo  item  valor

# Limitar procesos para todos los usuarios
*               soft    nproc       1024
*               hard    nproc       2048

# Limitar archivos abiertos para un grupo
@developers     soft    nofile      4096
@developers     hard    nofile      8192

# Deshabilitar core dumps para todos
*               hard    core        0

# Limites para usuario especifico
webserver       soft    nofile      65535
webserver       hard    nofile      65535

# Limitar memoria para un grupo
@estudiantes    hard    as          2097152    # 2GB en KB

# Prioridad maxima
*               soft    priority    0
*               hard    nice        -5

# Maximo de logins simultaneos
*               hard    maxlogins   4
@admins         hard    maxlogins   10
```

| Item | Descripcion |
|------|-------------|
| `nproc` | Numero maximo de procesos |
| `nofile` | Numero maximo de archivos abiertos |
| `core` | Tamaño maximo de core dump |
| `as` | Espacio de direcciones maximo (memoria virtual) |
| `maxlogins` | Maximo de sesiones simultaneas |
| `priority` | Prioridad de ejecucion |
| `nice` | Valor nice maximo |
| `memlock` | Memoria bloqueada maxima |

> **Para el examen:** `pam_limits` debe estar habilitado en PAM para que limits.conf surta efecto. Verifica que existe la linea `session required pam_limits.so` en los archivos PAM correspondientes.

---

## Proteccion Contra Fork Bombs

Una fork bomb es un proceso que se replica indefinidamente, consumiendo todos los recursos:

```bash
# Ejemplo de fork bomb (NO ejecutar)
:(){ :|:& };:
```

### Proteccion

```bash
# /etc/security/limits.conf - limitar procesos
*               hard    nproc       500
root            hard    nproc       unlimited

# sysctl - limitar PID maximo
sysctl -w kernel.pid_max=32768

# /proc/sys/kernel/pid_max
cat /proc/sys/kernel/pid_max

# Limitar con systemd
# En la unidad del servicio:
[Service]
TasksMax=512
```

---

## Cgroups v1

Los Control Groups (cgroups) permiten limitar, contabilizar y aislar el uso de recursos de grupos de procesos.

### Subsistemas (Controladores) v1

| Controlador | Funcion |
|-------------|---------|
| `cpu` | Limita tiempo de CPU |
| `cpuacct` | Contabilidad de CPU |
| `memory` | Limita uso de memoria |
| `blkio` | Limita I/O de bloque |
| `devices` | Controla acceso a dispositivos |
| `freezer` | Congela/descongela procesos |
| `pids` | Limita numero de procesos |

### Comandos cgroups v1

```bash
# Instalar herramientas
yum install libcgroup-tools

# Crear cgroup
cgcreate -g cpu,memory:migrupo

# Establecer limite de CPU (50%)
cgset -r cpu.cfs_quota_us=50000 migrupo
cgset -r cpu.cfs_period_us=100000 migrupo

# Establecer limite de memoria (512MB)
cgset -r memory.limit_in_bytes=536870912 migrupo

# Ejecutar proceso dentro del cgroup
cgexec -g cpu,memory:migrupo /usr/bin/mi_aplicacion

# Mover proceso existente a cgroup
cgclassify -g cpu,memory:migrupo PID

# Eliminar cgroup
cgdelete -g cpu,memory:migrupo

# Ver configuracion de un cgroup
cgget -r memory.limit_in_bytes migrupo

# Listar cgroups
lscgroup
```

### Configuracion persistente v1

```bash
# /etc/cgconfig.conf
group migrupo {
    cpu {
        cpu.cfs_quota_us = 50000;
        cpu.cfs_period_us = 100000;
    }
    memory {
        memory.limit_in_bytes = 536870912;
    }
}

# /etc/cgrules.conf (asignacion automatica)
usuario    cpu,memory    migrupo
@grupo     cpu,memory    migrupo
```

---

## Cgroups v2

Cgroups v2 es la version unificada con una jerarquia unica. Es el valor por defecto en distribuciones modernas.

```bash
# Verificar version de cgroups
mount | grep cgroup
# cgroup2 indica v2

# Punto de montaje v2
ls /sys/fs/cgroup/

# Crear cgroup v2
mkdir /sys/fs/cgroup/migrupo

# Habilitar controladores para el grupo
echo "+cpu +memory +pids" > /sys/fs/cgroup/cgroup.subtree_control

# Establecer limite de memoria
echo 536870912 > /sys/fs/cgroup/migrupo/memory.max

# Establecer limite de procesos
echo 100 > /sys/fs/cgroup/migrupo/pids.max

# Mover proceso al cgroup
echo PID > /sys/fs/cgroup/migrupo/cgroup.procs

# Ver procesos del cgroup
cat /sys/fs/cgroup/migrupo/cgroup.procs

# Ver uso de memoria
cat /sys/fs/cgroup/migrupo/memory.current
```

| Caracteristica | cgroups v1 | cgroups v2 |
|---------------|-----------|-----------|
| Jerarquia | Multiple (una por controlador) | Unica unificada |
| Punto de montaje | `/sys/fs/cgroup/controller/` | `/sys/fs/cgroup/` |
| Modelo de delegacion | Complejo | Simplificado |
| Presion de recursos | No | Si (PSI - Pressure Stall Info) |

---

## Control de Recursos con systemd

systemd integra cgroups nativamente para gestionar recursos de servicios.

### Directivas de Recursos en Unidades systemd

```ini
# /etc/systemd/system/mi-servicio.service.d/limits.conf
[Service]
# Limite de CPU (porcentaje de un core)
CPUQuota=50%

# Peso de CPU (1-10000, defecto 100)
CPUWeight=200

# Limite de memoria
MemoryMax=512M
MemoryHigh=400M    # Limite suave

# Limite de tareas/procesos
TasksMax=256

# Limite de I/O
IOWeight=100
IOReadBandwidthMax=/dev/sda 50M
IOWriteBandwidthMax=/dev/sda 30M

# Limite de archivos abiertos
LimitNOFILE=65535

# Limite de procesos
LimitNPROC=4096
```

### Slices de systemd

Los slices organizan servicios en grupos jerarquicos para control de recursos.

```bash
# Ver arbol de slices
systemd-cgls

# Ver consumo de recursos por slice
systemd-cgtop

# Slices predefinidos
# system.slice  - servicios del sistema
# user.slice    - sesiones de usuario
# machine.slice - maquinas virtuales/contenedores

# Crear slice personalizado
# /etc/systemd/system/miapp.slice
[Unit]
Description=Mi slice de aplicacion

[Slice]
CPUQuota=200%       # 2 cores
MemoryMax=2G
TasksMax=1024

# Asignar servicio a un slice
# En el archivo .service:
[Service]
Slice=miapp.slice
```

### Comandos systemd para Recursos

```bash
# Ver propiedades de recursos de un servicio
systemctl show mi-servicio.service | grep -i memory
systemctl show mi-servicio.service | grep -i cpu

# Establecer limites en tiempo real
systemctl set-property mi-servicio.service CPUQuota=30%
systemctl set-property mi-servicio.service MemoryMax=256M

# Ver uso de recursos
systemd-cgtop

# Ver arbol de cgroups
systemd-cgls

# Verificar cambios
systemctl daemon-reload
```

> **Para el examen:** `systemctl set-property` aplica cambios persistentes por defecto (crea archivos drop-in). Usa `--runtime` para cambios temporales. `CPUQuota=200%` permite usar hasta 2 cores.

---

## pam_limits

El modulo `pam_limits` aplica los limites definidos en `/etc/security/limits.conf` durante la autenticacion.

```bash
# Verificar que pam_limits esta habilitado
# /etc/pam.d/system-auth o /etc/pam.d/common-session
session     required      pam_limits.so

# /etc/pam.d/login
session     required      pam_limits.so
```
