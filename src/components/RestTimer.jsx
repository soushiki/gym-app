import React, { useEffect, useState } from 'react'
import { useLang } from '../i18n/LangContext'

// Bottom bar that counts down the rest between sets.
export default function RestTimer({ rest, next, onClose }) {
    const [left, setLeft] = useState(rest.seconds)
    const { t } = useLang()

    useEffect(() => {
        if (left <= 0) {
            navigator.vibrate?.(300)
            return
        }
        const timer = setTimeout(() => setLeft(left - 1), 1000)
        return () => clearTimeout(timer)
    }, [left])

    const done = left <= 0
    const pct = Math.min(100, (left / rest.seconds) * 100)
    const mm = Math.floor(Math.max(left, 0) / 60)
    const ss = String(Math.max(left, 0) % 60).padStart(2, '0')

    return (
        <div className='rest-timer fixed bottom-0 inset-x-0 z-20 bg-slate-950/95 backdrop-blur border-t-2 border-blue-400 px-4 py-3'
            role='region' aria-label={t('rest.region')}>
            <div className='max-w-[800px] mx-auto flex items-center gap-4'>
                <div className='flex-1 flex flex-col gap-1 min-w-0'>
                    <p className='text-xs uppercase tracking-wide text-slate-400 truncate' aria-live='polite'>
                        {done ? t('rest.over') : t('rest.next', { next })}
                    </p>
                    <p className={'rest-clock text-4xl font-semibold tabular-nums ' + (done ? 'text-blue-400' : '')}>
                        {done ? t('rest.go') : `${mm}:${ss}`}
                    </p>
                    <div className='h-1.5 rounded-full bg-slate-800 overflow-hidden' aria-hidden='true'>
                        <div className='h-full bg-blue-400 duration-1000 ease-linear' style={{ width: `${pct}%` }}></div>
                    </div>
                </div>
                {!done && (
                    <button onClick={() => setLeft(left + 15)} aria-label={t('rest.add')}
                        className='px-3 py-2 rounded-md border border-slate-700 hover:border-blue-400 duration-200'>+15s</button>
                )}
                <button onClick={onClose}
                    className='px-4 py-2 rounded-md border-2 border-blue-400 bg-slate-900 font-medium hover:bg-blue-400 hover:text-slate-950 duration-200'>
                    {done ? t('rest.close') : t('rest.skip')}
                </button>
            </div>
        </div>
    )
}
