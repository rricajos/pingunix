---
title: "Ejercicios: Niveles de Ejecucion y Targets de Systemd (101.3)"
tags:
  - lpic-1
  - examen-101
  - tema-101
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "101"
subtema: "101.3"
---

# Ejercicios: Niveles de Ejecucion y Targets de Systemd (101.3)

Preguntas tipo examen LPIC-1 sobre niveles de ejecucion (runlevels), targets de systemd y gestion del estado del sistema. Intenta responder cada pregunta antes de revelar la respuesta.

---

### Pregunta 1: Equivalencia de runlevels y targets

**Cual de los siguientes targets de systemd es equivalente al runlevel 3 de SysVinit?**

a) `graphical.target`
b) `rescue.target`
c) `multi-user.target`
d) `network.target`

<details>
<summary>Respuesta</summary>

**c) `multi-user.target`**

Tabla de equivalencia:

| Runlevel | Target de systemd |
|----------|------------------|
| 0 | `poweroff.target` |
| 1 | `rescue.target` |
| 3 | `multi-user.target` |
| 5 | `graphical.target` |
| 6 | `reboot.target` |

El runlevel 3 corresponde al modo multiusuario con red pero sin entorno grafico, que se mapea a `multi-user.target`. La opcion (a) `graphical.target` corresponde al runlevel 5. La opcion (b) `rescue.target` corresponde al runlevel 1. La opcion (d) `network.target` no es un target de equivalencia con runlevels, sino un target auxiliar que indica que la red esta disponible.
</details>

---

### Pregunta 2: Cambiar el target por defecto

**Un administrador quiere que un servidor Linux arranque siempre en modo texto (sin entorno grafico). Cual es el comando correcto?**

a) `systemctl isolate multi-user.target`
b) `systemctl set-default multi-user.target`
c) `systemctl enable multi-user.target`
d) `systemctl start multi-user.target`

<details>
<summary>Respuesta</summary>

**b) `systemctl set-default multi-user.target`**

Explicacion de cada opcion:
- **b) `systemctl set-default`**: Establece el target **por defecto** de forma permanente. Crea un enlace simbolico `/etc/systemd/system/default.target` que apunta a `multi-user.target`. Este es el comando correcto para cambiar el target de arranque.
- **a) `systemctl isolate`**: Cambia al target indicado **inmediatamente**, pero NO cambia el target por defecto. Al reiniciar, el sistema volvera al target anterior.
- **c) `systemctl enable`**: Se usa para habilitar servicios en el arranque, no para establecer el target por defecto.
- **d) `systemctl start`**: Inicia un servicio o target, pero no cambia la configuracion por defecto.
</details>

---

### Pregunta 3: El archivo /etc/inittab

**En un sistema con SysVinit, que linea en `/etc/inittab` establece el runlevel por defecto a 5 (modo grafico)?**

a) `id:5:default:`
b) `id:5:initdefault:`
c) `default:5:start:`
d) `runlevel:5:boot:`

<details>
<summary>Respuesta</summary>

**b) `id:5:initdefault:`**

El formato de las lineas en `/etc/inittab` es:
```
id:runlevels:accion:proceso
```

La accion `initdefault` especifica el runlevel por defecto del sistema. No necesita un proceso asociado (el campo proceso queda vacio). La linea correcta es:
```
id:5:initdefault:
```

Las opciones (a), (c) y (d) usan acciones que no existen en la sintaxis de `/etc/inittab`. Las acciones validas incluyen: `initdefault`, `sysinit`, `wait`, `respawn`, `once`, `ctrlaltdel`, entre otras.

> **Nota:** En sistemas con systemd, `/etc/inittab` no se utiliza. Se usa `systemctl set-default` en su lugar.
</details>

---

### Pregunta 4: Comandos de apagado

**Cual de los siguientes comandos programa un reinicio del sistema en 10 minutos y envia un mensaje de aviso a los usuarios?**

a) `reboot +10 "Sistema se reinicia"`
b) `shutdown -r +10 "Sistema se reinicia para mantenimiento"`
c) `systemctl reboot --delay=10m "Sistema se reinicia"`
d) `init 6 --timer 10`

<details>
<summary>Respuesta</summary>

**b) `shutdown -r +10 "Sistema se reinicia para mantenimiento"`**

El comando `shutdown` es el unico de las opciones que permite:
- **Programar** un reinicio en el futuro con `+minutos` o `HH:MM`
- **Enviar un mensaje** a todos los usuarios conectados
- **Cancelar** la operacion con `shutdown -c`

Opciones de `shutdown`:
- `-r`: Reiniciar (reboot)
- `-h`: Apagar (halt/poweroff)
- `-c`: Cancelar un apagado programado
- `-k`: Solo avisa, no apaga realmente
- `+N`: En N minutos
- `now`: Inmediatamente

Las opciones (a), (c) y (d) no son sintaxis validas. `reboot` y `init 6` se ejecutan inmediatamente sin opcion de programar un retraso.
</details>

---

### Pregunta 5: Scripts de inicio SysVinit

**En el directorio `/etc/rc3.d/`, que significan los prefijos "S" y "K" en los nombres de los enlaces simbolicos?**

a) S = System, K = Kernel
b) S = Start (iniciar el servicio), K = Kill (detener el servicio)
c) S = Service, K = Keep
d) S = Startup, K = Keepalive

<details>
<summary>Respuesta</summary>

**b) S = Start (iniciar el servicio), K = Kill (detener el servicio)**

En los directorios `/etc/rc[0-6].d/`, los enlaces simbolicos siguen la convencion:
- **S** (Start): El servicio se **inicia** al entrar en ese runlevel. El script se ejecuta con el parametro `start`.
- **K** (Kill): El servicio se **detiene** al entrar en ese runlevel. El script se ejecuta con el parametro `stop`.
- El **numero** despues de S o K (01-99) determina el **orden de ejecucion**. Numeros mas bajos se ejecutan primero.

Ejemplo:
```
S01networking  -> Se inicia primero (prioridad 01)
S20ssh         -> Se inicia despues (prioridad 20)
K80apache2     -> Se detiene con prioridad 80
```

Al cambiar de runlevel, primero se ejecutan todos los scripts K (detener) y luego todos los scripts S (iniciar), ambos en orden numerico ascendente.
</details>

---

### Pregunta 6: systemctl isolate

**Que hace el comando `systemctl isolate rescue.target`?**

a) Establece `rescue.target` como el target por defecto para el proximo arranque
b) Cambia inmediatamente al target de rescate, deteniendo todos los servicios que no pertenecen a ese target
c) Crea una copia de seguridad del sistema antes de entrar en modo rescate
d) Muestra las dependencias del target de rescate

<details>
<summary>Respuesta</summary>

**b) Cambia inmediatamente al target de rescate, deteniendo todos los servicios que no pertenecen a ese target**

El subcomando `isolate` de systemctl:
- Cambia al target especificado **inmediatamente**.
- **Detiene** todos los servicios y unidades que **no** son necesarios para el target destino.
- **Inicia** todos los servicios que son necesarios para el target destino.
- Es equivalente a cambiar de runlevel con `init N` o `telinit N` en SysVinit.
- **NO** cambia el target por defecto. Al reiniciar, el sistema arrancara en el target configurado por defecto.

Solo los targets que tienen la propiedad `AllowIsolate=yes` pueden ser aislados. Los targets principales (`poweroff`, `rescue`, `multi-user`, `graphical`, `reboot`) tienen esta propiedad habilitada.

Para cambiar el target por defecto, se usa `systemctl set-default`. Para ver dependencias, se usa `systemctl list-dependencies`.
</details>

---

### Pregunta 7: Comando wall

**Cual es el proposito del comando `wall` en Linux?**

a) Instalar un firewall en el sistema
b) Enviar un mensaje a todos los usuarios conectados al sistema
c) Mostrar los muros de texto del sistema de archivos
d) Cambiar los permisos de escritura en todo el sistema

<details>
<summary>Respuesta</summary>

**b) Enviar un mensaje a todos los usuarios conectados al sistema**

`wall` (write all) envia un mensaje a las terminales de **todos los usuarios** que estan conectados al sistema. Es especialmente util para:
- Avisar a los usuarios antes de un apagado o reinicio programado.
- Comunicar informacion importante sobre mantenimiento del sistema.
- Notificar sobre cambios de configuracion que afecten a los usuarios.

Ejemplos de uso:
```bash
wall "El sistema se apagara en 15 minutos"
wall < /tmp/mensaje.txt
echo "Mantenimiento urgente" | wall
```

> **Nota:** El comando `shutdown` con un tiempo de espera (por ejemplo, `shutdown -r +10 "mensaje"`) envia automaticamente mensajes a todos los usuarios, similar a `wall`.
</details>

---

### Pregunta 8: Diferencia entre halt y poweroff

**Cual es la diferencia principal entre los comandos `halt` y `poweroff`?**

a) `halt` reinicia el sistema, `poweroff` lo apaga
b) `halt` detiene el sistema sin apagar la alimentacion, `poweroff` detiene el sistema y envia la senal de apagado al hardware
c) `halt` es para SysVinit y `poweroff` es para systemd
d) No hay diferencia, son sinonimos exactos

<details>
<summary>Respuesta</summary>

**b) `halt` detiene el sistema sin apagar la alimentacion, `poweroff` detiene el sistema y envia la senal de apagado al hardware**

Diferencias:
- **`halt`**: Detiene todos los procesos y el kernel, pero **no envia la senal ACPI** para apagar la alimentacion electrica. El hardware se queda encendido con el sistema detenido. El usuario debe apagar fisicamente la maquina.
- **`poweroff`**: Detiene todos los procesos, el kernel **y envia la senal ACPI** al hardware para que se apague la alimentacion electrica. La maquina se apaga completamente.

En la practica, en muchos sistemas modernos, `halt` se comporta igual que `poweroff` porque detecta la capacidad ACPI. Sin embargo, para el examen es importante conocer la diferencia conceptual.

Equivalencias en systemd:
- `halt` = `systemctl halt`
- `poweroff` = `systemctl poweroff`
</details>

---

### Pregunta 9: Gestion de servicios con systemctl

**Un administrador quiere que el servicio `nginx` se inicie automaticamente cada vez que el sistema arranque, y ademas quiere iniciarlo inmediatamente. Cuales son los comandos correctos?**

a) `systemctl start nginx && systemctl default nginx`
b) `systemctl enable nginx && systemctl start nginx`
c) `systemctl activate nginx`
d) `systemctl auto nginx && systemctl run nginx`

<details>
<summary>Respuesta</summary>

**b) `systemctl enable nginx && systemctl start nginx`**

Explicacion de los subcomandos de systemctl:
- **`enable`**: Configura el servicio para que se **inicie automaticamente** en el arranque. Crea los enlaces simbolicos necesarios en el directorio del target correspondiente. Pero **no** inicia el servicio inmediatamente.
- **`start`**: **Inicia** el servicio inmediatamente, pero **no** lo configura para arranque automatico.
- Se necesitan ambos comandos para lograr los dos objetivos.

Tambien existe un atajo que combina ambas acciones:
```bash
systemctl enable --now nginx.service
```
La opcion `--now` hace que `enable` tambien inicie el servicio inmediatamente.

Las opciones (a), (c) y (d) usan subcomandos que no existen en systemctl (`default`, `activate`, `auto`, `run`).
</details>

---

### Pregunta 10: acpid

**Cual es la funcion principal del demonio acpid?**

a) Gestionar las actualizaciones automaticas del sistema
b) Controlar el acceso de usuarios al sistema
c) Gestionar eventos de energia como el boton de encendido y la tapa del portatil
d) Monitorizar el rendimiento de la CPU

<details>
<summary>Respuesta</summary>

**c) Gestionar eventos de energia como el boton de encendido y la tapa del portatil**

**acpid** (Advanced Configuration and Power Interface Daemon) es un demonio que escucha y responde a eventos ACPI del hardware. Eventos que gestiona:
- Presionar el **boton de encendido** (power button)
- **Cerrar o abrir la tapa** del portatil (lid switch)
- Conectar o desconectar el **adaptador de corriente** (AC adapter)
- Presionar botones de **suspension** o **hibernacion**
- Eventos de **bateria** (nivel bajo, carga completa)

Los archivos de configuracion estan en:
- `/etc/acpi/events/` - Reglas que asocian eventos con acciones
- `/etc/acpi/actions/` - Scripts que se ejecutan en respuesta a los eventos

Ejemplo de regla:
```bash
# /etc/acpi/events/powerbtn
event=button/power
action=/etc/acpi/actions/power.sh
```

Para el examen LPIC-1, es suficiente saber que acpid gestiona eventos de energia ACPI. No se requiere conocimiento profundo de su configuracion.
</details>

### Pregunta 11

En un sistema con SysVinit, que runlevel se utiliza para reiniciar el sistema?

a) Runlevel 0
b) Runlevel 1
c) Runlevel 5
d) Runlevel 6

<details><summary>Respuesta</summary>

**d) Runlevel 6**

El runlevel 6 se utiliza para reiniciar el sistema. El runlevel 0 es para apagado, el runlevel 1 es modo monousuario para mantenimiento, y el runlevel 5 es multiusuario con entorno grafico. Los runlevels 0, 1 y 6 son universales en todas las distribuciones Linux que usan SysVinit.

</details>

### Pregunta 12

Que directorio contiene los archivos de unidad (unit files) del administrador en systemd, con la mayor prioridad?

a) /lib/systemd/system/
b) /run/systemd/system/
c) /etc/systemd/system/
d) /usr/share/systemd/

<details><summary>Respuesta</summary>

**c) /etc/systemd/system/**

Los archivos de unidad en `/etc/systemd/system/` tienen la prioridad mas alta y sobreescriben los archivos con el mismo nombre en `/lib/systemd/system/` (o `/usr/lib/systemd/system/`). Esto permite al administrador personalizar servicios sin modificar los archivos originales proporcionados por los paquetes del sistema. `/run/systemd/system/` tiene prioridad media y contiene archivos generados en tiempo de ejecucion.

</details>

### Pregunta 13

Que hace la opcion -k del comando shutdown?

a) Apaga el sistema inmediatamente (kill)
b) Cancela un apagado programado previamente
c) Solo envia un mensaje de aviso a los usuarios, sin apagar realmente el sistema
d) Fuerza el apagado sin esperar a que los procesos terminen

<details><summary>Respuesta</summary>

**c) Solo envia un mensaje de aviso a los usuarios, sin apagar realmente el sistema**

La opcion `-k` (kick) de `shutdown` envia un mensaje de advertencia a todos los usuarios conectados, simulando un apagado programado, pero sin apagar realmente el sistema. Es util para probar las notificaciones o para advertir a los usuarios sin ejecutar la accion. Por ejemplo: `shutdown -k +10 "El sistema se apagara en 10 minutos"` envia el aviso pero no apaga.

</details>

### Pregunta 14

Que tipo de unidad de systemd (unit type) se utiliza para definir un punto de montaje del sistema de archivos?

a) .service
b) .mount
c) .target
d) .socket

<details><summary>Respuesta</summary>

**b) .mount**

Las unidades con extension `.mount` definen puntos de montaje en systemd. Otros tipos importantes son: `.service` (servicios del sistema), `.target` (agrupacion de unidades, equivalente a runlevels), `.socket` (activacion bajo demanda por sockets), `.timer` (programacion de tareas, equivalente a cron), `.device` (dispositivos), `.path` (monitorizacion de archivos) y `.swap` (espacio de intercambio).

</details>

### Pregunta 15

Que comando se usa para verificar si un servicio esta configurado para iniciarse automaticamente en el arranque?

a) systemctl status servicio
b) systemctl is-active servicio
c) systemctl is-enabled servicio
d) systemctl list-units servicio

<details><summary>Respuesta</summary>

**c) systemctl is-enabled servicio**

`systemctl is-enabled` comprueba si un servicio esta habilitado para iniciarse automaticamente en el arranque, devolviendo "enabled" o "disabled". `systemctl is-active` comprueba si el servicio esta actualmente en ejecucion. `systemctl status` muestra informacion completa del servicio (estado, PID, logs recientes). `systemctl list-units` lista las unidades cargadas.

</details>

### Pregunta 16

En el archivo /etc/inittab de SysVinit, que accion se ejecuta cuando el usuario presiona Ctrl+Alt+Del?

a) La accion definida con la directiva `sysinit`
b) La accion definida con la directiva `ctrlaltdel`
c) La accion definida con la directiva `respawn`
d) Siempre se ejecuta `shutdown -r now` sin importar la configuracion

<details><summary>Respuesta</summary>

**b) La accion definida con la directiva `ctrlaltdel`**

En `/etc/inittab`, la linea con la accion `ctrlaltdel` define que comando se ejecuta cuando el usuario presiona la combinacion Ctrl+Alt+Del. Tipicamente es `ca::ctrlaltdel:/sbin/shutdown -r now` para reiniciar el sistema. La directiva `sysinit` se ejecuta al iniciar el sistema, y `respawn` reinicia automaticamente un proceso si se detiene. En sistemas con systemd, esta funcionalidad se gestiona mediante `ctrl-alt-del.target`.

</details>

### Pregunta 17

Que comando de systemctl se usa para impedir completamente que un servicio pueda ser iniciado, ni manualmente ni por dependencias?

a) systemctl disable servicio
b) systemctl stop servicio
c) systemctl mask servicio
d) systemctl block servicio

<details><summary>Respuesta</summary>

**c) systemctl mask servicio**

`systemctl mask` enmascara un servicio creando un enlace simbolico que apunta a `/dev/null`, lo que impide que el servicio pueda ser iniciado por cualquier medio: manual, automatico o por dependencias. `systemctl disable` solo evita el inicio automatico pero permite el inicio manual. `systemctl stop` solo detiene el servicio en ejecucion pero no impide que se inicie de nuevo. Para desenmascarar se usa `systemctl unmask`.

</details>

### Pregunta 18

Que cabecera LSB en un script de /etc/init.d/ define en que runlevels el servicio debe iniciarse por defecto?

a) Required-Start
b) Provides
c) Default-Start
d) Short-Description

<details><summary>Respuesta</summary>

**c) Default-Start**

La cabecera `Default-Start` lista los runlevels en los que el servicio debe iniciarse automaticamente (por ejemplo, `2 3 4 5`). `Default-Stop` lista los runlevels en los que debe detenerse. `Required-Start` define las dependencias del servicio (que debe estar iniciado antes). `Provides` define el nombre del servicio que proporciona el script. Estas cabeceras son utilizadas por herramientas como `insserv` para calcular el orden correcto de arranque.

</details>

### Pregunta 19

Que runlevel de SysVinit NO esta definido por estandar y se reserva para uso personalizado?

a) Runlevel 2
b) Runlevel 3
c) Runlevel 4
d) Runlevel 5

<details><summary>Respuesta</summary>

**c) Runlevel 4**

El runlevel 4 no esta definido por el estandar y se reserva para uso personalizado por el administrador del sistema. Los runlevels con proposito definido son: 0 (apagado), 1 (monousuario), 2 (multiusuario sin red), 3 (multiusuario con red), 5 (multiusuario grafico) y 6 (reinicio). Sin embargo, los runlevels 2-5 pueden variar entre distribuciones; por ejemplo, en Debian/Ubuntu los runlevels 2-5 son identicos.

</details>

### Pregunta 20

Que comando de systemctl lista todas las dependencias de un target especifico?

a) systemctl show multi-user.target
b) systemctl list-dependencies multi-user.target
c) systemctl depends multi-user.target
d) systemctl tree multi-user.target

<details><summary>Respuesta</summary>

**b) systemctl list-dependencies multi-user.target**

`systemctl list-dependencies` muestra el arbol de dependencias de una unidad (servicio, target, etc.), mostrando todas las unidades que se inician cuando se activa ese target. Con la opcion `--reverse` se pueden ver las dependencias inversas, es decir, que unidades dependen de la unidad especificada.

</details>

### Pregunta 21

Que comando se usa para ver el target por defecto en un sistema con systemd?

<input type="text" class="fill-blank" data-answer="systemctl get-default" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl get-default**

`systemctl get-default` muestra el target que se activa al arrancar el sistema, tipicamente `graphical.target` en escritorios o `multi-user.target` en servidores. Este target esta definido por el enlace simbolico `/etc/systemd/system/default.target`. Para cambiarlo se usa `systemctl set-default`.

</details>

### Pregunta 22

Que comando se utiliza para cambiar inmediatamente al target multi-user (modo texto) en un sistema con systemd?

<input type="text" class="fill-blank" data-answer="systemctl isolate multi-user.target" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl isolate multi-user.target**

`systemctl isolate multi-user.target` cambia inmediatamente al modo multiusuario texto, deteniendo todos los servicios que no pertenecen a ese target (como el entorno grafico) e iniciando los que faltan. Es el equivalente a `init 3` o `telinit 3` en SysVinit. Este cambio es temporal y no modifica el target por defecto.

</details>

### Pregunta 23

Que comando de SysVinit se utiliza para ver el runlevel actual y el anterior?

<input type="text" class="fill-blank" data-answer="runlevel" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**runlevel**

El comando `runlevel` muestra dos valores: el runlevel anterior y el actual. Por ejemplo, la salida `N 3` indica que no hubo runlevel previo (N) y el actual es 3. Si la salida fuera `3 5`, significaria que se cambio del runlevel 3 al 5.

</details>

### Pregunta 24

Que comando apaga el sistema inmediatamente en un sistema con systemd?

<input type="text" class="fill-blank" data-answer="systemctl poweroff" data-alt="shutdown -h now,poweroff,init 0" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl poweroff**

`systemctl poweroff` apaga el sistema inmediatamente, deteniendo todos los servicios y enviando la senal ACPI para cortar la alimentacion. Alternativas equivalentes son `shutdown -h now`, `poweroff` e `init 0`. El metodo preferido para apagados programados es `shutdown -h +minutos` porque permite avisar a los usuarios y cancelar la operacion.

</details>

### Pregunta 25

Que comando se usa para enviar un mensaje a todos los usuarios conectados al sistema?

<input type="text" class="fill-blank" data-answer="wall" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wall**

`wall` (write all) envia un mensaje a las terminales de todos los usuarios conectados al sistema. Se puede usar directamente: `wall "Mensaje"`, desde un archivo: `wall < archivo.txt`, o por pipe: `echo "Mensaje" | wall`. El comando `shutdown` con un tiempo de espera tambien envia mensajes automaticamente a los usuarios.

</details>
