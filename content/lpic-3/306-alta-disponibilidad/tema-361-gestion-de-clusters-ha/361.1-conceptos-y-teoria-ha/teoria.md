---
title: "361.1 - Conceptos y Teoría de Alta Disponibilidad"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.1"
peso: 5
tags:
  - lpic-3
  - tema-361
  - alta-disponibilidad
  - clusters
  - pacemaker
  - corosync
  - quorum
  - fencing
objetivos:
  - Comprender los conceptos fundamentales de alta disponibilidad
  - Conocer métricas clave como MTBF, MTTR y porcentajes de disponibilidad
  - Entender los problemas de split-brain y sus soluciones
  - Conocer la arquitectura Pacemaker/Corosync
---

# 361.1 - Conceptos y Teoría de Alta Disponibilidad

## Introducción a la Alta Disponibilidad

La **Alta Disponibilidad (HA)** es la capacidad de un sistema para permanecer operativo y accesible durante un período de tiempo determinado, minimizando el tiempo de inactividad no planificado. En entornos empresariales, la HA es esencial para garantizar la continuidad del negocio.

## Métricas Fundamentales de Disponibilidad

### MTBF (Mean Time Between Failures)

El **MTBF** es el tiempo medio entre fallos de un sistema. Cuanto mayor sea el MTBF, más fiable es el sistema.

```
MTBF = Tiempo total de operación / Número de fallos
```

### MTTR (Mean Time To Repair)

El **MTTR** es el tiempo medio necesario para reparar un sistema después de un fallo.

```
MTTR = Tiempo total de reparación / Número de reparaciones
```

### Cálculo de Disponibilidad

La disponibilidad se calcula como:

```
Disponibilidad = MTBF / (MTBF + MTTR) × 100%
```

### Tabla de "Los Nueves" de Disponibilidad

| Nivel | Disponibilidad | Inactividad/año | Inactividad/mes | Inactividad/semana |
|-------|---------------|-----------------|-----------------|-------------------|
| 2 nueves | 99% | 3.65 días | 7.31 horas | 1.68 horas |
| 3 nueves | 99.9% | 8.76 horas | 43.8 minutos | 10.1 minutos |
| 4 nueves | 99.99% | 52.6 minutos | 4.38 minutos | 1.01 minutos |
| 5 nueves | 99.999% | 5.26 minutos | 26.3 segundos | 6.05 segundos |
| 6 nueves | 99.9999% | 31.5 segundos | 2.63 segundos | 0.605 segundos |

> **Para el examen:** Memoriza los valores de 99.9% (8.76 h/año), 99.99% (52.6 min/año) y 99.999% (5.26 min/año). Son los más preguntados.

## SPOF - Single Point of Failure

Un **SPOF** es cualquier componente cuyo fallo provoca la caída completa del servicio. El objetivo principal de HA es eliminar todos los SPOF del sistema.

### Ejemplos comunes de SPOF

- Un único servidor sin redundancia
- Una única fuente de alimentación
- Un único enlace de red
- Un único controlador de almacenamiento
- Un único switch de red

> **Para el examen:** Identifica siempre los SPOF en un diagrama de arquitectura. La eliminación de SPOF es el principio fundamental del diseño HA.

## Modelos de Cluster

### Activo/Pasivo (Active/Standby)

```
                    ┌─────────────┐
  Clientes ───────> │  Nodo Activo │  <── Proporciona servicio
                    └─────────────┘
                    ┌─────────────┐
                    │ Nodo Pasivo  │  <── En espera (standby)
                    └─────────────┘
```

- Un nodo procesa las peticiones, el otro espera
- En caso de fallo, el nodo pasivo toma el control (**failover**)
- Mayor desperdicio de recursos pero más simple
- También llamado **hot-standby** o **warm-standby**

### Activo/Activo

```
                    ┌─────────────┐
  Clientes ───────> │  Nodo 1      │  <── Ambos procesan
              └───> │  Nodo 2      │  <── peticiones
                    └─────────────┘
```

- Ambos nodos procesan peticiones simultáneamente
- Mejor uso de recursos
- Más complejo de configurar
- Requiere sistemas de archivos cluster o almacenamiento compartido

> **Para el examen:** Conoce las diferencias entre activo/pasivo y activo/activo, y cuándo usar cada modelo.

## El Problema del Split-Brain

El **split-brain** ocurre cuando los nodos de un cluster pierden la comunicación entre sí pero siguen funcionando. Cada nodo cree que el otro ha fallado y ambos intentan tomar el control de los recursos.

```
  ┌──────────┐          X          ┌──────────┐
  │  Nodo A  │ ←── Red caída ───→ │  Nodo B  │
  │ "Soy el  │                     │ "Soy el  │
  │  primario"│                    │  primario"│
  └──────────┘                     └──────────┘
       ↓                                ↓
  Monta disco                     Monta disco
  compartido                      compartido
       ↓                                ↓
  ¡¡ CORRUPCIÓN DE DATOS !!
```

### Consecuencias del Split-Brain

- Corrupción de datos en almacenamiento compartido
- Conflictos de direcciones IP (ambos nodos asumen la IP virtual)
- Inconsistencia en el estado del servicio

## Fencing y STONITH

### Fencing

El **fencing** es el mecanismo para aislar un nodo defectuoso del cluster, impidiendo que acceda a recursos compartidos.

Tipos de fencing:
- **Fencing a nivel de nodo (STONITH):** Apaga o reinicia el nodo físicamente
- **Fencing a nivel de recurso:** Bloquea el acceso del nodo al recurso (ej: SAN zoning)

### STONITH (Shoot The Other Node In The Head)

STONITH es la implementación más común de fencing. Garantiza que un nodo problemático sea apagado físicamente antes de que otro tome sus recursos.

```bash
# Ejemplos de dispositivos STONITH
fence_ipmilan    # IPMI/BMC LAN
fence_xvm        # Máquinas virtuales libvirt
fence_apc        # APC power switches
fence_iLo        # HP iLO
sbd              # STONITH Block Device
```

> **Para el examen:** STONITH es **obligatorio** en un cluster Pacemaker en producción. Sin STONITH, el cluster no puede garantizar la integridad de los datos.

## Quorum

El **quorum** es el mecanismo de votación que determina qué partición del cluster tiene derecho a seguir operando. Evita el split-brain asegurando que solo la partición mayoritaria continúe.

### Cálculo del Quorum

```
Quorum = (número_de_nodos / 2) + 1   (para número par)
Quorum = (número_de_nodos + 1) / 2   (para número impar)
```

| Nodos totales | Quorum mínimo | Fallos tolerados |
|--------------|---------------|------------------|
| 2 | 2 (requiere mecanismo adicional) | 0 |
| 3 | 2 | 1 |
| 4 | 3 | 1 |
| 5 | 3 | 2 |
| 7 | 4 | 3 |

### Quorum Disk (QDisk)

En clusters de 2 nodos, se usa un **disco de quorum** como "tercer voto" para resolver empates:

```
  ┌──────────┐     ┌──────────┐
  │  Nodo A  │     │  Nodo B  │
  │  Voto: 1 │     │  Voto: 1 │
  └────┬─────┘     └────┬─────┘
       │                 │
       └────┬────────┬───┘
            │ QDisk  │
            │ Voto: 1│
            └────────┘
```

> **Para el examen:** Un cluster de 2 nodos no tiene quorum natural. Necesita un mecanismo adicional como quorum disk, quorum device o configuración `two_node: 1` en Corosync.

## Arquitectura Pacemaker/Corosync

### Corosync

**Corosync** es la capa de comunicación del cluster. Se encarga de:
- Membresía del cluster (qué nodos están activos)
- Comunicación entre nodos (mensajería fiable)
- Gestión del quorum
- Protocolo Totem (Single Ring Ordering)

### Pacemaker

**Pacemaker** es el **CRM (Cluster Resource Manager)**. Se encarga de:
- Decidir dónde ejecutar los recursos
- Detectar y recuperar fallos de recursos
- Gestionar las dependencias entre recursos
- Aplicar políticas y restricciones

### Arquitectura por capas

```
  ┌─────────────────────────────────────┐
  │           Herramientas CLI          │
  │     (pcs, crm, cibadmin, crm_mon)  │
  ├─────────────────────────────────────┤
  │          Pacemaker (CRM)            │
  │  ┌──────┐  ┌──────┐  ┌──────────┐  │
  │  │ CIB  │  │ PE   │  │ CRMd/LRMd│  │
  │  │(XML) │  │Engine│  │          │  │
  │  └──────┘  └──────┘  └──────────┘  │
  ├─────────────────────────────────────┤
  │         Corosync (Messaging)        │
  │  ┌──────────┐  ┌─────────┐         │
  │  │  Totem   │  │ Quorum  │         │
  │  │ Protocol │  │ System  │         │
  │  └──────────┘  └─────────┘         │
  ├─────────────────────────────────────┤
  │           Red / Heartbeat           │
  └─────────────────────────────────────┘
```

### Componentes internos de Pacemaker

| Componente | Función |
|-----------|---------|
| **CIB** (Cluster Information Base) | Base de datos XML con la configuración del cluster |
| **PE** (Policy Engine) | Calcula el estado deseado del cluster |
| **CRMd** (Cluster Resource Manager daemon) | Coordina acciones entre nodos |
| **LRMd** (Local Resource Manager daemon) | Ejecuta operaciones en el nodo local |
| **STONITHd** | Gestiona operaciones de fencing |

## Resource Agents (Agentes de Recursos)

Los **Resource Agents** son scripts que Pacemaker usa para gestionar recursos:

| Clase | Descripción | Ruta |
|-------|------------|------|
| **OCF** | Open Cluster Framework (el más completo) | `/usr/lib/ocf/resource.d/` |
| **LSB** | Scripts init.d estándar | `/etc/init.d/` |
| **systemd** | Unidades de systemd | Gestionadas por systemctl |
| **service** | Abstracción sobre LSB/systemd | Detección automática |
| **stonith** | Agentes de fencing | Específicos de STONITH |

```bash
# Listar agentes OCF disponibles
pcs resource agents ocf

# Ver parámetros de un agente
pcs resource describe ocf:heartbeat:IPaddr2
```

> **Para el examen:** Los agentes OCF son los más importantes. Soportan operaciones de start, stop, monitor, promote, demote, migrate_to y migrate_from.

## Heartbeat y Comunicación

El **heartbeat** es el mecanismo de latido que permite a los nodos confirmar que están activos:

- Se envían mensajes periódicos entre nodos
- Si un nodo no responde en un tiempo determinado (**timeout**), se considera muerto
- Se recomienda usar redes dedicadas para el heartbeat
- Corosync puede configurarse con anillos redundantes para evitar falsos positivos

```
# Ejemplo: configuración de redundancia en corosync.conf
totem {
    rrp_mode: passive
    interface {
        ringnumber: 0
        bindnetaddr: 192.168.1.0
    }
    interface {
        ringnumber: 1
        bindnetaddr: 10.0.0.0
    }
}
```

## Resumen de Conceptos Clave

| Concepto | Definición |
|----------|-----------|
| **HA** | Sistema diseñado para minimizar el tiempo de inactividad |
| **MTBF** | Tiempo medio entre fallos |
| **MTTR** | Tiempo medio de reparación |
| **SPOF** | Punto único de fallo |
| **Split-brain** | Partición del cluster donde cada parte cree ser la activa |
| **Fencing** | Aislamiento de un nodo defectuoso |
| **STONITH** | Fencing físico (apagar el nodo) |
| **Quorum** | Mecanismo de votación para decidir qué partición sobrevive |
| **CRM** | Gestor de recursos del cluster (Pacemaker) |
| **Resource Agent** | Script para gestionar un recurso |
| **Heartbeat** | Señal periódica de vida entre nodos |
