---
title: "305.1 - Comandos Clave: FreeIPA Instalación"
description: "Referencia rápida de comandos para instalación de FreeIPA"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.1"
peso: 2
tags:
  - lpic-3
  - tema-305
  - freeipa
  - comandos
---

# 305.1 Comandos Clave - FreeIPA Instalación

## Comandos de instalación

| Comando                          | Descripción                                  |
|----------------------------------|----------------------------------------------|
| `ipa-server-install`             | Instalar servidor FreeIPA                    |
| `ipa-client-install`             | Instalar cliente FreeIPA                     |
| `ipa-replica-install`            | Instalar réplica FreeIPA                     |
| `ipa-server-install --uninstall` | Desinstalar servidor                         |
| `ipa-client-install --uninstall` | Desinstalar cliente                          |

## Parámetros principales de ipa-server-install

| Parámetro            | Descripción                                    |
|----------------------|------------------------------------------------|
| `--realm`            | Realm Kerberos (MAYÚSCULAS)                    |
| `--domain`           | Dominio DNS                                    |
| `--ds-password`      | Contraseña del Directory Manager               |
| `--admin-password`   | Contraseña del admin IPA                       |
| `--hostname`         | FQDN del servidor                              |
| `--ip-address`       | Dirección IP del servidor                      |
| `--setup-dns`        | Instalar DNS integrado (BIND)                  |
| `--forwarder`        | Servidor DNS forwarder                         |
| `--unattended`       | Instalación no interactiva                     |

## Parámetros principales de ipa-client-install

| Parámetro                | Descripción                                |
|--------------------------|--------------------------------------------|
| `--server`               | FQDN del servidor IPA                      |
| `--domain`               | Dominio DNS                                |
| `--realm`                | Realm Kerberos                             |
| `--principal`            | Usuario para inscripción                   |
| `--mkhomedir`            | Crear home automáticamente                 |
| `--enable-dns-updates`   | Actualizar DNS dinámicamente               |
| `--unattended`           | Instalación no interactiva                 |

## Componentes de FreeIPA

| Componente       | Función                    | Puerto(s)      |
|------------------|----------------------------|----------------|
| 389 DS           | LDAP                       | 389, 636       |
| MIT Kerberos     | Autenticación              | 88, 464        |
| Dogtag CA        | Certificados (PKI)         | 443            |
| BIND             | DNS                        | 53             |
| Apache           | Web UI                     | 80, 443        |

## Verificación y diagnóstico

```bash
# Estado de servicios FreeIPA
ipactl status

# Health check
ipa-healthcheck

# Verificar Kerberos
kinit admin && klist

# Listar usuarios
ipa user-find

# Configuración del servidor
ipa config-show

# Certificados gestionados
getcert list

# Zonas DNS
ipa dnszone-find
```

## Gestión de servicios

```bash
# Iniciar todos los servicios FreeIPA
ipactl start

# Detener todos los servicios
ipactl stop

# Reiniciar todos los servicios
ipactl restart

# Estado de servicios
ipactl status
```
