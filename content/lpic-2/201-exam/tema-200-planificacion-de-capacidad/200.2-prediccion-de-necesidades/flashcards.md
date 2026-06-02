---
title: "200.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "200.2"
---

# Flashcards: 200.2 - Prediccion De Necesidades

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-001">
<div class="flashcard-front">

**P:** Un servidor tiene una particion `/data` de 500 GB. En los ultimos 4 meses, el uso ha crecido de 200 GB a 320 GB. Suponiendo un crecimiento lineal, ¿en cuantos meses aproximadamente se llenara la particion al 80%?

</div>
<div class="flashcard-back">

**R:** b) 3 meses. Crecimiento mensual: (320 - 200) / 4 = 30 GB/mes. El umbral del 80% es 400 GB. Espacio hasta el umbral: 400 - 320 = 80 GB. Meses restantes: 80 / 30 = 2.67, es decir aproximadamente 3 meses.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando permite exportar datos historicos de `sar` en formato CSV para su posterior analisis en una hoja de calculo?

</div>
<div class="flashcard-back">

**R:** c) `sadf -d /var/log/sysstat/sa15 -- -u`. `sadf` (System Activity Data Formatter) es la herramienta complementaria de `sar` que permite exportar los datos a diferentes formatos. La opcion `-d` genera salida en formato CSV separado por punto y coma. El doble guion `--` separa las opciones de `sadf` de las opciones que se pasan a `sar` (en este caso `-u` para CPU).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-003">
<div class="flashcard-front">

**P:** ¿Cual de los siguientes NO es un factor que debe considerarse al predecir las necesidades futuras de recursos de un servidor?

</div>
<div class="flashcard-back">

**R:** b) El color del chasis del servidor. La planificacion de capacidad debe considerar factores como el crecimiento de usuarios, nuevas aplicaciones, politicas de retencion, estacionalidad del negocio, regulaciones y cambios tecnologicos. Las caracteristicas fisicas esteticas del hardware no tienen ninguna relevancia en la planificacion de capacidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-004">
<div class="flashcard-front">

**P:** Un administrador observa que el load average de un servidor de 4 nucleos ha pasado de un promedio de 1.5 hace tres meses a 2.8 actualmente. Si la tendencia continua, ¿cual es la mejor accion proactiva?

</div>
<div class="flashcard-back">

**R:** b) Planificar una ampliacion de CPU o redistribucion de carga para los proximos meses. Aunque el load average actual (2.8) esta por debajo de los 4 nucleos, la tendencia creciente indica que en pocos meses podria superar la capacidad. La planificacion de capacidad consiste precisamente en actuar antes de que los problemas se manifiesten. Esperar a que el sistema se sature implicaria downtime no planificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que herramienta almacena datos en formato RRD (Round Robin Database) y se usa comumente para generar graficos de tendencias a largo plazo?

</div>
<div class="flashcard-back">

**R:** c) collectd. `collectd` es un demonio que recopila metricas del sistema periodicamente y las puede almacenar en bases de datos RRD. Los archivos RRD tienen la ventaja de mantener un tamano fijo independientemente del tiempo de recopilacion, ya que rotan los datos mas antiguos con menor granularidad. `sar` usa su propio formato binario, y `vmstat`/`top` no almacenan datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-006">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre escalado vertical y escalado horizontal?

</div>
<div class="flashcard-back">

**R:** b) Escalado vertical mejora recursos de la maquina existente, escalado horizontal agrega mas maquinas. Escalado vertical (scale up) implica agregar mas recursos al servidor actual: mas RAM, mejor CPU, discos mas grandes. Escalado horizontal (scale out) implica agregar mas servidores y distribuir la carga entre ellos. Cada estrategia tiene ventajas: vertical es mas simple de implementar, horizontal ofrece mayor escalabilidad a largo plazo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-007">
<div class="flashcard-front">

**P:** ¿Con que frecuencia tipica recopila datos el demonio `sadc` del paquete sysstat cuando esta configurado por defecto?

</div>
<div class="flashcard-back">

**R:** c) Cada 10 minutos. El demonio `sadc` (system activity data collector) se ejecuta tipicamente cada 10 minutos a traves de una entrada en cron (`/etc/cron.d/sysstat`). Esta frecuencia ofrece un buen equilibrio entre granularidad de datos y uso de recursos del propio sistema de monitorizacion. Este intervalo se puede ajustar modificando la configuracion del cron.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-008">
<div class="flashcard-front">

**P:** Un servidor de base de datos tiene 16 GB de RAM. Actualmente usa 12 GB con 200 conexiones concurrentes. Se espera que el numero de conexiones se duplique en 6 meses. ¿Que accion es mas apropiada?

</div>
<div class="flashcard-back">

**R:** b) Ampliar a 32 GB de RAM anticipandose al crecimiento. Con 200 conexiones usando 12 GB, cada conexion consume aproximadamente 60 MB. Al duplicar a 400 conexiones, se necesitarian ~24 GB. Ampliar a 32 GB proporciona margen suficiente. Reducir conexiones limita el servicio, y migrar sin ampliar solo traslada el problema. La planificacion proactiva de capacidad indica ampliar recursos antes de alcanzar el limite.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que tipo de patron de crecimiento describe mejor la situacion de una tienda en linea que experimenta picos de trafico en noviembre-diciembre cada ano?

</div>
<div class="flashcard-back">

**R:** c) Crecimiento estacional o ciclico. El patron estacional o ciclico se caracteriza por picos de uso que se repiten periodicamente. En el caso de una tienda en linea, los picos de noviembre-diciembre (Black Friday, Navidad) se repiten cada ano. Este tipo de patron requiere una planificacion que considere la capacidad para los picos, no solo para el uso promedio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-010">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre la planificacion de capacidad es CORRECTA?

</div>
<div class="flashcard-back">

**R:** c) Es un proceso continuo que combina monitorizacion, analisis, prediccion y planificacion. La planificacion de capacidad es un ciclo continuo: se monitoriza el uso actual, se analizan tendencias, se predicen necesidades futuras, se planifican acciones y se implementan. Despues se vuelve a monitorizar para verificar. No se limita a hardware, incluye optimizacion de software, redistribucion de carga y ajustes de configuracion. Es proactiva, no reactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-011">
<div class="flashcard-front">

**P:** Un servidor web tiene un directorio de logs que crece 2 GB por semana. El disco de logs tiene 100 GB disponibles. Si la politica de retencion exige mantener los logs durante 1 ano, ¿que capacidad minima de disco se necesitaria?

</div>
<div class="flashcard-back">

**R:** b) 104 GB. Un ano tiene 52 semanas. Con un crecimiento de 2 GB/semana, se necesitan 52 x 2 = 104 GB para un ano completo de logs. Los 100 GB disponibles actuales no serian suficientes. En la practica, habria que considerar un margen de seguridad adicional (80% de uso recomendado), lo que elevaria la necesidad real a unos 130 GB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-012">
<div class="flashcard-front">

**P:** ¿Que formato de base de datos utiliza `collectd` por defecto para almacenar las metricas del sistema y cual es su caracteristica principal?

</div>
<div class="flashcard-back">

**R:** b) RRD (Round Robin Database), tamano fijo que rota datos antiguos automaticamente. Los archivos RRD tienen la ventaja de mantener un tamano fijo independientemente del tiempo de recopilacion. Los datos mas recientes se almacenan con mayor granularidad, mientras que los mas antiguos se consolidan (promedian) automaticamente. Esto los hace ideales para datos de series temporales a largo plazo sin preocuparse por el crecimiento del almacenamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-013">
<div class="flashcard-front">

**P:** Un administrador necesita presentar a la direccion una proyeccion de crecimiento del uso de CPU para los proximos 6 meses. ¿Cual es la fuente de datos mas adecuada?

</div>
<div class="flashcard-back">

**R:** b) Datos historicos recopilados por `sar` o `collectd` durante los ultimos meses. Para realizar predicciones fiables se necesitan datos historicos que cubran un periodo significativo. `sar` y `collectd` almacenan datos historicos que permiten identificar tendencias de crecimiento. Una sola ejecucion de `top` o `vmstat` solo muestra el estado actual, no tendencias. `/proc/cpuinfo` muestra la configuracion del hardware, no el uso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-014">
<div class="flashcard-front">

**P:** ¿Que tipo de patron de crecimiento describe mejor la situacion donde una empresa despliega una nueva aplicacion de CRM y el uso de memoria del servidor aumenta abruptamente de 4 GB a 10 GB?

</div>
<div class="flashcard-back">

**R:** d) Crecimiento escalonado. El crecimiento escalonado se caracteriza por aumentos bruscos asociados a eventos concretos, como el despliegue de una nueva aplicacion. El uso de recursos salta de un nivel a otro sin una transicion gradual. Este tipo de crecimiento es predecible si se conocen los planes de despliegue, pero impredecible si no hay comunicacion entre equipos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-015">
<div class="flashcard-front">

**P:** Al planificar capacidad, ¿a que porcentaje de uso de disco se recomienda tipicamente comenzar a planificar la ampliacion?

</div>
<div class="flashcard-back">

**R:** b) 70-80%. La practica recomendada es comenzar a planificar ampliaciones cuando el uso alcanza el 70-80% de la capacidad. Esto proporciona un margen de seguridad para el crecimiento durante el tiempo que tarda en ejecutarse la ampliacion (compras, instalacion, migracion). Esperar hasta el 95% o mas implica riesgo de quedarse sin espacio antes de poder actuar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que herramienta permite generar graficos de tendencia directamente a partir de archivos RRD?

</div>
<div class="flashcard-back">

**R:** b) `rrdtool graph`. `rrdtool` es la herramienta de linea de comandos que permite generar graficos PNG a partir de datos almacenados en archivos RRD. El subcomando `graph` permite definir el periodo, colores, leyendas y fuentes de datos para crear visualizaciones de tendencias. Herramientas como Cacti y MRTG usan `rrdtool` internamente para generar sus graficos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-017">
<div class="flashcard-front">

**P:** Un servidor de archivos tiene actualmente 2 TB de almacenamiento con 1.5 TB usados. El crecimiento mensual es de 50 GB. Un proyecto nuevo anadira 200 usuarios que generaran 500 MB cada uno al mes. ¿En cuantos meses aproximadamente se alcanzara el 80% de capacidad adicional disponible si se amplia a 4 TB?

</div>
<div class="flashcard-back">

**R:** b) 15 meses. Capacidad total nueva: 4 TB. Umbral del 80%: 3.2 TB. Espacio hasta el umbral: 3.2 TB - 1.5 TB = 1.7 TB = 1700 GB. Crecimiento mensual total: 50 GB (actual) + 200 x 0.5 GB (nuevos usuarios) = 50 + 100 = 150 GB/mes. Meses hasta el umbral: 1700 / 150 = 11.3 meses. Con margen de planificacion, aproximadamente 15 meses considerando variaciones en el crecimiento y factor de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-018">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes NO es una estrategia valida a corto plazo para abordar un problema de falta de espacio en disco?

</div>
<div class="flashcard-back">

**R:** c) Implementar una SAN (Storage Area Network). Implementar una SAN es una solucion a largo plazo que requiere planificacion, presupuesto, hardware y configuracion. Las estrategias a corto plazo son aquellas que pueden ejecutarse rapidamente: limpiar archivos temporales, comprimir datos, ajustar rotacion de logs, mover datos a otros discos disponibles. La planificacion de capacidad debe distinguir entre acciones inmediatas y proyectos a largo plazo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que metrica de `sar` seria la mas relevante para predecir si un servidor necesitara mas RAM en el futuro?

</div>
<div class="flashcard-back">

**R:** b) `sar -r` (estadisticas de memoria) observando la tendencia de `%memused` y `kbswpused`. Para predecir necesidades de RAM, se deben analizar las tendencias historicas de uso de memoria con `sar -r`. Los indicadores clave son `%memused` (porcentaje de memoria utilizada) y `kbswpused` (swap utilizado). Un aumento progresivo en el uso de memoria y la aparicion de uso de swap son senales claras de que se necesitara mas RAM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que ventaja tiene el escalado horizontal sobre el escalado vertical para un servidor web con trafico creciente?

</div>
<div class="flashcard-back">

**R:** c) Ofrece mayor escalabilidad a largo plazo y redundancia, ya que se pueden agregar mas servidores sin limite teorico. El escalado horizontal (agregar mas maquinas) ofrece escalabilidad practicamente ilimitada y ademas proporciona redundancia: si un servidor falla, los demas pueden seguir atendiendo peticiones. El escalado vertical tiene limites fisicos (maximo de RAM, CPUs). Sin embargo, el escalado horizontal es mas complejo de implementar y puede requerir cambios en la aplicacion y un balanceador de carga.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando permite exportar los datos recopilados por `sar` a formato CSV para analisis en una hoja de calculo?

</div>
<div class="flashcard-back">

**R:** sadf -d. El comando `sadf` (System Activity Data Formatter) con la opcion `-d` genera salida en formato CSV (separado por punto y coma). Por ejemplo, `sadf -d /var/log/sysstat/sa15 -- -u` exportaria los datos de CPU del dia 15 en formato CSV. `sadf` es la herramienta puente entre los datos binarios de sar y formatos analizables por otras herramientas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando muestra el espacio en disco utilizado y disponible de todos los sistemas de archivos montados en formato legible?

</div>
<div class="flashcard-back">

**R:** df -h. El comando `df -h` (disk free, human-readable) muestra el espacio total, usado, disponible y porcentaje de uso de cada sistema de archivos montado, en unidades legibles (KB, MB, GB, TB). Es un punto de datos esencial para la planificacion de capacidad de almacenamiento cuando se registra periodicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando genera un grafico PNG de tendencia de uso de CPU a partir de un archivo RRD con datos de los ultimos 30 dias?

</div>
<div class="flashcard-back">

**R:** rrdtool graph. El comando `rrdtool graph` permite generar graficos de tendencia en formato PNG a partir de datos almacenados en archivos RRD. Por ejemplo: `rrdtool graph tendencia.png --start -30d DEF:cpu=archivo.rrd:value:AVERAGE LINE1:cpu#FF0000`. Las opciones `--start` y `--end` definen el periodo temporal del grafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando permite ver cuanto espacio en disco ocupa un directorio especifico, como `/var/log`, en formato resumido y legible?

</div>
<div class="flashcard-back">

**R:** du -sh /var/log. El comando `du -sh /var/log` muestra el tamano total del directorio `/var/log` en formato legible (`-h` human-readable) y resumido (`-s` summary, sin mostrar cada subdirectorio individualmente). Es util para monitorizar el crecimiento de directorios especificos a lo largo del tiempo como parte de la planificacion de capacidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando muestra los datos historicos de uso de disco recopilados por `sar` del dia 10 del mes?

</div>
<div class="flashcard-back">

**R:** sar -d -f /var/log/sysstat/sa10. La opcion `-d` de `sar` muestra estadisticas de disco, y `-f` especifica el archivo de datos historicos. Los archivos se almacenan en `/var/log/sysstat/` (Debian/Ubuntu) o `/var/log/sa/` (Red Hat/CentOS) con nombres como `sa10` donde el numero corresponde al dia del mes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La recopilacion de datos historicos con herramientas como `sar` y `collectd` es ...

</div>
<div class="flashcard-back">

**R:** La recopilacion de datos historicos con herramientas como `sar` y `collectd` es fundamental para la prediccion de necesidades. Sin datos historicos no es posible identificar tendencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Se espera que puedas realizar calculos basicos de prediccion de crecimiento de d...

</div>
<div class="flashcard-back">

**R:** Se espera que puedas realizar calculos basicos de prediccion de crecimiento de disco. Siempre ten en cuenta un margen de seguridad (tipicamente, actuar cuando se alcanza el 80% de uso).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `sadf` es el comando para convertir datos de sar a formatos legibles por otras h...

</div>
<div class="flashcard-back">

**R:** `sadf` es el comando para convertir datos de sar a formatos legibles por otras herramientas (CSV, XML, etc.). Es la herramienta puente entre la monitorizacion y el analisis.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Debes entender que la prediccion no es solo sobre hardware. Optimizar software, ...

</div>
<div class="flashcard-back">

**R:** Debes entender que la prediccion no es solo sobre hardware. Optimizar software, ajustar configuraciones y redistribuir servicios son estrategias validas que deben considerarse antes de comprar hardware nuevo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son Estrategias de actuacion?

</div>
<div class="flashcard-back">

**R:** Una vez identificada la tendencia, las acciones posibles incluyen:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son Documentacion y comunicacion?

</div>
<div class="flashcard-back">

**R:** La planificacion de capacidad debe documentarse:

</div>
</div>

---

