---
title: "304.2 - Clientes CIFS Linux"
description: "Montaje y acceso a recursos compartidos CIFS desde Linux"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 304 - Configuración de Clientes Samba"
subtema: "304.2"
peso: 3
tags:
  - lpic-3
  - tema-304
  - samba
  - cifs
  - mount
  - smbclient
  - autofs
---

# 304.2 Clientes CIFS Linux

## Introducción

Los clientes Linux pueden acceder a recursos compartidos SMB/CIFS de servidores Windows o Samba usando varias herramientas: `mount.cifs` para montaje en el sistema de archivos, `smbclient` para acceso interactivo o por script, y `autofs` para montaje automático bajo demanda. La selección del método de autenticación (NTLM, Kerberos) es crucial en entornos empresariales.

## Montaje con mount.cifs

### Montaje básico

```bash
# Montaje manual
mount -t cifs //servidor/share /mnt/share -o username=usuario,password=contraseña

# Equivalente
mount.cifs //servidor/share /mnt/share -o username=usuario,password=contraseña
```

### Opciones comunes de montaje

| Opción              | Descripción                                            |
|---------------------|--------------------------------------------------------|
| `username=`         | Nombre de usuario para autenticación                   |
| `password=`         | Contraseña (inseguro en línea de comandos)             |
| `domain=`           | Dominio o workgroup                                    |
| `credentials=`      | Archivo con credenciales                               |
| `uid=`              | UID propietario de los archivos montados               |
| `gid=`              | GID propietario de los archivos montados               |
| `file_mode=`        | Permisos para archivos (ej: 0644)                      |
| `dir_mode=`         | Permisos para directorios (ej: 0755)                   |
| `sec=`              | Método de seguridad/autenticación                      |
| `vers=`             | Versión del protocolo SMB (2.0, 2.1, 3.0, 3.1.1)      |
| `multiuser`         | Montaje multiusuario                                   |
| `soft`              | Devolver error si el servidor no responde              |
| `hard`              | Reintentar indefinidamente (por defecto)               |

> **Para el examen:** `mount.cifs` y `mount -t cifs` son equivalentes. Las opciones se pasan después de `-o`. Siempre usar `credentials=` en lugar de `password=` en línea de comandos para mayor seguridad.

### Archivo de credenciales

```bash
# /etc/samba/credenciales (permisos 0600)
username=usuario
password=contraseña_secreta
domain=EMPRESA
```

```bash
# Montaje con archivo de credenciales
mount -t cifs //servidor/share /mnt/share -o credentials=/etc/samba/credenciales

# Permisos del archivo de credenciales
chmod 0600 /etc/samba/credenciales
```

> **Para el examen:** El archivo de credenciales debe tener permisos 0600 para proteger la contraseña. Se referencia con `credentials=` en las opciones de montaje.

## Opciones de seguridad (sec=)

La opción `sec=` define el método de autenticación:

| Valor        | Descripción                                              |
|--------------|----------------------------------------------------------|
| `krb5`       | Autenticación Kerberos                                   |
| `krb5i`      | Kerberos con verificación de integridad                  |
| `krb5p`      | Kerberos con cifrado de datos (privacidad)               |
| `ntlmv2`     | NTLMv2 (por defecto en muchos sistemas)                  |
| `ntlmssp`    | NTLM Security Support Provider                           |
| `ntlm`       | NTLM v1 (inseguro, obsoleto)                             |
| `none`       | Sin autenticación (acceso anónimo)                       |

```bash
# Montaje con Kerberos
mount -t cifs //servidor/share /mnt/share -o sec=krb5,cruid=$(id -u)

# Montaje con NTLMv2
mount -t cifs //servidor/share /mnt/share \
  -o sec=ntlmv2,credentials=/etc/samba/credenciales
```

> **Para el examen:** `sec=krb5` usa Kerberos simple, `krb5i` añade integridad, `krb5p` añade cifrado. Para Kerberos el usuario necesita un ticket válido (`kinit`). `ntlmssp` es la versión negociada de NTLM.

## Entradas en /etc/fstab

### Montaje estático

```
# /etc/fstab
//servidor/share  /mnt/share  cifs  credentials=/etc/samba/creds,uid=1000,gid=1000  0  0

# Con Kerberos
//servidor/share  /mnt/share  cifs  sec=krb5,multiuser  0  0

# Solo montar si la red está disponible
//servidor/share  /mnt/share  cifs  credentials=/etc/samba/creds,_netdev,x-systemd.automount  0  0
```

| Opción fstab                | Descripción                                      |
|-----------------------------|--------------------------------------------------|
| `_netdev`                   | Esperar a que la red esté disponible             |
| `x-systemd.automount`      | Montar automáticamente al acceder (systemd)      |
| `x-systemd.idle-timeout=`  | Desmontar tras período de inactividad            |
| `noauto`                    | No montar automáticamente al inicio              |

> **Para el examen:** `_netdev` es crucial en fstab para montajes CIFS, ya que indica al sistema que espere a que la red esté disponible antes de intentar montar. `x-systemd.automount` proporciona montaje bajo demanda.

## Montaje multiusuario

El montaje multiusuario permite que cada usuario acceda al share con sus propias credenciales:

```bash
# Montaje como root con multiuser
mount -t cifs //servidor/share /mnt/share -o multiuser,sec=krb5

# Cada usuario establece sus credenciales
cifscreds add servidor
# o con Kerberos, cada usuario obtiene su ticket:
kinit usuario@EMPRESA.LOCAL
```

```
# /etc/fstab con multiuser
//servidor/share  /mnt/share  cifs  multiuser,sec=krb5,_netdev  0  0
```

El comando `cifscreds` gestiona las credenciales por usuario:

```bash
cifscreds add servidor         # Añadir credenciales para un servidor
cifscreds update servidor      # Actualizar credenciales
cifscreds clear servidor       # Eliminar credenciales
cifscreds clearall             # Eliminar todas las credenciales
```

> **Para el examen:** Con `multiuser`, el montaje inicial se hace con credenciales mínimas (o Kerberos). Cada usuario establece sus propias credenciales con `cifscreds`, y el kernel aplica los permisos individuales.

## Autofs para CIFS

Autofs monta recursos compartidos automáticamente cuando se accede a ellos y los desmonta tras un período de inactividad.

### Configuración

```
# /etc/auto.master
/mnt/cifs  /etc/auto.cifs  --timeout=300
```

```
# /etc/auto.cifs
datos    -fstype=cifs,credentials=/etc/samba/creds  ://servidor/datos
proyectos -fstype=cifs,sec=krb5                     ://servidor/proyectos
```

```bash
# Habilitar e iniciar autofs
systemctl enable autofs
systemctl start autofs

# Acceder (montaje automático)
ls /mnt/cifs/datos
```

### Mapa comodín con autofs

```
# /etc/auto.cifs - mapa comodín
*    -fstype=cifs,credentials=/etc/samba/creds  ://servidor/&
```

Con esta configuración, cualquier acceso a `/mnt/cifs/nombre` montará automáticamente `//servidor/nombre`.

> **Para el examen:** En autofs, el formato para CIFS usa `://servidor/share` (con los dos puntos). El `--timeout` define el tiempo en segundos antes de desmontar por inactividad.

## smbclient

### Modo interactivo

```bash
# Conectar a un share
smbclient //servidor/share -U usuario

# Dentro de smbclient:
smb: \> ls                    # Listar archivos
smb: \> cd directorio         # Cambiar directorio
smb: \> get archivo.txt       # Descargar archivo
smb: \> put local.txt         # Subir archivo
smb: \> mkdir nuevo_dir       # Crear directorio
smb: \> rm archivo.txt        # Eliminar archivo
smb: \> exit                  # Salir
```

### Modo batch (no interactivo)

```bash
# Listar contenido de un share
smbclient //servidor/share -U usuario -c "ls"

# Descargar un archivo
smbclient //servidor/share -U usuario -c "get documento.pdf"

# Subir un archivo
smbclient //servidor/share -U usuario -c "put local.txt remoto.txt"

# Múltiples comandos
smbclient //servidor/share -U usuario -c "cd datos; get informe.pdf; exit"

# Listar shares disponibles
smbclient -L //servidor -U usuario
```

### Opciones útiles de smbclient

| Opción          | Descripción                                        |
|-----------------|----------------------------------------------------|
| `-L servidor`   | Listar shares disponibles                          |
| `-U usuario`    | Nombre de usuario                                  |
| `-W dominio`    | Dominio o workgroup                                |
| `-c "comandos"` | Ejecutar comandos en modo batch                   |
| `-N`            | Sin contraseña (acceso anónimo)                    |
| `-k`            | Usar autenticación Kerberos                        |
| `-A authfile`   | Archivo de autenticación                           |

> **Para el examen:** `smbclient -L //servidor` lista shares. `smbclient -c "comando"` ejecuta en modo batch. `-k` activa Kerberos. `-N` permite acceso sin contraseña.

## cifsiostat

`cifsiostat` muestra estadísticas de I/O de montajes CIFS:

```bash
# Mostrar estadísticas cada 5 segundos
cifsiostat 5

# Ejemplo de salida
Filesystem                rB/s  wB/s  rops/s  wops/s  fo/s  fc/s  fd/s
//servidor/share         1024   512     10       5      2     2     0
```

| Campo   | Descripción                           |
|---------|---------------------------------------|
| rB/s    | Bytes leídos por segundo              |
| wB/s    | Bytes escritos por segundo            |
| rops/s  | Operaciones de lectura por segundo    |
| wops/s  | Operaciones de escritura por segundo  |
| fo/s    | Aperturas de archivo por segundo      |
| fc/s    | Cierres de archivo por segundo        |

> **Para el examen:** `cifsiostat` es la herramienta para monitorizar el rendimiento de montajes CIFS. Es parte del paquete `sysstat` en muchas distribuciones.
