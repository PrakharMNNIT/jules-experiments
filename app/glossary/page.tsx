import { glossaryTerms } from "@/data/glossary";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function GlossaryIndex() {
  return (
    <div className="flex flex-col min-h-screen">
       <Header />
       <main className="flex-1 bg-brand-background">
          <Section className="py-20 text-center">
             <div className="max-w-3xl mx-auto">
                <Heading level={1}>Medical Glossary (शब्दावली)</Heading>
                <Text className="text-xl text-slate-500 mb-12">
                   स्वास्थ्य से जुड़े मुश्किल शब्दों का आसान हिंदी मतलब जानें।
                </Text>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                   {glossaryTerms.map((term) => (
                      <Link key={term.slug} href={`/glossary/${term.slug}`} className="group">
                         <Card className="hover:shadow-lg transition-all h-full border-l-4 border-l-brand-primary/20 hover:border-l-brand-primary">
                            <div className="flex justify-between items-start">
                               <div>
                                  <h3 className="font-bold text-lg text-brand-heading group-hover:text-brand-primary transition-colors">
                                     {term.term}
                                  </h3>
                                  <p className="text-sm text-slate-500 mt-1">{term.hindiTerm}</p>
                               </div>
                               <ArrowRight className="text-slate-300 group-hover:text-brand-primary transition-colors" />
                            </div>
                            <p className="text-sm text-slate-600 mt-4 line-clamp-2">
                               {term.definition}
                            </p>
                         </Card>
                      </Link>
                   ))}
                </div>
             </div>
          </Section>
       </main>
       <Footer />
    </div>
  );
}
