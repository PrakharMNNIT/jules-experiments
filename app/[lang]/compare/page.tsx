import { comparisonPairs } from "@/data/comparisons";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
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

export default async function CompareIndex({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const labels = {
    title: lang === "hi" ? "Drug Comparisons (तुलना)" : "Drug Comparisons",
    subtitle: lang === "hi" ? "सही दवा चुनने से पहले जानें उनमें क्या अंतर है।" : "Understand the difference before choosing a medicine.",
    readFull: lang === "hi" ? "Read Full Comparison" : "Read Full Comparison"
  };

  return (
    <div className="flex flex-col min-h-screen">
       <Header dict={dict} lang={lang} />
       <main className="flex-1 bg-brand-background">
          <Section className="py-20 text-center">
             <div className="max-w-4xl mx-auto">
                <Heading level={1}>{labels.title}</Heading>
                <Text className="text-xl text-slate-500 mb-12">
                   {labels.subtitle}
                </Text>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                   {comparisonPairs.map((pair) => (
                      <Link key={pair.slug} href={`/${lang}/compare/${pair.slug}`} className="group">
                         <Card className="hover:shadow-xl transition-all h-full bg-white border-none shadow-md overflow-hidden relative">
                            <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 px-3 py-1 text-xs font-bold rounded-bl-lg">
                               Analysis
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                  <Scale size={20} />
                               </div>
                               <div>
                                  <h3 className="font-bold text-xl text-brand-heading">
                                     {pair.drugA} <span className="text-slate-400 font-normal text-sm">vs</span> {pair.drugB}
                                  </h3>
                               </div>
                            </div>
                            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                               {lang === "hi" ? pair.mainDifference : (pair.mainDifferenceEn || pair.mainDifference)}
                            </p>
                            <div className="mt-4 flex items-center text-sm font-medium text-brand-primary group-hover:underline">
                               {labels.readFull} <ArrowRight size={16} className="ml-1" />
                            </div>
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
