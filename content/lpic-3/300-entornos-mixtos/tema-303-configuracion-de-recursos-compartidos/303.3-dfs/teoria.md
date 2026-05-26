---
title: "303.3 - DFS (Distributed File System)"
description: "Configuración de DFS en Samba para sistema de archivos distribuido"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.3"
peso: 1
tags:
  - lpic-3
  - tema-303
  - samba
  - dfs
  - sistema-distribuido
---

# 303.3 DFS (Distributed File System)

## Introducción

DFS (Distributed File System) es una tecnología que permite crear un espacio de nombres unificado para recursos compartidos distribuidos en múltiples servidores. Con DFS, los usuarios acceden a una ruta única que se redirige transparentemente a los servidores reales que contienen los datos. Samba implementa soporte para DFS, permitiendo a servidores Linux participar en infraestructuras DFS.

## Conceptos fundamentales de DFS

### ¿Qué es DFS?

DFS proporciona dos funcionalidades principales:

1. **Espacio de nombres unificado**: Una raíz DFS que agrupa enlaces a múltiples shares en diferentes servidores bajo una sola ruta
2. **Failover/redundancia**: Los enlaces DFS pueden apuntar a múltiples destinos, proporcionando alta disponibilidad

```
\\empresa\dfs\              ← Raíz DFS (punto de entrada)
  ├── datos\               ← Enlace DFS → \\servidor1\datos
  ├── proyectos\           ← Enlace DFS → \\servidor2\proyectos
  └── backup\              ← Enlace DFS → \\servidor3\backup
```

### Beneficios de DFS

- Los usuarios solo necesitan recordar una ruta base
- La ubicación física de los datos es transparente
- Los recursos pueden moverse entre servidores sin cambiar la ruta de acceso
- Soporte para failover entre réplicas

> **Para el examen:** DFS permite crear un espacio de nombres virtual que agrupa shares de múltiples servidores bajo una única ruta de acceso, proporcionando transparencia de ubicación.

## Configuración de DFS en Samba

### Raíz DFS (msdfs root)

Para configurar un share como raíz DFS:

```ini
[global]
   host msdfs = yes

[dfs]
   path = /srv/samba/dfs
   msdfs root = yes
   browseable = yes
```

El parámetro `host msdfs = yes` en `[global]` habilita el soporte DFS en el servidor. `msdfs root = yes` en el share lo convierte en una raíz DFS.

> **Para el examen:** Se necesitan dos parámetros para DFS: `host msdfs = yes` en `[global]` y `msdfs root = yes` en el share que actuará como raíz DFS.

### Creación de enlaces DFS

Los enlaces DFS se crean como enlaces simbólicos en el directorio raíz DFS con un formato especial:

```bash
# Crear el directorio raíz DFS
mkdir -p /srv/samba/dfs

# Crear enlace DFS a un share en otro servidor
ln -s "msdfs:servidor1\datos" /srv/samba/dfs/datos

# Crear enlace DFS con múltiples destinos (failover)
ln -s "msdfs:servidor1\proyectos,servidor2\proyectos" /srv/samba/dfs/proyectos
```

El formato del enlace simbólico es:
- `msdfs:servidor\share` para un destino único
- `msdfs:servidor1\share,servidor2\share` para múltiples destinos (failover)

> **Para el examen:** Los enlaces DFS en Samba se implementan como enlaces simbólicos con el prefijo `msdfs:` en el directorio raíz DFS. Los destinos múltiples se separan con comas.

### Ejemplo completo de configuración

```ini
# smb.conf
[global]
   workgroup = EMPRESA
   host msdfs = yes

[namespace]
   path = /srv/samba/dfs
   msdfs root = yes
   browseable = yes
   guest ok = no
   valid users = @empleados
```

```bash
# Crear estructura DFS
mkdir -p /srv/samba/dfs

# Enlaces a shares en diferentes servidores
ln -s "msdfs:fileserver1\documentos" /srv/samba/dfs/documentos
ln -s "msdfs:fileserver2\multimedia" /srv/samba/dfs/multimedia
ln -s "msdfs:fileserver1\plantillas,fileserver2\plantillas" /srv/samba/dfs/plantillas
```

## DFS Proxy (msdfs proxy)

`msdfs proxy` permite redirigir un share completo a otro servidor sin crear enlaces simbólicos:

```ini
[aplicaciones]
   msdfs proxy = \servidor2\aplicaciones
```

Cuando un cliente accede a `\\servidor_samba\aplicaciones`, se redirige automáticamente a `\\servidor2\aplicaciones`.

> **Para el examen:** `msdfs proxy` redirige un share completo a otro servidor. No requiere `msdfs root = yes` ni enlaces simbólicos; funciona a nivel de share.

## Failover con DFS

Los enlaces DFS con múltiples destinos proporcionan failover:

```bash
# Enlace con dos destinos para failover
ln -s "msdfs:srv1\datos,srv2\datos" /srv/samba/dfs/datos
```

Cuando el cliente accede al enlace:
1. Intenta conectar al primer destino (`srv1\datos`)
2. Si falla, intenta el segundo destino (`srv2\datos`)
3. El cliente selecciona aleatoriamente entre los destinos disponibles

Para controlar la prioridad de los destinos, se puede usar la funcionalidad de referral del cliente Windows.

## Parámetros DFS en smb.conf

| Parámetro       | Sección   | Descripción                                          |
|-----------------|-----------|------------------------------------------------------|
| `host msdfs`    | [global]  | Habilita soporte DFS en el servidor                  |
| `msdfs root`    | [share]   | Convierte el share en raíz DFS                       |
| `msdfs proxy`   | [share]   | Redirige el share completo a otro servidor           |
| `msdfs shuffle referrals` | [global] | Aleatoriza el orden de destinos DFS          |

## Verificación y diagnóstico

```bash
# Verificar que los enlaces simbólicos DFS son correctos
ls -la /srv/samba/dfs/

# Verificar la configuración de DFS
testparm -s | grep -i dfs

# Probar acceso DFS desde un cliente Linux
smbclient //servidor/namespace -U usuario -c "ls"

# Verificar referral DFS
smbclient //servidor/namespace/datos -U usuario
```

## Consideraciones de seguridad

- Los permisos en la raíz DFS controlan quién puede ver los enlaces
- Los permisos de los shares destino controlan el acceso real a los datos
- Los enlaces DFS no proporcionan autenticación adicional
- Se recomienda usar `valid users` en la raíz DFS para controlar el acceso

```ini
[namespace]
   path = /srv/samba/dfs
   msdfs root = yes
   valid users = @empleados
   browseable = yes
```

> **Para el examen:** La seguridad de DFS tiene dos niveles: los permisos de la raíz DFS (quién puede ver los enlaces) y los permisos de los shares destino (quién puede acceder a los datos). Ambos se evalúan independientemente.
