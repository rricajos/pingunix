---
title: "206.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "206.1"
---

# Flashcards: 206.1 - Compilar E Instalar Desde Fuentes

> 16 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Recuerda que `--prefix` cambia el directorio base. Con `--prefix=/usr`, los bina...

</div>
<div class="flashcard-back">

**R:** Recuerda que `--prefix` cambia el directorio base. Con `--prefix=/usr`, los binarios iran a `/usr/bin`, las librerias a `/usr/lib`, etc. El valor por defecto es `/usr/local`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: El comando `make` sin argumentos ejecuta la primera regla del Makefile (generalm...

</div>
<div class="flashcard-back">

**R:** El comando `make` sin argumentos ejecuta la primera regla del Makefile (generalmente `all`). La opcion `-j` permite compilacion en paralelo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la relacion entre `configure.ac` y `configure`, y entre `Makefile.am` y `...

</div>
<div class="flashcard-back">

**R:** Conoce la relacion entre `configure.ac` y `configure`, y entre `Makefile.am` y `Makefile.in`. El script `autoreconf -i` regenera todos los archivos necesarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `ldconfig` actualiza el cache `/etc/ld.so.cache`. Siempre ejecutar `ldconfig` de...

</div>
<div class="flashcard-back">

**R:** `ldconfig` actualiza el cache `/etc/ld.so.cache`. Siempre ejecutar `ldconfig` despues de instalar nuevas bibliotecas compartidas. `LD_LIBRARY_PATH` es temporal; `/etc/ld.so.conf.d/` es la solucion permanente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: `pkg-config` es fundamental para resolver dependencias durante la compilacion. R...

</div>
<div class="flashcard-back">

**R:** `pkg-config` es fundamental para resolver dependencias durante la compilacion. Recuerda la variable `PKG_CONFIG_PATH` para agregar rutas personalizadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-006">
<div class="flashcard-front">

**P:** Que hace el comando `--prefix=DIR`?

</div>
<div class="flashcard-back">

**R:** Directorio base de instalacion (por defecto `/usr/local`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-007">
<div class="flashcard-front">

**P:** Que hace el comando `--bindir=DIR`?

</div>
<div class="flashcard-back">

**R:** Directorio para ejecutables

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-008">
<div class="flashcard-front">

**P:** Que hace el comando `--sysconfdir=DIR`?

</div>
<div class="flashcard-back">

**R:** Directorio para archivos de configuracion

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-009">
<div class="flashcard-front">

**P:** Que hace el comando `--with-PAQUETE`?

</div>
<div class="flashcard-back">

**R:** Habilitar soporte para un paquete externo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `--without-PAQUETE`?

</div>
<div class="flashcard-back">

**R:** Deshabilitar soporte para un paquete externo

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Introduccion?

</div>
<div class="flashcard-back">

**R:** En el mundo Linux, aunque los gestores de paquetes facilitan la instalacion de software, existen situaciones en las que es necesario compilar programas directamente desde el codigo fuente. Esto puede d

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son Herramientas Autotools?

</div>
<div class="flashcard-back">

**R:** Las **autotools** son un conjunto de herramientas GNU que automatizan la generacion de scripts de configuracion:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son CMake?

</div>
<div class="flashcard-back">

**R:** **CMake** es un sistema de compilacion alternativo a autotools, cada vez mas popular:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son pkg-config?

</div>
<div class="flashcard-back">

**R:** **pkg-config** ayuda a obtener informacion sobre bibliotecas instaladas, facilitando la compilacion:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-015">
<div class="flashcard-front">

**P:** Que es/son Resolucion de problemas comunes?

</div>
<div class="flashcard-back">

**R:** | Problema | Causa probable | Solucion |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="206.1">
</div>

<div class="flashcard" data-id="206.1-fc-016">
<div class="flashcard-front">

**P:** Que es/son Buenas practicas?

</div>
<div class="flashcard-back">

**R:** - **Siempre leer** los archivos `README`, `INSTALL` y `CHANGELOG` antes de compilar

</div>
</div>

---

