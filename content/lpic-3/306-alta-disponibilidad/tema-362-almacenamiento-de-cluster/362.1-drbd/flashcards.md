---
title: "362.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "362.1"
---

# Flashcards: 362.1 - Drbd

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-001">
<div class="flashcard-front">

**P:** ¿Que protocolo de replicacion DRBD confirma la escritura solo cuando los datos han sido escritos en el disco del nodo remoto?

</div>
<div class="flashcard-back">

**R:** c) Protocolo C. El protocolo C (sincrono) es el mas seguro. La escritura se confirma a la aplicacion solo cuando los datos se han escrito tanto en el disco local como en el disco remoto. Es el mas recomendado para produccion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-002">
<div class="flashcard-front">

**P:** ¿Que comando se usa para crear los metadatos DRBD en un recurso llamado "datos"?

</div>
<div class="flashcard-back">

**R:** b) `drbdadm create-md datos`. `drbdadm create-md` inicializa los metadatos DRBD en el disco subyacente. Debe ejecutarse en ambos nodos antes de activar el recurso por primera vez.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-003">
<div class="flashcard-front">

**P:** ¿Que archivo del sistema proporciona informacion sobre el estado de DRBD en formato legacy?

</div>
<div class="flashcard-back">

**R:** a) `/proc/drbd`. `/proc/drbd` muestra el estado de todos los dispositivos DRBD en formato legacy del kernel, incluyendo el estado de conexion (cs), rol (ro) y estado del disco (ds).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-004">
<div class="flashcard-front">

**P:** En una recuperacion de split-brain manual, ¿que flag se usa en el nodo cuyos datos se van a descartar?

</div>
<div class="flashcard-back">

**R:** b) `--discard-my-data`. En la recuperacion de split-brain, el nodo victima usa `drbdadm connect --discard-my-data recurso` para indicar que sus datos deben ser reemplazados por los del otro nodo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-005">
<div class="flashcard-front">

**P:** ¿Que significa el estado de disco (ds) "UpToDate/Inconsistent"?

</div>
<div class="flashcard-back">

**R:** b) El disco local esta actualizado, el remoto esta en resincronizacion. El formato es "local/remoto". `UpToDate` indica datos actualizados e `Inconsistent` indica que el nodo esta recibiendo datos de resincronizacion o que sus datos no estan completos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-006">
<div class="flashcard-front">

**P:** ¿Que se requiere para usar DRBD en modo dual-primary?

</div>
<div class="flashcard-back">

**R:** b) Un sistema de archivos cluster (GFS2/OCFS2) y fencing. El modo dual-primary requiere `allow-two-primaries yes` en la configuracion, un sistema de archivos cluster que soporte escrituras concurrentes (como GFS2 u OCFS2), y fencing configurado para proteger contra split-brain.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando aplica los cambios de configuracion de DRBD sin necesidad de reiniciar el recurso?

</div>
<div class="flashcard-back">

**R:** c) `drbdadm adjust datos`. `drbdadm adjust` compara la configuracion actual en ejecucion con la del archivo de configuracion y aplica los cambios necesarios sin detener el recurso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-008">
<div class="flashcard-front">

**P:** ¿En que seccion del archivo de configuracion DRBD se define el protocolo de replicacion?

</div>
<div class="flashcard-back">

**R:** c) `net { }`. El protocolo de replicacion (A, B o C) se define en la seccion `net { }`, ya que es un parametro de red. Ejemplo: `net { protocol C; }`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-009">
<div class="flashcard-front">

**P:** ¿Que hace el comando `drbdadm verify datos`?

</div>
<div class="flashcard-back">

**R:** b) Compara bloques de datos entre nodos sin detener el servicio. La verificacion online compara los datos bloque a bloque entre ambos nodos usando el algoritmo definido en `verify-alg`. No detiene el servicio ni corrige automaticamente las diferencias encontradas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-010">
<div class="flashcard-front">

**P:** ¿Cual es el valor predeterminado de `meta-disk` en la configuracion de un recurso DRBD?

</div>
<div class="flashcard-back">

**R:** b) `internal`. `meta-disk internal` almacena los metadatos de DRBD al final del disco subyacente. La alternativa es usar un disco separado con `meta-disk /dev/sdX[indice]`, lo cual puede mejorar el rendimiento.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-011">
<div class="flashcard-front">

**P:** ¿Que puerto TCP utiliza DRBD por defecto para la comunicacion entre nodos?

</div>
<div class="flashcard-back">

**R:** b) 7789. DRBD utiliza por defecto el puerto TCP 7789 para la comunicacion entre nodos. Cada recurso DRBD puede configurarse con un puerto diferente especificandolo en la seccion `on nodo { address IP:puerto; }`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-012">
<div class="flashcard-front">

**P:** ¿Que protocolo de replicacion DRBD confirma la escritura cuando los datos llegan a la memoria RAM del nodo remoto pero antes de escribirse en su disco?

</div>
<div class="flashcard-back">

**R:** b) Protocolo B. El protocolo B (semi-sincrono) confirma la escritura cuando los datos han llegado a la memoria del nodo remoto. Ofrece un compromiso entre rendimiento (protocolo A) y seguridad maxima (protocolo C).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-013">
<div class="flashcard-front">

**P:** ¿Que campo de estado de DRBD indica el rol del nodo local y del nodo remoto?

</div>
<div class="flashcard-back">

**R:** b) `ro` (Role). El campo `ro` muestra los roles en formato "local/remoto". Los valores posibles son `Primary` y `Secondary`. Por ejemplo, `ro:Primary/Secondary` indica que el nodo local es primario y el remoto es secundario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-014">
<div class="flashcard-front">

**P:** ¿Que parametro de la seccion `net` de DRBD permite habilitar el modo dual-primary?

</div>
<div class="flashcard-back">

**R:** b) `allow-two-primaries yes`. El parametro `allow-two-primaries yes` en la seccion `net` permite que ambos nodos sean primarios simultaneamente. Este modo requiere obligatoriamente un sistema de archivos cluster (GFS2, OCFS2) y fencing configurado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-015">
<div class="flashcard-front">

**P:** ¿Que estrategia de auto-recuperacion de split-brain se configura con `after-sb-1pri discard-secondary`?

</div>
<div class="flashcard-back">

**R:** c) Si hay un primario, descartar los datos del secundario. `after-sb-1pri discard-secondary` indica que cuando se detecta un split-brain y solo un nodo es primario, se descartan los datos del nodo secundario y se resincroniza desde el primario. Es la estrategia mas comun para la recuperacion automatica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-016">
<div class="flashcard-front">

**P:** ¿Que comando desconecta un recurso DRBD llamado "datos" de su nodo par?

</div>
<div class="flashcard-back">

**R:** c) `drbdadm disconnect datos`. `drbdadm disconnect` interrumpe la conexion de red con el nodo par sin desactivar el recurso localmente. El recurso DRBD sigue activo y accesible en el nodo local, pero las escrituras no se replican hasta reconectar con `drbdadm connect`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-017">
<div class="flashcard-front">

**P:** En la integracion de DRBD con Pacemaker, ¿que tipo de recurso se utiliza para gestionar DRBD?

</div>
<div class="flashcard-back">

**R:** d) promotable. DRBD se integra con Pacemaker como recurso `promotable` (antes master/slave). Esto permite que Pacemaker gestione cual nodo es primario (Promoted) y cual es secundario (Unpromoted), y realice la promocion automatica durante un failover.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-018">
<div class="flashcard-front">

**P:** ¿Que parametro de la seccion `disk` controla la tasa maxima de resincronizacion?

</div>
<div class="flashcard-back">

**R:** b) `resync-rate`. El parametro `resync-rate` en la seccion `disk` define la velocidad maxima de resincronizacion (por ejemplo, `resync-rate 100M`). Limitar esta tasa evita saturar la red durante la resincronizacion, permitiendo que el servicio siga operando.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-019">
<div class="flashcard-front">

**P:** ¿Que estado de conexion (cs) indica que el recurso DRBD esta completamente conectado al nodo par?

</div>
<div class="flashcard-back">

**R:** c) Connected. El estado `Connected` indica que la conexion entre nodos esta establecida y los datos se replican normalmente. `WFConnection` indica que espera conexion, `StandAlone` indica que no esta conectado, y `SyncSource` indica resincronizacion activa como fuente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-020">
<div class="flashcard-front">

**P:** ¿Que accion realiza `on-io-error detach` cuando ocurre un error de E/S en el disco subyacente de DRBD?

</div>
<div class="flashcard-back">

**R:** c) Desconecta DRBD del disco local y opera en modo diskless. `on-io-error detach` hace que DRBD se desconecte del disco local defectuoso y continue operando en modo "diskless", sirviendo los datos desde el nodo remoto. Las alternativas son `pass_on` (pasa el error a la capa superior) y `call-local-io-error` (ejecuta un handler).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-021">
<div class="flashcard-front">

**P:** ¿Que comando convierte el nodo local a primario para el recurso DRBD "datos" por primera vez (forzando la sincronizacion inicial)?

</div>
<div class="flashcard-back">

**R:** drbdadm primary --force datos. El flag `--force` es necesario solo la primera vez para iniciar la sincronizacion inicial cuando ambos nodos tienen datos inconsistentes. Despues de la sincronizacion inicial, se usa simplemente `drbdadm primary datos` sin `--force`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-022">
<div class="flashcard-front">

**P:** ¿Que comando muestra el estado de todos los recursos DRBD configurados?

</div>
<div class="flashcard-back">

**R:** drbdadm status. `drbdadm status` muestra el estado actual de todos los recursos DRBD incluyendo el estado de conexion, roles y estado de disco. La alternativa legacy es `cat /proc/drbd` que muestra informacion similar en formato del kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-023">
<div class="flashcard-front">

**P:** ¿Que comando inicia la verificacion online del recurso DRBD "datos" para comparar los bloques entre nodos?

</div>
<div class="flashcard-back">

**R:** drbdadm verify datos. La verificacion online compara los datos bloque a bloque entre ambos nodos usando el algoritmo definido en `verify-alg` sin detener el servicio. Si se encuentran diferencias, se requiere una resincronizacion posterior para corregirlas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-024">
<div class="flashcard-front">

**P:** ¿Que comando se ejecuta en el nodo "victima" para reconectar despues de un split-brain, descartando sus datos locales?

</div>
<div class="flashcard-back">

**R:** drbdadm connect --discard-my-data datos. En la recuperacion manual de split-brain, el nodo cuyos datos se van a descartar debe ejecutar `drbdadm connect --discard-my-data recurso` despues de desconectarse y pasar a secundario. El otro nodo simplemente ejecuta `drbdadm connect recurso`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-025">
<div class="flashcard-front">

**P:** ¿Que comando activa (levanta) el recurso DRBD "datos" en el nodo local?

</div>
<div class="flashcard-back">

**R:** drbdadm up datos. El comando `drbdadm up datos` activa el recurso DRBD, creando el dispositivo `/dev/drbdX`, conectandolo al disco local subyacente e intentando establecer conexion con el nodo par. Debe ejecutarse en ambos nodos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Conoce las tres secciones principales: `global`, `common` y `resource`. La secci...

</div>
<div class="flashcard-back">

**R:** Conoce las tres secciones principales: `global`, `common` y `resource`. La seccion `common` aplica valores predeterminados a todos los recursos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El protocolo **C** es el mas usado en produccion porque garantiza que no se pier...

</div>
<div class="flashcard-back">

**R:** El protocolo **C** es el mas usado en produccion porque garantiza que no se pierdan datos. El protocolo **A** es adecuado para replicacion de larga distancia donde la latencia es alta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La verificacion online compara datos bloque a bloque usando el algoritmo definid...

</div>
<div class="flashcard-back">

**R:** La verificacion online compara datos bloque a bloque usando el algoritmo definido en `verify-alg`. No corrige diferencias automaticamente; se necesita resincronizar despues.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: En la recuperacion manual de split-brain, el nodo "victima" usa `--discard-my-da...

</div>
<div class="flashcard-back">

**R:** En la recuperacion manual de split-brain, el nodo "victima" usa `--discard-my-data` al reconectar. Siempre se debe elegir cual nodo tiene los datos correctos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introduccion a DRBD?

</div>
<div class="flashcard-back">

**R:** **DRBD** (Distributed Replicated Block Device) es un sistema de replicacion de dispositivos de bloque a nivel de kernel que replica datos entre dos o mas nodos a traves de la red. Se conoce como **RAID

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-031">
<div class="flashcard-front">

**P:** Que es/son Modos de Sincronizacion (Protocolos)?

</div>
<div class="flashcard-back">

**R:** | Protocolo | Nombre | Descripcion | Rendimiento | Seguridad |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-032">
<div class="flashcard-front">

**P:** Que es/son Verificacion Online?

</div>
<div class="flashcard-back">

**R:** La verificacion online compara los datos entre nodos sin detener el servicio:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-033">
<div class="flashcard-front">

**P:** Que es/son Recuperacion de Split-Brain?

</div>
<div class="flashcard-back">

**R:** Cuando ocurre un split-brain en DRBD (ambos nodos fueron primarios mientras estaban desconectados), se necesita intervencion manual:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="362.1">
</div>

<div class="flashcard" data-id="362.1-fc-034">
<div class="flashcard-front">

**P:** Que es/son Modo Dual-Primary?

</div>
<div class="flashcard-back">

**R:** En modo dual-primary, ambos nodos pueden ser primarios simultaneamente. Requiere un sistema de archivos cluster (GFS2, OCFS2):

</div>
</div>

---

