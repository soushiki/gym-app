import React from 'react'
import { useLang } from '../i18n/LangContext'
import { LANGS } from '../i18n/ui'

export default function LangToggle() {
    const { lang, setLang, t } = useLang()
    return (
        <div className='lang-toggle top-3 right-3 z-30 flex rounded-full border-2 border-blue-400 bg-slate-950/90 backdrop-blur overflow-hidden text-sm font-medium'
            role='group' aria-label={t('lang.label')}>
            <i className='fa-solid fa-globe self-center pl-3 pr-1 text-blue-400' aria-hidden='true'></i>
            {LANGS.map(code => (
                <button key={code} onClick={() => setLang(code)} aria-pressed={lang === code}
                    lang={code} aria-label={code === 'es' ? 'Español' : 'English'}
                    className={'px-3 py-1.5 uppercase duration-200 '
                        + (lang === code ? 'bg-blue-400 text-slate-950' : 'hover:text-blue-400')}>
                    {code}
                </button>
            ))}
        </div>
    )
}
