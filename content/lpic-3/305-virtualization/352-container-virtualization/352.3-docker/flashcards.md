---
title: "352.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "352.3"
---

# Flashcards: 352.3 - Docker

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre las instrucciones `CMD` y `ENTRYPOINT` en un Dockerfile?

</div>
<div class="flashcard-back">

**R:** c) `ENTRYPOINT` define el ejecutable principal; `CMD` proporciona argumentos por defecto que pueden sobrescribirse. `ENTRYPOINT` define el ejecutable que siempre se ejecuta. `CMD` proporciona argumentos por defecto que se pasan a `ENTRYPOINT` y pueden ser sobrescritos al hacer `docker run imagen nuevos-args`. `ENTRYPOINT` solo se sobrescribe con `--entrypoint`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué ventaja proporcionan los multi-stage builds en un Dockerfile?

</div>
<div class="flashcard-back">

**R:** c) Reducen el tamaño de la imagen final al separar las etapas de compilación y ejecución. Los multi-stage builds permiten usar una imagen con herramientas de compilación en la primera etapa y copiar solo el binario resultante a una imagen mínima final. `COPY --from=builder` copia archivos de una etapa anterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-003">
<div class="flashcard-front">

**P:** ¿Qué tipo de red Docker permite la resolución DNS automática de contenedores por nombre?

</div>
<div class="flashcard-back">

**R:** c) Una red bridge personalizada (user-defined). Las redes bridge personalizadas (creadas con `docker network create`) incluyen un servidor DNS interno que permite a los contenedores resolverse por nombre. La red bridge por defecto (`docker0`) no ofrece esta funcionalidad; solo permite comunicación por IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué hace el archivo `.dockerignore`?

</div>
<div class="flashcard-back">

**R:** b) Excluye archivos y directorios del contexto de build enviado al daemon. `.dockerignore` funciona como `.gitignore`: excluye archivos del contexto de build. Esto reduce el tamaño del contexto enviado al daemon, acelera la construcción y evita incluir archivos sensibles (.env, .git, node_modules) en la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando ejecuta un proceso bash interactivo dentro de un contenedor Docker ya en ejecución?

</div>
<div class="flashcard-back">

**R:** c) `docker exec -it contenedor bash`. `docker exec` ejecuta un nuevo proceso dentro de un contenedor en ejecución. `-i` mantiene stdin abierto y `-t` asigna un pseudo-TTY. `docker run` crearía un nuevo contenedor. `docker attach` conecta al proceso principal del contenedor, no crea uno nuevo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre un volumen Docker y un bind mount?

</div>
<div class="flashcard-back">

**R:** b) Los volúmenes son gestionados por Docker; los bind mounts mapean una ruta específica del host. Los volúmenes Docker son creados y gestionados por Docker (almacenados en `/var/lib/docker/volumes/`). Los bind mounts mapean directamente un directorio o archivo del host al contenedor. Los volúmenes son más portátiles y recomendados para datos persistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué comando detiene todos los servicios definidos en un docker-compose.yml y elimina los volúmenes asociados?

</div>
<div class="flashcard-back">

**R:** b) `docker compose down -v`. `docker compose down` detiene y elimina contenedores, redes y la configuración creada por `up`. La opción `-v` (o `--volumes`) también elimina los volúmenes nombrados definidos en la sección `volumes` del archivo compose.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué instrucción del Dockerfile se recomienda en lugar de `ADD` para copiar archivos locales?

</div>
<div class="flashcard-back">

**R:** b) `COPY`. `COPY` es la instrucción recomendada para copiar archivos locales al contenedor. `ADD` tiene funcionalidad extra (descomprimir tar, descargar URLs) que puede causar comportamientos inesperados. `ADD` solo se justifica cuando se necesita específicamente la descompresión automática de archivos tar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué opción de `docker run` hace que el contenedor se elimine automáticamente cuando se detiene?

</div>
<div class="flashcard-back">

**R:** b) `--rm`. La opción `--rm` elimina automáticamente el contenedor y su filesystem cuando el proceso principal sale. Es útil para contenedores efímeros usados en pruebas o ejecuciones puntuales: `docker run -it --rm ubuntu bash`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando elimina contenedores detenidos, redes no usadas, imágenes sin referencia y caché de build?

</div>
<div class="flashcard-back">

**R:** b) `docker system prune`. `docker system prune` elimina todos los recursos no utilizados: contenedores detenidos, redes sin contenedores, imágenes dangling y caché de build. Con `--volumes` también elimina volúmenes no usados. `docker system df` muestra el uso de disco antes de limpiar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué instrucción del Dockerfile define una comprobación periódica del estado de salud del contenedor?

</div>
<div class="flashcard-back">

**R:** c) `HEALTHCHECK`. `HEALTHCHECK` define un comando que Docker ejecutará periódicamente para verificar que el contenedor funciona correctamente. Opciones como `--interval`, `--timeout` y `--retries` controlan la frecuencia y tolerancia. Ejemplo: `HEALTHCHECK --interval=30s CMD curl -f http://localhost/ || exit 1`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué opción de `docker run` establece una política de reinicio para que el contenedor se reinicie siempre excepto cuando se detiene manualmente?

</div>
<div class="flashcard-back">

**R:** b) `--restart unless-stopped`. `--restart unless-stopped` reinicia el contenedor automáticamente si se detiene por cualquier razón, excepto cuando fue detenido manualmente con `docker stop`. A diferencia de `always`, no reinicia el contenedor tras un reinicio del daemon Docker si fue detenido manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué tipo de red Docker permite que el contenedor comparta directamente la pila de red del host?

</div>
<div class="flashcard-back">

**R:** c) host. La red `host` elimina el aislamiento de red entre el contenedor y el host. El contenedor comparte directamente la pila de red del host, incluyendo interfaces, puertos e IP. No se necesita mapeo de puertos con `-p`. Es útil cuando el rendimiento de red es crítico pero reduce el aislamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué hace la instrucción `ARG` en un Dockerfile a diferencia de `ENV`?

</div>
<div class="flashcard-back">

**R:** b) `ARG` define variables disponibles solo durante la construcción de la imagen, no en el contenedor final. `ARG` declara variables que solo existen durante el proceso de `docker build` y pueden sobrescribirse con `--build-arg`. `ENV` establece variables de entorno que persisten en la imagen final y están disponibles cuando el contenedor se ejecuta. Se pueden combinar: `ARG VERSION` seguido de `ENV APP_VERSION=$VERSION`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando crea una nueva imagen Docker a partir de un contenedor en ejecución con cambios realizados?

</div>
<div class="flashcard-back">

**R:** c) `docker commit`. `docker commit contenedor mi-imagen:v1` crea una nueva imagen a partir del estado actual de un contenedor, incluyendo todos los cambios realizados en su filesystem. Aunque útil para pruebas, no se recomienda para producción donde se debe usar un Dockerfile para reproducibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué configuración en `/etc/docker/daemon.json` habilita user namespaces para mejorar la seguridad de Docker?

</div>
<div class="flashcard-back">

**R:** b) `{"userns-remap": "default"}`. La opción `"userns-remap": "default"` en `/etc/docker/daemon.json` habilita el remapeo de usuarios. Docker creará automáticamente un usuario `dockremap` y asignará rangos de UIDs/GIDs subordinados. El UID 0 dentro del contenedor se mapeará a un UID sin privilegios en el host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-017">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `docker stop` y `docker kill`?

</div>
<div class="flashcard-back">

**R:** b) `docker stop` envía SIGTERM y espera un timeout antes de SIGKILL; `docker kill` envía SIGKILL inmediatamente. `docker stop` envía SIGTERM al proceso principal del contenedor, dándole un período de gracia (por defecto 10 segundos, configurable con `-t`) para un apagado limpio. Si no se detiene, envía SIGKILL. `docker kill` envía SIGKILL (o la señal especificada con `-s`) inmediatamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué instrucción del Dockerfile establece el directorio de trabajo para las instrucciones RUN, CMD, ENTRYPOINT, COPY y ADD posteriores?

</div>
<div class="flashcard-back">

**R:** a) `WORKDIR`. `WORKDIR /app` establece el directorio de trabajo para todas las instrucciones posteriores del Dockerfile. Si el directorio no existe, se crea automáticamente. Se pueden usar múltiples `WORKDIR` en un Dockerfile, y las rutas relativas se resuelven respecto al `WORKDIR` anterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué driver de red Docker permite crear redes que abarcan múltiples hosts Docker en un clúster Swarm?

</div>
<div class="flashcard-back">

**R:** c) overlay. El driver `overlay` crea redes virtuales que abarcan múltiples hosts Docker, permitiendo que contenedores en diferentes nodos de un clúster Swarm se comuniquen entre sí. Utiliza VXLAN para encapsular el tráfico de red entre los hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué opción de `docker run` monta el filesystem del contenedor en modo solo lectura?

</div>
<div class="flashcard-back">

**R:** b) `--read-only`. `docker run --read-only` monta el filesystem raíz del contenedor en modo solo lectura, impidiendo cualquier escritura. Se pueden usar volúmenes o tmpfs para las rutas que necesiten escritura (como `/tmp`). Es una buena práctica de seguridad que previene la modificación del contenido de la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para construir una imagen Docker con la etiqueta `mi-app:v2` usando el Dockerfile ubicado en el directorio actual. <input type="text" class="fill-blank" data-answer="docker build -t mi-app:v2 ." data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker build -t mi-app:v2 .. `docker build` construye una imagen a partir de un Dockerfile. `-t` (tag) asigna nombre y etiqueta a la imagen. El `.` al final especifica el contexto de build (directorio actual), que es el conjunto de archivos accesibles durante la construcción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para ver el uso de disco de Docker mostrando imágenes, contenedores y volúmenes. <input type="text" class="fill-blank" data-answer="docker system df" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker system df. `docker system df` muestra un resumen del uso de disco de Docker, desglosado por tipo: imágenes, contenedores y volúmenes. Indica el espacio total, activo y recuperable. Con `-v` muestra detalles de cada recurso individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para ejecutar un contenedor nginx en modo daemon, con nombre `web`, mapeando el puerto 8080 del host al 80 del contenedor. <input type="text" class="fill-blank" data-answer="docker run -d --name web -p 8080:80 nginx" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker run -d --name web -p 8080:80 nginx. `-d` ejecuta el contenedor en modo daemon (background). `--name web` asigna el nombre. `-p 8080:80` mapea el puerto 8080 del host al puerto 80 del contenedor. Se accede al servicio en `http://localhost:8080`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para copiar el archivo `/etc/nginx/nginx.conf` desde el contenedor `web` al directorio actual del host. <input type="text" class="fill-blank" data-answer="docker cp web:/etc/nginx/nginx.conf ./" data-alt="docker cp web:/etc/nginx/nginx.conf ." placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker cp web:/etc/nginx/nginx.conf ./. `docker cp` copia archivos entre un contenedor y el host. El formato es `contenedor:ruta` para la fuente o destino dentro del contenedor. Funciona tanto con contenedores en ejecución como detenidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de Docker Compose para levantar todos los servicios en modo daemon y reconstruir las imágenes. <input type="text" class="fill-blank" data-answer="docker compose up -d --build" data-alt="docker-compose up -d --build" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** docker compose up -d --build. `docker compose up -d --build` levanta todos los servicios definidos en `docker-compose.yml` en modo daemon (`-d`) y reconstruye las imágenes antes de iniciar (`--build`). Sin `--build`, Docker Compose reutiliza imágenes existentes si están disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Siempre usar la forma exec (con corchetes JSON). La forma shell ejecuta el coman...

</div>
<div class="flashcard-back">

**R:** Siempre usar la forma exec (con corchetes JSON). La forma shell ejecuta el comando a través de `/bin/sh -c`, lo que impide que las señales lleguen correctamente al proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Los multi-stage builds son esenciales para crear imágenes pequeñas y seguras. La...

</div>
<div class="flashcard-back">

**R:** Los multi-stage builds son esenciales para crear imágenes pequeñas y seguras. La imagen final solo contiene lo necesario para ejecutar la aplicación, sin herramientas de compilación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: En redes bridge personalizadas, los contenedores pueden resolverse por nombre (D...

</div>
<div class="flashcard-back">

**R:** En redes bridge personalizadas, los contenedores pueden resolverse por nombre (DNS interno). En la red bridge por defecto (`docker0`), solo se pueden comunicar por IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `.dockerignore` reduce el tamaño del contexto de build enviado al daemon Docker,...

</div>
<div class="flashcard-back">

**R:** `.dockerignore` reduce el tamaño del contexto de build enviado al daemon Docker, acelerando la construcción y evitando incluir archivos sensibles en la imagen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `-P`?

</div>
<div class="flashcard-back">

**R:** Mapear todos los puertos expuestos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--env-file <file>`?

</div>
<div class="flashcard-back">

**R:** Variables de entorno desde archivo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--restart <política>`?

</div>
<div class="flashcard-back">

**R:** Política de reinicio (no, always, unless-stopped, on-failure)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Docker es la plataforma de contenedores más extendida. Con un peso de 9 puntos (junto con libvirt), es uno de los subtemas más importantes del examen LPIC-3 305. Docker empaqueta aplicaciones y sus dep

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Dockerfile?

</div>
<div class="flashcard-back">

**R:** El Dockerfile define cómo construir una imagen de contenedor paso a paso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Docker Compose?

</div>
<div class="flashcard-back">

**R:** Define aplicaciones multi-contenedor en un archivo YAML:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son .dockerignore?

</div>
<div class="flashcard-back">

**R:** Excluye archivos del contexto de build:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="352.3">
</div>

<div class="flashcard" data-id="352.3-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

