---
title: "101.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "101.3"
---

# Flashcards: 101.3 - Niveles De Ejecucion Y Targets

> 30 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-001">
<div class="flashcard-front">

**P:** En un sistema con SysVinit, que runlevel se utiliza para reiniciar el sistema?

</div>
<div class="flashcard-back">

**R:** d) Runlevel 6. El runlevel 6 se utiliza para reiniciar el sistema. El runlevel 0 es para apagado, el runlevel 1 es modo monousuario para mantenimiento, y el runlevel 5 es multiusuario con entorno grafico. Los runlevels 0, 1 y 6 son universales en todas las distribuciones Linux que usan SysVinit.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-002">
<div class="flashcard-front">

**P:** Que directorio contiene los archivos de unidad (unit files) del administrador en systemd, con la mayor prioridad?

</div>
<div class="flashcard-back">

**R:** c) /etc/systemd/system/. Los archivos de unidad en `/etc/systemd/system/` tienen la prioridad mas alta y sobreescriben los archivos con el mismo nombre en `/lib/systemd/system/` (o `/usr/lib/systemd/system/`). Esto permite al administrador personalizar servicios sin modificar los archivos originales proporcionados por los paquetes del sistema. `/run/systemd/system/` tiene prioridad media y contiene archivos generados en tiempo de ejecucion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-003">
<div class="flashcard-front">

**P:** Que hace la opcion -k del comando shutdown?

</div>
<div class="flashcard-back">

**R:** c) Solo envia un mensaje de aviso a los usuarios, sin apagar realmente el sistema. La opcion `-k` (kick) de `shutdown` envia un mensaje de advertencia a todos los usuarios conectados, simulando un apagado programado, pero sin apagar realmente el sistema. Es util para probar las notificaciones o para advertir a los usuarios sin ejecutar la accion. Por ejemplo: `shutdown -k +10 "El sistema se apagara en 10 minutos"` envia el aviso pero no apaga.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-004">
<div class="flashcard-front">

**P:** Que tipo de unidad de systemd (unit type) se utiliza para definir un punto de montaje del sistema de archivos?

</div>
<div class="flashcard-back">

**R:** b) .mount. Las unidades con extension `.mount` definen puntos de montaje en systemd. Otros tipos importantes son: `.service` (servicios del sistema), `.target` (agrupacion de unidades, equivalente a runlevels), `.socket` (activacion bajo demanda por sockets), `.timer` (programacion de tareas, equivalente a cron), `.device` (dispositivos), `.path` (monitorizacion de archivos) y `.swap` (espacio de intercambio).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-005">
<div class="flashcard-front">

**P:** Que comando se usa para verificar si un servicio esta configurado para iniciarse automaticamente en el arranque?

</div>
<div class="flashcard-back">

**R:** c) systemctl is-enabled servicio. `systemctl is-enabled` comprueba si un servicio esta habilitado para iniciarse automaticamente en el arranque, devolviendo "enabled" o "disabled". `systemctl is-active` comprueba si el servicio esta actualmente en ejecucion. `systemctl status` muestra informacion completa del servicio (estado, PID, logs recientes). `systemctl list-units` lista las unidades cargadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-006">
<div class="flashcard-front">

**P:** En el archivo /etc/inittab de SysVinit, que accion se ejecuta cuando el usuario presiona Ctrl+Alt+Del?

</div>
<div class="flashcard-back">

**R:** b) La accion definida con la directiva `ctrlaltdel`. En `/etc/inittab`, la linea con la accion `ctrlaltdel` define que comando se ejecuta cuando el usuario presiona la combinacion Ctrl+Alt+Del. Tipicamente es `ca::ctrlaltdel:/sbin/shutdown -r now` para reiniciar el sistema. La directiva `sysinit` se ejecuta al iniciar el sistema, y `respawn` reinicia automaticamente un proceso si se detiene. En sistemas con systemd, esta funcionalidad se gestiona mediante `ctrl-alt-del.target`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-007">
<div class="flashcard-front">

**P:** Que comando de systemctl se usa para impedir completamente que un servicio pueda ser iniciado, ni manualmente ni por dependencias?

</div>
<div class="flashcard-back">

**R:** c) systemctl mask servicio. `systemctl mask` enmascara un servicio creando un enlace simbolico que apunta a `/dev/null`, lo que impide que el servicio pueda ser iniciado por cualquier medio: manual, automatico o por dependencias. `systemctl disable` solo evita el inicio automatico pero permite el inicio manual. `systemctl stop` solo detiene el servicio en ejecucion pero no impide que se inicie de nuevo. Para desenmascarar se usa `systemctl unmask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-008">
<div class="flashcard-front">

**P:** Que cabecera LSB en un script de /etc/init.d/ define en que runlevels el servicio debe iniciarse por defecto?

</div>
<div class="flashcard-back">

**R:** c) Default-Start. La cabecera `Default-Start` lista los runlevels en los que el servicio debe iniciarse automaticamente (por ejemplo, `2 3 4 5`). `Default-Stop` lista los runlevels en los que debe detenerse. `Required-Start` define las dependencias del servicio (que debe estar iniciado antes). `Provides` define el nombre del servicio que proporciona el script. Estas cabeceras son utilizadas por herramientas como `insserv` para calcular el orden correcto de arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-009">
<div class="flashcard-front">

**P:** Que runlevel de SysVinit NO esta definido por estandar y se reserva para uso personalizado?

</div>
<div class="flashcard-back">

**R:** c) Runlevel 4. El runlevel 4 no esta definido por el estandar y se reserva para uso personalizado por el administrador del sistema. Los runlevels con proposito definido son: 0 (apagado), 1 (monousuario), 2 (multiusuario sin red), 3 (multiusuario con red), 5 (multiusuario grafico) y 6 (reinicio). Sin embargo, los runlevels 2-5 pueden variar entre distribuciones; por ejemplo, en Debian/Ubuntu los runlevels 2-5 son identicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-010">
<div class="flashcard-front">

**P:** Que comando de systemctl lista todas las dependencias de un target especifico?

</div>
<div class="flashcard-back">

**R:** b) systemctl list-dependencies multi-user.target. `systemctl list-dependencies` muestra el arbol de dependencias de una unidad (servicio, target, etc.), mostrando todas las unidades que se inician cuando se activa ese target. Con la opcion `--reverse` se pueden ver las dependencias inversas, es decir, que unidades dependen de la unidad especificada.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-011">
<div class="flashcard-front">

**P:** Que comando se usa para ver el target por defecto en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** systemctl get-default. `systemctl get-default` muestra el target que se activa al arrancar el sistema, tipicamente `graphical.target` en escritorios o `multi-user.target` en servidores. Este target esta definido por el enlace simbolico `/etc/systemd/system/default.target`. Para cambiarlo se usa `systemctl set-default`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-012">
<div class="flashcard-front">

**P:** Que comando se utiliza para cambiar inmediatamente al target multi-user (modo texto) en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** systemctl isolate multi-user.target. `systemctl isolate multi-user.target` cambia inmediatamente al modo multiusuario texto, deteniendo todos los servicios que no pertenecen a ese target (como el entorno grafico) e iniciando los que faltan. Es el equivalente a `init 3` o `telinit 3` en SysVinit. Este cambio es temporal y no modifica el target por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-013">
<div class="flashcard-front">

**P:** Que comando de SysVinit se utiliza para ver el runlevel actual y el anterior?

</div>
<div class="flashcard-back">

**R:** runlevel. El comando `runlevel` muestra dos valores: el runlevel anterior y el actual. Por ejemplo, la salida `N 3` indica que no hubo runlevel previo (N) y el actual es 3. Si la salida fuera `3 5`, significaria que se cambio del runlevel 3 al 5.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-014">
<div class="flashcard-front">

**P:** Que comando apaga el sistema inmediatamente en un sistema con systemd?

</div>
<div class="flashcard-back">

**R:** systemctl poweroff. `systemctl poweroff` apaga el sistema inmediatamente, deteniendo todos los servicios y enviando la senal ACPI para cortar la alimentacion. Alternativas equivalentes son `shutdown -h now`, `poweroff` e `init 0`. El metodo preferido para apagados programados es `shutdown -h +minutos` porque permite avisar a los usuarios y cancelar la operacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-015">
<div class="flashcard-front">

**P:** Que comando se usa para enviar un mensaje a todos los usuarios conectados al sistema?

</div>
<div class="flashcard-back">

**R:** wall. `wall` (write all) envia un mensaje a las terminales de todos los usuarios conectados al sistema. Se puede usar directamente: `wall "Mensaje"`, desde un archivo: `wall < archivo.txt`, o por pipe: `echo "Mensaje" | wall`. El comando `shutdown` con un tiempo de espera tambien envia mensajes automaticamente a los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-016">
<div class="flashcard-front">

**P:** Tip de examen: En sistemas con systemd, `/etc/inittab` **no se utiliza**. systemd usa targets e...

</div>
<div class="flashcard-back">

**R:** En sistemas con systemd, `/etc/inittab` **no se utiliza**. systemd usa targets en su lugar. Sin embargo, es importante conocer este archivo para el examen.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-017">
<div class="flashcard-front">

**P:** Tip de examen: Los scripts S se ejecutan en orden ascendente (S01, S02, S03...) y los scripts K...

</div>
<div class="flashcard-back">

**R:** Los scripts S se ejecutan en orden ascendente (S01, S02, S03...) y los scripts K se ejecutan en orden ascendente antes que los S al cambiar de runlevel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-018">
<div class="flashcard-front">

**P:** Tip de examen: Las cabeceras LSB son esenciales para que las herramientas de gestion de SysVini...

</div>
<div class="flashcard-back">

**R:** Las cabeceras LSB son esenciales para que las herramientas de gestion de SysVinit calculen automaticamente el orden correcto de inicio y parada de los servicios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-019">
<div class="flashcard-front">

**P:** Tip de examen: Upstart ya no se utiliza en distribuciones principales, pero es importante saber...

</div>
<div class="flashcard-back">

**R:** Upstart ya no se utiliza en distribuciones principales, pero es importante saber que existio y fue el sistema de inicio de Ubuntu durante varios anos. Chromium OS tambien lo utilizo. Actualmente, systemd es el estandar en practicamente todas las distribuciones principales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-020">
<div class="flashcard-front">

**P:** Tip de examen: Los archivos en `/etc/systemd/system/` tienen **prioridad** sobre los de `/lib/s...

</div>
<div class="flashcard-back">

**R:** Los archivos en `/etc/systemd/system/` tienen **prioridad** sobre los de `/lib/systemd/system/`. Para personalizar un servicio, se copian o crean archivos en `/etc/systemd/system/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-021">
<div class="flashcard-front">

**P:** Tip de examen: `systemctl set-default` crea un enlace simbolico `/etc/systemd/system/default.ta...

</div>
<div class="flashcard-back">

**R:** `systemctl set-default` crea un enlace simbolico `/etc/systemd/system/default.target` que apunta al target deseado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-022">
<div class="flashcard-front">

**P:** Tip de examen: `shutdown` es el metodo preferido porque permite programar el apagado, avisar a ...

</div>
<div class="flashcard-back">

**R:** `shutdown` es el metodo preferido porque permite programar el apagado, avisar a los usuarios y cancelar la operacion. Los comandos `poweroff`, `reboot` y `halt` son inmediatos y no avisan a los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-023">
<div class="flashcard-front">

**P:** Tip de examen: Es suficiente saber que acpid es el demonio que gestiona eventos de energia ACPI...

</div>
<div class="flashcard-back">

**R:** Es suficiente saber que acpid es el demonio que gestiona eventos de energia ACPI, como el boton de encendido y la tapa del portatil. No se requiere un conocimiento profundo de su configuracion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-024">
<div class="flashcard-front">

**P:** Que hace el comando `Provides`?

</div>
<div class="flashcard-back">

**R:** Nombre del servicio que proporciona el script

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-025">
<div class="flashcard-front">

**P:** Que hace el comando `Required-Start`?

</div>
<div class="flashcard-back">

**R:** Servicios o facilidades que deben estar iniciados **antes** de que este servicio arranque

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `Default-Start`?

</div>
<div class="flashcard-back">

**R:** Runlevels en los que el servicio debe **iniciarse** por defecto

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-027">
<div class="flashcard-front">

**P:** Un administrador necesita configurar un servidor sin entorno grafico para que arranque en modo multiusuario con red. Cual es el target de systemd equivalente al runlevel 3 de SysVinit?

</div>
<div class="flashcard-back">

**R:** `multi-user.target`. La tabla de equivalencia entre runlevels y targets es fundamental para el examen: runlevel 0 = `poweroff.target`, runlevel 1 = `rescue.target`, runlevel 2 = `multi-user.target` (sin red, solo en algunas distros), runlevel 3 = `multi-user.target` (con red), runlevel 5 = `graphical.target`, runlevel 6 = `reboot.target`. Atencion: `emergency.target` no tiene equivalente directo en runlevels y proporciona un shell minimo sin montar sistemas de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-028">
<div class="flashcard-front">

**P:** Despues de modificar el archivo de unidad de un servicio en `/etc/systemd/system/`, el administrador ejecuta `systemctl restart servicio` pero los cambios no se aplican. Que paso falta?

</div>
<div class="flashcard-back">

**R:** Ejecutar `systemctl daemon-reload` antes de reiniciar el servicio. Cuando se modifican archivos de unidad, systemd mantiene en memoria la version anterior. `daemon-reload` fuerza a systemd a releer todos los archivos de unidad del disco. Sin este paso, `restart`, `start` o `enable` seguiran usando la configuracion antigua. Este es un error muy comun en el examen: siempre que se edite un unit file, el flujo correcto es: editar el archivo, ejecutar `systemctl daemon-reload` y luego `systemctl restart servicio`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-029">
<div class="flashcard-front">

**P:** Un administrador necesita avisar a todos los usuarios conectados por terminal de un reinicio programado en 30 minutos, pero sin ejecutar aun el apagado. Que comando envia el mensaje sin afectar al sistema?

</div>
<div class="flashcard-back">

**R:** `wall "El sistema se reiniciara en 30 minutos"` o bien `shutdown -k +30 "El sistema se reiniciara"`. El comando `wall` (write all) envia un mensaje a todas las terminales activas sin realizar ninguna accion sobre el sistema. La opcion `-k` de `shutdown` tambien solo envia el aviso sin apagar. La diferencia clave es que `wall` envia el mensaje inmediatamente, mientras que `shutdown -k` simula la cuenta atras completa con mensajes periodicos. Nota: `wall` solo alcanza a usuarios con terminales abiertas (TTY/PTY), no a sesiones graficas sin terminal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="101.3">
</div>

<div class="flashcard" data-id="101.3-fc-030">
<div class="flashcard-front">

**P:** En el examen LPIC-1, un administrador ejecuta `systemctl disable sshd` en un servidor. Puede seguir iniciando sshd manualmente con `systemctl start sshd`?

</div>
<div class="flashcard-back">

**R:** Si, `systemctl disable` solo elimina los enlaces simbolicos que inician el servicio automaticamente en el arranque, pero el servicio se puede iniciar manualmente con `systemctl start`. Esta es una trampa clasica del examen. Para impedir completamente que un servicio se inicie (ni manualmente ni por dependencias), se debe usar `systemctl mask`, que crea un enlace a `/dev/null`. Otra trampa frecuente: confundir `systemctl stop` (detiene el servicio ahora, pero no impide que arranque en el proximo reinicio) con `systemctl disable` (impide el inicio automatico, pero no detiene el servicio en ejecucion). Para desactivar completamente un servicio se necesitan ambos: `systemctl stop` + `systemctl disable`.

</div>
</div>

---

