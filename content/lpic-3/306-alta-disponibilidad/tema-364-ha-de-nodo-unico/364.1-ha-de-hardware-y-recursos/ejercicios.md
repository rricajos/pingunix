---
title: "364.1 - Ejercicios: HA de Hardware y Recursos"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.1"
peso: 2
tags:
  - lpic-3
  - tema-364
  - ejercicios
  - watchdog
  - ups
  - ipmi
---

# 364.1 - Ejercicios: HA de Hardware y Recursos

### Pregunta 1
¿Que tipo de memoria puede detectar y corregir automaticamente errores de un solo bit?

a) DDR4
b) ECC
c) Registered
d) Buffered

<details><summary>Respuesta</summary>

**b) ECC**

La memoria ECC (Error-Correcting Code) detecta y corrige automaticamente errores de un bit, y detecta errores de dos bits. Es esencial en servidores para garantizar la integridad de los datos.
</details>

### Pregunta 2
¿Que dispositivo del sistema representa el watchdog timer en Linux?

a) `/dev/timer`
b) `/dev/watchdog`
c) `/dev/wdt`
d) `/proc/watchdog`

<details><summary>Respuesta</summary>

**b) `/dev/watchdog`**

El watchdog timer se accede a traves de `/dev/watchdog`. Las aplicaciones deben escribir periodicamente en este dispositivo para mantener el sistema vivo. Si dejan de escribir, el watchdog reinicia el sistema.
</details>

### Pregunta 3
¿Que modulo del kernel proporciona un watchdog por software?

a) `iTCO_wdt`
b) `hpwdt`
c) `softdog`
d) `ipmi_watchdog`

<details><summary>Respuesta</summary>

**c) `softdog`**

`softdog` es el modulo de watchdog por software del kernel Linux. No requiere hardware especifico, a diferencia de `iTCO_wdt` (Intel), `hpwdt` (HP) o `ipmi_watchdog` (IPMI).
</details>

### Pregunta 4
¿En que archivo de NUT se define el modo de operacion (standalone, netserver, netclient)?

a) `/etc/nut/ups.conf`
b) `/etc/nut/nut.conf`
c) `/etc/nut/upsmon.conf`
d) `/etc/nut/upsd.conf`

<details><summary>Respuesta</summary>

**b) `/etc/nut/nut.conf`**

El archivo `/etc/nut/nut.conf` define el modo de operacion con la directiva `MODE=`. Los valores posibles son: `standalone`, `netserver`, `netclient` y `none`.
</details>

### Pregunta 5
¿Que modo de NUT permite compartir la informacion del UPS con otros servidores por red?

a) `standalone`
b) `netserver`
c) `netclient`
d) `shared`

<details><summary>Respuesta</summary>

**b) `netserver`**

El modo `netserver` configura NUT para que el UPS conectado localmente sea accesible por otros servidores (clientes) a traves de la red. Los clientes usan el modo `netclient`.
</details>

### Pregunta 6
¿Que comando de ipmitool reinicia un servidor remoto?

a) `ipmitool -I lanplus -H IP -U user -P pass power restart`
b) `ipmitool -I lanplus -H IP -U user -P pass power cycle`
c) `ipmitool -I lanplus -H IP -U user -P pass reboot`
d) `ipmitool -I lanplus -H IP -U user -P pass chassis restart`

<details><summary>Respuesta</summary>

**b) `ipmitool -I lanplus -H IP -U user -P pass power cycle`**

`power cycle` apaga y enciende el servidor remotamente via IPMI. Las opciones de `ipmitool power` son: `status`, `on`, `off`, `cycle` y `reset`.
</details>

### Pregunta 7
¿En que archivo de NUT se configuran el driver y puerto del UPS?

a) `/etc/nut/nut.conf`
b) `/etc/nut/ups.conf`
c) `/etc/nut/upsd.conf`
d) `/etc/nut/upsmon.conf`

<details><summary>Respuesta</summary>

**b) `/etc/nut/ups.conf`**

El archivo `/etc/nut/ups.conf` define cada UPS con su nombre, driver (ej: `usbhid-ups`), puerto y descripcion.
</details>

### Pregunta 8
¿Que comando muestra los sensores de hardware (temperatura, voltaje, ventiladores) via IPMI?

a) `ipmitool mc info`
b) `ipmitool sel list`
c) `ipmitool sensor list`
d) `ipmitool lan print`

<details><summary>Respuesta</summary>

**c) `ipmitool sensor list`**

`ipmitool sensor list` muestra todos los sensores del servidor incluyendo temperatura, voltaje, velocidad de ventiladores y su estado. `sdr list` muestra informacion similar desde el Sensor Data Repository.
</details>

### Pregunta 9
¿Que parametro de systemd configura el watchdog del sistema?

a) `WatchdogSec=`
b) `RuntimeWatchdogSec=`
c) `SystemWatchdog=`
d) `WatchdogTimeout=`

<details><summary>Respuesta</summary>

**b) `RuntimeWatchdogSec=`**

`RuntimeWatchdogSec=` en `/etc/systemd/system.conf` configura el timeout del watchdog de systemd. Si systemd no responde dentro de este tiempo, el watchdog reinicia el sistema.
</details>

### Pregunta 10
¿Que funcion tiene el BMC (Baseboard Management Controller) en un servidor?

a) Gestionar la BIOS/UEFI
b) Permitir gestion remota del hardware independiente del SO
c) Controlar la velocidad del procesador
d) Gestionar la memoria cache

<details><summary>Respuesta</summary>

**b) Permitir gestion remota del hardware independiente del SO**

El BMC es un controlador independiente que permite gestionar el servidor remotamente (encender, apagar, consola, sensores) incluso cuando el sistema operativo no esta funcionando o el servidor esta apagado.
</details>

### Pregunta 11

¿Que directiva en `/etc/nut/upsmon.conf` especifica el comando que se ejecutara para apagar el sistema cuando la bateria del UPS esta baja?

a) `POWERDOWNCMD`
b) `SHUTDOWNCMD`
c) `FINALCMD`
d) `HALTCMD`

<details><summary>Respuesta</summary>

**b) `SHUTDOWNCMD`**

La directiva `SHUTDOWNCMD` en `upsmon.conf` define el comando de apagado que se ejecuta cuando el UPS reporta bateria baja. El valor tipico es `"/sbin/shutdown -h +0"` para un apagado inmediato.
</details>

### Pregunta 12

¿Que significan las siglas CE y UE en el contexto de la memoria ECC?

a) Cache Error y Uncorrectable Error
b) Corrected Error y Uncorrected Error
c) Critical Error y Unknown Error
d) Common Error y Unusual Error

<details><summary>Respuesta</summary>

**b) Corrected Error y Uncorrected Error**

CE (Corrected Error) son errores de un bit que la memoria ECC corrige automaticamente. UE (Uncorrected Error) son errores de multiples bits que no pueden corregirse y son criticos. Se monitorizan en `/sys/devices/system/edac/mc/`.
</details>

### Pregunta 13

¿Que configuracion de fuentes de alimentacion redundantes se conoce como N+1?

a) N fuentes activas mas una en modo standby
b) N fuentes activas mas una adicional de reserva compartiendo la carga
c) Una fuente primaria con N fuentes secundarias
d) N fuentes redundantes sin carga compartida

<details><summary>Respuesta</summary>

**b) N fuentes activas mas una adicional de reserva compartiendo la carga**

La configuracion N+1 significa que hay N fuentes necesarias para alimentar el servidor mas una adicional de reserva. Todas las fuentes comparten la carga. Si una falla, las restantes absorben la carga sin interrupcion.
</details>

### Pregunta 14

¿Que funcion cumple el caracter "V" cuando se escribe en `/dev/watchdog`?

a) Reinicia el temporizador del watchdog
b) Realiza un "magic close" que desactiva el watchdog al cerrar el dispositivo
c) Verifica el estado del watchdog
d) Configura el watchdog en modo verbose

<details><summary>Respuesta</summary>

**b) Realiza un "magic close" que desactiva el watchdog al cerrar el dispositivo**

Escribir "V" (magic close character) en `/dev/watchdog` antes de cerrar el descriptor de archivo permite desactivar el watchdog limpiamente. Sin este caracter magico, cerrar `/dev/watchdog` provocaria que el watchdog reinicie el sistema al expirar el timeout.
</details>

### Pregunta 15

¿Que comando de ipmitool activa una sesion de consola serial remota (Serial over LAN)?

a) `ipmitool -I lanplus -H IP -U user -P pass console activate`
b) `ipmitool -I lanplus -H IP -U user -P pass sol activate`
c) `ipmitool -I lanplus -H IP -U user -P pass serial start`
d) `ipmitool -I lanplus -H IP -U user -P pass kvm connect`

<details><summary>Respuesta</summary>

**b) `ipmitool -I lanplus -H IP -U user -P pass sol activate`**

SOL (Serial over LAN) permite acceder a la consola serial del servidor remotamente a traves de la red mediante IPMI. Es util para diagnosticar problemas de arranque o cuando el SO no responde.
</details>

### Pregunta 16

¿En que archivo de NUT se configuran los usuarios y sus permisos para acceder al daemon upsd?

a) `/etc/nut/nut.conf`
b) `/etc/nut/ups.conf`
c) `/etc/nut/upsd.users`
d) `/etc/nut/upsmon.conf`

<details><summary>Respuesta</summary>

**c) `/etc/nut/upsd.users`**

El archivo `/etc/nut/upsd.users` define los usuarios que pueden conectarse al daemon upsd, sus contraseñas, acciones permitidas (SET, FSD) y su rol de monitorizacion (master o slave).
</details>

### Pregunta 17

¿Que parametro de upsmon.conf define el tiempo en segundos antes de considerar que un UPS esta muerto?

a) `POLLFREQ`
b) `HOSTSYNC`
c) `DEADTIME`
d) `FINALDELAY`

<details><summary>Respuesta</summary>

**c) `DEADTIME`**

`DEADTIME` especifica el numero de segundos sin respuesta del UPS antes de que upsmon lo considere como muerto (inaccesible). El valor predeterminado es 15 segundos. Si se alcanza, se disparan las acciones de emergencia.
</details>

### Pregunta 18

¿Que modulo de watchdog esta diseñado para chipsets Intel?

a) `softdog`
b) `iTCO_wdt`
c) `hpwdt`
d) `ipmi_watchdog`

<details><summary>Respuesta</summary>

**b) `iTCO_wdt`**

`iTCO_wdt` (Intel TCO Watchdog Timer) es el modulo de watchdog de hardware para chipsets Intel. TCO (Total Cost of Ownership) es un subsistema de los chipsets Intel que incluye un timer de watchdog. Es mas fiable que el watchdog por software (`softdog`).
</details>

### Pregunta 19

¿Que comando de ipmitool muestra el registro de eventos del sistema (System Event Log)?

a) `ipmitool event list`
b) `ipmitool log show`
c) `ipmitool sel list`
d) `ipmitool sdr events`

<details><summary>Respuesta</summary>

**c) `ipmitool sel list`**

`ipmitool sel list` muestra el System Event Log (SEL) que contiene eventos de hardware como errores de temperatura, fallos de discos, errores de memoria, etc. Para limpiar el log se usa `ipmitool sel clear`.
</details>

### Pregunta 20

¿Que directiva de `ShutdownWatchdogSec` en `/etc/systemd/system.conf` controla?

a) El tiempo maximo para que systemd complete un reinicio del watchdog
b) El timeout del watchdog durante el proceso de apagado del sistema
c) El intervalo de verificacion del watchdog al iniciar
d) El tiempo de espera antes de activar el watchdog

<details><summary>Respuesta</summary>

**b) El timeout del watchdog durante el proceso de apagado del sistema**

`ShutdownWatchdogSec` define cuanto tiempo se permite para el proceso de apagado antes de que el watchdog fuerce un reinicio. Esto evita que un apagado colgado deje el sistema inaccesible indefinidamente.
</details>

### Pregunta 21

Escribe el comando para ver el estado de los sensores de hardware del servidor usando ipmitool localmente.

<input type="text" class="fill-blank" data-answer="ipmitool sensor list" data-alt="ipmitool sdr list" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipmitool sensor list**

`ipmitool sensor list` muestra todos los sensores del servidor incluyendo temperaturas, voltajes y velocidades de ventiladores. Cada sensor muestra su valor actual, umbrales y estado.
</details>

### Pregunta 22

Escribe el comando para consultar el estado de un UPS llamado "mi_ups" conectado localmente usando NUT.

<input type="text" class="fill-blank" data-answer="upsc mi_ups@localhost" data-alt="upsc mi_ups" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**upsc mi_ups@localhost**

`upsc` (UPS Client) consulta las variables del UPS incluyendo estado de la bateria, carga, voltaje de entrada/salida y tiempo restante estimado. Se especifica el nombre del UPS y el host donde corre upsd.
</details>

### Pregunta 23

Escribe el comando para forzar un apagado de emergencia (Forced ShutDown) desde upsmon de NUT.

<input type="text" class="fill-blank" data-answer="upsmon -c fsd" data-alt="upsmon -c fsd" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**upsmon -c fsd**

`upsmon -c fsd` envia la señal de Forced ShutDown al daemon upsmon, que inicia el proceso de apagado ordenado del sistema. Los servidores slave se apagan primero, seguidos del master que finalmente ordena al UPS cortar la alimentacion.
</details>

### Pregunta 24

Escribe el comando para ver los errores de memoria ECC corregidos del controlador de memoria mc0 en Linux.

<input type="text" class="fill-blank" data-answer="cat /sys/devices/system/edac/mc/mc0/ce_count" data-alt="cat /sys/devices/system/edac/mc/mc0/ce_count" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cat /sys/devices/system/edac/mc/mc0/ce_count**

El archivo `ce_count` en sysfs muestra el numero de errores corregidos (Corrected Errors) del controlador de memoria mc0. `ue_count` muestra los errores no corregidos. EDAC (Error Detection and Correction) es el subsistema del kernel para monitorizar errores de memoria.
</details>

### Pregunta 25

Escribe el comando para configurar la direccion IP 192.168.1.200 en el canal LAN 1 del BMC usando ipmitool.

<input type="text" class="fill-blank" data-answer="ipmitool lan set 1 ipaddr 192.168.1.200" data-alt="ipmitool lan set 1 ipaddr 192.168.1.200" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipmitool lan set 1 ipaddr 192.168.1.200**

`ipmitool lan set` permite configurar los parametros de red del BMC. El canal 1 es el canal LAN por defecto. Tambien se puede configurar la mascara de red (`netmask`) y la puerta de enlace (`defgw ipaddr`).
</details>
