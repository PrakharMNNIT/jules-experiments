"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface FlipCardProps {
  myth: string;
  truth: string;
  labels: {
    myth: string;
    truth: string;
    tap: string;
  };
}

const FlipCard = ({ myth, truth, labels }: FlipCardProps) => {
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
           <h3 className="text-xl font-bold text-red-800 mb-2">{labels.myth}</h3>
           <p className="text-center text-lg text-slate-700 font-medium">&quot;{myth}&quot;</p>
           <p className="absolute bottom-4 text-xs text-slate-400">{labels.tap}</p>
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
           <h3 className="text-xl font-bold text-emerald-800 mb-2">{labels.truth}</h3>
           <p className="text-center text-lg text-slate-800 font-medium">{truth}</p>
        </div>
      </motion.div>
    </div>
  );
};

interface Section9Props {
  dict: Dictionary;
}

export function Section9({ dict }: Section9Props) {
  const labels = {
    myth: dict.section9.mythLabel,
    truth: dict.section9.truthLabel,
    tap: dict.section9.tapText
  };

  return (
    <Section background="soft" className="py-20">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="text-center">
          <Heading level={2}>{dict.section9.title}</Heading>
          <Text variant="body">
            {dict.section9.intro}
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FlipCard
            myth={dict.section9.myth1}
            truth={dict.section9.truth1}
            labels={labels}
          />
          <FlipCard
            myth={dict.section9.myth2}
            truth={dict.section9.truth2}
            labels={labels}
          />
        </div>
      </div>
    </Section>
  );
}
