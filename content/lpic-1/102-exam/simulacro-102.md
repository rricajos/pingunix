---
title: "Simulacro Examen 102"
tags:
  - lpic-1
  - examen-102
  - simulacro
tipo: simulacro
certificacion: lpic-1
examen: "102"
---

# Simulacro - Examen 102

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="102" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="105.1" data-correct="B">

### Pregunta 1 (Subtema 105.1)

¿Cuál de las siguientes variables de entorno define la lista de directorios donde el shell busca los ejecutables?

- [ ] a) `$SHELL`
- [ ] b) `$PATH`
- [ ] c) `$HOME`
- [ ] d) `$ENV`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `$PATH`**

La variable `$PATH` contiene una lista de directorios separados por dos puntos (`:`) donde el shell busca los comandos ejecutables. Cuando se escribe un comando, el shell recorre estos directorios en orden hasta encontrar el binario correspondiente.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="105.1" data-correct="C">

### Pregunta 2 (Subtema 105.1)

¿Qué archivo se ejecuta para todos los usuarios cuando inician una sesión de login con Bash?

- [ ] a) `~/.bashrc`
- [ ] b) `~/.bash_profile`
- [ ] c) `/etc/profile`
- [ ] d) `/etc/bashrc`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `/etc/profile`**

El archivo `/etc/profile` es un script de configuración global que se ejecuta para todos los usuarios cuando inician una sesión de login con Bash. Los archivos `~/.bash_profile` y `~/.bashrc` son específicos de cada usuario.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="105.1" data-correct="A">

### Pregunta 3 (Subtema 105.1)

Un usuario quiere que una función personalizada esté disponible en todas las subshells que abra. ¿Qué comando debe usar después de definirla?

- [ ] a) `export -f nombre_funcion`
- [ ] b) `source nombre_funcion`
- [ ] c) `set nombre_funcion`
- [ ] d) `declare nombre_funcion`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `export -f nombre_funcion`**

El comando `export -f` exporta una función definida en el shell actual para que esté disponible en las subshells hijas. Sin la opción `-f`, `export` solo funciona con variables.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="105.2" data-correct="D">

### Pregunta 4 (Subtema 105.2)

En un script Bash, ¿qué línea debe aparecer en la primera posición para indicar que debe ejecutarse con el intérprete Bash?

- [ ] a) `## /bin/bash`
- [ ] b) `# bash`
- [ ] c) `#/bin/bash`
- [ ] d) `#!/bin/bash`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `#!/bin/bash`**

La secuencia `#!` (conocida como shebang) seguida de la ruta al intérprete indica al sistema operativo qué programa debe usar para ejecutar el script. Debe estar en la primera línea del archivo.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="105.2" data-correct="B">

### Pregunta 5 (Subtema 105.2)

¿Cuál es el valor de `$?` si el último comando ejecutado finalizó correctamente?

- [ ] a) `1`
- [ ] b) `0`
- [ ] c) `-1`
- [ ] d) `true`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `0`**

En Bash, la variable especial `$?` contiene el código de salida del último comando ejecutado. Un valor de `0` indica éxito, mientras que cualquier valor distinto de cero indica un error.

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="105.2" data-correct="C">

### Pregunta 6 (Subtema 105.2)

En un script Bash, ¿qué estructura condicional es correcta para comprobar si un archivo existe?

- [ ] a) `if [ -d /tmp/archivo ]; then`
- [ ] b) `if [ -w /tmp/archivo ]; then`
- [ ] c) `if [ -f /tmp/archivo ]; then`
- [ ] d) `if [ -x /tmp/archivo ]; then`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `if [ -f /tmp/archivo ]; then`**

El operador `-f` comprueba si la ruta corresponde a un archivo regular existente. `-d` comprueba directorios, `-w` comprueba permisos de escritura y `-x` comprueba permisos de ejecución.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="106.1" data-correct="A">

### Pregunta 7 (Subtema 106.1)

¿Qué variable de entorno se utiliza para indicar a las aplicaciones gráficas a qué servidor X deben conectarse?

- [ ] a) `$DISPLAY`
- [ ] b) `$XSERVER`
- [ ] c) `$X11_DISPLAY`
- [ ] d) `$SCREEN`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `$DISPLAY`**

La variable `$DISPLAY` indica a las aplicaciones del sistema X Window a qué servidor X deben conectarse. Su formato típico es `host:display.screen`, por ejemplo `:0` para el display local.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="106.1" data-correct="D">

### Pregunta 8 (Subtema 106.1)

¿Cuál de los siguientes es un gestor de ventanas ligero para X11?

- [ ] a) GNOME
- [ ] b) KDE Plasma
- [ ] c) Cinnamon
- [ ] d) Openbox

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) Openbox**

Openbox es un gestor de ventanas ligero y altamente configurable. GNOME, KDE Plasma y Cinnamon son entornos de escritorio completos que incluyen un gestor de ventanas junto con muchos otros componentes.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="106.2" data-correct="B">

### Pregunta 9 (Subtema 106.2)

¿Qué protocolo de escritorio remoto se utiliza para acceder a sesiones gráficas de Linux de forma nativa en el entorno X11?

- [ ] a) RDP
- [ ] b) XDMCP
- [ ] c) SSH
- [ ] d) Telnet

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) XDMCP**

XDMCP (X Display Manager Control Protocol) es un protocolo nativo del sistema X Window que permite gestionar sesiones gráficas remotas. RDP es el protocolo de escritorio remoto de Microsoft.

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="106.3" data-correct="C">

### Pregunta 10 (Subtema 106.3)

¿Qué herramienta de línea de comandos se puede usar para configurar las opciones de accesibilidad en un escritorio GNOME?

- [ ] a) `xrandr`
- [ ] b) `xdpyinfo`
- [ ] c) `gsettings`
- [ ] d) `xset`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `gsettings`**

`gsettings` es la herramienta de línea de comandos para leer y modificar la configuración de los esquemas de GSettings, incluyendo las opciones de accesibilidad de GNOME como el teclado en pantalla, temas de alto contraste y lector de pantalla.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="107.1" data-correct="B">

### Pregunta 11 (Subtema 107.1)

¿Qué comando se utiliza para añadir un nuevo usuario al sistema?

- [ ] a) `newuser`
- [ ] b) `useradd`
- [ ] c) `adduser` (solo Debian)
- [ ] d) `mkuser`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `useradd`**

`useradd` es el comando estándar de bajo nivel presente en todas las distribuciones Linux para crear cuentas de usuario. `adduser` en Debian/Ubuntu es un script interactivo de alto nivel, pero no es estándar en todas las distribuciones.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="107.1" data-correct="A">

### Pregunta 12 (Subtema 107.1)

¿En qué archivo se almacenan las contraseñas cifradas de los usuarios?

- [ ] a) `/etc/shadow`
- [ ] b) `/etc/passwd`
- [ ] c) `/etc/security`
- [ ] d) `/etc/login.defs`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `/etc/shadow`**

El archivo `/etc/shadow` almacena las contraseñas cifradas (hash) de los usuarios del sistema. Solo es legible por root, a diferencia de `/etc/passwd` que es legible por todos y ya no contiene las contraseñas.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="107.1" data-correct="D">

### Pregunta 13 (Subtema 107.1)

¿Qué opción de `useradd` permite especificar el directorio home del nuevo usuario?

- [ ] a) `-s`
- [ ] b) `-g`
- [ ] c) `-u`
- [ ] d) `-d`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `-d`**

La opción `-d` de `useradd` especifica el directorio home del usuario. `-s` define el shell, `-g` el grupo primario y `-u` el UID.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="107.1" data-correct="C">

### Pregunta 14 (Subtema 107.1)

¿Qué comando se utiliza para modificar las propiedades de una cuenta de usuario existente?

- [ ] a) `useradd -m`
- [ ] b) `passwd`
- [ ] c) `usermod`
- [ ] d) `chuser`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `usermod`**

El comando `usermod` permite modificar las propiedades de una cuenta de usuario existente, como el grupo, el shell, el directorio home, la fecha de expiración, etc.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="107.1" data-correct="B">

### Pregunta 15 (Subtema 107.1)

¿Qué campo del archivo `/etc/passwd` contiene el UID del usuario?

- [ ] a) El segundo campo
- [ ] b) El tercer campo
- [ ] c) El cuarto campo
- [ ] d) El quinto campo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) El tercer campo**

El formato de `/etc/passwd` es: `usuario:x:UID:GID:GECOS:home:shell`. El tercer campo corresponde al UID (User ID) del usuario.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="107.1" data-correct="A">

### Pregunta 16 (Subtema 107.1)

¿Qué comando permite cambiar el shell por defecto de un usuario?

- [ ] a) `chsh`
- [ ] b) `chown`
- [ ] c) `chmod`
- [ ] d) `chattr`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `chsh`**

El comando `chsh` (change shell) permite cambiar el shell de inicio de sesión de un usuario. También se puede lograr con `usermod -s /ruta/shell usuario`.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="107.2" data-correct="D">

### Pregunta 17 (Subtema 107.2)

¿Qué comando se usa para programar la ejecución de tareas periódicas en Linux?

- [ ] a) `at`
- [ ] b) `batch`
- [ ] c) `schedule`
- [ ] d) `crontab`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `crontab`**

`crontab` se utiliza para crear, editar y gestionar las tablas de cron que definen tareas programadas periódicas. El comando `at` programa tareas de una sola ejecución, no periódicas.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="107.2" data-correct="B">

### Pregunta 18 (Subtema 107.2)

En una entrada de crontab, ¿qué representa la siguiente expresión?: `0 3 * * 1`

- [ ] a) Todos los días a las 3:00 AM
- [ ] b) Todos los lunes a las 3:00 AM
- [ ] c) El primer día de cada mes a las 3:00 AM
- [ ] d) Cada 3 horas los lunes

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) Todos los lunes a las 3:00 AM**

Los cinco campos de cron son: minuto, hora, día del mes, mes, día de la semana. `0 3 * * 1` significa: minuto 0, hora 3, cualquier día del mes, cualquier mes, día de la semana 1 (lunes).

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="107.2" data-correct="C">

### Pregunta 19 (Subtema 107.2)

¿Qué archivo determina qué usuarios tienen prohibido usar crontab?

- [ ] a) `/etc/cron.allow`
- [ ] b) `/etc/crontab`
- [ ] c) `/etc/cron.deny`
- [ ] d) `/etc/cron.d/users`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `/etc/cron.deny`**

El archivo `/etc/cron.deny` contiene una lista de usuarios que no pueden usar `crontab`. Si existe `/etc/cron.allow`, solo los usuarios listados en él pueden usar crontab, y `/etc/cron.deny` se ignora.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="107.2" data-correct="A">

### Pregunta 20 (Subtema 107.2)

¿Cuál de los siguientes directorios ejecuta scripts automáticamente de forma diaria a través de cron?

- [ ] a) `/etc/cron.daily/`
- [ ] b) `/etc/cron.d/`
- [ ] c) `/var/spool/cron/`
- [ ] d) `/etc/crontab.daily/`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `/etc/cron.daily/`**

Los scripts colocados en `/etc/cron.daily/` son ejecutados automáticamente una vez al día por anacron o cron. Existen directorios análogos: `/etc/cron.hourly/`, `/etc/cron.weekly/` y `/etc/cron.monthly/`.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="107.3" data-correct="B">

### Pregunta 21 (Subtema 107.3)

¿Qué comando se utiliza para cambiar la configuración regional (locale) del sistema?

- [ ] a) `setlocale`
- [ ] b) `localectl`
- [ ] c) `locale-gen`
- [ ] d) `dpkg-reconfigure`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `localectl`**

`localectl` es el comando de systemd utilizado para consultar y cambiar la configuración regional del sistema (locale) y la distribución del teclado. `locale-gen` genera los locales pero no los establece como predeterminados.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="107.3" data-correct="D">

### Pregunta 22 (Subtema 107.3)

¿Qué variable de entorno define la zona horaria del sistema en muchas distribuciones Linux?

- [ ] a) `$LOCALE`
- [ ] b) `$TIMEZONE`
- [ ] c) `$LC_TIME`
- [ ] d) `$TZ`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `$TZ`**

La variable `$TZ` permite establecer la zona horaria para un usuario o proceso. A nivel de sistema, la zona horaria se configura típicamente mediante `/etc/localtime` o con `timedatectl`.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="108.1" data-correct="C">

### Pregunta 23 (Subtema 108.1)

¿Qué comando se utiliza para consultar y gestionar el reloj del sistema con systemd?

- [ ] a) `hwclock`
- [ ] b) `date`
- [ ] c) `timedatectl`
- [ ] d) `ntpdate`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `timedatectl`**

`timedatectl` es la herramienta de systemd para consultar y modificar la hora del sistema, la zona horaria y la sincronización NTP. `hwclock` gestiona el reloj hardware y `date` muestra o establece la fecha y hora del sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="108.1" data-correct="A">

### Pregunta 24 (Subtema 108.1)

¿Qué demonio se usa comúnmente en sistemas modernos para la sincronización horaria por NTP?

- [ ] a) `chronyd`
- [ ] b) `ntpdate`
- [ ] c) `timesync`
- [ ] d) `clockd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `chronyd`**

`chronyd` es el demonio del servicio Chrony, utilizado ampliamente en distribuciones modernas para la sincronización de tiempo mediante NTP. Es más eficiente que el demonio ntpd clásico, especialmente en sistemas que no están siempre conectados.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="108.1" data-correct="B">

### Pregunta 25 (Subtema 108.1)

¿Qué comando sincroniza el reloj hardware (RTC) con la hora del sistema?

- [ ] a) `date --set`
- [ ] b) `hwclock --systohc`
- [ ] c) `timedatectl sync`
- [ ] d) `ntpd --adjust`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `hwclock --systohc`**

El comando `hwclock --systohc` (system to hardware clock) copia la hora actual del sistema al reloj hardware (RTC). La operación inversa, `hwclock --hctosys`, copia la hora del RTC al reloj del sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="108.2" data-correct="D">

### Pregunta 26 (Subtema 108.2)

¿Cuál es el archivo de configuración principal del demonio rsyslog?

- [ ] a) `/etc/syslog.conf`
- [ ] b) `/etc/systemd/journald.conf`
- [ ] c) `/var/log/syslog.conf`
- [ ] d) `/etc/rsyslog.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `/etc/rsyslog.conf`**

El archivo `/etc/rsyslog.conf` es el fichero de configuración principal del demonio rsyslog. En él se definen las reglas de filtrado, las acciones y los destinos de los mensajes de log.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="108.2" data-correct="A">

### Pregunta 27 (Subtema 108.2)

¿Qué comando se utiliza para consultar los logs del journal de systemd?

- [ ] a) `journalctl`
- [ ] b) `systemctl log`
- [ ] c) `dmesg --journal`
- [ ] d) `logctl`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `journalctl`**

`journalctl` es el comando para consultar el journal de systemd. Permite filtrar mensajes por servicio, prioridad, rango de fechas, etc. Por ejemplo, `journalctl -u sshd` muestra los logs del servicio SSH.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="108.2" data-correct="C">

### Pregunta 28 (Subtema 108.2)

¿Qué facilidad (facility) de syslog corresponde a los mensajes del kernel?

- [ ] a) `user`
- [ ] b) `daemon`
- [ ] c) `kern`
- [ ] d) `system`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `kern`**

La facilidad `kern` en syslog corresponde a los mensajes generados por el kernel de Linux. Otras facilidades comunes son `auth`, `mail`, `daemon`, `user`, `local0`-`local7`, etc.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="108.2" data-correct="B">

### Pregunta 29 (Subtema 108.2)

¿Qué comando permite enviar un mensaje manualmente al sistema de logging?

- [ ] a) `syslog`
- [ ] b) `logger`
- [ ] c) `logmsg`
- [ ] d) `sendlog`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `logger`**

El comando `logger` permite enviar mensajes al sistema de logging (syslog/rsyslog) desde la línea de comandos o desde scripts. Se puede especificar la facilidad y la prioridad con la opción `-p`.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="108.3" data-correct="A">

### Pregunta 30 (Subtema 108.3)

¿Qué comando se utiliza para gestionar el servidor de correo Postfix desde la línea de comandos?

- [ ] a) `postfix`
- [ ] b) `sendmail`
- [ ] c) `mailq`
- [ ] d) `exim`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `postfix`**

El comando `postfix` se utiliza para controlar el servicio MTA Postfix (start, stop, reload, flush, etc.). `sendmail` es la interfaz de compatibilidad para enviar correos y `mailq` muestra la cola de correo.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="108.3" data-correct="D">

### Pregunta 31 (Subtema 108.3)

¿Qué archivo se usa para redirigir el correo de un usuario local a otro destino?

- [ ] a) `/etc/postfix/main.cf`
- [ ] b) `/etc/mail/sendmail.cf`
- [ ] c) `/etc/mailforward`
- [ ] d) `~/.forward`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `~/.forward`**

El archivo `~/.forward` en el directorio home de un usuario permite redirigir su correo a otra dirección o a un programa. También se puede usar `/etc/aliases` para redirecciones a nivel de sistema.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="108.4" data-correct="B">

### Pregunta 32 (Subtema 108.4)

¿Qué archivo de configuración define las impresoras disponibles en CUPS?

- [ ] a) `/etc/cups/cupsd.conf`
- [ ] b) `/etc/cups/printers.conf`
- [ ] c) `/etc/printcap`
- [ ] d) `/etc/cups/classes.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/cups/printers.conf`**

El archivo `/etc/cups/printers.conf` contiene las definiciones de las impresoras configuradas en CUPS. `/etc/cups/cupsd.conf` es el archivo de configuración del demonio CUPS (servidor).

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="109.1" data-correct="C">

### Pregunta 33 (Subtema 109.1)

¿Cuál es la máscara de subred en notación decimal para un prefijo de red /24?

- [ ] a) `255.255.0.0`
- [ ] b) `255.0.0.0`
- [ ] c) `255.255.255.0`
- [ ] d) `255.255.255.128`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `255.255.255.0`**

Un prefijo /24 significa que los primeros 24 bits de la dirección IP pertenecen a la parte de red. Esto equivale a la máscara de subred `255.255.255.0`, que permite 254 direcciones de host utilizables.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="109.1" data-correct="A">

### Pregunta 34 (Subtema 109.1)

¿Qué rango de direcciones IPv4 se considera privado según RFC 1918?

- [ ] a) `192.168.0.0/16`
- [ ] b) `192.0.0.0/8`
- [ ] c) `100.64.0.0/10`
- [ ] d) `169.254.0.0/16`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `192.168.0.0/16`**

Los rangos privados definidos por RFC 1918 son: `10.0.0.0/8`, `172.16.0.0/12` y `192.168.0.0/16`. El rango `169.254.0.0/16` es para direcciones de enlace local (APIPA) y `100.64.0.0/10` es para CGNAT.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="109.1" data-correct="D">

### Pregunta 35 (Subtema 109.1)

¿Cuántos bits tiene una dirección IPv6?

- [ ] a) 32
- [ ] b) 64
- [ ] c) 96
- [ ] d) 128

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) 128**

Una dirección IPv6 tiene 128 bits de longitud, frente a los 32 bits de IPv4. Se representa como ocho grupos de cuatro dígitos hexadecimales separados por dos puntos.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="109.1" data-correct="B">

### Pregunta 36 (Subtema 109.1)

¿Cuál es la dirección de loopback en IPv6?

- [ ] a) `fe80::1`
- [ ] b) `::1`
- [ ] c) `::0`
- [ ] d) `ff02::1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `::1`**

La dirección de loopback en IPv6 es `::1` (equivalente a `0000:0000:0000:0000:0000:0000:0000:0001`). Es la equivalente a `127.0.0.1` en IPv4.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="109.1" data-correct="C">

### Pregunta 37 (Subtema 109.1)

¿Qué protocolo de la capa de transporte se usa para transmisión fiable con control de flujo?

- [ ] a) UDP
- [ ] b) ICMP
- [ ] c) TCP
- [ ] d) ARP

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) TCP**

TCP (Transmission Control Protocol) proporciona una transmisión fiable y orientada a conexión con control de flujo y retransmisión de paquetes perdidos. UDP es sin conexión y no garantiza la entrega.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="109.2" data-correct="A">

### Pregunta 38 (Subtema 109.2)

¿Qué comando moderno de iproute2 reemplaza a `ifconfig` para gestionar interfaces de red?

- [ ] a) `ip`
- [ ] b) `nmcli`
- [ ] c) `netconf`
- [ ] d) `ifcfg`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `ip`**

El comando `ip` del paquete iproute2 es el reemplazo moderno de `ifconfig`, `route` y `arp`. Por ejemplo, `ip addr show` muestra las direcciones IP, `ip route` muestra la tabla de rutas.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="109.2" data-correct="B">

### Pregunta 39 (Subtema 109.2)

¿Qué comando muestra la tabla de enrutamiento del sistema usando herramientas modernas?

- [ ] a) `netstat -r`
- [ ] b) `ip route show`
- [ ] c) `route print`
- [ ] d) `traceroute`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `ip route show`**

`ip route show` (o `ip r`) muestra la tabla de enrutamiento del sistema. `netstat -r` y `route` son las herramientas antiguas equivalentes del paquete net-tools, que está obsoleto.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="109.2" data-correct="D">

### Pregunta 40 (Subtema 109.2)

¿Qué archivo de configuración define los servidores DNS que el sistema consultará?

- [ ] a) `/etc/hosts`
- [ ] b) `/etc/hostname`
- [ ] c) `/etc/networks`
- [ ] d) `/etc/resolv.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `/etc/resolv.conf`**

El archivo `/etc/resolv.conf` contiene las directivas `nameserver` que especifican los servidores DNS a consultar, así como opciones como `search` y `domain` para la resolución de nombres.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="109.2" data-correct="C">

### Pregunta 41 (Subtema 109.2)

¿Qué archivo determina el orden en que se consultan las fuentes de resolución de nombres (DNS, /etc/hosts, etc.)?

- [ ] a) `/etc/resolv.conf`
- [ ] b) `/etc/host.conf`
- [ ] c) `/etc/nsswitch.conf`
- [ ] d) `/etc/networks`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `/etc/nsswitch.conf`**

El archivo `/etc/nsswitch.conf` (Name Service Switch) define el orden de búsqueda para distintos servicios de nombres, incluyendo hosts, usuarios, grupos, etc. La línea `hosts: files dns` indica que primero se consulta `/etc/hosts` y luego DNS.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="109.3" data-correct="B">

### Pregunta 42 (Subtema 109.3)

¿Qué comando se utiliza para resolver un nombre de dominio a su dirección IP?

- [ ] a) `ping`
- [ ] b) `dig`
- [ ] c) `traceroute`
- [ ] d) `netstat`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `dig`**

`dig` (Domain Information Groper) es una herramienta para consultar servidores DNS. Muestra registros A, AAAA, MX, NS y otros. También se pueden usar `host` y `nslookup` para resolución DNS.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="109.3" data-correct="A">

### Pregunta 43 (Subtema 109.3)

¿Qué comando muestra las conexiones de red activas y los puertos en escucha utilizando la herramienta moderna?

- [ ] a) `ss`
- [ ] b) `netstat`
- [ ] c) `lsof`
- [ ] d) `nmap`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `ss`**

`ss` (socket statistics) es la herramienta moderna del paquete iproute2 que reemplaza a `netstat`. `ss -tulnp` muestra los puertos TCP y UDP en escucha junto con el proceso asociado.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="109.3" data-correct="D">

### Pregunta 44 (Subtema 109.3)

¿Qué opción del comando `traceroute` lo hace funcionar usando paquetes ICMP en lugar de UDP?

- [ ] a) `-u`
- [ ] b) `-t`
- [ ] c) `-n`
- [ ] d) `-I`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `-I`**

La opción `-I` de `traceroute` hace que utilice paquetes ICMP Echo Request en lugar de los paquetes UDP que usa por defecto. Esto es similar al comportamiento de `tracert` en Windows.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="109.3" data-correct="C">

### Pregunta 45 (Subtema 109.3)

¿Qué puerto TCP utiliza por defecto el servicio HTTPS?

- [ ] a) 80
- [ ] b) 8080
- [ ] c) 443
- [ ] d) 8443

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) 443**

El puerto 443 es el puerto estándar para HTTPS (HTTP sobre TLS/SSL). El puerto 80 corresponde a HTTP sin cifrar, y los puertos 8080 y 8443 son puertos alternativos no estándar.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="109.4" data-correct="B">

### Pregunta 46 (Subtema 109.4)

¿Qué archivo se utiliza para configurar un cliente DHCP en sistemas con NetworkManager?

- [ ] a) `/etc/dhcp/dhcpd.conf`
- [ ] b) `/etc/NetworkManager/NetworkManager.conf`
- [ ] c) `/etc/network/interfaces`
- [ ] d) `/etc/dhclient.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `/etc/NetworkManager/NetworkManager.conf`**

`/etc/NetworkManager/NetworkManager.conf` es el archivo de configuración principal de NetworkManager, que gestiona las conexiones de red incluyendo la configuración DHCP. `/etc/dhcp/dhcpd.conf` es para el servidor DHCP, no el cliente.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="109.4" data-correct="A">

### Pregunta 47 (Subtema 109.4)

¿Qué herramienta de línea de comandos permite gestionar las conexiones de NetworkManager?

- [ ] a) `nmcli`
- [ ] b) `nm-applet`
- [ ] c) `ifup`
- [ ] d) `netctl`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `nmcli`**

`nmcli` (NetworkManager Command Line Interface) es la herramienta de línea de comandos para gestionar conexiones de red con NetworkManager. `nm-applet` es la interfaz gráfica y no es una herramienta CLI.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="110.1" data-correct="C">

### Pregunta 48 (Subtema 110.1)

¿Qué comando se utiliza para cambiar los permisos de un archivo de forma simbólica?

- [ ] a) `chown u+rwx archivo`
- [ ] b) `setfacl u+rwx archivo`
- [ ] c) `chmod u+rwx archivo`
- [ ] d) `umask u+rwx archivo`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `chmod u+rwx archivo`**

`chmod` (change mode) es el comando para cambiar los permisos de archivos y directorios. La notación simbólica `u+rwx` añade permisos de lectura, escritura y ejecución al propietario (user).

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="110.1" data-correct="B">

### Pregunta 49 (Subtema 110.1)

¿Qué hace el bit SUID cuando se establece en un archivo ejecutable?

- [ ] a) Elimina los permisos del grupo
- [ ] b) El proceso se ejecuta con los permisos del propietario del archivo
- [ ] c) El archivo solo puede ser borrado por root
- [ ] d) El archivo se ejecuta con los permisos del grupo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) El proceso se ejecuta con los permisos del propietario del archivo**

El bit SUID (Set User ID) hace que cuando un usuario ejecute el archivo, el proceso resultante se ejecute con los permisos del propietario del archivo en lugar de los del usuario que lo ejecuta. Un ejemplo clásico es `/usr/bin/passwd`.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="110.1" data-correct="D">

### Pregunta 50 (Subtema 110.1)

¿Qué valor numérico de `umask` resulta en permisos por defecto de `644` para archivos nuevos?

- [ ] a) `0002`
- [ ] b) `0077`
- [ ] c) `0133`
- [ ] d) `0022`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `0022`**

Los archivos se crean con permisos base `666` menos la máscara. Con umask `0022`: `666 - 022 = 644` (rw-r--r--). Los directorios se crean con `777 - 022 = 755`.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="110.1" data-correct="A">

### Pregunta 51 (Subtema 110.1)

¿Qué comando permite localizar archivos con el bit SUID activado en todo el sistema?

- [ ] a) `find / -perm -4000`
- [ ] b) `locate -suid /`
- [ ] c) `ls -la --suid /`
- [ ] d) `chmod --find-suid /`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `find / -perm -4000`**

El comando `find / -perm -4000` busca en todo el sistema archivos que tengan el bit SUID (valor octal 4000) activado. Es una práctica de seguridad habitual auditar estos archivos periódicamente.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="110.1" data-correct="C">

### Pregunta 52 (Subtema 110.1)

¿Qué efecto tiene el sticky bit en un directorio?

- [ ] a) Solo root puede listar su contenido
- [ ] b) Los archivos heredan el grupo del directorio
- [ ] c) Solo el propietario de un archivo puede eliminarlo dentro del directorio
- [ ] d) Todos los archivos creados serán ejecutables

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) Solo el propietario de un archivo puede eliminarlo dentro del directorio**

El sticky bit (representado con `t` en los permisos) en un directorio impide que los usuarios borren o renombren archivos de otros usuarios, incluso si tienen permisos de escritura en el directorio. El ejemplo más común es `/tmp`.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="110.2" data-correct="B">

### Pregunta 53 (Subtema 110.2)

¿Qué comando se utiliza para configurar las reglas del firewall en sistemas Linux con iptables?

- [ ] a) `firewall-cmd`
- [ ] b) `iptables`
- [ ] c) `ufw`
- [ ] d) `nftables`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `iptables`**

`iptables` es la herramienta clásica para configurar las reglas del firewall de netfilter en el kernel de Linux. `firewall-cmd` es la interfaz de firewalld, `ufw` es el frontend simplificado de Ubuntu y `nftables` es el sucesor moderno de iptables.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="110.2" data-correct="D">

### Pregunta 54 (Subtema 110.2)

¿Qué cadena de iptables se aplica a los paquetes que llegan al sistema y están destinados a procesos locales?

- [ ] a) OUTPUT
- [ ] b) FORWARD
- [ ] c) POSTROUTING
- [ ] d) INPUT

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) INPUT**

La cadena INPUT de iptables filtra los paquetes entrantes que están destinados a procesos del propio sistema. OUTPUT filtra los paquetes generados localmente y FORWARD filtra los que pasan a través del sistema hacia otro destino.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="110.2" data-correct="A">

### Pregunta 55 (Subtema 110.2)

¿Qué comando de iptables permite listar todas las reglas activas con números de línea?

- [ ] a) `iptables -L --line-numbers`
- [ ] b) `iptables -S --numbered`
- [ ] c) `iptables --list-all`
- [ ] d) `iptables -R --show`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `iptables -L --line-numbers`**

El comando `iptables -L --line-numbers` lista todas las reglas activas en las cadenas por defecto mostrando los números de línea, lo que facilita la inserción o eliminación de reglas específicas.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="110.3" data-correct="C">

### Pregunta 56 (Subtema 110.3)

¿Qué comando se utiliza para generar un par de claves SSH (pública y privada)?

- [ ] a) `ssh-agent`
- [ ] b) `ssh-copy-id`
- [ ] c) `ssh-keygen`
- [ ] d) `ssh-add`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**C) `ssh-keygen`**

`ssh-keygen` genera pares de claves criptográficas para autenticación SSH. Por defecto crea las claves en `~/.ssh/id_rsa` (privada) y `~/.ssh/id_rsa.pub` (pública). Se puede especificar el algoritmo con `-t` (rsa, ed25519, etc.).

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="110.3" data-correct="B">

### Pregunta 57 (Subtema 110.3)

¿Qué permisos debe tener el archivo de clave privada SSH `~/.ssh/id_rsa` para que el cliente SSH lo acepte?

- [ ] a) `644`
- [ ] b) `600`
- [ ] c) `700`
- [ ] d) `400`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `600`**

El archivo de clave privada SSH debe tener permisos `600` (lectura y escritura solo para el propietario). Si los permisos son demasiado abiertos, el cliente SSH rechazará usar la clave por razones de seguridad.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="110.3" data-correct="A">

### Pregunta 58 (Subtema 110.3)

¿Qué directiva en `/etc/ssh/sshd_config` desactiva el acceso SSH con el usuario root?

- [ ] a) `PermitRootLogin no`
- [ ] b) `DenyRoot yes`
- [ ] c) `RootLogin disabled`
- [ ] d) `AllowRoot no`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**A) `PermitRootLogin no`**

La directiva `PermitRootLogin no` en el archivo de configuración del servidor SSH `/etc/ssh/sshd_config` prohíbe el inicio de sesión directo como root por SSH. Después de cambiarla, se debe reiniciar el servicio sshd.

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="110.3" data-correct="D">

### Pregunta 59 (Subtema 110.3)

¿Qué comando se usa para copiar la clave pública SSH a un servidor remoto y configurar la autenticación sin contraseña?

- [ ] a) `scp ~/.ssh/id_rsa.pub user@host:`
- [ ] b) `ssh-add user@host`
- [ ] c) `ssh-keygen --copy user@host`
- [ ] d) `ssh-copy-id user@host`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**D) `ssh-copy-id user@host`**

`ssh-copy-id` copia la clave pública al archivo `~/.ssh/authorized_keys` del servidor remoto, configurando automáticamente los permisos correctos. Esto permite la autenticación posterior basada en claves sin necesidad de contraseña.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="110.3" data-correct="B">

### Pregunta 60 (Subtema 110.3)

¿Qué comando permite crear un túnel SSH que reenvía el puerto local 8080 al puerto 80 de un servidor remoto?

- [ ] a) `ssh -R 8080:localhost:80 user@host`
- [ ] b) `ssh -L 8080:localhost:80 user@host`
- [ ] c) `ssh -D 8080:80 user@host`
- [ ] d) `ssh -X 8080:80 user@host`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**B) `ssh -L 8080:localhost:80 user@host`**

La opción `-L` de SSH crea un túnel de reenvío local (local port forwarding). En este caso, las conexiones al puerto 8080 local se reenvían al puerto 80 del servidor remoto a través del túnel SSH cifrado. `-R` crea un túnel inverso (remote forwarding).

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
