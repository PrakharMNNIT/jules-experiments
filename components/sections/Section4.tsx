"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

export function Section4() {
  return (
    <Section background="white" className="py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <Heading level={2}>Ozempic और Mounjaro क्या हैं?</Heading>
          <Text variant="body">
            ये दोनों weekly injection हैं जो appetite (भूख) कम करते हैं और sugar control improve करते हैं।
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-blue-50/50 border-blue-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-blue-600">Ozempic</h3>
               <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">Semaglutide</span>
             </div>
             <p className="text-sm text-slate-700 mb-6 min-h-[48px]">
               GLP-1 hormone की तरह काम करता है। यह <b>भूख कम</b> करता है और <b>sugar control</b> में मदद करता है।
             </p>
             <ul className="space-y-3">
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">Weekly Injection</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">Appetite Control</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">Proven Result (STEP Trials)</span>
                </li>
             </ul>
          </Card>

          <Card className="bg-purple-50/50 border-purple-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-purple-600">Mounjaro</h3>
               <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full font-bold">Tirzepatide</span>
             </div>
             <p className="text-sm text-slate-700 mb-6 min-h-[48px]">
               GLP-1 + GIP दोनों hormone को mimic करता है। यह Ozempic से भी ज्यादा effective हो सकता है।
             </p>
             <ul className="space-y-3">
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">Weekly Injection</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">Dual Action (GLP-1 + GIP)</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">More Weight Loss (SURMOUNT Trials)</span>
                </li>
             </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
