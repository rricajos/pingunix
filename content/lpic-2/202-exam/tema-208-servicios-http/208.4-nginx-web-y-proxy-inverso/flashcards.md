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

> 20 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

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

**P:** Tip de examen: La configuración de Nginx es jerárquica: `main` (global) contiene `events` y `ht...

</div>
<div class="flashcard-back">

**R:** La configuración de Nginx es jerárquica: `main` (global) contiene `events` y `http`. Dentro de `http` se definen bloques `server` (equivalentes a VirtualHosts de Apache), y dentro de `server` se definen bloques `location`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-012">
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

<div class="flashcard" data-id="208.4-fc-013">
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

<div class="flashcard" data-id="208.4-fc-014">
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

<div class="flashcard" data-id="208.4-fc-015">
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

<div class="flashcard" data-id="208.4-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `X-Real-IP`?

</div>
<div class="flashcard-back">

**R:** IP real del cliente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-017">
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

<div class="flashcard" data-id="208.4-fc-018">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Nginx es un servidor web y proxy inverso de alto rendimiento conocido por su arquitectura basada en eventos, bajo consumo de recursos y capacidad para manejar miles de conexiones simultáneas. Además de

</div>
</div>

---

<div class="flashcard-deck" data-subtema="208.4">
</div>

<div class="flashcard" data-id="208.4-fc-019">
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

<div class="flashcard" data-id="208.4-fc-020">
<div class="flashcard-front">

**P:** Que es/son Directiva try_files?

</div>
<div class="flashcard-back">

**R:** `try_files` intenta servir archivos en un orden específico y, si ninguno existe, ejecuta una acción alternativa.

</div>
</div>

---

