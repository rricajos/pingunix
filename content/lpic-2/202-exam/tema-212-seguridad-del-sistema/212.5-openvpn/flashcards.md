---
title: "212.5 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "212.5"
---

# Flashcards: 212.5 - Openvpn

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre las interfaces `tun` y `tap` en OpenVPN?

</div>
<div class="flashcard-back">

**R:** b) `tun` opera en capa 3 (routing) y `tap` en capa 2 (bridging). La interfaz `tun` crea un túnel de capa 3 (IP) adecuado para routing entre subredes diferentes. La interfaz `tap` emula un dispositivo Ethernet de capa 2, permitiendo bridging y tráfico broadcast. `tun` es más eficiente y el modo recomendado para la mayoría de escenarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-002">
<div class="flashcard-front">

**P:** ¿Qué secuencia de comandos easy-rsa crea correctamente un certificado para un cliente llamado "usuario1"?

</div>
<div class="flashcard-back">

**R:** c) `./easyrsa gen-req usuario1 nopass` seguido de `./easyrsa sign-req client usuario1`. Primero se genera la solicitud de certificado con `gen-req` (la opción `nopass` omite la passphrase), y luego se firma con `sign-req` especificando el tipo `client`. Para certificados de servidor, se usa el tipo `server` en lugar de `client`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-003">
<div class="flashcard-front">

**P:** ¿Qué directiva en la configuración del servidor OpenVPN permite que los clientes VPN se comuniquen directamente entre sí?

</div>
<div class="flashcard-back">

**R:** b) `client-to-client`. Por defecto, el tráfico entre clientes no se permite en OpenVPN. La directiva `client-to-client` habilita la comunicación directa entre clientes conectados al mismo servidor sin que el tráfico pase por las reglas del firewall del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando genera la clave estática utilizada para `tls-auth` en OpenVPN?

</div>
<div class="flashcard-back">

**R:** b) `openvpn --genkey secret /etc/openvpn/ta.key`. El comando `openvpn --genkey secret` genera una clave estática que se usa con `tls-auth` o `tls-crypt` para añadir una capa adicional de seguridad HMAC al handshake TLS, protegiendo contra ataques DoS y escaneo de puertos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-005">
<div class="flashcard-front">

**P:** En la configuración de `tls-auth`, ¿qué valor de dirección usa el servidor y cuál el cliente?

</div>
<div class="flashcard-back">

**R:** b) Servidor: 0, Cliente: 1. Con `tls-auth`, el servidor usa la dirección `0` (`tls-auth ta.key 0`) y el cliente usa la dirección `1` (`tls-auth ta.key 1`). Esto asegura que las firmas HMAC se generen y verifiquen correctamente en cada extremo. Con `tls-crypt`, no se especifica dirección.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando systemd habilita e inicia un servidor OpenVPN cuyo archivo de configuración es `/etc/openvpn/server/server.conf`?

</div>
<div class="flashcard-back">

**R:** b) `systemctl enable --now openvpn-server@server`. La unidad de systemd `openvpn-server@` es una plantilla (template unit). El nombre después de `@` corresponde al nombre del archivo de configuración sin la extensión `.conf` dentro de `/etc/openvpn/server/`. La opción `--now` combina `enable` y `start` en un solo comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-007">
<div class="flashcard-front">

**P:** ¿Qué directiva en la configuración del cliente OpenVPN verifica que el certificado presentado por el servidor es realmente de tipo servidor?

</div>
<div class="flashcard-back">

**R:** b) `remote-cert-tls server`. La directiva `remote-cert-tls server` verifica que el certificado presentado por el servidor durante el handshake TLS tenga el atributo de uso extendido de clave (EKU) de tipo servidor. Esto previene que un cliente comprometido se haga pasar por servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de easy-rsa genera los parámetros Diffie-Hellman necesarios para el servidor OpenVPN?

</div>
<div class="flashcard-back">

**R:** c) `./easyrsa gen-dh`. El comando `./easyrsa gen-dh` genera los parámetros Diffie-Hellman necesarios para el intercambio seguro de claves. El archivo resultante (`dh.pem`) se referencia en la configuración del servidor con la directiva `dh`. Este proceso puede tardar varios minutos dependiendo del tamaño de clave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-009">
<div class="flashcard-front">

**P:** Un administrador quiere que todo el tráfico de los clientes VPN se enrute a través del servidor OpenVPN. ¿Qué directiva debe añadir al archivo server.conf?

</div>
<div class="flashcard-back">

**R:** b) `push "redirect-gateway def1 bypass-dhcp"`. La directiva `push "redirect-gateway def1 bypass-dhcp"` informa a los clientes que deben redirigir todo su tráfico de Internet a través del túnel VPN. `def1` modifica la tabla de rutas del cliente sin eliminar la ruta por defecto original, y `bypass-dhcp` excluye el tráfico DHCP local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-010">
<div class="flashcard-front">

**P:** ¿Qué dos pasos adicionales de configuración del sistema son necesarios en el servidor para que los clientes OpenVPN puedan acceder a Internet a través de la VPN?

</div>
<div class="flashcard-back">

**R:** b) Habilitar IP forwarding y configurar NAT/masquerading. Para que los clientes VPN accedan a Internet a través del servidor, se necesitan dos cosas: 1) Habilitar IP forwarding (`net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`) para que el kernel reenvíe paquetes entre interfaces, y 2) configurar NAT con `iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE` para traducir las direcciones de la red VPN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-011">
<div class="flashcard-front">

**P:** ¿Qué directiva de OpenVPN envía rutas de redes internas a los clientes para que sepan cómo alcanzarlas a través del túnel?

</div>
<div class="flashcard-back">

**R:** b) `push "route 192.168.1.0 255.255.255.0"`. La directiva `push "route ..."` en la configuración del servidor envía rutas estáticas a los clientes VPN cuando se conectan. Esto permite que los clientes sepan que deben enrutar el tráfico hacia esas redes a través del túnel VPN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-012">
<div class="flashcard-front">

**P:** ¿Qué directiva en la configuración del servidor OpenVPN define la subred que se asigna a los clientes VPN?

</div>
<div class="flashcard-back">

**R:** c) `server 10.8.0.0 255.255.255.0`. La directiva `server` es un atajo que configura automáticamente la subred VPN, el pool de IPs para clientes, las rutas necesarias y el modo de servidor. En este ejemplo, el servidor recibe la IP 10.8.0.1 y los clientes se asignan direcciones del rango 10.8.0.0/24.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-013">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre `tls-auth` y `tls-crypt` en OpenVPN?

</div>
<div class="flashcard-back">

**R:** b) `tls-auth` firma los paquetes de control con HMAC, `tls-crypt` además los cifra. `tls-auth` añade una firma HMAC a los paquetes del handshake TLS para verificar su autenticidad. `tls-crypt` va un paso más allá cifrando también los paquetes de control, lo que oculta la negociación TLS y dificulta la identificación del tráfico OpenVPN.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-014">
<div class="flashcard-front">

**P:** ¿Qué directiva de OpenVPN reduce los privilegios del proceso después de la inicialización, ejecutándose como un usuario no privilegiado?

</div>
<div class="flashcard-back">

**R:** b) `user nobody`. La directiva `user nobody` (junto con `group nogroup`) reduce los privilegios del proceso OpenVPN después de completar la inicialización. Esto limita el daño potencial si el proceso es comprometido, ya que opera con los mínimos privilegios necesarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-015">
<div class="flashcard-front">

**P:** ¿Qué archivo registra las asignaciones de direcciones IP persistentes de los clientes OpenVPN?

</div>
<div class="flashcard-back">

**R:** b) /var/log/openvpn/ipp.txt. El archivo `ipp.txt` (configurado con la directiva `ifconfig-pool-persist`) almacena las asociaciones entre clientes (por nombre de certificado) y sus direcciones IP asignadas, permitiendo que un cliente reciba la misma IP en reconexiones sucesivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando de easy-rsa revoca el certificado de un cliente llamado "cliente1"?

</div>
<div class="flashcard-back">

**R:** b) `./easyrsa revoke cliente1`. El comando `./easyrsa revoke cliente1` marca el certificado del cliente como revocado. Después se debe ejecutar `./easyrsa gen-crl` para generar la lista de revocación actualizada (`crl.pem`), y el servidor debe estar configurado con `crl-verify` para verificarla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-017">
<div class="flashcard-front">

**P:** ¿Qué directiva de OpenVPN mantiene las claves en memoria y el túnel activo durante un reinicio del servicio con señal SIGUSR1?

</div>
<div class="flashcard-back">

**R:** b) `persist-key` y `persist-tun`. Las directivas `persist-key` y `persist-tun` son importantes cuando se ejecuta con privilegios reducidos (`user nobody`). `persist-key` evita releer las claves privadas (que requieren privilegios), y `persist-tun` evita cerrar y reabrir la interfaz tun/tap durante reinicios suaves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-018">
<div class="flashcard-front">

**P:** ¿Qué protocolo de transporte y puerto utiliza OpenVPN por defecto?

</div>
<div class="flashcard-back">

**R:** b) UDP puerto 1194. OpenVPN utiliza por defecto el protocolo UDP en el puerto 1194. UDP es preferido porque ofrece mejor rendimiento al evitar el problema de "TCP sobre TCP". Sin embargo, se puede configurar con TCP (generalmente en puerto 443) para atravesar firewalls restrictivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva del servidor OpenVPN establece los intervalos de keepalive para detectar clientes desconectados?

</div>
<div class="flashcard-back">

**R:** b) `keepalive 10 120`. La directiva `keepalive 10 120` envía pings cada 10 segundos y considera la conexión caída si no recibe respuesta en 120 segundos. Es un atajo que configura automáticamente los parámetros `ping` y `ping-restart` tanto en el servidor como en los clientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directiva en la configuración del cliente OpenVPN verifica que el certificado del servidor tiene el atributo Extended Key Usage correcto?

</div>
<div class="flashcard-back">

**R:** b) `remote-cert-tls server`. La directiva `remote-cert-tls server` verifica que el certificado presentado por el servidor tiene el atributo EKU (Extended Key Usage) de tipo servidor. Esto previene un ataque donde un cliente comprometido podría hacerse pasar por servidor usando su propio certificado de cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando genera la clave estática utilizada para tls-auth en OpenVPN?

</div>
<div class="flashcard-back">

**R:** openvpn --genkey secret /etc/openvpn/ta.key. El comando `openvpn --genkey secret` genera una clave estática de 2048 bits que se comparte entre servidor y clientes. Esta clave se usa con `tls-auth` o `tls-crypt` para añadir una capa adicional de seguridad al handshake TLS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando de easy-rsa inicializa la infraestructura de clave pública (PKI)?

</div>
<div class="flashcard-back">

**R:** ./easyrsa init-pki. El comando `./easyrsa init-pki` crea la estructura de directorios necesaria para la PKI de OpenVPN, incluyendo los directorios para claves privadas, solicitudes y certificados emitidos. Es el primer paso antes de crear la autoridad certificadora con `build-ca`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando de easy-rsa genera los parámetros Diffie-Hellman necesarios para el servidor?

</div>
<div class="flashcard-back">

**R:** ./easyrsa gen-dh. El comando `./easyrsa gen-dh` genera los parámetros Diffie-Hellman (`dh.pem`) necesarios para el intercambio seguro de claves en el handshake TLS del servidor. Este proceso puede tardar varios minutos y solo se necesita ejecutar en el servidor, no en los clientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando de easy-rsa genera la lista de revocación de certificados (CRL) después de revocar un certificado?

</div>
<div class="flashcard-back">

**R:** ./easyrsa gen-crl. El comando `./easyrsa gen-crl` genera el archivo `crl.pem` que contiene la lista de certificados revocados. El servidor OpenVPN debe estar configurado con `crl-verify /ruta/crl.pem` para rechazar conexiones de clientes con certificados revocados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de easy-rsa crea la autoridad certificadora (CA) para la PKI de OpenVPN?

</div>
<div class="flashcard-back">

**R:** ./easyrsa build-ca. El comando `./easyrsa build-ca` genera el certificado raíz (`ca.crt`) y la clave privada de la CA (`ca.key`). El certificado de la CA es necesario tanto en el servidor como en los clientes para verificar la autenticidad de los certificados presentados durante la conexión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `tun` es el modo más común y recomendado. Se usa routing para conectar subredes....

</div>
<div class="flashcard-back">

**R:** `tun` es el modo más común y recomendado. Se usa routing para conectar subredes. `tap` se usa solo cuando se necesita bridging real (misma subred, broadcast de capa 2).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La secuencia completa de PKI es: `init-pki` -> `build-ca` -> `gen-req` -> `sign-...

</div>
<div class="flashcard-back">

**R:** La secuencia completa de PKI es: `init-pki` -> `build-ca` -> `gen-req` -> `sign-req` -> `gen-dh`. Los tipos de firma son `server` para el servidor y `client` para los clientes. La opción `nopass` omite la passphrase de la clave privada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `tls-auth` añade una firma HMAC a los paquetes del handshake TLS, protegiendo co...

</div>
<div class="flashcard-back">

**R:** `tls-auth` añade una firma HMAC a los paquetes del handshake TLS, protegiendo contra ataques DoS y de escaneo de puertos. `tls-crypt` va más allá cifrando también los paquetes de control. El servidor usa `tls-auth ta.key 0` y los clientes `tls-auth ta.key 1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: El nombre de la instancia después de `@` en `openvpn-server@server` se correspon...

</div>
<div class="flashcard-back">

**R:** El nombre de la instancia después de `@` en `openvpn-server@server` se corresponde con el nombre del archivo de configuración (sin extensión .conf) dentro de `/etc/openvpn/server/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `client-to-client`?

</div>
<div class="flashcard-back">

**R:** Permite tráfico entre clientes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `remote-cert-tls server`?

</div>
<div class="flashcard-back">

**R:** Cliente verifica que el cert es de tipo servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-032">
<div class="flashcard-front">

**P:** Que es/son PKI con easy-rsa?

</div>
<div class="flashcard-back">

**R:** La infraestructura de clave pública (PKI) es fundamental para OpenVPN. **easy-rsa** es la herramienta oficial para gestionarla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-033">
<div class="flashcard-front">

**P:** Que es/son Requisitos de red del servidor?

</div>
<div class="flashcard-back">

**R:** Para que OpenVPN funcione como gateway, se necesita:

</div>
</div>

---

