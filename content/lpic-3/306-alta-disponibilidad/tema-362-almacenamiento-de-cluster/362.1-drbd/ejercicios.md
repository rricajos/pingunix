---
title: "362.1 - Ejercicios: DRBD"
tipo: ejercicios
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.1"
peso: 5
tags:
  - lpic-3
  - tema-362
  - ejercicios
  - drbd
---

# 362.1 - Ejercicios: DRBD

### Pregunta 1
¿Que protocolo de replicacion DRBD confirma la escritura solo cuando los datos han sido escritos en el disco del nodo remoto?

a) Protocolo A
b) Protocolo B
c) Protocolo C
d) Protocolo D

<details><summary>Respuesta</summary>

**c) Protocolo C**

El protocolo C (sincrono) es el mas seguro. La escritura se confirma a la aplicacion solo cuando los datos se han escrito tanto en el disco local como en el disco remoto. Es el mas recomendado para produccion.
</details>

### Pregunta 2
¿Que comando se usa para crear los metadatos DRBD en un recurso llamado "datos"?

a) `drbdadm init-md datos`
b) `drbdadm create-md datos`
c) `drbdadm setup datos`
d) `drbdadm format datos`

<details><summary>Respuesta</summary>

**b) `drbdadm create-md datos`**

`drbdadm create-md` inicializa los metadatos DRBD en el disco subyacente. Debe ejecutarse en ambos nodos antes de activar el recurso por primera vez.
</details>

### Pregunta 3
¿Que archivo del sistema proporciona informacion sobre el estado de DRBD en formato legacy?

a) `/proc/drbd`
b) `/sys/drbd/status`
c) `/var/log/drbd.log`
d) `/etc/drbd.d/status`

<details><summary>Respuesta</summary>

**a) `/proc/drbd`**

`/proc/drbd` muestra el estado de todos los dispositivos DRBD en formato legacy del kernel, incluyendo el estado de conexion (cs), rol (ro) y estado del disco (ds).
</details>

### Pregunta 4
En una recuperacion de split-brain manual, ¿que flag se usa en el nodo cuyos datos se van a descartar?

a) `--force`
b) `--discard-my-data`
c) `--overwrite-data`
d) `--invalidate`

<details><summary>Respuesta</summary>

**b) `--discard-my-data`**

En la recuperacion de split-brain, el nodo victima usa `drbdadm connect --discard-my-data recurso` para indicar que sus datos deben ser reemplazados por los del otro nodo.
</details>

### Pregunta 5
¿Que significa el estado de disco (ds) "UpToDate/Inconsistent"?

a) Ambos nodos estan sincronizados
b) El disco local esta actualizado, el remoto esta en resincronizacion
c) Ambos discos son inconsistentes
d) El disco local es inconsistente, el remoto esta actualizado

<details><summary>Respuesta</summary>

**b) El disco local esta actualizado, el remoto esta en resincronizacion**

El formato es "local/remoto". `UpToDate` indica datos actualizados e `Inconsistent` indica que el nodo esta recibiendo datos de resincronizacion o que sus datos no estan completos.
</details>

### Pregunta 6
¿Que se requiere para usar DRBD en modo dual-primary?

a) Solo configurar `allow-two-primaries yes`
b) Un sistema de archivos cluster (GFS2/OCFS2) y fencing
c) Protocolo A obligatoriamente
d) Un minimo de 3 nodos

<details><summary>Respuesta</summary>

**b) Un sistema de archivos cluster (GFS2/OCFS2) y fencing**

El modo dual-primary requiere `allow-two-primaries yes` en la configuracion, un sistema de archivos cluster que soporte escrituras concurrentes (como GFS2 u OCFS2), y fencing configurado para proteger contra split-brain.
</details>

### Pregunta 7
¿Que comando aplica los cambios de configuracion de DRBD sin necesidad de reiniciar el recurso?

a) `drbdadm reload datos`
b) `drbdadm restart datos`
c) `drbdadm adjust datos`
d) `drbdadm reconfigure datos`

<details><summary>Respuesta</summary>

**c) `drbdadm adjust datos`**

`drbdadm adjust` compara la configuracion actual en ejecucion con la del archivo de configuracion y aplica los cambios necesarios sin detener el recurso.
</details>

### Pregunta 8
¿En que seccion del archivo de configuracion DRBD se define el protocolo de replicacion?

a) `global { }`
b) `disk { }`
c) `net { }`
d) `startup { }`

<details><summary>Respuesta</summary>

**c) `net { }`**

El protocolo de replicacion (A, B o C) se define en la seccion `net { }`, ya que es un parametro de red. Ejemplo: `net { protocol C; }`.
</details>

### Pregunta 9
¿Que hace el comando `drbdadm verify datos`?

a) Verifica la configuracion del recurso
b) Compara bloques de datos entre nodos sin detener el servicio
c) Verifica la integridad del sistema de archivos
d) Verifica la conexion de red entre nodos

<details><summary>Respuesta</summary>

**b) Compara bloques de datos entre nodos sin detener el servicio**

La verificacion online compara los datos bloque a bloque entre ambos nodos usando el algoritmo definido en `verify-alg`. No detiene el servicio ni corrige automaticamente las diferencias encontradas.
</details>

### Pregunta 10
¿Cual es el valor predeterminado de `meta-disk` en la configuracion de un recurso DRBD?

a) `external`
b) `internal`
c) `/dev/md0`
d) No tiene valor predeterminado

<details><summary>Respuesta</summary>

**b) `internal`**

`meta-disk internal` almacena los metadatos de DRBD al final del disco subyacente. La alternativa es usar un disco separado con `meta-disk /dev/sdX[indice]`, lo cual puede mejorar el rendimiento.
</details>

### Pregunta 11

¿Que puerto TCP utiliza DRBD por defecto para la comunicacion entre nodos?

a) 7788
b) 7789
c) 8080
d) 3260

<details><summary>Respuesta</summary>

**b) 7789**

DRBD utiliza por defecto el puerto TCP 7789 para la comunicacion entre nodos. Cada recurso DRBD puede configurarse con un puerto diferente especificandolo en la seccion `on nodo { address IP:puerto; }`.
</details>

### Pregunta 12

¿Que protocolo de replicacion DRBD confirma la escritura cuando los datos llegan a la memoria RAM del nodo remoto pero antes de escribirse en su disco?

a) Protocolo A
b) Protocolo B
c) Protocolo C
d) Protocolo D

<details><summary>Respuesta</summary>

**b) Protocolo B**

El protocolo B (semi-sincrono) confirma la escritura cuando los datos han llegado a la memoria del nodo remoto. Ofrece un compromiso entre rendimiento (protocolo A) y seguridad maxima (protocolo C).
</details>

### Pregunta 13

¿Que campo de estado de DRBD indica el rol del nodo local y del nodo remoto?

a) `cs` (Connection State)
b) `ro` (Role)
c) `ds` (Disk State)
d) `ns` (Network State)

<details><summary>Respuesta</summary>

**b) `ro` (Role)**

El campo `ro` muestra los roles en formato "local/remoto". Los valores posibles son `Primary` y `Secondary`. Por ejemplo, `ro:Primary/Secondary` indica que el nodo local es primario y el remoto es secundario.
</details>

### Pregunta 14

¿Que parametro de la seccion `net` de DRBD permite habilitar el modo dual-primary?

a) `protocol C`
b) `allow-two-primaries yes`
c) `dual-primary on`
d) `multi-primary true`

<details><summary>Respuesta</summary>

**b) `allow-two-primaries yes`**

El parametro `allow-two-primaries yes` en la seccion `net` permite que ambos nodos sean primarios simultaneamente. Este modo requiere obligatoriamente un sistema de archivos cluster (GFS2, OCFS2) y fencing configurado.
</details>

### Pregunta 15

¿Que estrategia de auto-recuperacion de split-brain se configura con `after-sb-1pri discard-secondary`?

a) Si hay dos primarios, desconectar ambos
b) Si no hay ningun primario, desconectar
c) Si hay un primario, descartar los datos del secundario
d) Si hay un primario, descartar los datos del primario

<details><summary>Respuesta</summary>

**c) Si hay un primario, descartar los datos del secundario**

`after-sb-1pri discard-secondary` indica que cuando se detecta un split-brain y solo un nodo es primario, se descartan los datos del nodo secundario y se resincroniza desde el primario. Es la estrategia mas comun para la recuperacion automatica.
</details>

### Pregunta 16

¿Que comando desconecta un recurso DRBD llamado "datos" de su nodo par?

a) `drbdadm down datos`
b) `drbdadm stop datos`
c) `drbdadm disconnect datos`
d) `drbdadm detach datos`

<details><summary>Respuesta</summary>

**c) `drbdadm disconnect datos`**

`drbdadm disconnect` interrumpe la conexion de red con el nodo par sin desactivar el recurso localmente. El recurso DRBD sigue activo y accesible en el nodo local, pero las escrituras no se replican hasta reconectar con `drbdadm connect`.
</details>

### Pregunta 17

En la integracion de DRBD con Pacemaker, ¿que tipo de recurso se utiliza para gestionar DRBD?

a) primitive
b) clone
c) group
d) promotable

<details><summary>Respuesta</summary>

**d) promotable**

DRBD se integra con Pacemaker como recurso `promotable` (antes master/slave). Esto permite que Pacemaker gestione cual nodo es primario (Promoted) y cual es secundario (Unpromoted), y realice la promocion automatica durante un failover.
</details>

### Pregunta 18

¿Que parametro de la seccion `disk` controla la tasa maxima de resincronizacion?

a) `sync-rate`
b) `resync-rate`
c) `max-rate`
d) `bandwidth-limit`

<details><summary>Respuesta</summary>

**b) `resync-rate`**

El parametro `resync-rate` en la seccion `disk` define la velocidad maxima de resincronizacion (por ejemplo, `resync-rate 100M`). Limitar esta tasa evita saturar la red durante la resincronizacion, permitiendo que el servicio siga operando.
</details>

### Pregunta 19

¿Que estado de conexion (cs) indica que el recurso DRBD esta completamente conectado al nodo par?

a) WFConnection
b) StandAlone
c) Connected
d) SyncSource

<details><summary>Respuesta</summary>

**c) Connected**

El estado `Connected` indica que la conexion entre nodos esta establecida y los datos se replican normalmente. `WFConnection` indica que espera conexion, `StandAlone` indica que no esta conectado, y `SyncSource` indica resincronizacion activa como fuente.
</details>

### Pregunta 20

¿Que accion realiza `on-io-error detach` cuando ocurre un error de E/S en el disco subyacente de DRBD?

a) Apaga el nodo completamente
b) Ignora el error y continua
c) Desconecta DRBD del disco local y opera en modo diskless
d) Reinicia el recurso DRBD

<details><summary>Respuesta</summary>

**c) Desconecta DRBD del disco local y opera en modo diskless**

`on-io-error detach` hace que DRBD se desconecte del disco local defectuoso y continue operando en modo "diskless", sirviendo los datos desde el nodo remoto. Las alternativas son `pass_on` (pasa el error a la capa superior) y `call-local-io-error` (ejecuta un handler).
</details>

### Pregunta 21

¿Que comando convierte el nodo local a primario para el recurso DRBD "datos" por primera vez (forzando la sincronizacion inicial)?

<input type="text" class="fill-blank" data-answer="drbdadm primary --force datos" data-alt="drbdadm -- --overwrite-data-of-peer primary datos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**drbdadm primary --force datos**

El flag `--force` es necesario solo la primera vez para iniciar la sincronizacion inicial cuando ambos nodos tienen datos inconsistentes. Despues de la sincronizacion inicial, se usa simplemente `drbdadm primary datos` sin `--force`.
</details>

### Pregunta 22

¿Que comando muestra el estado de todos los recursos DRBD configurados?

<input type="text" class="fill-blank" data-answer="drbdadm status" data-alt="cat /proc/drbd" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**drbdadm status**

`drbdadm status` muestra el estado actual de todos los recursos DRBD incluyendo el estado de conexion, roles y estado de disco. La alternativa legacy es `cat /proc/drbd` que muestra informacion similar en formato del kernel.
</details>

### Pregunta 23

¿Que comando inicia la verificacion online del recurso DRBD "datos" para comparar los bloques entre nodos?

<input type="text" class="fill-blank" data-answer="drbdadm verify datos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**drbdadm verify datos**

La verificacion online compara los datos bloque a bloque entre ambos nodos usando el algoritmo definido en `verify-alg` sin detener el servicio. Si se encuentran diferencias, se requiere una resincronizacion posterior para corregirlas.
</details>

### Pregunta 24

¿Que comando se ejecuta en el nodo "victima" para reconectar despues de un split-brain, descartando sus datos locales?

<input type="text" class="fill-blank" data-answer="drbdadm connect --discard-my-data datos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**drbdadm connect --discard-my-data datos**

En la recuperacion manual de split-brain, el nodo cuyos datos se van a descartar debe ejecutar `drbdadm connect --discard-my-data recurso` despues de desconectarse y pasar a secundario. El otro nodo simplemente ejecuta `drbdadm connect recurso`.
</details>

### Pregunta 25

¿Que comando activa (levanta) el recurso DRBD "datos" en el nodo local?

<input type="text" class="fill-blank" data-answer="drbdadm up datos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**drbdadm up datos**

El comando `drbdadm up datos` activa el recurso DRBD, creando el dispositivo `/dev/drbdX`, conectandolo al disco local subyacente e intentando establecer conexion con el nodo par. Debe ejecutarse en ambos nodos.
</details>
