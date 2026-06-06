---
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "301"
subtema: "301.4"
titulo: "Resolución de Problemas - Ejercicios"
peso: 3
tags:
  - lpic-3
  - tema-301
  - ejercicios
---

# Ejercicios - 301.4 Resolución de Problemas

### Pregunta 1
¿Qué comando permite cambiar el nivel de log de smbd en caliente sin reiniciar el servicio?

a) `smbcontrol smbd debug 3`
b) `testparm --debug 3`
c) `smbstatus -d 3`
d) `smbd --log-level 3`

<details><summary>Respuesta</summary>

**a) `smbcontrol smbd debug 3`**

`smbcontrol` permite enviar mensajes de control a los demonios de Samba en ejecución. Con `smbcontrol smbd debug 3` se cambia el nivel de log del demonio smbd al nivel 3 sin necesidad de reiniciar. Para cambiar todos los demonios simultáneamente se usa `smbcontrol all debug 3`.
</details>

### Pregunta 2
¿Cuál es el orden predeterminado de resolución de nombres en Samba (parámetro `name resolve order`)?

a) host wins bcast lmhosts
b) lmhosts wins host bcast
c) dns wins netbios bcast
d) wins host lmhosts bcast

<details><summary>Respuesta</summary>

**b) lmhosts wins host bcast**

El orden predeterminado es: primero el archivo lmhosts local, luego el servidor WINS, después la resolución DNS del sistema (host) y finalmente broadcast NetBIOS. Este orden puede modificarse en smb.conf con `name resolve order = ...`.
</details>

### Pregunta 3
Un usuario recibe el error `NT_STATUS_LOGON_FAILURE` al intentar acceder a un recurso compartido. ¿Cuál es la causa más probable?

a) El recurso compartido no existe
b) Las credenciales del usuario son incorrectas o la cuenta no existe en passdb
c) El firewall bloquea el puerto 445
d) El directorio no tiene permisos de lectura

<details><summary>Respuesta</summary>

**b) Las credenciales del usuario son incorrectas o la cuenta no existe en passdb**

`NT_STATUS_LOGON_FAILURE` indica un fallo de autenticación. Puede deberse a contraseña incorrecta, usuario no registrado en la base de datos de Samba (passdb), cuenta deshabilitada o problema con Kerberos/AD. Se debe verificar con `pdbedit -L` para usuarios locales o `wbinfo -a` para usuarios de dominio.
</details>

### Pregunta 4
¿Qué comando de `wbinfo` verifica que la relación de confianza con el dominio está funcionando?

a) `wbinfo -p`
b) `wbinfo -u`
c) `wbinfo -t`
d) `wbinfo -a`

<details><summary>Respuesta</summary>

**c) `wbinfo -t`**

`wbinfo -t` (trust) verifica que la relación de confianza entre el servidor Samba y el controlador de dominio es válida. `wbinfo -p` solo verifica que el demonio winbindd responde (ping). `wbinfo -u` lista usuarios y `wbinfo -a` prueba la autenticación de un usuario específico.
</details>

### Pregunta 5
¿Qué nivel de log de Samba es recomendable para diagnosticar problemas de acceso a archivos sin generar excesiva información?

a) 0
b) 1
c) 3
d) 10

<details><summary>Respuesta</summary>

**c) 3**

El nivel 3 muestra operaciones detalladas de archivos sin ser excesivamente verboso. Es el nivel más comúnmente utilizado para diagnóstico de problemas de acceso. El nivel 0 solo muestra errores críticos, el nivel 1 es para operación normal y el nivel 10 genera volcados completos que pueden llenar el disco rápidamente.
</details>

### Pregunta 6
¿Qué herramienta de línea de comandos permite capturar tráfico SMB para análisis posterior con Wireshark?

a) nmap
b) tcpdump
c) netstat
d) smbclient

<details><summary>Respuesta</summary>

**b) tcpdump**

`tcpdump` permite capturar tráfico de red y guardarlo en archivos pcap que pueden analizarse posteriormente con Wireshark. Para capturar tráfico SMB: `tcpdump -i eth0 port 445 -w captura.pcap`. También se puede usar `tshark` (versión CLI de Wireshark) para captura y análisis directo.
</details>

### Pregunta 7
Un administrador ejecuta `getent passwd usuario_ad` y no obtiene resultado, pero `wbinfo -u` sí muestra el usuario. ¿Cuál es la causa más probable?

a) winbindd no está funcionando
b) El archivo `/etc/nsswitch.conf` no incluye winbind
c) El usuario no tiene contraseña
d) El servidor DNS no funciona

<details><summary>Respuesta</summary>

**b) El archivo `/etc/nsswitch.conf` no incluye winbind**

Si `wbinfo -u` muestra el usuario pero `getent passwd` no, significa que winbindd funciona correctamente pero NSS no está configurado para consultarlo. Se debe verificar que `/etc/nsswitch.conf` contenga `winbind` en las líneas de passwd y group: `passwd: files winbind` y `group: files winbind`.
</details>

### Pregunta 8
¿Qué puerto se debe filtrar con tcpdump para capturar tráfico de resolución de nombres NetBIOS?

a) 445
b) 139
c) 137
d) 88

<details><summary>Respuesta</summary>

**c) 137**

El puerto UDP 137 es el utilizado por el servicio de nombres NetBIOS (NetBIOS Name Service). Las consultas y registros de nombres NetBIOS, incluyendo WINS, usan este puerto. El puerto 138 es para datagramas NetBIOS, 139 para sesiones NetBIOS (SMB) y 445 para SMB directo sobre TCP.
</details>

### Pregunta 9
¿Qué comando verifica que los registros SRV de DNS necesarios para Active Directory están correctamente configurados?

a) `nmblookup -S dc`
b) `dig _ldap._tcp.dominio.com SRV`
c) `wbinfo --dsgetdcname`
d) `net ads lookup`

<details><summary>Respuesta</summary>

**b) `dig _ldap._tcp.dominio.com SRV`**

El comando `dig` con el tipo de registro `SRV` permite verificar que los registros de servicio necesarios para AD están presentes en DNS. Los registros `_ldap._tcp` y `_kerberos._tcp` son esenciales para que los clientes localicen los controladores de dominio. `net ads lookup` también localiza DCs, pero `dig` es más específico para diagnóstico DNS.
</details>

### Pregunta 10
¿Cómo se pueden configurar niveles de log diferentes para distintos componentes de Samba?

a) Creando archivos de log separados para cada componente
b) Usando la sintaxis `log level = 1 auth:5 winbind:3` en smb.conf
c) Ejecutando cada demonio con un nivel de log diferente
d) No es posible, el nivel es global para todos los componentes

<details><summary>Respuesta</summary>

**b) Usando la sintaxis `log level = 1 auth:5 winbind:3` en smb.conf**

Samba permite configurar niveles de log granulares por componente. La sintaxis es `log level = NIVEL_GLOBAL componente1:nivel componente2:nivel`. Por ejemplo, `log level = 1 auth:5 winbind:3` establece nivel 1 global, nivel 5 para autenticación y nivel 3 para winbind. Los componentes incluyen auth, passdb, winbind, smb, vfs, idmap, entre otros.
</details>

### Pregunta 11

Un usuario recibe el error `NT_STATUS_BAD_NETWORK_NAME` al intentar conectarse a un recurso compartido. ¿Cuál es la causa más probable?

a) El firewall está bloqueando el puerto 445
b) El recurso compartido no existe o el nombre es incorrecto en smb.conf
c) El usuario no tiene contraseña válida
d) El servidor DNS no está funcionando

<details><summary>Respuesta</summary>

**b) El recurso compartido no existe o el nombre es incorrecto en smb.conf**

El error `NT_STATUS_BAD_NETWORK_NAME` indica que el cliente intenta acceder a un recurso compartido que no existe en el servidor. Puede deberse a que el nombre del recurso está mal escrito, la sección no existe en smb.conf, o hay un error de sintaxis que impide que Samba reconozca el recurso. Se debe verificar con `testparm -s` que el recurso está correctamente definido.
</details>

### Pregunta 12

¿Qué comando de `wbinfo` permite listar todos los usuarios del dominio a través de winbindd?

a) `wbinfo -p`
b) `wbinfo -t`
c) `wbinfo -u`
d) `wbinfo -a`

<details><summary>Respuesta</summary>

**c) `wbinfo -u`**

El comando `wbinfo -u` lista todos los usuarios del dominio obtenidos a través de winbindd. Es útil para verificar que la integración con el dominio funciona y que winbindd puede enumerar los usuarios correctamente. `wbinfo -g` lista los grupos, `wbinfo -p` hace ping a winbindd y `wbinfo -t` verifica la relación de confianza.
</details>

### Pregunta 13

¿Qué filtro de Wireshark se utiliza para mostrar únicamente el tráfico del protocolo SMB2/SMB3?

a) `tcp.port == 445`
b) `smb`
c) `smb2`
d) `cifs`

<details><summary>Respuesta</summary>

**c) `smb2`**

El filtro de visualización `smb2` en Wireshark muestra exclusivamente el tráfico del protocolo SMB2 y SMB3 (SMB3 es una extensión de SMB2 en el protocolo). El filtro `smb` solo muestra tráfico SMB1. Para ver respuestas con error, se puede usar `smb2.nt_status != 0`, y `tcp.port == 445` mostraría todo el tráfico en ese puerto sin filtrar por protocolo.
</details>

### Pregunta 14

¿Qué error indica que hay un archivo bloqueado por otro proceso cuando un usuario intenta acceder a él?

a) `NT_STATUS_ACCESS_DENIED`
b) `NT_STATUS_LOGON_FAILURE`
c) `NT_STATUS_SHARING_VIOLATION`
d) `NT_STATUS_OBJECT_NAME_NOT_FOUND`

<details><summary>Respuesta</summary>

**c) `NT_STATUS_SHARING_VIOLATION`**

El error `NT_STATUS_SHARING_VIOLATION` indica que un archivo está bloqueado por otro proceso o usuario, impidiendo el acceso solicitado. Se puede diagnosticar con `smbstatus -L` para ver qué archivos tienen bloqueos activos y qué usuarios los mantienen. `NT_STATUS_ACCESS_DENIED` indica permisos insuficientes y `NT_STATUS_LOGON_FAILURE` un fallo de autenticación.
</details>

### Pregunta 15

¿Qué comando de `wbinfo` se utiliza para verificar la autenticación de un usuario de dominio específico?

a) `wbinfo -u usuario`
b) `wbinfo -t usuario`
c) `wbinfo -a usuario%contraseña`
d) `wbinfo --check usuario`

<details><summary>Respuesta</summary>

**c) `wbinfo -a usuario%contraseña`**

El comando `wbinfo -a usuario%contraseña` prueba la autenticación de un usuario específico contra el controlador de dominio a través de winbindd. Verifica tanto la autenticación en texto plano como la autenticación de desafío-respuesta (challenge-response). Es una herramienta esencial para diagnosticar problemas de autenticación de usuarios de dominio.
</details>

### Pregunta 16

En un diagnóstico de Samba, ¿cuál es el orden correcto de las capas de permisos, desde la primera evaluada hasta la última?

a) Permisos POSIX > ACLs NT > Permisos de smb.conf
b) Permisos de smb.conf > ACLs NT > Permisos POSIX
c) ACLs NT > Permisos de smb.conf > Permisos POSIX
d) Permisos POSIX > Permisos de smb.conf > ACLs NT

<details><summary>Respuesta</summary>

**b) Permisos de smb.conf > ACLs NT > Permisos POSIX**

Los permisos en Samba se evalúan en este orden: primero los permisos definidos en smb.conf (como `valid users`, `read only`, `write list`), luego las ACLs NT/NTFS (si se usan con el módulo VFS acl_xattr), y finalmente los permisos POSIX del sistema de archivos Linux. El acceso efectivo es el más restrictivo de todas las capas.
</details>

### Pregunta 17

¿Qué herramienta permite verificar que los usuarios de dominio se resuelven correctamente en el sistema Linux mediante NSS?

a) `wbinfo -u`
b) `getent passwd`
c) `pdbedit -L`
d) `smbstatus -u`

<details><summary>Respuesta</summary>

**b) `getent passwd`**

El comando `getent passwd` consulta la base de datos de usuarios del sistema a través de NSS (Name Service Switch), incluyendo los usuarios de dominio si winbind está configurado en `/etc/nsswitch.conf`. Si los usuarios de dominio aparecen en `wbinfo -u` pero no en `getent passwd`, el problema está en la configuración de NSS y no en winbindd.
</details>

### Pregunta 18

¿Qué registros DNS de tipo SRV son esenciales para verificar el correcto funcionamiento de un dominio Active Directory?

a) Registros MX y TXT del dominio
b) Registros `_ldap._tcp` y `_kerberos._tcp` del dominio
c) Registros A y AAAA del controlador de dominio
d) Registros CNAME del catálogo global

<details><summary>Respuesta</summary>

**b) Registros `_ldap._tcp` y `_kerberos._tcp` del dominio**

Los registros SRV `_ldap._tcp.dominio.com` y `_kerberos._tcp.dominio.com` son fundamentales para que los clientes localicen los controladores de dominio y los servicios Kerberos. Sin estos registros, ningún cliente puede encontrar los DCs para autenticarse. Se verifican con `dig _ldap._tcp.dominio.com SRV` y `dig _kerberos._tcp.dominio.com SRV`.
</details>

### Pregunta 19

¿Qué error de Samba indica que la cuenta de máquina del servidor no es válida en el dominio y que es necesario volver a unirse?

a) `NT_STATUS_ACCESS_DENIED`
b) `NT_STATUS_CONNECTION_REFUSED`
c) `NT_STATUS_NO_TRUST_SAM_ACCOUNT`
d) `NT_STATUS_LOGON_FAILURE`

<details><summary>Respuesta</summary>

**c) `NT_STATUS_NO_TRUST_SAM_ACCOUNT`**

El error `NT_STATUS_NO_TRUST_SAM_ACCOUNT` indica que la cuenta de máquina del servidor no es válida en el dominio. Esto puede ocurrir cuando la contraseña de la cuenta de máquina se desincroniza, cuando la cuenta ha sido eliminada del AD, o tras una restauración de backup. La solución es volver a unirse al dominio con `net ads join -U administrator`.
</details>

### Pregunta 20

¿Cuál es la forma correcta de verificar que el servicio smbd está escuchando en los puertos correctos?

a) `netstat -an | grep smbd`
b) `ss -tlnp | grep -E "445|139"`
c) `smbstatus --ports`
d) `testparm --listen`

<details><summary>Respuesta</summary>

**b) `ss -tlnp | grep -E "445|139"`**

El comando `ss -tlnp` (socket statistics) muestra los puertos TCP en escucha con información del proceso, y al filtrar por 445 y 139 se verifican los puertos de SMB. El puerto 445 es para SMB directo sobre TCP y el 139 para SMB sobre NetBIOS. Para verificar los puertos UDP de nmbd se usa `ss -ulnp | grep -E "137|138"`.
</details>

### Pregunta 21

¿Qué comando aumenta temporalmente el nivel de debug de todos los demonios de Samba al nivel 3 sin reiniciarlos?

<input type="text" class="fill-blank" data-answer="smbcontrol all debug 3" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbcontrol all debug 3**

El comando `smbcontrol all debug 3` envía un mensaje a todos los procesos de Samba para que cambien su nivel de log al nivel 3. Este cambio es temporal y se mantiene hasta que se envíe otro comando `smbcontrol` o se reinicien los servicios. Es la forma recomendada de aumentar el detalle de los logs durante la resolución de problemas sin editar smb.conf.
</details>

### Pregunta 22

¿Qué comando se utiliza para probar que el demonio winbindd está respondiendo correctamente?

<input type="text" class="fill-blank" data-answer="wbinfo -p" data-alt="wbinfo --ping-dc" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wbinfo -p**

El comando `wbinfo -p` (ping) envía una solicitud de ping al demonio winbindd para verificar que está en ejecución y respondiendo. Si la respuesta es exitosa, confirma que winbindd funciona. Para verificar adicionalmente la relación de confianza con el dominio se usa `wbinfo -t`, y `wbinfo -u` para listar los usuarios del dominio.
</details>

### Pregunta 23

¿Qué comando captura tráfico de red en el puerto 445 y lo guarda en un archivo pcap para análisis posterior?

<input type="text" class="fill-blank" data-answer="tcpdump -i eth0 port 445 -w captura.pcap" data-alt="tcpdump -i eth0 port 445 -w smb_capture.pcap,tcpdump port 445 -w captura.pcap" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**tcpdump -i eth0 port 445 -w captura.pcap**

El comando `tcpdump` con la opción `-i` para especificar la interfaz, `port 445` para filtrar el tráfico SMB y `-w` para escribir la captura en un archivo pcap. Este archivo puede analizarse posteriormente con Wireshark para inspeccionar el detalle del tráfico SMB, incluyendo negociación de protocolo, autenticación y operaciones de archivos.
</details>

### Pregunta 24

¿Qué comando permite verificar si un host específico tiene acceso a un recurso compartido, mostrando la configuración que Samba aplicaría?

<input type="text" class="fill-blank" data-answer="testparm /etc/samba/smb.conf 192.168.1.100" data-alt="testparm smb.conf IP" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**testparm /etc/samba/smb.conf 192.168.1.100**

Al pasar una dirección IP como argumento adicional a `testparm`, la herramienta evalúa la configuración de smb.conf considerando las directivas `hosts allow` y `hosts deny` para ese host específico, mostrando solo los recursos compartidos a los que tendría acceso. Es muy útil para diagnosticar problemas de acceso basados en restricciones de red.
</details>

### Pregunta 25

¿Qué comando de wbinfo traduce un nombre de usuario de dominio a su SID correspondiente?

<input type="text" class="fill-blank" data-answer="wbinfo --name-to-sid" data-alt="wbinfo -n,wbinfo --name-to-sid usuario" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**wbinfo --name-to-sid**

El comando `wbinfo --name-to-sid nombre` traduce un nombre de usuario o grupo de dominio a su SID (Security Identifier) correspondiente. La operación inversa se realiza con `wbinfo --sid-to-uid SID` para obtener el UID Unix, o `wbinfo --sid-to-name SID` para obtener el nombre. Estas traducciones son fundamentales para diagnosticar problemas de mapeo de identidades entre Windows y Linux.
</details>
