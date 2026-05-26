---
title: "364.1 - HA de Hardware y Recursos"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "364 - HA de Nodo Unico"
subtema: "364.1"
peso: 2
tags:
  - lpic-3
  - tema-364
  - hardware
  - watchdog
  - ups
  - nut
  - ipmi
  - ecc
objetivos:
  - Comprender componentes de hardware redundante
  - Configurar watchdog timers
  - Gestionar UPS con NUT
  - Usar IPMI/BMC para gestion remota
---

# 364.1 - HA de Hardware y Recursos

## Introduccion

La alta disponibilidad a nivel de nodo unico se centra en maximizar la fiabilidad del hardware y software de un servidor individual, sin depender de un cluster.

## Hardware Redundante

### Memoria ECC (Error-Correcting Code)

La memoria **ECC** detecta y corrige errores de un bit, y detecta errores de dos bits:

- **Deteccion:** Identifica bits erroneos en la memoria
- **Correccion:** Repara automaticamente errores de un solo bit
- **Registro:** Los errores se registran en logs del sistema

```bash
# Ver errores de memoria ECC
edac-util -s          # Estado EDAC
edac-util -r          # Informe de errores

# Via sysfs
ls /sys/devices/system/edac/mc/
cat /sys/devices/system/edac/mc/mc0/ce_count    # Errores corregidos
cat /sys/devices/system/edac/mc/mc0/ue_count    # Errores no corregidos
```

> **Para el examen:** ECC es esencial en servidores. Los errores corregidos (CE) son normales en pequeñas cantidades. Los errores no corregidos (UE) son criticos.

### Hot-Swap (Intercambio en Caliente)

Componentes que pueden reemplazarse sin apagar el servidor:

| Componente | Hot-Swap |
|-----------|----------|
| Discos duros (SAS/SATA en bahias) | Si, comun |
| Fuentes de alimentacion redundantes | Si, comun |
| Ventiladores | Si, en servidores enterprise |
| Modulos de memoria | Raro (hot-add mas comun) |
| CPUs | Raro (solo mainframes) |
| Tarjetas PCIe | Con soporte hotplug |

### Fuentes de Alimentacion Redundantes (PSU)

- Configuracion **N+1** o **N+N**
- Si falla una PSU, las demas mantienen el sistema
- Alertas via IPMI/BMC cuando una PSU falla

## Watchdog Timers

Un **watchdog timer** es un temporizador de hardware o software que reinicia el sistema si detecta que no responde.

### Funcionamiento

```
  Aplicacion → escribe en /dev/watchdog periodicamente
                    ↓
  Si no escribe en el tiempo configurado (timeout)
                    ↓
  El watchdog reinicia el sistema
```

### Modulos de Watchdog

| Modulo | Tipo | Descripcion |
|--------|------|------------|
| `softdog` | Software | Watchdog por software (kernel) |
| `iTCO_wdt` | Hardware | Intel TCO watchdog (chipset Intel) |
| `hpwdt` | Hardware | HP watchdog |
| `ipmi_watchdog` | Hardware | Watchdog via IPMI |

### Configuracion

```bash
# Cargar modulo
modprobe softdog

# El watchdog crea /dev/watchdog
ls -la /dev/watchdog

# Escribir para mantener vivo (desde aplicacion o daemon)
echo "V" > /dev/watchdog   # "V" = Magic close (desactiva watchdog)

# Configurar timeout (via sysfs)
cat /sys/class/watchdog/watchdog0/timeout

# Usando systemd watchdog
# /etc/systemd/system.conf
RuntimeWatchdogSec=30      # Reinicia si systemd no responde en 30s
ShutdownWatchdogSec=10min  # Timeout para apagado
```

### Watchdog con SBD (Pacemaker)

```bash
# SBD usa watchdog como mecanismo de fencing
# /etc/sysconfig/sbd
SBD_WATCHDOG_DEV="/dev/watchdog"
SBD_WATCHDOG_TIMEOUT=5

# El watchdog asegura que un nodo se reinicie si SBD lo ordena
```

> **Para el examen:** El watchdog es fundamental para SBD en clusters Pacemaker. Si el nodo no puede hacer fencing de si mismo, el watchdog lo reinicia forzosamente.

## UPS y NUT (Network UPS Tools)

### NUT - Arquitectura

```
  ┌──────────┐     USB/Serial/SNMP     ┌──────────┐
  │  upsd     │ ←────────────────────→  │   UPS    │
  │ (driver)  │                          └──────────┘
  └─────┬─────┘
        │
  ┌─────┴─────┐
  │  upsd      │  (servidor de datos NUT)
  └─────┬─────┘
        │
  ┌─────┴──────┐  ┌──────────┐
  │  upsmon     │  │  upsmon  │  (clientes que monitorizan)
  │  (master)   │  │  (slave) │
  └────────────┘  └──────────┘
```

### Archivos de Configuracion NUT

#### nut.conf

```bash
# /etc/nut/nut.conf
# Modo de operacion
MODE=standalone    # standalone, netserver, netclient, none
```

| Modo | Descripcion |
|------|------------|
| `standalone` | UPS conectado localmente, sin compartir |
| `netserver` | UPS local, comparte con otros via red |
| `netclient` | Monitoriza UPS remoto via red |
| `none` | NUT deshabilitado |

#### ups.conf

```bash
# /etc/nut/ups.conf
[mi_ups]
    driver = usbhid-ups       # Driver del UPS
    port = auto                # Puerto (auto para USB)
    desc = "UPS de servidor"
    pollinterval = 15          # Intervalo de polling (segundos)
```

#### upsd.conf

```bash
# /etc/nut/upsd.conf
LISTEN 0.0.0.0 3493          # Escuchar en todas las interfaces
MAXAGE 15                     # Edad maxima de datos (segundos)
```

#### upsd.users

```bash
# /etc/nut/upsd.users
[admin]
    password = secreto
    actions = SET FSD
    instcmds = ALL

[monitor]
    password = monitor_pass
    upsmon master
```

#### upsmon.conf

```bash
# /etc/nut/upsmon.conf
MONITOR mi_ups@localhost 1 monitor monitor_pass master
# MONITOR ups_name@host powervalue user password type

MINSUPPLIES 1                 # Minimo de UPS funcionales
SHUTDOWNCMD "/sbin/shutdown -h +0"
POLLFREQ 5                    # Frecuencia de polling (seg)
POLLFREQALERT 2               # Frecuencia en alerta
HOSTSYNC 15                   # Tiempo de espera para slaves
DEADTIME 15                   # Tiempo para considerar UPS muerto
FINALDELAY 5                  # Espera antes de shutdown final

NOTIFYCMD /usr/sbin/upssched
NOTIFYFLAG ONLINE    SYSLOG+EXEC
NOTIFYFLAG ONBATT    SYSLOG+EXEC
NOTIFYFLAG LOWBATT   SYSLOG+EXEC
NOTIFYFLAG FSD       SYSLOG+EXEC
```

### Comandos NUT

```bash
# Iniciar driver
upsdrvctl start

# Estado del UPS
upsc mi_ups@localhost

# Comandos al UPS
upscmd mi_ups@localhost test.battery.start    # Test de bateria
upscmd -l mi_ups@localhost                     # Listar comandos

# Modificar variables
upsrw mi_ups@localhost                         # Listar variables RW
upsrw -s battery.charge.low=20 mi_ups@localhost

# Forzar shutdown
upsmon -c fsd    # Forced ShutDown
```

> **Para el examen:** Conoce los archivos `nut.conf`, `ups.conf`, `upsmon.conf` y `upsd.users`. El modo `netserver` permite compartir el UPS con otros servidores.

## IPMI/BMC

**IPMI** (Intelligent Platform Management Interface) y **BMC** (Baseboard Management Controller) permiten la gestion remota del hardware del servidor, incluso cuando esta apagado.

### Capacidades

- Encender/apagar/reiniciar el servidor remotamente
- Monitorizar sensores (temperatura, voltaje, ventiladores)
- Acceso a consola remota (Serial over LAN)
- Gestion independiente del SO (funciona con servidor apagado)

### ipmitool

```bash
# Ver informacion del BMC
ipmitool mc info

# Configurar red del BMC
ipmitool lan set 1 ipaddr 192.168.1.200
ipmitool lan set 1 netmask 255.255.255.0
ipmitool lan set 1 defgw ipaddr 192.168.1.1

# Ver configuracion de red
ipmitool lan print 1

# Control de energia
ipmitool power status
ipmitool power on
ipmitool power off
ipmitool power cycle       # Apagar y encender
ipmitool power reset       # Reset

# Control remoto (via LAN)
ipmitool -I lanplus -H 192.168.1.200 -U admin -P password power status

# Sensores
ipmitool sensor list
ipmitool sdr list          # Sensor Data Repository

# Event Log
ipmitool sel list           # System Event Log
ipmitool sel clear

# Consola serial (SOL)
ipmitool -I lanplus -H 192.168.1.200 -U admin -P password sol activate
```

> **Para el examen:** IPMI se usa como dispositivo de fencing (`fence_ipmilan`) en clusters Pacemaker. `ipmitool` es la herramienta principal para interactuar con el BMC.
