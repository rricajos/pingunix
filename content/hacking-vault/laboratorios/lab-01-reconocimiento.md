---
title: "Lab 01 - Reconocimiento de Red"
tags:
  - hacking
  - laboratorio
  - reconocimiento
tipo: laboratorio
certificacion: hacking-vault
---

# Lab 01 - Reconocimiento de Red

**Dificultad:** Basica | **Duracion estimada:** 2-3 horas | **Herramientas:** Nmap, searchsploit

## Objetivo

Realizar un reconocimiento completo de una red de prueba local: descubrir hosts activos, identificar puertos y servicios, determinar sistemas operativos e identificar vulnerabilidades potenciales. Al finalizar, tendras un informe estructurado del objetivo.

> **Advertencia:** Este laboratorio debe ejecutarse unicamente en tu red local de pruebas. Escanear redes ajenas sin autorizacion es ilegal en la mayoria de jurisdicciones. Utiliza siempre entornos controlados.

---

## Preparacion del Entorno

### Opcion A: Metasploitable2 con VirtualBox

1. Descarga Metasploitable2 desde [SourceForge](https://sourceforge.net/projects/metasploitable/)
2. Importa el archivo .vmdk en VirtualBox como nueva VM
3. Configura la red en modo **Host-Only** o **Red interna**

```bash
# Verificar que tu maquina atacante y el objetivo estan en la misma red
ip addr show
# Ejemplo: 192.168.56.0/24 para redes Host-Only de VirtualBox
```

### Opcion B: Contenedor Docker (alternativa ligera)

```bash
# Levantar un entorno vulnerable con Docker
docker pull tleemcjr/metasploitable2
docker run -d --name metasploitable tleemcjr/metasploitable2
docker inspect metasploitable | grep IPAddress
```

4. Enciende tu maquina atacante (Kali Linux o similar)
5. Confirma conectividad basica:

```bash
ping -c 3 <IP_OBJETIVO>
```

---

## Fase 1: Descubrimiento de Hosts

Identifica que dispositivos estan activos en la subred.

6. Ejecuta un barrido de ping en toda la subred:

```bash
nmap -sn 192.168.56.0/24
```

7. Si ICMP esta bloqueado, usa descubrimiento con ARP:

```bash
nmap -sn -PR 192.168.56.0/24
```

8. Registra todos los hosts descubiertos con sus direcciones IP y MAC.

> **Nota:** El flag `-sn` (ping scan) no escanea puertos. Solo determina si el host esta activo.

---

## Fase 2: Escaneo de Puertos

Ahora que conoces los hosts activos, identifica los puertos abiertos del objetivo principal.

9. Escaneo SYN rapido de los 1000 puertos mas comunes:

```bash
nmap -sS <IP_OBJETIVO>
```

10. Escaneo completo de los 65535 puertos:

```bash
nmap -sS -p- --min-rate 3000 <IP_OBJETIVO> -oN scan_full.txt
```

11. Escaneo con deteccion de versiones y scripts por defecto en los puertos encontrados:

```bash
nmap -sS -sV -sC -p 21,22,23,25,80,139,445,3306,5432 <IP_OBJETIVO> -oN scan_detallado.txt
```

**Explicacion de los flags:**
| Flag | Funcion |
|------|---------|
| `-sS` | SYN scan (medio abierto, sigiloso) |
| `-sV` | Detectar version del servicio |
| `-sC` | Ejecutar scripts NSE por defecto |
| `-p-` | Todos los puertos (1-65535) |
| `--min-rate` | Velocidad minima de paquetes por segundo |
| `-oN` | Guardar salida en formato normal |

---

## Fase 3: Enumeracion de Servicios

Para cada puerto abierto, profundiza en el servicio que corre.

12. **FTP (puerto 21)** - Verificar acceso anonimo:

```bash
nmap -sV --script ftp-anon,ftp-vsftpd-backdoor -p 21 <IP_OBJETIVO>
```

13. **SSH (puerto 22)** - Enumerar metodos de autenticacion:

```bash
nmap --script ssh-auth-methods -p 22 <IP_OBJETIVO>
```

14. **HTTP (puerto 80)** - Enumerar directorios y tecnologias:

```bash
nmap --script http-enum,http-title,http-server-header -p 80 <IP_OBJETIVO>
```

15. **SMB (puertos 139/445)** - Enumerar recursos compartidos:

```bash
nmap --script smb-enum-shares,smb-enum-users,smb-os-discovery -p 139,445 <IP_OBJETIVO>
```

16. **MySQL (puerto 3306)** - Comprobar acceso sin credenciales:

```bash
nmap --script mysql-info,mysql-empty-password -p 3306 <IP_OBJETIVO>
```

---

## Fase 4: Deteccion del Sistema Operativo

17. Ejecuta fingerprinting de OS:

```bash
nmap -O --osscan-guess <IP_OBJETIVO>
```

18. Combina con la deteccion agresiva para un perfil completo:

```bash
nmap -A -T4 <IP_OBJETIVO> -oN scan_agresivo.txt
```

> **Nota:** El flag `-A` activa deteccion de OS, version, scripts y traceroute. Usa `-T4` para un ritmo rapido pero sin saturar la red.

---

## Fase 5: Identificacion de Vulnerabilidades

19. Ejecuta los scripts de vulnerabilidades de nmap:

```bash
nmap --script vuln -p 21,22,23,80,139,445 <IP_OBJETIVO> -oN scan_vuln.txt
```

20. Busca exploits conocidos para cada servicio con searchsploit:

```bash
# Ejemplo: buscar exploits para vsftpd 2.3.4
searchsploit vsftpd 2.3.4

# Buscar exploits para la version de Apache detectada
searchsploit apache 2.2

# Buscar exploits para Samba
searchsploit samba 3.0
```

21. Revisa los resultados y clasifica por severidad (critica, alta, media, baja).

---

## Documentar los Hallazgos

22. Crea un informe estructurado con el siguiente formato:

```markdown
# Informe de Reconocimiento
## Fecha: [FECHA]
## Objetivo: [IP_OBJETIVO]

### 1. Hosts Descubiertos
| IP | MAC | Estado |
|----|-----|--------|

### 2. Puertos y Servicios
| Puerto | Estado | Servicio | Version |
|--------|--------|----------|---------|

### 3. Sistema Operativo
- OS detectado:
- Confianza:

### 4. Vulnerabilidades Identificadas
| Servicio | CVE/Referencia | Severidad | Exploit disponible |
|----------|---------------|-----------|-------------------|

### 5. Recomendaciones
- [Lista de acciones de remediacion]
```

23. Guarda todas las salidas de nmap para referencia futura:

```bash
mkdir -p ~/labs/lab01-recon
mv scan_*.txt ~/labs/lab01-recon/
```

---

## Preguntas de Evaluacion

Responde las siguientes preguntas basandote en tu escaneo:

1. Cuantos hosts activos encontraste en la subred?
2. Cuantos puertos abiertos tiene el objetivo principal?
3. Que version de FTP esta corriendo? Tiene alguna vulnerabilidad conocida?
4. Que recursos compartidos por SMB estan accesibles sin autenticacion?
5. Que sistema operativo y kernel ejecuta el objetivo?
6. Cual es la vulnerabilidad mas critica que encontraste? Existe un exploit publico?
7. Que diferencia hay entre un escaneo `-sS` y un escaneo `-sT`?
8. Por que es importante usar `-oN` para guardar los resultados?

---

## Limpieza

24. Apaga la VM de Metasploitable2 cuando termines:

```bash
# Si usaste Docker
docker stop metasploitable && docker rm metasploitable
```

---

## Siguiente Lab

Continua con [Lab 02 - Explotacion Web](lab-02-explotacion-web.md) para poner en practica lo descubierto en este reconocimiento.
