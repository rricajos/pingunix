---
title: "305.3 - Ejercicios: FreeIPA Integración AD"
description: "Ejercicios de práctica para integración FreeIPA con Active Directory"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.3"
peso: 2
tags:
  - lpic-3
  - tema-305
  - freeipa
  - active-directory
  - ejercicios
---

# 305.3 Ejercicios - FreeIPA Integración AD

### Pregunta 1
¿Qué comando prepara un servidor FreeIPA existente para establecer relaciones de confianza con Active Directory?

a) `ipa trust-prepare`
b) `ipa-adtrust-install`
c) `ipa-server-install --trust-ad`
d) `samba-tool trust setup`

<details><summary>Respuesta</summary>

**b) `ipa-adtrust-install`**

`ipa-adtrust-install` configura los componentes necesarios en FreeIPA para soportar relaciones de confianza con Active Directory, incluyendo Samba y el servicio de trust. Se ejecuta una sola vez después de la instalación del servidor FreeIPA.
</details>

### Pregunta 2
¿Cuál es la diferencia principal entre un forest trust y un external trust?

a) Forest trust es más rápido; external trust es más seguro
b) Forest trust cubre todo el bosque AD; external trust cubre un solo dominio
c) Forest trust es unidireccional; external trust es bidireccional
d) Forest trust requiere SSL; external trust no

<details><summary>Respuesta</summary>

**b) Forest trust cubre todo el bosque AD; external trust cubre un solo dominio**

Un forest trust establece confianza con todo el bosque de Active Directory (incluyendo todos sus dominios y subdominios) y es transitivo. Un external trust es más limitado y solo cubre un dominio específico sin transitividad.
</details>

### Pregunta 3
¿Qué comando crea una relación de confianza entre FreeIPA y Active Directory?

a) `ipa ad-connect empresa.local`
b) `ipa trust-add empresa.local --type=ad --admin=Administrador --password`
c) `samba-tool trust create empresa.local`
d) `ipa-trust-install empresa.local`

<details><summary>Respuesta</summary>

**b) `ipa trust-add empresa.local --type=ad --admin=Administrador --password`**

`ipa trust-add` crea la relación de confianza especificando el dominio AD, el tipo de trust (`--type=ad`) y las credenciales del administrador de AD para establecer el trust.
</details>

### Pregunta 4
¿Qué enfoque se recomienda para integrar FreeIPA con AD: trust o winsync?

a) Winsync es siempre preferible
b) Trust es el enfoque recomendado; winsync está obsoleto
c) Ambos son equivalentes
d) Depende del número de usuarios

<details><summary>Respuesta</summary>

**b) Trust es el enfoque recomendado; winsync está obsoleto**

Las relaciones de confianza (trust) son el enfoque recomendado porque no duplican datos, son más escalables y más fáciles de mantener. Winsync sincroniza datos de usuario entre AD e IPA, lo que genera duplicación y problemas de mantenimiento.
</details>

### Pregunta 5
¿Cómo se mapean los SIDs de AD a UIDs POSIX con el tipo de rango `ipa-ad-trust`?

a) Manualmente por el administrador
b) Mediante atributos POSIX definidos en AD
c) Algorítmicamente a partir del SID
d) Mediante una tabla de traducción en LDAP

<details><summary>Respuesta</summary>

**c) Algorítmicamente a partir del SID**

El tipo de rango `ipa-ad-trust` genera UIDs y GIDs automáticamente aplicando un algoritmo determinista al SID de Windows. Esto no requiere que los usuarios AD tengan atributos POSIX configurados. `ipa-ad-trust-posix` usaría los atributos POSIX de AD.
</details>

### Pregunta 6
¿Cuál es el proceso correcto para que un grupo de AD tenga acceso a recursos Linux gestionados por FreeIPA?

a) Añadir el grupo AD directamente a las reglas HBAC
b) Crear grupo externo, añadir grupo AD, vincular a grupo POSIX de IPA
c) Sincronizar el grupo AD a IPA con winsync
d) Crear un usuario espejo en IPA para cada miembro del grupo AD

<details><summary>Respuesta</summary>

**b) Crear grupo externo, añadir grupo AD, vincular a grupo POSIX de IPA**

El proceso es: 1) Crear un grupo externo en IPA (`--external`), 2) Añadir el grupo AD como miembro externo, 3) Vincular el grupo externo a un grupo POSIX de IPA. Solo los grupos POSIX pueden usarse en reglas HBAC y sudo.
</details>

### Pregunta 7
¿Qué parámetro de `ipa-adtrust-install` genera SIDs para los usuarios y grupos IPA existentes?

a) `--generate-sids`
b) `--add-sids`
c) `--create-sids`
d) `--enable-sids`

<details><summary>Respuesta</summary>

**b) `--add-sids`**

`--add-sids` genera Security Identifiers (SIDs) para los usuarios y grupos de FreeIPA que fueron creados antes de configurar el trust. Los SIDs son necesarios para que las entidades IPA sean visibles en el contexto de Active Directory.
</details>

### Pregunta 8
¿Cómo se referencia un usuario de AD desde un sistema inscrito en FreeIPA con trust configurado?

a) `DOMINIO\usuario`
b) `usuario@dominio.ad`
c) `ad:usuario`
d) `usuario (AD)`

<details><summary>Respuesta</summary>

**b) `usuario@dominio.ad`**

Con trust configurado, los usuarios de Active Directory se referencian con el formato `usuario@dominio.ad` (ej: `juan@empresa.local`). SSSD descubre automáticamente los subdominios de confianza y resuelve los usuarios AD.
</details>

### Pregunta 9
¿Qué requisito DNS es necesario antes de establecer un trust entre FreeIPA y AD?

a) Ambos dominios deben usar el mismo servidor DNS
b) Ambos dominios deben poder resolver mutuamente sus registros DNS
c) Solo FreeIPA necesita resolver el dominio AD
d) DNS no es necesario; se usan direcciones IP

<details><summary>Respuesta</summary>

**b) Ambos dominios deben poder resolver mutuamente sus registros DNS**

La resolución DNS bidireccional es un requisito previo. FreeIPA debe resolver registros del dominio AD y viceversa. Se configuran zonas de reenvío DNS en FreeIPA para resolver el dominio AD.
</details>

### Pregunta 10
¿Qué diferencia fundamental hay entre winsync y trust en cuanto al almacenamiento de datos de usuario?

a) Winsync almacena datos en la nube; trust los almacena localmente
b) Con winsync los datos se copian a IPA; con trust permanecen en AD
c) Con trust los datos se copian a AD; con winsync permanecen en IPA
d) Ambos almacenan datos de la misma manera

<details><summary>Respuesta</summary>

**b) Con winsync los datos se copian a IPA; con trust permanecen en AD**

Winsync sincroniza (copia) datos de usuario de AD a FreeIPA, creando duplicación. Con trust, los datos permanecen en su sistema original: los usuarios AD se quedan en AD y los usuarios IPA se quedan en IPA. SSSD consulta el dominio correspondiente cuando necesita resolver una identidad.
</details>

### Pregunta 11

¿Qué parámetro de `ipa-adtrust-install` configura agentes de trust en las réplicas FreeIPA?

a) `--replicate-agents`
b) `--add-agents`
c) `--setup-agents`
d) `--trust-agents`

<details><summary>Respuesta</summary>

**b) `--add-agents`**

El parámetro `--add-agents` configura los agentes de trust en las réplicas FreeIPA, permitiendo que las réplicas también puedan atender solicitudes de autenticación de usuarios del dominio AD de confianza, mejorando la alta disponibilidad.
</details>

### Pregunta 12

¿Qué tipo de trust es transitivo y cubre todos los dominios de un bosque Active Directory?

a) External trust
b) Forest trust
c) Realm trust
d) Domain trust

<details><summary>Respuesta</summary>

**b) Forest trust**

Un forest trust es transitivo y establece confianza con todo el bosque de Active Directory, incluyendo todos sus dominios y subdominios. Un external trust, en cambio, solo cubre un dominio específico y no es transitivo.
</details>

### Pregunta 13

¿Qué comando de FreeIPA configura una zona de reenvío DNS para resolver el dominio de Active Directory?

a) `ipa dnszone-add empresa.local --type=forward`
b) `ipa dnsforwardzone-add empresa.local --forwarder=192.168.1.1 --forward-policy=only`
c) `ipa dns-forward empresa.local 192.168.1.1`
d) `ipa dnsrecord-add empresa.local --forwarder=192.168.1.1`

<details><summary>Respuesta</summary>

**b) `ipa dnsforwardzone-add empresa.local --forwarder=192.168.1.1 --forward-policy=only`**

`ipa dnsforwardzone-add` crea una zona de reenvío DNS en FreeIPA que redirige las consultas del dominio AD al servidor DNS de Active Directory. `--forward-policy=only` indica que solo se use el forwarder especificado para esa zona.
</details>

### Pregunta 14

¿Qué tipo de rango de IDs utiliza los atributos POSIX (`uidNumber`/`gidNumber`) definidos directamente en Active Directory?

a) `ipa-ad-trust`
b) `ipa-ad-trust-posix`
c) `ipa-ad-winsync`
d) `ipa-ad-posix-map`

<details><summary>Respuesta</summary>

**b) `ipa-ad-trust-posix`**

El tipo de rango `ipa-ad-trust-posix` usa los atributos POSIX (`uidNumber`, `gidNumber`) que ya están configurados en los objetos de usuario en Active Directory. Requiere que los administradores de AD hayan extendido el schema con Unix attributes. El tipo `ipa-ad-trust` genera UIDs algorítmicamente.
</details>

### Pregunta 15

¿Qué método usa SSSD para descubrir los dominios de Active Directory de confianza?

a) Lectura de archivos de configuración locales
b) Descubrimiento automático de subdominios mediante el proveedor IPA
c) Consulta manual del administrador
d) Sincronización con el registro de Windows

<details><summary>Respuesta</summary>

**b) Descubrimiento automático de subdominios mediante el proveedor IPA**

SSSD utiliza el `subdomains_provider = ipa` para descubrir automáticamente los dominios AD de confianza. No es necesario configurar explícitamente los subdominios en `sssd.conf`; SSSD los detecta consultando la información de trust almacenada en FreeIPA.
</details>

### Pregunta 16

¿Qué comando permite verificar la comunicación Kerberos cross-realm obteniendo un ticket de servicio para el trust?

a) `klist -trust EMPRESA.LOCAL`
b) `kvno krbtgt/EMPRESA.LOCAL@EMPRESA.IPA`
c) `kinit -trust EMPRESA.LOCAL`
d) `kerberos-test EMPRESA.LOCAL EMPRESA.IPA`

<details><summary>Respuesta</summary>

**b) `kvno krbtgt/EMPRESA.LOCAL@EMPRESA.IPA`**

`kvno` obtiene un ticket de servicio para el principal especificado, lo que permite verificar que la comunicación Kerberos cross-realm funciona correctamente. `krbtgt/EMPRESA.LOCAL@EMPRESA.IPA` es el principal de trust entre ambos realms.
</details>

### Pregunta 17

¿Por qué los grupos externos de FreeIPA no pueden usarse directamente en reglas HBAC o sudo?

a) Porque los grupos externos no existen en LDAP
b) Porque los grupos externos no tienen GID POSIX necesario para las reglas del sistema
c) Porque HBAC y sudo solo funcionan con usuarios locales
d) Porque los grupos externos se eliminan automáticamente tras 24 horas

<details><summary>Respuesta</summary>

**b) Porque los grupos externos no tienen GID POSIX necesario para las reglas del sistema**

Los grupos externos solo contienen SIDs de Active Directory y no tienen atributos POSIX. Las reglas HBAC y sudo requieren grupos POSIX con GID numérico. Por eso se sigue el patrón: grupo externo (SIDs AD) -> grupo POSIX IPA -> reglas HBAC/sudo.
</details>

### Pregunta 18

¿Qué alternativa existe a usar credenciales de administrador de AD al crear un trust con `ipa trust-add`?

a) Usar un certificado SSL del servidor AD
b) Usar un secreto compartido con `--trust-secret`
c) Usar la clave pública del KDC de AD
d) No se necesitan credenciales si ambos servidores están en la misma red

<details><summary>Respuesta</summary>

**b) Usar un secreto compartido con `--trust-secret`**

La opción `--trust-secret` permite establecer el trust mediante un secreto compartido previamente configurado en ambos lados (AD y FreeIPA), en lugar de proporcionar credenciales de administrador de Active Directory con `--admin`.
</details>

### Pregunta 19

¿Qué comando lista todas las relaciones de confianza configuradas en FreeIPA?

a) `ipa trust-list`
b) `ipa trust-find`
c) `ipa trust-show --all`
d) `ipa adtrust-list`

<details><summary>Respuesta</summary>

**b) `ipa trust-find`**

`ipa trust-find` lista todas las relaciones de confianza (trusts) configuradas en el servidor FreeIPA. Para ver los detalles completos de un trust específico, se usa `ipa trust-show empresa.local --all`.
</details>

### Pregunta 20

¿Qué paquete adicional se debe instalar en el servidor FreeIPA para soportar relaciones de confianza con AD?

a) `freeipa-ad-connector`
b) `freeipa-server-trust-ad`
c) `samba-winbind`
d) `freeipa-trust-module`

<details><summary>Respuesta</summary>

**b) `freeipa-server-trust-ad`**

El paquete `freeipa-server-trust-ad` instala los componentes necesarios (incluyendo Samba y las librerías de trust) para que FreeIPA pueda establecer relaciones de confianza con dominios Active Directory. Se instala con `dnf install freeipa-server-trust-ad`.
</details>

### Pregunta 21

Escribe el comando para crear una relación de confianza entre FreeIPA y el dominio AD `empresa.local` usando credenciales del administrador de AD.

<input type="text" class="fill-blank" data-answer="ipa trust-add empresa.local --type=ad --admin=Administrador --password" data-alt="ipa trust-add empresa.local --type=ad --admin Administrador --password" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa trust-add empresa.local --type=ad --admin=Administrador --password**

`ipa trust-add` crea la relación de confianza. `--type=ad` especifica que es un trust con Active Directory, `--admin` indica la cuenta de administrador del dominio AD y `--password` solicita la contraseña de forma interactiva.
</details>

### Pregunta 22

Escribe el comando para preparar un servidor FreeIPA existente para relaciones de confianza con AD, con nombre NetBIOS `IPAEMPRESA` y generando SIDs para entidades existentes.

<input type="text" class="fill-blank" data-answer="ipa-adtrust-install --netbios-name=IPAEMPRESA --add-sids" data-alt="ipa-adtrust-install --netbios-name IPAEMPRESA --add-sids" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa-adtrust-install --netbios-name=IPAEMPRESA --add-sids**

`ipa-adtrust-install` configura los componentes de trust en FreeIPA. `--netbios-name` define el nombre NetBIOS del dominio IPA y `--add-sids` genera Security Identifiers para los usuarios y grupos que fueron creados antes de habilitar el trust.
</details>

### Pregunta 23

Escribe el comando para verificar que un usuario de Active Directory se resuelve correctamente desde un sistema inscrito en FreeIPA.

<input type="text" class="fill-blank" data-answer="id usuario@empresa.local" data-alt="getent passwd usuario@empresa.local" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**id usuario@empresa.local**

El comando `id` muestra la información de identidad (UID, GID y grupos) de un usuario. Con trust configurado, `id usuario@empresa.local` consulta a SSSD que resuelve la identidad del usuario AD a través de FreeIPA. También se puede usar `getent passwd usuario@empresa.local`.
</details>

### Pregunta 24

Escribe el comando para crear un grupo externo en FreeIPA llamado `ad-admins` que pueda contener miembros de Active Directory.

<input type="text" class="fill-blank" data-answer="ipa group-add ad-admins --external" data-alt="ipa group-add ad-admins --external --desc='Grupo externo AD'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa group-add ad-admins --external**

La opción `--external` crea un grupo que puede contener SIDs de Active Directory como miembros. Luego se añade el grupo AD con `ipa group-add-member ad-admins --external "DOMINIO\Grupo"` y se vincula a un grupo POSIX para usarlo en reglas HBAC/sudo.
</details>

### Pregunta 25

Escribe el comando para ver los rangos de IDs configurados en FreeIPA para el mapeo de SIDs de AD.

<input type="text" class="fill-blank" data-answer="ipa idrange-find" data-alt="ipa idrange-find" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ipa idrange-find**

`ipa idrange-find` muestra todos los rangos de IDs configurados, incluyendo los rangos locales de FreeIPA y los rangos de trust con AD. Estos rangos definen cómo se mapean los SIDs de Active Directory a UIDs/GIDs POSIX en el sistema Linux.
</details>
