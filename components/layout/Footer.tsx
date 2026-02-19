import React from "react";
import { Stethoscope } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-slate-50 py-12 md:py-16">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-heading">
            <Stethoscope className="h-6 w-6" />
            <span>HealthGuide.in</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            माता-पिता के लिए स्वास्थ्य से जुड़ी सही और आसान जानकारी।
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-brand-heading">Explore</h3>
            <a href="/glossary" className="text-sm text-slate-500 hover:text-brand-primary">Glossary (शब्दावली)</a>
            <a href="/compare" className="text-sm text-slate-500 hover:text-brand-primary">Drug Comparisons</a>
            <a href="/calculator/parents" className="text-sm text-slate-500 hover:text-brand-primary">BMI Calculator</a>
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
        <p>Disclaimer: This website is for informational purposes only. Always consult a doctor before starting any medication.</p>
        <p className="mt-2">© 2024 HealthGuide. All rights reserved.</p>
      </div>
    </footer>
  );
}
