---
title: "305.3 - FreeIPA Integración con AD"
description: "Integración de FreeIPA con Active Directory mediante relaciones de confianza cross-realm"
tipo: teoria
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
  - trust
  - kerberos
---

# 305.3 FreeIPA Integración con AD

## Introducción

La integración de FreeIPA con Active Directory permite que usuarios y recursos de ambos sistemas coexistan en un entorno mixto. Existen dos enfoques principales: relaciones de confianza (trust) y sincronización (winsync). Las relaciones de confianza son el método recomendado y permiten que los usuarios de AD accedan a recursos Linux gestionados por FreeIPA.

## Conceptos de confianza cross-realm

### ¿Qué es un trust?

Un trust (relación de confianza) Kerberos es un acuerdo entre dos realms que permite a los usuarios de un realm acceder a servicios en el otro:

```
┌──────────────┐    Trust    ┌──────────────┐
│   FreeIPA    │◄───────────►│    Active     │
│  EMPRESA.IPA │             │  Directory   │
│   (Linux)    │             │ EMPRESA.LOCAL │
└──────────────┘             └──────────────┘
     │                             │
     ▼                             ▼
 Usuarios IPA              Usuarios AD
 acceden a recursos        acceden a recursos
 Linux                     Linux
```

### Tipos de trust

| Tipo             | Descripción                                                |
|------------------|------------------------------------------------------------|
| **Forest trust** | Confianza entre bosques completos (recomendado)            |
| **External trust** | Confianza entre dominios individuales                    |
| **One-way**      | Solo un lado confía en el otro                             |
| **Two-way**      | Ambos lados confían mutuamente                             |

> **Para el examen:** Un forest trust incluye todos los dominios del bosque AD. Un external trust es más limitado y solo cubre un dominio específico. Para la mayoría de escenarios, se recomienda forest trust.

### Forest trust vs External trust

| Característica    | Forest Trust          | External Trust         |
|-------------------|-----------------------|------------------------|
| Alcance           | Todo el bosque AD     | Un dominio específico  |
| Transitividad     | Transitivo            | No transitivo          |
| Recomendado       | Sí                    | Solo casos especiales  |
| Complejidad       | Menor (una config)    | Mayor (por dominio)    |

## Requisitos previos

### DNS

Los dos dominios deben poder resolver mutuamente sus registros:

```bash
# Desde FreeIPA: resolver el DC de AD
nslookup dc1.empresa.local

# Desde AD: resolver el servidor IPA
nslookup ipa.empresa.ipa

# Configurar reenvío DNS en FreeIPA
ipa dnsforwardzone-add empresa.local \
  --forwarder=192.168.1.1 \
  --forward-policy=only
```

### Paquetes necesarios

```bash
# Instalar componente de trust
dnf install freeipa-server-trust-ad

# Configurar componente de trust en IPA existente
ipa-adtrust-install
```

### ipa-adtrust-install

```bash
ipa-adtrust-install \
  --netbios-name=IPAEMPRESA \
  --add-sids \
  --add-agents
```

| Parámetro         | Descripción                                          |
|-------------------|------------------------------------------------------|
| `--netbios-name`  | Nombre NetBIOS del dominio IPA                       |
| `--add-sids`      | Generar SIDs para usuarios y grupos IPA existentes   |
| `--add-agents`    | Configurar agentes de trust en réplicas              |

> **Para el examen:** `ipa-adtrust-install` prepara el servidor FreeIPA para establecer relaciones de confianza con AD. Debe ejecutarse antes de crear el trust. `--add-sids` es importante para que los usuarios IPA sean visibles en el contexto de AD.

## Crear la relación de confianza

### ipa trust-add

```bash
# Trust con forest de AD (bidireccional)
ipa trust-add empresa.local \
  --type=ad \
  --admin=Administrador \
  --password

# Trust unidireccional (solo AD confía en IPA)
ipa trust-add empresa.local \
  --type=ad \
  --admin=Administrador \
  --password \
  --range-type=ipa-ad-trust

# Trust usando secreto compartido
ipa trust-add empresa.local \
  --type=ad \
  --trust-secret
```

| Parámetro         | Descripción                                      |
|-------------------|--------------------------------------------------|
| `--type=ad`       | Tipo de trust (Active Directory)                 |
| `--admin`         | Cuenta de administrador de AD                    |
| `--password`      | Solicitar contraseña interactivamente            |
| `--trust-secret`  | Usar secreto compartido en lugar de credenciales |
| `--range-type`    | Tipo de rango de IDs                             |

> **Para el examen:** `ipa trust-add` crea la relación de confianza. Se puede usar credenciales de administrador AD (`--admin`) o un secreto compartido (`--trust-secret`) previamente configurado en ambos lados.

### Verificar el trust

```bash
# Listar trusts
ipa trust-find

# Ver detalles del trust
ipa trust-show empresa.local

# Verificar resolución de usuarios AD
id usuario@empresa.local
getent passwd usuario@empresa.local

# Verificar grupos AD
ipa group-find --all | grep -i external
```

## ID Ranges

Los rangos de IDs mapean los SIDs de AD a UIDs/GIDs POSIX:

```bash
# Ver rangos configurados
ipa idrange-find

# Detalles de un rango
ipa idrange-show EMPRESA.LOCAL_id_range
```

| Tipo de rango              | Descripción                                        |
|----------------------------|----------------------------------------------------|
| `ipa-ad-trust`             | Mapeo algorítmico de SID a UID (recomendado)       |
| `ipa-ad-trust-posix`       | Usar atributos POSIX definidos en AD               |

> **Para el examen:** `ipa-ad-trust` genera UIDs/GIDs automáticamente a partir del SID de AD. `ipa-ad-trust-posix` requiere que los usuarios AD tengan atributos uidNumber/gidNumber configurados.

## Winsync vs Trust

### Comparativa

| Característica    | Trust (recomendado)        | Winsync (legacy)           |
|-------------------|----------------------------|----------------------------|
| Arquitectura      | Federada                   | Sincronización             |
| Datos de usuario  | Se quedan en AD            | Se copian a IPA            |
| Contraseñas       | Gestionadas en AD          | Sincronizadas (limitado)   |
| Escalabilidad     | Alta                       | Limitada                   |
| Complejidad       | Moderada                   | Alta (mantenimiento)       |
| Estado            | Recomendado                | Obsoleto/deprecated        |

### Winsync

Winsync sincroniza datos de usuario de AD a FreeIPA:

```bash
# Crear acuerdo de sincronización (legacy)
ipa-replica-manage connect \
  --winsync \
  --binddn="CN=Administrador,CN=Users,DC=empresa,DC=local" \
  --bindpw="contraseña" \
  --passsync="contraseña_sync" \
  --cacert=/etc/ipa/ca.crt \
  dc1.empresa.local
```

> **Para el examen:** Winsync es un método legacy que sincroniza datos de AD a IPA. El enfoque recomendado es usar relaciones de confianza (trust) que son más escalables y no duplican datos.

## SSSD para usuarios de trust

SSSD en los clientes FreeIPA resuelve automáticamente los usuarios del dominio AD de confianza:

```ini
# sssd.conf (configurado automáticamente por ipa-client-install)
[domain/empresa.ipa]
id_provider = ipa
auth_provider = ipa
access_provider = ipa
ipa_server = ipa.empresa.ipa
krb5_realm = EMPRESA.IPA
# Subdominios (AD) se descubren automáticamente
subdomains_provider = ipa
```

Los usuarios AD se acceden con el formato `usuario@dominio.ad`:

```bash
# Resolver usuario AD
id juan@empresa.local
getent passwd juan@empresa.local

# SSH con usuario AD
ssh juan@empresa.local@servidor.empresa.ipa
```

> **Para el examen:** Con trust configurado, SSSD descubre automáticamente los subdominios (dominios AD de confianza). Los usuarios AD se referencian como `usuario@dominio.ad`.

## Mapeo de grupos entre FreeIPA y AD

Para asignar permisos a grupos AD en FreeIPA:

```bash
# 1. Crear grupo externo (contiene SIDs de AD)
ipa group-add ad-developers --external --desc="Desarrolladores de AD"

# 2. Añadir grupo AD como miembro externo
ipa group-add-member ad-developers --external "EMPRESA\Developers"

# 3. Crear grupo POSIX en IPA
ipa group-add linux-developers --desc="Desarrolladores con acceso Linux"

# 4. Añadir el grupo externo al grupo POSIX
ipa group-add-member linux-developers --groups=ad-developers

# Ahora los miembros de "EMPRESA\Developers" en AD
# tienen acceso como miembros de "linux-developers" en IPA
```

Este patrón de "grupo externo -> grupo POSIX" es el método estándar para integrar grupos AD en FreeIPA:

```
AD Group (Developers) → IPA External Group → IPA POSIX Group → HBAC/sudo rules
```

> **Para el examen:** El mapeo de grupos AD requiere tres pasos: crear grupo externo, añadir el grupo AD como miembro externo, y vincular el grupo externo a un grupo POSIX de IPA. Los grupos externos no pueden usarse directamente en reglas HBAC o sudo.

## Diagnóstico

```bash
# Verificar trust
ipa trust-show empresa.local --all

# Verificar que smbclient ve el trust
smbclient -L dc1.empresa.local -k

# Verificar resolución de identidades AD
id usuario@empresa.local

# Logs de Samba (trust)
tail -f /var/log/samba/log.smbd

# Verificar comunicación Kerberos cross-realm
kvno krbtgt/EMPRESA.LOCAL@EMPRESA.IPA
```
