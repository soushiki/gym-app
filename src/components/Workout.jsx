import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard';
import RestTimer from './RestTimer';
import Button from './Button';
import { LEVELS, estimateMinutes } from '../utils/guide';
import { exerciseName } from '../i18n/exercises';
import { useLang } from '../i18n/LangContext';

export default function Workout({workout, regenerate}) {
  const { exercises, level, goal } = workout;
  const { lang, t } = useLang();
  const sets = LEVELS[level].sets;
  const [done, setDone] = useState(() => exercises.map(() => Array(sets).fill(false)));
  const [rest, setRest] = useState(null);

  const totalSets = exercises.length * sets;
  const doneSets = done.flat().filter(Boolean).length;
  const allDone = doneSets === totalSets;

  function toggleSet(exIndex, setIndex){
    const wasDone = done[exIndex][setIndex];
    const next = done.map((row, r) => r === exIndex ? row.map((v, c) => c === setIndex ? !v : v) : row);
    setDone(next);
    if (wasDone) return;

    // Rest only if there is more work left. Remember what comes next.
    const nextEx = exercises.findIndex((_, r) => next[r].some(v => !v));
    if (nextEx === -1) { setRest(null); return; }
    const sameExercise = next[exIndex].some(v => !v);
    setRest({
      seconds: exercises[exIndex].rest,
      exIndex: sameExercise ? exIndex : nextEx,
      set: sameExercise ? next[exIndex].indexOf(false) + 1 : null,
      id: Date.now(),
    });
  }

  // Worked out at render time so it follows language changes.
  function restNext(){
    const name = exerciseName(exercises[rest.exIndex], lang);
    return rest.set ? t('rest.nextSet', { n: rest.set, name }) : name;
  }

  return (

        <SectionWrapper id={'workout'}  header={t('workout.header')} title={t('workout.title')}>
            <div className='grid grid-cols-3 gap-2 text-center'>
              {[
                { label: t('workout.exercises'), value: exercises.length },
                { label: t('workout.about'), value: t('workout.minutes', { n: estimateMinutes(exercises, sets) }) },
                { label: t('workout.goal'), value: t(`goal.${goal}`) },
              ].map(stat => (
                <div key={stat.label} className='bg-slate-950 rounded-md p-3'>
                  <p className='text-xs text-slate-400 uppercase tracking-wide'>{stat.label}</p>
                  <p className='font-semibold'>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className='bg-blue-950/40 border border-blue-400/40 rounded-md p-4 flex gap-3'>
              <i className='fa-solid fa-lightbulb text-blue-400 mt-1' aria-hidden='true'></i>
              <div className='text-sm flex flex-col gap-1'>
                <p className='font-medium'>{t('workout.tipTitle')}</p>
                <p className='text-slate-300'>{t('workout.tipWarmup')}</p>
                <p className='text-slate-300'>{t('workout.tipWeight')}</p>
              </div>
            </div>

            <div className='sticky top-0 z-10 bg-slate-900/95 backdrop-blur rounded-md p-3 flex flex-col gap-2'>
              <div className='flex justify-between text-sm'>
                <span>{t('workout.progress')}</span>
                <span className='tabular-nums'>{t('workout.progressSets', { done: doneSets, total: totalSets })}</span>
              </div>
              <div className='h-2 rounded-full bg-slate-800 overflow-hidden' role='progressbar'
                aria-valuemin={0} aria-valuemax={totalSets} aria-valuenow={doneSets} aria-label={t('workout.progressLabel')}>
                <div className='h-full bg-blue-400 duration-300' style={{ width: `${(doneSets / totalSets) * 100}%` }}></div>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              {exercises.map((exercise,i)=>{
                return (
                  <ExerciseCard exercise={exercise} i={i} key={exercise.name}
                    sets={sets} setsDone={done[i]} onSetToggle={(s) => toggleSet(i, s)}/>
                );
              })}
            </div>

            {allDone && (
              <div className='bg-slate-950 border-2 border-blue-400 rounded-md p-6 text-center flex flex-col gap-2' role='status'>
                <i className='fa-solid fa-trophy text-4xl text-blue-400' aria-hidden='true'></i>
                <p className='text-xl font-semibold'>{t('workout.doneTitle')}</p>
                <p className='text-slate-300 text-sm'>{t('workout.doneText')}</p>
              </div>
            )}

            <div className='pb-24'>
              <Button func={regenerate} text={t('workout.again')} icon="fa-rotate"/>
            </div>

            {rest && <RestTimer key={rest.id} rest={rest} next={restNext()} onClose={() => setRest(null)} />}
        </SectionWrapper>

  )
}
