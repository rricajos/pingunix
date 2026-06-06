---
title: "333.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "333.2"
---

# Flashcards: 333.2 - Control De Acceso Obligatorio

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-001">
<div class="flashcard-front">

**P:** ¿Que comando muestra el modo actual de SELinux?

</div>
<div class="flashcard-back">

**R:** b). `getenforce`  `getenforce` muestra el modo actual de SELinux: Enforcing, Permissive o Disabled. `sestatus` proporciona informacion mas detallada incluyendo la politica cargada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-002">
<div class="flashcard-front">

**P:** Un administrador ejecuta `chcon -t httpd_sys_content_t /datos/web/index.html`. ¿Que ocurre si posteriormente se ejecuta `restorecon /datos/web/index.html`?

</div>
<div class="flashcard-back">

**R:** b). El contexto vuelve al valor por defecto del sistema de archivos  `chcon` establece contextos temporales que se pierden con `restorecon` o un reetiquetado del sistema. Para cambios permanentes se debe usar `semanage fcontext` seguido de `restorecon`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando establece permanentemente un booleano de SELinux?

</div>
<div class="flashcard-back">

**R:** b). `setsebool -P httpd_can_network_connect on`  La opcion `-P` (Persistent/Permanent) hace que el cambio del booleano sobreviva a reinicios. Sin `-P`, el cambio es solo temporal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que herramienta de AppArmor se utiliza para crear un perfil de forma interactiva, monitorizando los accesos de la aplicacion?

</div>
<div class="flashcard-back">

**R:** c). `aa-genprof`  `aa-genprof` inicia un proceso interactivo: pone la aplicacion en modo complain, permite ejecutarla en otra terminal, y luego analiza los logs para construir el perfil basandose en los accesos reales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-005">
<div class="flashcard-front">

**P:** ¿Donde se almacenan los perfiles de AppArmor?

</div>
<div class="flashcard-back">

**R:** b). `/etc/apparmor.d/`  Los perfiles de AppArmor se almacenan en `/etc/apparmor.d/`. Los nombres siguen la convencion de reemplazar `/` por `.` en la ruta del ejecutable (ej: `usr.sbin.apache2`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que comando genera un modulo de politica SELinux a partir de las denegaciones registradas en el log de auditoria?

</div>
<div class="flashcard-back">

**R:** c). `audit2allow -a -M mi_modulo`  `audit2allow` lee las denegaciones AVC del log de auditoria. Con `-a` lee todo el log, y `-M mi_modulo` genera un modulo compilado (.pp) listo para instalar con `semodule -i mi_modulo.pp`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-007">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia fundamental entre el modelo de etiquetado de SELinux y AppArmor?

</div>
<div class="flashcard-back">

**R:** a). SELinux usa etiquetas en el inodo del archivo; AppArmor usa rutas de archivo  SELinux almacena contextos de seguridad como atributos extendidos en el inodo (xattr), lo que los hace persistentes e independientes de la ruta. AppArmor define permisos basados en rutas de archivos, lo cual es mas simple pero no protege contra accesos mediante hardlinks o renombrados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-008">
<div class="flashcard-front">

**P:** Un proceso Apache en un sistema con SELinux intenta conectarse a una base de datos remota pero la conexion es denegada. ¿Cual es la solucion mas probable?

</div>
<div class="flashcard-back">

**R:** b). Ejecutar `setsebool -P httpd_can_network_connect on`  El booleano `httpd_can_network_connect` controla si Apache puede iniciar conexiones de red salientes. Por defecto esta desactivado por seguridad. Activarlo con `-P` resuelve el problema de forma permanente y correcta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando de AppArmor pone un perfil existente en modo complain para depuracion?

</div>
<div class="flashcard-back">

**R:** b). `aa-complain /etc/apparmor.d/perfil`  `aa-complain` cambia el modo del perfil especificado a complain, donde las violaciones se registran pero no se bloquean. Es el equivalente al modo permissive de SELinux para un perfil individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que ventaja principal tiene MAC (SELinux/AppArmor) sobre DAC?

</div>
<div class="flashcard-back">

**R:** b). MAC protege incluso si root esta comprometido  En DAC, root tiene acceso completo a todos los recursos. En MAC, las politicas son aplicadas por el kernel independientemente del usuario. Un proceso con UID 0 (root) sigue estando confinado por la politica MAC, limitando el daño que un atacante puede hacer incluso con acceso root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que comando de SELinux permite añadir un puerto personalizado al tipo `http_port_t` para que Apache pueda escuchar en el puerto 8080?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `semanage port -a` añade una nueva asignacion de puerto a un tipo SELinux. La opcion `-t` especifica el tipo, `-p` el protocolo y el numero de puerto. Si el puerto ya esta asignado a otro tipo, se debe usar `-m` (modify) en lugar de `-a` (add).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-012">
<div class="flashcard-front">

**P:** En SELinux, ¿que componente del contexto de seguridad es el principal mecanismo de control de acceso en la politica "targeted"?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El tipo (type) es el componente principal del control de acceso en la politica "targeted" de SELinux, implementando lo que se conoce como Type Enforcement (TE). Las reglas de la politica definen que tipos de procesos (dominios) pueden acceder a que tipos de archivos/recursos. Los otros componentes (usuario, rol, nivel) tienen un papel secundario en la politica targeted.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que ocurre cuando se cambia SELinux de modo "disabled" a "enforcing" en `/etc/selinux/config`?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Cambiar desde "disabled" requiere reinicio obligatorio. Ademas, como los archivos creados mientras SELinux estaba deshabilitado carecen de contextos de seguridad, el sistema debe realizar un reetiquetado completo (relabeling) del sistema de archivos. Esto se puede forzar creando el archivo `/.autorelabel` antes del reinicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-014">
<div class="flashcard-front">

**P:** En AppArmor, ¿que significado tiene el permiso `px` en un perfil?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El permiso `px` (Profile eXecute) indica que cuando el programa confinado ejecuta ese binario, se transiciona al perfil de AppArmor definido para ese ejecutable. Si no existe un perfil, la ejecucion se deniega. La variante `Px` añade limpieza de entorno (environment scrubbing) para mayor seguridad. `ix` hereda el perfil actual y `ux` ejecuta sin confinamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando de SELinux busca denegaciones AVC recientes en el log de auditoria?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `ausearch` es la herramienta del subsistema de auditoria de Linux. La opcion `-m AVC` filtra por mensajes de tipo AVC (Access Vector Cache) de SELinux, y `-ts recent` muestra solo los eventos recientes (ultimos 10 minutos). Es el primer paso en la solucion de problemas de SELinux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando de AppArmor genera un perfil basico automaticamente para una aplicacion sin interaccion del usuario?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `aa-autodep` genera un perfil basico de AppArmor automaticamente sin requerir interaccion. El perfil generado es minimo y generalmente necesita refinamiento posterior. `aa-genprof` es interactivo (monitorea accesos en tiempo real), `aa-logprof` actualiza perfiles existentes basandose en logs, y `aa-enforce` cambia el modo del perfil.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que politica de SELinux confina solo procesos especificos del sistema mientras deja los demas en dominio "unconfined"?

</div>
<div class="flashcard-back">

**R:** c) Correcta. La politica "targeted" es la politica por defecto en RHEL/CentOS/Fedora. Confina servicios especificos como httpd, named, sshd y otros, mientras que los procesos de usuario y servicios no definidos se ejecutan en el dominio `unconfined_t` sin restricciones MAC adicionales. La politica "mls" implementa Multi-Level Security completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-018">
<div class="flashcard-front">

**P:** Un administrador necesita instalar un modulo de politica SELinux compilado llamado `mi_modulo.pp`. ¿Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** a) Correcta. `semodule -i` instala un modulo de politica SELinux compilado (archivo .pp). El modulo se añade a la politica activa. Para listar los modulos instalados se usa `semodule -l`, y para eliminar uno se usa `semodule -r nombre_modulo`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-019">
<div class="flashcard-front">

**P:** En AppArmor, ¿que directorio contiene las abstracciones (conjuntos predefinidos de permisos comunes) que se incluyen en los perfiles?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Las abstracciones se almacenan en `/etc/apparmor.d/abstractions/` y contienen conjuntos de permisos comunes reutilizables. Por ejemplo, `base` incluye accesos basicos del sistema, `nameservice` permite resolucion de nombres, y `authentication` da acceso a archivos de autenticacion. Se incluyen en perfiles con `#include <abstractions/nombre>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-020">
<div class="flashcard-front">

**P:** ¿Que comando recarga un perfil de AppArmor modificado sin reiniciar el servicio AppArmor completo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `apparmor_parser -r` (replace) recarga un perfil especifico, reemplazando la version cargada en el kernel con la nueva version del archivo. Es mas eficiente que reiniciar todo el servicio AppArmor cuando solo se ha modificado un perfil individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para establecer permanentemente el contexto SELinux `httpd_sys_content_t` para todos los archivos bajo el directorio `/datos/web/` y sus subdirectorios. <input type="text" class="fill-blank" data-answer="semanage fcontext -a -t httpd_sys_content_t &quot;/datos/web(/.*)?&quot;" data-alt="semanage fcontext -a -t httpd_sys_content_t '/datos/web(/.*)?'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** semanage fcontext -a -t httpd_sys_content_t "/datos/web(/.*)?". `semanage fcontext -a` añade una regla permanente de contexto de archivos. La expresion regular `(/.*)?` cubre el directorio y todos sus contenidos recursivamente. Despues de ejecutar este comando, se debe ejecutar `restorecon -Rv /datos/web/` para aplicar los cambios a los archivos existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para poner SELinux en modo permissive de forma temporal (sin reinicio). <input type="text" class="fill-blank" data-answer="setenforce 0" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** setenforce 0. `setenforce 0` cambia SELinux a modo permissive de forma temporal. En este modo, SELinux registra las violaciones pero no las bloquea. Este cambio se pierde tras reiniciar. Para volver a enforcing se ejecuta `setenforce 1`. Para cambios permanentes se debe editar `/etc/selinux/config`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado completo de AppArmor, incluyendo perfiles cargados y procesos confinados. <input type="text" class="fill-blank" data-answer="aa-status" data-alt="apparmor_status" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** aa-status. `aa-status` (o su alias `apparmor_status`) muestra informacion detallada sobre el estado de AppArmor: numero de perfiles cargados, cuales estan en modo enforce, cuales en modo complain, y que procesos estan actualmente confinados por cada perfil.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para generar las reglas de politica SELinux necesarias a partir de todas las denegaciones AVC registradas en el log de auditoria. <input type="text" class="fill-blank" data-answer="audit2allow -a" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** audit2allow -a. `audit2allow -a` lee todas las denegaciones AVC del log de auditoria (`/var/log/audit/audit.log`) y genera las reglas de tipo allow necesarias para permitir esos accesos. Para crear un modulo compilado instalable, se añade `-M nombre_modulo`, generando archivos `.te` y `.pp`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para restaurar recursivamente los contextos SELinux por defecto de todos los archivos en `/var/www/html/`. <input type="text" class="fill-blank" data-answer="restorecon -Rv /var/www/html/" data-alt="restorecon -Rv /var/www/html" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** restorecon -Rv /var/www/html/. `restorecon` restaura los contextos de seguridad SELinux a los valores por defecto definidos por la politica. La opcion `-R` aplica recursivamente a todos los archivos y subdirectorios, y `-v` muestra los cambios realizados. Es el paso necesario despues de usar `semanage fcontext` o cuando los contextos se han corrompido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 4. Necesitas conocer tanto SELinux como AppArmor en prof...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 4. Necesitas conocer tanto SELinux como AppArmor en profundidad: modos, comandos de gestion, contextos de seguridad, booleanos y creacion de perfiles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Cambiar entre `enforcing` y `permissive` no requiere reinicio. Cambiar a/desde `...

</div>
<div class="flashcard-back">

**R:** Cambiar entre `enforcing` y `permissive` no requiere reinicio. Cambiar a/desde `disabled` SI requiere reinicio y reetiquetado del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `chcon` cambia contextos temporalmente (se pierden con `restorecon` o relabeling...

</div>
<div class="flashcard-back">

**R:** `chcon` cambia contextos temporalmente (se pierden con `restorecon` o relabeling). `semanage fcontext` + `restorecon` es la forma correcta y permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce el flujo completo: `aa-genprof` o `aa-autodep` para crear, `aa-complain` ...

</div>
<div class="flashcard-back">

**R:** Conoce el flujo completo: `aa-genprof` o `aa-autodep` para crear, `aa-complain` para depurar, `aa-logprof` para ajustar, `aa-enforce` para activar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `httpd_can_network_connect`?

</div>
<div class="flashcard-back">

**R:** Permitir a Apache conexiones de red

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `httpd_enable_homedirs`?

</div>
<div class="flashcard-back">

**R:** Permitir acceso a directorios home

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `ftpd_anon_write`?

</div>
<div class="flashcard-back">

**R:** Permitir escritura FTP anonima

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `px`?

</div>
<div class="flashcard-back">

**R:** Transicion a perfil del ejecutable

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son SELinux (Security-Enhanced Linux)?

</div>
<div class="flashcard-back">

**R:** SELinux fue desarrollado por la NSA y es el sistema MAC por defecto en distribuciones Red Hat/CentOS/Fedora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son AppArmor?

</div>
<div class="flashcard-back">

**R:** AppArmor es el sistema MAC por defecto en distribuciones Debian/Ubuntu y SUSE. Utiliza perfiles basados en rutas de archivos (no etiquetas como SELinux).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Comparacion SELinux vs AppArmor?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | SELinux | AppArmor |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="333.2">
</div>

<div class="flashcard" data-id="333.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

