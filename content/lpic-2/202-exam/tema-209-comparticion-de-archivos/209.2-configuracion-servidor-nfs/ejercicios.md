---
title: "209.2 - Configuración del servidor NFS"
tags: [lpic-2, examen-202, tema-209, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "209"
subtema: "209.2"
---

# 209.2 - Ejercicios: Configuración del servidor NFS

### Pregunta 1
¿En qué archivo se definen los directorios que un servidor NFS exporta a los clientes?

a) /etc/nfs.conf
b) /etc/exports
c) /etc/nfs/shares
d) /etc/fstab

<details>
<summary>Respuesta</summary>

**b) /etc/exports**

El archivo `/etc/exports` es el archivo de configuración principal del servidor NFS donde se definen los directorios exportados, los clientes que tienen acceso y las opciones de cada exportación. Después de modificarlo, se aplican los cambios con `exportfs -ra`.
</details>

---

### Pregunta 2
¿Qué opción de exportación NFS impide que el usuario root del cliente tenga privilegios de root sobre los archivos del servidor?

a) no_root_squash
b) root_squash
c) all_squash
d) secure

<details>
<summary>Respuesta</summary>

**b) root_squash**

La opción `root_squash` mapea el usuario root del cliente (UID 0) al usuario anónimo (normalmente `nobody`), impidiendo que tenga privilegios de root sobre los archivos del servidor. Es la opción predeterminada por razones de seguridad. La opción contraria, `no_root_squash`, permite que root remoto mantenga sus privilegios.
</details>

---

### Pregunta 3
¿Qué ventaja principal tiene NFSv4 sobre NFSv3 en relación con la configuración de firewalls?

a) NFSv4 no requiere autenticación
b) NFSv4 utiliza solo el puerto TCP 2049, mientras que NFSv3 necesita múltiples puertos
c) NFSv4 utiliza cifrado por defecto
d) NFSv4 funciona solo sobre UDP, que es más fácil de filtrar

<details>
<summary>Respuesta</summary>

**b) NFSv4 utiliza solo el puerto TCP 2049, mientras que NFSv3 necesita múltiples puertos**

NFSv4 simplifica enormemente la configuración de firewalls al utilizar exclusivamente el puerto TCP 2049. NFSv3 requiere rpcbind (puerto 111) y puertos dinámicos adicionales para mountd, statd y lockd, lo que complica las reglas de firewall.
</details>

---

### Pregunta 4
¿Qué comando aplica los cambios realizados en /etc/exports sin reiniciar el servicio NFS?

a) exportfs -r
b) exportfs -ra
c) nfsreload
d) systemctl reload exports

<details>
<summary>Respuesta</summary>

**b) exportfs -ra**

El comando `exportfs -ra` re-exporta todos los directorios, sincronizando la tabla de exportaciones activas con el contenido actual de `/etc/exports`. La opción `-r` significa re-exportar y `-a` significa todos. Sin la `-r`, `exportfs -a` solo exportaría las entradas nuevas sin eliminar las que ya no están en el archivo.
</details>

---

### Pregunta 5
¿Cuál es la diferencia entre las siguientes entradas en /etc/exports?
- Línea A: `/datos 192.168.1.0/24(rw)`
- Línea B: `/datos 192.168.1.0/24 (rw)`

a) No hay diferencia, ambas son equivalentes
b) La línea A da acceso rw a la red 192.168.1.0/24; la línea B da acceso rw a todos los hosts
c) La línea A es una sintaxis inválida
d) La línea B aplica las opciones solo al primer cliente

<details>
<summary>Respuesta</summary>

**b) La línea A da acceso rw a la red 192.168.1.0/24; la línea B da acceso rw a todos los hosts**

En `/etc/exports`, el espacio entre el cliente y las opciones es significativo. En la línea A, `192.168.1.0/24(rw)` concede acceso de lectura y escritura a esa red. En la línea B, el espacio hace que se interprete como dos entradas separadas: `192.168.1.0/24` con opciones predeterminadas (ro) y `(rw)` que se aplica a todos los hosts. Este es un error muy común y peligroso.
</details>

---

### Pregunta 6
¿Qué comando muestra los directorios exportados por un servidor NFS remoto?

a) exportfs -v servidor
b) nfsstat -e servidor
c) showmount -e servidor
d) rpcinfo -e servidor

<details>
<summary>Respuesta</summary>

**c) showmount -e servidor**

El comando `showmount -e` (exports) consulta a un servidor NFS y muestra la lista de directorios exportados junto con los clientes que tienen acceso. Con la opción `-a` muestra los montajes activos y con `-d` muestra solo los directorios montados.
</details>

---

### Pregunta 7
¿Qué opción de montaje NFS en el cliente garantiza que las operaciones de escritura se confirmen antes de continuar?

a) async
b) sync
c) hard
d) direct

<details>
<summary>Respuesta</summary>

**b) sync**

La opción `sync` en el montaje del cliente asegura que las operaciones de escritura se confirmen en el servidor antes de que la llamada retorne al proceso. La opción `async` permite que las escrituras se almacenen en buffer, mejorando el rendimiento pero con riesgo de pérdida de datos si el servidor falla.
</details>

---

### Pregunta 8
¿Qué servicio es necesario para NFSv3 pero no para NFSv4?

a) nfsd
b) rpcbind
c) idmapd
d) nfs-server

<details>
<summary>Respuesta</summary>

**b) rpcbind**

`rpcbind` (anteriormente `portmap`) es el servicio que mapea los programas RPC a puertos de red. NFSv3 lo necesita porque utiliza puertos dinámicos para sus servicios auxiliares (mountd, statd, lockd). NFSv4 no lo necesita porque opera exclusivamente en el puerto TCP 2049 con todos los servicios integrados.
</details>

---

### Pregunta 9
Un administrador quiere montar un recurso NFS permanentemente con la opción de que el sistema espere a que la red esté disponible antes de intentar el montaje. ¿Qué opción debe incluir en /etc/fstab?

a) netmount
b) network
c) _netdev
d) wait_net

<details>
<summary>Respuesta</summary>

**c) _netdev**

La opción `_netdev` en `/etc/fstab` indica al sistema que el recurso depende de la conectividad de red y que no debe intentar montarlo hasta que la red esté disponible. Sin esta opción, el sistema podría intentar montar el recurso NFS antes de que la interfaz de red esté configurada, causando retrasos o fallos en el arranque.
</details>

---

### Pregunta 10
¿Qué opción de /etc/exports marca un directorio como raíz del pseudo-filesystem de NFSv4?

a) root=true
b) nfsv4root
c) fsid=0
d) pseudoroot

<details>
<summary>Respuesta</summary>

**c) fsid=0**

La opción `fsid=0` en `/etc/exports` marca un directorio como la raíz del pseudo-filesystem de NFSv4. Todos los demás directorios exportados se presentan como subdirectorios de esta raíz. Combinado con la opción `crossmnt`, permite que los clientes naveguen automáticamente entre los diferentes puntos de montaje exportados.
</details>

---

### Pregunta 11

¿Qué opción de exportación NFS mapea TODOS los usuarios remotos al usuario anónimo, independientemente de su UID?

a) root_squash
b) no_root_squash
c) all_squash
d) anon_squash

<details><summary>Respuesta</summary>

**c) all_squash**

La opción `all_squash` mapea todos los usuarios remotos (no solo root) al usuario anónimo definido por `anonuid` y `anongid`. Es útil para comparticiones públicas donde se desea que todos los accesos se realicen con un único usuario, independientemente de la identidad del cliente.

</details>

---

### Pregunta 12

¿Qué demonio de NFSv4 se encarga de mapear UIDs/GIDs numéricos a nombres de usuario y grupo?

a) rpc.mountd
b) rpc.statd
c) rpc.idmapd
d) rpc.lockd

<details><summary>Respuesta</summary>

**c) rpc.idmapd**

El demonio `rpc.idmapd` es específico de NFSv4 y se encarga de traducir entre UIDs/GIDs numéricos y nombres de usuario/grupo. Esto es necesario porque NFSv4 transmite nombres en lugar de identificadores numéricos, a diferencia de NFSv3.

</details>

---

### Pregunta 13

¿Qué opción de montaje NFS en el cliente indica que el sistema de archivos requiere conectividad de red y debe esperar a que la red esté disponible antes de montarse?

a) bg
b) hard
c) _netdev
d) network

<details><summary>Respuesta</summary>

**c) _netdev**

La opción `_netdev` en `/etc/fstab` indica al sistema que el recurso depende de la red y que no debe intentar montarlo hasta que la conectividad de red esté disponible. Es esencial para montajes NFS permanentes en `/etc/fstab` para evitar problemas durante el arranque del sistema.

</details>

---

### Pregunta 14

¿Qué ocurre cuando se utiliza la opción de montaje `soft` en un cliente NFS y el servidor no responde?

a) El cliente reintenta indefinidamente hasta que el servidor responda
b) El cliente devuelve un error de E/S después del número configurado de reintentos
c) El cliente cambia automáticamente a otro servidor NFS
d) El cliente desmonta automáticamente el recurso compartido

<details><summary>Respuesta</summary>

**b) El cliente devuelve un error de E/S después del número configurado de reintentos**

Con la opción `soft`, el cliente NFS reporta un error de E/S a la aplicación tras agotar los reintentos configurados con `retrans`. La opción `hard` (predeterminada) reintenta indefinidamente. El uso de `soft` puede causar corrupción de datos si las aplicaciones no manejan correctamente los errores de E/S.

</details>

---

### Pregunta 15

Un administrador ejecuta `exportfs -u 192.168.1.10:/srv/datos`. ¿Qué efecto tiene este comando?

a) Exporta el directorio /srv/datos al cliente 192.168.1.10
b) Des-exporta el directorio /srv/datos para el cliente 192.168.1.10
c) Actualiza las opciones de exportación para ese cliente
d) Muestra las exportaciones activas para ese cliente

<details><summary>Respuesta</summary>

**b) Des-exporta el directorio /srv/datos para el cliente 192.168.1.10**

La opción `-u` de `exportfs` des-exporta (elimina de la tabla de exportaciones activas) un directorio específico para un cliente determinado. Para des-exportar todas las exportaciones, se usa `exportfs -ua`.

</details>

---

### Pregunta 16

¿Qué protocolo de transporte utiliza exclusivamente NFSv4?

a) UDP
b) TCP
c) UDP y TCP
d) SCTP

<details><summary>Respuesta</summary>

**b) TCP**

NFSv4 utiliza exclusivamente TCP como protocolo de transporte, a diferencia de NFSv3 que puede utilizar tanto UDP como TCP. Esta simplificación en NFSv4 facilita la configuración de firewalls y mejora la fiabilidad de las comunicaciones.

</details>

---

### Pregunta 17

¿Qué opción de la entrada en `/etc/exports` permite que los clientes NFSv4 atraviesen automáticamente los puntos de montaje dentro del pseudo-filesystem?

a) bind
b) crossmnt
c) subtree_check
d) nohide

<details><summary>Respuesta</summary>

**b) crossmnt**

La opción `crossmnt` en `/etc/exports` permite que los clientes NFSv4 naveguen automáticamente a través de los puntos de montaje dentro del pseudo-filesystem. Se usa junto con `fsid=0` en la raíz del pseudo-filesystem para que los clientes puedan acceder a todos los subdirectorios exportados de forma transparente.

</details>

---

### Pregunta 18

¿Qué comando permite listar los servicios RPC registrados en un servidor, incluyendo NFS y sus servicios auxiliares?

a) nfsstat -r
b) rpcinfo -p
c) showmount -r
d) nfsinfo --rpc

<details><summary>Respuesta</summary>

**b) rpcinfo -p**

El comando `rpcinfo -p` lista todos los servicios RPC registrados en el sistema, mostrando el número de programa, versión, protocolo y puerto. Es útil para verificar que NFS y sus servicios auxiliares (mountd, statd, lockd) están registrados correctamente.

</details>

---

### Pregunta 19

¿Cuál es la opción de exportación predeterminada en NFS respecto a los permisos de acceso cuando no se especifica `rw` ni `ro`?

a) rw (lectura y escritura)
b) ro (solo lectura)
c) none (sin acceso)
d) Depende de la versión de NFS

<details><summary>Respuesta</summary>

**b) ro (solo lectura)**

Cuando no se especifica explícitamente `rw` ni `ro` en las opciones de exportación de `/etc/exports`, la opción predeterminada es `ro` (solo lectura). Esto proporciona una capa de seguridad adicional, ya que el administrador debe conceder explícitamente permisos de escritura.

</details>

---

### Pregunta 20

¿Qué opción de montaje NFS especifica la versión del protocolo NFS a utilizar?

a) nfsversion=N
b) proto=N
c) vers=N
d) nfsv=N

<details><summary>Respuesta</summary>

**c) vers=N**

La opción `vers=N` permite especificar la versión del protocolo NFS que el cliente debe utilizar para el montaje. Por ejemplo, `vers=4` fuerza el uso de NFSv4 y `vers=3` fuerza NFSv3. Esto es útil cuando se necesita garantizar compatibilidad o forzar una versión específica.

</details>

---

### Pregunta 21

¿Qué comando se utiliza para mostrar los directorios exportados por el servidor NFS local?

<input type="text" class="fill-blank" data-answer="showmount -e localhost" data-alt="showmount -e,showmount -e 127.0.0.1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**showmount -e localhost**

El comando `showmount -e` seguido del nombre del servidor muestra la lista de directorios exportados y los clientes autorizados. Usando `localhost` o sin argumento de host se consulta el servidor local.

</details>

---

### Pregunta 22

¿Qué comando se utiliza para re-exportar todos los directorios de /etc/exports y aplicar los cambios sin reiniciar NFS?

<input type="text" class="fill-blank" data-answer="exportfs -ra" data-alt="exportfs -r -a" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**exportfs -ra**

El comando `exportfs -ra` re-exporta todos los directorios definidos en `/etc/exports`, sincronizando la tabla de exportaciones activas con el contenido actual del archivo. La opción `-r` indica re-exportar y `-a` indica todos los directorios.

</details>

---

### Pregunta 23

¿Qué comando se utiliza para mostrar los directorios exportados actualmente con sus opciones detalladas?

<input type="text" class="fill-blank" data-answer="exportfs -v" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**exportfs -v**

El comando `exportfs -v` muestra todos los directorios que están actualmente exportados junto con las opciones detalladas de cada exportación, incluyendo las opciones implícitas predeterminadas.

</details>

---

### Pregunta 24

¿Qué comando permite montar un recurso NFS versión 4 del servidor `srv1` en la ruta local `/mnt/datos`?

<input type="text" class="fill-blank" data-answer="mount -t nfs4 srv1:/ /mnt/datos" data-alt="mount -t nfs -o vers=4 srv1:/ /mnt/datos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -t nfs4 srv1:/ /mnt/datos**

Para montar un recurso NFSv4 se utiliza `mount -t nfs4` seguido del servidor y el punto de montaje. Alternativamente, se puede usar `mount -t nfs -o vers=4`. En NFSv4, las rutas son relativas al pseudo-filesystem.

</details>

---

### Pregunta 25

¿Qué comando muestra los clientes que tienen montajes NFS activos en el servidor `fileserver`?

<input type="text" class="fill-blank" data-answer="showmount -a fileserver" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**showmount -a fileserver**

El comando `showmount -a` muestra todos los clientes que tienen montajes activos en el servidor especificado, junto con los directorios que tienen montados. La opción `-d` mostraría solo los directorios montados sin los clientes.

</details>

---
