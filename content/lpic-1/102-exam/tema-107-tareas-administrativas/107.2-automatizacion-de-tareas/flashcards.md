---
title: "107.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "107.2"
---

# Flashcards: 107.2 - Automatizacion De Tareas

> 32 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-001">
<div class="flashcard-front">

**P:** Cual de las siguientes entradas de crontab ejecuta un script todos los dias a las 3:30 AM?

</div>
<div class="flashcard-back">

**R:** b) `30 3 * * * /opt/backup.sh`. El formato del crontab es: `minuto hora dia_mes mes dia_semana comando`. En `30 3 * * *`: minuto 30, hora 3, cualquier dia del mes (`*`), cualquier mes (`*`), cualquier dia de la semana (`*`). La opcion (a) tiene los campos de minuto y hora invertidos (ejecutaria a las 30:03, que es invalido). La opcion (d) usa `1-7` para el dia de semana, que aunque tambien incluye todos los dias, es redundante respecto a `*`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre el formato del crontab de usuario (`crontab -e`) y el archivo `/etc/crontab`?

</div>
<div class="flashcard-back">

**R:** b) El crontab del sistema incluye un campo extra que especifica el usuario que ejecuta el comando. El crontab de usuario tiene 5 campos de tiempo + comando (6 elementos): `min hora dia mes dia_sem comando`. El crontab del sistema (`/etc/crontab` y archivos en `/etc/cron.d/`) tiene 5 campos de tiempo + campo USUARIO + comando (7 elementos): `min hora dia mes dia_sem usuario comando`. El campo de usuario extra especifica con que cuenta se ejecuta el comando. Los crontabs de usuario se ejecutan como el usuario que los creo; los del sistema pueden especificar cualquier usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-003">
<div class="flashcard-front">

**P:** Un servidor tiene solo el archivo `/etc/cron.deny` con el contenido `ana`. Que ocurre si se crea `/etc/cron.allow` con el contenido `sandra`?

</div>
<div class="flashcard-back">

**R:** b) Solo `sandra` podra usar cron; todos los demas (incluida `ana`) seran bloqueados. La logica de control de acceso de cron es: si `/etc/cron.allow` existe, SOLO los usuarios listados pueden usar cron (cron.deny se ignora completamente). Si solo existe `cron.deny`, todos pueden usar cron excepto los listados. Al crear `cron.allow` con solo `sandra`, se activa la regla mas restrictiva: unicamente `sandra` tendra acceso a cron, y `cron.deny` dejara de tener efecto. `cron.allow` siempre tiene prioridad absoluta sobre `cron.deny`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-004">
<div class="flashcard-front">

**P:** Que es anacron y cual es su principal ventaja sobre cron?

</div>
<div class="flashcard-back">

**R:** b) Es un complemento de cron que ejecuta tareas perdidas cuando el sistema estaba apagado. **Anacron** esta disenado para sistemas que NO estan encendidos 24/7 (laptops, estaciones de trabajo). Si una tarea programada no se ejecuto porque el sistema estaba apagado, anacron la ejecuta cuando el sistema se encienda. Registra la ultima ejecucion en `/var/spool/anacron/`. A diferencia de cron, su precision minima es en dias (no minutos), solo puede ser ejecutado por root, y no es un daemon permanente sino que es invocado periodicamente. Su configuracion esta en `/etc/anacrontab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-005">
<div class="flashcard-front">

**P:** Que comando de `at` se utiliza para listar las tareas pendientes y cual para eliminar una tarea con ID 3?

</div>
<div class="flashcard-back">

**R:** b) `atq` (o `at -l`) y `atrm 3` (o `at -d 3`). `atq` (equivalente a `at -l`) lista todas las tareas pendientes mostrando el ID, fecha/hora programada y usuario. `atrm 3` (equivalente a `at -d 3`) elimina la tarea con ID 3. `at` se usa para tareas **unicas** (se ejecutan una vez y se eliminan automaticamente). Se puede programar con formatos como `at 15:00`, `at now + 2 hours`, `at noon tomorrow`. `batch` es similar pero ejecuta cuando la carga del sistema es baja (por defecto < 0.8).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-006">
<div class="flashcard-front">

**P:** Cual de los siguientes es el formato correcto de una linea en `/etc/anacrontab`?

</div>
<div class="flashcard-back">

**R:** b) `periodo retardo identificador comando`. El formato de `/etc/anacrontab` tiene 4 campos: **periodo** (frecuencia en dias, por ejemplo 1 = diario, 7 = semanal, `@monthly`), **retardo** (minutos de espera antes de ejecutar, para no sobrecargar al arrancar), **identificador** (nombre unico usado para registrar la ultima ejecucion en `/var/spool/anacron/`) y **comando** (lo que se ejecuta). Ejemplo: `1 5 cron.daily nice run-parts /etc/cron.daily` ejecuta las tareas diarias con 5 minutos de retardo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-007">
<div class="flashcard-front">

**P:** Que diferencia hay entre los directorios `/etc/cron.daily/` y `/etc/cron.d/`?

</div>
<div class="flashcard-back">

**R:** b) `/etc/cron.daily/` contiene scripts ejecutables (sin formato crontab); `/etc/cron.d/` contiene archivos en formato crontab (con campo de usuario). `/etc/cron.daily/` (y hourly, weekly, monthly) contiene **scripts ejecutables** que se ejecutan con `run-parts` a la frecuencia indicada por el nombre del directorio. Los scripts deben tener permiso de ejecucion y son scripts normales con shebang (no tienen formato crontab). `/etc/cron.d/` contiene **archivos en formato crontab** (igual que `/etc/crontab`) con el campo de usuario incluido, y permiten programacion con precision de minutos. Son instalados tipicamente por paquetes de software.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-008">
<div class="flashcard-front">

**P:** Que dos archivos se necesitan para crear un timer de systemd y que opcion asegura que se ejecuten tareas perdidas si el sistema estaba apagado?

</div>
<div class="flashcard-back">

**R:** a) Un archivo `.timer` y un `.service`; la opcion `Persistent=true`. Los timers de systemd requieren dos archivos: un `.timer` (define cuando se ejecuta, con opciones como `OnCalendar`) y un `.service` (define que se ejecuta, con `ExecStart`). La opcion `Persistent=true` en la seccion `[Timer]` asegura que si se perdio una ejecucion porque el sistema estaba apagado, se ejecute al encender (similar a anacron). Se gestionan con `systemctl enable/start nombre.timer` y se listan con `systemctl list-timers`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-009">
<div class="flashcard-front">

**P:** Que significa la expresion `*/15 * * * *` en un crontab?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar cada 15 minutos (en los minutos 0, 15, 30 y 45 de cada hora). El operador `/` indica incremento: `*/15` en el campo de minutos significa "cada 15 minutos", ejecutandose en los minutos 0, 15, 30 y 45 de cada hora. Los simbolos especiales en crontab son: `*` (cualquier valor), `,` (lista de valores, ej: `1,15,30`), `-` (rango, ej: `1-5`), `/` (incremento, ej: `*/10`). Tambien existen cadenas especiales como `@daily` (equivalente a `0 0 * * *`), `@hourly` (`0 * * * *`) y `@reboot`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-010">
<div class="flashcard-front">

**P:** Que comando de systemd permite ejecutar una tarea unica programada para dentro de 5 minutos, como alternativa a `at`?

</div>
<div class="flashcard-back">

**R:** b) `systemd-run --on-active=5m /ruta/script.sh`. `systemd-run` permite ejecutar un comando como una unidad transitoria de systemd. Con `--on-active=5m`, el comando se ejecutara dentro de 5 minutos. Es una alternativa moderna a `at` integrada en systemd. Otras opciones incluyen `--on-calendar` para programar en un momento especifico y `--on-boot` para ejecutar despues del arranque. Las ventajas sobre `at` son: los logs se registran en el journal (consultables con `journalctl`), soporta dependencias de unidades y no requiere archivos allow/deny.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-011">
<div class="flashcard-front">

**P:** Que cadena especial de cron ejecuta una tarea una vez al mes, el dia 1 a medianoche?

</div>
<div class="flashcard-back">

**R:** b) `@monthly`. La cadena `@monthly` es equivalente a `0 0 1 * *`, lo que significa que se ejecuta el dia 1 de cada mes a medianoche (00:00). Otras cadenas especiales son: `@daily` o `@midnight` (equivalente a `0 0 * * *`), `@weekly` (equivalente a `0 0 * * 0`, domingo a medianoche), `@yearly` o `@annually` (equivalente a `0 0 1 1 *`, 1 de enero a medianoche), `@hourly` (equivalente a `0 * * * *`) y `@reboot` (al iniciar el sistema).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-012">
<div class="flashcard-front">

**P:** En un crontab, que significa la expresion `0 8 * * 1-5`?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar a las 8:00 AM de lunes a viernes. El formato del crontab es `minuto hora dia_mes mes dia_semana`. En `0 8 * * 1-5`: minuto 0, hora 8, cualquier dia del mes, cualquier mes, dias de la semana del 1 (lunes) al 5 (viernes). El campo de dia de la semana usa: 0 y 7 = domingo, 1 = lunes, 2 = martes, ..., 6 = sabado. El operador `-` indica un rango de valores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-013">
<div class="flashcard-front">

**P:** Donde se almacenan los crontabs de usuario en un sistema Debian?

</div>
<div class="flashcard-back">

**R:** b) `/var/spool/cron/crontabs/`. Los crontabs de usuario se almacenan en `/var/spool/cron/crontabs/` en sistemas Debian/Ubuntu, y en `/var/spool/cron/` en sistemas Red Hat/CentOS. Cada usuario tiene un archivo con su nombre de login. Estos archivos no deben editarse directamente; se debe usar el comando `crontab -e` para editar el crontab del usuario actual o `crontab -e -u usuario` (como root) para editar el de otro usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-014">
<div class="flashcard-front">

**P:** Que variable de entorno en `/etc/crontab` define a quien se envian los correos con la salida de los trabajos cron?

</div>
<div class="flashcard-back">

**R:** c) `MAILTO`. La variable `MAILTO` en un crontab define a quien se envian los correos con la salida (stdout y stderr) de los trabajos cron. Por defecto, la salida se envia al propietario del crontab. Si se establece `MAILTO=root`, se envia a root. Si se establece `MAILTO=""` (vacio), se suprime el envio de correo. Otras variables comunes en `/etc/crontab` son `SHELL` (shell a usar) y `PATH` (rutas de busqueda de comandos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-015">
<div class="flashcard-front">

**P:** Que significa la variable `RANDOM_DELAY=45` en `/etc/anacrontab`?

</div>
<div class="flashcard-back">

**R:** b) Se anade un retardo aleatorio de 0 a 45 minutos adicionales antes de ejecutar la tarea. `RANDOM_DELAY=45` en `/etc/anacrontab` indica que se anade un retardo aleatorio de entre 0 y 45 minutos adicional al retardo fijo especificado en cada linea de tarea. Esto evita que todas las tareas de anacron se ejecuten al mismo tiempo al arrancar el sistema, distribuyendo la carga. Otra variable importante es `START_HOURS_RANGE`, que define el rango de horas en que anacron puede ejecutar tareas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-016">
<div class="flashcard-front">

**P:** Que hora especial de `at` representa las 4:00 PM (16:00)?

</div>
<div class="flashcard-back">

**R:** c) `teatime`. `teatime` es una palabra clave especial de `at` que representa las 16:00 (4:00 PM), la hora tradicional del te britanico. Otras palabras clave son: `noon` (12:00, mediodia), `midnight` (00:00, medianoche) y `tomorrow` (manana). Se puede combinar con otras especificaciones: `at teatime tomorrow` programaria una tarea para las 16:00 del dia siguiente. Tambien se acepta el formato `now + N units` donde units puede ser minutes, hours, days o weeks.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-017">
<div class="flashcard-front">

**P:** Que comando elimina completamente el crontab del usuario actual?

</div>
<div class="flashcard-back">

**R:** b) `crontab -r`. El comando `crontab -r` elimina completamente el crontab del usuario actual. Es una operacion irreversible que borra todas las tareas programadas. `crontab -e` edita el crontab y `crontab -l` lista su contenido. Para eliminar el crontab de otro usuario (como root) se usa `crontab -r -u usuario`. Las opciones `-d`, `-x` y `--delete` no son validas para el comando `crontab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-018">
<div class="flashcard-front">

**P:** Que comando de systemd lista todos los timers activos junto con la proxima hora de ejecucion?

</div>
<div class="flashcard-back">

**R:** b) `systemctl list-timers`. `systemctl list-timers` muestra todos los timers activos de systemd, incluyendo la proxima hora de ejecucion (NEXT), la ultima ejecucion (LAST), el tiempo restante (LEFT), el tiempo transcurrido (PASSED) y la unidad de servicio asociada (UNIT/ACTIVATES). Se puede usar `systemctl list-timers --all` para ver tambien los timers inactivos. Los timers se habilitan con `systemctl enable nombre.timer` y se inician con `systemctl start nombre.timer`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-019">
<div class="flashcard-front">

**P:** En un timer de systemd, que opcion `OnCalendar` programa la ejecucion para todos los dias a las 2:30 AM?

</div>
<div class="flashcard-back">

**R:** b) `OnCalendar=*-*-* 02:30:00`. El formato de `OnCalendar` en timers de systemd sigue el patron `DiaSem Ano-Mes-Dia Hora:Min:Seg`. `*-*-* 02:30:00` significa cualquier dia de la semana, cualquier ano, cualquier mes, cualquier dia del mes, a las 02:30:00. Tambien se aceptan cadenas predefinidas como `daily` (equivalente a `*-*-* 00:00:00`, medianoche), `weekly` (lunes a medianoche) y `monthly` (dia 1 a medianoche). Se puede verificar el formato con `systemd-analyze calendar "*-*-* 02:30:00"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-020">
<div class="flashcard-front">

**P:** Que diferencia hay entre `at` y `batch`?

</div>
<div class="flashcard-back">

**R:** b) `at` ejecuta en un momento especifico y `batch` ejecuta cuando la carga del sistema es baja. `at` programa la ejecucion de un comando en un momento especifico del futuro (por ejemplo, `at 15:00` o `at now + 2 hours`). `batch` tambien programa una tarea unica, pero la ejecuta cuando la carga del sistema (load average) es baja (por defecto inferior a 0.8, configurable con `atd -l`). Ambos ejecutan la tarea una sola vez. `batch` es util para tareas pesadas que no deben competir con otros procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para editar el crontab del usuario actual. <input type="text" class="fill-blank" data-answer="crontab -e" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** crontab -e. El comando `crontab -e` abre el crontab del usuario actual en el editor de texto predeterminado (definido por la variable `VISUAL` o `EDITOR`). Cuando se guarda y cierra el editor, cron instala automaticamente el nuevo crontab. Para editar el crontab de otro usuario (como root): `crontab -e -u usuario`. Para listar el contenido: `crontab -l`. Para eliminarlo: `crontab -r`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para listar las tareas pendientes programadas con `at`. <input type="text" class="fill-blank" data-answer="atq" data-alt="at -l" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** atq. El comando `atq` (equivalente a `at -l`) muestra la lista de tareas pendientes programadas con `at`, incluyendo el ID de la tarea, la fecha y hora programada, la cola y el usuario. Para eliminar una tarea se usa `atrm ID` (equivalente a `at -d ID`). Las tareas se ejecutan una sola vez y se eliminan automaticamente despues de ejecutarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para programar una tarea con `at` que se ejecute dentro de 30 minutos. <input type="text" class="fill-blank" data-answer="at now + 30 minutes" data-alt="at now + 30 min" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** at now + 30 minutes. El comando `at now + 30 minutes` abre un prompt interactivo donde se pueden escribir los comandos a ejecutar (se finaliza con Ctrl+D). El formato `now + N unidad` acepta: minutes, hours, days y weeks. Tambien se pueden usar horas fijas (`at 15:00`), palabras clave (`at noon`, `at midnight`, `at teatime`) y fechas (`at 14:00 2026-12-25`). Para leer comandos desde un archivo: `at now + 30 minutes -f script.sh`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para listar los timers de systemd activos, incluyendo los inactivos. <input type="text" class="fill-blank" data-answer="systemctl list-timers --all" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** systemctl list-timers --all. El comando `systemctl list-timers --all` muestra todos los timers de systemd, tanto activos como inactivos. Sin la opcion `--all`, solo se muestran los timers activos. La salida incluye columnas como NEXT (proxima ejecucion), LEFT (tiempo restante), LAST (ultima ejecucion), PASSED (tiempo desde la ultima) y UNIT (unidad de servicio asociada).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar la tarea numero 5 de la cola de `at`. <input type="text" class="fill-blank" data-answer="atrm 5" data-alt="at -d 5" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** atrm 5. El comando `atrm 5` (equivalente a `at -d 5`) elimina la tarea con ID 5 de la cola de `at`. El ID de cada tarea se puede consultar con `atq` (o `at -l`). Solo el propietario de la tarea o root puede eliminar una tarea programada. El control de acceso a `at` se gestiona con los archivos `/etc/at.allow` y `/etc/at.deny`, con la misma logica que `cron.allow` y `cron.deny`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `at 14:30`?

</div>
<div class="flashcard-back">

**R:** A las 14:30 del dia actual (o siguiente si ya paso)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `at 14:00 2026-12-31`?

</div>
<div class="flashcard-back">

**R:** 31 de diciembre de 2026 a las 14:00

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `atq`?

</div>
<div class="flashcard-back">

**R:** Listar tareas pendientes (= `at -l`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `atrm ID`?

</div>
<div class="flashcard-back">

**R:** Eliminar una tarea por su ID (= `at -d ID`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `batch`?

</div>
<div class="flashcard-back">

**R:** Ejecutar cuando la carga del sistema sea baja (< 0.8 por defecto)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son 7. `systemd-run` - Tareas unicas con systemd?

</div>
<div class="flashcard-back">

**R:** `systemd-run` permite ejecutar un comando como una unidad transitoria de systemd, incluyendo la posibilidad de programar su ejecucion para un momento futuro. Es una alternativa moderna a `at` integrada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.2">
</div>

<div class="flashcard" data-id="107.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

