---
title: "206.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "206.1"
---

# Flashcards: 206.1 - Compilar E Instalar Desde Fuentes

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-001">
<div class="flashcard-front">

**P:** ¿Cual es el directorio de instalacion por defecto cuando se ejecuta `./configure` sin la opcion `--prefix`?

</div>
<div class="flashcard-back">

**R:** c) `/usr/local`. El directorio por defecto para la instalacion de software compilado desde fuentes es `/usr/local`. Este directorio esta reservado para software que el administrador instala manualmente, separandolo del software gestionado por el sistema de paquetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando se utiliza para regenerar todos los archivos de autotools de una sola vez?

</div>
<div class="flashcard-back">

**R:** b) `autoreconf -i`. El comando `autoreconf -i` ejecuta automaticamente `aclocal`, `autoheader`, `automake --add-missing` y `autoconf` en el orden correcto, regenerando todos los archivos necesarios del sistema autotools.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que archivo genera `autoconf` a partir de `configure.ac`?

</div>
<div class="flashcard-back">

**R:** c) `configure`. `autoconf` lee el archivo `configure.ac` (o el antiguo `configure.in`) y genera el script `configure`. Este script es el que se ejecuta para detectar las caracteristicas del sistema y generar el `Makefile` final.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-004">
<div class="flashcard-front">

**P:** Despues de instalar una nueva biblioteca compartida en `/opt/custom/lib`, ¿cual es la forma correcta y permanente de hacerla accesible al sistema?

</div>
<div class="flashcard-back">

**R:** b) Crear un archivo en `/etc/ld.so.conf.d/` con la ruta y ejecutar `ldconfig`. La forma correcta y permanente es crear un archivo `.conf` en `/etc/ld.so.conf.d/` que contenga la ruta `/opt/custom/lib` y luego ejecutar `sudo ldconfig` para actualizar la cache. La opcion a) funciona pero no es la solucion recomendada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando muestra las bibliotecas compartidas que necesita un binario?

</div>
<div class="flashcard-back">

**R:** c) `ldd`. El comando `ldd` muestra todas las bibliotecas compartidas (shared libraries) que un binario ejecutable necesita en tiempo de ejecucion, junto con las rutas donde se encuentran. Por ejemplo: `ldd /usr/bin/ssh`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que opcion de `./configure` se utiliza para habilitar el soporte de un paquete externo como OpenSSL?

</div>
<div class="flashcard-back">

**R:** b) `--with-ssl`. Las opciones `--with-PAQUETE` se usan para habilitar soporte para paquetes externos. Las opciones `--enable-FEATURE` se usan para activar caracteristicas internas del software. Aunque ambas pueden parecer similares, `--with` hace referencia a dependencias externas y `--enable` a funcionalidades internas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-007">
<div class="flashcard-front">

**P:** En un proyecto que utiliza CMake, ¿cual es el procedimiento correcto de compilacion?

</div>
<div class="flashcard-back">

**R:** b) `mkdir build && cd build && cmake .. && make`. La practica recomendada con CMake es crear un directorio de compilacion separado (out-of-source build), entrar en el, ejecutar `cmake` apuntando al directorio del codigo fuente (`..`), y luego ejecutar `make`. Esto mantiene los archivos generados separados del codigo fuente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-008">
<div class="flashcard-front">

**P:** ¿Que comando de `pkg-config` muestra los flags necesarios para enlazar con una biblioteca?

</div>
<div class="flashcard-back">

**R:** c) `pkg-config --libs libreria`. `pkg-config --libs` devuelve los flags de enlazado (linker flags) necesarios para compilar contra una biblioteca, como `-L/ruta/lib -lnombre`. Por otro lado, `--cflags` devuelve los flags de compilacion como rutas de inclusion de cabeceras (`-I/ruta/include`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que hace el comando `make -j$(nproc)`?

</div>
<div class="flashcard-back">

**R:** b) Compila el proyecto utilizando todos los nucleos disponibles del procesador. La opcion `-j` de `make` permite la compilacion en paralelo. `$(nproc)` es un comando que devuelve el numero de nucleos del procesador. Juntos, `make -j$(nproc)` aprovecha todos los nucleos disponibles para acelerar la compilacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-010">
<div class="flashcard-front">

**P:** ¿Que archivo almacena la cache binaria generada por `ldconfig`?

</div>
<div class="flashcard-back">

**R:** b) `/etc/ld.so.cache`. `ldconfig` lee las rutas configuradas en `/etc/ld.so.conf` y sus archivos incluidos, y genera una cache binaria en `/etc/ld.so.cache`. Esta cache es consultada por el enlazador dinamico (`ld.so` / `ld-linux.so`) para localizar rapidamente las bibliotecas compartidas en tiempo de ejecucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que comando de make elimina los archivos generados tanto por la compilacion como por el script configure, dejando el directorio en su estado original?

</div>
<div class="flashcard-back">

**R:** b) `make distclean`. El comando `make distclean` elimina todos los archivos generados, incluyendo los objetos compilados, los binarios Y los archivos generados por `./configure` (como `Makefile` y `config.h`). A diferencia de `make clean`, que solo elimina los archivos de compilacion, `distclean` deja el directorio como estaba antes de ejecutar `./configure`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que variable de entorno se utiliza para especificar temporalmente directorios adicionales donde el enlazador dinamico debe buscar bibliotecas compartidas?

</div>
<div class="flashcard-back">

**R:** b) `LD_LIBRARY_PATH`. La variable `LD_LIBRARY_PATH` permite especificar directorios adicionales donde el enlazador dinamico busca bibliotecas compartidas en tiempo de ejecucion. Es una solucion temporal; la forma permanente es agregar la ruta en un archivo en `/etc/ld.so.conf.d/` y ejecutar `ldconfig`. `LIBRARY_PATH` se usa en tiempo de compilacion, no en ejecucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que herramienta de autotools genera el archivo `Makefile.in` a partir de `Makefile.am`?

</div>
<div class="flashcard-back">

**R:** b) `automake`. `automake` procesa el archivo `Makefile.am` (escrito por el desarrollador con reglas simplificadas) y genera `Makefile.in`, que es una plantilla de Makefile. Posteriormente, el script `configure` procesa `Makefile.in` sustituyendo las variables detectadas del sistema para producir el `Makefile` final. `autoconf` genera `configure` y `aclocal` genera macros m4.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-014">
<div class="flashcard-front">

**P:** Al compilar software desde fuentes, ¿que opcion de `./configure` se usa para desactivar una caracteristica interna del programa?

</div>
<div class="flashcard-back">

**R:** b) `--disable-FEATURE`. Las opciones `--enable-FEATURE` y `--disable-FEATURE` se usan para activar o desactivar caracteristicas internas del software. Las opciones `--with-PAQUETE` y `--without-PAQUETE` se usan para habilitar o deshabilitar el soporte de paquetes o dependencias externas. Esta distincion es importante para el examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que comando de `pkg-config` verifica si una biblioteca esta instalada y disponible en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `pkg-config --exists libreria`. El comando `pkg-config --exists libreria` retorna un codigo de salida 0 si la biblioteca esta disponible y un codigo diferente de 0 si no lo esta. Se usa frecuentemente en scripts de compilacion: `pkg-config --exists libxml-2.0 && echo "Disponible"`. La informacion se obtiene de los archivos `.pc` en los directorios de pkg-config.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que opcion de `./configure` se utiliza para especificar la compilacion cruzada para una arquitectura diferente?

</div>
<div class="flashcard-back">

**R:** c) `--host=TIPO`. La opcion `--host=TIPO` indica al script `configure` que el binario resultante se ejecutara en una arquitectura diferente a la del sistema de compilacion. Por ejemplo, `--host=arm-linux-gnueabihf` compilaria para procesadores ARM desde un sistema x86. Esto es esencial para compilar software para dispositivos embebidos o arquitecturas diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-017">
<div class="flashcard-front">

**P:** ¿Que extension tienen las bibliotecas estaticas en Linux?

</div>
<div class="flashcard-back">

**R:** b) `.a`. Las bibliotecas estaticas en Linux tienen la extension `.a` (archive). Se integran completamente en el binario durante la compilacion, lo que produce ejecutables mas grandes pero independientes. Las bibliotecas compartidas (dinamicas) tienen la extension `.so` (shared object). `.lib` y `.dll` son extensiones utilizadas en sistemas Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que archivo de configuracion de CMake se busca en la raiz del proyecto para definir como compilar el software?

</div>
<div class="flashcard-back">

**R:** b) `CMakeLists.txt`. El archivo `CMakeLists.txt` es el archivo de configuracion principal de CMake. Define las reglas de compilacion, dependencias, opciones configurables y targets del proyecto. Se ubica en la raiz del proyecto y puede incluir subdirectorios con sus propios `CMakeLists.txt`. Es equivalente en proposito al `Makefile.am` de autotools.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-019">
<div class="flashcard-front">

**P:** Al ejecutar `ldconfig -p`, ¿que informacion se obtiene?

</div>
<div class="flashcard-back">

**R:** b) El contenido de la cache de bibliotecas compartidas. El comando `ldconfig -p` (print cache) muestra todas las bibliotecas compartidas registradas en la cache `/etc/ld.so.cache`, incluyendo el nombre de la biblioteca y la ruta completa donde se encuentra. Es util para verificar si una biblioteca especifica esta disponible: `ldconfig -p | grep libssl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-020">
<div class="flashcard-front">

**P:** Un programa recien instalado desde fuentes falla al ejecutarse con el error "error while loading shared libraries: libfoo.so.1: cannot open shared object file". ¿Cual es la solucion mas probable?

</div>
<div class="flashcard-back">

**R:** b) Agregar la ruta de la biblioteca en `/etc/ld.so.conf.d/` y ejecutar `ldconfig`. Este error indica que el enlazador dinamico no puede encontrar la biblioteca `libfoo.so.1`. La solucion es agregar el directorio donde se instalo la biblioteca (normalmente `/usr/local/lib`) en un archivo en `/etc/ld.so.conf.d/` y ejecutar `sudo ldconfig` para actualizar la cache. Alternativamente, se puede usar `LD_LIBRARY_PATH` como solucion temporal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para ver las bibliotecas compartidas que necesita el binario `/usr/bin/ssh`. <input type="text" class="fill-blank" data-answer="ldd /usr/bin/ssh" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ldd /usr/bin/ssh. El comando `ldd` muestra todas las bibliotecas compartidas que un ejecutable necesita en tiempo de ejecucion y las rutas donde se encuentran. Si alguna biblioteca no se encuentra, mostrara "not found" junto al nombre, indicando un problema de dependencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para actualizar la cache del enlazador dinamico despues de instalar nuevas bibliotecas compartidas. <input type="text" class="fill-blank" data-answer="ldconfig" data-alt="sudo ldconfig" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ldconfig. El comando `ldconfig` reconstruye la cache `/etc/ld.so.cache` leyendo los directorios configurados en `/etc/ld.so.conf` y `/etc/ld.so.conf.d/`. Debe ejecutarse (normalmente con sudo) cada vez que se instalan o eliminan bibliotecas compartidas para que el enlazador dinamico pueda encontrarlas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para compilar un proyecto usando todos los nucleos del procesador disponibles. <input type="text" class="fill-blank" data-answer="make -j$(nproc)" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** make -j$(nproc). La opcion `-j` de `make` habilita la compilacion en paralelo y el parametro indica el numero de tareas simultaneas. `$(nproc)` es un subcomando que devuelve el numero de nucleos disponibles del procesador, maximizando asi la velocidad de compilacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para obtener los flags de enlazado (linker flags) de la biblioteca `libcurl` usando pkg-config. <input type="text" class="fill-blank" data-answer="pkg-config --libs libcurl" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** pkg-config --libs libcurl. El comando `pkg-config --libs libcurl` devuelve los flags necesarios para enlazar con la biblioteca libcurl, como `-L/ruta/lib -lcurl`. Estos flags se pasan al compilador/enlazador durante la fase de enlazado. Para obtener los flags de compilacion (rutas de cabeceras) se usa `--cflags`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para verificar todas las opciones disponibles del script configure de un proyecto. <input type="text" class="fill-blank" data-answer="./configure --help" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ./configure --help. El comando `./configure --help` muestra todas las opciones de configuracion disponibles para el proyecto, incluyendo opciones de directorios (`--prefix`, `--bindir`), caracteristicas opcionales (`--enable/--disable`), dependencias externas (`--with/--without`) y variables de entorno relevantes. Es fundamental revisarlo antes de compilar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `--prefix` cambia el directorio base. Con `--prefix=/usr`, los bina...

</div>
<div class="flashcard-back">

**R:** Recuerda que `--prefix` cambia el directorio base. Con `--prefix=/usr`, los binarios iran a `/usr/bin`, las librerias a `/usr/lib`, etc. El valor por defecto es `/usr/local`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El comando `make` sin argumentos ejecuta la primera regla del Makefile (generalm...

</div>
<div class="flashcard-back">

**R:** El comando `make` sin argumentos ejecuta la primera regla del Makefile (generalmente `all`). La opcion `-j` permite compilacion en paralelo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la relacion entre `configure.ac` y `configure`, y entre `Makefile.am` y `...

</div>
<div class="flashcard-back">

**R:** Conoce la relacion entre `configure.ac` y `configure`, y entre `Makefile.am` y `Makefile.in`. El script `autoreconf -i` regenera todos los archivos necesarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `ldconfig` actualiza el cache `/etc/ld.so.cache`. Siempre ejecutar `ldconfig` de...

</div>
<div class="flashcard-back">

**R:** `ldconfig` actualiza el cache `/etc/ld.so.cache`. Siempre ejecutar `ldconfig` despues de instalar nuevas bibliotecas compartidas. `LD_LIBRARY_PATH` es temporal; `/etc/ld.so.conf.d/` es la solucion permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `pkg-config` es fundamental para resolver dependencias durante la compilacion. R...

</div>
<div class="flashcard-back">

**R:** `pkg-config` es fundamental para resolver dependencias durante la compilacion. Recuerda la variable `PKG_CONFIG_PATH` para agregar rutas personalizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--prefix=DIR`?

</div>
<div class="flashcard-back">

**R:** Directorio base de instalacion (por defecto `/usr/local`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `--sysconfdir=DIR`?

</div>
<div class="flashcard-back">

**R:** Directorio para archivos de configuracion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `--with-PAQUETE`?

</div>
<div class="flashcard-back">

**R:** Habilitar soporte para un paquete externo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `--without-PAQUETE`?

</div>
<div class="flashcard-back">

**R:** Deshabilitar soporte para un paquete externo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `--enable-FEATURE`?

</div>
<div class="flashcard-back">

**R:** Activar una caracteristica opcional

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-036">
<div class="flashcard-front">

**P:** Que es/son Herramientas Autotools?

</div>
<div class="flashcard-back">

**R:** Las **autotools** son un conjunto de herramientas GNU que automatizan la generacion de scripts de configuracion:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-037">
<div class="flashcard-front">

**P:** Que es/son CMake?

</div>
<div class="flashcard-back">

**R:** **CMake** es un sistema de compilacion alternativo a autotools, cada vez mas popular:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-038">
<div class="flashcard-front">

**P:** Que es/son pkg-config?

</div>
<div class="flashcard-back">

**R:** **pkg-config** ayuda a obtener informacion sobre bibliotecas instaladas, facilitando la compilacion:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-039">
<div class="flashcard-front">

**P:** Que es/son Resolucion de problemas comunes?

</div>
<div class="flashcard-back">

**R:** | Problema | Causa probable | Solucion |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-040">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - **Siempre leer** los archivos `README`, `INSTALL` y `CHANGELOG` antes de compilar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-041">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

