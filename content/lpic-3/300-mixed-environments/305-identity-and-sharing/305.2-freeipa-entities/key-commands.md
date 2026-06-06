---
title: "305.2 - Comandos Clave: FreeIPA Gestión de Entidades"
description: "Referencia rápida de comandos para gestión de entidades en FreeIPA"
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.2"
peso: 4
tags:
  - lpic-3
  - tema-305
  - freeipa
  - comandos
---

# 305.2 Comandos Clave - FreeIPA Gestión de Entidades

## Gestión de usuarios

| Comando                                | Descripción                               |
|----------------------------------------|-------------------------------------------|
| `ipa user-add login --first=N --last=A`| Crear usuario                             |
| `ipa user-mod login --atributo=valor`  | Modificar usuario                         |
| `ipa user-del login`                   | Eliminar usuario                          |
| `ipa user-find`                        | Buscar usuarios                           |
| `ipa user-show login`                  | Ver detalles del usuario                  |
| `ipa user-show login --all`            | Ver todos los atributos                   |
| `ipa user-disable login`              | Deshabilitar usuario                      |
| `ipa user-enable login`               | Habilitar usuario                         |
| `ipa user-unlock login`               | Desbloquear usuario                       |

## Gestión de grupos

| Comando                                         | Descripción                        |
|-------------------------------------------------|------------------------------------|
| `ipa group-add nombre --desc="Desc"`            | Crear grupo POSIX                  |
| `ipa group-add nombre --nonposix`               | Crear grupo no-POSIX               |
| `ipa group-add nombre --external`               | Crear grupo externo (AD)           |
| `ipa group-add-member grupo --users=u1,u2`      | Añadir usuarios al grupo           |
| `ipa group-add-member grupo --groups=g1`         | Añadir grupo anidado              |
| `ipa group-remove-member grupo --users=u1`       | Eliminar miembro                  |
| `ipa group-del nombre`                           | Eliminar grupo                    |
| `ipa group-find`                                 | Buscar grupos                     |
| `ipa group-show nombre`                          | Ver detalles del grupo            |

## Gestión de hosts

| Comando                                        | Descripción                         |
|------------------------------------------------|-------------------------------------|
| `ipa host-add fqdn --ip-address=IP`           | Añadir host                        |
| `ipa host-add fqdn --random`                   | Añadir host con OTP                |
| `ipa host-del fqdn`                            | Eliminar host                      |
| `ipa host-find`                                | Buscar hosts                       |
| `ipa host-show fqdn`                           | Ver detalles del host              |
| `ipa host-disable fqdn`                        | Deshabilitar host                  |

## Reglas HBAC

| Comando                                           | Descripción                      |
|---------------------------------------------------|----------------------------------|
| `ipa hbacrule-add nombre`                         | Crear regla HBAC                 |
| `ipa hbacrule-add-user nombre --users=u1`         | Añadir usuario a regla           |
| `ipa hbacrule-add-user nombre --groups=g1`        | Añadir grupo a regla             |
| `ipa hbacrule-add-host nombre --hosts=h1`         | Añadir host a regla              |
| `ipa hbacrule-add-host nombre --hostgroups=hg1`   | Añadir grupo de hosts            |
| `ipa hbacrule-add-service nombre --hbacsvcs=sshd` | Añadir servicio                  |
| `ipa hbacrule-disable allow_all`                  | Deshabilitar regla allow_all     |
| `ipa hbactest --user=u --host=h --service=s`      | Probar acceso HBAC               |

## Reglas sudo

| Comando                                                  | Descripción                  |
|----------------------------------------------------------|------------------------------|
| `ipa sudorule-add nombre`                                | Crear regla sudo             |
| `ipa sudorule-add-user nombre --users=u1`                | Añadir usuario               |
| `ipa sudorule-add-host nombre --hosts=h1`                | Añadir host                  |
| `ipa sudocmd-add "/ruta/comando"`                        | Crear comando sudo           |
| `ipa sudocmdgroup-add nombre`                            | Crear grupo de comandos      |
| `ipa sudorule-add-allow-command nombre --sudocmds=cmd`   | Asociar comando a regla      |
| `ipa sudorule-add-runasuser nombre --users=root`         | Configurar RunAs             |

## Políticas de contraseñas

| Comando                                     | Descripción                          |
|---------------------------------------------|--------------------------------------|
| `ipa pwpolicy-show`                         | Ver política global                  |
| `ipa pwpolicy-mod --maxlife=90 --minlength=12` | Modificar política global        |
| `ipa pwpolicy-add grupo --priority=10`      | Crear política para grupo            |

## Automember e ID Views

| Comando                                                 | Descripción                     |
|---------------------------------------------------------|---------------------------------|
| `ipa automember-add --type=group nombre`                | Crear regla automember          |
| `ipa automember-add-condition --type=group nombre ...`  | Añadir condición                |
| `ipa automember-rebuild --type=group`                   | Reaplicar reglas                |
| `ipa idview-add nombre`                                 | Crear ID View                   |
| `ipa idoverrideuser-add vista user --uid=N`             | Sobrescribir atributos          |
| `ipa idview-apply vista --hosts=host`                   | Aplicar vista a host            |

## Keytabs

```bash
# Obtener keytab de servicio
ipa-getkeytab -s ipa.dominio -p HTTP/host -k /ruta/keytab

# Verificar keytab
klist -kt /ruta/keytab
```
