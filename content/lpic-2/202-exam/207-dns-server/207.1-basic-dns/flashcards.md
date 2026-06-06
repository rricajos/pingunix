---
title: "207.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "207.1"
---

# Flashcards: 207.1 - Configuracion Basica Dns

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que tipo de zona contiene la lista de servidores raiz DNS y es necesaria para que BIND pueda resolver consultas recursivas?

</div>
<div class="flashcard-back">

**R:** c) `hint`. La zona de tipo `hint` contiene las direcciones de los servidores raiz DNS (root servers). Es necesaria para que BIND pueda iniciar el proceso de resolucion recursiva, comenzando desde la raiz del arbol DNS. El archivo asociado suele llamarse `db.root`, `named.ca` o `root.hints`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para verificar la sintaxis del archivo `named.conf` antes de recargar BIND?

</div>
<div class="flashcard-back">

**R:** b) `named-checkconf`. `named-checkconf` analiza la sintaxis del archivo `named.conf` y sus archivos incluidos, reportando errores de configuracion. Es una practica esencial ejecutarlo antes de recargar o reiniciar BIND para evitar que el servidor se detenga por errores de sintaxis.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que directiva en el bloque `options` de `named.conf` define los servidores DNS a los que se reenviaran las consultas que BIND no pueda resolver?

</div>
<div class="flashcard-back">

**R:** c) `forwarders`. La directiva `forwarders` dentro del bloque `options` especifica una lista de servidores DNS a los que BIND reenviara las consultas que no pueda resolver localmente. Ejemplo: `forwarders { 8.8.8.8; 8.8.4.4; };`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-004">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia entre `forward only` y `forward first`?

</div>
<div class="flashcard-back">

**R:** b) `forward only` solo consulta forwarders y falla si no responden; `forward first` intenta forwarders y luego resolucion recursiva. Con `forward only`, si los forwarders no responden, la consulta falla. Con `forward first`, BIND intenta primero los forwarders, pero si no responden, intenta resolver la consulta por si mismo de forma recursiva a traves de los servidores raiz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando de `rndc` vacia completamente la cache del servidor DNS?

</div>
<div class="flashcard-back">

**R:** b) `rndc flush`. El comando `rndc flush` elimina toda la informacion almacenada en la cache del servidor BIND, forzandolo a resolver nuevamente todas las consultas desde cero. Esto es util cuando se han realizado cambios en zonas externas y se quiere que el servidor obtenga la informacion actualizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que opcion de `dig` permite rastrear paso a paso el proceso completo de resolucion DNS desde los servidores raiz?

</div>
<div class="flashcard-back">

**R:** b) `dig +trace`. La opcion `+trace` hace que `dig` muestre cada paso del proceso de resolucion recursiva, comenzando desde los servidores raiz, pasando por los TLD y llegando al servidor autoritativo del dominio consultado. Es muy util para diagnosticar problemas de delegacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que ACL predefinida de BIND representa todas las redes directamente conectadas al servidor?

</div>
<div class="flashcard-back">

**R:** c) `localnets`. La ACL predefinida `localnets` incluye automaticamente todas las redes que estan directamente conectadas a las interfaces de red del servidor. `localhost` se refiere unicamente a las direcciones de las propias interfaces. `any` coincide con cualquier direccion y `none` no coincide con ninguna.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-008">
<div class="flashcard-front">

**P:** En una configuracion de zona esclava (slave), ¿que directiva indica la direccion IP del servidor maestro?

</div>
<div class="flashcard-back">

**R:** c) `masters`. En una zona de tipo `slave`, la directiva `masters` especifica la lista de servidores maestros de los que se obtendran los datos de zona mediante transferencia. Ejemplo: `masters { 192.168.1.10; };`. En versiones recientes de BIND, tambien se acepta el sinonimo `primaries`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que comando de `dig` realiza una consulta DNS inversa (de IP a nombre)?

</div>
<div class="flashcard-back">

**R:** b) `dig -x 192.168.1.100`. La opcion `-x` de `dig` realiza una consulta inversa, traduciendo una direccion IP a su nombre de dominio asociado. Internamente, `dig` convierte la IP al formato de zona inversa apropiado (por ejemplo, `100.1.168.192.in-addr.arpa`) y consulta el registro PTR.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que directiva de `named.conf` restringe que hosts pueden realizar transferencias de zona?

</div>
<div class="flashcard-back">

**R:** c) `allow-transfer`. La directiva `allow-transfer` controla que servidores pueden solicitar una transferencia de zona completa (AXFR) o incremental (IXFR). Por seguridad, debe restringirse unicamente a los servidores secundarios autorizados. Ejemplo: `allow-transfer { 192.168.1.11; };`. Establecer `allow-transfer { none; };` desactiva completamente las transferencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que directiva en el bloque `options` de `named.conf` controla si el servidor acepta consultas recursivas?

</div>
<div class="flashcard-back">

**R:** b) `recursion`. La directiva `recursion yes|no` en el bloque `options` habilita o deshabilita la capacidad del servidor para resolver consultas de forma recursiva. `allow-recursion` define quien puede hacer consultas recursivas (control de acceso), mientras que `recursion` activa o desactiva la funcionalidad por completo. En servidores autoritativos publicos, se recomienda `recursion no`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para verificar la sintaxis de un archivo de zona antes de cargarla en BIND?

</div>
<div class="flashcard-back">

**R:** b) `named-checkzone`. El comando `named-checkzone` verifica la sintaxis y la consistencia de un archivo de zona DNS. Se usa con la sintaxis: `named-checkzone nombre_zona archivo_zona`. Por ejemplo: `named-checkzone ejemplo.com /var/cache/bind/db.ejemplo.com`. A diferencia de `named-checkconf` que verifica la configuracion general, `named-checkzone` se centra en los datos de zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que tipo de zona en BIND obtiene automaticamente los datos del servidor maestro mediante transferencia de zona?

</div>
<div class="flashcard-back">

**R:** c) `slave`. Una zona de tipo `slave` (o `secondary` en terminologia moderna) obtiene automaticamente los datos de zona del servidor maestro especificado en la directiva `masters`. La transferencia se realiza mediante AXFR (completa) o IXFR (incremental) y se actualiza segun el valor de refresh definido en el registro SOA de la zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que comando de `rndc` permite recargar la configuracion de BIND sin detener el servicio?

</div>
<div class="flashcard-back">

**R:** c) `rndc reload`. El comando `rndc reload` recarga la configuracion completa de BIND y todos los archivos de zona sin necesidad de detener y reiniciar el servicio. Tambien se puede recargar una zona especifica con `rndc reload nombre_zona`. `rndc reconfig` solo recarga la configuracion (zonas nuevas o eliminadas) sin recargar las zonas existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que directiva de seguridad de `named.conf` se recomienda configurar para ocultar la version de BIND a consultas externas?

</div>
<div class="flashcard-back">

**R:** b) `version "none"`. La directiva `version "none"` (o cualquier texto personalizado) en el bloque `options` oculta la version real de BIND ante consultas como `dig @servidor version.bind chaos txt`. Esto es una medida de seguridad importante para evitar que atacantes identifiquen vulnerabilidades especificas de la version instalada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-016">
<div class="flashcard-front">

**P:** ¿En que ruta se encuentran los archivos de zona en un sistema Debian/Ubuntu con BIND?

</div>
<div class="flashcard-back">

**R:** b) `/var/cache/bind/`. En Debian/Ubuntu, los archivos de zona se almacenan por defecto en `/var/cache/bind/`, que es el directorio de trabajo definido por la directiva `directory` en el bloque `options`. En RHEL/CentOS, el directorio equivalente es `/var/named/`. El archivo de configuracion principal esta en `/etc/bind/named.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-017">
<div class="flashcard-front">

**P:** Un administrador necesita que BIND solo consulte los forwarders configurados y no intente resolver por si mismo si estos fallan. ¿Que directiva debe usar?

</div>
<div class="flashcard-back">

**R:** b) `forward only`. La directiva `forward only` indica a BIND que solo utilice los servidores forwarders configurados para resolver consultas. Si los forwarders no responden, la consulta falla con un error. Con `forward first`, BIND intentaria resolver por si mismo si los forwarders no responden, lo cual proporciona mayor resiliencia pero menor control.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que bloque de configuracion de `named.conf` permite definir grupos de direcciones IP reutilizables para el control de acceso?

</div>
<div class="flashcard-back">

**R:** b) `acl`. El bloque `acl` (Access Control List) permite definir grupos nombrados de direcciones IP o subredes que pueden ser referenciados en otras partes de la configuracion. Ejemplo: `acl "red-interna" { 192.168.1.0/24; 10.0.0.0/8; };`. Las ACL deben definirse ANTES de ser utilizadas en la configuracion. BIND incluye ACLs predefinidas: `any`, `none`, `localhost` y `localnets`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que tipo de zona DNS es similar a `slave` pero solo copia los registros NS (Name Server) del maestro?

</div>
<div class="flashcard-back">

**R:** c) `stub`. Una zona de tipo `stub` funciona de forma similar a una zona `slave`, pero en lugar de copiar todos los registros de zona, solo copia los registros NS, los registros A correspondientes (glue records) y el registro SOA. Es util para mantener actualizada la informacion de delegacion sin necesidad de transferir toda la zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que directiva en la configuracion de una zona maestra habilita la notificacion automatica a los servidores esclavos cuando cambian los datos de la zona?

</div>
<div class="flashcard-back">

**R:** b) `notify yes`. La directiva `notify yes` dentro de la configuracion de una zona maestra indica a BIND que envie mensajes DNS NOTIFY a los servidores esclavos cada vez que se actualicen los datos de la zona. Esto permite que los esclavos se actualicen inmediatamente sin esperar al intervalo de refresh del registro SOA, mejorando la consistencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para recargar la configuracion de BIND sin detener el servicio usando la herramienta de control remoto. <input type="text" class="fill-blank" data-answer="rndc reload" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** rndc reload. El comando `rndc reload` envia una senal al proceso named para que recargue su configuracion y todos los archivos de zona. Es preferible a reiniciar el servicio con systemctl ya que no interrumpe las consultas en curso. Para recargar solo una zona especifica: `rndc reload nombre_zona`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para verificar la sintaxis del archivo de configuracion principal de BIND. <input type="text" class="fill-blank" data-answer="named-checkconf" data-alt="named-checkconf /etc/bind/named.conf,named-checkconf /etc/named.conf" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** named-checkconf. El comando `named-checkconf` analiza la sintaxis de `named.conf` y todos los archivos incluidos. Si no se especifica un archivo, verifica el archivo de configuracion por defecto. Si la configuracion es correcta, no produce salida; si hay errores, muestra la linea y el tipo de error. Debe ejecutarse siempre antes de recargar BIND.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para vaciar completamente la cache DNS del servidor BIND. <input type="text" class="fill-blank" data-answer="rndc flush" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** rndc flush. El comando `rndc flush` elimina todas las entradas almacenadas en la cache del servidor BIND, forzandolo a realizar nuevas consultas desde cero para cualquier dominio solicitado. Es util despues de realizar cambios en zonas externas o al diagnosticar problemas de resolucion causados por datos obsoletos en cache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando dig para realizar una transferencia de zona completa (AXFR) del dominio ejemplo.com consultando el servidor ns1.ejemplo.com. <input type="text" class="fill-blank" data-answer="dig @ns1.ejemplo.com ejemplo.com AXFR" data-alt="dig AXFR ejemplo.com @ns1.ejemplo.com" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** dig @ns1.ejemplo.com ejemplo.com AXFR. El comando `dig @servidor dominio AXFR` solicita una transferencia de zona completa al servidor DNS especificado. AXFR (Authoritative Transfer) descarga todos los registros de la zona. Esta operacion debe estar permitida por la directiva `allow-transfer` del servidor. Es una herramienta de diagnostico importante pero tambien un vector de reconocimiento si no se restringe adecuadamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para verificar la sintaxis del archivo de zona "db.ejemplo.com" para el dominio "ejemplo.com". <input type="text" class="fill-blank" data-answer="named-checkzone ejemplo.com db.ejemplo.com" data-alt="named-checkzone ejemplo.com /var/cache/bind/db.ejemplo.com" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** named-checkzone ejemplo.com db.ejemplo.com. El comando `named-checkzone` requiere dos argumentos: el nombre de la zona y la ruta al archivo de zona. Verifica la sintaxis de los registros DNS, la coherencia de los datos y posibles errores como registros SOA mal formados o CNAME con otros registros. Un codigo de salida 0 indica que la zona es valida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las directivas principales del bloque `options`, especialmente `forwarder...

</div>
<div class="flashcard-back">

**R:** Conoce las directivas principales del bloque `options`, especialmente `forwarders`, `recursion`, `allow-query`, `allow-transfer` y `listen-on`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Entiende la diferencia entre los tipos de zona. La zona `hint` es obligatoria pa...

</div>
<div class="flashcard-back">

**R:** Entiende la diferencia entre los tipos de zona. La zona `hint` es obligatoria para que el servidor pueda resolver consultas de forma recursiva comenzando desde la raiz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Las ACLs deben definirse ANTES de ser referenciadas en la configuracion. Conoce ...

</div>
<div class="flashcard-back">

**R:** Las ACLs deben definirse ANTES de ser referenciadas en la configuracion. Conoce las ACLs predefinidas, especialmente `any`, `none`, `localhost` y `localnets`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Siempre ejecuta `named-checkconf` y `named-checkzone` antes de recargar BIND. Un...

</div>
<div class="flashcard-back">

**R:** Siempre ejecuta `named-checkconf` y `named-checkzone` antes de recargar BIND. Un error de sintaxis puede impedir que el servidor arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `dig` es la herramienta principal de diagnostico DNS. Conoce las opciones `+shor...

</div>
<div class="flashcard-back">

**R:** `dig` es la herramienta principal de diagnostico DNS. Conoce las opciones `+short`, `+trace`, `-x` (inversa) y como especificar el servidor con `@servidor`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `master`?

</div>
<div class="flashcard-back">

**R:** Servidor principal, contiene la copia original de los datos de zona

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `slave`?

</div>
<div class="flashcard-back">

**R:** Servidor secundario, obtiene datos del master via transferencia de zona

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `hint`?

</div>
<div class="flashcard-back">

**R:** Contiene la lista de servidores raiz DNS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `forward`?

</div>
<div class="flashcard-back">

**R:** Reenvia todas las consultas de esta zona a otros servidores

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `stub`?

</div>
<div class="flashcard-back">

**R:** Similar a slave, pero solo copia los registros NS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Estructura de named.conf?

</div>
<div class="flashcard-back">

**R:** El archivo `named.conf` tiene una estructura basada en bloques con la siguiente sintaxis:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="207.1">
</div>

<div class="flashcard" data-id="207.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

