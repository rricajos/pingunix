---
title: "208.4 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "208.4"
---

# Flashcards: 208.4 - Nginx Web Y Proxy Inverso

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es la estructura jerárquica correcta de los bloques de configuración en Nginx?

</div>
<div class="flashcard-back">

**R:** b) main → http → server → location. La configuración de Nginx tiene una estructura jerárquica: el contexto `main` (global) contiene los bloques `events` y `http`. Dentro de `http` se definen bloques `server` (equivalentes a VirtualHosts), y dentro de `server` se definen bloques `location` para gestionar las peticiones según la URI.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx se utiliza para definir el número de conexiones simultáneas que puede manejar cada proceso worker?

</div>
<div class="flashcard-back">

**R:** c) worker_connections. La directiva `worker_connections` se define dentro del bloque `events` y especifica el número máximo de conexiones simultáneas que cada proceso worker puede manejar. El número total teórico de conexiones es `worker_processes * worker_connections`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx se utiliza para reenviar peticiones a un servidor backend?

</div>
<div class="flashcard-back">

**R:** c) proxy_pass. La directiva `proxy_pass` dentro de un bloque `location` reenvía las peticiones al servidor backend especificado. Por ejemplo, `proxy_pass http://127.0.0.1:8080;` envía todas las peticiones coincidentes al servidor que escucha en el puerto 8080 de localhost.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué hace la directiva `try_files $uri $uri/ =404;` en Nginx?

</div>
<div class="flashcard-back">

**R:** b) Intenta servir el archivo, luego busca un directorio con ese nombre, y si ninguno existe devuelve un error 404. `try_files` intenta servir los recursos en el orden especificado: primero el archivo correspondiente a `$uri`, luego un directorio `$uri/` (lo que buscaría el archivo índice dentro), y si ninguno existe, devuelve un código de error 404. El último argumento siempre es la acción de fallback.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué método de balanceo de carga en Nginx garantiza que las peticiones de un mismo cliente siempre se dirijan al mismo servidor backend?

</div>
<div class="flashcard-back">

**R:** c) ip_hash. El método `ip_hash` utiliza la dirección IP del cliente para determinar a qué servidor backend se dirige la petición. Esto garantiza que las peticiones del mismo cliente siempre vayan al mismo servidor, lo que es útil para mantener la persistencia de sesión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es el orden correcto de prioridad de los modificadores de `location` en Nginx, de mayor a menor?

</div>
<div class="flashcard-back">

**R:** b) `=` > `^~` > `~`/`~*` > prefijo normal. El orden de prioridad es: coincidencia exacta (`=`) tiene la mayor prioridad, seguida del prefijo preferente (`^~`) que detiene la búsqueda de expresiones regulares, luego las expresiones regulares (`~` sensible y `~*` insensible a mayúsculas) en orden de aparición, y finalmente el prefijo normal con la menor prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando de Nginx verifica la sintaxis de la configuración sin reiniciar el servicio?

</div>
<div class="flashcard-back">

**R:** b) nginx -t. El comando `nginx -t` analiza todos los archivos de configuración y reporta errores de sintaxis sin afectar al servicio en ejecución. Es una práctica recomendada ejecutarlo siempre antes de `nginx -s reload` para evitar que un error de configuración interrumpa el servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-008">
<div class="flashcard-front">

**P:** En un bloque `upstream`, ¿qué significa marcar un servidor con la opción `backup`?

</div>
<div class="flashcard-back">

**R:** b) El servidor solo recibe peticiones cuando todos los demás servidores no están disponibles. Un servidor marcado con `backup` en un bloque `upstream` actúa como reserva. Solo recibe tráfico cuando todos los servidores principales (no marcados como `backup` ni `down`) están inactivos o no responden. Es útil para implementar alta disponibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx se utiliza para redirigir todo el tráfico HTTP al puerto 80 hacia HTTPS?

</div>
<div class="flashcard-back">

**R:** c) `return 301 https://$host$request_uri;`. La directiva `return 301` es la forma más eficiente y recomendada de redirigir en Nginx. Es más rápida que `rewrite` porque no necesita evaluar expresiones regulares. El código 301 indica una redirección permanente. La opción b) también funcionaría pero es menos eficiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere configurar Nginx para que sirva archivos estáticos desde `/var/www/static` cuando se accede a la URL `/assets/`. ¿Qué configuración es correcta?

</div>
<div class="flashcard-back">

**R:** b) `location /assets/ { alias /var/www/static/; }`. La directiva `alias` reemplaza completamente la parte de la URI que coincide con el `location`. Así, `/assets/imagen.jpg` se sirve desde `/var/www/static/imagen.jpg`. Si se usara `root /var/www/static`, Nginx buscaría en `/var/www/static/assets/imagen.jpg`, añadiendo la URI completa a la ruta, que no es lo deseado en este caso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx define el número de procesos worker que se ejecutarán?

</div>
<div class="flashcard-back">

**R:** b) worker_processes. La directiva `worker_processes` define cuántos procesos worker ejecutará Nginx. El valor `auto` configura automáticamente un proceso por cada núcleo de CPU disponible. El número máximo teórico de conexiones simultáneas es `worker_processes * worker_connections`. Se define en el contexto principal (main) del archivo `nginx.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-012">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre las directivas `root` y `alias` en un bloque `location` de Nginx?

</div>
<div class="flashcard-back">

**R:** b) `root` añade la URI completa a la ruta especificada y `alias` reemplaza la parte coincidente del location. Con `root /var/www` en un `location /images/`, la petición `/images/foto.jpg` busca en `/var/www/images/foto.jpg`. Con `alias /var/www/fotos/`, la misma petición busca en `/var/www/fotos/foto.jpg`, reemplazando `/images/` por la ruta del alias. Esta diferencia es fundamental para configurar correctamente la ubicación de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué modificador de `location` en Nginx realiza una coincidencia exacta con la URI y tiene la máxima prioridad?

</div>
<div class="flashcard-back">

**R:** c) `=`. El modificador `=` realiza una coincidencia exacta con la URI solicitada y tiene la máxima prioridad entre todos los tipos de `location`. Por ejemplo, `location = /favicon.ico` solo coincide con la petición exacta `/favicon.ico`. Si se encuentra una coincidencia exacta, Nginx deja de buscar otras coincidencias, lo que mejora el rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-014">
<div class="flashcard-front">

**P:** En un bloque `upstream` de Nginx, ¿qué método de balanceo envía la petición al servidor con menos conexiones activas?

</div>
<div class="flashcard-back">

**R:** c) least_conn. El método `least_conn` distribuye las peticiones al servidor backend que tenga menos conexiones activas en ese momento. Se activa añadiendo la directiva `least_conn;` dentro del bloque `upstream`. Es útil cuando las peticiones tienen tiempos de procesamiento variables, ya que evita sobrecargar servidores que están atendiendo peticiones lentas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué valor especial del `server_name` en Nginx se usa para capturar todas las peticiones que no coincidan con ningún otro bloque `server`?

</div>
<div class="flashcard-back">

**R:** c) `_`. El valor `_` (guion bajo) se usa como nombre de servidor inválido que no coincide con ningún nombre de host real. Se combina con `listen 80 default_server;` para crear un bloque servidor que capture todas las peticiones no coincidentes. Se puede usar `return 444;` dentro para cerrar la conexión sin respuesta a peticiones no deseadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué cabecera se debe configurar con `proxy_set_header` en Nginx para que el servidor backend conozca la IP real del cliente?

</div>
<div class="flashcard-back">

**R:** b) `X-Real-IP`. La cabecera `X-Real-IP` se configura con `proxy_set_header X-Real-IP $remote_addr;` para transmitir la dirección IP real del cliente al servidor backend. Sin esta cabecera, el backend solo vería la IP del proxy inverso (Nginx). También se suele configurar `X-Forwarded-For` con `$proxy_add_x_forwarded_for` para mantener la cadena completa de proxies intermedios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué señal envía `nginx -s reload` al proceso maestro de Nginx?

</div>
<div class="flashcard-back">

**R:** c) SIGHUP. El comando `nginx -s reload` envía la señal SIGHUP al proceso maestro de Nginx. El proceso maestro verifica la sintaxis de la configuración, abre nuevos sockets de escucha si es necesario, e inicia nuevos procesos worker con la nueva configuración. Los workers antiguos terminan de procesar las peticiones actuales y luego se cierran de forma ordenada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx configura los protocolos SSL/TLS permitidos para un servidor HTTPS?

</div>
<div class="flashcard-back">

**R:** b) ssl_protocols. La directiva `ssl_protocols` especifica las versiones de SSL/TLS que el servidor acepta. Por ejemplo, `ssl_protocols TLSv1.2 TLSv1.3;` permite solo las versiones seguras. Se usa junto con `ssl_ciphers` para definir los algoritmos de cifrado permitidos y `ssl_prefer_server_ciphers on;` para que el servidor determine el orden de preferencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx se utiliza dentro de un bloque `server` para habilitar SSL y especificar el puerto de escucha HTTPS?

</div>
<div class="flashcard-back">

**R:** b) `listen 443 ssl;`. La directiva `listen 443 ssl;` indica a Nginx que escuche en el puerto 443 y active el soporte SSL/TLS para ese bloque `server`. El parámetro `ssl` es parte de la directiva `listen` y es la forma moderna de habilitar HTTPS. La directiva `ssl on;` está obsoleta desde Nginx 1.15.0 y no debe usarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directiva de Nginx permite definir un formato de log personalizado?

</div>
<div class="flashcard-back">

**R:** b) log_format. La directiva `log_format` define un formato de log personalizado con un nombre y las variables a incluir. Por ejemplo: `log_format main '$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent';`. Después se referencia con `access_log /ruta/log main;`. Se define en el contexto `http` del archivo de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando verifica la sintaxis de la configuración de Nginx antes de recargar el servicio?

</div>
<div class="flashcard-back">

**R:** nginx -t. El comando `nginx -t` analiza todos los archivos de configuración de Nginx y reporta errores de sintaxis sin afectar al servicio en ejecución. Si la configuración es válida, muestra `syntax is ok` y `test is successful`. Es una práctica obligatoria ejecutarlo siempre antes de `nginx -s reload` para evitar interrupciones del servicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando recarga la configuración de Nginx sin detener el servicio?

</div>
<div class="flashcard-back">

**R:** nginx -s reload. El comando `nginx -s reload` envía la señal SIGHUP al proceso maestro de Nginx para que recargue la configuración. Los nuevos procesos worker se crean con la configuración actualizada mientras los antiguos terminan de atender las peticiones en curso. También se puede usar `systemctl reload nginx` en sistemas con systemd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando detiene el servicio Nginx de forma ordenada permitiendo que los workers terminen las peticiones actuales?

</div>
<div class="flashcard-back">

**R:** nginx -s quit. El comando `nginx -s quit` envía la señal SIGQUIT al proceso maestro, lo que provoca una parada ordenada (graceful shutdown). Los procesos worker dejan de aceptar nuevas conexiones pero terminan de atender las peticiones en curso antes de cerrarse. Para una parada inmediata se usa `nginx -s stop` que envía SIGTERM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando muestra la versión de Nginx junto con las opciones de compilación y los módulos incluidos?

</div>
<div class="flashcard-back">

**R:** nginx -V. El comando `nginx -V` (con V mayúscula) muestra la versión de Nginx, las opciones de compilación, los argumentos de configure y los módulos compilados. Para ver solo la versión sin detalles de compilación se usa `nginx -v` (con v minúscula). Esta información es útil para verificar qué módulos están disponibles y con qué opciones se compiló Nginx.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de Nginx redirige todo el tráfico HTTP a HTTPS usando el código de estado 301 dentro de un bloque server?

</div>
<div class="flashcard-back">

**R:** return 301 https://$host$request_uri;. La directiva `return 301 https://$host$request_uri;` dentro de un bloque `server` que escucha en el puerto 80 redirige todas las peticiones HTTP a su equivalente HTTPS con un código 301 (redirección permanente). La variable `$host` mantiene el nombre de host original y `$request_uri` conserva la URI completa incluyendo parámetros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La configuración de Nginx es jerárquica: `main` (global) contiene `events` y `ht...

</div>
<div class="flashcard-back">

**R:** La configuración de Nginx es jerárquica: `main` (global) contiene `events` y `http`. Dentro de `http` se definen bloques `server` (equivalentes a VirtualHosts de Apache), y dentro de `server` se definen bloques `location`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El número máximo teórico de conexiones simultáneas es `worker_processes * worker...

</div>
<div class="flashcard-back">

**R:** El número máximo teórico de conexiones simultáneas es `worker_processes * worker_connections`. Con 4 workers y 1024 conexiones cada uno, se pueden manejar hasta 4096 conexiones simultáneas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: El orden de prioridad de las directivas `location` es: exacta (`=`) > prefijo pr...

</div>
<div class="flashcard-back">

**R:** El orden de prioridad de las directivas `location` es: exacta (`=`) > prefijo preferente (`^~`) > expresión regular (`~`/`~*`) > prefijo normal. Dentro de las regex, se usa la primera que coincida en el orden del archivo de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: El método `ip_hash` es útil para mantener la persistencia de sesión, ya que aseg...

</div>
<div class="flashcard-back">

**R:** El método `ip_hash` es útil para mantener la persistencia de sesión, ya que asegura que las peticiones del mismo cliente siempre se dirijan al mismo servidor backend.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `Host`?

</div>
<div class="flashcard-back">

**R:** Nombre de host original de la petición

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `X-Forwarded-For`?

</div>
<div class="flashcard-back">

**R:** Cadena de IPs de proxies intermedios

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son Bloques location?

</div>
<div class="flashcard-back">

**R:** Los bloques `location` determinan cómo Nginx procesa las peticiones según la URI solicitada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-033">
<div class="flashcard-front">

**P:** Que es/son Directiva try_files?

</div>
<div class="flashcard-back">

**R:** `try_files` intenta servir archivos en un orden específico y, si ninguno existe, ejecuta una acción alternativa.

</div>
</div>

---

