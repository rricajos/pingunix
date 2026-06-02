---
title: "305.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.2"
---

# Flashcards: 305.2 - Freeipa Gestion De Entidades

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es el comando correcto para crear un usuario en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa user-add jgarcia --first=Juan --last=Garcia`. Los comandos de FreeIPA siguen el patrón `ipa ENTIDAD-ACCIÓN`. Para usuarios, el prefijo es `user-` seguido de la acción: `add`, `mod`, `del`, `find`, `show`, `enable`, `disable`, `unlock`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué se debe hacer antes de que las reglas HBAC personalizadas tengan efecto?

</div>
<div class="flashcard-back">

**R:** b) Deshabilitar la regla `allow_all` con `ipa hbacrule-disable allow_all`. La regla `allow_all` está habilitada por defecto y permite el acceso de todos los usuarios a todos los hosts. Mientras esté activa, las reglas HBAC personalizadas no tienen efecto porque `allow_all` siempre permite el acceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando permite verificar si un usuario tiene acceso a un host según las reglas HBAC?

</div>
<div class="flashcard-back">

**R:** c) `ipa hbactest --user=jgarcia --host=srv1.empresa.local --service=sshd`. `ipa hbactest` simula la evaluación de reglas HBAC para determinar si un usuario tiene acceso a un host mediante un servicio específico, sin necesidad de intentar la conexión real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-004">
<div class="flashcard-front">

**P:** ¿Cómo se inscribe un host en FreeIPA usando una contraseña de un solo uso (OTP)?

</div>
<div class="flashcard-back">

**R:** a) Se genera con `ipa host-add fqdn --random` y se usa con `ipa-client-install --password=OTP`. El administrador genera la OTP con `--random` al añadir el host al servidor IPA. Luego, en el cliente, se ejecuta `ipa-client-install --password=CONTRASEÑA_GENERADA` para completar la inscripción sin necesitar credenciales de administrador.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué tipo de grupo de FreeIPA puede contener miembros de un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** c) Grupo externo. Los grupos externos (creados con `--external`) pueden contener SIDs de Active Directory como miembros. Se usan típicamente en relaciones de confianza cross-realm para mapear entidades AD a permisos FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué componente de una regla sudo en FreeIPA define los comandos que el usuario puede ejecutar?

</div>
<div class="flashcard-back">

**R:** c) sudorule-add-allow-command. `ipa sudorule-add-allow-command` asocia comandos (individuales o grupos de comandos sudo) a una regla sudo, definiendo qué comandos están permitidos ejecutar con sudo dentro de esa regla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué hacen las reglas de automember en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) Asignan automáticamente usuarios o hosts a grupos basándose en atributos. Las reglas de automember usan expresiones regulares sobre atributos de la entidad (como departamento, FQDN, etc.) para asignar automáticamente nuevos usuarios u hosts al grupo correspondiente al momento de su creación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué permite hacer un ID View en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) Sobrescribir atributos POSIX de usuarios y grupos para hosts específicos. ID Views permiten que un mismo usuario tenga diferentes atributos POSIX (UID, GID, home, shell) en diferentes hosts. Esto es útil para migración o para integrar servidores legacy que requieren UIDs diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando obtiene un keytab Kerberos para un servicio desde el servidor FreeIPA?

</div>
<div class="flashcard-back">

**R:** c) `ipa-getkeytab -s servidor -p principal -k /ruta/keytab`. `ipa-getkeytab` contacta al servidor FreeIPA (`-s`), solicita el keytab para el principal Kerberos especificado (`-p`) y lo guarda en el archivo indicado (`-k`). Los keytabs permiten a los servicios autenticarse sin contraseña interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere que las contraseñas del grupo "desarrolladores" tengan una longitud mínima de 10 caracteres y expiren cada 180 días. ¿Qué comando es correcto?

</div>
<div class="flashcard-back">

**R:** b) `ipa pwpolicy-add desarrolladores --minlength=10 --maxlife=180 --priority=10`. `ipa pwpolicy-add` crea una política de contraseñas para un grupo específico. Se requiere `--priority` para definir el orden de evaluación (menor número = mayor prioridad). Esta política se aplica a los miembros del grupo en lugar de la política global.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando deshabilita un usuario en FreeIPA sin eliminarlo?

</div>
<div class="flashcard-back">

**R:** b) `ipa user-disable jgarcia`. `ipa user-disable` deshabilita la cuenta del usuario sin eliminarla del directorio. El usuario no podrá autenticarse hasta que sea habilitado nuevamente con `ipa user-enable`. Es diferente de `ipa user-del`, que elimina la cuenta permanentemente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de grupo FreeIPA no tiene GID numérico asociado?

</div>
<div class="flashcard-back">

**R:** c) Grupo no-POSIX. Los grupos no-POSIX (creados con `--nonposix`) no tienen un GID numérico asignado y solo sirven para organización interna dentro de FreeIPA. No se pueden usar para permisos del sistema de archivos, a diferencia de los grupos POSIX que se crean por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué parámetro de la política de contraseñas define el número de contraseñas anteriores que se recuerdan?

</div>
<div class="flashcard-back">

**R:** c) `--history`. El parámetro `--history` define cuántas contraseñas anteriores se almacenan para evitar que el usuario las reutilice. Por ejemplo, `--history=12` impide usar las últimas 12 contraseñas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué comando muestra todos los atributos de un usuario en FreeIPA, incluyendo los atributos operacionales?

</div>
<div class="flashcard-back">

**R:** b) `ipa user-show jgarcia --all`. La opción `--all` de `ipa user-show` muestra todos los atributos del usuario, incluyendo los atributos operacionales de LDAP que normalmente no se muestran. Sin `--all`, solo se muestran los atributos más comunes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando permite desbloquear una cuenta de usuario que ha sido bloqueada por exceder el número máximo de intentos de autenticación fallidos?

</div>
<div class="flashcard-back">

**R:** c) `ipa user-unlock jgarcia`. `ipa user-unlock` desbloquea una cuenta que fue bloqueada automáticamente por exceder el número máximo de intentos fallidos de autenticación (`--maxfail` en la política de contraseñas). Es diferente de `ipa user-enable`, que habilita una cuenta que fue deshabilitada manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-016">
<div class="flashcard-front">

**P:** En las reglas de automember, ¿qué opción define la expresión regular para la condición de inclusión?

</div>
<div class="flashcard-back">

**R:** b) `--inclusive-regex`. En `ipa automember-add-condition`, la opción `--inclusive-regex` define la expresión regular que debe coincidir con el atributo especificado por `--key` para que la entidad sea añadida automáticamente al grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando aplica una ID View a un host específico en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa idview-apply vista --hosts=servidor.empresa.local`. `ipa idview-apply` vincula una ID View a uno o más hosts. Esto hace que cuando SSSD en ese host resuelva identidades, use los atributos sobrescritos definidos en la vista en lugar de los atributos globales del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando crea un grupo de comandos sudo en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa sudocmdgroup-add`. `ipa sudocmdgroup-add` crea un grupo de comandos sudo que permite agrupar varios comandos bajo un nombre. Luego se añaden los comandos individuales con `ipa sudocmdgroup-add-member` y se asocia el grupo a una regla sudo con `ipa sudorule-add-allow-command --sudocmdgroups=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué parámetro de la política de contraseñas define la prioridad de evaluación?

</div>
<div class="flashcard-back">

**R:** c) `--priority`. El parámetro `--priority` define el orden de evaluación de las políticas de contraseñas por grupo. Un número menor indica mayor prioridad. Cuando un usuario pertenece a varios grupos con políticas diferentes, se aplica la política con menor número de prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando permite establecer el usuario bajo cuya identidad se ejecutarán los comandos de una regla sudo?

</div>
<div class="flashcard-back">

**R:** c) `ipa sudorule-add-runasuser`. `ipa sudorule-add-runasuser` define el usuario bajo cuya identidad se ejecutarán los comandos permitidos por la regla sudo. Típicamente se configura con `--users=root` para permitir la ejecución como root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un usuario en FreeIPA con login `mlopez`, nombre `Maria` y apellido `Lopez`. <input type="text" class="fill-blank" data-answer="ipa user-add mlopez --first=Maria --last=Lopez" data-alt="ipa user-add mlopez --first Maria --last Lopez" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa user-add mlopez --first=Maria --last=Lopez. Los comandos de FreeIPA siguen el patrón `ipa ENTIDAD-ACCIÓN`. Para crear un usuario, los parámetros mínimos requeridos son `--first` (nombre) y `--last` (apellido). Se pueden añadir opciones adicionales como `--email`, `--shell`, `--password`, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para probar si el usuario `jgarcia` puede acceder al host `servidor1.empresa.local` mediante el servicio `sshd` según las reglas HBAC. <input type="text" class="fill-blank" data-answer="ipa hbactest --user=jgarcia --host=servidor1.empresa.local --service=sshd" data-alt="ipa hbactest --user jgarcia --host servidor1.empresa.local --service sshd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa hbactest --user=jgarcia --host=servidor1.empresa.local --service=sshd. `ipa hbactest` simula la evaluación de las reglas HBAC sin necesidad de intentar una conexión real. Requiere especificar el usuario, el host destino y el servicio PAM para determinar si el acceso sería permitido o denegado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para añadir los usuarios `jgarcia` y `mlopez` como miembros del grupo `desarrolladores`. <input type="text" class="fill-blank" data-answer="ipa group-add-member desarrolladores --users=jgarcia,mlopez" data-alt="ipa group-add-member desarrolladores --users jgarcia,mlopez" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa group-add-member desarrolladores --users=jgarcia,mlopez. `ipa group-add-member` añade miembros a un grupo existente. Se pueden especificar múltiples usuarios separados por comas con `--users=`. También se pueden añadir grupos como miembros (grupos anidados) con `--groups=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para deshabilitar la regla HBAC por defecto que permite acceso total. <input type="text" class="fill-blank" data-answer="ipa hbacrule-disable allow_all" data-alt="ipa hbacrule-disable allow_all" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa hbacrule-disable allow_all. La regla `allow_all` viene habilitada por defecto en FreeIPA y permite el acceso de todos los usuarios a todos los hosts. Es necesario deshabilitarla para que las reglas HBAC personalizadas tengan efecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para obtener el keytab Kerberos del servicio HTTP del host `web.empresa.local` desde el servidor FreeIPA `ipa.empresa.local` y guardarlo en `/etc/httpd/conf/httpd.keytab`. <input type="text" class="fill-blank" data-answer="ipa-getkeytab -s ipa.empresa.local -p HTTP/web.empresa.local -k /etc/httpd/conf/httpd.keytab" data-alt="ipa-getkeytab -s ipa.empresa.local -p HTTP/web.empresa.local -k /etc/httpd/conf/httpd.keytab" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa-getkeytab -s ipa.empresa.local -p HTTP/web.empresa.local -k /etc/httpd/conf/httpd.keytab. `ipa-getkeytab` extrae el keytab del servidor FreeIPA. `-s` especifica el servidor IPA, `-p` el principal Kerberos del servicio y `-k` la ruta del archivo keytab de destino. El servicio debe existir previamente (creado con `ipa service-add`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Los comandos siguen el patrón `ipa ENTIDAD-ACCIÓN`. Las acciones comunes son: `a...

</div>
<div class="flashcard-back">

**R:** Los comandos siguen el patrón `ipa ENTIDAD-ACCIÓN`. Las acciones comunes son: `add`, `mod`, `del`, `find`, `show`, `enable`, `disable`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: FreeIPA soporta grupos anidados (un grupo como miembro de otro grupo). Los grupo...

</div>
<div class="flashcard-back">

**R:** FreeIPA soporta grupos anidados (un grupo como miembro de otro grupo). Los grupos externos se usan para contener SIDs de Active Directory en relaciones de confianza.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La inscripción con OTP (One-Time Password) permite inscribir clientes sin propor...

</div>
<div class="flashcard-back">

**R:** La inscripción con OTP (One-Time Password) permite inscribir clientes sin proporcionar credenciales de administrador. El OTP se genera con `--random` y se usa una sola vez.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Por defecto existe la regla `allow_all` que permite acceso total. Se debe deshab...

</div>
<div class="flashcard-back">

**R:** Por defecto existe la regla `allow_all` que permite acceso total. Se debe deshabilitar antes de que las reglas HBAC personalizadas tengan efecto. `ipa hbactest` permite verificar si un acceso sería permitido o denegado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Las reglas sudo en FreeIPA se componen de: usuarios (quién), hosts (dónde), coma...

</div>
<div class="flashcard-back">

**R:** Las reglas sudo en FreeIPA se componen de: usuarios (quién), hosts (dónde), comandos permitidos (qué) y RunAs (como quién). Los comandos se agrupan en `sudocmdgroup` para facilitar la gestión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Las políticas de contraseñas pueden definirse por grupo con diferentes prioridad...

</div>
<div class="flashcard-back">

**R:** Las políticas de contraseñas pueden definirse por grupo con diferentes prioridades. La política con menor número de prioridad se aplica primero. La política global se aplica a todos si no hay una más específica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: Automember usa expresiones regulares sobre atributos de la entidad para determin...

</div>
<div class="flashcard-back">

**R:** Automember usa expresiones regulares sobre atributos de la entidad para determinar la pertenencia a grupos. Las reglas se aplican automáticamente al crear nuevas entidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-033">
<div class="flashcard-front">

**P:** Tip de examen: ID Views permiten que un mismo usuario tenga diferentes UIDs o directorios home ...

</div>
<div class="flashcard-back">

**R:** ID Views permiten que un mismo usuario tenga diferentes UIDs o directorios home en diferentes hosts. Son útiles para migración o para integrar servidores legacy con atributos POSIX diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `ipa hbacrule-add-user`?

</div>
<div class="flashcard-back">

**R:** Añadir usuarios/grupos a regla

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `--minlife`?

</div>
<div class="flashcard-back">

**R:** Vida mínima de la contraseña (días)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `--maxlife`?

</div>
<div class="flashcard-back">

**R:** Vida máxima de la contraseña (días)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-037">
<div class="flashcard-front">

**P:** Que hace el comando `--history`?

</div>
<div class="flashcard-back">

**R:** Número de contraseñas anteriores recordadas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-038">
<div class="flashcard-front">

**P:** Que hace el comando `--minclasses`?

</div>
<div class="flashcard-back">

**R:** Clases mínimas de caracteres (mayús, minús, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-039">
<div class="flashcard-front">

**P:** Que es/son Reglas de automember?

</div>
<div class="flashcard-back">

**R:** Automember asigna automáticamente usuarios o hosts a grupos basándose en sus atributos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-040">
<div class="flashcard-front">

**P:** Que es/son ID Views?

</div>
<div class="flashcard-back">

**R:** ID Views permiten sobrescribir atributos POSIX de usuarios y grupos por host:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.2">
</div>

<div class="flashcard" data-id="305.2-fc-041">
<div class="flashcard-front">

**P:** Que es/son ipa-getkeytab?

</div>
<div class="flashcard-back">

**R:** Gestiona keytabs Kerberos para servicios:

</div>
</div>

---

