---
title: "305.4 - Comandos Clave: NFS"
description: "Referencia rápida de comandos para NFSv4 con Kerberos e integración FreeIPA"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.4"
peso: 3
tags:
  - lpic-3
  - tema-305
  - nfs
  - kerberos
  - comandos
---

# 305.4 Comandos Clave - NFS

## Niveles de seguridad NFSv4

| Nivel    | Autenticación | Integridad | Cifrado | Uso recomendado           |
|----------|---------------|------------|---------|---------------------------|
| `sys`    | UID/GID       | No         | No      | Redes confiables (legacy) |
| `krb5`   | Kerberos      | No         | No      | Autenticación básica      |
| `krb5i`  | Kerberos      | Sí         | No      | Datos sensibles           |
| `krb5p`  | Kerberos      | Sí         | Sí      | Datos confidenciales      |

## Configuración /etc/exports

```bash
# Formato
/ruta  clientes(sec=nivel,opciones)

# Ejemplos
/export/datos  *.empresa.local(sec=krb5:krb5i:krb5p,rw,sync)
/export/conf   *.empresa.local(sec=krb5p,rw,sync,root_squash)
/export/pub    *(sec=sys:krb5,ro,sync,all_squash)
```

| Opción             | Descripción                                 |
|--------------------|---------------------------------------------|
| `sec=`             | Mecanismos de seguridad (separados por `:`) |
| `rw` / `ro`        | Lectura-escritura / Solo lectura           |
| `sync`             | Escritura síncrona                          |
| `root_squash`      | Mapear root a nobody (por defecto)          |
| `no_root_squash`   | Permitir acceso root                        |
| `all_squash`       | Mapear todos los usuarios a nobody          |
| `no_subtree_check` | No verificar subdirectorios                 |

## Comandos del servidor NFS

| Comando                        | Descripción                              |
|--------------------------------|------------------------------------------|
| `exportfs -arv`                | Exportar/reexportar todos los filesystems|
| `exportfs -v`                  | Ver exports activos con opciones         |
| `exportfs -u host:/ruta`       | Desexportar un filesystem                |
| `showmount -e servidor`        | Mostrar exports de un servidor           |
| `nfsstat`                      | Estadísticas NFS                         |
| `nfsstat -m`                   | Info de montajes NFS                     |

## Comandos del cliente NFS

```bash
# Montar con Kerberos
mount -t nfs4 -o sec=krb5 servidor:/export/datos /mnt/datos

# Montar con cifrado
mount -t nfs4 -o sec=krb5p servidor:/export/conf /mnt/conf

# En /etc/fstab
servidor:/export/datos  /mnt/datos  nfs4  sec=krb5,_netdev  0  0
```

## Servicios relacionados

| Servicio          | Descripción                                     |
|-------------------|-------------------------------------------------|
| `nfs-server`      | Servidor NFS                                    |
| `gssproxy`        | Gestión de credenciales GSS-API (moderno)       |
| `rpc-gssd`        | Daemon GSS del cliente (legacy)                 |
| `nfs-idmapd`      | Mapeo de identidades NFSv4                      |
| `autofs`          | Montaje automático                              |

## Automount en FreeIPA

```bash
# Crear ubicación
ipa automountlocation-add default

# Crear mapa
ipa automountmap-add default auto.nfs

# Añadir entrada a auto.master
ipa automountkey-add default auto.master --key=/nfs --info=auto.nfs

# Añadir clave de montaje
ipa automountkey-add default auto.nfs --key=datos \
  --info="-fstype=nfs4,sec=krb5 srv:/export/datos"
```

## Configuración idmapd.conf

```ini
# /etc/idmapd.conf (debe coincidir en servidor y clientes)
[General]
Domain = empresa.local

[Mapping]
Nobody-User = nobody
Nobody-Group = nobody
```

## Diagnóstico

```bash
exportfs -v                       # Exports activos
showmount -e servidor             # Exports remotos
mount | grep nfs                  # Montajes NFS
klist -kt /etc/krb5.keytab       # Keytab del servidor
nfsidmap -c                       # Limpiar caché idmap
journalctl -u nfs-server          # Logs del servidor
journalctl -u gssproxy            # Logs de gssproxy
rpcdebug -m nfs -s all            # Debug NFS
```
