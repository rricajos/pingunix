---
title: "212.1 - Configuración de router: Ejercicios"
tags: [lpic-2, examen-202, tema-212, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "212"
subtema: "212.1"
---

# 212.1 - Configuración de router: Ejercicios

### Pregunta 1

¿Qué archivo se debe modificar para habilitar el reenvío de paquetes IPv4 de forma permanente en Linux?

a) /etc/network/interfaces
b) /etc/sysctl.conf
c) /etc/iptables.conf
d) /etc/forwarding.conf

<details>
<summary>Respuesta</summary>

**b) /etc/sysctl.conf**

Se debe establecer `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf` (o en un archivo dentro de `/etc/sysctl.d/`) para que el reenvío de paquetes persista tras un reinicio. Después se aplica con `sysctl -p`.
</details>

---

### Pregunta 2

¿Qué tabla de iptables se utiliza por defecto cuando no se especifica la opción `-t`?

a) nat
b) mangle
c) raw
d) filter

<details>
<summary>Respuesta</summary>

**d) filter**

La tabla `filter` es la tabla por defecto de iptables. Contiene las cadenas INPUT, OUTPUT y FORWARD, y se usa para el filtrado básico de paquetes.
</details>

---

### Pregunta 3

Un administrador necesita redirigir el tráfico entrante en el puerto 443 hacia un servidor interno 10.0.0.5 en el puerto 8443. ¿Qué regla de iptables es correcta?

a) `iptables -A FORWARD -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`
b) `iptables -t nat -A POSTROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`
c) `iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`
d) `iptables -t nat -A INPUT -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`

<details>
<summary>Respuesta</summary>

**c) `iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`**

DNAT (Destination NAT) se configura en la cadena PREROUTING de la tabla nat, ya que la traducción de la dirección de destino debe ocurrir antes de la decisión de enrutamiento.
</details>

---

### Pregunta 4

¿Cuál es la diferencia principal entre los objetivos MASQUERADE y SNAT en iptables?

a) MASQUERADE es más seguro que SNAT
b) SNAT se usa solo para IPv6
c) MASQUERADE determina la IP de origen dinámicamente, SNAT usa una IP fija
d) MASQUERADE funciona en la cadena PREROUTING y SNAT en POSTROUTING

<details>
<summary>Respuesta</summary>

**c) MASQUERADE determina la IP de origen dinámicamente, SNAT usa una IP fija**

MASQUERADE consulta la IP actual de la interfaz de salida para cada paquete, lo que lo hace adecuado para conexiones con IP dinámica. SNAT es más eficiente cuando la IP de salida es estática porque no necesita esta consulta.
</details>

---

### Pregunta 5

¿Qué comando de nftables lista todas las reglas activas del sistema?

a) `nft show all`
b) `nft list ruleset`
c) `nft -L`
d) `nft rules --list`

<details>
<summary>Respuesta</summary>

**b) `nft list ruleset`**

El comando `nft list ruleset` muestra todas las tablas, cadenas y reglas configuradas actualmente en nftables.
</details>

---

### Pregunta 6

En firewalld, ¿qué ocurre si se ejecuta `firewall-cmd --add-service=http` sin la opción `--permanent`?

a) El cambio no se aplica hasta hacer reload
b) El comando falla con un error
c) El cambio se aplica inmediatamente pero se pierde al reiniciar
d) El cambio se aplica y persiste automáticamente

<details>
<summary>Respuesta</summary>

**c) El cambio se aplica inmediatamente pero se pierde al reiniciar**

Sin `--permanent`, los cambios se aplican en la configuración en ejecución (runtime) de forma inmediata, pero no se guardan en la configuración persistente. Al reiniciar firewalld o el sistema, estos cambios se pierden.
</details>

---

### Pregunta 7

¿Qué cadena de iptables se usa para filtrar paquetes que atraviesan el router Linux hacia otra red?

a) INPUT
b) OUTPUT
c) FORWARD
d) PREROUTING

<details>
<summary>Respuesta</summary>

**c) FORWARD**

La cadena FORWARD de la tabla filter se encarga de los paquetes que no son para el propio host ni generados por él, sino que están siendo reenviados entre interfaces de red.
</details>

---

### Pregunta 8

¿Qué comando guarda las reglas actuales de iptables para restaurarlas en el futuro?

a) `iptables --save > /etc/iptables.rules`
b) `iptables-save > /etc/iptables/rules.v4`
c) `iptables -S > /etc/iptables.rules`
d) `iptables --export /etc/iptables/rules.v4`

<details>
<summary>Respuesta</summary>

**b) `iptables-save > /etc/iptables/rules.v4`**

El comando `iptables-save` volcará todas las reglas actuales en formato que puede ser leído por `iptables-restore`. La opción `-S` de iptables lista las reglas en formato de comandos, pero no es el método estándar de persistencia.
</details>

---

### Pregunta 9

¿Qué ventaja ofrece la familia `inet` en nftables?

a) Mayor velocidad de procesamiento
b) Compatibilidad con iptables legacy
c) Permite crear reglas que aplican tanto a IPv4 como a IPv6 simultáneamente
d) Soporte para filtrado a nivel de aplicación (capa 7)

<details>
<summary>Respuesta</summary>

**c) Permite crear reglas que aplican tanto a IPv4 como a IPv6 simultáneamente**

La familia `inet` en nftables unifica el manejo de IPv4 e IPv6 en una sola tabla, evitando la necesidad de mantener reglas duplicadas como ocurre con iptables (iptables + ip6tables).
</details>

---

### Pregunta 10

Un administrador ejecuta `iptables -I INPUT 1 -s 10.0.0.50 -j ACCEPT`. ¿Qué efecto tiene este comando?

a) Añade la regla al final de la cadena INPUT
b) Inserta la regla en la primera posición de la cadena INPUT
c) Reemplaza la primera regla de la cadena INPUT
d) Crea una nueva cadena llamada INPUT con esta regla

<details>
<summary>Respuesta</summary>

**b) Inserta la regla en la primera posición de la cadena INPUT**

La opción `-I` (insert) con el número 1 coloca la regla en la primera posición de la cadena, con lo cual será evaluada antes que cualquier otra regla existente. Esto es diferente de `-A` (append), que añade al final.
</details>

---

### Pregunta 11

¿Qué parámetro del kernel se debe configurar a 1 para proteger contra ataques de IP spoofing mediante validación de ruta inversa?

a) net.ipv4.conf.all.accept_redirects
b) net.ipv4.conf.all.rp_filter
c) net.ipv4.tcp_syncookies
d) net.ipv4.conf.all.send_redirects

<details>
<summary>Respuesta</summary>

**b) net.ipv4.conf.all.rp_filter**

El parámetro `rp_filter` (Reverse Path Filtering) verifica que los paquetes entrantes provengan de la interfaz esperada según la tabla de rutas. Cuando se establece a 1, descarta paquetes con direcciones de origen sospechosas, previniendo ataques de IP spoofing.
</details>

---

### Pregunta 12

¿Qué comando aplica los cambios realizados en `/etc/sysctl.conf` sin necesidad de reiniciar el sistema?

a) `sysctl --apply`
b) `sysctl -p`
c) `sysctl --reload`
d) `systemctl restart sysctl`

<details>
<summary>Respuesta</summary>

**b) `sysctl -p`**

El comando `sysctl -p` lee y aplica los parámetros del archivo `/etc/sysctl.conf` (o del archivo especificado) inmediatamente, sin necesidad de reiniciar. También se puede usar `sysctl -p /etc/sysctl.d/archivo.conf` para un archivo específico.
</details>

---

### Pregunta 13

¿En qué cadena y tabla de iptables se configura SNAT para traducir la dirección de origen de paquetes salientes?

a) PREROUTING de la tabla nat
b) POSTROUTING de la tabla nat
c) OUTPUT de la tabla filter
d) FORWARD de la tabla mangle

<details>
<summary>Respuesta</summary>

**b) POSTROUTING de la tabla nat**

SNAT se configura en la cadena POSTROUTING de la tabla nat porque la traducción de la dirección de origen debe realizarse después de la decisión de enrutamiento, justo antes de que el paquete salga por la interfaz de red.
</details>

---

### Pregunta 14

¿Qué zona de firewalld tiene habilitado NAT/masquerading por defecto?

a) public
b) dmz
c) external
d) trusted

<details>
<summary>Respuesta</summary>

**c) external**

La zona `external` de firewalld está diseñada para interfaces que se conectan a redes externas y tiene el masquerading habilitado por defecto. Es la zona apropiada para interfaces WAN en un router Linux gestionado con firewalld.
</details>

---

### Pregunta 15

¿Qué opción de iptables establece la política por defecto para una cadena?

a) `-D`
b) `-A`
c) `-P`
d) `-N`

<details>
<summary>Respuesta</summary>

**c) `-P`**

La opción `-P` (Policy) establece la política por defecto de una cadena. Por ejemplo, `iptables -P INPUT DROP` hace que todos los paquetes que no coincidan con ninguna regla de la cadena INPUT sean descartados. Las políticas solo pueden ser ACCEPT o DROP.
</details>

---

### Pregunta 16

¿Qué comando de nftables crea una tabla para reglas que aplican tanto a IPv4 como a IPv6?

a) `nft add table ip mi_tabla`
b) `nft add table ip6 mi_tabla`
c) `nft add table inet mi_tabla`
d) `nft add table dual mi_tabla`

<details>
<summary>Respuesta</summary>

**c) `nft add table inet mi_tabla`**

La familia `inet` en nftables permite crear tablas con reglas que aplican simultáneamente a IPv4 e IPv6, evitando la necesidad de duplicar reglas. Las familias `ip` e `ip6` solo aplican a IPv4 o IPv6 respectivamente.
</details>

---

### Pregunta 17

¿Qué objetivo de iptables descarta un paquete silenciosamente sin enviar respuesta al origen?

a) REJECT
b) DROP
c) DENY
d) BLOCK

<details>
<summary>Respuesta</summary>

**b) DROP**

El objetivo `DROP` descarta el paquete sin enviar ninguna respuesta al emisor. En cambio, `REJECT` descarta el paquete pero envía un mensaje ICMP de error al origen (por defecto, icmp-port-unreachable). `DENY` y `BLOCK` no son objetivos válidos de iptables.
</details>

---

### Pregunta 18

¿Qué parámetro de sysctl se activa para proteger contra ataques SYN flood?

a) net.ipv4.icmp_echo_ignore_broadcasts
b) net.ipv4.conf.all.accept_source_route
c) net.ipv4.tcp_syncookies
d) net.ipv4.conf.all.accept_redirects

<details>
<summary>Respuesta</summary>

**c) net.ipv4.tcp_syncookies**

El parámetro `net.ipv4.tcp_syncookies = 1` activa la protección contra ataques SYN flood. Cuando la cola de conexiones pendientes se llena, el kernel responde con SYN cookies en lugar de descartar conexiones legítimas, permitiendo al sistema seguir operando bajo un ataque.
</details>

---

### Pregunta 19

¿Qué módulo de iptables se utiliza para el seguimiento de estado de conexiones, permitiendo aceptar paquetes ESTABLISHED y RELATED?

a) -m conntrack
b) -m state
c) -m limit
d) -m recent

<details>
<summary>Respuesta</summary>

**b) -m state**

El módulo `-m state` (o su versión más reciente `-m conntrack`) permite filtrar paquetes según el estado de la conexión. La regla `iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT` acepta paquetes de conexiones ya establecidas o relacionadas, fundamental en cualquier firewall con política DROP por defecto.
</details>

---

### Pregunta 20

¿Qué comando de firewalld añade un servicio de forma permanente y recarga la configuración para aplicar el cambio?

a) `firewall-cmd --add-service=http --persist`
b) `firewall-cmd --permanent --add-service=http && firewall-cmd --reload`
c) `firewall-cmd --save --add-service=http`
d) `firewall-cmd --add-service=http --write`

<details>
<summary>Respuesta</summary>

**b) `firewall-cmd --permanent --add-service=http && firewall-cmd --reload`**

Los cambios con `--permanent` se guardan en la configuración persistente pero no se aplican inmediatamente. Es necesario ejecutar `firewall-cmd --reload` para que los cambios permanentes surtan efecto en la configuración en ejecución.
</details>

---

### Pregunta 21

¿Qué comando habilita temporalmente el reenvío de paquetes IPv4 en el kernel de Linux?

<input type="text" class="fill-blank" data-answer="sysctl -w net.ipv4.ip_forward=1" data-alt="echo 1 > /proc/sys/net/ipv4/ip_forward" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**sysctl -w net.ipv4.ip_forward=1**

El comando `sysctl -w net.ipv4.ip_forward=1` activa el reenvío de paquetes IPv4 de forma inmediata pero temporal (se pierde al reiniciar). Equivale a `echo 1 > /proc/sys/net/ipv4/ip_forward`. Para hacerlo permanente, se añade a `/etc/sysctl.conf`.
</details>

---

### Pregunta 22

¿Qué comando de iptables configura masquerading para la red 192.168.1.0/24 que sale por la interfaz eth0?

<input type="text" class="fill-blank" data-answer="iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**iptables -t nat -A POSTROUTING -s 192.168.1.0/24 -o eth0 -j MASQUERADE**

Este comando añade una regla en la cadena POSTROUTING de la tabla nat que aplica MASQUERADE a todos los paquetes con origen en la red 192.168.1.0/24 que salen por la interfaz eth0. La IP de origen se reemplaza dinámicamente con la IP de la interfaz de salida.
</details>

---

### Pregunta 23

¿Qué comando restaura las reglas de iptables desde un archivo guardado previamente?

<input type="text" class="fill-blank" data-answer="iptables-restore < /etc/iptables/rules.v4" data-alt="iptables-restore" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**iptables-restore < /etc/iptables/rules.v4**

El comando `iptables-restore` lee reglas en el formato generado por `iptables-save` y las carga en el kernel. Es el método estándar para restaurar las reglas de firewall al inicio del sistema o después de un cambio.
</details>

---

### Pregunta 24

¿Qué comando de nftables lista todas las reglas, tablas y cadenas configuradas actualmente?

<input type="text" class="fill-blank" data-answer="nft list ruleset" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**nft list ruleset**

El comando `nft list ruleset` muestra la configuración completa de nftables, incluyendo todas las tablas, cadenas y reglas activas. Es el equivalente funcional de `iptables-save` para nftables.
</details>

---

### Pregunta 25

¿Qué comando de firewalld muestra las zonas activas y las interfaces asignadas a cada una?

<input type="text" class="fill-blank" data-answer="firewall-cmd --get-active-zones" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**firewall-cmd --get-active-zones**

El comando `firewall-cmd --get-active-zones` lista las zonas que tienen interfaces o fuentes asignadas, mostrando qué interfaz de red pertenece a cada zona. Es fundamental para verificar la configuración actual del firewall.
</details>
