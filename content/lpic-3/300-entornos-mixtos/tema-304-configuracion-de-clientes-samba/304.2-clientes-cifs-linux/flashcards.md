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

> 17 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-001">
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

<div class="flashcard" data-id="304.2-fc-002">
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

<div class="flashcard" data-id="304.2-fc-003">
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

<div class="flashcard" data-id="304.2-fc-004">
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

<div class="flashcard" data-id="304.2-fc-005">
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

<div class="flashcard" data-id="304.2-fc-006">
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

<div class="flashcard" data-id="304.2-fc-007">
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

<div class="flashcard" data-id="304.2-fc-008">
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

<div class="flashcard" data-id="304.2-fc-009">
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

<div class="flashcard" data-id="304.2-fc-010">
<div class="flashcard-front">

**P:** Que hace el comando `domain=`?

</div>
<div class="flashcard-back">

**R:** Dominio o workgroup

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-011">
<div class="flashcard-front">

**P:** Que hace el comando `credentials=`?

</div>
<div class="flashcard-back">

**R:** Archivo con credenciales

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.2">
</div>

<div class="flashcard" data-id="304.2-fc-012">
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

<div class="flashcard" data-id="304.2-fc-013">
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

<div class="flashcard" data-id="304.2-fc-014">
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

<div class="flashcard" data-id="304.2-fc-015">
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

<div class="flashcard" data-id="304.2-fc-016">
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

<div class="flashcard" data-id="304.2-fc-017">
<div class="flashcard-front">

**P:** Que es/son cifsiostat?

</div>
<div class="flashcard-back">

**R:** `cifsiostat` muestra estadísticas de I/O de montajes CIFS:

</div>
</div>

---

