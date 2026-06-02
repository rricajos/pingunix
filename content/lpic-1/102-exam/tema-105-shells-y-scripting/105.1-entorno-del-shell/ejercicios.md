---
title: "105.1 - Ejercicios: Personalizar y usar el entorno del shell"
tags:
  - lpic-1
  - examen-102
  - tema-105
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "105"
subtema: "105.1"
---

# 105.1 - Ejercicios: Personalizar y usar el entorno del shell

### Pregunta 1

Un usuario inicia sesion en el sistema mediante SSH. Tiene los archivos `~/.bash_profile`, `~/.bash_login` y `~/.profile` en su directorio home. Cual de estos archivos sera ejecutado por bash?

a) Solo `~/.profile`, que es el archivo estandar POSIX
b) Los tres archivos se ejecutan en orden: `~/.bash_profile`, `~/.bash_login`, `~/.profile`
c) Solo `~/.bash_profile`, ya que bash ejecuta unicamente el primero que encuentra en el orden de busqueda
d) Solo `~/.bash_login`, porque tiene prioridad sobre los demas

<details><summary>Respuesta</summary>

**c) Solo `~/.bash_profile`, ya que bash ejecuta unicamente el primero que encuentra en el orden de busqueda**

Bash busca los archivos de inicio del usuario en un orden especifico: `~/.bash_profile` --> `~/.bash_login` --> `~/.profile`, y ejecuta **unicamente el primero** que encuentre. Como `~/.bash_profile` existe, los otros dos son completamente ignorados. Ademas, previamente se habra ejecutado `/etc/profile` (y los scripts en `/etc/profile.d/`) por ser un login shell (conexion SSH).

</details>

---

### Pregunta 2

Cual es la diferencia principal entre ejecutar `source ~/.bashrc` y ejecutar `bash ~/.bashrc`?

a) `source` ejecuta el archivo en un subshell, mientras que `bash` lo ejecuta en el shell actual
b) `source` ejecuta el archivo en el shell actual, mientras que `bash` lo ejecuta en un subshell
c) Ambos comandos son equivalentes y ejecutan el archivo en el shell actual
d) `source` solo funciona con archivos `.sh`, mientras que `bash` funciona con cualquier archivo

<details><summary>Respuesta</summary>

**b) `source` ejecuta el archivo en el shell actual, mientras que `bash` lo ejecuta en un subshell**

`source ~/.bashrc` (equivalente a `. ~/.bashrc`) ejecuta el archivo en el **shell actual**, por lo que todas las variables, alias y funciones definidas quedan disponibles en la sesion. `bash ~/.bashrc` ejecuta el archivo en un **subshell** (proceso hijo), donde las variables y alias se crean pero se pierden al terminar el subshell. Por eso, para recargar la configuracion del shell se usa siempre `source`.

</details>

---

### Pregunta 3

Un administrador quiere que todos los nuevos usuarios creados en el sistema tengan un alias `ll='ls -la'` disponible automaticamente. Que archivo debe modificar?

a) `/etc/bash.bashrc`
b) `/etc/profile`
c) `/etc/skel/.bashrc`
d) `/etc/environment`

<details><summary>Respuesta</summary>

**c) `/etc/skel/.bashrc`**

El directorio `/etc/skel/` contiene los archivos plantilla que se copian al directorio home de cada nuevo usuario cuando se crea con `useradd -m`. Al agregar `alias ll='ls -la'` en `/etc/skel/.bashrc`, todos los usuarios creados a partir de ese momento tendran el alias. `/etc/bash.bashrc` afectaria a todos los usuarios existentes de forma inmediata (no solo a los nuevos). `/etc/profile` se ejecuta solo en login shells. `/etc/environment` no es un script y no soporta alias.

</details>

---

### Pregunta 4

Que hace el comando `set -o noclobber` en un shell bash?

a) Impide que se eliminen archivos con el comando `rm`
b) Impide que se sobrescriban archivos existentes con la redireccion `>`, requiriendo usar `>|` para forzar
c) Impide la ejecucion de scripts que no tengan permiso de ejecucion
d) Impide que las variables no definidas se expandan como cadenas vacias

<details><summary>Respuesta</summary>

**b) Impide que se sobrescriban archivos existentes con la redireccion `>`, requiriendo usar `>|` para forzar**

La opcion `noclobber` protege archivos existentes de ser sobrescritos accidentalmente con el operador de redireccion `>`. Si el archivo ya existe, el shell mostrara un error. Para forzar la sobrescritura cuando `noclobber` esta activo, se usa `>|`. Se desactiva con `set +o noclobber`. La opcion que trata variables no definidas como error es `nounset` (`set -u`).

</details>

---

### Pregunta 5

Un usuario abre una terminal grafica en su escritorio GNOME. Que tipo de shell se inicia y que archivos de configuracion se ejecutan?

a) Login shell: `/etc/profile` y `~/.bash_profile`
b) Non-login shell interactivo: `/etc/bash.bashrc` y `~/.bashrc`
c) Non-login shell no interactivo: solo se lee `BASH_ENV`
d) Login shell: `/etc/environment` y `~/.profile`

<details><summary>Respuesta</summary>

**b) Non-login shell interactivo: `/etc/bash.bashrc` y `~/.bashrc`**

Al abrir una terminal grafica en un entorno de escritorio se inicia un **non-login shell** (shell interactivo no-login), ya que el usuario ya ha iniciado sesion previamente en el entorno grafico. Los archivos que se ejecutan son `/etc/bash.bashrc` (configuracion global para shells interactivos, en Debian/Ubuntu) y `~/.bashrc` (configuracion del usuario). Los archivos como `/etc/profile` y `~/.bash_profile` solo se ejecutan en login shells (SSH, consola de texto, `su -`).

</details>

---

### Pregunta 6

Cual de las siguientes afirmaciones sobre `/etc/environment` es correcta?

a) Es un script de shell que se ejecuta en cada login shell
b) Es un archivo simple de pares `VARIABLE=valor` leido por PAM, que no soporta expansiones de variables
c) Es equivalente a `/etc/profile` pero para shells no interactivos
d) Solo es leido por el comando `env` cuando se ejecuta sin argumentos

<details><summary>Respuesta</summary>

**b) Es un archivo simple de pares `VARIABLE=valor` leido por PAM, que no soporta expansiones de variables**

`/etc/environment` NO es un script de shell. Es un archivo simple con formato `VARIABLE=valor` que es leido por el modulo PAM (`pam_env`), no por bash directamente. No soporta expansiones de variables (por ejemplo, `$HOME` no funcionaria), ni comandos, ni logica de programacion. Se aplica a todas las sesiones, incluyendo las no interactivas, y es especifico de sistemas con PAM (principalmente Debian/Ubuntu).

</details>

---

### Pregunta 7

Que comando ejecuta un programa con un entorno completamente vacio, sin ninguna variable de entorno heredada?

a) `unset -a && programa`
b) `env -i programa`
c) `export -n && programa`
d) `set -o nounset && programa`

<details><summary>Respuesta</summary>

**b) `env -i programa`**

El comando `env -i` ejecuta el programa especificado con un entorno completamente vacio (sin ninguna variable de entorno heredada del shell actual). Es util para depuracion y pruebas, para verificar que un script funciona sin depender de variables del entorno del usuario. Se pueden especificar solo las variables necesarias: `env -i PATH=/usr/bin HOME=/tmp programa`. `unset -a` eliminaria las variables del shell actual, no crea un entorno limpio para un proceso hijo.

</details>

---

### Pregunta 8

Un usuario quiere crear una funcion llamada `mkcd` que cree un directorio y entre en el. Cual es la sintaxis correcta y donde debe colocarla para que este disponible en cada sesion?

a) Definirla en `/etc/profile` con la sintaxis `mkcd() { mkdir $1; cd $1; }`
b) Definirla en `~/.bashrc` con la sintaxis `mkcd() { mkdir -p "$1" && cd "$1"; }`
c) Definirla en `~/.bash_logout` con la sintaxis `function mkcd { mkdir "$1" && cd "$1"; }`
d) Definirla en `/etc/environment` con la sintaxis `mkcd=mkdir -p && cd`

<details><summary>Respuesta</summary>

**b) Definirla en `~/.bashrc` con la sintaxis `mkcd() { mkdir -p "$1" && cd "$1"; }`**

La funcion debe colocarse en `~/.bashrc` para que este disponible en cada nueva sesion de shell interactivo. La sintaxis usa `"$1"` entre comillas para manejar nombres con espacios, `-p` para crear directorios padre si es necesario, y `&&` para que `cd` solo se ejecute si `mkdir` tiene exito. `/etc/environment` no soporta funciones. `~/.bash_logout` se ejecuta al cerrar sesion, no al iniciarla. `/etc/profile` funcionaria solo para login shells.

</details>

---

### Pregunta 9

Que muestra el comando `set` sin argumentos en comparacion con el comando `env` sin argumentos?

a) `set` muestra solo las variables de entorno; `env` muestra todas las variables y funciones
b) `set` muestra todas las variables (locales, de entorno y funciones); `env` muestra solo las variables de entorno
c) Ambos muestran la misma informacion: todas las variables del shell
d) `set` muestra las opciones del shell activas; `env` muestra las variables de entorno

<details><summary>Respuesta</summary>

**b) `set` muestra todas las variables (locales, de entorno y funciones); `env` muestra solo las variables de entorno**

`set` sin argumentos lista todas las variables del shell, incluyendo las variables locales (no exportadas), las variables de entorno (exportadas) y las funciones definidas. `env` sin argumentos lista unicamente las variables de entorno, es decir, las que han sido exportadas y estan disponibles para procesos hijos. Esta distincion es fundamental para el examen LPIC-1. `printenv` es similar a `env` en este comportamiento.

</details>

---

### Pregunta 10

Un usuario tiene la siguiente configuracion en su `~/.bash_profile`:
```bash
if [ -f ~/.bashrc ]; then
    . ~/.bashrc
fi
```
Cual es el proposito de este bloque de codigo?

a) Crear un backup de `~/.bashrc` cada vez que se inicia sesion
b) Verificar que `~/.bashrc` no contenga errores de sintaxis
c) Asegurar que las configuraciones de `~/.bashrc` se apliquen tambien en login shells
d) Evitar que `~/.bashrc` se ejecute dos veces en shells no interactivos

<details><summary>Respuesta</summary>

**c) Asegurar que las configuraciones de `~/.bashrc` se apliquen tambien en login shells**

Los login shells (SSH, consola de texto) ejecutan `~/.bash_profile` pero NO ejecutan `~/.bashrc`. Los non-login shells (terminal grafica) ejecutan `~/.bashrc` pero NO `~/.bash_profile`. Este bloque hace que el login shell tambien cargue `~/.bashrc`, unificando la configuracion en ambos tipos de sesion. Asi, los alias, funciones y variables definidos en `~/.bashrc` estaran disponibles tanto al conectarse por SSH como al abrir una terminal grafica. El punto (`.`) es equivalente a `source`.

</details>

---

### Pregunta 11

Que archivo se ejecuta al cerrar un login shell de bash?

a) `~/.bashrc`
b) `~/.bash_logout`
c) `~/.profile`
d) `/etc/bash.bashrc`

<details><summary>Respuesta</summary>

**b) `~/.bash_logout`**

El archivo `~/.bash_logout` se ejecuta automaticamente cuando se cierra un login shell de bash. Es util para realizar tareas de limpieza al finalizar la sesion, como borrar archivos temporales, limpiar el historial, mostrar un mensaje de despedida o registrar la hora de desconexion. Solo se ejecuta en login shells (SSH, consola de texto, `su -`), no al cerrar un terminal grafico (non-login shell). En algunos sistemas tambien existe `/etc/bash.bash_logout` como equivalente global.

</details>

---

### Pregunta 12

Cual es la diferencia entre `su usuario` y `su - usuario`?

a) `su usuario` inicia un login shell y `su - usuario` inicia un non-login shell
b) `su usuario` inicia un non-login shell (sin cargar el perfil) y `su - usuario` inicia un login shell (cargando el perfil completo)
c) No hay diferencia, ambos inician el mismo tipo de shell
d) `su usuario` requiere contrasena de root y `su - usuario` no requiere contrasena

<details><summary>Respuesta</summary>

**b) `su usuario` inicia un non-login shell (sin cargar el perfil) y `su - usuario` inicia un login shell (cargando el perfil completo)**

`su usuario` (sin guion) cambia al usuario indicado pero mantiene el entorno actual (variables, PATH, directorio de trabajo). No ejecuta los archivos de inicio del login shell. `su - usuario` (con guion, equivalente a `su -l usuario`) simula un login completo: ejecuta `/etc/profile`, luego `~/.bash_profile` (o `~/.bash_login` o `~/.profile`), cambia al directorio home del usuario y establece un entorno limpio. Esto es importante porque con `su` sin guion, el PATH y otras variables podrian no corresponder al usuario destino.

</details>

---

### Pregunta 13

Que hace el comando `export -n MI_VARIABLE`?

a) Elimina completamente la variable del shell
b) Des-exporta la variable, convirtiendola de variable de entorno a variable local del shell
c) Asigna un valor nulo a la variable
d) Exporta la variable solo para el siguiente comando

<details><summary>Respuesta</summary>

**b) Des-exporta la variable, convirtiendola de variable de entorno a variable local del shell**

El comando `export -n MI_VARIABLE` des-exporta la variable, es decir, la quita de la lista de variables de entorno pero la mantiene como variable local del shell. Los procesos hijos ya no la heredaran, pero seguira disponible en el shell actual. Es diferente de `unset MI_VARIABLE`, que elimina la variable completamente (tanto del entorno como del shell local). `export` sin argumentos muestra todas las variables exportadas. `export -n` es util cuando se quiere dejar de compartir una variable con procesos hijos sin perder su valor en el shell actual.

</details>

---

### Pregunta 14

Que secuencia de escape en PS1 muestra `#` si el usuario es root y `$` si es un usuario normal?

a) `\u`
b) `\$`
c) `\w`
d) `\h`

<details><summary>Respuesta</summary>

**b) `\$`**

La secuencia `\$` en la variable PS1 muestra el caracter `#` si el UID del usuario es 0 (root) y `$` para cualquier otro usuario. Es una forma estandar de indicar en el prompt si se esta trabajando como root o como usuario normal. Otras secuencias comunes son: `\u` (nombre de usuario), `\h` (nombre del host hasta el primer punto), `\w` (directorio de trabajo completo), `\W` (solo el nombre del directorio actual), `\d` (fecha) y `\t` (hora en formato 24h). Estas secuencias se combinan para personalizar el prompt.

</details>

---

### Pregunta 15

Que diferencia hay entre `HISTSIZE` y `HISTFILESIZE`?

a) `HISTSIZE` es el numero maximo de comandos en el archivo de historial; `HISTFILESIZE` es el numero en memoria
b) `HISTSIZE` es el numero maximo de comandos almacenados en memoria durante la sesion; `HISTFILESIZE` es el tamano maximo del archivo de historial
c) Ambas controlan el mismo limite pero en diferentes unidades (lineas vs bytes)
d) `HISTSIZE` aplica solo a login shells y `HISTFILESIZE` a non-login shells

<details><summary>Respuesta</summary>

**b) `HISTSIZE` es el numero maximo de comandos almacenados en memoria durante la sesion; `HISTFILESIZE` es el tamano maximo del archivo de historial**

`HISTSIZE` controla cuantos comandos se almacenan en la lista del historial en memoria durante la sesion actual del shell. `HISTFILESIZE` controla cuantas lineas se almacenan en el archivo de historial (por defecto `~/.bash_history`). Cuando se cierra el shell, los comandos en memoria se escriben al archivo, y este se trunca al tamano definido por `HISTFILESIZE`. `HISTFILE` define la ubicacion del archivo de historial. Estas variables se configuran normalmente en `~/.bashrc` para que sean persistentes.

</details>

---

### Pregunta 16

Un usuario define una variable `COLOR="azul"` en su shell. Si ejecuta un script `./mi_script.sh` que hace `echo $COLOR`, que ocurre?

a) El script muestra "azul" porque las variables locales se heredan automaticamente
b) El script muestra una linea vacia porque las variables locales no se heredan a procesos hijos
c) El script produce un error porque la variable no esta definida
d) El script muestra "azul" solo si se ejecuta con `source`

<details><summary>Respuesta</summary>

**b) El script muestra una linea vacia porque las variables locales no se heredan a procesos hijos**

Las variables locales del shell (asignadas con `VARIABLE=valor` sin `export`) solo existen en el shell actual y no se heredan por procesos hijos, incluyendo scripts ejecutados con `./script.sh` o `bash script.sh`. Para que el script pueda acceder a la variable, es necesario exportarla con `export COLOR="azul"`, convirtiendola en variable de entorno. La excepcion es usar `source mi_script.sh` o `. mi_script.sh`, que ejecutan el script en el shell actual (sin crear un subshell), por lo que las variables locales si estan disponibles. La opcion `d` tambien es parcialmente correcta pero la respuesta mas precisa es `b`.

</details>

---

### Pregunta 17

Que opcion del shell se activa con `set -u` y que efecto tiene?

a) Activa el modo de depuracion, mostrando cada comando antes de ejecutarlo
b) Activa `nounset`, que trata las variables no definidas como error en lugar de expandirlas como cadenas vacias
c) Activa `noclobber`, que impide sobrescribir archivos con redireccion
d) Activa `noexec`, que lee los comandos pero no los ejecuta

<details><summary>Respuesta</summary>

**b) Activa `nounset`, que trata las variables no definidas como error en lugar de expandirlas como cadenas vacias**

`set -u` es equivalente a `set -o nounset`. Cuando esta activa, si se intenta usar una variable que no ha sido definida (por ejemplo, `echo $VARIABLE_INEXISTENTE`), el shell muestra un error "unbound variable" y, en un script, termina la ejecucion. Sin esta opcion, las variables no definidas se expanden silenciosamente como cadenas vacias, lo que puede causar errores dificiles de detectar. Otras opciones abreviadas importantes: `set -e` (`errexit`), `set -x` (`xtrace`) y `set -n` (`noexec`). Se desactivan con `+`: `set +u`.

</details>

---

### Pregunta 18

Que directorio contiene scripts `.sh` que `/etc/profile` ejecuta automaticamente al iniciar un login shell?

a) `/etc/bash.bashrc.d/`
b) `/etc/profile.d/`
c) `/etc/login.d/`
d) `/etc/shell.d/`

<details><summary>Respuesta</summary>

**b) `/etc/profile.d/`**

El directorio `/etc/profile.d/` contiene scripts con extension `.sh` que son ejecutados automaticamente por `/etc/profile` cuando se inicia un login shell. Es la forma modular y recomendada de agregar configuraciones globales al entorno del shell, ya que permite a paquetes y administradores anadir archivos individuales sin modificar directamente `/etc/profile`. Cada script se ejecuta en el contexto del shell actual (como si se usara `source`). Esto facilita la gestion de configuraciones, ya que cada aplicacion o configuracion puede tener su propio archivo independiente.

</details>

---

### Pregunta 19

Un usuario quiere ejecutar el comando original `ls` ignorando cualquier alias definido. Cuales son dos formas validas de hacerlo?

a) `\ls` o `command ls`
b) `real ls` o `original ls`
c) `exec ls` o `builtin ls`
d) `alias -r ls` o `unalias ls`

<details><summary>Respuesta</summary>

**a) `\ls` o `command ls`**

Para ejecutar el comando original ignorando un alias, se puede usar una barra invertida antes del comando (`\ls`) o el builtin `command` (`command ls`). La barra invertida evita la expansion de alias. `command` ejecuta el comando directamente sin considerar alias ni funciones del shell. `unalias ls` eliminaria el alias permanentemente de la sesion, que no es lo mismo que ejecutar el comando original una vez. `exec ls` reemplazaria el shell actual con `ls`, lo cual no es lo deseado. `builtin` solo funciona con comandos integrados del shell.

</details>

---

### Pregunta 20

Como se puede verificar si el shell actual es un login shell o un non-login shell?

a) Ejecutando `echo $SHELL` que muestra "login" o "non-login"
b) Ejecutando `echo $0` (si empieza con `-` es login shell) o `shopt login_shell` (on = login)
c) Ejecutando `type bash` que indica el tipo de shell
d) Verificando si el archivo `~/.bashrc` existe

<details><summary>Respuesta</summary>

**b) Ejecutando `echo $0` (si empieza con `-` es login shell) o `shopt login_shell` (on = login)**

Hay dos formas principales de identificar el tipo de shell: `echo $0` muestra el nombre del shell, y si empieza con un guion (`-bash`), es un login shell. `shopt login_shell` muestra `on` si es un login shell y `off` si es un non-login shell. `$SHELL` muestra el shell por defecto del usuario (de `/etc/passwd`), no el tipo de sesion actual. Saber el tipo de shell es importante para entender que archivos de configuracion se han ejecutado y cuales no.

</details>

---

### Pregunta 21

Escribe el comando para exportar una variable llamada `JAVA_HOME` con el valor `/usr/lib/jvm/java-17`.

<input type="text" class="fill-blank" data-answer="export JAVA_HOME=/usr/lib/jvm/java-17" data-alt="export JAVA_HOME='/usr/lib/jvm/java-17',export JAVA_HOME=\"/usr/lib/jvm/java-17\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**export JAVA_HOME=/usr/lib/jvm/java-17**

El comando `export` convierte una variable en variable de entorno, haciendola disponible para todos los procesos hijos del shell. La sintaxis `export VARIABLE=valor` asigna y exporta en un solo paso. Tambien se puede hacer en dos pasos: `JAVA_HOME=/usr/lib/jvm/java-17` seguido de `export JAVA_HOME`. Para que este cambio sea permanente, la linea debe anadirse a `~/.bashrc` o `~/.profile`. Sin `export`, la variable seria local y no estaria disponible para scripts o programas ejecutados desde ese shell.

</details>

---

### Pregunta 22

Escribe el comando para recargar la configuracion de `~/.bashrc` en el shell actual sin cerrar y reabrir la terminal.

<input type="text" class="fill-blank" data-answer="source ~/.bashrc" data-alt=". ~/.bashrc" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**source ~/.bashrc**

El comando `source ~/.bashrc` (equivalente a `. ~/.bashrc`) ejecuta el archivo en el contexto del shell actual, sin crear un subshell. Esto permite que todos los cambios realizados en `~/.bashrc` (nuevos alias, funciones, variables, configuraciones del PATH, etc.) se apliquen inmediatamente en la sesion actual. Si se ejecutara `bash ~/.bashrc`, los cambios se aplicarian en un subshell que terminaria inmediatamente, sin efecto en el shell actual. `source` y `.` (dot command) son equivalentes y ambos son fundamentales para la administracion del shell.

</details>

---

### Pregunta 23

Escribe el comando para eliminar un alias llamado `ll` de la sesion actual del shell.

<input type="text" class="fill-blank" data-answer="unalias ll" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**unalias ll**

El comando `unalias ll` elimina el alias `ll` de la sesion actual del shell. Esta eliminacion es temporal: si el alias esta definido en `~/.bashrc`, volvera a estar disponible al abrir una nueva sesion o al recargar la configuracion. Para eliminarlo permanentemente, se debe quitar la definicion del archivo `~/.bashrc`. El comando `unalias -a` eliminaria todos los alias definidos en la sesion actual. Para ver los alias existentes, se usa `alias` sin argumentos o `alias ll` para ver uno especifico.

</details>

---

### Pregunta 24

Escribe el comando para ver unicamente las variables de entorno (no las locales ni las funciones).

<input type="text" class="fill-blank" data-answer="env" data-alt="printenv" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**env**

El comando `env` sin argumentos muestra unicamente las variables de entorno, es decir, las que han sido exportadas y estan disponibles para procesos hijos. `printenv` es equivalente y produce el mismo resultado. A diferencia de `set` (que muestra todas las variables locales, de entorno y funciones definidas en el shell), `env` filtra y muestra solo las variables exportadas. `printenv VARIABLE` tiene la ventaja adicional de poder mostrar el valor de una variable especifica. Esta distincion entre `set` y `env` es un punto clave para el examen LPIC-1.

</details>

---

### Pregunta 25

Escribe el comando para agregar el directorio `$HOME/bin` al final del PATH actual.

<input type="text" class="fill-blank" data-answer="export PATH=$PATH:$HOME/bin" data-alt="export PATH=\"$PATH:$HOME/bin\",PATH=$PATH:$HOME/bin && export PATH" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**export PATH=$PATH:$HOME/bin**

El comando `export PATH=$PATH:$HOME/bin` anade `$HOME/bin` al final del PATH existente, separado por `:`. Los directorios listados primero en el PATH tienen prioridad, por lo que al anadirlo al final, los comandos del sistema se encontraran antes que los del directorio personal. Para anadirlo al inicio (con prioridad): `export PATH=$HOME/bin:$PATH`. Para que el cambio sea permanente, se debe agregar la linea a `~/.bashrc` o `~/.profile`. Es importante incluir `$PATH` para no perder los directorios existentes.

</details>
