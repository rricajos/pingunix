---
title: "103.5 - Crear, monitorizar y matar procesos: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.5"
---

# 103.5 - Crear, monitorizar y matar procesos: Ejercicios

### Pregunta 1
Un administrador necesita ver todos los procesos del sistema incluyendo el PID del proceso padre (PPID). Cual de los siguientes comandos muestra esta informacion?

A) `ps aux`
B) `ps -ef`
C) `ps -l`
D) `top`

<details>
<summary>Respuesta</summary>

**B) `ps -ef`**

`ps -ef` usa el formato UNIX que incluye la columna PPID (Parent Process ID) por defecto. `ps aux` (formato BSD) muestra USER, PID, %CPU, %MEM, etc., pero **no incluye PPID** en su salida estandar. `ps -l` muestra formato largo pero solo del shell actual, no todos los procesos. `top` muestra procesos en tiempo real pero tampoco muestra PPID por defecto.
</details>

---

### Pregunta 2
Un proceso esta colgado y no responde a `kill 1234`. Que comando garantiza que el proceso sera terminado inmediatamente?

A) `kill -SIGTERM 1234`
B) `kill -15 1234`
C) `kill -1 1234`
D) `kill -9 1234`

<details>
<summary>Respuesta</summary>

**D) `kill -9 1234`**

`kill -9` envia la senal SIGKILL, que **no puede ser capturada, bloqueada ni ignorada** por el proceso. El kernel termina el proceso inmediatamente sin darle oportunidad de realizar limpieza. Las opciones A y B envian SIGTERM (senal 15), que es la senal por defecto y puede ser capturada o ignorada por el proceso. La opcion C envia SIGHUP (senal 1), que normalmente pide al proceso que recargue su configuracion.
</details>

---

### Pregunta 3
Un usuario esta ejecutando un proceso largo en primer plano. Quiere suspenderlo temporalmente para ejecutar otro comando y luego reanudarlo en segundo plano. Cual es la secuencia correcta?

A) `Ctrl+C`, luego `bg`
B) `Ctrl+Z`, luego `bg`
C) `Ctrl+Z`, luego `fg`
D) `Ctrl+D`, luego `bg`

<details>
<summary>Respuesta</summary>

**B) `Ctrl+Z`, luego `bg`**

`Ctrl+Z` envia la senal SIGTSTP (20) que suspende (pausa) el proceso sin terminarlo. Luego, `bg` reanuda el proceso suspendido en segundo plano (background). `Ctrl+C` envia SIGINT que **termina** el proceso, no lo suspende. `fg` traeria el proceso de vuelta a primer plano, no a segundo plano. `Ctrl+D` envia EOF (fin de archivo), no suspende procesos.
</details>

---

### Pregunta 4
Un administrador necesita ejecutar un script de backup que debe continuar ejecutandose incluso despues de cerrar la sesion SSH. Cual es la forma correcta de hacerlo?

A) `./backup.sh &`
B) `bg ./backup.sh`
C) `nohup ./backup.sh &`
D) `nice ./backup.sh &`

<details>
<summary>Respuesta</summary>

**C) `nohup ./backup.sh &`**

`nohup` hace que el proceso ignore la senal SIGHUP que se envia cuando se cierra la terminal o la sesion SSH. El `&` al final lo ejecuta en segundo plano. La opcion A ejecuta en segundo plano pero el proceso recibira SIGHUP al cerrar la sesion y sera terminado. `bg` se usa para reanudar un proceso suspendido, no para iniciar uno. `nice` modifica la prioridad pero no protege contra SIGHUP.
</details>

---

### Pregunta 5
En `top`, que tecla se usa para ordenar los procesos por uso de memoria?

A) `P`
B) `N`
C) `T`
D) `M`

<details>
<summary>Respuesta</summary>

**D) `M`**

En la interfaz interactiva de `top`, la tecla `M` (mayuscula) ordena los procesos por porcentaje de uso de memoria (%MEM). `P` ordena por uso de CPU (%CPU), que es el ordenamiento por defecto. `N` ordena por PID (numerico). `T` ordena por tiempo de CPU acumulado (TIME+).
</details>

---

### Pregunta 6
Cual es la diferencia principal entre `killall` y `pkill`?

A) `killall` usa PIDs y `pkill` usa nombres
B) `killall` requiere nombre exacto y `pkill` usa coincidencia parcial (patron)
C) `killall` solo puede enviar SIGKILL y `pkill` puede enviar cualquier senal
D) No hay diferencia, son sinonimos

<details>
<summary>Respuesta</summary>

**B) `killall` requiere nombre exacto y `pkill` usa coincidencia parcial (patron)**

`killall` mata procesos cuyo nombre coincide **exactamente** con el argumento. Por ejemplo, `killall apache2` solo matara procesos llamados exactamente "apache2". `pkill` funciona con coincidencia parcial (usa patrones), por lo que `pkill apach` mataria cualquier proceso cuyo nombre contenga "apach". Ambos comandos pueden enviar cualquier senal (no solo SIGKILL) y ambos usan nombres de proceso (no PIDs).
</details>

---

### Pregunta 7
Un administrador ejecuta los siguientes comandos:
```bash
sleep 100 &
sleep 200 &
sleep 300 &
jobs
```
Que mostrara el comando `jobs` y cual es el trabajo "actual" (marcado con `+`)?

A) Los tres trabajos, con `sleep 100` marcado como `+`
B) Los tres trabajos, con `sleep 300` marcado como `+`
C) Solo el ultimo trabajo
D) Ningun trabajo, porque se ejecutaron en background

<details>
<summary>Respuesta</summary>

**B) Los tres trabajos, con `sleep 300` marcado como `+`**

`jobs` muestra todos los trabajos del shell actual, incluyendo los que se ejecutan en segundo plano. La salida seria algo como:
```
[1]   Running    sleep 100 &
[2]-  Running    sleep 200 &
[3]+  Running    sleep 300 &
```
El simbolo `+` marca el trabajo mas reciente (el ultimo que se inicio o manipulo), que es el "trabajo actual". El simbolo `-` marca el trabajo anterior. Los comandos `fg` y `bg` sin argumentos actuan sobre el trabajo marcado con `+`.
</details>

---

### Pregunta 8
Que informacion muestra el comando `uptime` y que significan los valores de "load average"?

A) Solo muestra cuanto tiempo lleva encendido el sistema
B) Muestra hora actual, uptime, usuarios conectados y carga media (1, 5 y 15 minutos)
C) Muestra el uso de CPU y memoria
D) Muestra los procesos activos y su tiempo de ejecucion

<details>
<summary>Respuesta</summary>

**B) Muestra hora actual, uptime, usuarios conectados y carga media (1, 5 y 15 minutos)**

La salida de `uptime` se ve asi:
```
14:30:25 up 45 days, 3:22, 2 users, load average: 0.15, 0.10, 0.05
```
Incluye: la hora actual, el tiempo que lleva encendido el sistema, el numero de usuarios conectados y los tres valores de **load average** (carga media del sistema en los ultimos 1, 5 y 15 minutos). El load average indica cuantos procesos estan en ejecucion o esperando CPU. Un valor de 1.0 en un sistema con una CPU significa 100% de uso; en un sistema con 4 CPUs, un load average de 4.0 seria el 100%.
</details>

### Pregunta 9

Que senal envia `kill` por defecto cuando se ejecuta sin especificar un numero de senal?

a) SIGKILL (9)
b) SIGHUP (1)
c) SIGTERM (15)
d) SIGINT (2)

<details><summary>Respuesta</summary>

**c) SIGTERM (15)**

`kill PID` sin especificar senal envia SIGTERM (senal 15) por defecto. SIGTERM solicita al proceso que termine de forma limpia, dando la oportunidad de liberar recursos, cerrar archivos y realizar tareas de limpieza. El proceso puede capturar, bloquear o ignorar SIGTERM. Si el proceso no responde a SIGTERM, se puede usar `kill -9 PID` (SIGKILL) que no puede ser capturada ni ignorada. SIGHUP (1) se usa para recargar configuracion y SIGINT (2) es la senal de Ctrl+C.

</details>

### Pregunta 10

Que significan las dos senales que NO pueden ser capturadas, bloqueadas ni ignoradas por un proceso?

a) SIGTERM (15) y SIGINT (2)
b) SIGKILL (9) y SIGSTOP (19)
c) SIGHUP (1) y SIGQUIT (3)
d) SIGCONT (18) y SIGTSTP (20)

<details><summary>Respuesta</summary>

**b) SIGKILL (9) y SIGSTOP (19)**

SIGKILL (9) y SIGSTOP (19) son las unicas senales que no pueden ser capturadas, bloqueadas ni ignoradas por el proceso. SIGKILL termina el proceso inmediatamente sin posibilidad de limpieza. SIGSTOP detiene (pausa) el proceso sin terminarlo. A diferencia de SIGSTOP, SIGTSTP (20, enviada con Ctrl+Z) si puede ser capturada por el proceso. SIGTERM (15) y SIGINT (2) tambien pueden ser capturadas, lo que permite al proceso manejar el cierre limpio.

</details>

### Pregunta 11

Que comando muestra los procesos del sistema en formato de arbol, mostrando la relacion padre-hijo?

a) `ps -ef`
b) `top`
c) `pstree`
d) `htop`

<details><summary>Respuesta</summary>

**c) `pstree`**

`pstree` muestra los procesos del sistema en formato de arbol jerarquico, visualizando claramente la relacion padre-hijo entre procesos. La opcion `-p` muestra los PIDs junto a los nombres. `pstree -a` muestra los argumentos de linea de comandos. Tambien se puede obtener un arbol con `ps -ef --forest`, pero `pstree` es el comando dedicado para esta funcion. `top` y `htop` muestran procesos en tiempo real pero en formato de lista, no de arbol (aunque `htop` tiene modo arbol con F5).

</details>

### Pregunta 12

Que hace el codigo de estado (STAT) `Z` en la salida de `ps aux`?

a) El proceso esta en ejecucion activa
b) El proceso esta durmiendo esperando un evento
c) El proceso es un zombie: ha terminado pero su padre no ha recogido su codigo de salida
d) El proceso esta detenido por una senal

<details><summary>Respuesta</summary>

**c) El proceso es un zombie: ha terminado pero su padre no ha recogido su codigo de salida**

Un proceso zombie (estado `Z`) es aquel que ha finalizado su ejecucion pero su proceso padre aun no ha leido su codigo de salida con `wait()`. El proceso zombie no consume CPU ni memoria significativa, pero su entrada permanece en la tabla de procesos. Los zombies se eliminan cuando el padre recoge su estado o cuando el padre termina (el zombie es adoptado por init/systemd que lo limpia). Un exceso de zombies indica un error de programacion en el proceso padre. `R` = running, `S` = sleeping, `T` = stopped.

</details>

### Pregunta 13

Que comando ejecuta un proceso cada 5 segundos mostrando la salida actualizada en la terminal?

a) `repeat 5 comando`
b) `watch -n 5 comando`
c) `cron 5 comando`
d) `loop -t 5 comando`

<details><summary>Respuesta</summary>

**b) `watch -n 5 comando`**

`watch` ejecuta un comando repetidamente a intervalos regulares, mostrando la salida actualizada en la terminal. La opcion `-n 5` establece el intervalo en 5 segundos (por defecto son 2 segundos). La opcion `-d` resalta las diferencias entre ejecuciones consecutivas. La opcion `-t` oculta la cabecera. Para comandos con pipes se deben usar comillas: `watch "ps aux | grep apache"`. `watch` es util para monitorizar cambios en tiempo real en la salida de cualquier comando.

</details>

### Pregunta 14

Que diferencia hay entre `screen` y `tmux` en cuanto al prefijo de teclas para los atajos?

a) screen usa `Ctrl+b` y tmux usa `Ctrl+a`
b) screen usa `Ctrl+a` y tmux usa `Ctrl+b`
c) Ambos usan `Ctrl+a`
d) Ambos usan `Ctrl+b`

<details><summary>Respuesta</summary>

**b) screen usa `Ctrl+a` y tmux usa `Ctrl+b`**

En `screen`, todos los atajos de teclado se activan con el prefijo `Ctrl+a` seguido de una tecla (por ejemplo, `Ctrl+a d` para desconectar). En `tmux`, el prefijo es `Ctrl+b` (por ejemplo, `Ctrl+b d` para desconectar). Ambos son multiplexores de terminal que permiten crear sesiones persistentes que sobreviven a desconexiones de terminal o SSH. El atajo para desconectar es `d` en ambos casos, solo cambia el prefijo.

</details>

### Pregunta 15

Que informacion se encuentra en el directorio virtual `/proc/PID/fd/`?

a) Los archivos de configuracion del proceso
b) Los descriptores de archivo abiertos por el proceso como enlaces simbolicos
c) Las dependencias de librerias del proceso
d) Los archivos temporales creados por el proceso

<details><summary>Respuesta</summary>

**b) Los descriptores de archivo abiertos por el proceso como enlaces simbolicos**

`/proc/PID/fd/` contiene enlaces simbolicos a todos los descriptores de archivo abiertos por el proceso. Los descriptores 0, 1 y 2 corresponden a stdin, stdout y stderr respectivamente. Los descriptores numerados del 3 en adelante son archivos adicionales, sockets, pipes, etc. Por ejemplo, `ls -la /proc/1234/fd/` muestra todos los archivos que el proceso 1234 tiene abiertos. Esta informacion es util para depurar que archivos esta usando un proceso.

</details>

### Pregunta 16

Que comando muestra el uso de memoria del sistema en formato legible con megabytes y gigabytes?

a) `free -b`
b) `free -k`
c) `free -h`
d) `free -t`

<details><summary>Respuesta</summary>

**c) `free -h`**

`free -h` (human-readable) muestra el uso de memoria del sistema en un formato legible automatico que usa las unidades mas apropiadas (KB, MB, GB). `-b` muestra en bytes, `-k` en kilobytes (por defecto), `-m` en megabytes y `-g` en gigabytes. La opcion `-t` muestra una linea de total sumando RAM y swap. La columna mas importante es `available`, que indica cuanta memoria esta realmente disponible para nuevos procesos (incluye la cache que puede ser liberada).

</details>

### Pregunta 17

Que hace el comando `pgrep -l apache`?

a) Mata todos los procesos que contienen "apache" en su nombre
b) Muestra los PIDs y nombres de los procesos que contienen "apache" en su nombre
c) Lista los archivos del paquete apache
d) Busca el texto "apache" en los archivos de log

<details><summary>Respuesta</summary>

**b) Muestra los PIDs y nombres de los procesos que contienen "apache" en su nombre**

`pgrep` busca procesos por nombre u otros atributos y devuelve sus PIDs. La opcion `-l` anade el nombre del proceso junto al PID. `pgrep -a` muestra la linea de comandos completa. Otras opciones utiles: `-u usuario` filtra por usuario, `-c` cuenta los procesos, `-x` requiere coincidencia exacta del nombre, y `-f` busca en toda la linea de comandos. A diferencia de `pidof`, `pgrep` permite coincidencia parcial (patrones).

</details>

### Pregunta 18

Que tecla dentro de `top` permite cambiar la prioridad (renice) de un proceso?

a) `k`
b) `r`
c) `P`
d) `n`

<details><summary>Respuesta</summary>

**b) `r`**

Dentro de la interfaz interactiva de `top`, la tecla `r` permite cambiar la prioridad (renice) de un proceso. Al presionarla, `top` pide el PID del proceso y luego el nuevo valor de nice. La tecla `k` se usa para enviar una senal (kill) a un proceso. `P` ordena por uso de CPU. `M` ordena por uso de memoria. `N` ordena por PID. `d` o `s` cambian el intervalo de actualizacion. `q` sale de top.

</details>

### Pregunta 19

Que comando usarias para enviar la senal SIGHUP al proceso con PID 1234 para que recargue su configuracion?

<input type="text" class="fill-blank" data-answer="kill -1 1234" data-alt="kill -HUP 1234,kill -SIGHUP 1234" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**kill -1 1234**

`kill -1 PID` envia la senal SIGHUP (senal numero 1) al proceso. Equivalentes son `kill -HUP 1234` y `kill -SIGHUP 1234`. Muchos daemons (como Apache, Nginx, sshd) interpretan SIGHUP como una solicitud para recargar su archivo de configuracion sin detener el servicio. Originalmente, SIGHUP significaba "hangup" (colgar) y se enviaba cuando se cerraba una terminal. `nohup` protege a los procesos contra esta senal.

</details>

### Pregunta 20

Que comando usarias para ver la lista de todos los trabajos (jobs) del shell actual incluyendo sus PIDs?

<input type="text" class="fill-blank" data-answer="jobs -l" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**jobs -l**

`jobs -l` lista todos los trabajos del shell actual mostrando tambien sus PIDs. Sin `-l`, solo muestra el numero de trabajo, estado y comando. Otras opciones utiles: `-p` muestra solo los PIDs, `-r` muestra solo trabajos en ejecucion (running) y `-s` muestra solo trabajos detenidos (stopped). Los trabajos se identifican con `%N` donde N es el numero de trabajo. El simbolo `+` marca el trabajo actual y `-` el anterior.

</details>

### Pregunta 21

Que comando usarias para reconectar a una sesion de `screen` llamada "backup"?

<input type="text" class="fill-blank" data-answer="screen -r backup" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**screen -r backup**

`screen -r backup` reconecta (reattach) a una sesion de screen previamente creada con `screen -S backup`. Si la sesion sigue conectada en otro lugar, se puede usar `screen -d -r backup` para desconectarla primero y reconectar aqui. `screen -ls` lista todas las sesiones activas. En tmux, el equivalente seria `tmux attach -t backup`. Las sesiones de screen y tmux persisten incluso si se cierra la terminal o se desconecta la sesion SSH.

</details>

### Pregunta 22

Que comando usarias para matar todos los procesos del usuario "sandra"?

<input type="text" class="fill-blank" data-answer="pkill -u sandra" data-alt="killall -u sandra" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pkill -u sandra**

`pkill -u sandra` envia SIGTERM a todos los procesos del usuario sandra. Tambien se puede usar `killall -u sandra` para el mismo efecto. Para forzar la terminacion se puede anadir `-9`: `pkill -9 -u sandra`. Otra opcion es `kill -9 $(pgrep -u sandra)` que obtiene los PIDs con `pgrep` y los pasa a `kill`. Estos comandos son utiles para administradores que necesitan finalizar todas las sesiones de un usuario.

</details>

### Pregunta 23

Que comando usarias para ejecutar un proceso en segundo plano que sobreviva al cierre de la sesion SSH, guardando la salida en `backup.log`?

<input type="text" class="fill-blank" data-answer="nohup ./backup.sh > backup.log 2>&1 &" data-alt="nohup ./backup.sh &> backup.log &" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nohup ./backup.sh > backup.log 2>&1 &**

`nohup` hace que el proceso ignore la senal SIGHUP que se envia al cerrar la terminal o la sesion SSH. `> backup.log 2>&1` redirige tanto stdout como stderr al archivo `backup.log`. El `&` al final ejecuta el proceso en segundo plano. Sin la redireccion explicita, `nohup` redigiria la salida a `nohup.out` por defecto. Alternativas modernas incluyen usar `screen` o `tmux` que proporcionan sesiones completas persistentes.

</details>
