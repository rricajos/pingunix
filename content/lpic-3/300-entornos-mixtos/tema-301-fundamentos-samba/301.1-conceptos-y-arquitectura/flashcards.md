---
title: "301.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.1"
---

# Flashcards: 301.1 - Conceptos Y Arquitectura

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es el demonio de Samba responsable de la resolución de nombres NetBIOS?

</div>
<div class="flashcard-back">

**R:** c) nmbd. El demonio `nmbd` es el responsable de la resolución de nombres NetBIOS sobre TCP/IP. También puede actuar como servidor WINS y participa en las elecciones de navegador maestro. Utiliza los puertos UDP 137 y 138.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-002">
<div class="flashcard-front">

**P:** ¿En qué puerto escucha SMB cuando funciona directamente sobre TCP/IP sin NetBIOS?

</div>
<div class="flashcard-back">

**R:** d) 445. El puerto TCP 445 se utiliza para SMB directo sobre TCP/IP, sin necesidad de la capa NetBIOS. El puerto 139 es SMB sobre NetBIOS Session Service. Los puertos 137 y 138 son UDP para el servicio de nombres y datagramas NetBIOS respectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-003">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes afirmaciones sobre Samba 4 es CORRECTA?

</div>
<div class="flashcard-back">

**R:** c) Incluye un servidor Kerberos (Heimdal KDC) integrado. Samba 4 incluye un KDC Kerberos basado en Heimdal, un servidor LDAP interno y opcionalmente un servidor DNS interno. Puede actuar como controlador de dominio AD completo y soporta SMB1, SMB2 y SMB3.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué función realiza el demonio `winbindd`?

</div>
<div class="flashcard-back">

**R:** c) Mapea usuarios y grupos de Windows a UIDs/GIDs de Linux. El demonio `winbindd` se encarga de la integración con dominios Windows, mapeando usuarios y grupos de Windows/AD a UIDs y GIDs del sistema Linux. Utiliza NSS y PAM para la integración y se comunica a través de un socket UNIX local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la longitud máxima de un nombre NetBIOS (sin contar el sufijo de tipo)?

</div>
<div class="flashcard-back">

**R:** b) 15 caracteres. Los nombres NetBIOS están limitados a 15 caracteres para el nombre propiamente dicho, más 1 byte (el 16º carácter) que se usa como sufijo de tipo de servicio. Por ejemplo, el sufijo `<20>` indica un servidor de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-006">
<div class="flashcard-front">

**P:** Cuando Samba 4 se configura como controlador de dominio Active Directory, ¿qué demonio se debe iniciar?

</div>
<div class="flashcard-back">

**R:** c) El demonio unificado `samba`. En modo AD DC, Samba 4 utiliza un demonio unificado llamado `samba` que integra todas las funcionalidades necesarias: servidor LDAP, DNS, Kerberos KDC, SMB y RPC. Se inicia con `systemctl start samba-ad-dc`. Los demonios individuales smbd/nmbd/winbindd se usan en modo servidor de archivos o miembro de dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf se utiliza para activar el servidor WINS en Samba?

</div>
<div class="flashcard-back">

**R:** b) `wins support = yes`. El parámetro `wins support = yes` en la sección `[global]` de smb.conf activa el servicio WINS en el servidor Samba. El parámetro `wins server` se usa en los clientes para especificar la IP del servidor WINS. Ambos parámetros son mutuamente excluyentes en el mismo servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el sufijo NetBIOS que identifica a un controlador de dominio?

</div>
<div class="flashcard-back">

**R:** d) `<1C>`. El sufijo `<1C>` es un registro de grupo que identifica a los controladores de dominio. El sufijo `<1B>` identifica al Domain Master Browser (único), `<20>` al servidor de archivos y `<00>` a la estación de trabajo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué protocolo SMB es considerado inseguro y está deshabilitado por defecto en Windows 10 y posteriores?

</div>
<div class="flashcard-back">

**R:** c) SMB1/CIFS. SMB1 (también conocido como CIFS) es considerado inseguro debido a múltiples vulnerabilidades, incluyendo la explotada por WannaCry. Microsoft lo deshabilita por defecto en Windows 10+ y recomienda usar SMB2 o superior. En Samba, se puede limitar con `server min protocol = SMB2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia fundamental entre un grupo de trabajo (workgroup) y un dominio?

</div>
<div class="flashcard-back">

**R:** b) Los dominios proporcionan autenticación centralizada; los grupos de trabajo no. En un grupo de trabajo, cada equipo mantiene su propia base de datos de usuarios local (modelo peer-to-peer). En un dominio, existe un controlador de dominio centralizado que gestiona la autenticación y las políticas para todos los equipos miembros. Samba puede funcionar en ambos modelos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-011">
<div class="flashcard-front">

**P:** ¿Qué versión del protocolo SMB introdujo el cifrado de datos y el soporte multicanal?

</div>
<div class="flashcard-back">

**R:** c) SMB3. SMB3 fue introducido con Windows 8 y Windows Server 2012, y añadió características fundamentales como cifrado end-to-end de datos, soporte multicanal para utilizar múltiples interfaces de red simultáneamente, y mejoras significativas de rendimiento. SMB2 mejoró el rendimiento respecto a SMB1 pero no incluía cifrado nativo. SMB3.1.1 añadió integridad de preautenticación y cifrado AES-128-GCM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de proceso crea `smbd` para cada nueva conexión de cliente?

</div>
<div class="flashcard-back">

**R:** b) Un proceso hijo independiente. El demonio `smbd` sigue un modelo de bifurcación (fork): crea un proceso hijo por cada conexión de cliente entrante. Esto permite aislar las conexiones entre sí y facilitar la depuración individual. Cada proceso hijo hereda la configuración del proceso padre y gestiona la sesión completa del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-013">
<div class="flashcard-front">

**P:** ¿Cuál de los siguientes servicios NO está integrado en el demonio unificado `samba` cuando actúa como AD DC?

</div>
<div class="flashcard-back">

**R:** c) Servidor DHCP. Cuando Samba 4 actúa como controlador de dominio Active Directory, el demonio unificado `samba` integra un servidor LDAP, un KDC Kerberos (Heimdal), un servidor DNS (interno o BIND9_DLZ), un servidor de archivos (smbd) y un servidor RPC. El servicio DHCP no está integrado y debe configurarse de forma independiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-014">
<div class="flashcard-front">

**P:** ¿Qué sufijo NetBIOS identifica al servicio de servidor de archivos (file server)?

</div>
<div class="flashcard-back">

**R:** d) `<20>`. El sufijo hexadecimal `<20>` es un registro único que identifica al servicio de servidor de archivos en NetBIOS. El sufijo `<00>` identifica a la estación de trabajo, `<03>` al servicio de mensajería y `<1B>` al Domain Master Browser. Estos sufijos ocupan el 16.º byte del nombre NetBIOS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes afirmaciones sobre la relación entre WINS y DNS es CORRECTA?

</div>
<div class="flashcard-back">

**R:** c) WINS resuelve nombres NetBIOS mientras que DNS resuelve nombres de host; en AD, DNS reemplaza en gran medida a WINS. WINS (Windows Internet Name Service) es un servicio de resolución centralizada de nombres NetBIOS, eliminando la necesidad de broadcast. DNS (Domain Name System) resuelve nombres de host en direcciones IP. En entornos modernos con Active Directory, DNS es el mecanismo principal de resolución de nombres, y WINS solo se mantiene por compatibilidad con sistemas legacy.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-016">
<div class="flashcard-front">

**P:** ¿Qué puerto utiliza el servicio de Catálogo Global (Global Catalog) de Active Directory?

</div>
<div class="flashcard-back">

**R:** c) 3268. El Catálogo Global de Active Directory escucha en el puerto TCP 3268 (y 3269 para la versión SSL/TLS). Este servicio contiene una réplica parcial de todos los objetos del bosque y se utiliza para búsquedas rápidas entre dominios. El puerto 389 es para LDAP estándar, 636 para LDAPS y 445 para SMB directo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál era la principal limitación de los dominios NT4 en comparación con Active Directory?

</div>
<div class="flashcard-back">

**R:** b) Las relaciones de confianza eran unidireccionales y no transitivas, con replicación basada en un único PDC. Los dominios NT4 tenían un modelo con un PDC (Primary Domain Controller) y uno o más BDCs (Backup Domain Controllers) con replicación unidireccional. Las relaciones de confianza eran limitadas (unidireccionales y no transitivas). Active Directory introdujo replicación multimaestro, confianzas bidireccionales y transitivas, y una estructura jerárquica basada en LDAP, DNS y Kerberos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-018">
<div class="flashcard-front">

**P:** ¿Qué archivo de configuración contiene las equivalencias estáticas de nombres NetBIOS a direcciones IP?

</div>
<div class="flashcard-back">

**R:** c) `/etc/samba/lmhosts`. El archivo `/etc/samba/lmhosts` funciona de manera similar a `/etc/hosts` pero para nombres NetBIOS. Contiene la correspondencia estática entre nombres NetBIOS y direcciones IP. `/etc/hosts` resuelve nombres de host DNS, `/etc/samba/smb.conf` es la configuración de Samba y `/etc/resolv.conf` configura los servidores DNS del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-019">
<div class="flashcard-front">

**P:** ¿En qué directorio se almacenan por defecto las bases de datos TDB y el estado interno de Samba?

</div>
<div class="flashcard-back">

**R:** b) `/var/lib/samba/`. El directorio `/var/lib/samba/` almacena las bases de datos TDB (como passdb.tdb, secrets.tdb, registry.tdb), el estado interno de Samba y datos persistentes. `/etc/samba/` contiene los archivos de configuración, `/var/log/samba/` los archivos de log y `/usr/lib/samba/` las bibliotecas del software.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-020">
<div class="flashcard-front">

**P:** ¿Qué protocolo de autenticación es utilizado de forma nativa por Samba 4 cuando actúa como controlador de dominio AD?

</div>
<div class="flashcard-back">

**R:** c) Kerberos mediante Heimdal KDC integrado. Samba 4 como AD DC utiliza Kerberos como protocolo principal de autenticación, implementado a través del KDC Heimdal integrado. Kerberos proporciona autenticación basada en tickets, lo que es más seguro que NTLM. Aunque NTLM sigue soportándose por compatibilidad, Kerberos es el mecanismo preferido y nativo en entornos Active Directory.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para iniciar Samba 4 en modo controlador de dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** systemctl start samba-ad-dc. En modo AD DC, Samba utiliza el demonio unificado `samba` que se gestiona mediante la unidad de systemd `samba-ad-dc`. Este servicio integra todas las funciones necesarias: LDAP, Kerberos, DNS, SMB y RPC. No se deben ejecutar smbd, nmbd o winbindd por separado en este modo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-022">
<div class="flashcard-front">

**P:** ¿En qué puerto TCP escucha el servicio Kerberos del controlador de dominio AD de Samba?

</div>
<div class="flashcard-back">

**R:** 88. El protocolo Kerberos utiliza el puerto 88 tanto en TCP como en UDP. Este puerto es fundamental para la autenticación en entornos Active Directory, ya que todos los clientes deben poder comunicarse con el KDC (Key Distribution Center) para obtener sus tickets de autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-023">
<div class="flashcard-front">

**P:** ¿Cuál es el nombre del demonio de Samba que proporciona la integración con dominios Windows, mapeando usuarios y grupos de Windows a UIDs/GIDs de Linux?

</div>
<div class="flashcard-back">

**R:** winbindd. El demonio `winbindd` es el responsable de la integración con dominios Windows. Su función principal es mapear usuarios y grupos de Windows (identificados por SIDs) a UIDs y GIDs del sistema Linux. Se comunica mediante un socket UNIX local y utiliza NSS y PAM para integrarse con el sistema operativo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-024">
<div class="flashcard-front">

**P:** ¿Cuál es el parámetro de smb.conf que activa la funcionalidad de servidor WINS en Samba?

</div>
<div class="flashcard-back">

**R:** wins support = yes. El parámetro `wins support = yes` en la sección `[global]` de smb.conf habilita el servidor WINS en Samba. Este servicio proporciona resolución centralizada de nombres NetBIOS, eliminando la dependencia del broadcast. Es mutuamente excluyente con `wins server`, que se usa en los clientes para indicar la IP del servidor WINS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-025">
<div class="flashcard-front">

**P:** ¿Qué dos demonios deben iniciarse como mínimo para un servidor Samba de archivos básico?

</div>
<div class="flashcard-back">

**R:** smbd nmbd. Para un servidor Samba de archivos básico se necesitan al menos `smbd` (que gestiona la compartición de archivos e impresoras y la autenticación) y `nmbd` (que proporciona resolución de nombres NetBIOS y servicios de navegación). El demonio `winbindd` solo es necesario cuando se requiere integración con un dominio Windows/AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Es fundamental conocer las diferencias entre SMB1, SMB2 y SMB3. SMB1 es inseguro...

</div>
<div class="flashcard-back">

**R:** Es fundamental conocer las diferencias entre SMB1, SMB2 y SMB3. SMB1 es inseguro y no debe usarse en producción. Samba 4 soporta SMB2 y SMB3.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `smbd` y `nmbd` son necesarios para un servidor de archivos básico,...

</div>
<div class="flashcard-back">

**R:** Recuerda que `smbd` y `nmbd` son necesarios para un servidor de archivos básico, mientras que `winbindd` solo se necesita cuando se integra con un dominio Windows/AD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: WINS resuelve nombres NetBIOS, NO nombres DNS. En entornos modernos con AD, DNS ...

</div>
<div class="flashcard-back">

**R:** WINS resuelve nombres NetBIOS, NO nombres DNS. En entornos modernos con AD, DNS ha reemplazado en gran medida a WINS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Los puertos 137/UDP, 138/UDP, 139/TCP y 445/TCP son los más preguntados. Recuerd...

</div>
<div class="flashcard-back">

**R:** Los puertos 137/UDP, 138/UDP, 139/TCP y 445/TCP son los más preguntados. Recuerda que el puerto 445 permite SMB sin NetBIOS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `smbd`?

</div>
<div class="flashcard-back">

**R:** Servicio de archivos e impresoras, autenticación

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `nmbd`?

</div>
<div class="flashcard-back">

**R:** Resolución de nombres NetBIOS, WINS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `winbindd`?

</div>
<div class="flashcard-back">

**R:** Integración con dominios Windows, mapeo de usuarios

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema cubre los fundamentos del protocolo SMB/CIFS, la arquitectura de Samba, los servicios que lo componen y los conceptos de red necesarios para integrar sistemas Linux en entornos Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son Samba 4 como controlador de dominio?

</div>
<div class="flashcard-back">

**R:** Cuando Samba 4 actúa como controlador de dominio Active Directory, ejecuta un demonio unificado `samba` que incluye:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-035">
<div class="flashcard-front">

**P:** Que es/son Puertos de red utilizados?

</div>
<div class="flashcard-back">

**R:** | Puerto | Protocolo | Servicio |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Diferencias clave entre Samba 3 y Samba 4?

</div>
<div class="flashcard-back">

**R:** | Característica | Samba 3 | Samba 4 |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son Archivos de configuración principales?

</div>
<div class="flashcard-back">

**R:** - `/etc/samba/smb.conf` - Configuración principal de Samba

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - SMB/CIFS es el protocolo; Samba es la implementación libre

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.1">
</div>

<div class="flashcard" data-id="301.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

