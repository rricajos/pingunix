---
title: "Simulacro Examen 102 - B"
tags:
  - lpic-1
  - examen-102
  - simulacro
tipo: simulacro
certificacion: lpic-1
examen: "102"
---

# Simulacro B - Examen 102

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="102-b" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="105.1" data-correct="c">

### Pregunta 1 (Subtema 105.1)

Un usuario modifica su archivo `~/.bash_profile` pero los cambios no se aplican al abrir una nueva pestaña del terminal (que abre una shell interactiva no-login). ¿Cuál es la razón más probable?

- [ ] a) El archivo tiene permisos incorrectos
- [ ] b) El sistema usa zsh en lugar de bash
- [ ] c) Las shells interactivas no-login solo leen `~/.bashrc`, no `~/.bash_profile`
- [ ] d) El archivo `/etc/profile` sobreescribe la configuración del usuario

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) Las shells interactivas no-login solo leen `~/.bashrc`, no `~/.bash_profile`**

Bash distingue entre shells de login y no-login. Las shells de login leen `/etc/profile` y luego `~/.bash_profile` (o `~/.bash_login` o `~/.profile`). Las shells interactivas no-login solo leen `~/.bashrc`. Por eso es habitual incluir `source ~/.bashrc` dentro de `~/.bash_profile`.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="105.1" data-correct="b">

### Pregunta 2 (Subtema 105.1)

¿Qué comando muestra todas las variables de entorno exportadas en la sesión actual del shell?

- [ ] a) `set`
- [ ] b) `env`
- [ ] c) `declare`
- [ ] d) `echo $VARS`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `env`**

El comando `env` muestra únicamente las variables de entorno exportadas (disponibles para procesos hijos). El comando `set` muestra todas las variables (exportadas y no exportadas) además de las funciones definidas. `declare` sin opciones se comporta de forma similar a `set`.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="105.1" data-correct="d">

### Pregunta 3 (Subtema 105.1)

¿En qué directorio se colocan los scripts que deben ejecutarse para todos los usuarios al iniciar una sesión de login, sin modificar `/etc/profile` directamente?

- [ ] a) `/etc/bash.bashrc.d/`
- [ ] b) `/etc/skel/`
- [ ] c) `/etc/environment.d/`
- [ ] d) `/etc/profile.d/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `/etc/profile.d/`**

El directorio `/etc/profile.d/` contiene scripts (`.sh`) que son ejecutados automáticamente por `/etc/profile` durante el inicio de sesión de login. Esto permite añadir configuraciones globales de forma modular sin editar directamente `/etc/profile`. `/etc/skel/` contiene los archivos plantilla para nuevos usuarios.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="105.2" data-correct="a">

### Pregunta 4 (Subtema 105.2)

En un script Bash, ¿qué variable especial contiene el número total de argumentos posicionales pasados al script?

- [ ] a) `$#`
- [ ] b) `$@`
- [ ] c) `$*`
- [ ] d) `$0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `$#`**

La variable `$#` contiene el número de argumentos posicionales pasados al script. `$@` y `$*` representan todos los argumentos (con diferente comportamiento al entrecomillarlos), y `$0` contiene el nombre del propio script.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="105.2" data-correct="c">

### Pregunta 5 (Subtema 105.2)

¿Qué estructura de control Bash permite iterar sobre una lista de valores?

- [ ] a) `while ... do ... done`
- [ ] b) `case ... esac`
- [ ] c) `for ... in ... do ... done`
- [ ] d) `until ... do ... done`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `for ... in ... do ... done`**

La estructura `for variable in lista; do comandos; done` itera sobre cada elemento de la lista. `while` y `until` son bucles condicionales, y `case` es una estructura de selección múltiple, no de iteración.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="105.2" data-correct="b">

### Pregunta 6 (Subtema 105.2)

¿Cuál es la diferencia entre `"$@"` y `"$*"` cuando se usan entre comillas dobles en un script Bash?

- [ ] a) `"$@"` concatena todos los argumentos en una sola cadena, `"$*"` los mantiene separados
- [ ] b) `"$@"` expande cada argumento como una palabra separada, `"$*"` los une en una sola cadena
- [ ] c) No hay diferencia, ambos se comportan igual entre comillas dobles
- [ ] d) `"$*"` incluye `$0` en la lista, `"$@"` no

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `"$@"` expande cada argumento como una palabra separada, `"$*"` los une en una sola cadena**

Cuando se entrecomillan, `"$@"` expande a `"$1" "$2" "$3"...` (cada argumento como palabra independiente), mientras que `"$*"` expande a `"$1c$2c$3..."` donde `c` es el primer carácter de `$IFS` (por defecto un espacio). Esta distinción es crucial al iterar sobre argumentos que contienen espacios.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="106.1" data-correct="d">

### Pregunta 7 (Subtema 106.1)

¿Qué comando muestra información detallada sobre el servidor X en ejecución, como la resolución, la profundidad de color y las extensiones disponibles?

- [ ] a) `xrandr`
- [ ] b) `xhost`
- [ ] c) `xlsclients`
- [ ] d) `xdpyinfo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `xdpyinfo`**

`xdpyinfo` muestra información detallada sobre el servidor X, incluyendo la versión del protocolo, las pantallas disponibles, resoluciones, profundidad de color y extensiones soportadas. `xrandr` gestiona la resolución y las pantallas, `xhost` controla el acceso al servidor X, y `xlsclients` lista las aplicaciones cliente conectadas.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="106.1" data-correct="a">

### Pregunta 8 (Subtema 106.1)

¿Qué protocolo ha sido diseñado como sucesor del sistema X Window en Linux, ofreciendo mejor rendimiento y seguridad?

- [ ] a) Wayland
- [ ] b) Mir
- [ ] c) DirectFB
- [ ] d) XFree86

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) Wayland**

Wayland es el protocolo de servidor de pantalla diseñado como sucesor moderno de X11. Ofrece una arquitectura más simple, mejor rendimiento, menor latencia y mayor seguridad al aislar las aplicaciones entre sí. Las distribuciones modernas como Fedora y Ubuntu ya lo usan por defecto.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="106.1" data-correct="b">

### Pregunta 9 (Subtema 106.1)

Un administrador necesita ejecutar una aplicación gráfica remota en su pantalla local mediante SSH. ¿Qué opción de SSH debe utilizar?

- [ ] a) `-L`
- [ ] b) `-X`
- [ ] c) `-D`
- [ ] d) `-T`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `-X`**

La opción `-X` de SSH habilita el reenvío de X11 (X11 forwarding), lo que permite ejecutar aplicaciones gráficas en el servidor remoto y que se muestren en la pantalla local. La opción `-Y` es similar pero con trusted forwarding. `-L` es para reenvío de puertos, `-D` para proxy SOCKS y `-T` desactiva la asignación de pseudoterminal.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="106.2" data-correct="c">

### Pregunta 10 (Subtema 106.2)

¿Qué número de puerto utiliza por defecto el protocolo VNC para la primera sesión de escritorio remoto?

- [ ] a) 3389
- [ ] b) 22
- [ ] c) 5901
- [ ] d) 5800

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) 5901**

VNC utiliza el puerto base 5900 más el número de display. La primera sesión (display :1) usa el puerto 5901, la segunda el 5902, etc. El puerto 3389 corresponde a RDP (Remote Desktop Protocol de Microsoft). El puerto 5800 se usa a veces para el cliente VNC basado en web (Java).

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="106.2" data-correct="a">

### Pregunta 11 (Subtema 106.2)

¿Cuál de los siguientes protocolos permite compartir el escritorio remoto a través de un navegador web sin necesidad de instalar un cliente adicional?

- [ ] a) SPICE con cliente web
- [ ] b) XDMCP
- [ ] c) NX
- [ ] d) Telnet

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) SPICE con cliente web**

SPICE (Simple Protocol for Independent Computing Environments) puede funcionar a través de un cliente web HTML5, permitiendo el acceso al escritorio remoto directamente desde un navegador. También herramientas como noVNC proporcionan acceso VNC vía navegador. XDMCP requiere un servidor X local y NX requiere su propio cliente.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="106.2" data-correct="d">

### Pregunta 12 (Subtema 106.2)

¿Qué gestor de display (display manager) es el más utilizado por defecto en distribuciones con GNOME?

- [ ] a) SDDM
- [ ] b) LightDM
- [ ] c) XDM
- [ ] d) GDM

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) GDM**

GDM (GNOME Display Manager) es el gestor de display por defecto del entorno de escritorio GNOME. SDDM es el preferido por KDE Plasma, LightDM es un gestor ligero e independiente del escritorio, y XDM es el display manager original y más básico del sistema X Window.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="106.3" data-correct="b">

### Pregunta 13 (Subtema 106.3)

¿Qué tecnología de accesibilidad permite a usuarios con discapacidad visual utilizar un lector de pantalla en el escritorio GNOME?

- [ ] a) Brltty
- [ ] b) Orca
- [ ] c) espeak
- [ ] d) Festival

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) Orca**

Orca es el lector de pantalla por defecto de GNOME que proporciona acceso al escritorio a usuarios con discapacidad visual mediante síntesis de voz y braille. Brltty es un demonio específico para dispositivos braille, mientras que espeak y Festival son motores de síntesis de voz que pueden ser usados por Orca pero no son lectores de pantalla por sí mismos.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="106.3" data-correct="a">

### Pregunta 14 (Subtema 106.3)

¿Qué característica de accesibilidad permite activar las teclas modificadoras (Shift, Ctrl, Alt) de forma secuencial en lugar de simultánea?

- [ ] a) Sticky Keys (Teclas pegajosas)
- [ ] b) Slow Keys (Teclas lentas)
- [ ] c) Bounce Keys (Teclas de rebote)
- [ ] d) Mouse Keys (Teclas de ratón)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) Sticky Keys (Teclas pegajosas)**

Las Sticky Keys permiten pulsar las teclas modificadoras de forma secuencial: primero se pulsa Shift, se suelta, y luego se pulsa la letra deseada. Esto es útil para usuarios con movilidad reducida. Slow Keys requiere mantener la tecla presionada un tiempo mínimo, Bounce Keys ignora pulsaciones repetidas rápidas, y Mouse Keys permite controlar el cursor con el teclado numérico.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="106.3" data-correct="c">

### Pregunta 15 (Subtema 106.3)

¿Qué opción de accesibilidad permite controlar el puntero del ratón utilizando las teclas del teclado numérico?

- [ ] a) Sticky Keys
- [ ] b) Slow Keys
- [ ] c) Mouse Keys
- [ ] d) Toggle Keys

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) Mouse Keys**

Mouse Keys (Teclas de ratón) es una funcionalidad de accesibilidad que permite mover el puntero del ratón y realizar clics utilizando las teclas del teclado numérico. Se puede activar mediante las opciones de accesibilidad del escritorio o con `xkbset` en X11.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="107.1" data-correct="d">

### Pregunta 16 (Subtema 107.1)

¿Qué comando elimina un usuario del sistema junto con su directorio home y buzón de correo?

- [ ] a) `userdel usuario`
- [ ] b) `deluser usuario`
- [ ] c) `usermod --remove usuario`
- [ ] d) `userdel -r usuario`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `userdel -r usuario`**

La opción `-r` de `userdel` elimina el directorio home del usuario y su buzón de correo en `/var/mail/` además de la cuenta. Sin `-r`, `userdel` solo elimina la entrada del usuario en los archivos de configuración pero deja sus archivos intactos.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="107.1" data-correct="b">

### Pregunta 17 (Subtema 107.1)

¿Qué archivo contiene los valores predeterminados para la creación de nuevos usuarios con `useradd`?

- [ ] a) `/etc/passwd`
- [ ] b) `/etc/default/useradd`
- [ ] c) `/etc/skel/.bashrc`
- [ ] d) `/etc/adduser.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/default/useradd`**

El archivo `/etc/default/useradd` contiene los valores predeterminados utilizados por el comando `useradd`, como el grupo por defecto, el directorio home base, el shell predeterminado y la fecha de expiración. Se puede consultar con `useradd -D`.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="107.1" data-correct="c">

### Pregunta 18 (Subtema 107.1)

Un administrador ejecuta `usermod -L usuario1`. ¿Qué efecto tiene este comando?

- [ ] a) Elimina al usuario del sistema
- [ ] b) Cambia el shell del usuario a `/sbin/nologin`
- [ ] c) Bloquea la cuenta añadiendo un `!` al inicio del hash de la contraseña en `/etc/shadow`
- [ ] d) Mueve el directorio home del usuario

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) Bloquea la cuenta añadiendo un `!` al inicio del hash de la contraseña en `/etc/shadow`**

La opción `-L` (lock) de `usermod` bloquea la contraseña del usuario colocando un signo de exclamación (`!`) delante del hash cifrado en `/etc/shadow`. El usuario no podrá autenticarse con contraseña, aunque la autenticación por clave SSH puede seguir funcionando. Se desbloquea con `usermod -U`.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="107.1" data-correct="a">

### Pregunta 19 (Subtema 107.1)

¿Qué comando permite configurar las políticas de expiración de contraseña para un usuario, como el número máximo de días entre cambios?

- [ ] a) `chage`
- [ ] b) `passwd -e`
- [ ] c) `usermod -p`
- [ ] d) `pwck`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `chage`**

El comando `chage` (change age) permite consultar y modificar las políticas de expiración de contraseña: días mínimos y máximos entre cambios, días de aviso, fecha de expiración de la cuenta, etc. `passwd -e` solo fuerza el cambio inmediato, `usermod -p` establece un hash de contraseña y `pwck` verifica la integridad de los archivos de contraseñas.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="107.2" data-correct="d">

### Pregunta 20 (Subtema 107.2)

¿Qué comando programa la ejecución de un trabajo una única vez a una hora específica?

- [ ] a) `crontab -e`
- [ ] b) `sleep`
- [ ] c) `watch`
- [ ] d) `at`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `at`**

El comando `at` programa la ejecución de un trabajo una sola vez en un momento futuro específico. Por ejemplo, `at 14:00` abre un prompt donde se introducen los comandos a ejecutar. A diferencia de `crontab`, que programa tareas periódicas, `at` es para ejecuciones únicas.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="107.2" data-correct="b">

### Pregunta 21 (Subtema 107.2)

En una entrada de crontab, ¿qué expresión ejecuta un script cada 15 minutos?

- [ ] a) `15 * * * *`
- [ ] b) `*/15 * * * *`
- [ ] c) `0 */15 * * *`
- [ ] d) `0 15 * * *`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `*/15 * * * *`**

La expresión `*/15` en el campo de minutos significa "cada 15 minutos" (0, 15, 30, 45). `15 * * * *` ejecutaría solo en el minuto 15 de cada hora. `0 */15 * * *` ejecutaría cada 15 horas en el minuto 0. `0 15 * * *` ejecutaría una vez al día a las 15:00.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="107.2" data-correct="a">

### Pregunta 22 (Subtema 107.2)

¿Qué ventaja principal ofrece `anacron` frente a `cron` estándar?

- [ ] a) Ejecuta tareas pendientes que se perdieron mientras el sistema estuvo apagado
- [ ] b) Permite programar tareas con precisión de segundos
- [ ] c) Puede enviar notificaciones por correo antes de ejecutar una tarea
- [ ] d) Soporta múltiples zonas horarias simultáneamente

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) Ejecuta tareas pendientes que se perdieron mientras el sistema estuvo apagado**

`anacron` está diseñado para sistemas que no están encendidos 24/7. Cuando el sistema arranca, verifica qué tareas programadas no se ejecutaron durante el tiempo de inactividad y las ejecuta. `cron` estándar simplemente pierde las ejecuciones que ocurrirían mientras el sistema está apagado.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="107.3" data-correct="c">

### Pregunta 23 (Subtema 107.3)

¿Qué comando muestra la configuración regional (locale) actualmente activa en el sistema?

- [ ] a) `localectl`
- [ ] b) `cat /etc/locale.conf`
- [ ] c) `locale`
- [ ] d) `env | grep LC`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `locale`**

El comando `locale` sin argumentos muestra todas las variables de configuración regional activas en la sesión actual (LC_CTYPE, LC_NUMERIC, LC_TIME, etc.). `localectl` muestra y modifica la configuración persistente del sistema. `locale -a` lista todos los locales disponibles en el sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="107.3" data-correct="d">

### Pregunta 24 (Subtema 107.3)

¿Qué variable de entorno tiene la precedencia más baja y actúa como valor por defecto cuando las variables LC_* individuales no están definidas?

- [ ] a) `LC_ALL`
- [ ] b) `LC_CTYPE`
- [ ] c) `LC_MESSAGES`
- [ ] d) `LANG`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `LANG`**

`LANG` establece el locale por defecto para todas las categorías que no tienen una variable `LC_*` específica definida. El orden de precedencia es: `LC_ALL` (máxima, sobreescribe todo) > `LC_*` individuales > `LANG` (mínima). `LC_ALL` se usa raramente y solo para forzar un locale en todas las categorías.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="107.3" data-correct="a">

### Pregunta 25 (Subtema 107.3)

¿Qué representa la codificación `UTF-8` en el contexto de un locale como `es_ES.UTF-8`?

- [ ] a) El juego de caracteres utilizado para representar texto, capaz de codificar todos los caracteres Unicode
- [ ] b) La zona horaria del sistema
- [ ] c) El formato de fecha y hora regional
- [ ] d) El tipo de cifrado utilizado para las contraseñas del sistema

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) El juego de caracteres utilizado para representar texto, capaz de codificar todos los caracteres Unicode**

En un locale como `es_ES.UTF-8`, el componente `UTF-8` define la codificación de caracteres. UTF-8 es una codificación de longitud variable que puede representar todos los caracteres del estándar Unicode, incluyendo caracteres especiales, acentos y caracteres de múltiples idiomas. La parte `es_ES` define el idioma (español) y la región (España).

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="108.1" data-correct="b">

### Pregunta 26 (Subtema 108.1)

¿Qué archivo es un enlace simbólico que apunta al archivo de zona horaria actual del sistema?

- [ ] a) `/etc/timezone`
- [ ] b) `/etc/localtime`
- [ ] c) `/etc/clock`
- [ ] d) `/usr/share/zoneinfo/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/localtime`**

`/etc/localtime` es típicamente un enlace simbólico (o una copia) de un archivo de zona horaria ubicado en `/usr/share/zoneinfo/`. Por ejemplo, puede apuntar a `/usr/share/zoneinfo/Europe/Madrid`. `timedatectl set-timezone` actualiza este enlace automáticamente.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="108.1" data-correct="d">

### Pregunta 27 (Subtema 108.1)

¿Qué protocolo de red se utiliza para sincronizar el reloj del sistema con servidores de tiempo remotos?

- [ ] a) SNMP
- [ ] b) SMTP
- [ ] c) LDAP
- [ ] d) NTP

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) NTP**

NTP (Network Time Protocol) es el protocolo estándar para sincronizar relojes de computadoras a través de redes. Utiliza el puerto UDP 123. Los demonios `ntpd`, `chronyd` y `systemd-timesyncd` son implementaciones de clientes/servidores NTP en Linux.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="108.1" data-correct="c">

### Pregunta 28 (Subtema 108.1)

¿Qué comando muestra la hora actual del reloj hardware (RTC) del sistema?

- [ ] a) `date --hardware`
- [ ] b) `timedatectl show-rtc`
- [ ] c) `hwclock --show`
- [ ] d) `clock --read`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `hwclock --show`**

El comando `hwclock --show` (o `hwclock -r`) lee y muestra la hora actual almacenada en el reloj hardware (RTC - Real Time Clock). Este reloj funciona con batería y mantiene la hora incluso cuando el sistema está apagado. `date` solo muestra la hora del reloj del sistema (software).

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="108.2" data-correct="a">

### Pregunta 29 (Subtema 108.2)

¿Qué opción de `journalctl` muestra los logs del servicio `nginx` específicamente?

- [ ] a) `journalctl -u nginx`
- [ ] b) `journalctl --service nginx`
- [ ] c) `journalctl -f nginx`
- [ ] d) `journalctl -p nginx`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `journalctl -u nginx`**

La opción `-u` (unit) de `journalctl` filtra los mensajes por la unidad de systemd especificada. `journalctl -u nginx` mostrará únicamente los logs generados por el servicio nginx. `-f` sigue los logs en tiempo real (follow), `-p` filtra por prioridad, no por servicio.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="108.2" data-correct="b">

### Pregunta 30 (Subtema 108.2)

¿Qué nivel de prioridad (severity) de syslog indica una condición de emergencia en la que el sistema es inutilizable?

- [ ] a) `alert` (1)
- [ ] b) `emerg` (0)
- [ ] c) `crit` (2)
- [ ] d) `err` (3)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `emerg` (0)**

La prioridad `emerg` (emergency, nivel 0) es la más alta e indica que el sistema es inutilizable. La jerarquía completa de menor a mayor gravedad es: debug (7), info (6), notice (5), warning (4), err (3), crit (2), alert (1), emerg (0).

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="108.2" data-correct="d">

### Pregunta 31 (Subtema 108.2)

¿Qué archivo de configuración controla si el journal de systemd debe ser persistente (sobrevivir a reinicios)?

- [ ] a) `/etc/rsyslog.conf`
- [ ] b) `/etc/syslog.conf`
- [ ] c) `/var/log/journal.conf`
- [ ] d) `/etc/systemd/journald.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `/etc/systemd/journald.conf`**

El archivo `/etc/systemd/journald.conf` configura el comportamiento del journal de systemd, incluyendo la directiva `Storage=` que puede ser `volatile` (solo en RAM), `persistent` (en disco en `/var/log/journal/`), `auto` (persistente si el directorio existe) o `none`. Por defecto suele ser `auto`.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="108.3" data-correct="c">

### Pregunta 32 (Subtema 108.3)

¿Qué archivo define los alias de correo a nivel de sistema, permitiendo redirigir correo de un usuario local a otro?

- [ ] a) `/etc/mail/aliases`
- [ ] b) `/etc/postfix/virtual`
- [ ] c) `/etc/aliases`
- [ ] d) `/etc/mail/redirect`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `/etc/aliases`**

El archivo `/etc/aliases` define redirecciones de correo a nivel de sistema. Por ejemplo, la línea `root: admin@ejemplo.com` redirige el correo de root a otra dirección. Después de modificarlo, se debe ejecutar `newaliases` para reconstruir la base de datos.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="108.3" data-correct="a">

### Pregunta 33 (Subtema 108.3)

¿Qué comando muestra la cola de correo electrónico pendiente de entrega en un sistema con Postfix o Sendmail?

- [ ] a) `mailq`
- [ ] b) `postqueue`
- [ ] c) `mail -l`
- [ ] d) `sendmail -q`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `mailq`**

El comando `mailq` muestra los mensajes de correo pendientes en la cola de entrega del MTA. Es equivalente a `sendmail -bp` y funciona tanto con Postfix como con Sendmail. `postqueue -p` es la versión específica de Postfix, pero `mailq` es el comando estándar compatible con ambos.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="108.3" data-correct="b">

### Pregunta 34 (Subtema 108.3)

¿Qué comando se debe ejecutar después de modificar `/etc/aliases` para que los cambios surtan efecto?

- [ ] a) `postfix reload`
- [ ] b) `newaliases`
- [ ] c) `sendmail -bi`
- [ ] d) `service postfix restart`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `newaliases`**

El comando `newaliases` reconstruye la base de datos de aliases a partir del archivo de texto `/etc/aliases`. Este paso es necesario porque el MTA consulta la base de datos binaria (hash), no el archivo de texto directamente. `sendmail -bi` es equivalente pero menos estándar.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="108.4" data-correct="d">

### Pregunta 35 (Subtema 108.4)

¿Qué comando de CUPS permite enviar un archivo a imprimir desde la línea de comandos?

- [ ] a) `print`
- [ ] b) `cups-print`
- [ ] c) `lpd`
- [ ] d) `lp`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `lp`**

El comando `lp` envía un archivo a la cola de impresión de CUPS. Por ejemplo, `lp -d impresora documento.pdf` imprime el archivo en la impresora especificada. También se puede usar `lpr` (compatible con el sistema de impresión BSD). `lpd` es el demonio de impresión antiguo, no un comando de usuario.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="108.4" data-correct="a">

### Pregunta 36 (Subtema 108.4)

¿Qué puerto TCP utiliza por defecto la interfaz web de administración de CUPS?

- [ ] a) 631
- [ ] b) 515
- [ ] c) 9100
- [ ] d) 8080

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) 631**

CUPS utiliza el puerto TCP 631 para su interfaz web de administración, accesible en `http://localhost:631`. El puerto 515 es del protocolo LPD (Line Printer Daemon) y el 9100 es para impresión directa (RAW/JetDirect).

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="108.4" data-correct="c">

### Pregunta 37 (Subtema 108.4)

¿Qué comando muestra el estado de las colas de impresión y los trabajos pendientes en CUPS?

- [ ] a) `lp -s`
- [ ] b) `cups --status`
- [ ] c) `lpstat -a`
- [ ] d) `printq`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `lpstat -a`**

El comando `lpstat` muestra información sobre el estado de las impresoras y los trabajos de impresión en CUPS. `lpstat -a` muestra el estado de aceptación de todas las impresoras, `lpstat -t` muestra toda la información de estado, y `lpstat -o` muestra los trabajos en cola.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="109.1" data-correct="b">

### Pregunta 38 (Subtema 109.1)

¿Cuál de las siguientes es una dirección IPv4 válida de clase B privada según RFC 1918?

- [ ] a) `192.168.1.1`
- [ ] b) `172.20.0.1`
- [ ] c) `10.0.0.1`
- [ ] d) `169.254.1.1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `172.20.0.1`**

El rango privado de clase B definido por RFC 1918 es `172.16.0.0/12` (de `172.16.0.0` a `172.31.255.255`). `172.20.0.1` cae dentro de este rango. `192.168.1.1` pertenece al rango de clase C privado, `10.0.0.1` al de clase A privado, y `169.254.1.1` es una dirección de enlace local (APIPA), no RFC 1918.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="109.1" data-correct="c">

### Pregunta 39 (Subtema 109.1)

Una red tiene la máscara de subred `255.255.255.192` (/26). ¿Cuántas direcciones de host utilizables tiene cada subred?

- [ ] a) 126
- [ ] b) 30
- [ ] c) 62
- [ ] d) 64

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) 62**

Con una máscara /26, quedan 6 bits para hosts (32 - 26 = 6). Esto da 2^6 = 64 direcciones totales, pero se restan 2 (la dirección de red y la de broadcast), resultando en 62 direcciones de host utilizables por subred.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="109.1" data-correct="d">

### Pregunta 40 (Subtema 109.1)

¿Qué prefijo de dirección IPv6 identifica una dirección de enlace local (link-local)?

- [ ] a) `::1/128`
- [ ] b) `2001:db8::/32`
- [ ] c) `fc00::/7`
- [ ] d) `fe80::/10`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `fe80::/10`**

Las direcciones IPv6 de enlace local usan el prefijo `fe80::/10`. Se asignan automáticamente a cada interfaz y solo son válidas en el enlace local (no se enrutan). `::1` es loopback, `2001:db8::/32` es para documentación, y `fc00::/7` es para direcciones locales únicas (ULA), similares a las redes privadas de IPv4.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="109.2" data-correct="a">

### Pregunta 41 (Subtema 109.2)

¿Qué comando añade una dirección IP `192.168.1.50/24` a la interfaz `eth0` usando las herramientas modernas de iproute2?

- [ ] a) `ip addr add 192.168.1.50/24 dev eth0`
- [ ] b) `ifconfig eth0 192.168.1.50/24`
- [ ] c) `ip link set 192.168.1.50/24 eth0`
- [ ] d) `nmcli addr add 192.168.1.50/24 eth0`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `ip addr add 192.168.1.50/24 dev eth0`**

El comando `ip addr add` añade una dirección IP a una interfaz de red. La sintaxis requiere especificar la dirección con su prefijo CIDR y la interfaz con `dev`. `ifconfig` es la herramienta obsoleta del paquete net-tools. `ip link` gestiona el estado de la interfaz, no las direcciones.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="109.2" data-correct="b">

### Pregunta 42 (Subtema 109.2)

¿Qué archivo se utiliza en distribuciones basadas en Debian para configurar las interfaces de red de forma estática sin NetworkManager?

- [ ] a) `/etc/sysconfig/network-scripts/ifcfg-eth0`
- [ ] b) `/etc/network/interfaces`
- [ ] c) `/etc/NetworkManager/system-connections/`
- [ ] d) `/etc/netplan/config.yaml`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/network/interfaces`**

El archivo `/etc/network/interfaces` es el método tradicional de configuración de red en Debian y sus derivados (usando el paquete `ifupdown`). `/etc/sysconfig/network-scripts/` es propio de Red Hat/CentOS. Distribuciones modernas como Ubuntu han migrado a Netplan (`/etc/netplan/`), pero `/etc/network/interfaces` sigue siendo una respuesta válida para el examen LPIC-1.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="109.2" data-correct="c">

### Pregunta 43 (Subtema 109.2)

¿Qué comando establece una ruta por defecto (default gateway) a través de `192.168.1.1` usando iproute2?

- [ ] a) `route add default gw 192.168.1.1`
- [ ] b) `ip gateway set 192.168.1.1`
- [ ] c) `ip route add default via 192.168.1.1`
- [ ] d) `netstat -r add default 192.168.1.1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `ip route add default via 192.168.1.1`**

El comando `ip route add default via 192.168.1.1` añade una ruta por defecto usando el gateway especificado. `route add default gw` es la sintaxis antigua del paquete net-tools. La palabra clave `via` indica el siguiente salto (next-hop) en la ruta.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="109.3" data-correct="d">

### Pregunta 44 (Subtema 109.3)

¿Qué comando permite consultar registros MX (Mail Exchanger) de un dominio?

- [ ] a) `ping -mx dominio.com`
- [ ] b) `traceroute dominio.com`
- [ ] c) `whois dominio.com`
- [ ] d) `dig dominio.com MX`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `dig dominio.com MX`**

El comando `dig` con el tipo de registro `MX` consulta los registros Mail Exchanger del dominio, que indican los servidores de correo responsables de recibir correo para ese dominio. También se puede usar `host -t MX dominio.com` o `nslookup -type=MX dominio.com`.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="109.3" data-correct="a">

### Pregunta 45 (Subtema 109.3)

¿Qué opción de `ss` muestra únicamente los sockets TCP en estado de escucha junto con el proceso asociado?

- [ ] a) `ss -tlnp`
- [ ] b) `ss -ua`
- [ ] c) `ss -rt`
- [ ] d) `ss -e`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `ss -tlnp`**

Las opciones de `ss -tlnp` son: `-t` (solo TCP), `-l` (solo en estado LISTEN/escucha), `-n` (mostrar números en lugar de nombres de servicio), `-p` (mostrar el proceso asociado). `-u` filtraría por UDP y `-a` mostraría todos los sockets, no solo los que escuchan.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="109.3" data-correct="b">

### Pregunta 46 (Subtema 109.3)

¿Qué archivo define la correspondencia entre números de puerto y nombres de servicios de red en Linux?

- [ ] a) `/etc/protocols`
- [ ] b) `/etc/services`
- [ ] c) `/etc/ports`
- [ ] d) `/etc/network/services`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/services`**

El archivo `/etc/services` mapea nombres de servicios de red a sus números de puerto y protocolo de transporte. Por ejemplo, `ssh 22/tcp`, `http 80/tcp`, `dns 53/udp`. `/etc/protocols` mapea nombres de protocolo a números de protocolo IP (como tcp=6, udp=17).

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="109.3" data-correct="c">

### Pregunta 47 (Subtema 109.3)

¿Cuál es la función del comando `netcat` (o `nc`)?

- [ ] a) Monitorizar el tráfico de red en tiempo real
- [ ] b) Escanear puertos de servidores remotos
- [ ] c) Leer y escribir datos a través de conexiones de red TCP o UDP
- [ ] d) Configurar las interfaces de red del sistema

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) Leer y escribir datos a través de conexiones de red TCP o UDP**

`netcat` (nc) es una utilidad versátil que puede crear conexiones TCP/UDP, escuchar en puertos, transferir archivos y depurar conexiones de red. Se le conoce como la "navaja suiza de la red". Aunque puede usarse para escanear puertos básicamente, su función principal es la comunicación bidireccional sobre sockets de red.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="109.4" data-correct="d">

### Pregunta 48 (Subtema 109.4)

¿Qué comando de `nmcli` muestra todas las conexiones de red configuradas en el sistema?

- [ ] a) `nmcli device status`
- [ ] b) `nmcli network show`
- [ ] c) `nmcli general status`
- [ ] d) `nmcli connection show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `nmcli connection show`**

El comando `nmcli connection show` lista todas las conexiones de red configuradas (activas e inactivas) en NetworkManager. `nmcli device status` muestra el estado de los dispositivos de red (interfaces), `nmcli general status` muestra el estado general de NetworkManager.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="109.4" data-correct="a">

### Pregunta 49 (Subtema 109.4)

¿Qué directiva en `/etc/resolv.conf` define el dominio de búsqueda por defecto para nombres de host sin cualificar?

- [ ] a) `search`
- [ ] b) `domain`
- [ ] c) `nameserver`
- [ ] d) `options`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `search`**

La directiva `search` en `/etc/resolv.conf` define una lista de dominios que se añaden automáticamente a nombres de host sin cualificar. Por ejemplo, con `search empresa.com`, una consulta a `servidor` se resolverá como `servidor.empresa.com`. `domain` es similar pero solo permite un dominio. Si ambas están presentes, la última prevalece.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="109.4" data-correct="b">

### Pregunta 50 (Subtema 109.4)

¿Qué archivo de configuración se usa en distribuciones basadas en Red Hat para definir el nombre de host del sistema?

- [ ] a) `/etc/hosts`
- [ ] b) `/etc/hostname`
- [ ] c) `/etc/sysconfig/hostname`
- [ ] d) `/etc/HOSTNAME`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/hostname`**

El archivo `/etc/hostname` contiene el nombre de host estático del sistema en la mayoría de distribuciones modernas (tanto Debian como Red Hat) que usan systemd. `hostnamectl set-hostname` es el comando recomendado para cambiarlo. En sistemas más antiguos, el nombre podía estar en `/etc/sysconfig/network` (Red Hat) o `/etc/HOSTNAME` (SUSE).

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="110.1" data-correct="c">

### Pregunta 51 (Subtema 110.1)

¿Qué comando establece permisos `rwxr-x---` en un archivo usando notación octal?

- [ ] a) `chmod 745 archivo`
- [ ] b) `chmod 755 archivo`
- [ ] c) `chmod 750 archivo`
- [ ] d) `chmod 740 archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `chmod 750 archivo`**

Los permisos `rwxr-x---` se traducen en octal como: propietario rwx = 4+2+1 = 7, grupo r-x = 4+0+1 = 5, otros --- = 0. Resultado: 750. Es importante saber convertir entre notación simbólica y octal para el examen.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="110.1" data-correct="d">

### Pregunta 52 (Subtema 110.1)

¿Qué efecto tiene el bit SGID cuando se aplica a un directorio?

- [ ] a) Solo el propietario del directorio puede eliminar archivos dentro de él
- [ ] b) Los archivos dentro del directorio heredan el propietario del directorio
- [ ] c) El directorio se vuelve inaccesible para usuarios no pertenecientes al grupo
- [ ] d) Los archivos creados dentro del directorio heredan el grupo del directorio

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) Los archivos creados dentro del directorio heredan el grupo del directorio**

Cuando el bit SGID se establece en un directorio, todos los archivos y subdirectorios creados dentro de él heredan el grupo del directorio padre, en lugar del grupo primario del usuario que los crea. Esto es útil para directorios compartidos por equipos de trabajo. El sticky bit (no SGID) es el que restringe la eliminación de archivos.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="110.1" data-correct="a">

### Pregunta 53 (Subtema 110.1)

¿Qué comando cambia el propietario y el grupo de un archivo simultáneamente?

- [ ] a) `chown usuario:grupo archivo`
- [ ] b) `chmod usuario:grupo archivo`
- [ ] c) `chgrp usuario:grupo archivo`
- [ ] d) `setfacl usuario:grupo archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `chown usuario:grupo archivo`**

El comando `chown` con la sintaxis `usuario:grupo` (o `usuario.grupo`) cambia el propietario y el grupo del archivo en una sola operación. `chown usuario archivo` cambia solo el propietario. `chgrp` cambia solo el grupo. `chmod` gestiona permisos, no propietarios.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="110.1" data-correct="b">

### Pregunta 54 (Subtema 110.1)

¿Qué valor octal corresponde al permiso especial que combina SUID + SGID + Sticky bit en un directorio?

- [ ] a) `1000`
- [ ] b) `7000`
- [ ] c) `6000`
- [ ] d) `5000`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `7000`**

Los permisos especiales usan el primer dígito octal: SUID = 4000, SGID = 2000, Sticky bit = 1000. La combinación de los tres es 4000 + 2000 + 1000 = 7000. Por ejemplo, `chmod 7755 archivo` aplicaría los tres bits especiales más rwxr-xr-x.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="110.2" data-correct="c">

### Pregunta 55 (Subtema 110.2)

¿Qué comando de iptables bloquea todo el tráfico entrante desde la IP `10.0.0.5`?

- [ ] a) `iptables -A OUTPUT -s 10.0.0.5 -j DROP`
- [ ] b) `iptables -A INPUT -d 10.0.0.5 -j REJECT`
- [ ] c) `iptables -A INPUT -s 10.0.0.5 -j DROP`
- [ ] d) `iptables -A FORWARD -s 10.0.0.5 -j DROP`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `iptables -A INPUT -s 10.0.0.5 -j DROP`**

Para bloquear tráfico entrante se usa la cadena `INPUT`. La opción `-s` especifica la dirección IP de origen (source). `-j DROP` descarta el paquete silenciosamente. La opción `-A` añade la regla al final de la cadena. `-d` sería la dirección de destino, no de origen.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="110.2" data-correct="d">

### Pregunta 56 (Subtema 110.2)

¿Qué target de iptables rechaza el paquete y envía un mensaje ICMP de error al emisor?

- [ ] a) `DROP`
- [ ] b) `LOG`
- [ ] c) `ACCEPT`
- [ ] d) `REJECT`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `REJECT`**

El target `REJECT` rechaza el paquete y envía un mensaje ICMP "port unreachable" (u otro configurable) al emisor, informándole del rechazo. `DROP` descarta el paquete silenciosamente sin notificar al emisor. `LOG` registra el paquete en los logs pero no lo bloquea. `ACCEPT` permite el paso del paquete.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="110.2" data-correct="a">

### Pregunta 57 (Subtema 110.2)

¿Qué comando guarda las reglas actuales de iptables para que sobrevivan a un reinicio en distribuciones basadas en Red Hat?

- [ ] a) `iptables-save > /etc/sysconfig/iptables`
- [ ] b) `iptables --persist`
- [ ] c) `service iptables commit`
- [ ] d) `iptables -S > /etc/iptables.rules`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `iptables-save > /etc/sysconfig/iptables`**

El comando `iptables-save` exporta las reglas actuales en un formato que puede ser restaurado con `iptables-restore`. En Red Hat/CentOS, el archivo estándar es `/etc/sysconfig/iptables`, que se carga automáticamente al arrancar el servicio. En Debian, se suele usar `/etc/iptables/rules.v4` con el paquete `iptables-persistent`.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="110.3" data-correct="c">

### Pregunta 58 (Subtema 110.3)

¿Qué archivo en el servidor SSH contiene las claves públicas de los usuarios autorizados para acceder sin contraseña?

- [ ] a) `~/.ssh/id_rsa.pub`
- [ ] b) `~/.ssh/known_hosts`
- [ ] c) `~/.ssh/authorized_keys`
- [ ] d) `/etc/ssh/ssh_host_rsa_key.pub`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `~/.ssh/authorized_keys`**

El archivo `~/.ssh/authorized_keys` en el servidor contiene las claves públicas de los usuarios autorizados para autenticación basada en clave. `~/.ssh/id_rsa.pub` es la clave pública del cliente (antes de copiarla al servidor). `~/.ssh/known_hosts` almacena las claves de los servidores conocidos. `/etc/ssh/ssh_host_rsa_key.pub` es la clave pública del propio servidor.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="110.3" data-correct="b">

### Pregunta 59 (Subtema 110.3)

¿Qué comando verifica las firmas GPG de un archivo descargado?

- [ ] a) `gpg --encrypt archivo.sig`
- [ ] b) `gpg --verify archivo.sig`
- [ ] c) `gpg --sign archivo.sig`
- [ ] d) `gpg --import archivo.sig`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `gpg --verify archivo.sig`**

El comando `gpg --verify` verifica la firma digital de un archivo, comprobando su autenticidad e integridad. Se necesita tener la clave pública del firmante en el anillo de claves. `--encrypt` cifra, `--sign` firma, y `--import` importa claves al anillo.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="110.3" data-correct="d">

### Pregunta 60 (Subtema 110.3)

Un administrador quiere deshabilitar completamente la autenticación por contraseña en SSH, permitiendo solo la autenticación por clave pública. ¿Qué directiva debe configurar en `/etc/ssh/sshd_config`?

- [ ] a) `AuthenticationMethods publickey`
- [ ] b) `PubkeyAuthentication yes`
- [ ] c) `AllowPassword no`
- [ ] d) `PasswordAuthentication no`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `PasswordAuthentication no`**

La directiva `PasswordAuthentication no` en `/etc/ssh/sshd_config` desactiva la autenticación por contraseña, obligando a usar claves públicas u otros métodos. `PubkeyAuthentication yes` habilita la autenticación por clave pública pero no desactiva las contraseñas. Es recomendable también establecer `ChallengeResponseAuthentication no` para evitar otros métodos basados en contraseña.

</details>

</div>

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
