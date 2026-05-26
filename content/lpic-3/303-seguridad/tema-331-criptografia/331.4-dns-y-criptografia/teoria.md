---
tipo: teoria
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
  - dns-seguro
---

# 331.4 DNS y Criptografía

## Introducción

El Sistema de Nombres de Dominio (DNS) fue diseñado originalmente sin mecanismos de seguridad. DNSSEC añade autenticación e integridad a las respuestas DNS mediante firmas criptográficas. Además, tecnologías como DANE, TSIG, DNS-over-TLS y DNS-over-HTTPS mejoran la seguridad del ecosistema DNS.

> **Para el examen:** Este subtema tiene peso 5. Domina el flujo completo de DNSSEC: generación de claves, firma de zonas, registros DS y la cadena de confianza. Conoce también DANE/TLSA y TSIG.

---

## DNSSEC - Fundamentos

DNSSEC protege contra:
- **Envenenamiento de caché** (cache poisoning)
- **Suplantación de respuestas** (spoofing)
- **Ataques man-in-the-middle**

DNSSEC **NO** proporciona:
- Confidencialidad (no cifra las consultas/respuestas)
- Protección contra DDoS

### Registros DNS de DNSSEC

| Registro | Descripción |
|----------|-------------|
| RRSIG | Firma digital de un conjunto de registros (RRset) |
| DNSKEY | Clave pública utilizada para verificar firmas |
| DS | Delegación Segura - hash de la KSK del hijo, en la zona padre |
| NSEC | Prueba de no existencia (next secure record) |
| NSEC3 | Prueba de no existencia con hash (evita enumeración de zona) |
| NSEC3PARAM | Parámetros para generación de registros NSEC3 |

### Tipos de Claves

| Clave | Acrónimo | Función | Flags |
|-------|----------|---------|-------|
| Zone Signing Key | ZSK | Firma los registros de la zona | 256 |
| Key Signing Key | KSK | Firma las DNSKEY (incluida la ZSK) | 257 |

> **Para el examen:** La KSK firma las claves DNSKEY, y su hash se publica como registro DS en la zona padre. La ZSK firma los registros normales de la zona. Esta separación facilita la rotación de claves.

---

## Flujo Completo de DNSSEC

### Paso 1: Generar Claves

```bash
# Generar ZSK (Zone Signing Key)
dnssec-keygen -a RSASHA256 -b 2048 -n ZONE ejemplo.com
# Genera: Kejemplo.com.+008+12345.key y .private

# Generar KSK (Key Signing Key)
dnssec-keygen -a RSASHA256 -b 4096 -n ZONE -f KSK ejemplo.com
# Genera: Kejemplo.com.+008+67890.key y .private

# Con ECDSA (más moderno y eficiente)
dnssec-keygen -a ECDSAP256SHA256 -n ZONE ejemplo.com
dnssec-keygen -a ECDSAP256SHA256 -n ZONE -f KSK ejemplo.com
```

### Paso 2: Incluir Claves en la Zona

```bash
# Añadir las claves públicas al archivo de zona
$INCLUDE Kejemplo.com.+008+12345.key   ; ZSK
$INCLUDE Kejemplo.com.+008+67890.key   ; KSK
```

### Paso 3: Firmar la Zona

```bash
# Firmar la zona
dnssec-signzone -A -3 $(head -c 1000 /dev/urandom | sha1sum | cut -b 1-16) \
  -N INCREMENT -o ejemplo.com -t db.ejemplo.com

# Opciones explicadas:
# -A          : Genera registros NSEC3 automáticamente
# -3 salt     : Usa NSEC3 con el salt proporcionado
# -N INCREMENT: Incrementa el número de serie del SOA
# -o          : Nombre de la zona (origin)
# -t          : Mostrar estadísticas

# Firma básica sin NSEC3
dnssec-signzone -o ejemplo.com db.ejemplo.com

# Genera: db.ejemplo.com.signed y dsset-ejemplo.com.
```

### Paso 4: Configurar BIND para Usar la Zona Firmada

```bash
# En named.conf
zone "ejemplo.com" {
    type master;
    file "db.ejemplo.com.signed";  # Usar zona firmada
    key-directory "/var/named/keys";
    auto-dnssec maintain;          # Mantenimiento automático
    inline-signing yes;            # Firma en línea
};
```

### Paso 5: Publicar Registro DS en la Zona Padre

```bash
# El archivo dsset-ejemplo.com. contiene el registro DS
# que debe publicarse en la zona padre (.com)
cat dsset-ejemplo.com.

# Generar DS manualmente
dnssec-dsfromkey Kejemplo.com.+008+67890.key
```

---

## Cadena de Confianza (Chain of Trust)

```
Raíz (.) ─── DS de .com ──→ .com ─── DS de ejemplo.com ──→ ejemplo.com
  │                           │                                │
  KSK raíz                   KSK .com                        KSK ejemplo.com
  │                           │                                │
  Trust Anchor              DNSKEY .com                      DNSKEY ejemplo.com
                              │                                │
                            ZSK .com                         ZSK ejemplo.com
                              │                                │
                            RRSIG registros                  RRSIG registros
```

La validación sigue la cadena desde el **Trust Anchor** (clave raíz) hasta el registro consultado, verificando cada firma y registro DS en el camino.

---

## Rotación de Claves (Key Rollover)

### Rotación de ZSK (Pre-publicación)

```bash
# 1. Generar nueva ZSK
dnssec-keygen -a RSASHA256 -b 2048 -n ZONE ejemplo.com

# 2. Publicar ambas claves (pre-publicación)
# Añadir nueva clave al archivo de zona

# 3. Esperar propagación (al menos 2 x TTL)

# 4. Usar nueva ZSK para firmar
dnssec-signzone -o ejemplo.com db.ejemplo.com

# 5. Retirar ZSK antigua tras propagación
```

### Rotación de KSK (Double-DS)

```bash
# 1. Generar nueva KSK
dnssec-keygen -a RSASHA256 -b 4096 -n ZONE -f KSK ejemplo.com

# 2. Publicar nueva KSK en la zona

# 3. Generar nuevo DS y enviarlo a la zona padre
dnssec-dsfromkey nueva-ksk.key

# 4. Esperar propagación de ambos DS

# 5. Retirar KSK antigua y DS antiguo
```

> **Para el examen:** La rotación de ZSK es más frecuente y sencilla (no implica cambios en la zona padre). La rotación de KSK requiere coordinación con el registrador para actualizar el registro DS.

---

## NSEC vs NSEC3

| Característica | NSEC | NSEC3 |
|---------------|------|-------|
| Prueba de no existencia | Lista secuencial de nombres | Hashes de nombres |
| Enumeración de zona | Posible (zone walking) | Protegida por hash |
| Complejidad | Simple | Mayor |
| Salt | No aplica | Configurable |
| Iteraciones | No aplica | Configurables |

```bash
# Firmar con NSEC3
dnssec-signzone -3 "sal123" -H 10 -o ejemplo.com db.ejemplo.com
# -3 salt  : Activar NSEC3 con salt
# -H 10    : 10 iteraciones de hash
```

---

## DANE y Registros TLSA

DANE (DNS-based Authentication of Named Entities) permite asociar certificados TLS directamente a nombres DNS mediante registros TLSA, reduciendo la dependencia de las CAs.

### Formato del Registro TLSA

```
_puerto._protocolo.dominio. IN TLSA uso selector tipo_coincidencia datos
```

| Campo | Valores | Descripción |
|-------|---------|-------------|
| Uso (Usage) | 0-3 | 0=PKIX-TA, 1=PKIX-EE, 2=DANE-TA, 3=DANE-EE |
| Selector | 0-1 | 0=Certificado completo, 1=Solo clave pública |
| Matching Type | 0-2 | 0=Exacto, 1=SHA-256, 2=SHA-512 |

```bash
# Ejemplo: Registro TLSA para HTTPS
_443._tcp.www.ejemplo.com. IN TLSA 3 1 1 \
  a1b2c3d4e5f6...hash_sha256_de_la_clave_publica...

# Generar hash para TLSA
openssl x509 -in cert.pem -noout -pubkey | \
  openssl pkey -pubin -outform DER | \
  openssl dgst -sha256 -binary | xxd -p -c 32
```

> **Para el examen:** DANE-EE (uso=3) es el más usado. Significa que el certificado del servidor se autentica directamente por DNS, sin necesidad de validar la cadena de CA.

---

## TSIG (Transaction Signature)

TSIG autentica transferencias de zona y actualizaciones dinámicas DNS mediante claves simétricas compartidas.

```bash
# Generar clave TSIG
tsig-keygen -a hmac-sha256 transfer-key > /etc/named/transfer.key

# Contenido generado:
key "transfer-key" {
    algorithm hmac-sha256;
    secret "base64EncodedSecret==";
};

# Configurar en BIND - servidor maestro
zone "ejemplo.com" {
    type master;
    allow-transfer { key transfer-key; };
};

# Configurar en BIND - servidor esclavo
server 192.168.1.1 {
    keys { transfer-key; };
};
```

---

## DNS-over-TLS (DoT) y DNS-over-HTTPS (DoH)

### DNS-over-TLS (Puerto 853)

```bash
# Configurar Unbound como resolver con DoT
server:
    tls-cert-bundle: /etc/ssl/certs/ca-certificates.crt

forward-zone:
    name: "."
    forward-tls-upstream: yes
    forward-addr: 1.1.1.1@853#cloudflare-dns.com
    forward-addr: 8.8.8.8@853#dns.google
```

### DNS-over-HTTPS (Puerto 443)

DoH encapsula DNS dentro de HTTPS, haciéndolo indistinguible del tráfico web normal.

### Configuración de Unbound

```bash
# /etc/unbound/unbound.conf
server:
    interface: 0.0.0.0
    access-control: 192.168.1.0/24 allow

    # Validación DNSSEC
    auto-trust-anchor-file: "/var/lib/unbound/root.key"
    val-clean-additional: yes

    # Seguridad
    hide-identity: yes
    hide-version: yes
    harden-glue: yes
    harden-dnssec-stripped: yes

# Verificar configuración
unbound-checkconf

# Gestionar trust anchor
unbound-anchor -a /var/lib/unbound/root.key
```

| Característica | DNS tradicional | DoT | DoH |
|---------------|----------------|-----|-----|
| Puerto | 53 (UDP/TCP) | 853 (TCP) | 443 (TCP) |
| Cifrado | No | TLS | HTTPS |
| Bloqueable | Si | Si (puerto conocido) | Difícil (mismo puerto que HTTPS) |
| Autenticación | DNSSEC opcional | TLS + DNSSEC | HTTPS + DNSSEC |
