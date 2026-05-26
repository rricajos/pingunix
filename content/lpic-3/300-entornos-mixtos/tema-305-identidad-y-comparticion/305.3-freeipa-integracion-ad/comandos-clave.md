---
title: "305.3 - Comandos Clave: FreeIPA Integración AD"
description: "Referencia rápida de comandos para integración FreeIPA-AD"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.3"
peso: 2
tags:
  - lpic-3
  - tema-305
  - freeipa
  - active-directory
  - comandos
---

# 305.3 Comandos Clave - FreeIPA Integración AD

## Preparación del trust

| Comando                                    | Descripción                                  |
|--------------------------------------------|----------------------------------------------|
| `dnf install freeipa-server-trust-ad`      | Instalar componente de trust                 |
| `ipa-adtrust-install --netbios-name=NB`    | Preparar IPA para trust con AD               |
| `ipa-adtrust-install --add-sids`           | Generar SIDs para entidades IPA existentes   |

## Gestión de trusts

| Comando                                                | Descripción                      |
|--------------------------------------------------------|----------------------------------|
| `ipa trust-add dom --type=ad --admin=admin --password` | Crear trust con AD               |
| `ipa trust-add dom --type=ad --trust-secret`           | Trust con secreto compartido     |
| `ipa trust-find`                                       | Listar trusts                    |
| `ipa trust-show dominio`                               | Ver detalles del trust           |
| `ipa trust-del dominio`                                | Eliminar trust                   |

## ID Ranges

| Comando                    | Descripción                                    |
|----------------------------|------------------------------------------------|
| `ipa idrange-find`         | Listar rangos de IDs                           |
| `ipa idrange-show nombre`  | Ver detalles de un rango                       |

## Tipos de trust

| Tipo            | Flag                  | Descripción                           |
|-----------------|-----------------------|---------------------------------------|
| Forest trust    | (por defecto)         | Todo el bosque AD                     |
| External trust  | `--external=true`     | Dominio individual                    |
| One-way         | (AD confía en IPA)    | Unidireccional                        |
| Two-way         | (por defecto)         | Bidireccional                         |

## Tipos de rango de IDs

| Tipo                  | Descripción                                       |
|-----------------------|---------------------------------------------------|
| `ipa-ad-trust`        | Mapeo algorítmico SID→UID (recomendado)           |
| `ipa-ad-trust-posix`  | Usar atributos POSIX de AD                        |

## Mapeo de grupos AD a IPA

```bash
# 1. Crear grupo externo
ipa group-add nombre-externo --external

# 2. Añadir grupo AD
ipa group-add-member nombre-externo --external "DOMINIO\Grupo"

# 3. Crear grupo POSIX
ipa group-add nombre-posix

# 4. Vincular externo a POSIX
ipa group-add-member nombre-posix --groups=nombre-externo
```

## DNS para trust

```bash
# Zona de reenvío para dominio AD
ipa dnsforwardzone-add empresa.local \
  --forwarder=IP_DC_AD \
  --forward-policy=only

# Verificar resolución
nslookup dc1.empresa.local
nslookup _ldap._tcp.empresa.local
```

## Verificación y diagnóstico

```bash
# Verificar trust
ipa trust-show dominio --all

# Resolver usuario AD
id usuario@empresa.local
getent passwd usuario@empresa.local

# Ticket cross-realm
kvno krbtgt/AD.REALM@IPA.REALM

# Logs
tail -f /var/log/samba/log.smbd
journalctl -u sssd -f
```

## Winsync (legacy)

```bash
# Crear acuerdo winsync
ipa-replica-manage connect --winsync \
  --binddn="CN=admin,CN=Users,DC=empresa,DC=local" \
  --bindpw="pass" --cacert=/etc/ipa/ca.crt \
  dc1.empresa.local

# Verificar acuerdo
ipa-replica-manage list
```
