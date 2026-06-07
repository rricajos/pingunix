---
title: "103.6 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "103.6"
---

# Flashcards: 103.6 - Prioridades De Procesos

> 26 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-001">
<div class="flashcard-front">

**P:** Cual es el rango valido de valores nice en Linux y cual es el valor por defecto al iniciar un proceso normalmente?

</div>
<div class="flashcard-back">

**R:** C) -20 a 19, por defecto 0. El rango de valores nice en Linux va de **-20** (maxima prioridad) a **19** (minima prioridad). Cuando un proceso se inicia normalmente (sin usar el comando `nice`), se le asigna un valor nice de **0** por defecto. Los valores negativos (-20 a -1) solo pueden ser asignados por root. El rango 0 a 39 corresponde a la prioridad del kernel (PR), no al valor nice.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-002">
<div class="flashcard-front">

**P:** Un usuario normal ejecuta el siguiente comando: ```bash nice -n -5 ./mi_script.sh ``` Que ocurrira?

</div>
<div class="flashcard-back">

**R:** C) El comando falla con un error de permisos. Un usuario normal **no puede** asignar valores nice negativos. Los valores negativos (de -20 a -1) representan prioridades mas altas que la por defecto y solo **root** puede asignarlos. El sistema mostrara un error como "nice: cannot set niceness: Permission denied". Para ejecutar este comando correctamente, el usuario necesitaria usar `sudo nice -n -5 ./mi_script.sh`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-003">
<div class="flashcard-front">

**P:** Un administrador tiene un proceso con PID 5678 ejecutandose con nice 0. Quiere bajar su prioridad a nice 15. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** B) `renice -n 15 -p 5678`. Para cambiar la prioridad de un proceso **ya en ejecucion**, se utiliza `renice`, no `nice`. `nice` solo se usa para **iniciar** un nuevo proceso con una prioridad especifica. La sintaxis correcta es `renice -n 15 -p 5678`. La opcion A es incorrecta porque `nice` no acepta `-p PID` (no trabaja con procesos existentes). Aunque el orden de opciones en `renice` puede variar en algunas implementaciones, la forma estandar es `-n VALOR -p PID`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-004">
<div class="flashcard-front">

**P:** Un usuario normal tiene un proceso con PID 3456 ejecutandose con nice 10. Ejecuta: ```bash renice -n 5 -p 3456 ``` Que sucede?

</div>
<div class="flashcard-back">

**R:** C) El comando falla porque el usuario no puede bajar el nice. Un usuario normal **no puede disminuir** el valor nice de un proceso, ni siquiera si fue el quien lo subio. El proceso tiene nice 10 y el usuario intenta cambiarlo a 5, lo cual es **bajar el nice** (subir la prioridad). Esta operacion esta reservada para root. El usuario solo podria subir el nice a un valor mayor (por ejemplo, 15 o 19). Para cambiarlo a 5, necesitaria privilegios de root: `sudo renice -n 5 -p 3456`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-005">
<div class="flashcard-front">

**P:** Si un proceso tiene un valor nice de -10, cual sera su valor de prioridad (PR) mostrado en `top`?

</div>
<div class="flashcard-back">

**R:** B) 10. La relacion entre el valor nice (NI) y la prioridad del kernel (PR) es: **PR = 20 + NI**. Si NI = -10, entonces PR = 20 + (-10) = **10**. Un PR mas bajo significa mayor prioridad. Para referencia: NI = 0 da PR = 20 (por defecto), NI = -20 da PR = 0 (maxima prioridad normal), y NI = 19 da PR = 39 (minima prioridad).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-006">
<div class="flashcard-front">

**P:** Que tecla se presiona en `top` para cambiar interactivamente la prioridad (nice) de un proceso?

</div>
<div class="flashcard-back">

**R:** C) `r`. En la interfaz interactiva de `top`, la tecla `r` (de "renice") permite cambiar el valor nice de un proceso. Al presionarla, `top` solicita el PID del proceso y luego el nuevo valor nice. La tecla `k` se usa para matar (kill) un proceso. Las teclas `n` y `p` no tienen esta funcion en top (`N` ordena por PID y `P` ordena por CPU).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-007">
<div class="flashcard-front">

**P:** Un administrador quiere ejecutar una compilacion pesada sin que afecte el rendimiento del servidor. Cual es el comando mas apropiado?

</div>
<div class="flashcard-back">

**R:** C) `nice -n 19 make -j4`. `nice -n 19` inicia el proceso con la **minima prioridad posible** (nice 19), lo que significa que el proceso solo usara CPU cuando ningun otro proceso la necesite. Esto es ideal para tareas pesadas que no son urgentes. La opcion A (`nice make -j4`) usaria nice 10, que es menor prioridad pero no la minima. La opcion B usaria nice -20 (maxima prioridad), que es lo contrario de lo deseado. La opcion D es incorrecta porque `renice` cambia la prioridad de procesos ya en ejecucion, no inicia nuevos procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-008">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra el PID, valor nice, prioridad y nombre de todos los procesos del sistema?

</div>
<div class="flashcard-back">

**R:** B) `ps -eo pid,ni,pri,comm`. `ps -eo pid,ni,pri,comm` usa la opcion `-e` para seleccionar todos los procesos y `-o` para personalizar las columnas de salida: PID (identificador), NI (valor nice), PRI (prioridad del kernel) y COMM (nombre del comando). `ps aux` y `ps -ef` muestran muchas columnas pero **no incluyen nice ni prioridad** en su formato estandar. `top -n 1` mostraria una captura de los procesos con NI y PR, pero no es un comando `ps` y su formato no es tan limpio para esta consulta especifica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-009">
<div class="flashcard-front">

**P:** Que ocurre cuando un usuario normal ejecuta `nice` sin especificar ningun valor de nice ni comando?

</div>
<div class="flashcard-back">

**R:** a) Se muestra el valor nice actual del shell. Cuando se ejecuta `nice` sin argumentos, el comando muestra el valor nice actual del proceso shell en ejecucion. Normalmente mostrara `0` si no se ha modificado la prioridad. Si se ejecuta `nice comando` sin un valor explicito con `-n`, el comando se ejecuta con un incremento de nice de 10 (es decir, nice 10). Esta es una forma rapida de verificar la prioridad actual del shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-010">
<div class="flashcard-front">

**P:** Un administrador tiene un proceso critico con PID 2001 ejecutandose con nice 0. Quiere darle la maxima prioridad posible. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** b) `renice -n -20 -p 2001`. Para dar la maxima prioridad a un proceso ya en ejecucion, se usa `renice` con el valor nice mas bajo posible: -20. Solo root puede asignar valores nice negativos. La opcion `a` asignaria la minima prioridad (nice 19). La opcion `c` es incorrecta porque `nice` se usa para iniciar nuevos procesos, no para modificar procesos existentes (no acepta `-p`). La opcion `d` no cambiaria nada ya que el proceso ya tiene nice 0.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-011">
<div class="flashcard-front">

**P:** Un proceso tiene un valor nice de 19. Cual sera su valor de prioridad (PR) mostrado por el kernel?

</div>
<div class="flashcard-back">

**R:** c) 39. La relacion entre el valor nice (NI) y la prioridad del kernel (PR) es: **PR = 20 + NI**. Si NI = 19, entonces PR = 20 + 19 = **39**. Este es el valor PR mas alto posible para procesos normales, lo que significa la minima prioridad. Para referencia: NI = 0 da PR = 20 (por defecto), NI = -20 da PR = 0 (maxima prioridad normal). Un PR mayor significa menor prioridad de ejecucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-012">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos cambia la prioridad de TODOS los procesos del usuario "sandra" a nice 10?

</div>
<div class="flashcard-back">

**R:** c) `renice -n 10 -u sandra`. `renice` con la opcion `-u` permite cambiar el nice de todos los procesos de un usuario especifico. La opcion `a` es incorrecta porque `-p` espera un PID numerico, no un nombre de usuario. La opcion `b` es incorrecta porque `nice` es para iniciar nuevos procesos y no acepta la opcion `-u`. La opcion `d` combina `-u` y `-g` lo que podria funcionar en algunas implementaciones, pero no es la forma correcta y estandar de responder esta pregunta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-013">
<div class="flashcard-front">

**P:** Un usuario normal ejecuta los siguientes comandos en secuencia sobre su proceso con PID 5000: ```bash renice -n 15 -p 5000 renice -n 10 -p 5000 ``` Que valor nice tendra el proceso al final?

</div>
<div class="flashcard-back">

**R:** b) 15. El primer comando cambia el nice del proceso a 15, lo cual es valido para un usuario normal (subir nice = bajar prioridad). El segundo comando intenta cambiar el nice a 10, lo cual significa **bajar** el nice (subir prioridad). Un usuario normal **no puede bajar** el nice de un proceso, ni siquiera si fue el quien lo subio previamente. Por lo tanto, el segundo comando falla con un error de permisos y el nice se mantiene en 15. Solo root podria ejecutar el segundo comando con exito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-014">
<div class="flashcard-front">

**P:** Cual es el valor nice por defecto cuando se ejecuta `nice` sin especificar un valor con `-n`?

</div>
<div class="flashcard-back">

**R:** c) 10. Cuando se ejecuta `nice comando` sin especificar un valor con la opcion `-n`, el incremento por defecto es **10**. Es decir, el proceso se inicia con nice 10, que es una prioridad mas baja que la por defecto (0). Esto es util para ejecutar procesos en segundo plano que no necesitan alta prioridad. Si se quiere un valor diferente, se debe usar `nice -n VALOR comando`. El valor 0 es el nice por defecto de todos los procesos, no el incremento por defecto de `nice`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-015">
<div class="flashcard-front">

**P:** Que informacion muestra la columna PR en la salida de `top` cuando aparece el valor "rt"?

</div>
<div class="flashcard-back">

**R:** b) Que el proceso se ejecuta en tiempo real con prioridad superior a los procesos normales. Cuando la columna PR de `top` muestra "rt" (real-time), significa que el proceso tiene una prioridad de tiempo real, la cual es superior a cualquier prioridad de un proceso normal. Los procesos en tiempo real no se gestionan con el comando `nice` ni `renice`, ya que usan un planificador diferente. Los valores PR normales van de 0 a 39 (correspondientes a nice -20 a 19), pero los procesos en tiempo real tienen prioridades por debajo de 0 en la escala del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-016">
<div class="flashcard-front">

**P:** Que diferencia hay entre `nice -n 10 comando` y `nice -10 comando`?

</div>
<div class="flashcard-back">

**R:** b) Ambos ejecutan con nice 10; la segunda forma es una sintaxis alternativa obsoleta. Ambos comandos inician el proceso con un valor nice de 10. La forma `nice -10 comando` es una sintaxis alternativa antigua que equivale a `nice -n 10 comando`. Para valores negativos con la sintaxis obsoleta se usa doble guion: `nice --10 comando` equivale a `nice -n -10 comando`. La forma recomendada y mas clara para el examen es `nice -n VALOR comando`, ya que evita confusiones con los signos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-017">
<div class="flashcard-front">

**P:** Un administrador quiere cambiar la prioridad de todos los procesos del grupo "developers" a nice 5. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** a) `renice -n 5 -g developers`. `renice` con la opcion `-g` cambia el nice de todos los procesos que pertenecen a un grupo especifico. La sintaxis correcta es `renice -n VALOR -g GRUPO`. La opcion `b` es incorrecta porque `nice` solo inicia nuevos procesos y no acepta `-g`. La opcion `c` tiene la sintaxis incorrecta ya que intercambia el valor y el grupo. La opcion `d` no es una opcion valida de `renice`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-018">
<div class="flashcard-front">

**P:** Si un proceso tiene PR = 25 en la salida de `top`, cual es su valor nice?

</div>
<div class="flashcard-back">

**R:** c) 5. La relacion entre la prioridad del kernel (PR) y el valor nice (NI) es: **PR = 20 + NI**, por lo tanto **NI = PR - 20**. Si PR = 25, entonces NI = 25 - 20 = **5**. Esto significa que el proceso tiene una prioridad ligeramente inferior a la por defecto (nice 0, PR 20). Un valor nice de 5 indica que el proceso es "un poco mas amable" con los demas procesos, cediendo algo de tiempo de CPU.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-019">
<div class="flashcard-front">

**P:** Escribe el comando para iniciar el proceso `backup.sh` con la minima prioridad posible (nice 19). <input type="text" class="fill-blank" data-answer="nice -n 19 backup.sh" data-alt="nice -n 19 ./backup.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nice -n 19 backup.sh. El comando `nice -n 19` inicia un proceso con el valor nice mas alto posible (19), lo que le asigna la minima prioridad. Esto es ideal para tareas pesadas como backups que no deben afectar al rendimiento del sistema. El valor 19 es el maximo que puede asignar tanto un usuario normal como root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-020">
<div class="flashcard-front">

**P:** Escribe el comando para cambiar la prioridad del proceso con PID 1234 a nice 10. <input type="text" class="fill-blank" data-answer="renice -n 10 -p 1234" data-alt="renice 10 1234,renice -n 10 1234" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** renice -n 10 -p 1234. Para cambiar la prioridad de un proceso ya en ejecucion se usa `renice`. La opcion `-n` especifica el nuevo valor nice y `-p` indica el PID del proceso. Tambien es valida la forma abreviada `renice 10 1234` donde se omiten `-n` y `-p` y el PID se indica directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando `ps` que muestra el PID, valor nice, prioridad y nombre de todos los procesos del sistema. <input type="text" class="fill-blank" data-answer="ps -eo pid,ni,pri,comm" data-alt="ps -eo pid,ni,pri,command" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ps -eo pid,ni,pri,comm. La opcion `-e` selecciona todos los procesos del sistema y `-o` permite personalizar las columnas de salida. Las columnas `pid` (identificador), `ni` (valor nice), `pri` (prioridad del kernel) y `comm` (nombre del comando) muestran exactamente la informacion solicitada sobre prioridades de todos los procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para cambiar la prioridad de todos los procesos del usuario "maria" a nice 15. <input type="text" class="fill-blank" data-answer="renice -n 15 -u maria" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** renice -n 15 -u maria. La opcion `-u` de `renice` permite cambiar el valor nice de todos los procesos que pertenecen a un usuario especifico. En este caso, todos los procesos de "maria" se estableceran a nice 15 (prioridad baja). Solo root puede cambiar el nice de procesos de otros usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar el proceso `compilar.sh` con la maxima prioridad posible (nice -20), asumiendo que tienes privilegios de root. <input type="text" class="fill-blank" data-answer="nice -n -20 compilar.sh" data-alt="nice -n -20 ./compilar.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nice -n -20 compilar.sh. El comando `nice -n -20` inicia un proceso con el valor nice mas bajo posible (-20), lo que le otorga la maxima prioridad. Solo root puede asignar valores nice negativos. Esto es util para procesos criticos que necesitan la mayor cantidad de tiempo de CPU posible. La prioridad del kernel (PR) resultante seria 0 (PR = 20 + NI = 20 + (-20) = 0).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-024">
<div class="flashcard-front">

**P:** Tip de examen: La forma recomendada y mas clara es `nice -n VALOR comando`.

</div>
<div class="flashcard-back">

**R:** La forma recomendada y mas clara es `nice -n VALOR comando`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-025">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que la tecla `r` en `top` sirve para cambiar el nice (renice) de un pro...

</div>
<div class="flashcard-back">

**R:** Recuerda que la tecla `r` en `top` sirve para cambiar el nice (renice) de un proceso interactivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.6">
</div>

<div class="flashcard" data-id="103.6-fc-026">
<div class="flashcard-front">

**P:** Un candidato en el examen LPIC-1 ve que un proceso tiene PR=15 en `top` y afirma que su valor nice es 15. Otro candidato ejecuta `nice -n -5 script.sh` como usuario normal y espera que funcione. Identifica los errores de ambos y explica por que son trampas frecuentes del examen.

</div>
<div class="flashcard-back">

**R:** **Error del primer candidato:** Confundir PR (prioridad del kernel) con NI (valor nice). La relacion es **PR = 20 + NI**, por lo tanto si PR = 15, el valor nice real es NI = 15 - 20 = **-5**, no 15. Esta confusion es una de las trampas mas comunes del examen. **Error del segundo candidato:** Los usuarios normales **no pueden** asignar valores nice negativos (de -20 a -1), ya que estos aumentan la prioridad del proceso. Solo **root** puede hacerlo. El comando fallara con "Permission denied". **Otras trampas frecuentes en 103.6:** (1) Confundir `nice` (inicia procesos nuevos) con `renice` (modifica procesos existentes); (2) Creer que un usuario normal puede bajar el nice de un proceso que el mismo subio previamente (no puede, solo root); (3) Olvidar que `nice` sin `-n` aplica un incremento de **10**, no de 0; (4) Confundir la tecla `r` (renice) con `k` (kill) en la interfaz interactiva de `top`.

</div>
</div>

---

