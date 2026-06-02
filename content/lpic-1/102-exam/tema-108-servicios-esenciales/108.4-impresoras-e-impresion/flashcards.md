---
title: "108.4 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "108.4"
---

# Flashcards: 108.4 - Impresoras E Impresion

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-001">
<div class="flashcard-front">

**P:** En que puerto escucha la interfaz web de administracion de CUPS?

</div>
<div class="flashcard-back">

**R:** d) Puerto 631. CUPS (Common UNIX Printing System) proporciona una interfaz web de administracion accesible en `http://localhost:631`. El puerto 631 es tambien el puerto del protocolo IPP (Internet Printing Protocol), que es la base de CUPS. El puerto 80 es HTTP, el 443 es HTTPS y el 515 es LPD (Line Printer Daemon), el protocolo legacy de impresion BSD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia entre los comandos `lp -d Impresora archivo` y `lpr -P Impresora archivo`?

</div>
<div class="flashcard-back">

**R:** b) `lp` es estilo System V y usa `-d`, mientras que `lpr` es estilo BSD y usa `-P` para seleccionar impresora. Ambos comandos envian un archivo a imprimir, pero provienen de tradiciones Unix diferentes. `lp` es estilo System V y usa `-d` para especificar el destino y `-n` para el numero de copias. `lpr` es estilo BSD y usa `-P` para seleccionar la impresora y `-#` para el numero de copias. En CUPS, ambos son funcionales y producen el mismo resultado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-003">
<div class="flashcard-front">

**P:** Que comando se utiliza para agregar una impresora y establecerla como predeterminada en CUPS?

</div>
<div class="flashcard-back">

**R:** b) `lpadmin -p Oficina -E -v ipp://host/ipp/print` seguido de `lpadmin -d Oficina`. El comando `lpadmin` es la herramienta de administracion de impresoras en CUPS. La opcion `-p` define el nombre, `-E` habilita la impresora y la configura para aceptar trabajos, `-v` especifica el URI del dispositivo. Para establecerla como predeterminada se usa `lpadmin -d nombre`. La opcion `-x` eliminaria una impresora. Los comandos en las opciones A, C y D no existen con esa sintaxis.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-004">
<div class="flashcard-front">

**P:** Que comando muestra el estado completo del sistema de impresion, incluyendo impresoras, trabajos en cola y dispositivos?

</div>
<div class="flashcard-back">

**R:** b) `lpstat -t`. El comando `lpstat -t` muestra el estado completo del sistema de impresion, incluyendo: estado del planificador, impresora predeterminada, dispositivos, impresoras que aceptan trabajos y trabajos en cola. `lpstat -d` muestra solo la impresora predeterminada, `lpstat -p` el estado de las impresoras y `lpstat -a` cuales aceptan trabajos. `lpq -a` muestra las colas de impresion en estilo BSD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-005">
<div class="flashcard-front">

**P:** Cual es la diferencia entre `cupsdisable` y `cupsreject`?

</div>
<div class="flashcard-back">

**R:** b) `cupsdisable` detiene la impresion de trabajos existentes y `cupsreject` impide que la cola acepte nuevos trabajos. `cupsenable`/`cupsdisable` controlan si la impresora procesa los trabajos de su cola. `cupsaccept`/`cupsreject` controlan si la cola acepta nuevos trabajos. Una impresora deshabilitada (disable) pero que acepta trabajos (accept) acumulara trabajos en la cola sin imprimirlos. Una impresora habilitada (enable) que rechaza trabajos (reject) procesara los existentes pero no aceptara nuevos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-006">
<div class="flashcard-front">

**P:** Que comando lista los URIs de dispositivos de impresion disponibles en el sistema?

</div>
<div class="flashcard-back">

**R:** b) `lpinfo -v`. El comando `lpinfo -v` lista los URIs de dispositivos de impresion disponibles (impresoras detectadas), como USB, IPP, Socket y LPD. `lpinfo -m` lista los modelos y drivers disponibles. `lpstat -v` muestra los URIs de las impresoras ya configuradas (no las disponibles para configurar). `lpadmin -l` y `cupsctl --list-devices` no son opciones validas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-007">
<div class="flashcard-front">

**P:** Cual de los siguientes es el archivo de configuracion del demonio CUPS que no debe editarse manualmente mientras el servicio esta en ejecucion?

</div>
<div class="flashcard-back">

**R:** b) `/etc/cups/printers.conf`. El archivo `/etc/cups/printers.conf` contiene la definicion de las impresoras configuradas (nombre, URI, estado, opciones) y no debe editarse manualmente mientras CUPS esta en ejecucion, ya que el demonio lo sobrescribe. `/etc/cups/cupsd.conf` es la configuracion del demonio (puertos, permisos, comparticion) y se puede editar con precaucion. Los archivos PPD describen las capacidades de cada impresora y se almacenan en `/etc/cups/ppd/`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-008">
<div class="flashcard-front">

**P:** Que comando cancela un trabajo de impresion especifico con ID "Oficina-42" usando el estilo System V?

</div>
<div class="flashcard-back">

**R:** b) `cancel Oficina-42`. El comando `cancel` es el comando estilo System V para cancelar trabajos de impresion, y acepta el ID completo del trabajo (nombre-numero). `lprm` es el equivalente BSD, que acepta el numero del trabajo (`lprm 42`) o `-P impresora numero` para especificar la impresora. `cancel -a` cancela todos los trabajos y `lprm -` cancela todos los trabajos del usuario actual. `cupsdisable` deshabilita la impresora, no cancela trabajos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-009">
<div class="flashcard-front">

**P:** Cual es el protocolo nativo de CUPS para la comunicacion con impresoras en red?

</div>
<div class="flashcard-back">

**R:** c) IPP (Internet Printing Protocol). IPP (Internet Printing Protocol) es el protocolo nativo y base del sistema CUPS, usando el puerto 631/TCP. IPP Everywhere es el estandar moderno que permite imprimir sin necesidad de drivers especificos. LPD (puerto 515) es el protocolo legacy de BSD. Socket/JetDirect (puerto 9100) es comun en impresoras HP. SMB se usa para compartir impresoras en redes Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-010">
<div class="flashcard-front">

**P:** Como se mueve un trabajo de impresion de la cola "Oficina" a la cola "OtraImpresora"?

</div>
<div class="flashcard-back">

**R:** a) `lpmove Oficina-123 OtraImpresora`. El comando `lpmove` permite mover trabajos de impresion de una cola a otra. Se puede mover un trabajo especifico (`lpmove Oficina-123 OtraImpresora`) o todos los trabajos de una impresora (`lpmove Oficina OtraImpresora`). Esto es util cuando una impresora se averia y se necesitan redirigir los trabajos pendientes a otra impresora disponible. El comando `cupsmove` no existe.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-011">
<div class="flashcard-front">

**P:** Que comando de estilo BSD imprime 5 copias de un archivo en la impresora `Oficina`?

</div>
<div class="flashcard-back">

**R:** a) `lpr -P Oficina -# 5 archivo.pdf`. `lpr` es el comando de estilo BSD. La opcion `-P` selecciona la impresora y `-#` indica el numero de copias. La opcion (b) usa `lp` (estilo System V) con la sintaxis correcta de System V (`-d` para impresora y `-n` para copias), pero la pregunta pide estilo BSD. La opcion (c) mezcla opciones incorrectas. La opcion (d) mezcla estilos: `-P` es BSD pero `-#` con `lp` no es la forma correcta (seria `-n`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-012">
<div class="flashcard-front">

**P:** Que archivos describen las capacidades de cada impresora configurada en CUPS y donde se almacenan?

</div>
<div class="flashcard-back">

**R:** b) Archivos PPD en `/etc/cups/ppd/`. Los archivos PPD (PostScript Printer Description) se almacenan en `/etc/cups/ppd/` y describen las capacidades de cada impresora configurada: tamano de papel, resolucion, bandejas disponibles, soporte de color, duplex, etc. Hay un archivo PPD por cada impresora configurada. Con IPP Everywhere, las impresoras modernas describen sus capacidades directamente via IPP, reduciendo la necesidad de archivos PPD especificos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-013">
<div class="flashcard-front">

**P:** Que comando de `lpstat` muestra cual es la impresora predeterminada del sistema?

</div>
<div class="flashcard-back">

**R:** b) `lpstat -d`. `lpstat -d` muestra la impresora predeterminada del sistema. Otras opciones utiles: `-a` muestra las impresoras que aceptan trabajos, `-p` muestra el estado de las impresoras, `-o` muestra los trabajos en todas las colas, `-s` muestra un resumen de impresoras y URIs, `-v` muestra los URIs de las impresoras configuradas, y `-t` muestra el estado completo del sistema de impresion (incluye toda la informacion anterior).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-014">
<div class="flashcard-front">

**P:** Que opcion de `lpadmin` elimina una impresora del sistema?

</div>
<div class="flashcard-back">

**R:** c) `lpadmin -x nombre`. La opcion `-x` de `lpadmin` elimina la impresora especificada del sistema CUPS. La opcion `-d` establece una impresora como predeterminada (no la elimina). La opcion `-p` define el nombre de una impresora al crearla. La opcion `-E` habilita la impresora. No existen las opciones `-r` ni `--delete` en `lpadmin`. Ejemplo: `lpadmin -x MiImpresora` elimina la impresora llamada MiImpresora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-015">
<div class="flashcard-front">

**P:** Que comando permite ver la configuracion actual del servidor CUPS y habilitar la comparticion de impresoras en red?

</div>
<div class="flashcard-back">

**R:** b) `cupsctl` y `cupsctl --share-printers`. `cupsctl` sin argumentos muestra la configuracion actual del servidor CUPS. `cupsctl --share-printers` habilita la comparticion de impresoras en la red. Otras opciones incluyen `cupsctl --no-share-printers` (desactivar comparticion), `cupsctl --remote-admin` (permitir administracion remota) y `cupsctl --no-remote-admin` (desactivar administracion remota). Los cambios se reflejan en `/etc/cups/cupsd.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-016">
<div class="flashcard-front">

**P:** En CUPS, que URI se usaria para una impresora conectada via protocolo Socket/JetDirect en la IP 192.168.1.50?

</div>
<div class="flashcard-back">

**R:** b) `socket://192.168.1.50:9100`. El protocolo Socket (tambien conocido como JetDirect) utiliza el puerto 9100 y la URI tiene el formato `socket://host:9100`. Es comun en impresoras HP y otras impresoras de red empresariales. La opcion (a) es una URI IPP. La opcion (c) es una URI LPD (Line Printer Daemon). La opcion (d) es invalida porque USB es para conexiones locales, no de red. Otros tipos de URI incluyen `usb://fabricante/modelo` (USB local) y `parallel:/dev/lp0` (puerto paralelo).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-017">
<div class="flashcard-front">

**P:** Que comando de estilo System V cancela todos los trabajos de impresion en todas las colas?

</div>
<div class="flashcard-back">

**R:** b) `cancel -a`. `cancel -a` es el comando estilo System V para cancelar todos los trabajos de impresion en todas las colas. `cancel -a MiImpresora` cancelaria todos los trabajos de una impresora especifica. El equivalente BSD es `lprm -` (que cancela todos los trabajos del usuario actual). `cancel trabajo-ID` cancela un trabajo especifico. `lprm numero` cancela un trabajo por su numero en estilo BSD.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-018">
<div class="flashcard-front">

**P:** Que comando establece opciones de impresion predeterminadas para el usuario, como el tamano de papel A4?

</div>
<div class="flashcard-back">

**R:** c) `lpoptions -o media=A4`. `lpoptions` gestiona las opciones de impresion por defecto del usuario. `lpoptions -o media=A4` establece el tamano de papel A4 como predeterminado. Se pueden combinar multiples opciones: `lpoptions -o media=A4 -o sides=two-sided-long-edge`. `lpoptions -l` lista las opciones disponibles. `lpoptions -d MiImpresora` establece la impresora predeterminada para el usuario. Estas opciones se guardan en `~/.cups/lpoptions`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-019">
<div class="flashcard-front">

**P:** Que es IPP Everywhere y cual es su principal ventaja?

</div>
<div class="flashcard-back">

**R:** b) Un estandar que permite imprimir sin necesidad de drivers especificos, ya que la impresora describe sus capacidades via IPP. IPP Everywhere es un estandar moderno basado en IPP que permite a las impresoras describir sus propias capacidades (tamano de papel, resolucion, color, duplex, etc.) directamente al sistema operativo a traves del protocolo IPP. Esto elimina la necesidad de instalar drivers o archivos PPD especificos para cada modelo de impresora. En CUPS se puede usar al agregar una impresora con `lpadmin -p nombre -E -v ipp://host/ipp/print -m everywhere`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-020">
<div class="flashcard-front">

**P:** Cual es el archivo de configuracion principal del demonio CUPS que define puertos, permisos de acceso y opciones de comparticion?

</div>
<div class="flashcard-back">

**R:** b) `/etc/cups/cupsd.conf`. `/etc/cups/cupsd.conf` es el archivo de configuracion principal del demonio CUPS (`cupsd`). Define en que puertos e interfaces escucha (`Listen`), el nivel de registro (`LogLevel`), los permisos de acceso a la interfaz web (`<Location>`), y las opciones de comparticion en red (`Browsing`, `BrowseLocalProtocols`). `/etc/cups/printers.conf` define las impresoras configuradas (no editar manualmente). `/etc/cups/client.conf` configura opciones del cliente CUPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para imprimir el archivo `informe.pdf` en la impresora llamada `Oficina` usando el estilo System V. <input type="text" class="fill-blank" data-answer="lp -d Oficina informe.pdf" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lp -d Oficina informe.pdf. El comando `lp` es el estilo System V para imprimir. La opcion `-d` selecciona la impresora de destino. Sin `-d`, se usa la impresora predeterminada. Otras opciones utiles de `lp`: `-n 3` para 3 copias, `-o landscape` para imprimir en horizontal, `-o media=A4` para tamano A4, y `-o sides=two-sided-long-edge` para impresion a doble cara.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para ver el estado completo del sistema de impresion CUPS. <input type="text" class="fill-blank" data-answer="lpstat -t" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lpstat -t. El comando `lpstat -t` muestra el estado completo del sistema de impresion, incluyendo: estado del planificador CUPS, impresora predeterminada, lista de dispositivos, impresoras y si aceptan trabajos, y los trabajos en cola. Es el comando mas completo para obtener una vision general del sistema de impresion. Equivale a combinar `lpstat -d`, `lpstat -p`, `lpstat -a` y `lpstat -o`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para deshabilitar la impresora `Oficina` indicando el motivo "En mantenimiento". <input type="text" class="fill-blank" data-answer="cupsdisable -r &quot;En mantenimiento&quot; Oficina" data-alt="cupsdisable Oficina -r &quot;En mantenimiento&quot;" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cupsdisable -r "En mantenimiento" Oficina. `cupsdisable` detiene la impresion de trabajos en la impresora especificada. La opcion `-r` permite indicar un motivo que sera visible al consultar el estado. La impresora deshabilitada dejara de procesar trabajos de su cola, pero seguira aceptando nuevos trabajos (a menos que tambien se ejecute `cupsreject`). Para reanudar la impresion: `cupsenable Oficina`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para eliminar la impresora `Vieja` del sistema CUPS. <input type="text" class="fill-blank" data-answer="lpadmin -x Vieja" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lpadmin -x Vieja. El comando `lpadmin -x Vieja` elimina la impresora llamada `Vieja` del sistema CUPS, borrando su configuracion de `/etc/cups/printers.conf` y su archivo PPD de `/etc/cups/ppd/`. Para agregar una impresora se usa `lpadmin -p nombre -E -v URI`. Para establecer la predeterminada: `lpadmin -d nombre`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para listar los modelos y drivers de impresora disponibles en el sistema. <input type="text" class="fill-blank" data-answer="lpinfo -m" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** lpinfo -m. El comando `lpinfo -m` lista todos los modelos y drivers de impresora disponibles en el sistema CUPS. La salida incluye los drivers PPD instalados y el driver generico `everywhere` para IPP Everywhere. Se puede filtrar con `grep`: `lpinfo -m | grep -i hp` para buscar drivers de HP. `lpinfo -v` lista los URIs de dispositivos de impresion disponibles (impresoras detectadas en USB, red, etc.).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `-E`?

</div>
<div class="flashcard-back">

**R:** Habilitar la impresora y aceptar trabajos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `-m modelo`?

</div>
<div class="flashcard-back">

**R:** Modelo/driver a usar (`everywhere` para IPP Everywhere)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `-d nombre`?

</div>
<div class="flashcard-back">

**R:** Establecer como impresora predeterminada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-029">
<div class="flashcard-front">

**P:** Que es/son Comando `lpinfo`?

</div>
<div class="flashcard-back">

**R:** Descubre impresoras y drivers disponibles.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-030">
<div class="flashcard-front">

**P:** Que es/son IPP (Internet Printing Protocol)?

</div>
<div class="flashcard-back">

**R:** - Protocolo estandar para comunicacion con impresoras en red

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son `cupsctl`?

</div>
<div class="flashcard-back">

**R:** Herramienta para configurar opciones del servidor CUPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son `lpoptions`?

</div>
<div class="flashcard-back">

**R:** Gestiona opciones de impresion del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-033">
<div class="flashcard-front">

**P:** Que es/son Legacy: LPD (Line Printer Daemon)?

</div>
<div class="flashcard-back">

**R:** - Sistema de impresion clasico de BSD

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-034">
<div class="flashcard-front">

**P:** Que es/son Puntos clave para el examen?

</div>
<div class="flashcard-back">

**R:** 1. **CUPS** es el sistema de impresion estandar, interfaz web en **puerto 631**

</div>
</div>

---

<div class="flashcard-deck" data-subtema="108.4">
</div>

<div class="flashcard" data-id="108.4-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

