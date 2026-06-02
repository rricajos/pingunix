---
title: "202.1 - Personalizacion del arranque"
tags: [lpic-2, examen-201, tema-202, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "202"
subtema: "202.1"
---

# 202.1 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

Un administrador ha modificado el archivo `/etc/default/grub` para cambiar el tiempo de espera del menu. ¿Que comando debe ejecutar para que los cambios surtan efecto?

a) `grub-update`
b) `grub-mkconfig -o /boot/grub/grub.cfg`
c) `grub-install /dev/sda`
d) `systemctl restart grub`

<details>
<summary>Respuesta</summary>

**b) `grub-mkconfig -o /boot/grub/grub.cfg`**

Despues de modificar `/etc/default/grub`, es necesario regenerar el archivo `grub.cfg` ejecutando `grub-mkconfig` con la opcion `-o` para especificar el archivo de salida. El comando `grub-install` se usa para instalar los archivos de GRUB en el disco, no para actualizar la configuracion. No existe `grub-update` como comando estandar (en Debian existe `update-grub` como wrapper).
</details>

---

### Pregunta 2

¿Cual de los siguientes parametros del kernel permite arrancar directamente en una shell sin pasar por el proceso init?

a) `single`
b) `init=/bin/bash`
c) `systemd.unit=emergency.target`
d) `rescue`

<details>
<summary>Respuesta</summary>

**b) `init=/bin/bash`**

El parametro `init=/bin/bash` reemplaza completamente el proceso init por una shell bash, proporcionando acceso directo al sistema sin ningun servicio activo. `single` y `rescue` arrancan en modo usuario unico pero a traves del proceso init normal. `systemd.unit=emergency.target` tambien pasa por systemd.
</details>

---

### Pregunta 3

¿Que directorio contiene los scripts que generan las secciones del archivo `grub.cfg`?

a) `/boot/grub/`
b) `/etc/default/grub.d/`
c) `/etc/grub.d/`
d) `/usr/lib/grub/`

<details>
<summary>Respuesta</summary>

**c) `/etc/grub.d/`**

El directorio `/etc/grub.d/` contiene los scripts ejecutables (como `00_header`, `10_linux`, `30_os-prober`, `40_custom`) que son procesados por `grub-mkconfig` para generar el archivo `grub.cfg`. Cada script genera una seccion especifica de la configuracion final.
</details>

---

### Pregunta 4

Un administrador necesita ver los mensajes de error del arranque anterior del sistema. ¿Que comando es el mas adecuado?

a) `dmesg --level=err`
b) `journalctl -b -1 -p err`
c) `journalctl -b -p err`
d) `cat /var/log/boot.log`

<details>
<summary>Respuesta</summary>

**b) `journalctl -b -1 -p err`**

La opcion `-b -1` selecciona el arranque anterior (el actual seria `-b 0` o simplemente `-b`), y `-p err` filtra por prioridad de error. `dmesg` solo muestra los mensajes del kernel del arranque actual. `journalctl -b -p err` mostraria los errores del arranque actual, no del anterior.
</details>

---

### Pregunta 5

¿Cual es la diferencia principal entre `rescue.target` y `emergency.target` en systemd?

a) `rescue.target` no monta sistemas de archivos; `emergency.target` si
b) `rescue.target` monta sistemas de archivos y ejecuta servicios basicos; `emergency.target` solo monta raiz en solo lectura
c) Son identicos, solo cambia el nombre
d) `emergency.target` requiere contrasena de root; `rescue.target` no

<details>
<summary>Respuesta</summary>

**b) `rescue.target` monta sistemas de archivos y ejecuta servicios basicos; `emergency.target` solo monta raiz en solo lectura**

`rescue.target` (equivalente al runlevel 1) monta todos los sistemas de archivos de `/etc/fstab` e inicia algunos servicios basicos. `emergency.target` es mucho mas minimalista: solo monta el sistema de archivos raiz en modo solo lectura y no inicia practicamente ningun servicio, proporcionando el entorno minimo posible para reparaciones.
</details>

---

### Pregunta 6

¿Que variable en `/etc/default/grub` permite agregar parametros del kernel que se aplican a TODAS las entradas de menu, incluyendo las de recuperacion?

a) `GRUB_CMDLINE_LINUX_DEFAULT`
b) `GRUB_CMDLINE_LINUX`
c) `GRUB_CMDLINE`
d) `GRUB_KERNEL_PARAMS`

<details>
<summary>Respuesta</summary>

**b) `GRUB_CMDLINE_LINUX`**

`GRUB_CMDLINE_LINUX` agrega parametros a todas las entradas de Linux, incluyendo las de recuperacion. `GRUB_CMDLINE_LINUX_DEFAULT` solo agrega parametros a la entrada por defecto (no a las de recuperacion). Las opciones `GRUB_CMDLINE` y `GRUB_KERNEL_PARAMS` no existen como variables estandar de GRUB 2.
</details>

---

### Pregunta 7

En un sistema con SysV init, ¿que archivo determina el nivel de ejecucion por defecto?

a) `/etc/rc.local`
b) `/etc/default/runlevel`
c) `/etc/inittab`
d) `/etc/sysconfig/init`

<details>
<summary>Respuesta</summary>

**c) `/etc/inittab`**

El archivo `/etc/inittab` contiene la linea `id:N:initdefault:` donde N es el numero del runlevel por defecto. Este archivo es el punto central de configuracion del sistema SysV init. En sistemas con systemd, este archivo ya no se utiliza y se reemplaza por el concepto de default target.
</details>

---

### Pregunta 8

Un administrador quiere que GRUB recuerde la ultima entrada seleccionada y la use como defecto en el siguiente arranque. ¿Que configuracion debe establecer en `/etc/default/grub`?

a) `GRUB_DEFAULT=last`
b) `GRUB_DEFAULT=saved` y `GRUB_SAVEDEFAULT=true`
c) `GRUB_REMEMBER=true`
d) `GRUB_DEFAULT=remember`

<details>
<summary>Respuesta</summary>

**b) `GRUB_DEFAULT=saved` y `GRUB_SAVEDEFAULT=true`**

Para que GRUB recuerde la ultima entrada seleccionada, se necesitan dos configuraciones: `GRUB_DEFAULT=saved` indica que se use la entrada guardada, y `GRUB_SAVEDEFAULT=true` hace que GRUB guarde la seleccion del usuario. Tambien se puede usar `grub-set-default` o `grub-reboot` para establecer la entrada de forma manual.
</details>

---

### Pregunta 9

¿Que comando muestra el contenido actual de los parametros con los que se arranco el kernel en ejecucion?

a) `dmesg | head`
b) `cat /proc/cmdline`
c) `grub-editenv list`
d) `sysctl -a | grep boot`

<details>
<summary>Respuesta</summary>

**b) `cat /proc/cmdline`**

El archivo virtual `/proc/cmdline` contiene los parametros exactos con los que se arranco el kernel actual. Es la fuente definitiva para verificar que parametros estan activos. `dmesg | head` podria mostrar informacion del kernel pero no de forma estructurada. `grub-editenv list` muestra variables del entorno de GRUB guardadas.
</details>

---

### Pregunta 10

Para que el journal de systemd mantenga logs persistentes entre reinicios, ¿que condicion debe cumplirse?

a) Instalar el paquete `rsyslog`
b) Configurar `Storage=volatile` en `/etc/systemd/journald.conf`
c) Que exista el directorio `/var/log/journal/` o configurar `Storage=persistent` en `journald.conf`
d) Ejecutar `systemctl enable systemd-journald-persistent`

<details>
<summary>Respuesta</summary>

**c) Que exista el directorio `/var/log/journal/` o configurar `Storage=persistent` en `journald.conf`**

Por defecto, el valor de `Storage` es `auto`, lo que significa que si existe `/var/log/journal/`, los logs se guardan de forma persistente. Si no existe, se almacenan en `/run/log/journal/` (volatil). Alternativamente, establecer `Storage=persistent` en `/etc/systemd/journald.conf` crea automaticamente el directorio y fuerza el almacenamiento persistente.
</details>

---

### Pregunta 11

Un administrador quiere desactivar el script `30_os-prober` de GRUB para que no detecte otros sistemas operativos al regenerar `grub.cfg`. ¿Cual es la forma correcta de hacerlo?

a) Eliminar el archivo `/etc/grub.d/30_os-prober`
b) Retirar el permiso de ejecucion con `chmod -x /etc/grub.d/30_os-prober`
c) Agregar `GRUB_DISABLE_OS_PROBER=false` en `/etc/default/grub`
d) Editar directamente `/boot/grub/grub.cfg` y eliminar las entradas

<details><summary>Respuesta</summary>

**b) Retirar el permiso de ejecucion con `chmod -x /etc/grub.d/30_os-prober`**

Los scripts en `/etc/grub.d/` solo se ejecutan si tienen permisos de ejecucion. Retirar el permiso con `chmod -x` es la forma correcta de desactivar un script sin eliminarlo, permitiendo reactivarlo facilmente. Tambien se puede agregar `GRUB_DISABLE_OS_PROBER=true` en `/etc/default/grub`. Editar `grub.cfg` directamente nunca es correcto ya que se regenera automaticamente.

</details>

---

### Pregunta 12

¿Que parametro del kernel se pasa desde GRUB para limitar la memoria RAM disponible para el sistema a 512 MB?

a) `ram=512M`
b) `mem=512M`
c) `maxmem=512M`
d) `memory_limit=512M`

<details><summary>Respuesta</summary>

**b) `mem=512M`**

El parametro `mem=512M` del kernel limita la cantidad de memoria RAM que el sistema utilizara a 512 MB, independientemente de cuanta memoria fisica este instalada. Es util para pruebas de rendimiento con memoria limitada o para diagnosticar problemas relacionados con la memoria. Se agrega a la linea `linux` en GRUB temporal o permanentemente en `GRUB_CMDLINE_LINUX`.

</details>

---

### Pregunta 13

¿Que comando de systemd permite cambiar al modo multiusuario sin interfaz grafica de forma inmediata?

a) `systemctl start multi-user.target`
b) `systemctl isolate multi-user.target`
c) `systemctl switch multi-user.target`
d) `systemctl enable multi-user.target`

<details><summary>Respuesta</summary>

**b) `systemctl isolate multi-user.target`**

El subcomando `isolate` de `systemctl` cambia al target especificado de forma inmediata, deteniendo todas las unidades que no son dependencias del target objetivo. Es equivalente a cambiar de runlevel en SysV init. `start` solo iniciaria el target sin detener otros servicios, `switch` no existe, y `enable` solo configura el inicio automatico sin cambiar el estado actual.

</details>

---

### Pregunta 14

En un sistema con SysV init, ¿que significa un enlace simbolico llamado `S85apache2` en el directorio `/etc/rc3.d/`?

a) El script apache2 se detendra con prioridad 85 al entrar en el runlevel 3
b) El script apache2 se iniciara con prioridad 85 al entrar en el runlevel 3
c) El script apache2 esta deshabilitado en el runlevel 3
d) El script apache2 se ejecutara en modo de depuracion

<details><summary>Respuesta</summary>

**b) El script apache2 se iniciara con prioridad 85 al entrar en el runlevel 3**

En SysV init, los enlaces simbolicos en los directorios `rcN.d` siguen la convencion `S##nombre` para scripts de inicio (Start) y `K##nombre` para scripts de parada (Kill). El numero `85` indica el orden de ejecucion (mayor numero = se inicia mas tarde). Asi, `S85apache2` significa que apache2 se inicia en el runlevel 3 con prioridad 85.

</details>

---

### Pregunta 15

¿Que valor debe tener `GRUB_TIMEOUT_STYLE` en `/etc/default/grub` para que el menu de GRUB se muestre con una cuenta regresiva sin ocultar el menu?

a) `hidden`
b) `menu`
c) `countdown`
d) `visible`

<details><summary>Respuesta</summary>

**c) `countdown`**

El valor `countdown` muestra una cuenta regresiva en la pantalla pero sin mostrar el menu completo; al presionar cualquier tecla se muestra el menu. El valor `menu` muestra el menu completo durante el tiempo de espera. El valor `hidden` oculta completamente el menu y la cuenta regresiva. El valor `visible` no es una opcion valida de GRUB_TIMEOUT_STYLE.

</details>

---

### Pregunta 16

Un administrador necesita arrancar el sistema en modo rescate pasando un parametro al kernel desde GRUB. ¿Que parametro debe agregar a la linea `linux`?

a) `rescue`
b) `runlevel=1`
c) `systemd.unit=rescue.target`
d) `init=rescue`

<details><summary>Respuesta</summary>

**c) `systemd.unit=rescue.target`**

En sistemas con systemd, el parametro `systemd.unit=rescue.target` indica al proceso init que arranque directamente en el target de rescate. Este modo monta los sistemas de archivos y carga servicios basicos, pero no inicia la red ni servicios multiusuario. Las opciones `single`, `1` o `S` tambien funcionan por compatibilidad, pero `systemd.unit=rescue.target` es la forma especifica de systemd.

</details>

---

### Pregunta 17

¿Que archivo virtual contiene los parametros exactos con los que se arranco el kernel actualmente en ejecucion?

a) `/proc/version`
b) `/proc/cmdline`
c) `/proc/sys/kernel/bootparams`
d) `/boot/grub/grub.cfg`

<details><summary>Respuesta</summary>

**b) `/proc/cmdline`**

El archivo virtual `/proc/cmdline` contiene la linea completa de parametros que se pasaron al kernel durante el arranque. Incluye parametros como `root=`, `ro`, `quiet`, `splash`, `systemd.unit=` y cualquier otro que se haya especificado en la configuracion de GRUB o editado manualmente durante el arranque. Es la fuente definitiva para verificar la configuracion de arranque activa.

</details>

---

### Pregunta 18

¿Que opcion de `Storage` en `/etc/systemd/journald.conf` descarta completamente todos los mensajes del journal sin almacenarlos?

a) `volatile`
b) `auto`
c) `none`
d) `disabled`

<details><summary>Respuesta</summary>

**c) `none`**

La opcion `Storage=none` en `journald.conf` descarta todos los mensajes del journal sin almacenarlos ni en disco ni en memoria. Las otras opciones validas son: `volatile` (solo en memoria en `/run/log/journal/`), `persistent` (en disco en `/var/log/journal/`) y `auto` (en disco si el directorio existe, en memoria si no). `disabled` no es una opcion valida.

</details>

---

### Pregunta 19

Un administrador quiere agregar una entrada personalizada al menu de GRUB. ¿En que archivo debe definirla?

a) `/boot/grub/grub.cfg`
b) `/etc/default/grub`
c) `/etc/grub.d/40_custom`
d) `/etc/grub.d/00_header`

<details><summary>Respuesta</summary>

**c) `/etc/grub.d/40_custom`**

El archivo `/etc/grub.d/40_custom` esta disenado especificamente para que los administradores agreguen entradas personalizadas al menu de GRUB. Las entradas se definen usando bloques `menuentry`. Despues de editar este archivo, se debe ejecutar `grub-mkconfig -o /boot/grub/grub.cfg` para regenerar la configuracion. Nunca se debe editar `grub.cfg` directamente.

</details>

---

### Pregunta 20

¿Que parametro del kernel permite desactivar la configuracion automatica del modo grafico, util cuando hay problemas con los drivers de video?

a) `nographics`
b) `nomodeset`
c) `novideo`
d) `textmode`

<details><summary>Respuesta</summary>

**b) `nomodeset`**

El parametro `nomodeset` impide que el kernel configure el modo grafico (KMS - Kernel Mode Setting) durante el arranque, forzando al sistema a usar un modo de video basico. Es extremadamente util cuando hay problemas con los drivers de video que impiden el arranque normal o causan una pantalla negra. Se puede agregar temporalmente editando la entrada de GRUB o permanentemente en `GRUB_CMDLINE_LINUX`.

</details>

---

### Pregunta 21

¿Que comando establece `multi-user.target` como el objetivo de arranque por defecto en systemd?

<input type="text" class="fill-blank" data-answer="systemctl set-default multi-user.target" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl set-default multi-user.target**

El comando `systemctl set-default multi-user.target` configura el target de arranque por defecto del sistema. Esto crea un enlace simbolico desde `/etc/systemd/system/default.target` al target especificado. A partir del siguiente reinicio, el sistema arrancara en modo multiusuario sin interfaz grafica. Para verificar el target actual se usa `systemctl get-default`.

</details>

---

### Pregunta 22

¿Que comando regenera el archivo `grub.cfg` a partir de la configuracion de `/etc/default/grub` y los scripts de `/etc/grub.d/`?

<input type="text" class="fill-blank" data-answer="grub-mkconfig -o /boot/grub/grub.cfg" data-alt="update-grub,grub2-mkconfig -o /boot/grub2/grub.cfg" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grub-mkconfig -o /boot/grub/grub.cfg**

El comando `grub-mkconfig` genera la configuracion de GRUB ejecutando los scripts de `/etc/grub.d/` en orden numerico y utilizando las variables de `/etc/default/grub`. La opcion `-o` especifica el archivo de salida. En Debian/Ubuntu existe el wrapper `update-grub` que es equivalente. En RHEL/CentOS se usa `grub2-mkconfig -o /boot/grub2/grub.cfg`.

</details>

---

### Pregunta 23

¿Que comando muestra los mensajes del arranque anterior del sistema filtrados por prioridad de error?

<input type="text" class="fill-blank" data-answer="journalctl -b -1 -p err" data-alt="journalctl -b -1 --priority=err" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**journalctl -b -1 -p err**

El comando `journalctl -b -1 -p err` muestra los mensajes del arranque anterior (`-b -1`) filtrados por prioridad de error o superior (`-p err`). La opcion `-b 0` seria el arranque actual y `-b -1` el anterior. Para que funcione, el journal debe tener almacenamiento persistente configurado (directorio `/var/log/journal/` existente o `Storage=persistent`).

</details>

---

### Pregunta 24

¿Que comando instala los archivos de GRUB en el MBR del disco `/dev/sda`?

<input type="text" class="fill-blank" data-answer="grub-install /dev/sda" data-alt="grub2-install /dev/sda" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grub-install /dev/sda**

El comando `grub-install /dev/sda` instala los archivos del cargador de arranque GRUB en el sector de arranque maestro (MBR) del disco `/dev/sda`. Esto incluye el codigo de arranque en los primeros 446 bytes del MBR y los archivos adicionales en `/boot/grub/`. Despues de instalar GRUB, se debe regenerar `grub.cfg` con `grub-mkconfig`.

</details>

---

### Pregunta 25

¿Que comando muestra el target de arranque por defecto configurado actualmente en systemd?

<input type="text" class="fill-blank" data-answer="systemctl get-default" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl get-default**

El comando `systemctl get-default` muestra el target de arranque por defecto del sistema, que es el enlace simbolico `/etc/systemd/system/default.target`. Los valores tipicos son `graphical.target` (con interfaz grafica) o `multi-user.target` (sin interfaz grafica). Para cambiar el target por defecto se usa `systemctl set-default`.

</details>
