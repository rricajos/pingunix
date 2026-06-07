---
title: "105.1 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "105.1"
---

# Flashcards: 105.1 - Entorno Del Shell

> 39 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-001">
<div class="flashcard-front">

**P:** Un usuario inicia sesion en el sistema mediante SSH. Tiene los archivos `~/.bash_profile`, `~/.bash_login` y `~/.profile` en su directorio home. Cual de estos archivos sera ejecutado por bash?

</div>
<div class="flashcard-back">

**R:** c) Solo `~/.bash_profile`, ya que bash ejecuta unicamente el primero que encuentra en el orden de busqueda. Bash busca los archivos de inicio del usuario en un orden especifico: `~/.bash_profile` --> `~/.bash_login` --> `~/.profile`, y ejecuta **unicamente el primero** que encuentre. Como `~/.bash_profile` existe, los otros dos son completamente ignorados. Ademas, previamente se habra ejecutado `/etc/profile` (y los scripts en `/etc/profile.d/`) por ser un login shell (conexion SSH).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre ejecutar `source ~/.bashrc` y ejecutar `bash ~/.bashrc`?

</div>
<div class="flashcard-back">

**R:** b) `source` ejecuta el archivo en el shell actual, mientras que `bash` lo ejecuta en un subshell. `source ~/.bashrc` (equivalente a `. ~/.bashrc`) ejecuta el archivo en el **shell actual**, por lo que todas las variables, alias y funciones definidas quedan disponibles en la sesion. `bash ~/.bashrc` ejecuta el archivo en un **subshell** (proceso hijo), donde las variables y alias se crean pero se pierden al terminar el subshell. Por eso, para recargar la configuracion del shell se usa siempre `source`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-003">
<div class="flashcard-front">

**P:** Un administrador quiere que todos los nuevos usuarios creados en el sistema tengan un alias `ll='ls -la'` disponible automaticamente. Que archivo debe modificar?

</div>
<div class="flashcard-back">

**R:** c) `/etc/skel/.bashrc`. El directorio `/etc/skel/` contiene los archivos plantilla que se copian al directorio home de cada nuevo usuario cuando se crea con `useradd -m`. Al agregar `alias ll='ls -la'` en `/etc/skel/.bashrc`, todos los usuarios creados a partir de ese momento tendran el alias. `/etc/bash.bashrc` afectaria a todos los usuarios existentes de forma inmediata (no solo a los nuevos). `/etc/profile` se ejecuta solo en login shells. `/etc/environment` no es un script y no soporta alias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-004">
<div class="flashcard-front">

**P:** Que hace el comando `set -o noclobber` en un shell bash?

</div>
<div class="flashcard-back">

**R:** b) Impide que se sobrescriban archivos existentes con la redireccion `>`, requiriendo usar `>|` para forzar. La opcion `noclobber` protege archivos existentes de ser sobrescritos accidentalmente con el operador de redireccion `>`. Si el archivo ya existe, el shell mostrara un error. Para forzar la sobrescritura cuando `noclobber` esta activo, se usa `>|`. Se desactiva con `set +o noclobber`. La opcion que trata variables no definidas como error es `nounset` (`set -u`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-005">
<div class="flashcard-front">

**P:** Un usuario abre una terminal grafica en su escritorio GNOME. Que tipo de shell se inicia y que archivos de configuracion se ejecutan?

</div>
<div class="flashcard-back">

**R:** b) Non-login shell interactivo: `/etc/bash.bashrc` y `~/.bashrc`. Al abrir una terminal grafica en un entorno de escritorio se inicia un **non-login shell** (shell interactivo no-login), ya que el usuario ya ha iniciado sesion previamente en el entorno grafico. Los archivos que se ejecutan son `/etc/bash.bashrc` (configuracion global para shells interactivos, en Debian/Ubuntu) y `~/.bashrc` (configuracion del usuario). Los archivos como `/etc/profile` y `~/.bash_profile` solo se ejecutan en login shells (SSH, consola de texto, `su -`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-006">
<div class="flashcard-front">

**P:** Cual de las siguientes afirmaciones sobre `/etc/environment` es correcta?

</div>
<div class="flashcard-back">

**R:** b) Es un archivo simple de pares `VARIABLE=valor` leido por PAM, que no soporta expansiones de variables. `/etc/environment` NO es un script de shell. Es un archivo simple con formato `VARIABLE=valor` que es leido por el modulo PAM (`pam_env`), no por bash directamente. No soporta expansiones de variables (por ejemplo, `$HOME` no funcionaria), ni comandos, ni logica de programacion. Se aplica a todas las sesiones, incluyendo las no interactivas, y es especifico de sistemas con PAM (principalmente Debian/Ubuntu).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-007">
<div class="flashcard-front">

**P:** Que comando ejecuta un programa con un entorno completamente vacio, sin ninguna variable de entorno heredada?

</div>
<div class="flashcard-back">

**R:** b) `env -i programa`. El comando `env -i` ejecuta el programa especificado con un entorno completamente vacio (sin ninguna variable de entorno heredada del shell actual). Es util para depuracion y pruebas, para verificar que un script funciona sin depender de variables del entorno del usuario. Se pueden especificar solo las variables necesarias: `env -i PATH=/usr/bin HOME=/tmp programa`. `unset -a` eliminaria las variables del shell actual, no crea un entorno limpio para un proceso hijo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-008">
<div class="flashcard-front">

**P:** Un usuario quiere crear una funcion llamada `mkcd` que cree un directorio y entre en el. Cual es la sintaxis correcta y donde debe colocarla para que este disponible en cada sesion?

</div>
<div class="flashcard-back">

**R:** b) Definirla en `~/.bashrc` con la sintaxis `mkcd() { mkdir -p "$1" && cd "$1"; }`. La funcion debe colocarse en `~/.bashrc` para que este disponible en cada nueva sesion de shell interactivo. La sintaxis usa `"$1"` entre comillas para manejar nombres con espacios, `-p` para crear directorios padre si es necesario, y `&&` para que `cd` solo se ejecute si `mkdir` tiene exito. `/etc/environment` no soporta funciones. `~/.bash_logout` se ejecuta al cerrar sesion, no al iniciarla. `/etc/profile` funcionaria solo para login shells.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-009">
<div class="flashcard-front">

**P:** Que muestra el comando `set` sin argumentos en comparacion con el comando `env` sin argumentos?

</div>
<div class="flashcard-back">

**R:** b) `set` muestra todas las variables (locales, de entorno y funciones); `env` muestra solo las variables de entorno. `set` sin argumentos lista todas las variables del shell, incluyendo las variables locales (no exportadas), las variables de entorno (exportadas) y las funciones definidas. `env` sin argumentos lista unicamente las variables de entorno, es decir, las que han sido exportadas y estan disponibles para procesos hijos. Esta distincion es fundamental para el examen LPIC-1. `printenv` es similar a `env` en este comportamiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-010">
<div class="flashcard-front">

**P:** Un usuario tiene la siguiente configuracion en su `~/.bash_profile`: ```bash if [ -f ~/.bashrc ]; then . ~/.bashrc fi ``` Cual es el proposito de este bloque de codigo?

</div>
<div class="flashcard-back">

**R:** c) Asegurar que las configuraciones de `~/.bashrc` se apliquen tambien en login shells. Los login shells (SSH, consola de texto) ejecutan `~/.bash_profile` pero NO ejecutan `~/.bashrc`. Los non-login shells (terminal grafica) ejecutan `~/.bashrc` pero NO `~/.bash_profile`. Este bloque hace que el login shell tambien cargue `~/.bashrc`, unificando la configuracion en ambos tipos de sesion. Asi, los alias, funciones y variables definidos en `~/.bashrc` estaran disponibles tanto al conectarse por SSH como al abrir una terminal grafica. El punto (`.`) es equivalente a `source`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-011">
<div class="flashcard-front">

**P:** Que archivo se ejecuta al cerrar un login shell de bash?

</div>
<div class="flashcard-back">

**R:** b) `~/.bash_logout`. El archivo `~/.bash_logout` se ejecuta automaticamente cuando se cierra un login shell de bash. Es util para realizar tareas de limpieza al finalizar la sesion, como borrar archivos temporales, limpiar el historial, mostrar un mensaje de despedida o registrar la hora de desconexion. Solo se ejecuta en login shells (SSH, consola de texto, `su -`), no al cerrar un terminal grafico (non-login shell). En algunos sistemas tambien existe `/etc/bash.bash_logout` como equivalente global.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `su usuario` y `su - usuario`?

</div>
<div class="flashcard-back">

**R:** b) `su usuario` inicia un non-login shell (sin cargar el perfil) y `su - usuario` inicia un login shell (cargando el perfil completo). `su usuario` (sin guion) cambia al usuario indicado pero mantiene el entorno actual (variables, PATH, directorio de trabajo). No ejecuta los archivos de inicio del login shell. `su - usuario` (con guion, equivalente a `su -l usuario`) simula un login completo: ejecuta `/etc/profile`, luego `~/.bash_profile` (o `~/.bash_login` o `~/.profile`), cambia al directorio home del usuario y establece un entorno limpio. Esto es importante porque con `su` sin guion, el PATH y otras variables podrian no corresponder al usuario destino.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-013">
<div class="flashcard-front">

**P:** Que hace el comando `export -n MI_VARIABLE`?

</div>
<div class="flashcard-back">

**R:** b) Des-exporta la variable, convirtiendola de variable de entorno a variable local del shell. El comando `export -n MI_VARIABLE` des-exporta la variable, es decir, la quita de la lista de variables de entorno pero la mantiene como variable local del shell. Los procesos hijos ya no la heredaran, pero seguira disponible en el shell actual. Es diferente de `unset MI_VARIABLE`, que elimina la variable completamente (tanto del entorno como del shell local). `export` sin argumentos muestra todas las variables exportadas. `export -n` es util cuando se quiere dejar de compartir una variable con procesos hijos sin perder su valor en el shell actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-014">
<div class="flashcard-front">

**P:** Que secuencia de escape en PS1 muestra `#` si el usuario es root y `$` si es un usuario normal?

</div>
<div class="flashcard-back">

**R:** b) `\$`. La secuencia `\$` en la variable PS1 muestra el caracter `#` si el UID del usuario es 0 (root) y `$` para cualquier otro usuario. Es una forma estandar de indicar en el prompt si se esta trabajando como root o como usuario normal. Otras secuencias comunes son: `\u` (nombre de usuario), `\h` (nombre del host hasta el primer punto), `\w` (directorio de trabajo completo), `\W` (solo el nombre del directorio actual), `\d` (fecha) y `\t` (hora en formato 24h). Estas secuencias se combinan para personalizar el prompt.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-015">
<div class="flashcard-front">

**P:** Que diferencia hay entre `HISTSIZE` y `HISTFILESIZE`?

</div>
<div class="flashcard-back">

**R:** b) `HISTSIZE` es el numero maximo de comandos almacenados en memoria durante la sesion; `HISTFILESIZE` es el tamano maximo del archivo de historial. `HISTSIZE` controla cuantos comandos se almacenan en la lista del historial en memoria durante la sesion actual del shell. `HISTFILESIZE` controla cuantas lineas se almacenan en el archivo de historial (por defecto `~/.bash_history`). Cuando se cierra el shell, los comandos en memoria se escriben al archivo, y este se trunca al tamano definido por `HISTFILESIZE`. `HISTFILE` define la ubicacion del archivo de historial. Estas variables se configuran normalmente en `~/.bashrc` para que sean persistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-016">
<div class="flashcard-front">

**P:** Un usuario define una variable `COLOR="azul"` en su shell. Si ejecuta un script `./mi_script.sh` que hace `echo $COLOR`, que ocurre?

</div>
<div class="flashcard-back">

**R:** b) El script muestra una linea vacia porque las variables locales no se heredan a procesos hijos. Las variables locales del shell (asignadas con `VARIABLE=valor` sin `export`) solo existen en el shell actual y no se heredan por procesos hijos, incluyendo scripts ejecutados con `./script.sh` o `bash script.sh`. Para que el script pueda acceder a la variable, es necesario exportarla con `export COLOR="azul"`, convirtiendola en variable de entorno. La excepcion es usar `source mi_script.sh` o `. mi_script.sh`, que ejecutan el script en el shell actual (sin crear un subshell), por lo que las variables locales si estan disponibles. La opcion `d` tambien es parcialmente correcta pero la respuesta mas precisa es `b`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-017">
<div class="flashcard-front">

**P:** Que opcion del shell se activa con `set -u` y que efecto tiene?

</div>
<div class="flashcard-back">

**R:** b) Activa `nounset`, que trata las variables no definidas como error en lugar de expandirlas como cadenas vacias. `set -u` es equivalente a `set -o nounset`. Cuando esta activa, si se intenta usar una variable que no ha sido definida (por ejemplo, `echo $VARIABLE_INEXISTENTE`), el shell muestra un error "unbound variable" y, en un script, termina la ejecucion. Sin esta opcion, las variables no definidas se expanden silenciosamente como cadenas vacias, lo que puede causar errores dificiles de detectar. Otras opciones abreviadas importantes: `set -e` (`errexit`), `set -x` (`xtrace`) y `set -n` (`noexec`). Se desactivan con `+`: `set +u`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-018">
<div class="flashcard-front">

**P:** Que directorio contiene scripts `.sh` que `/etc/profile` ejecuta automaticamente al iniciar un login shell?

</div>
<div class="flashcard-back">

**R:** b) `/etc/profile.d/`. El directorio `/etc/profile.d/` contiene scripts con extension `.sh` que son ejecutados automaticamente por `/etc/profile` cuando se inicia un login shell. Es la forma modular y recomendada de agregar configuraciones globales al entorno del shell, ya que permite a paquetes y administradores anadir archivos individuales sin modificar directamente `/etc/profile`. Cada script se ejecuta en el contexto del shell actual (como si se usara `source`). Esto facilita la gestion de configuraciones, ya que cada aplicacion o configuracion puede tener su propio archivo independiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-019">
<div class="flashcard-front">

**P:** Un usuario quiere ejecutar el comando original `ls` ignorando cualquier alias definido. Cuales son dos formas validas de hacerlo?

</div>
<div class="flashcard-back">

**R:** a) `\ls` o `command ls`. Para ejecutar el comando original ignorando un alias, se puede usar una barra invertida antes del comando (`\ls`) o el builtin `command` (`command ls`). La barra invertida evita la expansion de alias. `command` ejecuta el comando directamente sin considerar alias ni funciones del shell. `unalias ls` eliminaria el alias permanentemente de la sesion, que no es lo mismo que ejecutar el comando original una vez. `exec ls` reemplazaria el shell actual con `ls`, lo cual no es lo deseado. `builtin` solo funciona con comandos integrados del shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-020">
<div class="flashcard-front">

**P:** Como se puede verificar si el shell actual es un login shell o un non-login shell?

</div>
<div class="flashcard-back">

**R:** b) Ejecutando `echo $0` (si empieza con `-` es login shell) o `shopt login_shell` (on = login). Hay dos formas principales de identificar el tipo de shell: `echo $0` muestra el nombre del shell, y si empieza con un guion (`-bash`), es un login shell. `shopt login_shell` muestra `on` si es un login shell y `off` si es un non-login shell. `$SHELL` muestra el shell por defecto del usuario (de `/etc/passwd`), no el tipo de sesion actual. Saber el tipo de shell es importante para entender que archivos de configuracion se han ejecutado y cuales no.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para exportar una variable llamada `JAVA_HOME` con el valor `/usr/lib/jvm/java-17`. <input type="text" class="fill-blank" data-answer="export JAVA_HOME=/usr/lib/jvm/java-17" data-alt="export JAVA_HOME='/usr/lib/jvm/java-17',export JAVA_HOME=\"/usr/lib/jvm/java-17\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** export JAVA_HOME=/usr/lib/jvm/java-17. El comando `export` convierte una variable en variable de entorno, haciendola disponible para todos los procesos hijos del shell. La sintaxis `export VARIABLE=valor` asigna y exporta en un solo paso. Tambien se puede hacer en dos pasos: `JAVA_HOME=/usr/lib/jvm/java-17` seguido de `export JAVA_HOME`. Para que este cambio sea permanente, la linea debe anadirse a `~/.bashrc` o `~/.profile`. Sin `export`, la variable seria local y no estaria disponible para scripts o programas ejecutados desde ese shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para recargar la configuracion de `~/.bashrc` en el shell actual sin cerrar y reabrir la terminal. <input type="text" class="fill-blank" data-answer="source ~/.bashrc" data-alt=". ~/.bashrc" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** source ~/.bashrc. El comando `source ~/.bashrc` (equivalente a `. ~/.bashrc`) ejecuta el archivo en el contexto del shell actual, sin crear un subshell. Esto permite que todos los cambios realizados en `~/.bashrc` (nuevos alias, funciones, variables, configuraciones del PATH, etc.) se apliquen inmediatamente en la sesion actual. Si se ejecutara `bash ~/.bashrc`, los cambios se aplicarian en un subshell que terminaria inmediatamente, sin efecto en el shell actual. `source` y `.` (dot command) son equivalentes y ambos son fundamentales para la administracion del shell.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar un alias llamado `ll` de la sesion actual del shell. <input type="text" class="fill-blank" data-answer="unalias ll" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** unalias ll. El comando `unalias ll` elimina el alias `ll` de la sesion actual del shell. Esta eliminacion es temporal: si el alias esta definido en `~/.bashrc`, volvera a estar disponible al abrir una nueva sesion o al recargar la configuracion. Para eliminarlo permanentemente, se debe quitar la definicion del archivo `~/.bashrc`. El comando `unalias -a` eliminaria todos los alias definidos en la sesion actual. Para ver los alias existentes, se usa `alias` sin argumentos o `alias ll` para ver uno especifico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para ver unicamente las variables de entorno (no las locales ni las funciones). <input type="text" class="fill-blank" data-answer="env" data-alt="printenv" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** env. El comando `env` sin argumentos muestra unicamente las variables de entorno, es decir, las que han sido exportadas y estan disponibles para procesos hijos. `printenv` es equivalente y produce el mismo resultado. A diferencia de `set` (que muestra todas las variables locales, de entorno y funciones definidas en el shell), `env` filtra y muestra solo las variables exportadas. `printenv VARIABLE` tiene la ventaja adicional de poder mostrar el valor de una variable especifica. Esta distincion entre `set` y `env` es un punto clave para el examen LPIC-1.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para agregar el directorio `$HOME/bin` al final del PATH actual. <input type="text" class="fill-blank" data-answer="export PATH=$PATH:$HOME/bin" data-alt="export PATH=\"$PATH:$HOME/bin\",PATH=$PATH:$HOME/bin && export PATH" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** export PATH=$PATH:$HOME/bin. El comando `export PATH=$PATH:$HOME/bin` anade `$HOME/bin` al final del PATH existente, separado por `:`. Los directorios listados primero en el PATH tienen prioridad, por lo que al anadirlo al final, los comandos del sistema se encontraran antes que los del directorio personal. Para anadirlo al inicio (con prioridad): `export PATH=$HOME/bin:$PATH`. Para que el cambio sea permanente, se debe agregar la linea a `~/.bashrc` o `~/.profile`. Es importante incluir `$PATH` para no perder los directorios existentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/profile`?

</div>
<div class="flashcard-back">

**R:** Ejecutado por login shells. Configura variables de entorno globales, umask, PATH

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/bash.bashrc`?

</div>
<div class="flashcard-back">

**R:** Ejecutado por non-login shells interactivos (en Debian/Ubuntu). Configuraciones globales para shells interactivos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/environment`?

</div>
<div class="flashcard-back">

**R:** Archivo simple de asignaciones `VARIABLE=valor` (no es un script). Leido por PAM, no por bash directamente

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `~/.bash_profile`?

</div>
<div class="flashcard-back">

**R:** Ejecutado por login shells. Primer archivo buscado del usuario

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-030">
<div class="flashcard-front">

**P:** Un administrador necesita ejecutar el script `/opt/app/start.sh` sin heredar ninguna variable de entorno del shell actual, pero proporcionando solo `PATH=/usr/bin` y `HOME=/tmp`. Escribe el comando completo. <input type="text" class="fill-blank" data-answer="env -i PATH=/usr/bin HOME=/tmp /opt/app/start.sh" data-alt="env -i HOME=/tmp PATH=/usr/bin /opt/app/start.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `env -i PATH=/usr/bin HOME=/tmp /opt/app/start.sh`. El flag `-i` (o `--ignore-environment`) de `env` ejecuta el comando con un entorno completamente vacio, sin ninguna variable heredada del shell padre. Despues de `-i` se pueden especificar las variables necesarias en formato `VAR=valor` antes del comando. Esto es util para depuracion (verificar que un script no depende de variables del usuario), seguridad (evitar inyeccion de variables) y testing. Sin `-i`, `env VAR=valor comando` anade o modifica variables pero mantiene las demas del entorno. Para verificar el entorno vacio: `env -i env` muestra que no hay variables definidas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-031">
<div class="flashcard-front">

**P:** Un administrador ejecuta `set -o` en su shell y ve que la opcion `noclobber` esta en `off`. Luego ejecuta `set -o noclobber`. Que ocurre cuando intenta ejecutar `echo "datos" > archivo_existente.txt` y como puede forzar la sobrescritura?

</div>
<div class="flashcard-back">

**R:** El shell mostrara un error similar a `cannot overwrite existing file` y no sobrescribira el archivo. Para forzar la sobrescritura con `noclobber` activo, se usa el operador `>|`: `echo "datos" >| archivo_existente.txt`. La logica de `set` es contra-intuitiva en el examen: `set -o opcion` **activa** la opcion (el guion significa "on"), mientras que `set +o opcion` la **desactiva** (el mas significa "off"). Para listar todas las opciones y su estado: `set -o` (formato legible) o `set +o` (formato reutilizable como comandos). Opciones clave para el examen: `noclobber` (protege archivos), `nounset`/`-u` (error en variables no definidas), `errexit`/`-e` (salir ante errores), `xtrace`/`-x` (depuracion).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-032">
<div class="flashcard-front">

**P:** Un usuario tiene `PATH=/usr/local/bin:/usr/bin:/bin` y quiere que los scripts de `$HOME/scripts` se encuentren **antes** que los comandos del sistema. Escribe el comando correcto. <input type="text" class="fill-blank" data-answer="export PATH=$HOME/scripts:$PATH" data-alt="export PATH=\"$HOME/scripts:$PATH\",PATH=$HOME/scripts:$PATH && export PATH" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `export PATH=$HOME/scripts:$PATH`. Para que un directorio tenga **prioridad** sobre los demas, se anade al **inicio** del PATH: `export PATH=$HOME/scripts:$PATH`. Si se anadiera al final (`export PATH=$PATH:$HOME/scripts`), los comandos del sistema se encontrarian primero. Puntos criticos para el examen: (1) siempre incluir `$PATH` en la asignacion para no perder los directorios existentes, (2) el separador es `:` (dos puntos), (3) el shell busca en orden de izquierda a derecha y usa el primer ejecutable encontrado, (4) para que el cambio sea permanente debe anadirse a `~/.bashrc` o `~/.profile`, (5) un PATH que incluya `.` (directorio actual) es un riesgo de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-033">
<div class="flashcard-front">

**P:** Un administrador quiere configurar su prompt para que muestre `[usuario@hostname directorio]$ ` (por ejemplo `[root@servidor /etc]# `). Escribe el valor correcto de PS1. <input type="text" class="fill-blank" data-answer="[\u@\h \W]\$ " data-alt="[\u@\h \W]\$,'[\u@\h \W]\$ '" placeholder="PS1=...">

</div>
<div class="flashcard-back">

**R:** `PS1='[\u@\h \W]\$ '`. Las secuencias de escape de PS1 son: `\u` = nombre de usuario, `\h` = hostname (hasta el primer punto), `\H` = hostname completo, `\w` = directorio de trabajo completo (ruta absoluta), `\W` = solo el nombre del directorio actual (sin la ruta), `\$` = muestra `#` si UID es 0 (root) o `$` para usuarios normales, `\d` = fecha, `\t` = hora 24h (HH:MM:SS), `\T` = hora 12h, `\n` = salto de linea, `\!` = numero del historial. Se recomienda usar comillas simples al asignar PS1 para evitar que las secuencias se expandan prematuramente. PS2 es el prompt de continuacion (por defecto `> `).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-034">
<div class="flashcard-front">

**P:** Un usuario define `alias rm='rm -i'` en su terminal. Que ocurre cuando ejecuta un script que contiene el comando `rm archivo.txt`? Se le pedira confirmacion?

</div>
<div class="flashcard-back">

**R:** **No**, no se le pedira confirmacion. Los alias definidos en el shell interactivo **no se heredan** a los scripts. Los scripts se ejecutan en un subshell no interactivo donde los alias no estan disponibles por defecto (bash no expande alias en shells no interactivos a menos que se active `shopt -s expand_aliases`). Para definir un alias: `alias nombre='comando'`. Para listar todos: `alias` sin argumentos. Para eliminar uno: `unalias nombre`. Para eliminar todos: `unalias -a`. Para ejecutar el comando original ignorando el alias: `\rm archivo.txt` o `command rm archivo.txt`. Los alias se definen en `~/.bashrc` para que sean persistentes entre sesiones. Los alias no aceptan argumentos posicionales (para eso se usan funciones).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-035">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre un alias y una funcion del shell? Da un ejemplo de algo que una funcion puede hacer pero un alias no.

</div>
<div class="flashcard-back">

**R:** La diferencia principal es que las **funciones aceptan argumentos posicionales** (`$1`, `$2`, etc.) y pueden contener logica compleja (condicionales, bucles, variables locales), mientras que los **alias solo realizan sustitucion de texto** simple. Ejemplo: un alias no puede recibir un argumento en medio del comando, pero una funcion si: `buscar() { find / -name "$1" -type f 2>/dev/null; }` permite ejecutar `buscar archivo.txt`. Las funciones se definen con `nombre() { comandos; }` o `function nombre { comandos; }`. Tienen precedencia sobre comandos externos pero no sobre builtins. Se pueden listar con `declare -f` (con codigo) o `declare -F` (solo nombres). Para eliminar una funcion: `unset -f nombre`. Las funciones se ejecutan en el shell actual (no en un subshell), por lo que pueden modificar variables y el directorio de trabajo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-036">
<div class="flashcard-front">

**P:** Un usuario define `export MI_VAR="hola"` dentro de `config.sh`. Luego ejecuta `./config.sh` y despues `echo $MI_VAR`. El resultado esta vacio. Que comando deberia haber usado en lugar de `./config.sh` para que la variable este disponible? <input type="text" class="fill-blank" data-answer="source config.sh" data-alt=". config.sh,source ./config.sh,. ./config.sh" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** `source config.sh` (o equivalentemente `. config.sh`). La diferencia clave: `./config.sh` ejecuta el script en un **subshell** (proceso hijo), por lo que las variables exportadas, alias y funciones definidas dentro del script se pierden al terminar el subshell. `source config.sh` (o `. config.sh`) ejecuta el script en el **shell actual**, por lo que todos los cambios persisten en la sesion. El comando `.` (dot) es el equivalente POSIX de `source` (que es un bashismo). Ambos requieren que el archivo exista y sea legible, pero **no necesitan permisos de ejecucion** (a diferencia de `./script.sh`). Caso de uso tipico: recargar `~/.bashrc` tras modificarlo con `source ~/.bashrc`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-037">
<div class="flashcard-front">

**P:** Un administrador ejecuta `useradd -m nuevousuario`. Que archivos se copian automaticamente al directorio `/home/nuevousuario/` y desde que directorio provienen?

</div>
<div class="flashcard-back">

**R:** Los archivos se copian desde `/etc/skel/` (skeleton directory). Tipicamente contiene archivos como `.bashrc`, `.bash_profile`, `.profile` y `.bash_logout`, que son las plantillas de configuracion del shell para nuevos usuarios. Todo archivo o directorio colocado en `/etc/skel/` sera copiado al home de cada nuevo usuario creado con `useradd -m` (el flag `-m` es necesario para crear el directorio home). El flag `-k` permite especificar un directorio skeleton alternativo: `useradd -m -k /etc/skel_custom nuevousuario`. Es importante notar que los cambios en `/etc/skel/` solo afectan a usuarios creados **despues** del cambio, no a los existentes. Los permisos de los archivos copiados se ajustan segun `umask`. Sin `-m`, el directorio home no se crea y los archivos de `/etc/skel/` no se copian.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-038">
<div class="flashcard-front">

**P:** Un administrador anade la linea `PATH=$PATH:/opt/custom/bin` al archivo `/etc/environment`. Funcionara como espera? Por que?

</div>
<div class="flashcard-back">

**R:** **No funcionara** como espera. `/etc/environment` **no es un script de shell** sino un archivo simple de pares `VARIABLE=valor` leido por el modulo PAM (`pam_env`). No soporta expansion de variables (`$PATH` se interpretara literalmente como el texto `$PATH`, no como su valor), ni comandos, ni comentarios con `#` en todas las implementaciones, ni logica condicional. La linea correcta seria especificar la ruta completa: `PATH=/usr/local/bin:/usr/bin:/bin:/opt/custom/bin`. Diferencias clave con otros archivos de configuracion: (1) se aplica a **todas** las sesiones (graficas, SSH, cron), no solo a shells interactivos, (2) es leido por PAM, no por bash, (3) no requiere `export`, (4) es especifico de sistemas con PAM (Debian/Ubuntu principalmente).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="105.1">
</div>

<div class="flashcard" data-id="105.1-fc-039">
<div class="flashcard-front">

**P:** En el examen LPIC-1, cual de estas afirmaciones es FALSA? (a) `~/.bash_profile` se ejecuta en login shells, (b) `~/.bashrc` se ejecuta automaticamente en login shells, (c) `/etc/profile` se ejecuta antes que `~/.bash_profile`, (d) `source` y `.` son equivalentes.

</div>
<div class="flashcard-back">

**R:** La afirmacion **FALSA es (b)**. `~/.bashrc` **NO se ejecuta automaticamente** en login shells. Solo se ejecuta en shells interactivos no-login (como terminales graficas). Si esta disponible en login shells es porque `~/.bash_profile` lo invoca explicitamente con `source ~/.bashrc` o `. ~/.bashrc`. Trampas frecuentes del examen LPIC-1 en este subtema: (1) Confundir el orden: bash solo ejecuta el **primero** de `~/.bash_profile`, `~/.bash_login`, `~/.profile` que encuentre. (2) Creer que `/etc/environment` es un script (no lo es, es leido por PAM). (3) Confundir `set` con `env`: `set` muestra todo (variables locales + entorno + funciones), `env` solo muestra variables de entorno. (4) Olvidar que `set -o` activa y `set +o` desactiva (logica invertida). (5) Pensar que los alias funcionan en scripts no interactivos.

</div>
</div>

---

