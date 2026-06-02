---
title: "107.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "107.3"
---

# Flashcards: 107.3 - Localizacion E Internacionalizacion

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-001">
<div class="flashcard-front">

**P:** Un sistema tiene las siguientes variables configuradas. Que idioma se usara para los mensajes del sistema?

</div>
<div class="flashcard-back">

**R:** b) Ingles, porque `LC_MESSAGES` sobreescribe a `LANG` para los mensajes. El orden de prioridad de las variables de locale es: `LC_ALL` > `LC_*` individuales > `LANG`. Como `LC_ALL` esta vacia, no sobreescribe nada. `LC_MESSAGES=en_US.UTF-8` esta definida explicitamente, asi que los mensajes del sistema estaran en ingles. Las demas categorias (LC_NUMERIC, LC_TIME, LC_COLLATE, etc.) que NO estan definidas explicitamente heredan el valor de `LANG=es_ES.UTF-8` (espanol). Esta configuracion es comun en servidores donde se quiere el sistema en espanol pero los mensajes de error en ingles para facilitar su busqueda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-002">
<div class="flashcard-front">

**P:** Cual es la principal ventaja de UTF-8 sobre ISO-8859-1 (Latin-1)?

</div>
<div class="flashcard-back">

**R:** b) UTF-8 soporta todos los idiomas del mundo simultaneamente y es compatible con ASCII. UTF-8 es una codificacion de longitud variable (1 a 4 bytes por caracter) que soporta mas de un millon de caracteres de todos los idiomas. Los primeros 128 caracteres son identicos a ASCII (compatibilidad hacia atras). ISO-8859-1 solo soporta 256 caracteres (8 bits), cubriendo unicamente idiomas de Europa Occidental. Con ISO-8859-1 no se pueden mezclar idiomas como espanol y ruso en el mismo texto. UTF-8 no siempre ocupa menos espacio: un caracter acentuado ocupa 2 bytes en UTF-8 pero solo 1 en ISO-8859-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-003">
<div class="flashcard-front">

**P:** Que comando convierte un archivo de codificacion ISO-8859-1 a UTF-8?

</div>
<div class="flashcard-back">

**R:** b) `iconv -f ISO-8859-1 -t UTF-8 archivo.txt -o archivo_utf8.txt`. `iconv` es la herramienta estandar para convertir entre codificaciones. Las opciones son: `-f` (from, codificacion de origen), `-t` (to, codificacion de destino), `-o` (archivo de salida). Tambien se puede usar redireccion: `iconv -f ISO-8859-1 -t UTF-8 archivo.txt > archivo_utf8.txt`. Para listar todas las codificaciones soportadas se usa `iconv -l`. Opciones adicionales: `//TRANSLIT` intenta transliterar caracteres no disponibles y `//IGNORE` los omite.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-004">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `tzselect` y `timedatectl set-timezone`?

</div>
<div class="flashcard-back">

**R:** b) `tzselect` solo ayuda a elegir una zona horaria (no cambia la configuracion); `timedatectl set-timezone` si cambia la zona horaria del sistema. `tzselect` es una herramienta interactiva que presenta un menu con continentes y ciudades para ayudar al usuario a elegir una zona horaria, pero **NO modifica la configuracion del sistema**. Solo muestra el nombre de la zona seleccionada (por ejemplo, `Europe/Madrid`). `timedatectl set-timezone Europe/Madrid` **si cambia** la configuracion del sistema, modificando `/etc/localtime` y actualizando la zona horaria de forma efectiva e inmediata.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-005">
<div class="flashcard-front">

**P:** Que archivo es un enlace simbolico que apunta a la zona horaria activa del sistema?

</div>
<div class="flashcard-back">

**R:** b) `/etc/localtime`. `/etc/localtime` es un enlace simbolico (o copia) que apunta al archivo de zona horaria activa dentro de `/usr/share/zoneinfo/`. Por ejemplo: `/etc/localtime -> /usr/share/zoneinfo/Europe/Madrid`. Es leido por las aplicaciones del sistema para determinar la zona horaria. `/etc/timezone` es un archivo de texto plano (solo en Debian/Ubuntu) que contiene el nombre de la zona horaria (por ejemplo, `Europe/Madrid`). `/usr/share/zoneinfo/` es el directorio con todos los archivos binarios de zonas horarias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-006">
<div class="flashcard-front">

**P:** Que variable de entorno permite a un usuario usar una zona horaria diferente a la del sistema sin modificar la configuracion global?

</div>
<div class="flashcard-back">

**R:** c) `TZ`. La variable `TZ` permite a un usuario o proceso usar una zona horaria diferente a la configurada en el sistema (que se define en `/etc/localtime`). Por ejemplo: `TZ="America/New_York" date` muestra la hora en Nueva York, y `export TZ="Asia/Tokyo"` establece la zona para toda la sesion. `TZ` tiene prioridad sobre `/etc/localtime` para el proceso que la define. `LC_TIME` controla el formato de presentacion de fechas (idioma) pero no la zona horaria en si.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-007">
<div class="flashcard-front">

**P:** Que es el locale `C` (o `POSIX`) y que efecto tiene en el ordenamiento de texto?

</div>
<div class="flashcard-back">

**R:** b) Es el locale minimo estandar que usa ASCII y ordena por valor numerico del byte (mayusculas antes que minusculas). El locale `C` (equivalente a `POSIX`) es el locale minimo estandar definido por POSIX. Usa codificacion ASCII (128 caracteres), idioma ingles basico, y un orden de clasificacion basado en el valor numerico del byte (A-Z [65-90] antes que a-z [97-122]). Es predecible y consistente en cualquier sistema. Se usa en scripts para comportamiento determinista: `LC_ALL=C sort archivo.txt` ordena por valor ASCII. En contraste, `es_ES.UTF-8` usa reglas linguisticas espanolas que pueden ignorar mayusculas y tratar acentos de forma especial.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-008">
<div class="flashcard-front">

**P:** Que comando de systemd se usa para configurar el locale y el layout del teclado del sistema?

</div>
<div class="flashcard-back">

**R:** c) `localectl`. `localectl` es la herramienta de systemd para configurar el locale y el layout del teclado del sistema. `localectl status` muestra la configuracion actual. `localectl set-locale LANG=es_ES.UTF-8` establece el locale. `localectl set-keymap es` establece el layout del teclado de la consola virtual. `localectl set-x11-keymap es` establece el layout para X11. `localectl list-locales` lista los locales disponibles. El archivo de configuracion resultante es `/etc/locale.conf` en sistemas con systemd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-009">
<div class="flashcard-front">

**P:** Un administrador quiere un servidor con formato de fechas y numeros en espanol pero mensajes del sistema en ingles. Que configuracion debe usar?

</div>
<div class="flashcard-back">

**R:** b) `LANG=es_ES.UTF-8` y `LC_MESSAGES=en_US.UTF-8`. `LANG=es_ES.UTF-8` establece espanol como valor por defecto para todas las categorias (fecha, numeros, moneda, clasificacion, etc.). `LC_MESSAGES=en_US.UTF-8` sobreescribe solo los mensajes del sistema a ingles, ya que las variables `LC_*` individuales tienen prioridad sobre `LANG`. NO se debe usar `LC_ALL` porque sobreescriria TODAS las categorias. Esta configuracion es comun en servidores porque los mensajes de error en ingles son mas faciles de buscar en documentacion. Se configura en `/etc/locale.conf` o `/etc/default/locale`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-010">
<div class="flashcard-front">

**P:** Que muestra el comando `timedatectl` y que subcomando activa la sincronizacion NTP?

</div>
<div class="flashcard-back">

**R:** b) Muestra la fecha, hora, zona horaria y estado de sincronizacion; `timedatectl set-ntp true`. `timedatectl` (o `timedatectl status`) muestra: hora local, hora UTC, hora del reloj RTC (hardware), zona horaria actual, si el reloj esta sincronizado con NTP y si el servicio NTP esta activo. `timedatectl set-ntp true` activa la sincronizacion de tiempo con NTP (generalmente `systemd-timesyncd` o `chrony`). Otros subcomandos utiles: `timedatectl set-timezone Europe/Madrid` (cambiar zona horaria), `timedatectl list-timezones` (listar zonas disponibles), `timedatectl set-time "2026-05-28 14:00:00"` (establecer fecha/hora manualmente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-011">
<div class="flashcard-front">

**P:** Que significa la abreviatura `i18n` en el contexto de la localizacion de software?

</div>
<div class="flashcard-back">

**R:** b) Internacionalizacion, con 18 letras entre la `i` y la `n`. `i18n` es la abreviatura de "internationalization" (internacionalizacion), donde el numero 18 representa las 18 letras entre la primera `i` y la ultima `n`. La internacionalizacion es el proceso de disenar software para que pueda adaptarse a diferentes idiomas y regiones sin modificar el codigo fuente. De forma similar, `l10n` es la abreviatura de "localization" (localizacion, 10 letras entre la `l` y la `n`), que es el proceso de adaptar el software a un idioma y region especificos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-012">
<div class="flashcard-front">

**P:** Si se ejecuta `export LC_ALL=en_US.UTF-8` en un sistema con `LANG=es_ES.UTF-8` y `LC_TIME=de_DE.UTF-8`, en que idioma se mostraran las fechas?

</div>
<div class="flashcard-back">

**R:** c) Ingles, porque `LC_ALL` sobreescribe todas las demas variables. `LC_ALL` tiene la maxima prioridad y sobreescribe TODAS las demas variables de locale, incluyendo tanto `LANG` como cualquier variable `LC_*` individual. El orden de prioridad es: `LC_ALL` > `LC_*` individuales > `LANG`. Por lo tanto, al definir `LC_ALL=en_US.UTF-8`, todo el sistema usara ingles: las fechas, los mensajes, los numeros, el formato de moneda, etc. Por esta razon, `LC_ALL` solo se recomienda para uso temporal, no para configuracion permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-013">
<div class="flashcard-front">

**P:** Que opcion de `iconv` permite intentar transliterar caracteres que no existen en la codificacion de destino?

</div>
<div class="flashcard-back">

**R:** b) `-t DESTINO//TRANSLIT`. La opcion `//TRANSLIT` se agrega al nombre de la codificacion de destino en la opcion `-t`. Por ejemplo: `iconv -f UTF-8 -t ASCII//TRANSLIT archivo.txt` intentara transliterar caracteres UTF-8 que no existen en ASCII (por ejemplo, convirtiendo `e` acentuada a `e` sin acento). Si la transliteracion no es posible, se genera un error. Otra opcion es `//IGNORE`, que simplemente omite los caracteres que no se pueden convertir.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-014">
<div class="flashcard-front">

**P:** Que archivo define la configuracion del locale del sistema en distribuciones basadas en Debian/Ubuntu?

</div>
<div class="flashcard-back">

**R:** b) `/etc/default/locale`. En Debian/Ubuntu, la configuracion del locale del sistema se almacena en `/etc/default/locale`, que contiene variables como `LANG="es_ES.UTF-8"`. En Red Hat/Fedora/Arch (sistemas con systemd), se usa `/etc/locale.conf`. El archivo `/etc/locale.gen` en Debian/Ubuntu contiene la lista de locales que se deben generar (se procesan con `locale-gen`). `/etc/sysconfig/locale` no es un archivo estandar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-015">
<div class="flashcard-front">

**P:** Que comando genera los locales configurados en `/etc/locale.gen` en un sistema Debian?

</div>
<div class="flashcard-back">

**R:** c) `locale-gen`. El comando `locale-gen` genera los locales listados y descomentados en `/etc/locale.gen`. En Debian/Ubuntu, los locales se deben generar antes de poder usarlos. El proceso consiste en editar `/etc/locale.gen` para descomentar las lineas de los locales deseados (por ejemplo, `es_ES.UTF-8 UTF-8`) y luego ejecutar `locale-gen`. Alternativamente, se puede usar `dpkg-reconfigure locales` (con `s` al final) que ofrece una interfaz interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-016">
<div class="flashcard-front">

**P:** Que directorio contiene todos los archivos de zona horaria del sistema?

</div>
<div class="flashcard-back">

**R:** b) `/usr/share/zoneinfo/`. El directorio `/usr/share/zoneinfo/` contiene archivos binarios con la informacion de cada zona horaria, organizados por region geografica (por ejemplo, `America/Mexico_City`, `Europe/Madrid`, `Asia/Tokyo`). El archivo `/etc/localtime` es un enlace simbolico que apunta al archivo de zona horaria activa dentro de este directorio. Para cambiar la zona horaria se puede modificar el enlace con `ln -sf /usr/share/zoneinfo/ZONA /etc/localtime` o usar `timedatectl set-timezone ZONA`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-017">
<div class="flashcard-front">

**P:** Que variable de locale controla especificamente el formato de presentacion de numeros (separador decimal y de miles)?

</div>
<div class="flashcard-back">

**R:** b) `LC_NUMERIC`. `LC_NUMERIC` controla el formato de numeros, incluyendo el separador decimal (punto o coma) y el separador de miles. Por ejemplo, en `es_ES.UTF-8` el separador decimal es la coma (1.234,56), mientras que en `en_US.UTF-8` es el punto (1,234.56). `LC_MONETARY` controla el formato de moneda. `LC_CTYPE` controla la clasificacion de caracteres. `LC_COLLATE` controla el orden de clasificacion de cadenas de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-018">
<div class="flashcard-front">

**P:** Que diferencia hay entre la codificacion ISO-8859-1 y la ISO-8859-15?

</div>
<div class="flashcard-back">

**R:** b) ISO-8859-15 incluye el simbolo del euro y algunos caracteres adicionales que ISO-8859-1 no tiene. ISO-8859-15 (tambien llamada Latin-9) es una revision de ISO-8859-1 (Latin-1) que reemplaza 8 caracteres poco usados por otros mas utiles, incluyendo el simbolo del euro, las letras ligadas francesa y finlandesa (OE, oe) y la S y Z con caron. Ambas son codificaciones de 8 bits (256 caracteres) para idiomas de Europa Occidental. Ninguna soporta caracteres asiaticos; para eso se necesita UTF-8.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-019">
<div class="flashcard-front">

**P:** Que comando de systemd cambia la zona horaria del sistema a America/Mexico_City?

</div>
<div class="flashcard-back">

**R:** b) `timedatectl set-timezone America/Mexico_City`. `timedatectl set-timezone America/Mexico_City` cambia la zona horaria del sistema de forma efectiva e inmediata, modificando el enlace simbolico `/etc/localtime`. `localectl` se usa para configurar el locale y el teclado, no la zona horaria. `tzselect` es una herramienta interactiva que ayuda a elegir una zona horaria pero NO cambia la configuracion del sistema. `systemctl timezone` no es un comando valido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-020">
<div class="flashcard-front">

**P:** Que comando permite configurar el layout del teclado de la consola virtual en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** b) `localectl set-keymap es`. `localectl set-keymap es` configura el layout del teclado de la consola virtual (VC Keymap) en sistemas con systemd. Para configurar el layout del teclado de X11 se usa `localectl set-x11-keymap es`. `setxkbmap` tambien puede configurar el teclado de X11 pero de forma temporal (solo para la sesion actual). `timedatectl` se usa para fecha, hora y zona horaria, no para el teclado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para mostrar la configuracion actual de todas las variables de locale del sistema. <input type="text" class="fill-blank" data-answer="locale" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** locale. El comando `locale` sin argumentos muestra el valor de todas las variables de locale: `LANG`, `LC_CTYPE`, `LC_NUMERIC`, `LC_TIME`, `LC_COLLATE`, `LC_MONETARY`, `LC_MESSAGES`, `LC_PAPER`, `LC_NAME`, `LC_ADDRESS`, `LC_TELEPHONE`, `LC_MEASUREMENT` y `LC_ALL`. Para listar todos los locales disponibles en el sistema se usa `locale -a`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para listar todos los locales disponibles en el sistema. <input type="text" class="fill-blank" data-answer="locale -a" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** locale -a. El comando `locale -a` lista todos los locales que estan generados y disponibles para su uso en el sistema. La lista incluye variantes como `es_ES.UTF-8`, `en_US.UTF-8`, `C`, `POSIX`, etc. En Debian/Ubuntu, los locales se generan con `locale-gen` a partir de `/etc/locale.gen`. En sistemas con systemd, se pueden listar tambien con `localectl list-locales`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando de `iconv` para convertir un archivo de ISO-8859-1 a UTF-8. <input type="text" class="fill-blank" data-answer="iconv -f ISO-8859-1 -t UTF-8" data-alt="iconv -f ISO-8859-1 -t UTF-8 archivo.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** iconv -f ISO-8859-1 -t UTF-8. El comando `iconv -f ISO-8859-1 -t UTF-8 archivo.txt` convierte el contenido de `archivo.txt` de la codificacion ISO-8859-1 a UTF-8. La opcion `-f` indica la codificacion de origen (from) y `-t` la de destino (to). La salida se envia a stdout por defecto; se puede redirigir con `> salida.txt` o usar la opcion `-o salida.txt`. Para listar todas las codificaciones disponibles: `iconv -l`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para cambiar la zona horaria del sistema a Europe/Madrid usando `timedatectl`. <input type="text" class="fill-blank" data-answer="timedatectl set-timezone Europe/Madrid" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** timedatectl set-timezone Europe/Madrid. El comando `timedatectl set-timezone Europe/Madrid` cambia la zona horaria del sistema, actualizando el enlace simbolico `/etc/localtime` para apuntar a `/usr/share/zoneinfo/Europe/Madrid`. Para listar todas las zonas horarias disponibles: `timedatectl list-timezones`. Para verificar la configuracion actual: `timedatectl status`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para establecer el locale del sistema a `es_ES.UTF-8` usando la herramienta de systemd. <input type="text" class="fill-blank" data-answer="localectl set-locale LANG=es_ES.UTF-8" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** localectl set-locale LANG=es_ES.UTF-8. El comando `localectl set-locale LANG=es_ES.UTF-8` establece el locale del sistema en distribuciones con systemd, escribiendo la configuracion en `/etc/locale.conf`. Se pueden configurar multiples variables a la vez: `localectl set-locale LANG=es_ES.UTF-8 LC_MESSAGES=en_US.UTF-8`. Para verificar la configuracion: `localectl status`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `LANG`?

</div>
<div class="flashcard-back">

**R:** Configuracion por defecto para todas las categorias

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `LC_CTYPE`?

</div>
<div class="flashcard-back">

**R:** Clasificacion de caracteres (mayusculas, minusculas, digitos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `LC_MESSAGES`?

</div>
<div class="flashcard-back">

**R:** Idioma de mensajes del sistema y aplicaciones

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `LC_NUMERIC`?

</div>
<div class="flashcard-back">

**R:** Formato de numeros (separador decimal, miles)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `LC_COLLATE`?

</div>
<div class="flashcard-back">

**R:** Orden de clasificacion de cadenas (sort)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-031">
<div class="flashcard-front">

**P:** Que es/son 2. Variables de locale?

</div>
<div class="flashcard-back">

**R:** Las variables de locale controlan diferentes aspectos de la configuracion regional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son 5. iconv - Conversion entre codificaciones?

</div>
<div class="flashcard-back">

**R:** `iconv` convierte texto de una codificacion a otra.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="107.3">
</div>

<div class="flashcard" data-id="107.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

