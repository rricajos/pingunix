---
title: "303.4 - Ejercicios: Compartición de Impresoras"
description: "Ejercicios de práctica para compartición de impresoras con Samba y CUPS"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.4"
peso: 2
tags:
  - lpic-3
  - tema-303
  - samba
  - cups
  - ejercicios
---

# 303.4 Ejercicios - Compartición de Impresoras

### Pregunta 1
¿Qué parámetros en la sección [global] de smb.conf son esenciales para la integración con CUPS?

a) `cups enable = yes` y `cups backend = local`
b) `printing = cups` y `printcap name = cups`
c) `printer system = cups` y `cups path = /etc/cups`
d) `use cups = yes` y `cups driver = generic`

<details><summary>Respuesta</summary>

**b) `printing = cups` y `printcap name = cups`**

`printing = cups` indica a Samba que use CUPS como sistema de impresión, y `printcap name = cups` le dice que obtenga la lista de impresoras directamente de CUPS en lugar de un archivo printcap tradicional.
</details>

### Pregunta 2
¿Qué parámetro distingue un share de impresora de un share de archivos?

a) `writable = no`
b) `browseable = no`
c) `printable = yes`
d) `printing = yes`

<details><summary>Respuesta</summary>

**c) `printable = yes`**

`printable = yes` es el parámetro que define un share como share de impresión, permitiendo que los clientes envíen trabajos de impresión. Sin este parámetro, el share solo funciona como recurso compartido de archivos.
</details>

### Pregunta 3
¿Cuál es el propósito del share [print$]?

a) Almacenar los trabajos de impresión en cola
b) Almacenar los drivers de impresora para distribución automática a clientes Windows
c) Configurar el servicio CUPS
d) Almacenar los logs de impresión

<details><summary>Respuesta</summary>

**b) Almacenar los drivers de impresora para distribución automática a clientes Windows**

El share `[print$]` contiene los drivers de impresora organizados por arquitectura (x64, W32X86, etc.). Cuando un cliente Windows se conecta a una impresora compartida, puede descargar automáticamente el driver adecuado desde este share (Point-and-Print).
</details>

### Pregunta 4
¿Qué efecto tiene `cups options = raw` en smb.conf?

a) Los trabajos de impresión se comprimen antes de enviarlos
b) CUPS no aplica filtros adicionales al trabajo de impresión
c) Se habilita la impresión bidireccional
d) Los trabajos se envían en formato PostScript

<details><summary>Respuesta</summary>

**b) CUPS no aplica filtros adicionales al trabajo de impresión**

Con `cups options = raw`, CUPS envía los datos de impresión directamente a la impresora sin procesamiento. Esto es apropiado cuando los clientes Windows ya generan los datos en el formato correcto de la impresora usando su driver local.
</details>

### Pregunta 5
¿Qué comando de rpcclient se usa para asociar un driver a una impresora?

a) `adddriver`
b) `setprinter`
c) `setdriver`
d) `linkdriver`

<details><summary>Respuesta</summary>

**c) `setdriver`**

`setdriver "NombreImpresora" "NombreDriver"` asocia un driver previamente subido al servidor con una impresora específica. `adddriver` sube el driver al servidor, pero no lo asocia a ninguna impresora.
</details>

### Pregunta 6
¿Qué directorio almacena los drivers de 64 bits para Windows en el share print$?

a) /var/lib/samba/drivers/WIN64/3/
b) /var/lib/samba/drivers/x64/3/
c) /var/lib/samba/drivers/AMD64/3/
d) /var/lib/samba/drivers/64bit/3/

<details><summary>Respuesta</summary>

**b) /var/lib/samba/drivers/x64/3/**

La estructura de directorios de drivers usa `x64` para drivers de Windows 64 bits, `W32X86` para 32 bits y `WIN40` para versiones antiguas. El subdirectorio `3` corresponde a la versión 3 del modelo de drivers.
</details>

### Pregunta 7
¿Qué parámetro de smb.conf hace que Samba cargue automáticamente todas las impresoras definidas en CUPS?

a) `auto printers = yes`
b) `cups auto = yes`
c) `load printers = yes`
d) `printcap name = auto`

<details><summary>Respuesta</summary>

**c) `load printers = yes`**

`load printers = yes` hace que Samba consulte CUPS (cuando `printcap name = cups`) y cree automáticamente un share para cada impresora definida en el sistema de impresión, usando la configuración de la sección `[printers]`.
</details>

### Pregunta 8
¿Cuál es el directorio de spool recomendado para trabajos de impresión en Samba y qué permisos necesita?

a) /var/spool/cups con permisos 0755
b) /var/spool/samba con permisos 1777
c) /tmp/samba-print con permisos 0777
d) /var/lib/samba/spool con permisos 0700

<details><summary>Respuesta</summary>

**b) /var/spool/samba con permisos 1777**

`/var/spool/samba` es el directorio de spool estándar para Samba. Los permisos `1777` (sticky bit + lectura/escritura para todos) permiten que cualquier usuario pueda escribir sus trabajos de impresión pero no eliminar los de otros.
</details>

### Pregunta 9
¿Qué protocolo RPC utiliza Windows para comunicarse con el servicio de impresión de Samba?

a) LDAP
b) SPOOLSS
c) NETLOGON
d) SAMR

<details><summary>Respuesta</summary>

**b) SPOOLSS**

SPOOLSS (Spooler Subsystem) es el protocolo RPC que Windows usa para la comunicación con servicios de impresión. Samba implementa las pipes SPOOLSS para soportar enumerar impresoras, gestionar drivers, enviar trabajos y configurar impresoras.
</details>

### Pregunta 10
Un administrador quiere que solo los miembros del grupo `printadmin` puedan subir drivers al share [print$]. ¿Qué configuración es correcta?

a) `valid users = @printadmin` y `writable = yes`
b) `read only = yes` y `write list = @printadmin`
c) `admin users = @printadmin` y `guest ok = no`
d) `printable = yes` y `printer admin = @printadmin`

<details><summary>Respuesta</summary>

**b) `read only = yes` y `write list = @printadmin`**

La configuración correcta para el share `[print$]` es `read only = yes` (todos pueden leer/descargar drivers) combinado con `write list = @printadmin` (solo los administradores de impresión pueden subir nuevos drivers).
</details>

### Pregunta 11

¿Qué comando de `rpcclient` se utiliza para listar los drivers de impresora instalados en el servidor Samba?

a) `rpcclient $> listdrivers`
b) `rpcclient $> enumdrivers 3`
c) `rpcclient $> getdrivers`
d) `rpcclient $> showdrivers`

<details><summary>Respuesta</summary>

**b) `rpcclient $> enumdrivers 3`**

`enumdrivers 3` enumera todos los drivers de impresora de versión 3 instalados en el servidor. El número indica la versión del modelo de driver. `enumdrivers` sin argumento lista todos los niveles. Otros comandos útiles son `enumprinters` para listar impresoras y `getprinter` para ver detalles.
</details>

### Pregunta 12

¿Qué parámetro en la configuración de una impresora individual en smb.conf especifica el nombre de la impresora tal como está definida en CUPS?

a) `cups name`
b) `printer name`
c) `printer id`
d) `cups printer`

<details><summary>Respuesta</summary>

**b) `printer name`**

El parámetro `printer name` vincula el share de Samba con el nombre de la cola de impresión en CUPS. Si no se especifica, Samba utiliza el nombre del share como nombre de la impresora en CUPS. Esto permite que el share tenga un nombre descriptivo diferente al nombre técnico de CUPS.
</details>

### Pregunta 13

¿Por qué es importante que el directorio de spool `/var/spool/samba` tenga el sticky bit activado (permisos 1777)?

a) Para mejorar la velocidad de impresión
b) Para que los usuarios puedan escribir sus trabajos de impresión pero no puedan eliminar los de otros usuarios
c) Para permitir que CUPS acceda al directorio
d) Para habilitar la compresión automática de trabajos

<details><summary>Respuesta</summary>

**b) Para que los usuarios puedan escribir sus trabajos de impresión pero no puedan eliminar los de otros usuarios**

El sticky bit (1) en combinación con permisos 777 permite que cualquier usuario escriba archivos en el directorio (necesario para enviar trabajos de impresión), pero impide que un usuario elimine los archivos de otro usuario. Esto protege los trabajos de impresión en cola.
</details>

### Pregunta 14

¿Qué sección especial de smb.conf hereda su configuración a todas las impresoras cargadas automáticamente con `load printers = yes`?

a) `[global]`
b) `[print$]`
c) `[printers]`
d) `[cups]`

<details><summary>Respuesta</summary>

**c) `[printers]`**

La sección `[printers]` es una sección especial que define la configuración predeterminada para todas las impresoras que Samba carga automáticamente desde CUPS cuando `load printers = yes`. Esto incluye el directorio de spool, los permisos de acceso y si el share es navegable. Las impresoras individuales pueden sobrescribir esta configuración.
</details>

### Pregunta 15

¿Cuál es la función del comando `rpcclient $> adddriver` en la gestión de impresoras de Samba?

a) Instalar un driver en el cliente Windows
b) Subir los archivos del driver al servidor Samba para su distribución vía Point-and-Print
c) Configurar el backend de impresión CUPS
d) Crear una nueva cola de impresión en CUPS

<details><summary>Respuesta</summary>

**b) Subir los archivos del driver al servidor Samba para su distribución vía Point-and-Print**

`adddriver` registra los archivos del driver de impresora en el servidor Samba, almacenándolos en el share `[print$]`. Una vez subido, el driver debe asociarse a una impresora específica con `setdriver`. Los clientes Windows descargan automáticamente el driver al conectarse a la impresora.
</details>

### Pregunta 16

Un administrador observa que `smbclient -L //localhost -U admin` no muestra las impresoras de CUPS. ¿Cuál es la causa más probable?

a) CUPS no está instalado
b) Falta `load printers = yes` o `printing = cups` en smb.conf
c) El share `[print$]` no está configurado
d) El usuario admin no tiene permisos de impresión

<details><summary>Respuesta</summary>

**b) Falta `load printers = yes` o `printing = cups` en smb.conf**

Para que Samba muestre las impresoras de CUPS, se requiere `printing = cups` (para usar CUPS como backend de impresión), `printcap name = cups` (para autodescubrir impresoras) y `load printers = yes` (para cargar automáticamente todas las impresoras). Si falta alguno de estos parámetros, las impresoras no aparecerán.
</details>

### Pregunta 17

¿Qué estructura de subdirectorios se utiliza dentro de `/var/lib/samba/drivers/` para organizar los drivers de impresora por arquitectura?

a) `linux/`, `windows32/`, `windows64/`
b) `W32X86/`, `x64/`, `WIN40/`
c) `i386/`, `amd64/`, `arm64/`
d) `32bit/`, `64bit/`, `legacy/`

<details><summary>Respuesta</summary>

**b) `W32X86/`, `x64/`, `WIN40/`**

La estructura usa nombres de arquitectura Windows: `W32X86` para drivers de 32 bits (Windows XP/Vista/7 32-bit), `x64` para drivers de 64 bits (Windows modernos) y `WIN40` para versiones antiguas (Windows 95/98). Dentro de cada directorio hay subdirectorios para versiones del modelo de driver (0, 2, 3).
</details>

### Pregunta 18

¿Qué tipo de comunicación utiliza Windows para gestionar impresoras remotas en Samba?

a) HTTP/HTTPS
b) Llamadas RPC a través del protocolo SPOOLSS
c) Protocolo LPR/LPD
d) FTP para transferencia de trabajos

<details><summary>Respuesta</summary>

**b) Llamadas RPC a través del protocolo SPOOLSS**

Windows utiliza el protocolo SPOOLSS (Spooler Subsystem) basado en RPC para todas las operaciones de impresión remota: enumerar impresoras, enviar trabajos, gestionar drivers y configurar propiedades. Samba implementa las pipes SPOOLSS para ser compatible con estas operaciones.
</details>

### Pregunta 19

¿Cuál es la diferencia funcional entre `printable = yes` y `writable = yes` en un share de Samba?

a) Son equivalentes para shares de impresora
b) `printable = yes` permite enviar trabajos de impresión; `writable = yes` permite escritura de archivos
c) `printable` solo funciona con CUPS; `writable` funciona con cualquier backend
d) No hay diferencia, ambos permiten escritura

<details><summary>Respuesta</summary>

**b) `printable = yes` permite enviar trabajos de impresión; `writable = yes` permite escritura de archivos**

`printable = yes` marca el share como share de impresora y habilita el envío de trabajos de impresión a la cola. `writable = yes` permite escritura de archivos en el share. Un share de impresora típicamente tiene `printable = yes` y `writable = no`, ya que la escritura es solo para los datos de impresión enviados por el spooler.
</details>

### Pregunta 20

En la configuración Point-and-Print, ¿qué debe ocurrir después de subir un driver con `adddriver`?

a) Reiniciar el servicio CUPS
b) Asociar el driver a una impresora específica con `setdriver`
c) Copiar manualmente los archivos al directorio `[print$]`
d) Registrar el driver en Active Directory

<details><summary>Respuesta</summary>

**b) Asociar el driver a una impresora específica con `setdriver`**

Después de subir un driver con `adddriver`, es necesario vincularlo a una impresora con `setdriver "NombreImpresora" "NombreDriver"`. Sin esta asociación, el driver está disponible en el servidor pero no se ofrece automáticamente a los clientes que se conectan a la impresora.
</details>

### Pregunta 21

Escriba el comando para verificar las impresoras disponibles en el sistema CUPS y cuál es la predeterminada.

<input type="text" class="fill-blank" data-answer="lpstat -p -d" data-alt="lpstat -d -p" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lpstat -p -d**

`lpstat -p` muestra el estado de todas las impresoras conocidas por CUPS y `-d` muestra cuál es la impresora predeterminada del sistema. Este comando es útil para diagnosticar si CUPS tiene configuradas las impresoras antes de verificar que Samba las comparte correctamente.
</details>

### Pregunta 22

Escriba el comando para crear el directorio de spool de impresión de Samba con los permisos correctos.

<input type="text" class="fill-blank" data-answer="mkdir -p /var/spool/samba && chmod 1777 /var/spool/samba" data-alt="mkdir /var/spool/samba && chmod 1777 /var/spool/samba" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkdir -p /var/spool/samba && chmod 1777 /var/spool/samba**

El directorio `/var/spool/samba` es donde Samba almacena temporalmente los trabajos de impresión. Los permisos `1777` (sticky bit + rwx para todos) permiten que cualquier usuario envíe trabajos mientras se protegen los trabajos de otros usuarios.
</details>

### Pregunta 23

Escriba el comando `rpcclient` para conectarse al servidor local como el usuario `admin`.

<input type="text" class="fill-blank" data-answer="rpcclient //localhost -U admin" data-alt="rpcclient localhost -U admin" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**rpcclient //localhost -U admin**

`rpcclient` permite ejecutar comandos RPC contra un servidor Samba. Conectándose al localhost como administrador, se pueden gestionar impresoras y drivers con comandos como `enumprinters`, `enumdrivers`, `adddriver` y `setdriver`.
</details>

### Pregunta 24

Escriba el comando para enviar un trabajo de impresión de prueba del archivo `/etc/hostname` a la impresora `HP_LaserJet` usando CUPS.

<input type="text" class="fill-blank" data-answer="lp -d HP_LaserJet /etc/hostname" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lp -d HP_LaserJet /etc/hostname**

`lp` es el comando de CUPS para enviar trabajos de impresión. La opción `-d` especifica la impresora destino. También se puede usar `lpr -P HP_LaserJet /etc/hostname` como alternativa. Para ver el estado de la cola se usa `lpq -P HP_LaserJet`.
</details>

### Pregunta 25

Escriba el comando para ver la cola de impresión de la impresora `LaserColor` desde la línea de comandos.

<input type="text" class="fill-blank" data-answer="lpq -P LaserColor" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**lpq -P LaserColor**

`lpq -P` muestra los trabajos pendientes en la cola de la impresora especificada, incluyendo el ID del trabajo, el propietario, el tamaño y el estado. Para cancelar un trabajo se usa `cancel <id_trabajo>` o `lprm <id_trabajo>`.
</details>
