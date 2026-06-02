---
title: "332.2 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "332.2"
---

# Flashcards: 332.2 - Deteccion De Intrusiones Host

> 37 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-001">
<div class="flashcard-front">

**P:** Despues de ejecutar `aide --init`, ¿que paso es necesario antes de poder ejecutar `aide --check`?

</div>
<div class="flashcard-back">

**R:** b). Copiar/renombrar `aide.db.new.gz` a `aide.db.gz`  `aide --init` genera la base de datos como `aide.db.new.gz`. Se debe copiar o renombrar a `aide.db.gz` (la ubicacion definida en `database_in` de aide.conf) antes de poder realizar verificaciones.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-002">
<div class="flashcard-front">

**P:** ¿Que regla de auditd monitoriza escrituras y cambios de atributos en el archivo `/etc/passwd`?

</div>
<div class="flashcard-back">

**R:** b). `auditctl -w /etc/passwd -p wa -k identity`  La opcion `-w` define una vigilancia sobre un archivo, `-p wa` monitoriza escrituras (w) y cambios de atributos (a), y `-k identity` asigna una etiqueta para facilitar busquedas posteriores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-003">
<div class="flashcard-front">

**P:** ¿Que comando de auditoria busca todos los eventos marcados con la etiqueta "network"?

</div>
<div class="flashcard-back">

**R:** b). `ausearch -k network`  `ausearch -k` busca eventos en los logs de auditoria filtrados por la clave (key) especificada. Las claves se asignan con `-k` al crear las reglas con `auditctl -w`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-004">
<div class="flashcard-front">

**P:** En la configuracion de AIDE, ¿que significa la regla `NORMAL = p+i+n+u+g+s+m+c+sha256`?

</div>
<div class="flashcard-back">

**R:** b). Define un grupo de verificacion que incluye permisos (p), inodo (i), numero de enlaces (n), usuario (u), grupo (g), tamaño (s), mtime (m), ctime (c) y hash SHA-256  AIDE permite definir grupos de reglas personalizados que combinan multiples verificaciones. Luego se aplican a directorios: `/etc/ NORMAL`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-005">
<div class="flashcard-front">

**P:** ¿Que comando genera un informe de todos los intentos de autenticacion fallidos registrados por auditd?

</div>
<div class="flashcard-back">

**R:** c). `aureport --failed`  `aureport --failed` genera un informe de todos los eventos fallidos registrados por auditd. Se puede combinar con `--auth` para filtrar solo autenticacion: `aureport --auth --failed`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-006">
<div class="flashcard-front">

**P:** ¿Que herramienta de deteccion de intrusiones incluye capacidades de analisis de logs, integridad de archivos, deteccion de rootkits y respuesta activa?

</div>
<div class="flashcard-back">

**R:** c). OSSEC/Wazuh  OSSEC (y su fork Wazuh) es un HIDS completo que combina multiples capacidades: analisis de logs en tiempo real, verificacion de integridad de archivos, deteccion de rootkits, respuesta activa automatizada y arquitectura cliente-servidor.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-007">
<div class="flashcard-front">

**P:** ¿Que comando muestra los ultimos comandos ejecutados por un usuario especifico usando process accounting?

</div>
<div class="flashcard-back">

**R:** b). `lastcomm usuario`  `lastcomm` muestra los comandos ejecutados recientemente en el sistema. Cuando se especifica un nombre de usuario, filtra solo los comandos de ese usuario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-008">
<div class="flashcard-front">

**P:** ¿Que archivo contiene las reglas persistentes de auditoria que se cargan al iniciar el sistema?

</div>
<div class="flashcard-back">

**R:** b). `/etc/audit/rules.d/audit.rules`  Las reglas persistentes se almacenan en `/etc/audit/rules.d/`. El archivo principal es `audit.rules`. Se cargan con `augenrules --load`. El archivo `/etc/audit/auditd.conf` es la configuracion del demonio, no de las reglas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-009">
<div class="flashcard-front">

**P:** ¿Cual es la diferencia principal entre `aide --check` y `aide --update`?

</div>
<div class="flashcard-back">

**R:** b). `--check` solo verifica sin modificar; `--update` verifica y genera una nueva base de datos  `aide --check` compara el estado actual con la base de datos existente sin modificarla. `aide --update` hace lo mismo pero ademas genera una nueva base de datos que refleja el estado actual, util tras cambios legitimos del sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-010">
<div class="flashcard-front">

**P:** ¿Que herramienta analiza logs del sistema y genera informes diarios resumidos por correo electronico?

</div>
<div class="flashcard-back">

**R:** b). logwatch  Logwatch es un analizador de logs que genera informes resumidos (diarios por defecto) y puede enviarlos por correo electronico. Swatch monitorea en tiempo real; aureport se centra en logs de auditoria; rsyslog es el demonio de logging.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-011">
<div class="flashcard-front">

**P:** En la configuracion de AIDE, que simbolo al inicio de una ruta indica que debe excluirse de la monitorizacion?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El signo de exclamacion (!) al inicio de una ruta en aide.conf indica que ese directorio o archivo debe excluirse de la monitorizacion. Por ejemplo: !/var/log/.*

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-012">
<div class="flashcard-front">

**P:** Que comando de auditd carga las reglas persistentes definidas en /etc/audit/rules.d/ y las aplica al sistema?

</div>
<div class="flashcard-back">

**R:** b) Correcta. augenrules --load combina todos los archivos .rules del directorio /etc/audit/rules.d/ y los carga en el kernel. Es el metodo recomendado para gestionar reglas persistentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-013">
<div class="flashcard-front">

**P:** Que herramienta de AIDE permite verificar la consistencia del archivo de configuracion antes de inicializar la base de datos?

</div>
<div class="flashcard-back">

**R:** b) Correcta. aide --config-check analiza el archivo aide.conf y reporta errores de sintaxis o configuraciones invalidas sin crear ni modificar ninguna base de datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-014">
<div class="flashcard-front">

**P:** Que modulo de auditd se encarga de escribir los registros de auditoria en disco?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El demonio auditd es el componente que recibe los eventos del kernel y los escribe en /var/log/audit/audit.log. audisp es el procesador de eventos; auditctl configura reglas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-015">
<div class="flashcard-front">

**P:** Que comando de aureport genera un informe de los ejecutables llamados con privilegios de root?

</div>
<div class="flashcard-back">

**R:** a) Correcta. aureport --exec filtra eventos de ejecucion de comandos. Combinado con --uid 0 o filtros de usuario en ausearch, permite identificar los ejecutables invocados por root.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-016">
<div class="flashcard-front">

**P:** Cual es la diferencia principal entre Samhain y AIDE respecto a la monitorizacion continua?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Samhain puede ejecutarse como demonio (samhaind) realizando verificaciones periodicas automaticas en segundo plano, mientras que AIDE se invoca manualmente o via cron.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-017">
<div class="flashcard-front">

**P:** En OSSEC/Wazuh, que directiva XML define la frecuencia en segundos de las verificaciones de integridad de archivos?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La directiva <frequency> dentro del bloque <syscheck> en ossec.conf define cada cuantos segundos se realizan las verificaciones de integridad de archivos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-018">
<div class="flashcard-front">

**P:** Que opcion de ausearch restringe la busqueda a eventos del dia de hoy?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La opcion --start acepta palabras clave temporales como today, yesterday, recent, o fechas en formato MM/DD/YYYY para filtrar eventos de auditoria por rango de tiempo.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-019">
<div class="flashcard-front">

**P:** Que herramienta de analysis de logs genera informes diarios resumidos que pueden enviarse por correo y tiene soporte para multiples servicios como SSH, Apache y sudo?

</div>
<div class="flashcard-back">

**R:** c) Correcta. Logwatch es un analizador de logs modular que genera informes resumidos de multiples servicios del sistema y puede enviarlos por correo. Swatch monitoriza en tiempo real pero no genera resumen diario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-020">
<div class="flashcard-front">

**P:** Que regla de auditd monitoriza todos los comandos ejecutados por usuarios con UID mayor o igual a 1000?

</div>
<div class="flashcard-back">

**R:** a) Correcta. La regla -a always,exit -F arch=b64 -S execve -F auid>=1000 -k user_cmds captura todas las llamadas execve (ejecucion de procesos) realizadas por usuarios con ID de auditor mayor o igual a 1000 (usuarios normales).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-021">
<div class="flashcard-front">

**P:** Que comando inicializa la base de datos de AIDE por primera vez?

</div>
<div class="flashcard-back">

**R:** aide --init. Este comando escanea el sistema segun las reglas de aide.conf y crea la base de datos en /var/lib/aide/aide.db.new.gz. Luego debe copiarse a aide.db.gz para usar con aide --check.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-022">
<div class="flashcard-front">

**P:** Que archivo contiene las reglas persistentes de auditd organizadas en el directorio estandar?

</div>
<div class="flashcard-back">

**R:** /etc/audit/rules.d/audit.rules. Las reglas persistentes se colocan en /etc/audit/rules.d/ como archivos .rules. Son cargadas por augenrules al iniciar el sistema. /etc/audit/auditd.conf es la configuracion del demonio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-023">
<div class="flashcard-front">

**P:** Que comando busca en los logs de auditoria todos los eventos con la etiqueta clave identity?

</div>
<div class="flashcard-back">

**R:** ausearch -k identity. ausearch -k busca eventos filtrados por clave (key) en los logs de auditoria. Las claves se asignan con -k al definir reglas con auditctl -w o en los archivos de reglas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-024">
<div class="flashcard-front">

**P:** Que comando activa el accounting de procesos en sistemas RHEL/CentOS?

</div>
<div class="flashcard-back">

**R:** systemctl enable --now psacct. El paquete psacct (o acct en Debian) debe estar instalado y habilitado como servicio. Esto permite usar lastcomm y sa para analizar comandos ejecutados en el sistema.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-025">
<div class="flashcard-front">

**P:** Que opcion de aide --update sirve para verificar y generar una nueva base de datos simultaneamente?

</div>
<div class="flashcard-back">

**R:** aide --update. aide --update realiza la verificacion comparando con la base de datos actual y ademas genera una nueva base en aide.db.new.gz. Util tras cambios legitimos del sistema que deben incorporarse a la linea base.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Centra tu estudio en AIDE (configuracion, inicializacion, verificacion) y auditd...

</div>
<div class="flashcard-back">

**R:** Centra tu estudio en AIDE (configuracion, inicializacion, verificacion) y auditd (reglas, ausearch, aureport). Son las herramientas mas preguntadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: Tras `aide --init`, es necesario renombrar/copiar la base de datos `.new.gz` a `...

</div>
<div class="flashcard-back">

**R:** Tras `aide --init`, es necesario renombrar/copiar la base de datos `.new.gz` a `.db.gz`. Tras `aide --update`, la nueva base de datos tambien requiere ser movida manualmente.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: Conoce la sintaxis de reglas de `auditctl`: `-w` para vigilar archivos, `-p` par...

</div>
<div class="flashcard-back">

**R:** Conoce la sintaxis de reglas de `auditctl`: `-w` para vigilar archivos, `-p` para permisos (rwxa), `-k` para etiquetas de busqueda. `ausearch -k clave` busca por etiqueta, `aureport` genera informes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-029">
<div class="flashcard-front">

**P:** Que hace el comando `auditd`?

</div>
<div class="flashcard-back">

**R:** Demonio que escribe registros de auditoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-030">
<div class="flashcard-front">

**P:** Que hace el comando `auditctl`?

</div>
<div class="flashcard-back">

**R:** Configura reglas de auditoria en tiempo real

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-031">
<div class="flashcard-front">

**P:** Que hace el comando `ausearch`?

</div>
<div class="flashcard-back">

**R:** Busca eventos en los logs de auditoria

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-032">
<div class="flashcard-front">

**P:** Que es/son AIDE (Advanced Intrusion Detection Environment)?

</div>
<div class="flashcard-back">

**R:** AIDE es un sistema de deteccion de intrusiones basado en la integridad de archivos. Crea una base de datos con hashes y atributos de archivos, y luego compara el estado actual con esa linea base.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-033">
<div class="flashcard-front">

**P:** Que es/son Tripwire?

</div>
<div class="flashcard-back">

**R:** Tripwire es otra herramienta de integridad de archivos, precursora de AIDE.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-034">
<div class="flashcard-front">

**P:** Que es/son OSSEC / Wazuh?

</div>
<div class="flashcard-back">

**R:** OSSEC es un HIDS completo que incluye analisis de logs, deteccion de rootkits, integridad de archivos y respuesta activa. Wazuh es un fork activamente mantenido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-035">
<div class="flashcard-front">

**P:** Que es/son Samhain?

</div>
<div class="flashcard-back">

**R:** Samhain es un HIDS similar a AIDE/Tripwire pero con capacidades cliente/servidor integradas y verificacion continua en segundo plano.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-036">
<div class="flashcard-front">

**P:** Que es/son auditd - Sistema de Auditoria del Kernel?

</div>
<div class="flashcard-back">

**R:** El framework de auditoria de Linux permite registrar llamadas al sistema, accesos a archivos y eventos de seguridad a nivel de kernel.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="332.2">
</div>

<div class="flashcard" data-id="332.2-fc-037">
<div class="flashcard-front">

**P:** Que es/son Process Accounting (acct/psacct)?

</div>
<div class="flashcard-back">

**R:** El accounting de procesos registra informacion sobre todos los comandos ejecutados en el sistema.

</div>
</div>

---

