---
title: "201.1 - Componentes del kernel"
tags: [lpic-2, examen-201, tema-201, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "201"
tema: "201"
subtema: "201.1"
---

# 201.1 - Ejercicios de practica

## Preguntas tipo examen

### Pregunta 1

¿Cual es la principal diferencia entre `bzImage` y `zImage` como formatos de imagen del kernel?

a) `bzImage` esta comprimido con bzip2 y `zImage` con gzip
b) `bzImage` puede cargarse en memoria alta (por encima de 1 MB), mientras que `zImage` esta limitado a los primeros 640 KB
c) `bzImage` es para arquitectura de 64 bits y `zImage` para 32 bits
d) `bzImage` incluye modulos y `zImage` no

<details>
<summary>Respuesta</summary>

**b) `bzImage` puede cargarse en memoria alta (por encima de 1 MB), mientras que `zImage` esta limitado a los primeros 640 KB**

La "b" en `bzImage` significa "big", refiriendose a que puede usar memoria alta, eliminando la restriccion de 640 KB de `zImage`. Ambos formatos usan el mismo tipo de compresion. `bzImage` es el formato estandar para kernels modernos en arquitectura x86.
</details>

---

### Pregunta 2

¿En que directorio se encuentra la documentacion oficial incluida con el codigo fuente del kernel de Linux?

a) `/usr/share/doc/linux/`
b) `/usr/src/linux/Documentation/`
c) `/etc/kernel/docs/`
d) `/var/lib/kernel/documentation/`

<details>
<summary>Respuesta</summary>

**b) `/usr/src/linux/Documentation/`**

La documentacion oficial del kernel viene incluida en el arbol del codigo fuente, dentro del subdirectorio `Documentation/`. Este directorio contiene informacion sobre subsistemas, parametros de arranque, API del kernel y guias de configuracion. Es la referencia primaria para cualquier aspecto tecnico del kernel.
</details>

---

### Pregunta 3

Un archivo `.config` del kernel contiene la linea `CONFIG_EXT4_FS=m`. ¿Que significa esto?

a) El soporte para EXT4 esta deshabilitado
b) El soporte para EXT4 se compilara directamente en el kernel
c) El soporte para EXT4 se compilara como un modulo cargable
d) El soporte para EXT4 esta marcado como experimental

<details>
<summary>Respuesta</summary>

**c) El soporte para EXT4 se compilara como un modulo cargable**

En la configuracion del kernel, `=m` indica que la funcionalidad se compilara como modulo que puede cargarse y descargarse en tiempo de ejecucion. `=y` significaria compilado directamente en el kernel (built-in), y `# CONFIG_EXT4_FS is not set` indicaria que esta deshabilitado.
</details>

---

### Pregunta 4

¿Que comando muestra la version del kernel actualmente en ejecucion?

a) `kernel --version`
b) `cat /etc/kernel-version`
c) `uname -r`
d) `version -k`

<details>
<summary>Respuesta</summary>

**c) `uname -r`**

El comando `uname` con la opcion `-r` muestra la version (release) del kernel en ejecucion, por ejemplo `5.15.0-56-generic`. Tambien se puede obtener de `/proc/version` o con `uname -a` que muestra toda la informacion del kernel.
</details>

---

### Pregunta 5

¿Donde se definen las variables VERSION, PATCHLEVEL y SUBLEVEL que determinan la version del kernel?

a) En `/etc/kernel.conf`
b) En `/usr/src/linux/.config`
c) En `/usr/src/linux/Makefile`
d) En `/boot/config-<version>`

<details>
<summary>Respuesta</summary>

**c) En `/usr/src/linux/Makefile`**

El `Makefile` principal en la raiz del codigo fuente del kernel contiene las variables `VERSION`, `PATCHLEVEL`, `SUBLEVEL` y `EXTRAVERSION` que definen la version completa del kernel. Estas variables se usan durante la compilacion para generar el nombre de version del kernel resultante.
</details>

---

### Pregunta 6

¿Que comando se utiliza para aplicar un parche al codigo fuente del kernel?

a) `apply -patch archivo.patch`
b) `patch -p1 < archivo.patch`
c) `kernel-patch archivo.patch`
d) `diff -apply archivo.patch`

<details>
<summary>Respuesta</summary>

**b) `patch -p1 < archivo.patch`**

El comando `patch` se ejecuta desde el directorio raiz del codigo fuente. La opcion `-p1` indica que se debe eliminar el primer componente de la ruta en las lineas del parche (tipicamente `a/` o `b/` generados por `diff` o `git diff`). Para revertir un parche se usa `patch -R -p1`.
</details>

---

### Pregunta 7

¿Que archivo en `/boot/` contiene la tabla de correspondencias entre direcciones de memoria y nombres de funciones del kernel?

a) `vmlinuz-<version>`
b) `initrd.img-<version>`
c) `System.map-<version>`
d) `config-<version>`

<details>
<summary>Respuesta</summary>

**c) `System.map-<version>`**

`System.map` es la tabla de simbolos del kernel que mapea direcciones de memoria a nombres de funciones y variables del kernel. Se utiliza para depuracion y diagnostico, especialmente para interpretar mensajes de error del kernel (kernel oops/panic). Cada version del kernel tiene su propio `System.map`.
</details>

---

### Pregunta 8

¿Cual de las siguientes afirmaciones sobre el kernel Linux es correcta?

a) Linux es un microkernel puro
b) Linux es un kernel monolitico con soporte de modulos cargables
c) Linux no soporta modulos, todo debe compilarse en el kernel
d) Linux es un hipervisor que ejecuta multiples kernels

<details>
<summary>Respuesta</summary>

**b) Linux es un kernel monolitico con soporte de modulos cargables**

Linux se clasifica como un kernel monolitico hibrido. Toda la funcionalidad del kernel se ejecuta en espacio de kernel (a diferencia de un microkernel), pero soporta modulos cargables que pueden anadirse o eliminarse en tiempo de ejecucion sin reiniciar. Esto combina el rendimiento del diseno monolitico con la flexibilidad de los modulos.
</details>

---

### Pregunta 9

Un administrador quiere copiar la configuracion del kernel en ejecucion para usarla como base en una nueva compilacion. ¿Cual de los siguientes comandos es apropiado?

a) `cp /proc/kernel/.config /usr/src/linux/.config`
b) `cp /boot/config-$(uname -r) /usr/src/linux/.config`
c) `uname --config > /usr/src/linux/.config`
d) `sysctl -export > /usr/src/linux/.config`

<details>
<summary>Respuesta</summary>

**b) `cp /boot/config-$(uname -r) /usr/src/linux/.config`**

La configuracion del kernel en ejecucion se almacena en `/boot/config-<version>`. Usando `$(uname -r)` se obtiene la version actual automaticamente. Alternativamente, si el kernel fue compilado con `CONFIG_IKCONFIG_PROC`, se puede usar `zcat /proc/config.gz > /usr/src/linux/.config`.
</details>

---

### Pregunta 10

¿Donde se almacenan los modulos compilados del kernel en ejecucion?

a) `/boot/modules/`
b) `/usr/src/linux/modules/`
c) `/lib/modules/$(uname -r)/`
d) `/etc/modules/$(uname -r)/`

<details>
<summary>Respuesta</summary>

**c) `/lib/modules/$(uname -r)/`**

Los modulos compilados del kernel se instalan en `/lib/modules/<version>/`. Cada version del kernel tiene su propio directorio de modulos. Dentro se encuentran subdirectorios como `kernel/` (con los modulos organizados por tipo), archivos de dependencias (`modules.dep`) y otros metadatos.
</details>

---

### Pregunta 11

¿Que significan las variables VERSION=5, PATCHLEVEL=15 y SUBLEVEL=60 en el Makefile principal del kernel?

a) Son las versiones de las herramientas de compilacion requeridas
b) Definen la version del kernel como 5.15.60
c) Son versiones internas de los subsistemas del kernel
d) Indican la cantidad de parches aplicados

<details><summary>Respuesta</summary>

**b) Definen la version del kernel como 5.15.60**

Las variables VERSION, PATCHLEVEL y SUBLEVEL en el Makefile principal del kernel se combinan para formar el numero de version completo: VERSION.PATCHLEVEL.SUBLEVEL. Adicionalmente, la variable EXTRAVERSION permite agregar un sufijo personalizado (por ejemplo, "-custom"). Estas variables son leidas por el sistema de compilacion para generar el nombre de version del kernel resultante.

</details>

---

### Pregunta 12

¿Que tipo de version del kernel esta disenada para ser mantenida durante un periodo extenso de 2 a 6 anos con correcciones de seguridad?

a) Mainline
b) RC (Release Candidate)
c) LTS (Long Term Support)
d) Stable

<details><summary>Respuesta</summary>

**c) LTS (Long Term Support)**

Las versiones LTS del kernel de Linux se mantienen durante periodos extendidos, tipicamente de 2 a 6 anos, recibiendo correcciones de bugs y parches de seguridad. Son las versiones preferidas para entornos de produccion y servidores donde la estabilidad a largo plazo es prioritaria. Las versiones Stable se mantienen solo hasta que se lanza la siguiente version.

</details>

---

### Pregunta 13

Un administrador necesita verificar la integridad de un archivo de codigo fuente del kernel descargado de kernel.org. ¿Que herramienta debe utilizar?

a) `md5sum` exclusivamente
b) `gpg --verify` con el archivo de firma proporcionado
c) `file` para verificar el tipo de archivo
d) `sha256sum` sin ningun archivo de referencia

<details><summary>Respuesta</summary>

**b) `gpg --verify` con el archivo de firma proporcionado**

kernel.org proporciona archivos de firma GPG (.sign) para cada version del kernel. El proceso correcto es descargar el archivo de firma, descomprimir el tarball (.tar.xz a .tar), y ejecutar `gpg --verify linux-x.y.z.tar.sign linux-x.y.z.tar`. Esto verifica que el codigo fuente fue firmado por los desarrolladores oficiales del kernel, garantizando tanto integridad como autenticidad.

</details>

---

### Pregunta 14

¿Que archivo virtual del sistema permite obtener la configuracion del kernel en ejecucion si la opcion CONFIG_IKCONFIG_PROC fue habilitada durante la compilacion?

a) `/proc/kernel/config`
b) `/proc/config.gz`
c) `/sys/kernel/config`
d) `/proc/sys/kernel/config`

<details><summary>Respuesta</summary>

**b) `/proc/config.gz`**

Si el kernel fue compilado con la opcion `CONFIG_IKCONFIG_PROC=y`, el archivo `/proc/config.gz` contiene la configuracion completa del kernel en ejecucion en formato comprimido con gzip. Se puede leer con `zcat /proc/config.gz`. Esta es una alternativa al archivo `/boot/config-$(uname -r)` y es especialmente util cuando el directorio `/boot` no esta disponible.

</details>

---

### Pregunta 15

¿Cual es la funcion del archivo `initrd.img` (o `initramfs`) que se encuentra en `/boot/`?

a) Contiene el codigo fuente comprimido del kernel
b) Es una imagen temporal del sistema de archivos que se carga en RAM durante el arranque para proporcionar modulos y herramientas necesarios para montar el sistema raiz real
c) Es una copia de respaldo del kernel anterior
d) Almacena los parametros de configuracion de GRUB

<details><summary>Respuesta</summary>

**b) Es una imagen temporal del sistema de archivos que se carga en RAM durante el arranque para proporcionar modulos y herramientas necesarios para montar el sistema raiz real**

El initramfs (initial RAM filesystem) contiene modulos del kernel, scripts y herramientas necesarios para el arranque temprano del sistema. Es esencial cuando el controlador del disco o el sistema de archivos raiz estan compilados como modulos, cuando se usa LVM, RAID o cifrado de disco. Una vez montado el sistema raiz real, el initramfs se descarta de la memoria.

</details>

---

### Pregunta 16

¿Que opcion en el archivo `.config` del kernel indica que una funcionalidad esta completamente deshabilitada?

a) `CONFIG_MODULO=n`
b) `CONFIG_MODULO=0`
c) `# CONFIG_MODULO is not set`
d) `CONFIG_MODULO=disabled`

<details><summary>Respuesta</summary>

**c) `# CONFIG_MODULO is not set`**

En el archivo `.config` del kernel, una funcionalidad deshabilitada se indica con una linea comentada en el formato `# CONFIG_OPCION is not set`. Los valores activos son `=y` (compilado dentro del kernel) y `=m` (compilado como modulo cargable). No se usa `=n`, `=0` ni `=disabled` como valores en el archivo de configuracion.

</details>

---

### Pregunta 17

¿Que diferencia existe entre el archivo `vmlinux` y `vmlinuz`?

a) Son identicos, simplemente con nombres diferentes segun la distribucion
b) `vmlinux` es el kernel sin comprimir en formato ELF usado para depuracion; `vmlinuz` es el kernel comprimido listo para arrancar
c) `vmlinux` es para 32 bits y `vmlinuz` para 64 bits
d) `vmlinux` incluye modulos y `vmlinuz` no

<details><summary>Respuesta</summary>

**b) `vmlinux` es el kernel sin comprimir en formato ELF usado para depuracion; `vmlinuz` es el kernel comprimido listo para arrancar**

`vmlinux` es el archivo ejecutable en formato ELF que resulta directamente de la compilacion. Es grande y no comprimido, usado principalmente para depuracion con herramientas como `gdb`. `vmlinuz` es la version comprimida (la "z" indica compresion) que se instala en `/boot/` y es cargada por el bootloader durante el arranque del sistema.

</details>

---

### Pregunta 18

Un administrador necesita aplicar un parche incremental al kernel 5.15.60 para actualizarlo a 5.15.61. ¿Desde que directorio debe ejecutar el comando `patch`?

a) Desde `/boot/`
b) Desde la raiz del codigo fuente del kernel (`/usr/src/linux/`)
c) Desde `/lib/modules/`
d) Desde cualquier directorio, el parche contiene rutas absolutas

<details><summary>Respuesta</summary>

**b) Desde la raiz del codigo fuente del kernel (`/usr/src/linux/`)**

Los parches del kernel se aplican desde el directorio raiz del codigo fuente con el comando `patch -p1 < archivo.patch`. La opcion `-p1` elimina el primer componente de la ruta en el archivo de parche (tipicamente `a/` o `b/`). Es importante estar en el directorio correcto para que las rutas relativas del parche coincidan con la estructura de directorios del codigo fuente.

</details>

---

### Pregunta 19

¿Que formato de imagen del kernel se utiliza tipicamente en sistemas embebidos con el bootloader U-Boot?

a) bzImage
b) zImage
c) uImage
d) vmlinux

<details><summary>Respuesta</summary>

**c) uImage**

El formato `uImage` es una imagen del kernel con una cabecera especifica para el bootloader U-Boot, que es comun en sistemas embebidos basados en arquitecturas ARM y otras. `bzImage` es el formato estandar para x86. `zImage` tambien se usa en ARM pero sin la cabecera de U-Boot. `vmlinux` es el kernel sin comprimir usado para depuracion.

</details>

---

### Pregunta 20

¿Cual de las siguientes afirmaciones sobre el enlace simbolico `/usr/src/linux` es correcta?

a) Es obligatorio y el sistema no arranca sin el
b) Es una convencion comun que apunta al directorio del codigo fuente del kernel activo, facilitando la compilacion
c) Es creado automaticamente por el kernel durante el arranque
d) Apunta siempre al directorio `/boot/`

<details><summary>Respuesta</summary>

**b) Es una convencion comun que apunta al directorio del codigo fuente del kernel activo, facilitando la compilacion**

El enlace simbolico `/usr/src/linux` es una convencion estandar en Linux que apunta al directorio del codigo fuente del kernel que se esta utilizando para compilacion o referencia. No es obligatorio para el funcionamiento del sistema, pero muchos scripts y herramientas de compilacion lo esperan. Se crea manualmente con `ln -sf linux-version linux`.

</details>

---

### Pregunta 21

¿Que comando muestra la version del kernel actualmente en ejecucion?

<input type="text" class="fill-blank" data-answer="uname -r" data-alt="uname --kernel-release" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**uname -r**

El comando `uname -r` muestra unicamente la version (release) del kernel en ejecucion, por ejemplo `5.15.0-56-generic`. La opcion `-r` significa "kernel release". Para ver toda la informacion del sistema (nombre del kernel, hostname, version, arquitectura, etc.) se usa `uname -a`.

</details>

---

### Pregunta 22

¿Que comando muestra informacion detallada sobre un modulo del kernel, incluyendo su descripcion, dependencias y parametros?

<input type="text" class="fill-blank" data-answer="modinfo" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**modinfo**

El comando `modinfo` seguido del nombre del modulo (por ejemplo, `modinfo ext4`) muestra informacion detallada como la ruta del archivo, licencia, descripcion, autor, dependencias, alias, parametros configurables y la version del kernel para la que fue compilado (vermagic).

</details>

---

### Pregunta 23

¿Que comando se utiliza para aplicar un parche al codigo fuente del kernel, eliminando el primer componente de la ruta?

<input type="text" class="fill-blank" data-answer="patch -p1" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**patch -p1**

El comando `patch -p1` aplica un archivo de parche al codigo fuente. La opcion `-p1` elimina el primer componente de la ruta en las lineas del parche (tipicamente `a/` o `b/` generados por `diff` o `git diff`). Se ejecuta desde el directorio raiz del codigo fuente. Para revertir un parche se usa `patch -R -p1`.

</details>

---

### Pregunta 24

¿Que comando lista los modulos del kernel actualmente cargados en memoria?

<input type="text" class="fill-blank" data-answer="lsmod" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lsmod**

El comando `lsmod` muestra los modulos actualmente cargados en el kernel, formateando la informacion del archivo `/proc/modules`. La salida incluye tres columnas: nombre del modulo, tamano en bytes y lista de modulos que dependen de el (Used by). Es la herramienta rapida para verificar si un modulo especifico esta cargado.

</details>

---

### Pregunta 25

¿Que comando permite obtener la configuracion del kernel en ejecucion desde el archivo comprimido en `/proc/`?

<input type="text" class="fill-blank" data-answer="zcat /proc/config.gz" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**zcat /proc/config.gz**

El comando `zcat /proc/config.gz` descomprime y muestra el contenido del archivo de configuracion del kernel en ejecucion. Este archivo solo esta disponible si el kernel fue compilado con la opcion `CONFIG_IKCONFIG_PROC=y`. Es una alternativa util cuando no se tiene acceso al archivo `/boot/config-$(uname -r)`.

</details>
