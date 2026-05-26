---
title: "362.2 - Acceso a Almacenamiento Cluster"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.2"
peso: 3
tags:
  - lpic-3
  - tema-362
  - almacenamiento
  - iscsi
  - multipath
  - san
  - fibre-channel
objetivos:
  - Comprender conceptos de almacenamiento compartido (SAN, NAS, DAS)
  - Configurar targets iSCSI con targetcli y LIO
  - Entender Fibre Channel
  - Configurar multipath I/O
  - Comprender reservas SCSI persistentes SPC-3
---

# 362.2 - Acceso a Almacenamiento Cluster

## Tipos de Almacenamiento

### DAS (Direct Attached Storage)

Almacenamiento conectado directamente al servidor (discos internos, JBOD externo via SAS/USB).

```
  ┌──────────┐     SAS/SATA     ┌──────────┐
  │ Servidor │ ←──────────────→ │  Discos  │
  └──────────┘                   └──────────┘
```

### NAS (Network Attached Storage)

Almacenamiento a nivel de **archivo** compartido por red (NFS, CIFS/SMB).

```
  ┌──────────┐                   ┌──────────┐
  │ Servidor │ ←── NFS/SMB ───→ │   NAS    │
  └──────────┘    (Ethernet)     └──────────┘
```

### SAN (Storage Area Network)

Red dedicada de almacenamiento a nivel de **bloque** (iSCSI, Fibre Channel).

```
  ┌──────────┐                   ┌──────────┐
  │ Servidor │ ←── FC/iSCSI ──→ │   SAN    │
  │(Initiator)│   (red dedicada)  │ (Target) │
  └──────────┘                   └──────────┘
```

| Caracteristica | DAS | NAS | SAN |
|---------------|-----|-----|-----|
| Nivel | Bloque | Archivo | Bloque |
| Protocolo | SAS/SATA | NFS/SMB | FC/iSCSI |
| Red | No | Ethernet | FC/Ethernet |
| Compartido | No | Si | Si |
| Uso tipico | Servidor unico | Compartir archivos | Clusters, BD |

> **Para el examen:** SAN proporciona acceso a nivel de bloque (como un disco local), NAS a nivel de archivo (como un directorio compartido). Esta distincion es fundamental.

## iSCSI

**iSCSI** (Internet Small Computer Systems Interface) permite acceder a almacenamiento de bloque a traves de redes TCP/IP.

### Terminologia iSCSI

| Termino | Descripcion |
|---------|------------|
| **Target** | Servidor que exporta almacenamiento |
| **Initiator** | Cliente que accede al almacenamiento |
| **LUN** | Logical Unit Number, unidad logica de almacenamiento |
| **IQN** | iSCSI Qualified Name (identificador unico) |
| **Portal** | Combinacion IP:puerto del target |
| **TPG** | Target Portal Group |

### Formato IQN

```
iqn.YYYY-MM.dominio.invertido:identificador
iqn.2024-01.com.empresa:storage.lun1
```

### Configuracion del Target con targetcli (LIO)

```bash
# Iniciar targetcli (interfaz interactiva)
targetcli

# Crear un backstore (almacenamiento subyacente)
/> /backstores/block create disco1 /dev/sdb
/> /backstores/fileio create archivo1 /var/iscsi/disk1.img 10G

# Crear un target iSCSI
/> /iscsi create iqn.2024-01.com.empresa:storage

# Crear LUN en el target
/> /iscsi/iqn.2024-01.com.empresa:storage/tpg1/luns create /backstores/block/disco1

# Crear ACL para el initiator
/> /iscsi/iqn.2024-01.com.empresa:storage/tpg1/acls create iqn.2024-01.com.empresa:nodo1

# Configurar portal (IP y puerto)
/> /iscsi/iqn.2024-01.com.empresa:storage/tpg1/portals create 192.168.1.100 3260

# Guardar y salir
/> saveconfig
/> exit
```

### Configuracion del Initiator

```bash
# Archivo de configuracion del initiator
# /etc/iscsi/initiatorname.iscsi
InitiatorName=iqn.2024-01.com.empresa:nodo1

# Descubrir targets
iscsiadm -m discovery -t sendtargets -p 192.168.1.100:3260

# Conectar a un target
iscsiadm -m node -T iqn.2024-01.com.empresa:storage -p 192.168.1.100 --login

# Desconectar
iscsiadm -m node -T iqn.2024-01.com.empresa:storage -p 192.168.1.100 --logout

# Ver sesiones activas
iscsiadm -m session

# Configurar conexion automatica
iscsiadm -m node -T iqn.2024-01.com.empresa:storage -p 192.168.1.100 \
    --op update -n node.startup -v automatic
```

> **Para el examen:** El puerto predeterminado de iSCSI es **3260/TCP**. `targetcli` es la herramienta para configurar LIO targets. `iscsiadm` es la herramienta del initiator.

## Fibre Channel

**Fibre Channel (FC)** es un protocolo de red de alta velocidad usado principalmente para conectar almacenamiento SAN.

| Caracteristica | Valor |
|---------------|-------|
| Velocidades | 8, 16, 32, 64 Gbps |
| Topologias | Point-to-point, Arbitrated Loop, Switched Fabric |
| Identificacion | WWNN (World Wide Node Name), WWPN (World Wide Port Name) |
| Zoning | Restriccion de acceso entre puertos FC |

```bash
# Ver HBAs (Host Bus Adapters) Fibre Channel
ls /sys/class/fc_host/
cat /sys/class/fc_host/host0/port_name    # WWPN
cat /sys/class/fc_host/host0/node_name    # WWNN
cat /sys/class/fc_host/host0/port_state   # Estado

# Escanear nuevos LUNs
echo "- - -" > /sys/class/scsi_host/host0/scan
```

## Multipath I/O

**Multipath I/O** permite tener multiples rutas fisicas hacia un mismo dispositivo de almacenamiento, proporcionando redundancia y/o mayor rendimiento.

### Arquitectura Multipath

```
  ┌──────────┐     HBA1 ──→ Switch1 ──→ ┌──────────┐
  │ Servidor │                            │   SAN    │
  │          │     HBA2 ──→ Switch2 ──→ │ Storage  │
  └──────────┘                            └──────────┘

  Sin multipath: /dev/sdb, /dev/sdc (2 dispositivos, 1 LUN)
  Con multipath: /dev/mapper/mpath0 (1 dispositivo, 2 rutas)
```

### Configuracion de device-mapper-multipath

```bash
# Instalar
yum install device-mapper-multipath

# Generar configuracion predeterminada
mpathconf --enable --with_multipathd y

# Iniciar servicio
systemctl start multipathd
systemctl enable multipathd
```

### /etc/multipath.conf

```bash
defaults {
    polling_interval    10
    path_grouping_policy  multibus
    path_selector         "round-robin 0"
    failback              immediate
    no_path_retry         fail
    user_friendly_names   yes
}

blacklist {
    devnode "^sd[a-z]$"    # Excluir discos locales
    wwid    26001405...     # Excluir por WWID
}

multipaths {
    multipath {
        wwid    3600508...
        alias   datos_san
    }
}

devices {
    device {
        vendor  "NETAPP"
        product "LUN"
        path_grouping_policy  group_by_prio
        path_selector         "round-robin 0"
        prio                  alua
        failback              immediate
    }
}
```

### Politicas de Agrupacion de Rutas

| Politica | Descripcion |
|----------|------------|
| `failover` | Una ruta activa, las demas en espera |
| `multibus` | Todas las rutas en un grupo (round-robin) |
| `group_by_serial` | Agrupa por numero de serie del almacenamiento |
| `group_by_prio` | Agrupa por prioridad (recomendado para ALUA) |
| `group_by_node_name` | Agrupa por nombre del nodo target |

```bash
# Comandos de gestion
multipath -ll              # Listar multipath con detalles
multipath -v2              # Mostrar topologia
multipathd show maps       # Mapas multipath
multipathd show paths      # Estado de rutas
multipathd show config     # Configuracion activa
```

> **Para el examen:** `multipath -ll` es el comando principal para ver la topologia. Las politicas `failover` y `multibus` son las mas importantes.

## Reservas SCSI Persistentes (SPC-3)

Las **reservas SCSI persistentes** (SPC-3 PR) permiten que multiples nodos de un cluster coordinen el acceso a un LUN compartido.

```bash
# Registrar una clave de reserva
sg_persist --out --register --param-sark=0x123abc /dev/sda

# Ver registros actuales
sg_persist --in --read-keys /dev/sda

# Crear reserva exclusiva
sg_persist --out --reserve --param-rk=0x123abc \
    --prout-type=1 /dev/sda    # Write Exclusive

# Ver reservas activas
sg_persist --in --read-reservation /dev/sda

# Liberar reserva
sg_persist --out --release --param-rk=0x123abc \
    --prout-type=1 /dev/sda

# Pre-empt (quitar reserva de otro nodo - usado por fencing)
sg_persist --out --preempt --param-sark=0x456def \
    --param-rk=0x123abc --prout-type=1 /dev/sda
```

| Tipo de Reserva | Descripcion |
|----------------|------------|
| Write Exclusive | Solo el nodo reservante puede escribir |
| Exclusive Access | Solo el nodo reservante puede acceder |
| Write Exclusive - Registrants Only | Solo nodos registrados pueden escribir |
| Exclusive Access - Registrants Only | Solo nodos registrados pueden acceder |

> **Para el examen:** Las reservas SPC-3 son fundamentales para el fencing a nivel de almacenamiento en clusters. Permiten que un nodo "expulse" a otro del LUN compartido mediante pre-empt.
