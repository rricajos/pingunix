---
tipo: comandos
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
---

# Comandos Clave - 335.1 Vulnerabilidades Comunes y Amenazas

## Consulta de Vulnerabilidades

| Comando | Descripcion |
|---------|-------------|
| `yum updateinfo list security` | Listar advisories de seguridad (RHEL) |
| `yum updateinfo info CVE-YYYY-NNNNN` | Informacion sobre un CVE (RHEL) |
| `dnf updateinfo list --security` | Listar advisories (Fedora/RHEL 8+) |
| `debsecan --suite bookworm` | Escanear vulnerabilidades (Debian) |
| `apt list --upgradable` | Listar paquetes actualizables (Debian) |

## Gestion de Parches de Seguridad

| Comando | Descripcion |
|---------|-------------|
| `yum update --security` | Aplicar solo parches de seguridad (RHEL) |
| `dnf update --security` | Aplicar solo parches de seguridad (RHEL 8+) |
| `unattended-upgrade --dry-run` | Simular actualizaciones automaticas (Debian) |
| `apt-get upgrade -s` | Simular actualizacion (Debian) |

## Verificacion de Integridad de Paquetes

| Comando | Descripcion |
|---------|-------------|
| `rpm -V paquete` | Verificar integridad de paquete (RHEL) |
| `rpm -Va` | Verificar todos los paquetes (RHEL) |
| `debsums -c` | Verificar checksums de paquetes (Debian) |
| `debsums -s` | Verificar solo archivos de configuracion (Debian) |

## Busqueda de Configuraciones Inseguras

| Comando | Descripcion |
|---------|-------------|
| `find / -perm -4000 -type f 2>/dev/null` | Buscar archivos SUID |
| `find / -perm -2000 -type f 2>/dev/null` | Buscar archivos SGID |
| `find / -perm -o+w -type f 2>/dev/null` | Archivos escribibles por todos |
| `find / -nouser -o -nogroup 2>/dev/null` | Archivos sin propietario |
| `ss -tlnp` | Puertos en escucha |
| `netstat -tlnp` | Puertos en escucha (alternativa) |

## Escaneres de Vulnerabilidades

| Herramienta | Descripcion |
|-------------|-------------|
| OpenVAS/Greenbone | Escaner de vulnerabilidades open source |
| Nessus | Escaner comercial ampliamente usado |
| Lynis | Auditoria de seguridad del sistema |
| OpenSCAP | Evaluacion de cumplimiento de seguridad |

## Rangos CVSS v3.1

| Puntuacion | Severidad |
|-----------|-----------|
| 0.0 | Ninguna |
| 0.1 - 3.9 | Baja |
| 4.0 - 6.9 | Media |
| 7.0 - 8.9 | Alta |
| 9.0 - 10.0 | Critica |

## Formato de Advisories de Seguridad

| Distribucion | Formato |
|-------------|---------|
| Red Hat | RHSA-YYYY:NNNN |
| Debian | DSA-NNNN |
| Ubuntu | USN-NNNN-N |
| SUSE | SUSE-SU-YYYY:NNNN |
| CVE | CVE-YYYY-NNNNN |
