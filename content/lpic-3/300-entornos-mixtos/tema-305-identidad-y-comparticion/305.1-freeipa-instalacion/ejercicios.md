---
title: "305.1 - Ejercicios: FreeIPA Instalación"
description: "Ejercicios de práctica para instalación de FreeIPA"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.1"
peso: 2
tags:
  - lpic-3
  - tema-305
  - freeipa
  - ejercicios
---

# 305.1 Ejercicios - FreeIPA Instalación

### Pregunta 1
¿Cuáles son los cuatro componentes principales integrados en FreeIPA?

a) OpenLDAP, Heimdal Kerberos, OpenSSL CA, PowerDNS
b) 389 Directory Server, MIT Kerberos, Dogtag CA, BIND
c) Active Directory, Windows Kerberos, Microsoft CA, Microsoft DNS
d) OpenDJ, MIT Kerberos, Let's Encrypt, Unbound

<details><summary>Respuesta</summary>

**b) 389 Directory Server, MIT Kerberos, Dogtag CA, BIND**

FreeIPA integra 389 DS como servidor LDAP, MIT Kerberos para autenticación, Dogtag CA como autoridad de certificación y BIND como servidor DNS integrado.
</details>

### Pregunta 2
¿Qué comando instala un servidor FreeIPA?

a) `freeipa-install --server`
b) `ipa-server-install`
c) `ipa install server`
d) `yum install freeipa && freeipa-setup`

<details><summary>Respuesta</summary>

**b) `ipa-server-install`**

`ipa-server-install` es el comando que realiza la instalación y configuración completa de un servidor FreeIPA, incluyendo 389 DS, MIT Kerberos, Dogtag CA y opcionalmente BIND.
</details>

### Pregunta 3
¿Qué parámetro de `ipa-server-install` activa la integración DNS con BIND?

a) `--dns`
b) `--enable-dns`
c) `--setup-dns`
d) `--bind-dns`

<details><summary>Respuesta</summary>

**c) `--setup-dns`**

`--setup-dns` configura BIND como servidor DNS integrado con FreeIPA. Esto permite la gestión centralizada de DNS y la creación automática de registros SRV necesarios para el descubrimiento de servicios.
</details>

### Pregunta 4
¿Qué hace `ipa-client-install --mkhomedir`?

a) Crea el directorio home del administrador en el servidor
b) Configura la creación automática de directorios home para usuarios del dominio
c) Crea un directorio para almacenar las claves del cliente
d) Monta el directorio home desde el servidor NFS

<details><summary>Respuesta</summary>

**b) Configura la creación automática de directorios home para usuarios del dominio**

`--mkhomedir` configura el módulo PAM `pam_mkhomedir` (u `oddjob-mkhomedir`) para que se cree automáticamente el directorio home del usuario del dominio la primera vez que inicia sesión en ese equipo.
</details>

### Pregunta 5
¿Cómo se instala una réplica FreeIPA a partir de la versión 4.x?

a) Se copia la base de datos del servidor principal
b) Se prepara un archivo de réplica con `ipa-replica-prepare` y se copia al nuevo servidor
c) Se inscribe como cliente y luego se promueve con `ipa-replica-install`
d) Se ejecuta `ipa-server-install --replica` directamente

<details><summary>Respuesta</summary>

**c) Se inscribe como cliente y luego se promueve con `ipa-replica-install`**

Desde FreeIPA 4.x, el proceso de réplica se simplificó: primero se instala el sistema como cliente FreeIPA con `ipa-client-install`, y luego se promueve a réplica con `ipa-replica-install`.
</details>

### Pregunta 6
¿Qué servicio se encarga de la renovación automática de certificados en FreeIPA?

a) Dogtag
b) Certmonger
c) Let's Encrypt
d) ACME

<details><summary>Respuesta</summary>

**b) Certmonger**

Certmonger es el servicio que monitoriza los certificados y gestiona su renovación automática antes de que expiren. Dogtag CA es la autoridad de certificación que emite los certificados, pero Certmonger es quien gestiona el ciclo de vida.
</details>

### Pregunta 7
¿Qué comando muestra el estado de todos los servicios de FreeIPA?

a) `systemctl status freeipa`
b) `ipa status`
c) `ipactl status`
d) `ipa-server-status`

<details><summary>Respuesta</summary>

**c) `ipactl status`**

`ipactl status` muestra el estado de todos los servicios que componen FreeIPA (389 DS, KDC, httpd, etc.). `ipactl` también permite iniciar, detener y reiniciar todos los servicios con `start`, `stop` y `restart`.
</details>

### Pregunta 8
¿Qué protocolo usa FreeIPA como almacén principal de identidades?

a) SQL
b) LDAP (389 Directory Server)
c) Active Directory
d) Archivos planos

<details><summary>Respuesta</summary>

**b) LDAP (389 Directory Server)**

FreeIPA utiliza 389 Directory Server como su almacén LDAP principal. Toda la información de usuarios, grupos, políticas y configuración se almacena en el directorio LDAP.
</details>

### Pregunta 9
¿Cuál es la contraseña que se configura con `--ds-password` durante la instalación de FreeIPA?

a) La contraseña del usuario admin de FreeIPA
b) La contraseña del Directory Manager (administrador LDAP raíz)
c) La contraseña del realm Kerberos
d) La contraseña de root del sistema

<details><summary>Respuesta</summary>

**b) La contraseña del Directory Manager (administrador LDAP raíz)**

`--ds-password` establece la contraseña del Directory Manager (cn=Directory Manager), que es la cuenta de superadministrador del servidor LDAP 389 DS. `--admin-password` es la contraseña del usuario admin de FreeIPA.
</details>

### Pregunta 10
Después de instalar FreeIPA, ¿cómo se accede a la interfaz web de administración?

a) `http://servidor:8080/admin`
b) `https://servidor.dominio/ipa/ui/`
c) `https://servidor:9090/freeipa`
d) `http://servidor/webui`

<details><summary>Respuesta</summary>

**b) `https://servidor.dominio/ipa/ui/`**

La interfaz web de FreeIPA está disponible en `https://FQDN/ipa/ui/`. Se accede mediante HTTPS y se puede autenticar con ticket Kerberos (si el navegador está configurado para negociación SPNEGO) o con usuario y contraseña.
</details>

### Pregunta 11

¿Qué parámetro de `ipa-server-install` define el realm Kerberos?

a) `--kerberos-realm`
b) `--realm`
c) `--krb5-realm`
d) `--domain-realm`

<details><summary>Respuesta</summary>

**b) `--realm`**

El parámetro `--realm` define el realm Kerberos durante la instalación del servidor FreeIPA. Por convención, el realm Kerberos se escribe siempre en mayúsculas (por ejemplo, `--realm=EMPRESA.LOCAL`).
</details>

### Pregunta 12

¿Qué puerto se utiliza para el servicio Kerberos de cambio de contraseña (kpasswd)?

a) 88
b) 389
c) 464
d) 636

<details><summary>Respuesta</summary>

**c) 464**

El puerto 464 (TCP/UDP) es utilizado por el servicio `kpasswd` de Kerberos, que permite a los usuarios cambiar sus contraseñas. El puerto 88 es para el servicio Kerberos principal (KDC), 389 para LDAP y 636 para LDAPS.
</details>

### Pregunta 13

¿Qué parámetro de `ipa-client-install` permite la actualización dinámica de registros DNS?

a) `--dns-update`
b) `--enable-dns-updates`
c) `--dynamic-dns`
d) `--update-dns`

<details><summary>Respuesta</summary>

**b) `--enable-dns-updates`**

El parámetro `--enable-dns-updates` configura el cliente FreeIPA para que actualice automáticamente sus registros DNS en el servidor cuando su dirección IP cambie, manteniendo la resolución DNS sincronizada.
</details>

### Pregunta 14

¿Qué componente de FreeIPA proporciona la infraestructura de clave pública (PKI)?

a) 389 Directory Server
b) MIT Kerberos
c) Dogtag CA
d) BIND

<details><summary>Respuesta</summary>

**c) Dogtag CA**

Dogtag Certificate Authority es el componente de FreeIPA que proporciona la infraestructura PKI completa, incluyendo la emisión, renovación y revocación de certificados X.509. Es un proyecto de Red Hat Certificate System.
</details>

### Pregunta 15

¿Qué parámetro de `ipa-replica-install` instala una réplica de la autoridad de certificación?

a) `--ca-replica`
b) `--setup-ca`
c) `--install-ca`
d) `--replicate-ca`

<details><summary>Respuesta</summary>

**b) `--setup-ca`**

El parámetro `--setup-ca` instala una réplica de Dogtag CA en el servidor réplica. Esto permite que la réplica emita certificados de forma independiente, proporcionando alta disponibilidad para la infraestructura PKI.
</details>

### Pregunta 16

¿Qué archivos de configuración se configuran automáticamente en el cliente al ejecutar `ipa-client-install`?

a) Solo `/etc/krb5.conf`
b) `/etc/krb5.conf`, `/etc/sssd/sssd.conf`, `/etc/nsswitch.conf` y módulos PAM
c) Solo `/etc/sssd/sssd.conf` y `/etc/nsswitch.conf`
d) `/etc/ldap.conf` y `/etc/krb5.conf`

<details><summary>Respuesta</summary>

**b) `/etc/krb5.conf`, `/etc/sssd/sssd.conf`, `/etc/nsswitch.conf` y módulos PAM**

`ipa-client-install` configura automáticamente Kerberos (`/etc/krb5.conf`), SSSD (`/etc/sssd/sssd.conf`), NSS (`/etc/nsswitch.conf`), los módulos PAM y los certificados de la CA, proporcionando una integración completa del cliente con el dominio FreeIPA.
</details>

### Pregunta 17

¿Qué comando se usa para desinstalar un servidor FreeIPA?

a) `ipa-server-remove`
b) `ipa-server-install --uninstall`
c) `ipactl uninstall`
d) `dnf remove freeipa-server`

<details><summary>Respuesta</summary>

**b) `ipa-server-install --uninstall`**

`ipa-server-install --uninstall` deshace la configuración del servidor FreeIPA, desactivando todos los servicios configurados. Simplemente desinstalar el paquete con `dnf remove` no limpia la configuración correctamente.
</details>

### Pregunta 18

¿Qué servicio de firewall se abre para permitir conexiones LDAP seguras (LDAPS) al servidor FreeIPA?

a) `freeipa-ldap`
b) `freeipa-ldaps`
c) `ldaps`
d) `freeipa-ssl`

<details><summary>Respuesta</summary>

**b) `freeipa-ldaps`**

El servicio `freeipa-ldaps` se añade al firewall con `firewall-cmd --add-service=freeipa-ldaps --permanent` para permitir conexiones LDAPS (puerto 636/TCP) al servidor FreeIPA. El servicio `freeipa-ldap` permite LDAP sin cifrar (puerto 389).
</details>

### Pregunta 19

¿Qué comando verifica la salud general de una instalación FreeIPA?

a) `ipa-check`
b) `ipactl check`
c) `ipa-healthcheck`
d) `ipa server-status`

<details><summary>Respuesta</summary>

**c) `ipa-healthcheck`**

`ipa-healthcheck` ejecuta una serie de comprobaciones automatizadas sobre todos los componentes de FreeIPA (certificados, replicación, DNS, Kerberos, etc.) y reporta cualquier problema encontrado. Es la herramienta oficial de diagnóstico integral.
</details>

### Pregunta 20

¿Qué comando permite añadir un registro DNS de tipo A en FreeIPA?

a) `ipa dns-add empresa.local servidor --type=A --ip=192.168.1.20`
b) `ipa dnsrecord-add empresa.local servidor --a-rec=192.168.1.20`
c) `ipa dns-record-create empresa.local A servidor 192.168.1.20`
d) `ipa dnszone-add-record empresa.local servidor A 192.168.1.20`

<details><summary>Respuesta</summary>

**b) `ipa dnsrecord-add empresa.local servidor --a-rec=192.168.1.20`**

`ipa dnsrecord-add` añade un registro DNS a una zona gestionada por FreeIPA. El primer argumento es la zona DNS, el segundo es el nombre del host y `--a-rec` especifica la dirección IPv4 del registro A.
</details>

### Pregunta 21

Escribe el comando para instalar un servidor FreeIPA de forma no interactiva con realm `EMPRESA.LOCAL`, dominio `empresa.local`, DNS integrado y forwarder `8.8.8.8`.

<input type="text" class="fill-blank" data-answer="ipa-server-install --realm=EMPRESA.LOCAL --domain=empresa.local --setup-dns --forwarder=8.8.8.8 --unattended" data-alt="ipa-server-install --realm EMPRESA.LOCAL --domain empresa.local --setup-dns --forwarder 8.8.8.8 --unattended" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa-server-install --realm=EMPRESA.LOCAL --domain=empresa.local --setup-dns --forwarder=8.8.8.8 --unattended**

Este comando instala un servidor FreeIPA sin intervención interactiva. Se requieren adicionalmente `--ds-password` y `--admin-password` para una instalación completa. `--setup-dns` integra BIND y `--forwarder` configura el reenvío DNS externo.
</details>

### Pregunta 22

Escribe el comando para verificar el estado de todos los servicios de FreeIPA.

<input type="text" class="fill-blank" data-answer="ipactl status" data-alt="ipactl status" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipactl status**

`ipactl status` muestra el estado de todos los servicios que componen FreeIPA (389 DS, KDC, httpd, Dogtag CA, etc.). También se puede usar `ipactl start`, `ipactl stop` y `ipactl restart` para gestionar todos los servicios simultáneamente.
</details>

### Pregunta 23

Escribe el comando para listar los certificados gestionados por Certmonger.

<input type="text" class="fill-blank" data-answer="getcert list" data-alt="getcert list" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**getcert list**

`getcert list` muestra todos los certificados que Certmonger está monitorizando, incluyendo su estado, fechas de expiración y la CA que los emitió. Certmonger se encarga de renovarlos automáticamente antes de que expiren.
</details>

### Pregunta 24

Escribe el comando para inscribir un cliente FreeIPA de forma no interactiva con el servidor `ipa.empresa.local`, usando el usuario `admin` con contraseña `AdminPass` y creación automática de directorios home.

<input type="text" class="fill-blank" data-answer="ipa-client-install --server=ipa.empresa.local --domain=empresa.local --principal=admin --password=AdminPass --mkhomedir --unattended" data-alt="ipa-client-install --server ipa.empresa.local --domain empresa.local --principal admin --password AdminPass --mkhomedir --unattended" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa-client-install --server=ipa.empresa.local --domain=empresa.local --principal=admin --password=AdminPass --mkhomedir --unattended**

Este comando inscribe un cliente en el dominio FreeIPA sin intervención manual. `--mkhomedir` configura la creación automática de directorios home y `--unattended` evita preguntas interactivas.
</details>

### Pregunta 25

Escribe el comando para listar todas las zonas DNS gestionadas por FreeIPA.

<input type="text" class="fill-blank" data-answer="ipa dnszone-find" data-alt="ipa dnszone-find" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa dnszone-find**

`ipa dnszone-find` muestra todas las zonas DNS gestionadas por el servidor DNS integrado de FreeIPA (BIND). Incluye tanto las zonas directas como las inversas que se hayan configurado.
</details>
