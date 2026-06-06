---
title: "303.3 - Ejercicios: DFS"
description: "Ejercicios de práctica sobre DFS en Samba"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 303 - Configuración de Recursos Compartidos"
subtema: "303.3"
peso: 1
tags:
  - lpic-3
  - tema-303
  - samba
  - dfs
  - ejercicios
---

# 303.3 Ejercicios - DFS

### Pregunta 1
¿Qué dos parámetros son necesarios para configurar un share como raíz DFS en Samba?

a) `dfs root = yes` en [global] y `dfs enable = yes` en el share
b) `host msdfs = yes` en [global] y `msdfs root = yes` en el share
c) `enable dfs = yes` en [global] y `dfs share = yes` en el share
d) `msdfs root = yes` en [global] y `host msdfs = yes` en el share

<details><summary>Respuesta</summary>

**b) `host msdfs = yes` en [global] y `msdfs root = yes` en el share**

Se necesitan dos parámetros: `host msdfs = yes` en la sección `[global]` para habilitar el soporte DFS en el servidor, y `msdfs root = yes` en la sección del share que actuará como raíz DFS.
</details>

### Pregunta 2
¿Cuál es el formato correcto de un enlace simbólico DFS en Samba?

a) `dfs://servidor/share`
b) `\\servidor\share`
c) `msdfs:servidor\share`
d) `smb://servidor/share`

<details><summary>Respuesta</summary>

**c) `msdfs:servidor\share`**

Los enlaces DFS en Samba se crean como enlaces simbólicos con el prefijo `msdfs:` seguido del servidor y share destino separados por una barra invertida.
</details>

### Pregunta 3
¿Cómo se configura un enlace DFS con failover a dos servidores?

a) `ln -s "msdfs:srv1\share" "msdfs:srv2\share" /dfs/enlace`
b) `ln -s "msdfs:srv1\share+srv2\share" /dfs/enlace`
c) `ln -s "msdfs:srv1\share,srv2\share" /dfs/enlace`
d) `ln -s "msdfs:srv1\share|srv2\share" /dfs/enlace`

<details><summary>Respuesta</summary>

**c) `ln -s "msdfs:srv1\share,srv2\share" /dfs/enlace`**

Los destinos múltiples en un enlace DFS se separan con comas dentro de la misma cadena del enlace simbólico. Esto permite failover automático entre los servidores especificados.
</details>

### Pregunta 4
¿Qué hace el parámetro `msdfs proxy` en un share de Samba?

a) Configura un servidor proxy para acceso DFS
b) Redirige el share completo a otro servidor sin necesidad de enlaces simbólicos
c) Habilita el caché de DFS en el proxy
d) Configura la autenticación proxy para DFS

<details><summary>Respuesta</summary>

**b) Redirige el share completo a otro servidor sin necesidad de enlaces simbólicos**

`msdfs proxy` redirige transparentemente un share completo a otro servidor. A diferencia de `msdfs root`, no requiere crear enlaces simbólicos en el sistema de archivos; la redirección se configura directamente en smb.conf.
</details>

### Pregunta 5
¿Cuál es el principal beneficio de DFS para los usuarios finales?

a) Mayor velocidad de transferencia de archivos
b) Un espacio de nombres unificado que oculta la ubicación física de los datos
c) Cifrado automático de los datos compartidos
d) Compresión de archivos en la red

<details><summary>Respuesta</summary>

**b) Un espacio de nombres unificado que oculta la ubicación física de los datos**

DFS permite crear una estructura virtual donde los usuarios acceden a una ruta única, independientemente del servidor físico donde residan los datos. Esto proporciona transparencia de ubicación y facilita la reorganización de datos sin impacto para los usuarios.
</details>

### Pregunta 6
¿Qué sucede cuando un cliente accede a un enlace DFS con múltiples destinos y el primer servidor no está disponible?

a) El acceso falla inmediatamente
b) El cliente intenta conectar al siguiente destino de la lista
c) DFS espera indefinidamente a que el primer servidor responda
d) El enlace DFS se elimina automáticamente

<details><summary>Respuesta</summary>

**b) El cliente intenta conectar al siguiente destino de la lista**

Cuando un enlace DFS tiene múltiples destinos (failover), si el primer servidor no está disponible, el cliente automáticamente intenta conectar con el siguiente destino de la lista.
</details>

### Pregunta 7
¿En qué sección de smb.conf se debe colocar el parámetro `host msdfs`?

a) En la sección del share DFS
b) En la sección [homes]
c) En la sección [global]
d) En cualquier sección

<details><summary>Respuesta</summary>

**c) En la sección [global]**

`host msdfs = yes` es un parámetro global que habilita el soporte DFS en todo el servidor Samba. Debe estar en la sección `[global]` de smb.conf.
</details>

### Pregunta 8
¿Cómo se implementan físicamente los enlaces DFS en el sistema de archivos Linux?

a) Como archivos de configuración .dfs
b) Como enlaces simbólicos con formato especial
c) Como entradas en una base de datos
d) Como archivos .lnk de Windows

<details><summary>Respuesta</summary>

**b) Como enlaces simbólicos con formato especial**

Los enlaces DFS se implementan como enlaces simbólicos en el directorio raíz DFS. El contenido del enlace simbólico tiene el formato `msdfs:servidor\share` que Samba interpreta para redirigir al cliente.
</details>

### Pregunta 9
¿Qué comando se puede utilizar para verificar los enlaces DFS existentes en el directorio raíz DFS?

a) `testparm --dfs`
b) `smbclient -L //servidor --dfs`
c) `ls -la /srv/samba/dfs/`
d) `net dfs list`

<details><summary>Respuesta</summary>

**c) `ls -la /srv/samba/dfs/`**

Dado que los enlaces DFS son enlaces simbólicos en el sistema de archivos, `ls -la` muestra los enlaces y sus destinos. Esto permite verificar que los enlaces DFS están correctamente configurados.
</details>

### Pregunta 10
¿Cuál es la diferencia entre `msdfs root` y `msdfs proxy`?

a) No hay diferencia, son sinónimos
b) `msdfs root` crea una raíz DFS con enlaces simbólicos; `msdfs proxy` redirige un share completo
c) `msdfs root` es para Windows; `msdfs proxy` es para Linux
d) `msdfs proxy` requiere `msdfs root = yes` para funcionar

<details><summary>Respuesta</summary>

**b) `msdfs root` crea una raíz DFS con enlaces simbólicos; `msdfs proxy` redirige un share completo**

`msdfs root = yes` convierte un share en un contenedor de enlaces DFS (implementados como enlaces simbólicos). `msdfs proxy` simplemente redirige un share completo a otro servidor sin necesidad de crear enlaces simbólicos.
</details>

### Pregunta 11

¿Qué parámetro en `[global]` de smb.conf controla la aleatorización del orden de los destinos DFS para balanceo de carga?

a) `msdfs random referrals = yes`
b) `msdfs shuffle referrals = yes`
c) `dfs load balance = yes`
d) `msdfs round robin = yes`

<details><summary>Respuesta</summary>

**b) `msdfs shuffle referrals = yes`**

El parámetro `msdfs shuffle referrals` aleatoriza el orden en que se presentan los destinos DFS a los clientes. Esto permite un balanceo de carga básico, ya que los clientes normalmente intentan conectar con el primer destino de la lista. Sin este parámetro, los destinos se presentan siempre en el mismo orden.
</details>

### Pregunta 12

¿Qué nivel de permisos controla quién puede ver los enlaces dentro de una raíz DFS?

a) Los permisos de los shares destino
b) Los permisos configurados en la sección de la raíz DFS en smb.conf
c) Los permisos del controlador de dominio
d) Los permisos de Active Directory exclusivamente

<details><summary>Respuesta</summary>

**b) Los permisos configurados en la sección de la raíz DFS en smb.conf**

La seguridad de DFS opera en dos niveles: los permisos de la raíz DFS (configurados con `valid users`, `hosts allow`, etc. en el share de la raíz) controlan quién puede ver los enlaces, mientras que los permisos de los shares destino controlan el acceso real a los datos. Ambos se evalúan independientemente.
</details>

### Pregunta 13

Un administrador quiere que el share `[legacy]` redirija a `\\nuevoservidor\datos` sin crear enlaces simbólicos. ¿Qué configuración debe usar?

a) `msdfs root = yes` en el share `[legacy]`
b) `msdfs proxy = \\nuevoservidor\datos` en el share `[legacy]`
c) `ln -s "msdfs:nuevoservidor\datos" /srv/samba/legacy`
d) `host msdfs = yes` en el share `[legacy]`

<details><summary>Respuesta</summary>

**b) `msdfs proxy = \\nuevoservidor\datos` en el share `[legacy]`**

`msdfs proxy` redirige un share completo a otro servidor de forma transparente. No requiere `msdfs root = yes` ni la creación de enlaces simbólicos en el sistema de archivos. Cuando un cliente accede a `\\servidor\legacy`, se redirige automáticamente a `\\nuevoservidor\datos`. Es ideal para migraciones de servidores.
</details>

### Pregunta 14

¿Qué sucede si un enlace simbólico DFS no tiene el prefijo correcto `msdfs:`?

a) Samba lo interpreta como un enlace simbólico normal del sistema de archivos
b) El servidor Samba se detiene con un error
c) Se crea automáticamente un enlace DFS con el prefijo correcto
d) El enlace funciona igual pero sin failover

<details><summary>Respuesta</summary>

**a) Samba lo interpreta como un enlace simbólico normal del sistema de archivos**

Sin el prefijo `msdfs:`, Samba trata el enlace simbólico como un enlace del sistema de archivos local, no como un referral DFS. El cliente no recibirá la redirección DFS y, dependiendo de la configuración de `follow symlinks` y `wide links`, el enlace puede resolverse localmente o ser denegado.
</details>

### Pregunta 15

¿Cuál de las siguientes afirmaciones es correcta sobre DFS y la autenticación?

a) DFS proporciona su propia capa de autenticación adicional
b) Los enlaces DFS cifran automáticamente las credenciales del usuario
c) La autenticación es gestionada por cada share destino de forma independiente
d) DFS requiere Kerberos para funcionar

<details><summary>Respuesta</summary>

**c) La autenticación es gestionada por cada share destino de forma independiente**

Los enlaces DFS no proporcionan autenticación adicional. Cuando un cliente sigue un referral DFS, debe autenticarse con el servidor destino utilizando el mecanismo configurado en ese servidor (Kerberos, NTLM, etc.). DFS es solo un mecanismo de redirección transparente, no de seguridad.
</details>

### Pregunta 16

¿Qué ocurre si se configura `msdfs root = yes` en un share pero se omite `host msdfs = yes` en `[global]`?

a) DFS funciona normalmente
b) DFS no funciona; ambos parámetros son necesarios
c) Solo funciona `msdfs proxy`, no los enlaces simbólicos
d) El servidor Samba no arranca

<details><summary>Respuesta</summary>

**b) DFS no funciona; ambos parámetros son necesarios**

DFS requiere que se habilite a nivel de servidor con `host msdfs = yes` en `[global]` y a nivel de share con `msdfs root = yes`. Si falta `host msdfs = yes`, Samba no procesará los enlaces simbólicos DFS en el directorio raíz y los clientes no recibirán referrals DFS.
</details>

### Pregunta 17

En un entorno de producción, ¿cuál es la ventaja principal de usar DFS frente a rutas UNC directas a servidores individuales?

a) Mayor velocidad de transferencia de archivos
b) Los recursos pueden moverse entre servidores sin cambiar las rutas de acceso de los usuarios
c) DFS proporciona cifrado automático de datos
d) DFS reduce el uso de ancho de banda en la red

<details><summary>Respuesta</summary>

**b) Los recursos pueden moverse entre servidores sin cambiar las rutas de acceso de los usuarios**

DFS proporciona transparencia de ubicación: los usuarios acceden siempre a la misma ruta DFS, independientemente de en qué servidor residan realmente los datos. Cuando se migran datos entre servidores, solo es necesario actualizar el enlace DFS, sin modificar scripts, GPOs ni accesos directos de los usuarios.
</details>

### Pregunta 18

¿Qué tipo de referral recibe un cliente Windows cuando accede a un enlace DFS con dos destinos configurados?

a) Un redireccionamiento HTTP al primer servidor
b) Una lista de destinos SMB que el cliente puede intentar en orden
c) Una copia local de los datos del primer servidor disponible
d) Una conexión VPN al servidor más cercano

<details><summary>Respuesta</summary>

**b) Una lista de destinos SMB que el cliente puede intentar en orden**

Cuando un cliente accede a un enlace DFS, recibe un referral que contiene la lista de todos los destinos disponibles. El cliente selecciona un destino (normalmente el primero o uno aleatorio si `msdfs shuffle referrals = yes`) e intenta conectar. Si falla, intenta con el siguiente destino de la lista.
</details>

### Pregunta 19

¿Qué parámetro de smb.conf necesita el share que actúa como raíz DFS pero NO necesita un share normal?

a) `path`
b) `msdfs root = yes`
c) `browseable`
d) `valid users`

<details><summary>Respuesta</summary>

**b) `msdfs root = yes`**

`msdfs root = yes` es el parámetro específico que distingue una raíz DFS de un share normal. Los demás parámetros (`path`, `browseable`, `valid users`) son comunes a cualquier tipo de recurso compartido. Sin `msdfs root = yes`, Samba no interpreta los enlaces simbólicos del directorio como referrals DFS.
</details>

### Pregunta 20

Un administrador tiene un enlace DFS `datos` que apunta a `msdfs:srv1\datos,srv2\datos`. Si `srv1` está disponible pero el share `datos` no existe en `srv1`, ¿qué ocurre?

a) El cliente muestra un error inmediatamente
b) El cliente intenta conectar con `srv2\datos` como alternativa
c) Se crea automáticamente el share en `srv1`
d) DFS desactiva el enlace hasta que se reinicie Samba

<details><summary>Respuesta</summary>

**b) El cliente intenta conectar con `srv2\datos` como alternativa**

El mecanismo de failover DFS no solo actúa cuando un servidor está caído, sino también cuando el recurso específico no está disponible. Si la conexión al primer destino falla por cualquier motivo (servidor caído, share inexistente, permisos denegados), el cliente intenta con el siguiente destino de la lista.
</details>

### Pregunta 21

Escriba el comando para crear un enlace simbólico DFS en `/srv/samba/dfs/` que apunte al share `proyectos` en el servidor `fileserver1`.

<input type="text" class="fill-blank" data-answer='ln -s "msdfs:fileserver1\proyectos" /srv/samba/dfs/proyectos' data-alt="ln -s 'msdfs:fileserver1\proyectos' /srv/samba/dfs/proyectos" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ln -s "msdfs:fileserver1\proyectos" /srv/samba/dfs/proyectos**

Los enlaces DFS se crean como enlaces simbólicos con el prefijo `msdfs:` seguido del servidor y share destino separados por una barra invertida. El enlace se crea dentro del directorio raíz DFS, y su nombre define cómo aparecerá en el espacio de nombres DFS.
</details>

### Pregunta 22

Escriba el comando para crear un enlace DFS con failover que apunte al share `backup` en `srv1` y `srv2`.

<input type="text" class="fill-blank" data-answer='ln -s "msdfs:srv1\backup,srv2\backup" /srv/samba/dfs/backup' data-alt="ln -s 'msdfs:srv1\backup,srv2\backup' /srv/samba/dfs/backup" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ln -s "msdfs:srv1\backup,srv2\backup" /srv/samba/dfs/backup**

Para crear un enlace DFS con failover, se separan los destinos con comas dentro de la misma cadena del enlace simbólico. El cliente intentará conectar al primer destino y, si falla, al segundo. Los destinos se pueden aleatorizar con `msdfs shuffle referrals = yes` en `[global]`.
</details>

### Pregunta 23

Escriba el comando para verificar los enlaces simbólicos DFS existentes en el directorio raíz `/srv/samba/dfs/`.

<input type="text" class="fill-blank" data-answer="ls -la /srv/samba/dfs/" data-alt="ls -l /srv/samba/dfs/" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ls -la /srv/samba/dfs/**

Como los enlaces DFS son enlaces simbólicos del sistema de archivos, `ls -la` muestra cada enlace junto con su destino (el contenido del symlink con el formato `msdfs:servidor\share`). Esto permite verificar que los enlaces DFS están correctamente creados y apuntan a los destinos correctos.
</details>

### Pregunta 24

Escriba el comando para verificar la configuración DFS del servidor Samba usando `testparm`.

<input type="text" class="fill-blank" data-answer="testparm -s" data-alt="testparm" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**testparm -s**

`testparm -s` verifica la sintaxis de `smb.conf` y muestra la configuración resultante sin solicitar confirmación. En la salida se pueden buscar los parámetros DFS como `host msdfs = yes` y `msdfs root = yes` para verificar que están correctamente configurados.
</details>

### Pregunta 25

Escriba el comando para crear el directorio que servirá como raíz DFS en la ruta `/srv/samba/dfs`.

<input type="text" class="fill-blank" data-answer="mkdir -p /srv/samba/dfs" data-alt="mkdir /srv/samba/dfs" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**mkdir -p /srv/samba/dfs**

El directorio raíz DFS debe existir en el sistema de archivos antes de configurarlo en smb.conf. La opción `-p` crea los directorios padres si no existen. Dentro de este directorio se crearán los enlaces simbólicos que representan los enlaces DFS.
</details>
