---
title: "209.1 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "209.1"
---

# Flashcards: 209.1 - Configuracion Servidor Samba

> 20 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar la sintaxis del archivo de configuración smb.conf?

</div>
<div class="flashcard-back">

**R:** c) testparm. El comando `testparm` analiza el archivo `/etc/samba/smb.conf` y reporta cualquier error de sintaxis o parámetros desconocidos. Con la opción `-s` muestra únicamente la configuración activa (omitiendo los valores por defecto). Es una herramienta esencial antes de reiniciar el servicio Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-002">
<div class="flashcard-front">

**P:** ¿Cuál es el modo de seguridad predeterminado en Samba 4?

</div>
<div class="flashcard-back">

**R:** b) security = user. El modo `security = user` es el predeterminado en Samba 4. En este modo, los clientes deben autenticarse con un nombre de usuario y contraseña que existan en la base de datos de usuarios de Samba. El modo `share` fue eliminado en Samba 4 y `server` está obsoleto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-003">
<div class="flashcard-front">

**P:** Un administrador necesita añadir el usuario "jperez" (que ya existe como usuario Unix) a la base de datos de Samba. ¿Qué comando debe utilizar?

</div>
<div class="flashcard-back">

**R:** c) smbpasswd -a jperez. El comando `smbpasswd -a` añade un usuario a la base de datos de Samba. Es requisito previo que el usuario exista como usuario Unix en el sistema. La opción `-a` (add) indica que se está añadiendo un nuevo usuario, no modificando uno existente. También se podría usar `pdbedit -a jperez`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-004">
<div class="flashcard-front">

**P:** ¿Qué demonio de Samba es responsable del servicio de nombres NetBIOS?

</div>
<div class="flashcard-back">

**R:** b) nmbd. El demonio `nmbd` proporciona servicios de nombres NetBIOS y navegación de red. Escucha en los puertos UDP 137 y 138. El demonio `smbd` gestiona las conexiones de compartición de archivos e impresoras (puertos TCP 139 y 445), y `winbindd` se encarga de la integración con Active Directory.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-005">
<div class="flashcard-front">

**P:** ¿Qué directiva en smb.conf permite que los archivos creados en un recurso compartido tengan permisos específicos?

</div>
<div class="flashcard-back">

**R:** c) create mask. La directiva `create mask` (también conocida como `create mode`) define los permisos máximos que se asignan a los archivos nuevos creados en el recurso compartido. Por ejemplo, `create mask = 0664` permite lectura y escritura para el propietario y el grupo, y solo lectura para otros. Para directorios se usa `directory mask`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando muestra las conexiones activas al servidor Samba, incluyendo los recursos compartidos en uso y los archivos abiertos?

</div>
<div class="flashcard-back">

**R:** c) smbstatus. El comando `smbstatus` muestra información sobre las conexiones activas al servidor Samba: procesos de conexión, recursos compartidos en uso y archivos bloqueados. Con la opción `-S` muestra solo los recursos, con `-p` solo los procesos y con `-L` solo los bloqueos de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-007">
<div class="flashcard-front">

**P:** ¿Qué sección especial de smb.conf crea automáticamente un recurso compartido para el directorio home de cada usuario que se conecta?

</div>
<div class="flashcard-back">

**R:** c) [homes]. La sección `[homes]` es una sección especial de Samba que crea dinámicamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio home en el sistema. Cuando un usuario solicita un recurso con su nombre de usuario, Samba lo busca primero como recurso explícito y, si no existe, lo crea automáticamente desde `[homes]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-008">
<div class="flashcard-front">

**P:** ¿Cuál es el comando correcto para unir un servidor Samba a un dominio Active Directory?

</div>
<div class="flashcard-back">

**R:** b) net ads join -U administrador. El comando `net ads join -U administrador` une el servidor Samba a un dominio Active Directory. Requiere que la sección `[global]` de smb.conf tenga `security = ads` y `realm = DOMINIO.COM` correctamente configurados. Después de la unión, se puede verificar con `net ads testjoin`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-009">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para listar los recursos compartidos de un servidor SMB remoto?

</div>
<div class="flashcard-back">

**R:** a) smbclient -L //servidor -U usuario. El comando `smbclient -L` (list) muestra los recursos compartidos disponibles en un servidor remoto. Se debe especificar el servidor con la notación `//nombre_servidor` y opcionalmente el usuario con `-U`. También muestra información sobre los grupos de trabajo y servidores maestros de la red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere montar permanentemente un recurso compartido CIFS usando un archivo de credenciales. ¿Cuál es la entrada correcta en /etc/fstab?

</div>
<div class="flashcard-back">

**R:** b) `//servidor/recurso /mnt/samba cifs credentials=/root/.smbcredentials 0 0`. En `/etc/fstab`, los recursos CIFS se especifican con la notación de barra inclinada `//servidor/recurso`, el tipo de sistema de archivos es `cifs` (no `smbfs` que está obsoleto), y se usa la opción `credentials` para indicar el archivo con las credenciales de acceso. El archivo de credenciales contiene `username=`, `password=` y opcionalmente `domain=`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-011">
<div class="flashcard-front">

**P:** Tip de examen: La directiva `workgroup` define el grupo de trabajo o dominio Windows al que per...

</div>
<div class="flashcard-back">

**R:** La directiva `workgroup` define el grupo de trabajo o dominio Windows al que pertenece el servidor. `security = user` es el modo predeterminado y el más utilizado, que requiere autenticación con usuario y contraseña de Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-012">
<div class="flashcard-front">

**P:** Tip de examen: El modo `security = share` fue eliminado en Samba 4. Los modos actuales son `use...

</div>
<div class="flashcard-back">

**R:** El modo `security = share` fue eliminado en Samba 4. Los modos actuales son `user` (predeterminado) y `ads` (para integración con Active Directory). El modo `domain` es para dominios NT4 y está prácticamente obsoleto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-013">
<div class="flashcard-front">

**P:** Tip de examen: La sección `[homes]` crea automáticamente un recurso compartido para cada usuari...

</div>
<div class="flashcard-back">

**R:** La sección `[homes]` crea automáticamente un recurso compartido para cada usuario que se conecta, mapeándolo a su directorio home. La variable `%S` se reemplaza por el nombre del recurso solicitado (que coincide con el nombre de usuario) y `%U` con el nombre de usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-014">
<div class="flashcard-front">

**P:** Tip de examen: Tanto `smbpasswd` como `pdbedit` gestionan los usuarios de Samba, pero `pdbedit`...

</div>
<div class="flashcard-back">

**R:** Tanto `smbpasswd` como `pdbedit` gestionan los usuarios de Samba, pero `pdbedit` es más completo y permite administrar diferentes backends de base de datos (tdbsam, ldapsam). Recuerda que el usuario Unix debe existir antes de crear el usuario Samba.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-015">
<div class="flashcard-front">

**P:** Tip de examen: Las variables de sustitución son muy útiles para crear configuraciones dinámicas...

</div>
<div class="flashcard-back">

**R:** Las variables de sustitución son muy útiles para crear configuraciones dinámicas. Por ejemplo, `log file = /var/log/samba/log.%m` crea un archivo de log separado para cada cliente que se conecta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-016">
<div class="flashcard-front">

**P:** Que hace el comando `security = user`?

</div>
<div class="flashcard-back">

**R:** Autenticación contra la base de datos local de Samba (predeterminado)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-017">
<div class="flashcard-front">

**P:** Que hace el comando `path`?

</div>
<div class="flashcard-back">

**R:** Ruta del directorio en el sistema de archivos

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-018">
<div class="flashcard-front">

**P:** Que hace el comando `browseable`?

</div>
<div class="flashcard-back">

**R:** Si el recurso aparece al explorar la red (`yes`/`no`)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-019">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Samba es la implementación libre del protocolo SMB/CIFS que permite a sistemas Linux compartir archivos e impresoras con clientes Windows y otros sistemas. Con un peso de 5, este es uno de los subtemas

</div>
</div>

---

<div class="flashcard-deck" data-subtema="209.1">
</div>

<div class="flashcard" data-id="209.1-fc-020">
<div class="flashcard-front">

**P:** Que es/son Archivo de configuración smb.conf?

</div>
<div class="flashcard-back">

**R:** El archivo principal de configuración es `/etc/samba/smb.conf`. Se divide en secciones identificadas por corchetes.

</div>
</div>

---

