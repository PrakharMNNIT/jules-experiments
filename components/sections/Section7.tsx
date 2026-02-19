"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { Dumbbell, Moon, Utensils, Brain } from "lucide-react";

export function Section7() {
  const points = [
    { icon: Utensils, text: "High Protein Diet (कम तेल-घी)" },
    { icon: Dumbbell, text: "Light Strength Training (हल्का व्यायाम)" },
    { icon: Moon, text: "Proper Sleep (7-8 घंटे की नींद)" },
    { icon: Brain, text: "Stress Management (तनाव कम करें)" },
  ];

  return (
    <Section background="soft" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Heading level={2}>यह जादू नहीं है (Lifestyle Matters)</Heading>
        <Text variant="body">
          दवा सिर्फ एक सहारा (support) है। अगर आपने lifestyle नहीं बदली, तो दवा बंद करने पर वजन वापस आ सकता है।
        </Text>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {points.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center gap-4 hover:shadow-md transition-all border-l-4 border-l-brand-secondary">
               <div className="bg-green-100 p-3 rounded-full shrink-0">
                 <item.icon className="h-6 w-6 text-green-600" />
               </div>
               <span className="font-medium text-brand-heading text-lg">{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto text-center">
         <p className="text-blue-800 font-medium">
           “दवा भूख कम करती है, लेकिन क्या खाना है यह आपको चुनना होगा।”
         </p>
      </div>
    </Section>
  );
}
