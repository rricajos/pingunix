---
tipo: comandos
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
---

# Comandos Clave - 331.2 Certificados para Cifrado, Firma y Autenticación

## Gestión de Claves GPG

| Comando | Descripción |
|---------|-------------|
| `gpg2 --full-generate-key` | Generación interactiva completa de par de claves |
| `gpg2 --quick-generate-key "Nombre <email>"` | Generación rápida de claves |
| `gpg2 --list-keys` / `gpg2 -k` | Listar claves públicas |
| `gpg2 --list-secret-keys` / `gpg2 -K` | Listar claves privadas |
| `gpg2 --export --armor email@ej.com > pub.asc` | Exportar clave pública en ASCII |
| `gpg2 --export-secret-keys --armor email@ej.com` | Exportar clave privada |
| `gpg2 --import clave.asc` | Importar clave pública o privada |
| `gpg2 --delete-keys ID` | Eliminar clave pública |
| `gpg2 --delete-secret-keys ID` | Eliminar clave privada |
| `gpg2 --fingerprint email@ej.com` | Ver huella digital de la clave |
| `gpg2 --edit-key ID` | Editar clave (trust, addkey, passwd) |
| `gpg2 --sign-key email@ej.com` | Firmar clave de otro usuario |

## Cifrado y Descifrado

| Comando | Descripción |
|---------|-------------|
| `gpg2 --encrypt -r email@ej.com archivo.txt` | Cifrar asimétricamente |
| `gpg2 --encrypt --armor -r email@ej.com archivo.txt` | Cifrar con salida ASCII |
| `gpg2 -e -r user1@ej.com -r user2@ej.com archivo.txt` | Cifrar para múltiples destinatarios |
| `gpg2 --symmetric archivo.txt` / `gpg2 -c archivo.txt` | Cifrar simétricamente |
| `gpg2 --symmetric --cipher-algo AES256 archivo.txt` | Cifrado simétrico con algoritmo específico |
| `gpg2 --decrypt archivo.txt.gpg` / `gpg2 -d archivo.gpg` | Descifrar archivo |

## Firmas Digitales

| Comando | Descripción |
|---------|-------------|
| `gpg2 --sign archivo.txt` | Firma binaria integrada |
| `gpg2 --clearsign archivo.txt` | Firma en texto claro (legible) |
| `gpg2 --detach-sign archivo.txt` | Firma separada (archivo.txt.sig) |
| `gpg2 --detach-sign --armor archivo.txt` | Firma separada ASCII (.asc) |
| `gpg2 --sign --encrypt -r email archivo.txt` | Firmar y cifrar simultáneamente |
| `gpg2 --verify archivo.txt.sig archivo.txt` | Verificar firma separada |
| `gpg2 --verify archivo.txt.asc` | Verificar firma clearsign |

## Servidores de Claves

| Comando | Descripción |
|---------|-------------|
| `gpg2 --keyserver hkps://keys.openpgp.org --send-keys ID` | Publicar clave en servidor |
| `gpg2 --keyserver hkps://keys.openpgp.org --search-keys email` | Buscar clave en servidor |
| `gpg2 --keyserver hkps://keys.openpgp.org --recv-keys ID` | Descargar clave de servidor |
| `gpg2 --refresh-keys` | Actualizar todas las claves |

## S/MIME con OpenSSL

| Comando | Descripción |
|---------|-------------|
| `openssl smime -sign -in msg.txt -signer cert.pem -inkey k.key -out firmado.eml` | Firmar con S/MIME |
| `openssl smime -verify -in firmado.eml -CAfile ca.pem` | Verificar firma S/MIME |
| `openssl smime -encrypt -in msg.txt -out cifrado.eml dest.pem` | Cifrar con S/MIME |
| `openssl smime -decrypt -in cifrado.eml -recip cert.pem -inkey k.key` | Descifrar S/MIME |

## gpg-agent y Archivos Importantes

| Ruta / Comando | Descripción |
|----------------|-------------|
| `gpg-connect-agent /bye` | Verificar estado del agente |
| `gpg-connect-agent reloadagent /bye` | Recargar configuración |
| `~/.gnupg/gpg.conf` | Configuración principal de GPG |
| `~/.gnupg/gpg-agent.conf` | Configuración del agente |
| `~/.gnupg/pubring.kbx` | Anillo de claves públicas |
| `~/.gnupg/trustdb.gpg` | Base de datos de confianza |
