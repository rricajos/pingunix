---
tipo: teoria
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "334 - Seguridad de Red"
tema: "334.4 - VPN"
subtema: "334.4"
peso: 4
tags:
  - lpic-3
  - tema-334
  - ipsec
  - openvpn
  - wireguard
  - vpn
  - strongswan
---

# 334.4 Redes Privadas Virtuales (VPN)

## Introduccion

Las VPN crean tuneles cifrados sobre redes publicas, permitiendo comunicacion segura entre redes o hosts remotos. Las principales tecnologias VPN en Linux son IPsec (strongSwan/Libreswan), OpenVPN y WireGuard.

> **Para el examen:** Conoce las diferencias entre IPsec, OpenVPN y WireGuard. Domina la configuracion basica de cada uno, los modos de IPsec (tunnel vs transport), y la generacion de claves de WireGuard.

---

## IPsec

IPsec opera en la capa de red (capa 3) y es un estandar IETF para comunicacion segura.

### Protocolos de IPsec

| Protocolo | Funcion |
|-----------|---------|
| IKE (Internet Key Exchange) | Negociacion de claves y parametros de seguridad |
| ESP (Encapsulating Security Payload) | Cifrado + autenticacion de datos |
| AH (Authentication Header) | Solo autenticacion (sin cifrado, obsoleto) |

### IKEv1 vs IKEv2

| Caracteristica | IKEv1 | IKEv2 |
|---------------|-------|-------|
| Mensajes para establecer SA | 6-9 | 4 |
| NAT traversal | Extension opcional | Integrado |
| Movilidad (MOBIKE) | No | Si |
| EAP autenticacion | No | Si |
| Recomendacion | Evitar si posible | Preferido |

### Modos de IPsec

| Modo | Descripcion | Uso tipico |
|------|-------------|-----------|
| Tunnel | Encapsula el paquete IP completo | VPN site-to-site |
| Transport | Solo cifra el payload | Host-to-host |

### strongSwan

strongSwan es la implementacion IPsec mas utilizada en Linux moderno.

```bash
# Instalacion
yum install strongswan
apt install strongswan

# Archivos de configuracion principales
# /etc/strongswan/ipsec.conf - configuracion de conexiones
# /etc/strongswan/ipsec.secrets - credenciales
# /etc/strongswan/strongswan.conf - configuracion del demonio
```

#### Configuracion Site-to-Site con PSK

```bash
# /etc/strongswan/ipsec.conf (Lado A - 203.0.113.1)
config setup
    charondebug="ike 2, net 2"

conn site-to-site
    type=tunnel
    authby=secret
    auto=start
    keyexchange=ikev2
    left=203.0.113.1
    leftsubnet=192.168.1.0/24
    right=203.0.113.2
    rightsubnet=192.168.2.0/24
    ike=aes256-sha256-modp2048!
    esp=aes256-sha256!
```

```bash
# /etc/strongswan/ipsec.secrets
203.0.113.1 203.0.113.2 : PSK "clave-compartida-muy-larga-y-segura"
```

#### Configuracion con Certificados

```bash
# /etc/strongswan/ipsec.conf
conn vpn-certs
    type=tunnel
    authby=rsasig
    auto=start
    keyexchange=ikev2
    left=203.0.113.1
    leftcert=servidor.pem
    leftsubnet=192.168.1.0/24
    right=203.0.113.2
    rightcert=cliente.pem
    rightsubnet=192.168.2.0/24
    ike=aes256-sha384-ecp384!
    esp=aes256-sha384!

# /etc/strongswan/ipsec.secrets
: RSA servidor-key.pem
```

```bash
# Comandos de gestion
ipsec start         # Iniciar strongSwan
ipsec stop          # Detener
ipsec restart       # Reiniciar
ipsec status        # Ver estado de conexiones
ipsec statusall     # Estado detallado
ipsec up site-to-site    # Levantar conexion
ipsec down site-to-site  # Cerrar conexion
ipsec reload        # Recargar configuracion
ipsec listcerts     # Listar certificados
```

> **Para el examen:** Conoce los parametros `left` (local) y `right` (remoto) en ipsec.conf. `leftsubnet`/`rightsubnet` definen las redes protegidas. `authby=secret` usa PSK, `authby=rsasig` usa certificados.

---

## OpenVPN

OpenVPN opera en espacio de usuario sobre TLS/SSL, usando la capa de transporte (TCP/UDP).

### Interfaces tun vs tap

| Interfaz | Capa | Descripcion |
|----------|------|-------------|
| tun | Capa 3 (IP) | Tunel punto a punto, mas eficiente |
| tap | Capa 2 (Ethernet) | Puente Ethernet, soporta broadcast |

### Configuracion del Servidor

```bash
# Generar PKI con easy-rsa
cd /etc/openvpn/easy-rsa/
./easyrsa init-pki
./easyrsa build-ca
./easyrsa gen-req servidor nopass
./easyrsa sign-req server servidor
./easyrsa gen-dh
./easyrsa gen-req cliente1
./easyrsa sign-req client cliente1

# Generar clave TLS adicional
openvpn --genkey secret /etc/openvpn/ta.key
```

```bash
# /etc/openvpn/server.conf
port 1194
proto udp
dev tun

ca /etc/openvpn/pki/ca.crt
cert /etc/openvpn/pki/issued/servidor.crt
key /etc/openvpn/pki/private/servidor.key
dh /etc/openvpn/pki/dh.pem

# tls-auth para proteccion adicional contra DoS
tls-auth /etc/openvpn/ta.key 0
# o tls-crypt (mas moderno, tambien cifra el canal de control)
# tls-crypt /etc/openvpn/ta.key

server 10.8.0.0 255.255.255.0
push "route 192.168.1.0 255.255.255.0"
push "dhcp-option DNS 192.168.1.1"

keepalive 10 120
cipher AES-256-GCM
auth SHA256
user nobody
group nogroup
persist-key
persist-tun
status /var/log/openvpn-status.log
log /var/log/openvpn.log
verb 3
```

### Configuracion del Cliente

```bash
# /etc/openvpn/client.conf
client
dev tun
proto udp
remote vpn.ejemplo.com 1194
resolv-retry infinite
nobind

ca ca.crt
cert cliente1.crt
key cliente1.key
tls-auth ta.key 1

cipher AES-256-GCM
auth SHA256
verb 3
```

### tls-auth vs tls-crypt

| Caracteristica | tls-auth | tls-crypt |
|---------------|----------|-----------|
| Autenticacion HMAC | Si | Si |
| Cifrado canal de control | No | Si |
| Proteccion DoS | Si | Si |
| Ocultacion de trafico | No | Si |
| Parametro servidor | 0 | Sin direccion |
| Parametro cliente | 1 | Sin direccion |

---

## WireGuard

WireGuard es un protocolo VPN moderno, simple y de alto rendimiento integrado en el kernel Linux.

### Generacion de Claves

```bash
# Generar par de claves
wg genkey | tee privatekey | wg pubkey > publickey

# Generar clave preshared (opcional, post-quantum)
wg genpsk > presharedkey

# Generar todo en una linea
wg genkey | tee /etc/wireguard/private.key | wg pubkey > /etc/wireguard/public.key
chmod 600 /etc/wireguard/private.key
```

### Configuracion del Servidor

```bash
# /etc/wireguard/wg0.conf
[Interface]
PrivateKey = clave_privada_del_servidor
Address = 10.0.0.1/24
ListenPort = 51820
PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE

[Peer]
# Cliente 1
PublicKey = clave_publica_del_cliente1
PresharedKey = clave_preshared_opcional
AllowedIPs = 10.0.0.2/32
```

### Configuracion del Cliente

```bash
# /etc/wireguard/wg0.conf
[Interface]
PrivateKey = clave_privada_del_cliente
Address = 10.0.0.2/24
DNS = 192.168.1.1

[Peer]
PublicKey = clave_publica_del_servidor
PresharedKey = clave_preshared_opcional
Endpoint = vpn.ejemplo.com:51820
AllowedIPs = 0.0.0.0/0, ::/0     # Todo el trafico por VPN
PersistentKeepalive = 25          # Para NAT traversal
```

### Comandos WireGuard

```bash
# Levantar interfaz
wg-quick up wg0

# Apagar interfaz
wg-quick down wg0

# Habilitar al inicio
systemctl enable wg-quick@wg0

# Ver estado
wg show
wg show wg0

# Configuracion manual (sin wg-quick)
ip link add wg0 type wireguard
wg setconf wg0 /etc/wireguard/wg0.conf
ip addr add 10.0.0.1/24 dev wg0
ip link set wg0 up

# Añadir peer dinamicamente
wg set wg0 peer CLAVE_PUBLICA allowed-ips 10.0.0.3/32
```

> **Para el examen:** WireGuard usa UDP exclusivamente (por defecto puerto 51820). `AllowedIPs` funciona como tabla de enrutamiento Y ACL: define que IPs se enrutan por el tunel y que IPs se aceptan del peer.

---

## Comparacion de Tecnologias VPN

| Caracteristica | IPsec | OpenVPN | WireGuard |
|---------------|-------|---------|-----------|
| Capa | 3 (red) | 4 (transporte/TLS) | 3 (red, kernel) |
| Protocolo | UDP (500, 4500) | TCP/UDP (1194) | UDP (51820) |
| Cifrado | Configurable | TLS + cifrado simetrico | ChaCha20, Curve25519 |
| Codigo | Grande y complejo | Mediano | Muy pequeño (~4000 lineas) |
| Rendimiento | Alto | Medio (userspace) | Muy alto (kernel) |
| Compatibilidad | Amplia (RFC) | Necesita cliente | Creciente |
| Configuracion | Compleja | Media | Simple |
| NAT traversal | IKEv2 nativo | Nativo (UDP) | Nativo |
| En kernel Linux | Si (XFRM) | No (userspace) | Si (desde 5.6) |
