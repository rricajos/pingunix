---
title: "212.5 - OpenVPN: Ejercicios"
tags: [lpic-2, examen-202, tema-212, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "212"
subtema: "212.5"
---

# 212.5 - OpenVPN: Ejercicios

### Pregunta 1

¿Cuál es la diferencia principal entre las interfaces `tun` y `tap` en OpenVPN?

a) `tun` usa TCP y `tap` usa UDP
b) `tun` opera en capa 3 (routing) y `tap` en capa 2 (bridging)
c) `tun` es más lento pero más seguro que `tap`
d) `tun` solo soporta IPv4 y `tap` soporta IPv4 e IPv6

<details>
<summary>Respuesta</summary>

**b) `tun` opera en capa 3 (routing) y `tap` en capa 2 (bridging)**

La interfaz `tun` crea un túnel de capa 3 (IP) adecuado para routing entre subredes diferentes. La interfaz `tap` emula un dispositivo Ethernet de capa 2, permitiendo bridging y tráfico broadcast. `tun` es más eficiente y el modo recomendado para la mayoría de escenarios.
</details>

---

### Pregunta 2

¿Qué secuencia de comandos easy-rsa crea correctamente un certificado para un cliente llamado "usuario1"?

a) `./easyrsa gen-req usuario1` seguido de `./easyrsa sign-req server usuario1`
b) `./easyrsa build-client usuario1`
c) `./easyrsa gen-req usuario1 nopass` seguido de `./easyrsa sign-req client usuario1`
d) `./easyrsa create-cert usuario1 --type=client`

<details>
<summary>Respuesta</summary>

**c) `./easyrsa gen-req usuario1 nopass` seguido de `./easyrsa sign-req client usuario1`**

Primero se genera la solicitud de certificado con `gen-req` (la opción `nopass` omite la passphrase), y luego se firma con `sign-req` especificando el tipo `client`. Para certificados de servidor, se usa el tipo `server` en lugar de `client`.
</details>

---

### Pregunta 3

¿Qué directiva en la configuración del servidor OpenVPN permite que los clientes VPN se comuniquen directamente entre sí?

a) `allow-client-communication`
b) `client-to-client`
c) `inter-client yes`
d) `push "allow-peer"`

<details>
<summary>Respuesta</summary>

**b) `client-to-client`**

Por defecto, el tráfico entre clientes no se permite en OpenVPN. La directiva `client-to-client` habilita la comunicación directa entre clientes conectados al mismo servidor sin que el tráfico pase por las reglas del firewall del servidor.
</details>

---

### Pregunta 4

¿Qué comando genera la clave estática utilizada para `tls-auth` en OpenVPN?

a) `openssl genrsa -out ta.key 2048`
b) `openvpn --genkey secret /etc/openvpn/ta.key`
c) `easyrsa gen-tls-key`
d) `ssh-keygen -t hmac -f ta.key`

<details>
<summary>Respuesta</summary>

**b) `openvpn --genkey secret /etc/openvpn/ta.key`**

El comando `openvpn --genkey secret` genera una clave estática que se usa con `tls-auth` o `tls-crypt` para añadir una capa adicional de seguridad HMAC al handshake TLS, protegiendo contra ataques DoS y escaneo de puertos.
</details>

---

### Pregunta 5

En la configuración de `tls-auth`, ¿qué valor de dirección usa el servidor y cuál el cliente?

a) Servidor: 1, Cliente: 0
b) Servidor: 0, Cliente: 1
c) Ambos usan 0
d) No se especifica dirección

<details>
<summary>Respuesta</summary>

**b) Servidor: 0, Cliente: 1**

Con `tls-auth`, el servidor usa la dirección `0` (`tls-auth ta.key 0`) y el cliente usa la dirección `1` (`tls-auth ta.key 1`). Esto asegura que las firmas HMAC se generen y verifiquen correctamente en cada extremo. Con `tls-crypt`, no se especifica dirección.
</details>

---

### Pregunta 6

¿Qué comando systemd habilita e inicia un servidor OpenVPN cuyo archivo de configuración es `/etc/openvpn/server/server.conf`?

a) `systemctl enable --now openvpn@server`
b) `systemctl enable --now openvpn-server@server`
c) `systemctl enable --now openvpn-server`
d) `systemctl enable --now openvpn-server@server.conf`

<details>
<summary>Respuesta</summary>

**b) `systemctl enable --now openvpn-server@server`**

La unidad de systemd `openvpn-server@` es una plantilla (template unit). El nombre después de `@` corresponde al nombre del archivo de configuración sin la extensión `.conf` dentro de `/etc/openvpn/server/`. La opción `--now` combina `enable` y `start` en un solo comando.
</details>

---

### Pregunta 7

¿Qué directiva en la configuración del cliente OpenVPN verifica que el certificado presentado por el servidor es realmente de tipo servidor?

a) `verify-server-cert`
b) `remote-cert-tls server`
c) `tls-verify server`
d) `check-cert-type server`

<details>
<summary>Respuesta</summary>

**b) `remote-cert-tls server`**

La directiva `remote-cert-tls server` verifica que el certificado presentado por el servidor durante el handshake TLS tenga el atributo de uso extendido de clave (EKU) de tipo servidor. Esto previene que un cliente comprometido se haga pasar por servidor.
</details>

---

### Pregunta 8

¿Qué comando de easy-rsa genera los parámetros Diffie-Hellman necesarios para el servidor OpenVPN?

a) `./easyrsa gen-key dh`
b) `./easyrsa build-dh`
c) `./easyrsa gen-dh`
d) `./easyrsa create-dh`

<details>
<summary>Respuesta</summary>

**c) `./easyrsa gen-dh`**

El comando `./easyrsa gen-dh` genera los parámetros Diffie-Hellman necesarios para el intercambio seguro de claves. El archivo resultante (`dh.pem`) se referencia en la configuración del servidor con la directiva `dh`. Este proceso puede tardar varios minutos dependiendo del tamaño de clave.
</details>

---

### Pregunta 9

Un administrador quiere que todo el tráfico de los clientes VPN se enrute a través del servidor OpenVPN. ¿Qué directiva debe añadir al archivo server.conf?

a) `push "default-route"`
b) `push "redirect-gateway def1 bypass-dhcp"`
c) `route-all-traffic yes`
d) `push "route 0.0.0.0 0.0.0.0"`

<details>
<summary>Respuesta</summary>

**b) `push "redirect-gateway def1 bypass-dhcp"`**

La directiva `push "redirect-gateway def1 bypass-dhcp"` informa a los clientes que deben redirigir todo su tráfico de Internet a través del túnel VPN. `def1` modifica la tabla de rutas del cliente sin eliminar la ruta por defecto original, y `bypass-dhcp` excluye el tráfico DHCP local.
</details>

---

### Pregunta 10

¿Qué dos pasos adicionales de configuración del sistema son necesarios en el servidor para que los clientes OpenVPN puedan acceder a Internet a través de la VPN?

a) Instalar un proxy HTTP y configurar DNS
b) Habilitar IP forwarding y configurar NAT/masquerading
c) Crear un puente de red (bridge) y habilitar ARP proxy
d) Configurar DHCP relay y habilitar multicast

<details>
<summary>Respuesta</summary>

**b) Habilitar IP forwarding y configurar NAT/masquerading**

Para que los clientes VPN accedan a Internet a través del servidor, se necesitan dos cosas: 1) Habilitar IP forwarding (`net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`) para que el kernel reenvíe paquetes entre interfaces, y 2) configurar NAT con `iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE` para traducir las direcciones de la red VPN.
</details>

---

### Pregunta 11

¿Qué directiva de OpenVPN envía rutas de redes internas a los clientes para que sepan cómo alcanzarlas a través del túnel?

a) `route-push 192.168.1.0 255.255.255.0`
b) `push "route 192.168.1.0 255.255.255.0"`
c) `client-route 192.168.1.0/24`
d) `add-route 192.168.1.0 255.255.255.0`

<details>
<summary>Respuesta</summary>

**b) `push "route 192.168.1.0 255.255.255.0"`**

La directiva `push "route ..."` en la configuración del servidor envía rutas estáticas a los clientes VPN cuando se conectan. Esto permite que los clientes sepan que deben enrutar el tráfico hacia esas redes a través del túnel VPN.
</details>

---

### Pregunta 12

¿Qué directiva en la configuración del servidor OpenVPN define la subred que se asigna a los clientes VPN?

a) `network 10.8.0.0 255.255.255.0`
b) `vpn-subnet 10.8.0.0/24`
c) `server 10.8.0.0 255.255.255.0`
d) `ifconfig 10.8.0.0 255.255.255.0`

<details>
<summary>Respuesta</summary>

**c) `server 10.8.0.0 255.255.255.0`**

La directiva `server` es un atajo que configura automáticamente la subred VPN, el pool de IPs para clientes, las rutas necesarias y el modo de servidor. En este ejemplo, el servidor recibe la IP 10.8.0.1 y los clientes se asignan direcciones del rango 10.8.0.0/24.
</details>

---

### Pregunta 13

¿Qué diferencia hay entre `tls-auth` y `tls-crypt` en OpenVPN?

a) `tls-auth` cifra todo el tráfico, `tls-crypt` solo firma
b) `tls-auth` firma los paquetes de control con HMAC, `tls-crypt` además los cifra
c) `tls-crypt` es más antiguo y menos seguro que `tls-auth`
d) No hay diferencia funcional, son alias

<details>
<summary>Respuesta</summary>

**b) `tls-auth` firma los paquetes de control con HMAC, `tls-crypt` además los cifra**

`tls-auth` añade una firma HMAC a los paquetes del handshake TLS para verificar su autenticidad. `tls-crypt` va un paso más allá cifrando también los paquetes de control, lo que oculta la negociación TLS y dificulta la identificación del tráfico OpenVPN.
</details>

---

### Pregunta 14

¿Qué directiva de OpenVPN reduce los privilegios del proceso después de la inicialización, ejecutándose como un usuario no privilegiado?

a) `run-as nobody`
b) `user nobody`
c) `setuid nobody`
d) `privilege nobody`

<details>
<summary>Respuesta</summary>

**b) `user nobody`**

La directiva `user nobody` (junto con `group nogroup`) reduce los privilegios del proceso OpenVPN después de completar la inicialización. Esto limita el daño potencial si el proceso es comprometido, ya que opera con los mínimos privilegios necesarios.
</details>

---

### Pregunta 15

¿Qué archivo registra las asignaciones de direcciones IP persistentes de los clientes OpenVPN?

a) /var/log/openvpn/clients.log
b) /var/log/openvpn/ipp.txt
c) /etc/openvpn/ip-pool.conf
d) /var/log/openvpn/openvpn-status.log

<details>
<summary>Respuesta</summary>

**b) /var/log/openvpn/ipp.txt**

El archivo `ipp.txt` (configurado con la directiva `ifconfig-pool-persist`) almacena las asociaciones entre clientes (por nombre de certificado) y sus direcciones IP asignadas, permitiendo que un cliente reciba la misma IP en reconexiones sucesivas.
</details>

---

### Pregunta 16

¿Qué comando de easy-rsa revoca el certificado de un cliente llamado "cliente1"?

a) `./easyrsa delete cliente1`
b) `./easyrsa revoke cliente1`
c) `./easyrsa invalidate cliente1`
d) `./easyrsa remove-cert cliente1`

<details>
<summary>Respuesta</summary>

**b) `./easyrsa revoke cliente1`**

El comando `./easyrsa revoke cliente1` marca el certificado del cliente como revocado. Después se debe ejecutar `./easyrsa gen-crl` para generar la lista de revocación actualizada (`crl.pem`), y el servidor debe estar configurado con `crl-verify` para verificarla.
</details>

---

### Pregunta 17

¿Qué directiva de OpenVPN mantiene las claves en memoria y el túnel activo durante un reinicio del servicio con señal SIGUSR1?

a) `keep-alive`
b) `persist-key` y `persist-tun`
c) `maintain-state`
d) `save-keys`

<details>
<summary>Respuesta</summary>

**b) `persist-key` y `persist-tun`**

Las directivas `persist-key` y `persist-tun` son importantes cuando se ejecuta con privilegios reducidos (`user nobody`). `persist-key` evita releer las claves privadas (que requieren privilegios), y `persist-tun` evita cerrar y reabrir la interfaz tun/tap durante reinicios suaves.
</details>

---

### Pregunta 18

¿Qué protocolo de transporte y puerto utiliza OpenVPN por defecto?

a) TCP puerto 443
b) UDP puerto 1194
c) TCP puerto 1194
d) UDP puerto 1195

<details>
<summary>Respuesta</summary>

**b) UDP puerto 1194**

OpenVPN utiliza por defecto el protocolo UDP en el puerto 1194. UDP es preferido porque ofrece mejor rendimiento al evitar el problema de "TCP sobre TCP". Sin embargo, se puede configurar con TCP (generalmente en puerto 443) para atravesar firewalls restrictivos.
</details>

---

### Pregunta 19

¿Qué directiva del servidor OpenVPN establece los intervalos de keepalive para detectar clientes desconectados?

a) `ping 10 120`
b) `keepalive 10 120`
c) `heartbeat 10 120`
d) `alive-check 10 120`

<details>
<summary>Respuesta</summary>

**b) `keepalive 10 120`**

La directiva `keepalive 10 120` envía pings cada 10 segundos y considera la conexión caída si no recibe respuesta en 120 segundos. Es un atajo que configura automáticamente los parámetros `ping` y `ping-restart` tanto en el servidor como en los clientes.
</details>

---

### Pregunta 20

¿Qué directiva en la configuración del cliente OpenVPN verifica que el certificado del servidor tiene el atributo Extended Key Usage correcto?

a) `verify-server`
b) `remote-cert-tls server`
c) `tls-verify server`
d) `ns-cert-type server`

<details>
<summary>Respuesta</summary>

**b) `remote-cert-tls server`**

La directiva `remote-cert-tls server` verifica que el certificado presentado por el servidor tiene el atributo EKU (Extended Key Usage) de tipo servidor. Esto previene un ataque donde un cliente comprometido podría hacerse pasar por servidor usando su propio certificado de cliente.
</details>

---

### Pregunta 21

¿Qué comando genera la clave estática utilizada para tls-auth en OpenVPN?

<input type="text" class="fill-blank" data-answer="openvpn --genkey secret /etc/openvpn/ta.key" data-alt="openvpn --genkey secret ta.key,openvpn --genkey secret" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**openvpn --genkey secret /etc/openvpn/ta.key**

El comando `openvpn --genkey secret` genera una clave estática de 2048 bits que se comparte entre servidor y clientes. Esta clave se usa con `tls-auth` o `tls-crypt` para añadir una capa adicional de seguridad al handshake TLS.
</details>

---

### Pregunta 22

¿Qué comando de easy-rsa inicializa la infraestructura de clave pública (PKI)?

<input type="text" class="fill-blank" data-answer="./easyrsa init-pki" data-alt="easyrsa init-pki" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**./easyrsa init-pki**

El comando `./easyrsa init-pki` crea la estructura de directorios necesaria para la PKI de OpenVPN, incluyendo los directorios para claves privadas, solicitudes y certificados emitidos. Es el primer paso antes de crear la autoridad certificadora con `build-ca`.
</details>

---

### Pregunta 23

¿Qué comando de easy-rsa genera los parámetros Diffie-Hellman necesarios para el servidor?

<input type="text" class="fill-blank" data-answer="./easyrsa gen-dh" data-alt="easyrsa gen-dh" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**./easyrsa gen-dh**

El comando `./easyrsa gen-dh` genera los parámetros Diffie-Hellman (`dh.pem`) necesarios para el intercambio seguro de claves en el handshake TLS del servidor. Este proceso puede tardar varios minutos y solo se necesita ejecutar en el servidor, no en los clientes.
</details>

---

### Pregunta 24

¿Qué comando de easy-rsa genera la lista de revocación de certificados (CRL) después de revocar un certificado?

<input type="text" class="fill-blank" data-answer="./easyrsa gen-crl" data-alt="easyrsa gen-crl" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**./easyrsa gen-crl**

El comando `./easyrsa gen-crl` genera el archivo `crl.pem` que contiene la lista de certificados revocados. El servidor OpenVPN debe estar configurado con `crl-verify /ruta/crl.pem` para rechazar conexiones de clientes con certificados revocados.
</details>

---

### Pregunta 25

¿Qué comando de easy-rsa crea la autoridad certificadora (CA) para la PKI de OpenVPN?

<input type="text" class="fill-blank" data-answer="./easyrsa build-ca" data-alt="easyrsa build-ca" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**./easyrsa build-ca**

El comando `./easyrsa build-ca` genera el certificado raíz (`ca.crt`) y la clave privada de la CA (`ca.key`). El certificado de la CA es necesario tanto en el servidor como en los clientes para verificar la autenticidad de los certificados presentados durante la conexión.
</details>
