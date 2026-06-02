---
title: "305.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.1"
---

# Flashcards: 305.1 - Freeipa Instalacion

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cuáles son los cuatro componentes principales integrados en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) 389 Directory Server, MIT Kerberos, Dogtag CA, BIND. FreeIPA integra 389 DS como servidor LDAP, MIT Kerberos para autenticación, Dogtag CA como autoridad de certificación y BIND como servidor DNS integrado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando instala un servidor FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa-server-install`. `ipa-server-install` es el comando que realiza la instalación y configuración completa de un servidor FreeIPA, incluyendo 389 DS, MIT Kerberos, Dogtag CA y opcionalmente BIND.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-003">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `ipa-server-install` activa la integración DNS con BIND?

</div>
<div class="flashcard-back">

**R:** c) `--setup-dns`. `--setup-dns` configura BIND como servidor DNS integrado con FreeIPA. Esto permite la gestión centralizada de DNS y la creación automática de registros SRV necesarios para el descubrimiento de servicios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué hace `ipa-client-install --mkhomedir`?

</div>
<div class="flashcard-back">

**R:** b) Configura la creación automática de directorios home para usuarios del dominio. `--mkhomedir` configura el módulo PAM `pam_mkhomedir` (u `oddjob-mkhomedir`) para que se cree automáticamente el directorio home del usuario del dominio la primera vez que inicia sesión en ese equipo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cómo se instala una réplica FreeIPA a partir de la versión 4.x?

</div>
<div class="flashcard-back">

**R:** c) Se inscribe como cliente y luego se promueve con `ipa-replica-install`. Desde FreeIPA 4.x, el proceso de réplica se simplificó: primero se instala el sistema como cliente FreeIPA con `ipa-client-install`, y luego se promueve a réplica con `ipa-replica-install`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué servicio se encarga de la renovación automática de certificados en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) Certmonger. Certmonger es el servicio que monitoriza los certificados y gestiona su renovación automática antes de que expiren. Dogtag CA es la autoridad de certificación que emite los certificados, pero Certmonger es quien gestiona el ciclo de vida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando muestra el estado de todos los servicios de FreeIPA?

</div>
<div class="flashcard-back">

**R:** c) `ipactl status`. `ipactl status` muestra el estado de todos los servicios que componen FreeIPA (389 DS, KDC, httpd, etc.). `ipactl` también permite iniciar, detener y reiniciar todos los servicios con `start`, `stop` y `restart`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-008">
<div class="flashcard-front">

**P:** ¿Qué protocolo usa FreeIPA como almacén principal de identidades?

</div>
<div class="flashcard-back">

**R:** b) LDAP (389 Directory Server). FreeIPA utiliza 389 Directory Server como su almacén LDAP principal. Toda la información de usuarios, grupos, políticas y configuración se almacena en el directorio LDAP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-009">
<div class="flashcard-front">

**P:** ¿Cuál es la contraseña que se configura con `--ds-password` durante la instalación de FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) La contraseña del Directory Manager (administrador LDAP raíz). `--ds-password` establece la contraseña del Directory Manager (cn=Directory Manager), que es la cuenta de superadministrador del servidor LDAP 389 DS. `--admin-password` es la contraseña del usuario admin de FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-010">
<div class="flashcard-front">

**P:** Después de instalar FreeIPA, ¿cómo se accede a la interfaz web de administración?

</div>
<div class="flashcard-back">

**R:** b) `https://servidor.dominio/ipa/ui/`. La interfaz web de FreeIPA está disponible en `https://FQDN/ipa/ui/`. Se accede mediante HTTPS y se puede autenticar con ticket Kerberos (si el navegador está configurado para negociación SPNEGO) o con usuario y contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `ipa-server-install` define el realm Kerberos?

</div>
<div class="flashcard-back">

**R:** b) `--realm`. El parámetro `--realm` define el realm Kerberos durante la instalación del servidor FreeIPA. Por convención, el realm Kerberos se escribe siempre en mayúsculas (por ejemplo, `--realm=EMPRESA.LOCAL`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué puerto se utiliza para el servicio Kerberos de cambio de contraseña (kpasswd)?

</div>
<div class="flashcard-back">

**R:** c) 464. El puerto 464 (TCP/UDP) es utilizado por el servicio `kpasswd` de Kerberos, que permite a los usuarios cambiar sus contraseñas. El puerto 88 es para el servicio Kerberos principal (KDC), 389 para LDAP y 636 para LDAPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-013">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `ipa-client-install` permite la actualización dinámica de registros DNS?

</div>
<div class="flashcard-back">

**R:** b) `--enable-dns-updates`. El parámetro `--enable-dns-updates` configura el cliente FreeIPA para que actualice automáticamente sus registros DNS en el servidor cuando su dirección IP cambie, manteniendo la resolución DNS sincronizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué componente de FreeIPA proporciona la infraestructura de clave pública (PKI)?

</div>
<div class="flashcard-back">

**R:** c) Dogtag CA. Dogtag Certificate Authority es el componente de FreeIPA que proporciona la infraestructura PKI completa, incluyendo la emisión, renovación y revocación de certificados X.509. Es un proyecto de Red Hat Certificate System.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-015">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `ipa-replica-install` instala una réplica de la autoridad de certificación?

</div>
<div class="flashcard-back">

**R:** b) `--setup-ca`. El parámetro `--setup-ca` instala una réplica de Dogtag CA en el servidor réplica. Esto permite que la réplica emita certificados de forma independiente, proporcionando alta disponibilidad para la infraestructura PKI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué archivos de configuración se configuran automáticamente en el cliente al ejecutar `ipa-client-install`?

</div>
<div class="flashcard-back">

**R:** b) `/etc/krb5.conf`, `/etc/sssd/sssd.conf`, `/etc/nsswitch.conf` y módulos PAM. `ipa-client-install` configura automáticamente Kerberos (`/etc/krb5.conf`), SSSD (`/etc/sssd/sssd.conf`), NSS (`/etc/nsswitch.conf`), los módulos PAM y los certificados de la CA, proporcionando una integración completa del cliente con el dominio FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando se usa para desinstalar un servidor FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa-server-install --uninstall`. `ipa-server-install --uninstall` deshace la configuración del servidor FreeIPA, desactivando todos los servicios configurados. Simplemente desinstalar el paquete con `dnf remove` no limpia la configuración correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué servicio de firewall se abre para permitir conexiones LDAP seguras (LDAPS) al servidor FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `freeipa-ldaps`. El servicio `freeipa-ldaps` se añade al firewall con `firewall-cmd --add-service=freeipa-ldaps --permanent` para permitir conexiones LDAPS (puerto 636/TCP) al servidor FreeIPA. El servicio `freeipa-ldap` permite LDAP sin cifrar (puerto 389).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando verifica la salud general de una instalación FreeIPA?

</div>
<div class="flashcard-back">

**R:** c) `ipa-healthcheck`. `ipa-healthcheck` ejecuta una serie de comprobaciones automatizadas sobre todos los componentes de FreeIPA (certificados, replicación, DNS, Kerberos, etc.) y reporta cualquier problema encontrado. Es la herramienta oficial de diagnóstico integral.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué comando permite añadir un registro DNS de tipo A en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa dnsrecord-add empresa.local servidor --a-rec=192.168.1.20`. `ipa dnsrecord-add` añade un registro DNS a una zona gestionada por FreeIPA. El primer argumento es la zona DNS, el segundo es el nombre del host y `--a-rec` especifica la dirección IPv4 del registro A.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para instalar un servidor FreeIPA de forma no interactiva con realm `EMPRESA.LOCAL`, dominio `empresa.local`, DNS integrado y forwarder `8.8.8.8`. <input type="text" class="fill-blank" data-answer="ipa-server-install --realm=EMPRESA.LOCAL --domain=empresa.local --setup-dns --forwarder=8.8.8.8 --unattended" data-alt="ipa-server-install --realm EMPRESA.LOCAL --domain empresa.local --setup-dns --forwarder 8.8.8.8 --unattended" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa-server-install --realm=EMPRESA.LOCAL --domain=empresa.local --setup-dns --forwarder=8.8.8.8 --unattended. Este comando instala un servidor FreeIPA sin intervención interactiva. Se requieren adicionalmente `--ds-password` y `--admin-password` para una instalación completa. `--setup-dns` integra BIND y `--forwarder` configura el reenvío DNS externo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para verificar el estado de todos los servicios de FreeIPA. <input type="text" class="fill-blank" data-answer="ipactl status" data-alt="ipactl status" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipactl status. `ipactl status` muestra el estado de todos los servicios que componen FreeIPA (389 DS, KDC, httpd, Dogtag CA, etc.). También se puede usar `ipactl start`, `ipactl stop` y `ipactl restart` para gestionar todos los servicios simultáneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para listar los certificados gestionados por Certmonger. <input type="text" class="fill-blank" data-answer="getcert list" data-alt="getcert list" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** getcert list. `getcert list` muestra todos los certificados que Certmonger está monitorizando, incluyendo su estado, fechas de expiración y la CA que los emitió. Certmonger se encarga de renovarlos automáticamente antes de que expiren.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para inscribir un cliente FreeIPA de forma no interactiva con el servidor `ipa.empresa.local`, usando el usuario `admin` con contraseña `AdminPass` y creación automática de directorios home. <input type="text" class="fill-blank" data-answer="ipa-client-install --server=ipa.empresa.local --domain=empresa.local --principal=admin --password=AdminPass --mkhomedir --unattended" data-alt="ipa-client-install --server ipa.empresa.local --domain empresa.local --principal admin --password AdminPass --mkhomedir --unattended" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa-client-install --server=ipa.empresa.local --domain=empresa.local --principal=admin --password=AdminPass --mkhomedir --unattended. Este comando inscribe un cliente en el dominio FreeIPA sin intervención manual. `--mkhomedir` configura la creación automática de directorios home y `--unattended` evita preguntas interactivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para listar todas las zonas DNS gestionadas por FreeIPA. <input type="text" class="fill-blank" data-answer="ipa dnszone-find" data-alt="ipa dnszone-find" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa dnszone-find. `ipa dnszone-find` muestra todas las zonas DNS gestionadas por el servidor DNS integrado de FreeIPA (BIND). Incluye tanto las zonas directas como las inversas que se hayan configurado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: FreeIPA combina 389 DS (LDAP), MIT Kerberos (autenticación), Dogtag CA (certific...

</div>
<div class="flashcard-back">

**R:** FreeIPA combina 389 DS (LDAP), MIT Kerberos (autenticación), Dogtag CA (certificados) y BIND (DNS). Conocer estos cuatro componentes principales es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-server-install` es el comando principal para instalar un servidor FreeIPA. ...

</div>
<div class="flashcard-back">

**R:** `ipa-server-install` es el comando principal para instalar un servidor FreeIPA. `--realm` siempre en mayúsculas. `--setup-dns` integra BIND como servidor DNS del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-client-install` configura automáticamente Kerberos, SSSD, PAM y NSS en el c...

</div>
<div class="flashcard-back">

**R:** `ipa-client-install` configura automáticamente Kerberos, SSSD, PAM y NSS en el cliente. `--mkhomedir` activa la creación automática de directorios home.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Desde FreeIPA 4.x, la instalación de réplicas es más sencilla: primero se inscri...

</div>
<div class="flashcard-back">

**R:** Desde FreeIPA 4.x, la instalación de réplicas es más sencilla: primero se inscribe como cliente y luego se promueve con `ipa-replica-install`. Ya no es necesario preparar un archivo de réplica manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Dogtag CA proporciona la infraestructura PKI. Certmonger se encarga de la renova...

</div>
<div class="flashcard-back">

**R:** Dogtag CA proporciona la infraestructura PKI. Certmonger se encarga de la renovación automática de certificados. `getcert list` muestra los certificados gestionados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--ds-password`?

</div>
<div class="flashcard-back">

**R:** Contraseña del Directory Manager (LDAP admin)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--admin-password`?

</div>
<div class="flashcard-back">

**R:** Contraseña del usuario admin de IPA

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `--forwarder`?

</div>
<div class="flashcard-back">

**R:** DNS forwarder para resolución externa

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `--no-ntp`?

</div>
<div class="flashcard-back">

**R:** No configurar NTP (si chrony ya está configurado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `--mkhomedir`?

</div>
<div class="flashcard-back">

**R:** Crear directorio home automáticamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Componentes de FreeIPA?

</div>
<div class="flashcard-back">

**R:** FreeIPA integra varios componentes de código abierto:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.1">
</div>

<div class="flashcard" data-id="305.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Interfaz web?

</div>
<div class="flashcard-back">

**R:** La interfaz web está disponible en `https://ipa.empresa.local/ipa/ui/`:

</div>
</div>

---

