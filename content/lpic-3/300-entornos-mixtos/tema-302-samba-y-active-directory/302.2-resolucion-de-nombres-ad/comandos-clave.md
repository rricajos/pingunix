---
tipo: comandos
certificacion: lpic-3
especialidad: 300 - Entornos Mixtos
tema: "302"
subtema: "302.2"
titulo: "Resolución de Nombres AD - Comandos Clave"
peso: 2
tags: [lpic-3, tema-302, comandos]
---

# Comandos clave - 302.2 Resolución de Nombres en Active Directory

## Gestión de DNS con samba-tool

| Comando | Función | Ejemplo |
|---------|---------|---------|
| `samba-tool dns zonelist` | Listar zonas DNS | `samba-tool dns zonelist localhost -U administrator` |
| `samba-tool dns zonecreate` | Crear zona DNS | `samba-tool dns zonecreate localhost 1.168.192.in-addr.arpa -U admin` |
| `samba-tool dns zonedelete` | Eliminar zona DNS | `samba-tool dns zonedelete localhost zona.ejemplo.com -U admin` |
| `samba-tool dns query` | Consultar registros DNS | `samba-tool dns query localhost empresa.com @ ALL -U admin` |
| `samba-tool dns add` | Añadir registro DNS | `samba-tool dns add localhost empresa.com host A 10.0.0.50 -U admin` |
| `samba-tool dns delete` | Eliminar registro DNS | `samba-tool dns delete localhost empresa.com host A 10.0.0.50 -U admin` |
| `samba-tool dns update` | Actualizar registro DNS | `samba-tool dns update localhost empresa.com host A 10.0.0.50 10.0.0.51 -U admin` |

## Tipos de registros DNS

| Comando | Tipo de registro | Ejemplo |
|---------|-----------------|---------|
| `samba-tool dns add ... A` | Registro A (IPv4) | `samba-tool dns add localhost empresa.com srv A 10.0.0.5 -U admin` |
| `samba-tool dns add ... AAAA` | Registro AAAA (IPv6) | `samba-tool dns add localhost empresa.com srv AAAA ::1 -U admin` |
| `samba-tool dns add ... CNAME` | Alias | `samba-tool dns add localhost empresa.com alias CNAME srv.empresa.com -U admin` |
| `samba-tool dns add ... MX` | Correo | `samba-tool dns add localhost empresa.com @ MX "mail.empresa.com 10" -U admin` |
| `samba-tool dns add ... PTR` | Inverso | `samba-tool dns add localhost 1.168.192.in-addr.arpa 50 PTR srv.empresa.com -U admin` |
| `samba-tool dns add ... NS` | Servidor de nombres | `samba-tool dns add localhost empresa.com @ NS dc1.empresa.com -U admin` |
| `samba-tool dns add ... SRV` | Servicio | `samba-tool dns add localhost empresa.com _sip._tcp SRV "sip.empresa.com 5060 0 0" -U admin` |

## Verificación de registros SRV de AD

| Comando | Función | Ejemplo |
|---------|---------|---------|
| `dig _ldap._tcp.dom SRV` | Verificar LDAP SRV | `dig _ldap._tcp.empresa.com SRV` |
| `dig _kerberos._tcp.dom SRV` | Verificar Kerberos SRV | `dig _kerberos._tcp.empresa.com SRV` |
| `dig _ldap._tcp.dc._msdcs.dom SRV` | Verificar DC SRV | `dig _ldap._tcp.dc._msdcs.empresa.com SRV` |
| `dig _ldap._tcp.gc._msdcs.dom SRV` | Verificar GC SRV | `dig _ldap._tcp.gc._msdcs.empresa.com SRV` |
| `dig _kpasswd._tcp.dom SRV` | Verificar kpasswd SRV | `dig _kpasswd._tcp.empresa.com SRV` |
| `host -t SRV _ldap._tcp.dom` | Alternativa con host | `host -t SRV _ldap._tcp.empresa.com` |

## Actualizaciones dinámicas

| Comando | Función | Ejemplo |
|---------|---------|---------|
| `nsupdate -g` | Actualización con Kerberos (GSS-TSIG) | `nsupdate -g <<< "update add host.dom 3600 A 10.0.0.5"` |
| `nsupdate -k keyfile` | Actualización con clave TSIG | `nsupdate -k /etc/bind/rndc.key` |
| `samba_dnsupdate` | Actualizar registros SRV de AD | `samba_dnsupdate --verbose` |
| `samba_dnsupdate --verbose` | Modo detallado | `samba_dnsupdate --verbose` |

## Diagnóstico DNS

| Comando | Función | Ejemplo |
|---------|---------|---------|
| `dig @server dominio ANY` | Consultar todos los registros | `dig @localhost empresa.com ANY` |
| `dig -x IP` | Resolución inversa | `dig -x 192.168.1.10` |
| `host nombre` | Resolución directa simple | `host dc.empresa.com` |
| `host -t SRV registro` | Consultar registro SRV | `host -t SRV _ldap._tcp.empresa.com` |
| `nslookup nombre` | Resolución interactiva | `nslookup dc.empresa.com` |
| `nslookup -type=SRV` | Consultar SRV con nslookup | `nslookup -type=SRV _ldap._tcp.empresa.com` |

## Configuración de BIND9 con DLZ

| Archivo | Función | Contenido clave |
|---------|---------|-----------------|
| `/etc/bind/named.conf.local` | Configuración de DLZ | `dlz "AD DNS Zone" { database "dlopen .../dlz_bind9_12.so"; };` |
| `/etc/bind/named.conf.options` | Opciones de BIND9 | `tkey-gssapi-keytab "/var/lib/samba/bind-dns/dns.keytab";` |
| `dns.keytab` | Keytab para autenticación | `/var/lib/samba/bind-dns/dns.keytab` |
| `dns forwarder` | Reenviador en smb.conf | `dns forwarder = 8.8.8.8` |
