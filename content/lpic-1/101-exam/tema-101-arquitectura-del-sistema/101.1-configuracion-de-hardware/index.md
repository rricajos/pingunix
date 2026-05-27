---
title: "101.1 - Configuracion de Hardware"
tags:
  - lpic-1
  - examen-101
  - tema-101
  - indice-subtema
tipo: indice-subtema
certificacion: lpic-1
examen: "101"
tema: "101"
subtema: "101.1"
---

# 101.1 - Configuracion de Hardware

## Peso: 2

## Objetivo del examen
Habilitar y configurar hardware fundamental del sistema.

## Conocimientos clave
- Habilitar y deshabilitar perifericos integrados
- Diferenciar entre los distintos tipos de dispositivos de almacenamiento masivo
- Determinar los recursos de hardware de los dispositivos
- Herramientas y utilidades para listar informacion de hardware (lsusb, lspci, etc.)
- Herramientas y utilidades para manipular dispositivos USB
- Comprension conceptual de sysfs, udev y dbus

## Archivos, terminos y utilidades
- `/sys/`, `/proc/`, `/dev/`
- `/proc/cpuinfo`, `/proc/interrupts`, `/proc/ioports`, `/proc/dma`
- `lspci`, `lsusb`, `lsmod`, `lsblk`, `lscpu`
- `modprobe`, `insmod`, `rmmod`, `modinfo`
- `udevadm`

## Contenido

- [[teoria|Teoria]] — Conceptos y explicaciones detalladas
- [[comandos-clave|Comandos clave]] — Referencia rapida de comandos
- [[ejercicios|Ejercicios]] — Preguntas de practica
- [[flashcards|Flashcards]] — Tarjetas de repaso espaciado

## Scripts de practica

| Script | Descripcion |
|--------|-------------|
| [listar-hardware.sh](scripts/listar-hardware.sh) | Recopila informacion de hardware del sistema |

## Referencias cruzadas
- Ver tambien: [Hacking Vault - Reconocimiento](../../../../hacking-vault/ofensivo/reconocimiento/) (enumeracion de hardware en post-explotacion)
