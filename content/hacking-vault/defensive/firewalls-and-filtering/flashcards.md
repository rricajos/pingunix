---
title: "Flashcards - Firewalls y Filtrado de Paquetes"
tags:
  - hacking
  - defensivo
  - firewalls-y-filtrado
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "firewalls-y-filtrado"
---

# Flashcards: Firewalls y Filtrado de Paquetes

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-001">
<div class="flashcard-front">

**P:** Cuales son las cuatro tablas de iptables y cual es la funcion de cada una?

</div>
<div class="flashcard-back">

**R:** **filter** (por defecto): filtrado de paquetes con cadenas INPUT, OUTPUT, FORWARD. **nat**: traduccion de direcciones con PREROUTING, POSTROUTING, OUTPUT. **mangle**: modificacion de cabeceras con las cinco cadenas. **raw**: excepciones al seguimiento de conexiones con PREROUTING y OUTPUT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-002">
<div class="flashcard-front">

**P:** Que es el filtrado con estado (stateful) en iptables y que modulo lo implementa?

</div>
<div class="flashcard-back">

**R:** El filtrado stateful rastrea el estado de las conexiones TCP. Se implementa con el modulo **conntrack** (`-m conntrack`). Estados: `NEW` (primera conexion), `ESTABLISHED` (conexion activa), `RELATED` (relacionada con una existente, ej: FTP data), `INVALID` (paquete no reconocido). Regla tipica: `iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-003">
<div class="flashcard-front">

**P:** Como configurarias una politica de firewall "default deny" basica con iptables?

</div>
<div class="flashcard-back">

**R:** `iptables -P INPUT DROP`, `iptables -P FORWARD DROP`, `iptables -P OUTPUT DROP`. Luego permitir lo esencial: loopback (`-i lo -j ACCEPT`), conexiones establecidas (`-m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT`), y solo los servicios necesarios (SSH, HTTP, DNS saliente). Guardar con `iptables-save > /etc/iptables/rules.v4`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-004">
<div class="flashcard-front">

**P:** Como crearias una cadena personalizada en iptables para logging con rate limiting?

</div>
<div class="flashcard-back">

**R:** `iptables -N LOG_LIMIT` (crear cadena), `iptables -A LOG_LIMIT -m limit --limit 5/min --limit-burst 10 -j LOG --log-prefix "[FW-DROP] "` (log con limite de 5 por minuto, rafaga de 10), `iptables -A LOG_LIMIT -j DROP`. Luego usar: `iptables -A INPUT -j LOG_LIMIT`. El rate limiting evita inundacion de logs durante ataques.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-005">
<div class="flashcard-front">

**P:** Que es nftables y que ventajas tiene sobre iptables?

</div>
<div class="flashcard-back">

**R:** nftables es el sucesor de iptables con: sintaxis mas limpia y consistente, mejor rendimiento, **sets y maps** nativos (agrupar IPs, puertos), contadores por regla, manejo unificado de IPv4 e IPv6 (`inet`), y configuracion en archivo. Se crea tabla con `nft add table inet firewall` y cadena con `nft add chain inet firewall input { type filter hook input priority 0 \; policy drop \; }`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-006">
<div class="flashcard-front">

**P:** Como usarias sets en nftables para agrupar IPs de administracion y puertos web?

</div>
<div class="flashcard-back">

**R:** Crear set de IPs: `nft add set inet firewall admin_ips { type ipv4_addr \; }` y agregar: `nft add element inet firewall admin_ips { 10.0.1.10, 10.0.1.20 }`. Crear set de puertos: `nft add set inet firewall puertos_web { type inet_service \; }` con `{ 80, 443 }`. Usar en reglas: `nft add rule inet firewall input ip saddr @admin_ips tcp dport 22 accept`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-007">
<div class="flashcard-front">

**P:** Que son las zonas de firewalld y nombra al menos cinco de ellas con su proposito?

</div>
<div class="flashcard-back">

**R:** Las zonas definen niveles de confianza para interfaces de red. **drop**: descarta todo sin respuesta. **block**: rechaza con ICMP. **public**: redes publicas no confiables. **dmz**: servidores en zona desmilitarizada. **work**: redes semi-confiables. **home**: redes domesticas. **internal**: redes internas confiables. **trusted**: acepta todo. Ver zona activa: `firewall-cmd --get-active-zones`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-008">
<div class="flashcard-front">

**P:** Cual es la diferencia entre cambios runtime y permanent en firewalld?

</div>
<div class="flashcard-back">

**R:** Los cambios **runtime** se aplican inmediatamente pero se pierden al reiniciar firewalld. Los cambios **permanent** (`--permanent`) se guardan pero requieren `firewall-cmd --reload` para aplicarse. Buena practica: probar primero en runtime, y si funciona, aplicar con `--permanent` y `--reload`. Comparar: `firewall-cmd --zone=public --list-all` vs `--list-all --permanent`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-009">
<div class="flashcard-front">

**P:** Como configurarias UFW para proteger un servidor con SSH, HTTP y HTTPS con rate limiting en SSH?

</div>
<div class="flashcard-back">

**R:** `ufw default deny incoming`, `ufw default allow outgoing`, `ufw limit ssh` (rate limiting automatico para SSH), `ufw allow http`, `ufw allow https`, `ufw enable`. Para permitir SSH solo desde una red: `ufw allow from 10.0.1.0/24 to any port 22`. Ver estado: `ufw status numbered`. Eliminar regla: `ufw delete 3`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-010">
<div class="flashcard-front">

**P:** Que es ModSecurity y como se despliega con OWASP CRS?

</div>
<div class="flashcard-back">

**R:** ModSecurity es un **WAF** (Web Application Firewall) que opera en capa 7 (aplicacion). Se instala con `apt install libapache2-mod-security2` y las reglas OWASP CRS (Core Rule Set) se clonan de GitHub. Configurar `SecRuleEngine On` en `/etc/modsecurity/modsecurity.conf`. Desplegar primero en modo `DetectionOnly` durante al menos una semana para identificar falsos positivos antes de activar el bloqueo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-011">
<div class="flashcard-front">

**P:** Que es el port knocking y como se configura con knockd?

</div>
<div class="flashcard-back">

**R:** Port knocking oculta servicios hasta que se recibe una secuencia especifica de conexiones TCP. En `/etc/knockd.conf` se define una secuencia (ej: `7000,8000,9000`) y el comando a ejecutar (ej: agregar regla iptables para abrir SSH). Desde el cliente: `knock servidor 7000 8000 9000` y luego `ssh usuario@servidor`. Cerrar: `knock servidor 9000 8000 7000` (secuencia inversa).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-012">
<div class="flashcard-front">

**P:** Como configurarias NAT con iptables para hacer DNAT (redireccion de puertos) de un servicio externo a un servidor interno?

</div>
<div class="flashcard-back">

**R:** `iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 8080 -j DNAT --to-destination 192.168.1.100:80` (redirigir puerto 8080 externo al 80 interno). Agregar regla FORWARD: `iptables -A FORWARD -p tcp -d 192.168.1.100 --dport 80 -j ACCEPT`. Habilitar IP forwarding: `sysctl net.ipv4.ip_forward=1`. Para SNAT saliente: `iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-013">
<div class="flashcard-front">

**P:** Como configurarias Fail2ban para proteger un servidor web WordPress contra fuerza bruta?

</div>
<div class="flashcard-back">

**R:** Crear filtro `/etc/fail2ban/filter.d/wordpress-login.conf` con `failregex = ^<HOST> .* "POST /wp-login.php"` y `^<HOST> .* "POST /xmlrpc.php"`. Crear jail en `/etc/fail2ban/jail.local`: `[wordpress-login]` con `filter = wordpress-login`, `logpath = /var/log/nginx/access.log`, `maxretry = 5`, `bantime = 3600`. Gestionar: `fail2ban-client status wordpress-login`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-014">
<div class="flashcard-front">

**P:** Que son los TCP Wrappers y como se configuran /etc/hosts.allow y /etc/hosts.deny?

</div>
<div class="flashcard-back">

**R:** TCP Wrappers controlan acceso a servicios por IP. Se evalua primero `/etc/hosts.allow`, luego `/etc/hosts.deny`. Ejemplo: `hosts.allow`: `sshd: 10.0.1.0/24` (permitir SSH de red admin). `hosts.deny`: `sshd: ALL` (denegar SSH del resto). Si coincide en allow, se permite inmediatamente sin consultar deny. Verificar soporte: `ldd /usr/sbin/sshd | grep libwrap`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-015">
<div class="flashcard-front">

**P:** Que es una DMZ y como se segmenta la red con firewalls?

</div>
<div class="flashcard-back">

**R:** Una DMZ (Zona Desmilitarizada) es un segmento de red entre el firewall externo e interno donde se colocan servidores publicos (web, mail, DNS). Internet solo accede a la DMZ. La DMZ accede a la red interna solo para servicios especificos (ej: base de datos en puerto 5432). La red interna accede a la DMZ para gestion y a Internet para navegacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-016">
<div class="flashcard-front">

**P:** Que herramientas de filtrado usarias segun la complejidad del escenario?

</div>
<div class="flashcard-back">

**R:** **UFW** (baja complejidad): configuracion rapida, servidores simples. **firewalld** (media): servidores con multiples zonas de red. **iptables** (media-alta): control granular, compatibilidad legacy. **nftables** (alta): configuraciones avanzadas, alto rendimiento. **ModSecurity** (alta): proteccion de aplicaciones web en capa 7. Complementar con Fail2ban para proteccion contra fuerza bruta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-017">
<div class="flashcard-front">

**P:** Como protegerias contra escaneo de puertos con iptables?

</div>
<div class="flashcard-back">

**R:** Crear cadena: `iptables -N PORTSCAN`. Registrar IP: `iptables -A PORTSCAN -m recent --name portscan --set`. Bloquear por 24h: `iptables -A PORTSCAN -m recent --name portscan --rcheck --seconds 86400 -j DROP`. Detectar NULL scan y XMAS scan: `--tcp-flags ALL NONE -j PORTSCAN` y `--tcp-flags ALL ALL -j PORTSCAN`. Contra SYN flood: `--syn -m limit --limit 1/s --limit-burst 3 -j ACCEPT`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="firewalls-y-filtrado">
</div>

<div class="flashcard" data-id="fw-fc-018">
<div class="flashcard-front">

**P:** Cual es la regla de oro del filtrado de paquetes y por que es fundamental?

</div>
<div class="flashcard-back">

**R:** **"Denegar todo por defecto y permitir solo lo estrictamente necesario"** (default deny / denegacion implicita). Es fundamental porque reduce la superficie de ataque al minimo: solo los servicios explicitamente autorizados son accesibles. Si se olvida una regla, el trafico se bloquea en lugar de permitirse. Se implementa con `iptables -P INPUT DROP` o `policy drop` en nftables.

</div>
</div>

---
