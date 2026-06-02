---
title: "108.1 Mantener la hora del sistema - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-108
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "108"
subtema: "108.1"
---

# 108.1 Mantener la hora del sistema - Ejercicios

### Pregunta 1

Un administrador necesita copiar la hora actual del sistema operativo al reloj hardware (RTC). Cual de los siguientes comandos es el correcto?

a) `hwclock --hctosys`
b) `hwclock --systohc`
c) `timedatectl set-rtc`
d) `date --set-hwclock`

<details><summary>Respuesta</summary>

**b) `hwclock --systohc`**

`hwclock --systohc` significa "System TO Hardware Clock", es decir, copia la hora del reloj del sistema al reloj hardware (RTC). La opcion `--hctosys` hace lo contrario: copia la hora del hardware al sistema. `timedatectl set-rtc` y `date --set-hwclock` no son comandos validos.

</details>

---

### Pregunta 2

Que archivo contiene la informacion sobre si el reloj hardware (RTC) esta configurado en UTC o en hora local?

a) `/etc/localtime`
b) `/etc/timezone`
c) `/etc/adjtime`
d) `/etc/ntp.conf`

<details><summary>Respuesta</summary>

**c) `/etc/adjtime`**

El archivo `/etc/adjtime` contiene tres lineas: informacion de deriva (drift), la fecha del ultimo ajuste y en la tercera linea indica `UTC` o `LOCAL` segun la configuracion del reloj hardware. `/etc/localtime` es un enlace simbolico a la zona horaria del sistema. `/etc/timezone` contiene el nombre de la zona horaria en Debian/Ubuntu. `/etc/ntp.conf` es la configuracion del demonio NTP.

</details>

---

### Pregunta 3

Cual es el puerto y protocolo de transporte que utiliza NTP?

a) TCP 123
b) UDP 123
c) TCP 514
d) UDP 514

<details><summary>Respuesta</summary>

**b) UDP 123**

NTP (Network Time Protocol) utiliza el puerto 123 con el protocolo de transporte UDP. El puerto 514 con UDP corresponde a syslog. NTP usa UDP porque la sincronizacion de tiempo requiere baja latencia y el overhead de una conexion TCP seria contraproducente.

</details>

---

### Pregunta 4

En la salida de `ntpq -p`, que indica el simbolo `*` junto al nombre de un servidor?

a) El servidor esta descartado por el algoritmo de seleccion
b) El servidor es un candidato aceptable que podria ser seleccionado
c) El servidor esta seleccionado actualmente como fuente de sincronizacion
d) El servidor ha sido designado como falseticker

<details><summary>Respuesta</summary>

**c) El servidor esta seleccionado actualmente como fuente de sincronizacion**

En la salida de `ntpq -p`, el simbolo `*` indica que ese servidor es la fuente de sincronizacion actualmente seleccionada. El simbolo `+` indica un candidato aceptable, `-` indica un servidor descartado por el algoritmo, y `x` indica un falseticker. Estos simbolos son importantes para diagnosticar el estado de la sincronizacion NTP.

</details>

---

### Pregunta 5

Cual de las siguientes afirmaciones sobre `systemd-timesyncd` es correcta?

a) Puede actuar como servidor y cliente NTP
b) Implementa el protocolo NTP completo con calculo de drift
c) Es un cliente SNTP ligero que solo puede actuar como cliente
d) Su archivo de configuracion es `/etc/ntp.conf`

<details><summary>Respuesta</summary>

**c) Es un cliente SNTP ligero que solo puede actuar como cliente**

`systemd-timesyncd` es un cliente SNTP (Simple NTP) ligero integrado en systemd. Solo puede actuar como cliente, no como servidor NTP. Utiliza SNTP en lugar del protocolo NTP completo, por lo que no calcula drift ni mantiene un driftfile. Su archivo de configuracion es `/etc/systemd/timesyncd.conf`. Para actuar como servidor NTP se necesita ntpd o chrony.

</details>

---

### Pregunta 6

Un administrador ejecuta `timedatectl set-ntp true`. Que servicio se activa con este comando?

a) ntpd
b) chronyd
c) systemd-timesyncd
d) ntpdate

<details><summary>Respuesta</summary>

**c) systemd-timesyncd**

El comando `timedatectl set-ntp true` activa el servicio `systemd-timesyncd`, no ntpd ni chronyd. Este es un punto importante para el examen LPIC-1. Si se necesita ntpd o chrony, deben instalarse y configurarse por separado. `ntpdate` es una herramienta deprecada de sincronizacion puntual, no un servicio permanente.

</details>

---

### Pregunta 7

Cual es el estrato maximo valido en el sistema de estratos de NTP?

a) 10
b) 15
c) 16
d) 255

<details><summary>Respuesta</summary>

**b) 15**

En el sistema de estratos de NTP, el estrato maximo valido es 15. El estrato 0 corresponde a dispositivos de referencia (relojes atomicos, GPS) que no son accesibles directamente por red. El estrato 1 son servidores conectados directamente a dispositivos de estrato 0. Cada nivel sucesivo se sincroniza con el anterior. El estrato 16 indica "no sincronizado" y se considera invalido.

</details>

---

### Pregunta 8

Cual de los siguientes comandos muestra las fuentes de tiempo en chrony, de forma equivalente a `ntpq -p` en ntpd?

a) `chronyc tracking`
b) `chronyc sources`
c) `chronyc activity`
d) `chronyc serverstats`

<details><summary>Respuesta</summary>

**b) `chronyc sources`**

`chronyc sources` muestra las fuentes NTP configuradas y su estado, de forma equivalente a `ntpq -p` en ntpd. `chronyc tracking` muestra informacion detallada de sincronizacion del sistema. `chronyc activity` muestra el numero de fuentes online/offline. `chronyc serverstats` no es un subcomando valido de chronyc. Se puede usar `chronyc sources -v` para obtener una explicacion detallada de las columnas.

</details>

---

### Pregunta 9

Que comando se utiliza para mostrar la fecha actual del sistema en formato `AAAA-MM-DD HH:MM:SS`?

a) `date +%d-%m-%Y %H:%M:%S`
b) `date "+%Y-%m-%d %H:%M:%S"`
c) `date --format=iso`
d) `timedatectl show --format`

<details><summary>Respuesta</summary>

**b) `date "+%Y-%m-%d %H:%M:%S"`**

El comando `date` con la cadena de formato `"+%Y-%m-%d %H:%M:%S"` produce una salida como `2024-01-15 14:30:45`. Los codigos de formato son: `%Y` (anio 4 digitos), `%m` (mes 01-12), `%d` (dia 01-31), `%H` (hora 00-23), `%M` (minutos 00-59), `%S` (segundos 00-59). Las comillas son necesarias porque el formato contiene espacios. La opcion A tiene el orden de fecha incorrecto (dia-mes-anio en lugar de anio-mes-dia).

</details>

---

### Pregunta 10

En la terminologia NTP, cual es la diferencia entre un ajuste "step" y un ajuste "slew"?

a) Step es un ajuste gradual y slew es un salto abrupto
b) Step es un salto abrupto del reloj y slew es un ajuste gradual acelerando o frenando el reloj
c) Step se usa para diferencias menores a 1 segundo y slew para diferencias mayores
d) No hay diferencia, son sinonimos del mismo tipo de ajuste

<details><summary>Respuesta</summary>

**b) Step es un salto abrupto del reloj y slew es un ajuste gradual acelerando o frenando el reloj**

Un ajuste "step" cambia el reloj de golpe, lo cual es rapido pero puede causar problemas en aplicaciones sensibles al tiempo (logs desordenados, transacciones duplicadas). Un ajuste "slew" modifica el reloj gradualmente acelerandolo o frenandolo ligeramente, lo cual es mas seguro para aplicaciones en produccion pero tarda mas en sincronizar. NTP usa slew para diferencias pequenas y step para diferencias grandes.

</details>

---

### Pregunta 11

Que diferencia hay entre el reloj hardware (RTC) y el reloj del sistema en Linux?

a) El reloj hardware es mas preciso y se sincroniza automaticamente con NTP
b) El reloj hardware es un chip fisico alimentado por pila que funciona con el equipo apagado; el reloj del sistema es mantenido por el kernel en memoria
c) El reloj del sistema funciona con el equipo apagado y el reloj hardware solo mientras esta encendido
d) No hay diferencia, ambos son el mismo reloj

<details><summary>Respuesta</summary>

**b) El reloj hardware es un chip fisico alimentado por pila que funciona con el equipo apagado; el reloj del sistema es mantenido por el kernel en memoria**

Linux mantiene dos relojes independientes. El reloj hardware (RTC/CMOS) es un chip fisico en la placa base alimentado por una pila CR2032 que sigue funcionando con el equipo apagado, pero es menos preciso (puede desviarse varios segundos al dia). El reloj del sistema (system clock) es mantenido por el kernel en memoria, se inicializa al arrancar con la hora del RTC, y puede sincronizarse con servidores NTP. Se accede al RTC con `hwclock` y al reloj del sistema con `date` o `timedatectl`.

</details>

---

### Pregunta 12

Que opcion de `hwclock` copia la hora del reloj hardware al reloj del sistema?

a) `hwclock --systohc`
b) `hwclock --hctosys`
c) `hwclock --set`
d) `hwclock --sync`

<details><summary>Respuesta</summary>

**b) `hwclock --hctosys`**

`hwclock --hctosys` significa "Hardware Clock TO System", es decir, copia la hora del reloj hardware (RTC) al reloj del sistema. Lo contrario es `hwclock --systohc` (System TO Hardware Clock), que copia la hora del sistema al hardware. La opcion `--hctosys` se usa tipicamente durante el arranque del sistema para inicializar el reloj del sistema a partir del RTC. `hwclock --set --date "..."` establece directamente una hora en el RTC.

</details>

---

### Pregunta 13

Que significa un estrato (stratum) 0 en el sistema jerarquico de NTP?

a) Un servidor NTP de maxima confianza accesible por red
b) Un dispositivo de referencia de tiempo (reloj atomico, GPS) no accesible directamente por red
c) Un servidor NTP que no esta sincronizado
d) Un cliente NTP que acaba de iniciarse

<details><summary>Respuesta</summary>

**b) Un dispositivo de referencia de tiempo (reloj atomico, GPS) no accesible directamente por red**

El estrato 0 corresponde a dispositivos de referencia de tiempo de maxima precision como relojes atomicos, receptores GPS o relojes de radio. Estos dispositivos no son accesibles directamente por red NTP. Los servidores de estrato 1 estan conectados directamente a dispositivos de estrato 0. Cada nivel siguiente se sincroniza con el anterior hasta el estrato 15 (maximo valido). El estrato 16 indica "no sincronizado" y se considera invalido.

</details>

---

### Pregunta 14

Que archivo de configuracion utiliza chrony?

a) `/etc/ntp.conf`
b) `/etc/chrony.conf`
c) `/etc/systemd/timesyncd.conf`
d) `/etc/time.conf`

<details><summary>Respuesta</summary>

**b) `/etc/chrony.conf`**

Chrony utiliza `/etc/chrony.conf` como archivo de configuracion principal. En este archivo se definen los servidores NTP (con la directiva `server`), el archivo de drift (`driftfile`), la politica de ajuste (`makestep`) y la sincronizacion del RTC (`rtcsync`). `/etc/ntp.conf` es la configuracion de ntpd (el demonio NTP clasico). `/etc/systemd/timesyncd.conf` es la configuracion de systemd-timesyncd. Chrony esta compuesto por el demonio `chronyd` y la herramienta de linea de comandos `chronyc`.

</details>

---

### Pregunta 15

Que significa la directiva `makestep 1.0 3` en la configuracion de chrony?

a) Sincronizar cada 3 segundos si la diferencia es mayor a 1 segundo
b) Permitir un salto en el reloj si la diferencia es mayor a 1 segundo, solo en los primeros 3 ajustes
c) Ajustar gradualmente durante 3 segundos si la diferencia supera 1 milisegundo
d) Reiniciar el servicio 3 veces si la diferencia es mayor a 1 segundo

<details><summary>Respuesta</summary>

**b) Permitir un salto en el reloj si la diferencia es mayor a 1 segundo, solo en los primeros 3 ajustes**

La directiva `makestep 1.0 3` en chrony permite un ajuste tipo step (salto abrupto) si la diferencia entre el reloj local y el servidor NTP es mayor a 1.0 segundo, pero solo durante los primeros 3 ajustes despues del arranque. Despues de esos 3 ajustes iniciales, chrony solo realizara ajustes graduales (slew). Esto es util para corregir grandes desviaciones al arrancar sin afectar la estabilidad durante la operacion normal.

</details>

---

### Pregunta 16

Que codigo de formato de `date` muestra los segundos transcurridos desde el epoch Unix (01/01/1970)?

a) `date +%E`
b) `date +%s`
c) `date +%S`
d) `date +%u`

<details><summary>Respuesta</summary>

**b) `date +%s`**

El codigo `%s` de `date` muestra el epoch Unix, es decir, el numero de segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC. No confundir con `%S` (mayuscula), que muestra los segundos del reloj (00-59). `%u` muestra el dia de la semana como numero (1=lunes, 7=domingo). El epoch Unix es muy util en scripts para calcular diferencias de tiempo y para marcas de tiempo independientes de la zona horaria.

</details>

---

### Pregunta 17

Que opcion de `iburst` hace en la configuracion de servidores NTP?

a) Bloquea las conexiones al servidor si falla la primera consulta
b) Envia una rafaga de consultas iniciales para sincronizar mas rapidamente
c) Cifra la comunicacion con el servidor NTP
d) Limita el ancho de banda de las consultas NTP

<details><summary>Respuesta</summary>

**b) Envia una rafaga de consultas iniciales para sincronizar mas rapidamente**

La opcion `iburst` en la configuracion de servidores NTP (tanto en `/etc/ntp.conf` como en `/etc/chrony.conf`) hace que se envie una rafaga de 4-8 paquetes en intervalos cortos cuando se contacta al servidor por primera vez, en lugar de esperar al intervalo de consulta normal. Esto permite una sincronizacion inicial mucho mas rapida. Ejemplo: `server 0.pool.ntp.org iburst`. Es una practica recomendada incluirla en la configuracion de todos los servidores NTP.

</details>

---

### Pregunta 18

En la salida de `ntpq -p`, que indica el valor `377` en la columna `reach`?

a) Que el servidor tiene 377 milisegundos de retardo
b) Que las ultimas 8 consultas al servidor fueron exitosas
c) Que el servidor esta en el estrato 377
d) Que la conexion con el servidor fallo 377 veces

<details><summary>Respuesta</summary>

**b) Que las ultimas 8 consultas al servidor fueron exitosas**

El campo `reach` en la salida de `ntpq -p` es un registro de alcanzabilidad en formato octal. El valor `377` en octal equivale a `11111111` en binario, lo que indica que las ultimas 8 consultas al servidor NTP fueron exitosas. Un valor de `0` indica que no se ha podido contactar al servidor. Un valor de `1` indica que solo la consulta mas reciente fue exitosa. El valor maximo es `377` (todas las ultimas 8 consultas exitosas).

</details>

---

### Pregunta 19

Que herramienta reemplazo a `ntpdate` para sincronizacion puntual del reloj usando chrony?

a) `chronyc makestep`
b) `chronyd -q`
c) `chronyc set-time`
d) `chrony --sync`

<details><summary>Respuesta</summary>

**b) `chronyd -q`**

`chronyd -q` ejecuta chrony en modo de sincronizacion unica: contacta los servidores NTP, ajusta el reloj del sistema y sale inmediatamente. Es el reemplazo moderno de `ntpdate`. Otras alternativas a `ntpdate` incluyen `ntpd -gq` (con ntpd clasico) y `timedatectl set-ntp true` (con systemd-timesyncd). `ntpdate` esta deprecado porque no debe ejecutarse mientras otro demonio NTP esta en ejecucion, ya que causa conflictos con el ajuste gradual que realizan ntpd o chronyd.

</details>

---

### Pregunta 20

Que termino NTP describe la variacion o inestabilidad del offset entre consultas sucesivas a un servidor?

a) Drift
b) Offset
c) Jitter
d) Stratum

<details><summary>Respuesta</summary>

**c) Jitter**

El jitter es la variacion (inestabilidad) del offset entre consultas sucesivas a un servidor NTP. Un jitter bajo indica una conexion estable con el servidor. El offset es la diferencia de tiempo entre el reloj local y el servidor. El drift es la tendencia del reloj local a desviarse con el tiempo (se registra en el driftfile). El stratum es el nivel jerarquico del servidor en la arquitectura NTP. Menor jitter y menor offset indican una mejor sincronizacion.

</details>

---

### Pregunta 21

Escribe el comando para mostrar la fecha y hora actual del reloj hardware (RTC).

<input type="text" class="fill-blank" data-answer="hwclock -r" data-alt="hwclock --show,hwclock" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**hwclock -r**

El comando `hwclock -r` (o `hwclock --show`) lee y muestra la hora actual del reloj hardware (RTC). Tambien se puede usar simplemente `hwclock` sin opciones. Para sincronizar el RTC con el reloj del sistema: `hwclock --systohc`. Para sincronizar el reloj del sistema con el RTC: `hwclock --hctosys`. La informacion sobre si el RTC esta en UTC o hora local se almacena en `/etc/adjtime`.

</details>

---

### Pregunta 22

Escribe el comando para copiar la hora del sistema operativo al reloj hardware.

<input type="text" class="fill-blank" data-answer="hwclock --systohc" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**hwclock --systohc**

`hwclock --systohc` (System TO Hardware Clock) copia la hora del reloj del sistema al reloj hardware (RTC). Este comando se ejecuta tipicamente despues de sincronizar el reloj del sistema con NTP, para que el RTC tambien tenga la hora correcta. La operacion inversa es `hwclock --hctosys`, que copia la hora del hardware al sistema.

</details>

---

### Pregunta 23

Escribe el comando para ver las fuentes de tiempo (peers NTP) configuradas en chrony.

<input type="text" class="fill-blank" data-answer="chronyc sources" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chronyc sources**

`chronyc sources` muestra las fuentes NTP configuradas en chrony junto con su estado, de forma equivalente a `ntpq -p` en ntpd clasico. La salida incluye el estrato, el intervalo de consulta (Poll), el registro de alcanzabilidad (Reach), la ultima consulta (LastRx) y la diferencia de tiempo. El simbolo `^*` indica la fuente actualmente seleccionada, `^+` una fuente aceptable, `^-` una fuente excluida y `^?` una fuente sin conectividad.

</details>

---

### Pregunta 24

Escribe el comando para activar la sincronizacion NTP usando `timedatectl`.

<input type="text" class="fill-blank" data-answer="timedatectl set-ntp true" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**timedatectl set-ntp true**

`timedatectl set-ntp true` activa la sincronizacion de tiempo con NTP, habilitando generalmente el servicio `systemd-timesyncd` (cliente SNTP ligero integrado en systemd). Para desactivar la sincronizacion: `timedatectl set-ntp false`. Es importante notar que `timedatectl set-ntp true` activa `systemd-timesyncd`, no ntpd ni chronyd. Si se necesita ntpd o chrony, deben instalarse y configurarse por separado.

</details>

---

### Pregunta 25

Escribe el comando de `date` para mostrar la fecha actual en formato `AAAA-MM-DD`.

<input type="text" class="fill-blank" data-answer="date +%Y-%m-%d" data-alt="date '+%Y-%m-%d'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**date +%Y-%m-%d**

El comando `date +%Y-%m-%d` muestra la fecha actual en formato ISO 8601 (por ejemplo, `2026-06-02`). Los codigos de formato son: `%Y` (anio con 4 digitos), `%m` (mes con dos digitos, 01-12) y `%d` (dia del mes con dos digitos, 01-31). Para incluir la hora: `date "+%Y-%m-%d %H:%M:%S"`. Las comillas son necesarias cuando el formato contiene espacios.

</details>
