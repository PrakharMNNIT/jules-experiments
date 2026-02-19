"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { IndianRupee, Clock, ShieldAlert } from "lucide-react";

export function Section8() {
  return (
    <Section background="white" className="py-20">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        <div className="text-center">
          <Heading level={2}>भारत में खर्च और सोच</Heading>
          <Text variant="body">
            ये दवाइयाँ सस्ती नहीं हैं और इन्हें लंबे समय तक लेना पड़ सकता है।
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center text-center p-8 bg-slate-50 border-slate-200">
             <div className="bg-orange-100 p-4 rounded-full mb-6">
               <IndianRupee className="h-8 w-8 text-orange-600" />
             </div>
             <h3 className="font-bold text-lg mb-2">महंगी दवाइयाँ</h3>
             <p className="text-sm text-slate-600">
               महीने का खर्च ₹15,000 - ₹25,000+ हो सकता है (ब्रांड और डोज़ पर निर्भर)।
             </p>
          </Card>

          <Card className="flex flex-col items-center text-center p-8 bg-slate-50 border-slate-200">
             <div className="bg-blue-100 p-4 rounded-full mb-6">
               <Clock className="h-8 w-8 text-blue-600" />
             </div>
             <h3 className="font-bold text-lg mb-2">लंबे समय तक</h3>
             <p className="text-sm text-slate-600">
               यह कोई 1 महीने का कोर्स नहीं है। इसे डॉक्टर की सलाह पर कई महीनों या सालों तक लेना पड़ सकता है।
             </p>
          </Card>

          <Card className="flex flex-col items-center text-center p-8 bg-slate-50 border-slate-200">
             <div className="bg-red-100 p-4 rounded-full mb-6">
               <ShieldAlert className="h-8 w-8 text-red-600" />
             </div>
             <h3 className="font-bold text-lg mb-2">बीमा (Insurance)</h3>
             <p className="text-sm text-slate-600">
               भारत में अभी अधिकतर हेल्थ इंश्योरेंस मोटापे की दवाइयों का खर्च नहीं उठाते।
             </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
