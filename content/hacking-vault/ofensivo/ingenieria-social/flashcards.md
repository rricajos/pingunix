---
title: "Flashcards - Ingenieria Social"
tags:
  - hacking
  - ofensivo
  - ingenieria-social
  - flashcards
  - repaso
tipo: flashcards
certificacion: hacking-vault
subtema: "ingenieria-social"
---

# Flashcards: Ingenieria Social

> 18 tarjetas de repaso. Usa el sistema de repeticion espaciada para memorizar.

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-001">
<div class="flashcard-front">

**P:** Cuales son los seis principios de influencia de Robert Cialdini que explotan los ingenieros sociales?

</div>
<div class="flashcard-back">

**R:** 1) **Reciprocidad**: obligacion de devolver favores. 2) **Autoridad**: tendencia a obedecer figuras de autoridad. 3) **Urgencia/Escasez**: la presion temporal reduce el pensamiento critico. 4) **Compromiso/Consistencia**: buscar coherencia con acciones previas. 5) **Prueba social**: si otros lo hacen, debe estar bien. 6) **Simpatia**: es mas facil decir si a personas que nos agradan.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-002">
<div class="flashcard-front">

**P:** Cual es la diferencia entre phishing masivo, spear phishing y whaling?

</div>
<div class="flashcard-back">

**R:** **Phishing masivo**: correos genericos enviados a miles de destinatarios con baja sofisticacion. **Spear phishing**: correos personalizados para un individuo o grupo pequeno con alta sofisticacion, basados en OSINT previo. **Whaling**: spear phishing dirigido especificamente a ejecutivos de alto nivel (CEO, CFO) con muy alta sofisticacion y pretextos de negocio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-003">
<div class="flashcard-front">

**P:** Que es el vishing y el smishing y como se diferencian del phishing tradicional?

</div>
<div class="flashcard-back">

**R:** **Vishing** (Voice phishing): ataque de ingenieria social realizado por **llamada telefonica**, donde el atacante se hace pasar por soporte tecnico, banco, etc. **Smishing** (SMS phishing): ataque via **mensajes de texto/SMS** con enlaces maliciosos. Ambos complementan al phishing por correo y explotan la confianza en canales de comunicacion diferentes.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-004">
<div class="flashcard-front">

**P:** Que es el typosquatting y como se usa en correos de phishing?

</div>
<div class="flashcard-back">

**R:** El typosquatting consiste en registrar dominios con errores tipograficos similares al legitimo para enganar visualmente. Ejemplos: `ernpresa.com` (m->rn), `empressa.com` (doble s), `empresa-soporte.com` (subdominio falso). En phishing, el remitente usa estos dominios para que el correo parezca provenir de la organizacion real: `soporte@ernpresa.com` en lugar de `soporte@empresa.com`.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-005">
<div class="flashcard-front">

**P:** Cuales son las cuatro fases del modelo de ataque de ingenieria social?

</div>
<div class="flashcard-back">

**R:** **Fase 1 - Investigacion (OSINT)**: identificar objetivo, recopilar informacion publica, mapear estructura organizacional. **Fase 2 - Desarrollo del pretexto**: crear identidad creible, preparar materiales de soporte, ensayar. **Fase 3 - Ejecucion**: establecer contacto, construir confianza (rapport), explotar principio psicologico. **Fase 4 - Salida**: finalizar sin levantar sospechas, documentar resultados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-006">
<div class="flashcard-front">

**P:** Que es SET (Social Engineering Toolkit) y como se usa para clonar un sitio web y capturar credenciales?

</div>
<div class="flashcard-back">

**R:** SET es un framework para simular ataques de ingenieria social. Para clonar: 1) Social-Engineering Attacks, 2) Website Attack Vectors, 3) Credential Harvester Attack Method, 2) Site Cloner. Se introduce la IP del atacante y la URL a clonar. SET crea una replica exacta; las credenciales introducidas se capturan y el usuario es redirigido al sitio real.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-007">
<div class="flashcard-front">

**P:** Que indicadores permiten identificar un correo de phishing?

</div>
<div class="flashcard-back">

**R:** Remitente con dominio sospechoso o ligeramente diferente, errores ortograficos inusuales, saludo generico ("Estimado usuario"), urgencia extrema, enlaces que no coinciden al pasar el cursor, solicitud de credenciales, adjuntos inesperados con extensiones sospechosas, cabeceras inconsistentes (Return-Path, SPF, DKIM), solicitud de deshabilitar seguridad ("habilitar macros").

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-008">
<div class="flashcard-front">

**P:** Que es el pretexting y que elementos debe tener un pretexto creible?

</div>
<div class="flashcard-back">

**R:** El pretexting es crear un escenario ficticio para convencer al objetivo de realizar una accion. Un buen pretexto necesita: identidad verificable (nombre, cargo), razon logica para la solicitud, conocimiento de la jerga de la organizacion, informacion de contexto real (nombres de jefes, proyectos), contacto de respaldo, respuestas preparadas para preguntas de validacion y plan de salida si falla.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-009">
<div class="flashcard-front">

**P:** Que es el tailgating (piggybacking) y cuales son sus contramedidas?

</div>
<div class="flashcard-back">

**R:** El tailgating consiste en seguir a un empleado autorizado a traves de una puerta de acceso controlado sin presentar credenciales. Tecnicas: llevar las manos ocupadas, simular hablar por telefono, vestir uniforme. **Contramedidas**: politicas de "una persona, una tarjeta", mantraps (esclusas de seguridad), guardias en puntos de acceso y concienciacion de empleados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-010">
<div class="flashcard-front">

**P:** Que es el dumpster diving y que tipo de informacion sensible se puede encontrar?

</div>
<div class="flashcard-back">

**R:** El dumpster diving es buscar informacion sensible en la basura de una organizacion. Se pueden encontrar: documentos impresos sin destruir, notas adhesivas con passwords, organigramas y directorios internos, manuales tecnicos y diagramas de red, dispositivos de almacenamiento desechados, tarjetas de acceso caducadas. Contramedidas: trituradoras de documentos y contenedores con llave.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-011">
<div class="flashcard-front">

**P:** Que es el shoulder surfing y que contramedidas existen?

</div>
<div class="flashcard-back">

**R:** El shoulder surfing es observar a alguien mientras introduce credenciales, PIN o informacion sensible. Ubicaciones comunes: cajeros automaticos, espacios de trabajo abiertos, cafeterias, transporte publico. Tecnicas modernas incluyen camaras discretas y grabacion de video. **Contramedidas**: filtros de privacidad para pantallas, cubrir el teclado al introducir PIN, autenticacion biometrica.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-012">
<div class="flashcard-front">

**P:** Que controles tecnicos ayudan a prevenir ataques de phishing por correo electronico?

</div>
<div class="flashcard-back">

**R:** **Filtrado de correo**: SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), DMARC (Domain-based Message Authentication), filtros anti-spam y sandboxing de adjuntos. **Endpoint**: bloqueo de macros por defecto en Office, filtrado de URLs, MFA en todos los sistemas. **Red**: DNS filtering, proxy web con inspeccion SSL, bloqueo de dominios recien registrados.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-013">
<div class="flashcard-front">

**P:** Que componentes debe tener un programa efectivo de concienciacion contra ingenieria social?

</div>
<div class="flashcard-back">

**R:** 1) **Formacion inicial**: sesion obligatoria para nuevos empleados sobre tipos de ataques y procedimientos de reporte. 2) **Formacion continua**: recordatorios periodicos, actualizacion de amenazas, microlearning. 3) **Simulaciones**: campanas de phishing simulado, vishing, tailgating controlado. 4) **Metricas**: tasa de clic en phishing, tasa de reporte, tiempo medio de reporte, mejora respecto a evaluaciones anteriores.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-014">
<div class="flashcard-front">

**P:** Que tipos de adjuntos maliciosos se usan comunmente en correos de phishing?

</div>
<div class="flashcard-back">

**R:** Documentos Office con macros (`.docm`, `.xlsm`), PDFs con enlaces maliciosos, archivos comprimidos con ejecutables (`.zip` conteniendo `.exe`), archivos HTML que simulan paginas de login. El atacante suele solicitar al usuario "habilitar macros" o "habilitar contenido" para que el payload se ejecute.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-015">
<div class="flashcard-front">

**P:** Que herramientas de OSINT usarias para preparar un ataque de spear phishing contra una organizacion?

</div>
<div class="flashcard-back">

**R:** **LinkedIn**: estructura organizacional, nombres, cargos y tecnologias (en ofertas de empleo). **theHarvester**: correos corporativos. **hunter.io** y **phonebook.cz**: busqueda de correos por dominio. **haveibeenpwned.com**: verificar credenciales filtradas. **sherlock**: buscar usuario en multiples redes sociales. **Maltego**: mapeo visual de relaciones. **SpiderFoot**: OSINT automatizado.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-016">
<div class="flashcard-front">

**P:** Que protocolo de verificacion deberia seguirse ante una solicitud sospechosa en una organizacion?

</div>
<div class="flashcard-back">

**R:** 1) **Verificar identidad**: no confiar solo en el identificador de llamada (spoofeable), verificar por canal independiente, solicitar numero de empleado. 2) **Verificar solicitud**: evaluar si es normal para ese rol, si existe proceso formal, por que hay urgencia. 3) **Escalamiento**: ante la duda, escalar a supervisor, reportar al equipo de seguridad, no proporcionar nada hasta completar la verificacion.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-017">
<div class="flashcard-front">

**P:** Que requisitos legales y eticos deben cumplirse antes de ejecutar un ejercicio de ingenieria social?

</div>
<div class="flashcard-back">

**R:** **Legales**: contrato firmado especificando tecnicas permitidas, alcance claro, clausulas de confidencialidad, limites definidos, contacto de emergencia. **Eticos**: no causar dano psicologico, no usar informacion personal fuera del alcance, no humillar publicamente a quienes caigan, reportar de forma constructiva. Involucrar a RRHH y al departamento legal antes del ejercicio.

</div>
</div>

---

<div class="flashcard-deck" data-subtema="ingenieria-social">
</div>

<div class="flashcard" data-id="ingsoc-fc-018">
<div class="flashcard-front">

**P:** Que es el clone phishing y como se diferencia del spear phishing?

</div>
<div class="flashcard-back">

**R:** El **clone phishing** replica un correo legitimo que el objetivo ya recibio previamente, reemplazando enlaces o adjuntos por versiones maliciosas. Es muy efectivo porque el destinatario ya confia en ese formato. El **spear phishing** es un correo personalizado pero nuevo, basado en OSINT sobre el objetivo. Ambos tienen alta sofisticacion, pero el clone phishing se aprovecha de la confianza preexistente.

</div>
</div>

---
