---
title: "210.2 - Autenticación PAM"
tags: [lpic-2, examen-202, tema-210, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "210"
subtema: "210.2"
---

# 210.2 - Ejercicios: Autenticación PAM

### Pregunta 1

¿Cuáles son los cuatro tipos de módulos PAM?

a) login, logout, password, session
b) auth, account, password, session
c) user, group, password, access
d) verify, permit, deny, session

<details><summary>Respuesta</summary>

**b) auth, account, password, session**

Los cuatro tipos de módulos PAM son: `auth` (verificación de identidad), `account` (verificación de permisos de cuenta), `password` (gestión de cambios de contraseña) y `session` (configuración del entorno de sesión).
</details>

### Pregunta 2

¿Cuál es la diferencia principal entre el flag `required` y `requisite`?

a) `required` detiene la evaluación inmediatamente y `requisite` continúa
b) `required` continúa evaluando los demás módulos y `requisite` detiene la evaluación inmediatamente
c) No hay diferencia, son sinónimos
d) `required` es para auth y `requisite` es para session

<details><summary>Respuesta</summary>

**b) `required` continúa evaluando los demás módulos y `requisite` detiene la evaluación inmediatamente**

Cuando un módulo `required` falla, la pila sigue evaluando el resto de módulos (para no revelar qué paso falló), pero el resultado final será fallo. Con `requisite`, el fallo detiene inmediatamente la evaluación y devuelve fallo al instante.
</details>

### Pregunta 3

¿Qué módulo PAM se utiliza para restringir el uso de `su` a los miembros del grupo `wheel`?

a) pam_restrict.so
b) pam_group.so
c) pam_wheel.so
d) pam_su.so

<details><summary>Respuesta</summary>

**c) pam_wheel.so**

El módulo `pam_wheel.so` se configura en `/etc/pam.d/su` con la línea `auth required pam_wheel.so` para que solo los usuarios del grupo `wheel` puedan usar el comando `su`.
</details>

### Pregunta 4

¿En qué directorio se encuentran los archivos de configuración PAM por servicio?

a) /etc/pam/
b) /etc/security/pam/
c) /etc/pam.d/
d) /etc/auth/pam.d/

<details><summary>Respuesta</summary>

**c) /etc/pam.d/**

Los archivos de configuración PAM se encuentran en `/etc/pam.d/`. Cada archivo lleva el nombre del servicio que configura (login, sshd, su, sudo, etc.).
</details>

### Pregunta 5

¿Qué ocurre cuando existe el archivo `/etc/nologin` y se utiliza el módulo `pam_nologin.so`?

a) Ningún usuario puede iniciar sesión
b) Solo root puede iniciar sesión
c) Solo los usuarios del grupo wheel pueden iniciar sesión
d) El sistema se reinicia automáticamente

<details><summary>Respuesta</summary>

**b) Solo root puede iniciar sesión**

Cuando existe el archivo `/etc/nologin`, el módulo `pam_nologin.so` impide el inicio de sesión de todos los usuarios excepto root. El contenido del archivo se muestra como mensaje a los usuarios rechazados.
</details>

### Pregunta 6

En el archivo `/etc/security/limits.conf`, ¿qué línea limita a un máximo de 50 procesos para todos los miembros del grupo "desarrollo"?

a) desarrollo hard nproc 50
b) @desarrollo hard nproc 50
c) %desarrollo hard nproc 50
d) grupo:desarrollo hard nproc 50

<details><summary>Respuesta</summary>

**b) @desarrollo hard nproc 50**

En `limits.conf`, los grupos se indican con el prefijo `@`. La línea `@desarrollo hard nproc 50` establece un límite duro de 50 procesos para todos los miembros del grupo "desarrollo".
</details>

### Pregunta 7

¿Qué módulo PAM es el sucesor moderno de `pam_cracklib.so` para verificar la calidad de las contraseñas?

a) pam_quality.so
b) pam_pwcheck.so
c) pam_pwquality.so
d) pam_password.so

<details><summary>Respuesta</summary>

**c) pam_pwquality.so**

`pam_pwquality.so` es el reemplazo moderno de `pam_cracklib.so`. Ambos verifican la calidad de las contraseñas, pero `pam_pwquality.so` ofrece más opciones de configuración y es el estándar actual.
</details>

### Pregunta 8

¿Qué hace el flag de control `sufficient` cuando el módulo tiene éxito?

a) Continúa evaluando los demás módulos
b) Detiene la evaluación y devuelve éxito inmediato si ningún módulo required previo ha fallado
c) Registra el éxito pero siempre continúa evaluando
d) Siempre devuelve éxito, independientemente del resultado de módulos anteriores

<details><summary>Respuesta</summary>

**b) Detiene la evaluación y devuelve éxito inmediato si ningún módulo required previo ha fallado**

Cuando un módulo con flag `sufficient` tiene éxito y no hay módulos `required` previos que hayan fallado, la evaluación se detiene y se devuelve éxito. Si falla, simplemente se ignora y se continúa con el siguiente módulo.
</details>

### Pregunta 9

¿Qué módulo PAM permite la integración con SSSD para autenticación centralizada?

a) pam_sssd.so
b) pam_sss.so
c) pam_centrify.so
d) pam_remote.so

<details><summary>Respuesta</summary>

**b) pam_sss.so**

El módulo `pam_sss.so` integra PAM con SSSD (System Security Services Daemon), permitiendo autenticación centralizada contra múltiples backends como LDAP, Active Directory o FreeIPA.
</details>

### Pregunta 10

¿Qué módulo PAM se utiliza para bloquear cuentas después de múltiples intentos fallidos de autenticación en sistemas modernos?

a) pam_lockout.so
b) pam_tally2.so
c) pam_faillock.so
d) pam_block.so

<details><summary>Respuesta</summary>

**c) pam_faillock.so**

`pam_faillock.so` es el módulo moderno para bloquear cuentas tras intentos fallidos de autenticación. Reemplaza a `pam_tally2.so`, que está obsoleto. Se configura con parámetros como `deny=5` (bloquear tras 5 fallos) y `unlock_time=900` (desbloquear tras 900 segundos).
</details>

### Pregunta 11

¿Qué módulo PAM realiza la autenticación estándar contra `/etc/passwd` y `/etc/shadow`?

a) pam_auth.so
b) pam_unix.so
c) pam_local.so
d) pam_shadow.so

<details><summary>Respuesta</summary>

**b) pam_unix.so**

`pam_unix.so` es el módulo fundamental de PAM que realiza la autenticación estándar contra los archivos locales `/etc/passwd` y `/etc/shadow`. Se utiliza en los cuatro tipos de módulos: auth, account, password y session.

</details>

### Pregunta 12

En la configuración de `pam_pwquality.so`, ¿qué significa el parámetro `dcredit=-1`?

a) Se descuenta un carácter de la longitud mínima por cada dígito
b) Se requiere al menos un dígito en la contraseña
c) Se prohíbe el uso de dígitos en la contraseña
d) Se reduce la puntuación de calidad si hay dígitos

<details><summary>Respuesta</summary>

**b) Se requiere al menos un dígito en la contraseña**

En `pam_pwquality.so`, un valor negativo en `dcredit` indica el número mínimo de dígitos requeridos. Así, `dcredit=-1` exige al menos un dígito. Un valor positivo sumaría crédito a la longitud por cada dígito encontrado.

</details>

### Pregunta 13

¿Qué módulo PAM siempre deniega el acceso y se usa como política restrictiva por defecto?

a) pam_reject.so
b) pam_deny.so
c) pam_block.so
d) pam_noaccess.so

<details><summary>Respuesta</summary>

**b) pam_deny.so**

`pam_deny.so` siempre devuelve un resultado de fallo, denegando el acceso. Se utiliza típicamente al final de la pila PAM como política por defecto restrictiva, garantizando que si ningún otro módulo ha concedido acceso, se deniegue. Su contraparte es `pam_permit.so`, que siempre permite.

</details>

### Pregunta 14

¿Qué archivo de configuración en `/etc/security/` define restricciones de acceso basadas en reglas temporales?

a) /etc/security/access.conf
b) /etc/security/time.conf
c) /etc/security/limits.conf
d) /etc/security/schedule.conf

<details><summary>Respuesta</summary>

**b) /etc/security/time.conf**

El archivo `/etc/security/time.conf` define reglas de acceso basadas en el tiempo (hora, día de la semana). Es utilizado por el módulo `pam_time.so` para restringir el acceso a servicios según franjas horarias configuradas.

</details>

### Pregunta 15

¿Cuál es la diferencia entre los límites `soft` y `hard` en `/etc/security/limits.conf`?

a) `soft` es permanente y `hard` es temporal
b) `soft` es el límite que el usuario puede aumentar hasta `hard`, que es el límite absoluto
c) `soft` se aplica a usuarios y `hard` a grupos
d) `soft` se aplica en horario laboral y `hard` fuera de él

<details><summary>Respuesta</summary>

**b) `soft` es el límite que el usuario puede aumentar hasta `hard`, que es el límite absoluto**

El límite `soft` es el valor predeterminado que se aplica al usuario, pero este puede aumentarlo con `ulimit` hasta el valor del límite `hard`. El límite `hard` es el tope absoluto que solo root puede modificar. Se puede usar `-` para establecer ambos al mismo valor.

</details>

### Pregunta 16

¿Qué tipo de módulo PAM se encarga de gestionar el cambio de contraseñas, incluyendo la verificación de complejidad?

a) auth
b) account
c) password
d) session

<details><summary>Respuesta</summary>

**c) password**

El tipo `password` de PAM se encarga de la gestión de cambios de contraseña. Los módulos de este tipo verifican la calidad de la nueva contraseña (longitud, complejidad, historial) y realizan la actualización. Módulos como `pam_pwquality.so` y `pam_unix.so` se usan en esta categoría.

</details>

### Pregunta 17

¿Qué módulo PAM se utiliza para aplicar los límites de recursos definidos en `/etc/security/limits.conf`?

a) pam_resource.so
b) pam_ulimit.so
c) pam_limits.so
d) pam_rlimit.so

<details><summary>Respuesta</summary>

**c) pam_limits.so**

El módulo `pam_limits.so` lee y aplica los límites definidos en `/etc/security/limits.conf`. Debe estar configurado como `session required pam_limits.so` en los archivos PAM correspondientes. Sin este módulo habilitado, los límites definidos en `limits.conf` no se aplican.

</details>

### Pregunta 18

En la configuración PAM de un sistema RHEL/CentOS, ¿qué archivo contiene las reglas de autenticación comunes del sistema?

a) /etc/pam.d/common-auth
b) /etc/pam.d/system-auth
c) /etc/pam.d/auth-config
d) /etc/pam.d/global-auth

<details><summary>Respuesta</summary>

**b) /etc/pam.d/system-auth**

En sistemas RHEL/CentOS, las reglas de autenticación comunes se encuentran en `/etc/pam.d/system-auth` y `/etc/pam.d/password-auth`. En sistemas Debian/Ubuntu, los equivalentes son los archivos `common-auth`, `common-account`, `common-password` y `common-session`.

</details>

### Pregunta 19

¿Qué módulo PAM controla el acceso basándose en reglas definidas en `/etc/security/access.conf`?

a) pam_securetty.so
b) pam_access.so
c) pam_filter.so
d) pam_listfile.so

<details><summary>Respuesta</summary>

**b) pam_access.so**

El módulo `pam_access.so` utiliza las reglas de `/etc/security/access.conf` para permitir o denegar el acceso basándose en el nombre de usuario, grupo, nombre de host o dirección IP. Se configura como `account required pam_access.so`.

</details>

### Pregunta 20

¿Qué flag de control PAM hace que el resultado del módulo solo importe si es el único módulo de ese tipo en la pila?

a) required
b) requisite
c) sufficient
d) optional

<details><summary>Respuesta</summary>

**d) optional**

El flag `optional` indica que el resultado del módulo solo es relevante si es el único módulo del mismo tipo en la pila PAM. Si hay otros módulos, su éxito o fallo se ignora. Se usa comúnmente para módulos de sesión que proporcionan funcionalidades adicionales no críticas.

</details>

### Pregunta 21

¿En qué directorio se encuentran los módulos PAM compilados (archivos .so) en un sistema Debian de 64 bits?

<input type="text" class="fill-blank" data-answer="/lib/x86_64-linux-gnu/security/" data-alt="/lib/x86_64-linux-gnu/security" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/lib/x86_64-linux-gnu/security/**

En sistemas Debian/Ubuntu de 64 bits, los módulos PAM se encuentran en `/lib/x86_64-linux-gnu/security/`. En sistemas RHEL/CentOS de 64 bits, la ruta es `/lib64/security/`. Estos directorios contienen los archivos `.so` que implementan cada módulo.

</details>

### Pregunta 22

¿Qué línea se debe añadir en el archivo PAM de `su` para restringir su uso solo a miembros del grupo wheel?

<input type="text" class="fill-blank" data-answer="auth required pam_wheel.so" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**auth required pam_wheel.so**

La línea `auth required pam_wheel.so` en `/etc/pam.d/su` restringe el uso del comando `su` a los miembros del grupo `wheel`. Si un usuario que no pertenece al grupo `wheel` intenta usar `su`, la autenticación fallará.

</details>

### Pregunta 23

¿Qué línea de configuración en `/etc/security/limits.conf` establece un límite duro de 4096 archivos abiertos para el usuario `admin`?

<input type="text" class="fill-blank" data-answer="admin hard nofile 4096" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**admin hard nofile 4096**

La línea `admin hard nofile 4096` establece un límite duro de 4096 descriptores de archivo abiertos simultáneamente para el usuario `admin`. El campo `nofile` representa el número máximo de archivos abiertos y `hard` indica que es un límite absoluto.

</details>

### Pregunta 24

¿Qué línea PAM se añade para habilitar la depuración en el módulo pam_unix.so durante la autenticación?

<input type="text" class="fill-blank" data-answer="auth required pam_unix.so debug" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**auth required pam_unix.so debug**

Añadir el parámetro `debug` al final de la línea del módulo habilita la salida de depuración. Los mensajes de depuración se envían al log de autenticación (`/var/log/auth.log` en Debian o `/var/log/secure` en RHEL).

</details>

### Pregunta 25

¿Qué línea de configuración PAM configura `pam_faillock.so` para bloquear la cuenta tras 3 intentos fallidos con desbloqueo automático a los 600 segundos?

<input type="text" class="fill-blank" data-answer="auth required pam_faillock.so preauth deny=3 unlock_time=600" data-alt="auth required pam_faillock.so deny=3 unlock_time=600" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**auth required pam_faillock.so preauth deny=3 unlock_time=600**

La configuración de `pam_faillock.so` con `deny=3` bloquea la cuenta tras 3 intentos fallidos y `unlock_time=600` la desbloquea automáticamente después de 600 segundos (10 minutos). Se necesitan dos líneas: una con `preauth` (antes de la autenticación) y otra con `authfail` (tras el fallo).

</details>
