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

> 17 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: La recopilacion de datos historicos con herramientas como `sar` y `collectd` es ...

</div>
<div class="flashcard-back">

**R:** La recopilacion de datos historicos con herramientas como `sar` y `collectd` es fundamental para la prediccion de necesidades. Sin datos historicos no es posible identificar tendencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-012">
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

<div class="flashcard" data-id="200.2-fc-013">
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

<div class="flashcard" data-id="200.2-fc-014">
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

<div class="flashcard" data-id="200.2-fc-015">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** La prediccion de necesidades de recursos es la extension logica de la monitorizacion del uso actual. Mientras que el subtema 200.1 se centra en medir lo que esta ocurriendo ahora, este subtema se enfoc

</div>
</div>

---

<div class="flashcard-deck" data-subtema="200.2">
</div>

<div class="flashcard" data-id="200.2-fc-016">
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

<div class="flashcard" data-id="200.2-fc-017">
<div class="flashcard-front">

**P:** Que es/son Documentacion y comunicacion?

</div>
<div class="flashcard-back">

**R:** La planificacion de capacidad debe documentarse:

</div>
</div>

---

