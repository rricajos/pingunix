---
tipo: teoria
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "334 - Seguridad de Red"
tema: "334.3 - Filtrado de paquetes"
subtema: "334.3"
peso: 5
tags:
  - lpic-3
  - tema-334
  - nftables
  - iptables
  - firewalld
  - nat
  - conntrack
---

# 334.3 Filtrado de Paquetes

## Introduccion

El filtrado de paquetes es la base de la seguridad de red en Linux. nftables es el framework moderno que reemplaza a iptables, ip6tables, arptables y ebtables. Este subtema cubre nftables en profundidad, incluyendo su sintaxis, familias, hooks, sets, maps, NAT y la integracion con firewalld.

> **Para el examen:** Este subtema tiene peso 5. Domina la sintaxis de nftables (familias, tablas, cadenas, reglas, sets, maps) y entiende la transicion desde iptables. Conoce tambien firewalld con backend nftables.

---

## Arquitectura de nftables

### Familias

| Familia | Descripcion | Hooks disponibles |
|---------|-------------|-------------------|
| `ip` | Solo IPv4 | prerouting, input, forward, output, postrouting |
| `ip6` | Solo IPv6 | prerouting, input, forward, output, postrouting |
| `inet` | IPv4 + IPv6 | prerouting, input, forward, output, postrouting |
| `arp` | Protocolo ARP | input, output |
| `bridge` | Frames de puente | prerouting, input, forward, output, postrouting |
| `netdev` | Dispositivo de red (ingress) | ingress |

### Tipos de Cadena

| Tipo | Descripcion |
|------|-------------|
| `filter` | Filtrado de paquetes (aceptar/descartar) |
| `nat` | Traduccion de direcciones de red |
| `route` | Redireccion de rutas |

### Hooks y Prioridades

```
                    ┌─────────────┐
Paquete entrante -> │ prerouting  │ -> Routing -> ┌──────────┐
                    └─────────────┘     Decision   │ input    │ -> Proceso local
                                            │      └──────────┘
                                            v      ┌──────────┐
                                       ┌─────────┐ │ output   │ <- Proceso local
                                       │ forward │ └──────────┘
                                       └─────────┘      │
                                            │            v
                    ┌─────────────┐         └──────> ┌──────────────┐
Paquete saliente <- │ postrouting │ <────────────── │              │
                    └─────────────┘                  └──────────────┘
```

Prioridades comunes:

| Prioridad | Nombre | Valor |
|-----------|--------|-------|
| Raw | NF_IP_PRI_RAW | -300 |
| Mangle | NF_IP_PRI_MANGLE | -150 |
| NAT (dst) | NF_IP_PRI_NAT_DST | -100 |
| Filter | NF_IP_PRI_FILTER | 0 |
| NAT (src) | NF_IP_PRI_NAT_SRC | 100 |

---

## nftables en Profundidad

### Gestion de Tablas

```bash
# Crear tabla
nft add table inet mi_firewall

# Listar tablas
nft list tables

# Eliminar tabla (y todo su contenido)
nft delete table inet mi_firewall

# Vaciar tabla (mantiene estructura)
nft flush table inet mi_firewall
```

### Gestion de Cadenas

```bash
# Cadena base (conectada a un hook del kernel)
nft add chain inet mi_firewall entrada \
  { type filter hook input priority 0 \; policy drop \; }

nft add chain inet mi_firewall salida \
  { type filter hook output priority 0 \; policy accept \; }

nft add chain inet mi_firewall reenvio \
  { type filter hook forward priority 0 \; policy drop \; }

# Cadena regular (para organizar reglas, llamada con jump/goto)
nft add chain inet mi_firewall ssh_rules

# Modificar politica de cadena
nft chain inet mi_firewall entrada { policy accept \; }
```

### Gestion de Reglas

```bash
# Añadir regla al final
nft add rule inet mi_firewall entrada tcp dport 22 accept

# Insertar regla al principio
nft insert rule inet mi_firewall entrada tcp dport 80 accept

# Insertar despues de una regla especifica (por handle)
nft -a list chain inet mi_firewall entrada   # Ver handles
nft add rule inet mi_firewall entrada position 5 tcp dport 443 accept

# Eliminar regla por handle
nft delete rule inet mi_firewall entrada handle 7

# Listar reglas con handles
nft -a list ruleset
```

### Ejemplos de Reglas Comunes

```bash
# Permitir loopback
nft add rule inet mi_firewall entrada iif lo accept

# Permitir conexiones establecidas y relacionadas
nft add rule inet mi_firewall entrada ct state established,related accept

# Descartar conexiones invalidas
nft add rule inet mi_firewall entrada ct state invalid drop

# Permitir SSH desde red especifica
nft add rule inet mi_firewall entrada ip saddr 192.168.1.0/24 tcp dport 22 accept

# Permitir multiples puertos
nft add rule inet mi_firewall entrada tcp dport { 80, 443, 8080 } accept

# Permitir ICMP (ping)
nft add rule inet mi_firewall entrada icmp type echo-request accept
nft add rule inet mi_firewall entrada icmpv6 type { echo-request, nd-neighbor-solicit, nd-router-advert } accept

# Limitar tasa de conexion (rate limiting)
nft add rule inet mi_firewall entrada tcp dport 22 ct state new \
  limit rate 3/minute accept

# Logging
nft add rule inet mi_firewall entrada log prefix \"DROPPED: \" counter drop

# Saltar a otra cadena
nft add rule inet mi_firewall entrada tcp dport 22 jump ssh_rules

# Contadores
nft add rule inet mi_firewall entrada tcp dport 80 counter accept
```

---

## Sets y Maps

### Sets

```bash
# Set de IPs
nft add set inet mi_firewall lista_negra { type ipv4_addr \; }
nft add element inet mi_firewall lista_negra { 10.0.0.1, 10.0.0.2, 10.0.0.3 }

# Set de puertos
nft add set inet mi_firewall puertos_web { type inet_service \; }
nft add element inet mi_firewall puertos_web { 80, 443, 8080, 8443 }

# Set con timeout (elementos expiran)
nft add set inet mi_firewall ban_temporal { type ipv4_addr \; timeout 1h \; }

# Set con intervalos
nft add set inet mi_firewall redes_internas { type ipv4_addr \; flags interval \; }
nft add element inet mi_firewall redes_internas { 192.168.0.0/16, 10.0.0.0/8 }

# Usar set en reglas
nft add rule inet mi_firewall entrada ip saddr @lista_negra drop
nft add rule inet mi_firewall entrada tcp dport @puertos_web accept

# Eliminar elemento
nft delete element inet mi_firewall lista_negra { 10.0.0.3 }
```

### Maps (Mapas)

```bash
# Map que asocia puertos a acciones
nft add map inet mi_firewall port_verdict { type inet_service : verdict \; }
nft add element inet mi_firewall port_verdict { 22 : accept, 80 : accept, 443 : accept }

# Usar map en regla
nft add rule inet mi_firewall entrada tcp dport vmap @port_verdict

# Map de redireccion de puertos
nft add map inet mi_firewall port_redirect { type inet_service : inet_service \; }
nft add element inet mi_firewall port_redirect { 8080 : 80, 8443 : 443 }
```

> **Para el examen:** Los sets y maps son una de las ventajas principales de nftables sobre iptables. Permiten matching eficiente sin duplicar reglas.

---

## NAT con nftables

### Source NAT (SNAT / Masquerade)

```bash
# Crear tabla y cadena NAT
nft add table inet nat
nft add chain inet nat postrouting { type nat hook postrouting priority 100 \; }

# Masquerade (SNAT dinamico)
nft add rule inet nat postrouting oif eth0 masquerade

# SNAT con IP fija
nft add rule inet nat postrouting oif eth0 snat to 203.0.113.10
```

### Destination NAT (DNAT / Port Forwarding)

```bash
nft add chain inet nat prerouting { type nat hook prerouting priority -100 \; }

# Redireccion de puerto
nft add rule inet nat prerouting iif eth0 tcp dport 8080 dnat to 192.168.1.100:80

# Redireccion con rango de puertos
nft add rule inet nat prerouting iif eth0 tcp dport 8000-8100 dnat to 192.168.1.100
```

### Redirect (redireccion local)

```bash
# Redirigir trafico al mismo host (proxy transparente)
nft add rule inet nat prerouting tcp dport 80 redirect to :3128
```

---

## Connection Tracking (conntrack)

```bash
# Ver tabla de conexiones
conntrack -L

# Estadisticas
conntrack -S

# Eventos en tiempo real
conntrack -E

# Filtrar por estado
conntrack -L -p tcp --state ESTABLISHED

# Eliminar conexion especifica
conntrack -D -s 192.168.1.100

# Flush completo
conntrack -F

# Ver maximo de conexiones
sysctl net.netfilter.nf_conntrack_max

# Ajustar maximo
sysctl -w net.netfilter.nf_conntrack_max=262144
```

---

## firewalld con Backend nftables

```bash
# Verificar backend
firewall-cmd --info-service=ssh

# Gestion de zonas
firewall-cmd --get-default-zone
firewall-cmd --get-active-zones
firewall-cmd --set-default-zone=public

# Añadir servicio
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --zone=public --add-service=https --permanent

# Añadir puerto
firewall-cmd --zone=public --add-port=8080/tcp --permanent

# Rich rules
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.0/24" service name="ssh" accept' --permanent

# Recargar
firewall-cmd --reload

# Ver reglas nftables generadas
nft list ruleset | grep firewalld
```

---

## iptables-nft y ebtables

### iptables-nft

`iptables-nft` permite usar la sintaxis clasica de iptables pero con el backend de nftables.

```bash
# Verificar que se usa el backend nft
iptables -V
# iptables v1.8.x (nf_tables)

# Las reglas iptables-nft se traducen a nftables
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
nft list ruleset   # Muestra la regla traducida
```

### ebtables

ebtables filtra tramas a nivel de bridge (capa 2).

```bash
# Listar reglas de bridge
ebtables -L

# Filtrar por MAC
ebtables -A FORWARD -s 00:11:22:33:44:55 -j DROP

# En nftables equivalente
nft add table bridge filtro_bridge
nft add chain bridge filtro_bridge forward { type filter hook forward priority 0 \; }
nft add rule bridge filtro_bridge forward ether saddr 00:11:22:33:44:55 drop
```

---

## Persistencia de Reglas

```bash
# Guardar configuracion de nftables
nft list ruleset > /etc/nftables.conf

# Cargar configuracion
nft -f /etc/nftables.conf

# Servicio systemd
systemctl enable nftables
# Lee /etc/nftables.conf al iniciar

# Para iptables (legacy)
iptables-save > /etc/iptables/rules.v4
iptables-restore < /etc/iptables/rules.v4
```
