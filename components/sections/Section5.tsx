"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dictionary } from "@/dictionaries/definition";

interface Section5Props {
  dict: Dictionary;
}

export function Section5({ dict }: Section5Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const sideEffects = [
    {
      id: "common",
      title: dict.section5.commonTitle,
      content: dict.section5.commonDesc,
      icon: "🤢",
    },
    {
      id: "serious",
      title: dict.section5.seriousTitle,
      content: dict.section5.seriousDesc,
      icon: "⚠️",
    },
    {
      id: "dose",
      title: dict.section5.doseTitle,
      content: dict.section5.doseDesc,
      icon: "📈",
    },
  ];

  return (
    <Section background="soft" className="py-20">
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        <div className="text-center">
          <Heading level={2}>{dict.section5.title}</Heading>
          <Text variant="body">
            {dict.section5.intro}
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
            <h4 className="font-bold text-amber-800 mb-2">{dict.section5.warningTitle}</h4>
            <p className="text-sm text-amber-700">
              {dict.section5.warningText}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
