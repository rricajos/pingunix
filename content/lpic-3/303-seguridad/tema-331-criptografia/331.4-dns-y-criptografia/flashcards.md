---
title: "331.4 - Flashcards"
tags:
  - lpic-3
  - flashcards
  - repaso
tipo: flashcards
certificacion: lpic-3
subtema: "331.4"
---

# Flashcards: 331.4 - Dns Y Criptografia

> 33 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-001">
<div class="flashcard-front">

**P:** ¿Qué comando genera una KSK (Key Signing Key) con algoritmo RSASHA256 de 4096 bits para la zona ejemplo.com?

</div>
<div class="flashcard-back">

**R:** b). `dnssec-keygen -a RSASHA256 -b 4096 -n ZONE -f KSK ejemplo.com`  La opción `-f KSK` indica que se debe generar una Key Signing Key (con flags=257). Sin `-f KSK`, se genera una ZSK (flags=256). `-n ZONE` especifica que es una clave de zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-002">
<div class="flashcard-front">

**P:** ¿Qué registro DNSSEC se publica en la zona padre para establecer la cadena de confianza?

</div>
<div class="flashcard-back">

**R:** c). DS (Delegation Signer)  El registro DS contiene el hash de la KSK de la zona hija y se publica en la zona padre. Es el enlace que conecta la cadena de confianza entre zonas padre e hija.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-003">
<div class="flashcard-front">

**P:** ¿Cuál es la principal ventaja de NSEC3 sobre NSEC?

</div>
<div class="flashcard-back">

**R:** b). NSEC3 protege contra la enumeración de zona (zone walking)  NSEC lista los nombres de dominio en orden, permitiendo recorrer toda la zona. NSEC3 usa hashes de los nombres, haciendo impracticable la enumeración completa de la zona.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-004">
<div class="flashcard-front">

**P:** ¿Qué comando firma una zona DNS generando registros NSEC3 con salt?

</div>
<div class="flashcard-back">

**R:** b). `dnssec-signzone -3 "abc123" -o ejemplo.com db.ejemplo.com`  La opción `-3` seguida del salt activa NSEC3 en lugar de NSEC. El salt es una cadena hexadecimal que se añade antes del hash para dificultar ataques de diccionario.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-005">
<div class="flashcard-front">

**P:** ¿Qué tipo de registro DANE/TLSA con uso=3 (DANE-EE) permite?

</div>
<div class="flashcard-back">

**R:** b). Autenticar el certificado del servidor directamente por DNS, sin necesidad de CA  DANE-EE (uso=3) indica que el certificado o clave pública del endpoint está directamente asociado al registro DNS. La validación se realiza contra el registro TLSA en DNS, no contra una CA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-006">
<div class="flashcard-front">

**P:** ¿Qué protocolo utiliza claves simétricas compartidas para autenticar transferencias de zona DNS?

</div>
<div class="flashcard-back">

**R:** c). TSIG (Transaction Signature)  TSIG utiliza claves simétricas compartidas (HMAC) para autenticar transacciones DNS como transferencias de zona (AXFR/IXFR) y actualizaciones dinámicas entre servidores DNS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-007">
<div class="flashcard-front">

**P:** ¿En qué puerto estándar opera DNS-over-TLS (DoT)?

</div>
<div class="flashcard-back">

**R:** c). 853  DNS-over-TLS utiliza el puerto TCP 853. DNS tradicional usa el puerto 53, y DNS-over-HTTPS usa el puerto 443 (el mismo que HTTPS).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-008">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para generar un registro DS a partir de una clave KSK existente?

</div>
<div class="flashcard-back">

**R:** b). `dnssec-dsfromkey Kejemplo.com.+008+67890.key`  `dnssec-dsfromkey` genera registros DS (Delegation Signer) a partir de un archivo de clave DNSKEY. Estos registros DS deben publicarse en la zona padre.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-009">
<div class="flashcard-front">

**P:** ¿Qué directiva de Unbound activa la validación DNSSEC?

</div>
<div class="flashcard-back">

**R:** b). `auto-trust-anchor-file: "/var/lib/unbound/root.key"`  En Unbound, la directiva `auto-trust-anchor-file` especifica el archivo del trust anchor raíz y activa la validación DNSSEC automáticamente. Se obtiene/actualiza con `unbound-anchor`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-010">
<div class="flashcard-front">

**P:** ¿Cuál es la diferencia fundamental entre DNS-over-TLS (DoT) y DNS-over-HTTPS (DoH) desde la perspectiva de un firewall?

</div>
<div class="flashcard-back">

**R:** b). DoT usa un puerto dedicado (853) fácilmente bloqueable; DoH usa el puerto 443, indistinguible del tráfico HTTPS  Un firewall puede bloquear DoT filtrando el puerto 853. DoH es más difícil de bloquear porque comparte el puerto 443 con todo el tráfico HTTPS, haciéndolo prácticamente indistinguible.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-011">
<div class="flashcard-front">

**P:** ¿Qué valor de flags tiene una ZSK (Zone Signing Key) en DNSSEC?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La ZSK tiene flags=256, lo que indica que es una clave de zona estándar para firmar registros. La KSK tiene flags=257, donde el bit adicional (Secure Entry Point) indica que su hash se publica como registro DS en la zona padre para establecer la cadena de confianza.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-012">
<div class="flashcard-front">

**P:** ¿Qué tipo de registro DNSSEC contiene la firma digital de un conjunto de registros (RRset)?

</div>
<div class="flashcard-back">

**R:** c) Correcta. El registro RRSIG (Resource Record Signature) contiene la firma digital de un RRset (conjunto de registros del mismo tipo para el mismo nombre). Cada RRset en una zona firmada tiene su correspondiente RRSIG generado con la ZSK.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-013">
<div class="flashcard-front">

**P:** ¿Qué aspecto de seguridad NO proporciona DNSSEC?

</div>
<div class="flashcard-back">

**R:** c) Correcta. DNSSEC NO proporciona confidencialidad. Las consultas y respuestas DNS siguen siendo en texto plano. DNSSEC solo garantiza autenticación (verificar quién firmó los datos), integridad (que no fueron modificados) y prueba de no existencia (registros NSEC/NSEC3). Para confidencialidad se necesita DNS-over-TLS o DNS-over-HTTPS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-014">
<div class="flashcard-front">

**P:** En un registro TLSA con el formato `_443._tcp.www.ejemplo.com. IN TLSA 3 1 1 hash...`, ¿qué indica el valor "1" en el campo selector?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El campo selector con valor 1 indica que el hash se calcula sobre la clave pública (SubjectPublicKeyInfo) del certificado, no sobre el certificado completo. El valor 0 indicaría que se usa el certificado completo. Usar solo la clave pública (selector=1) permite renovar el certificado sin cambiar el registro TLSA, siempre que la clave pública no cambie.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-015">
<div class="flashcard-front">

**P:** ¿Qué directiva de BIND permite que las zonas se firmen automáticamente sin intervención manual?

</div>
<div class="flashcard-back">

**R:** b) Correcta. La directiva `auto-dnssec maintain;` junto con `inline-signing yes;` permite que BIND gestione automáticamente la firma de la zona, incluyendo la re-firma cuando los registros RRSIG se acercan a su fecha de expiración. La opción `maintain` también gestiona la rotación de claves si se encuentran nuevas claves en el directorio de claves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-016">
<div class="flashcard-front">

**P:** ¿Cuál es el propósito del salt en NSEC3?

</div>
<div class="flashcard-back">

**R:** b) Correcta. El salt en NSEC3 se concatena con el nombre de dominio antes de calcular el hash. Esto previene ataques con tablas rainbow o diccionarios precalculados, ya que cada zona puede usar un salt diferente, obligando al atacante a recalcular los hashes para cada zona específica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-017">
<div class="flashcard-front">

**P:** ¿Qué comando se utiliza para verificar la configuración del resolver Unbound antes de iniciarlo?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `unbound-checkconf` verifica la sintaxis y consistencia del archivo de configuración de Unbound (por defecto `/etc/unbound/unbound.conf`). Es una práctica recomendada ejecutarlo antes de reiniciar el servicio para detectar errores de configuración.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-018">
<div class="flashcard-front">

**P:** En la rotación de ZSK usando el método de pre-publicación, ¿por qué se debe esperar al menos 2 veces el TTL antes de usar la nueva clave para firmar?

</div>
<div class="flashcard-back">

**R:** b) Correcta. Se debe esperar al menos 2 x TTL (en la práctica) para asegurar que todos los resolvers recursivos que tienen la zona en caché hayan obtenido la versión actualizada que incluye la nueva DNSKEY. Si se empieza a firmar con la nueva ZSK antes de que los resolvers la conozcan, las firmas no podrán ser validadas.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-019">
<div class="flashcard-front">

**P:** ¿Qué algoritmo utiliza TSIG para autenticar las transferencias de zona?

</div>
<div class="flashcard-back">

**R:** c) Correcta. TSIG utiliza HMAC (Hash-based Message Authentication Code) con claves simétricas compartidas entre servidores DNS. Los algoritmos más comunes son `hmac-sha256` y `hmac-sha512`. A diferencia de DNSSEC que usa criptografía asimétrica, TSIG es simétrico: ambos servidores deben conocer la misma clave secreta.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-020">
<div class="flashcard-front">

**P:** ¿Qué herramienta se utiliza para obtener y actualizar el trust anchor raíz de DNSSEC para el resolver Unbound?

</div>
<div class="flashcard-back">

**R:** b) Correcta. `unbound-anchor` descarga y verifica el trust anchor raíz de DNSSEC (la clave pública del root) y lo almacena en el archivo especificado (normalmente `/var/lib/unbound/root.key`). Este trust anchor es el punto de partida de la cadena de confianza para la validación DNSSEC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-021">
<div class="flashcard-front">

**P:** Escribe el comando para generar una ZSK (Zone Signing Key) con algoritmo RSASHA256 de 2048 bits para la zona `midominio.com`. <input type="text" class="fill-blank" data-answer="dnssec-keygen -a RSASHA256 -b 2048 -n ZONE midominio.com" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** dnssec-keygen -a RSASHA256 -b 2048 -n ZONE midominio.com. Para generar una ZSK no se incluye la opción `-f KSK`. Los parámetros son: `-a` para el algoritmo, `-b` para el tamaño de clave en bits, y `-n ZONE` para indicar que es una clave de zona. Se generan dos archivos: `.key` (clave pública) y `.private` (clave privada).

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-022">
<div class="flashcard-front">

**P:** Escribe el comando para firmar la zona `ejemplo.com` cuyo archivo de zona es `db.ejemplo.com`, generando registros NSEC3 con el salt "a1b2c3". <input type="text" class="fill-blank" data-answer="dnssec-signzone -3 a1b2c3 -o ejemplo.com db.ejemplo.com" data-alt="dnssec-signzone -3 &quot;a1b2c3&quot; -o ejemplo.com db.ejemplo.com" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** dnssec-signzone -3 a1b2c3 -o ejemplo.com db.ejemplo.com. La opción `-3` seguida del salt activa NSEC3 en lugar de NSEC. `-o` especifica el nombre de la zona (origin). El resultado es un archivo `db.ejemplo.com.signed` que contiene la zona firmada con registros RRSIG y NSEC3.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-023">
<div class="flashcard-front">

**P:** Escribe el comando para generar una clave TSIG con algoritmo hmac-sha256 y nombre "transfer-key", redirigiendo la salida al archivo `/etc/named/transfer.key`. <input type="text" class="fill-blank" data-answer="tsig-keygen -a hmac-sha256 transfer-key > /etc/named/transfer.key" data-alt="tsig-keygen -a hmac-sha256 transfer-key >/etc/named/transfer.key" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** tsig-keygen -a hmac-sha256 transfer-key > /etc/named/transfer.key. `tsig-keygen` genera una clave TSIG en formato compatible con BIND. `-a` especifica el algoritmo HMAC. El archivo generado contiene un bloque `key` con el nombre, algoritmo y secreto codificado en Base64, listo para incluir en la configuración de BIND.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-024">
<div class="flashcard-front">

**P:** Escribe el comando para generar un registro DS a partir de un archivo de clave KSK llamado `Kejemplo.com.+008+67890.key`. <input type="text" class="fill-blank" data-answer="dnssec-dsfromkey Kejemplo.com.+008+67890.key" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** dnssec-dsfromkey Kejemplo.com.+008+67890.key. `dnssec-dsfromkey` genera registros DS (Delegation Signer) a partir de una clave DNSKEY. El registro DS resultante contiene el hash de la KSK y debe publicarse en la zona padre para establecer la cadena de confianza DNSSEC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-025">
<div class="flashcard-front">

**P:** Escribe el comando para obtener y almacenar el trust anchor raíz de DNSSEC en el archivo `/var/lib/unbound/root.key` para el resolver Unbound. <input type="text" class="fill-blank" data-answer="unbound-anchor -a /var/lib/unbound/root.key" data-alt="" placeholder="$ escribe aqui...">

</div>
<div class="flashcard-back">

**R:** unbound-anchor -a /var/lib/unbound/root.key. `unbound-anchor` descarga, verifica e instala el trust anchor raíz de DNSSEC. La opción `-a` especifica la ruta del archivo donde se almacenará la clave. Este archivo es referenciado por la directiva `auto-trust-anchor-file` en la configuración de Unbound para habilitar la validación DNSSEC.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-026">
<div class="flashcard-front">

**P:** Tip de examen: Este subtema tiene peso 5. Domina el flujo completo de DNSSEC: generación de cla...

</div>
<div class="flashcard-back">

**R:** Este subtema tiene peso 5. Domina el flujo completo de DNSSEC: generación de claves, firma de zonas, registros DS y la cadena de confianza. Conoce también DANE/TLSA y TSIG.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-027">
<div class="flashcard-front">

**P:** Tip de examen: La KSK firma las claves DNSKEY, y su hash se publica como registro DS en la zona...

</div>
<div class="flashcard-back">

**R:** La KSK firma las claves DNSKEY, y su hash se publica como registro DS en la zona padre. La ZSK firma los registros normales de la zona. Esta separación facilita la rotación de claves.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-028">
<div class="flashcard-front">

**P:** Tip de examen: La rotación de ZSK es más frecuente y sencilla (no implica cambios en la zona pa...

</div>
<div class="flashcard-back">

**R:** La rotación de ZSK es más frecuente y sencilla (no implica cambios en la zona padre). La rotación de KSK requiere coordinación con el registrador para actualizar el registro DS.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-029">
<div class="flashcard-front">

**P:** Tip de examen: DANE-EE (uso=3) es el más usado. Significa que el certificado del servidor se au...

</div>
<div class="flashcard-back">

**R:** DANE-EE (uso=3) es el más usado. Significa que el certificado del servidor se autentica directamente por DNS, sin necesidad de validar la cadena de CA.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-030">
<div class="flashcard-front">

**P:** Que es/son Introducción?

</div>
<div class="flashcard-back">

**R:** El Sistema de Nombres de Dominio (DNS) fue diseñado originalmente sin mecanismos de seguridad. DNSSEC añade autenticación e integridad a las respuestas DNS mediante firmas criptográficas. Además, tecno

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-031">
<div class="flashcard-front">

**P:** Que es/son NSEC vs NSEC3?

</div>
<div class="flashcard-back">

**R:** | Característica | NSEC | NSEC3 |

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-032">
<div class="flashcard-front">

**P:** Que es/son DANE y Registros TLSA?

</div>
<div class="flashcard-back">

**R:** DANE (DNS-based Authentication of Named Entities) permite asociar certificados TLS directamente a nombres DNS mediante registros TLSA, reduciendo la dependencia de las CAs.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="331.4">
</div>

<div class="flashcard" data-id="331.4-fc-033">
<div class="flashcard-front">

**P:** Que es/son TSIG (Transaction Signature)?

</div>
<div class="flashcard-back">

**R:** TSIG autentica transferencias de zona y actualizaciones dinámicas DNS mediante claves simétricas compartidas.

</div>
</div>

---

