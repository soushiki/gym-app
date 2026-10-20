import { ADJECTIVES, DAYS, EXERCISES_ES, MUSCLES, PHRASES, SUBSTITUTES } from './exercises.es'
import { EXERCISES } from '../utils/swoldier'
import { prettify } from '../utils/guide'

const GENDER_INDEX = { m: 0, f: 1, mp: 2, fp: 3 }

function tidy(text) {
    return text.replace(/\s+/g, ' ').replace(/\s+\(/g, ' (').trim()
}

// "neutral_grip_incline" -> adjective "incline" + phrase "neutral_grip".
function splitVariant(variant) {
    for (const prefix of ['neutral_grip_', 'rotating_']) {
        if (variant.startsWith(prefix)) {
            return { adjective: variant.slice(prefix.length), phrase: prefix.slice(0, -1) }
        }
    }
    return ADJECTIVES[variant] ? { adjective: variant } : { phrase: variant }
}

function spanishName(exercise) {
    const es = EXERCISES_ES[exercise.base]
    if (!es) return prettify(exercise.name)
    const { variant } = exercise
    if (!variant) return tidy(es.n.replace('{v}', ''))

    if (es.vn && variant in es.vn) return tidy(es.n.replace('{v}', es.vn[variant]))

    const { adjective, phrase } = splitVariant(variant)
    const adj = adjective ? ADJECTIVES[adjective][GENDER_INDEX[es.g]] : ''
    const note = phrase ? PHRASES[phrase] : ''
    return tidy(es.n.replace('{v}', adj) + (note ? ` (${note})` : ''))
}

export function exerciseName(exercise, lang) {
    return lang === 'es' ? spanishName(exercise) : prettify(exercise.name)
}

// Main instructions plus extra notes (variant details).
export function exerciseText(exercise, lang) {
    const es = lang === 'es' && EXERCISES_ES[exercise.base]
    if (!es) {
        const [howTo, ...notes] = exercise.description.split('___')
        return { howTo, notes }
    }
    const note = exercise.variant && es.v?.[exercise.variant]
    return { howTo: es.d, notes: note ? [note] : [] }
}

export function muscleName(muscle, lang) {
    if (lang !== 'es') return prettify(muscle)
    return MUSCLES[muscle] ?? DAYS[muscle] ?? prettify(muscle)
}

export function substituteNames(exercise, lang) {
    const list = (exercise.substitutes ?? [])
        .flatMap(s => s.split(','))
        .map(s => prettify(s).trim().toLowerCase())
        .filter(Boolean)
    return lang === 'es' ? list.map(s => SUBSTITUTES[s] ?? variantSubstitute(s) ?? s) : list
}

// Other variants of the same exercise, e.g. "incline barbell bench press".
function variantSubstitute(text) {
    const key = text.replaceAll(' ', '_')
    for (const [base, val] of Object.entries(EXERCISES)) {
        if (!val.variants || !key.endsWith('_' + base)) continue
        const variant = key.slice(0, -(base.length + 1))
        if (variant in val.variants) return spanishName({ base, variant, name: key }).toLowerCase()
    }
    return null
}
