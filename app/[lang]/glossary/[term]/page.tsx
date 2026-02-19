import { i18n } from "@/i18n-config";
import { glossaryTerms } from "@/data/glossary";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface Props {
  params: Promise<{ term: string; lang: Locale }>;
}

export async function generateStaticParams() {
  const params: { term: string; lang: Locale }[] = [];
  for (const lang of i18n.locales) {
    for (const term of glossaryTerms) {
      params.push({ term: term.slug, lang });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term, lang } = await params;
  const item = glossaryTerms.find((t) => t.slug === term);

  if (!item) {
    return {
      title: "Term Not Found - HealthGuide.in",
    };
  }

  // Simple localized metadata
  const title = lang === "hi"
    ? `${item.term} क्या है? (What is ${item.term}?) | HealthGuide.in`
    : `What is ${item.term}? Definition & Meaning | HealthGuide.in`;

  const description = lang === "hi"
    ? `${item.term} का हिंदी अर्थ जानें। ${item.definition}`
    : `Understand the meaning of ${item.term}. ${item.definitionEn || item.definition}`;

  return {
    title,
    description,
  };
}

export default async function GlossaryPage({ params }: Props) {
  const { term, lang } = await params;
  const item = glossaryTerms.find((t) => t.slug === term);
  const dict = await getDictionary(lang);

  if (!item) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header dict={dict} lang={lang} />
        <Section className="py-20 text-center flex-1">
          <Heading level={1}>Term Not Found</Heading>
          <Link href={`/${lang}/glossary`}>
            <Button variant="outline">Back to Glossary</Button>
          </Link>
        </Section>
        <Footer dict={dict} lang={lang} />
      </div>
    );
  }

  // Choose content based on language
  // Note: For a full production app, we should move all glossary content to i18n JSONs or separate data files.
  // For now, I'll fallback to Hindi data or add simple English support if available in data,
  // or just render the Hindi data (as the request was primarily for Hindi blog, but now adding English wrapper).

  // Let's assume for this step we render the data we have.
  // If we want full English glossary content, we need to update data/glossary.ts to have english fields.
  // I will update data/glossary.ts in the next action to support this.

  const content = {
    term: item.term,
    subTerm: lang === "hi" ? item.hindiTerm : "",
    definition: lang === "hi" ? item.definition : (item.definitionEn || item.definition), // Fallback
    details: lang === "hi" ? item.details : (item.detailsEn || item.details),
    importance: lang === "hi" ? item.importance : (item.importanceEn || item.importance),
    labels: {
      definition: lang === "hi" ? "Definition (परिभाषा)" : "Definition",
      keyDetails: lang === "hi" ? "Key Details" : "Key Details",
      importance: lang === "hi" ? "Why it matters?" : "Why it matters?",
      explore: lang === "hi" ? "Explore More Terms" : "Explore More Terms",
      back: lang === "hi" ? "Back to Glossary" : "Back to Glossary"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
       <Header dict={dict} lang={lang} />

       <div className="py-4 border-b bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
             <Link href={`/${lang}/glossary`} className="text-slate-500 hover:text-brand-primary flex items-center gap-2 text-sm font-medium">
                <ArrowLeft size={16} />
                {content.labels.back}
             </Link>
          </div>
       </div>

       <main className="flex-1 bg-brand-background">
          <Section className="py-12">
             <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                   <div className="bg-blue-50/50 p-8 border-b border-blue-100">
                      <div className="flex items-center gap-3 mb-4">
                         <div className="bg-white p-2 rounded-lg shadow-sm text-brand-primary">
                            <BookOpen size={24} />
                         </div>
                         <span className="text-sm font-bold tracking-wider text-brand-primary uppercase">Health Term</span>
                      </div>
                      <Heading level={1} className="mb-2">{content.term}</Heading>
                      {content.subTerm && <h2 className="text-2xl text-slate-500 font-medium">{content.subTerm}</h2>}
                   </div>

                   <div className="p-8 space-y-8">
                      <div>
                         <h3 className="text-lg font-bold text-brand-heading mb-3">{content.labels.definition}</h3>
                         <p className="text-xl leading-relaxed text-brand-text">
                            {content.definition}
                         </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                         <Card className="bg-slate-50 border-slate-200 h-full">
                            <h4 className="font-bold text-brand-heading mb-3 flex items-center gap-2">
                               {content.labels.keyDetails}
                            </h4>
                            <ul className="space-y-2">
                               {content.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                                     {detail}
                                  </li>
                               ))}
                            </ul>
                         </Card>

                         <Card className="bg-amber-50 border-amber-100 h-full">
                            <h4 className="font-bold text-amber-800 mb-3">{content.labels.importance}</h4>
                            <p className="text-sm text-amber-900 leading-relaxed">
                               {content.importance}
                            </p>
                         </Card>
                      </div>
                   </div>
                </div>

                <div className="mt-12 text-center">
                   <h3 className="text-xl font-bold text-brand-heading mb-6">{content.labels.explore}</h3>
                   <div className="flex flex-wrap justify-center gap-3">
                      {glossaryTerms.filter(t => t.slug !== item.slug).map((t) => (
                         <Link key={t.slug} href={`/${lang}/glossary/${t.slug}`}>
                            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-brand-primary hover:text-brand-primary transition-colors">
                               {t.term}
                            </span>
                         </Link>
                      ))}
                   </div>
                </div>
             </div>
          </Section>
       </main>
       <Footer dict={dict} lang={lang} />
    </div>
  );
}
