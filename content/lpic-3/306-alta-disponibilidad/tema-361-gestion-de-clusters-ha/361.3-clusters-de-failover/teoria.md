---
title: "361.3 - Clusters de Failover"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.3"
peso: 6
tags:
  - lpic-3
  - tema-361
  - failover
  - pacemaker
  - corosync
  - pcs
  - stonith
  - recursos
objetivos:
  - Configurar y administrar clusters Pacemaker/Corosync
  - Gestionar recursos, restricciones y grupos
  - Configurar dispositivos STONITH
  - Comprender tipos de recursos y agentes
  - Manejar quorum y split-brain
---

# 361.3 - Clusters de Failover

## Introducción

Un **cluster de failover** garantiza la continuidad del servicio trasladando automáticamente los recursos de un nodo fallido a otro nodo funcional. Pacemaker/Corosync es la solución estándar en Linux.

## Configuración de Corosync

### corosync.conf

```bash
# /etc/corosync/corosync.conf
totem {
    version: 2
    cluster_name: mi_cluster
    transport: knet              # knet (predeterminado), udp, udpu
    crypto_cipher: aes256        # Cifrado de comunicaciones
    crypto_hash: sha256

    interface {
        ringnumber: 0
        bindnetaddr: 192.168.1.0
        mcastaddr: 239.255.1.1   # Solo para udp
        mcastport: 5405
    }
}

logging {
    to_logfile: yes
    logfile: /var/log/cluster/corosync.log
    to_syslog: yes
    timestamp: on
}

quorum {
    provider: corosync_votequorum
    expected_votes: 3
    two_node: 0                  # 1 para clusters de 2 nodos
    wait_for_all: 1
}

nodelist {
    node {
        ring0_addr: nodo1
        nodeid: 1
    }
    node {
        ring0_addr: nodo2
        nodeid: 2
    }
    node {
        ring0_addr: nodo3
        nodeid: 3
    }
}
```

> **Para el examen:** Los parámetros clave de `totem` son `transport`, `crypto_cipher` y `crypto_hash`. En clusters de 2 nodos, `two_node: 1` debe estar habilitado.

## Inicialización del Cluster con pcs

```bash
# Autenticar nodos (ejecutar en cada nodo primero)
pcs host auth nodo1 nodo2 nodo3 -u hacluster -p password

# Configurar cluster
pcs cluster setup mi_cluster nodo1 nodo2 nodo3

# Iniciar cluster en todos los nodos
pcs cluster start --all

# Habilitar inicio automático
pcs cluster enable --all

# Ver estado
pcs cluster status
pcs status
```

## Tipos de Recursos

### Primitive (Recurso Primitivo)

Un recurso individual que se ejecuta en un solo nodo:

```bash
# Crear IP virtual
pcs resource create VIP ocf:heartbeat:IPaddr2 \
    ip=10.0.0.100 cidr_netmask=24 \
    op monitor interval=30s

# Crear recurso de servicio web
pcs resource create WebServer ocf:heartbeat:apache \
    configfile=/etc/httpd/conf/httpd.conf \
    statusurl="http://localhost/server-status" \
    op monitor interval=60s timeout=30s \
    op start timeout=60s \
    op stop timeout=60s
```

### Group (Grupo)

Varios recursos que se ejecutan juntos en el mismo nodo, en orden:

```bash
# Crear grupo (los recursos se inician en orden y se detienen en orden inverso)
pcs resource group add WebGroup VIP WebFS WebServer

# El grupo se migra como unidad: si un recurso falla, todo el grupo se mueve
```

### Clone

Recurso que se ejecuta en múltiples nodos simultáneamente:

```bash
# Crear un clone (se ejecuta en todos los nodos)
pcs resource create dlm ocf:pacemaker:controld \
    op monitor interval=30s

pcs resource clone dlm clone-max=3 clone-node-max=1

# Alternativa con pcs
pcs resource create dlm ocf:pacemaker:controld \
    op monitor interval=30s clone
```

### Promotable (Multi-State / Master-Slave)

Recurso clone que puede estar en modo **Master** (promoted) o **Slave** (unpromoted):

```bash
# Recurso promotable (ej: DRBD)
pcs resource create drbd_data ocf:linbit:drbd \
    drbd_resource=data \
    op monitor interval=20s role=Unpromoted \
    op monitor interval=10s role=Promoted \
    promotable promoted-max=1 promoted-node-max=1

# Con pcs antiguo (crm):
# ms ms_drbd_data drbd_data master-max="1" master-node-max="1"
```

> **Para el examen:** Conoce los cuatro tipos: primitive, group, clone y promotable (antes master/slave). Un promotable es un clone especial donde una instancia puede ser "promovida".

## Restricciones (Constraints)

### Location Constraints (Ubicación)

Controlan **dónde** puede ejecutarse un recurso:

```bash
# Preferir un nodo
pcs constraint location VIP prefers nodo1=100

# Evitar un nodo
pcs constraint location VIP avoids nodo2=INFINITY

# Regla basada en atributo
pcs constraint location VIP rule score=100 \
    '#uname' eq nodo1

# Mover recurso temporalmente (crea location constraint)
pcs resource move VIP nodo2
# IMPORTANTE: eliminar después
pcs resource clear VIP
```

### Colocation Constraints (Colocación)

Controlan qué recursos deben ejecutarse **juntos** (o separados):

```bash
# WebServer debe estar en el mismo nodo que VIP
pcs constraint colocation add WebServer with VIP INFINITY

# Recurso A NO debe estar con recurso B
pcs constraint colocation add RecursoA with RecursoB -INFINITY
```

### Order Constraints (Orden)

Controlan el **orden** de inicio/parada de recursos:

```bash
# VIP debe iniciarse antes que WebServer
pcs constraint order VIP then WebServer

# Con tipo de acción específico
pcs constraint order start VIP then start WebServer

# Orden para promotable
pcs constraint order promote drbd_data-clone then start WebFS

# Orden opcional (no obligatoria)
pcs constraint order VIP then WebServer kind=Optional
```

> **Para el examen:** Las tres restricciones son location, colocation y order. `INFINITY` significa obligatorio, valores menores son preferencias.

## Resource Agents

### Clases de Agentes

| Clase | Formato | Ejemplo |
|-------|---------|---------|
| OCF | `ocf:proveedor:agente` | `ocf:heartbeat:IPaddr2` |
| systemd | `systemd:servicio` | `systemd:httpd` |
| LSB | `lsb:script` | `lsb:httpd` |
| service | `service:nombre` | `service:httpd` |
| stonith | `stonith:agente` | `stonith:fence_ipmilan` |

### Operaciones de Recursos

```bash
# Definir operaciones en la creación
pcs resource create WebServer ocf:heartbeat:apache \
    op start timeout=60s \
    op stop timeout=60s \
    op monitor interval=30s timeout=20s

# Listar agentes disponibles
pcs resource agents
pcs resource agents ocf:heartbeat

# Describir un agente
pcs resource describe ocf:heartbeat:IPaddr2
```

### Agentes OCF Importantes

| Agente | Función |
|--------|---------|
| `ocf:heartbeat:IPaddr2` | Gestión de IP virtual |
| `ocf:heartbeat:apache` | Servidor web Apache |
| `ocf:heartbeat:Filesystem` | Montaje de sistema de archivos |
| `ocf:heartbeat:mysql` | Base de datos MySQL |
| `ocf:linbit:drbd` | Replicación DRBD |
| `ocf:pacemaker:controld` | DLM (Distributed Lock Manager) |
| `ocf:heartbeat:Delay` | Introduce retardo (testing) |

## Dispositivos STONITH

### Configuración de STONITH

```bash
# Habilitar STONITH (obligatorio en producción)
pcs property set stonith-enabled=true

# IPMI LAN
pcs stonith create ipmi_fence fence_ipmilan \
    ipaddr=192.168.1.200 \
    login=admin passwd=password \
    lanplus=1 pcmk_host_list=nodo1

# Máquinas virtuales (libvirt)
pcs stonith create vm_fence fence_xvm \
    key_file=/etc/cluster/fence_xvm.key \
    pcmk_host_map="nodo1:vm-nodo1;nodo2:vm-nodo2"

# SBD (STONITH Block Device) - para entornos sin IPMI
pcs stonith create sbd_fence fence_sbd \
    devices=/dev/disk/by-id/scsi-SATA_VBOX_HARDDISK_VB12345

# Verificar configuración
pcs stonith status
pcs stonith show
```

### SBD (STONITH Block Device)

```bash
# Crear dispositivo SBD en disco compartido
sbd -d /dev/sda create

# Listar información SBD
sbd -d /dev/sda list

# Configurar watchdog
sbd -d /dev/sda watch

# Archivo de configuración
# /etc/sysconfig/sbd
SBD_DEVICE="/dev/disk/by-id/scsi-..."
SBD_WATCHDOG_DEV="/dev/watchdog"
SBD_WATCHDOG_TIMEOUT=5
```

> **Para el examen:** Los dispositivos STONITH más comunes son `fence_ipmilan` (servidores físicos con IPMI), `fence_xvm` (VMs libvirt) y `sbd` (disco compartido). STONITH debe estar siempre habilitado en producción.

## Configuración de Quorum

```bash
# Ver estado del quorum
pcs quorum status

# Configurar quorum device (QDevice)
pcs quorum device add model net \
    host=qdevice-host algorithm=ffsplit

# Políticas de no-quorum
pcs property set no-quorum-policy=stop    # Predeterminado
pcs property set no-quorum-policy=freeze
pcs property set no-quorum-policy=ignore  # Solo testing
```

## Administración con pcs

### Comandos de Estado

```bash
pcs status                    # Estado completo
pcs status nodes              # Estado de nodos
pcs status resources          # Estado de recursos
pcs cluster status            # Estado del cluster
```

### Gestión de Recursos

```bash
pcs resource show             # Listar recursos
pcs resource show VIP         # Detalle de un recurso
pcs resource enable VIP       # Habilitar recurso
pcs resource disable VIP      # Deshabilitar recurso
pcs resource restart VIP      # Reiniciar recurso
pcs resource cleanup VIP      # Limpiar errores
pcs resource move VIP nodo2   # Mover a nodo específico
pcs resource ban VIP nodo1    # Prohibir en un nodo
pcs resource clear VIP        # Eliminar restricciones temporales
pcs resource delete VIP       # Eliminar recurso
pcs resource update VIP ip=10.0.0.200  # Modificar parámetro
```

### Gestión de Propiedades

```bash
pcs property set stonith-enabled=true
pcs property set no-quorum-policy=stop
pcs property set default-resource-stickiness=100
pcs property set migration-threshold=3
```

## Administración con cibadmin y crm

### cibadmin

```bash
# Exportar CIB completa
cibadmin --query > cib_backup.xml

# Importar CIB
cibadmin --replace --xml-file cib_backup.xml

# Borrar CIB (peligroso)
cibadmin --erase --force
```

### crm (shell alternativo)

```bash
crm status
crm configure show
crm resource start VIP
crm resource stop VIP
crm resource move VIP nodo2
```

> **Para el examen:** `pcs resource move` crea una restricción temporal de location. Siempre ejecuta `pcs resource clear` después para eliminarla, o el recurso nunca volverá al nodo original.

## Manejo de Split-Brain

### Estrategias de Prevención

1. **Múltiples rutas de comunicación** (anillos redundantes en Corosync)
2. **Fencing obligatorio** (STONITH habilitado)
3. **Quorum** correctamente configurado
4. **Watchdog timers** como respaldo de fencing

### Propiedades Relacionadas

```bash
# Stickiness: evita movimientos innecesarios
pcs property set default-resource-stickiness=100

# Threshold de migración: fallos antes de mover
pcs property set migration-threshold=3

# Tiempo de fallo: ventana de conteo de fallos
pcs resource meta VIP failure-timeout=60s
```

## Ejemplo Completo: Cluster Apache HA

```bash
# 1. Configurar cluster
pcs cluster setup mi_cluster nodo1 nodo2
pcs cluster start --all

# 2. Configurar STONITH
pcs stonith create fence_nodo1 fence_ipmilan \
    ipaddr=10.0.0.201 login=admin passwd=secret lanplus=1 \
    pcmk_host_list=nodo1
pcs stonith create fence_nodo2 fence_ipmilan \
    ipaddr=10.0.0.202 login=admin passwd=secret lanplus=1 \
    pcmk_host_list=nodo2

# 3. Crear recursos
pcs resource create VIP ocf:heartbeat:IPaddr2 \
    ip=10.0.0.100 cidr_netmask=24 op monitor interval=30s
pcs resource create WebServer ocf:heartbeat:apache \
    configfile=/etc/httpd/conf/httpd.conf \
    op monitor interval=60s

# 4. Agrupar recursos
pcs resource group add WebGroup VIP WebServer

# 5. Configurar preferencia
pcs constraint location WebGroup prefers nodo1=50
pcs property set default-resource-stickiness=100

# 6. Verificar
pcs status
```
