---
title: "106.3 - Ejercicios: Accesibilidad"
tags:
  - lpic-1
  - examen-102
  - tema-106
  - ejercicios
tipo: ejercicios
certificacion: lpic-1
examen: "102"
tema: "106"
subtema: "106.3"
---

# 106.3 - Ejercicios: Accesibilidad

### Pregunta 1

Que es Orca y que tecnologia subyacente utiliza para acceder a la informacion de las aplicaciones graficas?

a) Es un navegador web accesible que usa WebKit para renderizar paginas
b) Es el lector de pantalla principal de GNOME que usa AT-SPI para acceder a la informacion de las aplicaciones
c) Es un gestor de ventanas accesible que usa GTK+ para dibujar interfaces
d) Es un sintetizador de voz que usa ALSA para generar audio

<details><summary>Respuesta</summary>

**b) Es el lector de pantalla principal de GNOME que usa AT-SPI para acceder a la informacion de las aplicaciones**

**Orca** es el lector de pantalla principal para el escritorio Linux, especialmente integrado con GNOME. Utiliza **AT-SPI** (Assistive Technology Service Provider Interface) como framework para acceder a la informacion de las aplicaciones (que boton esta enfocado, que texto hay en pantalla, etc.). Tambien usa **Speech Dispatcher** (spd-say) para la sintesis de voz y puede integrarse con brltty para salida Braille. Se inicia con el comando `orca` o con el atajo `Super + Alt + S` en muchas distribuciones.

</details>

---

### Pregunta 2

Cual es la diferencia principal entre brltty y Orca?

a) brltty funciona en el escritorio grafico y Orca en la consola de texto
b) brltty proporciona soporte Braille en la consola de texto (sin graficos) y Orca es un lector de pantalla para el entorno grafico
c) brltty es un sintetizador de voz y Orca es un controlador de pantallas Braille
d) brltty funciona solo en KDE y Orca solo en GNOME

<details><summary>Respuesta</summary>

**b) brltty proporciona soporte Braille en la consola de texto (sin graficos) y Orca es un lector de pantalla para el entorno grafico**

**brltty** es un daemon que proporciona soporte para pantallas Braille en la consola de texto (tty), sin necesidad de entorno grafico. Traduce el contenido de la consola a una pantalla Braille fisica y se configura en `/etc/brltty.conf`. **Orca** es un lector de pantalla para el entorno grafico (GNOME principalmente) que lee en voz alta el contenido de las aplicaciones graficas. Ambos pueden complementarse: brltty para la consola y Orca para el escritorio, y pueden trabajar juntos para salida Braille en el escritorio grafico.

</details>

---

### Pregunta 3

Un usuario no puede pulsar varias teclas simultaneamente (por ejemplo, Ctrl+C). Que funcion de accesibilidad del teclado le ayudaria?

a) Slow Keys
b) Bounce Keys
c) Sticky Keys
d) Mouse Keys

<details><summary>Respuesta</summary>

**c) Sticky Keys**

**Sticky Keys** (teclas pegajosas) permite pulsar combinaciones de teclas una a la vez en lugar de simultaneamente. Al pulsar una tecla modificadora (Ctrl, Alt, Shift), esta se "pega" y espera a la siguiente tecla. El usuario puede pulsar Ctrl, soltarlo, y luego pulsar C para obtener Ctrl+C. Es ideal para personas que solo pueden pulsar una tecla a la vez. Se activa con `xkbset sticky -twokey` o desde la configuracion de accesibilidad del entorno de escritorio.

</details>

---

### Pregunta 4

Un usuario tiene temblores en las manos que causan pulsaciones accidentales muy breves en el teclado. Que funcion de accesibilidad resuelve este problema?

a) Sticky Keys
b) Slow Keys
c) Bounce Keys
d) Toggle Keys

<details><summary>Respuesta</summary>

**b) Slow Keys**

**Slow Keys** (teclas lentas) requiere que una tecla sea mantenida pulsada durante un tiempo minimo configurable (por ejemplo, 300ms) antes de ser aceptada por el sistema. Las pulsaciones breves accidentales se filtran e ignoran. Es util para usuarios con temblores u otras condiciones que causan pulsaciones no intencionadas. Se activa con `xkbset slowkeys 300`. **Bounce Keys** resuelve un problema diferente: repeticiones involuntarias al soltar una tecla (el dedo "rebota").

</details>

---

### Pregunta 5

Que funcion de accesibilidad ignora las repeticiones rapidas de la misma tecla causadas por el "rebote" del dedo al soltar una tecla?

a) Sticky Keys
b) Slow Keys
c) Bounce Keys
d) Mouse Keys

<details><summary>Respuesta</summary>

**c) Bounce Keys**

**Bounce Keys** (teclas de rebote) establece un retardo entre pulsaciones de la misma tecla. Si la misma tecla se pulsa de nuevo antes de que pase el retardo configurado, la segunda pulsacion se ignora. Esto previene las repeticiones involuntarias causadas cuando el dedo "rebota" accidentalmente al soltar una tecla. Se activa con `xkbset bouncekeys 300` (300ms de retardo). **Slow Keys** resuelve un problema diferente: pulsaciones accidentales breves. Ambas funciones pueden activarse simultaneamente.

</details>

---

### Pregunta 6

Que permite hacer la funcion Mouse Keys y como se controla el cursor?

a) Permite controlar el brillo del monitor con el teclado numerico
b) Permite controlar el cursor del raton usando el teclado numerico, donde las teclas 2/4/6/8 mueven en las 4 direcciones y la tecla 5 hace clic
c) Permite configurar los botones del raton desde la linea de comandos
d) Permite usar gestos del trackpad como alternativa al teclado

<details><summary>Respuesta</summary>

**b) Permite controlar el cursor del raton usando el teclado numerico, donde las teclas 2/4/6/8 mueven en las 4 direcciones y la tecla 5 hace clic**

**Mouse Keys** permite controlar el cursor del raton usando el teclado numerico cuando no se puede usar un raton fisico. Las teclas 2, 4, 6 y 8 mueven el cursor en las 4 direcciones principales (abajo, izquierda, derecha, arriba), las teclas 1, 3, 7 y 9 mueven en diagonales, y la tecla 5 funciona como clic. Se activa con `xkbset mousekeys` o desde la configuracion de accesibilidad del entorno de escritorio.

</details>

---

### Pregunta 7

Que es AccessX en el contexto de X11?

a) Una extension de X11 para acelerar el renderizado grafico
b) El nombre del conjunto de funciones de accesibilidad del teclado implementadas en X11
c) Un protocolo para compartir pantalla entre usuarios
d) Un driver de video para tarjetas graficas accesibles

<details><summary>Respuesta</summary>

**b) El nombre del conjunto de funciones de accesibilidad del teclado implementadas en X11**

**AccessX** es el nombre del conjunto de funciones de accesibilidad del teclado implementadas en el servidor X11. Incluye: Sticky Keys (teclas pegajosas), Slow Keys (teclas lentas), Bounce Keys (teclas de rebote), Mouse Keys (teclas de raton) y Toggle Keys (retroalimentacion audible). Estas funciones estan disenadas para ayudar a usuarios con dificultades motoras. Se pueden gestionar desde la linea de comandos con `xkbset` y consultar su estado con `xkbset q`.

</details>

---

### Pregunta 8

Que funcion de accesibilidad proporciona retroalimentacion audible al activar o desactivar Caps Lock, Num Lock o Scroll Lock?

a) Sticky Keys
b) Bounce Keys
c) Toggle Keys
d) Mouse Keys

<details><summary>Respuesta</summary>

**c) Toggle Keys**

**Toggle Keys** (teclas de alternancia) proporciona retroalimentacion audible (un pitido o sonido) al pulsar teclas de alternancia como Caps Lock, Num Lock y Scroll Lock. Emite un sonido al activar y otro diferente al desactivar. Es especialmente util para usuarios con discapacidad visual que no pueden ver los indicadores LED del teclado, evitando escribir accidentalmente texto con mayusculas sin darse cuenta. Se activa desde la configuracion de accesibilidad del entorno de escritorio.

</details>

---

### Pregunta 9

Que es eSpeak-NG y como se relaciona con Orca?

a) Es un gestor de ventanas accesible que reemplaza a Orca
b) Es un motor de sintesis de voz (TTS) compacto que puede ser usado como backend por Orca y Speech Dispatcher
c) Es un driver de pantalla Braille que compite con brltty
d) Es un teclado en pantalla que complementa a Orca

<details><summary>Respuesta</summary>

**b) Es un motor de sintesis de voz (TTS) compacto que puede ser usado como backend por Orca y Speech Dispatcher**

**eSpeak-NG** (Next Generation) es un motor de sintesis de voz (Text-to-Speech) compacto y de codigo abierto, sucesor de eSpeak. Genera voz a partir de texto, soporta multiples idiomas (incluido espanol) y tiene un tamano muy reducido comparado con otros motores TTS. Puede ser usado como backend por **Orca** y **Speech Dispatcher** para la lectura en voz alta del contenido de la pantalla. Se puede usar directamente con `espeak-ng "texto"` o especificar idioma con `-v es`.

</details>

---

### Pregunta 10

Que opciones de accesibilidad visual estan disponibles para usuarios con baja vision (no ciegos) en Linux?

a) Solo el lector de pantalla Orca, que funciona en modo reducido
b) Temas de alto contraste, fuentes de tamano grande, lupa de pantalla (zoom) y cursor grande
c) Unicamente la inversion de colores mediante la linea de comandos
d) Solo brltty configurado en modo visual

<details><summary>Respuesta</summary>

**b) Temas de alto contraste, fuentes de tamano grande, lupa de pantalla (zoom) y cursor grande**

Linux ofrece varias opciones de accesibilidad visual para usuarios con baja vision: **temas de alto contraste** (esquemas de colores con alto contraste entre texto y fondo), **fuentes de tamano grande** (configurables con factor de escala, por ejemplo `gsettings set org.gnome.desktop.interface text-scaling-factor 1.5`), **lupa de pantalla** (zoom integrado en GNOME o KMag en KDE), **cursor grande** y **inversion de colores**. Estas opciones no requieren un lector de pantalla completo y pueden combinarse segun las necesidades del usuario.

</details>

---

### Pregunta 11

Que framework utiliza Orca para acceder a la informacion de las aplicaciones graficas en el escritorio?

a) GTK+
b) D-Bus
c) AT-SPI (Assistive Technology Service Provider Interface)
d) PulseAudio

<details><summary>Respuesta</summary>

**c) AT-SPI (Assistive Technology Service Provider Interface)**

**AT-SPI** (Assistive Technology Service Provider Interface) es el framework que Orca utiliza para acceder a la informacion de las aplicaciones graficas. AT-SPI actua como puente entre las tecnologias de asistencia (como lectores de pantalla) y las aplicaciones, proporcionando informacion sobre los elementos de la interfaz: que boton esta enfocado, que texto contiene un campo, que opciones tiene un menu, etc. Las aplicaciones GTK+ y Qt tienen soporte nativo para AT-SPI, lo que permite que Orca lea correctamente sus interfaces.

</details>

---

### Pregunta 12

Cual es la diferencia entre Slow Keys y Bounce Keys?

a) Slow Keys filtra pulsaciones accidentales breves; Bounce Keys ignora repeticiones rapidas de la misma tecla
b) Slow Keys ignora repeticiones rapidas; Bounce Keys filtra pulsaciones breves
c) Ambas hacen lo mismo pero con diferente nombre
d) Slow Keys funciona solo en consola; Bounce Keys solo en entorno grafico

<details><summary>Respuesta</summary>

**a) Slow Keys filtra pulsaciones accidentales breves; Bounce Keys ignora repeticiones rapidas de la misma tecla**

**Slow Keys** requiere que una tecla sea mantenida pulsada durante un tiempo minimo configurable antes de ser aceptada, filtrando pulsaciones accidentales muy breves causadas por temblores. **Bounce Keys** establece un retardo entre pulsaciones consecutivas de la misma tecla, ignorando la segunda pulsacion si ocurre demasiado rapido (el "rebote" del dedo al soltar). Son problemas diferentes: Slow Keys trata pulsaciones no intencionadas, Bounce Keys trata repeticiones involuntarias. Ambas pueden activarse simultaneamente segun las necesidades del usuario.

</details>

---

### Pregunta 13

Que herramienta proporciona soporte Braille en la consola de texto (tty) de Linux?

a) Orca
b) eSpeak-NG
c) brltty
d) GOK

<details><summary>Respuesta</summary>

**c) brltty**

**brltty** (Braille TTY) es el daemon que proporciona soporte para pantallas Braille en la consola de texto de Linux, sin necesidad de entorno grafico. Funciona como un servicio del sistema (`systemctl status brltty`) y se configura en `/etc/brltty.conf`. Soporta mas de 50 modelos de pantallas Braille conectadas por USB, serial o Bluetooth, y soporta Braille de 6 y 8 puntos. Orca es un lector de pantalla para el entorno grafico (no la consola). eSpeak-NG es un motor de sintesis de voz. GOK era un teclado en pantalla de GNOME.

</details>

---

### Pregunta 14

Que es Emacspeak y en que se diferencia de un lector de pantalla convencional como Orca?

a) Es un motor de sintesis de voz mas potente que eSpeak
b) Es un escritorio de audio completo basado en Emacs, no solo un lector de pantalla
c) Es un driver de pantalla Braille mas moderno que brltty
d) Es un teclado en pantalla para usuarios ciegos

<details><summary>Respuesta</summary>

**b) Es un escritorio de audio completo basado en Emacs, no solo un lector de pantalla**

**Emacspeak** no es simplemente un lector de pantalla sino un escritorio de audio completo construido sobre el editor Emacs. Mientras que Orca lee el contenido de la pantalla de aplicaciones graficas, Emacspeak proporciona una interfaz completa de interaccion por audio para navegacion web, correo electronico, programacion y mas, todo dentro del ecosistema de Emacs. Usa motores TTS como eSpeak o DECTalk como backend para la salida de voz. Fue disenado por T.V. Raman y es ideal para usuarios ciegos que prefieren un entorno basado en teclado y texto.

</details>

---

### Pregunta 15

Que tecla del teclado numerico funciona como clic del raton cuando la funcion Mouse Keys esta activada?

a) Tecla 0
b) Tecla 5
c) Tecla Enter
d) Tecla 8

<details><summary>Respuesta</summary>

**b) Tecla 5**

Cuando Mouse Keys esta activado, la tecla **5** del teclado numerico funciona como clic del raton. Las teclas 2, 4, 6 y 8 mueven el cursor en las cuatro direcciones principales (abajo, izquierda, derecha, arriba respectivamente), y las teclas 1, 3, 7 y 9 mueven en diagonales (abajo-izquierda, abajo-derecha, arriba-izquierda, arriba-derecha). Esta distribucion sigue un patron logico basado en la disposicion del teclado numerico. Mouse Keys es especialmente util para usuarios que no pueden utilizar un raton fisico.

</details>

---

### Pregunta 16

Que comando se usa para configurar la interfaz de Orca (velocidad de voz, idioma, verbosidad)?

a) `orca --config`
b) `orca --setup` o `orca -s`
c) `orca --preferences`
d) `orca --settings`

<details><summary>Respuesta</summary>

**b) `orca --setup` o `orca -s`**

El comando `orca --setup` (o su forma abreviada `orca -s`) abre la interfaz de configuracion de Orca, donde se pueden ajustar parametros como la velocidad de la voz, el volumen, el idioma, el nivel de verbosidad, el motor de sintesis de voz a utilizar y las preferencias de salida Braille. Para iniciar Orca directamente sin configuracion se usa simplemente `orca`. En GNOME, Orca tambien se puede activar con el atajo de teclado `Super + Alt + S` en muchas distribuciones.

</details>

---

### Pregunta 17

Que motor de sintesis de voz (TTS) compacto y multiidioma se usa frecuentemente como backend de Orca y Speech Dispatcher?

a) Festival
b) PicoTTS
c) eSpeak-NG
d) MBROLA

<details><summary>Respuesta</summary>

**c) eSpeak-NG**

**eSpeak-NG** (Next Generation) es un motor de sintesis de voz compacto y de codigo abierto que soporta multiples idiomas (incluido espanol). Es el sucesor mantenido activamente de eSpeak. Se utiliza frecuentemente como backend de **Orca** y **Speech Dispatcher** para la lectura en voz alta del contenido de la pantalla. Su tamano es muy reducido comparado con otros motores TTS, lo que lo hace ideal para sistemas con recursos limitados. Se puede usar directamente desde la linea de comandos: `espeak-ng "Hola mundo"` o `espeak-ng -v es "texto en espanol"`.

</details>

---

### Pregunta 18

Donde se configuran las opciones de accesibilidad en GNOME, como alto contraste, lector de pantalla y teclado en pantalla?

a) En el archivo `/etc/accessibility.conf`
b) En Configuracion > Accesibilidad (o Universal Access)
c) En el archivo `~/.orca.conf`
d) Solo desde la linea de comandos con `xkbset`

<details><summary>Respuesta</summary>

**b) En Configuracion > Accesibilidad (o Universal Access)**

En GNOME, las opciones de accesibilidad se configuran desde **Configuracion > Accesibilidad** (llamado Universal Access en versiones en ingles). Ahi se encuentran opciones para: alto contraste, tamano de texto grande, zoom (lupa), cursor grande, lector de pantalla (Orca), teclado en pantalla, sticky keys, slow keys, bounce keys y mouse keys. Tambien se pueden configurar desde la linea de comandos con `gsettings`, por ejemplo: `gsettings set org.gnome.desktop.a11y.keyboard stickykeys-enable true`. En KDE Plasma, las opciones estan en Preferencias del sistema > Accesibilidad.

</details>

---

### Pregunta 19

Que funcion de accesibilidad seria mas adecuada para un usuario que no puede ver los indicadores LED del teclado y necesita saber si Caps Lock esta activado?

a) Sticky Keys
b) Slow Keys
c) Toggle Keys
d) Bounce Keys

<details><summary>Respuesta</summary>

**c) Toggle Keys**

**Toggle Keys** proporciona retroalimentacion audible (un pitido o sonido) al pulsar teclas de alternancia como Caps Lock, Num Lock y Scroll Lock. Emite un sonido al activar y otro diferente al desactivar estas teclas. Es especialmente util para usuarios con discapacidad visual que no pueden ver los indicadores LED del teclado, evitando que escriban texto con mayusculas accidentalmente sin darse cuenta. A diferencia de las otras funciones de accesibilidad del teclado, Toggle Keys no modifica el comportamiento de las teclas normales sino que anade informacion auditiva.

</details>

---

### Pregunta 20

Cual es el nombre del archivo de configuracion de brltty y donde se encuentra?

a) `~/.brltty.conf`
b) `/etc/braille.conf`
c) `/etc/brltty.conf`
d) `/usr/share/brltty/config`

<details><summary>Respuesta</summary>

**c) `/etc/brltty.conf`**

El archivo de configuracion principal de brltty es `/etc/brltty.conf`. En este archivo se define el modelo de pantalla Braille, el tipo de conexion (USB, serial, Bluetooth), el dispositivo y otras opciones de configuracion. brltty se ejecuta como daemon (servicio del sistema) y se gestiona con `systemctl enable brltty` para habilitarlo en el arranque y `systemctl start brltty` para iniciarlo. Soporta mas de 50 modelos de pantallas Braille y funciona en la consola de texto sin necesidad de entorno grafico.

</details>

---

### Pregunta 21

Escribe el comando para activar Sticky Keys desde la linea de comandos usando `xkbset`.

<input type="text" class="fill-blank" data-answer="xkbset sticky -twokey" data-alt="xkbset sticky" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xkbset sticky -twokey**

El comando `xkbset sticky -twokey` activa la funcion Sticky Keys, que permite pulsar combinaciones de teclas una a la vez en lugar de simultaneamente. La opcion `-twokey` indica que al pulsar dos teclas modificadoras consecutivas se desactiva el modo sticky. `xkbset` es la herramienta de linea de comandos para gestionar las funciones de accesibilidad del teclado (AccessX) en X11. Se puede consultar el estado actual con `xkbset q`. Otras funciones se activan con `xkbset slowkeys`, `xkbset bouncekeys` y `xkbset mousekeys`.

</details>

---

### Pregunta 22

Escribe el comando para iniciar el lector de pantalla Orca.

<input type="text" class="fill-blank" data-answer="orca" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**orca**

El comando `orca` inicia el lector de pantalla Orca, que comenzara a leer en voz alta el contenido de la pantalla y los elementos de la interfaz grafica. Orca esta integrado principalmente con GNOME y utiliza AT-SPI para acceder a la informacion de las aplicaciones y Speech Dispatcher con un motor TTS (como eSpeak-NG) para la salida de voz. Para configurar Orca (velocidad, idioma, verbosidad) se usa `orca --setup` o `orca -s`. En muchas distribuciones tambien se puede activar con el atajo `Super + Alt + S`.

</details>

---

### Pregunta 23

Escribe el comando para sintetizar la frase "Hola mundo" en espanol usando eSpeak.

<input type="text" class="fill-blank" data-answer="espeak -v es 'Hola mundo'" data-alt="espeak -v es \"Hola mundo\",espeak-ng -v es 'Hola mundo',espeak-ng -v es \"Hola mundo\"" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**espeak -v es 'Hola mundo'**

El comando `espeak -v es 'Hola mundo'` utiliza el motor de sintesis de voz eSpeak para pronunciar la frase "Hola mundo" en espanol. La opcion `-v es` especifica el idioma espanol. Otras opciones utiles: `-s 150` ajusta la velocidad de habla (palabras por minuto), `-p 50` ajusta el tono, y `-w salida.wav` guarda la salida como archivo WAV en lugar de reproducirla. El sucesor `espeak-ng` usa la misma sintaxis. eSpeak soporta multiples idiomas y es muy compacto comparado con otros motores TTS.

</details>

---

### Pregunta 24

Escribe el comando para activar Slow Keys con un retardo de 300 milisegundos usando `xkbset`.

<input type="text" class="fill-blank" data-answer="xkbset slowkeys 300" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**xkbset slowkeys 300**

El comando `xkbset slowkeys 300` activa la funcion Slow Keys con un retardo minimo de 300 milisegundos. Esto significa que una tecla debe mantenerse pulsada al menos 300ms para que la pulsacion sea aceptada. Las pulsaciones mas breves se filtran como accidentales. Es util para usuarios con temblores u otras condiciones motoras que causan pulsaciones involuntarias. El valor del retardo puede ajustarse segun las necesidades del usuario. Se puede consultar la configuracion actual con `xkbset q` y desactivar con `xkbset -slowkeys`.

</details>

---

### Pregunta 25

Escribe el comando `gsettings` para activar el lector de pantalla en GNOME.

<input type="text" class="fill-blank" data-answer="gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled true" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled true**

El comando `gsettings set org.gnome.desktop.a11y.applications screen-reader-enabled true` activa el lector de pantalla (Orca) en GNOME desde la linea de comandos. `gsettings` es la herramienta de linea de comandos para modificar la configuracion de GNOME almacenada en dconf. Otras configuraciones de accesibilidad incluyen: `gsettings set org.gnome.desktop.a11y.keyboard stickykeys-enable true` para Sticky Keys y `gsettings set org.gnome.desktop.interface gtk-theme 'HighContrast'` para el tema de alto contraste.

</details>
