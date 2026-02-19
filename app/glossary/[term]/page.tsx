import { glossaryTerms } from "@/data/glossary";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    term: term.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term } = await params;
  const item = glossaryTerms.find((t) => t.slug === term);

  if (!item) {
    return {
      title: "Term Not Found - HealthGuide.in",
    };
  }

  return {
    title: `What is ${item.term}? Meaning in Hindi | HealthGuide.in`,
    description: `Understand the meaning of ${item.term} (${item.hindiTerm}) in simple Hindi. Learn why it matters for your health.`,
  };
}

export default async function GlossaryPage({ params }: Props) {
  const { term } = await params;
  const item = glossaryTerms.find((t) => t.slug === term);

  if (!item) {
    return (
      <Section className="py-20 text-center">
        <Heading level={1}>Term Not Found</Heading>
        <Link href="/glossary">
          <Button variant="outline">Back to Glossary</Button>
        </Link>
      </Section>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
       <header className="py-6 border-b bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
             <Link href="/glossary" className="text-slate-500 hover:text-brand-primary flex items-center gap-2 mb-2 text-sm font-medium">
                <ArrowLeft size={16} />
                Back to Glossary
             </Link>
          </div>
       </header>

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
                      <Heading level={1} className="mb-2">{item.term}</Heading>
                      <h2 className="text-2xl text-slate-500 font-medium">{item.hindiTerm}</h2>
                   </div>

                   <div className="p-8 space-y-8">
                      <div>
                         <h3 className="text-lg font-bold text-brand-heading mb-3">Definition (परिभाषा)</h3>
                         <p className="text-xl leading-relaxed text-brand-text">
                            {item.definition}
                         </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                         <Card className="bg-slate-50 border-slate-200 h-full">
                            <h4 className="font-bold text-brand-heading mb-3 flex items-center gap-2">
                               Key Details
                            </h4>
                            <ul className="space-y-2">
                               {item.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                                     {detail}
                                  </li>
                               ))}
                            </ul>
                         </Card>

                         <Card className="bg-amber-50 border-amber-100 h-full">
                            <h4 className="font-bold text-amber-800 mb-3">Why it matters?</h4>
                            <p className="text-sm text-amber-900 leading-relaxed">
                               {item.importance}
                            </p>
                         </Card>
                      </div>
                   </div>
                </div>

                <div className="mt-12 text-center">
                   <h3 className="text-xl font-bold text-brand-heading mb-6">Explore More Terms</h3>
                   <div className="flex flex-wrap justify-center gap-3">
                      {glossaryTerms.filter(t => t.slug !== item.slug).map((t) => (
                         <Link key={t.slug} href={`/glossary/${t.slug}`}>
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
    </div>
  );
}
