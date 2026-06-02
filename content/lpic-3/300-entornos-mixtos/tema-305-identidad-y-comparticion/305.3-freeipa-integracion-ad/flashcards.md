---
title: "305.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "305.3"
---

# Flashcards: 305.3 - Freeipa Integracion Ad

> 42 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando prepara un servidor FreeIPA existente para establecer relaciones de confianza con Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `ipa-adtrust-install`. `ipa-adtrust-install` configura los componentes necesarios en FreeIPA para soportar relaciones de confianza con Active Directory, incluyendo Samba y el servicio de trust. Se ejecuta una sola vez después de la instalación del servidor FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia principal entre un forest trust y un external trust?

</div>
<div class="flashcard-back">

**R:** b) Forest trust cubre todo el bosque AD; external trust cubre un solo dominio. Un forest trust establece confianza con todo el bosque de Active Directory (incluyendo todos sus dominios y subdominios) y es transitivo. Un external trust es más limitado y solo cubre un dominio específico sin transitividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando crea una relación de confianza entre FreeIPA y Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `ipa trust-add empresa.local --type=ad --admin=Administrador --password`. `ipa trust-add` crea la relación de confianza especificando el dominio AD, el tipo de trust (`--type=ad`) y las credenciales del administrador de AD para establecer el trust.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué enfoque se recomienda para integrar FreeIPA con AD: trust o winsync?

</div>
<div class="flashcard-back">

**R:** b) Trust es el enfoque recomendado; winsync está obsoleto. Las relaciones de confianza (trust) son el enfoque recomendado porque no duplican datos, son más escalables y más fáciles de mantener. Winsync sincroniza datos de usuario entre AD e IPA, lo que genera duplicación y problemas de mantenimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-005">
<div class="flashcard-front">

**P:** ¿Cómo se mapean los SIDs de AD a UIDs POSIX con el tipo de rango `ipa-ad-trust`?

</div>
<div class="flashcard-back">

**R:** c) Algorítmicamente a partir del SID. El tipo de rango `ipa-ad-trust` genera UIDs y GIDs automáticamente aplicando un algoritmo determinista al SID de Windows. Esto no requiere que los usuarios AD tengan atributos POSIX configurados. `ipa-ad-trust-posix` usaría los atributos POSIX de AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es el proceso correcto para que un grupo de AD tenga acceso a recursos Linux gestionados por FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) Crear grupo externo, añadir grupo AD, vincular a grupo POSIX de IPA. El proceso es: 1) Crear un grupo externo en IPA (`--external`), 2) Añadir el grupo AD como miembro externo, 3) Vincular el grupo externo a un grupo POSIX de IPA. Solo los grupos POSIX pueden usarse en reglas HBAC y sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `ipa-adtrust-install` genera SIDs para los usuarios y grupos IPA existentes?

</div>
<div class="flashcard-back">

**R:** b) `--add-sids`. `--add-sids` genera Security Identifiers (SIDs) para los usuarios y grupos de FreeIPA que fueron creados antes de configurar el trust. Los SIDs son necesarios para que las entidades IPA sean visibles en el contexto de Active Directory.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-008">
<div class="flashcard-front">

**P:** ¿Cómo se referencia un usuario de AD desde un sistema inscrito en FreeIPA con trust configurado?

</div>
<div class="flashcard-back">

**R:** b) `usuario@dominio.ad`. Con trust configurado, los usuarios de Active Directory se referencian con el formato `usuario@dominio.ad` (ej: `juan@empresa.local`). SSSD descubre automáticamente los subdominios de confianza y resuelve los usuarios AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué requisito DNS es necesario antes de establecer un trust entre FreeIPA y AD?

</div>
<div class="flashcard-back">

**R:** b) Ambos dominios deben poder resolver mutuamente sus registros DNS. La resolución DNS bidireccional es un requisito previo. FreeIPA debe resolver registros del dominio AD y viceversa. Se configuran zonas de reenvío DNS en FreeIPA para resolver el dominio AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué diferencia fundamental hay entre winsync y trust en cuanto al almacenamiento de datos de usuario?

</div>
<div class="flashcard-back">

**R:** b) Con winsync los datos se copian a IPA; con trust permanecen en AD. Winsync sincroniza (copia) datos de usuario de AD a FreeIPA, creando duplicación. Con trust, los datos permanecen en su sistema original: los usuarios AD se quedan en AD y los usuarios IPA se quedan en IPA. SSSD consulta el dominio correspondiente cuando necesita resolver una identidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué parámetro de `ipa-adtrust-install` configura agentes de trust en las réplicas FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `--add-agents`. El parámetro `--add-agents` configura los agentes de trust en las réplicas FreeIPA, permitiendo que las réplicas también puedan atender solicitudes de autenticación de usuarios del dominio AD de confianza, mejorando la alta disponibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de trust es transitivo y cubre todos los dominios de un bosque Active Directory?

</div>
<div class="flashcard-back">

**R:** b) Forest trust. Un forest trust es transitivo y establece confianza con todo el bosque de Active Directory, incluyendo todos sus dominios y subdominios. Un external trust, en cambio, solo cubre un dominio específico y no es transitivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de FreeIPA configura una zona de reenvío DNS para resolver el dominio de Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `ipa dnsforwardzone-add empresa.local --forwarder=192.168.1.1 --forward-policy=only`. `ipa dnsforwardzone-add` crea una zona de reenvío DNS en FreeIPA que redirige las consultas del dominio AD al servidor DNS de Active Directory. `--forward-policy=only` indica que solo se use el forwarder especificado para esa zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué tipo de rango de IDs utiliza los atributos POSIX (`uidNumber`/`gidNumber`) definidos directamente en Active Directory?

</div>
<div class="flashcard-back">

**R:** b) `ipa-ad-trust-posix`. El tipo de rango `ipa-ad-trust-posix` usa los atributos POSIX (`uidNumber`, `gidNumber`) que ya están configurados en los objetos de usuario en Active Directory. Requiere que los administradores de AD hayan extendido el schema con Unix attributes. El tipo `ipa-ad-trust` genera UIDs algorítmicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué método usa SSSD para descubrir los dominios de Active Directory de confianza?

</div>
<div class="flashcard-back">

**R:** b) Descubrimiento automático de subdominios mediante el proveedor IPA. SSSD utiliza el `subdomains_provider = ipa` para descubrir automáticamente los dominios AD de confianza. No es necesario configurar explícitamente los subdominios en `sssd.conf`; SSSD los detecta consultando la información de trust almacenada en FreeIPA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué comando permite verificar la comunicación Kerberos cross-realm obteniendo un ticket de servicio para el trust?

</div>
<div class="flashcard-back">

**R:** b) `kvno krbtgt/EMPRESA.LOCAL@EMPRESA.IPA`. `kvno` obtiene un ticket de servicio para el principal especificado, lo que permite verificar que la comunicación Kerberos cross-realm funciona correctamente. `krbtgt/EMPRESA.LOCAL@EMPRESA.IPA` es el principal de trust entre ambos realms.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-017">
<div class="flashcard-front">

**P:** ¿Por qué los grupos externos de FreeIPA no pueden usarse directamente en reglas HBAC o sudo?

</div>
<div class="flashcard-back">

**R:** b) Porque los grupos externos no tienen GID POSIX necesario para las reglas del sistema. Los grupos externos solo contienen SIDs de Active Directory y no tienen atributos POSIX. Las reglas HBAC y sudo requieren grupos POSIX con GID numérico. Por eso se sigue el patrón: grupo externo (SIDs AD) -> grupo POSIX IPA -> reglas HBAC/sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué alternativa existe a usar credenciales de administrador de AD al crear un trust con `ipa trust-add`?

</div>
<div class="flashcard-back">

**R:** b) Usar un secreto compartido con `--trust-secret`. La opción `--trust-secret` permite establecer el trust mediante un secreto compartido previamente configurado en ambos lados (AD y FreeIPA), en lugar de proporcionar credenciales de administrador de Active Directory con `--admin`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando lista todas las relaciones de confianza configuradas en FreeIPA?

</div>
<div class="flashcard-back">

**R:** b) `ipa trust-find`. `ipa trust-find` lista todas las relaciones de confianza (trusts) configuradas en el servidor FreeIPA. Para ver los detalles completos de un trust específico, se usa `ipa trust-show empresa.local --all`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué paquete adicional se debe instalar en el servidor FreeIPA para soportar relaciones de confianza con AD?

</div>
<div class="flashcard-back">

**R:** b) `freeipa-server-trust-ad`. El paquete `freeipa-server-trust-ad` instala los componentes necesarios (incluyendo Samba y las librerías de trust) para que FreeIPA pueda establecer relaciones de confianza con dominios Active Directory. Se instala con `dnf install freeipa-server-trust-ad`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear una relación de confianza entre FreeIPA y el dominio AD `empresa.local` usando credenciales del administrador de AD. <input type="text" class="fill-blank" data-answer="ipa trust-add empresa.local --type=ad --admin=Administrador --password" data-alt="ipa trust-add empresa.local --type=ad --admin Administrador --password" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa trust-add empresa.local --type=ad --admin=Administrador --password. `ipa trust-add` crea la relación de confianza. `--type=ad` especifica que es un trust con Active Directory, `--admin` indica la cuenta de administrador del dominio AD y `--password` solicita la contraseña de forma interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para preparar un servidor FreeIPA existente para relaciones de confianza con AD, con nombre NetBIOS `IPAEMPRESA` y generando SIDs para entidades existentes. <input type="text" class="fill-blank" data-answer="ipa-adtrust-install --netbios-name=IPAEMPRESA --add-sids" data-alt="ipa-adtrust-install --netbios-name IPAEMPRESA --add-sids" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa-adtrust-install --netbios-name=IPAEMPRESA --add-sids. `ipa-adtrust-install` configura los componentes de trust en FreeIPA. `--netbios-name` define el nombre NetBIOS del dominio IPA y `--add-sids` genera Security Identifiers para los usuarios y grupos que fueron creados antes de habilitar el trust.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para verificar que un usuario de Active Directory se resuelve correctamente desde un sistema inscrito en FreeIPA. <input type="text" class="fill-blank" data-answer="id usuario@empresa.local" data-alt="getent passwd usuario@empresa.local" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** id usuario@empresa.local. El comando `id` muestra la información de identidad (UID, GID y grupos) de un usuario. Con trust configurado, `id usuario@empresa.local` consulta a SSSD que resuelve la identidad del usuario AD a través de FreeIPA. También se puede usar `getent passwd usuario@empresa.local`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para crear un grupo externo en FreeIPA llamado `ad-admins` que pueda contener miembros de Active Directory. <input type="text" class="fill-blank" data-answer="ipa group-add ad-admins --external" data-alt="ipa group-add ad-admins --external --desc='Grupo externo AD'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa group-add ad-admins --external. La opción `--external` crea un grupo que puede contener SIDs de Active Directory como miembros. Luego se añade el grupo AD con `ipa group-add-member ad-admins --external "DOMINIO\Grupo"` y se vincula a un grupo POSIX para usarlo en reglas HBAC/sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para ver los rangos de IDs configurados en FreeIPA para el mapeo de SIDs de AD. <input type="text" class="fill-blank" data-answer="ipa idrange-find" data-alt="ipa idrange-find" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ipa idrange-find. `ipa idrange-find` muestra todos los rangos de IDs configurados, incluyendo los rangos locales de FreeIPA y los rangos de trust con AD. Estos rangos definen cómo se mapean los SIDs de Active Directory a UIDs/GIDs POSIX en el sistema Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Un forest trust incluye todos los dominios del bosque AD. Un external trust es m...

</div>
<div class="flashcard-back">

**R:** Un forest trust incluye todos los dominios del bosque AD. Un external trust es más limitado y solo cubre un dominio específico. Para la mayoría de escenarios, se recomienda forest trust.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-adtrust-install` prepara el servidor FreeIPA para establecer relaciones de ...

</div>
<div class="flashcard-back">

**R:** `ipa-adtrust-install` prepara el servidor FreeIPA para establecer relaciones de confianza con AD. Debe ejecutarse antes de crear el trust. `--add-sids` es importante para que los usuarios IPA sean visibles en el contexto de AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `ipa trust-add` crea la relación de confianza. Se puede usar credenciales de adm...

</div>
<div class="flashcard-back">

**R:** `ipa trust-add` crea la relación de confianza. Se puede usar credenciales de administrador AD (`--admin`) o un secreto compartido (`--trust-secret`) previamente configurado en ambos lados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `ipa-ad-trust` genera UIDs/GIDs automáticamente a partir del SID de AD. `ipa-ad-...

</div>
<div class="flashcard-back">

**R:** `ipa-ad-trust` genera UIDs/GIDs automáticamente a partir del SID de AD. `ipa-ad-trust-posix` requiere que los usuarios AD tengan atributos uidNumber/gidNumber configurados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Winsync es un método legacy que sincroniza datos de AD a IPA. El enfoque recomen...

</div>
<div class="flashcard-back">

**R:** Winsync es un método legacy que sincroniza datos de AD a IPA. El enfoque recomendado es usar relaciones de confianza (trust) que son más escalables y no duplican datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Con trust configurado, SSSD descubre automáticamente los subdominios (dominios A...

</div>
<div class="flashcard-back">

**R:** Con trust configurado, SSSD descubre automáticamente los subdominios (dominios AD de confianza). Los usuarios AD se referencian como `usuario@dominio.ad`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: El mapeo de grupos AD requiere tres pasos: crear grupo externo, añadir el grupo ...

</div>
<div class="flashcard-back">

**R:** El mapeo de grupos AD requiere tres pasos: crear grupo externo, añadir el grupo AD como miembro externo, y vincular el grupo externo a un grupo POSIX de IPA. Los grupos externos no pueden usarse directamente en reglas HBAC o sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `--netbios-name`?

</div>
<div class="flashcard-back">

**R:** Nombre NetBIOS del dominio IPA

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `--add-sids`?

</div>
<div class="flashcard-back">

**R:** Generar SIDs para usuarios y grupos IPA existentes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `--add-agents`?

</div>
<div class="flashcard-back">

**R:** Configurar agentes de trust en réplicas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `--type=ad`?

</div>
<div class="flashcard-back">

**R:** Tipo de trust (Active Directory)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-037">
<div class="flashcard-front">

**P:** Que hace el comando `--password`?

</div>
<div class="flashcard-back">

**R:** Solicitar contraseña interactivamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-038">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La integración de FreeIPA con Active Directory permite que usuarios y recursos de ambos sistemas coexistan en un entorno mixto. Existen dos enfoques principales: relaciones de confianza (trust) y sincr

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-039">
<div class="flashcard-front">

**P:** Que es/son ID Ranges?

</div>
<div class="flashcard-back">

**R:** Los rangos de IDs mapean los SIDs de AD a UIDs/GIDs POSIX:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-040">
<div class="flashcard-front">

**P:** Que es/son SSSD para usuarios de trust?

</div>
<div class="flashcard-back">

**R:** SSSD en los clientes FreeIPA resuelve automáticamente los usuarios del dominio AD de confianza:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-041">
<div class="flashcard-front">

**P:** Que es/son Mapeo de grupos entre FreeIPA y AD?

</div>
<div class="flashcard-back">

**R:** Para asignar permisos a grupos AD en FreeIPA:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="305.3">
</div>

<div class="flashcard" data-id="305.3-fc-042">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

