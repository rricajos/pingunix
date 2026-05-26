---
title: "361.2 - Comandos Clave: Clusters de Balanceo de Carga"
tipo: comandos
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.2"
peso: 4
tags:
  - lpic-3
  - tema-361
  - comandos
  - balanceo-de-carga
---

# 361.2 - Comandos Clave: Clusters de Balanceo de Carga

## ipvsadm - Gestión de IPVS

| Comando | Descripción |
|---------|------------|
| `ipvsadm -A -t VIP:puerto -s algoritmo` | Crear servicio virtual TCP |
| `ipvsadm -A -u VIP:puerto -s algoritmo` | Crear servicio virtual UDP |
| `ipvsadm -a -t VIP:puerto -r RIP:puerto -g` | Añadir RS en modo DR |
| `ipvsadm -a -t VIP:puerto -r RIP:puerto -m` | Añadir RS en modo NAT |
| `ipvsadm -a -t VIP:puerto -r RIP:puerto -i` | Añadir RS en modo TUN |
| `ipvsadm -a -t VIP:puerto -r RIP:puerto -w peso` | Añadir RS con peso |
| `ipvsadm -d -t VIP:puerto -r RIP:puerto` | Eliminar un RS |
| `ipvsadm -D -t VIP:puerto` | Eliminar un servicio virtual |
| `ipvsadm -Ln` | Listar tabla IPVS (numérico) |
| `ipvsadm -Ln --stats` | Mostrar estadísticas |
| `ipvsadm -Ln --rate` | Mostrar tasas de tráfico |
| `ipvsadm -C` | Limpiar toda la tabla |
| `ipvsadm-save` | Exportar configuración |
| `ipvsadm-restore` | Importar configuración |

## Algoritmos de Planificación

| Sigla | Nombre | Uso |
|-------|--------|-----|
| `rr` | Round Robin | Distribución equitativa simple |
| `wrr` | Weighted Round Robin | Servidores con diferente capacidad |
| `lc` | Least Connection | Menos conexiones activas |
| `wlc` | Weighted Least Connection | LC con pesos (predeterminado) |
| `sh` | Source Hashing | Persistencia por IP origen |
| `dh` | Destination Hashing | Persistencia por IP destino |

## keepalived

| Comando / Directiva | Descripción |
|---------------------|------------|
| `systemctl start keepalived` | Iniciar keepalived |
| `systemctl status keepalived` | Estado del servicio |
| `/etc/keepalived/keepalived.conf` | Archivo de configuración principal |
| `vrrp_instance` | Bloque de configuración VRRP |
| `virtual_router_id` | ID único del router virtual (0-255) |
| `priority` | Prioridad del nodo (1-254) |
| `state MASTER/BACKUP` | Estado inicial del nodo |
| `virtual_ipaddress` | IPs virtuales gestionadas |
| `track_interface` | Interfaces a monitorizar |
| `track_script` | Scripts de monitorización |
| `virtual_server` | Bloque de servidor virtual LVS |

## HAProxy

| Comando / Archivo | Descripción |
|-------------------|------------|
| `haproxy -c -f /etc/haproxy/haproxy.cfg` | Validar configuración |
| `haproxy -f /etc/haproxy/haproxy.cfg -sf $(pidof haproxy)` | Recarga sin interrupción |
| `systemctl reload haproxy` | Recargar configuración |
| `/etc/haproxy/haproxy.cfg` | Archivo de configuración principal |
| `frontend` | Sección: recepción de conexiones |
| `backend` | Sección: servidores destino |
| `listen` | Sección: frontend + backend combinados |
| `balance roundrobin/leastconn/source` | Algoritmo de balanceo |
| `option httpchk` | Habilitar health check HTTP |
| `server nombre IP:puerto check` | Definir servidor con health check |
| `stats enable` | Habilitar página de estadísticas |
| `acl nombre criterio` | Definir una ACL |
| `use_backend nombre if acl` | Enrutar según ACL |

## Nginx como Balanceador

| Directiva | Descripción |
|-----------|------------|
| `upstream nombre { ... }` | Definir grupo de servidores backend |
| `least_conn` | Algoritmo menor conexión |
| `ip_hash` | Persistencia por IP |
| `server IP:puerto weight=N` | Servidor con peso |
| `server IP:puerto backup` | Servidor de respaldo |
| `server IP:puerto down` | Servidor marcado fuera de servicio |
| `proxy_pass http://upstream` | Reenviar tráfico al upstream |
| `proxy_next_upstream` | Reintentar en otro servidor si falla |
| `nginx -t` | Validar configuración |
| `nginx -s reload` | Recargar configuración |

## Archivos de Configuración

| Archivo | Descripción |
|---------|------------|
| `/etc/keepalived/keepalived.conf` | Configuración de keepalived |
| `/etc/haproxy/haproxy.cfg` | Configuración de HAProxy |
| `/etc/nginx/nginx.conf` | Configuración principal de Nginx |
| `/proc/net/ip_vs` | Tabla IPVS del kernel |
| `/proc/net/ip_vs_conn` | Conexiones IPVS activas |
