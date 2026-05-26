---
tipo: teoria
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
  - hardening-red
---

# 334.1 Hardening de Red

## Introduccion

El hardening de red implica configurar el stack de red del sistema para minimizar la superficie de ataque. Incluye la configuracion de firewalls (nftables/iptables), parametros del kernel para red, TCP wrappers, deshabilitacion de protocolos innecesarios y aislamiento mediante namespaces.

> **Para el examen:** Conoce los parametros sysctl de red mas importantes, la diferencia entre nftables e iptables, y los TCP wrappers. Entiende la segmentacion de red y el aislamiento con namespaces.

---

## Parametros sysctl de Red

### Configuracion de Seguridad de Red

```bash
# /etc/sysctl.d/99-network-hardening.conf

# Habilitar verificacion de ruta inversa (anti-spoofing)
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1

# Habilitar SYN cookies (proteccion contra SYN flood)
net.ipv4.tcp_syncookies = 1

# Ignorar broadcasts ICMP (proteccion Smurf)
net.ipv4.icmp_echo_ignore_broadcasts = 1

# No aceptar redirecciones ICMP
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.default.accept_redirects = 0

# No enviar redirecciones ICMP
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0

# No aceptar source routing
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv6.conf.all.accept_source_route = 0

# Registrar paquetes marcianos (direcciones imposibles)
net.ipv4.conf.all.log_martians = 1
net.ipv4.conf.default.log_martians = 1

# Deshabilitar IP forwarding (si no es router)
net.ipv4.ip_forward = 0
net.ipv6.conf.all.forwarding = 0

# Ignorar respuestas ICMP falsas
net.ipv4.icmp_ignore_bogus_error_responses = 1

# Proteccion contra ataques de timestamps
net.ipv4.tcp_timestamps = 0
```

| Parametro | Valor | Funcion |
|-----------|-------|---------|
| `rp_filter` | 1 | Reverse Path Filtering (anti-spoofing) |
| `tcp_syncookies` | 1 | Proteccion contra SYN flood |
| `icmp_echo_ignore_broadcasts` | 1 | Ignora ping broadcast (anti-Smurf) |
| `accept_redirects` | 0 | No aceptar redirecciones ICMP |
| `send_redirects` | 0 | No enviar redirecciones ICMP |
| `accept_source_route` | 0 | Rechazar source routing |
| `log_martians` | 1 | Registrar paquetes con IPs imposibles |
| `ip_forward` | 0 | Deshabilitar reenvio de paquetes |

> **Para el examen:** `rp_filter=1` (strict mode) verifica que la ruta de retorno del paquete use la misma interfaz por la que llego. `rp_filter=2` (loose mode) solo verifica que exista alguna ruta.

---

## nftables - Fundamentos

nftables es el sucesor de iptables y es el framework de filtrado de paquetes recomendado en Linux moderno.

### Conceptos Basicos

```bash
# Listar toda la configuracion
nft list ruleset

# Estructura: familias -> tablas -> cadenas -> reglas

# Familias disponibles:
# ip    - IPv4
# ip6   - IPv6
# inet  - IPv4 + IPv6 (recomendado)
# arp   - ARP
# bridge - Frames de bridge
# netdev - Ingreso a nivel de dispositivo
```

### Configuracion Basica de Firewall

```bash
# Crear tabla
nft add table inet filtro

# Crear cadena de entrada (input)
nft add chain inet filtro entrada { type filter hook input priority 0 \; policy drop \; }

# Crear cadena de salida (output)
nft add chain inet filtro salida { type filter hook output priority 0 \; policy accept \; }

# Crear cadena de reenvio (forward)
nft add chain inet filtro reenvio { type filter hook forward priority 0 \; policy drop \; }

# Permitir loopback
nft add rule inet filtro entrada iif lo accept

# Permitir conexiones establecidas
nft add rule inet filtro entrada ct state established,related accept

# Permitir SSH
nft add rule inet filtro entrada tcp dport 22 accept

# Permitir HTTP/HTTPS
nft add rule inet filtro entrada tcp dport { 80, 443 } accept

# Permitir ping
nft add rule inet filtro entrada icmp type echo-request accept

# Registrar paquetes descartados
nft add rule inet filtro entrada log prefix \"INPUT-DROP: \" drop
```

### Sets de nftables

```bash
# Crear set de IPs permitidas
nft add set inet filtro ips_confiables { type ipv4_addr \; }
nft add element inet filtro ips_confiables { 192.168.1.10, 192.168.1.20 }

# Usar set en regla
nft add rule inet filtro entrada ip saddr @ips_confiables accept
```

---

## iptables Avanzado

### Connection Tracking (conntrack)

```bash
# Permitir conexiones establecidas y relacionadas
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Ver tabla de conexiones
conntrack -L
conntrack -E    # Eventos en tiempo real

# Limpiar tabla de conexiones
conntrack -F
```

### Modulo recent (proteccion contra fuerza bruta)

```bash
# Limitar intentos SSH (max 3 en 60 segundos)
iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW \
  -m recent --set --name SSH
iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW \
  -m recent --update --seconds 60 --hitcount 4 --name SSH -j DROP
iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -j ACCEPT
```

### Modulo limit (limitacion de tasa)

```bash
# Limitar ping a 1/segundo con rafaga de 4
iptables -A INPUT -p icmp --icmp-type echo-request \
  -m limit --limit 1/s --limit-burst 4 -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-request -j DROP

# Limitar logs para evitar inundacion
iptables -A INPUT -j LOG --log-prefix "INPUT-DROP: " \
  -m limit --limit 5/min --limit-burst 10
```

---

## TCP Wrappers

TCP Wrappers proporciona control de acceso basado en host para servicios que usan la biblioteca `libwrap`.

### Archivos de Configuracion

```bash
# /etc/hosts.allow - reglas de acceso permitido (se evalua primero)
sshd: 192.168.1.0/24
sshd: .ejemplo.com
ALL: LOCAL

# /etc/hosts.deny - reglas de denegacion (se evalua segundo)
ALL: ALL

# Orden de evaluacion:
# 1. Si coincide en hosts.allow -> PERMITIDO
# 2. Si coincide en hosts.deny -> DENEGADO
# 3. Si no coincide en ninguno -> PERMITIDO
```

### Sintaxis

```bash
# Formato: servicio: cliente [: accion]

# Permitir SSH desde red local
sshd: 192.168.1.0/255.255.255.0

# Permitir desde dominio
sshd: .midominio.com

# Permitir a todos excepto una red
sshd: ALL EXCEPT 10.0.0.0/8

# Denegar todo por defecto
# /etc/hosts.deny
ALL: ALL: spawn /bin/echo "Acceso denegado de %h a %d" >> /var/log/tcpwrap.log

# Verificar si un servicio usa TCP wrappers
ldd /usr/sbin/sshd | grep libwrap
```

> **Para el examen:** TCP Wrappers solo funciona con servicios compilados con soporte libwrap. Servicios modernos como Apache y Nginx NO lo usan. SSH (sshd) si lo soporta tipicamente.

---

## Deshabilitacion de IPv6

Si IPv6 no se utiliza, debe deshabilitarse para reducir la superficie de ataque.

```bash
# Via sysctl
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1

# Via parametro de kernel (GRUB)
# /etc/default/grub
GRUB_CMDLINE_LINUX="ipv6.disable=1"
# Regenerar GRUB despues del cambio

# Verificar
cat /proc/sys/net/ipv6/conf/all/disable_ipv6
```

---

## Proteccion ARP

```bash
# Entradas ARP estaticas (previenen ARP spoofing)
arp -s 192.168.1.1 00:11:22:33:44:55

# Con ip neigh
ip neigh add 192.168.1.1 lladdr 00:11:22:33:44:55 nud permanent dev eth0

# Ver tabla ARP
arp -n
ip neigh show

# Herramientas de deteccion de ARP spoofing
arpwatch     # Monitorea cambios en pares IP/MAC
arping       # Detecta duplicados de IP
```

---

## Network Namespace Isolation

Los namespaces de red proporcionan aislamiento completo del stack de red.

```bash
# Crear namespace de red
ip netns add ns_aislado

# Ejecutar comando en el namespace
ip netns exec ns_aislado ip addr show

# Crear par de interfaces virtuales (veth)
ip link add veth0 type veth peer name veth1

# Mover interfaz al namespace
ip link set veth1 netns ns_aislado

# Configurar interfaces
ip addr add 10.0.0.1/24 dev veth0
ip link set veth0 up

ip netns exec ns_aislado ip addr add 10.0.0.2/24 dev veth1
ip netns exec ns_aislado ip link set veth1 up
ip netns exec ns_aislado ip link set lo up

# Listar namespaces
ip netns list

# Eliminar namespace
ip netns delete ns_aislado
```

---

## Segmentacion de Red

La segmentacion divide la red en zonas con diferentes niveles de confianza:

| Zona | Descripcion | Ejemplo |
|------|-------------|---------|
| DMZ | Servicios publicos aislados | Servidores web, correo |
| Interna | Red corporativa | Estaciones de trabajo |
| Gestion | Administracion de infraestructura | IPMI, SSH bastions |
| Base de datos | Almacenamiento de datos | Servidores de BD |

Principios:

- **Minimo privilegio de red**: Solo permitir trafico necesario
- **Defensa en profundidad**: Multiples capas de filtrado
- **Separacion de funciones**: Diferentes redes para diferentes roles
- **Zero Trust**: No confiar en ningun trafico por defecto
