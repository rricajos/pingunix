---
title: "362.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "362.3"
---

# Flashcards: 362.3 - Sistemas De Archivos Cluster

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-001">
<div class="flashcard-front">

**P:** ¿Que componente coordina los bloqueos entre nodos para los sistemas de archivos cluster?

</div>
<div class="flashcard-back">

**R:** b) DLM (Distributed Lock Manager). El DLM coordina los bloqueos distribuidos entre los nodos del cluster, asegurando que las escrituras concurrentes en GFS2 u OCFS2 no provoquen corrupcion de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-002">
<div class="flashcard-front">

**P:** Al crear un sistema de archivos GFS2, ¿que parametro especifica el numero de journals?

</div>
<div class="flashcard-back">

**R:** c) `-j`. El parametro `-j` especifica el numero de journals al crear un GFS2 con `mkfs.gfs2`. Debe haber al menos un journal por cada nodo que vaya a montar el FS. `-J` (mayuscula) especifica el tamaño de cada journal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-003">
<div class="flashcard-front">

**P:** ¿Que protocolo de bloqueo se especifica con `-p lock_dlm` al crear un GFS2?

</div>
<div class="flashcard-back">

**R:** c) Distributed Lock Manager. `lock_dlm` indica que GFS2 usara el DLM de Pacemaker para coordinar los bloqueos entre nodos. Es la unica opcion valida para uso en cluster (existe `lock_nolock` para uso local de un solo nodo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-004">
<div class="flashcard-front">

**P:** ¿Que framework propio puede usar OCFS2 como alternativa al DLM de Pacemaker?

</div>
<div class="flashcard-back">

**R:** b) o2cb. OCFS2 puede usar su propio framework de cluster llamado `o2cb`, que incluye su propio sistema de heartbeat y gestion de nodos. La alternativa es usar Pacemaker con DLM (`--cluster-stack=pcmk`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando expande un sistema de archivos GFS2 en linea?

</div>
<div class="flashcard-back">

**R:** c) `gfs2_grow`. `gfs2_grow` expande un sistema de archivos GFS2 mientras esta montado (online). Se ejecuta en un nodo y el cambio se propaga a todos los demas nodos que tienen el FS montado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-006">
<div class="flashcard-front">

**P:** ¿Por que es obligatorio el fencing (STONITH) cuando se usan sistemas de archivos cluster?

</div>
<div class="flashcard-back">

**R:** b) Para evitar que un nodo no respondiente siga escribiendo sin coordinacion DLM. Si un nodo deja de comunicarse con el cluster pero sigue activo, podria escribir datos en el almacenamiento compartido sin coordinacion del DLM, causando corrupcion. El fencing asegura que el nodo sea eliminado fisicamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando añade journals adicionales a un GFS2 ya existente para permitir que nuevos nodos lo monten?

</div>
<div class="flashcard-back">

**R:** b) `gfs2_jadd`. `gfs2_jadd -j N /punto_montaje` añade N journals adicionales a un GFS2 montado. Cada nodo que monte el FS necesita su propio journal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-008">
<div class="flashcard-front">

**P:** ¿Que parametro de `mkfs.ocfs2` indica que se usara Pacemaker como stack de cluster?

</div>
<div class="flashcard-back">

**R:** b) `--cluster-stack=pcmk`. `--cluster-stack=pcmk` indica que OCFS2 usara Pacemaker con DLM para la gestion del cluster. La alternativa es `--cluster-stack=o2cb` para usar el framework nativo de OCFS2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-009">
<div class="flashcard-front">

**P:** ¿Cuando se necesita un sistema de archivos cluster en lugar de uno tradicional?

</div>
<div class="flashcard-back">

**R:** b) Cuando multiples nodos necesitan acceso de escritura simultaneo. Los FS cluster (GFS2, OCFS2) son necesarios cuando multiples nodos deben leer y escribir simultaneamente en el mismo dispositivo de bloque. En escenarios activo/pasivo (single-writer), un FS normal es suficiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-010">
<div class="flashcard-front">

**P:** ¿Como se configura el DLM en un cluster Pacemaker?

</div>
<div class="flashcard-back">

**R:** b) Como recurso clone que se ejecuta en todos los nodos. El DLM debe configurarse como recurso clone en Pacemaker para que se ejecute en todos los nodos del cluster. Comando: `pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s clone`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-011">
<div class="flashcard-front">

**P:** ¿Que comando muestra informacion detallada sobre un sistema de archivos GFS2 montado, incluyendo el numero de journals y su uso?

</div>
<div class="flashcard-back">

**R:** b) `tunegfs2 -l /dev/drbd0`. `tunegfs2 -l` muestra informacion del superbloque de GFS2, incluyendo el numero de journals, el protocolo de bloqueo, el nombre de la tabla de bloqueo y otros parametros de configuracion del sistema de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-012">
<div class="flashcard-front">

**P:** ¿Que numero maximo de nodos se recomienda para un cluster GFS2?

</div>
<div class="flashcard-back">

**R:** b) 16. Red Hat recomienda un maximo de 16 nodos para GFS2. OCFS2, en cambio, soporta hasta 255 nodos. Superar el numero recomendado puede causar problemas de rendimiento debido a la gestion de bloqueos distribuidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-013">
<div class="flashcard-front">

**P:** Al configurar GFS2 en Pacemaker, ¿que tipo de restriccion asegura que el DLM se inicie antes que el sistema de archivos?

</div>
<div class="flashcard-back">

**R:** b) Restriccion de orden (order). La restriccion de orden (`pcs constraint order dlm-clone then gfs2_fs-clone`) asegura que el DLM este completamente iniciado antes de intentar montar el sistema de archivos GFS2. Sin DLM activo, GFS2 no puede funcionar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-014">
<div class="flashcard-front">

**P:** ¿Que sucede si dos nodos montan el mismo dispositivo de bloque con un sistema de archivos ext4 simultaneamente?

</div>
<div class="flashcard-back">

**R:** b) Se produce corrupcion de datos. Los sistemas de archivos tradicionales como ext4 asumen un unico escritor. Si dos nodos montan el mismo dispositivo con ext4, ambos escribiran sin coordinacion, corrompiendo inevitablemente los datos. Para acceso multi-nodo se requiere GFS2 u OCFS2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-015">
<div class="flashcard-front">

**P:** ¿Que opcion de `mkfs.ocfs2` define el tipo de carga de trabajo optimizada para el sistema de archivos?

</div>
<div class="flashcard-back">

**R:** b) `-T`. La opcion `-T` de `mkfs.ocfs2` permite especificar el tipo de carga de trabajo para optimizar el sistema de archivos. Los valores posibles incluyen `mail`, `datafiles` y `vmstore`, cada uno ajustando parametros como el tamaño de bloque y cluster.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando verifica los montajes OCFS2 activos en el cluster mostrando informacion de los dispositivos?

</div>
<div class="flashcard-back">

**R:** b) `mounted.ocfs2 -d`. `mounted.ocfs2 -d` muestra todos los montajes OCFS2 activos en el sistema, incluyendo informacion detallada sobre los dispositivos. Es util para verificar que todos los nodos tienen el sistema de archivos montado correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-017">
<div class="flashcard-front">

**P:** ¿Que puerto TCP utiliza por defecto o2cb para la comunicacion entre nodos del cluster OCFS2?

</div>
<div class="flashcard-back">

**R:** c) 7777. El framework o2cb de OCFS2 utiliza el puerto TCP 7777 por defecto para la comunicacion entre nodos del cluster. Este puerto se configura en el archivo `/etc/ocfs2/cluster.conf` mediante la directiva `ip_port`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-018">
<div class="flashcard-front">

**P:** En un escenario activo/pasivo con un solo nodo escribiendo en el almacenamiento compartido, ¿se necesita un sistema de archivos cluster?

</div>
<div class="flashcard-back">

**R:** b) No, un FS tradicional (ext4, XFS) es suficiente si solo un nodo accede a la vez. En un escenario single-writer (activo/pasivo), solo un nodo accede al dispositivo de bloque en cada momento. Pacemaker se encarga de que el FS se desmonte en un nodo antes de montarse en otro. GFS2/OCFS2 solo son necesarios cuando multiples nodos escriben simultaneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-019">
<div class="flashcard-front">

**P:** ¿Que comando permite expandir un sistema de archivos OCFS2 en linea?

</div>
<div class="flashcard-back">

**R:** c) `tunefs.ocfs2 -S /dev/sdb1`. `tunefs.ocfs2 -S` expande un sistema de archivos OCFS2 en linea (mientras esta montado). La opcion `-S` redimensiona el FS para ocupar todo el espacio disponible en el dispositivo subyacente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-020">
<div class="flashcard-front">

**P:** ¿Que valor se usa en la opcion `-p` de `mkfs.gfs2` cuando GFS2 se va a usar en un solo nodo sin cluster?

</div>
<div class="flashcard-back">

**R:** c) `lock_nolock`. `-p lock_nolock` indica que GFS2 no usara bloqueo distribuido, permitiendo su uso en un solo nodo sin necesidad de cluster ni DLM. Para uso en cluster con multiples nodos, se debe usar `-p lock_dlm`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para crear un sistema de archivos GFS2 con protocolo DLM, nombre de tabla "mi_cluster:datos", 4 journals, en el dispositivo /dev/sdb1. <input type="text" class="fill-blank" data-answer="mkfs.gfs2 -p lock_dlm -t mi_cluster:datos -j 4 /dev/sdb1" data-alt="mkfs.gfs2 -p lock_dlm -j 4 -t mi_cluster:datos /dev/sdb1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mkfs.gfs2 -p lock_dlm -t mi_cluster:datos -j 4 /dev/sdb1. `mkfs.gfs2` requiere `-p lock_dlm` para el protocolo de bloqueo, `-t cluster:nombre` para la tabla de bloqueo, `-j N` para el numero de journals (uno por nodo) y el dispositivo de bloque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para añadir 2 journals adicionales a un sistema de archivos GFS2 montado en /mnt/datos. <input type="text" class="fill-blank" data-answer="gfs2_jadd -j 2 /mnt/datos" data-alt="gfs2_jadd -j2 /mnt/datos" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gfs2_jadd -j 2 /mnt/datos. `gfs2_jadd` permite añadir journals a un GFS2 montado. Esto es necesario cuando se agregan nuevos nodos al cluster, ya que cada nodo requiere su propio journal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para crear un recurso DLM como clone en Pacemaker con monitorizacion cada 30 segundos y accion on-fail fence. <input type="text" class="fill-blank" data-answer="pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s on-fail=fence clone" data-alt="pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s on-fail=fence clone" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** pcs resource create dlm ocf:pacemaker:controld op monitor interval=30s on-fail=fence clone. El DLM se crea como recurso de tipo `ocf:pacemaker:controld` y debe ser un clone para ejecutarse en todos los nodos. La opcion `on-fail=fence` asegura que si el DLM falla, se aplique fencing al nodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para verificar y reparar un sistema de archivos OCFS2 en el dispositivo /dev/sdb1 aceptando todas las correcciones automaticamente. <input type="text" class="fill-blank" data-answer="fsck.ocfs2 -y /dev/sdb1" data-alt="fsck.ocfs2 -y /dev/sdb1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** fsck.ocfs2 -y /dev/sdb1. `fsck.ocfs2 -y` verifica y repara el sistema de archivos OCFS2 respondiendo "si" a todas las preguntas de correccion. El sistema de archivos debe estar desmontado (offline) en todos los nodos antes de ejecutar fsck.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para cambiar el numero maximo de nodos a 8 en un sistema de archivos OCFS2 en /dev/sdb1. <input type="text" class="fill-blank" data-answer="tunefs.ocfs2 -N 8 /dev/sdb1" data-alt="tunefs.ocfs2 -N8 /dev/sdb1" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tunefs.ocfs2 -N 8 /dev/sdb1. `tunefs.ocfs2 -N` permite cambiar el numero maximo de nodos que pueden montar el sistema de archivos OCFS2 simultaneamente. Esto puede requerir que el FS este desmontado dependiendo de la version.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: El DLM es **obligatorio** para GFS2 y OCFS2. Debe configurarse como recurso clon...

</div>
<div class="flashcard-back">

**R:** El DLM es **obligatorio** para GFS2 y OCFS2. Debe configurarse como recurso clone (ejecutandose en todos los nodos). Sin DLM, el FS cluster no puede montarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El numero de journals (`-j`) debe ser al menos igual al numero de nodos que mont...

</div>
<div class="flashcard-back">

**R:** El numero de journals (`-j`) debe ser al menos igual al numero de nodos que montaran el FS. Cada nodo necesita su propio journal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: **Nunca** deshabilites STONITH cuando uses GFS2 u OCFS2 en produccion. El fencin...

</div>
<div class="flashcard-back">

**R:** **Nunca** deshabilites STONITH cuando uses GFS2 u OCFS2 en produccion. El fencing es un requisito obligatorio para la integridad de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: Si el examen pregunta cuando usar GFS2/OCFS2, la respuesta es: cuando multiples ...

</div>
<div class="flashcard-back">

**R:** Si el examen pregunta cuando usar GFS2/OCFS2, la respuesta es: cuando multiples nodos necesitan acceso de escritura simultaneo al mismo dispositivo de bloque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-030">
<div class="flashcard-front">

**P:** Que es/son DLM - Distributed Lock Manager?

</div>
<div class="flashcard-back">

**R:** El **DLM** es el componente que coordina los bloqueos entre nodos del cluster. Es necesario para GFS2 y OCFS2.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-031">
<div class="flashcard-front">

**P:** Que es/son GFS2 - Global File System 2?

</div>
<div class="flashcard-back">

**R:** **GFS2** es un sistema de archivos cluster desarrollado por Red Hat, integrado en el kernel Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son OCFS2 - Oracle Cluster File System 2?

</div>
<div class="flashcard-back">

**R:** **OCFS2** es un sistema de archivos cluster desarrollado por Oracle, tambien integrado en el kernel Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Requisitos de Fencing?

</div>
<div class="flashcard-back">

**R:** Los sistemas de archivos cluster **requieren fencing** configurado para funcionar correctamente:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Comparativa GFS2 vs OCFS2?

</div>
<div class="flashcard-back">

**R:** | Caracteristica | GFS2 | OCFS2 |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.3">
</div>

<div class="flashcard" data-id="362.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

