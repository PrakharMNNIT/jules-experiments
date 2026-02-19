import { calculatorGroups } from "@/data/calculators";
import { Heading, Text } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import { BMICalculator } from "@/components/features/BMICalculator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface Props {
  params: Promise<{ group: string }>;
}

export async function generateStaticParams() {
  return calculatorGroups.map((group) => ({
    group: group.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params;
  const item = calculatorGroups.find((g) => g.slug === group);

  if (!item) return { title: "Calculator Not Found - HealthGuide.in" };

  return {
    title: `${item.title} (Hindi) | Free Health Tool`,
    description: `Check your BMI using our specialized calculator for ${item.title}. Get personalized tips for your health in simple Hindi.`,
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { group } = await params;
  const item = calculatorGroups.find((g) => g.slug === group);

  if (!item) {
    return (
      <Section className="py-20 text-center">
        <Heading level={1}>Calculator Not Found</Heading>
        <Link href="/">
          <Button variant="outline">Back Home</Button>
        </Link>
      </Section>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-background">
       <Header />
       <main className="flex-1 py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-12">

             {/* Header Section */}
             <div className="text-center space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-wide">
                   Health Tool
                </span>
                <Heading level={1} className="text-3xl md:text-5xl mb-6">
                   {item.title}
                </Heading>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                   {item.hindiTitle}: {item.description}
                </p>
             </div>

             {/* Calculator & Tips */}
             <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Calculator Component */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                   <BMICalculator />
                </div>

                {/* Specific Tips for Group */}
                <div className="space-y-8">
                   <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                      <h3 className="font-bold text-2xl text-amber-900 mb-6">
                         Health Tips for You
                      </h3>
                      <ul className="space-y-4">
                         {item.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                               <CheckCircle2 className="text-amber-600 shrink-0 mt-1" />
                               <span className="text-lg text-amber-900 font-medium leading-relaxed">
                                  {tip}
                               </span>
                            </li>
                         ))}
                      </ul>
                   </div>

                   <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
                      <h3 className="font-bold text-lg text-blue-900 mb-2">
                         Why BMI matters?
                      </h3>
                      <p className="text-blue-800 leading-relaxed">
                         BMI helps you understand if your weight is putting you at risk for lifestyle diseases like Diabetes and Hypertension.
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </main>
       <Footer />
    </div>
  );
}
