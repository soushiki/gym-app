import React, { useState } from 'react'
import Term from './Term'
import { explainTempo, formatRest, youtubeSearch } from '../utils/guide'
import { exerciseName, exerciseText, muscleName, substituteNames } from '../i18n/exercises'
import { useLang } from '../i18n/LangContext'

export default function ExerciseCard({exercise, i, sets, setsDone, onSetToggle}) {

    const [showMore, setShowMore] = useState(false);
    const { lang, t } = useLang();
    const name = exerciseName(exercise, lang);
    const { howTo, notes } = exerciseText(exercise, lang);
    const substitutes = substituteNames(exercise, lang);
    const finished = setsDone.every(Boolean);
    const isReps = exercise.unit === 'reps';

    return (
        <article className={'p-4 rounded-md flex flex-col gap-4 bg-slate-950 border-2 duration-200 '
            + (finished ? 'border-blue-400/60' : 'border-transparent')}
            aria-label={t('card.label', { n: i+1, name })}>
            <div className='flex items-start gap-4'>
                <h4 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400' aria-hidden='true'>
                    {String(i+1).padStart(2, '0')}
                </h4>
                <div className='flex flex-col gap-1 flex-1 min-w-0'>
                    <h3 className='first-letter:uppercase text-lg sm:text-xl md:text-2xl break-words'>{name}</h3>
                    <div className='flex flex-wrap gap-2 text-xs'>
                        <span className={'px-2 py-0.5 rounded-full ' + (exercise.type === 'compound' ? 'bg-blue-400 text-slate-950' : 'bg-slate-800 text-blue-300')}>
                            <Term term={exercise.type} label={t(`type.${exercise.type}`)}/>
                        </span>
                        {exercise.muscles.map(m => (
                            <span key={m} className='px-2 py-0.5 rounded-full border border-slate-700 capitalize text-slate-300'>{muscleName(m, lang)}</span>
                        ))}
                    </div>
                </div>
                {finished && <i className='fa-solid fa-circle-check text-blue-400 text-2xl' aria-label={t('card.complete')}></i>}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
                {[
                    { term: 'sets', label: t('term.sets'), value: sets },
                    { term: isReps ? 'reps' : 'duration', label: isReps ? t('term.reps.long') : t('term.duration'), value: exercise.reps },
                    { term: 'rest', label: t('term.rest'), value: formatRest(exercise.rest, t) },
                    { term: 'tempo', label: t('term.tempo'), value: exercise.tempo, hint: explainTempo(exercise.tempo, t) },
                ].map(info => (
                    <div key={info.term} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-800 w-full'>
                        <div className='text-slate-400 text-sm'><Term term={info.term} label={info.label}/></div>
                        <p className='font-medium text-lg'>{info.value}</p>
                        {info.hint && <p className='text-xs text-slate-400'>{info.hint}</p>}
                    </div>
                ))}
            </div>

            <div className='flex flex-col gap-2'>
                <h4 className='text-slate-400 text-sm'>{t('card.howTo')}</h4>
                <p className='text-sm leading-relaxed'>{howTo}</p>
                {showMore && notes.map((note, n) => (
                    <p key={n} className='text-sm leading-relaxed text-slate-300'>{note}</p>
                ))}
                {showMore && substitutes.length > 0 && (
                    <p className='text-sm text-slate-300'>
                        <span className='text-slate-400'>{t('card.alternatives')}</span>
                        <span>{substitutes.join(', ')}</span>
                    </p>
                )}
                <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm'>
                    {(notes.length > 0 || substitutes.length > 0) && (
                        <button onClick={() => setShowMore(!showMore)} aria-expanded={showMore}
                            className='text-blue-300 hover:text-blue-400 duration-200'>
                            <i className={`fa-solid ${showMore ? 'fa-chevron-up' : 'fa-chevron-down'} mr-1`} aria-hidden='true'></i>
                            {showMore ? t('card.less') : t('card.more')}
                        </button>
                    )}
                    <a href={youtubeSearch(name, t('card.video'))} target='_blank' rel='noopener noreferrer'
                        className='text-blue-300 hover:text-blue-400 duration-200'>
                        <i className='fa-brands fa-youtube mr-1' aria-hidden='true'></i>
                        {t('card.watch')}<span className='sr-only'>{t('card.watchSr')}</span>
                    </a>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h4 className='text-slate-400 text-sm'>{t('card.tapSet')}</h4>
                <div className='flex flex-wrap gap-2'>
                    {setsDone.map((isDone, s) => (
                        <button key={s} onClick={() => onSetToggle(s)} aria-pressed={isDone}
                            aria-label={t('card.setLabel', { n: s+1, total: sets }) + (isDone ? t('card.setDone') : '')}
                            className={'set-btn w-14 h-14 rounded-full border-2 font-semibold duration-200 '
                                + (isDone ? 'bg-blue-400 border-blue-400 text-slate-950' : 'border-blue-900 hover:border-blue-400')}>
                            {isDone ? <i className='fa-solid fa-check' aria-hidden='true'></i> : s+1}
                        </button>
                    ))}
                </div>
            </div>

        </article>
    )
}
