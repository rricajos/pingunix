---
title: "208.4 - Nginx como servidor web y proxy inverso"
tags: [lpic-2, examen-202, tema-208, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "208"
subtema: "208.4"
---

# 208.4 - Ejercicios: Nginx como servidor web y proxy inverso

### Pregunta 1
¿Cuál es la estructura jerárquica correcta de los bloques de configuración en Nginx?

a) http → events → server → location
b) main → http → server → location
c) global → server → http → location
d) server → http → location → upstream

<details>
<summary>Respuesta</summary>

**b) main → http → server → location**

La configuración de Nginx tiene una estructura jerárquica: el contexto `main` (global) contiene los bloques `events` y `http`. Dentro de `http` se definen bloques `server` (equivalentes a VirtualHosts), y dentro de `server` se definen bloques `location` para gestionar las peticiones según la URI.
</details>

---

### Pregunta 2
¿Qué directiva de Nginx se utiliza para definir el número de conexiones simultáneas que puede manejar cada proceso worker?

a) max_connections
b) worker_processes
c) worker_connections
d) connection_limit

<details>
<summary>Respuesta</summary>

**c) worker_connections**

La directiva `worker_connections` se define dentro del bloque `events` y especifica el número máximo de conexiones simultáneas que cada proceso worker puede manejar. El número total teórico de conexiones es `worker_processes * worker_connections`.
</details>

---

### Pregunta 3
¿Qué directiva de Nginx se utiliza para reenviar peticiones a un servidor backend?

a) backend_pass
b) forward_to
c) proxy_pass
d) upstream_pass

<details>
<summary>Respuesta</summary>

**c) proxy_pass**

La directiva `proxy_pass` dentro de un bloque `location` reenvía las peticiones al servidor backend especificado. Por ejemplo, `proxy_pass http://127.0.0.1:8080;` envía todas las peticiones coincidentes al servidor que escucha en el puerto 8080 de localhost.
</details>

---

### Pregunta 4
¿Qué hace la directiva `try_files $uri $uri/ =404;` en Nginx?

a) Intenta crear el archivo solicitado, luego un directorio, y si falla devuelve un error 404
b) Intenta servir el archivo, luego busca un directorio con ese nombre, y si ninguno existe devuelve un error 404
c) Redirige todas las peticiones al archivo 404.html
d) Busca el archivo en tres ubicaciones diferentes

<details>
<summary>Respuesta</summary>

**b) Intenta servir el archivo, luego busca un directorio con ese nombre, y si ninguno existe devuelve un error 404**

`try_files` intenta servir los recursos en el orden especificado: primero el archivo correspondiente a `$uri`, luego un directorio `$uri/` (lo que buscaría el archivo índice dentro), y si ninguno existe, devuelve un código de error 404. El último argumento siempre es la acción de fallback.
</details>

---

### Pregunta 5
¿Qué método de balanceo de carga en Nginx garantiza que las peticiones de un mismo cliente siempre se dirijan al mismo servidor backend?

a) round_robin
b) least_conn
c) ip_hash
d) sticky

<details>
<summary>Respuesta</summary>

**c) ip_hash**

El método `ip_hash` utiliza la dirección IP del cliente para determinar a qué servidor backend se dirige la petición. Esto garantiza que las peticiones del mismo cliente siempre vayan al mismo servidor, lo que es útil para mantener la persistencia de sesión.
</details>

---

### Pregunta 6
¿Cuál es el orden correcto de prioridad de los modificadores de `location` en Nginx, de mayor a menor?

a) `~` > `^~` > `=` > prefijo normal
b) `=` > `^~` > `~`/`~*` > prefijo normal
c) `^~` > `=` > `~`/`~*` > prefijo normal
d) prefijo normal > `~`/`~*` > `^~` > `=`

<details>
<summary>Respuesta</summary>

**b) `=` > `^~` > `~`/`~*` > prefijo normal**

El orden de prioridad es: coincidencia exacta (`=`) tiene la mayor prioridad, seguida del prefijo preferente (`^~`) que detiene la búsqueda de expresiones regulares, luego las expresiones regulares (`~` sensible y `~*` insensible a mayúsculas) en orden de aparición, y finalmente el prefijo normal con la menor prioridad.
</details>

---

### Pregunta 7
¿Qué comando de Nginx verifica la sintaxis de la configuración sin reiniciar el servicio?

a) nginx -c
b) nginx -t
c) nginx -s check
d) nginx --verify

<details>
<summary>Respuesta</summary>

**b) nginx -t**

El comando `nginx -t` analiza todos los archivos de configuración y reporta errores de sintaxis sin afectar al servicio en ejecución. Es una práctica recomendada ejecutarlo siempre antes de `nginx -s reload` para evitar que un error de configuración interrumpa el servicio.
</details>

---

### Pregunta 8
En un bloque `upstream`, ¿qué significa marcar un servidor con la opción `backup`?

a) El servidor almacena una copia de seguridad de los datos
b) El servidor solo recibe peticiones cuando todos los demás servidores no están disponibles
c) El servidor tiene prioridad sobre los demás
d) El servidor se utiliza para replicar la configuración

<details>
<summary>Respuesta</summary>

**b) El servidor solo recibe peticiones cuando todos los demás servidores no están disponibles**

Un servidor marcado con `backup` en un bloque `upstream` actúa como reserva. Solo recibe tráfico cuando todos los servidores principales (no marcados como `backup` ni `down`) están inactivos o no responden. Es útil para implementar alta disponibilidad.
</details>

---

### Pregunta 9
¿Qué directiva de Nginx se utiliza para redirigir todo el tráfico HTTP al puerto 80 hacia HTTPS?

a) `redirect 301 https://$host$request_uri;`
b) `rewrite ^ https://$host$request_uri permanent;`
c) `return 301 https://$host$request_uri;`
d) `proxy_pass https://$host$request_uri;`

<details>
<summary>Respuesta</summary>

**c) `return 301 https://$host$request_uri;`**

La directiva `return 301` es la forma más eficiente y recomendada de redirigir en Nginx. Es más rápida que `rewrite` porque no necesita evaluar expresiones regulares. El código 301 indica una redirección permanente. La opción b) también funcionaría pero es menos eficiente.
</details>

---

### Pregunta 10
Un administrador quiere configurar Nginx para que sirva archivos estáticos desde `/var/www/static` cuando se accede a la URL `/assets/`. ¿Qué configuración es correcta?

a) `location /assets/ { root /var/www/static; }`
b) `location /assets/ { alias /var/www/static/; }`
c) `location /assets/ { document_root /var/www/static; }`
d) `location /assets/ { proxy_pass /var/www/static; }`

<details>
<summary>Respuesta</summary>

**b) `location /assets/ { alias /var/www/static/; }`**

La directiva `alias` reemplaza completamente la parte de la URI que coincide con el `location`. Así, `/assets/imagen.jpg` se sirve desde `/var/www/static/imagen.jpg`. Si se usara `root /var/www/static`, Nginx buscaría en `/var/www/static/assets/imagen.jpg`, añadiendo la URI completa a la ruta, que no es lo deseado en este caso.
</details>

---

### Pregunta 11

¿Qué directiva de Nginx define el número de procesos worker que se ejecutarán?

a) max_workers
b) worker_processes
c) process_count
d) num_workers

<details><summary>Respuesta</summary>

**b) worker_processes**

La directiva `worker_processes` define cuántos procesos worker ejecutará Nginx. El valor `auto` configura automáticamente un proceso por cada núcleo de CPU disponible. El número máximo teórico de conexiones simultáneas es `worker_processes * worker_connections`. Se define en el contexto principal (main) del archivo `nginx.conf`.

</details>

---

### Pregunta 12

¿Cuál es la diferencia entre las directivas `root` y `alias` en un bloque `location` de Nginx?

a) `root` reemplaza la URI y `alias` la añade
b) `root` añade la URI completa a la ruta especificada y `alias` reemplaza la parte coincidente del location
c) No hay diferencia, son sinónimos
d) `root` solo funciona con archivos estáticos y `alias` con archivos dinámicos

<details><summary>Respuesta</summary>

**b) `root` añade la URI completa a la ruta especificada y `alias` reemplaza la parte coincidente del location**

Con `root /var/www` en un `location /images/`, la petición `/images/foto.jpg` busca en `/var/www/images/foto.jpg`. Con `alias /var/www/fotos/`, la misma petición busca en `/var/www/fotos/foto.jpg`, reemplazando `/images/` por la ruta del alias. Esta diferencia es fundamental para configurar correctamente la ubicación de archivos.

</details>

---

### Pregunta 13

¿Qué modificador de `location` en Nginx realiza una coincidencia exacta con la URI y tiene la máxima prioridad?

a) `^~`
b) `~`
c) `=`
d) `~*`

<details><summary>Respuesta</summary>

**c) `=`**

El modificador `=` realiza una coincidencia exacta con la URI solicitada y tiene la máxima prioridad entre todos los tipos de `location`. Por ejemplo, `location = /favicon.ico` solo coincide con la petición exacta `/favicon.ico`. Si se encuentra una coincidencia exacta, Nginx deja de buscar otras coincidencias, lo que mejora el rendimiento.

</details>

---

### Pregunta 14

En un bloque `upstream` de Nginx, ¿qué método de balanceo envía la petición al servidor con menos conexiones activas?

a) round_robin
b) fair
c) least_conn
d) min_active

<details><summary>Respuesta</summary>

**c) least_conn**

El método `least_conn` distribuye las peticiones al servidor backend que tenga menos conexiones activas en ese momento. Se activa añadiendo la directiva `least_conn;` dentro del bloque `upstream`. Es útil cuando las peticiones tienen tiempos de procesamiento variables, ya que evita sobrecargar servidores que están atendiendo peticiones lentas.

</details>

---

### Pregunta 15

¿Qué valor especial del `server_name` en Nginx se usa para capturar todas las peticiones que no coincidan con ningún otro bloque `server`?

a) `*`
b) `default`
c) `_`
d) `any`

<details><summary>Respuesta</summary>

**c) `_`**

El valor `_` (guion bajo) se usa como nombre de servidor inválido que no coincide con ningún nombre de host real. Se combina con `listen 80 default_server;` para crear un bloque servidor que capture todas las peticiones no coincidentes. Se puede usar `return 444;` dentro para cerrar la conexión sin respuesta a peticiones no deseadas.

</details>

---

### Pregunta 16

¿Qué cabecera se debe configurar con `proxy_set_header` en Nginx para que el servidor backend conozca la IP real del cliente?

a) `X-Client-IP`
b) `X-Real-IP`
c) `Client-Address`
d) `Original-IP`

<details><summary>Respuesta</summary>

**b) `X-Real-IP`**

La cabecera `X-Real-IP` se configura con `proxy_set_header X-Real-IP $remote_addr;` para transmitir la dirección IP real del cliente al servidor backend. Sin esta cabecera, el backend solo vería la IP del proxy inverso (Nginx). También se suele configurar `X-Forwarded-For` con `$proxy_add_x_forwarded_for` para mantener la cadena completa de proxies intermedios.

</details>

---

### Pregunta 17

¿Qué señal envía `nginx -s reload` al proceso maestro de Nginx?

a) SIGTERM
b) SIGUSR1
c) SIGHUP
d) SIGQUIT

<details><summary>Respuesta</summary>

**c) SIGHUP**

El comando `nginx -s reload` envía la señal SIGHUP al proceso maestro de Nginx. El proceso maestro verifica la sintaxis de la configuración, abre nuevos sockets de escucha si es necesario, e inicia nuevos procesos worker con la nueva configuración. Los workers antiguos terminan de procesar las peticiones actuales y luego se cierran de forma ordenada.

</details>

---

### Pregunta 18

¿Qué directiva de Nginx configura los protocolos SSL/TLS permitidos para un servidor HTTPS?

a) ssl_versions
b) ssl_protocols
c) ssl_allowed
d) tls_versions

<details><summary>Respuesta</summary>

**b) ssl_protocols**

La directiva `ssl_protocols` especifica las versiones de SSL/TLS que el servidor acepta. Por ejemplo, `ssl_protocols TLSv1.2 TLSv1.3;` permite solo las versiones seguras. Se usa junto con `ssl_ciphers` para definir los algoritmos de cifrado permitidos y `ssl_prefer_server_ciphers on;` para que el servidor determine el orden de preferencia.

</details>

---

### Pregunta 19

¿Qué directiva de Nginx se utiliza dentro de un bloque `server` para habilitar SSL y especificar el puerto de escucha HTTPS?

a) `listen 443 https;`
b) `listen 443 ssl;`
c) `ssl_listen 443;`
d) `listen 443; ssl on;`

<details><summary>Respuesta</summary>

**b) `listen 443 ssl;`**

La directiva `listen 443 ssl;` indica a Nginx que escuche en el puerto 443 y active el soporte SSL/TLS para ese bloque `server`. El parámetro `ssl` es parte de la directiva `listen` y es la forma moderna de habilitar HTTPS. La directiva `ssl on;` está obsoleta desde Nginx 1.15.0 y no debe usarse.

</details>

---

### Pregunta 20

¿Qué directiva de Nginx permite definir un formato de log personalizado?

a) access_log_format
b) log_format
c) custom_log
d) format_log

<details><summary>Respuesta</summary>

**b) log_format**

La directiva `log_format` define un formato de log personalizado con un nombre y las variables a incluir. Por ejemplo: `log_format main '$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent';`. Después se referencia con `access_log /ruta/log main;`. Se define en el contexto `http` del archivo de configuración.

</details>

---

### Pregunta 21

¿Qué comando verifica la sintaxis de la configuración de Nginx antes de recargar el servicio?

<input type="text" class="fill-blank" data-answer="nginx -t" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nginx -t**

El comando `nginx -t` analiza todos los archivos de configuración de Nginx y reporta errores de sintaxis sin afectar al servicio en ejecución. Si la configuración es válida, muestra `syntax is ok` y `test is successful`. Es una práctica obligatoria ejecutarlo siempre antes de `nginx -s reload` para evitar interrupciones del servicio.

</details>

---

### Pregunta 22

¿Qué comando recarga la configuración de Nginx sin detener el servicio?

<input type="text" class="fill-blank" data-answer="nginx -s reload" data-alt="systemctl reload nginx" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nginx -s reload**

El comando `nginx -s reload` envía la señal SIGHUP al proceso maestro de Nginx para que recargue la configuración. Los nuevos procesos worker se crean con la configuración actualizada mientras los antiguos terminan de atender las peticiones en curso. También se puede usar `systemctl reload nginx` en sistemas con systemd.

</details>

---

### Pregunta 23

¿Qué comando detiene el servicio Nginx de forma ordenada permitiendo que los workers terminen las peticiones actuales?

<input type="text" class="fill-blank" data-answer="nginx -s quit" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nginx -s quit**

El comando `nginx -s quit` envía la señal SIGQUIT al proceso maestro, lo que provoca una parada ordenada (graceful shutdown). Los procesos worker dejan de aceptar nuevas conexiones pero terminan de atender las peticiones en curso antes de cerrarse. Para una parada inmediata se usa `nginx -s stop` que envía SIGTERM.

</details>

---

### Pregunta 24

¿Qué comando muestra la versión de Nginx junto con las opciones de compilación y los módulos incluidos?

<input type="text" class="fill-blank" data-answer="nginx -V" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nginx -V**

El comando `nginx -V` (con V mayúscula) muestra la versión de Nginx, las opciones de compilación, los argumentos de configure y los módulos compilados. Para ver solo la versión sin detalles de compilación se usa `nginx -v` (con v minúscula). Esta información es útil para verificar qué módulos están disponibles y con qué opciones se compiló Nginx.

</details>

---

### Pregunta 25

¿Qué comando de Nginx redirige todo el tráfico HTTP a HTTPS usando el código de estado 301 dentro de un bloque server?

<input type="text" class="fill-blank" data-answer="return 301 https://$host$request_uri;" data-alt="return 301 https://$host$request_uri" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**return 301 https://$host$request_uri;**

La directiva `return 301 https://$host$request_uri;` dentro de un bloque `server` que escucha en el puerto 80 redirige todas las peticiones HTTP a su equivalente HTTPS con un código 301 (redirección permanente). La variable `$host` mantiene el nombre de host original y `$request_uri` conserva la URI completa incluyendo parámetros.

</details>

---
