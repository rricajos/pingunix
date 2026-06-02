---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "333 - Control de Acceso"
tema: "333.2 - Control de acceso obligatorio"
subtema: "333.2"
peso: 4
tags:
  - lpic-3
  - tema-333
  - selinux
  - apparmor
  - mac
---

# Ejercicios - 333.2 Control de Acceso Obligatorio

### Pregunta 1
¿Que comando muestra el modo actual de SELinux?

a) `sestatus --mode`
b) `getenforce`
c) `selinux --status`
d) `getselinux`

<details><summary>Respuesta</summary>

**b)** `getenforce`

`getenforce` muestra el modo actual de SELinux: Enforcing, Permissive o Disabled. `sestatus` proporciona informacion mas detallada incluyendo la politica cargada.
</details>

### Pregunta 2
Un administrador ejecuta `chcon -t httpd_sys_content_t /datos/web/index.html`. ¿Que ocurre si posteriormente se ejecuta `restorecon /datos/web/index.html`?

a) El contexto establecido por chcon se mantiene
b) El contexto vuelve al valor por defecto del sistema de archivos
c) Se produce un error porque el archivo ya tiene un contexto personalizado
d) restorecon no afecta a archivos modificados con chcon

<details><summary>Respuesta</summary>

**b)** El contexto vuelve al valor por defecto del sistema de archivos

`chcon` establece contextos temporales que se pierden con `restorecon` o un reetiquetado del sistema. Para cambios permanentes se debe usar `semanage fcontext` seguido de `restorecon`.
</details>

### Pregunta 3
¿Que comando establece permanentemente un booleano de SELinux?

a) `setsebool httpd_can_network_connect on`
b) `setsebool -P httpd_can_network_connect on`
c) `semanage bool --permanent httpd_can_network_connect on`
d) `setbool -permanent httpd_can_network_connect=1`

<details><summary>Respuesta</summary>

**b)** `setsebool -P httpd_can_network_connect on`

La opcion `-P` (Persistent/Permanent) hace que el cambio del booleano sobreviva a reinicios. Sin `-P`, el cambio es solo temporal.
</details>

### Pregunta 4
¿Que herramienta de AppArmor se utiliza para crear un perfil de forma interactiva, monitorizando los accesos de la aplicacion?

a) `aa-logprof`
b) `aa-enforce`
c) `aa-genprof`
d) `aa-autodep`

<details><summary>Respuesta</summary>

**c)** `aa-genprof`

`aa-genprof` inicia un proceso interactivo: pone la aplicacion en modo complain, permite ejecutarla en otra terminal, y luego analiza los logs para construir el perfil basandose en los accesos reales.
</details>

### Pregunta 5
¿Donde se almacenan los perfiles de AppArmor?

a) `/etc/security/apparmor/`
b) `/etc/apparmor.d/`
c) `/var/lib/apparmor/profiles/`
d) `/usr/share/apparmor/`

<details><summary>Respuesta</summary>

**b)** `/etc/apparmor.d/`

Los perfiles de AppArmor se almacenan en `/etc/apparmor.d/`. Los nombres siguen la convencion de reemplazar `/` por `.` en la ruta del ejecutable (ej: `usr.sbin.apache2`).
</details>

### Pregunta 6
¿Que comando genera un modulo de politica SELinux a partir de las denegaciones registradas en el log de auditoria?

a) `semanage module -create`
b) `sealert --generate-policy`
c) `audit2allow -a -M mi_modulo`
d) `semodule --create mi_modulo`

<details><summary>Respuesta</summary>

**c)** `audit2allow -a -M mi_modulo`

`audit2allow` lee las denegaciones AVC del log de auditoria. Con `-a` lee todo el log, y `-M mi_modulo` genera un modulo compilado (.pp) listo para instalar con `semodule -i mi_modulo.pp`.
</details>

### Pregunta 7
¿Cual es la diferencia fundamental entre el modelo de etiquetado de SELinux y AppArmor?

a) SELinux usa etiquetas en el inodo del archivo; AppArmor usa rutas de archivo
b) AppArmor usa etiquetas en el inodo; SELinux usa rutas
c) Ambos usan etiquetas en el inodo pero con diferente formato
d) Ambos usan rutas pero con diferente sintaxis

<details><summary>Respuesta</summary>

**a)** SELinux usa etiquetas en el inodo del archivo; AppArmor usa rutas de archivo

SELinux almacena contextos de seguridad como atributos extendidos en el inodo (xattr), lo que los hace persistentes e independientes de la ruta. AppArmor define permisos basados en rutas de archivos, lo cual es mas simple pero no protege contra accesos mediante hardlinks o renombrados.
</details>

### Pregunta 8
Un proceso Apache en un sistema con SELinux intenta conectarse a una base de datos remota pero la conexion es denegada. ¿Cual es la solucion mas probable?

a) Deshabilitar SELinux
b) Ejecutar `setsebool -P httpd_can_network_connect on`
c) Cambiar el contexto de Apache a unconfined_t
d) Crear una excepcion en el firewall

<details><summary>Respuesta</summary>

**b)** Ejecutar `setsebool -P httpd_can_network_connect on`

El booleano `httpd_can_network_connect` controla si Apache puede iniciar conexiones de red salientes. Por defecto esta desactivado por seguridad. Activarlo con `-P` resuelve el problema de forma permanente y correcta.
</details>

### Pregunta 9
¿Que comando de AppArmor pone un perfil existente en modo complain para depuracion?

a) `apparmor_parser --complain perfil`
b) `aa-complain /etc/apparmor.d/perfil`
c) `aa-status --complain perfil`
d) `aa-disable --mode=complain perfil`

<details><summary>Respuesta</summary>

**b)** `aa-complain /etc/apparmor.d/perfil`

`aa-complain` cambia el modo del perfil especificado a complain, donde las violaciones se registran pero no se bloquean. Es el equivalente al modo permissive de SELinux para un perfil individual.
</details>

### Pregunta 10
¿Que ventaja principal tiene MAC (SELinux/AppArmor) sobre DAC?

a) MAC es mas facil de configurar
b) MAC protege incluso si root esta comprometido
c) MAC permite a los usuarios definir sus propios permisos
d) MAC no requiere configuracion

<details><summary>Respuesta</summary>

**b)** MAC protege incluso si root esta comprometido

En DAC, root tiene acceso completo a todos los recursos. En MAC, las politicas son aplicadas por el kernel independientemente del usuario. Un proceso con UID 0 (root) sigue estando confinado por la politica MAC, limitando el daño que un atacante puede hacer incluso con acceso root.
</details>

### Pregunta 11

¿Que comando de SELinux permite añadir un puerto personalizado al tipo `http_port_t` para que Apache pueda escuchar en el puerto 8080?

a) `semanage port -m -t http_port_t -p tcp 8080`
b) `semanage port -a -t http_port_t -p tcp 8080`
c) `setsebool -P httpd_port_8080 on`
d) `chcon --port 8080 http_port_t`

<details><summary>Respuesta</summary>

**b) Correcta**

`semanage port -a` añade una nueva asignacion de puerto a un tipo SELinux. La opcion `-t` especifica el tipo, `-p` el protocolo y el numero de puerto. Si el puerto ya esta asignado a otro tipo, se debe usar `-m` (modify) en lugar de `-a` (add).

</details>

### Pregunta 12

En SELinux, ¿que componente del contexto de seguridad es el principal mecanismo de control de acceso en la politica "targeted"?

a) Usuario SELinux
b) Rol
c) Tipo
d) Nivel MLS

<details><summary>Respuesta</summary>

**c) Correcta**

El tipo (type) es el componente principal del control de acceso en la politica "targeted" de SELinux, implementando lo que se conoce como Type Enforcement (TE). Las reglas de la politica definen que tipos de procesos (dominios) pueden acceder a que tipos de archivos/recursos. Los otros componentes (usuario, rol, nivel) tienen un papel secundario en la politica targeted.

</details>

### Pregunta 13

¿Que ocurre cuando se cambia SELinux de modo "disabled" a "enforcing" en `/etc/selinux/config`?

a) El cambio se aplica inmediatamente sin reinicio
b) Se requiere reinicio y el sistema realizara un reetiquetado completo del sistema de archivos
c) Solo se necesita ejecutar `setenforce 1`
d) Se debe reinstalar la politica SELinux manualmente

<details><summary>Respuesta</summary>

**b) Correcta**

Cambiar desde "disabled" requiere reinicio obligatorio. Ademas, como los archivos creados mientras SELinux estaba deshabilitado carecen de contextos de seguridad, el sistema debe realizar un reetiquetado completo (relabeling) del sistema de archivos. Esto se puede forzar creando el archivo `/.autorelabel` antes del reinicio.

</details>

### Pregunta 14

En AppArmor, ¿que significado tiene el permiso `px` en un perfil?

a) Permite la ejecucion sin confinamiento
b) Permite la ejecucion heredando el perfil actual
c) Permite la ejecucion con transicion al perfil definido para ese ejecutable
d) Permite la ejecucion en modo privilegiado

<details><summary>Respuesta</summary>

**c) Correcta**

El permiso `px` (Profile eXecute) indica que cuando el programa confinado ejecuta ese binario, se transiciona al perfil de AppArmor definido para ese ejecutable. Si no existe un perfil, la ejecucion se deniega. La variante `Px` añade limpieza de entorno (environment scrubbing) para mayor seguridad. `ix` hereda el perfil actual y `ux` ejecuta sin confinamiento.

</details>

### Pregunta 15

¿Que comando de SELinux busca denegaciones AVC recientes en el log de auditoria?

a) `grep AVC /var/log/messages`
b) `ausearch -m AVC -ts recent`
c) `sealert --search AVC`
d) `semanage audit -l`

<details><summary>Respuesta</summary>

**b) Correcta**

`ausearch` es la herramienta del subsistema de auditoria de Linux. La opcion `-m AVC` filtra por mensajes de tipo AVC (Access Vector Cache) de SELinux, y `-ts recent` muestra solo los eventos recientes (ultimos 10 minutos). Es el primer paso en la solucion de problemas de SELinux.

</details>

### Pregunta 16

¿Que comando de AppArmor genera un perfil basico automaticamente para una aplicacion sin interaccion del usuario?

a) `aa-genprof`
b) `aa-autodep`
c) `aa-logprof`
d) `aa-enforce`

<details><summary>Respuesta</summary>

**b) Correcta**

`aa-autodep` genera un perfil basico de AppArmor automaticamente sin requerir interaccion. El perfil generado es minimo y generalmente necesita refinamiento posterior. `aa-genprof` es interactivo (monitorea accesos en tiempo real), `aa-logprof` actualiza perfiles existentes basandose en logs, y `aa-enforce` cambia el modo del perfil.

</details>

### Pregunta 17

¿Que politica de SELinux confina solo procesos especificos del sistema mientras deja los demas en dominio "unconfined"?

a) minimum
b) mls
c) targeted
d) strict

<details><summary>Respuesta</summary>

**c) Correcta**

La politica "targeted" es la politica por defecto en RHEL/CentOS/Fedora. Confina servicios especificos como httpd, named, sshd y otros, mientras que los procesos de usuario y servicios no definidos se ejecutan en el dominio `unconfined_t` sin restricciones MAC adicionales. La politica "mls" implementa Multi-Level Security completa.

</details>

### Pregunta 18

Un administrador necesita instalar un modulo de politica SELinux compilado llamado `mi_modulo.pp`. ¿Que comando debe usar?

a) `semodule -i mi_modulo.pp`
b) `semanage module -a mi_modulo.pp`
c) `audit2allow --install mi_modulo.pp`
d) `setsebool -i mi_modulo.pp`

<details><summary>Respuesta</summary>

**a) Correcta**

`semodule -i` instala un modulo de politica SELinux compilado (archivo .pp). El modulo se añade a la politica activa. Para listar los modulos instalados se usa `semodule -l`, y para eliminar uno se usa `semodule -r nombre_modulo`.

</details>

### Pregunta 19

En AppArmor, ¿que directorio contiene las abstracciones (conjuntos predefinidos de permisos comunes) que se incluyen en los perfiles?

a) `/etc/apparmor.d/tunables/`
b) `/etc/apparmor.d/abstractions/`
c) `/usr/share/apparmor/abstractions/`
d) `/var/lib/apparmor/abstractions/`

<details><summary>Respuesta</summary>

**b) Correcta**

Las abstracciones se almacenan en `/etc/apparmor.d/abstractions/` y contienen conjuntos de permisos comunes reutilizables. Por ejemplo, `base` incluye accesos basicos del sistema, `nameservice` permite resolucion de nombres, y `authentication` da acceso a archivos de autenticacion. Se incluyen en perfiles con `#include <abstractions/nombre>`.

</details>

### Pregunta 20

¿Que comando recarga un perfil de AppArmor modificado sin reiniciar el servicio AppArmor completo?

a) `aa-reload /etc/apparmor.d/perfil`
b) `apparmor_parser -r /etc/apparmor.d/perfil`
c) `systemctl reload apparmor-profile perfil`
d) `aa-enforce --reload /etc/apparmor.d/perfil`

<details><summary>Respuesta</summary>

**b) Correcta**

`apparmor_parser -r` (replace) recarga un perfil especifico, reemplazando la version cargada en el kernel con la nueva version del archivo. Es mas eficiente que reiniciar todo el servicio AppArmor cuando solo se ha modificado un perfil individual.

</details>

### Pregunta 21

Escribe el comando para establecer permanentemente el contexto SELinux `httpd_sys_content_t` para todos los archivos bajo el directorio `/datos/web/` y sus subdirectorios.

<input type="text" class="fill-blank" data-answer="semanage fcontext -a -t httpd_sys_content_t &quot;/datos/web(/.*)?&quot;" data-alt="semanage fcontext -a -t httpd_sys_content_t '/datos/web(/.*)?'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**semanage fcontext -a -t httpd_sys_content_t "/datos/web(/.*)?"**

`semanage fcontext -a` añade una regla permanente de contexto de archivos. La expresion regular `(/.*)?` cubre el directorio y todos sus contenidos recursivamente. Despues de ejecutar este comando, se debe ejecutar `restorecon -Rv /datos/web/` para aplicar los cambios a los archivos existentes.

</details>

### Pregunta 22

Escribe el comando para poner SELinux en modo permissive de forma temporal (sin reinicio).

<input type="text" class="fill-blank" data-answer="setenforce 0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**setenforce 0**

`setenforce 0` cambia SELinux a modo permissive de forma temporal. En este modo, SELinux registra las violaciones pero no las bloquea. Este cambio se pierde tras reiniciar. Para volver a enforcing se ejecuta `setenforce 1`. Para cambios permanentes se debe editar `/etc/selinux/config`.

</details>

### Pregunta 23

Escribe el comando para ver el estado completo de AppArmor, incluyendo perfiles cargados y procesos confinados.

<input type="text" class="fill-blank" data-answer="aa-status" data-alt="apparmor_status" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**aa-status**

`aa-status` (o su alias `apparmor_status`) muestra informacion detallada sobre el estado de AppArmor: numero de perfiles cargados, cuales estan en modo enforce, cuales en modo complain, y que procesos estan actualmente confinados por cada perfil.

</details>

### Pregunta 24

Escribe el comando para generar las reglas de politica SELinux necesarias a partir de todas las denegaciones AVC registradas en el log de auditoria.

<input type="text" class="fill-blank" data-answer="audit2allow -a" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**audit2allow -a**

`audit2allow -a` lee todas las denegaciones AVC del log de auditoria (`/var/log/audit/audit.log`) y genera las reglas de tipo allow necesarias para permitir esos accesos. Para crear un modulo compilado instalable, se añade `-M nombre_modulo`, generando archivos `.te` y `.pp`.

</details>

### Pregunta 25

Escribe el comando para restaurar recursivamente los contextos SELinux por defecto de todos los archivos en `/var/www/html/`.

<input type="text" class="fill-blank" data-answer="restorecon -Rv /var/www/html/" data-alt="restorecon -Rv /var/www/html" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**restorecon -Rv /var/www/html/**

`restorecon` restaura los contextos de seguridad SELinux a los valores por defecto definidos por la politica. La opcion `-R` aplica recursivamente a todos los archivos y subdirectorios, y `-v` muestra los cambios realizados. Es el paso necesario despues de usar `semanage fcontext` o cuando los contextos se han corrompido.

</details>
