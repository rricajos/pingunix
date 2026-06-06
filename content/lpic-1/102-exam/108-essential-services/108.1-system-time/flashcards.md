---
title: "108.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "108.1"
---

# Flashcards: 108.1 - Hora Del Sistema

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita copiar la hora actual del sistema operativo al reloj hardware (RTC). Cual de los siguientes comandos es el correcto?

</div>
<div class="flashcard-back">

**R:** b) `hwclock --systohc`. `hwclock --systohc` significa "System TO Hardware Clock", es decir, copia la hora del reloj del sistema al reloj hardware (RTC). La opcion `--hctosys` hace lo contrario: copia la hora del hardware al sistema. `timedatectl set-rtc` y `date --set-hwclock` no son comandos validos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-002">
<div class="flashcard-front">

**P:** Que archivo contiene la informacion sobre si el reloj hardware (RTC) esta configurado en UTC o en hora local?

</div>
<div class="flashcard-back">

**R:** c) `/etc/adjtime`. El archivo `/etc/adjtime` contiene tres lineas: informacion de deriva (drift), la fecha del ultimo ajuste y en la tercera linea indica `UTC` o `LOCAL` segun la configuracion del reloj hardware. `/etc/localtime` es un enlace simbolico a la zona horaria del sistema. `/etc/timezone` contiene el nombre de la zona horaria en Debian/Ubuntu. `/etc/ntp.conf` es la configuracion del demonio NTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-003">
<div class="flashcard-front">

**P:** Cual es el puerto y protocolo de transporte que utiliza NTP?

</div>
<div class="flashcard-back">

**R:** b) UDP 123. NTP (Network Time Protocol) utiliza el puerto 123 con el protocolo de transporte UDP. El puerto 514 con UDP corresponde a syslog. NTP usa UDP porque la sincronizacion de tiempo requiere baja latencia y el overhead de una conexion TCP seria contraproducente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-004">
<div class="flashcard-front">

**P:** En la salida de `ntpq -p`, que indica el simbolo `*` junto al nombre de un servidor?

</div>
<div class="flashcard-back">

**R:** c) El servidor esta seleccionado actualmente como fuente de sincronizacion. En la salida de `ntpq -p`, el simbolo `*` indica que ese servidor es la fuente de sincronizacion actualmente seleccionada. El simbolo `+` indica un candidato aceptable, `-` indica un servidor descartado por el algoritmo, y `x` indica un falseticker. Estos simbolos son importantes para diagnosticar el estado de la sincronizacion NTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-005">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre `systemd-timesyncd` es correcta?

</div>
<div class="flashcard-back">

**R:** c) Es un cliente SNTP ligero que solo puede actuar como cliente. `systemd-timesyncd` es un cliente SNTP (Simple NTP) ligero integrado en systemd. Solo puede actuar como cliente, no como servidor NTP. Utiliza SNTP en lugar del protocolo NTP completo, por lo que no calcula drift ni mantiene un driftfile. Su archivo de configuracion es `/etc/systemd/timesyncd.conf`. Para actuar como servidor NTP se necesita ntpd o chrony.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-006">
<div class="flashcard-front">

**P:** Un administrador ejecuta `timedatectl set-ntp true`. Que servicio se activa con este comando?

</div>
<div class="flashcard-back">

**R:** c) systemd-timesyncd. El comando `timedatectl set-ntp true` activa el servicio `systemd-timesyncd`, no ntpd ni chronyd. Este es un punto importante para el examen LPIC-1. Si se necesita ntpd o chrony, deben instalarse y configurarse por separado. `ntpdate` es una herramienta deprecada de sincronizacion puntual, no un servicio permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-007">
<div class="flashcard-front">

**P:** Cual es el estrato maximo valido en el sistema de estratos de NTP?

</div>
<div class="flashcard-back">

**R:** b) 15. En el sistema de estratos de NTP, el estrato maximo valido es 15. El estrato 0 corresponde a dispositivos de referencia (relojes atomicos, GPS) que no son accesibles directamente por red. El estrato 1 son servidores conectados directamente a dispositivos de estrato 0. Cada nivel sucesivo se sincroniza con el anterior. El estrato 16 indica "no sincronizado" y se considera invalido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-008">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra las fuentes de tiempo en chrony, de forma equivalente a `ntpq -p` en ntpd?

</div>
<div class="flashcard-back">

**R:** b) `chronyc sources`. `chronyc sources` muestra las fuentes NTP configuradas y su estado, de forma equivalente a `ntpq -p` en ntpd. `chronyc tracking` muestra informacion detallada de sincronizacion del sistema. `chronyc activity` muestra el numero de fuentes online/offline. `chronyc serverstats` no es un subcomando valido de chronyc. Se puede usar `chronyc sources -v` para obtener una explicacion detallada de las columnas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-009">
<div class="flashcard-front">

**P:** Que comando se utiliza para mostrar la fecha actual del sistema en formato `AAAA-MM-DD HH:MM:SS`?

</div>
<div class="flashcard-back">

**R:** b) `date "+%Y-%m-%d %H:%M:%S"`. El comando `date` con la cadena de formato `"+%Y-%m-%d %H:%M:%S"` produce una salida como `2024-01-15 14:30:45`. Los codigos de formato son: `%Y` (anio 4 digitos), `%m` (mes 01-12), `%d` (dia 01-31), `%H` (hora 00-23), `%M` (minutos 00-59), `%S` (segundos 00-59). Las comillas son necesarias porque el formato contiene espacios. La opcion A tiene el orden de fecha incorrecto (dia-mes-anio en lugar de anio-mes-dia).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-010">
<div class="flashcard-front">

**P:** En la terminologia NTP, cual es la diferencia entre un ajuste "step" y un ajuste "slew"?

</div>
<div class="flashcard-back">

**R:** b) Step es un salto abrupto del reloj y slew es un ajuste gradual acelerando o frenando el reloj. Un ajuste "step" cambia el reloj de golpe, lo cual es rapido pero puede causar problemas en aplicaciones sensibles al tiempo (logs desordenados, transacciones duplicadas). Un ajuste "slew" modifica el reloj gradualmente acelerandolo o frenandolo ligeramente, lo cual es mas seguro para aplicaciones en produccion pero tarda mas en sincronizar. NTP usa slew para diferencias pequenas y step para diferencias grandes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-011">
<div class="flashcard-front">

**P:** Que diferencia hay entre el reloj hardware (RTC) y el reloj del sistema en Linux?

</div>
<div class="flashcard-back">

**R:** b) El reloj hardware es un chip fisico alimentado por pila que funciona con el equipo apagado; el reloj del sistema es mantenido por el kernel en memoria. Linux mantiene dos relojes independientes. El reloj hardware (RTC/CMOS) es un chip fisico en la placa base alimentado por una pila CR2032 que sigue funcionando con el equipo apagado, pero es menos preciso (puede desviarse varios segundos al dia). El reloj del sistema (system clock) es mantenido por el kernel en memoria, se inicializa al arrancar con la hora del RTC, y puede sincronizarse con servidores NTP. Se accede al RTC con `hwclock` y al reloj del sistema con `date` o `timedatectl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-012">
<div class="flashcard-front">

**P:** Que opcion de `hwclock` copia la hora del reloj hardware al reloj del sistema?

</div>
<div class="flashcard-back">

**R:** b) `hwclock --hctosys`. `hwclock --hctosys` significa "Hardware Clock TO System", es decir, copia la hora del reloj hardware (RTC) al reloj del sistema. Lo contrario es `hwclock --systohc` (System TO Hardware Clock), que copia la hora del sistema al hardware. La opcion `--hctosys` se usa tipicamente durante el arranque del sistema para inicializar el reloj del sistema a partir del RTC. `hwclock --set --date "..."` establece directamente una hora en el RTC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-013">
<div class="flashcard-front">

**P:** Que significa un estrato (stratum) 0 en el sistema jerarquico de NTP?

</div>
<div class="flashcard-back">

**R:** b) Un dispositivo de referencia de tiempo (reloj atomico, GPS) no accesible directamente por red. El estrato 0 corresponde a dispositivos de referencia de tiempo de maxima precision como relojes atomicos, receptores GPS o relojes de radio. Estos dispositivos no son accesibles directamente por red NTP. Los servidores de estrato 1 estan conectados directamente a dispositivos de estrato 0. Cada nivel siguiente se sincroniza con el anterior hasta el estrato 15 (maximo valido). El estrato 16 indica "no sincronizado" y se considera invalido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-014">
<div class="flashcard-front">

**P:** Que archivo de configuracion utiliza chrony?

</div>
<div class="flashcard-back">

**R:** b) `/etc/chrony.conf`. Chrony utiliza `/etc/chrony.conf` como archivo de configuracion principal. En este archivo se definen los servidores NTP (con la directiva `server`), el archivo de drift (`driftfile`), la politica de ajuste (`makestep`) y la sincronizacion del RTC (`rtcsync`). `/etc/ntp.conf` es la configuracion de ntpd (el demonio NTP clasico). `/etc/systemd/timesyncd.conf` es la configuracion de systemd-timesyncd. Chrony esta compuesto por el demonio `chronyd` y la herramienta de linea de comandos `chronyc`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-015">
<div class="flashcard-front">

**P:** Que significa la directiva `makestep 1.0 3` en la configuracion de chrony?

</div>
<div class="flashcard-back">

**R:** b) Permitir un salto en el reloj si la diferencia es mayor a 1 segundo, solo en los primeros 3 ajustes. La directiva `makestep 1.0 3` en chrony permite un ajuste tipo step (salto abrupto) si la diferencia entre el reloj local y el servidor NTP es mayor a 1.0 segundo, pero solo durante los primeros 3 ajustes despues del arranque. Despues de esos 3 ajustes iniciales, chrony solo realizara ajustes graduales (slew). Esto es util para corregir grandes desviaciones al arrancar sin afectar la estabilidad durante la operacion normal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-016">
<div class="flashcard-front">

**P:** Que codigo de formato de `date` muestra los segundos transcurridos desde el epoch Unix (01/01/1970)?

</div>
<div class="flashcard-back">

**R:** b) `date +%s`. El codigo `%s` de `date` muestra el epoch Unix, es decir, el numero de segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC. No confundir con `%S` (mayuscula), que muestra los segundos del reloj (00-59). `%u` muestra el dia de la semana como numero (1=lunes, 7=domingo). El epoch Unix es muy util en scripts para calcular diferencias de tiempo y para marcas de tiempo independientes de la zona horaria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-017">
<div class="flashcard-front">

**P:** Que opcion de `iburst` hace en la configuracion de servidores NTP?

</div>
<div class="flashcard-back">

**R:** b) Envia una rafaga de consultas iniciales para sincronizar mas rapidamente. La opcion `iburst` en la configuracion de servidores NTP (tanto en `/etc/ntp.conf` como en `/etc/chrony.conf`) hace que se envie una rafaga de 4-8 paquetes en intervalos cortos cuando se contacta al servidor por primera vez, en lugar de esperar al intervalo de consulta normal. Esto permite una sincronizacion inicial mucho mas rapida. Ejemplo: `server 0.pool.ntp.org iburst`. Es una practica recomendada incluirla en la configuracion de todos los servidores NTP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-018">
<div class="flashcard-front">

**P:** En la salida de `ntpq -p`, que indica el valor `377` en la columna `reach`?

</div>
<div class="flashcard-back">

**R:** b) Que las ultimas 8 consultas al servidor fueron exitosas. El campo `reach` en la salida de `ntpq -p` es un registro de alcanzabilidad en formato octal. El valor `377` en octal equivale a `11111111` en binario, lo que indica que las ultimas 8 consultas al servidor NTP fueron exitosas. Un valor de `0` indica que no se ha podido contactar al servidor. Un valor de `1` indica que solo la consulta mas reciente fue exitosa. El valor maximo es `377` (todas las ultimas 8 consultas exitosas).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-019">
<div class="flashcard-front">

**P:** Que herramienta reemplazo a `ntpdate` para sincronizacion puntual del reloj usando chrony?

</div>
<div class="flashcard-back">

**R:** b) `chronyd -q`. `chronyd -q` ejecuta chrony en modo de sincronizacion unica: contacta los servidores NTP, ajusta el reloj del sistema y sale inmediatamente. Es el reemplazo moderno de `ntpdate`. Otras alternativas a `ntpdate` incluyen `ntpd -gq` (con ntpd clasico) y `timedatectl set-ntp true` (con systemd-timesyncd). `ntpdate` esta deprecado porque no debe ejecutarse mientras otro demonio NTP esta en ejecucion, ya que causa conflictos con el ajuste gradual que realizan ntpd o chronyd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-020">
<div class="flashcard-front">

**P:** Que termino NTP describe la variacion o inestabilidad del offset entre consultas sucesivas a un servidor?

</div>
<div class="flashcard-back">

**R:** c) Jitter. El jitter es la variacion (inestabilidad) del offset entre consultas sucesivas a un servidor NTP. Un jitter bajo indica una conexion estable con el servidor. El offset es la diferencia de tiempo entre el reloj local y el servidor. El drift es la tendencia del reloj local a desviarse con el tiempo (se registra en el driftfile). El stratum es el nivel jerarquico del servidor en la arquitectura NTP. Menor jitter y menor offset indican una mejor sincronizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para mostrar la fecha y hora actual del reloj hardware (RTC). <input type="text" class="fill-blank" data-answer="hwclock -r" data-alt="hwclock --show,hwclock" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** hwclock -r. El comando `hwclock -r` (o `hwclock --show`) lee y muestra la hora actual del reloj hardware (RTC). Tambien se puede usar simplemente `hwclock` sin opciones. Para sincronizar el RTC con el reloj del sistema: `hwclock --systohc`. Para sincronizar el reloj del sistema con el RTC: `hwclock --hctosys`. La informacion sobre si el RTC esta en UTC o hora local se almacena en `/etc/adjtime`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para copiar la hora del sistema operativo al reloj hardware. <input type="text" class="fill-blank" data-answer="hwclock --systohc" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** hwclock --systohc. `hwclock --systohc` (System TO Hardware Clock) copia la hora del reloj del sistema al reloj hardware (RTC). Este comando se ejecuta tipicamente despues de sincronizar el reloj del sistema con NTP, para que el RTC tambien tenga la hora correcta. La operacion inversa es `hwclock --hctosys`, que copia la hora del hardware al sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ver las fuentes de tiempo (peers NTP) configuradas en chrony. <input type="text" class="fill-blank" data-answer="chronyc sources" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** chronyc sources. `chronyc sources` muestra las fuentes NTP configuradas en chrony junto con su estado, de forma equivalente a `ntpq -p` en ntpd clasico. La salida incluye el estrato, el intervalo de consulta (Poll), el registro de alcanzabilidad (Reach), la ultima consulta (LastRx) y la diferencia de tiempo. El simbolo `^*` indica la fuente actualmente seleccionada, `^+` una fuente aceptable, `^-` una fuente excluida y `^?` una fuente sin conectividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para activar la sincronizacion NTP usando `timedatectl`. <input type="text" class="fill-blank" data-answer="timedatectl set-ntp true" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** timedatectl set-ntp true. `timedatectl set-ntp true` activa la sincronizacion de tiempo con NTP, habilitando generalmente el servicio `systemd-timesyncd` (cliente SNTP ligero integrado en systemd). Para desactivar la sincronizacion: `timedatectl set-ntp false`. Es importante notar que `timedatectl set-ntp true` activa `systemd-timesyncd`, no ntpd ni chronyd. Si se necesita ntpd o chrony, deben instalarse y configurarse por separado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de `date` para mostrar la fecha actual en formato `AAAA-MM-DD`. <input type="text" class="fill-blank" data-answer="date +%Y-%m-%d" data-alt="date '+%Y-%m-%d'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** date +%Y-%m-%d. El comando `date +%Y-%m-%d` muestra la fecha actual en formato ISO 8601 (por ejemplo, `2026-06-02`). Los codigos de formato son: `%Y` (anio con 4 digitos), `%m` (mes con dos digitos, 01-12) y `%d` (dia del mes con dos digitos, 01-31). Para incluir la hora: `date "+%Y-%m-%d %H:%M:%S"`. Las comillas son necesarias cuando el formato contiene espacios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `*`?

</div>
<div class="flashcard-back">

**R:** Servidor seleccionado actualmente (fuente de sincronizacion)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `when`?

</div>
<div class="flashcard-back">

**R:** Segundos desde ultima consulta

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `poll`?

</div>
<div class="flashcard-back">

**R:** Intervalo de consulta en segundos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `reach`?

</div>
<div class="flashcard-back">

**R:** Registro de alcanzabilidad (octal) - 377 = ultimas 8 consultas exitosas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son Conceptos fundamentales: Dos relojes en Linux?

</div>
<div class="flashcard-back">

**R:** Un sistema Linux mantiene **dos relojes** independientes:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Comando `date`?

</div>
<div class="flashcard-back">

**R:** El comando `date` muestra y establece la fecha y hora del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Comando `hwclock`?

</div>
<div class="flashcard-back">

**R:** El comando `hwclock` gestiona el reloj hardware (RTC).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Comando `timedatectl` (systemd)?

</div>
<div class="flashcard-back">

**R:** Herramienta moderna de systemd para gestionar fecha, hora y zona horaria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son SNTP vs NTP?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | NTP (completo) | SNTP (Simple NTP) |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Resumen comparativo de soluciones NTP?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | ntpd | chrony | systemd-timesyncd |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **Dos relojes**: hardware (RTC/CMOS) y sistema (kernel)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.1">
</div>

<div class="flashcard" data-id="108.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

