---
title: "305.2 - Ejercicios: FreeIPA Gestión de Entidades"
description: "Ejercicios de práctica para gestión de entidades en FreeIPA"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.2"
peso: 4
tags:
  - lpic-3
  - tema-305
  - freeipa
  - ejercicios
---

# 305.2 Ejercicios - FreeIPA Gestión de Entidades

### Pregunta 1
¿Cuál es el comando correcto para crear un usuario en FreeIPA?

a) `ipa adduser jgarcia --first=Juan --last=Garcia`
b) `ipa user-add jgarcia --first=Juan --last=Garcia`
c) `ipa user create jgarcia --firstname=Juan --lastname=Garcia`
d) `ipa-user-add jgarcia --first=Juan --last=Garcia`

<details><summary>Respuesta</summary>

**b) `ipa user-add jgarcia --first=Juan --last=Garcia`**

Los comandos de FreeIPA siguen el patrón `ipa ENTIDAD-ACCIÓN`. Para usuarios, el prefijo es `user-` seguido de la acción: `add`, `mod`, `del`, `find`, `show`, `enable`, `disable`, `unlock`.
</details>

### Pregunta 2
¿Qué se debe hacer antes de que las reglas HBAC personalizadas tengan efecto?

a) Reiniciar el servicio FreeIPA
b) Deshabilitar la regla `allow_all` con `ipa hbacrule-disable allow_all`
c) Ejecutar `ipa hbac-rebuild`
d) Crear al menos 5 reglas HBAC

<details><summary>Respuesta</summary>

**b) Deshabilitar la regla `allow_all` con `ipa hbacrule-disable allow_all`**

La regla `allow_all` está habilitada por defecto y permite el acceso de todos los usuarios a todos los hosts. Mientras esté activa, las reglas HBAC personalizadas no tienen efecto porque `allow_all` siempre permite el acceso.
</details>

### Pregunta 3
¿Qué comando permite verificar si un usuario tiene acceso a un host según las reglas HBAC?

a) `ipa hbacrule-test --user=jgarcia --host=srv1.empresa.local`
b) `ipa access-check jgarcia srv1.empresa.local`
c) `ipa hbactest --user=jgarcia --host=srv1.empresa.local --service=sshd`
d) `ipa hbac-verify jgarcia@srv1.empresa.local`

<details><summary>Respuesta</summary>

**c) `ipa hbactest --user=jgarcia --host=srv1.empresa.local --service=sshd`**

`ipa hbactest` simula la evaluación de reglas HBAC para determinar si un usuario tiene acceso a un host mediante un servicio específico, sin necesidad de intentar la conexión real.
</details>

### Pregunta 4
¿Cómo se inscribe un host en FreeIPA usando una contraseña de un solo uso (OTP)?

a) Se genera con `ipa host-add fqdn --random` y se usa con `ipa-client-install --password=OTP`
b) Se envía un correo con la contraseña temporal
c) Se genera con `ipa otp-generate fqdn`
d) Se usa el mismo comando `ipa host-add` desde el cliente

<details><summary>Respuesta</summary>

**a) Se genera con `ipa host-add fqdn --random` y se usa con `ipa-client-install --password=OTP`**

El administrador genera la OTP con `--random` al añadir el host al servidor IPA. Luego, en el cliente, se ejecuta `ipa-client-install --password=CONTRASEÑA_GENERADA` para completar la inscripción sin necesitar credenciales de administrador.
</details>

### Pregunta 5
¿Qué tipo de grupo de FreeIPA puede contener miembros de un dominio Active Directory?

a) Grupo POSIX
b) Grupo no-POSIX
c) Grupo externo
d) Grupo universal

<details><summary>Respuesta</summary>

**c) Grupo externo**

Los grupos externos (creados con `--external`) pueden contener SIDs de Active Directory como miembros. Se usan típicamente en relaciones de confianza cross-realm para mapear entidades AD a permisos FreeIPA.
</details>

### Pregunta 6
¿Qué componente de una regla sudo en FreeIPA define los comandos que el usuario puede ejecutar?

a) sudorule-add-user
b) sudorule-add-host
c) sudorule-add-allow-command
d) sudorule-add-service

<details><summary>Respuesta</summary>

**c) sudorule-add-allow-command**

`ipa sudorule-add-allow-command` asocia comandos (individuales o grupos de comandos sudo) a una regla sudo, definiendo qué comandos están permitidos ejecutar con sudo dentro de esa regla.
</details>

### Pregunta 7
¿Qué hacen las reglas de automember en FreeIPA?

a) Eliminan automáticamente usuarios inactivos
b) Asignan automáticamente usuarios o hosts a grupos basándose en atributos
c) Sincronizan automáticamente miembros con Active Directory
d) Crean copias de seguridad automáticas de los datos de usuario

<details><summary>Respuesta</summary>

**b) Asignan automáticamente usuarios o hosts a grupos basándose en atributos**

Las reglas de automember usan expresiones regulares sobre atributos de la entidad (como departamento, FQDN, etc.) para asignar automáticamente nuevos usuarios u hosts al grupo correspondiente al momento de su creación.
</details>

### Pregunta 8
¿Qué permite hacer un ID View en FreeIPA?

a) Ver la interfaz web de FreeIPA desde otro idioma
b) Sobrescribir atributos POSIX de usuarios y grupos para hosts específicos
c) Crear una vista de auditoría de cambios
d) Personalizar la vista del panel de administración

<details><summary>Respuesta</summary>

**b) Sobrescribir atributos POSIX de usuarios y grupos para hosts específicos**

ID Views permiten que un mismo usuario tenga diferentes atributos POSIX (UID, GID, home, shell) en diferentes hosts. Esto es útil para migración o para integrar servidores legacy que requieren UIDs diferentes.
</details>

### Pregunta 9
¿Qué comando obtiene un keytab Kerberos para un servicio desde el servidor FreeIPA?

a) `ipa keytab-get`
b) `kinit -k servicio`
c) `ipa-getkeytab -s servidor -p principal -k /ruta/keytab`
d) `ktutil add servicio`

<details><summary>Respuesta</summary>

**c) `ipa-getkeytab -s servidor -p principal -k /ruta/keytab`**

`ipa-getkeytab` contacta al servidor FreeIPA (`-s`), solicita el keytab para el principal Kerberos especificado (`-p`) y lo guarda en el archivo indicado (`-k`). Los keytabs permiten a los servicios autenticarse sin contraseña interactiva.
</details>

### Pregunta 10
Un administrador quiere que las contraseñas del grupo "desarrolladores" tengan una longitud mínima de 10 caracteres y expiren cada 180 días. ¿Qué comando es correcto?

a) `ipa pwpolicy-mod --group=desarrolladores --minlength=10 --maxlife=180`
b) `ipa pwpolicy-add desarrolladores --minlength=10 --maxlife=180 --priority=10`
c) `ipa password-policy desarrolladores --min=10 --expire=180`
d) `ipa user-mod --group=desarrolladores --password-policy="min:10,max:180"`

<details><summary>Respuesta</summary>

**b) `ipa pwpolicy-add desarrolladores --minlength=10 --maxlife=180 --priority=10`**

`ipa pwpolicy-add` crea una política de contraseñas para un grupo específico. Se requiere `--priority` para definir el orden de evaluación (menor número = mayor prioridad). Esta política se aplica a los miembros del grupo en lugar de la política global.
</details>

### Pregunta 11

¿Qué comando deshabilita un usuario en FreeIPA sin eliminarlo?

a) `ipa user-del jgarcia --disable`
b) `ipa user-disable jgarcia`
c) `ipa user-mod jgarcia --disabled=true`
d) `ipa user-lock jgarcia`

<details><summary>Respuesta</summary>

**b) `ipa user-disable jgarcia`**

`ipa user-disable` deshabilita la cuenta del usuario sin eliminarla del directorio. El usuario no podrá autenticarse hasta que sea habilitado nuevamente con `ipa user-enable`. Es diferente de `ipa user-del`, que elimina la cuenta permanentemente.
</details>

### Pregunta 12

¿Qué tipo de grupo FreeIPA no tiene GID numérico asociado?

a) Grupo POSIX
b) Grupo externo
c) Grupo no-POSIX
d) Grupo universal

<details><summary>Respuesta</summary>

**c) Grupo no-POSIX**

Los grupos no-POSIX (creados con `--nonposix`) no tienen un GID numérico asignado y solo sirven para organización interna dentro de FreeIPA. No se pueden usar para permisos del sistema de archivos, a diferencia de los grupos POSIX que se crean por defecto.
</details>

### Pregunta 13

¿Qué parámetro de la política de contraseñas define el número de contraseñas anteriores que se recuerdan?

a) `--maxlife`
b) `--minlife`
c) `--history`
d) `--remember`

<details><summary>Respuesta</summary>

**c) `--history`**

El parámetro `--history` define cuántas contraseñas anteriores se almacenan para evitar que el usuario las reutilice. Por ejemplo, `--history=12` impide usar las últimas 12 contraseñas.
</details>

### Pregunta 14

¿Qué comando muestra todos los atributos de un usuario en FreeIPA, incluyendo los atributos operacionales?

a) `ipa user-show jgarcia`
b) `ipa user-show jgarcia --all`
c) `ipa user-find jgarcia --verbose`
d) `ipa user-show jgarcia --details`

<details><summary>Respuesta</summary>

**b) `ipa user-show jgarcia --all`**

La opción `--all` de `ipa user-show` muestra todos los atributos del usuario, incluyendo los atributos operacionales de LDAP que normalmente no se muestran. Sin `--all`, solo se muestran los atributos más comunes.
</details>

### Pregunta 15

¿Qué comando permite desbloquear una cuenta de usuario que ha sido bloqueada por exceder el número máximo de intentos de autenticación fallidos?

a) `ipa user-enable jgarcia`
b) `ipa user-mod jgarcia --unlock`
c) `ipa user-unlock jgarcia`
d) `ipa user-reset jgarcia`

<details><summary>Respuesta</summary>

**c) `ipa user-unlock jgarcia`**

`ipa user-unlock` desbloquea una cuenta que fue bloqueada automáticamente por exceder el número máximo de intentos fallidos de autenticación (`--maxfail` en la política de contraseñas). Es diferente de `ipa user-enable`, que habilita una cuenta que fue deshabilitada manualmente.
</details>

### Pregunta 16

En las reglas de automember, ¿qué opción define la expresión regular para la condición de inclusión?

a) `--regex`
b) `--inclusive-regex`
c) `--match-regex`
d) `--filter-regex`

<details><summary>Respuesta</summary>

**b) `--inclusive-regex`**

En `ipa automember-add-condition`, la opción `--inclusive-regex` define la expresión regular que debe coincidir con el atributo especificado por `--key` para que la entidad sea añadida automáticamente al grupo.
</details>

### Pregunta 17

¿Qué comando aplica una ID View a un host específico en FreeIPA?

a) `ipa idview-set vista --host=servidor.empresa.local`
b) `ipa idview-apply vista --hosts=servidor.empresa.local`
c) `ipa idview-assign vista servidor.empresa.local`
d) `ipa idview-link vista --to=servidor.empresa.local`

<details><summary>Respuesta</summary>

**b) `ipa idview-apply vista --hosts=servidor.empresa.local`**

`ipa idview-apply` vincula una ID View a uno o más hosts. Esto hace que cuando SSSD en ese host resuelva identidades, use los atributos sobrescritos definidos en la vista en lugar de los atributos globales del usuario.
</details>

### Pregunta 18

¿Qué comando crea un grupo de comandos sudo en FreeIPA?

a) `ipa sudorule-add-cmdgroup`
b) `ipa sudocmdgroup-add`
c) `ipa sudo-group-create`
d) `ipa sudocmd-group-add`

<details><summary>Respuesta</summary>

**b) `ipa sudocmdgroup-add`**

`ipa sudocmdgroup-add` crea un grupo de comandos sudo que permite agrupar varios comandos bajo un nombre. Luego se añaden los comandos individuales con `ipa sudocmdgroup-add-member` y se asocia el grupo a una regla sudo con `ipa sudorule-add-allow-command --sudocmdgroups=`.
</details>

### Pregunta 19

¿Qué parámetro de la política de contraseñas define la prioridad de evaluación?

a) `--weight`
b) `--order`
c) `--priority`
d) `--precedence`

<details><summary>Respuesta</summary>

**c) `--priority`**

El parámetro `--priority` define el orden de evaluación de las políticas de contraseñas por grupo. Un número menor indica mayor prioridad. Cuando un usuario pertenece a varios grupos con políticas diferentes, se aplica la política con menor número de prioridad.
</details>

### Pregunta 20

¿Qué comando permite establecer el usuario bajo cuya identidad se ejecutarán los comandos de una regla sudo?

a) `ipa sudorule-add-user`
b) `ipa sudorule-mod --runas`
c) `ipa sudorule-add-runasuser`
d) `ipa sudorule-set-runas`

<details><summary>Respuesta</summary>

**c) `ipa sudorule-add-runasuser`**

`ipa sudorule-add-runasuser` define el usuario bajo cuya identidad se ejecutarán los comandos permitidos por la regla sudo. Típicamente se configura con `--users=root` para permitir la ejecución como root.
</details>

### Pregunta 21

Escribe el comando para crear un usuario en FreeIPA con login `mlopez`, nombre `Maria` y apellido `Lopez`.

<input type="text" class="fill-blank" data-answer="ipa user-add mlopez --first=Maria --last=Lopez" data-alt="ipa user-add mlopez --first Maria --last Lopez" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa user-add mlopez --first=Maria --last=Lopez**

Los comandos de FreeIPA siguen el patrón `ipa ENTIDAD-ACCIÓN`. Para crear un usuario, los parámetros mínimos requeridos son `--first` (nombre) y `--last` (apellido). Se pueden añadir opciones adicionales como `--email`, `--shell`, `--password`, etc.
</details>

### Pregunta 22

Escribe el comando para probar si el usuario `jgarcia` puede acceder al host `servidor1.empresa.local` mediante el servicio `sshd` según las reglas HBAC.

<input type="text" class="fill-blank" data-answer="ipa hbactest --user=jgarcia --host=servidor1.empresa.local --service=sshd" data-alt="ipa hbactest --user jgarcia --host servidor1.empresa.local --service sshd" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa hbactest --user=jgarcia --host=servidor1.empresa.local --service=sshd**

`ipa hbactest` simula la evaluación de las reglas HBAC sin necesidad de intentar una conexión real. Requiere especificar el usuario, el host destino y el servicio PAM para determinar si el acceso sería permitido o denegado.
</details>

### Pregunta 23

Escribe el comando para añadir los usuarios `jgarcia` y `mlopez` como miembros del grupo `desarrolladores`.

<input type="text" class="fill-blank" data-answer="ipa group-add-member desarrolladores --users=jgarcia,mlopez" data-alt="ipa group-add-member desarrolladores --users jgarcia,mlopez" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa group-add-member desarrolladores --users=jgarcia,mlopez**

`ipa group-add-member` añade miembros a un grupo existente. Se pueden especificar múltiples usuarios separados por comas con `--users=`. También se pueden añadir grupos como miembros (grupos anidados) con `--groups=`.
</details>

### Pregunta 24

Escribe el comando para deshabilitar la regla HBAC por defecto que permite acceso total.

<input type="text" class="fill-blank" data-answer="ipa hbacrule-disable allow_all" data-alt="ipa hbacrule-disable allow_all" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa hbacrule-disable allow_all**

La regla `allow_all` viene habilitada por defecto en FreeIPA y permite el acceso de todos los usuarios a todos los hosts. Es necesario deshabilitarla para que las reglas HBAC personalizadas tengan efecto.
</details>

### Pregunta 25

Escribe el comando para obtener el keytab Kerberos del servicio HTTP del host `web.empresa.local` desde el servidor FreeIPA `ipa.empresa.local` y guardarlo en `/etc/httpd/conf/httpd.keytab`.

<input type="text" class="fill-blank" data-answer="ipa-getkeytab -s ipa.empresa.local -p HTTP/web.empresa.local -k /etc/httpd/conf/httpd.keytab" data-alt="ipa-getkeytab -s ipa.empresa.local -p HTTP/web.empresa.local -k /etc/httpd/conf/httpd.keytab" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa-getkeytab -s ipa.empresa.local -p HTTP/web.empresa.local -k /etc/httpd/conf/httpd.keytab**

`ipa-getkeytab` extrae el keytab del servidor FreeIPA. `-s` especifica el servidor IPA, `-p` el principal Kerberos del servicio y `-k` la ruta del archivo keytab de destino. El servicio debe existir previamente (creado con `ipa service-add`).
</details>
