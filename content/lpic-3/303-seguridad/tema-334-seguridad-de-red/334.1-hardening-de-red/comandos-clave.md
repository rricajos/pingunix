---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "334 - Seguridad de Red"
tema: "334.1 - Hardening de red"
subtema: "334.1"
peso: 4
tags:
  - lpic-3
  - tema-334
  - nftables
  - iptables
  - sysctl
---

# Comandos Clave - 334.1 Hardening de Red

## Parametros sysctl de Red

| Parametro | Valor seguro | Descripcion |
|-----------|-------------|-------------|
| `net.ipv4.conf.all.rp_filter` | 1 | Reverse Path Filtering (anti-spoofing) |
| `net.ipv4.tcp_syncookies` | 1 | Proteccion SYN flood |
| `net.ipv4.icmp_echo_ignore_broadcasts` | 1 | Ignorar ping broadcast |
| `net.ipv4.conf.all.accept_redirects` | 0 | No aceptar redirecciones ICMP |
| `net.ipv4.conf.all.send_redirects` | 0 | No enviar redirecciones ICMP |
| `net.ipv4.conf.all.accept_source_route` | 0 | Rechazar source routing |
| `net.ipv4.conf.all.log_martians` | 1 | Registrar paquetes marcianos |
| `net.ipv4.ip_forward` | 0 | Deshabilitar reenvio IP |
| `net.ipv6.conf.all.disable_ipv6` | 1 | Deshabilitar IPv6 |

## nftables - Comandos Basicos

| Comando | Descripcion |
|---------|-------------|
| `nft list ruleset` | Listar toda la configuracion |
| `nft add table inet filtro` | Crear tabla |
| `nft add chain inet filtro entrada { type filter hook input priority 0 \; policy drop \; }` | Crear cadena |
| `nft add rule inet filtro entrada tcp dport 22 accept` | Añadir regla |
| `nft add rule inet filtro entrada tcp dport { 80, 443 } accept` | Regla con multiples puertos |
| `nft add rule inet filtro entrada ct state established,related accept` | Permitir conexiones establecidas |
| `nft add set inet filtro ips { type ipv4_addr \; }` | Crear set |
| `nft add element inet filtro ips { 10.0.0.1, 10.0.0.2 }` | Añadir elementos al set |
| `nft flush ruleset` | Limpiar toda la configuracion |
| `nft delete rule inet filtro entrada handle N` | Eliminar regla por handle |

## iptables - Modulos Avanzados

| Comando | Descripcion |
|---------|-------------|
| `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` | Connection tracking |
| `iptables -A INPUT -m recent --set --name SSH` | Registrar acceso (anti brute-force) |
| `iptables -A INPUT -m recent --update --seconds 60 --hitcount 4 --name SSH -j DROP` | Limitar intentos |
| `iptables -A INPUT -m limit --limit 1/s --limit-burst 4 -j ACCEPT` | Limitar tasa |
| `conntrack -L` | Ver tabla de conexiones |
| `conntrack -E` | Eventos de conexion en tiempo real |

## TCP Wrappers

| Archivo / Comando | Descripcion |
|-------------------|-------------|
| `/etc/hosts.allow` | Reglas de acceso permitido (primera evaluacion) |
| `/etc/hosts.deny` | Reglas de denegacion (segunda evaluacion) |
| `ldd /usr/sbin/sshd \| grep libwrap` | Verificar soporte de TCP Wrappers |

## Proteccion ARP

| Comando | Descripcion |
|---------|-------------|
| `arp -s IP MAC` | Entrada ARP estatica |
| `ip neigh add IP lladdr MAC nud permanent dev eth0` | Entrada ARP estatica (ip) |
| `arp -n` | Ver tabla ARP |
| `ip neigh show` | Ver tabla ARP (ip) |

## Network Namespaces

| Comando | Descripcion |
|---------|-------------|
| `ip netns add nombre` | Crear namespace |
| `ip netns list` | Listar namespaces |
| `ip netns exec nombre comando` | Ejecutar en namespace |
| `ip link set dev netns nombre` | Mover interfaz a namespace |
| `ip netns delete nombre` | Eliminar namespace |

## Archivos de Configuracion

| Archivo | Descripcion |
|---------|-------------|
| `/etc/sysctl.d/99-network.conf` | Parametros de red del kernel |
| `/etc/hosts.allow` | TCP Wrappers - permitir |
| `/etc/hosts.deny` | TCP Wrappers - denegar |
| `/etc/nftables.conf` | Configuracion persistente de nftables |
