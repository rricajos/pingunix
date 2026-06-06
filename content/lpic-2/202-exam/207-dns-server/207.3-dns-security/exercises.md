---
title: "207.3 - Seguridad DNS"
tags: [lpic-2, examen-202, tema-207, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "207"
subtema: "207.3"
---

# 207.3 - Ejercicios: Seguridad DNS

### Pregunta 1

¿Cual es la funcion principal de DNSSEC?

a) Cifrar las consultas DNS para garantizar confidencialidad
b) Proporcionar autenticacion e integridad de las respuestas DNS
c) Limitar la tasa de consultas DNS para prevenir ataques DDoS
d) Restringir el acceso al servidor DNS mediante ACLs

<details><summary>Respuesta</summary>

**b) Proporcionar autenticacion e integridad de las respuestas DNS**

DNSSEC garantiza que las respuestas DNS no han sido modificadas (integridad) y que provienen de una fuente legitima (autenticacion) mediante firmas criptograficas. DNSSEC NO proporciona cifrado ni confidencialidad. Para cifrar las consultas DNS se utilizan tecnologias como DNS over TLS (DoT) o DNS over HTTPS (DoH).

</details>

### Pregunta 2

¿Que tipo de clave DNSSEC se utiliza para firmar los registros de datos de una zona (A, MX, NS, etc.)?

a) KSK (Key Signing Key)
b) ZSK (Zone Signing Key)
c) TSK (Transfer Signing Key)
d) RSK (Record Signing Key)

<details><summary>Respuesta</summary>

**b) ZSK (Zone Signing Key)**

La ZSK (Zone Signing Key) se utiliza para firmar los registros de datos de la zona, como A, MX, NS, etc. La KSK (Key Signing Key) solo firma el conjunto de registros DNSKEY. Esta separacion permite rotar la ZSK con frecuencia sin necesidad de actualizar el registro DS en la zona padre.

</details>

### Pregunta 3

¿Que registro DNSSEC se publica en la zona PADRE para vincular la cadena de confianza con la zona hija?

a) DNSKEY
b) RRSIG
c) DS
d) NSEC

<details><summary>Respuesta</summary>

**c) DS (Delegation Signer)**

El registro DS se publica en la zona padre y contiene un hash de la KSK de la zona hija. Esto establece la cadena de confianza: el resolver verifica la firma de la zona padre, obtiene el DS, y lo usa para validar la DNSKEY de la zona hija.

</details>

### Pregunta 4

¿Que mejora aporta NSEC3 respecto a NSEC?

a) NSEC3 proporciona cifrado de las respuestas
b) NSEC3 impide la enumeracion de la zona (zone walking) usando hashes
c) NSEC3 es mas rapido en la verificacion de firmas
d) NSEC3 permite firmas mas pequenas

<details><summary>Respuesta</summary>

**b) NSEC3 impide la enumeracion de la zona (zone walking) usando hashes**

NSEC enumera los nombres existentes en la zona en orden, lo que permite a un atacante "caminar" la zona completa descubriendo todos los nombres. NSEC3 soluciona este problema reemplazando los nombres reales por hashes criptograficos salteados, haciendo impracticable la enumeracion.

</details>

### Pregunta 5

¿Que protocolo utiliza TSIG para autenticar las transacciones DNS?

a) Criptografia asimetrica (RSA)
b) Criptografia simetrica con clave compartida (HMAC)
c) Certificados X.509
d) Autenticacion basada en tokens OAuth

<details><summary>Respuesta</summary>

**b) Criptografia simetrica con clave compartida (HMAC)**

TSIG (Transaction Signatures) utiliza criptografia simetrica basada en HMAC (Hash-based Message Authentication Code) con una clave secreta compartida entre ambos servidores. Los algoritmos comunes son hmac-sha256 y hmac-sha512. La misma clave debe estar configurada en ambos extremos de la comunicacion.

</details>

### Pregunta 6

¿Cual es el proposito principal de ejecutar BIND en un entorno chroot?

a) Mejorar el rendimiento del servidor DNS
b) Habilitar DNSSEC automaticamente
c) Limitar el acceso del proceso named a un directorio restringido, reduciendo el impacto de vulnerabilidades
d) Permitir ejecutar multiples instancias de BIND simultaneamente

<details><summary>Respuesta</summary>

**c) Limitar el acceso del proceso named a un directorio restringido, reduciendo el impacto de vulnerabilidades**

El chroot confina el proceso `named` en un directorio aislado. Si un atacante explota una vulnerabilidad en BIND, solo tendria acceso a los archivos dentro del directorio chroot, no al resto del sistema de archivos. La opcion `-t` de named especifica el directorio chroot.

</details>

### Pregunta 7

En una configuracion de Split DNS con views en BIND, ¿que directiva determina que clientes son atendidos por cada vista?

a) `allow-query`
b) `match-clients`
c) `allow-recursion`
d) `client-filter`

<details><summary>Respuesta</summary>

**b) `match-clients`**

La directiva `match-clients` dentro de un bloque `view` determina que clientes seran atendidos por esa vista, basandose en su direccion IP. Las vistas se evaluan en orden y se usa la primera que coincida. Es importante recordar que cuando se usan views, TODAS las zonas deben estar dentro de una view.

</details>

### Pregunta 8

¿Que flag en la respuesta de `dig` indica que los datos han sido autenticados mediante DNSSEC?

a) `aa` (Authoritative Answer)
b) `tc` (Truncated)
c) `ad` (Authenticated Data)
d) `cd` (Checking Disabled)

<details><summary>Respuesta</summary>

**c) `ad` (Authenticated Data)**

El flag `ad` en la respuesta de dig indica que el resolver recursivo ha verificado satisfactoriamente la cadena de firmas DNSSEC para esa respuesta. El flag `aa` indica que la respuesta proviene de un servidor autoritativo (pero no necesariamente verificada por DNSSEC). El flag `cd` indica que la verificacion DNSSEC fue deshabilitada por el cliente.

</details>

### Pregunta 9

¿Que parametro de rate limiting en BIND permite que algunos clientes reciban una respuesta truncada (TC) en lugar de ser completamente bloqueados?

a) `window`
b) `responses-per-second`
c) `slip`
d) `threshold`

<details><summary>Respuesta</summary>

**c) `slip`**

El parametro `slip` determina con que frecuencia se envia una respuesta truncada (con el flag TC) a clientes afectados por el rate limiting, en lugar de simplemente descartar la consulta. Una respuesta TC indica al cliente que debe reintentar la consulta via TCP, lo que ayuda a los clientes legitimos a obtener sus respuestas mientras dificulta los ataques de amplificacion.

</details>

### Pregunta 10

¿Que comando genera una clave TSIG para autenticar transferencias de zona entre servidores BIND?

a) `dnssec-keygen -a hmac-sha256`
b) `tsig-keygen -a hmac-sha256 nombre-clave`
c) `rndc-keygen hmac-sha256`
d) `bind-keygen --tsig nombre-clave`

<details><summary>Respuesta</summary>

**b) `tsig-keygen -a hmac-sha256 nombre-clave`**

El comando `tsig-keygen` genera una clave TSIG en el formato listo para incluir en `named.conf`. La salida incluye el bloque `key` completo con el nombre, algoritmo y secreto en base64. Tambien se puede usar `ddns-confgen` para generar claves TSIG. `dnssec-keygen` se usa para claves DNSSEC (asimetricas), no para TSIG.

</details>

### Pregunta 11

¿Que valor del flag en un registro DNSKEY identifica una KSK (Key Signing Key)?

a) 128
b) 256
c) 257
d) 512

<details><summary>Respuesta</summary>

**c) 257**

En los registros DNSKEY, el flag 257 identifica una KSK (Key Signing Key) y el flag 256 identifica una ZSK (Zone Signing Key). La KSK firma el conjunto de registros DNSKEY de la zona y su hash se publica como registro DS en la zona padre para establecer la cadena de confianza.

</details>

### Pregunta 12

¿Que directiva de BIND configura la validacion automatica de DNSSEC utilizando las claves de la zona raiz incluidas con el software?

a) `dnssec-enable auto;`
b) `dnssec-validation auto;`
c) `dnssec-verify yes;`
d) `dnssec-trust-anchors auto;`

<details><summary>Respuesta</summary>

**b) `dnssec-validation auto;`**

La directiva `dnssec-validation auto` configura BIND para validar automaticamente las respuestas DNSSEC usando las claves de confianza de la zona raiz que vienen incluidas con BIND. Con el valor `yes`, se requiere configurar manualmente las claves de confianza. El valor `auto` es el recomendado y el predeterminado en versiones recientes de BIND.

</details>

### Pregunta 13

¿Que opcion de configuracion en BIND oculta la version del servidor para dificultar el reconocimiento por parte de atacantes?

a) `hide-version yes;`
b) `server-version "none";`
c) `version "none";`
d) `display-version no;`

<details><summary>Respuesta</summary>

**c) `version "none";`**

La directiva `version "none";` dentro del bloque `options` de `named.conf` evita que BIND revele su numero de version al recibir consultas de tipo TXT para `version.bind` en la clase CHAOS. Se puede establecer cualquier cadena de texto, pero "none" o una cadena vacia son las opciones mas comunes para ocultar informacion al atacante.

</details>

### Pregunta 14

En una configuracion de Split DNS con views, ¿que ocurre si se definen zonas fuera de un bloque `view` cuando ya existen otros bloques `view`?

a) Las zonas fuera de views se asignan automaticamente a la ultima view
b) Se produce un error de configuracion; todas las zonas deben estar dentro de una view
c) Las zonas fuera de views se comparten entre todas las views
d) Las zonas fuera de views tienen mayor prioridad que las de dentro

<details><summary>Respuesta</summary>

**b) Se produce un error de configuracion; todas las zonas deben estar dentro de una view**

Cuando se utiliza la funcionalidad de views en BIND, TODAS las zonas deben estar definidas dentro de un bloque `view`. No se pueden mezclar zonas dentro y fuera de views. Ademas, la zona hint (raiz) debe incluirse en cada view que necesite resolucion recursiva.

</details>

### Pregunta 15

¿Que tipo de registro DNSSEC contiene la firma digital de un conjunto de registros?

a) DNSKEY
b) DS
c) RRSIG
d) NSEC

<details><summary>Respuesta</summary>

**c) RRSIG**

El registro RRSIG (Resource Record Signature) contiene la firma digital de un conjunto de registros (RRset). Incluye informacion sobre el tipo de registro firmado, el algoritmo de firma, la fecha de expiracion y creacion de la firma, el key tag del DNSKEY utilizado y la firma codificada en base64. Cada tipo de registro en la zona tiene su correspondiente RRSIG.

</details>

### Pregunta 16

¿Que mecanismo de seguridad DNS protege contra ataques de amplificacion limitando el numero de respuestas identicas por segundo?

a) DNSSEC
b) TSIG
c) Rate limiting
d) Split DNS

<details><summary>Respuesta</summary>

**c) Rate limiting**

El rate limiting (limitacion de tasa) en BIND protege contra ataques de amplificacion DNS y denegacion de servicio al limitar el numero de respuestas identicas que el servidor envia por segundo. Se configura con la directiva `rate-limit` dentro del bloque `options`, con parametros como `responses-per-second`, `nxdomains-per-second` y `errors-per-second`.

</details>

### Pregunta 17

¿Que puerto utiliza DNS over TLS (DoT) por defecto?

a) 53
b) 443
c) 853
d) 8853

<details><summary>Respuesta</summary>

**c) 853**

DNS over TLS (DoT) utiliza el puerto 853 por defecto para cifrar las consultas DNS mediante TLS. A diferencia del DNS tradicional (puerto 53), DoT proporciona confidencialidad al cifrar la comunicacion entre el cliente y el resolver. DNS over HTTPS (DoH) utiliza el puerto 443, el mismo que el trafico HTTPS normal.

</details>

### Pregunta 18

¿Que directiva de BIND permite restringir la recursion solo a clientes de una red especifica?

a) `allow-query { 192.168.0.0/16; };`
b) `allow-recursion { 192.168.0.0/16; };`
c) `recursion-clients { 192.168.0.0/16; };`
d) `restrict-recursion { 192.168.0.0/16; };`

<details><summary>Respuesta</summary>

**b) `allow-recursion { 192.168.0.0/16; };`**

La directiva `allow-recursion` en el bloque `options` de BIND especifica que clientes pueden realizar consultas recursivas. Es una buena practica de seguridad restringir la recursion solo a la red interna para evitar que el servidor sea utilizado en ataques de amplificacion DNS. `allow-query` controla quien puede realizar cualquier tipo de consulta, no solo recursivas.

</details>

### Pregunta 19

¿Cual es la diferencia fundamental entre DNSSEC y DNS over TLS (DoT)?

a) DNSSEC cifra las consultas, DoT proporciona autenticacion
b) DNSSEC proporciona autenticacion e integridad, DoT proporciona confidencialidad (cifrado)
c) DNSSEC y DoT proporcionan las mismas funcionalidades
d) DNSSEC solo funciona en zonas inversas, DoT funciona en todas las zonas

<details><summary>Respuesta</summary>

**b) DNSSEC proporciona autenticacion e integridad, DoT proporciona confidencialidad (cifrado)**

DNSSEC utiliza firmas criptograficas para garantizar que las respuestas DNS no han sido modificadas (integridad) y provienen de una fuente legitima (autenticacion), pero no cifra las consultas. DoT cifra la comunicacion DNS mediante TLS, proporcionando confidencialidad. Son tecnologias complementarias, no sustitutivas.

</details>

### Pregunta 20

¿Que opcion del comando `named` especifica el directorio chroot en el que se ejecutara el proceso?

a) `-c`
b) `-d`
c) `-t`
d) `-r`

<details><summary>Respuesta</summary>

**c) `-t`**

La opcion `-t` del comando `named` especifica el directorio chroot. Por ejemplo, `named -t /var/named/chroot` ejecuta BIND confinado en ese directorio. Dentro del chroot se replica la estructura de directorios necesaria (etc/, var/, dev/) con los archivos de configuracion y zona. En RHEL/CentOS, el paquete `bind-chroot` facilita esta configuracion.

</details>

### Pregunta 21

¿Que comando genera un par de claves DNSSEC de tipo KSK con algoritmo RSASHA256 para la zona ejemplo.com?

<input type="text" class="fill-blank" data-answer="dnssec-keygen -a RSASHA256 -b 2048 -n ZONE -f KSK ejemplo.com" data-alt="dnssec-keygen -f KSK -a RSASHA256 -b 2048 -n ZONE ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dnssec-keygen -a RSASHA256 -b 2048 -n ZONE -f KSK ejemplo.com**

El comando `dnssec-keygen` genera pares de claves DNSSEC. La opcion `-a` especifica el algoritmo (RSASHA256), `-b` el tamano en bits (2048), `-n ZONE` indica que es una clave de zona, y `-f KSK` indica que es una Key Signing Key. Sin `-f KSK`, se genera una ZSK por defecto.

</details>

### Pregunta 22

¿Que comando permite realizar una consulta DNS con validacion DNSSEC activada usando la herramienta `dig`?

<input type="text" class="fill-blank" data-answer="dig +dnssec" data-alt="dig +dnssec ejemplo.com,dig +dnssec ejemplo.com A" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig +dnssec**

El comando `dig +dnssec` realiza una consulta DNS solicitando al resolver que incluya la informacion DNSSEC (registros RRSIG) en la respuesta. Por ejemplo: `dig +dnssec ejemplo.com A`. En la respuesta, el flag `ad` (Authenticated Data) indica que la cadena de firmas DNSSEC fue verificada satisfactoriamente.

</details>

### Pregunta 23

¿Que comando firma un archivo de zona DNS con las claves DNSSEC generadas previamente?

<input type="text" class="fill-blank" data-answer="dnssec-signzone" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dnssec-signzone**

El comando `dnssec-signzone` firma un archivo de zona con las claves DNSSEC (KSK y ZSK) que se encuentren en el directorio actual. Se usa con opciones como `-o` para especificar el nombre de la zona, `-N INCREMENT` para incrementar el serial, y `-3` seguido de un salt para generar registros NSEC3 en lugar de NSEC.

</details>

### Pregunta 24

¿Que comando de BIND se utiliza para probar una transferencia de zona autenticada con TSIG?

<input type="text" class="fill-blank" data-answer="dig AXFR -k" data-alt="dig @servidor dominio AXFR -k /etc/bind/tsig.key" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig AXFR -k**

El comando `dig` con la opcion `-k` permite especificar un archivo de clave TSIG para autenticar la transferencia de zona. El formato completo es: `dig @servidor dominio AXFR -k /ruta/al/archivo.key`. El archivo de clave contiene el bloque `key` con el nombre, algoritmo y secreto compartido.

</details>

### Pregunta 25

¿Que directiva en `named.conf` deshabilita globalmente las transferencias de zona por defecto?

<input type="text" class="fill-blank" data-answer="allow-transfer { none; };" data-alt="allow-transfer { none; },allow-transfer {none;}" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**allow-transfer { none; };**

La directiva `allow-transfer { none; };` dentro del bloque `options` deshabilita las transferencias de zona de forma global. Esta es una buena practica de seguridad que impide que cualquier host solicite una copia completa de la zona. Despues, se pueden habilitar transferencias selectivamente en cada zona individual usando `allow-transfer` con las IPs de los esclavos autorizados.

</details>
