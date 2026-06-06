---
title: "106.2 - Flashcards"
tags:
  - lpic-1
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-1
subtema: "106.2"
---

# Flashcards: 106.2 - Escritorios Graficos

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia entre un entorno de escritorio y un gestor de ventanas?

</div>
<div class="flashcard-back">

**R:** b) Un entorno de escritorio incluye gestor de ventanas, panel, gestor de archivos y aplicaciones integradas; un gestor de ventanas solo gestiona las ventanas. Un entorno de escritorio es un conjunto completo de software que proporciona una experiencia de usuario grafica integrada: gestor de ventanas, panel/barra de tareas, gestor de archivos, aplicaciones, sistema de notificaciones y temas unificados (por ejemplo, GNOME, KDE Plasma). Un gestor de ventanas es un componente mas simple que solo gestiona las ventanas: dibujar bordes, mover, redimensionar y gestionar el enfoque (por ejemplo, Openbox, i3). Un entorno de escritorio siempre incluye un gestor de ventanas, pero un gestor de ventanas puede usarse de forma independiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-002">
<div class="flashcard-front">

**P:** Cuales de los siguientes entornos de escritorio utilizan el toolkit Qt?

</div>
<div class="flashcard-back">

**R:** b) KDE Plasma y LXQt. Solo KDE Plasma y LXQt utilizan el toolkit Qt (escrito en C++). Todos los demas entornos principales usan GTK+ (escrito en C): GNOME, Xfce, MATE (fork de GNOME 2), Cinnamon (fork de GNOME Shell) y LXDE. Una regla mnemotecnica util: los entornos con "K" o "Q" en su nombre usan Qt (KDE, LXQt). LXQt es el sucesor de LXDE, portado de GTK+ 2 a Qt.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-003">
<div class="flashcard-front">

**P:** Cual es el gestor de ventanas y el gestor de archivos que utiliza GNOME?

</div>
<div class="flashcard-back">

**R:** b) Mutter y Nautilus. GNOME utiliza **Mutter** como gestor de ventanas (y compositor Wayland) y **Nautilus** (tambien llamado Files) como gestor de archivos. KWin y Dolphin corresponden a KDE Plasma. Marco y Caja corresponden a MATE (que son forks de Metacity y Nautilus de GNOME 2, respectivamente). Xfwm4 y Thunar corresponden a Xfce.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-004">
<div class="flashcard-front">

**P:** Que son MATE y Cinnamon y de que proyectos derivan?

</div>
<div class="flashcard-back">

**R:** b) MATE es un fork de GNOME 2 y Cinnamon es un fork de GNOME Shell (GNOME 3). Ambos surgieron de la insatisfaccion con los cambios de interfaz introducidos por GNOME 3. **MATE** continuo el desarrollo de la interfaz clasica de GNOME 2, con su gestor de ventanas Marco (fork de Metacity) y gestor de archivos Caja (fork de Nautilus). **Cinnamon** fue creado por el equipo de Linux Mint como alternativa a GNOME Shell, proporcionando un escritorio mas tradicional (panel inferior, menu de inicio) sobre la base tecnologica de GNOME 3, con Muffin (fork de Mutter) y Nemo (fork de Nautilus).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-005">
<div class="flashcard-front">

**P:** Cual es el puerto por defecto de VNC y cual es su principal limitacion de seguridad?

</div>
<div class="flashcard-back">

**R:** b) Puerto 5900 + numero de display, no cifra el trafico por defecto. VNC usa el puerto 5900 mas el numero de display (5901 para :1, 5902 para :2, etc.). Su principal limitacion es que **no cifra el trafico por defecto**, lo que significa que las pulsaciones de teclado y las imagenes de pantalla se transmiten sin proteccion. Se recomienda usar un tunel SSH para cifrar la conexion: `ssh -L 5901:localhost:5901 servidor`. El puerto 3389 corresponde a RDP (xrdp). El puerto 177/UDP corresponde a XDMCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-006">
<div class="flashcard-front">

**P:** Un administrador necesita que usuarios con Windows puedan conectarse al escritorio de un servidor Linux. Que protocolo y software deberia instalar en el servidor Linux para aprovechar el cliente RDP nativo de Windows?

</div>
<div class="flashcard-back">

**R:** b) RDP con xrdp. **xrdp** es la implementacion de servidor RDP para Linux que permite a clientes Windows conectarse usando el cliente RDP nativo (`mstsc.exe`), que viene preinstalado en Windows. RDP usa el puerto 3389 y soporta cifrado nativo. VNC funcionaria pero requiere instalar un cliente VNC en las maquinas Windows. XDMCP esta obsoleto y es inseguro. SPICE esta optimizado para entornos de virtualizacion (QEMU/KVM), no para acceso remoto general.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-007">
<div class="flashcard-front">

**P:** Que tipo de gestor de ventanas es i3 y como se diferencia de Openbox?

</div>
<div class="flashcard-back">

**R:** b) i3 es un WM tiling donde las ventanas se organizan sin solaparse; Openbox es un WM stacking donde las ventanas se pueden superponer. En un WM **tiling** como i3, las ventanas se organizan automaticamente ocupando todo el espacio disponible sin solaparse; se controla principalmente con atajos de teclado. En un WM **stacking** como Openbox, las ventanas se comportan como papeles en un escritorio: se pueden superponer, mover y redimensionar libremente con el raton. Openbox se usa como WM por defecto en LXDE y LXQt. i3 es popular entre desarrolladores y usuarios avanzados que buscan eficiencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-008">
<div class="flashcard-front">

**P:** Que comando de xdg-utils se utiliza para abrir un archivo con la aplicacion predeterminada del sistema, independientemente del entorno de escritorio?

</div>
<div class="flashcard-back">

**R:** c) `xdg-open`. `xdg-open` abre un archivo o URL con la aplicacion predeterminada del sistema, funcionando de forma independiente del entorno de escritorio (GNOME, KDE, Xfce, etc.). Ejemplos: `xdg-open documento.pdf` abre con el visor de PDF, `xdg-open https://ejemplo.com` abre en el navegador. `xdg-mime` consulta y configura las asociaciones de tipos MIME. `xdg-settings` configura parametros del escritorio como el navegador predeterminado. `xdg-desktop-menu` gestiona entradas del menu.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-009">
<div class="flashcard-front">

**P:** Que protocolo de acceso remoto esta optimizado especificamente para entornos de virtualizacion como QEMU/KVM?

</div>
<div class="flashcard-back">

**R:** d) SPICE. **SPICE** (Simple Protocol for Independent Computing Environments) es un protocolo de acceso remoto optimizado para entornos de virtualizacion. Desarrollado originalmente por Qumranet (adquirida por Red Hat), ofrece mejor rendimiento que VNC para maquinas virtuales y soporta audio bidireccional, video acelerado, USB compartido y portapapeles compartido. Esta integrado en soluciones como QEMU/KVM, oVirt y RHEV. Soporta cifrado TLS nativo. Los clientes incluyen `virt-viewer` y `remote-viewer`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-010">
<div class="flashcard-front">

**P:** Un usuario necesita un entorno de escritorio muy ligero para un ordenador antiguo con poca RAM. Cuales son las dos opciones mas ligeras y que relacion tienen entre si?

</div>
<div class="flashcard-back">

**R:** c) LXDE (GTK+) y LXQt (Qt), donde LXQt es el sucesor de LXDE portado a Qt. LXDE y LXQt son los entornos de escritorio mas ligeros. LXDE (Lightweight X11 Desktop Environment) usa GTK+ 2 y Openbox como gestor de ventanas. LXQt es su sucesor, portado de GTK+ 2 a Qt, tambien usando Openbox por defecto. LXDE usaba GTK+ 2 y nunca migro a GTK+ 3, por lo que se considero obsoleto. Ambos tienen un consumo de RAM muy bajo. Xfce tambien es ligero pero consume algo mas de recursos. GNOME y KDE Plasma son los entornos mas pesados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-011">
<div class="flashcard-front">

**P:** Cual es el gestor de ventanas y el gestor de archivos de Xfce?

</div>
<div class="flashcard-back">

**R:** c) Xfwm4 y Thunar. Xfce utiliza **Xfwm4** como gestor de ventanas y **Thunar** como gestor de archivos. Xfce es un entorno de escritorio ligero basado en GTK+ que ofrece un buen equilibrio entre funcionalidad y consumo de recursos. Mutter y Nautilus corresponden a GNOME. KWin y Dolphin corresponden a KDE Plasma. Openbox y PCManFM corresponden a LXDE. Es importante para el examen LPIC-1 conocer las asociaciones entre cada entorno de escritorio y sus componentes principales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-012">
<div class="flashcard-front">

**P:** Que toolkit grafico esta escrito en C++ y es la base de KDE Plasma?

</div>
<div class="flashcard-back">

**R:** c) Qt. Qt es un framework de toolkit grafico escrito en C++ que es la base de KDE Plasma y LXQt. Fue desarrollado originalmente por Trolltech (luego Nokia, ahora The Qt Company) y tiene licencia dual GPL y comercial. La version actual es Qt 6. GTK+ (escrito en C) es el toolkit utilizado por GNOME, Xfce, MATE, Cinnamon y LXDE. Es fundamental para el examen saber que toolkit usa cada entorno: GTK+ para GNOME y derivados, Qt para KDE y LXQt.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-013">
<div class="flashcard-front">

**P:** Cual es el gestor de ventanas de Cinnamon y de que proyecto es un fork?

</div>
<div class="flashcard-back">

**R:** b) Muffin, fork de Mutter. Cinnamon utiliza **Muffin** como gestor de ventanas, que es un fork del gestor de ventanas de GNOME, **Mutter**. De la misma manera, el gestor de archivos de Cinnamon es **Nemo**, un fork de Nautilus (GNOME). Cinnamon fue creado por el equipo de Linux Mint como alternativa a GNOME Shell, proporcionando un escritorio mas tradicional con panel inferior y menu de aplicaciones. Utiliza el toolkit GTK+ y es el escritorio por defecto de Linux Mint. Marco es el gestor de ventanas de MATE (fork de Metacity).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-014">
<div class="flashcard-front">

**P:** Que protocolo de acceso remoto NO cifra el trafico por defecto y utiliza el puerto 177/UDP?

</div>
<div class="flashcard-back">

**R:** d) XDMCP. XDMCP (X Display Manager Control Protocol) es un protocolo nativo de X11 que usa el puerto 177/UDP y no cifra el trafico. Permite a thin clients solicitar una sesion grafica a un display manager remoto. Esta practicamente obsoleto y ha sido reemplazado por VNC, RDP y SSH X forwarding. VNC tampoco cifra por defecto pero usa puertos 5900+. RDP (puerto 3389) y SPICE soportan cifrado nativo. XDMCP es especialmente inseguro porque transmite datos de pantalla y pulsaciones de teclado sin ninguna proteccion, incluyendo credenciales de inicio de sesion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-015">
<div class="flashcard-front">

**P:** Que herramienta de xdg-utils permite consultar la aplicacion predeterminada para un tipo MIME especifico?

</div>
<div class="flashcard-back">

**R:** c) `xdg-mime`. `xdg-mime` permite consultar y configurar las asociaciones de tipos MIME. Con `xdg-mime query filetype documento.pdf` se obtiene el tipo MIME de un archivo (por ejemplo, `application/pdf`). Con `xdg-mime query default application/pdf` se consulta la aplicacion predeterminada para ese tipo. Con `xdg-mime default evince.desktop application/pdf` se establece una aplicacion predeterminada. `xdg-open` abre archivos con la aplicacion predeterminada pero no consulta ni configura asociaciones. `xdg-settings` configura parametros generales del escritorio como el navegador predeterminado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-016">
<div class="flashcard-front">

**P:** Que entorno de escritorio es el mas popular en Linux y viene por defecto en Fedora?

</div>
<div class="flashcard-back">

**R:** c) GNOME. GNOME es el entorno de escritorio mas popular en Linux y viene por defecto en Fedora y Ubuntu (con personalizaciones). Utiliza GTK+ como toolkit, Mutter como gestor de ventanas y compositor Wayland, y Nautilus (Files) como gestor de archivos. Se caracteriza por su interfaz moderna y minimalista, con busqueda integrada y sistema de extensiones. KDE Plasma viene por defecto en openSUSE y Kubuntu. Xfce es popular en Xubuntu y MX Linux. Cinnamon es el escritorio por defecto de Linux Mint.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-017">
<div class="flashcard-front">

**P:** Que servidor VNC y que puerto se usaria para iniciar una sesion VNC en el display :2?

</div>
<div class="flashcard-back">

**R:** b) Puerto 5902 (5900 + numero de display). VNC usa un esquema de puertos basado en el numero de display: el puerto base es 5900 y se le suma el numero de display. Para el display :0 se usa 5900, para :1 se usa 5901, y para :2 se usa 5902. Se inicia con `vncserver :2` y un cliente se conecta con `vncviewer servidor:2`. El puerto 3389 corresponde a RDP. Es importante recordar que VNC no cifra el trafico por defecto, por lo que se recomienda usar un tunel SSH: `ssh -L 5902:localhost:5902 servidor` para cifrar la conexion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-018">
<div class="flashcard-front">

**P:** Que gestor de ventanas usa LXDE y tambien es el gestor de ventanas por defecto de LXQt?

</div>
<div class="flashcard-back">

**R:** d) Openbox. **Openbox** es un gestor de ventanas stacking (de apilamiento) ligero que es utilizado tanto por LXDE como por LXQt como gestor de ventanas por defecto. Es muy ligero, configurable mediante archivos XML, y se activa con clic derecho para acceder al menu. Openbox tambien puede usarse de forma independiente, sin ningun entorno de escritorio. Mutter es el WM de GNOME, KWin es el WM de KDE Plasma, y Xfwm4 es el WM de Xfce. La eleccion compartida de Openbox entre LXDE y LXQt se debe a que LXQt es el sucesor de LXDE portado a Qt.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-019">
<div class="flashcard-front">

**P:** Cual de los siguientes es un gestor de ventanas de tipo tiling?

</div>
<div class="flashcard-back">

**R:** c) i3. **i3** es un gestor de ventanas de tipo tiling, donde las ventanas se organizan automaticamente ocupando todo el espacio disponible sin solaparse. Se controla principalmente mediante atajos de teclado y es muy popular entre desarrolladores y usuarios avanzados que buscan eficiencia. Su configuracion se realiza mediante un archivo de texto plano. Openbox y Fluxbox son WM de tipo stacking (las ventanas se superponen como papeles en un escritorio). Mutter es el WM/compositor de GNOME, que tambien es de tipo stacking. Sway es otro WM tiling compatible con i3 pero para Wayland.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-020">
<div class="flashcard-front">

**P:** Que componente actua como servidor y gestor de ventanas integrado en la arquitectura de Wayland?

</div>
<div class="flashcard-back">

**R:** b) El compositor. En la arquitectura de Wayland, el **compositor** integra las funciones del servidor de display y el gestor de ventanas en un unico componente. A diferencia de X11, donde el servidor X y el gestor de ventanas son procesos separados, en Wayland el compositor se comunica directamente con el hardware y gestiona las ventanas. Ejemplos de compositores Wayland incluyen Mutter (GNOME), KWin (KDE Plasma) y Sway (compatible con i3). Esta integracion reduce el overhead de comunicacion y mejora tanto el rendimiento como la seguridad del sistema grafico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando de xdg-utils para abrir un archivo PDF llamado `manual.pdf` con la aplicacion predeterminada del sistema. <input type="text" class="fill-blank" data-answer="xdg-open manual.pdf" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xdg-open manual.pdf. `xdg-open` abre un archivo o URL con la aplicacion predeterminada del sistema, funcionando de forma independiente del entorno de escritorio (GNOME, KDE, Xfce, etc.). Para un archivo PDF, usaria el visor de PDF configurado (por ejemplo, Evince en GNOME, Okular en KDE). Tambien funciona con URLs (`xdg-open https://ejemplo.com` abre el navegador), directorios (abre el gestor de archivos) e imagenes (abre el visor de imagenes). La asociacion entre tipos de archivo y aplicaciones se gestiona con `xdg-mime`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para consultar el tipo MIME de un archivo llamado `foto.jpg` usando xdg-utils. <input type="text" class="fill-blank" data-answer="xdg-mime query filetype foto.jpg" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xdg-mime query filetype foto.jpg. El comando `xdg-mime query filetype foto.jpg` consulta y devuelve el tipo MIME del archivo especificado. Para una imagen JPEG, devolveria `image/jpeg`. Para consultar que aplicacion abre ese tipo MIME se usa `xdg-mime query default image/jpeg`. Para cambiar la aplicacion predeterminada se usa `xdg-mime default visor.desktop image/jpeg`. Las herramientas xdg-utils forman parte del estandar freedesktop.org y funcionan de forma independiente del entorno de escritorio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para iniciar un servidor VNC en el display :1. <input type="text" class="fill-blank" data-answer="vncserver :1" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** vncserver :1. El comando `vncserver :1` inicia un servidor VNC en el display :1, que escuchara en el puerto 5901 (5900 + 1). La primera vez que se ejecuta, normalmente pide establecer una contrasena de acceso. Un cliente puede conectarse con `vncviewer servidor:1`. El trafico VNC no esta cifrado por defecto, por lo que en entornos de produccion se recomienda usar un tunel SSH: `ssh -L 5901:localhost:5901 servidor`. Servidores VNC populares en Linux incluyen TigerVNC, TightVNC y x11vnc.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para consultar cual es el navegador web predeterminado configurado en el sistema usando xdg-utils. <input type="text" class="fill-blank" data-answer="xdg-settings get default-web-browser" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** xdg-settings get default-web-browser. El comando `xdg-settings get default-web-browser` consulta cual es el navegador web predeterminado configurado en el sistema y devuelve el nombre del archivo `.desktop` correspondiente (por ejemplo, `firefox.desktop` o `google-chrome.desktop`). Para cambiar el navegador predeterminado se usa `xdg-settings set default-web-browser firefox.desktop`. `xdg-settings` permite consultar y modificar parametros del escritorio de forma independiente del entorno grafico utilizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para conectarse a un servidor Linux mediante SPICE usando `remote-viewer` en la direccion `servidor:5900`. <input type="text" class="fill-blank" data-answer="remote-viewer spice://servidor:5900" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** remote-viewer spice://servidor:5900. El comando `remote-viewer spice://servidor:5900` conecta a un servidor SPICE usando el cliente `remote-viewer`. SPICE (Simple Protocol for Independent Computing Environments) es un protocolo de acceso remoto optimizado para entornos de virtualizacion como QEMU/KVM. Ofrece mejor rendimiento que VNC para maquinas virtuales y soporta audio bidireccional, video acelerado, USB compartido y portapapeles compartido. Soporta cifrado TLS nativo. Otros clientes incluyen `virt-viewer` y el cliente SPICE HTML5.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-026">
<div class="flashcard-front">

**P:** Que hace el comando `xdg-open`?

</div>
<div class="flashcard-back">

**R:** Abre un archivo o URL con la aplicacion predeterminada

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-027">
<div class="flashcard-front">

**P:** Que hace el comando `xdg-mime`?

</div>
<div class="flashcard-back">

**R:** Consulta y configura las asociaciones de tipos MIME

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-028">
<div class="flashcard-front">

**P:** Que hace el comando `xdg-settings`?

</div>
<div class="flashcard-back">

**R:** Configura parametros del escritorio (navegador predeterminado, etc.)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `xdg-desktop-menu`?

</div>
<div class="flashcard-back">

**R:** Instala/desinstala entradas del menu de escritorio

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-030">
<div class="flashcard-front">

**P:** Que es/son 2. Toolkit Libraries (Bibliotecas de interfaz grafica)?

</div>
<div class="flashcard-back">

**R:** Las toolkit libraries son frameworks que proporcionan los widgets (botones, menus, cuadros de texto) para construir interfaces graficas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-031">
<div class="flashcard-front">

**P:** Que es/son 4. Resumen de entornos y toolkits?

</div>
<div class="flashcard-back">

**R:** | Entorno | Toolkit | WM | Peso (recursos) |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son 5. Gestores de ventanas independientes?

</div>
<div class="flashcard-back">

**R:** Estos WM se pueden usar sin entorno de escritorio completo:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son 7. xdg-utils: Herramientas de escritorio estandar?

</div>
<div class="flashcard-back">

**R:** **xdg-utils** es un conjunto de herramientas de linea de comandos que proporcionan funciones de integracion con el escritorio de forma independiente del entorno (GNOME, KDE, Xfce, etc.). Forman parte d

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son 8. Comparativa de protocolos de acceso remoto?

</div>
<div class="flashcard-back">

**R:** | Protocolo | Puerto | Cifrado | Uso tipico |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="106.2">
</div>

<div class="flashcard" data-id="106.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

