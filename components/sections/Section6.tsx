"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { BMICalculator } from "@/components/features/BMICalculator";
import { Check, X, AlertTriangle } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface Section6Props {
  dict: Dictionary;
}

export function Section6({ dict }: Section6Props) {
  return (
    <Section background="white" className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Heading level={2}>{dict.section6.title}</Heading>
          <Text variant="body">
            {dict.section6.intro}
          </Text>

          <div className="space-y-6 mt-8">
            <div>
              <h3 className="font-bold text-lg text-green-700 mb-3 flex items-center gap-2">
                <Check className="bg-green-100 p-1 rounded-full h-6 w-6" />
                {dict.section6.qualifiesTitle}
              </h3>
              <ul className="space-y-2 ml-8 text-slate-700">
                {dict.section6.qualifiesList.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-red-700 mb-3 flex items-center gap-2">
                <X className="bg-red-100 p-1 rounded-full h-6 w-6" />
                {dict.section6.notForTitle}
              </h3>
              <ul className="space-y-2 ml-8 text-slate-700">
                {dict.section6.notForList.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6">
               <p className="text-amber-800 text-sm font-medium flex gap-2">
                 <AlertTriangle className="h-5 w-5 shrink-0" />
                 {dict.section6.consultText}
               </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl">
           <BMICalculator dict={dict} />
        </div>
      </div>
    </Section>
  );
}
