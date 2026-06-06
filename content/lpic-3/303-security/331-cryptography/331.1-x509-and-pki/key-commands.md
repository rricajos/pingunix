---
tipo: comandos
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.1 - Certificados X.509 y PKI"
subtema: "331.1"
peso: 5
tags:
  - lpic-3
  - tema-331
  - x509
  - pki
  - openssl
---

# Comandos Clave - 331.1 Certificados X.509 y PKI

## Generación de Claves y CSR

| Comando | Descripción |
|---------|-------------|
| `openssl genrsa -aes256 -out clave.key 4096` | Genera clave RSA de 4096 bits cifrada |
| `openssl ecparam -genkey -name secp384r1 -out ec.key` | Genera clave de curva elíptica |
| `openssl req -new -key clave.key -out solicitud.csr` | Crea CSR a partir de clave existente |
| `openssl req -new -newkey rsa:4096 -keyout k.key -out s.csr` | Genera clave + CSR en un paso |
| `openssl req -x509 -new -key k.key -days 365 -out cert.pem` | Crea certificado autofirmado |
| `openssl req -in solicitud.csr -text -noout -verify` | Examina y verifica un CSR |

## Operaciones con Certificados

| Comando | Descripción |
|---------|-------------|
| `openssl x509 -in cert.pem -text -noout` | Muestra detalles del certificado |
| `openssl x509 -in cert.pem -dates -noout` | Muestra fechas de validez |
| `openssl x509 -in cert.pem -fingerprint -sha256 -noout` | Obtiene fingerprint SHA-256 |
| `openssl x509 -req -in s.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out cert.pem -days 365` | Firma CSR con CA |
| `openssl verify -CAfile ca.pem certificado.pem` | Verifica certificado contra CA |
| `openssl verify -CAfile raiz.pem -untrusted intermedia.pem cert.pem` | Verifica cadena completa |

## Operaciones de CA

| Comando | Descripción |
|---------|-------------|
| `openssl ca -in solicitud.csr -out cert.pem -config openssl.cnf` | Firma CSR con configuración de CA |
| `openssl ca -revoke cert.pem -config openssl.cnf` | Revoca un certificado |
| `openssl ca -gencrl -out ca.crl -config openssl.cnf` | Genera CRL actualizada |
| `openssl crl -in ca.crl -text -noout` | Examina una CRL |
| `openssl ocsp -issuer ca.pem -cert srv.pem -url http://ocsp.ej.com` | Consulta OCSP |

## Conversión de Formatos

| Comando | Descripción |
|---------|-------------|
| `openssl x509 -in c.pem -outform DER -out c.der` | PEM a DER |
| `openssl x509 -in c.der -inform DER -outform PEM -out c.pem` | DER a PEM |
| `openssl pkcs12 -export -in c.pem -inkey k.key -out c.p12` | PEM a PKCS#12 |
| `openssl pkcs12 -in c.p12 -out todo.pem -nodes` | PKCS#12 a PEM (sin cifrar clave) |
| `openssl pkcs12 -in c.p12 -clcerts -nokeys -out cert.pem` | Extrae solo certificado de PKCS#12 |

## Diagnóstico TLS

| Comando | Descripción |
|---------|-------------|
| `openssl s_client -connect host:443` | Conexión TLS de diagnóstico |
| `openssl s_client -connect host:443 -showcerts` | Muestra toda la cadena de certificados |
| `openssl s_client -connect host:443 -servername host` | Conexión con SNI explícito |
| `openssl s_client -connect host:443 -CAfile ca.pem` | Verifica con CA específica |
| `openssl s_client -connect host:443 -starttls smtp` | STARTTLS para protocolos como SMTP |

## Archivos y Rutas Importantes

| Ruta | Descripción |
|------|-------------|
| `/etc/pki/tls/openssl.cnf` | Configuración OpenSSL (RHEL/CentOS) |
| `/etc/ssl/openssl.cnf` | Configuración OpenSSL (Debian/Ubuntu) |
| `/etc/pki/CA/` | Directorio de la CA (RHEL) |
| `/etc/pki/ca-trust/source/anchors/` | CAs adicionales de confianza (RHEL) |
| `/usr/local/share/ca-certificates/` | CAs adicionales (Debian) |
| `update-ca-trust` | Actualiza almacén de CAs (RHEL) |
| `update-ca-certificates` | Actualiza almacén de CAs (Debian) |
