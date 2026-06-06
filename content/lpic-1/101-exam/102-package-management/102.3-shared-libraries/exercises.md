---
title: "102.3 - Gestion de bibliotecas compartidas: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-102
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "102"
subtema: "102.3"
---

# 102.3 - Gestion de bibliotecas compartidas: Ejercicios

### Pregunta 1

Que comando se utiliza para ver las bibliotecas compartidas que necesita un programa ejecutable?

a) `objdump /usr/bin/ssh`
b) `ldd /usr/bin/ssh`
c) `ldconfig -p /usr/bin/ssh`
d) `readelf /usr/bin/ssh`

<details><summary>Respuesta</summary>

**b) `ldd /usr/bin/ssh`**

El comando `ldd` muestra las bibliotecas compartidas que necesita un programa ejecutable, indicando el soname de cada biblioteca, la ruta donde se encontro y la direccion de memoria donde se cargara. Si aparece "not found" junto a una biblioteca, el programa no podra ejecutarse hasta que se instale o se configure correctamente su ruta. Nota de seguridad: no se debe ejecutar `ldd` sobre ejecutables no confiables; en ese caso es mejor usar `objdump -p` o `readelf -d` con filtro `NEEDED`.

</details>

---

### Pregunta 2

Cual es la relacion entre `/etc/ld.so.conf` y `/etc/ld.so.cache`?

a) Son el mismo archivo con diferente nombre segun la distribucion
b) `/etc/ld.so.cache` es una copia de seguridad de `/etc/ld.so.conf`
c) `ldconfig` lee los directorios de `/etc/ld.so.conf` y genera la cache binaria `/etc/ld.so.cache`
d) `/etc/ld.so.conf` se genera automaticamente a partir de `/etc/ld.so.cache`

<details><summary>Respuesta</summary>

**c) `ldconfig` lee los directorios de `/etc/ld.so.conf` y genera la cache binaria `/etc/ld.so.cache`**

`/etc/ld.so.conf` es un archivo de texto que lista los directorios adicionales donde buscar bibliotecas compartidas (normalmente incluye archivos de `/etc/ld.so.conf.d/`). `/etc/ld.so.cache` es un archivo binario indexado que contiene la lista de todas las bibliotecas disponibles y sus rutas. Al ejecutar `ldconfig`, este escanea los directorios de `/etc/ld.so.conf` y los directorios por defecto, y genera (actualiza) la cache binaria. El cargador dinamico consulta esta cache para localizar rapidamente las bibliotecas.

</details>

---

### Pregunta 3

Has compilado una aplicacion que instala sus bibliotecas en `/opt/miapp/lib`. Cual es la forma correcta de hacer que el sistema las encuentre de forma permanente?

a) Ejecutar `export LD_LIBRARY_PATH=/opt/miapp/lib` en `/etc/profile`
b) Copiar las bibliotecas a `/usr/lib` manualmente
c) Crear un archivo en `/etc/ld.so.conf.d/` con la ruta y ejecutar `ldconfig`
d) Anadir la ruta directamente en `/etc/ld.so.cache`

<details><summary>Respuesta</summary>

**c) Crear un archivo en `/etc/ld.so.conf.d/` con la ruta y ejecutar `ldconfig`**

La forma correcta y permanente es crear un archivo de configuracion (por ejemplo, `/etc/ld.so.conf.d/miapp.conf`) que contenga la ruta `/opt/miapp/lib`, y luego ejecutar `sudo ldconfig` para actualizar la cache. No se recomienda usar `LD_LIBRARY_PATH` para configuraciones permanentes porque es temporal, es ignorada por programas SUID/SGID y puede causar conflictos de versiones. No se debe editar `/etc/ld.so.cache` directamente porque es un archivo binario generado por `ldconfig`.

</details>

---

### Pregunta 4

Cual de las siguientes afirmaciones sobre `LD_LIBRARY_PATH` es correcta?

a) Es la forma recomendada para configurar rutas de bibliotecas en produccion
b) Los programas con bit SUID/SGID la ignoran por razones de seguridad
c) Sus rutas tienen menor prioridad que la cache `/etc/ld.so.cache`
d) Requiere permisos de root para ser definida

<details><summary>Respuesta</summary>

**b) Los programas con bit SUID/SGID la ignoran por razones de seguridad**

`LD_LIBRARY_PATH` es una variable de entorno que especifica directorios adicionales para buscar bibliotecas. Por seguridad, es ignorada por programas con bits SUID/SGID para evitar que un usuario normal pueda inyectar bibliotecas maliciosas en programas privilegiados. No requiere permisos de root y tiene mayor prioridad que la cache (no menor). No se recomienda para produccion porque es temporal y puede causar conflictos.

</details>

---

### Pregunta 5

Cual es el orden correcto en que el cargador dinamico busca las bibliotecas compartidas?

a) Cache -> LD_LIBRARY_PATH -> RPATH -> directorios por defecto
b) LD_LIBRARY_PATH -> Cache -> directorios por defecto -> RPATH
c) RPATH -> LD_LIBRARY_PATH -> Cache -> directorios por defecto
d) Directorios por defecto -> Cache -> LD_LIBRARY_PATH -> RPATH

<details><summary>Respuesta</summary>

**c) RPATH -> LD_LIBRARY_PATH -> Cache -> directorios por defecto**

El cargador dinamico (`ld-linux.so`) busca las bibliotecas en este orden: 1) RPATH/RUNPATH (rutas incrustadas en el ejecutable durante la compilacion), 2) LD_LIBRARY_PATH (variable de entorno), 3) Cache `/etc/ld.so.cache` (generada por `ldconfig`), y 4) directorios por defecto (`/lib`, `/usr/lib` y sus equivalentes de 64 bits). Si la biblioteca no se encuentra en ninguno de estos pasos, el programa fallara con el error "cannot open shared object file".

</details>

---

### Pregunta 6

Dado el archivo `libcrypto.so.1.1.0`, que representa el numero `1` inmediatamente despues de `.so`?

a) La revision de correccion de errores
b) La version menor con nuevas funcionalidades
c) La version mayor que indica cambios incompatibles
d) El numero de compilacion de la biblioteca

<details><summary>Respuesta</summary>

**c) La version mayor que indica cambios incompatibles**

La convencion de nombres es `libNOMBRE.so.MAYOR.MENOR.REVISION`. En `libcrypto.so.1.1.0`: `lib` es el prefijo estandar, `crypto` es el nombre, `.so` indica Shared Object, `1` (primera posicion) es la version mayor (cambios incompatibles), `1` (segunda posicion) es la version menor (nuevas funcionalidades compatibles), y `0` es la revision (correcciones de errores). El soname (`libcrypto.so.1`) solo incluye la version mayor, permitiendo actualizar versiones menores sin romper compatibilidad.

</details>

---

### Pregunta 7

Despues de instalar manualmente una biblioteca en `/usr/local/lib`, un programa sigue mostrando "cannot open shared object file". Cual es el paso mas probable que falta?

a) Reiniciar el sistema para que detecte la nueva biblioteca
b) Ejecutar `ldconfig` para actualizar la cache de bibliotecas
c) Establecer la variable `LD_PRELOAD` con la ruta de la biblioteca
d) Copiar la biblioteca tambien en `/lib64`

<details><summary>Respuesta</summary>

**b) Ejecutar `ldconfig` para actualizar la cache de bibliotecas**

Cuando se instalan bibliotecas manualmente, la cache `/etc/ld.so.cache` no se actualiza automaticamente. Se debe ejecutar `sudo ldconfig` para que escanee los directorios configurados, encuentre la nueva biblioteca, cree los enlaces simbolicos (soname) necesarios y actualice la cache. Ademas, hay que verificar que `/usr/local/lib` este listado en `/etc/ld.so.conf` o en algun archivo de `/etc/ld.so.conf.d/`. Los gestores de paquetes (apt, yum) ejecutan `ldconfig` automaticamente, pero al instalar manualmente se debe hacer de forma explicita.

</details>

---

### Pregunta 8

Cual es la principal ventaja de las bibliotecas compartidas (.so) frente a las estaticas (.a)?

a) El ejecutable resultante no tiene ninguna dependencia externa
b) El ejecutable se puede copiar a cualquier sistema sin problemas de compatibilidad
c) Multiples programas comparten una sola copia en memoria, ahorrando espacio
d) La compilacion es mas rapida porque no se necesita el codigo fuente de la biblioteca

<details><summary>Respuesta</summary>

**c) Multiples programas comparten una sola copia en memoria, ahorrando espacio**

Las bibliotecas compartidas (.so) se cargan una sola vez en memoria y se comparten entre todos los procesos que las necesitan, ahorrando espacio en disco y RAM. Ademas, actualizar la biblioteca actualiza automaticamente todos los programas que la usan. Las opciones a) y b) son ventajas de las bibliotecas estaticas (.a), donde el codigo se copia dentro del ejecutable haciendolo autonomo pero mas grande.

</details>

---

### Pregunta 9

Que comando muestra el contenido de la cache de bibliotecas compartidas del sistema?

a) `ldd -p`
b) `ldconfig -p`
c) `ld --cache`
d) `cat /etc/ld.so.cache`

<details><summary>Respuesta</summary>

**b) `ldconfig -p`**

El comando `ldconfig -p` (print cache) muestra todas las bibliotecas registradas en la cache `/etc/ld.so.cache`, incluyendo el soname, tipo (libc6, x86-64) y ruta completa de cada biblioteca. Se puede combinar con `grep` para buscar una biblioteca especifica: `ldconfig -p | grep libssl`. No se puede usar `cat` para leer la cache porque es un archivo binario. Para ver el proceso de escaneo con detalle se usa `ldconfig -v` (verbose).

</details>

---

### Pregunta 10

En la convencion de nombrado de bibliotecas compartidas, que enlace simbolico es el "soname" y quien lo utiliza?

a) `libfuse.so` - usado por el compilador durante la compilacion
b) `libfuse.so.2` - usado por el cargador dinamico cuando los programas se ejecutan
c) `libfuse.so.2.9.7` - usado por el sistema de archivos para localizar el archivo real
d) `libfuse.a` - usado por el enlazador estatico

<details><summary>Respuesta</summary>

**b) `libfuse.so.2` - usado por el cargador dinamico cuando los programas se ejecutan**

En la cadena de enlaces simbolicos, el soname (`libfuse.so.2`) incluye solo la version mayor y es el nombre que los programas compilados contra esta biblioteca buscan en tiempo de ejecucion. El enlace de desarrollo (`libfuse.so`, sin version) es usado por el compilador (`gcc -lfuse`). El archivo real (`libfuse.so.2.9.7`) contiene el codigo compilado. El comando `ldconfig` se encarga de crear y mantener automaticamente los enlaces soname, permitiendo actualizar la version menor y revision sin romper la compatibilidad.

</details>

### Pregunta 11

Que archivo binario contiene la cache indexada de todas las bibliotecas compartidas disponibles en el sistema?

a) /etc/ld.so.conf
b) /etc/ld.so.cache
c) /var/cache/ldconfig
d) /lib/ld-linux.so.2

<details><summary>Respuesta</summary>

**b) /etc/ld.so.cache**

`/etc/ld.so.cache` es un archivo binario que contiene una lista indexada de todas las bibliotecas compartidas disponibles y sus rutas. El cargador dinamico consulta este archivo para localizar rapidamente las bibliotecas en tiempo de ejecucion. Se genera y actualiza con el comando `ldconfig`. No se puede editar ni leer directamente con un editor de texto; para ver su contenido se usa `ldconfig -p`.

</details>

### Pregunta 12

Que extension tienen las bibliotecas estaticas en Linux?

a) .so
b) .lib
c) .a
d) .dll

<details><summary>Respuesta</summary>

**c) .a**

Las bibliotecas estaticas en Linux tienen la extension `.a` (archive). Se enlazan en tiempo de compilacion y su codigo se copia dentro del ejecutable, haciendolo mas grande pero independiente. Las bibliotecas compartidas usan la extension `.so` (shared object). `.dll` es la extension de Windows y `.lib` se usa tambien en Windows.

</details>

### Pregunta 13

En la salida de ldd, que indica el mensaje "not found" junto a una biblioteca?

a) Que la biblioteca esta instalada pero no es compatible con el programa
b) Que la biblioteca no se encontro en ninguna ubicacion de busqueda y el programa no podra ejecutarse
c) Que la biblioteca es opcional y el programa funcionara sin ella
d) Que la biblioteca esta cargada en una version diferente

<details><summary>Respuesta</summary>

**b) Que la biblioteca no se encontro en ninguna ubicacion de busqueda y el programa no podra ejecutarse**

Cuando `ldd` muestra "not found" junto al nombre de una biblioteca, significa que el cargador dinamico no puede encontrarla en las rutas de busqueda (RPATH, LD_LIBRARY_PATH, cache, directorios por defecto). El programa fallara con el error "cannot open shared object file" al intentar ejecutarse. Para resolverlo, se debe instalar la biblioteca y ejecutar `ldconfig`, o configurar la ruta con `LD_LIBRARY_PATH` o `/etc/ld.so.conf.d/`.

</details>

### Pregunta 14

Que hace el comando `ldconfig -v`?

a) Verifica la integridad de todas las bibliotecas instaladas
b) Muestra el proceso de escaneo de directorios y los enlaces simbolicos creados, de forma detallada
c) Muestra la version de ldconfig
d) Elimina la cache y las bibliotecas obsoletas

<details><summary>Respuesta</summary>

**b) Muestra el proceso de escaneo de directorios y los enlaces simbolicos creados, de forma detallada**

`ldconfig -v` (verbose) ejecuta la actualizacion de la cache mostrando cada directorio que escanea y los enlaces simbolicos (soname) que crea para cada biblioteca encontrada. Es util para depurar problemas de bibliotecas y verificar que un directorio o biblioteca especifica esta siendo procesada correctamente por ldconfig.

</details>

### Pregunta 15

Que programa es el responsable de localizar y cargar las bibliotecas compartidas en memoria cuando se ejecuta un programa?

a) ldd
b) ldconfig
c) El cargador dinamico (ld-linux.so)
d) gcc

<details><summary>Respuesta</summary>

**c) El cargador dinamico (ld-linux.so)**

El cargador dinamico (`/lib64/ld-linux-x86-64.so.2` en 64 bits o `/lib/ld-linux.so.2` en 32 bits) es el programa responsable de leer las dependencias del ejecutable (seccion NEEDED del formato ELF), localizar las bibliotecas compartidas necesarias, cargarlas en memoria y resolver los simbolos. `ldd` solo muestra las dependencias, `ldconfig` gestiona la cache, y `gcc` es el compilador.

</details>

### Pregunta 16

Que alternativa segura a ldd se puede usar para ver las dependencias de un ejecutable no confiable?

a) ldconfig -p
b) objdump -p ejecutable | grep NEEDED
c) file ejecutable
d) strings ejecutable

<details><summary>Respuesta</summary>

**b) objdump -p ejecutable | grep NEEDED**

`ldd` puede ejecutar codigo del ejecutable al analizarlo, por lo que no se debe usar con ejecutables no confiables. Las alternativas seguras son `objdump -p ejecutable | grep NEEDED` o `readelf -d ejecutable | grep NEEDED`, que leen la informacion de dependencias directamente de las secciones ELF sin ejecutar el programa. `ldconfig -p` muestra la cache del sistema, no las dependencias de un programa especifico.

</details>

### Pregunta 17

Que sucede cuando se actualiza una biblioteca compartida a una nueva version menor (por ejemplo, de libfoo.so.2.1.0 a libfoo.so.2.2.0)?

a) Todos los programas que la usan dejan de funcionar y deben recompilarse
b) Los programas siguen funcionando porque el soname (libfoo.so.2) no cambia
c) El sistema se reinicia automaticamente para cargar la nueva version
d) Se debe ejecutar ldd en todos los programas afectados para actualizar los enlaces

<details><summary>Respuesta</summary>

**b) Los programas siguen funcionando porque el soname (libfoo.so.2) no cambia**

El soname solo incluye la version mayor (libfoo.so.2), por lo que actualizaciones en la version menor o revision (de 2.1.0 a 2.2.0) no afectan la compatibilidad. El enlace soname sigue apuntando al archivo real actualizado, y los programas buscan el soname al ejecutarse. Solo un cambio en la version mayor (de 2 a 3) indicaria incompatibilidad y requeriria recompilar los programas. Despues de actualizar se debe ejecutar `ldconfig`.

</details>

### Pregunta 18

Cual es el contenido tipico del archivo /etc/ld.so.conf en distribuciones modernas?

a) Una lista de todas las bibliotecas instaladas en el sistema
b) La linea `include /etc/ld.so.conf.d/*.conf` que incluye archivos de configuracion adicionales
c) Las variables de entorno para la carga de bibliotecas
d) La cache binaria de bibliotecas

<details><summary>Respuesta</summary>

**b) La linea `include /etc/ld.so.conf.d/*.conf` que incluye archivos de configuracion adicionales**

En distribuciones modernas, `/etc/ld.so.conf` tipicamente contiene una unica linea `include /etc/ld.so.conf.d/*.conf`, que incluye todos los archivos `.conf` del directorio `/etc/ld.so.conf.d/`. Cada uno de estos archivos contiene una o mas rutas de directorios donde buscar bibliotecas. Esta organizacion modular facilita la gestion: cada aplicacion puede crear su propio archivo de configuracion.

</details>

### Pregunta 19

Por que razon la variable LD_LIBRARY_PATH es ignorada por programas con bit SUID?

a) Porque los programas SUID no pueden usar bibliotecas compartidas
b) Para evitar que un usuario normal pueda inyectar bibliotecas maliciosas en programas que se ejecutan con privilegios elevados
c) Porque los programas SUID siempre usan bibliotecas estaticas
d) Por una limitacion tecnica del formato ELF

<details><summary>Respuesta</summary>

**b) Para evitar que un usuario normal pueda inyectar bibliotecas maliciosas en programas que se ejecutan con privilegios elevados**

Los programas con bit SUID se ejecutan con los privilegios del propietario del archivo (generalmente root). Si `LD_LIBRARY_PATH` no fuera ignorada, un usuario podria establecer esta variable para que apunte a un directorio con bibliotecas maliciosas, y cuando el programa SUID las cargue, el codigo malicioso se ejecutaria con privilegios de root. Ignorar esta variable es una medida de seguridad fundamental del cargador dinamico.

</details>

### Pregunta 20

Que opcion de ldd muestra las dependencias no utilizadas (unused) de un ejecutable?

a) ldd -v
b) ldd -r
c) ldd -u
d) ldd -d

<details><summary>Respuesta</summary>

**c) ldd -u**

La opcion `-u` (unused) de `ldd` muestra las bibliotecas compartidas que estan enlazadas al ejecutable pero que en realidad no se usan (no se referencia ninguno de sus simbolos). Esto puede indicar dependencias innecesarias que podrian eliminarse para optimizar el programa. La opcion `-v` muestra informacion detallada de versiones.

</details>

### Pregunta 21

Que comando muestra las bibliotecas compartidas que necesita un programa ejecutable?

<input type="text" class="fill-blank" data-answer="ldd" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldd**

`ldd` seguido de la ruta de un ejecutable muestra las bibliotecas compartidas que necesita, su ubicacion en el sistema y la direccion de memoria donde se cargaran. Por ejemplo: `ldd /bin/ls`. No se debe usar con ejecutables no confiables por razones de seguridad.

</details>

### Pregunta 22

Que comando actualiza la cache de bibliotecas compartidas del sistema?

<input type="text" class="fill-blank" data-answer="ldconfig" data-alt="sudo ldconfig" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldconfig**

`ldconfig` escanea los directorios configurados en `/etc/ld.so.conf` y los directorios por defecto, actualiza la cache binaria `/etc/ld.so.cache` y crea los enlaces simbolicos (soname) necesarios. Se debe ejecutar como root despues de instalar bibliotecas manualmente o modificar la configuracion de rutas.

</details>

### Pregunta 23

Que comando muestra el contenido de la cache de bibliotecas compartidas?

<input type="text" class="fill-blank" data-answer="ldconfig -p" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ldconfig -p**

`ldconfig -p` (print cache) muestra todas las bibliotecas registradas en `/etc/ld.so.cache`, incluyendo el soname, tipo y ruta completa de cada biblioteca. Se puede combinar con `grep` para buscar una biblioteca especifica: `ldconfig -p | grep libssl`.

</details>

### Pregunta 24

Que variable de entorno permite especificar directorios adicionales de busqueda de bibliotecas compartidas sin ser root?

<input type="text" class="fill-blank" data-answer="LD_LIBRARY_PATH" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**LD_LIBRARY_PATH**

`LD_LIBRARY_PATH` es una variable de entorno que permite a cualquier usuario (sin necesidad de root) anadir directorios de busqueda de bibliotecas temporalmente. Se establece con `export LD_LIBRARY_PATH=/ruta/lib`. Tiene mayor prioridad que la cache pero menor que RPATH. No se recomienda para uso permanente; es mejor usar `/etc/ld.so.conf.d/`.

</details>

### Pregunta 25

En que directorio se deben crear archivos .conf con rutas adicionales de busqueda de bibliotecas?

<input type="text" class="fill-blank" data-answer="/etc/ld.so.conf.d/" data-alt="/etc/ld.so.conf.d" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/etc/ld.so.conf.d/**

Los archivos `.conf` dentro de `/etc/ld.so.conf.d/` contienen rutas adicionales donde el sistema busca bibliotecas compartidas. Cada archivo puede contener una o mas rutas de directorios. Despues de crear o modificar un archivo en este directorio, se debe ejecutar `sudo ldconfig` para actualizar la cache del sistema.

</details>
