import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import { GOALS, LEVELS, LOCATIONS, RECOMMENDED_PLAN } from '../utils/guide';
import { muscleName } from '../i18n/exercises';
import { useLang } from '../i18n/LangContext';
import Button from './Button';

const MAX_MUSCLES = 3;

function Header(props){
    const {index, title, description} = props;
    const { t } = useLang();
    return(
        <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-center gap-3'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400' aria-hidden='true'>
                    {index}
                </p>
                <h3 className='text-xl sm:text-2xl md:text-3xl'>
                    <span className='sr-only'>{t('gen.step')} {index}: </span>{title}
                </h3>
            </div>
            <p className='text-sm sm:text-base mx-auto text-center text-slate-300'>{description}</p>
        </div>
    );
}

// A selectable card. aria-pressed tells screen readers which one is chosen.
function Option({selected, onClick, icon, title, description, badge}){
    return (
        <button onClick={onClick} aria-pressed={selected}
            className={'option relative text-left bg-slate-950 border-2 duration-200 px-4 py-3 rounded-lg flex gap-3 items-start '
                + (selected ? 'border-blue-400 bg-blue-950/40' : 'border-slate-700 hover:border-blue-600')}>
            {icon && (
                <span className={'shrink-0 w-9 h-9 rounded-full grid place-items-center '
                    + (selected ? 'bg-blue-400 text-slate-950' : 'bg-slate-800 text-blue-400')} aria-hidden='true'>
                    <i className={`fa-solid ${icon}`}></i>
                </span>
            )}
            <span className='flex flex-col gap-1 flex-1'>
                <span className='font-medium flex flex-wrap items-center gap-2'>
                    {title}
                    {badge && <span className='text-[11px] uppercase tracking-wide bg-blue-400/15 text-blue-300 px-2 py-0.5 rounded-full'>{badge}</span>}
                </span>
                {description && <span className='text-sm text-slate-400'>{description}</span>}
            </span>
            {selected && <i className='fa-solid fa-circle-check text-blue-400 mt-1' aria-hidden='true'></i>}
        </button>
    );
}

export default function Generator({level, setLevel, location, setLocation, poison, setPoison, muscles, setMuscles, goal, setGoal, error, updateWorkout}) {
    const { lang, t } = useLang();

    function updateMuscles(muscleGroup){

        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter( val => val !== muscleGroup))
            return
        }

        if(poison !== 'individual'){
            setMuscles([muscleGroup])
            return
        }

        if(muscles.length >= MAX_MUSCLES){
            return
        }

        setMuscles([...muscles, muscleGroup]);
    }

    const isIndividual = poison === 'individual';
    const choices = isIndividual ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison]);
    const plans = Object.keys(WORKOUTS).sort((a, b) => (b === RECOMMENDED_PLAN) - (a === RECOMMENDED_PLAN));

    return (
        <SectionWrapper id={'generate'} header={t('gen.header')} title={t('gen.title')} >
            <Header index={'01'} title={t('gen.q1.title')} description={t('gen.q1.text')}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3' role='group' aria-label={t('gen.group.level')}>
                {Object.entries(LEVELS).map(([key, info]) => (
                    <Option key={key} selected={level === key} onClick={() => setLevel(key)}
                        icon={info.icon} title={t(`level.${key}`)} description={t(`level.${key}.text`)}/>
                ))}
            </div>

            <Header index={'02'} title={t('gen.q2.title')} description={t('gen.q2.text')}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3' role='group' aria-label={t('gen.group.location')}>
                {Object.entries(LOCATIONS).map(([key, info]) => (
                    <Option key={key} selected={location === key} onClick={() => setLocation(key)}
                        icon={info.icon} title={t(`location.${key}`)} description={t(`location.${key}.text`)}/>
                ))}
            </div>

            <Header index={'03'} title={t('gen.q3.title')} description={t('gen.q3.text')}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3' role='group' aria-label={t('gen.group.plan')}>
                {plans.map((type) => (
                    <Option key={type} selected={type === poison}
                        onClick={() => { setMuscles([]); setPoison(type) }}
                        title={t(`plan.${type}`)} description={t(`plan.${type}.text`)}
                        badge={type === RECOMMENDED_PLAN ? t('gen.recommended') : null}/>
                ))}
            </div>

            <Header index={'04'}
                title={isIndividual ? t('gen.q4.titleMuscles') : t('gen.q4.titleDay')}
                description={isIndividual
                    ? t('gen.q4.textMuscles', { max: MAX_MUSCLES, count: muscles.length })
                    : t('gen.q4.textDay')}/>
            <div className={'grid gap-3 ' + (isIndividual ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-1 sm:grid-cols-2')}
                role='group' aria-label={isIndividual ? t('gen.group.muscles') : t('gen.group.day')}>
                {choices.map((muscleGroup) => {
                    const selected = muscles.includes(muscleGroup);
                    const full = isIndividual && !selected && muscles.length >= MAX_MUSCLES;
                    if (isIndividual) {
                        return (
                            <button key={muscleGroup} onClick={() => updateMuscles(muscleGroup)}
                                aria-pressed={selected} disabled={full}
                                className={'option capitalize rounded-full border-2 px-3 py-2 duration-200 '
                                    + (selected ? 'border-blue-400 bg-blue-400 text-slate-950 font-medium'
                                        : 'border-slate-700 bg-slate-950 hover:border-blue-600 disabled:opacity-40 disabled:hover:border-slate-700')}>
                                {muscleName(muscleGroup, lang)}
                            </button>
                        );
                    }
                    return (
                        <Option key={muscleGroup} selected={selected} onClick={() => updateMuscles(muscleGroup)}
                            title={<span className='first-letter:uppercase'>{t('gen.day', { day: muscleName(muscleGroup, lang) })}</span>}
                            description={t('gen.works', { muscles: WORKOUTS[poison][muscleGroup].map(m => muscleName(m, lang)).join(', ') })}/>
                    );
                })}
            </div>

            <Header index={'05'} title={t('gen.q5.title')} description={t('gen.q5.text')}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3' role='group' aria-label={t('gen.group.goal')}>
                {Object.keys(SCHEMES).map((scheme) => (
                    <Option key={scheme} selected={scheme === goal} onClick={() => setGoal(scheme)}
                        icon={GOALS[scheme].icon} title={t(`goal.${scheme}`)} description={t(`goal.${scheme}.text`)}/>
                ))}
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <Button func={updateWorkout} text={t('gen.build')} icon="fa-bolt"/>
                <p role='alert' className='text-sm text-amber-300 text-center min-h-5'>{error && t(error)}</p>
            </div>
        </SectionWrapper>

    )
}
