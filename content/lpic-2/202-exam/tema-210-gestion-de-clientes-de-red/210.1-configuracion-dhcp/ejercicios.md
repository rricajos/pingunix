---
title: "210.1 - Configuración DHCP"
tags: [lpic-2, examen-202, tema-210, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "210"
subtema: "210.1"
---

# 210.1 - Ejercicios: Configuración DHCP

### Pregunta 1

¿En qué archivo se almacenan las concesiones activas del servidor ISC DHCP en IPv4?

a) /etc/dhcp/dhcpd.conf
b) /var/lib/dhcp/dhcpd.leases
c) /var/log/dhcp/leases.db
d) /run/dhcp/dhcpd.leases

<details><summary>Respuesta</summary>

**b) /var/lib/dhcp/dhcpd.leases**

El archivo `/var/lib/dhcp/dhcpd.leases` es la base de datos donde el servidor ISC DHCP registra todas las concesiones activas, expiradas y liberadas.
</details>

### Pregunta 2

¿Qué directiva en dhcpd.conf se utiliza para asignar siempre la misma IP a un cliente específico?

a) static-address
b) reserved-ip
c) fixed-address
d) permanent-address

<details><summary>Respuesta</summary>

**c) fixed-address**

La directiva `fixed-address` dentro de una declaración `host` permite asignar una IP fija a un cliente identificado por su dirección MAC mediante `hardware ethernet`.
</details>

### Pregunta 3

¿Cuáles son los puertos UDP que utiliza DHCPv4?

a) 53 (servidor) y 54 (cliente)
b) 67 (servidor) y 68 (cliente)
c) 546 (servidor) y 547 (cliente)
d) 69 (servidor) y 70 (cliente)

<details><summary>Respuesta</summary>

**b) 67 (servidor) y 68 (cliente)**

DHCPv4 utiliza el puerto UDP 67 para el servidor y el puerto UDP 68 para el cliente. Los puertos 546/547 corresponden a DHCPv6.
</details>

### Pregunta 4

¿Qué comando se utiliza para verificar la sintaxis del archivo de configuración de dhcpd sin iniciar el servicio?

a) dhcpd --check
b) dhcpd -t
c) dhcpd -verify
d) dhcpd -c

<details><summary>Respuesta</summary>

**b) dhcpd -t**

El comando `dhcpd -t` analiza el archivo de configuración y reporta errores de sintaxis sin iniciar el demonio. Se puede especificar el archivo con `-cf`: `dhcpd -t -cf /etc/dhcp/dhcpd.conf`.
</details>

### Pregunta 5

¿Qué utilidad se usa para retransmitir peticiones DHCP entre subredes cuando el servidor DHCP está en una red diferente?

a) dhcpforward
b) dhcproxy
c) dhcrelay
d) dhcpbridge

<details><summary>Respuesta</summary>

**c) dhcrelay**

`dhcrelay` es el agente relay de DHCP que retransmite mensajes DHCP entre clientes y servidores que se encuentran en subredes diferentes. Se usa con la sintaxis: `dhcrelay -i eth0 <IP_servidor_DHCP>`.
</details>

### Pregunta 6

En el siguiente fragmento de configuración, ¿cuántas direcciones IP puede asignar el servidor DHCP?

```
subnet 10.0.0.0 netmask 255.255.255.0 {
    range 10.0.0.50 10.0.0.60;
    option routers 10.0.0.1;
}
```

a) 10
b) 11
c) 60
d) 254

<details><summary>Respuesta</summary>

**b) 11**

El rango `range 10.0.0.50 10.0.0.60` incluye ambos extremos, por lo que son 11 direcciones disponibles: de 10.0.0.50 a 10.0.0.60 inclusive.
</details>

### Pregunta 7

¿Cuáles son los cuatro pasos del proceso de obtención de una dirección DHCP?

a) Request, Reply, Confirm, Accept
b) Discover, Offer, Request, Acknowledge
c) Query, Response, Accept, Confirm
d) Solicit, Advertise, Request, Reply

<details><summary>Respuesta</summary>

**b) Discover, Offer, Request, Acknowledge**

El proceso DORA de DHCP consiste en: **D**iscover (cliente busca servidores), **O**ffer (servidor ofrece IP), **R**equest (cliente acepta la oferta), **A**cknowledge (servidor confirma). La opción d) corresponde al proceso de DHCPv6.
</details>

### Pregunta 8

¿Qué directiva establece el tiempo máximo que un cliente puede mantener una concesión DHCP?

a) lease-time
b) default-lease-time
c) max-lease-time
d) timeout-lease

<details><summary>Respuesta</summary>

**c) max-lease-time**

`max-lease-time` establece el tiempo máximo (en segundos) que un cliente puede mantener una concesión, incluso si solicita un tiempo mayor. `default-lease-time` es el tiempo asignado cuando el cliente no solicita uno específico.
</details>

### Pregunta 9

¿Qué puertos utiliza DHCPv6?

a) 67 (cliente) y 68 (servidor)
b) 547 (cliente) y 546 (servidor)
c) 546 (cliente) y 547 (servidor)
d) 68 (cliente) y 67 (servidor)

<details><summary>Respuesta</summary>

**c) 546 (cliente) y 547 (servidor)**

DHCPv6 utiliza puertos diferentes a DHCPv4: el puerto UDP 546 para el cliente y el puerto UDP 547 para el servidor.
</details>

### Pregunta 10

¿Qué directiva en dhcpd.conf se usa para definir la puerta de enlace que se entregará a los clientes?

a) option gateway
b) option default-gateway
c) option routers
d) option next-hop

<details><summary>Respuesta</summary>

**c) option routers**

La directiva `option routers` especifica la puerta de enlace predeterminada que el servidor DHCP comunicará a los clientes. Puede incluir múltiples direcciones separadas por comas.
</details>

### Pregunta 11

¿Qué declaración en dhcpd.conf permite agrupar varias subredes que comparten la misma interfaz física?

a) group
b) pool
c) shared-network
d) multi-subnet

<details><summary>Respuesta</summary>

**c) shared-network**

La declaración `shared-network` permite agrupar múltiples declaraciones `subnet` que coexisten en la misma interfaz física. Es necesaria cuando hay varias redes lógicas en un mismo segmento de red, permitiendo al servidor DHCP gestionar direcciones de ambas subredes.

</details>

### Pregunta 12

¿Qué directiva en dhcpd.conf se utiliza para indicar que el servidor es autoritativo para la red y debe enviar DHCPNAK a clientes con concesiones inválidas?

a) primary
b) authoritative
c) master
d) official

<details><summary>Respuesta</summary>

**b) authoritative**

La directiva `authoritative` indica que el servidor DHCP es la autoridad para esa red. Cuando está habilitada, el servidor envía mensajes DHCPNAK a clientes que solicitan una dirección IP que no pertenece al rango configurado, forzándolos a obtener una nueva dirección.

</details>

### Pregunta 13

¿En qué archivo se configura la interfaz de red donde escucha el servidor ISC DHCP en sistemas Debian/Ubuntu?

a) /etc/dhcp/dhcpd.conf
b) /etc/default/isc-dhcp-server
c) /etc/sysconfig/dhcpd
d) /etc/network/dhcp.conf

<details><summary>Respuesta</summary>

**b) /etc/default/isc-dhcp-server**

En sistemas Debian/Ubuntu, la interfaz de escucha se configura en `/etc/default/isc-dhcp-server` mediante la directiva `INTERFACESv4`. En sistemas RHEL/CentOS, la configuración equivalente se encuentra en `/etc/sysconfig/dhcpd`.

</details>

### Pregunta 14

¿Qué campo del archivo dhcpd.leases indica el estado actual de una concesión?

a) lease state
b) binding state
c) status
d) lease-status

<details><summary>Respuesta</summary>

**b) binding state**

El campo `binding state` en el archivo `/var/lib/dhcp/dhcpd.leases` indica el estado actual de la concesión. Los valores posibles incluyen `active` (en uso), `free` (disponible) y `expired` (expirada).

</details>

### Pregunta 15

¿Qué opción del comando `dhcrelay` se utiliza para especificar el modo IPv6?

a) -4
b) -6
c) -v6
d) --ipv6

<details><summary>Respuesta</summary>

**b) -6**

La opción `-6` de `dhcrelay` activa el modo DHCPv6. En modo IPv6, se utilizan las opciones `-l` (interfaz del lado del cliente) y `-u` (interfaz del lado del servidor) en lugar de `-i`. Por defecto, `dhcrelay` opera en modo IPv4.

</details>

### Pregunta 16

¿Qué directiva de dhcpd.conf se utiliza dentro de una declaración `host` para identificar al cliente por su dirección MAC?

a) mac-address
b) client-id
c) hardware ethernet
d) physical-address

<details><summary>Respuesta</summary>

**c) hardware ethernet**

La directiva `hardware ethernet` dentro de una declaración `host` identifica al cliente por su dirección MAC. Se usa junto con `fixed-address` para crear reservas DHCP, asegurando que un cliente específico reciba siempre la misma dirección IP.

</details>

### Pregunta 17

¿Cuál es el archivo de configuración del servidor DHCPv6 en ISC DHCP?

a) /etc/dhcp/dhcpd.conf
b) /etc/dhcp/dhcpd6.conf
c) /etc/dhcp/dhcp6.conf
d) /etc/dhcpv6/dhcpd.conf

<details><summary>Respuesta</summary>

**b) /etc/dhcp/dhcpd6.conf**

La configuración del servidor DHCPv6 se encuentra en `/etc/dhcp/dhcpd6.conf`. Este archivo utiliza directivas similares a DHCPv4 pero con sintaxis específica para IPv6, como `subnet6`, `range6` y opciones con prefijo `dhcp6.`.

</details>

### Pregunta 18

¿Qué declaración en dhcpd.conf permite aplicar opciones comunes a múltiples declaraciones `host`?

a) shared-network
b) pool
c) group
d) class

<details><summary>Respuesta</summary>

**c) group**

La declaración `group` permite agrupar múltiples declaraciones `host` (o `subnet`) y aplicarles opciones comunes. Esto evita repetir las mismas opciones en cada declaración individual, facilitando la administración.

</details>

### Pregunta 19

¿Qué directiva en DHCPv6 se utiliza para definir un rango de direcciones IPv6 asignables?

a) range
b) range6
c) address-range6
d) ipv6-range

<details><summary>Respuesta</summary>

**b) range6**

En DHCPv6, la directiva `range6` define el rango de direcciones IPv6 que el servidor puede asignar a los clientes. Se utiliza dentro de una declaración `subnet6`. La sintaxis es: `range6 2001:db8:1::100 2001:db8:1::200;`.

</details>

### Pregunta 20

¿Qué comando del lado del cliente permite liberar la dirección IP actual obtenida por DHCP?

a) dhclient -renew
b) dhclient -r
c) dhclient -release
d) dhclient -d

<details><summary>Respuesta</summary>

**b) dhclient -r**

El comando `dhclient -r` libera (release) la dirección IP actual obtenida por DHCP, enviando un mensaje DHCPRELEASE al servidor. Para solicitar una nueva dirección después de la liberación, se ejecuta `dhclient` seguido del nombre de la interfaz.

</details>

### Pregunta 21

¿Qué comando verifica la sintaxis del archivo de configuración del servidor ISC DHCP sin iniciar el servicio?

<input type="text" class="fill-blank" data-answer="dhcpd -t" data-alt="dhcpd -t -cf /etc/dhcp/dhcpd.conf" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dhcpd -t**

El comando `dhcpd -t` analiza el archivo de configuración en busca de errores de sintaxis sin iniciar el demonio. Se puede especificar un archivo alternativo con la opción `-cf`, por ejemplo: `dhcpd -t -cf /etc/dhcp/dhcpd.conf`.

</details>

### Pregunta 22

¿Qué comando se utiliza para retransmitir peticiones DHCP del cliente en la interfaz eth0 hacia el servidor DHCP en 10.0.0.1?

<input type="text" class="fill-blank" data-answer="dhcrelay -i eth0 10.0.0.1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dhcrelay -i eth0 10.0.0.1**

El comando `dhcrelay -i eth0 10.0.0.1` inicia el agente relay DHCP que escucha peticiones de clientes en la interfaz `eth0` y las reenvía al servidor DHCP ubicado en la dirección `10.0.0.1`.

</details>

### Pregunta 23

¿Qué comando solicita una nueva dirección IP vía DHCP para la interfaz eth0?

<input type="text" class="fill-blank" data-answer="dhclient eth0" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dhclient eth0**

El comando `dhclient eth0` inicia el proceso DORA para obtener una nueva dirección IP del servidor DHCP para la interfaz `eth0`. Si ya tiene una concesión activa, intentará renovarla primero.

</details>

### Pregunta 24

¿Qué comando se utiliza para verificar la configuración de dhcpd especificando un archivo de configuración alternativo ubicado en /tmp/test.conf?

<input type="text" class="fill-blank" data-answer="dhcpd -t -cf /tmp/test.conf" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dhcpd -t -cf /tmp/test.conf**

El comando `dhcpd -t -cf /tmp/test.conf` verifica la sintaxis del archivo de configuración especificado con `-cf` sin iniciar el demonio. La opción `-t` activa el modo de prueba (test).

</details>

### Pregunta 25

¿Qué comando libera la dirección IP actual del cliente DHCP y luego solicita una nueva?

<input type="text" class="fill-blank" data-answer="dhclient -r" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dhclient -r**

El comando `dhclient -r` envía un mensaje DHCPRELEASE al servidor para liberar la concesión actual. Posteriormente, se ejecuta `dhclient` para solicitar una nueva dirección IP mediante el proceso DORA completo.

</details>
