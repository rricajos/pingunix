---
title: "206.1 - Compilar e instalar desde fuentes"
tags: [lpic-2, examen-201, tema-206, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "206"
subtema: "206.1"
---

# 206.1 - Ejercicios: Compilar e instalar desde fuentes

### Pregunta 1

¿Cual es el directorio de instalacion por defecto cuando se ejecuta `./configure` sin la opcion `--prefix`?

a) `/usr`
b) `/opt`
c) `/usr/local`
d) `/usr/share`

<details><summary>Respuesta</summary>

**c) `/usr/local`**

El directorio por defecto para la instalacion de software compilado desde fuentes es `/usr/local`. Este directorio esta reservado para software que el administrador instala manualmente, separandolo del software gestionado por el sistema de paquetes.

</details>

### Pregunta 2

¿Que comando se utiliza para regenerar todos los archivos de autotools de una sola vez?

a) `autoconf --regenerate`
b) `autoreconf -i`
c) `automake --rebuild-all`
d) `aclocal --force`

<details><summary>Respuesta</summary>

**b) `autoreconf -i`**

El comando `autoreconf -i` ejecuta automaticamente `aclocal`, `autoheader`, `automake --add-missing` y `autoconf` en el orden correcto, regenerando todos los archivos necesarios del sistema autotools.

</details>

### Pregunta 3

¿Que archivo genera `autoconf` a partir de `configure.ac`?

a) `Makefile`
b) `Makefile.in`
c) `configure`
d) `config.h`

<details><summary>Respuesta</summary>

**c) `configure`**

`autoconf` lee el archivo `configure.ac` (o el antiguo `configure.in`) y genera el script `configure`. Este script es el que se ejecuta para detectar las caracteristicas del sistema y generar el `Makefile` final.

</details>

### Pregunta 4

Despues de instalar una nueva biblioteca compartida en `/opt/custom/lib`, ¿cual es la forma correcta y permanente de hacerla accesible al sistema?

a) Establecer `LD_LIBRARY_PATH=/opt/custom/lib` en `/etc/profile`
b) Crear un archivo en `/etc/ld.so.conf.d/` con la ruta y ejecutar `ldconfig`
c) Copiar la biblioteca a `/usr/lib` manualmente
d) Ejecutar `ldconfig /opt/custom/lib` sin configuracion adicional

<details><summary>Respuesta</summary>

**b) Crear un archivo en `/etc/ld.so.conf.d/` con la ruta y ejecutar `ldconfig`**

La forma correcta y permanente es crear un archivo `.conf` en `/etc/ld.so.conf.d/` que contenga la ruta `/opt/custom/lib` y luego ejecutar `sudo ldconfig` para actualizar la cache. La opcion a) funciona pero no es la solucion recomendada.

</details>

### Pregunta 5

¿Que comando muestra las bibliotecas compartidas que necesita un binario?

a) `ldconfig -p`
b) `pkg-config --libs`
c) `ldd`
d) `objdump -d`

<details><summary>Respuesta</summary>

**c) `ldd`**

El comando `ldd` muestra todas las bibliotecas compartidas (shared libraries) que un binario ejecutable necesita en tiempo de ejecucion, junto con las rutas donde se encuentran. Por ejemplo: `ldd /usr/bin/ssh`.

</details>

### Pregunta 6

¿Que opcion de `./configure` se utiliza para habilitar el soporte de un paquete externo como OpenSSL?

a) `--enable-ssl`
b) `--with-ssl`
c) `--add-ssl`
d) `--include-ssl`

<details><summary>Respuesta</summary>

**b) `--with-ssl`**

Las opciones `--with-PAQUETE` se usan para habilitar soporte para paquetes externos. Las opciones `--enable-FEATURE` se usan para activar caracteristicas internas del software. Aunque ambas pueden parecer similares, `--with` hace referencia a dependencias externas y `--enable` a funcionalidades internas.

</details>

### Pregunta 7

En un proyecto que utiliza CMake, ¿cual es el procedimiento correcto de compilacion?

a) `cmake . && make && make install`
b) `mkdir build && cd build && cmake .. && make`
c) `cmake --build && cmake --install`
d) `cmake configure && cmake make`

<details><summary>Respuesta</summary>

**b) `mkdir build && cd build && cmake .. && make`**

La practica recomendada con CMake es crear un directorio de compilacion separado (out-of-source build), entrar en el, ejecutar `cmake` apuntando al directorio del codigo fuente (`..`), y luego ejecutar `make`. Esto mantiene los archivos generados separados del codigo fuente.

</details>

### Pregunta 8

¿Que comando de `pkg-config` muestra los flags necesarios para enlazar con una biblioteca?

a) `pkg-config --cflags libreria`
b) `pkg-config --link libreria`
c) `pkg-config --libs libreria`
d) `pkg-config --ldflags libreria`

<details><summary>Respuesta</summary>

**c) `pkg-config --libs libreria`**

`pkg-config --libs` devuelve los flags de enlazado (linker flags) necesarios para compilar contra una biblioteca, como `-L/ruta/lib -lnombre`. Por otro lado, `--cflags` devuelve los flags de compilacion como rutas de inclusion de cabeceras (`-I/ruta/include`).

</details>

### Pregunta 9

¿Que hace el comando `make -j$(nproc)`?

a) Ejecuta make en modo silencioso
b) Compila el proyecto utilizando todos los nucleos disponibles del procesador
c) Genera un reporte de compilacion en formato JSON
d) Fuerza la recompilacion de todos los archivos

<details><summary>Respuesta</summary>

**b) Compila el proyecto utilizando todos los nucleos disponibles del procesador**

La opcion `-j` de `make` permite la compilacion en paralelo. `$(nproc)` es un comando que devuelve el numero de nucleos del procesador. Juntos, `make -j$(nproc)` aprovecha todos los nucleos disponibles para acelerar la compilacion.

</details>

### Pregunta 10

¿Que archivo almacena la cache binaria generada por `ldconfig`?

a) `/etc/ld.so.conf`
b) `/etc/ld.so.cache`
c) `/var/cache/ldconfig/ld.cache`
d) `/usr/lib/ld.cache`

<details><summary>Respuesta</summary>

**b) `/etc/ld.so.cache`**

`ldconfig` lee las rutas configuradas en `/etc/ld.so.conf` y sus archivos incluidos, y genera una cache binaria en `/etc/ld.so.cache`. Esta cache es consultada por el enlazador dinamico (`ld.so` / `ld-linux.so`) para localizar rapidamente las bibliotecas compartidas en tiempo de ejecucion.

</details>

### Pregunta 11

¿Que comando de make elimina los archivos generados tanto por la compilacion como por el script configure, dejando el directorio en su estado original?

a) `make clean`
b) `make distclean`
c) `make realclean`
d) `make purge`

<details><summary>Respuesta</summary>

**b) `make distclean`**

El comando `make distclean` elimina todos los archivos generados, incluyendo los objetos compilados, los binarios Y los archivos generados por `./configure` (como `Makefile` y `config.h`). A diferencia de `make clean`, que solo elimina los archivos de compilacion, `distclean` deja el directorio como estaba antes de ejecutar `./configure`.

</details>

### Pregunta 12

¿Que variable de entorno se utiliza para especificar temporalmente directorios adicionales donde el enlazador dinamico debe buscar bibliotecas compartidas?

a) `LIBRARY_PATH`
b) `LD_LIBRARY_PATH`
c) `SHARED_LIB_PATH`
d) `LIB_PATH`

<details><summary>Respuesta</summary>

**b) `LD_LIBRARY_PATH`**

La variable `LD_LIBRARY_PATH` permite especificar directorios adicionales donde el enlazador dinamico busca bibliotecas compartidas en tiempo de ejecucion. Es una solucion temporal; la forma permanente es agregar la ruta en un archivo en `/etc/ld.so.conf.d/` y ejecutar `ldconfig`. `LIBRARY_PATH` se usa en tiempo de compilacion, no en ejecucion.

</details>

### Pregunta 13

¿Que herramienta de autotools genera el archivo `Makefile.in` a partir de `Makefile.am`?

a) `autoconf`
b) `automake`
c) `aclocal`
d) `libtool`

<details><summary>Respuesta</summary>

**b) `automake`**

`automake` procesa el archivo `Makefile.am` (escrito por el desarrollador con reglas simplificadas) y genera `Makefile.in`, que es una plantilla de Makefile. Posteriormente, el script `configure` procesa `Makefile.in` sustituyendo las variables detectadas del sistema para producir el `Makefile` final. `autoconf` genera `configure` y `aclocal` genera macros m4.

</details>

### Pregunta 14

Al compilar software desde fuentes, ¿que opcion de `./configure` se usa para desactivar una caracteristica interna del programa?

a) `--without-FEATURE`
b) `--disable-FEATURE`
c) `--no-FEATURE`
d) `--exclude-FEATURE`

<details><summary>Respuesta</summary>

**b) `--disable-FEATURE`**

Las opciones `--enable-FEATURE` y `--disable-FEATURE` se usan para activar o desactivar caracteristicas internas del software. Las opciones `--with-PAQUETE` y `--without-PAQUETE` se usan para habilitar o deshabilitar el soporte de paquetes o dependencias externas. Esta distincion es importante para el examen.

</details>

### Pregunta 15

¿Que comando de `pkg-config` verifica si una biblioteca esta instalada y disponible en el sistema?

a) `pkg-config --check libreria`
b) `pkg-config --exists libreria`
c) `pkg-config --installed libreria`
d) `pkg-config --verify libreria`

<details><summary>Respuesta</summary>

**b) `pkg-config --exists libreria`**

El comando `pkg-config --exists libreria` retorna un codigo de salida 0 si la biblioteca esta disponible y un codigo diferente de 0 si no lo esta. Se usa frecuentemente en scripts de compilacion: `pkg-config --exists libxml-2.0 && echo "Disponible"`. La informacion se obtiene de los archivos `.pc` en los directorios de pkg-config.

</details>

### Pregunta 16

¿Que opcion de `./configure` se utiliza para especificar la compilacion cruzada para una arquitectura diferente?

a) `--arch=TIPO`
b) `--target=TIPO`
c) `--host=TIPO`
d) `--cross=TIPO`

<details><summary>Respuesta</summary>

**c) `--host=TIPO`**

La opcion `--host=TIPO` indica al script `configure` que el binario resultante se ejecutara en una arquitectura diferente a la del sistema de compilacion. Por ejemplo, `--host=arm-linux-gnueabihf` compilaria para procesadores ARM desde un sistema x86. Esto es esencial para compilar software para dispositivos embebidos o arquitecturas diferentes.

</details>

### Pregunta 17

¿Que extension tienen las bibliotecas estaticas en Linux?

a) `.so`
b) `.a`
c) `.lib`
d) `.dll`

<details><summary>Respuesta</summary>

**b) `.a`**

Las bibliotecas estaticas en Linux tienen la extension `.a` (archive). Se integran completamente en el binario durante la compilacion, lo que produce ejecutables mas grandes pero independientes. Las bibliotecas compartidas (dinamicas) tienen la extension `.so` (shared object). `.lib` y `.dll` son extensiones utilizadas en sistemas Windows.

</details>

### Pregunta 18

¿Que archivo de configuracion de CMake se busca en la raiz del proyecto para definir como compilar el software?

a) `CMakeConfig.txt`
b) `CMakeLists.txt`
c) `cmake.conf`
d) `Makefile.cmake`

<details><summary>Respuesta</summary>

**b) `CMakeLists.txt`**

El archivo `CMakeLists.txt` es el archivo de configuracion principal de CMake. Define las reglas de compilacion, dependencias, opciones configurables y targets del proyecto. Se ubica en la raiz del proyecto y puede incluir subdirectorios con sus propios `CMakeLists.txt`. Es equivalente en proposito al `Makefile.am` de autotools.

</details>

### Pregunta 19

Al ejecutar `ldconfig -p`, ¿que informacion se obtiene?

a) Las rutas configuradas en `/etc/ld.so.conf`
b) El contenido de la cache de bibliotecas compartidas
c) Los paquetes de desarrollo instalados
d) Las bibliotecas estaticas disponibles

<details><summary>Respuesta</summary>

**b) El contenido de la cache de bibliotecas compartidas**

El comando `ldconfig -p` (print cache) muestra todas las bibliotecas compartidas registradas en la cache `/etc/ld.so.cache`, incluyendo el nombre de la biblioteca y la ruta completa donde se encuentra. Es util para verificar si una biblioteca especifica esta disponible: `ldconfig -p | grep libssl`.

</details>

### Pregunta 20

Un programa recien instalado desde fuentes falla al ejecutarse con el error "error while loading shared libraries: libfoo.so.1: cannot open shared object file". ¿Cual es la solucion mas probable?

a) Recompilar el programa con `make clean && make`
b) Agregar la ruta de la biblioteca en `/etc/ld.so.conf.d/` y ejecutar `ldconfig`
c) Reinstalar el compilador gcc
d) Ejecutar `make install` nuevamente

<details><summary>Respuesta</summary>

**b) Agregar la ruta de la biblioteca en `/etc/ld.so.conf.d/` y ejecutar `ldconfig`**

Este error indica que el enlazador dinamico no puede encontrar la biblioteca `libfoo.so.1`. La solucion es agregar el directorio donde se instalo la biblioteca (normalmente `/usr/local/lib`) en un archivo en `/etc/ld.so.conf.d/` y ejecutar `sudo ldconfig` para actualizar la cache. Alternativamente, se puede usar `LD_LIBRARY_PATH` como solucion temporal.

</details>

### Pregunta 21

Escribe el comando para ver las bibliotecas compartidas que necesita el binario `/usr/bin/ssh`.

<input type="text" class="fill-blank" data-answer="ldd /usr/bin/ssh" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldd /usr/bin/ssh**

El comando `ldd` muestra todas las bibliotecas compartidas que un ejecutable necesita en tiempo de ejecucion y las rutas donde se encuentran. Si alguna biblioteca no se encuentra, mostrara "not found" junto al nombre, indicando un problema de dependencia.

</details>

### Pregunta 22

Escribe el comando para actualizar la cache del enlazador dinamico despues de instalar nuevas bibliotecas compartidas.

<input type="text" class="fill-blank" data-answer="ldconfig" data-alt="sudo ldconfig" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldconfig**

El comando `ldconfig` reconstruye la cache `/etc/ld.so.cache` leyendo los directorios configurados en `/etc/ld.so.conf` y `/etc/ld.so.conf.d/`. Debe ejecutarse (normalmente con sudo) cada vez que se instalan o eliminan bibliotecas compartidas para que el enlazador dinamico pueda encontrarlas.

</details>

### Pregunta 23

Escribe el comando para compilar un proyecto usando todos los nucleos del procesador disponibles.

<input type="text" class="fill-blank" data-answer="make -j$(nproc)" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**make -j$(nproc)**

La opcion `-j` de `make` habilita la compilacion en paralelo y el parametro indica el numero de tareas simultaneas. `$(nproc)` es un subcomando que devuelve el numero de nucleos disponibles del procesador, maximizando asi la velocidad de compilacion.

</details>

### Pregunta 24

Escribe el comando para obtener los flags de enlazado (linker flags) de la biblioteca `libcurl` usando pkg-config.

<input type="text" class="fill-blank" data-answer="pkg-config --libs libcurl" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pkg-config --libs libcurl**

El comando `pkg-config --libs libcurl` devuelve los flags necesarios para enlazar con la biblioteca libcurl, como `-L/ruta/lib -lcurl`. Estos flags se pasan al compilador/enlazador durante la fase de enlazado. Para obtener los flags de compilacion (rutas de cabeceras) se usa `--cflags`.

</details>

### Pregunta 25

Escribe el comando para verificar todas las opciones disponibles del script configure de un proyecto.

<input type="text" class="fill-blank" data-answer="./configure --help" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**./configure --help**

El comando `./configure --help` muestra todas las opciones de configuracion disponibles para el proyecto, incluyendo opciones de directorios (`--prefix`, `--bindir`), caracteristicas opcionales (`--enable/--disable`), dependencias externas (`--with/--without`) y variables de entorno relevantes. Es fundamental revisarlo antes de compilar.

</details>
