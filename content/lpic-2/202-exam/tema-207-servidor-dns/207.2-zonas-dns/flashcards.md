---
title: "207.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "207.2"
---

# Flashcards: 207.2 - Zonas Dns

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-001">
<div class="flashcard-front">

**P:** En un registro SOA, ¿que formato se recomienda para el numero de serie (serial)?

</div>
<div class="flashcard-back">

**R:** b) El formato YYYYMMDDNN (ano, mes, dia, revision). El formato recomendado para el serial del SOA es `YYYYMMDDNN`, donde YYYY es el ano, MM el mes, DD el dia y NN un numero de revision diario (01, 02, etc.). Por ejemplo, `2024011502` indica la segunda revision del 15 de enero de 2024. Este formato facilita el seguimiento de cambios y garantiza que el numero siempre sea creciente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-002">
<div class="flashcard-front">

**P:** ¿Que ocurre si un nombre en un archivo de zona NO termina en punto (`.`)?

</div>
<div class="flashcard-back">

**R:** c) Se le anade automaticamente el valor de `$ORIGIN` al final. En los archivos de zona BIND, los nombres que no terminan en punto se consideran relativos y se les anade el valor de `$ORIGIN`. Por ejemplo, si `$ORIGIN` es `ejemplo.com.`, el nombre `www` se interpreta como `www.ejemplo.com.`. Los nombres que terminan en punto se consideran FQDN y se usan tal cual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-003">
<div class="flashcard-front">

**P:** ¿Cual es la zona inversa correcta para la red `10.20.30.0/24`?

</div>
<div class="flashcard-back">

**R:** b) `30.20.10.in-addr.arpa`. Las zonas inversas IPv4 se construyen invirtiendo los octetos de la red y anadiendo `.in-addr.arpa`. Para la red `10.20.30.0/24`, se invierten los tres primeros octetos (correspondientes a la parte de red), resultando en `30.20.10.in-addr.arpa`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-004">
<div class="flashcard-front">

**P:** ¿Que restriccion importante tiene el registro CNAME?

</div>
<div class="flashcard-back">

**R:** b) No puede coexistir con otros registros del mismo nombre. Un registro CNAME no puede compartir un nombre con ningun otro tipo de registro. Ademas, la raiz de la zona (`@`) nunca puede tener un CNAME, ya que necesita registros NS y SOA. Los registros MX y NS tampoco deben apuntar a nombres que tengan registros CNAME.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-005">
<div class="flashcard-front">

**P:** En un registro MX, ¿que significa un valor de prioridad mas bajo?

</div>
<div class="flashcard-back">

**R:** b) Mayor prioridad (se intenta primero). En los registros MX, un valor numerico menor indica mayor prioridad. El correo se intenta entregar primero al servidor con el numero mas bajo. Por ejemplo, con `MX 10 mail1` y `MX 20 mail2`, el correo se enviara primero a `mail1`. Si `mail1` no responde, se intentara con `mail2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-006">
<div class="flashcard-front">

**P:** En el registro SOA, ¿que representa el campo "Expire"?

</div>
<div class="flashcard-back">

**R:** b) El tiempo maximo que un servidor esclavo puede servir datos sin contactar al maestro. El campo Expire del SOA define el periodo maximo durante el cual un servidor esclavo seguira respondiendo consultas con sus datos locales si no puede contactar al servidor maestro. Una vez transcurrido este tiempo sin contacto, el esclavo deja de responder consultas para esa zona. Un valor tipico es 604800 segundos (1 semana).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que tipo de transferencia de zona envia solo los cambios realizados desde un serial determinado?

</div>
<div class="flashcard-back">

**R:** b) IXFR. IXFR (Incremental Zone Transfer) transfiere unicamente los cambios realizados en la zona desde un numero de serie determinado, en lugar de enviar toda la zona. Esto es mas eficiente que AXFR (Full Zone Transfer) para zonas grandes con pocos cambios. Si el servidor no puede proporcionar una IXFR, se recurre automaticamente a AXFR.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que campo del registro SOA se debe utilizar para indicar la direccion de correo del administrador de la zona `admin@ejemplo.com`?

</div>
<div class="flashcard-back">

**R:** b) `admin.ejemplo.com.`. En el registro SOA, el campo RNAME (email del administrador) reemplaza el simbolo `@` por un punto (`.`). Asi, `admin@ejemplo.com` se escribe como `admin.ejemplo.com.` en el archivo de zona. Si el nombre de usuario contiene puntos, estos deben escaparse con barra invertida (por ejemplo, `nombre\.apellido.ejemplo.com.`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-009">
<div class="flashcard-front">

**P:** ¿Que son los "glue records" en una delegacion de subdominio?

</div>
<div class="flashcard-back">

**R:** b) Registros A para los servidores NS que estan dentro del subdominio delegado. Los glue records son registros A necesarios cuando un servidor NS de un subdominio delegado tiene un nombre que pertenece a ese mismo subdominio. Sin ellos, se produciria una dependencia circular: para resolver el NS se necesitaria consultar al NS mismo. Ejemplo: si `sub.ejemplo.com` tiene `ns1.sub.ejemplo.com` como NS, se necesita un glue record con la IP de `ns1.sub.ejemplo.com` en la zona padre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-010">
<div class="flashcard-front">

**P:** ¿Cual es el formato correcto de un registro SRV para un servicio LDAP en TCP con prioridad 10, peso 0, puerto 389?

</div>
<div class="flashcard-back">

**R:** b) `_ldap._tcp IN SRV 10 0 389 ldap.ejemplo.com.`. El formato del registro SRV es: `_servicio._protocolo IN SRV prioridad peso puerto destino`. El nombre del servicio y el protocolo van precedidos por guion bajo (`_`). Los campos numericos van en orden: prioridad (10), peso (0), puerto (389), y finalmente el nombre del servidor destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-011">
<div class="flashcard-front">

**P:** ¿Que directiva en un archivo de zona BIND define el TTL por defecto que se aplicara a todos los registros que no especifiquen uno propio?

</div>
<div class="flashcard-back">

**R:** b) `$TTL`. La directiva `$TTL` al inicio de un archivo de zona establece el tiempo de vida (Time To Live) por defecto para todos los registros de la zona que no tengan un TTL especificado explicitamente. Por ejemplo, `$TTL 86400` establece un TTL de 1 dia (86400 segundos). Esta directiva es obligatoria segun el RFC 2308.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-012">
<div class="flashcard-front">

**P:** Un administrador observa que el servidor esclavo no actualiza la zona a pesar de haber realizado cambios en el maestro. ¿Cual es la causa mas probable?

</div>
<div class="flashcard-back">

**R:** b) No se incremento el numero de serie (serial) en el registro SOA del maestro. El servidor esclavo compara el serial de su copia local con el del maestro. Si el serial del maestro no es mayor que el del esclavo, este considera que no hay cambios y no solicita una transferencia. Es fundamental incrementar el serial en cada modificacion de la zona para que los esclavos detecten las actualizaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-013">
<div class="flashcard-front">

**P:** ¿Que tipo de registro DNS se utiliza en una zona inversa IPv4 para asociar una direccion IP con un nombre de host?

</div>
<div class="flashcard-back">

**R:** d) PTR. El registro PTR (Pointer) se utiliza en las zonas inversas para asociar una direccion IP con un nombre de dominio completo (FQDN). En una zona inversa IPv4, la zona se nombra como `X.Y.Z.in-addr.arpa` y los registros PTR mapean el ultimo octeto de la IP al nombre de host correspondiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-014">
<div class="flashcard-front">

**P:** ¿Cual de las siguientes afirmaciones sobre el registro CNAME es CORRECTA?

</div>
<div class="flashcard-back">

**R:** d) Un CNAME no puede coexistir con ningun otro tipo de registro para el mismo nombre. El registro CNAME es exclusivo: no puede compartir un nombre con ningun otro tipo de registro. La raiz de la zona (@) no puede tener un CNAME porque necesita registros SOA y NS obligatoriamente. Ademas, los registros MX y NS no deben apuntar a nombres que tengan registros CNAME, ya que esto puede causar problemas de resolucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-015">
<div class="flashcard-front">

**P:** En el registro SOA, ¿que campo define el intervalo en el que el servidor esclavo consulta al maestro para verificar si hubo cambios en la zona?

</div>
<div class="flashcard-back">

**R:** c) Refresh. El campo Refresh del registro SOA especifica el intervalo de tiempo (en segundos) en el que un servidor esclavo consultara al maestro para comprobar si el serial de la zona ha cambiado. Un valor tipico es 3600 segundos (1 hora). Si la consulta falla, el esclavo reintentara segun el valor del campo Retry.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-016">
<div class="flashcard-front">

**P:** ¿Que opcion de configuracion en BIND permite al servidor maestro enviar notificaciones automaticas a los esclavos cuando se modifica una zona?

</div>
<div class="flashcard-back">

**R:** b) `notify yes;`. La directiva `notify yes` en la configuracion de una zona maestra hace que BIND envie automaticamente mensajes NOTIFY a todos los servidores listados en los registros NS de la zona (y a los servidores en `also-notify`) cuando detecta un cambio en el serial. Esto permite a los esclavos actualizar rapidamente sin esperar al intervalo de Refresh.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-017">
<div class="flashcard-front">

**P:** ¿Que campo del registro SOA define el tiempo de vida para las respuestas negativas (NXDOMAIN)?

</div>
<div class="flashcard-back">

**R:** d) Minimum. Segun el RFC 2308, el campo Minimum (tambien llamado Negative TTL) del registro SOA define el TTL para las respuestas negativas, es decir, las respuestas que indican que un nombre de dominio no existe (NXDOMAIN). Un valor tipico es 86400 segundos (1 dia). Esto controla cuanto tiempo un resolver mantendra en cache la informacion de que un registro no existe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-018">
<div class="flashcard-front">

**P:** En una zona inversa IPv6, ¿que dominio especial se utiliza en lugar de `in-addr.arpa`?

</div>
<div class="flashcard-back">

**R:** b) `ip6.arpa`. Las zonas inversas IPv6 utilizan el dominio `ip6.arpa`. Cada nibble (digito hexadecimal) de la direccion IPv6 se separa por puntos y se escribe en orden inverso. Por ejemplo, para la red `2001:db8:1::/48`, la zona inversa seria `1.0.0.0.8.b.d.0.1.0.0.2.ip6.arpa`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-019">
<div class="flashcard-front">

**P:** ¿Que sucede cuando un servidor DNS esclavo no puede contactar al maestro durante un periodo superior al valor del campo Expire del SOA?

</div>
<div class="flashcard-back">

**R:** b) El esclavo deja de responder consultas para esa zona. Cuando transcurre el tiempo definido por el campo Expire sin que el esclavo pueda contactar al maestro, el esclavo considera que sus datos son demasiado antiguos y poco confiables, por lo que deja de responder consultas para esa zona. Un valor tipico de Expire es 604800 segundos (1 semana).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-020">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre AXFR e IXFR en las transferencias de zona DNS?

</div>
<div class="flashcard-back">

**R:** b) AXFR transfiere la zona completa e IXFR transfiere solo los cambios incrementales. AXFR (Full Zone Transfer) envia la zona completa del maestro al esclavo, mientras que IXFR (Incremental Zone Transfer) solo transfiere los cambios realizados desde un serial determinado. IXFR es mas eficiente en zonas grandes con pocos cambios. Ambos protocolos utilizan TCP. Si el servidor no puede proporcionar una IXFR, se recurre automaticamente a AXFR.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando permite verificar la sintaxis de un archivo de zona DNS en BIND?

</div>
<div class="flashcard-back">

**R:** named-checkzone. El comando `named-checkzone` verifica la sintaxis y la integridad de un archivo de zona. Se ejecuta con el formato `named-checkzone nombre_zona archivo_zona`, por ejemplo: `named-checkzone ejemplo.com /var/cache/bind/db.ejemplo.com`. Si la zona es valida, muestra el serial cargado y devuelve "OK".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para solicitar una transferencia de zona completa (AXFR) desde un servidor DNS?

</div>
<div class="flashcard-back">

**R:** dig AXFR. El comando `dig` con el tipo de consulta `AXFR` solicita una transferencia de zona completa. El formato tipico es `dig @servidor_dns nombre_zona AXFR`. Por ejemplo: `dig @ns1.ejemplo.com ejemplo.com AXFR`. El servidor solo respondera si el cliente tiene permiso segun la directiva `allow-transfer`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando de BIND se utiliza para verificar la sintaxis del archivo de configuracion `named.conf`?

</div>
<div class="flashcard-back">

**R:** named-checkconf. El comando `named-checkconf` verifica la sintaxis del archivo de configuracion principal de BIND (`named.conf`) y de los archivos incluidos. Si no hay errores, el comando no produce salida y retorna con codigo 0. Es una herramienta esencial para detectar errores antes de reiniciar el servicio DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando permite recargar una zona especifica en BIND sin reiniciar todo el servicio?

</div>
<div class="flashcard-back">

**R:** rndc reload. El comando `rndc reload` recarga las zonas y el archivo de configuracion de BIND. Se puede especificar una zona concreta con `rndc reload ejemplo.com` para recargar solo esa zona sin afectar al resto del servicio. Tambien se puede usar `rndc reconfig` para cargar solo las zonas nuevas o modificadas en la configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando de `dig` permite consultar un registro SOA de un dominio especifico?

</div>
<div class="flashcard-back">

**R:** dig SOA. El comando `dig` seguido del nombre del dominio y el tipo `SOA` consulta el registro SOA de la zona. Por ejemplo: `dig ejemplo.com SOA`. Esto devuelve informacion del servidor primario, email del administrador, serial, y los valores de Refresh, Retry, Expire y Minimum TTL.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Los nombres que terminan en un punto (`.`) son FQDN (nombres completos). Los que...

</div>
<div class="flashcard-back">

**R:** Los nombres que terminan en un punto (`.`) son FQDN (nombres completos). Los que no terminan en punto se completan con el valor de `$ORIGIN`. Ejemplo: `www` se convierte en `www.ejemplo.com.` si `$ORIGIN` es `ejemplo.com.`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El formato recomendado para el serial es `YYYYMMDDNN` (ano, mes, dia, numero de ...

</div>
<div class="flashcard-back">

**R:** El formato recomendado para el serial es `YYYYMMDDNN` (ano, mes, dia, numero de revision). El serial DEBE incrementarse en cada cambio para que los servidores esclavos detecten la actualizacion. El campo RNAME usa `.` en lugar de `@` para el email.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que un CNAME no puede coexistir con ningun otro tipo de registro para e...

</div>
<div class="flashcard-back">

**R:** Recuerda que un CNAME no puede coexistir con ningun otro tipo de registro para el mismo nombre. No se puede poner un CNAME en el apex (raiz) de la zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Conoce el formato del registro SRV: `_servicio._protocolo` con prioridad, peso, ...

</div>
<div class="flashcard-back">

**R:** Conoce el formato del registro SRV: `_servicio._protocolo` con prioridad, peso, puerto y destino. Es comun en servicios como SIP, LDAP, XMPP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: La zona inversa se escribe con los octetos de la red en orden INVERSO seguidos d...

</div>
<div class="flashcard-back">

**R:** La zona inversa se escribe con los octetos de la red en orden INVERSO seguidos de `.in-addr.arpa`. Para `192.168.1.0/24` la zona es `1.168.192.in-addr.arpa`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `notify yes` en el maestro envia notificaciones automaticas a los esclavos cuand...

</div>
<div class="flashcard-back">

**R:** `notify yes` en el maestro envia notificaciones automaticas a los esclavos cuando la zona cambia. `allow-transfer` debe restringirse solo a los servidores esclavos por seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `$TTL`?

</div>
<div class="flashcard-back">

**R:** TTL por defecto para los registros de la zona

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `$ORIGIN`?

</div>
<div class="flashcard-back">

**R:** Dominio base (se anade a nombres no terminados en punto)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `@`?

</div>
<div class="flashcard-back">

**R:** Sustitucion del valor de `$ORIGIN` (o el nombre de la zona)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Formato de un archivo de zona?

</div>
<div class="flashcard-back">

**R:** Un archivo de zona tipico tiene la siguiente estructura:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Registro SOA (Start of Authority)?

</div>
<div class="flashcard-back">

**R:** El registro SOA es obligatorio en cada archivo de zona y define parametros fundamentales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Zonas inversas?

</div>
<div class="flashcard-back">

**R:** Las zonas inversas permiten resolver direcciones IP a nombres de host (registros PTR).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.2">
</div>

<div class="flashcard" data-id="207.2-fc-038">
<div class="flashcard-front">

**P:** Que es/son Resolucion de problemas comunes?

</div>
<div class="flashcard-back">

**R:** | Problema | Causa probable | Solucion |

</div>
</div>

---

