---
title: "352.3 - Ejercicios: Docker"
tipo: ejercicios
certificacion: lpic-3
especialidad: "305 - Virtualización y Contenedores"
tema: "352 - Virtualización de Contenedores"
subtema: "352.3"
peso: 9
tags:
  - lpic-3
  - tema-352
  - ejercicios
  - docker
  - dockerfile
---

# Ejercicios - 352.3 Docker

### Pregunta 1
¿Cuál es la diferencia entre las instrucciones `CMD` y `ENTRYPOINT` en un Dockerfile?

a) No hay diferencia, son sinónimos
b) `CMD` define el ejecutable principal y `ENTRYPOINT` los argumentos
c) `ENTRYPOINT` define el ejecutable principal; `CMD` proporciona argumentos por defecto que pueden sobrescribirse
d) `CMD` solo acepta formato shell, `ENTRYPOINT` solo formato exec

<details><summary>Respuesta</summary>

**c) `ENTRYPOINT` define el ejecutable principal; `CMD` proporciona argumentos por defecto que pueden sobrescribirse**

`ENTRYPOINT` define el ejecutable que siempre se ejecuta. `CMD` proporciona argumentos por defecto que se pasan a `ENTRYPOINT` y pueden ser sobrescritos al hacer `docker run imagen nuevos-args`. `ENTRYPOINT` solo se sobrescribe con `--entrypoint`.
</details>

### Pregunta 2
¿Qué ventaja proporcionan los multi-stage builds en un Dockerfile?

a) Permiten ejecutar múltiples contenedores simultáneamente
b) Aceleran la descarga de la imagen base
c) Reducen el tamaño de la imagen final al separar las etapas de compilación y ejecución
d) Permiten usar múltiples sistemas operativos en un mismo contenedor

<details><summary>Respuesta</summary>

**c) Reducen el tamaño de la imagen final al separar las etapas de compilación y ejecución**

Los multi-stage builds permiten usar una imagen con herramientas de compilación en la primera etapa y copiar solo el binario resultante a una imagen mínima final. `COPY --from=builder` copia archivos de una etapa anterior.
</details>

### Pregunta 3
¿Qué tipo de red Docker permite la resolución DNS automática de contenedores por nombre?

a) La red bridge por defecto (docker0)
b) La red host
c) Una red bridge personalizada (user-defined)
d) La red none

<details><summary>Respuesta</summary>

**c) Una red bridge personalizada (user-defined)**

Las redes bridge personalizadas (creadas con `docker network create`) incluyen un servidor DNS interno que permite a los contenedores resolverse por nombre. La red bridge por defecto (`docker0`) no ofrece esta funcionalidad; solo permite comunicación por IP.
</details>

### Pregunta 4
¿Qué hace el archivo `.dockerignore`?

a) Lista las imágenes que Docker debe ignorar del registry
b) Excluye archivos y directorios del contexto de build enviado al daemon
c) Define reglas de seguridad para el contenedor
d) Lista contenedores que no deben iniciarse automáticamente

<details><summary>Respuesta</summary>

**b) Excluye archivos y directorios del contexto de build enviado al daemon**

`.dockerignore` funciona como `.gitignore`: excluye archivos del contexto de build. Esto reduce el tamaño del contexto enviado al daemon, acelera la construcción y evita incluir archivos sensibles (.env, .git, node_modules) en la imagen.
</details>

### Pregunta 5
¿Qué comando ejecuta un proceso bash interactivo dentro de un contenedor Docker ya en ejecución?

a) `docker run -it contenedor bash`
b) `docker attach contenedor`
c) `docker exec -it contenedor bash`
d) `docker shell contenedor`

<details><summary>Respuesta</summary>

**c) `docker exec -it contenedor bash`**

`docker exec` ejecuta un nuevo proceso dentro de un contenedor en ejecución. `-i` mantiene stdin abierto y `-t` asigna un pseudo-TTY. `docker run` crearía un nuevo contenedor. `docker attach` conecta al proceso principal del contenedor, no crea uno nuevo.
</details>

### Pregunta 6
¿Cuál es la diferencia entre un volumen Docker y un bind mount?

a) Los bind mounts son más portátiles que los volúmenes
b) Los volúmenes son gestionados por Docker; los bind mounts mapean una ruta específica del host
c) Los volúmenes solo funcionan en Linux; los bind mounts en cualquier SO
d) No hay diferencia, son sinónimos

<details><summary>Respuesta</summary>

**b) Los volúmenes son gestionados por Docker; los bind mounts mapean una ruta específica del host**

Los volúmenes Docker son creados y gestionados por Docker (almacenados en `/var/lib/docker/volumes/`). Los bind mounts mapean directamente un directorio o archivo del host al contenedor. Los volúmenes son más portátiles y recomendados para datos persistentes.
</details>

### Pregunta 7
¿Qué comando detiene todos los servicios definidos en un docker-compose.yml y elimina los volúmenes asociados?

a) `docker compose stop --volumes`
b) `docker compose down -v`
c) `docker compose rm --volumes`
d) `docker compose destroy -v`

<details><summary>Respuesta</summary>

**b) `docker compose down -v`**

`docker compose down` detiene y elimina contenedores, redes y la configuración creada por `up`. La opción `-v` (o `--volumes`) también elimina los volúmenes nombrados definidos en la sección `volumes` del archivo compose.
</details>

### Pregunta 8
¿Qué instrucción del Dockerfile se recomienda en lugar de `ADD` para copiar archivos locales?

a) `PUT`
b) `COPY`
c) `INSERT`
d) `IMPORT`

<details><summary>Respuesta</summary>

**b) `COPY`**

`COPY` es la instrucción recomendada para copiar archivos locales al contenedor. `ADD` tiene funcionalidad extra (descomprimir tar, descargar URLs) que puede causar comportamientos inesperados. `ADD` solo se justifica cuando se necesita específicamente la descompresión automática de archivos tar.
</details>

### Pregunta 9
¿Qué opción de `docker run` hace que el contenedor se elimine automáticamente cuando se detiene?

a) `--auto-remove`
b) `--rm`
c) `--clean`
d) `--disposable`

<details><summary>Respuesta</summary>

**b) `--rm`**

La opción `--rm` elimina automáticamente el contenedor y su filesystem cuando el proceso principal sale. Es útil para contenedores efímeros usados en pruebas o ejecuciones puntuales: `docker run -it --rm ubuntu bash`.
</details>

### Pregunta 10
¿Qué comando elimina contenedores detenidos, redes no usadas, imágenes sin referencia y caché de build?

a) `docker cleanup`
b) `docker system prune`
c) `docker purge all`
d) `docker gc`

<details><summary>Respuesta</summary>

**b) `docker system prune`**

`docker system prune` elimina todos los recursos no utilizados: contenedores detenidos, redes sin contenedores, imágenes dangling y caché de build. Con `--volumes` también elimina volúmenes no usados. `docker system df` muestra el uso de disco antes de limpiar.
</details>

### Pregunta 11

¿Qué instrucción del Dockerfile define una comprobación periódica del estado de salud del contenedor?

a) `CHECK`
b) `MONITOR`
c) `HEALTHCHECK`
d) `STATUS`

<details><summary>Respuesta</summary>

**c) `HEALTHCHECK`**

`HEALTHCHECK` define un comando que Docker ejecutará periódicamente para verificar que el contenedor funciona correctamente. Opciones como `--interval`, `--timeout` y `--retries` controlan la frecuencia y tolerancia. Ejemplo: `HEALTHCHECK --interval=30s CMD curl -f http://localhost/ || exit 1`.
</details>

### Pregunta 12

¿Qué opción de `docker run` establece una política de reinicio para que el contenedor se reinicie siempre excepto cuando se detiene manualmente?

a) `--restart always`
b) `--restart unless-stopped`
c) `--restart on-failure`
d) `--restart auto`

<details><summary>Respuesta</summary>

**b) `--restart unless-stopped`**

`--restart unless-stopped` reinicia el contenedor automáticamente si se detiene por cualquier razón, excepto cuando fue detenido manualmente con `docker stop`. A diferencia de `always`, no reinicia el contenedor tras un reinicio del daemon Docker si fue detenido manualmente.
</details>

### Pregunta 13

¿Qué tipo de red Docker permite que el contenedor comparta directamente la pila de red del host?

a) bridge
b) overlay
c) host
d) macvlan

<details><summary>Respuesta</summary>

**c) host**

La red `host` elimina el aislamiento de red entre el contenedor y el host. El contenedor comparte directamente la pila de red del host, incluyendo interfaces, puertos e IP. No se necesita mapeo de puertos con `-p`. Es útil cuando el rendimiento de red es crítico pero reduce el aislamiento.
</details>

### Pregunta 14

¿Qué hace la instrucción `ARG` en un Dockerfile a diferencia de `ENV`?

a) `ARG` persiste como variable de entorno en el contenedor final
b) `ARG` define variables disponibles solo durante la construcción de la imagen, no en el contenedor final
c) `ARG` y `ENV` son idénticos en funcionalidad
d) `ARG` solo acepta valores numéricos

<details><summary>Respuesta</summary>

**b) `ARG` define variables disponibles solo durante la construcción de la imagen, no en el contenedor final**

`ARG` declara variables que solo existen durante el proceso de `docker build` y pueden sobrescribirse con `--build-arg`. `ENV` establece variables de entorno que persisten en la imagen final y están disponibles cuando el contenedor se ejecuta. Se pueden combinar: `ARG VERSION` seguido de `ENV APP_VERSION=$VERSION`.
</details>

### Pregunta 15

¿Qué comando crea una nueva imagen Docker a partir de un contenedor en ejecución con cambios realizados?

a) `docker save`
b) `docker export`
c) `docker commit`
d) `docker snapshot`

<details><summary>Respuesta</summary>

**c) `docker commit`**

`docker commit contenedor mi-imagen:v1` crea una nueva imagen a partir del estado actual de un contenedor, incluyendo todos los cambios realizados en su filesystem. Aunque útil para pruebas, no se recomienda para producción donde se debe usar un Dockerfile para reproducibilidad.
</details>

### Pregunta 16

¿Qué configuración en `/etc/docker/daemon.json` habilita user namespaces para mejorar la seguridad de Docker?

a) `{"security-opts": ["userns"]}`
b) `{"userns-remap": "default"}`
c) `{"user-namespaces": true}`
d) `{"remap-users": "enabled"}`

<details><summary>Respuesta</summary>

**b) `{"userns-remap": "default"}`**

La opción `"userns-remap": "default"` en `/etc/docker/daemon.json` habilita el remapeo de usuarios. Docker creará automáticamente un usuario `dockremap` y asignará rangos de UIDs/GIDs subordinados. El UID 0 dentro del contenedor se mapeará a un UID sin privilegios en el host.
</details>

### Pregunta 17

¿Cuál es la diferencia entre `docker stop` y `docker kill`?

a) No hay diferencia
b) `docker stop` envía SIGTERM y espera un timeout antes de SIGKILL; `docker kill` envía SIGKILL inmediatamente
c) `docker stop` elimina el contenedor; `docker kill` solo lo detiene
d) `docker kill` funciona solo con contenedores privilegiados

<details><summary>Respuesta</summary>

**b) `docker stop` envía SIGTERM y espera un timeout antes de SIGKILL; `docker kill` envía SIGKILL inmediatamente**

`docker stop` envía SIGTERM al proceso principal del contenedor, dándole un período de gracia (por defecto 10 segundos, configurable con `-t`) para un apagado limpio. Si no se detiene, envía SIGKILL. `docker kill` envía SIGKILL (o la señal especificada con `-s`) inmediatamente.
</details>

### Pregunta 18

¿Qué instrucción del Dockerfile establece el directorio de trabajo para las instrucciones RUN, CMD, ENTRYPOINT, COPY y ADD posteriores?

a) `WORKDIR`
b) `CHDIR`
c) `DIR`
d) `BASEDIR`

<details><summary>Respuesta</summary>

**a) `WORKDIR`**

`WORKDIR /app` establece el directorio de trabajo para todas las instrucciones posteriores del Dockerfile. Si el directorio no existe, se crea automáticamente. Se pueden usar múltiples `WORKDIR` en un Dockerfile, y las rutas relativas se resuelven respecto al `WORKDIR` anterior.
</details>

### Pregunta 19

¿Qué driver de red Docker permite crear redes que abarcan múltiples hosts Docker en un clúster Swarm?

a) bridge
b) host
c) overlay
d) macvlan

<details><summary>Respuesta</summary>

**c) overlay**

El driver `overlay` crea redes virtuales que abarcan múltiples hosts Docker, permitiendo que contenedores en diferentes nodos de un clúster Swarm se comuniquen entre sí. Utiliza VXLAN para encapsular el tráfico de red entre los hosts.
</details>

### Pregunta 20

¿Qué opción de `docker run` monta el filesystem del contenedor en modo solo lectura?

a) `--readonly`
b) `--read-only`
c) `--ro`
d) `--fs-readonly`

<details><summary>Respuesta</summary>

**b) `--read-only`**

`docker run --read-only` monta el filesystem raíz del contenedor en modo solo lectura, impidiendo cualquier escritura. Se pueden usar volúmenes o tmpfs para las rutas que necesiten escritura (como `/tmp`). Es una buena práctica de seguridad que previene la modificación del contenido de la imagen.
</details>

### Pregunta 21

Escribe el comando para construir una imagen Docker con la etiqueta `mi-app:v2` usando el Dockerfile ubicado en el directorio actual.

<input type="text" class="fill-blank" data-answer="docker build -t mi-app:v2 ." data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker build -t mi-app:v2 .**

`docker build` construye una imagen a partir de un Dockerfile. `-t` (tag) asigna nombre y etiqueta a la imagen. El `.` al final especifica el contexto de build (directorio actual), que es el conjunto de archivos accesibles durante la construcción.
</details>

### Pregunta 22

Escribe el comando para ver el uso de disco de Docker mostrando imágenes, contenedores y volúmenes.

<input type="text" class="fill-blank" data-answer="docker system df" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker system df**

`docker system df` muestra un resumen del uso de disco de Docker, desglosado por tipo: imágenes, contenedores y volúmenes. Indica el espacio total, activo y recuperable. Con `-v` muestra detalles de cada recurso individual.
</details>

### Pregunta 23

Escribe el comando para ejecutar un contenedor nginx en modo daemon, con nombre `web`, mapeando el puerto 8080 del host al 80 del contenedor.

<input type="text" class="fill-blank" data-answer="docker run -d --name web -p 8080:80 nginx" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker run -d --name web -p 8080:80 nginx**

`-d` ejecuta el contenedor en modo daemon (background). `--name web` asigna el nombre. `-p 8080:80` mapea el puerto 8080 del host al puerto 80 del contenedor. Se accede al servicio en `http://localhost:8080`.
</details>

### Pregunta 24

Escribe el comando para copiar el archivo `/etc/nginx/nginx.conf` desde el contenedor `web` al directorio actual del host.

<input type="text" class="fill-blank" data-answer="docker cp web:/etc/nginx/nginx.conf ./" data-alt="docker cp web:/etc/nginx/nginx.conf ." placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker cp web:/etc/nginx/nginx.conf ./**

`docker cp` copia archivos entre un contenedor y el host. El formato es `contenedor:ruta` para la fuente o destino dentro del contenedor. Funciona tanto con contenedores en ejecución como detenidos.
</details>

### Pregunta 25

Escribe el comando de Docker Compose para levantar todos los servicios en modo daemon y reconstruir las imágenes.

<input type="text" class="fill-blank" data-answer="docker compose up -d --build" data-alt="docker-compose up -d --build" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**docker compose up -d --build**

`docker compose up -d --build` levanta todos los servicios definidos en `docker-compose.yml` en modo daemon (`-d`) y reconstruye las imágenes antes de iniciar (`--build`). Sin `--build`, Docker Compose reutiliza imágenes existentes si están disponibles.
</details>
