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

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: El load average NO es un porcentaje. Es el numero promedio de procesos en cola d...

</div>
<div class="flashcard-back">

**R:** El load average NO es un porcentaje. Es el numero promedio de procesos en cola de ejecucion. Un load average de 2.0 en un sistema con 2 CPUs significa uso completo, pero en uno con 8 CPUs es una carga baja.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-012">
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

<div class="flashcard" data-id="200.1-fc-013">
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

<div class="flashcard" data-id="200.1-fc-014">
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

<div class="flashcard" data-id="200.1-fc-015">
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

<div class="flashcard" data-id="200.1-fc-016">
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

<div class="flashcard" data-id="200.1-fc-017">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** La planificacion de capacidad es una de las responsabilidades fundamentales de un administrador de sistemas Linux avanzado. El subtema 200.1 se centra en medir y analizar el uso actual de los recursos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.1">
</div>

<div class="flashcard" data-id="200.1-fc-018">
<div class="flashcard-front">

**P:** Que es/son Identificacion de cuellos de botella?

</div>
<div class="flashcard-back">

**R:** Resumen de como identificar el recurso limitante:

</div>
</div>

---

