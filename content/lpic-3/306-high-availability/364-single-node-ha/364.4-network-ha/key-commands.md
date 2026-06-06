---
title: "364.4 - Comandos Clave: HA de Red"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.4"
peso: 2
tags:
  - lpic-3
  - tema-364
  - comandos
  - bonding
  - teaming
  - vrrp
---

# 364.4 - Comandos Clave: HA de Red

## Network Bonding

| Comando / Archivo | Descripcion |
|-------------------|------------|
| `modprobe bonding mode=X miimon=100` | Cargar modulo bonding |
| `ip link add bond0 type bond mode active-backup` | Crear bond con ip |
| `ip link set eth0 master bond0` | Añadir esclavo |
| `cat /proc/net/bonding/bond0` | Estado del bond |
| `/sys/class/net/bond0/bonding/mode` | Modo actual |
| `/sys/class/net/bond0/bonding/slaves` | Interfaces esclavas |
| `/sys/class/net/bond0/bonding/active_slave` | Esclavo activo |

## Modos de Bonding

| Modo | Nombre | Requiere switch |
|------|--------|----------------|
| 0 | `balance-rr` | Si |
| 1 | `active-backup` | No |
| 2 | `balance-xor` | Si |
| 3 | `broadcast` | Si |
| 4 | `802.3ad` (LACP) | Si (LACP) |
| 5 | `balance-tlb` | No |
| 6 | `balance-alb` | No |

## Bonding con nmcli

| Comando | Descripcion |
|---------|------------|
| `nmcli con add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup,miimon=100"` | Crear bond |
| `nmcli con add type ethernet con-name bond0-eth0 ifname eth0 master bond0` | Añadir esclavo |
| `nmcli con up bond0` | Activar bond |

## Network Teaming

| Comando | Descripcion |
|---------|------------|
| `nmcli con add type team con-name team0 ifname team0 config '{...}'` | Crear team |
| `nmcli con add type team-slave ifname eth0 master team0` | Añadir puerto |
| `teamdctl team0 state` | Estado del team |
| `teamdctl team0 state dump` | Estado detallado (JSON) |
| `teamdctl team0 config dump` | Configuracion (JSON) |
| `teamdctl team0 port disable eth0` | Deshabilitar puerto |
| `teamdctl team0 port enable eth0` | Habilitar puerto |

## Runners de Teaming

| Runner | Equivalente bonding |
|--------|-------------------|
| `activebackup` | mode 1 |
| `roundrobin` | mode 0 |
| `broadcast` | mode 3 |
| `loadbalance` | mode 2/5/6 |
| `lacp` | mode 4 |

## VRRP con Keepalived

| Directiva | Descripcion |
|-----------|------------|
| `vrrp_instance` | Bloque de instancia VRRP |
| `state MASTER/BACKUP` | Estado inicial |
| `interface` | Interfaz de red |
| `virtual_router_id` | ID unico (0-255) |
| `priority` | Prioridad (1-254) |
| `advert_int` | Intervalo de anuncios (s) |
| `nopreempt` | No recuperar MASTER automaticamente |
| `virtual_ipaddress` | IPs virtuales |
| `track_interface` | Interfaces monitorizadas |
| `track_script` | Scripts de monitorizacion |
| `vrrp_script` | Definir script de check |
| `authentication { auth_type PASS }` | Autenticacion |

## Enrutamiento Multi-Gateway

| Comando | Descripcion |
|---------|------------|
| `ip rule add from RED table TABLA` | Regla de enrutamiento por origen |
| `ip route add default via GW table TABLA` | Ruta predeterminada en tabla |
| `ip route add default nexthop via GW1 weight 1 nexthop via GW2 weight 1` | Multiples gateways |
| `/etc/iproute2/rt_tables` | Definicion de tablas de enrutamiento |

## Network Namespaces

| Comando | Descripcion |
|---------|------------|
| `ip netns add NOMBRE` | Crear namespace |
| `ip netns list` | Listar namespaces |
| `ip netns exec NOMBRE COMANDO` | Ejecutar en namespace |
| `ip link set IFACE netns NOMBRE` | Mover interfaz a namespace |
| `ip netns delete NOMBRE` | Eliminar namespace |

## Archivos de Configuracion

| Archivo | Descripcion |
|---------|------------|
| `/etc/sysconfig/network-scripts/ifcfg-bond0` | Config bond (RHEL) |
| `/etc/keepalived/keepalived.conf` | Config keepalived/VRRP |
| `/proc/net/bonding/bond0` | Estado del bond |
| `/etc/iproute2/rt_tables` | Tablas de enrutamiento |
