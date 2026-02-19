"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { BMICalculator } from "@/components/features/BMICalculator";
import { Check, X, AlertTriangle } from "lucide-react";

export function Section6() {
  return (
    <Section background="white" className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Heading level={2}>किन लोगों के लिए सही है?</Heading>
          <Text variant="body">
            यह दवा हर किसी के लिए नहीं है। डॉक्टर इसे तभी देते हैं जब वजन से जुड़ी बीमारियाँ बढ़ने का खतरा हो।
          </Text>

          <div className="space-y-6 mt-8">
            <div>
              <h3 className="font-bold text-lg text-green-700 mb-3 flex items-center gap-2">
                <Check className="bg-green-100 p-1 rounded-full h-6 w-6" />
                Who qualifies? (योग्य कौन हैं)
              </h3>
              <ul className="space-y-2 ml-8 text-slate-700">
                <li>• BMI <b>30</b> से ज्यादा हो (Obesity)</li>
                <li>• BMI <b>27</b> से ज्यादा हो + Diabetes, BP, या Cholesterol हो</li>
                <li>• Pre-diabetes की स्थिति हो</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-red-700 mb-3 flex items-center gap-2">
                <X className="bg-red-100 p-1 rounded-full h-6 w-6" />
                Who should NOT take? (किन्हें नहीं लेनी चाहिए)
              </h3>
              <ul className="space-y-2 ml-8 text-slate-700">
                <li>• सिर्फ अच्छा दिखने के लिए (Cosmetic weight loss)</li>
                <li>• गर्भवती महिलाएं (Pregnant women)</li>
                <li>• बिना डॉक्टर की सलाह के</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mt-6">
               <p className="text-amber-800 text-sm font-medium flex gap-2">
                 <AlertTriangle className="h-5 w-5 shrink-0" />
                 डॉक्टर की सलाह और Prescription अनिवार्य है। खुद से दवा न लें।
               </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl">
           <BMICalculator />
        </div>
      </div>
    </Section>
  );
}
