---
tipo: comandos
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
---

# Comandos Clave - 334.4 VPN

## IPsec (strongSwan)

| Comando | Descripcion |
|---------|-------------|
| `ipsec start` | Iniciar strongSwan |
| `ipsec stop` | Detener strongSwan |
| `ipsec restart` | Reiniciar |
| `ipsec status` | Ver estado de conexiones |
| `ipsec statusall` | Estado detallado |
| `ipsec up nombre_conexion` | Levantar conexion |
| `ipsec down nombre_conexion` | Cerrar conexion |
| `ipsec reload` | Recargar configuracion |
| `ipsec listcerts` | Listar certificados |
| `ipsec listalgs` | Listar algoritmos disponibles |

## Archivos IPsec

| Archivo | Descripcion |
|---------|-------------|
| `/etc/strongswan/ipsec.conf` | Configuracion de conexiones |
| `/etc/strongswan/ipsec.secrets` | Credenciales (PSK, claves) |
| `/etc/strongswan/strongswan.conf` | Configuracion del demonio |
| `/etc/strongswan/ipsec.d/certs/` | Certificados |
| `/etc/strongswan/ipsec.d/private/` | Claves privadas |
| `/etc/strongswan/ipsec.d/cacerts/` | Certificados de CA |

## Parametros clave de ipsec.conf

| Parametro | Descripcion |
|-----------|-------------|
| `left` | IP del lado local |
| `leftsubnet` | Red protegida local |
| `right` | IP del lado remoto |
| `rightsubnet` | Red protegida remota |
| `authby=secret` | Autenticacion con PSK |
| `authby=rsasig` | Autenticacion con certificados |
| `keyexchange=ikev2` | Usar IKEv2 |
| `type=tunnel` | Modo tunel (site-to-site) |
| `type=transport` | Modo transporte (host-to-host) |
| `auto=start` | Conectar al iniciar |

## OpenVPN

| Comando | Descripcion |
|---------|-------------|
| `openvpn --config /etc/openvpn/server.conf` | Iniciar con configuracion |
| `openvpn --genkey secret ta.key` | Generar clave tls-auth |
| `systemctl start openvpn-server@server` | Iniciar como servicio |
| `systemctl enable openvpn-server@server` | Habilitar al inicio |

## Archivos OpenVPN

| Archivo | Descripcion |
|---------|-------------|
| `/etc/openvpn/server.conf` | Configuracion del servidor |
| `/etc/openvpn/client.conf` | Configuracion del cliente |
| `/etc/openvpn/easy-rsa/` | Herramientas PKI |
| `/etc/openvpn/ta.key` | Clave tls-auth/tls-crypt |
| `/var/log/openvpn.log` | Log de OpenVPN |

## WireGuard

| Comando | Descripcion |
|---------|-------------|
| `wg genkey` | Generar clave privada |
| `wg pubkey` | Derivar clave publica desde privada |
| `wg genpsk` | Generar clave preshared |
| `wg-quick up wg0` | Levantar interfaz WireGuard |
| `wg-quick down wg0` | Apagar interfaz |
| `wg show` | Ver estado de todas las interfaces |
| `wg show wg0` | Estado detallado de wg0 |
| `wg set wg0 peer PUBKEY allowed-ips IP/CIDR` | Añadir peer |
| `systemctl enable wg-quick@wg0` | Habilitar al inicio |

## Archivos WireGuard

| Archivo | Descripcion |
|---------|-------------|
| `/etc/wireguard/wg0.conf` | Configuracion de la interfaz wg0 |
| `/etc/wireguard/private.key` | Clave privada |
| `/etc/wireguard/public.key` | Clave publica |

## Parametros clave de wg0.conf

| Seccion/Parametro | Descripcion |
|-------------------|-------------|
| `[Interface] PrivateKey` | Clave privada del host |
| `[Interface] Address` | Direccion IP del tunel |
| `[Interface] ListenPort` | Puerto de escucha (defecto 51820) |
| `[Interface] PostUp/PostDown` | Scripts al levantar/apagar |
| `[Peer] PublicKey` | Clave publica del peer |
| `[Peer] AllowedIPs` | IPs permitidas del peer (enrutamiento + ACL) |
| `[Peer] Endpoint` | Direccion:puerto del peer remoto |
| `[Peer] PersistentKeepalive` | Intervalo de keepalive (segundos) |
