---
title: "303.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.2"
---

# Flashcards: 303.2 - Seguridad De Comparticion

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-001">
<div class="flashcard-front">

**P:** Un share tiene `writable = yes` en smb.conf, pero el directorio en el sistema de archivos tiene permisos `drwxr-xr-x root root`. ¿Qué sucede cuando un usuario no-root intenta escribir?

</div>
<div class="flashcard-back">

**R:** b) No puede escribir porque los permisos del sistema de archivos lo impiden. El acceso efectivo es la intersección de los permisos de Samba y los permisos del sistema de archivos. Samba nunca puede otorgar más permisos de los que permite el sistema de archivos subyacente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-002">
<div class="flashcard-front">

**P:** ¿Qué herramienta se utiliza para gestionar ACLs NT en recursos compartidos de Samba desde la línea de comandos?

</div>
<div class="flashcard-back">

**R:** c) smbcacls. `smbcacls` es la herramienta de línea de comandos para ver y gestionar ACLs NT (Windows) en recursos compartidos de Samba. `setfacl` gestiona ACLs POSIX, no ACLs NT.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-003">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf hace que los usuarios solo vean los shares a los que tienen acceso?

</div>
<div class="flashcard-back">

**R:** b) access based share enum = yes. `access based share enum = yes` filtra la lista de shares visibles basándose en los permisos del usuario. Solo muestra los shares a los que el usuario tiene acceso. `browseable = no` oculta un share para todos los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-004">
<div class="flashcard-front">

**P:** ¿Cuál es el formato correcto para añadir una ACL NT con `smbcacls`?

</div>
<div class="flashcard-back">

**R:** b) `smbcacls //srv/share archivo -U admin -a "ACL:DOMINIO\usuario:ALLOWED/0x0/FULL"`. El formato correcto de una ACL NT en smbcacls es `ACL:quien:TIPO/FLAGS/PERMISOS`. El tipo puede ser ALLOWED o DENIED, los flags controlan la herencia (0x0 = sin herencia), y los permisos pueden ser FULL, READ, CHANGE, WRITE o una máscara hexadecimal.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-005">
<div class="flashcard-front">

**P:** ¿Qué efecto tiene `inherit permissions = yes`?

</div>
<div class="flashcard-back">

**R:** b) Los nuevos archivos heredan los permisos POSIX del directorio padre, ignorando create mask. `inherit permissions = yes` hace que los nuevos archivos y directorios hereden los permisos POSIX del directorio padre en lugar de utilizar los valores de `create mask` y `directory mask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-006">
<div class="flashcard-front">

**P:** Si se configuran tanto `hosts allow` como `hosts deny` en un share, ¿cuál tiene prioridad?

</div>
<div class="flashcard-back">

**R:** b) `hosts allow` tiene prioridad sobre `hosts deny`. Cuando ambos están presentes, `hosts allow` se evalúa primero. Si una IP coincide con `hosts allow`, se le permite el acceso incluso si también aparece en `hosts deny`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-007">
<div class="flashcard-front">

**P:** ¿Qué módulo VFS permite almacenar ACLs NT completas en atributos extendidos del sistema de archivos?

</div>
<div class="flashcard-back">

**R:** b) vfs objects = acl_xattr. El módulo `acl_xattr` almacena las ACLs NT completas como atributos extendidos (xattrs) en el sistema de archivos Linux, preservando toda la información de permisos Windows incluyendo herencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-008">
<div class="flashcard-front">

**P:** ¿Qué parámetro permite mapear los flags de herencia de ACLs NT a ACLs POSIX por defecto?

</div>
<div class="flashcard-back">

**R:** c) map acl inherit. `map acl inherit = yes` traduce los flags de herencia de las ACLs NT (como "aplicar a subcarpetas y archivos") a ACLs POSIX por defecto en Linux, permitiendo que la herencia configurada desde Windows funcione correctamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando establece una ACL POSIX por defecto para que todos los archivos nuevos en un directorio sean legibles por el grupo `contabilidad`?

</div>
<div class="flashcard-back">

**R:** b) `setfacl -d -m g:contabilidad:r /srv/datos`. La opción `-d` (o `--default`) de `setfacl` establece una ACL por defecto que se aplica automáticamente a los nuevos archivos y directorios creados dentro del directorio especificado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere que los usuarios de Windows puedan gestionar permisos desde la pestaña "Seguridad" de las propiedades de archivo. ¿Qué combinación de parámetros es necesaria?

</div>
<div class="flashcard-back">

**R:** b) `nt acl support = yes`, `inherit acls = yes` y `map acl inherit = yes`. Para la integración completa con la pestaña de seguridad de Windows se necesita: `nt acl support = yes` (activado por defecto) para habilitar el soporte de ACLs NT, `inherit acls = yes` para la herencia de ACLs y `map acl inherit = yes` para mapear la herencia NT a POSIX.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-011">
<div class="flashcard-front">

**P:** ¿Qué opción de `smbcacls` se utiliza para modificar una ACL NT existente en un archivo?

</div>
<div class="flashcard-back">

**R:** b) `-M`. La opción `-M` de `smbcacls` modifica una ACL existente en el descriptor de seguridad del archivo. `-a` añade una nueva ACL, `-D` elimina una ACL y `-C` cambia el propietario. El formato del comando es: `smbcacls //servidor/share archivo -U admin -M "ACL:DOMINIO\usuario:ALLOWED/0x0/READ"`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-012">
<div class="flashcard-front">

**P:** ¿Qué componentes forman el descriptor de seguridad (Security Descriptor) de un archivo en el modelo NT?

</div>
<div class="flashcard-back">

**R:** b) DACL, SACL, propietario y grupo. El Security Descriptor de NT incluye: la DACL (Discretionary Access Control List) que define los permisos de acceso, la SACL (System Access Control List) para auditoría, el propietario del objeto y el grupo asociado. Samba implementa este modelo completo para compatibilidad con Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-013">
<div class="flashcard-front">

**P:** ¿Qué efecto tiene `acl group control = yes` en un recurso compartido de Samba?

</div>
<div class="flashcard-back">

**R:** b) El grupo propietario del archivo puede gestionar las ACLs del mismo. Con `acl group control = yes`, los miembros del grupo propietario de un archivo pueden modificar sus ACLs, no solo el propietario individual o root. Esto es útil cuando equipos de trabajo necesitan gestionar permisos desde la pestaña de seguridad de Windows sin intervención del administrador.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-014">
<div class="flashcard-front">

**P:** ¿Cuál es la función de `store dos attributes = yes` en un recurso compartido de Samba?

</div>
<div class="flashcard-back">

**R:** b) Almacenar atributos DOS (oculto, sistema, archivo, solo lectura) como atributos extendidos del sistema de archivos. `store dos attributes = yes` permite que Samba almacene los atributos de archivo de Windows (Hidden, System, Archive, Read-Only) como atributos extendidos (xattrs) en el sistema de archivos Linux. Sin este parámetro, Samba intenta mapear estos atributos a bits de permisos POSIX, lo cual es impreciso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-015">
<div class="flashcard-front">

**P:** En una configuración con `hosts allow = 192.168.1.0/24` y `hosts deny = ALL` en un share, ¿qué sucede con un cliente en la dirección 192.168.1.50?

</div>
<div class="flashcard-back">

**R:** b) Se permite el acceso porque `hosts allow` se evalúa primero y tiene prioridad. Cuando están presentes tanto `hosts allow` como `hosts deny`, `hosts allow` se evalúa primero. Si la IP del cliente coincide con `hosts allow`, se permite el acceso independientemente de lo que diga `hosts deny`. El cliente 192.168.1.50 coincide con la red 192.168.1.0/24, por lo que se le permite acceder.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-016">
<div class="flashcard-front">

**P:** ¿Qué tipo de ACL NT se utiliza para registrar intentos de acceso con fines de auditoría?

</div>
<div class="flashcard-back">

**R:** b) SACL. La SACL (System Access Control List) define qué operaciones de acceso deben registrarse para auditoría. A diferencia de la DACL que controla el acceso, la SACL genera entradas en el registro de seguridad cuando se producen los accesos especificados (exitosos o fallidos). Samba soporta SACL a través del módulo VFS `full_audit`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-017">
<div class="flashcard-front">

**P:** ¿Qué diferencia hay entre configurar `hosts allow` en `[global]` y en un share individual?

</div>
<div class="flashcard-back">

**R:** b) En `[global]` se aplica a todos los servicios del servidor; en el share solo a ese recurso específico. Cuando `hosts allow` se configura en `[global]`, afecta a todas las conexiones al servidor Samba. Si se configura en un share individual, solo se aplica a ese recurso. Un share puede definir restricciones adicionales sobre las de `[global]`. Ambas restricciones se evalúan de forma independiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando de Linux se usa para establecer una ACL POSIX por defecto que conceda permisos de lectura y escritura al usuario `juan` en todos los archivos nuevos creados dentro de `/srv/datos`?

</div>
<div class="flashcard-back">

**R:** b) `setfacl -d -m u:juan:rw /srv/datos`. La opción `-d` de `setfacl` establece una ACL por defecto (default ACL) que se hereda automáticamente en los nuevos archivos y directorios creados dentro del directorio. Sin `-d`, la ACL solo se aplica al directorio en sí pero no a los nuevos objetos creados dentro.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-019">
<div class="flashcard-front">

**P:** ¿Cuál es el valor por defecto de `nt acl support` en smb.conf?

</div>
<div class="flashcard-back">

**R:** b) yes. `nt acl support = yes` es el valor predeterminado en Samba. Esto significa que Samba mapea automáticamente las ACLs POSIX del sistema de archivos a ACLs NT cuando los clientes Windows consultan los permisos. Si se desactiva, los clientes Windows no podrán ver ni gestionar permisos desde la pestaña de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-020">
<div class="flashcard-front">

**P:** En la salida de `smbcacls`, ¿qué significan los flags de herencia `0x03`?

</div>
<div class="flashcard-back">

**R:** b) Herencia a objetos hijos y contenedores hijos. Los flags `0x03` representan la combinación de herencia a contenedores hijos (subdirectorios) y objetos hijos (archivos). `0x0` significa sin herencia, `0x01` herencia a objetos, `0x02` herencia a contenedores y `0x03` es la combinación de ambos. Esto es equivalente a "Aplicar a esta carpeta, subcarpetas y archivos" en Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para ver las ACLs NT del archivo `informe.docx` en el share `datos` del servidor `srv1` como el usuario `admin`. <input type="text" class="fill-blank" data-answer="smbcacls //srv1/datos informe.docx -U admin" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbcacls //srv1/datos informe.docx -U admin. `smbcacls` muestra el descriptor de seguridad completo del archivo, incluyendo el propietario, el grupo y todas las entradas de la DACL con sus permisos, tipos (ALLOWED/DENIED) y flags de herencia.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para ver las ACLs POSIX del directorio `/srv/samba/datos`. <input type="text" class="fill-blank" data-answer="getfacl /srv/samba/datos" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** getfacl /srv/samba/datos. `getfacl` muestra las ACLs POSIX de un archivo o directorio, incluyendo las ACLs estándar (propietario, grupo, otros), las ACLs extendidas (usuarios y grupos específicos), la máscara y las ACLs por defecto (heredables) si las hay.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-023">
<div class="flashcard-front">

**P:** Escriba el comando para establecer una ACL POSIX que otorgue permisos de lectura, escritura y ejecución al grupo `contabilidad` en el directorio `/srv/samba/finanzas`. <input type="text" class="fill-blank" data-answer="setfacl -m g:contabilidad:rwx /srv/samba/finanzas" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** setfacl -m g:contabilidad:rwx /srv/samba/finanzas. `setfacl -m` modifica las ACLs POSIX del directorio especificado. `g:contabilidad:rwx` define una ACL para el grupo `contabilidad` con permisos completos. Para que la ACL sea heredada por nuevos archivos, se debe añadir también una ACL por defecto con `-d -m`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-024">
<div class="flashcard-front">

**P:** Escriba el parámetro de smb.conf que habilita la enumeración de shares basada en los permisos de acceso del usuario. <input type="text" class="fill-blank" data-answer="access based share enum = yes" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** access based share enum = yes. Este parámetro se configura en la sección `[global]` de smb.conf y hace que cada usuario solo vea los recursos compartidos a los que tiene acceso. Los shares sin permisos para el usuario quedan ocultos del listado. Es diferente de `browseable = no`, que oculta el share para todos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-025">
<div class="flashcard-front">

**P:** Escriba el comando para verificar el acceso efectivo al share `datos` del servidor `fileserver` como el usuario `pedro`, listando los archivos. <input type="text" class="fill-blank" data-answer='smbclient //fileserver/datos -U pedro -c "ls"' data-alt="smbclient //fileserver/datos -U pedro -c 'ls'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** smbclient //fileserver/datos -U pedro -c "ls". `smbclient` permite conectarse a un recurso compartido y ejecutar comandos. La opción `-c "ls"` ejecuta el comando `ls` para listar archivos y cierra la conexión. Esto permite verificar rápidamente si un usuario tiene acceso al share y puede ver los archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Samba nunca puede otorgar más permisos de los que permite el sistema de archivos...

</div>
<div class="flashcard-back">

**R:** Samba nunca puede otorgar más permisos de los que permite el sistema de archivos. Si el sistema de archivos deniega la escritura, aunque Samba permita `writable = yes`, el usuario no podrá escribir.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Las ACLs por defecto (`default:`) se aplican automáticamente a los nuevos archiv...

</div>
<div class="flashcard-back">

**R:** Las ACLs por defecto (`default:`) se aplican automáticamente a los nuevos archivos y directorios creados dentro del directorio. Son esenciales para mantener permisos consistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: `smbcacls` es la herramienta CLI para gestionar permisos NT en shares de Samba. ...

</div>
<div class="flashcard-back">

**R:** `smbcacls` es la herramienta CLI para gestionar permisos NT en shares de Samba. Conocer su sintaxis y las opciones `-a` (añadir), `-M` (modificar), `-D` (eliminar) es fundamental.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `inherit permissions = yes` hace que los permisos POSIX del directorio padre se ...

</div>
<div class="flashcard-back">

**R:** `inherit permissions = yes` hace que los permisos POSIX del directorio padre se hereden, sobrescribiendo `create mask` y `directory mask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: `map acl inherit = yes` es esencial para que la herencia de permisos configurada...

</div>
<div class="flashcard-back">

**R:** `map acl inherit = yes` es esencial para que la herencia de permisos configurada desde Windows se traduzca correctamente a ACLs POSIX en Linux.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: `vfs objects = acl_xattr` permite almacenar ACLs NT completas como atributos ext...

</div>
<div class="flashcard-back">

**R:** `vfs objects = acl_xattr` permite almacenar ACLs NT completas como atributos extendidos en el sistema de archivos Linux, manteniendo la fidelidad total de los permisos Windows.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: `access based share enum = yes` en `[global]` oculta automáticamente los shares ...

</div>
<div class="flashcard-back">

**R:** `access based share enum = yes` en `[global]` oculta automáticamente los shares a los que el usuario no tiene acceso. Es diferente de `browseable = no`, que oculta el share para todos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-033">
<div class="flashcard-front">

**P:** Tip de examen: `hosts allow` y `hosts deny` pueden usarse tanto en `[global]` como en shares in...

</div>
<div class="flashcard-back">

**R:** `hosts allow` y `hosts deny` pueden usarse tanto en `[global]` como en shares individuales. Si ambos están presentes, `hosts allow` tiene prioridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La seguridad de los recursos compartidos en Samba implica la interacción entre múltiples capas de permisos: los permisos POSIX del sistema de archivos Linux, las ACLs POSIX extendidas, las ACLs NT de W

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son ACLs POSIX en recursos compartidos?

</div>
<div class="flashcard-back">

**R:** Las ACLs POSIX proporcionan control de acceso más granular que los permisos Unix tradicionales:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son Integración con la pestaña de permisos de Windows?

</div>
<div class="flashcard-back">

**R:** Para que los usuarios puedan gestionar permisos desde la pestaña "Seguridad" de Windows:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.2">
</div>

<div class="flashcard" data-id="303.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

