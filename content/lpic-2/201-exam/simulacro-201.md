---
title: "Simulacro Examen 201"
tags:
  - lpic-2
  - examen-201
  - simulacro
tipo: simulacro
certificacion: lpic-2
examen: "201"
---

# Simulacro - Examen 201

> **Instrucciones:** 60 preguntas, 90 minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="201" data-duration="90" data-total="60">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">90:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

<div class="exam-question" data-id="q-1" data-subtema="201.2" data-correct="c">

### Pregunta 1 (Subtema 201.2)

¿Que interfaz utiliza `make menuconfig` para la configuracion del kernel?

- [ ] a) Interfaz grafica GTK
- [ ] b) Interfaz grafica Qt
- [ ] c) Interfaz de texto basada en ncurses
- [ ] d) Solo linea de comandos sin menus

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Interfaz de texto basada en ncurses**

`make menuconfig` utiliza la biblioteca ncurses para mostrar una interfaz de menus basada en texto (TUI - Text User Interface). Es la opcion mas popular porque funciona en terminales sin entorno grafico. `make xconfig` usa Qt, `make gconfig` usa GTK, y `make config` es solo linea de comandos pregunta a pregunta.

</details>

</div>

---

<div class="exam-question" data-id="q-2" data-subtema="200.2" data-correct="c">

### Pregunta 2 (Subtema 200.2)

¿Con que frecuencia tipica recopila datos el demonio `sadc` del paquete sysstat cuando esta configurado por defecto?

- [ ] a) Cada segundo
- [ ] b) Cada minuto
- [ ] c) Cada 10 minutos
- [ ] d) Cada hora

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Cada 10 minutos**

El demonio `sadc` (system activity data collector) se ejecuta tipicamente cada 10 minutos a traves de una entrada en cron (`/etc/cron.d/sysstat`). Esta frecuencia ofrece un buen equilibrio entre granularidad de datos y uso de recursos del propio sistema de monitorizacion. Este intervalo se puede ajustar modificando la configuracion del cron.

</details>

</div>

---

<div class="exam-question" data-id="q-3" data-subtema="203.2" data-correct="c">

### Pregunta 3 (Subtema 203.2)

¿Cual es la herramienta correcta para reparar un sistema de archivos XFS dañado?

- [ ] a) `fsck.xfs /dev/sda3`
- [ ] b) `e2fsck /dev/sda3`
- [ ] c) `xfs_repair /dev/sda3`
- [ ] d) `xfs_check /dev/sda3`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `xfs_repair /dev/sda3`**

`xfs_repair` es la unica herramienta real para reparar sistemas de archivos XFS. Aunque `fsck.xfs` existe en el sistema, es un placeholder que no realiza ninguna operacion real de reparacion. `e2fsck` es exclusiva para ext2/3/4. `xfs_check` es una herramienta antigua de verificacion que ha sido reemplazada por `xfs_repair -n`.

</details>

</div>

---

<div class="exam-question" data-id="q-4" data-subtema="200.1" data-correct="c">

### Pregunta 4 (Subtema 200.1)

¿Cual es la diferencia principal entre `MemFree` y `MemAvailable` en `/proc/meminfo`?

- [ ] a) No hay diferencia, son sinonimos
- [ ] b) `MemFree` incluye la cache y `MemAvailable` no
- [ ] c) `MemAvailable` estima la memoria disponible para nuevas aplicaciones incluyendo cache recuperable, mientras que `MemFree` solo muestra memoria completamente sin uso
- [ ] d) `MemAvailable` solo cuenta la memoria fisica y `MemFree` incluye el swap

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `MemAvailable` estima la memoria disponible para nuevas aplicaciones incluyendo cache recuperable, mientras que `MemFree` solo muestra memoria completamente sin uso**

`MemFree` es la memoria que no esta siendo utilizada para nada. `MemAvailable` es una estimacion mas practica que incluye memoria que puede ser recuperada rapidamente (como buffers y cache de paginas), proporcionando una vision mas realista de la memoria disponible para aplicaciones.

</details>

</div>

---

<div class="exam-question" data-id="q-5" data-subtema="202.3" data-correct="c">

### Pregunta 5 (Subtema 202.3)

En una configuracion de arranque PXE, ¿en que orden busca PXELINUX su archivo de configuracion?

- [ ] a) IP hexadecimal, MAC, default
- [ ] b) default, MAC, IP hexadecimal
- [ ] c) MAC (con prefijo 01-), IP hexadecimal, default
- [ ] d) hostname, MAC, default

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) MAC (con prefijo 01-), IP hexadecimal, default**

PXELINUX busca la configuracion en el siguiente orden: primero por direccion MAC con el prefijo `01-` (por ejemplo, `01-aa-bb-cc-dd-ee-ff`), luego por la IP del cliente convertida a hexadecimal (reduciendo digitos progresivamente), y finalmente el archivo `default`. Este orden permite configuraciones especificas por maquina (MAC) con un respaldo general (default).

</details>

</div>

---

<div class="exam-question" data-id="q-6" data-subtema="204.2" data-correct="b">

### Pregunta 6 (Subtema 204.2)

En que archivo se configura el nombre IQN del initiator iSCSI?

- [ ] a) `/etc/iscsi/iscsid.conf`
- [ ] b) `/etc/iscsi/initiatorname.iscsi`
- [ ] c) `/etc/iscsi/iqn.conf`
- [ ] d) `/var/lib/iscsi/initiator`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/iscsi/initiatorname.iscsi`**

El archivo `/etc/iscsi/initiatorname.iscsi` contiene el nombre IQN unico del initiator, con el formato `InitiatorName=iqn.AAAA-MM.dominio.invertido:identificador`. Este archivo es leido por el demonio iscsid al iniciar. El archivo `iscsid.conf` contiene la configuracion global del demonio, no el nombre del initiator.

</details>

</div>

---

<div class="exam-question" data-id="q-7" data-subtema="200.2" data-correct="c">

### Pregunta 7 (Subtema 200.2)

¿Cual de las siguientes afirmaciones sobre la planificacion de capacidad es CORRECTA?

- [ ] a) Solo debe realizarse cuando el sistema ya presenta problemas de rendimiento
- [ ] b) Se basa exclusivamente en el uso actual de recursos sin considerar tendencias
- [ ] c) Es un proceso continuo que combina monitorizacion, analisis, prediccion y planificacion
- [ ] d) Solo involucra la compra de hardware nuevo

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Es un proceso continuo que combina monitorizacion, analisis, prediccion y planificacion**

La planificacion de capacidad es un ciclo continuo: se monitoriza el uso actual, se analizan tendencias, se predicen necesidades futuras, se planifican acciones y se implementan. Despues se vuelve a monitorizar para verificar. No se limita a hardware, incluye optimizacion de software, redistribucion de carga y ajustes de configuracion. Es proactiva, no reactiva.

</details>

</div>

---

<div class="exam-question" data-id="q-8" data-subtema="200.1" data-correct="b">

### Pregunta 8 (Subtema 200.1)

¿Que comando de `sar` muestra los datos historicos de uso de CPU del dia 22 del mes actual?

- [ ] a) `sar -u -d 22`
- [ ] b) `sar -u -f /var/log/sysstat/sa22`
- [ ] c) `sar --cpu --date 22`
- [ ] d) `sar -u --history /var/log/sa/22`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `sar -u -f /var/log/sysstat/sa22`**

La opcion `-u` indica estadisticas de CPU y `-f` especifica el archivo de datos historicos. Los archivos de datos de sar se almacenan en `/var/log/sysstat/` (Debian/Ubuntu) o `/var/log/sa/` con nombres como `sa22` donde el numero corresponde al dia del mes.

</details>

</div>

---

<div class="exam-question" data-id="q-9" data-subtema="205.1" data-correct="c">

### Pregunta 9 (Subtema 205.1)

Que comando establece el hostname de forma persistente en un sistema con systemd?

- [ ] a) `hostname servidor01`
- [ ] b) `echo "servidor01" > /etc/hostname`
- [ ] c) `hostnamectl set-hostname servidor01`
- [ ] d) `sysctl hostname=servidor01`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `hostnamectl set-hostname servidor01`**

El comando `hostnamectl set-hostname` es la forma recomendada de establecer el hostname en sistemas con systemd. Modifica automaticamente `/etc/hostname` y actualiza el hostname activo en el kernel. La opcion b) modifica el archivo pero no aplica el cambio inmediatamente. La opcion a) solo cambia el hostname de forma transitoria (hasta el reinicio).

</details>

</div>

---

<div class="exam-question" data-id="q-10" data-subtema="200.1" data-correct="c">

### Pregunta 10 (Subtema 200.1)

Un servidor Linux muestra un load average de 4.50, 3.20, 1.10. El sistema tiene 2 nucleos de CPU. ¿Que indica esta situacion?

- [ ] a) El sistema esta infrautilizado ya que el load average es bajo
- [ ] b) El sistema tiene una carga moderada y estable
- [ ] c) La carga del sistema esta aumentando y actualmente supera la capacidad de las CPUs
- [ ] d) La carga del sistema esta disminuyendo y se esta estabilizando

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) La carga del sistema esta aumentando y actualmente supera la capacidad de las CPUs**

El load average se lee de izquierda a derecha: 1 min, 5 min, 15 min. Los valores van de 1.10 (hace 15 min) a 4.50 (ultimo minuto), lo que muestra una tendencia ascendente. Con 2 nucleos, un load de 4.50 significa que hay mas del doble de procesos que CPUs disponibles, indicando sobrecarga creciente.

</details>

</div>

---

<div class="exam-question" data-id="q-11" data-subtema="201.3" data-correct="a">

### Pregunta 11 (Subtema 201.3)

Un administrador necesita habilitar el reenvio de paquetes IPv4 de forma permanente. ¿Cual es la forma correcta de hacerlo?

- [ ] a) `echo 1 > /proc/sys/net/ipv4/ip_forward` y anadir `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`
- [ ] b) Solo ejecutar `sysctl -w net.ipv4.ip_forward=1`
- [ ] c) Solo editar `/etc/modprobe.d/ip_forward.conf`
- [ ] d) Recompilar el kernel con CONFIG_IP_FORWARD=y

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `echo 1 > /proc/sys/net/ipv4/ip_forward` y anadir `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf`**

Para que el cambio sea tanto inmediato como permanente, se necesitan dos acciones: aplicarlo en tiempo real (ya sea con `echo` o `sysctl -w`) y configurarlo en `/etc/sysctl.conf` para que persista tras el reinicio. Alternativamente, se puede editar `sysctl.conf` y ejecutar `sysctl -p` para aplicar ambos pasos.

</details>

</div>

---

<div class="exam-question" data-id="q-12" data-subtema="203.2" data-correct="b">

### Pregunta 12 (Subtema 203.2)

¿Que se debe hacer ANTES de reducir el tamano de un sistema de archivos ext4 con `resize2fs`?

- [ ] a) Montar el sistema de archivos en modo lectura-escritura
- [ ] b) Ejecutar `e2fsck -f` sobre el sistema de archivos desmontado
- [ ] c) Ejecutar `xfs_repair` sobre el sistema de archivos
- [ ] d) Crear un respaldo del superbloque con `dumpe2fs`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Ejecutar `e2fsck -f` sobre el sistema de archivos desmontado**

Antes de reducir un sistema de archivos ext4, es obligatorio que este desmontado y que se ejecute una verificacion forzada con `e2fsck -f`. Si se intenta reducir sin pasar fsck, `resize2fs` mostrara un error indicando que primero debe ejecutarse e2fsck. Esto garantiza la integridad de los datos antes de la operacion potencialmente destructiva de reduccion.

</details>

</div>

---

<div class="exam-question" data-id="q-13" data-subtema="204.1" data-correct="b">

### Pregunta 13 (Subtema 204.1)

Que comando elimina completamente los metadatos RAID del superbloque de un dispositivo para poder reutilizarlo?

- [ ] a) `mdadm --remove /dev/sdb1`
- [ ] b) `mdadm --zero-superblock /dev/sdb1`
- [ ] c) `mdadm --clean /dev/sdb1`
- [ ] d) `mdadm --erase /dev/sdb1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `mdadm --zero-superblock /dev/sdb1`**

El comando `mdadm --zero-superblock` borra los metadatos RAID almacenados en el superbloque del dispositivo. Esto es necesario cuando se quiere reutilizar un disco que pertenecioa a un array RAID, ya que sin limpiar el superbloque, mdadm podria intentar reensamblarlo en un array antiguo. Es una practica recomendada antes de reutilizar discos.

</details>

</div>

---

<div class="exam-question" data-id="q-14" data-subtema="200.2" data-correct="b">

### Pregunta 14 (Subtema 200.2)

Un servidor de base de datos tiene 16 GB de RAM. Actualmente usa 12 GB con 200 conexiones concurrentes. Se espera que el numero de conexiones se duplique en 6 meses. ¿Que accion es mas apropiada?

- [ ] a) No hacer nada, hay 4 GB libres
- [ ] b) Ampliar a 32 GB de RAM anticipandose al crecimiento
- [ ] c) Reducir el numero maximo de conexiones permitidas
- [ ] d) Migrar la base de datos a otro servidor con menos carga

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Ampliar a 32 GB de RAM anticipandose al crecimiento**

Con 200 conexiones usando 12 GB, cada conexion consume aproximadamente 60 MB. Al duplicar a 400 conexiones, se necesitarian ~24 GB. Ampliar a 32 GB proporciona margen suficiente. Reducir conexiones limita el servicio, y migrar sin ampliar solo traslada el problema. La planificacion proactiva de capacidad indica ampliar recursos antes de alcanzar el limite.

</details>

</div>

---

<div class="exam-question" data-id="q-15" data-subtema="202.2" data-correct="c">

### Pregunta 15 (Subtema 202.2)

Despues de realizar reparaciones dentro de un entorno chroot con `init=/bin/bash`, ¿cual es la forma mas segura de reiniciar el sistema?

- [ ] a) Ejecutar `reboot`
- [ ] b) Ejecutar `shutdown -r now`
- [ ] c) Ejecutar `sync` y luego `echo b > /proc/sysrq-trigger`
- [ ] d) Desconectar la alimentacion electrica

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Ejecutar `sync` y luego `echo b > /proc/sysrq-trigger`**

Cuando se arranca con `init=/bin/bash`, los comandos `reboot` y `shutdown` normalmente no funcionan porque no hay un sistema init en ejecucion que gestione el apagado. El procedimiento seguro es: primero ejecutar `sync` para asegurar que todos los datos en buffer se escriban al disco, luego remontar en solo lectura con `mount -o remount,ro /`, y finalmente forzar el reinicio mediante la interfaz SysRq con `echo b > /proc/sysrq-trigger`. Tambien se puede intentar `exec /sbin/init` para iniciar el sistema normalmente.

</details>

</div>

---

<div class="exam-question" data-id="q-16" data-subtema="202.1" data-correct="b">

### Pregunta 16 (Subtema 202.1)

¿Cual de los siguientes parametros del kernel permite arrancar directamente en una shell sin pasar por el proceso init?

- [ ] a) `single`
- [ ] b) `init=/bin/bash`
- [ ] c) `systemd.unit=emergency.target`
- [ ] d) `rescue`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `init=/bin/bash`**

El parametro `init=/bin/bash` reemplaza completamente el proceso init por una shell bash, proporcionando acceso directo al sistema sin ningun servicio activo. `single` y `rescue` arrancan en modo usuario unico pero a traves del proceso init normal. `systemd.unit=emergency.target` tambien pasa por systemd.

</details>

</div>

---

<div class="exam-question" data-id="q-17" data-subtema="201.3" data-correct="c">

### Pregunta 17 (Subtema 201.3)

¿Que ocurre cuando se ejecuta `depmod` sin argumentos?

- [ ] a) Descarga e instala modulos nuevos desde internet
- [ ] b) Desinstala modulos que no se estan usando
- [ ] c) Analiza los modulos del kernel actual y genera el archivo modules.dep con las dependencias
- [ ] d) Carga todos los modulos disponibles

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Analiza los modulos del kernel actual y genera el archivo modules.dep con las dependencias**

`depmod` escanea todos los modulos en `/lib/modules/$(uname -r)/` y genera el archivo `modules.dep` (y su version binaria `modules.dep.bin`) que contiene el arbol de dependencias entre modulos. `modprobe` utiliza este archivo para resolver dependencias. Se debe ejecutar `depmod` despues de instalar modulos manualmente.

</details>

</div>

---

<div class="exam-question" data-id="q-18" data-subtema="205.3" data-correct="c">

### Pregunta 18 (Subtema 205.3)

Que opcion de dig muestra solo la respuesta a la consulta DNS, sin cabeceras ni informacion adicional?

- [ ] a) `dig --brief`
- [ ] b) `dig +noall`
- [ ] c) `dig +short`
- [ ] d) `dig -q`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `dig +short`**

La opcion `+short` de dig muestra unicamente la respuesta a la consulta, omitiendo toda la informacion adicional (cabeceras, seccion de autoridad, seccion adicional, estadisticas). Por ejemplo, `dig +short ejemplo.com` mostraria solo la IP (como `93.184.216.34`). Es muy util para scripts y consultas rapidas.

</details>

</div>

---

<div class="exam-question" data-id="q-19" data-subtema="204.1" data-correct="b">

### Pregunta 19 (Subtema 204.1)

Cual es el procedimiento correcto para reemplazar un disco fallido en un array RAID?

- [ ] a) Detener el array, reemplazar el disco, reiniciar el array
- [ ] b) Marcar el disco como fallido con `--fail`, retirarlo con `--remove`, agregar el nuevo con `--add`
- [ ] c) Ejecutar `mdadm --rebuild /dev/md0 /dev/nuevo_disco`
- [ ] d) Editar `/etc/mdadm.conf` y reiniciar el servicio mdmonitor

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Marcar el disco como fallido con `--fail`, retirarlo con `--remove`, agregar el nuevo con `--add`**

El procedimiento correcto sin detener el array es: primero marcar el disco como fallido (`mdadm --fail /dev/md0 /dev/sdX`), luego retirarlo del array (`mdadm --remove /dev/md0 /dev/sdX`), reemplazar fisicamente el disco, particionar el nuevo disco, y finalmente agregarlo al array (`mdadm --add /dev/md0 /dev/sdY`). La reconstruccion comienza automaticamente.

</details>

</div>

---

<div class="exam-question" data-id="q-20" data-subtema="203.2" data-correct="b">

### Pregunta 20 (Subtema 203.2)

¿Cual de las siguientes afirmaciones sobre XFS es correcta?

- [ ] a) XFS puede expandirse y reducirse en linea
- [ ] b) XFS solo puede expandirse, nunca reducirse
- [ ] c) XFS solo puede reducirse, nunca expandirse
- [ ] d) XFS no soporta cambios de tamano

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) XFS solo puede expandirse, nunca reducirse**

Esta es una limitacion fundamental de XFS: solo soporta el crecimiento del sistema de archivos mediante `xfs_growfs`, pero no permite la reduccion. Si se necesita reducir una particion XFS, la unica opcion es respaldar los datos, crear un sistema de archivos nuevo mas pequeño y restaurar. Ademas, `xfs_growfs` requiere que el sistema de archivos este montado.

</details>

</div>

---

<div class="exam-question" data-id="q-21" data-subtema="201.2" data-correct="b">

### Pregunta 21 (Subtema 201.2)

¿Que funcion cumple DKMS en la gestion del kernel?

- [ ] a) Detecta automaticamente hardware nuevo al arrancar
- [ ] b) Recompila automaticamente modulos de terceros cuando se instala un nuevo kernel
- [ ] c) Gestiona las versiones del bootloader GRUB
- [ ] d) Comprime automaticamente la imagen del kernel

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Recompila automaticamente modulos de terceros cuando se instala un nuevo kernel**

DKMS (Dynamic Kernel Module Support) mantiene el codigo fuente de modulos de terceros (como drivers de NVIDIA, VirtualBox, etc.) y los recompila automaticamente cuando se instala una nueva version del kernel. Sin DKMS, estos modulos dejarian de funcionar despues de cada actualizacion del kernel.

</details>

</div>

---

<div class="exam-question" data-id="q-22" data-subtema="204.2" data-correct="c">

### Pregunta 22 (Subtema 204.2)

Que comando de dmsetup permite ver la tabla de mapeo de los dispositivos device-mapper?

- [ ] a) `dmsetup ls`
- [ ] b) `dmsetup info`
- [ ] c) `dmsetup table`
- [ ] d) `dmsetup map`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `dmsetup table`**

El comando `dmsetup table` muestra la tabla de mapeo de cada dispositivo device-mapper, que describe como se traducen los sectores logicos a fisicos. `dmsetup ls` lista los nombres, `dmsetup info` muestra metadatos generales (estado, numero mayor/menor), y `dmsetup map` no es un subcomando valido.

</details>

</div>

---

<div class="exam-question" data-id="q-23" data-subtema="203.2" data-correct="b">

### Pregunta 23 (Subtema 203.2)

Un administrador quiere verificar el estado de salud de un disco duro de forma rapida usando SMART. ¿Que comando es el mas adecuado?

- [ ] a) `smartctl -a /dev/sda`
- [ ] b) `smartctl -H /dev/sda`
- [ ] c) `smartctl -t short /dev/sda`
- [ ] d) `smartctl -A /dev/sda`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `smartctl -H /dev/sda`**

`smartctl -H` (Health) muestra de forma rapida el estado de salud general del disco, reportando "PASSED" o "FAILED". Es la forma mas directa de verificar si el disco esta en buen estado. La opcion `-a` muestra toda la informacion disponible (mas verbosa), `-t short` ejecuta un test que tarda varios minutos, y `-A` muestra los atributos sin el veredicto de salud resumido.

</details>

</div>

---

<div class="exam-question" data-id="q-24" data-subtema="200.2" data-correct="c">

### Pregunta 24 (Subtema 200.2)

¿Que herramienta almacena datos en formato RRD (Round Robin Database) y se usa comumente para generar graficos de tendencias a largo plazo?

- [ ] a) sar
- [ ] b) vmstat
- [ ] c) collectd
- [ ] d) top

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) collectd**

`collectd` es un demonio que recopila metricas del sistema periodicamente y las puede almacenar en bases de datos RRD. Los archivos RRD tienen la ventaja de mantener un tamano fijo independientemente del tiempo de recopilacion, ya que rotan los datos mas antiguos con menor granularidad. `sar` usa su propio formato binario, y `vmstat`/`top` no almacenan datos.

</details>

</div>

---

<div class="exam-question" data-id="q-25" data-subtema="203.1" data-correct="b">

### Pregunta 25 (Subtema 203.1)

¿Que opcion de montaje en `/etc/fstab` permite que cualquier usuario pueda montar el sistema de archivos, pero solo el usuario que lo monto pueda desmontarlo?

- [ ] a) `users`
- [ ] b) `user`
- [ ] c) `nouser`
- [ ] d) `owner`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `user`**

La opcion `user` permite que cualquier usuario monte el sistema de archivos, pero solo el usuario que realizo el montaje (o root) puede desmontarlo. Ademas, implica automaticamente `noexec`, `nosuid` y `nodev`. La opcion `users` permite que cualquier usuario pueda montar Y desmontar el sistema de archivos, sin importar quien lo monto. `nouser` (por defecto) solo permite a root montar.

</details>

</div>

---

<div class="exam-question" data-id="q-26" data-subtema="202.2" data-correct="b">

### Pregunta 26 (Subtema 202.2)

¿Cual es el comando correcto para reinstalar GRUB en un sistema UEFI despues de hacer chroot desde un Live CD?

- [ ] a) `grub-install /dev/sda`
- [ ] b) `grub-install --target=x86_64-efi --efi-directory=/boot/efi`
- [ ] c) `grub-install --force /dev/sda1`
- [ ] d) `dd if=grub.img of=/dev/sda bs=512 count=1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `grub-install --target=x86_64-efi --efi-directory=/boot/efi`**

En sistemas UEFI, `grub-install` necesita los parametros `--target=x86_64-efi` para especificar la plataforma y `--efi-directory` para indicar donde esta montada la particion EFI (normalmente `/boot/efi`). La opcion a) es para sistemas BIOS/MBR. La opcion d) no tiene sentido para UEFI ya que no utiliza MBR.

</details>

</div>

---

<div class="exam-question" data-id="q-27" data-subtema="204.3" data-correct="b">

### Pregunta 27 (Subtema 204.3)

Un administrador quiere ampliar un volumen logico con ext4 en 10 GB sin desmontar el sistema de archivos. Cual es el comando mas eficiente?

- [ ] a) `lvextend -L +10G /dev/vg_datos/lv_home && resize2fs /dev/vg_datos/lv_home`
- [ ] b) `lvextend -r -L +10G /dev/vg_datos/lv_home`
- [ ] c) `resize2fs /dev/vg_datos/lv_home +10G && lvextend -L +10G /dev/vg_datos/lv_home`
- [ ] d) `lvresize -L 10G /dev/vg_datos/lv_home`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `lvextend -r -L +10G /dev/vg_datos/lv_home`**

La opcion `-r` (o `--resizefs`) de `lvextend` redimensiona automaticamente el sistema de archivos despues de ampliar el LV, en un solo paso. La opcion a) tambien funciona pero requiere dos comandos. La opcion c) tiene el orden invertido (nunca se debe ampliar el FS antes que el LV). La opcion d) establece el tamano total a 10G en lugar de agregar 10G.

</details>

</div>

---

<div class="exam-question" data-id="q-28" data-subtema="205.2" data-correct="b">

### Pregunta 28 (Subtema 205.2)

En el contexto de policy routing, que hace el comando `ip rule add from 10.0.1.0/24 table custom`?

- [ ] a) Agrega una ruta hacia 10.0.1.0/24 en la tabla custom
- [ ] b) Indica que el trafico originado en 10.0.1.0/24 use la tabla de enrutamiento custom
- [ ] c) Bloquea el trafico de 10.0.1.0/24
- [ ] d) Crea una nueva tabla de enrutamiento llamada custom

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Indica que el trafico originado en 10.0.1.0/24 use la tabla de enrutamiento custom**

Las reglas de politica (`ip rule`) determinan que tabla de enrutamiento se consulta para cada paquete. Esta regla establece que todo trafico con IP de origen en la red 10.0.1.0/24 sea enrutado usando la tabla "custom" en lugar de la tabla "main" por defecto. Esto permite tener diferentes gateways para diferentes redes de origen.

</details>

</div>

---

<div class="exam-question" data-id="q-29" data-subtema="200.2" data-correct="b">

### Pregunta 29 (Subtema 200.2)

Un servidor tiene una particion `/data` de 500 GB. En los ultimos 4 meses, el uso ha crecido de 200 GB a 320 GB. Suponiendo un crecimiento lineal, ¿en cuantos meses aproximadamente se llenara la particion al 80%?

- [ ] a) 2 meses
- [ ] b) 3 meses
- [ ] c) 6 meses
- [ ] d) 10 meses

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) 3 meses**

Crecimiento mensual: (320 - 200) / 4 = 30 GB/mes. El umbral del 80% es 400 GB. Espacio hasta el umbral: 400 - 320 = 80 GB. Meses restantes: 80 / 30 = 2.67, es decir aproximadamente 3 meses.

</details>

</div>

---

<div class="exam-question" data-id="q-30" data-subtema="202.1" data-correct="b">

### Pregunta 30 (Subtema 202.1)

¿Cual es la diferencia principal entre `rescue.target` y `emergency.target` en systemd?

- [ ] a) `rescue.target` no monta sistemas de archivos; `emergency.target` si
- [ ] b) `rescue.target` monta sistemas de archivos y ejecuta servicios basicos; `emergency.target` solo monta raiz en solo lectura
- [ ] c) Son identicos, solo cambia el nombre
- [ ] d) `emergency.target` requiere contrasena de root; `rescue.target` no

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `rescue.target` monta sistemas de archivos y ejecuta servicios basicos; `emergency.target` solo monta raiz en solo lectura**

`rescue.target` (equivalente al runlevel 1) monta todos los sistemas de archivos de `/etc/fstab` e inicia algunos servicios basicos. `emergency.target` es mucho mas minimalista: solo monta el sistema de archivos raiz en modo solo lectura y no inicia practicamente ningun servicio, proporcionando el entorno minimo posible para reparaciones.

</details>

</div>

---

<div class="exam-question" data-id="q-31" data-subtema="203.3" data-correct="c">

### Pregunta 31 (Subtema 203.3)

¿Cual de las siguientes afirmaciones sobre tmpfs es correcta?

- [ ] a) tmpfs asigna un bloque fijo de RAM al crearse, independientemente del uso real
- [ ] b) tmpfs solo usa RAM, nunca utiliza el espacio swap
- [ ] c) tmpfs crece dinamicamente y puede usar swap si la RAM se llena
- [ ] d) tmpfs persiste sus datos entre reinicios del sistema

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) tmpfs crece dinamicamente y puede usar swap si la RAM se llena**

tmpfs es un sistema de archivos que almacena datos en memoria virtual, lo que incluye tanto RAM como swap. No asigna un bloque fijo; solo consume la memoria que realmente necesita y la libera cuando los archivos se eliminan. Si la RAM disponible se agota, los datos de tmpfs pueden moverse al swap. El parametro `size=` define un limite maximo, no una preasignacion. Los datos se pierden al reiniciar. `ramfs`, a diferencia de tmpfs, no usa swap y no tiene limite de tamano.

</details>

</div>

---

<div class="exam-question" data-id="q-32" data-subtema="205.2" data-correct="b">

### Pregunta 32 (Subtema 205.2)

En que archivo se definen las tablas de enrutamiento personalizadas para su uso con policy routing?

- [ ] a) `/etc/sysctl.conf`
- [ ] b) `/etc/iproute2/rt_tables`
- [ ] c) `/etc/routing/tables.conf`
- [ ] d) `/proc/net/rt_tables`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/iproute2/rt_tables`**

El archivo `/etc/iproute2/rt_tables` mapea numeros de tabla a nombres simbolicos. Las tablas predeterminadas son: 255 (local), 254 (main) y 253 (default). Para crear una tabla personalizada, se agrega una linea como `100 nombre_tabla`. Luego se pueden agregar rutas a esa tabla con `ip route add ... table nombre_tabla`.

</details>

</div>

---

<div class="exam-question" data-id="q-33" data-subtema="201.3" data-correct="c">

### Pregunta 33 (Subtema 201.3)

Un administrador necesita diagnosticar por que un dispositivo USB no es reconocido. ¿Que comando es el mas apropiado para ver los mensajes del kernel relacionados?

- [ ] a) `sysctl -a | grep usb`
- [ ] b) `modinfo usb`
- [ ] c) `dmesg -T | grep -i usb`
- [ ] d) `cat /etc/modprobe.d/usb.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `dmesg -T | grep -i usb`**

`dmesg` muestra el buffer de anillo del kernel que contiene mensajes sobre deteccion de hardware, carga de drivers y errores. La opcion `-T` muestra marcas de tiempo legibles. Filtrar con `grep -i usb` muestra solo los mensajes relacionados con dispositivos USB, facilitando el diagnostico.

</details>

</div>

---

<div class="exam-question" data-id="q-34" data-subtema="205.3" data-correct="b">

### Pregunta 34 (Subtema 205.3)

Que comando muestra los puertos TCP que estan en modo escucha junto con el proceso propietario?

- [ ] a) `ss -ulnp`
- [ ] b) `ss -tlnp`
- [ ] c) `ss -tanp`
- [ ] d) `ss -s`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ss -tlnp`**

Las opciones significan: `-t` (TCP), `-l` (listening/escucha), `-n` (numerico, sin resolver nombres), `-p` (mostrar proceso). La opcion a) mostraria UDP (`-u`), la opcion c) mostraria todas las conexiones TCP (`-a` incluye establecidas y en escucha), y la opcion d) muestra un resumen de estadisticas.

</details>

</div>

---

<div class="exam-question" data-id="q-35" data-subtema="202.3" data-correct="b">

### Pregunta 35 (Subtema 202.3)

¿Que componente se utiliza en la cadena de arranque Secure Boot para permitir que cargadores no firmados directamente por Microsoft puedan ejecutarse?

- [ ] a) `grubx64.efi`
- [ ] b) `shimx64.efi`
- [ ] c) `bootx64.efi`
- [ ] d) `mokutil`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `shimx64.efi`**

`shim` es un cargador de primera etapa firmado por Microsoft que actua como intermediario en la cadena de confianza de Secure Boot. Shim verifica la firma de GRUB (u otro cargador de segunda etapa) usando las claves de la distribucion o las MOK (Machine Owner Keys). Esto permite que distribuciones Linux funcionen con Secure Boot activo sin necesitar que cada version de GRUB este firmada directamente por Microsoft.

</details>

</div>

---

<div class="exam-question" data-id="q-36" data-subtema="203.1" data-correct="b">

### Pregunta 36 (Subtema 203.1)

En el archivo `/etc/fstab`, ¿que valor debe tener el campo "pass" (sexto campo) para la particion raiz (`/`)?

- [ ] a) 0
- [ ] b) 1
- [ ] c) 2
- [ ] d) 3

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) 1**

El campo "pass" determina el orden en que `fsck` verifica los sistemas de archivos durante el arranque. El valor `1` esta reservado exclusivamente para la particion raiz, que se verifica primero. El valor `2` se usa para el resto de particiones (verificadas despues de la raiz). El valor `0` desactiva la verificacion para esa particion.

</details>

</div>

---

<div class="exam-question" data-id="q-37" data-subtema="205.2" data-correct="b">

### Pregunta 37 (Subtema 205.2)

Que comando crea un tunel GRE con IP remota 203.0.113.1 e IP local 198.51.100.1?

- [ ] a) `ip link add gre1 type gre remote 203.0.113.1 local 198.51.100.1`
- [ ] b) `ip tunnel add gre1 mode gre remote 203.0.113.1 local 198.51.100.1`
- [ ] c) `ip route add tunnel gre remote 203.0.113.1 local 198.51.100.1`
- [ ] d) `iptunnel create gre1 203.0.113.1 198.51.100.1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `ip tunnel add gre1 mode gre remote 203.0.113.1 local 198.51.100.1`**

El comando `ip tunnel add` crea un tunel especificando el nombre (`gre1`), el modo (`gre`), la IP remota del otro extremo (`remote`) y la IP local de este extremo (`local`). Tras crearlo, se necesita asignar una IP al tunel y activarlo con `ip link set gre1 up`. La opcion a) tambien podria funcionar en versiones recientes pero la forma canonica es `ip tunnel add`.

</details>

</div>

---

<div class="exam-question" data-id="q-38" data-subtema="204.3" data-correct="b">

### Pregunta 38 (Subtema 204.3)

Un administrador necesita agregar un nuevo disco `/dev/sde1` a un grupo de volumenes existente llamado `vg_produccion`. Que secuencia de comandos es correcta?

- [ ] a) `vgextend vg_produccion /dev/sde1`
- [ ] b) `pvcreate /dev/sde1 && vgextend vg_produccion /dev/sde1`
- [ ] c) `vgadd vg_produccion /dev/sde1`
- [ ] d) `pvcreate /dev/sde1 && vgcreate vg_produccion /dev/sde1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `pvcreate /dev/sde1 && vgextend vg_produccion /dev/sde1`**

Primero se debe inicializar el disco como volumen fisico con `pvcreate`, y luego agregarlo al VG existente con `vgextend`. Nota: en versiones recientes de LVM, `vgextend` puede ejecutar implicitamente `pvcreate`, pero la secuencia explicita es la practica recomendada y la que se espera en el examen. La opcion d) crearia un nuevo VG en lugar de extender el existente.

</details>

</div>

---

<div class="exam-question" data-id="q-39" data-subtema="203.2" data-correct="b">

### Pregunta 39 (Subtema 203.2)

¿Que comando muestra informacion detallada del superbloque de un sistema de archivos ext4, incluyendo el numero de bloques, inodos y la ultima fecha de verificacion?

- [ ] a) `tune2fs -l /dev/sda1`
- [ ] b) `dumpe2fs -h /dev/sda1`
- [ ] c) `e2fsck -n /dev/sda1`
- [ ] d) `xfs_info /dev/sda1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dumpe2fs -h /dev/sda1`**

`dumpe2fs -h` muestra la informacion del superbloque sin listar los descriptores de grupo, incluyendo UUID, etiqueta, conteo de bloques e inodos, tamano de bloque, estado del FS, conteo de montajes, fechas de verificacion y caracteristicas habilitadas. `tune2fs -l` tambien muestra informacion similar. `e2fsck -n` verifica sin reparar pero no esta diseñado para mostrar informacion del superbloque. `xfs_info` es para XFS.

</details>

</div>

---

<div class="exam-question" data-id="q-40" data-subtema="202.3" data-correct="a">

### Pregunta 40 (Subtema 202.3)

En U-Boot, ¿que comando se utiliza para guardar de forma persistente las variables de entorno modificadas con `setenv`?

- [ ] a) `saveenv`
- [ ] b) `export`
- [ ] c) `env save`
- [ ] d) `persist`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**a) `saveenv`**

En la consola interactiva de U-Boot, `saveenv` guarda todas las variables de entorno actuales de forma persistente (normalmente en flash o en una particion reservada). Las variables se modifican con `setenv` (por ejemplo, `setenv bootargs "root=/dev/mmcblk0p2 rw"`), pero los cambios no sobreviven un reinicio hasta que se ejecuta `saveenv`. El comando `printenv` muestra las variables actuales.

</details>

</div>

---

<div class="exam-question" data-id="q-41" data-subtema="202.1" data-correct="b">

### Pregunta 41 (Subtema 202.1)

Un administrador quiere que GRUB recuerde la ultima entrada seleccionada y la use como defecto en el siguiente arranque. ¿Que configuracion debe establecer en `/etc/default/grub`?

- [ ] a) `GRUB_DEFAULT=last`
- [ ] b) `GRUB_DEFAULT=saved` y `GRUB_SAVEDEFAULT=true`
- [ ] c) `GRUB_REMEMBER=true`
- [ ] d) `GRUB_DEFAULT=remember`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `GRUB_DEFAULT=saved` y `GRUB_SAVEDEFAULT=true`**

Para que GRUB recuerde la ultima entrada seleccionada, se necesitan dos configuraciones: `GRUB_DEFAULT=saved` indica que se use la entrada guardada, y `GRUB_SAVEDEFAULT=true` hace que GRUB guarde la seleccion del usuario. Tambien se puede usar `grub-set-default` o `grub-reboot` para establecer la entrada de forma manual.

</details>

</div>

---

<div class="exam-question" data-id="q-42" data-subtema="203.2" data-correct="b">

### Pregunta 42 (Subtema 203.2)

Un administrador configura `smartd` para monitorizar discos. ¿En que archivo se define la configuracion del demonio?

- [ ] a) `/etc/smart.conf`
- [ ] b) `/etc/smartd.conf`
- [ ] c) `/etc/smartctl.conf`
- [ ] d) `/etc/sysconfig/smartd`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/etc/smartd.conf`**

El archivo `/etc/smartd.conf` contiene la configuracion del demonio `smartd`. En este archivo se especifican los discos a monitorizar, las direcciones de correo para alertas y la programacion de tests automaticos. La directiva `DEVICESCAN` puede usarse para monitorizar automaticamente todos los discos detectados. Tras modificar el archivo, se debe reiniciar el servicio con `systemctl restart smartd`.

</details>

</div>

---

<div class="exam-question" data-id="q-43" data-subtema="202.2" data-correct="b">

### Pregunta 43 (Subtema 202.2)

¿Cuales son los sistemas de archivos virtuales que DEBEN montarse antes de ejecutar `chroot` para que herramientas como `grub-install` funcionen correctamente?

- [ ] a) `/tmp`, `/var`, `/home`
- [ ] b) `/dev`, `/proc`, `/sys`
- [ ] c) `/boot`, `/etc`, `/usr`
- [ ] d) `/run`, `/tmp`, `/opt`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/dev`, `/proc`, `/sys`**

Los sistemas de archivos virtuales `/dev` (dispositivos), `/proc` (informacion del kernel y procesos) y `/sys` (informacion del hardware y kernel) son esenciales para que muchas herramientas del sistema funcionen correctamente dentro del entorno chroot. Sin ellos, comandos como `grub-install`, `mount` y otros no podran interactuar con el hardware ni con el kernel. Tambien es recomendable montar `/dev/pts` y `/run`.

</details>

</div>

---

<div class="exam-question" data-id="q-44" data-subtema="202.1" data-correct="c">

### Pregunta 44 (Subtema 202.1)

Para que el journal de systemd mantenga logs persistentes entre reinicios, ¿que condicion debe cumplirse?

- [ ] a) Instalar el paquete `rsyslog`
- [ ] b) Configurar `Storage=volatile` en `/etc/systemd/journald.conf`
- [ ] c) Que exista el directorio `/var/log/journal/` o configurar `Storage=persistent` en `journald.conf`
- [ ] d) Ejecutar `systemctl enable systemd-journald-persistent`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) Que exista el directorio `/var/log/journal/` o configurar `Storage=persistent` en `journald.conf`**

Por defecto, el valor de `Storage` es `auto`, lo que significa que si existe `/var/log/journal/`, los logs se guardan de forma persistente. Si no existe, se almacenan en `/run/log/journal/` (volatil). Alternativamente, establecer `Storage=persistent` en `/etc/systemd/journald.conf` crea automaticamente el directorio y fuerza el almacenamiento persistente.

</details>

</div>

---

<div class="exam-question" data-id="q-45" data-subtema="205.1" data-correct="b">

### Pregunta 45 (Subtema 205.1)

Que modo de bonding proporciona failover activo-pasivo sin requerir configuracion especial en el switch?

- [ ] a) mode=0 (balance-rr)
- [ ] b) mode=1 (active-backup)
- [ ] c) mode=4 (802.3ad)
- [ ] d) mode=3 (broadcast)

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) mode=1 (active-backup)**

El modo 1 (active-backup) mantiene solo una interfaz activa a la vez. Si la interfaz activa falla, otra esclava toma el control automaticamente. No requiere ninguna configuracion especial en el switch de red, lo que lo hace el modo mas sencillo de implementar. El modo 4 (802.3ad/LACP) requiere soporte del switch para agregacion de enlaces.

</details>

</div>

---

<div class="exam-question" data-id="q-46" data-subtema="202.2" data-correct="b">

### Pregunta 46 (Subtema 202.2)

Un administrador quiere respaldar solo el codigo del bootloader del MBR sin incluir la tabla de particiones. ¿Que comando dd es correcto?

- [ ] a) `dd if=/dev/sda of=mbr.img bs=512 count=1`
- [ ] b) `dd if=/dev/sda of=bootloader.img bs=446 count=1`
- [ ] c) `dd if=/dev/sda of=bootloader.img bs=64 count=1`
- [ ] d) `dd if=/dev/sda of=mbr.img bs=510 count=1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dd if=/dev/sda of=bootloader.img bs=446 count=1`**

El codigo del bootloader ocupa los primeros 446 bytes del MBR. Los siguientes 64 bytes contienen la tabla de particiones, y los ultimos 2 bytes son la firma de arranque (0x55AA). Al usar `bs=446 count=1`, se copian exactamente los 446 bytes del bootloader sin tocar la tabla de particiones. La opcion a) copia los 512 bytes completos del MBR, incluyendo la tabla de particiones.

</details>

</div>

---

<div class="exam-question" data-id="q-47" data-subtema="201.3" data-correct="b">

### Pregunta 47 (Subtema 201.3)

Un administrador quiere configurar el modulo `snd_hda_intel` para que siempre se cargue con el parametro `power_save=1`. ¿Donde y como debe configurarlo?

- [ ] a) Editar `/proc/sys/kernel/modules/snd_hda_intel/power_save`
- [ ] b) Crear un archivo en `/etc/modprobe.d/` con la linea `options snd_hda_intel power_save=1`
- [ ] c) Editar `/lib/modules/$(uname -r)/kernel/sound/pci/hda/snd_hda_intel.ko`
- [ ] d) Agregar `snd_hda_intel.power_save=1` en `/etc/sysctl.conf`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Crear un archivo en `/etc/modprobe.d/` con la linea `options snd_hda_intel power_save=1`**

La directiva `options` en archivos de `/etc/modprobe.d/` permite definir parametros que se aplican automaticamente cada vez que se carga un modulo con `modprobe`. Por ejemplo, crear `/etc/modprobe.d/snd_hda_intel.conf` con `options snd_hda_intel power_save=1`. Los parametros de modulos no se gestionan con `sysctl`, que es para parametros del kernel en `/proc/sys/`.

</details>

</div>

---

<div class="exam-question" data-id="q-48" data-subtema="205.1" data-correct="b">

### Pregunta 48 (Subtema 205.1)

Un administrador ejecuta `ip route add 10.0.0.0/8 via 192.168.1.254`. Que efecto tiene este comando?

- [ ] a) Cambia la puerta de enlace predeterminada a 192.168.1.254
- [ ] b) Agrega una ruta para alcanzar la red 10.0.0.0/8 a traves del gateway 192.168.1.254
- [ ] c) Crea un tunel hacia la red 10.0.0.0/8
- [ ] d) Asigna la direccion 10.0.0.0 a la interfaz con IP 192.168.1.254

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Agrega una ruta para alcanzar la red 10.0.0.0/8 a traves del gateway 192.168.1.254**

El comando agrega una ruta estatica a la tabla de enrutamiento, indicando que todo el trafico destinado a la red 10.0.0.0/8 (direcciones 10.x.x.x) debe enviarse al router 192.168.1.254. Esta ruta es temporal (se pierde al reiniciar) a menos que se persista en los archivos de configuracion de red.

</details>

</div>

---

<div class="exam-question" data-id="q-49" data-subtema="201.1" data-correct="b">

### Pregunta 49 (Subtema 201.1)

¿Cual es la principal diferencia entre `bzImage` y `zImage` como formatos de imagen del kernel?

- [ ] a) `bzImage` esta comprimido con bzip2 y `zImage` con gzip
- [ ] b) `bzImage` puede cargarse en memoria alta (por encima de 1 MB), mientras que `zImage` esta limitado a los primeros 640 KB
- [ ] c) `bzImage` es para arquitectura de 64 bits y `zImage` para 32 bits
- [ ] d) `bzImage` incluye modulos y `zImage` no

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `bzImage` puede cargarse en memoria alta (por encima de 1 MB), mientras que `zImage` esta limitado a los primeros 640 KB**

La "b" en `bzImage` significa "big", refiriendose a que puede usar memoria alta, eliminando la restriccion de 640 KB de `zImage`. Ambos formatos usan el mismo tipo de compresion. `bzImage` es el formato estandar para kernels modernos en arquitectura x86.

</details>

</div>

---

<div class="exam-question" data-id="q-50" data-subtema="202.3" data-correct="b">

### Pregunta 50 (Subtema 202.3)

¿Donde se almacenan las entradas de arranque individuales de systemd-boot?

- [ ] a) `/etc/systemd/boot.conf`
- [ ] b) `/boot/loader/entries/*.conf`
- [ ] c) `/boot/grub/grub.cfg`
- [ ] d) `/etc/default/bootloader`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `/boot/loader/entries/*.conf`**

systemd-boot almacena cada entrada de arranque como un archivo `.conf` individual en el directorio `/boot/loader/entries/`. La configuracion principal del cargador (timeout, entrada por defecto) se encuentra en `/boot/loader/loader.conf`. Cada archivo de entrada contiene directivas como `title`, `linux`, `initrd` y `options`.

</details>

</div>

---

<div class="exam-question" data-id="q-51" data-subtema="202.3" data-correct="c">

### Pregunta 51 (Subtema 202.3)

Un administrador necesita crear un USB arrancable con SYSLINUX. ¿Que sistema de archivos debe tener la particion USB?

- [ ] a) ext4
- [ ] b) NTFS
- [ ] c) FAT (FAT12/FAT16/FAT32)
- [ ] d) XFS

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) FAT (FAT12/FAT16/FAT32)**

SYSLINUX esta diseñado especificamente para funcionar con sistemas de archivos FAT. Para arrancar desde ext2/3/4 o btrfs se utilizaria EXTLINUX, que es otra variante de la misma familia. Para medios opticos con ISO 9660 se utiliza ISOLINUX.

</details>

</div>

---

<div class="exam-question" data-id="q-52" data-subtema="205.2" data-correct="b">

### Pregunta 52 (Subtema 205.2)

Cual de las siguientes afirmaciones sobre las direcciones IPv6 link-local es correcta?

- [ ] a) Son enrutables a traves de Internet
- [ ] b) Comienzan con el prefijo fe80:: y se configuran automaticamente en cada interfaz
- [ ] c) Solo se asignan manualmente por el administrador
- [ ] d) Son equivalentes a las direcciones de broadcast en IPv4

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) Comienzan con el prefijo fe80:: y se configuran automaticamente en cada interfaz**

Las direcciones link-local (fe80::/10) se generan automaticamente en cada interfaz de red IPv6 habilitada, sin necesidad de configuracion manual ni servidor DHCP. Son validas unicamente en el segmento de red local (no enrutables). Son esenciales para el funcionamiento de NDP (Neighbor Discovery Protocol) y la comunicacion local.

</details>

</div>

---

<div class="exam-question" data-id="q-53" data-subtema="204.1" data-correct="b">

### Pregunta 53 (Subtema 204.1)

Que comando permite expandir un array RAID 5 de 3 a 4 discos?

- [ ] a) `mdadm --add /dev/md0 /dev/sde1`
- [ ] b) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`
- [ ] c) `mdadm --extend /dev/md0 --devices=4 /dev/sde1`
- [ ] d) `mdadm --create /dev/md0 --level=5 --raid-devices=4 /dev/sdb1 /dev/sdc1 /dev/sdd1 /dev/sde1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `mdadm --grow /dev/md0 --raid-devices=4 --add /dev/sde1`**

La opcion `--grow` de mdadm permite modificar un array existente. Se usa junto con `--raid-devices=4` para indicar el nuevo numero de discos activos y `--add` para agregar el nuevo disco. Despues de completar el crecimiento, es necesario redimensionar el sistema de archivos con `resize2fs` o `xfs_growfs`.

</details>

</div>

---

<div class="exam-question" data-id="q-54" data-subtema="203.1" data-correct="c">

### Pregunta 54 (Subtema 203.1)

¿Que herramienta es la mas adecuada para obtener el UUID de una particion que se necesita para configurar en `/etc/fstab`?

- [ ] a) `fdisk -l`
- [ ] b) `lsblk`
- [ ] c) `blkid`
- [ ] d) `df -h`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**c) `blkid`**

`blkid` es la herramienta principal para obtener los atributos de dispositivos de bloque, incluyendo UUID, etiqueta (LABEL) y tipo de sistema de archivos. Aunque `lsblk -f` tambien puede mostrar UUIDs, `blkid` es la herramienta especificamente diseñada para este proposito. `fdisk -l` muestra la tabla de particiones pero no UUIDs, y `df -h` muestra el uso del espacio en disco.

</details>

</div>

---

<div class="exam-question" data-id="q-55" data-subtema="203.2" data-correct="b">

### Pregunta 55 (Subtema 203.2)

¿Que comando agrega un journal a un sistema de archivos ext2, convirtiendolo efectivamente en ext3?

- [ ] a) `mkfs.ext3 /dev/sda1`
- [ ] b) `tune2fs -j /dev/sda1`
- [ ] c) `e2fsck -j /dev/sda1`
- [ ] d) `resize2fs -j /dev/sda1`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `tune2fs -j /dev/sda1`**

`tune2fs -j` agrega un journal a un sistema de archivos ext2 existente, convirtiendolo en ext3 sin destruir los datos. Esta es una forma no destructiva de actualizar el sistema de archivos. La opcion a) `mkfs.ext3` crearia un nuevo sistema de archivos desde cero, destruyendo todos los datos existentes.

</details>

</div>

---

<div class="exam-question" data-id="q-56" data-subtema="201.1" data-correct="b">

### Pregunta 56 (Subtema 201.1)

Un administrador quiere copiar la configuracion del kernel en ejecucion para usarla como base en una nueva compilacion. ¿Cual de los siguientes comandos es apropiado?

- [ ] a) `cp /proc/kernel/.config /usr/src/linux/.config`
- [ ] b) `cp /boot/config-$(uname -r) /usr/src/linux/.config`
- [ ] c) `uname --config > /usr/src/linux/.config`
- [ ] d) `sysctl -export > /usr/src/linux/.config`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `cp /boot/config-$(uname -r) /usr/src/linux/.config`**

La configuracion del kernel en ejecucion se almacena en `/boot/config-<version>`. Usando `$(uname -r)` se obtiene la version actual automaticamente. Alternativamente, si el kernel fue compilado con `CONFIG_IKCONFIG_PROC`, se puede usar `zcat /proc/config.gz > /usr/src/linux/.config`.

</details>

</div>

---

<div class="exam-question" data-id="q-57" data-subtema="204.2" data-correct="b">

### Pregunta 57 (Subtema 204.2)

Que comando muestra el estado detallado de los dispositivos multipath incluyendo todas las rutas?

- [ ] a) `multipath -l`
- [ ] b) `multipath -ll`
- [ ] c) `multipath -v0`
- [ ] d) `multipathd status`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `multipath -ll`**

El comando `multipath -ll` (doble L) muestra informacion detallada de todos los dispositivos multipath, incluyendo cada ruta individual, su estado (active/faulty), la politica de balanceo y los grupos de rutas. El comando `multipath -l` (una sola L) muestra informacion menos detallada.

</details>

</div>

---

<div class="exam-question" data-id="q-58" data-subtema="202.1" data-correct="b">

### Pregunta 58 (Subtema 202.1)

Un administrador ha modificado el archivo `/etc/default/grub` para cambiar el tiempo de espera del menu. ¿Que comando debe ejecutar para que los cambios surtan efecto?

- [ ] a) `grub-update`
- [ ] b) `grub-mkconfig -o /boot/grub/grub.cfg`
- [ ] c) `grub-install /dev/sda`
- [ ] d) `systemctl restart grub`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `grub-mkconfig -o /boot/grub/grub.cfg`**

Despues de modificar `/etc/default/grub`, es necesario regenerar el archivo `grub.cfg` ejecutando `grub-mkconfig` con la opcion `-o` para especificar el archivo de salida. El comando `grub-install` se usa para instalar los archivos de GRUB en el disco, no para actualizar la configuracion. No existe `grub-update` como comando estandar (en Debian existe `update-grub` como wrapper).

</details>

</div>

---

<div class="exam-question" data-id="q-59" data-subtema="205.3" data-correct="b">

### Pregunta 59 (Subtema 205.3)

Un administrador necesita trazar la cadena completa de resolucion DNS de un dominio, desde los servidores raiz hasta el servidor autoritativo. Que comando debe usar?

- [ ] a) `dig +recurse ejemplo.com`
- [ ] b) `dig +trace ejemplo.com`
- [ ] c) `nslookup -debug ejemplo.com`
- [ ] d) `host -a ejemplo.com`

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) `dig +trace ejemplo.com`**

La opcion `+trace` de dig realiza consultas iterativas empezando por los servidores raiz DNS (.), pasando por los servidores TLD (.com), hasta llegar al servidor autoritativo del dominio. Muestra cada paso de la cadena de delegacion, lo que es invaluable para diagnosticar problemas de resolucion DNS como delegaciones incorrectas o servidores autoritativos no respondiendo.

</details>

</div>

---

<div class="exam-question" data-id="q-60" data-subtema="204.1" data-correct="b">

### Pregunta 60 (Subtema 204.1)

Cual es el numero minimo de discos necesarios para crear un array RAID 5?

- [ ] a) 2
- [ ] b) 3
- [ ] c) 4
- [ ] d) 5

<details class="exam-answer">
<summary>Ver respuesta</summary>

**b) 3**

RAID 5 requiere un minimo de 3 discos porque necesita distribuir los datos y la paridad entre al menos tres dispositivos. Con dos discos no seria posible implementar el esquema de paridad distribuida que caracteriza a RAID 5.

</details>

</div>

---

<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
