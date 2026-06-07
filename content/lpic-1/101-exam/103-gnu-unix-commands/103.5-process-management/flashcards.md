---
title: "103.5 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "103.5"
---

# Flashcards: 103.5 - Crear Monitorizar Y Matar Procesos

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita ver todos los procesos del sistema incluyendo el PID del proceso padre (PPID). Cual de los siguientes comandos muestra esta informacion?

</div>
<div class="flashcard-back">

**R:** B) `ps -ef`. `ps -ef` usa el formato UNIX que incluye la columna PPID (Parent Process ID) por defecto. `ps aux` (formato BSD) muestra USER, PID, %CPU, %MEM, etc., pero **no incluye PPID** en su salida estandar. `ps -l` muestra formato largo pero solo del shell actual, no todos los procesos. `top` muestra procesos en tiempo real pero tampoco muestra PPID por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-002">
<div class="flashcard-front">

**P:** Un proceso esta colgado y no responde a `kill 1234`. Que comando garantiza que el proceso sera terminado inmediatamente?

</div>
<div class="flashcard-back">

**R:** D) `kill -9 1234`. `kill -9` envia la senal SIGKILL, que **no puede ser capturada, bloqueada ni ignorada** por el proceso. El kernel termina el proceso inmediatamente sin darle oportunidad de realizar limpieza. Las opciones A y B envian SIGTERM (senal 15), que es la senal por defecto y puede ser capturada o ignorada por el proceso. La opcion C envia SIGHUP (senal 1), que normalmente pide al proceso que recargue su configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-003">
<div class="flashcard-front">

**P:** Un usuario esta ejecutando un proceso largo en primer plano. Quiere suspenderlo temporalmente para ejecutar otro comando y luego reanudarlo en segundo plano. Cual es la secuencia correcta?

</div>
<div class="flashcard-back">

**R:** B) `Ctrl+Z`, luego `bg`. `Ctrl+Z` envia la senal SIGTSTP (20) que suspende (pausa) el proceso sin terminarlo. Luego, `bg` reanuda el proceso suspendido en segundo plano (background). `Ctrl+C` envia SIGINT que **termina** el proceso, no lo suspende. `fg` traeria el proceso de vuelta a primer plano, no a segundo plano. `Ctrl+D` envia EOF (fin de archivo), no suspende procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-004">
<div class="flashcard-front">

**P:** Un administrador necesita ejecutar un script de backup que debe continuar ejecutandose incluso despues de cerrar la sesion SSH. Cual es la forma correcta de hacerlo?

</div>
<div class="flashcard-back">

**R:** C) `nohup ./backup.sh &`. `nohup` hace que el proceso ignore la senal SIGHUP que se envia cuando se cierra la terminal o la sesion SSH. El `&` al final lo ejecuta en segundo plano. La opcion A ejecuta en segundo plano pero el proceso recibira SIGHUP al cerrar la sesion y sera terminado. `bg` se usa para reanudar un proceso suspendido, no para iniciar uno. `nice` modifica la prioridad pero no protege contra SIGHUP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-005">
<div class="flashcard-front">

**P:** En `top`, que tecla se usa para ordenar los procesos por uso de memoria?

</div>
<div class="flashcard-back">

**R:** D) `M`. En la interfaz interactiva de `top`, la tecla `M` (mayuscula) ordena los procesos por porcentaje de uso de memoria (%MEM). `P` ordena por uso de CPU (%CPU), que es el ordenamiento por defecto. `N` ordena por PID (numerico). `T` ordena por tiempo de CPU acumulado (TIME+).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-006">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `killall` y `pkill`?

</div>
<div class="flashcard-back">

**R:** B) `killall` requiere nombre exacto y `pkill` usa coincidencia parcial (patron). `killall` mata procesos cuyo nombre coincide **exactamente** con el argumento. Por ejemplo, `killall apache2` solo matara procesos llamados exactamente "apache2". `pkill` funciona con coincidencia parcial (usa patrones), por lo que `pkill apach` mataria cualquier proceso cuyo nombre contenga "apach". Ambos comandos pueden enviar cualquier senal (no solo SIGKILL) y ambos usan nombres de proceso (no PIDs).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-007">
<div class="flashcard-front">

**P:** Un administrador ejecuta los siguientes comandos: ```bash sleep 100 & sleep 200 & sleep 300 & jobs ``` Que mostrara el comando `jobs` y cual es el trabajo "actual" (marcado con `+`)?

</div>
<div class="flashcard-back">

**R:** B) Los tres trabajos, con `sleep 300` marcado como `+`. `jobs` muestra todos los trabajos del shell actual, incluyendo los que se ejecutan en segundo plano. La salida seria algo como: ``` [1]   Running    sleep 100 & [2]-  Running    sleep 200 & [3]+  Running    sleep 300 & ``` El simbolo `+` marca el trabajo mas reciente (el ultimo que se inicio o manipulo), que es el "trabajo actual". El simbolo `-` marca el trabajo anterior. Los comandos `fg` y `bg` sin argumentos actuan sobre el trabajo marcado con `+`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-008">
<div class="flashcard-front">

**P:** Que informacion muestra el comando `uptime` y que significan los valores de "load average"?

</div>
<div class="flashcard-back">

**R:** B) Muestra hora actual, uptime, usuarios conectados y carga media (1, 5 y 15 minutos). La salida de `uptime` se ve asi: ``` 14:30:25 up 45 days, 3:22, 2 users, load average: 0.15, 0.10, 0.05 ``` Incluye: la hora actual, el tiempo que lleva encendido el sistema, el numero de usuarios conectados y los tres valores de **load average** (carga media del sistema en los ultimos 1, 5 y 15 minutos). El load average indica cuantos procesos estan en ejecucion o esperando CPU. Un valor de 1.0 en un sistema con una CPU significa 100% de uso; en un sistema con 4 CPUs, un load average de 4.0 seria el 100%.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-009">
<div class="flashcard-front">

**P:** Que senal envia `kill` por defecto cuando se ejecuta sin especificar un numero de senal?

</div>
<div class="flashcard-back">

**R:** c) SIGTERM (15). `kill PID` sin especificar senal envia SIGTERM (senal 15) por defecto. SIGTERM solicita al proceso que termine de forma limpia, dando la oportunidad de liberar recursos, cerrar archivos y realizar tareas de limpieza. El proceso puede capturar, bloquear o ignorar SIGTERM. Si el proceso no responde a SIGTERM, se puede usar `kill -9 PID` (SIGKILL) que no puede ser capturada ni ignorada. SIGHUP (1) se usa para recargar configuracion y SIGINT (2) es la senal de Ctrl+C.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-010">
<div class="flashcard-front">

**P:** Que significan las dos senales que NO pueden ser capturadas, bloqueadas ni ignoradas por un proceso?

</div>
<div class="flashcard-back">

**R:** b) SIGKILL (9) y SIGSTOP (19). SIGKILL (9) y SIGSTOP (19) son las unicas senales que no pueden ser capturadas, bloqueadas ni ignoradas por el proceso. SIGKILL termina el proceso inmediatamente sin posibilidad de limpieza. SIGSTOP detiene (pausa) el proceso sin terminarlo. A diferencia de SIGSTOP, SIGTSTP (20, enviada con Ctrl+Z) si puede ser capturada por el proceso. SIGTERM (15) y SIGINT (2) tambien pueden ser capturadas, lo que permite al proceso manejar el cierre limpio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-011">
<div class="flashcard-front">

**P:** Que comando muestra los procesos del sistema en formato de arbol, mostrando la relacion padre-hijo?

</div>
<div class="flashcard-back">

**R:** c) `pstree`. `pstree` muestra los procesos del sistema en formato de arbol jerarquico, visualizando claramente la relacion padre-hijo entre procesos. La opcion `-p` muestra los PIDs junto a los nombres. `pstree -a` muestra los argumentos de linea de comandos. Tambien se puede obtener un arbol con `ps -ef --forest`, pero `pstree` es el comando dedicado para esta funcion. `top` y `htop` muestran procesos en tiempo real pero en formato de lista, no de arbol (aunque `htop` tiene modo arbol con F5).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-012">
<div class="flashcard-front">

**P:** Que hace el codigo de estado (STAT) `Z` en la salida de `ps aux`?

</div>
<div class="flashcard-back">

**R:** c) El proceso es un zombie: ha terminado pero su padre no ha recogido su codigo de salida. Un proceso zombie (estado `Z`) es aquel que ha finalizado su ejecucion pero su proceso padre aun no ha leido su codigo de salida con `wait()`. El proceso zombie no consume CPU ni memoria significativa, pero su entrada permanece en la tabla de procesos. Los zombies se eliminan cuando el padre recoge su estado o cuando el padre termina (el zombie es adoptado por init/systemd que lo limpia). Un exceso de zombies indica un error de programacion en el proceso padre. `R` = running, `S` = sleeping, `T` = stopped.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-013">
<div class="flashcard-front">

**P:** Que comando ejecuta un proceso cada 5 segundos mostrando la salida actualizada en la terminal?

</div>
<div class="flashcard-back">

**R:** b) `watch -n 5 comando`. `watch` ejecuta un comando repetidamente a intervalos regulares, mostrando la salida actualizada en la terminal. La opcion `-n 5` establece el intervalo en 5 segundos (por defecto son 2 segundos). La opcion `-d` resalta las diferencias entre ejecuciones consecutivas. La opcion `-t` oculta la cabecera. Para comandos con pipes se deben usar comillas: `watch "ps aux | grep apache"`. `watch` es util para monitorizar cambios en tiempo real en la salida de cualquier comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-014">
<div class="flashcard-front">

**P:** Que diferencia hay entre `screen` y `tmux` en cuanto al prefijo de teclas para los atajos?

</div>
<div class="flashcard-back">

**R:** b) screen usa `Ctrl+a` y tmux usa `Ctrl+b`. En `screen`, todos los atajos de teclado se activan con el prefijo `Ctrl+a` seguido de una tecla (por ejemplo, `Ctrl+a d` para desconectar). En `tmux`, el prefijo es `Ctrl+b` (por ejemplo, `Ctrl+b d` para desconectar). Ambos son multiplexores de terminal que permiten crear sesiones persistentes que sobreviven a desconexiones de terminal o SSH. El atajo para desconectar es `d` en ambos casos, solo cambia el prefijo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-015">
<div class="flashcard-front">

**P:** Que informacion se encuentra en el directorio virtual `/proc/PID/fd/`?

</div>
<div class="flashcard-back">

**R:** b) Los descriptores de archivo abiertos por el proceso como enlaces simbolicos. `/proc/PID/fd/` contiene enlaces simbolicos a todos los descriptores de archivo abiertos por el proceso. Los descriptores 0, 1 y 2 corresponden a stdin, stdout y stderr respectivamente. Los descriptores numerados del 3 en adelante son archivos adicionales, sockets, pipes, etc. Por ejemplo, `ls -la /proc/1234/fd/` muestra todos los archivos que el proceso 1234 tiene abiertos. Esta informacion es util para depurar que archivos esta usando un proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-016">
<div class="flashcard-front">

**P:** Que comando muestra el uso de memoria del sistema en formato legible con megabytes y gigabytes?

</div>
<div class="flashcard-back">

**R:** c) `free -h`. `free -h` (human-readable) muestra el uso de memoria del sistema en un formato legible automatico que usa las unidades mas apropiadas (KB, MB, GB). `-b` muestra en bytes, `-k` en kilobytes (por defecto), `-m` en megabytes y `-g` en gigabytes. La opcion `-t` muestra una linea de total sumando RAM y swap. La columna mas importante es `available`, que indica cuanta memoria esta realmente disponible para nuevos procesos (incluye la cache que puede ser liberada).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `pgrep -l apache`?

</div>
<div class="flashcard-back">

**R:** b) Muestra los PIDs y nombres de los procesos que contienen "apache" en su nombre. `pgrep` busca procesos por nombre u otros atributos y devuelve sus PIDs. La opcion `-l` anade el nombre del proceso junto al PID. `pgrep -a` muestra la linea de comandos completa. Otras opciones utiles: `-u usuario` filtra por usuario, `-c` cuenta los procesos, `-x` requiere coincidencia exacta del nombre, y `-f` busca en toda la linea de comandos. A diferencia de `pidof`, `pgrep` permite coincidencia parcial (patrones).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-018">
<div class="flashcard-front">

**P:** Que tecla dentro de `top` permite cambiar la prioridad (renice) de un proceso?

</div>
<div class="flashcard-back">

**R:** b) `r`. Dentro de la interfaz interactiva de `top`, la tecla `r` permite cambiar la prioridad (renice) de un proceso. Al presionarla, `top` pide el PID del proceso y luego el nuevo valor de nice. La tecla `k` se usa para enviar una senal (kill) a un proceso. `P` ordena por uso de CPU. `M` ordena por uso de memoria. `N` ordena por PID. `d` o `s` cambian el intervalo de actualizacion. `q` sale de top.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-019">
<div class="flashcard-front">

**P:** Que comando usarias para enviar la senal SIGHUP al proceso con PID 1234 para que recargue su configuracion?

</div>
<div class="flashcard-back">

**R:** kill -1 1234. `kill -1 PID` envia la senal SIGHUP (senal numero 1) al proceso. Equivalentes son `kill -HUP 1234` y `kill -SIGHUP 1234`. Muchos daemons (como Apache, Nginx, sshd) interpretan SIGHUP como una solicitud para recargar su archivo de configuracion sin detener el servicio. Originalmente, SIGHUP significaba "hangup" (colgar) y se enviaba cuando se cerraba una terminal. `nohup` protege a los procesos contra esta senal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-020">
<div class="flashcard-front">

**P:** Que comando usarias para ver la lista de todos los trabajos (jobs) del shell actual incluyendo sus PIDs?

</div>
<div class="flashcard-back">

**R:** jobs -l. `jobs -l` lista todos los trabajos del shell actual mostrando tambien sus PIDs. Sin `-l`, solo muestra el numero de trabajo, estado y comando. Otras opciones utiles: `-p` muestra solo los PIDs, `-r` muestra solo trabajos en ejecucion (running) y `-s` muestra solo trabajos detenidos (stopped). Los trabajos se identifican con `%N` donde N es el numero de trabajo. El simbolo `+` marca el trabajo actual y `-` el anterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-021">
<div class="flashcard-front">

**P:** Que comando usarias para reconectar a una sesion de `screen` llamada "backup"?

</div>
<div class="flashcard-back">

**R:** screen -r backup. `screen -r backup` reconecta (reattach) a una sesion de screen previamente creada con `screen -S backup`. Si la sesion sigue conectada en otro lugar, se puede usar `screen -d -r backup` para desconectarla primero y reconectar aqui. `screen -ls` lista todas las sesiones activas. En tmux, el equivalente seria `tmux attach -t backup`. Las sesiones de screen y tmux persisten incluso si se cierra la terminal o se desconecta la sesion SSH.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-022">
<div class="flashcard-front">

**P:** Que comando usarias para matar todos los procesos del usuario "sandra"?

</div>
<div class="flashcard-back">

**R:** pkill -u sandra. `pkill -u sandra` envia SIGTERM a todos los procesos del usuario sandra. Tambien se puede usar `killall -u sandra` para el mismo efecto. Para forzar la terminacion se puede anadir `-9`: `pkill -9 -u sandra`. Otra opcion es `kill -9 $(pgrep -u sandra)` que obtiene los PIDs con `pgrep` y los pasa a `kill`. Estos comandos son utiles para administradores que necesitan finalizar todas las sesiones de un usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-023">
<div class="flashcard-front">

**P:** Que comando usarias para ejecutar un proceso en segundo plano que sobreviva al cierre de la sesion SSH, guardando la salida en `backup.log`?

</div>
<div class="flashcard-back">

**R:** nohup ./backup.sh > backup.log 2>&1 &. `nohup` hace que el proceso ignore la senal SIGHUP que se envia al cerrar la terminal o la sesion SSH. `> backup.log 2>&1` redirige tanto stdout como stderr al archivo `backup.log`. El `&` al final ejecuta el proceso en segundo plano. Sin la redireccion explicita, `nohup` redigiria la salida a `nohup.out` por defecto. Alternativas modernas incluyen usar `screen` o `tmux` que proporcionan sesiones completas persistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-024">
<div class="flashcard-front">

**P:** Tip de examen: `nohup` protege contra SIGHUP, pero el proceso **si puede ser matado** con SIGKI...

</div>
<div class="flashcard-back">

**R:** `nohup` protege contra SIGHUP, pero el proceso **si puede ser matado** con SIGKILL o SIGTERM. `nohup` NO convierte un proceso en daemon.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-025">
<div class="flashcard-front">

**P:** Tip de examen: `pstree` es util para visualizar la jerarquia de procesos. La opcion `-p` para v...

</div>
<div class="flashcard-back">

**R:** `pstree` es util para visualizar la jerarquia de procesos. La opcion `-p` para ver PIDs es la mas preguntada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `/proc/PID/` es una fuente fundamental de informacion sobre procesos. Los archiv...

</div>
<div class="flashcard-back">

**R:** `/proc/PID/` es una fuente fundamental de informacion sobre procesos. Los archivos `cmdline`, `status` y `fd/` son los mas relevantes. Toda la informacion que muestra `ps` proviene de `/proc`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `R`?

</div>
<div class="flashcard-back">

**R:** Running (ejecutandose o en cola de ejecucion)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `S`?

</div>
<div class="flashcard-back">

**R:** Sleeping (durmiendo, esperando un evento)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `D`?

</div>
<div class="flashcard-back">

**R:** Uninterruptible sleep (esperando I/O de disco)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `T`?

</div>
<div class="flashcard-back">

**R:** Stopped (detenido por una senal)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `Z`?

</div>
<div class="flashcard-back">

**R:** Zombie (terminado pero no recogido por el padre)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-032">
<div class="flashcard-front">

**P:** Un administrador junior abre `htop` y observa barras de colores en la parte superior y teclas de funcion en la parte inferior. Necesita filtrar la lista para ver solo los procesos del usuario `www-data` y luego matar uno de ellos. Que teclas de funcion debe usar y en que se diferencia `htop` de `top` para estas tareas?

</div>
<div class="flashcard-back">

**R:** En `htop`, se usa **F4** para filtrar por texto (o **u** para filtrar por usuario) y **F9** para enviar una senal (kill) al proceso seleccionado, pudiendo elegir la senal de una lista visual. Las diferencias clave con `top`: `htop` permite **desplazarse vertical y horizontalmente** con las flechas, soporta **raton** para seleccionar procesos, muestra **barras graficas de colores** para CPU, memoria y swap en la cabecera, permite **matar procesos sin conocer el PID** (basta seleccionarlos) y soporta **modo arbol** con F5. En `top`, la tecla equivalente para matar es `k` (pide el PID manualmente) y para filtrar por usuario es `u`. `htop` **no esta instalado por defecto** en la mayoria de distribuciones y **no forma parte del temario obligatorio LPIC-1**, pero aparece como herramienta complementaria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-033">
<div class="flashcard-front">

**P:** Un administrador sospecha que hay multiples instancias del servicio `sshd` ejecutandose en el sistema. Necesita obtener los PIDs de todas ellas mostrando tambien la linea de comandos completa de cada una, y ademas quiere saber cuantas instancias hay en total. Que comandos `pgrep` debe usar?

</div>
<div class="flashcard-back">

**R:** Para listar los PIDs con la linea de comandos completa: **`pgrep -a sshd`**. Para contar el numero total de instancias: **`pgrep -c sshd`**. Opciones clave de `pgrep`: `-l` muestra PID + nombre del proceso, `-a` muestra PID + linea de comandos completa, `-c` solo cuenta coincidencias, `-u usuario` filtra por usuario efectivo, `-U usuario` filtra por usuario real, `-x` exige coincidencia exacta del nombre (sin `-x`, `pgrep ssh` tambien encontraria procesos como `ssh-agent`), `-f` busca en toda la linea de comandos (no solo en el nombre del proceso), `-n` devuelve solo el PID mas reciente, `-o` devuelve solo el PID mas antiguo. La diferencia con `pidof` es que `pidof` requiere el nombre exacto y no soporta patrones ni opciones de filtrado avanzadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-034">
<div class="flashcard-front">

**P:** Un administrador ejecuta `nohup ./migrar_db.sh &` y luego cierra la sesion SSH. Al dia siguiente, descubre que el archivo `nohup.out` esta vacio y el script no produjo resultados. Que ocurrio probablemente y como deberia haber ejecutado el comando para capturar toda la salida correctamente?

</div>
<div class="flashcard-back">

**R:** El problema mas probable es que el script escribia su salida a **stderr** y la redireccion no lo capturo correctamente, o que el script necesitaba variables de entorno de la sesion que no estaban disponibles. La forma correcta es: **`nohup ./migrar_db.sh > /var/log/migracion.log 2>&1 &`**. Esto redirige stdout al archivo de log y `2>&1` redirige stderr al mismo destino. Puntos criticos sobre `nohup`: sin redireccion explicita, `nohup` envia stdout a `nohup.out` en el directorio actual (o en `$HOME` si no tiene permisos de escritura). `nohup` **solo protege contra SIGHUP**, el proceso sigue siendo vulnerable a SIGTERM y SIGKILL. `nohup` **no convierte el proceso en daemon** (no desvincula del grupo de procesos ni cierra descriptores). Para sesiones interactivas persistentes, `screen` o `tmux` son alternativas superiores porque permiten reconectar y ver la salida en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.5">
</div>

<div class="flashcard" data-id="103.5-fc-035">
<div class="flashcard-front">

**P:** En el examen LPIC-1, un candidato ve esta pregunta: "Un proceso no responde a `kill 5678`. Ejecutas `kill -9 5678` pero el proceso sigue apareciendo en `ps aux` con estado `Z`. Por que no desaparece y que debes hacer?" Cual es la respuesta correcta y que otras trampas comunes hay en el subtema 103.5?

</div>
<div class="flashcard-back">

**R:** El proceso esta en estado **zombie (Z)**: ya termino su ejecucion pero su proceso padre no ha recogido su codigo de salida con `wait()`. Un zombie **no puede ser matado** con ninguna senal (ni siquiera SIGKILL) porque tecnicamente ya esta muerto. La solucion es **matar al proceso padre** para que init/systemd adopte al zombie y lo limpie. **Otras trampas frecuentes del examen 103.5:** (1) `kill PID` envia SIGTERM (15), **no** SIGKILL (9) -- muchos candidatos confunden la senal por defecto. (2) `Ctrl+Z` envia SIGTSTP (que **puede** ser capturada), mientras que SIGSTOP **no puede** ser capturada -- no son la misma senal. (3) `nohup` protege contra SIGHUP pero **no** contra SIGTERM ni SIGKILL, y **no** convierte un proceso en daemon. (4) `ps aux` (formato BSD, sin guion) vs `ps -ef` (formato UNIX, con guion) -- `ps -ef` muestra PPID, `ps aux` no. (5) `killall` necesita nombre **exacto**, `pkill` acepta **patrones parciales**. (6) En `top`, `M` ordena por memoria y `P` por CPU (ambas mayusculas), mientras que `r` (minuscula) cambia prioridad y `k` (minuscula) mata procesos.

</div>
</div>

---

