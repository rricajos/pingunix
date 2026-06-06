---
title: "200.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "200.1"
---

# Flashcards: 200.1 - Uso De Recursos

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-001">
<div class="flashcard-front">

**P:** Un servidor Linux muestra un load average de 4.50, 3.20, 1.10. El sistema tiene 2 nucleos de CPU. ¿Que indica esta situacion?

</div>
<div class="flashcard-back">

**R:** c) La carga del sistema esta aumentando y actualmente supera la capacidad de las CPUs. El load average se lee de izquierda a derecha: 1 min, 5 min, 15 min. Los valores van de 1.10 (hace 15 min) a 4.50 (ultimo minuto), lo que muestra una tendencia ascendente. Con 2 nucleos, un load de 4.50 significa que hay mas del doble de procesos que CPUs disponibles, indicando sobrecarga creciente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-002">
<div class="flashcard-front">

**P:** En la salida de `vmstat`, ¿que columnas debes observar para detectar un cuello de botella de I/O en disco?

</div>
<div class="flashcard-back">

**R:** c) `b` y `wa`. La columna `b` muestra procesos bloqueados esperando I/O y `wa` muestra el porcentaje de CPU en espera de operaciones de I/O. Valores altos en ambas columnas indican un cuello de botella de disco. `si`/`so` estan relacionados con swap, `r`/`us` con CPU, y `swpd`/`free` con memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando de `sar` muestra los datos historicos de uso de CPU del dia 22 del mes actual?

</div>
<div class="flashcard-back">

**R:** b) `sar -u -f /var/log/sysstat/sa22`. La opcion `-u` indica estadisticas de CPU y `-f` especifica el archivo de datos historicos. Los archivos de datos de sar se almacenan en `/var/log/sysstat/` (Debian/Ubuntu) o `/var/log/sa/` con nombres como `sa22` donde el numero corresponde al dia del mes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-004">
<div class="flashcard-front">

**P:** Un administrador ejecuta `iostat -x` y observa que el dispositivo `/dev/sda` tiene `%util` al 98% y `await` de 245ms. ¿Que conclusion es correcta?

</div>
<div class="flashcard-back">

**R:** b) El disco esta saturado y las solicitudes experimentan alta latencia. Un `%util` cercano a 100% indica que el disco esta ocupado casi todo el tiempo. Un `await` de 245ms es extremadamente alto (valores normales estan por debajo de 10-20ms para discos convencionales). La combinacion de ambos valores confirma que el disco es un cuello de botella severo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre `MemFree` y `MemAvailable` en `/proc/meminfo`?

</div>
<div class="flashcard-back">

**R:** c) `MemAvailable` estima la memoria disponible para nuevas aplicaciones incluyendo cache recuperable, mientras que `MemFree` solo muestra memoria completamente sin uso. `MemFree` es la memoria que no esta siendo utilizada para nada. `MemAvailable` es una estimacion mas practica que incluye memoria que puede ser recuperada rapidamente (como buffers y cache de paginas), proporcionando una vision mas realista de la memoria disponible para aplicaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que herramienta de monitorizacion se especializa en generar alertas cuando un servicio o recurso del sistema supera un umbral definido?

</div>
<div class="flashcard-back">

**R:** d) Nagios. Nagios es un sistema de monitorizacion centrado en la verificacion de estado y generacion de alertas. Monitoriza servicios de red y recursos del host, y envia notificaciones (email, SMS, etc.) cuando se superan umbrales. `collectd` recopila metricas, y MRTG/Cacti se centran en generar graficos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-007">
<div class="flashcard-front">

**P:** En la salida de `vmstat`, las columnas `si` y `so` muestran valores de 1200 y 3500 respectivamente de forma continua. ¿Que indica esto?

</div>
<div class="flashcard-back">

**R:** b) El sistema esta realizando swap activo, lo que indica falta de memoria RAM. `si` (swap in) y `so` (swap out) muestran la cantidad de datos en KB/s que se leen desde y se escriben hacia el espacio de swap. Valores altos y continuos indican que el sistema no tiene suficiente memoria RAM y esta moviendo datos constantemente entre RAM y disco (thrashing), lo que degrada severamente el rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando muestra las estadisticas de I/O de un proceso especifico con PID 1234?

</div>
<div class="flashcard-back">

**R:** d) Ambas b) y c) son correctas. `iotop -p 1234` muestra la actividad de I/O en tiempo real del proceso 1234 en una interfaz interactiva. `cat /proc/1234/io` muestra las estadisticas acumuladas de I/O de ese proceso desde su inicio. Ambos metodos son validos para obtener informacion de I/O a nivel de proceso, pero ofrecen perspectivas diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que protocolo utilizan MRTG y Cacti para recopilar datos de dispositivos de red?

</div>
<div class="flashcard-back">

**R:** c) SNMP. MRTG (Multi Router Traffic Grapher) y Cacti utilizan el protocolo SNMP (Simple Network Management Protocol) para consultar contadores de trafico y otras metricas en dispositivos de red como routers, switches y servidores. SNMP permite acceder a los datos a traves de OIDs (Object Identifiers) definidos en MIBs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita identificar que proceso esta consumiendo mas ancho de banda de disco en un servidor de produccion. ¿Que herramienta es la mas adecuada?

</div>
<div class="flashcard-back">

**R:** b) `iotop`. `iotop` es la unica herramienta de las opciones que muestra el uso de I/O de disco desglosado por proceso individual. `vmstat`, `sar -d` e `iostat -x` muestran estadisticas globales del sistema o por dispositivo, pero no identifican que proceso especifico esta generando la carga de I/O.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-011">
<div class="flashcard-front">

**P:** En la salida de `vmstat`, la columna `st` muestra un valor consistentemente alto. ¿Que indica esto?

</div>
<div class="flashcard-back">

**R:** c) La CPU esta siendo parcialmente utilizada por el hipervisor (steal time), tipico en entornos virtualizados. La columna `st` (steal time) en `vmstat` muestra el porcentaje de tiempo que la CPU virtual esta esperando mientras el hipervisor atiende a otras maquinas virtuales. Un valor alto indica que la maquina virtual no esta recibiendo suficientes recursos de CPU del host fisico, lo que es comun en entornos de virtualizacion sobrevendidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-012">
<div class="flashcard-front">

**P:** Un administrador ejecuta `sar -n DEV 1 5` en un servidor. ¿Que tipo de informacion obtiene?

</div>
<div class="flashcard-back">

**R:** b) Estadisticas de trafico de red por interfaz, incluyendo paquetes y bytes enviados/recibidos. La opcion `-n DEV` de `sar` muestra estadisticas de red a nivel de interfaz (como eth0, ens33, etc.), incluyendo paquetes recibidos/enviados por segundo (rxpck/s, txpck/s) y kilobytes recibidos/enviados por segundo (rxkB/s, txkB/s). Los parametros `1 5` indican intervalo de 1 segundo durante 5 muestras.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que herramienta del paquete sysstat permite ver estadisticas de CPU e I/O de disco de forma simultanea con intervalos regulares?

</div>
<div class="flashcard-back">

**R:** b) `iostat`. `iostat` pertenece al paquete sysstat y muestra por defecto tanto estadisticas de CPU (avg-cpu) como estadisticas de I/O por dispositivo de disco. Con la opcion `-x` proporciona informacion extendida de I/O. Aunque `sar` tambien puede mostrar ambas, requiere opciones separadas (`-u` para CPU, `-d` para disco). `mpstat` solo muestra estadisticas de CPU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-014">
<div class="flashcard-front">

**P:** ¿En que directorio se almacenan tipicamente los archivos de datos historicos generados por `sadc`?

</div>
<div class="flashcard-back">

**R:** b) `/var/log/sysstat/` o `/var/log/sa/`. El demonio `sadc` (system activity data collector) almacena los datos recopilados en archivos binarios con nombres como `sa01`, `sa02`, etc. (uno por dia del mes) en el directorio `/var/log/sysstat/` (en Debian/Ubuntu) o `/var/log/sa/` (en Red Hat/CentOS). Estos archivos son leidos posteriormente por `sar` con la opcion `-f`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-015">
<div class="flashcard-front">

**P:** Un sistema de 8 nucleos muestra un load average de 3.0, 3.0, 3.0. ¿Cual de las siguientes interpretaciones es correcta?

</div>
<div class="flashcard-back">

**R:** b) El sistema tiene una carga estable y moderada, utilizando menos de la mitad de su capacidad. Con 8 nucleos, un load average de 3.0 representa menos del 40% de la capacidad total. Los tres valores iguales (1 min, 5 min, 15 min) indican una carga muy estable sin tendencia ascendente ni descendente. El sistema no esta sobrecargado porque el load average esta significativamente por debajo del numero de nucleos disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-016">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre `collectd` es correcta?

</div>
<div class="flashcard-back">

**R:** c) Es un demonio ligero basado en plugins que recopila metricas del sistema y las almacena periodicamente. `collectd` es un demonio (servicio en segundo plano) que recopila metricas del sistema a intervalos regulares. Su arquitectura esta basada en plugins (CPU, memoria, disco, red, etc.) y puede almacenar los datos en archivos RRD u otros backends. No es interactivo, no genera alertas por si mismo (eso es Nagios) y no tiene interfaz web propia (para eso se usan herramientas como Grafana o Cacti).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-017">
<div class="flashcard-front">

**P:** Un administrador observa en `top` que la linea de CPU muestra `%Cpu(s): 5.0 us, 2.0 sy, 0.0 ni, 12.0 id, 80.0 wa, 0.5 hi, 0.5 si, 0.0 st`. ¿Cual es el problema principal?

</div>
<div class="flashcard-back">

**R:** b) El sistema tiene un cuello de botella de I/O de disco ya que el 80% del tiempo de CPU se gasta esperando operaciones de I/O. El valor `wa` (iowait) del 80% indica que la CPU pasa la mayor parte del tiempo esperando a que se completen operaciones de I/O de disco. Esto es un indicador claro de cuello de botella de disco. El uso real de CPU (`us` + `sy`) es solo del 7%, lo que confirma que el problema no es de CPU sino de disco. El 12% de `id` (idle) es el tiempo restante sin actividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que tecla se presiona en `top` para mostrar la actividad de cada nucleo de CPU por separado en lugar de un promedio global?

</div>
<div class="flashcard-back">

**R:** c) `1`. En `top`, al presionar la tecla `1`, se alterna entre mostrar un resumen global de todas las CPUs y mostrar la actividad de cada nucleo individual (CPU0, CPU1, CPU2, etc.). `P` ordena por uso de CPU, `M` ordena por uso de memoria, y `c` muestra la linea de comandos completa de cada proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que diferencia fundamental existe entre Cacti y MRTG como herramientas de monitorizacion?

</div>
<div class="flashcard-back">

**R:** b) Cacti ofrece una interfaz web completa con gestion de usuarios y graficos avanzados, mientras que MRTG genera paginas HTML estaticas con graficos basicos. Cacti es una solucion mas avanzada basada en RRDtool que proporciona una interfaz web dinamica, gestion de usuarios y permisos, templates para dispositivos y graficos mas sofisticados. MRTG es mas antiguo y sencillo: genera paginas HTML estaticas con graficos PNG de trafico de red. Ambas herramientas usan SNMP para recopilar datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-020">
<div class="flashcard-front">

**P:** Un servidor muestra en `free -h` que tiene 16 GB de RAM total, 200 MB libres, y 10 GB en buff/cache. ¿Cual es la evaluacion correcta?

</div>
<div class="flashcard-back">

**R:** b) La situacion es normal ya que Linux utiliza la memoria no usada para cache, que se puede liberar para aplicaciones cuando sea necesario. Linux usa automaticamente la RAM disponible como cache de disco (buff/cache) para mejorar el rendimiento. Esta memoria se puede recuperar rapidamente cuando las aplicaciones la necesitan. Por eso, `MemFree` puede ser bajo sin que haya un problema real. El valor importante es `MemAvailable`, que incluye la memoria cache recuperable y da una imagen mas real de la memoria disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando muestra las estadisticas de red de la interfaz `eth0`, incluyendo paquetes transmitidos, recibidos y errores?

</div>
<div class="flashcard-back">

**R:** ip -s link show eth0. El comando `ip -s link show eth0` muestra estadisticas detalladas de la interfaz de red `eth0`, incluyendo bytes y paquetes transmitidos/recibidos, errores, paquetes descartados y colisiones. La opcion `-s` (statistics) es la que activa la visualizacion de estadisticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando de `sar` muestra las estadisticas de uso de memoria del sistema con un intervalo de 2 segundos y 5 muestras?

</div>
<div class="flashcard-back">

**R:** sar -r 2 5. La opcion `-r` de `sar` muestra estadisticas de uso de memoria (incluyendo memoria total, libre, usada, buffers, cache, swap, etc.). Los parametros `2 5` indican un intervalo de 2 segundos entre muestras y un total de 5 muestras. Otras opciones comunes son `-u` para CPU, `-d` para disco y `-n DEV` para red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando ejecuta `iostat` en modo extendido con un intervalo de 3 segundos y 4 muestras?

</div>
<div class="flashcard-back">

**R:** iostat -x 3 4. El comando `iostat -x 3 4` ejecuta iostat con la opcion `-x` (extended) que muestra informacion detallada de I/O por dispositivo, incluyendo campos como `%util`, `await`, `r/s`, `w/s`, entre otros. Los parametros `3 4` significan intervalos de 3 segundos durante 4 muestras consecutivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando muestra solo los procesos que estan realizando operaciones de I/O de disco activamente?

</div>
<div class="flashcard-back">

**R:** iotop -o. El comando `iotop` con la opcion `-o` (only) muestra unicamente los procesos que estan realizando I/O activo en ese momento, filtrando aquellos con actividad cero. Sin esta opcion, `iotop` muestra todos los procesos, incluyendo los que no tienen actividad de I/O, lo que dificulta identificar rapidamente los procesos problematicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando muestra el uso de memoria del sistema en formato legible (human-readable) con unidades como GB y MB?

</div>
<div class="flashcard-back">

**R:** free -h. El comando `free -h` muestra la informacion de uso de memoria (RAM y swap) en formato legible con unidades automaticas (B, KB, MB, GB). Muestra memoria total, usada, libre, compartida, buff/cache y disponible. Es una de las herramientas mas rapidas para obtener una vision general del estado de la memoria del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El load average NO es un porcentaje. Es el numero promedio de procesos en cola d...

</div>
<div class="flashcard-back">

**R:** El load average NO es un porcentaje. Es el numero promedio de procesos en cola de ejecucion. Un load average de 2.0 en un sistema con 2 CPUs significa uso completo, pero en uno con 8 CPUs es una carga baja.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Si `wa` (wait) es consistentemente alto, indica un cuello de botella de I/O en d...

</div>
<div class="flashcard-back">

**R:** Si `wa` (wait) es consistentemente alto, indica un cuello de botella de I/O en disco. Si `r` es mayor que el numero de CPUs, hay un cuello de botella de CPU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Un `%util` cercano a 100% indica que el disco esta saturado. Un `await` alto com...

</div>
<div class="flashcard-back">

**R:** Un `%util` cercano a 100% indica que el disco esta saturado. Un `await` alto combinado con `%util` alto confirma un cuello de botella de disco.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `sar` es la unica herramienta que permite consultar datos historicos de rendimie...

</div>
<div class="flashcard-back">

**R:** `sar` es la unica herramienta que permite consultar datos historicos de rendimiento. Recuerda las opciones `-u` (CPU), `-r` (memoria), `-d` (disco), `-n DEV` (red) y `-f` (archivo de datos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Si `si` y `so` en `vmstat` son consistentemente mayores que cero, el sistema est...

</div>
<div class="flashcard-back">

**R:** Si `si` y `so` en `vmstat` son consistentemente mayores que cero, el sistema esta haciendo swap activo y probablemente necesita mas RAM. `swpd` solo muestra cuanta swap esta en uso, pero no indica actividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Debes conocer el proposito de cada herramienta. `collectd` recopila metricas, Na...

</div>
<div class="flashcard-back">

**R:** Debes conocer el proposito de cada herramienta. `collectd` recopila metricas, Nagios genera alertas, MRTG y Cacti generan graficos. No necesitas saber configurarlas en detalle, pero si entender su funcion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Identificacion de cuellos de botella?

</div>
<div class="flashcard-back">

**R:** Resumen de como identificar el recurso limitante:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Archivos y directorios importantes?

</div>
<div class="flashcard-back">

**R:** - `/proc/meminfo` - informacion de memoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

