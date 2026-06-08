---
title: "103.8 - Edicion basica de archivos: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-103
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "103"
subtema: "103.8"
---

# 103.8 - Edicion basica de archivos: Ejercicios

### Pregunta 1
Un usuario ha abierto un archivo con `vi` y ha realizado varios cambios. Ahora quiere guardar los cambios y salir. Cual de los siguientes comandos NO logra este objetivo?

A) `:wq`
B) `ZZ`
C) `:x`
D) `:q!`

<details>
<summary>Respuesta</summary>

**D) `:q!`**

`:q!` sale de vi **descartando todos los cambios** sin guardarlos. Es el comando para "salir sin guardar". Las otras tres opciones si guardan y salen: `:wq` (write and quit), `ZZ` (atajo en modo normal equivalente a `:wq`), y `:x` (guarda solo si hay cambios y sale). Para el examen, es importante recordar que `!` despues de `:q` fuerza la salida sin guardar.
</details>

---

### Pregunta 2
En vi, un usuario esta en modo normal y quiere insertar texto al final de la linea actual. Cual es la tecla correcta?

A) `i`
B) `a`
C) `A`
D) `o`

<details>
<summary>Respuesta</summary>

**C) `A`**

`A` (mayuscula) mueve el cursor al **final de la linea actual** y entra en modo insercion. `i` inserta **antes** del cursor (en su posicion actual). `a` inserta **despues** del cursor (un caracter a la derecha). `o` abre una **nueva linea debajo** de la actual y entra en modo insercion. La diferencia entre `a` y `A` es que `a` inserta despues de la posicion actual del cursor, mientras que `A` siempre va al final de la linea.
</details>

---

### Pregunta 3
Que comando de vi reemplaza todas las ocurrencias de "foo" por "bar" en todo el archivo, pidiendo confirmacion en cada una?

A) `:%s/foo/bar/g`
B) `:%s/foo/bar/gc`
C) `:s/foo/bar/gc`
D) `:%s/foo/bar/c`

<details>
<summary>Respuesta</summary>

**B) `:%s/foo/bar/gc`**

`:%s/foo/bar/gc` es el comando correcto. `%` indica todo el archivo, `s` es sustituir, `g` es global (todas las ocurrencias en cada linea, no solo la primera), y `c` pide confirmacion (confirm) antes de cada reemplazo. La opcion A reemplaza todo sin pedir confirmacion. La opcion C solo actua sobre la **linea actual** (falta el `%`). La opcion D reemplaza en todo el archivo con confirmacion pero solo la **primera ocurrencia** de cada linea (falta `g`).
</details>

---

### Pregunta 4
Un usuario abre vi y quiere ir directamente a la linea 50 del archivo. Cual de los siguientes metodos es correcto?

A) Escribir `50` y luego presionar `G`
B) Ejecutar `:50` en modo comando
C) Abrir con `vi +50 archivo.txt`
D) Todas las anteriores son correctas

<details>
<summary>Respuesta</summary>

**D) Todas las anteriores son correctas**

Las tres formas son validas para ir a la linea 50: `50G` en modo normal antepone el numero al comando `G` (ir a linea). `:50` en modo comando mueve el cursor a la linea 50. Y `vi +50 archivo.txt` abre el archivo directamente en la linea 50 desde la linea de comandos. Todas son formas validas y pueden aparecer en el examen.
</details>

---

### Pregunta 5
En vi, cual es la diferencia entre `dd` y `yy`?

A) `dd` borra la linea y `yy` la copia; ambos almacenan en el buffer
B) `dd` borra la linea permanentemente y `yy` la mueve al buffer
C) `dd` y `yy` hacen lo mismo pero en diferente modo
D) `dd` borra un caracter y `yy` copia un caracter

<details>
<summary>Respuesta</summary>

**A) `dd` borra la linea y `yy` la copia; ambos almacenan en el buffer**

`dd` **corta** (borra) la linea completa actual y la almacena en el buffer. `yy` **copia** (yank) la linea completa actual al buffer sin borrarla. En ambos casos, el contenido queda en el buffer y puede ser pegado con `p` (despues/debajo) o `P` (antes/encima). La diferencia clave es que `dd` elimina la linea del texto mientras que `yy` la deja intacta. `dd` funciona como "cortar" y `yy` como "copiar" en editores convencionales.
</details>

---

### Pregunta 6
En nano, cual es el atajo de teclado para guardar un archivo?

A) `Ctrl+S`
B) `Ctrl+W`
C) `Ctrl+O`
D) `Ctrl+X`

<details>
<summary>Respuesta</summary>

**C) `Ctrl+O`**

En nano, `Ctrl+O` (Write Out) guarda el archivo. Nano pide confirmacion del nombre del archivo y luego lo escribe a disco. `Ctrl+S` no es un atajo estandar de nano (es comun en otros editores). `Ctrl+W` es para buscar texto (Where is). `Ctrl+X` es para salir de nano (si hay cambios sin guardar, pregunta si desea guardarlos antes de salir). Los atajos de nano son diferentes a los de otros editores, y se muestran en la parte inferior de la pantalla.
</details>

---

### Pregunta 7
Un administrador necesita deshacer los ultimos 5 cambios realizados en vi. Que debe hacer?

A) Presionar `u` cinco veces
B) Presionar `U` una vez
C) Ejecutar `:undo 5`
D) Presionar `Ctrl+Z` cinco veces

<details>
<summary>Respuesta</summary>

**A) Presionar `u` cinco veces**

En vim, la tecla `u` deshace la ultima accion, y se puede presionar multiples veces para deshacer acciones sucesivas (deshacer multinivel). Presionar `u` cinco veces deshace los ultimos 5 cambios. `U` (mayuscula) deshace todos los cambios realizados en la linea actual, pero solo mientras no te hayas movido a otra linea; no es lo mismo que deshacer 5 acciones. `:undo 5` no es un comando estandar de vi. `Ctrl+Z` no deshace en vi; en modo normal no tiene efecto y en la terminal suspendia el proceso.
</details>

---

### Pregunta 8
Que variable de entorno se utiliza para definir el editor de texto predeterminado en Linux?

A) `SHELL`
B) `EDITOR`
C) `TERM`
D) `DISPLAY`

<details>
<summary>Respuesta</summary>

**B) `EDITOR`**

La variable de entorno `EDITOR` define el editor de texto predeterminado que utilizan muchos programas cuando necesitan que el usuario edite texto (por ejemplo, `crontab -e`, `visudo`, `git commit`). Tambien existe `VISUAL`, que se usa para editores de pantalla completa. `SHELL` define el shell por defecto del usuario. `TERM` define el tipo de terminal. `DISPLAY` se usa para indicar el servidor X Window. Para configurar el editor, se usa `export EDITOR=vi` (o `nano`, `vim`, etc.) en `~/.bashrc` o `~/.profile`.
</details>

---

### Pregunta 9

En vi, un usuario esta en modo normal y quiere abrir una nueva linea vacia encima de la linea actual y entrar en modo insercion. Cual es la tecla correcta?

a) `o`
b) `O`
c) `I`
d) `a`

<details><summary>Respuesta</summary>

**b) `O`**

La tecla `O` (mayuscula) abre una nueva linea **encima** de la linea actual y entra en modo insercion. La tecla `o` (minuscula) abre una nueva linea **debajo** de la linea actual. `I` (mayuscula) entra en modo insercion al inicio de la linea actual (primer caracter no blanco), pero no crea una nueva linea. `a` entra en modo insercion despues de la posicion actual del cursor. La distincion entre `o` y `O` es muy preguntada en el examen LPIC-1.

</details>

---

### Pregunta 10

En vi, cual es la forma correcta de buscar la palabra "error" hacia atras en el archivo?

a) `/error`
b) `?error`
c) `#error`
d) `\error`

<details><summary>Respuesta</summary>

**b) `?error`**

En vi, `/patron` busca hacia adelante (hacia el final del archivo) y `?patron` busca hacia atras (hacia el inicio del archivo). Despues de encontrar una coincidencia, `n` busca la siguiente en la misma direccion y `N` busca en la direccion contraria. La tecla `#` busca la ocurrencia anterior de la palabra bajo el cursor, pero no permite escribir un patron personalizado. `\` es un caracter de escape, no un comando de busqueda.

</details>

---

### Pregunta 11

En vi, que hace la combinacion `ddp` en modo normal?

a) Borra dos lineas
b) Intercambia la linea actual con la de abajo
c) Duplica la linea actual
d) Pega el contenido del portapapeles dos veces

<details><summary>Respuesta</summary>

**b) Intercambia la linea actual con la de abajo**

`ddp` es una combinacion de dos comandos: `dd` corta (borra) la linea actual y la almacena en el buffer, luego `p` la pega debajo de la linea actual. El resultado neto es que la linea original y la siguiente intercambian posiciones. De forma similar, `xp` intercambia dos caracteres (corta el caracter actual y lo pega despues del siguiente). Para duplicar la linea actual se usaria `yyp` (copiar y pegar debajo).

</details>

---

### Pregunta 12

Cual es el archivo de configuracion permanente para las preferencias de vim de un usuario?

a) `/etc/vim/vimrc`
b) `~/.bashrc`
c) `~/.vimrc`
d) `/etc/vi.conf`

<details><summary>Respuesta</summary>

**c) `~/.vimrc`**

El archivo `~/.vimrc` es el archivo de configuracion personal de vim para cada usuario. Ahi se pueden establecer opciones como `set number`, `set tabstop=4`, `syntax on`, etc. que se aplican cada vez que se abre vim. `/etc/vim/vimrc` o `/etc/vimrc` es la configuracion global del sistema que afecta a todos los usuarios. `~/.bashrc` es la configuracion del shell bash, no de vim. `/etc/vi.conf` no es un archivo estandar.

</details>

---

### Pregunta 13

En vi, que comando del modo normal mueve el cursor a la ultima linea del archivo?

a) `gg`
b) `G`
c) `$`
d) `L`

<details><summary>Respuesta</summary>

**b) `G`**

`G` (mayuscula) mueve el cursor a la ultima linea del archivo. `gg` mueve a la primera linea del archivo (opuesto de `G`). `$` mueve al final de la linea actual, no del archivo. `L` mueve a la parte inferior de la pantalla visible (Low), que no es necesariamente la ultima linea del archivo. Se puede combinar `G` con un numero: `50G` lleva a la linea 50.

</details>

---

### Pregunta 14

En vi, que hacen los comandos `:set nu` y `:set nonu`?

a) Activan y desactivan la numeracion automatica de nuevas lineas
b) Muestran y ocultan los numeros de linea en el margen izquierdo
c) Activan y desactivan la indentacion numerica
d) Muestran y ocultan los caracteres no imprimibles

<details><summary>Respuesta</summary>

**b) Muestran y ocultan los numeros de linea en el margen izquierdo**

`:set nu` (abreviatura de `:set number`) muestra los numeros de linea en el margen izquierdo del editor, lo cual es util para navegar y referenciar lineas. `:set nonu` (abreviatura de `:set nonumber`) oculta los numeros de linea. Estas configuraciones se pueden hacer permanentes anadiendo `set number` al archivo `~/.vimrc`. Para mostrar caracteres invisibles se usa `:set list`.

</details>

---

### Pregunta 15

En nano, cual es el atajo para buscar y reemplazar texto?

a) `Ctrl+W`
b) `Ctrl+R`
c) `Ctrl+\`
d) `Ctrl+F`

<details><summary>Respuesta</summary>

**c) `Ctrl+\`**

En nano, `Ctrl+\` es el atajo para buscar y reemplazar texto. Primero solicita el patron a buscar y luego el texto de reemplazo. `Ctrl+W` es para buscar texto (Where is), sin la funcion de reemplazo. `Ctrl+R` en nano es para insertar el contenido de otro archivo (Read File). `Ctrl+F` no es un atajo estandar de nano. Los atajos de nano se muestran en la parte inferior de la pantalla, donde `^` representa Ctrl y `M-` representa Alt.

</details>

---

### Pregunta 16

En vi, un usuario quiere copiar la linea actual al registro "a" y luego pegarla en otra ubicacion. Cual es la secuencia correcta?

a) `"ayy` para copiar, luego `"ap` para pegar
b) `ayy` para copiar, luego `ap` para pegar
c) `:reg a yy` para copiar, luego `:reg a p` para pegar
d) `ya` para copiar, luego `pa` para pegar

<details><summary>Respuesta</summary>

**a) `"ayy` para copiar, luego `"ap` para pegar**

En vi/vim, los registros con nombre se acceden con `"` seguido de la letra del registro. `"ayy` copia la linea actual al registro `a` y `"ap` pega el contenido del registro `a`. Los registros permiten tener multiples portapapeles simultaneos (de `a` a `z`). Si se usa la letra mayuscula (`"Ayy`), el contenido se anade al registro en lugar de sobreescribirlo. El comando `:reg a` muestra el contenido del registro `a` pero no copia ni pega.

</details>

---

### Pregunta 17

Cual de las siguientes combinaciones de teclas repite la ultima accion ejecutada en vi?

a) `u`
b) `Ctrl+r`
c) `.`
d) `R`

<details><summary>Respuesta</summary>

**c) `.`**

El punto (`.`) en modo normal de vi repite la ultima accion de edicion realizada. Por ejemplo, si se borran 3 lineas con `3dd`, al presionar `.` se borraran otras 3 lineas. Es extremadamente util para aplicar el mismo cambio en multiples ubicaciones. `u` deshace la ultima accion. `Ctrl+r` rehace la ultima accion deshecha. `R` entra en modo reemplazo (sobreescribe caracteres al escribir).

</details>

---

### Pregunta 18

En vi, que comando desde modo normal permite ejecutar un comando del shell sin salir del editor?

a) `:!comando`
b) `:shell comando`
c) `!comando`
d) `:exec comando`

<details><summary>Respuesta</summary>

**a) `:!comando`**

El comando `:!comando` desde el modo comando de vi ejecuta un comando externo del shell y muestra su salida. Por ejemplo, `:!ls` lista los archivos del directorio actual sin salir de vi. Despues de ver la salida, se presiona Enter para volver al editor. Tambien se puede insertar la salida de un comando en el archivo con `:r !comando` (por ejemplo, `:r !date` inserta la fecha actual). `:!bash` abre un shell interactivo completo y se vuelve a vi con `exit`.

</details>

---

### Pregunta 19

Escribe el comando de vi (desde modo comando) para guardar el archivo actual y salir del editor.

<input type="text" class="fill-blank" data-answer=":wq" data-alt=":x,ZZ" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**:wq**

`:wq` (write and quit) guarda el archivo y sale de vi. Alternativas equivalentes son `:x` (guarda solo si hay cambios y sale) y `ZZ` (desde modo normal, equivalente a `:wq`). Estos son los comandos mas basicos e importantes de vi que aparecen frecuentemente en el examen LPIC-1.

</details>

---

### Pregunta 20

Escribe el comando de vi (desde modo comando) para reemplazar todas las ocurrencias de "viejo" por "nuevo" en todo el archivo.

<input type="text" class="fill-blank" data-answer=":%s/viejo/nuevo/g" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**:%s/viejo/nuevo/g**

`%` indica todo el archivo, `s` es sustitucion, `/viejo/nuevo/` define el patron y el reemplazo, y `g` (global) reemplaza todas las ocurrencias en cada linea (sin `g`, solo se reemplazaria la primera ocurrencia por linea). Para pedir confirmacion en cada reemplazo se anade `c`: `:%s/viejo/nuevo/gc`.

</details>

---

### Pregunta 21

En vi, escribe el comando en modo normal para borrar desde la posicion del cursor hasta el final de la linea.

<input type="text" class="fill-blank" data-answer="d$" data-alt="D" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**d$**

El comando `d$` borra desde la posicion actual del cursor hasta el final de la linea. `d` es el operador de borrado y `$` es el movimiento hasta el final de la linea. `D` (mayuscula) es un atajo equivalente. Para borrar hasta el inicio de la linea se usa `d0`. Para borrar la linea completa se usa `dd`.

</details>

---

### Pregunta 22

Escribe el atajo de teclado de nano para salir del editor.

<input type="text" class="fill-blank" data-answer="Ctrl+X" data-alt="ctrl+x,^X" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**Ctrl+X**

`Ctrl+X` es el atajo de nano para salir del editor. Si hay cambios sin guardar, nano preguntara si desea guardarlos antes de salir. Para guardar sin salir se usa `Ctrl+O`. Estos dos atajos son los mas importantes de nano y aparecen en la barra de ayuda de la parte inferior de la pantalla.

</details>

---

### Pregunta 23

Escribe el comando para abrir el archivo `datos.txt` con vi directamente en la linea 25.

<input type="text" class="fill-blank" data-answer="vi +25 datos.txt" data-alt="vim +25 datos.txt" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**vi +25 datos.txt**

La opcion `+N` de vi permite abrir un archivo posicionando el cursor directamente en la linea N. `vi +25 datos.txt` abre el archivo en la linea 25. Tambien se puede usar `vi +/patron archivo.txt` para abrir en la primera coincidencia de un patron de busqueda. Estas opciones de linea de comandos son utiles cuando se conoce la ubicacion exacta donde se necesita editar.

</details>

---

### Pregunta 24
En vi, un administrador esta en modo normal y quiere eliminar desde la posicion del cursor hasta el final de la linea. Cual comando es correcto?

A) `dw`
B) `D`
C) `dd`
D) `d0`

<details>
<summary>Respuesta</summary>

**B) `D`**

`D` (mayuscula) elimina desde la posicion del cursor hasta el final de la linea actual. Es equivalente a `d$`. `dw` elimina desde el cursor hasta el inicio de la siguiente palabra. `dd` elimina la linea completa (incluyendo lo que esta antes del cursor). `d0` elimina desde el cursor hasta el inicio de la linea (hacia atras). Recordar: `D` = borrar hasta el final; `C` = cambiar hasta el final (borra y entra en modo insercion); `dd` = linea entera.

</details>

---

### Pregunta 25
En vi, cual comando en modo normal reemplaza todas las ocurrencias de "foo" por "bar" en todo el archivo?

A) `:s/foo/bar/`
B) `:%s/foo/bar/g`
C) `:replace foo bar`
D) `:%r/foo/bar/`

<details>
<summary>Respuesta</summary>

**B) `:%s/foo/bar/g`**

`:%s/foo/bar/g` usa el comando de sustitucion (`:s`) con rango `%` (todo el archivo) y flag `g` (global, todas las ocurrencias en cada linea). Sin `%`, solo se aplicaria a la linea actual. Sin `g`, solo se reemplazaria la primera ocurrencia en cada linea. `:s/foo/bar/` solo reemplaza la primera ocurrencia en la linea actual. Para pedir confirmacion en cada reemplazo se anade `c`: `:%s/foo/bar/gc`. `:replace` y `:%r` no son comandos validos de vi.

</details>
