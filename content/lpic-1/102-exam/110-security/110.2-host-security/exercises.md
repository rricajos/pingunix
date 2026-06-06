---
title: "110.2 Configurar la seguridad del host - Ejercicios"
tags:
  - lpic-1
  - examen-102
  - tema-110
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "110"
subtema: "110.2"
---

# 110.2 Configurar la seguridad del host - Ejercicios

### Pregunta 1

Por que existen las shadow passwords en Linux?

a) Para cifrar las contrasenas con un algoritmo mas fuerte
b) Para separar los hashes de contrasenas del archivo `/etc/passwd` que es legible por todos los usuarios
c) Para permitir multiples contrasenas por usuario
d) Para almacenar las contrasenas en texto plano de forma segura

<details><summary>Respuesta</summary>

**b) Para separar los hashes de contrasenas del archivo `/etc/passwd` que es legible por todos los usuarios**

Shadow passwords resuelven el problema de que `/etc/passwd` tiene permisos 644 (legible por todos). Originalmente, este archivo contenia los hashes de contrasenas, lo que permitia a cualquier usuario copiarlos y hacer ataques de fuerza bruta offline. Con shadow passwords, los hashes se mueven a `/etc/shadow` que solo es legible por root (permisos 640 o 000), mientras que `/etc/passwd` muestra una `x` en el campo de contrasena.

</details>

---

### Pregunta 2

En TCP Wrappers, si `/etc/hosts.allow` contiene `sshd: 192.168.1.0/24` y `/etc/hosts.deny` contiene `ALL: ALL`, puede conectarse por SSH un equipo con IP 10.0.0.5?

a) Si, porque `/etc/hosts.deny` se evalua primero y luego se buscan excepciones en `/etc/hosts.allow`
b) No, porque la IP no esta en la red permitida en `/etc/hosts.allow` y la regla en `/etc/hosts.deny` deniega todo lo demas
c) Si, porque la regla `ALL: ALL` solo se aplica a servicios diferentes de SSH
d) Depende del orden de las lineas dentro de cada archivo

<details><summary>Respuesta</summary>

**b) No, porque la IP no esta en la red permitida en `/etc/hosts.allow` y la regla en `/etc/hosts.deny` deniega todo lo demas**

El orden de evaluacion de TCP Wrappers es: 1) Se consulta primero `/etc/hosts.allow`, 2) Si hay coincidencia se permite, 3) Si no hay coincidencia se consulta `/etc/hosts.deny`, 4) Si hay coincidencia se deniega, 5) Si no hay coincidencia en ninguno se permite por defecto. La IP 10.0.0.5 no coincide con 192.168.1.0/24 en hosts.allow, y la regla `ALL: ALL` en hosts.deny la deniega.

</details>

---

### Pregunta 3

Cual es la diferencia entre `systemctl disable` y `systemctl mask` para un servicio?

a) `disable` detiene el servicio y `mask` lo elimina del sistema
b) `disable` evita que inicie al arrancar pero permite inicio manual, y `mask` bloquea completamente cualquier inicio
c) `mask` es temporal y `disable` es permanente
d) No hay diferencia practica entre ambos

<details><summary>Respuesta</summary>

**b) `disable` evita que inicie al arrancar pero permite inicio manual, y `mask` bloquea completamente cualquier inicio**

`systemctl disable` elimina los enlaces simbolicos de arranque, por lo que el servicio no inicia automaticamente pero aun se puede iniciar manualmente con `systemctl start`. `systemctl mask` crea un enlace simbolico a `/dev/null`, haciendo imposible iniciar el servicio de cualquier forma (ni manual ni automaticamente). Para la maxima seguridad se usa `systemctl stop servicio && systemctl mask servicio`. Para revertir: `systemctl unmask servicio`.

</details>

---

### Pregunta 4

Que ocurre cuando existe el archivo `/etc/nologin` en el sistema?

a) Se deshabilita la cuenta root
b) Se impide el login de todos los usuarios excepto root
c) Se deshabilitan todas las cuentas del sistema
d) Se bloquean las conexiones SSH pero no las locales

<details><summary>Respuesta</summary>

**b) Se impide el login de todos los usuarios excepto root**

Si el archivo `/etc/nologin` existe, el sistema impide el login de todos los usuarios normales. Solo root puede iniciar sesion. El contenido del archivo se muestra como mensaje al usuario que intenta conectarse. Es util durante mantenimiento del sistema. Para restaurar el acceso, simplemente se elimina el archivo con `rm /etc/nologin`. No confundir con `/usr/sbin/nologin`, que es un shell falso asignado a cuentas de servicio individuales.

</details>

---

### Pregunta 5

En `/etc/shadow`, que indica el prefijo `$6$` en el campo de hash de la contrasena?

a) La contrasena esta cifrada con MD5
b) La contrasena esta cifrada con SHA-256
c) La contrasena esta cifrada con SHA-512
d) La contrasena esta cifrada con Blowfish

<details><summary>Respuesta</summary>

**c) La contrasena esta cifrada con SHA-512**

Los prefijos del hash en `/etc/shadow` indican el algoritmo utilizado: `$6$` = SHA-512, `$5$` = SHA-256, `$1$` = MD5 (inseguro y obsoleto), `$2b$` o `$2y$` = Blowfish/bcrypt. SHA-512 es el algoritmo predeterminado en la mayoria de distribuciones modernas. El formato completo es `$tipo$sal$hash`, donde la sal (salt) es un valor aleatorio que impide ataques con tablas precomputadas.

</details>

---

### Pregunta 6

Como se deshabilita un servicio en xinetd?

a) Comentando la linea con `#` en `/etc/xinetd.conf`
b) Cambiando `disable = no` a `disable = yes` en el archivo del servicio en `/etc/xinetd.d/`
c) Ejecutando `xinetd --disable servicio`
d) Eliminando el archivo del servicio de `/etc/xinetd.d/`

<details><summary>Respuesta</summary>

**b) Cambiando `disable = no` a `disable = yes` en el archivo del servicio en `/etc/xinetd.d/`**

En xinetd, cada servicio tiene su propio archivo de configuracion en `/etc/xinetd.d/`. Para deshabilitar un servicio, se cambia la directiva `disable = no` a `disable = yes` dentro del archivo correspondiente, y luego se reinicia xinetd con `systemctl restart xinetd`. En inetd (el predecesor), se deshabilita un servicio comentando su linea con `#` en `/etc/inetd.conf`.

</details>

---

### Pregunta 7

Cual es la diferencia entre `/usr/sbin/nologin` y `/etc/nologin`?

a) Son el mismo archivo, solo cambia la ruta
b) `/usr/sbin/nologin` es un shell asignado a cuentas individuales y `/etc/nologin` es un archivo que bloquea todos los logins no-root
c) `/etc/nologin` se usa en Debian y `/usr/sbin/nologin` en Red Hat
d) `/usr/sbin/nologin` bloquea SSH y `/etc/nologin` bloquea logins locales

<details><summary>Respuesta</summary>

**b) `/usr/sbin/nologin` es un shell asignado a cuentas individuales y `/etc/nologin` es un archivo que bloquea todos los logins no-root**

`/usr/sbin/nologin` es un programa (shell falso) que se asigna como shell de login a cuentas de servicio en `/etc/passwd` para impedir el acceso interactivo de esas cuentas especificas. `/etc/nologin` es un archivo cuya mera existencia impide que cualquier usuario normal (no root) inicie sesion en el sistema. El primero es permanente para cuentas individuales; el segundo es temporal y afecta a todos los usuarios.

</details>

---

### Pregunta 8

Que indica el valor `!!` en el campo de hash de contrasena en `/etc/shadow`?

a) La contrasena esta cifrada con doble hash
b) La cuenta esta bloqueada o nunca ha tenido contrasena
c) La contrasena ha expirado
d) El usuario tiene autenticacion de dos factores

<details><summary>Respuesta</summary>

**b) La cuenta esta bloqueada o nunca ha tenido contrasena**

En `/etc/shadow`, el valor `!!` indica que la cuenta esta bloqueada o nunca ha tenido una contrasena establecida. Un solo `!` tambien indica cuenta bloqueada (puede aparecer cuando se bloquea con `passwd -l`). El valor `*` indica que el login esta deshabilitado (tipico de cuentas del sistema). Un campo vacio significa sin contrasena (el usuario puede hacer login sin introducir contrasena, lo cual es un riesgo de seguridad).

</details>

---

### Pregunta 9

Que archivo en el sistema lista las terminales (TTY) desde las cuales root puede iniciar sesion directamente?

a) `/etc/login.defs`
b) `/etc/securetty`
c) `/etc/pam.d/login`
d) `/etc/security/access.conf`

<details><summary>Respuesta</summary>

**b) `/etc/securetty`**

El archivo `/etc/securetty` lista las terminales (TTY) desde las cuales root puede hacer login directo. Es verificado por el modulo PAM `pam_securetty`. Si el archivo existe, root solo puede hacer login desde las TTY listadas. Este archivo no afecta al acceso via SSH (eso se controla con `PermitRootLogin` en `/etc/ssh/sshd_config`) ni a `su` o `sudo` (solo afecta al login directo en consola).

</details>

---

### Pregunta 10

Cual es el orden de evaluacion de las reglas en TCP Wrappers cuando un cliente intenta conectarse?

a) Se evalua `/etc/hosts.deny` primero, luego `/etc/hosts.allow`, y si no hay coincidencia se deniega
b) Se evaluan ambos archivos simultaneamente y el mas especifico gana
c) Se evalua `/etc/hosts.allow` primero; si hay coincidencia se permite; si no, se evalua `/etc/hosts.deny`; si no hay coincidencia en ninguno, se permite
d) Se evalua `/etc/hosts.allow` primero; si hay coincidencia se permite; si no, se evalua `/etc/hosts.deny`; si no hay coincidencia en ninguno, se deniega

<details><summary>Respuesta</summary>

**c) Se evalua `/etc/hosts.allow` primero; si hay coincidencia se permite; si no, se evalua `/etc/hosts.deny`; si no hay coincidencia en ninguno, se permite**

El orden de evaluacion de TCP Wrappers es: 1) Se consulta `/etc/hosts.allow`: si hay coincidencia, se permite la conexion y se detiene la evaluacion. 2) Se consulta `/etc/hosts.deny`: si hay coincidencia, se deniega la conexion. 3) Si no hay coincidencia en ninguno de los dos archivos, la conexion se permite por defecto. Por eso la estrategia recomendada es poner `ALL: ALL` en hosts.deny y solo permitir lo necesario en hosts.allow.

</details>

---

### Pregunta 11

En TCP Wrappers, que regla en `/etc/hosts.allow` permite el acceso SSH desde toda la red 192.168.1.0/24 excepto la IP 192.168.1.50?

a) `sshd: 192.168.1.0/24 NOT 192.168.1.50`
b) `sshd: 192.168.1.0/24 EXCEPT 192.168.1.50`
c) `sshd: 192.168.1.0/24 DENY 192.168.1.50`
d) `sshd: 192.168.1.0/24 EXCLUDE 192.168.1.50`

<details><summary>Respuesta</summary>

**b) `sshd: 192.168.1.0/24 EXCEPT 192.168.1.50`**

El comodin `EXCEPT` en TCP Wrappers permite crear excepciones dentro de una regla. La regla `sshd: 192.168.1.0/24 EXCEPT 192.168.1.50` permite el acceso SSH desde toda la red 192.168.1.0/24 excepto la IP 192.168.1.50. Otros comodines disponibles: `ALL` (todos), `LOCAL` (hosts locales sin punto en el nombre), `KNOWN` (hosts resolubles), `UNKNOWN` (hosts no resolubles), `PARANOID` (DNS directo e inverso no coinciden).

</details>

---

### Pregunta 12

Que comando convierte las contrasenas del sistema al formato shadow (moviendo los hashes de `/etc/passwd` a `/etc/shadow`)?

a) `shadowconv`
b) `pwconv`
c) `shadow-enable`
d) `passwd --shadow`

<details><summary>Respuesta</summary>

**b) `pwconv`**

El comando `pwconv` convierte el sistema a shadow passwords, moviendo los hashes de contrasenas de `/etc/passwd` a `/etc/shadow`. El comando inverso es `pwunconv` que revierte el proceso. Para las contrasenas de grupo, `grpconv` crea `/etc/gshadow` y `grpunconv` lo revierte. En la mayoria de distribuciones modernas, shadow passwords ya estan habilitadas por defecto. El campo de contrasena en `/etc/passwd` muestra una `x` indicando que el hash esta en `/etc/shadow`.

</details>

---

### Pregunta 13

Que indica un campo de contrasena vacio (sin contenido) en `/etc/shadow` para un usuario?

a) La cuenta esta bloqueada
b) La cuenta no tiene contrasena (login sin contrasena permitido)
c) La contrasena esta cifrada con un algoritmo desconocido
d) La cuenta ha expirado

<details><summary>Respuesta</summary>

**b) La cuenta no tiene contrasena (login sin contrasena permitido)**

Un campo de contrasena vacio en `/etc/shadow` significa que el usuario puede iniciar sesion sin introducir contrasena, lo cual es un riesgo de seguridad grave. El valor `!` o `!!` indica cuenta bloqueada. El valor `*` indica login deshabilitado (tipico de cuentas del sistema). Un hash que comienza con `$6$` indica SHA-512, `$5$` SHA-256 y `$1$` MD5 (inseguro).

</details>

---

### Pregunta 14

Que configuracion de `/etc/xinetd.d/` controla desde que direcciones se puede acceder a un servicio?

a) `allow_from`
b) `only_from`
c) `accept_from`
d) `source_allow`

<details><summary>Respuesta</summary>

**b) `only_from`**

La directiva `only_from` en los archivos de configuracion de xinetd (`/etc/xinetd.d/`) especifica desde que direcciones IP o redes se permite acceder al servicio. Por ejemplo, `only_from = 192.168.1.0/24` permite el acceso solo desde esa red. La directiva complementaria `no_access` especifica direcciones denegadas. `access_times` controla el horario de acceso. xinetd ofrece estas ventajas de control de acceso granular sobre inetd.

</details>

---

### Pregunta 15

Que sucede si `/etc/securetty` existe pero esta vacio?

a) Root puede hacer login desde cualquier TTY
b) Root no puede hacer login desde ninguna TTY directamente
c) Se genera un error y el sistema no arranca
d) Solo afecta a las conexiones SSH

<details><summary>Respuesta</summary>

**b) Root no puede hacer login desde ninguna TTY directamente**

Si `/etc/securetty` existe pero esta vacio, root no puede hacer login directo desde ninguna terminal TTY, ya que no hay terminales listadas como seguras. Este archivo solo controla el login directo de root en consola; no afecta al acceso via SSH (controlado por `PermitRootLogin` en `/etc/ssh/sshd_config`) ni a `su` o `sudo`. Para permitir el login de root solo en tty1, se anade la linea `tty1` al archivo.

</details>

---

### Pregunta 16

En inetd, como se deshabilita un servicio configurado en `/etc/inetd.conf`?

a) Cambiando `disable = yes` en la linea del servicio
b) Comentando la linea del servicio con `#`
c) Eliminando el archivo del servicio de `/etc/inetd.d/`
d) Ejecutando `inetctl disable servicio`

<details><summary>Respuesta</summary>

**b) Comentando la linea del servicio con `#`**

En inetd, para deshabilitar un servicio se comenta su linea en `/etc/inetd.conf` anadiendo `#` al inicio. Despues se debe reiniciar inetd para que los cambios surtan efecto. Esto contrasta con xinetd, donde cada servicio tiene su propio archivo en `/etc/xinetd.d/` y se deshabilita cambiando `disable = no` a `disable = yes`. xinetd es el reemplazo mas moderno y flexible de inetd, con mejor control de acceso y logging.

</details>

---

### Pregunta 17

Que comando bloquea completamente un servicio impidiendo que pueda iniciarse de cualquier forma, incluso manualmente?

a) `systemctl disable servicio`
b) `systemctl stop servicio`
c) `systemctl mask servicio`
d) `systemctl kill servicio`

<details><summary>Respuesta</summary>

**c) `systemctl mask servicio`**

`systemctl mask servicio` crea un enlace simbolico del archivo de unidad del servicio hacia `/dev/null`, lo que impide que el servicio se inicie de cualquier forma: ni manualmente con `systemctl start`, ni automaticamente al arrancar, ni como dependencia de otros servicios. `systemctl disable` solo evita el inicio automatico pero permite el inicio manual. Para revertir el enmascaramiento se usa `systemctl unmask servicio`.

</details>

---

### Pregunta 18

Cuales son los permisos correctos del archivo `/etc/shadow`?

a) 644 (legible por todos)
b) 755 (ejecutable por todos)
c) 640 o 000 (solo legible por root)
d) 600 (lectura y escritura solo para el propietario)

<details><summary>Respuesta</summary>

**c) 640 o 000 (solo legible por root)**

El archivo `/etc/shadow` contiene los hashes de las contrasenas y debe tener permisos 640 (legible por root y el grupo shadow) o 000 (solo root). Esto contrasta con `/etc/passwd` que tiene permisos 644 (legible por todos) ya que no contiene contrasenas (muestra `x` en su lugar). La seguridad de shadow passwords depende de que `/etc/shadow` sea inaccesible para usuarios normales.

</details>

---

### Pregunta 19

Que comodin en TCP Wrappers representa a hosts cuyo DNS directo e inverso no coinciden?

a) `UNKNOWN`
b) `KNOWN`
c) `PARANOID`
d) `LOCAL`

<details><summary>Respuesta</summary>

**c) `PARANOID`**

El comodin `PARANOID` en TCP Wrappers identifica hosts cuya resolucion DNS directa (nombre a IP) e inversa (IP a nombre) no coinciden, lo que puede indicar un intento de suplantacion de identidad. `UNKNOWN` identifica hosts que no se pueden resolver. `KNOWN` identifica hosts resolubles. `LOCAL` identifica hosts sin punto en el nombre (hosts locales). Se pueden usar en reglas como `ALL: PARANOID` en hosts.deny para denegar conexiones sospechosas.

</details>

---

### Pregunta 20

Que ventaja tiene xinetd sobre inetd clasico?

a) xinetd es mas rapido porque no usa archivos de configuracion
b) xinetd permite control de acceso por servicio, limites de conexion y control horario
c) xinetd solo funciona con servicios TCP, no UDP
d) xinetd no requiere reiniciar el demonio al cambiar la configuracion

<details><summary>Respuesta</summary>

**b) xinetd permite control de acceso por servicio, limites de conexion y control horario**

xinetd (Extended Internet daemon) ofrece varias ventajas sobre inetd: control de acceso por servicio (directivas `only_from`, `no_access`), limites de conexiones simultaneas, control horario (`access_times`), mejor registro de logs, y un archivo de configuracion separado por servicio en `/etc/xinetd.d/`. inetd usa un unico archivo `/etc/inetd.conf` y carece de estas funcionalidades de control granular.

</details>

---

### Pregunta 21

Que comando lista todos los servicios activos en un sistema con systemd?

<input type="text" class="fill-blank" data-answer="systemctl list-units --type=service --state=running" data-alt="systemctl list-units --type=service" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl list-units --type=service --state=running**

El comando `systemctl list-units --type=service --state=running` lista todos los servicios que estan actualmente en ejecucion en el sistema. Esto es fundamental para la seguridad, ya que solo deben estar activos los servicios estrictamente necesarios. Cada servicio en ejecucion representa una potencial superficie de ataque. Para detener y deshabilitar un servicio innecesario: `systemctl stop servicio && systemctl disable servicio`.

</details>

---

### Pregunta 22

Que comando convierte las contrasenas del formato shadow de vuelta a `/etc/passwd`?

<input type="text" class="fill-blank" data-answer="pwunconv" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pwunconv**

El comando `pwunconv` revierte shadow passwords, moviendo los hashes de contrasenas de vuelta a `/etc/passwd` y eliminando `/etc/shadow`. Esto no es recomendable por seguridad, ya que `/etc/passwd` es legible por todos los usuarios. El comando complementario `pwconv` activa shadow passwords. Para grupos existen los equivalentes `grpconv` y `grpunconv` que gestionan `/etc/gshadow`.

</details>

---

### Pregunta 23

Que comando de systemd impide que un servicio llamado `cups` se inicie de cualquier forma?

<input type="text" class="fill-blank" data-answer="systemctl mask cups" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl mask cups**

El comando `systemctl mask cups` enmascara el servicio cups (sistema de impresion) creando un enlace simbolico hacia `/dev/null`. Esto impide que el servicio se inicie manualmente, automaticamente o como dependencia. Es la forma mas restrictiva de deshabilitar un servicio. Para revertir: `systemctl unmask cups`. Para solo evitar el inicio automatico sin bloquear el manual: `systemctl disable cups`.

</details>

---

### Pregunta 24

Que linea se debe anadir en `/etc/hosts.deny` para implementar una politica restrictiva que deniegue todo el acceso por defecto?

<input type="text" class="fill-blank" data-answer="ALL: ALL" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ALL: ALL**

La regla `ALL: ALL` en `/etc/hosts.deny` deniega el acceso a todos los servicios desde todos los hosts. Esta es la base de una politica restrictiva (deny by default) donde luego se permiten solo las conexiones necesarias en `/etc/hosts.allow`. El primer `ALL` se refiere a todos los servicios protegidos por TCP Wrappers y el segundo `ALL` a todos los hosts de origen. Las excepciones se definen en `/etc/hosts.allow`.

</details>

---

### Pregunta 25

Que archivo se puede crear para bloquear temporalmente el login de todos los usuarios excepto root durante un mantenimiento?

<input type="text" class="fill-blank" data-answer="/etc/nologin" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/etc/nologin**

Crear el archivo `/etc/nologin` bloquea el login de todos los usuarios normales del sistema; solo root puede iniciar sesion. El contenido del archivo se muestra como mensaje a los usuarios que intenten conectarse. Es verificado por el modulo PAM `pam_nologin`. Para restaurar el acceso tras el mantenimiento, simplemente se elimina el archivo con `rm /etc/nologin`. No confundir con `/usr/sbin/nologin`, que es un shell asignado a cuentas de servicio individuales.

</details>
