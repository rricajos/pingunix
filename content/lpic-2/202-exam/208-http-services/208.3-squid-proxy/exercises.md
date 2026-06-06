---
title: "208.3 - Squid como proxy caché"
tags: [lpic-2, examen-202, tema-208, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "208"
subtema: "208.3"
---

# 208.3 - Ejercicios: Squid como proxy caché

### Pregunta 1
¿Cuál es el puerto predeterminado en el que Squid escucha las conexiones de los clientes?

a) 8080
b) 80
c) 3128
d) 8888

<details>
<summary>Respuesta</summary>

**c) 3128**

El puerto predeterminado de Squid es 3128, configurado mediante la directiva `http_port` en `/etc/squid/squid.conf`. Aunque puede cambiarse a cualquier otro puerto, 3128 es el estándar reconocido para proxies Squid.
</details>

---

### Pregunta 2
¿Qué tipo de ACL en Squid se utiliza para filtrar peticiones basándose en el dominio de destino?

a) src
b) dst
c) dstdomain
d) url_regex

<details>
<summary>Respuesta</summary>

**c) dstdomain**

La ACL de tipo `dstdomain` filtra las peticiones según el nombre de dominio de destino. Por ejemplo, `acl bloqueados dstdomain .facebook.com` coincide con cualquier petición dirigida a facebook.com o sus subdominios. El tipo `dst` filtra por dirección IP de destino, no por nombre de dominio.
</details>

---

### Pregunta 3
¿Qué comando debe ejecutarse antes del primer inicio de Squid para crear la estructura de directorios de la caché?

a) squid -k reconfigure
b) squid -k init
c) squid -z
d) squid --create-cache

<details>
<summary>Respuesta</summary>

**c) squid -z**

El comando `squid -z` crea la estructura de directorios de caché definida en la directiva `cache_dir`. Debe ejecutarse antes del primer inicio del servicio para que Squid pueda almacenar los objetos en caché correctamente.
</details>

---

### Pregunta 4
En la directiva `cache_dir ufs /var/spool/squid 100 16 256`, ¿qué representa el valor 100?

a) El número máximo de archivos en caché
b) El tamaño máximo de la caché en disco en megabytes
c) El número de subdirectorios de nivel 1
d) El porcentaje máximo de uso del disco

<details>
<summary>Respuesta</summary>

**b) El tamaño máximo de la caché en disco en megabytes**

En la directiva `cache_dir`, los parámetros son: tipo de almacenamiento (`ufs`), directorio (`/var/spool/squid`), tamaño en MB (100), subdirectorios de nivel 1 (16) y subdirectorios de nivel 2 (256).
</details>

---

### Pregunta 5
¿Qué código de estado en el log de Squid indica que un objeto fue servido directamente desde la caché?

a) TCP_MISS
b) TCP_HIT
c) TCP_DENIED
d) TCP_REFRESH

<details>
<summary>Respuesta</summary>

**b) TCP_HIT**

`TCP_HIT` en el `access.log` de Squid indica que el objeto solicitado se encontró en la caché y fue servido al cliente sin necesidad de contactar el servidor origen. `TCP_MISS` indica que el objeto no estaba en caché y tuvo que descargarse.
</details>

---

### Pregunta 6
¿Cuál es la forma correcta de configurar Squid como proxy transparente en versiones recientes?

a) http_port 3128 transparent
b) http_port 3128 intercept
c) http_port 3128 redirect
d) http_port 3128 inline

<details>
<summary>Respuesta</summary>

**b) http_port 3128 intercept**

En versiones recientes de Squid (3.1+), la palabra clave correcta es `intercept` en lugar de `transparent`. Ambas opciones configuran el modo proxy transparente, pero `transparent` está obsoleta. Además, se necesitan reglas de iptables para redirigir el tráfico al puerto del proxy.
</details>

---

### Pregunta 7
¿Qué representan las letras MTWHF en una ACL de tipo `time` en Squid?

a) Month, Tuesday, Wednesday, Thursday, Friday
b) Monday, Tuesday, Wednesday, Thursday, Friday
c) Monday, Thursday, Wednesday, Holiday, Friday
d) Monday, Tuesday, Week, Holiday, Friday

<details>
<summary>Respuesta</summary>

**b) Monday, Tuesday, Wednesday, Thursday, Friday**

En las ACLs de tipo `time`, cada día se representa con una letra: S=Sunday, M=Monday, T=Tuesday, W=Wednesday, H=Thursday, F=Friday, A=Saturday. MTWHF corresponde a los días laborales de lunes a viernes.
</details>

---

### Pregunta 8
¿Qué directiva de Squid especifica la cantidad de memoria RAM que puede utilizarse para almacenar objetos en caché?

a) memory_cache
b) ram_cache_size
c) cache_mem
d) maximum_memory

<details>
<summary>Respuesta</summary>

**c) cache_mem**

La directiva `cache_mem` especifica la cantidad de memoria RAM que Squid dedica a almacenar los objetos más frecuentemente solicitados. Por ejemplo, `cache_mem 256 MB`. Esto es adicional a la memoria que Squid necesita para su funcionamiento normal.
</details>

---

### Pregunta 9
Un administrador quiere recargar la configuración de Squid sin interrumpir las conexiones activas. ¿Qué comando debe usar?

a) squid -k restart
b) squid -k reload
c) squid -k reconfigure
d) squid -k refresh

<details>
<summary>Respuesta</summary>

**c) squid -k reconfigure**

El comando `squid -k reconfigure` hace que Squid relea su archivo de configuración sin necesidad de reiniciar el servicio. Las conexiones activas no se interrumpen. Es equivalente a enviar la señal SIGHUP al proceso de Squid.
</details>

---

### Pregunta 10
¿Qué protocolo utiliza Squid para comunicarse con otros proxies en una jerarquía de caché y en qué puerto opera por defecto?

a) HTTP en el puerto 3128
b) HTCP en el puerto 4827
c) ICP en el puerto 3130
d) SNMP en el puerto 3401

<details>
<summary>Respuesta</summary>

**c) ICP en el puerto 3130**

ICP (Internet Cache Protocol) es el protocolo utilizado por Squid para comunicarse con proxies hermanos (sibling) y padres (parent) en una jerarquía de caché. Funciona sobre UDP en el puerto 3130 por defecto, configurado mediante la directiva `icp_port`.
</details>

---

### Pregunta 11

¿Qué tipo de ACL en Squid permite filtrar peticiones basándose en una expresión regular aplicada a la URL solicitada?

a) dstdomain
b) src
c) url_regex
d) proto

<details><summary>Respuesta</summary>

**c) url_regex**

La ACL de tipo `url_regex` filtra las peticiones comparando la URL completa con una expresión regular. Por ejemplo, `acl descargas url_regex -i \.exe$ \.torrent$` coincide con URLs que terminen en `.exe` o `.torrent`. La opción `-i` hace la comparación insensible a mayúsculas/minúsculas.

</details>

---

### Pregunta 12

En una jerarquía de caché de Squid, ¿cuál es la diferencia entre un proxy padre (parent) y un proxy hermano (sibling)?

a) El padre solo comparte caché, el hermano reenvía peticiones
b) El padre reenvía peticiones si no tiene la respuesta en caché, el hermano solo comparte contenido cacheado
c) No hay diferencia, ambos funcionan igual
d) El padre usa TCP y el hermano usa UDP

<details><summary>Respuesta</summary>

**b) El padre reenvía peticiones si no tiene la respuesta en caché, el hermano solo comparte contenido cacheado**

Un proxy padre (parent) actúa como intermediario completo: si tiene el objeto en caché lo devuelve, y si no, lo solicita al servidor origen en nombre del proxy que lo consulta. Un proxy hermano (sibling) solo devuelve objetos que ya tiene en su caché; si no los tiene, no realiza la petición al servidor origen. La comunicación entre proxies se realiza mediante ICP (UDP 3130).

</details>

---

### Pregunta 13

¿Cuál es el orden de procesamiento de las reglas `http_access` en Squid?

a) Se aplican todas las reglas y la más restrictiva gana
b) Se procesan de abajo hacia arriba y se aplica la primera coincidencia
c) Se procesan de arriba hacia abajo y se aplica la primera coincidencia
d) Se procesan aleatoriamente según la prioridad de la ACL

<details><summary>Respuesta</summary>

**c) Se procesan de arriba hacia abajo y se aplica la primera coincidencia**

Squid procesa las reglas `http_access` secuencialmente de arriba hacia abajo y aplica la primera regla que coincida con la petición. Por esta razón, el orden es fundamental. Las reglas más específicas deben ir antes que las generales, y la última regla debe ser siempre `http_access deny all` para denegar todo lo que no esté explícitamente permitido.

</details>

---

### Pregunta 14

¿Qué tipo de almacenamiento de caché en Squid utiliza operaciones de E/S asíncronas para mejorar el rendimiento frente al formato estándar UFS?

a) diskd
b) coss
c) aufs
d) rock

<details><summary>Respuesta</summary>

**c) aufs**

AUFS (Asynchronous UFS) es un tipo de almacenamiento de caché que realiza las operaciones de lectura y escritura en disco de forma asíncrona usando hilos, lo que mejora significativamente el rendimiento respecto al UFS estándar que usa E/S síncrona. Se configura con `cache_dir aufs /var/spool/squid 10000 16 256`.

</details>

---

### Pregunta 15

¿Qué directiva de Squid configura el tamaño máximo de un objeto que puede almacenarse en la caché de disco?

a) cache_max_size
b) maximum_object_size
c) max_cache_object
d) object_limit

<details><summary>Respuesta</summary>

**b) maximum_object_size**

La directiva `maximum_object_size` define el tamaño máximo que puede tener un objeto para ser almacenado en la caché de disco. Objetos más grandes no se cachean. Por ejemplo, `maximum_object_size 4 MB`. Para la caché en memoria existe la directiva equivalente `maximum_object_size_in_memory`.

</details>

---

### Pregunta 16

¿Qué regla de iptables se necesita para redirigir el tráfico HTTP al proxy Squid en modo transparente?

a) `iptables -t filter -A INPUT -p tcp --dport 80 -j REDIRECT --to-port 3128`
b) `iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3128`
c) `iptables -t mangle -A FORWARD -p tcp --dport 80 -j REDIRECT --to-port 3128`
d) `iptables -t nat -A POSTROUTING -p tcp --dport 80 -j REDIRECT --to-port 3128`

<details><summary>Respuesta</summary>

**b) `iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3128`**

Para el proxy transparente, se usa la tabla `nat` con la cadena `PREROUTING` para interceptar el tráfico HTTP (puerto 80) antes de que sea enrutado y redirigirlo al puerto del proxy Squid (3128). Se usa la acción `REDIRECT` que cambia el puerto de destino del paquete. La cadena PREROUTING es necesaria porque la redirección debe ocurrir antes de la decisión de enrutamiento.

</details>

---

### Pregunta 17

¿Qué archivo de log de Squid registra los eventos del servicio como inicios, paradas y errores de configuración?

a) /var/log/squid/access.log
b) /var/log/squid/cache.log
c) /var/log/squid/store.log
d) /var/log/squid/error.log

<details><summary>Respuesta</summary>

**b) /var/log/squid/cache.log**

El archivo `cache.log` registra los eventos operativos del servicio Squid: inicios y paradas del demonio, errores de configuración, advertencias y mensajes de diagnóstico. El archivo `access.log` registra las peticiones de los clientes, y `store.log` registra los objetos almacenados y eliminados de la caché.

</details>

---

### Pregunta 18

¿Qué directiva de Squid configura el programa de autenticación para validar usuarios con el esquema básico (NCSA)?

a) `authenticate_program basic /usr/lib/squid/basic_ncsa_auth`
b) `auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd`
c) `basic_auth /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd`
d) `proxy_auth program /usr/lib/squid/basic_ncsa_auth`

<details><summary>Respuesta</summary>

**b) `auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwd`**

La directiva `auth_param basic program` define el programa externo que Squid utiliza para autenticar usuarios con el esquema básico. `basic_ncsa_auth` verifica las credenciales contra un archivo de contraseñas en formato NCSA (creado con `htpasswd`). La directiva `auth_param basic realm` permite configurar el mensaje que ve el usuario.

</details>

---

### Pregunta 19

¿Qué palabra clave se utiliza en la directiva `http_port` de Squid para configurarlo como proxy inverso (acelerador)?

a) reverse
b) accel
c) backend
d) upstream

<details><summary>Respuesta</summary>

**b) accel**

La palabra clave `accel` en la directiva `http_port` configura Squid como proxy inverso (acelerador web). Por ejemplo: `http_port 80 accel defaultsite=www.ejemplo.com vhost`. En este modo, Squid recibe peticiones de clientes externos y las reenvía a los servidores backend definidos con `cache_peer`, cacheando el contenido para mejorar el rendimiento.

</details>

---

### Pregunta 20

¿Qué herramienta de línea de comandos incluida con Squid permite consultar estadísticas de la caché y purgar objetos?

a) squidtool
b) squidclient
c) squidctl
d) squidadmin

<details><summary>Respuesta</summary>

**b) squidclient**

El comando `squidclient` es una herramienta de diagnóstico incluida con Squid que permite consultar estadísticas de la caché (`squidclient mgr:info`), ver el uso de memoria (`squidclient mgr:mem`), consultar contadores de tráfico (`squidclient mgr:counters`) y purgar objetos específicos de la caché (`squidclient -m PURGE http://url`).

</details>

---

### Pregunta 21

¿Qué comando verifica la sintaxis del archivo de configuración de Squid sin iniciar el servicio?

<input type="text" class="fill-blank" data-answer="squid -k parse" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**squid -k parse**

El comando `squid -k parse` lee y analiza el archivo de configuración `squid.conf` reportando errores de sintaxis o directivas desconocidas sin iniciar ni afectar al servicio en ejecución. Es recomendable ejecutarlo después de cada modificación del archivo de configuración y antes de aplicar cambios con `squid -k reconfigure`.

</details>

---

### Pregunta 22

¿Qué comando rota los archivos de log de Squid?

<input type="text" class="fill-blank" data-answer="squid -k rotate" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**squid -k rotate**

El comando `squid -k rotate` cierra los archivos de log actuales, los renombra añadiendo un sufijo numérico (access.log.0, access.log.1, etc.) y abre nuevos archivos de log. Esto permite gestionar el tamaño de los logs sin interrumpir el servicio. Se puede automatizar con una tarea cron o un temporizador de systemd.

</details>

---

### Pregunta 23

¿Qué comando inicializa la estructura de directorios de caché de Squid?

<input type="text" class="fill-blank" data-answer="squid -z" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**squid -z**

El comando `squid -z` crea la estructura de subdirectorios de la caché en disco según la configuración de `cache_dir` en `squid.conf`. Debe ejecutarse antes del primer inicio de Squid y cada vez que se cambie la configuración de `cache_dir`. Los directorios se crean con los niveles L1 y L2 especificados (por ejemplo, 16 y 256).

</details>

---

### Pregunta 24

¿Qué comando de Squid recarga la configuración sin interrumpir las conexiones activas?

<input type="text" class="fill-blank" data-answer="squid -k reconfigure" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**squid -k reconfigure**

El comando `squid -k reconfigure` envía la señal SIGHUP al proceso Squid, haciendo que relea su archivo de configuración sin reiniciar el servicio ni interrumpir las conexiones activas. Los cambios se aplican inmediatamente para las nuevas conexiones. Es equivalente a `systemctl reload squid` en sistemas con systemd.

</details>

---

### Pregunta 25

¿Qué comando permite purgar un objeto específico de la caché de Squid?

<input type="text" class="fill-blank" data-answer="squidclient -m PURGE" data-alt="squidclient -m PURGE http://url" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**squidclient -m PURGE**

El comando `squidclient -m PURGE http://url` envía una solicitud HTTP con el método PURGE a Squid para eliminar un objeto específico de la caché. Por ejemplo: `squidclient -m PURGE http://www.ejemplo.com/imagen.jpg`. Para que funcione, se debe configurar una ACL que permita el método PURGE desde la dirección del administrador.

</details>

---
