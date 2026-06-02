---
title: "207.1 - Configuracion basica DNS"
tags: [lpic-2, examen-202, tema-207, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "207"
subtema: "207.1"
---

# 207.1 - Ejercicios: Configuracion basica DNS

### Pregunta 1

¿Que tipo de zona contiene la lista de servidores raiz DNS y es necesaria para que BIND pueda resolver consultas recursivas?

a) `master`
b) `slave`
c) `hint`
d) `forward`

<details><summary>Respuesta</summary>

**c) `hint`**

La zona de tipo `hint` contiene las direcciones de los servidores raiz DNS (root servers). Es necesaria para que BIND pueda iniciar el proceso de resolucion recursiva, comenzando desde la raiz del arbol DNS. El archivo asociado suele llamarse `db.root`, `named.ca` o `root.hints`.

</details>

### Pregunta 2

¿Que comando se utiliza para verificar la sintaxis del archivo `named.conf` antes de recargar BIND?

a) `bind-checkconf`
b) `named-checkconf`
c) `rndc checkconf`
d) `dns-verify`

<details><summary>Respuesta</summary>

**b) `named-checkconf`**

`named-checkconf` analiza la sintaxis del archivo `named.conf` y sus archivos incluidos, reportando errores de configuracion. Es una practica esencial ejecutarlo antes de recargar o reiniciar BIND para evitar que el servidor se detenga por errores de sintaxis.

</details>

### Pregunta 3

¿Que directiva en el bloque `options` de `named.conf` define los servidores DNS a los que se reenviaran las consultas que BIND no pueda resolver?

a) `dns-servers`
b) `upstream`
c) `forwarders`
d) `resolvers`

<details><summary>Respuesta</summary>

**c) `forwarders`**

La directiva `forwarders` dentro del bloque `options` especifica una lista de servidores DNS a los que BIND reenviara las consultas que no pueda resolver localmente. Ejemplo: `forwarders { 8.8.8.8; 8.8.4.4; };`.

</details>

### Pregunta 4

¿Cual es la diferencia entre `forward only` y `forward first`?

a) `forward only` usa el primer forwarder; `forward first` los usa todos
b) `forward only` solo consulta forwarders y falla si no responden; `forward first` intenta forwarders y luego resolucion recursiva
c) No hay diferencia funcional
d) `forward first` solo reenvia la primera consulta; `forward only` reenvia todas

<details><summary>Respuesta</summary>

**b) `forward only` solo consulta forwarders y falla si no responden; `forward first` intenta forwarders y luego resolucion recursiva**

Con `forward only`, si los forwarders no responden, la consulta falla. Con `forward first`, BIND intenta primero los forwarders, pero si no responden, intenta resolver la consulta por si mismo de forma recursiva a traves de los servidores raiz.

</details>

### Pregunta 5

¿Que comando de `rndc` vacia completamente la cache del servidor DNS?

a) `rndc clear`
b) `rndc flush`
c) `rndc purge`
d) `rndc cache-clear`

<details><summary>Respuesta</summary>

**b) `rndc flush`**

El comando `rndc flush` elimina toda la informacion almacenada en la cache del servidor BIND, forzandolo a resolver nuevamente todas las consultas desde cero. Esto es util cuando se han realizado cambios en zonas externas y se quiere que el servidor obtenga la informacion actualizada.

</details>

### Pregunta 6

¿Que opcion de `dig` permite rastrear paso a paso el proceso completo de resolucion DNS desde los servidores raiz?

a) `dig +debug`
b) `dig +trace`
c) `dig +recursive`
d) `dig +verbose`

<details><summary>Respuesta</summary>

**b) `dig +trace`**

La opcion `+trace` hace que `dig` muestre cada paso del proceso de resolucion recursiva, comenzando desde los servidores raiz, pasando por los TLD y llegando al servidor autoritativo del dominio consultado. Es muy util para diagnosticar problemas de delegacion.

</details>

### Pregunta 7

¿Que ACL predefinida de BIND representa todas las redes directamente conectadas al servidor?

a) `any`
b) `localhost`
c) `localnets`
d) `internal`

<details><summary>Respuesta</summary>

**c) `localnets`**

La ACL predefinida `localnets` incluye automaticamente todas las redes que estan directamente conectadas a las interfaces de red del servidor. `localhost` se refiere unicamente a las direcciones de las propias interfaces. `any` coincide con cualquier direccion y `none` no coincide con ninguna.

</details>

### Pregunta 8

En una configuracion de zona esclava (slave), ¿que directiva indica la direccion IP del servidor maestro?

a) `primary`
b) `master-server`
c) `masters`
d) `source`

<details><summary>Respuesta</summary>

**c) `masters`**

En una zona de tipo `slave`, la directiva `masters` especifica la lista de servidores maestros de los que se obtendran los datos de zona mediante transferencia. Ejemplo: `masters { 192.168.1.10; };`. En versiones recientes de BIND, tambien se acepta el sinonimo `primaries`.

</details>

### Pregunta 9

¿Que comando de `dig` realiza una consulta DNS inversa (de IP a nombre)?

a) `dig PTR 192.168.1.100`
b) `dig -x 192.168.1.100`
c) `dig --reverse 192.168.1.100`
d) `dig -r 192.168.1.100`

<details><summary>Respuesta</summary>

**b) `dig -x 192.168.1.100`**

La opcion `-x` de `dig` realiza una consulta inversa, traduciendo una direccion IP a su nombre de dominio asociado. Internamente, `dig` convierte la IP al formato de zona inversa apropiado (por ejemplo, `100.1.168.192.in-addr.arpa`) y consulta el registro PTR.

</details>

### Pregunta 10

¿Que directiva de `named.conf` restringe que hosts pueden realizar transferencias de zona?

a) `allow-query`
b) `allow-recursion`
c) `allow-transfer`
d) `allow-update`

<details><summary>Respuesta</summary>

**c) `allow-transfer`**

La directiva `allow-transfer` controla que servidores pueden solicitar una transferencia de zona completa (AXFR) o incremental (IXFR). Por seguridad, debe restringirse unicamente a los servidores secundarios autorizados. Ejemplo: `allow-transfer { 192.168.1.11; };`. Establecer `allow-transfer { none; };` desactiva completamente las transferencias.

</details>

### Pregunta 11

¿Que directiva en el bloque `options` de `named.conf` controla si el servidor acepta consultas recursivas?

a) `allow-query`
b) `recursion`
c) `forward`
d) `allow-recursion`

<details><summary>Respuesta</summary>

**b) `recursion`**

La directiva `recursion yes|no` en el bloque `options` habilita o deshabilita la capacidad del servidor para resolver consultas de forma recursiva. `allow-recursion` define quien puede hacer consultas recursivas (control de acceso), mientras que `recursion` activa o desactiva la funcionalidad por completo. En servidores autoritativos publicos, se recomienda `recursion no`.

</details>

### Pregunta 12

¿Que comando se utiliza para verificar la sintaxis de un archivo de zona antes de cargarla en BIND?

a) `named-checkconf`
b) `named-checkzone`
c) `rndc check`
d) `bind-verify`

<details><summary>Respuesta</summary>

**b) `named-checkzone`**

El comando `named-checkzone` verifica la sintaxis y la consistencia de un archivo de zona DNS. Se usa con la sintaxis: `named-checkzone nombre_zona archivo_zona`. Por ejemplo: `named-checkzone ejemplo.com /var/cache/bind/db.ejemplo.com`. A diferencia de `named-checkconf` que verifica la configuracion general, `named-checkzone` se centra en los datos de zona.

</details>

### Pregunta 13

¿Que tipo de zona en BIND obtiene automaticamente los datos del servidor maestro mediante transferencia de zona?

a) `master`
b) `hint`
c) `slave`
d) `forward`

<details><summary>Respuesta</summary>

**c) `slave`**

Una zona de tipo `slave` (o `secondary` en terminologia moderna) obtiene automaticamente los datos de zona del servidor maestro especificado en la directiva `masters`. La transferencia se realiza mediante AXFR (completa) o IXFR (incremental) y se actualiza segun el valor de refresh definido en el registro SOA de la zona.

</details>

### Pregunta 14

¿Que comando de `rndc` permite recargar la configuracion de BIND sin detener el servicio?

a) `rndc restart`
b) `rndc refresh`
c) `rndc reload`
d) `rndc reconfig`

<details><summary>Respuesta</summary>

**c) `rndc reload`**

El comando `rndc reload` recarga la configuracion completa de BIND y todos los archivos de zona sin necesidad de detener y reiniciar el servicio. Tambien se puede recargar una zona especifica con `rndc reload nombre_zona`. `rndc reconfig` solo recarga la configuracion (zonas nuevas o eliminadas) sin recargar las zonas existentes.

</details>

### Pregunta 15

¿Que directiva de seguridad de `named.conf` se recomienda configurar para ocultar la version de BIND a consultas externas?

a) `hide-version yes`
b) `version "none"`
c) `show-version no`
d) `version-hide yes`

<details><summary>Respuesta</summary>

**b) `version "none"`**

La directiva `version "none"` (o cualquier texto personalizado) en el bloque `options` oculta la version real de BIND ante consultas como `dig @servidor version.bind chaos txt`. Esto es una medida de seguridad importante para evitar que atacantes identifiquen vulnerabilidades especificas de la version instalada.

</details>

### Pregunta 16

¿En que ruta se encuentran los archivos de zona en un sistema Debian/Ubuntu con BIND?

a) `/etc/bind/zones/`
b) `/var/cache/bind/`
c) `/var/named/`
d) `/usr/share/bind/zones/`

<details><summary>Respuesta</summary>

**b) `/var/cache/bind/`**

En Debian/Ubuntu, los archivos de zona se almacenan por defecto en `/var/cache/bind/`, que es el directorio de trabajo definido por la directiva `directory` en el bloque `options`. En RHEL/CentOS, el directorio equivalente es `/var/named/`. El archivo de configuracion principal esta en `/etc/bind/named.conf`.

</details>

### Pregunta 17

Un administrador necesita que BIND solo consulte los forwarders configurados y no intente resolver por si mismo si estos fallan. ¿Que directiva debe usar?

a) `forward first`
b) `forward only`
c) `forward strict`
d) `forward exclusive`

<details><summary>Respuesta</summary>

**b) `forward only`**

La directiva `forward only` indica a BIND que solo utilice los servidores forwarders configurados para resolver consultas. Si los forwarders no responden, la consulta falla con un error. Con `forward first`, BIND intentaria resolver por si mismo si los forwarders no responden, lo cual proporciona mayor resiliencia pero menor control.

</details>

### Pregunta 18

¿Que bloque de configuracion de `named.conf` permite definir grupos de direcciones IP reutilizables para el control de acceso?

a) `group`
b) `acl`
c) `access-list`
d) `match-clients`

<details><summary>Respuesta</summary>

**b) `acl`**

El bloque `acl` (Access Control List) permite definir grupos nombrados de direcciones IP o subredes que pueden ser referenciados en otras partes de la configuracion. Ejemplo: `acl "red-interna" { 192.168.1.0/24; 10.0.0.0/8; };`. Las ACL deben definirse ANTES de ser utilizadas en la configuracion. BIND incluye ACLs predefinidas: `any`, `none`, `localhost` y `localnets`.

</details>

### Pregunta 19

¿Que tipo de zona DNS es similar a `slave` pero solo copia los registros NS (Name Server) del maestro?

a) `forward`
b) `hint`
c) `stub`
d) `mirror`

<details><summary>Respuesta</summary>

**c) `stub`**

Una zona de tipo `stub` funciona de forma similar a una zona `slave`, pero en lugar de copiar todos los registros de zona, solo copia los registros NS, los registros A correspondientes (glue records) y el registro SOA. Es util para mantener actualizada la informacion de delegacion sin necesidad de transferir toda la zona.

</details>

### Pregunta 20

¿Que directiva en la configuracion de una zona maestra habilita la notificacion automatica a los servidores esclavos cuando cambian los datos de la zona?

a) `alert yes`
b) `notify yes`
c) `update-notify yes`
d) `slave-notify yes`

<details><summary>Respuesta</summary>

**b) `notify yes`**

La directiva `notify yes` dentro de la configuracion de una zona maestra indica a BIND que envie mensajes DNS NOTIFY a los servidores esclavos cada vez que se actualicen los datos de la zona. Esto permite que los esclavos se actualicen inmediatamente sin esperar al intervalo de refresh del registro SOA, mejorando la consistencia.

</details>

### Pregunta 21

Escribe el comando para recargar la configuracion de BIND sin detener el servicio usando la herramienta de control remoto.

<input type="text" class="fill-blank" data-answer="rndc reload" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rndc reload**

El comando `rndc reload` envia una senal al proceso named para que recargue su configuracion y todos los archivos de zona. Es preferible a reiniciar el servicio con systemctl ya que no interrumpe las consultas en curso. Para recargar solo una zona especifica: `rndc reload nombre_zona`.

</details>

### Pregunta 22

Escribe el comando para verificar la sintaxis del archivo de configuracion principal de BIND.

<input type="text" class="fill-blank" data-answer="named-checkconf" data-alt="named-checkconf /etc/bind/named.conf,named-checkconf /etc/named.conf" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**named-checkconf**

El comando `named-checkconf` analiza la sintaxis de `named.conf` y todos los archivos incluidos. Si no se especifica un archivo, verifica el archivo de configuracion por defecto. Si la configuracion es correcta, no produce salida; si hay errores, muestra la linea y el tipo de error. Debe ejecutarse siempre antes de recargar BIND.

</details>

### Pregunta 23

Escribe el comando para vaciar completamente la cache DNS del servidor BIND.

<input type="text" class="fill-blank" data-answer="rndc flush" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rndc flush**

El comando `rndc flush` elimina todas las entradas almacenadas en la cache del servidor BIND, forzandolo a realizar nuevas consultas desde cero para cualquier dominio solicitado. Es util despues de realizar cambios en zonas externas o al diagnosticar problemas de resolucion causados por datos obsoletos en cache.

</details>

### Pregunta 24

Escribe el comando dig para realizar una transferencia de zona completa (AXFR) del dominio ejemplo.com consultando el servidor ns1.ejemplo.com.

<input type="text" class="fill-blank" data-answer="dig @ns1.ejemplo.com ejemplo.com AXFR" data-alt="dig AXFR ejemplo.com @ns1.ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig @ns1.ejemplo.com ejemplo.com AXFR**

El comando `dig @servidor dominio AXFR` solicita una transferencia de zona completa al servidor DNS especificado. AXFR (Authoritative Transfer) descarga todos los registros de la zona. Esta operacion debe estar permitida por la directiva `allow-transfer` del servidor. Es una herramienta de diagnostico importante pero tambien un vector de reconocimiento si no se restringe adecuadamente.

</details>

### Pregunta 25

Escribe el comando para verificar la sintaxis del archivo de zona "db.ejemplo.com" para el dominio "ejemplo.com".

<input type="text" class="fill-blank" data-answer="named-checkzone ejemplo.com db.ejemplo.com" data-alt="named-checkzone ejemplo.com /var/cache/bind/db.ejemplo.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**named-checkzone ejemplo.com db.ejemplo.com**

El comando `named-checkzone` requiere dos argumentos: el nombre de la zona y la ruta al archivo de zona. Verifica la sintaxis de los registros DNS, la coherencia de los datos y posibles errores como registros SOA mal formados o CNAME con otros registros. Un codigo de salida 0 indica que la zona es valida.

</details>
