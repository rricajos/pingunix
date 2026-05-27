---
title: "303.1 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "303.1"
---

# Flashcards: 303.1 - Comparticion De Archivos

> 16 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-001">
<div class="flashcard-front">

**P:** Tip de examen: Cada sección en smb.conf (excepto `[global]`) define un recurso compartido. El n...

</div>
<div class="flashcard-back">

**R:** Cada sección en smb.conf (excepto `[global]`) define un recurso compartido. El nombre entre corchetes es el nombre con el que se accede desde la red.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-002">
<div class="flashcard-front">

**P:** Tip de examen: Un share con `browseable = no` sigue siendo accesible; simplemente no aparece al...

</div>
<div class="flashcard-back">

**R:** Un share con `browseable = no` sigue siendo accesible; simplemente no aparece al listar. No confundir con restricción de acceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-003">
<div class="flashcard-front">

**P:** Tip de examen: `writable` y `read only` son opuestos. `read only = yes` es el valor por defecto...

</div>
<div class="flashcard-back">

**R:** `writable` y `read only` son opuestos. `read only = yes` es el valor por defecto.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-004">
<div class="flashcard-front">

**P:** Tip de examen: `write list` sobrescribe `read only = yes` para los usuarios listados. `read lis...

</div>
<div class="flashcard-back">

**R:** `write list` sobrescribe `read only = yes` para los usuarios listados. `read list` sobrescribe `writable = yes`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-005">
<div class="flashcard-front">

**P:** Tip de examen: El orden de aplicación es: primero se aplica `create mask` (AND), luego `force c...

</div>
<div class="flashcard-back">

**R:** El orden de aplicación es: primero se aplica `create mask` (AND), luego `force create mode` (OR). El resultado final combina ambos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-006">
<div class="flashcard-front">

**P:** Tip de examen: `[homes]` crea shares dinámicos basados en los directorios home de los usuarios ...

</div>
<div class="flashcard-back">

**R:** `[homes]` crea shares dinámicos basados en los directorios home de los usuarios del sistema. Con `browseable = no`, solo aparece el share del propio usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-007">
<div class="flashcard-front">

**P:** Tip de examen: `map to guest = Bad User` mapea a invitado las conexiones con usuarios que no ex...

</div>
<div class="flashcard-back">

**R:** `map to guest = Bad User` mapea a invitado las conexiones con usuarios que no existen en Samba. Esto es diferente de `Never` (rechaza) o `Bad Password` (mapea si la contraseña falla).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-008">
<div class="flashcard-front">

**P:** Tip de examen: `hide files` solo oculta visualmente; `veto files` bloquea el acceso completamen...

</div>
<div class="flashcard-back">

**R:** `hide files` solo oculta visualmente; `veto files` bloquea el acceso completamente. `delete veto files` controla si un directorio con archivos vetados puede eliminarse.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-009">
<div class="flashcard-front">

**P:** Tip de examen: VFS (Virtual File System) permite extender la funcionalidad de Samba con módulos...

</div>
<div class="flashcard-back">

**R:** VFS (Virtual File System) permite extender la funcionalidad de Samba con módulos. `recycle` es uno de los más comunes. Se activa con `vfs objects = recycle` en la sección del share o en `[global]`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-010">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** La compartición de archivos es una de las funcionalidades principales de Samba. A través del archivo de configuración `smb.conf`, los administradores definen los recursos compartidos (shares) que estar

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-011">
<div class="flashcard-front">

**P:** Que es/son Estructura básica de un recurso compartido en smb.conf?

</div>
<div class="flashcard-back">

**R:** Cada recurso compartido se define como una sección en `smb.conf` con corchetes:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-012">
<div class="flashcard-front">

**P:** Que es/son El recurso compartido [homes]?

</div>
<div class="flashcard-back">

**R:** El share especial `[homes]` proporciona directorios personales automáticos:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-013">
<div class="flashcard-front">

**P:** Que es/son Acceso de invitado (Guest Access)?

</div>
<div class="flashcard-back">

**R:** Para permitir acceso sin autenticación:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-014">
<div class="flashcard-front">

**P:** Que es/son Módulo VFS de Papelera de Reciclaje?

</div>
<div class="flashcard-back">

**R:** El módulo VFS `recycle` implementa una papelera de reciclaje en Samba:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-015">
<div class="flashcard-front">

**P:** Que es/son Verificación de la configuración?

</div>
<div class="flashcard-back">

**R:** Siempre verificar `smb.conf` después de cambios:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="303.1">
</div>

<div class="flashcard" data-id="303.1-fc-016">
<div class="flashcard-front">

**P:** Que es/son Variables útiles en smb.conf?

</div>
<div class="flashcard-back">

**R:** | Variable | Significado                          |

</div>
</div>

---

