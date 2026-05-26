---
tipo: teoria
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
  - certificados
---

# 331.1 Certificados X.509 e Infraestructura de Clave Pública (PKI)

## Introducción

Los certificados X.509 son el estándar fundamental para la identidad digital en Internet. Definen la estructura de los certificados de clave pública utilizados en TLS/SSL, correo electrónico seguro, firmas de código y más. La Infraestructura de Clave Pública (PKI) proporciona el marco de confianza necesario para emitir, gestionar y revocar estos certificados.

> **Para el examen:** Este subtema tiene peso 5, uno de los más altos. Domina los comandos de OpenSSL y comprende la cadena de confianza completa.

---

## Estructura de un Certificado X.509

Un certificado X.509 v3 contiene los siguientes campos principales:

| Campo | Descripción |
|-------|-------------|
| Version | Versión del formato (normalmente v3) |
| Serial Number | Identificador único asignado por la CA |
| Signature Algorithm | Algoritmo usado para firmar (ej: sha256WithRSA) |
| Issuer | DN del emisor (CA que firma) |
| Validity | Fechas de inicio y expiración |
| Subject | DN del titular del certificado |
| Subject Public Key Info | Clave pública y algoritmo |
| Extensions (v3) | SAN, Key Usage, Basic Constraints, CRL Distribution Points |

### Distinguished Name (DN)

```
C=ES, ST=Madrid, L=Madrid, O=MiEmpresa, OU=IT, CN=www.ejemplo.com
```

Los componentes son: Country (C), State (ST), Locality (L), Organization (O), Organizational Unit (OU) y Common Name (CN).

---

## Componentes de la PKI

### Autoridad de Certificación (CA)

La CA es la entidad raíz de confianza que emite y firma certificados. Puede ser:

- **CA raíz**: Autofirmada, almacenada offline por seguridad
- **CA intermedia (subordinada)**: Firmada por la CA raíz, utilizada para operaciones diarias

### Autoridad de Registro (RA)

Verifica la identidad de los solicitantes antes de que la CA emita un certificado. Actúa como intermediario entre el usuario y la CA.

### Lista de Revocación de Certificados (CRL)

Archivo firmado por la CA que contiene los números de serie de certificados revocados. Se distribuye periódicamente.

```bash
# Descargar y examinar una CRL
openssl crl -in ca.crl -text -noout

# Verificar certificado contra CRL
openssl verify -crl_check -CRLfile ca.crl -CAfile ca.pem certificado.pem
```

### OCSP (Online Certificate Status Protocol)

Protocolo en tiempo real para verificar el estado de revocación de un certificado individual, más eficiente que las CRL completas.

```bash
# Consultar estado OCSP
openssl ocsp -issuer ca.pem -cert servidor.pem \
  -url http://ocsp.ejemplo.com -resp_text
```

> **Para el examen:** Conoce las diferencias entre CRL y OCSP. CRL es una lista completa descargada periódicamente; OCSP consulta en tiempo real certificados individuales.

---

## Comandos OpenSSL Esenciales

### Generación de Claves Privadas

```bash
# Generar clave RSA de 4096 bits
openssl genrsa -aes256 -out clave-privada.key 4096

# Generar clave EC (curva elíptica)
openssl ecparam -genkey -name secp384r1 -out clave-ec.key

# Eliminar passphrase de una clave (NO recomendado en producción)
openssl rsa -in clave-privada.key -out clave-sin-pass.key
```

### Solicitud de Firma de Certificado (CSR)

```bash
# Generar CSR interactivo
openssl req -new -key clave-privada.key -out solicitud.csr

# Generar clave y CSR en un solo paso
openssl req -new -newkey rsa:4096 -keyout clave.key -out solicitud.csr

# Generar CSR con Subject alternativo (SAN) vía configuración
openssl req -new -key clave.key -out solicitud.csr \
  -config san.cnf

# Ver contenido del CSR
openssl req -in solicitud.csr -text -noout -verify
```

### Certificados Autofirmados

```bash
# Crear certificado autofirmado válido por 365 días
openssl req -x509 -new -key clave.key -days 365 -out cert.pem

# Generar clave + certificado autofirmado en un paso
openssl req -x509 -newkey rsa:4096 -keyout clave.key \
  -out cert.pem -days 365 -nodes
```

### Operaciones con la CA

```bash
# Firmar un CSR con la CA
openssl ca -in solicitud.csr -out certificado.pem \
  -config openssl.cnf

# Firmar directamente con x509
openssl x509 -req -in solicitud.csr -CA ca-cert.pem \
  -CAkey ca-key.pem -CAcreateserial -out cert.pem -days 365

# Revocar un certificado
openssl ca -revoke certificado.pem -config openssl.cnf

# Generar CRL actualizada
openssl ca -gencrl -out ca.crl -config openssl.cnf
```

### Verificación y Diagnóstico

```bash
# Verificar certificado contra CA
openssl verify -CAfile ca-cert.pem certificado.pem

# Verificar cadena completa
openssl verify -CAfile ca-raiz.pem -untrusted ca-intermedia.pem cert.pem

# Conectar a servidor y mostrar certificado
openssl s_client -connect www.ejemplo.com:443 -showcerts

# Ver detalles de un certificado
openssl x509 -in certificado.pem -text -noout

# Comprobar fechas de validez
openssl x509 -in certificado.pem -dates -noout

# Obtener fingerprint
openssl x509 -in certificado.pem -fingerprint -sha256 -noout
```

> **Para el examen:** `openssl s_client` es crucial para diagnóstico. Recuerda que `-showcerts` muestra toda la cadena, y `-verify_return_error` falla si la verificación no es exitosa.

---

## Formatos de Certificado

| Formato | Extensión | Descripción |
|---------|-----------|-------------|
| PEM | .pem, .crt, .cer | Base64, delimitado por `-----BEGIN CERTIFICATE-----` |
| DER | .der, .cer | Binario, formato ASN.1 nativo |
| PKCS#7 | .p7b, .p7c | Contenedor de certificados (sin clave privada) |
| PKCS#12 | .p12, .pfx | Contenedor con certificado + clave privada |

### Conversiones entre Formatos

```bash
# PEM a DER
openssl x509 -in cert.pem -outform DER -out cert.der

# DER a PEM
openssl x509 -in cert.der -inform DER -outform PEM -out cert.pem

# PEM a PKCS#12
openssl pkcs12 -export -in cert.pem -inkey clave.key \
  -out cert.p12 -certfile ca.pem

# PKCS#12 a PEM
openssl pkcs12 -in cert.p12 -out todo.pem -nodes

# Extraer solo certificado de PKCS#12
openssl pkcs12 -in cert.p12 -clcerts -nokeys -out cert.pem
```

---

## Cadena de Confianza (Chain of Trust)

La cadena de confianza funciona así:

1. **CA raíz** (autofirmada) -- preinstalada en navegadores/SO
2. **CA intermedia** -- firmada por la CA raíz
3. **Certificado de entidad final** -- firmado por la CA intermedia

El servidor debe enviar su certificado + certificados intermedios. El cliente valida la cadena hasta una CA raíz de confianza.

```bash
# Crear bundle de cadena
cat cert-servidor.pem ca-intermedia.pem > cadena-completa.pem

# Verificar cadena completa
openssl verify -CAfile ca-raiz.pem cadena-completa.pem
```

---

## Configuración de OpenSSL

### Archivo openssl.cnf

El archivo principal de configuración se encuentra en `/etc/pki/tls/openssl.cnf` (RHEL/CentOS) o `/etc/ssl/openssl.cnf` (Debian/Ubuntu).

```ini
[ ca ]
default_ca = CA_default

[ CA_default ]
dir             = /etc/pki/CA
certs           = $dir/certs
crl_dir         = $dir/crl
database        = $dir/index.txt
new_certs_dir   = $dir/newcerts
serial          = $dir/serial
crlnumber       = $dir/crlnumber
default_days    = 365
default_md      = sha256
policy          = policy_match

[ policy_match ]
countryName            = match
stateOrProvinceName    = match
organizationName       = match
commonName             = supplied

[ req ]
default_bits       = 4096
default_md         = sha256
distinguished_name = req_distinguished_name

[ v3_ca ]
basicConstraints       = critical, CA:TRUE
keyUsage               = critical, keyCertSign, cRLSign
subjectKeyIdentifier   = hash
authorityKeyIdentifier = keyid:always, issuer

[ v3_req ]
basicConstraints     = CA:FALSE
keyUsage             = digitalSignature, keyEncipherment
subjectAltName       = @alt_names

[ alt_names ]
DNS.1 = www.ejemplo.com
DNS.2 = ejemplo.com
IP.1  = 192.168.1.10
```

### Estructura de directorios PKI

```
/etc/pki/
├── CA/
│   ├── certs/           # Certificados emitidos
│   ├── crl/             # Listas de revocación
│   ├── newcerts/        # Nuevos certificados
│   ├── private/         # Clave privada de la CA
│   ├── index.txt        # Base de datos de certificados
│   └── serial           # Siguiente número de serie
├── tls/
│   ├── certs/           # Certificados del sistema
│   ├── private/         # Claves privadas
│   └── openssl.cnf      # Configuración principal
└── ca-trust/
    └── source/anchors/  # CAs de confianza adicionales
```

> **Para el examen:** Conoce la ubicación de los directorios PKI según la distribución. RHEL usa `/etc/pki/`, Debian usa `/etc/ssl/`. Tras añadir una CA personalizada, ejecuta `update-ca-trust` (RHEL) o `update-ca-certificates` (Debian).

---

## Protección de Claves Privadas

Las claves privadas son el activo más sensible de una PKI:

- **Permisos**: `chmod 600` o `chmod 400` para el archivo de clave
- **Propietario**: Solo root o el usuario del servicio
- **Cifrado**: Proteger con passphrase (`-aes256`)
- **HSM**: En entornos empresariales, usar Hardware Security Modules
- **Backup**: Almacenar copias de seguridad cifradas offline

```bash
# Verificar permisos
ls -la /etc/pki/tls/private/

# Cifrar clave existente
openssl rsa -aes256 -in clave.key -out clave-cifrada.key
```

---

## Resumen de Comandos para el Examen

| Comando | Uso |
|---------|-----|
| `openssl req` | Generar CSR y certificados autofirmados |
| `openssl x509` | Examinar, convertir y firmar certificados |
| `openssl ca` | Operaciones de CA (firmar, revocar, generar CRL) |
| `openssl s_client` | Diagnóstico de conexiones TLS |
| `openssl verify` | Verificar cadena de certificados |
| `openssl genrsa` | Generar clave RSA |
| `openssl pkcs12` | Convertir a/desde formato PKCS#12 |
| `openssl crl` | Examinar listas de revocación |
| `openssl ocsp` | Consultas de estado de revocación |
