---
title: "303.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.3"
---

# Flashcards: 303.3 - Dfs

> 34 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-001">
<div class="flashcard-front">

**P:** ¿Qué dos parámetros son necesarios para configurar un share como raíz DFS en Samba?

</div>
<div class="flashcard-back">

**R:** b) `host msdfs = yes` en [global] y `msdfs root = yes` en el share. Se necesitan dos parámetros: `host msdfs = yes` en la sección `[global]` para habilitar el soporte DFS en el servidor, y `msdfs root = yes` en la sección del share que actuará como raíz DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el formato correcto de un enlace simbólico DFS en Samba?

</div>
<div class="flashcard-back">

**R:** c) `msdfs:servidor\share`. Los enlaces DFS en Samba se crean como enlaces simbólicos con el prefijo `msdfs:` seguido del servidor y share destino separados por una barra invertida.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-003">
<div class="flashcard-front">

**P:** ¿Cómo se configura un enlace DFS con failover a dos servidores?

</div>
<div class="flashcard-back">

**R:** c) `ln -s "msdfs:srv1\share,srv2\share" /dfs/enlace`. Los destinos múltiples en un enlace DFS se separan con comas dentro de la misma cadena del enlace simbólico. Esto permite failover automático entre los servidores especificados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué hace el parámetro `msdfs proxy` en un share de Samba?

</div>
<div class="flashcard-back">

**R:** b) Redirige el share completo a otro servidor sin necesidad de enlaces simbólicos. `msdfs proxy` redirige transparentemente un share completo a otro servidor. A diferencia de `msdfs root`, no requiere crear enlaces simbólicos en el sistema de archivos; la redirección se configura directamente en smb.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-005">
<div class="flashcard-front">

**P:** ¿Cuál es el principal beneficio de DFS para los usuarios finales?

</div>
<div class="flashcard-back">

**R:** b) Un espacio de nombres unificado que oculta la ubicación física de los datos. DFS permite crear una estructura virtual donde los usuarios acceden a una ruta única, independientemente del servidor físico donde residan los datos. Esto proporciona transparencia de ubicación y facilita la reorganización de datos sin impacto para los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué sucede cuando un cliente accede a un enlace DFS con múltiples destinos y el primer servidor no está disponible?

</div>
<div class="flashcard-back">

**R:** b) El cliente intenta conectar al siguiente destino de la lista. Cuando un enlace DFS tiene múltiples destinos (failover), si el primer servidor no está disponible, el cliente automáticamente intenta conectar con el siguiente destino de la lista.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-007">
<div class="flashcard-front">

**P:** ¿En qué sección de smb.conf se debe colocar el parámetro `host msdfs`?

</div>
<div class="flashcard-back">

**R:** c) En la sección [global]. `host msdfs = yes` es un parámetro global que habilita el soporte DFS en todo el servidor Samba. Debe estar en la sección `[global]` de smb.conf.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-008">
<div class="flashcard-front">

**P:** ¿Cómo se implementan físicamente los enlaces DFS en el sistema de archivos Linux?

</div>
<div class="flashcard-back">

**R:** b) Como enlaces simbólicos con formato especial. Los enlaces DFS se implementan como enlaces simbólicos en el directorio raíz DFS. El contenido del enlace simbólico tiene el formato `msdfs:servidor\share` que Samba interpreta para redirigir al cliente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando se puede utilizar para verificar los enlaces DFS existentes en el directorio raíz DFS?

</div>
<div class="flashcard-back">

**R:** c) `ls -la /srv/samba/dfs/`. Dado que los enlaces DFS son enlaces simbólicos en el sistema de archivos, `ls -la` muestra los enlaces y sus destinos. Esto permite verificar que los enlaces DFS están correctamente configurados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia entre `msdfs root` y `msdfs proxy`?

</div>
<div class="flashcard-back">

**R:** b) `msdfs root` crea una raíz DFS con enlaces simbólicos; `msdfs proxy` redirige un share completo. `msdfs root = yes` convierte un share en un contenedor de enlaces DFS (implementados como enlaces simbólicos). `msdfs proxy` simplemente redirige un share completo a otro servidor sin necesidad de crear enlaces simbólicos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-011">
<div class="flashcard-front">

**P:** ¿Qué parámetro en `[global]` de smb.conf controla la aleatorización del orden de los destinos DFS para balanceo de carga?

</div>
<div class="flashcard-back">

**R:** b) `msdfs shuffle referrals = yes`. El parámetro `msdfs shuffle referrals` aleatoriza el orden en que se presentan los destinos DFS a los clientes. Esto permite un balanceo de carga básico, ya que los clientes normalmente intentan conectar con el primer destino de la lista. Sin este parámetro, los destinos se presentan siempre en el mismo orden.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué nivel de permisos controla quién puede ver los enlaces dentro de una raíz DFS?

</div>
<div class="flashcard-back">

**R:** b) Los permisos configurados en la sección de la raíz DFS en smb.conf. La seguridad de DFS opera en dos niveles: los permisos de la raíz DFS (configurados con `valid users`, `hosts allow`, etc. en el share de la raíz) controlan quién puede ver los enlaces, mientras que los permisos de los shares destino controlan el acceso real a los datos. Ambos se evalúan independientemente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-013">
<div class="flashcard-front">

**P:** Un administrador quiere que el share `[legacy]` redirija a `\\nuevoservidor\datos` sin crear enlaces simbólicos. ¿Qué configuración debe usar?

</div>
<div class="flashcard-back">

**R:** b) `msdfs proxy = \\nuevoservidor\datos` en el share `[legacy]`. `msdfs proxy` redirige un share completo a otro servidor de forma transparente. No requiere `msdfs root = yes` ni la creación de enlaces simbólicos en el sistema de archivos. Cuando un cliente accede a `\\servidor\legacy`, se redirige automáticamente a `\\nuevoservidor\datos`. Es ideal para migraciones de servidores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-014">
<div class="flashcard-front">

**P:** ¿Qué sucede si un enlace simbólico DFS no tiene el prefijo correcto `msdfs:`?

</div>
<div class="flashcard-back">

**R:** a) Samba lo interpreta como un enlace simbólico normal del sistema de archivos. Sin el prefijo `msdfs:`, Samba trata el enlace simbólico como un enlace del sistema de archivos local, no como un referral DFS. El cliente no recibirá la redirección DFS y, dependiendo de la configuración de `follow symlinks` y `wide links`, el enlace puede resolverse localmente o ser denegado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-015">
<div class="flashcard-front">

**P:** ¿Cuál de las siguientes afirmaciones es correcta sobre DFS y la autenticación?

</div>
<div class="flashcard-back">

**R:** c) La autenticación es gestionada por cada share destino de forma independiente. Los enlaces DFS no proporcionan autenticación adicional. Cuando un cliente sigue un referral DFS, debe autenticarse con el servidor destino utilizando el mecanismo configurado en ese servidor (Kerberos, NTLM, etc.). DFS es solo un mecanismo de redirección transparente, no de seguridad.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué ocurre si se configura `msdfs root = yes` en un share pero se omite `host msdfs = yes` en `[global]`?

</div>
<div class="flashcard-back">

**R:** b) DFS no funciona; ambos parámetros son necesarios. DFS requiere que se habilite a nivel de servidor con `host msdfs = yes` en `[global]` y a nivel de share con `msdfs root = yes`. Si falta `host msdfs = yes`, Samba no procesará los enlaces simbólicos DFS en el directorio raíz y los clientes no recibirán referrals DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-017">
<div class="flashcard-front">

**P:** En un entorno de producción, ¿cuál es la ventaja principal de usar DFS frente a rutas UNC directas a servidores individuales?

</div>
<div class="flashcard-back">

**R:** b) Los recursos pueden moverse entre servidores sin cambiar las rutas de acceso de los usuarios. DFS proporciona transparencia de ubicación: los usuarios acceden siempre a la misma ruta DFS, independientemente de en qué servidor residan realmente los datos. Cuando se migran datos entre servidores, solo es necesario actualizar el enlace DFS, sin modificar scripts, GPOs ni accesos directos de los usuarios.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué tipo de referral recibe un cliente Windows cuando accede a un enlace DFS con dos destinos configurados?

</div>
<div class="flashcard-back">

**R:** b) Una lista de destinos SMB que el cliente puede intentar en orden. Cuando un cliente accede a un enlace DFS, recibe un referral que contiene la lista de todos los destinos disponibles. El cliente selecciona un destino (normalmente el primero o uno aleatorio si `msdfs shuffle referrals = yes`) e intenta conectar. Si falla, intenta con el siguiente destino de la lista.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué parámetro de smb.conf necesita el share que actúa como raíz DFS pero NO necesita un share normal?

</div>
<div class="flashcard-back">

**R:** b) `msdfs root = yes`. `msdfs root = yes` es el parámetro específico que distingue una raíz DFS de un share normal. Los demás parámetros (`path`, `browseable`, `valid users`) son comunes a cualquier tipo de recurso compartido. Sin `msdfs root = yes`, Samba no interpreta los enlaces simbólicos del directorio como referrals DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-020">
<div class="flashcard-front">

**P:** Un administrador tiene un enlace DFS `datos` que apunta a `msdfs:srv1\datos,srv2\datos`. Si `srv1` está disponible pero el share `datos` no existe en `srv1`, ¿qué ocurre?

</div>
<div class="flashcard-back">

**R:** b) El cliente intenta conectar con `srv2\datos` como alternativa. El mecanismo de failover DFS no solo actúa cuando un servidor está caído, sino también cuando el recurso específico no está disponible. Si la conexión al primer destino falla por cualquier motivo (servidor caído, share inexistente, permisos denegados), el cliente intenta con el siguiente destino de la lista.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-021">
<div class="flashcard-front">

**P:** Escriba el comando para crear un enlace simbólico DFS en `/srv/samba/dfs/` que apunte al share `proyectos` en el servidor `fileserver1`. <input type="text" class="fill-blank" data-answer='ln -s "msdfs:fileserver1\proyectos" /srv/samba/dfs/proyectos' data-alt="ln -s 'msdfs:fileserver1\proyectos' /srv/samba/dfs/proyectos" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ln -s "msdfs:fileserver1\proyectos" /srv/samba/dfs/proyectos. Los enlaces DFS se crean como enlaces simbólicos con el prefijo `msdfs:` seguido del servidor y share destino separados por una barra invertida. El enlace se crea dentro del directorio raíz DFS, y su nombre define cómo aparecerá en el espacio de nombres DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-022">
<div class="flashcard-front">

**P:** Escriba el comando para crear un enlace DFS con failover que apunte al share `backup` en `srv1` y `srv2`. <input type="text" class="fill-blank" data-answer='ln -s "msdfs:srv1\backup,srv2\backup" /srv/samba/dfs/backup' data-alt="ln -s 'msdfs:srv1\backup,srv2\backup' /srv/samba/dfs/backup" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ln -s "msdfs:srv1\backup,srv2\backup" /srv/samba/dfs/backup. Para crear un enlace DFS con failover, se separan los destinos con comas dentro de la misma cadena del enlace simbólico. El cliente intentará conectar al primer destino y, si falla, al segundo. Los destinos se pueden aleatorizar con `msdfs shuffle referrals = yes` en `[global]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-023">
<div class="flashcard-front">

**P:** Escriba el comando para verificar los enlaces simbólicos DFS existentes en el directorio raíz `/srv/samba/dfs/`. <input type="text" class="fill-blank" data-answer="ls -la /srv/samba/dfs/" data-alt="ls -l /srv/samba/dfs/" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** ls -la /srv/samba/dfs/. Como los enlaces DFS son enlaces simbólicos del sistema de archivos, `ls -la` muestra cada enlace junto con su destino (el contenido del symlink con el formato `msdfs:servidor\share`). Esto permite verificar que los enlaces DFS están correctamente creados y apuntan a los destinos correctos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-024">
<div class="flashcard-front">

**P:** Escriba el comando para verificar la configuración DFS del servidor Samba usando `testparm`. <input type="text" class="fill-blank" data-answer="testparm -s" data-alt="testparm" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** testparm -s. `testparm -s` verifica la sintaxis de `smb.conf` y muestra la configuración resultante sin solicitar confirmación. En la salida se pueden buscar los parámetros DFS como `host msdfs = yes` y `msdfs root = yes` para verificar que están correctamente configurados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-025">
<div class="flashcard-front">

**P:** Escriba el comando para crear el directorio que servirá como raíz DFS en la ruta `/srv/samba/dfs`. <input type="text" class="fill-blank" data-answer="mkdir -p /srv/samba/dfs" data-alt="mkdir /srv/samba/dfs" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** mkdir -p /srv/samba/dfs. El directorio raíz DFS debe existir en el sistema de archivos antes de configurarlo en smb.conf. La opción `-p` crea los directorios padres si no existen. Dentro de este directorio se crearán los enlaces simbólicos que representan los enlaces DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: DFS permite crear un espacio de nombres virtual que agrupa shares de múltiples s...

</div>
<div class="flashcard-back">

**R:** DFS permite crear un espacio de nombres virtual que agrupa shares de múltiples servidores bajo una única ruta de acceso, proporcionando transparencia de ubicación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Se necesitan dos parámetros para DFS: `host msdfs = yes` en `[global]` y `msdfs ...

</div>
<div class="flashcard-back">

**R:** Se necesitan dos parámetros para DFS: `host msdfs = yes` en `[global]` y `msdfs root = yes` en el share que actuará como raíz DFS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Los enlaces DFS en Samba se implementan como enlaces simbólicos con el prefijo `...

</div>
<div class="flashcard-back">

**R:** Los enlaces DFS en Samba se implementan como enlaces simbólicos con el prefijo `msdfs:` en el directorio raíz DFS. Los destinos múltiples se separan con comas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `msdfs proxy` redirige un share completo a otro servidor. No requiere `msdfs roo...

</div>
<div class="flashcard-back">

**R:** `msdfs proxy` redirige un share completo a otro servidor. No requiere `msdfs root = yes` ni enlaces simbólicos; funciona a nivel de share.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** DFS (Distributed File System) es una tecnología que permite crear un espacio de nombres unificado para recursos compartidos distribuidos en múltiples servidores. Con DFS, los usuarios acceden a una rut

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-031">
<div class="flashcard-front">

**P:** Que es/son DFS Proxy (msdfs proxy)?

</div>
<div class="flashcard-back">

**R:** `msdfs proxy` permite redirigir un share completo a otro servidor sin crear enlaces simbólicos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son Failover con DFS?

</div>
<div class="flashcard-back">

**R:** Los enlaces DFS con múltiples destinos proporcionan failover:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Parámetros DFS en smb.conf?

</div>
<div class="flashcard-back">

**R:** | Parámetro       | Sección   | Descripción                                          |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.3">
</div>

<div class="flashcard" data-id="303.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son Consideraciones de seguridad?

</div>
<div class="flashcard-back">

**R:** - Los permisos en la raíz DFS controlan quién puede ver los enlaces

</div>
</div>

---

