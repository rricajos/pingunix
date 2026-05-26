---
title: "303.4 - Comandos Clave: Compartición de Impresoras"
description: "Referencia rápida de comandos para compartición de impresoras con Samba y CUPS"
tipo: comandos
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
  - comandos
---

# 303.4 Comandos Clave - Compartición de Impresoras

## Parámetros de smb.conf para impresión

| Parámetro        | Sección     | Descripción                                      |
|------------------|-------------|--------------------------------------------------|
| `printing`       | [global]    | Sistema de impresión (`cups`, `bsd`, `lprng`)    |
| `printcap name`  | [global]    | Fuente de la lista de impresoras                 |
| `load printers`  | [global]    | Cargar todas las impresoras de CUPS              |
| `cups options`   | [global]    | Opciones CUPS (`raw` = sin filtro)               |
| `printable`      | [share]     | Permite enviar trabajos de impresión             |
| `printer name`   | [share]     | Nombre de la impresora en CUPS                   |

## Comandos rpcclient para gestión de drivers

| Comando rpcclient                | Descripción                               |
|----------------------------------|-------------------------------------------|
| `enumprinters`                   | Listar impresoras compartidas             |
| `enumdrivers 3`                  | Listar drivers instalados (nivel 3)       |
| `adddriver "arch" "info"`        | Añadir un driver de impresora             |
| `setdriver "impresora" "driver"` | Asociar driver a impresora                |
| `getprinter "impresora" 2`       | Ver información detallada de impresora    |
| `getdriver "impresora"`          | Ver driver asociado a una impresora       |
| `deletedriver "driver"`          | Eliminar un driver                        |

## Comandos CUPS

| Comando                          | Descripción                               |
|----------------------------------|-------------------------------------------|
| `lpstat -p`                      | Listar impresoras y su estado             |
| `lpstat -d`                      | Mostrar impresora por defecto             |
| `lp -d impresora archivo`        | Enviar trabajo de impresión               |
| `lpq -P impresora`               | Ver cola de impresión                     |
| `lprm job_id`                    | Cancelar un trabajo de impresión          |
| `cupsctl`                        | Gestionar configuración de CUPS           |
| `lpadmin -p imp -E -v uri`       | Añadir impresora a CUPS                   |

## Estructura de directorios de drivers (print$)

```
/var/lib/samba/drivers/
├── W32X86/3/     # Windows 32-bit, driver v3
├── x64/3/        # Windows 64-bit, driver v3
└── WIN40/0/      # Windows 95/98
```

## Configuración mínima de impresión

```ini
[global]
   printing = cups
   printcap name = cups
   load printers = yes

[printers]
   path = /var/spool/samba
   printable = yes
   browseable = no

[print$]
   path = /var/lib/samba/drivers
   read only = yes
   write list = @printadmin
```

## Diagnóstico

```bash
systemctl status cups                        # Estado de CUPS
lpstat -p -d                                 # Impresoras y estado
testparm -s | grep -i print                  # Config impresión Samba
smbclient -L //localhost -U admin            # Shares visibles
rpcclient //localhost -U admin -c "enumprinters"  # Impresoras vía RPC
tail -f /var/log/cups/error_log              # Logs de CUPS
```
