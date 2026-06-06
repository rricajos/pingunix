---
title: "303.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.4"
---

# Flashcards: 303.4 - Comparticion De Impresoras

> 42 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué parámetros en la sección [global] de smb.conf son esenciales para la integración con CUPS?

</div>
<div class="flashcard-back">

**R:** b) `printing = cups` y `printcap name = cups`. `printing = cups` indica a Samba que use CUPS como sistema de impresión, y `printcap name = cups` le dice que obtenga la lista de impresoras directamente de CUPS en lugar de un archivo printcap tradicional.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué parámetro distingue un share de impresora de un share de archivos?

</div>
<div class="flashcard-back">

**R:** c) `printable = yes`. `printable = yes` es el parámetro que define un share como share de impresión, permitiendo que los clientes envíen trabajos de impresión. Sin este parámetro, el share solo funciona como recurso compartido de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-003">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito del share [print$]?

</div>
<div class="flashcard-back">

**R:** b) Almacenar los drivers de impresora para distribución automática a clientes Windows. El share `[print$]` contiene los drivers de impresora organizados por arquitectura (x64, W32X86, etc.). Cuando un cliente Windows se conecta a una impresora compartida, puede descargar automáticamente el driver adecuado desde este share (Point-and-Print).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué efecto tiene `cups options = raw` en smb.conf?

</div>
<div class="flashcard-back">

**R:** b) CUPS no aplica filtros adicionales al trabajo de impresión. Con `cups options = raw`, CUPS envía los datos de impresión directamente a la impresora sin procesamiento. Esto es apropiado cuando los clientes Windows ya generan los datos en el formato correcto de la impresora usando su driver local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando de rpcclient se usa para asociar un driver a una impresora?

</div>
<div class="flashcard-back">

**R:** c) `setdriver`. `setdriver "NombreImpresora" "NombreDriver"` asocia un driver previamente subido al servidor con una impresora específica. `adddriver` sube el driver al servidor, pero no lo asocia a ninguna impresora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué directorio almacena los drivers de 64 bits para Windows en el share print$?

</div>
<div class="flashcard-back">

**R:** b) /var/lib/samba/drivers/x64/3/. La estructura de directorios de drivers usa `x64` para drivers de Windows 64 bits, `W32X86` para 32 bits y `WIN40` para versiones antiguas. El subdirectorio `3` corresponde a la versión 3 del modelo de drivers.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-007">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf hace que Samba cargue automáticamente todas las impresoras definidas en CUPS?

</div>
<div class="flashcard-back">

**R:** c) `load printers = yes`. `load printers = yes` hace que Samba consulte CUPS (cuando `printcap name = cups`) y cree automáticamente un share para cada impresora definida en el sistema de impresión, usando la configuración de la sección `[printers]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el directorio de spool recomendado para trabajos de impresión en Samba y qué permisos necesita?

</div>
<div class="flashcard-back">

**R:** b) /var/spool/samba con permisos 1777. `/var/spool/samba` es el directorio de spool estándar para Samba. Los permisos `1777` (sticky bit + lectura/escritura para todos) permiten que cualquier usuario pueda escribir sus trabajos de impresión pero no eliminar los de otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué protocolo RPC utiliza Windows para comunicarse con el servicio de impresión de Samba?

</div>
<div class="flashcard-back">

**R:** b) SPOOLSS. SPOOLSS (Spooler Subsystem) es el protocolo RPC que Windows usa para la comunicación con servicios de impresión. Samba implementa las pipes SPOOLSS para soportar enumerar impresoras, gestionar drivers, enviar trabajos y configurar impresoras.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere que solo los miembros del grupo `printadmin` puedan subir drivers al share [print$]. ¿Qué configuración es correcta?

</div>
<div class="flashcard-back">

**R:** b) `read only = yes` y `write list = @printadmin`. La configuración correcta para el share `[print$]` es `read only = yes` (todos pueden leer/descargar drivers) combinado con `write list = @printadmin` (solo los administradores de impresión pueden subir nuevos drivers).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué comando de `rpcclient` se utiliza para listar los drivers de impresora instalados en el servidor Samba?

</div>
<div class="flashcard-back">

**R:** b) `rpcclient $> enumdrivers 3`. `enumdrivers 3` enumera todos los drivers de impresora de versión 3 instalados en el servidor. El número indica la versión del modelo de driver. `enumdrivers` sin argumento lista todos los niveles. Otros comandos útiles son `enumprinters` para listar impresoras y `getprinter` para ver detalles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué parámetro en la configuración de una impresora individual en smb.conf especifica el nombre de la impresora tal como está definida en CUPS?

</div>
<div class="flashcard-back">

**R:** b) `printer name`. El parámetro `printer name` vincula el share de Samba con el nombre de la cola de impresión en CUPS. Si no se especifica, Samba utiliza el nombre del share como nombre de la impresora en CUPS. Esto permite que el share tenga un nombre descriptivo diferente al nombre técnico de CUPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-013">
<div class="flashcard-front">

**P:** ¿Por qué es importante que el directorio de spool `/var/spool/samba` tenga el sticky bit activado (permisos 1777)?

</div>
<div class="flashcard-back">

**R:** b) Para que los usuarios puedan escribir sus trabajos de impresión pero no puedan eliminar los de otros usuarios. El sticky bit (1) en combinación con permisos 777 permite que cualquier usuario escriba archivos en el directorio (necesario para enviar trabajos de impresión), pero impide que un usuario elimine los archivos de otro usuario. Esto protege los trabajos de impresión en cola.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué sección especial de smb.conf hereda su configuración a todas las impresoras cargadas automáticamente con `load printers = yes`?

</div>
<div class="flashcard-back">

**R:** c) `[printers]`. La sección `[printers]` es una sección especial que define la configuración predeterminada para todas las impresoras que Samba carga automáticamente desde CUPS cuando `load printers = yes`. Esto incluye el directorio de spool, los permisos de acceso y si el share es navegable. Las impresoras individuales pueden sobrescribir esta configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál es la función del comando `rpcclient $> adddriver` en la gestión de impresoras de Samba?

</div>
<div class="flashcard-back">

**R:** b) Subir los archivos del driver al servidor Samba para su distribución vía Point-and-Print. `adddriver` registra los archivos del driver de impresora en el servidor Samba, almacenándolos en el share `[print$]`. Una vez subido, el driver debe asociarse a una impresora específica con `setdriver`. Los clientes Windows descargan automáticamente el driver al conectarse a la impresora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-016">
<div class="flashcard-front">

**P:** Un administrador observa que `smbclient -L //localhost -U admin` no muestra las impresoras de CUPS. ¿Cuál es la causa más probable?

</div>
<div class="flashcard-back">

**R:** b) Falta `load printers = yes` o `printing = cups` en smb.conf. Para que Samba muestre las impresoras de CUPS, se requiere `printing = cups` (para usar CUPS como backend de impresión), `printcap name = cups` (para autodescubrir impresoras) y `load printers = yes` (para cargar automáticamente todas las impresoras). Si falta alguno de estos parámetros, las impresoras no aparecerán.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué estructura de subdirectorios se utiliza dentro de `/var/lib/samba/drivers/` para organizar los drivers de impresora por arquitectura?

</div>
<div class="flashcard-back">

**R:** b) `W32X86/`, `x64/`, `WIN40/`. La estructura usa nombres de arquitectura Windows: `W32X86` para drivers de 32 bits (Windows XP/Vista/7 32-bit), `x64` para drivers de 64 bits (Windows modernos) y `WIN40` para versiones antiguas (Windows 95/98). Dentro de cada directorio hay subdirectorios para versiones del modelo de driver (0, 2, 3).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué tipo de comunicación utiliza Windows para gestionar impresoras remotas en Samba?

</div>
<div class="flashcard-back">

**R:** b) Llamadas RPC a través del protocolo SPOOLSS. Windows utiliza el protocolo SPOOLSS (Spooler Subsystem) basado en RPC para todas las operaciones de impresión remota: enumerar impresoras, enviar trabajos, gestionar drivers y configurar propiedades. Samba implementa las pipes SPOOLSS para ser compatible con estas operaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-019">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia funcional entre `printable = yes` y `writable = yes` en un share de Samba?

</div>
<div class="flashcard-back">

**R:** b) `printable = yes` permite enviar trabajos de impresión; `writable = yes` permite escritura de archivos. `printable = yes` marca el share como share de impresora y habilita el envío de trabajos de impresión a la cola. `writable = yes` permite escritura de archivos en el share. Un share de impresora típicamente tiene `printable = yes` y `writable = no`, ya que la escritura es solo para los datos de impresión enviados por el spooler.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-020">
<div class="flashcard-front">

**P:** En la configuración Point-and-Print, ¿qué debe ocurrir después de subir un driver con `adddriver`?

</div>
<div class="flashcard-back">

**R:** b) Asociar el driver a una impresora específica con `setdriver`. Después de subir un driver con `adddriver`, es necesario vincularlo a una impresora con `setdriver "NombreImpresora" "NombreDriver"`. Sin esta asociación, el driver está disponible en el servidor pero no se ofrece automáticamente a los clientes que se conectan a la impresora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para verificar las impresoras disponibles en el sistema CUPS y cuál es la predeterminada. <input type="text" class="fill-blank" data-answer="lpstat -p -d" data-alt="lpstat -d -p" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lpstat -p -d. `lpstat -p` muestra el estado de todas las impresoras conocidas por CUPS y `-d` muestra cuál es la impresora predeterminada del sistema. Este comando es útil para diagnosticar si CUPS tiene configuradas las impresoras antes de verificar que Samba las comparte correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para crear el directorio de spool de impresión de Samba con los permisos correctos. <input type="text" class="fill-blank" data-answer="mkdir -p /var/spool/samba && chmod 1777 /var/spool/samba" data-alt="mkdir /var/spool/samba && chmod 1777 /var/spool/samba" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mkdir -p /var/spool/samba && chmod 1777 /var/spool/samba. El directorio `/var/spool/samba` es donde Samba almacena temporalmente los trabajos de impresión. Los permisos `1777` (sticky bit + rwx para todos) permiten que cualquier usuario envíe trabajos mientras se protegen los trabajos de otros usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-023">
<div class="flashcard-front">

**P:** Escriba el comando `rpcclient` para conectarse al servidor local como el usuario `admin`. <input type="text" class="fill-blank" data-answer="rpcclient //localhost -U admin" data-alt="rpcclient localhost -U admin" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** rpcclient //localhost -U admin. `rpcclient` permite ejecutar comandos RPC contra un servidor Samba. Conectándose al localhost como administrador, se pueden gestionar impresoras y drivers con comandos como `enumprinters`, `enumdrivers`, `adddriver` y `setdriver`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-024">
<div class="flashcard-front">

**P:** Escriba el comando para enviar un trabajo de impresión de prueba del archivo `/etc/hostname` a la impresora `HP_LaserJet` usando CUPS. <input type="text" class="fill-blank" data-answer="lp -d HP_LaserJet /etc/hostname" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lp -d HP_LaserJet /etc/hostname. `lp` es el comando de CUPS para enviar trabajos de impresión. La opción `-d` especifica la impresora destino. También se puede usar `lpr -P HP_LaserJet /etc/hostname` como alternativa. Para ver el estado de la cola se usa `lpq -P HP_LaserJet`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-025">
<div class="flashcard-front">

**P:** Escriba el comando para ver la cola de impresión de la impresora `LaserColor` desde la línea de comandos. <input type="text" class="fill-blank" data-answer="lpq -P LaserColor" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lpq -P LaserColor. `lpq -P` muestra los trabajos pendientes en la cola de la impresora especificada, incluyendo el ID del trabajo, el propietario, el tamaño y el estado. Para cancelar un trabajo se usa `cancel <id_trabajo>` o `lprm <id_trabajo>`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `printing = cups` y `printcap name = cups` son los parámetros esenciales para la...

</div>
<div class="flashcard-back">

**R:** `printing = cups` y `printcap name = cups` son los parámetros esenciales para la integración Samba-CUPS. `load printers = yes` carga automáticamente todas las impresoras definidas en CUPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `printable = yes` es lo que distingue un share de impresora de un share de archi...

</div>
<div class="flashcard-back">

**R:** `printable = yes` es lo que distingue un share de impresora de un share de archivos. Es obligatorio para que los clientes puedan enviar trabajos de impresión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `cups options = raw` hace que CUPS no aplique filtros adicionales al trabajo de ...

</div>
<div class="flashcard-back">

**R:** `cups options = raw` hace que CUPS no aplique filtros adicionales al trabajo de impresión. Los datos se envían tal cual los genera el driver del cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: El share `[print$]` es donde Samba almacena los drivers de impresora para distri...

</div>
<div class="flashcard-back">

**R:** El share `[print$]` es donde Samba almacena los drivers de impresora para distribución automática a clientes Windows. La estructura de subdirectorios corresponde a las diferentes arquitecturas de Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `rpcclient` con los comandos `adddriver` y `setdriver` se usa para gestionar dri...

</div>
<div class="flashcard-back">

**R:** `rpcclient` con los comandos `adddriver` y `setdriver` se usa para gestionar drivers de impresora desde la línea de comandos Linux. `enumdrivers` y `enumprinters` listan los recursos disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `lpstat -p` muestra las impresoras disponibles en CUPS. Si Samba no muestra impr...

</div>
<div class="flashcard-back">

**R:** `lpstat -p` muestra las impresoras disponibles en CUPS. Si Samba no muestra impresoras, verificar primero que CUPS las tiene configuradas y que `load printers = yes` está activo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-032">
<div class="flashcard-front">

**P:** Que hace el comando `printing`?

</div>
<div class="flashcard-back">

**R:** Sistema de impresión a usar (`cups`, `bsd`, `lprng`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `printcap name`?

</div>
<div class="flashcard-back">

**R:** Fuente de la lista de impresoras (`cups` para autodescubrir)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `load printers`?

</div>
<div class="flashcard-back">

**R:** Cargar automáticamente todas las impresoras de CUPS

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `cups options`?

</div>
<div class="flashcard-back">

**R:** Opciones adicionales para CUPS (`raw` = sin filtro)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `path`?

</div>
<div class="flashcard-back">

**R:** Directorio de spool para trabajos de impresión

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-037">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La compartición de impresoras es una funcionalidad clave en entornos mixtos. Samba permite que clientes Windows impriman a través de impresoras gestionadas por CUPS (Common Unix Printing System) en Lin

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-038">
<div class="flashcard-front">

**P:** Que es/son Sección [printers]?

</div>
<div class="flashcard-back">

**R:** La sección especial `[printers]` define la configuración por defecto para todas las impresoras compartidas:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-039">
<div class="flashcard-front">

**P:** Que es/son Impresión raw (sin procesamiento)?

</div>
<div class="flashcard-back">

**R:** Con `cups options = raw`, Samba envía los datos de impresión directamente a CUPS sin procesamiento adicional:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-040">
<div class="flashcard-front">

**P:** Que es/son Pipes SPOOLSS?

</div>
<div class="flashcard-back">

**R:** El protocolo SPOOLSS (Spooler Subsystem) es el mecanismo RPC que Windows usa para comunicarse con el servicio de impresión. Samba implementa las pipes SPOOLSS para:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-041">
<div class="flashcard-front">

**P:** Que es/son Configuración avanzada de impresoras individuales?

</div>
<div class="flashcard-back">

**R:** Se pueden definir impresoras individuales con configuración específica:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.4">
</div>

<div class="flashcard" data-id="303.4-fc-042">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

