---
title: "106.3 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "106.3"
---

# Flashcards: 106.3 - Accesibilidad

> 28 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-001">
<div class="flashcard-front">

**P:** Que es Orca y que tecnologia subyacente utiliza para acceder a la informacion de las aplicaciones graficas?

</div>
<div class="flashcard-back">

**R:** b) Es el lector de pantalla principal de GNOME que usa AT-SPI para acceder a la informacion de las aplicaciones. **Orca** es el lector de pantalla principal para el escritorio Linux, especialmente integrado con GNOME. Utiliza **AT-SPI** (Assistive Technology Service Provider Interface) como framework para acceder a la informacion de las aplicaciones (que boton esta enfocado, que texto hay en pantalla, etc.). Tambien usa **Speech Dispatcher** (spd-say) para la sintesis de voz y puede integrarse con brltty para salida Braille. Se inicia con el comando `orca` o con el atajo `Super + Alt + S` en muchas distribuciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre brltty y Orca?

</div>
<div class="flashcard-back">

**R:** b) brltty proporciona soporte Braille en la consola de texto (sin graficos) y Orca es un lector de pantalla para el entorno grafico. **brltty** es un daemon que proporciona soporte para pantallas Braille en la consola de texto (tty), sin necesidad de entorno grafico. Traduce el contenido de la consola a una pantalla Braille fisica y se configura en `/etc/brltty.conf`. **Orca** es un lector de pantalla para el entorno grafico (GNOME principalmente) que lee en voz alta el contenido de las aplicaciones graficas. Ambos pueden complementarse: brltty para la consola y Orca para el escritorio, y pueden trabajar juntos para salida Braille en el escritorio grafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-003">
<div class="flashcard-front">

**P:** Un usuario no puede pulsar varias teclas simultaneamente (por ejemplo, Ctrl+C). Que funcion de accesibilidad del teclado le ayudaria?

</div>
<div class="flashcard-back">

**R:** c) Sticky Keys. **Sticky Keys** (teclas pegajosas) permite pulsar combinaciones de teclas una a la vez en lugar de simultaneamente. Al pulsar una tecla modificadora (Ctrl, Alt, Shift), esta se "pega" y espera a la siguiente tecla. El usuario puede pulsar Ctrl, soltarlo, y luego pulsar C para obtener Ctrl+C. Es ideal para personas que solo pueden pulsar una tecla a la vez. Se activa con `xkbset sticky -twokey` o desde la configuracion de accesibilidad del entorno de escritorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-004">
<div class="flashcard-front">

**P:** Un usuario tiene temblores en las manos que causan pulsaciones accidentales muy breves en el teclado. Que funcion de accesibilidad resuelve este problema?

</div>
<div class="flashcard-back">

**R:** b) Slow Keys. **Slow Keys** (teclas lentas) requiere que una tecla sea mantenida pulsada durante un tiempo minimo configurable (por ejemplo, 300ms) antes de ser aceptada por el sistema. Las pulsaciones breves accidentales se filtran e ignoran. Es util para usuarios con temblores u otras condiciones que causan pulsaciones no intencionadas. Se activa con `xkbset slowkeys 300`. **Bounce Keys** resuelve un problema diferente: repeticiones involuntarias al soltar una tecla (el dedo "rebota").

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-005">
<div class="flashcard-front">

**P:** Que funcion de accesibilidad ignora las repeticiones rapidas de la misma tecla causadas por el "rebote" del dedo al soltar una tecla?

</div>
<div class="flashcard-back">

**R:** c) Bounce Keys. **Bounce Keys** (teclas de rebote) establece un retardo entre pulsaciones de la misma tecla. Si la misma tecla se pulsa de nuevo antes de que pase el retardo configurado, la segunda pulsacion se ignora. Esto previene las repeticiones involuntarias causadas cuando el dedo "rebota" accidentalmente al soltar una tecla. Se activa con `xkbset bouncekeys 300` (300ms de retardo). **Slow Keys** resuelve un problema diferente: pulsaciones accidentales breves. Ambas funciones pueden activarse simultaneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-006">
<div class="flashcard-front">

**P:** Que permite hacer la funcion Mouse Keys y como se controla el cursor?

</div>
<div class="flashcard-back">

**R:** b) Permite controlar el cursor del raton usando el teclado numerico, donde las teclas 2/4/6/8 mueven en las 4 direcciones y la tecla 5 hace clic. **Mouse Keys** permite controlar el cursor del raton usando el teclado numerico cuando no se puede usar un raton fisico. Las teclas 2, 4, 6 y 8 mueven el cursor en las 4 direcciones principales (abajo, izquierda, derecha, arriba), las teclas 1, 3, 7 y 9 mueven en diagonales, y la tecla 5 funciona como clic. Se activa con `xkbset mousekeys` o desde la configuracion de accesibilidad del entorno de escritorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-007">
<div class="flashcard-front">

**P:** Que es AccessX en el contexto de X11?

</div>
<div class="flashcard-back">

**R:** b) El nombre del conjunto de funciones de accesibilidad del teclado implementadas en X11. **AccessX** es el nombre del conjunto de funciones de accesibilidad del teclado implementadas en el servidor X11. Incluye: Sticky Keys (teclas pegajosas), Slow Keys (teclas lentas), Bounce Keys (teclas de rebote), Mouse Keys (teclas de raton) y Toggle Keys (retroalimentacion audible). Estas funciones estan disenadas para ayudar a usuarios con dificultades motoras. Se pueden gestionar desde la linea de comandos con `xkbset` y consultar su estado con `xkbset q`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-008">
<div class="flashcard-front">

**P:** Que funcion de accesibilidad proporciona retroalimentacion audible al activar o desactivar Caps Lock, Num Lock o Scroll Lock?

</div>
<div class="flashcard-back">

**R:** c) Toggle Keys. **Toggle Keys** (teclas de alternancia) proporciona retroalimentacion audible (un pitido o sonido) al pulsar teclas de alternancia como Caps Lock, Num Lock y Scroll Lock. Emite un sonido al activar y otro diferente al desactivar. Es especialmente util para usuarios con discapacidad visual que no pueden ver los indicadores LED del teclado, evitando escribir accidentalmente texto con mayusculas sin darse cuenta. Se activa desde la configuracion de accesibilidad del entorno de escritorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-009">
<div class="flashcard-front">

**P:** Que es eSpeak-NG y como se relaciona con Orca?

</div>
<div class="flashcard-back">

**R:** b) Es un motor de sintesis de voz (TTS) compacto que puede ser usado como backend por Orca y Speech Dispatcher. **eSpeak-NG** (Next Generation) es un motor de sintesis de voz (Text-to-Speech) compacto y de codigo abierto, sucesor de eSpeak. Genera voz a partir de texto, soporta multiples idiomas (incluido espanol) y tiene un tamano muy reducido comparado con otros motores TTS. Puede ser usado como backend por **Orca** y **Speech Dispatcher** para la lectura en voz alta del contenido de la pantalla. Se puede usar directamente con `espeak-ng "texto"` o especificar idioma con `-v es`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-010">
<div class="flashcard-front">

**P:** Que opciones de accesibilidad visual estan disponibles para usuarios con baja vision (no ciegos) en Linux?

</div>
<div class="flashcard-back">

**R:** b) Temas de alto contraste, fuentes de tamano grande, lupa de pantalla (zoom) y cursor grande. Linux ofrece varias opciones de accesibilidad visual para usuarios con baja vision: **temas de alto contraste** (esquemas de colores con alto contraste entre texto y fondo), **fuentes de tamano grande** (configurables con factor de escala, por ejemplo `gsettings set org.gnome.desktop.interface text-scaling-factor 1.5`), **lupa de pantalla** (zoom integrado en GNOME o KMag en KDE), **cursor grande** y **inversion de colores**. Estas opciones no requieren un lector de pantalla completo y pueden combinarse segun las necesidades del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-011">
<div class="flashcard-front">

**P:** Que framework utiliza Orca para acceder a la informacion de las aplicaciones graficas en el escritorio?

</div>
<div class="flashcard-back">

**R:** c) AT-SPI (Assistive Technology Service Provider Interface). **AT-SPI** (Assistive Technology Service Provider Interface) es el framework que Orca utiliza para acceder a la informacion de las aplicaciones graficas. AT-SPI actua como puente entre las tecnologias de asistencia (como lectores de pantalla) y las aplicaciones, proporcionando informacion sobre los elementos de la interfaz: que boton esta enfocado, que texto contiene un campo, que opciones tiene un menu, etc. Las aplicaciones GTK+ y Qt tienen soporte nativo para AT-SPI, lo que permite que Orca lea correctamente sus interfaces.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-012">
<div class="flashcard-front">

**P:** Cual es la diferencia entre Slow Keys y Bounce Keys?

</div>
<div class="flashcard-back">

**R:** a) Slow Keys filtra pulsaciones accidentales breves; Bounce Keys ignora repeticiones rapidas de la misma tecla. **Slow Keys** requiere que una tecla sea mantenida pulsada durante un tiempo minimo configurable antes de ser aceptada, filtrando pulsaciones accidentales muy breves causadas por temblores. **Bounce Keys** establece un retardo entre pulsaciones consecutivas de la misma tecla, ignorando la segunda pulsacion si ocurre demasiado rapido (el "rebote" del dedo al soltar). Son problemas diferentes: Slow Keys trata pulsaciones no intencionadas, Bounce Keys trata repeticiones involuntarias. Ambas pueden activarse simultaneamente segun las necesidades del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-013">
<div class="flashcard-front">

**P:** Que herramienta proporciona soporte Braille en la consola de texto (tty) de Linux?

</div>
<div class="flashcard-back">

**R:** c) brltty. **brltty** (Braille TTY) es el daemon que proporciona soporte para pantallas Braille en la consola de texto de Linux, sin necesidad de entorno grafico. Funciona como un servicio del sistema (`systemctl status brltty`) y se configura en `/etc/brltty.conf`. Soporta mas de 50 modelos de pantallas Braille conectadas por USB, serial o Bluetooth, y soporta Braille de 6 y 8 puntos. Orca es un lector de pantalla para el entorno grafico (no la consola). eSpeak-NG es un motor de sintesis de voz. GOK era un teclado en pantalla de GNOME.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-014">
<div class="flashcard-front">

**P:** Que es Emacspeak y en que se diferencia de un lector de pantalla convencional como Orca?

</div>
<div class="flashcard-back">

**R:** b) Es un escritorio de audio completo basado en Emacs, no solo un lector de pantalla. **Emacspeak** no es simplemente un lector de pantalla sino un escritorio de audio completo construido sobre el editor Emacs. Mientras que Orca lee el contenido de la pantalla de aplicaciones graficas, Emacspeak proporciona una interfaz completa de interaccion por audio para navegacion web, correo electronico, programacion y mas, todo dentro del ecosistema de Emacs. Usa motores TTS como eSpeak o DECTalk como backend para la salida de voz. Fue disenado por T.V. Raman y es ideal para usuarios ciegos que prefieren un entorno basado en teclado y texto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-015">
<div class="flashcard-front">

**P:** Que tecla del teclado numerico funciona como clic del raton cuando la funcion Mouse Keys esta activada?

</div>
<div class="flashcard-back">

**R:** b) Tecla 5. Cuando Mouse Keys esta activado, la tecla **5** del teclado numerico funciona como clic del raton. Las teclas 2, 4, 6 y 8 mueven el cursor en las cuatro direcciones principales (abajo, izquierda, derecha, arriba respectivamente), y las teclas 1, 3, 7 y 9 mueven en diagonales (abajo-izquierda, abajo-derecha, arriba-izquierda, arriba-derecha). Esta distribucion sigue un patron logico basado en la disposicion del teclado numerico. Mouse Keys es especialmente util para usuarios que no pueden utilizar un raton fisico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-016">
<div class="flashcard-front">

**P:** Que comando se usa para configurar la interfaz de Orca (velocidad de voz, idioma, verbosidad)?

</div>
<div class="flashcard-back">

**R:** b) `orca --setup` o `orca -s`. El comando `orca --setup` (o su forma abreviada `orca -s`) abre la interfaz de configuracion de Orca, donde se pueden ajustar parametros como la velocidad de la voz, el volumen, el idioma, el nivel de verbosidad, el motor de sintesis de voz a utilizar y las preferencias de salida Braille. Para iniciar Orca directamente sin configuracion se usa simplemente `orca`. En GNOME, Orca tambien se puede activar con el atajo de teclado `Super + Alt + S` en muchas distribuciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-017">
<div class="flashcard-front">

**P:** Que motor de sintesis de voz (TTS) compacto y multiidioma se usa frecuentemente como backend de Orca y Speech Dispatcher?

</div>
<div class="flashcard-back">

**R:** c) eSpeak-NG. **eSpeak-NG** (Next Generation) es un motor de sintesis de voz compacto y de codigo abierto que soporta multiples idiomas (incluido espanol). Es el sucesor mantenido activamente de eSpeak. Se utiliza frecuentemente como backend de **Orca** y **Speech Dispatcher** para la lectura en voz alta del contenido de la pantalla. Su tamano es muy reducido comparado con otros motores TTS, lo que lo hace ideal para sistemas con recursos limitados. Se puede usar directamente desde la linea de comandos: `espeak-ng "Hola mundo"` o `espeak-ng -v es "texto en espanol"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-018">
<div class="flashcard-front">

**P:** Donde se configuran las opciones de accesibilidad en GNOME, como alto contraste, lector de pantalla y teclado en pantalla?

</div>
<div class="flashcard-back">

**R:** b) En Configuracion > Accesibilidad (o Universal Access). En GNOME, las opciones de accesibilidad se configuran desde **Configuracion > Accesibilidad** (llamado Universal Access en versiones en ingles). Ahi se encuentran opciones para: alto contraste, tamano de texto grande, zoom (lupa), cursor grande, lector de pantalla (Orca), teclado en pantalla, sticky keys, slow keys, bounce keys y mouse keys. Tambien se pueden configurar desde la linea de comandos con `gsettings`, por ejemplo: `gsettings set org.gnome.desktop.a11y.keyboard stickykeys-enable true`. En KDE Plasma, las opciones estan en Preferencias del sistema > Accesibilidad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-019">
<div class="flashcard-front">

**P:** Que funcion de accesibilidad seria mas adecuada para un usuario que no puede ver los indicadores LED del teclado y necesita saber si Caps Lock esta activado?

</div>
<div class="flashcard-back">

**R:** c) Toggle Keys. **Toggle Keys** proporciona retroalimentacion audible (un pitido o sonido) al pulsar teclas de alternancia como Caps Lock, Num Lock y Scroll Lock. Emite un sonido al activar y otro diferente al desactivar estas teclas. Es especialmente util para usuarios con discapacidad visual que no pueden ver los indicadores LED del teclado, evitando que escriban texto con mayusculas accidentalmente sin darse cuenta. A diferencia de las otras funciones de accesibilidad del teclado, Toggle Keys no modifica el comportamiento de las teclas normales sino que anade informacion auditiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-020">
<div class="flashcard-front">

**P:** Cual es el nombre del archivo de configuracion de brltty y donde se encuentra?

</div>
<div class="flashcard-back">

**R:** c) `/etc/brltty.conf`. El archivo de configuracion principal de brltty es `/etc/brltty.conf`. En este archivo se define el modelo de pantalla Braille, el tipo de conexion (USB, serial, Bluetooth), el dispositivo y otras opciones de configuracion. brltty se ejecuta como daemon (servicio del sistema) y se gestiona con `systemctl enable brltty` para habilitarlo en el arranque y `systemctl start brltty` para iniciarlo. Soporta mas de 50 modelos de pantallas Braille y funciona en la consola de texto sin necesidad de entorno grafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para activar Sticky Keys desde la linea de comandos usando `xkbset`. <input type="text" class="fill-blank" data-answer="xkbset sticky -twokey" data-alt="xkbset sticky" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xkbset sticky -twokey. El comando `xkbset sticky -twokey` activa la funcion Sticky Keys, que permite pulsar combinaciones de teclas una a la vez en lugar de simultaneamente. La opcion `-twokey` indica que al pulsar dos teclas modificadoras consecutivas se desactiva el modo sticky. `xkbset` es la herramienta de linea de comandos para gestionar las funciones de accesibilidad del teclado (AccessX) en X11. Se puede consultar el estado actual con `xkbset q`. Otras funciones se activan con `xkbset slowkeys`, `xkbset bouncekeys` y `xkbset mousekeys`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para iniciar el lector de pantalla Orca. <input type="text" class="fill-blank" data-answer="orca" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** orca. El comando `orca` inicia el lector de pantalla Orca, que comenzara a leer en voz alta el contenido de la pantalla y los elementos de la interfaz grafica. Orca esta integrado principalmente con GNOME y utiliza AT-SPI para acceder a la informacion de las aplicaciones y Speech Dispatcher con un motor TTS (como eSpeak-NG) para la salida de voz. Para configurar Orca (velocidad, idioma, verbosidad) se usa `orca --setup` o `orca -s`. En muchas distribuciones tambien se puede activar con el atajo `Super + Alt + S`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para sintetizar la frase "Hola mundo" en espanol usando eSpeak. <input type="text" class="fill-blank" data-answer="espeak -v es 'Hola mundo'" data-alt="espeak -v es \"Hola mundo\",espeak-ng -v es 'Hola mundo',espeak-ng -v es \"Hola mundo\"" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** espeak -v es 'Hola mundo'. El comando `espeak -v es 'Hola mundo'` utiliza el motor de sintesis de voz eSpeak para pronunciar la frase "Hola mundo" en espanol. La opcion `-v es` especifica el idioma espanol. Otras opciones utiles: `-s 150` ajusta la velocidad de habla (palabras por minuto), `-p 50` ajusta el tono, y `-w salida.wav` guarda la salida como archivo WAV en lugar de reproducirla. El sucesor `espeak-ng` usa la misma sintaxis. eSpeak soporta multiples idiomas y es muy compacto comparado con otros motores TTS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para activar Slow Keys con un retardo de 300 milisegundos usando `xkbset`. <input type="text" class="fill-blank" data-answer="xkbset slowkeys 300" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xkbset slowkeys 300. El comando `xkbset slowkeys 300` activa la funcion Slow Keys con un retardo minimo de 300 milisegundos. Esto significa que una tecla debe mantenerse pulsada al menos 300ms para que la pulsacion sea aceptada. Las pulsaciones mas breves se filtran como accidentales. Es util para usuarios con temblores u otras condiciones motoras que causan pulsaciones involuntarias. El valor del retardo puede ajustarse segun las necesidades del usuario. Se puede consultar la configuracion actual con `xkbset q` y desactivar con `xkbset -slowkeys`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando `gsettings` para activar el lector de pantalla en GNOME. <input type="text" class="fill-blank" data-answer="gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled true" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled true. El comando `gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled true` activa el lector de pantalla (Orca) en GNOME desde la linea de comandos. `gsettings` es la herramienta de linea de comandos para modificar la configuracion de GNOME almacenada en dconf. Otras configuraciones de accesibilidad incluyen: `gsettings set org.gnome.desktop.a11y.keyboard stickykeys-enable true` para Sticky Keys y `gsettings set org.gnome.desktop.interface gtk-theme 'HighContrast'` para el tema de alto contraste.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-026">
<div class="flashcard-front">

**P:** Que es/son 1. Introduccion a la accesibilidad en Linux?

</div>
<div class="flashcard-back">

**R:** La accesibilidad (a11y - accessibility) en Linux se refiere al conjunto de tecnologias y configuraciones que permiten a personas con discapacidades utilizar el sistema operativo. Linux ofrece diversas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-027">
<div class="flashcard-front">

**P:** Que es/son 5. Configuraciones de accesibilidad del teclado (AccessX)?

</div>
<div class="flashcard-back">

**R:** **AccessX** es el conjunto de funciones de accesibilidad del teclado implementadas en X11. Estas funciones ayudan a usuarios con dificultades motoras.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.3">
</div>

<div class="flashcard" data-id="106.3-fc-028">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

