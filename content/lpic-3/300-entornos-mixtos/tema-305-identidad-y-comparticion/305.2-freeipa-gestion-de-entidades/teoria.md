---
title: "305.2 - FreeIPA Gestión de Entidades"
description: "Gestión de usuarios, grupos, hosts, políticas HBAC y reglas sudo en FreeIPA"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.2"
peso: 4
tags:
  - lpic-3
  - tema-305
  - freeipa
  - usuarios
  - grupos
  - hbac
  - sudo
---

# 305.2 FreeIPA Gestión de Entidades

## Introducción

FreeIPA proporciona una gestión centralizada de identidades que incluye usuarios, grupos, hosts, reglas de control de acceso basado en host (HBAC), reglas sudo, políticas de contraseñas y más. Todas las operaciones se realizan con el comando `ipa` o a través de la interfaz web.

## Gestión de usuarios

### Crear usuarios

```bash
# Crear usuario básico
ipa user-add jgarcia --first=Juan --last=Garcia

# Crear usuario con opciones adicionales
ipa user-add jgarcia \
  --first=Juan \
  --last=Garcia \
  --email=jgarcia@empresa.local \
  --shell=/bin/bash \
  --homedir=/home/jgarcia \
  --uid=10001 \
  --gidnumber=10001 \
  --password
```

### Modificar usuarios

```bash
# Modificar atributos
ipa user-mod jgarcia --shell=/bin/zsh
ipa user-mod jgarcia --email=juan.garcia@empresa.local

# Deshabilitar usuario
ipa user-disable jgarcia

# Habilitar usuario
ipa user-enable jgarcia

# Desbloquear usuario (tras intentos fallidos)
ipa user-unlock jgarcia
```

### Eliminar y buscar usuarios

```bash
# Eliminar usuario
ipa user-del jgarcia

# Buscar usuarios
ipa user-find
ipa user-find --login=jgarcia
ipa user-find --in-group=desarrolladores

# Ver detalles de un usuario
ipa user-show jgarcia
ipa user-show jgarcia --all    # Todos los atributos
```

> **Para el examen:** Los comandos siguen el patrón `ipa ENTIDAD-ACCIÓN`. Las acciones comunes son: `add`, `mod`, `del`, `find`, `show`, `enable`, `disable`.

## Gestión de grupos

### Tipos de grupos

| Tipo     | Descripción                                            |
|----------|--------------------------------------------------------|
| POSIX    | Grupo con GID numérico (por defecto)                   |
| No-POSIX | Grupo sin GID (solo para organización en FreeIPA)      |
| Externo  | Puede contener miembros de dominios externos (AD)      |

### Operaciones con grupos

```bash
# Crear grupo POSIX
ipa group-add desarrolladores --desc="Equipo de desarrollo"

# Crear grupo no-POSIX
ipa group-add proyecto-alpha --nonposix --desc="Proyecto Alpha"

# Crear grupo externo (para trust AD)
ipa group-add ad-external --external --desc="Grupo externo AD"

# Añadir miembros
ipa group-add-member desarrolladores --users=jgarcia,mlopez
ipa group-add-member desarrolladores --groups=junior-devs

# Eliminar miembros
ipa group-remove-member desarrolladores --users=jgarcia

# Buscar grupos
ipa group-find
ipa group-show desarrolladores
```

> **Para el examen:** FreeIPA soporta grupos anidados (un grupo como miembro de otro grupo). Los grupos externos se usan para contener SIDs de Active Directory en relaciones de confianza.

## Inscripción de hosts

### Gestión de hosts

```bash
# Añadir host
ipa host-add servidor1.empresa.local --ip-address=192.168.1.20

# Generar contraseña de inscripción OTP
ipa host-add servidor2.empresa.local --random

# Ver hosts
ipa host-find
ipa host-show servidor1.empresa.local

# Eliminar host
ipa host-del servidor1.empresa.local

# Deshabilitar host
ipa host-disable servidor1.empresa.local
```

### Inscripción de host con OTP

```bash
# En el servidor IPA: generar OTP
ipa host-add cliente.empresa.local --random
# Devuelve: Random password: aBcDeFgH

# En el cliente: inscribir con OTP
ipa-client-install --password=aBcDeFgH --unattended
```

> **Para el examen:** La inscripción con OTP (One-Time Password) permite inscribir clientes sin proporcionar credenciales de administrador. El OTP se genera con `--random` y se usa una sola vez.

## Reglas HBAC (Host-Based Access Control)

### Concepto

HBAC controla qué usuarios pueden acceder a qué hosts mediante qué servicios:

```
¿Puede [USUARIO/GRUPO] acceder a [HOST/GRUPO_HOSTS] usando [SERVICIO]?
```

### Gestión de reglas HBAC

```bash
# Crear regla HBAC
ipa hbacrule-add acceso-servidores --desc="Acceso a servidores de producción"

# Añadir usuarios/grupos a la regla
ipa hbacrule-add-user acceso-servidores --users=jgarcia
ipa hbacrule-add-user acceso-servidores --groups=sysadmins

# Añadir hosts/grupos de hosts
ipa hbacrule-add-host acceso-servidores --hosts=servidor1.empresa.local
ipa hbacrule-add-host acceso-servidores --hostgroups=produccion

# Añadir servicios
ipa hbacrule-add-service acceso-servidores --hbacsvcs=sshd
ipa hbacrule-add-service acceso-servidores --hbacsvcs=login

# Deshabilitar la regla por defecto "allow_all"
ipa hbacrule-disable allow_all

# Verificar reglas HBAC
ipa hbactest --user=jgarcia --host=servidor1.empresa.local --service=sshd
```

| Comando                    | Descripción                                    |
|----------------------------|------------------------------------------------|
| `ipa hbacrule-add`         | Crear regla HBAC                               |
| `ipa hbacrule-add-user`    | Añadir usuarios/grupos a regla                 |
| `ipa hbacrule-add-host`    | Añadir hosts/grupos de hosts                   |
| `ipa hbacrule-add-service` | Añadir servicios a regla                       |
| `ipa hbacrule-disable`     | Deshabilitar regla                             |
| `ipa hbactest`             | Probar acceso HBAC                             |

> **Para el examen:** Por defecto existe la regla `allow_all` que permite acceso total. Se debe deshabilitar antes de que las reglas HBAC personalizadas tengan efecto. `ipa hbactest` permite verificar si un acceso sería permitido o denegado.

## Reglas sudo en FreeIPA

### Gestión centralizada de sudo

FreeIPA permite gestionar reglas sudo centralizadamente:

```bash
# Crear regla sudo
ipa sudorule-add reiniciar-servicios --desc="Reiniciar servicios web"

# Añadir usuarios/grupos
ipa sudorule-add-user reiniciar-servicios --users=jgarcia
ipa sudorule-add-user reiniciar-servicios --groups=webadmins

# Añadir hosts
ipa sudorule-add-host reiniciar-servicios --hosts=web1.empresa.local
ipa sudorule-add-host reiniciar-servicios --hostgroups=servidores-web

# Añadir comandos permitidos
ipa sudocmd-add "/usr/bin/systemctl restart httpd"
ipa sudocmd-add "/usr/bin/systemctl restart nginx"

# Crear grupo de comandos sudo
ipa sudocmdgroup-add restart-web --desc="Comandos restart web"
ipa sudocmdgroup-add-member restart-web \
  --sudocmds="/usr/bin/systemctl restart httpd"
ipa sudocmdgroup-add-member restart-web \
  --sudocmds="/usr/bin/systemctl restart nginx"

# Asociar comandos a regla
ipa sudorule-add-allow-command reiniciar-servicios \
  --sudocmdgroups=restart-web

# Configurar RunAs
ipa sudorule-add-runasuser reiniciar-servicios --users=root

# Ver regla
ipa sudorule-show reiniciar-servicios --all
```

> **Para el examen:** Las reglas sudo en FreeIPA se componen de: usuarios (quién), hosts (dónde), comandos permitidos (qué) y RunAs (como quién). Los comandos se agrupan en `sudocmdgroup` para facilitar la gestión.

## Políticas de contraseñas

```bash
# Ver política global
ipa pwpolicy-show

# Modificar política global
ipa pwpolicy-mod \
  --minlife=1 \
  --maxlife=90 \
  --history=12 \
  --minlength=12 \
  --minclasses=3 \
  --maxfail=5 \
  --failinterval=60 \
  --lockouttime=600

# Crear política para un grupo
ipa pwpolicy-add desarrolladores \
  --maxlife=180 \
  --minlength=10 \
  --priority=10
```

| Parámetro       | Descripción                                        |
|-----------------|----------------------------------------------------|
| `--minlife`     | Vida mínima de la contraseña (días)                |
| `--maxlife`     | Vida máxima de la contraseña (días)                |
| `--history`     | Número de contraseñas anteriores recordadas        |
| `--minlength`   | Longitud mínima                                    |
| `--minclasses`  | Clases mínimas de caracteres (mayús, minús, etc.)  |
| `--maxfail`     | Intentos fallidos antes de bloqueo                 |
| `--lockouttime` | Tiempo de bloqueo (segundos)                       |
| `--priority`    | Prioridad (menor número = mayor prioridad)         |

> **Para el examen:** Las políticas de contraseñas pueden definirse por grupo con diferentes prioridades. La política con menor número de prioridad se aplica primero. La política global se aplica a todos si no hay una más específica.

## Reglas de automember

Automember asigna automáticamente usuarios o hosts a grupos basándose en sus atributos:

```bash
# Crear regla de automember para usuarios
ipa automember-default-group-set --type=group \
  --default-group=empleados

# Crear regla condicional
ipa automember-add --type=group desarrolladores
ipa automember-add-condition --type=group desarrolladores \
  --key=departmentnumber --inclusive-regex="^DEV"

# Crear regla para hosts
ipa automember-add --type=hostgroup servidores-web
ipa automember-add-condition --type=hostgroup servidores-web \
  --key=fqdn --inclusive-regex="^web.*\.empresa\.local$"

# Rebuild: reaplicar reglas a entidades existentes
ipa automember-rebuild --type=group
```

> **Para el examen:** Automember usa expresiones regulares sobre atributos de la entidad para determinar la pertenencia a grupos. Las reglas se aplican automáticamente al crear nuevas entidades.

## ID Views

ID Views permiten sobrescribir atributos POSIX de usuarios y grupos por host:

```bash
# Crear ID View
ipa idview-add vista-servidor-legacy

# Sobrescribir atributos de un usuario en esa vista
ipa idoverrideuser-add vista-servidor-legacy jgarcia \
  --uid=5001 \
  --gid=5001 \
  --homedir=/export/home/jgarcia \
  --shell=/bin/ksh

# Aplicar vista a un host
ipa idview-apply vista-servidor-legacy --hosts=legacy.empresa.local

# Ver vistas aplicadas
ipa idview-show vista-servidor-legacy --all
```

> **Para el examen:** ID Views permiten que un mismo usuario tenga diferentes UIDs o directorios home en diferentes hosts. Son útiles para migración o para integrar servidores legacy con atributos POSIX diferentes.

## ipa-getkeytab

Gestiona keytabs Kerberos para servicios:

```bash
# Obtener keytab para un servicio
ipa-getkeytab -s ipa.empresa.local \
  -p HTTP/web.empresa.local \
  -k /etc/httpd/conf/httpd.keytab

# Obtener keytab del host
ipa-getkeytab -s ipa.empresa.local \
  -p host/servidor.empresa.local \
  -k /etc/krb5.keytab

# Verificar el keytab
klist -kt /etc/httpd/conf/httpd.keytab
```

> **Para el examen:** `ipa-getkeytab` extrae keytabs Kerberos del servidor FreeIPA. Los keytabs permiten a servicios autenticarse sin contraseña interactiva. Cada servicio necesita su propio keytab.
