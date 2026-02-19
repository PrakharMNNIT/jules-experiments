"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Section5() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const sideEffects = [
    {
      id: "common",
      title: "Common Side Effects (आम दुष्प्रभाव)",
      content: "मितली (Nausea), उल्टी (Vomiting), कब्ज (Constipation), पेट दर्द, Acidity. ये आमतौर पर temporary होते हैं और शरीर धीरे-धीरे adjust कर लेता है।",
      icon: "🤢",
    },
    {
      id: "serious",
      title: "Rare but Serious (गंभीर लेकिन दुर्लभ)",
      content: "Pancreatitis (अग्नाशय की सूजन), Gallbladder problem, Thyroid tumor risk (जानवरों में देखा गया है, इंसानों में rare है)।",
      icon: "⚠️",
    },
    {
      id: "dose",
      title: "Dose धीरे-धीरे क्यों बढ़ाई जाती है?",
      content: "Side effects कम करने के लिए डॉक्टर हमेशा कम dose से शुरू करते हैं और हफ़्ते दर हफ़्ते बढ़ाते हैं। इसे Titration कहते हैं।",
      icon: "📈",
    },
  ];

  return (
    <Section background="soft" className="py-20">
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        <div className="text-center">
          <Heading level={2}>Side Effects (ईमानदारी से समझाएँ)</Heading>
          <Text variant="body">
            हर दवा के कुछ side effects होते हैं, और इनके भी हैं। लेकिन सही जानकारी से इनसे बचा जा सकता है।
          </Text>
        </div>

        <div className="space-y-4">
          {sideEffects.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => toggle(item.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-brand-heading">{item.title}</h3>
                </div>
                {expanded === item.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </div>
              <AnimatePresence>
                {expanded === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-brand-text leading-relaxed border-t border-slate-100 mt-4">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
          <AlertCircle className="text-amber-500 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-amber-800 mb-2">ज़रूरी सलाह</h4>
            <p className="text-sm text-amber-700">
              अगर आपको या आपके परिवार में किसी को Thyroid cancer (MTC) या MEN 2 syndrome का इतिहास है, तो ये दवाइयाँ नहीं लेनी चाहिए। डॉक्टर से खुलकर बात करें।
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
