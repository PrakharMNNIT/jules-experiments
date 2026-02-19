"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Brain, Utensils } from "lucide-react";

export function Section3() {
  return (
    <Section background="soft" className="py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <Heading level={2}>भूख और हार्मोन कैसे काम करते हैं?</Heading>
          <Text variant="body">
            हमारा शरीर कुछ खास हार्मोन्स के जरिए भूख और पेट भरने का signal देता है।
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <Card className="hover:shadow-lg transition-shadow bg-red-50 border-red-100">
                <h4 className="font-bold text-red-600">Ghrelin</h4>
                <p className="text-sm text-slate-600 mt-2">भूख बढ़ाने वाला हार्मोन</p>
             </Card>
             <Card className="hover:shadow-lg transition-shadow bg-green-50 border-green-100">
                <h4 className="font-bold text-green-600">Leptin</h4>
                <p className="text-sm text-slate-600 mt-2">पेट भरने का signal</p>
             </Card>
             <Card className="hover:shadow-lg transition-shadow bg-blue-50 border-blue-100">
                <h4 className="font-bold text-blue-600">Insulin</h4>
                <p className="text-sm text-slate-600 mt-2">शुगर कंट्रोल</p>
             </Card>
             <Card className="hover:shadow-lg transition-shadow bg-brand-background border-brand-primary">
                <h4 className="font-bold text-brand-primary">GLP-1</h4>
                <p className="text-sm text-slate-600 mt-2">खाने के बाद पेट भरने का संदेश</p>
             </Card>
          </div>

          <Card className="bg-white border-slate-100">
             <h3 className="text-xl font-bold text-brand-heading mb-6 text-center">GLP-1 क्या है और कैसे काम करता है?</h3>
             <div className="flex flex-col items-center gap-6 py-4 relative">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                     <Utensils className="text-orange-500" />
                   </div>
                   <div className="text-sm font-medium">Gut (पेट)</div>
                </div>

                <motion.div
                  className="h-16 w-1 bg-brand-primary rounded-full relative overflow-hidden"
                >
                   <motion.div
                     className="absolute w-full bg-white opacity-50 h-4 rounded-full top-0"
                     animate={{ top: ["0%", "100%"] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   />
                </motion.div>

                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                     <Brain className="text-purple-500" />
                   </div>
                   <div className="text-sm font-medium">Brain (दिमाग)</div>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 max-w-[120px] text-right">
                   GLP-1 sends &quot;Full&quot; signal
                </div>
             </div>
             <p className="text-sm text-center text-slate-600 px-4 mt-4">
               “GLP-1 पेट से दिमाग को signal देता है कि पेट भर गया है।”
             </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
