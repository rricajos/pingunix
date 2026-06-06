---
tipo: ejercicios
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

# Ejercicios - 334.4 VPN

### Pregunta 1
¿Cual es la diferencia principal entre el modo tunnel y transport de IPsec?

a) Tunnel usa cifrado, transport no
b) Tunnel encapsula el paquete IP completo; transport solo cifra el payload
c) Transport es mas seguro que tunnel
d) Tunnel solo funciona con IKEv2

<details><summary>Respuesta</summary>

**b)** Tunnel encapsula el paquete IP completo; transport solo cifra el payload

En modo tunnel, se añade una nueva cabecera IP y se encapsula el paquete original completo, ideal para VPN site-to-site. En modo transport, se cifra solo el payload del paquete, usado en comunicaciones host-to-host.
</details>

### Pregunta 2
¿Que comando genera un par de claves WireGuard (privada y publica)?

a) `wireguard --generate-keys`
b) `wg genkey | tee privatekey | wg pubkey > publickey`
c) `wg-quick genkeys`
d) `openssl genrsa -out wg.key 2048 && openssl rsa -pubout -in wg.key -out wg.pub`

<details><summary>Respuesta</summary>

**b)** `wg genkey | tee privatekey | wg pubkey > publickey`

`wg genkey` genera la clave privada, `tee` la guarda y la pasa por pipe a `wg pubkey` que deriva la clave publica correspondiente.
</details>

### Pregunta 3
En la configuracion de strongSwan (ipsec.conf), ¿que parametro especifica la autenticacion mediante certificados?

a) `authby=cert`
b) `authby=rsasig`
c) `auth=certificate`
d) `authentication=x509`

<details><summary>Respuesta</summary>

**b)** `authby=rsasig`

El parametro `authby=rsasig` indica autenticacion mediante firma RSA (certificados X.509). `authby=secret` usa claves precompartidas (PSK). `authby=pubkey` es una alternativa mas moderna.
</details>

### Pregunta 4
¿Que protocolo de transporte usa WireGuard?

a) TCP en puerto 51820
b) UDP en puerto 51820
c) TCP o UDP, configurable
d) SCTP en puerto 51820

<details><summary>Respuesta</summary>

**b)** UDP en puerto 51820

WireGuard usa exclusivamente UDP. El puerto por defecto es 51820, pero puede configurarse con `ListenPort` en wg0.conf.
</details>

### Pregunta 5
En OpenVPN, ¿cual es la diferencia entre las interfaces `tun` y `tap`?

a) `tun` cifra el trafico, `tap` no
b) `tun` opera en capa 3 (IP), `tap` opera en capa 2 (Ethernet)
c) `tap` es mas rapido que `tun`
d) `tun` solo soporta IPv4, `tap` soporta IPv4 e IPv6

<details><summary>Respuesta</summary>

**b)** `tun` opera en capa 3 (IP), `tap` opera en capa 2 (Ethernet)

`tun` crea un tunel punto a punto a nivel IP (capa 3), mas eficiente. `tap` emula una interfaz Ethernet (capa 2), soporta broadcast y bridging, necesario para protocolos que dependen de la capa de enlace.
</details>

### Pregunta 6
¿Que ventaja ofrece `tls-crypt` sobre `tls-auth` en OpenVPN?

a) `tls-crypt` usa certificados, `tls-auth` usa PSK
b) `tls-crypt` cifra ademas el canal de control, `tls-auth` solo lo autentica
c) `tls-crypt` es mas rapido
d) `tls-auth` esta obsoleto y no funciona en versiones recientes

<details><summary>Respuesta</summary>

**b)** `tls-crypt` cifra ademas el canal de control, `tls-auth` solo lo autentica

Ambos proporcionan autenticacion HMAC y proteccion contra DoS. La diferencia es que `tls-crypt` tambien cifra el canal de control, ocultando metadatos del protocolo OpenVPN y dificultando la identificacion del trafico VPN.
</details>

### Pregunta 7
¿Que parametro de WireGuard en la seccion [Peer] define tanto las IPs que se enrutan por el tunel como las IPs aceptadas del peer?

a) `Routes`
b) `AllowedIPs`
c) `RoutedSubnets`
d) `PeerNetworks`

<details><summary>Respuesta</summary>

**b)** `AllowedIPs`

`AllowedIPs` tiene doble funcion: actua como tabla de enrutamiento (define que trafico se envia al peer) y como ACL (solo acepta paquetes del peer con esas IPs de origen). `0.0.0.0/0` enruta todo el trafico por la VPN.
</details>

### Pregunta 8
¿Que comando de strongSwan muestra el estado detallado de todas las conexiones IPsec?

a) `ipsec status --verbose`
b) `ipsec statusall`
c) `ipsec show connections`
d) `strongswan --list-tunnels`

<details><summary>Respuesta</summary>

**b)** `ipsec statusall`

`ipsec statusall` muestra informacion detallada de todas las conexiones incluyendo Security Associations (SA), algoritmos de cifrado, trafico transferido y estado de los tuneles.
</details>

### Pregunta 9
¿Cual de estas tecnologias VPN esta integrada directamente en el kernel Linux (desde la version 5.6)?

a) OpenVPN
b) strongSwan
c) WireGuard
d) Libreswan

<details><summary>Respuesta</summary>

**c)** WireGuard

WireGuard fue integrado en el kernel Linux a partir de la version 5.6, lo que le proporciona un rendimiento superior al operar directamente en el espacio del kernel. OpenVPN opera en espacio de usuario.
</details>

### Pregunta 10
En una configuracion IPsec con strongSwan, ¿donde se almacenan las claves precompartidas (PSK)?

a) `/etc/strongswan/ipsec.conf`
b) `/etc/strongswan/ipsec.secrets`
c) `/etc/strongswan/psk.conf`
d) `/etc/strongswan/strongswan.conf`

<details><summary>Respuesta</summary>

**b)** `/etc/strongswan/ipsec.secrets`

El archivo `ipsec.secrets` almacena las credenciales de autenticacion: claves precompartidas (PSK), referencias a claves privadas RSA y certificados. El formato para PSK es: `IP_local IP_remota : PSK "clave"`.
</details>

### Pregunta 11

¿Que ventaja principal ofrece IKEv2 sobre IKEv1 en la negociacion IPsec?

a) IKEv2 usa menos cifrado y es mas rapido
b) IKEv2 requiere menos mensajes (4 vs 6-9), integra NAT traversal y soporta EAP
c) IKEv2 no necesita certificados
d) IKEv2 solo funciona con strongSwan, mientras que IKEv1 es universal

<details><summary>Respuesta</summary>

**b)** IKEv2 requiere menos mensajes (4 vs 6-9), integra NAT traversal y soporta EAP

IKEv2 simplifica la negociacion usando solo 4 mensajes frente a los 6-9 de IKEv1. Ademas integra nativamente NAT traversal, soporta autenticacion EAP y movilidad (MOBIKE), siendo la opcion preferida en configuraciones modernas.
</details>

### Pregunta 12

En la configuracion de OpenVPN, ¿que directiva permite enviar rutas al cliente para que acceda a la red interna del servidor?

a) `route 192.168.1.0 255.255.255.0`
b) `push "route 192.168.1.0 255.255.255.0"`
c) `add-route 192.168.1.0/24`
d) `client-route 192.168.1.0 255.255.255.0`

<details><summary>Respuesta</summary>

**b)** `push "route 192.168.1.0 255.255.255.0"`

La directiva `push "route ..."` en la configuracion del servidor envia la ruta al cliente durante la conexion, permitiendole acceder a la subred indicada a traves del tunel VPN. Sin `push`, la ruta solo se aplicaria localmente en el servidor.
</details>

### Pregunta 13

¿Que protocolo de IPsec proporciona cifrado y autenticacion de los datos transmitidos?

a) IKE (Internet Key Exchange)
b) AH (Authentication Header)
c) ESP (Encapsulating Security Payload)
d) ISAKMP

<details><summary>Respuesta</summary>

**c)** ESP (Encapsulating Security Payload)

ESP proporciona tanto cifrado como autenticacion de los datos. AH solo proporciona autenticacion sin cifrado y se considera obsoleto. IKE se encarga de la negociacion de claves, no del transporte de datos.
</details>

### Pregunta 14

En WireGuard, ¿cual es la funcion del parametro `PersistentKeepalive = 25` en la seccion [Peer]?

a) Reinicia la conexion cada 25 segundos
b) Envia un paquete keepalive cada 25 segundos para mantener la sesion NAT activa
c) Limita la conexion a 25 segundos de inactividad
d) Define el timeout de reconexion en 25 intentos

<details><summary>Respuesta</summary>

**b)** Envia un paquete keepalive cada 25 segundos para mantener la sesion NAT activa

Cuando un peer esta detras de NAT, el mapeo NAT puede expirar si no hay trafico. `PersistentKeepalive` envia un paquete cada N segundos para mantener abierta la traduccion NAT y permitir que el servidor pueda seguir enviando paquetes al cliente.
</details>

### Pregunta 15

¿En que capa del modelo OSI opera OpenVPN?

a) Capa 2 (Enlace de datos)
b) Capa 3 (Red)
c) Capa 4 (Transporte/TLS)
d) Capa 7 (Aplicacion)

<details><summary>Respuesta</summary>

**c)** Capa 4 (Transporte/TLS)

OpenVPN opera sobre TLS/SSL en la capa de transporte, usando TCP o UDP en el puerto 1194 por defecto. A diferencia de IPsec que opera en capa 3 y WireGuard que opera en capa 3 dentro del kernel, OpenVPN funciona en espacio de usuario sobre la capa de transporte.
</details>

### Pregunta 16

¿Que algoritmos criptograficos utiliza WireGuard de forma fija (no configurable)?

a) AES-256-GCM y RSA-4096
b) ChaCha20 para cifrado y Curve25519 para intercambio de claves
c) 3DES y Diffie-Hellman grupo 14
d) Blowfish y ECDSA P-256

<details><summary>Respuesta</summary>

**b)** ChaCha20 para cifrado y Curve25519 para intercambio de claves

WireGuard usa un conjunto fijo de algoritmos criptograficos modernos: ChaCha20 para cifrado simetrico, Poly1305 para autenticacion, Curve25519 para intercambio de claves, BLAKE2s para hashing y SipHash24 para hashtable keys. No permite configurar otros algoritmos, simplificando la configuracion y reduciendo la superficie de ataque.
</details>

### Pregunta 17

En una configuracion strongSwan site-to-site, ¿que parametro define la subred local protegida por el tunel IPsec?

a) `localnet`
b) `leftsubnet`
c) `leftnetwork`
d) `subnet`

<details><summary>Respuesta</summary>

**b)** `leftsubnet`

En ipsec.conf, `left` hace referencia al extremo local y `right` al remoto. `leftsubnet` define la red local que sera encapsulada y protegida por el tunel. `rightsubnet` define la red remota. Ejemplo: `leftsubnet=192.168.1.0/24`.
</details>

### Pregunta 18

¿Que puerto UDP usa IPsec para NAT traversal?

a) 500
b) 4500
c) 1194
d) 51820

<details><summary>Respuesta</summary>

**b)** 4500

IPsec utiliza el puerto UDP 500 para la negociacion IKE inicial. Cuando se detecta NAT en la ruta, la comunicacion se traslada al puerto UDP 4500 para encapsular los paquetes ESP dentro de UDP y atravesar el NAT (NAT-T). El puerto 1194 es de OpenVPN y 51820 de WireGuard.
</details>

### Pregunta 19

En la configuracion de OpenVPN, ¿que directivas reducen los privilegios del demonio despues de la inicializacion?

a) `drop-privileges`
b) `user nobody` y `group nogroup`
c) `runas=unprivileged`
d) `security-level low`

<details><summary>Respuesta</summary>

**b)** `user nobody` y `group nogroup`

Las directivas `user nobody` y `group nogroup` hacen que OpenVPN cambie su usuario y grupo efectivo despues de la inicializacion, reduciendo el impacto de una posible vulnerabilidad. Se combinan con `persist-key` y `persist-tun` para evitar problemas al no poder reabrir ciertos recursos como usuario sin privilegios.
</details>

### Pregunta 20

¿Cual es la diferencia clave entre los puertos de IPsec (500/4500), OpenVPN (1194) y WireGuard (51820) respecto al protocolo de transporte?

a) Todos usan exclusivamente UDP
b) IPsec y WireGuard usan solo UDP; OpenVPN puede usar TCP o UDP
c) Todos pueden usar TCP o UDP
d) Solo OpenVPN usa UDP; IPsec y WireGuard usan TCP

<details><summary>Respuesta</summary>

**b)** IPsec y WireGuard usan solo UDP; OpenVPN puede usar TCP o UDP

IPsec opera sobre UDP (puertos 500 y 4500) y WireGuard usa exclusivamente UDP (puerto 51820). OpenVPN es la unica de las tres que ofrece la opcion de funcionar tanto sobre TCP como sobre UDP (puerto 1194 por defecto), lo que puede ser util para atravesar firewalls restrictivos.
</details>

### Pregunta 21

¿Que comando levanta la interfaz WireGuard wg0 utilizando el archivo de configuracion /etc/wireguard/wg0.conf?

<input type="text" class="fill-blank" data-answer="wg-quick up wg0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wg-quick up wg0**

`wg-quick` es la utilidad de alto nivel que lee la configuracion de `/etc/wireguard/wg0.conf`, crea la interfaz, asigna la direccion IP, configura las rutas y ejecuta los comandos PostUp definidos, todo en un solo paso.
</details>

### Pregunta 22

¿Que comando de strongSwan muestra el estado resumido de todas las conexiones IPsec activas?

<input type="text" class="fill-blank" data-answer="ipsec status" data-alt="ipsec statusall" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipsec status**

`ipsec status` muestra un resumen de las conexiones y Security Associations activas. Para informacion mas detallada se puede usar `ipsec statusall`, que incluye algoritmos, trafico transferido y configuracion completa de cada tunel.
</details>

### Pregunta 23

¿Que comando genera una clave preshared de WireGuard para proteccion post-cuantica?

<input type="text" class="fill-blank" data-answer="wg genpsk" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wg genpsk**

`wg genpsk` genera una clave preshared (PSK) de 256 bits que se configura en el parametro `PresharedKey` de la seccion [Peer]. Esta clave añade una capa adicional de cifrado simetrico sobre el intercambio Curve25519, proporcionando proteccion contra futuros ataques cuanticos.
</details>

### Pregunta 24

¿Que comando de OpenVPN genera la clave estatica utilizada para tls-auth o tls-crypt?

<input type="text" class="fill-blank" data-answer="openvpn --genkey secret /etc/openvpn/ta.key" data-alt="openvpn --genkey secret ta.key" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**openvpn --genkey secret /etc/openvpn/ta.key**

El comando `openvpn --genkey secret` genera una clave estatica HMAC que puede usarse con `tls-auth` (autenticacion del canal de control) o `tls-crypt` (cifrado y autenticacion del canal de control). Esta clave debe compartirse entre servidor y clientes.
</details>

### Pregunta 25

¿Que comando habilita la interfaz WireGuard wg0 para que se inicie automaticamente con el sistema?

<input type="text" class="fill-blank" data-answer="systemctl enable wg-quick@wg0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl enable wg-quick@wg0**

`wg-quick@wg0` es una unidad de servicio plantilla (template unit) de systemd que gestiona la interfaz wg0. Al habilitarla con `systemctl enable`, la interfaz se levantara automaticamente en cada arranque del sistema usando la configuracion de `/etc/wireguard/wg0.conf`.
</details>
