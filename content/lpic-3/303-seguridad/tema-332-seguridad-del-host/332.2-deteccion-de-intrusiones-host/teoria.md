---
tipo: teoria
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
  - integridad
  - hids
---

# 332.2 Deteccion de Intrusiones en el Host

## Introduccion

Los sistemas de deteccion de intrusiones basados en host (HIDS) monitorizan cambios en archivos del sistema, actividad sospechosa y violaciones de politicas. Las herramientas clave incluyen AIDE y Tripwire para integridad de archivos, auditd para auditoria del kernel, y OSSEC/Wazuh como soluciones HIDS completas.

> **Para el examen:** Centra tu estudio en AIDE (configuracion, inicializacion, verificacion) y auditd (reglas, ausearch, aureport). Son las herramientas mas preguntadas.

---

## AIDE (Advanced Intrusion Detection Environment)

AIDE es un sistema de deteccion de intrusiones basado en la integridad de archivos. Crea una base de datos con hashes y atributos de archivos, y luego compara el estado actual con esa linea base.

### Configuracion de AIDE

```bash
# Archivo de configuracion principal
# /etc/aide.conf (RHEL) o /etc/aide/aide.conf (Debian)

# Definir ubicacion de bases de datos
database_in=file:/var/lib/aide/aide.db.gz
database_out=file:/var/lib/aide/aide.db.new.gz

# Definir grupos de reglas
# p: permisos    i: inode      n: numero de enlaces
# u: usuario     g: grupo      s: tamaño
# b: cuenta bloques  m: mtime  c: ctime
# a: atime       S: verificar si tamaño crece
# md5: hash MD5  sha256: hash SHA-256  sha512: hash SHA-512
# rmd160: hash RIPEMD-160

# Reglas predefinidas
NORMAL = p+i+n+u+g+s+m+c+sha256
DIR = p+i+n+u+g
PERMS = p+u+g
LOG = p+u+g+i+n+S

# Reglas de monitoreo
/boot/    NORMAL
/bin/     NORMAL
/sbin/    NORMAL
/lib/     NORMAL
/lib64/   NORMAL
/usr/bin/ NORMAL
/usr/sbin/ NORMAL
/etc/     NORMAL

# Exclusiones
!/var/log/.*
!/var/cache/.*
!/tmp/.*
!/proc/.*
!/sys/.*

# Directorios de logs (solo verificar crecimiento)
/var/log/   LOG
```

### Operaciones con AIDE

```bash
# Inicializar base de datos (primera vez)
aide --init
# Genera /var/lib/aide/aide.db.new.gz

# Mover base de datos a ubicacion operativa
cp /var/lib/aide/aide.db.new.gz /var/lib/aide/aide.db.gz

# Verificar integridad (comparar con base de datos)
aide --check

# Actualizar base de datos (tras cambios legitimos)
aide --update
# Genera nueva base de datos manteniendo la anterior

# Comparar dos bases de datos
aide --compare

# Verificar configuracion
aide --config-check
```

> **Para el examen:** Tras `aide --init`, es necesario renombrar/copiar la base de datos `.new.gz` a `.db.gz`. Tras `aide --update`, la nueva base de datos tambien requiere ser movida manualmente.

### Automatizacion con Cron

```bash
# /etc/cron.daily/aide-check
#!/bin/bash
/usr/sbin/aide --check | mail -s "AIDE Report $(hostname)" admin@ejemplo.com
```

---

## Tripwire

Tripwire es otra herramienta de integridad de archivos, precursora de AIDE.

```bash
# Inicializar base de datos
tripwire --init

# Verificar integridad
tripwire --check

# Actualizar base de datos
tripwire --update

# Actualizar politica
tripwire --update-policy nueva-politica.txt

# Archivo de configuracion
# /etc/tripwire/twcfg.txt (configuracion)
# /etc/tripwire/twpol.txt (politica)
```

---

## OSSEC / Wazuh

OSSEC es un HIDS completo que incluye analisis de logs, deteccion de rootkits, integridad de archivos y respuesta activa. Wazuh es un fork activamente mantenido.

### Componentes

| Componente | Funcion |
|-----------|---------|
| Manager/Server | Recibe y analiza datos de los agentes |
| Agent | Se ejecuta en los hosts monitorizados |
| Agentless | Monitoreo sin agente (SSH) |

### Configuracion del Agente

```xml
<!-- /var/ossec/etc/ossec.conf -->
<ossec_config>
  <client>
    <server>
      <address>192.168.1.100</address>
      <port>1514</port>
    </server>
  </client>

  <syscheck>
    <frequency>7200</frequency>
    <directories check_all="yes">/etc,/usr/bin,/usr/sbin</directories>
    <directories check_all="yes">/boot</directories>
    <ignore>/etc/mtab</ignore>
    <ignore>/etc/resolv.conf</ignore>
  </syscheck>

  <rootcheck>
    <frequency>36000</frequency>
  </rootcheck>
</ossec_config>
```

### Comandos OSSEC/Wazuh

```bash
# Gestionar agentes
/var/ossec/bin/manage_agents

# Estado del servicio
/var/ossec/bin/ossec-control status

# Ver alertas
tail -f /var/ossec/logs/alerts/alerts.log
```

---

## Samhain

Samhain es un HIDS similar a AIDE/Tripwire pero con capacidades cliente/servidor integradas y verificacion continua en segundo plano.

```bash
# Inicializar
samhain -t init

# Verificar
samhain -t check

# Actualizar base de datos
samhain -t update

# Configuracion: /etc/samhainrc
```

---

## auditd - Sistema de Auditoria del Kernel

El framework de auditoria de Linux permite registrar llamadas al sistema, accesos a archivos y eventos de seguridad a nivel de kernel.

### Componentes

| Componente | Funcion |
|-----------|---------|
| `auditd` | Demonio que escribe registros de auditoria |
| `auditctl` | Configura reglas de auditoria en tiempo real |
| `ausearch` | Busca eventos en los logs de auditoria |
| `aureport` | Genera informes de auditoria |
| `autrace` | Rastrea procesos individuales |

### Reglas de Auditoria

```bash
# Archivo de reglas persistentes
# /etc/audit/rules.d/audit.rules

# Monitorear acceso a archivos sensibles
-w /etc/passwd -p wa -k identity
-w /etc/shadow -p wa -k identity
-w /etc/group -p wa -k identity
-w /etc/sudoers -p wa -k scope
-w /etc/sudoers.d/ -p wa -k scope

# Monitorear cambios en configuracion de red
-w /etc/sysconfig/network -p wa -k network
-w /etc/hosts -p wa -k network

# Monitorear comandos privilegiados
-a always,exit -F arch=b64 -S execve -F euid=0 -k rootcmd

# Monitorear cambios de hora
-a always,exit -F arch=b64 -S adjtimex -S settimeofday -k time-change
-a always,exit -F arch=b64 -S clock_settime -k time-change
-w /etc/localtime -p wa -k time-change

# Monitorear carga de modulos del kernel
-w /sbin/insmod -p x -k modules
-w /sbin/modprobe -p x -k modules
-a always,exit -F arch=b64 -S init_module -S delete_module -k modules

# Opciones de permisos monitoreados:
# r = lectura, w = escritura, x = ejecucion, a = cambio de atributos
```

### Comandos auditctl

```bash
# Ver reglas activas
auditctl -l

# Añadir regla de vigilancia de archivo
auditctl -w /etc/passwd -p wa -k passwd_changes

# Añadir regla de llamada al sistema
auditctl -a always,exit -F arch=b64 -S open -F dir=/etc -k etc_access

# Eliminar todas las reglas
auditctl -D

# Ver estado del sistema de auditoria
auditctl -s

# Cargar reglas desde archivo
augenrules --load
```

### Busqueda y Reportes

```bash
# Buscar eventos por clave
ausearch -k identity

# Buscar por usuario
ausearch -ua 1000

# Buscar por fecha
ausearch --start today
ausearch --start 01/15/2025 --end 01/16/2025

# Buscar por tipo de evento
ausearch -m USER_LOGIN

# Buscar ejecuciones de comandos
ausearch -x /usr/bin/sudo

# Generar informe de autenticacion
aureport --auth

# Informe de intentos fallidos
aureport --failed

# Informe de logins
aureport --login

# Informe de archivos modificados
aureport --file

# Informe resumido
aureport --summary

# Informe de anomalias
aureport --anomaly
```

> **Para el examen:** Conoce la sintaxis de reglas de `auditctl`: `-w` para vigilar archivos, `-p` para permisos (rwxa), `-k` para etiquetas de busqueda. `ausearch -k clave` busca por etiqueta, `aureport` genera informes.

---

## Process Accounting (acct/psacct)

El accounting de procesos registra informacion sobre todos los comandos ejecutados en el sistema.

```bash
# Instalar
yum install psacct    # RHEL
apt install acct      # Debian

# Activar
systemctl enable --now psacct   # RHEL
systemctl enable --now acct     # Debian

# Ver comandos ejecutados por usuario
lastcomm usuario

# Ver todos los comandos recientes
lastcomm

# Estadisticas de uso por usuario
sa -u

# Resumen por comando
sa -m

# Ver tiempo de conexion
ac -d           # Por dia
ac -p           # Por usuario
```

---

## Logwatch y Swatch

### Logwatch

Logwatch analiza logs del sistema y genera informes resumidos diarios.

```bash
# Ejecutar informe
logwatch --detail high --range today --output stdout

# Configuracion
# /etc/logwatch/conf/logwatch.conf
Output = mail
MailTo = admin@ejemplo.com
Detail = Med
Range = yesterday
```

### Swatch (Simple Log Watcher)

Swatch monitorea logs en tiempo real y ejecuta acciones basadas en patrones.

```bash
# Archivo de configuracion ~/.swatchrc
watchfor /FAILED/
    mail addresses=admin@ejemplo.com,subject=Auth_Failure
    exec /usr/local/bin/alerta.sh

watchfor /segfault/
    mail addresses=admin@ejemplo.com,subject=Segfault_Detected

# Ejecutar swatch
swatch --config-file=/etc/swatch.conf --tail-file=/var/log/auth.log
```
