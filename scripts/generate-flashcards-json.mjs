/**
 * Genera flashcards-all.json con todas las tarjetas para la PWA pingunix-cards.
 * Reutiliza la misma lógica de extracción que generate-flashcards.mjs.
 */

import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join, basename } from 'path'

const CONTENT = join(process.cwd(), 'content')
const OUTPUT = join(process.cwd(), 'quartz', 'static', 'flashcards-all.json')

const CERTS = [
  { name: 'lpic-1', dir: join(CONTENT, 'lpic-1'), tag: 'lpic-1' },
  { name: 'lpic-2', dir: join(CONTENT, 'lpic-2'), tag: 'lpic-2' },
  { name: 'lpic-3', dir: join(CONTENT, 'lpic-3'), tag: 'lpic-3' },
]

// ── Find all subtopic directories ──
function findSubtopicDirs(dir) {
  const results = []
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

// ── Extract Q&A from ejercicios.md ──
function extractFromExercises(filepath) {
  if (!existsSync(filepath)) return []
  const content = readFileSync(filepath, 'utf-8').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const cards = []

  const questionRegex = /### Pregunta \d+\n([\s\S]*?)<details>\s*(?:\n\s*)?<summary>Respuesta<\/summary>\s*\n([\s\S]*?)<\/details>/g
  let match
  while ((match = questionRegex.exec(content)) !== null) {
    const questionBlock = match[1].trim()
    const answerBlock = match[2].trim()

    const lines = questionBlock.split('\n').filter(l => l.trim())
    let question = ''
    for (const line of lines) {
      if (/^[a-d]\)/.test(line.trim())) continue
      if (question === '') {
        question = line.trim()
      } else if (!question.endsWith('?')) {
        question += ' ' + line.trim()
      }
    }

    const boldMatch = answerBlock.match(/\*\*(.+?)\*\*/)
    const correctAnswer = boldMatch ? boldMatch[1] : ''
    const explanation = answerBlock.replace(/\*\*(.+?)\*\*\s*\n?/, '').trim()

    if (question && correctAnswer) {
      let answer = correctAnswer
      if (explanation) answer += '. ' + explanation
      cards.push({ question, answer })
    }
  }

  return cards
}

// ── Headings that produce useless flashcards ──
const GENERIC_HEADINGS = new Set([
  'introduccion', 'resumen', 'resumen para el examen', 'objetivos',
  'requisitos', 'conclusion', 'conclusiones', 'indice', 'contenido',
  'navegacion', 'archivos', 'referencia', 'referencias', 'notas',
  'recursos', 'enlaces', 'practica', 'ejercicios', 'tip de examen',
  'conceptos clave', 'puntos clave', 'comandos clave', 'comandos principales',
  'ejemplo', 'ejemplos', 'sintaxis', 'formato', 'opciones',
  'trampas del examen',
])

const TRUNCATION_ENDINGS = /\s+(de|del|en|el|la|los|las|un|una|al|con|por|para|que|y|o|e|a|su|sus|se|lo|como|entre|sobre|desde|hasta|sin|hacia|ante|bajo|contra|mediante|segun|tras|durante)\s*\.?$/i

// ── Extract key concepts from teoria.md ──
function extractFromTheory(filepath) {
  if (!existsSync(filepath)) return []
  const content = readFileSync(filepath, 'utf-8').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const cards = []

  const examTipRegex = />\s*\*\*Para el examen:?\*\*:?\s*([\s\S]*?)(?=\n\n|\n>|\n#)/g
  let match
  while ((match = examTipRegex.exec(content)) !== null) {
    const tip = match[1].replace(/^>\s*/gm, '').trim()
    if (tip.length > 30 && !TRUNCATION_ENDINGS.test(tip)) {
      cards.push({
        question: 'Tip de examen: ' + tip.substring(0, 80) + (tip.length > 80 ? '...' : ''),
        answer: tip
      })
    }
  }

  const tableRowRegex = /\|\s*`([^`]+)`\s*\|\s*([^|]+)\|/g
  const commandCards = []
  while ((match = tableRowRegex.exec(content)) !== null) {
    const cmd = match[1].trim()
    const desc = match[2].trim()
    if (cmd && desc && desc.length >= 30
        && desc !== 'Descripcion' && desc !== 'Comando'
        && !desc.startsWith('---') && !desc.startsWith('`')
        && !TRUNCATION_ENDINGS.test(desc)) {
      commandCards.push({ question: `Que hace el comando \`${cmd}\`?`, answer: desc })
    }
  }
  cards.push(...commandCards.slice(0, 5))

  const sectionRegex = /^## (.+)\n\n([^#\n].{30,200})/gm
  while ((match = sectionRegex.exec(content)) !== null) {
    const heading = match[1].trim()
    const text = match[2].trim()
    const answer = text.split('\n')[0]
    if (!GENERIC_HEADINGS.has(heading.toLowerCase())
        && answer.length >= 30
        && !TRUNCATION_ENDINGS.test(answer)) {
      cards.push({
        question: `Que es/son ${heading}?`,
        answer
      })
    }
  }

  return cards
}

// ── Strip markdown formatting for plain text display ──
function stripMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '$1')       // bold
    .replace(/\*(.+?)\*/g, '$1')            // italic
    .replace(/`([^`]+)`/g, '$1')            // inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/\n/g, ' ')
    .trim()
}

// ── Main ──
const allCards = []

for (const cert of CERTS) {
  if (!existsSync(cert.dir)) continue

  const subtopicDirs = findSubtopicDirs(cert.dir)

  for (const dir of subtopicDirs) {
    const dirName = basename(dir)
    const subtemaMatch = dirName.match(/^(\d+\.\d+)-(.+)/)
    if (!subtemaMatch) continue

    const subtemaNum = subtemaMatch[1]

    const ejerciciosPath = join(dir, 'ejercicios.md')
    const teoriaPath = join(dir, 'teoria.md')

    const exerciseCards = extractFromExercises(ejerciciosPath)
    const theoryCards = extractFromTheory(teoriaPath)

    // Deduplicate
    const cards = [...exerciseCards]
    for (const tc of theoryCards) {
      const isDup = cards.some(ec =>
        ec.question.toLowerCase().includes(tc.question.toLowerCase().substring(0, 30)) ||
        tc.question.toLowerCase().includes(ec.question.toLowerCase().substring(0, 30))
      )
      if (!isDup) cards.push(tc)
    }

    for (let i = 0; i < cards.length; i++) {
      allCards.push({
        id: `${subtemaNum}-fc-${String(i + 1).padStart(3, '0')}`,
        q: stripMarkdown(cards[i].question),
        a: stripMarkdown(cards[i].answer),
        cert: cert.tag,
        subtema: subtemaNum,
      })
    }
  }
}

writeFileSync(OUTPUT, JSON.stringify(allCards), 'utf-8')

const byC = {}
for (const c of allCards) {
  byC[c.cert] = (byC[c.cert] || 0) + 1
}
console.log(`flashcards-all.json: ${allCards.length} tarjetas`)
for (const [cert, count] of Object.entries(byC)) {
  console.log(`  ${cert}: ${count}`)
}
console.log(`Output: ${OUTPUT}`)
