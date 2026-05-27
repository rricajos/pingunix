---
title: "208.3 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "208.3"
---

# Flashcards: 208.3 - Squid Como Proxy Cache

> 20 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es el puerto predeterminado en el que Squid escucha las conexiones de los clientes?

</div>
<div class="flashcard-back">

**R:** c) 3128. El puerto predeterminado de Squid es 3128, configurado mediante la directiva `http_port` en `/etc/squid/squid.conf`. Aunque puede cambiarse a cualquier otro puerto, 3128 es el estándar reconocido para proxies Squid.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué tipo de ACL en Squid se utiliza para filtrar peticiones basándose en el dominio de destino?

</div>
<div class="flashcard-back">

**R:** c) dstdomain. La ACL de tipo `dstdomain` filtra las peticiones según el nombre de dominio de destino. Por ejemplo, `acl bloqueados dstdomain .facebook.com` coincide con cualquier petición dirigida a facebook.com o sus subdominios. El tipo `dst` filtra por dirección IP de destino, no por nombre de dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando debe ejecutarse antes del primer inicio de Squid para crear la estructura de directorios de la caché?

</div>
<div class="flashcard-back">

**R:** c) squid -z. El comando `squid -z` crea la estructura de directorios de caché definida en la directiva `cache_dir`. Debe ejecutarse antes del primer inicio del servicio para que Squid pueda almacenar los objetos en caché correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-004">
<div class="flashcard-front">

**P:** En la directiva `cache_dir ufs /var/spool/squid 100 16 256`, ¿qué representa el valor 100?

</div>
<div class="flashcard-back">

**R:** b) El tamaño máximo de la caché en disco en megabytes. En la directiva `cache_dir`, los parámetros son: tipo de almacenamiento (`ufs`), directorio (`/var/spool/squid`), tamaño en MB (100), subdirectorios de nivel 1 (16) y subdirectorios de nivel 2 (256).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué código de estado en el log de Squid indica que un objeto fue servido directamente desde la caché?

</div>
<div class="flashcard-back">

**R:** b) TCP_HIT. `TCP_HIT` en el `access.log` de Squid indica que el objeto solicitado se encontró en la caché y fue servido al cliente sin necesidad de contactar el servidor origen. `TCP_MISS` indica que el objeto no estaba en caché y tuvo que descargarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es la forma correcta de configurar Squid como proxy transparente en versiones recientes?

</div>
<div class="flashcard-back">

**R:** b) http_port 3128 intercept. En versiones recientes de Squid (3.1+), la palabra clave correcta es `intercept` en lugar de `transparent`. Ambas opciones configuran el modo proxy transparente, pero `transparent` está obsoleta. Además, se necesitan reglas de iptables para redirigir el tráfico al puerto del proxy.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué representan las letras MTWHF en una ACL de tipo `time` en Squid?

</div>
<div class="flashcard-back">

**R:** b) Monday, Tuesday, Wednesday, Thursday, Friday. En las ACLs de tipo `time`, cada día se representa con una letra: S=Sunday, M=Monday, T=Tuesday, W=Wednesday, H=Thursday, F=Friday, A=Saturday. MTWHF corresponde a los días laborales de lunes a viernes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué directiva de Squid especifica la cantidad de memoria RAM que puede utilizarse para almacenar objetos en caché?

</div>
<div class="flashcard-back">

**R:** c) cache_mem. La directiva `cache_mem` especifica la cantidad de memoria RAM que Squid dedica a almacenar los objetos más frecuentemente solicitados. Por ejemplo, `cache_mem 256 MB`. Esto es adicional a la memoria que Squid necesita para su funcionamiento normal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-009">
<div class="flashcard-front">

**P:** Un administrador quiere recargar la configuración de Squid sin interrumpir las conexiones activas. ¿Qué comando debe usar?

</div>
<div class="flashcard-back">

**R:** c) squid -k reconfigure. El comando `squid -k reconfigure` hace que Squid relea su archivo de configuración sin necesidad de reiniciar el servicio. Las conexiones activas no se interrumpen. Es equivalente a enviar la señal SIGHUP al proceso de Squid.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué protocolo utiliza Squid para comunicarse con otros proxies en una jerarquía de caché y en qué puerto opera por defecto?

</div>
<div class="flashcard-back">

**R:** c) ICP en el puerto 3130. ICP (Internet Cache Protocol) es el protocolo utilizado por Squid para comunicarse con proxies hermanos (sibling) y padres (parent) en una jerarquía de caché. Funciona sobre UDP en el puerto 3130 por defecto, configurado mediante la directiva `icp_port`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: El puerto predeterminado de Squid es 3128. En modo transparente, los clientes no...

</div>
<div class="flashcard-back">

**R:** El puerto predeterminado de Squid es 3128. En modo transparente, los clientes no necesitan configurar el proxy en su navegador; el tráfico se redirige al proxy mediante reglas de iptables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: Los días de la semana en la ACL `time` se representan como: S=Sunday, M=Monday, ...

</div>
<div class="flashcard-back">

**R:** Los días de la semana en la ACL `time` se representan como: S=Sunday, M=Monday, T=Tuesday, W=Wednesday, H=Thursday, F=Friday, A=Saturday. Nota que Thursday es `H` y Saturday es `A`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: El orden de las reglas `http_access` es fundamental. Squid las procesa de arriba...

</div>
<div class="flashcard-back">

**R:** El orden de las reglas `http_access` es fundamental. Squid las procesa de arriba a abajo y aplica la primera regla que coincida. La última regla debe ser siempre `http_access deny all` para denegar todo lo que no esté explícitamente permitido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: ICP (Internet Cache Protocol) utiliza el puerto UDP 3130 por defecto para la com...

</div>
<div class="flashcard-back">

**R:** ICP (Internet Cache Protocol) utiliza el puerto UDP 3130 por defecto para la comunicación entre proxies en una jerarquía de caché.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-015">
<div class="flashcard-front">

**P:** Que hace el comando `/var/log/squid/access.log`?

</div>
<div class="flashcard-back">

**R:** Registro de todas las peticiones procesadas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-016">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Squid es un servidor proxy caché ampliamente utilizado en entornos Linux. Permite almacenar en caché contenido web para mejorar el rendimiento, controlar el acceso a Internet mediante ACLs y actuar com

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-017">
<div class="flashcard-front">

**P:** Que es/son Listas de Control de Acceso (ACLs)?

</div>
<div class="flashcard-back">

**R:** Las ACLs son el mecanismo central de Squid para controlar el acceso. Se definen en dos pasos: primero se define la ACL y luego se aplica una regla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-018">
<div class="flashcard-front">

**P:** Que es/son Proxy transparente?

</div>
<div class="flashcard-back">

**R:** En un proxy transparente, el tráfico del cliente se redirige al proxy sin necesidad de configurar el navegador.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-019">
<div class="flashcard-front">

**P:** Que es/son Proxy inverso (Reverse Proxy)?

</div>
<div class="flashcard-back">

**R:** Squid puede actuar como proxy inverso para servir contenido desde servidores backend.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.3">
</div>

<div class="flashcard" data-id="208.3-fc-020">
<div class="flashcard-front">

**P:** Que es/son Jerarquía de caché (Cache Hierarchy)?

</div>
<div class="flashcard-back">

**R:** Squid permite configurar jerarquías de caché con servidores padre (parent) y hermanos (sibling).

</div>
</div>

---

