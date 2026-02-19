"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";

const FlipCard = ({ myth, truth }: { myth: string; truth: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front (Myth) */}
        <div
          className="absolute inset-0 bg-white border border-red-100 rounded-2xl flex flex-col items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
           <XCircle className="h-12 w-12 text-red-500 mb-4" />
           <h3 className="text-xl font-bold text-red-800 mb-2">MYTH (गलतफहमी)</h3>
           <p className="text-center text-lg text-slate-700 font-medium">&quot;{myth}&quot;</p>
           <p className="absolute bottom-4 text-xs text-slate-400">Tap to see Truth</p>
        </div>

        {/* Back (Truth) */}
        <div
          className="absolute inset-0 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col items-center justify-center p-6 shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
           <CheckCircle className="h-12 w-12 text-emerald-600 mb-4" />
           <h3 className="text-xl font-bold text-emerald-800 mb-2">TRUTH (सच)</h3>
           <p className="text-center text-lg text-slate-800 font-medium">{truth}</p>
        </div>
      </motion.div>
    </div>
  );
};

export function Section9() {
  return (
    <Section background="soft" className="py-20">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="text-center">
          <Heading level={2}>मिथक बनाम सच्चाई</Heading>
          <Text variant="body">
            समाज में वजन को लेकर कई गलतफहमियाँ हैं। आइए सच जानें।
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FlipCard
            myth="बस कम खाओ और चलो, वजन कम हो जाएगा।"
            truth="मोटापा (Obesity) एक जटिल बीमारी है। हार्मोन्स (Biology) इसमें बड़ी भूमिका निभाते हैं, सिर्फ इच्छाशक्ति नहीं।"
          />
          <FlipCard
            myth="Injection लेने से शरीर खराब हो जाएगा।"
            truth="डॉक्टर की देखरेख में ये दवाइयाँ सुरक्षित हो सकती हैं और कई बीमारियों (Diabetes, Heart) से बचा सकती हैं।"
          />
        </div>
      </div>
    </Section>
  );
}
