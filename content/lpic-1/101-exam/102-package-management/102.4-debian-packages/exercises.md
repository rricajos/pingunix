---
title: "102.4 - Gestion de paquetes Debian: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-102
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "102"
subtema: "102.4"
---

# 102.4 - Gestion de paquetes Debian: Ejercicios

### Pregunta 1

Cual es la diferencia entre `dpkg -r paquete` y `dpkg -P paquete`?

a) `-r` desinstala y purga, `-P` solo desinstala
b) `-r` desinstala conservando los archivos de configuracion, `-P` elimina todo incluyendo la configuracion
c) No hay diferencia, ambos eliminan todo completamente
d) `-r` marca el paquete para eliminacion futura, `-P` lo desinstala inmediatamente

<details><summary>Respuesta</summary>

**b) `-r` desinstala conservando los archivos de configuracion, `-P` elimina todo incluyendo la configuracion**

`dpkg -r` (remove) elimina los archivos del programa pero conserva los archivos de configuracion, permitiendo reinstalar el paquete y recuperar la configuracion anterior. El paquete aparecera con estado `rc` en `dpkg -l`. `dpkg -P` (purge) elimina todo: archivos del programa y archivos de configuracion. Los equivalentes con apt son `apt remove` y `apt purge` respectivamente.

</details>

---

### Pregunta 2

Necesitas saber que paquete instalo el archivo `/usr/bin/vim` en tu sistema. Que comando usarias?

a) `apt-file search /usr/bin/vim`
b) `apt search vim`
c) `dpkg -S /usr/bin/vim`
d) `dpkg -L vim`

<details><summary>Respuesta</summary>

**c) `dpkg -S /usr/bin/vim`**

`dpkg -S` busca entre los paquetes instalados en el sistema cual proporciona un archivo determinado. `apt-file search` tambien puede buscar archivos pero busca en todos los repositorios (incluso paquetes no instalados) y requiere tener su base de datos actualizada. `apt search` busca paquetes por nombre o descripcion, no por archivo. `dpkg -L` hace lo contrario: lista los archivos que pertenecen a un paquete, no busca a que paquete pertenece un archivo.

</details>

---

### Pregunta 3

Cual es la diferencia entre `apt update` y `apt upgrade`?

a) `apt update` actualiza los paquetes instalados y `apt upgrade` descarga las listas de paquetes
b) `apt update` descarga las listas de paquetes disponibles y `apt upgrade` actualiza los paquetes instalados
c) Son equivalentes, ambos actualizan el sistema
d) `apt update` solo actualiza el kernel y `apt upgrade` actualiza el resto

<details><summary>Respuesta</summary>

**b) `apt update` descarga las listas de paquetes disponibles y `apt upgrade` actualiza los paquetes instalados**

`apt update` descarga la informacion actualizada de que paquetes estan disponibles en los repositorios configurados en `/etc/apt/sources.list`. No instala ni actualiza nada. `apt upgrade` actualiza los paquetes instalados a su version mas reciente usando esas listas. Siempre se debe ejecutar `apt update` antes de `apt upgrade`. Existe tambien `apt full-upgrade` (equivalente a `apt-get dist-upgrade`) que puede eliminar paquetes obsoletos e instalar nuevas dependencias.

</details>

---

### Pregunta 4

Has descargado un paquete `.deb` manualmente y al ejecutar `dpkg -i paquete.deb` falla por dependencias faltantes. Cual es la forma correcta de resolver el problema?

a) Ejecutar `dpkg --fix-broken paquete.deb`
b) Ejecutar `apt --fix-broken install` o `apt-get install -f`
c) Reinstalar el paquete con `dpkg -i --force-depends paquete.deb`
d) Descargar e instalar manualmente cada dependencia con `dpkg -i`

<details><summary>Respuesta</summary>

**b) Ejecutar `apt --fix-broken install` o `apt-get install -f`**

Cuando `dpkg -i` falla por dependencias, el paquete queda en estado "parcialmente instalado". Al ejecutar `apt --fix-broken install` (o `apt-get install -f`), apt descarga e instala automaticamente las dependencias faltantes de los repositorios y completa la instalacion. Una alternativa mas directa es usar `apt install ./paquete.deb` (con el prefijo `./`), que resuelve dependencias automaticamente al instalar el archivo local.

</details>

---

### Pregunta 5

En la estructura del archivo `/etc/apt/sources.list`, que significa el campo `deb-src`?

a) Repositorio de paquetes binarios de codigo cerrado
b) Repositorio de codigo fuente de los paquetes
c) Repositorio de seguridad para actualizaciones criticas
d) Repositorio secundario de respaldo

<details><summary>Respuesta</summary>

**b) Repositorio de codigo fuente de los paquetes**

En una linea de `sources.list`, el primer campo indica el tipo: `deb` es para paquetes binarios compilados y `deb-src` es para el codigo fuente de los paquetes. Una linea completa tiene el formato: `tipo URI distribucion componentes`. Por ejemplo: `deb http://archive.ubuntu.com/ubuntu jammy main restricted`. Los componentes tipicos de Ubuntu son `main` (libre oficial), `restricted` (propietario soportado), `universe` (libre comunitario) y `multiverse` (no libre).

</details>

---

### Pregunta 6

Que comando lista todos los archivos instalados por el paquete `openssh-server`?

a) `dpkg -s openssh-server`
b) `dpkg -S openssh-server`
c) `dpkg -L openssh-server`
d) `apt-file list openssh-server`

<details><summary>Respuesta</summary>

**c) `dpkg -L openssh-server`**

`dpkg -L` (listfiles) muestra la lista completa de archivos que un paquete instalo en el sistema. `dpkg -s` muestra el estado e informacion del paquete (version, dependencias, descripcion). `dpkg -S` busca a que paquete pertenece un archivo especifico (operacion inversa). `apt-file list` tambien puede listar archivos de un paquete, pero busca en todos los repositorios y no solo en paquetes instalados, requiriendo ademas tener su base de datos actualizada.

</details>

---

### Pregunta 7

Que hace el comando `dpkg-reconfigure tzdata`?

a) Reinstala el paquete `tzdata` desde el repositorio
b) Elimina y vuelve a crear la configuracion de zona horaria por defecto
c) Vuelve a ejecutar los scripts de configuracion post-instalacion del paquete `tzdata`
d) Actualiza el paquete `tzdata` a la ultima version disponible

<details><summary>Respuesta</summary>

**c) Vuelve a ejecutar los scripts de configuracion post-instalacion del paquete `tzdata`**

`dpkg-reconfigure` re-ejecuta los scripts de configuracion post-instalacion de un paquete ya instalado, como si el paquete se estuviera configurando por primera vez. Es util para cambiar configuraciones interactivas como la zona horaria (`tzdata`), los idiomas del sistema (`locales`) o el teclado (`keyboard-configuration`). No confundir con `dpkg --configure -a`, que intenta completar la configuracion de paquetes que quedaron en estado parcialmente configurado.

</details>

---

### Pregunta 8

En la salida de `dpkg -l`, un paquete aparece con el estado `rc`. Que significa?

a) El paquete esta instalado correctamente y configurado
b) El paquete fue eliminado pero sus archivos de configuracion aun permanecen en el sistema
c) El paquete esta retenido y no se actualizara
d) El paquete tiene un error de configuracion que necesita reparacion

<details><summary>Respuesta</summary>

**b) El paquete fue eliminado pero sus archivos de configuracion aun permanecen en el sistema**

El estado `rc` se compone de dos letras: `r` (desired: Remove) indica que se solicito la eliminacion, y `c` (status: Config-files) indica que los archivos de configuracion siguen presentes. Esto ocurre cuando se usa `dpkg -r` o `apt remove`. Para eliminar completamente el paquete incluyendo la configuracion residual, se debe usar `dpkg -P nombre_paquete` o `apt purge nombre_paquete`.

</details>

---

### Pregunta 9

Donde se almacenan los archivos `.deb` descargados por apt y que comando los elimina todos?

a) En `/tmp/apt/` y se eliminan con `apt remove --cache`
b) En `/var/cache/apt/archives/` y se eliminan con `apt clean`
c) En `/var/lib/dpkg/cache/` y se eliminan con `dpkg --clean`
d) En `/usr/share/apt/downloads/` y se eliminan con `apt autoclean`

<details><summary>Respuesta</summary>

**b) En `/var/cache/apt/archives/` y se eliminan con `apt clean`**

Los paquetes `.deb` descargados se almacenan en `/var/cache/apt/archives/` y pueden ocupar mucho espacio con el tiempo. `apt clean` (o `apt-get clean`) elimina todos los `.deb` descargados. `apt autoclean` (o `apt-get autoclean`) es mas conservador: solo elimina los `.deb` de versiones obsoletas que ya no estan en los repositorios, conservando los de las versiones actuales.

</details>

---

### Pregunta 10

Cual es la diferencia fundamental entre `dpkg` y `apt` como herramientas de gestion de paquetes?

a) `dpkg` trabaja con repositorios remotos y `apt` solo con archivos locales
b) `apt` es de bajo nivel y `dpkg` de alto nivel
c) `dpkg` gestiona paquetes individuales sin resolver dependencias, mientras que `apt` resuelve dependencias automaticamente
d) `dpkg` solo funciona en Debian y `apt` funciona en cualquier distribucion

<details><summary>Respuesta</summary>

**c) `dpkg` gestiona paquetes individuales sin resolver dependencias, mientras que `apt` resuelve dependencias automaticamente**

`dpkg` es la herramienta de bajo nivel del sistema de paquetes Debian: instala y desinstala archivos `.deb` individuales pero no gestiona dependencias. Si un paquete requiere otro que no esta instalado, `dpkg` simplemente reporta el error. `apt` (y `apt-get`) es la herramienta de alto nivel que trabaja con repositorios, descarga paquetes y resuelve dependencias automaticamente. Internamente, `apt` utiliza `dpkg` para la instalacion final de los paquetes.

</details>

### Pregunta 11

Que comando se utiliza para mostrar informacion detallada (version, dependencias, descripcion) de un paquete .deb que aun no esta instalado?

a) dpkg -s paquete.deb
b) dpkg -I paquete.deb
c) dpkg -L paquete.deb
d) apt show paquete.deb

<details><summary>Respuesta</summary>

**b) dpkg -I paquete.deb**

`dpkg -I` (o `dpkg --info`) muestra la informacion de control de un archivo `.deb` sin instalarlo, incluyendo nombre, version, arquitectura, dependencias y descripcion. `dpkg -s` muestra informacion de paquetes ya instalados (consultando la base de datos local). `dpkg -L` lista los archivos de un paquete instalado. `dpkg -c` (o `--contents`) lista el contenido de un archivo .deb sin instalarlo.

</details>

### Pregunta 12

Cual es la diferencia entre `apt upgrade` y `apt full-upgrade`?

a) `apt upgrade` actualiza el kernel y `apt full-upgrade` actualiza el resto
b) `apt upgrade` nunca elimina paquetes ni instala nuevos, mientras que `apt full-upgrade` puede hacerlo para resolver dependencias
c) `apt full-upgrade` solo actualiza paquetes criticos de seguridad
d) No hay diferencia, son sinonimos

<details><summary>Respuesta</summary>

**b) `apt upgrade` nunca elimina paquetes ni instala nuevos, mientras que `apt full-upgrade` puede hacerlo para resolver dependencias**

`apt upgrade` actualiza los paquetes instalados pero si una actualizacion requiere eliminar un paquete o instalar uno nuevo, la omite. `apt full-upgrade` (equivalente a `apt-get dist-upgrade`) realiza una actualizacion mas agresiva, pudiendo eliminar paquetes obsoletos e instalar nuevos paquetes si es necesario para resolver conflictos de dependencias. Esto es util cuando hay cambios mayores de dependencias.

</details>

### Pregunta 13

Que directorio contiene archivos de repositorios adicionales de terceros en el sistema APT?

a) /etc/apt/repos.d/
b) /etc/apt/sources.list.d/
c) /var/lib/apt/lists/
d) /etc/dpkg/repos/

<details><summary>Respuesta</summary>

**b) /etc/apt/sources.list.d/**

El directorio `/etc/apt/sources.list.d/` contiene archivos adicionales de configuracion de repositorios, con extension `.list` o `.sources`. Cada archivo puede definir uno o mas repositorios de terceros (como Docker, Google Chrome, etc.). Esto permite organizar los repositorios de forma modular sin modificar el archivo principal `/etc/apt/sources.list`. `/var/lib/apt/lists/` contiene las listas descargadas de paquetes disponibles.

</details>

### Pregunta 14

Que componente del repositorio de Ubuntu contiene software libre mantenido por la comunidad?

a) main
b) restricted
c) universe
d) multiverse

<details><summary>Respuesta</summary>

**c) universe**

En Ubuntu, `universe` contiene software libre mantenido por la comunidad (no oficialmente soportado por Canonical). `main` contiene software libre soportado oficialmente. `restricted` contiene controladores propietarios soportados. `multiverse` contiene software no libre (propietario). En Debian, los componentes son `main` (libre), `contrib` (libre que depende de no libre) y `non-free` (propietario).

</details>

### Pregunta 15

Que comando configura paquetes que quedaron en estado parcialmente instalado o con configuracion pendiente?

a) apt --fix-broken install
b) dpkg --configure -a
c) dpkg-reconfigure -a
d) apt reconfigure

<details><summary>Respuesta</summary>

**b) dpkg --configure -a**

`dpkg --configure -a` intenta completar la configuracion de todos los paquetes que quedaron en estado parcialmente configurado o pendiente de configuracion (por ejemplo, despues de un fallo durante la instalacion). `apt --fix-broken install` resuelve dependencias rotas instalando paquetes faltantes. `dpkg-reconfigure` re-ejecuta la configuracion de un paquete ya instalado correctamente (por ejemplo, para cambiar opciones interactivas).

</details>

### Pregunta 16

Que comando permite buscar que paquete de los repositorios (incluso no instalado) contiene un archivo determinado?

a) dpkg -S /ruta/archivo
b) apt search archivo
c) apt-file search /ruta/archivo
d) apt-cache showpkg archivo

<details><summary>Respuesta</summary>

**c) apt-file search /ruta/archivo**

`apt-file search` busca en todos los paquetes de los repositorios (instalados o no) cual contiene un archivo determinado. Requiere tener instalado el paquete `apt-file` y su base de datos actualizada con `apt-file update`. `dpkg -S` solo busca en paquetes actualmente instalados en el sistema. `apt search` busca paquetes por nombre o descripcion, no por archivos que contienen.

</details>

### Pregunta 17

Que diferencia hay entre `apt-get clean` y `apt-get autoclean`?

a) `clean` elimina solo paquetes obsoletos, `autoclean` elimina todos
b) `clean` elimina todos los .deb descargados, `autoclean` solo elimina los de versiones obsoletas
c) `clean` limpia la cache y los logs, `autoclean` solo los logs
d) No hay diferencia practica entre ambos

<details><summary>Respuesta</summary>

**b) `clean` elimina todos los .deb descargados, `autoclean` solo elimina los de versiones obsoletas**

`apt-get clean` (o `apt clean`) vacia completamente el directorio `/var/cache/apt/archives/`, eliminando todos los archivos `.deb` descargados. `apt-get autoclean` (o `apt autoclean`) es mas conservador: solo elimina los `.deb` de versiones que ya no estan disponibles en los repositorios, manteniendo los de versiones actuales. `clean` libera mas espacio pero requiere volver a descargar paquetes si se necesitan.

</details>

### Pregunta 18

Que comando muestra las dependencias inversas de un paquete, es decir, que otros paquetes dependen de el?

a) apt-cache depends paquete
b) apt-cache rdepends paquete
c) dpkg -s paquete
d) apt-cache show paquete

<details><summary>Respuesta</summary>

**b) apt-cache rdepends paquete**

`apt-cache rdepends` (reverse depends) muestra que paquetes dependen del paquete especificado. `apt-cache depends` muestra las dependencias del paquete (de que otros paquetes depende), que es la operacion inversa. `dpkg -s` muestra el estado e informacion del paquete. `apt-cache show` muestra informacion detallada como descripcion, version y dependencias.

</details>

### Pregunta 19

Que contiene el directorio /var/lib/dpkg/ en un sistema Debian?

a) Los archivos .deb descargados de los repositorios
b) La base de datos de dpkg con el estado de todos los paquetes conocidos
c) Los scripts de configuracion de apt
d) Los repositorios locales del sistema

<details><summary>Respuesta</summary>

**b) La base de datos de dpkg con el estado de todos los paquetes conocidos**

El directorio `/var/lib/dpkg/` contiene la base de datos de dpkg, incluyendo: el archivo `status` (estado de todos los paquetes conocidos), `available` (lista de paquetes disponibles), y el subdirectorio `info/` (scripts de control y archivos de configuracion de cada paquete). Esta base de datos es consultada por dpkg y apt para determinar que paquetes estan instalados.

</details>

### Pregunta 20

Que comando se puede usar para instalar un archivo .deb local resolviendo automaticamente sus dependencias desde los repositorios?

a) dpkg -i paquete.deb
b) apt install ./paquete.deb
c) apt-get install paquete.deb
d) dpkg --install --resolve paquete.deb

<details><summary>Respuesta</summary>

**b) apt install ./paquete.deb**

`apt install ./paquete.deb` (con el prefijo `./`) instala un archivo `.deb` local y resuelve automaticamente sus dependencias desde los repositorios configurados. `dpkg -i` instala el paquete pero no resuelve dependencias. `apt-get install paquete.deb` (sin `./`) buscaria un paquete con ese nombre en los repositorios. Alternativamente, se puede usar `dpkg -i paquete.deb` seguido de `apt --fix-broken install`.

</details>

### Pregunta 21

Que comando se usa para instalar un paquete .deb individual con dpkg?

<input type="text" class="fill-blank" data-answer="dpkg -i" data-alt="dpkg --install" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dpkg -i**

`dpkg -i paquete.deb` (o `dpkg --install paquete.deb`) instala un archivo de paquete .deb en el sistema. Si faltan dependencias, dpkg reportara un error y dejara el paquete en estado parcialmente instalado. Para resolver las dependencias faltantes se puede ejecutar `apt --fix-broken install`.

</details>

### Pregunta 22

Que comando elimina un paquete incluyendo todos sus archivos de configuracion con dpkg?

<input type="text" class="fill-blank" data-answer="dpkg -P" data-alt="dpkg --purge" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dpkg -P**

`dpkg -P paquete` (o `dpkg --purge paquete`) elimina el paquete junto con todos sus archivos de configuracion. A diferencia de `dpkg -r` (remove), que conserva los archivos de configuracion, purge elimina todo. El equivalente con apt es `apt purge paquete`.

</details>

### Pregunta 23

Que comando descarga la lista actualizada de paquetes disponibles desde los repositorios configurados?

<input type="text" class="fill-blank" data-answer="apt update" data-alt="apt-get update" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**apt update**

`apt update` (o `apt-get update`) descarga la informacion actualizada de los paquetes disponibles desde los repositorios configurados en `/etc/apt/sources.list` y `/etc/apt/sources.list.d/`. No instala ni actualiza ningun paquete. Se debe ejecutar antes de `apt upgrade` o `apt install` para asegurar que se dispone de la informacion mas reciente.

</details>

### Pregunta 24

Que comando busca a que paquete instalado pertenece un archivo determinado?

<input type="text" class="fill-blank" data-answer="dpkg -S" data-alt="dpkg --search" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dpkg -S**

`dpkg -S /ruta/archivo` (o `dpkg --search`) busca entre los paquetes instalados en el sistema cual proporciona el archivo especificado. Por ejemplo: `dpkg -S /usr/bin/ssh` devolvera `openssh-client: /usr/bin/ssh`. Solo busca entre paquetes instalados; para buscar en todos los repositorios se usa `apt-file search`.

</details>

### Pregunta 25

Que comando se usa para volver a ejecutar los scripts de configuracion post-instalacion de un paquete ya instalado?

<input type="text" class="fill-blank" data-answer="dpkg-reconfigure" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**dpkg-reconfigure**

`dpkg-reconfigure paquete` re-ejecuta los scripts de configuracion post-instalacion de un paquete ya instalado, permitiendo modificar configuraciones interactivas. Usos comunes: `dpkg-reconfigure tzdata` (zona horaria), `dpkg-reconfigure locales` (idiomas del sistema), `dpkg-reconfigure keyboard-configuration` (teclado). No debe confundirse con `dpkg --configure -a`, que completa la configuracion de paquetes que quedaron en estado pendiente.

</details>
