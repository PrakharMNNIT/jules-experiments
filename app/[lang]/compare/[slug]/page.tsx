import { i18n } from "@/i18n-config";
import { comparisonPairs } from "@/data/comparisons";
import { Heading } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface Props {
  params: Promise<{ slug: string; lang: Locale }>;
}

export async function generateStaticParams() {
  const params: { slug: string; lang: Locale }[] = [];
  for (const lang of i18n.locales) {
    for (const pair of comparisonPairs) {
      params.push({ slug: pair.slug, lang });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lang } = await params;
  const item = comparisonPairs.find((p) => p.slug === slug);

  if (!item) return { title: "Comparison Not Found - HealthGuide.in" };

  const title = lang === "hi"
    ? `${item.title} (Hindi) | ${item.drugA} vs ${item.drugB} Review`
    : `${item.titleEn || item.title} | ${item.drugA} vs ${item.drugB} Comparison`;

  return {
    title,
    description: `Compare ${item.drugA} and ${item.drugB}.`,
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug, lang } = await params;
  const item = comparisonPairs.find((p) => p.slug === slug);
  const dict = await getDictionary(lang);

  if (!item) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header dict={dict} lang={lang} />
        <Section className="py-20 text-center flex-1">
          <Heading level={1}>Comparison Not Found</Heading>
          <Link href={`/${lang}/compare`}>
            <Button variant="outline">Back to Comparisons</Button>
          </Link>
        </Section>
        <Footer dict={dict} lang={lang} />
      </div>
    );
  }

  // Localize content
  const content = {
    title: lang === "hi" ? item.title : (item.titleEn || item.title),
    mainDifference: lang === "hi" ? item.mainDifference : (item.mainDifferenceEn || item.mainDifference),
    conclusion: lang === "hi" ? item.conclusion : (item.conclusionEn || item.conclusion),
    comparisonPoints: item.comparisonPoints.map(p => ({
      aspect: lang === "hi" ? p.aspect : (p.aspectEn || p.aspect),
      drugA: lang === "hi" ? p.drugA : (p.drugAEn || p.drugA),
      drugB: lang === "hi" ? p.drugB : (p.drugBEn || p.drugB),
    })),
    labels: {
      expert: lang === "hi" ? "Expert Comparison" : "Expert Comparison",
      finalVerdict: lang === "hi" ? "Final Verdict (निष्कर्ष)" : "Final Verdict",
      checkEligibility: lang === "hi" ? "Check Eligibility" : "Check Eligibility",
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-background">
       <Header dict={dict} lang={lang} />

       <div className="py-4 border-b bg-white sticky top-0 z-40">
          <div className="container px-4 mx-auto max-w-4xl flex items-center gap-4">
             <Link href={`/${lang}/compare`} className="text-slate-500 hover:text-brand-primary">
                <ArrowLeft size={20} />
             </Link>
             <h1 className="text-lg font-bold text-brand-heading truncate">{content.title}</h1>
          </div>
       </div>

       <main className="flex-1 py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-12">

             {/* Header Section */}
             <div className="text-center space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-brand-primary text-sm font-bold uppercase tracking-wide">
                   {content.labels.expert}
                </span>
                <Heading level={1} className="text-3xl md:text-5xl mb-6">
                   {item.drugA} <span className="text-slate-300 mx-2">vs</span> {item.drugB}
                </Heading>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                   {content.mainDifference}
                </p>
             </div>

             {/* Side-by-Side Comparison */}
             <div className="grid md:grid-cols-2 gap-8">
                {/* Drug A */}
                <Card className="border-t-4 border-t-blue-500 bg-white shadow-lg relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      {item.drugA}
                   </div>
                   <h3 className="text-2xl font-bold text-brand-heading mb-6 pb-4 border-b">
                      {item.drugA}
                   </h3>
                   <ul className="space-y-6">
                      {content.comparisonPoints.map((point, idx) => (
                         <li key={idx}>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{point.aspect}</p>
                            <p className="text-lg font-medium text-brand-text">{point.drugA}</p>
                         </li>
                      ))}
                   </ul>
                </Card>

                {/* Drug B */}
                <Card className="border-t-4 border-t-emerald-500 bg-white shadow-lg relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      {item.drugB}
                   </div>
                   <h3 className="text-2xl font-bold text-brand-heading mb-6 pb-4 border-b">
                      {item.drugB}
                   </h3>
                   <ul className="space-y-6">
                      {content.comparisonPoints.map((point, idx) => (
                         <li key={idx}>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{point.aspect}</p>
                            <p className="text-lg font-medium text-brand-text">{point.drugB}</p>
                         </li>
                      ))}
                   </ul>
                </Card>
             </div>

             {/* Conclusion */}
             <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">{content.labels.finalVerdict}</h3>
                <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8">
                   &quot;{content.conclusion}&quot;
                </p>
                <div className="flex justify-center gap-4">
                   <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                      {content.labels.checkEligibility}
                   </Button>
                </div>
             </div>

          </div>
       </main>
       <Footer dict={dict} lang={lang} />
    </div>
  );
}
