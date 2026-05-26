---
title: "361.2 - Clusters de Balanceo de Carga"
tipo: teoria
certificacion: lpic-3
especialidad: 306 - Alta Disponibilidad y Clusters de Almacenamiento
tema: "361 - Gestión de Clusters HA"
subtema: "361.2"
peso: 4
tags:
  - lpic-3
  - tema-361
  - balanceo-de-carga
  - lvs
  - ipvs
  - haproxy
  - keepalived
  - nginx
objetivos:
  - Comprender LVS y el módulo IPVS del kernel
  - Configurar balanceo con ipvsadm
  - Conocer los modos NAT, DR y TUN
  - Configurar keepalived y HAProxy
  - Usar nginx como balanceador de carga
---

# 361.2 - Clusters de Balanceo de Carga

## Introducción al Balanceo de Carga

El **balanceo de carga** distribuye el tráfico de red entre múltiples servidores para mejorar el rendimiento, la disponibilidad y la escalabilidad. Existen balanceadores en capa 4 (transporte/TCP) y capa 7 (aplicación/HTTP).

## LVS - Linux Virtual Server

**LVS** es una solución de balanceo de carga integrada en el kernel de Linux a través del módulo **IPVS** (IP Virtual Server). Opera en capa 4 (TCP/UDP).

### Arquitectura LVS

```
                         ┌──────────────┐
    Clientes ──────────> │  Director    │ (VIP: 10.0.0.100)
                         │  (LVS/IPVS) │
                         └──────┬───────┘
                     ┌──────────┼──────────┐
                     ▼          ▼          ▼
              ┌──────────┐ ┌──────────┐ ┌──────────┐
              │ Real Srv │ │ Real Srv │ │ Real Srv │
              │  (RS1)   │ │  (RS2)   │ │  (RS3)   │
              └──────────┘ └──────────┘ └──────────┘
```

- **Director:** Nodo que recibe las conexiones y las distribuye
- **Real Server (RS):** Servidores que procesan las peticiones
- **VIP (Virtual IP):** Dirección IP pública del servicio
- **RIP (Real IP):** Dirección IP real de cada servidor backend

### Módulo IPVS del Kernel

```bash
# Cargar el módulo
modprobe ip_vs

# Verificar que está cargado
lsmod | grep ip_vs

# Módulos auxiliares por protocolo
modprobe ip_vs_rr    # Round Robin
modprobe ip_vs_wrr   # Weighted Round Robin
modprobe ip_vs_lc    # Least Connection
modprobe ip_vs_wlc   # Weighted Least Connection
```

## Modos de Reenvío LVS

### NAT (Network Address Translation)

```
Cliente → Director (VIP) → Real Server (RIP)
Cliente ← Director (VIP) ← Real Server (RIP)
```

- Todo el tráfico (ida y vuelta) pasa por el Director
- Los Real Servers usan el Director como gateway predeterminado
- El Director puede ser cuello de botella
- Los RS pueden estar en redes privadas diferentes

### DR (Direct Routing) - **El más usado**

```
Cliente → Director (VIP) → Real Server (RIP + VIP en loopback)
Cliente ← ← ← ← ← ← ← ← Real Server (responde directamente)
```

- Solo el tráfico de entrada pasa por el Director
- Las respuestas van directamente del RS al cliente
- Los RS deben tener la VIP configurada en loopback (sin ARP)
- Mayor rendimiento, el Director no es cuello de botella
- Los RS deben estar en la misma red que el Director

### TUN (IP Tunneling)

```
Cliente → Director (VIP) → [Túnel IP-in-IP] → Real Server
Cliente ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← Real Server
```

- Similar a DR pero los RS pueden estar en redes diferentes
- Usa encapsulación IP-in-IP
- Los RS deben soportar túneles IP

> **Para el examen:** DR es el modo más eficiente y más usado en producción. En DR, los Real Servers necesitan la VIP en loopback con ARP suprimido.

## ipvsadm - Administración de IPVS

```bash
# Crear un servicio virtual (TCP, puerto 80, Round Robin)
ipvsadm -A -t 10.0.0.100:80 -s rr

# Añadir Real Servers en modo DR
ipvsadm -a -t 10.0.0.100:80 -r 192.168.1.10:80 -g
ipvsadm -a -t 10.0.0.100:80 -r 192.168.1.11:80 -g
ipvsadm -a -t 10.0.0.100:80 -r 192.168.1.12:80 -g -w 2

# Ver la tabla de servicios
ipvsadm -Ln

# Modos de reenvío
# -m = NAT (masquerading)
# -g = DR (gatewaying) - predeterminado
# -i = TUN (tunneling)

# Eliminar un Real Server
ipvsadm -d -t 10.0.0.100:80 -r 192.168.1.10:80

# Eliminar un servicio virtual
ipvsadm -D -t 10.0.0.100:80

# Limpiar toda la tabla
ipvsadm -C

# Guardar/restaurar configuración
ipvsadm-save > /etc/sysconfig/ipvsadm
ipvsadm-restore < /etc/sysconfig/ipvsadm
```

## Algoritmos de Planificación (Scheduling)

| Algoritmo | Sigla | Descripción |
|-----------|-------|------------|
| **Round Robin** | `rr` | Distribución cíclica equitativa |
| **Weighted Round Robin** | `wrr` | Round Robin con pesos por servidor |
| **Least Connection** | `lc` | Envía al servidor con menos conexiones activas |
| **Weighted Least Connection** | `wlc` | LC con pesos (predeterminado en IPVS) |
| **Source Hashing** | `sh` | El mismo cliente siempre va al mismo servidor |
| **Destination Hashing** | `dh` | El mismo destino siempre va al mismo servidor |
| **Shortest Expected Delay** | `sed` | Menor retardo esperado |
| **Never Queue** | `nq` | Envía a servidor sin conexiones, o usa SED |

> **Para el examen:** Conoce al menos rr, wrr, lc, wlc, sh y dh. `wlc` es el predeterminado.

## Keepalived

**Keepalived** proporciona dos funcionalidades clave:
1. **VRRP:** Gestión de IP virtual flotante entre nodos
2. **Health checking:** Monitorización de Real Servers para LVS

### Configuración VRRP

```
# /etc/keepalived/keepalived.conf

vrrp_instance VI_1 {
    state MASTER               # MASTER o BACKUP
    interface eth0             # Interfaz de red
    virtual_router_id 51       # ID único (0-255)
    priority 100               # Prioridad (mayor = preferido)
    advert_int 1               # Intervalo de anuncios (segundos)

    authentication {
        auth_type PASS
        auth_pass secreto123
    }

    virtual_ipaddress {
        10.0.0.100/24          # VIP
    }

    track_interface {
        eth0
        eth1
    }

    track_script {
        chk_haproxy
    }
}

vrrp_script chk_haproxy {
    script "/usr/bin/killall -0 haproxy"
    interval 2
    weight -20
    fall 3
    rise 2
}
```

### Configuración LVS con Keepalived

```
virtual_server 10.0.0.100 80 {
    delay_loop 6
    lb_algo wrr                # Algoritmo de balanceo
    lb_kind DR                 # Modo: NAT, DR, TUN
    persistence_timeout 300    # Persistencia de sesión
    protocol TCP

    real_server 192.168.1.10 80 {
        weight 1
        HTTP_GET {
            url {
                path /health
                status_code 200
            }
            connect_timeout 3
            retry 3
            delay_before_retry 2
        }
    }

    real_server 192.168.1.11 80 {
        weight 2
        HTTP_GET {
            url {
                path /health
                status_code 200
            }
            connect_timeout 3
            retry 3
            delay_before_retry 2
        }
    }
}
```

> **Para el examen:** `virtual_router_id` debe ser único en la red. El nodo con mayor `priority` se convierte en MASTER. VRRP usa multicast 224.0.0.18.

## HAProxy

**HAProxy** es un balanceador de carga de alto rendimiento que opera en capa 4 (TCP) y capa 7 (HTTP).

### Estructura de Configuración

```
# /etc/haproxy/haproxy.cfg

global
    log /dev/log local0
    maxconn 4096
    user haproxy
    group haproxy
    daemon
    stats socket /var/run/haproxy.sock mode 660

defaults
    log     global
    mode    http                  # http o tcp
    option  httplog
    option  dontlognull
    timeout connect 5000ms
    timeout client  50000ms
    timeout server  50000ms
    retries 3

frontend web_front
    bind *:80
    bind *:443 ssl crt /etc/haproxy/certs/
    default_backend web_servers

    # ACLs
    acl is_api path_beg /api
    acl is_static path_end .css .js .png .jpg
    use_backend api_servers if is_api
    use_backend static_servers if is_static

backend web_servers
    balance roundrobin
    option httpchk GET /health
    server web1 192.168.1.10:8080 check weight 1
    server web2 192.168.1.11:8080 check weight 2
    server web3 192.168.1.12:8080 check backup

backend api_servers
    balance leastconn
    option httpchk GET /api/health
    server api1 192.168.1.20:3000 check
    server api2 192.168.1.21:3000 check

listen stats
    bind *:8404
    stats enable
    stats uri /stats
    stats refresh 10s
    stats admin if LOCALHOST
```

### Conceptos Clave de HAProxy

| Sección | Función |
|---------|---------|
| `global` | Configuración global del proceso |
| `defaults` | Valores predeterminados para frontends y backends |
| `frontend` | Define cómo se reciben las conexiones |
| `backend` | Define los servidores y cómo distribuir tráfico |
| `listen` | Combina frontend y backend en una sección |

### Health Checks en HAProxy

```
# Check HTTP
option httpchk GET /health HTTP/1.1\r\nHost:\ ejemplo.com
http-check expect status 200

# Check TCP (por defecto)
server web1 192.168.1.10:80 check inter 5s fall 3 rise 2

# Parámetros de check
# inter: intervalo entre checks
# fall: checks fallidos para marcar como down
# rise: checks exitosos para marcar como up
```

> **Para el examen:** Conoce la diferencia entre `mode http` (capa 7, puede inspeccionar HTTP) y `mode tcp` (capa 4, solo reenvía TCP). Las ACLs solo funcionan en modo HTTP.

## Nginx como Balanceador de Carga

```nginx
# /etc/nginx/nginx.conf

upstream backend_pool {
    # Algoritmos: round-robin (default), least_conn, ip_hash, hash
    least_conn;

    server 192.168.1.10:8080 weight=3;
    server 192.168.1.11:8080;
    server 192.168.1.12:8080 backup;
    server 192.168.1.13:8080 down;
}

server {
    listen 80;
    server_name ejemplo.com;

    location / {
        proxy_pass http://backend_pool;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout http_500;
    }
}
```

### Comparativa de Balanceadores

| Característica | LVS/IPVS | HAProxy | Nginx |
|---------------|-----------|---------|-------|
| Capa | 4 (TCP/UDP) | 4 y 7 | 7 (y 4 con stream) |
| Rendimiento | Muy alto (kernel) | Alto | Alto |
| HTTP awareness | No | Sí | Sí |
| SSL termination | No | Sí | Sí |
| ACLs HTTP | No | Sí | Sí (location) |
| Integración kernel | Sí (IPVS) | No | No |
| Healthchecks | Vía keepalived | Integrado | Limitado (Plus) |
