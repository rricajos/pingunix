---
title: "305.1 - FreeIPA Instalación"
description: "Instalación y configuración de FreeIPA como sistema de gestión de identidades"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.1"
peso: 2
tags:
  - lpic-3
  - tema-305
  - freeipa
  - instalacion
  - identidad
---

# 305.1 FreeIPA Instalación

## Introducción

FreeIPA (Identity, Policy, Audit) es una solución integrada de gestión de identidades para entornos Linux/Unix. Proporciona autenticación centralizada, autorización, gestión de certificados y DNS en una única plataforma. Es el equivalente de código abierto a Active Directory para entornos Linux.

## Componentes de FreeIPA

FreeIPA integra varios componentes de código abierto:

| Componente         | Función                                              |
|--------------------|------------------------------------------------------|
| **389 Directory Server** | Servidor LDAP para almacenamiento de identidades |
| **MIT Kerberos**   | Autenticación Kerberos (KDC)                         |
| **Dogtag CA**      | Autoridad de certificación (PKI)                     |
| **BIND**           | Servidor DNS integrado                               |
| **SSSD**           | Cliente para resolución de identidades               |
| **Apache/mod_nss** | Interfaz web de administración                       |
| **Certmonger**     | Renovación automática de certificados                |

```
┌─────────────────────────────────────┐
│           FreeIPA Server            │
├──────────┬──────────┬───────────────┤
│ 389 DS   │ MIT KDC  │ Dogtag CA    │
│ (LDAP)   │(Kerberos)│ (Certificados)│
├──────────┴──────────┴───────────────┤
│           BIND (DNS)                │
├─────────────────────────────────────┤
│        Web UI (Apache)              │
└─────────────────────────────────────┘
```

> **Para el examen:** FreeIPA combina 389 DS (LDAP), MIT Kerberos (autenticación), Dogtag CA (certificados) y BIND (DNS). Conocer estos cuatro componentes principales es fundamental.

## Requisitos previos

### Sistema

- Red Hat/CentOS/Fedora (plataforma principal)
- FQDN configurado correctamente
- DNS resoluble (forward y reverse)
- Puertos necesarios abiertos en el firewall

### Puertos requeridos

| Puerto    | Protocolo | Servicio                      |
|-----------|-----------|-------------------------------|
| 80        | TCP       | HTTP (redirección a HTTPS)    |
| 443       | TCP       | HTTPS (Web UI)                |
| 389       | TCP       | LDAP                          |
| 636       | TCP       | LDAPS                         |
| 88        | TCP/UDP   | Kerberos                      |
| 464       | TCP/UDP   | Kerberos (kpasswd)            |
| 53        | TCP/UDP   | DNS                           |
| 123       | UDP       | NTP                           |

### Preparación del sistema

```bash
# Configurar FQDN
hostnamectl set-hostname ipa.empresa.local

# Verificar resolución DNS
hostname -f
# Debe devolver: ipa.empresa.local

# Configurar /etc/hosts si no hay DNS externo
echo "192.168.1.10 ipa.empresa.local ipa" >> /etc/hosts

# Abrir puertos en firewall
firewall-cmd --add-service=freeipa-ldap --permanent
firewall-cmd --add-service=freeipa-ldaps --permanent
firewall-cmd --add-service=dns --permanent
firewall-cmd --add-service=ntp --permanent
firewall-cmd --reload
```

## Instalación del servidor FreeIPA

### Instalación de paquetes

```bash
# RHEL/CentOS/Rocky
dnf install -y freeipa-server freeipa-server-dns

# Con módulo de confianza AD (opcional)
dnf install -y freeipa-server-trust-ad
```

### ipa-server-install

```bash
# Instalación interactiva
ipa-server-install

# Instalación no interactiva
ipa-server-install \
  --realm=EMPRESA.LOCAL \
  --domain=empresa.local \
  --ds-password=DirectoryManagerPass \
  --admin-password=AdminPass \
  --hostname=ipa.empresa.local \
  --ip-address=192.168.1.10 \
  --setup-dns \
  --forwarder=8.8.8.8 \
  --no-ntp \
  --unattended
```

| Parámetro            | Descripción                                        |
|----------------------|----------------------------------------------------|
| `--realm`            | Realm Kerberos (MAYÚSCULAS)                        |
| `--domain`           | Dominio DNS                                        |
| `--ds-password`      | Contraseña del Directory Manager (LDAP admin)      |
| `--admin-password`   | Contraseña del usuario admin de IPA                |
| `--hostname`         | FQDN del servidor                                  |
| `--setup-dns`        | Configurar BIND integrado                          |
| `--forwarder`        | DNS forwarder para resolución externa              |
| `--no-ntp`           | No configurar NTP (si chrony ya está configurado)  |
| `--unattended`       | Instalación no interactiva                         |

> **Para el examen:** `ipa-server-install` es el comando principal para instalar un servidor FreeIPA. `--realm` siempre en mayúsculas. `--setup-dns` integra BIND como servidor DNS del dominio.

## Instalación de clientes FreeIPA

### ipa-client-install

```bash
# Instalación de paquetes del cliente
dnf install -y freeipa-client

# Instalación interactiva
ipa-client-install

# Instalación no interactiva
ipa-client-install \
  --server=ipa.empresa.local \
  --domain=empresa.local \
  --realm=EMPRESA.LOCAL \
  --principal=admin \
  --password=AdminPass \
  --mkhomedir \
  --unattended
```

| Parámetro          | Descripción                                      |
|--------------------|--------------------------------------------------|
| `--server`         | FQDN del servidor FreeIPA                        |
| `--domain`         | Dominio DNS                                      |
| `--realm`          | Realm Kerberos                                   |
| `--principal`      | Usuario para la inscripción                      |
| `--mkhomedir`      | Crear directorio home automáticamente            |
| `--enable-dns-updates` | Actualizar DNS dinámicamente                 |

El instalador del cliente configura automáticamente:
- `/etc/krb5.conf` (Kerberos)
- `/etc/sssd/sssd.conf` (SSSD)
- `/etc/nsswitch.conf` (NSS)
- Módulos PAM
- Certificados CA

> **Para el examen:** `ipa-client-install` configura automáticamente Kerberos, SSSD, PAM y NSS en el cliente. `--mkhomedir` activa la creación automática de directorios home.

## Réplicas FreeIPA

### ipa-replica-install

Las réplicas proporcionan alta disponibilidad y distribución geográfica:

```bash
# En el servidor réplica (previamente inscrito como cliente)
ipa-client-install --server=ipa.empresa.local --domain=empresa.local

# Instalar como réplica
ipa-replica-install \
  --setup-dns \
  --forwarder=8.8.8.8

# Réplica con CA
ipa-replica-install \
  --setup-ca \
  --setup-dns \
  --forwarder=8.8.8.8
```

| Parámetro     | Descripción                                        |
|---------------|----------------------------------------------------|
| `--setup-ca`  | Instalar réplica de la autoridad de certificación  |
| `--setup-dns` | Instalar réplica del servidor DNS                  |
| `--setup-kra` | Instalar Key Recovery Authority                    |

> **Para el examen:** Desde FreeIPA 4.x, la instalación de réplicas es más sencilla: primero se inscribe como cliente y luego se promueve con `ipa-replica-install`. Ya no es necesario preparar un archivo de réplica manualmente.

## Integración DNS

### DNS integrado

FreeIPA puede gestionar DNS automáticamente:

```bash
# Verificar zonas DNS
ipa dnszone-find

# Añadir registro DNS
ipa dnsrecord-add empresa.local servidor --a-rec=192.168.1.20

# Ver registros de una zona
ipa dnsrecord-find empresa.local
```

### Registros SRV automáticos

FreeIPA crea automáticamente registros SRV necesarios:

```
_kerberos._tcp.empresa.local  → ipa.empresa.local
_ldap._tcp.empresa.local      → ipa.empresa.local
_kpasswd._tcp.empresa.local   → ipa.empresa.local
```

## Gestión de certificados

### Certificados del servidor

```bash
# Listar certificados
ipa cert-find

# Ver detalles de un certificado
ipa cert-show SERIAL_NUMBER

# Solicitar un certificado
ipa cert-request archivo.csr --principal=HTTP/servidor.empresa.local
```

### Certmonger

Certmonger gestiona la renovación automática de certificados:

```bash
# Ver certificados gestionados
getcert list

# Solicitar un certificado
getcert request -K HTTP/servidor.empresa.local \
  -D servidor.empresa.local \
  -c IPA

# Verificar estado de seguimiento
getcert list -c IPA
```

> **Para el examen:** Dogtag CA proporciona la infraestructura PKI. Certmonger se encarga de la renovación automática de certificados. `getcert list` muestra los certificados gestionados.

## Interfaz web

La interfaz web está disponible en `https://ipa.empresa.local/ipa/ui/`:

- Gestión de usuarios, grupos y hosts
- Políticas de acceso (HBAC)
- Reglas de sudo
- Certificados
- Zonas DNS

```bash
# Obtener ticket Kerberos para acceder a la web UI
kinit admin
# Luego acceder con el navegador a https://ipa.empresa.local/ipa/ui/
```

## Verificación post-instalación

```bash
# Verificar servicios
ipactl status

# Verificar la instalación
ipa-healthcheck

# Probar autenticación Kerberos
kinit admin
klist

# Verificar LDAP
ldapsearch -x -H ldap://ipa.empresa.local -b "dc=empresa,dc=local"

# Listar usuarios
ipa user-find

# Ver información del servidor
ipa config-show
```

## Desinstalación

```bash
# Desinstalar servidor
ipa-server-install --uninstall

# Desinstalar cliente
ipa-client-install --uninstall
```
