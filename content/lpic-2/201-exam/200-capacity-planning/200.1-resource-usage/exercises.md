---
title: "200.1 - Uso de recursos"
tags: [lpic-2, examen-201, tema-200, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "200"
subtema: "200.1"
---

# 200.1 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un servidor Linux muestra un load average de 4.50, 3.20, 1.10. El sistema tiene 2 nucleos de CPU. ¿Que indica esta situacion?

a) El sistema esta infrautilizado ya que el load average es bajo
b) El sistema tiene una carga moderada y estable
c) La carga del sistema esta aumentando y actualmente supera la capacidad de las CPUs
d) La carga del sistema esta disminuyendo y se esta estabilizando

<details>
<summary>Respuesta</summary>

**c) La carga del sistema esta aumentando y actualmente supera la capacidad de las CPUs**

El load average se lee de izquierda a derecha: 1 min, 5 min, 15 min. Los valores van de 1.10 (hace 15 min) a 4.50 (ultimo minuto), lo que muestra una tendencia ascendente. Con 2 nucleos, un load de 4.50 significa que hay mas del doble de procesos que CPUs disponibles, indicando sobrecarga creciente.
</details>

---

### Pregunta 2

En la salida de `vmstat`, ¿que columnas debes observar para detectar un cuello de botella de I/O en disco?

a) `r` y `us`
b) `si` y `so`
c) `b` y `wa`
d) `swpd` y `free`

<details>
<summary>Respuesta</summary>

**c) `b` y `wa`**

La columna `b` muestra procesos bloqueados esperando I/O y `wa` muestra el porcentaje de CPU en espera de operaciones de I/O. Valores altos en ambas columnas indican un cuello de botella de disco. `si`/`so` estan relacionados con swap, `r`/`us` con CPU, y `swpd`/`free` con memoria.
</details>

---

### Pregunta 3

¿Que comando de `sar` muestra los datos historicos de uso de CPU del dia 22 del mes actual?

a) `sar -u -d 22`
b) `sar -u -f /var/log/sysstat/sa22`
c) `sar --cpu --date 22`
d) `sar -u --history /var/log/sa/22`

<details>
<summary>Respuesta</summary>

**b) `sar -u -f /var/log/sysstat/sa22`**

La opcion `-u` indica estadisticas de CPU y `-f` especifica el archivo de datos historicos. Los archivos de datos de sar se almacenan en `/var/log/sysstat/` (Debian/Ubuntu) o `/var/log/sa/` con nombres como `sa22` donde el numero corresponde al dia del mes.
</details>

---

### Pregunta 4

Un administrador ejecuta `iostat -x` y observa que el dispositivo `/dev/sda` tiene `%util` al 98% y `await` de 245ms. ¿Que conclusion es correcta?

a) El disco esta practicamente inactivo
b) El disco esta saturado y las solicitudes experimentan alta latencia
c) El disco tiene mucho espacio libre disponible
d) El disco esta funcionando de forma optima

<details>
<summary>Respuesta</summary>

**b) El disco esta saturado y las solicitudes experimentan alta latencia**

Un `%util` cercano a 100% indica que el disco esta ocupado casi todo el tiempo. Un `await` de 245ms es extremadamente alto (valores normales estan por debajo de 10-20ms para discos convencionales). La combinacion de ambos valores confirma que el disco es un cuello de botella severo.
</details>

---

### Pregunta 5

¿Cual es la diferencia principal entre `MemFree` y `MemAvailable` en `/proc/meminfo`?

a) No hay diferencia, son sinonimos
b) `MemFree` incluye la cache y `MemAvailable` no
c) `MemAvailable` estima la memoria disponible para nuevas aplicaciones incluyendo cache recuperable, mientras que `MemFree` solo muestra memoria completamente sin uso
d) `MemAvailable` solo cuenta la memoria fisica y `MemFree` incluye el swap

<details>
<summary>Respuesta</summary>

**c) `MemAvailable` estima la memoria disponible para nuevas aplicaciones incluyendo cache recuperable, mientras que `MemFree` solo muestra memoria completamente sin uso**

`MemFree` es la memoria que no esta siendo utilizada para nada. `MemAvailable` es una estimacion mas practica que incluye memoria que puede ser recuperada rapidamente (como buffers y cache de paginas), proporcionando una vision mas realista de la memoria disponible para aplicaciones.
</details>

---

### Pregunta 6

¿Que herramienta de monitorizacion se especializa en generar alertas cuando un servicio o recurso del sistema supera un umbral definido?

a) collectd
b) MRTG
c) Cacti
d) Nagios

<details>
<summary>Respuesta</summary>

**d) Nagios**

Nagios es un sistema de monitorizacion centrado en la verificacion de estado y generacion de alertas. Monitoriza servicios de red y recursos del host, y envia notificaciones (email, SMS, etc.) cuando se superan umbrales. `collectd` recopila metricas, y MRTG/Cacti se centran en generar graficos.
</details>

---

### Pregunta 7

En la salida de `vmstat`, las columnas `si` y `so` muestran valores de 1200 y 3500 respectivamente de forma continua. ¿Que indica esto?

a) El sistema tiene un uso intensivo de disco convencional
b) El sistema esta realizando swap activo, lo que indica falta de memoria RAM
c) La red esta saturada con trafico entrante y saliente
d) El sistema tiene un alto uso de CPU

<details>
<summary>Respuesta</summary>

**b) El sistema esta realizando swap activo, lo que indica falta de memoria RAM**

`si` (swap in) y `so` (swap out) muestran la cantidad de datos en KB/s que se leen desde y se escriben hacia el espacio de swap. Valores altos y continuos indican que el sistema no tiene suficiente memoria RAM y esta moviendo datos constantemente entre RAM y disco (thrashing), lo que degrada severamente el rendimiento.
</details>

---

### Pregunta 8

¿Que comando muestra las estadisticas de I/O de un proceso especifico con PID 1234?

a) `iostat -p 1234`
b) `iotop -p 1234`
c) `cat /proc/1234/io`
d) Ambas b) y c) son correctas

<details>
<summary>Respuesta</summary>

**d) Ambas b) y c) son correctas**

`iotop -p 1234` muestra la actividad de I/O en tiempo real del proceso 1234 en una interfaz interactiva. `cat /proc/1234/io` muestra las estadisticas acumuladas de I/O de ese proceso desde su inicio. Ambos metodos son validos para obtener informacion de I/O a nivel de proceso, pero ofrecen perspectivas diferentes.
</details>

---

### Pregunta 9

¿Que protocolo utilizan MRTG y Cacti para recopilar datos de dispositivos de red?

a) SSH
b) HTTP
c) SNMP
d) Syslog

<details>
<summary>Respuesta</summary>

**c) SNMP**

MRTG (Multi Router Traffic Grapher) y Cacti utilizan el protocolo SNMP (Simple Network Management Protocol) para consultar contadores de trafico y otras metricas en dispositivos de red como routers, switches y servidores. SNMP permite acceder a los datos a traves de OIDs (Object Identifiers) definidos en MIBs.
</details>

---

### Pregunta 10

Un administrador necesita identificar que proceso esta consumiendo mas ancho de banda de disco en un servidor de produccion. ¿Que herramienta es la mas adecuada?

a) `vmstat`
b) `iotop`
c) `sar -d`
d) `iostat -x`

<details>
<summary>Respuesta</summary>

**b) `iotop`**

`iotop` es la unica herramienta de las opciones que muestra el uso de I/O de disco desglosado por proceso individual. `vmstat`, `sar -d` e `iostat -x` muestran estadisticas globales del sistema o por dispositivo, pero no identifican que proceso especifico esta generando la carga de I/O.
</details>

---

### Pregunta 11

En la salida de `vmstat`, la columna `st` muestra un valor consistentemente alto. ¿Que indica esto?

a) El sistema tiene un alto uso de swap temporal
b) El disco esta saturado con operaciones de escritura
c) La CPU esta siendo parcialmente utilizada por el hipervisor (steal time), tipico en entornos virtualizados
d) El sistema tiene demasiados procesos en estado zombie

<details><summary>Respuesta</summary>

**c) La CPU esta siendo parcialmente utilizada por el hipervisor (steal time), tipico en entornos virtualizados**

La columna `st` (steal time) en `vmstat` muestra el porcentaje de tiempo que la CPU virtual esta esperando mientras el hipervisor atiende a otras maquinas virtuales. Un valor alto indica que la maquina virtual no esta recibiendo suficientes recursos de CPU del host fisico, lo que es comun en entornos de virtualizacion sobrevendidos.

</details>

---

### Pregunta 12

Un administrador ejecuta `sar -n DEV 1 5` en un servidor. ¿Que tipo de informacion obtiene?

a) Estadisticas de uso de disco por dispositivo de bloque
b) Estadisticas de trafico de red por interfaz, incluyendo paquetes y bytes enviados/recibidos
c) Estadisticas de uso de memoria por proceso
d) Estado de las conexiones de red activas (similar a netstat)

<details><summary>Respuesta</summary>

**b) Estadisticas de trafico de red por interfaz, incluyendo paquetes y bytes enviados/recibidos**

La opcion `-n DEV` de `sar` muestra estadisticas de red a nivel de interfaz (como eth0, ens33, etc.), incluyendo paquetes recibidos/enviados por segundo (rxpck/s, txpck/s) y kilobytes recibidos/enviados por segundo (rxkB/s, txkB/s). Los parametros `1 5` indican intervalo de 1 segundo durante 5 muestras.

</details>

---

### Pregunta 13

¿Que herramienta del paquete sysstat permite ver estadisticas de CPU e I/O de disco de forma simultanea con intervalos regulares?

a) `sar`
b) `iostat`
c) `vmstat`
d) `mpstat`

<details><summary>Respuesta</summary>

**b) `iostat`**

`iostat` pertenece al paquete sysstat y muestra por defecto tanto estadisticas de CPU (avg-cpu) como estadisticas de I/O por dispositivo de disco. Con la opcion `-x` proporciona informacion extendida de I/O. Aunque `sar` tambien puede mostrar ambas, requiere opciones separadas (`-u` para CPU, `-d` para disco). `mpstat` solo muestra estadisticas de CPU.

</details>

---

### Pregunta 14

¿En que directorio se almacenan tipicamente los archivos de datos historicos generados por `sadc`?

a) `/var/log/sar/`
b) `/var/log/sysstat/` o `/var/log/sa/`
c) `/etc/sysstat/data/`
d) `/usr/share/sysstat/`

<details><summary>Respuesta</summary>

**b) `/var/log/sysstat/` o `/var/log/sa/`**

El demonio `sadc` (system activity data collector) almacena los datos recopilados en archivos binarios con nombres como `sa01`, `sa02`, etc. (uno por dia del mes) en el directorio `/var/log/sysstat/` (en Debian/Ubuntu) o `/var/log/sa/` (en Red Hat/CentOS). Estos archivos son leidos posteriormente por `sar` con la opcion `-f`.

</details>

---

### Pregunta 15

Un sistema de 8 nucleos muestra un load average de 3.0, 3.0, 3.0. ¿Cual de las siguientes interpretaciones es correcta?

a) El sistema esta sobrecargado y necesita mas CPUs urgentemente
b) El sistema tiene una carga estable y moderada, utilizando menos de la mitad de su capacidad
c) El sistema esta inactivo ya que el load average es inferior a 8
d) Es imposible determinar el estado del sistema solo con el load average

<details><summary>Respuesta</summary>

**b) El sistema tiene una carga estable y moderada, utilizando menos de la mitad de su capacidad**

Con 8 nucleos, un load average de 3.0 representa menos del 40% de la capacidad total. Los tres valores iguales (1 min, 5 min, 15 min) indican una carga muy estable sin tendencia ascendente ni descendente. El sistema no esta sobrecargado porque el load average esta significativamente por debajo del numero de nucleos disponibles.

</details>

---

### Pregunta 16

¿Cual de las siguientes afirmaciones sobre `collectd` es correcta?

a) Es una herramienta interactiva de linea de comandos para ver estadisticas en tiempo real
b) Es un sistema de alertas que envia notificaciones por email cuando se superan umbrales
c) Es un demonio ligero basado en plugins que recopila metricas del sistema y las almacena periodicamente
d) Es una herramienta grafica web para visualizar el rendimiento del sistema

<details><summary>Respuesta</summary>

**c) Es un demonio ligero basado en plugins que recopila metricas del sistema y las almacena periodicamente**

`collectd` es un demonio (servicio en segundo plano) que recopila metricas del sistema a intervalos regulares. Su arquitectura esta basada en plugins (CPU, memoria, disco, red, etc.) y puede almacenar los datos en archivos RRD u otros backends. No es interactivo, no genera alertas por si mismo (eso es Nagios) y no tiene interfaz web propia (para eso se usan herramientas como Grafana o Cacti).

</details>

---

### Pregunta 17

Un administrador observa en `top` que la linea de CPU muestra `%Cpu(s): 5.0 us, 2.0 sy, 0.0 ni, 12.0 id, 80.0 wa, 0.5 hi, 0.5 si, 0.0 st`. ¿Cual es el problema principal?

a) El sistema tiene un alto uso de CPU en modo usuario
b) El sistema tiene un cuello de botella de I/O de disco ya que el 80% del tiempo de CPU se gasta esperando operaciones de I/O
c) El sistema esta infrautilizado con un 12% de CPU inactiva
d) El sistema esta sufriendo robo de CPU por un hipervisor

<details><summary>Respuesta</summary>

**b) El sistema tiene un cuello de botella de I/O de disco ya que el 80% del tiempo de CPU se gasta esperando operaciones de I/O**

El valor `wa` (iowait) del 80% indica que la CPU pasa la mayor parte del tiempo esperando a que se completen operaciones de I/O de disco. Esto es un indicador claro de cuello de botella de disco. El uso real de CPU (`us` + `sy`) es solo del 7%, lo que confirma que el problema no es de CPU sino de disco. El 12% de `id` (idle) es el tiempo restante sin actividad.

</details>

---

### Pregunta 18

¿Que tecla se presiona en `top` para mostrar la actividad de cada nucleo de CPU por separado en lugar de un promedio global?

a) `P`
b) `M`
c) `1`
d) `c`

<details><summary>Respuesta</summary>

**c) `1`**

En `top`, al presionar la tecla `1`, se alterna entre mostrar un resumen global de todas las CPUs y mostrar la actividad de cada nucleo individual (CPU0, CPU1, CPU2, etc.). `P` ordena por uso de CPU, `M` ordena por uso de memoria, y `c` muestra la linea de comandos completa de cada proceso.

</details>

---

### Pregunta 19

¿Que diferencia fundamental existe entre Cacti y MRTG como herramientas de monitorizacion?

a) Cacti usa SSH y MRTG usa SNMP
b) Cacti ofrece una interfaz web completa con gestion de usuarios y graficos avanzados, mientras que MRTG genera paginas HTML estaticas con graficos basicos
c) MRTG es mas moderno y completo que Cacti
d) Cacti solo monitoriza routers y MRTG monitoriza cualquier dispositivo

<details><summary>Respuesta</summary>

**b) Cacti ofrece una interfaz web completa con gestion de usuarios y graficos avanzados, mientras que MRTG genera paginas HTML estaticas con graficos basicos**

Cacti es una solucion mas avanzada basada en RRDtool que proporciona una interfaz web dinamica, gestion de usuarios y permisos, templates para dispositivos y graficos mas sofisticados. MRTG es mas antiguo y sencillo: genera paginas HTML estaticas con graficos PNG de trafico de red. Ambas herramientas usan SNMP para recopilar datos.

</details>

---

### Pregunta 20

Un servidor muestra en `free -h` que tiene 16 GB de RAM total, 200 MB libres, y 10 GB en buff/cache. ¿Cual es la evaluacion correcta?

a) El servidor necesita urgentemente mas RAM porque solo quedan 200 MB libres
b) La situacion es normal ya que Linux utiliza la memoria no usada para cache, que se puede liberar para aplicaciones cuando sea necesario
c) El sistema tiene una fuga de memoria y debe reiniciarse
d) Los 10 GB de cache estan desperdiciados y deben desactivarse

<details><summary>Respuesta</summary>

**b) La situacion es normal ya que Linux utiliza la memoria no usada para cache, que se puede liberar para aplicaciones cuando sea necesario**

Linux usa automaticamente la RAM disponible como cache de disco (buff/cache) para mejorar el rendimiento. Esta memoria se puede recuperar rapidamente cuando las aplicaciones la necesitan. Por eso, `MemFree` puede ser bajo sin que haya un problema real. El valor importante es `MemAvailable`, que incluye la memoria cache recuperable y da una imagen mas real de la memoria disponible.

</details>

---

### Pregunta 21

¿Que comando muestra las estadisticas de red de la interfaz `eth0`, incluyendo paquetes transmitidos, recibidos y errores?

<input type="text" class="fill-blank" data-answer="ip -s link show eth0" data-alt="ip -s link show dev eth0" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ip -s link show eth0**

El comando `ip -s link show eth0` muestra estadisticas detalladas de la interfaz de red `eth0`, incluyendo bytes y paquetes transmitidos/recibidos, errores, paquetes descartados y colisiones. La opcion `-s` (statistics) es la que activa la visualizacion de estadisticas.

</details>

---

### Pregunta 22

¿Que comando de `sar` muestra las estadisticas de uso de memoria del sistema con un intervalo de 2 segundos y 5 muestras?

<input type="text" class="fill-blank" data-answer="sar -r 2 5" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sar -r 2 5**

La opcion `-r` de `sar` muestra estadisticas de uso de memoria (incluyendo memoria total, libre, usada, buffers, cache, swap, etc.). Los parametros `2 5` indican un intervalo de 2 segundos entre muestras y un total de 5 muestras. Otras opciones comunes son `-u` para CPU, `-d` para disco y `-n DEV` para red.

</details>

---

### Pregunta 23

¿Que comando ejecuta `iostat` en modo extendido con un intervalo de 3 segundos y 4 muestras?

<input type="text" class="fill-blank" data-answer="iostat -x 3 4" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**iostat -x 3 4**

El comando `iostat -x 3 4` ejecuta iostat con la opcion `-x` (extended) que muestra informacion detallada de I/O por dispositivo, incluyendo campos como `%util`, `await`, `r/s`, `w/s`, entre otros. Los parametros `3 4` significan intervalos de 3 segundos durante 4 muestras consecutivas.

</details>

---

### Pregunta 24

¿Que comando muestra solo los procesos que estan realizando operaciones de I/O de disco activamente?

<input type="text" class="fill-blank" data-answer="iotop -o" data-alt="iotop --only" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**iotop -o**

El comando `iotop` con la opcion `-o` (only) muestra unicamente los procesos que estan realizando I/O activo en ese momento, filtrando aquellos con actividad cero. Sin esta opcion, `iotop` muestra todos los procesos, incluyendo los que no tienen actividad de I/O, lo que dificulta identificar rapidamente los procesos problematicos.

</details>

---

### Pregunta 25

¿Que comando muestra el uso de memoria del sistema en formato legible (human-readable) con unidades como GB y MB?

<input type="text" class="fill-blank" data-answer="free -h" data-alt="free --human" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**free -h**

El comando `free -h` muestra la informacion de uso de memoria (RAM y swap) en formato legible con unidades automaticas (B, KB, MB, GB). Muestra memoria total, usada, libre, compartida, buff/cache y disponible. Es una de las herramientas mas rapidas para obtener una vision general del estado de la memoria del sistema.

</details>
