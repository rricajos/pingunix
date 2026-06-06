---
title: "361.3 - Comandos Clave: Clusters de Failover"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.3"
peso: 6
tags:
  - lpic-3
  - tema-361
  - comandos
  - failover
  - pacemaker
  - pcs
---

# 361.3 - Comandos Clave: Clusters de Failover

## pcs - Comandos de Cluster

| Comando | Descripción |
|---------|------------|
| `pcs host auth nodo1 nodo2` | Autenticar nodos |
| `pcs cluster setup nombre nodo1 nodo2` | Crear cluster |
| `pcs cluster start --all` | Iniciar cluster en todos los nodos |
| `pcs cluster stop --all` | Detener cluster en todos los nodos |
| `pcs cluster enable --all` | Habilitar inicio automático |
| `pcs cluster disable --all` | Deshabilitar inicio automático |
| `pcs cluster destroy` | Destruir cluster |
| `pcs cluster status` | Estado del cluster |
| `pcs status` | Estado completo |

## pcs - Gestión de Recursos

| Comando | Descripción |
|---------|------------|
| `pcs resource create NOMBRE agente params op ...` | Crear recurso |
| `pcs resource delete NOMBRE` | Eliminar recurso |
| `pcs resource enable NOMBRE` | Habilitar recurso |
| `pcs resource disable NOMBRE` | Deshabilitar recurso |
| `pcs resource restart NOMBRE` | Reiniciar recurso |
| `pcs resource cleanup NOMBRE` | Limpiar errores |
| `pcs resource move NOMBRE nodo` | Mover a nodo específico |
| `pcs resource ban NOMBRE nodo` | Prohibir en nodo |
| `pcs resource clear NOMBRE` | Eliminar restricciones temporales |
| `pcs resource update NOMBRE param=valor` | Actualizar parámetro |
| `pcs resource show` | Listar recursos |
| `pcs resource group add GRUPO REC1 REC2` | Crear grupo |
| `pcs resource clone NOMBRE` | Clonar recurso |
| `pcs resource promotable NOMBRE` | Hacer promotable |
| `pcs resource agents` | Listar agentes |
| `pcs resource describe agente` | Describir agente |

## pcs - Restricciones

| Comando | Descripción |
|---------|------------|
| `pcs constraint location REC prefers nodo=score` | Preferir nodo |
| `pcs constraint location REC avoids nodo=score` | Evitar nodo |
| `pcs constraint colocation add REC1 with REC2 score` | Colocación |
| `pcs constraint order REC1 then REC2` | Orden de inicio |
| `pcs constraint show` | Listar restricciones |
| `pcs constraint remove ID` | Eliminar restricción |

## pcs - STONITH

| Comando | Descripción |
|---------|------------|
| `pcs stonith create NOMBRE agente params` | Crear dispositivo STONITH |
| `pcs stonith delete NOMBRE` | Eliminar dispositivo |
| `pcs stonith show` | Listar dispositivos |
| `pcs stonith fence NODO` | Fencing manual |
| `pcs stonith status` | Estado de dispositivos STONITH |
| `pcs property set stonith-enabled=true` | Habilitar STONITH |

## pcs - Propiedades y Quorum

| Comando | Descripción |
|---------|------------|
| `pcs property set PROP=VALOR` | Establecer propiedad |
| `pcs property show` | Mostrar propiedades |
| `pcs quorum status` | Estado del quorum |
| `pcs quorum device add model net host=X` | Añadir QDevice |

## cibadmin y crm

| Comando | Descripción |
|---------|------------|
| `cibadmin --query` | Exportar CIB (XML) |
| `cibadmin --replace --xml-file archivo.xml` | Importar CIB |
| `crm_mon -1` | Estado instantáneo del cluster |
| `crm_mon -Afn` | Estado detallado |
| `crm_resource --list-agents ocf` | Listar agentes OCF |
| `crm status` | Estado (shell crm) |
| `crm configure show` | Mostrar configuración |

## Corosync

| Comando | Descripción |
|---------|------------|
| `corosync-cfgtool -s` | Estado de los anillos |
| `corosync-cmapctl` | Base de datos de configuración |
| `corosync-quorumtool` | Estado del quorum |
| `corosync-quorumtool -l` | Lista de nodos votantes |

## Archivos de Configuración

| Archivo | Descripción |
|---------|------------|
| `/etc/corosync/corosync.conf` | Configuración de Corosync |
| `/etc/corosync/authkey` | Clave de autenticación |
| `/var/lib/pacemaker/cib/cib.xml` | CIB de Pacemaker |
| `/etc/sysconfig/sbd` | Configuración de SBD |
| `/var/log/cluster/corosync.log` | Log de Corosync |
| `/var/log/pacemaker/pacemaker.log` | Log de Pacemaker |

## Dispositivos STONITH Comunes

| Agente | Uso |
|--------|-----|
| `fence_ipmilan` | Servidores con IPMI/BMC |
| `fence_xvm` | VMs libvirt/KVM |
| `fence_apc` | APC power switch |
| `fence_ilo` | HP iLO |
| `sbd` | STONITH Block Device (SAN) |
| `fence_vmware_soap` | VMs VMware |
