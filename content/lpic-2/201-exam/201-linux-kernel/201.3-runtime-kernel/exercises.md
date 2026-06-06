---
title: "201.3 - Gestion del kernel en ejecucion"
tags: [lpic-2, examen-201, tema-201, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "201"
subtema: "201.3"
---

# 201.3 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un administrador necesita habilitar el reenvio de paquetes IPv4 de forma permanente. ¿Cual es la forma correcta de hacerlo?

a) `echo 1 > /proc/sys/net/ipv4/ip_forward` y anadir `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`
b) Solo ejecutar `sysctl -w net.ipv4.ip_forward=1`
c) Solo editar `/etc/modprobe.d/ip_forward.conf`
d) Recompilar el kernel con CONFIG_IP_FORWARD=y

<details>
<summary>Respuesta</summary>

**a) `echo 1 > /proc/sys/net/ipv4/ip_forward` y anadir `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`**

Para que el cambio sea tanto inmediato como permanente, se necesitan dos acciones: aplicarlo en tiempo real (ya sea con `echo` o `sysctl -w`) y configurarlo en `/etc/sysctl.conf` para que persista tras el reinicio. Alternativamente, se puede editar `sysctl.conf` y ejecutar `sysctl -p` para aplicar ambos pasos.
</details>

---

### Pregunta 2

¿Que comando carga un modulo del kernel resolviendo automaticamente sus dependencias?

a) `insmod vfat`
b) `modprobe vfat`
c) `loadmod vfat`
d) `depmod vfat`

<details>
<summary>Respuesta</summary>

**b) `modprobe vfat`**

`modprobe` es la herramienta recomendada para cargar modulos porque resuelve y carga automaticamente las dependencias (por ejemplo, carga `fat` antes de `vfat`). `insmod` requiere la ruta completa y no resuelve dependencias. `depmod` genera el archivo de dependencias pero no carga modulos. `loadmod` no existe.
</details>

---

### Pregunta 3

¿Que archivo se debe editar para impedir permanentemente que un modulo se cargue automaticamente en el arranque?

a) `/etc/modules.deny`
b) Un archivo en `/etc/modprobe.d/` con la directiva `blacklist`
c) `/proc/sys/kernel/modules_disabled`
d) `/boot/config-$(uname -r)`

<details>
<summary>Respuesta</summary>

**b) Un archivo en `/etc/modprobe.d/` con la directiva `blacklist`**

Para impedir la carga automatica de un modulo, se crea un archivo en `/etc/modprobe.d/` (por ejemplo, `/etc/modprobe.d/blacklist-nouveau.conf`) con la linea `blacklist nouveau`. Esto impide la carga automatica pero aun permite la carga manual. Para bloquear completamente, se anade `install nouveau /bin/true`.
</details>

---

### Pregunta 4

Un administrador ejecuta `modprobe -r snd_hda_intel` y recibe el error "Module snd_hda_intel is in use". ¿Que significa esto?

a) El modulo no existe
b) El modulo esta en uso por otro modulo o proceso y no puede descargarse
c) El modulo ya fue descargado previamente
d) Se necesitan permisos de root

<details>
<summary>Respuesta</summary>

**b) El modulo esta en uso por otro modulo o proceso y no puede descargarse**

El error indica que el modulo tiene dependientes activos: otros modulos que dependen de el o procesos que estan utilizandolo. Se puede verificar con `lsmod` donde la columna "Used by" muestra que modulos dependen de el. Primero hay que descargar los modulos dependientes o detener los procesos que lo utilizan.
</details>

---

### Pregunta 5

¿Que comando muestra los parametros configurables disponibles para el modulo `e1000e`?

a) `modprobe -p e1000e`
b) `modinfo -p e1000e`
c) `sysctl -m e1000e`
d) `lsmod -p e1000e`

<details>
<summary>Respuesta</summary>

**b) `modinfo -p e1000e`**

La opcion `-p` (parameters) de `modinfo` muestra los parametros configurables de un modulo junto con su descripcion y tipo. Estos parametros se pueden pasar al cargar el modulo con `modprobe e1000e parametro=valor` o configurarse permanentemente en `/etc/modprobe.d/` con la directiva `options`.
</details>

---

### Pregunta 6

¿Cual es la diferencia entre `sysctl -p` y `sysctl --system`?

a) No hay diferencia, son identicos
b) `sysctl -p` carga solo `/etc/sysctl.conf`, `sysctl --system` carga desde todos los archivos de configuracion del sistema
c) `sysctl -p` es temporal, `sysctl --system` es permanente
d) `sysctl --system` reinicia el sistema despues de aplicar los cambios

<details>
<summary>Respuesta</summary>

**b) `sysctl -p` carga solo `/etc/sysctl.conf`, `sysctl --system` carga desde todos los archivos de configuracion del sistema**

`sysctl -p` carga la configuracion desde `/etc/sysctl.conf` por defecto (o un archivo especificado con `sysctl -p /ruta/archivo`). `sysctl --system` carga la configuracion desde todos los archivos de configuracion del sistema: `/etc/sysctl.conf`, `/etc/sysctl.d/*.conf`, `/run/sysctl.d/*.conf`, `/usr/lib/sysctl.d/*.conf`, etc.
</details>

---

### Pregunta 7

Un administrador necesita diagnosticar por que un dispositivo USB no es reconocido. ¿Que comando es el mas apropiado para ver los mensajes del kernel relacionados?

a) `sysctl -a | grep usb`
b) `modinfo usb`
c) `dmesg -T | grep -i usb`
d) `cat /etc/modprobe.d/usb.conf`

<details>
<summary>Respuesta</summary>

**c) `dmesg -T | grep -i usb`**

`dmesg` muestra el buffer de anillo del kernel que contiene mensajes sobre deteccion de hardware, carga de drivers y errores. La opcion `-T` muestra marcas de tiempo legibles. Filtrar con `grep -i usb` muestra solo los mensajes relacionados con dispositivos USB, facilitando el diagnostico.
</details>

---

### Pregunta 8

¿Que ocurre cuando se ejecuta `depmod` sin argumentos?

a) Descarga e instala modulos nuevos desde internet
b) Desinstala modulos que no se estan usando
c) Analiza los modulos del kernel actual y genera el archivo modules.dep con las dependencias
d) Carga todos los modulos disponibles

<details>
<summary>Respuesta</summary>

**c) Analiza los modulos del kernel actual y genera el archivo modules.dep con las dependencias**

`depmod` escanea todos los modulos en `/lib/modules/$(uname -r)/` y genera el archivo `modules.dep` (y su version binaria `modules.dep.bin`) que contiene el arbol de dependencias entre modulos. `modprobe` utiliza este archivo para resolver dependencias. Se debe ejecutar `depmod` despues de instalar modulos manualmente.
</details>

---

### Pregunta 9

¿Que parametro de sysctl controla la tendencia del sistema a mover paginas de memoria al area de swap?

a) `vm.swap_enabled`
b) `vm.swappiness`
c) `kernel.swap_ratio`
d) `fs.swap_usage`

<details>
<summary>Respuesta</summary>

**b) `vm.swappiness`**

`vm.swappiness` es un valor entre 0 y 100 que controla la agresividad con la que el kernel mueve paginas de la RAM al swap. Un valor de 0 minimiza el uso de swap (solo se usa cuando es absolutamente necesario), mientras que 100 hace que el kernel use swap agresivamente. El valor por defecto es 60. Para servidores de base de datos se suele reducir a 10.
</details>

---

### Pregunta 10

Un administrador quiere configurar el modulo `snd_hda_intel` para que siempre se cargue con el parametro `power_save=1`. ¿Donde y como debe configurarlo?

a) Editar `/proc/sys/kernel/modules/snd_hda_intel/power_save`
b) Crear un archivo en `/etc/modprobe.d/` con la linea `options snd_hda_intel power_save=1`
c) Editar `/lib/modules/$(uname -r)/kernel/sound/pci/hda/snd_hda_intel.ko`
d) Agregar `snd_hda_intel.power_save=1` en `/etc/sysctl.conf`

<details>
<summary>Respuesta</summary>

**b) Crear un archivo en `/etc/modprobe.d/` con la linea `options snd_hda_intel power_save=1`**

La directiva `options` en archivos de `/etc/modprobe.d/` permite definir parametros que se aplican automaticamente cada vez que se carga un modulo con `modprobe`. Por ejemplo, crear `/etc/modprobe.d/snd_hda_intel.conf` con `options snd_hda_intel power_save=1`. Los parametros de modulos no se gestionan con `sysctl`, que es para parametros del kernel en `/proc/sys/`.
</details>

---

### Pregunta 11

Un administrador ejecuta `modprobe -n -v vfat`. ¿Que efecto tiene este comando?

a) Carga el modulo vfat y muestra informacion detallada
b) Simula la carga del modulo vfat mostrando lo que se haria, sin cargarlo realmente (dry-run)
c) Descarga el modulo vfat en modo verbose
d) Verifica si el modulo vfat tiene errores de integridad

<details><summary>Respuesta</summary>

**b) Simula la carga del modulo vfat mostrando lo que se haria, sin cargarlo realmente (dry-run)**

La combinacion de opciones `-n` (dry-run) y `-v` (verbose) en `modprobe` simula la carga del modulo sin ejecutarla realmente, mostrando todas las acciones que se realizarian, incluyendo la resolucion de dependencias. Es util para verificar que modulos se cargarian y en que orden antes de hacer la carga real.

</details>

---

### Pregunta 12

¿Que directiva en un archivo de `/etc/modprobe.d/` bloquea completamente la carga de un modulo, incluso si se intenta cargar manualmente?

a) `blacklist modulo`
b) `deny modulo`
c) `install modulo /bin/true`
d) `block modulo`

<details><summary>Respuesta</summary>

**c) `install modulo /bin/true`**

La directiva `blacklist` solo impide la carga automatica del modulo (por ejemplo, mediante udev), pero aun permite la carga manual con `modprobe`. Para bloquear completamente la carga de un modulo, se usa `install modulo /bin/true`, que redirige el intento de carga a ejecutar `/bin/true` (un comando que no hace nada), impidiendo efectivamente que el modulo se cargue bajo cualquier circunstancia.

</details>

---

### Pregunta 13

Un administrador quiere deshabilitar las respuestas a ping en un servidor Linux de forma inmediata y permanente. ¿Que combinacion de acciones es correcta?

a) Ejecutar `sysctl -w net.ipv4.icmp_echo_ignore_all=1` y agregar la misma linea en `/etc/sysctl.conf`
b) Solo ejecutar `echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_all`
c) Solo editar `/etc/modprobe.d/icmp.conf`
d) Ejecutar `iptables -A INPUT -p icmp --icmp-type echo-request -j DROP` unicamente

<details><summary>Respuesta</summary>

**a) Ejecutar `sysctl -w net.ipv4.icmp_echo_ignore_all=1` y agregar la misma linea en `/etc/sysctl.conf`**

Para que el cambio sea inmediato, se usa `sysctl -w net.ipv4.icmp_echo_ignore_all=1`. Para que persista tras el reinicio, se agrega `net.ipv4.icmp_echo_ignore_all = 1` en `/etc/sysctl.conf` o en un archivo de `/etc/sysctl.d/`. El valor `1` indica que se ignoran todos los pings. La opcion b) usaria el valor incorrecto (0 no deshabilitaria nada) y no seria permanente.

</details>

---

### Pregunta 14

¿Que nivel de mensaje del kernel corresponde a "condicion critica" en la escala de severidad de dmesg?

a) Nivel 0 (emerg)
b) Nivel 2 (crit)
c) Nivel 3 (err)
d) Nivel 4 (warning)

<details><summary>Respuesta</summary>

**b) Nivel 2 (crit)**

Los niveles de mensajes del kernel van del 0 al 7, siendo 0 el mas grave: 0=emerg (sistema inutilizable), 1=alert (accion inmediata necesaria), 2=crit (condicion critica), 3=err (error), 4=warning (advertencia), 5=notice (normal pero significativo), 6=info (informativo), 7=debug (depuracion). Se pueden filtrar con `dmesg --level=crit`.

</details>

---

### Pregunta 15

¿Que parametro de sysctl permite configurar el numero de segundos que el sistema espera antes de reiniciarse automaticamente despues de un kernel panic?

a) `kernel.reboot_timeout`
b) `kernel.panic`
c) `kernel.panic_timeout`
d) `kernel.auto_reboot`

<details><summary>Respuesta</summary>

**b) `kernel.panic`**

El parametro `kernel.panic` define el numero de segundos que el kernel espera antes de reiniciar automaticamente despues de un panic. Un valor de `0` (por defecto) significa que el sistema no se reinicia automaticamente. Un valor como `10` haria que el sistema se reinicie 10 segundos despues del panic. Es importante para servidores en produccion donde un reinicio automatico es preferible a un sistema congelado.

</details>

---

### Pregunta 16

Un administrador necesita ver los mensajes del kernel en tiempo real mientras conecta dispositivos USB. ¿Que comando debe usar?

a) `dmesg -w`
b) `dmesg -c`
c) `dmesg -H`
d) `dmesg --level=info`

<details><summary>Respuesta</summary>

**a) `dmesg -w`**

La opcion `-w` (wait) de `dmesg` pone el comando en modo de seguimiento (similar a `tail -f`), mostrando los nuevos mensajes del kernel en tiempo real conforme se generan. Es ideal para diagnosticar problemas de hardware conectando dispositivos. `-c` limpia el buffer, `-H` formatea con colores y paginacion, y `--level=info` solo filtra por nivel.

</details>

---

### Pregunta 17

¿Que archivo del directorio `/lib/modules/<version>/` contiene la lista de dependencias entre modulos que `modprobe` utiliza para resolver dependencias automaticamente?

a) `modules.alias`
b) `modules.dep`
c) `modules.builtin`
d) `modules.symbols`

<details><summary>Respuesta</summary>

**b) `modules.dep`**

El archivo `modules.dep` contiene el arbol completo de dependencias entre modulos del kernel. Es generado por el comando `depmod` y utilizado por `modprobe` para saber que modulos adicionales deben cargarse antes del modulo solicitado. Existe tambien una version binaria `modules.dep.bin` para consultas mas rapidas. `modules.alias` mapea alias a modulos, y `modules.builtin` lista modulos compilados dentro del kernel.

</details>

---

### Pregunta 18

¿Que parametro de sysctl se debe habilitar para que un servidor Linux funcione como router, reenviando paquetes entre interfaces de red?

a) `net.ipv4.tcp_syncookies`
b) `net.ipv4.ip_forward`
c) `net.core.somaxconn`
d) `kernel.hostname`

<details><summary>Respuesta</summary>

**b) `net.ipv4.ip_forward`**

El parametro `net.ipv4.ip_forward` habilita (valor `1`) o deshabilita (valor `0`) el reenvio de paquetes IPv4 entre interfaces de red, funcion esencial para que un servidor actue como router. Para IPv6 se usa `net.ipv6.conf.all.forwarding`. `tcp_syncookies` es para proteccion contra SYN flood, `somaxconn` para el backlog de conexiones TCP, y `kernel.hostname` para el nombre del host.

</details>

---

### Pregunta 19

Un administrador instala un modulo del kernel manualmente copiando el archivo `.ko` a `/lib/modules/<version>/`. ¿Que comando debe ejecutar para que `modprobe` pueda encontrar el nuevo modulo?

a) `modprobe --refresh`
b) `insmod --update`
c) `depmod`
d) `lsmod --rebuild`

<details><summary>Respuesta</summary>

**c) `depmod`**

Despues de instalar un modulo manualmente, es necesario ejecutar `depmod` para que escanee todos los modulos en `/lib/modules/<version>/` y regenere el archivo `modules.dep` con las dependencias actualizadas. Sin ejecutar `depmod`, `modprobe` no sera capaz de encontrar el nuevo modulo ni resolver sus dependencias.

</details>

---

### Pregunta 20

¿Que diferencia principal existe entre `insmod` y `modprobe` al cargar modulos del kernel?

a) `insmod` es mas rapido porque no verifica dependencias
b) `modprobe` resuelve dependencias automaticamente y solo necesita el nombre del modulo; `insmod` requiere la ruta completa y no resuelve dependencias
c) `insmod` es la version moderna de `modprobe`
d) No hay diferencia, son alias del mismo comando

<details><summary>Respuesta</summary>

**b) `modprobe` resuelve dependencias automaticamente y solo necesita el nombre del modulo; `insmod` requiere la ruta completa y no resuelve dependencias**

`modprobe` es la herramienta recomendada porque consulta `modules.dep` para resolver y cargar automaticamente todas las dependencias necesarias, y solo necesita el nombre del modulo (sin ruta). `insmod` es una herramienta de bajo nivel que requiere la ruta completa del archivo `.ko` y falla si las dependencias no estan cargadas previamente.

</details>

---

### Pregunta 21

¿Que comando habilita el reenvio de paquetes IPv4 en tiempo real usando `sysctl`?

<input type="text" class="fill-blank" data-answer="sysctl -w net.ipv4.ip_forward=1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sysctl -w net.ipv4.ip_forward=1**

El comando `sysctl -w net.ipv4.ip_forward=1` establece el parametro de reenvio de paquetes IPv4 a `1` (habilitado) de forma inmediata. La opcion `-w` (write) indica que se va a modificar un parametro. Este cambio es temporal y se pierde al reiniciar; para hacerlo permanente se debe agregar `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`.

</details>

---

### Pregunta 22

¿Que comando aplica todos los parametros definidos en `/etc/sysctl.conf` al sistema en ejecucion?

<input type="text" class="fill-blank" data-answer="sysctl -p" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sysctl -p**

El comando `sysctl -p` lee y aplica los parametros configurados en el archivo `/etc/sysctl.conf` (por defecto). Si se quiere cargar desde un archivo diferente, se especifica la ruta: `sysctl -p /etc/sysctl.d/99-custom.conf`. Para cargar desde todos los archivos de configuracion del sistema se usa `sysctl --system`.

</details>

---

### Pregunta 23

¿Que comando descarga el modulo `vfat` del kernel, incluyendo sus dependencias no utilizadas?

<input type="text" class="fill-blank" data-answer="modprobe -r vfat" data-alt="modprobe --remove vfat" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**modprobe -r vfat**

El comando `modprobe -r` (o `modprobe --remove`) descarga el modulo especificado y tambien intenta descargar las dependencias que ya no estan siendo utilizadas por ningun otro modulo. A diferencia de `rmmod`, que solo descarga el modulo indicado, `modprobe -r` gestiona las dependencias de forma inteligente.

</details>

---

### Pregunta 24

¿Que comando muestra los mensajes del buffer de anillo del kernel con marcas de tiempo en formato legible?

<input type="text" class="fill-blank" data-answer="dmesg -T" data-alt="dmesg --ctime" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dmesg -T**

La opcion `-T` (o `--ctime`) de `dmesg` convierte las marcas de tiempo del kernel (que por defecto son segundos desde el arranque) a un formato de fecha y hora legible. Esto facilita correlacionar los mensajes del kernel con eventos especificos del sistema. Sin `-T`, las marcas de tiempo se muestran como segundos relativos al arranque.

</details>

---

### Pregunta 25

¿Que comando muestra todos los parametros ajustables del kernel disponibles via `sysctl`?

<input type="text" class="fill-blank" data-answer="sysctl -a" data-alt="sysctl --all" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sysctl -a**

El comando `sysctl -a` (o `sysctl --all`) lista todos los parametros del kernel que son ajustables a traves de `/proc/sys/`, mostrando su nombre y valor actual. La salida puede ser extensa, por lo que frecuentemente se combina con `grep` para filtrar parametros especificos, como `sysctl -a | grep swappiness`.

</details>
