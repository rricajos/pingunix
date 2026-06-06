---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "332 - Seguridad del Host"
tema: "332.2 - Deteccion de intrusiones en el host"
subtema: "332.2"
peso: 4
tags:
  - lpic-3
  - tema-332
  - aide
  - auditd
  - hids
---

# Comandos Clave - 332.2 Deteccion de Intrusiones en el Host

## AIDE

| Comando | Descripcion |
|---------|-------------|
| `aide --init` | Inicializar base de datos de integridad |
| `aide --check` | Verificar integridad contra base de datos |
| `aide --update` | Actualizar base de datos con estado actual |
| `aide --compare` | Comparar dos bases de datos |
| `aide --config-check` | Verificar archivo de configuracion |
| `/etc/aide.conf` | Archivo de configuracion principal (RHEL) |
| `/etc/aide/aide.conf` | Archivo de configuracion principal (Debian) |
| `/var/lib/aide/aide.db.gz` | Base de datos operativa |
| `/var/lib/aide/aide.db.new.gz` | Base de datos recien generada |

## Tripwire

| Comando | Descripcion |
|---------|-------------|
| `tripwire --init` | Inicializar base de datos |
| `tripwire --check` | Verificar integridad del sistema |
| `tripwire --update` | Actualizar base de datos |
| `tripwire --update-policy` | Actualizar politica |
| `/etc/tripwire/twpol.txt` | Archivo de politica |
| `/etc/tripwire/twcfg.txt` | Archivo de configuracion |

## auditctl - Gestion de Reglas

| Comando | Descripcion |
|---------|-------------|
| `auditctl -l` | Listar reglas de auditoria activas |
| `auditctl -s` | Ver estado del sistema de auditoria |
| `auditctl -D` | Eliminar todas las reglas |
| `auditctl -w /ruta -p rwxa -k etiqueta` | Vigilar archivo (permisos rwxa) |
| `auditctl -a always,exit -F arch=b64 -S syscall -k etiqueta` | Regla de syscall |
| `augenrules --load` | Cargar reglas desde /etc/audit/rules.d/ |

## ausearch - Busqueda de Eventos

| Comando | Descripcion |
|---------|-------------|
| `ausearch -k etiqueta` | Buscar por clave/etiqueta |
| `ausearch -ua UID` | Buscar por usuario (UID) |
| `ausearch -m USER_LOGIN` | Buscar por tipo de mensaje |
| `ausearch -x /ruta/comando` | Buscar ejecuciones de comando |
| `ausearch --start today` | Buscar eventos de hoy |
| `ausearch --start fecha --end fecha` | Buscar por rango de fechas |

## aureport - Informes

| Comando | Descripcion |
|---------|-------------|
| `aureport --summary` | Informe resumido |
| `aureport --auth` | Informe de autenticacion |
| `aureport --login` | Informe de inicios de sesion |
| `aureport --failed` | Informe de eventos fallidos |
| `aureport --file` | Informe de acceso a archivos |
| `aureport --anomaly` | Informe de anomalias |

## Process Accounting

| Comando | Descripcion |
|---------|-------------|
| `lastcomm usuario` | Comandos ejecutados por usuario |
| `lastcomm` | Todos los comandos recientes |
| `sa -u` | Estadisticas de uso por usuario |
| `sa -m` | Resumen por comando |
| `ac -d` | Tiempo de conexion por dia |
| `ac -p` | Tiempo de conexion por usuario |

## Logwatch y Swatch

| Comando | Descripcion |
|---------|-------------|
| `logwatch --detail high --range today` | Informe detallado del dia |
| `swatch --tail-file=/var/log/auth.log` | Monitoreo en tiempo real |
| `/etc/logwatch/conf/logwatch.conf` | Configuracion de Logwatch |

## Archivos de Configuracion de auditd

| Archivo | Descripcion |
|---------|-------------|
| `/etc/audit/auditd.conf` | Configuracion del demonio auditd |
| `/etc/audit/rules.d/audit.rules` | Reglas de auditoria persistentes |
| `/var/log/audit/audit.log` | Registro de eventos de auditoria |
