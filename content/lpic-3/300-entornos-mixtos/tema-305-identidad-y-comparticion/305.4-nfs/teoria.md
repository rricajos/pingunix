---
title: "305.4 - NFS"
description: "Configuración de NFSv4 con Kerberos, integración con FreeIPA y mapeo de identidades"
tipo: teoria
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "Tema 305 - Identidad y Compartición"
subtema: "305.4"
peso: 3
tags:
  - lpic-3
  - tema-305
  - nfs
  - kerberos
  - freeipa
  - automount
---

# 305.4 NFS

## Introducción

NFSv4 es la versión moderna del protocolo NFS (Network File System) que incluye soporte nativo para autenticación Kerberos, mapeo de identidades y ACLs. En entornos mixtos con FreeIPA, NFS se integra con la infraestructura de identidades centralizada para proporcionar acceso seguro a los sistemas de archivos compartidos.

## NFSv4 con Kerberos

### Niveles de seguridad

NFSv4 soporta varios niveles de seguridad con Kerberos a través del parámetro `sec=`:

| Nivel    | Descripción                                                |
|----------|------------------------------------------------------------|
| `sys`    | Autenticación basada en UID/GID (sin Kerberos, inseguro)  |
| `krb5`   | Autenticación Kerberos (verifica identidad)                |
| `krb5i`  | Kerberos + integridad (verifica que datos no se alteraron) |
| `krb5p`  | Kerberos + privacidad (cifra todos los datos)              |

```
sys < krb5 < krb5i < krb5p
     (seguridad creciente →)
```

> **Para el examen:** `sec=sys` usa UID/GID del sistema (susceptible a suplantación). `krb5` autentica, `krb5i` añade integridad y `krb5p` añade cifrado. `krb5p` es el más seguro pero con mayor overhead.

### Configuración del servidor NFS con Kerberos

#### /etc/exports

```bash
# Exportación con Kerberos
/srv/nfs/datos  *.empresa.local(sec=krb5:krb5i:krb5p,rw,sync,no_subtree_check)

# Solo Kerberos con cifrado
/srv/nfs/confidencial  *.empresa.local(sec=krb5p,rw,sync,root_squash)

# Múltiples opciones de seguridad
/srv/nfs/publico  *.empresa.local(sec=sys:krb5,ro,sync)
```

Formato de la opción `sec=`:
- `sec=krb5` permite solo autenticación Kerberos
- `sec=krb5:krb5i:krb5p` permite cualquiera de los tres niveles
- `sec=sys:krb5` permite tanto sys como Kerberos

| Opción exports        | Descripción                                        |
|-----------------------|----------------------------------------------------|
| `sec=`                | Mecanismo(s) de seguridad permitidos               |
| `rw`                  | Lectura y escritura                                |
| `ro`                  | Solo lectura                                       |
| `sync`                | Escritura síncrona (recomendado)                   |
| `root_squash`         | Mapear root a nobody (por defecto)                 |
| `no_root_squash`      | Permitir acceso como root                          |
| `all_squash`          | Mapear todos los usuarios a nobody                 |
| `no_subtree_check`    | No verificar subdirectorios (rendimiento)          |

> **Para el examen:** En `/etc/exports`, la opción `sec=` especifica qué mecanismos de seguridad acepta la exportación. Se pueden listar múltiples separados por `:`. El cliente debe usar uno de los mecanismos permitidos.

#### Keytab del servidor NFS

El servidor NFS necesita un keytab con el principal `nfs/hostname@REALM`:

```bash
# En FreeIPA: crear servicio NFS
ipa service-add nfs/nfsserver.empresa.local

# Obtener keytab
ipa-getkeytab -s ipa.empresa.local \
  -p nfs/nfsserver.empresa.local \
  -k /etc/krb5.keytab

# Verificar keytab
klist -kt /etc/krb5.keytab
```

### Configuración del cliente NFS con Kerberos

```bash
# Montaje con Kerberos (autenticación)
mount -t nfs4 -o sec=krb5 nfsserver:/srv/nfs/datos /mnt/datos

# Montaje con Kerberos + cifrado
mount -t nfs4 -o sec=krb5p nfsserver:/srv/nfs/confidencial /mnt/confidencial

# En /etc/fstab
nfsserver:/srv/nfs/datos  /mnt/datos  nfs4  sec=krb5,_netdev  0  0
```

## gssproxy y rpc.gssd

### gssproxy

`gssproxy` es el servicio moderno que gestiona las credenciales GSS-API (Kerberos) para servicios NFS:

```ini
# /etc/gssproxy/gssproxy.conf

[gssproxy]

[service/nfs-server]
  mechs = krb5
  cred_store = keytab:/etc/krb5.keytab
  cred_store = ccache:FILE:/var/lib/gssproxy/clients/krb5cc_%U
  allowed_client_uids = 0
  euid = 0

[service/nfs-client]
  mechs = krb5
  cred_store = keytab:/etc/krb5.keytab
  cred_store = client_keytab:/etc/krb5.keytab
  cred_store = ccache:FILE:/var/lib/gssproxy/clients/krb5cc_%U
  allow_any_uid = yes
  euid = 0
```

```bash
# Habilitar e iniciar gssproxy
systemctl enable gssproxy
systemctl start gssproxy
```

### rpc.gssd

`rpc.gssd` es el daemon que gestiona las credenciales Kerberos para el cliente NFS (enfoque legacy):

```bash
# Habilitar rpc.gssd
systemctl enable rpc-gssd
systemctl start rpc-gssd
```

| Servicio   | Rol                                                     |
|------------|---------------------------------------------------------|
| gssproxy   | Gestión de credenciales GSS-API (moderno, recomendado)  |
| rpc.gssd   | Cliente: negocia autenticación Kerberos (legacy)        |
| rpc.svcgssd| Servidor: valida credenciales Kerberos (obsoleto)       |

> **Para el examen:** `gssproxy` es la alternativa moderna a `rpc.gssd` y `rpc.svcgssd`. Gestiona las credenciales GSS-API tanto en el servidor como en el cliente NFS.

## NFS en entornos FreeIPA

### Configuración automatizada

FreeIPA simplifica la configuración de NFS con Kerberos:

```bash
# En el servidor IPA: crear servicio NFS
ipa service-add nfs/nfsserver.empresa.local

# En el servidor NFS: obtener keytab
ipa-getkeytab -s ipa.empresa.local \
  -p nfs/nfsserver.empresa.local \
  -k /etc/krb5.keytab

# Configurar exports
echo '/srv/nfs/datos *.empresa.local(sec=krb5:krb5i:krb5p,rw,sync)' >> /etc/exports
exportfs -arv

# Iniciar servicios
systemctl enable --now nfs-server gssproxy
```

En los clientes inscritos en FreeIPA:

```bash
# El keytab del host ya existe tras ipa-client-install
# Solo necesita gssproxy o rpc-gssd
systemctl enable --now gssproxy

# Montar
mount -t nfs4 -o sec=krb5 nfsserver.empresa.local:/srv/nfs/datos /mnt/datos
```

## Mapas de automount en LDAP

### Concepto

FreeIPA permite almacenar mapas de automount en LDAP, centralizando la configuración:

```bash
# Crear ubicación de automount
ipa automountlocation-add default

# Crear mapa de automount
ipa automountmap-add default auto.datos

# Añadir clave (punto de montaje)
ipa automountkey-add default auto.datos \
  --key=datos \
  --info="-fstype=nfs4,sec=krb5 nfsserver.empresa.local:/srv/nfs/datos"

# Añadir mapa directo a auto.master
ipa automountkey-add default auto.master \
  --key=/mnt \
  --info=auto.datos
```

### Estructura de automount en FreeIPA

```
Ubicación: default
└── auto.master
    └── /mnt → auto.datos
        └── datos → nfsserver:/srv/nfs/datos (sec=krb5)
```

### Configurar cliente para automount LDAP

```bash
# En sssd.conf
[domain/empresa.local]
ipa_automount_location = default

# Habilitar autofs con SSSD
authselect enable-feature with-autofs

# En /etc/nsswitch.conf
automount: sss files

# Reiniciar autofs
systemctl restart autofs
```

> **Para el examen:** FreeIPA almacena mapas de automount en LDAP. Los clientes consultan estos mapas a través de SSSD (`automount: sss` en nsswitch.conf). Esto elimina la necesidad de mantener archivos auto.master/auto.* en cada cliente.

## idmapd.conf para NFSv4

### Mapeo de identidades

NFSv4 usa nombres de usuario con formato `usuario@dominio` en lugar de UIDs numéricos. `idmapd` traduce entre ambos formatos:

```ini
# /etc/idmapd.conf
[General]
Verbosity = 0
Domain = empresa.local

[Mapping]
Nobody-User = nobody
Nobody-Group = nobody

[Translation]
Method = nsswitch
```

| Parámetro       | Descripción                                           |
|-----------------|-------------------------------------------------------|
| `Domain`        | Dominio NFSv4 (debe coincidir en servidor y clientes) |
| `Nobody-User`   | Usuario para mapeos fallidos                          |
| `Nobody-Group`  | Grupo para mapeos fallidos                            |
| `Method`        | Método de traducción (`nsswitch`, `umich_ldap`)       |

> **Para el examen:** El parámetro `Domain` en idmapd.conf DEBE ser idéntico en el servidor y todos los clientes NFSv4. Si no coincide, todos los archivos aparecerán como propiedad de `nobody:nobody`.

### Problemas comunes de mapeo

```bash
# Síntoma: todos los archivos aparecen como nobody:nobody
# Causa: Domain no coincide entre servidor y cliente

# Verificar Domain en servidor
cat /etc/idmapd.conf | grep Domain

# Verificar Domain en cliente
cat /etc/idmapd.conf | grep Domain

# Limpiar caché de idmap
nfsidmap -c

# Reiniciar el servicio
systemctl restart nfs-idmapd
```

## Ejemplo completo: NFS con Kerberos en FreeIPA

### En el servidor FreeIPA (ipa.empresa.local)

```bash
# Crear servicio NFS
ipa service-add nfs/nfsserver.empresa.local

# Crear mapas automount
ipa automountlocation-add default
ipa automountmap-add default auto.nfs
ipa automountkey-add default auto.master --key=/nfs --info=auto.nfs
ipa automountkey-add default auto.nfs --key=datos \
  --info="-fstype=nfs4,sec=krb5 nfsserver.empresa.local:/export/datos"
```

### En el servidor NFS (nfsserver.empresa.local)

```bash
# Inscribir como cliente FreeIPA
ipa-client-install --mkhomedir

# Obtener keytab NFS
ipa-getkeytab -s ipa.empresa.local \
  -p nfs/nfsserver.empresa.local \
  -k /etc/krb5.keytab

# Configurar exports
cat > /etc/exports << 'EOF'
/export/datos *.empresa.local(sec=krb5:krb5i:krb5p,rw,sync,no_subtree_check)
EOF

# Configurar idmapd
sed -i 's/#Domain = .*/Domain = empresa.local/' /etc/idmapd.conf

# Iniciar servicios
systemctl enable --now nfs-server gssproxy
exportfs -arv
```

### En los clientes (cliente.empresa.local)

```bash
# Ya inscritos en FreeIPA
# Configurar idmapd
sed -i 's/#Domain = .*/Domain = empresa.local/' /etc/idmapd.conf

# Habilitar servicios
systemctl enable --now gssproxy autofs

# Configurar SSSD para automount
# (Automático si se usó ipa-client-install)

# Verificar automount
ls /nfs/datos
```

## Diagnóstico

```bash
# Verificar exports
exportfs -v
showmount -e nfsserver

# Verificar montajes NFS
mount | grep nfs
nfsstat -m

# Verificar Kerberos
klist -kt /etc/krb5.keytab
klist

# Verificar idmap
nfsidmap -l
nfsidmap -c    # Limpiar caché

# Logs
journalctl -u nfs-server
journalctl -u gssproxy
rpcdebug -m nfs -s all    # Activar debug NFS
```
