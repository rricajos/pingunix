---
title: "210.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.2"
---

# Flashcards: 210.2 - Autenticacion Pam

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cuáles son los cuatro tipos de módulos PAM?

</div>
<div class="flashcard-back">

**R:** b) auth, account, password, session. Los cuatro tipos de módulos PAM son: `auth` (verificación de identidad), `account` (verificación de permisos de cuenta), `password` (gestión de cambios de contraseña) y `session` (configuración del entorno de sesión).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre el flag `required` y `requisite`?

</div>
<div class="flashcard-back">

**R:** b) `required` continúa evaluando los demás módulos y `requisite` detiene la evaluación inmediatamente. Cuando un módulo `required` falla, la pila sigue evaluando el resto de módulos (para no revelar qué paso falló), pero el resultado final será fallo. Con `requisite`, el fallo detiene inmediatamente la evaluación y devuelve fallo al instante.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM se utiliza para restringir el uso de `su` a los miembros del grupo `wheel`?

</div>
<div class="flashcard-back">

**R:** c) pam_wheel.so. El módulo `pam_wheel.so` se configura en `/etc/pam.d/su` con la línea `auth required pam_wheel.so` para que solo los usuarios del grupo `wheel` puedan usar el comando `su`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-004">
<div class="flashcard-front">

**P:** ¿En qué directorio se encuentran los archivos de configuración PAM por servicio?

</div>
<div class="flashcard-back">

**R:** c) /etc/pam.d/. Los archivos de configuración PAM se encuentran en `/etc/pam.d/`. Cada archivo lleva el nombre del servicio que configura (login, sshd, su, sudo, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué ocurre cuando existe el archivo `/etc/nologin` y se utiliza el módulo `pam_nologin.so`?

</div>
<div class="flashcard-back">

**R:** b) Solo root puede iniciar sesión. Cuando existe el archivo `/etc/nologin`, el módulo `pam_nologin.so` impide el inicio de sesión de todos los usuarios excepto root. El contenido del archivo se muestra como mensaje a los usuarios rechazados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-006">
<div class="flashcard-front">

**P:** En el archivo `/etc/security/limits.conf`, ¿qué línea limita a un máximo de 50 procesos para todos los miembros del grupo "desarrollo"?

</div>
<div class="flashcard-back">

**R:** b) @desarrollo hard nproc 50. En `limits.conf`, los grupos se indican con el prefijo `@`. La línea `@desarrollo hard nproc 50` establece un límite duro de 50 procesos para todos los miembros del grupo "desarrollo".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM es el sucesor moderno de `pam_cracklib.so` para verificar la calidad de las contraseñas?

</div>
<div class="flashcard-back">

**R:** c) pam_pwquality.so. `pam_pwquality.so` es el reemplazo moderno de `pam_cracklib.so`. Ambos verifican la calidad de las contraseñas, pero `pam_pwquality.so` ofrece más opciones de configuración y es el estándar actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué hace el flag de control `sufficient` cuando el módulo tiene éxito?

</div>
<div class="flashcard-back">

**R:** b) Detiene la evaluación y devuelve éxito inmediato si ningún módulo required previo ha fallado. Cuando un módulo con flag `sufficient` tiene éxito y no hay módulos `required` previos que hayan fallado, la evaluación se detiene y se devuelve éxito. Si falla, simplemente se ignora y se continúa con el siguiente módulo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM permite la integración con SSSD para autenticación centralizada?

</div>
<div class="flashcard-back">

**R:** b) pam_sss.so. El módulo `pam_sss.so` integra PAM con SSSD (System Security Services Daemon), permitiendo autenticación centralizada contra múltiples backends como LDAP, Active Directory o FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM se utiliza para bloquear cuentas después de múltiples intentos fallidos de autenticación en sistemas modernos?

</div>
<div class="flashcard-back">

**R:** c) pam_faillock.so. `pam_faillock.so` es el módulo moderno para bloquear cuentas tras intentos fallidos de autenticación. Reemplaza a `pam_tally2.so`, que está obsoleto. Se configura con parámetros como `deny=5` (bloquear tras 5 fallos) y `unlock_time=900` (desbloquear tras 900 segundos).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM realiza la autenticación estándar contra `/etc/passwd` y `/etc/shadow`?

</div>
<div class="flashcard-back">

**R:** b) pam_unix.so. `pam_unix.so` es el módulo fundamental de PAM que realiza la autenticación estándar contra los archivos locales `/etc/passwd` y `/etc/shadow`. Se utiliza en los cuatro tipos de módulos: auth, account, password y session.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-012">
<div class="flashcard-front">

**P:** En la configuración de `pam_pwquality.so`, ¿qué significa el parámetro `dcredit=-1`?

</div>
<div class="flashcard-back">

**R:** b) Se requiere al menos un dígito en la contraseña. En `pam_pwquality.so`, un valor negativo en `dcredit` indica el número mínimo de dígitos requeridos. Así, `dcredit=-1` exige al menos un dígito. Un valor positivo sumaría crédito a la longitud por cada dígito encontrado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM siempre deniega el acceso y se usa como política restrictiva por defecto?

</div>
<div class="flashcard-back">

**R:** b) pam_deny.so. `pam_deny.so` siempre devuelve un resultado de fallo, denegando el acceso. Se utiliza típicamente al final de la pila PAM como política por defecto restrictiva, garantizando que si ningún otro módulo ha concedido acceso, se deniegue. Su contraparte es `pam_permit.so`, que siempre permite.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué archivo de configuración en `/etc/security/` define restricciones de acceso basadas en reglas temporales?

</div>
<div class="flashcard-back">

**R:** b) /etc/security/time.conf. El archivo `/etc/security/time.conf` define reglas de acceso basadas en el tiempo (hora, día de la semana). Es utilizado por el módulo `pam_time.so` para restringir el acceso a servicios según franjas horarias configuradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre los límites `soft` y `hard` en `/etc/security/limits.conf`?

</div>
<div class="flashcard-back">

**R:** b) `soft` es el límite que el usuario puede aumentar hasta `hard`, que es el límite absoluto. El límite `soft` es el valor predeterminado que se aplica al usuario, pero este puede aumentarlo con `ulimit` hasta el valor del límite `hard`. El límite `hard` es el tope absoluto que solo root puede modificar. Se puede usar `-` para establecer ambos al mismo valor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué tipo de módulo PAM se encarga de gestionar el cambio de contraseñas, incluyendo la verificación de complejidad?

</div>
<div class="flashcard-back">

**R:** c) password. El tipo `password` de PAM se encarga de la gestión de cambios de contraseña. Los módulos de este tipo verifican la calidad de la nueva contraseña (longitud, complejidad, historial) y realizan la actualización. Módulos como `pam_pwquality.so` y `pam_unix.so` se usan en esta categoría.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM se utiliza para aplicar los límites de recursos definidos en `/etc/security/limits.conf`?

</div>
<div class="flashcard-back">

**R:** c) pam_limits.so. El módulo `pam_limits.so` lee y aplica los límites definidos en `/etc/security/limits.conf`. Debe estar configurado como `session required pam_limits.so` en los archivos PAM correspondientes. Sin este módulo habilitado, los límites definidos en `limits.conf` no se aplican.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-018">
<div class="flashcard-front">

**P:** En la configuración PAM de un sistema RHEL/CentOS, ¿qué archivo contiene las reglas de autenticación comunes del sistema?

</div>
<div class="flashcard-back">

**R:** b) /etc/pam.d/system-auth. En sistemas RHEL/CentOS, las reglas de autenticación comunes se encuentran en `/etc/pam.d/system-auth` y `/etc/pam.d/password-auth`. En sistemas Debian/Ubuntu, los equivalentes son los archivos `common-auth`, `common-account`, `common-password` y `common-session`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué módulo PAM controla el acceso basándose en reglas definidas en `/etc/security/access.conf`?

</div>
<div class="flashcard-back">

**R:** b) pam_access.so. El módulo `pam_access.so` utiliza las reglas de `/etc/security/access.conf` para permitir o denegar el acceso basándose en el nombre de usuario, grupo, nombre de host o dirección IP. Se configura como `account required pam_access.so`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué flag de control PAM hace que el resultado del módulo solo importe si es el único módulo de ese tipo en la pila?

</div>
<div class="flashcard-back">

**R:** d) optional. El flag `optional` indica que el resultado del módulo solo es relevante si es el único módulo del mismo tipo en la pila PAM. Si hay otros módulos, su éxito o fallo se ignora. Se usa comúnmente para módulos de sesión que proporcionan funcionalidades adicionales no críticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-021">
<div class="flashcard-front">

**P:** ¿En qué directorio se encuentran los módulos PAM compilados (archivos .so) en un sistema Debian de 64 bits?

</div>
<div class="flashcard-back">

**R:** /lib/x86_64-linux-gnu/security/. En sistemas Debian/Ubuntu de 64 bits, los módulos PAM se encuentran en `/lib/x86_64-linux-gnu/security/`. En sistemas RHEL/CentOS de 64 bits, la ruta es `/lib64/security/`. Estos directorios contienen los archivos `.so` que implementan cada módulo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué línea se debe añadir en el archivo PAM de `su` para restringir su uso solo a miembros del grupo wheel?

</div>
<div class="flashcard-back">

**R:** auth required pam_wheel.so. La línea `auth required pam_wheel.so` en `/etc/pam.d/su` restringe el uso del comando `su` a los miembros del grupo `wheel`. Si un usuario que no pertenece al grupo `wheel` intenta usar `su`, la autenticación fallará.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué línea de configuración en `/etc/security/limits.conf` establece un límite duro de 4096 archivos abiertos para el usuario `admin`?

</div>
<div class="flashcard-back">

**R:** admin hard nofile 4096. La línea `admin hard nofile 4096` establece un límite duro de 4096 descriptores de archivo abiertos simultáneamente para el usuario `admin`. El campo `nofile` representa el número máximo de archivos abiertos y `hard` indica que es un límite absoluto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué línea PAM se añade para habilitar la depuración en el módulo pam_unix.so durante la autenticación?

</div>
<div class="flashcard-back">

**R:** auth required pam_unix.so debug. Añadir el parámetro `debug` al final de la línea del módulo habilita la salida de depuración. Los mensajes de depuración se envían al log de autenticación (`/var/log/auth.log` en Debian o `/var/log/secure` en RHEL).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué línea de configuración PAM configura `pam_faillock.so` para bloquear la cuenta tras 3 intentos fallidos con desbloqueo automático a los 600 segundos?

</div>
<div class="flashcard-back">

**R:** auth required pam_faillock.so preauth deny=3 unlock_time=600. La configuración de `pam_faillock.so` con `deny=3` bloquea la cuenta tras 3 intentos fallidos y `unlock_time=600` la desbloquea automáticamente después de 600 segundos (10 minutos). Se necesitan dos líneas: una con `preauth` (antes de la autenticación) y otra con `authfail` (tras el fallo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Memoriza los cuatro tipos de módulos PAM y qué función cumple cada uno. Es una d...

</div>
<div class="flashcard-back">

**R:** Memoriza los cuatro tipos de módulos PAM y qué función cumple cada uno. Es una de las preguntas más frecuentes del tema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La diferencia entre `required` y `requisite` es clave. `required` continúa evalu...

</div>
<div class="flashcard-back">

**R:** La diferencia entre `required` y `requisite` es clave. `required` continúa evaluando (para no revelar qué módulo falló), mientras que `requisite` detiene inmediatamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Si existe `/etc/nologin`, solo root puede iniciar sesión. El contenido del archi...

</div>
<div class="flashcard-back">

**R:** Si existe `/etc/nologin`, solo root puede iniciar sesión. El contenido del archivo se muestra como mensaje a los usuarios rechazados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `limits.conf` requiere que `pam_limits.so` esté habilitado en la sesión PAM corr...

</div>
<div class="flashcard-back">

**R:** `limits.conf` requiere que `pam_limits.so` esté habilitado en la sesión PAM correspondiente. Sin la línea `session required pam_limits.so`, los límites no se aplicarán.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `minlen`?

</div>
<div class="flashcard-back">

**R:** Longitud mínima de la contraseña

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `dcredit`?

</div>
<div class="flashcard-back">

**R:** Crédito por dígitos (negativo = requeridos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `ucredit`?

</div>
<div class="flashcard-back">

**R:** Crédito por mayúsculas (negativo = requeridas)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `ocredit`?

</div>
<div class="flashcard-back">

**R:** Crédito por caracteres especiales

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `nofile`?

</div>
<div class="flashcard-back">

**R:** Número máximo de archivos abiertos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Introducción a PAM?

</div>
<div class="flashcard-back">

**R:** PAM (Pluggable Authentication Modules) es un framework que permite a las aplicaciones de Linux delegar la autenticación a módulos configurables de forma independiente. Gracias a PAM, las aplicaciones n

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Arquitectura de PAM?

</div>
<div class="flashcard-back">

**R:** PAM organiza la autenticación en cuatro tipos de módulos (grupos funcionales):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Flags de control?

</div>
<div class="flashcard-back">

**R:** Los flags de control determinan cómo se comporta la pila PAM cuando un módulo tiene éxito o falla:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son Archivo /etc/security/limits.conf?

</div>
<div class="flashcard-back">

**R:** Define límites de recursos para usuarios y grupos. Es leído por `pam_limits.so`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.2">
</div>

<div class="flashcard" data-id="210.2-fc-039">
<div class="flashcard-front">

**P:** Que es/son Orden de evaluación?

</div>
<div class="flashcard-back">

**R:** PAM evalúa los módulos de arriba hacia abajo dentro de cada tipo. El resultado final depende de la combinación de los flags de control:

</div>
</div>

---

