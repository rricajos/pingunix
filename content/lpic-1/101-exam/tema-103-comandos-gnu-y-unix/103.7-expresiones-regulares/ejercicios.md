---
title: "103.7 - Buscar texto con expresiones regulares: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.7"
---

# 103.7 - Buscar texto con expresiones regulares: Ejercicios

### Pregunta 1
Cual de los siguientes comandos muestra todas las lineas del archivo `config.txt` que NO son comentarios (no empiezan con `#`) y que NO estan vacias?

A) `grep -v "#" config.txt`
B) `grep -v "^#" config.txt | grep -v "^$"`
C) `grep "^[^#]" config.txt`
D) Tanto B como C son correctas

<details>
<summary>Respuesta</summary>

**D) Tanto B como C son correctas**

La opcion B usa dos comandos `grep` encadenados: el primero (`grep -v "^#"`) elimina las lineas que empiezan con `#` y el segundo (`grep -v "^$"`) elimina las lineas vacias. La opcion C usa `^[^#]` que busca lineas cuyo primer caracter NO es `#`; como requiere al menos un caracter, tambien excluye las lineas vacias. La opcion A es incorrecta porque `grep -v "#"` eliminaria cualquier linea que contenga `#` en cualquier posicion, no solo las que empiezan con `#`.
</details>

---

### Pregunta 2
Cual es la diferencia principal entre BRE (Basic Regular Expressions) y ERE (Extended Regular Expressions)?

A) ERE soporta mas metacaracteres que BRE
B) En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)` necesitan `\` para ser metacaracteres; en ERE funcionan directamente
C) BRE no soporta clases de caracteres `[]`
D) ERE solo funciona con `egrep`, no con `grep`

<details>
<summary>Respuesta</summary>

**B) En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)` necesitan `\` para ser metacaracteres; en ERE funcionan directamente**

La diferencia fundamental es como se interpretan ciertos metacaracteres. En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)`, `|` son literales por defecto y necesitan ser escapados con `\` para funcionar como metacaracteres (ej: `\+`, `\{n\}`). En ERE, estos son metacaracteres por defecto y necesitan `\` para ser literales. Ambos tipos soportan las mismas funcionalidades; la diferencia es solo sintactica. ERE funciona con `grep -E` o `egrep`.
</details>

---

### Pregunta 3
Un administrador necesita encontrar todas las lineas que contienen una direccion IP en el archivo `access.log`. Cual de los siguientes comandos es mas adecuado?

A) `grep "[0-9].[0-9].[0-9].[0-9]" access.log`
B) `grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" access.log`
C) `grep "IP" access.log`
D) `fgrep "192.168" access.log`

<details>
<summary>Respuesta</summary>

**B) `grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" access.log`**

Esta opcion usa expresiones regulares extendidas (`-E`) con un patron que busca cuatro grupos de 1 a 3 digitos separados por puntos literales (`\.`). La opcion A es incorrecta porque el `.` sin escapar coincide con **cualquier caracter**, no solo con un punto literal, lo que generaria muchos falsos positivos. La opcion C busca el texto literal "IP", no direcciones IP. La opcion D solo buscaria direcciones que contengan "192.168", no cualquier IP.
</details>

---

### Pregunta 4
Dado el archivo `datos.txt` con el siguiente contenido:
```
color
colour
colr
colouur
```
Cual es la salida de `grep -E "colou?r" datos.txt`?

A) Solo "color"
B) Solo "colour"
C) "color" y "colour"
D) "color", "colour" y "colr"

<details>
<summary>Respuesta</summary>

**C) "color" y "colour"**

El patron `colou?r` usa el cuantificador `?` que significa "cero o una ocurrencia" del caracter anterior (`u`). Por lo tanto, el patron coincide con "color" (cero "u") y "colour" (una "u"). No coincide con "colr" porque falta la "o" antes de la "u" opcional. No coincide con "colouur" porque tiene dos "u" y `?` solo permite cero o una.
</details>

---

### Pregunta 5
Que comando muestra solo los nombres de los archivos en `/etc/` que contienen la palabra "root" (busqueda recursiva)?

A) `grep -r "root" /etc/`
B) `grep -rl "root" /etc/`
C) `grep -rc "root" /etc/`
D) `grep -rn "root" /etc/`

<details>
<summary>Respuesta</summary>

**B) `grep -rl "root" /etc/`**

La opcion `-l` (letter "L" minuscula) hace que `grep` muestre **solo los nombres de los archivos** que contienen al menos una coincidencia, sin mostrar las lineas coincidentes. Combinada con `-r` (recursivo), busca en todos los archivos dentro de `/etc/` y sus subdirectorios. La opcion A muestra los archivos Y las lineas coincidentes. La opcion C (`-c`) muestra el conteo de coincidencias por archivo. La opcion D (`-n`) muestra las lineas con sus numeros de linea.
</details>

---

### Pregunta 6
Cual de los siguientes comandos `sed` elimina todas las lineas vacias de un archivo?

A) `sed 's/^$//' archivo.txt`
B) `sed '/^$/d' archivo.txt`
C) `sed 'g/^$/d' archivo.txt`
D) `sed '/^$/r' archivo.txt`

<details>
<summary>Respuesta</summary>

**B) `sed '/^$/d' archivo.txt`**

En `sed`, la sintaxis `/patron/d` elimina las lineas que coinciden con el patron. `^$` es una expresion regular que coincide con lineas vacias (inicio de linea seguido inmediatamente por fin de linea). La opcion A usa `s///` (sustitucion) que reemplazaria la linea vacia por nada pero **no elimina la linea**, solo su contenido (la linea en blanco permanece). La opcion C tiene sintaxis incorrecta. La opcion D usa `r` que es para leer un archivo, no para eliminar.
</details>

---

### Pregunta 7
Un usuario ejecuta:
```bash
grep -E "^[A-Z][a-z]+ [A-Z][a-z]+" nombres.txt
```
Que tipo de lineas encontrara este comando?

A) Lineas que contienen solo mayusculas
B) Lineas que empiezan con dos palabras capitalizadas (primera letra mayuscula, resto minusculas)
C) Lineas que contienen cualquier combinacion de letras
D) Lineas que empiezan con una letra mayuscula

<details>
<summary>Respuesta</summary>

**B) Lineas que empiezan con dos palabras capitalizadas (primera letra mayuscula, resto minusculas)**

El patron se descompone asi: `^` = inicio de linea, `[A-Z]` = una letra mayuscula, `[a-z]+` = una o mas letras minusculas, ` ` = un espacio, `[A-Z]` = otra letra mayuscula, `[a-z]+` = una o mas letras minusculas. Esto coincide con lineas que empiezan con dos palabras capitalizadas, como "Juan Garcia", "Maria Lopez", etc. El `+` en ERE significa "una o mas repeticiones".
</details>

---

### Pregunta 8
Cual es la diferencia entre `grep -w "log" archivo.txt` y `grep "log" archivo.txt`?

A) No hay diferencia
B) `-w` busca solo en la primera palabra de cada linea
C) `-w` coincide solo cuando "log" es una palabra completa, no parte de otra palabra
D) `-w` busca solo en archivos de log

<details>
<summary>Respuesta</summary>

**C) `-w` coincide solo cuando "log" es una palabra completa, no parte de otra palabra**

La opcion `-w` (word) hace que `grep` solo coincida cuando el patron es una **palabra completa**, es decir, esta rodeado por limites de palabra (espacios, inicio/fin de linea, puntuacion). Sin `-w`, `grep "log" archivo.txt` coincidiria con lineas que contengan "log", "login", "catalog", "dialog", "logged", etc. Con `-w`, `grep -w "log" archivo.txt` solo coincide cuando aparece "log" como palabra independiente, sin ser parte de una palabra mas larga. Es equivalente a usar `grep "\blog\b" archivo.txt`.
</details>

---

### Pregunta 9

Cual es el significado de la expresion regular `^$` cuando se usa con `grep`?

a) Coincide con lineas que contienen solo un caracter
b) Coincide con lineas que empiezan y terminan con el mismo caracter
c) Coincide con lineas vacias (sin ningun contenido)
d) Coincide con todas las lineas del archivo

<details><summary>Respuesta</summary>

**c) Coincide con lineas vacias (sin ningun contenido)**

La expresion `^$` combina dos anclas: `^` (inicio de linea) seguido inmediatamente de `$` (fin de linea). Esto significa que no hay ningun caracter entre el inicio y el fin de la linea, es decir, la linea esta vacia. Es un patron muy utilizado para filtrar lineas en blanco, por ejemplo `grep -v "^$" archivo.txt` muestra todas las lineas que NO estan vacias. Tambien se usa en `sed '/^$/d' archivo.txt` para eliminar lineas vacias.

</details>

---

### Pregunta 10

Cual es la diferencia entre `grep "a*"` y `grep -E "a+"` aplicados al mismo archivo?

a) Ambos buscan una o mas repeticiones de "a"
b) `a*` busca cero o mas "a" (coincide con todo), `a+` busca una o mas "a"
c) `a*` busca exactamente una "a", `a+` busca mas de una "a"
d) No hay diferencia, ambos producen la misma salida

<details><summary>Respuesta</summary>

**b) `a*` busca cero o mas "a" (coincide con todo), `a+` busca una o mas "a"**

El cuantificador `*` significa "cero o mas repeticiones" del caracter anterior. Como "cero repeticiones" coincide con la cadena vacia, `a*` coincide con practicamente cualquier linea (toda linea contiene "cero o mas a"). El cuantificador `+` (ERE) significa "una o mas repeticiones", lo que requiere al menos una "a" para coincidir. Por eso `grep -E "a+"` es mucho mas util para buscar lineas que realmente contienen la letra "a". En BRE, el equivalente de `+` seria `\+`.

</details>

---

### Pregunta 11

Que comando `grep` busca lineas que contienen la palabra "error" o "warning" (sin distinguir mayusculas)?

a) `grep -i "error|warning" log.txt`
b) `grep -Ei "error|warning" log.txt`
c) `grep -v "error|warning" log.txt`
d) `grep -F "error|warning" log.txt`

<details><summary>Respuesta</summary>

**b) `grep -Ei "error|warning" log.txt`**

La opcion `-E` activa expresiones regulares extendidas (ERE) donde el caracter `|` funciona como alternancia (OR) sin necesidad de escaparlo. La opcion `-i` hace la busqueda case insensitive (ignora mayusculas/minusculas). La opcion `a` no funciona porque en BRE (grep sin `-E`) el caracter `|` es literal y no actua como alternancia (se necesitaria `\|`). La opcion `c` usa `-v` que invierte la busqueda (mostraria lineas que NO contienen el patron). La opcion `d` usa `-F` (fixed string) que trata todo el patron como texto literal, incluyendo el `|`.

</details>

---

### Pregunta 12

Que clase de caracteres POSIX representa cualquier digito del 0 al 9?

a) `[[:alpha:]]`
b) `[[:digit:]]`
c) `[[:alnum:]]`
d) `[[:punct:]]`

<details><summary>Respuesta</summary>

**b) `[[:digit:]]`**

`[[:digit:]]` es la clase de caracteres POSIX equivalente a `[0-9]` y coincide con cualquier digito. `[[:alpha:]]` coincide con letras (equivalente a `[a-zA-Z]`). `[[:alnum:]]` coincide con letras y digitos (equivalente a `[a-zA-Z0-9]`). `[[:punct:]]` coincide con signos de puntuacion. Las clases POSIX requieren dobles corchetes: los externos son de la sintaxis de clase de caracteres y los internos de la clase POSIX. Por ejemplo: `grep "[[:digit:]]" archivo.txt`.

</details>

---

### Pregunta 13

Cual de los siguientes comandos `sed` reemplaza todas las ocurrencias de "http://" por "https://" en un archivo?

a) `sed 's/http:\/\//https:\/\//' archivo.txt`
b) `sed 's#http://#https://#g' archivo.txt`
c) `sed 's/http/https/g' archivo.txt`
d) Tanto A como B son correctas, pero A solo reemplaza la primera ocurrencia por linea

<details><summary>Respuesta</summary>

**d) Tanto A como B son correctas, pero A solo reemplaza la primera ocurrencia por linea**

La opcion `a` usa la sintaxis estandar `s/patron/reemplazo/` pero sin el flag `g`, por lo que solo reemplaza la primera ocurrencia en cada linea. Las barras en "http://" se escapan con `\/`. La opcion `b` usa `#` como delimitador alternativo en lugar de `/`, lo que evita la necesidad de escapar las barras y es mucho mas legible. Ademas incluye el flag `g` para reemplazo global. La opcion `c` solo reemplaza "http" por "https", lo que podria causar problemas si ya existe "https" en el texto (resultaria en "httpss").

</details>

---

### Pregunta 14

Que codigo de retorno devuelve `grep` cuando NO encuentra coincidencias?

a) 0
b) 1
c) 2
d) -1

<details><summary>Respuesta</summary>

**b) 1**

`grep` devuelve codigo 0 cuando encuentra al menos una coincidencia, codigo 1 cuando no encuentra ninguna coincidencia, y codigo 2 cuando ocurre un error (por ejemplo, archivo no encontrado o error de sintaxis en la expresion regular). Esto es util en scripts para verificar si un patron existe: `grep -q "patron" archivo && echo "encontrado" || echo "no encontrado"`. La opcion `-q` (quiet) suprime la salida y solo devuelve el codigo de retorno.

</details>

---

### Pregunta 15

Cual es la diferencia entre `fgrep` y `grep -F`?

a) `fgrep` es mas rapido que `grep -F`
b) `fgrep` soporta expresiones regulares basicas, `grep -F` no
c) Son equivalentes; ambos tratan el patron como cadena fija sin interpretar metacaracteres
d) `fgrep` esta disponible en mas sistemas que `grep -F`

<details><summary>Respuesta</summary>

**c) Son equivalentes; ambos tratan el patron como cadena fija sin interpretar metacaracteres**

`fgrep` y `grep -F` son funcionalmente identicos. Ambos tratan el patron de busqueda como una cadena fija (fixed string), sin interpretar metacaracteres de expresiones regulares como `.`, `*`, `^`, `$`, etc. Esto es util cuando se busca texto que contiene caracteres especiales de regex, como direcciones IP o URLs. `fgrep` se considera obsoleto (deprecated) y se recomienda usar `grep -F` en su lugar. De forma similar, `egrep` es equivalente a `grep -E`.

</details>

---

### Pregunta 16

Dado el comando `grep -E "^[0-9]{3}-[0-9]{4}$" datos.txt`, que tipo de lineas encontrara?

a) Lineas que contienen numeros de telefono en cualquier posicion
b) Lineas formadas exactamente por un patron de 3 digitos, un guion y 4 digitos
c) Lineas que empiezan con 3 digitos
d) Lineas que contienen exactamente 7 digitos seguidos

<details><summary>Respuesta</summary>

**b) Lineas formadas exactamente por un patron de 3 digitos, un guion y 4 digitos**

El patron se descompone asi: `^` = inicio de linea, `[0-9]{3}` = exactamente 3 digitos, `-` = un guion literal, `[0-9]{4}` = exactamente 4 digitos, `$` = fin de linea. Al usar `^` y `$` juntos, se requiere que toda la linea coincida exactamente con el patron (por ejemplo "123-4567"). Sin las anclas `^` y `$`, el patron coincidiria con lineas que contienen ese formato en cualquier posicion.

</details>

---

### Pregunta 17

Cual de los siguientes comandos muestra las 3 lineas que siguen despues de cada coincidencia de "ERROR" en el archivo `log.txt`?

a) `grep -C 3 "ERROR" log.txt`
b) `grep -B 3 "ERROR" log.txt`
c) `grep -A 3 "ERROR" log.txt`
d) `grep -n 3 "ERROR" log.txt`

<details><summary>Respuesta</summary>

**c) `grep -A 3 "ERROR" log.txt`**

La opcion `-A N` (After) muestra N lineas despues de cada coincidencia. La opcion `-B N` (Before) muestra N lineas antes de cada coincidencia. La opcion `-C N` (Context) muestra N lineas antes Y despues. La opcion `-n` muestra numeros de linea, no tiene relacion con el contexto. Por lo tanto, para ver solo las 3 lineas posteriores a cada "ERROR", se usa `-A 3`.

</details>

---

### Pregunta 18

En BRE (expresiones regulares basicas), como se expresa "una o mas repeticiones" de la letra "a"?

a) `a+`
b) `a*`
c) `\a+`
d) `a\+`

<details><summary>Respuesta</summary>

**d) `a\+`**

En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)` y `|` son literales por defecto y necesitan ser escapados con `\` para funcionar como metacaracteres. Por lo tanto, "una o mas repeticiones de a" se escribe como `a\+` en BRE. En ERE (grep -E o egrep), el mismo patron se escribe simplemente como `a+`. La opcion `a` seria correcta en ERE pero no en BRE. La opcion `b` (`a*`) significa "cero o mas repeticiones", no "una o mas".

</details>

---

### Pregunta 19

Escribe el comando grep para buscar todas las lineas que empiezan con el caracter `#` en el archivo `/etc/fstab`.

<input type="text" class="fill-blank" data-answer="grep '^#' /etc/fstab" data-alt="grep \"^#\" /etc/fstab" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep '^#' /etc/fstab**

El patron `^#` usa el ancla `^` para indicar inicio de linea seguido del caracter literal `#`. Esto coincide con todas las lineas que son comentarios en el archivo `/etc/fstab`. Las comillas simples protegen el patron de la interpretacion del shell. Para ver las lineas que NO son comentarios se usaria `grep -v '^#' /etc/fstab`.

</details>

---

### Pregunta 20

Escribe el comando sed que elimina todas las lineas en blanco del archivo `config.txt` (sin modificar el archivo original, solo mostrar el resultado).

<input type="text" class="fill-blank" data-answer="sed '/^$/d' config.txt" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**sed '/^$/d' config.txt**

En `sed`, la sintaxis `/patron/d` elimina las lineas que coinciden con el patron. `^$` es una expresion regular que coincide con lineas vacias (inicio de linea seguido inmediatamente por fin de linea). Sin la opcion `-i`, `sed` muestra el resultado en pantalla sin modificar el archivo original. Para modificar el archivo directamente se usaria `sed -i '/^$/d' config.txt`.

</details>

---

### Pregunta 21

Escribe el comando grep que cuenta cuantas lineas contienen la palabra "root" en el archivo `/etc/passwd`.

<input type="text" class="fill-blank" data-answer="grep -c 'root' /etc/passwd" data-alt="grep -c \"root\" /etc/passwd,grep -c root /etc/passwd" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep -c 'root' /etc/passwd**

La opcion `-c` de `grep` cuenta el numero de lineas que coinciden con el patron, sin mostrar las lineas en si. Solo muestra un numero como resultado. Es diferente de `grep "root" /etc/passwd | wc -l`, aunque ambos producen el mismo resultado. La opcion `-c` es mas eficiente porque no necesita pasar la salida a otro comando.

</details>

---

### Pregunta 22

Escribe el comando grep que busca la palabra "error" ignorando mayusculas y minusculas de forma recursiva en el directorio `/var/log`.

<input type="text" class="fill-blank" data-answer="grep -ri 'error' /var/log" data-alt="grep -ri \"error\" /var/log,grep -ir 'error' /var/log,grep -ir error /var/log,grep -ri error /var/log" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep -ri 'error' /var/log**

La opcion `-r` (o `-R`) activa la busqueda recursiva en todos los archivos dentro del directorio y sus subdirectorios. La opcion `-i` hace la busqueda case insensitive, coincidiendo con "error", "Error", "ERROR", "eRRoR", etc. Estas opciones se pueden combinar como `-ri` o `-ir`. Este comando es muy util para buscar errores en los logs del sistema.

</details>

---

### Pregunta 23

Escribe el comando grep con expresiones regulares extendidas que busca lineas que contienen exactamente 3 digitos seguidos en el archivo `datos.txt`.

<input type="text" class="fill-blank" data-answer="grep -E '[0-9]{3}' datos.txt" data-alt="grep -E \"[0-9]{3}\" datos.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**grep -E '[0-9]{3}' datos.txt**

La opcion `-E` activa las expresiones regulares extendidas (ERE), donde `{3}` funciona directamente sin necesidad de escapar con `\`. El patron `[0-9]{3}` busca exactamente 3 digitos consecutivos. En BRE (sin `-E`), el mismo patron se escribiria como `[0-9]\{3\}`. Nota: este patron encontrara lineas que contengan 3 o mas digitos seguidos. Para exactamente 3 se usaria `\b[0-9]{3}\b` con limites de palabra.

</details>
