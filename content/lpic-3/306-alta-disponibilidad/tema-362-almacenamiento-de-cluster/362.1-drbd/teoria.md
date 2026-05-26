---
title: "362.1 - DRBD (Distributed Replicated Block Device)"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.1"
peso: 5
tags:
  - lpic-3
  - tema-362
  - drbd
  - replicacion
  - almacenamiento
  - cluster
objetivos:
  - Comprender los conceptos de DRBD como RAID-1 de red
  - Configurar recursos DRBD
  - Conocer los modos de sincronización A, B y C
  - Gestionar split-brain en DRBD
  - Integrar DRBD con Pacemaker
---

# 362.1 - DRBD (Distributed Replicated Block Device)

## Introduccion a DRBD

**DRBD** (Distributed Replicated Block Device) es un sistema de replicacion de dispositivos de bloque a nivel de kernel que replica datos entre dos o mas nodos a traves de la red. Se conoce como **RAID-1 de red** porque funciona como un espejo de discos pero entre servidores.

### Arquitectura DRBD

```
  Nodo Primario                      Nodo Secundario
  ┌─────────────────┐               ┌─────────────────┐
  │  Aplicacion     │               │  Aplicacion     │
  │       ↓         │               │  (no accede)    │
  │  Sistema de     │               │                 │
  │  Archivos       │               │                 │
  │       ↓         │               │                 │
  │  /dev/drbdX     │    Red TCP    │  /dev/drbdX     │
  │  ┌───────────┐  │ ←──────────→  │  ┌───────────┐  │
  │  │   DRBD    │──┼───────────────┼──│   DRBD    │  │
  │  └───────────┘  │               │  └───────────┘  │
  │       ↓         │               │       ↓         │
  │  /dev/sdaX      │               │  /dev/sdaX      │
  │  (disco local)  │               │  (disco local)  │
  └─────────────────┘               └─────────────────┘
```

- Solo el nodo **primario** puede acceder al dispositivo (modo single-primary)
- Las escrituras se replican de forma transparente al nodo secundario
- El dispositivo DRBD aparece como `/dev/drbdX`

## Configuracion de DRBD

### Estructura de /etc/drbd.conf

```bash
# /etc/drbd.conf (suele incluir archivos adicionales)
include "/etc/drbd.d/global_common.conf";
include "/etc/drbd.d/*.res";
```

### Seccion Global

```bash
# /etc/drbd.d/global_common.conf
global {
    usage-count yes;           # Estadisticas anonimas
    minor-count 16;            # Maximo de dispositivos DRBD
}
```

### Seccion Common

```bash
common {
    handlers {
        pri-on-incon-degr "/usr/lib/drbd/notify-pri-on-incon-degr.sh";
        pri-lost-after-sb "/usr/lib/drbd/notify-pri-lost-after-sb.sh";
        local-io-error    "/usr/lib/drbd/notify-io-error.sh";
        fence-peer        "/usr/lib/drbd/crm-fence-peer.sh";
        after-resync-target "/usr/lib/drbd/crm-unfence-peer.sh";
    }

    startup {
        wfc-timeout 30;        # Tiempo de espera para conexion
        degr-wfc-timeout 15;   # Timeout en modo degradado
        outdated-wfc-timeout 10;
    }

    disk {
        on-io-error detach;    # detach, pass_on, call-local-io-error
        resync-rate 100M;      # Tasa de resincronizacion
        c-plan-ahead 20;
        c-fill-target 10M;
        c-min-rate 10M;
    }

    net {
        protocol C;            # Modo de replicacion: A, B o C
        cram-hmac-alg sha256;
        shared-secret "mi_clave_secreta";
        verify-alg sha256;     # Para verificacion online
    }
}
```

### Seccion Resource

```bash
# /etc/drbd.d/datos.res
resource datos {
    device /dev/drbd0;         # Dispositivo DRBD
    disk   /dev/sdb1;          # Disco local subyacente
    meta-disk internal;        # Metadata: internal o un disco separado

    on nodo1 {
        address 192.168.1.10:7789;
        node-id 0;
    }

    on nodo2 {
        address 192.168.1.11:7789;
        node-id 1;
    }

    connection {
        host nodo1 address 192.168.1.10:7789;
        host nodo2 address 192.168.1.11:7789;
    }
}
```

> **Para el examen:** Conoce las tres secciones principales: `global`, `common` y `resource`. La seccion `common` aplica valores predeterminados a todos los recursos.

## Modos de Sincronizacion (Protocolos)

| Protocolo | Nombre | Descripcion | Rendimiento | Seguridad |
|-----------|--------|-------------|-------------|-----------|
| **A** | Asynchronous | Escritura confirmada cuando llega al buffer TCP local | Mas rapido | Menor (posible perdida) |
| **B** | Semi-synchronous | Escritura confirmada cuando llega a la memoria del nodo remoto | Medio | Media |
| **C** | Synchronous | Escritura confirmada cuando se escribe en disco del nodo remoto | Mas lento | Maxima (sin perdida) |

```
Protocolo A:
  App → Disco local → Buffer TCP → ACK → [Red] → Disco remoto

Protocolo B:
  App → Disco local → [Red] → Memoria remota → ACK → Disco remoto

Protocolo C:
  App → Disco local → [Red] → Disco remoto → ACK
```

> **Para el examen:** El protocolo **C** es el mas usado en produccion porque garantiza que no se pierdan datos. El protocolo **A** es adecuado para replicacion de larga distancia donde la latencia es alta.

## Administracion con drbdadm

### Inicializacion

```bash
# Crear metadatos en ambos nodos
drbdadm create-md datos

# Activar el recurso en ambos nodos
drbdadm up datos

# Hacer un nodo primario (solo en el primero, primera vez)
drbdadm primary --force datos

# Despues de la sincronizacion inicial, en uso normal:
drbdadm primary datos     # Convertir a primario
drbdadm secondary datos   # Convertir a secundario
```

### Monitorización y Estado

```bash
# Ver estado de todos los recursos
drbdadm status

# Ver estado detallado
drbdadm status datos

# Estado via /proc (formato legacy)
cat /proc/drbd

# Ejemplo de salida de /proc/drbd:
#  0: cs:Connected ro:Primary/Secondary ds:UpToDate/UpToDate C r-----
#     ns:1048576 nr:0 dw:1048576 dr:1049600 al:0 bm:0 lo:0 pe:0 ua:0
```

### Campos de Estado Importantes

| Campo | Significado | Valores |
|-------|------------|---------|
| `cs` | Connection State | Connected, Disconnecting, StandAlone, WFConnection |
| `ro` | Role (local/remoto) | Primary/Secondary, Secondary/Primary, Secondary/Secondary |
| `ds` | Disk State (local/remoto) | UpToDate, Inconsistent, DUnknown, Outdated, Diskless |

### Operaciones de Gestion

```bash
# Ajustar configuracion (reler config sin reiniciar)
drbdadm adjust datos

# Desconectar
drbdadm disconnect datos

# Reconectar
drbdadm connect datos

# Invalidar disco remoto (forzar resincronizacion completa)
drbdadm invalidate-remote datos

# Invalidar disco local
drbdadm invalidate datos

# Pausar resincronizacion
drbdadm pause-sync datos

# Reanudar resincronizacion
drbdadm resume-sync datos
```

## Verificacion Online

La verificacion online compara los datos entre nodos sin detener el servicio:

```bash
# Iniciar verificacion
drbdadm verify datos

# Ver progreso en /proc/drbd o drbdadm status
# Si hay diferencias, se muestra el conteo de bloques out-of-sync

# Resincronizar bloques diferentes
drbdadm disconnect datos
drbdadm connect datos
```

> **Para el examen:** La verificacion online compara datos bloque a bloque usando el algoritmo definido en `verify-alg`. No corrige diferencias automaticamente; se necesita resincronizar despues.

## Recuperacion de Split-Brain

Cuando ocurre un split-brain en DRBD (ambos nodos fueron primarios mientras estaban desconectados), se necesita intervencion manual:

### Resolucion Manual

```bash
# En el nodo que se va a DESCARTAR (victima):
drbdadm disconnect datos
drbdadm secondary datos
drbdadm connect --discard-my-data datos

# En el nodo que se va a MANTENER (sobreviviente):
drbdadm disconnect datos
drbdadm connect datos
```

### Resolucion Automatica (configuracion)

```bash
net {
    # Estrategias de auto-recuperacion
    after-sb-0pri disconnect;      # Sin primario: desconectar
    after-sb-1pri discard-secondary; # Un primario: descartar secundario
    after-sb-2pri disconnect;      # Dos primarios: desconectar

    # Opciones disponibles:
    # disconnect, discard-younger-primary, discard-least-changes
    # discard-zero-changes, discard-local, discard-remote
}
```

> **Para el examen:** En la recuperacion manual de split-brain, el nodo "victima" usa `--discard-my-data` al reconectar. Siempre se debe elegir cual nodo tiene los datos correctos.

## Modo Dual-Primary

En modo dual-primary, ambos nodos pueden ser primarios simultaneamente. Requiere un sistema de archivos cluster (GFS2, OCFS2):

```bash
resource datos {
    net {
        protocol C;
        allow-two-primaries yes;
    }

    # Requiere fencing para evitar split-brain
    handlers {
        fence-peer "/usr/lib/drbd/crm-fence-peer.sh";
    }

    disk {
        fencing resource-and-stonith;
    }
}
```

```bash
# Activar dual-primary en ambos nodos
drbdadm primary datos   # En nodo1
drbdadm primary datos   # En nodo2
```

## Integracion con Pacemaker

```bash
# Crear recurso DRBD promotable
pcs resource create drbd_datos ocf:linbit:drbd \
    drbd_resource=datos \
    op monitor interval=20s role=Unpromoted \
    op monitor interval=10s role=Promoted \
    promotable promoted-max=1 promoted-node-max=1

# Crear filesystem sobre DRBD
pcs resource create fs_datos ocf:heartbeat:Filesystem \
    device=/dev/drbd0 directory=/mnt/datos fstype=ext4

# Restricciones
pcs constraint colocation add fs_datos with drbd_datos-clone INFINITY with-rsc-role=Promoted
pcs constraint order promote drbd_datos-clone then start fs_datos
```

## Parametros de Rendimiento

```bash
disk {
    resync-rate 100M;          # Tasa maxima de resincronizacion
    al-extents 3389;           # Activity Log (mas = mejor rendimiento)
    c-plan-ahead 20;           # Planificacion adaptativa
    c-fill-target 10M;
    c-min-rate 10M;
    c-max-rate 100M;
}
```

## Resumen de Archivos y Rutas

| Archivo/Ruta | Descripcion |
|-------------|------------|
| `/etc/drbd.conf` | Configuracion principal |
| `/etc/drbd.d/global_common.conf` | Configuracion global y common |
| `/etc/drbd.d/*.res` | Definiciones de recursos |
| `/proc/drbd` | Estado del kernel (legacy) |
| `/dev/drbdX` | Dispositivos de bloque DRBD |
| `/usr/lib/drbd/` | Scripts de handlers |
| `/var/lib/drbd/` | Datos persistentes de DRBD |
