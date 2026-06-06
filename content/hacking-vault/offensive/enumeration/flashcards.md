---
title: "Flashcards - Enumeracion de Servicios y Vulnerabilidades"
tags:
  - hacking
  - ofensivo
  - enumeracion
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "enumeracion"
---

# Flashcards: Enumeracion de Servicios y Vulnerabilidades

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-001">
<div class="flashcard-front">

**P:** Que comando de smbclient usarias para listar recursos compartidos SMB sin autenticacion (null session)?

</div>
<div class="flashcard-back">

**R:** `smbclient -L //10.10.10.1 -N`. La flag `-L` lista los recursos compartidos y `-N` indica null session (sin autenticacion). Para conectarse a un recurso especifico: `smbclient //10.10.10.1/share -N`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-002">
<div class="flashcard-front">

**P:** Que hace enum4linux y que flag usarias para una enumeracion completa?

</div>
<div class="flashcard-back">

**R:** enum4linux enumera informacion de sistemas Windows/Samba via SMB: usuarios, recursos compartidos, grupos y politicas de password. Para enumeracion completa: `enum4linux -a 10.10.10.1`. Flags individuales: `-U` (usuarios), `-S` (shares), `-G` (grupos), `-P` (politicas de password). La version moderna es `enum4linux-ng`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-003">
<div class="flashcard-front">

**P:** Como usarias CrackMapExec para verificar acceso con pass-the-hash sobre SMB?

</div>
<div class="flashcard-back">

**R:** `crackmapexec smb 10.10.10.1 -u admin -H HASH_NTLM`. CrackMapExec (ahora NetExec) permite autenticacion con hashes NTLM sin conocer la contrasena en texto plano. Tambien permite spray de passwords (`-u usuarios.txt -p password123`), enumeracion de shares (`--shares`) y ejecucion de comandos (`-x "whoami"`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-004">
<div class="flashcard-front">

**P:** Que comando usarias para hacer una consulta LDAP anonima y obtener el base DN del dominio?

</div>
<div class="flashcard-back">

**R:** `ldapsearch -x -H ldap://10.10.10.1 -s base namingContexts`. La flag `-x` usa autenticacion simple, `-H` especifica la URL del servidor y `-s base` limita la busqueda al nivel base. El resultado devuelve el Distinguished Name base del dominio (ej: `DC=dominio,DC=local`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-005">
<div class="flashcard-front">

**P:** En SNMP, que community string se usa por defecto para lectura y que herramienta permite hacer fuerza bruta de community strings?

</div>
<div class="flashcard-back">

**R:** La community string por defecto de lectura es `public` (y `private` para escritura). Para fuerza bruta de community strings: `onesixtyone -c /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings.txt 10.10.10.1`. Una vez descubierta, se usa `snmpwalk -v2c -c community 10.10.10.1` para recorrer el arbol MIB.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-006">
<div class="flashcard-front">

**P:** Que OID de SNMP usarias para enumerar cuentas de usuario en un sistema Windows?

</div>
<div class="flashcard-back">

**R:** `1.3.6.1.4.1.77.1.2.25`. Se ejecuta con `snmpwalk -v2c -c public 10.10.10.1 1.3.6.1.4.1.77.1.2.25`. Otros OIDs utiles: `1.3.6.1.2.1.25.4.2.1.2` (procesos en ejecucion), `1.3.6.1.2.1.6.13.1.3` (puertos TCP abiertos), `1.3.6.1.2.1.25.6.3.1.2` (software instalado).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-007">
<div class="flashcard-front">

**P:** Cual es la diferencia entre Gobuster, Ffuf y Wfuzz para fuzzing web?

</div>
<div class="flashcard-back">

**R:** **Gobuster** es rapido para descubrimiento de directorios y subdominios con una sintaxis simple. **Ffuf** es mas rapido y flexible, permite multiples puntos de fuzzing (`FUZZ1/FUZZ2`) y filtrado avanzado por tamano (`-fs`), palabras (`-fw`) y codigo de estado. **Wfuzz** es el mas versatile para fuzzing de cookies, cabeceras y parametros con soporte avanzado de filtrado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-008">
<div class="flashcard-front">

**P:** Como usarias ffuf para descubrir virtual hosts (subdominios) en un servidor web?

</div>
<div class="flashcard-back">

**R:** `ffuf -u http://10.10.10.1 -H "Host: FUZZ.ejemplo.com" -w subdomains.txt -fc 302`. Se envia la cabecera Host con el subdominio a probar y se filtran los codigos de respuesta irrelevantes con `-fc`. Gobuster tambien permite esto con `gobuster vhost -u http://ejemplo.com -w wordlist.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-009">
<div class="flashcard-front">

**P:** Que comando usarias para listar exports NFS disponibles en un servidor y como montarias un recurso?

</div>
<div class="flashcard-back">

**R:** Listar exports: `showmount -e 10.10.10.1`. Montar: `sudo mount -t nfs 10.10.10.1:/share /tmp/nfs_mount`. Con Nmap: `nmap --script nfs-ls,nfs-showmount,nfs-statfs -p 2049 10.10.10.1`. NFS (puerto 2049) puede exponer archivos sensibles si los exports no estan correctamente restringidos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-010">
<div class="flashcard-front">

**P:** Como verificarias si un servidor FTP permite login anonimo?

</div>
<div class="flashcard-back">

**R:** Manualmente: `ftp 10.10.10.1` e introducir usuario `anonymous` con password vacio o un email. Con Nmap: `nmap --script ftp-anon -p 21 10.10.10.1`. Otros scripts utiles para FTP: `ftp-bounce`, `ftp-syst` y `ftp-vsftpd-backdoor` (detecta el backdoor de vsftpd 2.3.4).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-011">
<div class="flashcard-front">

**P:** Que es AutoRecon y como organiza los resultados?

</div>
<div class="flashcard-back">

**R:** AutoRecon es una herramienta de enumeracion automatizada que ejecuta Nmap y herramientas complementarias sobre los servicios descubiertos. Se ejecuta con `autorecon 10.10.10.1`. Los resultados se organizan en: `scans/` (resultados de nmap y herramientas), `exploit/` (notas de explotacion), `loot/` (archivos descargados) y `report/` (notas para el reporte).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-012">
<div class="flashcard-front">

**P:** Que herramientas usarias para enumerar informacion de un servicio LDAP en un entorno Active Directory?

</div>
<div class="flashcard-back">

**R:** `ldapsearch` para consultas manuales y `windapsearch` para enumeracion automatizada. Con windapsearch: `-U` enumera usuarios, `-G` grupos, `-C` equipos, `--da` busca Domain Admins. Para buscar cuentas vulnerables a Kerberoasting: `windapsearch -U --attrs servicePrincipalName`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-013">
<div class="flashcard-front">

**P:** Que herramienta usarias para listar permisos de recursos compartidos SMB y como descargar un archivo remoto?

</div>
<div class="flashcard-back">

**R:** **smbmap**. Listar permisos: `smbmap -H 10.10.10.1`. Listar contenido recursivamente: `smbmap -H 10.10.10.1 -R`. Descargar archivo: `smbmap -H 10.10.10.1 --download "share\archivo.txt"`. A diferencia de smbclient, smbmap muestra directamente los permisos (READ, WRITE) de cada recurso compartido.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-014">
<div class="flashcard-front">

**P:** Que puerto usa WinRM y que herramienta permite obtener una shell interactiva a traves de este servicio?

</div>
<div class="flashcard-back">

**R:** WinRM usa el puerto **5985** (HTTP) y 5986 (HTTPS). La herramienta principal es **evil-winrm**: proporciona una shell interactiva de PowerShell si se tienen credenciales validas. CrackMapExec tambien soporta WinRM para verificar credenciales y ejecutar comandos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-015">
<div class="flashcard-front">

**P:** Como usarias Gobuster para descubrir directorios y archivos con extensiones especificas?

</div>
<div class="flashcard-back">

**R:** `gobuster dir -u http://10.10.10.1 -w /usr/share/wordlists/dirb/common.txt -x php,html,txt,bak`. La flag `-x` especifica las extensiones a probar. Opciones comunes adicionales: `-t 50` (hilos), `-o resultados.txt` (guardar salida), `--no-error` (ocultar errores), `-b 404,403` (ignorar codigos de estado).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-016">
<div class="flashcard-front">

**P:** Que es una transferencia de zona DNS (AXFR) y como la intentarias con dnsrecon?

</div>
<div class="flashcard-back">

**R:** Una transferencia de zona es un mecanismo DNS que replica todos los registros de un servidor a otro. Si esta mal configurada, permite a un atacante obtener todos los registros del dominio. Con dnsrecon: `dnsrecon -d ejemplo.com -t axfr`. Con dig: `dig axfr @ns1.ejemplo.com ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-017">
<div class="flashcard-front">

**P:** Que herramientas de enumeracion usarias para el puerto 445 (SMB) en un pentesting?

</div>
<div class="flashcard-back">

**R:** Las herramientas principales para SMB (puerto 445/139) son: **smbclient** (conexion interactiva), **enum4linux** (enumeracion completa de usuarios, shares y grupos), **smbmap** (permisos de shares) y **CrackMapExec/NetExec** (spray de passwords, pass-the-hash, ejecucion de comandos). Complementar con scripts Nmap: `nmap --script smb-enum-shares,smb-os-discovery -p 445`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="enumeracion">
</div>

<div class="flashcard" data-id="enum-fc-018">
<div class="flashcard-front">

**P:** Que es OpenVAS/GVM y cual es su flujo tipico de escaneo de vulnerabilidades?

</div>
<div class="flashcard-back">

**R:** OpenVAS (ahora GVM - Greenbone Vulnerability Management) es un escaner de vulnerabilidades de codigo abierto con interfaz web. El flujo tipico es: 1) Configurar un nuevo target (objetivo), 2) Seleccionar un scan config (Full and fast, Deep, etc.), 3) Crear y lanzar una tarea de escaneo, 4) Revisar el reporte de vulnerabilidades clasificadas por severidad.

</div>
</div>

---
