---
title: "105.2 - Ejercicios: Personalizar o escribir scripts simples"
tags:
  - lpic-1
  - examen-102
  - tema-105
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "105"
subtema: "105.2"
---

# 105.2 - Ejercicios: Personalizar o escribir scripts simples

### Pregunta 1

Cual es la diferencia entre `"$@"` y `"$*"` cuando se usan con comillas dobles en un script que se ejecuta con `./script.sh "uno dos" tres`?

a) `"$@"` genera una sola cadena `"uno dos tres"` y `"$*"` genera dos argumentos separados
b) `"$@"` genera dos argumentos (`"uno dos"` y `"tres"`) y `"$*"` genera una sola cadena con todos los argumentos
c) Ambos generan dos argumentos separados: `"uno dos"` y `"tres"`
d) Ambos generan tres argumentos separados: `"uno"`, `"dos"` y `"tres"`

<details><summary>Respuesta</summary>

**b) `"$@"` genera dos argumentos (`"uno dos"` y `"tres"`) y `"$*"` genera una sola cadena con todos los argumentos**

`"$@"` expande cada argumento como una palabra separada, respetando las comillas originales. En un bucle `for arg in "$@"`, se obtienen 2 iteraciones: `uno dos` y `tres`. `"$*"` expande todos los argumentos como una sola cadena (concatenados con el primer caracter de IFS). En un bucle `for arg in "$*"`, se obtiene 1 sola iteracion con `uno dos tres`. En la practica, `"$@"` es casi siempre la opcion correcta para iterar sobre argumentos.

</details>

---

### Pregunta 2

Cual de las siguientes lineas shebang es la forma mas portable de indicar que un script debe ejecutarse con bash?

a) `#!/bin/bash`
b) `#!/usr/bin/env bash`
c) `#!/usr/local/bin/bash`
d) `#!bash`

<details><summary>Respuesta</summary>

**b) `#!/usr/bin/env bash`**

`#!/usr/bin/env bash` usa el comando `env` para buscar `bash` en el `PATH` del sistema, lo que lo hace funcionar independientemente de donde este instalado bash. `#!/bin/bash` asume que bash esta en `/bin/bash`, lo cual puede fallar en sistemas donde bash esta en otra ubicacion (por ejemplo, `/usr/local/bin/bash` en FreeBSD). `#!/usr/local/bin/bash` es incluso menos portable. `#!bash` no es valido porque requiere una ruta absoluta o el uso de `env`.

</details>

---

### Pregunta 3

Que operador de test se usa para verificar si una cadena esta vacia y cual para verificar si un archivo es un directorio?

a) `-e` para cadena vacia y `-f` para directorio
b) `-z` para cadena vacia y `-d` para directorio
c) `-n` para cadena vacia y `-d` para directorio
d) `-z` para cadena vacia y `-f` para directorio

<details><summary>Respuesta</summary>

**b) `-z` para cadena vacia y `-d` para directorio**

`-z` (zero length) verifica si una cadena esta vacia: `[ -z "$variable" ]` es verdadero si la variable esta vacia o no definida. `-d` (directory) verifica si la ruta es un directorio: `[ -d /tmp ]` es verdadero si `/tmp` es un directorio. `-n` (non-zero) es lo opuesto a `-z` (verifica que la cadena NO este vacia). `-f` verifica si es un archivo regular (no directorio). `-e` verifica si existe (cualquier tipo).

</details>

---

### Pregunta 4

Cual de las siguientes afirmaciones sobre `[ ]` y `[[ ]]` es correcta?

a) `[ ]` es exclusivo de bash y `[[ ]]` es compatible con POSIX
b) `[ ]` es POSIX compatible y usa `-a`/`-o` para logica; `[[ ]]` es exclusivo de bash y usa `&&`/`||`
c) `[[ ]]` no soporta pattern matching ni expresiones regulares
d) Dentro de `[ ]` no es necesario entrecomillar variables porque bash maneja la expansion automaticamente

<details><summary>Respuesta</summary>

**b) `[ ]` es POSIX compatible y usa `-a`/`-o` para logica; `[[ ]]` es exclusivo de bash y usa `&&`/`||`**

`[ ]` (equivalente al comando `test`) es POSIX compatible y funciona en cualquier shell. Usa `-a` para AND y `-o` para OR, y requiere entrecomillar variables para evitar errores si estan vacias. `[[ ]]` es una extension de bash (no POSIX) que usa `&&` y `||` para operadores logicos, soporta pattern matching con `==` y expresiones regulares con `=~`, y no necesita entrecomillar variables porque bash maneja `[[ ]]` de forma especial sin word splitting.

</details>

---

### Pregunta 5

Que imprime el siguiente script?
```bash
#!/bin/bash
x=10
resultado=$((x * 2 + 5))
echo $resultado
echo $?
```

a) `25` y `25`
b) `25` y `0`
c) `15` y `0`
d) `25` y `1`

<details><summary>Respuesta</summary>

**b) `25` y `0`**

Primero, `x=10`. Luego, `resultado=$((x * 2 + 5))` realiza la aritmetica del shell: 10 * 2 + 5 = 25. Nota: dentro de `$(( ))` no se necesita `$` antes de la variable. `echo $resultado` imprime `25`. `echo $?` imprime `0` porque el `echo` anterior se ejecuto con exito (codigo de salida 0). `$?` siempre contiene el codigo de salida del ultimo comando ejecutado: 0 indica exito, cualquier otro valor indica error.

</details>

---

### Pregunta 6

En una estructura `case` en bash, cual es la sintaxis correcta para terminar cada bloque de patron y cual es la palabra clave que cierra la estructura completa?

a) Cada bloque termina con `;;` y la estructura cierra con `esac`
b) Cada bloque termina con `done` y la estructura cierra con `end`
c) Cada bloque termina con `break` y la estructura cierra con `esac`
d) Cada bloque termina con `;` y la estructura cierra con `case`

<details><summary>Respuesta</summary>

**a) Cada bloque termina con `;;` y la estructura cierra con `esac`**

En la estructura `case` de bash, cada patron termina con `)`, cada bloque de comandos termina con `;;` (doble punto y coma), y la estructura completa se cierra con `esac` (que es `case` escrito al reves). El patron comodin `*)` funciona como caso por defecto. Los patrones pueden usar `|` para combinar multiples opciones (por ejemplo, `start|begin)`). Esta es una sintaxis fundamental para el examen LPIC-1.

</details>

---

### Pregunta 7

Que hace `exec` cuando se usa con un comando versus cuando se usa solo con redirecciones?

a) Con un comando, abre un subshell; con redirecciones, modifica los file descriptors del shell actual
b) Con un comando, reemplaza el shell actual por ese comando; con solo redirecciones, modifica los file descriptors sin reemplazar el shell
c) En ambos casos reemplaza el shell actual por el comando o la redireccion
d) Con un comando, ejecuta en segundo plano; con redirecciones, redirige la salida temporalmente

<details><summary>Respuesta</summary>

**b) Con un comando, reemplaza el shell actual por ese comando; con solo redirecciones, modifica los file descriptors sin reemplazar el shell**

`exec comando` reemplaza el proceso actual del shell por el comando especificado; el shell deja de existir y cualquier linea posterior no se ejecutara. `exec > archivo` (solo redireccion, sin comando) modifica permanentemente los file descriptors del shell actual sin reemplazarlo; el script continua ejecutandose. Por ejemplo, `exec > /tmp/log.txt` redirige toda la salida estandar posterior al archivo. `exec 3< /etc/passwd` abre un file descriptor para lectura.

</details>

---

### Pregunta 8

Cual es la diferencia entre un here document con `<< EOF` y con `<< 'EOF'` (delimitador entre comillas)?

a) `<< 'EOF'` permite la expansion de variables, `<< EOF` no
b) `<< EOF` permite la expansion de variables y sustitucion de comandos, `<< 'EOF'` trata todo como texto literal
c) `<< 'EOF'` genera un error de sintaxis
d) No hay diferencia, ambos se comportan de la misma forma

<details><summary>Respuesta</summary>

**b) `<< EOF` permite la expansion de variables y sustitucion de comandos, `<< 'EOF'` trata todo como texto literal**

Con `<< EOF`, las variables como `$HOME` y las sustituciones de comandos como `$(date)` se expanden a sus valores reales dentro del bloque heredoc. Con `<< 'EOF'` (comillas simples en el delimitador), NINGUNA expansion se realiza: `$HOME` y `$(date)` aparecen como texto literal. Esto es util cuando se quiere generar un archivo que contenga literalmente sintaxis de variables de shell sin que se interpreten.

</details>

---

### Pregunta 9

Que variable especial contiene el numero de argumentos pasados a un script y cual contiene el nombre del propio script?

a) `$@` contiene el numero de argumentos y `$0` el nombre del script
b) `$#` contiene el numero de argumentos y `$1` el nombre del script
c) `$#` contiene el numero de argumentos y `$0` el nombre del script
d) `$*` contiene el numero de argumentos y `$$` el nombre del script

<details><summary>Respuesta</summary>

**c) `$#` contiene el numero de argumentos y `$0` el nombre del script**

`$#` devuelve el numero total de parametros posicionales pasados al script (sin contar `$0`). `$0` contiene el nombre del script tal como fue invocado. Otras variables especiales importantes: `$1` a `$9` son los parametros posicionales individuales, `$@` y `$*` representan todos los parametros, `$?` es el codigo de salida del ultimo comando, `$$` es el PID del shell actual, y `$!` es el PID del ultimo proceso ejecutado en segundo plano.

</details>

---

### Pregunta 10

Un script necesita leer `/etc/passwd` linea por linea usando `:` como separador de campos. Cual es la forma correcta de hacerlo con un bucle `while`?

a) `while read -d ":" linea; do echo "$linea"; done < /etc/passwd`
b) `while IFS=: read usuario password uid gid gecos home shell; do echo "$usuario"; done < /etc/passwd`
c) `for linea in $(cat /etc/passwd); do IFS=: read usuario <<< "$linea"; done`
d) `while read linea; do cut -d: -f1 "$linea"; done < /etc/passwd`

<details><summary>Respuesta</summary>

**b) `while IFS=: read usuario password uid gid gecos home shell; do echo "$usuario"; done < /etc/passwd`**

La forma correcta es establecer `IFS=:` (Internal Field Separator) antes de `read` para que los campos se separen por `:` en lugar del separador por defecto (espacio/tab/newline). Al especificar multiples variables en `read`, cada campo se asigna a la variable correspondiente. La redireccion `< /etc/passwd` alimenta el archivo como entrada del bucle `while`. Esta tecnica es fundamental para procesar archivos con campos delimitados en scripts de shell.

</details>

---

### Pregunta 11

Que operador de test se utiliza para verificar si un archivo tiene permiso de ejecucion?

a) `-e`
b) `-r`
c) `-x`
d) `-s`

<details><summary>Respuesta</summary>

**c) `-x`**

El operador `-x` verifica si un archivo tiene permiso de ejecucion para el usuario actual. Por ejemplo, `[ -x /usr/bin/vim ]` devuelve verdadero si el usuario puede ejecutar vim. Otros operadores de archivo: `-e` (existe, cualquier tipo), `-f` (es archivo regular), `-d` (es directorio), `-r` (tiene permiso de lectura), `-w` (tiene permiso de escritura), `-s` (existe y tiene tamano mayor que cero) y `-L` (es enlace simbolico). Siempre se recomienda entrecomillar la ruta: `[ -x "$archivo" ]`.

</details>

---

### Pregunta 12

Cual es la diferencia entre un bucle `while` y un bucle `until` en bash?

a) `while` ejecuta mientras la condicion sea falsa; `until` ejecuta mientras sea verdadera
b) `while` ejecuta mientras la condicion sea verdadera; `until` ejecuta hasta que la condicion sea verdadera
c) No hay diferencia, ambos funcionan de la misma manera
d) `while` solo acepta condiciones numericas; `until` acepta condiciones de cadenas

<details><summary>Respuesta</summary>

**b) `while` ejecuta mientras la condicion sea verdadera; `until` ejecuta hasta que la condicion sea verdadera**

El bucle `while` evalua la condicion y ejecuta el bloque mientras esta sea verdadera (codigo de salida 0). El bucle `until` es el opuesto: ejecuta el bloque hasta que la condicion sea verdadera, es decir, mientras sea falsa. Ambos usan la misma sintaxis con `do` y `done`. Por ejemplo, `while [ $i -le 5 ]` es equivalente a `until [ $i -gt 5 ]`. En la practica, `while` se usa mucho mas frecuentemente, pero `until` puede hacer el codigo mas legible en ciertos escenarios.

</details>

---

### Pregunta 13

Que comando genera una secuencia de numeros del 1 al 10 con incrementos de 2?

a) `seq 1 10 2`
b) `seq 1 2 10`
c) `seq 2 1 10`
d) `seq -i 2 1 10`

<details><summary>Respuesta</summary>

**b) `seq 1 2 10`**

La sintaxis de `seq` es `seq [inicio] [incremento] [fin]`. `seq 1 2 10` genera la secuencia 1, 3, 5, 7, 9 (empezando en 1, incrementando de 2 en 2, hasta 10). Si se omite el incremento, por defecto es 1. Si se omiten inicio e incremento, ambos son 1. Opciones utiles: `-w` anade ceros a la izquierda para igualar el ancho (por ejemplo, `seq -w 1 10` genera 01, 02, ..., 10) y `-s` define un separador personalizado (por ejemplo, `seq -s "," 1 5` genera `1,2,3,4,5`).

</details>

---

### Pregunta 14

Que imprime el siguiente fragmento de codigo?
```bash
nombre="Linux"
echo 'El sistema es $nombre'
```

a) `El sistema es Linux`
b) `El sistema es $nombre`
c) Un error de sintaxis
d) `El sistema es`

<details><summary>Respuesta</summary>

**b) `El sistema es $nombre`**

Las comillas simples (`' '`) en bash tratan todo su contenido como texto literal, sin expansion de variables ni sustitucion de comandos. La cadena `$nombre` se muestra tal cual, sin ser reemplazada por su valor. Para que la variable se expanda, se deben usar comillas dobles (`" "`): `echo "El sistema es $nombre"` mostraria `El sistema es Linux`. Esta distincion entre comillas simples y dobles es fundamental en scripting bash y es un tema frecuente en el examen LPIC-1.

</details>

---

### Pregunta 15

En un script, que valor tiene `$?` inmediatamente despues de ejecutar un comando que falla?

a) 0
b) Un valor distinto de 0 (generalmente 1 o un codigo de error especifico)
c) -1
d) El PID del proceso fallido

<details><summary>Respuesta</summary>

**b) Un valor distinto de 0 (generalmente 1 o un codigo de error especifico)**

La variable especial `$?` contiene el codigo de salida del ultimo comando ejecutado. Por convencion en Linux, `0` indica exito y cualquier valor entre `1` y `255` indica error. El valor exacto depende del comando: `1` es un error generico, `2` suele indicar uso incorrecto del comando, `127` indica comando no encontrado, y `126` que el archivo no tiene permisos de ejecucion. Los scripts pueden definir sus propios codigos con `exit N`. `$?` se actualiza despues de cada comando, por lo que debe consultarse inmediatamente despues del comando que se quiere verificar.

</details>

---

### Pregunta 16

Cual es la forma correcta de realizar una operacion aritmetica en bash para calcular `5 + 3` y almacenar el resultado en una variable?

a) `resultado=5+3`
b) `resultado=$((5 + 3))`
c) `resultado=(5 + 3)`
d) `resultado=${5 + 3}`

<details><summary>Respuesta</summary>

**b) `resultado=$((5 + 3))`**

La expansion aritmetica `$(( ))` es la forma recomendada de realizar operaciones matematicas en bash. `resultado=$((5 + 3))` asigna el valor `8` a la variable. La opcion `a` asigna la cadena literal "5+3" sin realizar la operacion. Dentro de `$(( ))` se pueden usar: suma (`+`), resta (`-`), multiplicacion (`*`), division entera (`/`), modulo (`%`) y potencia (`**`). No se necesita `$` antes de las variables dentro de `$(( ))`. Alternativas: `let "resultado = 5 + 3"` y `resultado=$(expr 5 + 3)` (mas antigua, requiere espacios).

</details>

---

### Pregunta 17

Que diferencia hay entre `&&` y `||` al encadenar comandos en bash?

a) `&&` ejecuta el segundo comando siempre; `||` solo si el primero falla
b) `&&` ejecuta el segundo comando solo si el primero tiene exito; `||` ejecuta el segundo solo si el primero falla
c) `&&` y `||` son equivalentes y ejecutan ambos comandos secuencialmente
d) `&&` ejecuta ambos en paralelo; `||` ejecuta ambos secuencialmente

<details><summary>Respuesta</summary>

**b) `&&` ejecuta el segundo comando solo si el primero tiene exito; `||` ejecuta el segundo solo si el primero falla**

`comando1 && comando2` ejecuta `comando2` unicamente si `comando1` termina con codigo de salida 0 (exito). `comando1 || comando2` ejecuta `comando2` unicamente si `comando1` termina con un codigo distinto de 0 (fallo). Se pueden combinar: `mkdir /tmp/test && echo "Creado" || echo "Error"`. Estos operadores son fundamentales en scripts para manejar el flujo de ejecucion de forma concisa sin necesidad de estructuras `if`. Son equivalentes a cortocircuito logico: AND evalua el segundo solo si el primero es verdadero, OR solo si el primero es falso.

</details>

---

### Pregunta 18

Que hace la opcion `-p` del comando `read`?

a) Lee la entrada en modo silencioso (sin mostrar lo que se escribe)
b) Muestra un prompt (mensaje) antes de leer la entrada del usuario
c) Lee multiples variables en paralelo
d) Establece un tiempo limite para la lectura

<details><summary>Respuesta</summary>

**b) Muestra un prompt (mensaje) antes de leer la entrada del usuario**

La opcion `-p` de `read` permite especificar un mensaje de prompt que se muestra al usuario antes de esperar la entrada. Ejemplo: `read -p "Introduce tu nombre: " nombre` muestra "Introduce tu nombre: " y espera que el usuario escriba, almacenando la entrada en la variable `nombre`. Otras opciones utiles: `-s` (silencioso, no muestra lo que se escribe; ideal para contrasenas), `-t N` (timeout de N segundos), `-n N` (lee solo N caracteres) y `-r` (no interpreta barras invertidas como caracteres de escape).

</details>

---

### Pregunta 19

Que variable especial contiene el PID del shell actual?

a) `$!`
b) `$?`
c) `$$`
d) `$#`

<details><summary>Respuesta</summary>

**c) `$$`**

La variable especial `$$` contiene el PID (Process ID) del shell actual. Es util para crear archivos temporales unicos: `tempfile="/tmp/mi_script_$$.tmp"`. Otras variables especiales: `$!` es el PID del ultimo proceso ejecutado en segundo plano, `$?` es el codigo de salida del ultimo comando, `$#` es el numero de argumentos pasados al script, `$0` es el nombre del script, `$@` y `$*` representan todos los argumentos, y `$1` a `$9` son los parametros posicionales individuales.

</details>

---

### Pregunta 20

En un heredoc, que efecto tiene usar `<<-` (con guion) en lugar de `<<`?

a) Desactiva la expansion de variables dentro del heredoc
b) Suprime las tabulaciones iniciales de las lineas del heredoc
c) Lee el heredoc desde un archivo externo
d) Invierte el orden de las lineas del heredoc

<details><summary>Respuesta</summary>

**b) Suprime las tabulaciones iniciales de las lineas del heredoc**

El operador `<<-` (con guion) suprime las tabulaciones (TAB, no espacios) al inicio de cada linea del heredoc, permitiendo indentar el bloque heredoc para que el codigo sea mas legible sin que las tabulaciones aparezcan en la salida. Esto es especialmente util cuando el heredoc esta dentro de una funcion o un bucle indentado. Sin el guion, las tabulaciones se incluyen literalmente en la salida. Es importante recordar que solo suprime tabulaciones, no espacios. `<< 'EOF'` (comillas) es lo que desactiva la expansion de variables.

</details>

---

### Pregunta 21

Escribe la linea shebang portable que usa `env` para localizar bash en el PATH del sistema.

<input type="text" class="fill-blank" data-answer="#!/usr/bin/env bash" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**#!/usr/bin/env bash**

La linea `#!/usr/bin/env bash` es la forma portable de especificar el interprete en un script. Usa el comando `env` para buscar `bash` en los directorios del `PATH` del sistema, lo que funciona independientemente de donde este instalado bash. A diferencia de `#!/bin/bash` (que asume una ruta fija), esta forma funciona en diferentes distribuciones Linux, BSD y macOS. El shebang debe ser la primera linea del archivo, sin espacios antes de `#!`. Su desventaja es que no permite pasar opciones adicionales al interprete de forma portable.

</details>

---

### Pregunta 22

Escribe la condicion con `test` o `[ ]` que verifica si la variable `$archivo` es un archivo regular que existe.

<input type="text" class="fill-blank" data-answer="[ -f \"$archivo\" ]" data-alt="test -f \"$archivo\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**[ -f "$archivo" ]**

El operador `-f` verifica si la ruta es un archivo regular (no directorio, ni enlace simbolico, ni dispositivo). La variable debe ir entre comillas dobles (`"$archivo"`) para evitar errores si la variable esta vacia o contiene espacios. Sin comillas, una variable vacia causaria un error de sintaxis en `[ ]`. La forma equivalente es `test -f "$archivo"`. Para verificar solo existencia (cualquier tipo), se usa `-e`. Para directorios, se usa `-d`. Para enlaces simbolicos, `-L`. Estas pruebas son fundamentales en scripts para validar la entrada antes de operar con archivos.

</details>

---

### Pregunta 23

Escribe el comando para dar permisos de ejecucion a un script llamado `backup.sh`.

<input type="text" class="fill-blank" data-answer="chmod +x backup.sh" data-alt="chmod 755 backup.sh" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**chmod +x backup.sh**

El comando `chmod +x backup.sh` anade el permiso de ejecucion al archivo para el propietario, grupo y otros. Alternativamente, `chmod 755 backup.sh` establece permisos rwxr-xr-x (lectura, escritura y ejecucion para el propietario; lectura y ejecucion para grupo y otros). Sin permiso de ejecucion, el script solo puede ejecutarse invocando el interprete directamente (`bash backup.sh`). Con permiso de ejecucion y un shebang correcto, se puede ejecutar con `./backup.sh`. El permiso de ejecucion es un requisito para ejecutar scripts directamente.

</details>

---

### Pregunta 24

Escribe el comando para almacenar la fecha actual en formato `YYYY-MM-DD` en una variable llamada `FECHA` usando sustitucion de comandos.

<input type="text" class="fill-blank" data-answer="FECHA=$(date +%Y-%m-%d)" data-alt="FECHA=`date +%Y-%m-%d`" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**FECHA=$(date +%Y-%m-%d)**

La sustitucion de comandos `$( )` ejecuta el comando entre parentesis y captura su salida. `date +%Y-%m-%d` genera la fecha en formato ISO (por ejemplo, `2026-06-02`). La forma moderna y recomendada es `$( )`, aunque la forma antigua con backticks `` `date +%Y-%m-%d` `` tambien funciona. La ventaja de `$( )` es que puede anidarse facilmente y es mas legible. La variable `FECHA` contendra la cadena con la fecha, lista para usarse en nombres de archivos de backup, logs, etc.

</details>

---

### Pregunta 25

Escribe la estructura `case` correcta en bash que evalua la variable `$1` y ejecuta `echo "inicio"` cuando el valor sea `start`.

<input type="text" class="fill-blank" data-answer="case $1 in start) echo \"inicio\";; esac" data-alt="case \"$1\" in start) echo \"inicio\";; esac" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**case $1 in start) echo "inicio";; esac**

La estructura `case` compara una variable contra multiples patrones. La sintaxis requiere: `case` seguido de la variable y `in`, cada patron termina con `)`, cada bloque de comandos termina con `;;` (doble punto y coma), y la estructura completa se cierra con `esac` (que es `case` al reves). Se pueden combinar patrones con `|` (por ejemplo, `start|begin)`) y el patron `*)` funciona como caso por defecto. Es mas legible que multiples `if/elif` cuando se compara una variable contra valores fijos.

</details>
