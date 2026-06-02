---
title: "105.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "105.2"
---

# Flashcards: 105.2 - Scripts Simples

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `"$@"` y `"$*"` cuando se usan con comillas dobles en un script que se ejecuta con `./script.sh "uno dos" tres`?

</div>
<div class="flashcard-back">

**R:** b) `"$@"` genera dos argumentos (`"uno dos"` y `"tres"`) y `"$*"` genera una sola cadena con todos los argumentos. `"$@"` expande cada argumento como una palabra separada, respetando las comillas originales. En un bucle `for arg in "$@"`, se obtienen 2 iteraciones: `uno dos` y `tres`. `"$*"` expande todos los argumentos como una sola cadena (concatenados con el primer caracter de IFS). En un bucle `for arg in "$*"`, se obtiene 1 sola iteracion con `uno dos tres`. En la practica, `"$@"` es casi siempre la opcion correcta para iterar sobre argumentos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-002">
<div class="flashcard-front">

**P:** Cual de las siguientes lineas shebang es la forma mas portable de indicar que un script debe ejecutarse con bash?

</div>
<div class="flashcard-back">

**R:** b) `#!/usr/bin/env bash`. `#!/usr/bin/env bash` usa el comando `env` para buscar `bash` en el `PATH` del sistema, lo que lo hace funcionar independientemente de donde este instalado bash. `#!/bin/bash` asume que bash esta en `/bin/bash`, lo cual puede fallar en sistemas donde bash esta en otra ubicacion (por ejemplo, `/usr/local/bin/bash` en FreeBSD). `#!/usr/local/bin/bash` es incluso menos portable. `#!bash` no es valido porque requiere una ruta absoluta o el uso de `env`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-003">
<div class="flashcard-front">

**P:** Que operador de test se usa para verificar si una cadena esta vacia y cual para verificar si un archivo es un directorio?

</div>
<div class="flashcard-back">

**R:** b) `-z` para cadena vacia y `-d` para directorio. `-z` (zero length) verifica si una cadena esta vacia: `[ -z "$variable" ]` es verdadero si la variable esta vacia o no definida. `-d` (directory) verifica si la ruta es un directorio: `[ -d /tmp ]` es verdadero si `/tmp` es un directorio. `-n` (non-zero) es lo opuesto a `-z` (verifica que la cadena NO este vacia). `-f` verifica si es un archivo regular (no directorio). `-e` verifica si existe (cualquier tipo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-004">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre `[ ]` y `[[ ]]` es correcta?

</div>
<div class="flashcard-back">

**R:** b) `[ ]` es POSIX compatible y usa `-a`/`-o` para logica; `[[ ]]` es exclusivo de bash y usa `&&`/`||`. `[ ]` (equivalente al comando `test`) es POSIX compatible y funciona en cualquier shell. Usa `-a` para AND y `-o` para OR, y requiere entrecomillar variables para evitar errores si estan vacias. `[[ ]]` es una extension de bash (no POSIX) que usa `&&` y `||` para operadores logicos, soporta pattern matching con `==` y expresiones regulares con `=~`, y no necesita entrecomillar variables porque bash maneja `[[ ]]` de forma especial sin word splitting.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-005">
<div class="flashcard-front">

**P:** Que imprime el siguiente script?

</div>
<div class="flashcard-back">

**R:** b) `25` y `0`. Primero, `x=10`. Luego, `resultado=$((x * 2 + 5))` realiza la aritmetica del shell: 10 * 2 + 5 = 25. Nota: dentro de `$(( ))` no se necesita `$` antes de la variable. `echo $resultado` imprime `25`. `echo $?` imprime `0` porque el `echo` anterior se ejecuto con exito (codigo de salida 0). `$?` siempre contiene el codigo de salida del ultimo comando ejecutado: 0 indica exito, cualquier otro valor indica error.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-006">
<div class="flashcard-front">

**P:** En una estructura `case` en bash, cual es la sintaxis correcta para terminar cada bloque de patron y cual es la palabra clave que cierra la estructura completa?

</div>
<div class="flashcard-back">

**R:** a) Cada bloque termina con `;;` y la estructura cierra con `esac`. En la estructura `case` de bash, cada patron termina con `)`, cada bloque de comandos termina con `;;` (doble punto y coma), y la estructura completa se cierra con `esac` (que es `case` escrito al reves). El patron comodin `*)` funciona como caso por defecto. Los patrones pueden usar `|` para combinar multiples opciones (por ejemplo, `start|begin)`). Esta es una sintaxis fundamental para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-007">
<div class="flashcard-front">

**P:** Que hace `exec` cuando se usa con un comando versus cuando se usa solo con redirecciones?

</div>
<div class="flashcard-back">

**R:** b) Con un comando, reemplaza el shell actual por ese comando; con solo redirecciones, modifica los file descriptors sin reemplazar el shell. `exec comando` reemplaza el proceso actual del shell por el comando especificado; el shell deja de existir y cualquier linea posterior no se ejecutara. `exec > archivo` (solo redireccion, sin comando) modifica permanentemente los file descriptors del shell actual sin reemplazarlo; el script continua ejecutandose. Por ejemplo, `exec > /tmp/log.txt` redirige toda la salida estandar posterior al archivo. `exec 3< /etc/passwd` abre un file descriptor para lectura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-008">
<div class="flashcard-front">

**P:** Cual es la diferencia entre un here document con `<< EOF` y con `<< 'EOF'` (delimitador entre comillas)?

</div>
<div class="flashcard-back">

**R:** b) `<< EOF` permite la expansion de variables y sustitucion de comandos, `<< 'EOF'` trata todo como texto literal. Con `<< EOF`, las variables como `$HOME` y las sustituciones de comandos como `$(date)` se expanden a sus valores reales dentro del bloque heredoc. Con `<< 'EOF'` (comillas simples en el delimitador), NINGUNA expansion se realiza: `$HOME` y `$(date)` aparecen como texto literal. Esto es util cuando se quiere generar un archivo que contenga literalmente sintaxis de variables de shell sin que se interpreten.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-009">
<div class="flashcard-front">

**P:** Que variable especial contiene el numero de argumentos pasados a un script y cual contiene el nombre del propio script?

</div>
<div class="flashcard-back">

**R:** c) `$#` contiene el numero de argumentos y `$0` el nombre del script. `$#` devuelve el numero total de parametros posicionales pasados al script (sin contar `$0`). `$0` contiene el nombre del script tal como fue invocado. Otras variables especiales importantes: `$1` a `$9` son los parametros posicionales individuales, `$@` y `$*` representan todos los parametros, `$?` es el codigo de salida del ultimo comando, `$$` es el PID del shell actual, y `$!` es el PID del ultimo proceso ejecutado en segundo plano.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-010">
<div class="flashcard-front">

**P:** Un script necesita leer `/etc/passwd` linea por linea usando `:` como separador de campos. Cual es la forma correcta de hacerlo con un bucle `while`?

</div>
<div class="flashcard-back">

**R:** b) `while IFS=: read usuario password uid gid gecos home shell; do echo "$usuario"; done < /etc/passwd`. La forma correcta es establecer `IFS=:` (Internal Field Separator) antes de `read` para que los campos se separen por `:` en lugar del separador por defecto (espacio/tab/newline). Al especificar multiples variables en `read`, cada campo se asigna a la variable correspondiente. La redireccion `< /etc/passwd` alimenta el archivo como entrada del bucle `while`. Esta tecnica es fundamental para procesar archivos con campos delimitados en scripts de shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-011">
<div class="flashcard-front">

**P:** Que operador de test se utiliza para verificar si un archivo tiene permiso de ejecucion?

</div>
<div class="flashcard-back">

**R:** c) `-x`. El operador `-x` verifica si un archivo tiene permiso de ejecucion para el usuario actual. Por ejemplo, `[ -x /usr/bin/vim ]` devuelve verdadero si el usuario puede ejecutar vim. Otros operadores de archivo: `-e` (existe, cualquier tipo), `-f` (es archivo regular), `-d` (es directorio), `-r` (tiene permiso de lectura), `-w` (tiene permiso de escritura), `-s` (existe y tiene tamano mayor que cero) y `-L` (es enlace simbolico). Siempre se recomienda entrecomillar la ruta: `[ -x "$archivo" ]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre un bucle `while` y un bucle `until` en bash?

</div>
<div class="flashcard-back">

**R:** b) `while` ejecuta mientras la condicion sea verdadera; `until` ejecuta hasta que la condicion sea verdadera. El bucle `while` evalua la condicion y ejecuta el bloque mientras esta sea verdadera (codigo de salida 0). El bucle `until` es el opuesto: ejecuta el bloque hasta que la condicion sea verdadera, es decir, mientras sea falsa. Ambos usan la misma sintaxis con `do` y `done`. Por ejemplo, `while [ $i -le 5 ]` es equivalente a `until [ $i -gt 5 ]`. En la practica, `while` se usa mucho mas frecuentemente, pero `until` puede hacer el codigo mas legible en ciertos escenarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-013">
<div class="flashcard-front">

**P:** Que comando genera una secuencia de numeros del 1 al 10 con incrementos de 2?

</div>
<div class="flashcard-back">

**R:** b) `seq 1 2 10`. La sintaxis de `seq` es `seq [inicio] [incremento] [fin]`. `seq 1 2 10` genera la secuencia 1, 3, 5, 7, 9 (empezando en 1, incrementando de 2 en 2, hasta 10). Si se omite el incremento, por defecto es 1. Si se omiten inicio e incremento, ambos son 1. Opciones utiles: `-w` anade ceros a la izquierda para igualar el ancho (por ejemplo, `seq -w 1 10` genera 01, 02, ..., 10) y `-s` define un separador personalizado (por ejemplo, `seq -s "," 1 5` genera `1,2,3,4,5`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-014">
<div class="flashcard-front">

**P:** Que imprime el siguiente fragmento de codigo?

</div>
<div class="flashcard-back">

**R:** b) `El sistema es $nombre`. Las comillas simples (`' '`) en bash tratan todo su contenido como texto literal, sin expansion de variables ni sustitucion de comandos. La cadena `$nombre` se muestra tal cual, sin ser reemplazada por su valor. Para que la variable se expanda, se deben usar comillas dobles (`" "`): `echo "El sistema es $nombre"` mostraria `El sistema es Linux`. Esta distincion entre comillas simples y dobles es fundamental en scripting bash y es un tema frecuente en el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-015">
<div class="flashcard-front">

**P:** En un script, que valor tiene `$?` inmediatamente despues de ejecutar un comando que falla?

</div>
<div class="flashcard-back">

**R:** b) Un valor distinto de 0 (generalmente 1 o un codigo de error especifico). La variable especial `$?` contiene el codigo de salida del ultimo comando ejecutado. Por convencion en Linux, `0` indica exito y cualquier valor entre `1` y `255` indica error. El valor exacto depende del comando: `1` es un error generico, `2` suele indicar uso incorrecto del comando, `127` indica comando no encontrado, y `126` que el archivo no tiene permisos de ejecucion. Los scripts pueden definir sus propios codigos con `exit N`. `$?` se actualiza despues de cada comando, por lo que debe consultarse inmediatamente despues del comando que se quiere verificar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-016">
<div class="flashcard-front">

**P:** Cual es la forma correcta de realizar una operacion aritmetica en bash para calcular `5 + 3` y almacenar el resultado en una variable?

</div>
<div class="flashcard-back">

**R:** b) `resultado=$((5 + 3))`. La expansion aritmetica `$(( ))` es la forma recomendada de realizar operaciones matematicas en bash. `resultado=$((5 + 3))` asigna el valor `8` a la variable. La opcion `a` asigna la cadena literal "5+3" sin realizar la operacion. Dentro de `$(( ))` se pueden usar: suma (`+`), resta (`-`), multiplicacion (`*`), division entera (`/`), modulo (`%`) y potencia (`**`). No se necesita `$` antes de las variables dentro de `$(( ))`. Alternativas: `let "resultado = 5 + 3"` y `resultado=$(expr 5 + 3)` (mas antigua, requiere espacios).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-017">
<div class="flashcard-front">

**P:** Que diferencia hay entre `&&` y `||` al encadenar comandos en bash?

</div>
<div class="flashcard-back">

**R:** b) `&&` ejecuta el segundo comando solo si el primero tiene exito; `||` ejecuta el segundo solo si el primero falla. `comando1 && comando2` ejecuta `comando2` unicamente si `comando1` termina con codigo de salida 0 (exito). `comando1 || comando2` ejecuta `comando2` unicamente si `comando1` termina con un codigo distinto de 0 (fallo). Se pueden combinar: `mkdir /tmp/test && echo "Creado" || echo "Error"`. Estos operadores son fundamentales en scripts para manejar el flujo de ejecucion de forma concisa sin necesidad de estructuras `if`. Son equivalentes a cortocircuito logico: AND evalua el segundo solo si el primero es verdadero, OR solo si el primero es falso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-018">
<div class="flashcard-front">

**P:** Que hace la opcion `-p` del comando `read`?

</div>
<div class="flashcard-back">

**R:** b) Muestra un prompt (mensaje) antes de leer la entrada del usuario. La opcion `-p` de `read` permite especificar un mensaje de prompt que se muestra al usuario antes de esperar la entrada. Ejemplo: `read -p "Introduce tu nombre: " nombre` muestra "Introduce tu nombre: " y espera que el usuario escriba, almacenando la entrada en la variable `nombre`. Otras opciones utiles: `-s` (silencioso, no muestra lo que se escribe; ideal para contrasenas), `-t N` (timeout de N segundos), `-n N` (lee solo N caracteres) y `-r` (no interpreta barras invertidas como caracteres de escape).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-019">
<div class="flashcard-front">

**P:** Que variable especial contiene el PID del shell actual?

</div>
<div class="flashcard-back">

**R:** c) `$$`. La variable especial `$$` contiene el PID (Process ID) del shell actual. Es util para crear archivos temporales unicos: `tempfile="/tmp/mi_script_$$.tmp"`. Otras variables especiales: `$!` es el PID del ultimo proceso ejecutado en segundo plano, `$?` es el codigo de salida del ultimo comando, `$#` es el numero de argumentos pasados al script, `$0` es el nombre del script, `$@` y `$*` representan todos los argumentos, y `$1` a `$9` son los parametros posicionales individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-020">
<div class="flashcard-front">

**P:** En un heredoc, que efecto tiene usar `<<-` (con guion) en lugar de `<<`?

</div>
<div class="flashcard-back">

**R:** b) Suprime las tabulaciones iniciales de las lineas del heredoc. El operador `<<-` (con guion) suprime las tabulaciones (TAB, no espacios) al inicio de cada linea del heredoc, permitiendo indentar el bloque heredoc para que el codigo sea mas legible sin que las tabulaciones aparezcan en la salida. Esto es especialmente util cuando el heredoc esta dentro de una funcion o un bucle indentado. Sin el guion, las tabulaciones se incluyen literalmente en la salida. Es importante recordar que solo suprime tabulaciones, no espacios. `<< 'EOF'` (comillas) es lo que desactiva la expansion de variables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-021">
<div class="flashcard-front">

**P:** Escribe la linea shebang portable que usa `env` para localizar bash en el PATH del sistema. <input type="text" class="fill-blank" data-answer="#!/usr/bin/env bash" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** #!/usr/bin/env bash. La linea `#!/usr/bin/env bash` es la forma portable de especificar el interprete en un script. Usa el comando `env` para buscar `bash` en los directorios del `PATH` del sistema, lo que funciona independientemente de donde este instalado bash. A diferencia de `#!/bin/bash` (que asume una ruta fija), esta forma funciona en diferentes distribuciones Linux, BSD y macOS. El shebang debe ser la primera linea del archivo, sin espacios antes de `#!`. Su desventaja es que no permite pasar opciones adicionales al interprete de forma portable.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-022">
<div class="flashcard-front">

**P:** Escribe la condicion con `test` o `[ ]` que verifica si la variable `$archivo` es un archivo regular que existe. <input type="text" class="fill-blank" data-answer="[ -f \"$archivo\" ]" data-alt="test -f \"$archivo\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** [ -f "$archivo" ]. El operador `-f` verifica si la ruta es un archivo regular (no directorio, ni enlace simbolico, ni dispositivo). La variable debe ir entre comillas dobles (`"$archivo"`) para evitar errores si la variable esta vacia o contiene espacios. Sin comillas, una variable vacia causaria un error de sintaxis en `[ ]`. La forma equivalente es `test -f "$archivo"`. Para verificar solo existencia (cualquier tipo), se usa `-e`. Para directorios, se usa `-d`. Para enlaces simbolicos, `-L`. Estas pruebas son fundamentales en scripts para validar la entrada antes de operar con archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para dar permisos de ejecucion a un script llamado `backup.sh`. <input type="text" class="fill-blank" data-answer="chmod +x backup.sh" data-alt="chmod 755 backup.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** chmod +x backup.sh. El comando `chmod +x backup.sh` anade el permiso de ejecucion al archivo para el propietario, grupo y otros. Alternativamente, `chmod 755 backup.sh` establece permisos rwxr-xr-x (lectura, escritura y ejecucion para el propietario; lectura y ejecucion para grupo y otros). Sin permiso de ejecucion, el script solo puede ejecutarse invocando el interprete directamente (`bash backup.sh`). Con permiso de ejecucion y un shebang correcto, se puede ejecutar con `./backup.sh`. El permiso de ejecucion es un requisito para ejecutar scripts directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para almacenar la fecha actual en formato `YYYY-MM-DD` en una variable llamada `FECHA` usando sustitucion de comandos. <input type="text" class="fill-blank" data-answer="FECHA=$(date +%Y-%m-%d)" data-alt="FECHA=`date +%Y-%m-%d`" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** FECHA=$(date +%Y-%m-%d). La sustitucion de comandos `$( )` ejecuta el comando entre parentesis y captura su salida. `date +%Y-%m-%d` genera la fecha en formato ISO (por ejemplo, `2026-06-02`). La forma moderna y recomendada es `$( )`, aunque la forma antigua con backticks `` `date +%Y-%m-%d` `` tambien funciona. La ventaja de `$( )` es que puede anidarse facilmente y es mas legible. La variable `FECHA` contendra la cadena con la fecha, lista para usarse en nombres de archivos de backup, logs, etc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-025">
<div class="flashcard-front">

**P:** Escribe la estructura `case` correcta en bash que evalua la variable `$1` y ejecuta `echo "inicio"` cuando el valor sea `start`. <input type="text" class="fill-blank" data-answer="case $1 in start) echo \"inicio\";; esac" data-alt="case \"$1\" in start) echo \"inicio\";; esac" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** case $1 in start) echo "inicio";; esac. La estructura `case` compara una variable contra multiples patrones. La sintaxis requiere: `case` seguido de la variable y `in`, cada patron termina con `)`, cada bloque de comandos termina con `;;` (doble punto y coma), y la estructura completa se cierra con `esac` (que es `case` al reves). Se pueden combinar patrones con `|` (por ejemplo, `start|begin)`) y el patron `*)` funciona como caso por defecto. Es mas legible que multiples `if/elif` cuando se compara una variable contra valores fijos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `${10}`?

</div>
<div class="flashcard-back">

**R:** Parametro 10 en adelante (requiere llaves)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `$#`?

</div>
<div class="flashcard-back">

**R:** Numero de parametros pasados al script

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `$@`?

</div>
<div class="flashcard-back">

**R:** Todos los parametros como palabras separadas (`"$@"` = `"$1" "$2" "$3"`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `$*`?

</div>
<div class="flashcard-back">

**R:** Todos los parametros como una sola cadena (`"$*"` = `"$1 $2 $3"`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `$?`?

</div>
<div class="flashcard-back">

**R:** Codigo de salida del ultimo comando (0 = exito, distinto de 0 = error)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son 9. Codigos de salida (exit codes)?

</div>
<div class="flashcard-back">

**R:** Todo comando en Linux devuelve un codigo de salida:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son 10. exec?

</div>
<div class="flashcard-back">

**R:** `exec` reemplaza el shell actual con el comando especificado (no crea un nuevo proceso):

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son 11. Here Documents (heredoc)?

</div>
<div class="flashcard-back">

**R:** Permite pasar bloques de texto como entrada estandar a un comando:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.2">
</div>

<div class="flashcard" data-id="105.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

