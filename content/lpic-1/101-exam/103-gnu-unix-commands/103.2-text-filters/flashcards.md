---
title: "103.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "103.2"
---

# Flashcards: 103.2 - Filtros De Texto

> 48 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita ver en tiempo real las nuevas lineas que se van anadiendo a un archivo de log. Cual de los siguientes comandos es el mas adecuado?

</div>
<div class="flashcard-back">

**R:** C) `tail -f /var/log/syslog`. La opcion `-f` (follow) de `tail` permite monitorizar un archivo en tiempo real, mostrando las nuevas lineas a medida que se escriben. Es el metodo estandar para seguir archivos de log. `head` no tiene opcion `-f`. `cat -f` no es una opcion valida para este proposito. `less` se usa para visualizacion interactiva paginada, no para seguimiento en tiempo real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-002">
<div class="flashcard-front">

**P:** Dado el archivo `datos.txt` con el siguiente contenido: ``` manzana naranja manzana pera naranja manzana ``` Que comando muestra cada fruta unica con su numero de ocurrencias, ordenado de mayor a menor frecuencia?

</div>
<div class="flashcard-back">

**R:** B) `sort datos.txt | uniq -c | sort -rn`. `uniq` solo elimina duplicados **adyacentes**, por lo que primero debemos ordenar con `sort` para que las lineas identicas queden juntas. Luego `uniq -c` cuenta las ocurrencias de cada linea. Finalmente `sort -rn` ordena numericamente en orden reverso (de mayor a menor). La opcion A fallaria porque `uniq` sin `sort` previo no eliminaria todos los duplicados. La opcion C tiene el mismo problema. La opcion D solo contaria cuantas frutas unicas hay, sin dar la frecuencia.  La salida seria: ```       3 manzana       2 naranja       1 pera ```

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-003">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos extrae correctamente los nombres de usuario (primer campo) del archivo `/etc/passwd`?

</div>
<div class="flashcard-back">

**R:** B) `cut -d ":" -f 1 /etc/passwd`. El archivo `/etc/passwd` usa `:` como delimitador de campos. La opcion `-d ":"` define el delimitador y `-f 1` selecciona el primer campo (nombre de usuario). La opcion A usa el delimitador por defecto (TAB), que no es correcto para `/etc/passwd`. La opcion C extrae solo el primer caracter de cada linea, no el primer campo. La opcion D usa espacio como delimitador, que tampoco es correcto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-004">
<div class="flashcard-front">

**P:** Que hace el siguiente comando?

</div>
<div class="flashcard-back">

**R:** C) Reemplaza todas las ocurrencias de "error" por "ERROR" en el archivo, guardando una copia del original como registro.log.bak. El comando `sed` con la opcion `-i.bak` modifica el archivo in-place (directamente en el archivo) y guarda una copia del archivo original con la extension `.bak` (registro.log.bak). El patron `s/error/ERROR/g` sustituye (`s`) todas (`g` = global) las ocurrencias de "error" por "ERROR". Sin la `g` al final, solo se reemplazaria la primera ocurrencia en cada linea.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-005">
<div class="flashcard-front">

**P:** Un usuario tiene un archivo con lineas de texto que contienen retornos de carro de Windows (`\r\n`) y necesita convertirlo al formato Linux (`\n`). Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** B) `tr -d '\r' < archivo.txt > archivo_limpio.txt`. El comando `tr -d '\r'` elimina todos los caracteres de retorno de carro (`\r`, que es el caracter adicional que Windows usa en los finales de linea). La entrada se redirige desde el archivo con `<` (ya que `tr` no acepta nombres de archivo como argumento, solo lee de stdin) y la salida limpia se redirige a un nuevo archivo. La opcion A haria lo contrario (anadira retornos de carro). Las opciones C y D no estan disenadas para este proposito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-006">
<div class="flashcard-front">

**P:** Que comando se utilizaria para dividir un archivo de 10 GB en partes de 500 MB cada una con el prefijo "parte_"?

</div>
<div class="flashcard-back">

**R:** C) `split -b 500M archivo.bin parte_`. `split -b 500M` divide el archivo en partes de 500 megabytes cada una. El prefijo "parte_" se usa para nombrar los archivos resultantes (parte_aa, parte_ab, parte_ac, etc.). La opcion A divide por lineas (-l), no por tamanho. La opcion B usa `cut` que es para extraer columnas/campos, no para dividir archivos. La opcion D usa `dd` que puede copiar bloques pero no divide automaticamente en multiples archivos con nombres secuenciales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-007">
<div class="flashcard-front">

**P:** Dado el siguiente archivo `numeros.txt`: ``` 5 3 8 3 1 5 ``` Cual sera la salida del comando `sort -n numeros.txt | uniq -d`?

</div>
<div class="flashcard-back">

**R:** A) `3` y `5` (las lineas duplicadas). Primero `sort -n` ordena numericamente: 1, 3, 3, 5, 5, 8. Luego `uniq -d` muestra **solo las lineas que aparecen mas de una vez** (duplicadas). Como 3 y 5 aparecen dos veces cada una, esas son las que se muestran. La opcion `-d` de uniq es lo contrario de `-u` (que mostraria solo las unicas: 1 y 8).  La salida seria: ``` 3 5 ```

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-008">
<div class="flashcard-front">

**P:** Un administrador necesita verificar que un archivo ISO descargado no se ha corrompido. Dispone del hash SHA-256 proporcionado por el sitio web. Cual de los siguientes comandos genera el hash SHA-256 del archivo descargado para compararlo?

</div>
<div class="flashcard-back">

**R:** B) `sha256sum ubuntu.iso`. `sha256sum` genera el hash SHA-256 de un archivo, que se puede comparar con el hash proporcionado por la fuente original para verificar la integridad del archivo. La opcion A genera un hash MD5, que es un algoritmo diferente y su hash no coincidiria con un SHA-256. La opcion C no es un comando valido en Linux. La opcion D genera un hash SHA-512, que tampoco coincidiria con un SHA-256. Tambien se puede verificar automaticamente con `sha256sum -c archivo.sha256` si se tiene un archivo con el hash esperado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-009">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `cat -n` y `cat -b` al numerar lineas de un archivo?

</div>
<div class="flashcard-back">

**R:** b) `-n` numera todas las lineas, `-b` numera solo las lineas no vacias. `cat -n` numera todas las lineas del archivo, incluyendo las lineas vacias. `cat -b` numera solo las lineas que contienen texto, omitiendo las lineas vacias del conteo. El comando `nl` por defecto se comporta como `cat -b`, numerando solo lineas no vacias. Para que `nl` numere todas las lineas se usa `nl -b a`. Esta distincion es relevante para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `tac archivo.txt`?

</div>
<div class="flashcard-back">

**R:** b) Muestra el archivo con las lineas en orden inverso (la ultima primero). `tac` es `cat` escrito al reves y hace exactamente eso: invierte el orden de las lineas de un archivo, mostrando la ultima linea primero y la primera al final. No invierte los caracteres dentro de cada linea ni las columnas. Es util para ver logs donde las entradas mas recientes estan al final del archivo. `tac` puede recibir multiples archivos como argumentos, invirtiendo las lineas de cada uno independientemente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-011">
<div class="flashcard-front">

**P:** Un administrador quiere ordenar el archivo `/etc/passwd` numericamente por el tercer campo (UID), usando `:` como delimitador. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** b) `sort -t ":" -k 3 -n /etc/passwd`. La opcion `-t ":"` define el delimitador de campos como dos puntos (el separador usado en `/etc/passwd`). `-k 3` indica ordenar por el tercer campo. `-n` indica ordenacion numerica en lugar de alfabetica. Sin `-t`, sort usaria espacios y tabulaciones como delimitadores, lo que no funcionaria para `/etc/passwd`. La opcion A no define el delimitador y fallaria. La opcion C usa `-d` que no es la opcion de delimitador en sort. La opcion D tiene sintaxis inventada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-012">
<div class="flashcard-front">

**P:** Que comando convierte todas las letras minusculas a mayusculas usando `tr`?

</div>
<div class="flashcard-back">

**R:** c) `tr 'a-z' 'A-Z' < archivo.txt`. `tr 'a-z' 'A-Z'` traduce (reemplaza) cada letra minuscula por su equivalente mayuscula. Tambien se puede usar con clases de caracteres: `tr '[:lower:]' '[:upper:]'`. La opcion A hace lo contrario (mayusculas a minusculas). La opcion B elimina (`-d`) todas las letras minusculas. La opcion D comprime (`-s`) letras minusculas repetidas. Es importante recordar que `tr` no acepta nombres de archivo como argumento y siempre lee de la entrada estandar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-013">
<div class="flashcard-front">

**P:** Que hace el comando `head -n -3 archivo.txt`?

</div>
<div class="flashcard-back">

**R:** c) Muestra todas las lineas excepto las 3 ultimas. Cuando `head` recibe un numero negativo con `-n`, muestra todas las lineas del archivo excepto las N ultimas. Asi, `head -n -3 archivo.txt` muestra todo el contenido menos las 3 ultimas lineas. De forma complementaria, `tail -n +3 archivo.txt` muestra desde la linea 3 hasta el final. `head -n 3` (sin signo negativo) muestra las primeras 3 lineas. Estos modificadores con signo son una herramienta poderosa para extraer rangos especificos de lineas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-014">
<div class="flashcard-front">

**P:** Que comando `paste` une todas las lineas de un archivo en una sola linea separada por comas?

</div>
<div class="flashcard-back">

**R:** b) `paste -s -d "," archivo.txt`. La opcion `-s` (serial) de `paste` une todas las lineas del archivo en una sola linea. La opcion `-d ","` establece la coma como delimitador entre los elementos. Sin `-s`, `paste` une lineas de multiples archivos lado a lado (por columnas). Sin `-d`, el delimitador por defecto es el tabulador. La opcion D tambien produciria un resultado similar pero con una coma extra al final, y no es la forma idiomatica de hacerlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-015">
<div class="flashcard-front">

**P:** Que paginador se considera mas potente que `more` y permite navegar hacia atras y buscar en ambas direcciones?

</div>
<div class="flashcard-back">

**R:** c) `less`. `less` es una version mejorada de `more` que permite navegacion completa en ambas direcciones. Su nombre viene del dicho "less is more". Permite avanzar y retroceder paginas (con `Space`/`b`), buscar hacia adelante (`/patron`) y hacia atras (`?patron`), ir al inicio (`g`) y al final (`G`). Las paginas de manual (`man`) usan `less` como paginador por defecto. `more` solo permite avanzar (con soporte limitado para retroceder en algunos sistemas). `cat` muestra todo el contenido de una vez sin paginacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-016">
<div class="flashcard-front">

**P:** Que hace la opcion `-i` en el comando `sed -i 's/foo/bar/g' archivo.txt`?

</div>
<div class="flashcard-back">

**R:** b) Modifica el archivo directamente (in-place) sin crear una copia. La opcion `-i` de `sed` modifica el archivo directamente en lugar de mostrar el resultado en la salida estandar. Sin `-i`, `sed` muestra el resultado modificado en la terminal pero el archivo original no cambia. Se puede crear un backup automatico anadiendo una extension: `sed -i.bak 's/foo/bar/g' archivo.txt` crea `archivo.txt.bak` con el contenido original antes de modificar. La opcion para ignorar mayusculas es la flag `i` al final del patron: `s/foo/bar/gi`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-017">
<div class="flashcard-front">

**P:** Que comando muestra el contenido de un archivo comprimido con gzip sin necesidad de descomprimirlo?

</div>
<div class="flashcard-back">

**R:** c) `zcat archivo.txt.gz`. `zcat` muestra el contenido de archivos comprimidos con gzip (.gz) en la salida estandar sin descomprimirlos en disco. Es equivalente a `gunzip -c`. Para archivos comprimidos con bzip2 (.bz2) se usa `bzcat` y para xz (.xz) se usa `xzcat`. La opcion A intentaria mostrar el contenido binario comprimido, mostrando caracteres ilegibles. La opcion B descomprimiria el archivo en disco (eliminando el .gz). La opcion D muestra informacion de compresion (ratio, tamanos) pero no el contenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-018">
<div class="flashcard-front">

**P:** Que comando `sed` elimina todas las lineas que contienen la palabra "error" en un archivo?

</div>
<div class="flashcard-back">

**R:** b) `sed '/error/d' archivo.txt`. `sed '/error/d'` busca las lineas que contienen el patron "error" y las elimina (`d` = delete). La opcion A sustituye la primera ocurrencia de "error" por nada en cada linea, pero no elimina la linea completa. La opcion C con `-n` y `p` hace lo contrario: muestra solo las lineas que contienen "error". La opcion D tiene una sintaxis invalida. Para eliminar lineas por numero se usa `sed '3d'` (elimina linea 3) o `sed '2,5d'` (elimina lineas 2 a 5).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-019">
<div class="flashcard-front">

**P:** Que comando usarias para numerar todas las lineas de un archivo, incluyendo las vacias, usando `nl`?

</div>
<div class="flashcard-back">

**R:** nl -b a archivo.txt. `nl -b a` numera todas las lineas del archivo, incluyendo las vacias. La opcion `-b` define el estilo de numeracion del cuerpo: `a` (all) numera todas las lineas, `t` (text, por defecto) numera solo lineas no vacias. Otras opciones utiles de `nl` son `-s '. '` para definir el separador despues del numero, `-w 3` para definir el ancho del numero y `-n rz` para alinear a la derecha con ceros (001, 002...).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-020">
<div class="flashcard-front">

**P:** Que comando usarias para contar el numero de lineas en un archivo?

</div>
<div class="flashcard-back">

**R:** wc -l archivo.txt. `wc -l` cuenta el numero de lineas de un archivo. Sin opciones, `wc` muestra tres valores: lineas, palabras y bytes. Otras opciones utiles son `-w` (palabras), `-c` (bytes), `-m` (caracteres) y `-L` (longitud de la linea mas larga). `wc -l` se usa frecuentemente con pipes: `ls /etc | wc -l` cuenta cuantos archivos hay en `/etc`, y `cat /etc/passwd | wc -l` cuenta cuantos usuarios hay en el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-021">
<div class="flashcard-front">

**P:** Que comando usarias para convertir tabulaciones en 4 espacios en un archivo?

</div>
<div class="flashcard-back">

**R:** expand -t 4 archivo.txt. `expand` convierte tabulaciones en espacios. La opcion `-t 4` indica que cada tabulacion se reemplaza por 4 espacios (por defecto son 8). El comando contrario es `unexpand`, que convierte espacios en tabulaciones. `unexpand -a` convierte todos los espacios (no solo los iniciales) y `unexpand -t 4` establece 4 espacios como equivalente a un tabulador. Estos comandos son utiles para estandarizar la indentacion en archivos de texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-022">
<div class="flashcard-front">

**P:** Que comando reformatea un archivo de texto para que las lineas tengan un maximo de 60 caracteres?

</div>
<div class="flashcard-back">

**R:** fmt -w 60 archivo.txt. `fmt` reformatea texto ajustando el ancho de las lineas. La opcion `-w 60` establece el ancho maximo en 60 caracteres por linea (por defecto es 75). `fmt` intenta mantener las palabras completas, partiendo las lineas en espacios. La opcion `-u` establece espaciado uniforme (un espacio entre palabras, dos despues de punto). `fmt` es util para reformatear textos que tienen lineas muy largas o muy cortas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-023">
<div class="flashcard-front">

**P:** Que comando usarias para mostrar solo la linea 5 de un archivo usando `sed`?

</div>
<div class="flashcard-back">

**R:** sed -n '5p' archivo.txt. `sed -n '5p'` muestra unicamente la linea 5 del archivo. La opcion `-n` suprime la salida por defecto de sed (que normalmente imprime todas las lineas) y `p` (print) imprime solo la linea especificada. Sin `-n`, la linea 5 apareceria duplicada. Para mostrar un rango de lineas se usa `sed -n '2,5p'` (lineas 2 a 5). Para mostrar lineas que contienen un patron: `sed -n '/patron/p'`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-024">
<div class="flashcard-front">

**P:** Tip de examen: `tac` es simplemente `cat` escrito al reves y hace exactamente eso: invierte el ...

</div>
<div class="flashcard-back">

**R:** `tac` es simplemente `cat` escrito al reves y hace exactamente eso: invierte el orden de las lineas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-025">
<div class="flashcard-front">

**P:** Tip de examen: `less` es mas potente que `more` (permite retroceder, buscar hacia atras). Las p...

</div>
<div class="flashcard-back">

**R:** `less` es mas potente que `more` (permite retroceder, buscar hacia atras). Las paginas de manual (`man`) usan `less` como paginador por defecto. Las teclas de navegacion de less son iguales a las de `man` y vi.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `uniq` solo elimina duplicados **adyacentes**. Si las lineas duplicadas no estan...

</div>
<div class="flashcard-back">

**R:** `uniq` solo elimina duplicados **adyacentes**. Si las lineas duplicadas no estan juntas, no las detectara. Por eso casi siempre se usa junto con `sort`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `-d` define el delimitador (por defecto TAB), `-f` selecciona campos, `-c` selec...

</div>
<div class="flashcard-back">

**R:** `-d` define el delimitador (por defecto TAB), `-f` selecciona campos, `-c` selecciona caracteres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: MD5 se considera inseguro para criptografia pero sigue siendo util para verifica...

</div>
<div class="flashcard-back">

**R:** MD5 se considera inseguro para criptografia pero sigue siendo util para verificacion de integridad basica. SHA-256 y SHA-512 son mas seguros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `b`?

</div>
<div class="flashcard-back">

**R:** Retroceder una pagina (no en todos los sistemas)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `n`?

</div>
<div class="flashcard-back">

**R:** Siguiente coincidencia de busqueda

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `v`?

</div>
<div class="flashcard-back">

**R:** Abrir el archivo en el editor ($EDITOR)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `-N`?

</div>
<div class="flashcard-back">

**R:** Alternar numeros de linea (estando dentro de less)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-033">
<div class="flashcard-front">

**P:** Estas dentro de `less` visualizando un archivo de 5000 lineas. Necesitas buscar la palabra "CRITICAL" hacia atras desde tu posicion actual, ir a la linea 200 y luego salir. Que secuencia de teclas usas?

</div>
<div class="flashcard-back">

**R:** 1) `?CRITICAL` para buscar hacia atras (mientras que `/CRITICAL` busca hacia adelante). 2) `200g` o `200G` para ir directamente a la linea 200. 3) `q` para salir. Diferencias clave con `more`: `more` no permite buscar hacia atras (`?`) ni retroceder paginas con `b` en todos los sistemas. `less` carga el archivo de forma lazy (no necesita leer todo el archivo para empezar), mientras que `more` en algunos sistemas lo carga completo. Las paginas `man` usan `less` como paginador por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-034">
<div class="flashcard-front">

**P:** Escribe el comando para ordenar el archivo `datos.csv` numericamente por el tercer campo, usando coma como delimitador, y en orden inverso (de mayor a menor):

<input type="text" class="fill-blank" data-answer="sort -t ',' -k 3 -n -r datos.csv" data-alt="sort -t, -k3 -nr datos.csv,sort -t ',' -k3 -nr datos.csv,sort -rn -t ',' -k 3 datos.csv" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `sort -t ',' -k 3 -n -r datos.csv`. Opciones clave de `sort`: `-t` define el delimitador (por defecto espacios/tabs). `-k 3` ordena por el tercer campo. `-n` ordena numericamente (sin esto, "9" iria despues de "80" en orden alfabetico). `-r` invierte el orden (descendente). Otras opciones importantes: `-u` elimina duplicados (como `sort | uniq`), `-f` ignora mayusculas/minusculas, `-h` ordena por tamanhos legibles (1K, 2M, 3G). Se pueden combinar multiples claves: `sort -k1,1 -k2,2n` ordena por campo 1 alfabeticamente y luego por campo 2 numericamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-035">
<div class="flashcard-front">

**P:** Un archivo `accesos.log` tiene lineas duplicadas tanto consecutivas como no consecutivas. Quieres obtener solo las lineas que aparecen exactamente una vez (no duplicadas). Que combinacion de comandos usas?

</div>
<div class="flashcard-back">

**R:** `sort accesos.log | uniq -u`. Primero `sort` ordena las lineas para que las duplicadas queden adyacentes (requisito de `uniq`). Luego `uniq -u` muestra solo las lineas que aparecen **una unica vez** (las unicas, no las duplicadas). Opciones clave de `uniq`: `-d` muestra solo lineas duplicadas (lo contrario de `-u`). `-c` antepone el conteo de ocurrencias a cada linea. `-i` ignora mayusculas/minusculas al comparar. `-f N` salta los primeros N campos al comparar. `-s N` salta los primeros N caracteres. Trampa del examen: `uniq` sin `sort` previo solo detecta duplicados **adyacentes** -- si las lineas repetidas no estan juntas, `uniq` no las eliminara.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-036">
<div class="flashcard-front">

**P:** Quieres saber cuantos usuarios tienen `/bin/bash` como shell en el sistema. Escribe el comando usando `grep` y `wc`:

<input type="text" class="fill-blank" data-answer="grep '/bin/bash' /etc/passwd | wc -l" data-alt="grep /bin/bash /etc/passwd | wc -l,grep -c '/bin/bash' /etc/passwd,grep -c /bin/bash /etc/passwd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `grep '/bin/bash' /etc/passwd | wc -l` o directamente `grep -c '/bin/bash' /etc/passwd`. `wc -l` cuenta lineas. Sin opciones, `wc` muestra tres valores: lineas, palabras y bytes. Opciones importantes: `-l` lineas, `-w` palabras, `-c` bytes, `-m` caracteres (diferente de bytes en UTF-8), `-L` longitud de la linea mas larga. Usos frecuentes en pipes: `ls /etc | wc -l` cuenta archivos en `/etc`. `wc -l < archivo.txt` muestra solo el numero sin el nombre del archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-037">
<div class="flashcard-front">

**P:** Del archivo `/etc/passwd`, necesitas extraer solo el nombre de usuario (campo 1) y el directorio home (campo 6). Escribe el comando con `cut`:

<input type="text" class="fill-blank" data-answer="cut -d ':' -f 1,6 /etc/passwd" data-alt="cut -d: -f1,6 /etc/passwd,cut -d ':' -f1,6 /etc/passwd,cut -f 1,6 -d ':' /etc/passwd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `cut -d ':' -f 1,6 /etc/passwd`. La opcion `-d ':'` define los dos puntos como delimitador (por defecto es TAB). `-f 1,6` selecciona los campos 1 y 6. Se pueden seleccionar rangos: `-f 1-3` (campos 1 a 3), `-f 3-` (del campo 3 al final). Otra opcion es `-c` para seleccionar por posicion de caracteres: `cut -c 1-5` extrae los primeros 5 caracteres de cada linea. Diferencia clave: `-f` trabaja con campos delimitados, `-c` trabaja con posiciones de caracteres. `cut` no soporta expresiones regulares como delimitador -- para eso se usa `awk`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-038">
<div class="flashcard-front">

**P:** Tienes dos archivos: `nombres.txt` (con nombres) y `emails.txt` (con emails), uno por linea. Necesitas generar un archivo CSV combinando ambos con coma como separador. Que comando usas?

</div>
<div class="flashcard-back">

**R:** `paste -d ',' nombres.txt emails.txt > resultado.csv`. `paste` une lineas de multiples archivos lado a lado (en columnas). `-d ','` define la coma como delimitador (por defecto es TAB). Sin `-d`, la salida usaria tabuladores. La opcion `-s` (serial) cambia el comportamiento: en lugar de unir archivos en columnas, une todas las lineas de cada archivo en una sola linea. Ejemplo: `paste -s -d '+' numeros.txt` une todas las lineas con `+` (util para crear expresiones que luego se pasan a `bc`). `paste` puede recibir entrada de stdin con `-`: `cat archivo.txt | paste - -` muestra la entrada en dos columnas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-039">
<div class="flashcard-front">

**P:** Tienes `empleados.txt` (ID y nombre) y `salarios.txt` (ID y salario), ambos ordenados por ID. Quieres unirlos por el campo ID comun. Que comando usas y cual es el requisito previo obligatorio?

</div>
<div class="flashcard-back">

**R:** `join empleados.txt salarios.txt`. `join` une lineas de dos archivos que comparten un campo comun (similar a un JOIN en SQL). **Requisito obligatorio**: ambos archivos deben estar **ordenados** por el campo de union; si no lo estan, `join` producira resultados incorrectos o errores. Por defecto une por el primer campo usando espacio como delimitador. Opciones clave: `-t ':'` cambia el delimitador, `-1 2 -2 3` une el campo 2 del archivo 1 con el campo 3 del archivo 2, `-a 1` muestra tambien las lineas del archivo 1 sin pareja (como LEFT JOIN en SQL), `-o '1.1,1.2,2.2'` controla los campos de salida. Diferencia con `paste`: `paste` une por posicion de linea, `join` une por valor de campo comun.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-040">
<div class="flashcard-front">

**P:** Necesitas eliminar todos los digitos de un archivo y ademas comprimir los espacios multiples en uno solo. Escribe el comando con `tr` (recuerda: `tr` no acepta archivos como argumento):

<input type="text" class="fill-blank" data-answer="tr -d '0-9' < archivo.txt | tr -s ' '" data-alt="tr -d '[:digit:]' < archivo.txt | tr -s ' ',tr -d '[0-9]' < archivo.txt | tr -s ' '" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `tr -d '0-9' < archivo.txt | tr -s ' '`. `tr` solo lee de stdin (nunca acepta nombres de archivo como argumento). Opciones clave: `-d` elimina caracteres del conjunto especificado. `-s` (squeeze) comprime caracteres repetidos consecutivos en uno solo. `-c` complementa el conjunto (todos los caracteres que NO estan en el conjunto). Clases POSIX soportadas: `[:digit:]`, `[:alpha:]`, `[:lower:]`, `[:upper:]`, `[:space:]`, `[:alnum:]`. Ejemplos frecuentes en examen: `tr 'a-z' 'A-Z'` convierte minusculas a mayusculas, `tr -d '\r'` elimina retornos de carro de Windows, `tr -s '\n'` elimina lineas vacias consecutivas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-041">
<div class="flashcard-front">

**P:** Tienes un archivo `readme.txt` con lineas de longitud irregular (algunas de 200 caracteres, otras de 10). Quieres reformatearlo para que todas las lineas tengan un maximo de 50 caracteres y con espaciado uniforme. Que comando usas?

</div>
<div class="flashcard-back">

**R:** `fmt -w 50 -u readme.txt`. `fmt` reformatea texto ajustando el ancho de las lineas. `-w 50` establece el ancho maximo en 50 caracteres (por defecto es 75). `-u` aplica espaciado uniforme: un espacio entre palabras y dos despues de punto final. `fmt` respeta los parrafos (lineas vacias separan parrafos) e intenta mantener las palabras completas sin cortarlas. Diferencia con `fold`: `fold -w 50` corta las lineas exactamente en 50 caracteres, incluso partiendo palabras a la mitad, mientras que `fmt` inteligentemente ajusta los saltos de linea en los espacios entre palabras. `fmt` es mas adecuado para texto legible; `fold` para datos en bruto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-042">
<div class="flashcard-front">

**P:** Necesitas preparar un archivo de texto para impresion con cabecera personalizada "Informe Mensual", en formato de 2 columnas. Que comando `pr` usarias?

</div>
<div class="flashcard-back">

**R:** `pr -h "Informe Mensual" -2 archivo.txt`. `pr` prepara archivos de texto para impresion. Por defecto anade una cabecera con fecha, nombre del archivo y numero de pagina en cada pagina (66 lineas por pagina). Opciones clave: `-h "titulo"` define una cabecera personalizada. `-2` o `--columns=2` formatea en 2 columnas. `-l N` establece el largo de pagina en N lineas. `-d` doble espacio entre lineas. `-t` suprime la cabecera y el pie de pagina. `-o N` anade un margen izquierdo de N espacios. `-w N` establece el ancho de pagina. Ejemplo combinado: `pr -t -2 -w 80 datos.txt` formatea en 2 columnas de 80 caracteres sin cabecera.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-043">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `nl archivo.txt`, `nl -b a archivo.txt` y `cat -n archivo.txt` cuando el archivo contiene lineas vacias?

</div>
<div class="flashcard-back">

**R:** `nl` (sin opciones) y `cat -b` numeran solo las lineas con contenido, saltando las vacias. `nl -b a` y `cat -n` numeran **todas** las lineas, incluyendo las vacias. La opcion `-b` de `nl` controla el estilo de numeracion del cuerpo: `t` (text, por defecto) numera solo lineas no vacias, `a` (all) numera todas, `n` (none) no numera ninguna, `pPATRON` numera solo lineas que coincidan con el patron. Opciones adicionales de `nl`: `-s '. '` define el separador despues del numero (por defecto es TAB), `-w 3` define el ancho del numero (por defecto 6), `-n rz` alinea a la derecha con ceros (001, 002...), `-n ln` alinea a la izquierda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-044">
<div class="flashcard-front">

**P:** Tienes un archivo de log de 2 millones de lineas. Quieres dividirlo en archivos de 10000 lineas cada uno con el prefijo `log_parte_` y sufijos numericos (00, 01, 02...). Escribe el comando:

<input type="text" class="fill-blank" data-answer="split -l 10000 -d archivo.log log_parte_" data-alt="split -l 10000 --numeric-suffixes archivo.log log_parte_,split -d -l 10000 archivo.log log_parte_" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `split -l 10000 -d archivo.log log_parte_`. `-l 10000` divide por numero de lineas (10000 por archivo). `-d` usa sufijos numericos (00, 01, 02...) en lugar de los alfabeticos por defecto (aa, ab, ac...). El ultimo argumento es el prefijo para los archivos resultantes. Otras opciones: `-b 100M` divide por tamanho (100 MB por archivo), `-n 5` divide en exactamente 5 partes iguales, `-a 3` usa sufijos de 3 caracteres (000, 001...). Para reconstruir el archivo original: `cat log_parte_* > archivo_completo.log`. Los archivos se generan en orden alfabetico/numerico, por lo que `cat *` los une correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-045">
<div class="flashcard-front">

**P:** Escribe un comando `sed` que: 1) elimine las lineas 1 a 5 del archivo, 2) reemplace todas las ocurrencias de "http" por "https" en las lineas restantes, y 3) modifique el archivo directamente con backup `.bak`:

<input type="text" class="fill-blank" data-answer="sed -i.bak '1,5d; s/http/https/g' archivo.txt" data-alt="sed -i.bak -e '1,5d' -e 's/http/https/g' archivo.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `sed -i.bak '1,5d; s/http/https/g' archivo.txt`. Desglose: `-i.bak` modifica in-place y guarda backup con extension `.bak`. `1,5d` elimina las lineas 1 a 5. `s/http/https/g` sustituye globalmente en cada linea. Se pueden encadenar con `;` o con multiples `-e`. Resumen de operaciones de `sed` para el examen: `d` elimina lineas, `s/viejo/nuevo/g` sustituye (sin `g` solo la primera ocurrencia por linea), `p` imprime (con `-n`), `a\texto` anade linea despues, `i\texto` inserta linea antes, `y/abc/ABC/` transliterar caracteres (como `tr`). Direccionamiento: `'3d'` linea 3, `'2,5d'` rango, `'/patron/d'` por patron.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-046">
<div class="flashcard-front">

**P:** Has descargado una ISO de Linux y tienes un archivo `ubuntu.sha256` con el hash esperado. Que comando verifica automaticamente que el hash de la ISO coincida con el del archivo sin comparar visualmente?

</div>
<div class="flashcard-back">

**R:** `sha256sum -c ubuntu.sha256`. La opcion `-c` (check) lee los hashes del archivo y los compara automaticamente con los archivos referenciados, mostrando "OK" o "FAILED" para cada uno. El archivo de verificacion debe tener el formato: `hash  nombre_archivo`. Comandos de checksum en Linux: `md5sum` (MD5, 128 bits -- inseguro para criptografia pero valido para integridad basica), `sha1sum` (SHA-1, 160 bits -- tambien considerado debil), `sha256sum` (SHA-256, 256 bits -- recomendado), `sha512sum` (SHA-512, 512 bits). Todos siguen la misma sintaxis: `comando archivo` para generar, `comando -c archivo.sum` para verificar. Trampa del examen: no confundir `md5sum` con `md5` (este ultimo es de BSD, no existe en Linux por defecto).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-047">
<div class="flashcard-front">

**P:** Completa la tabla: para ver el contenido de un archivo comprimido **sin descomprimirlo en disco**, que comando usas segun el formato de compresion?
- `.gz` (gzip) ->
- `.bz2` (bzip2) ->
- `.xz` (xz) ->

</div>
<div class="flashcard-back">

**R:** `.gz` -> `zcat` (equivalente a `gunzip -c`). `.bz2` -> `bzcat` (equivalente a `bunzip2 -c`). `.xz` -> `xzcat` (equivalente a `unxz -c`). Tambien existen versiones de otros comandos para archivos comprimidos: `zless`/`bzless`/`xzless` para paginar, `zgrep`/`bzgrep`/`xzgrep` para buscar patrones, `zdiff`/`bzdiff`/`xzdiff` para comparar. La opcion `-c` en los descompresores (`gunzip -c`, `bunzip2 -c`, `unxz -c`) envia la salida a stdout en lugar de descomprimir el archivo en disco. Trampa del examen: `cat archivo.gz` mostraria basura binaria, no el contenido legible -- siempre hay que usar `zcat`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.2">
</div>

<div class="flashcard" data-id="103.2-fc-048">
<div class="flashcard-front">

**P:** Marca como VERDADERO o FALSO cada afirmacion (trampas clasicas del examen LPIC-1 103.2):
1) `uniq` elimina todos los duplicados de un archivo sin necesidad de ordenar primero.
2) `tr` puede recibir un nombre de archivo como argumento.
3) `cut -d ':' -f1` y `awk -F':' '{print $1}'` producen el mismo resultado.
4) `sed 's/foo/bar/'` reemplaza todas las ocurrencias de "foo" en cada linea.

</div>
<div class="flashcard-back">

**R:** 1) **FALSO** -- `uniq` solo elimina duplicados **adyacentes**. Para eliminar todos, primero hay que ordenar: `sort | uniq`. 2) **FALSO** -- `tr` solo lee de stdin. Se usa con redireccion: `tr 'a' 'b' < archivo.txt`. Pasar un archivo como argumento causa error. 3) **VERDADERO** -- ambos extraen el primer campo usando `:` como delimitador. Pero `awk` es mas flexible (soporta regex como delimitador, multiples acciones). 4) **FALSO** -- sin la flag `g` al final, `sed 's/foo/bar/'` solo reemplaza la **primera** ocurrencia en cada linea. Para todas: `sed 's/foo/bar/g'`. Estas cuatro trampas son de las mas frecuentes en el examen real.

</div>
</div>

---

