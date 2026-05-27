/**
 * Genera paginas de simulacro de examen para cada examen LPIC
 * Extrae preguntas de ejercicios.md y crea simulacros de 60 preguntas con timer
 */

import { readdirSync, statSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, basename } from 'path'

const CONTENT = join(process.cwd(), 'content')

const EXAMS = [
  { id: '101', cert: 'lpic-1', dir: join(CONTENT, 'lpic-1', '101-exam'), total: 60, minutes: 90 },
  { id: '102', cert: 'lpic-1', dir: join(CONTENT, 'lpic-1', '102-exam'), total: 60, minutes: 90 },
  { id: '201', cert: 'lpic-2', dir: join(CONTENT, 'lpic-2', '201-exam'), total: 60, minutes: 90 },
  { id: '202', cert: 'lpic-2', dir: join(CONTENT, 'lpic-2', '202-exam'), total: 60, minutes: 90 },
]

// ── Find subtopic dirs ──
function findSubtopicDirs(dir) {
  const results = []
  if (!existsSync(dir)) return results
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (!statSync(full).isDirectory()) continue
    if (/^\d+\.\d+/.test(entry)) {
      results.push(full)
    } else {
      results.push(...findSubtopicDirs(full))
    }
  }
  return results
}

// ── Extract questions from ejercicios.md ──
function extractQuestions(filepath) {
  if (!existsSync(filepath)) return []
  const content = readFileSync(filepath, 'utf-8').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const questions = []

  const questionRegex = /### Pregunta \d+\n([\s\S]*?)<details>\s*\n\s*<summary>Respuesta<\/summary>\s*\n([\s\S]*?)<\/details>/g
  let match
  while ((match = questionRegex.exec(content)) !== null) {
    const questionBlock = match[1].trim()
    const answerBlock = match[2].trim()

    const lines = questionBlock.split('\n').filter(l => l.trim())
    let question = ''
    const options = []
    for (const line of lines) {
      if (/^[a-d]\)/.test(line.trim())) {
        options.push(line.trim())
      } else if (question === '') {
        question = line.trim()
      } else if (!question.endsWith('?')) {
        question += ' ' + line.trim()
      }
    }

    const boldMatch = answerBlock.match(/\*\*(.+?)\*\*/)
    const correctFull = boldMatch ? boldMatch[1] : ''
    const correctLetter = correctFull.match(/^([a-d])\)/) ? correctFull.match(/^([a-d])\)/)[1] : ''
    const explanation = answerBlock.replace(/\*\*(.+?)\*\*\s*\n?/, '').trim()

    if (question && options.length >= 2 && correctLetter) {
      questions.push({ question, options, correctLetter, correctFull, explanation })
    }
  }
  return questions
}

// ── Shuffle array ──
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Generate simulacro page ──
function generateSimulacro(exam) {
  const subtopicDirs = findSubtopicDirs(exam.dir)
  const allQuestions = []

  for (const dir of subtopicDirs) {
    const dirName = basename(dir)
    const subtemaMatch = dirName.match(/^(\d+\.\d+)/)
    if (!subtemaMatch) continue
    const subtema = subtemaMatch[1]
    const ejerciciosPath = join(dir, 'ejercicios.md')
    const questions = extractQuestions(ejerciciosPath)
    for (const q of questions) {
      allQuestions.push({ ...q, subtema })
    }
  }

  if (allQuestions.length === 0) {
    console.log(`  SKIP: Examen ${exam.id} - sin preguntas`)
    return 0
  }

  // Select questions (up to exam.total, shuffled)
  const selected = shuffle(allQuestions).slice(0, exam.total)

  let md = `---
title: "Simulacro Examen ${exam.id}"
tags:
  - ${exam.cert}
  - examen-${exam.id}
  - simulacro
tipo: simulacro
certificacion: ${exam.cert}
examen: "${exam.id}"
---

# Simulacro - Examen ${exam.id}

> **Instrucciones:** ${selected.length} preguntas, ${exam.minutes} minutos. Pulsa "Iniciar examen" para activar el temporizador. Al finalizar, revisa tus respuestas con "Corregir examen".

<div class="exam-simulator" data-exam="${exam.id}" data-duration="${exam.minutes}" data-total="${selected.length}">

<div class="exam-controls">
<button class="exam-start-btn" onclick="this.parentElement.parentElement.classList.add('exam-active'); this.style.display='none'; startExamTimer(this.parentElement.parentElement);">Iniciar examen</button>
<div class="exam-timer" style="display:none;">Tiempo restante: <span class="exam-time">${exam.minutes}:00</span></div>
<button class="exam-submit-btn" style="display:none;" onclick="gradeExam(this.parentElement.parentElement);">Corregir examen</button>
</div>

`

  for (let i = 0; i < selected.length; i++) {
    const q = selected[i]
    const num = i + 1

    md += `<div class="exam-question" data-id="q-${num}" data-subtema="${q.subtema}" data-correct="${q.correctLetter}">

### Pregunta ${num} (Subtema ${q.subtema})

${q.question}

${q.options.map(o => `- [ ] ${o}`).join('\n')}

<details class="exam-answer">
<summary>Ver respuesta</summary>

**${q.correctFull}**

${q.explanation}

</details>

</div>

---

`
  }

  md += `<div class="exam-results" style="display:none;">

### Resultados

<div class="exam-score"></div>
<div class="exam-breakdown"></div>

</div>

</div>
`

  const outputPath = join(exam.dir, `simulacro-${exam.id}.md`)
  writeFileSync(outputPath, md, 'utf-8')
  console.log(`  Examen ${exam.id}: ${selected.length} preguntas (de ${allQuestions.length} disponibles)`)
  return selected.length
}

// ── Generate index page ──
function generateIndex() {
  const indexDir = join(CONTENT, 'simulacros')
  if (!existsSync(indexDir)) mkdirSync(indexDir, { recursive: true })

  const md = `---
title: "Simulacros de Examen"
tags:
  - simulacro
  - indice
tipo: indice-simulacros
---

# Simulacros de Examen

Practica con simulacros completos que replican las condiciones reales del examen: 60 preguntas, 90 minutos, correccion automatica.

## LPIC-1: Administrador Linux

| Examen | Temas | Enlace |
|--------|-------|--------|
| 101-500 | Arquitectura, instalacion, GNU/Unix, dispositivos, filesystems | [[lpic-1/101-exam/simulacro-101|Simulacro 101]] |
| 102-500 | Shells, interfaces, tareas admin, servicios, red, seguridad | [[lpic-1/102-exam/simulacro-102|Simulacro 102]] |

## LPIC-2: Ingeniero Linux

| Examen | Temas | Enlace |
|--------|-------|--------|
| 201-450 | Capacidad, kernel, arranque, filesystems, almacenamiento, red, mantenimiento | [[lpic-2/201-exam/simulacro-201|Simulacro 201]] |
| 202-450 | DNS, HTTP, comparticion, LDAP/PAM, correo, seguridad | [[lpic-2/202-exam/simulacro-202|Simulacro 202]] |

## Instrucciones

1. **Prepara tu entorno**: Busca un lugar tranquilo, sin interrupciones
2. **Pulsa "Iniciar examen"**: Se activara el temporizador de 90 minutos
3. **Responde todas las preguntas**: Marca una opcion por pregunta
4. **Pulsa "Corregir examen"**: Veras tu puntuacion y las respuestas correctas
5. **Repasa los errores**: Cada respuesta incluye explicacion detallada

> **Nota:** Para aprobar el examen real se necesita un ~65-70% de aciertos (LPI no publica el umbral exacto). Intenta superar el 75% en estos simulacros.
`

  writeFileSync(join(indexDir, 'index.md'), md, 'utf-8')
  console.log('\n  Index de simulacros creado')
}

// ── Main ──
console.log('=== Generando simulacros de examen ===\n')

let total = 0
for (const exam of EXAMS) {
  total += generateSimulacro(exam)
}

generateIndex()

console.log(`\n=== Total: ${total} preguntas en ${EXAMS.length} simulacros ===`)
