---
title: "109.4 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "109.4"
---

# Flashcards: 109.4 - Dns Del Lado Cliente

> 31 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre `dig ejemplo.com` y `getent hosts ejemplo.com`?

</div>
<div class="flashcard-back">

**R:** b) `dig` consulta directamente el servidor DNS, mientras que `getent` sigue el orden definido en `/etc/nsswitch.conf`. `dig` es una herramienta de diagnostico DNS que consulta directamente al servidor DNS configurado en `/etc/resolv.conf`, sin tener en cuenta `/etc/hosts` ni el orden de `/etc/nsswitch.conf`. `getent hosts` usa el mecanismo completo de NSS (Name Service Switch), siguiendo el orden definido en `/etc/nsswitch.conf`. Si `hosts: files dns` esta configurado, `getent` primero buscara en `/etc/hosts` y solo si no encuentra el nombre consultara DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-002">
<div class="flashcard-front">

**P:** Que comando realiza una resolucion DNS inversa (de IP a nombre) con `dig`?

</div>
<div class="flashcard-back">

**R:** b) `dig -x 8.8.8.8`. La opcion `-x` de `dig` realiza una consulta DNS inversa, buscando el registro PTR asociado a la direccion IP. Internamente, `dig -x 8.8.8.8` consulta `8.8.8.8.in-addr.arpa` buscando un registro PTR. Con `host` se puede hacer simplemente `host 8.8.8.8`. Con `nslookup` seria `nslookup 8.8.8.8`. Para obtener solo la respuesta: `dig -x 8.8.8.8 +short`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-003">
<div class="flashcard-front">

**P:** Que hace la directiva `search empresa.com red.local` en `/etc/resolv.conf` cuando se ejecuta `ping servidor`?

</div>
<div class="flashcard-back">

**R:** b) Intenta resolver `servidor.empresa.com`, luego `servidor.red.local` y finalmente `servidor`. La directiva `search` define una lista de dominios que se agregan automaticamente a nombres cortos (sin punto final). El sistema intenta resolver el nombre agregando cada dominio en orden: primero `servidor.empresa.com`, si falla `servidor.red.local`, y finalmente `servidor` sin dominio. La directiva `search` es mutuamente excluyente con `domain`; si ambas estan presentes, se usa la ultima definida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-004">
<div class="flashcard-front">

**P:** Como se consultan los registros MX (servidores de correo) de `ejemplo.com` con `dig`?

</div>
<div class="flashcard-back">

**R:** b) `dig ejemplo.com MX`. En `dig`, el tipo de registro se especifica como argumento despues del nombre de dominio. `dig ejemplo.com MX` consulta los registros MX que indican los servidores de correo del dominio. Para obtener solo la respuesta se agrega `+short`: `dig ejemplo.com MX +short`. Con `host` seria `host -t MX ejemplo.com` y con `nslookup` seria `nslookup -type=MX ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-005">
<div class="flashcard-front">

**P:** Cual es la direccion IP en la que escucha el stub resolver de systemd-resolved?

</div>
<div class="flashcard-back">

**R:** b) 127.0.0.53. systemd-resolved proporciona un stub resolver que escucha en la direccion `127.0.0.53`. Cuando esta activo, `/etc/resolv.conf` contiene `nameserver 127.0.0.53`, redirigiendo todas las consultas DNS al stub resolver local. systemd-resolved actua como cache DNS local, soporta DNS sobre TLS y DNSSEC. Se gestiona con `resolvectl` (antes `systemd-resolve`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-006">
<div class="flashcard-front">

**P:** Que tipo de registro DNS se utiliza para resolver un nombre de dominio a una direccion IPv6?

</div>
<div class="flashcard-back">

**R:** b) AAAA. El registro AAAA (tambien llamado "quad-A") resuelve un nombre de dominio a una direccion IPv6. El registro A resuelve a IPv4. El registro MX indica los servidores de correo del dominio. El registro PTR se usa para resolucion inversa (IP a nombre). Otros registros importantes: NS (servidores DNS autoritativos), CNAME (alias de un nombre a otro), SOA (inicio de autoridad), TXT (texto libre).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-007">
<div class="flashcard-front">

**P:** Como se consulta un registro DNS usando un servidor DNS especifico (1.1.1.1) con `dig`?

</div>
<div class="flashcard-back">

**R:** c) `dig @1.1.1.1 ejemplo.com`. En `dig`, el servidor DNS se especifica con la notacion `@servidor` antes del nombre de dominio. Esto es util para diagnosticar problemas con el DNS local, comparar respuestas entre diferentes servidores DNS y verificar la propagacion de cambios DNS. Con `host` el servidor se especifica como ultimo argumento: `host ejemplo.com 1.1.1.1`. Con `nslookup`: `nslookup ejemplo.com 1.1.1.1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-008">
<div class="flashcard-front">

**P:** Que archivo controla el orden en que se resuelven los nombres de host en el sistema?

</div>
<div class="flashcard-back">

**R:** c) `/etc/nsswitch.conf`. El archivo `/etc/nsswitch.conf` define el orden de busqueda para distintas bases de datos del sistema, incluyendo la resolucion de nombres en la linea `hosts`. La configuracion tipica `hosts: files dns myhostname` indica que primero se busca en `/etc/hosts` (files), luego se consulta DNS y finalmente se resuelve el hostname local. `/etc/resolv.conf` define los servidores DNS pero no el orden de resolucion. `/etc/hosts` contiene las entradas estaticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-009">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos limpia la cache DNS de systemd-resolved?

</div>
<div class="flashcard-back">

**R:** b) `resolvectl flush-caches`. El comando `resolvectl flush-caches` limpia la cache DNS de systemd-resolved. `resolvectl status` muestra el estado completo de la resolucion DNS y `resolvectl statistics` muestra estadisticas de la cache. Si bien reiniciar el servicio (opcion A) tambien limparia la cache, `resolvectl flush-caches` es el metodo correcto y no interrumpe el servicio. `nscd` es un demonio de cache diferente (Name Service Cache Daemon).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-010">
<div class="flashcard-front">

**P:** Que opcion de `dig` muestra solo la respuesta sin las secciones adicionales de la salida?

</div>
<div class="flashcard-back">

**R:** b) `dig ejemplo.com +short`. La opcion `+short` de `dig` muestra solo la respuesta (la IP o el valor del registro) sin las secciones QUESTION, AUTHORITY, ADDITIONAL, ni las estadisticas. Otras opciones utiles de dig son: `+noall +answer` para mostrar solo la seccion ANSWER con formato completo, `+trace` para trazar la resolucion completa desde los servidores raiz, y `+nssearch` para encontrar servidores SOA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-011">
<div class="flashcard-front">

**P:** Que tipo de registro DNS se utiliza para indicar los servidores de nombres autoritativos de un dominio?

</div>
<div class="flashcard-back">

**R:** c) NS. El registro NS (Name Server) indica los servidores de nombres autoritativos para un dominio. Por ejemplo, `ejemplo.com NS ns1.ejemplo.com` indica que `ns1.ejemplo.com` es un servidor DNS autoritativo para `ejemplo.com`. Se puede consultar con `dig ejemplo.com NS`. El registro MX indica servidores de correo, CNAME define alias y SOA contiene la informacion de inicio de autoridad de la zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-012">
<div class="flashcard-front">

**P:** Cual es la herramienta de consulta DNS mas simple entre `dig`, `host` y `nslookup`?

</div>
<div class="flashcard-back">

**R:** b) `host`. `host` es la herramienta de consulta DNS mas simple, mostrando resultados concisos y faciles de leer. Por ejemplo, `host ejemplo.com` muestra directamente la IP sin informacion adicional. `dig` es la mas completa y detallada (muestra secciones QUESTION, ANSWER, AUTHORITY, etc.). `nslookup` es la clasica, con modo interactivo y no interactivo. Las tres consultan directamente al servidor DNS, a diferencia de `getent` que usa nsswitch.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-013">
<div class="flashcard-front">

**P:** Que tipo de registro DNS se usa para crear un alias de un nombre de dominio a otro?

</div>
<div class="flashcard-back">

**R:** c) CNAME. El registro CNAME (Canonical Name) crea un alias de un nombre de dominio a otro nombre de dominio (el nombre canonico). Por ejemplo, `www.ejemplo.com CNAME ejemplo.com` indica que `www.ejemplo.com` es un alias de `ejemplo.com`. Es util para apuntar multiples subdominios a un mismo destino. El registro A resuelve a IPv4, PTR hace resolucion inversa y TXT almacena texto libre (usado para SPF, DKIM, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-014">
<div class="flashcard-front">

**P:** Si en `/etc/nsswitch.conf` la linea de hosts dice `hosts: dns files`, que ocurre al resolver un nombre?

</div>
<div class="flashcard-back">

**R:** b) Se consulta primero DNS y luego `/etc/hosts`. El orden en la linea `hosts:` de `/etc/nsswitch.conf` define la secuencia de resolucion. Con `hosts: dns files`, primero se consultan los servidores DNS definidos en `/etc/resolv.conf` y solo si DNS no resuelve el nombre se busca en `/etc/hosts` (files). La configuracion mas comun es `hosts: files dns` donde `/etc/hosts` tiene prioridad sobre DNS, pero el orden puede cambiarse segun las necesidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-015">
<div class="flashcard-front">

**P:** Que comando de `nslookup` permite consultar los registros MX de un dominio?

</div>
<div class="flashcard-back">

**R:** b) `nslookup -type=MX ejemplo.com`. En `nslookup`, el tipo de registro se especifica con la opcion `-type=` seguida del tipo de registro DNS. `nslookup -type=MX ejemplo.com` consulta los registros MX (servidores de correo) del dominio. Para especificar un servidor DNS: `nslookup ejemplo.com 8.8.8.8`. En modo interactivo, se puede cambiar el tipo con `set type=MX`. Los equivalentes en `dig` y `host` son: `dig ejemplo.com MX` y `host -t MX ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-016">
<div class="flashcard-front">

**P:** Que seccion de la salida de `dig` muestra la respuesta real a la consulta DNS realizada?

</div>
<div class="flashcard-back">

**R:** b) ANSWER SECTION. La salida de `dig` se divide en varias secciones: la QUESTION SECTION muestra lo que se pregunto, la ANSWER SECTION contiene la respuesta real (el registro solicitado), la AUTHORITY SECTION muestra los servidores autoritativos para el dominio y la ADDITIONAL SECTION contiene informacion extra. Ademas, se muestra el tiempo de consulta (Query time) y el servidor DNS que respondio (SERVER). Para ver solo la seccion ANSWER: `dig +noall +answer ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-017">
<div class="flashcard-front">

**P:** Que opcion de `dig` permite trazar la resolucion DNS completa desde los servidores raiz?

</div>
<div class="flashcard-back">

**R:** b) `dig ejemplo.com +trace`. La opcion `+trace` de `dig` muestra el proceso completo de resolucion DNS iterativa desde los servidores raiz hasta la respuesta final. Muestra cada paso: consulta a los servidores raiz, luego a los servidores del TLD (.com), luego a los servidores autoritativos del dominio. Es muy util para diagnosticar problemas de propagacion DNS y entender la jerarquia de resolucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-018">
<div class="flashcard-front">

**P:** Que comando de `resolvectl` muestra los servidores DNS configurados en el sistema cuando se usa systemd-resolved?

</div>
<div class="flashcard-back">

**R:** a) `resolvectl status`. El comando `resolvectl status` muestra el estado completo de systemd-resolved, incluyendo los servidores DNS configurados para cada interfaz, el dominio de busqueda, el estado de DNSSEC y DNS sobre TLS. Tambien se puede usar `resolvectl dns` para ver solo los servidores DNS. Otros comandos utiles: `resolvectl query` (resolver nombre), `resolvectl statistics` (estadisticas de cache) y `resolvectl flush-caches` (limpiar cache).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-019">
<div class="flashcard-front">

**P:** Que ocurre si en `/etc/resolv.conf` se definen tanto la directiva `domain` como `search`?

</div>
<div class="flashcard-back">

**R:** c) Se usa la ultima directiva definida en el archivo. Las directivas `domain` y `search` en `/etc/resolv.conf` son mutuamente excluyentes. Si ambas estan presentes, se usa la ultima definida en el archivo. `search` es mas flexible que `domain` porque permite especificar multiples dominios de busqueda. Por ejemplo, `search empresa.com test.com` agrega ambos dominios a nombres cortos, mientras que `domain empresa.com` solo agrega uno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-020">
<div class="flashcard-front">

**P:** Que registro DNS se utiliza para la resolucion inversa (de direccion IP a nombre de dominio)?

</div>
<div class="flashcard-back">

**R:** d) PTR. El registro PTR (Pointer) se utiliza para la resolucion inversa, que traduce una direccion IP a un nombre de dominio. Para IPv4, las consultas se hacen en la zona `in-addr.arpa` (por ejemplo, `34.216.184.93.in-addr.arpa`). Con `dig` se realiza usando `dig -x IP`. Con `host` simplemente `host IP`. La resolucion inversa es importante para la verificacion de identidad de servidores de correo y diagnostico de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-021">
<div class="flashcard-front">

**P:** Que comando consulta el registro A de `ejemplo.com` usando el servidor DNS 8.8.8.8 con `dig`?

</div>
<div class="flashcard-back">

**R:** dig @8.8.8.8 ejemplo.com. En `dig`, el servidor DNS a consultar se especifica con la notacion `@servidor` antes del nombre de dominio. `dig @8.8.8.8 ejemplo.com` consulta el registro A (por defecto) del dominio usando el servidor DNS de Google (8.8.8.8) en lugar del servidor configurado en `/etc/resolv.conf`. Esto es util para diagnosticar problemas de DNS comparando respuestas de diferentes servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-022">
<div class="flashcard-front">

**P:** Que comando realiza una resolucion inversa de la IP 10.0.0.1 con `dig`?

</div>
<div class="flashcard-back">

**R:** dig -x 10.0.0.1. El comando `dig -x 10.0.0.1` realiza una consulta DNS inversa (PTR) para encontrar el nombre de dominio asociado a la IP 10.0.0.1. Internamente, consulta el registro PTR en la zona `1.0.0.10.in-addr.arpa`. Para obtener solo la respuesta: `dig -x 10.0.0.1 +short`. Con `host` seria simplemente `host 10.0.0.1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-023">
<div class="flashcard-front">

**P:** Que comando resuelve un nombre usando el mecanismo completo de nsswitch (incluyendo `/etc/hosts`)?

</div>
<div class="flashcard-back">

**R:** getent hosts ejemplo.com. El comando `getent hosts ejemplo.com` resuelve el nombre usando el mecanismo completo de NSS (Name Service Switch), siguiendo el orden definido en `/etc/nsswitch.conf`. Si la configuracion es `hosts: files dns`, primero buscara en `/etc/hosts` y luego consultara DNS. A diferencia de `dig`, `host` y `nslookup` que consultan directamente al servidor DNS, `getent` refleja como el sistema realmente resuelve los nombres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-024">
<div class="flashcard-front">

**P:** Que comando limpia la cache DNS de systemd-resolved?

</div>
<div class="flashcard-back">

**R:** resolvectl flush-caches. El comando `resolvectl flush-caches` limpia toda la cache DNS almacenada por systemd-resolved. Esto es util cuando se han realizado cambios en registros DNS y se quiere forzar nuevas consultas. `resolvectl statistics` muestra estadisticas de la cache (hits, misses). `resolvectl` (antes `systemd-resolve`) es la herramienta de linea de comandos para gestionar systemd-resolved.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-025">
<div class="flashcard-front">

**P:** Que comando consulta los registros MX del dominio empresa.com usando `host`?

</div>
<div class="flashcard-back">

**R:** host -t MX empresa.com. El comando `host -t MX empresa.com` consulta los registros MX (Mail Exchanger) del dominio, que indican los servidores de correo responsables de recibir email para ese dominio. La opcion `-t` especifica el tipo de registro DNS a consultar. Los equivalentes en otras herramientas son: `dig empresa.com MX` y `nslookup -type=MX empresa.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `nameserver`?

</div>
<div class="flashcard-back">

**R:** IP del servidor DNS (maximo 3)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `domain`?

</div>
<div class="flashcard-back">

**R:** Dominio local (se agrega automaticamente a nombres sin punto)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `search`?

</div>
<div class="flashcard-back">

**R:** Lista de dominios de busqueda (alternativa a domain)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `options`?

</div>
<div class="flashcard-back">

**R:** timeout, attempts, rotate, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-030">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **`/etc/resolv.conf`**: Maximo 3 `nameserver`; `domain` y `search` son mutuamente excluyentes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="109.4">
</div>

<div class="flashcard" data-id="109.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

