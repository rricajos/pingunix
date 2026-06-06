---
title: "304.3 - Ejercicios: Clientes Windows"
description: "Ejercicios de práctica para integración de clientes Windows con Samba AD"
tipo: ejercicios
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 304 - Configuración de Clientes Samba"
subtema: "304.3"
peso: 2
tags:
  - lpic-3
  - tema-304
  - samba
  - windows
  - ejercicios
---

# 304.3 Ejercicios - Clientes Windows

### Pregunta 1
¿Cuáles son los requisitos fundamentales para unir un cliente Windows a un dominio Samba AD?

a) Solo se necesita la dirección IP del servidor
b) DNS funcional, sincronización de tiempo y credenciales de administrador
c) Solo se necesita el nombre del dominio y la contraseña de administrador
d) VPN configurada y certificado SSL del servidor

<details><summary>Respuesta</summary>

**b) DNS funcional, sincronización de tiempo y credenciales de administrador**

Para unir un cliente Windows a un dominio Samba AD se requiere: DNS correctamente configurado (el cliente debe resolver el DC), sincronización de tiempo (Kerberos tolera máximo 5 minutos de diferencia) y credenciales con privilegios de unión al dominio.
</details>

### Pregunta 2
¿Qué comando de Windows mapea una unidad de red Z: de forma persistente?

a) `net share Z: \\servidor\share /persistent`
b) `net use Z: \\servidor\share /persistent:yes`
c) `mount Z: \\servidor\share -o persistent`
d) `net map Z: \\servidor\share /auto`

<details><summary>Respuesta</summary>

**b) `net use Z: \\servidor\share /persistent:yes`**

`net use` con la opción `/persistent:yes` crea una conexión que se restaura automáticamente en cada inicio de sesión del usuario. Sin esta opción, la conexión solo dura hasta que el usuario cierra sesión.
</details>

### Pregunta 3
¿Dónde se almacenan las plantillas administrativas ADMX en SYSVOL para que estén disponibles centralmente?

a) `\\dominio\sysvol\dominio\Policies\Templates\`
b) `\\dominio\sysvol\dominio\Policies\PolicyDefinitions\`
c) `\\dominio\sysvol\dominio\ADMX\`
d) `\\dominio\sysvol\dominio\Policies\Administrative\`

<details><summary>Respuesta</summary>

**b) `\\dominio\sysvol\dominio\Policies\PolicyDefinitions\`**

El almacén central de plantillas ADMX se encuentra en `PolicyDefinitions` dentro del directorio de políticas de SYSVOL. Los archivos ADMX van en este directorio y los archivos ADML (traducciones) van en subdirectorios por idioma (ej: `es-ES/`).
</details>

### Pregunta 4
¿Qué comando de Windows fuerza la actualización inmediata de las políticas de grupo?

a) `gpo /refresh`
b) `gpresult /force`
c) `gpupdate /force`
d) `secedit /refreshpolicy`

<details><summary>Respuesta</summary>

**c) `gpupdate /force`**

`gpupdate /force` fuerza al cliente Windows a descargar y aplicar todas las políticas de grupo del dominio, independientemente de si han cambiado desde la última actualización. `gpresult` solo muestra las políticas aplicadas.
</details>

### Pregunta 5
¿Qué herramienta RSAT se utiliza para gestionar usuarios y grupos en un dominio Samba AD?

a) `gpmc.msc`
b) `dnsmgmt.msc`
c) `dsa.msc`
d) `compmgmt.msc`

<details><summary>Respuesta</summary>

**c) `dsa.msc`**

`dsa.msc` (Active Directory Users and Computers) es la herramienta RSAT para gestionar usuarios, grupos, equipos y unidades organizativas en el dominio. `gpmc.msc` es para GPOs, `dnsmgmt.msc` para DNS.
</details>

### Pregunta 6
¿Qué comando de samba-tool lista todas las políticas de grupo del dominio?

a) `samba-tool gpo list`
b) `samba-tool gpo listall`
c) `samba-tool gpo show`
d) `samba-tool policy list`

<details><summary>Respuesta</summary>

**b) `samba-tool gpo listall`**

`samba-tool gpo listall` muestra todas las GPOs del dominio con sus GUIDs y nombres. `samba-tool gpo list usuario` muestra las GPOs aplicadas a un usuario específico.
</details>

### Pregunta 7
¿Qué archivo dentro de una GPO contiene las configuraciones de registro que se aplican a los equipos?

a) `Machine\Settings.xml`
b) `Machine\Registry.pol`
c) `Computer\Policies.reg`
d) `Machine\GPT.INI`

<details><summary>Respuesta</summary>

**b) `Machine\Registry.pol`**

`Machine\Registry.pol` es el archivo binario que contiene las configuraciones de registro que la GPO aplica a los equipos (Computer Configuration). Para configuraciones de usuario, el archivo equivalente está en `User\Registry.pol`.
</details>

### Pregunta 8
¿Qué comando de Windows permite verificar que el canal seguro con el controlador de dominio está funcionando?

a) `netstat /dc`
b) `nslookup _ldap._tcp.dominio`
c) `nltest /sc_query:dominio`
d) `ping dc.dominio`

<details><summary>Respuesta</summary>

**c) `nltest /sc_query:dominio`**

`nltest /sc_query:dominio` verifica el estado del canal seguro entre el equipo y el controlador de dominio. Un canal seguro funcional es necesario para la autenticación y la aplicación de políticas de grupo.
</details>

### Pregunta 9
¿Qué protocolo de autenticación usan los clientes Windows unidos al dominio Samba AD para Single Sign-On?

a) NTLM v1
b) LDAP bind
c) Kerberos
d) RADIUS

<details><summary>Respuesta</summary>

**c) Kerberos**

Los clientes Windows unidos al dominio utilizan Kerberos automáticamente para Single Sign-On (SSO). Al iniciar sesión, obtienen un TGT del KDC y lo usan para solicitar tickets de servicio al acceder a recursos del dominio.
</details>

### Pregunta 10
Un administrador quiere desplegar una impresora compartida desde Samba a todos los equipos Windows del dominio. ¿Cuál es el método más eficiente?

a) Instalar manualmente la impresora en cada equipo
b) Usar una GPO para desplegar la impresora automáticamente
c) Enviar un correo con instrucciones de instalación
d) Usar un script que ejecute `net use` en cada equipo

<details><summary>Respuesta</summary>

**b) Usar una GPO para desplegar la impresora automáticamente**

Las GPOs permiten desplegar impresoras de forma centralizada a equipos o usuarios. La configuración se realiza en Computer Configuration > Policies > Windows Settings > Deployed Printers (o mediante Preferences > Control Panel Settings > Printers).
</details>

### Pregunta 11

¿Cuál es la tolerancia máxima de diferencia de reloj entre un cliente Windows y el controlador de dominio Samba AD para que la autenticación Kerberos funcione?

a) 1 minuto
b) 5 minutos
c) 10 minutos
d) 30 minutos

<details><summary>Respuesta</summary>

**b) 5 minutos**

Kerberos tiene una tolerancia máxima de 5 minutos (por defecto) de diferencia de reloj entre el cliente y el servidor. Si la diferencia es mayor, la autenticación falla. Por eso es imprescindible tener NTP configurado correctamente en todos los equipos del dominio.
</details>

### Pregunta 12

¿Qué comando de Windows localiza el controlador de dominio para un dominio dado?

a) `nslookup dc empresa.local`
b) `nltest /dsgetdc:empresa.local`
c) `netstat /finddc empresa.local`
d) `ipconfig /finddc empresa.local`

<details><summary>Respuesta</summary>

**b) `nltest /dsgetdc:empresa.local`**

`nltest /dsgetdc:empresa.local` consulta el DNS para localizar un controlador de dominio disponible para el dominio especificado. Muestra información como el nombre del DC, su dirección IP y el sitio al que pertenece.
</details>

### Pregunta 13

¿Qué comando de PowerShell se utiliza para unir un equipo Windows al dominio Samba AD?

a) `Join-Domain -Name "empresa.local"`
b) `Add-Computer -DomainName "empresa.local" -Credential EMPRESA\administrador -Restart`
c) `Set-Computer -Domain "empresa.local" -Admin administrador`
d) `New-DomainMember -Domain "empresa.local"`

<details><summary>Respuesta</summary>

**b) `Add-Computer -DomainName "empresa.local" -Credential EMPRESA\administrador -Restart`**

`Add-Computer` es el cmdlet de PowerShell para unir un equipo a un dominio. `-DomainName` especifica el dominio, `-Credential` las credenciales con privilegios de unión y `-Restart` reinicia el equipo para completar el proceso.
</details>

### Pregunta 14

¿Dónde se almacenan los archivos ADML (traducciones de plantillas administrativas) dentro de SYSVOL?

a) En el mismo directorio que los archivos ADMX
b) En subdirectorios por idioma dentro de `PolicyDefinitions` (ej: `es-ES/`)
c) En `\\dominio\sysvol\dominio\Translations\`
d) En `\\dominio\sysvol\dominio\Policies\Languages\`

<details><summary>Respuesta</summary>

**b) En subdirectorios por idioma dentro de `PolicyDefinitions` (ej: `es-ES/`)**

Los archivos ADML contienen las traducciones de las plantillas ADMX y se organizan en subdirectorios por código de idioma (como `es-ES/`, `en-US/`) dentro del directorio `PolicyDefinitions` en SYSVOL.
</details>

### Pregunta 15

¿Qué comando de Windows muestra las políticas de grupo aplicadas actualmente a un equipo?

a) `gpupdate /show`
b) `gpedit.msc /list`
c) `gpresult /r`
d) `nltest /gpo`

<details><summary>Respuesta</summary>

**c) `gpresult /r`**

`gpresult /r` genera un informe resumen de las políticas de grupo aplicadas al equipo y al usuario actual, mostrando las GPOs aplicadas, las filtradas y la información del dominio. Para un informe más detallado se puede usar `gpresult /h informe.html`.
</details>

### Pregunta 16

¿Qué registro SRV de DNS debe resolverse correctamente para que un cliente Windows localice el servicio LDAP del dominio?

a) `_kerberos._udp.empresa.local`
b) `_ldap._tcp.empresa.local`
c) `_dc._tcp.empresa.local`
d) `_samba._tcp.empresa.local`

<details><summary>Respuesta</summary>

**b) `_ldap._tcp.empresa.local`**

El registro SRV `_ldap._tcp.empresa.local` permite a los clientes Windows localizar los controladores de dominio que ofrecen el servicio LDAP. Sin este registro, los clientes no pueden encontrar el DC para la autenticación y aplicación de políticas.
</details>

### Pregunta 17

¿Qué comando de `samba-tool` vincula una GPO a una unidad organizativa?

a) `samba-tool gpo link`
b) `samba-tool gpo setlink`
c) `samba-tool gpo apply`
d) `samba-tool gpo bind`

<details><summary>Respuesta</summary>

**b) `samba-tool gpo setlink`**

`samba-tool gpo setlink` vincula una GPO existente (identificada por su GUID) a un contenedor del directorio como una unidad organizativa (OU). La sintaxis es: `samba-tool gpo setlink "OU=...,DC=..." {GUID}`.
</details>

### Pregunta 18

¿Qué comando de Windows se utiliza desde la línea de comandos para unir un equipo a un dominio?

a) `netsh join /domain:empresa.local`
b) `netdom join %COMPUTERNAME% /domain:empresa.local /userd:administrador /passwordd:*`
c) `net computer /add /domain:empresa.local`
d) `wmic domain join empresa.local`

<details><summary>Respuesta</summary>

**b) `netdom join %COMPUTERNAME% /domain:empresa.local /userd:administrador /passwordd:*`**

`netdom join` es el comando de línea de comandos de Windows para unir un equipo a un dominio. `%COMPUTERNAME%` es la variable de entorno con el nombre del equipo, `/userd` especifica el usuario y `/passwordd:*` solicita la contraseña de forma interactiva.
</details>

### Pregunta 19

¿Qué comando de Windows permite ver los tickets Kerberos actualmente en caché?

a) `kerberos /list`
b) `klist`
c) `netdom /tickets`
d) `kerbtray`

<details><summary>Respuesta</summary>

**b) `klist`**

`klist` muestra los tickets Kerberos almacenados en la caché del usuario actual, incluyendo el TGT y los tickets de servicio. `klist purge` permite eliminar todos los tickets de la caché para forzar una nueva autenticación.
</details>

### Pregunta 20

¿Qué opción de `net use` guarda las credenciales en el Windows Credential Manager (Windows Vault)?

a) `/persistent:yes`
b) `/savecred`
c) `/remember`
d) `/store`

<details><summary>Respuesta</summary>

**b) `/savecred`**

La opción `/savecred` almacena las credenciales utilizadas en el Windows Credential Manager (Windows Vault). A diferencia de `/persistent:yes`, que solo mantiene el mapeo entre sesiones, `/savecred` guarda las credenciales para no tener que introducirlas nuevamente.
</details>

### Pregunta 21

Escribe el comando de `samba-tool` para listar todas las GPOs del dominio.

<input type="text" class="fill-blank" data-answer="samba-tool gpo listall" data-alt="samba-tool gpo listall" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool gpo listall**

`samba-tool gpo listall` muestra todas las políticas de grupo definidas en el dominio Samba AD, incluyendo su GUID, nombre y la ruta en SYSVOL donde se almacenan.
</details>

### Pregunta 22

Escribe el comando de Windows para forzar la actualización inmediata de las políticas de grupo.

<input type="text" class="fill-blank" data-answer="gpupdate /force" data-alt="gpupdate /force" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**gpupdate /force**

`gpupdate /force` fuerza al cliente Windows a descargar y reaplicar todas las políticas de grupo del dominio, independientemente de si han cambiado desde la última actualización. Sin `/force`, solo se aplican las políticas modificadas.
</details>

### Pregunta 23

Escribe el comando de `samba-tool` para crear una nueva GPO llamada "Politica de escritorio".

<input type="text" class="fill-blank" data-answer="samba-tool gpo create &quot;Politica de escritorio&quot;" data-alt="samba-tool gpo create 'Politica de escritorio'" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**samba-tool gpo create "Politica de escritorio"**

`samba-tool gpo create` crea una nueva política de grupo en el dominio Samba AD. El comando devuelve el GUID asignado a la GPO, que se utiliza posteriormente para vincularla a OUs con `samba-tool gpo setlink`.
</details>

### Pregunta 24

Escribe el comando de Windows para verificar el estado del canal seguro con el dominio `empresa.local`.

<input type="text" class="fill-blank" data-answer="nltest /sc_query:empresa.local" data-alt="nltest /sc_query:empresa.local" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**nltest /sc_query:empresa.local**

`nltest /sc_query:empresa.local` verifica el estado del canal seguro entre el equipo y el controlador de dominio. Si el canal seguro está roto, el equipo no podrá autenticarse correctamente en el dominio.
</details>

### Pregunta 25

Escribe el comando de Windows para mapear la unidad Z: al recurso compartido `\\servidor\datos` con el usuario `EMPRESA\jperez`.

<input type="text" class="fill-blank" data-answer="net use Z: \\servidor\datos /user:EMPRESA\jperez" data-alt="net use Z: \\\\servidor\\datos /user:EMPRESA\\jperez" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**net use Z: \\servidor\datos /user:EMPRESA\jperez**

`net use` mapea una letra de unidad a un recurso compartido de red. `/user:EMPRESA\jperez` especifica las credenciales del dominio. Se puede añadir `/persistent:yes` para que el mapeo se restaure automáticamente en cada inicio de sesión.
</details>
