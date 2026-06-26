"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";

interface Section10Props {
  dict: Dictionary;
}

export function Section10({ dict }: Section10Props) {
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

        <Heading level={2}>{dict.section10.title}</Heading>

        <Text variant="lead" className="text-brand-text">
          {dict.section10.lead}
        </Text>

        <Text variant="body">
          {dict.section10.body}
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" className="shadow-xl shadow-blue-500/20">
            {dict.section10.ctaDoctor}
          </Button>
          <Button variant="outline" size="lg">
            {dict.section10.ctaNewsletter}
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
