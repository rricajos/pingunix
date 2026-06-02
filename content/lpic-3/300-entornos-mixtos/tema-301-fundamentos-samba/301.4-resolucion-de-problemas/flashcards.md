---
title: "301.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "301.4"
---

# Flashcards: 301.4 - Resolucion De Problemas

> 35 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando permite cambiar el nivel de log de smbd en caliente sin reiniciar el servicio?

</div>
<div class="flashcard-back">

**R:** a) `smbcontrol smbd debug 3`. `smbcontrol` permite enviar mensajes de control a los demonios de Samba en ejecución. Con `smbcontrol smbd debug 3` se cambia el nivel de log del demonio smbd al nivel 3 sin necesidad de reiniciar. Para cambiar todos los demonios simultáneamente se usa `smbcontrol all debug 3`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el orden predeterminado de resolución de nombres en Samba (parámetro `name resolve order`)?

</div>
<div class="flashcard-back">

**R:** b) lmhosts wins host bcast. El orden predeterminado es: primero el archivo lmhosts local, luego el servidor WINS, después la resolución DNS del sistema (host) y finalmente broadcast NetBIOS. Este orden puede modificarse en smb.conf con `name resolve order = ...`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-003">
<div class="flashcard-front">

**P:** Un usuario recibe el error `NT_STATUS_LOGON_FAILURE` al intentar acceder a un recurso compartido. ¿Cuál es la causa más probable?

</div>
<div class="flashcard-back">

**R:** b) Las credenciales del usuario son incorrectas o la cuenta no existe en passdb. `NT_STATUS_LOGON_FAILURE` indica un fallo de autenticación. Puede deberse a contraseña incorrecta, usuario no registrado en la base de datos de Samba (passdb), cuenta deshabilitada o problema con Kerberos/AD. Se debe verificar con `pdbedit -L` para usuarios locales o `wbinfo -a` para usuarios de dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando de `wbinfo` verifica que la relación de confianza con el dominio está funcionando?

</div>
<div class="flashcard-back">

**R:** c) `wbinfo -t`. `wbinfo -t` (trust) verifica que la relación de confianza entre el servidor Samba y el controlador de dominio es válida. `wbinfo -p` solo verifica que el demonio winbindd responde (ping). `wbinfo -u` lista usuarios y `wbinfo -a` prueba la autenticación de un usuario específico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué nivel de log de Samba es recomendable para diagnosticar problemas de acceso a archivos sin generar excesiva información?

</div>
<div class="flashcard-back">

**R:** c) 3. El nivel 3 muestra operaciones detalladas de archivos sin ser excesivamente verboso. Es el nivel más comúnmente utilizado para diagnóstico de problemas de acceso. El nivel 0 solo muestra errores críticos, el nivel 1 es para operación normal y el nivel 10 genera volcados completos que pueden llenar el disco rápidamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué herramienta de línea de comandos permite capturar tráfico SMB para análisis posterior con Wireshark?

</div>
<div class="flashcard-back">

**R:** b) tcpdump. `tcpdump` permite capturar tráfico de red y guardarlo en archivos pcap que pueden analizarse posteriormente con Wireshark. Para capturar tráfico SMB: `tcpdump -i eth0 port 445 -w captura.pcap`. También se puede usar `tshark` (versión CLI de Wireshark) para captura y análisis directo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-007">
<div class="flashcard-front">

**P:** Un administrador ejecuta `getent passwd usuario_ad` y no obtiene resultado, pero `wbinfo -u` sí muestra el usuario. ¿Cuál es la causa más probable?

</div>
<div class="flashcard-back">

**R:** b) El archivo `/etc/nsswitch.conf` no incluye winbind. Si `wbinfo -u` muestra el usuario pero `getent passwd` no, significa que winbindd funciona correctamente pero NSS no está configurado para consultarlo. Se debe verificar que `/etc/nsswitch.conf` contenga `winbind` en las líneas de passwd y group: `passwd: files winbind` y `group: files winbind`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué puerto se debe filtrar con tcpdump para capturar tráfico de resolución de nombres NetBIOS?

</div>
<div class="flashcard-back">

**R:** c) 137. El puerto UDP 137 es el utilizado por el servicio de nombres NetBIOS (NetBIOS Name Service). Las consultas y registros de nombres NetBIOS, incluyendo WINS, usan este puerto. El puerto 138 es para datagramas NetBIOS, 139 para sesiones NetBIOS (SMB) y 445 para SMB directo sobre TCP.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando verifica que los registros SRV de DNS necesarios para Active Directory están correctamente configurados?

</div>
<div class="flashcard-back">

**R:** b) `dig _ldap._tcp.dominio.com SRV`. El comando `dig` con el tipo de registro `SRV` permite verificar que los registros de servicio necesarios para AD están presentes en DNS. Los registros `_ldap._tcp` y `_kerberos._tcp` son esenciales para que los clientes localicen los controladores de dominio. `net ads lookup` también localiza DCs, pero `dig` es más específico para diagnóstico DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-010">
<div class="flashcard-front">

**P:** ¿Cómo se pueden configurar niveles de log diferentes para distintos componentes de Samba?

</div>
<div class="flashcard-back">

**R:** b) Usando la sintaxis `log level = 1 auth:5 winbind:3` en smb.conf. Samba permite configurar niveles de log granulares por componente. La sintaxis es `log level = NIVEL_GLOBAL componente1:nivel componente2:nivel`. Por ejemplo, `log level = 1 auth:5 winbind:3` establece nivel 1 global, nivel 5 para autenticación y nivel 3 para winbind. Los componentes incluyen auth, passdb, winbind, smb, vfs, idmap, entre otros.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-011">
<div class="flashcard-front">

**P:** Un usuario recibe el error `NT_STATUS_BAD_NETWORK_NAME` al intentar conectarse a un recurso compartido. ¿Cuál es la causa más probable?

</div>
<div class="flashcard-back">

**R:** b) El recurso compartido no existe o el nombre es incorrecto en smb.conf. El error `NT_STATUS_BAD_NETWORK_NAME` indica que el cliente intenta acceder a un recurso compartido que no existe en el servidor. Puede deberse a que el nombre del recurso está mal escrito, la sección no existe en smb.conf, o hay un error de sintaxis que impide que Samba reconozca el recurso. Se debe verificar con `testparm -s` que el recurso está correctamente definido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando de `wbinfo` permite listar todos los usuarios del dominio a través de winbindd?

</div>
<div class="flashcard-back">

**R:** c) `wbinfo -u`. El comando `wbinfo -u` lista todos los usuarios del dominio obtenidos a través de winbindd. Es útil para verificar que la integración con el dominio funciona y que winbindd puede enumerar los usuarios correctamente. `wbinfo -g` lista los grupos, `wbinfo -p` hace ping a winbindd y `wbinfo -t` verifica la relación de confianza.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué filtro de Wireshark se utiliza para mostrar únicamente el tráfico del protocolo SMB2/SMB3?

</div>
<div class="flashcard-back">

**R:** c) `smb2`. El filtro de visualización `smb2` en Wireshark muestra exclusivamente el tráfico del protocolo SMB2 y SMB3 (SMB3 es una extensión de SMB2 en el protocolo). El filtro `smb` solo muestra tráfico SMB1. Para ver respuestas con error, se puede usar `smb2.nt_status != 0`, y `tcp.port == 445` mostraría todo el tráfico en ese puerto sin filtrar por protocolo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué error indica que hay un archivo bloqueado por otro proceso cuando un usuario intenta acceder a él?

</div>
<div class="flashcard-back">

**R:** c) `NT_STATUS_SHARING_VIOLATION`. El error `NT_STATUS_SHARING_VIOLATION` indica que un archivo está bloqueado por otro proceso o usuario, impidiendo el acceso solicitado. Se puede diagnosticar con `smbstatus -L` para ver qué archivos tienen bloqueos activos y qué usuarios los mantienen. `NT_STATUS_ACCESS_DENIED` indica permisos insuficientes y `NT_STATUS_LOGON_FAILURE` un fallo de autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando de `wbinfo` se utiliza para verificar la autenticación de un usuario de dominio específico?

</div>
<div class="flashcard-back">

**R:** c) `wbinfo -a usuario%contraseña`. El comando `wbinfo -a usuario%contraseña` prueba la autenticación de un usuario específico contra el controlador de dominio a través de winbindd. Verifica tanto la autenticación en texto plano como la autenticación de desafío-respuesta (challenge-response). Es una herramienta esencial para diagnosticar problemas de autenticación de usuarios de dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-016">
<div class="flashcard-front">

**P:** En un diagnóstico de Samba, ¿cuál es el orden correcto de las capas de permisos, desde la primera evaluada hasta la última?

</div>
<div class="flashcard-back">

**R:** b) Permisos de smb.conf > ACLs NT > Permisos POSIX. Los permisos en Samba se evalúan en este orden: primero los permisos definidos en smb.conf (como `valid users`, `read only`, `write list`), luego las ACLs NT/NTFS (si se usan con el módulo VFS acl_xattr), y finalmente los permisos POSIX del sistema de archivos Linux. El acceso efectivo es el más restrictivo de todas las capas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué herramienta permite verificar que los usuarios de dominio se resuelven correctamente en el sistema Linux mediante NSS?

</div>
<div class="flashcard-back">

**R:** b) `getent passwd`. El comando `getent passwd` consulta la base de datos de usuarios del sistema a través de NSS (Name Service Switch), incluyendo los usuarios de dominio si winbind está configurado en `/etc/nsswitch.conf`. Si los usuarios de dominio aparecen en `wbinfo -u` pero no en `getent passwd`, el problema está en la configuración de NSS y no en winbindd.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué registros DNS de tipo SRV son esenciales para verificar el correcto funcionamiento de un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** b) Registros `_ldap._tcp` y `_kerberos._tcp` del dominio. Los registros SRV `_ldap._tcp.dominio.com` y `_kerberos._tcp.dominio.com` son fundamentales para que los clientes localicen los controladores de dominio y los servicios Kerberos. Sin estos registros, ningún cliente puede encontrar los DCs para autenticarse. Se verifican con `dig _ldap._tcp.dominio.com SRV` y `dig _kerberos._tcp.dominio.com SRV`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué error de Samba indica que la cuenta de máquina del servidor no es válida en el dominio y que es necesario volver a unirse?

</div>
<div class="flashcard-back">

**R:** c) `NT_STATUS_NO_TRUST_SAM_ACCOUNT`. El error `NT_STATUS_NO_TRUST_SAM_ACCOUNT` indica que la cuenta de máquina del servidor no es válida en el dominio. Esto puede ocurrir cuando la contraseña de la cuenta de máquina se desincroniza, cuando la cuenta ha sido eliminada del AD, o tras una restauración de backup. La solución es volver a unirse al dominio con `net ads join -U administrator`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-020">
<div class="flashcard-front">

**P:** ¿Cuál es la forma correcta de verificar que el servicio smbd está escuchando en los puertos correctos?

</div>
<div class="flashcard-back">

**R:** b) `ss -tlnp | grep -E "445|139"`. El comando `ss -tlnp` (socket statistics) muestra los puertos TCP en escucha con información del proceso, y al filtrar por 445 y 139 se verifican los puertos de SMB. El puerto 445 es para SMB directo sobre TCP y el 139 para SMB sobre NetBIOS. Para verificar los puertos UDP de nmbd se usa `ss -ulnp | grep -E "137|138"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando aumenta temporalmente el nivel de debug de todos los demonios de Samba al nivel 3 sin reiniciarlos?

</div>
<div class="flashcard-back">

**R:** smbcontrol all debug 3. El comando `smbcontrol all debug 3` envía un mensaje a todos los procesos de Samba para que cambien su nivel de log al nivel 3. Este cambio es temporal y se mantiene hasta que se envíe otro comando `smbcontrol` o se reinicien los servicios. Es la forma recomendada de aumentar el detalle de los logs durante la resolución de problemas sin editar smb.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para probar que el demonio winbindd está respondiendo correctamente?

</div>
<div class="flashcard-back">

**R:** wbinfo -p. El comando `wbinfo -p` (ping) envía una solicitud de ping al demonio winbindd para verificar que está en ejecución y respondiendo. Si la respuesta es exitosa, confirma que winbindd funciona. Para verificar adicionalmente la relación de confianza con el dominio se usa `wbinfo -t`, y `wbinfo -u` para listar los usuarios del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando captura tráfico de red en el puerto 445 y lo guarda en un archivo pcap para análisis posterior?

</div>
<div class="flashcard-back">

**R:** tcpdump -i eth0 port 445 -w captura.pcap. El comando `tcpdump` con la opción `-i` para especificar la interfaz, `port 445` para filtrar el tráfico SMB y `-w` para escribir la captura en un archivo pcap. Este archivo puede analizarse posteriormente con Wireshark para inspeccionar el detalle del tráfico SMB, incluyendo negociación de protocolo, autenticación y operaciones de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando permite verificar si un host específico tiene acceso a un recurso compartido, mostrando la configuración que Samba aplicaría?

</div>
<div class="flashcard-back">

**R:** testparm /etc/samba/smb.conf 192.168.1.100. Al pasar una dirección IP como argumento adicional a `testparm`, la herramienta evalúa la configuración de smb.conf considerando las directivas `hosts allow` y `hosts deny` para ese host específico, mostrando solo los recursos compartidos a los que tendría acceso. Es muy útil para diagnosticar problemas de acceso basados en restricciones de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de wbinfo traduce un nombre de usuario de dominio a su SID correspondiente?

</div>
<div class="flashcard-back">

**R:** wbinfo --name-to-sid. El comando `wbinfo --name-to-sid nombre` traduce un nombre de usuario o grupo de dominio a su SID (Security Identifier) correspondiente. La operación inversa se realiza con `wbinfo --sid-to-uid SID` para obtener el UID Unix, o `wbinfo --sid-to-name SID` para obtener el nombre. Estas traducciones son fundamentales para diagnosticar problemas de mapeo de identidades entre Windows y Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Es crucial conocer los niveles de log y la capacidad de ajustarlos por component...

</div>
<div class="flashcard-back">

**R:** Es crucial conocer los niveles de log y la capacidad de ajustarlos por componente. El nivel 3 es normalmente suficiente para diagnosticar problemas de acceso. Nunca usar nivel 10 en producción.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Conocer los puertos a filtrar (445, 139, 137, 138) y los filtros básicos de Wire...

</div>
<div class="flashcard-back">

**R:** Conocer los puertos a filtrar (445, 139, 137, 138) y los filtros básicos de Wireshark para SMB. tcpdump es útil para capturas rápidas en servidores sin interfaz gráfica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: El orden predeterminado es `lmhosts wins host bcast`. Conocer cada método y cuán...

</div>
<div class="flashcard-back">

**R:** El orden predeterminado es `lmhosts wins host bcast`. Conocer cada método y cuándo se utiliza es fundamental para diagnosticar problemas de resolución de nombres.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `lmhosts`?

</div>
<div class="flashcard-back">

**R:** Archivo estático `/etc/samba/lmhosts`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `host`?

</div>
<div class="flashcard-back">

**R:** Resolución DNS del sistema (`/etc/hosts`, DNS)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `bcast`?

</div>
<div class="flashcard-back">

**R:** Broadcast NetBIOS en la subred local

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son Objetivos del subtema?

</div>
<div class="flashcard-back">

**R:** Este subtema aborda las técnicas y herramientas para diagnosticar y resolver problemas comunes en entornos Samba, incluyendo niveles de log, análisis de tráfico de red, resolución de nombres y errores

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-033">
<div class="flashcard-front">

**P:** Que es/son Niveles de log en Samba?

</div>
<div class="flashcard-back">

**R:** Samba proporciona niveles de log granulares del 0 al 10:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-034">
<div class="flashcard-front">

**P:** Que es/son Resumen de conceptos clave?

</div>
<div class="flashcard-back">

**R:** - Niveles de log del 0 al 10, ajustables por componente y en caliente con `smbcontrol`

</div>
</div>

---

<div class="flashcard-deck" data-subtema="301.4">
</div>

<div class="flashcard" data-id="301.4-fc-035">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

