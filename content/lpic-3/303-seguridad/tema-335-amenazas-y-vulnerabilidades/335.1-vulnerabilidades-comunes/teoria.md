---
tipo: teoria
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "335 - Amenazas y Evaluacion de Vulnerabilidades"
tema: "335.1 - Vulnerabilidades comunes y amenazas"
subtema: "335.1"
peso: 2
tags:
  - lpic-3
  - tema-335
  - cve
  - cvss
  - vulnerabilidades
  - owasp
---

# 335.1 Vulnerabilidades Comunes y Amenazas

## Introduccion

Comprender las vulnerabilidades comunes y las amenazas es esencial para proteger sistemas Linux. Este subtema cubre la clasificacion de vulnerabilidades, sistemas de puntuacion, tipos de ataques comunes y herramientas de escaneo.

> **Para el examen:** Este subtema tiene peso 2. Centra tu estudio en los conceptos de CVE, CVSS, los tipos de vulnerabilidades principales y la gestion de parches. Es mas teorico que practico.

---

## Base de Datos CVE

### CVE (Common Vulnerabilities and Exposures)

CVE es un sistema estandarizado de identificacion de vulnerabilidades de seguridad.

```
Formato: CVE-AÑO-NUMERO
Ejemplo: CVE-2021-44228 (Log4Shell)
```

| Componente | Descripcion |
|-----------|-------------|
| CVE ID | Identificador unico |
| Descripcion | Explicacion de la vulnerabilidad |
| Referencias | Enlaces a advisories y parches |
| CNA | Autoridad que asigna el CVE |

Fuentes principales:

- **NVD** (National Vulnerability Database): https://nvd.nist.gov/
- **MITRE CVE**: https://cve.mitre.org/
- **Advisories de distribucion**: RHSA, DSA, USN

```bash
# Consultar CVEs en sistemas RHEL
yum updateinfo list security
yum updateinfo info CVE-2021-44228

# En Debian
debsecan --suite bookworm
```

---

## CVSS (Common Vulnerability Scoring System)

CVSS proporciona una puntuacion numerica (0.0 - 10.0) que indica la severidad de una vulnerabilidad.

### CVSS v3.1 - Metricas Base

| Metrica | Valores |
|---------|---------|
| Attack Vector (AV) | Network (N), Adjacent (A), Local (L), Physical (P) |
| Attack Complexity (AC) | Low (L), High (H) |
| Privileges Required (PR) | None (N), Low (L), High (H) |
| User Interaction (UI) | None (N), Required (R) |
| Scope (S) | Unchanged (U), Changed (C) |
| Confidentiality (C) | None (N), Low (L), High (H) |
| Integrity (I) | None (N), Low (L), High (H) |
| Availability (A) | None (N), Low (L), High (H) |

### Rangos de Severidad

| Puntuacion | Severidad |
|-----------|-----------|
| 0.0 | Ninguna |
| 0.1 - 3.9 | Baja |
| 4.0 - 6.9 | Media |
| 7.0 - 8.9 | Alta |
| 9.0 - 10.0 | Critica |

Ejemplo de vector CVSS:
```
CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
Puntuacion: 10.0 (Critica) - Ejemplo: Log4Shell
```

> **Para el examen:** Conoce el significado de las metricas base de CVSS. Una puntuacion de 10.0 significa: accesible remotamente, sin complejidad, sin privilegios, sin interaccion del usuario, con impacto total en confidencialidad, integridad y disponibilidad.

---

## Tipos de Vulnerabilidades

### Buffer Overflow (Desbordamiento de Buffer)

Se produce cuando un programa escribe datos mas alla de los limites de un buffer asignado.

```
Tipos:
- Stack overflow: Desbordamiento en la pila
- Heap overflow: Desbordamiento en el heap
- Integer overflow: Desbordamiento de entero
```

Protecciones en Linux:
- ASLR (`kernel.randomize_va_space=2`)
- Stack canaries (compilacion con `-fstack-protector`)
- NX bit (No-Execute)
- PIE (Position Independent Executable)

### SQL Injection

Inyeccion de codigo SQL malicioso a traves de entradas no validadas.

```sql
-- Ejemplo vulnerable
SELECT * FROM users WHERE name = 'INPUT';
-- Ataque
SELECT * FROM users WHERE name = '' OR '1'='1';
```

### XSS (Cross-Site Scripting)

Inyeccion de scripts maliciosos en paginas web vistas por otros usuarios.

| Tipo | Descripcion |
|------|-------------|
| Reflected | El script se incluye en la URL y se refleja en la respuesta |
| Stored | El script se almacena en el servidor (BD, foro, etc.) |
| DOM-based | El script se ejecuta manipulando el DOM del navegador |

### CSRF (Cross-Site Request Forgery)

Fuerza a un usuario autenticado a ejecutar acciones no deseadas en una aplicacion web.

### Escalada de Privilegios

| Tipo | Descripcion |
|------|-------------|
| Vertical | Obtener privilegios superiores (user -> root) |
| Horizontal | Acceder a recursos de otro usuario del mismo nivel |

Vectores comunes en Linux:
- Binarios SUID mal configurados
- Vulnerabilidades en el kernel
- Configuracion incorrecta de sudo
- Tareas cron ejecutadas como root con scripts editables

### Race Conditions (Condiciones de Carrera)

Vulnerabilidades que explotan el tiempo entre la verificacion y el uso de un recurso (TOCTOU - Time of Check, Time of Use).

---

## OWASP Top 10

El OWASP Top 10 es una lista de las vulnerabilidades web mas criticas:

| Posicion | Vulnerabilidad | Descripcion |
|----------|---------------|-------------|
| A01 | Broken Access Control | Control de acceso inadecuado |
| A02 | Cryptographic Failures | Fallos criptograficos |
| A03 | Injection | Inyeccion (SQL, OS, LDAP) |
| A04 | Insecure Design | Diseño inseguro |
| A05 | Security Misconfiguration | Configuracion incorrecta |
| A06 | Vulnerable Components | Componentes con vulnerabilidades conocidas |
| A07 | Authentication Failures | Fallos de autenticacion |
| A08 | Software/Data Integrity | Fallos de integridad |
| A09 | Logging/Monitoring Failures | Registro y monitoreo insuficiente |
| A10 | SSRF | Server-Side Request Forgery |

---

## Escaneres de Vulnerabilidades

### OpenVAS (Greenbone Vulnerability Management)

```bash
# Iniciar OpenVAS
gvm-start

# Interfaz web: https://localhost:9392

# Escaneo desde linea de comandos con gvm-cli
gvm-cli tls --hostname localhost --port 9390 \
  --username admin --password pass
```

### Nessus

Nessus es un escaner comercial ampliamente utilizado. Proporciona:
- Escaneo de vulnerabilidades de red
- Verificacion de configuracion
- Deteccion de malware
- Auditoria de cumplimiento

### Escaneo con herramientas nativas

```bash
# Verificar paquetes con vulnerabilidades conocidas
# RHEL/CentOS
yum updateinfo list security

# Debian/Ubuntu
apt list --upgradable

# Verificar firma de paquetes
rpm -V paquete         # RHEL
debsums -c             # Debian

# Buscar binarios SUID/SGID sospechosos
find / -perm -4000 -type f 2>/dev/null
find / -perm -2000 -type f 2>/dev/null

# Verificar puertos abiertos inesperados
ss -tlnp
netstat -tlnp
```

---

## Gestion de Parches

### Mejores Practicas

1. **Monitorear advisories** de seguridad de la distribucion
2. **Evaluar severidad** usando CVSS y contexto del sistema
3. **Probar** parches en entorno de staging
4. **Aplicar** parches criticos lo antes posible
5. **Verificar** la aplicacion correcta del parche
6. **Documentar** los cambios realizados

```bash
# Aplicar solo parches de seguridad
# RHEL/CentOS
yum update --security
dnf update --security

# Debian/Ubuntu
apt-get upgrade -s | grep -i security
unattended-upgrade --dry-run

# Configurar actualizaciones automaticas de seguridad
# Debian: /etc/apt/apt.conf.d/50unattended-upgrades
# RHEL: dnf-automatic con apply_updates = yes
```

### Security Advisories

| Distribucion | Formato | Ejemplo |
|-------------|---------|---------|
| Red Hat | RHSA-YYYY:NNNN | RHSA-2021:5094 |
| Debian | DSA-NNNN | DSA-5022-1 |
| Ubuntu | USN-NNNN-N | USN-5192-1 |
| SUSE | SUSE-SU-YYYY:NNNN | SUSE-SU-2021:4111-1 |

> **Para el examen:** Conoce como consultar advisories de seguridad y aplicar parches especificos en las distribuciones principales.

---

## Trampas del examen

> Errores comunes y distinciones criticas que LPI suele evaluar en este subtema:

- **CVE vs CVSS** — CVE es un identificador unico de una vulnerabilidad (ej: CVE-2021-44228); CVSS es la puntuacion de severidad de esa vulnerabilidad (0.0-10.0). No confundir: CVE identifica, CVSS cuantifica la gravedad. Una CVE tiene un vector CVSS asociado
- **CVSS Attack Vector: Network vs Local** — Network (N) significa explotable remotamente sin acceso previo; Local (L) requiere acceso local al sistema. Una vulnerabilidad con AV:N es mas critica que una con AV:L. Si la pregunta habla de "explotable remotamente", el Attack Vector es Network
- **CVSS puntuacion 10.0** — significa: acceso remoto (AV:N), baja complejidad (AC:L), sin privilegios (PR:N), sin interaccion del usuario (UI:N), scope changed (S:C), impacto total en CIA. Conocer que combinacion produce la puntuacion maxima es importante para el examen
- **Buffer overflow: stack vs heap** — stack overflow sobreescribe la pila (puede redirigir flujo de ejecucion via return address); heap overflow sobreescribe el heap (manipula estructuras de datos). Las protecciones difieren: ASLR protege ambos (con valor 2), stack canaries solo protegen la pila
- **ASLR y sus valores** — `kernel.randomize_va_space=0` desactivado; =1 parcial (stack, libraries); =2 completo (incluye heap). El examen puede preguntar que proteccion se pierde con valor 1 vs 2 (respuesta: proteccion del heap)
- **XSS Reflected vs Stored** — Reflected: el script malicioso se incluye en la URL y se refleja en la respuesta inmediata; Stored: el script se almacena permanentemente en el servidor (BD, foro) y afecta a todos los usuarios que visiten la pagina. Stored es mas peligroso porque no requiere que la victima haga clic en un enlace especifico
- **Escalada vertical vs horizontal** — vertical: obtener privilegios superiores (user -> root); horizontal: acceder a recursos de otro usuario del mismo nivel. Si la pregunta menciona obtener acceso root, es vertical. Si menciona acceder a la cuenta de otro usuario, es horizontal
- **OWASP Top 10: A01 Broken Access Control** — es la vulnerabilidad web numero 1 segun OWASP (2021). No confundir con A03 Injection que bajo del puesto 1 al 3. El examen puede preguntar el orden actual
- **`yum updateinfo list security` vs `yum update --security`** — el primero LISTA los parches disponibles sin instalar nada; el segundo APLICA solo los parches de seguridad. Confundir ambos puede significar no aplicar parches o instalar actualizaciones no deseadas
- **Race condition (TOCTOU)** — Time of Check, Time of Use: la vulnerabilidad existe entre el momento de verificar un recurso y el momento de usarlo. Un atacante puede modificar el recurso en esa ventana temporal. Relevante para scripts SUID que verifican permisos antes de actuar sobre archivos
