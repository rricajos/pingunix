---
title: "109.4 Configurar DNS en el lado cliente - Teoria"
tags:
  - lpic-1
  - examen-102
  - tema-109
  - teoria
tipo: teoria
certificacion: lpic-1
examen: "102"
tema: "109"
subtema: "109.4"
---

# 109.4 Configurar DNS en el lado cliente - Teoria

## Fundamentos de DNS

### ¿Que es DNS?
DNS (Domain Name System) traduce nombres de dominio legibles (www.ejemplo.com) a direcciones IP (93.184.216.34). Funciona como una "guia telefonica" de Internet.

### Tipos de registros DNS
| Tipo | Descripcion | Ejemplo |
|------|-------------|---------|
| **A** | Direccion IPv4 | www.ejemplo.com -> 93.184.216.34 |
| **AAAA** | Direccion IPv6 | www.ejemplo.com -> 2606:2800:220:1:248:... |
| **MX** | Servidor de correo | ejemplo.com -> mail.ejemplo.com (prioridad 10) |
| **NS** | Servidor de nombres | ejemplo.com -> ns1.ejemplo.com |
| **CNAME** | Alias (nombre canonico) | www.ejemplo.com -> ejemplo.com |
| **PTR** | Resolucion inversa (IP->nombre) | 34.216.184.93 -> www.ejemplo.com |
| **SOA** | Inicio de autoridad | Informacion de la zona |
| **TXT** | Texto libre | SPF, DKIM, verificacion |

---

## Archivos de configuracion del cliente DNS

### `/etc/resolv.conf`
Archivo principal de configuracion DNS del cliente.

```
# Servidores DNS (maximo 3)
nameserver 192.168.1.1
nameserver 8.8.8.8
nameserver 8.8.4.4

# Dominio local
domain ejemplo.com

# Lista de dominios de busqueda
search ejemplo.com red-interna.ejemplo.com

# Opciones
options timeout:2 attempts:3 rotate
```

| Directiva | Descripcion |
|-----------|-------------|
| `nameserver` | IP del servidor DNS (maximo 3) |
| `domain` | Dominio local (se agrega automaticamente a nombres sin punto) |
| `search` | Lista de dominios de busqueda (alternativa a domain) |
| `options` | timeout, attempts, rotate, etc. |

> **`domain` vs `search`**: Son mutuamente excluyentes. `search` es mas flexible ya que permite multiples dominios. Si se ponen ambos, se usa el ultimo definido.

Ejemplo de funcionamiento de `search`:
```
search ejemplo.com test.com
```
Si haces `ping servidor`, el sistema buscara:
1. `servidor.ejemplo.com`
2. `servidor.test.com`
3. `servidor` (sin dominio)

### `/etc/hosts`
Resolucion estatica local. Tiene prioridad sobre DNS (si asi lo define nsswitch.conf).

```
127.0.0.1       localhost
127.0.1.1       mi-equipo.ejemplo.com   mi-equipo
192.168.1.10    servidor-web    web
192.168.1.20    servidor-db     db
::1             localhost ip6-localhost
```

Formato: `IP   FQDN   aliases`

### `/etc/nsswitch.conf`
Define el orden de resolucion de nombres.

```
hosts:    files dns myhostname
```

- **files**: Consulta `/etc/hosts` primero
- **dns**: Luego consulta servidores DNS (`/etc/resolv.conf`)
- **myhostname**: Resuelve el hostname local como ultimo recurso

### `/etc/hostname`
Contiene el nombre del host (una sola linea):
```
mi-servidor
```

---

## Comandos de consulta DNS

### `dig` (Domain Information Groper)

Herramienta mas completa y recomendada para consultas DNS.

```bash
dig ejemplo.com                     # Consulta A por defecto
dig ejemplo.com A                   # Registro A (IPv4)
dig ejemplo.com AAAA                # Registro AAAA (IPv6)
dig ejemplo.com MX                  # Registros MX (correo)
dig ejemplo.com NS                  # Servidores de nombres
dig ejemplo.com CNAME               # Aliases
dig ejemplo.com SOA                 # Inicio de autoridad
dig ejemplo.com ANY                 # Todos los registros
dig -x 93.184.216.34                # Resolucion inversa (PTR)
dig ejemplo.com +short              # Solo la respuesta
dig @8.8.8.8 ejemplo.com           # Consultar un servidor DNS especifico
dig +trace ejemplo.com              # Trazar la resolucion completa
dig +noall +answer ejemplo.com     # Solo la seccion ANSWER
```

### Interpretar la salida de `dig`
```
; <<>> DiG 9.18.1 <<>> ejemplo.com
;; QUESTION SECTION:
;ejemplo.com.                    IN      A

;; ANSWER SECTION:
ejemplo.com.             300     IN      A       93.184.216.34

;; AUTHORITY SECTION:
ejemplo.com.             86400   IN      NS      ns1.ejemplo.com.

;; Query time: 23 msec
;; SERVER: 192.168.1.1#53(192.168.1.1)
;; MSG SIZE  rcvd: 128
```

Secciones:
- **QUESTION**: Lo que se pregunto
- **ANSWER**: La respuesta (el registro solicitado)
- **AUTHORITY**: Servidores autoritativos para el dominio
- **ADDITIONAL**: Informacion adicional
- **Query time**: Tiempo de respuesta
- **SERVER**: Servidor DNS que respondio

### `host`

Herramienta simple para consultas DNS.

```bash
host ejemplo.com                     # Consulta basica
host -t MX ejemplo.com              # Tipo de registro especifico
host -t NS ejemplo.com              # Servidores de nombres
host -t AAAA ejemplo.com            # Registros IPv6
host 93.184.216.34                   # Resolucion inversa
host ejemplo.com 8.8.8.8            # Usar servidor DNS especifico
```

### `nslookup`

Herramienta clasica para consultas DNS (interactiva o no interactiva).

```bash
# Modo no interactivo
nslookup ejemplo.com                 # Consulta basica
nslookup ejemplo.com 8.8.8.8        # Con servidor DNS especifico
nslookup -type=MX ejemplo.com       # Tipo de registro

# Modo interactivo
nslookup
> server 8.8.8.8
> set type=MX
> ejemplo.com
> exit
```

### `getent`

Consulta las bases de datos de NSS (Name Service Switch), es decir, usa el mismo orden definido en `/etc/nsswitch.conf`.

```bash
getent hosts ejemplo.com             # Resolver nombre (usando nsswitch.conf)
getent hosts 192.168.1.10            # Resolver IP
getent hosts                         # Listar todas las entradas de hosts
getent ahosts ejemplo.com           # Todas las direcciones (IPv4 e IPv6)
```

> **Diferencia clave**: `dig`, `host` y `nslookup` consultan **directamente** al servidor DNS. `getent` usa el mecanismo completo de nsswitch (primero `/etc/hosts`, luego DNS, etc.).

---

## systemd-resolved

### Descripcion
- Servicio de resolucion DNS integrado en systemd
- Actua como cache DNS local y stub resolver
- Escucha en `127.0.0.53` (stub resolver)
- Puede gestionar automaticamente `/etc/resolv.conf`

### Configuracion: `/etc/systemd/resolved.conf`
```ini
[Resolve]
DNS=8.8.8.8 8.8.4.4
FallbackDNS=1.1.1.1
Domains=ejemplo.com
DNSSEC=allow-downgrade
DNSOverTLS=opportunistic
Cache=yes
```

### `resolvectl` (antes `systemd-resolve`)
```bash
resolvectl status                    # Estado completo
resolvectl query ejemplo.com        # Resolver nombre
resolvectl statistics                # Estadisticas de cache
resolvectl flush-caches              # Limpiar cache DNS
resolvectl dns                       # Ver servidores DNS configurados
resolvectl dns eth0 8.8.8.8         # Establecer DNS para interfaz
```

### Interaccion con /etc/resolv.conf
Cuando systemd-resolved esta activo, `/etc/resolv.conf` tipicamente contiene:
```
nameserver 127.0.0.53
options edns0 trust-ad
search ejemplo.com
```

Esto redirige todas las consultas DNS al stub resolver local de systemd-resolved.

---

## NetworkManager y DNS

### Como NetworkManager gestiona DNS
En distribuciones modernas, **NetworkManager** gestiona automaticamente `/etc/resolv.conf`:

- Al conectarse a una red (DHCP o manual), NetworkManager recibe los servidores DNS
- Actualiza `/etc/resolv.conf` automaticamente
- Puede trabajar junto a systemd-resolved o gestionarlo directamente

### Modos de gestion de DNS
NetworkManager puede configurarse con diferentes backends en `/etc/NetworkManager/NetworkManager.conf`:

```ini
[main]
dns=default          # NM escribe directamente en /etc/resolv.conf
dns=systemd-resolved # NM envia la config a systemd-resolved
dns=dnsmasq          # NM usa dnsmasq como cache local
dns=none             # NM no toca /etc/resolv.conf
```

### `nmcli` para consultar y cambiar DNS
```bash
# Ver la configuracion DNS actual
nmcli dev show | grep DNS

# Ver detalles de una conexion
nmcli con show "Mi Conexion" | grep dns

# Establecer DNS manualmente para una conexion
nmcli con mod "Mi Conexion" ipv4.dns "8.8.8.8 8.8.4.4"
nmcli con mod "Mi Conexion" ipv4.ignore-auto-dns yes

# Aplicar los cambios
nmcli con up "Mi Conexion"
```

> **Para el examen**: NetworkManager puede sobreescribir `/etc/resolv.conf` cada vez que se activa una conexion. Si editas manualmente `/etc/resolv.conf` y los cambios desaparecen, es probable que NetworkManager los este reescribiendo.

---

## El problema de /etc/resolv.conf en sistemas modernos

### Multiples gestores de DNS
En sistemas con systemd-resolved + NetworkManager, `/etc/resolv.conf` puede ser gestionado por varios servicios simultaneamente. Esto genera confusion:

```bash
# Verificar si /etc/resolv.conf es un symlink
ls -la /etc/resolv.conf
```

Posibles estados:

| Tipo | Apunta a | Significado |
|------|----------|-------------|
| Symlink | `/run/systemd/resolve/stub-resolv.conf` | systemd-resolved gestiona DNS (stub 127.0.0.53) |
| Symlink | `/run/systemd/resolve/resolv.conf` | systemd-resolved pero con DNS upstream directo |
| Symlink | `/run/NetworkManager/resolv.conf` | NetworkManager gestiona DNS |
| Archivo regular | — | Gestion manual (ningun servicio lo toca) |

### `/run/systemd/resolve/` - Ficheros de resolved
```bash
# Stub resolver (el mas comun, usa 127.0.0.53)
/run/systemd/resolve/stub-resolv.conf

# DNS upstream reales (sin pasar por el stub)
/run/systemd/resolve/resolv.conf
```

> **Para el examen**: Si necesitas saber los DNS reales que usa el sistema (no el stub 127.0.0.53), consulta `/run/systemd/resolve/resolv.conf` o usa `resolvectl status`.

---

## Flujo completo de resolucion DNS

### Orden de resolucion paso a paso
Cuando un programa necesita resolver un nombre:

```
1. Aplicacion llama a getaddrinfo() o gethostbyname()
         ↓
2. glibc consulta /etc/nsswitch.conf
         ↓
3. Si "files" esta primero → lee /etc/hosts
   ¿Encontrado? → Devuelve la IP
         ↓ (no encontrado)
4. Si "dns" es siguiente → lee /etc/resolv.conf
         ↓
5. Si resolv.conf apunta a 127.0.0.53 → systemd-resolved
   Si apunta a IP real → consulta DNS directamente
         ↓
6. systemd-resolved consulta su cache
   ¿En cache? → Devuelve resultado
         ↓ (cache miss)
7. systemd-resolved consulta el DNS upstream
         ↓
8. Resultado se devuelve a la aplicacion
```

### Depuracion de problemas DNS
```bash
# 1. Verificar que DNS esta configurado
cat /etc/resolv.conf

# 2. Probar resolucion con nsswitch completo
getent hosts ejemplo.com

# 3. Probar DNS directo (sin nsswitch)
dig ejemplo.com +short

# 4. Probar con servidor DNS especifico
dig @8.8.8.8 ejemplo.com +short

# 5. Verificar estado de systemd-resolved
resolvectl status

# 6. Verificar cache de resolved
resolvectl statistics

# 7. Limpiar cache si hay problemas
resolvectl flush-caches

# 8. Verificar que /etc/hosts no tiene entradas incorrectas
getent hosts ejemplo.com
grep ejemplo.com /etc/hosts
```

> **Para el examen**: Si `getent hosts dominio` devuelve una IP pero `dig dominio` devuelve otra, probablemente haya una entrada en `/etc/hosts` que tiene prioridad sobre DNS (porque `files` esta antes que `dns` en nsswitch.conf).

---

## Puntos clave para el examen

1. **`/etc/resolv.conf`**: Maximo 3 `nameserver`; `domain` y `search` son mutuamente excluyentes
2. **`/etc/nsswitch.conf`**: `hosts: files dns` define el orden (primero /etc/hosts, luego DNS)
3. **`dig`** es la herramienta mas completa; `+short` para respuesta breve; `@servidor` para consultar DNS especifico
4. **`host`** es la herramienta simple; **`nslookup`** es la clasica
5. **`getent hosts`** usa el mecanismo completo de nsswitch (no solo DNS)
6. **dig -x IP** realiza resolucion inversa (PTR)
7. **Tipos de registro**: A (IPv4), AAAA (IPv6), MX (correo), NS (DNS), CNAME (alias), PTR (inverso)
8. **systemd-resolved** usa `127.0.0.53` como stub resolver local
9. **`resolvectl`** es la herramienta CLI de systemd-resolved
10. DNS usa el **puerto 53** (TCP y UDP)

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **`dig`, `host` y `nslookup` consultan DNS directamente; `getent` usa nsswitch** — `dig`, `host` y `nslookup` van directamente al servidor DNS configurado, ignorando `/etc/hosts`. `getent hosts` usa el mecanismo completo de `/etc/nsswitch.conf` (primero archivos, luego DNS). El examen evalua esta diferencia critica
- **`domain` y `search` en resolv.conf son mutuamente excluyentes** — Si ambos estan presentes, se usa el ULTIMO definido. `search` es mas flexible porque permite multiples dominios de busqueda. El examen puede poner ambos y preguntar cual se aplica
- **Maximo 3 `nameserver` en `/etc/resolv.conf`** — Aunque escribas mas, solo se usan los primeros 3. El examen puede preguntar cuantos servidores DNS se pueden configurar
- **Registro A (IPv4) vs AAAA (IPv6)** — Un registro A resuelve un nombre a una direccion IPv4; AAAA resuelve a IPv6. El examen puede preguntar que tipo de registro consultar para obtener la direccion IPv6 de un host
- **`dig -x IP` realiza resolucion INVERSA (PTR)** — La opcion `-x` busca registros PTR (de IP a nombre). Sin `-x`, `dig` busca registros A por defecto. No confundir la resolucion directa con la inversa
- **CNAME es un ALIAS, no una IP** — Un registro CNAME apunta a OTRO nombre de dominio, no a una direccion IP. `www.ejemplo.com CNAME ejemplo.com` significa que www es un alias de ejemplo.com. La IP se resuelve siguiendo el CNAME hasta un registro A
- **Registro MX tiene PRIORIDAD numerica** — Los registros MX incluyen un valor de prioridad: menor numero = mayor prioridad. `MX 10 mail1.ejemplo.com` tiene mas prioridad que `MX 20 mail2.ejemplo.com`. El examen puede mostrar registros MX y preguntar cual se usa primero
- **`systemd-resolved` escucha en 127.0.0.53, no en 127.0.0.1** — Cuando systemd-resolved esta activo, `/etc/resolv.conf` apunta a `nameserver 127.0.0.53` (stub resolver). No confundir con el loopback clasico 127.0.0.1
- **`dig +short` muestra SOLO la respuesta** — Sin `+short`, `dig` muestra toda la informacion (secciones QUESTION, ANSWER, AUTHORITY, ADDITIONAL). `+short` es util para scripting pero el examen puede pedir interpretar la salida completa
- **`/etc/nsswitch.conf` con `hosts: files dns`** — El orden importa: `files` significa consultar `/etc/hosts` PRIMERO, luego DNS. Si un nombre esta en `/etc/hosts`, DNS nunca se consulta. Cambiar el orden cambia el comportamiento completamente
