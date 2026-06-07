---
title: "102.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "102.3"
---

# Flashcards: 102.3 - Bibliotecas Compartidas

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-001">
<div class="flashcard-front">

**P:** Que comando se utiliza para ver las bibliotecas compartidas que necesita un programa ejecutable?

</div>
<div class="flashcard-back">

**R:** b) `ldd /usr/bin/ssh`. El comando `ldd` muestra las bibliotecas compartidas que necesita un programa ejecutable, indicando el soname de cada biblioteca, la ruta donde se encontro y la direccion de memoria donde se cargara. Si aparece "not found" junto a una biblioteca, el programa no podra ejecutarse hasta que se instale o se configure correctamente su ruta. Nota de seguridad: no se debe ejecutar `ldd` sobre ejecutables no confiables; en ese caso es mejor usar `objdump -p` o `readelf -d` con filtro `NEEDED`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-002">
<div class="flashcard-front">

**P:** Cual es la relacion entre `/etc/ld.so.conf` y `/etc/ld.so.cache`?

</div>
<div class="flashcard-back">

**R:** c) `ldconfig` lee los directorios de `/etc/ld.so.conf` y genera la cache binaria `/etc/ld.so.cache`. `/etc/ld.so.conf` es un archivo de texto que lista los directorios adicionales donde buscar bibliotecas compartidas (normalmente incluye archivos de `/etc/ld.so.conf.d/`). `/etc/ld.so.cache` es un archivo binario indexado que contiene la lista de todas las bibliotecas disponibles y sus rutas. Al ejecutar `ldconfig`, este escanea los directorios de `/etc/ld.so.conf` y los directorios por defecto, y genera (actualiza) la cache binaria. El cargador dinamico consulta esta cache para localizar rapidamente las bibliotecas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-003">
<div class="flashcard-front">

**P:** Has compilado una aplicacion que instala sus bibliotecas en `/opt/miapp/lib`. Cual es la forma correcta de hacer que el sistema las encuentre de forma permanente?

</div>
<div class="flashcard-back">

**R:** c) Crear un archivo en `/etc/ld.so.conf.d/` con la ruta y ejecutar `ldconfig`. La forma correcta y permanente es crear un archivo de configuracion (por ejemplo, `/etc/ld.so.conf.d/miapp.conf`) que contenga la ruta `/opt/miapp/lib`, y luego ejecutar `sudo ldconfig` para actualizar la cache. No se recomienda usar `LD_LIBRARY_PATH` para configuraciones permanentes porque es temporal, es ignorada por programas SUID/SGID y puede causar conflictos de versiones. No se debe editar `/etc/ld.so.cache` directamente porque es un archivo binario generado por `ldconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-004">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre `LD_LIBRARY_PATH` es correcta?

</div>
<div class="flashcard-back">

**R:** b) Los programas con bit SUID/SGID la ignoran por razones de seguridad. `LD_LIBRARY_PATH` es una variable de entorno que especifica directorios adicionales para buscar bibliotecas. Por seguridad, es ignorada por programas con bits SUID/SGID para evitar que un usuario normal pueda inyectar bibliotecas maliciosas en programas privilegiados. No requiere permisos de root y tiene mayor prioridad que la cache (no menor). No se recomienda para produccion porque es temporal y puede causar conflictos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-005">
<div class="flashcard-front">

**P:** Cual es el orden correcto en que el cargador dinamico busca las bibliotecas compartidas?

</div>
<div class="flashcard-back">

**R:** c) RPATH -> LD_LIBRARY_PATH -> Cache -> directorios por defecto. El cargador dinamico (`ld-linux.so`) busca las bibliotecas en este orden: 1) RPATH/RUNPATH (rutas incrustadas en el ejecutable durante la compilacion), 2) LD_LIBRARY_PATH (variable de entorno), 3) Cache `/etc/ld.so.cache` (generada por `ldconfig`), y 4) directorios por defecto (`/lib`, `/usr/lib` y sus equivalentes de 64 bits). Si la biblioteca no se encuentra en ninguno de estos pasos, el programa fallara con el error "cannot open shared object file".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-006">
<div class="flashcard-front">

**P:** Dado el archivo `libcrypto.so.1.1.0`, que representa el numero `1` inmediatamente despues de `.so`?

</div>
<div class="flashcard-back">

**R:** c) La version mayor que indica cambios incompatibles. La convencion de nombres es `libNOMBRE.so.MAYOR.MENOR.REVISION`. En `libcrypto.so.1.1.0`: `lib` es el prefijo estandar, `crypto` es el nombre, `.so` indica Shared Object, `1` (primera posicion) es la version mayor (cambios incompatibles), `1` (segunda posicion) es la version menor (nuevas funcionalidades compatibles), y `0` es la revision (correcciones de errores). El soname (`libcrypto.so.1`) solo incluye la version mayor, permitiendo actualizar versiones menores sin romper compatibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-007">
<div class="flashcard-front">

**P:** Despues de instalar manualmente una biblioteca en `/usr/local/lib`, un programa sigue mostrando "cannot open shared object file". Cual es el paso mas probable que falta?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar `ldconfig` para actualizar la cache de bibliotecas. Cuando se instalan bibliotecas manualmente, la cache `/etc/ld.so.cache` no se actualiza automaticamente. Se debe ejecutar `sudo ldconfig` para que escanee los directorios configurados, encuentre la nueva biblioteca, cree los enlaces simbolicos (soname) necesarios y actualice la cache. Ademas, hay que verificar que `/usr/local/lib` este listado en `/etc/ld.so.conf` o en algun archivo de `/etc/ld.so.conf.d/`. Los gestores de paquetes (apt, yum) ejecutan `ldconfig` automaticamente, pero al instalar manualmente se debe hacer de forma explicita.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-008">
<div class="flashcard-front">

**P:** Cual es la principal ventaja de las bibliotecas compartidas (.so) frente a las estaticas (.a)?

</div>
<div class="flashcard-back">

**R:** c) Multiples programas comparten una sola copia en memoria, ahorrando espacio. Las bibliotecas compartidas (.so) se cargan una sola vez en memoria y se comparten entre todos los procesos que las necesitan, ahorrando espacio en disco y RAM. Ademas, actualizar la biblioteca actualiza automaticamente todos los programas que la usan. Las opciones a) y b) son ventajas de las bibliotecas estaticas (.a), donde el codigo se copia dentro del ejecutable haciendolo autonomo pero mas grande.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-009">
<div class="flashcard-front">

**P:** Que comando muestra el contenido de la cache de bibliotecas compartidas del sistema?

</div>
<div class="flashcard-back">

**R:** b) `ldconfig -p`. El comando `ldconfig -p` (print cache) muestra todas las bibliotecas registradas en la cache `/etc/ld.so.cache`, incluyendo el soname, tipo (libc6, x86-64) y ruta completa de cada biblioteca. Se puede combinar con `grep` para buscar una biblioteca especifica: `ldconfig -p | grep libssl`. No se puede usar `cat` para leer la cache porque es un archivo binario. Para ver el proceso de escaneo con detalle se usa `ldconfig -v` (verbose).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-010">
<div class="flashcard-front">

**P:** En la convencion de nombrado de bibliotecas compartidas, que enlace simbolico es el "soname" y quien lo utiliza?

</div>
<div class="flashcard-back">

**R:** b) `libfuse.so.2` - usado por el cargador dinamico cuando los programas se ejecutan. En la cadena de enlaces simbolicos, el soname (`libfuse.so.2`) incluye solo la version mayor y es el nombre que los programas compilados contra esta biblioteca buscan en tiempo de ejecucion. El enlace de desarrollo (`libfuse.so`, sin version) es usado por el compilador (`gcc -lfuse`). El archivo real (`libfuse.so.2.9.7`) contiene el codigo compilado. El comando `ldconfig` se encarga de crear y mantener automaticamente los enlaces soname, permitiendo actualizar la version menor y revision sin romper la compatibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-011">
<div class="flashcard-front">

**P:** Que archivo binario contiene la cache indexada de todas las bibliotecas compartidas disponibles en el sistema?

</div>
<div class="flashcard-back">

**R:** b) /etc/ld.so.cache. `/etc/ld.so.cache` es un archivo binario que contiene una lista indexada de todas las bibliotecas compartidas disponibles y sus rutas. El cargador dinamico consulta este archivo para localizar rapidamente las bibliotecas en tiempo de ejecucion. Se genera y actualiza con el comando `ldconfig`. No se puede editar ni leer directamente con un editor de texto; para ver su contenido se usa `ldconfig -p`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-012">
<div class="flashcard-front">

**P:** Que extension tienen las bibliotecas estaticas en Linux?

</div>
<div class="flashcard-back">

**R:** c) .a. Las bibliotecas estaticas en Linux tienen la extension `.a` (archive). Se enlazan en tiempo de compilacion y su codigo se copia dentro del ejecutable, haciendolo mas grande pero independiente. Las bibliotecas compartidas usan la extension `.so` (shared object). `.dll` es la extension de Windows y `.lib` se usa tambien en Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-013">
<div class="flashcard-front">

**P:** En la salida de ldd, que indica el mensaje "not found" junto a una biblioteca?

</div>
<div class="flashcard-back">

**R:** b) Que la biblioteca no se encontro en ninguna ubicacion de busqueda y el programa no podra ejecutarse. Cuando `ldd` muestra "not found" junto al nombre de una biblioteca, significa que el cargador dinamico no puede encontrarla en las rutas de busqueda (RPATH, LD_LIBRARY_PATH, cache, directorios por defecto). El programa fallara con el error "cannot open shared object file" al intentar ejecutarse. Para resolverlo, se debe instalar la biblioteca y ejecutar `ldconfig`, o configurar la ruta con `LD_LIBRARY_PATH` o `/etc/ld.so.conf.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-014">
<div class="flashcard-front">

**P:** Que hace el comando `ldconfig -v`?

</div>
<div class="flashcard-back">

**R:** b) Muestra el proceso de escaneo de directorios y los enlaces simbolicos creados, de forma detallada. `ldconfig -v` (verbose) ejecuta la actualizacion de la cache mostrando cada directorio que escanea y los enlaces simbolicos (soname) que crea para cada biblioteca encontrada. Es util para depurar problemas de bibliotecas y verificar que un directorio o biblioteca especifica esta siendo procesada correctamente por ldconfig.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-015">
<div class="flashcard-front">

**P:** Que programa es el responsable de localizar y cargar las bibliotecas compartidas en memoria cuando se ejecuta un programa?

</div>
<div class="flashcard-back">

**R:** c) El cargador dinamico (ld-linux.so). El cargador dinamico (`/lib64/ld-linux-x86-64.so.2` en 64 bits o `/lib/ld-linux.so.2` en 32 bits) es el programa responsable de leer las dependencias del ejecutable (seccion NEEDED del formato ELF), localizar las bibliotecas compartidas necesarias, cargarlas en memoria y resolver los simbolos. `ldd` solo muestra las dependencias, `ldconfig` gestiona la cache, y `gcc` es el compilador.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-016">
<div class="flashcard-front">

**P:** Que alternativa segura a ldd se puede usar para ver las dependencias de un ejecutable no confiable?

</div>
<div class="flashcard-back">

**R:** b) objdump -p ejecutable | grep NEEDED. `ldd` puede ejecutar codigo del ejecutable al analizarlo, por lo que no se debe usar con ejecutables no confiables. Las alternativas seguras son `objdump -p ejecutable | grep NEEDED` o `readelf -d ejecutable | grep NEEDED`, que leen la informacion de dependencias directamente de las secciones ELF sin ejecutar el programa. `ldconfig -p` muestra la cache del sistema, no las dependencias de un programa especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-017">
<div class="flashcard-front">

**P:** Que sucede cuando se actualiza una biblioteca compartida a una nueva version menor (por ejemplo, de libfoo.so.2.1.0 a libfoo.so.2.2.0)?

</div>
<div class="flashcard-back">

**R:** b) Los programas siguen funcionando porque el soname (libfoo.so.2) no cambia. El soname solo incluye la version mayor (libfoo.so.2), por lo que actualizaciones en la version menor o revision (de 2.1.0 a 2.2.0) no afectan la compatibilidad. El enlace soname sigue apuntando al archivo real actualizado, y los programas buscan el soname al ejecutarse. Solo un cambio en la version mayor (de 2 a 3) indicaria incompatibilidad y requeriria recompilar los programas. Despues de actualizar se debe ejecutar `ldconfig`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-018">
<div class="flashcard-front">

**P:** Cual es el contenido tipico del archivo /etc/ld.so.conf en distribuciones modernas?

</div>
<div class="flashcard-back">

**R:** b) La linea `include /etc/ld.so.conf.d/*.conf` que incluye archivos de configuracion adicionales. En distribuciones modernas, `/etc/ld.so.conf` tipicamente contiene una unica linea `include /etc/ld.so.conf.d/*.conf`, que incluye todos los archivos `.conf` del directorio `/etc/ld.so.conf.d/`. Cada uno de estos archivos contiene una o mas rutas de directorios donde buscar bibliotecas. Esta organizacion modular facilita la gestion: cada aplicacion puede crear su propio archivo de configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-019">
<div class="flashcard-front">

**P:** Por que razon la variable LD_LIBRARY_PATH es ignorada por programas con bit SUID?

</div>
<div class="flashcard-back">

**R:** b) Para evitar que un usuario normal pueda inyectar bibliotecas maliciosas en programas que se ejecutan con privilegios elevados. Los programas con bit SUID se ejecutan con los privilegios del propietario del archivo (generalmente root). Si `LD_LIBRARY_PATH` no fuera ignorada, un usuario podria establecer esta variable para que apunte a un directorio con bibliotecas maliciosas, y cuando el programa SUID las cargue, el codigo malicioso se ejecutaria con privilegios de root. Ignorar esta variable es una medida de seguridad fundamental del cargador dinamico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-020">
<div class="flashcard-front">

**P:** Que opcion de ldd muestra las dependencias no utilizadas (unused) de un ejecutable?

</div>
<div class="flashcard-back">

**R:** c) ldd -u. La opcion `-u` (unused) de `ldd` muestra las bibliotecas compartidas que estan enlazadas al ejecutable pero que en realidad no se usan (no se referencia ninguno de sus simbolos). Esto puede indicar dependencias innecesarias que podrian eliminarse para optimizar el programa. La opcion `-v` muestra informacion detallada de versiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-021">
<div class="flashcard-front">

**P:** Que comando muestra las bibliotecas compartidas que necesita un programa ejecutable?

</div>
<div class="flashcard-back">

**R:** ldd. `ldd` seguido de la ruta de un ejecutable muestra las bibliotecas compartidas que necesita, su ubicacion en el sistema y la direccion de memoria donde se cargaran. Por ejemplo: `ldd /bin/ls`. No se debe usar con ejecutables no confiables por razones de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-022">
<div class="flashcard-front">

**P:** Que comando actualiza la cache de bibliotecas compartidas del sistema?

</div>
<div class="flashcard-back">

**R:** ldconfig. `ldconfig` escanea los directorios configurados en `/etc/ld.so.conf` y los directorios por defecto, actualiza la cache binaria `/etc/ld.so.cache` y crea los enlaces simbolicos (soname) necesarios. Se debe ejecutar como root despues de instalar bibliotecas manualmente o modificar la configuracion de rutas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-023">
<div class="flashcard-front">

**P:** Que comando muestra el contenido de la cache de bibliotecas compartidas?

</div>
<div class="flashcard-back">

**R:** ldconfig -p. `ldconfig -p` (print cache) muestra todas las bibliotecas registradas en `/etc/ld.so.cache`, incluyendo el soname, tipo y ruta completa de cada biblioteca. Se puede combinar con `grep` para buscar una biblioteca especifica: `ldconfig -p | grep libssl`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-024">
<div class="flashcard-front">

**P:** Que variable de entorno permite especificar directorios adicionales de busqueda de bibliotecas compartidas sin ser root?

</div>
<div class="flashcard-back">

**R:** LD_LIBRARY_PATH. `LD_LIBRARY_PATH` es una variable de entorno que permite a cualquier usuario (sin necesidad de root) anadir directorios de busqueda de bibliotecas temporalmente. Se establece con `export LD_LIBRARY_PATH=/ruta/lib`. Tiene mayor prioridad que la cache pero menor que RPATH. No se recomienda para uso permanente; es mejor usar `/etc/ld.so.conf.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-025">
<div class="flashcard-front">

**P:** En que directorio se deben crear archivos .conf con rutas adicionales de busqueda de bibliotecas?

</div>
<div class="flashcard-back">

**R:** /etc/ld.so.conf.d/. Los archivos `.conf` dentro de `/etc/ld.so.conf.d/` contienen rutas adicionales donde el sistema busca bibliotecas compartidas. Cada archivo puede contener una o mas rutas de directorios. Despues de crear o modificar un archivo en este directorio, se debe ejecutar `sudo ldconfig` para actualizar la cache del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-026">
<div class="flashcard-front">

**P:** Tu servidor tiene instaladas `libssl.so.1.1.0` y `libssl.so.1.2.0`. Un programa compilado contra `libssl.so.1` falla tras actualizar. Cual es la causa mas probable?

</div>
<div class="flashcard-back">

**R:** El enlace soname (`libssl.so.1`) no apunta al archivo real actualizado. Ejecutar `sudo ldconfig` recrea los enlaces soname automaticamente, haciendo que `libssl.so.1` apunte a la version mas reciente (`libssl.so.1.2.0`). El soname solo incluye la version mayor, por lo que ambas versiones (1.1.0 y 1.2.0) son compatibles y el programa deberia funcionar tras regenerar los enlaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-027">
<div class="flashcard-front">

**P:** Necesitas verificar si `libpq.so.5` esta registrada en la cache del sistema, y si no lo esta, diagnosticar por que. Que comandos usarias en ese orden?

</div>
<div class="flashcard-back">

**R:** Primero `ldconfig -p | grep libpq` para comprobar si la biblioteca aparece en la cache. Si no aparece, usar `ldconfig -v 2>&1 | grep libpq` para ejecutar un escaneo detallado y ver si `ldconfig` encuentra la biblioteca en algun directorio configurado. Si tampoco aparece, verificar que la ruta este incluida en `/etc/ld.so.conf.d/` y ejecutar `sudo ldconfig` para regenerar la cache.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-028">
<div class="flashcard-front">

**P:** En el nombre `libgnutls.so.30.21.1`, la version cambia de `30` a `31`. Que implica esto para los programas que dependen de esta biblioteca?

</div>
<div class="flashcard-back">

**R:** Un cambio en la version mayor (de 30 a 31) indica cambios incompatibles en la API/ABI. Los programas compilados contra `libgnutls.so.30` no funcionaran con `libgnutls.so.31` porque el soname cambia. Sera necesario recompilar los programas o mantener ambas versiones instaladas en paralelo. En cambio, un cambio de `30.21.1` a `30.22.0` (version menor) seria compatible y transparente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-029">
<div class="flashcard-front">

**P:** Completa: En `libz.so.1.2.11`, el numero `2` representa la version <input type="text" class="fill-blank" data-answer="menor" placeholder="???"> que indica nuevas funcionalidades manteniendo compatibilidad hacia atras.

</div>
<div class="flashcard-back">

**R:** **menor**. En la convencion `libNOMBRE.so.MAYOR.MENOR.REVISION`, la version menor indica nuevas funcionalidades que son compatibles hacia atras con la misma version mayor. El soname (`libz.so.1`) no cambia al actualizar la version menor, por lo que los programas existentes siguen funcionando sin recompilar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-030">
<div class="flashcard-front">

**P:** Un desarrollador ejecuta `gcc -lfuse miapp.c -o miapp`. Que enlace simbolico resuelve el compilador y hacia donde apunta?

</div>
<div class="flashcard-back">

**R:** El compilador resuelve el enlace de desarrollo `libfuse.so` (sin numero de version), que apunta al soname (`libfuse.so.2`), que a su vez apunta al archivo real (`libfuse.so.2.9.7`). El enlace sin version existe exclusivamente para la compilacion (flag `-l`). En tiempo de ejecucion, el programa busca el soname (`libfuse.so.2`), no el enlace de desarrollo. Si `libfuse.so` no existe, la compilacion falla; normalmente se instala con el paquete `-dev` o `-devel`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-031">
<div class="flashcard-front">

**P:** Completa el nombre correcto de la biblioteca: lib<input type="text" class="fill-blank" data-answer="nombre" placeholder="???">.so.<input type="text" class="fill-blank" data-answer="MAYOR.MENOR.REVISION" placeholder="???">

</div>
<div class="flashcard-back">

**R:** lib**nombre**.so.**MAYOR.MENOR.REVISION**. La convencion de nombres de bibliotecas compartidas en Linux es estricta: el prefijo `lib` es obligatorio, seguido del nombre de la biblioteca, la extension `.so` (Shared Object), y tres niveles de version separados por puntos. Ejemplo: `libcrypto.so.1.1.0` donde `crypto` es el nombre, `1` la version mayor, `1` la menor y `0` la revision.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-032">
<div class="flashcard-front">

**P:** Ejecutas `ldd /usr/bin/curl` y en la salida aparece `libcurl.so.4 => /usr/lib/x86_64-linux-gnu/libcurl.so.4 (0x00007f...)`. Que significan las tres columnas?

</div>
<div class="flashcard-back">

**R:** La primera columna (`libcurl.so.4`) es el soname que el programa necesita. La segunda columna tras `=>` es la ruta real donde el cargador dinamico encontro la biblioteca en el sistema. La tercera columna entre parentesis es la direccion de memoria donde se cargara la biblioteca. Si la segunda columna mostrara "not found", significaria que el sistema no puede localizar esa biblioteca y el programa no podra ejecutarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-033">
<div class="flashcard-front">

**P:** Un desarrollador sin acceso root necesita probar una version nueva de `libxml2` ubicada en `/home/dev/libs` antes de instalarla en el sistema. Que comando debe ejecutar antes de lanzar su aplicacion?

</div>
<div class="flashcard-back">

**R:** `export LD_LIBRARY_PATH=/home/dev/libs:$LD_LIBRARY_PATH`. Esta variable de entorno permite anadir directorios de busqueda de bibliotecas sin ser root ni modificar archivos del sistema. Tiene mayor prioridad que la cache (`/etc/ld.so.cache`), por lo que el cargador dinamico encontrara primero la version en `/home/dev/libs`. La sintaxis `:$LD_LIBRARY_PATH` al final preserva las rutas existentes. Es ideal para pruebas temporales, pero no se recomienda para produccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-034">
<div class="flashcard-front">

**P:** Al ejecutar un binario ELF, el kernel no carga directamente las bibliotecas compartidas. Que programa se invoca automaticamente para resolver y cargar las dependencias, y donde se encuentra en un sistema de 64 bits?

</div>
<div class="flashcard-back">

**R:** El cargador dinamico (dynamic linker) `/lib64/ld-linux-x86-64.so.2`. Cuando el kernel carga un ejecutable ELF, detecta la seccion `INTERP` que apunta a este programa. El cargador dinamico se encarga de: 1) leer las dependencias del ejecutable (secciones `NEEDED`), 2) localizar las bibliotecas siguiendo el orden RPATH > LD_LIBRARY_PATH > cache > directorios por defecto, 3) cargarlas en memoria, y 4) resolver los simbolos (funciones y variables). En sistemas de 32 bits la ruta es `/lib/ld-linux.so.2`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.3">
</div>

<div class="flashcard" data-id="102.3-fc-035">
<div class="flashcard-front">

**P:** Trampa LPIC-1: Un companero dice que `LD_LIBRARY_PATH` tiene menor prioridad que la cache `/etc/ld.so.cache` y que `ldconfig -p` actualiza la cache. Cuantos errores hay en esas afirmaciones?

</div>
<div class="flashcard-back">

**R:** Hay **2 errores**. Primero: `LD_LIBRARY_PATH` tiene **mayor** prioridad que la cache, no menor (orden: RPATH > LD_LIBRARY_PATH > cache > directorios por defecto). Segundo: `ldconfig -p` solo **muestra** (print) el contenido de la cache, no la actualiza; para actualizar se ejecuta `ldconfig` sin opciones (o con `-v` para modo detallado). Estas son confusiones clasicas que LPI evalua en el examen.

</div>
</div>

---

