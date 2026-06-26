"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { Dumbbell, Moon, Utensils, Brain } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface Section7Props {
  dict: Dictionary;
}

export function Section7({ dict }: Section7Props) {
  const icons = [Utensils, Dumbbell, Moon, Brain];

  return (
    <Section background="soft" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Heading level={2}>{dict.section7.title}</Heading>
        <Text variant="body">
          {dict.section7.intro}
        </Text>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {dict.section7.points.map((text, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-4 hover:shadow-md transition-all border-l-4 border-l-brand-secondary">
                 <div className="bg-green-100 p-3 rounded-full shrink-0">
                   <Icon className="h-6 w-6 text-green-600" />
                 </div>
                 <span className="font-medium text-brand-heading text-lg">{text}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto text-center">
         <p className="text-blue-800 font-medium">
           {dict.section7.quote}
         </p>
      </div>
    </Section>
  );
}
