---
title: "106.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "106.1"
---

# Flashcards: 106.1 - Instalar Y Configurar X11

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-001">
<div class="flashcard-front">

**P:** En la arquitectura de X11, donde se ejecuta el servidor X y donde se ejecutan los clientes X?

</div>
<div class="flashcard-back">

**R:** b) El servidor X se ejecuta en la maquina local (donde esta la pantalla) y los clientes son las aplicaciones graficas. En X11, la terminologia es contraintuitiva: el **servidor X** se ejecuta en la maquina donde estan la pantalla, el teclado y el raton, gestionando el hardware grafico. Los **clientes X** son las aplicaciones graficas (firefox, xterm, gimp, etc.) que pueden ejecutarse en la misma maquina o en una remota. La comunicacion se realiza mediante el protocolo X11, que puede funcionar a traves de la red, permitiendo ejecutar una aplicacion en un servidor remoto y ver su ventana en la pantalla local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-002">
<div class="flashcard-front">

**P:** Que significa el valor `DISPLAY=localhost:10.0` en una sesion SSH?

</div>
<div class="flashcard-back">

**R:** a) El display local numero 10 de la maquina localhost, pantalla 0 (tipico de SSH X forwarding). El formato de DISPLAY es `[host]:display[.screen]`. En `localhost:10.0`, `localhost` es el host, `10` es el numero de display y `0` es la pantalla. El offset 10 viene de la directiva `X11DisplayOffset 10` en la configuracion de SSH. Cuando se usa SSH X forwarding (`ssh -X`), SSH configura automaticamente esta variable y tuneliza la conexion X11 a traves del canal seguro SSH, gestionando las cookies de `xauth` automaticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-003">
<div class="flashcard-front">

**P:** Cual de los siguientes metodos de control de acceso al servidor X es mas seguro y por que?

</div>
<div class="flashcard-back">

**R:** c) `xauth` porque usa cookies MIT-MAGIC-COOKIE almacenadas en `~/.Xauthority` para autenticar por sesion. `xauth` es mas seguro porque requiere que el cliente presente un token secreto (cookie) para conectarse al servidor X. Cada sesion genera una cookie unica almacenada en `~/.Xauthority`. `xhost` es inseguro porque controla el acceso basandose unicamente en el host: si se permite un host, CUALQUIER usuario de ese host puede acceder. `xhost +` desactiva toda verificacion, siendo extremadamente inseguro. XDMCP no cifra el trafico y esta practicamente en desuso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-004">
<div class="flashcard-front">

**P:** Que seccion del archivo `xorg.conf` vincula un monitor con una tarjeta grafica?

</div>
<div class="flashcard-back">

**R:** c) `Screen`. La seccion **Screen** es la que vincula un monitor con una tarjeta grafica (Device), referenciando ambos por su `Identifier`. Tambien define la profundidad de color y las resoluciones disponibles. La seccion **Device** configura la tarjeta grafica (driver, BusID). La seccion **Monitor** define las caracteristicas del monitor (frecuencias). La seccion **ServerLayout** es la configuracion global que vincula las pantallas (Screen) con los dispositivos de entrada (InputDevice).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-005">
<div class="flashcard-front">

**P:** Que comando se utiliza para generar un archivo `xorg.conf` basado en el hardware detectado automaticamente?

</div>
<div class="flashcard-back">

**R:** b) `X -configure` (o `Xorg -configure`). El comando `Xorg -configure` (o `X -configure`) genera un archivo `xorg.conf` basado en el hardware detectado. El archivo generado se guarda como `/root/xorg.conf.new` y se puede copiar a `/etc/X11/xorg.conf`. Es importante que el servidor X NO este en ejecucion al ejecutar este comando. En sistemas modernos, Xorg suele funcionar sin `xorg.conf` gracias a la autodeteccion, y se prefieren archivos parciales en `/etc/X11/xorg.conf.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-006">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `ssh -X` y `ssh -Y` para X forwarding?

</div>
<div class="flashcard-back">

**R:** b) `-X` habilita X forwarding con restricciones de seguridad (untrusted) y `-Y` lo habilita sin restricciones (trusted). `ssh -X` habilita X forwarding con la extension X11 SECURITY, que restringe lo que la aplicacion remota puede hacer (por ejemplo, no puede capturar el teclado de otras ventanas). Es mas seguro pero algunas aplicaciones complejas pueden no funcionar. `ssh -Y` habilita X forwarding confiable (trusted), sin restricciones de seguridad, dando a la aplicacion remota acceso completo al servidor X local. Ambos requieren `X11Forwarding yes` en `/etc/ssh/sshd_config` del servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-007">
<div class="flashcard-front">

**P:** En el log de Xorg (`/var/log/Xorg.0.log`), que significan los marcadores `(EE)` y `(WW)`?

</div>
<div class="flashcard-back">

**R:** b) `(EE)` indica errores y `(WW)` indica advertencias. En el log de Xorg, los marcadores tienen estos significados: `(EE)` = Error, `(WW)` = Warning (advertencia), `(II)` = Information (informativo), `(**)` = valor de configuracion encontrado, y `(==)` = valor por defecto usado. Cuando X11 no arranca o presenta problemas, `/var/log/Xorg.0.log` es el primer lugar donde buscar informacion de diagnostico, filtrando con `grep "(EE)" /var/log/Xorg.0.log` para encontrar errores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-008">
<div class="flashcard-front">

**P:** Que Display Manager esta asociado por defecto con KDE Plasma?

</div>
<div class="flashcard-back">

**R:** c) SDDM. **SDDM** (Simple Desktop Display Manager) es el Display Manager por defecto de KDE Plasma. Es moderno y esta basado en QML. **GDM** (GNOME Display Manager) es el DM por defecto de GNOME. **LightDM** es un DM independiente y ligero, muy usado en Xfce y MATE. **XDM** (X Display Manager) es el original de X11, muy basico y sin dependencias de escritorio. Para cambiar el DM en sistemas systemd se usa `systemctl enable --now nombre_dm`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-009">
<div class="flashcard-front">

**P:** Cual de los siguientes directorios contiene archivos de configuracion de Xorg proporcionados por la distribucion que NO deben editarse directamente?

</div>
<div class="flashcard-back">

**R:** b) `/usr/share/X11/xorg.conf.d/`. `/usr/share/X11/xorg.conf.d/` contiene archivos de configuracion proporcionados por la distribucion y los paquetes del sistema. No deben editarse directamente porque se sobrescriben en actualizaciones. La jerarquia de prioridad es: `/etc/X11/xorg.conf` (maxima prioridad, configuracion manual del administrador), `/etc/X11/xorg.conf.d/*.conf` (configuraciones parciales del administrador), y `/usr/share/X11/xorg.conf.d/*.conf` (configuraciones de la distribucion, menor prioridad).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-010">
<div class="flashcard-front">

**P:** Como se puede verificar si la sesion actual usa Wayland o X11?

</div>
<div class="flashcard-back">

**R:** b) Verificando el valor de `$XDG_SESSION_TYPE` que muestra `wayland` o `x11`. La forma mas directa de verificar el tipo de sesion es con `echo $XDG_SESSION_TYPE`, que devuelve `wayland` o `x11`. Otra forma es comprobar si la variable `$WAYLAND_DISPLAY` tiene valor (por ejemplo, `wayland-0`), lo que indica que se usa Wayland. Wayland es un protocolo de display moderno que busca reemplazar a X11, con un compositor integrado y mayor seguridad (aislamiento entre clientes). XWayland permite ejecutar aplicaciones X11 antiguas dentro de sesiones Wayland.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-011">
<div class="flashcard-front">

**P:** Que comando desactiva completamente la verificacion de acceso al servidor X, permitiendo conexiones desde cualquier host?

</div>
<div class="flashcard-back">

**R:** c) `xhost +`. El comando `xhost +` desactiva toda verificacion de acceso al servidor X, permitiendo que cualquier host en la red pueda conectarse y mostrar ventanas en la pantalla local. Esto es extremadamente inseguro y no se recomienda en entornos de produccion, ya que un atacante podria espiar pulsaciones de teclado o capturar el contenido de la pantalla. `xhost -` (con signo menos) reactiva las restricciones de acceso. `xhost +host` permite acceso solo desde un host especifico. El metodo seguro de autenticacion es `xauth`, que usa cookies MIT-MAGIC-COOKIE almacenadas en `~/.Xauthority`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-012">
<div class="flashcard-front">

**P:** Que archivo almacena las cookies de autenticacion MIT-MAGIC-COOKIE para el servidor X?

</div>
<div class="flashcard-back">

**R:** b) `~/.Xauthority`. El archivo `~/.Xauthority` es un archivo binario que almacena las cookies de autenticacion MIT-MAGIC-COOKIE para el servidor X. Cada sesion grafica genera una cookie unica que los clientes X deben presentar para conectarse al servidor. Se gestiona con el comando `xauth`: `xauth list` muestra las cookies actuales, `xauth add` agrega una cookie, y `xauth extract`/`xauth merge` permiten transferir cookies entre hosts. La variable de entorno `$XAUTHORITY` indica la ubicacion de este archivo. Es el metodo seguro de control de acceso al servidor X, superior a `xhost`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-013">
<div class="flashcard-front">

**P:** En la jerarquia de configuracion de Xorg, cual tiene la maxima prioridad?

</div>
<div class="flashcard-back">

**R:** c) `/etc/X11/xorg.conf`. La jerarquia de configuracion de Xorg en orden de prioridad es: (1) `/etc/X11/xorg.conf` tiene maxima prioridad y es la configuracion manual del administrador. (2) `/etc/X11/xorg.conf.d/*.conf` contiene configuraciones parciales del administrador. (3) `/usr/share/X11/xorg.conf.d/*.conf` contiene configuraciones proporcionadas por la distribucion y paquetes del sistema, con menor prioridad. Los valores autodetectados se usan cuando no hay configuracion explicita. En sistemas modernos, Xorg funciona sin `xorg.conf` gracias a la autodeteccion, pero si el archivo existe, sus valores prevalecen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-014">
<div class="flashcard-front">

**P:** Que significan los componentes del valor `DISPLAY=192.168.1.10:0.0`?

</div>
<div class="flashcard-back">

**R:** b) Host 192.168.1.10, display numero 0, pantalla numero 0. El formato de la variable DISPLAY es `[host]:display[.screen]`. En `192.168.1.10:0.0`: `192.168.1.10` es la direccion IP del servidor X (la maquina donde se encuentra la pantalla fisica), `0` es el numero de display (generalmente 0 para el display principal), y `.0` es el numero de pantalla (screen, tambien generalmente 0). Cuando el host esta vacio (`:0`), se refiere al servidor local. Esta variable es esencial para que los clientes X sepan donde enviar su salida grafica, especialmente en entornos de red o con SSH X forwarding.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-015">
<div class="flashcard-front">

**P:** Que configuracion del servidor SSH es necesaria para habilitar X forwarding?

</div>
<div class="flashcard-back">

**R:** b) `X11Forwarding yes` en `/etc/ssh/sshd_config`. Para habilitar X forwarding en el lado del servidor SSH, se debe configurar `X11Forwarding yes` en `/etc/ssh/sshd_config`. La directiva `X11DisplayOffset 10` define el numero de display inicial para las sesiones X reenviadas. En el lado del cliente, se puede configurar `ForwardX11 yes` en `/etc/ssh/ssh_config` o `~/.ssh/config`, o usar la opcion `-X` (restringido) o `-Y` (confiable) al conectar. Cuando se usa X forwarding, SSH configura automaticamente la variable DISPLAY y las cookies de xauth.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-016">
<div class="flashcard-front">

**P:** Que herramienta muestra informacion detallada del servidor X, como resoluciones disponibles, profundidad de color y extensiones soportadas?

</div>
<div class="flashcard-back">

**R:** b) `xdpyinfo`. `xdpyinfo` (X Display Information) muestra informacion detallada sobre el servidor X en ejecucion: nombre del display, numero de pantallas, resoluciones disponibles, profundidad de color, extensiones soportadas, informacion del vendedor y mas. `xwininfo` muestra informacion sobre una ventana especifica (posicion, tamano, ID). `xrandr` es una herramienta para configurar la resolucion y la disposicion de monitores. `xhost` gestiona el control de acceso al servidor X. `xdpyinfo` es una herramienta de diagnostico util para verificar las capacidades del servidor X.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-017">
<div class="flashcard-front">

**P:** Que es XWayland y cual es su proposito?

</div>
<div class="flashcard-back">

**R:** b) Es una capa de compatibilidad que permite ejecutar aplicaciones X11 dentro de una sesion Wayland. XWayland es una implementacion del servidor X11 que se ejecuta como un cliente Wayland. Su proposito es proporcionar compatibilidad hacia atras, permitiendo que las aplicaciones X11 existentes funcionen dentro de sesiones Wayland sin necesidad de ser reescritas. Cuando una aplicacion X11 necesita ejecutarse en un escritorio Wayland, XWayland actua como intermediario, traduciendo las llamadas del protocolo X11 al protocolo Wayland. Esto permite una transicion gradual de X11 a Wayland sin perder compatibilidad con software antiguo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-018">
<div class="flashcard-front">

**P:** Que Display Manager es ligero, independiente de cualquier entorno de escritorio y soporta multiples interfaces (greeters)?

</div>
<div class="flashcard-back">

**R:** c) LightDM. LightDM es un Display Manager ligero e independiente, no vinculado a ningun entorno de escritorio especifico. Su caracteristica distintiva es el soporte para multiples **greeters** (interfaces de inicio de sesion), lo que permite cambiar la apariencia de la pantalla de login sin cambiar el DM. Greeters populares incluyen lightdm-gtk-greeter, lightdm-webkit2-greeter y slick-greeter. GDM esta asociado a GNOME. SDDM esta asociado a KDE Plasma y esta basado en QML. XDM es el DM original de X11, muy basico y sin funcionalidades modernas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-019">
<div class="flashcard-front">

**P:** Cual de las siguientes es una ventaja de Wayland sobre X11 en terminos de seguridad?

</div>
<div class="flashcard-back">

**R:** b) Wayland proporciona aislamiento entre clientes, impidiendo que una aplicacion espie a otra. Una mejora fundamental de Wayland sobre X11 es el aislamiento entre clientes. En X11, cualquier cliente puede capturar eventos de teclado de otras ventanas o leer el contenido de la pantalla de otras aplicaciones (por ejemplo, un keylogger podria capturar contrasenas escritas en otra ventana). En Wayland, cada cliente solo tiene acceso a su propia ventana y no puede interactuar con las ventanas de otros clientes sin la mediacion del compositor. Esto mejora significativamente la seguridad del escritorio. Sin embargo, Wayland no tiene soporte nativo para red transparente, a diferencia de X11.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-020">
<div class="flashcard-front">

**P:** Que seccion del archivo `xorg.conf` define la configuracion de la tarjeta grafica (GPU)?

</div>
<div class="flashcard-back">

**R:** c) `Device`. La seccion `Device` en `xorg.conf` configura la tarjeta grafica (GPU), incluyendo el identificador, el driver (por ejemplo, `intel`, `nvidia`, `amdgpu`), el vendor y el BusID PCI. La seccion `Monitor` define las caracteristicas del monitor (frecuencias, modelo). La seccion `Screen` vincula un Monitor con un Device y define la profundidad de color y resoluciones. La seccion `ServerLayout` es la configuracion global que agrupa pantallas (Screen) y dispositivos de entrada (InputDevice). Cada seccion se delimita con `Section "nombre"` y `EndSection`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando SSH para conectarse al servidor `192.168.1.50` como usuario `admin` habilitando X forwarding con restricciones de seguridad. <input type="text" class="fill-blank" data-answer="ssh -X admin@192.168.1.50" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ssh -X admin@192.168.1.50. La opcion `-X` de SSH habilita el reenvio de X11 (X forwarding) con restricciones de seguridad proporcionadas por la extension X11 SECURITY. Esto permite ejecutar aplicaciones graficas en el servidor remoto y ver las ventanas en la pantalla local. La variable DISPLAY se configura automaticamente (generalmente `localhost:10.0`) y SSH gestiona las cookies de xauth. Si alguna aplicacion no funciona con `-X`, se puede usar `-Y` (trusted, sin restricciones). El servidor SSH debe tener `X11Forwarding yes` en `/etc/ssh/sshd_config`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para buscar errores en el archivo de log de Xorg. <input type="text" class="fill-blank" data-answer="grep '(EE)' /var/log/Xorg.0.log" data-alt="grep \"(EE)\" /var/log/Xorg.0.log" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** grep '(EE)' /var/log/Xorg.0.log. El archivo `/var/log/Xorg.0.log` es el log principal del servidor X para el display `:0`. Los marcadores del log indican el tipo de mensaje: `(EE)` para errores, `(WW)` para advertencias, `(II)` para informacion, `(**)` para valores de configuracion y `(==)` para valores por defecto. Filtrar con `grep '(EE)'` permite identificar rapidamente los problemas que impiden el funcionamiento correcto del servidor X. Este es el primer recurso de diagnostico cuando X11 no arranca o presenta problemas graficos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ver las cookies de autenticacion X almacenadas actualmente. <input type="text" class="fill-blank" data-answer="xauth list" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xauth list. El comando `xauth list` muestra todas las cookies de autenticacion MIT-MAGIC-COOKIE almacenadas en el archivo `~/.Xauthority`. La salida muestra el display, el protocolo de autenticacion (normalmente MIT-MAGIC-COOKIE-1) y el valor hexadecimal de la cookie. Estas cookies son necesarias para que los clientes X se autentiquen con el servidor. Otros subcomandos utiles: `xauth add` agrega una cookie, `xauth remove` elimina una cookie, y `xauth extract`/`xauth merge` permiten transferir cookies entre hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para verificar que tipo de sesion grafica se esta usando (Wayland o X11). <input type="text" class="fill-blank" data-answer="echo $XDG_SESSION_TYPE" data-alt="printenv XDG_SESSION_TYPE" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** echo $XDG_SESSION_TYPE. La variable de entorno `$XDG_SESSION_TYPE` contiene el tipo de sesion grafica actual: `wayland` si se usa Wayland o `x11` si se usa X11. Es la forma mas directa y fiable de identificar el protocolo de display en uso. Otra forma complementaria es verificar si `$WAYLAND_DISPLAY` tiene un valor (por ejemplo, `wayland-0`), lo que indica que se usa Wayland. Tambien se puede comprobar `$DISPLAY` para ver la configuracion del display X11 (como `:0` o `localhost:10.0`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para generar un archivo `xorg.conf` automaticamente basado en el hardware detectado. <input type="text" class="fill-blank" data-answer="Xorg -configure" data-alt="X -configure" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** Xorg -configure. El comando `Xorg -configure` (o `X -configure`) analiza el hardware del sistema y genera un archivo de configuracion `xorg.conf` basado en lo detectado. El archivo generado se guarda como `/root/xorg.conf.new` y puede copiarse a `/etc/X11/xorg.conf`. Es importante que el servidor X NO este en ejecucion cuando se ejecuta este comando. En sistemas modernos, Xorg suele funcionar sin este archivo gracias a la autodeteccion, y se prefieren archivos parciales en `/etc/X11/xorg.conf.d/` para ajustes especificos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-026">
<div class="flashcard-front">

**P:** Un administrador ejecuta `export DISPLAY=:0` y luego lanza `xterm`. La aplicacion se abre en la pantalla local. Si cambia a `export DISPLAY=:1`, que ocurrira al lanzar `xterm`?

</div>
<div class="flashcard-back">

**R:** `xterm` intentara conectarse al display numero 1 de la maquina local. Si no existe un servidor X escuchando en el display `:1`, la aplicacion fallara con un error como `Error: Can't open display :1`. El formato de DISPLAY es `[host]:display[.screen]`. Cuando el campo host esta vacio (antes de los dos puntos), se asume localhost y se usa un socket Unix local (`/tmp/.X11-unix/X1`). Cada instancia del servidor X escucha en un display numerado distinto: `:0` es el principal, `:1` seria un segundo servidor X. Esto es diferente de una conexion TCP, donde se especifica la IP o hostname (por ejemplo, `192.168.1.5:0`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-027">
<div class="flashcard-front">

**P:** Escribe el comando para configurar la variable DISPLAY de forma que una aplicacion grafica se muestre en el display 0, pantalla 0, del servidor con IP 10.0.0.5. <input type="text" class="fill-blank" data-answer="export DISPLAY=10.0.0.5:0.0" data-alt="DISPLAY=10.0.0.5:0.0" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** export DISPLAY=10.0.0.5:0.0. El formato completo de la variable DISPLAY es `host:display.screen`. En este caso: `10.0.0.5` es la IP del servidor X remoto donde se mostrara la ventana, `:0` indica el display numero 0 y `.0` indica la pantalla (screen) 0. Para que la conexion funcione, el servidor X en 10.0.0.5 debe permitir conexiones remotas (via `xhost` o `xauth`), y si hay un firewall, debe permitir trafico en el puerto TCP 6000 + numero de display (6000 para display 0). En produccion, es preferible usar SSH X forwarding (`ssh -X`) en lugar de conexiones X11 directas por motivos de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-028">
<div class="flashcard-front">

**P:** Un sistema tiene dos tarjetas graficas, cada una conectada a un monitor diferente. Ambos monitores estan gestionados por un unico servidor X en el display `:0`. Como se referencia el segundo monitor en la variable DISPLAY?

</div>
<div class="flashcard-back">

**R:** Se referencia como `:0.1`. En la variable DISPLAY (`host:display.screen`), el tercer componente `.screen` identifica pantallas fisicas individuales dentro del mismo display. `:0.0` es la primera pantalla (por defecto) y `:0.1` es la segunda. Esto es diferente de tener dos displays separados (`:0` y `:1`), donde cada uno tendria su propio servidor X. En la practica moderna, Xinerama o XRandR gestionan multiples monitores dentro de una unica pantalla logica (screen 0), haciendo menos comun el uso de multiples screens. Sin embargo, el concepto de screen sigue apareciendo en el examen LPIC-1 como parte del formato de DISPLAY.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-029">
<div class="flashcard-front">

**P:** Un administrador revisa `/var/log/Xorg.0.log` y encuentra la linea: `(**) NVIDIA(0): Depth 24, (==) framebuffer bpp 32`. Que indican los marcadores `(**)` y `(==)` respectivamente?

</div>
<div class="flashcard-back">

**R:** `(**)` indica un valor que fue encontrado en la configuracion (archivo `xorg.conf` o archivos en `xorg.conf.d/`), mientras que `(==)` indica un valor por defecto aplicado por el servidor X al no existir configuracion explicita. En este ejemplo, la profundidad de color 24 fue configurada explicitamente por el administrador, pero el valor de framebuffer bpp 32 fue asignado automaticamente. Los cinco marcadores del log de Xorg son: `(EE)` = error, `(WW)` = advertencia, `(II)` = informacion, `(**)` = valor configurado, `(==)` = valor por defecto. Conocer estos marcadores es esencial para diagnosticar problemas graficos en el examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-030">
<div class="flashcard-front">

**P:** Un usuario ejecuta `firefox` desde una terminal remota via SSH sin la opcion `-X` y obtiene `Error: no display specified`. Escribe el comando que deberia haber usado para conectarse correctamente, asumiendo que el servidor es `srv01`. <input type="text" class="fill-blank" data-answer="ssh -X srv01" data-alt="ssh -Y srv01" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ssh -X srv01. El error `no display specified` ocurre porque la variable `DISPLAY` no esta definida en la sesion remota. Sin la opcion `-X` o `-Y`, SSH no configura X forwarding y la variable DISPLAY queda vacia, por lo que las aplicaciones graficas no saben donde enviar su salida. Al usar `ssh -X srv01`, SSH automaticamente: (1) configura `DISPLAY=localhost:10.0` en el servidor remoto, (2) crea un tunel cifrado para el trafico X11, y (3) gestiona las cookies de `xauth`. La alternativa manual (sin SSH) seria configurar `export DISPLAY=ip_cliente:0` y gestionar las cookies con `xauth`, pero esto es inseguro y no recomendado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-031">
<div class="flashcard-front">

**P:** Despues de actualizar el driver de la tarjeta grafica, el servidor X no arranca. El archivo `/var/log/Xorg.0.log` contiene la linea `(EE) Failed to load module "nvidia" (module does not exist)`. Cual es la causa probable y como se puede resolver temporalmente?

</div>
<div class="flashcard-back">

**R:** La causa es que el modulo del driver NVIDIA no se instalo correctamente o no es compatible con la version de Xorg. Para resolver temporalmente, se puede editar `/etc/X11/xorg.conf` y cambiar el driver en la seccion `Device` de `nvidia` a `nouveau` (driver libre) o `vesa` (driver generico). Tambien se puede eliminar o renombrar `xorg.conf` para que Xorg use autodeteccion: `mv /etc/X11/xorg.conf /etc/X11/xorg.conf.bak`. Otra opcion es generar una configuracion nueva con `Xorg -configure`. El log `/var/log/Xorg.0.log` registra el display `:0`; si hubiera un segundo servidor X en `:1`, su log seria `/var/log/Xorg.1.log`. Siempre se buscan errores con `grep '(EE)' /var/log/Xorg.0.log`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-032">
<div class="flashcard-front">

**P:** Un administrador necesita cambiar el Display Manager de GDM a LightDM en un sistema con systemd. Escribe los dos comandos necesarios para desactivar GDM y activar LightDM. <input type="text" class="fill-blank" data-answer="systemctl disable gdm && systemctl enable lightdm" data-alt="systemctl disable gdm; systemctl enable lightdm" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** systemctl disable gdm && systemctl enable lightdm. En sistemas con systemd, cada Display Manager es un servicio que se gestiona con `systemctl`. El comando `systemctl disable gdm` elimina el enlace simbolico que inicia GDM en el arranque, y `systemctl enable lightdm` crea el enlace para iniciar LightDM. Alternativamente, se puede usar `systemctl enable --now lightdm` para activarlo e iniciarlo inmediatamente. Solo un DM puede estar activo a la vez. Asociaciones por defecto: **GDM** = GNOME, **SDDM** = KDE Plasma, **LightDM** = independiente (soporta greeters intercambiables), **XDM** = DM original de X11. En sistemas con SysVinit se usaria `update-alternatives --config display-manager` o se editaria `/etc/X11/default-display-manager`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-033">
<div class="flashcard-front">

**P:** Una empresa quiere migrar sus estaciones de trabajo de X11 a Wayland, pero tiene aplicaciones legacy que solo funcionan con X11. Que componente permite ejecutar estas aplicaciones en una sesion Wayland y cual es su limitacion principal?

</div>
<div class="flashcard-back">

**R:** **XWayland** permite ejecutar aplicaciones X11 legacy dentro de una sesion Wayland. XWayland es un servidor X11 que se ejecuta como cliente Wayland, traduciendo las llamadas del protocolo X11 a Wayland de forma transparente. Su limitacion principal es que las aplicaciones ejecutadas via XWayland **no se benefician del aislamiento de seguridad de Wayland**: siguen pudiendo capturar eventos de teclado y contenido de pantalla de otras ventanas XWayland (aunque no de las ventanas nativas Wayland). Otras diferencias clave entre Wayland y X11: Wayland integra el compositor en el protocolo (no necesita un compositor externo como Compiz o Mutter sobre X11), no soporta red transparente de forma nativa (a diferencia del network transparency de X11), y usa la variable `$WAYLAND_DISPLAY` en lugar de `$DISPLAY`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-034">
<div class="flashcard-front">

**P:** Un usuario se conecta con `ssh -X user@servidor` y ejecuta `gedit`, pero la aplicacion falla con errores de autorizacion. El administrador verifica que `X11Forwarding yes` esta configurado en `sshd_config`. Que directiva adicional de `sshd_config` podria estar causando el problema y que archivo del lado del cliente gestiona la autenticacion?

</div>
<div class="flashcard-back">

**R:** La directiva `X11UseLocalhost` podria estar causando problemas si esta en `no` y hay restricciones de red, pero la causa mas comun es un problema con las cookies de `xauth`. El archivo `~/.Xauthority` del lado del cliente almacena las cookies MIT-MAGIC-COOKIE que SSH genera automaticamente para autenticar la conexion X11. Si este archivo tiene permisos incorrectos, esta corrupto o no es accesible, la autorizacion falla. Solucion: verificar con `xauth list` que la cookie existe, y si no, se puede regenerar eliminando `~/.Xauthority` y reconectando. Otras directivas relevantes de `sshd_config`: `X11DisplayOffset 10` define el numero de display inicial (por defecto 10), y `X11Forwarding yes` habilita el reenvio. En el cliente, `ForwardX11 yes` en `~/.ssh/config` evita tener que usar `-X` cada vez.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.1">
</div>

<div class="flashcard" data-id="106.1-fc-035">
<div class="flashcard-front">

**P:** TRAMPAS DEL EXAMEN: En X11, el "servidor" se ejecuta en la maquina local y los "clientes" son las aplicaciones. Verdadero o falso? Ademas, `xhost +` es mas seguro que `xauth` para controlar el acceso al servidor X. Verdadero o falso?

</div>
<div class="flashcard-back">

**R:** Primera afirmacion: **VERDADERO**. La terminologia de X11 es contraintuitiva: el **servidor X** se ejecuta en la maquina local (donde estan pantalla, teclado y raton), mientras que los **clientes X** son las aplicaciones graficas (firefox, xterm), que pueden estar en maquinas remotas. El examen intenta confundir invirtiendo estos roles. Segunda afirmacion: **FALSO**. `xhost +` es extremadamente inseguro porque desactiva toda verificacion de acceso, permitiendo que cualquier host se conecte. `xauth` con cookies MIT-MAGIC-COOKIE es el metodo seguro. Otras trampas frecuentes: (1) `/usr/share/X11/xorg.conf.d/` NO debe editarse (se sobrescribe en actualizaciones), usar `/etc/X11/xorg.conf.d/`; (2) `ssh -X` es restrictivo (seguro) y `ssh -Y` es confiable (sin restricciones), no al reves; (3) Wayland NO soporta red transparente como X11.

</div>
</div>

---

