---
title: "209.2 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "209.2"
---

# Flashcards: 209.2 - Configuracion Servidor Nfs

> 26 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-001">
<div class="flashcard-front">

**P:** ¿En qué archivo se definen los directorios que un servidor NFS exporta a los clientes?

</div>
<div class="flashcard-back">

**R:** b) /etc/exports. El archivo `/etc/exports` es el archivo de configuración principal del servidor NFS donde se definen los directorios exportados, los clientes que tienen acceso y las opciones de cada exportación. Después de modificarlo, se aplican los cambios con `exportfs -ra`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué opción de exportación NFS impide que el usuario root del cliente tenga privilegios de root sobre los archivos del servidor?

</div>
<div class="flashcard-back">

**R:** b) root_squash. La opción `root_squash` mapea el usuario root del cliente (UID 0) al usuario anónimo (normalmente `nobody`), impidiendo que tenga privilegios de root sobre los archivos del servidor. Es la opción predeterminada por razones de seguridad. La opción contraria, `no_root_squash`, permite que root remoto mantenga sus privilegios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué ventaja principal tiene NFSv4 sobre NFSv3 en relación con la configuración de firewalls?

</div>
<div class="flashcard-back">

**R:** b) NFSv4 utiliza solo el puerto TCP 2049, mientras que NFSv3 necesita múltiples puertos. NFSv4 simplifica enormemente la configuración de firewalls al utilizar exclusivamente el puerto TCP 2049. NFSv3 requiere rpcbind (puerto 111) y puertos dinámicos adicionales para mountd, statd y lockd, lo que complica las reglas de firewall.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando aplica los cambios realizados en /etc/exports sin reiniciar el servicio NFS?

</div>
<div class="flashcard-back">

**R:** b) exportfs -ra. El comando `exportfs -ra` re-exporta todos los directorios, sincronizando la tabla de exportaciones activas con el contenido actual de `/etc/exports`. La opción `-r` significa re-exportar y `-a` significa todos. Sin la `-r`, `exportfs -a` solo exportaría las entradas nuevas sin eliminar las que ya no están en el archivo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre las siguientes entradas en /etc/exports?

</div>
<div class="flashcard-back">

**R:** b) La línea A da acceso rw a la red 192.168.1.0/24; la línea B da acceso rw a todos los hosts. En `/etc/exports`, el espacio entre el cliente y las opciones es significativo. En la línea A, `192.168.1.0/24(rw)` concede acceso de lectura y escritura a esa red. En la línea B, el espacio hace que se interprete como dos entradas separadas: `192.168.1.0/24` con opciones predeterminadas (ro) y `(rw)` que se aplica a todos los hosts. Este es un error muy común y peligroso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando muestra los directorios exportados por un servidor NFS remoto?

</div>
<div class="flashcard-back">

**R:** c) showmount -e servidor. El comando `showmount -e` (exports) consulta a un servidor NFS y muestra la lista de directorios exportados junto con los clientes que tienen acceso. Con la opción `-a` muestra los montajes activos y con `-d` muestra solo los directorios montados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué opción de montaje NFS en el cliente garantiza que las operaciones de escritura se confirmen antes de continuar?

</div>
<div class="flashcard-back">

**R:** b) sync. La opción `sync` en el montaje del cliente asegura que las operaciones de escritura se confirmen en el servidor antes de que la llamada retorne al proceso. La opción `async` permite que las escrituras se almacenen en buffer, mejorando el rendimiento pero con riesgo de pérdida de datos si el servidor falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué servicio es necesario para NFSv3 pero no para NFSv4?

</div>
<div class="flashcard-back">

**R:** b) rpcbind. `rpcbind` (anteriormente `portmap`) es el servicio que mapea los programas RPC a puertos de red. NFSv3 lo necesita porque utiliza puertos dinámicos para sus servicios auxiliares (mountd, statd, lockd). NFSv4 no lo necesita porque opera exclusivamente en el puerto TCP 2049 con todos los servicios integrados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-009">
<div class="flashcard-front">

**P:** Un administrador quiere montar un recurso NFS permanentemente con la opción de que el sistema espere a que la red esté disponible antes de intentar el montaje. ¿Qué opción debe incluir en /etc/fstab?

</div>
<div class="flashcard-back">

**R:** c) _netdev. La opción `_netdev` en `/etc/fstab` indica al sistema que el recurso depende de la conectividad de red y que no debe intentar montarlo hasta que la red esté disponible. Sin esta opción, el sistema podría intentar montar el recurso NFS antes de que la interfaz de red esté configurada, causando retrasos o fallos en el arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-010">
<div class="flashcard-front">

**P:** ¿Qué opción de /etc/exports marca un directorio como raíz del pseudo-filesystem de NFSv4?

</div>
<div class="flashcard-back">

**R:** c) fsid=0. La opción `fsid=0` en `/etc/exports` marca un directorio como la raíz del pseudo-filesystem de NFSv4. Todos los demás directorios exportados se presentan como subdirectorios de esta raíz. Combinado con la opción `crossmnt`, permite que los clientes naveguen automáticamente entre los diferentes puntos de montaje exportados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: NFSv4 utiliza exclusivamente el puerto TCP 2049 y no necesita rpcbind. NFSv3 req...

</div>
<div class="flashcard-back">

**R:** NFSv4 utiliza exclusivamente el puerto TCP 2049 y no necesita rpcbind. NFSv3 requiere rpcbind (puerto 111) y utiliza puertos dinámicos para los servicios auxiliares (mountd, statd, lockd). Esta diferencia es crucial para la configuración de firewalls.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: Es muy importante no dejar espacio entre el cliente y el paréntesis de opciones....

</div>
<div class="flashcard-back">

**R:** Es muy importante no dejar espacio entre el cliente y el paréntesis de opciones. `192.168.1.0/24(rw)` da acceso de lectura y escritura a esa red, mientras que `192.168.1.0/24 (rw)` da acceso de lectura y escritura a TODOS los hosts (el espacio separa las dos entradas).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: `no_root_squash` es un riesgo de seguridad significativo porque permite que root...

</div>
<div class="flashcard-back">

**R:** `no_root_squash` es un riesgo de seguridad significativo porque permite que root en el cliente tenga privilegios de root sobre los archivos del servidor. Solo debe usarse en entornos controlados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Después de modificar `/etc/exports`, se debe ejecutar `exportfs -ra` para aplica...

</div>
<div class="flashcard-back">

**R:** Después de modificar `/etc/exports`, se debe ejecutar `exportfs -ra` para aplicar los cambios sin reiniciar el servicio NFS. La opción `-a` aplica todas las entradas del archivo, y `-r` re-sincroniza la tabla de exportaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: En NFSv4, la opción `fsid=0` marca la raíz del pseudo-filesystem. Los clientes v...

</div>
<div class="flashcard-back">

**R:** En NFSv4, la opción `fsid=0` marca la raíz del pseudo-filesystem. Los clientes ven todas las exportaciones como subdirectorios de esta raíz. La opción `crossmnt` permite que el cliente atraviese los puntos de montaje automáticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-016">
<div class="flashcard-front">

**P:** Tip de examen: La opción `hard` es la predeterminada y la más segura para datos críticos, ya qu...

</div>
<div class="flashcard-back">

**R:** La opción `hard` es la predeterminada y la más segura para datos críticos, ya que reintenta la operación indefinidamente hasta que el servidor responda. La opción `soft` puede causar corrupción de datos si la aplicación no maneja bien los errores de E/S. La opción `_netdev` es importante en `/etc/fstab` para que el montaje espere a que la red esté disponible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-017">
<div class="flashcard-front">

**P:** Tip de examen: Una de las grandes ventajas de NFSv4 sobre NFSv3 es la simplificación del firewa...

</div>
<div class="flashcard-back">

**R:** Una de las grandes ventajas de NFSv4 sobre NFSv3 es la simplificación del firewall. NFSv4 solo necesita el puerto TCP 2049, mientras que NFSv3 requiere rpcbind (111) y puertos dinámicos adicionales para mountd, statd y lockd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `rw`?

</div>
<div class="flashcard-back">

**R:** Lectura y escritura

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-019">
<div class="flashcard-front">

**P:** Que hace el comando `ro`?

</div>
<div class="flashcard-back">

**R:** Solo lectura (predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-020">
<div class="flashcard-front">

**P:** Que hace el comando `sync`?

</div>
<div class="flashcard-back">

**R:** Escrituras sincrónicas (más seguro, predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-021">
<div class="flashcard-front">

**P:** Que hace el comando `async`?

</div>
<div class="flashcard-back">

**R:** Escrituras asincrónicas (mejor rendimiento, riesgo de pérdida de datos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-022">
<div class="flashcard-front">

**P:** Que hace el comando `no_subtree_check`?

</div>
<div class="flashcard-back">

**R:** Deshabilita la verificación de subárbol (recomendado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-023">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** NFS (Network File System) es el protocolo estándar para compartir sistemas de archivos en redes Unix/Linux. Permite que los clientes accedan a directorios remotos como si fueran locales. El examen LPIC

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-024">
<div class="flashcard-front">

**P:** Que es/son Diferencias entre NFSv3 y NFSv4?

</div>
<div class="flashcard-back">

**R:** | Característica | NFSv3 | NFSv4 |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-025">
<div class="flashcard-front">

**P:** Que es/son Configuración del servidor: /etc/exports?

</div>
<div class="flashcard-back">

**R:** El archivo `/etc/exports` define qué directorios se comparten y con qué opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.2">
</div>

<div class="flashcard" data-id="209.2-fc-026">
<div class="flashcard-front">

**P:** Que es/son NFSv4 - Pseudo Filesystem?

</div>
<div class="flashcard-back">

**R:** NFSv4 introduce el concepto de pseudo-filesystem, que presenta todas las exportaciones bajo una raíz virtual única.

</div>
</div>

---

