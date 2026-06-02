---
title: "364.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "364.1"
---

# Flashcards: 364.1 - Ha De Hardware Y Recursos

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que tipo de memoria puede detectar y corregir automaticamente errores de un solo bit?

</div>
<div class="flashcard-back">

**R:** b) ECC. La memoria ECC (Error-Correcting Code) detecta y corrige automaticamente errores de un bit, y detecta errores de dos bits. Es esencial en servidores para garantizar la integridad de los datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que dispositivo del sistema representa el watchdog timer en Linux?

</div>
<div class="flashcard-back">

**R:** b) `/dev/watchdog`. El watchdog timer se accede a traves de `/dev/watchdog`. Las aplicaciones deben escribir periodicamente en este dispositivo para mantener el sistema vivo. Si dejan de escribir, el watchdog reinicia el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que modulo del kernel proporciona un watchdog por software?

</div>
<div class="flashcard-back">

**R:** c) `softdog`. `softdog` es el modulo de watchdog por software del kernel Linux. No requiere hardware especifico, a diferencia de `iTCO_wdt` (Intel), `hpwdt` (HP) o `ipmi_watchdog` (IPMI).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-004">
<div class="flashcard-front">

**P:** ¿En que archivo de NUT se define el modo de operacion (standalone, netserver, netclient)?

</div>
<div class="flashcard-back">

**R:** b) `/etc/nut/nut.conf`. El archivo `/etc/nut/nut.conf` define el modo de operacion con la directiva `MODE=`. Los valores posibles son: `standalone`, `netserver`, `netclient` y `none`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que modo de NUT permite compartir la informacion del UPS con otros servidores por red?

</div>
<div class="flashcard-back">

**R:** b) `netserver`. El modo `netserver` configura NUT para que el UPS conectado localmente sea accesible por otros servidores (clientes) a traves de la red. Los clientes usan el modo `netclient`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que comando de ipmitool reinicia un servidor remoto?

</div>
<div class="flashcard-back">

**R:** b) `ipmitool -I lanplus -H IP -U user -P pass power cycle`. `power cycle` apaga y enciende el servidor remotamente via IPMI. Las opciones de `ipmitool power` son: `status`, `on`, `off`, `cycle` y `reset`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-007">
<div class="flashcard-front">

**P:** ¿En que archivo de NUT se configuran el driver y puerto del UPS?

</div>
<div class="flashcard-back">

**R:** b) `/etc/nut/ups.conf`. El archivo `/etc/nut/ups.conf` define cada UPS con su nombre, driver (ej: `usbhid-ups`), puerto y descripcion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando muestra los sensores de hardware (temperatura, voltaje, ventiladores) via IPMI?

</div>
<div class="flashcard-back">

**R:** c) `ipmitool sensor list`. `ipmitool sensor list` muestra todos los sensores del servidor incluyendo temperatura, voltaje, velocidad de ventiladores y su estado. `sdr list` muestra informacion similar desde el Sensor Data Repository.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que parametro de systemd configura el watchdog del sistema?

</div>
<div class="flashcard-back">

**R:** b) `RuntimeWatchdogSec=`. `RuntimeWatchdogSec=` en `/etc/systemd/system.conf` configura el timeout del watchdog de systemd. Si systemd no responde dentro de este tiempo, el watchdog reinicia el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que funcion tiene el BMC (Baseboard Management Controller) en un servidor?

</div>
<div class="flashcard-back">

**R:** b) Permitir gestion remota del hardware independiente del SO. El BMC es un controlador independiente que permite gestionar el servidor remotamente (encender, apagar, consola, sensores) incluso cuando el sistema operativo no esta funcionando o el servidor esta apagado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que directiva en `/etc/nut/upsmon.conf` especifica el comando que se ejecutara para apagar el sistema cuando la bateria del UPS esta baja?

</div>
<div class="flashcard-back">

**R:** b) `SHUTDOWNCMD`. La directiva `SHUTDOWNCMD` en `upsmon.conf` define el comando de apagado que se ejecuta cuando el UPS reporta bateria baja. El valor tipico es `"/sbin/shutdown -h +0"` para un apagado inmediato.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que significan las siglas CE y UE en el contexto de la memoria ECC?

</div>
<div class="flashcard-back">

**R:** b) Corrected Error y Uncorrected Error. CE (Corrected Error) son errores de un bit que la memoria ECC corrige automaticamente. UE (Uncorrected Error) son errores de multiples bits que no pueden corregirse y son criticos. Se monitorizan en `/sys/devices/system/edac/mc/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que configuracion de fuentes de alimentacion redundantes se conoce como N+1?

</div>
<div class="flashcard-back">

**R:** b) N fuentes activas mas una adicional de reserva compartiendo la carga. La configuracion N+1 significa que hay N fuentes necesarias para alimentar el servidor mas una adicional de reserva. Todas las fuentes comparten la carga. Si una falla, las restantes absorben la carga sin interrupcion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que funcion cumple el caracter "V" cuando se escribe en `/dev/watchdog`?

</div>
<div class="flashcard-back">

**R:** b) Realiza un "magic close" que desactiva el watchdog al cerrar el dispositivo. Escribir "V" (magic close character) en `/dev/watchdog` antes de cerrar el descriptor de archivo permite desactivar el watchdog limpiamente. Sin este caracter magico, cerrar `/dev/watchdog` provocaria que el watchdog reinicie el sistema al expirar el timeout.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando de ipmitool activa una sesion de consola serial remota (Serial over LAN)?

</div>
<div class="flashcard-back">

**R:** b) `ipmitool -I lanplus -H IP -U user -P pass sol activate`. SOL (Serial over LAN) permite acceder a la consola serial del servidor remotamente a traves de la red mediante IPMI. Es util para diagnosticar problemas de arranque o cuando el SO no responde.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-016">
<div class="flashcard-front">

**P:** ¿En que archivo de NUT se configuran los usuarios y sus permisos para acceder al daemon upsd?

</div>
<div class="flashcard-back">

**R:** c) `/etc/nut/upsd.users`. El archivo `/etc/nut/upsd.users` define los usuarios que pueden conectarse al daemon upsd, sus contraseñas, acciones permitidas (SET, FSD) y su rol de monitorizacion (master o slave).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que parametro de upsmon.conf define el tiempo en segundos antes de considerar que un UPS esta muerto?

</div>
<div class="flashcard-back">

**R:** c) `DEADTIME`. `DEADTIME` especifica el numero de segundos sin respuesta del UPS antes de que upsmon lo considere como muerto (inaccesible). El valor predeterminado es 15 segundos. Si se alcanza, se disparan las acciones de emergencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que modulo de watchdog esta diseñado para chipsets Intel?

</div>
<div class="flashcard-back">

**R:** b) `iTCO_wdt`. `iTCO_wdt` (Intel TCO Watchdog Timer) es el modulo de watchdog de hardware para chipsets Intel. TCO (Total Cost of Ownership) es un subsistema de los chipsets Intel que incluye un timer de watchdog. Es mas fiable que el watchdog por software (`softdog`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando de ipmitool muestra el registro de eventos del sistema (System Event Log)?

</div>
<div class="flashcard-back">

**R:** c) `ipmitool sel list`. `ipmitool sel list` muestra el System Event Log (SEL) que contiene eventos de hardware como errores de temperatura, fallos de discos, errores de memoria, etc. Para limpiar el log se usa `ipmitool sel clear`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que directiva de `ShutdownWatchdogSec` en `/etc/systemd/system.conf` controla?

</div>
<div class="flashcard-back">

**R:** b) El timeout del watchdog durante el proceso de apagado del sistema. `ShutdownWatchdogSec` define cuanto tiempo se permite para el proceso de apagado antes de que el watchdog fuerce un reinicio. Esto evita que un apagado colgado deje el sistema inaccesible indefinidamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado de los sensores de hardware del servidor usando ipmitool localmente. <input type="text" class="fill-blank" data-answer="ipmitool sensor list" data-alt="ipmitool sdr list" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipmitool sensor list. `ipmitool sensor list` muestra todos los sensores del servidor incluyendo temperaturas, voltajes y velocidades de ventiladores. Cada sensor muestra su valor actual, umbrales y estado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para consultar el estado de un UPS llamado "mi_ups" conectado localmente usando NUT. <input type="text" class="fill-blank" data-answer="upsc mi_ups@localhost" data-alt="upsc mi_ups" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** upsc mi_ups@localhost. `upsc` (UPS Client) consulta las variables del UPS incluyendo estado de la bateria, carga, voltaje de entrada/salida y tiempo restante estimado. Se especifica el nombre del UPS y el host donde corre upsd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para forzar un apagado de emergencia (Forced ShutDown) desde upsmon de NUT. <input type="text" class="fill-blank" data-answer="upsmon -c fsd" data-alt="upsmon -c fsd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** upsmon -c fsd. `upsmon -c fsd` envia la señal de Forced ShutDown al daemon upsmon, que inicia el proceso de apagado ordenado del sistema. Los servidores slave se apagan primero, seguidos del master que finalmente ordena al UPS cortar la alimentacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ver los errores de memoria ECC corregidos del controlador de memoria mc0 en Linux. <input type="text" class="fill-blank" data-answer="cat /sys/devices/system/edac/mc/mc0/ce_count" data-alt="cat /sys/devices/system/edac/mc/mc0/ce_count" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cat /sys/devices/system/edac/mc/mc0/ce_count. El archivo `ce_count` en sysfs muestra el numero de errores corregidos (Corrected Errors) del controlador de memoria mc0. `ue_count` muestra los errores no corregidos. EDAC (Error Detection and Correction) es el subsistema del kernel para monitorizar errores de memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para configurar la direccion IP 192.168.1.200 en el canal LAN 1 del BMC usando ipmitool. <input type="text" class="fill-blank" data-answer="ipmitool lan set 1 ipaddr 192.168.1.200" data-alt="ipmitool lan set 1 ipaddr 192.168.1.200" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipmitool lan set 1 ipaddr 192.168.1.200. `ipmitool lan set` permite configurar los parametros de red del BMC. El canal 1 es el canal LAN por defecto. Tambien se puede configurar la mascara de red (`netmask`) y la puerta de enlace (`defgw ipaddr`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: ECC es esencial en servidores. Los errores corregidos (CE) son normales en peque...

</div>
<div class="flashcard-back">

**R:** ECC es esencial en servidores. Los errores corregidos (CE) son normales en pequeñas cantidades. Los errores no corregidos (UE) son criticos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El watchdog es fundamental para SBD en clusters Pacemaker. Si el nodo no puede h...

</div>
<div class="flashcard-back">

**R:** El watchdog es fundamental para SBD en clusters Pacemaker. Si el nodo no puede hacer fencing de si mismo, el watchdog lo reinicia forzosamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conoce los archivos `nut.conf`, `ups.conf`, `upsmon.conf` y `upsd.users`. El mod...

</div>
<div class="flashcard-back">

**R:** Conoce los archivos `nut.conf`, `ups.conf`, `upsmon.conf` y `upsd.users`. El modo `netserver` permite compartir el UPS con otros servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `standalone`?

</div>
<div class="flashcard-back">

**R:** UPS conectado localmente, sin compartir

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `netserver`?

</div>
<div class="flashcard-back">

**R:** UPS local, comparte con otros via red

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Watchdog Timers?

</div>
<div class="flashcard-back">

**R:** Un **watchdog timer** es un temporizador de hardware o software que reinicia el sistema si detecta que no responde.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="364.1">
</div>

<div class="flashcard" data-id="364.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son IPMI/BMC?

</div>
<div class="flashcard-back">

**R:** **IPMI** (Intelligent Platform Management Interface) y **BMC** (Baseboard Management Controller) permiten la gestion remota del hardware del servidor, incluso cuando esta apagado.

</div>
</div>

---

