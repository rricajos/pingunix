---
title: "207.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "207.3"
---

# Flashcards: 207.3 - Seguridad Dns

> 45 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cual es la funcion principal de DNSSEC?

</div>
<div class="flashcard-back">

**R:** b) Proporcionar autenticacion e integridad de las respuestas DNS. DNSSEC garantiza que las respuestas DNS no han sido modificadas (integridad) y que provienen de una fuente legitima (autenticacion) mediante firmas criptograficas. DNSSEC NO proporciona cifrado ni confidencialidad. Para cifrar las consultas DNS se utilizan tecnologias como DNS over TLS (DoT) o DNS over HTTPS (DoH).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-002">
<div class="flashcard-front">

**P:** ¿Que tipo de clave DNSSEC se utiliza para firmar los registros de datos de una zona (A, MX, NS, etc.)?

</div>
<div class="flashcard-back">

**R:** b) ZSK (Zone Signing Key). La ZSK (Zone Signing Key) se utiliza para firmar los registros de datos de la zona, como A, MX, NS, etc. La KSK (Key Signing Key) solo firma el conjunto de registros DNSKEY. Esta separacion permite rotar la ZSK con frecuencia sin necesidad de actualizar el registro DS en la zona padre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que registro DNSSEC se publica en la zona PADRE para vincular la cadena de confianza con la zona hija?

</div>
<div class="flashcard-back">

**R:** c) DS (Delegation Signer). El registro DS se publica en la zona padre y contiene un hash de la KSK de la zona hija. Esto establece la cadena de confianza: el resolver verifica la firma de la zona padre, obtiene el DS, y lo usa para validar la DNSKEY de la zona hija.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-004">
<div class="flashcard-front">

**P:** ¿Que mejora aporta NSEC3 respecto a NSEC?

</div>
<div class="flashcard-back">

**R:** b) NSEC3 impide la enumeracion de la zona (zone walking) usando hashes. NSEC enumera los nombres existentes en la zona en orden, lo que permite a un atacante "caminar" la zona completa descubriendo todos los nombres. NSEC3 soluciona este problema reemplazando los nombres reales por hashes criptograficos salteados, haciendo impracticable la enumeracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que protocolo utiliza TSIG para autenticar las transacciones DNS?

</div>
<div class="flashcard-back">

**R:** b) Criptografia simetrica con clave compartida (HMAC). TSIG (Transaction Signatures) utiliza criptografia simetrica basada en HMAC (Hash-based Message Authentication Code) con una clave secreta compartida entre ambos servidores. Los algoritmos comunes son hmac-sha256 y hmac-sha512. La misma clave debe estar configurada en ambos extremos de la comunicacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-006">
<div class="flashcard-front">

**P:** ¿Cual es el proposito principal de ejecutar BIND en un entorno chroot?

</div>
<div class="flashcard-back">

**R:** c) Limitar el acceso del proceso named a un directorio restringido, reduciendo el impacto de vulnerabilidades. El chroot confina el proceso `named` en un directorio aislado. Si un atacante explota una vulnerabilidad en BIND, solo tendria acceso a los archivos dentro del directorio chroot, no al resto del sistema de archivos. La opcion `-t` de named especifica el directorio chroot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-007">
<div class="flashcard-front">

**P:** En una configuracion de Split DNS con views en BIND, ¿que directiva determina que clientes son atendidos por cada vista?

</div>
<div class="flashcard-back">

**R:** b) `match-clients`. La directiva `match-clients` dentro de un bloque `view` determina que clientes seran atendidos por esa vista, basandose en su direccion IP. Las vistas se evaluan en orden y se usa la primera que coincida. Es importante recordar que cuando se usan views, TODAS las zonas deben estar dentro de una view.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-008">
<div class="flashcard-front">

**P:** ¿Que flag en la respuesta de `dig` indica que los datos han sido autenticados mediante DNSSEC?

</div>
<div class="flashcard-back">

**R:** c) `ad` (Authenticated Data). El flag `ad` en la respuesta de dig indica que el resolver recursivo ha verificado satisfactoriamente la cadena de firmas DNSSEC para esa respuesta. El flag `aa` indica que la respuesta proviene de un servidor autoritativo (pero no necesariamente verificada por DNSSEC). El flag `cd` indica que la verificacion DNSSEC fue deshabilitada por el cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-009">
<div class="flashcard-front">

**P:** ¿Que parametro de rate limiting en BIND permite que algunos clientes reciban una respuesta truncada (TC) en lugar de ser completamente bloqueados?

</div>
<div class="flashcard-back">

**R:** c) `slip`. El parametro `slip` determina con que frecuencia se envia una respuesta truncada (con el flag TC) a clientes afectados por el rate limiting, en lugar de simplemente descartar la consulta. Una respuesta TC indica al cliente que debe reintentar la consulta via TCP, lo que ayuda a los clientes legitimos a obtener sus respuestas mientras dificulta los ataques de amplificacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-010">
<div class="flashcard-front">

**P:** ¿Que comando genera una clave TSIG para autenticar transferencias de zona entre servidores BIND?

</div>
<div class="flashcard-back">

**R:** b) `tsig-keygen -a hmac-sha256 nombre-clave`. El comando `tsig-keygen` genera una clave TSIG en el formato listo para incluir en `named.conf`. La salida incluye el bloque `key` completo con el nombre, algoritmo y secreto en base64. Tambien se puede usar `ddns-confgen` para generar claves TSIG. `dnssec-keygen` se usa para claves DNSSEC (asimetricas), no para TSIG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-011">
<div class="flashcard-front">

**P:** ¿Que valor del flag en un registro DNSKEY identifica una KSK (Key Signing Key)?

</div>
<div class="flashcard-back">

**R:** c) 257. En los registros DNSKEY, el flag 257 identifica una KSK (Key Signing Key) y el flag 256 identifica una ZSK (Zone Signing Key). La KSK firma el conjunto de registros DNSKEY de la zona y su hash se publica como registro DS en la zona padre para establecer la cadena de confianza.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-012">
<div class="flashcard-front">

**P:** ¿Que directiva de BIND configura la validacion automatica de DNSSEC utilizando las claves de la zona raiz incluidas con el software?

</div>
<div class="flashcard-back">

**R:** b) `dnssec-validation auto;`. La directiva `dnssec-validation auto` configura BIND para validar automaticamente las respuestas DNSSEC usando las claves de confianza de la zona raiz que vienen incluidas con BIND. Con el valor `yes`, se requiere configurar manualmente las claves de confianza. El valor `auto` es el recomendado y el predeterminado en versiones recientes de BIND.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-013">
<div class="flashcard-front">

**P:** ¿Que opcion de configuracion en BIND oculta la version del servidor para dificultar el reconocimiento por parte de atacantes?

</div>
<div class="flashcard-back">

**R:** c) `version "none";`. La directiva `version "none";` dentro del bloque `options` de `named.conf` evita que BIND revele su numero de version al recibir consultas de tipo TXT para `version.bind` en la clase CHAOS. Se puede establecer cualquier cadena de texto, pero "none" o una cadena vacia son las opciones mas comunes para ocultar informacion al atacante.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-014">
<div class="flashcard-front">

**P:** En una configuracion de Split DNS con views, ¿que ocurre si se definen zonas fuera de un bloque `view` cuando ya existen otros bloques `view`?

</div>
<div class="flashcard-back">

**R:** b) Se produce un error de configuracion; todas las zonas deben estar dentro de una view. Cuando se utiliza la funcionalidad de views en BIND, TODAS las zonas deben estar definidas dentro de un bloque `view`. No se pueden mezclar zonas dentro y fuera de views. Ademas, la zona hint (raiz) debe incluirse en cada view que necesite resolucion recursiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que tipo de registro DNSSEC contiene la firma digital de un conjunto de registros?

</div>
<div class="flashcard-back">

**R:** c) RRSIG. El registro RRSIG (Resource Record Signature) contiene la firma digital de un conjunto de registros (RRset). Incluye informacion sobre el tipo de registro firmado, el algoritmo de firma, la fecha de expiracion y creacion de la firma, el key tag del DNSKEY utilizado y la firma codificada en base64. Cada tipo de registro en la zona tiene su correspondiente RRSIG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que mecanismo de seguridad DNS protege contra ataques de amplificacion limitando el numero de respuestas identicas por segundo?

</div>
<div class="flashcard-back">

**R:** c) Rate limiting. El rate limiting (limitacion de tasa) en BIND protege contra ataques de amplificacion DNS y denegacion de servicio al limitar el numero de respuestas identicas que el servidor envia por segundo. Se configura con la directiva `rate-limit` dentro del bloque `options`, con parametros como `responses-per-second`, `nxdomains-per-second` y `errors-per-second`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que puerto utiliza DNS over TLS (DoT) por defecto?

</div>
<div class="flashcard-back">

**R:** c) 853. DNS over TLS (DoT) utiliza el puerto 853 por defecto para cifrar las consultas DNS mediante TLS. A diferencia del DNS tradicional (puerto 53), DoT proporciona confidencialidad al cifrar la comunicacion entre el cliente y el resolver. DNS over HTTPS (DoH) utiliza el puerto 443, el mismo que el trafico HTTPS normal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-018">
<div class="flashcard-front">

**P:** ¿Que directiva de BIND permite restringir la recursion solo a clientes de una red especifica?

</div>
<div class="flashcard-back">

**R:** b) `allow-recursion { 192.168.0.0/16; };`. La directiva `allow-recursion` en el bloque `options` de BIND especifica que clientes pueden realizar consultas recursivas. Es una buena practica de seguridad restringir la recursion solo a la red interna para evitar que el servidor sea utilizado en ataques de amplificacion DNS. `allow-query` controla quien puede realizar cualquier tipo de consulta, no solo recursivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-019">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia fundamental entre DNSSEC y DNS over TLS (DoT)?

</div>
<div class="flashcard-back">

**R:** b) DNSSEC proporciona autenticacion e integridad, DoT proporciona confidencialidad (cifrado). DNSSEC utiliza firmas criptograficas para garantizar que las respuestas DNS no han sido modificadas (integridad) y provienen de una fuente legitima (autenticacion), pero no cifra las consultas. DoT cifra la comunicacion DNS mediante TLS, proporcionando confidencialidad. Son tecnologias complementarias, no sustitutivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que opcion del comando `named` especifica el directorio chroot en el que se ejecutara el proceso?

</div>
<div class="flashcard-back">

**R:** c) `-t`. La opcion `-t` del comando `named` especifica el directorio chroot. Por ejemplo, `named -t /var/named/chroot` ejecuta BIND confinado en ese directorio. Dentro del chroot se replica la estructura de directorios necesaria (etc/, var/, dev/) con los archivos de configuracion y zona. En RHEL/CentOS, el paquete `bind-chroot` facilita esta configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando genera un par de claves DNSSEC de tipo KSK con algoritmo RSASHA256 para la zona ejemplo.com?

</div>
<div class="flashcard-back">

**R:** dnssec-keygen -a RSASHA256 -b 2048 -n ZONE -f KSK ejemplo.com. El comando `dnssec-keygen` genera pares de claves DNSSEC. La opcion `-a` especifica el algoritmo (RSASHA256), `-b` el tamano en bits (2048), `-n ZONE` indica que es una clave de zona, y `-f KSK` indica que es una Key Signing Key. Sin `-f KSK`, se genera una ZSK por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando permite realizar una consulta DNS con validacion DNSSEC activada usando la herramienta `dig`?

</div>
<div class="flashcard-back">

**R:** dig +dnssec. El comando `dig +dnssec` realiza una consulta DNS solicitando al resolver que incluya la informacion DNSSEC (registros RRSIG) en la respuesta. Por ejemplo: `dig +dnssec ejemplo.com A`. En la respuesta, el flag `ad` (Authenticated Data) indica que la cadena de firmas DNSSEC fue verificada satisfactoriamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando firma un archivo de zona DNS con las claves DNSSEC generadas previamente?

</div>
<div class="flashcard-back">

**R:** dnssec-signzone. El comando `dnssec-signzone` firma un archivo de zona con las claves DNSSEC (KSK y ZSK) que se encuentren en el directorio actual. Se usa con opciones como `-o` para especificar el nombre de la zona, `-N INCREMENT` para incrementar el serial, y `-3` seguido de un salt para generar registros NSEC3 en lugar de NSEC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando de BIND se utiliza para probar una transferencia de zona autenticada con TSIG?

</div>
<div class="flashcard-back">

**R:** dig AXFR -k. El comando `dig` con la opcion `-k` permite especificar un archivo de clave TSIG para autenticar la transferencia de zona. El formato completo es: `dig @servidor dominio AXFR -k /ruta/al/archivo.key`. El archivo de clave contiene el bloque `key` con el nombre, algoritmo y secreto compartido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-025">
<div class="flashcard-front">

**P:** ¿Que directiva en `named.conf` deshabilita globalmente las transferencias de zona por defecto?

</div>
<div class="flashcard-back">

**R:** allow-transfer { none; };. La directiva `allow-transfer { none; };` dentro del bloque `options` deshabilita las transferencias de zona de forma global. Esta es una buena practica de seguridad que impide que cualquier host solicite una copia completa de la zona. Despues, se pueden habilitar transferencias selectivamente en cada zona individual usando `allow-transfer` con las IPs de los esclavos autorizados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la diferencia entre KSK y ZSK. La KSK firma las claves (DNSKEY), la ZSK f...

</div>
<div class="flashcard-back">

**R:** Conoce la diferencia entre KSK y ZSK. La KSK firma las claves (DNSKEY), la ZSK firma los registros de datos. La KSK se vincula con la zona padre mediante el registro DS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: NSEC permite zone walking (enumeracion). NSEC3 soluciona este problema usando ha...

</div>
<div class="flashcard-back">

**R:** NSEC permite zone walking (enumeracion). NSEC3 soluciona este problema usando hashes. Ambos prueban la no existencia de un registro de forma autenticada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: El flag `ad` (Authenticated Data) en la respuesta de dig indica que la respuesta...

</div>
<div class="flashcard-back">

**R:** El flag `ad` (Authenticated Data) en la respuesta de dig indica que la respuesta fue verificada con DNSSEC. `dnssec-validation auto` es la configuracion recomendada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: TSIG usa criptografia simetrica (clave compartida) para autenticar transacciones...

</div>
<div class="flashcard-back">

**R:** TSIG usa criptografia simetrica (clave compartida) para autenticar transacciones DNS. Es el metodo recomendado para asegurar transferencias de zona y comunicaciones rndc. La misma clave debe estar en ambos servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: El chroot confina BIND en un directorio aislado. Si el servicio es comprometido,...

</div>
<div class="flashcard-back">

**R:** El chroot confina BIND en un directorio aislado. Si el servicio es comprometido, el atacante solo tiene acceso a los archivos dentro del chroot. La opcion `-t` de `named` especifica el directorio chroot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Rate limiting mitiga ataques de amplificacion DNS. El parametro `slip` permite q...

</div>
<div class="flashcard-back">

**R:** Rate limiting mitiga ataques de amplificacion DNS. El parametro `slip` permite que algunos clientes legitimos reciban una respuesta truncada (TC), forzandolos a reintentar por TCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: DoT y DoH proporcionan confidencialidad (cifrado) para las consultas DNS. DNSSEC...

</div>
<div class="flashcard-back">

**R:** DoT y DoH proporcionan confidencialidad (cifrado) para las consultas DNS. DNSSEC proporciona autenticacion e integridad. Son complementarios, no sustitutos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-033">
<div class="flashcard-front">

**P:** Tip de examen: Split DNS usa `view` en BIND para servir diferentes respuestas segun el cliente....

</div>
<div class="flashcard-back">

**R:** Split DNS usa `view` en BIND para servir diferentes respuestas segun el cliente. Las vistas se evaluan en orden. Es una practica comun para separar la resolucion interna de la externa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `responses-per-second`?

</div>
<div class="flashcard-back">

**R:** Maximo de respuestas identicas por segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `slip`?

</div>
<div class="flashcard-back">

**R:** Cada N respuestas limitadas, enviar una truncada (TC)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `nxdomains-per-second`?

</div>
<div class="flashcard-back">

**R:** Limite de respuestas NXDOMAIN por segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-037">
<div class="flashcard-front">

**P:** Que hace el comando `errors-per-second`?

</div>
<div class="flashcard-back">

**R:** Limite de respuestas de error por segundo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son DNSSEC (DNS Security Extensions)?

</div>
<div class="flashcard-back">

**R:** DNSSEC anade autenticacion e integridad a las respuestas DNS mediante firmas criptograficas. No proporciona cifrado (confidencialidad), sino que permite verificar que la respuesta DNS no ha sido modifi

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son TSIG (Transaction Signatures)?

</div>
<div class="flashcard-back">

**R:** TSIG proporciona autenticacion para transacciones DNS usando claves simetricas compartidas (HMAC). Se usa principalmente para:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son BIND en chroot?

</div>
<div class="flashcard-back">

**R:** Ejecutar BIND en un entorno chroot limita el acceso del proceso `named` a un directorio restringido, reduciendo el impacto de una posible vulnerabilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son Rate Limiting (Limitacion de tasa)?

</div>
<div class="flashcard-back">

**R:** La limitacion de tasa protege contra ataques de amplificacion DNS y denegacion de servicio:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-042">
<div class="flashcard-front">

**P:** Que es/son Split DNS (DNS dividido)?

</div>
<div class="flashcard-back">

**R:** Split DNS presenta diferentes respuestas segun el origen de la consulta (red interna vs. externa):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-043">
<div class="flashcard-front">

**P:** Que es/son Resumen de tecnologias de seguridad DNS?

</div>
<div class="flashcard-back">

**R:** | Tecnologia | Proteccion | Mecanismo |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-044">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas de seguridad DNS?

</div>
<div class="flashcard-back">

**R:** - **Ocultar la version** de BIND: `version "none";`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.3">
</div>

<div class="flashcard" data-id="207.3-fc-045">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

