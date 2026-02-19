"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function BMICalculator() {
  const [heightUnit, setHeightUnit] = useState<"cm" | "ft">("cm");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");

  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [heightCm, setHeightCm] = useState<string>("");
  const [heightFt, setHeightFt] = useState<string>("");
  const [heightIn, setHeightIn] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    let w = parseFloat(weight);
    if (!w || w <= 0) return;

    // Convert lbs to kg if needed
    if (weightUnit === "lbs") {
      w = w * 0.453592;
    }

    let h = 0; // height in meters

    if (heightUnit === "cm") {
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

      {/* Age Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">Age (उम्र)</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
          placeholder="e.g. 50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Weight Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-1">
             <label className="block text-sm font-medium text-slate-700">Weight</label>
             <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setWeightUnit("kg")}
                  className={cn("px-2 py-0.5 text-xs font-medium rounded transition-all", weightUnit === "kg" ? "bg-white shadow-sm text-brand-primary" : "text-slate-500")}
                >
                  KG
                </button>
                <button
                  onClick={() => setWeightUnit("lbs")}
                  className={cn("px-2 py-0.5 text-xs font-medium rounded transition-all", weightUnit === "lbs" ? "bg-white shadow-sm text-brand-primary" : "text-slate-500")}
                >
                  LBS
                </button>
             </div>
          </div>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            placeholder={weightUnit === "kg" ? "e.g. 70" : "e.g. 154"}
          />
        </div>

        {/* Height Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-1">
             <label className="block text-sm font-medium text-slate-700">Height</label>
             <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => setHeightUnit("cm")}
                  className={cn("px-2 py-0.5 text-xs font-medium rounded transition-all", heightUnit === "cm" ? "bg-white shadow-sm text-brand-primary" : "text-slate-500")}
                >
                  CM
                </button>
                <button
                  onClick={() => setHeightUnit("ft")}
                  className={cn("px-2 py-0.5 text-xs font-medium rounded transition-all", heightUnit === "ft" ? "bg-white shadow-sm text-brand-primary" : "text-slate-500")}
                >
                  FT
                </button>
             </div>
          </div>

          {heightUnit === "cm" ? (
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder="e.g. 170"
            />
          ) : (
            <div className="flex gap-2">
              <input
                type="number"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                placeholder="5'"
              />
              <input
                type="number"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                placeholder='8"'
              />
            </div>
          )}
        </div>
      </div>

      <Button onClick={calculateBMI} className="w-full mt-6" size="lg">
        Calculate Result
      </Button>

      {bmi && status && (
        <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-100 pt-6">
          <div className={cn("inline-block px-4 py-2 rounded-lg mb-2", status.bg)}>
             <span className={cn("text-sm font-bold", status.color)}>{status.label}</span>
          </div>
          <h4 className="text-5xl font-bold text-brand-heading mb-1">{bmi}</h4>
          <p className="text-slate-400 text-xs">BMI Score {age ? `(Age: ${age})` : ""}</p>
        </div>
      )}
    </div>
  );
}
