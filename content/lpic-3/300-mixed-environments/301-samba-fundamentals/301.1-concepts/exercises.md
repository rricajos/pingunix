---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "301"
subtema: "301.1"
titulo: "Conceptos y Arquitectura - Ejercicios"
peso: 2
tags:
  - lpic-3
  - tema-301
  - ejercicios
---

# Ejercicios - 301.1 Conceptos y Arquitectura

### Pregunta 1
¿Cuál es el demonio de Samba responsable de la resolución de nombres NetBIOS?

a) smbd
b) winbindd
c) nmbd
d) samba

<details><summary>Respuesta</summary>

**c) nmbd**

El demonio `nmbd` es el responsable de la resolución de nombres NetBIOS sobre TCP/IP. También puede actuar como servidor WINS y participa en las elecciones de navegador maestro. Utiliza los puertos UDP 137 y 138.
</details>

### Pregunta 2
¿En qué puerto escucha SMB cuando funciona directamente sobre TCP/IP sin NetBIOS?

a) 137
b) 138
c) 139
d) 445

<details><summary>Respuesta</summary>

**d) 445**

El puerto TCP 445 se utiliza para SMB directo sobre TCP/IP, sin necesidad de la capa NetBIOS. El puerto 139 es SMB sobre NetBIOS Session Service. Los puertos 137 y 138 son UDP para el servicio de nombres y datagramas NetBIOS respectivamente.
</details>

### Pregunta 3
¿Cuál de las siguientes afirmaciones sobre Samba 4 es CORRECTA?

a) No puede actuar como controlador de dominio Active Directory
b) Solo soporta el protocolo SMB1
c) Incluye un servidor Kerberos (Heimdal KDC) integrado
d) Requiere un servidor LDAP externo obligatoriamente

<details><summary>Respuesta</summary>

**c) Incluye un servidor Kerberos (Heimdal KDC) integrado**

Samba 4 incluye un KDC Kerberos basado en Heimdal, un servidor LDAP interno y opcionalmente un servidor DNS interno. Puede actuar como controlador de dominio AD completo y soporta SMB1, SMB2 y SMB3.
</details>

### Pregunta 4
¿Qué función realiza el demonio `winbindd`?

a) Comparte archivos e impresoras
b) Resuelve nombres NetBIOS
c) Mapea usuarios y grupos de Windows a UIDs/GIDs de Linux
d) Gestiona el servicio DNS de Samba

<details><summary>Respuesta</summary>

**c) Mapea usuarios y grupos de Windows a UIDs/GIDs de Linux**

El demonio `winbindd` se encarga de la integración con dominios Windows, mapeando usuarios y grupos de Windows/AD a UIDs y GIDs del sistema Linux. Utiliza NSS y PAM para la integración y se comunica a través de un socket UNIX local.
</details>

### Pregunta 5
¿Cuál es la longitud máxima de un nombre NetBIOS (sin contar el sufijo de tipo)?

a) 8 caracteres
b) 15 caracteres
c) 16 caracteres
d) 255 caracteres

<details><summary>Respuesta</summary>

**b) 15 caracteres**

Los nombres NetBIOS están limitados a 15 caracteres para el nombre propiamente dicho, más 1 byte (el 16º carácter) que se usa como sufijo de tipo de servicio. Por ejemplo, el sufijo `<20>` indica un servidor de archivos.
</details>

### Pregunta 6
Cuando Samba 4 se configura como controlador de dominio Active Directory, ¿qué demonio se debe iniciar?

a) smbd y nmbd
b) winbindd únicamente
c) El demonio unificado `samba`
d) smbd, nmbd y winbindd simultáneamente

<details><summary>Respuesta</summary>

**c) El demonio unificado `samba`**

En modo AD DC, Samba 4 utiliza un demonio unificado llamado `samba` que integra todas las funcionalidades necesarias: servidor LDAP, DNS, Kerberos KDC, SMB y RPC. Se inicia con `systemctl start samba-ad-dc`. Los demonios individuales smbd/nmbd/winbindd se usan en modo servidor de archivos o miembro de dominio.
</details>

### Pregunta 7
¿Qué parámetro de smb.conf se utiliza para activar el servidor WINS en Samba?

a) `wins server = yes`
b) `wins support = yes`
c) `enable wins = true`
d) `name resolve order = wins`

<details><summary>Respuesta</summary>

**b) `wins support = yes`**

El parámetro `wins support = yes` en la sección `[global]` de smb.conf activa el servicio WINS en el servidor Samba. El parámetro `wins server` se usa en los clientes para especificar la IP del servidor WINS. Ambos parámetros son mutuamente excluyentes en el mismo servidor.
</details>

### Pregunta 8
¿Cuál es el sufijo NetBIOS que identifica a un controlador de dominio?

a) `<00>`
b) `<20>`
c) `<1B>`
d) `<1C>`

<details><summary>Respuesta</summary>

**d) `<1C>`**

El sufijo `<1C>` es un registro de grupo que identifica a los controladores de dominio. El sufijo `<1B>` identifica al Domain Master Browser (único), `<20>` al servidor de archivos y `<00>` a la estación de trabajo.
</details>

### Pregunta 9
¿Qué protocolo SMB es considerado inseguro y está deshabilitado por defecto en Windows 10 y posteriores?

a) SMB2
b) SMB3
c) SMB1/CIFS
d) SMB3.1.1

<details><summary>Respuesta</summary>

**c) SMB1/CIFS**

SMB1 (también conocido como CIFS) es considerado inseguro debido a múltiples vulnerabilidades, incluyendo la explotada por WannaCry. Microsoft lo deshabilita por defecto en Windows 10+ y recomienda usar SMB2 o superior. En Samba, se puede limitar con `server min protocol = SMB2`.
</details>

### Pregunta 10
¿Cuál es la diferencia fundamental entre un grupo de trabajo (workgroup) y un dominio?

a) Los grupos de trabajo permiten más usuarios que los dominios
b) Los dominios proporcionan autenticación centralizada; los grupos de trabajo no
c) Los grupos de trabajo usan Kerberos para autenticación
d) Los dominios solo funcionan con sistemas Windows

<details><summary>Respuesta</summary>

**b) Los dominios proporcionan autenticación centralizada; los grupos de trabajo no**

En un grupo de trabajo, cada equipo mantiene su propia base de datos de usuarios local (modelo peer-to-peer). En un dominio, existe un controlador de dominio centralizado que gestiona la autenticación y las políticas para todos los equipos miembros. Samba puede funcionar en ambos modelos.
</details>

### Pregunta 11

¿Qué versión del protocolo SMB introdujo el cifrado de datos y el soporte multicanal?

a) SMB1/CIFS
b) SMB2
c) SMB3
d) SMB3.1.1

<details><summary>Respuesta</summary>

**c) SMB3**

SMB3 fue introducido con Windows 8 y Windows Server 2012, y añadió características fundamentales como cifrado end-to-end de datos, soporte multicanal para utilizar múltiples interfaces de red simultáneamente, y mejoras significativas de rendimiento. SMB2 mejoró el rendimiento respecto a SMB1 pero no incluía cifrado nativo. SMB3.1.1 añadió integridad de preautenticación y cifrado AES-128-GCM.
</details>

### Pregunta 12

¿Qué tipo de proceso crea `smbd` para cada nueva conexión de cliente?

a) Un hilo (thread) dentro del proceso principal
b) Un proceso hijo independiente
c) Un contenedor aislado
d) Una instancia del demonio nmbd

<details><summary>Respuesta</summary>

**b) Un proceso hijo independiente**

El demonio `smbd` sigue un modelo de bifurcación (fork): crea un proceso hijo por cada conexión de cliente entrante. Esto permite aislar las conexiones entre sí y facilitar la depuración individual. Cada proceso hijo hereda la configuración del proceso padre y gestiona la sesión completa del cliente.
</details>

### Pregunta 13

¿Cuál de los siguientes servicios NO está integrado en el demonio unificado `samba` cuando actúa como AD DC?

a) Servidor LDAP interno
b) Servidor Kerberos (Heimdal KDC)
c) Servidor DHCP
d) Servidor DNS interno

<details><summary>Respuesta</summary>

**c) Servidor DHCP**

Cuando Samba 4 actúa como controlador de dominio Active Directory, el demonio unificado `samba` integra un servidor LDAP, un KDC Kerberos (Heimdal), un servidor DNS (interno o BIND9_DLZ), un servidor de archivos (smbd) y un servidor RPC. El servicio DHCP no está integrado y debe configurarse de forma independiente.
</details>

### Pregunta 14

¿Qué sufijo NetBIOS identifica al servicio de servidor de archivos (file server)?

a) `<00>`
b) `<03>`
c) `<1B>`
d) `<20>`

<details><summary>Respuesta</summary>

**d) `<20>`**

El sufijo hexadecimal `<20>` es un registro único que identifica al servicio de servidor de archivos en NetBIOS. El sufijo `<00>` identifica a la estación de trabajo, `<03>` al servicio de mensajería y `<1B>` al Domain Master Browser. Estos sufijos ocupan el 16.º byte del nombre NetBIOS.
</details>

### Pregunta 15

¿Cuál de las siguientes afirmaciones sobre la relación entre WINS y DNS es CORRECTA?

a) WINS y DNS son protocolos equivalentes e intercambiables
b) WINS resuelve nombres DNS y DNS resuelve nombres NetBIOS
c) WINS resuelve nombres NetBIOS mientras que DNS resuelve nombres de host; en AD, DNS reemplaza en gran medida a WINS
d) WINS es la evolución moderna de DNS

<details><summary>Respuesta</summary>

**c) WINS resuelve nombres NetBIOS mientras que DNS resuelve nombres de host; en AD, DNS reemplaza en gran medida a WINS**

WINS (Windows Internet Name Service) es un servicio de resolución centralizada de nombres NetBIOS, eliminando la necesidad de broadcast. DNS (Domain Name System) resuelve nombres de host en direcciones IP. En entornos modernos con Active Directory, DNS es el mecanismo principal de resolución de nombres, y WINS solo se mantiene por compatibilidad con sistemas legacy.
</details>

### Pregunta 16

¿Qué puerto utiliza el servicio de Catálogo Global (Global Catalog) de Active Directory?

a) 389
b) 636
c) 3268
d) 445

<details><summary>Respuesta</summary>

**c) 3268**

El Catálogo Global de Active Directory escucha en el puerto TCP 3268 (y 3269 para la versión SSL/TLS). Este servicio contiene una réplica parcial de todos los objetos del bosque y se utiliza para búsquedas rápidas entre dominios. El puerto 389 es para LDAP estándar, 636 para LDAPS y 445 para SMB directo.
</details>

### Pregunta 17

¿Cuál era la principal limitación de los dominios NT4 en comparación con Active Directory?

a) No soportaban cifrado de datos
b) Las relaciones de confianza eran unidireccionales y no transitivas, con replicación basada en un único PDC
c) No podían compartir archivos en red
d) Solo funcionaban con clientes Linux

<details><summary>Respuesta</summary>

**b) Las relaciones de confianza eran unidireccionales y no transitivas, con replicación basada en un único PDC**

Los dominios NT4 tenían un modelo con un PDC (Primary Domain Controller) y uno o más BDCs (Backup Domain Controllers) con replicación unidireccional. Las relaciones de confianza eran limitadas (unidireccionales y no transitivas). Active Directory introdujo replicación multimaestro, confianzas bidireccionales y transitivas, y una estructura jerárquica basada en LDAP, DNS y Kerberos.
</details>

### Pregunta 18

¿Qué archivo de configuración contiene las equivalencias estáticas de nombres NetBIOS a direcciones IP?

a) `/etc/hosts`
b) `/etc/samba/smb.conf`
c) `/etc/samba/lmhosts`
d) `/etc/resolv.conf`

<details><summary>Respuesta</summary>

**c) `/etc/samba/lmhosts`**

El archivo `/etc/samba/lmhosts` funciona de manera similar a `/etc/hosts` pero para nombres NetBIOS. Contiene la correspondencia estática entre nombres NetBIOS y direcciones IP. `/etc/hosts` resuelve nombres de host DNS, `/etc/samba/smb.conf` es la configuración de Samba y `/etc/resolv.conf` configura los servidores DNS del sistema.
</details>

### Pregunta 19

¿En qué directorio se almacenan por defecto las bases de datos TDB y el estado interno de Samba?

a) `/etc/samba/`
b) `/var/lib/samba/`
c) `/var/log/samba/`
d) `/usr/lib/samba/`

<details><summary>Respuesta</summary>

**b) `/var/lib/samba/`**

El directorio `/var/lib/samba/` almacena las bases de datos TDB (como passdb.tdb, secrets.tdb, registry.tdb), el estado interno de Samba y datos persistentes. `/etc/samba/` contiene los archivos de configuración, `/var/log/samba/` los archivos de log y `/usr/lib/samba/` las bibliotecas del software.
</details>

### Pregunta 20

¿Qué protocolo de autenticación es utilizado de forma nativa por Samba 4 cuando actúa como controlador de dominio AD?

a) NTLM exclusivamente
b) LDAP simple bind
c) Kerberos mediante Heimdal KDC integrado
d) RADIUS

<details><summary>Respuesta</summary>

**c) Kerberos mediante Heimdal KDC integrado**

Samba 4 como AD DC utiliza Kerberos como protocolo principal de autenticación, implementado a través del KDC Heimdal integrado. Kerberos proporciona autenticación basada en tickets, lo que es más seguro que NTLM. Aunque NTLM sigue soportándose por compatibilidad, Kerberos es el mecanismo preferido y nativo en entornos Active Directory.
</details>

### Pregunta 21

¿Qué comando se utiliza para iniciar Samba 4 en modo controlador de dominio Active Directory?

<input type="text" class="fill-blank" data-answer="systemctl start samba-ad-dc" data-alt="systemctl start samba-ad-dc.service" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl start samba-ad-dc**

En modo AD DC, Samba utiliza el demonio unificado `samba` que se gestiona mediante la unidad de systemd `samba-ad-dc`. Este servicio integra todas las funciones necesarias: LDAP, Kerberos, DNS, SMB y RPC. No se deben ejecutar smbd, nmbd o winbindd por separado en este modo.
</details>

### Pregunta 22

¿En qué puerto TCP escucha el servicio Kerberos del controlador de dominio AD de Samba?

<input type="text" class="fill-blank" data-answer="88" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**88**

El protocolo Kerberos utiliza el puerto 88 tanto en TCP como en UDP. Este puerto es fundamental para la autenticación en entornos Active Directory, ya que todos los clientes deben poder comunicarse con el KDC (Key Distribution Center) para obtener sus tickets de autenticación.
</details>

### Pregunta 23

¿Cuál es el nombre del demonio de Samba que proporciona la integración con dominios Windows, mapeando usuarios y grupos de Windows a UIDs/GIDs de Linux?

<input type="text" class="fill-blank" data-answer="winbindd" data-alt="winbind" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**winbindd**

El demonio `winbindd` es el responsable de la integración con dominios Windows. Su función principal es mapear usuarios y grupos de Windows (identificados por SIDs) a UIDs y GIDs del sistema Linux. Se comunica mediante un socket UNIX local y utiliza NSS y PAM para integrarse con el sistema operativo.
</details>

### Pregunta 24

¿Cuál es el parámetro de smb.conf que activa la funcionalidad de servidor WINS en Samba?

<input type="text" class="fill-blank" data-answer="wins support = yes" data-alt="wins support=yes" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wins support = yes**

El parámetro `wins support = yes` en la sección `[global]` de smb.conf habilita el servidor WINS en Samba. Este servicio proporciona resolución centralizada de nombres NetBIOS, eliminando la dependencia del broadcast. Es mutuamente excluyente con `wins server`, que se usa en los clientes para indicar la IP del servidor WINS.
</details>

### Pregunta 25

¿Qué dos demonios deben iniciarse como mínimo para un servidor Samba de archivos básico?

<input type="text" class="fill-blank" data-answer="smbd nmbd" data-alt="smbd y nmbd,nmbd smbd" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbd nmbd**

Para un servidor Samba de archivos básico se necesitan al menos `smbd` (que gestiona la compartición de archivos e impresoras y la autenticación) y `nmbd` (que proporciona resolución de nombres NetBIOS y servicios de navegación). El demonio `winbindd` solo es necesario cuando se requiere integración con un dominio Windows/AD.
</details>
