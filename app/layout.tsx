import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-sans-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Health Blog for Parents",
  description: "Understanding weight loss medicines like Ozempic and Mounjaro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body
        className={`${notoSansDevanagari.variable} antialiased bg-brand-background text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
