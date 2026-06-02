---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "335 - Amenazas y Evaluacion de Vulnerabilidades"
tema: "335.1 - Vulnerabilidades comunes y amenazas"
subtema: "335.1"
peso: 2
tags:
  - lpic-3
  - tema-335
  - cve
  - cvss
  - vulnerabilidades
---

# Ejercicios - 335.1 Vulnerabilidades Comunes y Amenazas

### Pregunta 1
¿Que rango de puntuacion CVSS v3.1 se considera severidad "Critica"?

a) 7.0 - 8.9
b) 8.0 - 9.9
c) 9.0 - 10.0
d) 10.0

<details><summary>Respuesta</summary>

**c)** 9.0 - 10.0

En CVSS v3.1, la severidad critica corresponde a puntuaciones de 9.0 a 10.0. Alta es 7.0-8.9, Media es 4.0-6.9, Baja es 0.1-3.9.
</details>

### Pregunta 2
¿Que tipo de vulnerabilidad permite a un atacante inyectar scripts maliciosos que se ejecutan en el navegador de otros usuarios?

a) SQL Injection
b) Buffer Overflow
c) XSS (Cross-Site Scripting)
d) CSRF (Cross-Site Request Forgery)

<details><summary>Respuesta</summary>

**c)** XSS (Cross-Site Scripting)

XSS permite inyectar codigo JavaScript malicioso en paginas web que luego se ejecuta en el navegador de otros usuarios. Puede ser reflected, stored o DOM-based.
</details>

### Pregunta 3
¿Que mecanismo de proteccion del kernel Linux aleatoriza la posicion en memoria de segmentos como stack, heap y librerias?

a) NX bit
b) ASLR (Address Space Layout Randomization)
c) Stack canaries
d) PIE

<details><summary>Respuesta</summary>

**b)** ASLR (Address Space Layout Randomization)

ASLR aleatoriza las direcciones de memoria donde se cargan el stack, heap, librerias compartidas y otros segmentos, dificultando ataques de buffer overflow. Se controla con `kernel.randomize_va_space`.
</details>

### Pregunta 4
¿Que comando aplica solo actualizaciones de seguridad en un sistema Red Hat/CentOS?

a) `yum update --critical`
b) `yum update --security`
c) `yum patch --security-only`
d) `yum upgrade --security-patches`

<details><summary>Respuesta</summary>

**b)** `yum update --security`

La opcion `--security` filtra las actualizaciones para aplicar solo aquellas clasificadas como parches de seguridad, evitando actualizaciones de funcionalidad que podrian introducir cambios no deseados.
</details>

### Pregunta 5
¿Que formato tiene un identificador CVE?

a) CVE:2021:44228
b) CVE-2021-44228
c) CVE/2021/44228
d) CVE.2021.44228

<details><summary>Respuesta</summary>

**b)** CVE-2021-44228

El formato estandar es CVE-AÑO-NUMERO, con guiones como separadores. El año indica cuando se asigno el CVE, y el numero es un identificador secuencial unico.
</details>

### Pregunta 6
Segun OWASP Top 10, ¿que posicion ocupa "Injection" (inyeccion SQL, OS, LDAP)?

a) A01
b) A03
c) A05
d) A07

<details><summary>Respuesta</summary>

**b)** A03

En la version actual del OWASP Top 10, Injection ocupa la posicion A03. A01 es Broken Access Control y A02 es Cryptographic Failures.
</details>

### Pregunta 7
¿Que tipo de escalada de privilegios se produce cuando un usuario normal obtiene acceso root?

a) Escalada horizontal
b) Escalada vertical
c) Escalada lateral
d) Escalada transversal

<details><summary>Respuesta</summary>

**b)** Escalada vertical

La escalada vertical implica obtener privilegios superiores a los que el usuario tiene asignados (ej: de usuario normal a root). La escalada horizontal implica acceder a recursos de otro usuario del mismo nivel de privilegios.
</details>

### Pregunta 8
¿Que comando verifica la integridad de todos los paquetes instalados en un sistema RHEL?

a) `rpm --verify-all`
b) `rpm -Va`
c) `yum verify all`
d) `rpm -checksums`

<details><summary>Respuesta</summary>

**b)** `rpm -Va`

`rpm -Va` (verify all) compara los archivos de cada paquete instalado con la informacion almacenada en la base de datos RPM, mostrando diferencias en tamaño, permisos, propietario, MD5, etc.
</details>

### Pregunta 9
¿Que metrica CVSS indica si la vulnerabilidad puede explotarse remotamente a traves de la red?

a) Attack Complexity: Low
b) Attack Vector: Network
c) Scope: Changed
d) Privileges Required: None

<details><summary>Respuesta</summary>

**b)** Attack Vector: Network

Attack Vector (AV) con valor Network (N) indica que la vulnerabilidad puede explotarse remotamente a traves de la red. Adjacent (A) requiere estar en la misma red, Local (L) requiere acceso local, y Physical (P) requiere acceso fisico.
</details>

### Pregunta 10
¿Que es una condicion de carrera (race condition) en el contexto de seguridad?

a) Un ataque que compite con el antivirus para ejecutar malware
b) Una vulnerabilidad que explota el tiempo entre la verificacion y el uso de un recurso (TOCTOU)
c) Un ataque de fuerza bruta que intenta multiples contraseñas simultaneamente
d) Una vulnerabilidad que solo aparece bajo alta carga del sistema

<details><summary>Respuesta</summary>

**b)** Una vulnerabilidad que explota el tiempo entre la verificacion y el uso de un recurso (TOCTOU)

TOCTOU (Time of Check, Time of Use) es un tipo de race condition donde un atacante modifica un recurso entre el momento en que se verifica su estado y el momento en que se usa, explotando esa ventana temporal.
</details>

### Pregunta 11

¿Que valor del parametro `kernel.randomize_va_space` activa completamente ASLR (aleatoriza stack, heap, mmap y librerias)?

a) 0
b) 1
c) 2
d) 3

<details><summary>Respuesta</summary>

**c)** 2

El valor `2` activa ASLR completo, aleatorizando la posicion en memoria del stack, heap, mmap, librerias compartidas y VDSO. El valor `1` aleatoriza todo excepto el heap, y el valor `0` desactiva ASLR por completo.
</details>

### Pregunta 12

En el OWASP Top 10, ¿que categoria ocupa la posicion A01 como la vulnerabilidad web mas critica?

a) Injection
b) Broken Access Control
c) Cryptographic Failures
d) Security Misconfiguration

<details><summary>Respuesta</summary>

**b)** Broken Access Control

Broken Access Control (control de acceso inadecuado) ocupa la posicion A01 en el OWASP Top 10 actual. Esto incluye situaciones donde los usuarios pueden actuar fuera de sus permisos previstos, acceder a datos de otros usuarios o realizar acciones no autorizadas.
</details>

### Pregunta 13

¿Que tipo de XSS almacena el script malicioso en el servidor (por ejemplo, en una base de datos o foro)?

a) Reflected XSS
b) Stored XSS
c) DOM-based XSS
d) Persistent Redirect XSS

<details><summary>Respuesta</summary>

**b)** Stored XSS

El Stored XSS (o persistente) almacena el codigo malicioso en el servidor, tipicamente en una base de datos, comentario de foro o perfil de usuario. Cada vez que otro usuario accede a esa pagina, el script se ejecuta en su navegador, siendo mas peligroso que el Reflected XSS.
</details>

### Pregunta 14

¿Que herramienta es un escaner de vulnerabilidades de codigo abierto, anteriormente conocido como OpenVAS, ahora parte de Greenbone?

a) Nessus
b) Nikto
c) GVM (Greenbone Vulnerability Management)
d) Qualys

<details><summary>Respuesta</summary>

**c)** GVM (Greenbone Vulnerability Management)

OpenVAS evoluciono a Greenbone Vulnerability Management (GVM), que incluye el escaner OpenVAS como componente. Es la alternativa open source mas completa a escaneres comerciales como Nessus, proporcionando escaneo de vulnerabilidades de red, verificacion de configuracion y reportes detallados.
</details>

### Pregunta 15

¿Que opcion de compilacion de GCC activa la proteccion con stack canaries contra desbordamientos de buffer?

a) `-fno-stack-protector`
b) `-fstack-protector`
c) `-enable-canary`
d) `-fstack-guard`

<details><summary>Respuesta</summary>

**b)** `-fstack-protector`

La opcion `-fstack-protector` inserta valores canary (centinela) en la pila antes de la direccion de retorno. Si un desbordamiento de buffer sobrescribe el canary, se detecta antes de ejecutar la direccion de retorno corrupta. `-fstack-protector-all` protege todas las funciones, no solo las que usan buffers.
</details>

### Pregunta 16

¿Que formato tienen los avisos de seguridad (security advisories) de Debian?

a) RHSA-YYYY:NNNN
b) USN-NNNN-N
c) DSA-NNNN
d) SUSE-SU-YYYY:NNNN

<details><summary>Respuesta</summary>

**c)** DSA-NNNN

Los Debian Security Advisories usan el formato DSA seguido de un numero secuencial (por ejemplo, DSA-5022-1). RHSA es el formato de Red Hat, USN el de Ubuntu y SUSE-SU el de SUSE. Cada distribucion mantiene su propio sistema de avisos de seguridad.
</details>

### Pregunta 17

¿Que tipo de ataque CSRF (Cross-Site Request Forgery) explota?

a) La confianza del servidor en el navegador del usuario autenticado
b) La inyeccion de codigo SQL en formularios web
c) La ejecucion de scripts maliciosos en el DOM del navegador
d) El desbordamiento de buffers en el servidor web

<details><summary>Respuesta</summary>

**a)** La confianza del servidor en el navegador del usuario autenticado

CSRF explota la confianza que un servidor tiene en el navegador del usuario. Al estar autenticado, el navegador envia automaticamente las cookies de sesion, permitiendo que un sitio malicioso haga que el navegador ejecute acciones no deseadas en el sitio vulnerable sin conocimiento del usuario.
</details>

### Pregunta 18

¿Que metrica CVSS v3.1 indica que no se requieren privilegios previos para explotar la vulnerabilidad?

a) Attack Vector: Network
b) User Interaction: None
c) Privileges Required: None
d) Attack Complexity: Low

<details><summary>Respuesta</summary>

**c)** Privileges Required: None

La metrica Privileges Required (PR) con valor None (N) significa que el atacante no necesita ningun tipo de privilegio o autenticacion previa para explotar la vulnerabilidad. Low requiere privilegios basicos y High requiere privilegios administrativos.
</details>

### Pregunta 19

¿Que proteccion del procesador marca zonas de memoria como no ejecutables para prevenir la ejecucion de codigo inyectado?

a) ASLR
b) Stack canaries
c) NX bit (No-Execute)
d) PIE

<details><summary>Respuesta</summary>

**c)** NX bit (No-Execute)

El NX bit (tambien conocido como XD en Intel y EVP en AMD) marca paginas de memoria como no ejecutables. Esto impide que un atacante que ha inyectado codigo en el stack o heap pueda ejecutarlo directamente, ya que el procesador rechaza la ejecucion de instrucciones en esas zonas.
</details>

### Pregunta 20

¿Que vector de ataque comun en Linux permite escalada de privilegios a traves de binarios con el bit SUID activado?

a) Un binario SUID ejecuta siempre como el usuario que lo invoca
b) Un binario SUID se ejecuta con los privilegios del propietario del archivo, independientemente de quien lo ejecute
c) Un binario SUID solo funciona con scripts de shell
d) Un binario SUID impide la escalada de privilegios

<details><summary>Respuesta</summary>

**b)** Un binario SUID se ejecuta con los privilegios del propietario del archivo, independientemente de quien lo ejecute

Los binarios con el bit SUID activado se ejecutan con los permisos del propietario (generalmente root). Si uno de estos binarios tiene una vulnerabilidad, un atacante puede explotarla para ejecutar codigo arbitrario con privilegios de root, logrando escalada vertical de privilegios.
</details>

### Pregunta 21

¿Que comando busca todos los binarios con el bit SUID activado en el sistema de archivos?

<input type="text" class="fill-blank" data-answer="find / -perm -4000 -type f" data-alt="find / -perm -u+s -type f" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**find / -perm -4000 -type f**

El comando `find` con `-perm -4000` busca archivos que tengan el bit SUID (valor octal 4000) activado. La opcion `-type f` limita la busqueda a archivos regulares. Este es un procedimiento comun de auditoria para detectar binarios SUID potencialmente peligrosos o no autorizados.
</details>

### Pregunta 22

¿Que comando en sistemas Debian verifica la integridad de los archivos de paquetes instalados comparandolos con sus sumas de verificacion?

<input type="text" class="fill-blank" data-answer="debsums -c" data-alt="debsums" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**debsums -c**

`debsums -c` verifica las sumas MD5 de los archivos instalados por paquetes Debian y muestra solo los archivos que han sido modificados. Sin la opcion `-c`, muestra el estado de verificacion de todos los archivos. Es el equivalente en Debian de `rpm -Va` en Red Hat.
</details>

### Pregunta 23

¿Que comando muestra los puertos TCP en escucha junto con el proceso asociado en un sistema Linux?

<input type="text" class="fill-blank" data-answer="ss -tlnp" data-alt="netstat -tlnp" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ss -tlnp**

`ss -tlnp` muestra los sockets TCP (`-t`) en estado de escucha (`-l`), con direcciones numericas (`-n`) y el proceso asociado (`-p`). Es la herramienta moderna que reemplaza a `netstat`. Verificar puertos abiertos inesperados es una practica fundamental de seguridad.
</details>

### Pregunta 24

¿Que comando consulta la lista de actualizaciones de seguridad disponibles en un sistema Red Hat/CentOS?

<input type="text" class="fill-blank" data-answer="yum updateinfo list security" data-alt="dnf updateinfo list security" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**yum updateinfo list security**

`yum updateinfo list security` muestra todas las actualizaciones de seguridad disponibles para los paquetes instalados, incluyendo el identificador del advisory (RHSA), la severidad y el paquete afectado. En sistemas con dnf, se puede usar `dnf updateinfo list security`.
</details>

### Pregunta 25

¿Que comando en sistemas Debian escanea el sistema en busca de paquetes con vulnerabilidades conocidas?

<input type="text" class="fill-blank" data-answer="debsecan" data-alt="debsecan --suite bookworm" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**debsecan**

`debsecan` consulta la base de datos de vulnerabilidades de Debian y compara los paquetes instalados con los CVEs conocidos. Se puede especificar la suite con `--suite bookworm`. Muestra los CVEs pendientes, su severidad y si hay una version corregida disponible.
</details>
