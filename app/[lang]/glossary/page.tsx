import { glossaryTerms } from "@/data/glossary";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

interface Props {
  params: Promise<{ lang: Locale }>;
}

export async function generateStaticParams() {
  return [{ lang: "hi" }, { lang: "en" }];
}

export default async function GlossaryIndex({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const labels = {
    title: lang === "hi" ? "Medical Glossary (शब्दावली)" : "Medical Glossary",
    subtitle: lang === "hi" ? "स्वास्थ्य से जुड़े मुश्किल शब्दों का आसान हिंदी मतलब जानें।" : "Learn the meaning of complex medical terms in simple language.",
    readMore: lang === "hi" ? "Read Definition" : "Read Definition",
    tapToRead: lang === "hi" ? "Tap to read" : "Tap to read"
  };

  return (
    <div className="flex flex-col min-h-screen">
       <Header dict={dict} lang={lang} />
       <main className="flex-1 bg-brand-background">
          <Section className="py-20 text-center">
             <div className="max-w-3xl mx-auto">
                <Heading level={1}>{labels.title}</Heading>
                <Text className="text-xl text-slate-500 mb-12">
                   {labels.subtitle}
                </Text>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                   {glossaryTerms.map((term) => (
                      <Link key={term.slug} href={`/${lang}/glossary/${term.slug}`} className="group">
                         <Card className="hover:shadow-lg transition-all h-full border-l-4 border-l-brand-primary/20 hover:border-l-brand-primary">
                            <div className="flex justify-between items-start">
                               <div>
                                  <h3 className="font-bold text-lg text-brand-heading group-hover:text-brand-primary transition-colors">
                                     {term.term}
                                  </h3>
                                  {lang === "hi" && <p className="text-sm text-slate-500 mt-1">{term.hindiTerm}</p>}
                               </div>
                               <ArrowRight className="text-slate-300 group-hover:text-brand-primary transition-colors" />
                            </div>
                            <p className="text-sm text-slate-600 mt-4 line-clamp-2">
                               {lang === "hi" ? term.definition : (term.definitionEn || term.definition)}
                            </p>
                         </Card>
                      </Link>
                   ))}
                </div>
             </div>
          </Section>
       </main>
       <Footer dict={dict} lang={lang} />
    </div>
  );
}
