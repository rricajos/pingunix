---
title: "103.2 - Procesar flujos de texto con filtros: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.2"
---

# 103.2 - Procesar flujos de texto con filtros: Ejercicios

### Pregunta 1
Un administrador necesita ver en tiempo real las nuevas lineas que se van anadiendo a un archivo de log. Cual de los siguientes comandos es el mas adecuado?

A) `head -f /var/log/syslog`
B) `cat -f /var/log/syslog`
C) `tail -f /var/log/syslog`
D) `less -f /var/log/syslog`

<details>
<summary>Respuesta</summary>

**C) `tail -f /var/log/syslog`**

La opcion `-f` (follow) de `tail` permite monitorizar un archivo en tiempo real, mostrando las nuevas lineas a medida que se escriben. Es el metodo estandar para seguir archivos de log. `head` no tiene opcion `-f`. `cat -f` no es una opcion valida para este proposito. `less` se usa para visualizacion interactiva paginada, no para seguimiento en tiempo real.
</details>

---

### Pregunta 2
Dado el archivo `datos.txt` con el siguiente contenido:
```
manzana
naranja
manzana
pera
naranja
manzana
```
Que comando muestra cada fruta unica con su numero de ocurrencias, ordenado de mayor a menor frecuencia?

A) `uniq -c datos.txt | sort -rn`
B) `sort datos.txt | uniq -c | sort -rn`
C) `cat datos.txt | uniq -c | sort -n`
D) `sort -u datos.txt | wc -l`

<details>
<summary>Respuesta</summary>

**B) `sort datos.txt | uniq -c | sort -rn`**

`uniq` solo elimina duplicados **adyacentes**, por lo que primero debemos ordenar con `sort` para que las lineas identicas queden juntas. Luego `uniq -c` cuenta las ocurrencias de cada linea. Finalmente `sort -rn` ordena numericamente en orden reverso (de mayor a menor). La opcion A fallaria porque `uniq` sin `sort` previo no eliminaria todos los duplicados. La opcion C tiene el mismo problema. La opcion D solo contaria cuantas frutas unicas hay, sin dar la frecuencia.

La salida seria:
```
      3 manzana
      2 naranja
      1 pera
```
</details>

---

### Pregunta 3
Cual de los siguientes comandos extrae correctamente los nombres de usuario (primer campo) del archivo `/etc/passwd`?

A) `cut -f 1 /etc/passwd`
B) `cut -d ":" -f 1 /etc/passwd`
C) `cut -c 1 /etc/passwd`
D) `cut -d " " -f 1 /etc/passwd`

<details>
<summary>Respuesta</summary>

**B) `cut -d ":" -f 1 /etc/passwd`**

El archivo `/etc/passwd` usa `:` como delimitador de campos. La opcion `-d ":"` define el delimitador y `-f 1` selecciona el primer campo (nombre de usuario). La opcion A usa el delimitador por defecto (TAB), que no es correcto para `/etc/passwd`. La opcion C extrae solo el primer caracter de cada linea, no el primer campo. La opcion D usa espacio como delimitador, que tampoco es correcto.
</details>

---

### Pregunta 4
Que hace el siguiente comando?
```bash
sed -i.bak 's/error/ERROR/g' registro.log
```

A) Muestra las lineas que contienen "error" en registro.log
B) Reemplaza la primera ocurrencia de "error" por "ERROR" y crea un backup
C) Reemplaza todas las ocurrencias de "error" por "ERROR" en el archivo, guardando una copia del original como registro.log.bak
D) Borra todas las lineas que contienen "error" en registro.log

<details>
<summary>Respuesta</summary>

**C) Reemplaza todas las ocurrencias de "error" por "ERROR" en el archivo, guardando una copia del original como registro.log.bak**

El comando `sed` con la opcion `-i.bak` modifica el archivo in-place (directamente en el archivo) y guarda una copia del archivo original con la extension `.bak` (registro.log.bak). El patron `s/error/ERROR/g` sustituye (`s`) todas (`g` = global) las ocurrencias de "error" por "ERROR". Sin la `g` al final, solo se reemplazaria la primera ocurrencia en cada linea.
</details>

---

### Pregunta 5
Un usuario tiene un archivo con lineas de texto que contienen retornos de carro de Windows (`\r\n`) y necesita convertirlo al formato Linux (`\n`). Cual es el comando correcto?

A) `sed 's/\n/\r\n/g' archivo.txt`
B) `tr -d '\r' < archivo.txt > archivo_limpio.txt`
C) `cut -d '\r' archivo.txt`
D) `fmt -w 80 archivo.txt`

<details>
<summary>Respuesta</summary>

**B) `tr -d '\r' < archivo.txt > archivo_limpio.txt`**

El comando `tr -d '\r'` elimina todos los caracteres de retorno de carro (`\r`, que es el caracter adicional que Windows usa en los finales de linea). La entrada se redirige desde el archivo con `<` (ya que `tr` no acepta nombres de archivo como argumento, solo lee de stdin) y la salida limpia se redirige a un nuevo archivo. La opcion A haria lo contrario (anadira retornos de carro). Las opciones C y D no estan disenadas para este proposito.
</details>

---

### Pregunta 6
Que comando se utilizaria para dividir un archivo de 10 GB en partes de 500 MB cada una con el prefijo "parte_"?

A) `split -l 500 archivo.bin parte_`
B) `cut -b 500M archivo.bin parte_`
C) `split -b 500M archivo.bin parte_`
D) `dd if=archivo.bin bs=500M`

<details>
<summary>Respuesta</summary>

**C) `split -b 500M archivo.bin parte_`**

`split -b 500M` divide el archivo en partes de 500 megabytes cada una. El prefijo "parte_" se usa para nombrar los archivos resultantes (parte_aa, parte_ab, parte_ac, etc.). La opcion A divide por lineas (-l), no por tamanho. La opcion B usa `cut` que es para extraer columnas/campos, no para dividir archivos. La opcion D usa `dd` que puede copiar bloques pero no divide automaticamente en multiples archivos con nombres secuenciales.
</details>

---

### Pregunta 7
Dado el siguiente archivo `numeros.txt`:
```
5
3
8
3
1
5
```
Cual sera la salida del comando `sort -n numeros.txt | uniq -d`?

A) `3` y `5` (las lineas duplicadas)
B) `1` y `8` (las lineas unicas)
C) `1 3 3 5 5 8`
D) Solo `3`

<details>
<summary>Respuesta</summary>

**A) `3` y `5` (las lineas duplicadas)**

Primero `sort -n` ordena numericamente: 1, 3, 3, 5, 5, 8. Luego `uniq -d` muestra **solo las lineas que aparecen mas de una vez** (duplicadas). Como 3 y 5 aparecen dos veces cada una, esas son las que se muestran. La opcion `-d` de uniq es lo contrario de `-u` (que mostraria solo las unicas: 1 y 8).

La salida seria:
```
3
5
```
</details>

---

### Pregunta 8
Un administrador necesita verificar que un archivo ISO descargado no se ha corrompido. Dispone del hash SHA-256 proporcionado por el sitio web. Cual de los siguientes comandos genera el hash SHA-256 del archivo descargado para compararlo?

A) `md5sum ubuntu.iso`
B) `sha256sum ubuntu.iso`
C) `checksum -sha256 ubuntu.iso`
D) `sha512sum ubuntu.iso`

<details>
<summary>Respuesta</summary>

**B) `sha256sum ubuntu.iso`**

`sha256sum` genera el hash SHA-256 de un archivo, que se puede comparar con el hash proporcionado por la fuente original para verificar la integridad del archivo. La opcion A genera un hash MD5, que es un algoritmo diferente y su hash no coincidiria con un SHA-256. La opcion C no es un comando valido en Linux. La opcion D genera un hash SHA-512, que tampoco coincidiria con un SHA-256. Tambien se puede verificar automaticamente con `sha256sum -c archivo.sha256` si se tiene un archivo con el hash esperado.
</details>

### Pregunta 9

Cual es la diferencia entre `cat -n` y `cat -b` al numerar lineas de un archivo?

a) `-n` numera solo lineas no vacias, `-b` numera todas las lineas
b) `-n` numera todas las lineas, `-b` numera solo las lineas no vacias
c) Son equivalentes, ambos numeran todas las lineas
d) `-b` numera en formato binario y `-n` en decimal

<details><summary>Respuesta</summary>

**b) `-n` numera todas las lineas, `-b` numera solo las lineas no vacias**

`cat -n` numera todas las lineas del archivo, incluyendo las lineas vacias. `cat -b` numera solo las lineas que contienen texto, omitiendo las lineas vacias del conteo. El comando `nl` por defecto se comporta como `cat -b`, numerando solo lineas no vacias. Para que `nl` numere todas las lineas se usa `nl -b a`. Esta distincion es relevante para el examen LPIC-1.

</details>

### Pregunta 10

Que hace el comando `tac archivo.txt`?

a) Muestra el archivo con las columnas invertidas
b) Muestra el archivo con las lineas en orden inverso (la ultima primero)
c) Muestra el archivo con los caracteres de cada linea invertidos
d) Concatena el archivo consigo mismo

<details><summary>Respuesta</summary>

**b) Muestra el archivo con las lineas en orden inverso (la ultima primero)**

`tac` es `cat` escrito al reves y hace exactamente eso: invierte el orden de las lineas de un archivo, mostrando la ultima linea primero y la primera al final. No invierte los caracteres dentro de cada linea ni las columnas. Es util para ver logs donde las entradas mas recientes estan al final del archivo. `tac` puede recibir multiples archivos como argumentos, invirtiendo las lineas de cada uno independientemente.

</details>

### Pregunta 11

Un administrador quiere ordenar el archivo `/etc/passwd` numericamente por el tercer campo (UID), usando `:` como delimitador. Cual es el comando correcto?

a) `sort -n -k 3 /etc/passwd`
b) `sort -t ":" -k 3 -n /etc/passwd`
c) `sort -d ":" -f 3 /etc/passwd`
d) `sort --field=3 --numeric /etc/passwd`

<details><summary>Respuesta</summary>

**b) `sort -t ":" -k 3 -n /etc/passwd`**

La opcion `-t ":"` define el delimitador de campos como dos puntos (el separador usado en `/etc/passwd`). `-k 3` indica ordenar por el tercer campo. `-n` indica ordenacion numerica en lugar de alfabetica. Sin `-t`, sort usaria espacios y tabulaciones como delimitadores, lo que no funcionaria para `/etc/passwd`. La opcion A no define el delimitador y fallaria. La opcion C usa `-d` que no es la opcion de delimitador en sort. La opcion D tiene sintaxis inventada.

</details>

### Pregunta 12

Que comando convierte todas las letras minusculas a mayusculas usando `tr`?

a) `tr 'A-Z' 'a-z' < archivo.txt`
b) `tr -d 'a-z' < archivo.txt`
c) `tr 'a-z' 'A-Z' < archivo.txt`
d) `tr -s 'a-z' < archivo.txt`

<details><summary>Respuesta</summary>

**c) `tr 'a-z' 'A-Z' < archivo.txt`**

`tr 'a-z' 'A-Z'` traduce (reemplaza) cada letra minuscula por su equivalente mayuscula. Tambien se puede usar con clases de caracteres: `tr '[:lower:]' '[:upper:]'`. La opcion A hace lo contrario (mayusculas a minusculas). La opcion B elimina (`-d`) todas las letras minusculas. La opcion D comprime (`-s`) letras minusculas repetidas. Es importante recordar que `tr` no acepta nombres de archivo como argumento y siempre lee de la entrada estandar.

</details>

### Pregunta 13

Que hace el comando `head -n -3 archivo.txt`?

a) Muestra las primeras 3 lineas del archivo
b) Muestra las ultimas 3 lineas del archivo
c) Muestra todas las lineas excepto las 3 ultimas
d) Muestra la linea numero 3 del archivo

<details><summary>Respuesta</summary>

**c) Muestra todas las lineas excepto las 3 ultimas**

Cuando `head` recibe un numero negativo con `-n`, muestra todas las lineas del archivo excepto las N ultimas. Asi, `head -n -3 archivo.txt` muestra todo el contenido menos las 3 ultimas lineas. De forma complementaria, `tail -n +3 archivo.txt` muestra desde la linea 3 hasta el final. `head -n 3` (sin signo negativo) muestra las primeras 3 lineas. Estos modificadores con signo son una herramienta poderosa para extraer rangos especificos de lineas.

</details>

### Pregunta 14

Que comando `paste` une todas las lineas de un archivo en una sola linea separada por comas?

a) `paste -d "," archivo.txt`
b) `paste -s -d "," archivo.txt`
c) `paste -c "," archivo.txt`
d) `paste archivo.txt | tr '\n' ','`

<details><summary>Respuesta</summary>

**b) `paste -s -d "," archivo.txt`**

La opcion `-s` (serial) de `paste` une todas las lineas del archivo en una sola linea. La opcion `-d ","` establece la coma como delimitador entre los elementos. Sin `-s`, `paste` une lineas de multiples archivos lado a lado (por columnas). Sin `-d`, el delimitador por defecto es el tabulador. La opcion D tambien produciria un resultado similar pero con una coma extra al final, y no es la forma idiomatica de hacerlo.

</details>

### Pregunta 15

Que paginador se considera mas potente que `more` y permite navegar hacia atras y buscar en ambas direcciones?

a) `cat`
b) `head`
c) `less`
d) `view`

<details><summary>Respuesta</summary>

**c) `less`**

`less` es una version mejorada de `more` que permite navegacion completa en ambas direcciones. Su nombre viene del dicho "less is more". Permite avanzar y retroceder paginas (con `Space`/`b`), buscar hacia adelante (`/patron`) y hacia atras (`?patron`), ir al inicio (`g`) y al final (`G`). Las paginas de manual (`man`) usan `less` como paginador por defecto. `more` solo permite avanzar (con soporte limitado para retroceder en algunos sistemas). `cat` muestra todo el contenido de una vez sin paginacion.

</details>

### Pregunta 16

Que hace la opcion `-i` en el comando `sed -i 's/foo/bar/g' archivo.txt`?

a) Realiza la sustitucion ignorando mayusculas/minusculas
b) Modifica el archivo directamente (in-place) sin crear una copia
c) Muestra la sustitucion de forma interactiva pidiendo confirmacion
d) Inserta texto en lugar de sustituir

<details><summary>Respuesta</summary>

**b) Modifica el archivo directamente (in-place) sin crear una copia**

La opcion `-i` de `sed` modifica el archivo directamente en lugar de mostrar el resultado en la salida estandar. Sin `-i`, `sed` muestra el resultado modificado en la terminal pero el archivo original no cambia. Se puede crear un backup automatico anadiendo una extension: `sed -i.bak 's/foo/bar/g' archivo.txt` crea `archivo.txt.bak` con el contenido original antes de modificar. La opcion para ignorar mayusculas es la flag `i` al final del patron: `s/foo/bar/gi`.

</details>

### Pregunta 17

Que comando muestra el contenido de un archivo comprimido con gzip sin necesidad de descomprimirlo?

a) `cat archivo.txt.gz`
b) `gunzip archivo.txt.gz`
c) `zcat archivo.txt.gz`
d) `gzip -l archivo.txt.gz`

<details><summary>Respuesta</summary>

**c) `zcat archivo.txt.gz`**

`zcat` muestra el contenido de archivos comprimidos con gzip (.gz) en la salida estandar sin descomprimirlos en disco. Es equivalente a `gunzip -c`. Para archivos comprimidos con bzip2 (.bz2) se usa `bzcat` y para xz (.xz) se usa `xzcat`. La opcion A intentaria mostrar el contenido binario comprimido, mostrando caracteres ilegibles. La opcion B descomprimiria el archivo en disco (eliminando el .gz). La opcion D muestra informacion de compresion (ratio, tamanos) pero no el contenido.

</details>

### Pregunta 18

Que comando `sed` elimina todas las lineas que contienen la palabra "error" en un archivo?

a) `sed 's/error//' archivo.txt`
b) `sed '/error/d' archivo.txt`
c) `sed -n '/error/p' archivo.txt`
d) `sed 'error' archivo.txt`

<details><summary>Respuesta</summary>

**b) `sed '/error/d' archivo.txt`**

`sed '/error/d'` busca las lineas que contienen el patron "error" y las elimina (`d` = delete). La opcion A sustituye la primera ocurrencia de "error" por nada en cada linea, pero no elimina la linea completa. La opcion C con `-n` y `p` hace lo contrario: muestra solo las lineas que contienen "error". La opcion D tiene una sintaxis invalida. Para eliminar lineas por numero se usa `sed '3d'` (elimina linea 3) o `sed '2,5d'` (elimina lineas 2 a 5).

</details>

### Pregunta 19

Que comando usarias para numerar todas las lineas de un archivo, incluyendo las vacias, usando `nl`?

<input type="text" class="fill-blank" data-answer="nl -b a archivo.txt" data-alt="nl -ba archivo.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nl -b a archivo.txt**

`nl -b a` numera todas las lineas del archivo, incluyendo las vacias. La opcion `-b` define el estilo de numeracion del cuerpo: `a` (all) numera todas las lineas, `t` (text, por defecto) numera solo lineas no vacias. Otras opciones utiles de `nl` son `-s '. '` para definir el separador despues del numero, `-w 3` para definir el ancho del numero y `-n rz` para alinear a la derecha con ceros (001, 002...).

</details>

### Pregunta 20

Que comando usarias para contar el numero de lineas en un archivo?

<input type="text" class="fill-blank" data-answer="wc -l archivo.txt" data-alt="wc -l" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wc -l archivo.txt**

`wc -l` cuenta el numero de lineas de un archivo. Sin opciones, `wc` muestra tres valores: lineas, palabras y bytes. Otras opciones utiles son `-w` (palabras), `-c` (bytes), `-m` (caracteres) y `-L` (longitud de la linea mas larga). `wc -l` se usa frecuentemente con pipes: `ls /etc | wc -l` cuenta cuantos archivos hay en `/etc`, y `cat /etc/passwd | wc -l` cuenta cuantos usuarios hay en el sistema.

</details>

### Pregunta 21

Que comando usarias para convertir tabulaciones en 4 espacios en un archivo?

<input type="text" class="fill-blank" data-answer="expand -t 4 archivo.txt" data-alt="expand --tabs=4 archivo.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**expand -t 4 archivo.txt**

`expand` convierte tabulaciones en espacios. La opcion `-t 4` indica que cada tabulacion se reemplaza por 4 espacios (por defecto son 8). El comando contrario es `unexpand`, que convierte espacios en tabulaciones. `unexpand -a` convierte todos los espacios (no solo los iniciales) y `unexpand -t 4` establece 4 espacios como equivalente a un tabulador. Estos comandos son utiles para estandarizar la indentacion en archivos de texto.

</details>

### Pregunta 22

Que comando reformatea un archivo de texto para que las lineas tengan un maximo de 60 caracteres?

<input type="text" class="fill-blank" data-answer="fmt -w 60 archivo.txt" data-alt="fmt --width=60 archivo.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**fmt -w 60 archivo.txt**

`fmt` reformatea texto ajustando el ancho de las lineas. La opcion `-w 60` establece el ancho maximo en 60 caracteres por linea (por defecto es 75). `fmt` intenta mantener las palabras completas, partiendo las lineas en espacios. La opcion `-u` establece espaciado uniforme (un espacio entre palabras, dos despues de punto). `fmt` es util para reformatear textos que tienen lineas muy largas o muy cortas.

</details>

### Pregunta 23

Que comando usarias para mostrar solo la linea 5 de un archivo usando `sed`?

<input type="text" class="fill-blank" data-answer="sed -n '5p' archivo.txt" data-alt="sed -n 5p archivo.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sed -n '5p' archivo.txt**

`sed -n '5p'` muestra unicamente la linea 5 del archivo. La opcion `-n` suprime la salida por defecto de sed (que normalmente imprime todas las lineas) y `p` (print) imprime solo la linea especificada. Sin `-n`, la linea 5 apareceria duplicada. Para mostrar un rango de lineas se usa `sed -n '2,5p'` (lineas 2 a 5). Para mostrar lineas que contienen un patron: `sed -n '/patron/p'`.

</details>
