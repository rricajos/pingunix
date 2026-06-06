---
title: "102.5 - Gestion de paquetes RPM y YUM: Ejercicios"
tags:
  - lpic-1
  - examen-101
  - tema-102
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "101"
tema: "102"
subtema: "102.5"
---

# 102.5 - Gestion de paquetes RPM y YUM: Ejercicios

### Pregunta 1

Cual es la diferencia entre `rpm -i`, `rpm -U` y `rpm -F`?

a) `-i` instala o actualiza, `-U` solo instala si no existe, `-F` fuerza la instalacion
b) `-i` solo instala (da error si existe), `-U` instala o actualiza, `-F` solo actualiza si ya esta instalado
c) Los tres son equivalentes y realizan la misma operacion
d) `-i` instala desde repositorio, `-U` actualiza desde repositorio, `-F` instala desde archivo local

<details><summary>Respuesta</summary>

**b) `-i` solo instala (da error si existe), `-U` instala o actualiza, `-F` solo actualiza si ya esta instalado**

`rpm -i` (install) instala un paquete nuevo; si ya esta instalado, da error. `rpm -U` (upgrade) es la opcion mas versatil: instala si no existe y actualiza si ya existe. `rpm -F` (freshen) solo actualiza paquetes que ya estan instalados; si el paquete no existe, no hace nada. Por esto, `rpm -Uvh` es la opcion mas recomendada para uso general, ya que cubre ambos escenarios (instalacion y actualizacion).

</details>

---

### Pregunta 2

Necesitas saber que paquete RPM instalo el archivo `/etc/httpd/conf/httpd.conf`. Que comando usarias?

a) `rpm -ql /etc/httpd/conf/httpd.conf`
b) `rpm -qi httpd`
c) `rpm -qf /etc/httpd/conf/httpd.conf`
d) `yum search httpd.conf`

<details><summary>Respuesta</summary>

**c) `rpm -qf /etc/httpd/conf/httpd.conf`**

El flag `-qf` (query file) busca a que paquete instalado pertenece un archivo determinado. Es el equivalente en RPM a `dpkg -S` en Debian. `rpm -ql` lista los archivos de un paquete (no busca por archivo). `rpm -qi` muestra informacion detallada de un paquete. `yum search` busca paquetes por nombre o descripcion en los repositorios, no por archivo. Para buscar que paquete proporciona un archivo en los repositorios (no solo instalados), se usa `yum provides`.

</details>

---

### Pregunta 3

Al ejecutar `rpm -V httpd` obtienes la salida `S.5....T.  c /etc/httpd/conf/httpd.conf`. Que significa `S`, `5` y `T`?

a) `S` = seguridad comprometida, `5` = 5 modificaciones, `T` = tipo de archivo cambiado
b) `S` = tamano cambiado, `5` = checksum MD5 cambiado, `T` = fecha de modificacion cambiada
c) `S` = SUID activado, `5` = nivel 5 de alerta, `T` = transferido a otra ubicacion
d) `S` = symlink roto, `5` = 5 dependencias faltantes, `T` = temporalmente deshabilitado

<details><summary>Respuesta</summary>

**b) `S` = tamano cambiado, `5` = checksum MD5 cambiado, `T` = fecha de modificacion cambiada**

En la salida de `rpm -V`, cada posicion indica un tipo de verificacion: S (Size/tamano), M (Mode/permisos), 5 (MD5 checksum), D (Device), L (Link), U (User), G (Group), T (Time/fecha). Un punto (`.`) significa sin cambios. La marca `c` indica que es un archivo de configuracion. Es normal que los archivos de configuracion muestren cambios porque el administrador los modifica habitualmente. Seria preocupante si estos cambios aparecieran en archivos binarios.

</details>

---

### Pregunta 4

Como puedes ver los archivos que contiene un paquete `.rpm` SIN instalarlo?

a) `rpm -ql paquete.rpm`
b) `rpm -qpl paquete.rpm`
c) `rpm -qa paquete.rpm`
d) `rpm -qf paquete.rpm`

<details><summary>Respuesta</summary>

**b) `rpm -qpl paquete.rpm`**

El flag `-p` indica que se consulta un archivo `.rpm` en lugar de un paquete instalado en el sistema. Combinado con `-ql` (query list), muestra los archivos contenidos en el paquete sin necesidad de instalarlo. Sin el flag `-p`, `rpm -ql` solo funciona con paquetes ya instalados. Otros flags utiles con `-p` son: `rpm -qpi` (informacion), `rpm -qpR` (dependencias) y `rpm -qpc` (archivos de configuracion). Otra alternativa es usar `rpm2cpio paquete.rpm | cpio -t`.

</details>

---

### Pregunta 5

Que comando de yum/dnf busca que paquete proporciona un archivo determinado, incluso si el paquete no esta instalado?

a) `yum search /usr/bin/wget`
b) `yum info /usr/bin/wget`
c) `yum provides /usr/bin/wget`
d) `yum list /usr/bin/wget`

<details><summary>Respuesta</summary>

**c) `yum provides /usr/bin/wget`**

`yum provides` (o `dnf provides`) busca en todos los repositorios configurados que paquete proporciona un archivo determinado, sin necesidad de tenerlo instalado. Tambien acepta patrones con comodines: `yum provides "*/wget"`. Para paquetes ya instalados se puede usar `rpm -qf`. El equivalente en el mundo Debian es `apt-file search` para repositorios y `dpkg -S` para paquetes instalados.

</details>

---

### Pregunta 6

En un archivo de repositorio de `/etc/yum.repos.d/`, que significa el campo `gpgcheck=1`?

a) El repositorio esta habilitado y activo
b) Se verificaran las firmas GPG de los paquetes descargados
c) La clave GPG se generara automaticamente
d) El repositorio usa conexion cifrada HTTPS

<details><summary>Respuesta</summary>

**b) Se verificaran las firmas GPG de los paquetes descargados**

El campo `gpgcheck=1` indica que yum/dnf verificara la firma GPG de cada paquete descargado de ese repositorio para garantizar su autenticidad e integridad. La clave GPG publica para la verificacion se especifica en el campo `gpgkey`. Si se establece `gpgcheck=0`, no se verifican firmas (no recomendado en produccion). El campo `enabled=1/0` controla si el repositorio esta activo o no, que es una configuracion independiente de la verificacion GPG.

</details>

---

### Pregunta 7

Cual es el equivalente en el mundo Debian de `rpm -qa` (listar todos los paquetes instalados)?

a) `apt list`
b) `dpkg -l`
c) `dpkg -S`
d) `apt-cache search`

<details><summary>Respuesta</summary>

**b) `dpkg -l`**

`rpm -qa` lista todos los paquetes RPM instalados en el sistema. Su equivalente directo en Debian es `dpkg -l`, que lista todos los paquetes con su estado, version y descripcion breve. Tambien se puede usar `apt list --installed` para una salida similar. `dpkg -S` busca a que paquete pertenece un archivo (equivalente a `rpm -qf`). `apt-cache search` busca paquetes por nombre o descripcion en los repositorios.

</details>

---

### Pregunta 8

Que herramienta permite extraer archivos de un paquete `.rpm` sin instalarlo?

a) `rpm --extract paquete.rpm`
b) `rpm2cpio paquete.rpm | cpio -idmv`
c) `yum extract paquete.rpm`
d) `tar xvf paquete.rpm`

<details><summary>Respuesta</summary>

**b) `rpm2cpio paquete.rpm | cpio -idmv`**

`rpm2cpio` convierte un paquete `.rpm` al formato cpio, que luego se extrae con el comando `cpio`. Los flags de cpio son: `i` (extraer), `d` (crear directorios), `m` (mantener fechas de modificacion), `v` (verbose). Para solo listar el contenido sin extraer se usa `cpio -t`. Esta herramienta es muy util para recuperar archivos de configuracion originales de un paquete sin tener que reinstalarlo completamente. Tambien se puede descargar el RPM con `yumdownloader` o `dnf download` si no se tiene el archivo.

</details>

---

### Pregunta 9

Cual es la principal diferencia entre `yum` y `dnf`?

a) `yum` resuelve dependencias y `dnf` no
b) `dnf` usa el resolvedor de dependencias `libsolv` y tiene mejor rendimiento que `yum`
c) `yum` funciona en Fedora y `dnf` solo en CentOS
d) `dnf` no soporta grupos de paquetes a diferencia de `yum`

<details><summary>Respuesta</summary>

**b) `dnf` usa el resolvedor de dependencias `libsolv` y tiene mejor rendimiento que `yum`**

DNF (Dandified YUM) es el sucesor de YUM, usado en Fedora y RHEL/CentOS 8+. La sintaxis es practicamente identica, pero DNF utiliza `libsolv` para la resolucion de dependencias (mas rapido y preciso), tiene mejor rendimiento general y usa Python 3. La configuracion principal de DNF esta en `/etc/dnf/dnf.conf` aunque comparte el directorio `/etc/yum.repos.d/` para los repositorios. En muchas distribuciones modernas, `yum` es simplemente un enlace simbolico a `dnf`.

</details>

---

### Pregunta 10

Que gestor de paquetes de alto nivel se utiliza en distribuciones openSUSE/SLES?

a) `apt`
b) `dnf`
c) `zypper`
d) `pacman`

<details><summary>Respuesta</summary>

**c) `zypper`**

`zypper` es el gestor de paquetes de alto nivel para distribuciones SUSE (openSUSE y SLES). Utiliza RPM como formato de paquetes de bajo nivel, al igual que yum/dnf. Los comandos principales de zypper son: `zypper install` (o `zypper in`) para instalar, `zypper remove` (o `zypper rm`) para desinstalar, `zypper search` (o `zypper se`) para buscar, `zypper update` (o `zypper up`) para actualizar, y `zypper refresh` (o `zypper ref`) para actualizar la lista de repositorios.

</details>

### Pregunta 11

Que comando de `rpm` verifica la integridad de todos los paquetes instalados en el sistema?

a) `rpm -qa`
b) `rpm -Va`
c) `rpm -K`
d) `rpm -qla`

<details><summary>Respuesta</summary>

**b) `rpm -Va`**

`rpm -V` (verify) verifica la integridad de un paquete instalado comparando los archivos actuales con la informacion almacenada en la base de datos RPM. Al anadir `a` (all), se verifican todos los paquetes instalados en el sistema. `rpm -qa` lista todos los paquetes instalados pero no verifica su integridad. `rpm -K` verifica la firma GPG de un archivo `.rpm`, no de paquetes instalados. `rpm -qla` no es una combinacion valida.

</details>

### Pregunta 12

Cual es la funcion del comando `rpm -F paquete.rpm`?

a) Instala el paquete aunque ya exista una version instalada
b) Fuerza la instalacion ignorando dependencias
c) Solo actualiza el paquete si ya esta instalado; si no existe, no hace nada
d) Muestra los archivos del paquete sin instalarlo

<details><summary>Respuesta</summary>

**c) Solo actualiza el paquete si ya esta instalado; si no existe, no hace nada**

`rpm -F` (freshen) es una opcion que solo actualiza paquetes que ya estan instalados en el sistema. Si el paquete no esta previamente instalado, el comando simplemente no hace nada (no da error). Esto es util cuando se tienen varios archivos `.rpm` y solo se quieren actualizar los que ya estan presentes. En cambio, `rpm -U` instala el paquete si no existe y lo actualiza si ya esta instalado, siendo la opcion mas versatil.

</details>

### Pregunta 13

Donde se almacenan los archivos de configuracion de repositorios en sistemas que usan yum o dnf?

a) `/etc/apt/sources.list.d/`
b) `/etc/yum.repos.d/`
c) `/var/lib/rpm/repos/`
d) `/usr/share/yum/repos/`

<details><summary>Respuesta</summary>

**b) `/etc/yum.repos.d/`**

Los archivos de configuracion de repositorios para yum y dnf se almacenan en `/etc/yum.repos.d/` con extension `.repo`. Cada archivo puede contener la definicion de uno o varios repositorios con campos como `baseurl`, `enabled`, `gpgcheck` y `gpgkey`. Tanto yum como dnf comparten este mismo directorio de repositorios. La opcion A corresponde al sistema Debian/Ubuntu. La base de datos RPM en `/var/lib/rpm/` almacena informacion de paquetes instalados, no repositorios.

</details>

### Pregunta 14

Un administrador quiere deshacer la ultima transaccion realizada con yum que instalo un paquete incorrecto. Que comando debe usar?

a) `yum rollback last`
b) `yum history undo last`
c) `yum undo`
d) `yum history undo <id>`

<details><summary>Respuesta</summary>

**d) `yum history undo <id>`**

`yum history undo <id>` deshace una transaccion especifica identificada por su numero de ID. Primero se puede consultar el historial con `yum history` para ver las transacciones realizadas y obtener el ID correspondiente. `yum history info <id>` muestra los detalles de una transaccion. Los comandos `yum rollback last` y `yum undo` no son sintaxis validas. Este mecanismo tambien funciona con `dnf history undo <id>`.

</details>

### Pregunta 15

Que comando de zypper se utiliza para actualizar la lista de paquetes disponibles desde los repositorios configurados?

a) `zypper update`
b) `zypper refresh`
c) `zypper install --refresh`
d) `zypper repos --update`

<details><summary>Respuesta</summary>

**b) `zypper refresh`**

`zypper refresh` (abreviado `zypper ref`) actualiza los metadatos de los repositorios configurados, descargando la informacion mas reciente sobre paquetes disponibles. Esto es equivalente a `apt update` en Debian/Ubuntu. `zypper update` (o `zypper up`) actualiza los paquetes instalados, no los metadatos de repositorios. En yum/dnf la actualizacion de metadatos se realiza automaticamente al ejecutar comandos, mientras que en zypper es un paso explicito.

</details>

### Pregunta 16

Que comando muestra los scripts que se ejecutan antes y despues de la instalacion de un paquete RPM instalado?

a) `rpm -ql --scripts paquete`
b) `rpm -q --scripts paquete`
c) `rpm -qi --pre paquete`
d) `rpm -qp --triggers paquete`

<details><summary>Respuesta</summary>

**b) `rpm -q --scripts paquete`**

`rpm -q --scripts paquete` muestra los scripts de pre-instalacion, post-instalacion, pre-desinstalacion y post-desinstalacion asociados a un paquete instalado. Estos scripts se ejecutan automaticamente durante las operaciones de instalacion o desinstalacion. Para consultar los scripts de un archivo `.rpm` sin instalarlo, se anade el flag `-p`: `rpm -qp --scripts paquete.rpm`. Las demas opciones no tienen la sintaxis correcta para esta consulta.

</details>

### Pregunta 17

Que diferencia existe entre `yum remove` y `yum erase`?

a) `yum remove` elimina el paquete pero conserva la configuracion, `yum erase` elimina todo
b) `yum erase` elimina las dependencias huerfanas y `yum remove` no
c) Son equivalentes, ambos desinstalan el paquete y sus archivos
d) `yum erase` solo funciona en dnf, no en yum

<details><summary>Respuesta</summary>

**c) Son equivalentes, ambos desinstalan el paquete y sus archivos**

En yum, `remove` y `erase` son sinonimos y realizan exactamente la misma operacion: desinstalan el paquete especificado del sistema. A diferencia del mundo Debian donde `dpkg -r` y `dpkg -P` (purge) tienen comportamientos distintos respecto a los archivos de configuracion, en RPM no existe esta distincion. RPM siempre elimina los archivos del paquete, aunque puede renombrar archivos de configuracion modificados a `.rpmsave`.

</details>

### Pregunta 18

En la salida de `rpm -V`, que indica el caracter `M` en la posicion correspondiente?

a) El archivo ha sido movido a otra ubicacion
b) El checksum MD5 del archivo ha cambiado
c) Los permisos o el tipo del archivo han cambiado
d) La fecha de modificacion ha cambiado

<details><summary>Respuesta</summary>

**c) Los permisos o el tipo del archivo han cambiado**

En la verificacion con `rpm -V`, cada posicion del resultado indica un tipo de cambio: `S` (tamano), `M` (permisos/modo), `5` (checksum MD5), `D` (dispositivo), `L` (enlace simbolico), `U` (usuario propietario), `G` (grupo propietario), `T` (fecha de modificacion). El caracter `M` se refiere a Mode, es decir, los permisos del archivo o su tipo han sido modificados respecto al estado original del paquete. Un punto (`.`) indica que no hay cambios en esa posicion.

</details>

### Pregunta 19

Que comando de dnf permite habilitar un repositorio que esta desactivado?

a) `dnf repo enable repo_id`
b) `dnf config-manager --set-enabled repo_id`
c) `dnf activate repo_id`
d) `dnf repolist --enable repo_id`

<details><summary>Respuesta</summary>

**b) `dnf config-manager --set-enabled repo_id`**

`dnf config-manager` es una herramienta exclusiva de DNF para gestionar repositorios desde la linea de comandos. Con `--set-enabled` se habilita un repositorio y con `--set-disabled` se deshabilita. Tambien permite anadir repositorios con `--add-repo URL`. En yum, la gestion de repositorios se hacia editando directamente los archivos `.repo` en `/etc/yum.repos.d/`. En zypper, el equivalente seria `zypper modifyrepo -e alias`.

</details>

### Pregunta 20

Un administrador necesita instalar un grupo de paquetes de desarrollo en un sistema CentOS. Cual es el comando correcto?

a) `yum install development`
b) `yum groupinstall "Development Tools"`
c) `yum package-group "Development Tools"`
d) `rpm -ivh "Development Tools"`

<details><summary>Respuesta</summary>

**b) `yum groupinstall "Development Tools"`**

`yum groupinstall` (o `yum group install`) instala un grupo completo de paquetes relacionados. "Development Tools" es un grupo comun que incluye compiladores como `gcc`, `make` y otras herramientas de desarrollo. Se puede ver la lista de grupos disponibles con `yum grouplist` y la informacion de un grupo con `yum groupinfo "Development Tools"`. En dnf la sintaxis es identica: `dnf group install "Development Tools"`. Los nombres de grupo suelen ir entre comillas porque contienen espacios.

</details>

### Pregunta 21

Que comando usarias para listar los archivos de configuracion de un paquete RPM instalado?

<input type="text" class="fill-blank" data-answer="rpm -qc paquete" data-alt="rpm -qc" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rpm -qc paquete**

El flag `-qc` combina la consulta (`-q`) con la opcion de archivos de configuracion (`-c`), mostrando solo los archivos de configuracion asociados al paquete especificado. De forma similar, `-qd` muestra los archivos de documentacion y `-ql` muestra todos los archivos del paquete. Para consultar un archivo `.rpm` sin instalar, se anade `-p`: `rpm -qpc paquete.rpm`.

</details>

### Pregunta 22

Que comando usarias para importar una clave GPG de un repositorio en un sistema RPM?

<input type="text" class="fill-blank" data-answer="rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY" data-alt="rpm --import" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY**

`rpm --import` se utiliza para importar claves publicas GPG al llavero de RPM, lo que permite verificar las firmas de los paquetes descargados. La ruta tipica de las claves GPG en sistemas Red Hat es `/etc/pki/rpm-gpg/`. Una vez importada la clave, `rpm -K paquete.rpm` o `rpm --checksig paquete.rpm` pueden verificar la firma del paquete contra la clave importada.

</details>

### Pregunta 23

Que comando usarias para ver el contenido de un paquete `.rpm` sin instalarlo, utilizando `rpm2cpio`?

<input type="text" class="fill-blank" data-answer="rpm2cpio paquete.rpm | cpio -t" data-alt="rpm2cpio paquete.rpm | cpio -it" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rpm2cpio paquete.rpm | cpio -t**

`rpm2cpio` convierte un paquete `.rpm` al formato cpio, y `cpio -t` lista el contenido del archivo cpio sin extraerlo. Para extraer los archivos se usaria `cpio -idmv` en lugar de `-t`. Esta tecnica es util para inspeccionar el contenido de un paquete antes de instalarlo o para recuperar archivos especificos sin necesidad de una instalacion completa.

</details>

### Pregunta 24

Que comando de yum usarias para buscar que paquete proporciona el archivo `/usr/bin/wget`?

<input type="text" class="fill-blank" data-answer="yum provides /usr/bin/wget" data-alt="yum provides '/usr/bin/wget',dnf provides /usr/bin/wget" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**yum provides /usr/bin/wget**

`yum provides` busca en todos los repositorios configurados que paquete contiene el archivo especificado, incluso si el paquete no esta instalado. Tambien acepta comodines: `yum provides "*/wget"`. En dnf la sintaxis es identica: `dnf provides /usr/bin/wget`. El equivalente en sistemas Debian es `apt-file search`. Para paquetes ya instalados se puede usar `rpm -qf /usr/bin/wget`.

</details>

### Pregunta 25

Que comando limpias toda la cache de yum (metadatos y paquetes descargados)?

<input type="text" class="fill-blank" data-answer="yum clean all" data-alt="dnf clean all" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**yum clean all**

`yum clean all` elimina toda la cache de yum, incluyendo los paquetes descargados, los metadatos de repositorios, las cabeceras y otros datos almacenados. Opciones mas especificas incluyen `yum clean packages` (solo paquetes) y `yum clean metadata` (solo metadatos). Despues de limpiar la cache, se puede regenerar con `yum makecache`. En dnf el comando equivalente es `dnf clean all`.

</details>
