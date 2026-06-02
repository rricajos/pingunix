---
title: "103.7 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "103.7"
---

# Flashcards: 103.7 - Expresiones Regulares

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-001">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra todas las lineas del archivo `config.txt` que NO son comentarios (no empiezan con `#`) y que NO estan vacias?

</div>
<div class="flashcard-back">

**R:** D) Tanto B como C son correctas. La opcion B usa dos comandos `grep` encadenados: el primero (`grep -v "^#"`) elimina las lineas que empiezan con `#` y el segundo (`grep -v "^$"`) elimina las lineas vacias. La opcion C usa `^[^#]` que busca lineas cuyo primer caracter NO es `#`; como requiere al menos un caracter, tambien excluye las lineas vacias. La opcion A es incorrecta porque `grep -v "#"` eliminaria cualquier linea que contenga `#` en cualquier posicion, no solo las que empiezan con `#`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre BRE (Basic Regular Expressions) y ERE (Extended Regular Expressions)?

</div>
<div class="flashcard-back">

**R:** B) En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)` necesitan `\` para ser metacaracteres; en ERE funcionan directamente. La diferencia fundamental es como se interpretan ciertos metacaracteres. En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)`, `|` son literales por defecto y necesitan ser escapados con `\` para funcionar como metacaracteres (ej: `\+`, `\{n\}`). En ERE, estos son metacaracteres por defecto y necesitan `\` para ser literales. Ambos tipos soportan las mismas funcionalidades; la diferencia es solo sintactica. ERE funciona con `grep -E` o `egrep`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-003">
<div class="flashcard-front">

**P:** Un administrador necesita encontrar todas las lineas que contienen una direccion IP en el archivo `access.log`. Cual de los siguientes comandos es mas adecuado?

</div>
<div class="flashcard-back">

**R:** B) `grep -E "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" access.log`. Esta opcion usa expresiones regulares extendidas (`-E`) con un patron que busca cuatro grupos de 1 a 3 digitos separados por puntos literales (`\.`). La opcion A es incorrecta porque el `.` sin escapar coincide con **cualquier caracter**, no solo con un punto literal, lo que generaria muchos falsos positivos. La opcion C busca el texto literal "IP", no direcciones IP. La opcion D solo buscaria direcciones que contengan "192.168", no cualquier IP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-004">
<div class="flashcard-front">

**P:** Dado el archivo `datos.txt` con el siguiente contenido: ``` color colour colr colouur ``` Cual es la salida de `grep -E "colou?r" datos.txt`?

</div>
<div class="flashcard-back">

**R:** C) "color" y "colour". El patron `colou?r` usa el cuantificador `?` que significa "cero o una ocurrencia" del caracter anterior (`u`). Por lo tanto, el patron coincide con "color" (cero "u") y "colour" (una "u"). No coincide con "colr" porque falta la "o" antes de la "u" opcional. No coincide con "colouur" porque tiene dos "u" y `?` solo permite cero o una.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-005">
<div class="flashcard-front">

**P:** Que comando muestra solo los nombres de los archivos en `/etc/` que contienen la palabra "root" (busqueda recursiva)?

</div>
<div class="flashcard-back">

**R:** B) `grep -rl "root" /etc/`. La opcion `-l` (letter "L" minuscula) hace que `grep` muestre **solo los nombres de los archivos** que contienen al menos una coincidencia, sin mostrar las lineas coincidentes. Combinada con `-r` (recursivo), busca en todos los archivos dentro de `/etc/` y sus subdirectorios. La opcion A muestra los archivos Y las lineas coincidentes. La opcion C (`-c`) muestra el conteo de coincidencias por archivo. La opcion D (`-n`) muestra las lineas con sus numeros de linea.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-006">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos `sed` elimina todas las lineas vacias de un archivo?

</div>
<div class="flashcard-back">

**R:** B) `sed '/^$/d' archivo.txt`. En `sed`, la sintaxis `/patron/d` elimina las lineas que coinciden con el patron. `^$` es una expresion regular que coincide con lineas vacias (inicio de linea seguido inmediatamente por fin de linea). La opcion A usa `s///` (sustitucion) que reemplazaria la linea vacia por nada pero **no elimina la linea**, solo su contenido (la linea en blanco permanece). La opcion C tiene sintaxis incorrecta. La opcion D usa `r` que es para leer un archivo, no para eliminar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-007">
<div class="flashcard-front">

**P:** Un usuario ejecuta: ```bash grep -E "^[A-Z][a-z]+ [A-Z][a-z]+" nombres.txt ``` Que tipo de lineas encontrara este comando?

</div>
<div class="flashcard-back">

**R:** B) Lineas que empiezan con dos palabras capitalizadas (primera letra mayuscula, resto minusculas). El patron se descompone asi: `^` = inicio de linea, `[A-Z]` = una letra mayuscula, `[a-z]+` = una o mas letras minusculas, ` ` = un espacio, `[A-Z]` = otra letra mayuscula, `[a-z]+` = una o mas letras minusculas. Esto coincide con lineas que empiezan con dos palabras capitalizadas, como "Juan Garcia", "Maria Lopez", etc. El `+` en ERE significa "una o mas repeticiones".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-008">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `grep -w "log" archivo.txt` y `grep "log" archivo.txt`?

</div>
<div class="flashcard-back">

**R:** C) `-w` coincide solo cuando "log" es una palabra completa, no parte de otra palabra. La opcion `-w` (word) hace que `grep` solo coincida cuando el patron es una **palabra completa**, es decir, esta rodeado por limites de palabra (espacios, inicio/fin de linea, puntuacion). Sin `-w`, `grep "log" archivo.txt` coincidiria con lineas que contengan "log", "login", "catalog", "dialog", "logged", etc. Con `-w`, `grep -w "log" archivo.txt` solo coincide cuando aparece "log" como palabra independiente, sin ser parte de una palabra mas larga. Es equivalente a usar `grep "\blog\b" archivo.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-009">
<div class="flashcard-front">

**P:** Cual es el significado de la expresion regular `^$` cuando se usa con `grep`?

</div>
<div class="flashcard-back">

**R:** c) Coincide con lineas vacias (sin ningun contenido). La expresion `^$` combina dos anclas: `^` (inicio de linea) seguido inmediatamente de `$` (fin de linea). Esto significa que no hay ningun caracter entre el inicio y el fin de la linea, es decir, la linea esta vacia. Es un patron muy utilizado para filtrar lineas en blanco, por ejemplo `grep -v "^$" archivo.txt` muestra todas las lineas que NO estan vacias. Tambien se usa en `sed '/^$/d' archivo.txt` para eliminar lineas vacias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-010">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `grep "a*"` y `grep -E "a+"` aplicados al mismo archivo?

</div>
<div class="flashcard-back">

**R:** b) `a*` busca cero o mas "a" (coincide con todo), `a+` busca una o mas "a". El cuantificador `*` significa "cero o mas repeticiones" del caracter anterior. Como "cero repeticiones" coincide con la cadena vacia, `a*` coincide con practicamente cualquier linea (toda linea contiene "cero o mas a"). El cuantificador `+` (ERE) significa "una o mas repeticiones", lo que requiere al menos una "a" para coincidir. Por eso `grep -E "a+"` es mucho mas util para buscar lineas que realmente contienen la letra "a". En BRE, el equivalente de `+` seria `\+`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-011">
<div class="flashcard-front">

**P:** Que comando `grep` busca lineas que contienen la palabra "error" o "warning" (sin distinguir mayusculas)?

</div>
<div class="flashcard-back">

**R:** b) `grep -Ei "error|warning" log.txt`. La opcion `-E` activa expresiones regulares extendidas (ERE) donde el caracter `|` funciona como alternancia (OR) sin necesidad de escaparlo. La opcion `-i` hace la busqueda case insensitive (ignora mayusculas/minusculas). La opcion `a` no funciona porque en BRE (grep sin `-E`) el caracter `|` es literal y no actua como alternancia (se necesitaria `\|`). La opcion `c` usa `-v` que invierte la busqueda (mostraria lineas que NO contienen el patron). La opcion `d` usa `-F` (fixed string) que trata todo el patron como texto literal, incluyendo el `|`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-012">
<div class="flashcard-front">

**P:** Que clase de caracteres POSIX representa cualquier digito del 0 al 9?

</div>
<div class="flashcard-back">

**R:** b) `[[:digit:]]`. `[[:digit:]]` es la clase de caracteres POSIX equivalente a `[0-9]` y coincide con cualquier digito. `[[:alpha:]]` coincide con letras (equivalente a `[a-zA-Z]`). `[[:alnum:]]` coincide con letras y digitos (equivalente a `[a-zA-Z0-9]`). `[[:punct:]]` coincide con signos de puntuacion. Las clases POSIX requieren dobles corchetes: los externos son de la sintaxis de clase de caracteres y los internos de la clase POSIX. Por ejemplo: `grep "[[:digit:]]" archivo.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-013">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos `sed` reemplaza todas las ocurrencias de "http://" por "https://" en un archivo?

</div>
<div class="flashcard-back">

**R:** d) Tanto A como B son correctas, pero A solo reemplaza la primera ocurrencia por linea. La opcion `a` usa la sintaxis estandar `s/patron/reemplazo/` pero sin el flag `g`, por lo que solo reemplaza la primera ocurrencia en cada linea. Las barras en "http://" se escapan con `\/`. La opcion `b` usa `#` como delimitador alternativo en lugar de `/`, lo que evita la necesidad de escapar las barras y es mucho mas legible. Ademas incluye el flag `g` para reemplazo global. La opcion `c` solo reemplaza "http" por "https", lo que podria causar problemas si ya existe "https" en el texto (resultaria en "httpss").

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-014">
<div class="flashcard-front">

**P:** Que codigo de retorno devuelve `grep` cuando NO encuentra coincidencias?

</div>
<div class="flashcard-back">

**R:** b) 1. `grep` devuelve codigo 0 cuando encuentra al menos una coincidencia, codigo 1 cuando no encuentra ninguna coincidencia, y codigo 2 cuando ocurre un error (por ejemplo, archivo no encontrado o error de sintaxis en la expresion regular). Esto es util en scripts para verificar si un patron existe: `grep -q "patron" archivo && echo "encontrado" || echo "no encontrado"`. La opcion `-q` (quiet) suprime la salida y solo devuelve el codigo de retorno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-015">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `fgrep` y `grep -F`?

</div>
<div class="flashcard-back">

**R:** c) Son equivalentes; ambos tratan el patron como cadena fija sin interpretar metacaracteres. `fgrep` y `grep -F` son funcionalmente identicos. Ambos tratan el patron de busqueda como una cadena fija (fixed string), sin interpretar metacaracteres de expresiones regulares como `.`, `*`, `^`, `$`, etc. Esto es util cuando se busca texto que contiene caracteres especiales de regex, como direcciones IP o URLs. `fgrep` se considera obsoleto (deprecated) y se recomienda usar `grep -F` en su lugar. De forma similar, `egrep` es equivalente a `grep -E`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-016">
<div class="flashcard-front">

**P:** Dado el comando `grep -E "^[0-9]{3}-[0-9]{4}$" datos.txt`, que tipo de lineas encontrara?

</div>
<div class="flashcard-back">

**R:** b) Lineas formadas exactamente por un patron de 3 digitos, un guion y 4 digitos. El patron se descompone asi: `^` = inicio de linea, `[0-9]{3}` = exactamente 3 digitos, `-` = un guion literal, `[0-9]{4}` = exactamente 4 digitos, `$` = fin de linea. Al usar `^` y `$` juntos, se requiere que toda la linea coincida exactamente con el patron (por ejemplo "123-4567"). Sin las anclas `^` y `$`, el patron coincidiria con lineas que contienen ese formato en cualquier posicion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-017">
<div class="flashcard-front">

**P:** Cual de los siguientes comandos muestra las 3 lineas que siguen despues de cada coincidencia de "ERROR" en el archivo `log.txt`?

</div>
<div class="flashcard-back">

**R:** c) `grep -A 3 "ERROR" log.txt`. La opcion `-A N` (After) muestra N lineas despues de cada coincidencia. La opcion `-B N` (Before) muestra N lineas antes de cada coincidencia. La opcion `-C N` (Context) muestra N lineas antes Y despues. La opcion `-n` muestra numeros de linea, no tiene relacion con el contexto. Por lo tanto, para ver solo las 3 lineas posteriores a cada "ERROR", se usa `-A 3`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-018">
<div class="flashcard-front">

**P:** En BRE (expresiones regulares basicas), como se expresa "una o mas repeticiones" de la letra "a"?

</div>
<div class="flashcard-back">

**R:** d) `a\+`. En BRE, los caracteres `+`, `?`, `{`, `}`, `(`, `)` y `|` son literales por defecto y necesitan ser escapados con `\` para funcionar como metacaracteres. Por lo tanto, "una o mas repeticiones de a" se escribe como `a\+` en BRE. En ERE (grep -E o egrep), el mismo patron se escribe simplemente como `a+`. La opcion `a` seria correcta en ERE pero no en BRE. La opcion `b` (`a*`) significa "cero o mas repeticiones", no "una o mas".

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-019">
<div class="flashcard-front">

**P:** Escribe el comando grep para buscar todas las lineas que empiezan con el caracter `#` en el archivo `/etc/fstab`. <input type="text" class="fill-blank" data-answer="grep '^#' /etc/fstab" data-alt="grep \"^#\" /etc/fstab" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** grep '^#' /etc/fstab. El patron `^#` usa el ancla `^` para indicar inicio de linea seguido del caracter literal `#`. Esto coincide con todas las lineas que son comentarios en el archivo `/etc/fstab`. Las comillas simples protegen el patron de la interpretacion del shell. Para ver las lineas que NO son comentarios se usaria `grep -v '^#' /etc/fstab`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-020">
<div class="flashcard-front">

**P:** Escribe el comando sed que elimina todas las lineas en blanco del archivo `config.txt` (sin modificar el archivo original, solo mostrar el resultado). <input type="text" class="fill-blank" data-answer="sed '/^$/d' config.txt" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** sed '/^$/d' config.txt. En `sed`, la sintaxis `/patron/d` elimina las lineas que coinciden con el patron. `^$` es una expresion regular que coincide con lineas vacias (inicio de linea seguido inmediatamente por fin de linea). Sin la opcion `-i`, `sed` muestra el resultado en pantalla sin modificar el archivo original. Para modificar el archivo directamente se usaria `sed -i '/^$/d' config.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando grep que cuenta cuantas lineas contienen la palabra "root" en el archivo `/etc/passwd`. <input type="text" class="fill-blank" data-answer="grep -c 'root' /etc/passwd" data-alt="grep -c \"root\" /etc/passwd,grep -c root /etc/passwd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** grep -c 'root' /etc/passwd. La opcion `-c` de `grep` cuenta el numero de lineas que coinciden con el patron, sin mostrar las lineas en si. Solo muestra un numero como resultado. Es diferente de `grep "root" /etc/passwd | wc -l`, aunque ambos producen el mismo resultado. La opcion `-c` es mas eficiente porque no necesita pasar la salida a otro comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando grep que busca la palabra "error" ignorando mayusculas y minusculas de forma recursiva en el directorio `/var/log`. <input type="text" class="fill-blank" data-answer="grep -ri 'error' /var/log" data-alt="grep -ri \"error\" /var/log,grep -ir 'error' /var/log,grep -ir error /var/log,grep -ri error /var/log" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** grep -ri 'error' /var/log. La opcion `-r` (o `-R`) activa la busqueda recursiva en todos los archivos dentro del directorio y sus subdirectorios. La opcion `-i` hace la busqueda case insensitive, coincidiendo con "error", "Error", "ERROR", "eRRoR", etc. Estas opciones se pueden combinar como `-ri` o `-ir`. Este comando es muy util para buscar errores en los logs del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando grep con expresiones regulares extendidas que busca lineas que contienen exactamente 3 digitos seguidos en el archivo `datos.txt`. <input type="text" class="fill-blank" data-answer="grep -E '[0-9]{3}' datos.txt" data-alt="grep -E \"[0-9]{3}\" datos.txt" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** grep -E '[0-9]{3}' datos.txt. La opcion `-E` activa las expresiones regulares extendidas (ERE), donde `{3}` funciona directamente sin necesidad de escapar con `\`. El patron `[0-9]{3}` busca exactamente 3 digitos consecutivos. En BRE (sin `-E`), el mismo patron se escribiria como `[0-9]\{3\}`. Nota: este patron encontrara lineas que contengan 3 o mas digitos seguidos. Para exactamente 3 se usaria `\b[0-9]{3}\b` con limites de palabra.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-024">
<div class="flashcard-front">

**P:** Tip de examen: `egrep` y `fgrep` se consideran comandos obsoletos (deprecated). Se recomienda u...

</div>
<div class="flashcard-back">

**R:** `egrep` y `fgrep` se consideran comandos obsoletos (deprecated). Se recomienda usar `grep -E` y `grep -F` en su lugar, pero ambas formas son validas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-025">
<div class="flashcard-front">

**P:** Tip de examen: `\b` y `\w` funcionan en GNU grep. `\d` puede no funcionar en todas las versione...

</div>
<div class="flashcard-back">

**R:** `\b` y `\w` funcionan en GNU grep. `\d` puede no funcionar en todas las versiones; es mas seguro usar `[0-9]` o `[[:digit:]]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `.`?

</div>
<div class="flashcard-back">

**R:** Cualquier caracter (excepto salto de linea)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `*`?

</div>
<div class="flashcard-back">

**R:** Cero o mas repeticiones del caracter anterior

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `[]`?

</div>
<div class="flashcard-back">

**R:** Clase de caracteres (uno de los listados)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `[^]`?

</div>
<div class="flashcard-back">

**R:** Clase negada (cualquiera excepto los listados)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `-i`?

</div>
<div class="flashcard-back">

**R:** Ignorar mayusculas/minusculas (case insensitive)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-031">
<div class="flashcard-front">

**P:** Que es/son 1. Que son las expresiones regulares?

</div>
<div class="flashcard-back">

**R:** Las **expresiones regulares** (regex o regexp) son patrones de texto que describen un conjunto de cadenas posibles. Permiten buscar, comparar y manipular texto de forma flexible y potente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-032">
<div class="flashcard-front">

**P:** Que es/son 7. Clases de caracteres POSIX?

</div>
<div class="flashcard-back">

**R:** Las clases POSIX funcionan dentro de corchetes `[[:clase:]]`:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-033">
<div class="flashcard-front">

**P:** Que es/son 8. Secuencias de escape comunes?

</div>
<div class="flashcard-back">

**R:** | Secuencia | Significado | Equivalente |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.7">
</div>

<div class="flashcard" data-id="103.7-fc-034">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

