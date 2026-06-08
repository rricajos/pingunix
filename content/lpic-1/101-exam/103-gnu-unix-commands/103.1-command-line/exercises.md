---
title: "103.1 - Trabajar en la linea de comandos: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.1"
---

# 103.1 - Trabajar en la linea de comandos: Ejercicios

### Pregunta 1
Un administrador necesita saber si el comando `echo` es un comando interno del shell o un programa externo. Cual de los siguientes comandos muestra esta informacion de forma mas completa?

A) `which echo`
B) `whereis echo`
C) `type -a echo`
D) `find / -name echo`

<details>
<summary>Respuesta</summary>

**C) `type -a echo`**

`type -a` muestra **todas** las formas en que un comando puede ser encontrado: como builtin, alias, funcion o archivo externo. En el caso de `echo`, mostraria que es tanto un builtin como un archivo en `/usr/bin/echo`. `which` solo busca ejecutables en PATH y no reconoce builtins. `whereis` busca binarios, manuales y fuentes pero tampoco identifica builtins. `find` busca archivos en el sistema de archivos pero no conoce los builtins del shell.
</details>

---

### Pregunta 2
Cual es la diferencia entre ejecutar `env` y `set` sin argumentos?

A) `env` muestra las variables locales y `set` las de entorno
B) `env` muestra las variables de entorno y `set` muestra todas las variables (locales, de entorno y funciones)
C) Son equivalentes, ambos muestran las mismas variables
D) `set` solo muestra las opciones del shell activas

<details>
<summary>Respuesta</summary>

**B) `env` muestra las variables de entorno y `set` muestra todas las variables (locales, de entorno y funciones)**

`env` sin argumentos lista unicamente las variables de entorno (las que han sido exportadas y estan disponibles para procesos hijos). `set` sin argumentos muestra todas las variables del shell, incluyendo las variables locales, las variables de entorno y las funciones definidas. Esta es una distincion importante para el examen LPIC-1.
</details>

---

### Pregunta 3
Un usuario ejecuta los siguientes comandos:
```bash
ANIMAL=gato
export FRUTA=manzana
bash
echo $ANIMAL
echo $FRUTA
```
Que se mostrara en las dos ultimas lineas?

A) `gato` y `manzana`
B) Una linea vacia y `manzana`
C) `gato` y una linea vacia
D) Dos lineas vacias

<details>
<summary>Respuesta</summary>

**B) Una linea vacia y `manzana`**

`ANIMAL=gato` crea una variable local que solo existe en el shell actual. `export FRUTA=manzana` crea una variable de entorno que se hereda a los procesos hijos. Al ejecutar `bash`, se abre un nuevo shell hijo. En este shell hijo, `ANIMAL` no existe (era local del padre), por lo que `echo $ANIMAL` muestra una linea vacia. `FRUTA` si fue exportada, por lo que `echo $FRUTA` muestra `manzana`.
</details>

---

### Pregunta 4
Que comando buscaria en las descripciones de las paginas de manual todas las entradas relacionadas con "password"?

A) `man password`
B) `man -f password`
C) `man -k password`
D) `info password`

<details>
<summary>Respuesta</summary>

**C) `man -k password`**

`man -k` (equivalente a `apropos`) busca la palabra clave en las descripciones cortas de todas las paginas de manual del sistema y muestra las coincidencias. `man -f` (equivalente a `whatis`) solo muestra la descripcion de un comando exacto, no busca en las descripciones. `man password` intentaria abrir una pagina de manual llamada "password" (que podria no existir). `info password` abriria la pagina info de "password" si existiese.
</details>

---

### Pregunta 5
Dado el siguiente comando:
```bash
echo "El directorio home es $HOME y el usuario es $(whoami)"
```
Que ocurre con las variables y la sustitucion de comando?

A) No se expande nada, se muestra el texto literal
B) Se expande `$HOME` pero no `$(whoami)` porque las comillas dobles no permiten sustitucion de comandos
C) Se expande tanto `$HOME` como `$(whoami)` con sus valores reales
D) Se produce un error de sintaxis

<details>
<summary>Respuesta</summary>

**C) Se expande tanto `$HOME` como `$(whoami)` con sus valores reales**

Las comillas dobles permiten la expansion de variables (`$VARIABLE`) y la sustitucion de comandos (`$(comando)` o `` `comando` ``). Solo las comillas simples evitan toda expansion. Por lo tanto, `$HOME` se reemplaza por el directorio home del usuario y `$(whoami)` se reemplaza por el nombre de usuario. La salida seria algo como: `El directorio home es /home/sandra y el usuario es sandra`.
</details>

---

### Pregunta 6
Un usuario quiere crear los directorios `proyecto/src`, `proyecto/bin` y `proyecto/doc` con un solo comando. Cual de las siguientes opciones es correcta?

A) `mkdir proyecto/src proyecto/bin proyecto/doc`
B) `mkdir -p proyecto/{src,bin,doc}`
C) `mkdir proyecto/[src,bin,doc]`
D) `mkdir -r proyecto/src,bin,doc`

<details>
<summary>Respuesta</summary>

**B) `mkdir -p proyecto/{src,bin,doc}`**

La expansion de llaves `{src,bin,doc}` genera tres cadenas: `proyecto/src`, `proyecto/bin` y `proyecto/doc`. La opcion `-p` de `mkdir` crea los directorios padre si no existen (en este caso, `proyecto/`). La opcion A funcionaria solo si el directorio `proyecto/` ya existiese. La opcion C usa globbing `[]` que solo coincide con un caracter, no con listas de palabras. La opcion D usa `-r` que no es una opcion valida de `mkdir`.
</details>

---

### Pregunta 7
Cual es la diferencia entre los operadores `&&` y `;` en la linea de comandos?

A) `;` ejecuta comandos en paralelo, `&&` en secuencia
B) `&&` ejecuta el segundo comando solo si el primero tuvo exito, `;` ejecuta ambos sin importar el resultado
C) Son equivalentes, ambos ejecutan comandos en secuencia
D) `;` es para scripts y `&&` para la linea de comandos

<details>
<summary>Respuesta</summary>

**B) `&&` ejecuta el segundo comando solo si el primero tuvo exito, `;` ejecuta ambos sin importar el resultado**

El operador `;` ejecuta los comandos secuencialmente sin importar el codigo de salida del comando anterior. El operador `&&` (AND logico) solo ejecuta el siguiente comando si el anterior devolvio un codigo de salida 0 (exito). Ejemplo: `cd /tmp && rm archivo.txt` solo ejecutara `rm` si el `cd` fue exitoso, mientras que `cd /tmp ; rm archivo.txt` ejecutara `rm` independientemente de si el `cd` fallo o no (lo cual podria ser peligroso).
</details>

---

### Pregunta 8
Un usuario ejecuta `!grep` en la linea de comandos. Que ocurre?

A) Se busca la palabra "grep" en el directorio actual
B) Se ejecuta el ultimo comando del historial que comienza con "grep"
C) Se abre la pagina de manual de grep
D) Se ejecuta grep sin argumentos

<details>
<summary>Respuesta</summary>

**B) Se ejecuta el ultimo comando del historial que comienza con "grep"**

El operador `!cadena` busca en el historial de comandos el ultimo comando que comienza con la cadena especificada y lo ejecuta. Por ejemplo, si anteriormente se ejecuto `grep -r "error" /var/log/`, al escribir `!grep` se volveria a ejecutar exactamente ese comando. Otros operadores utiles del historial son `!!` (repite el ultimo comando), `!N` (ejecuta el comando numero N) y `!?cadena` (busca comandos que contengan la cadena en cualquier posicion).
</details>

### Pregunta 9

Que archivo de configuracion se ejecuta al iniciar un shell de login en bash, despues de `/etc/profile`?

a) `~/.bashrc`
b) El primero que exista de: `~/.bash_profile`, `~/.bash_login`, `~/.profile`
c) `/etc/bash.bashrc`
d) `~/.bash_logout`

<details><summary>Respuesta</summary>

**b) El primero que exista de: `~/.bash_profile`, `~/.bash_login`, `~/.profile`**

En un shell de login, bash lee primero `/etc/profile` (configuracion global) y luego busca el primero que exista de estos tres archivos personales, en este orden: `~/.bash_profile`, `~/.bash_login`, `~/.profile`. Solo lee el primero que encuentre. `~/.bashrc` se lee en shells interactivos no-login (como abrir una terminal en el escritorio). Es comun que `~/.bash_profile` incluya un `source ~/.bashrc` para compartir configuracion entre ambos tipos de shell.

</details>

### Pregunta 10

Que variable de entorno determina en que directorios busca el shell los comandos ejecutables?

a) `$SHELL`
b) `$HOME`
c) `$PATH`
d) `$TERM`

<details><summary>Respuesta</summary>

**c) `$PATH`**

La variable `$PATH` contiene una lista de directorios separados por dos puntos (`:`) donde el shell busca los comandos ejecutables cuando se escribe un comando sin ruta completa. Por ejemplo, `PATH=/usr/local/bin:/usr/bin:/bin`. El shell busca en cada directorio de izquierda a derecha y ejecuta el primer ejecutable que encuentre. `$SHELL` indica el shell de login del usuario, `$HOME` es el directorio personal y `$TERM` es el tipo de terminal.

</details>

### Pregunta 11

Cual es la diferencia entre las comillas simples y las comillas dobles en bash?

a) No hay diferencia, ambas funcionan de la misma manera
b) Las comillas simples permiten expansion de variables y las dobles no
c) Las comillas simples tratan todo como texto literal, las dobles permiten expansion de variables y sustitucion de comandos
d) Las comillas dobles solo protegen contra la expansion de comodines

<details><summary>Respuesta</summary>

**c) Las comillas simples tratan todo como texto literal, las dobles permiten expansion de variables y sustitucion de comandos**

Las comillas simples (`' '`) eliminan el significado especial de todos los caracteres dentro de ellas: `echo '$HOME'` muestra literalmente `$HOME`. Las comillas dobles (`" "`) permiten la expansion de variables (`$VAR`), la sustitucion de comandos (`$(comando)` y backticks), y la interpretacion de algunos caracteres especiales como `$`, `` ` ``, `\`, `!` y `"`. Ejemplo: `echo "$HOME"` muestra `/home/usuario`.

</details>

### Pregunta 12

Que comando muestra la version del kernel de Linux que se esta ejecutando?

a) `uname -a`
b) `uname -r`
c) `uname -n`
d) `uname -o`

<details><summary>Respuesta</summary>

**b) `uname -r`**

`uname -r` muestra especificamente la version del kernel (release), por ejemplo `5.15.0-52-generic`. `uname -a` muestra toda la informacion del sistema (kernel, hostname, version, arquitectura, etc.), no solo la version. `uname -n` muestra el nombre de red del equipo (hostname). `uname -o` muestra el nombre del sistema operativo (por ejemplo, `GNU/Linux`). Para el examen LPIC-1, `uname -r` es el mas preguntado.

</details>

### Pregunta 13

Un usuario define una variable con `EDITOR=vim`. Que debe hacer para que esta variable este disponible en los procesos hijos?

a) Nada, las variables siempre se heredan
b) Ejecutar `export EDITOR`
c) Ejecutar `set EDITOR=vim`
d) Reiniciar el shell

<details><summary>Respuesta</summary>

**b) Ejecutar `export EDITOR`**

Las variables definidas sin `export` son variables locales del shell actual y no se heredan a los procesos hijos. Para convertir una variable local en variable de entorno (disponible para procesos hijos), se debe usar `export`. Se puede hacer en dos pasos (`EDITOR=vim` seguido de `export EDITOR`) o en un solo paso (`export EDITOR=vim`). El comando `set` sin argumentos lista todas las variables pero no exporta. Solo las variables exportadas aparecen en la salida de `env`.

</details>

### Pregunta 14

Que hace el comando `exec ls` en un shell?

a) Ejecuta `ls` en un subshell y vuelve al shell actual
b) Reemplaza el shell actual por el comando `ls`; al terminar `ls`, el terminal se cierra
c) Ejecuta `ls` con permisos de superusuario
d) Ejecuta `ls` y redirige la salida a un archivo

<details><summary>Respuesta</summary>

**b) Reemplaza el shell actual por el comando `ls`; al terminar `ls`, el terminal se cierra**

`exec` reemplaza el proceso del shell actual con el comando especificado. El shell deja de existir y es sustituido por el nuevo proceso. No se crea un proceso hijo. Cuando `ls` termina, como el shell ya no existe, el terminal se cierra. `exec` tambien se usa para redirigir descriptores de archivo para todo el script, por ejemplo: `exec > salida.log` redirige toda la salida del shell a un archivo.

</details>

### Pregunta 15

Que comando permite cambiar el shell de login de un usuario de forma permanente?

a) `bash`
b) `shell -s /bin/zsh`
c) `chsh -s /bin/zsh`
d) `export SHELL=/bin/zsh`

<details><summary>Respuesta</summary>

**c) `chsh -s /bin/zsh`**

`chsh -s /bin/zsh` cambia el shell de login del usuario de forma permanente, modificando la entrada correspondiente en `/etc/passwd`. El nuevo shell debe estar listado en `/etc/shells` para ser aceptado. Simplemente escribir `bash` o `zsh` inicia una nueva instancia temporal del shell. Cambiar la variable `$SHELL` con `export` solo modifica la variable en la sesion actual sin efecto permanente. El archivo `/etc/shells` contiene la lista de shells validos del sistema.

</details>

### Pregunta 16

Que variable de entorno controla que comandos se guardan en el historial de bash, permitiendo ignorar duplicados?

a) `HISTFILE`
b) `HISTSIZE`
c) `HISTCONTROL`
d) `HISTFILESIZE`

<details><summary>Respuesta</summary>

**c) `HISTCONTROL`**

`HISTCONTROL` controla que comandos se almacenan en el historial. Sus valores posibles son: `ignoredups` (ignora duplicados consecutivos), `ignorespace` (ignora comandos que empiezan con espacio), `ignoreboth` (combina los dos anteriores) y `erasedups` (elimina todas las entradas anteriores duplicadas). `HISTFILE` define la ruta del archivo de historial (por defecto `~/.bash_history`). `HISTSIZE` es el numero maximo de comandos en memoria y `HISTFILESIZE` el numero maximo de lineas en el archivo.

</details>

### Pregunta 17

Que hace el comando `hash -r` en bash?

a) Muestra la tabla hash de comandos
b) Elimina la entrada mas reciente de la tabla hash
c) Limpia completamente la tabla hash interna del shell
d) Recalcula los hashes de todos los comandos en PATH

<details><summary>Respuesta</summary>

**c) Limpia completamente la tabla hash interna del shell**

`hash -r` resetea (limpia) la tabla hash interna de bash. Esta tabla almacena las rutas de los comandos externos ya ejecutados para evitar buscar en todos los directorios de `$PATH` cada vez. Si se instala una nueva version de un programa en una ubicacion diferente, el shell podria seguir usando la ruta antigua. `hash -r` fuerza una nueva busqueda la proxima vez que se ejecute el comando. `hash` sin opciones muestra la tabla actual y `hash -t comando` muestra la ruta almacenada de un comando.

</details>

### Pregunta 18

Que resultado produce el comando `echo {A,B}{1,2}`?

a) `A1 B2`
b) `A B 1 2`
c) `A1 A2 B1 B2`
d) `{A,B}{1,2}`

<details><summary>Respuesta</summary>

**c) `A1 A2 B1 B2`**

La expansion de llaves en bash genera todas las combinaciones posibles de los elementos. `{A,B}{1,2}` produce las combinaciones: A con 1, A con 2, B con 1 y B con 2, resultando en `A1 A2 B1 B2`. La expansion de llaves no depende de la existencia de archivos (a diferencia del globbing) y se evalua antes que otras expansiones. Es muy util para crear multiples archivos o directorios con un solo comando, por ejemplo: `mkdir -p proyecto/{src,bin,doc}`.

</details>

### Pregunta 19

Que comando usarias para agregar el directorio `/opt/bin` al final de la variable PATH?

<input type="text" class="fill-blank" data-answer="export PATH=$PATH:/opt/bin" data-alt="PATH=$PATH:/opt/bin && export PATH,export PATH=${PATH}:/opt/bin" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**export PATH=$PATH:/opt/bin**

Para agregar un directorio al PATH se concatena al valor existente usando `$PATH` seguido de `:` y el nuevo directorio. El `export` es necesario para que la variable actualizada este disponible en los procesos hijos. Al anadir al final, los comandos en `/opt/bin` solo se encontraran si no existen versiones en los directorios anteriores. Para dar prioridad al nuevo directorio, se anaden al inicio: `export PATH=/opt/bin:$PATH`.

</details>

### Pregunta 20

Que comando usarias para cambiar el shell actual temporalmente a zsh?

<input type="text" class="fill-blank" data-answer="zsh" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**zsh**

Para cambiar de shell temporalmente, basta con escribir el nombre del shell deseado (`zsh`, `bash`, `sh`, etc.). Esto inicia una nueva instancia del shell como proceso hijo del shell actual. Al ejecutar `exit` o pulsar `Ctrl+D`, se vuelve al shell anterior. Para cambiar el shell de login de forma permanente, se usa `chsh -s /bin/zsh`. La lista de shells disponibles se puede consultar en `/etc/shells`.

</details>

### Pregunta 21

Que comando muestra una descripcion breve de lo que hace el comando `passwd`? (equivalente a `man -f`)

<input type="text" class="fill-blank" data-answer="whatis passwd" data-alt="man -f passwd" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**whatis passwd**

`whatis` muestra una descripcion de una linea para un comando, exactamente igual que `man -f`. Por ejemplo, `whatis passwd` mostraria: `passwd (1) - update user's authentication tokens` y `passwd (5) - password file`. El comando complementario `apropos` (equivalente a `man -k`) busca una palabra clave en las descripciones de todas las paginas de manual. Ambos dependen de la base de datos de man, que se actualiza con `mandb`.

</details>

### Pregunta 22

Que comando muestra informacion de ayuda sobre el builtin `cd` de bash?

<input type="text" class="fill-blank" data-answer="help cd" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**help cd**

`help` es un comando builtin de bash que muestra informacion sobre los comandos internos del shell. Solo funciona con builtins como `cd`, `export`, `alias`, `set`, etc. `man cd` puede no existir en muchos sistemas porque `cd` no es un comando externo. `help` sin argumentos lista todos los builtins disponibles. `help -s cd` muestra solo la sintaxis (formato corto) y `help -d cd` muestra solo una descripcion breve.

</details>

### Pregunta 23

Que comando usarias para eliminar el alias `ll` previamente definido?

<input type="text" class="fill-blank" data-answer="unalias ll" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**unalias ll**

`unalias ll` elimina el alias `ll` de la sesion actual. Para eliminar todos los alias de la sesion, se usa `unalias -a`. Los alias eliminados con `unalias` solo se eliminan de la sesion actual; si estan definidos en `~/.bashrc`, volveran a cargarse al iniciar un nuevo shell. Para eliminar un alias permanentemente, se debe editar el archivo donde fue definido (`~/.bashrc` o `~/.bash_profile`). Se pueden evadir alias temporalmente con `\comando`, `command comando` o usando la ruta completa.

</details>

---

### Pregunta 24
Un administrador ejecuta `echo $SHELL` y obtiene `/bin/bash`, pero luego ejecuta `echo $0` y obtiene `sh`. Cual es la explicacion mas probable?

A) El sistema tiene un error en la configuracion del shell
B) El usuario esta ejecutando un script con `#!/bin/sh` como interprete
C) `$SHELL` muestra el shell actual y `$0` muestra el shell de login
D) `$SHELL` muestra el shell de login y `$0` muestra el shell en uso actualmente

<details>
<summary>Respuesta</summary>

**D) `$SHELL` muestra el shell de login y `$0` muestra el shell en uso actualmente**

`$SHELL` es una variable de entorno que almacena el shell de login del usuario (definido en `/etc/passwd`) y no cambia cuando se inicia un subshell diferente. `$0` muestra el nombre del programa actual en ejecucion. Si el usuario inicio `sh` manualmente o esta en un script, `$0` reflejara `sh` mientras que `$SHELL` seguira mostrando `/bin/bash`. Esta distincion es importante para diagnosticar en que shell realmente se esta trabajando.

</details>

---

### Pregunta 25
Cual de las siguientes formas ejecuta un comando ignorando cualquier alias definido para ese nombre?

A) `alias -i ls`
B) `noalias ls`
C) `\ls`
D) `run ls`

<details>
<summary>Respuesta</summary>

**C) `\ls`**

Anteponer una barra invertida (`\`) antes de un comando evita la expansion de alias, forzando la ejecucion del comando real. `\ls` ejecuta `/bin/ls` directamente, ignorando cualquier alias como `alias ls='ls --color=auto'`. Otras formas equivalentes son usar `command ls` o la ruta completa `/bin/ls`. Las opciones `alias -i` y `noalias` no existen, y `run` no es un comando estandar de bash.

</details>
