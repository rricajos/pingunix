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

// ── Extract Q&A from exercises.md ──
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
    let correctAnswer = boldMatch ? boldMatch[1] : ''
    // Strip multiple-choice prefix (e.g. "c) lsmod" → "lsmod")
    correctAnswer = correctAnswer.replace(/^[a-d]\)\s*/, '')
    const explanation = answerBlock.replace(/\*\*(.+?)\*\*\s*\n?/, '').replace(/^\.\s*/, '').trim()

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

// ── Extract key concepts from theory.md ──
function extractFromTheory(filepath) {
  if (!existsSync(filepath)) return []
  const content = readFileSync(filepath, 'utf-8').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const cards = []

  const examTipRegex = />\s*\*\*Para el examen:?\*\*:?\s*([\s\S]*?)(?=\n\n|\n>|\n#)/g
  let match
  while ((match = examTipRegex.exec(content)) !== null) {
    const tip = match[1].replace(/^>\s*/gm, '').trim()
    if (tip.length > 30 && !TRUNCATION_ENDINGS.test(tip)) {
      // Use first sentence as question, full tip as answer
      const firstSentence = tip.match(/^[^.!?]+[.!?]/)
      const qText = firstSentence ? firstSentence[0].trim() : tip.substring(0, 80)
      cards.push({
        question: 'Tip de examen: ' + qText,
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
      // Distinguish commands from paths/files
      const isPath = /^\//.test(cmd)
      const question = isPath
        ? `Cual es el proposito de \`${cmd}\`?`
        : `Que hace el comando \`${cmd}\`?`
      commandCards.push({ question, answer: desc })
    }
  }
  cards.push(...commandCards.slice(0, 8))

  const sectionRegex = /^## (.+)\n\n([\s\S]*?)(?=\n## |\n# |$)/gm
  while ((match = sectionRegex.exec(content)) !== null) {
    const heading = match[1].trim()
    const body = match[2].trim()
    // Get first non-table, non-empty prose line
    const lines = body.split('\n')
    let answer = ''
    for (const line of lines) {
      const l = line.trim()
      if (!l) continue
      if (l.startsWith('|') || l.startsWith('---') || l.startsWith('```') || l.startsWith('>') || l.startsWith('- ')) continue
      answer = l
      break
    }
    if (!GENERIC_HEADINGS.has(heading.toLowerCase())
        && answer.length >= 30
        && !answer.startsWith('|')
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

    const ejerciciosPath = join(dir, 'exercises.md')
    const teoriaPath = join(dir, 'theory.md')

    const exerciseCards = extractFromExercises(ejerciciosPath)
    const theoryCards = extractFromTheory(teoriaPath)

    // Deduplicate — check both question and answer similarity
    const cards = [...exerciseCards]
    for (const tc of theoryCards) {
      const tqLow = tc.question.toLowerCase()
      const taLow = tc.answer.toLowerCase()
      const isDup = cards.some(ec => {
        const eqLow = ec.question.toLowerCase()
        const eaLow = ec.answer.toLowerCase()
        // Question overlap
        if (eqLow.includes(tqLow.substring(0, 30)) ||
            tqLow.includes(eqLow.substring(0, 30))) return true
        // Same answer core (first 50 chars)
        if (eaLow.substring(0, 50) === taLow.substring(0, 50)) return true
        return false
      })
      if (!isDup) cards.push(tc)
    }

    // Deduplicate within same subtema (e.g. fill-blank vs MC asking the same thing)
    function normalizeCore(text) {
      return text.replace(/`/g, '').replace(/\*\*/g, '').toLowerCase().split('.')[0].trim()
    }
    const uniqueCards = []
    for (const card of cards) {
      const coreAnswer = normalizeCore(card.answer)
      const aPlain = stripMarkdown(card.answer).toLowerCase()
      const isDup = uniqueCards.some(uc => {
        const ucCore = normalizeCore(uc.answer)
        // Same or overlapping core answer (e.g. "lsmod" vs "lsmod" or "modprobe" vs "modprobe gestiona...")
        if (coreAnswer === ucCore) return true
        if (coreAnswer.length >= 3 && ucCore.startsWith(coreAnswer + ' ')) return true
        if (ucCore.length >= 3 && coreAnswer.startsWith(ucCore + ' ')) return true
        // First 50 chars overlap after stripping markdown
        const ucPlain = stripMarkdown(uc.answer).toLowerCase()
        if (ucPlain.substring(0, 50) === aPlain.substring(0, 50)) return true
        return false
      })
      if (!isDup) uniqueCards.push(card)
    }

    for (let i = 0; i < uniqueCards.length; i++) {
      const a = stripMarkdown(uniqueCards[i].answer)
      if (a.length < 40) continue // Skip very short answers
      allCards.push({
        id: `${subtemaNum}-fc-${String(i + 1).padStart(3, '0')}`,
        q: stripMarkdown(uniqueCards[i].question),
        a: a,
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
