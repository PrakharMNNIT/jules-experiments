"use client";

import React, { useState } from "react";
import { Stethoscope, Heart, Github, Twitter, Coffee, QrCode, Copy, Check } from "lucide-react";
import { Dictionary } from "@/dictionaries/definition";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export function Footer({ dict, lang }: FooterProps) {
  const [showUPI, setShowUPI] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('praxlannister@upi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full border-t bg-slate-50 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container px-4 md:px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-xl text-brand-heading">
            <Stethoscope className="h-6 w-6" />
            <span>{dict.common.title}</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs">
            {dict.common.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-brand-heading">Explore</h3>
            <a href={`/${lang}/glossary`} className="text-sm text-slate-500 hover:text-brand-primary">{dict.nav.glossary}</a>
            <a href={`/${lang}/compare`} className="text-sm text-slate-500 hover:text-brand-primary">{dict.nav.compare}</a>
            <a href={`/${lang}/calculator/parents`} className="text-sm text-slate-500 hover:text-brand-primary">{dict.nav.bmi}</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-brand-heading">Resources</h3>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">FDA Guidelines</a>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">WHO Obesity</a>
            <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">ICMR Data</a>
          </div>
        </div>
      </div>

      {/* Developer Footer Section */}
      <div className="container px-4 md:px-6 max-w-6xl mx-auto border-t border-slate-200 pt-8">
        <div className="flex flex-col items-center gap-6">

          {/* Developer Credits & Socials */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-slate-500 flex-wrap text-center">
            <span className="flex items-center gap-1.5">
              Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by
              <a
                href="https://prax-portfolio-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-blue-600 transition-colors font-semibold"
              >
                Prax Lannister
              </a>
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <div className="flex items-center gap-4">
              <span>Follow me on</span>
              <a href="https://github.com/PrakharMNNIT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Github size={14} /> GitHub
              </a>
              <span className="text-slate-300">&</span>
              <a href="https://x.com/ByteByByteSrSDE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Twitter size={14} /> X (Twitter)
              </a>
            </div>
          </div>

          {/* Support Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full">
            <a
              href="https://ko-fi.com/praxlannister?ref=webapp_footer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#FF5E5B] text-white rounded-full font-medium hover:bg-[#ff4542] transition-all shadow-lg hover:shadow-red-500/20 flex items-center gap-2 text-sm group"
            >
              <Coffee size={16} className="group-hover:rotate-12 transition-transform" /> Support via Ko-fi
            </a>
            <button
              onClick={() => setShowUPI(!showUPI)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all border flex items-center gap-2 text-sm ${showUPI ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <QrCode size={16} /> In India? Use UPI
            </button>
          </div>

          {/* UPI Dropdown */}
          <AnimatePresence>
            {showUPI && (
              <motion.div
                initial={{ height: 0, opacity: 0, scale: 0.95 }}
                animate={{ height: "auto", opacity: 1, scale: 1 }}
                exit={{ height: 0, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden w-full max-w-sm"
              >
                <div className="mt-2 p-6 bg-white rounded-2xl text-slate-900 shadow-xl border border-slate-100 mx-auto text-center relative z-10">
                  <p className="font-bold text-lg mb-1 text-brand-heading">Support via UPI</p>
                  <p className="text-slate-500 text-sm mb-6">Scan using any UPI app (GPay, PhonePe, Paytm)</p>

                  {/* Generated QR Code Placeholder */}
                  <div className="w-48 h-48 bg-white mx-auto rounded-xl flex items-center justify-center border-2 border-slate-100 mb-6 relative overflow-hidden group shadow-inner p-2">
                     {/*
                        In a real scenario, you'd use a library like 'qrcode.react' to generate this.
                        For now, we simulate a QR code visually or load an image if provided.
                     */}
                     <div className="w-full h-full bg-slate-900 mask-qr-code flex items-center justify-center text-white text-xs">
                        <QrCode size={120} className="text-slate-800 opacity-20" />
                        <span className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs font-mono">
                           praxlannister@upi
                        </span>
                     </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg flex items-center justify-between gap-3 border border-slate-200 group hover:border-brand-primary/50 transition-colors">
                    <div className="flex flex-col items-start">
                       <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">UPI ID</span>
                       <code className="text-sm font-mono text-slate-700 font-semibold select-all">praxlannister@upi</code>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="h-8 w-8 flex items-center justify-center bg-white rounded border border-slate-200 hover:bg-brand-background hover:text-brand-primary hover:border-brand-primary/30 transition-all text-slate-500"
                      title="Copy UPI ID"
                    >
                      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-xs text-slate-400 mt-8">
            <p>{dict.common.disclaimer}</p>
            <p className="mt-1">{dict.common.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
