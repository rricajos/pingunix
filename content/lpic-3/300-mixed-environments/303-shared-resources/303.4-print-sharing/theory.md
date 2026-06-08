---
title: "303.4 - Compartición de Impresoras"
description: "Configuración de impresoras compartidas con Samba y CUPS"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.4"
peso: 2
tags:
  - lpic-3
  - tema-303
  - samba
  - cups
  - impresoras
---

# 303.4 Compartición de Impresoras

## Introducción

La compartición de impresoras es una funcionalidad clave en entornos mixtos. Samba permite que clientes Windows impriman a través de impresoras gestionadas por CUPS (Common Unix Printing System) en Linux. Esta integración incluye soporte para point-and-print (instalación automática de drivers) y gestión remota de colas de impresión.

## Integración Samba-CUPS

### Arquitectura

```
Cliente Windows → Samba (SMB/CIFS) → CUPS → Impresora física
```

Samba actúa como intermediario entre los clientes Windows y el sistema de impresión CUPS de Linux. Los trabajos de impresión se envían vía protocolo SMB y Samba los reenvía a CUPS.

### Configuración básica

```ini
[global]
   printing = cups
   printcap name = cups
   load printers = yes
   cups options = raw
```

| Parámetro        | Descripción                                              |
|------------------|----------------------------------------------------------|
| `printing`       | Sistema de impresión a usar (`cups`, `bsd`, `lprng`)     |
| `printcap name`  | Fuente de la lista de impresoras (`cups` para autodescubrir) |
| `load printers`  | Cargar automáticamente todas las impresoras de CUPS      |
| `cups options`   | Opciones adicionales para CUPS (`raw` = sin filtro)      |

> **Para el examen:** `printing = cups` y `printcap name = cups` son los parámetros esenciales para la integración Samba-CUPS. `load printers = yes` carga automáticamente todas las impresoras definidas en CUPS.

## Sección [printers]

La sección especial `[printers]` define la configuración por defecto para todas las impresoras compartidas:

```ini
[printers]
   comment = Todas las impresoras
   path = /var/spool/samba
   browseable = no
   printable = yes
   guest ok = no
   writable = no
   create mask = 0700
```

| Parámetro    | Descripción                                               |
|--------------|-----------------------------------------------------------|
| `path`       | Directorio de spool para trabajos de impresión            |
| `printable`  | Permite enviar trabajos de impresión (necesario: `yes`)   |
| `browseable` | `no` evita que cada impresora aparezca como share aparte  |
| `writable`   | `no` para shares de impresora (se usa `printable`)        |

> **Para el examen:** `printable = yes` es lo que distingue un share de impresora de un share de archivos. Es obligatorio para que los clientes puedan enviar trabajos de impresión.

### Directorio de spool

El directorio de spool debe existir y tener los permisos correctos:

```bash
mkdir -p /var/spool/samba
chmod 1777 /var/spool/samba
```

## Impresión raw (sin procesamiento)

Con `cups options = raw`, Samba envía los datos de impresión directamente a CUPS sin procesamiento adicional:

```ini
[global]
   cups options = raw
```

Esto es útil cuando los clientes Windows ya envían los datos en el formato correcto para la impresora (porque tienen el driver instalado localmente).

> **Para el examen:** `cups options = raw` hace que CUPS no aplique filtros adicionales al trabajo de impresión. Los datos se envían tal cual los genera el driver del cliente.

## Point-and-Print (Drivers)

### Concepto

Point-and-Print permite que los clientes Windows descarguen e instalen automáticamente los drivers de impresora desde el servidor Samba, eliminando la necesidad de instalación manual.

### Share print$

El share especial `[print$]` almacena los drivers de impresora:

```ini
[print$]
   comment = Drivers de impresoras
   path = /var/lib/samba/drivers
   browseable = yes
   read only = yes
   write list = @printadmin root
```

### Estructura de directorios de drivers

```
/var/lib/samba/drivers/
├── W32X86/          # Drivers Windows 32-bit (Windows XP/Vista)
│   └── 3/           # Versión 3 de driver
├── x64/             # Drivers Windows 64-bit
│   └── 3/           # Versión 3 de driver
└── WIN40/           # Drivers Windows 95/98
    └── 0/           # Versión 0 de driver
```

```bash
# Crear la estructura de directorios
mkdir -p /var/lib/samba/drivers/{W32X86,x64,WIN40}/{0,2,3}
chown -R root:printadmin /var/lib/samba/drivers
chmod -R 2775 /var/lib/samba/drivers
```

> **Para el examen:** El share `[print$]` es donde Samba almacena los drivers de impresora para distribución automática a clientes Windows. La estructura de subdirectorios corresponde a las diferentes arquitecturas de Windows.

## Gestión de drivers con rpcclient

### Subir drivers

```bash
# Conectar con rpcclient
rpcclient //localhost -U administrador

# Subir un driver (dentro de rpcclient)
rpcclient $> adddriver "Windows x64" \
  "NombreDriver:driver.dll:datafile.ppd:configfile.dll:helpfile.hlp"
```

### Asociar driver a impresora

```bash
rpcclient $> setdriver "NombreImpresora" "NombreDriver"
```

### Listar drivers e impresoras

```bash
# Listar drivers instalados
rpcclient $> enumdrivers 3

# Listar impresoras
rpcclient $> enumprinters

# Ver información de una impresora
rpcclient $> getprinter "NombreImpresora" 2
```

> **Para el examen:** `rpcclient` con los comandos `adddriver` y `setdriver` se usa para gestionar drivers de impresora desde la línea de comandos Linux. `enumdrivers` y `enumprinters` listan los recursos disponibles.

## Pipes SPOOLSS

El protocolo SPOOLSS (Spooler Subsystem) es el mecanismo RPC que Windows usa para comunicarse con el servicio de impresión. Samba implementa las pipes SPOOLSS para:

- Enumerar impresoras y drivers
- Enviar y gestionar trabajos de impresión
- Subir y descargar drivers
- Gestionar configuración de impresoras

Las operaciones SPOOLSS se pueden realizar con:
- `rpcclient` desde Linux
- Herramientas de administración de impresoras desde Windows (RSAT)
- PowerShell o `printmanagement.msc`

## Configuración avanzada de impresoras individuales

Se pueden definir impresoras individuales con configuración específica:

```ini
[LaserColor]
   comment = Impresora láser a color del segundo piso
   path = /var/spool/samba
   printable = yes
   printer name = HP_Color_LaserJet
   valid users = @empleados
   hosts allow = 192.168.1.0/24
```

| Parámetro      | Descripción                                           |
|----------------|-------------------------------------------------------|
| `printer name` | Nombre de la impresora en CUPS                        |
| `printable`    | Permite impresión en este share                       |
| `valid users`  | Usuarios con acceso a esta impresora                  |

## Ejemplo completo de configuración

```ini
[global]
   workgroup = EMPRESA
   printing = cups
   printcap name = cups
   load printers = yes
   cups options = raw

[printers]
   comment = Todas las impresoras
   path = /var/spool/samba
   browseable = no
   printable = yes
   guest ok = no
   writable = no
   create mask = 0700

[print$]
   comment = Drivers de impresoras
   path = /var/lib/samba/drivers
   browseable = yes
   read only = yes
   write list = @printadmin root
   create mask = 0664
   directory mask = 0775
```

## CUPS: Configuracion del servidor de impresion

### Protocolo IPP (Internet Printing Protocol)

CUPS usa IPP como protocolo nativo de comunicacion:

- **Puerto 631** (TCP): Interfaz web y comunicacion IPP
- Basado en HTTP/1.1 con extensiones para impresion
- Soporta autenticacion, cifrado y descubrimiento automatico
- Los clientes Linux y macOS usan IPP de forma nativa

```bash
# Acceder a la interfaz web de CUPS
# Abrir navegador en http://localhost:631

# Ver version de CUPS
cupsd -v
```

### /etc/cups/cupsd.conf - Configuracion del daemon CUPS

```apache
# Escuchar en localhost y red local
Listen localhost:631
Listen /var/run/cups/cups.sock

# Interfaz web accesible desde la red local
<Location />
  Order allow,deny
  Allow @LOCAL
</Location>

# Administracion solo desde localhost
<Location /admin>
  Order allow,deny
  Allow localhost
  AuthType Default
  Require user @SYSTEM
</Location>

# Compartir impresoras en la red
Browsing On
BrowseLocalProtocols dnssd
DefaultAuthType Basic

# Logging
LogLevel warn
MaxLogSize 1m
```

### Gestion de impresoras con lpadmin

```bash
# Anadir impresora
lpadmin -p LaserJet -E -v socket://192.168.1.50:9100 -m everywhere

# Anadir impresora con driver PPD
lpadmin -p ColorLaser -E -v ipp://192.168.1.51/ipp/print \
  -P /usr/share/ppd/HP/hp-color_laserjet.ppd

# Establecer impresora por defecto
lpadmin -d LaserJet

# Eliminar impresora
lpadmin -x LaserJet

# Configurar opciones de impresora
lpadmin -p LaserJet -o media=A4 -o sides=two-sided-long-edge

# Aceptar/rechazar trabajos en cola
cupsaccept LaserJet
cupsreject LaserJet

# Habilitar/deshabilitar impresion
cupsenable LaserJet
cupsdisable LaserJet -r "En mantenimiento"
```

### cupsctl - Configuracion rapida de CUPS

```bash
# Compartir impresoras en la red
cupsctl --share-printers

# Deshabilitar comparticion
cupsctl --no-share-printers

# Permitir administracion remota
cupsctl --remote-admin

# Activar logging de debug
cupsctl --debug-logging

# Ver configuracion actual
cupsctl
```

> **Para el examen:** `lpadmin` es la herramienta principal para gestionar impresoras CUPS desde CLI. `cupsctl` modifica la configuracion de cupsd.conf sin editarlo manualmente. `cupsaccept`/`cupsreject` controlan la cola; `cupsenable`/`cupsdisable` controlan la impresion fisica.

### Diferencia entre accept/reject y enable/disable

| Estado | Comando | Efecto |
|--------|---------|--------|
| Accepting + Enabled | Normal | Acepta trabajos y los imprime |
| Accepting + Disabled | Cola activa, impresora parada | Acepta trabajos pero no imprime (mantenimiento) |
| Rejecting + Enabled | No acepta nuevos trabajos | Imprime los que ya estan en cola, rechaza nuevos |
| Rejecting + Disabled | Totalmente parada | No acepta trabajos ni imprime |

---

## Diagnóstico de problemas

```bash
# Verificar que CUPS está funcionando
systemctl status cups
lpstat -p -d

# Verificar impresoras visibles desde Samba
smbclient -L //localhost -U admin -c "ls"

# Verificar configuración de impresión
testparm -s | grep -i print

# Enviar trabajo de prueba desde Linux
lp -d NombreImpresora /etc/hostname

# Ver cola de impresión
lpq -P NombreImpresora

# Ver logs de CUPS
tail -f /var/log/cups/error_log
```

> **Para el examen:** `lpstat -p` muestra las impresoras disponibles en CUPS. Si Samba no muestra impresoras, verificar primero que CUPS las tiene configuradas y que `load printers = yes` está activo.

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **`printable = yes` distingue share de impresora de share de archivos** — Sin `printable = yes`, un share no acepta trabajos de impresion. Es el parametro obligatorio para impresoras. `writable = no` es correcto para shares de impresora (se usa printable, no writable).
- **`printing = cups` y `printcap name = cups` son esenciales** — Estos dos parametros en [global] configuran la integracion Samba-CUPS. Sin ellos, Samba no descubre las impresoras de CUPS. Las preguntas presentan escenarios donde las impresoras no aparecen y la causa es la ausencia de estos parametros.
- **`cups options = raw` vs procesamiento CUPS** — Con `raw`, CUPS envia los datos sin filtrar (el driver del cliente hace el trabajo). Sin `raw`, CUPS aplica sus propios filtros que pueden causar problemas con drivers Windows. Las preguntas piden saber cuando usar cada opcion.
- **`[print$]` es para drivers, `[printers]` es para impresoras** — `[print$]` almacena los drivers de impresora para Point-and-Print (distribucion automatica). `[printers]` define la configuracion por defecto de las impresoras compartidas. Confundir ambos shares especiales es error comun.
- **Estructura de drivers: W32X86 vs x64** — `W32X86/3/` es para drivers Windows 32-bit, `x64/3/` para 64-bit. La estructura de subdirectorios debe existir con permisos correctos. Las preguntas piden identificar el directorio correcto segun la arquitectura del cliente.
- **`rpcclient adddriver` y `setdriver`** — `adddriver` sube un driver al servidor. `setdriver` asocia un driver a una impresora. Son dos pasos separados. `enumdrivers 3` lista los drivers version 3 instalados. Las preguntas piden la secuencia correcta.
- **SPOOLSS pipes para comunicacion de impresion** — El protocolo SPOOLSS gestiona la comunicacion de impresion entre Windows y Samba via RPC. Las operaciones se pueden hacer con `rpcclient` (Linux) o herramientas RSAT (Windows). Las preguntas suelen pedir identificar la herramienta correcta.
- **Directorio spool con permisos 1777** — `/var/spool/samba` necesita permisos `1777` (sticky bit) para que todos los usuarios puedan crear trabajos de impresion pero no puedan eliminar los de otros. Permisos incorrectos causan errores de impresion.
