---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "302"
subtema: "302.2"
titulo: "Resolución de Nombres AD - Ejercicios"
peso: 2
tags:
  - lpic-3
  - tema-302
  - ejercicios
---

# Ejercicios - 302.2 Resolución de Nombres en Active Directory

### Pregunta 1
¿Qué tipo de registro DNS utilizan los clientes de Active Directory para localizar los controladores de dominio?

a) Registros A
b) Registros MX
c) Registros SRV
d) Registros CNAME

<details><summary>Respuesta</summary>

**c) Registros SRV**

Los registros SRV (Service) son el mecanismo fundamental por el cual los clientes de AD localizan servicios como LDAP (`_ldap._tcp.dominio.com`) y Kerberos (`_kerberos._tcp.dominio.com`). Estos registros incluyen el puerto, prioridad, peso y el nombre del host que proporciona el servicio.
</details>

### Pregunta 2
¿Qué registro SRV deben consultar los clientes para localizar el servicio LDAP del dominio?

a) `_ldap._udp.dominio.com`
b) `_ldap._tcp.dominio.com`
c) `_dc._tcp.dominio.com`
d) `_ad._tcp.dominio.com`

<details><summary>Respuesta</summary>

**b) `_ldap._tcp.dominio.com`**

El registro `_ldap._tcp.dominio.com` de tipo SRV indica a los clientes dónde encontrar los servicios LDAP del dominio (puerto 389). Para localizar específicamente los DCs, se consulta `_ldap._tcp.dc._msdcs.dominio.com`. El servicio Kerberos se localiza con `_kerberos._tcp.dominio.com`.
</details>

### Pregunta 3
¿Qué comando añade un registro A para el host "servidor" con IP 192.168.1.50 en el DNS de Samba?

a) `samba-tool dns create localhost empresa.com servidor A 192.168.1.50`
b) `samba-tool dns add localhost empresa.com servidor A 192.168.1.50 -U administrator`
c) `nsupdate add servidor.empresa.com A 192.168.1.50`
d) `samba-tool dns insert servidor A 192.168.1.50`

<details><summary>Respuesta</summary>

**b) `samba-tool dns add localhost empresa.com servidor A 192.168.1.50 -U administrator`**

La sintaxis de `samba-tool dns add` requiere: el servidor DNS (localhost), la zona (empresa.com), el nombre del registro (servidor), el tipo (A) y el dato (IP). Se necesita autenticación con `-U administrator` o un ticket Kerberos válido.
</details>

### Pregunta 4
¿Qué archivo debe configurarse para que BIND9 cargue las zonas AD de Samba mediante DLZ?

a) `/etc/samba/smb.conf`
b) `/etc/bind/named.conf.local`
c) `/etc/bind/db.empresa.com`
d) `/var/lib/samba/dns.conf`

<details><summary>Respuesta</summary>

**b) `/etc/bind/named.conf.local`**

Para integrar BIND9 con Samba AD vía DLZ, se debe agregar la directiva `dlz "AD DNS Zone" { database "dlopen /path/to/dlz_bind9_12.so"; };` en el archivo de configuración de BIND, típicamente `/etc/bind/named.conf.local`. También se debe configurar el keytab en `named.conf.options`.
</details>

### Pregunta 5
¿Qué herramienta permite realizar actualizaciones dinámicas de DNS usando autenticación Kerberos?

a) `samba-tool dns update`
b) `nsupdate -g`
c) `dig +update`
d) `host -u`

<details><summary>Respuesta</summary>

**b) `nsupdate -g`**

`nsupdate -g` utiliza autenticación GSS-TSIG (Kerberos) para realizar actualizaciones dinámicas de DNS. Requiere un ticket Kerberos válido (obtenido con `kinit`). `samba-tool dns add/update/delete` también puede modificar registros pero con su propia autenticación.
</details>

### Pregunta 6
¿Qué comando crea una zona inversa para la red 192.168.1.0/24 en el DNS de Samba?

a) `samba-tool dns zonecreate localhost 192.168.1.0 -U administrator`
b) `samba-tool dns add localhost reverse 192.168.1 -U administrator`
c) `samba-tool dns zonecreate localhost 1.168.192.in-addr.arpa -U administrator`
d) `samba-tool dns createreverse localhost 192.168.1.0/24 -U administrator`

<details><summary>Respuesta</summary>

**c) `samba-tool dns zonecreate localhost 1.168.192.in-addr.arpa -U administrator`**

Las zonas inversas en DNS siguen la convención de invertir los octetos de la dirección IP seguido de `.in-addr.arpa`. Para la red 192.168.1.0/24, el nombre de la zona es `1.168.192.in-addr.arpa`. Se crea con `samba-tool dns zonecreate`.
</details>

### Pregunta 7
¿Cuál es la función del parámetro `dns forwarder` en smb.conf?

a) Definir el servidor DNS primario del dominio
b) Reenviar consultas DNS que no pueden resolverse localmente a otro servidor
c) Configurar la replicación DNS entre DCs
d) Especificar el servidor DNS para BIND9

<details><summary>Respuesta</summary>

**b) Reenviar consultas DNS que no pueden resolverse localmente a otro servidor**

`dns forwarder` define un servidor DNS externo al que Samba reenviará las consultas que no puede resolver con sus zonas locales (por ejemplo, nombres de Internet). Es equivalente a la directiva `forwarders` de BIND9. Ejemplo: `dns forwarder = 8.8.8.8`.
</details>

### Pregunta 8
¿Qué script de Samba actualiza automáticamente los registros SRV y otros registros necesarios para AD?

a) `samba-tool dns refresh`
b) `samba_dnsupdate`
c) `samba-tool drs update`
d) `samba_upgradedns`

<details><summary>Respuesta</summary>

**b) `samba_dnsupdate`**

`samba_dnsupdate` es un script que verifica y actualiza los registros DNS necesarios para el correcto funcionamiento de Active Directory (registros SRV para LDAP, Kerberos, GC, etc.). Se puede ejecutar manualmente con `--verbose` para ver qué registros se actualizan. Samba lo ejecuta automáticamente de forma periódica.
</details>

### Pregunta 9
¿Cuál es la ventaja principal de usar BIND9_DLZ frente al DNS interno de Samba?

a) Es más fácil de configurar
b) No requiere autenticación
c) Ofrece funcionalidades avanzadas como vistas, ACLs y zonas adicionales
d) Es más rápido en todos los casos

<details><summary>Respuesta</summary>

**c) Ofrece funcionalidades avanzadas como vistas, ACLs y zonas adicionales**

BIND9 con DLZ proporciona todas las funcionalidades avanzadas de BIND: vistas (split-horizon DNS), ACLs de consulta, TSIG, zonas maestras/esclavas adicionales no relacionadas con AD, logging detallado y mayor madurez del código. El DNS interno de Samba es más simple de configurar pero tiene menos funcionalidades.
</details>

### Pregunta 10
Un cliente no puede unirse al dominio AD y los logs muestran errores de resolución DNS. ¿Qué se debe verificar primero?

a) Que el cliente tenga una IP estática
b) Que el cliente apunte al DC como servidor DNS y que los registros SRV existan
c) Que el firewall del cliente esté deshabilitado
d) Que el cliente tenga instalado BIND9

<details><summary>Respuesta</summary>

**b) Que el cliente apunte al DC como servidor DNS y que los registros SRV existan**

Para unirse a un dominio AD, el cliente debe poder resolver los registros SRV del dominio. Esto requiere que el cliente use el DC (o un servidor DNS que conozca las zonas AD) como su servidor DNS (`/etc/resolv.conf` debe apuntar al DC). Se debe verificar con `dig _ldap._tcp.dominio.com SRV` que los registros existen.
</details>

### Pregunta 11

¿Qué registro SRV se utiliza para localizar el servicio de Catálogo Global en un dominio Active Directory?

a) `_gc._tcp.dominio.com`
b) `_ldap._tcp.gc._msdcs.dominio.com`
c) `_catalog._tcp.dominio.com`
d) `_globalcatalog._tcp.dominio.com`

<details><summary>Respuesta</summary>

**b) `_ldap._tcp.gc._msdcs.dominio.com`**

El registro SRV `_ldap._tcp.gc._msdcs.dominio.com` localiza los servidores de Catálogo Global (GC) del dominio. El GC escucha en el puerto 3268 y contiene una copia parcial de todos los objetos del bosque. Los registros bajo `_msdcs` son específicos de Microsoft y contienen los registros de servicio críticos para dc, gc, pdc y domains.
</details>

### Pregunta 12

¿Cuál es el formato correcto de un registro SRV en DNS?

a) `_servicio._protocolo.dominio TTL IN SRV host puerto`
b) `_servicio._protocolo.dominio TTL IN SRV prioridad peso puerto host`
c) `_servicio.dominio TTL IN SRV host`
d) `dominio TTL IN SRV servicio protocolo host puerto`

<details><summary>Respuesta</summary>

**b) `_servicio._protocolo.dominio TTL IN SRV prioridad peso puerto host`**

El formato completo de un registro SRV incluye: el nombre del servicio y protocolo con prefijo de guion bajo (por ejemplo `_ldap._tcp.empresa.com`), el TTL, la clase IN, el tipo SRV, y los datos que contienen prioridad (menor = preferido), peso (para balanceo entre misma prioridad), puerto del servicio y nombre del host que lo proporciona.
</details>

### Pregunta 13

¿Qué subzona de `_msdcs` contiene los registros para localizar el PDC Emulator del dominio?

a) `_ldap._tcp.dc._msdcs.dominio.com`
b) `_ldap._tcp.pdc._msdcs.dominio.com`
c) `_ldap._tcp.rid._msdcs.dominio.com`
d) `_pdc._tcp._msdcs.dominio.com`

<details><summary>Respuesta</summary>

**b) `_ldap._tcp.pdc._msdcs.dominio.com`**

El registro `_ldap._tcp.pdc._msdcs.dominio.com` permite a los clientes localizar específicamente el PDC Emulator del dominio. Los registros bajo `_msdcs` organizan los DCs por función: `dc` para todos los controladores de dominio, `gc` para Catálogo Global, `pdc` para el PDC Emulator y `domains` para GUIDs de dominios.
</details>

### Pregunta 14

¿Qué diferencia hay entre `forward first` y `forward only` en la configuración de BIND9 con Samba?

a) `forward first` solo usa reenviadores; `forward only` intenta resolución recursiva además
b) `forward first` intenta el reenviador primero y luego resuelve recursivamente; `forward only` solo usa reenviadores
c) No hay diferencia, son sinónimos
d) `forward first` es para IPv4; `forward only` para IPv6

<details><summary>Respuesta</summary>

**b) `forward first` intenta el reenviador primero y luego resuelve recursivamente; `forward only` solo usa reenviadores**

En la configuración de BIND9, `forward first` intenta resolver primero mediante los reenviadores configurados y, si fallan, realiza resolución recursiva por su cuenta. `forward only` limita la resolución exclusivamente a los reenviadores; si estos no responden, la consulta falla. En entornos AD, `forward first` es generalmente preferible para mayor resiliencia.
</details>

### Pregunta 15

¿Qué archivo debe configurarse con los permisos adecuados para que BIND9 pueda autenticarse con Samba y cargar las zonas AD vía DLZ?

a) `/etc/bind/rndc.key`
b) `/var/lib/samba/bind-dns/dns.keytab`
c) `/etc/samba/smb.conf`
d) `/var/lib/samba/private/krb5.conf`

<details><summary>Respuesta</summary>

**b) `/var/lib/samba/bind-dns/dns.keytab`**

El archivo keytab `/var/lib/samba/bind-dns/dns.keytab` contiene las claves de autenticación necesarias para que BIND9 se autentique con Samba y acceda a las zonas AD almacenadas en la base de datos LDB. Debe ser propiedad del usuario `bind` con permisos 640. Se configura en `named.conf.options` con la directiva `tkey-gssapi-keytab`.
</details>

### Pregunta 16

¿Qué ocurre si se eliminan accidentalmente los registros SRV `_ldap._tcp` y `_kerberos._tcp` del DNS de un dominio AD?

a) Los clientes se conectarán usando NetBIOS como respaldo
b) Solo afecta a los clientes Linux, los Windows siguen funcionando
c) Los clientes no pueden localizar los controladores de dominio y la autenticación falla
d) Solo se pierde la funcionalidad de Catálogo Global

<details><summary>Respuesta</summary>

**c) Los clientes no pueden localizar los controladores de dominio y la autenticación falla**

Los registros SRV son el mecanismo fundamental mediante el cual los clientes AD localizan los servicios LDAP y Kerberos proporcionados por los controladores de dominio. Sin estos registros, ningún cliente puede encontrar un DC para autenticarse, unirse al dominio o acceder a recursos. El script `samba_dnsupdate` puede regenerar estos registros.
</details>

### Pregunta 17

¿Cuál es la diferencia principal entre la gestión DNS con `samba-tool dns` y `nsupdate -g`?

a) `samba-tool dns` solo funciona con BIND9; `nsupdate` solo con DNS interno
b) `samba-tool dns` modifica la base de datos directamente; `nsupdate -g` usa el protocolo DNS dinámico con autenticación Kerberos
c) `samba-tool dns` es más lento; `nsupdate` es más rápido
d) No hay diferencia, ambos usan el mismo mecanismo

<details><summary>Respuesta</summary>

**b) `samba-tool dns` modifica la base de datos directamente; `nsupdate -g` usa el protocolo DNS dinámico con autenticación Kerberos**

`samba-tool dns` interactúa directamente con la base de datos AD de Samba para gestionar registros DNS, mientras que `nsupdate -g` utiliza el protocolo estándar de actualización dinámica de DNS (RFC 2136) con autenticación GSS-TSIG (Kerberos). `nsupdate` funciona tanto con DNS interno como con BIND9_DLZ, y es la misma herramienta que usan los clientes Windows para registrar sus nombres.
</details>

### Pregunta 18

¿Qué tipo de registro DNS se añade a una zona inversa para asociar una dirección IP con un nombre de host?

a) Registro A
b) Registro CNAME
c) Registro PTR
d) Registro SRV

<details><summary>Respuesta</summary>

**c) Registro PTR**

Los registros PTR (Pointer) se utilizan en zonas inversas (`.in-addr.arpa`) para asociar una dirección IP con un nombre de host completo (FQDN). Por ejemplo, para la IP 192.168.1.10, se crea un registro PTR en la zona `1.168.192.in-addr.arpa` con la clave `10` apuntando a `dc.empresa.com`. Son necesarios para la resolución inversa, requerida por algunos servicios y por Kerberos.
</details>

### Pregunta 19

¿Qué comando de `samba-tool` lista todas las zonas DNS configuradas en el servidor Samba AD DC?

a) `samba-tool dns zones`
b) `samba-tool dns zonelist localhost -U administrator`
c) `samba-tool dns list`
d) `samba-tool dns show zones`

<details><summary>Respuesta</summary>

**b) `samba-tool dns zonelist localhost -U administrator`**

El comando `samba-tool dns zonelist` seguido del servidor (localhost) y la autenticación muestra todas las zonas DNS configuradas, incluyendo las zonas directas del dominio, las zonas inversas, la zona `_msdcs` y cualquier otra zona personalizada. Es útil para verificar que todas las zonas necesarias para AD están presentes.
</details>

### Pregunta 20

¿En qué ubicación almacena el DNS interno de Samba las zonas de Active Directory?

a) En archivos de zona estándar de BIND (`/etc/bind/db.*`)
b) En la base de datos LDB de Active Directory (`sam.ldb`)
c) En archivos TDB independientes (`/var/lib/samba/dns.tdb`)
d) En el registro de Samba (`registry.tdb`)

<details><summary>Respuesta</summary>

**b) En la base de datos LDB de Active Directory (`sam.ldb`)**

El DNS interno de Samba almacena las zonas DNS directamente en la base de datos LDB de Active Directory (`/var/lib/samba/private/sam.ldb`). Esto significa que los registros DNS se replican automáticamente junto con el resto de la base de datos AD entre controladores de dominio. Con BIND9_DLZ, BIND accede a esta misma base de datos mediante el módulo DLZ.
</details>

### Pregunta 21

¿Qué comando añade un registro PTR para la IP 192.168.1.10 que apunta a dc.empresa.com en la zona inversa correspondiente?

<input type="text" class="fill-blank" data-answer="samba-tool dns add localhost 1.168.192.in-addr.arpa 10 PTR dc.empresa.com -U administrator" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool dns add localhost 1.168.192.in-addr.arpa 10 PTR dc.empresa.com -U administrator**

Para añadir un registro PTR se utiliza `samba-tool dns add` especificando: el servidor (localhost), la zona inversa (`1.168.192.in-addr.arpa`), el último octeto de la IP como nombre del registro (10), el tipo PTR y el FQDN al que apunta. La zona inversa debe estar creada previamente con `samba-tool dns zonecreate`.
</details>

### Pregunta 22

¿Qué comando verifica que los registros SRV de LDAP del dominio empresa.com existen en DNS?

<input type="text" class="fill-blank" data-answer="dig _ldap._tcp.empresa.com SRV" data-alt="dig @localhost _ldap._tcp.empresa.com SRV,host -t SRV _ldap._tcp.empresa.com" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dig _ldap._tcp.empresa.com SRV**

El comando `dig` con el tipo de registro `SRV` consulta los registros de servicio LDAP del dominio. Si los registros existen, la respuesta incluirá el puerto (389), la prioridad, el peso y el nombre del host del controlador de dominio. La ausencia de estos registros impide que los clientes localicen los DCs para autenticación y unión al dominio.
</details>

### Pregunta 23

¿Qué comando elimina un registro A del host "servidor" con IP 192.168.1.50 de la zona empresa.com en el DNS de Samba?

<input type="text" class="fill-blank" data-answer="samba-tool dns delete localhost empresa.com servidor A 192.168.1.50 -U administrator" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool dns delete localhost empresa.com servidor A 192.168.1.50 -U administrator**

El comando `samba-tool dns delete` requiere especificar exactamente el mismo conjunto de datos del registro a eliminar: servidor DNS, zona, nombre, tipo y dato. La sintaxis es simétrica a `samba-tool dns add`. Si se necesita cambiar la IP de un registro, se puede usar `samba-tool dns update` que modifica el valor existente.
</details>

### Pregunta 24

¿Qué comando crea una zona inversa para la red 10.0.0.0/24 en el DNS de Samba?

<input type="text" class="fill-blank" data-answer="samba-tool dns zonecreate localhost 0.0.10.in-addr.arpa -U administrator" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool dns zonecreate localhost 0.0.10.in-addr.arpa -U administrator**

Para crear una zona inversa, se utiliza `samba-tool dns zonecreate` con el nombre de la zona en formato `in-addr.arpa`, invirtiendo los octetos de la dirección de red. Para 10.0.0.0/24, la zona es `0.0.10.in-addr.arpa`. Después de crear la zona, se pueden añadir registros PTR individuales con `samba-tool dns add`.
</details>

### Pregunta 25

¿Qué comando ejecuta manualmente la actualización de los registros DNS necesarios para Active Directory mostrando los detalles?

<input type="text" class="fill-blank" data-answer="samba_dnsupdate --verbose" data-alt="samba_dnsupdate -v" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba_dnsupdate --verbose**

El comando `samba_dnsupdate --verbose` ejecuta manualmente el proceso de actualización de registros DNS de Active Directory, mostrando en detalle qué registros SRV, A y otros registros necesarios se verifican y actualizan. Samba ejecuta este script automáticamente de forma periódica, pero puede lanzarse manualmente para forzar la actualización inmediata o para diagnóstico.
</details>
