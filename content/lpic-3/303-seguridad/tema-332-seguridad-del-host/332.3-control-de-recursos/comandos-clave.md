---
tipo: comandos
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
---

# Comandos Clave - 332.3 Control de Recursos

## ulimit

| Comando | Descripcion |
|---------|-------------|
| `ulimit -a` | Ver todos los limites actuales |
| `ulimit -Sa` | Ver limites soft |
| `ulimit -Ha` | Ver limites hard |
| `ulimit -n 4096` | Establecer max archivos abiertos |
| `ulimit -u 2048` | Establecer max procesos de usuario |
| `ulimit -c 0` | Deshabilitar core dumps |
| `ulimit -v 4194304` | Establecer max memoria virtual (KB) |
| `ulimit -s 8192` | Establecer tamaño de stack (KB) |

## Cgroups v1

| Comando | Descripcion |
|---------|-------------|
| `cgcreate -g cpu,memory:grupo` | Crear cgroup |
| `cgset -r cpu.cfs_quota_us=50000 grupo` | Establecer limite de CPU |
| `cgset -r memory.limit_in_bytes=536870912 grupo` | Establecer limite de memoria |
| `cgexec -g cpu,memory:grupo comando` | Ejecutar proceso en cgroup |
| `cgclassify -g cpu,memory:grupo PID` | Mover proceso a cgroup |
| `cgdelete -g cpu,memory:grupo` | Eliminar cgroup |
| `cgget -r memory.limit_in_bytes grupo` | Ver configuracion del cgroup |
| `lscgroup` | Listar cgroups existentes |

## Cgroups v2

| Comando / Ruta | Descripcion |
|----------------|-------------|
| `mkdir /sys/fs/cgroup/grupo` | Crear cgroup v2 |
| `echo "+cpu +memory" > /sys/fs/cgroup/cgroup.subtree_control` | Habilitar controladores |
| `echo 536870912 > /sys/fs/cgroup/grupo/memory.max` | Limite de memoria |
| `echo 100 > /sys/fs/cgroup/grupo/pids.max` | Limite de procesos |
| `echo PID > /sys/fs/cgroup/grupo/cgroup.procs` | Mover proceso al cgroup |
| `cat /sys/fs/cgroup/grupo/memory.current` | Ver uso de memoria |

## systemd - Control de Recursos

| Comando / Directiva | Descripcion |
|---------------------|-------------|
| `systemctl set-property servicio CPUQuota=50%` | Limitar CPU persistente |
| `systemctl set-property servicio MemoryMax=512M` | Limitar memoria persistente |
| `systemctl set-property --runtime servicio CPUQuota=50%` | Limitar CPU temporal |
| `systemctl show servicio` | Ver propiedades del servicio |
| `systemd-cgtop` | Uso de recursos por cgroup (top) |
| `systemd-cgls` | Arbol de cgroups y procesos |

## Directivas systemd de Recursos

| Directiva | Descripcion |
|-----------|-------------|
| `CPUQuota=50%` | Porcentaje de un core (200% = 2 cores) |
| `CPUWeight=200` | Peso relativo de CPU (1-10000) |
| `MemoryMax=512M` | Limite duro de memoria |
| `MemoryHigh=400M` | Limite suave de memoria |
| `TasksMax=256` | Maximo de tareas/procesos |
| `IOWeight=100` | Peso relativo de I/O |
| `LimitNOFILE=65535` | Max archivos abiertos |
| `LimitNPROC=4096` | Max procesos |

## Archivos de Configuracion

| Archivo | Descripcion |
|---------|-------------|
| `/etc/security/limits.conf` | Limites persistentes por usuario/grupo |
| `/etc/security/limits.d/*.conf` | Archivos de limites adicionales |
| `/etc/cgconfig.conf` | Configuracion de cgroups v1 |
| `/etc/cgrules.conf` | Reglas de asignacion automatica (v1) |
| `/proc/sys/kernel/pid_max` | Numero maximo de PIDs del sistema |
