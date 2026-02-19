"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function BMICalculator() {
  const [unit, setUnit] = useState<"cm" | "ft">("cm");
  const [weight, setWeight] = useState<string>("");
  const [heightCm, setHeightCm] = useState<string>("");
  const [heightFt, setHeightFt] = useState<string>("");
  const [heightIn, setHeightIn] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    if (!w || w <= 0) return;

    let h = 0; // height in meters

    if (unit === "cm") {
      const cm = parseFloat(heightCm);
      if (cm > 0) h = cm / 100;
    } else {
      const ft = parseFloat(heightFt || "0");
      const inc = parseFloat(heightIn || "0");
      if (ft > 0 || inc > 0) {
        h = ((ft * 30.48) + (inc * 2.54)) / 100;
      }
    }

    if (h > 0) {
      const val = w / (h * h);
      setBmi(parseFloat(val.toFixed(1)));
    }
  };

  const getStatus = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight (कम वजन)", color: "text-blue-600", bg: "bg-blue-50" };
    if (bmi < 25) return { label: "Normal (सामान्य)", color: "text-green-600", bg: "bg-green-50" };
    if (bmi < 30) return { label: "Overweight (अधिक वजन)", color: "text-orange-600", bg: "bg-orange-50" };
    return { label: "Obese (मोटापा)", color: "text-red-600", bg: "bg-red-50" };
  };

  const status = bmi ? getStatus(bmi) : null;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-xl font-bold text-center mb-6 text-brand-heading">BMI Calculator (वजन जांचें)</h3>

      <div className="flex justify-center gap-2 mb-6 bg-slate-100 p-1 rounded-lg w-fit mx-auto">
        <button
          onClick={() => setUnit("cm")}
          className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-all", unit === "cm" ? "bg-white text-brand-primary shadow-sm" : "text-slate-500 hover:text-slate-700")}
        >
          Height in CM
        </button>
        <button
          onClick={() => setUnit("ft")}
          className={cn("px-4 py-1.5 rounded-md text-sm font-medium transition-all", unit === "ft" ? "bg-white text-brand-primary shadow-sm" : "text-slate-500 hover:text-slate-700")}
        >
          Height in Ft/In
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Weight (वजन) - kg</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            placeholder="e.g. 70"
          />
        </div>

        {unit === "cm" ? (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Height (लम्बाई) - cm</label>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder="e.g. 170"
            />
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Feet</label>
              <input
                type="number"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                placeholder="5"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Inches</label>
              <input
                type="number"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                placeholder="8"
              />
            </div>
          </div>
        )}

        <Button onClick={calculateBMI} className="w-full mt-2" size="lg">
          Calculate Result
        </Button>

        {bmi && status && (
          <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={cn("inline-block px-4 py-2 rounded-lg mb-2", status.bg)}>
               <span className={cn("text-sm font-bold", status.color)}>{status.label}</span>
            </div>
            <h4 className="text-5xl font-bold text-brand-heading mb-1">{bmi}</h4>
            <p className="text-slate-400 text-xs">BMI Score</p>
          </div>
        )}
      </div>
    </div>
  );
}
