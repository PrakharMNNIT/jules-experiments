"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Dictionary } from "@/dictionaries/definition";

interface HeroSectionProps {
  dict: Dictionary;
}

export function HeroSection({ dict }: HeroSectionProps) {
  return (
    <Section background="soft" className="min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 opacity-50 z-0" />

      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-brand-primary font-medium text-sm mb-6">
            {dict.hero.badge}
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: dict.hero.title }}
          />
          <p className="text-xl md:text-2xl text-brand-text mb-8 leading-relaxed">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="shadow-lg shadow-blue-500/20">
              {dict.hero.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Simple Abstract Illustration of Body/Health */}
          <div className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center justify-center border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="w-24 h-24 bg-blue-50 rounded-full mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
             </div>
             <div className="h-2 w-full bg-slate-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full bg-brand-secondary w-3/4 rounded-full" />
             </div>
             <div className="h-2 w-full bg-slate-100 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-brand-primary w-1/2 rounded-full" />
             </div>
             <div className="text-center">
               <h3 className="font-bold text-brand-heading text-lg">{dict.hero.illustrationTitle}</h3>
               <p className="text-sm text-slate-500">{dict.hero.illustrationSubtitle}</p>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
