---
title: "Simulacro Examen 306 - B"
tags:
  - lpic-3
  - examen-306
  - simulacro
tipo: simulacro
certificacion: lpic-3
examen: "306"
---

# Simulacro B - Examen 306

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="306-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="361.1" data-correct="d">

### Pregunta 1 (Subtema 361.1)

En un cluster Pacemaker de 5 nodos, se produce una particion de red que separa 2 nodos de los otros 3. ¿Que ocurre con los recursos si `no-quorum-policy=stop`?

- [ ] a) Ambos grupos continuan ejecutando recursos normalmente
- [ ] b) El grupo de 2 nodos mantiene los recursos y el grupo de 3 los detiene
- [ ] c) Todos los nodos detienen los recursos hasta que se restaure la comunicacion
- [ ] d) El grupo de 3 nodos mantiene el quorum y los recursos; el grupo de 2 nodos detiene sus recursos

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) El grupo de 3 nodos mantiene el quorum y los recursos; el grupo de 2 nodos detiene sus recursos**

En un cluster de 5 nodos, el quorum requiere mayoria (3 votos). Cuando ocurre una particion de red, el grupo con 3 nodos mantiene el quorum (3/5 > 50%) y continua operando normalmente. El grupo con 2 nodos pierde el quorum y, al tener `no-quorum-policy=stop`, detiene todos sus recursos. Esto previene el escenario de split-brain donde ambos grupos intentarian ejecutar los mismos recursos simultaneamente. Si la politica fuera `freeze`, el grupo minoritario mantendria los recursos existentes pero no iniciaria nuevos.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="361.1" data-correct="b">

### Pregunta 2 (Subtema 361.1)

¿Que seccion del archivo `/etc/corosync/corosync.conf` define el protocolo de comunicacion, cifrado y las interfaces de red del cluster?

- [ ] a) `nodelist`
- [ ] b) `totem`
- [ ] c) `quorum`
- [ ] d) `service`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `totem`**

La seccion `totem` de `corosync.conf` configura el protocolo de comunicacion del cluster, incluyendo: `version` (protocolo totem, generalmente 2), `cluster_name`, `transport` (knet, udpu, udp), `crypto_cipher` y `crypto_hash` (cifrado y autenticacion), `token` (timeout en milisegundos para detectar fallo de nodo), `consensus`, `join` y las interfaces de red. La seccion `nodelist` define los nodos, `quorum` configura el proveedor de quorum (corosync_votequorum) y `service` habilita servicios adicionales como Pacemaker.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="361.1" data-correct="a">

### Pregunta 3 (Subtema 361.1)

¿Que es SBD (Split-Brain Detector) en el contexto de un cluster Pacemaker y para que se utiliza?

- [ ] a) Es un mecanismo de fencing basado en watchdog y disco compartido que permite aislar nodos sin necesidad de dispositivos IPMI o similares
- [ ] b) Es un protocolo de comunicacion alternativo a Corosync para la deteccion de fallos
- [ ] c) Es una herramienta de diagnostico que analiza logs del cluster en busca de incidentes de split-brain
- [ ] d) Es un servicio de monitorizacion que envía alertas cuando se detecta una particion de red

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Es un mecanismo de fencing basado en watchdog y disco compartido que permite aislar nodos sin necesidad de dispositivos IPMI o similares**

SBD (Split-Brain Detector) es un mecanismo de fencing que utiliza un pequeno dispositivo de bloque compartido (tipicamente en una SAN) donde los nodos escriben mensajes de vida (heartbeat) y comandos de fencing. Cuando un nodo debe ser aislado, se escribe un comando de apagado en la ranura SBD de ese nodo. El demonio SBD del nodo objetivo lee el comando y se apaga. Ademas, SBD integra un watchdog del kernel: si el demonio deja de alimentar el watchdog, el sistema se reinicia automaticamente. Se configura con `sbd -d /dev/disco create` y se integra con Pacemaker como dispositivo STONITH.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="361.1" data-correct="c">

### Pregunta 4 (Subtema 361.1)

¿Cual es el comando correcto para poner un nodo del cluster en modo standby, evitando que se ejecuten recursos en el?

- [ ] a) `pcs cluster disable nodo1`
- [ ] b) `pcs node maintenance nodo1`
- [ ] c) `pcs node standby nodo1`
- [ ] d) `pcs resource ban --node nodo1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `pcs node standby nodo1`**

`pcs node standby nodo1` establece el atributo `standby=on` en el nodo, lo que hace que Pacemaker migre todos los recursos fuera de ese nodo y no le asigne nuevos recursos. Es util para realizar mantenimiento (actualizaciones, reinicio). Se revierte con `pcs node unstandby nodo1`. A diferencia de `pcs node maintenance`, que suspende todas las operaciones de monitorizacion ademas de mover recursos, `standby` solo evita la ejecucion de recursos pero sigue monitorizando el nodo. `pcs cluster stop nodo1` detiene completamente los servicios del cluster en ese nodo.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="361.1" data-correct="b">

### Pregunta 5 (Subtema 361.1)

¿Que parametro de `totem` en Corosync define el tiempo maximo (en milisegundos) que se espera sin recibir un token antes de declarar un nodo como fallido?

- [ ] a) `consensus`
- [ ] b) `token`
- [ ] c) `join`
- [ ] d) `fail_recv_const`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `token`**

El parametro `token` en la seccion `totem` de `corosync.conf` define el timeout del token en milisegundos (por defecto 1000 ms en knet, 10000 ms en UDP). Si un nodo no recibe el token en este periodo, se considera que el nodo anterior ha fallado y se inicia el proceso de reconfiguacion del anillo. El parametro `consensus` (por defecto 1.2 * token) define el tiempo para alcanzar consenso sobre la nueva membresia. `join` define el timeout para que un nodo se una al cluster. Estos valores deben ajustarse segun la latencia de la red.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="361.2" data-correct="a">

### Pregunta 6 (Subtema 361.2)

En la configuracion de HAProxy, ¿que directiva de la seccion `backend` define que metodo de health check se utiliza para verificar la disponibilidad de los servidores reales?

- [ ] a) `option httpchk GET /health`
- [ ] b) `check-method http /health`
- [ ] c) `health-check http GET /health`
- [ ] d) `monitor-uri /health`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `option httpchk GET /health`**

`option httpchk` configura health checks HTTP en HAProxy, permitiendo verificar que los servidores backend responden correctamente a peticiones HTTP especificas. La sintaxis completa es `option httpchk [metodo] [uri] [version]`, por ejemplo `option httpchk GET /health HTTP/1.1\r\nHost:\ www.ejemplo.com`. Sin esta opcion, HAProxy solo verifica la conexion TCP. Cada servidor en el backend debe tener la opcion `check` en su linea `server` para activar los health checks: `server web1 192.168.1.10:80 check inter 5s fall 3 rise 2`.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="361.2" data-correct="d">

### Pregunta 7 (Subtema 361.2)

¿Que comando de `ipvsadm` muestra la tabla actual de servidores virtuales y reales con estadisticas de conexiones?

- [ ] a) `ipvsadm --show`
- [ ] b) `ipvsadm --status`
- [ ] c) `ipvsadm --detail`
- [ ] d) `ipvsadm -Ln --stats`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `ipvsadm -Ln --stats`**

`ipvsadm -Ln` lista la tabla IPVS actual mostrando los servidores virtuales y sus servidores reales con direcciones numericas (sin resolucion DNS). La opcion `--stats` agrega estadisticas de conexiones, paquetes y bytes. Otras opciones utiles son `--rate` (muestra tasas de conexion), `--exact` (muestra contadores exactos sin abreviar), `--thresholds` (muestra umbrales de conexiones) y `--timeout` (muestra valores de timeout). `ipvsadm -Sn` guarda las reglas actuales y `ipvsadm -R` las restaura.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="361.2" data-correct="c">

### Pregunta 8 (Subtema 361.2)

En HAProxy, ¿que directiva permite mantener la afinidad de sesion (sticky sessions) basada en cookies insertadas por el propio HAProxy?

- [ ] a) `balance source`
- [ ] b) `stick-table type ip`
- [ ] c) `cookie SERVERID insert indirect nocache`
- [ ] d) `persist cookie SERVERID`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `cookie SERVERID insert indirect nocache`**

La directiva `cookie SERVERID insert indirect nocache` hace que HAProxy inserte una cookie llamada SERVERID en la respuesta HTTP para rastrear el servidor backend asignado a cada cliente. `insert` crea la cookie, `indirect` elimina la cookie antes de reenviar la peticion al backend, `nocache` agrega cabeceras para que los caches intermedios no almacenen la cookie. Cada servidor del backend se identifica con `server web1 192.168.1.10:80 cookie web1`. El metodo `balance source` usa la IP del cliente pero no funciona bien con NAT.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="361.2" data-correct="b">

### Pregunta 9 (Subtema 361.2)

En el modo TUN (IP Tunneling) de LVS/IPVS, ¿como se encapsula el trafico hacia los servidores reales?

- [ ] a) Se reescribe la MAC de destino del paquete original
- [ ] b) Se encapsula el paquete IP original dentro de otro paquete IP (IP-in-IP)
- [ ] c) Se utiliza un tunel GRE entre el balanceador y los servidores reales
- [ ] d) Se reescribe la IP de destino del paquete con la IP del servidor real

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Se encapsula el paquete IP original dentro de otro paquete IP (IP-in-IP)**

En el modo TUN de LVS, el balanceador encapsula el paquete IP completo del cliente dentro de un nuevo paquete IP (tunneling IP-in-IP, protocolo 4) dirigido al servidor real seleccionado. El servidor real desencapsula el paquete, procesa la peticion y responde directamente al cliente usando la VIP como IP de origen (configurada en la interfaz tunl0). A diferencia del modo DR, los servidores reales pueden estar en redes diferentes (incluso en diferentes datacenters). Requiere que los servidores soporten IP-in-IP tunneling (modulo `ipip` del kernel).

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="361.2" data-correct="a">

### Pregunta 10 (Subtema 361.2)

¿Que seccion de la configuracion de `keepalived` define una instancia VRRP para failover de la IP virtual entre balanceadores?

- [ ] a) `vrrp_instance`
- [ ] b) `virtual_server`
- [ ] c) `vrrp_group`
- [ ] d) `failover_instance`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `vrrp_instance`**

La seccion `vrrp_instance` en `/etc/keepalived/keepalived.conf` define una instancia del protocolo VRRP que gestiona el failover de una IP virtual. Los parametros clave incluyen: `state` (MASTER o BACKUP), `interface` (interfaz de red), `virtual_router_id` (identificador unico, 0-255), `priority` (prioridad del nodo, mayor = preferido), `advert_int` (intervalo de anuncios), `authentication` (autenticacion entre nodos) y `virtual_ipaddress` (lista de IPs virtuales). La seccion `virtual_server` se usa para configurar los servidores reales IPVS y sus health checks.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="361.3" data-correct="c">

### Pregunta 11 (Subtema 361.3)

¿Que comando de Pacemaker limpia los contadores de fallos de un recurso en todos los nodos, permitiendo que el cluster intente reiniciar el recurso?

- [ ] a) `pcs resource reset recurso`
- [ ] b) `pcs resource restart recurso`
- [ ] c) `pcs resource cleanup recurso`
- [ ] d) `pcs resource clear recurso`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `pcs resource cleanup recurso`**

`pcs resource cleanup recurso` limpia el historial de fallos y los contadores de errores del recurso especificado en todos los nodos. Cuando un recurso alcanza su limite de fallos (`migration-threshold`), Pacemaker lo marca como fallido y no intenta reiniciarlo hasta que se limpie el contador. El comando tambien reevalua el estado actual del recurso. `pcs resource failcount show recurso` muestra el contador actual de fallos. `pcs resource clear recurso` elimina restricciones de ubicacion temporales creadas por `pcs resource move` o `pcs resource ban`.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="361.3" data-correct="a">

### Pregunta 12 (Subtema 361.3)

¿Que propiedad de un recurso Pacemaker define cuantas veces puede fallar un recurso en un nodo antes de que Pacemaker lo migre a otro nodo?

- [ ] a) `migration-threshold`
- [ ] b) `failure-limit`
- [ ] c) `max-failures`
- [ ] d) `failcount-limit`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `migration-threshold`**

La propiedad `migration-threshold` define el numero maximo de fallos que Pacemaker tolera para un recurso en un nodo antes de moverlo a otro nodo. Por defecto es `INFINITY` (nunca migrar por fallos). Se configura con `pcs resource meta recurso migration-threshold=3`. Cuando el contador de fallos alcanza este umbral, Pacemaker marca el nodo como no elegible para ese recurso. El parametro `failure-timeout` define el tiempo tras el cual se reinician los contadores de fallos automaticamente: `pcs resource meta recurso failure-timeout=60s`.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="361.3" data-correct="d">

### Pregunta 13 (Subtema 361.3)

¿Que tipo de restriccion de ubicacion (`location`) se usa para que un recurso prefiera ejecutarse en un nodo especifico con una puntuacion de 500?

- [ ] a) `pcs constraint location recurso rule node=nodo1 score=500`
- [ ] b) `pcs constraint colocation add recurso with nodo1 500`
- [ ] c) `pcs resource move recurso nodo1 --score=500`
- [ ] d) `pcs constraint location recurso prefers nodo1=500`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `pcs constraint location recurso prefers nodo1=500`**

`pcs constraint location recurso prefers nodo1=500` crea una restriccion de ubicacion que da al nodo1 una puntuacion de 500 para ejecutar ese recurso. Puntuaciones mas altas hacen al nodo mas preferido. `INFINITY` obliga al recurso a ejecutarse en ese nodo. Tambien existe `pcs constraint location recurso avoids nodo2=INFINITY` para evitar un nodo. Las restricciones basadas en reglas permiten condiciones mas complejas: `pcs constraint location recurso rule score=500 '#uname' eq nodo1`. Las puntuaciones se suman cuando hay multiples restricciones.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="361.3" data-correct="b">

### Pregunta 14 (Subtema 361.3)

¿Que comando de `pcs` configura un recurso promotable (anteriormente Master/Slave) para gestionar DRBD en un cluster Pacemaker?

- [ ] a) `pcs resource master drbd_ms ocf:linbit:drbd drbd_resource=r0`
- [ ] b) `pcs resource create drbd_r0 ocf:linbit:drbd drbd_resource=r0 promotable promoted-max=1 promoted-node-max=1 clone-max=2 clone-node-max=1`
- [ ] c) `pcs resource clone drbd_r0 ocf:linbit:drbd --master-slave`
- [ ] d) `pcs resource add drbd_r0 type=promotable agent=ocf:linbit:drbd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `pcs resource create drbd_r0 ocf:linbit:drbd drbd_resource=r0 promotable promoted-max=1 promoted-node-max=1 clone-max=2 clone-node-max=1`**

En versiones recientes de pcs, los recursos promotable (antes Master/Slave) se crean con la opcion `promotable` en `pcs resource create`. Los parametros clave son: `promoted-max=1` (maximo 1 instancia promovida a Master), `promoted-node-max=1` (maximo 1 Master por nodo), `clone-max=2` (maximo 2 instancias en total) y `clone-node-max=1` (maximo 1 instancia por nodo). El agente `ocf:linbit:drbd` gestiona las operaciones de DRBD. Pacemaker promueve automaticamente una instancia a Primary y mantiene la otra como Secondary.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="361.3" data-correct="c">

### Pregunta 15 (Subtema 361.3)

¿Que operacion del Resource Agent (RA) ejecuta Pacemaker periodicamente para verificar que un recurso funciona correctamente?

- [ ] a) `start`
- [ ] b) `validate-all`
- [ ] c) `monitor`
- [ ] d) `probe`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `monitor`**

La operacion `monitor` es ejecutada periodicamente por Pacemaker para verificar el estado de un recurso activo. Se configura con `pcs resource op add recurso monitor interval=30s timeout=20s`. Si la operacion devuelve un error, Pacemaker incrementa el contador de fallos y puede tomar acciones correctivas (reiniciar, migrar). Los Resource Agents OCF definen varias operaciones: `start` (iniciar), `stop` (detener), `monitor` (verificar estado), `promote`/`demote` (para recursos promotable), `meta-data` (informacion del agente) y `validate-all` (validar parametros de configuracion).

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="362.1" data-correct="a">

### Pregunta 16 (Subtema 362.1)

¿Que ocurre cuando se configura DRBD en modo dual-primary y que requisitos adicionales tiene?

- [ ] a) Ambos nodos pueden ser primarios simultaneamente, pero requiere un sistema de archivos cluster (GFS2 u OCFS2) y fencing activo
- [ ] b) Ambos nodos pueden escribir directamente en ext4 sin restricciones adicionales
- [ ] c) El modo dual-primary solo permite lecturas simultaneas, las escrituras siguen siendo exclusivas del nodo maestro
- [ ] d) El modo dual-primary replica los datos en tres nodos en lugar de dos para mayor redundancia

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Ambos nodos pueden ser primarios simultaneamente, pero requiere un sistema de archivos cluster (GFS2 u OCFS2) y fencing activo**

El modo dual-primary de DRBD permite que ambos nodos tengan acceso de lectura/escritura simultaneo al dispositivo DRBD. Se habilita con `allow-two-primaries yes` en la configuracion del recurso. Sin embargo, usar un sistema de archivos convencional (ext4, XFS) en este modo causaria corrupcion de datos, ya que estos sistemas no coordinan el acceso entre nodos. Es obligatorio usar un sistema de archivos cluster como GFS2 u OCFS2 que utiliza DLM para coordinar los bloqueos. Ademas, STONITH debe estar activo para poder aislar nodos problematicos.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="362.1" data-correct="d">

### Pregunta 17 (Subtema 362.1)

¿Que comando de DRBD se utiliza para desconectar manualmente la replicacion entre nodos sin detener el servicio local?

- [ ] a) `drbdadm down recurso`
- [ ] b) `drbdadm secondary recurso`
- [ ] c) `drbdadm pause-sync recurso`
- [ ] d) `drbdadm disconnect recurso`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `drbdadm disconnect recurso`**

`drbdadm disconnect recurso` desconecta la replicacion de red entre los nodos sin afectar al dispositivo DRBD local, que sigue disponible para lectura/escritura si es primario. El nodo pasa al estado de conexion `StandAlone`. Los cambios realizados durante la desconexion se registran en el activity log y se sincronizan cuando se reconecta con `drbdadm connect recurso`. `drbdadm down recurso` detiene completamente el recurso DRBD (desconecta y desactiva el dispositivo). `drbdadm pause-sync recurso` pausa temporalmente la resincronizacion manteniendo la conexion activa.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="362.1" data-correct="b">

### Pregunta 18 (Subtema 362.1)

¿Que parametro de configuracion de DRBD define el tamano del Activity Log, que registra las regiones del disco modificadas durante una desconexion?

- [ ] a) `resync-rate`
- [ ] b) `al-extents`
- [ ] c) `verify-alg`
- [ ] d) `c-plan-ahead`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `al-extents`**

El parametro `al-extents` define el numero de extents (regiones de 4 MB) que se registran en el Activity Log de DRBD. Cuando un nodo se desconecta y luego se reconecta, solo las regiones marcadas en el activity log necesitan resincronizarse (resincronizacion parcial), en lugar de todo el dispositivo. Un valor mayor reduce el numero de escrituras al activity log (mejor rendimiento) pero aumenta el tiempo de resincronizacion parcial. El valor por defecto es 1237 y el maximo es 65536. Se configura en la seccion `disk` del recurso: `al-extents 3389`.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="362.1" data-correct="c">

### Pregunta 19 (Subtema 362.1)

¿Que comando verifica la integridad de los datos entre ambos nodos DRBD comparando checksums de bloques?

- [ ] a) `drbdadm check recurso`
- [ ] b) `drbdadm compare recurso`
- [ ] c) `drbdadm verify recurso`
- [ ] d) `drbdadm validate recurso`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `drbdadm verify recurso`**

`drbdadm verify recurso` inicia una verificacion online que compara los datos de ambos nodos bloque a bloque utilizando checksums (el algoritmo se configura con `verify-alg` en la seccion `net`, por ejemplo `verify-alg sha256`). La verificacion se ejecuta en segundo plano sin interrumpir el servicio. Si detecta diferencias (out-of-sync blocks), se reportan en el log y se pueden resincronizar con `drbdadm disconnect recurso && drbdadm connect recurso`. Es recomendable ejecutar la verificacion periodicamente mediante cron para detectar errores silenciosos (bit rot).

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="362.1" data-correct="a">

### Pregunta 20 (Subtema 362.1)

¿Que parametro de la seccion `net` de DRBD controla la velocidad maxima de resincronizacion para evitar saturar la red?

- [ ] a) `resync-rate`
- [ ] b) `max-bandwidth`
- [ ] c) `sync-speed`
- [ ] d) `net-rate-limit`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `resync-rate`**

El parametro `resync-rate` limita la velocidad maxima de resincronizacion en bytes por segundo (por ejemplo, `resync-rate 100M` para 100 MB/s). Esto evita que la resincronizacion consuma todo el ancho de banda de red disponible, afectando al trafico de produccion. En DRBD 8.4+, se puede usar el planificador dinamico de resincronizacion con `c-plan-ahead`, `c-fill-target`, `c-max-rate` y `c-min-rate`, que ajusta automaticamente la velocidad segun la carga de E/S actual, proporcionando una gestion mas inteligente del ancho de banda.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="362.2" data-correct="d">

### Pregunta 21 (Subtema 362.2)

¿Que comando permite agregar journals adicionales a un sistema de archivos GFS2 existente para permitir que nuevos nodos lo monten?

- [ ] a) `mkfs.gfs2 --add-journal /dev/mapper/shared`
- [ ] b) `gfs2_tool add-journal /dev/mapper/shared`
- [ ] c) `tunegfs2 --journals +1 /dev/mapper/shared`
- [ ] d) `gfs2_jadd -j 1 /mnt/shared`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `gfs2_jadd -j 1 /mnt/shared`**

`gfs2_jadd` agrega journals a un sistema de archivos GFS2 montado. El parametro `-j 1` indica que se agrega 1 journal adicional. Cada nodo que monta GFS2 necesita su propio journal para garantizar la recuperacion ante fallos. El comando se ejecuta sobre el punto de montaje (no sobre el dispositivo) y el sistema de archivos debe estar montado. Tambien se puede especificar el tamano del journal con `-J tamaño_MB`. Es importante agregar journals antes de montar GFS2 en nodos adicionales del cluster.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="362.2" data-correct="b">

### Pregunta 22 (Subtema 362.2)

¿Que protocolo se utiliza para acceder a almacenamiento de bloque compartido a traves de la red TCP/IP, como alternativa a Fibre Channel SAN?

- [ ] a) NFS (Network File System)
- [ ] b) iSCSI (Internet Small Computer Systems Interface)
- [ ] c) CIFS/SMB
- [ ] d) FCoE (Fibre Channel over Ethernet)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) iSCSI (Internet Small Computer Systems Interface)**

iSCSI encapsula comandos SCSI dentro de paquetes TCP/IP, permitiendo acceder a dispositivos de almacenamiento de bloque remotos a traves de redes Ethernet estandar. El servidor se denomina target (implementaciones Linux: targetcli, tgt, LIO) y el cliente se denomina initiator (open-iscsi). El initiator se configura en `/etc/iscsi/iscsid.conf` y los targets se descubren con `iscsiadm -m discovery -t sendtargets -p IP:puerto`. FCoE es una alternativa que encapsula Fibre Channel sobre Ethernet pero requiere hardware especializado. NFS opera a nivel de sistema de archivos, no de bloque.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="362.2" data-correct="a">

### Pregunta 23 (Subtema 362.2)

¿Que herramienta de Linux se utiliza para administrar targets iSCSI mediante el framework LIO del kernel?

- [ ] a) `targetcli`
- [ ] b) `iscsiadm`
- [ ] c) `tgtadm`
- [ ] d) `iscsi-target-mgr`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `targetcli`**

`targetcli` es la herramienta de administracion interactiva para el subsistema LIO (Linux-IO) del kernel, que implementa targets iSCSI. Proporciona una interfaz tipo shell con navegacion jerarquica donde se configuran: backstores (dispositivos de bloque, archivos, ramdisk), targets iSCSI con sus IQN (iSCSI Qualified Name), portales (direccion IP y puerto), LUNs (unidades logicas) y ACLs (control de acceso). `iscsiadm` es la herramienta del lado initiator (cliente). `tgtadm` corresponde al framework tgt mas antiguo y no al LIO del kernel.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="362.2" data-correct="c">

### Pregunta 24 (Subtema 362.2)

¿Que archivo de configuracion de OCFS2 define los nodos del cluster y sus direcciones para la comunicacion del sistema de archivos?

- [ ] a) `/etc/corosync/ocfs2.conf`
- [ ] b) `/etc/ocfs2/nodes.conf`
- [ ] c) `/etc/ocfs2/cluster.conf`
- [ ] d) `/etc/sysconfig/ocfs2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `/etc/ocfs2/cluster.conf`**

El archivo `/etc/ocfs2/cluster.conf` define la configuracion del cluster para OCFS2, incluyendo los nodos participantes con sus nombres, direcciones IP, puertos y numeros de nodo. Tambien define el nombre del cluster y el numero total de nodos. Se puede generar y gestionar con la herramienta `o2cb` (OCFS2 Cluster Base). El servicio o2cb debe estar activo para que OCFS2 funcione. En entornos modernos, OCFS2 puede utilizar el stack de cluster de Pacemaker/Corosync en lugar de o2cb, configurandose con `cluster_stack=pcmk` en las opciones de montaje.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="362.2" data-correct="d">

### Pregunta 25 (Subtema 362.2)

¿Que comando del initiator iSCSI descubre los targets disponibles en un servidor iSCSI remoto?

- [ ] a) `iscsi-discover -t 192.168.1.100`
- [ ] b) `iscsiadm -m target -o list -p 192.168.1.100`
- [ ] c) `iscsiadm --scan-targets 192.168.1.100`
- [ ] d) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `iscsiadm -m discovery -t sendtargets -p 192.168.1.100`**

`iscsiadm -m discovery` opera en modo descubrimiento. `-t sendtargets` indica el metodo SendTargets (el target envia la lista de targets disponibles). `-p 192.168.1.100` especifica la direccion del portal (por defecto puerto 3260). El resultado muestra los IQN (iSCSI Qualified Names) disponibles. Despues del descubrimiento, se establece la sesion con `iscsiadm -m node -T iqn.nombre.del.target -p 192.168.1.100 --login`. El dispositivo de bloque aparece como `/dev/sdX` y se puede verificar con `lsblk` o `iscsiadm -m session -P 3`.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="363.1" data-correct="b">

### Pregunta 26 (Subtema 363.1)

¿Que protocolo de transporte utiliza GlusterFS por defecto para la comunicacion entre servidores y clientes?

- [ ] a) RDMA (Remote Direct Memory Access)
- [ ] b) TCP
- [ ] c) UDP
- [ ] d) InfiniBand nativo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) TCP**

GlusterFS utiliza TCP como protocolo de transporte por defecto para la comunicacion entre servidores (bricks) y clientes. Tambien soporta RDMA (Remote Direct Memory Access) para redes InfiniBand de alta velocidad y baja latencia, y la opcion `tcp,rdma` para usar ambos. El transporte se especifica al crear el volumen: `gluster volume create vol1 transport tcp,rdma ...`. Los clientes eligen el transporte al montar: `mount -t glusterfs -o transport=tcp server1:/vol1 /mnt`. El puerto base de GlusterFS es 24007 para el demonio `glusterd` y los bricks usan puertos a partir del 49152.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="363.1" data-correct="a">

### Pregunta 27 (Subtema 363.1)

¿Que comando de GlusterFS agrega un nuevo servidor al pool de almacenamiento confiable (trusted storage pool)?

- [ ] a) `gluster peer probe server3`
- [ ] b) `gluster pool add server3`
- [ ] c) `gluster node join server3`
- [ ] d) `gluster cluster add-node server3`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `gluster peer probe server3`**

`gluster peer probe server3` envia una solicitud al servidor indicado para que se una al pool de almacenamiento confiable (trusted storage pool). El comando debe ejecutarse desde un nodo que ya pertenece al pool. Una vez aceptado, el nuevo servidor puede participar en la creacion y expansion de volumenes. `gluster peer status` muestra los nodos del pool y su estado de conectividad. `gluster peer detach server3` elimina un nodo del pool (requiere que no tenga bricks activos). `gluster pool list` muestra todos los nodos con su UUID y estado.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="363.1" data-correct="c">

### Pregunta 28 (Subtema 363.1)

¿Que tipo de volumen GlusterFS combina distribucion y replicacion, ofreciendo tanto escalabilidad de capacidad como redundancia de datos?

- [ ] a) Stripe
- [ ] b) Disperse
- [ ] c) Distributed-Replicate
- [ ] d) Replicate

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Distributed-Replicate**

Un volumen Distributed-Replicate combina la distribucion de archivos entre grupos de bricks (como Distribute) con la replicacion dentro de cada grupo (como Replicate). Se crea especificando un factor de replica con un numero de bricks que sea multiplo de ese factor: `gluster volume create vol1 replica 2 server1:/b1 server2:/b1 server3:/b1 server4:/b1`. En este ejemplo, se crean 2 grupos de replica (server1+server2 y server3+server4), y los archivos se distribuyen entre los dos grupos. Ofrece escalabilidad horizontal y tolerancia a fallos simultaneamente.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="363.1" data-correct="d">

### Pregunta 29 (Subtema 363.1)

¿Que mecanismo utiliza GlusterFS para reparar automaticamente archivos que han divergido entre replicas cuando un brick que estuvo fuera de servicio se reconecta?

- [ ] a) `gluster volume resync`
- [ ] b) CRUSH rebalance
- [ ] c) Journal replay
- [ ] d) Self-heal daemon

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Self-heal daemon**

El self-heal daemon de GlusterFS monitoriza los volumenes replicados y repara automaticamente las inconsistencias entre replicas. Cuando un brick se reconecta despues de una desconexion, el self-heal daemon compara los changelogs y replica los archivos modificados, eliminados o creados durante la ausencia del brick. Se puede verificar el estado con `gluster volume heal vol1 info` y forzar una reparacion con `gluster volume heal vol1`. Las opciones del self-heal se configuran con `gluster volume set vol1 cluster.self-heal-daemon on`. Tambien soporta heal granular a nivel de entrada de directorio.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="363.1" data-correct="b">

### Pregunta 30 (Subtema 363.1)

¿Que opcion de GlusterFS permite establecer cuotas de espacio por directorio dentro de un volumen?

- [ ] a) `gluster volume set vol1 storage.limit 50GB`
- [ ] b) `gluster volume quota vol1 enable` seguido de `gluster volume quota vol1 limit-usage / 50GB`
- [ ] c) `gluster quota set vol1 --path=/ --limit=50GB`
- [ ] d) `gluster volume set vol1 features.quota-limit 50GB`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `gluster volume quota vol1 enable` seguido de `gluster volume quota vol1 limit-usage / 50GB`**

Las cuotas de GlusterFS se gestionan en dos pasos: primero se habilitan con `gluster volume quota vol1 enable`, y luego se establecen limites por directorio con `gluster volume quota vol1 limit-usage /directorio tamaño`. Se pueden definir cuotas en cualquier nivel del arbol de directorios. `gluster volume quota vol1 list` muestra las cuotas configuradas y el uso actual. Las cuotas tambien soportan soft limits con `limit-objects` para limitar el numero de inodos. Se desactivan con `gluster volume quota vol1 disable`.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="363.2" data-correct="c">

### Pregunta 31 (Subtema 363.2)

¿Que componente de Ceph es necesario exclusivamente para proporcionar el sistema de archivos distribuido CephFS?

- [ ] a) OSD (Object Storage Daemon)
- [ ] b) MON (Monitor)
- [ ] c) MDS (Metadata Server)
- [ ] d) MGR (Manager)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) MDS (Metadata Server)**

El MDS (Metadata Server) es el componente de Ceph que gestiona los metadatos del sistema de archivos CephFS: jerarquia de directorios, permisos, timestamps y mapeo de archivos a objetos RADOS. El MDS solo es necesario para CephFS; RBD y RADOSGW no lo requieren. Se recomienda desplegar al menos dos MDS (uno activo y uno standby) para alta disponibilidad. Los datos reales se almacenan en los OSDs. El MDS utiliza un pool de metadatos separado y puede escalar horizontalmente distribuyendo subdirectorios entre multiples MDS activos (multi-MDS).

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="363.2" data-correct="a">

### Pregunta 32 (Subtema 363.2)

¿Que herramienta de despliegue de Ceph, basada en contenedores y SSH, es la recomendada actualmente para instalar y gestionar clusters Ceph?

- [ ] a) `cephadm`
- [ ] b) `ceph-deploy`
- [ ] c) `ceph-ansible`
- [ ] d) `ceph-installer`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `cephadm`**

`cephadm` es la herramienta de despliegue oficial recomendada desde Ceph Octopus (v15). Utiliza contenedores (Docker o Podman) y SSH para instalar y gestionar los demonios de Ceph en los nodos del cluster. No requiere instalacion de paquetes Ceph en los nodos gestionados. Se inicia con `cephadm bootstrap --mon-ip IP` que crea el cluster inicial con un monitor y un manager. Luego se agregan nodos con `ceph orch host add nodo`. `ceph-deploy` esta obsoleto y `ceph-ansible` sigue disponible pero cephadm es la opcion preferida para nuevas instalaciones.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="363.2" data-correct="d">

### Pregunta 33 (Subtema 363.2)

¿Que tipo de pool de Ceph utiliza erasure coding en lugar de replicacion para almacenar datos con mayor eficiencia de espacio?

- [ ] a) Pool replicado con factor 1
- [ ] b) Pool cache tier
- [ ] c) Pool de metadatos
- [ ] d) Pool erasure-coded

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Pool erasure-coded**

Los pools erasure-coded de Ceph dividen los datos en fragmentos (k chunks de datos + m chunks de paridad) y los distribuyen entre OSDs, tolerando la perdida de hasta m OSDs. Se crean con `ceph osd pool create mipool erasure perfil_ec`. El perfil de erasure coding se define con `ceph osd erasure-code-profile set perfil_ec k=4 m=2`, donde k=4 datos y m=2 paridad ofrece un 67% de eficiencia de espacio (vs 33% con replicacion triple). Las desventajas son mayor uso de CPU y la imposibilidad de realizar escrituras parciales, lo que limita su uso con RBD y CephFS (que requieren pools replicados para metadatos).

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="363.2" data-correct="b">

### Pregunta 34 (Subtema 363.2)

¿Que comando de Ceph muestra la jerarquia de OSDs del cluster incluyendo la topologia CRUSH (hosts, racks, etc.)?

- [ ] a) `ceph osd list`
- [ ] b) `ceph osd tree`
- [ ] c) `ceph crush show`
- [ ] d) `ceph osd hierarchy`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ceph osd tree`**

`ceph osd tree` muestra la jerarquia CRUSH completa del cluster en formato de arbol, incluyendo: raiz (root), datacenters, racks, hosts y los OSDs individuales con su ID, peso (basado en la capacidad del disco), estado (up/down), clase de dispositivo (hdd, ssd, nvme) y si estan dentro o fuera del cluster (in/out). Esta informacion es fundamental para planificar la distribucion de datos y la tolerancia a fallos. El CRUSH map se puede exportar con `ceph osd getcrushmap -o crushmap.bin` y descompilar con `crushtool -d crushmap.bin -o crushmap.txt` para edicion manual.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="363.2" data-correct="c">

### Pregunta 35 (Subtema 363.2)

¿Que comando monta un sistema de archivos CephFS en un cliente Linux?

- [ ] a) `ceph mount -t cephfs mon1:/ /mnt/cephfs`
- [ ] b) `mount -t ceph -o name=admin mon1:/cephfs /mnt/cephfs`
- [ ] c) `mount -t ceph mon1,mon2,mon3:/ /mnt/cephfs -o name=admin,secret=clave`
- [ ] d) `cephfs-mount mon1:6789 /mnt/cephfs`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mount -t ceph mon1,mon2,mon3:/ /mnt/cephfs -o name=admin,secret=clave`**

CephFS se monta en clientes Linux con el driver del kernel `ceph` usando `mount -t ceph`. Se especifican los monitores (separados por comas), la ruta en CephFS (/ para la raiz) y las opciones de autenticacion (`name` para el usuario CephX, `secret` para la clave o `secretfile` para un archivo con la clave). Alternativamente se puede usar el cliente FUSE con `ceph-fuse /mnt/cephfs`. Es recomendable especificar multiples monitores para redundancia. El montaje permanente se configura en `/etc/fstab` con `_netdev` para indicar que es un filesystem de red.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="364.1" data-correct="a">

### Pregunta 36 (Subtema 364.1)

¿Que comando de mdadm se utiliza para marcar manualmente un disco como fallido en un array RAID?

- [ ] a) `mdadm /dev/md0 --fail /dev/sdc1`
- [ ] b) `mdadm --remove /dev/md0 /dev/sdc1`
- [ ] c) `mdadm --mark-faulty /dev/md0 /dev/sdc1`
- [ ] d) `mdadm /dev/md0 --set-bad /dev/sdc1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `mdadm /dev/md0 --fail /dev/sdc1`**

`mdadm /dev/md0 --fail /dev/sdc1` (o `-f`) marca el disco como defectuoso dentro del array. Despues de marcarlo como fallido, se puede retirar con `mdadm /dev/md0 --remove /dev/sdc1` (o `-r`). Si hay un disco spare disponible, la reconstruccion comienza automaticamente al marcar el fallo. El procedimiento completo para reemplazar un disco es: marcar como fallido, retirar del array, reemplazar fisicamente el disco y agregar el nuevo con `mdadm /dev/md0 --add /dev/sdc1`. El estado de la reconstruccion se monitoriza en `/proc/mdstat`.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="364.1" data-correct="d">

### Pregunta 37 (Subtema 364.1)

¿Que tecnologia de cache de Linux permite utilizar un disco SSD como cache de lectura/escritura para uno o mas discos HDD, mejorando el rendimiento de E/S?

- [ ] a) LVM writecache
- [ ] b) dm-cache
- [ ] c) RAID 1 con SSD
- [ ] d) bcache

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) bcache**

bcache es un subsistema del kernel Linux que permite usar dispositivos SSD como cache para discos HDD. Soporta tres modos: writeback (escrituras en SSD primero, mejor rendimiento), writethrough (escrituras en ambos, mas seguro) y writearound (solo cache de lectura). Se configura creando un backing device (HDD) con `make-bcache -B /dev/sda` y un caching device (SSD) con `make-bcache -C /dev/sdb`, luego se asocian mediante el UUID. Permite que multiples HDDs compartan un solo SSD de cache. dm-cache y LVM cache son alternativas que operan a nivel de device-mapper con funcionalidad similar.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="364.1" data-correct="b">

### Pregunta 38 (Subtema 364.1)

¿Que archivo de configuracion guarda la definicion de los arrays RAID de mdadm para su reensamblaje automatico durante el arranque?

- [ ] a) `/etc/raid.conf`
- [ ] b) `/etc/mdadm/mdadm.conf` (o `/etc/mdadm.conf`)
- [ ] c) `/proc/mdstat`
- [ ] d) `/etc/sysconfig/mdraid`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/mdadm/mdadm.conf` (o `/etc/mdadm.conf`)**

El archivo `mdadm.conf` contiene la definicion de los arrays RAID para que mdadm pueda reensamblarlos automaticamente durante el arranque del sistema. Se genera o actualiza con `mdadm --detail --scan >> /etc/mdadm/mdadm.conf`, que escanea los arrays activos y escribe sus lineas `ARRAY` con UUID, nivel RAID y dispositivos. Es importante actualizar este archivo y regenerar el initramfs (`update-initramfs -u` en Debian, `dracut -f` en RHEL) despues de crear o modificar arrays. La directiva `MAILADDR` configura el email para notificaciones de fallos.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="364.1" data-correct="c">

### Pregunta 39 (Subtema 364.1)

¿Que comando hace crecer un array RAID 5 de mdadm de 3 discos a 4 discos, redistribuyendo los datos y la paridad?

- [ ] a) `mdadm --add /dev/md0 /dev/sde1`
- [ ] b) `mdadm --assemble /dev/md0 --raid-devices=4`
- [ ] c) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`
- [ ] d) `mdadm --extend /dev/md0 --devices=4 /dev/sde1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`**

`mdadm --grow` permite redimensionar un array RAID existente. Primero se agrega el nuevo disco (si no es ya un spare) y luego se usa `--grow --raid-devices=4` para expandir el array a 4 discos. mdadm redistribuye los datos y la paridad entre los 4 discos en segundo plano (reshape). El progreso se monitoriza en `/proc/mdstat`. Despues del reshape, se debe expandir el sistema de archivos para utilizar el espacio adicional. Este proceso es posible en RAID 5 y RAID 6 y puede tardar horas dependiendo del tamano de los discos.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="364.1" data-correct="a">

### Pregunta 40 (Subtema 364.1)

¿Que nivel de RAID proporciona striping sin redundancia y requiere un minimo de 2 discos?

- [ ] a) RAID 0
- [ ] b) RAID 1
- [ ] c) RAID 5
- [ ] d) RAID linear

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) RAID 0**

RAID 0 distribuye los datos en bloques alternos entre dos o mas discos (striping), proporcionando el mayor rendimiento de lectura y escritura al operar todos los discos en paralelo. La capacidad total es la suma de todos los discos. Sin embargo, no tiene ninguna redundancia: si cualquier disco falla, se pierden todos los datos del array. RAID linear (especifico de mdadm) tambien carece de redundancia pero concatena los discos secuencialmente en lugar de usar striping. RAID 0 se crea con `mdadm --create /dev/md0 --level=0 --raid-devices=2 /dev/sd[b-c]1`.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="364.2" data-correct="d">

### Pregunta 41 (Subtema 364.2)

¿Que funcionalidad de LVM permite comprimir y deduplicar datos a nivel de volumen logico utilizando el modulo VDO?

- [ ] a) `lvcreate --type thin-pool`
- [ ] b) `lvcreate --type cache-pool`
- [ ] c) `lvcreate --type raid1`
- [ ] d) `lvcreate --type vdo --name vdo_lv --virtualsize 100G vg/vdo_pool`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `lvcreate --type vdo --name vdo_lv --virtualsize 100G vg/vdo_pool`**

LVM VDO (Virtual Data Optimizer) integra compresion y deduplicacion en linea a nivel de volumen logico. Primero se crea un VDO pool y luego volumenes VDO sobre el pool. VDO proporciona: deduplicacion (elimina bloques duplicados usando un indice universal UDS), compresion (comprime bloques unicos usando LZ4) y thin provisioning. El `--virtualsize` puede ser mayor que el tamano fisico del pool. Es especialmente efectivo para almacenamiento de maquinas virtuales y contenedores donde hay muchos datos repetidos. Se monitoriza con `vdostats --human-readable`.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="364.2" data-correct="b">

### Pregunta 42 (Subtema 364.2)

¿Que tipo de LVM cache utiliza un SSD como cache de lectura y escritura para un volumen logico almacenado en HDD?

- [ ] a) `lvconvert --type thin-cache`
- [ ] b) `lvconvert --type cache --cachevol cache_lv vg/lv_datos`
- [ ] c) `lvcreate --type ssd-cache`
- [ ] d) `lvconvert --readcache cache_lv vg/lv_datos`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `lvconvert --type cache --cachevol cache_lv vg/lv_datos`**

LVM cache permite acelerar volumenes logicos lentos (HDD) usando un volumen rapido (SSD) como cache. El proceso es: crear un LV en el SSD para cache (`lvcreate -n cache_lv -L 50G vg /dev/ssd`), luego convertir el LV de datos en un LV cacheado con `lvconvert --type cache --cachevol cache_lv vg/lv_datos`. Soporta modos writeback (mayor rendimiento) y writethrough (mayor seguridad). Tambien existe `lvconvert --type writecache` que usa el modulo dm-writecache del kernel, optimizado para escrituras secuenciales en SSDs. Se elimina el cache con `lvconvert --uncache vg/lv_datos`.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="364.2" data-correct="a">

### Pregunta 43 (Subtema 364.2)

¿Que comando de LVM permite extender un volumen logico y redimensionar el sistema de archivos simultaneamente?

- [ ] a) `lvextend -r -L +10G /dev/vg/lv`
- [ ] b) `lvextend -L +10G /dev/vg/lv && resize2fs /dev/vg/lv` (son siempre dos pasos separados obligatoriamente)
- [ ] c) `lvresize --filesystem -L +10G /dev/vg/lv` (solo funciona con ext4)
- [ ] d) `lvm extend --grow /dev/vg/lv +10G`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `lvextend -r -L +10G /dev/vg/lv`**

La opcion `-r` (o `--resizefs`) de `lvextend` automaticamente redimensiona el sistema de archivos despues de extender el volumen logico, combinando ambas operaciones en un solo comando. Funciona con ext2/ext3/ext4 (llama a `resize2fs`), XFS (llama a `xfs_growfs`) y otros sistemas de archivos soportados. Sin `-r`, es necesario ejecutar el comando de redimensionamiento del sistema de archivos manualmente. `lvreduce -r` tambien funciona para reducir (solo con sistemas de archivos que lo soporten como ext4). Esta es la forma recomendada por su simplicidad y menor riesgo de error.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="364.2" data-correct="c">

### Pregunta 44 (Subtema 364.2)

¿Que comando de LVM crea un thin pool de 100 GB con un metadata volume separado en el volume group `vg0`?

- [ ] a) `lvcreate --size 100G --name thinpool vg0`
- [ ] b) `lvcreate --type pool --name thinpool --size 100G vg0`
- [ ] c) `lvcreate --type thin-pool --name thinpool --size 100G vg0`
- [ ] d) `lvcreate --thin --pool thinpool --virtualsize 100G vg0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `lvcreate --type thin-pool --name thinpool --size 100G vg0`**

`lvcreate --type thin-pool` crea un thin pool que consiste en un data volume y un metadata volume. LVM calcula automaticamente el tamano del metadata volume (tipicamente 1% del pool o un minimo de 2 MB, hasta un maximo de 16 GB). Se puede especificar manualmente con `--poolmetadatasize`. Despues, se crean thin volumes dentro del pool con `lvcreate --type thin --name tv1 --virtualsize 50G --thinpool thinpool vg0`. Es critico monitorizar el uso del pool con `lvs -o +data_percent,metadata_percent` y configurar alertas con `dmeventd` para evitar el agotamiento del pool.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="364.2" data-correct="d">

### Pregunta 45 (Subtema 364.2)

¿Que ventaja principal ofrece un snapshot thin de LVM sobre un snapshot clasico?

- [ ] a) Los thin snapshots no requieren un volume group
- [ ] b) Los thin snapshots son mas rapidos porque no usan Copy-on-Write
- [ ] c) Los thin snapshots pueden tomarse de cualquier tipo de volumen, incluyendo volumenes fisicos
- [ ] d) Los thin snapshots no necesitan reservar espacio fijo previamente y comparten el espacio del thin pool bajo demanda

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) Los thin snapshots no necesitan reservar espacio fijo previamente y comparten el espacio del thin pool bajo demanda**

Los thin snapshots se crean con `lvcreate --snapshot --name snap1 vg0/thin_lv` (sin especificar `--size`). A diferencia de los snapshots clasicos que requieren una reserva de espacio fija que puede agotarse causando la invalidacion del snapshot, los thin snapshots comparten el espacio del thin pool dinamicamente. Ademas, los thin snapshots pueden ser el origen de otros snapshots (snapshots recursivos), pueden crearse de forma casi instantanea independientemente del tamano del volumen, y su numero no afecta significativamente al rendimiento del volumen original.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="364.3" data-correct="a">

### Pregunta 46 (Subtema 364.3)

¿Que modo de bonding de Linux proporciona balanceo de carga adaptativo de transmision sin requerir soporte especial del switch?

- [ ] a) mode 5 (balance-tlb)
- [ ] b) mode 4 (802.3ad)
- [ ] c) mode 0 (balance-rr)
- [ ] d) mode 2 (balance-xor)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) mode 5 (balance-tlb)**

El modo 5 (Transmit Load Balancing) distribuye el trafico de transmision entre las interfaces esclavas segun la carga de cada una, sin requerir ninguna configuracion especial del switch. La recepcion se realiza a traves de una sola interfaz (la primaria). Si la interfaz de recepcion falla, otra asume su direccion MAC. El modo 6 (ALB - Adaptive Load Balancing) extiende TLB con balanceo de recepcion manipulando las respuestas ARP. El modo 0 (round-robin) y el modo 2 (XOR) requieren que el switch soporte port trunking o EtherChannel para funcionar correctamente.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="364.3" data-correct="c">

### Pregunta 47 (Subtema 364.3)

¿Que protocolo de redundancia de gateway permite que multiples routers compartan una IP virtual, proporcionando failover transparente para los clientes?

- [ ] a) OSPF (Open Shortest Path First)
- [ ] b) BGP (Border Gateway Protocol)
- [ ] c) VRRP (Virtual Router Redundancy Protocol)
- [ ] d) STP (Spanning Tree Protocol)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) VRRP (Virtual Router Redundancy Protocol)**

VRRP (RFC 5798) permite que un grupo de routers comparta una direccion IP virtual que actua como gateway predeterminado para los clientes. Un router es elegido como Master (basado en la prioridad) y responde al trafico dirigido a la VIP. Si el Master falla, un router Backup con la siguiente prioridad mas alta asume el rol. Los clientes no necesitan reconfigurarse. En Linux, `keepalived` es la implementacion mas comun de VRRP. Los anuncios VRRP se envian por multicast a la direccion 224.0.0.18. HSRP (Hot Standby Router Protocol) es la alternativa propietaria de Cisco.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="364.3" data-correct="b">

### Pregunta 48 (Subtema 364.3)

¿Que herramienta de NetworkManager permite crear y configurar un interfaz de bonding desde la linea de comandos?

- [ ] a) `nm-bond`
- [ ] b) `nmcli`
- [ ] c) `ifbond`
- [ ] d) `netplan bond`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `nmcli`**

`nmcli` (NetworkManager Command Line Interface) permite crear y configurar interfaces de bonding. El proceso tipico es: `nmcli connection add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup,miimon=100"` para crear el bond, seguido de `nmcli connection add type ethernet con-name bond0-slave1 ifname eth0 master bond0` y `nmcli connection add type ethernet con-name bond0-slave2 ifname eth1 master bond0` para agregar interfaces esclavas. Se asigna IP con `nmcli connection modify bond0 ipv4.addresses 192.168.1.10/24 ipv4.method manual`. `nmcli connection up bond0` activa la configuracion.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="364.3" data-correct="d">

### Pregunta 49 (Subtema 364.3)

¿Que mecanismo de hardware permite gestionar remotamente un servidor (encender, apagar, reiniciar, acceso a consola) independientemente del estado del sistema operativo?

- [ ] a) SSH (Secure Shell)
- [ ] b) Serial console
- [ ] c) Wake-on-LAN
- [ ] d) IPMI/BMC (Intelligent Platform Management Interface / Baseboard Management Controller)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) IPMI/BMC (Intelligent Platform Management Interface / Baseboard Management Controller)**

IPMI es un estandar de gestion remota de hardware que opera a traves del BMC, un procesador dedicado en la placa base con su propia conexion de red, independiente del sistema operativo. Permite: encender/apagar/reiniciar el servidor, acceso a consola remota (KVM sobre IP), monitorizar sensores (temperatura, voltaje, ventiladores), gestionar logs de eventos y ejecutar fencing en clusters HA. Las implementaciones de fabricantes incluyen iLO (HP), iDRAC (Dell) y IMM (Lenovo). En Linux, se gestiona con `ipmitool` (local o remoto): `ipmitool -H ip -U usuario -P clave power reset`.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="364.3" data-correct="a">

### Pregunta 50 (Subtema 364.3)

¿Que dispositivo de hardware reinicia automaticamente un servidor Linux si el sistema operativo deja de responder?

- [ ] a) Watchdog timer
- [ ] b) UPS (Uninterruptible Power Supply)
- [ ] c) PDU (Power Distribution Unit)
- [ ] d) KVM switch

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) Watchdog timer**

Un watchdog timer es un dispositivo de hardware (o software emulado) que reinicia automaticamente el sistema si no recibe un "heartbeat" periodico del sistema operativo. El demonio `watchdog` (o `systemd` con la opcion `RuntimeWatchdogSec`) debe alimentar periodicamente el dispositivo `/dev/watchdog`. Si el kernel se cuelga o el demonio no puede escribir en el watchdog dentro del timeout configurado, el hardware reinicia el sistema. Es fundamental en clusters HA con SBD, donde el watchdog garantiza que un nodo problematico se reinicie si pierde contacto con el cluster. Los dispositivos comunes incluyen iTCO (Intel) y softdog (emulacion por software).

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="361.1" data-correct="c">

### Pregunta 51 (Subtema 361.1)

Escribe el comando de `pcs` para autenticar todos los nodos del cluster (`nodo1`, `nodo2`, `nodo3`) con el usuario `hacluster` antes de crear el cluster. ¿Cual es la sintaxis correcta?

- [ ] a) `pcs cluster auth nodo1 nodo2 nodo3 --user hacluster`
- [ ] b) `pcs auth nodo1 nodo2 nodo3 --username hacluster`
- [ ] c) `pcs host auth nodo1 nodo2 nodo3 -u hacluster`
- [ ] d) `pcs authenticate --nodes nodo1,nodo2,nodo3 --user hacluster`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `pcs host auth nodo1 nodo2 nodo3 -u hacluster`**

En versiones recientes de pcs (0.10+), el comando para autenticar nodos es `pcs host auth` con la opcion `-u` para el usuario. La autenticacion establece tokens entre los nodos y el demonio `pcsd` que se ejecuta en cada nodo (puerto 2224). Es un requisito previo a la creacion del cluster con `pcs cluster setup`. En versiones anteriores de pcs, el comando era `pcs cluster auth`. El usuario `hacluster` es el usuario de sistema predeterminado para la administracion del cluster y debe tener una contrasena configurada en todos los nodos.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="361.2" data-correct="b">

### Pregunta 52 (Subtema 361.2)

¿Cual es el comando correcto de `ipvsadm` para agregar un servidor real `192.168.1.20:80` al servicio virtual `10.0.0.1:80` en modo NAT con peso 3?

- [ ] a) `ipvsadm -a -t 10.0.0.1:80 -r 192.168.1.20:80 -g -w 3`
- [ ] b) `ipvsadm -a -t 10.0.0.1:80 -r 192.168.1.20:80 -m -w 3`
- [ ] c) `ipvsadm -A -t 10.0.0.1:80 -r 192.168.1.20:80 -m -w 3`
- [ ] d) `ipvsadm -a -t 10.0.0.1:80 -r 192.168.1.20:80 -i -w 3`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ipvsadm -a -t 10.0.0.1:80 -r 192.168.1.20:80 -m -w 3`**

`ipvsadm -a` agrega un servidor real a un servicio virtual existente (en minusculas; `-A` en mayusculas crea el servicio virtual). `-t` indica protocolo TCP. `-r` especifica la direccion del servidor real. `-m` indica modo NAT (masquerading); `-g` seria Direct Routing e `-i` seria IP Tunneling. `-w 3` establece el peso del servidor para algoritmos ponderados. El servicio virtual debe haberse creado previamente con `ipvsadm -A -t 10.0.0.1:80 -s wrr` (donde `-s wrr` especifica el algoritmo Weighted Round Robin).

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="361.3" data-correct="a">

### Pregunta 53 (Subtema 361.3)

¿Cual es el comando correcto de `pcs` para mover manualmente un recurso llamado `WebServer` al nodo `nodo2`?

- [ ] a) `pcs resource move WebServer nodo2`
- [ ] b) `pcs resource migrate WebServer --to nodo2`
- [ ] c) `pcs cluster move-resource WebServer nodo2`
- [ ] d) `pcs resource relocate WebServer nodo2`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `pcs resource move WebServer nodo2`**

`pcs resource move WebServer nodo2` crea una restriccion de ubicacion temporal que obliga al recurso a migrar al nodo especificado. Es importante saber que esta restriccion persiste hasta que se elimine manualmente con `pcs resource clear WebServer`, lo que podria impedir que el recurso vuelva al nodo original tras un failback. En versiones recientes, `pcs resource move WebServer nodo2 --autodelete` elimina la restriccion automaticamente despues de la migracion. `pcs resource relocate run` es otra alternativa que mueve recursos a sus nodos preferidos segun las restricciones de ubicacion.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="362.1" data-correct="d">

### Pregunta 54 (Subtema 362.1)

¿Cual es el comando para crear los metadatos de un recurso DRBD llamado `r0` antes de la primera sincronizacion?

- [ ] a) `drbdadm init-md r0`
- [ ] b) `drbdsetup create-metadata r0`
- [ ] c) `drbd-meta create r0`
- [ ] d) `drbdadm create-md r0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `drbdadm create-md r0`**

`drbdadm create-md r0` inicializa los metadatos DRBD en el dispositivo de bloque subyacente del recurso `r0`. Este comando debe ejecutarse en ambos nodos antes de iniciar el recurso por primera vez. Los metadatos incluyen: identificadores del recurso, generation identifiers (GI) para detectar split-brain, activity log y bitmap para resincronizacion parcial. Los metadatos pueden almacenarse internamente (al final del dispositivo, perdiendo algo de capacidad) o externamente (en un dispositivo separado), configurado con `meta-disk` en el archivo de recurso. Despues de crear los metadatos, se inicia el recurso con `drbdadm up r0`.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="362.2" data-correct="c">

### Pregunta 55 (Subtema 362.2)

¿Que comando descubre y establece sesion con un target iSCSI especifico despues de haber realizado el descubrimiento?

- [ ] a) `iscsiadm -m node -T iqn.2024-01.com.ejemplo:disco1 --connect`
- [ ] b) `iscsiadm -m session -T iqn.2024-01.com.ejemplo:disco1 --start`
- [ ] c) `iscsiadm -m node -T iqn.2024-01.com.ejemplo:disco1 -p 192.168.1.100 --login`
- [ ] d) `iscsiadm -m target -T iqn.2024-01.com.ejemplo:disco1 --attach`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `iscsiadm -m node -T iqn.2024-01.com.ejemplo:disco1 -p 192.168.1.100 --login`**

`iscsiadm -m node` opera en modo nodo (target descubierto). `-T` especifica el IQN del target y `-p` la direccion del portal. `--login` establece la sesion iSCSI, creando el dispositivo de bloque local (`/dev/sdX`). Para configurar login automatico en el arranque: `iscsiadm -m node -T iqn... -p IP --op update -n node.startup -v automatic`. Para cerrar la sesion: `iscsiadm -m node -T iqn... --logout`. `iscsiadm -m session` muestra las sesiones activas y `iscsiadm -m session -P 3` muestra detalles incluyendo los dispositivos SCSI asociados.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="363.1" data-correct="b">

### Pregunta 56 (Subtema 363.1)

¿Cual es el comando correcto para detener un volumen GlusterFS llamado `vol1`?

- [ ] a) `gluster volume shutdown vol1`
- [ ] b) `gluster volume stop vol1`
- [ ] c) `gluster volume disable vol1`
- [ ] d) `gluster volume offline vol1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `gluster volume stop vol1`**

`gluster volume stop vol1` detiene el volumen GlusterFS, finalizando los procesos de los bricks y haciendo el volumen inaccesible para los clientes. Los clientes que tengan el volumen montado perderan el acceso. El comando solicita confirmacion antes de ejecutarse (se puede omitir con `force`). El ciclo de vida completo de un volumen es: `create` (crear), `start` (iniciar), `stop` (detener) y `delete` (eliminar). Un volumen detenido se puede reiniciar con `gluster volume start vol1`. `gluster volume set vol1 opcion valor` modifica opciones del volumen sin necesidad de detenerlo.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="363.2" data-correct="a">

### Pregunta 57 (Subtema 363.2)

¿Cual es el comando para mapear una imagen RBD de Ceph llamada `disco1` del pool `rbd` como dispositivo de bloque local?

- [ ] a) `rbd map disco1 --pool rbd`
- [ ] b) `ceph rbd attach disco1 --pool rbd`
- [ ] c) `rbd connect disco1 --pool rbd --local`
- [ ] d) `ceph map rbd/disco1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `rbd map disco1 --pool rbd`**

`rbd map` mapea una imagen RBD como dispositivo de bloque local, creando un dispositivo `/dev/rbdN` (por ejemplo `/dev/rbd0`). Despues del mapeo, se puede formatear (`mkfs.ext4 /dev/rbd0`) y montar como cualquier disco. Para ver los mapeos activos: `rbd showmapped`. Para desmapear: `rbd unmap /dev/rbd0`. Las features de la imagen pueden requerir ajustes para el mapeo del kernel: `rbd feature disable disco1 exclusive-lock object-map fast-diff deep-flatten --pool rbd` si aparecen errores de features no soportadas. Para montaje automatico en el arranque se usa `rbdmap` y `/etc/ceph/rbdmap`.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="364.1" data-correct="c">

### Pregunta 58 (Subtema 364.1)

¿Cual es el comando de mdadm para ensamblar un array RAID existente a partir de los superblocks de los discos?

- [ ] a) `mdadm --create /dev/md0 --scan`
- [ ] b) `mdadm --build /dev/md0 --scan`
- [ ] c) `mdadm --assemble --scan`
- [ ] d) `mdadm --start /dev/md0 --auto-detect`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `mdadm --assemble --scan`**

`mdadm --assemble --scan` busca todos los dispositivos del sistema que contienen superblocks RAID y ensambla automaticamente los arrays encontrados, utilizando la informacion de `/etc/mdadm/mdadm.conf` para mapear los arrays a sus nombres de dispositivo. Sin `--scan`, se deben especificar los dispositivos manualmente: `mdadm --assemble /dev/md0 /dev/sdb1 /dev/sdc1 /dev/sdd1`. Este comando es tipicamente ejecutado durante el arranque del sistema (via initramfs o scripts de inicio). `--force` permite ensamblar un array degradado que de otro modo no arrancaria.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="364.2" data-correct="d">

### Pregunta 59 (Subtema 364.2)

¿Cual es el comando para crear un volumen logico con mirroring tipo RAID 1 de 20 GB directamente al crearlo?

- [ ] a) `lvcreate --type raid1 --name lv_mirror -L 20G vg0`
- [ ] b) `lvcreate --mirrors 1 --name lv_mirror --size 20G vg0`
- [ ] c) `lvcreate --type mirror -m 1 --name lv_mirror -L 20G vg0`
- [ ] d) `lvcreate --type raid1 -m 1 --name lv_mirror -L 20G vg0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**d) `lvcreate --type raid1 -m 1 --name lv_mirror -L 20G vg0`**

`lvcreate --type raid1 -m 1` crea un volumen logico con mirroring RAID 1. `--type raid1` especifica el tipo de segmento (usando dm-raid), `-m 1` indica 1 mirror adicional (2 copias totales), `--name` el nombre del LV y `-L 20G` el tamano. La opcion `-m 1` es obligatoria para especificar el numero de espejos. Sin `--type`, LVM puede usar el tipo `mirror` clasico (dm-mirror) o `raid1` dependiendo de la configuracion por defecto. `raid1` es preferible porque soporta snapshots, permite sincronizacion parcial y es mas robusto. Se verifica con `lvs -o +seg_type,devices`.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="364.3" data-correct="b">

### Pregunta 60 (Subtema 364.3)

¿Cual es el comando de `ipmitool` para reiniciar un servidor remoto a traves de su interfaz IPMI/BMC?

- [ ] a) `ipmitool -H 192.168.1.50 -U admin -P password restart`
- [ ] b) `ipmitool -H 192.168.1.50 -U admin -P password power reset`
- [ ] c) `ipmitool -H 192.168.1.50 -U admin -P password chassis reboot`
- [ ] d) `ipmitool -H 192.168.1.50 -U admin -P password system reset`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ipmitool -H 192.168.1.50 -U admin -P password power reset`**

`ipmitool` es la herramienta de linea de comandos para interactuar con interfaces IPMI. `-H` especifica la direccion IP del BMC, `-U` y `-P` las credenciales. `power reset` envia un reset de hardware al servidor. Otros comandos de gestion de energia incluyen: `power on` (encender), `power off` (apagar por hardware), `power cycle` (apagar y encender), `power soft` (apagado graceful via ACPI) y `power status` (consultar estado). Este comando es fundamental para fencing en clusters HA, donde Pacemaker usa agentes STONITH basados en IPMI (`fence_ipmilan`) para aislar nodos problematicos.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
