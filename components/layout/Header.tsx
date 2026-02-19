"use client";

import React from "react";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Dictionary } from "@/dictionaries/definition";
import { usePathname } from "next/navigation";

interface HeaderProps {
  dict: Dictionary;
  lang: string;
}

export function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname();

  // Calculate the target path for language switch
  // This replaces /hi/... with /en/... or vice versa
  const getSwitchPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/');
    if (segments.length > 1 && (segments[1] === 'hi' || segments[1] === 'en')) {
      segments[1] = targetLang;
      return segments.join('/');
    }
    return `/${targetLang}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 max-w-6xl items-center justify-between mx-auto px-4">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-bold text-xl text-brand-primary">
          <Stethoscope className="h-6 w-6" />
          <span>{dict.common.title}</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            {dict.nav.about}
          </Button>
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
            <Link
              href={getSwitchPath('hi')}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${lang === 'hi' ? 'bg-white shadow-sm text-brand-primary' : 'text-slate-500 hover:text-brand-text'}`}
            >
              HI
            </Link>
            <Link
              href={getSwitchPath('en')}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${lang === 'en' ? 'bg-white shadow-sm text-brand-primary' : 'text-slate-500 hover:text-brand-text'}`}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
