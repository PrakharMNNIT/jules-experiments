import React from "react";
import { Stethoscope } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="w-full border-t bg-slate-50 py-12 md:py-16">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-heading">
            <Stethoscope className="h-6 w-6" />
            <span>{dict.common.title}</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            {dict.common.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-brand-heading">Explore</h3>
            <a href={`/${lang}/glossary`} className="text-sm text-slate-500 hover:text-brand-primary">{dict.nav.glossary}</a>
            <a href={`/${lang}/compare`} className="text-sm text-slate-500 hover:text-brand-primary">{dict.nav.compare}</a>
            <a href={`/${lang}/calculator/parents`} className="text-sm text-slate-500 hover:text-brand-primary">{dict.nav.bmi}</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-brand-heading">Resources</h3>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">FDA Guidelines</a>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">WHO Obesity</a>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">ICMR Data</a>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-400">
        <p>{dict.common.disclaimer}</p>
        <p className="mt-2">{dict.common.copyright}</p>
      </div>
    </footer>
  );
}
