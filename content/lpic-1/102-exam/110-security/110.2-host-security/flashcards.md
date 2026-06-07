---
title: "110.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "110.2"
---

# Flashcards: 110.2 - Seguridad Del Host

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-001">
<div class="flashcard-front">

**P:** Por que existen las shadow passwords en Linux?

</div>
<div class="flashcard-back">

**R:** b) Para separar los hashes de contrasenas del archivo `/etc/passwd` que es legible por todos los usuarios. Shadow passwords resuelven el problema de que `/etc/passwd` tiene permisos 644 (legible por todos). Originalmente, este archivo contenia los hashes de contrasenas, lo que permitia a cualquier usuario copiarlos y hacer ataques de fuerza bruta offline. Con shadow passwords, los hashes se mueven a `/etc/shadow` que solo es legible por root (permisos 640 o 000), mientras que `/etc/passwd` muestra una `x` en el campo de contrasena.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-002">
<div class="flashcard-front">

**P:** En TCP Wrappers, si `/etc/hosts.allow` contiene `sshd: 192.168.1.0/24` y `/etc/hosts.deny` contiene `ALL: ALL`, puede conectarse por SSH un equipo con IP 10.0.0.5?

</div>
<div class="flashcard-back">

**R:** b) No, porque la IP no esta en la red permitida en `/etc/hosts.allow` y la regla en `/etc/hosts.deny` deniega todo lo demas. El orden de evaluacion de TCP Wrappers es: 1) Se consulta primero `/etc/hosts.allow`, 2) Si hay coincidencia se permite, 3) Si no hay coincidencia se consulta `/etc/hosts.deny`, 4) Si hay coincidencia se deniega, 5) Si no hay coincidencia en ninguno se permite por defecto. La IP 10.0.0.5 no coincide con 192.168.1.0/24 en hosts.allow, y la regla `ALL: ALL` en hosts.deny la deniega.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-003">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `systemctl disable` y `systemctl mask` para un servicio?

</div>
<div class="flashcard-back">

**R:** b) `disable` evita que inicie al arrancar pero permite inicio manual, y `mask` bloquea completamente cualquier inicio. `systemctl disable` elimina los enlaces simbolicos de arranque, por lo que el servicio no inicia automaticamente pero aun se puede iniciar manualmente con `systemctl start`. `systemctl mask` crea un enlace simbolico a `/dev/null`, haciendo imposible iniciar el servicio de cualquier forma (ni manual ni automaticamente). Para la maxima seguridad se usa `systemctl stop servicio && systemctl mask servicio`. Para revertir: `systemctl unmask servicio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-004">
<div class="flashcard-front">

**P:** Que ocurre cuando existe el archivo `/etc/nologin` en el sistema?

</div>
<div class="flashcard-back">

**R:** b) Se impide el login de todos los usuarios excepto root. Si el archivo `/etc/nologin` existe, el sistema impide el login de todos los usuarios normales. Solo root puede iniciar sesion. El contenido del archivo se muestra como mensaje al usuario que intenta conectarse. Es util durante mantenimiento del sistema. Para restaurar el acceso, simplemente se elimina el archivo con `rm /etc/nologin`. No confundir con `/usr/sbin/nologin`, que es un shell falso asignado a cuentas de servicio individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-005">
<div class="flashcard-front">

**P:** En `/etc/shadow`, que indica el prefijo `$6$` en el campo de hash de la contrasena?

</div>
<div class="flashcard-back">

**R:** c) La contrasena esta cifrada con SHA-512. Los prefijos del hash en `/etc/shadow` indican el algoritmo utilizado: `$6$` = SHA-512, `$5$` = SHA-256, `$1$` = MD5 (inseguro y obsoleto), `$2b$` o `$2y$` = Blowfish/bcrypt. SHA-512 es el algoritmo predeterminado en la mayoria de distribuciones modernas. El formato completo es `$tipo$sal$hash`, donde la sal (salt) es un valor aleatorio que impide ataques con tablas precomputadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-006">
<div class="flashcard-front">

**P:** Como se deshabilita un servicio en xinetd?

</div>
<div class="flashcard-back">

**R:** b) Cambiando `disable = no` a `disable = yes` en el archivo del servicio en `/etc/xinetd.d/`. En xinetd, cada servicio tiene su propio archivo de configuracion en `/etc/xinetd.d/`. Para deshabilitar un servicio, se cambia la directiva `disable = no` a `disable = yes` dentro del archivo correspondiente, y luego se reinicia xinetd con `systemctl restart xinetd`. En inetd (el predecesor), se deshabilita un servicio comentando su linea con `#` en `/etc/inetd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-007">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `/usr/sbin/nologin` y `/etc/nologin`?

</div>
<div class="flashcard-back">

**R:** b) `/usr/sbin/nologin` es un shell asignado a cuentas individuales y `/etc/nologin` es un archivo que bloquea todos los logins no-root. `/usr/sbin/nologin` es un programa (shell falso) que se asigna como shell de login a cuentas de servicio en `/etc/passwd` para impedir el acceso interactivo de esas cuentas especificas. `/etc/nologin` es un archivo cuya mera existencia impide que cualquier usuario normal (no root) inicie sesion en el sistema. El primero es permanente para cuentas individuales; el segundo es temporal y afecta a todos los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-008">
<div class="flashcard-front">

**P:** Que indica el valor `!!` en el campo de hash de contrasena en `/etc/shadow`?

</div>
<div class="flashcard-back">

**R:** b) La cuenta esta bloqueada o nunca ha tenido contrasena. En `/etc/shadow`, el valor `!!` indica que la cuenta esta bloqueada o nunca ha tenido una contrasena establecida. Un solo `!` tambien indica cuenta bloqueada (puede aparecer cuando se bloquea con `passwd -l`). El valor `*` indica que el login esta deshabilitado (tipico de cuentas del sistema). Un campo vacio significa sin contrasena (el usuario puede hacer login sin introducir contrasena, lo cual es un riesgo de seguridad).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-009">
<div class="flashcard-front">

**P:** Que archivo en el sistema lista las terminales (TTY) desde las cuales root puede iniciar sesion directamente?

</div>
<div class="flashcard-back">

**R:** b) `/etc/securetty`. El archivo `/etc/securetty` lista las terminales (TTY) desde las cuales root puede hacer login directo. Es verificado por el modulo PAM `pam_securetty`. Si el archivo existe, root solo puede hacer login desde las TTY listadas. Este archivo no afecta al acceso via SSH (eso se controla con `PermitRootLogin` en `/etc/ssh/sshd_config`) ni a `su` o `sudo` (solo afecta al login directo en consola).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-010">
<div class="flashcard-front">

**P:** Cual es el orden de evaluacion de las reglas en TCP Wrappers cuando un cliente intenta conectarse?

</div>
<div class="flashcard-back">

**R:** c) Se evalua `/etc/hosts.allow` primero; si hay coincidencia se permite; si no, se evalua `/etc/hosts.deny`; si no hay coincidencia en ninguno, se permite. El orden de evaluacion de TCP Wrappers es: 1) Se consulta `/etc/hosts.allow`: si hay coincidencia, se permite la conexion y se detiene la evaluacion. 2) Se consulta `/etc/hosts.deny`: si hay coincidencia, se deniega la conexion. 3) Si no hay coincidencia en ninguno de los dos archivos, la conexion se permite por defecto. Por eso la estrategia recomendada es poner `ALL: ALL` en hosts.deny y solo permitir lo necesario en hosts.allow.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-011">
<div class="flashcard-front">

**P:** En TCP Wrappers, que regla en `/etc/hosts.allow` permite el acceso SSH desde toda la red 192.168.1.0/24 excepto la IP 192.168.1.50?

</div>
<div class="flashcard-back">

**R:** b) `sshd: 192.168.1.0/24 EXCEPT 192.168.1.50`. El comodin `EXCEPT` en TCP Wrappers permite crear excepciones dentro de una regla. La regla `sshd: 192.168.1.0/24 EXCEPT 192.168.1.50` permite el acceso SSH desde toda la red 192.168.1.0/24 excepto la IP 192.168.1.50. Otros comodines disponibles: `ALL` (todos), `LOCAL` (hosts locales sin punto en el nombre), `KNOWN` (hosts resolubles), `UNKNOWN` (hosts no resolubles), `PARANOID` (DNS directo e inverso no coinciden).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-012">
<div class="flashcard-front">

**P:** Que comando convierte las contrasenas del sistema al formato shadow (moviendo los hashes de `/etc/passwd` a `/etc/shadow`)?

</div>
<div class="flashcard-back">

**R:** b) `pwconv`. El comando `pwconv` convierte el sistema a shadow passwords, moviendo los hashes de contrasenas de `/etc/passwd` a `/etc/shadow`. El comando inverso es `pwunconv` que revierte el proceso. Para las contrasenas de grupo, `grpconv` crea `/etc/gshadow` y `grpunconv` lo revierte. En la mayoria de distribuciones modernas, shadow passwords ya estan habilitadas por defecto. El campo de contrasena en `/etc/passwd` muestra una `x` indicando que el hash esta en `/etc/shadow`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-013">
<div class="flashcard-front">

**P:** Que indica un campo de contrasena vacio (sin contenido) en `/etc/shadow` para un usuario?

</div>
<div class="flashcard-back">

**R:** b) La cuenta no tiene contrasena (login sin contrasena permitido). Un campo de contrasena vacio en `/etc/shadow` significa que el usuario puede iniciar sesion sin introducir contrasena, lo cual es un riesgo de seguridad grave. El valor `!` o `!!` indica cuenta bloqueada. El valor `*` indica login deshabilitado (tipico de cuentas del sistema). Un hash que comienza con `$6$` indica SHA-512, `$5$` SHA-256 y `$1$` MD5 (inseguro).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-014">
<div class="flashcard-front">

**P:** Que configuracion de `/etc/xinetd.d/` controla desde que direcciones se puede acceder a un servicio?

</div>
<div class="flashcard-back">

**R:** b) `only_from`. La directiva `only_from` en los archivos de configuracion de xinetd (`/etc/xinetd.d/`) especifica desde que direcciones IP o redes se permite acceder al servicio. Por ejemplo, `only_from = 192.168.1.0/24` permite el acceso solo desde esa red. La directiva complementaria `no_access` especifica direcciones denegadas. `access_times` controla el horario de acceso. xinetd ofrece estas ventajas de control de acceso granular sobre inetd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-015">
<div class="flashcard-front">

**P:** Que sucede si `/etc/securetty` existe pero esta vacio?

</div>
<div class="flashcard-back">

**R:** b) Root no puede hacer login desde ninguna TTY directamente. Si `/etc/securetty` existe pero esta vacio, root no puede hacer login directo desde ninguna terminal TTY, ya que no hay terminales listadas como seguras. Este archivo solo controla el login directo de root en consola; no afecta al acceso via SSH (controlado por `PermitRootLogin` en `/etc/ssh/sshd_config`) ni a `su` o `sudo`. Para permitir el login de root solo en tty1, se anade la linea `tty1` al archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-016">
<div class="flashcard-front">

**P:** En inetd, como se deshabilita un servicio configurado en `/etc/inetd.conf`?

</div>
<div class="flashcard-back">

**R:** b) Comentando la linea del servicio con `#`. En inetd, para deshabilitar un servicio se comenta su linea en `/etc/inetd.conf` anadiendo `#` al inicio. Despues se debe reiniciar inetd para que los cambios surtan efecto. Esto contrasta con xinetd, donde cada servicio tiene su propio archivo en `/etc/xinetd.d/` y se deshabilita cambiando `disable = no` a `disable = yes`. xinetd es el reemplazo mas moderno y flexible de inetd, con mejor control de acceso y logging.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-017">
<div class="flashcard-front">

**P:** Que comando bloquea completamente un servicio impidiendo que pueda iniciarse de cualquier forma, incluso manualmente?

</div>
<div class="flashcard-back">

**R:** c) `systemctl mask servicio`. `systemctl mask servicio` crea un enlace simbolico del archivo de unidad del servicio hacia `/dev/null`, lo que impide que el servicio se inicie de cualquier forma: ni manualmente con `systemctl start`, ni automaticamente al arrancar, ni como dependencia de otros servicios. `systemctl disable` solo evita el inicio automatico pero permite el inicio manual. Para revertir el enmascaramiento se usa `systemctl unmask servicio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-018">
<div class="flashcard-front">

**P:** Cuales son los permisos correctos del archivo `/etc/shadow`?

</div>
<div class="flashcard-back">

**R:** c) 640 o 000 (solo legible por root). El archivo `/etc/shadow` contiene los hashes de las contrasenas y debe tener permisos 640 (legible por root y el grupo shadow) o 000 (solo root). Esto contrasta con `/etc/passwd` que tiene permisos 644 (legible por todos) ya que no contiene contrasenas (muestra `x` en su lugar). La seguridad de shadow passwords depende de que `/etc/shadow` sea inaccesible para usuarios normales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-019">
<div class="flashcard-front">

**P:** Que comodin en TCP Wrappers representa a hosts cuyo DNS directo e inverso no coinciden?

</div>
<div class="flashcard-back">

**R:** c) `PARANOID`. El comodin `PARANOID` en TCP Wrappers identifica hosts cuya resolucion DNS directa (nombre a IP) e inversa (IP a nombre) no coinciden, lo que puede indicar un intento de suplantacion de identidad. `UNKNOWN` identifica hosts que no se pueden resolver. `KNOWN` identifica hosts resolubles. `LOCAL` identifica hosts sin punto en el nombre (hosts locales). Se pueden usar en reglas como `ALL: PARANOID` en hosts.deny para denegar conexiones sospechosas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-020">
<div class="flashcard-front">

**P:** Que ventaja tiene xinetd sobre inetd clasico?

</div>
<div class="flashcard-back">

**R:** b) xinetd permite control de acceso por servicio, limites de conexion y control horario. xinetd (Extended Internet daemon) ofrece varias ventajas sobre inetd: control de acceso por servicio (directivas `only_from`, `no_access`), limites de conexiones simultaneas, control horario (`access_times`), mejor registro de logs, y un archivo de configuracion separado por servicio en `/etc/xinetd.d/`. inetd usa un unico archivo `/etc/inetd.conf` y carece de estas funcionalidades de control granular.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-021">
<div class="flashcard-front">

**P:** Que comando lista todos los servicios activos en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** systemctl list-units --type=service --state=running. El comando `systemctl list-units --type=service --state=running` lista todos los servicios que estan actualmente en ejecucion en el sistema. Esto es fundamental para la seguridad, ya que solo deben estar activos los servicios estrictamente necesarios. Cada servicio en ejecucion representa una potencial superficie de ataque. Para detener y deshabilitar un servicio innecesario: `systemctl stop servicio && systemctl disable servicio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-022">
<div class="flashcard-front">

**P:** Que comando convierte las contrasenas del formato shadow de vuelta a `/etc/passwd`?

</div>
<div class="flashcard-back">

**R:** pwunconv. El comando `pwunconv` revierte shadow passwords, moviendo los hashes de contrasenas de vuelta a `/etc/passwd` y eliminando `/etc/shadow`. Esto no es recomendable por seguridad, ya que `/etc/passwd` es legible por todos los usuarios. El comando complementario `pwconv` activa shadow passwords. Para grupos existen los equivalentes `grpconv` y `grpunconv` que gestionan `/etc/gshadow`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-023">
<div class="flashcard-front">

**P:** Que comando de systemd impide que un servicio llamado `cups` se inicie de cualquier forma?

</div>
<div class="flashcard-back">

**R:** systemctl mask cups. El comando `systemctl mask cups` enmascara el servicio cups (sistema de impresion) creando un enlace simbolico hacia `/dev/null`. Esto impide que el servicio se inicie manualmente, automaticamente o como dependencia. Es la forma mas restrictiva de deshabilitar un servicio. Para revertir: `systemctl unmask cups`. Para solo evitar el inicio automatico sin bloquear el manual: `systemctl disable cups`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-024">
<div class="flashcard-front">

**P:** Que linea se debe anadir en `/etc/hosts.deny` para implementar una politica restrictiva que deniegue todo el acceso por defecto?

</div>
<div class="flashcard-back">

**R:** ALL: ALL. La regla `ALL: ALL` en `/etc/hosts.deny` deniega el acceso a todos los servicios desde todos los hosts. Esta es la base de una politica restrictiva (deny by default) donde luego se permiten solo las conexiones necesarias en `/etc/hosts.allow`. El primer `ALL` se refiere a todos los servicios protegidos por TCP Wrappers y el segundo `ALL` a todos los hosts de origen. Las excepciones se definen en `/etc/hosts.allow`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-025">
<div class="flashcard-front">

**P:** Que archivo se puede crear para bloquear temporalmente el login de todos los usuarios excepto root durante un mantenimiento?

</div>
<div class="flashcard-back">

**R:** /etc/nologin. Crear el archivo `/etc/nologin` bloquea el login de todos los usuarios normales del sistema; solo root puede iniciar sesion. El contenido del archivo se muestra como mensaje a los usuarios que intenten conectarse. Es verificado por el modulo PAM `pam_nologin`. Para restaurar el acceso tras el mantenimiento, simplemente se elimina el archivo con `rm /etc/nologin`. No confundir con `/usr/sbin/nologin`, que es un shell asignado a cuentas de servicio individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `*`?

</div>
<div class="flashcard-back">

**R:** Cuenta sin contrasena (login deshabilitado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `ALL`?

</div>
<div class="flashcard-back">

**R:** Todos los servicios o todos los hosts

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `LOCAL`?

</div>
<div class="flashcard-back">

**R:** Hosts sin punto en el nombre (hosts locales)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `UNKNOWN`?

</div>
<div class="flashcard-back">

**R:** Hosts que no se pueden resolver

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `PARANOID`?

</div>
<div class="flashcard-back">

**R:** Hosts cuyo DNS directo e inverso no coinciden

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-031">
<div class="flashcard-front">

**P:** Un administrador necesita que la cuenta `www-data` no pueda iniciar sesion interactiva pero si ejecutar su servicio web. Paralelamente, necesita bloquear el login de todos los usuarios normales durante un mantenimiento nocturno. Que dos mecanismos diferentes debe usar para cada caso?

</div>
<div class="flashcard-back">

**R:** Para `www-data` debe asignar `/usr/sbin/nologin` como shell en `/etc/passwd` (afecta solo a esa cuenta de forma permanente). Para el mantenimiento debe crear el archivo `/etc/nologin` (bloquea temporalmente el login de todos los usuarios excepto root). La diferencia critica: `/usr/sbin/nologin` es un shell falso asignado por cuenta individual en `/etc/passwd`, mientras que `/etc/nologin` es un archivo cuya mera existencia bloquea globalmente a todos los usuarios no-root. Tras el mantenimiento se elimina `/etc/nologin` con `rm /etc/nologin` para restaurar el acceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-032">
<div class="flashcard-front">

**P:** En un servidor, root puede hacer login por SSH pero no puede hacer login directo en la consola fisica (tty1). El archivo `/etc/securetty` existe y esta vacio. Es este comportamiento esperado? Por que SSH no se ve afectado?

</div>
<div class="flashcard-back">

**R:** Si, es el comportamiento esperado. `/etc/securetty` lista las terminales TTY desde las cuales root puede hacer login directo, y es verificado por el modulo PAM `pam_securetty`. Si el archivo existe pero esta vacio, root no puede hacer login desde ninguna TTY fisica. SSH no se ve afectado porque el acceso SSH de root se controla con la directiva `PermitRootLogin` en `/etc/ssh/sshd_config`, no con `/etc/securetty`. Tampoco afecta a `su` ni a `sudo`, que son mecanismos de escalada de privilegios, no de login directo. Para permitir login de root solo en tty1, se anade la linea `tty1` al archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-033">
<div class="flashcard-front">

**P:** Un auditor revisa un servidor y encuentra: `/etc/passwd` con permisos 644, `/etc/shadow` con permisos 644 y un servicio telnet activo gestionado por xinetd. Cuantos problemas de seguridad hay y cuales son las correcciones?

</div>
<div class="flashcard-back">

**R:** Hay dos problemas de seguridad. Primero: `/etc/shadow` con permisos 644 es incorrecto, ya que contiene los hashes de contrasenas y debe tener permisos 640 o 000 (solo root); se corrige con `chmod 640 /etc/shadow`. Segundo: telnet transmite credenciales en texto plano y debe deshabilitarse cambiando `disable = no` a `disable = yes` en `/etc/xinetd.d/telnet` y reiniciando xinetd. El archivo `/etc/passwd` con permisos 644 es correcto y normal, ya que no contiene hashes (muestra `x` en el campo de contrasena cuando shadow passwords estan activas).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="110.2">
</div>

<div class="flashcard" data-id="110.2-fc-034">
<div class="flashcard-front">

**P:** Un administrador ejecuta `systemctl disable sshd` y luego otro administrador ejecuta `systemctl start sshd`. El servicio arranca correctamente. Si en cambio el primer administrador hubiera ejecutado `systemctl mask sshd`, que habria ocurrido al intentar `systemctl start sshd`?

</div>
<div class="flashcard-back">

**R:** Con `systemctl mask sshd`, el intento de `systemctl start sshd` habria fallado. `mask` crea un enlace simbolico del archivo de unidad hacia `/dev/null`, lo que bloquea completamente cualquier inicio del servicio: ni manual, ni automatico, ni como dependencia de otro servicio. En cambio, `disable` solo elimina los enlaces de arranque automatico pero permite el inicio manual. Esta es una trampa clasica del examen LPIC-1: confundir `disable` (evita inicio automatico, permite manual) con `mask` (bloquea todo inicio). Para revertir el enmascaramiento se usa `systemctl unmask sshd`.

</div>
</div>

---

