---
title: "103.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "103.1"
---

# Flashcards: 103.1 - Linea De Comandos

> 41 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-001">
<div class="flashcard-front">

**P:** Un administrador necesita saber si el comando `echo` es un comando interno del shell o un programa externo. Cual de los siguientes comandos muestra esta informacion de forma mas completa?

</div>
<div class="flashcard-back">

**R:** C) `type -a echo`. `type -a` muestra **todas** las formas en que un comando puede ser encontrado: como builtin, alias, funcion o archivo externo. En el caso de `echo`, mostraria que es tanto un builtin como un archivo en `/usr/bin/echo`. `which` solo busca ejecutables en PATH y no reconoce builtins. `whereis` busca binarios, manuales y fuentes pero tampoco identifica builtins. `find` busca archivos en el sistema de archivos pero no conoce los builtins del shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia entre ejecutar `env` y `set` sin argumentos?

</div>
<div class="flashcard-back">

**R:** B) `env` muestra las variables de entorno y `set` muestra todas las variables (locales, de entorno y funciones). `env` sin argumentos lista unicamente las variables de entorno (las que han sido exportadas y estan disponibles para procesos hijos). `set` sin argumentos muestra todas las variables del shell, incluyendo las variables locales, las variables de entorno y las funciones definidas. Esta es una distincion importante para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-003">
<div class="flashcard-front">

**P:** Un usuario ejecuta los siguientes comandos: ```bash ANIMAL=gato export FRUTA=manzana bash echo $ANIMAL echo $FRUTA ``` Que se mostrara en las dos ultimas lineas?

</div>
<div class="flashcard-back">

**R:** B) Una linea vacia y `manzana`. `ANIMAL=gato` crea una variable local que solo existe en el shell actual. `export FRUTA=manzana` crea una variable de entorno que se hereda a los procesos hijos. Al ejecutar `bash`, se abre un nuevo shell hijo. En este shell hijo, `ANIMAL` no existe (era local del padre), por lo que `echo $ANIMAL` muestra una linea vacia. `FRUTA` si fue exportada, por lo que `echo $FRUTA` muestra `manzana`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-004">
<div class="flashcard-front">

**P:** Que comando buscaria en las descripciones de las paginas de manual todas las entradas relacionadas con "password"?

</div>
<div class="flashcard-back">

**R:** C) `man -k password`. `man -k` (equivalente a `apropos`) busca la palabra clave en las descripciones cortas de todas las paginas de manual del sistema y muestra las coincidencias. `man -f` (equivalente a `whatis`) solo muestra la descripcion de un comando exacto, no busca en las descripciones. `man password` intentaria abrir una pagina de manual llamada "password" (que podria no existir). `info password` abriria la pagina info de "password" si existiese.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-005">
<div class="flashcard-front">

**P:** Dado el siguiente comando: ```bash echo "El directorio home es $HOME y el usuario es $(whoami)" ``` Que ocurre con las variables y la sustitucion de comando?

</div>
<div class="flashcard-back">

**R:** C) Se expande tanto `$HOME` como `$(whoami)` con sus valores reales. Las comillas dobles permiten la expansion de variables (`$VARIABLE`) y la sustitucion de comandos (`$(comando)` o `` `comando` ``). Solo las comillas simples evitan toda expansion. Por lo tanto, `$HOME` se reemplaza por el directorio home del usuario y `$(whoami)` se reemplaza por el nombre de usuario. La salida seria algo como: `El directorio home es /home/sandra y el usuario es sandra`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-006">
<div class="flashcard-front">

**P:** Un usuario quiere crear los directorios `proyecto/src`, `proyecto/bin` y `proyecto/doc` con un solo comando. Cual de las siguientes opciones es correcta?

</div>
<div class="flashcard-back">

**R:** B) `mkdir -p proyecto/{src,bin,doc}`. La expansion de llaves `{src,bin,doc}` genera tres cadenas: `proyecto/src`, `proyecto/bin` y `proyecto/doc`. La opcion `-p` de `mkdir` crea los directorios padre si no existen (en este caso, `proyecto/`). La opcion A funcionaria solo si el directorio `proyecto/` ya existiese. La opcion C usa globbing `[]` que solo coincide con un caracter, no con listas de palabras. La opcion D usa `-r` que no es una opcion valida de `mkdir`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-007">
<div class="flashcard-front">

**P:** Cual es la diferencia entre los operadores `&&` y `;` en la linea de comandos?

</div>
<div class="flashcard-back">

**R:** B) `&&` ejecuta el segundo comando solo si el primero tuvo exito, `;` ejecuta ambos sin importar el resultado. El operador `;` ejecuta los comandos secuencialmente sin importar el codigo de salida del comando anterior. El operador `&&` (AND logico) solo ejecuta el siguiente comando si el anterior devolvio un codigo de salida 0 (exito). Ejemplo: `cd /tmp && rm archivo.txt` solo ejecutara `rm` si el `cd` fue exitoso, mientras que `cd /tmp ; rm archivo.txt` ejecutara `rm` independientemente de si el `cd` fallo o no (lo cual podria ser peligroso).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-008">
<div class="flashcard-front">

**P:** Un usuario ejecuta `!grep` en la linea de comandos. Que ocurre?

</div>
<div class="flashcard-back">

**R:** B) Se ejecuta el ultimo comando del historial que comienza con "grep". El operador `!cadena` busca en el historial de comandos el ultimo comando que comienza con la cadena especificada y lo ejecuta. Por ejemplo, si anteriormente se ejecuto `grep -r "error" /var/log/`, al escribir `!grep` se volveria a ejecutar exactamente ese comando. Otros operadores utiles del historial son `!!` (repite el ultimo comando), `!N` (ejecuta el comando numero N) y `!?cadena` (busca comandos que contengan la cadena en cualquier posicion).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-009">
<div class="flashcard-front">

**P:** Que archivo de configuracion se ejecuta al iniciar un shell de login en bash, despues de `/etc/profile`?

</div>
<div class="flashcard-back">

**R:** b) El primero que exista de: `~/.bash_profile`, `~/.bash_login`, `~/.profile`. En un shell de login, bash lee primero `/etc/profile` (configuracion global) y luego busca el primero que exista de estos tres archivos personales, en este orden: `~/.bash_profile`, `~/.bash_login`, `~/.profile`. Solo lee el primero que encuentre. `~/.bashrc` se lee en shells interactivos no-login (como abrir una terminal en el escritorio). Es comun que `~/.bash_profile` incluya un `source ~/.bashrc` para compartir configuracion entre ambos tipos de shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-010">
<div class="flashcard-front">

**P:** Que variable de entorno determina en que directorios busca el shell los comandos ejecutables?

</div>
<div class="flashcard-back">

**R:** c) `$PATH`. La variable `$PATH` contiene una lista de directorios separados por dos puntos (`:`) donde el shell busca los comandos ejecutables cuando se escribe un comando sin ruta completa. Por ejemplo, `PATH=/usr/local/bin:/usr/bin:/bin`. El shell busca en cada directorio de izquierda a derecha y ejecuta el primer ejecutable que encuentre. `$SHELL` indica el shell de login del usuario, `$HOME` es el directorio personal y `$TERM` es el tipo de terminal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-011">
<div class="flashcard-front">

**P:** Cual es la diferencia entre las comillas simples y las comillas dobles en bash?

</div>
<div class="flashcard-back">

**R:** c) Las comillas simples tratan todo como texto literal, las dobles permiten expansion de variables y sustitucion de comandos. Las comillas simples (`' '`) eliminan el significado especial de todos los caracteres dentro de ellas: `echo '$HOME'` muestra literalmente `$HOME`. Las comillas dobles (`" "`) permiten la expansion de variables (`$VAR`), la sustitucion de comandos (`$(comando)` y backticks), y la interpretacion de algunos caracteres especiales como `$`, `` ` ``, `\`, `!` y `"`. Ejemplo: `echo "$HOME"` muestra `/home/usuario`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-012">
<div class="flashcard-front">

**P:** Que comando muestra la version del kernel de Linux que se esta ejecutando?

</div>
<div class="flashcard-back">

**R:** b) `uname -r`. `uname -r` muestra especificamente la version del kernel (release), por ejemplo `5.15.0-52-generic`. `uname -a` muestra toda la informacion del sistema (kernel, hostname, version, arquitectura, etc.), no solo la version. `uname -n` muestra el nombre de red del equipo (hostname). `uname -o` muestra el nombre del sistema operativo (por ejemplo, `GNU/Linux`). Para el examen LPIC-1, `uname -r` es el mas preguntado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-013">
<div class="flashcard-front">

**P:** Un usuario define una variable con `EDITOR=vim`. Que debe hacer para que esta variable este disponible en los procesos hijos?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar `export EDITOR`. Las variables definidas sin `export` son variables locales del shell actual y no se heredan a los procesos hijos. Para convertir una variable local en variable de entorno (disponible para procesos hijos), se debe usar `export`. Se puede hacer en dos pasos (`EDITOR=vim` seguido de `export EDITOR`) o en un solo paso (`export EDITOR=vim`). El comando `set` sin argumentos lista todas las variables pero no exporta. Solo las variables exportadas aparecen en la salida de `env`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-014">
<div class="flashcard-front">

**P:** Que hace el comando `exec ls` en un shell?

</div>
<div class="flashcard-back">

**R:** b) Reemplaza el shell actual por el comando `ls`; al terminar `ls`, el terminal se cierra. `exec` reemplaza el proceso del shell actual con el comando especificado. El shell deja de existir y es sustituido por el nuevo proceso. No se crea un proceso hijo. Cuando `ls` termina, como el shell ya no existe, el terminal se cierra. `exec` tambien se usa para redirigir descriptores de archivo para todo el script, por ejemplo: `exec > salida.log` redirige toda la salida del shell a un archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-015">
<div class="flashcard-front">

**P:** Que comando permite cambiar el shell de login de un usuario de forma permanente?

</div>
<div class="flashcard-back">

**R:** c) `chsh -s /bin/zsh`. `chsh -s /bin/zsh` cambia el shell de login del usuario de forma permanente, modificando la entrada correspondiente en `/etc/passwd`. El nuevo shell debe estar listado en `/etc/shells` para ser aceptado. Simplemente escribir `bash` o `zsh` inicia una nueva instancia temporal del shell. Cambiar la variable `$SHELL` con `export` solo modifica la variable en la sesion actual sin efecto permanente. El archivo `/etc/shells` contiene la lista de shells validos del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-016">
<div class="flashcard-front">

**P:** Que variable de entorno controla que comandos se guardan en el historial de bash, permitiendo ignorar duplicados?

</div>
<div class="flashcard-back">

**R:** c) `HISTCONTROL`. `HISTCONTROL` controla que comandos se almacenan en el historial. Sus valores posibles son: `ignoredups` (ignora duplicados consecutivos), `ignorespace` (ignora comandos que empiezan con espacio), `ignoreboth` (combina los dos anteriores) y `erasedups` (elimina todas las entradas anteriores duplicadas). `HISTFILE` define la ruta del archivo de historial (por defecto `~/.bash_history`). `HISTSIZE` es el numero maximo de comandos en memoria y `HISTFILESIZE` el numero maximo de lineas en el archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `hash -r` en bash?

</div>
<div class="flashcard-back">

**R:** c) Limpia completamente la tabla hash interna del shell. `hash -r` resetea (limpia) la tabla hash interna de bash. Esta tabla almacena las rutas de los comandos externos ya ejecutados para evitar buscar en todos los directorios de `$PATH` cada vez. Si se instala una nueva version de un programa en una ubicacion diferente, el shell podria seguir usando la ruta antigua. `hash -r` fuerza una nueva busqueda la proxima vez que se ejecute el comando. `hash` sin opciones muestra la tabla actual y `hash -t comando` muestra la ruta almacenada de un comando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-018">
<div class="flashcard-front">

**P:** Que resultado produce el comando `echo {A,B}{1,2}`?

</div>
<div class="flashcard-back">

**R:** c) `A1 A2 B1 B2`. La expansion de llaves en bash genera todas las combinaciones posibles de los elementos. `{A,B}{1,2}` produce las combinaciones: A con 1, A con 2, B con 1 y B con 2, resultando en `A1 A2 B1 B2`. La expansion de llaves no depende de la existencia de archivos (a diferencia del globbing) y se evalua antes que otras expansiones. Es muy util para crear multiples archivos o directorios con un solo comando, por ejemplo: `mkdir -p proyecto/{src,bin,doc}`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-019">
<div class="flashcard-front">

**P:** Que comando usarias para agregar el directorio `/opt/bin` al final de la variable PATH?

</div>
<div class="flashcard-back">

**R:** export PATH=$PATH:/opt/bin. Para agregar un directorio al PATH se concatena al valor existente usando `$PATH` seguido de `:` y el nuevo directorio. El `export` es necesario para que la variable actualizada este disponible en los procesos hijos. Al anadir al final, los comandos en `/opt/bin` solo se encontraran si no existen versiones en los directorios anteriores. Para dar prioridad al nuevo directorio, se anaden al inicio: `export PATH=/opt/bin:$PATH`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-020">
<div class="flashcard-front">

**P:** Que comando usarias para cambiar el shell actual temporalmente a zsh?

</div>
<div class="flashcard-back">

**R:** zsh. Para cambiar de shell temporalmente, basta con escribir el nombre del shell deseado (`zsh`, `bash`, `sh`, etc.). Esto inicia una nueva instancia del shell como proceso hijo del shell actual. Al ejecutar `exit` o pulsar `Ctrl+D`, se vuelve al shell anterior. Para cambiar el shell de login de forma permanente, se usa `chsh -s /bin/zsh`. La lista de shells disponibles se puede consultar en `/etc/shells`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-021">
<div class="flashcard-front">

**P:** Que comando muestra una descripcion breve de lo que hace el comando `passwd`? (equivalente a `man -f`) <input type="text" class="fill-blank" data-answer="whatis passwd" data-alt="man -f passwd" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** whatis passwd. `whatis` muestra una descripcion de una linea para un comando, exactamente igual que `man -f`. Por ejemplo, `whatis passwd` mostraria: `passwd (1) - update user's authentication tokens` y `passwd (5) - password file`. El comando complementario `apropos` (equivalente a `man -k`) busca una palabra clave en las descripciones de todas las paginas de manual. Ambos dependen de la base de datos de man, que se actualiza con `mandb`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-022">
<div class="flashcard-front">

**P:** Que comando muestra informacion de ayuda sobre el builtin `cd` de bash?

</div>
<div class="flashcard-back">

**R:** help cd. `help` es un comando builtin de bash que muestra informacion sobre los comandos internos del shell. Solo funciona con builtins como `cd`, `export`, `alias`, `set`, etc. `man cd` puede no existir en muchos sistemas porque `cd` no es un comando externo. `help` sin argumentos lista todos los builtins disponibles. `help -s cd` muestra solo la sintaxis (formato corto) y `help -d cd` muestra solo una descripcion breve.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-023">
<div class="flashcard-front">

**P:** Que comando usarias para eliminar el alias `ll` previamente definido?

</div>
<div class="flashcard-back">

**R:** unalias ll. `unalias ll` elimina el alias `ll` de la sesion actual. Para eliminar todos los alias de la sesion, se usa `unalias -a`. Los alias eliminados con `unalias` solo se eliminan de la sesion actual; si estan definidos en `~/.bashrc`, volveran a cargarse al iniciar un nuevo shell. Para eliminar un alias permanentemente, se debe editar el archivo donde fue definido (`~/.bashrc` o `~/.bash_profile`). Se pueden evadir alias temporalmente con `\comando`, `command comando` o usando la ruta completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-024">
<div class="flashcard-front">

**P:** Tip de examen: `apropos` = `man -k` (buscar). `whatis` = `man -f` (descripcion corta).

</div>
<div class="flashcard-back">

**R:** `apropos` = `man -k` (buscar). `whatis` = `man -f` (descripcion corta).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-025">
<div class="flashcard-front">

**P:** Tip de examen: `man` y `info` son para comandos externos. `help` es exclusivo para builtins de ...

</div>
<div class="flashcard-back">

**R:** `man` y `info` son para comandos externos. `help` es exclusivo para builtins de bash. Por ejemplo, `man cd` puede no existir, pero `help cd` siempre funciona en bash.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `uname -r` para version del kernel y `uname -a` para toda la informacion son los...

</div>
<div class="flashcard-back">

**R:** `uname -r` para version del kernel y `uname -a` para toda la informacion son los mas preguntados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Es muy comun que `~/.bash_profile` contenga un `source ~/.bashrc` para reutiliza...

</div>
<div class="flashcard-back">

**R:** Es muy comun que `~/.bash_profile` contenga un `source ~/.bashrc` para reutilizar la configuracion. Asi, los alias y funciones definidos en `.bashrc` tambien estan disponibles en shells de login.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `hash` es un builtin de bash. La tabla hash se limpia automaticamente al iniciar...

</div>
<div class="flashcard-back">

**R:** `hash` es un builtin de bash. La tabla hash se limpia automaticamente al iniciar un nuevo shell. Se usa `hash -r` para resetear la tabla cuando se han movido o instalado nuevos ejecutables.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `sh`?

</div>
<div class="flashcard-back">

**R:** Bourne Shell, el shell original de Unix. Mas limitado que bash

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `zsh`?

</div>
<div class="flashcard-back">

**R:** Z Shell, muy popular, con autocompletado avanzado y temas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `csh`?

</div>
<div class="flashcard-back">

**R:** C Shell, con sintaxis similar al lenguaje C

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `ksh`?

</div>
<div class="flashcard-back">

**R:** Korn Shell, combina caracteristicas de sh y csh

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `dash`?

</div>
<div class="flashcard-back">

**R:** Debian Almquist Shell, ligero y rapido, usado para scripts del sistema

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-034">
<div class="flashcard-front">

**P:** Un administrador necesita consultar la documentacion completa del comando `coreutils` con navegacion por nodos e hiperenlaces. Las paginas `man` son demasiado breves. Que comando debe usar y como se navega entre nodos?

</div>
<div class="flashcard-back">

**R:** Debe usar `info coreutils`. El sistema **info** (GNU Texinfo) proporciona documentacion mas detallada que `man`, organizada en **nodos** con hiperenlaces. Navegacion clave: `n` (siguiente nodo), `p` (nodo anterior), `u` (subir un nivel), `Enter` (seguir enlace), `l` (volver al nodo anterior visitado), `q` (salir). A diferencia de `man`, que muestra una sola pagina lineal, `info` estructura la documentacion como un arbol de nodos interconectados. Si no existe una pagina info para un comando, `info` muestra la pagina man como alternativa. En el examen LPIC-1, preguntan la diferencia entre `man`, `info` y `help`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-035">
<div class="flashcard-front">

**P:** Un usuario quiere crear un alias permanente llamado `ll` que ejecute `ls -la --color=auto` y que funcione en todas las sesiones de bash. Donde debe definirlo y como evitarlo temporalmente cuando necesite ejecutar el comando original?

</div>
<div class="flashcard-back">

**R:** Debe definir `alias ll='ls -la --color=auto'` en el archivo `~/.bashrc` (para shells interactivos no-login) o en `~/.bash_profile` (para shells de login, que normalmente hace `source ~/.bashrc`). Para **evitar el alias temporalmente** y ejecutar el comando original, hay tres formas: `\ls` (barra invertida), `command ls` o usar la ruta completa `/usr/bin/ls`. El comando `alias` sin argumentos muestra todos los alias activos. `alias nombre='comando'` crea un alias en la sesion actual. `unalias nombre` lo elimina de la sesion. Los alias definidos solo en la terminal se pierden al cerrar la sesion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-036">
<div class="flashcard-front">

**P:** Que resultado produce el comando `echo file{1..5}.txt` y en que se diferencia de `echo file{1,3,5}.txt`? <input type="text" class="fill-blank" data-answer="file1.txt file2.txt file3.txt file4.txt file5.txt" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `echo file{1..5}.txt` produce `file1.txt file2.txt file3.txt file4.txt file5.txt` (secuencia numerica del 1 al 5). `echo file{1,3,5}.txt` produce `file1.txt file3.txt file5.txt` (solo los elementos listados). La expansion de llaves tiene dos formas: **listas** `{a,b,c}` y **rangos** `{1..10}` o `{a..z}`. Tambien admite incremento: `{0..20..5}` genera `0 5 10 15 20`. La clave para el examen: la expansion de llaves **no depende de archivos existentes** (genera cadenas puras), mientras que el globbing (`*`, `?`, `[]`) solo coincide con archivos que existan en el directorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-037">
<div class="flashcard-front">

**P:** En un directorio existen los archivos: `nota1.txt`, `nota2.txt`, `nota10.txt`, `notas.txt`, `imagen.png`. Que archivos devuelve el patron `nota?.txt` y por que `nota10.txt` no coincide?

</div>
<div class="flashcard-back">

**R:** `nota?.txt` devuelve solo `nota1.txt` y `nota2.txt`. El comodin `?` coincide con **exactamente un caracter**, por lo que `nota10.txt` no coincide (tiene dos caracteres `10` donde `?` espera uno solo). Comodines de globbing: `*` coincide con cero o mas caracteres (`nota*.txt` devolveria los cuatro .txt). `?` coincide con exactamente un caracter. `[abc]` coincide con un caracter de la lista. `[0-9]` coincide con un digito. `[!a-z]` o `[^a-z]` coincide con cualquier caracter que **no** este en el rango. A diferencia de la expansion de llaves, el globbing **solo devuelve archivos que existan** en el sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-038">
<div class="flashcard-front">

**P:** Un script de bash necesita redirigir **toda** su salida estandar a un archivo `salida.log` sin modificar cada comando individualmente. Ademas, al final del script se quiere lanzar `/usr/bin/app` sin dejar el shell en memoria. Que dos usos de `exec` resuelven estas situaciones?

</div>
<div class="flashcard-back">

**R:** **Uso 1 - Redireccion global:** `exec > salida.log` redirige toda la salida estandar (stdout) del shell al archivo para el resto del script. Se puede combinar: `exec > salida.log 2>&1` para redirigir tambien stderr. No reemplaza el shell, solo modifica los descriptores de archivo. **Uso 2 - Reemplazo del proceso:** `exec /usr/bin/app` reemplaza el shell actual por `/usr/bin/app`. El shell deja de existir, no se crea proceso hijo y al terminar la app el terminal se cierra. Esto ahorra memoria porque no queda un shell padre esperando. En el examen preguntan ambos usos de `exec`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-039">
<div class="flashcard-front">

**P:** Escribe el comando para ver informacion detallada del kernel incluyendo arquitectura, nombre del host y version del sistema operativo, todo en una sola linea. <input type="text" class="fill-blank" data-answer="uname -a" data-alt="uname --all" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `uname -a` (equivalente a `uname --all`). Muestra toda la informacion del sistema en una linea: nombre del kernel, hostname, version del kernel, fecha de compilacion, arquitectura del procesador y sistema operativo. Opciones individuales mas importantes: `-s` nombre del kernel (Linux), `-n` nombre del host, `-r` version del kernel (ej: `5.15.0-52-generic`), `-m` arquitectura del hardware (ej: `x86_64`), `-o` sistema operativo (ej: `GNU/Linux`). Para el examen: `uname -r` es el mas preguntado (version del kernel) y `uname -m` para la arquitectura.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-040">
<div class="flashcard-front">

**P:** Un administrador instala una nueva version de `python3` en `/usr/local/bin/python3`, pero al ejecutar `python3` el shell sigue usando la version antigua en `/usr/bin/python3`. Que esta ocurriendo y como se soluciona? <input type="text" class="fill-blank" data-answer="hash -r" data-alt="hash -d python3" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** El shell bash mantiene una **tabla hash interna** que cachea las rutas de los comandos externos ya ejecutados. Como `python3` ya fue usado, bash recuerda su ruta antigua (`/usr/bin/python3`) y no vuelve a buscar en `$PATH`. Solucion: `hash -r` (limpia toda la tabla hash) o `hash -d python3` (elimina solo la entrada de python3). Comandos utiles: `hash` sin opciones muestra la tabla actual con el numero de veces que se uso cada comando. `hash -t python3` muestra la ruta almacenada. La tabla hash se limpia automaticamente al iniciar un nuevo shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="103.1">
</div>

<div class="flashcard" data-id="103.1-fc-041">
<div class="flashcard-front">

**P:** TRAMPAS DEL EXAMEN 103.1: Un usuario ejecuta `echo ~root` y `echo '~root'`. Obtiene resultados diferentes. Ademas, confunde `source script.sh` con `./script.sh`. Explica ambas trampas.

</div>
<div class="flashcard-back">

**R:** **Trampa 1 - Expansion de tilde:** `echo ~root` expande a `/root` (directorio home del usuario root), pero `echo '~root'` muestra literalmente `~root` porque las comillas simples impiden toda expansion. Las comillas dobles tambien evitan la expansion de `~`. **Trampa 2 - source vs ejecucion:** `source script.sh` (o `. script.sh`) ejecuta el script **en el shell actual** (las variables y cambios de directorio persisten). `./script.sh` ejecuta el script en un **subshell** (los cambios no afectan al shell padre). Otras trampas frecuentes: confundir `env` (solo variables exportadas) con `set` (todas las variables); confundir `type` (identifica builtins) con `which` (solo busca en PATH); olvidar que `&&` depende del exit code 0 mientras `;` ejecuta siempre.

</div>
</div>

---

