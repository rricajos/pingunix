---
title: "362.2 - Comandos Clave: Acceso a Almacenamiento Cluster"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.2"
peso: 3
tags:
  - lpic-3
  - tema-362
  - comandos
  - iscsi
  - multipath
---

# 362.2 - Comandos Clave: Acceso a Almacenamiento Cluster

## targetcli - Configuracion iSCSI Target (LIO)

| Comando | Descripcion |
|---------|------------|
| `targetcli` | Iniciar shell interactivo |
| `/backstores/block create nombre /dev/sdX` | Crear backstore de bloque |
| `/backstores/fileio create nombre /ruta tamaño` | Crear backstore de archivo |
| `/iscsi create iqn.YYYY-MM.dom:nombre` | Crear target iSCSI |
| `/iscsi/.../tpg1/luns create /backstores/block/nombre` | Crear LUN |
| `/iscsi/.../tpg1/acls create iqn...` | Crear ACL para initiator |
| `/iscsi/.../tpg1/portals create IP puerto` | Crear portal |
| `saveconfig` | Guardar configuracion |

## iscsiadm - Cliente iSCSI (Initiator)

| Comando | Descripcion |
|---------|------------|
| `iscsiadm -m discovery -t sendtargets -p IP:3260` | Descubrir targets |
| `iscsiadm -m node -T IQN -p IP --login` | Conectar a target |
| `iscsiadm -m node -T IQN -p IP --logout` | Desconectar |
| `iscsiadm -m session` | Ver sesiones activas |
| `iscsiadm -m node` | Listar targets conocidos |
| `iscsiadm -m node -T IQN -p IP --op update -n node.startup -v automatic` | Conexion automatica |

## Multipath I/O

| Comando | Descripcion |
|---------|------------|
| `multipath -ll` | Listar multipath con detalles |
| `multipath -v2` | Mostrar topologia |
| `multipath -F` | Limpiar mapas no usados |
| `multipath -r` | Recargar mapas |
| `multipathd show maps` | Mapas multipath |
| `multipathd show paths` | Estado de rutas |
| `multipathd show config` | Configuracion activa |
| `mpathconf --enable` | Habilitar multipath |

## Politicas de Path Grouping

| Politica | Descripcion |
|----------|------------|
| `failover` | Una ruta activa, demas en espera |
| `multibus` | Todas las rutas activas (round-robin) |
| `group_by_serial` | Agrupa por serial del almacenamiento |
| `group_by_prio` | Agrupa por prioridad (ALUA) |
| `group_by_node_name` | Agrupa por nombre del target |

## Reservas SCSI Persistentes (SPC-3)

| Comando | Descripcion |
|---------|------------|
| `sg_persist --in --read-keys /dev/sdX` | Ver claves registradas |
| `sg_persist --in --read-reservation /dev/sdX` | Ver reservas activas |
| `sg_persist --out --register --param-sark=KEY /dev/sdX` | Registrar clave |
| `sg_persist --out --reserve --param-rk=KEY --prout-type=T /dev/sdX` | Crear reserva |
| `sg_persist --out --release --param-rk=KEY --prout-type=T /dev/sdX` | Liberar reserva |
| `sg_persist --out --preempt --param-sark=K1 --param-rk=K2 /dev/sdX` | Pre-empt |

## Fibre Channel

| Comando / Ruta | Descripcion |
|----------------|------------|
| `/sys/class/fc_host/` | Directorio de HBAs FC |
| `cat /sys/class/fc_host/host0/port_name` | Ver WWPN |
| `cat /sys/class/fc_host/host0/node_name` | Ver WWNN |
| `echo "- - -" > /sys/class/scsi_host/host0/scan` | Escanear LUNs |

## Archivos de Configuracion

| Archivo | Descripcion |
|---------|------------|
| `/etc/iscsi/initiatorname.iscsi` | IQN del initiator |
| `/etc/iscsi/iscsid.conf` | Configuracion del daemon iSCSI |
| `/etc/multipath.conf` | Configuracion de multipath |
| `/etc/target/saveconfig.json` | Configuracion guardada de LIO |
