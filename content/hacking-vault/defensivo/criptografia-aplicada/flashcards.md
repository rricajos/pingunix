---
title: "Flashcards - Criptografia Aplicada en Linux"
tags:
  - hacking
  - defensivo
  - criptografia-aplicada
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "criptografia-aplicada"
---

# Flashcards: Criptografia Aplicada en Linux

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-001">
<div class="flashcard-front">

**P:** Cual es la diferencia entre cifrado simetrico y asimetrico, y que ejemplos de cada uno conoces?

</div>
<div class="flashcard-back">

**R:** **Simetrico**: usa una clave compartida, es rapido, para cifrado de datos en volumen. Ejemplos: AES-256, ChaCha20. **Asimetrico**: usa par de claves publica/privada, es 100-1000x mas lento, para intercambio de claves y firmas digitales. Ejemplos: RSA (2048-4096 bits), Ed25519, ECDSA. En la practica se usa **cifrado hibrido**: asimetrico para intercambiar clave simetrica, simetrico para los datos.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-002">
<div class="flashcard-front">

**P:** Como funciona el cifrado hibrido usado por TLS, GPG y SSH?

</div>
<div class="flashcard-back">

**R:** 1) El remitente genera una clave simetrica aleatoria (clave de sesion). 2) Cifra los datos con AES-256 (simetrico, rapido). 3) Cifra la clave de sesion con la clave publica del destinatario (asimetrico). 4) Envia datos cifrados + clave de sesion cifrada. 5) El destinatario descifra la clave de sesion con su clave privada. 6) Descifra los datos con la clave de sesion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-003">
<div class="flashcard-front">

**P:** Como generarias un par de claves GPG con el algoritmo Ed25519 y exportarias la clave publica?

</div>
<div class="flashcard-back">

**R:** Generar: `gpg --quick-generate-key "Nombre <correo@ejemplo.com>" ed25519 default 2y` (validez 2 anos). Exportar clave publica: `gpg --armor --export correo@ejemplo.com > mi_clave_publica.asc`. Listar claves: `gpg --list-keys --keyid-format long`. Verificar fingerprint: `gpg --fingerprint correo@ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-004">
<div class="flashcard-front">

**P:** Como cifrarias un archivo con GPG para un destinatario y como lo descifrar?

</div>
<div class="flashcard-back">

**R:** Cifrar: `gpg --encrypt --recipient alice@ejemplo.com documento.pdf` (genera `documento.pdf.gpg`). Para multiples destinatarios: agregar `--recipient bob@ejemplo.com`. Cifrado simetrico (contrasena): `gpg --symmetric --cipher-algo AES256 documento.pdf`. Descifrar: `gpg --decrypt documento.pdf.gpg > documento.pdf` o `gpg --output documento.pdf --decrypt documento.pdf.gpg`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-005">
<div class="flashcard-front">

**P:** Que versiones de TLS son seguras actualmente y cuales deben evitarse?

</div>
<div class="flashcard-back">

**R:** **TLS 1.3**: recomendado, mas rapido y seguro, elimina opciones inseguras. **TLS 1.2**: aceptable con cipher suites correctas. **TLS 1.1 y 1.0**: deprecados, debiles, evitar. **SSL 3.0**: obsoleto (POODLE attack). **SSL 2.0**: obsoleto con vulnerabilidades criticas. En produccion, usar solo TLS 1.2 y 1.3.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-006">
<div class="flashcard-front">

**P:** Como obtendrias un certificado TLS gratuito con Let's Encrypt y certbot para Nginx?

</div>
<div class="flashcard-back">

**R:** Instalar: `apt install certbot python3-certbot-nginx`. Obtener certificado: `certbot --nginx -d ejemplo.com -d www.ejemplo.com`. Renovacion automatica: ya configurada en cron/systemd, probar con `certbot renew --dry-run`. Verificar certificados: `certbot certificates`. Revocar: `certbot revoke --cert-path /etc/letsencrypt/live/ejemplo.com/cert.pem`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-007">
<div class="flashcard-front">

**P:** Como verificarias el certificado SSL de un servidor remoto con openssl?

</div>
<div class="flashcard-back">

**R:** Conectar: `openssl s_client -connect ejemplo.com:443 -servername ejemplo.com`. Ver detalles: `openssl s_client -connect ejemplo.com:443 </dev/null 2>/dev/null | openssl x509 -noout -text`. Ver fechas de expiracion: `openssl x509 -noout -dates`. Verificar que clave y certificado coinciden: comparar `openssl x509 -noout -modulus -in cert.pem | md5sum` con `openssl rsa -noout -modulus -in key.pem | md5sum`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-008">
<div class="flashcard-front">

**P:** Que tipo de clave SSH se recomienda actualmente y como se genera?

</div>
<div class="flashcard-back">

**R:** Se recomienda **Ed25519** por su excelente seguridad y velocidad. Generar: `ssh-keygen -t ed25519 -C "usuario@equipo" -f ~/.ssh/id_ed25519`. Copiar al servidor: `ssh-copy-id -i ~/.ssh/id_ed25519.pub usuario@servidor`. Para compatibilidad con sistemas antiguos: `ssh-keygen -t rsa -b 4096`. Cambiar passphrase: `ssh-keygen -p -f ~/.ssh/id_ed25519`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-009">
<div class="flashcard-front">

**P:** Que es SSH Agent Forwarding y por que puede ser un riesgo de seguridad?

</div>
<div class="flashcard-back">

**R:** SSH Agent Forwarding (`ssh -A`) permite usar las claves SSH del agente local en servidores remotos para conectarse a otros servidores sin copiar claves. **Riesgo**: si el servidor intermedio esta comprometido, un atacante con acceso root puede usar el agente SSH para autenticarse en otros servidores en tu nombre. Alternativa mas segura: **ProxyJump** (`ssh -J usuario@pivot usuario@destino`).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-010">
<div class="flashcard-front">

**P:** Como funciona LUKS y que son los key slots?

</div>
<div class="flashcard-back">

**R:** LUKS (Linux Unified Key Setup) cifra particiones completas con AES. Soporta hasta **8 key slots**: cada uno almacena una copia de la master key cifrada con una contrasena o key file diferente. Agregar clave: `cryptsetup luksAddKey /dev/sdb1`. Eliminar slot: `cryptsetup luksKillSlot /dev/sdb1 1`. Ver info: `cryptsetup luksDump /dev/sdb1`. **Critico**: siempre respaldar la cabecera con `luksHeaderBackup`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-011">
<div class="flashcard-front">

**P:** Por que nunca se debe usar SHA-256 para almacenar contrasenas y que algoritmos se recomiendan?

</div>
<div class="flashcard-back">

**R:** SHA-256 es una funcion hash **rapida**, lo que permite ataques de fuerza bruta a miles de millones de hashes por segundo. Para contrasenas se necesitan funciones **deliberadamente lentas**: **bcrypt** (factor de costo ajustable, bueno), **argon2id** (resistente a GPU/ASIC, excelente, recomendado). En Linux `/etc/shadow` usa `$6$` (SHA-512 con salt) o `$y$` (yescrypt en distros recientes).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-012">
<div class="flashcard-front">

**P:** Que es `pass` (password store) y como funciona?

</div>
<div class="flashcard-back">

**R:** `pass` es el gestor de contrasenas estandar de Unix. Almacena contrasenas como archivos cifrados con GPG en `~/.password-store/`. Inicializar: `pass init "ID_CLAVE_GPG"`. Guardar: `pass insert email/gmail`. Generar aleatoria: `pass generate servicios/github 32`. Ver: `pass email/gmail`. Copiar al portapapeles (se borra en 45s): `pass -c email/gmail`. Soporta git para sincronizacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-013">
<div class="flashcard-front">

**P:** Como configurarias un servidor WireGuard VPN basico?

</div>
<div class="flashcard-back">

**R:** Generar claves: `wg genkey | tee server_private.key | wg pubkey > server_public.key`. Configurar `/etc/wireguard/wg0.conf` con `[Interface]` (PrivateKey, Address 10.200.0.1/24, ListenPort 51820, PostUp/PostDown para NAT) y `[Peer]` (PublicKey del cliente, AllowedIPs). Iniciar: `wg-quick up wg0`. Persistir: `systemctl enable wg-quick@wg0`. Ver estado: `wg show`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-014">
<div class="flashcard-front">

**P:** Que es `age` y que ventajas tiene sobre GPG para cifrado de archivos?

</div>
<div class="flashcard-back">

**R:** `age` es una herramienta moderna de cifrado de archivos disenada para ser simple y segura. Ventajas sobre GPG: sintaxis mas simple, no requiere gestion compleja de keyrings ni Web of Trust, soporta claves SSH directamente (`age -R ~/.ssh/id_ed25519.pub`). Generar claves: `age-keygen -o clave.txt`. Cifrar: `age -r CLAVE_PUBLICA -o archivo.enc archivo.txt`. Descifrar: `age -d -i clave.txt archivo.enc`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-015">
<div class="flashcard-front">

**P:** Como verificarias la integridad de un archivo descargado usando hashes SHA256?

</div>
<div class="flashcard-back">

**R:** Calcular hash: `sha256sum archivo.iso`. Verificar contra hash conocido: `echo "a1b2c3d4... archivo.iso" | sha256sum -c`. Verificar archivo de checksums: `sha256sum -c SHA256SUMS`. Generar checksums de binarios del sistema: `sha256sum /usr/bin/* > checksums_bin.txt` para baseline de integridad. Verificar luego con `sha256sum -c checksums_bin.txt`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-016">
<div class="flashcard-front">

**P:** Que es la Web of Trust de GPG y como se valida una clave?

</div>
<div class="flashcard-back">

**R:** La Web of Trust es el modelo de confianza de GPG donde los usuarios firman las claves de otros verificando su identidad. Niveles: **unknown**, **none**, **marginal** (confianza parcial), **full** (confianza completa), **ultimate** (solo claves propias). Para validar una clave se necesita: 1 firma de confianza "full" O 3 firmas de confianza "marginal". Firmar clave: `gpg --sign-key alice@ejemplo.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-017">
<div class="flashcard-front">

**P:** Que son las claves SSH FIDO2 y como se generan?

</div>
<div class="flashcard-back">

**R:** Las claves FIDO2 estan respaldadas por hardware (YubiKey, SoloKey). Generar: `ssh-keygen -t ed25519-sk -C "usuario@equipo"`. Tipo residente (almacenada en el dispositivo): `ssh-keygen -t ed25519-sk -O resident`. Importar desde dispositivo: `ssh-keygen -K`. Requerir toque fisico: `-O verify-required`. Ventaja: la clave privada nunca sale del dispositivo de hardware, protegiendola contra robo por software.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="criptografia-aplicada">
</div>

<div class="flashcard" data-id="crypto-fc-018">
<div class="flashcard-front">

**P:** Nombra las herramientas criptograficas principales en Linux y su funcion.

</div>
<div class="flashcard-back">

**R:** **GPG**: cifrado/firma de archivos y correo. **openssl**: operaciones SSL/TLS, PKI y certificados. **ssh-keygen**: generacion de claves SSH. **cryptsetup**: cifrado de disco con LUKS. **age**: cifrado de archivos moderno y simple. **certbot**: certificados Let's Encrypt automatizados. **pass**: gestor de contrasenas CLI basado en GPG. **wg**: configuracion de WireGuard VPN. Tendencia actual: age sobre GPG, WireGuard sobre OpenVPN, Ed25519 sobre RSA.

</div>
</div>

---
