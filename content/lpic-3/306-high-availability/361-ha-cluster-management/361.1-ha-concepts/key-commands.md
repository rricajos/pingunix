---
title: "361.1 - Comandos Clave: Conceptos y Teoría HA"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.1"
peso: 5
tags:
  - lpic-3
  - tema-361
  - comandos
  - alta-disponibilidad
---

# 361.1 - Comandos Clave: Conceptos y Teoría HA

## Comandos Pacemaker/Corosync Básicos

| Comando | Descripción |
|---------|------------|
| `pcs cluster status` | Muestra el estado general del cluster |
| `pcs status` | Estado completo (nodos, recursos, STONITH) |
| `crm_mon -1` | Vista instantánea del estado del cluster |
| `crm_mon -Afn` | Estado detallado con atributos y fallos |
| `corosync-cfgtool -s` | Estado de los anillos de comunicación de Corosync |
| `corosync-cmapctl` | Consulta la base de datos de configuración de Corosync |
| `corosync-quorumtool` | Muestra el estado del quorum |

## Archivos de Configuración

| Archivo | Descripción |
|---------|------------|
| `/etc/corosync/corosync.conf` | Configuración principal de Corosync |
| `/var/lib/pacemaker/cib/cib.xml` | CIB (Cluster Information Base) |
| `/var/log/cluster/corosync.log` | Log de Corosync |
| `/var/log/pacemaker/pacemaker.log` | Log de Pacemaker |

## Operaciones de Quorum

| Comando | Descripción |
|---------|------------|
| `corosync-quorumtool -s` | Estado del quorum |
| `corosync-quorumtool -l` | Lista de nodos votantes |
| `pcs quorum status` | Estado del quorum vía pcs |
| `pcs quorum device status` | Estado del dispositivo de quorum |
| `pcs property set no-quorum-policy=freeze` | Política cuando se pierde quorum |

## Valores de no-quorum-policy

| Valor | Comportamiento |
|-------|---------------|
| `stop` | Detiene todos los recursos (predeterminado) |
| `freeze` | Mantiene los recursos activos pero no inicia nuevos |
| `ignore` | Ignora la pérdida de quorum (peligroso) |
| `suicide` | El nodo se apaga a sí mismo |

## Operaciones de Fencing/STONITH

| Comando | Descripción |
|---------|------------|
| `pcs stonith list` | Lista dispositivos STONITH disponibles |
| `pcs stonith describe <agente>` | Muestra parámetros del agente STONITH |
| `pcs stonith fence <nodo>` | Ejecuta fencing manual de un nodo |
| `stonith_admin -L` | Lista dispositivos STONITH registrados |
| `stonith_admin -F <nodo>` | Ejecuta fencing de un nodo |
| `pcs property set stonith-enabled=true` | Habilita STONITH (obligatorio en producción) |

## Resource Agents

| Comando | Descripción |
|---------|------------|
| `pcs resource agents` | Lista todos los agentes de recursos |
| `pcs resource agents ocf` | Lista agentes OCF |
| `pcs resource describe ocf:heartbeat:IPaddr2` | Describe un agente específico |
| `crm_resource --list-agents ocf` | Alternativa para listar agentes OCF |

## Métricas y Cálculos Rápidos

| Métrica | Fórmula |
|---------|---------|
| Disponibilidad | `MTBF / (MTBF + MTTR) × 100` |
| MTBF | `Tiempo_operación_total / Num_fallos` |
| MTTR | `Tiempo_reparación_total / Num_reparaciones` |
| Quorum (N par) | `(N / 2) + 1` |
| Quorum (N impar) | `(N + 1) / 2` |
