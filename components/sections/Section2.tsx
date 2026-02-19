"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { BatteryCharging, BatteryLow, Scale } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface Section2Props {
  dict: Dictionary;
}

export function Section2({ dict }: Section2Props) {
  return (
    <Section background="white">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <Heading level={2}>{dict.section2.title}</Heading>
          <Text variant="body">
            {dict.section2.intro}
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-brand-heading mb-2 flex items-center gap-2">
              <Scale className="text-brand-primary" />
              {dict.section2.card1Title}
            </h3>
            <ul className="space-y-3 text-brand-text">
              <li className="flex items-start gap-3">
                <span className="bg-brand-background p-1 rounded text-brand-primary text-xs font-bold mt-1">{dict.section2.thenLabel}</span>
                <span dangerouslySetInnerHTML={{ __html: dict.section2.thenText }} />
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-brand-background p-1 rounded text-brand-secondary text-xs font-bold mt-1">{dict.section2.nowLabel}</span>
                <span dangerouslySetInnerHTML={{ __html: dict.section2.nowText }} />
              </li>
            </ul>
          </Card>

          <Card className="bg-blue-50 border-blue-100">
             <h3 className="text-xl font-bold text-brand-heading mb-4 text-center">{dict.section2.card2Title}</h3>
             <div className="flex justify-around items-center py-6">
                <div className="flex flex-col items-center gap-2">
                   <BatteryCharging size={40} className="text-green-500 animate-pulse" />
                   <span className="text-sm font-medium">{dict.section2.normalMode}</span>
                </div>
                <div className="h-0.5 w-12 bg-slate-300 relative">
                   <motion.div
                     className="absolute h-full bg-brand-primary"
                     animate={{ width: ["0%", "100%", "0%"] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                </div>
                <div className="flex flex-col items-center gap-2">
                   <BatteryLow size={40} className="text-red-500 animate-pulse" />
                   <span className="text-sm font-medium">{dict.section2.powerSaveMode}</span>
                   <span className="text-xs text-slate-500">{dict.section2.dieting}</span>
                </div>
             </div>
             <p className="text-sm text-center text-slate-600 px-4">
               {dict.section2.analogyText}
             </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
