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

> 22 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: `tun` es el modo más común y recomendado. Se usa routing para conectar subredes....

</div>
<div class="flashcard-back">

**R:** `tun` es el modo más común y recomendado. Se usa routing para conectar subredes. `tap` se usa solo cuando se necesita bridging real (misma subred, broadcast de capa 2).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-012">
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

<div class="flashcard" data-id="212.5-fc-013">
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

<div class="flashcard" data-id="212.5-fc-014">
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

<div class="flashcard" data-id="212.5-fc-015">
<div class="flashcard-front">

**P:** Que hace el comando `server 10.8.0.0 255.255.255.0`?

</div>
<div class="flashcard-back">

**R:** Define la subred VPN

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `push "route ..."`?

</div>
<div class="flashcard-back">

**R:** Envía rutas a los clientes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-017">
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

<div class="flashcard" data-id="212.5-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `keepalive 10 120`?

</div>
<div class="flashcard-back">

**R:** Ping cada 10s, timeout 120s

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-019">
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

<div class="flashcard" data-id="212.5-fc-020">
<div class="flashcard-front">

**P:** Que es/son Introducción a OpenVPN?

</div>
<div class="flashcard-back">

**R:** OpenVPN es una solución VPN de código abierto que utiliza TLS/SSL para crear túneles cifrados seguros. Opera en espacio de usuario y puede funcionar sobre TCP o UDP, lo que lo hace flexible y capaz de

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.5">
</div>

<div class="flashcard" data-id="212.5-fc-021">
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

<div class="flashcard" data-id="212.5-fc-022">
<div class="flashcard-front">

**P:** Que es/son Requisitos de red del servidor?

</div>
<div class="flashcard-back">

**R:** Para que OpenVPN funcione como gateway, se necesita:

</div>
</div>

---

