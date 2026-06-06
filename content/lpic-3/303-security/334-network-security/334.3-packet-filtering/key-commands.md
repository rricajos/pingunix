---
tipo: comandos
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
---

# Comandos Clave - 334.3 Filtrado de Paquetes

## nftables - Tablas y Cadenas

| Comando | Descripcion |
|---------|-------------|
| `nft list ruleset` | Listar toda la configuracion |
| `nft -a list ruleset` | Listar con handles (para eliminar reglas) |
| `nft add table inet nombre` | Crear tabla |
| `nft delete table inet nombre` | Eliminar tabla |
| `nft flush table inet nombre` | Vaciar tabla |
| `nft add chain inet tabla cadena { type filter hook input priority 0 ; policy drop ; }` | Crear cadena base |
| `nft add chain inet tabla cadena_regular` | Crear cadena regular |
| `nft flush ruleset` | Limpiar todo |

## nftables - Reglas

| Comando | Descripcion |
|---------|-------------|
| `nft add rule inet t c tcp dport 22 accept` | Añadir regla al final |
| `nft insert rule inet t c tcp dport 80 accept` | Insertar al principio |
| `nft add rule inet t c position N regla` | Insertar tras posicion N |
| `nft delete rule inet t c handle N` | Eliminar regla por handle |
| `nft add rule inet t c iif lo accept` | Permitir loopback |
| `nft add rule inet t c ct state established,related accept` | Conexiones establecidas |
| `nft add rule inet t c ct state invalid drop` | Descartar invalidas |
| `nft add rule inet t c tcp dport { 80, 443 } accept` | Multiples puertos |
| `nft add rule inet t c limit rate 3/minute accept` | Limitar tasa |
| `nft add rule inet t c log prefix "DROP: " counter drop` | Log + contador + drop |
| `nft add rule inet t c jump otra_cadena` | Saltar a cadena |

## nftables - Sets y Maps

| Comando | Descripcion |
|---------|-------------|
| `nft add set inet t nombre { type ipv4_addr ; }` | Crear set de IPs |
| `nft add set inet t nombre { type inet_service ; }` | Crear set de puertos |
| `nft add set inet t nombre { type ipv4_addr ; flags interval ; }` | Set con rangos CIDR |
| `nft add set inet t nombre { type ipv4_addr ; timeout 1h ; }` | Set con expiracion |
| `nft add element inet t nombre { 10.0.0.1, 10.0.0.2 }` | Añadir elementos |
| `nft delete element inet t nombre { 10.0.0.1 }` | Eliminar elemento |
| `nft add rule inet t c ip saddr @nombre drop` | Usar set en regla |
| `nft add map inet t nombre { type inet_service : verdict ; }` | Crear map |
| `nft add rule inet t c tcp dport vmap @nombre` | Usar map en regla |

## nftables - NAT

| Comando | Descripcion |
|---------|-------------|
| `nft add chain inet nat postrouting { type nat hook postrouting priority 100 ; }` | Cadena SNAT |
| `nft add chain inet nat prerouting { type nat hook prerouting priority -100 ; }` | Cadena DNAT |
| `nft add rule inet nat postrouting oif eth0 masquerade` | Masquerade |
| `nft add rule inet nat postrouting oif eth0 snat to IP` | SNAT fijo |
| `nft add rule inet nat prerouting iif eth0 tcp dport 8080 dnat to IP:80` | DNAT |
| `nft add rule inet nat prerouting tcp dport 80 redirect to :3128` | Redirect local |

## Connection Tracking

| Comando | Descripcion |
|---------|-------------|
| `conntrack -L` | Listar conexiones |
| `conntrack -S` | Estadisticas |
| `conntrack -E` | Eventos en tiempo real |
| `conntrack -D -s IP` | Eliminar conexion |
| `conntrack -F` | Flush de todas las conexiones |
| `sysctl net.netfilter.nf_conntrack_max` | Ver maximo de conexiones |

## firewalld

| Comando | Descripcion |
|---------|-------------|
| `firewall-cmd --get-default-zone` | Ver zona por defecto |
| `firewall-cmd --get-active-zones` | Ver zonas activas |
| `firewall-cmd --zone=public --add-service=http --permanent` | Añadir servicio |
| `firewall-cmd --zone=public --add-port=8080/tcp --permanent` | Añadir puerto |
| `firewall-cmd --reload` | Recargar configuracion |

## Persistencia

| Comando | Descripcion |
|---------|-------------|
| `nft list ruleset > /etc/nftables.conf` | Guardar reglas |
| `nft -f /etc/nftables.conf` | Cargar reglas |
| `systemctl enable nftables` | Habilitar al inicio |
| `iptables-save > /etc/iptables/rules.v4` | Guardar iptables |
| `iptables-restore < /etc/iptables/rules.v4` | Restaurar iptables |
