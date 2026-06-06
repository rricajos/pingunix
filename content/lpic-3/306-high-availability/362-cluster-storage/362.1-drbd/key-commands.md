---
title: "362.1 - Comandos Clave: DRBD"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "362 - Almacenamiento de Cluster"
subtema: "362.1"
peso: 5
tags:
  - lpic-3
  - tema-362
  - comandos
  - drbd
---

# 362.1 - Comandos Clave: DRBD

## drbdadm - Administracion Principal

| Comando | Descripcion |
|---------|------------|
| `drbdadm create-md recurso` | Crear metadatos DRBD |
| `drbdadm up recurso` | Activar recurso (attach + connect) |
| `drbdadm down recurso` | Desactivar recurso |
| `drbdadm primary recurso` | Convertir nodo a primario |
| `drbdadm primary --force recurso` | Forzar primario (primera vez) |
| `drbdadm secondary recurso` | Convertir nodo a secundario |
| `drbdadm status` | Estado de todos los recursos |
| `drbdadm status recurso` | Estado de un recurso |
| `drbdadm adjust recurso` | Aplicar cambios de configuracion |
| `drbdadm connect recurso` | Conectar con el nodo remoto |
| `drbdadm disconnect recurso` | Desconectar del nodo remoto |
| `drbdadm invalidate recurso` | Invalidar disco local (forzar resync) |
| `drbdadm invalidate-remote recurso` | Invalidar disco remoto |
| `drbdadm verify recurso` | Iniciar verificacion online |
| `drbdadm pause-sync recurso` | Pausar resincronizacion |
| `drbdadm resume-sync recurso` | Reanudar resincronizacion |

## Recuperacion de Split-Brain

| Accion | Comando |
|--------|---------|
| Nodo victima (descartar datos) | `drbdadm disconnect recurso && drbdadm secondary recurso && drbdadm connect --discard-my-data recurso` |
| Nodo sobreviviente | `drbdadm disconnect recurso && drbdadm connect recurso` |

## Protocolos de Replicacion

| Protocolo | Tipo | Confirmacion |
|-----------|------|-------------|
| A | Asincrono | Buffer TCP local |
| B | Semi-sincrono | Memoria remota |
| C | Sincrono | Disco remoto |

## Estados Importantes

| Estado (cs) | Significado |
|-------------|------------|
| `Connected` | Conectado y funcionando |
| `WFConnection` | Esperando conexion |
| `StandAlone` | Desconectado manualmente |
| `SyncSource` | Enviando datos de resync |
| `SyncTarget` | Recibiendo datos de resync |

| Estado (ds) | Significado |
|-------------|------------|
| `UpToDate` | Datos actualizados |
| `Inconsistent` | Datos inconsistentes (resync en curso) |
| `Outdated` | Datos obsoletos |
| `DUnknown` | Estado desconocido |
| `Diskless` | Sin disco asociado |

## Archivos de Configuracion

| Archivo | Descripcion |
|---------|------------|
| `/etc/drbd.conf` | Archivo principal (incluye otros) |
| `/etc/drbd.d/global_common.conf` | Secciones global y common |
| `/etc/drbd.d/*.res` | Definiciones de recursos |
| `/proc/drbd` | Estado del kernel (formato legacy) |
| `/dev/drbdX` | Dispositivos de bloque |

## Secciones de Configuracion

| Seccion | Contenido |
|---------|----------|
| `global { }` | Opciones globales del modulo |
| `common { }` | Valores predeterminados para recursos |
| `resource nombre { }` | Definicion de un recurso |
| `on nodo { }` | Configuracion especifica por nodo |
| `disk { }` | Opciones de disco |
| `net { }` | Opciones de red y protocolo |
| `startup { }` | Opciones de inicio |
| `handlers { }` | Scripts de manejo de eventos |
