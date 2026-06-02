---
title: "361.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "361.2"
---

# Flashcards: 361.2 - Clusters De Balanceo De Carga

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-001">
<div class="flashcard-front">

**P:** ¿En qué modo de LVS el tráfico de respuesta va directamente del Real Server al cliente sin pasar por el Director?

</div>
<div class="flashcard-back">

**R:** b) DR (Direct Routing). En el modo DR, solo el tráfico entrante pasa por el Director. Las respuestas van directamente del Real Server al cliente, lo que hace este modo el más eficiente y más utilizado en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el algoritmo de planificación predeterminado en IPVS?

</div>
<div class="flashcard-back">

**R:** c) wlc (Weighted Least Connection). `wlc` es el algoritmo predeterminado en IPVS. Combina el conteo de conexiones activas con los pesos asignados a cada servidor para tomar decisiones de enrutamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando crea un servicio virtual TCP en la IP 10.0.0.100 puerto 80 con algoritmo Round Robin?

</div>
<div class="flashcard-back">

**R:** c) `ipvsadm -A -t 10.0.0.100:80 -s rr`. `-A` crea un nuevo servicio virtual, `-t` especifica TCP (versus `-u` para UDP), y `-s rr` establece el algoritmo Round Robin. `-a` (minúscula) añade un Real Server, `-D` elimina un servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-004">
<div class="flashcard-front">

**P:** En keepalived, ¿qué parámetro debe ser único en la red para cada instancia VRRP?

</div>
<div class="flashcard-back">

**R:** c) virtual_router_id. El `virtual_router_id` (valor entre 0 y 255) identifica de forma única una instancia VRRP en la red. Dos instancias VRRP diferentes no deben compartir el mismo ID en la misma red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-005">
<div class="flashcard-front">

**P:** En HAProxy, ¿qué sección combina la funcionalidad de `frontend` y `backend` en una sola?

</div>
<div class="flashcard-back">

**R:** d) `listen`. La sección `listen` combina frontend y backend en un solo bloque, útil para configuraciones simples como páginas de estadísticas o servicios TCP directos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué flag de ipvsadm se usa para añadir un Real Server en modo NAT?

</div>
<div class="flashcard-back">

**R:** b) `-m`. `-m` indica masquerading (NAT), `-g` indica gatewaying (DR, modo predeterminado), y `-i` indica tunneling (TUN).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué directiva de HAProxy permite enrutar tráfico basándose en la URL solicitada?

</div>
<div class="flashcard-back">

**R:** c) `acl` con `use_backend`. Las ACLs permiten definir condiciones basadas en atributos HTTP (path, headers, etc.) y `use_backend` enruta el tráfico al backend correspondiente según la ACL evaluada. Esto requiere `mode http`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-008">
<div class="flashcard-front">

**P:** En la configuración de nginx como balanceador, ¿qué directiva define un grupo de servidores backend?

</div>
<div class="flashcard-back">

**R:** c) `upstream`. La directiva `upstream` define un grupo de servidores backend. Dentro del bloque upstream se especifican los servidores individuales con la directiva `server` y el algoritmo de balanceo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué requisito especial tienen los Real Servers en modo DR de LVS?

</div>
<div class="flashcard-back">

**R:** b) Deben tener la VIP configurada en loopback con ARP suprimido. En modo DR, los Real Servers necesitan la VIP en la interfaz loopback para poder responder a los paquetes destinados a esa IP, pero deben suprimir ARP para esa dirección para evitar conflictos con el Director.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué algoritmo de balanceo en HAProxy mantiene la persistencia de sesión basándose en la IP de origen del cliente?

</div>
<div class="flashcard-back">

**R:** c) `source`. El algoritmo `source` realiza un hash de la IP de origen del cliente para asegurar que las peticiones del mismo cliente siempre lleguen al mismo servidor, proporcionando así persistencia de sesión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué módulo del kernel de Linux implementa el balanceo de carga a nivel de capa 4 (TCP/UDP) en LVS?

</div>
<div class="flashcard-back">

**R:** b) ip_vs (IPVS). IPVS (IP Virtual Server) es el módulo del kernel de Linux que implementa LVS. Se carga con `modprobe ip_vs` y proporciona balanceo de carga a nivel de transporte con alto rendimiento al operar directamente en el espacio del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-012">
<div class="flashcard-front">

**P:** En el modo TUN (IP Tunneling) de LVS, ¿qué tipo de encapsulación se utiliza para enviar los paquetes a los Real Servers?

</div>
<div class="flashcard-back">

**R:** c) IP-in-IP. El modo TUN utiliza encapsulación IP-in-IP para enviar los paquetes del Director a los Real Servers. Esto permite que los RS estén en redes diferentes del Director. Las respuestas van directamente al cliente, al igual que en modo DR.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué protocolo utiliza keepalived para gestionar la IP virtual flotante entre nodos?

</div>
<div class="flashcard-back">

**R:** b) VRRP. Keepalived utiliza VRRP (Virtual Router Redundancy Protocol) para gestionar la alta disponibilidad de la IP virtual. VRRP usa la dirección multicast 224.0.0.18 para los anuncios entre nodos. El nodo con mayor prioridad se convierte en MASTER.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-014">
<div class="flashcard-front">

**P:** En HAProxy, ¿qué diferencia existe entre `mode http` y `mode tcp`?

</div>
<div class="flashcard-back">

**R:** c) `mode http` opera en capa 7 y permite inspeccionar contenido HTTP, mientras que `mode tcp` opera en capa 4. `mode http` permite a HAProxy inspeccionar y modificar cabeceras HTTP, usar ACLs basadas en URL/cookies y realizar health checks HTTP. `mode tcp` solo reenvía tráfico TCP sin inspeccionar su contenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué parámetro de HAProxy en la línea de definición de un servidor indica que es un servidor de respaldo que solo recibe tráfico cuando los demás fallan?

</div>
<div class="flashcard-back">

**R:** b) `backup`. La palabra clave `backup` en la definición de un servidor indica que solo recibirá tráfico cuando todos los servidores no marcados como backup estén caídos. Ejemplo: `server web3 192.168.1.12:8080 check backup`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué algoritmo de planificación en IPVS envía las peticiones al servidor sin conexiones activas, o utiliza SED si todos tienen conexiones?

</div>
<div class="flashcard-back">

**R:** c) `nq` (Never Queue). El algoritmo `nq` (Never Queue) prioriza el envío a servidores sin conexiones activas. Si todos los servidores tienen al menos una conexión, utiliza el algoritmo SED (Shortest Expected Delay) para elegir el destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué directiva de nginx define el algoritmo de balanceo basado en la IP de origen del cliente para mantener persistencia de sesión?

</div>
<div class="flashcard-back">

**R:** c) `ip_hash`. La directiva `ip_hash` dentro del bloque `upstream` realiza un hash de la dirección IP del cliente para asegurar que las peticiones de un mismo cliente siempre se dirijan al mismo servidor backend, proporcionando así persistencia de sesión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-018">
<div class="flashcard-front">

**P:** En keepalived, ¿qué parámetro define la prioridad de un nodo en una instancia VRRP, donde un valor mayor indica mayor preferencia?

</div>
<div class="flashcard-back">

**R:** c) `priority`. El parámetro `priority` (valor de 1 a 254) determina qué nodo será MASTER. El nodo con el valor más alto gana la elección. Si el MASTER falla, el BACKUP con la siguiente prioridad más alta toma el control de la VIP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-019">
<div class="flashcard-front">

**P:** En HAProxy, ¿qué parámetros de health check determinan cuántos checks fallidos marcan un servidor como caído y cuántos exitosos lo restauran?

</div>
<div class="flashcard-back">

**R:** b) `fall` y `rise`. `fall` indica el número de health checks consecutivos fallidos necesarios para marcar un servidor como DOWN. `rise` indica los checks exitosos consecutivos necesarios para marcarlo como UP. Ejemplo: `server web1 10.0.0.1:80 check inter 5s fall 3 rise 2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-020">
<div class="flashcard-front">

**P:** ¿Cuál de los siguientes balanceadores opera exclusivamente en espacio del kernel proporcionando el mayor rendimiento posible?

</div>
<div class="flashcard-back">

**R:** c) LVS/IPVS. LVS/IPVS opera directamente en el kernel de Linux, lo que le proporciona el mayor rendimiento posible al evitar el overhead de copiar paquetes al espacio de usuario. HAProxy y Nginx operan en espacio de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando crea un servicio virtual TCP en la IP 10.0.0.100 puerto 443 con algoritmo Weighted Least Connection?

</div>
<div class="flashcard-back">

**R:** ipvsadm -A -t 10.0.0.100:443 -s wlc. `-A` añade un nuevo servicio virtual, `-t` indica protocolo TCP con IP:puerto, y `-s wlc` establece el algoritmo Weighted Least Connection. `wlc` es además el algoritmo predeterminado de IPVS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la tabla completa de servicios virtuales y Real Servers configurados en IPVS en formato numérico?

</div>
<div class="flashcard-back">

**R:** ipvsadm -Ln. `ipvsadm -Ln` muestra la tabla IPVS con las direcciones en formato numérico (sin resolución DNS). `-L` o `--list` muestra la tabla y `-n` o `--numeric` evita la resolución de nombres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando elimina toda la tabla de servicios virtuales en IPVS?

</div>
<div class="flashcard-back">

**R:** ipvsadm -C. El comando `ipvsadm -C` (o `--clear`) elimina todos los servicios virtuales y Real Servers de la tabla IPVS. Para eliminar solo un servicio específico se usa `ipvsadm -D -t IP:puerto`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando carga el módulo del kernel IPVS necesario para LVS?

</div>
<div class="flashcard-back">

**R:** modprobe ip_vs. El módulo principal de IPVS se carga con `modprobe ip_vs`. Adicionalmente, se pueden cargar módulos de algoritmos específicos como `ip_vs_rr` (Round Robin), `ip_vs_wrr` (Weighted Round Robin), `ip_vs_lc` (Least Connection), etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando añade un Real Server con IP 192.168.1.10 puerto 80 en modo DR con peso 3 al servicio virtual 10.0.0.100:80?

</div>
<div class="flashcard-back">

**R:** ipvsadm -a -t 10.0.0.100:80 -r 192.168.1.10:80 -g -w 3. `-a` añade un Real Server (minúscula, diferente de `-A` que crea servicios). `-r` especifica la dirección del RS, `-g` indica modo DR (gatewaying), y `-w 3` establece el peso del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: DR es el modo más eficiente y más usado en producción. En DR, los Real Servers n...

</div>
<div class="flashcard-back">

**R:** DR es el modo más eficiente y más usado en producción. En DR, los Real Servers necesitan la VIP en loopback con ARP suprimido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce al menos rr, wrr, lc, wlc, sh y dh. `wlc` es el predeterminado.

</div>
<div class="flashcard-back">

**R:** Conoce al menos rr, wrr, lc, wlc, sh y dh. `wlc` es el predeterminado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `virtual_router_id` debe ser único en la red. El nodo con mayor `priority` se co...

</div>
<div class="flashcard-back">

**R:** `virtual_router_id` debe ser único en la red. El nodo con mayor `priority` se convierte en MASTER. VRRP usa multicast 224.0.0.18.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la diferencia entre `mode http` (capa 7, puede inspeccionar HTTP) y `mode...

</div>
<div class="flashcard-back">

**R:** Conoce la diferencia entre `mode http` (capa 7, puede inspeccionar HTTP) y `mode tcp` (capa 4, solo reenvía TCP). Las ACLs solo funcionan en modo HTTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `rr`?

</div>
<div class="flashcard-back">

**R:** Distribución cíclica equitativa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `wrr`?

</div>
<div class="flashcard-back">

**R:** Round Robin con pesos por servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `lc`?

</div>
<div class="flashcard-back">

**R:** Envía al servidor con menos conexiones activas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `wlc`?

</div>
<div class="flashcard-back">

**R:** LC con pesos (predeterminado en IPVS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `sh`?

</div>
<div class="flashcard-back">

**R:** El mismo cliente siempre va al mismo servidor

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción al Balanceo de Carga?

</div>
<div class="flashcard-back">

**R:** El **balanceo de carga** distribuye el tráfico de red entre múltiples servidores para mejorar el rendimiento, la disponibilidad y la escalabilidad. Existen balanceadores en capa 4 (transporte/TCP) y ca

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son LVS - Linux Virtual Server?

</div>
<div class="flashcard-back">

**R:** **LVS** es una solución de balanceo de carga integrada en el kernel de Linux a través del módulo **IPVS** (IP Virtual Server). Opera en capa 4 (TCP/UDP).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Algoritmos de Planificación (Scheduling)?

</div>
<div class="flashcard-back">

**R:** | Algoritmo | Sigla | Descripción |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son Keepalived?

</div>
<div class="flashcard-back">

**R:** **Keepalived** proporciona dos funcionalidades clave:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="361.2">
</div>

<div class="flashcard" data-id="361.2-fc-039">
<div class="flashcard-front">

**P:** Que es/son HAProxy?

</div>
<div class="flashcard-back">

**R:** **HAProxy** es un balanceador de carga de alto rendimiento que opera en capa 4 (TCP) y capa 7 (HTTP).

</div>
</div>

---

