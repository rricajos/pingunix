---
title: "304.2 - Ejercicios: Clientes CIFS Linux"
description: "Ejercicios de práctica para clientes CIFS en Linux"
tipo: ejercicios
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
  - ejercicios
---

# 304.2 Ejercicios - Clientes CIFS Linux

### Pregunta 1
¿Cuál es la forma más segura de proporcionar credenciales al montar un share CIFS?

a) `mount -t cifs //srv/share /mnt -o username=user,password=pass`
b) `mount -t cifs //srv/share /mnt -o credentials=/etc/samba/creds`
c) Exportar las variables de entorno USER y PASSWD
d) Escribir la contraseña en /etc/fstab

<details><summary>Respuesta</summary>

**b) `mount -t cifs //srv/share /mnt -o credentials=/etc/samba/creds`**

Usar un archivo de credenciales con la opción `credentials=` es la forma más segura porque el archivo puede protegerse con permisos 0600. Las contraseñas en línea de comandos son visibles con `ps` y en /etc/fstab son legibles por cualquier usuario.
</details>

### Pregunta 2
¿Qué opción `sec=` proporciona Kerberos con cifrado de datos?

a) sec=krb5
b) sec=krb5i
c) sec=krb5p
d) sec=krb5e

<details><summary>Respuesta</summary>

**c) sec=krb5p**

`sec=krb5p` proporciona autenticación Kerberos con cifrado de datos (privacidad). `krb5` solo autentica, `krb5i` añade verificación de integridad, y `krb5p` añade cifrado completo de los datos transmitidos.
</details>

### Pregunta 3
¿Qué opción en /etc/fstab indica al sistema que espere a que la red esté disponible antes de montar un share CIFS?

a) `noauto`
b) `network`
c) `_netdev`
d) `x-systemd.requires=network`

<details><summary>Respuesta</summary>

**c) `_netdev`**

`_netdev` es la opción estándar que indica al sistema que el montaje depende de la red. Sin esta opción, el sistema podría intentar montar el share CIFS antes de que la interfaz de red esté activa, causando un fallo en el arranque.
</details>

### Pregunta 4
¿Qué formato se utiliza en el archivo de mapa de autofs para especificar un recurso CIFS?

a) `share -fstype=cifs //servidor/share`
b) `share -fstype=cifs ://servidor/share`
c) `share -fstype=smb \\servidor\share`
d) `share -fstype=cifs smb://servidor/share`

<details><summary>Respuesta</summary>

**b) `share -fstype=cifs ://servidor/share`**

En autofs, el formato para recursos CIFS incluye dos puntos antes de la ruta: `://servidor/share`. Los dos puntos separan el host de la ubicación en el formato estándar de autofs.
</details>

### Pregunta 5
¿Qué permite la opción `multiuser` en un montaje CIFS?

a) Que múltiples usuarios monten el mismo share simultáneamente
b) Que cada usuario acceda al share con sus propias credenciales
c) Que el share sea accesible desde múltiples puntos de montaje
d) Que varios servidores compartan el mismo recurso

<details><summary>Respuesta</summary>

**b) Que cada usuario acceda al share con sus propias credenciales**

Con `multiuser`, el montaje se realiza una sola vez (generalmente por root), pero cada usuario puede establecer sus propias credenciales mediante `cifscreds`. El kernel aplica los permisos individuales basándose en las credenciales de cada usuario.
</details>

### Pregunta 6
¿Qué comando de smbclient lista los recursos compartidos disponibles en un servidor?

a) `smbclient //servidor -c "ls"`
b) `smbclient -L //servidor -U usuario`
c) `smbclient --list //servidor`
d) `smbclient //servidor/share -c "shares"`

<details><summary>Respuesta</summary>

**b) `smbclient -L //servidor -U usuario`**

La opción `-L` (o `--list`) de smbclient lista todos los recursos compartidos disponibles en el servidor especificado, incluyendo shares de archivos, impresoras e IPC$.
</details>

### Pregunta 7
¿Qué herramienta se usa para monitorizar las estadísticas de I/O de montajes CIFS?

a) iostat
b) cifsstat
c) cifsiostat
d) smbstat

<details><summary>Respuesta</summary>

**c) cifsiostat**

`cifsiostat` es la herramienta específica para monitorizar estadísticas de I/O de montajes CIFS, mostrando bytes leídos/escritos, operaciones por segundo y aperturas/cierres de archivos.
</details>

### Pregunta 8
¿Cuál es el contenido correcto de un archivo de credenciales CIFS?

a) `user:password:domain`
b) `username=user\npassword=pass\ndomain=DOM`
c) `USUARIO=user PASSWORD=pass DOMAIN=DOM`
d) `credentials: user/pass@DOM`

<details><summary>Respuesta</summary>

**b) `username=user\npassword=pass\ndomain=DOM`**

El archivo de credenciales usa el formato `clave=valor` con cada campo en una línea separada: `username=`, `password=` y opcionalmente `domain=`. El archivo debe tener permisos 0600.
</details>

### Pregunta 9
¿Cómo se ejecuta un comando en modo batch con smbclient?

a) `smbclient //srv/share -U user --batch "ls"`
b) `smbclient //srv/share -U user -c "ls"`
c) `smbclient //srv/share -U user -e "ls"`
d) `smbclient //srv/share -U user < "ls"`

<details><summary>Respuesta</summary>

**b) `smbclient //srv/share -U user -c "ls"`**

La opción `-c` de smbclient ejecuta los comandos especificados en modo batch (no interactivo) y luego finaliza. Se pueden encadenar múltiples comandos separándolos con punto y coma.
</details>

### Pregunta 10
Un administrador necesita montar un share CIFS automáticamente solo cuando un usuario accede al directorio, y desmontarlo tras 5 minutos de inactividad. ¿Qué solución es la más adecuada?

a) Entrada en /etc/fstab con `auto`
b) Autofs con `--timeout=300`
c) Script cron que ejecuta mount cada minuto
d) Entrada en /etc/fstab con `noauto`

<details><summary>Respuesta</summary>

**b) Autofs con `--timeout=300`**

Autofs monta automáticamente el recurso cuando un usuario accede al directorio y lo desmonta tras el período de inactividad especificado por `--timeout` (en segundos, 300 = 5 minutos). Esto es más eficiente que un montaje permanente y más elegante que un script cron.
</details>

### Pregunta 11

¿Qué opción de montaje CIFS especifica la versión del protocolo SMB a utilizar?

a) `smb=`
b) `protocol=`
c) `vers=`
d) `smbver=`

<details><summary>Respuesta</summary>

**c) `vers=`**

La opción `vers=` especifica la versión del protocolo SMB a utilizar (por ejemplo, `vers=2.0`, `vers=2.1`, `vers=3.0`, `vers=3.1.1`). Es importante para forzar una versión específica cuando hay problemas de compatibilidad o se requiere un nivel mínimo de seguridad.
</details>

### Pregunta 12

¿Qué opción de `smbclient` permite la autenticación Kerberos?

a) `-K`
b) `-k`
c) `--kerberos`
d) `-A krb5`

<details><summary>Respuesta</summary>

**b) `-k`**

La opción `-k` de `smbclient` activa la autenticación Kerberos. El usuario debe tener un ticket TGT válido (obtenido con `kinit`) antes de usar esta opción. `-N` es para acceso sin contraseña y `-A` es para un archivo de autenticación.
</details>

### Pregunta 13

¿Qué comando se usa para gestionar las credenciales individuales de usuario en un montaje CIFS con la opción `multiuser`?

a) `smbpasswd`
b) `cifscreds`
c) `mount.cifs --user`
d) `smbcredentials`

<details><summary>Respuesta</summary>

**b) `cifscreds`**

`cifscreds` es el comando que permite a cada usuario gestionar sus credenciales individuales en un montaje CIFS multiusuario. Con `cifscreds add servidor` se añaden credenciales, con `cifscreds update` se actualizan y con `cifscreds clear` se eliminan.
</details>

### Pregunta 14

¿Qué diferencia existe entre las opciones `sec=ntlmv2` y `sec=ntlmssp` en mount.cifs?

a) No hay diferencia, son sinónimos
b) `ntlmv2` usa autenticación sin negociación; `ntlmssp` usa el protocolo NTLM Security Support Provider con negociación
c) `ntlmssp` es una versión más antigua de `ntlmv2`
d) `ntlmv2` funciona solo con Samba; `ntlmssp` funciona solo con Windows

<details><summary>Respuesta</summary>

**b) `ntlmv2` usa autenticación sin negociación; `ntlmssp` usa el protocolo NTLM Security Support Provider con negociación**

`ntlmssp` encapsula la autenticación NTLMv2 dentro del protocolo SPNEGO (Simple and Protected GSSAPI Negotiation Mechanism), lo que permite la negociación del método de autenticación. Es generalmente más compatible con servidores Windows modernos.
</details>

### Pregunta 15

En una entrada de autofs para CIFS, ¿qué significa el símbolo `&` en la siguiente línea?
`* -fstype=cifs,credentials=/etc/samba/creds ://servidor/&`

a) Ejecuta el montaje en segundo plano
b) Sustituye el valor de la clave accedida por el usuario
c) Indica un montaje recursivo de todos los subdirectorios
d) Concatena la ruta con el nombre del servidor

<details><summary>Respuesta</summary>

**b) Sustituye el valor de la clave accedida por el usuario**

En un mapa comodín de autofs, `*` captura cualquier nombre de directorio accedido y `&` se reemplaza por ese mismo nombre. Así, acceder a `/mnt/cifs/proyectos` montaría automáticamente `//servidor/proyectos`.
</details>

### Pregunta 16

¿Qué opción de montaje CIFS permite que systemd monte automáticamente el recurso cuando se accede al punto de montaje?

a) `auto`
b) `x-systemd.automount`
c) `systemd.mount`
d) `on-access`

<details><summary>Respuesta</summary>

**b) `x-systemd.automount`**

La opción `x-systemd.automount` en `/etc/fstab` indica a systemd que cree una unidad automount que montará el recurso CIFS bajo demanda la primera vez que se acceda al punto de montaje. Suele combinarse con `_netdev` para montajes de red.
</details>

### Pregunta 17

¿Cuáles son los permisos recomendados para un archivo de credenciales CIFS?

a) 0644
b) 0755
c) 0600
d) 0777

<details><summary>Respuesta</summary>

**c) 0600**

El archivo de credenciales debe tener permisos `0600` (lectura y escritura solo para el propietario) para proteger la contraseña que contiene. Permisos más abiertos expondrían las credenciales a otros usuarios del sistema.
</details>

### Pregunta 18

¿Qué opción de montaje CIFS asigna un UID propietario específico a todos los archivos del punto de montaje?

a) `owner=`
b) `user=`
c) `uid=`
d) `chown=`

<details><summary>Respuesta</summary>

**c) `uid=`**

La opción `uid=` establece el UID propietario de todos los archivos y directorios del montaje CIFS. Como CIFS no soporta permisos POSIX nativos, esta opción junto con `gid=`, `file_mode=` y `dir_mode=` permite controlar cómo se presentan los permisos en el sistema local.
</details>

### Pregunta 19

¿Qué opción de montaje CIFS indica que se deben reintentar indefinidamente si el servidor no responde?

a) `retry`
b) `soft`
c) `hard`
d) `persistent`

<details><summary>Respuesta</summary>

**c) `hard`**

La opción `hard` (que es el comportamiento por defecto) hace que las operaciones de I/O se reintenten indefinidamente si el servidor no responde. La opción `soft` devuelve un error al programa que realizó la operación en lugar de reintentar.
</details>

### Pregunta 20

¿Qué opción de `smbclient` permite conectarse sin proporcionar contraseña para acceso anónimo?

a) `-A`
b) `-N`
c) `-P`
d) `--anonymous`

<details><summary>Respuesta</summary>

**b) `-N`**

La opción `-N` de `smbclient` suprime la solicitud de contraseña, permitiendo conectarse de forma anónima a shares que permitan acceso sin autenticación. Esto es equivalente a usar `sec=none` en mount.cifs.
</details>

### Pregunta 21

Escribe el comando para montar el recurso compartido `//fileserver/datos` en `/mnt/datos` usando un archivo de credenciales ubicado en `/etc/samba/creds`.

<input type="text" class="fill-blank" data-answer="mount -t cifs //fileserver/datos /mnt/datos -o credentials=/etc/samba/creds" data-alt="mount.cifs //fileserver/datos /mnt/datos -o credentials=/etc/samba/creds" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mount -t cifs //fileserver/datos /mnt/datos -o credentials=/etc/samba/creds**

Se utiliza `mount -t cifs` (o `mount.cifs`) para montar el share CIFS. La opción `credentials=` referencia el archivo con las credenciales para evitar exponer la contraseña en la línea de comandos.
</details>

### Pregunta 22

Escribe el comando para listar los recursos compartidos disponibles en el servidor `//fileserver` con el usuario `admin`.

<input type="text" class="fill-blank" data-answer="smbclient -L //fileserver -U admin" data-alt="smbclient -L //fileserver -U admin" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbclient -L //fileserver -U admin**

La opción `-L` de `smbclient` lista todos los recursos compartidos disponibles en el servidor especificado. `-U admin` indica el nombre de usuario para la autenticación.
</details>

### Pregunta 23

Escribe el comando para añadir credenciales CIFS para el servidor `fileserver` en un montaje multiusuario.

<input type="text" class="fill-blank" data-answer="cifscreds add fileserver" data-alt="cifscreds add fileserver" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cifscreds add fileserver**

`cifscreds add` permite a un usuario individual establecer sus credenciales para acceder a un montaje CIFS configurado con la opción `multiuser`. El comando solicitará la contraseña de forma interactiva.
</details>

### Pregunta 24

Escribe el comando para descargar el archivo `informe.pdf` del share `//servidor/docs` como el usuario `jperez` usando `smbclient` en modo batch.

<input type="text" class="fill-blank" data-answer="smbclient //servidor/docs -U jperez -c &quot;get informe.pdf&quot;" data-alt="smbclient //servidor/docs -U jperez -c 'get informe.pdf'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbclient //servidor/docs -U jperez -c "get informe.pdf"**

La opción `-c` de `smbclient` permite ejecutar comandos en modo batch sin entrar en el modo interactivo. El comando `get` descarga el archivo especificado al directorio local actual.
</details>

### Pregunta 25

Escribe el comando para ver las estadísticas de I/O de montajes CIFS con un intervalo de actualización de 5 segundos.

<input type="text" class="fill-blank" data-answer="cifsiostat 5" data-alt="cifsiostat 5" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**cifsiostat 5**

`cifsiostat` muestra estadísticas de I/O de montajes CIFS como bytes leídos/escritos, operaciones por segundo y aperturas/cierres de archivos. El argumento numérico establece el intervalo de actualización en segundos.
</details>
