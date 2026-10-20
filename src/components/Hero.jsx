import React from "react";
import Button from "./Button";
import { useLang } from "../i18n/LangContext";

const STEPS = [
  { icon: "fa-list-check", key: "hero.step1" },
  { icon: "fa-wand-magic-sparkles", key: "hero.step2" },
  { icon: "fa-circle-check", key: "hero.step3" },
];

export default function Hero() {
  const { t } = useLang();
  return (
    <div
      className="hero min-h-screen
            flex flex-col gap-10
            items-center justify-center text-center
            max-w-[800px] w-full mx-auto p-4"
    >
      <div className="flex flex-col gap-4">
        <p>{t("hero.kicker")}</p>
        <h1
          className="uppercase font-bold text-5xl
            sm:text-5xl md:text-6xl lg:text-7xl break-words"
        >
          SWOLE<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-base md:text-lg font-light text-slate-200">
        {t("hero.intro1")}{" "}
        <span className="text-blue-400 font-medium">{t("hero.introHighlight")}</span>
        {t("hero.intro2")}
      </p>
      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left">
        {STEPS.map((step, i) => (
          <li key={step.key} className="bg-slate-950/70 border border-slate-800 rounded-lg p-4 flex sm:flex-col gap-3">
            <span className="shrink-0 w-10 h-10 rounded-full bg-blue-400/15 text-blue-400 grid place-items-center" aria-hidden="true">
              <i className={`fa-solid ${step.icon}`}></i>
            </span>
            <div>
              <p className="font-medium">{i + 1}. {t(`${step.key}.title`)}</p>
              <p className="text-sm text-slate-400">{t(`${step.key}.text`)}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button func={()=>document.getElementById('generate')?.scrollIntoView()} text={t("hero.cta")} icon="fa-arrow-down"/>
      <p className="text-xs text-slate-400 max-w-md">{t("hero.health")}</p>
    </div>
  );
}
