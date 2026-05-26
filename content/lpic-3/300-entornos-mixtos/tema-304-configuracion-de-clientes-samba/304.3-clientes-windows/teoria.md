---
title: "304.3 - Clientes Windows"
description: "Integración de clientes Windows con Samba AD DC"
tipo: teoria
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
  - gpo
  - rsat
---

# 304.3 Clientes Windows

## Introducción

Cuando Samba actúa como controlador de dominio Active Directory (AD DC), los clientes Windows pueden unirse al dominio, recibir políticas de grupo, mapear unidades de red e instalar impresoras de forma transparente. Esta integración permite a Samba reemplazar o complementar los controladores de dominio Windows en entornos empresariales.

## Unión de Windows al dominio Samba AD

### Requisitos previos

1. DNS configurado correctamente (el cliente debe resolver el DC por nombre)
2. El reloj del cliente sincronizado con el DC (tolerancia máxima de 5 minutos para Kerberos)
3. Sufijo DNS del cliente configurado al dominio

### Proceso de unión

Desde Windows:

1. **Panel de control** > Sistema > Cambiar configuración > Cambiar
2. Seleccionar "Dominio" e introducir el nombre del dominio (ej: `EMPRESA.LOCAL`)
3. Proporcionar credenciales de administrador del dominio
4. Reiniciar el equipo

Desde PowerShell:

```powershell
# Unir al dominio
Add-Computer -DomainName "empresa.local" -Credential EMPRESA\administrador -Restart

# Verificar unión
(Get-WmiObject Win32_ComputerSystem).Domain
```

Desde línea de comandos:

```cmd
netdom join %COMPUTERNAME% /domain:empresa.local /userd:administrador /passwordd:*
```

> **Para el examen:** La unión al dominio requiere DNS funcional, sincronización de tiempo (NTP) y una cuenta con privilegios de unión al dominio. El error más común es la resolución DNS incorrecta.

## Comando net use

`net use` mapea unidades de red y conexiones a impresoras desde la línea de comandos de Windows:

```cmd
# Mapear una unidad de red
net use Z: \\servidor\share /user:EMPRESA\usuario

# Mapear con credenciales persistentes
net use Z: \\servidor\share /user:EMPRESA\usuario /persistent:yes

# Desconectar una unidad
net use Z: /delete

# Ver conexiones actuales
net use

# Conectar a impresora compartida
net use LPT1: \\servidor\impresora
```

| Opción           | Descripción                                    |
|------------------|------------------------------------------------|
| `/user:dom\user` | Credenciales para la conexión                  |
| `/persistent:yes`| Reconectar al iniciar sesión                   |
| `/delete`        | Eliminar la conexión                           |
| `/savecred`      | Guardar credenciales en Windows Vault          |

> **Para el examen:** `net use` con `/persistent:yes` crea una conexión que se restaura automáticamente en cada inicio de sesión del usuario.

## Directivas de Grupo (Group Policy) desde Samba DC

### Estructura SYSVOL

Las políticas de grupo se almacenan en el share SYSVOL del controlador de dominio:

```
\\empresa.local\sysvol\empresa.local\Policies\
└── {GUID-DE-LA-GPO}\
    ├── Machine\
    │   ├── Registry.pol
    │   └── Scripts\
    └── User\
        ├── Registry.pol
        └── Scripts\
```

### Gestión de GPOs con Samba

```bash
# Listar GPOs
samba-tool gpo listall

# Crear una GPO
samba-tool gpo create "Politica de seguridad"

# Vincular GPO a una OU
samba-tool gpo setlink "OU=Workstations,DC=empresa,DC=local" \
  {GUID-DE-LA-GPO}

# Ver GPOs aplicadas a un usuario
samba-tool gpo list usuario

# Ver GPOs de una OU
samba-tool gpo listcontainers {GUID}
```

### Plantillas administrativas (ADMX)

Las plantillas ADMX definen las configuraciones disponibles en las GPOs:

```bash
# Directorio de plantillas ADMX en SYSVOL
/var/lib/samba/sysvol/empresa.local/Policies/PolicyDefinitions/

# Copiar plantillas ADMX
cp *.admx /var/lib/samba/sysvol/empresa.local/Policies/PolicyDefinitions/
cp es-ES/*.adml /var/lib/samba/sysvol/empresa.local/Policies/PolicyDefinitions/es-ES/
```

> **Para el examen:** Las plantillas ADMX se copian al directorio `PolicyDefinitions` dentro de SYSVOL. Los archivos ADML (traducciones) van en subdirectorios por idioma (ej: `es-ES/`).

### registry.pol

El archivo `Registry.pol` contiene las configuraciones de registro que la GPO aplica:

- `Machine\Registry.pol`: configuración de equipo
- `User\Registry.pol`: configuración de usuario

Samba incluye herramientas para manipular estos archivos:

```bash
# Leer contenido de un registry.pol
samba-tool gpo manage read {GUID}

# Aplicar GPO
samba-tool gpo enforce {GUID}
```

## RSAT (Remote Server Administration Tools)

RSAT permite administrar el dominio Samba AD desde Windows:

### Herramientas RSAT principales

| Herramienta                        | Descripción                                  |
|------------------------------------|----------------------------------------------|
| Active Directory Users & Computers | Gestión de usuarios, grupos y OUs            |
| DNS Manager                        | Gestión de zonas DNS                         |
| Group Policy Management            | Crear y editar GPOs                          |
| ADSI Edit                          | Edición directa del directorio LDAP          |

### Instalación de RSAT en Windows 10/11

```powershell
# Instalar todas las herramientas RSAT
Get-WindowsCapability -Name RSAT* -Online | Add-WindowsCapability -Online

# Instalar herramientas específicas
Add-WindowsCapability -Online -Name Rsat.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0
Add-WindowsCapability -Online -Name Rsat.Dns.Tools~~~~0.0.1.0
Add-WindowsCapability -Online -Name Rsat.GroupPolicy.Management.Tools~~~~0.0.1.0
```

> **Para el examen:** RSAT permite administrar un dominio Samba AD desde Windows usando las mismas herramientas que para un AD de Windows Server. La consola GPMC (Group Policy Management Console) es especialmente útil para crear y editar GPOs.

## Mapeo de unidades de red

### Mediante GPO

Se pueden configurar mapeos de unidades en una GPO:

1. Abrir GPMC en el equipo Windows
2. Crear o editar una GPO
3. Ir a User Configuration > Preferences > Windows Settings > Drive Maps
4. Crear un nuevo mapeo

### Mediante script de inicio de sesión

```bat
@echo off
REM Script de inicio de sesión
net use H: \\servidor\homes\%USERNAME% /persistent:no
net use S: \\servidor\datos /persistent:no
```

El script se ubica en SYSVOL y se asigna mediante GPO o en las propiedades del usuario.

## Despliegue de impresoras desde Samba

### Mediante GPO

1. En GPMC: Computer Configuration > Policies > Windows Settings > Deployed Printers
2. Agregar la impresora: `\\servidor\impresora`

### Mediante línea de comandos

```cmd
# Agregar impresora de red
rundll32 printui.dll,PrintUIEntry /in /n "\\servidor\impresora"

# Establecer como predeterminada
rundll32 printui.dll,PrintUIEntry /y /n "\\servidor\impresora"
```

## Autenticación Kerberos desde clientes Windows

Los clientes Windows unidos al dominio Samba AD usan Kerberos automáticamente:

1. Al iniciar sesión, Windows obtiene un TGT del KDC (Samba)
2. Al acceder a recursos, Windows solicita tickets de servicio
3. La autenticación es transparente (Single Sign-On)

```cmd
# Ver tickets Kerberos actuales
klist

# Purgar tickets
klist purge
```

> **Para el examen:** Los clientes Windows unidos al dominio Samba AD utilizan Kerberos automáticamente para SSO. Los problemas de autenticación suelen estar relacionados con la sincronización de tiempo o la resolución DNS.

## Diagnóstico de problemas

```cmd
REM Desde Windows
nltest /dsgetdc:empresa.local       REM Localizar DC
nltest /sc_query:empresa.local      REM Verificar canal seguro
gpresult /r                         REM Ver GPOs aplicadas
gpupdate /force                     REM Forzar actualización de GPOs
nslookup _ldap._tcp.empresa.local   REM Verificar registros SRV
```

```bash
# Desde el servidor Samba
samba-tool domain info 192.168.1.100    # Info del dominio
samba-tool drs showrepl                 # Replicación
samba-tool dns query ...                # Consultas DNS
```
