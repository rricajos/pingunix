---
title: "207.2 - Zonas DNS"
tags: [lpic-2, examen-202, tema-207, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "207"
subtema: "207.2"
---

# 207.2 - Ejercicios: Zonas DNS

### Pregunta 1

En un registro SOA, ¿que formato se recomienda para el numero de serie (serial)?

a) Un numero secuencial simple (1, 2, 3...)
b) El formato YYYYMMDDNN (ano, mes, dia, revision)
c) Un timestamp Unix
d) La version del software BIND

<details><summary>Respuesta</summary>

**b) El formato YYYYMMDDNN (ano, mes, dia, revision)**

El formato recomendado para el serial del SOA es `YYYYMMDDNN`, donde YYYY es el ano, MM el mes, DD el dia y NN un numero de revision diario (01, 02, etc.). Por ejemplo, `2024011502` indica la segunda revision del 15 de enero de 2024. Este formato facilita el seguimiento de cambios y garantiza que el numero siempre sea creciente.

</details>

### Pregunta 2

¿Que ocurre si un nombre en un archivo de zona NO termina en punto (`.`)?

a) Se produce un error de sintaxis
b) El nombre se trata como un FQDN completo
c) Se le anade automaticamente el valor de `$ORIGIN` al final
d) Se ignora el registro

<details><summary>Respuesta</summary>

**c) Se le anade automaticamente el valor de `$ORIGIN` al final**

En los archivos de zona BIND, los nombres que no terminan en punto se consideran relativos y se les anade el valor de `$ORIGIN`. Por ejemplo, si `$ORIGIN` es `ejemplo.com.`, el nombre `www` se interpreta como `www.ejemplo.com.`. Los nombres que terminan en punto se consideran FQDN y se usan tal cual.

</details>

### Pregunta 3

¿Cual es la zona inversa correcta para la red `10.20.30.0/24`?

a) `10.20.30.in-addr.arpa`
b) `30.20.10.in-addr.arpa`
c) `0.30.20.10.in-addr.arpa`
d) `10.20.30.rev-addr.arpa`

<details><summary>Respuesta</summary>

**b) `30.20.10.in-addr.arpa`**

Las zonas inversas IPv4 se construyen invirtiendo los octetos de la red y anadiendo `.in-addr.arpa`. Para la red `10.20.30.0/24`, se invierten los tres primeros octetos (correspondientes a la parte de red), resultando en `30.20.10.in-addr.arpa`.

</details>

### Pregunta 4

¿Que restriccion importante tiene el registro CNAME?

a) Solo puede apuntar a direcciones IP
b) No puede coexistir con otros registros del mismo nombre
c) Solo puede usarse para subdominios
d) Requiere un registro A adicional

<details><summary>Respuesta</summary>

**b) No puede coexistir con otros registros del mismo nombre**

Un registro CNAME no puede compartir un nombre con ningun otro tipo de registro. Ademas, la raiz de la zona (`@`) nunca puede tener un CNAME, ya que necesita registros NS y SOA. Los registros MX y NS tampoco deben apuntar a nombres que tengan registros CNAME.

</details>

### Pregunta 5

En un registro MX, ¿que significa un valor de prioridad mas bajo?

a) Menor prioridad (se intenta ultimo)
b) Mayor prioridad (se intenta primero)
c) El servidor esta deshabilitado
d) El servidor solo acepta correo local

<details><summary>Respuesta</summary>

**b) Mayor prioridad (se intenta primero)**

En los registros MX, un valor numerico menor indica mayor prioridad. El correo se intenta entregar primero al servidor con el numero mas bajo. Por ejemplo, con `MX 10 mail1` y `MX 20 mail2`, el correo se enviara primero a `mail1`. Si `mail1` no responde, se intentara con `mail2`.

</details>

### Pregunta 6

En el registro SOA, ¿que representa el campo "Expire"?

a) El tiempo que tarda en propagarse un cambio
b) El tiempo maximo que un servidor esclavo puede servir datos sin contactar al maestro
c) El tiempo de vida de la cache DNS
d) El tiempo tras el cual se elimina la zona automaticamente

<details><summary>Respuesta</summary>

**b) El tiempo maximo que un servidor esclavo puede servir datos sin contactar al maestro**

El campo Expire del SOA define el periodo maximo durante el cual un servidor esclavo seguira respondiendo consultas con sus datos locales si no puede contactar al servidor maestro. Una vez transcurrido este tiempo sin contacto, el esclavo deja de responder consultas para esa zona. Un valor tipico es 604800 segundos (1 semana).

</details>

### Pregunta 7

¿Que tipo de transferencia de zona envia solo los cambios realizados desde un serial determinado?

a) AXFR
b) IXFR
c) NOTIFY
d) DXFR

<details><summary>Respuesta</summary>

**b) IXFR**

IXFR (Incremental Zone Transfer) transfiere unicamente los cambios realizados en la zona desde un numero de serie determinado, en lugar de enviar toda la zona. Esto es mas eficiente que AXFR (Full Zone Transfer) para zonas grandes con pocos cambios. Si el servidor no puede proporcionar una IXFR, se recurre automaticamente a AXFR.

</details>

### Pregunta 8

¿Que campo del registro SOA se debe utilizar para indicar la direccion de correo del administrador de la zona `admin@ejemplo.com`?

a) `admin@ejemplo.com.`
b) `admin.ejemplo.com.`
c) `admin\@ejemplo.com.`
d) `mailto:admin@ejemplo.com.`

<details><summary>Respuesta</summary>

**b) `admin.ejemplo.com.`**

En el registro SOA, el campo RNAME (email del administrador) reemplaza el simbolo `@` por un punto (`.`). Asi, `admin@ejemplo.com` se escribe como `admin.ejemplo.com.` en el archivo de zona. Si el nombre de usuario contiene puntos, estos deben escaparse con barra invertida (por ejemplo, `nombre\.apellido.ejemplo.com.`).

</details>

### Pregunta 9

¿Que son los "glue records" en una delegacion de subdominio?

a) Registros CNAME que unen subdominios
b) Registros A para los servidores NS que estan dentro del subdominio delegado
c) Registros MX que conectan el correo del subdominio
d) Registros TXT que validan la delegacion

<details><summary>Respuesta</summary>

**b) Registros A para los servidores NS que estan dentro del subdominio delegado**

Los glue records son registros A necesarios cuando un servidor NS de un subdominio delegado tiene un nombre que pertenece a ese mismo subdominio. Sin ellos, se produciria una dependencia circular: para resolver el NS se necesitaria consultar al NS mismo. Ejemplo: si `sub.ejemplo.com` tiene `ns1.sub.ejemplo.com` como NS, se necesita un glue record con la IP de `ns1.sub.ejemplo.com` en la zona padre.

</details>

### Pregunta 10

¿Cual es el formato correcto de un registro SRV para un servicio LDAP en TCP con prioridad 10, peso 0, puerto 389?

a) `_ldap._tcp IN SRV 389 10 0 ldap.ejemplo.com.`
b) `_ldap._tcp IN SRV 10 0 389 ldap.ejemplo.com.`
c) `ldap.tcp IN SRV 10 0 389 ldap.ejemplo.com.`
d) `SRV _ldap._tcp 10 0 389 ldap.ejemplo.com.`

<details><summary>Respuesta</summary>

**b) `_ldap._tcp IN SRV 10 0 389 ldap.ejemplo.com.`**

El formato del registro SRV es: `_servicio._protocolo IN SRV prioridad peso puerto destino`. El nombre del servicio y el protocolo van precedidos por guion bajo (`_`). Los campos numericos van en orden: prioridad (10), peso (0), puerto (389), y finalmente el nombre del servidor destino.

</details>

### Pregunta 11

¿Que directiva en un archivo de zona BIND define el TTL por defecto que se aplicara a todos los registros que no especifiquen uno propio?

a) `$DEFAULT_TTL`
b) `$TTL`
c) `$CACHE`
d) `$TIMER`

<details><summary>Respuesta</summary>

**b) `$TTL`**

La directiva `$TTL` al inicio de un archivo de zona establece el tiempo de vida (Time To Live) por defecto para todos los registros de la zona que no tengan un TTL especificado explicitamente. Por ejemplo, `$TTL 86400` establece un TTL de 1 dia (86400 segundos). Esta directiva es obligatoria segun el RFC 2308.

</details>

### Pregunta 12

Un administrador observa que el servidor esclavo no actualiza la zona a pesar de haber realizado cambios en el maestro. ¿Cual es la causa mas probable?

a) El campo Retry del SOA es demasiado alto
b) No se incremento el numero de serie (serial) en el registro SOA del maestro
c) El campo Expire del SOA ha expirado
d) La directiva `notify no` esta configurada en el esclavo

<details><summary>Respuesta</summary>

**b) No se incremento el numero de serie (serial) en el registro SOA del maestro**

El servidor esclavo compara el serial de su copia local con el del maestro. Si el serial del maestro no es mayor que el del esclavo, este considera que no hay cambios y no solicita una transferencia. Es fundamental incrementar el serial en cada modificacion de la zona para que los esclavos detecten las actualizaciones.

</details>

### Pregunta 13

¿Que tipo de registro DNS se utiliza en una zona inversa IPv4 para asociar una direccion IP con un nombre de host?

a) A
b) AAAA
c) CNAME
d) PTR

<details><summary>Respuesta</summary>

**d) PTR**

El registro PTR (Pointer) se utiliza en las zonas inversas para asociar una direccion IP con un nombre de dominio completo (FQDN). En una zona inversa IPv4, la zona se nombra como `X.Y.Z.in-addr.arpa` y los registros PTR mapean el ultimo octeto de la IP al nombre de host correspondiente.

</details>

### Pregunta 14

¿Cual de las siguientes afirmaciones sobre el registro CNAME es CORRECTA?

a) Un CNAME puede coexistir con un registro MX en el mismo nombre
b) La raiz de la zona (@) puede tener un registro CNAME
c) Un registro NS puede apuntar a un nombre que tenga un CNAME
d) Un CNAME no puede coexistir con ningun otro tipo de registro para el mismo nombre

<details><summary>Respuesta</summary>

**d) Un CNAME no puede coexistir con ningun otro tipo de registro para el mismo nombre**

El registro CNAME es exclusivo: no puede compartir un nombre con ningun otro tipo de registro. La raiz de la zona (@) no puede tener un CNAME porque necesita registros SOA y NS obligatoriamente. Ademas, los registros MX y NS no deben apuntar a nombres que tengan registros CNAME, ya que esto puede causar problemas de resolucion.

</details>

### Pregunta 15

En el registro SOA, ¿que campo define el intervalo en el que el servidor esclavo consulta al maestro para verificar si hubo cambios en la zona?

a) Retry
b) Expire
c) Refresh
d) Minimum

<details><summary>Respuesta</summary>

**c) Refresh**

El campo Refresh del registro SOA especifica el intervalo de tiempo (en segundos) en el que un servidor esclavo consultara al maestro para comprobar si el serial de la zona ha cambiado. Un valor tipico es 3600 segundos (1 hora). Si la consulta falla, el esclavo reintentara segun el valor del campo Retry.

</details>

### Pregunta 16

¿Que opcion de configuracion en BIND permite al servidor maestro enviar notificaciones automaticas a los esclavos cuando se modifica una zona?

a) `allow-transfer { any; };`
b) `notify yes;`
c) `auto-sync yes;`
d) `push-update yes;`

<details><summary>Respuesta</summary>

**b) `notify yes;`**

La directiva `notify yes` en la configuracion de una zona maestra hace que BIND envie automaticamente mensajes NOTIFY a todos los servidores listados en los registros NS de la zona (y a los servidores en `also-notify`) cuando detecta un cambio en el serial. Esto permite a los esclavos actualizar rapidamente sin esperar al intervalo de Refresh.

</details>

### Pregunta 17

¿Que campo del registro SOA define el tiempo de vida para las respuestas negativas (NXDOMAIN)?

a) Expire
b) Refresh
c) Retry
d) Minimum

<details><summary>Respuesta</summary>

**d) Minimum**

Segun el RFC 2308, el campo Minimum (tambien llamado Negative TTL) del registro SOA define el TTL para las respuestas negativas, es decir, las respuestas que indican que un nombre de dominio no existe (NXDOMAIN). Un valor tipico es 86400 segundos (1 dia). Esto controla cuanto tiempo un resolver mantendra en cache la informacion de que un registro no existe.

</details>

### Pregunta 18

En una zona inversa IPv6, ¿que dominio especial se utiliza en lugar de `in-addr.arpa`?

a) `ipv6.arpa`
b) `ip6.arpa`
c) `rev6.arpa`
d) `v6.in-addr.arpa`

<details><summary>Respuesta</summary>

**b) `ip6.arpa`**

Las zonas inversas IPv6 utilizan el dominio `ip6.arpa`. Cada nibble (digito hexadecimal) de la direccion IPv6 se separa por puntos y se escribe en orden inverso. Por ejemplo, para la red `2001:db8:1::/48`, la zona inversa seria `1.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa`.

</details>

### Pregunta 19

¿Que sucede cuando un servidor DNS esclavo no puede contactar al maestro durante un periodo superior al valor del campo Expire del SOA?

a) El esclavo incrementa automaticamente el serial y se convierte en maestro
b) El esclavo deja de responder consultas para esa zona
c) El esclavo sigue respondiendo con los datos existentes indefinidamente
d) El esclavo elimina los archivos de zona y reinicia el servicio

<details><summary>Respuesta</summary>

**b) El esclavo deja de responder consultas para esa zona**

Cuando transcurre el tiempo definido por el campo Expire sin que el esclavo pueda contactar al maestro, el esclavo considera que sus datos son demasiado antiguos y poco confiables, por lo que deja de responder consultas para esa zona. Un valor tipico de Expire es 604800 segundos (1 semana).

</details>

### Pregunta 20

¿Cual es la diferencia principal entre AXFR e IXFR en las transferencias de zona DNS?

a) AXFR usa TCP y IXFR usa UDP
b) AXFR transfiere la zona completa e IXFR transfiere solo los cambios incrementales
c) AXFR esta cifrado e IXFR no
d) AXFR solo funciona en IPv4 e IXFR funciona en IPv4 e IPv6

<details><summary>Respuesta</summary>

**b) AXFR transfiere la zona completa e IXFR transfiere solo los cambios incrementales**

AXFR (Full Zone Transfer) envia la zona completa del maestro al esclavo, mientras que IXFR (Incremental Zone Transfer) solo transfiere los cambios realizados desde un serial determinado. IXFR es mas eficiente en zonas grandes con pocos cambios. Ambos protocolos utilizan TCP. Si el servidor no puede proporcionar una IXFR, se recurre automaticamente a AXFR.

</details>

### Pregunta 21

¿Que comando permite verificar la sintaxis de un archivo de zona DNS en BIND?

<input type="text" class="fill-blank" data-answer="named-checkzone" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**named-checkzone**

El comando `named-checkzone` verifica la sintaxis y la integridad de un archivo de zona. Se ejecuta con el formato `named-checkzone nombre_zona archivo_zona`, por ejemplo: `named-checkzone ejemplo.com /var/cache/bind/db.ejemplo.com`. Si la zona es valida, muestra el serial cargado y devuelve "OK".

</details>

### Pregunta 22

¿Que comando se utiliza para solicitar una transferencia de zona completa (AXFR) desde un servidor DNS?

<input type="text" class="fill-blank" data-answer="dig AXFR" data-alt="dig @servidor dominio AXFR,dig ejemplo.com AXFR" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig AXFR**

El comando `dig` con el tipo de consulta `AXFR` solicita una transferencia de zona completa. El formato tipico es `dig @servidor_dns nombre_zona AXFR`. Por ejemplo: `dig @ns1.ejemplo.com ejemplo.com AXFR`. El servidor solo respondera si el cliente tiene permiso segun la directiva `allow-transfer`.

</details>

### Pregunta 23

¿Que comando de BIND se utiliza para verificar la sintaxis del archivo de configuracion `named.conf`?

<input type="text" class="fill-blank" data-answer="named-checkconf" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**named-checkconf**

El comando `named-checkconf` verifica la sintaxis del archivo de configuracion principal de BIND (`named.conf`) y de los archivos incluidos. Si no hay errores, el comando no produce salida y retorna con codigo 0. Es una herramienta esencial para detectar errores antes de reiniciar el servicio DNS.

</details>

### Pregunta 24

¿Que comando permite recargar una zona especifica en BIND sin reiniciar todo el servicio?

<input type="text" class="fill-blank" data-answer="rndc reload" data-alt="rndc reload ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rndc reload**

El comando `rndc reload` recarga las zonas y el archivo de configuracion de BIND. Se puede especificar una zona concreta con `rndc reload ejemplo.com` para recargar solo esa zona sin afectar al resto del servicio. Tambien se puede usar `rndc reconfig` para cargar solo las zonas nuevas o modificadas en la configuracion.

</details>

### Pregunta 25

¿Que comando de `dig` permite consultar un registro SOA de un dominio especifico?

<input type="text" class="fill-blank" data-answer="dig SOA" data-alt="dig ejemplo.com SOA,dig SOA ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig SOA**

El comando `dig` seguido del nombre del dominio y el tipo `SOA` consulta el registro SOA de la zona. Por ejemplo: `dig ejemplo.com SOA`. Esto devuelve informacion del servidor primario, email del administrador, serial, y los valores de Refresh, Retry, Expire y Minimum TTL.

</details>
