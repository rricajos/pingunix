---
title: "212.4 - Flashcards"
tags:
  - lpic-2
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-2
subtema: "212.4"
---

# Flashcards: 212.4 - Tareas De Seguridad

> 38 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué archivo de fail2ban se debe crear o modificar para personalizar la configuración sin que las actualizaciones del paquete sobrescriban los cambios?

</div>
<div class="flashcard-back">

**R:** c) /etc/fail2ban/jail.local. El archivo `jail.local` sobrescribe los valores de `jail.conf`. Las actualizaciones del paquete fail2ban pueden sobrescribir `jail.conf`, pero nunca tocan `jail.local`. Por eso, las personalizaciones siempre deben hacerse en `jail.local`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué comando de AIDE se usa para crear la base de datos inicial de integridad de archivos?

</div>
<div class="flashcard-back">

**R:** b) `aide --init`. El comando `aide --init` genera la base de datos inicial que contiene las huellas digitales de los archivos monitorizados. Después se debe mover el archivo generado (`aide.db.new`) a su ubicación definitiva (`aide.db`) para poder ejecutar verificaciones con `aide --check`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-003">
<div class="flashcard-front">

**P:** ¿Qué comando de fail2ban desbloquea la IP 10.0.0.50 del jail sshd?

</div>
<div class="flashcard-back">

**R:** b) `fail2ban-client set sshd unbanip 10.0.0.50`. El comando `fail2ban-client set <jail> unbanip <IP>` elimina el bloqueo de una IP específica en el jail indicado. De forma complementaria, `set <jail> banip <IP>` permite bloquear una IP manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué herramienta se usa para editar de forma segura el archivo `/etc/sudoers`?

</div>
<div class="flashcard-back">

**R:** c) `visudo`. El comando `visudo` abre el archivo `/etc/sudoers` con un editor y valida la sintaxis antes de guardarlo. Esto evita dejar el archivo en un estado inválido que podría bloquear el acceso sudo para todos los usuarios del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué comando de rkhunter se debe ejecutar después de una actualización legítima del sistema para evitar falsos positivos?

</div>
<div class="flashcard-back">

**R:** b) `rkhunter --propupd`. El comando `rkhunter --propupd` actualiza las propiedades de los archivos del sistema almacenadas en la base de datos de referencia. Después de actualizaciones legítimas (apt upgrade, dnf update), los binarios cambian y sin ejecutar `--propupd`, rkhunter los reportaría como modificados. Nota: `--update` actualiza las firmas de rootkits conocidos, no las propiedades del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué comando de `ss` muestra todos los puertos TCP en estado de escucha junto con el proceso asociado?

</div>
<div class="flashcard-back">

**R:** b) `ss -tlnp`. Las opciones son: `-t` (TCP), `-l` (listening/escucha), `-n` (numérico, sin resolver nombres), `-p` (mostrar proceso). Es el equivalente moderno de `netstat -tlnp`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-007">
<div class="flashcard-front">

**P:** En `/etc/security/limits.conf`, ¿qué tipo de límite puede el propio usuario aumentar hasta el valor hard?

</div>
<div class="flashcard-back">

**R:** b) soft. Los límites `soft` representan el valor actual que aplica al usuario, pero este puede aumentarlo con `ulimit` hasta alcanzar el valor `hard`. Solo root puede aumentar los límites `hard`. El tipo `-` establece ambos valores (soft y hard) simultáneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando de auditd crea una regla para vigilar cambios de escritura y atributos en el archivo `/etc/shadow`?

</div>
<div class="flashcard-back">

**R:** b) `auditctl -w /etc/shadow -p wa -k shadow`. La opción `-w` define un archivo o directorio a vigilar, `-p wa` especifica los permisos a monitorizar (w=escritura, a=cambio de atributos), y `-k shadow` asigna una clave para facilitar la búsqueda posterior con `ausearch -k shadow`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué opción de nmap realiza un escaneo SYN (half-open) que requiere privilegios de root?

</div>
<div class="flashcard-back">

**R:** b) `nmap -sS`. El escaneo SYN (`-sS`) envía paquetes SYN pero no completa el handshake TCP, lo que lo hace más sigiloso y rápido. Requiere privilegios de root porque necesita crear paquetes raw. `-sT` es el escaneo TCP connect (no requiere root), `-sU` es para UDP, y `-sP`/`-sn` es para descubrimiento de hosts.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-010">
<div class="flashcard-front">

**P:** ¿Qué comando de aureport genera un informe de todos los intentos de autenticación registrados por el sistema de auditoría?

</div>
<div class="flashcard-back">

**R:** b) `aureport -au`. El comando `aureport -au` genera un informe de eventos de autenticación. Otras opciones útiles incluyen: `aureport -f` (acceso a archivos), `aureport --failed` (eventos fallidos), `aureport -l` (logins), y `aureport` sin opciones para un resumen general.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué parámetro de fail2ban define el tiempo en segundos durante el cual se cuentan los intentos fallidos de autenticación?

</div>
<div class="flashcard-back">

**R:** c) findtime. El parámetro `findtime` define la ventana de tiempo (en segundos) durante la cual se cuentan los intentos fallidos. Si un host alcanza `maxretry` intentos fallidos dentro de `findtime` segundos, se aplica el bloqueo durante `bantime` segundos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué comando de AIDE compara el estado actual del sistema con la base de datos de referencia para detectar cambios?

</div>
<div class="flashcard-back">

**R:** c) `aide --check`. El comando `aide --check` compara el estado actual del sistema de archivos con la base de datos de referencia previamente generada con `aide --init`. Reporta archivos añadidos, eliminados o modificados, incluyendo cambios en permisos, propietario, tamaño y hashes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué directiva de `/etc/sudoers` permite a un usuario ejecutar comandos como root sin solicitar contraseña?

</div>
<div class="flashcard-back">

**R:** b) NOPASSWD. La etiqueta `NOPASSWD:` en una regla de sudoers permite que el usuario ejecute los comandos especificados sin necesidad de introducir su contraseña. Por ejemplo: `backup ALL=(root) NOPASSWD: /usr/bin/tar` permite al usuario backup ejecutar tar como root sin contraseña.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-014">
<div class="flashcard-front">

**P:** ¿Qué opción de nmap detecta las versiones de los servicios que se ejecutan en los puertos abiertos?

</div>
<div class="flashcard-back">

**R:** b) `nmap -sV`. La opción `-sV` de nmap realiza la detección de versiones de servicios (service/version detection), intentando determinar qué software y versión escucha en cada puerto abierto. La opción `-O` detecta el sistema operativo, y `-A` activa detección agresiva que combina varias opciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué herramienta de auditoría de seguridad genera un "hardening index" y sugerencias de mejora sin modificar el sistema?

</div>
<div class="flashcard-back">

**R:** c) Lynis. Lynis es una herramienta de auditoría de seguridad no intrusiva que analiza la configuración del sistema y genera un índice de endurecimiento (hardening index) junto con recomendaciones específicas. No modifica la configuración automáticamente; solo reporta hallazgos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-016">
<div class="flashcard-front">

**P:** ¿Qué parámetro del archivo `/etc/security/limits.conf` se utiliza para aplicar un límite tanto soft como hard simultáneamente?

</div>
<div class="flashcard-back">

**R:** c) `-`. El tipo `-` en limits.conf establece ambos valores (soft y hard) simultáneamente. Por ejemplo, `admin - core unlimited` establece tanto el límite soft como el hard de archivos core a ilimitado para el usuario admin.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué directiva de `/etc/sudoers` define un alias para un conjunto de comandos relacionados?

</div>
<div class="flashcard-back">

**R:** b) Cmnd_Alias. `Cmnd_Alias` permite agrupar múltiples comandos bajo un nombre descriptivo. Por ejemplo: `Cmnd_Alias NETWORKING = /sbin/ifconfig, /sbin/route, /usr/bin/ip` define un alias que luego puede usarse en las reglas de acceso para simplificar la gestión.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-018">
<div class="flashcard-front">

**P:** ¿Qué opción de chkrootkit ejecuta el escaneo en modo silencioso, mostrando solo las alertas encontradas?

</div>
<div class="flashcard-back">

**R:** b) `-q`. La opción `-q` (quiet) de chkrootkit ejecuta el escaneo en modo silencioso, mostrando únicamente los resultados que indican una posible infección o anomalía. Sin esta opción, chkrootkit muestra el resultado de cada prueba individual.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué directiva de Defaults en `/etc/sudoers` establece el tiempo en minutos antes de que sudo vuelva a solicitar la contraseña?

</div>
<div class="flashcard-back">

**R:** b) Defaults timestamp_timeout. La directiva `Defaults timestamp_timeout=5` establece que sudo recordará la autenticación del usuario durante 5 minutos antes de volver a solicitar la contraseña. Un valor de 0 obliga a introducir la contraseña en cada ejecución de sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué parámetro de fail2ban define las direcciones IP que nunca serán bloqueadas?

</div>
<div class="flashcard-back">

**R:** b) ignoreip. El parámetro `ignoreip` en la configuración de fail2ban especifica una lista de direcciones IP, redes CIDR o nombres de host que nunca serán bloqueados, sin importar cuántos intentos fallidos generen. Típicamente incluye `127.0.0.1/8`, `::1` y la red local de administración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-021">
<div class="flashcard-front">

**P:** ¿Qué comando de fail2ban muestra el estado del jail "sshd", incluyendo las IPs bloqueadas?

</div>
<div class="flashcard-back">

**R:** fail2ban-client status sshd. El comando `fail2ban-client status sshd` muestra información detallada del jail especificado, incluyendo el número de intentos fallidos detectados, las acciones ejecutadas y la lista de direcciones IP actualmente bloqueadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-022">
<div class="flashcard-front">

**P:** ¿Qué comando inicializa la base de datos de Tripwire para la verificación de integridad?

</div>
<div class="flashcard-back">

**R:** tripwire --init. El comando `tripwire --init` genera la base de datos inicial que contiene las huellas digitales de los archivos del sistema según la política configurada. Debe ejecutarse en un sistema limpio y la base de datos resultante debe protegerse almacenándola en un medio seguro.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-023">
<div class="flashcard-front">

**P:** ¿Qué comando de nmap realiza un escaneo de descubrimiento de hosts (ping scan) en una red sin escanear puertos?

</div>
<div class="flashcard-back">

**R:** nmap -sn 192.168.1.0/24. El comando `nmap -sn` (anteriormente `-sP`) realiza un descubrimiento de hosts sin escanear puertos, determinando qué hosts están activos en la red. Es útil para inventariar dispositivos en una subred sin generar tráfico de escaneo de puertos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-024">
<div class="flashcard-front">

**P:** ¿Qué comando ejecuta una auditoría completa del sistema con Lynis?

</div>
<div class="flashcard-back">

**R:** lynis audit system. El comando `lynis audit system` ejecuta una auditoría completa del sistema, evaluando la configuración de seguridad, verificando servicios, analizando permisos de archivos y generando un informe con el hardening index y recomendaciones de mejora.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-025">
<div class="flashcard-front">

**P:** ¿Qué comando de auditd busca en los registros de auditoría todos los eventos asociados a una clave específica?

</div>
<div class="flashcard-back">

**R:** ausearch -k passwd_changes. El comando `ausearch -k` busca eventos en los registros de auditoría filtrados por la clave especificada. Las claves se asignan al crear reglas con `auditctl -w ... -k clave`, permitiendo categorizar y buscar eventos de forma eficiente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Siempre crear/modificar `jail.local` en lugar de `jail.conf`. Los valores en `ja...

</div>
<div class="flashcard-back">

**R:** Siempre crear/modificar `jail.local` en lugar de `jail.conf`. Los valores en `jail.local` sobrescriben los de `jail.conf`. Las actualizaciones del paquete pueden sobrescribir `jail.conf`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Tanto AIDE como Tripwire deben inicializarse en un sistema limpio (recién instal...

</div>
<div class="flashcard-back">

**R:** Tanto AIDE como Tripwire deben inicializarse en un sistema limpio (recién instalado). La base de datos debe almacenarse en un medio de solo lectura o externo para evitar que un atacante la modifique.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: rkhunter debe actualizarse regularmente con `--update` y ejecutar `--propupd` de...

</div>
<div class="flashcard-back">

**R:** rkhunter debe actualizarse regularmente con `--update` y ejecutar `--propupd` después de actualizaciones legítimas del sistema para evitar falsos positivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: `ss` es el reemplazo moderno de `netstat`. Ambos con las opciones `-tlnp` muestr...

</div>
<div class="flashcard-back">

**R:** `ss` es el reemplazo moderno de `netstat`. Ambos con las opciones `-tlnp` muestran los puertos TCP en escucha con el proceso asociado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-030">
<div class="flashcard-front">

**P:** Tip de examen: Los límites `soft` pueden ser aumentados por el usuario hasta el valor `hard`. S...

</div>
<div class="flashcard-back">

**R:** Los límites `soft` pueden ser aumentados por el usuario hasta el valor `hard`. Solo root puede aumentar los límites `hard`. El tipo `-` establece ambos simultáneamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-031">
<div class="flashcard-front">

**P:** Tip de examen: Nunca editar `/etc/sudoers` directamente con un editor de texto. `visudo` valida...

</div>
<div class="flashcard-back">

**R:** Nunca editar `/etc/sudoers` directamente con un editor de texto. `visudo` valida la sintaxis antes de guardar, evitando dejar el archivo en un estado inválido que podría bloquear el acceso sudo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-032">
<div class="flashcard-front">

**P:** Tip de examen: Lynis es una herramienta de auditoría no intrusiva que solo analiza y reporta. N...

</div>
<div class="flashcard-back">

**R:** Lynis es una herramienta de auditoría no intrusiva que solo analiza y reporta. No modifica la configuración del sistema automáticamente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-033">
<div class="flashcard-front">

**P:** Que hace el comando `/etc/fail2ban/jail.conf`?

</div>
<div class="flashcard-back">

**R:** Configuración por defecto (no modificar)

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-034">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** Las tareas de seguridad del sistema incluyen la detección de intrusiones, monitorización de integridad de archivos, auditoría de puertos abiertos, protección contra ataques de fuerza bruta, configuraci

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-035">
<div class="flashcard-front">

**P:** Que es/son fail2ban: protección contra fuerza bruta?

</div>
<div class="flashcard-back">

**R:** **fail2ban** monitoriza archivos de log y bloquea IPs que muestran comportamiento malicioso (intentos fallidos de autenticación).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-036">
<div class="flashcard-front">

**P:** Que es/son Sistema de auditoría (auditd)?

</div>
<div class="flashcard-back">

**R:** El demonio `auditd` registra eventos del sistema para cumplimiento normativo y detección de intrusiones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-037">
<div class="flashcard-front">

**P:** Que es/son Lynis: auditoría de seguridad?

</div>
<div class="flashcard-back">

**R:** Lynis es una herramienta de auditoría de seguridad que evalúa la configuración del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="212.4">
</div>

<div class="flashcard" data-id="212.4-fc-038">
<div class="flashcard-front">

**P:** Que es/son Trampas del examen?

</div>
<div class="flashcard-back">

**R:** > Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

</div>
</div>

---

