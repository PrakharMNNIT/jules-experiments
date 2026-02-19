import React from "react";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 max-w-6xl items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2 font-bold text-xl text-brand-primary">
          <Stethoscope className="h-6 w-6" />
          <span>HealthGuide.in</span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            About
          </Button>
          <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
            <button className="px-3 py-1 text-sm font-medium bg-white shadow-sm rounded-full text-brand-primary">
              HI
            </button>
            <button className="px-3 py-1 text-sm font-medium text-slate-500 hover:text-brand-text">
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
