---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "332 - Seguridad del Host"
tema: "332.3 - Control de recursos"
subtema: "332.3"
peso: 3
tags:
  - lpic-3
  - tema-332
  - ulimit
  - cgroups
  - systemd
---

# Ejercicios - 332.3 Control de Recursos

### Pregunta 1
¿Que comando muestra el limite maximo de archivos abiertos (hard limit) para la sesion actual?

a) `ulimit -n`
b) `ulimit -Hn`
c) `ulimit -a | grep files`
d) `limits -nofile`

<details><summary>Respuesta</summary>

**b)** `ulimit -Hn`

La opcion `-H` muestra el hard limit y `-n` se refiere a los archivos abiertos (nofile). Sin `-H` o `-S`, ulimit muestra el soft limit por defecto.
</details>

### Pregunta 2
¿Que linea en `/etc/security/limits.conf` limita a 500 el numero maximo de procesos para todos los usuarios?

a) `* soft nproc 500`
b) `* hard nproc 500`
c) `all hard processes 500`
d) `everybody hard nproc 500`

<details><summary>Respuesta</summary>

**b)** `* hard nproc 500`

El asterisco (`*`) aplica a todos los usuarios, `hard` establece el limite maximo que no puede ser sobrepasado, y `nproc` es el item que controla el numero de procesos.
</details>

### Pregunta 3
¿Que comando crea un cgroup v1 con controladores de CPU y memoria llamado "webapps"?

a) `cgroup create --cpu --memory webapps`
b) `cgcreate -g cpu,memory:webapps`
c) `mkdir /sys/fs/cgroup/cpu,memory/webapps`
d) `cgset --create cpu,memory webapps`

<details><summary>Respuesta</summary>

**b)** `cgcreate -g cpu,memory:webapps`

`cgcreate` crea un nuevo cgroup. La opcion `-g` especifica los controladores y el nombre del grupo en formato `controlador1,controlador2:nombre`.
</details>

### Pregunta 4
¿Que directiva de systemd limita un servicio a un maximo de 512MB de memoria?

a) `MemoryLimit=512M`
b) `MemoryMax=512M`
c) `MaxMemory=512M`
d) `LimitMEMORY=512M`

<details><summary>Respuesta</summary>

**b)** `MemoryMax=512M`

`MemoryMax` establece el limite duro de memoria para el servicio. Si el servicio intenta usar mas, el OOM killer lo terminara. `MemoryHigh` es el limite suave que aplica presion de reclamacion.
</details>

### Pregunta 5
¿Que mecanismo protege mejor contra una fork bomb?

a) Aumentar `kernel.pid_max`
b) Establecer un limite hard de `nproc` en limits.conf
c) Deshabilitar el swap
d) Aumentar la memoria RAM

<details><summary>Respuesta</summary>

**b)** Establecer un limite hard de `nproc` en limits.conf

Un limite hard de `nproc` restringe el numero maximo de procesos que un usuario puede crear, impidiendo que una fork bomb consuma todos los PIDs del sistema. Aumentar `pid_max` solo retrasaria el problema.
</details>

### Pregunta 6
¿Cual es la diferencia principal entre cgroups v1 y v2?

a) v2 no soporta limites de memoria
b) v1 usa una jerarquia unica, v2 usa multiples
c) v2 usa una jerarquia unica unificada, v1 usa una jerarquia por controlador
d) v2 solo funciona con systemd, v1 funciona de forma independiente

<details><summary>Respuesta</summary>

**c)** v2 usa una jerarquia unica unificada, v1 usa una jerarquia por controlador

En cgroups v1, cada controlador (cpu, memory, etc.) tiene su propia jerarquia independiente. Cgroups v2 unifica todos los controladores en una sola jerarquia, simplificando la gestion.
</details>

### Pregunta 7
¿Que comando ejecuta un proceso dentro de un cgroup v1 especifico?

a) `cgroup-run -g cpu:migrupo /usr/bin/app`
b) `cgexec -g cpu,memory:migrupo /usr/bin/app`
c) `cgrun --group cpu,memory:migrupo /usr/bin/app`
d) `cgstart -g cpu:migrupo /usr/bin/app`

<details><summary>Respuesta</summary>

**b)** `cgexec -g cpu,memory:migrupo /usr/bin/app`

`cgexec` ejecuta un comando dentro de un cgroup existente. La opcion `-g` especifica los controladores y el nombre del grupo.
</details>

### Pregunta 8
¿Que significa `CPUQuota=200%` en una unidad systemd?

a) El servicio tiene prioridad doble sobre otros
b) El servicio puede usar hasta 2 cores de CPU
c) La cuota se aplica al 200% del limite normal
d) Es un valor invalido, el maximo es 100%

<details><summary>Respuesta</summary>

**b)** El servicio puede usar hasta 2 cores de CPU

`CPUQuota` se expresa como porcentaje de un core. 100% = 1 core, 200% = 2 cores. En un sistema con 4 cores, el maximo seria 400%.
</details>

### Pregunta 9
¿Que modulo PAM debe estar habilitado para que los limites de `/etc/security/limits.conf` se apliquen?

a) `pam_ulimit.so`
b) `pam_limits.so`
c) `pam_security.so`
d) `pam_resource.so`

<details><summary>Respuesta</summary>

**b)** `pam_limits.so`

El modulo `pam_limits.so` lee `/etc/security/limits.conf` y aplica los limites durante la autenticacion. Debe estar presente como `session required pam_limits.so` en los archivos PAM correspondientes.
</details>

### Pregunta 10
¿Que comando de systemd muestra en tiempo real el uso de recursos (CPU, memoria) por cgroup, similar a `top`?

a) `systemd-cgtop`
b) `systemd-cgls`
c) `systemctl resource-top`
d) `cgstats`

<details><summary>Respuesta</summary>

**a)** `systemd-cgtop`

`systemd-cgtop` muestra en tiempo real el uso de CPU, memoria y I/O de cada cgroup, similar a `top` pero organizado por cgroups. `systemd-cgls` muestra la jerarquia en forma de arbol sin datos de uso.
</details>

### Pregunta 11

En cgroups v2, que archivo dentro del directorio del cgroup define el limite maximo de memoria para el grupo?

a) memory.limit
b) memory.max
c) memory.hard_limit
d) mem.max

<details><summary>Respuesta</summary>

**b) Correcta**

En cgroups v2, memory.max define el limite duro de memoria. Si el grupo supera este valor el OOM killer actua. memory.high es el limite suave que aplica presion de reclamacion antes del limite duro.

</details>

### Pregunta 12

Que comando de systemd muestra la jerarquia completa de cgroups en forma de arbol?

a) systemd-cgtop
b) systemd-cgls
c) systemctl cgroup-tree
d) systemctl show --cgroup

<details><summary>Respuesta</summary>

**b) Correcta**

systemd-cgls muestra la jerarquia de cgroups en forma de arbol con los procesos asignados a cada grupo. systemd-cgtop muestra el uso de recursos en tiempo real.

</details>

### Pregunta 13

Que linea en /etc/security/limits.conf limita a 4 el numero maximo de sesiones simultaneas para todos los usuarios?

a) * hard sessions 4
b) * hard maxlogins 4
c) all hard logins 4
d) * soft maxsessions 4

<details><summary>Respuesta</summary>

**b) Correcta**

El item maxlogins en limits.conf controla el numero maximo de sesiones de login simultaneas. Con * hard maxlogins 4 ningún usuario excepto root puede tener mas de 4 sesiones activas.

</details>

### Pregunta 14

Que directiva de una unidad systemd establece un limite de CPU del 50% de un core para el servicio?

a) CPULimit=50%
b) CPUQuota=50%
c) CPUMax=50%
d) CPUWeight=50

<details><summary>Respuesta</summary>

**b) Correcta**

CPUQuota establece la cuota de CPU como porcentaje de un core. 50% equivale a medio core. Para usar 2 cores completos se usaria CPUQuota=200%. CPUWeight define el peso relativo de planificacion.

</details>

### Pregunta 15

Que controlador de cgroups v1 limita el numero total de procesos y tareas en el grupo?

a) cpu
b) nproc
c) pids
d) tasks

<details><summary>Respuesta</summary>

**c) Correcta**

El controlador pids en cgroups v1 y v2 limita el numero total de procesos y tareas (threads) que pueden existir en el cgroup. Se configura mediante pids.max en v2.

</details>

### Pregunta 16

Que opcion de ulimit establece simultaneamente el limite soft y hard para archivos abiertos a 8192?

a) ulimit -n 8192
b) ulimit -SHn 8192
c) ulimit -Hn 8192 y ulimit -Sn 8192 por separado
d) ulimit -fn 8192

<details><summary>Respuesta</summary>

**b) Correcta**

La opcion -SH aplica el valor tanto al soft como al hard limit simultaneamente. Sin especificar S o H, ulimit -n solo modifica el soft limit.

</details>

### Pregunta 17

Que archivo de configuracion de cgroups v1 define la asignacion automatica de procesos de un usuario a un cgroup especifico?

a) /etc/cgconfig.conf
b) /etc/cgrules.conf
c) /etc/cgroup.conf
d) /etc/cgexec.conf

<details><summary>Respuesta</summary>

**b) Correcta**

/etc/cgrules.conf define reglas para asignar automaticamente procesos de usuarios o grupos a cgroups especificos. El formato es: usuario controladores nombre_cgroup. /etc/cgconfig.conf define la estructura de los cgroups.

</details>

### Pregunta 18

Que valor de CPUQuota en una unidad systemd permite que el servicio use hasta 4 cores de CPU?

a) CPUQuota=4
b) CPUQuota=400%
c) CPUQuota=4000m
d) CPUQuota=4core

<details><summary>Respuesta</summary>

**b) Correcta**

CPUQuota se expresa como porcentaje de un core: 100% = 1 core, 200% = 2 cores, 400% = 4 cores. En un sistema con 8 cores el maximo seria 800%.

</details>

### Pregunta 19

Que comando mueve el proceso con PID 1234 al cgroup v1 llamado migrupo con controladores cpu y memory?

a) cgmove -g cpu,memory:migrupo 1234
b) cgclassify -g cpu,memory:migrupo 1234
c) cgroup-set --pid 1234 cpu,memory:migrupo
d) cgassign -p 1234 -g cpu,memory:migrupo

<details><summary>Respuesta</summary>

**b) Correcta**

cgclassify mueve un proceso ya en ejecucion a un cgroup existente. A diferencia de cgexec que lanza el proceso directamente en el cgroup, cgclassify reasigna procesos existentes.

</details>

### Pregunta 20

Que parametro del kernel limita el numero maximo de PIDs que pueden existir simultaneamente en el sistema?

a) kernel.pid_max
b) kernel.max_pids
c) kernel.nproc_max
d) kernel.task_max

<details><summary>Respuesta</summary>

**a) Correcta**

El parametro kernel.pid_max define el limite maximo de identificadores de proceso. El valor por defecto suele ser 32768. Puede ajustarse via sysctl -w kernel.pid_max=valor para entornos con muchos procesos.

</details>

### Pregunta 21

Que comando muestra en tiempo real el uso de CPU, memoria e I/O de cada cgroup del sistema?

<input type="text" class="fill-blank" data-answer="systemd-cgtop" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemd-cgtop**

systemd-cgtop es similar a top pero organizado por jerarquia de cgroups. Muestra el consumo de recursos actualizado periodicamente para cada cgroup y sus procesos.

</details>

### Pregunta 22

Que opcion de ulimit muestra todos los limites actuales tanto soft como hard de la sesion?

<input type="text" class="fill-blank" data-answer="ulimit -a" data-alt="ulimit -Sa" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ulimit -a**

ulimit -a muestra los soft limits. Para ver los hard limits se usa ulimit -Ha. Sin la opcion -H o -S se muestran los soft limits por defecto.

</details>

### Pregunta 23

Que linea en /etc/security/limits.conf impide que el grupo developers cree mas de 50 procesos?

<input type="text" class="fill-blank" data-answer="@developers hard nproc 50" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**@developers hard nproc 50**

El prefijo @ indica que el dominio es un grupo. hard establece el limite que no puede superarse. nproc controla el numero maximo de procesos por usuario dentro del grupo.

</details>

### Pregunta 24

Que comando de systemctl aplica un limite de memoria de 256MB a mi-servicio de forma persistente?

<input type="text" class="fill-blank" data-answer="systemctl set-property mi-servicio.service MemoryMax=256M" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl set-property mi-servicio.service MemoryMax=256M**

systemctl set-property aplica cambios que por defecto son persistentes (crea archivos drop-in). Con --runtime el cambio es solo temporal hasta el reinicio del servicio.

</details>

### Pregunta 25

Que archivo de configuracion de systemd se usa para definir limites de recursos para un slice personalizado?

<input type="text" class="fill-blank" data-answer="/etc/systemd/system/miapp.slice" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/etc/systemd/system/miapp.slice**

Un slice se define como un archivo .slice en /etc/systemd/system/. Dentro del bloque [Slice] se especifican directivas como CPUQuota, MemoryMax y TasksMax para controlar los recursos del grupo.

</details>
