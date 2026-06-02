---
title: "106.1 - Ejercicios: Instalar y configurar X11"
tags:
  - lpic-1
  - examen-102
  - tema-106
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "106"
subtema: "106.1"
---

# 106.1 - Ejercicios: Instalar y configurar X11

### Pregunta 1

En la arquitectura de X11, donde se ejecuta el servidor X y donde se ejecutan los clientes X?

a) El servidor X se ejecuta en la maquina remota y los clientes en la maquina local
b) El servidor X se ejecuta en la maquina local (donde esta la pantalla) y los clientes son las aplicaciones graficas
c) El servidor y los clientes siempre se ejecutan en la misma maquina
d) El servidor X es el kernel de Linux y los clientes son los drivers graficos

<details><summary>Respuesta</summary>

**b) El servidor X se ejecuta en la maquina local (donde esta la pantalla) y los clientes son las aplicaciones graficas**

En X11, la terminologia es contraintuitiva: el **servidor X** se ejecuta en la maquina donde estan la pantalla, el teclado y el raton, gestionando el hardware grafico. Los **clientes X** son las aplicaciones graficas (firefox, xterm, gimp, etc.) que pueden ejecutarse en la misma maquina o en una remota. La comunicacion se realiza mediante el protocolo X11, que puede funcionar a traves de la red, permitiendo ejecutar una aplicacion en un servidor remoto y ver su ventana en la pantalla local.

</details>

---

### Pregunta 2

Que significa el valor `DISPLAY=localhost:10.0` en una sesion SSH?

a) El display local numero 10 de la maquina localhost, pantalla 0 (tipico de SSH X forwarding)
b) El display principal del sistema, pantalla 10
c) Una conexion directa al display 10 del servidor remoto
d) Un display virtual sin conexion a hardware real

<details><summary>Respuesta</summary>

**a) El display local numero 10 de la maquina localhost, pantalla 0 (tipico de SSH X forwarding)**

El formato de DISPLAY es `[host]:display[.screen]`. En `localhost:10.0`, `localhost` es el host, `10` es el numero de display y `0` es la pantalla. El offset 10 viene de la directiva `X11DisplayOffset 10` en la configuracion de SSH. Cuando se usa SSH X forwarding (`ssh -X`), SSH configura automaticamente esta variable y tuneliza la conexion X11 a traves del canal seguro SSH, gestionando las cookies de `xauth` automaticamente.

</details>

---

### Pregunta 3

Cual de los siguientes metodos de control de acceso al servidor X es mas seguro y por que?

a) `xhost +` porque permite el acceso desde cualquier host
b) `xhost` porque controla el acceso basandose en la direccion IP del host
c) `xauth` porque usa cookies MIT-MAGIC-COOKIE almacenadas en `~/.Xauthority` para autenticar por sesion
d) XDMCP porque cifra toda la comunicacion entre cliente y servidor

<details><summary>Respuesta</summary>

**c) `xauth` porque usa cookies MIT-MAGIC-COOKIE almacenadas en `~/.Xauthority` para autenticar por sesion**

`xauth` es mas seguro porque requiere que el cliente presente un token secreto (cookie) para conectarse al servidor X. Cada sesion genera una cookie unica almacenada en `~/.Xauthority`. `xhost` es inseguro porque controla el acceso basandose unicamente en el host: si se permite un host, CUALQUIER usuario de ese host puede acceder. `xhost +` desactiva toda verificacion, siendo extremadamente inseguro. XDMCP no cifra el trafico y esta practicamente en desuso.

</details>

---

### Pregunta 4

Que seccion del archivo `xorg.conf` vincula un monitor con una tarjeta grafica?

a) `ServerLayout`
b) `Device`
c) `Screen`
d) `Monitor`

<details><summary>Respuesta</summary>

**c) `Screen`**

La seccion **Screen** es la que vincula un monitor con una tarjeta grafica (Device), referenciando ambos por su `Identifier`. Tambien define la profundidad de color y las resoluciones disponibles. La seccion **Device** configura la tarjeta grafica (driver, BusID). La seccion **Monitor** define las caracteristicas del monitor (frecuencias). La seccion **ServerLayout** es la configuracion global que vincula las pantallas (Screen) con los dispositivos de entrada (InputDevice).

</details>

---

### Pregunta 5

Que comando se utiliza para generar un archivo `xorg.conf` basado en el hardware detectado automaticamente?

a) `xorg --generate`
b) `X -configure` (o `Xorg -configure`)
c) `xdpyinfo --config`
d) `dpkg-reconfigure xorg`

<details><summary>Respuesta</summary>

**b) `X -configure` (o `Xorg -configure`)**

El comando `Xorg -configure` (o `X -configure`) genera un archivo `xorg.conf` basado en el hardware detectado. El archivo generado se guarda como `/root/xorg.conf.new` y se puede copiar a `/etc/X11/xorg.conf`. Es importante que el servidor X NO este en ejecucion al ejecutar este comando. En sistemas modernos, Xorg suele funcionar sin `xorg.conf` gracias a la autodeteccion, y se prefieren archivos parciales en `/etc/X11/xorg.conf.d/`.

</details>

---

### Pregunta 6

Cual es la diferencia entre `ssh -X` y `ssh -Y` para X forwarding?

a) `-X` habilita X forwarding confiable y `-Y` lo habilita con restricciones
b) `-X` habilita X forwarding con restricciones de seguridad (untrusted) y `-Y` lo habilita sin restricciones (trusted)
c) `-X` solo funciona con Wayland y `-Y` solo funciona con X11
d) `-X` requiere configuracion en el cliente y `-Y` requiere configuracion en el servidor

<details><summary>Respuesta</summary>

**b) `-X` habilita X forwarding con restricciones de seguridad (untrusted) y `-Y` lo habilita sin restricciones (trusted)**

`ssh -X` habilita X forwarding con la extension X11 SECURITY, que restringe lo que la aplicacion remota puede hacer (por ejemplo, no puede capturar el teclado de otras ventanas). Es mas seguro pero algunas aplicaciones complejas pueden no funcionar. `ssh -Y` habilita X forwarding confiable (trusted), sin restricciones de seguridad, dando a la aplicacion remota acceso completo al servidor X local. Ambos requieren `X11Forwarding yes` en `/etc/ssh/sshd_config` del servidor.

</details>

---

### Pregunta 7

En el log de Xorg (`/var/log/Xorg.0.log`), que significan los marcadores `(EE)` y `(WW)`?

a) `(EE)` indica entradas informativas y `(WW)` indica valores por defecto
b) `(EE)` indica errores y `(WW)` indica advertencias
c) `(EE)` indica valores de entorno y `(WW)` indica configuraciones de ventanas
d) `(EE)` indica extensiones habilitadas y `(WW)` indica extensiones deshabilitadas

<details><summary>Respuesta</summary>

**b) `(EE)` indica errores y `(WW)` indica advertencias**

En el log de Xorg, los marcadores tienen estos significados: `(EE)` = Error, `(WW)` = Warning (advertencia), `(II)` = Information (informativo), `(**)` = valor de configuracion encontrado, y `(==)` = valor por defecto usado. Cuando X11 no arranca o presenta problemas, `/var/log/Xorg.0.log` es el primer lugar donde buscar informacion de diagnostico, filtrando con `grep "(EE)" /var/log/Xorg.0.log` para encontrar errores.

</details>

---

### Pregunta 8

Que Display Manager esta asociado por defecto con KDE Plasma?

a) GDM
b) LightDM
c) SDDM
d) XDM

<details><summary>Respuesta</summary>

**c) SDDM**

**SDDM** (Simple Desktop Display Manager) es el Display Manager por defecto de KDE Plasma. Es moderno y esta basado en QML. **GDM** (GNOME Display Manager) es el DM por defecto de GNOME. **LightDM** es un DM independiente y ligero, muy usado en Xfce y MATE. **XDM** (X Display Manager) es el original de X11, muy basico y sin dependencias de escritorio. Para cambiar el DM en sistemas systemd se usa `systemctl enable --now nombre_dm`.

</details>

---

### Pregunta 9

Cual de los siguientes directorios contiene archivos de configuracion de Xorg proporcionados por la distribucion que NO deben editarse directamente?

a) `/etc/X11/xorg.conf.d/`
b) `/usr/share/X11/xorg.conf.d/`
c) `/etc/X11/`
d) `/var/log/`

<details><summary>Respuesta</summary>

**b) `/usr/share/X11/xorg.conf.d/`**

`/usr/share/X11/xorg.conf.d/` contiene archivos de configuracion proporcionados por la distribucion y los paquetes del sistema. No deben editarse directamente porque se sobrescriben en actualizaciones. La jerarquia de prioridad es: `/etc/X11/xorg.conf` (maxima prioridad, configuracion manual del administrador), `/etc/X11/xorg.conf.d/*.conf` (configuraciones parciales del administrador), y `/usr/share/X11/xorg.conf.d/*.conf` (configuraciones de la distribucion, menor prioridad).

</details>

---

### Pregunta 10

Como se puede verificar si la sesion actual usa Wayland o X11?

a) Ejecutando `xdpyinfo | grep wayland`
b) Verificando el valor de `$XDG_SESSION_TYPE` que muestra `wayland` o `x11`
c) Comprobando si existe el archivo `/etc/wayland.conf`
d) Ejecutando `systemctl status wayland`

<details><summary>Respuesta</summary>

**b) Verificando el valor de `$XDG_SESSION_TYPE` que muestra `wayland` o `x11`**

La forma mas directa de verificar el tipo de sesion es con `echo $XDG_SESSION_TYPE`, que devuelve `wayland` o `x11`. Otra forma es comprobar si la variable `$WAYLAND_DISPLAY` tiene valor (por ejemplo, `wayland-0`), lo que indica que se usa Wayland. Wayland es un protocolo de display moderno que busca reemplazar a X11, con un compositor integrado y mayor seguridad (aislamiento entre clientes). XWayland permite ejecutar aplicaciones X11 antiguas dentro de sesiones Wayland.

</details>

---

### Pregunta 11

Que comando desactiva completamente la verificacion de acceso al servidor X, permitiendo conexiones desde cualquier host?

a) `xauth +`
b) `xhost -`
c) `xhost +`
d) `xauth disable`

<details><summary>Respuesta</summary>

**c) `xhost +`**

El comando `xhost +` desactiva toda verificacion de acceso al servidor X, permitiendo que cualquier host en la red pueda conectarse y mostrar ventanas en la pantalla local. Esto es extremadamente inseguro y no se recomienda en entornos de produccion, ya que un atacante podria espiar pulsaciones de teclado o capturar el contenido de la pantalla. `xhost -` (con signo menos) reactiva las restricciones de acceso. `xhost +host` permite acceso solo desde un host especifico. El metodo seguro de autenticacion es `xauth`, que usa cookies MIT-MAGIC-COOKIE almacenadas en `~/.Xauthority`.

</details>

---

### Pregunta 12

Que archivo almacena las cookies de autenticacion MIT-MAGIC-COOKIE para el servidor X?

a) `/etc/X11/xorg.conf`
b) `~/.Xauthority`
c) `/var/log/Xorg.0.log`
d) `~/.xsession`

<details><summary>Respuesta</summary>

**b) `~/.Xauthority`**

El archivo `~/.Xauthority` es un archivo binario que almacena las cookies de autenticacion MIT-MAGIC-COOKIE para el servidor X. Cada sesion grafica genera una cookie unica que los clientes X deben presentar para conectarse al servidor. Se gestiona con el comando `xauth`: `xauth list` muestra las cookies actuales, `xauth add` agrega una cookie, y `xauth extract`/`xauth merge` permiten transferir cookies entre hosts. La variable de entorno `$XAUTHORITY` indica la ubicacion de este archivo. Es el metodo seguro de control de acceso al servidor X, superior a `xhost`.

</details>

---

### Pregunta 13

En la jerarquia de configuracion de Xorg, cual tiene la maxima prioridad?

a) `/usr/share/X11/xorg.conf.d/*.conf`
b) `/etc/X11/xorg.conf.d/*.conf`
c) `/etc/X11/xorg.conf`
d) Los valores autodetectados por Xorg

<details><summary>Respuesta</summary>

**c) `/etc/X11/xorg.conf`**

La jerarquia de configuracion de Xorg en orden de prioridad es: (1) `/etc/X11/xorg.conf` tiene maxima prioridad y es la configuracion manual del administrador. (2) `/etc/X11/xorg.conf.d/*.conf` contiene configuraciones parciales del administrador. (3) `/usr/share/X11/xorg.conf.d/*.conf` contiene configuraciones proporcionadas por la distribucion y paquetes del sistema, con menor prioridad. Los valores autodetectados se usan cuando no hay configuracion explicita. En sistemas modernos, Xorg funciona sin `xorg.conf` gracias a la autodeteccion, pero si el archivo existe, sus valores prevalecen.

</details>

---

### Pregunta 14

Que significan los componentes del valor `DISPLAY=192.168.1.10:0.0`?

a) Host 192.168.1.10, puerto 0, sesion 0
b) Host 192.168.1.10, display numero 0, pantalla numero 0
c) IP del cliente 192.168.1.10, display del servidor 0, resolucion 0
d) Servidor 192.168.1.10, proceso X numero 0, ventana 0

<details><summary>Respuesta</summary>

**b) Host 192.168.1.10, display numero 0, pantalla numero 0**

El formato de la variable DISPLAY es `[host]:display[.screen]`. En `192.168.1.10:0.0`: `192.168.1.10` es la direccion IP del servidor X (la maquina donde se encuentra la pantalla fisica), `0` es el numero de display (generalmente 0 para el display principal), y `.0` es el numero de pantalla (screen, tambien generalmente 0). Cuando el host esta vacio (`:0`), se refiere al servidor local. Esta variable es esencial para que los clientes X sepan donde enviar su salida grafica, especialmente en entornos de red o con SSH X forwarding.

</details>

---

### Pregunta 15

Que configuracion del servidor SSH es necesaria para habilitar X forwarding?

a) `AllowTcpForwarding yes` en `/etc/ssh/sshd_config`
b) `X11Forwarding yes` en `/etc/ssh/sshd_config`
c) `ForwardX11 yes` en `/etc/ssh/sshd_config`
d) `PermitX11 yes` en `/etc/ssh/ssh_config`

<details><summary>Respuesta</summary>

**b) `X11Forwarding yes` en `/etc/ssh/sshd_config`**

Para habilitar X forwarding en el lado del servidor SSH, se debe configurar `X11Forwarding yes` en `/etc/ssh/sshd_config`. La directiva `X11DisplayOffset 10` define el numero de display inicial para las sesiones X reenviadas. En el lado del cliente, se puede configurar `ForwardX11 yes` en `/etc/ssh/ssh_config` o `~/.ssh/config`, o usar la opcion `-X` (restringido) o `-Y` (confiable) al conectar. Cuando se usa X forwarding, SSH configura automaticamente la variable DISPLAY y las cookies de xauth.

</details>

---

### Pregunta 16

Que herramienta muestra informacion detallada del servidor X, como resoluciones disponibles, profundidad de color y extensiones soportadas?

a) `xwininfo`
b) `xdpyinfo`
c) `xrandr`
d) `xhost`

<details><summary>Respuesta</summary>

**b) `xdpyinfo`**

`xdpyinfo` (X Display Information) muestra informacion detallada sobre el servidor X en ejecucion: nombre del display, numero de pantallas, resoluciones disponibles, profundidad de color, extensiones soportadas, informacion del vendedor y mas. `xwininfo` muestra informacion sobre una ventana especifica (posicion, tamano, ID). `xrandr` es una herramienta para configurar la resolucion y la disposicion de monitores. `xhost` gestiona el control de acceso al servidor X. `xdpyinfo` es una herramienta de diagnostico util para verificar las capacidades del servidor X.

</details>

---

### Pregunta 17

Que es XWayland y cual es su proposito?

a) Es una version mejorada de Xorg con soporte para Wayland nativo
b) Es una capa de compatibilidad que permite ejecutar aplicaciones X11 dentro de una sesion Wayland
c) Es un protocolo de red para transmitir sesiones Wayland remotamente
d) Es un display manager exclusivo para sesiones Wayland

<details><summary>Respuesta</summary>

**b) Es una capa de compatibilidad que permite ejecutar aplicaciones X11 dentro de una sesion Wayland**

XWayland es una implementacion del servidor X11 que se ejecuta como un cliente Wayland. Su proposito es proporcionar compatibilidad hacia atras, permitiendo que las aplicaciones X11 existentes funcionen dentro de sesiones Wayland sin necesidad de ser reescritas. Cuando una aplicacion X11 necesita ejecutarse en un escritorio Wayland, XWayland actua como intermediario, traduciendo las llamadas del protocolo X11 al protocolo Wayland. Esto permite una transicion gradual de X11 a Wayland sin perder compatibilidad con software antiguo.

</details>

---

### Pregunta 18

Que Display Manager es ligero, independiente de cualquier entorno de escritorio y soporta multiples interfaces (greeters)?

a) GDM
b) SDDM
c) LightDM
d) XDM

<details><summary>Respuesta</summary>

**c) LightDM**

LightDM es un Display Manager ligero e independiente, no vinculado a ningun entorno de escritorio especifico. Su caracteristica distintiva es el soporte para multiples **greeters** (interfaces de inicio de sesion), lo que permite cambiar la apariencia de la pantalla de login sin cambiar el DM. Greeters populares incluyen lightdm-gtk-greeter, lightdm-webkit2-greeter y slick-greeter. GDM esta asociado a GNOME. SDDM esta asociado a KDE Plasma y esta basado en QML. XDM es el DM original de X11, muy basico y sin funcionalidades modernas.

</details>

---

### Pregunta 19

Cual de las siguientes es una ventaja de Wayland sobre X11 en terminos de seguridad?

a) Wayland cifra toda la comunicacion por defecto con TLS
b) Wayland proporciona aislamiento entre clientes, impidiendo que una aplicacion espie a otra
c) Wayland requiere autenticacion biometrica para cada aplicacion
d) Wayland bloquea automaticamente las conexiones de red

<details><summary>Respuesta</summary>

**b) Wayland proporciona aislamiento entre clientes, impidiendo que una aplicacion espie a otra**

Una mejora fundamental de Wayland sobre X11 es el aislamiento entre clientes. En X11, cualquier cliente puede capturar eventos de teclado de otras ventanas o leer el contenido de la pantalla de otras aplicaciones (por ejemplo, un keylogger podria capturar contrasenas escritas en otra ventana). En Wayland, cada cliente solo tiene acceso a su propia ventana y no puede interactuar con las ventanas de otros clientes sin la mediacion del compositor. Esto mejora significativamente la seguridad del escritorio. Sin embargo, Wayland no tiene soporte nativo para red transparente, a diferencia de X11.

</details>

---

### Pregunta 20

Que seccion del archivo `xorg.conf` define la configuracion de la tarjeta grafica (GPU)?

a) `Monitor`
b) `Screen`
c) `Device`
d) `ServerLayout`

<details><summary>Respuesta</summary>

**c) `Device`**

La seccion `Device` en `xorg.conf` configura la tarjeta grafica (GPU), incluyendo el identificador, el driver (por ejemplo, `intel`, `nvidia`, `amdgpu`), el vendor y el BusID PCI. La seccion `Monitor` define las caracteristicas del monitor (frecuencias, modelo). La seccion `Screen` vincula un Monitor con un Device y define la profundidad de color y resoluciones. La seccion `ServerLayout` es la configuracion global que agrupa pantallas (Screen) y dispositivos de entrada (InputDevice). Cada seccion se delimita con `Section "nombre"` y `EndSection`.

</details>

---

### Pregunta 21

Escribe el comando SSH para conectarse al servidor `192.168.1.50` como usuario `admin` habilitando X forwarding con restricciones de seguridad.

<input type="text" class="fill-blank" data-answer="ssh -X admin@192.168.1.50" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ssh -X admin@192.168.1.50**

La opcion `-X` de SSH habilita el reenvio de X11 (X forwarding) con restricciones de seguridad proporcionadas por la extension X11 SECURITY. Esto permite ejecutar aplicaciones graficas en el servidor remoto y ver las ventanas en la pantalla local. La variable DISPLAY se configura automaticamente (generalmente `localhost:10.0`) y SSH gestiona las cookies de xauth. Si alguna aplicacion no funciona con `-X`, se puede usar `-Y` (trusted, sin restricciones). El servidor SSH debe tener `X11Forwarding yes` en `/etc/ssh/sshd_config`.

</details>

---

### Pregunta 22

Escribe el comando para buscar errores en el archivo de log de Xorg.

<input type="text" class="fill-blank" data-answer="grep '(EE)' /var/log/Xorg.0.log" data-alt="grep \"(EE)\" /var/log/Xorg.0.log" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep '(EE)' /var/log/Xorg.0.log**

El archivo `/var/log/Xorg.0.log` es el log principal del servidor X para el display `:0`. Los marcadores del log indican el tipo de mensaje: `(EE)` para errores, `(WW)` para advertencias, `(II)` para informacion, `(**)` para valores de configuracion y `(==)` para valores por defecto. Filtrar con `grep '(EE)'` permite identificar rapidamente los problemas que impiden el funcionamiento correcto del servidor X. Este es el primer recurso de diagnostico cuando X11 no arranca o presenta problemas graficos.

</details>

---

### Pregunta 23

Escribe el comando para ver las cookies de autenticacion X almacenadas actualmente.

<input type="text" class="fill-blank" data-answer="xauth list" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xauth list**

El comando `xauth list` muestra todas las cookies de autenticacion MIT-MAGIC-COOKIE almacenadas en el archivo `~/.Xauthority`. La salida muestra el display, el protocolo de autenticacion (normalmente MIT-MAGIC-COOKIE-1) y el valor hexadecimal de la cookie. Estas cookies son necesarias para que los clientes X se autentiquen con el servidor. Otros subcomandos utiles: `xauth add` agrega una cookie, `xauth remove` elimina una cookie, y `xauth extract`/`xauth merge` permiten transferir cookies entre hosts.

</details>

---

### Pregunta 24

Escribe el comando para verificar que tipo de sesion grafica se esta usando (Wayland o X11).

<input type="text" class="fill-blank" data-answer="echo $XDG_SESSION_TYPE" data-alt="printenv XDG_SESSION_TYPE" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**echo $XDG_SESSION_TYPE**

La variable de entorno `$XDG_SESSION_TYPE` contiene el tipo de sesion grafica actual: `wayland` si se usa Wayland o `x11` si se usa X11. Es la forma mas directa y fiable de identificar el protocolo de display en uso. Otra forma complementaria es verificar si `$WAYLAND_DISPLAY` tiene un valor (por ejemplo, `wayland-0`), lo que indica que se usa Wayland. Tambien se puede comprobar `$DISPLAY` para ver la configuracion del display X11 (como `:0` o `localhost:10.0`).

</details>

---

### Pregunta 25

Escribe el comando para generar un archivo `xorg.conf` automaticamente basado en el hardware detectado.

<input type="text" class="fill-blank" data-answer="Xorg -configure" data-alt="X -configure" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**Xorg -configure**

El comando `Xorg -configure` (o `X -configure`) analiza el hardware del sistema y genera un archivo de configuracion `xorg.conf` basado en lo detectado. El archivo generado se guarda como `/root/xorg.conf.new` y puede copiarse a `/etc/X11/xorg.conf`. Es importante que el servidor X NO este en ejecucion cuando se ejecuta este comando. En sistemas modernos, Xorg suele funcionar sin este archivo gracias a la autodeteccion, y se prefieren archivos parciales en `/etc/X11/xorg.conf.d/` para ajustes especificos.

</details>
