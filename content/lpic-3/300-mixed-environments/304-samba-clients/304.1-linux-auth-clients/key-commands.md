---
title: "304.1 - Comandos Clave: Clientes de Autenticación Linux"
description: "Referencia rápida de comandos para autenticación Linux contra AD"
tipo: comandos
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
  - sssd
  - winbind
  - comandos
---

# 304.1 Comandos Clave - Clientes de Autenticación Linux

## Comandos Winbind

| Comando                        | Descripción                                  |
|--------------------------------|----------------------------------------------|
| `net ads join -U admin`        | Unir al dominio AD                           |
| `net ads testjoin`             | Verificar unión al dominio                   |
| `net ads leave -U admin`       | Abandonar el dominio                         |
| `wbinfo -u`                    | Listar usuarios del dominio                  |
| `wbinfo -g`                    | Listar grupos del dominio                    |
| `wbinfo -i usuario`            | Información de un usuario                    |
| `wbinfo --user-info=usuario`   | Información detallada de usuario             |
| `wbinfo -a usuario%pass`       | Probar autenticación                         |
| `wbinfo -K usuario%pass`       | Probar autenticación Kerberos                |
| `wbinfo --online-status`       | Estado de conectividad al DC                 |

## Comandos SSSD y realm

| Comando                              | Descripción                             |
|--------------------------------------|-----------------------------------------|
| `realm discover dominio`             | Descubrir dominio AD                    |
| `realm join dominio -U admin`        | Unir al dominio                         |
| `realm leave`                        | Abandonar el dominio                    |
| `realm list`                         | Listar dominios configurados            |
| `realm permit usuario`               | Permitir acceso a un usuario            |
| `realm deny --all`                   | Denegar acceso a todos                  |
| `sssctl domain-status dominio`       | Estado del dominio en SSSD              |
| `sssctl user-checks usuario`         | Verificar resolución de usuario         |
| `sss_cache -E`                       | Limpiar toda la caché de SSSD           |
| `sss_cache -u usuario`               | Limpiar caché de un usuario             |

## Comandos Kerberos

| Comando                    | Descripción                                    |
|----------------------------|------------------------------------------------|
| `kinit usuario@REALM`     | Obtener ticket Kerberos                        |
| `klist`                    | Listar tickets activos                         |
| `kdestroy`                 | Destruir tickets                               |
| `kvno servicio/host@REALM`| Verificar número de versión de clave           |

## Comandos de verificación NSS

| Comando                    | Descripción                                    |
|----------------------------|------------------------------------------------|
| `getent passwd usuario`    | Resolver usuario vía NSS                       |
| `getent group grupo`       | Resolver grupo vía NSS                         |
| `id usuario`               | Mostrar UID, GID y grupos                      |
| `groups usuario`           | Mostrar grupos del usuario                     |

## Archivos de configuración principales

| Archivo                   | Descripción                                     |
|---------------------------|-------------------------------------------------|
| `/etc/krb5.conf`          | Configuración de Kerberos                       |
| `/etc/sssd/sssd.conf`     | Configuración de SSSD (permisos 0600)           |
| `/etc/samba/smb.conf`     | Configuración de Samba/Winbind                  |
| `/etc/nsswitch.conf`      | Fuentes de resolución de nombres                |
| `/etc/pam.d/`             | Configuración de módulos PAM                    |

## Módulos PAM relevantes

| Módulo               | Descripción                                       |
|----------------------|---------------------------------------------------|
| `pam_winbind.so`     | Autenticación vía Winbind                         |
| `pam_sss.so`         | Autenticación vía SSSD                            |
| `pam_unix.so`        | Autenticación local                               |
| `pam_mkhomedir.so`   | Creación automática de directorio home            |
| `pam_oddjob_mkhomedir.so` | Creación de home vía oddjob (SELinux)        |
| `pam_krb5.so`        | Autenticación directa Kerberos                    |

## Parámetros clave de sssd.conf

| Parámetro                      | Descripción                               |
|--------------------------------|-------------------------------------------|
| `id_provider`                  | Fuente de identidades (ad, ldap, ipa)     |
| `auth_provider`                | Autenticación (ad, krb5, ldap)            |
| `access_provider`              | Control de acceso (ad, simple, permit)    |
| `ldap_id_mapping`              | Mapeo automático SID→UID/GID              |
| `cache_credentials`            | Caché para login offline                  |
| `use_fully_qualified_names`    | Usar usuario@dominio                      |
| `fallback_homedir`             | Home por defecto (/home/%d/%u)            |
