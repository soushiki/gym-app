import React, { useId, useState } from 'react'
import { useLang } from '../i18n/LangContext'

// A label with a small (?) button that reveals what the term means.
export default function Term({ term, label }) {
    const [open, setOpen] = useState(false)
    const id = useId()
    const { t } = useLang()
    return (
        <span className='inline-flex flex-col'>
            <span className='inline-flex items-center gap-1'>
                <span className='first-letter:uppercase'>{label}</span>
                <button type='button' onClick={() => setOpen(!open)}
                    aria-expanded={open} aria-controls={id}
                    aria-label={t('term.ask', { term: label })}
                    className='w-5 h-5 grid place-items-center rounded-full text-[11px] text-current opacity-80 hover:opacity-100 duration-200'>
                    <i className='fa-solid fa-circle-question' aria-hidden='true'></i>
                </button>
            </span>
            {open && (
                <span id={id} className='text-xs text-slate-300 normal-case font-normal mt-1'>
                    {t(`glossary.${term}`)}
                </span>
            )}
        </span>
    )
}
