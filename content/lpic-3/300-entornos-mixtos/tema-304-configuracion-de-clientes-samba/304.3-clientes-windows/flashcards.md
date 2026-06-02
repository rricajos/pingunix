---
title: "304.3 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "304.3"
---

# Flashcards: 304.3 - Clientes Windows

> 36 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-001">
<div class="flashcard-front">

**P:** ¿Cuáles son los requisitos fundamentales para unir un cliente Windows a un dominio Samba AD?

</div>
<div class="flashcard-back">

**R:** b) DNS funcional, sincronización de tiempo y credenciales de administrador. Para unir un cliente Windows a un dominio Samba AD se requiere: DNS correctamente configurado (el cliente debe resolver el DC), sincronización de tiempo (Kerberos tolera máximo 5 minutos de diferencia) y credenciales con privilegios de unión al dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows mapea una unidad de red Z: de forma persistente?

</div>
<div class="flashcard-back">

**R:** b) `net use Z: \\servidor\share /persistent:yes`. `net use` con la opción `/persistent:yes` crea una conexión que se restaura automáticamente en cada inicio de sesión del usuario. Sin esta opción, la conexión solo dura hasta que el usuario cierra sesión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-003">
<div class="flashcard-front">

**P:** ¿Dónde se almacenan las plantillas administrativas ADMX en SYSVOL para que estén disponibles centralmente?

</div>
<div class="flashcard-back">

**R:** b) `\\dominio\sysvol\dominio\Policies\PolicyDefinitions\`. El almacén central de plantillas ADMX se encuentra en `PolicyDefinitions` dentro del directorio de políticas de SYSVOL. Los archivos ADMX van en este directorio y los archivos ADML (traducciones) van en subdirectorios por idioma (ej: `es-ES/`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows fuerza la actualización inmediata de las políticas de grupo?

</div>
<div class="flashcard-back">

**R:** c) `gpupdate /force`. `gpupdate /force` fuerza al cliente Windows a descargar y aplicar todas las políticas de grupo del dominio, independientemente de si han cambiado desde la última actualización. `gpresult` solo muestra las políticas aplicadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-005">
<div class="flashcard-front">

**P:** ¿Qué herramienta RSAT se utiliza para gestionar usuarios y grupos en un dominio Samba AD?

</div>
<div class="flashcard-back">

**R:** c) `dsa.msc`. `dsa.msc` (Active Directory Users and Computers) es la herramienta RSAT para gestionar usuarios, grupos, equipos y unidades organizativas en el dominio. `gpmc.msc` es para GPOs, `dnsmgmt.msc` para DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando de samba-tool lista todas las políticas de grupo del dominio?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool gpo listall`. `samba-tool gpo listall` muestra todas las GPOs del dominio con sus GUIDs y nombres. `samba-tool gpo list usuario` muestra las GPOs aplicadas a un usuario específico.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-007">
<div class="flashcard-front">

**P:** ¿Qué archivo dentro de una GPO contiene las configuraciones de registro que se aplican a los equipos?

</div>
<div class="flashcard-back">

**R:** b) `Machine\Registry.pol`. `Machine\Registry.pol` es el archivo binario que contiene las configuraciones de registro que la GPO aplica a los equipos (Computer Configuration). Para configuraciones de usuario, el archivo equivalente está en `User\Registry.pol`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows permite verificar que el canal seguro con el controlador de dominio está funcionando?

</div>
<div class="flashcard-back">

**R:** c) `nltest /sc_query:dominio`. `nltest /sc_query:dominio` verifica el estado del canal seguro entre el equipo y el controlador de dominio. Un canal seguro funcional es necesario para la autenticación y la aplicación de políticas de grupo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-009">
<div class="flashcard-front">

**P:** ¿Qué protocolo de autenticación usan los clientes Windows unidos al dominio Samba AD para Single Sign-On?

</div>
<div class="flashcard-back">

**R:** c) Kerberos. Los clientes Windows unidos al dominio utilizan Kerberos automáticamente para Single Sign-On (SSO). Al iniciar sesión, obtienen un TGT del KDC y lo usan para solicitar tickets de servicio al acceder a recursos del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-010">
<div class="flashcard-front">

**P:** Un administrador quiere desplegar una impresora compartida desde Samba a todos los equipos Windows del dominio. ¿Cuál es el método más eficiente?

</div>
<div class="flashcard-back">

**R:** b) Usar una GPO para desplegar la impresora automáticamente. Las GPOs permiten desplegar impresoras de forma centralizada a equipos o usuarios. La configuración se realiza en Computer Configuration > Policies > Windows Settings > Deployed Printers (o mediante Preferences > Control Panel Settings > Printers).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-011">
<div class="flashcard-front">

**P:** ¿Cuál es la tolerancia máxima de diferencia de reloj entre un cliente Windows y el controlador de dominio Samba AD para que la autenticación Kerberos funcione?

</div>
<div class="flashcard-back">

**R:** b) 5 minutos. Kerberos tiene una tolerancia máxima de 5 minutos (por defecto) de diferencia de reloj entre el cliente y el servidor. Si la diferencia es mayor, la autenticación falla. Por eso es imprescindible tener NTP configurado correctamente en todos los equipos del dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows localiza el controlador de dominio para un dominio dado?

</div>
<div class="flashcard-back">

**R:** b) `nltest /dsgetdc:empresa.local`. `nltest /dsgetdc:empresa.local` consulta el DNS para localizar un controlador de dominio disponible para el dominio especificado. Muestra información como el nombre del DC, su dirección IP y el sitio al que pertenece.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-013">
<div class="flashcard-front">

**P:** ¿Qué comando de PowerShell se utiliza para unir un equipo Windows al dominio Samba AD?

</div>
<div class="flashcard-back">

**R:** b) `Add-Computer -DomainName "empresa.local" -Credential EMPRESA\administrador -Restart`. `Add-Computer` es el cmdlet de PowerShell para unir un equipo a un dominio. `-DomainName` especifica el dominio, `-Credential` las credenciales con privilegios de unión y `-Restart` reinicia el equipo para completar el proceso.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-014">
<div class="flashcard-front">

**P:** ¿Dónde se almacenan los archivos ADML (traducciones de plantillas administrativas) dentro de SYSVOL?

</div>
<div class="flashcard-back">

**R:** b) En subdirectorios por idioma dentro de `PolicyDefinitions` (ej: `es-ES/`). Los archivos ADML contienen las traducciones de las plantillas ADMX y se organizan en subdirectorios por código de idioma (como `es-ES/`, `en-US/`) dentro del directorio `PolicyDefinitions` en SYSVOL.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-015">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows muestra las políticas de grupo aplicadas actualmente a un equipo?

</div>
<div class="flashcard-back">

**R:** c) `gpresult /r`. `gpresult /r` genera un informe resumen de las políticas de grupo aplicadas al equipo y al usuario actual, mostrando las GPOs aplicadas, las filtradas y la información del dominio. Para un informe más detallado se puede usar `gpresult /h informe.html`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-016">
<div class="flashcard-front">

**P:** ¿Qué registro SRV de DNS debe resolverse correctamente para que un cliente Windows localice el servicio LDAP del dominio?

</div>
<div class="flashcard-back">

**R:** b) `_ldap._tcp.empresa.local`. El registro SRV `_ldap._tcp.empresa.local` permite a los clientes Windows localizar los controladores de dominio que ofrecen el servicio LDAP. Sin este registro, los clientes no pueden encontrar el DC para la autenticación y aplicación de políticas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando de `samba-tool` vincula una GPO a una unidad organizativa?

</div>
<div class="flashcard-back">

**R:** b) `samba-tool gpo setlink`. `samba-tool gpo setlink` vincula una GPO existente (identificada por su GUID) a un contenedor del directorio como una unidad organizativa (OU). La sintaxis es: `samba-tool gpo setlink "OU=...,DC=..." {GUID}`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-018">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows se utiliza desde la línea de comandos para unir un equipo a un dominio?

</div>
<div class="flashcard-back">

**R:** b) `netdom join %COMPUTERNAME% /domain:empresa.local /userd:administrador /passwordd:*`. `netdom join` es el comando de línea de comandos de Windows para unir un equipo a un dominio. `%COMPUTERNAME%` es la variable de entorno con el nombre del equipo, `/userd` especifica el usuario y `/passwordd:*` solicita la contraseña de forma interactiva.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-019">
<div class="flashcard-front">

**P:** ¿Qué comando de Windows permite ver los tickets Kerberos actualmente en caché?

</div>
<div class="flashcard-back">

**R:** b) `klist`. `klist` muestra los tickets Kerberos almacenados en la caché del usuario actual, incluyendo el TGT y los tickets de servicio. `klist purge` permite eliminar todos los tickets de la caché para forzar una nueva autenticación.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-020">
<div class="flashcard-front">

**P:** ¿Qué opción de `net use` guarda las credenciales en el Windows Credential Manager (Windows Vault)?

</div>
<div class="flashcard-back">

**R:** b) `/savecred`. La opción `/savecred` almacena las credenciales utilizadas en el Windows Credential Manager (Windows Vault). A diferencia de `/persistent:yes`, que solo mantiene el mapeo entre sesiones, `/savecred` guarda las credenciales para no tener que introducirlas nuevamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando de `samba-tool` para listar todas las GPOs del dominio. <input type="text" class="fill-blank" data-answer="samba-tool gpo listall" data-alt="samba-tool gpo listall" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** samba-tool gpo listall. `samba-tool gpo listall` muestra todas las políticas de grupo definidas en el dominio Samba AD, incluyendo su GUID, nombre y la ruta en SYSVOL donde se almacenan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando de Windows para forzar la actualización inmediata de las políticas de grupo. <input type="text" class="fill-blank" data-answer="gpupdate /force" data-alt="gpupdate /force" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** gpupdate /force. `gpupdate /force` fuerza al cliente Windows a descargar y reaplicar todas las políticas de grupo del dominio, independientemente de si han cambiado desde la última actualización. Sin `/force`, solo se aplican las políticas modificadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando de `samba-tool` para crear una nueva GPO llamada "Politica de escritorio". <input type="text" class="fill-blank" data-answer="samba-tool gpo create &quot;Politica de escritorio&quot;" data-alt="samba-tool gpo create 'Politica de escritorio'" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** samba-tool gpo create "Politica de escritorio". `samba-tool gpo create` crea una nueva política de grupo en el dominio Samba AD. El comando devuelve el GUID asignado a la GPO, que se utiliza posteriormente para vincularla a OUs con `samba-tool gpo setlink`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando de Windows para verificar el estado del canal seguro con el dominio `empresa.local`. <input type="text" class="fill-blank" data-answer="nltest /sc_query:empresa.local" data-alt="nltest /sc_query:empresa.local" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** nltest /sc_query:empresa.local. `nltest /sc_query:empresa.local` verifica el estado del canal seguro entre el equipo y el controlador de dominio. Si el canal seguro está roto, el equipo no podrá autenticarse correctamente en el dominio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando de Windows para mapear la unidad Z: al recurso compartido `\\servidor\datos` con el usuario `EMPRESA\jperez`. <input type="text" class="fill-blank" data-answer="net use Z: \\servidor\datos /user:EMPRESA\jperez" data-alt="net use Z: \\\\servidor\\datos /user:EMPRESA\\jperez" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** net use Z: \\servidor\datos /user:EMPRESA\jperez. `net use` mapea una letra de unidad a un recurso compartido de red. `/user:EMPRESA\jperez` especifica las credenciales del dominio. Se puede añadir `/persistent:yes` para que el mapeo se restaure automáticamente en cada inicio de sesión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: La unión al dominio requiere DNS funcional, sincronización de tiempo (NTP) y una...

</div>
<div class="flashcard-back">

**R:** La unión al dominio requiere DNS funcional, sincronización de tiempo (NTP) y una cuenta con privilegios de unión al dominio. El error más común es la resolución DNS incorrecta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: `net use` con `/persistent:yes` crea una conexión que se restaura automáticament...

</div>
<div class="flashcard-back">

**R:** `net use` con `/persistent:yes` crea una conexión que se restaura automáticamente en cada inicio de sesión del usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Las plantillas ADMX se copian al directorio `PolicyDefinitions` dentro de SYSVOL...

</div>
<div class="flashcard-back">

**R:** Las plantillas ADMX se copian al directorio `PolicyDefinitions` dentro de SYSVOL. Los archivos ADML (traducciones) van en subdirectorios por idioma (ej: `es-ES/`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: RSAT permite administrar un dominio Samba AD desde Windows usando las mismas her...

</div>
<div class="flashcard-back">

**R:** RSAT permite administrar un dominio Samba AD desde Windows usando las mismas herramientas que para un AD de Windows Server. La consola GPMC (Group Policy Management Console) es especialmente útil para crear y editar GPOs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Los clientes Windows unidos al dominio Samba AD utilizan Kerberos automáticament...

</div>
<div class="flashcard-back">

**R:** Los clientes Windows unidos al dominio Samba AD utilizan Kerberos automáticamente para SSO. Los problemas de autenticación suelen estar relacionados con la sincronización de tiempo o la resolución DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `/savecred`?

</div>
<div class="flashcard-back">

**R:** Guardar credenciales en Windows Vault

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-032">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Cuando Samba actúa como controlador de dominio Active Directory (AD DC), los clientes Windows pueden unirse al dominio, recibir políticas de grupo, mapear unidades de red e instalar impresoras de forma

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-033">
<div class="flashcard-front">

**P:** Que es/son Comando net use?

</div>
<div class="flashcard-back">

**R:** `net use` mapea unidades de red y conexiones a impresoras desde la línea de comandos de Windows:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-034">
<div class="flashcard-front">

**P:** Que es/son RSAT (Remote Server Administration Tools)?

</div>
<div class="flashcard-back">

**R:** RSAT permite administrar el dominio Samba AD desde Windows:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-035">
<div class="flashcard-front">

**P:** Que es/son Autenticación Kerberos desde clientes Windows?

</div>
<div class="flashcard-back">

**R:** Los clientes Windows unidos al dominio Samba AD usan Kerberos automáticamente:

</div>
</div>

---

<div class="flashcard-deck" data-subtema="304.3">
</div>

<div class="flashcard" data-id="304.3-fc-036">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

