---
title: "303.2 - Ejercicios: Seguridad de Compartición"
description: "Ejercicios de práctica para seguridad de shares en Samba"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.2"
peso: 4
tags:
  - lpic-3
  - tema-303
  - samba
  - seguridad
  - ejercicios
---

# 303.2 Ejercicios - Seguridad de Compartición

### Pregunta 1
Un share tiene `writable = yes` en smb.conf, pero el directorio en el sistema de archivos tiene permisos `drwxr-xr-x root root`. ¿Qué sucede cuando un usuario no-root intenta escribir?

a) Puede escribir porque Samba lo permite
b) No puede escribir porque los permisos del sistema de archivos lo impiden
c) Samba ajusta automáticamente los permisos del sistema de archivos
d) El acceso se deniega completamente, incluyendo la lectura

<details><summary>Respuesta</summary>

**b) No puede escribir porque los permisos del sistema de archivos lo impiden**

El acceso efectivo es la intersección de los permisos de Samba y los permisos del sistema de archivos. Samba nunca puede otorgar más permisos de los que permite el sistema de archivos subyacente.
</details>

### Pregunta 2
¿Qué herramienta se utiliza para gestionar ACLs NT en recursos compartidos de Samba desde la línea de comandos?

a) setfacl
b) chmod
c) smbcacls
d) ntacl

<details><summary>Respuesta</summary>

**c) smbcacls**

`smbcacls` es la herramienta de línea de comandos para ver y gestionar ACLs NT (Windows) en recursos compartidos de Samba. `setfacl` gestiona ACLs POSIX, no ACLs NT.
</details>

### Pregunta 3
¿Qué parámetro de smb.conf hace que los usuarios solo vean los shares a los que tienen acceso?

a) browseable = no
b) access based share enum = yes
c) hide unreadable = yes
d) valid users = %U

<details><summary>Respuesta</summary>

**b) access based share enum = yes**

`access based share enum = yes` filtra la lista de shares visibles basándose en los permisos del usuario. Solo muestra los shares a los que el usuario tiene acceso. `browseable = no` oculta un share para todos los usuarios.
</details>

### Pregunta 4
¿Cuál es el formato correcto para añadir una ACL NT con `smbcacls`?

a) `smbcacls //srv/share archivo -U admin -a "DOMINIO\usuario:rwx"`
b) `smbcacls //srv/share archivo -U admin -a "ACL:DOMINIO\usuario:ALLOWED/0x0/FULL"`
c) `smbcacls //srv/share archivo -U admin --add "usuario=FULL"`
d) `smbcacls //srv/share archivo -U admin -a "NT:DOMINIO\usuario:FULL_CONTROL"`

<details><summary>Respuesta</summary>

**b) `smbcacls //srv/share archivo -U admin -a "ACL:DOMINIO\usuario:ALLOWED/0x0/FULL"`**

El formato correcto de una ACL NT en smbcacls es `ACL:quien:TIPO/FLAGS/PERMISOS`. El tipo puede ser ALLOWED o DENIED, los flags controlan la herencia (0x0 = sin herencia), y los permisos pueden ser FULL, READ, CHANGE, WRITE o una máscara hexadecimal.
</details>

### Pregunta 5
¿Qué efecto tiene `inherit permissions = yes`?

a) Los nuevos archivos heredan las ACLs NT del directorio padre
b) Los nuevos archivos heredan los permisos POSIX del directorio padre, ignorando create mask
c) Los permisos de smb.conf se heredan entre shares
d) Los permisos del share se propagan a todos los subdirectorios existentes

<details><summary>Respuesta</summary>

**b) Los nuevos archivos heredan los permisos POSIX del directorio padre, ignorando create mask**

`inherit permissions = yes` hace que los nuevos archivos y directorios hereden los permisos POSIX del directorio padre en lugar de utilizar los valores de `create mask` y `directory mask`.
</details>

### Pregunta 6
Si se configuran tanto `hosts allow` como `hosts deny` en un share, ¿cuál tiene prioridad?

a) `hosts deny` siempre tiene prioridad
b) `hosts allow` tiene prioridad sobre `hosts deny`
c) El último definido en smb.conf tiene prioridad
d) Se produce un error de configuración

<details><summary>Respuesta</summary>

**b) `hosts allow` tiene prioridad sobre `hosts deny`**

Cuando ambos están presentes, `hosts allow` se evalúa primero. Si una IP coincide con `hosts allow`, se le permite el acceso incluso si también aparece en `hosts deny`.
</details>

### Pregunta 7
¿Qué módulo VFS permite almacenar ACLs NT completas en atributos extendidos del sistema de archivos?

a) vfs objects = recycle
b) vfs objects = acl_xattr
c) vfs objects = ntacl
d) vfs objects = full_audit

<details><summary>Respuesta</summary>

**b) vfs objects = acl_xattr**

El módulo `acl_xattr` almacena las ACLs NT completas como atributos extendidos (xattrs) en el sistema de archivos Linux, preservando toda la información de permisos Windows incluyendo herencia.
</details>

### Pregunta 8
¿Qué parámetro permite mapear los flags de herencia de ACLs NT a ACLs POSIX por defecto?

a) inherit permissions
b) inherit acls
c) map acl inherit
d) nt acl support

<details><summary>Respuesta</summary>

**c) map acl inherit**

`map acl inherit = yes` traduce los flags de herencia de las ACLs NT (como "aplicar a subcarpetas y archivos") a ACLs POSIX por defecto en Linux, permitiendo que la herencia configurada desde Windows funcione correctamente.
</details>

### Pregunta 9
¿Qué comando establece una ACL POSIX por defecto para que todos los archivos nuevos en un directorio sean legibles por el grupo `contabilidad`?

a) `setfacl -m g:contabilidad:r /srv/datos`
b) `setfacl -d -m g:contabilidad:r /srv/datos`
c) `chmod g+r /srv/datos`
d) `smbcacls //srv/datos -a "ACL:contabilidad:r"`

<details><summary>Respuesta</summary>

**b) `setfacl -d -m g:contabilidad:r /srv/datos`**

La opción `-d` (o `--default`) de `setfacl` establece una ACL por defecto que se aplica automáticamente a los nuevos archivos y directorios creados dentro del directorio especificado.
</details>

### Pregunta 10
Un administrador quiere que los usuarios de Windows puedan gestionar permisos desde la pestaña "Seguridad" de las propiedades de archivo. ¿Qué combinación de parámetros es necesaria?

a) `writable = yes` y `valid users = @todos`
b) `nt acl support = yes`, `inherit acls = yes` y `map acl inherit = yes`
c) `security = user` y `guest ok = yes`
d) `acl group control = yes` solamente

<details><summary>Respuesta</summary>

**b) `nt acl support = yes`, `inherit acls = yes` y `map acl inherit = yes`**

Para la integración completa con la pestaña de seguridad de Windows se necesita: `nt acl support = yes` (activado por defecto) para habilitar el soporte de ACLs NT, `inherit acls = yes` para la herencia de ACLs y `map acl inherit = yes` para mapear la herencia NT a POSIX.
</details>

### Pregunta 11

¿Qué opción de `smbcacls` se utiliza para modificar una ACL NT existente en un archivo?

a) `-a`
b) `-M`
c) `-D`
d) `-C`

<details><summary>Respuesta</summary>

**b) `-M`**

La opción `-M` de `smbcacls` modifica una ACL existente en el descriptor de seguridad del archivo. `-a` añade una nueva ACL, `-D` elimina una ACL y `-C` cambia el propietario. El formato del comando es: `smbcacls //servidor/share archivo -U admin -M "ACL:DOMINIO\usuario:ALLOWED/0x0/READ"`.
</details>

### Pregunta 12

¿Qué componentes forman el descriptor de seguridad (Security Descriptor) de un archivo en el modelo NT?

a) Solo los permisos rwx y el propietario
b) DACL, SACL, propietario y grupo
c) Solo la DACL y el propietario
d) Los permisos POSIX y las ACLs extendidas

<details><summary>Respuesta</summary>

**b) DACL, SACL, propietario y grupo**

El Security Descriptor de NT incluye: la DACL (Discretionary Access Control List) que define los permisos de acceso, la SACL (System Access Control List) para auditoría, el propietario del objeto y el grupo asociado. Samba implementa este modelo completo para compatibilidad con Windows.
</details>

### Pregunta 13

¿Qué efecto tiene `acl group control = yes` en un recurso compartido de Samba?

a) Solo el administrador puede gestionar ACLs
b) El grupo propietario del archivo puede gestionar las ACLs del mismo
c) Se desactiva el control de ACLs por grupo
d) Todos los grupos pueden modificar cualquier ACL

<details><summary>Respuesta</summary>

**b) El grupo propietario del archivo puede gestionar las ACLs del mismo**

Con `acl group control = yes`, los miembros del grupo propietario de un archivo pueden modificar sus ACLs, no solo el propietario individual o root. Esto es útil cuando equipos de trabajo necesitan gestionar permisos desde la pestaña de seguridad de Windows sin intervención del administrador.
</details>

### Pregunta 14

¿Cuál es la función de `store dos attributes = yes` en un recurso compartido de Samba?

a) Almacenar la fecha de creación de archivos DOS
b) Almacenar atributos DOS (oculto, sistema, archivo, solo lectura) como atributos extendidos del sistema de archivos
c) Convertir automáticamente archivos al formato DOS
d) Habilitar nombres de archivo cortos (8.3)

<details><summary>Respuesta</summary>

**b) Almacenar atributos DOS (oculto, sistema, archivo, solo lectura) como atributos extendidos del sistema de archivos**

`store dos attributes = yes` permite que Samba almacene los atributos de archivo de Windows (Hidden, System, Archive, Read-Only) como atributos extendidos (xattrs) en el sistema de archivos Linux. Sin este parámetro, Samba intenta mapear estos atributos a bits de permisos POSIX, lo cual es impreciso.
</details>

### Pregunta 15

En una configuración con `hosts allow = 192.168.1.0/24` y `hosts deny = ALL` en un share, ¿qué sucede con un cliente en la dirección 192.168.1.50?

a) Se deniega el acceso porque `hosts deny = ALL` tiene prioridad
b) Se permite el acceso porque `hosts allow` se evalúa primero y tiene prioridad
c) Se produce un error de configuración
d) El acceso depende del orden en smb.conf

<details><summary>Respuesta</summary>

**b) Se permite el acceso porque `hosts allow` se evalúa primero y tiene prioridad**

Cuando están presentes tanto `hosts allow` como `hosts deny`, `hosts allow` se evalúa primero. Si la IP del cliente coincide con `hosts allow`, se permite el acceso independientemente de lo que diga `hosts deny`. El cliente 192.168.1.50 coincide con la red 192.168.1.0/24, por lo que se le permite acceder.
</details>

### Pregunta 16

¿Qué tipo de ACL NT se utiliza para registrar intentos de acceso con fines de auditoría?

a) DACL
b) SACL
c) RACL
d) FACL

<details><summary>Respuesta</summary>

**b) SACL**

La SACL (System Access Control List) define qué operaciones de acceso deben registrarse para auditoría. A diferencia de la DACL que controla el acceso, la SACL genera entradas en el registro de seguridad cuando se producen los accesos especificados (exitosos o fallidos). Samba soporta SACL a través del módulo VFS `full_audit`.
</details>

### Pregunta 17

¿Qué diferencia hay entre configurar `hosts allow` en `[global]` y en un share individual?

a) No hay diferencia, ambos tienen el mismo efecto
b) En `[global]` se aplica a todos los servicios del servidor; en el share solo a ese recurso específico
c) En `[global]` solo afecta a la administración; en el share afecta a los datos
d) En el share tiene prioridad sobre `[global]` y lo reemplaza completamente

<details><summary>Respuesta</summary>

**b) En `[global]` se aplica a todos los servicios del servidor; en el share solo a ese recurso específico**

Cuando `hosts allow` se configura en `[global]`, afecta a todas las conexiones al servidor Samba. Si se configura en un share individual, solo se aplica a ese recurso. Un share puede definir restricciones adicionales sobre las de `[global]`. Ambas restricciones se evalúan de forma independiente.
</details>

### Pregunta 18

¿Qué comando de Linux se usa para establecer una ACL POSIX por defecto que conceda permisos de lectura y escritura al usuario `juan` en todos los archivos nuevos creados dentro de `/srv/datos`?

a) `chmod -R u+rw /srv/datos`
b) `setfacl -d -m u:juan:rw /srv/datos`
c) `setfacl -m u:juan:rw /srv/datos`
d) `chacl -d u:juan:rw /srv/datos`

<details><summary>Respuesta</summary>

**b) `setfacl -d -m u:juan:rw /srv/datos`**

La opción `-d` de `setfacl` establece una ACL por defecto (default ACL) que se hereda automáticamente en los nuevos archivos y directorios creados dentro del directorio. Sin `-d`, la ACL solo se aplica al directorio en sí pero no a los nuevos objetos creados dentro.
</details>

### Pregunta 19

¿Cuál es el valor por defecto de `nt acl support` en smb.conf?

a) no
b) yes
c) auto
d) disabled

<details><summary>Respuesta</summary>

**b) yes**

`nt acl support = yes` es el valor predeterminado en Samba. Esto significa que Samba mapea automáticamente las ACLs POSIX del sistema de archivos a ACLs NT cuando los clientes Windows consultan los permisos. Si se desactiva, los clientes Windows no podrán ver ni gestionar permisos desde la pestaña de seguridad.
</details>

### Pregunta 20

En la salida de `smbcacls`, ¿qué significan los flags de herencia `0x03`?

a) Sin herencia
b) Herencia a objetos hijos y contenedores hijos
c) Herencia solo a archivos
d) Solo herencia al primer nivel

<details><summary>Respuesta</summary>

**b) Herencia a objetos hijos y contenedores hijos**

Los flags `0x03` representan la combinación de herencia a contenedores hijos (subdirectorios) y objetos hijos (archivos). `0x0` significa sin herencia, `0x01` herencia a objetos, `0x02` herencia a contenedores y `0x03` es la combinación de ambos. Esto es equivalente a "Aplicar a esta carpeta, subcarpetas y archivos" en Windows.
</details>

### Pregunta 21

Escriba el comando para ver las ACLs NT del archivo `informe.docx` en el share `datos` del servidor `srv1` como el usuario `admin`.

<input type="text" class="fill-blank" data-answer="smbcacls //srv1/datos informe.docx -U admin" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbcacls //srv1/datos informe.docx -U admin**

`smbcacls` muestra el descriptor de seguridad completo del archivo, incluyendo el propietario, el grupo y todas las entradas de la DACL con sus permisos, tipos (ALLOWED/DENIED) y flags de herencia.
</details>

### Pregunta 22

Escriba el comando para ver las ACLs POSIX del directorio `/srv/samba/datos`.

<input type="text" class="fill-blank" data-answer="getfacl /srv/samba/datos" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**getfacl /srv/samba/datos**

`getfacl` muestra las ACLs POSIX de un archivo o directorio, incluyendo las ACLs estándar (propietario, grupo, otros), las ACLs extendidas (usuarios y grupos específicos), la máscara y las ACLs por defecto (heredables) si las hay.
</details>

### Pregunta 23

Escriba el comando para establecer una ACL POSIX que otorgue permisos de lectura, escritura y ejecución al grupo `contabilidad` en el directorio `/srv/samba/finanzas`.

<input type="text" class="fill-blank" data-answer="setfacl -m g:contabilidad:rwx /srv/samba/finanzas" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**setfacl -m g:contabilidad:rwx /srv/samba/finanzas**

`setfacl -m` modifica las ACLs POSIX del directorio especificado. `g:contabilidad:rwx` define una ACL para el grupo `contabilidad` con permisos completos. Para que la ACL sea heredada por nuevos archivos, se debe añadir también una ACL por defecto con `-d -m`.
</details>

### Pregunta 24

Escriba el parámetro de smb.conf que habilita la enumeración de shares basada en los permisos de acceso del usuario.

<input type="text" class="fill-blank" data-answer="access based share enum = yes" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**access based share enum = yes**

Este parámetro se configura en la sección `[global]` de smb.conf y hace que cada usuario solo vea los recursos compartidos a los que tiene acceso. Los shares sin permisos para el usuario quedan ocultos del listado. Es diferente de `browseable = no`, que oculta el share para todos.
</details>

### Pregunta 25

Escriba el comando para verificar el acceso efectivo al share `datos` del servidor `fileserver` como el usuario `pedro`, listando los archivos.

<input type="text" class="fill-blank" data-answer='smbclient //fileserver/datos -U pedro -c "ls"' data-alt="smbclient //fileserver/datos -U pedro -c 'ls'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**smbclient //fileserver/datos -U pedro -c "ls"**

`smbclient` permite conectarse a un recurso compartido y ejecutar comandos. La opción `-c "ls"` ejecuta el comando `ls` para listar archivos y cierra la conexión. Esto permite verificar rápidamente si un usuario tiene acceso al share y puede ver los archivos.
</details>
