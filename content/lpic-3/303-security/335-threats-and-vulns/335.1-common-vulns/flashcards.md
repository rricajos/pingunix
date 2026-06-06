---
title: "335.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "335.1"
---

# Flashcards: 335.1 - Vulnerabilidades Comunes

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que rango de puntuacion CVSS v3.1 se considera severidad "Critica"?

</div>
<div class="flashcard-back">

**R:** c). 9.0 - 10.0  En CVSS v3.1, la severidad critica corresponde a puntuaciones de 9.0 a 10.0. Alta es 7.0-8.9, Media es 4.0-6.9, Baja es 0.1-3.9.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que tipo de vulnerabilidad permite a un atacante inyectar scripts maliciosos que se ejecutan en el navegador de otros usuarios?

</div>
<div class="flashcard-back">

**R:** c). XSS (Cross-Site Scripting)  XSS permite inyectar codigo JavaScript malicioso en paginas web que luego se ejecuta en el navegador de otros usuarios. Puede ser reflected, stored o DOM-based.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que mecanismo de proteccion del kernel Linux aleatoriza la posicion en memoria de segmentos como stack, heap y librerias?

</div>
<div class="flashcard-back">

**R:** b). ASLR (Address Space Layout Randomization)  ASLR aleatoriza las direcciones de memoria donde se cargan el stack, heap, librerias compartidas y otros segmentos, dificultando ataques de buffer overflow. Se controla con `kernel.randomize_va_space`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-004">
<div class="flashcard-front">

**P:** ¿Que comando aplica solo actualizaciones de seguridad en un sistema Red Hat/CentOS?

</div>
<div class="flashcard-back">

**R:** b). `yum update --security`  La opcion `--security` filtra las actualizaciones para aplicar solo aquellas clasificadas como parches de seguridad, evitando actualizaciones de funcionalidad que podrian introducir cambios no deseados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que formato tiene un identificador CVE?

</div>
<div class="flashcard-back">

**R:** b). CVE-2021-44228  El formato estandar es CVE-AÑO-NUMERO, con guiones como separadores. El año indica cuando se asigno el CVE, y el numero es un identificador secuencial unico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-006">
<div class="flashcard-front">

**P:** Segun OWASP Top 10, ¿que posicion ocupa "Injection" (inyeccion SQL, OS, LDAP)?

</div>
<div class="flashcard-back">

**R:** b). A03  En la version actual del OWASP Top 10, Injection ocupa la posicion A03. A01 es Broken Access Control y A02 es Cryptographic Failures.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que tipo de escalada de privilegios se produce cuando un usuario normal obtiene acceso root?

</div>
<div class="flashcard-back">

**R:** b). Escalada vertical  La escalada vertical implica obtener privilegios superiores a los que el usuario tiene asignados (ej: de usuario normal a root). La escalada horizontal implica acceder a recursos de otro usuario del mismo nivel de privilegios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando verifica la integridad de todos los paquetes instalados en un sistema RHEL?

</div>
<div class="flashcard-back">

**R:** b). `rpm -Va`  `rpm -Va` (verify all) compara los archivos de cada paquete instalado con la informacion almacenada en la base de datos RPM, mostrando diferencias en tamaño, permisos, propietario, MD5, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que metrica CVSS indica si la vulnerabilidad puede explotarse remotamente a traves de la red?

</div>
<div class="flashcard-back">

**R:** b). Attack Vector: Network  Attack Vector (AV) con valor Network (N) indica que la vulnerabilidad puede explotarse remotamente a traves de la red. Adjacent (A) requiere estar en la misma red, Local (L) requiere acceso local, y Physical (P) requiere acceso fisico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que es una condicion de carrera (race condition) en el contexto de seguridad?

</div>
<div class="flashcard-back">

**R:** b). Una vulnerabilidad que explota el tiempo entre la verificacion y el uso de un recurso (TOCTOU)  TOCTOU (Time of Check, Time of Use) es un tipo de race condition donde un atacante modifica un recurso entre el momento en que se verifica su estado y el momento en que se usa, explotando esa ventana temporal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que valor del parametro `kernel.randomize_va_space` activa completamente ASLR (aleatoriza stack, heap, mmap y librerias)?

</div>
<div class="flashcard-back">

**R:** c). 2  El valor `2` activa ASLR completo, aleatorizando la posicion en memoria del stack, heap, mmap, librerias compartidas y VDSO. El valor `1` aleatoriza todo excepto el heap, y el valor `0` desactiva ASLR por completo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-012">
<div class="flashcard-front">

**P:** En el OWASP Top 10, ¿que categoria ocupa la posicion A01 como la vulnerabilidad web mas critica?

</div>
<div class="flashcard-back">

**R:** b). Broken Access Control  Broken Access Control (control de acceso inadecuado) ocupa la posicion A01 en el OWASP Top 10 actual. Esto incluye situaciones donde los usuarios pueden actuar fuera de sus permisos previstos, acceder a datos de otros usuarios o realizar acciones no autorizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que tipo de XSS almacena el script malicioso en el servidor (por ejemplo, en una base de datos o foro)?

</div>
<div class="flashcard-back">

**R:** b). Stored XSS  El Stored XSS (o persistente) almacena el codigo malicioso en el servidor, tipicamente en una base de datos, comentario de foro o perfil de usuario. Cada vez que otro usuario accede a esa pagina, el script se ejecuta en su navegador, siendo mas peligroso que el Reflected XSS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que herramienta es un escaner de vulnerabilidades de codigo abierto, anteriormente conocido como OpenVAS, ahora parte de Greenbone?

</div>
<div class="flashcard-back">

**R:** c). GVM (Greenbone Vulnerability Management)  OpenVAS evoluciono a Greenbone Vulnerability Management (GVM), que incluye el escaner OpenVAS como componente. Es la alternativa open source mas completa a escaneres comerciales como Nessus, proporcionando escaneo de vulnerabilidades de red, verificacion de configuracion y reportes detallados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que opcion de compilacion de GCC activa la proteccion con stack canaries contra desbordamientos de buffer?

</div>
<div class="flashcard-back">

**R:** b). `-fstack-protector`  La opcion `-fstack-protector` inserta valores canary (centinela) en la pila antes de la direccion de retorno. Si un desbordamiento de buffer sobrescribe el canary, se detecta antes de ejecutar la direccion de retorno corrupta. `-fstack-protector-all` protege todas las funciones, no solo las que usan buffers.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que formato tienen los avisos de seguridad (security advisories) de Debian?

</div>
<div class="flashcard-back">

**R:** c). DSA-NNNN  Los Debian Security Advisories usan el formato DSA seguido de un numero secuencial (por ejemplo, DSA-5022-1). RHSA es el formato de Red Hat, USN el de Ubuntu y SUSE-SU el de SUSE. Cada distribucion mantiene su propio sistema de avisos de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que tipo de ataque CSRF (Cross-Site Request Forgery) explota?

</div>
<div class="flashcard-back">

**R:** a). La confianza del servidor en el navegador del usuario autenticado  CSRF explota la confianza que un servidor tiene en el navegador del usuario. Al estar autenticado, el navegador envia automaticamente las cookies de sesion, permitiendo que un sitio malicioso haga que el navegador ejecute acciones no deseadas en el sitio vulnerable sin conocimiento del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que metrica CVSS v3.1 indica que no se requieren privilegios previos para explotar la vulnerabilidad?

</div>
<div class="flashcard-back">

**R:** c). Privileges Required: None  La metrica Privileges Required (PR) con valor None (N) significa que el atacante no necesita ningun tipo de privilegio o autenticacion previa para explotar la vulnerabilidad. Low requiere privilegios basicos y High requiere privilegios administrativos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que proteccion del procesador marca zonas de memoria como no ejecutables para prevenir la ejecucion de codigo inyectado?

</div>
<div class="flashcard-back">

**R:** c). NX bit (No-Execute)  El NX bit (tambien conocido como XD en Intel y EVP en AMD) marca paginas de memoria como no ejecutables. Esto impide que un atacante que ha inyectado codigo en el stack o heap pueda ejecutarlo directamente, ya que el procesador rechaza la ejecucion de instrucciones en esas zonas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que vector de ataque comun en Linux permite escalada de privilegios a traves de binarios con el bit SUID activado?

</div>
<div class="flashcard-back">

**R:** b). Un binario SUID se ejecuta con los privilegios del propietario del archivo, independientemente de quien lo ejecute  Los binarios con el bit SUID activado se ejecutan con los permisos del propietario (generalmente root). Si uno de estos binarios tiene una vulnerabilidad, un atacante puede explotarla para ejecutar codigo arbitrario con privilegios de root, logrando escalada vertical de privilegios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando busca todos los binarios con el bit SUID activado en el sistema de archivos?

</div>
<div class="flashcard-back">

**R:** find / -perm -4000 -type f. El comando `find` con `-perm -4000` busca archivos que tengan el bit SUID (valor octal 4000) activado. La opcion `-type f` limita la busqueda a archivos regulares. Este es un procedimiento comun de auditoria para detectar binarios SUID potencialmente peligrosos o no autorizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando en sistemas Debian verifica la integridad de los archivos de paquetes instalados comparandolos con sus sumas de verificacion?

</div>
<div class="flashcard-back">

**R:** debsums -c. `debsums -c` verifica las sumas MD5 de los archivos instalados por paquetes Debian y muestra solo los archivos que han sido modificados. Sin la opcion `-c`, muestra el estado de verificacion de todos los archivos. Es el equivalente en Debian de `rpm -Va` en Red Hat.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando muestra los puertos TCP en escucha junto con el proceso asociado en un sistema Linux?

</div>
<div class="flashcard-back">

**R:** ss -tlnp. `ss -tlnp` muestra los sockets TCP (`-t`) en estado de escucha (`-l`), con direcciones numericas (`-n`) y el proceso asociado (`-p`). Es la herramienta moderna que reemplaza a `netstat`. Verificar puertos abiertos inesperados es una practica fundamental de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando consulta la lista de actualizaciones de seguridad disponibles en un sistema Red Hat/CentOS?

</div>
<div class="flashcard-back">

**R:** yum updateinfo list security. `yum updateinfo list security` muestra todas las actualizaciones de seguridad disponibles para los paquetes instalados, incluyendo el identificador del advisory (RHSA), la severidad y el paquete afectado. En sistemas con dnf, se puede usar `dnf updateinfo list security`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando en sistemas Debian escanea el sistema en busca de paquetes con vulnerabilidades conocidas?

</div>
<div class="flashcard-back">

**R:** debsecan. `debsecan` consulta la base de datos de vulnerabilidades de Debian y compara los paquetes instalados con los CVEs conocidos. Se puede especificar la suite con `--suite bookworm`. Muestra los CVEs pendientes, su severidad y si hay una version corregida disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 2. Centra tu estudio en los conceptos de CVE, CVSS, los ...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 2. Centra tu estudio en los conceptos de CVE, CVSS, los tipos de vulnerabilidades principales y la gestion de parches. Es mas teorico que practico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conoce el significado de las metricas base de CVSS. Una puntuacion de 10.0 signi...

</div>
<div class="flashcard-back">

**R:** Conoce el significado de las metricas base de CVSS. Una puntuacion de 10.0 significa: accesible remotamente, sin complejidad, sin privilegios, sin interaccion del usuario, con impacto total en confidencialidad, integridad y disponibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conoce como consultar advisories de seguridad y aplicar parches especificos en l...

</div>
<div class="flashcard-back">

**R:** Conoce como consultar advisories de seguridad y aplicar parches especificos en las distribuciones principales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-029">
<div class="flashcard-front">

**P:** Que es/son CVSS (Common Vulnerability Scoring System)?

</div>
<div class="flashcard-back">

**R:** CVSS proporciona una puntuacion numerica (0.0 - 10.0) que indica la severidad de una vulnerabilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son OWASP Top 10?

</div>
<div class="flashcard-back">

**R:** El OWASP Top 10 es una lista de las vulnerabilidades web mas criticas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="335.1">
</div>

<div class="flashcard" data-id="335.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

