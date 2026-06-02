---
title: "361.2 - Ejercicios: Clusters de Balanceo de Carga"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.2"
peso: 4
tags:
  - lpic-3
  - tema-361
  - ejercicios
  - balanceo-de-carga
---

# 361.2 - Ejercicios: Clusters de Balanceo de Carga

### Pregunta 1
¿En qué modo de LVS el tráfico de respuesta va directamente del Real Server al cliente sin pasar por el Director?

a) NAT
b) DR (Direct Routing)
c) Full NAT
d) Proxy

<details><summary>Respuesta</summary>

**b) DR (Direct Routing)**

En el modo DR, solo el tráfico entrante pasa por el Director. Las respuestas van directamente del Real Server al cliente, lo que hace este modo el más eficiente y más utilizado en producción.
</details>

### Pregunta 2
¿Cuál es el algoritmo de planificación predeterminado en IPVS?

a) rr (Round Robin)
b) lc (Least Connection)
c) wlc (Weighted Least Connection)
d) wrr (Weighted Round Robin)

<details><summary>Respuesta</summary>

**c) wlc (Weighted Least Connection)**

`wlc` es el algoritmo predeterminado en IPVS. Combina el conteo de conexiones activas con los pesos asignados a cada servidor para tomar decisiones de enrutamiento.
</details>

### Pregunta 3
¿Qué comando crea un servicio virtual TCP en la IP 10.0.0.100 puerto 80 con algoritmo Round Robin?

a) `ipvsadm -A -u 10.0.0.100:80 -s rr`
b) `ipvsadm -a -t 10.0.0.100:80 -s rr`
c) `ipvsadm -A -t 10.0.0.100:80 -s rr`
d) `ipvsadm -D -t 10.0.0.100:80 -s rr`

<details><summary>Respuesta</summary>

**c) `ipvsadm -A -t 10.0.0.100:80 -s rr`**

`-A` crea un nuevo servicio virtual, `-t` especifica TCP (versus `-u` para UDP), y `-s rr` establece el algoritmo Round Robin. `-a` (minúscula) añade un Real Server, `-D` elimina un servicio.
</details>

### Pregunta 4
En keepalived, ¿qué parámetro debe ser único en la red para cada instancia VRRP?

a) priority
b) state
c) virtual_router_id
d) advert_int

<details><summary>Respuesta</summary>

**c) virtual_router_id**

El `virtual_router_id` (valor entre 0 y 255) identifica de forma única una instancia VRRP en la red. Dos instancias VRRP diferentes no deben compartir el mismo ID en la misma red.
</details>

### Pregunta 5
En HAProxy, ¿qué sección combina la funcionalidad de `frontend` y `backend` en una sola?

a) `global`
b) `defaults`
c) `server`
d) `listen`

<details><summary>Respuesta</summary>

**d) `listen`**

La sección `listen` combina frontend y backend en un solo bloque, útil para configuraciones simples como páginas de estadísticas o servicios TCP directos.
</details>

### Pregunta 6
¿Qué flag de ipvsadm se usa para añadir un Real Server en modo NAT?

a) `-g`
b) `-m`
c) `-i`
d) `-n`

<details><summary>Respuesta</summary>

**b) `-m`**

`-m` indica masquerading (NAT), `-g` indica gatewaying (DR, modo predeterminado), y `-i` indica tunneling (TUN).
</details>

### Pregunta 7
¿Qué directiva de HAProxy permite enrutar tráfico basándose en la URL solicitada?

a) `balance`
b) `server`
c) `acl` con `use_backend`
d) `option httpchk`

<details><summary>Respuesta</summary>

**c) `acl` con `use_backend`**

Las ACLs permiten definir condiciones basadas en atributos HTTP (path, headers, etc.) y `use_backend` enruta el tráfico al backend correspondiente según la ACL evaluada. Esto requiere `mode http`.
</details>

### Pregunta 8
En la configuración de nginx como balanceador, ¿qué directiva define un grupo de servidores backend?

a) `server`
b) `location`
c) `upstream`
d) `proxy_pass`

<details><summary>Respuesta</summary>

**c) `upstream`**

La directiva `upstream` define un grupo de servidores backend. Dentro del bloque upstream se especifican los servidores individuales con la directiva `server` y el algoritmo de balanceo.
</details>

### Pregunta 9
¿Qué requisito especial tienen los Real Servers en modo DR de LVS?

a) Deben tener IP pública
b) Deben tener la VIP configurada en loopback con ARP suprimido
c) Deben usar el Director como gateway
d) Deben soportar túneles IP-in-IP

<details><summary>Respuesta</summary>

**b) Deben tener la VIP configurada en loopback con ARP suprimido**

En modo DR, los Real Servers necesitan la VIP en la interfaz loopback para poder responder a los paquetes destinados a esa IP, pero deben suprimir ARP para esa dirección para evitar conflictos con el Director.
</details>

### Pregunta 10
¿Qué algoritmo de balanceo en HAProxy mantiene la persistencia de sesión basándose en la IP de origen del cliente?

a) `roundrobin`
b) `leastconn`
c) `source`
d) `first`

<details><summary>Respuesta</summary>

**c) `source`**

El algoritmo `source` realiza un hash de la IP de origen del cliente para asegurar que las peticiones del mismo cliente siempre lleguen al mismo servidor, proporcionando así persistencia de sesión.
</details>

### Pregunta 11

¿Qué módulo del kernel de Linux implementa el balanceo de carga a nivel de capa 4 (TCP/UDP) en LVS?

a) nf_conntrack
b) ip_vs (IPVS)
c) iptables
d) nftables

<details><summary>Respuesta</summary>

**b) ip_vs (IPVS)**

IPVS (IP Virtual Server) es el módulo del kernel de Linux que implementa LVS. Se carga con `modprobe ip_vs` y proporciona balanceo de carga a nivel de transporte con alto rendimiento al operar directamente en el espacio del kernel.
</details>

### Pregunta 12

En el modo TUN (IP Tunneling) de LVS, ¿qué tipo de encapsulación se utiliza para enviar los paquetes a los Real Servers?

a) GRE
b) VXLAN
c) IP-in-IP
d) IPsec

<details><summary>Respuesta</summary>

**c) IP-in-IP**

El modo TUN utiliza encapsulación IP-in-IP para enviar los paquetes del Director a los Real Servers. Esto permite que los RS estén en redes diferentes del Director. Las respuestas van directamente al cliente, al igual que en modo DR.
</details>

### Pregunta 13

¿Qué protocolo utiliza keepalived para gestionar la IP virtual flotante entre nodos?

a) HSRP
b) VRRP
c) GLBP
d) CARP

<details><summary>Respuesta</summary>

**b) VRRP**

Keepalived utiliza VRRP (Virtual Router Redundancy Protocol) para gestionar la alta disponibilidad de la IP virtual. VRRP usa la dirección multicast 224.0.0.18 para los anuncios entre nodos. El nodo con mayor prioridad se convierte en MASTER.
</details>

### Pregunta 14

En HAProxy, ¿qué diferencia existe entre `mode http` y `mode tcp`?

a) `mode http` es más rápido
b) `mode tcp` permite inspeccionar cabeceras HTTP
c) `mode http` opera en capa 7 y permite inspeccionar contenido HTTP, mientras que `mode tcp` opera en capa 4
d) No hay diferencia funcional

<details><summary>Respuesta</summary>

**c) `mode http` opera en capa 7 y permite inspeccionar contenido HTTP, mientras que `mode tcp` opera en capa 4**

`mode http` permite a HAProxy inspeccionar y modificar cabeceras HTTP, usar ACLs basadas en URL/cookies y realizar health checks HTTP. `mode tcp` solo reenvía tráfico TCP sin inspeccionar su contenido.
</details>

### Pregunta 15

¿Qué parámetro de HAProxy en la línea de definición de un servidor indica que es un servidor de respaldo que solo recibe tráfico cuando los demás fallan?

a) `standby`
b) `backup`
c) `reserve`
d) `failover`

<details><summary>Respuesta</summary>

**b) `backup`**

La palabra clave `backup` en la definición de un servidor indica que solo recibirá tráfico cuando todos los servidores no marcados como backup estén caídos. Ejemplo: `server web3 192.168.1.12:8080 check backup`.
</details>

### Pregunta 16

¿Qué algoritmo de planificación en IPVS envía las peticiones al servidor sin conexiones activas, o utiliza SED si todos tienen conexiones?

a) `lc` (Least Connection)
b) `sed` (Shortest Expected Delay)
c) `nq` (Never Queue)
d) `rr` (Round Robin)

<details><summary>Respuesta</summary>

**c) `nq` (Never Queue)**

El algoritmo `nq` (Never Queue) prioriza el envío a servidores sin conexiones activas. Si todos los servidores tienen al menos una conexión, utiliza el algoritmo SED (Shortest Expected Delay) para elegir el destino.
</details>

### Pregunta 17

¿Qué directiva de nginx define el algoritmo de balanceo basado en la IP de origen del cliente para mantener persistencia de sesión?

a) `least_conn`
b) `random`
c) `ip_hash`
d) `hash $request_uri`

<details><summary>Respuesta</summary>

**c) `ip_hash`**

La directiva `ip_hash` dentro del bloque `upstream` realiza un hash de la dirección IP del cliente para asegurar que las peticiones de un mismo cliente siempre se dirijan al mismo servidor backend, proporcionando así persistencia de sesión.
</details>

### Pregunta 18

En keepalived, ¿qué parámetro define la prioridad de un nodo en una instancia VRRP, donde un valor mayor indica mayor preferencia?

a) `state`
b) `weight`
c) `priority`
d) `advert_int`

<details><summary>Respuesta</summary>

**c) `priority`**

El parámetro `priority` (valor de 1 a 254) determina qué nodo será MASTER. El nodo con el valor más alto gana la elección. Si el MASTER falla, el BACKUP con la siguiente prioridad más alta toma el control de la VIP.
</details>

### Pregunta 19

En HAProxy, ¿qué parámetros de health check determinan cuántos checks fallidos marcan un servidor como caído y cuántos exitosos lo restauran?

a) `timeout` y `retry`
b) `fall` y `rise`
c) `down` y `up`
d) `failures` y `successes`

<details><summary>Respuesta</summary>

**b) `fall` y `rise`**

`fall` indica el número de health checks consecutivos fallidos necesarios para marcar un servidor como DOWN. `rise` indica los checks exitosos consecutivos necesarios para marcarlo como UP. Ejemplo: `server web1 10.0.0.1:80 check inter 5s fall 3 rise 2`.
</details>

### Pregunta 20

¿Cuál de los siguientes balanceadores opera exclusivamente en espacio del kernel proporcionando el mayor rendimiento posible?

a) HAProxy
b) Nginx
c) LVS/IPVS
d) Traefik

<details><summary>Respuesta</summary>

**c) LVS/IPVS**

LVS/IPVS opera directamente en el kernel de Linux, lo que le proporciona el mayor rendimiento posible al evitar el overhead de copiar paquetes al espacio de usuario. HAProxy y Nginx operan en espacio de usuario.
</details>

### Pregunta 21

¿Qué comando crea un servicio virtual TCP en la IP 10.0.0.100 puerto 443 con algoritmo Weighted Least Connection?

<input type="text" class="fill-blank" data-answer="ipvsadm -A -t 10.0.0.100:443 -s wlc" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipvsadm -A -t 10.0.0.100:443 -s wlc**

`-A` añade un nuevo servicio virtual, `-t` indica protocolo TCP con IP:puerto, y `-s wlc` establece el algoritmo Weighted Least Connection. `wlc` es además el algoritmo predeterminado de IPVS.
</details>

### Pregunta 22

¿Qué comando muestra la tabla completa de servicios virtuales y Real Servers configurados en IPVS en formato numérico?

<input type="text" class="fill-blank" data-answer="ipvsadm -Ln" data-alt="ipvsadm -ln,ipvsadm --list --numeric" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipvsadm -Ln**

`ipvsadm -Ln` muestra la tabla IPVS con las direcciones en formato numérico (sin resolución DNS). `-L` o `--list` muestra la tabla y `-n` o `--numeric` evita la resolución de nombres.
</details>

### Pregunta 23

¿Qué comando elimina toda la tabla de servicios virtuales en IPVS?

<input type="text" class="fill-blank" data-answer="ipvsadm -C" data-alt="ipvsadm --clear" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipvsadm -C**

El comando `ipvsadm -C` (o `--clear`) elimina todos los servicios virtuales y Real Servers de la tabla IPVS. Para eliminar solo un servicio específico se usa `ipvsadm -D -t IP:puerto`.
</details>

### Pregunta 24

¿Qué comando carga el módulo del kernel IPVS necesario para LVS?

<input type="text" class="fill-blank" data-answer="modprobe ip_vs" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**modprobe ip_vs**

El módulo principal de IPVS se carga con `modprobe ip_vs`. Adicionalmente, se pueden cargar módulos de algoritmos específicos como `ip_vs_rr` (Round Robin), `ip_vs_wrr` (Weighted Round Robin), `ip_vs_lc` (Least Connection), etc.
</details>

### Pregunta 25

¿Qué comando añade un Real Server con IP 192.168.1.10 puerto 80 en modo DR con peso 3 al servicio virtual 10.0.0.100:80?

<input type="text" class="fill-blank" data-answer="ipvsadm -a -t 10.0.0.100:80 -r 192.168.1.10:80 -g -w 3" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipvsadm -a -t 10.0.0.100:80 -r 192.168.1.10:80 -g -w 3**

`-a` añade un Real Server (minúscula, diferente de `-A` que crea servicios). `-r` especifica la dirección del RS, `-g` indica modo DR (gatewaying), y `-w 3` establece el peso del servidor.
</details>
