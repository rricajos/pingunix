---
title: "212.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "212.1"
---

# Flashcards: 212.1 - Configuracion De Router

> 24 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué archivo se debe modificar para habilitar el reenvío de paquetes IPv4 de forma permanente en Linux?

</div>
<div class="flashcard-back">

**R:** b) /etc/sysctl.conf. Se debe establecer `net.ipv4.ip_forward = 1` en `/etc/sysctl.conf` (o en un archivo dentro de `/etc/sysctl.d/`) para que el reenvío de paquetes persista tras un reinicio. Después se aplica con `sysctl -p`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué tabla de iptables se utiliza por defecto cuando no se especifica la opción `-t`?

</div>
<div class="flashcard-back">

**R:** d) filter. La tabla `filter` es la tabla por defecto de iptables. Contiene las cadenas INPUT, OUTPUT y FORWARD, y se usa para el filtrado básico de paquetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-003">
<div class="flashcard-front">

**P:** Un administrador necesita redirigir el tráfico entrante en el puerto 443 hacia un servidor interno 10.0.0.5 en el puerto 8443. ¿Qué regla de iptables es correcta?

</div>
<div class="flashcard-back">

**R:** c) `iptables -t nat -A PREROUTING -p tcp --dport 443 -j DNAT --to-destination 10.0.0.5:8443`. DNAT (Destination NAT) se configura en la cadena PREROUTING de la tabla nat, ya que la traducción de la dirección de destino debe ocurrir antes de la decisión de enrutamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre los objetivos MASQUERADE y SNAT en iptables?

</div>
<div class="flashcard-back">

**R:** c) MASQUERADE determina la IP de origen dinámicamente, SNAT usa una IP fija. MASQUERADE consulta la IP actual de la interfaz de salida para cada paquete, lo que lo hace adecuado para conexiones con IP dinámica. SNAT es más eficiente cuando la IP de salida es estática porque no necesita esta consulta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando de nftables lista todas las reglas activas del sistema?

</div>
<div class="flashcard-back">

**R:** b) `nft list ruleset`. El comando `nft list ruleset` muestra todas las tablas, cadenas y reglas configuradas actualmente en nftables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-006">
<div class="flashcard-front">

**P:** En firewalld, ¿qué ocurre si se ejecuta `firewall-cmd --add-service=http` sin la opción `--permanent`?

</div>
<div class="flashcard-back">

**R:** c) El cambio se aplica inmediatamente pero se pierde al reiniciar. Sin `--permanent`, los cambios se aplican en la configuración en ejecución (runtime) de forma inmediata, pero no se guardan en la configuración persistente. Al reiniciar firewalld o el sistema, estos cambios se pierden.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué cadena de iptables se usa para filtrar paquetes que atraviesan el router Linux hacia otra red?

</div>
<div class="flashcard-back">

**R:** c) FORWARD. La cadena FORWARD de la tabla filter se encarga de los paquetes que no son para el propio host ni generados por él, sino que están siendo reenviados entre interfaces de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando guarda las reglas actuales de iptables para restaurarlas en el futuro?

</div>
<div class="flashcard-back">

**R:** b) `iptables-save > /etc/iptables/rules.v4`. El comando `iptables-save` volcará todas las reglas actuales en formato que puede ser leído por `iptables-restore`. La opción `-S` de iptables lista las reglas en formato de comandos, pero no es el método estándar de persistencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué ventaja ofrece la familia `inet` en nftables?

</div>
<div class="flashcard-back">

**R:** c) Permite crear reglas que aplican tanto a IPv4 como a IPv6 simultáneamente. La familia `inet` en nftables unifica el manejo de IPv4 e IPv6 en una sola tabla, evitando la necesidad de mantener reglas duplicadas como ocurre con iptables (iptables + ip6tables).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador ejecuta `iptables -I INPUT 1 -s 10.0.0.50 -j ACCEPT`. ¿Qué efecto tiene este comando?

</div>
<div class="flashcard-back">

**R:** b) Inserta la regla en la primera posición de la cadena INPUT. La opción `-I` (insert) con el número 1 coloca la regla en la primera posición de la cadena, con lo cual será evaluada antes que cualquier otra regla existente. Esto es diferente de `-A` (append), que añade al final.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: Es fundamental saber que sin `ip_forward=1` el sistema Linux no reenviará paquet...

</div>
<div class="flashcard-back">

**R:** Es fundamental saber que sin `ip_forward=1` el sistema Linux no reenviará paquetes entre interfaces, aunque las reglas de iptables estén correctamente configuradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: MASQUERADE se usa cuando la IP pública es dinámica (conexiones PPPoE, DHCP). SNA...

</div>
<div class="flashcard-back">

**R:** MASQUERADE se usa cuando la IP pública es dinámica (conexiones PPPoE, DHCP). SNAT es más eficiente cuando la IP es estática.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: nftables usa la familia `inet` para reglas que aplican tanto a IPv4 como a IPv6 ...

</div>
<div class="flashcard-back">

**R:** nftables usa la familia `inet` para reglas que aplican tanto a IPv4 como a IPv6 simultáneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Los cambios con `--permanent` requieren `--reload` para aplicarse. Sin `--perman...

</div>
<div class="flashcard-back">

**R:** Los cambios con `--permanent` requieren `--reload` para aplicarse. Sin `--permanent`, los cambios se aplican inmediatamente pero se pierden al reiniciar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-015">
<div class="flashcard-front">

**P:** Que hace el comando `-A`?

</div>
<div class="flashcard-back">

**R:** Añadir regla al final de la cadena (append)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `-I`?

</div>
<div class="flashcard-back">

**R:** Insertar regla en posición específica (insert)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `-D`?

</div>
<div class="flashcard-back">

**R:** Eliminar regla (delete)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `-R`?

</div>
<div class="flashcard-back">

**R:** Reemplazar una regla

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `-L`?

</div>
<div class="flashcard-back">

**R:** Listar reglas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-020">
<div class="flashcard-front">

**P:** Que es/son Introducción al enrutamiento en Linux?

</div>
<div class="flashcard-back">

**R:** Linux puede funcionar como un router completo, reenviando paquetes entre interfaces de red. Para ello se requiere habilitar el reenvío de paquetes (IP forwarding) y configurar reglas de filtrado y trad

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-021">
<div class="flashcard-front">

**P:** Que es/son Habilitación del reenvío IP (IP Forwarding)?

</div>
<div class="flashcard-back">

**R:** El reenvío de paquetes está deshabilitado por defecto en Linux. Para activarlo:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-022">
<div class="flashcard-front">

**P:** Que es/son nftables: el sucesor de iptables?

</div>
<div class="flashcard-back">

**R:** **nftables** reemplaza a iptables, ip6tables, arptables y ebtables con una sintaxis unificada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-023">
<div class="flashcard-front">

**P:** Que es/son firewalld: gestión dinámica de firewall?

</div>
<div class="flashcard-back">

**R:** **firewalld** es un frontend para iptables/nftables que usa el concepto de **zonas**.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.1">
</div>

<div class="flashcard" data-id="212.1-fc-024">
<div class="flashcard-front">

**P:** Que es/son Archivo /etc/sysctl.conf?

</div>
<div class="flashcard-back">

**R:** Parámetros relevantes para enrutamiento y seguridad de red:

</div>
</div>

---

