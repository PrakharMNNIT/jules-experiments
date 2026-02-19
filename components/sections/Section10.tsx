"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export function Section10() {
  return (
    <Section background="gradient" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto flex flex-col items-center gap-8"
      >
        <div className="bg-white p-6 rounded-full shadow-lg mb-4">
          <HeartHandshake className="h-16 w-16 text-brand-primary" />
        </div>

        <Heading level={2}>सही कदम उठाएँ (Compassionate Conclusion)</Heading>

        <Text variant="lead" className="text-brand-text">
          वजन कम करना सिर्फ इच्छाशक्ति (willpower) की बात नहीं है। यह हार्मोन्स और biology का खेल है।
        </Text>

        <Text variant="body">
          नई दवाइयाँ मदद कर सकती हैं, लेकिन सही जानकारी और डॉक्टर की सलाह सबसे ज़रूरी है।
          अपने स्वास्थ्य को प्राथमिकता दें और किसी योग्य डॉक्टर से बात करें।
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" className="shadow-xl shadow-blue-500/20">
            अपने नज़दीकी डॉक्टर को खोजें
          </Button>
          <Button variant="outline" size="lg">
            हमारे न्यूज़लेटर से जुड़ें
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
