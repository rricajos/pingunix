---
tipo: ejercicios
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "332 - Seguridad del Host"
tema: "332.2 - Deteccion de intrusiones en el host"
subtema: "332.2"
peso: 4
tags:
  - lpic-3
  - tema-332
  - aide
  - auditd
  - hids
---

# Ejercicios - 332.2 Deteccion de Intrusiones en el Host

### Pregunta 1
Despues de ejecutar `aide --init`, ¿que paso es necesario antes de poder ejecutar `aide --check`?

a) Ejecutar `aide --validate`
b) Copiar/renombrar `aide.db.new.gz` a `aide.db.gz`
c) Reiniciar el servicio aided
d) Ejecutar `aide --activate`

<details><summary>Respuesta</summary>

**b)** Copiar/renombrar `aide.db.new.gz` a `aide.db.gz`

`aide --init` genera la base de datos como `aide.db.new.gz`. Se debe copiar o renombrar a `aide.db.gz` (la ubicacion definida en `database_in` de aide.conf) antes de poder realizar verificaciones.
</details>

### Pregunta 2
¿Que regla de auditd monitoriza escrituras y cambios de atributos en el archivo `/etc/passwd`?

a) `auditctl -w /etc/passwd -p rx -k identity`
b) `auditctl -w /etc/passwd -p wa -k identity`
c) `auditctl -a /etc/passwd -p wa -k identity`
d) `auditctl -f /etc/passwd -m wa -k identity`

<details><summary>Respuesta</summary>

**b)** `auditctl -w /etc/passwd -p wa -k identity`

La opcion `-w` define una vigilancia sobre un archivo, `-p wa` monitoriza escrituras (w) y cambios de atributos (a), y `-k identity` asigna una etiqueta para facilitar busquedas posteriores.
</details>

### Pregunta 3
¿Que comando de auditoria busca todos los eventos marcados con la etiqueta "network"?

a) `aureport -k network`
b) `ausearch -k network`
c) `auditctl --search network`
d) `audit-find -key network`

<details><summary>Respuesta</summary>

**b)** `ausearch -k network`

`ausearch -k` busca eventos en los logs de auditoria filtrados por la clave (key) especificada. Las claves se asignan con `-k` al crear las reglas con `auditctl -w`.
</details>

### Pregunta 4
En la configuracion de AIDE, ¿que significa la regla `NORMAL = p+i+n+u+g+s+m+c+sha256`?

a) Define una regla que solo verifica el hash SHA-256
b) Define un grupo de verificacion que incluye permisos, inodo, enlaces, usuario, grupo, tamaño, tiempos y hash SHA-256
c) Es un alias para el nivel de severidad normal
d) Configura el nivel de logging normal

<details><summary>Respuesta</summary>

**b)** Define un grupo de verificacion que incluye permisos (p), inodo (i), numero de enlaces (n), usuario (u), grupo (g), tamaño (s), mtime (m), ctime (c) y hash SHA-256

AIDE permite definir grupos de reglas personalizados que combinan multiples verificaciones. Luego se aplican a directorios: `/etc/ NORMAL`.
</details>

### Pregunta 5
¿Que comando genera un informe de todos los intentos de autenticacion fallidos registrados por auditd?

a) `ausearch --failed --auth`
b) `aureport --auth --failed`
c) `aureport --failed`
d) `auditctl --report failed`

<details><summary>Respuesta</summary>

**c)** `aureport --failed`

`aureport --failed` genera un informe de todos los eventos fallidos registrados por auditd. Se puede combinar con `--auth` para filtrar solo autenticacion: `aureport --auth --failed`.
</details>

### Pregunta 6
¿Que herramienta de deteccion de intrusiones incluye capacidades de analisis de logs, integridad de archivos, deteccion de rootkits y respuesta activa?

a) AIDE
b) Tripwire
c) OSSEC/Wazuh
d) Samhain

<details><summary>Respuesta</summary>

**c)** OSSEC/Wazuh

OSSEC (y su fork Wazuh) es un HIDS completo que combina multiples capacidades: analisis de logs en tiempo real, verificacion de integridad de archivos, deteccion de rootkits, respuesta activa automatizada y arquitectura cliente-servidor.
</details>

### Pregunta 7
¿Que comando muestra los ultimos comandos ejecutados por un usuario especifico usando process accounting?

a) `sa -u usuario`
b) `lastcomm usuario`
c) `acct --user usuario`
d) `psacct -l usuario`

<details><summary>Respuesta</summary>

**b)** `lastcomm usuario`

`lastcomm` muestra los comandos ejecutados recientemente en el sistema. Cuando se especifica un nombre de usuario, filtra solo los comandos de ese usuario.
</details>

### Pregunta 8
¿Que archivo contiene las reglas persistentes de auditoria que se cargan al iniciar el sistema?

a) `/etc/audit/auditd.conf`
b) `/etc/audit/rules.d/audit.rules`
c) `/var/log/audit/audit.rules`
d) `/etc/auditctl.conf`

<details><summary>Respuesta</summary>

**b)** `/etc/audit/rules.d/audit.rules`

Las reglas persistentes se almacenan en `/etc/audit/rules.d/`. El archivo principal es `audit.rules`. Se cargan con `augenrules --load`. El archivo `/etc/audit/auditd.conf` es la configuracion del demonio, no de las reglas.
</details>

### Pregunta 9
¿Cual es la diferencia principal entre `aide --check` y `aide --update`?

a) `--check` modifica la base de datos, `--update` solo verifica
b) `--check` solo verifica sin modificar; `--update` verifica y genera una nueva base de datos
c) `--check` es mas rapido, `--update` es mas exhaustivo
d) No hay diferencia, son alias del mismo comando

<details><summary>Respuesta</summary>

**b)** `--check` solo verifica sin modificar; `--update` verifica y genera una nueva base de datos

`aide --check` compara el estado actual con la base de datos existente sin modificarla. `aide --update` hace lo mismo pero ademas genera una nueva base de datos que refleja el estado actual, util tras cambios legitimos del sistema.
</details>

### Pregunta 10
¿Que herramienta analiza logs del sistema y genera informes diarios resumidos por correo electronico?

a) swatch
b) logwatch
c) aureport
d) rsyslog

<details><summary>Respuesta</summary>

**b)** logwatch

Logwatch es un analizador de logs que genera informes resumidos (diarios por defecto) y puede enviarlos por correo electronico. Swatch monitorea en tiempo real; aureport se centra en logs de auditoria; rsyslog es el demonio de logging.
</details>

### Pregunta 11

En la configuracion de AIDE, que simbolo al inicio de una ruta indica que debe excluirse de la monitorizacion?

a) @
b) !
c) ~
d) ^

<details><summary>Respuesta</summary>

**b) Correcta**

El signo de exclamacion (!) al inicio de una ruta en aide.conf indica que ese directorio o archivo debe excluirse de la monitorizacion. Por ejemplo: !/var/log/.*

</details>

### Pregunta 12

Que comando de auditd carga las reglas persistentes definidas en /etc/audit/rules.d/ y las aplica al sistema?

a) auditctl -l
b) augenrules --load
c) auditd --reload
d) systemctl reload auditd

<details><summary>Respuesta</summary>

**b) Correcta**

augenrules --load combina todos los archivos .rules del directorio /etc/audit/rules.d/ y los carga en el kernel. Es el metodo recomendado para gestionar reglas persistentes.

</details>

### Pregunta 13

Que herramienta de AIDE permite verificar la consistencia del archivo de configuracion antes de inicializar la base de datos?

a) aide --test
b) aide --config-check
c) aide --verify-config
d) aide --dry-run

<details><summary>Respuesta</summary>

**b) Correcta**

aide --config-check analiza el archivo aide.conf y reporta errores de sintaxis o configuraciones invalidas sin crear ni modificar ninguna base de datos.

</details>

### Pregunta 14

Que modulo de auditd se encarga de escribir los registros de auditoria en disco?

a) audisp
b) auditctl
c) auditd
d) augenrules

<details><summary>Respuesta</summary>

**c) Correcta**

El demonio auditd es el componente que recibe los eventos del kernel y los escribe en /var/log/audit/audit.log. audisp es el procesador de eventos; auditctl configura reglas.

</details>

### Pregunta 15

Que comando de aureport genera un informe de los ejecutables llamados con privilegios de root?

a) aureport --exec --uid 0
b) aureport --root
c) aureport --login --root
d) aureport --user root --exec

<details><summary>Respuesta</summary>

**a) Correcta**

aureport --exec filtra eventos de ejecucion de comandos. Combinado con --uid 0 o filtros de usuario en ausearch, permite identificar los ejecutables invocados por root.

</details>

### Pregunta 16

Cual es la diferencia principal entre Samhain y AIDE respecto a la monitorizacion continua?

a) AIDE monitoriza en segundo plano continuamente; Samhain solo verifica bajo demanda
b) Samhain puede ejecutarse como demonio en segundo plano con verificacion continua; AIDE se ejecuta bajo demanda
c) Son identicos en funcionalidad
d) Samhain no soporta hashes SHA-256

<details><summary>Respuesta</summary>

**b) Correcta**

Samhain puede ejecutarse como demonio (samhaind) realizando verificaciones periodicas automaticas en segundo plano, mientras que AIDE se invoca manualmente o via cron.

</details>

### Pregunta 17

En OSSEC/Wazuh, que directiva XML define la frecuencia en segundos de las verificaciones de integridad de archivos?

a) <check_interval>
b) <frequency>
c) <syscheck_interval>
d) <integrity_time>

<details><summary>Respuesta</summary>

**b) Correcta**

La directiva <frequency> dentro del bloque <syscheck> en ossec.conf define cada cuantos segundos se realizan las verificaciones de integridad de archivos.

</details>

### Pregunta 18

Que opcion de ausearch restringe la busqueda a eventos del dia de hoy?

a) ausearch --date today
b) ausearch --start today
c) ausearch --filter today
d) ausearch -t today

<details><summary>Respuesta</summary>

**b) Correcta**

La opcion --start acepta palabras clave temporales como today, yesterday, recent, o fechas en formato MM/DD/YYYY para filtrar eventos de auditoria por rango de tiempo.

</details>

### Pregunta 19

Que herramienta de analysis de logs genera informes diarios resumidos que pueden enviarse por correo y tiene soporte para multiples servicios como SSH, Apache y sudo?

a) swatch
b) logcheck
c) logwatch
d) aureport

<details><summary>Respuesta</summary>

**c) Correcta**

Logwatch es un analizador de logs modular que genera informes resumidos de multiples servicios del sistema y puede enviarlos por correo. Swatch monitoriza en tiempo real pero no genera resumen diario.

</details>

### Pregunta 20

Que regla de auditd monitoriza todos los comandos ejecutados por usuarios con UID mayor o igual a 1000?

a) -a always,exit -F arch=b64 -S execve -F auid>=1000 -k user_cmds
b) -w /usr/bin -p x -F uid>=1000 -k user_cmds
c) -a always,exit -F arch=b64 -S open -F uid>=1000 -k user_cmds
d) -w /bin -p rwxa -k user_cmds

<details><summary>Respuesta</summary>

**a) Correcta**

La regla -a always,exit -F arch=b64 -S execve -F auid>=1000 -k user_cmds captura todas las llamadas execve (ejecucion de procesos) realizadas por usuarios con ID de auditor mayor o igual a 1000 (usuarios normales).

</details>

### Pregunta 21

Que comando inicializa la base de datos de AIDE por primera vez?

<input type="text" class="fill-blank" data-answer="aide --init" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**aide --init**

Este comando escanea el sistema segun las reglas de aide.conf y crea la base de datos en /var/lib/aide/aide.db.new.gz. Luego debe copiarse a aide.db.gz para usar con aide --check.

</details>

### Pregunta 22

Que archivo contiene las reglas persistentes de auditd organizadas en el directorio estandar?

<input type="text" class="fill-blank" data-answer="/etc/audit/rules.d/audit.rules" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**/etc/audit/rules.d/audit.rules**

Las reglas persistentes se colocan en /etc/audit/rules.d/ como archivos .rules. Son cargadas por augenrules al iniciar el sistema. /etc/audit/auditd.conf es la configuracion del demonio.

</details>

### Pregunta 23

Que comando busca en los logs de auditoria todos los eventos con la etiqueta clave identity?

<input type="text" class="fill-blank" data-answer="ausearch -k identity" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**ausearch -k identity**

ausearch -k busca eventos filtrados por clave (key) en los logs de auditoria. Las claves se asignan con -k al definir reglas con auditctl -w o en los archivos de reglas.

</details>

### Pregunta 24

Que comando activa el accounting de procesos en sistemas RHEL/CentOS?

<input type="text" class="fill-blank" data-answer="systemctl enable --now psacct" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**systemctl enable --now psacct**

El paquete psacct (o acct en Debian) debe estar instalado y habilitado como servicio. Esto permite usar lastcomm y sa para analizar comandos ejecutados en el sistema.

</details>

### Pregunta 25

Que opcion de aide --update sirve para verificar y generar una nueva base de datos simultaneamente?

<input type="text" class="fill-blank" data-answer="aide --update" data-alt="" placeholder="$ escribe aqui...">

<details><summary>Respuesta</summary>

**aide --update**

aide --update realiza la verificacion comparando con la base de datos actual y ademas genera una nueva base en aide.db.new.gz. Util tras cambios legitimos del sistema que deben incorporarse a la linea base.

</details>
