---
title: "200.2 - Prediccion de necesidades"
tags: [lpic-2, examen-201, tema-200, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "200"
subtema: "200.2"
---

# 200.2 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un servidor tiene una particion `/data` de 500 GB. En los ultimos 4 meses, el uso ha crecido de 200 GB a 320 GB. Suponiendo un crecimiento lineal, ¿en cuantos meses aproximadamente se llenara la particion al 80%?

a) 2 meses
b) 3 meses
c) 6 meses
d) 10 meses

<details>
<summary>Respuesta</summary>

**b) 3 meses**

Crecimiento mensual: (320 - 200) / 4 = 30 GB/mes. El umbral del 80% es 400 GB. Espacio hasta el umbral: 400 - 320 = 80 GB. Meses restantes: 80 / 30 = 2.67, es decir aproximadamente 3 meses.
</details>

---

### Pregunta 2

¿Que comando permite exportar datos historicos de `sar` en formato CSV para su posterior analisis en una hoja de calculo?

a) `sar -u --csv`
b) `sar -u --export=csv`
c) `sadf -d /var/log/sysstat/sa15 -- -u`
d) `sarexport -f csv /var/log/sysstat/sa15`

<details>
<summary>Respuesta</summary>

**c) `sadf -d /var/log/sysstat/sa15 -- -u`**

`sadf` (System Activity Data Formatter) es la herramienta complementaria de `sar` que permite exportar los datos a diferentes formatos. La opcion `-d` genera salida en formato CSV separado por punto y coma. El doble guion `--` separa las opciones de `sadf` de las opciones que se pasan a `sar` (en este caso `-u` para CPU).
</details>

---

### Pregunta 3

¿Cual de los siguientes NO es un factor que debe considerarse al predecir las necesidades futuras de recursos de un servidor?

a) El crecimiento esperado del numero de usuarios
b) El color del chasis del servidor
c) Los planes de despliegue de nuevas aplicaciones
d) Las politicas de retencion de datos y logs

<details>
<summary>Respuesta</summary>

**b) El color del chasis del servidor**

La planificacion de capacidad debe considerar factores como el crecimiento de usuarios, nuevas aplicaciones, politicas de retencion, estacionalidad del negocio, regulaciones y cambios tecnologicos. Las caracteristicas fisicas esteticas del hardware no tienen ninguna relevancia en la planificacion de capacidad.
</details>

---

### Pregunta 4

Un administrador observa que el load average de un servidor de 4 nucleos ha pasado de un promedio de 1.5 hace tres meses a 2.8 actualmente. Si la tendencia continua, ¿cual es la mejor accion proactiva?

a) No hacer nada, ya que el load average esta por debajo del numero de nucleos
b) Planificar una ampliacion de CPU o redistribucion de carga para los proximos meses
c) Reiniciar el servidor inmediatamente
d) Eliminar todos los procesos de usuario

<details>
<summary>Respuesta</summary>

**b) Planificar una ampliacion de CPU o redistribucion de carga para los proximos meses**

Aunque el load average actual (2.8) esta por debajo de los 4 nucleos, la tendencia creciente indica que en pocos meses podria superar la capacidad. La planificacion de capacidad consiste precisamente en actuar antes de que los problemas se manifiesten. Esperar a que el sistema se sature implicaria downtime no planificado.
</details>

---

### Pregunta 5

¿Que herramienta almacena datos en formato RRD (Round Robin Database) y se usa comumente para generar graficos de tendencias a largo plazo?

a) sar
b) vmstat
c) collectd
d) top

<details>
<summary>Respuesta</summary>

**c) collectd**

`collectd` es un demonio que recopila metricas del sistema periodicamente y las puede almacenar en bases de datos RRD. Los archivos RRD tienen la ventaja de mantener un tamano fijo independientemente del tiempo de recopilacion, ya que rotan los datos mas antiguos con menor granularidad. `sar` usa su propio formato binario, y `vmstat`/`top` no almacenan datos.
</details>

---

### Pregunta 6

¿Cual es la diferencia principal entre escalado vertical y escalado horizontal?

a) Escalado vertical agrega mas maquinas, escalado horizontal mejora la maquina existente
b) Escalado vertical mejora recursos de la maquina existente, escalado horizontal agrega mas maquinas
c) Escalado vertical es para disco, escalado horizontal es para CPU
d) No hay diferencia, son sinonimos

<details>
<summary>Respuesta</summary>

**b) Escalado vertical mejora recursos de la maquina existente, escalado horizontal agrega mas maquinas**

Escalado vertical (scale up) implica agregar mas recursos al servidor actual: mas RAM, mejor CPU, discos mas grandes. Escalado horizontal (scale out) implica agregar mas servidores y distribuir la carga entre ellos. Cada estrategia tiene ventajas: vertical es mas simple de implementar, horizontal ofrece mayor escalabilidad a largo plazo.
</details>

---

### Pregunta 7

¿Con que frecuencia tipica recopila datos el demonio `sadc` del paquete sysstat cuando esta configurado por defecto?

a) Cada segundo
b) Cada minuto
c) Cada 10 minutos
d) Cada hora

<details>
<summary>Respuesta</summary>

**c) Cada 10 minutos**

El demonio `sadc` (system activity data collector) se ejecuta tipicamente cada 10 minutos a traves de una entrada en cron (`/etc/cron.d/sysstat`). Esta frecuencia ofrece un buen equilibrio entre granularidad de datos y uso de recursos del propio sistema de monitorizacion. Este intervalo se puede ajustar modificando la configuracion del cron.
</details>

---

### Pregunta 8

Un servidor de base de datos tiene 16 GB de RAM. Actualmente usa 12 GB con 200 conexiones concurrentes. Se espera que el numero de conexiones se duplique en 6 meses. ¿Que accion es mas apropiada?

a) No hacer nada, hay 4 GB libres
b) Ampliar a 32 GB de RAM anticipandose al crecimiento
c) Reducir el numero maximo de conexiones permitidas
d) Migrar la base de datos a otro servidor con menos carga

<details>
<summary>Respuesta</summary>

**b) Ampliar a 32 GB de RAM anticipandose al crecimiento**

Con 200 conexiones usando 12 GB, cada conexion consume aproximadamente 60 MB. Al duplicar a 400 conexiones, se necesitarian ~24 GB. Ampliar a 32 GB proporciona margen suficiente. Reducir conexiones limita el servicio, y migrar sin ampliar solo traslada el problema. La planificacion proactiva de capacidad indica ampliar recursos antes de alcanzar el limite.
</details>

---

### Pregunta 9

¿Que tipo de patron de crecimiento describe mejor la situacion de una tienda en linea que experimenta picos de trafico en noviembre-diciembre cada ano?

a) Crecimiento lineal
b) Crecimiento exponencial
c) Crecimiento estacional o ciclico
d) Crecimiento escalonado

<details>
<summary>Respuesta</summary>

**c) Crecimiento estacional o ciclico**

El patron estacional o ciclico se caracteriza por picos de uso que se repiten periodicamente. En el caso de una tienda en linea, los picos de noviembre-diciembre (Black Friday, Navidad) se repiten cada ano. Este tipo de patron requiere una planificacion que considere la capacidad para los picos, no solo para el uso promedio.
</details>

---

### Pregunta 10

¿Cual de las siguientes afirmaciones sobre la planificacion de capacidad es CORRECTA?

a) Solo debe realizarse cuando el sistema ya presenta problemas de rendimiento
b) Se basa exclusivamente en el uso actual de recursos sin considerar tendencias
c) Es un proceso continuo que combina monitorizacion, analisis, prediccion y planificacion
d) Solo involucra la compra de hardware nuevo

<details>
<summary>Respuesta</summary>

**c) Es un proceso continuo que combina monitorizacion, analisis, prediccion y planificacion**

La planificacion de capacidad es un ciclo continuo: se monitoriza el uso actual, se analizan tendencias, se predicen necesidades futuras, se planifican acciones y se implementan. Despues se vuelve a monitorizar para verificar. No se limita a hardware, incluye optimizacion de software, redistribucion de carga y ajustes de configuracion. Es proactiva, no reactiva.
</details>

---

### Pregunta 11

Un servidor web tiene un directorio de logs que crece 2 GB por semana. El disco de logs tiene 100 GB disponibles. Si la politica de retencion exige mantener los logs durante 1 ano, ¿que capacidad minima de disco se necesitaria?

a) 52 GB
b) 104 GB
c) 156 GB
d) 200 GB

<details><summary>Respuesta</summary>

**b) 104 GB**

Un ano tiene 52 semanas. Con un crecimiento de 2 GB/semana, se necesitan 52 x 2 = 104 GB para un ano completo de logs. Los 100 GB disponibles actuales no serian suficientes. En la practica, habria que considerar un margen de seguridad adicional (80% de uso recomendado), lo que elevaria la necesidad real a unos 130 GB.

</details>

---

### Pregunta 12

¿Que formato de base de datos utiliza `collectd` por defecto para almacenar las metricas del sistema y cual es su caracteristica principal?

a) SQLite, almacenamiento relacional ilimitado
b) RRD (Round Robin Database), tamano fijo que rota datos antiguos automaticamente
c) CSV, archivos de texto plano separados por comas
d) JSON, almacenamiento en formato de objetos JavaScript

<details><summary>Respuesta</summary>

**b) RRD (Round Robin Database), tamano fijo que rota datos antiguos automaticamente**

Los archivos RRD tienen la ventaja de mantener un tamano fijo independientemente del tiempo de recopilacion. Los datos mas recientes se almacenan con mayor granularidad, mientras que los mas antiguos se consolidan (promedian) automaticamente. Esto los hace ideales para datos de series temporales a largo plazo sin preocuparse por el crecimiento del almacenamiento.

</details>

---

### Pregunta 13

Un administrador necesita presentar a la direccion una proyeccion de crecimiento del uso de CPU para los proximos 6 meses. ¿Cual es la fuente de datos mas adecuada?

a) Una sola ejecucion de `top` durante 5 minutos
b) Datos historicos recopilados por `sar` o `collectd` durante los ultimos meses
c) La salida actual de `vmstat 1 10`
d) La informacion de `/proc/cpuinfo`

<details><summary>Respuesta</summary>

**b) Datos historicos recopilados por `sar` o `collectd` durante los ultimos meses**

Para realizar predicciones fiables se necesitan datos historicos que cubran un periodo significativo. `sar` y `collectd` almacenan datos historicos que permiten identificar tendencias de crecimiento. Una sola ejecucion de `top` o `vmstat` solo muestra el estado actual, no tendencias. `/proc/cpuinfo` muestra la configuracion del hardware, no el uso.

</details>

---

### Pregunta 14

¿Que tipo de patron de crecimiento describe mejor la situacion donde una empresa despliega una nueva aplicacion de CRM y el uso de memoria del servidor aumenta abruptamente de 4 GB a 10 GB?

a) Crecimiento lineal
b) Crecimiento exponencial
c) Crecimiento estacional
d) Crecimiento escalonado

<details><summary>Respuesta</summary>

**d) Crecimiento escalonado**

El crecimiento escalonado se caracteriza por aumentos bruscos asociados a eventos concretos, como el despliegue de una nueva aplicacion. El uso de recursos salta de un nivel a otro sin una transicion gradual. Este tipo de crecimiento es predecible si se conocen los planes de despliegue, pero impredecible si no hay comunicacion entre equipos.

</details>

---

### Pregunta 15

Al planificar capacidad, ¿a que porcentaje de uso de disco se recomienda tipicamente comenzar a planificar la ampliacion?

a) 50%
b) 70-80%
c) 95%
d) 100%

<details><summary>Respuesta</summary>

**b) 70-80%**

La practica recomendada es comenzar a planificar ampliaciones cuando el uso alcanza el 70-80% de la capacidad. Esto proporciona un margen de seguridad para el crecimiento durante el tiempo que tarda en ejecutarse la ampliacion (compras, instalacion, migracion). Esperar hasta el 95% o mas implica riesgo de quedarse sin espacio antes de poder actuar.

</details>

---

### Pregunta 16

¿Que herramienta permite generar graficos de tendencia directamente a partir de archivos RRD?

a) `sar`
b) `rrdtool graph`
c) `vmstat`
d) `df`

<details><summary>Respuesta</summary>

**b) `rrdtool graph`**

`rrdtool` es la herramienta de linea de comandos que permite generar graficos PNG a partir de datos almacenados en archivos RRD. El subcomando `graph` permite definir el periodo, colores, leyendas y fuentes de datos para crear visualizaciones de tendencias. Herramientas como Cacti y MRTG usan `rrdtool` internamente para generar sus graficos.

</details>

---

### Pregunta 17

Un servidor de archivos tiene actualmente 2 TB de almacenamiento con 1.5 TB usados. El crecimiento mensual es de 50 GB. Un proyecto nuevo anadira 200 usuarios que generaran 500 MB cada uno al mes. ¿En cuantos meses aproximadamente se alcanzara el 80% de capacidad adicional disponible si se amplia a 4 TB?

a) 10 meses
b) 15 meses
c) 20 meses
d) 30 meses

<details><summary>Respuesta</summary>

**b) 15 meses**

Capacidad total nueva: 4 TB. Umbral del 80%: 3.2 TB. Espacio hasta el umbral: 3.2 TB - 1.5 TB = 1.7 TB = 1700 GB. Crecimiento mensual total: 50 GB (actual) + 200 x 0.5 GB (nuevos usuarios) = 50 + 100 = 150 GB/mes. Meses hasta el umbral: 1700 / 150 = 11.3 meses. Con margen de planificacion, aproximadamente 15 meses considerando variaciones en el crecimiento y factor de seguridad.

</details>

---

### Pregunta 18

¿Cual de las siguientes NO es una estrategia valida a corto plazo para abordar un problema de falta de espacio en disco?

a) Eliminar archivos temporales y logs antiguos
b) Comprimir archivos poco utilizados
c) Implementar una SAN (Storage Area Network)
d) Ajustar las politicas de rotacion de logs

<details><summary>Respuesta</summary>

**c) Implementar una SAN (Storage Area Network)**

Implementar una SAN es una solucion a largo plazo que requiere planificacion, presupuesto, hardware y configuracion. Las estrategias a corto plazo son aquellas que pueden ejecutarse rapidamente: limpiar archivos temporales, comprimir datos, ajustar rotacion de logs, mover datos a otros discos disponibles. La planificacion de capacidad debe distinguir entre acciones inmediatas y proyectos a largo plazo.

</details>

---

### Pregunta 19

¿Que metrica de `sar` seria la mas relevante para predecir si un servidor necesitara mas RAM en el futuro?

a) `sar -u` (estadisticas de CPU)
b) `sar -r` (estadisticas de memoria) observando la tendencia de `%memused` y `kbswpused`
c) `sar -d` (estadisticas de disco)
d) `sar -n DEV` (estadisticas de red)

<details><summary>Respuesta</summary>

**b) `sar -r` (estadisticas de memoria) observando la tendencia de `%memused` y `kbswpused`**

Para predecir necesidades de RAM, se deben analizar las tendencias historicas de uso de memoria con `sar -r`. Los indicadores clave son `%memused` (porcentaje de memoria utilizada) y `kbswpused` (swap utilizado). Un aumento progresivo en el uso de memoria y la aparicion de uso de swap son senales claras de que se necesitara mas RAM.

</details>

---

### Pregunta 20

¿Que ventaja tiene el escalado horizontal sobre el escalado vertical para un servidor web con trafico creciente?

a) Es mas barato a corto plazo
b) No requiere ningun cambio en la arquitectura de la aplicacion
c) Ofrece mayor escalabilidad a largo plazo y redundancia, ya que se pueden agregar mas servidores sin limite teorico
d) Es mas facil de implementar y no necesita balanceador de carga

<details><summary>Respuesta</summary>

**c) Ofrece mayor escalabilidad a largo plazo y redundancia, ya que se pueden agregar mas servidores sin limite teorico**

El escalado horizontal (agregar mas maquinas) ofrece escalabilidad practicamente ilimitada y ademas proporciona redundancia: si un servidor falla, los demas pueden seguir atendiendo peticiones. El escalado vertical tiene limites fisicos (maximo de RAM, CPUs). Sin embargo, el escalado horizontal es mas complejo de implementar y puede requerir cambios en la aplicacion y un balanceador de carga.

</details>

---

### Pregunta 21

¿Que comando permite exportar los datos recopilados por `sar` a formato CSV para analisis en una hoja de calculo?

<input type="text" class="fill-blank" data-answer="sadf -d" data-alt="sadf" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sadf -d**

El comando `sadf` (System Activity Data Formatter) con la opcion `-d` genera salida en formato CSV (separado por punto y coma). Por ejemplo, `sadf -d /var/log/sysstat/sa15 -- -u` exportaria los datos de CPU del dia 15 en formato CSV. `sadf` es la herramienta puente entre los datos binarios de sar y formatos analizables por otras herramientas.

</details>

---

### Pregunta 22

¿Que comando muestra el espacio en disco utilizado y disponible de todos los sistemas de archivos montados en formato legible?

<input type="text" class="fill-blank" data-answer="df -h" data-alt="df --human-readable" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**df -h**

El comando `df -h` (disk free, human-readable) muestra el espacio total, usado, disponible y porcentaje de uso de cada sistema de archivos montado, en unidades legibles (KB, MB, GB, TB). Es un punto de datos esencial para la planificacion de capacidad de almacenamiento cuando se registra periodicamente.

</details>

---

### Pregunta 23

¿Que comando genera un grafico PNG de tendencia de uso de CPU a partir de un archivo RRD con datos de los ultimos 30 dias?

<input type="text" class="fill-blank" data-answer="rrdtool graph" data-alt="rrdtool" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rrdtool graph**

El comando `rrdtool graph` permite generar graficos de tendencia en formato PNG a partir de datos almacenados en archivos RRD. Por ejemplo: `rrdtool graph tendencia.png --start -30d DEF:cpu=archivo.rrd:value:AVERAGE LINE1:cpu#FF0000`. Las opciones `--start` y `--end` definen el periodo temporal del grafico.

</details>

---

### Pregunta 24

¿Que comando permite ver cuanto espacio en disco ocupa un directorio especifico, como `/var/log`, en formato resumido y legible?

<input type="text" class="fill-blank" data-answer="du -sh /var/log" data-alt="du -hs /var/log" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**du -sh /var/log**

El comando `du -sh /var/log` muestra el tamano total del directorio `/var/log` en formato legible (`-h` human-readable) y resumido (`-s` summary, sin mostrar cada subdirectorio individualmente). Es util para monitorizar el crecimiento de directorios especificos a lo largo del tiempo como parte de la planificacion de capacidad.

</details>

---

### Pregunta 25

¿Que comando muestra los datos historicos de uso de disco recopilados por `sar` del dia 10 del mes?

<input type="text" class="fill-blank" data-answer="sar -d -f /var/log/sysstat/sa10" data-alt="sar -d -f /var/log/sa/sa10" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sar -d -f /var/log/sysstat/sa10**

La opcion `-d` de `sar` muestra estadisticas de disco, y `-f` especifica el archivo de datos historicos. Los archivos se almacenan en `/var/log/sysstat/` (Debian/Ubuntu) o `/var/log/sa/` (Red Hat/CentOS) con nombres como `sa10` donde el numero corresponde al dia del mes.

</details>
