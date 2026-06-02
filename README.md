# Pingunix — LPIC & Hacking Vault

Plataforma interactiva de estudio en **español** para las certificaciones Linux del LPI (LPIC-1, LPIC-2 y LPIC-3) y para seguridad informática ofensiva/defensiva. Todo el contenido funciona como sitio web estático sin necesidad de registro, backend ni conexión a internet una vez cargado.

**[→ Acceder al sitio web](https://rricajos.github.io/pingunix)**

---

## Estadisticas del proyecto

| Metrica | Valor |
|---------|-------|
| Paginas de contenido | **821** |
| Subtemas completos | **143** |
| Flashcards (SM-2) | **2.282** |
| Preguntas de practica MCQ | **1.414** |
| Preguntas de simulacro | **480** (8 examenes × 60) |
| Mazos Anki descargables | **4** (LPIC-1/2/3 + Hacking) |
| Certificaciones cubiertas | LPIC-1, LPIC-2, LPIC-3 (300/303/305/306) |

---

## Funcionalidades

### Herramientas de estudio interactivas
- **Quiz runner** — modo practica y modo examen con cronometro, puntuacion y feedback por pregunta
- **Simulacro de examen** — 60 preguntas por examen, correccion automatica con desglose por subtema
- **Flashcards con repeticion espaciada** — algoritmo SM-2 identico al de Anki (intervalo, easeFactor, repasos)
- **Dashboard de progreso** — estadisticas de estudio, tarjetas vencidas hoy, historico de sesiones
- **Exportar / importar progreso** — descarga tu progreso en JSONL y restauralo en otro dispositivo

### Accesibilidad del contenido
- **Busqueda full-text** en todas las 821 paginas
- **Grafo interactivo** de nodos conectados al estilo Obsidian
- **Dark mode** y diseno responsive (movil, tablet, escritorio)
- **Copiar comandos** con un clic en todos los bloques de codigo
- **Descarga de mazos Anki** (.apkg) por certificacion para usar en la app oficial

---

## Estructura del contenido

```
content/
├── lpic-1/                  42 subtemas — Examenes 101 y 102
│   ├── 101-exam/            Temas 101-104 (Arquitectura, paquetes, shell, archivos)
│   └── 102-exam/            Temas 105-110 (Shell avanzado, GUI, admin, red)
│
├── lpic-2/                  41 subtemas — Examenes 201 y 202
│   ├── 201-exam/            Temas 200-205 (Kernel, filesystems, DNS, web, FTP)
│   └── 202-exam/            Temas 206-212 (Samba, LDAP, correo, SSH, seguridad)
│
├── lpic-3/                  60 subtemas — 4 especializaciones
│   ├── 300-entornos-mixtos/ Temas 301-304 (Samba, OpenLDAP, AD, Kerberos)
│   ├── 303-seguridad/       Temas 331-335 (PKI, IDS, MAC, VPN, seguridad red)
│   ├── 305-virtualizacion/  Temas 351-353 (KVM, contenedores, Kubernetes)
│   └── 306-alta-disponib/   Temas 361-364 (Pacemaker, DRBD, LB, Ceph)
│
├── hacking-vault/           Seguridad ofensiva y defensiva
│   ├── ofensivo/            Reconocimiento, enumeracion, explotacion, post-ex, IS, CTF
│   └── defensivo/           Blue Team, hardening, firewalls, criptografia
│
├── simulacros/              8 simulacros de examen completos
│   ├── lpic-1/              Simulacro 101 (60 q) + Simulacro 102 (60 q)
│   ├── lpic-2/              Simulacro 201 (60 q) + Simulacro 202 (60 q)
│   └── lpic-3/              Simulacros 300, 303, 305, 306 (60 q cada uno)
│
└── recursos/                Glosario, cheatsheets, bibliografia
```

### Cada subtema incluye

| Archivo | Contenido |
|---------|-----------|
| `index.md` | Objetivos del examen, peso, lista de utilidades clave |
| `teoria.md` | Contenido teorico detallado con tips de examen |
| `comandos-clave.md` | Referencia rapida: sintaxis, opciones, ejemplos |
| `ejercicios.md` | 10 preguntas MCQ con respuesta y explicacion |
| `flashcards.md` | Tarjetas de repaso generadas desde ejercicios y teoria |

---

## Tecnologia

| Componente | Descripcion |
|------------|-------------|
| [Quartz v5](https://quartz.jzhao.xyz/) | Generador de sitio estatico (Markdown → HTML) |
| `quartz/static/study-tools.js` | Motor interactivo: quiz, flashcards SM-2, simulacro, dashboard |
| `quartz/static/study-tools.css` | Estilos de todas las herramientas interactivas |
| `scripts/generate-flashcards.mjs` | Genera flashcards.md desde ejercicios.md y teoria.md |
| `scripts/generate-anki.mjs` | Genera mazos .apkg con sql.js + jszip |
| GitHub Actions | CI/CD: genera mazos Anki → build Quartz → deploy Pages |

---

## Desarrollo local

### Requisitos
- Node.js 22+
- npm

### Instalacion y arranque

```bash
git clone https://github.com/rricajos/pingunix.git
cd pingunix
npm install
npm run quartz -- plugin install
npm run quartz -- build --serve
```

Abrir `http://localhost:8080`

### Scripts de utilidad

```bash
# Regenerar todas las flashcards (desde ejercicios.md y teoria.md)
node scripts/generate-flashcards.mjs

# Generar mazos Anki (.apkg) para cada certificacion
node scripts/generate-anki.mjs
```

### Build de produccion

El deploy se gestiona automaticamente via GitHub Actions al hacer push a `main`.
Ver `.github/workflows/deploy.yml` para la configuracion completa.

Para hacer un build local de produccion:

```bash
npm run quartz -- build
# Output en: public/
```

---

## Algoritmo SM-2 (repeticion espaciada)

Las flashcards implementan el algoritmo SM-2 original de Piotr Wozniak, el mismo que usa Anki:

- **Calidad 0** — Olvide completamente → reinicia el intervalo a 1 dia
- **Calidad 2** — Dificil → reinicia el intervalo
- **Calidad 3** — Bien → avanza: 1 → 6 → n×easeFactor dias
- **Calidad 4** — Facil → avanza con bonificacion
- **Calidad 5** — Perfecto → avanza con mayor bonificacion al easeFactor

El estado de cada tarjeta (easeFactor, intervalo, repeticiones, proxima revision) se guarda en `localStorage` y se puede exportar/importar desde el dashboard.

---

## Aviso legal

### Marcas registradas

**LPIC**, **LPIC-1**, **LPIC-2**, **LPIC-3** y el logotipo de LPI son marcas registradas del [Linux Professional Institute](https://www.lpi.org/). Este proyecto **no esta afiliado, patrocinado ni avalado** por el LPI. Los nombres se usan unicamente como referencia al contenido de estudio.

### Uso educativo

Este repositorio se ha creado con fines exclusivamente **educativos y de estudio personal**. Las preguntas de practica, flashcards y simulacros son de elaboracion propia y no reproducen examenes oficiales.

Para material oficial de preparacion: [lpi.org](https://www.lpi.org/our-certifications/)

### Contenido de seguridad informatica

La seccion **Hacking Vault** contiene informacion sobre tecnicas ofensivas y defensivas destinada a:

- Preparacion de certificaciones de seguridad
- Practica en entornos autorizados (CTFs, laboratorios, maquinas virtuales)
- Comprension defensiva de vectores de ataque

**El uso de estas tecnicas contra sistemas sin autorizacion explicita es ilegal.** El autor no se responsabiliza del uso indebido del contenido.

---

## Licencia

El codigo fuente se distribuye bajo licencia **MIT**. Ver [LICENSE](LICENSE).

---

## Autor

**Ricard Penin Honrubia** — [@rricajos](https://github.com/rricajos)
