---
title: "303.3 - Comandos Clave: DFS"
description: "Referencia rápida de comandos y parámetros DFS en Samba"
tipo: comandos
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
  - comandos
---

# 303.3 Comandos Clave - DFS

## Parámetros de smb.conf para DFS

| Parámetro                | Sección   | Valor     | Descripción                                |
|--------------------------|-----------|-----------|--------------------------------------------|
| `host msdfs`             | [global]  | yes/no    | Habilitar soporte DFS en el servidor       |
| `msdfs root`             | [share]   | yes/no    | Convertir el share en raíz DFS             |
| `msdfs proxy`            | [share]   | \\srv\sh  | Redirigir share completo a otro servidor   |
| `msdfs shuffle referrals`| [global]  | yes/no    | Aleatorizar orden de destinos DFS          |

## Creación de enlaces DFS

```bash
# Enlace DFS simple (un destino)
ln -s "msdfs:servidor\share" /ruta/dfs/enlace

# Enlace DFS con failover (múltiples destinos)
ln -s "msdfs:srv1\share,srv2\share" /ruta/dfs/enlace

# Verificar enlaces
ls -la /ruta/dfs/
```

## Formato de enlaces DFS

| Formato del enlace simbólico               | Descripción                     |
|--------------------------------------------|---------------------------------|
| `msdfs:servidor\share`                     | Destino único                   |
| `msdfs:srv1\share,srv2\share`              | Múltiples destinos (failover)   |
| `msdfs:srv1\share\subdirectorio`           | Destino con subdirectorio       |

## Configuración mínima requerida

```ini
# smb.conf
[global]
   host msdfs = yes

[dfs-raiz]
   path = /srv/samba/dfs
   msdfs root = yes
```

## Verificación y diagnóstico

```bash
# Ver enlaces DFS en el directorio raíz
ls -la /srv/samba/dfs/

# Verificar configuración DFS
testparm -s | grep -i dfs

# Probar acceso desde cliente Linux
smbclient //servidor/dfs-raiz -U usuario -c "ls"

# Verificar que host msdfs está habilitado
testparm -s --parameter-name="host msdfs"

# Recargar configuración
smbcontrol all reload-config
```
