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

## DFS en entornos Active Directory

### DFS standalone vs DFS en AD

| Aspecto | DFS Standalone (Samba) | DFS en AD |
|---------|----------------------|-----------|
| Raiz DFS | En un servidor Samba individual | En el namespace del dominio |
| Acceso | `\\servidor\share` | `\\dominio\dfs` |
| Disponibilidad | Depende de un servidor | Alta disponibilidad via AD |
| Replicacion | No incluida | DFS-R (solo Windows nativo) |

En un entorno AD, DFS puede usar el namespace del dominio:
- `\\empresa.local\dfs\documentos` → resuelve via AD independientemente del servidor
- Si el servidor DFS cae, AD puede redirigir a otro servidor con la misma raiz

### Configuracion de DFS en Samba como miembro de dominio

```ini
[global]
   workgroup = EMPRESA
   realm = EMPRESA.LOCAL
   security = ADS
   host msdfs = yes

[dfs]
   path = /srv/samba/dfs
   msdfs root = yes
   valid users = @"EMPRESA\Domain Users"
```

> **Para el examen:** Cuando Samba es miembro de un dominio AD, DFS funciona con autenticacion Kerberos. Los permisos pueden asignarse a grupos de dominio (`@"DOMINIO\grupo"`).

## Comportamiento del cliente DFS

### Como resuelve el cliente Windows un enlace DFS

1. El cliente conecta al share raiz DFS (`\\servidor\namespace`)
2. El servidor responde con un **DFS referral** (redireccion)
3. El referral contiene la lista de destinos y sus prioridades
4. El cliente conecta directamente al destino indicado
5. El servidor DFS no participa en la transferencia de datos

```
Cliente → \\servidor\namespace\datos     (peticion)
       ← Referral: \\srv1\datos, \\srv2\datos  (respuesta DFS)
Cliente → \\srv1\datos                   (conexion directa)
```

### Cache de referrals en el cliente

Los clientes Windows cachean los referrals DFS:
- **TTL por defecto**: 300 segundos (5 minutos)
- Se puede controlar con el parametro `msdfs referral` en Samba
- El cache reduce la carga en el servidor DFS
- Un TTL largo mejora rendimiento pero retrasa la deteccion de cambios

```bash
# En clientes Windows, limpiar cache DFS
dfsutil /purgecache

# Verificar referrals desde Samba
smbclient //servidor/namespace -U usuario -c "ls"
```

## Troubleshooting de DFS

### Problemas comunes y soluciones

| Problema | Causa probable | Solucion |
|----------|---------------|----------|
| El enlace DFS no funciona | Formato incorrecto del symlink | Verificar `ls -la` y formato `msdfs:srv\share` |
| Acceso denegado al enlace | Permisos del directorio raiz DFS | Verificar permisos Unix del directorio |
| Referral no se resuelve | `host msdfs = no` en global | Activar `host msdfs = yes` |
| Solo funciona un destino | Backslash incorrecto en symlink | Usar `\` no `/` en el formato DFS |
| Cliente no sigue el referral | Cache de referral obsoleto | Esperar TTL o limpiar cache (`dfsutil /purgecache`) |

### Comandos de diagnostico

```bash
# Verificar symlinks DFS
ls -la /srv/samba/dfs/
# Debe mostrar: enlace -> msdfs:servidor\share

# Verificar configuracion DFS
testparm -s 2>/dev/null | grep -i "msdfs\|dfs"

# Probar acceso DFS con smbclient
smbclient //servidor/namespace -U usuario%password -c "ls"

# Ver referrals DFS con smbclient
smbclient //servidor/namespace -U usuario -c "dir"

# Verificar logs de Samba (nivel debug)
# En smb.conf: log level = 3 msdfs:10
tail -f /var/log/samba/log.smbd | grep -i dfs

# Verificar desde Windows
net use \\servidor\namespace /user:usuario password
dir \\servidor\namespace
```

---

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

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **Dos parametros necesarios para DFS** — Se requiere `host msdfs = yes` en `[global]` Y `msdfs root = yes` en el share. Olvidar cualquiera de los dos desactiva DFS. Las preguntas suelen presentar configuraciones donde falta uno de ellos.
- **Enlaces DFS son symlinks con prefijo `msdfs:`** — Los enlaces se crean como `ln -s "msdfs:servidor\share" /ruta/dfs/enlace`. El formato usa backslash (`\`) no forward slash. Multiples destinos se separan con coma. Errores en el formato del symlink son causa comun de fallo.
- **`msdfs proxy` vs `msdfs root`** — `msdfs proxy` redirige un share COMPLETO a otro servidor sin necesitar symlinks ni `msdfs root`. `msdfs root` convierte un share en raiz DFS con enlaces. Son mecanismos diferentes; las preguntas piden identificar cual usar en cada escenario.
- **DFS NO proporciona replicacion de datos** — DFS en Samba solo redirige clientes a los servidores correctos. NO replica datos entre servidores. Para replicacion se necesitan herramientas externas (rsync, etc.). Confundir DFS con DFS-R (replicacion) es error clasico.
- **Failover con multiples destinos** — `ln -s "msdfs:srv1\datos,srv2\datos" /dfs/datos` proporciona failover: si srv1 falla, el cliente intenta srv2. El cliente selecciona aleatoriamente entre destinos disponibles. `msdfs shuffle referrals` controla la aleatorizacion.
- **Seguridad en dos niveles** — Los permisos de la raiz DFS (quien ve los enlaces) y los permisos de los shares destino (quien accede a los datos) se evaluan independientemente. Un usuario puede ver un enlace DFS pero no tener acceso al share destino.
