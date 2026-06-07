---
title: "102.5 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "102.5"
---

# Flashcards: 102.5 - Rpm Y Yum

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `rpm -i`, `rpm -U` y `rpm -F`?

</div>
<div class="flashcard-back">

**R:** b) `-i` solo instala (da error si existe), `-U` instala o actualiza, `-F` solo actualiza si ya esta instalado. `rpm -i` (install) instala un paquete nuevo; si ya esta instalado, da error. `rpm -U` (upgrade) es la opcion mas versatil: instala si no existe y actualiza si ya existe. `rpm -F` (freshen) solo actualiza paquetes que ya estan instalados; si el paquete no existe, no hace nada. Por esto, `rpm -Uvh` es la opcion mas recomendada para uso general, ya que cubre ambos escenarios (instalacion y actualizacion).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-002">
<div class="flashcard-front">

**P:** Necesitas saber que paquete RPM instalo el archivo `/etc/httpd/conf/httpd.conf`. Que comando usarias?

</div>
<div class="flashcard-back">

**R:** c) `rpm -qf /etc/httpd/conf/httpd.conf`. El flag `-qf` (query file) busca a que paquete instalado pertenece un archivo determinado. Es el equivalente en RPM a `dpkg -S` en Debian. `rpm -ql` lista los archivos de un paquete (no busca por archivo). `rpm -qi` muestra informacion detallada de un paquete. `yum search` busca paquetes por nombre o descripcion en los repositorios, no por archivo. Para buscar que paquete proporciona un archivo en los repositorios (no solo instalados), se usa `yum provides`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-003">
<div class="flashcard-front">

**P:** Al ejecutar `rpm -V httpd` obtienes la salida `S.5....T.  c /etc/httpd/conf/httpd.conf`. Que significa `S`, `5` y `T`?

</div>
<div class="flashcard-back">

**R:** b) `S` = tamano cambiado, `5` = checksum MD5 cambiado, `T` = fecha de modificacion cambiada. En la salida de `rpm -V`, cada posicion indica un tipo de verificacion: S (Size/tamano), M (Mode/permisos), 5 (MD5 checksum), D (Device), L (Link), U (User), G (Group), T (Time/fecha). Un punto (`.`) significa sin cambios. La marca `c` indica que es un archivo de configuracion. Es normal que los archivos de configuracion muestren cambios porque el administrador los modifica habitualmente. Seria preocupante si estos cambios aparecieran en archivos binarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-004">
<div class="flashcard-front">

**P:** Como puedes ver los archivos que contiene un paquete `.rpm` SIN instalarlo?

</div>
<div class="flashcard-back">

**R:** b) `rpm -qpl paquete.rpm`. El flag `-p` indica que se consulta un archivo `.rpm` en lugar de un paquete instalado en el sistema. Combinado con `-ql` (query list), muestra los archivos contenidos en el paquete sin necesidad de instalarlo. Sin el flag `-p`, `rpm -ql` solo funciona con paquetes ya instalados. Otros flags utiles con `-p` son: `rpm -qpi` (informacion), `rpm -qpR` (dependencias) y `rpm -qpc` (archivos de configuracion). Otra alternativa es usar `rpm2cpio paquete.rpm | cpio -t`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-005">
<div class="flashcard-front">

**P:** Que comando de yum/dnf busca que paquete proporciona un archivo determinado, incluso si el paquete no esta instalado?

</div>
<div class="flashcard-back">

**R:** c) `yum provides /usr/bin/wget`. `yum provides` (o `dnf provides`) busca en todos los repositorios configurados que paquete proporciona un archivo determinado, sin necesidad de tenerlo instalado. Tambien acepta patrones con comodines: `yum provides "*/wget"`. Para paquetes ya instalados se puede usar `rpm -qf`. El equivalente en el mundo Debian es `apt-file search` para repositorios y `dpkg -S` para paquetes instalados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-006">
<div class="flashcard-front">

**P:** En un archivo de repositorio de `/etc/yum.repos.d/`, que significa el campo `gpgcheck=1`?

</div>
<div class="flashcard-back">

**R:** b) Se verificaran las firmas GPG de los paquetes descargados. El campo `gpgcheck=1` indica que yum/dnf verificara la firma GPG de cada paquete descargado de ese repositorio para garantizar su autenticidad e integridad. La clave GPG publica para la verificacion se especifica en el campo `gpgkey`. Si se establece `gpgcheck=0`, no se verifican firmas (no recomendado en produccion). El campo `enabled=1/0` controla si el repositorio esta activo o no, que es una configuracion independiente de la verificacion GPG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-007">
<div class="flashcard-front">

**P:** Cual es el equivalente en el mundo Debian de `rpm -qa` (listar todos los paquetes instalados)?

</div>
<div class="flashcard-back">

**R:** b) `dpkg -l`. `rpm -qa` lista todos los paquetes RPM instalados en el sistema. Su equivalente directo en Debian es `dpkg -l`, que lista todos los paquetes con su estado, version y descripcion breve. Tambien se puede usar `apt list --installed` para una salida similar. `dpkg -S` busca a que paquete pertenece un archivo (equivalente a `rpm -qf`). `apt-cache search` busca paquetes por nombre o descripcion en los repositorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-008">
<div class="flashcard-front">

**P:** Que herramienta permite extraer archivos de un paquete `.rpm` sin instalarlo?

</div>
<div class="flashcard-back">

**R:** b) `rpm2cpio paquete.rpm | cpio -idmv`. `rpm2cpio` convierte un paquete `.rpm` al formato cpio, que luego se extrae con el comando `cpio`. Los flags de cpio son: `i` (extraer), `d` (crear directorios), `m` (mantener fechas de modificacion), `v` (verbose). Para solo listar el contenido sin extraer se usa `cpio -t`. Esta herramienta es muy util para recuperar archivos de configuracion originales de un paquete sin tener que reinstalarlo completamente. Tambien se puede descargar el RPM con `yumdownloader` o `dnf download` si no se tiene el archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-009">
<div class="flashcard-front">

**P:** Cual es la principal diferencia entre `yum` y `dnf`?

</div>
<div class="flashcard-back">

**R:** b) `dnf` usa el resolvedor de dependencias `libsolv` y tiene mejor rendimiento que `yum`. DNF (Dandified YUM) es el sucesor de YUM, usado en Fedora y RHEL/CentOS 8+. La sintaxis es practicamente identica, pero DNF utiliza `libsolv` para la resolucion de dependencias (mas rapido y preciso), tiene mejor rendimiento general y usa Python 3. La configuracion principal de DNF esta en `/etc/dnf/dnf.conf` aunque comparte el directorio `/etc/yum.repos.d/` para los repositorios. En muchas distribuciones modernas, `yum` es simplemente un enlace simbolico a `dnf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-010">
<div class="flashcard-front">

**P:** Que gestor de paquetes de alto nivel se utiliza en distribuciones openSUSE/SLES?

</div>
<div class="flashcard-back">

**R:** c) `zypper`. `zypper` es el gestor de paquetes de alto nivel para distribuciones SUSE (openSUSE y SLES). Utiliza RPM como formato de paquetes de bajo nivel, al igual que yum/dnf. Los comandos principales de zypper son: `zypper install` (o `zypper in`) para instalar, `zypper remove` (o `zypper rm`) para desinstalar, `zypper search` (o `zypper se`) para buscar, `zypper update` (o `zypper up`) para actualizar, y `zypper refresh` (o `zypper ref`) para actualizar la lista de repositorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-011">
<div class="flashcard-front">

**P:** Que comando de `rpm` verifica la integridad de todos los paquetes instalados en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `rpm -Va`. `rpm -V` (verify) verifica la integridad de un paquete instalado comparando los archivos actuales con la informacion almacenada en la base de datos RPM. Al anadir `a` (all), se verifican todos los paquetes instalados en el sistema. `rpm -qa` lista todos los paquetes instalados pero no verifica su integridad. `rpm -K` verifica la firma GPG de un archivo `.rpm`, no de paquetes instalados. `rpm -qla` no es una combinacion valida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-012">
<div class="flashcard-front">

**P:** Cual es la funcion del comando `rpm -F paquete.rpm`?

</div>
<div class="flashcard-back">

**R:** c) Solo actualiza el paquete si ya esta instalado; si no existe, no hace nada. `rpm -F` (freshen) es una opcion que solo actualiza paquetes que ya estan instalados en el sistema. Si el paquete no esta previamente instalado, el comando simplemente no hace nada (no da error). Esto es util cuando se tienen varios archivos `.rpm` y solo se quieren actualizar los que ya estan presentes. En cambio, `rpm -U` instala el paquete si no existe y lo actualiza si ya esta instalado, siendo la opcion mas versatil.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-013">
<div class="flashcard-front">

**P:** Donde se almacenan los archivos de configuracion de repositorios en sistemas que usan yum o dnf?

</div>
<div class="flashcard-back">

**R:** b) `/etc/yum.repos.d/`. Los archivos de configuracion de repositorios para yum y dnf se almacenan en `/etc/yum.repos.d/` con extension `.repo`. Cada archivo puede contener la definicion de uno o varios repositorios con campos como `baseurl`, `enabled`, `gpgcheck` y `gpgkey`. Tanto yum como dnf comparten este mismo directorio de repositorios. La opcion A corresponde al sistema Debian/Ubuntu. La base de datos RPM en `/var/lib/rpm/` almacena informacion de paquetes instalados, no repositorios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-014">
<div class="flashcard-front">

**P:** Un administrador quiere deshacer la ultima transaccion realizada con yum que instalo un paquete incorrecto. Que comando debe usar?

</div>
<div class="flashcard-back">

**R:** d) `yum history undo <id>`. `yum history undo <id>` deshace una transaccion especifica identificada por su numero de ID. Primero se puede consultar el historial con `yum history` para ver las transacciones realizadas y obtener el ID correspondiente. `yum history info <id>` muestra los detalles de una transaccion. Los comandos `yum rollback last` y `yum undo` no son sintaxis validas. Este mecanismo tambien funciona con `dnf history undo <id>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-015">
<div class="flashcard-front">

**P:** Que comando de zypper se utiliza para actualizar la lista de paquetes disponibles desde los repositorios configurados?

</div>
<div class="flashcard-back">

**R:** b) `zypper refresh`. `zypper refresh` (abreviado `zypper ref`) actualiza los metadatos de los repositorios configurados, descargando la informacion mas reciente sobre paquetes disponibles. Esto es equivalente a `apt update` en Debian/Ubuntu. `zypper update` (o `zypper up`) actualiza los paquetes instalados, no los metadatos de repositorios. En yum/dnf la actualizacion de metadatos se realiza automaticamente al ejecutar comandos, mientras que en zypper es un paso explicito.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-016">
<div class="flashcard-front">

**P:** Que comando muestra los scripts que se ejecutan antes y despues de la instalacion de un paquete RPM instalado?

</div>
<div class="flashcard-back">

**R:** b) `rpm -q --scripts paquete`. `rpm -q --scripts paquete` muestra los scripts de pre-instalacion, post-instalacion, pre-desinstalacion y post-desinstalacion asociados a un paquete instalado. Estos scripts se ejecutan automaticamente durante las operaciones de instalacion o desinstalacion. Para consultar los scripts de un archivo `.rpm` sin instalarlo, se anade el flag `-p`: `rpm -qp --scripts paquete.rpm`. Las demas opciones no tienen la sintaxis correcta para esta consulta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-017">
<div class="flashcard-front">

**P:** Que diferencia existe entre `yum remove` y `yum erase`?

</div>
<div class="flashcard-back">

**R:** c) Son equivalentes, ambos desinstalan el paquete y sus archivos. En yum, `remove` y `erase` son sinonimos y realizan exactamente la misma operacion: desinstalan el paquete especificado del sistema. A diferencia del mundo Debian donde `dpkg -r` y `dpkg -P` (purge) tienen comportamientos distintos respecto a los archivos de configuracion, en RPM no existe esta distincion. RPM siempre elimina los archivos del paquete, aunque puede renombrar archivos de configuracion modificados a `.rpmsave`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-018">
<div class="flashcard-front">

**P:** En la salida de `rpm -V`, que indica el caracter `M` en la posicion correspondiente?

</div>
<div class="flashcard-back">

**R:** c) Los permisos o el tipo del archivo han cambiado. En la verificacion con `rpm -V`, cada posicion del resultado indica un tipo de cambio: `S` (tamano), `M` (permisos/modo), `5` (checksum MD5), `D` (dispositivo), `L` (enlace simbolico), `U` (usuario propietario), `G` (grupo propietario), `T` (fecha de modificacion). El caracter `M` se refiere a Mode, es decir, los permisos del archivo o su tipo han sido modificados respecto al estado original del paquete. Un punto (`.`) indica que no hay cambios en esa posicion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-019">
<div class="flashcard-front">

**P:** Que comando de dnf permite habilitar un repositorio que esta desactivado?

</div>
<div class="flashcard-back">

**R:** b) `dnf config-manager --set-enabled repo_id`. `dnf config-manager` es una herramienta exclusiva de DNF para gestionar repositorios desde la linea de comandos. Con `--set-enabled` se habilita un repositorio y con `--set-disabled` se deshabilita. Tambien permite anadir repositorios con `--add-repo URL`. En yum, la gestion de repositorios se hacia editando directamente los archivos `.repo` en `/etc/yum.repos.d/`. En zypper, el equivalente seria `zypper modifyrepo -e alias`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-020">
<div class="flashcard-front">

**P:** Un administrador necesita instalar un grupo de paquetes de desarrollo en un sistema CentOS. Cual es el comando correcto?

</div>
<div class="flashcard-back">

**R:** b) `yum groupinstall "Development Tools"`. `yum groupinstall` (o `yum group install`) instala un grupo completo de paquetes relacionados. "Development Tools" es un grupo comun que incluye compiladores como `gcc`, `make` y otras herramientas de desarrollo. Se puede ver la lista de grupos disponibles con `yum grouplist` y la informacion de un grupo con `yum groupinfo "Development Tools"`. En dnf la sintaxis es identica: `dnf group install "Development Tools"`. Los nombres de grupo suelen ir entre comillas porque contienen espacios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-021">
<div class="flashcard-front">

**P:** Que comando usarias para listar los archivos de configuracion de un paquete RPM instalado?

</div>
<div class="flashcard-back">

**R:** rpm -qc paquete. El flag `-qc` combina la consulta (`-q`) con la opcion de archivos de configuracion (`-c`), mostrando solo los archivos de configuracion asociados al paquete especificado. De forma similar, `-qd` muestra los archivos de documentacion y `-ql` muestra todos los archivos del paquete. Para consultar un archivo `.rpm` sin instalar, se anade `-p`: `rpm -qpc paquete.rpm`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-022">
<div class="flashcard-front">

**P:** Que comando usarias para importar una clave GPG de un repositorio en un sistema RPM?

</div>
<div class="flashcard-back">

**R:** rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY. `rpm --import` se utiliza para importar claves publicas GPG al llavero de RPM, lo que permite verificar las firmas de los paquetes descargados. La ruta tipica de las claves GPG en sistemas Red Hat es `/etc/pki/rpm-gpg/`. Una vez importada la clave, `rpm -K paquete.rpm` o `rpm --checksig paquete.rpm` pueden verificar la firma del paquete contra la clave importada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-023">
<div class="flashcard-front">

**P:** Que comando usarias para ver el contenido de un paquete `.rpm` sin instalarlo, utilizando `rpm2cpio`?

</div>
<div class="flashcard-back">

**R:** rpm2cpio paquete.rpm | cpio -t. `rpm2cpio` convierte un paquete `.rpm` al formato cpio, y `cpio -t` lista el contenido del archivo cpio sin extraerlo. Para extraer los archivos se usaria `cpio -idmv` en lugar de `-t`. Esta tecnica es util para inspeccionar el contenido de un paquete antes de instalarlo o para recuperar archivos especificos sin necesidad de una instalacion completa.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-024">
<div class="flashcard-front">

**P:** Que comando de yum usarias para buscar que paquete proporciona el archivo `/usr/bin/wget`?

</div>
<div class="flashcard-back">

**R:** yum provides /usr/bin/wget. `yum provides` busca en todos los repositorios configurados que paquete contiene el archivo especificado, incluso si el paquete no esta instalado. Tambien acepta comodines: `yum provides "*/wget"`. En dnf la sintaxis es identica: `dnf provides /usr/bin/wget`. El equivalente en sistemas Debian es `apt-file search`. Para paquetes ya instalados se puede usar `rpm -qf /usr/bin/wget`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-025">
<div class="flashcard-front">

**P:** Que comando limpias toda la cache de yum (metadatos y paquetes descargados)?

</div>
<div class="flashcard-back">

**R:** yum clean all. `yum clean all` elimina toda la cache de yum, incluyendo los paquetes descargados, los metadatos de repositorios, las cabeceras y otros datos almacenados. Opciones mas especificas incluyen `yum clean packages` (solo paquetes) y `yum clean metadata` (solo metadatos). Despues de limpiar la cache, se puede regenerar con `yum makecache`. En dnf el comando equivalente es `dnf clean all`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `dnf config-manager` es una herramienta exclusiva de DNF para gestionar reposito...

</div>
<div class="flashcard-back">

**R:** `dnf config-manager` es una herramienta exclusiva de DNF para gestionar repositorios desde la linea de comandos. En YUM, la gestion de repositorios se hacia editando directamente los archivos `.repo` en `/etc/yum.repos.d/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `-U`?

</div>
<div class="flashcard-back">

**R:** Actualizar o instalar (upgrade)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `-F`?

</div>
<div class="flashcard-back">

**R:** Actualizar solo si existe (freshen)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `-h`?

</div>
<div class="flashcard-back">

**R:** Mostrar barra de progreso (hash marks)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `--nodeps`?

</div>
<div class="flashcard-back">

**R:** Ignorar dependencias (peligroso)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `--force`?

</div>
<div class="flashcard-back">

**R:** Forzar instalacion (peligroso)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-032">
<div class="flashcard-front">

**P:** Un servidor RHEL tiene un archivo `/etc/nginx/nginx.conf` corrupto. Tienes el paquete `nginx-1.20.1-1.el8.x86_64.rpm` descargado pero NO quieres reinstalar nginx porque perderia la configuracion de otros vhosts. Como extraes SOLO el archivo de configuracion original del paquete?

</div>
<div class="flashcard-back">

**R:** `rpm2cpio nginx-1.20.1-1.el8.x86_64.rpm | cpio -idmv ./etc/nginx/nginx.conf`. `rpm2cpio` convierte el paquete `.rpm` al formato cpio (un formato de archivo tipo tar). Luego se pasa por pipe a `cpio` con los flags: `-i` (extraer), `-d` (crear directorios necesarios), `-m` (mantener fechas de modificacion), `-v` (verbose). Se puede especificar la ruta del archivo concreto a extraer. Para solo listar el contenido sin extraer se usa `cpio -t` en lugar de `-idmv`. Los archivos se extraen en el directorio actual manteniendo su estructura de rutas (se crea `./etc/nginx/nginx.conf`). Si no se tiene el RPM descargado, se puede obtener con `yumdownloader nginx` o `dnf download nginx`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-033">
<div class="flashcard-front">

**P:** Estas migrando un servidor de CentOS 7 (yum) a RHEL 9 (dnf). Un script de aprovisionamiento usa `yum install -y httpd` y `yum repolist`. Funcionaran estos comandos en RHEL 9? Donde se almacena la configuracion principal de DNF?

</div>
<div class="flashcard-back">

**R:** Si, funcionaran porque en RHEL 9 (y desde RHEL/CentOS 8+), `yum` es un enlace simbolico a `dnf`, por lo que todos los comandos yum se ejecutan realmente con DNF. La configuracion principal de DNF esta en `/etc/dnf/dnf.conf`, aunque los repositorios siguen almacenandose en `/etc/yum.repos.d/` (directorio compartido con yum por compatibilidad). Las diferencias clave de DNF sobre YUM son: usa `libsolv` como resolvedor de dependencias (mas rapido y preciso), esta escrito en Python 3 (yum usaba Python 2), soporta extensiones modulares (`dnf module`), y ofrece `dnf config-manager` para gestionar repositorios desde la linea de comandos sin editar archivos manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-034">
<div class="flashcard-front">

**P:** En un servidor openSUSE necesitas: 1) actualizar los metadatos de repositorios, 2) buscar un paquete llamado `apache2`, 3) instalarlo, y 4) actualizar todos los paquetes del sistema. Escribe los comandos de zypper equivalentes a lo que harias con `apt update`, `apt search`, `apt install` y `apt upgrade` en Debian.

</div>
<div class="flashcard-back">

**R:** 1) `zypper refresh` (o `zypper ref`) -- equivale a `apt update`. 2) `zypper search apache2` (o `zypper se apache2`) -- equivale a `apt search`. 3) `zypper install apache2` (o `zypper in apache2`) -- equivale a `apt install`. 4) `zypper update` (o `zypper up`) -- equivale a `apt upgrade`. Zypper es el gestor de alto nivel para SUSE/openSUSE y utiliza RPM como backend de bajo nivel, igual que yum/dnf en Red Hat. Otros comandos importantes: `zypper remove` (o `zypper rm`) para desinstalar, `zypper info` para ver detalles de un paquete, y `zypper addrepo URL alias` para anadir repositorios. A diferencia de yum/dnf, zypper requiere un `zypper refresh` explicito para actualizar metadatos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="102.5">
</div>

<div class="flashcard" data-id="102.5-fc-035">
<div class="flashcard-front">

**P:** TRAMPAS DEL EXAMEN 102.5: Un colega dice que `rpm -e --nodeps httpd` es seguro porque solo elimina httpd. Otro afirma que `rpm -U` y `rpm -i` hacen lo mismo. Un tercero dice que `yum remove` borra configuraciones pero `yum erase` no. Quien tiene razon?

</div>
<div class="flashcard-back">

**R:** Ninguno tiene razon, las tres afirmaciones son falsas. 1) `rpm -e --nodeps` es PELIGROSO: elimina el paquete ignorando dependencias, lo que puede romper otros paquetes que dependan de el. Nunca debe usarse en produccion. 2) `rpm -i` y `rpm -U` NO son iguales: `-i` solo instala (da error si el paquete ya existe), mientras que `-U` instala si no existe Y actualiza si ya existe. Por eso `rpm -Uvh` es la opcion recomendada. 3) `yum remove` y `yum erase` son SINONIMOS exactos, ambos hacen lo mismo. En RPM no existe la distincion `remove`/`purge` como en Debian. Otras trampas frecuentes: confundir `rpm -V` (verificar integridad) con `rpm -K` (verificar firma GPG de un .rpm); olvidar que `rpm -qf` busca paquetes instalados mientras que `yum provides` busca en repositorios; y confundir `rpm -F` (freshen, solo actualiza existentes) con `rpm -U` (upgrade, instala o actualiza).

</div>
</div>

---

