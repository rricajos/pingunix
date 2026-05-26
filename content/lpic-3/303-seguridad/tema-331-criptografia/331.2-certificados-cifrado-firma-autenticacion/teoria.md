---
tipo: teoria
certificacion: lpic-3
especialidad: 303 - Seguridad
bloque: "331 - Criptografía"
tema: "331.2 - Certificados para cifrado, firma y autenticación"
subtema: "331.2"
peso: 4
tags:
  - lpic-3
  - tema-331
  - gnupg
  - gpg
  - cifrado
  - firma-digital
  - smime
---

# 331.2 Certificados para Cifrado, Firma y Autenticación

## Introducción

Este subtema cubre el uso práctico de la criptografía para proteger datos, verificar identidades y garantizar la integridad de la información. Se centra en GnuPG (GPG) como herramienta principal, junto con conceptos de cifrado simétrico y asimétrico, firmas digitales y S/MIME.

> **Para el examen:** Conoce a fondo los comandos de `gpg2` para gestión de claves, cifrado y firma. Entiende la diferencia entre el modelo de confianza de GPG (Web of Trust) y el de PKI (jerárquico).

---

## Cifrado Simétrico vs Asimétrico

### Cifrado Simétrico

Utiliza la **misma clave** para cifrar y descifrar. Es rápido pero requiere compartir la clave de forma segura.

| Algoritmo | Tamaño de clave | Notas |
|-----------|----------------|-------|
| AES-128 | 128 bits | Estándar mínimo actual |
| AES-256 | 256 bits | Recomendado para alta seguridad |
| 3DES | 168 bits | Obsoleto, evitar |
| ChaCha20 | 256 bits | Alternativa moderna a AES |

```bash
# Cifrado simétrico con GPG
gpg2 --symmetric --cipher-algo AES256 archivo.txt
# Genera archivo.txt.gpg - pedirá passphrase

# Descifrar
gpg2 --decrypt archivo.txt.gpg > archivo.txt
```

### Cifrado Asimétrico

Utiliza un **par de claves**: pública (para cifrar) y privada (para descifrar). Más lento pero resuelve el problema de distribución de claves.

| Algoritmo | Uso | Notas |
|-----------|-----|-------|
| RSA | Cifrado y firma | Estándar ampliamente usado |
| DSA | Solo firma | Obsoleto en nuevas implementaciones |
| ECDSA | Firma | Curvas elípticas, más eficiente |
| Ed25519 | Firma | Curva Edwards, moderno y seguro |
| ECDH | Intercambio de claves | Basado en curvas elípticas |

> **Para el examen:** En la práctica, se usa cifrado asimétrico para intercambiar una clave simétrica de sesión, y luego cifrado simétrico para los datos (cifrado híbrido).

---

## GnuPG (GPG)

### Generación de Claves

```bash
# Generación interactiva completa
gpg2 --full-generate-key

# Generación rápida con valores por defecto
gpg2 --quick-generate-key "Nombre <email@ejemplo.com>" rsa4096

# Generar subclaves (para separar usos)
gpg2 --edit-key ID_CLAVE
> addkey
```

### Gestión de Claves

```bash
# Listar claves públicas
gpg2 --list-keys
gpg2 -k

# Listar claves privadas
gpg2 --list-secret-keys
gpg2 -K

# Exportar clave pública
gpg2 --export --armor usuario@ejemplo.com > publica.asc

# Exportar clave privada (con cuidado)
gpg2 --export-secret-keys --armor usuario@ejemplo.com > privada.asc

# Importar clave
gpg2 --import clave-publica.asc

# Eliminar clave pública
gpg2 --delete-keys ID_CLAVE

# Eliminar clave privada
gpg2 --delete-secret-keys ID_CLAVE

# Ver huella digital (fingerprint)
gpg2 --fingerprint usuario@ejemplo.com
```

### Modelo de Confianza (Web of Trust)

A diferencia de PKI (jerárquico), GPG usa un modelo descentralizado donde los usuarios firman las claves de otros para validar su identidad.

```bash
# Firmar clave de otro usuario (certificar identidad)
gpg2 --sign-key usuario@ejemplo.com

# Editar nivel de confianza
gpg2 --edit-key usuario@ejemplo.com
> trust
```

Niveles de confianza del propietario:

| Nivel | Significado |
|-------|-------------|
| unknown | No se sabe nada del propietario |
| none | No se confía en las firmas del propietario |
| marginal | Se confía parcialmente |
| full | Se confía completamente |
| ultimate | Confianza absoluta (solo para claves propias) |

> **Para el examen:** Una clave se considera válida si está firmada por al menos una clave de confianza "full" o por tres claves de confianza "marginal".

---

## Cifrado y Descifrado con GPG

```bash
# Cifrar para un destinatario (asimétrico)
gpg2 --encrypt --recipient usuario@ejemplo.com archivo.txt

# Cifrar para múltiples destinatarios
gpg2 --encrypt -r user1@ej.com -r user2@ej.com archivo.txt

# Cifrar con salida ASCII (para email)
gpg2 --encrypt --armor --recipient usuario@ejemplo.com archivo.txt

# Descifrar
gpg2 --decrypt archivo.txt.gpg
gpg2 -d archivo.txt.gpg > archivo-descifrado.txt

# Cifrado simétrico (con passphrase)
gpg2 --symmetric archivo.txt
gpg2 -c archivo.txt
```

---

## Firmas Digitales

Las firmas digitales garantizan **autenticidad** (quién lo firmó) e **integridad** (que no se ha modificado).

```bash
# Firma separada (detached) - no modifica el original
gpg2 --detach-sign archivo.txt
# Genera archivo.txt.sig

# Firma separada en ASCII
gpg2 --detach-sign --armor archivo.txt
# Genera archivo.txt.asc

# Firma integrada en el archivo (clearsign)
gpg2 --clearsign archivo.txt
# Genera archivo.txt.asc con texto legible + firma

# Firma binaria integrada
gpg2 --sign archivo.txt
# Genera archivo.txt.gpg

# Firmar y cifrar simultáneamente
gpg2 --sign --encrypt --recipient user@ej.com archivo.txt

# Verificar firma
gpg2 --verify archivo.txt.sig archivo.txt
gpg2 --verify archivo.txt.asc
```

---

## Algoritmos Hash

Los algoritmos hash generan un resumen de longitud fija a partir de datos de cualquier tamaño. Son fundamentales para firmas digitales y verificación de integridad.

| Algoritmo | Tamaño de salida | Estado |
|-----------|-----------------|--------|
| MD5 | 128 bits | Roto, no usar para seguridad |
| SHA-1 | 160 bits | Obsoleto, evitar |
| SHA-256 | 256 bits | Recomendado |
| SHA-512 | 512 bits | Alta seguridad |
| SHA3-256 | 256 bits | Última generación |

```bash
# Calcular hashes con gpg
gpg2 --print-md sha256 archivo.txt

# Con herramientas del sistema
sha256sum archivo.txt
sha512sum archivo.txt
```

### Código de Autenticación de Mensajes (MAC/HMAC)

Un MAC combina un hash con una clave secreta para verificar tanto la integridad como la autenticidad del mensaje. HMAC es la implementación más común.

```bash
# Generar HMAC con OpenSSL
openssl dgst -sha256 -hmac "clave-secreta" archivo.txt
```

---

## Servidores de Claves

Los servidores de claves permiten publicar y buscar claves públicas GPG.

```bash
# Enviar clave a servidor
gpg2 --keyserver hkps://keys.openpgp.org --send-keys ID_CLAVE

# Buscar clave en servidor
gpg2 --keyserver hkps://keys.openpgp.org --search-keys usuario@ejemplo.com

# Recibir (descargar) clave de servidor
gpg2 --keyserver hkps://keys.openpgp.org --recv-keys ID_CLAVE

# Actualizar claves desde servidor
gpg2 --keyserver hkps://keys.openpgp.org --refresh-keys
```

> **Para el examen:** El protocolo `hkps://` usa HTTPS para la comunicación con servidores de claves. `hkp://` es la versión sin cifrar en puerto 11371.

---

## gpg-agent

El `gpg-agent` es un demonio que cachea passphrases y gestiona claves privadas, evitando tener que introducir la passphrase repetidamente.

```bash
# Verificar estado del agente
gpg-connect-agent /bye

# Recargar configuración del agente
gpg-connect-agent reloadagent /bye

# Configuración en ~/.gnupg/gpg-agent.conf
default-cache-ttl 600       # Cache por 10 minutos
max-cache-ttl 7200           # Máximo 2 horas
```

---

## S/MIME (Secure/Multipurpose Internet Mail Extensions)

S/MIME usa certificados X.509 (no GPG) para cifrar y firmar correo electrónico.

```bash
# Firmar email con S/MIME
openssl smime -sign -in mensaje.txt -signer cert.pem \
  -inkey clave.key -out mensaje-firmado.eml

# Verificar firma S/MIME
openssl smime -verify -in mensaje-firmado.eml -CAfile ca.pem

# Cifrar email con S/MIME
openssl smime -encrypt -in mensaje.txt \
  -out mensaje-cifrado.eml dest-cert.pem

# Descifrar email S/MIME
openssl smime -decrypt -in mensaje-cifrado.eml \
  -recip cert.pem -inkey clave.key
```

| Característica | GPG/OpenPGP | S/MIME |
|----------------|-------------|--------|
| Modelo de confianza | Web of Trust | Jerárquico (PKI/CA) |
| Formato de certificado | OpenPGP | X.509 |
| Distribución de claves | Servidores de claves | CAs comerciales |
| Soporte en clientes email | Requiere plugin | Integrado nativamente |
| Coste | Gratuito | Certificados pueden ser de pago |

---

## Archivos de Configuración GPG

```
~/.gnupg/
├── gpg.conf           # Configuración de GPG
├── gpg-agent.conf     # Configuración del agente
├── pubring.kbx        # Anillo de claves públicas (formato nuevo)
├── trustdb.gpg        # Base de datos de confianza
└── private-keys-v1.d/ # Claves privadas (gestionadas por gpg-agent)
```

Opciones útiles en `~/.gnupg/gpg.conf`:

```
default-key ID_CLAVE
keyserver hkps://keys.openpgp.org
auto-key-retrieve
```
