---
title: "212.4 - Tareas de seguridad: Ejercicios"
tags: [lpic-2, examen-202, tema-212, ejercicios]
tipo: ejercicios
certificacion: lpic-2
examen: "202"
tema: "212"
subtema: "212.4"
---

# 212.4 - Tareas de seguridad: Ejercicios

### Pregunta 1

¿Qué archivo de fail2ban se debe crear o modificar para personalizar la configuración sin que las actualizaciones del paquete sobrescriban los cambios?

a) /etc/fail2ban/fail2ban.conf
b) /etc/fail2ban/jail.conf
c) /etc/fail2ban/jail.local
d) /etc/fail2ban/config.local

<details>
<summary>Respuesta</summary>

**c) /etc/fail2ban/jail.local**

El archivo `jail.local` sobrescribe los valores de `jail.conf`. Las actualizaciones del paquete fail2ban pueden sobrescribir `jail.conf`, pero nunca tocan `jail.local`. Por eso, las personalizaciones siempre deben hacerse en `jail.local`.
</details>

---

### Pregunta 2

¿Qué comando de AIDE se usa para crear la base de datos inicial de integridad de archivos?

a) `aide --create`
b) `aide --init`
c) `aide --baseline`
d) `aide --setup`

<details>
<summary>Respuesta</summary>

**b) `aide --init`**

El comando `aide --init` genera la base de datos inicial que contiene las huellas digitales de los archivos monitorizados. Después se debe mover el archivo generado (`aide.db.new`) a su ubicación definitiva (`aide.db`) para poder ejecutar verificaciones con `aide --check`.
</details>

---

### Pregunta 3

¿Qué comando de fail2ban desbloquea la IP 10.0.0.50 del jail sshd?

a) `fail2ban-client unban 10.0.0.50`
b) `fail2ban-client set sshd unbanip 10.0.0.50`
c) `fail2ban-client del sshd 10.0.0.50`
d) `fail2ban-client release sshd 10.0.0.50`

<details>
<summary>Respuesta</summary>

**b) `fail2ban-client set sshd unbanip 10.0.0.50`**

El comando `fail2ban-client set <jail> unbanip <IP>` elimina el bloqueo de una IP específica en el jail indicado. De forma complementaria, `set <jail> banip <IP>` permite bloquear una IP manualmente.
</details>

---

### Pregunta 4

¿Qué herramienta se usa para editar de forma segura el archivo `/etc/sudoers`?

a) `sudoedit`
b) `nano /etc/sudoers`
c) `visudo`
d) `sudo-config`

<details>
<summary>Respuesta</summary>

**c) `visudo`**

El comando `visudo` abre el archivo `/etc/sudoers` con un editor y valida la sintaxis antes de guardarlo. Esto evita dejar el archivo en un estado inválido que podría bloquear el acceso sudo para todos los usuarios del sistema.
</details>

---

### Pregunta 5

¿Qué comando de rkhunter se debe ejecutar después de una actualización legítima del sistema para evitar falsos positivos?

a) `rkhunter --update`
b) `rkhunter --propupd`
c) `rkhunter --refresh`
d) `rkhunter --reset`

<details>
<summary>Respuesta</summary>

**b) `rkhunter --propupd`**

El comando `rkhunter --propupd` actualiza las propiedades de los archivos del sistema almacenadas en la base de datos de referencia. Después de actualizaciones legítimas (apt upgrade, dnf update), los binarios cambian y sin ejecutar `--propupd`, rkhunter los reportaría como modificados. Nota: `--update` actualiza las firmas de rootkits conocidos, no las propiedades del sistema.
</details>

---

### Pregunta 6

¿Qué comando de `ss` muestra todos los puertos TCP en estado de escucha junto con el proceso asociado?

a) `ss -tap`
b) `ss -tlnp`
c) `ss -all --tcp`
d) `ss -ltp --numeric`

<details>
<summary>Respuesta</summary>

**b) `ss -tlnp`**

Las opciones son: `-t` (TCP), `-l` (listening/escucha), `-n` (numérico, sin resolver nombres), `-p` (mostrar proceso). Es el equivalente moderno de `netstat -tlnp`.
</details>

---

### Pregunta 7

En `/etc/security/limits.conf`, ¿qué tipo de límite puede el propio usuario aumentar hasta el valor hard?

a) hard
b) soft
c) max
d) default

<details>
<summary>Respuesta</summary>

**b) soft**

Los límites `soft` representan el valor actual que aplica al usuario, pero este puede aumentarlo con `ulimit` hasta alcanzar el valor `hard`. Solo root puede aumentar los límites `hard`. El tipo `-` establece ambos valores (soft y hard) simultáneamente.
</details>

---

### Pregunta 8

¿Qué comando de auditd crea una regla para vigilar cambios de escritura y atributos en el archivo `/etc/shadow`?

a) `auditctl -a /etc/shadow -p wa -k shadow`
b) `auditctl -w /etc/shadow -p wa -k shadow`
c) `auditctl --watch /etc/shadow --perms wa`
d) `auditctl -m /etc/shadow -t wa -k shadow`

<details>
<summary>Respuesta</summary>

**b) `auditctl -w /etc/shadow -p wa -k shadow`**

La opción `-w` define un archivo o directorio a vigilar, `-p wa` especifica los permisos a monitorizar (w=escritura, a=cambio de atributos), y `-k shadow` asigna una clave para facilitar la búsqueda posterior con `ausearch -k shadow`.
</details>

---

### Pregunta 9

¿Qué opción de nmap realiza un escaneo SYN (half-open) que requiere privilegios de root?

a) `nmap -sT`
b) `nmap -sS`
c) `nmap -sU`
d) `nmap -sP`

<details>
<summary>Respuesta</summary>

**b) `nmap -sS`**

El escaneo SYN (`-sS`) envía paquetes SYN pero no completa el handshake TCP, lo que lo hace más sigiloso y rápido. Requiere privilegios de root porque necesita crear paquetes raw. `-sT` es el escaneo TCP connect (no requiere root), `-sU` es para UDP, y `-sP`/`-sn` es para descubrimiento de hosts.
</details>

---

### Pregunta 10

¿Qué comando de aureport genera un informe de todos los intentos de autenticación registrados por el sistema de auditoría?

a) `aureport --login`
b) `aureport -au`
c) `aureport --auth-report`
d) `aureport -p`

<details>
<summary>Respuesta</summary>

**b) `aureport -au`**

El comando `aureport -au` genera un informe de eventos de autenticación. Otras opciones útiles incluyen: `aureport -f` (acceso a archivos), `aureport --failed` (eventos fallidos), `aureport -l` (logins), y `aureport` sin opciones para un resumen general.
</details>

---

### Pregunta 11

¿Qué parámetro de fail2ban define el tiempo en segundos durante el cual se cuentan los intentos fallidos de autenticación?

a) bantime
b) maxretry
c) findtime
d) retrywindow

<details>
<summary>Respuesta</summary>

**c) findtime**

El parámetro `findtime` define la ventana de tiempo (en segundos) durante la cual se cuentan los intentos fallidos. Si un host alcanza `maxretry` intentos fallidos dentro de `findtime` segundos, se aplica el bloqueo durante `bantime` segundos.
</details>

---

### Pregunta 12

¿Qué comando de AIDE compara el estado actual del sistema con la base de datos de referencia para detectar cambios?

a) `aide --scan`
b) `aide --verify`
c) `aide --check`
d) `aide --compare`

<details>
<summary>Respuesta</summary>

**c) `aide --check`**

El comando `aide --check` compara el estado actual del sistema de archivos con la base de datos de referencia previamente generada con `aide --init`. Reporta archivos añadidos, eliminados o modificados, incluyendo cambios en permisos, propietario, tamaño y hashes.
</details>

---

### Pregunta 13

¿Qué directiva de `/etc/sudoers` permite a un usuario ejecutar comandos como root sin solicitar contraseña?

a) NOAUTH
b) NOPASSWD
c) SKIPAUTH
d) NOPASS

<details>
<summary>Respuesta</summary>

**b) NOPASSWD**

La etiqueta `NOPASSWD:` en una regla de sudoers permite que el usuario ejecute los comandos especificados sin necesidad de introducir su contraseña. Por ejemplo: `backup ALL=(root) NOPASSWD: /usr/bin/tar` permite al usuario backup ejecutar tar como root sin contraseña.
</details>

---

### Pregunta 14

¿Qué opción de nmap detecta las versiones de los servicios que se ejecutan en los puertos abiertos?

a) `nmap -O`
b) `nmap -sV`
c) `nmap -sS`
d) `nmap -A`

<details>
<summary>Respuesta</summary>

**b) `nmap -sV`**

La opción `-sV` de nmap realiza la detección de versiones de servicios (service/version detection), intentando determinar qué software y versión escucha en cada puerto abierto. La opción `-O` detecta el sistema operativo, y `-A` activa detección agresiva que combina varias opciones.
</details>

---

### Pregunta 15

¿Qué herramienta de auditoría de seguridad genera un "hardening index" y sugerencias de mejora sin modificar el sistema?

a) AIDE
b) Tripwire
c) Lynis
d) rkhunter

<details>
<summary>Respuesta</summary>

**c) Lynis**

Lynis es una herramienta de auditoría de seguridad no intrusiva que analiza la configuración del sistema y genera un índice de endurecimiento (hardening index) junto con recomendaciones específicas. No modifica la configuración automáticamente; solo reporta hallazgos.
</details>

---

### Pregunta 16

¿Qué parámetro del archivo `/etc/security/limits.conf` se utiliza para aplicar un límite tanto soft como hard simultáneamente?

a) both
b) all
c) `-`
d) `=`

<details>
<summary>Respuesta</summary>

**c) `-`**

El tipo `-` en limits.conf establece ambos valores (soft y hard) simultáneamente. Por ejemplo, `admin - core unlimited` establece tanto el límite soft como el hard de archivos core a ilimitado para el usuario admin.
</details>

---

### Pregunta 17

¿Qué directiva de `/etc/sudoers` define un alias para un conjunto de comandos relacionados?

a) Command_Group
b) Cmnd_Alias
c) Cmd_Set
d) CommandAlias

<details>
<summary>Respuesta</summary>

**b) Cmnd_Alias**

`Cmnd_Alias` permite agrupar múltiples comandos bajo un nombre descriptivo. Por ejemplo: `Cmnd_Alias NETWORKING = /sbin/ifconfig, /sbin/route, /usr/bin/ip` define un alias que luego puede usarse en las reglas de acceso para simplificar la gestión.
</details>

---

### Pregunta 18

¿Qué opción de chkrootkit ejecuta el escaneo en modo silencioso, mostrando solo las alertas encontradas?

a) `-s`
b) `-q`
c) `-v`
d) `--silent`

<details>
<summary>Respuesta</summary>

**b) `-q`**

La opción `-q` (quiet) de chkrootkit ejecuta el escaneo en modo silencioso, mostrando únicamente los resultados que indican una posible infección o anomalía. Sin esta opción, chkrootkit muestra el resultado de cada prueba individual.
</details>

---

### Pregunta 19

¿Qué directiva de Defaults en `/etc/sudoers` establece el tiempo en minutos antes de que sudo vuelva a solicitar la contraseña?

a) Defaults passwd_timeout
b) Defaults timestamp_timeout
c) Defaults auth_timeout
d) Defaults cache_timeout

<details>
<summary>Respuesta</summary>

**b) Defaults timestamp_timeout**

La directiva `Defaults timestamp_timeout=5` establece que sudo recordará la autenticación del usuario durante 5 minutos antes de volver a solicitar la contraseña. Un valor de 0 obliga a introducir la contraseña en cada ejecución de sudo.
</details>

---

### Pregunta 20

¿Qué parámetro de fail2ban define las direcciones IP que nunca serán bloqueadas?

a) whitelist
b) ignoreip
c) safe_ips
d) exclude_ips

<details>
<summary>Respuesta</summary>

**b) ignoreip**

El parámetro `ignoreip` en la configuración de fail2ban especifica una lista de direcciones IP, redes CIDR o nombres de host que nunca serán bloqueados, sin importar cuántos intentos fallidos generen. Típicamente incluye `127.0.0.1/8`, `::1` y la red local de administración.
</details>

---

### Pregunta 21

¿Qué comando de fail2ban muestra el estado del jail "sshd", incluyendo las IPs bloqueadas?

<input type="text" class="fill-blank" data-answer="fail2ban-client status sshd" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**fail2ban-client status sshd**

El comando `fail2ban-client status sshd` muestra información detallada del jail especificado, incluyendo el número de intentos fallidos detectados, las acciones ejecutadas y la lista de direcciones IP actualmente bloqueadas.
</details>

---

### Pregunta 22

¿Qué comando inicializa la base de datos de Tripwire para la verificación de integridad?

<input type="text" class="fill-blank" data-answer="tripwire --init" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**tripwire --init**

El comando `tripwire --init` genera la base de datos inicial que contiene las huellas digitales de los archivos del sistema según la política configurada. Debe ejecutarse en un sistema limpio y la base de datos resultante debe protegerse almacenándola en un medio seguro.
</details>

---

### Pregunta 23

¿Qué comando de nmap realiza un escaneo de descubrimiento de hosts (ping scan) en una red sin escanear puertos?

<input type="text" class="fill-blank" data-answer="nmap -sn 192.168.1.0/24" data-alt="nmap -sn" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**nmap -sn 192.168.1.0/24**

El comando `nmap -sn` (anteriormente `-sP`) realiza un descubrimiento de hosts sin escanear puertos, determinando qué hosts están activos en la red. Es útil para inventariar dispositivos en una subred sin generar tráfico de escaneo de puertos.
</details>

---

### Pregunta 24

¿Qué comando ejecuta una auditoría completa del sistema con Lynis?

<input type="text" class="fill-blank" data-answer="lynis audit system" data-alt="" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**lynis audit system**

El comando `lynis audit system` ejecuta una auditoría completa del sistema, evaluando la configuración de seguridad, verificando servicios, analizando permisos de archivos y generando un informe con el hardening index y recomendaciones de mejora.
</details>

---

### Pregunta 25

¿Qué comando de auditd busca en los registros de auditoría todos los eventos asociados a una clave específica?

<input type="text" class="fill-blank" data-answer="ausearch -k passwd_changes" data-alt="ausearch -k" placeholder="$ escribe aqui...">

<details>
<summary>Respuesta</summary>

**ausearch -k passwd_changes**

El comando `ausearch -k` busca eventos en los registros de auditoría filtrados por la clave especificada. Las claves se asignan al crear reglas con `auditctl -w ... -k clave`, permitiendo categorizar y buscar eventos de forma eficiente.
</details>
