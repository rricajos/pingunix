---
title: "210.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "210.1"
---

# Flashcards: 210.1 - Configuracion Dhcp

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-001">
<div class="flashcard-front">

**P:** ¿En qué archivo se almacenan las concesiones activas del servidor ISC DHCP en IPv4?

</div>
<div class="flashcard-back">

**R:** b) /var/lib/dhcp/dhcpd.leases. El archivo `/var/lib/dhcp/dhcpd.leases` es la base de datos donde el servidor ISC DHCP registra todas las concesiones activas, expiradas y liberadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué directiva en dhcpd.conf se utiliza para asignar siempre la misma IP a un cliente específico?

</div>
<div class="flashcard-back">

**R:** c) fixed-address. La directiva `fixed-address` dentro de una declaración `host` permite asignar una IP fija a un cliente identificado por su dirección MAC mediante `hardware ethernet`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-003">
<div class="flashcard-front">

**P:** ¿Cuáles son los puertos UDP que utiliza DHCPv4?

</div>
<div class="flashcard-back">

**R:** b) 67 (servidor) y 68 (cliente). DHCPv4 utiliza el puerto UDP 67 para el servidor y el puerto UDP 68 para el cliente. Los puertos 546/547 corresponden a DHCPv6.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar la sintaxis del archivo de configuración de dhcpd sin iniciar el servicio?

</div>
<div class="flashcard-back">

**R:** b) dhcpd -t. El comando `dhcpd -t` analiza el archivo de configuración y reporta errores de sintaxis sin iniciar el demonio. Se puede especificar el archivo con `-cf`: `dhcpd -t -cf /etc/dhcp/dhcpd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué utilidad se usa para retransmitir peticiones DHCP entre subredes cuando el servidor DHCP está en una red diferente?

</div>
<div class="flashcard-back">

**R:** c) dhcrelay. `dhcrelay` es el agente relay de DHCP que retransmite mensajes DHCP entre clientes y servidores que se encuentran en subredes diferentes. Se usa con la sintaxis: `dhcrelay -i eth0 <IP_servidor_DHCP>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-006">
<div class="flashcard-front">

**P:** En el siguiente fragmento de configuración, ¿cuántas direcciones IP puede asignar el servidor DHCP?

</div>
<div class="flashcard-back">

**R:** b) 11. El rango `range 10.0.0.50 10.0.0.60` incluye ambos extremos, por lo que son 11 direcciones disponibles: de 10.0.0.50 a 10.0.0.60 inclusive.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-007">
<div class="flashcard-front">

**P:** ¿Cuáles son los cuatro pasos del proceso de obtención de una dirección DHCP?

</div>
<div class="flashcard-back">

**R:** b) Discover, Offer, Request, Acknowledge. El proceso DORA de DHCP consiste en: **D**iscover (cliente busca servidores), **O**ffer (servidor ofrece IP), **R**equest (cliente acepta la oferta), **A**cknowledge (servidor confirma). La opción d) corresponde al proceso de DHCPv6.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué directiva establece el tiempo máximo que un cliente puede mantener una concesión DHCP?

</div>
<div class="flashcard-back">

**R:** c) max-lease-time. `max-lease-time` establece el tiempo máximo (en segundos) que un cliente puede mantener una concesión, incluso si solicita un tiempo mayor. `default-lease-time` es el tiempo asignado cuando el cliente no solicita uno específico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué puertos utiliza DHCPv6?

</div>
<div class="flashcard-back">

**R:** c) 546 (cliente) y 547 (servidor). DHCPv6 utiliza puertos diferentes a DHCPv4: el puerto UDP 546 para el cliente y el puerto UDP 547 para el servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-010">
<div class="flashcard-front">

**P:** ¿Qué directiva en dhcpd.conf se usa para definir la puerta de enlace que se entregará a los clientes?

</div>
<div class="flashcard-back">

**R:** c) option routers. La directiva `option routers` especifica la puerta de enlace predeterminada que el servidor DHCP comunicará a los clientes. Puede incluir múltiples direcciones separadas por comas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué declaración en dhcpd.conf permite agrupar varias subredes que comparten la misma interfaz física?

</div>
<div class="flashcard-back">

**R:** c) shared-network. La declaración `shared-network` permite agrupar múltiples declaraciones `subnet` que coexisten en la misma interfaz física. Es necesaria cuando hay varias redes lógicas en un mismo segmento de red, permitiendo al servidor DHCP gestionar direcciones de ambas subredes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué directiva en dhcpd.conf se utiliza para indicar que el servidor es autoritativo para la red y debe enviar DHCPNAK a clientes con concesiones inválidas?

</div>
<div class="flashcard-back">

**R:** b) authoritative. La directiva `authoritative` indica que el servidor DHCP es la autoridad para esa red. Cuando está habilitada, el servidor envía mensajes DHCPNAK a clientes que solicitan una dirección IP que no pertenece al rango configurado, forzándolos a obtener una nueva dirección.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-013">
<div class="flashcard-front">

**P:** ¿En qué archivo se configura la interfaz de red donde escucha el servidor ISC DHCP en sistemas Debian/Ubuntu?

</div>
<div class="flashcard-back">

**R:** b) /etc/default/isc-dhcp-server. En sistemas Debian/Ubuntu, la interfaz de escucha se configura en `/etc/default/isc-dhcp-server` mediante la directiva `INTERFACESv4`. En sistemas RHEL/CentOS, la configuración equivalente se encuentra en `/etc/sysconfig/dhcpd`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué campo del archivo dhcpd.leases indica el estado actual de una concesión?

</div>
<div class="flashcard-back">

**R:** b) binding state. El campo `binding state` en el archivo `/var/lib/dhcp/dhcpd.leases` indica el estado actual de la concesión. Los valores posibles incluyen `active` (en uso), `free` (disponible) y `expired` (expirada).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué opción del comando `dhcrelay` se utiliza para especificar el modo IPv6?

</div>
<div class="flashcard-back">

**R:** b) -6. La opción `-6` de `dhcrelay` activa el modo DHCPv6. En modo IPv6, se utilizan las opciones `-l` (interfaz del lado del cliente) y `-u` (interfaz del lado del servidor) en lugar de `-i`. Por defecto, `dhcrelay` opera en modo IPv4.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué directiva de dhcpd.conf se utiliza dentro de una declaración `host` para identificar al cliente por su dirección MAC?

</div>
<div class="flashcard-back">

**R:** c) hardware ethernet. La directiva `hardware ethernet` dentro de una declaración `host` identifica al cliente por su dirección MAC. Se usa junto con `fixed-address` para crear reservas DHCP, asegurando que un cliente específico reciba siempre la misma dirección IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es el archivo de configuración del servidor DHCPv6 en ISC DHCP?

</div>
<div class="flashcard-back">

**R:** b) /etc/dhcp/dhcpd6.conf. La configuración del servidor DHCPv6 se encuentra en `/etc/dhcp/dhcpd6.conf`. Este archivo utiliza directivas similares a DHCPv4 pero con sintaxis específica para IPv6, como `subnet6`, `range6` y opciones con prefijo `dhcp6.`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué declaración en dhcpd.conf permite aplicar opciones comunes a múltiples declaraciones `host`?

</div>
<div class="flashcard-back">

**R:** c) group. La declaración `group` permite agrupar múltiples declaraciones `host` (o `subnet`) y aplicarles opciones comunes. Esto evita repetir las mismas opciones en cada declaración individual, facilitando la administración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva en DHCPv6 se utiliza para definir un rango de direcciones IPv6 asignables?

</div>
<div class="flashcard-back">

**R:** b) range6. En DHCPv6, la directiva `range6` define el rango de direcciones IPv6 que el servidor puede asignar a los clientes. Se utiliza dentro de una declaración `subnet6`. La sintaxis es: `range6 2001:db8:1::100 2001:db8:1::200;`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando del lado del cliente permite liberar la dirección IP actual obtenida por DHCP?

</div>
<div class="flashcard-back">

**R:** b) dhclient -r. El comando `dhclient -r` libera (release) la dirección IP actual obtenida por DHCP, enviando un mensaje DHCPRELEASE al servidor. Para solicitar una nueva dirección después de la liberación, se ejecuta `dhclient` seguido del nombre de la interfaz.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando verifica la sintaxis del archivo de configuración del servidor ISC DHCP sin iniciar el servicio?

</div>
<div class="flashcard-back">

**R:** dhcpd -t. El comando `dhcpd -t` analiza el archivo de configuración en busca de errores de sintaxis sin iniciar el demonio. Se puede especificar un archivo alternativo con la opción `-cf`, por ejemplo: `dhcpd -t -cf /etc/dhcp/dhcpd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para retransmitir peticiones DHCP del cliente en la interfaz eth0 hacia el servidor DHCP en 10.0.0.1?

</div>
<div class="flashcard-back">

**R:** dhcrelay -i eth0 10.0.0.1. El comando `dhcrelay -i eth0 10.0.0.1` inicia el agente relay DHCP que escucha peticiones de clientes en la interfaz `eth0` y las reenvía al servidor DHCP ubicado en la dirección `10.0.0.1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando solicita una nueva dirección IP vía DHCP para la interfaz eth0?

</div>
<div class="flashcard-back">

**R:** dhclient eth0. El comando `dhclient eth0` inicia el proceso DORA para obtener una nueva dirección IP del servidor DHCP para la interfaz `eth0`. Si ya tiene una concesión activa, intentará renovarla primero.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar la configuración de dhcpd especificando un archivo de configuración alternativo ubicado en /tmp/test.conf?

</div>
<div class="flashcard-back">

**R:** dhcpd -t -cf /tmp/test.conf. El comando `dhcpd -t -cf /tmp/test.conf` verifica la sintaxis del archivo de configuración especificado con `-cf` sin iniciar el demonio. La opción `-t` activa el modo de prueba (test).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando libera la dirección IP actual del cliente DHCP y luego solicita una nueva?

</div>
<div class="flashcard-back">

**R:** dhclient -r. El comando `dhclient -r` envía un mensaje DHCPRELEASE al servidor para liberar la concesión actual. Posteriormente, se ejecuta `dhclient` para solicitar una nueva dirección IP mediante el proceso DORA completo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Las reservas con `fixed-address` se basan en la dirección MAC declarada con `har...

</div>
<div class="flashcard-back">

**R:** Las reservas con `fixed-address` se basan en la dirección MAC declarada con `hardware ethernet`. Es fundamental recordar la sintaxis exacta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La ruta `/var/lib/dhcp/dhcpd.leases` es muy preguntada. Memoriza tanto la ubicac...

</div>
<div class="flashcard-back">

**R:** La ruta `/var/lib/dhcp/dhcpd.leases` es muy preguntada. Memoriza tanto la ubicación como la estructura del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conocer las diferencias de sintaxis entre DHCPv4 y DHCPv6 es importante. Recuerd...

</div>
<div class="flashcard-back">

**R:** Conocer las diferencias de sintaxis entre DHCPv4 y DHCPv6 es importante. Recuerda los puertos 546/547 y los prefijos `subnet6`, `range6` y `dhcp6.`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `dhcrelay` es esencial cuando clientes y servidor DHCP están en subredes distint...

</div>
<div class="flashcard-back">

**R:** `dhcrelay` es esencial cuando clientes y servidor DHCP están en subredes distintas. Recuerda que requiere indicar la interfaz y la IP del servidor DHCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `option routers`?

</div>
<div class="flashcard-back">

**R:** Puerta de enlace predeterminada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `default-lease-time`?

</div>
<div class="flashcard-back">

**R:** Tiempo de concesión por defecto (segundos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `max-lease-time`?

</div>
<div class="flashcard-back">

**R:** Tiempo máximo de concesión (segundos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `binding state`?

</div>
<div class="flashcard-back">

**R:** Estado actual (active, free, expired)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `-i`?

</div>
<div class="flashcard-back">

**R:** Interfaz donde escuchar peticiones de clientes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Conceptos fundamentales de DHCP?

</div>
<div class="flashcard-back">

**R:** DHCP (Dynamic Host Configuration Protocol) permite la asignación automática de direcciones IP y otros parámetros de red a los clientes. Funciona sobre UDP utilizando los puertos **67** (servidor) y **6

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Servidor ISC DHCP (dhcpd)?

</div>
<div class="flashcard-back">

**R:** El servidor DHCP más utilizado en Linux es el del Internet Systems Consortium (ISC). El demonio se llama `dhcpd` y su archivo de configuración principal es `/etc/dhcp/dhcpd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Archivo de configuración dhcpd.conf?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/dhcp/dhcpd.conf` contiene toda la configuración del servidor DHCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Reservas de dirección fija (fixed-address)?

</div>
<div class="flashcard-back">

**R:** Permiten asignar siempre la misma IP a un cliente identificado por su dirección MAC:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Archivo de concesiones (dhcpd.leases)?

</div>
<div class="flashcard-back">

**R:** El servidor DHCP registra todas las concesiones activas en el archivo `/var/lib/dhcp/dhcpd.leases`. Este archivo se actualiza automáticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son DHCPv6?

</div>
<div class="flashcard-back">

**R:** Para IPv6, el servidor DHCP utiliza el demonio `dhcpd6` con su propio archivo de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="210.1">
</div>

<div class="flashcard" data-id="210.1-fc-041">
<div class="flashcard-front">

**P:** Que es/son DHCP Relay (dhcrelay)?

</div>
<div class="flashcard-back">

**R:** Cuando el servidor DHCP se encuentra en una red diferente a la de los clientes, se necesita un agente relay que reenvíe las peticiones DHCP entre subredes.

</div>
</div>

---

