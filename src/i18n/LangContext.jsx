import React, { createContext, useContext, useEffect, useState } from 'react'
import { LANGS, UI } from './ui'

const STORAGE_KEY = 'gym-app-lang'

function initialLang() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (LANGS.includes(saved)) return saved
    } catch {
        // Storage can be blocked (private mode); fall back to the browser language.
    }
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
    const [lang, setLang] = useState(initialLang)

    useEffect(() => {
        document.documentElement.lang = lang
        try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* not critical */ }
    }, [lang])

    // t('key', { name: 'x' }) fills {name}; arrays (section titles) are returned as is.
    function t(key, vars = {}) {
        const value = UI[lang][key] ?? UI.en[key] ?? key
        if (typeof value !== 'string') return value
        return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '')
    }

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
    return useContext(LangContext)
}
