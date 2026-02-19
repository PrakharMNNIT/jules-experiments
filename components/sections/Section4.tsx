"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface Section4Props {
  dict: Dictionary;
}

export function Section4({ dict }: Section4Props) {
  return (
    <Section background="white" className="py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <Heading level={2}>{dict.section4.title}</Heading>
          <Text variant="body">
            {dict.section4.intro}
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-blue-50/50 border-blue-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-blue-600">{dict.section4.ozempicTitle}</h3>
               <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">{dict.section4.ozempicDrug}</span>
             </div>
             <p className="text-sm text-slate-700 mb-6 min-h-[48px]" dangerouslySetInnerHTML={{ __html: dict.section4.ozempicDesc }} />
             <ul className="space-y-3">
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">{dict.section4.weeklyInjection}</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">{dict.section4.appetiteControl}</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">{dict.section4.provenResult}</span>
                </li>
             </ul>
          </Card>

          <Card className="bg-purple-50/50 border-purple-200">
             <div className="flex items-center justify-between mb-4">
               <h3 className="text-2xl font-bold text-purple-600">{dict.section4.mounjaroTitle}</h3>
               <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full font-bold">{dict.section4.mounjaroDrug}</span>
             </div>
             <p className="text-sm text-slate-700 mb-6 min-h-[48px]" dangerouslySetInnerHTML={{ __html: dict.section4.mounjaroDesc }} />
             <ul className="space-y-3">
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">{dict.section4.weeklyInjection}</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">{dict.section4.dualAction}</span>
                </li>
                <li className="flex items-center gap-3">
                   <Check className="text-green-500 h-5 w-5" />
                   <span className="text-sm font-medium">{dict.section4.moreWeightLoss}</span>
                </li>
             </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
