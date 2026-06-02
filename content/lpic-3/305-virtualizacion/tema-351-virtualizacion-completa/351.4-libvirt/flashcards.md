---
title: "351.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "351.4"
---

# Flashcards: 351.4 - Libvirt

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `virsh define` y `virsh create`?

</div>
<div class="flashcard-back">

**R:** b) `define` registra la VM de forma persistente, `create` la arranca como transitoria. `virsh define` lee un XML y registra la VM de forma persistente (sobrevive reinicios del host) pero no la arranca. `virsh create` arranca la VM inmediatamente pero es transitoria: desaparece al apagarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué URI se utiliza para conectar a KVM/QEMU local con privilegios de sistema?

</div>
<div class="flashcard-back">

**R:** c) `qemu:///system`. `qemu:///system` conecta al demonio libvirtd local con privilegios de sistema (root). `qemu:///session` conecta como usuario sin privilegios. La triple barra `///` indica conexión local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando muestra los discos asignados a una VM?

</div>
<div class="flashcard-back">

**R:** b) `virsh domblklist mi-vm`. `virsh domblklist` lista los dispositivos de bloque (discos) asignados a un dominio. `virsh vol-list` lista volúmenes de un storage pool, no discos de una VM específica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué opción de `virsh migrate` permite migrar una VM sin almacenamiento compartido?

</div>
<div class="flashcard-back">

**R:** b) `--copy-storage-all`. `--copy-storage-all` copia los discos de la VM al host destino durante la migración, eliminando la necesidad de almacenamiento compartido. `--live` mantiene la VM funcionando durante la migración pero requiere almacenamiento compartido por sí solo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué hace `virsh undefine mi-vm` por defecto?

</div>
<div class="flashcard-back">

**R:** b) Elimina la definición XML de la VM pero NO borra los discos. `virsh undefine` solo elimina la definición (archivo XML) de la VM. Los discos permanecen en el sistema. Para eliminar también los discos se debe usar `virsh undefine mi-vm --remove-all-storage`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-006">
<div class="flashcard-front">

**P:** ¿Cuál es el directorio por defecto donde libvirt almacena las imágenes de disco?

</div>
<div class="flashcard-back">

**R:** b) `/var/lib/libvirt/images/`. Este directorio es el storage pool predeterminado (llamado "default") de libvirt. Las definiciones XML de las VMs se almacenan en `/etc/libvirt/qemu/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-007">
<div class="flashcard-front">

**P:** ¿Qué herramienta permite crear una VM de forma automatizada especificando parámetros en la línea de comandos?

</div>
<div class="flashcard-back">

**R:** c) `virt-install`. `virt-install` permite crear VMs de forma automatizada desde la línea de comandos, especificando nombre, RAM, disco, fuente de instalación, red, etc. Es ideal para scripts y aprovisionamiento automatizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué tipo de red virtual libvirt proporciona acceso a la red externa a través de NAT?

</div>
<div class="flashcard-back">

**R:** c) NAT (forward mode='nat'). La red NAT es la red por defecto en libvirt (`default`, usando `virbr0`). Las VMs obtienen IPs privadas y acceden a la red externa a través de NAT. Bridge conecta directamente al bridge del host. Isolated no tiene salida al exterior.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando crea un snapshot de una VM con nombre y descripción?

</div>
<div class="flashcard-back">

**R:** c) `virsh snapshot-create-as mi-vm --name snap1 --description "descripcion"`. `snapshot-create-as` permite crear un snapshot especificando nombre y descripción directamente en la línea de comandos. `snapshot-create` acepta un XML. `virsh save` guarda el estado de la VM a un archivo (no es un snapshot).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-010">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre `qemu:///system` y `qemu:///session`?

</div>
<div class="flashcard-back">

**R:** b) `system` ejecuta VMs como root con acceso a redes bridge, `session` como usuario con red NAT. `qemu:///system` se conecta al demonio libvirtd que ejecuta como root, permitiendo acceso a redes bridge, storage pools del sistema, etc. `qemu:///session` ejecuta un proceso libvirt como usuario normal, limitado a red NAT (slirp) y almacenamiento en el directorio del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh muestra el XML completo de definición de una VM?

</div>
<div class="flashcard-back">

**R:** b) `virsh dumpxml mi-vm`. `virsh dumpxml` muestra la definición XML completa de un dominio, incluyendo toda la configuración de hardware virtual, discos, red, dispositivos y parámetros. Es útil para documentar, clonar o depurar la configuración de una VM. `virsh edit` permite editar el XML directamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de red virtual libvirt crea una red aislada donde las VMs solo pueden comunicarse entre sí, sin acceso al exterior?

</div>
<div class="flashcard-back">

**R:** c) Isolated. Una red isolated (aislada) permite la comunicación entre VMs conectadas a la misma red virtual, pero no proporciona acceso a la red externa ni al host. Es ideal para laboratorios de pruebas y entornos que requieren aislamiento completo de la red de producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh revierte una VM al estado de un snapshot específico?

</div>
<div class="flashcard-back">

**R:** b) `virsh snapshot-revert mi-vm snap1`. `virsh snapshot-revert` restaura la VM al estado exacto del snapshot especificado, incluyendo el estado del disco (y opcionalmente la memoria RAM si se capturó). Los cambios realizados después de la creación del snapshot se pierden si no se ha creado otro snapshot.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué opción de `virsh migrate` permite que la VM continúe funcionando durante el proceso de migración?

</div>
<div class="flashcard-back">

**R:** b) `--live`. La opción `--live` realiza una migración en vivo: la memoria de la VM se copia iterativamente mientras sigue ejecutándose, con una pausa mínima al final para transferir las últimas páginas modificadas. Sin `--live`, la VM se pausa durante toda la transferencia de memoria.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh crea un storage pool de tipo directorio?

</div>
<div class="flashcard-back">

**R:** b) `virsh pool-define-as mi-pool dir --target /var/lib/libvirt/images/mi-pool`. `virsh pool-define-as` define un storage pool de forma persistente. El tipo `dir` indica un pool basado en directorio. Después de definirlo, se debe ejecutar `virsh pool-build` para crear el directorio, `virsh pool-start` para activarlo y `virsh pool-autostart` para habilitarlo en el arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué archivo de configuración principal contiene las opciones del demonio libvirtd?

</div>
<div class="flashcard-back">

**R:** b) `/etc/libvirt/libvirtd.conf`. `/etc/libvirt/libvirtd.conf` configura el demonio libvirtd: puertos de escucha, autenticación, TLS, logging, límites de conexiones, etc. `/etc/libvirt/qemu.conf` configura opciones específicas del driver QEMU. Los XMLs de los dominios se almacenan en `/etc/libvirt/qemu/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh habilita el arranque automático de una VM cuando el host se inicia?

</div>
<div class="flashcard-back">

**R:** b) `virsh autostart mi-vm`. `virsh autostart mi-vm` configura la VM para que se inicie automáticamente cuando libvirtd arranca (normalmente durante el boot del host). Para deshabilitarlo se usa `virsh autostart --disable mi-vm`. Solo funciona con VMs definidas de forma persistente (no transitorias).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué herramienta de libvirt permite clonar una VM existente incluyendo sus discos?

</div>
<div class="flashcard-back">

**R:** b) `virt-clone`. `virt-clone` crea una copia completa de una VM existente, generando nuevos UUIDs, direcciones MAC y copiando los discos. La opción `--auto-clone` autodescubre los discos y genera nombres automáticos. La VM original debe estar apagada durante la clonación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-019">
<div class="flashcard-front">

**P:** En el XML de un dominio libvirt, ¿qué modo de CPU pasa las características exactas de la CPU del host a la VM?

</div>
<div class="flashcard-back">

**R:** b) `<cpu mode='host-passthrough'/>`. `host-passthrough` expone la CPU del host exactamente como es al guest, incluyendo todas las flags. `host-model` crea un modelo de CPU basado en el host pero con mayor compatibilidad para migración. `custom` permite definir un modelo de CPU específico manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué directorio almacena los logs de las VMs QEMU/KVM gestionadas por libvirt?

</div>
<div class="flashcard-back">

**R:** b) `/var/log/libvirt/qemu/`. Los logs de cada VM QEMU/KVM se almacenan en `/var/log/libvirt/qemu/` con el nombre del dominio (por ejemplo, `mi-vm.log`). Estos logs contienen la línea de comandos QEMU ejecutada, mensajes de error y eventos del ciclo de vida de la VM. Son esenciales para la depuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh lista todas las VMs definidas, tanto activas como inactivas?

</div>
<div class="flashcard-back">

**R:** virsh list --all. `virsh list` sin opciones solo muestra las VMs activas (en ejecución). La opción `--all` incluye también las VMs definidas pero apagadas (estado "shut off"). Es el comando más utilizado para obtener una visión general de todas las máquinas virtuales del host.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh conecta a la consola serial de una VM llamada "mi-vm"?

</div>
<div class="flashcard-back">

**R:** virsh console mi-vm. `virsh console` conecta a la consola serial del dominio especificado, permitiendo interactuar con el sistema operativo del guest como si fuera un terminal serie. Para desconectarse se usa la combinación `Ctrl+]`. El guest debe tener configurada una consola serial (ttyS0).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh realiza la migración en vivo de una VM a un host remoto vía SSH?

</div>
<div class="flashcard-back">

**R:** virsh migrate --live mi-vm qemu+ssh://host-destino/system. `virsh migrate --live` ejecuta la migración en vivo, transfiriendo la memoria iterativamente mientras la VM sigue funcionando. La URI `qemu+ssh://host-destino/system` conecta al libvirtd remoto vía SSH. Requiere almacenamiento compartido, misma arquitectura de CPU y libvirtd en ambos hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando crea un volumen de 20GB en formato qcow2 dentro del storage pool "mi-pool"?

</div>
<div class="flashcard-back">

**R:** virsh vol-create-as mi-pool mi-disco.qcow2 20G --format qcow2. `virsh vol-create-as` crea un volumen directamente especificando los parámetros en la línea de comandos. Se indica el nombre del pool, nombre del volumen, tamaño y formato. La alternativa `virsh vol-create` acepta un archivo XML con la definición del volumen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de virsh lista las redes virtuales definidas, incluyendo las inactivas?

</div>
<div class="flashcard-back">

**R:** virsh net-list --all. `virsh net-list --all` muestra todas las redes virtuales definidas en libvirt, incluyendo su estado (activa/inactiva) y si tienen autostart habilitado. Sin `--all`, solo muestra las redes activas. La red "default" (NAT con virbr0) viene preconfigurada en la mayoría de instalaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La diferencia entre `qemu:///system` y `qemu:///session` es crucial. `system` ej...

</div>
<div class="flashcard-back">

**R:** La diferencia entre `qemu:///system` y `qemu:///session` es crucial. `system` ejecuta VMs como root con acceso completo a redes bridge. `session` ejecuta VMs como usuario normal con red NAT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `define` crea una VM persistente (sobrevive reinicios del host). `create` crea u...

</div>
<div class="flashcard-back">

**R:** `define` crea una VM persistente (sobrevive reinicios del host). `create` crea una VM transitoria (desaparece al apagarse). `undefine` elimina la definición pero NO los discos a menos que se use `--remove-all-storage`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La migración en vivo (`--live`) transfiere la memoria mientras la VM sigue funci...

</div>
<div class="flashcard-back">

**R:** La migración en vivo (`--live`) transfiere la memoria mientras la VM sigue funcionando. La opción `--copy-storage-all` permite migrar sin almacenamiento compartido copiando los discos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `qemu:///system`?

</div>
<div class="flashcard-back">

**R:** KVM/QEMU local con privilegios de sistema

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/libvirt/libvirtd.conf`?

</div>
<div class="flashcard-back">

**R:** Configuración del demonio libvirtd

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `/var/lib/libvirt/images/`?

</div>
<div class="flashcard-back">

**R:** Directorio por defecto de imágenes

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Libvirt es la capa de abstracción estándar para gestionar plataformas de virtualización en Linux. Con un peso de 9 puntos, este es el subtema más importante de toda la especialidad LPIC-3 305. Proporci

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-033">
<div class="flashcard-front">

**P:** Que es/son virt-install?

</div>
<div class="flashcard-back">

**R:** Herramienta para crear VMs de forma automatizada:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="351.4">
</div>

<div class="flashcard" data-id="351.4-fc-034">
<div class="flashcard-front">

**P:** Que es/son virt-manager?

</div>
<div class="flashcard-back">

**R:** Interfaz gráfica para gestionar VMs a través de libvirt. Permite:

</div>
</div>

---

