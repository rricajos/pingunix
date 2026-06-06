---
title: "304.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "304.2"
---

# Flashcards: 304.2 - Clientes Cifs Linux

> 44 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-001">
<div class="flashcard-front">

**P:** ¿Cuál es la forma más segura de proporcionar credenciales al montar un share CIFS?

</div>
<div class="flashcard-back">

**R:** b) `mount -t cifs //srv/share /mnt -o credentials=/etc/samba/creds`. Usar un archivo de credenciales con la opción `credentials=` es la forma más segura porque el archivo puede protegerse con permisos 0600. Las contraseñas en línea de comandos son visibles con `ps` y en /etc/fstab son legibles por cualquier usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué opción `sec=` proporciona Kerberos con cifrado de datos?

</div>
<div class="flashcard-back">

**R:** c) sec=krb5p. `sec=krb5p` proporciona autenticación Kerberos con cifrado de datos (privacidad). `krb5` solo autentica, `krb5i` añade verificación de integridad, y `krb5p` añade cifrado completo de los datos transmitidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué opción en /etc/fstab indica al sistema que espere a que la red esté disponible antes de montar un share CIFS?

</div>
<div class="flashcard-back">

**R:** c) `_netdev`. `_netdev` es la opción estándar que indica al sistema que el montaje depende de la red. Sin esta opción, el sistema podría intentar montar el share CIFS antes de que la interfaz de red esté activa, causando un fallo en el arranque.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-004">
<div class="flashcard-front">

**P:** ¿Qué formato se utiliza en el archivo de mapa de autofs para especificar un recurso CIFS?

</div>
<div class="flashcard-back">

**R:** b) `share -fstype=cifs ://servidor/share`. En autofs, el formato para recursos CIFS incluye dos puntos antes de la ruta: `://servidor/share`. Los dos puntos separan el host de la ubicación en el formato estándar de autofs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué permite la opción `multiuser` en un montaje CIFS?

</div>
<div class="flashcard-back">

**R:** b) Que cada usuario acceda al share con sus propias credenciales. Con `multiuser`, el montaje se realiza una sola vez (generalmente por root), pero cada usuario puede establecer sus propias credenciales mediante `cifscreds`. El kernel aplica los permisos individuales basándose en las credenciales de cada usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando de smbclient lista los recursos compartidos disponibles en un servidor?

</div>
<div class="flashcard-back">

**R:** b) `smbclient -L //servidor -U usuario`. La opción `-L` (o `--list`) de smbclient lista todos los recursos compartidos disponibles en el servidor especificado, incluyendo shares de archivos, impresoras e IPC$.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué herramienta se usa para monitorizar las estadísticas de I/O de montajes CIFS?

</div>
<div class="flashcard-back">

**R:** c) cifsiostat. `cifsiostat` es la herramienta específica para monitorizar estadísticas de I/O de montajes CIFS, mostrando bytes leídos/escritos, operaciones por segundo y aperturas/cierres de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el contenido correcto de un archivo de credenciales CIFS?

</div>
<div class="flashcard-back">

**R:** b) `username=user\npassword=pass\ndomain=DOM`. El archivo de credenciales usa el formato `clave=valor` con cada campo en una línea separada: `username=`, `password=` y opcionalmente `domain=`. El archivo debe tener permisos 0600.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-009">
<div class="flashcard-front">

**P:** ¿Cómo se ejecuta un comando en modo batch con smbclient?

</div>
<div class="flashcard-back">

**R:** b) `smbclient //srv/share -U user -c "ls"`. La opción `-c` de smbclient ejecuta los comandos especificados en modo batch (no interactivo) y luego finaliza. Se pueden encadenar múltiples comandos separándolos con punto y coma.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-010">
<div class="flashcard-front">

**P:** Un administrador necesita montar un share CIFS automáticamente solo cuando un usuario accede al directorio, y desmontarlo tras 5 minutos de inactividad. ¿Qué solución es la más adecuada?

</div>
<div class="flashcard-back">

**R:** b) Autofs con `--timeout=300`. Autofs monta automáticamente el recurso cuando un usuario accede al directorio y lo desmonta tras el período de inactividad especificado por `--timeout` (en segundos, 300 = 5 minutos). Esto es más eficiente que un montaje permanente y más elegante que un script cron.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de montaje CIFS especifica la versión del protocolo SMB a utilizar?

</div>
<div class="flashcard-back">

**R:** c) `vers=`. La opción `vers=` especifica la versión del protocolo SMB a utilizar (por ejemplo, `vers=2.0`, `vers=2.1`, `vers=3.0`, `vers=3.1.1`). Es importante para forzar una versión específica cuando hay problemas de compatibilidad o se requiere un nivel mínimo de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué opción de `smbclient` permite la autenticación Kerberos?

</div>
<div class="flashcard-back">

**R:** b) `-k`. La opción `-k` de `smbclient` activa la autenticación Kerberos. El usuario debe tener un ticket TGT válido (obtenido con `kinit`) antes de usar esta opción. `-N` es para acceso sin contraseña y `-A` es para un archivo de autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando se usa para gestionar las credenciales individuales de usuario en un montaje CIFS con la opción `multiuser`?

</div>
<div class="flashcard-back">

**R:** b) `cifscreds`. `cifscreds` es el comando que permite a cada usuario gestionar sus credenciales individuales en un montaje CIFS multiusuario. Con `cifscreds add servidor` se añaden credenciales, con `cifscreds update` se actualizan y con `cifscreds clear` se eliminan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-014">
<div class="flashcard-front">

**P:** ¿Qué diferencia existe entre las opciones `sec=ntlmv2` y `sec=ntlmssp` en mount.cifs?

</div>
<div class="flashcard-back">

**R:** b) `ntlmv2` usa autenticación sin negociación; `ntlmssp` usa el protocolo NTLM Security Support Provider con negociación. `ntlmssp` encapsula la autenticación NTLMv2 dentro del protocolo SPNEGO (Simple and Protected GSSAPI Negotiation Mechanism), lo que permite la negociación del método de autenticación. Es generalmente más compatible con servidores Windows modernos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-015">
<div class="flashcard-front">

**P:** En una entrada de autofs para CIFS, ¿qué significa el símbolo `&` en la siguiente línea?

</div>
<div class="flashcard-back">

**R:** b) Sustituye el valor de la clave accedida por el usuario. En un mapa comodín de autofs, `*` captura cualquier nombre de directorio accedido y `&` se reemplaza por ese mismo nombre. Así, acceder a `/mnt/cifs/proyectos` montaría automáticamente `//servidor/proyectos`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué opción de montaje CIFS permite que systemd monte automáticamente el recurso cuando se accede al punto de montaje?

</div>
<div class="flashcard-back">

**R:** b) `x-systemd.automount`. La opción `x-systemd.automount` en `/etc/fstab` indica a systemd que cree una unidad automount que montará el recurso CIFS bajo demanda la primera vez que se acceda al punto de montaje. Suele combinarse con `_netdev` para montajes de red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-017">
<div class="flashcard-front">

**P:** ¿Cuáles son los permisos recomendados para un archivo de credenciales CIFS?

</div>
<div class="flashcard-back">

**R:** c) 0600. El archivo de credenciales debe tener permisos `0600` (lectura y escritura solo para el propietario) para proteger la contraseña que contiene. Permisos más abiertos expondrían las credenciales a otros usuarios del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué opción de montaje CIFS asigna un UID propietario específico a todos los archivos del punto de montaje?

</div>
<div class="flashcard-back">

**R:** c) `uid=`. La opción `uid=` establece el UID propietario de todos los archivos y directorios del montaje CIFS. Como CIFS no soporta permisos POSIX nativos, esta opción junto con `gid=`, `file_mode=` y `dir_mode=` permite controlar cómo se presentan los permisos en el sistema local.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-019">
<div class="flashcard-front">

**P:** ¿Qué opción de montaje CIFS indica que se deben reintentar indefinidamente si el servidor no responde?

</div>
<div class="flashcard-back">

**R:** c) `hard`. La opción `hard` (que es el comportamiento por defecto) hace que las operaciones de I/O se reintenten indefinidamente si el servidor no responde. La opción `soft` devuelve un error al programa que realizó la operación en lugar de reintentar.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-020">
<div class="flashcard-front">

**P:** ¿Qué opción de `smbclient` permite conectarse sin proporcionar contraseña para acceso anónimo?

</div>
<div class="flashcard-back">

**R:** b) `-N`. La opción `-N` de `smbclient` suprime la solicitud de contraseña, permitiendo conectarse de forma anónima a shares que permitan acceso sin autenticación. Esto es equivalente a usar `sec=none` en mount.cifs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para montar el recurso compartido `//fileserver/datos` en `/mnt/datos` usando un archivo de credenciales ubicado en `/etc/samba/creds`. <input type="text" class="fill-blank" data-answer="mount -t cifs //fileserver/datos /mnt/datos -o credentials=/etc/samba/creds" data-alt="mount.cifs //fileserver/datos /mnt/datos -o credentials=/etc/samba/creds" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mount -t cifs //fileserver/datos /mnt/datos -o credentials=/etc/samba/creds. Se utiliza `mount -t cifs` (o `mount.cifs`) para montar el share CIFS. La opción `credentials=` referencia el archivo con las credenciales para evitar exponer la contraseña en la línea de comandos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para listar los recursos compartidos disponibles en el servidor `//fileserver` con el usuario `admin`. <input type="text" class="fill-blank" data-answer="smbclient -L //fileserver -U admin" data-alt="smbclient -L //fileserver -U admin" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbclient -L //fileserver -U admin. La opción `-L` de `smbclient` lista todos los recursos compartidos disponibles en el servidor especificado. `-U admin` indica el nombre de usuario para la autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para añadir credenciales CIFS para el servidor `fileserver` en un montaje multiusuario. <input type="text" class="fill-blank" data-answer="cifscreds add fileserver" data-alt="cifscreds add fileserver" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cifscreds add fileserver. `cifscreds add` permite a un usuario individual establecer sus credenciales para acceder a un montaje CIFS configurado con la opción `multiuser`. El comando solicitará la contraseña de forma interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para descargar el archivo `informe.pdf` del share `//servidor/docs` como el usuario `jperez` usando `smbclient` en modo batch. <input type="text" class="fill-blank" data-answer="smbclient //servidor/docs -U jperez -c &quot;get informe.pdf&quot;" data-alt="smbclient //servidor/docs -U jperez -c 'get informe.pdf'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbclient //servidor/docs -U jperez -c "get informe.pdf". La opción `-c` de `smbclient` permite ejecutar comandos en modo batch sin entrar en el modo interactivo. El comando `get` descarga el archivo especificado al directorio local actual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para ver las estadísticas de I/O de montajes CIFS con un intervalo de actualización de 5 segundos. <input type="text" class="fill-blank" data-answer="cifsiostat 5" data-alt="cifsiostat 5" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** cifsiostat 5. `cifsiostat` muestra estadísticas de I/O de montajes CIFS como bytes leídos/escritos, operaciones por segundo y aperturas/cierres de archivos. El argumento numérico establece el intervalo de actualización en segundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: `mount.cifs` y `mount -t cifs` son equivalentes. Las opciones se pasan después d...

</div>
<div class="flashcard-back">

**R:** `mount.cifs` y `mount -t cifs` son equivalentes. Las opciones se pasan después de `-o`. Siempre usar `credentials=` en lugar de `password=` en línea de comandos para mayor seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: El archivo de credenciales debe tener permisos 0600 para proteger la contraseña....

</div>
<div class="flashcard-back">

**R:** El archivo de credenciales debe tener permisos 0600 para proteger la contraseña. Se referencia con `credentials=` en las opciones de montaje.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `sec=krb5` usa Kerberos simple, `krb5i` añade integridad, `krb5p` añade cifrado....

</div>
<div class="flashcard-back">

**R:** `sec=krb5` usa Kerberos simple, `krb5i` añade integridad, `krb5p` añade cifrado. Para Kerberos el usuario necesita un ticket válido (`kinit`). `ntlmssp` es la versión negociada de NTLM.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `_netdev` es crucial en fstab para montajes CIFS, ya que indica al sistema que e...

</div>
<div class="flashcard-back">

**R:** `_netdev` es crucial en fstab para montajes CIFS, ya que indica al sistema que espere a que la red esté disponible antes de intentar montar. `x-systemd.automount` proporciona montaje bajo demanda.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Con `multiuser`, el montaje inicial se hace con credenciales mínimas (o Kerberos...

</div>
<div class="flashcard-back">

**R:** Con `multiuser`, el montaje inicial se hace con credenciales mínimas (o Kerberos). Cada usuario establece sus propias credenciales con `cifscreds`, y el kernel aplica los permisos individuales.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: En autofs, el formato para CIFS usa `://servidor/share` (con los dos puntos). El...

</div>
<div class="flashcard-back">

**R:** En autofs, el formato para CIFS usa `://servidor/share` (con los dos puntos). El `--timeout` define el tiempo en segundos antes de desmontar por inactividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: `smbclient -L //servidor` lista shares. `smbclient -c "comando"` ejecuta en modo...

</div>
<div class="flashcard-back">

**R:** `smbclient -L //servidor` lista shares. `smbclient -c "comando"` ejecuta en modo batch. `-k` activa Kerberos. `-N` permite acceso sin contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-033">
<div class="flashcard-front">

**P:** Tip de examen: `cifsiostat` es la herramienta para monitorizar el rendimiento de montajes CIFS....

</div>
<div class="flashcard-back">

**R:** `cifsiostat` es la herramienta para monitorizar el rendimiento de montajes CIFS. Es parte del paquete `sysstat` en muchas distribuciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-034">
<div class="flashcard-front">

**P:** Que hace el comando `username=`?

</div>
<div class="flashcard-back">

**R:** Nombre de usuario para autenticación

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-035">
<div class="flashcard-front">

**P:** Que hace el comando `password=`?

</div>
<div class="flashcard-back">

**R:** Contraseña (inseguro en línea de comandos)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-036">
<div class="flashcard-front">

**P:** Que hace el comando `uid=`?

</div>
<div class="flashcard-back">

**R:** UID propietario de los archivos montados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-037">
<div class="flashcard-front">

**P:** Que hace el comando `gid=`?

</div>
<div class="flashcard-back">

**R:** GID propietario de los archivos montados

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-038">
<div class="flashcard-front">

**P:** Que hace el comando `file_mode=`?

</div>
<div class="flashcard-back">

**R:** Permisos para archivos (ej: 0644)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-039">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Los clientes Linux pueden acceder a recursos compartidos SMB/CIFS de servidores Windows o Samba usando varias herramientas: `mount.cifs` para montaje en el sistema de archivos, `smbclient` para acceso

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-040">
<div class="flashcard-front">

**P:** Que es/son Opciones de seguridad (sec=)?

</div>
<div class="flashcard-back">

**R:** La opción `sec=` define el método de autenticación:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-041">
<div class="flashcard-front">

**P:** Que es/son Montaje multiusuario?

</div>
<div class="flashcard-back">

**R:** El montaje multiusuario permite que cada usuario acceda al share con sus propias credenciales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-042">
<div class="flashcard-front">

**P:** Que es/son Autofs para CIFS?

</div>
<div class="flashcard-back">

**R:** Autofs monta recursos compartidos automáticamente cuando se accede a ellos y los desmonta tras un período de inactividad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-043">
<div class="flashcard-front">

**P:** Que es/son cifsiostat?

</div>
<div class="flashcard-back">

**R:** `cifsiostat` muestra estadísticas de I/O de montajes CIFS:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-044">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

