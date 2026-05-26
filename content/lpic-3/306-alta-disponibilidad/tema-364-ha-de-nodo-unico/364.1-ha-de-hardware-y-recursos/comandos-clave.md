---
title: "364.1 - Comandos Clave: HA de Hardware y Recursos"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.1"
peso: 2
tags:
  - lpic-3
  - tema-364
  - comandos
  - watchdog
  - ups
  - ipmi
---

# 364.1 - Comandos Clave: HA de Hardware y Recursos

## Watchdog

| Comando / Archivo | Descripcion |
|-------------------|------------|
| `modprobe softdog` | Cargar watchdog por software |
| `modprobe iTCO_wdt` | Cargar watchdog Intel TCO |
| `/dev/watchdog` | Dispositivo del watchdog |
| `/sys/class/watchdog/watchdog0/timeout` | Timeout actual |
| `wdctl` | Mostrar info del watchdog |
| `RuntimeWatchdogSec=30` (systemd) | Watchdog de systemd |

## NUT - Archivos de Configuracion

| Archivo | Contenido |
|---------|----------|
| `/etc/nut/nut.conf` | Modo de operacion (standalone/netserver/netclient) |
| `/etc/nut/ups.conf` | Definicion de UPS (driver, puerto) |
| `/etc/nut/upsd.conf` | Configuracion del daemon de datos |
| `/etc/nut/upsd.users` | Usuarios y permisos |
| `/etc/nut/upsmon.conf` | Monitorizacion y acciones |

## NUT - Comandos

| Comando | Descripcion |
|---------|------------|
| `upsdrvctl start` | Iniciar driver del UPS |
| `upsc mi_ups@localhost` | Estado del UPS |
| `upscmd -l mi_ups@localhost` | Listar comandos disponibles |
| `upscmd mi_ups@localhost test.battery.start` | Test de bateria |
| `upsrw mi_ups@localhost` | Variables de lectura/escritura |
| `upsmon -c fsd` | Forzar shutdown (FSD) |

## NUT - Modos de Operacion

| Modo | Descripcion |
|------|------------|
| `standalone` | UPS local, sin compartir |
| `netserver` | UPS local, compartido por red |
| `netclient` | Monitoriza UPS remoto |
| `none` | NUT deshabilitado |

## IPMI/BMC - ipmitool

| Comando | Descripcion |
|---------|------------|
| `ipmitool mc info` | Info del BMC |
| `ipmitool lan print 1` | Config de red BMC |
| `ipmitool power status` | Estado de energia |
| `ipmitool power on/off/cycle/reset` | Control de energia |
| `ipmitool sensor list` | Listar sensores |
| `ipmitool sdr list` | Sensor Data Repository |
| `ipmitool sel list` | System Event Log |
| `ipmitool sel clear` | Limpiar event log |
| `ipmitool sol activate` | Consola serial (SOL) |

## IPMI Remoto

| Comando | Descripcion |
|---------|------------|
| `ipmitool -I lanplus -H IP -U user -P pass power status` | Estado remoto |
| `ipmitool -I lanplus -H IP -U user -P pass power cycle` | Reinicio remoto |
| `ipmitool -I lanplus -H IP -U user -P pass sol activate` | Consola remota |

## ECC Memory

| Comando / Ruta | Descripcion |
|----------------|------------|
| `edac-util -s` | Estado EDAC |
| `edac-util -r` | Informe de errores |
| `/sys/devices/system/edac/mc/` | Directorio EDAC sysfs |
| `mc0/ce_count` | Errores corregidos |
| `mc0/ue_count` | Errores no corregidos |
