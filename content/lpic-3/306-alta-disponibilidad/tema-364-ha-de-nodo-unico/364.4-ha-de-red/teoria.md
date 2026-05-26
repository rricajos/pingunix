---
title: "364.4 - HA de Red"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.4"
peso: 2
tags:
  - lpic-3
  - tema-364
  - bonding
  - teaming
  - vrrp
  - keepalived
  - red
  - lacp
objetivos:
  - Configurar network bonding en distintos modos
  - Configurar network teaming con teamd
  - Implementar VRRP con keepalived
  - Entender multiples gateways predeterminados
  - Conocer failover con network namespaces
---

# 364.4 - HA de Red

## Network Bonding

El **bonding** combina multiples interfaces de red fisicas en una interfaz logica para proporcionar redundancia y/o mayor ancho de banda.

### Modos de Bonding

| Modo | Nombre | Descripcion | Requiere switch |
|------|--------|-------------|----------------|
| 0 | `balance-rr` | Round Robin: transmite por cada interfaz alternativamente | Si (EtherChannel) |
| 1 | `active-backup` | Una interfaz activa, las demas en espera | No |
| 2 | `balance-xor` | Hash de MAC origen/destino para seleccionar interfaz | Si (EtherChannel) |
| 3 | `broadcast` | Transmite en todas las interfaces | Si |
| 4 | `802.3ad` | LACP (Link Aggregation Control Protocol) | Si (LACP) |
| 5 | `balance-tlb` | Balanceo adaptativo de transmision | No |
| 6 | `balance-alb` | Balanceo adaptativo de transmision y recepcion | No |

> **Para el examen:** El modo `1 (active-backup)` es el mas simple y no requiere configuracion del switch. El modo `4 (802.3ad/LACP)` ofrece mayor rendimiento pero requiere soporte LACP en el switch.

### Configuracion de Bonding

#### Via archivos de configuracion (RHEL/CentOS)

```bash
# /etc/sysconfig/network-scripts/ifcfg-bond0
DEVICE=bond0
TYPE=Bond
BONDING_MASTER=yes
IPADDR=192.168.1.10
NETMASK=255.255.255.0
GATEWAY=192.168.1.1
ONBOOT=yes
BONDING_OPTS="mode=active-backup miimon=100 primary=eth0"

# /etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE=eth0
TYPE=Ethernet
MASTER=bond0
SLAVE=yes
ONBOOT=yes

# /etc/sysconfig/network-scripts/ifcfg-eth1
DEVICE=eth1
TYPE=Ethernet
MASTER=bond0
SLAVE=yes
ONBOOT=yes
```

#### Via ip y modprobe

```bash
# Cargar modulo
modprobe bonding mode=active-backup miimon=100

# Configurar bond
ip link add bond0 type bond mode active-backup miimon 100
ip link set eth0 master bond0
ip link set eth1 master bond0
ip addr add 192.168.1.10/24 dev bond0
ip link set bond0 up
```

#### Via nmcli (NetworkManager)

```bash
# Crear bond
nmcli con add type bond con-name bond0 ifname bond0 \
    bond.options "mode=active-backup,miimon=100,primary=eth0"

# Añadir esclavos
nmcli con add type ethernet con-name bond0-eth0 ifname eth0 master bond0
nmcli con add type ethernet con-name bond0-eth1 ifname eth1 master bond0

# Configurar IP
nmcli con mod bond0 ipv4.addresses 192.168.1.10/24
nmcli con mod bond0 ipv4.gateway 192.168.1.1
nmcli con mod bond0 ipv4.method manual

# Activar
nmcli con up bond0
```

### Parametros de Bonding

| Parametro | Descripcion |
|-----------|------------|
| `mode` | Modo de bonding (0-6 o nombre) |
| `miimon` | Intervalo de monitorizacion MII (ms) |
| `primary` | Interfaz preferida (modo 1) |
| `lacp_rate` | `slow` (30s) o `fast` (1s) para LACP |
| `xmit_hash_policy` | Politica de hash para modos 2 y 4 |
| `fail_over_mac` | Politica de MAC en failover |

### Monitorizacion del Bond

```bash
# Estado del bond
cat /proc/net/bonding/bond0

# Via sysfs
cat /sys/class/net/bond0/bonding/mode
cat /sys/class/net/bond0/bonding/slaves
cat /sys/class/net/bond0/bonding/active_slave
```

## Network Teaming

El **teaming** es la alternativa moderna al bonding en Linux, usando el daemon `teamd` en espacio de usuario.

### Runners (Tipos de Teaming)

| Runner | Equivalente Bonding | Descripcion |
|--------|-------------------|------------|
| `broadcast` | mode 3 | Transmite en todos los puertos |
| `roundrobin` | mode 0 | Round Robin |
| `activebackup` | mode 1 | Activo/pasivo |
| `loadbalance` | mode 2/5/6 | Balanceo de carga |
| `lacp` | mode 4 | LACP 802.3ad |

### Configuracion con teamd

```bash
# Crear team con nmcli
nmcli con add type team con-name team0 ifname team0 \
    config '{"runner": {"name": "activebackup"}, "link_watch": {"name": "ethtool"}}'

# Añadir puertos
nmcli con add type team-slave con-name team0-eth0 ifname eth0 master team0
nmcli con add type team-slave con-name team0-eth1 ifname eth1 master team0

# Configurar IP
nmcli con mod team0 ipv4.addresses 192.168.1.10/24
nmcli con mod team0 ipv4.gateway 192.168.1.1
nmcli con mod team0 ipv4.method manual

# Activar
nmcli con up team0
```

### Configuracion JSON de teamd

```json
{
    "device": "team0",
    "runner": {
        "name": "activebackup",
        "hwaddr_policy": "same_all"
    },
    "link_watch": {
        "name": "ethtool"
    },
    "ports": {
        "eth0": {
            "prio": 100
        },
        "eth1": {
            "prio": 50
        }
    }
}
```

### Administracion con teamdctl

```bash
# Ver estado del team
teamdctl team0 state

# Ver estado detallado
teamdctl team0 state dump

# Ver configuracion
teamdctl team0 config dump

# Cambiar puerto activo (activebackup)
teamdctl team0 port disable eth0
teamdctl team0 port enable eth0
```

> **Para el examen:** `teamd` es la alternativa moderna a bonding. Los runners son equivalentes a los modos de bonding. `teamdctl` gestiona el team en tiempo real.

## VRRP con Keepalived

**VRRP** (Virtual Router Redundancy Protocol) permite que multiples routers compartan una IP virtual, proporcionando redundancia del gateway.

### Arquitectura VRRP

```
                    VIP: 192.168.1.1
                         │
         ┌───────────────┼───────────────┐
         │               │               │
  ┌──────┴──────┐ ┌──────┴──────┐ ┌──────┴──────┐
  │   Router 1  │ │   Router 2  │ │   Router 3  │
  │  MASTER     │ │  BACKUP     │ │  BACKUP     │
  │  Prio: 100  │ │  Prio: 90   │ │  Prio: 80   │
  └─────────────┘ └─────────────┘ └─────────────┘
```

### Configuracion de Keepalived para VRRP

```bash
# /etc/keepalived/keepalived.conf

global_defs {
    router_id LVS_ROUTER1
    vrrp_garp_interval 0
    vrrp_gna_interval 0
}

vrrp_script chk_gateway {
    script "/usr/local/bin/check_gateway.sh"
    interval 5
    weight -20          # Reduce prioridad si falla
    fall 3              # Fallos consecutivos para marcar DOWN
    rise 2              # Exitos consecutivos para marcar UP
}

vrrp_instance VI_1 {
    state MASTER                # MASTER o BACKUP
    interface eth0              # Interfaz de red
    virtual_router_id 51        # ID unico (0-255)
    priority 100                # Prioridad (mayor = preferido)
    advert_int 1                # Intervalo de anuncios (s)
    nopreempt                   # No recuperar automaticamente

    authentication {
        auth_type PASS
        auth_pass secreto123
    }

    virtual_ipaddress {
        192.168.1.1/24 dev eth0
    }

    track_interface {
        eth0 weight -20        # Reduce prioridad si eth0 cae
        eth1 weight -20
    }

    track_script {
        chk_gateway
    }

    # Notificaciones
    notify_master "/usr/local/bin/notify.sh master"
    notify_backup "/usr/local/bin/notify.sh backup"
    notify_fault  "/usr/local/bin/notify.sh fault"
}

# Segunda instancia VRRP (para segundo gateway)
vrrp_instance VI_2 {
    state BACKUP
    interface eth1
    virtual_router_id 52
    priority 90
    advert_int 1

    authentication {
        auth_type PASS
        auth_pass secreto456
    }

    virtual_ipaddress {
        10.0.0.1/24 dev eth1
    }
}
```

### Parametros VRRP Importantes

| Parametro | Descripcion |
|-----------|------------|
| `state` | Estado inicial: MASTER o BACKUP |
| `interface` | Interfaz para anuncios VRRP |
| `virtual_router_id` | ID unico del router virtual (0-255) |
| `priority` | Prioridad (1-254, mayor = preferido) |
| `advert_int` | Intervalo de anuncios en segundos |
| `nopreempt` | No recuperar el rol MASTER automaticamente |
| `preempt_delay` | Tiempo de espera antes de preempt |
| `track_interface` | Interfaces a monitorizar |
| `track_script` | Scripts de monitorizacion |
| `virtual_ipaddress` | IPs virtuales |

> **Para el examen:** VRRP usa multicast 224.0.0.18 y protocolo IP 112. El `virtual_router_id` debe ser unico en la red. El nodo con mayor `priority` activa se convierte en MASTER.

## Multiples Gateways Predeterminados

Para tener redundancia de salida a Internet con multiples ISPs:

```bash
# Crear tablas de enrutamiento personalizadas
echo "100 isp1" >> /etc/iproute2/rt_tables
echo "200 isp2" >> /etc/iproute2/rt_tables

# Reglas de enrutamiento por origen
ip rule add from 192.168.1.0/24 table isp1
ip rule add from 10.0.0.0/24 table isp2

# Rutas en cada tabla
ip route add default via 192.168.1.1 table isp1
ip route add default via 10.0.0.1 table isp2

# Ruta predeterminada con multiples nexthops (balanceo)
ip route add default \
    nexthop via 192.168.1.1 weight 1 \
    nexthop via 10.0.0.1 weight 1
```

## Network Namespace Failover

Los **network namespaces** permiten aislar pilas de red completas, util para failover de servicios:

```bash
# Crear namespace
ip netns add ns_servicio

# Crear par veth
ip link add veth0 type veth peer name veth1

# Mover interfaz al namespace
ip link set veth1 netns ns_servicio

# Configurar en el namespace
ip netns exec ns_servicio ip addr add 192.168.100.1/24 dev veth1
ip netns exec ns_servicio ip link set veth1 up
ip netns exec ns_servicio ip link set lo up

# Ejecutar proceso en el namespace
ip netns exec ns_servicio /usr/sbin/nginx

# Listar namespaces
ip netns list

# Migrar interfaz entre namespaces (failover)
ip link set eth2 netns ns_servicio
```

## Comparativa Bonding vs Teaming

| Aspecto | Bonding | Teaming |
|---------|---------|---------|
| Espacio | Kernel | Userspace (teamd) |
| Modularidad | Monolitico | Modular (runners) |
| Monitorizacion | miimon, arp_interval | ethtool, arp_ping, nsna_ping |
| IPv6 link-local | No | Si (nsna_ping) |
| D-Bus | No | Si |
| JSON config | No | Si |
| Max interfaces | Ilimitado | Ilimitado |
| Latencia | Menor (kernel) | Mayor (userspace) |
