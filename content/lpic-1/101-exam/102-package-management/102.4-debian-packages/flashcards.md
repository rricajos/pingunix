---
title: "102.4 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "102.4"
---

# Flashcards: 102.4 - Gestion Paquetes Debian

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `dpkg -r paquete` y `dpkg -P paquete`?

</div>
<div class="flashcard-back">

**R:** b) `-r` desinstala conservando los archivos de configuracion, `-P` elimina todo incluyendo la configuracion. `dpkg -r` (remove) elimina los archivos del programa pero conserva los archivos de configuracion, permitiendo reinstalar el paquete y recuperar la configuracion anterior. El paquete aparecera con estado `rc` en `dpkg -l`. `dpkg -P` (purge) elimina todo: archivos del programa y archivos de configuracion. Los equivalentes con apt son `apt remove` y `apt purge` respectivamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-002">
<div class="flashcard-front">

**P:** Necesitas saber que paquete instalo el archivo `/usr/bin/vim` en tu sistema. Que comando usarias?

</div>
<div class="flashcard-back">

**R:** c) `dpkg -S /usr/bin/vim`. `dpkg -S` busca entre los paquetes instalados en el sistema cual proporciona un archivo determinado. `apt-file search` tambien puede buscar archivos pero busca en todos los repositorios (incluso paquetes no instalados) y requiere tener su base de datos actualizada. `apt search` busca paquetes por nombre o descripcion, no por archivo. `dpkg -L` hace lo contrario: lista los archivos que pertenecen a un paquete, no busca a que paquete pertenece un archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-003">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `apt update` y `apt upgrade`?

</div>
<div class="flashcard-back">

**R:** b) `apt update` descarga las listas de paquetes disponibles y `apt upgrade` actualiza los paquetes instalados. `apt update` descarga la informacion actualizada de que paquetes estan disponibles en los repositorios configurados en `/etc/apt/sources.list`. No instala ni actualiza nada. `apt upgrade` actualiza los paquetes instalados a su version mas reciente usando esas listas. Siempre se debe ejecutar `apt update` antes de `apt upgrade`. Existe tambien `apt full-upgrade` (equivalente a `apt-get dist-upgrade`) que puede eliminar paquetes obsoletos e instalar nuevas dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-004">
<div class="flashcard-front">

**P:** Has descargado un paquete `.deb` manualmente y al ejecutar `dpkg -i paquete.deb` falla por dependencias faltantes. Cual es la forma correcta de resolver el problema?

</div>
<div class="flashcard-back">

**R:** b) Ejecutar `apt --fix-broken install` o `apt-get install -f`. Cuando `dpkg -i` falla por dependencias, el paquete queda en estado "parcialmente instalado". Al ejecutar `apt --fix-broken install` (o `apt-get install -f`), apt descarga e instala automaticamente las dependencias faltantes de los repositorios y completa la instalacion. Una alternativa mas directa es usar `apt install ./paquete.deb` (con el prefijo `./`), que resuelve dependencias automaticamente al instalar el archivo local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-005">
<div class="flashcard-front">

**P:** En la estructura del archivo `/etc/apt/sources.list`, que significa el campo `deb-src`?

</div>
<div class="flashcard-back">

**R:** b) Repositorio de codigo fuente de los paquetes. En una linea de `sources.list`, el primer campo indica el tipo: `deb` es para paquetes binarios compilados y `deb-src` es para el codigo fuente de los paquetes. Una linea completa tiene el formato: `tipo URI distribucion componentes`. Por ejemplo: `deb http://archive.ubuntu.com/ubuntu jammy main restricted`. Los componentes tipicos de Ubuntu son `main` (libre oficial), `restricted` (propietario soportado), `universe` (libre comunitario) y `multiverse` (no libre).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-006">
<div class="flashcard-front">

**P:** Que comando lista todos los archivos instalados por el paquete `openssh-server`?

</div>
<div class="flashcard-back">

**R:** c) `dpkg -L openssh-server`. `dpkg -L` (listfiles) muestra la lista completa de archivos que un paquete instalo en el sistema. `dpkg -s` muestra el estado e informacion del paquete (version, dependencias, descripcion). `dpkg -S` busca a que paquete pertenece un archivo especifico (operacion inversa). `apt-file list` tambien puede listar archivos de un paquete, pero busca en todos los repositorios y no solo en paquetes instalados, requiriendo ademas tener su base de datos actualizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `dpkg-reconfigure tzdata`?

</div>
<div class="flashcard-back">

**R:** c) Vuelve a ejecutar los scripts de configuracion post-instalacion del paquete `tzdata`. `dpkg-reconfigure` re-ejecuta los scripts de configuracion post-instalacion de un paquete ya instalado, como si el paquete se estuviera configurando por primera vez. Es util para cambiar configuraciones interactivas como la zona horaria (`tzdata`), los idiomas del sistema (`locales`) o el teclado (`keyboard-configuration`). No confundir con `dpkg --configure -a`, que intenta completar la configuracion de paquetes que quedaron en estado parcialmente configurado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-008">
<div class="flashcard-front">

**P:** En la salida de `dpkg -l`, un paquete aparece con el estado `rc`. Que significa?

</div>
<div class="flashcard-back">

**R:** b) El paquete fue eliminado pero sus archivos de configuracion aun permanecen en el sistema. El estado `rc` se compone de dos letras: `r` (desired: Remove) indica que se solicito la eliminacion, y `c` (status: Config-files) indica que los archivos de configuracion siguen presentes. Esto ocurre cuando se usa `dpkg -r` o `apt remove`. Para eliminar completamente el paquete incluyendo la configuracion residual, se debe usar `dpkg -P nombre_paquete` o `apt purge nombre_paquete`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-009">
<div class="flashcard-front">

**P:** Donde se almacenan los archivos `.deb` descargados por apt y que comando los elimina todos?

</div>
<div class="flashcard-back">

**R:** b) En `/var/cache/apt/archives/` y se eliminan con `apt clean`. Los paquetes `.deb` descargados se almacenan en `/var/cache/apt/archives/` y pueden ocupar mucho espacio con el tiempo. `apt clean` (o `apt-get clean`) elimina todos los `.deb` descargados. `apt autoclean` (o `apt-get autoclean`) es mas conservador: solo elimina los `.deb` de versiones obsoletas que ya no estan en los repositorios, conservando los de las versiones actuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-010">
<div class="flashcard-front">

**P:** Cual es la diferencia fundamental entre `dpkg` y `apt` como herramientas de gestion de paquetes?

</div>
<div class="flashcard-back">

**R:** c) `dpkg` gestiona paquetes individuales sin resolver dependencias, mientras que `apt` resuelve dependencias automaticamente. `dpkg` es la herramienta de bajo nivel del sistema de paquetes Debian: instala y desinstala archivos `.deb` individuales pero no gestiona dependencias. Si un paquete requiere otro que no esta instalado, `dpkg` simplemente reporta el error. `apt` (y `apt-get`) es la herramienta de alto nivel que trabaja con repositorios, descarga paquetes y resuelve dependencias automaticamente. Internamente, `apt` utiliza `dpkg` para la instalacion final de los paquetes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-011">
<div class="flashcard-front">

**P:** Que comando se utiliza para mostrar informacion detallada (version, dependencias, descripcion) de un paquete .deb que aun no esta instalado?

</div>
<div class="flashcard-back">

**R:** b) dpkg -I paquete.deb. `dpkg -I` (o `dpkg --info`) muestra la informacion de control de un archivo `.deb` sin instalarlo, incluyendo nombre, version, arquitectura, dependencias y descripcion. `dpkg -s` muestra informacion de paquetes ya instalados (consultando la base de datos local). `dpkg -L` lista los archivos de un paquete instalado. `dpkg -c` (o `--contents`) lista el contenido de un archivo .deb sin instalarlo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `apt upgrade` y `apt full-upgrade`?

</div>
<div class="flashcard-back">

**R:** b) `apt upgrade` nunca elimina paquetes ni instala nuevos, mientras que `apt full-upgrade` puede hacerlo para resolver dependencias. `apt upgrade` actualiza los paquetes instalados pero si una actualizacion requiere eliminar un paquete o instalar uno nuevo, la omite. `apt full-upgrade` (equivalente a `apt-get dist-upgrade`) realiza una actualizacion mas agresiva, pudiendo eliminar paquetes obsoletos e instalar nuevos paquetes si es necesario para resolver conflictos de dependencias. Esto es util cuando hay cambios mayores de dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-013">
<div class="flashcard-front">

**P:** Que directorio contiene archivos de repositorios adicionales de terceros en el sistema APT?

</div>
<div class="flashcard-back">

**R:** b) /etc/apt/sources.list.d/. El directorio `/etc/apt/sources.list.d/` contiene archivos adicionales de configuracion de repositorios, con extension `.list` o `.sources`. Cada archivo puede definir uno o mas repositorios de terceros (como Docker, Google Chrome, etc.). Esto permite organizar los repositorios de forma modular sin modificar el archivo principal `/etc/apt/sources.list`. `/var/lib/apt/lists/` contiene las listas descargadas de paquetes disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-014">
<div class="flashcard-front">

**P:** Que componente del repositorio de Ubuntu contiene software libre mantenido por la comunidad?

</div>
<div class="flashcard-back">

**R:** c) universe. En Ubuntu, `universe` contiene software libre mantenido por la comunidad (no oficialmente soportado por Canonical). `main` contiene software libre soportado oficialmente. `restricted` contiene controladores propietarios soportados. `multiverse` contiene software no libre (propietario). En Debian, los componentes son `main` (libre), `contrib` (libre que depende de no libre) y `non-free` (propietario).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-015">
<div class="flashcard-front">

**P:** Que comando configura paquetes que quedaron en estado parcialmente instalado o con configuracion pendiente?

</div>
<div class="flashcard-back">

**R:** b) dpkg --configure -a. `dpkg --configure -a` intenta completar la configuracion de todos los paquetes que quedaron en estado parcialmente configurado o pendiente de configuracion (por ejemplo, despues de un fallo durante la instalacion). `apt --fix-broken install` resuelve dependencias rotas instalando paquetes faltantes. `dpkg-reconfigure` re-ejecuta la configuracion de un paquete ya instalado correctamente (por ejemplo, para cambiar opciones interactivas).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-016">
<div class="flashcard-front">

**P:** Que comando permite buscar que paquete de los repositorios (incluso no instalado) contiene un archivo determinado?

</div>
<div class="flashcard-back">

**R:** c) apt-file search /ruta/archivo. `apt-file search` busca en todos los paquetes de los repositorios (instalados o no) cual contiene un archivo determinado. Requiere tener instalado el paquete `apt-file` y su base de datos actualizada con `apt-file update`. `dpkg -S` solo busca en paquetes actualmente instalados en el sistema. `apt search` busca paquetes por nombre o descripcion, no por archivos que contienen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-017">
<div class="flashcard-front">

**P:** Que diferencia hay entre `apt-get clean` y `apt-get autoclean`?

</div>
<div class="flashcard-back">

**R:** b) `clean` elimina todos los .deb descargados, `autoclean` solo elimina los de versiones obsoletas. `apt-get clean` (o `apt clean`) vacia completamente el directorio `/var/cache/apt/archives/`, eliminando todos los archivos `.deb` descargados. `apt-get autoclean` (o `apt autoclean`) es mas conservador: solo elimina los `.deb` de versiones que ya no estan disponibles en los repositorios, manteniendo los de versiones actuales. `clean` libera mas espacio pero requiere volver a descargar paquetes si se necesitan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-018">
<div class="flashcard-front">

**P:** Que comando muestra las dependencias inversas de un paquete, es decir, que otros paquetes dependen de el?

</div>
<div class="flashcard-back">

**R:** b) apt-cache rdepends paquete. `apt-cache rdepends` (reverse depends) muestra que paquetes dependen del paquete especificado. `apt-cache depends` muestra las dependencias del paquete (de que otros paquetes depende), que es la operacion inversa. `dpkg -s` muestra el estado e informacion del paquete. `apt-cache show` muestra informacion detallada como descripcion, version y dependencias.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-019">
<div class="flashcard-front">

**P:** Que contiene el directorio /var/lib/dpkg/ en un sistema Debian?

</div>
<div class="flashcard-back">

**R:** b) La base de datos de dpkg con el estado de todos los paquetes conocidos. El directorio `/var/lib/dpkg/` contiene la base de datos de dpkg, incluyendo: el archivo `status` (estado de todos los paquetes conocidos), `available` (lista de paquetes disponibles), y el subdirectorio `info/` (scripts de control y archivos de configuracion de cada paquete). Esta base de datos es consultada por dpkg y apt para determinar que paquetes estan instalados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-020">
<div class="flashcard-front">

**P:** Que comando se puede usar para instalar un archivo .deb local resolviendo automaticamente sus dependencias desde los repositorios?

</div>
<div class="flashcard-back">

**R:** b) apt install ./paquete.deb. `apt install ./paquete.deb` (con el prefijo `./`) instala un archivo `.deb` local y resuelve automaticamente sus dependencias desde los repositorios configurados. `dpkg -i` instala el paquete pero no resuelve dependencias. `apt-get install paquete.deb` (sin `./`) buscaria un paquete con ese nombre en los repositorios. Alternativamente, se puede usar `dpkg -i paquete.deb` seguido de `apt --fix-broken install`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-021">
<div class="flashcard-front">

**P:** Que comando se usa para instalar un paquete .deb individual con dpkg?

</div>
<div class="flashcard-back">

**R:** dpkg -i. `dpkg -i paquete.deb` (o `dpkg --install paquete.deb`) instala un archivo de paquete .deb en el sistema. Si faltan dependencias, dpkg reportara un error y dejara el paquete en estado parcialmente instalado. Para resolver las dependencias faltantes se puede ejecutar `apt --fix-broken install`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-022">
<div class="flashcard-front">

**P:** Que comando elimina un paquete incluyendo todos sus archivos de configuracion con dpkg?

</div>
<div class="flashcard-back">

**R:** dpkg -P. `dpkg -P paquete` (o `dpkg --purge paquete`) elimina el paquete junto con todos sus archivos de configuracion. A diferencia de `dpkg -r` (remove), que conserva los archivos de configuracion, purge elimina todo. El equivalente con apt es `apt purge paquete`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-023">
<div class="flashcard-front">

**P:** Que comando descarga la lista actualizada de paquetes disponibles desde los repositorios configurados?

</div>
<div class="flashcard-back">

**R:** apt update. `apt update` (o `apt-get update`) descarga la informacion actualizada de los paquetes disponibles desde los repositorios configurados en `/etc/apt/sources.list` y `/etc/apt/sources.list.d/`. No instala ni actualiza ningun paquete. Se debe ejecutar antes de `apt upgrade` o `apt install` para asegurar que se dispone de la informacion mas reciente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-024">
<div class="flashcard-front">

**P:** Que comando busca a que paquete instalado pertenece un archivo determinado?

</div>
<div class="flashcard-back">

**R:** dpkg -S. `dpkg -S /ruta/archivo` (o `dpkg --search`) busca entre los paquetes instalados en el sistema cual proporciona el archivo especificado. Por ejemplo: `dpkg -S /usr/bin/ssh` devolvera `openssh-client: /usr/bin/ssh`. Solo busca entre paquetes instalados; para buscar en todos los repositorios se usa `apt-file search`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-025">
<div class="flashcard-front">

**P:** Que comando se usa para volver a ejecutar los scripts de configuracion post-instalacion de un paquete ya instalado?

</div>
<div class="flashcard-back">

**R:** dpkg-reconfigure. `dpkg-reconfigure paquete` re-ejecuta los scripts de configuracion post-instalacion de un paquete ya instalado, permitiendo modificar configuraciones interactivas. Usos comunes: `dpkg-reconfigure tzdata` (zona horaria), `dpkg-reconfigure locales` (idiomas del sistema), `dpkg-reconfigure keyboard-configuration` (teclado). No debe confundirse con `dpkg --configure -a`, que completa la configuracion de paquetes que quedaron en estado pendiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `apt-get dist-upgrade` no significa necesariamente actualizar la distribucion co...

</div>
<div class="flashcard-back">

**R:** `apt-get dist-upgrade` no significa necesariamente actualizar la distribucion completa. Solo significa que permite gestiones de dependencias mas agresivas (eliminar e instalar paquetes) durante la actualizacion. `apt full-upgrade` es el equivalente moderno.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `apt-get purge` y `apt-get remove --purge` son equivalentes. Ambos eliminan los ...

</div>
<div class="flashcard-back">

**R:** `apt-get purge` y `apt-get remove --purge` son equivalentes. Ambos eliminan los archivos de configuracion del paquete. Con `remove` (sin purge), los archivos de configuracion se conservan y el paquete aparece con estado `rc` en `dpkg -l`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `dpkg`?

</div>
<div class="flashcard-back">

**R:** Instala/desinstala paquetes .deb individuales. No resuelve dependencias

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `rc`?

</div>
<div class="flashcard-back">

**R:** Eliminado, archivos de configuracion presentes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `iU`?

</div>
<div class="flashcard-back">

**R:** Instalado, pendiente de desempaquetar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `iF`?

</div>
<div class="flashcard-back">

**R:** Instalado, configuracion fallida

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `hi`?

</div>
<div class="flashcard-back">

**R:** Instalado con "hold" (retenido, no se actualiza)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-033">
<div class="flashcard-front">

**P:** Necesitas encontrar que paquete proporciona el archivo `/usr/bin/convert`, pero ese paquete no esta instalado en tu sistema. `dpkg -S` no devuelve resultados. Que secuencia de comandos ejecutarias para encontrar el paquete correcto e instalarlo?

</div>
<div class="flashcard-back">

**R:** Primero `apt-file update` para descargar la base de datos de archivos de todos los repositorios, luego `apt-file search /usr/bin/convert` para buscar el paquete que contiene ese archivo (devolveria `imagemagick`), y finalmente `apt install imagemagick`. `apt-file search` busca en **todos los paquetes de los repositorios**, incluso los no instalados, a diferencia de `dpkg -S` que solo busca entre paquetes instalados. Tambien se puede usar `apt-file list paquete` para ver todos los archivos que proporciona un paquete sin instalarlo. Es necesario ejecutar `apt-file update` periodicamente para mantener su base de datos actualizada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-034">
<div class="flashcard-front">

**P:** Un servidor Debian muestra la hora en UTC pero deberia estar en Europe/Madrid. El paquete `tzdata` ya esta instalado. Completa el comando para cambiar la zona horaria: `dpkg-________ tzdata`

</div>
<div class="flashcard-back">

**R:** `dpkg-reconfigure tzdata`. El comando `dpkg-reconfigure` re-ejecuta los scripts de configuracion post-instalacion de un paquete ya instalado, presentando de nuevo las opciones interactivas de configuracion. Usos frecuentes en el examen: `dpkg-reconfigure tzdata` (zona horaria), `dpkg-reconfigure locales` (idiomas del sistema), `dpkg-reconfigure keyboard-configuration` (distribucion del teclado). No confundir con `dpkg --configure -a`, que completa la configuracion de paquetes que quedaron en estado parcialmente configurado tras un fallo. `dpkg-reconfigure` solo funciona con paquetes que ya estan completamente instalados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-035">
<div class="flashcard-front">

**P:** Al ejecutar `apt update` recibes el error `NO_PUBKEY 3B4FE6ACC0B21F32` para un repositorio de terceros que acabas de anadir. Que comando importa la clave GPG faltante y donde debe almacenarse en sistemas modernos?

</div>
<div class="flashcard-back">

**R:** En sistemas modernos se descarga la clave y se almacena en `/usr/share/keyrings/`: `curl -fsSL https://ejemplo.com/clave.gpg | gpg --dearmor -o /usr/share/keyrings/repo-nombre.gpg`. Luego en el archivo `.list` se referencia con `[signed-by=/usr/share/keyrings/repo-nombre.gpg]`. El metodo antiguo `apt-key add` anade la clave a un llavero global (`/etc/apt/trusted.gpg`) donde la clave confia en **todos** los repositorios, lo cual es inseguro. `apt-key` esta obsoleto desde Debian 11 / Ubuntu 22.04. Sin claves GPG validas, APT rechaza instalar paquetes del repositorio para evitar paquetes manipulados o no autenticados. El directorio `/etc/apt/trusted.gpg.d/` tambien acepta claves pero sin el aislamiento por repositorio que ofrece `signed-by`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.4">
</div>

<div class="flashcard" data-id="102.4-fc-036">
<div class="flashcard-front">

**P:** En el examen LPIC-1, cual de estas afirmaciones es la trampa mas comun sobre gestion de paquetes Debian? a) `dpkg -S` y `apt-file search` hacen lo mismo b) `apt remove` elimina los archivos de configuracion c) `apt-get dist-upgrade` actualiza a la siguiente version de la distribucion d) `dpkg --configure -a` y `dpkg-reconfigure` son equivalentes

</div>
<div class="flashcard-back">

**R:** Todas son trampas clasicas del examen. a) FALSO: `dpkg -S` solo busca en paquetes instalados; `apt-file search` busca en todos los repositorios. b) FALSO: `apt remove` conserva la configuracion (estado `rc`); para eliminarla se usa `apt purge`. c) FALSO: `apt-get dist-upgrade` (equivalente a `apt full-upgrade`) solo hace actualizaciones mas agresivas permitiendo eliminar/instalar paquetes; no cambia la version de la distribucion. d) FALSO: `dpkg --configure -a` completa la configuracion de paquetes en estado pendiente; `dpkg-reconfigure` re-ejecuta la configuracion de paquetes ya instalados correctamente. Otras trampas frecuentes: confundir `dpkg -I` (info de un .deb no instalado) con `dpkg -i` (instalar), y olvidar el `./` en `apt install ./paquete.deb`.

</div>
</div>

---

