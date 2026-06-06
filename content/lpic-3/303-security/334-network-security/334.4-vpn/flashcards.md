---
title: "334.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "334.4"
---

# Flashcards: 334.4 - Vpn

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-001">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre el modo tunnel y transport de IPsec?

</div>
<div class="flashcard-back">

**R:** b). Tunnel encapsula el paquete IP completo; transport solo cifra el payload  En modo tunnel, se añade una nueva cabecera IP y se encapsula el paquete original completo, ideal para VPN site-to-site. En modo transport, se cifra solo el payload del paquete, usado en comunicaciones host-to-host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando genera un par de claves WireGuard (privada y publica)?

</div>
<div class="flashcard-back">

**R:** b). `wg genkey | tee privatekey | wg pubkey > publickey`  `wg genkey` genera la clave privada, `tee` la guarda y la pasa por pipe a `wg pubkey` que deriva la clave publica correspondiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-003">
<div class="flashcard-front">

**P:** En la configuracion de strongSwan (ipsec.conf), ¿que parametro especifica la autenticacion mediante certificados?

</div>
<div class="flashcard-back">

**R:** b). `authby=rsasig`  El parametro `authby=rsasig` indica autenticacion mediante firma RSA (certificados X.509). `authby=secret` usa claves precompartidas (PSK). `authby=pubkey` es una alternativa mas moderna.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-004">
<div class="flashcard-front">

**P:** ¿Que protocolo de transporte usa WireGuard?

</div>
<div class="flashcard-back">

**R:** b). UDP en puerto 51820  WireGuard usa exclusivamente UDP. El puerto por defecto es 51820, pero puede configurarse con `ListenPort` en wg0.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-005">
<div class="flashcard-front">

**P:** En OpenVPN, ¿cual es la diferencia entre las interfaces `tun` y `tap`?

</div>
<div class="flashcard-back">

**R:** b). `tun` opera en capa 3 (IP), `tap` opera en capa 2 (Ethernet)  `tun` crea un tunel punto a punto a nivel IP (capa 3), mas eficiente. `tap` emula una interfaz Ethernet (capa 2), soporta broadcast y bridging, necesario para protocolos que dependen de la capa de enlace.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-006">
<div class="flashcard-front">

**P:** ¿Que ventaja ofrece `tls-crypt` sobre `tls-auth` en OpenVPN?

</div>
<div class="flashcard-back">

**R:** b). `tls-crypt` cifra ademas el canal de control, `tls-auth` solo lo autentica  Ambos proporcionan autenticacion HMAC y proteccion contra DoS. La diferencia es que `tls-crypt` tambien cifra el canal de control, ocultando metadatos del protocolo OpenVPN y dificultando la identificacion del trafico VPN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-007">
<div class="flashcard-front">

**P:** ¿Que parametro de WireGuard en la seccion [Peer] define tanto las IPs que se enrutan por el tunel como las IPs aceptadas del peer?

</div>
<div class="flashcard-back">

**R:** b). `AllowedIPs`  `AllowedIPs` tiene doble funcion: actua como tabla de enrutamiento (define que trafico se envia al peer) y como ACL (solo acepta paquetes del peer con esas IPs de origen). `0.0.0.0/0` enruta todo el trafico por la VPN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando de strongSwan muestra el estado detallado de todas las conexiones IPsec?

</div>
<div class="flashcard-back">

**R:** b). `ipsec statusall`  `ipsec statusall` muestra informacion detallada de todas las conexiones incluyendo Security Associations (SA), algoritmos de cifrado, trafico transferido y estado de los tuneles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-009">
<div class="flashcard-front">

**P:** ¿Cual de estas tecnologias VPN esta integrada directamente en el kernel Linux (desde la version 5.6)?

</div>
<div class="flashcard-back">

**R:** c). WireGuard  WireGuard fue integrado en el kernel Linux a partir de la version 5.6, lo que le proporciona un rendimiento superior al operar directamente en el espacio del kernel. OpenVPN opera en espacio de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-010">
<div class="flashcard-front">

**P:** En una configuracion IPsec con strongSwan, ¿donde se almacenan las claves precompartidas (PSK)?

</div>
<div class="flashcard-back">

**R:** b). `/etc/strongswan/ipsec.secrets`  El archivo `ipsec.secrets` almacena las credenciales de autenticacion: claves precompartidas (PSK), referencias a claves privadas RSA y certificados. El formato para PSK es: `IP_local IP_remota : PSK "clave"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-011">
<div class="flashcard-front">

**P:** ¿Que ventaja principal ofrece IKEv2 sobre IKEv1 en la negociacion IPsec?

</div>
<div class="flashcard-back">

**R:** b). IKEv2 requiere menos mensajes (4 vs 6-9), integra NAT traversal y soporta EAP  IKEv2 simplifica la negociacion usando solo 4 mensajes frente a los 6-9 de IKEv1. Ademas integra nativamente NAT traversal, soporta autenticacion EAP y movilidad (MOBIKE), siendo la opcion preferida en configuraciones modernas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-012">
<div class="flashcard-front">

**P:** En la configuracion de OpenVPN, ¿que directiva permite enviar rutas al cliente para que acceda a la red interna del servidor?

</div>
<div class="flashcard-back">

**R:** b). `push "route 192.168.1.0 255.255.255.0"`  La directiva `push "route ..."` en la configuracion del servidor envia la ruta al cliente durante la conexion, permitiendole acceder a la subred indicada a traves del tunel VPN. Sin `push`, la ruta solo se aplicaria localmente en el servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-013">
<div class="flashcard-front">

**P:** ¿Que protocolo de IPsec proporciona cifrado y autenticacion de los datos transmitidos?

</div>
<div class="flashcard-back">

**R:** c). ESP (Encapsulating Security Payload)  ESP proporciona tanto cifrado como autenticacion de los datos. AH solo proporciona autenticacion sin cifrado y se considera obsoleto. IKE se encarga de la negociacion de claves, no del transporte de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-014">
<div class="flashcard-front">

**P:** En WireGuard, ¿cual es la funcion del parametro `PersistentKeepalive = 25` en la seccion [Peer]?

</div>
<div class="flashcard-back">

**R:** b). Envia un paquete keepalive cada 25 segundos para mantener la sesion NAT activa  Cuando un peer esta detras de NAT, el mapeo NAT puede expirar si no hay trafico. `PersistentKeepalive` envia un paquete cada N segundos para mantener abierta la traduccion NAT y permitir que el servidor pueda seguir enviando paquetes al cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-015">
<div class="flashcard-front">

**P:** ¿En que capa del modelo OSI opera OpenVPN?

</div>
<div class="flashcard-back">

**R:** c). Capa 4 (Transporte/TLS)  OpenVPN opera sobre TLS/SSL en la capa de transporte, usando TCP o UDP en el puerto 1194 por defecto. A diferencia de IPsec que opera en capa 3 y WireGuard que opera en capa 3 dentro del kernel, OpenVPN funciona en espacio de usuario sobre la capa de transporte.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-016">
<div class="flashcard-front">

**P:** ¿Que algoritmos criptograficos utiliza WireGuard de forma fija (no configurable)?

</div>
<div class="flashcard-back">

**R:** b). ChaCha20 para cifrado y Curve25519 para intercambio de claves  WireGuard usa un conjunto fijo de algoritmos criptograficos modernos: ChaCha20 para cifrado simetrico, Poly1305 para autenticacion, Curve25519 para intercambio de claves, BLAKE2s para hashing y SipHash24 para hashtable keys. No permite configurar otros algoritmos, simplificando la configuracion y reduciendo la superficie de ataque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-017">
<div class="flashcard-front">

**P:** En una configuracion strongSwan site-to-site, ¿que parametro define la subred local protegida por el tunel IPsec?

</div>
<div class="flashcard-back">

**R:** b). `leftsubnet`  En ipsec.conf, `left` hace referencia al extremo local y `right` al remoto. `leftsubnet` define la red local que sera encapsulada y protegida por el tunel. `rightsubnet` define la red remota. Ejemplo: `leftsubnet=192.168.1.0/24`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-018">
<div class="flashcard-front">

**P:** ¿Que puerto UDP usa IPsec para NAT traversal?

</div>
<div class="flashcard-back">

**R:** b). 4500  IPsec utiliza el puerto UDP 500 para la negociacion IKE inicial. Cuando se detecta NAT en la ruta, la comunicacion se traslada al puerto UDP 4500 para encapsular los paquetes ESP dentro de UDP y atravesar el NAT (NAT-T). El puerto 1194 es de OpenVPN y 51820 de WireGuard.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-019">
<div class="flashcard-front">

**P:** En la configuracion de OpenVPN, ¿que directivas reducen los privilegios del demonio despues de la inicializacion?

</div>
<div class="flashcard-back">

**R:** b). `user nobody` y `group nogroup`  Las directivas `user nobody` y `group nogroup` hacen que OpenVPN cambie su usuario y grupo efectivo despues de la inicializacion, reduciendo el impacto de una posible vulnerabilidad. Se combinan con `persist-key` y `persist-tun` para evitar problemas al no poder reabrir ciertos recursos como usuario sin privilegios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-020">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia clave entre los puertos de IPsec (500/4500), OpenVPN (1194) y WireGuard (51820) respecto al protocolo de transporte?

</div>
<div class="flashcard-back">

**R:** b). IPsec y WireGuard usan solo UDP; OpenVPN puede usar TCP o UDP  IPsec opera sobre UDP (puertos 500 y 4500) y WireGuard usa exclusivamente UDP (puerto 51820). OpenVPN es la unica de las tres que ofrece la opcion de funcionar tanto sobre TCP como sobre UDP (puerto 1194 por defecto), lo que puede ser util para atravesar firewalls restrictivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando levanta la interfaz WireGuard wg0 utilizando el archivo de configuracion /etc/wireguard/wg0.conf?

</div>
<div class="flashcard-back">

**R:** wg-quick up wg0. `wg-quick` es la utilidad de alto nivel que lee la configuracion de `/etc/wireguard/wg0.conf`, crea la interfaz, asigna la direccion IP, configura las rutas y ejecuta los comandos PostUp definidos, todo en un solo paso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando de strongSwan muestra el estado resumido de todas las conexiones IPsec activas?

</div>
<div class="flashcard-back">

**R:** ipsec status. `ipsec status` muestra un resumen de las conexiones y Security Associations activas. Para informacion mas detallada se puede usar `ipsec statusall`, que incluye algoritmos, trafico transferido y configuracion completa de cada tunel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando genera una clave preshared de WireGuard para proteccion post-cuantica?

</div>
<div class="flashcard-back">

**R:** wg genpsk. `wg genpsk` genera una clave preshared (PSK) de 256 bits que se configura en el parametro `PresharedKey` de la seccion [Peer]. Esta clave añade una capa adicional de cifrado simetrico sobre el intercambio Curve25519, proporcionando proteccion contra futuros ataques cuanticos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando de OpenVPN genera la clave estatica utilizada para tls-auth o tls-crypt?

</div>
<div class="flashcard-back">

**R:** openvpn --genkey secret /etc/openvpn/ta.key. El comando `openvpn --genkey secret` genera una clave estatica HMAC que puede usarse con `tls-auth` (autenticacion del canal de control) o `tls-crypt` (cifrado y autenticacion del canal de control). Esta clave debe compartirse entre servidor y clientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando habilita la interfaz WireGuard wg0 para que se inicie automaticamente con el sistema?

</div>
<div class="flashcard-back">

**R:** systemctl enable wg-quick@wg0. `wg-quick@wg0` es una unidad de servicio plantilla (template unit) de systemd que gestiona la interfaz wg0. Al habilitarla con `systemctl enable`, la interfaz se levantara automaticamente en cada arranque del sistema usando la configuracion de `/etc/wireguard/wg0.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre IPsec, OpenVPN y WireGuard. Domina la configuracion...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre IPsec, OpenVPN y WireGuard. Domina la configuracion basica de cada uno, los modos de IPsec (tunnel vs transport), y la generacion de claves de WireGuard.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los parametros `left` (local) y `right` (remoto) en ipsec.conf. `leftsubn...

</div>
<div class="flashcard-back">

**R:** Conoce los parametros `left` (local) y `right` (remoto) en ipsec.conf. `leftsubnet`/`rightsubnet` definen las redes protegidas. `authby=secret` usa PSK, `authby=rsasig` usa certificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: WireGuard usa UDP exclusivamente (por defecto puerto 51820). `AllowedIPs` funcio...

</div>
<div class="flashcard-back">

**R:** WireGuard usa UDP exclusivamente (por defecto puerto 51820). `AllowedIPs` funciona como tabla de enrutamiento Y ACL: define que IPs se enrutan por el tunel y que IPs se aceptan del peer.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-029">
<div class="flashcard-front">

**P:** Que es/son IPsec?

</div>
<div class="flashcard-back">

**R:** IPsec opera en la capa de red (capa 3) y es un estandar IETF para comunicacion segura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-030">
<div class="flashcard-front">

**P:** Que es/son OpenVPN?

</div>
<div class="flashcard-back">

**R:** OpenVPN opera en espacio de usuario sobre TLS/SSL, usando la capa de transporte (TCP/UDP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son WireGuard?

</div>
<div class="flashcard-back">

**R:** WireGuard es un protocolo VPN moderno, simple y de alto rendimiento integrado en el kernel Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son Comparacion de Tecnologias VPN?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | IPsec | OpenVPN | WireGuard |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="334.4">
</div>

<div class="flashcard" data-id="334.4-fc-033">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

