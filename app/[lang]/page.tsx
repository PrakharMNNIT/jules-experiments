import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section2 } from "@/components/sections/Section2";
import { Section3 } from "@/components/sections/Section3";
import { Section4 } from "@/components/sections/Section4";
import { Section5 } from "@/components/sections/Section5";
import { Section6 } from "@/components/sections/Section6";
import { Section7 } from "@/components/sections/Section7";
import { Section8 } from "@/components/sections/Section8";
import { Section9 } from "@/components/sections/Section9";
import { Section10 } from "@/components/sections/Section10";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateStaticParams() {
  return [{ lang: "hi" }, { lang: "en" }];
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dict={dict} lang={lang} />
      <main className="flex-1">
        <HeroSection dict={dict} />
        <Section2 dict={dict} />
        <Section3 dict={dict} />
        <Section4 dict={dict} />
        <Section5 dict={dict} />
        <Section6 dict={dict} />
        <Section7 dict={dict} />
        <Section8 dict={dict} />
        <Section9 dict={dict} />
        <Section10 dict={dict} />
      </main>
      <Footer dict={dict} lang={lang} />
    </div>
  );
}
