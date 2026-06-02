---
title: "362.3 - Ejercicios: Sistemas de Archivos Cluster"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.3"
peso: 3
tags:
  - lpic-3
  - tema-362
  - ejercicios
  - gfs2
  - ocfs2
---

# 362.3 - Ejercicios: Sistemas de Archivos Cluster

### Pregunta 1
¿Que componente coordina los bloqueos entre nodos para los sistemas de archivos cluster?

a) Corosync
b) DLM (Distributed Lock Manager)
c) STONITH
d) CIB

<details><summary>Respuesta</summary>

**b) DLM (Distributed Lock Manager)**

El DLM coordina los bloqueos distribuidos entre los nodos del cluster, asegurando que las escrituras concurrentes en GFS2 u OCFS2 no provoquen corrupcion de datos.
</details>

### Pregunta 2
Al crear un sistema de archivos GFS2, ¿que parametro especifica el numero de journals?

a) `-n`
b) `-N`
c) `-j`
d) `-J`

<details><summary>Respuesta</summary>

**c) `-j`**

El parametro `-j` especifica el numero de journals al crear un GFS2 con `mkfs.gfs2`. Debe haber al menos un journal por cada nodo que vaya a montar el FS. `-J` (mayuscula) especifica el tamaño de cada journal.
</details>

### Pregunta 3
¿Que protocolo de bloqueo se especifica con `-p lock_dlm` al crear un GFS2?

a) Bloqueo local
b) Bloqueo basado en NFS
c) Distributed Lock Manager
d) Bloqueo basado en POSIX

<details><summary>Respuesta</summary>

**c) Distributed Lock Manager**

`lock_dlm` indica que GFS2 usara el DLM de Pacemaker para coordinar los bloqueos entre nodos. Es la unica opcion valida para uso en cluster (existe `lock_nolock` para uso local de un solo nodo).
</details>

### Pregunta 4
¿Que framework propio puede usar OCFS2 como alternativa al DLM de Pacemaker?

a) dlm_controld
b) o2cb
c) cman
d) rgmanager

<details><summary>Respuesta</summary>

**b) o2cb**

OCFS2 puede usar su propio framework de cluster llamado `o2cb`, que incluye su propio sistema de heartbeat y gestion de nodos. La alternativa es usar Pacemaker con DLM (`--cluster-stack=pcmk`).
</details>

### Pregunta 5
¿Que comando expande un sistema de archivos GFS2 en linea?

a) `resize2fs`
b) `xfs_growfs`
c) `gfs2_grow`
d) `tunegfs2 --grow`

<details><summary>Respuesta</summary>

**c) `gfs2_grow`**

`gfs2_grow` expande un sistema de archivos GFS2 mientras esta montado (online). Se ejecuta en un nodo y el cambio se propaga a todos los demas nodos que tienen el FS montado.
</details>

### Pregunta 6
¿Por que es obligatorio el fencing (STONITH) cuando se usan sistemas de archivos cluster?

a) Para mejorar el rendimiento de E/S
b) Para evitar que un nodo no respondiente siga escribiendo sin coordinacion DLM
c) Para gestionar las copias de seguridad
d) Para balancear la carga de E/S entre nodos

<details><summary>Respuesta</summary>

**b) Para evitar que un nodo no respondiente siga escribiendo sin coordinacion DLM**

Si un nodo deja de comunicarse con el cluster pero sigue activo, podria escribir datos en el almacenamiento compartido sin coordinacion del DLM, causando corrupcion. El fencing asegura que el nodo sea eliminado fisicamente.
</details>

### Pregunta 7
¿Que comando añade journals adicionales a un GFS2 ya existente para permitir que nuevos nodos lo monten?

a) `mkfs.gfs2 -j`
b) `gfs2_jadd`
c) `tunegfs2 -j`
d) `gfs2_journal_add`

<details><summary>Respuesta</summary>

**b) `gfs2_jadd`**

`gfs2_jadd -j N /punto_montaje` añade N journals adicionales a un GFS2 montado. Cada nodo que monte el FS necesita su propio journal.
</details>

### Pregunta 8
¿Que parametro de `mkfs.ocfs2` indica que se usara Pacemaker como stack de cluster?

a) `--cluster-stack=dlm`
b) `--cluster-stack=pcmk`
c) `--cluster-stack=pacemaker`
d) `--pacemaker`

<details><summary>Respuesta</summary>

**b) `--cluster-stack=pcmk`**

`--cluster-stack=pcmk` indica que OCFS2 usara Pacemaker con DLM para la gestion del cluster. La alternativa es `--cluster-stack=o2cb` para usar el framework nativo de OCFS2.
</details>

### Pregunta 9
¿Cuando se necesita un sistema de archivos cluster en lugar de uno tradicional?

a) Cuando se quiere mejor rendimiento de lectura
b) Cuando multiples nodos necesitan acceso de escritura simultaneo
c) Cuando se usa RAID por software
d) Cuando el almacenamiento es local (DAS)

<details><summary>Respuesta</summary>

**b) Cuando multiples nodos necesitan acceso de escritura simultaneo**

Los FS cluster (GFS2, OCFS2) son necesarios cuando multiples nodos deben leer y escribir simultaneamente en el mismo dispositivo de bloque. En escenarios activo/pasivo (single-writer), un FS normal es suficiente.
</details>

### Pregunta 10
¿Como se configura el DLM en un cluster Pacemaker?

a) Como recurso primitivo en un solo nodo
b) Como recurso clone que se ejecuta en todos los nodos
c) Como propiedad del cluster
d) Como modulo del kernel sin recurso Pacemaker

<details><summary>Respuesta</summary>

**b) Como recurso clone que se ejecuta en todos los nodos**

El DLM debe configurarse como recurso clone en Pacemaker para que se ejecute en todos los nodos del cluster. Comando: `pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s clone`.
</details>

### Pregunta 11

¿Que comando muestra informacion detallada sobre un sistema de archivos GFS2 montado, incluyendo el numero de journals y su uso?

a) `gfs2_info /mnt/datos`
b) `tunegfs2 -l /dev/drbd0`
c) `gfs2_stat /mnt/datos`
d) `gfs2_dump /dev/drbd0`

<details><summary>Respuesta</summary>

**b) `tunegfs2 -l /dev/drbd0`**

`tunegfs2 -l` muestra informacion del superbloque de GFS2, incluyendo el numero de journals, el protocolo de bloqueo, el nombre de la tabla de bloqueo y otros parametros de configuracion del sistema de archivos.
</details>

### Pregunta 12

¿Que numero maximo de nodos se recomienda para un cluster GFS2?

a) 8
b) 16
c) 64
d) 255

<details><summary>Respuesta</summary>

**b) 16**

Red Hat recomienda un maximo de 16 nodos para GFS2. OCFS2, en cambio, soporta hasta 255 nodos. Superar el numero recomendado puede causar problemas de rendimiento debido a la gestion de bloqueos distribuidos.
</details>

### Pregunta 13

Al configurar GFS2 en Pacemaker, ¿que tipo de restriccion asegura que el DLM se inicie antes que el sistema de archivos?

a) Restriccion de colocacion (colocation)
b) Restriccion de orden (order)
c) Restriccion de ubicacion (location)
d) Restriccion de afinidad (affinity)

<details><summary>Respuesta</summary>

**b) Restriccion de orden (order)**

La restriccion de orden (`pcs constraint order dlm-clone then gfs2_fs-clone`) asegura que el DLM este completamente iniciado antes de intentar montar el sistema de archivos GFS2. Sin DLM activo, GFS2 no puede funcionar.
</details>

### Pregunta 14

¿Que sucede si dos nodos montan el mismo dispositivo de bloque con un sistema de archivos ext4 simultaneamente?

a) El acceso se serializa automaticamente
b) Se produce corrupcion de datos
c) El segundo nodo obtiene acceso de solo lectura
d) El kernel impide el segundo montaje

<details><summary>Respuesta</summary>

**b) Se produce corrupcion de datos**

Los sistemas de archivos tradicionales como ext4 asumen un unico escritor. Si dos nodos montan el mismo dispositivo con ext4, ambos escribiran sin coordinacion, corrompiendo inevitablemente los datos. Para acceso multi-nodo se requiere GFS2 u OCFS2.
</details>

### Pregunta 15

¿Que opcion de `mkfs.ocfs2` define el tipo de carga de trabajo optimizada para el sistema de archivos?

a) `-W`
b) `-T`
c) `--workload`
d) `--optimize`

<details><summary>Respuesta</summary>

**b) `-T`**

La opcion `-T` de `mkfs.ocfs2` permite especificar el tipo de carga de trabajo para optimizar el sistema de archivos. Los valores posibles incluyen `mail`, `datafiles` y `vmstore`, cada uno ajustando parametros como el tamaño de bloque y cluster.
</details>

### Pregunta 16

¿Que comando verifica los montajes OCFS2 activos en el cluster mostrando informacion de los dispositivos?

a) `ocfs2_check -m`
b) `mounted.ocfs2 -d`
c) `ocfs2_mounted --detail`
d) `tunefs.ocfs2 --mounted`

<details><summary>Respuesta</summary>

**b) `mounted.ocfs2 -d`**

`mounted.ocfs2 -d` muestra todos los montajes OCFS2 activos en el sistema, incluyendo informacion detallada sobre los dispositivos. Es util para verificar que todos los nodos tienen el sistema de archivos montado correctamente.
</details>

### Pregunta 17

¿Que puerto TCP utiliza por defecto o2cb para la comunicacion entre nodos del cluster OCFS2?

a) 3260
b) 7788
c) 7777
d) 2049

<details><summary>Respuesta</summary>

**c) 7777**

El framework o2cb de OCFS2 utiliza el puerto TCP 7777 por defecto para la comunicacion entre nodos del cluster. Este puerto se configura en el archivo `/etc/ocfs2/cluster.conf` mediante la directiva `ip_port`.
</details>

### Pregunta 18

En un escenario activo/pasivo con un solo nodo escribiendo en el almacenamiento compartido, ¿se necesita un sistema de archivos cluster?

a) Si, siempre que se use almacenamiento compartido
b) No, un FS tradicional (ext4, XFS) es suficiente si solo un nodo accede a la vez
c) Si, porque el DLM protege contra fallos de hardware
d) No, pero se necesita NFS para coordinar el acceso

<details><summary>Respuesta</summary>

**b) No, un FS tradicional (ext4, XFS) es suficiente si solo un nodo accede a la vez**

En un escenario single-writer (activo/pasivo), solo un nodo accede al dispositivo de bloque en cada momento. Pacemaker se encarga de que el FS se desmonte en un nodo antes de montarse en otro. GFS2/OCFS2 solo son necesarios cuando multiples nodos escriben simultaneamente.
</details>

### Pregunta 19

¿Que comando permite expandir un sistema de archivos OCFS2 en linea?

a) `ocfs2_grow /dev/sdb1`
b) `resize.ocfs2 /dev/sdb1`
c) `tunefs.ocfs2 -S /dev/sdb1`
d) `ocfs2_resize --online /dev/sdb1`

<details><summary>Respuesta</summary>

**c) `tunefs.ocfs2 -S /dev/sdb1`**

`tunefs.ocfs2 -S` expande un sistema de archivos OCFS2 en linea (mientras esta montado). La opcion `-S` redimensiona el FS para ocupar todo el espacio disponible en el dispositivo subyacente.
</details>

### Pregunta 20

¿Que valor se usa en la opcion `-p` de `mkfs.gfs2` cuando GFS2 se va a usar en un solo nodo sin cluster?

a) `lock_local`
b) `lock_none`
c) `lock_nolock`
d) `lock_single`

<details><summary>Respuesta</summary>

**c) `lock_nolock`**

`-p lock_nolock` indica que GFS2 no usara bloqueo distribuido, permitiendo su uso en un solo nodo sin necesidad de cluster ni DLM. Para uso en cluster con multiples nodos, se debe usar `-p lock_dlm`.
</details>

### Pregunta 21

Escribe el comando para crear un sistema de archivos GFS2 con protocolo DLM, nombre de tabla "mi_cluster:datos", 4 journals, en el dispositivo /dev/sdb1.

<input type="text" class="fill-blank" data-answer="mkfs.gfs2 -p lock_dlm -t mi_cluster:datos -j 4 /dev/sdb1" data-alt="mkfs.gfs2 -p lock_dlm -j 4 -t mi_cluster:datos /dev/sdb1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkfs.gfs2 -p lock_dlm -t mi_cluster:datos -j 4 /dev/sdb1**

`mkfs.gfs2` requiere `-p lock_dlm` para el protocolo de bloqueo, `-t cluster:nombre` para la tabla de bloqueo, `-j N` para el numero de journals (uno por nodo) y el dispositivo de bloque.
</details>

### Pregunta 22

Escribe el comando para añadir 2 journals adicionales a un sistema de archivos GFS2 montado en /mnt/datos.

<input type="text" class="fill-blank" data-answer="gfs2_jadd -j 2 /mnt/datos" data-alt="gfs2_jadd -j2 /mnt/datos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gfs2_jadd -j 2 /mnt/datos**

`gfs2_jadd` permite añadir journals a un GFS2 montado. Esto es necesario cuando se agregan nuevos nodos al cluster, ya que cada nodo requiere su propio journal.
</details>

### Pregunta 23

Escribe el comando para crear un recurso DLM como clone en Pacemaker con monitorizacion cada 30 segundos y accion on-fail fence.

<input type="text" class="fill-blank" data-answer="pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s on-fail=fence clone" data-alt="pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s on-fail=fence clone" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s on-fail=fence clone**

El DLM se crea como recurso de tipo `ocf:pacemaker:controld` y debe ser un clone para ejecutarse en todos los nodos. La opcion `on-fail=fence` asegura que si el DLM falla, se aplique fencing al nodo.
</details>

### Pregunta 24

Escribe el comando para verificar y reparar un sistema de archivos OCFS2 en el dispositivo /dev/sdb1 aceptando todas las correcciones automaticamente.

<input type="text" class="fill-blank" data-answer="fsck.ocfs2 -y /dev/sdb1" data-alt="fsck.ocfs2 -y /dev/sdb1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**fsck.ocfs2 -y /dev/sdb1**

`fsck.ocfs2 -y` verifica y repara el sistema de archivos OCFS2 respondiendo "si" a todas las preguntas de correccion. El sistema de archivos debe estar desmontado (offline) en todos los nodos antes de ejecutar fsck.
</details>

### Pregunta 25

Escribe el comando para cambiar el numero maximo de nodos a 8 en un sistema de archivos OCFS2 en /dev/sdb1.

<input type="text" class="fill-blank" data-answer="tunefs.ocfs2 -N 8 /dev/sdb1" data-alt="tunefs.ocfs2 -N8 /dev/sdb1" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tunefs.ocfs2 -N 8 /dev/sdb1**

`tunefs.ocfs2 -N` permite cambiar el numero maximo de nodos que pueden montar el sistema de archivos OCFS2 simultaneamente. Esto puede requerir que el FS este desmontado dependiendo de la version.
</details>
