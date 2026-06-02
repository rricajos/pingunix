---
title: "302.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "302.2"
---

# Flashcards: 302.2 - Resolucion De Nombres Ad

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-001">
<div class="flashcard-front">

**P:** ¿Qué tipo de registro DNS utilizan los clientes de Active Directory para localizar los controladores de dominio?

</div>
<div class="flashcard-back">

**R:** c) Registros SRV. Los registros SRV (Service) son el mecanismo fundamental por el cual los clientes de AD localizan servicios como LDAP (`_ldap._tcp.dominio.com`) y Kerberos (`_kerberos._tcp.dominio.com`). Estos registros incluyen el puerto, prioridad, peso y el nombre del host que proporciona el servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué registro SRV deben consultar los clientes para localizar el servicio LDAP del dominio?

</div>
<div class="flashcard-back">

**R:** b) `_ldap._tcp.dominio.com`. El registro `_ldap._tcp.dominio.com` de tipo SRV indica a los clientes dónde encontrar los servicios LDAP del dominio (puerto 389). Para localizar específicamente los DCs, se consulta `_ldap._tcp.dc._msdcs.dominio.com`. El servicio Kerberos se localiza con `_kerberos._tcp.dominio.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando añade un registro A para el host "servidor" con IP 192.168.1.50 en el DNS de Samba?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool dns add localhost empresa.com servidor A 192.168.1.50 -U administrator`. La sintaxis de `samba-tool dns add` requiere: el servidor DNS (localhost), la zona (empresa.com), el nombre del registro (servidor), el tipo (A) y el dato (IP). Se necesita autenticación con `-U administrator` o un ticket Kerberos válido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué archivo debe configurarse para que BIND9 cargue las zonas AD de Samba mediante DLZ?

</div>
<div class="flashcard-back">

**R:** b) `/etc/bind/named.conf.local`. Para integrar BIND9 con Samba AD vía DLZ, se debe agregar la directiva `dlz "AD DNS Zone" { database "dlopen /path/to/dlz_bind9_12.so"; };` en el archivo de configuración de BIND, típicamente `/etc/bind/named.conf.local`. También se debe configurar el keytab en `named.conf.options`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué herramienta permite realizar actualizaciones dinámicas de DNS usando autenticación Kerberos?

</div>
<div class="flashcard-back">

**R:** b) `nsupdate -g`. `nsupdate -g` utiliza autenticación GSS-TSIG (Kerberos) para realizar actualizaciones dinámicas de DNS. Requiere un ticket Kerberos válido (obtenido con `kinit`). `samba-tool dns add/update/delete` también puede modificar registros pero con su propia autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando crea una zona inversa para la red 192.168.1.0/24 en el DNS de Samba?

</div>
<div class="flashcard-back">

**R:** c) `samba-tool dns zonecreate localhost 1.168.192.in-addr.arpa -U administrator`. Las zonas inversas en DNS siguen la convención de invertir los octetos de la dirección IP seguido de `.in-addr.arpa`. Para la red 192.168.1.0/24, el nombre de la zona es `1.168.192.in-addr.arpa`. Se crea con `samba-tool dns zonecreate`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-007">
<div class="flashcard-front">

**P:** ¿Cuál es la función del parámetro `dns forwarder` en smb.conf?

</div>
<div class="flashcard-back">

**R:** b) Reenviar consultas DNS que no pueden resolverse localmente a otro servidor. `dns forwarder` define un servidor DNS externo al que Samba reenviará las consultas que no puede resolver con sus zonas locales (por ejemplo, nombres de Internet). Es equivalente a la directiva `forwarders` de BIND9. Ejemplo: `dns forwarder = 8.8.8.8`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué script de Samba actualiza automáticamente los registros SRV y otros registros necesarios para AD?

</div>
<div class="flashcard-back">

**R:** b) `samba_dnsupdate`. `samba_dnsupdate` es un script que verifica y actualiza los registros DNS necesarios para el correcto funcionamiento de Active Directory (registros SRV para LDAP, Kerberos, GC, etc.). Se puede ejecutar manualmente con `--verbose` para ver qué registros se actualizan. Samba lo ejecuta automáticamente de forma periódica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál es la ventaja principal de usar BIND9_DLZ frente al DNS interno de Samba?

</div>
<div class="flashcard-back">

**R:** c) Ofrece funcionalidades avanzadas como vistas, ACLs y zonas adicionales. BIND9 con DLZ proporciona todas las funcionalidades avanzadas de BIND: vistas (split-horizon DNS), ACLs de consulta, TSIG, zonas maestras/esclavas adicionales no relacionadas con AD, logging detallado y mayor madurez del código. El DNS interno de Samba es más simple de configurar pero tiene menos funcionalidades.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-010">
<div class="flashcard-front">

**P:** Un cliente no puede unirse al dominio AD y los logs muestran errores de resolución DNS. ¿Qué se debe verificar primero?

</div>
<div class="flashcard-back">

**R:** b) Que el cliente apunte al DC como servidor DNS y que los registros SRV existan. Para unirse a un dominio AD, el cliente debe poder resolver los registros SRV del dominio. Esto requiere que el cliente use el DC (o un servidor DNS que conozca las zonas AD) como su servidor DNS (`/etc/resolv.conf` debe apuntar al DC). Se debe verificar con `dig _ldap._tcp.dominio.com SRV` que los registros existen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué registro SRV se utiliza para localizar el servicio de Catálogo Global en un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `_ldap._tcp.gc._msdcs.dominio.com`. El registro SRV `_ldap._tcp.gc._msdcs.dominio.com` localiza los servidores de Catálogo Global (GC) del dominio. El GC escucha en el puerto 3268 y contiene una copia parcial de todos los objetos del bosque. Los registros bajo `_msdcs` son específicos de Microsoft y contienen los registros de servicio críticos para dc, gc, pdc y domains.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-012">
<div class="flashcard-front">

**P:** ¿Cuál es el formato correcto de un registro SRV en DNS?

</div>
<div class="flashcard-back">

**R:** b) `_servicio._protocolo.dominio TTL IN SRV prioridad peso puerto host`. El formato completo de un registro SRV incluye: el nombre del servicio y protocolo con prefijo de guion bajo (por ejemplo `_ldap._tcp.empresa.com`), el TTL, la clase IN, el tipo SRV, y los datos que contienen prioridad (menor = preferido), peso (para balanceo entre misma prioridad), puerto del servicio y nombre del host que lo proporciona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué subzona de `_msdcs` contiene los registros para localizar el PDC Emulator del dominio?

</div>
<div class="flashcard-back">

**R:** b) `_ldap._tcp.pdc._msdcs.dominio.com`. El registro `_ldap._tcp.pdc._msdcs.dominio.com` permite a los clientes localizar específicamente el PDC Emulator del dominio. Los registros bajo `_msdcs` organizan los DCs por función: `dc` para todos los controladores de dominio, `gc` para Catálogo Global, `pdc` para el PDC Emulator y `domains` para GUIDs de dominios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre `forward first` y `forward only` en la configuración de BIND9 con Samba?

</div>
<div class="flashcard-back">

**R:** b) `forward first` intenta el reenviador primero y luego resuelve recursivamente; `forward only` solo usa reenviadores. En la configuración de BIND9, `forward first` intenta resolver primero mediante los reenviadores configurados y, si fallan, realiza resolución recursiva por su cuenta. `forward only` limita la resolución exclusivamente a los reenviadores; si estos no responden, la consulta falla. En entornos AD, `forward first` es generalmente preferible para mayor resiliencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-015">
<div class="flashcard-front">

**P:** ¿Qué archivo debe configurarse con los permisos adecuados para que BIND9 pueda autenticarse con Samba y cargar las zonas AD vía DLZ?

</div>
<div class="flashcard-back">

**R:** b) `/var/lib/samba/bind-dns/dns.keytab`. El archivo keytab `/var/lib/samba/bind-dns/dns.keytab` contiene las claves de autenticación necesarias para que BIND9 se autentique con Samba y acceda a las zonas AD almacenadas en la base de datos LDB. Debe ser propiedad del usuario `bind` con permisos 640. Se configura en `named.conf.options` con la directiva `tkey-gssapi-keytab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué ocurre si se eliminan accidentalmente los registros SRV `_ldap._tcp` y `_kerberos._tcp` del DNS de un dominio AD?

</div>
<div class="flashcard-back">

**R:** c) Los clientes no pueden localizar los controladores de dominio y la autenticación falla. Los registros SRV son el mecanismo fundamental mediante el cual los clientes AD localizan los servicios LDAP y Kerberos proporcionados por los controladores de dominio. Sin estos registros, ningún cliente puede encontrar un DC para autenticarse, unirse al dominio o acceder a recursos. El script `samba_dnsupdate` puede regenerar estos registros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre la gestión DNS con `samba-tool dns` y `nsupdate -g`?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool dns` modifica la base de datos directamente; `nsupdate -g` usa el protocolo DNS dinámico con autenticación Kerberos. `samba-tool dns` interactúa directamente con la base de datos AD de Samba para gestionar registros DNS, mientras que `nsupdate -g` utiliza el protocolo estándar de actualización dinámica de DNS (RFC 2136) con autenticación GSS-TSIG (Kerberos). `nsupdate` funciona tanto con DNS interno como con BIND9_DLZ, y es la misma herramienta que usan los clientes Windows para registrar sus nombres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué tipo de registro DNS se añade a una zona inversa para asociar una dirección IP con un nombre de host?

</div>
<div class="flashcard-back">

**R:** c) Registro PTR. Los registros PTR (Pointer) se utilizan en zonas inversas (`.in-addr.arpa`) para asociar una dirección IP con un nombre de host completo (FQDN). Por ejemplo, para la IP 192.168.1.10, se crea un registro PTR en la zona `1.168.192.in-addr.arpa` con la clave `10` apuntando a `dc.empresa.com`. Son necesarios para la resolución inversa, requerida por algunos servicios y por Kerberos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando de `samba-tool` lista todas las zonas DNS configuradas en el servidor Samba AD DC?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool dns zonelist localhost -U administrator`. El comando `samba-tool dns zonelist` seguido del servidor (localhost) y la autenticación muestra todas las zonas DNS configuradas, incluyendo las zonas directas del dominio, las zonas inversas, la zona `_msdcs` y cualquier otra zona personalizada. Es útil para verificar que todas las zonas necesarias para AD están presentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-020">
<div class="flashcard-front">

**P:** ¿En qué ubicación almacena el DNS interno de Samba las zonas de Active Directory?

</div>
<div class="flashcard-back">

**R:** b) En la base de datos LDB de Active Directory (`sam.ldb`). El DNS interno de Samba almacena las zonas DNS directamente en la base de datos LDB de Active Directory (`/var/lib/samba/private/sam.ldb`). Esto significa que los registros DNS se replican automáticamente junto con el resto de la base de datos AD entre controladores de dominio. Con BIND9_DLZ, BIND accede a esta misma base de datos mediante el módulo DLZ.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando añade un registro PTR para la IP 192.168.1.10 que apunta a dc.empresa.com en la zona inversa correspondiente?

</div>
<div class="flashcard-back">

**R:** samba-tool dns add localhost 1.168.192.in-addr.arpa 10 PTR dc.empresa.com -U administrator. Para añadir un registro PTR se utiliza `samba-tool dns add` especificando: el servidor (localhost), la zona inversa (`1.168.192.in-addr.arpa`), el último octeto de la IP como nombre del registro (10), el tipo PTR y el FQDN al que apunta. La zona inversa debe estar creada previamente con `samba-tool dns zonecreate`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando verifica que los registros SRV de LDAP del dominio empresa.com existen en DNS?

</div>
<div class="flashcard-back">

**R:** dig _ldap._tcp.empresa.com SRV. El comando `dig` con el tipo de registro `SRV` consulta los registros de servicio LDAP del dominio. Si los registros existen, la respuesta incluirá el puerto (389), la prioridad, el peso y el nombre del host del controlador de dominio. La ausencia de estos registros impide que los clientes localicen los DCs para autenticación y unión al dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando elimina un registro A del host "servidor" con IP 192.168.1.50 de la zona empresa.com en el DNS de Samba?

</div>
<div class="flashcard-back">

**R:** samba-tool dns delete localhost empresa.com servidor A 192.168.1.50 -U administrator. El comando `samba-tool dns delete` requiere especificar exactamente el mismo conjunto de datos del registro a eliminar: servidor DNS, zona, nombre, tipo y dato. La sintaxis es simétrica a `samba-tool dns add`. Si se necesita cambiar la IP de un registro, se puede usar `samba-tool dns update` que modifica el valor existente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando crea una zona inversa para la red 10.0.0.0/24 en el DNS de Samba?

</div>
<div class="flashcard-back">

**R:** samba-tool dns zonecreate localhost 0.0.10.in-addr.arpa -U administrator. Para crear una zona inversa, se utiliza `samba-tool dns zonecreate` con el nombre de la zona en formato `in-addr.arpa`, invirtiendo los octetos de la dirección de red. Para 10.0.0.0/24, la zona es `0.0.10.in-addr.arpa`. Después de crear la zona, se pueden añadir registros PTR individuales con `samba-tool dns add`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando ejecuta manualmente la actualización de los registros DNS necesarios para Active Directory mostrando los detalles?

</div>
<div class="flashcard-back">

**R:** samba_dnsupdate --verbose. El comando `samba_dnsupdate --verbose` ejecuta manualmente el proceso de actualización de registros DNS de Active Directory, mostrando en detalle qué registros SRV, A y otros registros necesarios se verifican y actualizan. Samba ejecuta este script automáticamente de forma periódica, pero puede lanzarse manualmente para forzar la actualización inmediata o para diagnóstico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: DNS no es opcional en AD; es un requisito fundamental. Sin DNS funcional, ningún...

</div>
<div class="flashcard-back">

**R:** DNS no es opcional en AD; es un requisito fundamental. Sin DNS funcional, ningún servicio de Active Directory opera correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Los registros `_ldap._tcp` y `_kerberos._tcp` son los más importantes. Si faltan...

</div>
<div class="flashcard-back">

**R:** Los registros `_ldap._tcp` y `_kerberos._tcp` son los más importantes. Si faltan, los clientes no pueden localizar los DCs y la autenticación falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conocer la configuración del módulo DLZ en named.conf y el keytab necesario para...

</div>
<div class="flashcard-back">

**R:** Conocer la configuración del módulo DLZ en named.conf y el keytab necesario para la autenticación entre BIND y Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `_ldap._tcp.dominio.com`?

</div>
<div class="flashcard-back">

**R:** Localizar servidores LDAP del dominio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `_kpasswd._tcp.dominio.com`?

</div>
<div class="flashcard-back">

**R:** Servicio de cambio de contraseña Kerberos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema abarca la configuración y gestión del DNS en un entorno Active Directory con Samba, incluyendo registros SRV, backends DNS, actualizaciones dinámicas, zonas inversas y reenviadores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son DNS en Active Directory?

</div>
<div class="flashcard-back">

**R:** Active Directory depende de DNS para su funcionamiento. A diferencia de los dominios NT4 que usaban NetBIOS/WINS, AD utiliza DNS para:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son Registros SRV en Active Directory?

</div>
<div class="flashcard-back">

**R:** Los registros SRV (Service) son el mecanismo por el cual los clientes localizan servicios en AD:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Zonas inversas?

</div>
<div class="flashcard-back">

**R:** Las zonas inversas (PTR) son importantes para la resolución inversa de IP a nombre:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Reenviadores DNS (Forwarders)?

</div>
<div class="flashcard-back">

**R:** Los reenviadores permiten resolver nombres que no están en las zonas locales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - DNS es obligatorio para Active Directory; sin él nada funciona

</div>
</div>

---

<div class="flashcard-deck" data-subtema="302.2">
</div>

<div class="flashcard" data-id="302.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

