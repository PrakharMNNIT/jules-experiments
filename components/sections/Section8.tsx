"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { IndianRupee, Clock, ShieldAlert } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface Section8Props {
  dict: Dictionary;
}

export function Section8({ dict }: Section8Props) {
  return (
    <Section background="white" className="py-20">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="text-center">
          <Heading level={2}>{dict.section8.title}</Heading>
          <Text variant="body">
            {dict.section8.intro}
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-8 bg-slate-50 border-slate-200">
             <div className="bg-orange-100 p-4 rounded-full mb-6">
               <IndianRupee className="h-8 w-8 text-orange-600" />
             </div>
             <h3 className="font-bold text-lg mb-2">{dict.section8.costTitle}</h3>
             <p className="text-sm text-slate-600">
               {dict.section8.costDesc}
             </p>
          </Card>

          <Card className="flex flex-col items-center text-center p-8 bg-slate-50 border-slate-200">
             <div className="bg-blue-100 p-4 rounded-full mb-6">
               <Clock className="h-8 w-8 text-blue-600" />
             </div>
             <h3 className="font-bold text-lg mb-2">{dict.section8.timeTitle}</h3>
             <p className="text-sm text-slate-600">
               {dict.section8.timeDesc}
             </p>
          </Card>

          <Card className="flex flex-col items-center text-center p-8 bg-slate-50 border-slate-200">
             <div className="bg-red-100 p-4 rounded-full mb-6">
               <ShieldAlert className="h-8 w-8 text-red-600" />
             </div>
             <h3 className="font-bold text-lg mb-2">{dict.section8.insuranceTitle}</h3>
             <p className="text-sm text-slate-600">
               {dict.section8.insuranceDesc}
             </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
