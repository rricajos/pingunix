---
title: "304.3 - Comandos Clave: Clientes Windows"
description: "Referencia rápida de comandos para integración de clientes Windows con Samba AD"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 304 - Configuración de Clientes Samba"
subtema: "304.3"
peso: 2
tags:
  - lpic-3
  - tema-304
  - samba
  - windows
  - comandos
---

# 304.3 Comandos Clave - Clientes Windows

## Comandos Windows para unión al dominio

| Comando                                          | Descripción                           |
|--------------------------------------------------|---------------------------------------|
| `Add-Computer -DomainName dom -Credential admin` | Unir al dominio (PowerShell)          |
| `netdom join %PC% /domain:dom /userd:admin`      | Unir al dominio (CMD)                 |
| `nltest /dsgetdc:dominio`                        | Localizar controlador de dominio      |
| `nltest /sc_query:dominio`                       | Verificar canal seguro con DC         |

## Comandos net use (Windows)

| Comando                                   | Descripción                              |
|-------------------------------------------|------------------------------------------|
| `net use Z: \\srv\share /user:DOM\user`   | Mapear unidad de red                     |
| `net use Z: /delete`                      | Desconectar unidad                       |
| `net use`                                 | Ver conexiones actuales                  |
| `net use Z: \\srv\share /persistent:yes`  | Conexión persistente                     |

## Comandos de GPO (Windows)

| Comando                    | Descripción                                   |
|----------------------------|-----------------------------------------------|
| `gpupdate /force`          | Forzar actualización de políticas de grupo    |
| `gpresult /r`              | Ver GPOs aplicadas                            |
| `gpresult /h reporte.html` | Generar reporte HTML de GPOs                  |
| `rsop.msc`                 | Resultant Set of Policy (GUI)                 |
| `gpedit.msc`               | Editor de políticas local                     |
| `gpmc.msc`                 | Consola de administración de GPOs             |

## Herramientas RSAT

| Herramienta              | Acceso                                        |
|--------------------------|-----------------------------------------------|
| AD Users & Computers     | `dsa.msc`                                     |
| DNS Manager              | `dnsmgmt.msc`                                 |
| Group Policy Management  | `gpmc.msc`                                    |
| ADSI Edit                | `adsiedit.msc`                                |
| Print Management         | `printmanagement.msc`                         |

## Comandos Samba para gestión de GPOs

| Comando                                      | Descripción                           |
|----------------------------------------------|---------------------------------------|
| `samba-tool gpo listall`                     | Listar todas las GPOs                 |
| `samba-tool gpo create "nombre"`             | Crear una GPO                         |
| `samba-tool gpo setlink "OU=..." {GUID}`     | Vincular GPO a OU                     |
| `samba-tool gpo list usuario`                | GPOs aplicadas a un usuario           |
| `samba-tool gpo manage read {GUID}`          | Leer contenido de una GPO             |

## Estructura SYSVOL

```
\\dominio\sysvol\dominio\Policies\
├── {GUID-GPO}\
│   ├── Machine\Registry.pol
│   └── User\Registry.pol
└── PolicyDefinitions\
    ├── *.admx
    └── es-ES\*.adml
```

## Diagnóstico desde Windows

```cmd
nltest /dsgetdc:dominio          # Localizar DC
nltest /sc_query:dominio         # Canal seguro
nslookup _ldap._tcp.dominio     # DNS SRV records
klist                            # Tickets Kerberos
klist purge                      # Purgar tickets
gpresult /r                      # GPOs aplicadas
w32tm /query /status             # Sincronización NTP
```

## Diagnóstico desde Samba

```bash
samba-tool domain info IP          # Info del dominio
samba-tool drs showrepl            # Replicación
samba-tool computer list           # Equipos en el dominio
samba-tool user list               # Usuarios del dominio
```
