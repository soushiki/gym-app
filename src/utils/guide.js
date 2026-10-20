// Beginner-friendly settings. Keys match swoldier.js; the text for each
// option lives in src/i18n/ui.js (e.g. 'level.beginner', 'level.beginner.text').

export const LEVELS = {
    beginner: { icon: 'fa-seedling', sets: 3, maxExercises: 4 },
    intermediate: { icon: 'fa-person-walking', sets: 4, maxExercises: 5 },
    advanced: { icon: 'fa-person-running', sets: 5, maxExercises: 6 },
}

export const LOCATIONS = {
    gym: { icon: 'fa-dumbbell' },
    home: { icon: 'fa-house' },
}

export const RECOMMENDED_PLAN = 'upper_lower'

export const GOALS = {
    strength_power: { icon: 'fa-weight-hanging' },
    growth_hypertrophy: { icon: 'fa-dumbbell' },
    cardiovascular_endurance: { icon: 'fa-heart-pulse' },
}

export function prettify(key) {
    return key.replaceAll('_', ' ')
}

export function formatRest(seconds, t) {
    if (seconds < 60) return t('time.sec', { s: seconds })
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return s ? t('time.minSec', { m, s }) : t('time.min', { m })
}

export function explainTempo(tempo, t) {
    const [down, pause, up] = tempo.split(' ')
    return t('tempo.explain', { down, pause, up })
}

// Rough session length: work time + rest time across all sets, in minutes.
export function estimateMinutes(workout, sets) {
    const seconds = workout.reduce((acc, ex) => {
        const tempoSum = ex.tempo.split(' ').reduce((a, c) => a + parseInt(c), 0)
        const work = ex.unit === 'reps' ? ex.reps * tempoSum : ex.reps
        return acc + sets * (work + ex.rest)
    }, 0)
    return Math.max(5, Math.round(seconds / 60 / 5) * 5)
}

export function youtubeSearch(name, suffix) {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} ${suffix}`)}`
}
