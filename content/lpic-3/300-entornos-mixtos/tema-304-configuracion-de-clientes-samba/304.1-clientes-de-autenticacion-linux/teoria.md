---
title: "304.1 - Clientes de Autenticación Linux"
description: "Configuración de autenticación Linux contra Active Directory con PAM, Winbind y SSSD"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 304 - Configuración de Clientes Samba"
subtema: "304.1"
peso: 5
tags:
  - lpic-3
  - tema-304
  - samba
  - pam
  - winbind
  - sssd
  - kerberos
  - autenticacion
---

# 304.1 Clientes de Autenticación Linux

## Introducción

En entornos mixtos, los sistemas Linux frecuentemente necesitan autenticar usuarios contra un dominio Active Directory (AD). Las dos soluciones principales son Winbind (parte de Samba) y SSSD (System Security Services Daemon). Ambas integran PAM y NSS para proporcionar autenticación y resolución de identidades de forma transparente.

## PAM (Pluggable Authentication Modules)

### Arquitectura PAM

PAM proporciona una capa de abstracción entre las aplicaciones y los mecanismos de autenticación:

```
Aplicación (login, ssh, su) → PAM → Módulo (pam_winbind, pam_sss, pam_unix)
```

### Tipos de módulos PAM

| Tipo      | Descripción                                        |
|-----------|----------------------------------------------------|
| `auth`    | Verifica la identidad del usuario (contraseña)     |
| `account` | Verifica si la cuenta está autorizada              |
| `password`| Gestiona el cambio de contraseña                   |
| `session` | Acciones al inicio/fin de sesión                   |

### Configuración PAM con Winbind

```
# /etc/pam.d/common-auth (o system-auth)
auth    sufficient    pam_winbind.so
auth    required      pam_unix.so try_first_pass

# /etc/pam.d/common-account
account sufficient    pam_winbind.so
account required      pam_unix.so

# /etc/pam.d/common-password
password sufficient   pam_winbind.so
password required     pam_unix.so try_first_pass

# /etc/pam.d/common-session
session required      pam_unix.so
session optional      pam_winbind.so
session required      pam_mkhomedir.so skel=/etc/skel umask=0077
```

### Configuración PAM con SSSD

```
# /etc/pam.d/common-auth
auth    sufficient    pam_sss.so use_first_pass
auth    required      pam_unix.so try_first_pass

# /etc/pam.d/common-account
account sufficient    pam_sss.so
account required      pam_unix.so

# /etc/pam.d/common-password
password sufficient   pam_sss.so use_authtok
password required     pam_unix.so try_first_pass

# /etc/pam.d/common-session
session required      pam_unix.so
session optional      pam_sss.so
session required      pam_mkhomedir.so skel=/etc/skel umask=0077
```

> **Para el examen:** `pam_winbind.so` y `pam_sss.so` son los módulos PAM para Winbind y SSSD respectivamente. Ambos deben configurarse en los cuatro tipos de módulos PAM (auth, account, password, session).

## NSS (Name Service Switch)

### /etc/nsswitch.conf

Define dónde buscar información de usuarios, grupos y otros servicios:

```
# Con Winbind
passwd:     files winbind
group:      files winbind
shadow:     files winbind

# Con SSSD
passwd:     files sss
group:      files sss
shadow:     files sss

# También posible combinación
passwd:     files sss winbind
group:      files sss winbind
```

| Fuente    | Descripción                                          |
|-----------|------------------------------------------------------|
| `files`   | Archivos locales (/etc/passwd, /etc/group)           |
| `winbind` | Servicio Winbind (parte de Samba)                    |
| `sss`     | Servicio SSSD                                        |

> **Para el examen:** El orden en nsswitch.conf importa. `files` primero asegura que los usuarios locales se resuelven antes que los del dominio. `winbind` y `sss` no deben usarse simultáneamente para el mismo servicio.

## Winbind

### Configuración en smb.conf

```ini
[global]
   workgroup = EMPRESA
   security = ADS
   realm = EMPRESA.LOCAL

   # Winbind
   winbind use default domain = yes
   winbind enum users = yes
   winbind enum groups = yes
   winbind offline logon = yes
   winbind refresh tickets = yes

   # Mapeo de IDs
   idmap config * : backend = tdb
   idmap config * : range = 3000-7999
   idmap config EMPRESA : backend = rid
   idmap config EMPRESA : range = 10000-999999

   # Plantilla para usuarios
   template homedir = /home/%D/%U
   template shell = /bin/bash
```

| Parámetro                        | Descripción                                    |
|----------------------------------|------------------------------------------------|
| `winbind use default domain`     | Omitir el dominio en nombres de usuario        |
| `winbind enum users`             | Permitir enumerar usuarios del dominio         |
| `winbind enum groups`            | Permitir enumerar grupos del dominio           |
| `winbind offline logon`          | Permitir login sin conectividad al DC          |
| `winbind refresh tickets`        | Renovar tickets Kerberos automáticamente       |
| `template homedir`               | Plantilla para directorio home                 |
| `template shell`                 | Shell por defecto para usuarios del dominio    |

> **Para el examen:** `winbind use default domain = yes` permite que los usuarios inicien sesión como `usuario` en lugar de `DOMINIO\usuario`. `winbind offline logon = yes` permite autenticación con credenciales en caché cuando el DC no está disponible.

### Unión al dominio con Winbind

```bash
# Unir al dominio
net ads join -U administrador

# Verificar la unión
net ads testjoin

# Iniciar Winbind
systemctl start winbind
systemctl enable winbind

# Verificar usuarios y grupos del dominio
wbinfo -u       # Listar usuarios
wbinfo -g       # Listar grupos
wbinfo -i usuario  # Info de usuario
getent passwd usuario  # Verificar resolución NSS
```

## SSSD (System Security Services Daemon)

### Arquitectura

SSSD es un servicio modular que proporciona autenticación, autorización y caché de identidades:

```
Aplicación → PAM/NSS → SSSD → Backend (AD, LDAP, Kerberos, FreeIPA)
```

### Configuración sssd.conf

```ini
# /etc/sssd/sssd.conf (permisos: 0600)
[sssd]
domains = empresa.local
services = nss, pam, sudo
config_file_version = 2

[domain/empresa.local]
# Proveedor de identidad
id_provider = ad
auth_provider = ad
access_provider = ad
chpass_provider = ad

# Conexión al dominio
ad_domain = empresa.local
ad_server = dc1.empresa.local, dc2.empresa.local
krb5_realm = EMPRESA.LOCAL

# Mapeo de IDs
ldap_id_mapping = true

# Opciones de usuario
fallback_homedir = /home/%d/%u
default_shell = /bin/bash
use_fully_qualified_names = false

# Caché
cache_credentials = true
krb5_store_password_if_offline = true

# Filtros de acceso
access_provider = ad
ad_access_filter = memberOf=CN=LinuxUsers,OU=Groups,DC=empresa,DC=local

[nss]
filter_groups = root
filter_users = root

[pam]
offline_credentials_expiration = 7
```

| Parámetro                     | Descripción                                      |
|-------------------------------|--------------------------------------------------|
| `id_provider`                 | Fuente de identidades (`ad`, `ldap`, `ipa`)      |
| `auth_provider`               | Método de autenticación (`ad`, `krb5`, `ldap`)   |
| `access_provider`             | Control de acceso (`ad`, `simple`, `permit`)      |
| `chpass_provider`             | Cambio de contraseña                              |
| `ldap_id_mapping`             | Mapeo automático de SID a UID/GID                |
| `use_fully_qualified_names`   | Usar `usuario@dominio` en lugar de `usuario`     |
| `cache_credentials`           | Caché de credenciales para login offline          |
| `fallback_homedir`            | Directorio home por defecto                       |

> **Para el examen:** SSSD con `id_provider = ad` es la forma recomendada de integrar Linux con Active Directory. `ldap_id_mapping = true` genera automáticamente UIDs/GIDs a partir del SID de Windows, sin necesidad de extensiones POSIX en AD.

### Unión al dominio con SSSD

```bash
# Usando realm (recomendado)
realm discover empresa.local
realm join empresa.local -U administrador
realm list

# Verificar
getent passwd usuario@empresa.local
id usuario
```

## Configuración de Kerberos (krb5.conf)

```ini
# /etc/krb5.conf
[libdefaults]
   default_realm = EMPRESA.LOCAL
   dns_lookup_realm = false
   dns_lookup_kdc = true
   ticket_lifetime = 24h
   renew_lifetime = 7d
   forwardable = true
   rdns = false

[realms]
   EMPRESA.LOCAL = {
      kdc = dc1.empresa.local
      kdc = dc2.empresa.local
      admin_server = dc1.empresa.local
   }

[domain_realm]
   .empresa.local = EMPRESA.LOCAL
   empresa.local = EMPRESA.LOCAL
```

| Parámetro          | Descripción                                         |
|--------------------|-----------------------------------------------------|
| `default_realm`    | Realm Kerberos por defecto (en mayúsculas)          |
| `dns_lookup_kdc`   | Descubrir KDCs vía DNS SRV records                  |
| `ticket_lifetime`  | Tiempo de vida del TGT                              |
| `renew_lifetime`   | Tiempo máximo de renovación                         |
| `forwardable`      | Permitir delegación de tickets                      |

> **Para el examen:** El realm Kerberos siempre se escribe en MAYÚSCULAS. `dns_lookup_kdc = true` permite descubrir automáticamente los controladores de dominio a través de registros DNS SRV.

## Creación automática de directorios home

### pam_mkhomedir

```
# /etc/pam.d/common-session
session required pam_mkhomedir.so skel=/etc/skel umask=0077
```

Crea automáticamente el directorio home del usuario en su primer inicio de sesión.

### oddjob-mkhomedir (alternativa)

```bash
# Instalar y habilitar
systemctl enable oddjobd
systemctl start oddjobd
```

```
# /etc/pam.d/common-session
session optional pam_oddjob_mkhomedir.so umask=0077
```

> **Para el examen:** `pam_mkhomedir` y `oddjob-mkhomedir` crean directorios home automáticamente. `oddjob` es preferido en Red Hat/CentOS porque funciona mejor con SELinux al ejecutar como servicio privilegiado.

## Integración de sudo con grupos AD

### Configuración de sudoers

```bash
# /etc/sudoers.d/ad-admins
%linuxadmins ALL=(ALL) ALL

# Con nombre de dominio completo
%linuxadmins@empresa.local ALL=(ALL) ALL

# Grupo AD específico
%EMPRESA\\Domain\ Admins ALL=(ALL) ALL
```

### sudo con SSSD

SSSD puede almacenar reglas sudo en AD o LDAP:

```ini
# sssd.conf
[sssd]
services = nss, pam, sudo

[domain/empresa.local]
sudo_provider = ad
```

> **Para el examen:** Para usar grupos AD en sudoers, se prefijan con `%`. Si `use_fully_qualified_names = true` en SSSD, se debe usar el nombre completo `%grupo@dominio`.

## Comparativa Winbind vs SSSD

| Característica           | Winbind               | SSSD                    |
|--------------------------|-----------------------|-------------------------|
| Parte de                 | Samba                 | Proyecto independiente  |
| Backends soportados      | AD                    | AD, LDAP, IPA, Kerberos|
| Módulo PAM               | pam_winbind           | pam_sss                 |
| Módulo NSS               | winbind               | sss                     |
| Cache offline            | Sí                    | Sí (más avanzado)       |
| Integración con FreeIPA  | No                    | Sí (nativo)             |
| Configuración            | smb.conf              | sssd.conf               |
| Recomendado para         | Samba member server   | Workstations Linux      |
