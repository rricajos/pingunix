---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.4 - DNS y criptografía"
subtema: "331.4"
peso: 5
tags:
  - lpic-3
  - tema-331
  - dnssec
  - dane
  - tsig
---

# Comandos Clave - 331.4 DNS y Criptografía

## DNSSEC - Generación de Claves

| Comando | Descripción |
|---------|-------------|
| `dnssec-keygen -a RSASHA256 -b 2048 -n ZONE ejemplo.com` | Generar ZSK (Zone Signing Key) |
| `dnssec-keygen -a RSASHA256 -b 4096 -n ZONE -f KSK ejemplo.com` | Generar KSK (Key Signing Key) |
| `dnssec-keygen -a ECDSAP256SHA256 -n ZONE ejemplo.com` | Generar ZSK con ECDSA |
| `dnssec-keygen -a ECDSAP256SHA256 -n ZONE -f KSK ejemplo.com` | Generar KSK con ECDSA |

## DNSSEC - Firma y Verificación

| Comando | Descripción |
|---------|-------------|
| `dnssec-signzone -o ejemplo.com db.ejemplo.com` | Firmar zona (genera .signed) |
| `dnssec-signzone -A -3 salt -N INCREMENT -o zona -t db.zona` | Firmar con NSEC3 y auto-incremento |
| `dnssec-signzone -3 "salt" -H 10 -o zona db.zona` | Firmar con NSEC3, salt e iteraciones |
| `dnssec-dsfromkey Kejemplo.com.+008+67890.key` | Generar registro DS desde KSK |
| `dnssec-verify -o ejemplo.com db.ejemplo.com.signed` | Verificar zona firmada |

## DNSSEC - Diagnóstico

| Comando | Descripción |
|---------|-------------|
| `dig +dnssec ejemplo.com` | Consulta DNS solicitando registros DNSSEC |
| `dig DNSKEY ejemplo.com` | Consultar claves DNSKEY publicadas |
| `dig DS ejemplo.com @servidor-padre` | Consultar registro DS en zona padre |
| `dig +sigchase +trusted-key=./root.key ejemplo.com` | Seguir cadena de confianza |
| `delv @servidor ejemplo.com` | Validación DNSSEC con detalle |

## TSIG

| Comando | Descripción |
|---------|-------------|
| `tsig-keygen -a hmac-sha256 nombre-clave` | Generar clave TSIG |
| `ddns-confgen -k nombre-clave` | Generar clave para actualizaciones dinámicas |
| `dig -k /etc/named/transfer.key @servidor AXFR zona` | Transferencia de zona con TSIG |
| `nsupdate -k /etc/named/update.key` | Actualización dinámica con TSIG |

## DANE / TLSA

| Comando | Descripción |
|---------|-------------|
| `dig TLSA _443._tcp.www.ejemplo.com` | Consultar registro TLSA |
| `openssl x509 -in cert.pem -noout -pubkey \| openssl pkey -pubin -outform DER \| openssl dgst -sha256` | Generar hash para TLSA |

## Unbound (Resolver con validación DNSSEC)

| Comando / Archivo | Descripción |
|-------------------|-------------|
| `unbound-checkconf` | Verificar configuración de Unbound |
| `unbound-anchor -a /var/lib/unbound/root.key` | Obtener/actualizar trust anchor raíz |
| `unbound-control status` | Estado del servicio Unbound |
| `unbound-control dump_cache` | Volcado de la caché |
| `/etc/unbound/unbound.conf` | Archivo de configuración principal |

## Registros DNSSEC Importantes

| Registro | Propósito |
|----------|-----------|
| RRSIG | Firma digital de un RRset |
| DNSKEY | Clave pública (ZSK o KSK) |
| DS | Hash de KSK en zona padre (delegación segura) |
| NSEC | Prueba de no existencia (secuencial) |
| NSEC3 | Prueba de no existencia (con hash) |
| NSEC3PARAM | Parámetros de NSEC3 |
| TLSA | Asociación de certificado TLS (DANE) |

## Configuración BIND para DNSSEC

```
zone "ejemplo.com" {
    type master;
    file "db.ejemplo.com.signed";
    key-directory "/var/named/keys";
    auto-dnssec maintain;
    inline-signing yes;
};
```
