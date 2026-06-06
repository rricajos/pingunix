---
title: "103.4 - Flujos, pipes y redirecciones: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.4"
---

# 103.4 - Flujos, pipes y redirecciones: Ejercicios

### Pregunta 1
Un administrador quiere ejecutar un comando y guardar tanto la salida estandar como los errores en el mismo archivo `log.txt`. Cuales de las siguientes opciones son correctas? (Seleccione DOS)

A) `comando > log.txt 2>&1`
B) `comando 2>&1 > log.txt`
C) `comando &> log.txt`
D) `comando > log.txt > log.txt`

<details>
<summary>Respuesta</summary>

**A) `comando > log.txt 2>&1` y C) `comando &> log.txt`**

La opcion A primero redirige stdout al archivo `log.txt`, y luego `2>&1` redirige stderr a donde apunte stdout (que ya es log.txt). La opcion C usa `&>` que es un atajo de bash para redirigir ambos flujos al mismo archivo. La opcion B es incorrecta porque `2>&1` se evalua primero (stderr va a donde stdout apunta en ese momento, que es la pantalla), y luego `> log.txt` solo redirige stdout al archivo; stderr sigue yendo a la pantalla. La opcion D no es valida para combinar ambos flujos.
</details>

---

### Pregunta 2
Que hace el siguiente comando?
```bash
find /var/log -name "*.log" -mtime +30 | xargs rm
```

A) Lista todos los archivos .log de /var/log modificados en los ultimos 30 dias
B) Elimina todos los archivos .log de /var/log modificados hace mas de 30 dias
C) Comprime los archivos .log de /var/log mayores de 30 MB
D) Mueve los archivos .log antiguos a la papelera

<details>
<summary>Respuesta</summary>

**B) Elimina todos los archivos .log de /var/log modificados hace mas de 30 dias**

`find /var/log -name "*.log" -mtime +30` busca todos los archivos que terminan en `.log` dentro de `/var/log` que fueron modificados hace mas de 30 dias. El operador `|` pasa esta lista de archivos a `xargs`, que convierte cada linea de la entrada estandar en argumentos para el comando `rm`. El resultado es que `rm` elimina cada uno de los archivos encontrados. Si los nombres de archivo pudieran contener espacios, seria mas seguro usar `find ... -print0 | xargs -0 rm`.
</details>

---

### Pregunta 3
Cual de los siguientes comandos muestra la salida del comando `ls -l` en la pantalla Y al mismo tiempo la guarda en el archivo `listado.txt`?

A) `ls -l > listado.txt`
B) `ls -l >> listado.txt`
C) `ls -l | tee listado.txt`
D) `ls -l | cat > listado.txt`

<details>
<summary>Respuesta</summary>

**C) `ls -l | tee listado.txt`**

`tee` lee de la entrada estandar y escribe simultaneamente en la salida estandar (pantalla) y en el archivo especificado. Es la unica forma de dividir el flujo de datos para que vaya a dos destinos al mismo tiempo. La opcion A redirige toda la salida al archivo (no muestra nada en pantalla). La opcion B anade al archivo pero tampoco muestra en pantalla. La opcion D tambien redirige todo al archivo sin mostrar en pantalla. Si se quisiera anadir al archivo en vez de sobreescribir, se usaria `tee -a`.
</details>

---

### Pregunta 4
Que son los descriptores de archivo 0, 1 y 2 en Linux?

A) 0=stdout, 1=stdin, 2=stderr
B) 0=stdin, 1=stderr, 2=stdout
C) 0=stdin, 1=stdout, 2=stderr
D) 0=stderr, 1=stdin, 2=stdout

<details>
<summary>Respuesta</summary>

**C) 0=stdin, 1=stdout, 2=stderr**

Los tres descriptores de archivo estandar en Linux son: **0** para la entrada estandar (stdin, por defecto el teclado), **1** para la salida estandar (stdout, por defecto la pantalla) y **2** para la salida de error estandar (stderr, por defecto tambien la pantalla). Estos numeros son fundamentales para las redirecciones: `>` equivale a `1>`, `<` equivale a `0<`, y `2>` redirige especificamente los errores. Todo proceso en Linux hereda estos tres descriptores al ser creado.
</details>

---

### Pregunta 5
Un script genera mucha salida que no interesa y tambien mensajes de error que tampoco se quieren ver. Cual es la forma correcta de descartar TODA la salida?

A) `script.sh > /dev/zero`
B) `script.sh &> /dev/null`
C) `script.sh > /dev/null`
D) `script.sh 2> /dev/null`

<details>
<summary>Respuesta</summary>

**B) `script.sh &> /dev/null`**

`&>` redirige tanto stdout como stderr al mismo destino. `/dev/null` es un archivo especial que descarta todo lo que se escribe en el. Otra forma equivalente seria `script.sh > /dev/null 2>&1`. La opcion A usa `/dev/zero` que es un dispositivo que genera ceros al leer de el, no es un sumidero para descartar datos (aunque escribir en el no causa error, no es idiomatico). La opcion C solo descarta stdout, los errores seguirian apareciendo en pantalla. La opcion D solo descarta stderr, la salida normal seguiria en pantalla.
</details>

---

### Pregunta 6
Que hace el operador `<<` en el siguiente ejemplo?
```bash
cat << FIN
Hola $USER
Fecha: $(date)
FIN
```

A) Lee el archivo llamado "FIN" y muestra su contenido
B) Crea un here document que pasa el bloque de texto como stdin a cat, con expansion de variables
C) Escribe "FIN" en la salida estandar
D) Redirige la salida de cat al archivo FIN

<details>
<summary>Respuesta</summary>

**B) Crea un here document que pasa el bloque de texto como stdin a cat, con expansion de variables**

El operador `<<` seguido de un delimitador (en este caso `FIN`) crea un "here document". Todo el texto entre `<< FIN` y la linea que contiene solo `FIN` se pasa como entrada estandar al comando `cat`. Dentro del here document, las variables como `$USER` y las sustituciones de comandos como `$(date)` se expanden con sus valores reales. Si se quisiera evitar la expansion, se usarian comillas en el delimitador: `<< 'FIN'`. El delimitador de cierre debe estar solo en su propia linea, sin espacios antes ni despues.
</details>

---

### Pregunta 7
Un administrador quiere encontrar todos los archivos `.conf` en `/etc` y copiarlos a `/backup/configs/`. Los nombres de algunos archivos contienen espacios. Cual de los siguientes comandos es el mas seguro?

A) `find /etc -name "*.conf" | xargs cp /backup/configs/`
B) `find /etc -name "*.conf" -print0 | xargs -0 cp -t /backup/configs/`
C) `find /etc -name "*.conf" | cp /backup/configs/`
D) `find /etc -name "*.conf" > xargs cp /backup/configs/`

<details>
<summary>Respuesta</summary>

**B) `find /etc -name "*.conf" -print0 | xargs -0 cp -t /backup/configs/`**

Cuando los nombres de archivo pueden contener espacios u otros caracteres especiales, es fundamental usar `-print0` en `find` (que separa los resultados con el caracter null `\0` en vez de saltos de linea) y `-0` en `xargs` (que usa null como delimitador de entrada). La opcion `-t` de `cp` especifica el directorio destino, permitiendo que los nombres de archivo vayan como argumentos finales. La opcion A fallaria con nombres que contienen espacios porque xargs los interpretaria como argumentos separados. La opcion C no funcionaria porque `cp` no lee de stdin. La opcion D redirige la salida de find a un archivo llamado "xargs", no ejecuta xargs.
</details>

---

### Pregunta 8
Cual es la funcion del comando `mkfifo` y como se diferencia de un pipe normal?

A) `mkfifo` crea un archivo temporal que se borra al cerrarse
B) `mkfifo` crea un pipe con nombre (FIFO) que persiste en el sistema de archivos y puede ser usado por procesos no relacionados
C) `mkfifo` crea un pipe que solo puede ser usado por el usuario root
D) `mkfifo` es un alias de `|` para usar en scripts

<details>
<summary>Respuesta</summary>

**B) `mkfifo` crea un pipe con nombre (FIFO) que persiste en el sistema de archivos y puede ser usado por procesos no relacionados**

`mkfifo` crea una named pipe (FIFO - First In, First Out) que aparece como un archivo especial en el sistema de archivos (identificado con `p` en `ls -l`). A diferencia del pipe normal (`|`) que solo conecta dos comandos en la misma linea y es temporal, una named pipe persiste hasta que se elimine con `rm`, y puede ser utilizada por procesos completamente independientes (incluso en distintas sesiones de terminal). Un proceso puede escribir en la pipe (`echo "datos" > mi_pipe`) y otro puede leer de ella (`cat < mi_pipe`). La operacion es bloqueante: el escritor espera a que alguien lea, y viceversa.
</details>

### Pregunta 9

Cual es la diferencia entre `>` y `>>` al redirigir la salida estandar a un archivo?

a) `>` anade al final del archivo, `>>` lo sobreescribe
b) `>` sobreescribe el archivo, `>>` anade al final sin sobreescribir
c) `>` redirige stdout y `>>` redirige stderr
d) No hay diferencia, ambos funcionan de la misma manera

<details><summary>Respuesta</summary>

**b) `>` sobreescribe el archivo, `>>` anade al final sin sobreescribir**

El operador `>` redirige la salida estandar a un archivo, sobreescribiendo cualquier contenido previo. El operador `>>` (append) tambien redirige la salida estandar pero anade el contenido al final del archivo existente sin sobreescribirlo. Si el archivo no existe, ambos lo crean. Para proteger contra sobreescrituras accidentales se puede activar `set -o noclobber`, lo que impide que `>` sobreescriba archivos existentes (se puede forzar con `>|`).

</details>

### Pregunta 10

Que hace el comando `comando 2>&1 > archivo.txt`? Es correcto para capturar stdout y stderr en el archivo?

a) Si, captura ambos flujos en archivo.txt
b) No, solo stdout va al archivo; stderr sigue yendo a la pantalla
c) No, solo stderr va al archivo; stdout va a la pantalla
d) Produce un error de sintaxis

<details><summary>Respuesta</summary>

**b) No, solo stdout va al archivo; stderr sigue yendo a la pantalla**

El orden de las redirecciones importa. En `comando 2>&1 > archivo.txt`, primero `2>&1` redirige stderr a donde stdout apunta en ese momento (la pantalla), y luego `> archivo.txt` redirige stdout al archivo. El resultado es que stderr sigue yendo a la pantalla. La forma correcta es `comando > archivo.txt 2>&1`, donde primero stdout se redirige al archivo y luego stderr sigue a stdout (al archivo). Alternativamente, `comando &> archivo.txt` captura ambos flujos.

</details>

### Pregunta 11

Que comando permite escribir en un archivo protegido usando `sudo` con la ayuda de `tee`?

a) `sudo echo "linea" > /etc/archivo_protegido`
b) `echo "linea" | sudo tee /etc/archivo_protegido`
c) `echo "linea" > sudo /etc/archivo_protegido`
d) `sudo > /etc/archivo_protegido echo "linea"`

<details><summary>Respuesta</summary>

**b) `echo "linea" | sudo tee /etc/archivo_protegido`**

La opcion A no funciona porque la redireccion `>` la realiza el shell del usuario actual (sin privilegios), no el proceso sudo. El comando `tee` recibe los datos por stdin y los escribe en el archivo; al ejecutarlo con `sudo`, `tee` se ejecuta como root y puede escribir en archivos protegidos. Para anadir al archivo en lugar de sobreescribir, se usa `sudo tee -a`. La opcion C tiene una sintaxis invalida y la opcion D tambien es incorrecta.

</details>

### Pregunta 12

Que operador en bash envia tanto stdout como stderr a traves de un pipe al siguiente comando?

a) `|`
b) `|&`
c) `>&|`
d) `||`

<details><summary>Respuesta</summary>

**b) `|&`**

El operador `|&` (disponible en bash 4+) envia tanto stdout como stderr al siguiente comando a traves del pipe. El pipe normal `|` solo pasa stdout; stderr sigue yendo a la pantalla. `|&` es equivalente a `2>&1 |`. Por ejemplo: `ls /etc /no_existe |& wc -l` contaria tanto las lineas de la salida normal como los mensajes de error. El operador `||` es el OR logico que ejecuta el segundo comando solo si el primero falla.

</details>

### Pregunta 13

Que hace un here string (`<<<`) en bash?

a) Redirige un archivo a la entrada estandar
b) Pasa una sola cadena como entrada estandar a un comando
c) Crea un bloque de texto multilínea como entrada
d) Escribe una cadena en un archivo

<details><summary>Respuesta</summary>

**b) Pasa una sola cadena como entrada estandar a un comando**

Un here string `<<<` pasa una cadena directamente como entrada estandar a un comando. Por ejemplo: `wc -w <<< "uno dos tres"` cuenta 3 palabras, y `tr 'a-z' 'A-Z' <<< "hola"` convierte a mayusculas. Es mas eficiente que `echo "hola" | tr 'a-z' 'A-Z'` porque no crea un subproceso para `echo`. Las variables se expanden dentro del here string: `cat <<< "Mi home es $HOME"`. El here document (`<< EOF`) es para bloques multilínea.

</details>

### Pregunta 14

Que comando `xargs` es la forma mas segura de eliminar archivos cuyos nombres pueden contener espacios, encontrados con `find`?

a) `find . -name "*.tmp" | xargs rm`
b) `find . -name "*.tmp" -print0 | xargs -0 rm`
c) `find . -name "*.tmp" | xargs -d " " rm`
d) `find . -name "*.tmp" -exec rm`

<details><summary>Respuesta</summary>

**b) `find . -name "*.tmp" -print0 | xargs -0 rm`**

La combinacion `-print0` en `find` y `-0` en `xargs` usa el caracter null (`\0`) como delimitador en lugar de saltos de linea o espacios. Esto garantiza que los nombres de archivo con espacios, comillas u otros caracteres especiales se manejen correctamente. La opcion A fallaria con nombres que contienen espacios porque `xargs` los interpretaria como archivos separados. La opcion D tiene sintaxis incompleta (falta `{} \;`). Esta es una practica esencial de seguridad al procesar archivos con `find` y `xargs`.

</details>

### Pregunta 15

Que hace la sustitucion de procesos `<(comando)` en bash?

a) Ejecuta el comando en segundo plano
b) Presenta la salida del comando como un archivo temporal que puede ser leido
c) Redirige la salida del comando a /dev/null
d) Crea un subshell para ejecutar el comando

<details><summary>Respuesta</summary>

**b) Presenta la salida del comando como un archivo temporal que puede ser leido**

La sustitucion de procesos `<(comando)` ejecuta el comando y presenta su salida como si fuera un archivo temporal. Es especialmente util con `diff` para comparar la salida de dos comandos: `diff <(ls /dir1) <(ls /dir2)`. Esto evita crear archivos temporales manualmente. Tambien existe `>(comando)` que crea un archivo temporal de escritura. La sustitucion de procesos es especifica de bash y no funciona en `sh`. Es util con `while read` para evitar problemas de subshell creados por pipes.

</details>

### Pregunta 16

Si la opcion `noclobber` esta activada en el shell, que operador permite forzar la sobreescritura de un archivo existente con redireccion?

a) `>>`
b) `>!`
c) `>|`
d) `>&`

<details><summary>Respuesta</summary>

**c) `>|`**

Cuando `noclobber` esta activado (`set -o noclobber`), el operador `>` no permite sobreescribir archivos existentes y da un error. El operador `>|` fuerza la sobreescritura a pesar de la proteccion noclobber. `>>` anade al archivo sin sobreescribir. `>!` no es un operador valido en bash para este proposito (aunque si en otros shells como csh/tcsh). `>&` se usa para redirigir descriptores de archivo, no para forzar sobreescritura.

</details>

### Pregunta 17

Que opcion de `tee` permite anadir contenido al final de un archivo en lugar de sobreescribirlo?

a) `tee -f`
b) `tee -a`
c) `tee -p`
d) `tee --no-clobber`

<details><summary>Respuesta</summary>

**b) `tee -a`**

`tee -a` (append) anade la salida al final del archivo especificado en lugar de sobreescribirlo. Sin `-a`, `tee` sobreescribe el contenido del archivo. Por ejemplo: `echo "nueva linea" | tee -a log.txt` anade "nueva linea" al final de `log.txt` y tambien la muestra en la pantalla. `tee` puede escribir en multiples archivos simultaneamente: `comando | tee archivo1.txt archivo2.txt`. Las opciones `-f`, `-p` y `--no-clobber` no son opciones estandar de `tee`.

</details>

### Pregunta 18

En el contexto de las redirecciones, que es `/dev/null`?

a) Un directorio temporal para archivos de log
b) Un archivo especial que descarta todo lo que se escribe en el y produce EOF al leerlo
c) El directorio raiz del sistema de archivos virtual
d) Un dispositivo que genera datos aleatorios

<details><summary>Respuesta</summary>

**b) Un archivo especial que descarta todo lo que se escribe en el y produce EOF al leerlo**

`/dev/null` es un archivo especial del sistema conocido como "el agujero negro" de Linux. Acepta cualquier cantidad de datos escritos en el y los descarta silenciosamente. Al leer de el, produce inmediatamente un fin de archivo (EOF). Se usa para descartar salida no deseada: `comando > /dev/null` (descarta stdout), `comando 2> /dev/null` (descarta stderr), `comando &> /dev/null` (descarta todo). Tambien se usa para vaciar archivos: `cat /dev/null > archivo.txt`. `/dev/urandom` es el que genera datos aleatorios.

</details>

### Pregunta 19

Que comando redirige la salida estandar de un proceso a un archivo y al mismo tiempo los errores a otro archivo diferente?

<input type="text" class="fill-blank" data-answer="comando > salida.txt 2> errores.txt" data-alt="comando 1> salida.txt 2> errores.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**comando > salida.txt 2> errores.txt**

Esta sintaxis separa los dos flujos de salida: `>` (equivalente a `1>`) redirige stdout al archivo `salida.txt`, y `2>` redirige stderr al archivo `errores.txt`. Cada flujo va a un archivo diferente, permitiendo procesar los resultados y los errores por separado. Por ejemplo: `find / -name "*.conf" > resultados.txt 2> errores.txt` guarda los archivos encontrados en un archivo y los errores de permisos en otro.

</details>

### Pregunta 20

Que comando crea una named pipe (FIFO) llamada `mi_pipe`?

<input type="text" class="fill-blank" data-answer="mkfifo mi_pipe" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkfifo mi_pipe**

`mkfifo` crea un archivo especial de tipo pipe con nombre (FIFO - First In, First Out) en el sistema de archivos. Este archivo aparece con el tipo `p` en `ls -l` (por ejemplo, `prw-r--r--`). La named pipe permite comunicacion entre procesos independientes: un proceso escribe (`echo "datos" > mi_pipe`) y otro lee (`cat < mi_pipe`). La operacion es bloqueante hasta que ambos extremos estan conectados. Se elimina con `rm mi_pipe`. La opcion `-m` permite establecer permisos: `mkfifo -m 644 mi_pipe`.

</details>

### Pregunta 21

Que comando usarias para descartar solo los mensajes de error de un comando, mostrando la salida normal en pantalla?

<input type="text" class="fill-blank" data-answer="comando 2> /dev/null" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**comando 2> /dev/null**

`2> /dev/null` redirige solo el descriptor de archivo 2 (stderr) a `/dev/null`, descartando los mensajes de error. La salida estandar (stdout, descriptor 1) sigue yendo a la pantalla. Esto es muy util con comandos como `find` que generan muchos errores de permisos: `find / -name "*.conf" 2> /dev/null`. Para descartar solo stdout: `comando > /dev/null`. Para descartar ambos: `comando &> /dev/null` o `comando > /dev/null 2>&1`.

</details>

### Pregunta 22

Que comando usarias para pasar la cadena "Hola Mundo" como entrada estandar al comando `wc -w` usando un here string?

<input type="text" class="fill-blank" data-answer="wc -w <<< \"Hola Mundo\"" data-alt='wc -w <<< "Hola Mundo"' placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wc -w <<< "Hola Mundo"**

El operador `<<<` (here string) pasa la cadena entre comillas directamente como entrada estandar al comando. En este caso, `wc -w` contaria 2 palabras. Es equivalente a `echo "Hola Mundo" | wc -w` pero mas eficiente porque no crea un subproceso para `echo`. Las variables se expanden dentro del here string: `wc -w <<< "$VARIABLE"`. Los here strings son una funcionalidad especifica de bash.

</details>

### Pregunta 23

Que comando usarias para vaciar completamente el contenido de un archivo sin eliminarlo?

<input type="text" class="fill-blank" data-answer="> archivo.txt" data-alt="cat /dev/null > archivo.txt,truncate -s 0 archivo.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**> archivo.txt**

La forma mas corta de vaciar un archivo en bash es `> archivo.txt`, que redirige "nada" al archivo, sobreescribiendolo con contenido vacio. Alternativas equivalentes son: `cat /dev/null > archivo.txt`, `truncate -s 0 archivo.txt`, o `echo -n > archivo.txt`. Esto es util para limpiar archivos de log sin eliminarlos, ya que el archivo mantiene su inodo y los procesos que lo tienen abierto pueden seguir escribiendo en el.

</details>
