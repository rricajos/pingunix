---
title: "332.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "332.3"
---

# Flashcards: 332.3 - Control De Recursos

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-001">
<div class="flashcard-front">

**P:** ¿Que comando muestra el limite maximo de archivos abiertos (hard limit) para la sesion actual?

</div>
<div class="flashcard-back">

**R:** b). `ulimit -Hn`  La opcion `-H` muestra el hard limit y `-n` se refiere a los archivos abiertos (nofile). Sin `-H` o `-S`, ulimit muestra el soft limit por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-002">
<div class="flashcard-front">

**P:** ¿Que linea en `/etc/security/limits.conf` limita a 500 el numero maximo de procesos para todos los usuarios?

</div>
<div class="flashcard-back">

**R:** b). `* hard nproc 500`  El asterisco (`*`) aplica a todos los usuarios, `hard` establece el limite maximo que no puede ser sobrepasado, y `nproc` es el item que controla el numero de procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando crea un cgroup v1 con controladores de CPU y memoria llamado "webapps"?

</div>
<div class="flashcard-back">

**R:** b). `cgcreate -g cpu,memory:webapps`  `cgcreate` crea un nuevo cgroup. La opcion `-g` especifica los controladores y el nombre del grupo en formato `controlador1,controlador2:nombre`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-004">
<div class="flashcard-front">

**P:** ¿Que directiva de systemd limita un servicio a un maximo de 512MB de memoria?

</div>
<div class="flashcard-back">

**R:** b). `MemoryMax=512M`  `MemoryMax` establece el limite duro de memoria para el servicio. Si el servicio intenta usar mas, el OOM killer lo terminara. `MemoryHigh` es el limite suave que aplica presion de reclamacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que mecanismo protege mejor contra una fork bomb?

</div>
<div class="flashcard-back">

**R:** b). Establecer un limite hard de `nproc` en limits.conf  Un limite hard de `nproc` restringe el numero maximo de procesos que un usuario puede crear, impidiendo que una fork bomb consuma todos los PIDs del sistema. Aumentar `pid_max` solo retrasaria el problema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-006">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre cgroups v1 y v2?

</div>
<div class="flashcard-back">

**R:** c). v2 usa una jerarquia unica unificada, v1 usa una jerarquia por controlador  En cgroups v1, cada controlador (cpu, memory, etc.) tiene su propia jerarquia independiente. Cgroups v2 unifica todos los controladores en una sola jerarquia, simplificando la gestion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando ejecuta un proceso dentro de un cgroup v1 especifico?

</div>
<div class="flashcard-back">

**R:** b). `cgexec -g cpu,memory:migrupo /usr/bin/app`  `cgexec` ejecuta un comando dentro de un cgroup existente. La opcion `-g` especifica los controladores y el nombre del grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-008">
<div class="flashcard-front">

**P:** ¿Que significa `CPUQuota=200%` en una unidad systemd?

</div>
<div class="flashcard-back">

**R:** b). El servicio puede usar hasta 2 cores de CPU  `CPUQuota` se expresa como porcentaje de un core. 100% = 1 core, 200% = 2 cores. En un sistema con 4 cores, el maximo seria 400%.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que modulo PAM debe estar habilitado para que los limites de `/etc/security/limits.conf` se apliquen?

</div>
<div class="flashcard-back">

**R:** b). `pam_limits.so`  El modulo `pam_limits.so` lee `/etc/security/limits.conf` y aplica los limites durante la autenticacion. Debe estar presente como `session required pam_limits.so` en los archivos PAM correspondientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-010">
<div class="flashcard-front">

**P:** ¿Que comando de systemd muestra en tiempo real el uso de recursos (CPU, memoria) por cgroup, similar a `top`?

</div>
<div class="flashcard-back">

**R:** a). `systemd-cgtop`  `systemd-cgtop` muestra en tiempo real el uso de CPU, memoria y I/O de cada cgroup, similar a `top` pero organizado por cgroups. `systemd-cgls` muestra la jerarquia en forma de arbol sin datos de uso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-011">
<div class="flashcard-front">

**P:** En cgroups v2, que archivo dentro del directorio del cgroup define el limite maximo de memoria para el grupo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. En cgroups v2, memory.max define el limite duro de memoria. Si el grupo supera este valor el OOM killer actua. memory.high es el limite suave que aplica presion de reclamacion antes del limite duro.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-012">
<div class="flashcard-front">

**P:** Que comando de systemd muestra la jerarquia completa de cgroups en forma de arbol?

</div>
<div class="flashcard-back">

**R:** b) Correcta. systemd-cgls muestra la jerarquia de cgroups en forma de arbol con los procesos asignados a cada grupo. systemd-cgtop muestra el uso de recursos en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-013">
<div class="flashcard-front">

**P:** Que linea en /etc/security/limits.conf limita a 4 el numero maximo de sesiones simultaneas para todos los usuarios?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El item maxlogins en limits.conf controla el numero maximo de sesiones de login simultaneas. Con * hard maxlogins 4 ningún usuario excepto root puede tener mas de 4 sesiones activas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-014">
<div class="flashcard-front">

**P:** Que directiva de una unidad systemd establece un limite de CPU del 50% de un core para el servicio?

</div>
<div class="flashcard-back">

**R:** b) Correcta. CPUQuota establece la cuota de CPU como porcentaje de un core. 50% equivale a medio core. Para usar 2 cores completos se usaria CPUQuota=200%. CPUWeight define el peso relativo de planificacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-015">
<div class="flashcard-front">

**P:** Que controlador de cgroups v1 limita el numero total de procesos y tareas en el grupo?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El controlador pids en cgroups v1 y v2 limita el numero total de procesos y tareas (threads) que pueden existir en el cgroup. Se configura mediante pids.max en v2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-016">
<div class="flashcard-front">

**P:** Que opcion de ulimit establece simultaneamente el limite soft y hard para archivos abiertos a 8192?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opcion -SH aplica el valor tanto al soft como al hard limit simultaneamente. Sin especificar S o H, ulimit -n solo modifica el soft limit.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-017">
<div class="flashcard-front">

**P:** Que archivo de configuracion de cgroups v1 define la asignacion automatica de procesos de un usuario a un cgroup especifico?

</div>
<div class="flashcard-back">

**R:** b) Correcta. /etc/cgrules.conf define reglas para asignar automaticamente procesos de usuarios o grupos a cgroups especificos. El formato es: usuario controladores nombre_cgroup. /etc/cgconfig.conf define la estructura de los cgroups.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-018">
<div class="flashcard-front">

**P:** Que valor de CPUQuota en una unidad systemd permite que el servicio use hasta 4 cores de CPU?

</div>
<div class="flashcard-back">

**R:** b) Correcta. CPUQuota se expresa como porcentaje de un core: 100% = 1 core, 200% = 2 cores, 400% = 4 cores. En un sistema con 8 cores el maximo seria 800%.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-019">
<div class="flashcard-front">

**P:** Que comando mueve el proceso con PID 1234 al cgroup v1 llamado migrupo con controladores cpu y memory?

</div>
<div class="flashcard-back">

**R:** b) Correcta. cgclassify mueve un proceso ya en ejecucion a un cgroup existente. A diferencia de cgexec que lanza el proceso directamente en el cgroup, cgclassify reasigna procesos existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-020">
<div class="flashcard-front">

**P:** Que parametro del kernel limita el numero maximo de PIDs que pueden existir simultaneamente en el sistema?

</div>
<div class="flashcard-back">

**R:** a) Correcta. El parametro kernel.pid_max define el limite maximo de identificadores de proceso. El valor por defecto suele ser 32768. Puede ajustarse via sysctl -w kernel.pid_max=valor para entornos con muchos procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-021">
<div class="flashcard-front">

**P:** Que comando muestra en tiempo real el uso de CPU, memoria e I/O de cada cgroup del sistema?

</div>
<div class="flashcard-back">

**R:** systemd-cgtop. systemd-cgtop es similar a top pero organizado por jerarquia de cgroups. Muestra el consumo de recursos actualizado periodicamente para cada cgroup y sus procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-022">
<div class="flashcard-front">

**P:** Que opcion de ulimit muestra todos los limites actuales tanto soft como hard de la sesion?

</div>
<div class="flashcard-back">

**R:** ulimit -a. ulimit -a muestra los soft limits. Para ver los hard limits se usa ulimit -Ha. Sin la opcion -H o -S se muestran los soft limits por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-023">
<div class="flashcard-front">

**P:** Que linea en /etc/security/limits.conf impide que el grupo developers cree mas de 50 procesos?

</div>
<div class="flashcard-back">

**R:** @developers hard nproc 50. El prefijo @ indica que el dominio es un grupo. hard establece el limite que no puede superarse. nproc controla el numero maximo de procesos por usuario dentro del grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-024">
<div class="flashcard-front">

**P:** Que comando de systemctl aplica un limite de memoria de 256MB a mi-servicio de forma persistente?

</div>
<div class="flashcard-back">

**R:** systemctl set-property mi-servicio.service MemoryMax=256M. systemctl set-property aplica cambios que por defecto son persistentes (crea archivos drop-in). Con --runtime el cambio es solo temporal hasta el reinicio del servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-025">
<div class="flashcard-front">

**P:** Que archivo de configuracion de systemd se usa para definir limites de recursos para un slice personalizado?

</div>
<div class="flashcard-back">

**R:** /etc/systemd/system/miapp.slice. Un slice se define como un archivo .slice en /etc/systemd/system/. Dentro del bloque [Slice] se especifican directivas como CPUQuota, MemoryMax y TasksMax para controlar los recursos del grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las diferencias entre ulimit (limites por sesion), limits.conf (limites p...

</div>
<div class="flashcard-back">

**R:** Conoce las diferencias entre ulimit (limites por sesion), limits.conf (limites persistentes por usuario/grupo) y cgroups (limites por grupo de procesos). Entiende cgroups v1 vs v2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `pam_limits` debe estar habilitado en PAM para que limits.conf surta efecto. Ver...

</div>
<div class="flashcard-back">

**R:** `pam_limits` debe estar habilitado en PAM para que limits.conf surta efecto. Verifica que existe la linea `session required pam_limits.so` en los archivos PAM correspondientes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `systemctl set-property` aplica cambios persistentes por defecto (crea archivos ...

</div>
<div class="flashcard-back">

**R:** `systemctl set-property` aplica cambios persistentes por defecto (crea archivos drop-in). Usa `--runtime` para cambios temporales. `CPUQuota=200%` permite usar hasta 2 cores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `-n`?

</div>
<div class="flashcard-back">

**R:** Numero maximo de archivos abiertos (nofile)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `-u`?

</div>
<div class="flashcard-back">

**R:** Numero maximo de procesos (nproc)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `-f`?

</div>
<div class="flashcard-back">

**R:** Tamaño maximo de archivo creado

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `-l`?

</div>
<div class="flashcard-back">

**R:** Memoria bloqueada maxima (mlock)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `-t`?

</div>
<div class="flashcard-back">

**R:** Tiempo de CPU maximo (segundos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son ulimit?

</div>
<div class="flashcard-back">

**R:** `ulimit` establece limites de recursos para la sesion actual del shell y sus procesos hijos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son /etc/security/limits.conf?

</div>
<div class="flashcard-back">

**R:** Para hacer limites persistentes, se configuran en `/etc/security/limits.conf` o en archivos dentro de `/etc/security/limits.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Proteccion Contra Fork Bombs?

</div>
<div class="flashcard-back">

**R:** Una fork bomb es un proceso que se replica indefinidamente, consumiendo todos los recursos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Cgroups v1?

</div>
<div class="flashcard-back">

**R:** Los Control Groups (cgroups) permiten limitar, contabilizar y aislar el uso de recursos de grupos de procesos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son Cgroups v2?

</div>
<div class="flashcard-back">

**R:** Cgroups v2 es la version unificada con una jerarquia unica. Es el valor por defecto en distribuciones modernas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son Control de Recursos con systemd?

</div>
<div class="flashcard-back">

**R:** systemd integra cgroups nativamente para gestionar recursos de servicios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son pam_limits?

</div>
<div class="flashcard-back">

**R:** El modulo `pam_limits` aplica los limites definidos en `/etc/security/limits.conf` durante la autenticacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.3">
</div>

<div class="flashcard" data-id="332.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

