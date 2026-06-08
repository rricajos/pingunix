---
title: "212.2 - Servidores FTP"
tags: [lpic-2, examen-202, tema-212, teoria]
tipo: teoria
certificacion: lpic-2
examen: "202"
tema: "212"
subtema: "212.2"
---

# 212.2 - Servidores FTP

## Introducción a FTP

El protocolo FTP (File Transfer Protocol) permite la transferencia de archivos entre sistemas en red. Opera sobre TCP y utiliza dos conexiones separadas: una de **control** (puerto 21) y una de **datos** (puerto 20 o dinámico según el modo).

## Modos de conexión FTP

### Modo Activo

1. El cliente se conecta al puerto 21 del servidor (canal de control)
2. El cliente informa al servidor un puerto alto para datos (comando `PORT`)
3. El servidor inicia una conexión desde su puerto 20 hacia el puerto indicado por el cliente

**Problema**: los firewalls del cliente suelen bloquear conexiones entrantes.

### Modo Pasivo

1. El cliente se conecta al puerto 21 del servidor (canal de control)
2. El cliente solicita modo pasivo (comando `PASV`)
3. El servidor responde con un puerto alto aleatorio donde escuchará
4. El cliente inicia la conexión de datos hacia ese puerto del servidor

**Ventaja**: funciona mejor con firewalls y NAT, ya que todas las conexiones las inicia el cliente.

> **Para el examen:** El modo pasivo es preferido en entornos modernos porque el cliente inicia ambas conexiones. Es esencial configurar el rango de puertos pasivos (`pasv_min_port`/`pasv_max_port`) y abrir dichos puertos en el firewall.

## FTPS vs SFTP

| Característica | FTPS | SFTP |
|---------------|------|------|
| Protocolo base | FTP sobre TLS/SSL | Subsistema de SSH |
| Puerto por defecto | 990 (implícito) o 21 (explícito) | 22 |
| Certificados | Requiere certificado X.509 | Usa claves SSH |
| Firewall | Complejo (múltiples puertos) | Simple (solo puerto 22) |
| Implementación | vsftpd, ProFTPD | OpenSSH (sshd) |

> **Para el examen:** FTPS es FTP con cifrado TLS, mientras que SFTP es un protocolo completamente diferente que funciona sobre SSH. No son intercambiables.

## vsftpd (Very Secure FTP Daemon)

### Instalación y servicio

```bash
# Instalar en Debian/Ubuntu
apt install vsftpd

# Instalar en RHEL/CentOS
dnf install vsftpd

# Habilitar e iniciar el servicio
systemctl enable --now vsftpd
```

### Archivo de configuración principal: `/etc/vsftpd.conf`

### Directivas de acceso de usuarios

```bash
# Permitir acceso anónimo (por defecto: NO)
anonymous_enable=NO

# Permitir acceso a usuarios locales del sistema
local_enable=YES

# Permitir escritura (subida de archivos)
write_enable=YES

# Máscara de permisos para archivos subidos
local_umask=022

# Directorio raíz para usuarios anónimos
anon_root=/srv/ftp
```

### Confinamiento de usuarios (chroot)

```bash
# Confinar a todos los usuarios locales a su directorio home
chroot_local_user=YES

# Permitir escritura en el directorio chroot (vsftpd >= 3.0)
allow_writeable_chroot=YES

# Lista de usuarios exceptuados del chroot
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd.chroot_list
```

**Comportamiento del chroot:**

| `chroot_local_user` | `chroot_list_enable` | Usuarios en la lista | Efecto |
|---------------------|---------------------|---------------------|--------|
| YES | YES | Listados | Listados NO están confinados |
| YES | NO | - | TODOS confinados |
| NO | YES | Listados | Listados SÍ están confinados |
| NO | NO | - | NINGUNO confinado |

> **Para el examen:** Cuando `chroot_local_user=YES` y `chroot_list_enable=YES`, los usuarios en la lista son la **excepción** y NO quedan confinados. La lógica se invierte.

### Configuración SSL/TLS

```bash
# Habilitar SSL
ssl_enable=YES

# Certificado y clave
rsa_cert_file=/etc/ssl/certs/vsftpd.pem
rsa_private_key_file=/etc/ssl/private/vsftpd.key

# Forzar SSL para usuarios locales
force_local_logins_ssl=YES
force_local_data_ssl=YES

# Versiones TLS permitidas
ssl_tlsv1=YES
ssl_sslv2=NO
ssl_sslv3=NO
```

### Configuración del modo pasivo

```bash
# Habilitar modo pasivo
pasv_enable=YES

# Rango de puertos para conexiones pasivas
pasv_min_port=30000
pasv_max_port=31000

# IP pública para entornos con NAT
pasv_address=203.0.113.10
```

### Control de acceso por listas

```bash
# Habilitar lista de usuarios
userlist_enable=YES

# Archivo con la lista
userlist_file=/etc/vsftpd.userlist

# YES = los listados son DENEGADOS (lista negra)
# NO = solo los listados son PERMITIDOS (lista blanca)
userlist_deny=YES
```

### Archivo `/etc/ftpusers`

Contiene usuarios que **nunca** pueden acceder por FTP (lista negra del sistema). Típicamente incluye root, daemon, bin, etc. Es procesado por PAM antes que las listas de vsftpd.

## Seguridad del FTP anónimo

```bash
# Permitir subida de archivos anónimos (peligroso)
anon_upload_enable=NO

# Permitir crear directorios
anon_mkdir_write_enable=NO

# Velocidad máxima para anónimos (bytes/seg)
anon_max_rate=50000

# Número máximo de conexiones simultáneas
max_clients=50
max_per_ip=5
```

## Pure-FTPd

Pure-FTPd es un servidor FTP alternativo centrado en la seguridad.

### Características principales

- Configuración mediante opciones de línea de comandos o archivos en `/etc/pure-ftpd/conf/`
- Soporte para usuarios virtuales (sin cuentas del sistema)
- Throttling de ancho de banda integrado
- Soporte TLS nativo

### Configuración básica

```bash
# Iniciar con opciones de línea de comandos
pure-ftpd -B -C 5 -E -l puredb:/etc/pure-ftpd/pureftpd.pdb

# -B: ejecutar en segundo plano (daemon)
# -C 5: máximo 5 conexiones por IP
# -E: deshabilitar acceso anónimo
# -l: método de autenticación

# Gestión de usuarios virtuales
pure-pw useradd usuario1 -u ftpuser -d /home/ftp/usuario1
pure-pw mkdb
```

## ProFTPD

ProFTPD ofrece una configuración similar a Apache con directivas en bloques.

### Archivo de configuración: `/etc/proftpd/proftpd.conf`

```apache
ServerName "Mi servidor FTP"
ServerType standalone
DefaultServer on
Port 21

# Confinar usuarios a su home
DefaultRoot ~

# Configuración para anónimos
<Anonymous /srv/ftp>
  User ftp
  Group ftp
  UserAlias anonymous ftp
  MaxClients 10
  <Directory uploads/*>
    <Limit WRITE>
      AllowAll
    </Limit>
  </Directory>
</Anonymous>

# Configuración TLS
<IfModule mod_tls.c>
  TLSEngine on
  TLSLog /var/log/proftpd/tls.log
  TLSProtocol TLSv1.2 TLSv1.3
  TLSRSACertificateFile /etc/ssl/certs/proftpd.crt
  TLSRSACertificateKeyFile /etc/ssl/private/proftpd.key
</IfModule>
```

> **Para el examen:** ProFTPD usa la directiva `DefaultRoot ~` para confinar usuarios, equivalente a `chroot_local_user=YES` en vsftpd. Su sintaxis de configuración recuerda a la de Apache.

## Registro y monitorizacion de vsftpd

### Configuracion de logs

```bash
# Habilitar log de transferencias (formato xferlog)
xferlog_enable=YES
xferlog_file=/var/log/vsftpd.log

# Usar formato propio de vsftpd (mas detallado)
log_ftp_protocol=YES

# Log de vsftpd con formato dual (xferlog + vsftpd)
xferlog_std_format=NO
dual_log_enable=YES
vsftpd_log_file=/var/log/vsftpd.log
```

### Formato de xferlog

```
Thu Jan 15 14:30:00 2024 1 192.168.1.100 1048576 /home/user/file.tar.gz b _ o r user ftp 0 * c
```

| Campo | Significado |
|-------|-------------|
| Fecha y hora | Momento de la transferencia |
| Duracion (seg) | Tiempo que tardo la transferencia |
| IP remota | Direccion del cliente |
| Tamano (bytes) | Tamano del archivo transferido |
| Ruta | Archivo transferido |
| `a`/`b` | ASCII o Binary (modo de transferencia) |
| `o`/`i`/`d` | Outgoing (descarga) / Incoming (subida) / Delete |
| `r`/`a` | Usuario real / anonimo |

### Monitorizar conexiones activas

```bash
# Ver conexiones FTP activas
ss -tlnp | grep :21

# Conexiones de datos (modo pasivo)
ss -tlnp | grep -E ':3[0-9]{4}'

# Procesos vsftpd activos
ps aux | grep vsftpd
```

> **Para el examen**: `xferlog_std_format=YES` usa el formato estandar de xferlog compatible con otras herramientas. `log_ftp_protocol=YES` registra todos los comandos FTP enviados por el cliente (util para depuracion pero genera muchos logs).

---

## Modos de ejecucion: standalone vs xinetd

### Modo standalone (por defecto)

vsftpd se ejecuta como daemon independiente, escuchando permanentemente en el puerto 21:

```bash
# En /etc/vsftpd.conf
listen=YES          # IPv4 standalone
listen_ipv6=YES     # IPv6 standalone (mutuamente excluyente con listen)

# Gestion con systemd
systemctl start vsftpd
systemctl enable vsftpd
```

### Modo xinetd (bajo demanda)

vsftpd se inicia solo cuando llega una conexion, gestionado por xinetd:

```bash
# En /etc/vsftpd.conf
listen=NO

# En /etc/xinetd.d/vsftpd
service ftp
{
  socket_type = stream
  wait        = no
  user        = root
  server      = /usr/sbin/vsftpd
  per_source  = 5
  instances   = 200
  no_access   = 10.0.0.0/8
}
```

| Aspecto | Standalone | xinetd |
|---------|-----------|--------|
| Inicio | Siempre activo | Bajo demanda |
| Recursos | Consume memoria permanentemente | Consume solo cuando hay conexiones |
| Rendimiento | Mejor para servidores ocupados | Mejor para poco trafico |
| Control de acceso | Via configuracion de vsftpd | Via xinetd (hosts, rate limiting) |
| Gestion | systemd | xinetd |

> **Para el examen**: `listen=YES` y `listen_ipv6=YES` son mutuamente excluyentes en vsftpd. No se pueden activar ambos simultaneamente. Para soportar IPv4 e IPv6, usar `listen_ipv6=YES` que escucha en ambas pilas en la mayoria de sistemas.

---

## vsftpd con PAM

vsftpd usa PAM para autenticacion. El archivo de configuracion PAM es:

```bash
# /etc/pam.d/vsftpd
auth    required  pam_listfile.so  item=user sense=deny file=/etc/ftpusers onerr=succeed
auth    required  pam_unix.so
account required  pam_unix.so
session required  pam_unix.so
```

El flujo de autenticacion es:
1. PAM verifica que el usuario NO este en `/etc/ftpusers` (lista negra del sistema)
2. PAM verifica las credenciales contra `/etc/shadow`
3. vsftpd aplica sus propias listas (`userlist_enable`, `userlist_file`)

> **Para el examen**: `/etc/ftpusers` es procesado por PAM ANTES que las listas de vsftpd. Un usuario en `/etc/ftpusers` no puede conectarse aunque este en la lista blanca de vsftpd.

---

## Restricciones y buenas prácticas

- **Deshabilitar FTP anónimo** salvo que sea estrictamente necesario
- **Forzar FTPS** para cifrar credenciales y datos
- **Confinar usuarios** con chroot para evitar navegación del sistema de archivos
- **Limitar conexiones** por IP para prevenir ataques de fuerza bruta
- **Usar listas de control** para restringir qué usuarios pueden acceder
- **No permitir acceso FTP a root** (verificar `/etc/ftpusers`)
- **Definir rangos de puertos pasivos** y configurar el firewall acorde

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **FTPS no es lo mismo que SFTP** — FTPS es FTP sobre TLS (puertos 990/21, requiere certificados X.509). SFTP es un subsistema de SSH (puerto 22, usa claves SSH). Son protocolos completamente diferentes e incompatibles entre si.

- **Modo activo: el SERVIDOR inicia la conexion de datos. Modo pasivo: el CLIENTE inicia** — en modo activo, el servidor conecta desde su puerto 20 al puerto del cliente (problema con firewalls). En modo pasivo, el cliente conecta a un puerto alto del servidor. El examen pregunta quien inicia la conexion en cada modo.

- **`chroot_local_user=YES` + `chroot_list_enable=YES`: la lista es la EXCEPCION** — cuando ambos estan activos, los usuarios en la lista NO estan confinados (son la excepcion). La logica se invierte. Si `chroot_local_user=NO` y `chroot_list_enable=YES`, los de la lista SI estan confinados.

- **`/etc/ftpusers` es una lista negra procesada por PAM** — los usuarios en este archivo NUNCA pueden acceder por FTP. Es procesado ANTES que las listas de vsftpd (`vsftpd.userlist`). Tipicamente incluye root, daemon, bin, etc.

- **`userlist_deny=YES` convierte la lista en lista negra, `NO` en lista blanca** — con `YES` (por defecto), los usuarios listados son denegados. Con `NO`, SOLO los listados son permitidos. Confundir este booleano es un error grave de seguridad.

- **`pasv_min_port` y `pasv_max_port` deben abrirse en el firewall** — definir el rango pasivo en vsftpd no es suficiente; tambien hay que abrir esos puertos en iptables/firewalld. Sin esto, las transferencias de datos en modo pasivo fallan.

- **`allow_writeable_chroot=YES` es necesario en vsftpd >= 3.0** — desde vsftpd 3.0, si el directorio chroot es escribible, vsftpd se niega a iniciar por seguridad. Esta directiva elimina esa restriccion. Sin ella, los usuarios confinados no pueden conectarse.

- **Puerto 21 es control, puerto 20 es datos (solo modo activo)** — en modo pasivo, el puerto de datos es dinamico (definido por `pasv_min_port`/`pasv_max_port`). El puerto 20 solo se usa como origen en modo activo.

- **ProFTPD usa `DefaultRoot ~` para chroot, similar a `chroot_local_user` de vsftpd** — la sintaxis de ProFTPD recuerda a Apache con bloques `<Directory>`, `<Limit>`, etc. El examen puede presentar ambos servidores FTP.

- **`ssl_enable=YES` sin `force_local_logins_ssl=YES` permite conexiones sin cifrar** — habilitar SSL no significa forzarlo. Sin `force_local_logins_ssl=YES`, los usuarios pueden conectarse en texto plano. Para seguridad real, ambas directivas son necesarias.
